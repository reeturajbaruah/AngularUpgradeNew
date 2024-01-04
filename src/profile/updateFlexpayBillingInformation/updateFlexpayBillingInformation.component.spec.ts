import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, EventEmitter } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CmsUtilService, CmsReplacementService } from 'cms/services';
import {
    BillingInfoUtilitiesService
} from 'common/billing/billingInfoUtilities.service';
import {
    InjectionValues as BillingInjectionValues
} from 'common/ui/modals/billingModal/billingModal.component';
import { BillingType, BankAccountType, BillingInfo, PaymentMethodOptions } from 'common/models';
import { ResponseErrorService, ToasterService, DialogService, ManageBillingService, BillingDataService, AccountService, CurrentUserService } from 'common/services';
import { PipesModule } from 'pipes/module';
import { changesStable } from 'testing';
import { WebApisService } from 'profile/services/webApis.service';
import { UpdateBillingInformationComponent } from 'profile/updateBillingInformation/updateBillingInformation.component';
import { UpdateFlexpayBillingInformationComponent } from './updateFlexpayBillingInformation.component';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { WebStorageConst } from 'constants/webstorage.constants';
import { StateService } from '@uirouter/angular';
import { stateNames as ProfileStates } from 'profile/constants';
import { GenericCmsModalComponent, WizardComponent } from 'common/ui';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';
interface Sort {
    primary?: boolean;
}
export type PaymentMethod = BillingInfo & PaymentMethodOptions & Sort;


