/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { unescape } from 'lodash';

const inlineDisplayValues = new Set<string>([
    'inline',
    'inline-block',
    'inline flow-root',
    'inline-table',
    'inline table',
    'inline-flex',
    'inline flex',
    'inline-grid',
    'inline grid'
]);

const forbiddenElements = [
    'mat-select', 'mat-option',
    'select', 'option', 'language-select',
    'noscript'
];

const tagsToIgnore = new Set<string>([
    'base', 'col', 'embed',
    'keygen', 'link', 'meta', 'param', 'source',
    'track', 'wbr', 'script', 'iframe', 'svg',
    '::before', '::after', ':before', ':after',
    ...forbiddenElements
]);

//these are element that may style as inline, but
//will be treated as block
const implicitBlockTags = new Set<string>([
    'br', 'hr'
]);

//these may be empty and used inline within text,
//so allowing them will keep semantic ordering/grouping
//of content
const allowedEmptyTags = new Set<string>([
    'img', 'i', 'input'
]);

export interface SimpleNode {
    leafs?: Node[];
    name?: string;
    type?: 'open' | 'close';
    uid?: number;
    noTranslation?: boolean;
}

type ParentPlate = { node: Node; closures: string[] };

export function toDocumentFragment(html: string) {

    const renderer = document.createElement('template');

    if ('content' in renderer) {
        renderer.innerHTML = html;
        return renderer.content;
    } else {
        const fallbackRenderer = document.createElement('div');
        fallbackRenderer.innerHTML = html;
        const fragment = document.createDocumentFragment();

        while (fallbackRenderer.childNodes.length) {
            const node = fallbackRenderer.removeChild(fallbackRenderer.firstChild);
            fragment.appendChild(node);
        }

        return fragment;
    }
}

export function getStyle(element: HTMLElement, property: string): string {
    return window.getComputedStyle(element)[property];
}

export function isNodeInline(node: Node): boolean {

    if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        //a fragment will be considered block-ish since
        //it should contain all inline contiguous content
        return false;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {

        if (implicitBlockTags.has(node.nodeName.toLowerCase())) {
            return false;
        }

        const element = node as HTMLElement;
        const style = getStyle(element, 'display');

        if (!style) {
            return true;
        }

        return inlineDisplayValues.has(style);
    }

    return true;
}

export function getTextNodes(rootNode: Node) {
    const nodes: Node[] = [];

    const walker = document.createNodeIterator.apply(document, [rootNode, NodeFilter.SHOW_TEXT, () => NodeFilter.FILTER_ACCEPT, false]);
    let currentNode = walker.nextNode();
    while (currentNode) {
        nodes.push(currentNode);
        currentNode = walker.nextNode();
    }
    return nodes;
}

export function normalizePartial(unnormalizedPartial: SimpleNode[]) {
    let result = unnormalizedPartial.slice();

    if (result.length) {
        result.reduce((indexStack, current, index, nodes) => {

            if (current.type === 'open') {
                indexStack.push(index);
            } else if (current.leafs) {
                return [];
            } else if (current.type === 'close' && indexStack.length && !allowedEmptyTags.has(current.name.toLowerCase())) {
                nodes[index] = null;
                nodes[indexStack.pop()] = null;
            }

            return indexStack;
        }, [] as number[]);
        result = result.filter(x => x);
    }

    //remove fully enclosed ends
    while (result.length > 1) {
        const first = result[0];
        const last = result[result.length - 1];

        if (first.leafs || last.leafs) {
            break;
        }

        if (first.name !== last.name) {
            break;
        }

        if (first.type !== 'open' || last.type !== 'close') {
            break;
        }

        if (first.uid !== last.uid) {
            break;
        }

        if (first.noTranslation) {
            //if outer most tag are 'notranslate', no reason to send
            //anything at all
            result = [];
            break;
        }

        result = result.slice(1, -1);
    }

    return result;
}

export function getRootNode(node: Node): Node {
    if ('getRootNode' in node) {
        return node.getRootNode();
    } else {
        let currentNode = node as Node;
        while (currentNode.parentNode) {
            currentNode = currentNode.parentNode;
        }
        return currentNode;
    }
}

function getForbiddenElements(baseElement: HTMLElement) {
    if (forbiddenElements.length) {
        return Array.from(baseElement.querySelectorAll(forbiddenElements.join(', ')));
    } else {
        return [];
    }
}

function isWithin(nodeList: Element[], textNode: Node): boolean {
    for (const node of nodeList) {
        if (node.contains(textNode)) {
            return true;
        }
    }
    return false;
}

