import { Injectable } from '@angular/core';
import { urlPaths as storefrontPaths, cmsIds as storefrontIds } from 'storefront/constants';

//TODO: this is temp until migration is complete.
//as modules are added, state names will reduce
@Injectable()
export class UrlPaths {
    accountSummary = '/AccountSummary';
    acctInfoUpdateSecondaryCreditCard = '/UpdateSecondCreditCard';
    acctInfoSaveBillingInformation = '/SaveAccountBillingInformation';
    updatePayments = '/UpdatePayments';
    addSecondCreditCard = '/AddSecondCreditCard';
    updateSecondCreditCard = '/UpdateSecondCreditCard';
    editCreditCardInformation = '/EditCreditCardInformation';
    editBankAccountInformation = '/EditBankAccountInformation';
    editCreditCardAddress = '/EditCreditCardAddress';
    addCreditCardInformation = '/AddCreditCardInformation';
    addBankAccountInformation = '/AddBankAccountInformation';
    makePaymentMethodPrimary = '/MakePaymentMethodPrimary';
    //deletePaymentMethod = '/DeletePaymentMethod';
    managePayment = '/ManagePayment';
    managePaymentUpdateBilling = '/ManagePaymentUpdateBilling';
    managePaymentAddSecondaryCreditCard = '/ManagePaymentAddSecondaryCreditCard';
    managePaymentUpdateSecondaryCreditCard = '/ManagePaymentUpdateSecondaryCreditCard';
    managePaymentSaveBillingInformation = '/ManagePaymentSaveBillingInformation';
    activityGraph = '/ActivityGraph';
    creditCardEntry = '/CreditCardEntry';
    forgotPassword = '/ForgotPassword';
    forgotPasswordAccount = '/ForgotPasswordAccount';
    forgotPasswordEmail = '/ForgotPasswordEmail';
    forgotPasswordEmailSent = '/ForgotPasswordEmailSent';
    forgotPasswordValidateAccount = '/ForgotPasswordValidateAccount';
    forgotPasswordValidateAccountEmail = '/eztagstore/getSecurityQuestion.do?id';
    forgotPasswordReset = '/ForgotPasswordReset';
    newAccount = '/NewAccount';
    createAccount = '/PersonalAccount';
    createAccountDetails = '/PersonalInformation';
    addEZTAG = '/AddEZTAG';
    vehicleInformation = '/VehicleInformation';
    addAdditionalVehicle = '/AddAdditionalVehicle';
    paymentMaster = '/PaymentMaster';
    choosePaymentMethod = '/ChoosePaymentMethod';
    enterBankAccount = '/EnterBankAccount';
    createAccountSummary = '/CreateAccountSummary';
    checkout = '/Checkout';
    createAccountReceipt = '/CreateAccountReceipt';
    flexbooker = '/flexbooker';
    //violations = '/Violations';
    helpAndSupport = '/HelpAndSupport';
    manageVehicles = '/ManageVehicles';
    addTag = '/AddTag';
    tagCheckout = '/TagCheckout';
    mvuTagCheckout = '/MVUTagCheckout';
    tagReceipt = '/TagReceipt';
    validatePrimaryEmail = '/eztagstore/confirmPrimaryEmail.do?id';
    sendEmailConfirmation = '/SendEmailConfirmation';
    storeLocations = '/HelpAndSupport#ez-tag-store-locations';
    contactUs = '/HelpAndSupport#email-us';
    activateEzTag = '/ActivateEzTag';
    activateEzTagConfirm = '/ActivateEzTag/Confirm';
    activateEzTagCompletion = '/ActivateEzTag/Completion';
    confirmTagActivation = '/ConfirmTagActivation'; // TODO: remove once Activate EZ Tag refresh goes live
    tagActivationGratitude = '/TagActivationGratitude'; // TODO: remove once Activate EZ Tag refresh goes live
    setupOnlineAccess = '/SetupOnlineAccess';
    setupOnlineAccessLoginInfo = '/SetupOnlineAccessLoginInfo';
    setupOnlineAccessConfirmation = '/SetupOnlineAccessConfirmation';
    editEzTag = '/EditEzTag';
    vehicleSummary = '/VehicleSummary';
    addMoreVehicles = '/AddMoreVehicles';
    editUnfinalizedVehicle = '/EditUnfinalizedVehicle';
    addEzPlate = '/AddEzPlate';
    editEzPlate = '/EditEzPlate';
    suspendedAccountEntry = '/SuspendedAccountEntry';
    suspendedAccountWithoutViolationsPosBal = '/SuspendedAccountWithoutViolationsPositiveBalance';
    suspendedAccountWithoutViolationsNegBal = '/SuspendedAccountWithoutViolationsNegativeBalance';
    suspendedAccountWithViolations = '/SuspendedAccountWithViolations';
    suspendedAccountViolationSummary = '/SuspendedAccountViolationSummary';
    suspendedAccountPaymentReceiptAccountViolations = '/SuspendedAccountPaymentReceiptAccountViolations';
    makePaymentAccountViolations = '/MakePaymentAccountViolations';
    selectPaymentMethodAccountViolations = '/SelectPaymentMethodAccountViolations';
    selectPaymentAmount = '/SelectPaymentAmount';
    selectPaymentMethod = '/SelectPaymentMethod';
    makePayment = '/MakePayment';
    suspendedAccountPaymentReceipt = '/SuspendedAccountPaymentReceipt';
    closeAccountCreditInformation = '/CreditInformation';
    closeAccountSaveBillingInformation = '/SaveBillingInformation';
    multiVehicleUpload = '/MultiVehicleUpload';
    mobileRedirect = '/MobileRedirect';
    ezTagMobileRedirect = '/EzTagMobileRedirect';