describe('UpdateFlexpayBillingInformationComponent', () => {
    let parent: UpdateBillingInformationComponent;
    let fixture: ComponentFixture<UpdateFlexpayBillingInformationComponent>;
    let component: UpdateFlexpayBillingInformationComponent;
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
    let accountService: AccountService;
    let currentUserService: CurrentUserService;
    let webStorage: WebStorageConst;
    let stateService: StateService;
    let storeFrontUtilityService;
    let wizard: WizardComponent;

    const mockPaymentMethod = {
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

    beforeEach(async () => {

        parent = jasmine.createSpyObj('UpdateBillingInformationComponent',
            ['isBlockedPaymentMethod', 'isSelected', 'toggleAnimation', 'loadGrid', 'isFlexPay']);
        authService = jasmine.createSpyObj('authService', ['profile']);
        accountService = jasmine.createSpyObj('accountService', ['getAllPaymentMethods']);
        currentUserService = jasmine.createSpyObj('currentUserService', ['getCurrentUser']);
        webStorage = new WebStorageConst();
        stateService = jasmine.createSpyObj('stateService', ['go']);
        wizard = jasmine.createSpyObj('wizard', ['gotoNextState', 'gotoCancelState']);

        parent.paymentMethods = [];
        parent.isFlexPay = false;

        cmsUtilService = jasmine.createSpyObj('CmsUtilService', ['parseAllImageAttributes']);

        (cmsUtilService.parseAllImageAttributes as jasmine.Spy).and.returnValue({
            image: ''
        });

        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['generateFileSrc']);
        (cmsUtilService.generateFileSrc as jasmine.Spy).and.returnValue('fakeFileSrc');
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['displayAlertsFromResponse', 'displayErrorsFromResponse', 'isErrorFree']);
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
        storeFrontUtilityService = {
            webStoreData: {
                fullSiteMode: false,
            },
            isRunningAsKiosk: false
        };

        await TestBed
            .configureTestingModule({
                declarations: [UpdateFlexpayBillingInformationComponent],
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
                    { provide: AccountService, useFactory: () => accountService },
                    { provide: CurrentUserService, useFactory: () => currentUserService },
                    { provide: WebStorageConst, useFactory: () => webStorage },
                    { provide: StateService, useFactory: () => stateService },
                    { provide: StorefrontUtilityService, useFactory: () => storeFrontUtilityService },


                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(UpdateFlexpayBillingInformationComponent);
        component = fixture.debugElement.componentInstance;

        (currentUserService.getCurrentUser as jasmine.Spy).and.returnValue({ rebillOptIn: true, isFlexPay: true });

        component.cmsContent = {
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
            BUTTON_CONFIRM: '',
            Title: '',
            ShortDescription: ''
        } as any;

        component.paymentConfirmModal = {
            Title: '',
            ShortDescription: '',
            LongDescription: '',
            Children: [],
            optInMessage: 'Opt In'
        } as any;

        component.flexPaycmsContent = {
            Title: '',
            ShortDescription: '',
            LongDescription: '',
            Children: [],
        } as any;
        (accountService.getAllPaymentMethods as jasmine.Spy).and.returnValue({
            creditCardPaymentMethod: {
                cardCode: 'V',
                cardNbr: '1111',
                expMonth: 1,
                expYear: 2030,
                nameOnCard: '',
                address1: '',
                city: '',
                country: ''
            },
            eftPaymentMethod: null,
            billingType: component.BillingType.Credit,
            address: null
        });

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
            const result = component['getIconImage']({});

            //Assert
            expect(result).toBe('');
        });

        it('should call cmsUtilService.generateFileSrc if icons is not null', async () => {
            //Assemble
            component.paymentMethodImages = { Children: [] };

            //Act
            component['getIconImage'](mockPaymentMethod['credit']);

            //Assert
            expect(cmsUtilService.generateFileSrc).toHaveBeenCalledTimes(1);
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

            //Act
            const result = component['getIconImage'](mockPaymentMethod['eft']);

            //Assert
            expect(cmsUtilService.generateFileSrc).toHaveBeenCalledTimes(1);
            expect(result).toBe(component.paymentMethodImages.Children[0].Image);
        });
    });

    describe('ngOnInit - ', () => {
        it('should check selectedIndex and selectedIndexblicked is defined', () => {
            component.ngOnInit();

            expect(component.selectedIndex).toEqual(-1);
            expect(component.selectedIndexBlocked).toEqual(-1);
        });
    });

    describe('openEditBillingModal', () => {
        it('should call dialogService.openSliderCentered() 1 time and enter eft if block', async () => {

            //Assemble

            const mockBillingInfo = {
                eft: {
                    accountType: BankAccountType.Personal,
                    routingNumber: '999999',
                    accountNumber: '99999999',
                    account2: '99999999',
                    name: 'new name',
                    address1: 'Test 123',
                    city: 'Test City',
                    state: 'Test State',
                    zip: '12345',
                    plus4: '1234',
                    country: 'USA',
                    displayCountry: 'USA',
                    international: undefined
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
                stateList: 'parent.usStates' as any,
                countryList: parent as any
            };

            const event = new EventEmitter<BillingInjectionValues>();

            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());




            //Act
            const promise = component['openEditBillingModal']();

            event.emit(data);
            event.complete();
            await promise;

            //Assert
            expect(dialogService.openSliderCentered).toHaveBeenCalledTimes(1);

        });

        it('should call dialogService.openSliderCentered() 1 time and enter credit if block', async () => {

            //Assemble
            const mockBillingInfo = {
                eft: null,
                credit: {
                    cardCode: '123',
                    cardNbr: '1111',
                    expMonth: 1,
                    expYear: 1,
                    cardExpires: '1/1',
                    selectedYear: 1,
                    nameOnCard: 'Test Name',
                    address1: 'Test 123',
                    city: 'Test City',
                    state: 'Test State',
                    zip: '12345',
                    plus4: '1234',
                    country: 'USA',
                    displayCountry: 'USA',
                    international: undefined
                },
                billingType: BillingType.Credit
            };

            const data: BillingInjectionValues = {
                billingInformation: {
                    credit: mockBillingInfo.credit,
                    eft: mockBillingInfo.eft
                },
                billingType: mockBillingInfo.billingType,
                stateList: parent as any,
                countryList: parent as any
            };

            const event = new EventEmitter<BillingInjectionValues>();

            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());

            //Act
            const promise = component['openEditBillingModal']();

            event.emit(data);
            event.complete();
            await promise;

            //Assert
            expect(dialogService.openSliderCentered).toHaveBeenCalledTimes(1);

        });

        it('should not change values if returns empty string', async () => {

            //Assemble
            const expectedBillingInfo = {
                eft: {
                    accountType: BankAccountType.Business,
                    routingNumber: '123123',
                    accountNumber: '1111111',
                    name: 'testName',
                    address1: 'Test 123',
                    city: 'Test City',
                    state: 'Test State',
                    zip: '12345',
                    plus4: '1234',
                    country: 'USA',
                    displayCountry: 'USA',
                    international: false
                },
                credit: {
                    cardCode: '123',
                    cardNbr: '1111',
                    expMonth: 1,
                    expYear: 1,
                    nameOnCard: 'Test Name',
                    address1: 'Test 123',
                    city: 'Test City',
                    state: 'Test State',
                    zip: '12345',
                    plus4: '1234',
                    country: 'USA',
                    displayCountry: 'USA',
                    international: false
                },
                billingType: 'original value'
            };


            const event = new EventEmitter<string>();

            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());

            //Act
            const promise = component['openEditBillingModal']();

            event.emit('');
            event.complete();
            await promise;

            //Assert
            expect(dialogService.openSliderCentered).toHaveBeenCalledTimes(1);

        });
    });

    describe('getCmsImage', () => {
        it('should check cmsImage', () => {
            const img = component.getCmsImage(mockPaymentMethod);

            expect(img).toEqual('');
        });
    });

    describe('loadGrid', () => {
        it('should check getAllPaymentMethods is invoked', () => {
            component.loadGrid();

            expect(accountService.getAllPaymentMethods).toHaveBeenCalled();
            expect(component.maxCards).toEqual(2);
            expect(component.maxEft).toEqual(1);
        });
    });

    describe('checkBlocked', () => {
        it('should check isBlocked is false', () => {

            const isBlocked = component.checkBlocked(mockPaymentMethod);

            expect(isBlocked).toBeFalsy();

        });

    });

    describe('checkExpired', () => {
        it('should check isExpired based on payment info', () => {

            const expired = component.checkExpired(mockPaymentMethod);

            expect(expired).toBeFalsy();
        });
    });

    describe('setUserData', () => {
        it('should set the usedr data', () => {
            component.setUserData();

            expect(component.isOptIn).toBeTruthy();
            expect(component.isFlexPay).toBeTruthy();
        });
    });

    describe('showConfirmationModal', () => {
        it('should call dialogService.openGenericModal if cmsPageByID is errorfree', async () => {
            //Assemble
            const data = {
                cmsContent: {
                    Title: component.paymentConfirmModal.Title,
                    AcceptBtn: 'Confirm',
                    CancelBtn: 'CANCEL',
                    PrimaryContent: component.paymentConfirmModal.ShortDescription
                }
            };
            //Act
            await component.showConfirmationModal(wizard);

            //Assemble
            expect(dialogService.openGenericModal).toHaveBeenCalledOnceWith(
                GenericCmsModalComponent,

                //Injected Data
                data);
        });

        it('should call dialogService.openGenericModal if cmsPageByID is errorfree and isOptIn true', async () => {
            //Assemble
            const data = {
                cmsContent: {
                    Title: component.paymentConfirmModal.Title,
                    AcceptBtn: 'Confirm',
                    CancelBtn: 'CANCEL',
                    PrimaryContent: component.paymentConfirmModal.optInMessage
                }
            };
            component.isOptIn = false;
            fixture.detectChanges();
            //Act
            await component.showConfirmationModal(wizard);

            //Assemble
            expect(dialogService.openGenericModal).toHaveBeenCalledOnceWith(
                GenericCmsModalComponent,

                //Injected Data
                data);
        });
    });

    describe('cancel', () => {
        it('should check state service is invoked', () => {
            component.cancel(wizard);

            expect(stateService.go).toHaveBeenCalledWith(ProfileStates.AccountDetails);
        });
    });

    describe('previous', () => {
        it('should check state service is invoked', () => {
            component.previous(wizard);

            expect(stateService.go).toHaveBeenCalledWith(ProfileStates.UpdateReplenishmentAmount);
        });
    });

});

