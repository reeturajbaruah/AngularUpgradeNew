import { Component, NO_ERRORS_SCHEMA, NgZone } from '@angular/core';

import { } from 'jasmine';
import { TranslationSessionImplemented, SimpleMutation } from './translation.session';
import { SimpleNode, getTextNodes, getParentWithStyle } from './node.utility';
import { CommonModule } from '@angular/common';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { changesStable } from 'testing';
import { wait } from 'common/utilities';

@Component({
    selector: 'test-component',
    templateUrl: './edgeCases.html'
})
class TestComponent {

    public content: string;
    public items: string[];

    constructor() {
        this.items = [];
        this.content = '';
    }

}

describe('service: TranslationSession', () => {

    let fixture: ComponentFixture<TestComponent>;
    let session: TranslationSessionImplemented;
    let translatorFunction: ((languageCode: string, content: string[]) => Promise<string[]>);
    let ngZone: NgZone;
    let fakeWindow: jasmine.SpyObj<Window>;
    let logFunction;

    beforeEach(async () => {

        await TestBed
            .configureTestingModule({
                declarations: [
                    TestComponent
                ],
                imports: [
                    CommonModule
                ],
                providers: [

                ],
                schemas: [
                    NO_ERRORS_SCHEMA
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        fakeWindow = jasmine.createSpyObj('window', ['getComputedStyle']);
        fakeWindow.getComputedStyle.and.callFake((x) => window.getComputedStyle(x));
        await changesStable(fixture);
        translatorFunction = jasmine.createSpy('translatorFunction');
        logFunction = jasmine.createSpy('logFunction');
        ngZone = jasmine.createSpyObj('ngZone', ['runOutsideAngular']);
        (ngZone.runOutsideAngular as jasmine.Spy).and.callFake((fn: (() => any)) => fn());
        const baseNode = (fixture.nativeElement as HTMLElement).querySelector('#simple');
        session = new TranslationSessionImplemented(translatorFunction, logFunction, { nativeElement: baseNode }, ngZone, fakeWindow);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(session).toBeDefined();
        });
    });

    describe('start', () => {

        it('start mutation observer with init translation', async () => {

            const mo = jasmine.createSpyObj('MutationObserver', ['observe', 'disconnect']) as MutationObserver;
            spyOn(session, 'processBlockNodes').and.returnValue([[{ leafs: [{} as Node] } as SimpleNode]]);
            spyOn(session, 'translateNodes').and.returnValue(Promise.resolve());
            spyOn(session, 'createMutationObserver').and.returnValue(mo as any);
            await session.start('Spanish', false);
            expect(mo.observe).toHaveBeenCalled();
            expect(session.processBlockNodes).toHaveBeenCalled();
            expect(session.translateNodes).toHaveBeenCalled();

        });

    });


    describe('end', () => {

        it('cant end if not started', () => {

            session.trackedTextNodes = null;
            session.end();
            expect(session.mutationObserver).not.toBeDefined();
        });

        it('can end', async () => {

            (translatorFunction as jasmine.Spy).and.callFake((lang, content) => content.map(x => x.split('').reverse().join('')));

            const mo = jasmine.createSpyObj('MutationObserver', ['observe', 'disconnect', 'takeRecords']) as MutationObserver;
            (mo.takeRecords as jasmine.Spy).and.returnValue([]);

            spyOn(session, 'createMutationObserver').and.returnValue(mo as any);

            const text = getTextNodes(session.baseNode).map(x => x.nodeValue.trim());
            await session.start('Spanish', false);

            const changedText = getTextNodes(session.baseNode).map(x => x.nodeValue.trim());
            expect(text).not.toEqual(changedText);

            session.end();

            const restoredText = getTextNodes(session.baseNode).map(x => x.nodeValue.trim());
            expect(text).toEqual(restoredText);
            expect(mo.disconnect).toHaveBeenCalled();

        });

        it('can restore parent direction to blank', async () => {

            (translatorFunction as jasmine.Spy).and.callFake((lang, content) =>
                content.map((x, index) => `${index === 1 ? 'english ' : ''}عربي`));


            const mo = jasmine.createSpyObj('MutationObserver', ['observe', 'disconnect', 'takeRecords']) as MutationObserver;
            (mo.takeRecords as jasmine.Spy).and.returnValue([]);
            const baseNode = (fixture.nativeElement as HTMLElement).querySelector('#simple');
            session = new TranslationSessionImplemented(translatorFunction, logFunction, { nativeElement: baseNode }, ngZone, fakeWindow);

            spyOn(session, 'createMutationObserver').and.returnValue(mo as any);

            await session.start('Arabic', true);

            const changedDirections = getTextNodes(session.baseNode).map(x => getParentWithStyle(x).style.direction);
            const changedUnicodeBidi = getTextNodes(session.baseNode).map(x => getParentWithStyle(x).style.unicodeBidi);
            expect(changedDirections).toEqual(['rtl', 'rtl', 'rtl']);
            expect(changedUnicodeBidi).toEqual(['isolate', 'isolate', 'isolate']);

            session.end();

            const restoredDirections = getTextNodes(session.baseNode).map(x => getParentWithStyle(x).style.direction);
            const restoredUnicodeBidi = getTextNodes(session.baseNode).map(x => getParentWithStyle(x).style.unicodeBidi);
            expect(restoredDirections).toEqual(['', '', '']);
            expect(restoredUnicodeBidi).toEqual(['', '', '']);
            expect(mo.disconnect).toHaveBeenCalled();
        });

    });

    describe('waitMode', () => {
        it('should process mutations in the order they were received', async () => {

            const timeout = wait(600);

            spyOn(session, 'isBadTextNode').and.returnValue(false);
            spyOn(session, 'processMutations');
            session.trackedTextNodes = new WeakMap();

            const node1 = { nodeValue: 'some value 1', nodeType: Node.TEXT_NODE };
            const node2 = { nodeValue: 'some value 2', nodeType: Node.TEXT_NODE };
            const node3 = { nodeValue: 'some value 3', nodeType: Node.TEXT_NODE };
            const node4 = { nodeValue: 'some value 4', nodeType: Node.TEXT_NODE };
            const node5 = { nodeValue: 'some value 5', nodeType: Node.TEXT_NODE };
            const node6 = { nodeValue: 'some value 6', nodeType: Node.TEXT_NODE };
            const node7 = { nodeValue: 'some value 7', nodeType: Node.TEXT_NODE };


            session.mutationObserverCallback([
                {
                    target: node1,
                    type: 'characterData'
                } as MutationRecord, {
                    addedNodes: [node2] as unknown as NodeList,
                    type: 'childList'
                } as MutationRecord] as MutationRecord[]);

            session.mutationObserverCallback([
                {
                    target: node5 as Node,
                    type: 'characterData'
                } as MutationRecord, {
                    addedNodes: [node7, node4] as unknown as NodeList,
                    type: 'childList'
                } as MutationRecord] as MutationRecord[]);

            node2.nodeValue = 'I changed';

            session.mutationObserverCallback([
                {
                    target: node2 as Node,
                    type: 'characterData'
                } as MutationRecord, {
                    addedNodes: [node3] as unknown as NodeList,
                    type: 'childList'
                } as MutationRecord] as MutationRecord[]);

            await timeout;

            //mutations to ignore
            node4.nodeValue = 'i changed 4';
            session.mutationObserverCallback([
                {
                    target: node4,
                    type: 'characterData'
                } as MutationRecord, {
                    addedNodes: [node6] as unknown as NodeList,
                    type: 'childList'
                } as MutationRecord] as MutationRecord[]);

            expect(session.processMutations).toHaveBeenCalledOnceWith([
                { node: node1, newValue: 'some value 1' } as SimpleMutation,
                { node: node2, newValue: 'some value 2' } as SimpleMutation,
                { node: node5, newValue: 'some value 5' } as SimpleMutation,
                { node: node7, newValue: 'some value 7' } as SimpleMutation,
                { node: node4, newValue: 'some value 4' } as SimpleMutation,
                { node: node2, newValue: 'I changed' } as SimpleMutation,
                { node: node3, newValue: 'some value 3' } as SimpleMutation
            ]);

            expect(session.mutationQueue).toEqual([
                { node: node4 as Node, newValue: 'i changed 4' },
                { node: node6 as Node, newValue: 'some value 6' },
            ]);
        });

        it('handles wait mode - no queue', async () => {

            spyOn(session, 'processMutations');

            const spy = jasmine.createSpy('actionSpy');
            const action = () => {
                spy();
                expect(session.isWaiting).toBeTruthy();
                return Promise.resolve();
            };

            expect(session.isWaiting).toBeFalsy();
            await session.waitMode(action);
            expect(session.isWaiting).toBeFalsy();
            expect(spy).toHaveBeenCalled();
            expect(session.processMutations).not.toHaveBeenCalled();
        });

        it('handles wait mode - queue', async () => {

            spyOn(session, 'processMutations');
            session.trackedTextNodes = new WeakMap();
            session.mutationQueue.push(1 as any);
            session.mutationQueue.push(2 as any);
            session.mutationQueue.push(3 as any);

            const spy = jasmine.createSpy('actionSpy');
            const action = () => {
                spy();
                expect(session.isWaiting).toBeTruthy();
                return Promise.resolve();
            };

            expect(session.isWaiting).toBeFalsy();
            await session.waitMode(action);
            expect(session.isWaiting).toBeTruthy();
            expect(spy).toHaveBeenCalled();
            expect(session.processMutations).toHaveBeenCalledOnceWith([1, 2, 3] as any);
        });

        it('handles exceptions - no queue', async () => {

            spyOn(session, 'processMutations');
            const error = new Error('this was an expected error; disregard for testing');
            error.stack = 'fake stack';
            const spy = jasmine.createSpy('actionSpy');
            const action = () => {
                spy();
                expect(session.isWaiting).toBeTruthy();
                return Promise.reject(error);
            };

            expect(session.isWaiting).toBeFalsy();
            await session.waitMode(action);
            expect(session.isWaiting).toBeFalsy();
            expect(spy).toHaveBeenCalled();
            expect(session.processMutations).not.toHaveBeenCalled();
            expect(logFunction).toHaveBeenCalledOnceWith('Error: this was an expected error; disregard for testing\nfake stack');
        });

        it('handles exceptions - queue', async () => {

            spyOn(session, 'processMutations');
            session.trackedTextNodes = new WeakMap();
            session.mutationQueue = [2, 3, 4] as any;
            const spy = jasmine.createSpy('actionSpy');
            const action = () => {
                spy();
                expect(session.isWaiting).toBeTruthy();
                return Promise.reject('this was an expected error; disregard for testing');
            };

            expect(session.isWaiting).toBeFalsy();
            await session.waitMode(action);
            expect(session.isWaiting).toBeTruthy();
            expect(spy).toHaveBeenCalled();
            expect(session.processMutations).toHaveBeenCalledOnceWith([2, 3, 4] as any);
        });
    });

    describe('processMutations', () => {

        it('will process and end wait mode', async () => {

            const textNode = session.baseNode.childNodes[0].childNodes[0];
            const mutationList = [
                {
                    newValue: 'new value oldest',
                    node: textNode as Node
                }, {
                    newValue: 'new value 2',
                    node: textNode as Node
                }, {
                    newValue: 'new value 3',
                    node: textNode as Node
                }, {
                    newValue: 'new value 4',
                    node: textNode as Node
                }
            ] as SimpleMutation[];

            const translatedNodesPromise = Promise.resolve();

            const list = [[{ leafs: [session.baseNode] } as SimpleNode]] as SimpleNode[][];

            spyOn(session, 'getMutatedTextNodes').and.returnValue([textNode]);
            spyOn(session, 'translateNodes').and.returnValue(translatedNodesPromise);
            spyOn(session, 'processBlockNodes').and.returnValue(list);
            spyOn(session, 'waitMode').and.callThrough();

            session.isWaiting = false;

            await session.processMutations(mutationList);

            expect(session.getMutatedTextNodes).toHaveBeenCalledOnceWith(mutationList);
            expect(session.processBlockNodes).toHaveBeenCalledOnceWith([textNode.parentNode]);
            expect(session.waitMode).toHaveBeenCalled();
            expect(session.translateNodes).toHaveBeenCalledWith(list);

            expect(session.isWaiting).toBeFalsy();
        });

        it('will go into waitmode and return if no textnodes qualify', async () => {

            const mutationList = [] as SimpleMutation[];

            spyOn(session, 'getMutatedTextNodes').and.returnValue([]);
            spyOn(session, 'translateNodes');
            spyOn(session, 'processBlockNodes');
            spyOn(session, 'waitMode').and.callThrough();

            session.isWaiting = false;

            await session.processMutations(mutationList);

            expect(session.getMutatedTextNodes).toHaveBeenCalled();
            expect(session.waitMode).toHaveBeenCalled();

            expect(session.processBlockNodes).not.toHaveBeenCalled();
            expect(session.translateNodes).not.toHaveBeenCalled();

            expect(session.isWaiting).toBeFalsy();

        });

    });

    describe('getMutatedTextNodes', () => {

        it('should return nodes on document from simple mutations', () => {

            const textNode1 = session.baseNode.childNodes[0].childNodes[0];
            const textNode2 = session.baseNode.childNodes[1].childNodes[0];
            const textNode3 = session.baseNode.childNodes[2].childNodes[0];
            const freeDiv = document.createElement('div');
            freeDiv.innerText = 'some value 4';
            const textNode4 = freeDiv.childNodes[0];
            spyOn(session, 'trackNodeForTranslation').and.callFake((node) => [textNode1, textNode2, textNode4].includes(node as ChildNode));

            const result = session.getMutatedTextNodes([
                {
                    node: textNode1,
                    newValue: 'some value old'
                }, {
                    node: textNode3,
                    newValue: 'some value 3'
                }, {
                    node: textNode1,
                    newValue: 'some value newer'
                }, {
                    node: textNode2,
                    newValue: 'some value 2'
                }, {
                    node: textNode4,
                    newValue: 'some value 4'
                }, {
                    node: textNode1,
                    newValue: 'some value newest'
                }
            ]);

            expect(result).toEqual([textNode1, textNode2]);

            expect(session.trackNodeForTranslation).toHaveBeenCalledTimes(3);
            expect(session.trackNodeForTranslation).toHaveBeenCalledWith(textNode1, 'some value newest');
            expect(session.trackNodeForTranslation).toHaveBeenCalledWith(textNode2, 'some value 2');
            expect(session.trackNodeForTranslation).toHaveBeenCalledWith(textNode3, 'some value 3');
        });
    });

    describe('mutationObserverCallback', () => {

        it('will queue than wait', () => {

            session.isWaiting = false;
            session.trackedTextNodes = new WeakMap<Node, any>();
            spyOn(session, 'waitMode');
            const mutationList = [
                {
                    type: 'characterData',
                    target: {
                        nodeValue: 'TEXT',
                        nodeType: Node.TEXT_NODE
                    } as Node,
                    addedNodes: {} as NodeList
                } as MutationRecord
            ] as MutationRecord[];

            session.mutationObserverCallback(mutationList);

            expect(session.mutationQueue.length > 0).toBeTruthy();
            expect(session.mutationQueue[0]).toEqual({
                node: {
                    nodeValue: 'TEXT',
                    nodeType: Node.TEXT_NODE
                } as Node,
                newValue: 'TEXT'
            });
            expect(session.waitMode).toHaveBeenCalled();
        });

        it('will queue and not wait', () => {

            session.isWaiting = true;
            session.trackedTextNodes = new WeakMap<Node, any>();
            spyOn(session, 'waitMode');
            const mutationList = [
                {
                    type: 'characterData',
                    target: {
                        nodeValue: 'TEXT',
                        nodeType: Node.TEXT_NODE
                    } as Node,
                    addedNodes: {} as NodeList
                } as MutationRecord
            ] as MutationRecord[];

            session.mutationObserverCallback(mutationList);

            expect(session.mutationQueue.length > 0).toBeTruthy();
            expect(session.mutationQueue[0]).toEqual({
                node: {
                    nodeValue: 'TEXT',
                    nodeType: Node.TEXT_NODE
                } as Node,
                newValue: 'TEXT'
            });
            expect(session.waitMode).not.toHaveBeenCalled();
        });

        it('will honor content change order', async () => {

            session.isWaiting = true;
            session.trackedTextNodes = new WeakMap<Node, any>();

            const textNode = {
                nodeValue: 'TEXT1',
                nodeType: Node.TEXT_NODE
            } as Node;

            session.mutationObserverCallback([
                {
                    type: 'characterData',
                    target: textNode
                } as MutationRecord
            ] as MutationRecord[]);

            //change actual node BEFORE the TEXT1 is actually processed
            textNode.nodeValue = 'TEXT2';

            session.mutationObserverCallback([
                {
                    type: 'characterData',
                    target: textNode
                } as MutationRecord
            ] as MutationRecord[]);

            //check that queue has correct content order
            expect(session.mutationQueue.length).toBe(2);

            expect(session.mutationQueue[0].node).toBe(textNode);
            expect(session.mutationQueue[1].node).toBe(textNode);

            expect(session.mutationQueue[0].newValue).toBe('TEXT1');
            expect(session.mutationQueue[1].newValue).toBe('TEXT2');
        });
    });

    describe('tryTrackNode', () => {

        it('returns with node when already tracked', () => {

            session.trackedTextNodes = new WeakMap<Node, any>();
            const node = {} as Node;
            const sessionData = {
                isDirty: false,
                isNew: false,
                sourceContent: 'dog',
                translatedContent: 'hund'
            };
            session.trackedTextNodes.set(node, sessionData);

            expect(session.tryTrackNode(node)).toEqual(sessionData);

        });

        it('handles new untracked nodes', () => {

            session.trackedTextNodes = new WeakMap<Node, any>();
            const node = { nodeValue: 'dog' } as Node;

            const sessionData = session.tryTrackNode(node);

            expect(sessionData.isDirty).toBeFalsy();
            expect(sessionData.isNew).toBeTruthy();
            expect(sessionData.translatedContent).toBeNull();
            expect(sessionData.sourceContent).toBe(node.nodeValue);
        });

    });

    describe('getParentDirection', () => {

        let fakeNode: Node;

        beforeEach(() => {

            //fakeWindow.getComputedStyle.and.returnValue(computedStyleFake);
            (ngZone.runOutsideAngular as jasmine.Spy).and.returnValue(null);
            fakeNode = {
                nodeValue: '',
                parentElement: (fixture.nativeElement as HTMLElement).querySelector('#arabic-parent>#base')
            } as any;
        });

        it('should return empty object when textDirection not rtl', () => {

            session.start('fakeLanguage', false);

            expect(fakeNode.parentElement).toBeTruthy();
            expect(session.getParentDirection(fakeNode)).toEqual({});
        });

        it('should return empty object when parentWithStyle falsy', () => {

            (fakeNode.parentElement as any) = null;
            session.start('fakeLanguage', true);

            expect(session.getParentDirection(fakeNode)).toEqual({});
        });

        it('should return empty object when parentWithStyle.hasAttribute falsy', () => {

            (fakeNode.parentElement as any).hasAttribute = null;
            session.start('fakeLanguage', true);

            expect(fakeNode.parentElement).toBeTruthy();
            expect(session.getParentDirection(fakeNode)).toEqual({});
        });

        it('should return empty object when parentElement.style falsy', () => {

            //setting style does not make it null
            //(fakeNode.parentElement as any).style = null;
            (fakeNode.parentElement as any) = {
                hasAttribute: () => { }
            };
            session.start('fakeLanguage', true);

            expect(session.getParentDirection(fakeNode)).toEqual({});
        });

        it('should return blank parentDirection when parent has attribute nortl', () => {

            (fakeNode.parentElement as any) = (fixture.nativeElement as HTMLElement).querySelector('#arabic-parent>#has-nortl');
            session.start('fakeLanguage', true);

            expect(fakeNode.parentElement).toBeTruthy();
            expect(session.getParentDirection(fakeNode)).toEqual({
                parentElement: fakeNode.parentElement,
                parentDirection: '',
                parentTextAlign: '',
            });
        });
        [
            ['#arabic-parent>#right-align', 'right'],
            ['#arabic-parent>#center-align', 'center'],
            ['#arabic-parent>#justify-align', 'justify'],
        ].forEach(([selector, parentTextAlign]) => {

            it('should return parent\'s original text align when it is not start or left', () => {

                (fakeNode.parentElement as any) = (fixture.nativeElement as HTMLElement).querySelector(selector);
                session.start('fakeLanguage', true);

                expect(fakeNode.parentElement).toBeTruthy();
                expect(session.getParentDirection(fakeNode)).toEqual({
                    parentElement: fakeNode.parentElement,
                    parentDirection: 'rtl',
                    parentTextAlign,
                });
            });
        });
    });

    describe('translateNodes', () => {

        it('can translate content', async () => {

            session.trackedTextNodes = new WeakMap<Node, any>();
            session.targetLanguageCode = 'Spanish';

            const leftOvers = [];

            const inlinePartial = [
                { name: 'a', type: 'open', uid: 0 },
                { leafs: [{ nodeValue: 'X' } as Node] },
                { name: 'a', type: 'close', uid: 0 },
                { name: 'span', type: 'open', uid: 1 },
                { leafs: [{ nodeValue: 'XX' } as Node, { nodeValue: 'XXX' } as Node] },
                { name: 'strong', type: 'open', uid: 2 },
                { leafs: [{ nodeValue: 'XXXX' } as Node] },
                { name: 'strong', type: 'close', uid: 2 },
                { name: 'span', type: 'close', uid: 1 }
            ] as SimpleNode[];

            const fakeParents = [
                {},
                {},
                { parentElement: { style: {} }, parentDirection: 'rtl', parentTextAlign: 'left' },
                { parentElement: { style: {} }, parentDirection: '', parentTextAlign: 'fake' }];
            spyOn(session, 'takeLeftOvers').and.returnValue(leftOvers);
            spyOn(session, 'tryQueue');
            spyOn(session, 'getParentDirection').and.returnValues(...fakeParents as any);

            (translatorFunction as jasmine.Spy).and.callFake((languageCode, content) =>
                Promise.resolve(content.map(x => x.replaceAll('X', 'Y'))));

            await session.translateNodes([inlinePartial]);

            expect(translatorFunction).toHaveBeenCalled();
            expect(session.takeLeftOvers).toHaveBeenCalledTimes(2);
            expect(session.getParentDirection).toHaveBeenCalledTimes(4);

            expect(fakeParents[0].parentElement).toBeUndefined();
            expect(fakeParents[1].parentElement).toBeUndefined();
            expect(fakeParents[2].parentElement).toEqual({ style: { direction: 'rtl', textAlign: 'left', unicodeBidi: 'isolate' } });
            expect(fakeParents[3].parentElement).toEqual({ style: {} });

            expect(inlinePartial[1].leafs[0].nodeValue).toBe('Y ');
            expect(inlinePartial[4].leafs[0].nodeValue).toBe('YYYYY ');
            expect(inlinePartial[4].leafs[1].nodeValue).toBe(' ');
            expect(inlinePartial[6].leafs[0].nodeValue).toBe('YYYY ');

            expect(session.tryTrackNode(inlinePartial[1].leafs[0]).isNew).toBeFalsy();
            expect(session.tryTrackNode(inlinePartial[1].leafs[0]).isDirty).toBeFalsy();
            expect(session.tryTrackNode(inlinePartial[4].leafs[0]).isNew).toBeFalsy();
            expect(session.tryTrackNode(inlinePartial[4].leafs[0]).isDirty).toBeFalsy();
            expect(session.tryTrackNode(inlinePartial[4].leafs[1]).isNew).toBeFalsy();
            expect(session.tryTrackNode(inlinePartial[4].leafs[1]).isDirty).toBeFalsy();
            expect(session.tryTrackNode(inlinePartial[6].leafs[0]).isNew).toBeFalsy();
            expect(session.tryTrackNode(inlinePartial[6].leafs[0]).isDirty).toBeFalsy();

            expect(session.tryTrackNode(inlinePartial[1].leafs[0]).sourceContent).toBe('X');
            expect(session.tryTrackNode(inlinePartial[4].leafs[0]).sourceContent).toBe('XX');
            expect(session.tryTrackNode(inlinePartial[4].leafs[1]).sourceContent).toBe('XXX');
            expect(session.tryTrackNode(inlinePartial[6].leafs[0]).sourceContent).toBe('XXXX');

            expect(session.tryTrackNode(inlinePartial[1].leafs[0]).translatedContent).toBe('Y ');
            expect(session.tryTrackNode(inlinePartial[4].leafs[0]).translatedContent).toBe('YYYYY ');
            expect(session.tryTrackNode(inlinePartial[4].leafs[1]).translatedContent).toBe(' ');
            expect(session.tryTrackNode(inlinePartial[6].leafs[0]).translatedContent).toBe('YYYY ');

            expect(logFunction).toHaveBeenCalledTimes(0);

        });

        it('call log when translation logs returned', async () => {

            session.trackedTextNodes = new WeakMap<Node, any>();
            session.targetLanguageCode = 'Spanish';

            const leftOvers = [];

            const inlinePartial = [
                { name: 'a', type: 'open', uid: 0 },
                { leafs: [{ nodeValue: 'X' } as Node] },
                { name: 'a', type: 'close', uid: 0 },
                { name: 'span', type: 'open', uid: 1 },
                { leafs: [{ nodeValue: 'XX' } as Node, { nodeValue: 'XXX' } as Node] },
                { name: 'strong', type: 'open', uid: 2 },
                { leafs: [{ nodeValue: 'XXXX' } as Node] },
                { name: 'strong', type: 'close', uid: 2 },
                { name: 'span', type: 'close', uid: 1 }
            ] as SimpleNode[];

            const fakeParents = [
                {},
                {},
                { parentElement: { style: {} }, parentDirection: 'rtl', parentTextAlign: 'left' },
                { parentElement: { style: {} }, parentDirection: '', parentTextAlign: 'fake' }];
            spyOn(session, 'takeLeftOvers').and.returnValue(leftOvers);
            spyOn(session, 'tryQueue');
            spyOn(session, 'getParentDirection').and.returnValues(...fakeParents as any);

            //<span elm="a">Y</span><span>YYYYY<span elm="strong">YYYY</span></span>
            (translatorFunction as jasmine.Spy).and.callFake(() => Promise.resolve([`<span elm="a">Y</span><span>YYYYY</span>`]));

            await session.translateNodes([inlinePartial]);

            expect(translatorFunction).toHaveBeenCalled();
            expect(session.takeLeftOvers).toHaveBeenCalledTimes(2);
            expect(session.getParentDirection).toHaveBeenCalledTimes(4);

            expect(fakeParents[0].parentElement).toBeUndefined();
            expect(fakeParents[1].parentElement).toBeUndefined();
            expect(fakeParents[2].parentElement).toEqual({ style: { direction: 'rtl', textAlign: 'left', unicodeBidi: 'isolate' } });
            expect(fakeParents[3].parentElement).toEqual({ style: {} });

            expect(session.tryTrackNode(inlinePartial[1].leafs[0]).isNew).toBeFalsy();
            expect(session.tryTrackNode(inlinePartial[1].leafs[0]).isDirty).toBeFalsy();
            expect(session.tryTrackNode(inlinePartial[4].leafs[0]).isNew).toBeFalsy();
            expect(session.tryTrackNode(inlinePartial[4].leafs[0]).isDirty).toBeFalsy();
            expect(session.tryTrackNode(inlinePartial[4].leafs[1]).isNew).toBeFalsy();
            expect(session.tryTrackNode(inlinePartial[4].leafs[1]).isDirty).toBeFalsy();
            expect(session.tryTrackNode(inlinePartial[6].leafs[0]).isNew).toBeFalsy();
            expect(session.tryTrackNode(inlinePartial[6].leafs[0]).isDirty).toBeFalsy();

            expect(session.tryTrackNode(inlinePartial[1].leafs[0]).sourceContent).toBe('X');
            expect(session.tryTrackNode(inlinePartial[4].leafs[0]).sourceContent).toBe('XX');
            expect(session.tryTrackNode(inlinePartial[4].leafs[1]).sourceContent).toBe('XXX');
            expect(session.tryTrackNode(inlinePartial[6].leafs[0]).sourceContent).toBe('XXXX');

            expect(logFunction).toHaveBeenCalledOnceWith('Errored false\ndom mismatch: element nodes not in same order');
        });

    });

    describe('getSourceHtmlStringFromPartial', () => {
        it('can convert to HTML string', () => {

            spyOn(session, 'tryTrackNode').and.callFake(node => ({
                isDirty: true,
                isNew: false,
                sourceContent: node.nodeValue,
                translatedContent: null
            }));

            const inlinePartial = [
                { name: 'a', type: 'open', uid: 0 },
                { leafs: [{ nodeValue: 'anchor' } as Node] },
                { name: 'a', type: 'close', uid: 0 },
                { name: 'span', type: 'open', uid: 1 },
                { leafs: [{ nodeValue: 'first' } as Node, { nodeValue: 'last' } as Node] },
                { name: 'strong', type: 'open', uid: 2 },
                { leafs: [{ nodeValue: 'bold' } as Node] },
                { name: 'strong', type: 'close', uid: 2 },
                { name: 'span', type: 'close', uid: 1 }
            ] as SimpleNode[];

            const result = session.getSourceHtmlStringFromPartial(inlinePartial);

            expect(result).toBe(`<span elm="a">anchor</span><span>firstlast<span elm="strong">bold</span></span>`);

        });
    });

    describe('isPartialDirty', () => {

        it('check if partial is dirty', () => {

            spyOn(session, 'tryTrackNode').and.returnValue({
                isDirty: true,
                isNew: false,
                sourceContent: null,
                translatedContent: null
            });

            const inlinePartial = [
                { name: 'A', type: 'open', uid: 0 },
                { leafs: [{} as Node] },
                { name: 'A', type: 'close', uid: 0 }
            ] as SimpleNode[];

            const result = session.isPartialDirty(inlinePartial);

            expect(result).toBeTruthy();

        });

        it('check if partial is clean', () => {
            spyOn(session, 'tryTrackNode').and.returnValue({
                isDirty: false,
                isNew: false,
                sourceContent: null,
                translatedContent: null
            });

            const inlinePartial = [
                { name: 'A', type: 'open', uid: 0 },
                { leafs: [{} as Node] },
                { name: 'A', type: 'close', uid: 0 }
            ] as SimpleNode[];

            const result = session.isPartialDirty(inlinePartial);

            expect(result).toBeFalsy();
        });

    });

});
