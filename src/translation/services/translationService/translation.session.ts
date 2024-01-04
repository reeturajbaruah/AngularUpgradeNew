import { ElementRef, NgZone } from '@angular/core';
import {
    getInlinePartials, getEnclosedBlocks,
    getTextNodes, copyPartials,
    toDocumentFragment, SimpleNode,
    getRootNode, getParentWithStyle
} from './node.utility';

import { escape } from 'lodash';
import { wait } from 'common/utilities/promisify';

interface SessionNodeData {
    sourceContent: string;
    translatedContent: string;
    isDirty: boolean;
    isNew: boolean;
}

export interface SimpleMutation {
    node: Node;
    newValue: string;
}

export type TranslatorFunc = ((languageCode: string, content: string[]) => Promise<string[]>);
export type LoggingFunc = (msg) => Promise<void>;

export abstract class TranslationSession {
    abstract start(targetLanguageCode: string, isRtl: boolean);
    abstract end();
}

//super important! How the MO works with async calls!
//if an asynchronous call is made within the mutation observer's callback,
//the code afterwards will be add to the event queue, meaning DOM changes
//can and likely will begin again. Two mechanisms were added here to
//prevent that.
//1: waitMode - forces any mutations to be added to a mutation queue and handled
//at the next available time while async calls finish.
//2: takeLeftOvers - before and after performing an async call, this method will
//check if any dom changes happened while away, and queue those mutations for the
//next available time

export class TranslationSessionImplemented extends TranslationSession {

    //any node that will have it's content translated will be tracked here
    public trackedTextNodes: WeakMap<Node, SessionNodeData>;

    private isTargetLanguageRtl = false;
    public targetLanguageCode: string;
    public baseNode: Node;
    public mutationObserver: MutationObserver;
    private translate: TranslatorFunc;

    public mutationQueue: SimpleMutation[];
    public isWaiting: boolean;
    private readonly directionRtl = 'rtl';
    private readonly unicodeBidiIsolate = 'isolate';

    private defaultLanguage = 'english';

    constructor(translator: TranslatorFunc, private log, rootNode: ElementRef,
        private ngZone: NgZone, private window: Window) {
        super();
        this.translate = translator;
        this.baseNode = rootNode.nativeElement;
        this.mutationQueue = [];
    }

    createMutationObserver() {
        const that = this;

        return new MutationObserver(
            (mutationList) => that.mutationObserverCallback(mutationList)
        );
    }

    start(targetLanguageCode: string, isRtl: boolean) {

        if (this.trackedTextNodes || targetLanguageCode.toLowerCase() === this.defaultLanguage) {
            return;
        }

        this.trackedTextNodes = new WeakMap<Node, SessionNodeData>();        
        this.targetLanguageCode = targetLanguageCode;
        this.isTargetLanguageRtl = isRtl;

        this.ngZone.runOutsideAngular(() => {

            this.mutationObserver = this.createMutationObserver();

            const list = this.processBlockNodes([this.baseNode]);
            if (list.length) {
                this.waitMode(() => this.translateNodes(list));
            }

            this.mutationObserver.observe(this.baseNode, {
                characterData: true,
                subtree: true,
                childList: true
            });

        });
    }

    end() {

        if (!this.trackedTextNodes) {
            return;
        }

        this.ngZone.runOutsideAngular(() => {

            this.mutationObserver.disconnect();
            getTextNodes(this.baseNode).forEach(node => {
                const sessionData = this.tryTrackNode(node);
                node.nodeValue = sessionData.sourceContent;
                const parentElement = getParentWithStyle(node);
                if (this.isTargetLanguageRtl && parentElement && parentElement.style.direction === this.directionRtl) {
                    parentElement.style.direction = '';
                    parentElement.style.unicodeBidi = '';
                }
                this.trackedTextNodes.delete(node);
            });
            this.trackedTextNodes = null;

        });
        
    }

    alreadyTranslated(sessionData: SessionNodeData, newValue: string) {
        return (!sessionData.isNew && (sessionData.translatedContent || '').trim() === (newValue || '').trim());
    }

