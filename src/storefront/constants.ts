import { Injectable } from '@angular/core';

@Injectable()
export class StateNames {

    Home = 'storefrontHome';
    Selection = 'storefrontSelection';
    Survey = 'storefrontSurvey';

}

@Injectable()
export class Urls {
    Home = '/Storefront';
    Selection = '/Storefront/Select';
    Survey = '/Storefront/Survey';
}

@Injectable()
export class CmsIds {
    LandingPage = '46C8A5C9-385A-4BB8-B0B0-A12351BCB899';
    Translation = 'B9127D8D-24BA-40A8-BA1E-4B6A37BB0708';
    WorkItemSelectionParentId = 'F7C82552-D773-4201-9DCF-1FC73ABC4EB8';
    SurveyId = '6E541C73-01B8-4B74-9267-246CA5637C79';
    AdditionalHelpModal = '55E94E47-4385-491F-B520-E5083F07CDF3';
    AllTasksCompleteModal = 'EAD5CAA9-CC8F-4562-A903-A1A8665BA252';
    ExitSessionModal = '63DDF7A8-7F58-4EFB-BD60-58CF6922F968';
    LoginHelpModal = 'CD4B21B5-17F8-479C-9B8A-D681F9CE6A2F';
    OtherOptionsModal = '3B6873FD-8F11-47F1-AE75-0F0C49CE9F55';
    PaymentViolationsModal = 'B53A711E-1849-4582-994C-44044D346C09';
    SessionTimeoutModal = 'DF2CCAB8-44AD-48CA-83C9-3A2FF5B4442D';
    TaskCompleteModal = 'A2ABA941-A602-4CD8-B4CE-4DBBC3FDECB5';
    ThankYouNewAccountModal = 'DE945B22-1D51-41CC-9156-53A711D36115';
    ThankYouCAVVEModal = 'DFBD19F8-F3AB-4458-99A6-C56B274F96D4';
    ThankYouSurveyModal = '456A3B57-EC61-41E3-86C3-0C08D8D8157C';
    VehicleHasViolationModal = '779C34E0-889F-4CAC-BB43-90107E91D49C';
    VehicleHasViolationSuspendedAccountModal = 'E07D08AB-FD4E-4415-AB69-0A137A0160B1';
    FinishAccountSetupModal = 'DFF9F889-4F3D-484A-A86A-D4C2D757C2FC';
    NoViolationsFoundModal = '9C0C5B2E-A0B2-4EFE-A943-5CFEFC239520';
    StatesId = '449337DB-4759-48A7-8982-DC56F92C1F27';
    DBIdsId = '58F67795-8F55-4E74-8EB2-28CA4412F257';
    TaskSelectionPageId = 'FC425355-D399-426E-9149-6C49F720F613';
    HCTRALogoId = '30D08C39-C533-4DC7-8B66-FC37CA8E4F84';
    BackArrowImgId = '0D08DCDC-596A-4443-A5B5-9346EE7D1CC6';
    CloseModalImgId = '14E6AA21-C5BA-45AA-9BBC-CB06220DCA4C';
    MaintenanceImgId = '52E9B21D-94DD-48D0-83E1-6A1F22209878';
    TaskNotCompleteIconId = '27B37B7E-5279-43D4-8AFE-04B91DC087D0';
    TaskCompleteIconId = 'F5BEE1E0-30D7-4386-9999-1E3C6ED700B8';
    SkipTaskOrGoBackModal = 'D0A216CD-39AE-489F-89FF-200DAE2D74BF';
    SkippedTasksModal = '82770F41-B7A4-43DA-B7A0-EC06CE3055E8';
    DoMoreModal = 'DE0C7A48-8846-4595-AD6A-BEB8B0D52931';
    HoverIconId = '3C62E16E-37D4-4C5A-8C2C-13B8108903B9';
    DefaultIconId = '3FB40165-EFE1-4A19-B713-0A7245C1D690';
    SelectedIconId = '19F7EE1F-518C-4300-84E7-849DB97EA107';
    UnsavedTasksModal = '15AA25F8-9B2F-4871-9E2F-2AA8231302FE';
    taskCompleteIconId = 'F5BEE1E0-30D7-4386-9999-1E3C6ED700B8';
    taskSkippedIconId = '27B37B7E-5279-43D4-8AFE-04B91DC087D0';
    googleTranslationIconId = 'DAEA2DA5-CDD8-4008-A4B4-8DA85327E979';

    MissedAToll = '6ACA9338-317E-4822-BAA5-8AEF8484D39B';
    GotAnInvoice = '59792751-9FFE-484F-BA11-76EFD99CED61';
    OpenAnAccount = '5882B55D-165B-4343-ABF8-6CED124852AE';
    UpdateBillingInfo = '5C0B747C-C98F-4506-B647-F4FF889F28BB';
    UpdateContactInfo = 'EE5478E2-ECA6-4881-AD4C-B2A25FE84BF2';
    UpdateAuthorizedContact = 'AF862042-7AE6-43CF-891E-B7DE5A98A843';
    UpdateReplenishAmount = '151953D5-4B81-4438-B36F-1BEE3615F498';
    AddOrRemoveTag = '383C5C81-0245-4FF9-974E-16281D8D5DBA';
    MakeAPayment = '63EAEB08-027E-433D-83EC-2E3BC4E598FA';

    swipePromptId = 'A1D9ADA2-CFC9-467C-A20B-4602778EA8CB';
    swipePromptAltId = '74021D81-B182-4696-A0BC-E598048ED211';
    SnappayKioskSwipePromptAltId = 'C030163A-B20E-4AFD-87DD-2BEA9FBF9140';
    swipeFailureId = '13AAA754-3234-49B0-AF4C-424FC403CBFE';
    swipeSuccessId = '0D181CC0-0B3E-420F-B08F-58D49A730479';

}

export const urlPaths = new Urls();
export const stateNames = new StateNames();
export const cmsIds = new CmsIds();

export const whitelistUrls = [
    'api/sessions/MissedAToll',
    'api/sessions/Login',
    'api/sessions/AddMissingInformation',
    'api/sessions/AccountActivity',
    'api/sessions/ManageVehicles',
    'api/sessions/ActivateEzTag',
    'api/sessions/AccountSummary',
    'api/sessions/Storefront',
    'api/sessions/Violations',
    'api/sessions/AccountInformation',
    'api/sessions/MakeOneTimePayment',
    'api/sessions/ManagePayment',
    'api/sessions/PersonalInfo',
    'api/sessions/UpdateRebillAmount',
    'api/sessions/SentALetter',
    'api/sessions/PersonalBusinessData',
    'api/sessions/PersonalBusinessDetails',
    'api/sessions/PersonalInfo',
    'api/sessions/AddPaymentDetails',
    'api/sessions/AddEZTag',
    'api/sessions/CreateAccountSummary',
    'api/sessions/Checkout',
    'api/sessions/CreateAccountReceipt',
    'api/sessions/GetCurrentStep',
    'api/sessions/MultiVehicleUpload'
];
