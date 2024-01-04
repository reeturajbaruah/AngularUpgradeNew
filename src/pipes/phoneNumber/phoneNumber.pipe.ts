import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phoneNumber' })
export class PhoneNumberPipe implements PipeTransform {

    public transform(telephoneInput: string) {
        if (!telephoneInput) { return ''; }

        const value = telephoneInput.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return telephoneInput;
        }

        let country: string;
        let area: string;
        let phoneNum: string;

        switch (value.length) {
            case 10: // PPP####### -> (PPP) ###-####
                country = '1';
                area = value.slice(0, 3);
                phoneNum = value.slice(3);
                break;

            case 11: // +CPPP####### -> C (PPP) ###-#### unless C is 1
                country = value[0];
                area = value.slice(1, 4);
                phoneNum = value.slice(4);
                break;

            case 12: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 2);
                area = value.slice(2, 5);
                phoneNum = value.slice(5);
                break;

            case 13: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 3);
                area = value.slice(3, 6);
                phoneNum = value.slice(6);
                break;

            default:
                return telephoneInput;
        }

        if (country === '1') {
            country = '';
        }
        else {
            country += '-';
        }

        phoneNum = phoneNum.slice(0, 3) + '-' + phoneNum.slice(3);

        return (country + area + '-' + phoneNum).trim();
    }
}
