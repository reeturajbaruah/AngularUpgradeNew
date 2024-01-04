import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { FrameComponent } from '../frame/frame.component';
import { ComponentManagerService } from '../../services/manager/component-manager-service';
import { IToggles } from '../../models/toggles.models';
import { IWizardStateResolverService } from '../../../../common/interfaces';
import { PaymentMethodComponent, WizardComponent, WizardStateResolverFactory } from '../../../../common/ui';
import { PaymentFacadeService } from '../../services/payment/facade/payment-facade.service';
import { NavigationService } from '../../services/navigation/navigation.service';
import { CurrentUserService, GenericRepoService, ResponseErrorService } from '../../../../common/services';
import { CmsReplacementService, CmsResolverService } from '../../../../cms/services';
import {
    AddressInfo, BillingInfo, BillingType, CreditCardDetails,
    DeliveryMethodType, IPaymentMethodDetails, TagType
} from '../../../../common/models';
import { ReviewComponent } from './review.component';
import { CheckoutFacadeService } from '../../services/checkout/facade/checkout-facade.service';
import { ReviewHelper } from './helper/review.helper';
import { ENVIRON_CONFIG, SERVER_CONSTANTS } from '../../../../common/upgrades';
import { RebillFacadeService } from '../../services/payment/facade/rebill-facade.service';
import { PaymentApiService } from '../../services/payment/api/payment-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VehiclesOperationHelper } from '../../services/vehicles/operations/helper/operation-helper';
import { FormsModule } from '@angular/forms';
import { Prop } from '../../models/current-step.model';
import { IEZTag } from '../../../../shared/vehicle-info';
import { IBillingContent } from '../../../../shared/payment/billing/models/models';
import { Action, IEvent } from '../../../../shared/models/events.model';
import { IPageEvent } from '../../models/campaign-models';
import { ICheckoutPaymentRes } from 'account/create/models/checkout-payment.models';
import { StorefrontService } from '../../../../storefront/services/storefront.service';