    waitMode(action?: (() => Promise<any>)): Promise<void> {

        this.isWaiting = true;
        return Promise.all([(action ? action() : wait(0)), wait(500)])
            .catch(e => this.log(`${e}\n${e && e.stack}`))
            .finally(() => {
                
                if (this.mutationQueue.length > 0) {
                    const currentMutationQueue = this.mutationQueue;
                    this.mutationQueue = [];

                    //ensures we should process any outstanding mutations
                    //only if we haven't ended the session yet
                    if (this.trackedTextNodes) {
                        this.processMutations(currentMutationQueue);
                    }
                    
                } else {
                    this.isWaiting = false;
                }
                
            });
    }

    isBadTextNode(node: Node) {
        //no angular brackets, must have english alpha numeric content
        return /\{\{[^\{\}]+\}\}/.exec(node.nodeValue) || !/[a-zA-Z0-9\.!?]/.exec(node.nodeValue) || node.nodeValue === '' ;
    }

    tryQueue(mutationList: MutationRecord[]) {
        const flatened = mutationList
            .reduce((acc, { type, addedNodes, target }) =>
                type === 'childList' && addedNodes && addedNodes.length > 0
                    ? [...acc, ...Array.from(addedNodes)]
                    : type === 'characterData' && target.nodeType === Node.TEXT_NODE && !this.isBadTextNode(target)
                        ? [...acc, target]
                        : acc,
                [] as Node[])
            .map(node => ({ node, newValue: node.nodeValue } as SimpleMutation));

        this.mutationQueue = this.mutationQueue.concat(flatened);        
    }

    trackNodeForTranslation(node: Node, newValue: string): boolean {
        if (this.isBadTextNode(node)) {
            return false;
        }

        const sessionData = this.tryTrackNode(node);
        if (this.alreadyTranslated(sessionData, newValue)) {
            return false;
        }

        sessionData.sourceContent = newValue;
        sessionData.isDirty = true;
        return true;
    }

    getMutatedTextNodes(mutatedInlineNodes: SimpleMutation[]) {

        return [...mutatedInlineNodes
            .filter(({ node }) => getRootNode(node).nodeName === '#document')//nodes still part of document            
            .reduce((acc, curr) => {
                acc.set(curr.node, curr.newValue); //keep the newest value
                return acc;
            }, new Map<Node, string>())
            .entries()]
            .filter(([node, newValue]) => this.trackNodeForTranslation(node, newValue)) //nodes which should be tracked
            .map(([node]) => node);
    }
        
    mutationObserverCallback(mutationList: MutationRecord[]) {

        this.tryQueue(mutationList);

        if (!this.isWaiting) {
            this.waitMode();
        }
    };

    processMutations(mutations: SimpleMutation[]) {

        const textNodes = this.getMutatedTextNodes(mutations);

        if (textNodes.length === 0) {
            return this.waitMode();
        }
        const blocks = getEnclosedBlocks(this.baseNode, textNodes);
        const list = this.processBlockNodes(blocks);
        if (list.length) {
            return this.waitMode(() => this.translateNodes(list));
        } else {
            return this.waitMode();
        }

    }

    tryTrackNode(node: Node) {
        if (this.trackedTextNodes.has(node)) {
            return this.trackedTextNodes.get(node);
        } else {
            const data = {
                isDirty: false,
                isNew: true,
                sourceContent: node.nodeValue,
                translatedContent: null
            } as SessionNodeData;

            this.trackedTextNodes.set(node, data);
            return data;
        }        
    }

    takeLeftOvers() {
        return this.mutationObserver.takeRecords();
    }

