import { HttpResponse } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { BaseCmsResponse, CmsItemMap, ListCmsRequest, ListCmsResponse } from '../../../cms/cms.models';
import { CmsBundler } from '../../../cms/services/cmsBundler/cmsBundler.service';
import { CmsPostCache } from '../../../cms/services/cmsPostCache/cmsPostCache.service';
import { WebStorageConst } from '../../../constants/webstorage.constants';
import {
    BaseResponse,
    BillingInfoStateAndCreditCardResponse,
    CheckAccountEligibilityResponse,
    CheckAccountSalEligibilityRequest,
    CheckAccountSalEligibilityResponse,
    EmailConfirmationRequest,
    EmailConfirmationResponse,
    EndStorefrontSessionRequest,
    FeatureToggleResponse,
    FullUnsuspensionPaymentPinkLetterRequest,
    FullUnsuspensionPaymentRequest,
    FullUnsuspensionPaymentResponse,
    GetViolationSummaryCmsContentResponse,
    MaintenanceResponse,
    PushStorefrontRequest,
    StartStorefrontSessionRequest,
    StorefrontSurveyRequest,
    SuspendedAccountGetReceiptDataResponse,
    VantivRequestLog,
    VantivResponseLog,
    VantivTriPosConfiguration,
    VantivTriPosStatus
} from '../../models';
import { ManageEzTagResponse } from '../accountService/account.service';
import { WebStorageService, HttpService } from 'common/services';

export interface IGenericRepoDataFactory {
    /* SEO and Menu Creation */
    GetAllMenuUrlMetadata: (data: any) => Promise<BaseResponse>;

    /* Sitemap */
    postRouteData: (data: any) => Promise<BaseResponse>;

    /* CMS */
    getCmsPageById: (data: any) => Promise<BaseResponse & any>;
    getCmsPagesByIds: (data: any) => Promise<BaseResponse & any>;
    getCmsPages: (data: ListCmsRequest) => Promise<ListCmsResponse>;
    executeCmsPaging: (data: any) => Promise<BaseCmsResponse>;
    executeCmsQuery: (data: any) => Promise<BaseCmsResponse>;
    loadArchivePage: (data: any) => Promise<BaseCmsResponse>;
    getSortedMajorClosures: (data: any) => Promise<BaseCmsResponse>;

    /* Login / Logout */
    claimSession: (data: any) => Promise<BaseResponse>;
    login: (data: any) => Promise<BaseResponse & any>;
    loginKiosk: (data: any) => Promise<BaseResponse & any>;
    logout: () => Promise<BaseResponse>;
    profile: (data: any) => Promise<BaseResponse & any>;

    /* Adding Security Question & Account Information(accnt info contd below) */
    saveInformation: (data: any) => Promise<BaseResponse>;

    /* Account Activity */
    locationCoordinates: (data: any) => Promise<BaseResponse>;
    searchAccountActivity: (data: any) => Promise<BaseResponse>;
    getAccountActivityVM: (data: any) => Promise<BaseResponse>;
    getReport: (data: any, conf: any) => Promise<BaseResponse>;
    setupStatementPage: () => Promise<BaseResponse>;
    getMonthlyInvoice: (data: any) => Promise<BaseResponse>;
    getAccountActivityFrame: () => Promise<BaseResponse>;
    setupYearlyPage: () => Promise<BaseResponse>;
    getYearlySummary: (data: any) => Promise<BaseResponse>;
    setupReceipts: (data: any) => Promise<BaseResponse>;
    getReceipt: (data: any) => Promise<BaseResponse>;
    setupInvoicePage: () => Promise<BaseResponse>;
    getInvoice: (data: any) => Promise<BaseResponse>;

    /* Manage Vehicles */
    getEZTagInfo: () => Promise<ManageEzTagResponse>;
    searchAccountTags: (data: any) => Promise<BaseResponse>;
    switchTagStatus: (data: any) => Promise<BaseResponse>;
    getEditEzTagData: () => Promise<BaseResponse>;
    updateVehicleFromAccountInformation: (data: any) => Promise<BaseResponse>;
    addVehicleFromAccountInformation: (data: any) => Promise<BaseResponse>;
    calculateActivationFee: (data: any) => Promise<BaseResponse>;
    getAccountFromEzTag: () => Promise<BaseResponse>;
    confirmAddTags: (data: any) => Promise<BaseResponse>;
    uploadCSVFile: (data: any) => Promise<BaseResponse>;
    mvuCheckout: (data: any) => Promise<BaseResponse>;