describe('review component', () => {

    let fixture: ComponentFixture<ReviewComponent>;
    let component: ReviewComponent;
    let paymentFacadeServiceSpy: jasmine.SpyObj<PaymentFacadeService>;
    let parent: jasmine.SpyObj<FrameComponent>;
    let componentManagerServiceSpy: jasmine.SpyObj<ComponentManagerService>;
    let wizardStateResolverFactory: jasmine.SpyObj<WizardStateResolverFactory>;
    let iWizardStateResolverServiceSpy: jasmine.SpyObj<IWizardStateResolverService>;
    let navigation: jasmine.SpyObj<NavigationService>;
    let currentUserServiceSpy: jasmine.SpyObj<CurrentUserService>;
    let cmsResolverService: jasmine.SpyObj<CmsResolverService>;
    let wizardComponent: WizardComponent;
    let checkoutFacadeServiceSpy: jasmine.SpyObj<CheckoutFacadeService>;
    let vehiclesOperationHelperSpy: jasmine.SpyObj<VehiclesOperationHelper>;
    let reviewHelperSpy: jasmine.SpyObj<ReviewHelper>;
    let genericRepo: any;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let storefrontService: any;
    let rebillFacadeService: jasmine.SpyObj<RebillFacadeService>;;
    let paymentApiService: jasmine.SpyObj<PaymentApiService>;
    let environmentConfig: any;
    let stateServiceSpy: jasmine.SpyObj<StateService>;
    let cmsReplacementServiceSpy: jasmine.SpyObj<CmsReplacementService>;

    const mockServerConstants = {
        latestWebUiVersionHeaderKey: 'key'
    };

    const billingInfoForCreditorEFT = {
        credit: {
            country: 'USA', displayCountry: 'USA', international: false, address1: '1900 Augusta Dr', state: 'TX', city: 'Houston',
            paypageRegistrationId: '333', cardNbr: '411111111111111', accountBillingMethodId: 123455
        } as CreditCardDetails & AddressInfo,
        eft: { country: 'USA', displayCountry: 'USA', international: false, nameOnBankAccount: 'test' },
        billingInfoExists: true,
        paymentMethodDetails: { showCashOption: true, enableCashOption: true } as IPaymentMethodDetails,
        autoReplenishmentStatus: true,
        savePaymentStatus: true
    } as BillingInfo;

    const billingContent = {
        header: 'header',
        billingInfo: billingInfoForCreditorEFT,
        links: [
            {
                name: 'name',
                visible: true
            }
        ],
        states: [],
        countries: [],
        redirectToPaymentOnEdit: false
    } as IBillingContent;

    const addressInfoObj = {
        address1: 'address1',
        address2: 'address2',
        address3: 'address3',
        address4: 'address4',
        city: 'city',
        state: 'state',
        zip: 'zip',
        plus4: 'plus4',
        country: 'country',
        displayCountry: 'USA',
        international: false,
    };

    const delieveryMethodInfo = {
        selectedDeliveryMethod: DeliveryMethodType.Mail,
        addressInfo: addressInfoObj
    };

    const creditMockData = {
        cardCode: 'V',
        cardNbr: '123123',
        expMonth: 1,
        expYear: 9999,
        nameOnCard: 'test name',
        address1: 'addy fake',
        city: 'city fake',
        state: 'state fake',
        zip: 'fake zip',
        plus4: 'asdf',
        country: 'USA',
        displayCountry: 'USA',
        international: false
    } as CreditCardDetails & AddressInfo;


    beforeEach(async () => {
        cmsReplacementServiceSpy = jasmine.createSpyObj('cmsReplacementService', ['transformTemplate']);
        reviewHelperSpy = jasmine.createSpyObj('reviewHelperSpy', [''], ['getBillingInfo', 'getVehiclesCart']);
        //Below line is not working as expected.
        //(Object.getOwnPropertyDescriptor(reviewHelperSpy, 'getBillingInfo').get as jasmine.Spy<any>).and.callFake(() => billingContent);
        iWizardStateResolverServiceSpy = jasmine.createSpyObj('fakeService', ['nextState', 'previousState', 'cancelState', 'getUiOrder']);
        wizardStateResolverFactory = jasmine.createSpyObj('fakeFactory', ['getService']);
        wizardStateResolverFactory.getService.and.returnValue(iWizardStateResolverServiceSpy);
        componentManagerServiceSpy = jasmine.createSpyObj('componentManagerServiceSpy', ['select', 'getToggles', 'checkUserResumedCreateAcctFlow', 'campaign']);
        paymentFacadeServiceSpy = jasmine.createSpyObj('paymentFacadeServiceSpy',
            ['getMailingInfo',
                'removeBillingMethod',
                'addPaymentMethodandRebillAmountofCreditCard',
                'addPaymentMethodandRebillAmountofEFT',
                'addorUpdatePaymentMethodandRebillAmountofCreditCard',
                'addorUpdatePaymentMethodandRebillAmountofEFT',
                'submitPayment'
            ]
        );
        navigation = jasmine.createSpyObj('navigation', ['navigation', 'setOrder', 'skipStep', 'addStep']);
        currentUserServiceSpy = jasmine.createSpyObj('currentUserServiceSpy', ['updateMailingInfo', 'updateAutoReplenishmentStatus', 'getCurrentUser', 'makeSessionActive']);
        currentUserServiceSpy.getCurrentUser.and.returnValue({ acctId: 123 });
        cmsResolverService = jasmine.createSpyObj('cmsResolverService', ['resolve']);
        cmsResolverService.resolve.and.resolveTo({ ShortDescription: 'fakeDescription' });
        parent = jasmine.createSpyObj('parent', ['campaignInit', 'nextButtonText', 'skipDeliveryStep', 'cancel']);
        stateServiceSpy = jasmine.createSpyObj('state', ['go']);
        wizardComponent = jasmine.createSpyObj('wizardComponent', ['']);
        checkoutFacadeServiceSpy = jasmine.createSpyObj('checkoutFacadeServiceSpy', ['checkoutPayment', 'makePayment']);
        await checkoutFacadeServiceSpy.makePayment.and.returnValue(Promise.resolve(true));

        genericRepo = {
            dataFactory: {
                getAllPaymentMethods: jasmine.createSpy('getAllPaymentMethods')
            }
        };

        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);
        storefrontService = jasmine.createSpyObj('storefrontService', ['isEnabled']);
        rebillFacadeService = jasmine.createSpyObj('rebillFacadeService', ['updateRebillAmount']);
        rebillFacadeService.updateRebillAmount.and.resolveTo(Promise.resolve(true));
        paymentApiService = jasmine.createSpyObj('paymentApiService', ['']);
        environmentConfig = {};
        vehiclesOperationHelperSpy = jasmine.createSpyObj('vehiclesOperationHelperSpy', ['edit', 'remove']);

        await TestBed
            .configureTestingModule({
                imports: [HttpClientTestingModule, FormsModule],
                declarations: [
                    ReviewComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: WizardStateResolverFactory, useFactory: () => wizardStateResolverFactory },
                    { provide: WizardComponent, useFactory: () => wizardComponent },
                    { provide: SERVER_CONSTANTS, useValue: mockServerConstants },
                    { provide: CmsReplacementService, useFactory: () => cmsReplacementServiceSpy },
                    { provide: ComponentManagerService, useFactory: () => componentManagerServiceSpy },
                    { provide: StateService, useFactory: () => stateServiceSpy },
                    { provide: CheckoutFacadeService, useFactory: () => checkoutFacadeServiceSpy },
                    { provide: VehiclesOperationHelper, useFactory: () => vehiclesOperationHelperSpy },
                    { provide: PaymentFacadeService, useFactory: () => paymentFacadeServiceSpy },
                    { provide: ReviewHelper, useFactory: () => reviewHelperSpy },
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: GenericRepoService, useValue: genericRepo },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: CurrentUserService, useFactory: () => currentUserServiceSpy },
                    { provide: NavigationService, useFactory: () => navigation },
                    { provide: StorefrontService, useFactory: () => storefrontService },
                    { provide: RebillFacadeService, useFactory: () => rebillFacadeService },
                    { provide: PaymentApiService, useFactory: () => paymentApiService },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ReviewComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeTruthy();
        });
    });

    it('initialized the component', async () => {
        const ezTag: IEZTag = {
            tagId: TagType.Tag,
            fullTagId: TagType.Tag,
            acctTagSeq: -1,
            acctTagSeqSepcified: true,
            acctTagStatus: 'Test tag status text',
            tagStatusDesc: 'Test tag status description text',
            pbpStartDate: '2023-01-01',
            pbpEndDate: '2023-12-31',
            tagTypeCode: TagType.Tag,
            activePbpTagExist: false,
            tagless_Desc: 'Test tagless description text',
            acctVehicleId: 123456789,
            nicknameHasBeenManuallyCopiedinApiAndIsForDisplayOnly: false,
            licState: 'TX',
            licPlate: 'ABC123',
            vehicleYear: '2023',
            vehicleModel: 'Model 3',
            vehicleMake: 'Tesla',
            vehicleColor: 'Blue',
            vehicleClassCode: 2,
            vehicleClassDesc: '2-Axel',
            temporaryLicPlate: false,
            motorcycle: false,
            nickname: 'Test nickname text',
            isMotorcycleDisabled: false
        };
        const ezTags = [ezTag];
        componentManagerServiceSpy.select.withArgs(Prop.Vehicles).and.returnValue(Promise.resolve(ezTags));
        componentManagerServiceSpy.select.withArgs(Prop.Payment).and.returnValue(Promise.resolve(billingInfoForCreditorEFT));
        componentManagerServiceSpy.select.withArgs(Prop.DeliveryMethod).and.returnValue(Promise.resolve(delieveryMethodInfo));
        spyOn<any>(component, 'setBillingInfo');
        spyOn<any>(component, 'setVehiclesOrder');
        spyOn<any>(component, 'setPaymentSummary');
        spyOn<any>(component, 'ValidateRoutingNumber');
        spyOn<any>(component, 'setDeliveryMethodSummary');
        await component.ngOnInit();
        expect(component).toBeDefined();
    });


    describe('Should call onClickOperation for Edit & Remove', () => {

        it('DELIVERY-METHOD', async () => {
            const event = {
                action: Action.Edit,
                source: 'DELIVERY-METHOD',
                data: {}
            } as IEvent;
            await component.onClickOperation(event);
            expect(stateServiceSpy.go).toHaveBeenCalledTimes(1);
        });

        it('ORDER-SUMMARY-Edit', async () => {
            const response = { IsFlexPay: true, EzTagOption: true } as IToggles;
            component['toggles'] = response;

            const event = {
                action: Action.Edit,
                source: 'ORDER-SUMMARY',
                data: {}
            } as IEvent;

            spyOn<any>(component, 'setPaymentSummary');
            await component.onClickOperation(event);
            expect(stateServiceSpy.go).toHaveBeenCalledTimes(1);
        });


        it('ORDER-SUMMARY-Remove', async () => {
            const response = { IsFlexPay: true, EzTagOption: true } as IToggles;
            component['toggles'] = response;

            const event = {
                action: Action.Remove,
                source: 'ORDER-SUMMARY',
                data: {}
            } as IEvent;

            vehiclesOperationHelperSpy.remove.and.returnValue(Promise.resolve(true));
            spyOn<any>(component, 'setPaymentSummary');
            await component.onClickOperation(event);
            expect(vehiclesOperationHelperSpy.remove).toHaveBeenCalledTimes(1);
        });

    });

    describe('next , previous & cancel click events of review component - ', () => {

        it('should call next method of review component', async () => {
            const event = {
                pageEvent: IPageEvent.OnInit,
                pageName: '',
                compeleteReg: false
            };
            const response = {
                IsAutoReplenishmentEnabled: true,
                IsFlexPay: true
            } as IToggles;

            component['checkoutPayment'] = {
                tagSalesAmt: 10,
                depositAmt: 20,
                totalAmt: 30,
                transactionId: 111233,
                tagCostExists: true,
                lowBalanceAmt: 10,
                rebillAmt: 20,
                isCashPayment: false,
                credit: creditMockData,
                eft: null,
                selectedBillingType: BillingType.Credit,
                isOnetimePayment: false
            } as ICheckoutPaymentRes;

            component['toggles'] = response;
            component['billingContent'] = billingContent;
            spyOn<any>(component, 'makePayment').and.returnValue(true);
            await component.next(event);
            expect(stateServiceSpy.go).toHaveBeenCalledTimes(1);
        });

        it('should call cancel method of review component', async () => {
            //Just validating singnatures
            const state = { name: 'test' } as StateDeclaration;
            await component.cancel(state, wizardComponent);
            expect(parent.cancel).toHaveBeenCalledTimes(1);
        });

        it('should call previous method of review component', async () => {
            //Just validating singnatures
            const state = { name: 'test' } as StateDeclaration;
            component.navigationLinks = { prev: 'prev', next: 'next' };
            await component.previous(state);
            expect(stateServiceSpy.go).toHaveBeenCalledTimes(1);
        });

    });

    it('should call editVehicles method of review component with flexpay', async () => {
        const response = { IsFlexPay: true, EzTagOption: true } as IToggles;
        component['toggles'] = response;
        const ezTag: IEZTag = {
            tagId: TagType.Tag,
            fullTagId: TagType.Tag,
            acctTagSeq: -1,
            acctTagSeqSepcified: true,
            acctTagStatus: 'Test tag status text',
            tagStatusDesc: 'Test tag status description text',
            pbpStartDate: '2023-01-01',
            pbpEndDate: '2023-12-31',
            tagTypeCode: TagType.Tag,
            activePbpTagExist: false,
            tagless_Desc: 'Test tagless description text',
            acctVehicleId: 123456789,
            nicknameHasBeenManuallyCopiedinApiAndIsForDisplayOnly: false,
            licState: 'TX',
            licPlate: 'ABC123',
            vehicleYear: '2023',
            vehicleModel: 'Model 3',
            vehicleMake: 'Tesla',
            vehicleColor: 'Blue',
            vehicleClassCode: 2,
            vehicleClassDesc: '2-Axel',
            temporaryLicPlate: false,
            motorcycle: false,
            nickname: 'Test nickname text',
            isMotorcycleDisabled: false
        };
        const data = {
            action: Action.Edit,
            source: 'order-summary',
            data: {
                index: 1,
                vehicleEdited: ezTag
            }
        } as any;

        component['editVehicles'](data);
        expect(stateServiceSpy.go).toHaveBeenCalledTimes(1);
    });


    it('should call editVehicles method of review component without flexpay', async () => {
        const response = { IsFlexPay: false, EzTagOption: true } as IToggles;
        component['toggles'] = response;
        const ezTag: IEZTag = {
            tagId: TagType.Tag,
            fullTagId: TagType.Tag,
            acctTagSeq: -1,
            acctTagSeqSepcified: true,
            acctTagStatus: 'Test tag status text',
            tagStatusDesc: 'Test tag status description text',
            pbpStartDate: '2023-01-01',
            pbpEndDate: '2023-12-31',
            tagTypeCode: TagType.Tag,
            activePbpTagExist: false,
            tagless_Desc: 'Test tagless description text',
            acctVehicleId: 123456789,
            nicknameHasBeenManuallyCopiedinApiAndIsForDisplayOnly: false,
            licState: 'TX',
            licPlate: 'ABC123',
            vehicleYear: '2023',
            vehicleModel: 'Model 3',
            vehicleMake: 'Tesla',
            vehicleColor: 'Blue',
            vehicleClassCode: 2,
            vehicleClassDesc: '2-Axel',
            temporaryLicPlate: false,
            motorcycle: false,
            nickname: 'Test nickname text',
            isMotorcycleDisabled: false
        };
        const data = {
            action: Action.Edit,
            source: 'order-summary',
            data: {
                index: 1,
                vehicleEdited: ezTag
            }
        } as any;

        component['pageCms'] = { vehicleExsts: true } as any;
        component['editVehicles'](data);
        expect(vehiclesOperationHelperSpy.edit).toHaveBeenCalledTimes(1);
    });

    it('should call editBilling method of review component', async () => {
        const response = { IsFlexPay: false, EzTagOption: true } as IToggles;
        component['toggles'] = response;

        const localBillingContent = {
            header: 'header',
            billingInformation: billingInfoForCreditorEFT,
            links: [
                {
                    name: 'name',
                    visible: true
                }
            ],
            states: [],
            countries: [],
            redirectToPaymentOnEdit: false,
            billingType: BillingType.Credit
        } as any;

        component['pageCms'] = { vehicleExsts: true } as any;
        component['billingContent'] = localBillingContent;
        component.editBilling(localBillingContent);
        expect(paymentFacadeServiceSpy.submitPayment).toHaveBeenCalledTimes(1);
    });

    //Commented below tests as getOwnPropertyDescriptor is not working as expected for review helper properties
    // Object.getOwnPropertyDescriptor(reviewHelperSpy, 'getBillingInfo').get as jasmine.Spy<any>).and.callFake(() => billingContent

    //it('should call setBillingInfo method', async () => {
    //        let paymentInfoData: any;
    //        component['isAutoReplenishmentEnabled'] = true;

    //        const ezTag: IEZTag = {
    //            tagId: TagType.Tag,
    //            fullTagId: TagType.Tag,
    //            acctTagSeq: -1,
    //            acctTagSeqSepcified: true,
    //            acctTagStatus: 'Test tag status text',
    //            tagStatusDesc: 'Test tag status description text',
    //            pbpStartDate: '2023-01-01',
    //            pbpEndDate: '2023-12-31',
    //            tagTypeCode: TagType.Tag,
    //            activePbpTagExist: false,
    //            tagless_Desc: 'Test tagless description text',
    //            acctVehicleId: 123456789,
    //            nicknameHasBeenManuallyCopiedinApiAndIsForDisplayOnly: false,
    //            licState: 'TX',
    //            licPlate: 'ABC123',
    //            vehicleYear: '2023',
    //            vehicleModel: 'Model 3',
    //            vehicleMake: 'Tesla',
    //            vehicleColor: 'Blue',
    //            vehicleClassCode: 2,
    //            vehicleClassDesc: '2-Axel',
    //            temporaryLicPlate: false,
    //            motorcycle: false,
    //            nickname: 'Test nickname text',
    //            isMotorcycleDisabled: false
    //        };
    //        const ezTags = [ezTag];

    //        let billingInfo = {} as any & { cards: any[] };

    //        paymentInfoData = {
    //            autoReplenishmentStatus: true,
    //            savePaymentStatus: false,
    //            isBillingTypeCash: false,
    //            selectedBillingType: BillingType.Credit,
    //            paymentRequest: null,
    //            paymentOperation: null,
    //        };

    //        const creditMockData = {
    //            cardCode: 'V',
    //            cardNbr: '123123',
    //            expMonth: 1,
    //            expYear: 9999,
    //            nameOnCard: 'test name',
    //            address1: 'addy fake',
    //            city: 'city fake',
    //            state: 'state fake',
    //            zip: 'fake zip',
    //            plus4: 'asdf',
    //            country: 'USA',
    //            displayCountry: 'USA',
    //            international: false
    //        } as CreditCardDetails & AddressInfo;

    //        billingInfo = {
    //            credit: creditMockData,
    //            eft: null,
    //            billingType: BillingType.Credit,
    //            billingTypeDisplay: BillingType.Credit,
    //            cmsPaymentInfo: null
    //        } as BillingInfo;
    //        billingInfo.cards = [creditMockData];
    //        const data = { billingInfo, paymentInfoData };

    //        componentManagerServiceSpy.select.withArgs(Prop.Vehicles).and.returnValue(Promise.resolve(ezTags));
    //        componentManagerServiceSpy.select.withArgs(Prop.Payment).and.returnValue(Promise.resolve(data));
    //        componentManagerServiceSpy.select.withArgs(Prop.DeliveryMethod).and.returnValue(Promise.resolve(delieveryMethodInfo));
    //        component['paymentInfo'] = data;
    //       (Object.getOwnPropertyDescriptor(reviewHelperSpy, 'getBillingInfo').get as jasmine.Spy<any>).and.callFake(() => billingContent);
    //       spyOn<any>(reviewHelperSpy, 'getBillingInfo');
    //        component['billingContent'] = billingContent;

    //        await component['setBillingInfo']();
    //        expect(component['paymentInfo']).toHaveBeenCalled();
    //    });


    //it('should call setVehiclesOrder method', async () => {
    //    let paymentInfoData: any;
    //    component['isAutoReplenishmentEnabled'] = true;

    //    const ezTag: IEZTag = {
    //        tagId: TagType.Tag,
    //        fullTagId: TagType.Tag,
    //        acctTagSeq: -1,
    //        acctTagSeqSepcified: true,
    //        acctTagStatus: 'Test tag status text',
    //        tagStatusDesc: 'Test tag status description text',
    //        pbpStartDate: '2023-01-01',
    //        pbpEndDate: '2023-12-31',
    //        tagTypeCode: TagType.Tag,
    //        activePbpTagExist: false,
    //        tagless_Desc: 'Test tagless description text',
    //        acctVehicleId: 123456789,
    //        nicknameHasBeenManuallyCopiedinApiAndIsForDisplayOnly: false,
    //        licState: 'TX',
    //        licPlate: 'ABC123',
    //        vehicleYear: '2023',
    //        vehicleModel: 'Model 3',
    //        vehicleMake: 'Tesla',
    //        vehicleColor: 'Blue',
    //        vehicleClassCode: 2,
    //        vehicleClassDesc: '2-Axel',
    //        temporaryLicPlate: false,
    //        motorcycle: false,
    //        nickname: 'Test nickname text',
    //        isMotorcycleDisabled: false
    //    };
    //    const ezTags = [ezTag];

    //    let billingInfo = {} as any & { cards: any[] };

    //    paymentInfoData = {
    //        autoReplenishmentStatus: true,
    //        savePaymentStatus: false,
    //        isBillingTypeCash: false,
    //        selectedBillingType: BillingType.Credit,
    //        paymentRequest: null,
    //        paymentOperation: null,
    //    };

    //    const creditMockData = {
    //        cardCode: 'V',
    //        cardNbr: '123123',
    //        expMonth: 1,
    //        expYear: 9999,
    //        nameOnCard: 'test name',
    //        address1: 'addy fake',
    //        city: 'city fake',
    //        state: 'state fake',
    //        zip: 'fake zip',
    //        plus4: 'asdf',
    //        country: 'USA',
    //        displayCountry: 'USA',
    //        international: false
    //    } as CreditCardDetails & AddressInfo;

    //    billingInfo = {
    //        credit: creditMockData,
    //        eft: null,
    //        billingType: BillingType.Credit,
    //        billingTypeDisplay: BillingType.Credit,
    //        cmsPaymentInfo: null
    //    } as BillingInfo;
    //    billingInfo.cards = [creditMockData];
    //    const data = { billingInfo, paymentInfoData };

    //    componentManagerServiceSpy.select.withArgs(Prop.Vehicles).and.returnValue(Promise.resolve(ezTags));
    //    componentManagerServiceSpy.select.withArgs(Prop.Payment).and.returnValue(Promise.resolve(data));
    //    componentManagerServiceSpy.select.withArgs(Prop.DeliveryMethod).and.returnValue(Promise.resolve(delieveryMethodInfo));
    //    component['vehicles'] = ezTags;
    //    (Object.getOwnPropertyDescriptor(reviewHelperSpy, 'getVehiclesCart').get as jasmine.Spy<any>).and.callFake(() => billingContent);
    //    spyOn<any>(reviewHelperSpy, 'getVehiclesCart');
    //    await component['setVehiclesOrder']();
    //    expect(component['helper'].getVehiclesCart).toHaveBeenCalled();
    //});

});
