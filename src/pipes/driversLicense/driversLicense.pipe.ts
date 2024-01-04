import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'driversLicense' })
export class DriversLicensePipe implements PipeTransform {

    public transform(driversLicenseInput: string) {
        if (!driversLicenseInput) { return ''; }

        const value = driversLicenseInput
            .trim()
            .substring(driversLicenseInput.length - 3, driversLicenseInput.length);

        const maskedNumber = '****-' + value;

        return maskedNumber;
    }
}
