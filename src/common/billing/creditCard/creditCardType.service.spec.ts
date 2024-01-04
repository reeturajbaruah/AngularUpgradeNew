import { CreditCardTypeService } from './creditCardType.service';

describe('CreditCardTypeService', () => {
    let service: CreditCardTypeService;
    let enviromentConfig;
    beforeEach(() => {
        enviromentConfig = {
            cardTypeDefinitions: {
                visa: {
                    Prefixes: [
                        '^4([0-9]|[0-9])'
                    ]
                },
                mastercard: {
                    Prefixes: [
                        '^(5[1-5][0-9]|222[1-9]|22[3-9][0-9]|2[3-6][0-9]|27[01][0-9]|2720)[0-9]'
                    ]
                },
                americanExpress: {
                    Prefixes: [
                        '^3[7|4][0-9]'
                    ]
                },
                discover: {
                    Prefixes: [
                        '^(6011[0-9]|65[0-9])'
                    ]
                }
            }
        };
        service = new CreditCardTypeService(
            enviromentConfig
        );
    });

    describe('canary', () => {

        it('should pass', async () => {
            expect(true).toBe(true);
        });
    });

    describe('findCardCode', () => {
        const testCases = [
            { cardNum: 'error', result: 'NA', cardName: 'random' },
            { cardNum: '4111111111111111', result: 'V', cardName: 'visa' },
            { cardNum: '5105105105105100', result: 'M', cardName: 'mastercard' },
            { cardNum: '371449635398431', result: 'A', cardName: 'americanExpress' },
            { cardNum: '6011111111111117', result: 'D', cardName: 'discover' }
        ];

        testCases.forEach((test, index) => {
            it(`should return ${test.result} when ${test.cardName} passed with ${test.cardNum}. (testcase: ${index + 1})`, () => {
                const result = service.findCardCode(test.cardNum);
                expect(result).toEqual(test.result);
            });
        });
    });

    describe('cardCodeToName', () => {
        const testCases = [
            { cardCode: 'NA', result: undefined, cardName: 'random' },
            { cardCode: 'V', result: 'VISA', cardName: 'visa' },
            { cardCode: 'M', result: 'MASTERCARD', cardName: 'mastercard' },
            { cardCode: 'A', result: 'AMEX', cardName: 'americanExpress' },
            { cardCode: 'D', result: 'DISCOVER', cardName: 'discover' }
        ];

        testCases.forEach((test, index) => {
            it(`should return ${test.result} when ${test.cardName} passed with cardCode ${test.cardCode}. (testcase: ${index + 1})`, () => {
                const result = service.cardCodeToName(test.cardCode);
                expect(result).toEqual(test.result);
            });
        });
    });
});
