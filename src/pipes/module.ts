import { NgModule } from '@angular/core';
import { downgrade } from 'hybrid/module';

import { AgencyNamePipe } from './agencyName/agencyName.pipe';
import { SafeHtmlPipe } from './safeHtml.pipe';
import { DateWithTimeZonePipe } from './dateWithTimeZone/dateWithTimeZone.pipe';
import { CollapsedClassPipe } from './collapsedClass/collapsedClass.pipe';
import { DefaultPipe } from './default/default.pipe';
import { CardTypePipe } from './cardType/cardType.pipe';
import { RemoveDoubleCharPipe } from './removeDoubleChar/removeDoubleChar.pipe';
import { DriversLicensePipe } from './driversLicense/driversLicense.pipe';
import { PhoneNumberPipe } from './phoneNumber/phoneNumber.pipe';
import { BankAccountMaskPipe } from './paymentMasking/bankAccountMask.pipe';
import { CreditCardMaskPipe} from './paymentMasking/creditCardMask.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';

downgrade('agencyName', { pipe: AgencyNamePipe });
downgrade('dateWithTimeZone', { pipe: DateWithTimeZonePipe });
downgrade('driversLicense', { pipe: DriversLicensePipe });

@NgModule({
    declarations: [
        AgencyNamePipe, SafeHtmlPipe, CardTypePipe, RemoveDoubleCharPipe,
        DateWithTimeZonePipe, CollapsedClassPipe, DefaultPipe, DriversLicensePipe, PhoneNumberPipe,
        BankAccountMaskPipe, CreditCardMaskPipe, TruncatePipe
    ],
    exports: [
        AgencyNamePipe, SafeHtmlPipe, CardTypePipe, RemoveDoubleCharPipe,
        DateWithTimeZonePipe, CollapsedClassPipe, DefaultPipe, DriversLicensePipe, PhoneNumberPipe,
        BankAccountMaskPipe, CreditCardMaskPipe, TruncatePipe
    ],
    providers: []
})
export class PipesModule {
}
