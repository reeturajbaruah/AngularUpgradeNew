import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { StoreService } from '../../services/store/store.service';
import { FrameComponent } from '../frame/frame.component';
import { ComponentManagerService } from '../../services/manager/component-manager-service';
import { IToggles } from '../../models/toggles.models';
import { IWizardStateResolverService } from '../../../../common/interfaces';
import { PaymentMethodComponent, WizardComponent, WizardStateResolverFactory } from '../../../../common/ui';
import { PaymentInfoComponent } from './payment-info.component';
import { PaymentFacadeService } from '../../services/payment/facade/payment-facade.service';
import { NavigationService } from '../../services/navigation/navigation.service';
import { CurrentUserService } from '../../../../common/services';
import { CmsResolverService } from '../../../../cms/services';
import { AddressInfo, BillingInfo, BillingType, CreditCardDetails, IPaymentMethodDetails } from '../../../../common/models';
import { cloneDeep } from 'lodash';
import { IMailingInfo } from '../../../../cavve/interfaces';
import { States } from '../../states';

describe('payment-info component', () => {

    let fixture: ComponentFixture<PaymentInfoComponent>;
    let component: PaymentInfoComponent;
    let paymentFacadeServiceSpy: jasmine.SpyObj<PaymentFacadeService>;
    let stateServiceSpy: jasmine.SpyObj<StateService>;
    let storeServiceSpy: jasmine.SpyObj<StoreService>;
    let parent: jasmine.SpyObj<FrameComponent>;
    let componentManagerServiceSpy: jasmine.SpyObj<ComponentManagerService>;
    let wizardStateResolverFactory: jasmine.SpyObj<WizardStateResolverFactory>;
    let iWizardStateResolverServiceSpy: jasmine.SpyObj<IWizardStateResolverService>;
    let uiRouterGlobals: jasmine.SpyObj<UIRouterGlobals>;
    let navigation: jasmine.SpyObj<NavigationService>;
    let currentUserServiceSpy: jasmine.SpyObj<CurrentUserService>;
    let cmsResolverService: jasmine.SpyObj<CmsResolverService>;
    let wizardComponent: WizardComponent;

    const billingInfo = {
        credit: {} as CreditCardDetails & AddressInfo,
        eft: {},
        billingInfoExists: true,
        paymentMethodDetails: { showCashOption: true, enableCashOption: true } as IPaymentMethodDetails,
        autoReplenishmentStatus: false,
        savePaymentStatus: false
    } as BillingInfo;

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

    const toggles = {
        IsAutoReplenishmentEnabled: true,
        IsFlexPay: true, EzTagOption: true,
        IsMailingAddressOptional: true,
        ShowCashOption: true,
        SocialMediaCampaign: ''
    } as IToggles;

    beforeEach(async () => {

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
                'addorUpdatePaymentMethodandRebillAmountofEFT'
            ]
        );
        navigation = jasmine.createSpyObj('navigation', ['navigation', 'setOrder', 'skipStep', 'addStep']);
        currentUserServiceSpy = jasmine.createSpyObj('currentUserServiceSpy', ['updateMailingInfo', 'updateAutoReplenishmentStatus', 'getCurrentUser', 'makeSessionActive']);
        currentUserServiceSpy.getCurrentUser.and.returnValue({ acctId: 123 });
        cmsResolverService = jasmine.createSpyObj('cmsResolverService', ['resolve']);
        cmsResolverService.resolve.and.resolveTo({ ShortDescription: 'fakeDescription' });
        uiRouterGlobals = jasmine.createSpyObj('UIRouterGlobals', [], { current: { name: '' } });
        storeServiceSpy = jasmine.createSpyObj('store', ['select', 'dispatch']);
        parent = jasmine.createSpyObj('parent', ['campaignInit', 'nextButtonText', 'skipDeliveryStep', 'cancel']);
        stateServiceSpy = jasmine.createSpyObj('state', ['go']);
        wizardComponent = jasmine.createSpyObj('wizardComponent', ['']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    PaymentInfoComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: WizardStateResolverFactory, useFactory: () => wizardStateResolverFactory },
                    { provide: WizardComponent, useFactory: () => wizardComponent },
                    { provide: ComponentManagerService, useFactory: () => componentManagerServiceSpy },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: PaymentFacadeService, useFactory: () => paymentFacadeServiceSpy },
                    { provide: StateService, useFactory: () => stateServiceSpy },
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: NavigationService, useFactory: () => navigation },
                    { provide: StoreService, useFactory: () => storeServiceSpy },
                    { provide: CurrentUserService, useFactory: () => currentUserServiceSpy },
                    { provide: CmsResolverService, useFactory: () => cmsResolverService },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(PaymentInfoComponent);
        component = fixture.debugElement.componentInstance;
        component.managerBillingInfo = cloneDeep(billingInfo);
        component.toggles = cloneDeep(toggles);
        const childComponent = jasmine.createSpyObj('paymentMethodComponent', ['submit']);
        childComponent.submit.and.resolveTo(Promise.resolve(true));
        component.paymentMethod = childComponent;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('intialize payment-info component', () => {
        it('initialized the component', async () => {
            const response = { IsFlexPay: true, IsAutoReplenishmentEnabled: true } as IToggles;
            component.managerBillingInfo.billingType = BillingType.Cash;
            component.managerBillingInfo.billingTypeDisplay = BillingType.Cash;
            const payment = { billingInfo: component.managerBillingInfo } as any;
            componentManagerServiceSpy.getToggles.and.resolveTo(response);
            componentManagerServiceSpy.select.and.resolveTo(payment);
            paymentFacadeServiceSpy.getMailingInfo.and.resolveTo({} as IMailingInfo);
            await component.ngOnInit();
            expect(component).toBeDefined();
            expect(paymentFacadeServiceSpy.getMailingInfo).toHaveBeenCalledTimes(1);
            expect(parent.skipDeliveryStep).toHaveBeenCalledTimes(1);
            expect(parent.nextButtonText).toHaveBeenCalledTimes(1);
            expect(navigation.navigation).toHaveBeenCalledTimes(1);
        });
    });

    describe('submit with cash - payment info component', () => {
        it('should call submit with cash', async () => {
            const payment = { billingInfo } as any;
            component.isAutoReplenishmentEnabled = true;
            payment.billingInfo.billingType = BillingType.Cash;
            payment.billingInfo.billingTypeDisplay = BillingType.Cash;
            component.billingInfo = payment.billingInfo;
            spyOn<any>(component, 'getBillingAddress');
            spyOn<any>(component, 'setInternationalAdd');
            component.paymentOperation = 'ADD';
            component.navigationLinks = { prev: 'prev', next: 'next' };
            component['getAddorUpdatePaymentMethodandRebillAmountRequest'](component.billingInfo);
            await component.submit({} as any);
            expect(component['getBillingAddress']).toHaveBeenCalled();
            expect(component['setInternationalAdd']).toHaveBeenCalled();
            expect(currentUserServiceSpy.updateAutoReplenishmentStatus).toHaveBeenCalledTimes(1);
        });
    });

    describe('submit with eft - payment info component', () => {
        it('should call submit with eft (autoRepStatusChanged and savePaymentStatus are true)', async () => {
            const payment = { billingInfo: billingInfoForCreditorEFT } as any;
            component.isAutoReplenishmentEnabled = true;
            payment.billingInfo.billingType = BillingType.Eft;
            payment.billingInfo.billingTypeDisplay = BillingType.Eft;
            component.managerBillingInfo = payment.billingInfo;
            spyOn<any>(component, 'getBillingAddress');
            spyOn<any>(component, 'setInternationalAdd');
            component.paymentOperation = 'ADD';
            component.navigationLinks = { prev: 'prev', next: 'next' };
            component['getAddorUpdatePaymentMethodandRebillAmountRequest'](payment.billingInfo);
            paymentFacadeServiceSpy.addPaymentMethodandRebillAmountofEFT.and.resolveTo(true);
            currentUserServiceSpy.getCurrentUser.and.callFake(() => (
                { rebillOptIn: false } as any
            ));
            component.billingInfo = payment.billingInfo;
            component.billingInfo.savePaymentStatus = true;
            component.billingInfo.autoReplenishmentStatus = true;
            await component.submit({} as any);
            expect(component['getBillingAddress']).toHaveBeenCalled();
            expect(component['setInternationalAdd']).toHaveBeenCalled();
            expect(paymentFacadeServiceSpy.removeBillingMethod).toHaveBeenCalled();
            expect(paymentFacadeServiceSpy.addPaymentMethodandRebillAmountofEFT).toHaveBeenCalledTimes(1);
        });

        it('should call submit with eft (autoRepStatusChanged is false and savePaymentStatus is true)', async () => {
            const payment = { billingInfo: billingInfoForCreditorEFT } as any;
            component.isAutoReplenishmentEnabled = true;
            payment.billingInfo.billingType = BillingType.Eft;
            payment.billingInfo.billingTypeDisplay = BillingType.Eft;
            component.managerBillingInfo = payment.billingInfo;
            spyOn<any>(component, 'getBillingAddress');
            spyOn<any>(component, 'setInternationalAdd');
            component.paymentOperation = 'ADD';
            component.navigationLinks = { prev: 'prev', next: 'next' };
            component['getAddorUpdatePaymentMethodandRebillAmountRequest'](payment.billingInfo);
            paymentFacadeServiceSpy.addorUpdatePaymentMethodandRebillAmountofEFT.and.resolveTo(true);
            currentUserServiceSpy.getCurrentUser.and.callFake(() => (
                { rebillOptIn: true } as any
            ));
            component.billingInfo = payment.billingInfo;
            component.billingInfo.savePaymentStatus = true;
            component.billingInfo.autoReplenishmentStatus = true;
            await component.submit({} as any);
            expect(component['getBillingAddress']).toHaveBeenCalled();
            expect(component['setInternationalAdd']).toHaveBeenCalled();
            expect(paymentFacadeServiceSpy.addorUpdatePaymentMethodandRebillAmountofEFT).toHaveBeenCalledTimes(1);
        });

        it('should call submit with eft (autoRepStatusChanged is false and savePaymentStatus is false)', async () => {
            const payment = { billingInfo: billingInfoForCreditorEFT } as any;
            component.isAutoReplenishmentEnabled = true;
            payment.billingInfo.billingType = BillingType.Eft;
            payment.billingInfo.billingTypeDisplay = BillingType.Eft;
            component.managerBillingInfo = payment.billingInfo;
            component.billingInfo = payment.billingInfo;
            spyOn<any>(component, 'getBillingAddress');
            spyOn<any>(component, 'setInternationalAdd');
            component.paymentOperation = 'ADD';
            component.navigationLinks = { prev: 'prev', next: 'next' };
            component['getAddorUpdatePaymentMethodandRebillAmountRequest'](payment.billingInfo);
            paymentFacadeServiceSpy.addPaymentMethodandRebillAmountofEFT.and.resolveTo(true);
            currentUserServiceSpy.getCurrentUser.and.callFake(() => (
                 { rebillOptIn: true } as any
            ));
            component.billingInfo = payment.billingInfo;
            component.billingInfo.savePaymentStatus = false;
            component.billingInfo.autoReplenishmentStatus = true;
            await component.submit({} as any);
            expect(component['getBillingAddress']).toHaveBeenCalled();
            expect(component['setInternationalAdd']).toHaveBeenCalled();
            expect(storeServiceSpy.dispatch).toHaveBeenCalled();
        });
    });

    describe('submit with credit - payment info component', () => {
        it('should call submit with credit (autoRepStatusChanged and savePaymentStatus are true)', async () => {
            const payment = { billingInfo: billingInfoForCreditorEFT } as any;
            component.isAutoReplenishmentEnabled = true;
            payment.billingInfo.billingType = BillingType.Credit;
            payment.billingInfo.billingTypeDisplay = BillingType.Credit;
            component.managerBillingInfo = payment.billingInfo;
            spyOn<any>(component, 'getBillingAddress');
            spyOn<any>(component, 'setInternationalAdd');
            spyOn<any>(component, 'storeCreditCardData');
            component.paymentOperation = 'ADD';
            component.navigationLinks = { prev: 'prev', next: 'next' };
            component['getAddorUpdatePaymentMethodandRebillAmountRequest'](payment.billingInfo);
            currentUserServiceSpy.getCurrentUser.and.callFake(() => (
                { rebillOptIn: true } as any
            ));
            component.billingInfo = payment.billingInfo;
            component.billingInfo.savePaymentStatus = true;
            component.billingInfo.autoReplenishmentStatus = false;
            await component.submit({} as any);
            expect(component['getBillingAddress']).toHaveBeenCalled();
            expect(component['setInternationalAdd']).toHaveBeenCalled();
            expect(component['storeCreditCardData']).toHaveBeenCalled();
            expect(paymentFacadeServiceSpy.removeBillingMethod).toHaveBeenCalled();
            expect(paymentFacadeServiceSpy.addPaymentMethodandRebillAmountofCreditCard).toHaveBeenCalledTimes(1);
        });

        it('should call submit with credit (autoRepStatusChanged is false and savePaymentStatus is true)', async () => {
            const payment = { billingInfo: billingInfoForCreditorEFT } as any;
            component.isAutoReplenishmentEnabled = true;
            payment.billingInfo.billingType = BillingType.Credit;
            payment.billingInfo.billingTypeDisplay = BillingType.Credit;
            component.managerBillingInfo = payment.billingInfo;
            spyOn<any>(component, 'getBillingAddress');
            spyOn<any>(component, 'setInternationalAdd');
            spyOn<any>(component, 'storeCreditCardData');
            component.paymentOperation = 'ADD';
            component.navigationLinks = { prev: 'prev', next: 'next' };
            component['getAddorUpdatePaymentMethodandRebillAmountRequest'](payment.billingInfo);
            currentUserServiceSpy.getCurrentUser.and.callFake(() => (
                { rebillOptIn: true } as any
            ));
            component.billingInfo = payment.billingInfo;
            component.billingInfo.savePaymentStatus = true;
            component.billingInfo.autoReplenishmentStatus = true;
            await component.submit({} as any);
            expect(component['getBillingAddress']).toHaveBeenCalled();
            expect(component['setInternationalAdd']).toHaveBeenCalled();
            expect(component['storeCreditCardData']).toHaveBeenCalled();
            expect(paymentFacadeServiceSpy.addorUpdatePaymentMethodandRebillAmountofCreditCard).toHaveBeenCalledTimes(1);
        });

        it('should call submit with credit (autoRepStatusChanged is false and savePaymentStatus is false)', async () => {
            const payment = { billingInfo: billingInfoForCreditorEFT } as any;
            component.isAutoReplenishmentEnabled = true;
            payment.billingInfo.billingType = BillingType.Credit;
            payment.billingInfo.billingTypeDisplay = BillingType.Credit;
            component.managerBillingInfo = payment.billingInfo;
            spyOn<any>(component, 'getBillingAddress');
            spyOn<any>(component, 'setInternationalAdd');
            spyOn<any>(component, 'storeCreditCardData');
            component.paymentOperation = 'ADD';
            component.navigationLinks = { prev: 'prev', next: 'next' };
            component['getAddorUpdatePaymentMethodandRebillAmountRequest'](payment.billingInfo);
            currentUserServiceSpy.getCurrentUser.and.callFake(() => (
                 { rebillOptIn: false } as any
            ));
            component.billingInfo = payment.billingInfo;
            component.billingInfo.savePaymentStatus = false;
            component.billingInfo.autoReplenishmentStatus = false;
            await component.submit({} as any);
            expect(component['getBillingAddress']).toHaveBeenCalled();
            expect(component['setInternationalAdd']).toHaveBeenCalled();
            expect(component['storeCreditCardData']).toHaveBeenCalled();
            expect(storeServiceSpy.dispatch).toHaveBeenCalled();
        });
    });

    describe('cancel - payment info component', () => {
        it('should call cancel method of payment info component', async () => {
            //Just validating singnatures
            const state = { name: 'test' } as StateDeclaration;
            component.cancellationModal = {} as any;
            await component.cancel(state, wizardComponent);
            expect(parent.cancel).toHaveBeenCalledTimes(1);
        });
    });

    describe('previous - payment info component', () => {
        it('should call previous method of payment info component', async () => {
            //Just validating singnatures
            const state = { name: 'test' } as StateDeclaration;
            component.navigationLinks = { prev: 'prev', next: 'next' };
            await component.previous(state);
            expect(stateServiceSpy.go).toHaveBeenCalledTimes(1);
        });
    });
});
