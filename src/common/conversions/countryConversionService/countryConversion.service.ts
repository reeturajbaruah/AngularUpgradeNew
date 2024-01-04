import { Injectable, Inject } from '@angular/core';

import { Country } from 'common/conversions/models';
import { isUndefined, find } from 'common/utilities';

@Injectable()
export class CountryConversionService {

    constructor(
    ) { }

    public countryCodeToName = (countryList: Country[], countryCode: string): string => {

        const upperCaseCountryCode = countryCode?.toUpperCase();

        // find the country corresponding to either the countryCode or countryName
        const country = find(countryList,
            u => u.countryCode === countryCode || u.countryName.toUpperCase() === upperCaseCountryCode
        );

        //angular.isUndefined doesnt work anymore
        if (isUndefined(country)) {
            return undefined;
        }
        return country.countryName;
    };

    public countryNameToCode(countryList: Country[], countryName: string): string {

        const lowerCountryName = countryName.toLowerCase();

        // find the country corresponding to the countryName
        const country = find(countryList, u => u.countryName.toLowerCase() === lowerCountryName);

        if (isUndefined(country)) {
            return undefined;
        }
        return country.countryCode;
    }

    public isValidCountryCode(countryList: Country[], value: string): boolean {

        const lowerValue = value.toLowerCase();

        return countryList.some(c => c.countryCode.toLowerCase() === lowerValue);
    }


}