    getParentDirection(node: Node) {
        if (!this.isTargetLanguageRtl) {
            return {};
        }

        const parentElement = getParentWithStyle(node);

        if (!(parentElement &&
            parentElement.hasAttribute &&
            parentElement.style)) {
            return {};
        }

        const parentDirection = parentElement.hasAttribute('nortl') ? '' : this.directionRtl;

        const shouldParentBeLeftAligned = parentDirection &&
            ['start', 'left'].includes(this.window
                .getComputedStyle(parentElement)
                .getPropertyValue('text-align'));

        const parentTextAlign = shouldParentBeLeftAligned ? 'left' : parentElement.style.textAlign;

        return { parentElement, parentDirection, parentTextAlign };
    } 

    async translateNodes(partialCollection: SimpleNode[][]) {
        
        const { source, content } = partialCollection.reduce((acc, inlinePartial) => {

            const text = this.getSourceHtmlStringFromPartial(inlinePartial);
            if (text.trim() !== '') {
                acc.source.push(inlinePartial);
                acc.content.push(text);
            }

            return acc;
        }, { source: [] as SimpleNode[][], content: [] as string[] });

        const translations = await this.translate(this.targetLanguageCode, content);

        const leftOverMutations = this.takeLeftOvers();
        this.tryQueue(leftOverMutations);

        const combined = translations
            .map(x => `<div>${x}</div>`)
            .join('');

        toDocumentFragment(combined)
            .childNodes.forEach((divWrapped, index) => {
            const inlinePartialDestination = source[index];
            
            const inlinePartialSource = getInlinePartials(divWrapped)[0];
            const { errored, logs } = copyPartials(inlinePartialSource, inlinePartialDestination);
            
            if (logs.length) {

                this.log(`Errored ${errored}\n${logs.join('\n')}`);
            }

            inlinePartialDestination
                .filter(simpleNode => simpleNode.leafs)
                .reduce((acc, simpleNode) => [...acc, ...simpleNode.leafs], [] as Node[])
                .forEach(node => {
                    const sessionData = this.tryTrackNode(node);
                    sessionData.isDirty = false;
                    sessionData.isNew = false;
                    
                    if (errored) {//restore
                        node.nodeValue = sessionData.sourceContent;
                        sessionData.translatedContent = null;
                    } else {
                        const { parentElement, parentDirection, parentTextAlign } = this.getParentDirection(node);
                        if (parentElement && parentDirection) {
                            parentElement.style.direction = parentDirection;
                            parentElement.style.textAlign = parentTextAlign;
                            parentElement.style.unicodeBidi = this.unicodeBidiIsolate;
                        }

                        sessionData.translatedContent = node.nodeValue;
                    }
                });
        });

        //dump any changes that occured
        this.takeLeftOvers();
    }

    getSourceHtmlStringFromPartial(inlinePartial: SimpleNode[]): string {

        const html = inlinePartial.map(simpleNode => {
            if (simpleNode.leafs) {
                const content = simpleNode.leafs
                    .map(node => (this.tryTrackNode(node).sourceContent || '').trim())
                    .join('');
                return escape(content);
            } else if (simpleNode.type === 'open' && simpleNode.noTranslation) {
                return simpleNode.name.toLowerCase() === 'span'
                    ? '<span class="notranslate">'
                    : `<span class="notranslate" elm="${simpleNode.name}">`;
            } else if (simpleNode.type === 'open' && !simpleNode.noTranslation) {
                return simpleNode.name.toLowerCase() === 'span'
                    ? '<span>'
                    : `<span elm="${simpleNode.name}">`;
            } else {
                return `</span>`;
            }
        }).join('');

        return html;
    }

    processBlockNodes(blockElmList: Node[]) {
        return blockElmList
            .map(getInlinePartials)            
            .reduce((acc, collection) => ([
                ...acc,
                ...collection.filter(inlinePartial => this.isPartialDirty(inlinePartial))])
                , []);
    }

    isPartialDirty(inlinePartial: SimpleNode[]) {
        return inlinePartial
            .filter(simpleNode => simpleNode.leafs)
            .reduce((acc, simpleNode) => [...acc, ...simpleNode.leafs], [] as Node[])
            .some(node => {
                const sessionData = this.tryTrackNode(node);
                return sessionData.isDirty || sessionData.isNew;
            });
    }

}
