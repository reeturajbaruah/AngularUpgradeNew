import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, EventEmitter } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import {
    BillingInfo, BillingType, BankAccountType,
    PaymentMethodInfo, PaymentMethodOptions
} from 'common/models';
import { ManageBillingService, BillingDataService, DialogService, AccountService, CurrentUserService } from 'common/services';
import {
    InjectionValues as BillingInjectionValues
} from 'common/ui/modals/billingModal/billingModal.component';
import { PipesModule } from 'pipes/module';
import { UpdateBillingInformationComponent, PaymentMethod } from './updateBillingInformation.component';
import { WebApisService } from '../services/webApis.service';
import { StateService } from '@uirouter/angular';
import { stateNames as ProfileStates } from 'profile/constants';
import { StorefrontService } from '../../storefront/services/storefront.service';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';

describe('component: update-billing-information', () => {

    let fixture: ComponentFixture<UpdateBillingInformationComponent>;
    let component: UpdateBillingInformationComponent;
    let manageBillingInfoService: ManageBillingService;
    let api: WebApisService;
    let dialogService: DialogService;
    let billingDataService: BillingDataService;
    let storeFrontUtilityService;
    let storefrontService: jasmine.SpyObj<any>;
    let allPaymentMethods: PaymentMethodInfo;
    let accountService: AccountService;
    let currentUserService: jasmine.SpyObj<CurrentUserService>;
    let state: StateService;

    const currentUserMock: any = {
        rebillOptIn: true,
        isFlexPay: false
    };

    beforeEach(async () => {
        currentUserService = jasmine.createSpyObj('currentUserService', ['getCurrentUser']);
        currentUserService.getCurrentUser.and.returnValue(currentUserMock);
        storefrontService = jasmine.createSpyObj('storefrontService', ['startNewSession', 'fullSiteMode']);
        manageBillingInfoService = jasmine.createSpyObj('manageBillingInfoService', ['refreshBillingInfo']);
        (manageBillingInfoService.refreshBillingInfo as jasmine.Spy).and.callFake(() => {
            manageBillingInfoService.billingInformation = {
                selected: null,
                allPaymentContainers: null
            };
        });

        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered', 'openGenericModal']);

        billingDataService = jasmine.createSpyObj('billingDataService', ['updatePaymentInfo']);
        (billingDataService.updatePaymentInfo as jasmine.Spy).and.returnValue([]);

        // api = jasmine.createSpyObj('api', ['getAllPaymentMethods']);
        accountService = jasmine.createSpyObj('AccountService', ['getAllPaymentMethods']);
        state = jasmine.createSpyObj('StateService', ['go']);

        allPaymentMethods = {
            bankAccounts: [],
            creditCards: [],
            maxCards: 2,
            maxEfts: 1
        } as PaymentMethodInfo;

        (accountService.getAllPaymentMethods as jasmine.Spy).and.resolveTo(allPaymentMethods);

        storeFrontUtilityService = {
            webStoreData: {
                fullSiteMode: false,
            },
            isRunningAsKiosk: false
        };

        await TestBed
            .configureTestingModule({
                declarations: [
                    UpdateBillingInformationComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: ManageBillingService, useFactory: () => manageBillingInfoService },
                    { provide: WebApisService, useFactory: () => api },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: BillingDataService, useFactory: () => billingDataService },
                    { provide: StorefrontUtilityService, useFactory: () => storeFrontUtilityService },
                    { provide: StorefrontService, useFactory: () => storefrontService },
                    { provide: AccountService, useFactory: () => accountService },
                    { provide: CurrentUserService, useFactory: () => currentUserService },
                    { provide: StateService, useFactory: () => state }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(UpdateBillingInformationComponent);
        component = fixture.debugElement.componentInstance;
        component.cmsContent = {
            PAGE_TITLE: '',
            LongDescription: '',
            ADD_MODAL_ALL: '',
            ADD_MODAL_EFT: '',
            ADD_MODAL_CARD: '',
            BLOCKED_TITLE: '',
            BLOCKED_DESC: '',
            EDIT_MODAL: '',
            SUCCESS_DESC: '',
            SUCCESS_TITLE: '',
            Children: null,
            SUCCESS_BUTTON: '',
            BUTTON_CANCEL: '',
            BUTTON_SAVE: '',
            BUTTON_CONTINUE: '',
            NO_DATA_TITLE: '',
            BUTTON_CONFIRM: ''
        };
        component.optInCMS = {
            Title: '',
            CancelBtn: '',
            optInBtn: '',
            MainContent: '',
            success: ''
        };
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('onInit', () => {

        it('calls get all payment method api and sets user data', async () => {

            await component.ngOnInit();

            expect(accountService.getAllPaymentMethods).toHaveBeenCalled();
            expect(component.currentUser).toEqual(currentUserMock);
            expect(component.isFlexPay).toEqual(currentUserMock.isFlexPay);
            expect(component.isOptIn).toEqual(currentUserMock.rebillOptIn);

        });

        it('builds payment methods list', async () => {

            allPaymentMethods.bankAccounts = [
                { primary: false, accountBillingMethodId: 3 } as any,
            ];
            allPaymentMethods.creditCards = [
                { primary: false, accountBillingMethodId: 2 } as any,
                { primary: true, accountBillingMethodId: 1 } as any,
            ];

            await component.ngOnInit();

            expect(component.paymentMethods).toBeDefined();
            expect(component.paymentMethods.length).toBe(3);

            expect(component.paymentMethods[0].credit).toBeDefined();
            expect(component.paymentMethods[0].credit.accountBillingMethodId).toBe(1);
            expect(component.paymentMethods[0].credit.primary).toBeTruthy();
            expect(component.paymentMethods[0].billingType).toBe(BillingType.Credit);

            expect(component.paymentMethods[1].credit).toBeDefined();
            expect(component.paymentMethods[1].credit.accountBillingMethodId).toBe(2);
            expect(component.paymentMethods[1].credit.primary).toBeFalsy();
            expect(component.paymentMethods[1].billingType).toBe(BillingType.Credit);

            expect(component.paymentMethods[2].eft).toBeDefined();
            expect(component.paymentMethods[2].eft.accountBillingMethodId).toBe(3);
            expect(component.paymentMethods[2].eft.primary).toBeFalsy();
            expect(component.paymentMethods[2].billingType).toBe(BillingType.Eft);

        });

    });

    describe('openEditBillingModal', () => {

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
                stateList: component.stateList,
                countryList: component.countryList
            };

            const event = new EventEmitter<BillingInjectionValues>();

            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());


            const promise = component['openEditBillingModal']();

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
                stateList: component.stateList,
                countryList: component.countryList
            };

            const event = new EventEmitter<BillingInjectionValues>();

            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());


            const promise = component['openEditBillingModal']();

            event.emit(data);
            event.complete();
            await promise;

            expect(billingDataService.updatePaymentInfo).toHaveBeenCalled();
        });

        it('optIn dialog should open, state.go should be called', async () => {

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
                stateList: component.stateList,
                countryList: component.countryList
            };

            component.isFlexPay = true;
            component.isOptIn = false;

            const event = new EventEmitter<BillingInjectionValues>();

            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue(true);


            const promise = component['openEditBillingModal']();

            event.emit(data);
            event.complete();
            await promise;

            expect(billingDataService.updatePaymentInfo).toHaveBeenCalled();
            expect(state.go).toHaveBeenCalledWith(ProfileStates.UpdateReplenishmentAmount);
        });

        it('optIn dialog should not open, state.go should not be called', async () => {

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
                stateList: component.stateList,
                countryList: component.countryList
            };

            component.isFlexPay = false;
            component.isOptIn = false;

            const event = new EventEmitter<BillingInjectionValues>();

            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue(true);


            const promise = component['openEditBillingModal']();

            event.emit(data);
            event.complete();
            await promise;

            expect(billingDataService.updatePaymentInfo).toHaveBeenCalled();
            expect(state.go).not.toHaveBeenCalledWith(ProfileStates.UpdateReplenishmentAmount);
        });

        [
            { paymentMethods: [], showMakePrimary: true, eftSlots: 1, ccSlots: 2 },
        ].forEach(data => {
            it('passes in uiOptions', async () => {

                component.openEFTSlots = data.eftSlots;
                component.openCreditSlots = data.ccSlots;

                (dialogService.openSliderCentered as jasmine.Spy).and.resolveTo(null);

                component.paymentMethods = data.paymentMethods.map(billingType => ({
                    billingType
                } as BillingInfo & PaymentMethodOptions));

                //Act
                const promise = component['openEditBillingModal']();
                await promise;

                const args = (dialogService.openSliderCentered as jasmine.Spy).calls.argsFor(0);

                expect(args[1].uiOptions).toBeDefined();
                expect(args[1].uiOptions.showMakePrimary).toBe(data.showMakePrimary);

            });
        });

        [
            { paymentMethods: [], openCards: 2, openEfts: 1 },
            { paymentMethods: [BillingType.Credit], openCards: 1, openEfts: 1 },
            { paymentMethods: [BillingType.Eft], openCards: 2, openEfts: 0 },
            { paymentMethods: [BillingType.Eft, BillingType.Credit], openCards: 1, openEfts: 0 },
            { paymentMethods: [BillingType.Eft, BillingType.Credit, BillingType.Credit], openCards: 0, openEfts: 0 },
        ].forEach(data => {
            it('passes in payment availablity info', async () => {

                component.openEFTSlots = data.openEfts;
                component.openCreditSlots = data.openCards;

                (dialogService.openSliderCentered as jasmine.Spy).and.resolveTo(null);

                component.paymentMethods = data.paymentMethods.map(billingType => ({
                    billingType
                } as BillingInfo & PaymentMethodOptions));

                const promise = component['openEditBillingModal']();
                await promise;

                const args = (dialogService.openSliderCentered as jasmine.Spy).calls.argsFor(0);

                expect(args[1].paymentMethodAvailability).toBeDefined();
                expect(args[1].paymentMethodAvailability.openCardSlots).toBe(data.openCards);
                expect(args[1].paymentMethodAvailability.openEftSlots).toBe(data.openEfts);
            });
        });

        describe('isBlockedPaymentMethod', () => {
            [
                {
                    paymentMethod: {
                        credit: {
                            zip: 'card',
                            isBlocked: false
                        },
                        eft: null
                    } as PaymentMethod,
                    isBlocked: false
                },
                {
                    paymentMethod: {
                        credit: {
                            zip: 'card',
                            isBlocked: true
                        },
                        eft: null
                    } as PaymentMethod,
                    isBlocked: true
                },
                {
                    paymentMethod: {
                        eft: {
                            zip: 'eft',
                            isBlocked: false
                        },
                        credit: null
                    } as PaymentMethod,
                    isBlocked: false
                },
                {
                    paymentMethod: {
                        eft: {
                            zip: 'eft',
                            isBlocked: true
                        },
                        credit: null
                    } as PaymentMethod,
                    isBlocked: true
                }
            ].forEach((obj) => {
                it(`should determine if payment method is blocked or not`, () => {
                    const res = component.isBlockedPaymentMethod(obj.paymentMethod);

                    expect(res).toBe(obj.isBlocked);
                });
            });

            [
                {
                    paymentMethods: [
                        {
                            credit: {
                                zip: 'card1',
                                isBlocked: false
                            },
                            eft: null
                        } as PaymentMethod,
                        {
                            eft: {
                                zip: 'eft1',
                                isBlocked: false
                            },
                            credit: null
                        } as PaymentMethod,
                        {
                            credit: {
                                zip: 'card2',
                                isBlocked: false
                            },
                            eft: null
                        } as PaymentMethod
                    ],
                    numBlocked: 0,
                    numUnblocked: 3
                },
                {
                    paymentMethods: [
                        {
                            credit: {
                                zip: 'card1',
                                isBlocked: true
                            },
                            eft: null
                        } as PaymentMethod,
                        {
                            eft: {
                                zip: 'eft1',
                                isBlocked: true
                            },
                            credit: null
                        } as PaymentMethod,
                        {
                            credit: {
                                zip: 'card2',
                                isBlocked: false
                            },
                            eft: null
                        } as PaymentMethod
                    ],
                    numBlocked: 2,
                    numUnblocked: 1
                },
                {
                    paymentMethods: [
                        {
                            credit: {
                                zip: 'card1',
                                isBlocked: true
                            },
                            eft: null
                        } as PaymentMethod,
                        {
                            eft: {
                                zip: 'eft1',
                                isBlocked: true
                            },
                            credit: null
                        } as PaymentMethod,
                        {
                            credit: {
                                zip: 'card2',
                                isBlocked: true
                            },
                            eft: null
                        } as PaymentMethod
                    ],
                    numBlocked: 3,
                    numUnblocked: 0
                }

            ].forEach((obj) => {
                it(`should sort ${obj.numBlocked} payments methods as unblocked and ${obj.numUnblocked} as blocked`, () => {
                    const blockedPaymentMethods = obj.paymentMethods
                        .filter(component.isBlockedPaymentMethod);

                    const paymentMethods = obj.paymentMethods
                        .filter(p => !component.isBlockedPaymentMethod(p));

                    expect(blockedPaymentMethods.length).toBe(obj.numBlocked);
                    expect(paymentMethods.length).toBe(obj.numUnblocked);
                });
            });
        });
    });
});