    // RSS //
    rssFeed = '/rss/';

    // PDF's //
    EZTAGAgreement = '/Content/pdf/EZTAGAgreement_MobileQuickLink.pdf';

    // Non mobile hctra urls //
    news = 'about_news?CSRT=18208781607148930682';
    internetSecurityPolicy = 'securitypolicy?CSRT=18208781607148930682';
    privacyPolicy = 'privacy/privacy_policy?CSRT=18208781607148930682';

    // 3rd Party developed Pages

    // Travel Tools Map //
    travelToolsMapProd = 'https =//hctra.maps.arcgis.com/apps/webappviewer/index.html?id=527d9322e2244039b0bc3e93fe2c4fc1';
    travelToolsMapUAT = 'http =//hctra.maps.arcgis.com/apps/webappviewer/index.html?id=36ea9b5e26604bf897f232050d4e920f';

    // Target when opening new tab //
    openTabTarget = '_mhctra';
    selfTarget = '';

    // Phone Numbers //
    roadSideAssistPhoneNumber = '(281) 584-7500';

    // CMS Pages //
    roadsideAssistanceCms = '/RoadsideAssistance';
    nonSectionalCms = '/NonSectional';
    sectionalCms = '/Sectional';
    eftHelp = '927199A1-4EE7-4E44-90A0-7578812547BF';
    eftRouter = '1A56C45D-38AD-4E9F-93DA-5EF7257B7E85';
    eftAccount = 'F23E7D74-E9C4-4B37-A0E1-423B7F0AD1F2';
    needHelpCms = '9D566D8A-DC5C-4688-A850-4DB44ABC9FC0';
    whatIsEzPlateCms = 'C310E87B-7491-4C59-BD87-CBD27112A0F2';
    footerLinksCms = '848C860E-4EE0-49F7-A2F1-274A6954AFD2';
    homeContentCms = 'D7BC3008-DCF8-45D6-9A0D-E9454E4ED479'; // '/sitecore/content/HCTRA/Home/HomePage'
    accountDetailsContentCms = '3B40AAAD-AD18-43A3-959F-30F1B4EC144B';
    addTagCms = '85CBB542-59BD-4494-B1C9-D0F688A79BB1';
    openingCostsCms = '1EE01F5C-A28F-492B-B1EA-6597C26E1473';
    accountSetupChargesCms = 'E5C0615D-D0F8-4AA5-BB08-59716B957632';
    loginCms = '78E03901-24F8-4ABD-97B3-949872BCEDBF';
    manageVehiclesCms = 'CE2600F4-0960-4192-9314-171978F6B2DC';
    violationsCms = '387253F5-7671-4929-9FD5-ADB9E1766FDF';
    violationPostPaymentMsgId = 'F325A306-349C-460F-9376-BBF155DBCCC2';
    helpAndSupportPageCms = '37A35F4A-3DAF-4596-B58C-5BEB5F676D8E';
    faqTopFaqCms = 'B33C00E9-F680-4509-8FF1-87E71AB96FDC';
    violationInvoiceInformation = 'E65AA835-79CD-49F4-AB11-4D2DF1CB5C44';
    employment = '/Employment';
    genericJobCms = '/Job';
    newsFeed = '/News';
    newsArchive = '/NewsArchive';
    ratesInformation = '4F066933-6F4B-46A4-AF9E-AEE1F171C88C';
    closures = 'https =//traffic.houstontranstar.org/layers/';
    majorClosureSection = '4E740CEF-9F8F-4DF6-B8FA-E7AE133CB7A8';
    archiveUrlPattern = '/{category}/{page}/{size}';
    newsFeedTitleCmsId = '3CB3178D-4B72-433F-B807-49D6833A3344';
    newsFeedTopSearchCmsQueryId = '5870D93F-EFB1-40B9-A4A0-299310BB214C';
    newsArchiveCmsTitleId = '55B4EA2E-883A-4EB0-9183-98FCB0735143';
    newsArchiveCmsCategoriesFolderId = 'ECCF94E1-4693-414B-AB90-7A0F08A4FF3C';
    newsArchiveCmsCategoriesAllId = '5DA904C7-F1CD-46AD-B974-AC47C7A83221';
    faq = '/FAQ';
    faqPageTitleId = '800C26FD-7198-44A5-937B-BB1A38FEA42B';
    faqTopSearchId = 'B33C00E9-F680-4509-8FF1-87E71AB96FDC';
    faqCategoriesFolderId = '48E23507-F432-4F16-97D2-BE3CAA8024D8';
    faqCategoriesAllId = '110AD977-DD4B-4D36-95F5-8F2A30B22239';
    howToMountEzTag = 'B40CBAB4-DD52-46E2-A5FB-DE7F4CDB8C55';
    ezPlateModal = '492DABF8-7E82-43BA-91AC-15E34643E881';
    createAccountCMS = '21643A9E-E638-45B8-87D5-50D73803516D';
    createAccountReceiptCMS = '2800EDDF-50BA-4AE2-9A86-E5F9A1382B32';
    singleArticle = '/Article';
    cmsSitemap = '8BE16CF8-82D9-4283-BD03-814A6522199B';
    cmsHardyTollRoadPage = '402AF8FA-F76C-49D3-BAB7-82D639BAEEB6';
    allNewsArticles = '441AEF0E-058D-41B2-A336-47CB339A523F';
    cmsEZTAGExpressAppPage = 'AACBF0EC-8B9E-4ED2-ACEE-54FB793CEAB9';
    ezTagAccountTypes = '3045B316-D060-4173-9948-209CA74B70FE';
    closeAccountPopupCms = '0C1804D2-F4CB-4AD4-ACDD-C81BD96B2FCD';
    closeAccountAgreementCms = '6332D1A3-3BFB-4B40-84F3-81F84FA134BA';
    closeAccountRefundCms = '51E6322D-80C2-42E0-84D8-B27C9715DAC6';
    closeAccountReviewCms = '704645C9-6431-48C4-9276-2430E31AE4A3';
    mobileAppPasswordReset = '40B972A8-DA6E-4FD7-BE0B-F59B711D1E77';
    mobileExpressAppPasswordReset = '8b1c34ea-f318-41cf-b399-c1c2cea1be56';
    updateBillingInfoPage = '447482DB-4D58-444B-9B34-A64CB28ACF60';
    makeOneTimePaymentPage = '133D03B5-3F06-4720-A177-9BFDA2CFC7B5';
    suspendedSelectPaymentMethodPage = '15982C8B-06EA-45D4-AB75-61394CF7EBD2';
    updatePersonalInformationId = '1BF911C9-B82D-4936-9ED4-57A58112D48C';
    suspendedAccountWithViolationsCms = 'CE2B48D4-2FBA-412B-8B0D-8D0300D2B133';
    suspendedAccountWithoutViolationsCms = '775B5273-1200-4F2B-9FB3-7FF7E3F4E6CC';
    suspendedAccountNegativeBalanceCms = '4BAD5FAD-8BCB-4839-B06A-EEBA7B2737E3';
    suspendedAccountViolationSummaryCMS = '84879F16-5177-4754-8028-9C36B66DD772';
    suspendAccountReviewPaymentMethodCMS = '56F371F1-C4E1-4970-986E-51B1363F7710';
    suspendedAccountReceiptPage = 'AB570B26-BCC6-4D45-83CB-46F084B5B61F';
    suspendedAccountModal = '2A7EE6E8-F5C5-424B-A906-2F3A56B36544';
    claimSessionPinExplanationCMS = '80150445-6588-4363-92A0-0ABB52F4DFFC';
    claimSessionExpirationModalCMS = '3276A340-E6E4-48CD-9320-3258CBBE745E';
    salModal = '824A448C-F08B-4998-92D2-1679CCE936F6';
    viewAccountOverviewPage = '6B79A25F-240E-4116-A1D8-92829B7420DA';
    viewActivityGraphPage = '9EB903CE-AD81-40A5-B3A6-28B642A8F817';
    viewAccountSummaryPage = '9EB903CE-AD81-40A5-B3A6-28B642A8F817';
    violationPostPopUp = 'CDCD0999-5257-44A3-AF40-4C6AF37A32A1';
    accountActivityTransaction = '32995BB9-63D3-4723-A8A0-C9F822B17444';
    accountActivityReceiptsMessage = 'BB46D638-1AA4-45C4-BB6C-6E424434DF98';
    updateReplenishAmountContent = '62DD7758-3848-4850-B217-5A8CF2E35BA0';
    laneTypesContent = '83D072D2-CE7C-4167-94E2-F6B4E1C765CA';
    suspendedAccountWithoutViolationsPosBalContent = '7D24764A-E74D-4C46-AFDF-461BC9E31BDB';
    employmentContent = '13EF2E4C-898E-46BF-8186-721301CBA6AC';
    updateSecurityQuestionContent = '5EC565A2-7D8D-4F3C-94B2-41CF5434EFC2';
    changePasswordContent = '0280A158-DF4C-4A61-B783-0EF8F6143652';
    changeUsernameContent = '56CA3618-E957-435A-A9D2-D31439A05F09';
    updateAuthorizedContactContent = '19F886CA-9529-4AA8-B747-884D8808B7CD';
    cfdpGridPage = '56D71338-7963-4EDA-99CF-E5E1A3AD7ED0';
    tagCheckoutCms = 'AEF119F4-CEB7-42C8-BDD0-CAF0DC82A2B4';
    mvuTagCheckoutCMS = '9D6DA1C5-4185-4B18-94EC-1DCAEC080E5D';
    deliveryMethodCMS = '969455AA-AD3E-45DE-ACDD-D24DA122941E';
    paymentMethodDisplayIcons = '75C6CEFC-1731-40D9-BBFB-432A9B22784C';
    paymentMethodDisplayIconsRefresh = '9EFD0D9F-2DFD-42A0-96EF-E362097DE154';
    // MVUs should be removed after refresh is complete
    mvuUploadPageCMS = '5705867B-105C-420A-B83D-718614234166';
    mvuUploadPageDownloadInstructionsCMS = 'C6364F98-2FD2-4198-8B1D-CD036BFB56D3';
    mvuUploadPageDownloadTemplateCMS = '595758FC-963A-4BFE-AFE7-6B156EDF2039';
    mvuUploadPageUploadVehicleCSVFileCMS = 'A8DE72D4-3930-495C-BED2-C8EA9B0CAD22';