    /* Activate Ez Tags */
    findTagsToActivate: (data: any) => Promise<BaseResponse>;
    finalizeTagActivation: (data: any) => Promise<BaseResponse>;

    /* Suspended Accounts */
    getSuspendedAccountData: () => Promise<BaseResponse>;
    saveBillingInformationSuspended: (data: any) => Promise<BaseResponse>;
    makePaymentCreditCardSuspended: (data: any) => Promise<BaseResponse>;
    makePaymentBankAccountSuspended: (data: any) => Promise<BaseResponse>;
    checkAccountSalEligibility: (data: CheckAccountSalEligibilityRequest) => Promise<CheckAccountSalEligibilityResponse>;
    checkAccountEligibility: (data: CheckAccountSalEligibilityRequest) => Promise<CheckAccountEligibilityResponse>;
    makeFullUnsuspensionPayment: (data: FullUnsuspensionPaymentRequest) => Promise<FullUnsuspensionPaymentResponse>;
    makeFullUnsuspensionPaymentPinkLetter: (data: FullUnsuspensionPaymentPinkLetterRequest) => Promise<FullUnsuspensionPaymentResponse>;
    suspendedAccountGetReceiptData: () => Promise<SuspendedAccountGetReceiptDataResponse>;
    suspendedAccountGetViolationSummaryCmsContent: () => Promise<GetViolationSummaryCmsContentResponse>;
    getAccountSummary: (data: any) => Promise<BaseResponse>;

    /* Account Summary */
    emailConfirmation: (data: EmailConfirmationRequest) => Promise<EmailConfirmationResponse>;
    sendEmailConfirmation: () => Promise<BaseResponse>;

    /*  Common data references */
    getStates: () => Promise<BaseResponse & any>;
    getTagAuthorities: () => Promise<BaseResponse>;
    getSecurityQuestions: () => Promise<BaseResponse>;
    getVehicleMakes: () => Promise<BaseResponse>;
    getCountries: () => Promise<BaseResponse>;


    /* Forgot password */
    submitEmail: (data: any) => Promise<BaseResponse>;
    submitAccount: (data: any) => Promise<BaseResponse>;
    setupFpAccount: () => Promise<BaseResponse>;
    submitSecurityAnswer: (data: any) => Promise<BaseResponse>;
    resetPassword: (data: any) => Promise<BaseResponse>;
    emailSecurityQuestion: (data: any) => Promise<BaseResponse>;

    /* Setup Online Access */
    submitSetupOnlineAccessAccount: (data: any) => Promise<BaseResponse>;
    submitSetupOnlineAccessLoginInfo: (data: any) => Promise<BaseResponse>;

    /* Account Creation */
    setupAccountStep1: (data: any) => Promise<BaseResponse>;
    setPersonalInfo: (data: any) => Promise<BaseResponse>;
    getPersonalInfo: () => Promise<BaseResponse & any>;
    addPaymentCreditCard: (data: any) => Promise<BaseResponse>;
    addPaymentBankAccount: (data: any) => Promise<BaseResponse>;
    updatePaymentCreditCard: (data: any) => Promise<BaseResponse>;
    updatePaymentBankAccount: (data: any) => Promise<BaseResponse>;
    creditCardType: () => Promise<BaseResponse>;
    getCreditCardTypeAndState: () => Promise<BaseResponse>;
    getBillingInfo: () => Promise<BaseResponse>;
    addEZTag: (data: any) => Promise<BaseResponse>;
    getAccountTags: () => Promise<BaseResponse>;
    getCreateAccountSummary: () => Promise<BaseResponse>;
    updateEZTag: (data: any) => Promise<BaseResponse>;
    deleteEZTag: (data: any) => Promise<BaseResponse>;
    makePayment: (data: any) => Promise<BaseResponse>;
    checkoutPayment: (data: any) => Promise<BaseResponse>;
    getCreateAccountReceipt: () => Promise<BaseResponse>;
    getCurrentStep: () => Promise<BaseResponse>;
    //TODO: Move to alpha project
    getFlexbookerConfig: () => Promise<BaseResponse>;


    /* Account Information */
    getAccountInformation: () => Promise<BaseResponse>;
    modifyAccountPreferences: (data: any) => Promise<BaseResponse>;

    getAllPaymentMethods: () => Promise<BaseResponse & any>;
    editBankAccountInfo: (data: any) => Promise<BaseResponse>;
    addBankAccountInfo: (data: any) => Promise<BaseResponse>;
    editCreditCardInfo: (data: any) => Promise<BaseResponse>;
    addCreditCardInfo: (data: any) => Promise<BaseResponse>;
    //deletePaymentInfo: (data: any) => Promise<BaseResponse>;

