import { } from 'jasmine';

import { PipeTransform } from '@angular/core';
import { CmsReplacementService } from './cmsReplacement.service';
import { DefaultPipe } from '../../../pipes/default/default.pipe';

describe('cmsReplacementService', () => {

    let service: CmsReplacementService;
    let dateWithTimeZonePipe: jasmine.SpyObj<PipeTransform>;
    let currencyPipe: jasmine.SpyObj<PipeTransform>;
    let defaultPipe: jasmine.SpyObj<PipeTransform>;

    beforeEach(() => {

        dateWithTimeZonePipe = jasmine.createSpyObj('dateWithTimeZonePipe', ['transform']);
        currencyPipe = jasmine.createSpyObj('currencyPipe', ['transform']);
        defaultPipe = jasmine.createSpyObj('defaultPipe', ['transform']);
        service = new CmsReplacementService(currencyPipe as any, dateWithTimeZonePipe as any, defaultPipe as any);
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });
    
    describe('parsePipe', () => {

        it('should parse pipe with no args', () => {

            expect(service['parsePipe'](' somethingWeird ')).toEqual({
                pipeName: 'somethingWeird',
                args: []
            });
        });

        it('should return pipe name with spaces when pipename has spaces', () => {

            expect(service['parsePipe'](' something horrible')).toEqual({
                pipeName: 'something horrible',
                args: []
            });
        });

        it('should parse correctly typed pipeString correctly', () => {

            expect(service['parsePipe'](` something : 1, 'USA', false `)).toEqual({
                pipeName: 'something',
                args: [1, 'USA', false]
            });
        });

        it('should parse strings with : correctly', () => {

            expect(service['parsePipe'](` something : 1, 'U:SA', false `)).toEqual({
                pipeName: 'something',
                args: [1, 'U:SA', false]
            });
        });

        it('should parse incorrectly typed pipeString incorrectly - escaped single quote replaced by double quote', () => {

            expect(service['parsePipe'](` something : 1, 'U\\'SA', false `)).toEqual({
                pipeName: 'something',
                args: [1, 'U"SA', false]
            });
        });

        it('should throw exception when quotes mismatched', async () => {

            expect(() => service['parsePipe'](` something : 1, 'USA, false `)).toThrowError();
        });
    });

    describe('findAllToReplace', () => {
        [
            {
                template: 'Whatever [[something]]',
                expected: [
                    {
                        toReplace: '[[something]]',
                        expression: 'something'
                    }]
            }, {
                template: 'Whatever [[something]], [[something else]]',
                expected: [
                    {
                        toReplace: '[[something]]',
                        expression: 'something'
                    }, {
                        toReplace: '[[something else]]',
                        expression: 'something else'
                    }]
            },
            {
                template: 'Whatever [[somethingUPPER]], [[something | somepipe]] [[something | somepipe: \'arg\']], last [[something | somepipe: \'arg1\', \'arg2\']] ',
                expected: [
                    {
                        toReplace: '[[somethingUPPER]]',
                        expression: 'somethingUPPER'
                    }, {
                        toReplace: '[[something | somepipe]]',
                        expression: 'something | somepipe'
                    }, {
                        toReplace: '[[something | somepipe: \'arg\']]',
                        expression: 'something | somepipe: \'arg\''
                    }, {
                        toReplace: '[[something | somepipe: \'arg1\', \'arg2\']]',
                        expression: 'something | somepipe: \'arg1\', \'arg2\''
                    }]
            }
        ].forEach(({ template, expected }) => {

            it('should transform values in [[]]', async () => {

                expect(service['findAllToReplace'](template as any)).toEqual(expected);
            });
        });

        [
            'Whatever ',
            'Whatever [[]]',
            'Whatever [[  ]]',
            'Whatever [[something@]]',
            'Whatever {{something}}',
            'Whatever {{something.somethingElse}}',
        ].forEach(template => {

            it('should find nothing', async () => {

                expect(service['findAllToReplace'](template as any)).toEqual([]);
            });
        });
    });

    describe('parseExpression', () => {

        [
            {
                expression: ' valA | currency',
                expected: {
                    variableName: 'valA',
                    pipes: [{
                        pipeName: 'currency',
                        args: []
                    }]
                }
            },
            {
                expression: ` valB | currency : 'USD'`,
                expected: {
                    variableName: 'valB',
                    pipes: [{
                        pipeName: 'currency',
                        args: ['USD']
                    }]
                }
            },
            {
                expression: ` valS | currency : 'USD', 'false', true`,
                expected: {
                    variableName: 'valS',
                    pipes: [{
                        pipeName: 'currency',
                        args: ['USD', 'false', true]
                    }]
                }
            },
            {
                expression: ` val | currency: 'USD' | dateWithTimeZone: 'date1'`,
                expected: {
                    variableName: 'val',
                    pipes: [{
                        pipeName: 'currency',
                        args: ['USD']
                    }, {
                        pipeName: 'dateWithTimeZone',
                        args: ['date1']
                    }]
                }
            },
            {
                expression: ` valz | currency | dateWithTimeZone | somethingElse : false`,
                expected: {
                    variableName: 'valz',
                    pipes: [{
                        pipeName: 'currency',
                        args: []
                    }, {
                        pipeName: 'dateWithTimeZone',
                        args: []
                    }, {
                        pipeName: 'somethingElse',
                        args: [false]
                    }]
                }
            }
        ].forEach(({ expression, expected }) => {

            it('should return parsed expression', async () => {
                

                expect(service['parseExpression'](expression)).toEqual(expected);
            });
        });
    });
    
    describe('computeReplacement', () => {

        [
            {
                expression: ' valA | currency',
                replacement: 'weird A',
                expectedArgs: ['alpha']
            },
            {
                expression: ` valB | currency : 'USD'`,
                replacement: 'weird B',
                expectedArgs: [9991, 'USD']
            },
            {
                expression: ` val5 | currency : 'USD', 'false', true`,
                replacement: 'awesome 5',
                expectedArgs: ['what?', 'USD', 'false', true]
            },
        ].forEach(({ expression, replacement, expectedArgs }) => {

            it('should compute replacement using parsed expresion returned by parsedExpression', async () => {

                currencyPipe.transform.and.returnValue(replacement);
                const data = {
                    valA: 'alpha',
                    valB: 9991,
                    val5: 'what?'
                };

                const parsedExpression = service['parseExpression'](expression);

                expect(service['computeReplacement'](parsedExpression, data)).toEqual(replacement);
                expect(currencyPipe.transform).toHaveBeenCalledWith(expectedArgs[0], ...expectedArgs.slice(1));
                expect(currencyPipe.transform).toHaveBeenCalledTimes(1);
            });
        });

        it('should throw when pipe not available', async () => {

            const parsedExpression = {
                variableName: 'val',
                pipes: [{ pipeName: 'fantanstic', args: [] }]
            };

            expect(() => service['computeReplacement'](parsedExpression, { val: 1 })).toThrowError();
        });

        it('should support chaining', async () => {

            currencyPipe.transform.and.returnValue('fake currency output');
            dateWithTimeZonePipe.transform.and.returnValue('fake date output');

            const parsedExpression = {
                variableName: 'val',
                pipes: [{ pipeName: 'currency', args: ['USA'] }, { pipeName: 'dateWithTimeZone', args: ['date1'] }]
            };

            expect(service['computeReplacement'](parsedExpression, { val: 1234 })).toBe('fake date output');
            expect(currencyPipe.transform).toHaveBeenCalledWith(1234, 'USA');
            expect(currencyPipe.transform).toHaveBeenCalledTimes(1);
            expect(dateWithTimeZonePipe.transform).toHaveBeenCalledWith('fake currency output', 'date1');
            expect(dateWithTimeZonePipe.transform).toHaveBeenCalledTimes(1);
        });
    });

    describe('getTemplateTransformer', () => {
        it('should return transformer which transforms template when data is empty obj {}', async () => {

            currencyPipe.transform.and.returnValue('fake currency output');
            dateWithTimeZonePipe.transform.and.returnValue('fake date output');

            expect(service.getTemplateTransformer('[[someRandomProp]]')(undefined)).toEqual('undefined');
        });

        [
            {
                template: '',
                expected: ''
            }, {
                template: '[[someRandomProp]]',
                expected: '1'
            }, {
                template: '[[ someRandomProp]][[ someRandomProp]]',
                expected: '11'
            }, {
                template: '[[ someRandomProp ]] [[ someOtherProp ]]',
                expected: '1 $100'
            }, {
                template: `[[ propY | currency: 'USD' ]] [[ someOtherProp | dateWithTimeZone : 'date2' ]]`,
                expected: 'fake currency output fake date output'
            }, {
                template: `[[ propY | currency: 'USD' | dateWithTimeZone : 'date2' ]]`,
                expected: 'fake date output'
            }
        ].forEach(({ template, expected }) => {

            it('should return transformer which transforms template', async () => {

                currencyPipe.transform.and.returnValue('fake currency output');
                dateWithTimeZonePipe.transform.and.returnValue('fake date output');

                const data = {
                    someRandomProp: 1,
                    someOtherProp: '$100',
                    propY: false
                };

                expect(service.getTemplateTransformer(template)(data)).toEqual(expected);
            });
        });

        [
            'Whatever ',
            'Whatever [[]]',
            'Whatever [[  ]]',
            'Whatever [[something@]]',
            'Whatever {{something}}',
            'Whatever {{something.somethingElse}}',
        ].forEach(template => {

            it('should return transformer which leaves template unchanged', async () => {

                expect(service.getTemplateTransformer(template)({})).toEqual(template);
            });
        });

        it('should return transformer which throws when pipe missing', async () => {

            const transformer = service.getTemplateTransformer('[[ someOtherProp | missingPipe]]');
            expect(() => transformer({})).toThrowError();
        });
    });

    describe('templateTransformer', () => {

        it('should call transformer returned by getTemplateTransformer', async () => {

            const fakeTransformer = jasmine.createSpy('transformer').and.returnValue('fake transformed value');
            spyOn(service, 'getTemplateTransformer').and.returnValue(fakeTransformer);

            expect(service.transformTemplate('fake template input', 'fake data' as any)).toBe('fake transformed value');

            expect(service.getTemplateTransformer).toHaveBeenCalledTimes(1);
            expect(service.getTemplateTransformer).toHaveBeenCalledWith('fake template input');
            expect(fakeTransformer).toHaveBeenCalledWith('fake data');
            expect(fakeTransformer).toHaveBeenCalledTimes(1);
        });
    });
});