    // Account Activity //
    accountActivityStatementLargeAccountVerbiage = 'C9DB727D-59BE-49E5-943D-4CCB28F7F823';
    accountActivityYearlySummaryLargeAccountVerbiage = '5B8D7B6A-AF4C-4C21-8CDE-4B448FEB110C';

    //storefront - remove when fully migrated
    storefrontHome = storefrontPaths.Home;
    storefrontSelection = storefrontPaths.Selection;
    storefrontSurvey = storefrontPaths.Survey;

    //workItemSelectionParentPath = '/sitecore/content/HCTRAStorefront/WorkItemsSelection';
    storefrontWorkItemSelectionParentId = 'F7C82552-D773-4201-9DCF-1FC73ABC4EB8';

    storefrontLandingPageId = storefrontIds.LandingPage;

    storefrontSurveyId = '6E541C73-01B8-4B74-9267-246CA5637C79';
    storefrontAdditionalHelpModal = '55E94E47-4385-491F-B520-E5083F07CDF3';
    storefrontAllTasksCompleteModal = 'EAD5CAA9-CC8F-4562-A903-A1A8665BA252';
    storefrontExitSessionModal = '63DDF7A8-7F58-4EFB-BD60-58CF6922F968';
    storefrontLoginHelpModal = 'CD4B21B5-17F8-479C-9B8A-D681F9CE6A2F';
    storefrontOtherOptionsModal = '3B6873FD-8F11-47F1-AE75-0F0C49CE9F55';
    storefrontPaymentViolationsModal = 'B53A711E-1849-4582-994C-44044D346C09';
    storefrontSessionTimeoutModal = 'DF2CCAB8-44AD-48CA-83C9-3A2FF5B4442D';
    storefrontTaskCompleteModal = 'A2ABA941-A602-4CD8-B4CE-4DBBC3FDECB5';
    storefrontThankYouNewAccountModal = 'DE945B22-1D51-41CC-9156-53A711D36115';
    storefrontThankYouCAVVEModal = 'DFBD19F8-F3AB-4458-99A6-C56B274F96D4';
    storefrontThankYouSurveyModal = '456A3B57-EC61-41E3-86C3-0C08D8D8157C';
    storefrontVehicleHasViolationModal = '779C34E0-889F-4CAC-BB43-90107E91D49C';
    storefrontVehicleHasViolationSuspendedAccountModal = 'E07D08AB-FD4E-4415-AB69-0A137A0160B1';
    storefrontfinishAccountSetupModal = 'DFF9F889-4F3D-484A-A86A-D4C2D757C2FC';
    storefrontStatesId = '449337DB-4759-48A7-8982-DC56F92C1F27';
    storefrontDBIdsId = '58F67795-8F55-4E74-8EB2-28CA4412F257';
    storefrontTaskSelectionPageId = 'FC425355-D399-426E-9149-6C49F720F613';
    storefrontHCTRALogoId = '30D08C39-C533-4DC7-8B66-FC37CA8E4F84';
    storefrontBackArrowImgId = '0D08DCDC-596A-4443-A5B5-9346EE7D1CC6';
    storefrontCloseModalImgId = '14E6AA21-C5BA-45AA-9BBC-CB06220DCA4C';
    storefrontMaintenanceImgId = '52E9B21D-94DD-48D0-83E1-6A1F22209878';
    storefrontTaskNotCompleteIconId = '27B37B7E-5279-43D4-8AFE-04B91DC087D0';
    storefrontTaskCompleteIconId = 'F5BEE1E0-30D7-4386-9999-1E3C6ED700B8';
    storefrontSkipTaskOrGoBackModal = 'D0A216CD-39AE-489F-89FF-200DAE2D74BF';
    storefrontSkippedTasksModal = '82770F41-B7A4-43DA-B7A0-EC06CE3055E8';
    storefrontDoMoreModal = 'DE0C7A48-8846-4595-AD6A-BEB8B0D52931';
    storefrontHoverIconId = '3C62E16E-37D4-4C5A-8C2C-13B8108903B9';
    storefrontDefaultIconId = '3FB40165-EFE1-4A19-B713-0A7245C1D690';
    storefrontSelectedIconId = '19F7EE1F-518C-4300-84E7-849DB97EA107';
    storefrontUnsavedTasksModal = '15AA25F8-9B2F-4871-9E2F-2AA8231302FE';
    storefrontThankYouNewAccountNoEzTagModal = 'ACF4270C-0D8A-4126-8A3A-234192A1A6F9';
    storefrontThankYouNewCashAccountEzTagModal = '5E07A58D-2C42-4702-A056-F494DC002E60';
    storefrontThankYouNewCashAccountNoEzTagModal = 'CD454B6A-745F-4E79-9EDA-873534CBF021';
    storefrontCashAccountLoginModal = '90F516DC-303C-4860-86C5-1E4DF4AA9CF9';