    getManagePaymentInformation: () => Promise<BaseResponse>;
    saveBillingInformation: (data: any) => Promise<BaseResponse>;
    getAuthorizedContacts: () => Promise<BaseResponse>;
    getAccountPreferences: () => Promise<BaseResponse>;
    modifyAuthorizedContact: (data: any) => Promise<BaseResponse>;
    updatePersonalInfo: (data: any) => Promise<BaseResponse>;
    updateLoginID: (data: any) => Promise<BaseResponse>;
    updateRebillAmount: (data: any) => Promise<BaseResponse>;

    /* Sent a Letter / Fee Reduction - Migrated*/

    /* Close Account */
    getRefundData: () => Promise<BaseResponse & any>;
    closeAccount: (data: any) => Promise<BaseResponse>;

    /* Help & Support */
    getHelpAndSupportInformation: () => Promise<BaseResponse>;
    sendHelpAndSupportEmail: (data: any) => Promise<BaseResponse>;

    /* Make a Payment */
    oneTimePaymentGetBillingInfo: () => Promise<BillingInfoStateAndCreditCardResponse>;
    oneTimeMakePaymentCreditCard: (data: any) => Promise<BaseResponse>;
    oneTimeMakePaymentBankAccount: (data: any) => Promise<BaseResponse>;
    oneTimeSaveBillingInformation: (data: any) => Promise<BaseResponse>;

    /* Billing Validation */
    eftValidateRouting: (data: any) => Promise<BaseResponse>;

    /* Maintenance */
    getMaintenanceDetails: () => Promise<MaintenanceResponse>;

    getToggleStatus: (data: any) => Promise<FeatureToggleResponse>;

    /* Vantiv Logging */
    LogVantivRequest: (data: VantivRequestLog) => Promise<BaseResponse>;
    LogVantivResponse: (data: VantivResponseLog) => Promise<BaseResponse>;

    /* Storefront */
    StorefrontInitialize: () => Promise<any>;
    StartStorefrontDBSession: (data: StartStorefrontSessionRequest) => Promise<BaseResponse & any>;
    PushToStorefrontDB: (data: PushStorefrontRequest) => Promise<BaseResponse>;
    SaveSurveyToStorefrontDB: (data: StorefrontSurveyRequest) => Promise<BaseResponse>;
    EndStorefrontDBSession: (data: EndStorefrontSessionRequest) => Promise<BaseResponse>;

    TriPosConfiguration: (machineName: string) => Promise<VantivTriPosConfiguration>;
    TriPosStatus: (machineName: string) => Promise<VantivTriPosStatus>;
    TriPosError: (data: string[]) => Promise<any>;
    TriPosLog: (log: any) => Promise<any>;

    /* CreateAccountFromViolation */
    GetViolatorAccntInfo: () => Promise<BaseResponse>;
    GetViolatorAccountInfo: () => Promise<BaseResponse>;
    SetViolatorAccountInfo: (data: any) => Promise<BaseResponse>;

    SetBillingInfoCreateAccountViolation: (data: any) => Promise<BaseResponse>;
    GetMailingAddressCreateAccountViolation: () => Promise<BaseResponse & any>;
    GetAccountSummaryCreateAccountFromViolation: () => Promise<BaseResponse>;
    ConvertAccountCreateAccountFromViolation: (data: any) => Promise<BaseResponse>;
}

export interface IGenericRepo {
    dataFactory: IGenericRepoDataFactory;
}

//TODO: Delete dataFactory

@Injectable()
export class GenericRepoService implements IGenericRepo {

    constructor(
        private httpService: HttpService,
        private cmsBundler: CmsBundler,
        private cmsPostCache: CmsPostCache,
        private webStorage: WebStorageService,
        private webStorageConst: WebStorageConst) {
    }

