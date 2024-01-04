import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'maskBankAccount' })
export class BankAccountMaskPipe implements PipeTransform {

    constructor() { }

    transform(bankAccountNumber: string) {
        return '**** ' + (bankAccountNumber || '****').slice(-4);
    }
}
