// Look, this module is for common global services only!!!!
// If your service is only related to a narrow part of the website, it doesn't belong here!
// also, this is a dumping zone for upgraded angularjs services that have not been rewritten.
// Don't put anything new in here unless is really belongs
// in here. Rant complete.

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule as NgCommonModule, CurrencyPipe, SlicePipe } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ValidationModule } from 'validation/module';
import { downgrade } from 'hybrid/module';

import { WindowRef } from './providers';
import { PipesModule } from 'pipes/module';

import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

import { CmsModule } from 'cms/cms.module';
import { CmsReplacementService, CmsUtilService } from 'cms/services';

export * from './providers';

import { ThirdPartyDowngrades } from './thirdPartyDowngrades';

import {
    InputCurrencyDirective,
    AddressEntryComponent,
    CmsContentComponent,
    ProgressBarComponent,

    AddressDisplayComponent,
    PaymentDisplayComponent,

    BankAccountEntryComponent,
    PaymentMethodComponent,

    CreditCardEntryComponent,
    CreditCardEntryExpireOnlyComponent,

    LitelStrategyComponent,
    VantivIFrameStrategyComponent,
    TriPosStrategyComponent,
    SnapPayDeviceStrategyComponent,
    SnapPayIframeStrategyComponent,
   
    WizardComponent,
    WizardNextDirective,
    WizardStateResolverFactory,
    DefaultWizardStateResolverService,
    StepperComponent,

    MatPaginatorGotoComponent,

    TitleBannerComponent,
    TitleSubTitleComponent,
    CardContainerComponent,
    CardDashContainerComponent,
    RowContainerComponent,
    PageCenteredContainerComponent,
    PageCenteredDashContainerComponent,
    PageFilledContainerComponent,
    BottomDrawerContainerComponent,

    PrintLinkComponent,
    BillingModalComponent,
    EftModalComponent,
    FxRowComponent,

    ChooseDeliveryMethodComponent,
    PersonalInfoDisplayComponent,
    VehicleDisplayComponent,
    PrimaryPhoneComponent,
    EmailAddressComponent,
    CreateAccountComponent,
    PersonalInfoComponent,
    VehicleInfoComponent,
    SelectBillingAddressComponent,
    AccountBalanceHeaderComponent,

    EditVehicleModalComponent,
    NewBillingAddressModalComponent,
    LoginModalComponent,

    ActionButtonsComponent,
    ToolTipComponent,

    CurrencyComponent,

    CompletionModalComponent,
    CancelPopUpModalComponent,
    GenericCmsModalComponent,
    PaymentPlansModalComponent,
    ReplenishmentInfoModalComponent,
    TagInfoModalComponent,
    ErrorMessagePopUpModalComponent,


    BillingCardDisplayComponent,


    ClickPreventDefaultDirective,

    VimeoPlayerModalComponent,

    ToasterContainerComponent,
    ToasterComponent,
    PaymentSelectionComponent,


    AppSpinnerComponent,
    SpinnerService,

    AutoReplenishmentIndicatorComponent,

    ReadMoreOrLessComponent,
    MaintenanceModalComponent

} from './ui';

//import { SnapPayDeviceStrategyComponent } from './ui/form-entry/creditCardEntry/snapPayDeviceStrategy.component';
import { CustomStyleDirective } from './provider/CustomStyleDirective';
import { CustomClassDirective } from './provider/CustomClassDirective';
import { DateWithTimeZonePipe } from 'pipes/dateWithTimeZone/dateWithTimeZone.pipe';
import { DriversLicensePipe } from 'pipes/driversLicense/driversLicense.pipe';
import { PhoneNumberPipe } from 'pipes/phoneNumber/phoneNumber.pipe';
import {
    CookieService, CurrentUserService,
    DownloadService, DialogService, StateResolverService,
    DialogSliderWrapComponent,
    MatIconAvailabilityService,
    NotifyOnChangeComponent,
    ResponseErrorService,
    ErrorDisplayService,
    DataService,
    WebApiMaintenanceToggles,
    StringUtilsService,
    SessionService,
    UrlManagerService,
    ArrayUtilService,
    MaintenanceService,
    DateWithTimeZoneService,
    VantivPaymentService,
    EventTrackingService,
    GlobalEventService,
    FeatureToggleResolverService,
    BrowserExtensionHandlerService,
    PciInfoService,
    IsInvoicedService,
    WebStorageService,
    AccountSummaryAlertFilterService,
    MetadataManagerService,
    OperatingSystemSnifferService,
    GlobalVariableService,
    GenericRepoService,
    EditInvoicedMessageService,
    HttpService
} from './services';
import { CountryConversionService } from './conversions';
import { providers } from './upgrades';
import { ActiveVehiclesDisplayComponent } from './ui/display/activeVehiclesDisplay/activeVehiclesDisplay.component';
import { GenericPagingControlComponent } from './ui/display/genericPagingControl/genericPagingControl.component';
import { CreditCardTypeService } from './billing/creditCard/creditCardType.service';
import { ExpirationDateService } from './billing/creditCard/expirationDate.service';
import { BillingInfoUtilitiesService } from './billing/billingInfoUtilities.service';
import { VehicleService, BillingDataService, ManageBillingService } from './services';
import { FutureRoutesService } from './services/futureRoutes.service';
import { PlateDataService, WebApiService } from 'paymentplans/services';
import { ToggleButtonsService } from './services/toggleButtons/toggleButtons.service';

