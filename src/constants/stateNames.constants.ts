import { Injectable } from '@angular/core';
import { stateNames as storefront } from 'storefront/constants';
//TODO: this is temp until migration is complete.
//as modules are added, state names will reduce
@Injectable()
export class StateNames {
    // Account Summary
    activityGraph = 'ActivityGraph';
    validatePrimaryEmail = 'ValidatePrimaryEmail';
    sendEmailConfirmation = 'SendEmailConfirmation';
    accountSummary = 'AccountSummary';

    // Account Activity
    //migrated

    // New Account

    // todo check why newaccount - may be remove
    newAccount = 'NewAccount'; // todo: used by login component why? usecase?
    createAccount = 'NewAccount.CreateAccount'; // todo: used by Katy lane
    createAccountDetails = 'NewAccount.CreateAccountDetails';
    addEZTag = 'NewAccount.AddEZTAG';
    vehicleInformation = 'NewAccount.AddEZTAG.VehicleInformation';
    addAdditionalVehicle = 'NewAccount.AddEZTAG.AddAdditionalVehicle';
    paymentMaster = 'NewAccount.PaymentMaster';
    choosePaymentMethod = 'NewAccount.PaymentMaster.ChooseMethod';
    enterBankAccount = 'NewAccount.PaymentMaster.BankAccount';
    creditCardEntry = 'NewAccount.PaymentMaster.CreditCard';
    createAccountSummary = 'NewAccount.CreateAccountSummary';
    checkout = 'NewAccount.Checkout';
    createAccountReceipt = 'NewAccount.CreateAccountReceipt';
    flexbooker = 'NewAccount.Flexbooker';

    // Manage Billing Information
    editCreditCardInformation = 'ManageBillingInformation.EditCreditCardInformation';
    editBankAccountInformation = 'ManageBillingInformation.EditBankAccountInformation';
    editCreditCardAddress = 'ManageBillingInformation.EditCreditCardAddress';
    addCreditCardInformation = 'ManageBillingInformation.AddCreditCardInformation';
    addBankAccountInformation = 'ManageBillingInformation.AddBankAccountInformation';
    makePaymentMethodPrimary = 'ManageBillingInformation.MakePaymentMethodPrimary';
    deletePaymentMethod = 'ManageBillingInformation.DeletePaymentMethod';

    // Manage Payment
    managePaymentParent = 'ManagePaymentParent';
    managePayment = 'ManagePaymentParent.ManagePayment';
    updateBillingInformation = 'ManagePaymentParent.UpdateBillingInformation';
    addSecondaryCreditCard = 'ManagePaymentParent.AddSecondaryCreditCard';
    updateSecondaryCreditCard = 'ManagePaymentParent.UpdateSecondaryCreditCard';
    saveBillingInformation = 'ManagePaymentParent.SaveBillingInformation';

    // Account Information
    accountInformationParent = 'AccountInformationParent';

    // Help & Support
    helpAndSupport = 'HelpAndSupport';
    helpAndSupportEmail = 'HelpAndSupport.Email';
    helpAndSupportConfirmation = 'HelpAndSupport.Confirmation';

    // Setup Online Access
    setupOnlineAccess = 'SetupOnlineAccess';
    setupOnlineAccessIdentification = 'SetupOnlineAccess.Identification';
    setupOnlineAccessLoginInfo = 'SetupOnlineAccess.LoginInfo';
    setupOnlineAccessConfirmation = 'SetupOnlineAccess.Confirmation';

    // Manage Vehicles
    manageVehicles = 'ManageVehicles';
    editEzTag = 'EditEzTag';
    addMoreVehicles = 'AddMoreVehicles';
    editUnfinalizedVehicle = 'EditUnfinalizedVehicle';
    vehicleSummary = 'VehicleSummary';
    tagCheckout = 'TagCheckout';
    tagReceipt = 'TagReceipt';
    vehicleEzTags = 'VehicleEzTags';
    addTag = 'AddTag';
    addEzPlate = 'AddEzPlate';
    editEzPlate = 'EditEzPlate';

    // Multivehicle Upload
    multiVehicleUpload = 'MultiVehicleUpload';
    mvuTagCheckout = 'MVUTagCheckout';

    // Activate EZ Tag
    activateEzTagParent = 'ActivateEzTagParent';
    activateEzTag = 'ActivateEzTag';
    activateEzTagConfirm = 'Confirm';
    activateEzTagCompletion = 'Completion';
    confirmTagActivation = 'ConfirmTagActivation'; // TODO: remove once Activate EZ Tag refresh goes live
    tagActivationGratitude = 'TagActivationGratitude'; // TODO: remove once Activate EZ Tag refresh goes live

    // Close Account
    closeAccountParentFrame = 'CloseAccountFrame';
    closeAccountCreditInformation = 'CloseAccountFrame.Credit';
    closeAccountSaveBillingInformation = 'CloseAccountFrame.SaveBillingInformation';

    // Forgot Password
    forgotPassword = 'ForgotPassword';
    forgotPasswordAccount = 'ForgotPasswordParent.ForgotPasswordAccount';
    forgotPasswordValidateAccount = 'ForgotPasswordParent.ForgotPasswordValidateAccount';
    forgotPasswordEmail = 'ForgotPasswordParent.ForgotPasswordEmail';
    forgotPasswordEmailSent = 'ForgotPasswordParent.ForgotPasswordEmailSent';
    forgotPasswordValidateAccountEmail = 'ForgotPasswordParent.ForgotPasswordValidateAccountEmail';
    forgotPasswordReset = 'ForgotPasswordParent.ForgotPasswordReset';
    forgotPasswordParent = 'ForgotPasswordParent';

    // Mobile
    mobileRedirect = 'MobileRedirect';
    ezTagMobileRedirect = 'EzTagMobileRedirect';

    // Miscellaneous
    eZTagAccount = 'eZTagAccount';
    needHelp = 'NeedHelp';
    travelTools = 'TravelTools';

    // Initial CMS Pages
    ezTagPolicies = 'EzTagPolicies';
    roadsideAssistanceCms = 'RoadsideAssistanceCms';
    nonSectionalCms = 'NonSectionalCms';
    sectionalCms = 'SectionalCms';
    employment = 'Employment';
    genericJobCms = 'GenericJobCms';
    newsFeed = 'NewsFeed';
    newsArchive = 'NewsArchive';
    newsArchiveChild = 'NewsArchive.Child';
    closures = 'Closures';
    closuresArchive = 'ClosuresArchive';
    closuresArchiveChild = 'ClosuresArchive.Child';
    faq = 'FrequentlyAskedQuestions';
    faqChild = 'FrequentlyAskedQuestions.Child';
    accountSummaryCollapser = 'AccountSummaryCollapser';
    accountActivityCollapser = 'AccountActivityCollapser';
    singleArticle = 'Article';

    CALLROADSIDEASSISTANCE = 'CALLROADSIDEASSISTANCE';
    EZTAGAgreement = 'EZ TAG Agreement';
    News = 'News';
    EZTAGExpressApp = 'EZTAGExpressApp';

    //Storefront - remove once storefront is fully migrated
    storefrontHome = storefront.Home;
    storefrontSelection = storefront.Selection;
    storefrontSurvey = storefront.Survey;

    ////Create Account from Violations
    //migrated

    //paymentPlans
    //migrated                
}

export const stateNames = new StateNames();
