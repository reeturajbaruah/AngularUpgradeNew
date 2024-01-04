import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceiptComponent } from './receipt.component';
import { AccountService, CurrentUserService } from '../../../../common/services';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { ComponentManagerService } from '../../services/manager/component-manager-service';
import { UserRoles } from '../../../../constants/userRoles.constants';
import { FrameComponent } from '../frame/frame.component';
import { KioskFacadeService } from '../../services/kiosk/facade/kiosk-facade.service';
import { WizardStateResolverFactory } from '../../../../common/ui';
import { IWizardStateResolverService } from '../../../../common/interfaces';
import { IToggles } from '../../models/toggles.models';
import { AddressInfo, BankAccountType, BillingInfo, BillingType, CreditCardDetails, DeliveryMethodType, IMailingInfo, TagType } from '../../../../common/models';
import { IDeliveryMethodInfo } from '../../models/delivery-method.model';
import { IRecieptInfoCmsData } from '../../models/receipt.models';
import { ITagsOrdered } from '../../../../shared/models/vehicles.models';
import { IEZTag } from '../../../../shared/vehicle-info';
import { Prop } from '../../models/current-step.model';
import { StorefrontUtilityService } from '../../../../storefront/services/storefrontUtility.service';

describe('receipt component', () => {

    let fixture: ComponentFixture<ReceiptComponent>;
    let component: ReceiptComponent;
    let currentUserServiceSpy: jasmine.SpyObj<CurrentUserService>;
    let componentManagerServiceSpy: jasmine.SpyObj<ComponentManagerService>;
    let stateService: jasmine.SpyObj<StateService>;
    let uiRouterGlobals: jasmine.SpyObj<UIRouterGlobals>;
    let userRoles: UserRoles;
    let parent: jasmine.SpyObj<FrameComponent>;
    let kioskFacadeServiceSpy: jasmine.SpyObj<KioskFacadeService>;
    let accountServiceSpy: jasmine.SpyObj<AccountService>;
    let wizardStateResolverFactory: jasmine.SpyObj<WizardStateResolverFactory>;
    let iWizardStateResolverServiceSpy: jasmine.SpyObj<IWizardStateResolverService>;
    let storefrontUtilityService: jasmine.SpyObj<any>;
    let paymentInfoData: any;


    beforeEach(async () => {

        iWizardStateResolverServiceSpy = jasmine.createSpyObj('fakeService', ['nextState', 'previousState', 'cancelState', 'getUiOrder']);
        wizardStateResolverFactory = jasmine.createSpyObj('fakeFactory', ['getService']);
        wizardStateResolverFactory.getService.and.returnValue(iWizardStateResolverServiceSpy);

        currentUserServiceSpy = jasmine.createSpyObj('currentUserServiceSpy', ['updateMailingInfo', 'getCurrentUser', 'makeSessionActive']);
        currentUserServiceSpy.getCurrentUser.and.returnValue({ acctId: 123 });

        componentManagerServiceSpy = jasmine.createSpyObj('componentManagerServiceSpy', ['select', 'getToggles', 'checkUserResumedCreateAcctFlow']);
        componentManagerServiceSpy.getToggles.and.resolveTo({ IsFlexPay: true } as IToggles);

        stateService = jasmine.createSpyObj('state', ['go']);
        uiRouterGlobals = jasmine.createSpyObj('UIRouterGlobals', [], { current: { name: '' } });
        storefrontUtilityService = jasmine.createSpyObj('storefrontUtilityService', [], { machineName: 'machineName' });
        parent = jasmine.createSpyObj('parent', ['campaignInit', 'nextButtonText', 'setTitle', 'setStepOnly']);
        kioskFacadeServiceSpy = jasmine.createSpyObj('kioskFacadeServiceSpy', ['', '']);

        accountServiceSpy = jasmine.createSpyObj('accountServiceSpy', ['getMailingInfo'], ['receiptInfoPage']);
        userRoles = new UserRoles();

        await TestBed
            .configureTestingModule({
                declarations: [
                    ReceiptComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: WizardStateResolverFactory, useFactory: () => wizardStateResolverFactory },
                    { provide: CurrentUserService, useFactory: () => currentUserServiceSpy },
                    { provide: ComponentManagerService, useFactory: () => componentManagerServiceSpy },
                    { provide: StateService, useFactory: () => stateService },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: StorefrontUtilityService, useFactory: () => storefrontUtilityService },
                    { provide: UserRoles, useFactory: () => userRoles },
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: KioskFacadeService, useFactory: () => kioskFacadeServiceSpy },
                    { provide: AccountService, useFactory: () => accountServiceSpy },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ReceiptComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('intialize receipt component', () => {

        const billingInfo = {
            credit: {
                country: 'USA',
                displayCountry: 'USA',
                international: false
            } as CreditCardDetails & AddressInfo,
            eft: {
                country: 'USA',
                displayCountry: 'USA',
                international: false,
                nameOnBankAccount: null,
            },
            billingType: null,
            cmsPaymentInfo: null
        } as BillingInfo;

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

        const mailingAddressInfo =
            {
                firstName: 'firstName',
                lastName: 'lastName',
                internationalAddress: false,
                address1: 'address1',
                address2: 'address2',
                city: 'city',
                state: 'state',
                zip: 'zip',
                plus4: 'plus4',
                country: 'USA'
            } as IMailingInfo;

        const receiptInfoPage = {
            vehicleInfoText: 'vehicleInfoText',
            receiptInfoPageTitle: 'receiptInfoPageTitle'
        } as IRecieptInfoCmsData;

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

        const tagsList = [{
            title: 'title1',
            ezTags,
            isPlate: false
        }];

        const tagsOrdered = {
            title: 'title',
            tags: tagsList
        } as ITagsOrdered;

        it('initialized the component', async () => {
            component.tagsOrdered = tagsOrdered;
            component.deliveryMethodInfo = delieveryMethodInfo;
            component.receiptInfoPage = receiptInfoPage;
            component.vehicles = ezTags;
            component.billingInfo = billingInfo;
            component.deliveryMethodInfoPage = {
                deliveryMethodMail: 'test mail',
                deliveryMethodPickUp: 'test pickup'
            } as any;
            componentManagerServiceSpy.select.withArgs(Prop.Vehicles).and.returnValue(Promise.resolve(ezTags));
            componentManagerServiceSpy.select.withArgs(Prop.Payment).and.returnValue(Promise.resolve(billingInfo));
            componentManagerServiceSpy.select.withArgs(Prop.DeliveryMethod).and.returnValue(Promise.resolve(delieveryMethodInfo));
            accountServiceSpy.getMailingInfo.and.returnValue(Promise.resolve(mailingAddressInfo));
            await component.ngOnInit();
            expect(component).toBeDefined();
            expect(componentManagerServiceSpy.select).toHaveBeenCalledTimes(3);
        });
    });

    describe('parseBillingInfo of receipt component', () => {

        it('should call parseBillingInfo method with EFT', async () => {

            const eftMockData = {
                accountType: BankAccountType.Personal,
                name: 'test name',
                routingNumber: '1111111111',
                accountNumber: '1234',
                address1: 'addy fake',
                address2: null,
                city: 'city fake',
                state: 'state fake',
                zip: 'fake zip',
                plus4: 'asdf',
                country: 'USA',
                displayCountry: 'USA',
                international: false
            };

            const billingInfo = {
                credit: null,
                eft: eftMockData,
                billingType: BillingType.Eft,
                billingTypeDisplay: BillingType.Eft,
                cmsPaymentInfo: null
            } as BillingInfo;

            paymentInfoData = {
                autoReplenishmentStatus: true,
                savePaymentStatus: false,
                isBillingTypeCash: false,
                paymentRequest: null,
                paymentOperation: null,
            };

            const data = { billingInfo, paymentInfoData };
            const response = await component.parseBillingInfo(data);
            expect(response.billingType).toEqual(BillingType.Eft);
            expect(response.autoReplenishmentStatus).toBeTrue();
        });

        it('should call parseBillingInfo method with Credit', async () => {

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

            paymentInfoData = {
                autoReplenishmentStatus: true,
                savePaymentStatus: false,
                isBillingTypeCash: false,
                selectedBillingType: BillingType.Eft,
                paymentRequest: null,
                paymentOperation: null,
            };

            let billingInfo = {} as any & { cards: any[] };
            billingInfo = {
                credit: creditMockData,
                eft: null,
                billingType: BillingType.Credit,
                billingTypeDisplay: BillingType.Credit,
                cmsPaymentInfo: null
            } as BillingInfo;
            billingInfo.cards = [creditMockData];

            const data = { billingInfo, paymentInfoData };
            const response = await component.parseBillingInfo(data);
            expect(response.billingType).toEqual(BillingType.Credit);
            expect(response.autoReplenishmentStatus).toBeTrue();
        });

        it('should call parseBillingInfo method with Cash', async () => {

            const billingInfo = {
                credit: null,
                eft: null,
                billingType: BillingType.Cash,
                billingTypeDisplay: BillingType.Cash,
                cmsPaymentInfo: null
            } as BillingInfo;

            const data = { billingInfo };
            const response = await component.parseBillingInfo(data);
            expect(response.billingType).toEqual(BillingType.Cash);
            expect(response.savePaymentStatus).toBeFalse();
        });
    });
});