import { DefaultPipe } from '../pipes/default/default.pipe';
import { ShowHideInputButtonComponent } from './ui/form-entry/showHideInputButton/showHideInputButton.component';
import { EzTagAppRedirectLinkService } from './services/ezTagAppRedirectLinkService/ezTagAppRedirectLink.service';

import { AccountService } from './services/accountService/account.service';

import { EftAchDisclaimerComponent } from 'common/billing/eftAchDisclaimer/eftAchDisclaimer.component';
import { PaymentMethodService } from './services/paymentMethodService/paymentMethod.service';
import { FileUploadComponent } from './ui/fileUpload/fileUpload.component';

import { PaymentConfirmationComponent } from './ui/display/paymentConfirmation/paymentConfirmation.component';
import { CreditCardDetailsComponent } from './ui/display/paymentConfirmation/creditcardDetails/creditcardDetails.component';
import { BankDetailsComponent } from './ui/display/paymentConfirmation/bankDetails/bankDetails.component';
import { PaymentEntryComponent } from './ui/form-entry/paymentEntry/paymentEntry.component';
import { BillingAddressComponent } from './ui/form-entry/billingAddress/billingAddress.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PortalModule } from '@angular/cdk/portal';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { HctraMatDateTimePickerWithInputComponent } from './ui/matDateTimePicker/hctraMatDateTimePickerWithInput/hctraMatDateTimePickerWithInput.component';
import { HctraMatDatetimePickerModule } from './ui/matDateTimePicker/lib/datetime-picker.module';
import { HctraMatTimepickerModule } from './ui/matDateTimePicker/lib/timepicker.module';
import { HctraMatNativeDateModule } from './ui/matDateTimePicker/lib/core/native-date.module';
import { DateRangePickerWithHeaderComponent } from './ui/matDateRangePicker/dateRangePickerWithHeader.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { SameAsMailingAddressComponent } from './ui/form-entry/address/sameAsMailingAddress/sameAsMailingAddress.component';
import { UploadService } from './services/upload/upload.service';
import { ContactInfoComponent } from './ui/form-entry/contactInfo/contactInfo.component';
import { ReadMoreOrLessService } from './services/readMoreOrLess/readMoreOrLess.service';
import { AlertBoxModule } from 'shared/ui/display/alert-box/alert-box.module';
import { PhoneNumberModule } from 'shared/ui/form-entry/phone-number/phone-number.module';
import { CheckboxModule } from 'shared/ui/form-entry/checkbox/checkbox.module';

export * from './upgrades';

downgrade('thirdPartyDowngrades', { constant: new ThirdPartyDowngrades() });
downgrade('cmsUtilService', { service: CmsUtilService });
downgrade('countryConversionService', { service: CountryConversionService });
downgrade('creditCardTypeService', { service: CreditCardTypeService });
downgrade('expirationDateService', { service: ExpirationDateService });
downgrade('billingInfoUtilitiesService', { service: BillingInfoUtilitiesService });
downgrade('futureRoutes', { service: FutureRoutesService });

downgrade('ezTagAppRedirectLinkService', { service: EzTagAppRedirectLinkService });
downgrade('localDataRepo', { service: VehicleService });
downgrade('CurrentUser', { service: CurrentUserService });
downgrade('eftAchDisclaimer', { component: EftAchDisclaimerComponent });
downgrade('currency', { component: CurrencyComponent });
downgrade('cookieService', { service: CookieService });
downgrade('manageBillingInformationService', { service: ManageBillingService });
downgrade('fileUploadComponent', { component: FileUploadComponent });
downgrade('responseErrorService', { service: ResponseErrorService });
downgrade('errorDisplayService', { service: ErrorDisplayService });
downgrade('appToasterContainer', { component: ToasterContainerComponent });

downgrade('appSpinner', { component: AppSpinnerComponent });
downgrade('hctraSpinnerService', { service: SpinnerService });

downgrade('readMoreOrLess', { component: ReadMoreOrLessComponent });