function contains(container: Node, contained: Node) {
    // eslint-disable-next-line no-bitwise
    return contained.compareDocumentPosition(container) & Node.DOCUMENT_POSITION_CONTAINS;
}

function compareNodesDescending(a, b) {
    // eslint-disable-next-line no-bitwise
    return (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_PRECEDING) ? 1 : -1;
}

function getTopLevelNodes(rootNode: Node, nodes: Node[]) {
    const skipNodes = Array.from((rootNode as HTMLElement).querySelectorAll('[translation-skip]'));

    return nodes
        .filter(node => contains(rootNode, node))
        .filter(node => !skipNodes.some(x => x === node || contains(x, node)))
        .sort(compareNodesDescending) //preceding first
        .reduce((acc, curr) => {

            const currLength = acc.length;

            if (!currLength) {
                return [curr];
            } else if (contains(acc[currLength - 1], curr)) {
                //do nothing currs parent found
                return acc;
            } else {
                //blocks in order
                //preceding node can be a parent or sibling or not related
                //not related -> parent not in list
                //sibling -> parent not in list - existence means no parent was found
                //parent -> parent not found as contains(acc[currLength - 1], curr)) false
                acc.push(curr);
                return acc;
            }


        }, [] as Node[]);        
}

export function getEnclosedBlocks(rootNode: Node, textNodes: Node[]) {

    const inlineNodes = new Set<Node>(textNodes);
    const blockElements = new Set<Node>();
    const forbidden = getForbiddenElements(rootNode as HTMLElement);

    while (inlineNodes.size) {
        [...inlineNodes.values()]
            .forEach(node => {
                const parentNode = node.parentNode;
                inlineNodes.delete(node);
                const shouldSkip = shouldSkipElement(node);
                if (shouldSkip || (node.nodeType === Node.TEXT_NODE && isWithin(forbidden, node))) {
                    //do nothing, already deleted from set
                } else if (parentNode && isNodeInline(parentNode)) {
                    inlineNodes.add(parentNode);
                } else if (parentNode) {
                    blockElements.add(parentNode);
                }
            });
    }

    return getTopLevelNodes(rootNode, [...blockElements.values()]);
}

function shouldSkipElement(node: Node) {
    const isElementNode = node.nodeType === Node.ELEMENT_NODE;
    const containsIgnoreAttr = isElementNode && (node as HTMLElement).hasAttribute('translation-skip');
    return containsIgnoreAttr;
}

function ignoreFilter(node: Node) {
    const isElementNode = node.nodeType === Node.ELEMENT_NODE;    
    const containsIgnoreAttr = shouldSkipElement(node);  
    const nodeName = (getNodeName(node) || '').toLowerCase();
    const tagIgnored = isElementNode && tagsToIgnore.has(nodeName);

    if (containsIgnoreAttr || tagIgnored) {
        return NodeFilter.FILTER_REJECT;
    }

    return NodeFilter.FILTER_ACCEPT;
}

function getNodeName(node: Node) {
    const element = node as HTMLElement;
    return (element && ('getAttribute' in element) && element.getAttribute('elm')) || node.nodeName;
}

class InlinePartialHelper {

    partial: SimpleNode[] = [];
    parentStack: ParentPlate[] = [];
    uidTracking: { name: string; uid: number }[] = [];
    uidNextId = 0;
    results: SimpleNode[][] = [];
    nodeInlineCache = new WeakMap<Node, boolean>();

    isInline(node: Node) {
        if (!this.nodeInlineCache.has(node)) {
            this.nodeInlineCache.set(node, isNodeInline(node));
        }

        return this.nodeInlineCache.get(node);
    }

    peekParentStack() {
        return this.parentStack.length ? this.parentStack[this.parentStack.length - 1].node : undefined;
    }

    pushTextToPartial(node: Node) {
        if ((node.nodeValue || '').trim() === '') {
            return;
        }

        if (this.partial.length && this.partial[this.partial.length - 1].leafs) {
            this.partial[this.partial.length - 1].leafs.push(node);
        } else {
            this.partial.push({ leafs: [node] });
        }
    }

    updatePartial(node: Node) {
        const simpleNode: SimpleNode = { type: 'open', name: getNodeName(node), uid: this.uidNextId++ };
        const element = ('classList' in (node as HTMLElement)) && ('getAttribute' in (node as HTMLElement)) && (node as HTMLElement);

        simpleNode.noTranslation = element && (element.classList.contains('notranslate') || element.getAttribute('translate') === 'no');

        this.partial.push(simpleNode);
        this.uidTracking.push({ name: simpleNode.name, uid: simpleNode.uid });
    };

