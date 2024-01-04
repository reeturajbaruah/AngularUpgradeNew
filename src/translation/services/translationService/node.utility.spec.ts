import { Component, NO_ERRORS_SCHEMA } from '@angular/core';


import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { changesStable } from 'testing';

import { MatSelect, MatSelectModule } from '@angular/material/select';

import {
    getInlinePartials,
    isNodeInline, getEnclosedBlocks,
    normalizePartial, SimpleNode, toDocumentFragment, getParentWithStyle
} from './node.utility';

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

describe('node.utility', () => {

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    beforeEach(async () => {

        await TestBed
            .configureTestingModule({
                declarations: [
                    TestComponent, MatSelect
                ],
                imports: [
                    CommonModule, MatSelectModule
                ],
                providers: [

                ],
                schemas: [
                    //NO_ERRORS_SCHEMA
                ]
            })

            .compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;

        await changesStable(fixture);
    });

    describe('normalizePartial', () => {

        it('can normalize partial', () => {

            const aPartial: SimpleNode[] = [
                { name: 'a', type: 'open' },
                { name: 'span', type: 'open' },
                { leafs: [] },
                { name: 'span', type: 'close' },
                { name: 'a', type: 'close' }
            ];

            const result = normalizePartial(aPartial);
            expect(result.length).toBe(1);
            expect(result[0]).toBe(aPartial[2]);
        });

        it('ignores normalized partiala', () => {

            const aPartial: SimpleNode[] = [
                { leafs: [] }
            ];

            const result = normalizePartial(aPartial);
            expect(result.length).toBe(1);
            expect(result[0]).toBe(aPartial[0]);
        });

        it('handles unbalanced trees', () => {

            const aPartial: SimpleNode[] = [
                { name: 'a', type: 'open', uid: 0 },
                { leafs: [] },
                { name: 'span', type: 'open', uid: 1 },
                { leafs: [] },
                { name: 'span', type: 'close', uid: 1 },
                { name: 'a', type: 'close', uid: 0 }
            ];

            const result = normalizePartial(aPartial);
            expect(result.length).toBe(4);
            expect(result[0]).toBe(aPartial[1]);
            expect(result[1]).toBe(aPartial[2]);
            expect(result[2]).toBe(aPartial[3]);
            expect(result[3]).toBe(aPartial[4]);
        });

        it('handles sibling elements', () => {

            const aPartial: SimpleNode[] = [                
                { name: 'span', type: 'open', uid: 0 },
                { leafs: [] },
                { name: 'span', type: 'close', uid: 0 },
                { name: 'span', type: 'open', uid: 1 },
                { leafs: [] },
                { name: 'span', type: 'close', uid: 1 }
            ];

            const result = normalizePartial(aPartial);
            expect(result.length).toBe(6);
        });

        it('removes tags that just open then close', () => {
            const aPartial: SimpleNode[] = [                
                { name: 'span', type: 'open', uid: 0 },                
                { name: 'span', type: 'close', uid: 0 },
                { leafs: [] }
            ];

            const result = normalizePartial(aPartial);
            expect(result.length).toBe(1);
            expect(result[0]).toBe(aPartial[2]);            
        });

        it('handles nested cases', () => {

            const aPartial: SimpleNode[] = [
                { name: 'span', type: 'open', uid: 0 },
                { leafs: [] },
                { name: 'span', type: 'close', uid: 0 },
                { name: 'span', type: 'open', uid: 1 },
                { name: 'span', type: 'open', uid: 2 },
                { name: 'span', type: 'close', uid: 2 },
                { name: 'span', type: 'close', uid: 1 }
            ];

            const result = normalizePartial(aPartial);
            expect(result.length).toBe(1);
        });

        it('handles notranslate', () => {

            const aPartial: SimpleNode[] = [
                { name: 'span', type: 'open', uid: 0, noTranslation: true },
                { leafs: [{} as Node] },
                { name: 'span', type: 'close', uid: 0 },
            ];

            const result = normalizePartial(aPartial);
            expect(result.length).toBe(0);
        });
    });

    describe('getInlinePartials', () => {

        const nodeData = [
            [
                [[1,2]]
            ],
            [
                [[1], 'span+0', [2], 'span-0', [3]]
            ],
            [
                [[1]], [[2]], [[3]]
            ],
            [
                [[1]], [[2], 'span+0', [3], 'span-0'], [[4]]
            ],
            [
                [[1]]
            ],
            [
                [[1]], [[2]], [[3]], [[4]]
            ],
            [
               [[1], 'a+0', 'span+1', [2], 'span-1', 'a-0', [3]]
            ],
            [
                [[1]]
            ],
            [
                [[1]], [[2]], [[3]]
            ],
            [
                [[1], 'span+0', [2], 'span-0', [3]]
            ],
            [
                [[1], 'span+0', [2], 'span-0', [3]]
            ],
            [
                [[1]]
            ],
            [
                [[1]], [[2]], [[3]], [[4]], [[5]]
            ],
            [
                [[1]], [[2]]
            ],
            [
                ['a+0',[1],'a-0','span+1',[2],'span+2',[3],'span-2','span-1']
            ],
            [
                ['a+0', [1], 'a-0', 'span+1', [2], 'span+2', [3], 'span-2', 'span-1']
            ],
            [
                [[1]],[[2]],[[3]]
            ],
            [
                [[1], 'img+0', 'img-0', [2], 'i+1', 'i-1', [3], 'input+2', 'input-2', [4]]
            ],
            [
                [[1, 2]]
            ],
            [
                [[1],'*span+0', [2], 'span-0', [3]]
            ],
        ];
 
        nodeData.forEach((data, i) => {
            it(`matches expected data #${i}`, () => { 
                let node = (fixture.nativeElement as HTMLElement).querySelector(`[getInlinePartials="${i}"]`) as Node;

                const asDocFrag = (node as HTMLElement).getAttribute('asDocFrag');
                if (asDocFrag) {
                    node = toDocumentFragment((node as HTMLElement).innerHTML);
                }

                const partialsCollection = getInlinePartials(node);

                expect(partialsCollection.length).toEqual(data.length);
                
                data.forEach((expectedPartialInfo, index) => {
                    const partials = partialsCollection[index];
                    expect(partials).toBeDefined();

                    if (!partials) {
                        return;
                    }
                    //console.log(partials);
                    expect(partials.length).toEqual(expectedPartialInfo.length, partials);
                        
                    expectedPartialInfo.forEach((simpleNodeInfo, j) => {
                        const simpleNode = partials[j];

                        expect(simpleNode).toBeDefined();

                        if (!simpleNode) {
                            return;
                        }

                        if ('leafs' in simpleNode) {
                            const actualLeafs = simpleNode['leafs'].map(x => x.nodeValue);
                            const expectedLeafs = (simpleNodeInfo as number[]).map(x => x + '');

                            expect(actualLeafs).toEqual(expectedLeafs);
                        } else if ('name' in simpleNode) {
                            const val = `${simpleNode['noTranslation'] ? '*' : ''}${ simpleNode['name'].toLowerCase() }${ simpleNode['type'] === 'open' ? '+' : '-' }${ simpleNode.uid }`;
                            expect(val).toBe(simpleNodeInfo + '');
                        } else {
                            fail('unexpected simple node def');
                        }
                        
                    });                   

                });
            });
        });
        

    });

    describe('getEnclosedBlocks', () => {

        [
            [1, 3]
        ].forEach((testSet, i) => {
            it(`excluded blocks contained within translation-skip attributes - case ${i}`, () => {

                const node = (fixture.nativeElement as HTMLElement).querySelector(`[getEnclosedBlocks="${i}"]`) as Node;
                const inlineNodes = (node as HTMLElement).querySelectorAll('[inline]');

                const enclosedBlocks = getEnclosedBlocks(node, Array.from(inlineNodes)).map(block => block as HTMLElement);

                expect(enclosedBlocks.length).toBe(testSet.length);
                testSet.forEach((value, index) => {
                    expect(enclosedBlocks[index].getAttribute('block')).toBe(value + '');
                });
                
            });
        });

        

    });

    describe('isNodeInline', () => {
        
        it('passes checks', () => {

            (fixture.nativeElement as HTMLElement).querySelectorAll('[isnodeinline]').forEach(node => {
                
                expect(isNodeInline(node)).toBe(node.getAttribute('isnodeinline') === 'true', node);
            });
        });

        it('handles ie11', () => {

            const fakeNode = {
                currentStyle: {
                    display: 'block'
                }
            } as unknown;

            expect(isNodeInline(fakeNode as Node)).toBeTruthy();
        });

        it('says doc frags are blocks', () => {

            const docFrag = document.createDocumentFragment();
            expect(isNodeInline(docFrag)).toBe(false);

        });

    });

    describe('getParentWithStyle', () => {

        [
            (node => ({ node, parent: node.parentElement }))({
                parentElement: {
                    style: {},
                    parentElement: {
                        style: {},
                        parentElement: {}
                    }
                }
            }),
            (node => ({ node, parent: node.parentElement.parentNode }))({
                parentElement: {
                    parentNode: {
                        style: {},
                        parentElement: {}
                    }
                }
            }),
            (node => ({ node, parent: node.parentNode }))({
                parentNode: {
                    style: {},
                    parentElement: {
                        style: {},
                        parentElement: {}
                    }
                }
            }),
            (node => ({ node, parent: node.parentNode.parentElement }))({
                parentNode: {
                    parentElement: {
                        style: {},
                        parentElement: {}
                    }
                }
            })
        ].forEach(({ node, parent }) => {

            it('should return first ancestor with style', () => {

                const result = getParentWithStyle(node as any) as any;

                expect(result).toBe(parent);
            });
        });

        [
            {
                parentElement: {
                    parentElement: {
                        parentElement: {}
                    }
                }
            },
            {
                parentNode: {
                    parentNode: {
                        parentNode: {}
                    }
                }
            },
            {
                parentNode: {
                    parentElement: {
                        parentNode: {}
                    }
                }
            }
        ].forEach(node => {

            it('should return undefined when no ancestor has style', () => {

                const result = getParentWithStyle(node as any) as any;

                expect(result).toBeUndefined();
            });
        });
    });
});
