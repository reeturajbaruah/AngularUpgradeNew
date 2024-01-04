(function () {
    'use strict';

    //describe() begins a unit testing fixture
    describe('creditCardFilter', function () {

        //module() is registered on window and is a shortcut to angular.mock.module()
        //use it to mock the main app module
        //Note: DO NOT include the real app.js file on the testRunner HTML file. This will 
        // cause a cascade of dependencies that you will have a hard time catching-up to. testApp.js 
        // contains a simple module definition that isolates out the complexities. Unit test piece-by-piece
        beforeEach(angular.mock.module('HCTRAModule'));

        var filter;

        beforeEach(angular.mock.inject(function ($injector) {
            filter = $injector.get('$filter');
        }));

        it('should mask all but last 4 digits of credit card given type', function () {

            let filteredCard = filter('creditCard')("4111111111111111", "visa");
            expect(filteredCard).toBeDefined();
            expect(filteredCard).toBe("****-****-****-1111");
            expect(filteredCard).not.toBe("4111111111111111");
            expect(filteredCard).not.toBe("************-1111");
            expect(filteredCard).not.toBe("************1111");

            filteredCard = filter('creditCard')("5269654606884640", "mastercard");
            expect(filteredCard).toBeDefined();
            expect(filteredCard).toBe("****-****-****-4640");
            expect(filteredCard).not.toBe("5269654606884640");
            expect(filteredCard).not.toBe("************-4640");
            expect(filteredCard).not.toBe("************4640");

            filteredCard = filter('creditCard')("6011493679021924", "discover");
            expect(filteredCard).toBeDefined();
            expect(filteredCard).toBe("****-****-****-1924");
            expect(filteredCard).not.toBe("6011493679021924");
            expect(filteredCard).not.toBe("************-1924");
            expect(filteredCard).not.toBe("************1924");

            filteredCard = filter('creditCard')("343679032473180", "americanexpress");
            expect(filteredCard).toBeDefined();
            expect(filteredCard).toBe("****-******-*3180");
            expect(filteredCard).not.toBe("343679032473180");
            expect(filteredCard).not.toBe("************-3180");
            expect(filteredCard).not.toBe("************3180");
        });

        it('should mask all but last 4 digits of credit card given type code', function () {

            let filteredCard = filter('creditCardCode')("4111111111111111", "v");
            expect(filteredCard).toBeDefined();
            expect(filteredCard).toBe("****-****-****-1111");
            expect(filteredCard).not.toBe("4111111111111111");
            expect(filteredCard).not.toBe("************-1111");
            expect(filteredCard).not.toBe("************1111");

            filteredCard = filter('creditCardCode')("5269654606884640", "m");
            expect(filteredCard).toBeDefined();
            expect(filteredCard).toBe("****-****-****-4640");
            expect(filteredCard).not.toBe("5269654606884640");
            expect(filteredCard).not.toBe("************-4640");
            expect(filteredCard).not.toBe("************4640");

            filteredCard = filter('creditCardCode')("6011493679021924", "d");
            expect(filteredCard).toBeDefined();
            expect(filteredCard).toBe("****-****-****-1924");
            expect(filteredCard).not.toBe("6011493679021924");
            expect(filteredCard).not.toBe("************-1924");
            expect(filteredCard).not.toBe("************1924");

            filteredCard = filter('creditCardCode')("343679032473180", "a");
            expect(filteredCard).toBeDefined();
            expect(filteredCard).toBe("****-******-*3180");
            expect(filteredCard).not.toBe("343679032473180");
            expect(filteredCard).not.toBe("************-3180");
            expect(filteredCard).not.toBe("************3180");
        });


        it('should mask return correct card name corresponse to the card code', function () {

            let filteredCard = filter('creditCardCodeToName')("V");
            expect(filteredCard).toBeDefined();
            expect(filteredCard).toBe("VISA");
            expect(filteredCard).not.toBe("MASTERCARD");
            expect(filteredCard).not.toBe("AMERICAN EXPRESS");
            expect(filteredCard).not.toBe("DISCOVER");

            filteredCard = filter('creditCardCodeToName')("M");
            expect(filteredCard).toBeDefined();
            expect(filteredCard).toBe("MASTERCARD");
            expect(filteredCard).not.toBe("VISA");
            expect(filteredCard).not.toBe("AMERICAN EXPRESS");
            expect(filteredCard).not.toBe("DISCOVER");

            filteredCard = filter('creditCardCodeToName')("D");
            expect(filteredCard).toBeDefined();
            expect(filteredCard).toBe("DISCOVER");
            expect(filteredCard).not.toBe("MASTERCARD");
            expect(filteredCard).not.toBe("AMERICAN EXPRESS");
            expect(filteredCard).not.toBe("VISA");

            filteredCard = filter('creditCardCodeToName')("A");
            expect(filteredCard).toBeDefined();
            expect(filteredCard).toBe("AMERICAN EXPRESS");
            expect(filteredCard).not.toBe("MASTERCARD");
            expect(filteredCard).not.toBe("VISA");
            expect(filteredCard).not.toBe("DISCOVER");
        });

    });

}());