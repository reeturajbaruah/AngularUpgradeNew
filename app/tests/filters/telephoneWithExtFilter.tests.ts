(function () {
    'use strict';

    describe('telephoneWithExtFilter test test', function () {

        beforeEach(angular.mock.module('HCTRAModule'));

        var $filter, telFilter;

        beforeEach(angular.mock.inject(function ($injector) {
            $filter = $injector.get('$filter');
            telFilter = $filter('telephoneWithExt');
        }));

        it('should mask 10 digit phone numbers to (###) ###-#### ext ####', function () {

            var filteredString = telFilter("1234567890 ext 1234");
            expect(filteredString).toBe("(123) 456-7890 ext 1234");

        });

        it('should mask 11 digit phone numbers to (###) ###-#### ext #### if country is 1', function () {

            var filteredString = telFilter("11234567890 ext 1234");
            expect(filteredString).toBe("(123) 456-7890 ext 1234");

        });

        it('should mask 11 digit phone numbers to # (###) ###-#### ext #### if country is not 1', function () {

            var filteredString = telFilter("21234567890 ext 1234");
            expect(filteredString).toBe("2 (123) 456-7890 ext 1234");

        });

        it('should mask 12 digit phone numbers to ### (##) ###-#### ext ####', function () {

            var filteredString = telFilter("121234567890 ext 1234");
            expect(filteredString).toBe("121 (23) 456-7890 ext 1234");

        });

    });

} ());