    public dataFactory: IGenericRepoDataFactory = {
        GetAllMenuUrlMetadata: (data: any) => {
            const url = '/api/sessions/Directory/GetAllMenuUrlMetadata';
            return this.cmsPostCache.post(url, data);
        },
        postRouteData: (data: any) => {
            const url = '/api/sessions/Sitemap/PostRouteData';
            return this.httpService.post(url, data);
        },
        getCmsPageById: (data: any) => {
            let request;
            if (typeof data === 'string') {
                request = globalThis.hctraEnvironmentConfiguration.siteCoreApiParameters[data];
            } else {
                request = data;
            }
            return this.cmsBundler.getCmsItemById(request);
        },
        getCmsPagesByIds: (data: any) => this.cmsBundler.getCmsItemByIds(data.requests),
        getCmsPages: (data: any) => {
            const url = '/api/sessions/GenericCms/GetCmsPages';
            return this.httpService.post(url, data);
        },
        executeCmsPaging: (data: any) => {
            const url = '/api/sessions/Article/ExecuteCmsPaging';
            return this.httpService.post(url, data);
        },
        executeCmsQuery: (data: any) => {
            const url = '/api/sessions/GenericCms/ExecuteCmsQuery';
            return this.httpService.post(url, data);
        },
        loadArchivePage: (data: any) => {
            const url = '/api/sessions/Article/LoadArchivePage';
            return this.httpService.post(url, data);
        },
        getSortedMajorClosures: (data: any) => {
            const url = '/api/sessions/GenericCms/GetSortedMajorClosures';
            return this.httpService.post(url, data);
        },
        claimSession: (data: any) => {
            const url = '/api/sessions/Session/ClaimSession';
            return this.httpService.post(url, data);
        },
        login: (data: any) => {
            const url = '/api/sessions/Login/Login';
            return this.httpService.post(url, data);
        },
        loginKiosk: (data: any) => {
            const url = '/api/sessions/Login/LoginKiosk';
            return this.httpService.post(url, data);
        },
        logout: () => {
            const url = '/api/sessions/Login/Logout';
            return this.httpService.get(url);
        },
        profile: (data: any) => {
            const url = '/api/sessions/Login/Profile';
            return this.httpService.post(url, data);
        },
        saveInformation: (data: any) => {
            const url = 'api/sessions/AddMissingInformation/saveMissingInformation';
            return this.httpService.post(url, data);
        },
        locationCoordinates: (data: any) => {
            const url = '/api/LocationCoordinates';
            return this.httpService.post(url, data);
        },
        searchAccountActivity: (data: any) => {
            const url = '/api/sessions/AccountActivity/SearchAccountActivity';
            return this.httpService.post(url, data);
        },
        getAccountActivityVM: (data: any) => {
            const url = '/api/sessions/AccountActivity/GetAccountActivityVM';
            return this.httpService.post(url, data);
        },
        getReport: (data: any, conf: any) => this.httpService.get(data, true, conf, true),
        setupStatementPage: () => {
            const url = '/api/sessions/AccountActivity/SetupStatementPage';
            return this.httpService.get(url);
        },
        getMonthlyInvoice: (data: any) => {
            const url = '/api/sessions/AccountActivity/GetStatement';
            return this.httpService.post(url, data);
        },
        getAccountActivityFrame: () => {
            const url = '/api/sessions/AccountActivity/GetAccountActivityFrame';
            return this.httpService.get(url);
        },
        setupYearlyPage: () => {
            const url = '/api/sessions/AccountActivity/SetupYearlyPage';
            return this.httpService.get(url);
        },
        getYearlySummary: (data: any) => {
            const url = '/api/sessions/AccountActivity/GetYearlySummary';
            return this.httpService.post(url, data);
        },
        setupReceipts: (data: any) => {
            const url = '/api/sessions/AccountActivity/SetupReceipts';
            return this.httpService.post(url, data);
        },
        getReceipt: (data: any) => {
            const url = '/api/sessions/AccountActivity/GetReceipt';
            return this.httpService.post(url, data);
        },
        setupInvoicePage: () => {
            const url = '/api/sessions/AccountActivity/SetupInvoicesPage';
            return this.httpService.get(url);
        },
        getInvoice: (data: any) => {
            const url = '/api/sessions/AccountActivity/GetInvoice';
            return this.httpService.post(url, data);
        },
        getEZTagInfo: () => {
            const url = '/api/sessions/ManageVehicles/GetEzTagsAndAccountInfo';
            return this.httpService.get(url);
        },
        searchAccountTags: (data: any) => {
            const url = '/api/sessions/ManageVehicles/SearchAccountTags';
            return this.httpService.post(url, data);
        },
        switchTagStatus: (data: any) => {
            const url = '/api/sessions/ManageVehicles/SwitchTagStatus';
            return this.httpService.post(url, data);
        },
        getEditEzTagData: () => {
            const url = '/api/sessions/ManageVehicles/GetEditEzTagData';
            return this.httpService.get(url);
        },
        updateVehicleFromAccountInformation: (data: any) => {
            const url = '/api/sessions/ManageVehicles/UpdateVehicleFromAccountInformation';
            return this.httpService.post(url, data);
        },
        addVehicleFromAccountInformation: (data: any) => {
            const url = '/api/sessions/ManageVehicles/AddVehicleFromAccountInformation';
            return this.httpService.post(url, data);
        },
        calculateActivationFee: (data: any) => {
            const url = '/api/sessions/ManageVehicles/CalculateActivationFee';
            return this.httpService.post(url, data);
        },
        getAccountFromEzTag: () => {
            const url = '/api/sessions/ManageVehicles/GetAccount';
            return this.httpService.get(url);
        },
        confirmAddTags: (data: any) => {
            const url = '/api/sessions/ManageVehicles/ConfirmAddTags';
            return this.httpService.post(url, data);
        },
        uploadCSVFile: (data: any) => {
            const url = '/api/sessions/MultiVehicleUpload/UploadCSVFile';
            return this.httpService.post(url, data);
        },
        mvuCheckout: (data: any) => {
            const url = '/api/sessions/MultiVehicleUpload/MVUCheckout';
            return this.httpService.post(url, data);
        },
        findTagsToActivate: (data: any) => {
            const url = '/api/sessions/ActivateEzTag/FindTagsToActivate';
            return this.httpService.post(url, data);
        },
        finalizeTagActivation: (data: any) => {
            const url = '/api/sessions/ActivateEzTag/FinalizeTagActivation';
            return this.httpService.post(url, data);
        },
        getSuspendedAccountData: () => {
            const url = '/api/sessions/SuspendedAccount/GetSuspendedAccountData';
            return this.httpService.get(url);
        },
        saveBillingInformationSuspended: (data: any) => {
            const url = '/api/sessions/SuspendedAccount/SaveBillingInformationSuspended';
            return this.httpService.post(url, data);
        },
        makePaymentCreditCardSuspended: (data: any) => {
            const url = '/api/sessions/SuspendedAccount/MakePaymentCreditCardSuspended';
            return this.httpService.post(url, data);
        },
        makePaymentBankAccountSuspended: (data: any) => {
            const url = '/api/sessions/SuspendedAccount/MakePaymentBankAccountSuspended';
            return this.httpService.post(url, data);
        },
        checkAccountSalEligibility: (data: CheckAccountSalEligibilityRequest): Promise<CheckAccountSalEligibilityResponse> => {
            const url = '/api/sessions/SuspendedAccount/CheckAccountSalEligibility';
            return this.httpService.post(url, data);
        },
        checkAccountEligibility: (data: CheckAccountSalEligibilityRequest): Promise<CheckAccountEligibilityResponse> => {
            const url = '/api/sessions/SuspendedAccount/CheckAccountEligibility';
            return this.httpService.post(url, data);
        },
        makeFullUnsuspensionPayment: (data: FullUnsuspensionPaymentRequest): Promise<FullUnsuspensionPaymentResponse> => {
            const url = '/api/sessions/SuspendedAccount/MakeFullUnsuspensionPayment';
            return this.httpService.post(url, data);
        },
        makeFullUnsuspensionPaymentPinkLetter: (data: FullUnsuspensionPaymentPinkLetterRequest): Promise<FullUnsuspensionPaymentResponse> => {
            const url = '/api/sessions/SuspendedAccount/MakeConsolidatedFullUnsuspensionPayment';
            return this.httpService.post(url, data);
        },
        suspendedAccountGetReceiptData: (): Promise<SuspendedAccountGetReceiptDataResponse> => {
            const url = '/api/sessions/SuspendedAccount/GetReceiptData';
            return this.httpService.get(url);
        },
        suspendedAccountGetViolationSummaryCmsContent: (): Promise<GetViolationSummaryCmsContentResponse> => {
            const url = '/api/sessions/SuspendedAccountViolationSummary/GetViolationSummaryCmsContent';
            return this.httpService.get(url);
        },
        getAccountSummary: (data: any) => {
            const url = '/api/sessions/AccountSummary/GetAccountSummary';
            return this.httpService.post(url, data);
        },
        sendEmailConfirmation: () => {
            const url = '/api/sessions/AccountSummary/SendEmailConfirmation';
            return this.httpService.get(url);
        },
        emailConfirmation: (data: EmailConfirmationRequest): Promise<EmailConfirmationResponse> => {
            const url = '/api/sessions/EmailConfirmation/EmailConfirmation';
            return this.httpService.post(url, data, true);
        },
        /*  Common data references */
        getStates: () => {
            const url = '/api/sessions/CommonData/GetStates';
            return this.httpService.get(url);
        },
        getTagAuthorities: () => {
            const url = '/api/sessions/CommonData/GetTagAuthorities';
            return this.httpService.get(url);
        },
        getSecurityQuestions: () => {
            const url = '/api/sessions/PersonalBusinessData/GetSecurityQuestions';
            return this.httpService.get(url);
        },
        getVehicleMakes: () => {
            const url = '/api/sessions/CommonData/GetVehicleMakes';
            return this.httpService.get(url);
        },
        getCountries: () => {
            const url = '/api/CountryList';
            return this.httpService.get(url);
        },
        submitEmail: (data: any) => {
            const url = '/api/sessions/ForgotPassword/ForgotPasswordEmail';
            return this.httpService.post(url, data);
        },
        submitAccount: (data: any) => {
            const url = '/api/sessions/ForgotPassword/ForgotPasswordAccount';
            return this.httpService.post(url, data);
        },
        setupFpAccount: () => {
            const url = '/api/sessions/ForgotPassword/SetupForgotPasswordAccount';
            return this.httpService.get(url);
        },
        submitSecurityAnswer: (data: any) => {
            const url = 'api/sessions/ForgotPassword/ValidateSecurityAnswer';
            return this.httpService.post(url, data);
        },
        resetPassword: (data: any) => {
            const url = 'api/sessions/ForgotPassword/ResetPassword';
            return this.httpService.post(url, data);
        },
        emailSecurityQuestion: (data: any) => {
            const url = 'api/sessions/ForgotPassword/SecurityQuestionFromEmail';
            return this.httpService.post(url, data);
        },
        submitSetupOnlineAccessAccount: (data: any) => {
            const url = '/api/sessions/SetupOnlineAccess/SetupOnlineAccessAccount';
            return this.httpService.post(url, data);
        },
        submitSetupOnlineAccessLoginInfo: (data: any) => {
            const url = '/api/sessions/SetupOnlineAccess/SetupOnlineAccessLoginInfo';
            return this.httpService.post(url, data);
        },
        setupAccountStep1: (data: any) => {
            const url = '/api/sessions/PersonalBusinessData/SetupAccountStep1';
            return this.httpService.post(url, data);
        },
        setPersonalInfo: (data: any) => {
            const url = '/api/sessions/PersonalBusinessDetails/SetPersonalInfo';
            return this.httpService.post(url, data);
        },
        getPersonalInfo: () => {
            const url = '/api/sessions/PersonalInfo/GetPersonalInfo';
            return this.httpService.get(url);
        },
        addPaymentCreditCard: (data: any) => {
            const url = '/api/sessions/AddPaymentDetails/AddPaymentCreditCard';
            return this.httpService.post(url, data);
        },
        addPaymentBankAccount: (data: any) => {
            const url = '/api/sessions/AddPaymentDetails/AddPaymentBankAccount';
            return this.httpService.post(url, data);
        },
        updatePaymentCreditCard: (data: any) => {
            const url = '/api/sessions/AddPaymentDetails/UpdatePaymentCreditCard';
            return this.httpService.post(url, data);
        },
        updatePaymentBankAccount: (data: any) => {
            const url = '/api/sessions/AddPaymentDetails/UpdatePaymentBankAccount';
            return this.httpService.post(url, data);
        },
        creditCardType: () => {
            const url = 'api/sessions/AddPaymentDetails/CreditCardType';
            return this.httpService.get(url);
        },
        getCreditCardTypeAndState: () => {
            const url = 'api/sessions/AddPaymentDetails/GetCreditCardTypeAndState';
            return this.httpService.get(url);
        },
        getBillingInfo: () => {
            const url = 'api/sessions/AddPaymentDetails/GetBillingInfo';
            return this.httpService.get(url);
        },
        addEZTag: (data: any) => {
            const url = 'api/sessions/AddEZTag/AddEZTag';
            return this.httpService.post(url, data);
        },
        getAccountTags: () => {
            const url = '/api/sessions/AddEZTag/GetAccountTags';
            return this.httpService.get(url);
        },
        getCreateAccountSummary: () => {
            const url = '/api/sessions/CreateAccountSummary/GetCreateAccountSummary';
            return this.httpService.get(url);
        },
        updateEZTag: (data: any) => {
            const url = 'api/sessions/AddEZTag/UpdateEZTag';
            return this.httpService.post(url, data);
        },
        deleteEZTag: (data: any) => {
            const url = 'api/sessions/AddEZTag/DeleteEZTag';
            return this.httpService.post(url, data);
        },
        makePayment: (data: any) => {
            const url = 'api/sessions/Checkout/MakePayment';
            return this.httpService.post(url, data);
        },
        checkoutPayment: (data: any) => {
            const url = 'api/sessions/Checkout/CheckoutPayment';
            return this.httpService.post(url, data);
        },
        getCreateAccountReceipt: () => {
            const url = '/api/sessions/CreateAccountReceipt/GetCreateAccountReceipt';
            return this.httpService.get(url);
        },
        getCurrentStep: () => {
            const url = '/api/sessions/NewAccountCommon/GetCurrentStep';
            return this.httpService.get(url);
        },
        //TODO: Move to alpha project
        getFlexbookerConfig: () => {
            const url = '/api/flexbooker/config';
            return this.httpService.get(url);
        },
        getToggleStatus: (data: any) => {
            const url = 'api/sessions/FeatureToggleStatus/GetToggleStatus';
            return this.httpService.post(url, data);
        },
        getAccountInformation: () => {
            const url = '/api/sessions/AccountInformation/GetAccountInformation';
            return this.httpService.get(url);
        },
        modifyAccountPreferences: (data: any) => {
            const url = '/api/sessions/AccountInformation/ModifyAccountPreferences';
            return this.httpService.post(url, data);
        },
        getAllPaymentMethods: () => {
            const url = '/api/GetAllPaymentMethods';
            return this.httpService.get(url);
        },
        editBankAccountInfo: (data: any) => {
            const url = '/api/EditBankAccountInfo';
            return this.httpService.post(url, data);
        },
        addBankAccountInfo: (data: any) => {
            const url = '/api/AddBankAccountInfo';
            return this.httpService.post(url, data);
        },
        editCreditCardInfo: (data: any) => {
            const url = '/api/EditCreditCardInfo';
            return this.httpService.post(url, data);
        },
        addCreditCardInfo: (data: any) => {
            const url = '/api/AddCreditCardInfo';
            return this.httpService.post(url, data);
        },
        getManagePaymentInformation: () => {
            const url = '/api/sessions/ManagePayment/GetManagePaymentInformation';
            return this.httpService.get(url);
        },
        saveBillingInformation: (data: any) => {
            const url = '/api/sessions/ManagePayment/SaveBillingInformation';
            return this.httpService.post(url, data);
        },
        getAuthorizedContacts: () => {
            const url = '/api/sessions/AccountInformation/GetAuthorizedContacts';
            return this.httpService.get(url);
        },
        getAccountPreferences: () => {
            const url = '/api/sessions/AccountInformation/GetAccountPreferences';
            return this.httpService.get(url);
        },
        modifyAuthorizedContact: (data: any) => {
            const url = '/api/sessions/AccountInformation/ModifyAuthorizedContact';
            return this.httpService.post(url, data);
        },
        updatePersonalInfo: (data: any) => {
            const url = '/api/sessions/PersonalInfo/UpdatePersonalInfo';
            return this.httpService.post(url, data);
        },
        updateLoginID: (data: any) => {
            const url = '/api/sessions/ChangeUsername/UpdateLoginID';
            return this.httpService.post(url, data);
        },
        updateRebillAmount: (data: any) => {
            const url = '/api/sessions/UpdateRebillAmount/UpdateRebillAmount';
            return this.httpService.post(url, data);
        },
        getRefundData: () => {
            const url = '/api/sessions/CloseAccount/GetRefundData';
            return this.httpService.get(url);
        },
        closeAccount: (data: any) => {
            const url = '/api/sessions/CloseAccount/CloseAccount';
            return this.httpService.post(url, data);
        },
        getHelpAndSupportInformation: () => {
            const url = '/api/sessions/HelpAndSupport/GetHelpAndSupportInformation';
            return this.httpService.get(url);
        },
        sendHelpAndSupportEmail: (data: any) => {
            const url = '/api/sessions/HelpAndSupport/SendHelpAndSupportEmail';
            return this.httpService.post(url, data);
        },
        oneTimePaymentGetBillingInfo: () => {
            const url = '/api/sessions/MakeOneTimePayment/GetBillingInfo';
            return this.httpService.get(url);
        },
        oneTimeMakePaymentCreditCard: (data: any) => {
            const url = '/api/sessions/MakeOneTimePayment/MakePaymentCreditCard';
            return this.httpService.post(url, data);
        },
        oneTimeMakePaymentBankAccount: (data: any) => {
            const url = '/api/sessions/MakeOneTimePayment/MakePaymentBankAccount';
            return this.httpService.post(url, data);
        },
        oneTimeSaveBillingInformation: (data: any) => {
            const url = '/api/sessions/MakeOneTimePayment/SaveBillingInformation';
            return this.httpService.post(url, data);
        },
        eftValidateRouting: (data: any) => {
            const url = 'api/sessions/Billing/ValidateEFTRouting';
            return this.httpService.post(url, data);
        },
        getMaintenanceDetails: () => {
            const url = '/api/sessions/Maintenance/GetMaintenanceDetails';
            return this.httpService.get(url);
        },
        LogVantivRequest: (data: any) => {
            data.violationsData = this.webStorage.getValue(this.webStorageConst.violationsLogData);
            const url = '/api/sessions/VantivLog/LogVantivRequestData';
            return this.httpService.post(url, data);
        },
        LogVantivResponse: (data: any) => {
            data.violationsData = this.webStorage.getValue(this.webStorageConst.violationsLogData);
            const url = '/api/sessions/VantivLog/LogVantivResponseData';
            return this.httpService.post(url, data);
        },
        StorefrontInitialize: () => {
            const url = '/api/sessions/Storefront/Initialize';
            return this.httpService.post(url, null);
        },
        StartStorefrontDBSession: (data: StartStorefrontSessionRequest) => {
            const url = '/api/sessions/Storefront/StartStorefrontDBSession';
            return this.httpService.post(url, data);
        },
        PushToStorefrontDB: (data: PushStorefrontRequest) => {
            const url = '/api/sessions/Storefront/PushToStorefrontDB';
            return this.httpService.post(url, data);
        },
        SaveSurveyToStorefrontDB: (data: StorefrontSurveyRequest) => {
            const url = '/api/sessions/Storefront/SaveSurveyToStorefrontDB';
            return this.httpService.post(url, data);
        },
        EndStorefrontDBSession: (data: EndStorefrontSessionRequest) => {
            const url = '/api/sessions/Storefront/EndStorefrontDBSession';
            return this.httpService.post(url, data);
        },
        TriPosConfiguration: (machineName: string): Promise<VantivTriPosConfiguration> => {
            const url = '/api/sessions/VantivTriPosConfiguration/GetConfiguration/' + machineName;
            return this.httpService.get(url);
        },
        TriPosStatus: (machineName: string): Promise<VantivTriPosStatus> => {
            const url = '/api/sessions/VantivTriPosStatus/GetStatus/' + machineName;
            return this.httpService.get(url);
        },
        TriPosError: (data: string[]): Promise<any> => {
            const url = '/api/sessions/VantivTriPosError/SaveError';
            return this.httpService.post(url, data);
        },
        TriPosLog: (log: any): Promise<any> => {
            const url = '/api/sessions/VantivTriPosLogger/Log';
            return this.httpService.post(url, log);
        },
        GetViolatorAccntInfo: (): Promise<BaseResponse> => {
            const url = 'api/sessions/CreateAcctFromViolations/GetViolatorAccntInfo';
            return this.httpService.post(url, null);
        },
        GetViolatorAccountInfo: (): Promise<BaseResponse> => {
            const url = 'api/sessions/CreateAcctFromViolations/GetViolatorAccountInfo';
            return this.httpService.get(url);
        },
        SetViolatorAccountInfo: (data: any): Promise<BaseResponse> => {
            const url = 'api/sessions/CreateAcctFromViolations/SetViolatorAccountInfo';
            return this.httpService.post(url, data);
        },
        SetBillingInfoCreateAccountViolation: (data: any) => {
            const url = '/api/sessions/CreateAcctFromViolations/SetBillingInfo';
            return this.httpService.post(url, data);
        },
        GetMailingAddressCreateAccountViolation: () => {
            const url = '/api/sessions/CreateAcctFromViolations/GetMailingAddress';
            return this.httpService.get(url);
        },
        GetAccountSummaryCreateAccountFromViolation: (): Promise<BaseResponse> => {
            const url = '/api/sessions/CreateAcctFromViolations/GetAccountSummary';
            return this.httpService.get(url);
        },
        ConvertAccountCreateAccountFromViolation: (data: any): Promise<BaseResponse> => {
            const url = 'api/sessions/CreateAcctFromViolations/ConvertAccount';
            return this.httpService.post(url, data);
        }
    };
}

