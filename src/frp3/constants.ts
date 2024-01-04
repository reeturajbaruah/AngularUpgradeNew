import { Injectable } from '@angular/core';

@Injectable()
export class StateNames {
    Future = 'Violation.**';
    Root = 'Violation';
    Landing = 'Violation.Landing';
    Grid = 'Violation.Grid';
    MakePayment = 'Violation.MakePayment';
    Confirm = 'Violation.Confirm';
    Receipt = 'Violation.Receipt'; 
}

@Injectable()
export class Routes {
    Future = '/Violation';
    Root = '/Violation';
    Landing = '/Search';
    Grid = '/Info';
    MakePayment = '/PaymentDetails';
    Confirm = '/ConfirmPayment';
    Receipt = '/PaymentReceipt';
}

@Injectable()
export class CmsIds {
    Frame = '12CED1F4-2C2C-4E7A-82F1-95EF216F9BC6';
    Landing = '87F0E3FE-AD38-42C0-BF8B-B6E4D61F9FF2';
    PaymentMethod = 'D9963575-C078-4616-8C74-872FE4094576';

    Confirmation = 'E2D6BDC9-E68C-412D-AEE1-507AB0C68885';

    //Search Page Items
    LandingSectionPayingOutstandingTolls = 'B5F52599-FC7F-4111-8C2D-8CCD35751709';
    LandingSectionDoYouHaveAnEZTagAccount = '10FBC713-C6EC-46FA-BBB5-7936DF794EEC';
    LandingSectionImportantReminders = '89C0ED44-BA53-49E0-B81B-F2A402741CB4';
    LandingSectionInvoiceImage = '6903A6F9-613A-4005-8EFA-030B28DE327E';
    LandingSectionSearchForTollViolationInvoices = '417684EE-B92C-4A65-9626-13F28F5C2738';
    InvoiceExample = '2C4A583E-0A32-40A2-97F4-BAE6DE919AE6';
    LoginModal = '0F16F1F4-3D1F-4ADC-A936-750E16665FC2';
    PaymentPlanModal = 'CBBB1551-F597-468E-93F7-06285AADB185';
    ViolationLoginModal = '76000ACE-4C34-4B88-9B24-AD63FC356BCD';

    // Recipt page items
    ReceiptRefresh = '48D8398A-90ED-4EC6-8514-CAB83F2E0C20';
    ReceiptSectionImportantInformation = '80F9AB4D-9ECA-4169-B4C1-97947C754CF1';
    ReceiptSectionThankYou = 'D3A1E275-0537-4EF0-9D0F-28474D159701';
    ReceiptPaymentPostingPopup = '18649E02-676E-4BE0-80C1-FF2E7340A73B';

    InvoiceDetails = 'FA40825A-3D9A-4AAC-BA86-FBFB80E73532';

    Grid = 'F5574F99-A14B-45CF-8FFE-FB37CF9DB67A';
    PmntPlanToolTip = '4C899ED2-92C8-4535-BBE0-54127CC205B3';
}

@Injectable()
export class FeatureToggles {
}

export const stateNames = new StateNames();
export const cmsIds = new CmsIds();
export const urlPaths = new Routes();
export const featureToggles = new FeatureToggles();