downgrade('stringUtilsService', {service: StringUtilsService});
downgrade('SessionService', { service: SessionService });
downgrade('urlManagerService', {service: UrlManagerService});
downgrade('maintenanceService', { service: MaintenanceService });
downgrade('dateWithTimeZoneService', { service: DateWithTimeZoneService });
downgrade('vantivPaymentService', { service: VantivPaymentService });
downgrade('globalEventService', { service: GlobalEventService });
downgrade('toggleButtonsService', { service: ToggleButtonsService });
downgrade('eventTrackingService', { service: EventTrackingService });
downgrade('featureToggleResolver', { service: FeatureToggleResolverService });
downgrade('browserExtensionHandlerService', { service: BrowserExtensionHandlerService });
downgrade('pciInfoService', { service: PciInfoService });
downgrade('isInvoicedService', { service: IsInvoicedService });
downgrade('webStorage', { service: WebStorageService });
downgrade('accountSummaryAlertFilterService', { service: AccountSummaryAlertFilterService });
downgrade('metadataManagerService', { service: MetadataManagerService });
downgrade('operatingSystemSnifferService', { service: OperatingSystemSnifferService });
downgrade('genericRepo', { service: GenericRepoService });
downgrade('editInvoicedMessageService', { service: EditInvoicedMessageService });
downgrade('httpFactory', { service: HttpService });

//a small galaxy
@NgModule({
    providers: [
        ...providers,
        { provide: WindowRef, useValue: window },
        CookieService,
        CurrentUserService,
        MatIconAvailabilityService,
        CurrencyPipe,
        SlicePipe,
        DateWithTimeZonePipe,
        DriversLicensePipe,
        PhoneNumberPipe,
        DefaultPipe,
        DownloadService,
        WizardStateResolverFactory,
        DefaultWizardStateResolverService,
        DialogService,
        CountryConversionService,
        StateResolverService,
        ExpirationDateService,
        BillingInfoUtilitiesService,
        CreditCardTypeService,
        CmsUtilService,
        CmsReplacementService,
        VehicleService,
        FutureRoutesService,
        ThirdPartyDowngrades,

        EzTagAppRedirectLinkService,
        PaymentMethodService,
        AccountService,
        BillingDataService,
        ManageBillingService,
        ResponseErrorService,
        ErrorDisplayService,
        DataService,
        WebApiMaintenanceToggles,
        UploadService,
        SpinnerService,
        ReadMoreOrLessService,
        StringUtilsService,
        SessionService,
        UrlManagerService,
        ArrayUtilService,
        MaintenanceService,
        DateWithTimeZoneService,
        VantivPaymentService,
        ToggleButtonsService,
        EventTrackingService,
        GlobalEventService,
        FeatureToggleResolverService,
        BrowserExtensionHandlerService,
        PciInfoService,
        IsInvoicedService,
        WebStorageService,
        AccountSummaryAlertFilterService,
        MetadataManagerService,
        OperatingSystemSnifferService,
        GlobalVariableService,
        GenericRepoService,
        EditInvoicedMessageService,
        HttpService
    ]
})
export class CommonServicesModule {

    constructor(@Optional() @SkipSelf() module?: CommonServicesModule) {
        if (module) {
            throw new Error(
                'CommonServicesModule is already loaded in a root module. Import it only once in the root module.');
        }
    }
}

