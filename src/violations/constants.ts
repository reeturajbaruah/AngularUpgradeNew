import { Injectable } from '@angular/core';

//Do not use existing violation states or routes. They are not be replaced just yet.
@Injectable()
export class StateNames {
    Future = 'EnhancedViolations.**';
    Root = 'EnhancedViolations';
    //TODO: Check with Omniture about landing -- old statename was Violations.ViolationsLanding
    Landing = 'EnhancedViolations.Landing';
    Grid = 'EnhancedViolations.Grid';
    MakePayment = 'EnhancedViolations.MakePayment';
    Confirm = 'EnhancedViolations.Confirm';
    Receipt = 'EnhancedViolations.Receipt'; 
}

@Injectable()
export class Routes {
    Future = '/Violations';
    Landing = '/Violations';
    Grid = '/ViolationsGrid';
    MakePayment = '/ViolationsMakePayment';
    Confirm = '/ViolationsConfirm';
    Receipt = '/ViolationsReceipt';
}

@Injectable()
export class CmsIds {
    Frame = '6510426E-557A-43D3-822D-C5E5153104BD';
    Landing = '57026A70-4B7C-4841-9E0F-20DCAF9CD446';
    Grid = '39861EA2-6036-4AC1-AB02-D3A55036CF11';
    GridRefresh = '7E9AB984-1A86-45D2-A927-F3A29A5232F7';
    Confirm = 'EFDD6724-0AC9-4D69-AC2C-AB79538B5169';
    SelectPayment = '6A66B106-75AD-4CB9-AD01-0E9B5A4E0FE4';
    Receipt = '2C11F01E-2113-4D4F-9048-AB1BC3357780';
    ReceiptRefresh = '7ACC0CCD-64B7-4847-9479-B6CC5AA19941';

    //Add'l Landing Refresh Items
    LandingSectionDoYouHaveAnEZTagAccount = 'A3B57164-F5C6-4D54-A4EE-0E442447F97F';
    LandingSectionImportantReminders = '3DB8DA4F-FD08-45C6-9A6C-D03A3F3041DB';
    LandingSectionInvoiceImage = 'E7AC9A13-870D-4910-A243-06C05113D5D1';
    LandingSectionSearchForTollViolationInvoices = '808451DE-E025-463D-B2C4-DFF30E89EF87';
    InvoiceExample = 'A6498EBE-C12C-4DA6-828E-3BBE9A5F8171';
    LoginModal = '824A448C-F08B-4998-92D2-1679CCE936F6';

    //Add'l Receipt Refresh Items
    ReceiptSectionImportantInformation = '2B010F2E-BE74-4787-8361-201EACC3930D';
    ReceiptSectionThankYou = 'A5C4EF15-C445-4ECC-8D7B-B3E47B3253E3';
    ReceiptPaymentPostingPopup = '7831AC53-8D8F-47FE-B868-F1C15634F9AB';
}

//Used only by legacy.
@Injectable()
export class FeatureToggles {
    DiscountPerAgencyAvailable = 'DiscountPerAgencyAvaliable';
}

export const stateNames = new StateNames();
export const cmsIds = new CmsIds();
export const urlPaths = new Routes();
export const featureToggles = new FeatureToggles();
