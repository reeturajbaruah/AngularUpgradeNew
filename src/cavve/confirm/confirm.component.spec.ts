import { } from 'jasmine';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, EventEmitter } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { PipesModule } from 'pipes/module';

import { ConfirmComponent } from './confirm.component';
import { FrameComponent } from 'cavve/frame/frame.component';
import { WebStorageConst, UserRoles } from 'constants/module';
import { StateService, StateRegistry, UIRouterGlobals } from '@uirouter/angular';
import { StateConfig } from 'common/interfaces';
import { BankAccountType, BillingType } from 'common/models';
import { DialogService, GenericRepoService, ResponseErrorService, SessionService } from 'common/services';
import { BillingInfoUtilitiesService } from 'common/billing/billingInfoUtilities.service';
import { isObject } from 'lodash';

import { ChooseDeliveryMethodComponent, DeliveryMethodType } from 'common/ui/chooseDeliveryMethod/chooseDeliveryMethod.component';

import {
    InjectionValues as BillingInjectionValues
} from 'common/ui/modals/billingModal/billingModal.component';

import {
    EditVehicleInjectionValues
} from 'common/ui';
import { AuthChannelService } from 'authentication/authChannelService/authChannel.service';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';

describe('CAVVE ConfirmComponent', () => {

    let fixture: ComponentFixture<ConfirmComponent>;
    let component: ConfirmComponent;
    let parent: jasmine.SpyObj<FrameComponent>;
    let form: NgForm;
    let webStorageConst: WebStorageConst;
    let webStorage: any;
    let state: StateService;
    let stateRegistry: StateRegistry;
    let responseErrorService: jasmine.SpyObj<any>;
    let userRoles: UserRoles;
    let genericRepo: any;
    let dialogService: DialogService;
    let billingInfoUtilitiesService: jasmine.SpyObj<BillingInfoUtilitiesService>;
    let session;
    let deliveryMethod: ChooseDeliveryMethodComponent;
    let uiRouterGlobals: UIRouterGlobals;
    let authChannel: jasmine.SpyObj<AuthChannelService>;

    beforeEach(async () => {
        parent = jasmine.createSpyObj('frameComponent', ['setTitle', 'setStepOnly']);
        webStorageConst = new WebStorageConst();
        webStorage = jasmine.createSpyObj('webStorage', ['getValue']);
        parent.setFrameTitle = jasmine.createSpy('setFrameTitle');

        parent.createAccountFromViolationsTotals = {
            totalViolationsDue: '1.23',
            serviceFee: '22.22',
            createAccountPlateTotal: '33.33',
            createAccountDiscount: '44.44',
            createAccountEZTagFee: '55.55',
            createAccountStartingBalance: '66.66',
            dontCreateAccountPlateTotal: '77.77',
            totalFeesDiscountedDontCreateAccount: '88.88',
            totalUninvoicedAmount: '99.99'
        };

        //StateService Mock
        state = jasmine.createSpyObj('state', ['go']);
        stateRegistry = jasmine.createSpyObj('stateRegistry', ['get']);

        //uirouterglobal mock
        uiRouterGlobals = {
            params: {}
        } as UIRouterGlobals;

        //ResponseErrorService Mock
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['displayAlertsFromResponse', 'displayErrorsFromResponse', 'isErrorFree']);

        //Other Mocks
        userRoles = new UserRoles();
        genericRepo = {
            dataFactory: {
                GetAccountSummaryCreateAccountFromViolation: jasmine.createSpy('GetAccountSummaryCreateAccountFromViolation'),
                ConvertAccountCreateAccountFromViolation: jasmine.createSpy('ConvertAccountCreateAccountFromViolation'),
                SetBillingInfoCreateAccountViolation: jasmine.createSpy('SetBillingInfoCreateAccountViolation'),
                SetViolatorAccountInfo: jasmine.createSpy('SetViolatorAccountInfo')
            }
        };
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered']);
        authChannel = jasmine.createSpyObj('authChannel', ['logIn']);
        billingInfoUtilitiesService = jasmine.createSpyObj('billingInfoUtilitiesService', ['isInternationalAddress']);
        session = jasmine.createSpyObj('session', ['setAcctActivity']);

        deliveryMethod = jasmine.createSpyObj('deliveryMethod', ['deliveryMethod']);

        await TestBed
            .configureTestingModule({
                declarations: [ConfirmComponent],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    FormsModule,
                    PipesModule
                ],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: StateService, useFactory: () => state },
                    { provide: StateRegistry, useFactory: () => stateRegistry },
                    { provide: WebStorageService, useFactory: () => webStorage },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: WebStorageConst, useValue: webStorageConst },
                    { provide: UserRoles, useValue: userRoles },
                    { provide: GenericRepoService, useValue: genericRepo },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: AuthChannelService, useFactory: () => authChannel },
                    { provide: BillingInfoUtilitiesService, useFactory: () => billingInfoUtilitiesService },
                    { provide: SessionService, useFactory: () => session },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals }

                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ConfirmComponent);
        component = fixture.debugElement.componentInstance;
        form = fixture.debugElement.query(By.directive(NgForm)).references.Form as NgForm;


    });

    beforeEach(() => {
        component.cmsContent = {
            Title: 'fake title',
            billingInfoHeader: 'fake billingInfoHeader',
            vehicleInfoHeader: 'fake vehicleInfoHeader',
            deliveryMethodHeader: 'fake deliveryMethodHeader',

            //TODO: fields below may not be needed
            editVehicleInfoTitle: 'fake editVehicleInfoTitle',
            editVehicleToolTipEditButton: 'fake editVehicleToolTipEditButton',
            editVehicleToolTipText: 'fake editVehicleToolTipText'
        };

        component.billingInfo = {
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
            billingType: BillingType.Credit
        };

        component.billingInfoOriginal = {
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
            billingType: BillingType.Credit
        };

        const paramsForWebStorageGetValueFnCall = {
            violationHeaders:
                [
                    {
                        agencyCode: 'h',
                        dueDate: '10/10/2021'
                    },
                    {
                        agencyCode: 'h',
                        dueDate: '10/10/2020'
                    }
                ],

            uninvoiced: null,
            createAccountFromViolationsTotals: {
                totalViolationsDue: null,
                serviceFee: null,
                createAccountPlateTotal: null
            },
            remainingPlateTotalBeforeDiscount: null,
            serviceFee: null

        };

        (webStorage.getValue as jasmine.Spy).and.callFake((myParam) => paramsForWebStorageGetValueFnCall[myParam]);
        component.vehicleInfo = {
            licPlate: 'licPlate',
            licState: 'licState',
            motorcycle: 'motorcycle',
            nickname: 'nickname',
            temporaryLicPlate: 'temporaryLicPlate',
            vehicleClassCode: Number('3'),
            vehicleClassDesc: 'vehicleClassDesc',
            vehicleColor: 'vehicleColor',
            vehicleMake: 'vehicleMak',
            vehicleModel: 'vehicleMode',
            vehicleYear: '2020',
            isMotorcycleDisabled: true
        };

        component.deliveryMethodOptions = deliveryMethod;
    });


    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });
    describe('ngOnInit', () => {
        beforeEach(() => {
            spyOn<any>(component, 'setUpPage').and.callFake(() => { });
        });


        it('should not return and call setUpPage 1 time', () => {
            //act
            component['ngOnInit']();

            //assert
            expect(component['setUpPage']).toHaveBeenCalledTimes(1);
        });


    });
    describe('setUpPage', () => {
        beforeEach(() => {
            spyOn<any>(component, 'setAccountData').and.callFake(() => { });

            (genericRepo.dataFactory.GetAccountSummaryCreateAccountFromViolation as jasmine.Spy).and.returnValue({});

            component.createAccountFromViolationsTotals = {
                totalViolationsDue: '1.23',
                serviceFee: '22.22',
                createAccountPlateTotal: '33.33',
                createAccountDiscount: '44.44',
                createAccountEZTagFee: '55.55',
                createAccountStartingBalance: '66.66',
                dontCreateAccountPlateTotal: '77.77',
                totalFeesDiscountedDontCreateAccount: '88.88',
                totalUninvoicedAmount: '99.99'
            };
        });

        it('should call parent.setStepOnly with 3', async () => {
            //Act
            await component['setUpPage']();

            //Assert
            expect(parent.stepNum).toBe(3);
        });
        it('should call parent.setFrameTitle with title from cms', async () => {
            //Act
            await component['setUpPage']();

            //Assert
            expect(parent.setFrameTitle).toHaveBeenCalledTimes(1);
            expect(parent.setFrameTitle).toHaveBeenCalledWith('fake title');
        });
        it('should set violations data', async () => {

            //Act
            await component['setUpPage']();

            //Assert
            expect(component['createAccountFromViolationsTotals']).toEqual({
                totalViolationsDue: '1.23',
                serviceFee: '22.22',
                createAccountPlateTotal: '33.33',
                createAccountDiscount: '44.44',
                createAccountEZTagFee: '55.55',
                createAccountStartingBalance: '66.66',
                dontCreateAccountPlateTotal: '77.77',
                totalFeesDiscountedDontCreateAccount: '88.88',
                totalUninvoicedAmount: '99.99'
            });
        });
        it('should call api.GetAccountSummaryCreateAccountFromViolation 1 time', async () => {
            //act
            await component['setUpPage']();

            //assert
            expect(genericRepo.dataFactory.GetAccountSummaryCreateAccountFromViolation).toHaveBeenCalledTimes(1);
        });
        it('should call setAccountData', async () => {
            //Act
            await component['setUpPage']();

            //Assert
            expect(component['setAccountData']).toHaveBeenCalledTimes(1);
        });
        it('should set billingInfo.eft.address1 with itself', async () => {
            //Assemble
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);

            //Act
            await component['setUpPage']();

            //Assert
            expect(component.billingInfo.eft.address1).toEqual('Test 123');
        });
        it('should set billingInfo.eft.address2 with itself', async () => {
            //Assemble
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);

            //Act
            await component['setUpPage']();

            //Assert
            expect(component.billingInfo.eft.address2).toBeNull();
        });
        it('should set billingInfoOriginal.eft.address1 with itself', async () => {
            //Assemble
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);

            //Act
            await component['setUpPage']();

            //Assert
            expect(component.billingInfoOriginal.eft.address1).toEqual('Test 123');
        });
        it('should set billingInfoOriginal.eft.address2 with itself', async () => {
            //Assemble
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);

            //Act
            await component['setUpPage']();

            //Assert
            expect(component.billingInfoOriginal.eft.address2).toBeNull();
        });
    });
    describe('setAccountData()', () => {
        it('should not set any data if there are errors from the API', () => {

            //Assemble
            component['billingInfo'] = undefined;
            component['billingInfoOriginal'] = undefined;
            component['accountInfoOriginal'] = undefined;
            component['vehicleInfo'] = undefined;
            component['vehicleInfoOriginal'] = undefined;
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(false);

            //Act
            component['setAccountData']({});

            //Assert
            expect(component['billingInfo']).toBeUndefined();
            expect(component['billingInfoOriginal']).toBeUndefined();
            expect(component['accountInfoOriginal']).toBeUndefined();
            expect(component['vehicleInfo']).toBeUndefined();
            expect(component['vehicleInfoOriginal']).toBeUndefined();
        });

        [
            {
                caseNum: 1,
                billingInfo: { credit: {}, eft: {} }
            },
            {
                caseNum: 2,
                billingInfo: undefined
            },
            {
                caseNum: 3,
                billingInfo: null
            }
        ].forEach(testCase => {
            it(`should maintain billing info reference ${testCase.caseNum}`, () => {
                //Assemble
                component['billingInfo'] = testCase.billingInfo;
                const billingInfoReference = component['billingInfo'];

                (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
                spyOn(component as any, 'normalizeCreditCard').and.returnValue({ cc: 'normalized' });
                spyOn(component as any, 'normalizeEFT').and.returnValue({ eft: 'normalized' });
                spyOn(component as any, 'normalizeVehicleInfo').and.returnValue({ vehicle: 'normalized' });
                (billingInfoUtilitiesService.isInternationalAddress as jasmine.Spy).and.returnValue(true);
                const fakeResponse = {
                    creditCardPaymentMethod: { fakeCcProp: 'fakeCcProp' },
                    eftPaymentMethod: { fakeEftProp: 'fakeEftProp' },
                    isCreditCard: true
                };

                //Act
                component['setAccountData'](fakeResponse);

                //Assert
                if (isObject(testCase.billingInfo)) {
                    expect(billingInfoReference).toBe(component['billingInfo']);
                } else {
                    expect(billingInfoReference).not.toBe(component['billingInfo']);
                }
            });
        });

        [
            {
                caseNum: 1,
                creditCardPaymentMethod: { fakeCcProp: 'fakeCcProp' },
                expectedCcParam: { fakeCcProp: 'fakeCcProp' },
                eftPaymentMethod: { fakeEftProp: 'fakeEftProp' },
                expectedEftParam: { fakeEftProp: 'fakeEftProp' },
                isCreditCard: true,
                expectedBillingType: 'CREDIT'
            },
            {
                caseNum: 2,
                creditCardPaymentMethod: null,
                expectedCcParam: {},
                eftPaymentMethod: null,
                expectedEftParam: {},
                isCreditCard: false,
                expectedBillingType: 'EFT'
            }
        ].forEach(testCase => {
            it(`should populate billing info ${testCase.caseNum}`, () => {
                //Assemble
                (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
                spyOn(component as any, 'normalizeCreditCard').and.returnValue({ cc: 'normalized' });
                spyOn(component as any, 'normalizeEFT').and.returnValue({ eft: 'normalized' });
                spyOn(component as any, 'normalizeVehicleInfo').and.returnValue({ vehicle: 'normalized' });
                (billingInfoUtilitiesService.isInternationalAddress as jasmine.Spy).and.returnValue(true);
                const fakeResponse = {
                    creditCardPaymentMethod: testCase.creditCardPaymentMethod,
                    eftPaymentMethod: testCase.eftPaymentMethod,
                    isCreditCard: testCase.isCreditCard
                };

                //Act
                component['setAccountData'](fakeResponse);

                //Assert
                expect(component['normalizeCreditCard']).toHaveBeenCalledWith(testCase.expectedCcParam);
                expect(component['normalizeEFT']).toHaveBeenCalledWith(testCase.expectedEftParam);
                expect(component['billingInfo']).toEqual({
                    credit: { cc: 'normalized' },
                    eft: { eft: 'normalized' },
                    billingType: testCase.expectedBillingType,
                    international: true
                });
                expect(component['billingInfoOriginal']).toEqual({
                    credit: { cc: 'normalized' },
                    eft: { eft: 'normalized' },
                    billingType: testCase.expectedBillingType,
                    international: true
                });
                expect(component['billingInfoOriginal']).not.toBe(component['billingInfo']);
            });
        });

        it('should remove old billing information when switching billing type', () => {
            //Assemble
            const fakeResponse = {
                creditCardPaymentMethod: { fakeCcProp: 'fakeCcProp' },
                eftPaymentMethod: null,
                isCreditCard: true
            };

            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
            spyOn(component as any, 'normalizeCreditCard').and.callFake(() => {
                if (fakeResponse.creditCardPaymentMethod === null) {
                    return {};
                } else {
                    return { cc: 'normalized' };
                }
            });
            spyOn(component as any, 'normalizeEFT').and.callFake(() => {
                if (fakeResponse.eftPaymentMethod === null) {
                    return null;
                } else {
                    return { eft: 'normalized' };
                }
            });
            spyOn(component as any, 'normalizeVehicleInfo').and.returnValue({ vehicle: 'normalized' });
            (billingInfoUtilitiesService.isInternationalAddress as jasmine.Spy).and.returnValue(true);

            //Act
            component['setAccountData'](fakeResponse);

            //Assert
            expect(component['billingInfo']).toEqual({
                credit: { cc: 'normalized' },
                eft: {},
                billingType: 'CREDIT',
                international: true
            });
            expect(component['billingInfoOriginal']).toEqual({
                credit: { cc: 'normalized' },
                eft: {},
                billingType: 'CREDIT',
                international: true
            });
            expect(component['billingInfoOriginal']).not.toBe(component['billingInfo']);

            //More Assemble
            fakeResponse.creditCardPaymentMethod = null;
            fakeResponse.eftPaymentMethod = { fakeEftProp: 'fakeEftProp' };
            fakeResponse.isCreditCard = false;

            //Act P2
            component['setAccountData'](fakeResponse);

            //Asserting Assertions
            expect(component['billingInfo']).toEqual({
                credit: {},
                eft: { eft: 'normalized' },
                billingType: 'EFT',
                international: true
            });
            expect(component['billingInfoOriginal']).toEqual({
                credit: {},
                eft: { eft: 'normalized' },
                billingType: 'EFT',
                international: true
            });
            expect(component['billingInfoOriginal']).not.toBe(component['billingInfo']);
        });

        it('should populate account info', () => {
            //Assemble
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
            spyOn(component as any, 'normalizeCreditCard').and.returnValue({ cc: 'normalized' });
            spyOn(component as any, 'normalizeEFT').and.returnValue({ eft: 'normalized' });
            spyOn(component as any, 'normalizeVehicleInfo').and.returnValue({ vehicle: 'normalized' });
            (billingInfoUtilitiesService.isInternationalAddress as jasmine.Spy).and.returnValue(true);
            const fakeResponse = {
                accountInfo: { fakeAccountInfo: 'fakeAccountInfo' }
            };

            //Act
            component['setAccountData'](fakeResponse);

            //Assert
            expect(component['accountInfoOriginal']).toEqual({ fakeAccountInfo: 'fakeAccountInfo' });
            expect(component['accountInfoOriginal']).not.toBe(fakeResponse.accountInfo);
        });

        it('should populate vehicle info', () => {
            //Assemble
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
            spyOn(component as any, 'normalizeCreditCard').and.returnValue({ cc: 'normalized' });
            spyOn(component as any, 'normalizeEFT').and.returnValue({ eft: 'normalized' });
            spyOn(component as any, 'normalizeVehicleInfo').and.returnValue({ vehicle: 'normalized' });
            (billingInfoUtilitiesService.isInternationalAddress as jasmine.Spy).and.returnValue(true);
            const fakeResponse = {
                accountInfo: {}
            };

            //Act
            component['setAccountData'](fakeResponse);

            //Assert
            expect(component['vehicleInfoOriginal']).toEqual({ vehicle: 'normalized' });
            expect(component['vehicleInfoOriginal']).not.toBe(component['vehicleInfo']);
        });

        it('should populate vehicle info with empty vehicle info', () => {
            //Assemble
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
            spyOn(component as any, 'normalizeCreditCard').and.returnValue({ cc: 'normalized' });
            spyOn(component as any, 'normalizeEFT').and.returnValue({ eft: 'normalized' });
            spyOn(component as any, 'normalizeVehicleInfo').and.returnValue({ vehicle: 'normalized' });
            (billingInfoUtilitiesService.isInternationalAddress as jasmine.Spy).and.returnValue(true);
            const fakeResponse = {
                accountInfo: {}
            };

            //Act
            component.vehicleInfo = undefined;
            component['setAccountData'](fakeResponse);

            //Assert
            expect(component['vehicleInfoOriginal']).toEqual({ vehicle: 'normalized' });
            expect(component['vehicleInfoOriginal']).not.toBe(component['vehicleInfo']);
        });
    });
    describe('normalizeCreditCard()', () => {
        [
            { cardNbr: null, expMonth: 12, expYear: 2020, expectedReturn: { cardNbr: null, expMonth: 12, expYear: 2020 } },
            { cardNbr: '', expMonth: null, expYear: 2020, expectedReturn: { cardNbr: '', expMonth: null, expYear: 2020 } },
            { cardNbr: '', expMonth: 12, expYear: null, expectedReturn: { cardNbr: '', expMonth: 12, expYear: null } },
            {
                cardNbr: '', expMonth: 12, expYear: 2020, expectedReturn: {
                    cardNbr: '', expMonth: 12,
                    expYear: 2020, cardExpires: '12/2020',
                    selectedYear: 2020, international: true
                }
            },
            {
                cardNbr: '12345', expMonth: 12,
                expYear: 2020, expectedReturn: {
                    cardNbr: '2345',
                    expMonth: 12, expYear: 2020,
                    cardExpires: '12/2020', selectedYear: 2020,
                    international: true
                }
            }
        ].forEach(testCase => {

            it(`should normalize the credit card if the given values are present: ${testCase.cardNbr} ${testCase.expMonth} ${testCase.expYear}`, () => {
                //Assemble
                (billingInfoUtilitiesService.isInternationalAddress as jasmine.Spy).and.returnValue(true);
                //Act
                const testCc = { cardNbr: testCase.cardNbr, expMonth: testCase.expMonth, expYear: testCase.expYear };
                const cc = component['normalizeCreditCard'](testCc);
                //Assert
                expect(cc).toEqual(testCase.expectedReturn);
            });
        });
    });
    describe('normalizeEFT()', () => {
        [
            {
                data: { nameOnBankAccount: null, accountTypeDisplay: 'Personal' },
                expectedReturn: {
                    nameOnBankAccount: null,
                    accountTypeDisplay: 'Personal'
                }
            },
            {
                data: { nameOnBankAccount: '', accountTypeDisplay: 'Personal' },
                expectedReturn: {
                    nameOnBankAccount: '',
                    name: '',
                    accountTypeDisplay: 'PERSONAL',
                    accountType: 'PERSONAL',
                    account2: undefined,
                    international: true
                }
            },
            {
                data: { nameOnBankAccount: 'poop', accountTypeDisplay: 'Personal' },
                expectedReturn: {
                    nameOnBankAccount: 'poop',
                    name: 'poop',
                    accountTypeDisplay: 'PERSONAL',
                    accountType: 'PERSONAL',
                    account2: undefined,
                    international: true
                }
            }
        ].forEach(testCase => {

            it(`should normalize the eft if the given values are present: ${testCase.data}`, () => {
                //Act
                const testEft = testCase.data;
                billingInfoUtilitiesService.isInternationalAddress.and.returnValue(true);
                const eft = component['normalizeEFT'](testEft);

                //Assert
                expect(eft).toEqual(testCase.expectedReturn);
            });
        });
    });
    describe('normalizeVehicleInfo()', () => {
        it('should not maintain a reference', () => {
            //Assemble
            const refObj = {} as any;

            //Act
            const newObj = component['normalizeVehicleInfo'](refObj);

            //Assert
            expect(newObj).not.toBe(refObj);
        });
    });
    describe('onSubmit', () => {
        beforeEach(() => {
            spyOn<any>(component, 'setEditedBillingInfo').and.callFake(() => { });
            spyOn<any>(component, 'setEditedVehicleInfo').and.callFake(() => { });
            spyOn<any>(component, 'convertAccountAndGoToReceiptPage').and.callFake(() => { });
        });

        it('should call setEditedBillingInfo', async () => {
            //Act
            await component.onSubmit({});

            //Assert
            expect(component['setEditedBillingInfo']).toHaveBeenCalledTimes(1);
        });
        it('should call setEditedVehicleInfo', async () => {
            //Act
            await component.onSubmit({});

            //Assert
            expect(component['setEditedVehicleInfo']).toHaveBeenCalledTimes(1);
        });
        it('should call convertAccountAndGoToReceiptPage', async () => {
            //act
            await component.onSubmit({});

            //assert
            expect(component.convertAccountAndGoToReceiptPage).toHaveBeenCalledTimes(1);
        });
    });
    describe('onPrevious()', () => {

        it('should call state.go() with billing Info', async () => {
            //Assemble
            (state.go as jasmine.Spy).and.callFake(() => { });
            component['billingInfo'] = { fakeBillingProp: 'fakeBillingProp' };
            const nextState: StateConfig = {
                name: 'test',
            };

            //Act
            await component['onPrevious'](nextState);

            //Assert
            expect(state.go).toHaveBeenCalledWith(
                nextState,
                { billingInfo: component['billingInfo'] },
                { custom: { isExplicitlyAllowedTransition: true } });
        });

    });
    describe('convertAccountAndGoToReceiptPage()', () => {
        beforeEach(() => {
            (genericRepo.dataFactory.ConvertAccountCreateAccountFromViolation as jasmine.Spy).and.returnValue({});
        });

        it('should call api.ConvertAccountCreateAccountFromViolation() and isErrorFree()', async () => {
            //Assemble
            component.deliveryMethodOptions.deliveryMethod = DeliveryMethodType.Mail;
            component['createAccountFromViolationsTotals'] = {
                totalViolationsDue: '1.23',
                serviceFee: '22.22',
                createAccountPlateTotal: '3333.33',
                createAccountDiscount: '44.44',
                createAccountEZTagFee: '55.55',
                createAccountStartingBalance: '66.66',
                dontCreateAccountPlateTotal: '77.77',
                totalFeesDiscountedDontCreateAccount: '88.88',
                totalUninvoicedAmount: '99.99'
            };
            (genericRepo.dataFactory.ConvertAccountCreateAccountFromViolation as jasmine.Spy).and.returnValue({});
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
            component['billingInfo'] = { fakeBillingProp: 'fakeBillingProp' };
            component['vehicleInfo'] = [{ fakeVehicleProp: 'fakeVehicleProp' }];

            //Act
            await component['convertAccountAndGoToReceiptPage']({});

            //Assert
            expect(responseErrorService.isErrorFree).toHaveBeenCalledTimes(1);
            expect(genericRepo.dataFactory.ConvertAccountCreateAccountFromViolation).toHaveBeenCalledWith({
                deliveryMethod: DeliveryMethodType.Mail, totalPaymentAmount: '3333.33'
            });
        });

        it('should not call the other functions if api.ConvertAccountCreateAccountFromViolation() returned with errors',
            async () => {

                //Assemble
                component.deliveryMethodOptions.deliveryMethod = DeliveryMethodType.Mail;
                component['createAccountFromViolationsTotals'] = {
                    totalViolationsDue: '1.23',
                    serviceFee: '22.22',
                    createAccountPlateTotal: '3333.33',
                    createAccountDiscount: '44.44',
                    createAccountEZTagFee: '55.55',
                    createAccountStartingBalance: '66.66',
                    dontCreateAccountPlateTotal: '77.77',
                    totalFeesDiscountedDontCreateAccount: '88.88',
                    totalUninvoicedAmount: '99.99'
                };
                genericRepo.dataFactory.ConvertAccountCreateAccountFromViolation.and.returnValue({});
                (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(false);
                component['billingInfo'] = { fakeBillingProp: 'fakeBillingProp' };
                component['vehicleInfo'] = [{ fakeVehicleProp: 'fakeVehicleProp' }];

                //Act
                await component['convertAccountAndGoToReceiptPage']({});

                //Assert
                expect(responseErrorService.isErrorFree).toHaveBeenCalledTimes(1);
                expect(genericRepo.dataFactory.ConvertAccountCreateAccountFromViolation).toHaveBeenCalledWith({
                    deliveryMethod: DeliveryMethodType.Mail, totalPaymentAmount: '3333.33'
                });
                expect(authChannel.logIn).toHaveBeenCalledTimes(0);
                expect(session.setAcctActivity).toHaveBeenCalledTimes(0);
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
                stateList: parent.usStates,
                countryList: parent.countries
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

            expect(component.billingInfo).toEqual(mockBillingInfo);

            expect(component.billingInfo.billingType).toEqual(BillingType.Eft);

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
                stateList: parent.usStates,
                countryList: parent.countries
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

            expect(component.billingInfo).toEqual(mockBillingInfo);

            expect(component.billingInfo.billingType).toEqual(BillingType.Credit);

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

            component.billingInfo.billingType = 'original value';

            const event = new EventEmitter<string>();

            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());

            //Act
            const promise = component['openEditBillingModal']();

            event.emit('');
            event.complete();
            await promise;

            //Assert
            expect(dialogService.openSliderCentered).toHaveBeenCalledTimes(1);
            expect(component.billingInfo).toEqual(expectedBillingInfo);
            expect(component.billingInfo.billingType).toEqual('original value');

        });
    });
    describe('openEditVehiclesModal', () => {
        it('should call dialogService.openSliderCentered() 1 time', async () => {

            //Assemble
            const mockVehicleInfo = {
                licPlate: 'licPlate',
                licState: 'licState',
                motorcycle: false,
                nickname: 'nickname',
                temporaryLicPlate: false,
                vehicleClassCode: Number('3'),
                vehicleClassDesc: 'vehicleClassDesc',
                vehicleColor: 'vehicleColor',
                vehicleMake: 'vehicleMak',
                vehicleModel: 'vehicleMode',
                vehicleYear: '2020',
                isMotorcycleDisabled: true
            };

            const data: EditVehicleInjectionValues = {
                vehicleInfo: mockVehicleInfo,
                modalCms: {
                    vehicleInfoTitle: 'Title',
                    vehicleToolTipEditButton: 'toolTip',
                    vehicleToolTipText: 'editVehicleToolTipText'
                },
                stateList: parent.usStates,
                plateIsReadOnly: true,
                motorcycleDisabled: true
            };

            const event = new EventEmitter<EditVehicleInjectionValues>();

            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());

            //Act
            const promise = component['openEditVehiclesModal']();

            event.emit(data);
            event.complete();
            await promise;

            //Assert
            expect(dialogService.openSliderCentered).toHaveBeenCalledTimes(1);

            expect(component.vehicleInfo).toEqual(mockVehicleInfo);
            expect(component.vehicleInfo).not.toBe(mockVehicleInfo);

        });

        it('should not change values if returns empty string', async () => {

            //Assemble
            const expectedVehicleInfo = {
                licPlate: 'licPlate',
                licState: 'licState',
                motorcycle: 'motorcycle',
                nickname: 'nickname',
                temporaryLicPlate: 'temporaryLicPlate',
                vehicleClassCode: Number('3'),
                vehicleClassDesc: 'vehicleClassDesc',
                vehicleColor: 'vehicleColor',
                vehicleMake: 'vehicleMak',
                vehicleModel: 'vehicleMode',
                vehicleYear: '2020',
                isMotorcycleDisabled: true
            };


            const event = new EventEmitter<string>();

            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());

            //Act
            const promise = component['openEditVehiclesModal']();

            event.emit('');
            event.complete();
            await promise;

            //Assert
            expect(dialogService.openSliderCentered).toHaveBeenCalledTimes(1);

            expect(component.vehicleInfo).toEqual(expectedVehicleInfo);

        });
    });

    describe('setEditedBillingInfo()', () => {
        it('should not make any API calls if billing info stayed the same', async () => {
            //Assemble
            (genericRepo.dataFactory.GetAccountSummaryCreateAccountFromViolation as jasmine.Spy).and.returnValue({ errors: [] });
            (genericRepo.dataFactory.SetBillingInfoCreateAccountViolation as jasmine.Spy).and.returnValue({ errors: [] });
            component['billingInfoOriginal'] = {};

            //Act
            await component['setEditedBillingInfo']({});

            //Assert
            expect(genericRepo.dataFactory.SetBillingInfoCreateAccountViolation).toHaveBeenCalledTimes(0);
            expect(genericRepo.dataFactory.GetAccountSummaryCreateAccountFromViolation).toHaveBeenCalledTimes(0);

        });

        it('should called api with correct capitalization of eft bank account type for Personal acct type', async () => {
            //Assemble
            (genericRepo.dataFactory.GetAccountSummaryCreateAccountFromViolation as jasmine.Spy).and.returnValue({ errors: [] });
            (genericRepo.dataFactory.SetBillingInfoCreateAccountViolation as jasmine.Spy).and.returnValue({ errors: [] });
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
            spyOn(component as any, 'normalizeCreditCard').and.returnValue({ cc: 'normalized' });
            spyOn(component as any, 'normalizeEFT').and.returnValue({ eft: 'normalized' });
            spyOn(component as any, 'normalizeVehicleInfo').and.returnValue({ vehicle: 'normalized' });

            const expectedReq = {
                creditCardPaymentMethod: null,
                eftPaymentMethod: {
                    accountType: 'Personal',
                    accountTypeDisplay: 'Personal',
                    nameOnBankAccount: component['billingInfo'].eft.name
                },
                isCreditCard: false
            };
            component['billingInfoOriginal'] = {};

            //Act
            await component['setEditedBillingInfo']({
                billingType: BillingType.Eft,
                eft: { accountType: BankAccountType.Personal }
            }
            );

            //Assert
            expect(genericRepo.dataFactory.SetBillingInfoCreateAccountViolation).toHaveBeenCalledTimes(1);
            expect(genericRepo.dataFactory.SetBillingInfoCreateAccountViolation).toHaveBeenCalledWith(expectedReq);

        });

        it('should called api with correct capitalization of eft bank account type for Business acct type', async () => {
            //Assemble
            (genericRepo.dataFactory.GetAccountSummaryCreateAccountFromViolation as jasmine.Spy).and.returnValue({ errors: [] });
            (genericRepo.dataFactory.SetBillingInfoCreateAccountViolation as jasmine.Spy).and.returnValue({ errors: [] });
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
            spyOn(component as any, 'normalizeCreditCard').and.returnValue({ cc: 'normalized' });
            spyOn(component as any, 'normalizeEFT').and.returnValue({ eft: 'normalized' });
            spyOn(component as any, 'normalizeVehicleInfo').and.returnValue({ vehicle: 'normalized' });

            const expectedReq = {
                creditCardPaymentMethod: null,
                eftPaymentMethod: {
                    accountType: 'Business',
                    accountTypeDisplay: 'Business',
                    nameOnBankAccount: component['billingInfo'].eft.name
                },
                isCreditCard: false
            };
            component['billingInfoOriginal'] = {};

            //Act
            await component['setEditedBillingInfo']({
                billingType: BillingType.Eft,
                eft: { accountType: BankAccountType.Business }
            });

            //Assert
            expect(genericRepo.dataFactory.SetBillingInfoCreateAccountViolation).toHaveBeenCalledTimes(1);
            expect(genericRepo.dataFactory.SetBillingInfoCreateAccountViolation).toHaveBeenCalledWith(expectedReq);

        });

        it('should not make any API calls if billing info stayed the same', async () => {
            //Assemble
            (genericRepo.dataFactory.GetAccountSummaryCreateAccountFromViolation as jasmine.Spy).and.returnValue({ errors: [] });
            (genericRepo.dataFactory.SetBillingInfoCreateAccountViolation as jasmine.Spy).and.returnValue({ errors: [] });
            component['billingInfoOriginal'] = {};

            //Act
            await component['setEditedBillingInfo']({});

            //Assert
            expect(genericRepo.dataFactory.SetBillingInfoCreateAccountViolation).toHaveBeenCalledTimes(0);
            expect(genericRepo.dataFactory.GetAccountSummaryCreateAccountFromViolation).toHaveBeenCalledTimes(0);

        });

        it('should make setBilling API calls if billing info changed', async () => {
            //Assemble
            (genericRepo.dataFactory.SetBillingInfoCreateAccountViolation as jasmine.Spy).and.returnValue('fake set billing info response');
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
            (genericRepo.dataFactory.GetAccountSummaryCreateAccountFromViolation as jasmine.Spy).and.returnValue({ errors: [] });
            spyOn(component as any, 'setAccountData');
            component['billingInfoOriginal'] = {};
            //Act
            await component['setEditedBillingInfo']({ fakeProp: 'fakeProp' });

            //Assert
            expect(genericRepo.dataFactory.SetBillingInfoCreateAccountViolation).toHaveBeenCalledTimes(1);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledTimes(2);
            expect(genericRepo.dataFactory.GetAccountSummaryCreateAccountFromViolation).toHaveBeenCalledTimes(1);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith('fake set billing info response');
            expect(component['setAccountData']).toHaveBeenCalledTimes(1);

        });

        it('should make reject promise if billing API calls have errors', async () => {
            //Assemble
            (genericRepo.dataFactory.SetBillingInfoCreateAccountViolation as jasmine.Spy).and.returnValue({ errors: [{}] });
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(false);
            (genericRepo.dataFactory.GetAccountSummaryCreateAccountFromViolation as jasmine.Spy).and.returnValue({ errors: [] });
            spyOn(component as any, 'setAccountData');
            component['billingInfoOriginal'] = {};

            try {
                //Act
                await component['setEditedBillingInfo']([{ fakeProp: 'fakeProp' }]);
            } catch (e) {
                expect(e).toBeInstanceOf(Error);
            }

            //Assert
            expect(genericRepo.dataFactory.SetBillingInfoCreateAccountViolation).toHaveBeenCalledTimes(1);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledTimes(1);
            expect(genericRepo.dataFactory.GetAccountSummaryCreateAccountFromViolation).toHaveBeenCalledTimes(0);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(0);

        });
    });
    describe('setEditedVehicleInfo()', () => {

        it('should not make any API calls if vehicle info stayed the same', async () => {
            //Assemble
            (genericRepo.dataFactory.GetAccountSummaryCreateAccountFromViolation as jasmine.Spy).and.returnValue({ errors: [] });
            (genericRepo.dataFactory.SetViolatorAccountInfo as jasmine.Spy).and.returnValue({ errors: [] });
            component['accountInfoOriginal'] = {};
            component['vehicleInfoOriginal'] = [{}];

            //Act
            await component['setEditedVehicleInfo']([{}]);

            //Assert
            expect(genericRepo.dataFactory.SetViolatorAccountInfo).toHaveBeenCalledTimes(0);
            expect(genericRepo.dataFactory.GetAccountSummaryCreateAccountFromViolation).toHaveBeenCalledTimes(0);

        });

        it('should make setAccount API calls if vehicle info changed', async () => {
            //Assemble
            (genericRepo.dataFactory.SetViolatorAccountInfo as jasmine.Spy).and.returnValue({ errors: [] });
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
            (genericRepo.dataFactory.GetAccountSummaryCreateAccountFromViolation as jasmine.Spy).and.returnValue({ errors: [] });
            spyOn(component as any, 'setAccountData');
            component['accountInfoOriginal'] = {};
            component['vehicleInfoOriginal'] = [{}];

            //Act
            await component['setEditedVehicleInfo']([{ fakeProp: 'fakeProp' }]);

            //Assert
            expect(genericRepo.dataFactory.SetViolatorAccountInfo).toHaveBeenCalledTimes(1);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledTimes(2);
            expect(genericRepo.dataFactory.GetAccountSummaryCreateAccountFromViolation).toHaveBeenCalledTimes(1);
            expect(component['setAccountData']).toHaveBeenCalledTimes(1);

        });

        it('should make reject promise if vehicle account API calls have errors', async () => {
            //Assemble
            (genericRepo.dataFactory.SetViolatorAccountInfo as jasmine.Spy).and.returnValue({ errors: [{}] });
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(false);
            (genericRepo.dataFactory.GetAccountSummaryCreateAccountFromViolation as jasmine.Spy).and.returnValue({ errors: [] });
            spyOn(component as any, 'setAccountData');
            component['accountInfoOriginal'] = {};
            component['vehicleInfoOriginal'] = [{}];

            try {
                //Act
                await component['setEditedVehicleInfo']([{ fakeProp: 'fakeProp' }]);
            } catch (e) {
                expect(e).toBeInstanceOf(Error);
            }

            //Assert
            expect(genericRepo.dataFactory.SetViolatorAccountInfo).toHaveBeenCalledTimes(1);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledTimes(1);
            expect(genericRepo.dataFactory.GetAccountSummaryCreateAccountFromViolation).toHaveBeenCalledTimes(0);

        });
    });
});