@NgModule({
    declarations: [
        InputCurrencyDirective, ProgressBarComponent, CmsContentComponent, WizardComponent, AddressEntryComponent,
        BankAccountEntryComponent, PaymentMethodComponent, AddressDisplayComponent, CreditCardEntryExpireOnlyComponent,
        CreditCardEntryComponent,
        LitelStrategyComponent,
        VantivIFrameStrategyComponent,
        TriPosStrategyComponent,
        SnapPayDeviceStrategyComponent,
        SnapPayIframeStrategyComponent,
        PaymentDisplayComponent, MatPaginatorGotoComponent, PrintLinkComponent,
        ActiveVehiclesDisplayComponent, GenericPagingControlComponent, DialogSliderWrapComponent,
        CardContainerComponent, CardDashContainerComponent, RowContainerComponent,
        PageCenteredContainerComponent, PageCenteredDashContainerComponent, PageFilledContainerComponent,
        BottomDrawerContainerComponent,
        BillingModalComponent, EftModalComponent, FxRowComponent,
        ChooseDeliveryMethodComponent, PersonalInfoDisplayComponent, VehicleDisplayComponent,
        CreateAccountComponent, PersonalInfoComponent, ContactInfoComponent,VehicleInfoComponent,
        SelectBillingAddressComponent, EditVehicleModalComponent, LoginModalComponent,
        AccountBalanceHeaderComponent,
        NewBillingAddressModalComponent, StepperComponent, ActionButtonsComponent, PrimaryPhoneComponent,
        EmailAddressComponent, ToolTipComponent, TitleBannerComponent, TitleSubTitleComponent,
        CurrencyComponent,
        ClickPreventDefaultDirective,
        ShowHideInputButtonComponent, EftAchDisclaimerComponent,

        CompletionModalComponent, CancelPopUpModalComponent, GenericCmsModalComponent, PaymentPlansModalComponent,
        ReplenishmentInfoModalComponent, TagInfoModalComponent,
        ClickPreventDefaultDirective, NotifyOnChangeComponent,
        ErrorMessagePopUpModalComponent,

        CustomStyleDirective, CustomClassDirective,
        BillingCardDisplayComponent,
        VimeoPlayerModalComponent,
        ToasterContainerComponent, ToasterComponent,

        PaymentSelectionComponent,
        WizardNextDirective,
        FileUploadComponent,

        PaymentConfirmationComponent,
        CreditCardDetailsComponent,
        BankDetailsComponent,
        PaymentEntryComponent,
        BillingAddressComponent,
        HctraMatDateTimePickerWithInputComponent,
        DateRangePickerWithHeaderComponent,
        SameAsMailingAddressComponent,

        AutoReplenishmentIndicatorComponent,

        AppSpinnerComponent,

        ReadMoreOrLessComponent,

        MaintenanceModalComponent
    ],
    exports: [
        InputCurrencyDirective, ProgressBarComponent, CmsContentComponent, WizardComponent, AddressEntryComponent,
        BankAccountEntryComponent, PaymentMethodComponent, AddressDisplayComponent, CreditCardEntryExpireOnlyComponent,
        CreditCardEntryComponent,
        LitelStrategyComponent,
        VantivIFrameStrategyComponent,
        TriPosStrategyComponent,
        SnapPayDeviceStrategyComponent,
        SnapPayIframeStrategyComponent,
        PaymentDisplayComponent, MatPaginatorGotoComponent, PrintLinkComponent,
        ActiveVehiclesDisplayComponent, GenericPagingControlComponent, DialogSliderWrapComponent,
        CardContainerComponent, CardDashContainerComponent, RowContainerComponent,
        BottomDrawerContainerComponent,
        PageCenteredContainerComponent, PageCenteredDashContainerComponent, PageFilledContainerComponent,
        BillingModalComponent, EftModalComponent, FxRowComponent,
        ChooseDeliveryMethodComponent, PersonalInfoDisplayComponent, VehicleDisplayComponent,
        CreateAccountComponent, PersonalInfoComponent, ContactInfoComponent, VehicleInfoComponent,
        SelectBillingAddressComponent, EditVehicleModalComponent, LoginModalComponent,
        AccountBalanceHeaderComponent,
        NewBillingAddressModalComponent, StepperComponent, ActionButtonsComponent, PrimaryPhoneComponent,
        EmailAddressComponent, ToolTipComponent, TitleBannerComponent, TitleSubTitleComponent,
        CurrencyComponent,
        ClickPreventDefaultDirective, NotifyOnChangeComponent,
        CompletionModalComponent, CancelPopUpModalComponent, GenericCmsModalComponent, PaymentPlansModalComponent,
        ReplenishmentInfoModalComponent, TagInfoModalComponent,
        ShowHideInputButtonComponent, EftAchDisclaimerComponent, CustomStyleDirective, CustomClassDirective,
        BillingCardDisplayComponent,
        VimeoPlayerModalComponent,
        ToasterContainerComponent, ToasterComponent,
        PaymentSelectionComponent,
        WizardNextDirective,
        FileUploadComponent,
        PaymentEntryComponent,
        BillingAddressComponent,
        PaymentConfirmationComponent,
        CreditCardDetailsComponent,
        BankDetailsComponent,
        HctraMatDateTimePickerWithInputComponent,
        DateRangePickerWithHeaderComponent,
        SameAsMailingAddressComponent,

        AppSpinnerComponent,
        AutoReplenishmentIndicatorComponent,

        ReadMoreOrLessComponent
    ],
    imports: [
        NgCommonModule,
        FormsModule,
        ValidationModule,
        PipesModule,
        FlexLayoutModule,
        MatSelectModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatDividerModule,
        MatIconModule,
        CmsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDatepickerModule,
        MatDialogModule,
        PortalModule,
        HctraMatDatetimePickerModule,
        HctraMatTimepickerModule,
        HctraMatNativeDateModule,
        OverlayModule,
        AlertBoxModule,
        PhoneNumberModule,
        CheckboxModule
    ]
})
export class CommonModule {

}