    //tripos
    triposEditCreditCardId = '8F68B360-152B-41EB-B174-8B608208E0CF';
    triposCreditCardSwipePromptId = 'A1D9ADA2-CFC9-467C-A20B-4602778EA8CB';
    triposCreditCardSwipePromptAltId = '74021D81-B182-4696-A0BC-E598048ED211';
    triposCreditCardSwipeFailId = '13AAA754-3234-49B0-AF4C-424FC403CBFE';
    triposCreditCardSwipeSuccessId = '0D181CC0-0B3E-420F-B08F-58D49A730479';

    //Snappay Kiosk
    SnappayKioskCreditCardSwipePromptAltId = 'C030163A-B20E-4AFD-87DD-2BEA9FBF9140';

    // CMS Media //
    cmsMediaUrl = '-/media/';
    cmsMediaExt = '.ashx';
    amexIcon = 'DFAB04AE-A21B-4E60-B032-C6A44200ED02';
    bankIcon = '6DC08D2B-A24C-4CA6-99A9-CD41A4AE892F';
    discoverIcon = '8585125F-DAEF-425B-8606-4554462340B4';
    masterCardIcon = '4B1D72A2-96A3-4ABC-9DB9-72F005D828FC';
    visaIcon = 'EFFF7BFC-B332-49FB-BC90-04749BCB60E9';
    manageBillingInformationCmsContent = '1FA05A28-D616-456E-86C9-81609CD77A6E';
    expiredCardPopup = 'D9E3C4BD-1A3F-43A7-B153-1F912804A8FC';
    alertImage = '0F217C86-035F-4460-BF54-C5D870267DBA';
    closeImage = '57DE8DEF-9A64-4E8E-97DE-D7EE35DEE08E';

    // Create Account From Violations //
    createAccountFromViolationsFrameCMS = '9040DE1F-235C-45C7-839B-148E8ECF7BEB';
    createAccountFromViolationsLandingCMS = 'E9BF1249-9861-410B-A948-7F217C024D53';
    createAccountFromViolationsReceiptCMS = '823CC5DC-AEB2-4AE0-A70D-F670695FBDB8';
    createAccountFromViolationsEzTagCMS = 'DE4B9BFD-5582-48A4-9620-3A21A95038CE';
    createAccountFromViolationsBillingInfoCMS = '7A4E602B-3686-46C3-B629-FD9EA565BF09';
    createAccountFromViolationsSummaryCMS = 'D0A30FB4-152B-4BF4-999C-40393ED48B68';
    createAccountFromViolationsInformationIcon = '64689AAD-E983-47E9-A1BE-340D2E74ED4C';
    createAccountFromViolationsMotorcycleToolTip = '530CC892-A132-4161-A9A3-E6A43F891C6C';
}
