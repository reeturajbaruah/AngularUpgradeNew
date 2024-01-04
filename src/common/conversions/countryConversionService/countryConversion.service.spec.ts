import { CountryConversionService } from './countryConversion.service';
import { wait } from 'common/utilities';
import { Country } from 'common/conversions/models';
import { isUndefined, find } from 'common/utilities';

describe('countryConversionService', () => {
    let service: CountryConversionService;
    beforeEach(() => {
        service = new CountryConversionService();
    });

    describe('canary', () => {

        it('should pass', async () => {
            expect(true).toBe(true);
        });
    });

    describe('countryCodeToName', () => {
        it('should return country name', async () => {
            const countryList: Country[] = [
                {
                    countryCode: 'TX',
                    countryName: 'TEXAS',
                },
                {
                    countryCode: 'CA',
                    countryName: 'CALIFORNIA',
                }
            ];
            const result = service.countryCodeToName(countryList, 'TX');
            expect(result).toEqual('TEXAS');
        });

        it('should return undefine if no match', async () => {
            const countryList: Country[] = [
                {
                    countryCode: 'TX',
                    countryName: 'TEXAS',
                },
                {
                    countryCode: 'CA',
                    countryName: 'CALIFORNIA',
                }
            ];
            const result = service.countryCodeToName(countryList, 'NY');
            expect(result).toEqual(undefined);
        });
    });

    describe('countryNameToCode', () => {
        it('should return country code', async () => {
            const countryList: Country[] = [
                {
                    countryCode: 'TX',
                    countryName: 'TEXAS',
                },
                {
                    countryCode: 'CA',
                    countryName: 'CALIFORNIA',
                }
            ];
            const result = service.countryNameToCode(countryList, 'TEXAS');
            expect(result).toEqual('TX');
        });

        it('should return undefine if no match', async () => {
            const countryList: Country[] = [
                {
                    countryCode: 'TX',
                    countryName: 'TEXAS',
                },
                {
                    countryCode: 'CA',
                    countryName: 'CALIFORNIA',
                }
            ];
            const result = service.countryNameToCode(countryList, 'NEW YORK');
            expect(result).toEqual(undefined);
        });
    });

    describe('isValidCountryCode', () => {
        it('should return if valid', async () => {
            const countryList: Country[] = [
                {
                    countryCode: 'TX',
                    countryName: 'TEXAS',
                },
                {
                    countryCode: 'CA',
                    countryName: 'CALIFORNIA',
                }
            ];
            const result = service.isValidCountryCode(countryList, 'TX');
            expect(result).toBeTruthy();
        });

        it('should return undefine if no match', async () => {
            const countryList: Country[] = [
                {
                    countryCode: 'TX',
                    countryName: 'TEXAS',
                },
                {
                    countryCode: 'CA',
                    countryName: 'CALIFORNIA',
                }
            ];
            const result = service.isValidCountryCode(countryList, 'NY');
            expect(result).toBeFalsy();
        });
    });

});
