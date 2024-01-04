(() => {
    'use strict';

    describe('directive: validate-driver-license', () => {

        let scope,
            compile;

        const statesExceptTexas = [
            'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
            'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
            'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
            'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
            'SD', 'TN', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'US']

        const allStates = Array.prototype.concat(statesExceptTexas, ['TX']);

        beforeEach(() => {
            angular.mock.module('HCTRAModule');

            angular.mock.inject(($rootScope, $compile) => {
                scope = $rootScope.$new();
                compile = $compile;
            });

            compile(
                angular.element(
                    `<form name="driverLicenseForm">
                    <input type="text" name="licenseState" ng-model="customer.driverLicenseState">
                    <input type="text" name="licenseNumber" ng-model="customer.driverLicenseNumber" validate-driver-license="customer.driverLicenseState">
                    </form>`))(scope);
            scope.$digest();
        });

        it('canary', () => {
            expect(true).toBe(true);
        });



        //alphaNumeric
        allStates.forEach((stateAbbreviation) => {
            [
                '123abc', 
                '123456',
                'abcdef',
                ''
            ].forEach((licenseNumber) => {
                it(`validator alphaNumeric is falsy for licenseNumber "${licenseNumber}" and state ${stateAbbreviation}`, function () {
                    scope.driverLicenseForm.licenseState.$setViewValue(stateAbbreviation);
                    scope.driverLicenseForm.licenseNumber.$setViewValue(licenseNumber);

                    expect(scope.driverLicenseForm.licenseNumber.$error['alphaNumeric']).toBeFalsy();
                });
                });

            [
                '123abc*#',
                '12.',
                'ab@',
                '&',
                '('
            ].forEach((licenseNumber) => {
                it(`validator alphaNumeric is true for licenseNumber "${licenseNumber}" and state ${stateAbbreviation}`, function () {
                    scope.driverLicenseForm.licenseState.$setViewValue(stateAbbreviation);
                    scope.driverLicenseForm.licenseNumber.$setViewValue(licenseNumber);

                    expect(scope.driverLicenseForm.licenseNumber.$error['alphaNumeric']).toBe(true);
                });
            });
        });

        //numericTexasDl
        statesExceptTexas.forEach((stateAbbreviation) => {
            [
                '123456',
                '123abc*#',
                '12.', 'ab@',
                '&',
                '(',
                '123abc',
                '123456',
                'abcdef',
                ''
            ].forEach((licenseNumber) => {
                it(`validator numericTexasDl is falsy for licenseNumber "${licenseNumber}" and state ${stateAbbreviation}`, function () {
                    scope.driverLicenseForm.licenseState.$setViewValue(stateAbbreviation);
                    scope.driverLicenseForm.licenseNumber.$setViewValue(licenseNumber);

                    expect(scope.driverLicenseForm.licenseNumber.$error['numericTexasDl']).toBeFalsy();
                });
            });    
        });

        [
            '0123456789',
            '9876543210',
            '12',
            '34',
            '7',
            ''
        ].forEach((licenseNumber) => {
            it(`validator numericTexasDl is falsy for licenseNumber "${licenseNumber}" and state TX`, function () {
                scope.driverLicenseForm.licenseState.$setViewValue('TX');
                scope.driverLicenseForm.licenseNumber.$setViewValue(licenseNumber);

                expect(scope.driverLicenseForm.licenseNumber.$error['numericTexasDl']).toBeFalsy();
            });
        });

        [
            'abc',
            '123abc',
            '$$',
            '12#',
            'xyz'
        ].forEach((licenseNumber) => {
            it(`validator numericTexasDl is true for licenseNumber "${licenseNumber}" and state TX`, function () {
                scope.driverLicenseForm.licenseState.$setViewValue('TX');
                scope.driverLicenseForm.licenseNumber.$setViewValue(licenseNumber);

                expect(scope.driverLicenseForm.licenseNumber.$error['numericTexasDl']).toBe(true);
            });
        });

        //firstDigitLessThanFiveTexasDL
        statesExceptTexas.forEach((stateAbbreviation) => {
            [
                '923456',
                '623abc*#',
                '82.', 'ab@',
                '&',
                'a',
                ''
            ].forEach((licenseNumber) => {
                it(`validator firstDigitLessThanFiveTexasDl is falsy for licenseNumber "${licenseNumber}" and state ${stateAbbreviation}`, function () {
                    scope.driverLicenseForm.licenseState.$setViewValue(stateAbbreviation);
                    scope.driverLicenseForm.licenseNumber.$setViewValue(licenseNumber);

                    expect(scope.driverLicenseForm.licenseNumber.$error['firstDigitLessThanFiveTexasDl']).toBeFalsy();
                });
            });
        });

        [
            '0',
            '1',
            '2',
            '37',
            '45',
            ''
        ].forEach((licenseNumber) => {
            it(`validator firstDigitLessThanFiveTexasDl is falsy for licenseNumber "${licenseNumber}" and state TX`, function () {
                scope.driverLicenseForm.licenseState.$setViewValue('TX');
                scope.driverLicenseForm.licenseNumber.$setViewValue(licenseNumber);

                expect(scope.driverLicenseForm.licenseNumber.$error['firstDigitLessThanFiveTexasDl']).toBeFalsy();
            });
        });

        [
            '5',
            '61',
            '732',
            '89',
            '912'
        ].forEach((licenseNumber) => {
            it(`validator firstDigitLessThanFiveTexasDl is true for licenseNumber "${licenseNumber}" and state TX`, function () {
                scope.driverLicenseForm.licenseState.$setViewValue('TX');
                scope.driverLicenseForm.licenseNumber.$setViewValue(licenseNumber);

                expect(scope.driverLicenseForm.licenseNumber.$error['firstDigitLessThanFiveTexasDl']).toBe(true);
            });
        });

        //eightDigitTexasDl
        statesExceptTexas.forEach((stateAbbreviation) => {
            [
                '923456',
                '623abc*#',
                '82.', 'ab@',
                '&',
                'a',
                ''
            ].forEach((licenseNumber) => {
                    it(`validator eightDigitTexasDl is falsy for licenseNumber "${licenseNumber}" and state ${stateAbbreviation}`, function () {
                    scope.driverLicenseForm.licenseState.$setViewValue(stateAbbreviation);
                    scope.driverLicenseForm.licenseNumber.$setViewValue(licenseNumber);

                    expect(scope.driverLicenseForm.licenseNumber.$error['eightDigitTexasDl']).toBeFalsy();
                });
            });
        });

        [
            '01234567',
            '12345678',
            '25545646',
            ''
        ].forEach((licenseNumber) => {
                it(`validator eightDigitTexasDl is falsy for licenseNumber "${licenseNumber}" and state TX`, function () {
                scope.driverLicenseForm.licenseState.$setViewValue('TX');
                scope.driverLicenseForm.licenseNumber.$setViewValue(licenseNumber);

                expect(scope.driverLicenseForm.licenseNumber.$error['eightDigitTexasDl']).toBeFalsy();
            });
        });

        [
            '0123456',
            '123456785',
            '2554564a',
            'asd'
        ].forEach((licenseNumber) => {
            it(`validator eightDigitTexasDl is true for licenseNumber "${licenseNumber}" and state TX`, function () {
                scope.driverLicenseForm.licenseState.$setViewValue('TX');
                scope.driverLicenseForm.licenseNumber.$setViewValue(licenseNumber);

                expect(scope.driverLicenseForm.licenseNumber.$error['eightDigitTexasDl']).toBe(true);
            });
        });

        //changes to state cause validate to be called on licence number
        it(`$validate called on licenseNumber once when state changed once`, function () {
            spyOn(scope.driverLicenseForm.licenseNumber, '$validate');

            scope.driverLicenseForm.licenseState.$setViewValue('TX');

            expect(scope.driverLicenseForm.licenseNumber.$validate).toHaveBeenCalledTimes(1);
        });

        it(`$validate called on licenseNumber twice when state changed twice`, function () {
            spyOn(scope.driverLicenseForm.licenseNumber, '$validate');

            scope.driverLicenseForm.licenseState.$setViewValue('TX');
            scope.driverLicenseForm.licenseState.$setViewValue('TN');

            expect(scope.driverLicenseForm.licenseNumber.$validate).toHaveBeenCalledTimes(2);
        });

    });
})();