import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, EventEmitter } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteCoreItem } from 'cms/cms.module';
import { CmsUtilService, CmsReplacementService } from 'cms/services';
import {
    BillingInfoUtilitiesService
} from 'common/billing/billingInfoUtilities.service';
import { BaseResponse, ErrorMessage } from 'common/interfaces';
import {
    BillingModalComponent,
    InjectionValues as BillingInjectionValues
} from 'common/ui/modals/billingModal/billingModal.component';
import { BillingType, BankAccountType, BillingInfo, PaymentMethodOptions  } from 'common/models';
import { ResponseErrorService, ToasterService, DialogService, ManageBillingService, BillingDataService } from 'common/services';
import { PipesModule } from 'pipes/module';
import { changesStable } from 'testing';
import { WebApisService } from 'profile/services/webApis.service';
import { UpdateBillingInformationComponent } from 'profile/updateBillingInformation/updateBillingInformation.component';
import { PaymentMethodsComponent, RemoveCMS, UnblockCMS } from './paymentMethods.component';
import { RemovePaymentModalResultInjectionValues } from '../removePaymentModal/removePaymentModal.component';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';

describe('PaymentMethods Component', () => {
    let parent: UpdateBillingInformationComponent;
    let fixture: ComponentFixture<PaymentMethodsComponent>;
    let component: PaymentMethodsComponent;
    let cmsUtilService;
    let responseErrorService: jasmine.SpyObj<any>;
    let webApi: jasmine.SpyObj<WebApisService>;
    let dialogService: DialogService;
    let toasterService: jasmine.SpyObj<ToasterService>;
    let billingInfoUtilitiesService: jasmine.SpyObj<BillingInfoUtilitiesService>;
    let billingDataService: BillingDataService;
    let cmsReplacementService: jasmine.SpyObj<CmsReplacementService>;
    let manageBillingInformationService: jasmine.SpyObj<ManageBillingService>;
    let titleCasePipe: jasmine.SpyObj<TitleCasePipe>;
    let authService: AuthenticationService;

    beforeEach(async () => {

        parent = jasmine.createSpyObj('UpdateBillingInformationComponent',
            ['isBlockedPaymentMethod', 'isSelected', 'toggleAnimation', 'loadGrid', 'isFlexPay']);
        authService = jasmine.createSpyObj('authService', ['profile']);

        parent.cmsContent = {
            EDIT_MODAL: '',
            ADD_MODAL_ALL: '',
            ADD_MODAL_CARD: '',
            ADD_MODAL_EFT: '',
            BLOCKED_DESC: '',
            BLOCKED_TITLE: '',
            Children: null,
            LongDescription: '',
            PAGE_TITLE: '',
            SUCCESS_DESC: '',
            SUCCESS_TITLE: '',
            SUCCESS_BUTTON: '',
            BUTTON_CANCEL: '',
            BUTTON_SAVE: '',
            BUTTON_CONTINUE: '',
            NO_DATA_TITLE: '',
            BUTTON_CONFIRM: ''
        };

        parent.paymentMethods = [];
        parent.isFlexPay = false;

        cmsUtilService = jasmine.createSpyObj('CmsUtilService', ['parseAllImageAttributes']);

        (cmsUtilService.parseAllImageAttributes as jasmine.Spy).and.returnValue({
            image: ''
        });

        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['generateFileSrc']);
        (cmsUtilService.generateFileSrc as jasmine.Spy).and.returnValue('fakeFileSrc');
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['displayAlertsFromResponse', 'displayErrorsFromResponse', 'isErrorFree']);
        webApi = jasmine.createSpyObj('webApi', ['getAllPaymentMethods', 'unblockPaymentMethod', 'removePaymentMethod', 'updateRebillAmount']);
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered', 'openGenericModal']);
        toasterService = jasmine.createSpyObj('toasterService', ['removeAll', 'show']);
        billingInfoUtilitiesService = jasmine.createSpyObj('billingInfoUtilitiesService', ['isInternationalAddress']);
        manageBillingInformationService = jasmine.createSpyObj('manageBillingInfoService', ['refreshBillingInfo']);
        (manageBillingInformationService.refreshBillingInfo as jasmine.Spy).and.callFake(() => {
            manageBillingInformationService.billingInformation = {
                selected: null,
                allPaymentContainers: null
            };
        });
        billingDataService = jasmine.createSpyObj('billingDataService', ['updatePaymentInfo']);
        (billingDataService.updatePaymentInfo as jasmine.Spy).and.returnValue([]);
        cmsReplacementService = jasmine.createSpyObj('cmsTextInsertionService', ['transformTemplate']);
        titleCasePipe = jasmine.createSpyObj('titleCasePipe', ['transform']);

        await TestBed
            .configureTestingModule({
                declarations: [PaymentMethodsComponent],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, BrowserAnimationsModule],
                providers: [
                    { provide: UpdateBillingInformationComponent, useFactory: () => parent },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: WebApisService, useFactory: () => webApi },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: ToasterService, useFactory: () => toasterService },
                    { provide: BillingInfoUtilitiesService, useFactory: () => billingInfoUtilitiesService },
                    { provide: ManageBillingService, useFactory: () => manageBillingInformationService },
                    { provide: BillingDataService, useFactory: () => billingDataService },
                    { provide: CmsReplacementService, useFactory: () => cmsReplacementService },
                    { provide: TitleCasePipe, useFactory: () => titleCasePipe },
                    { provide: AuthenticationService, useFactory: () => authService },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(PaymentMethodsComponent);
        component = fixture.debugElement.componentInstance;
        component.paymentMethod = {
            credit: {
                cardCode: 'a',
                address1: '',
                cardNbr: '1111',
                city: '',
                country: '',
                expMonth: 1,
                expYear: 2021,
                nameOnCard: '',
                accountBillingMethodId: 1,
                primary: true
            },
            eft: {
                accountNumber: '987654321',
                accountType: BankAccountType.Personal,
                address1: '',
                city: '',
                country: '',
                routingNumber: '',
                primary: false,
                name: ''
            },
            billingType: 'EFT'
        };

        component.unblockCMS = {
            Title: 'Title',
            ShortDescription: 'So short',
            LongDescription: 'So long'
        } as UnblockCMS;

        component.removeCMS = {
            Title: 'Title',
            ShortDescription: 'So short',
            NewPrimaryContent: ''
            
        } as RemoveCMS;

        component.removeOnlyCMS = {
            Title: 'Title',
            ShortDescription: 'So short',
            LongDescription: 'So long'
        } as SiteCoreItem;

        component.makePrimaryCMS = {
            Title: 'Title',
            LongDescription: 'So long'
        } as SiteCoreItem;

        await changesStable(fixture);
    });

    describe('canary', () => {
        it('should pass', async () => {
            expect(component).toBeDefined();
        });
    });

    describe('getIconImage', () => {

        it('should return an empty string if icons is null', async () => {
            //Assemble
            component.paymentMethodImages = null as any;

            //Act
            const result = component['getIconImage']();

            //Assert
            expect(result).toBe('');
        });

        it('should call cmsUtilService.generateFileSrc if icons is not null', async () => {
            //Assemble
            component.paymentMethodImages = { Children: [] };

            //Act
            component['getIconImage']();

            //Assert
            expect(cmsUtilService.generateFileSrc).toHaveBeenCalledTimes(1);
        });

        [{ creditCardType: 'Visa', cardCode: 'v' },
        { creditCardType: 'MasterCard', cardCode: 'm' },
        { creditCardType: 'Discover', cardCode: 'd' },
        { creditCardType: 'AMEX', cardCode: 'a' }
        ]
            .forEach(testCase => {

                it(`should call cmsUtilService.generateFileSrc with cardCode of ${testCase.creditCardType}`, async () => {
                    //Assemble
                    component.paymentMethodImages = {
                        Children: [
                            {
                                ItemName: `${testCase.creditCardType}`,
                                Image: `${testCase.creditCardType} Image`
                            }
                        ]
                    };
                    component.paymentType = BillingType.Credit;
                    component.paymentMethod.credit.cardCode = testCase.cardCode;
                    component.paymentMethod.billingType = 'CREDIT';
                    (cmsUtilService.generateFileSrc as jasmine.Spy).and.returnValue(component.paymentMethodImages.Children[0].Image);

                    //Act
                    const result = component['getIconImage']();

                    //Assert
                    expect(cmsUtilService.generateFileSrc).toHaveBeenCalledTimes(1);
                    expect(cmsUtilService.generateFileSrc).toHaveBeenCalledWith(component.paymentMethodImages.Children[0].Image);
                    expect(result).toBe(component.paymentMethodImages.Children[0].Image);
                });
            });

        it('should call cmsUtilService.generateFileSrc with bank', async () => {
            //Assemble
            component.paymentMethodImages = {
                Children: [
                    {
                        ItemName: 'Bank',
                        Image: 'Bank Image'
                    }
                ]
            };
            (cmsUtilService.generateFileSrc as jasmine.Spy).and.returnValue(component.paymentMethodImages.Children[0].Image);
            component.paymentType = BillingType.Eft;
            component.paymentMethod = {
                billingType: 'EFT'
            } as (BillingInfo & PaymentMethodOptions);

            //Act
            const result = component['getIconImage']();

            //Assert
            expect(cmsUtilService.generateFileSrc).toHaveBeenCalledTimes(1);
            expect(cmsUtilService.generateFileSrc).toHaveBeenCalledWith(component.paymentMethodImages.Children[0].Image);
            expect(result).toBe(component.paymentMethodImages.Children[0].Image);
        });
    });

    describe('unblockPaymentMethod', () => {
        it('should call dialog service and not the api call if credit card and no active card slots', async () => {
            webApi.unblockPaymentMethod.and.returnValue(Promise.resolve({} as BaseResponse));
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue({} as any);
            component.activeCreditSlots = 0;
            component.paymentType = BillingType.Credit;

            await component.unblockPaymentMethod();

            expect(dialogService.openGenericModal).toHaveBeenCalled();
            expect(webApi.unblockPaymentMethod).not.toHaveBeenCalled();
        });

        it('should call dialog service and not the api call if eft and no active bank slots', async () => {
            webApi.unblockPaymentMethod.and.returnValue(Promise.resolve({} as BaseResponse));
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue({} as any);
            component.activeEFTSlots = 0;
            component.paymentType = BillingType.Eft;

            await component.unblockPaymentMethod();

            expect(dialogService.openGenericModal).toHaveBeenCalled();
            expect(webApi.unblockPaymentMethod).not.toHaveBeenCalled();
        });

        it('should call dialog service, api call, displayAlertsFromResponse, and isErrorFree', async () => {
            webApi.unblockPaymentMethod.and.returnValue(Promise.resolve({} as BaseResponse));
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue({} as any);

            await component.unblockPaymentMethod();

            expect(dialogService.openGenericModal).toHaveBeenCalled();
            expect(webApi.unblockPaymentMethod).toHaveBeenCalled();
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalled();
            expect(responseErrorService.isErrorFree).toHaveBeenCalled();
        });

        it('should call toasterService if no errors', async () => {
            webApi.unblockPaymentMethod.and.returnValue(Promise.resolve({} as BaseResponse));
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue({} as any);
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);

            await component.unblockPaymentMethod();

            expect(toasterService.show).toHaveBeenCalled();
        });

        it('should not call toasterService if errors', async () => {
            webApi.unblockPaymentMethod.and.returnValue(Promise.resolve({} as BaseResponse));
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue({} as any);
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(false);

            await component.unblockPaymentMethod();

            expect(toasterService.show).not.toHaveBeenCalled();
        });
    });

    describe('removePaymentMethod', () => {

        beforeEach(() => {
            webApi.removePaymentMethod.and.returnValue(Promise.resolve({} as BaseResponse));
            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue({} as any);
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue(
                {
                    isRemoveOnly: true,
                    optOut: false
                } as RemovePaymentModalResultInjectionValues);
            cmsReplacementService.transformTemplate.and.returnValue('Returned Value');
        });

        it('should call dialog service, api call, displayAlertsFromResponse, refreshBillingInfo, and isErrorFree', async () => {
            await component.removePaymentMethod();

            expect(dialogService.openGenericModal).toHaveBeenCalled();
            expect(webApi.removePaymentMethod).toHaveBeenCalled();
            expect(responseErrorService.isErrorFree).toHaveBeenCalled();
            expect(manageBillingInformationService.refreshBillingInfo).toHaveBeenCalled();
        });

        it('should call toasterService if no errors', async () => {
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);

            await component.removePaymentMethod();

            expect(toasterService.show).toHaveBeenCalled();
        });

        it('should not call toasterService if errors', async () => {
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(false);

            await component.removePaymentMethod();

            expect(toasterService.show).not.toHaveBeenCalled();
        });

    });

    describe('removePaymentMethod update for Primary', () => {

        beforeEach(() => {
            webApi.removePaymentMethod.and.returnValue(Promise.resolve({} as BaseResponse));
            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue({} as any);
            cmsReplacementService.transformTemplate.and.returnValue('Returned Value');
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue(
                {
                    isRemoveOnly: false,
                    newPrimaryMethod: {},
                    optOut: false
                } as RemovePaymentModalResultInjectionValues);
        });

        it('should call dialog service, api call, displayAlertsFromResponse, refreshBillingInfo, and isErrorFree', async () => {

            await component.removePaymentMethod();

            expect(billingDataService.updatePaymentInfo).toHaveBeenCalled();
        });

        it('should call toasterService if no errors', async () => {
            (billingDataService.updatePaymentInfo as jasmine.Spy).and.returnValue([] as ErrorMessage[]);
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);

            await component.removePaymentMethod();

            expect(toasterService.show).toHaveBeenCalled();
        });

        it('should not call toasterService if errors', async () => {
            (billingDataService.updatePaymentInfo as jasmine.Spy).and.returnValue([{key:'error',message:'test'}] as ErrorMessage[]);
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
            
            await component.removePaymentMethod();

            expect(toasterService.show).not.toHaveBeenCalled();
        });
    });

    describe('removePaymentMethod update for flex pay optOut', () => {

        beforeEach(() => {
            parent.isFlexPay = true;
            webApi.updateRebillAmount.and.returnValue(Promise.resolve({} as BaseResponse));
            webApi.removePaymentMethod.and.returnValue(Promise.resolve({} as BaseResponse));
            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue({} as any);
            cmsReplacementService.transformTemplate.and.returnValue('Returned Value');
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue(
                {
                    optOut: true
                } as RemovePaymentModalResultInjectionValues);
        });

        it('should call dialog service, api calls, displayAlertsFromResponse, refreshBillingInfo, and isErrorFree', async () => {
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
            await component.removePaymentMethod();

            expect(dialogService.openGenericModal).toHaveBeenCalled();
            expect(webApi.updateRebillAmount).toHaveBeenCalled();
            expect(webApi.removePaymentMethod).toHaveBeenCalled();
            expect(responseErrorService.isErrorFree).toHaveBeenCalled();
            expect(manageBillingInformationService.refreshBillingInfo).toHaveBeenCalled();
            expect(authService.profile).toHaveBeenCalled();
        });

        it('should call toasterService if no errors', async () => {
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);

            await component.removePaymentMethod();

            expect(toasterService.show).toHaveBeenCalled();
        });

        it('should not call toasterService if errors', async () => {
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(false);

            await component.removePaymentMethod();

            expect(toasterService.show).not.toHaveBeenCalled();
        });
    });

    describe('openEditPaymentMethodModal', () => {

        it('updatePaymentMethod called', async () => {

            spyOn(component as any, 'updatePaymentMethod');

            const mockBillingInfo = {
                eft: {
                    accountType: BankAccountType.Personal,
                    name: 'TestName',
                    routingNumber: '1234567890',
                    accountNumber: '999999',
                    address1: 'address',
                    city: 'city',
                    country: 'country'
                },
                credit: null,
                billingType: BillingType.Eft
            };

            const data: BillingInjectionValues = {
                billingInformation: {
                    credit: mockBillingInfo.credit,
                    eft: mockBillingInfo.eft
                },
                billingType: mockBillingInfo.billingType,
                stateList: parent.stateList,
                countryList: parent.countryList
            };

            const event = new EventEmitter<BillingInjectionValues>();

            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());


            const promise = component.openEditPaymentMethodModal();

            event.emit(data);
            event.complete();
            await promise;

            expect(component['updatePaymentMethod']).toHaveBeenCalled();
        });

        it('EFT path', async () => {

            const mockBillingInfo = {
                eft: {
                    accountType: BankAccountType.Personal,
                    name: 'TestName',
                    routingNumber: '1234567890',
                    accountNumber: '999999',
                    address1: 'address',
                    city: 'city',
                    country: 'country'
                },
                credit: null,
                billingType: BillingType.Eft
            };

            const data: BillingInjectionValues = {
                billingInformation: {
                    credit: mockBillingInfo.credit,
                    eft: mockBillingInfo.eft
                },
                billingType: mockBillingInfo.billingType,
                stateList: parent.stateList,
                countryList: parent.countryList
            };

            const event = new EventEmitter<BillingInjectionValues>();

            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());


            const promise = component['updatePaymentMethod'](data);

            event.emit(data);
            event.complete();
            await promise;

            expect(billingDataService.updatePaymentInfo).toHaveBeenCalled();
        });

        it('card path', async () => {

            const mockBillingInfo = {
                eft: null,
                credit: {
                    cardCode: 'V',
                    cardNbr: '1111',
                    expMonth: 1,
                    expYear: 2030,
                    nameOnCard: '',
                    address1: '',
                    city: '',
                    country: ''
                },
                billingType: BillingType.Credit
            };

            const data: BillingInjectionValues = {
                billingInformation: {
                    credit: mockBillingInfo.credit,
                    eft: mockBillingInfo.eft
                },
                billingType: mockBillingInfo.billingType,
                stateList: parent.stateList,
                countryList: parent.countryList
            };

            const event = new EventEmitter<BillingInjectionValues>();

            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());


            const promise = component['updatePaymentMethod'](data);

            event.emit(data);
            event.complete();
            await promise;

            expect(billingDataService.updatePaymentInfo).toHaveBeenCalled();
        });

        [
            { paymentMethods: [], showMakePrimary: true},
        ].forEach(data => {
            it('passes in uiOptions', async () => {

                (dialogService.openSliderCentered as jasmine.Spy).and.resolveTo(null);

                //Act
                const promise = component['openEditPaymentMethodModal']();
                await promise;

                const args = (dialogService.openSliderCentered as jasmine.Spy).calls.argsFor(0);

                expect(args[1].uiOptions).toBeDefined();
                expect(args[1].uiOptions.isNew).not.toBeTrue();
                expect(args[1].uiOptions.showMakePrimary).toBe(data.showMakePrimary);

            });
        });

    });

    describe('setRemoveChangeRequestCMS', () => {

        it('insert values should be correct for payment type (EFT)', async () => {
            cmsReplacementService.transformTemplate.and.returnValue('');

            component['setRemoveChangeRequestCMS']();

            expect(cmsReplacementService.transformTemplate).toHaveBeenCalledWith('So short', {
                oldPaymentType: 'Bank Account',
                oldLast4: '4321'
            });
        });

        it('insert values should be correct for payment type (Card)', async () => {
            cmsReplacementService.transformTemplate.and.returnValue('');
            component.paymentMethod.billingType = BillingType.Credit;

            component['setRemoveChangeRequestCMS']();

            expect(cmsReplacementService.transformTemplate).toHaveBeenCalledWith('So short', {
                oldPaymentType: 'AMEX',
                oldLast4: '1111'
            });
        });

        it('ShortDescription is updated', async () => {
            cmsReplacementService.transformTemplate.and.returnValue('Updated');

            component['setRemoveChangeRequestCMS']();

            expect(cmsReplacementService.transformTemplate).toHaveBeenCalledWith('So short', {
                oldPaymentType: 'Bank Account',
                oldLast4: '4321'
            });
            expect(component.removeCMSModalContent).toBe('Updated');
        });
    });

    describe('makePrimaryPayment', () => {
        it('should call editBankAccountInfo if payment method is EFT', async () => {
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue({} as any);

            await component.makePrimaryPayment();

            expect(billingDataService.updatePaymentInfo).toHaveBeenCalled();
        });

        it('should call editCreditCardInfo if payment method is Card', async () => {
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue({} as any);
            component.paymentMethod.billingType = BillingType.Credit;

            await component.makePrimaryPayment();

            expect(billingDataService.updatePaymentInfo).toHaveBeenCalled();
        });

        it('should call dialog service, api call, displayAlertsFromResponse, and isErrorFree', async () => {
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue({} as any);

            await component.makePrimaryPayment();

            expect(dialogService.openGenericModal).toHaveBeenCalled();
            expect(billingDataService.updatePaymentInfo).toHaveBeenCalled();
        });

        it('should call toasterService if no errors', async () => {
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue({} as any);
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);

            await component.makePrimaryPayment();

            expect(toasterService.show).toHaveBeenCalled();
        });

        it('should not call toasterService if errors', async () => {
            (billingDataService.updatePaymentInfo as jasmine.Spy).and.returnValue([{key:'AH', message:'Opps'} as ErrorMessage]);
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue({} as any);

            await component.makePrimaryPayment();

            expect(toasterService.show).not.toHaveBeenCalled();
        });
    });
});
