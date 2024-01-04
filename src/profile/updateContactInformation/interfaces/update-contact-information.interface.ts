import { SiteCoreItem } from 'cms/cms.module';

export interface ContactInfoCMSContent {
    Title: string;
    LongDescription: string;
    Children: SiteCoreItem[];
    EmailAddressTitle: string;
    EmailAddressDesc: string;
    PhoneNumberTitle: string;
    PhoneNumberDesc: string;
    EmailAddressHeader: string;
    AltEmailAddressHeader: string;
    PhoneNumberHeader: string;
    PhoneNumberExtHeader: string;
    AltPhoneNumberHeader: string;
    AltPhoneNumberExtHeader: string;
    AltPhoneNumber2Header: string;
    AltPhoneNumber2ExtHeader: string;
    AddAltPhoneNumberText: string;
    PhoneAlertsOptInDesc: string;
}