    reset() {
        if (this.partial.length) {
            this.results.push(this.partial);
            this.partial = [];
        }
    };

    close(count?: number) {
        let actualCount = count !== undefined ? count : this.uidTracking.length;
        const closures = [];
        while (actualCount--) {
            const tracking = this.uidTracking.pop();
            if (tracking) {
                this.partial.push({ name: tracking.name, type: 'close', uid: tracking.uid });
                closures.push(tracking.name);
            }
        }
        return closures;
    };

    preOpen(openings: string[]) {
        while (openings.length) {
            const name = openings.pop();
            const uid = this.uidNextId++;
            this.partial.push({ name, type: 'open', uid });
            this.uidTracking.push({ name, uid });
        }
    };
}

export function getInlinePartials(elm: Node): SimpleNode[][] {

    if (forbiddenElements.indexOf(getNodeName(elm).toLowerCase()) >= 0) {
        return [];
    }

    // eslint-disable-next-line no-bitwise
    const whatToShow = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT;
    const walker = document.createTreeWalker.apply(document, [elm, whatToShow, ignoreFilter, false]);
    const state = new InlinePartialHelper();

    let node = elm;
    state.parentStack.push({ node, closures: null });
    node = walker.nextNode();
    while (node) {

        let adjacentNode: ParentPlate;
        let count = 0;
        let closures: string[];
        while (state.peekParentStack() !== node.parentNode) {
            adjacentNode = state.parentStack.pop();
            count += state.isInline(adjacentNode.node) ? 1 : 0;
        }

        const parentInline = state.isInline(node.parentNode);
        const inline = state.isInline(node);
        if (adjacentNode) {
            const adjacentInline = state.isInline(adjacentNode.node);

            if (adjacentInline && inline) {
                state.close(count);
            } else if (!parentInline) {
                state.close();
                state.reset();
            } else if (parentInline) {
                if (adjacentInline && !inline) {
                    closures = state.close().slice(count);
                    state.reset();
                } else if (!adjacentInline && !inline) {
                    state.close(count);
                    state.reset();
                    closures = adjacentNode.closures;
                } else if (!adjacentInline && inline) {
                    state.close(count);
                    state.reset();
                    state.preOpen(adjacentNode.closures || []);
                }
            }
        } else if (parentInline && !inline) {
            closures = state.close();
        }

        if (node.nodeType === Node.ELEMENT_NODE) {
            if (inline) {
                state.updatePartial(node);
            } else {
                state.reset();
            }
            state.parentStack.push({ node, closures });
        } else {
            state.pushTextToPartial(node);
        }

        node = walker.nextNode();
    }

    state.close();
    state.reset();

    return state.results.map(normalizePartial).filter(x => x.length > 0);
}

//text content may spread across any number of text nodes, but elmeent number and order should remain the same(?)
export function copyPartials(sourcePartial: SimpleNode[], destinationPartial: SimpleNode[]): { errored: boolean; logs: string[] } {

    destinationPartial
        .filter(simpleNode => simpleNode.leafs)
        .forEach(simpleNode => simpleNode.leafs.forEach(leaf => leaf.nodeValue = ' '));

    const { errored, logs } = destinationPartial.reduce((acc, destination) => {
        const source = acc.sourcePartial[acc.index];
        if (!source) {
            return acc;
        }

        if (!destination.leafs && !source.leafs) {
            if (destination.type !== source.type || destination.name.toLowerCase() !== source.name.toLowerCase()) {
                acc.logs.push('dom mismatch: element nodes not in same order');
            }
            acc.index++;
        } else if (destination.leafs && source.leafs) {

            const sourceLeafs = source.leafs
                .filter(x => x && x.nodeValue && (x.nodeValue.trim() !== ''))
                .map(x => x.nodeValue + ' ');

            if (destination.leafs.length < sourceLeafs.length) {
                acc.logs.push('dom mismatch: more text nodes from souce than destination');
                acc.errored = true;
            }

            destination.leafs.reduce((leafAcc, destinationNode, leafIndex) => {
                const sourceText = leafAcc[leafIndex];
                destinationNode.nodeValue = unescape(sourceText || ' ');
                return leafAcc;
            }, sourceLeafs);
            acc.index++;
        }

        return acc;
    }, { sourcePartial, index: 0, errored: false, logs: [] });

    return { errored, logs };
}

export function getParentWithStyle(node: Node): HTMLElement {
    let parentElement = node as HTMLElement;

    while (parentElement && !parentElement.style) {
        parentElement = parentElement.parentElement || parentElement.parentNode as HTMLElement;
    }
    return parentElement;
}
