import { TestBed } from '@angular/core/testing';
import { AccountService, WebStorageService } from 'common/services';
import { } from 'jasmine';
import { Subject } from 'rxjs';
import { AuthChannelService } from '../../../../authentication/authChannelService/authChannel.service';
import { AddressInfo, BillingInfo, BillingType, CreditCardDetails, DeliveryMethodType, IPaymentMethodDetails, TagType } from '../../../../common/models';
import { AuthEvents } from '../../../../constants/authEvents.constants';
import { IEZTag } from '../../../../shared/vehicle-info/models';
import { IPageEvent } from '../../models/campaign-models';
import { Prop } from '../../models/current-step.model';
import { IDeliveryMethodInfo } from '../../models/delivery-method.model';
import { IToggles } from '../../models/toggles.models';
import { CampaignService } from '../campaign';
import { StoreService } from '../store/store.service';
import { ToggleService } from '../Toggle/toggle.service';
import { ComponentManagerService } from './component-manager-service';
import { ManagerFacadeService } from './facade/manager-facade.service';

describe('Component Manager Service', () => {

    let componentManagerService: ComponentManagerService;
    let managerFacadeServiceSpy: jasmine.SpyObj<ManagerFacadeService>;
    let storeServiceSpy: jasmine.SpyObj<StoreService>;
    let accountServiceSpy: jasmine.SpyObj<AccountService>;
    let authChannelServiceSpy: jasmine.SpyObj<AuthChannelService>;
    let webStorageServiceSpy: jasmine.SpyObj<WebStorageService>;
    let campaignServiceSpy: jasmine.SpyObj<CampaignService>;
    let toggleServiceSpy: jasmine.SpyObj<ToggleService>;
    const authEvents = new AuthEvents();

    beforeEach(() => {

        managerFacadeServiceSpy = jasmine.createSpyObj('managerFacadeServiceSpy', ['getCurrentUser','getBillingInfo']);
        storeServiceSpy = jasmine.createSpyObj('storeServiceSpy', ['delete', 'store','select']);
        accountServiceSpy = jasmine.createSpyObj('accountServiceSpy', ['']);
        authChannelServiceSpy = jasmine.createSpyObj('authChannelServiceSpy', ['authEventStatuses[]']);
        authChannelServiceSpy.authEventStatuses = { [authEvents.logoutSuccess]: new Subject<boolean>() };
        webStorageServiceSpy = jasmine.createSpyObj('webStorageServiceSpy', ['removeEntry']);
        campaignServiceSpy = jasmine.createSpyObj('campaignServiceSpy', ['clear', 'checkCampaignEnable','campaign']);
        toggleServiceSpy = jasmine.createSpyObj('toggleServiceSpy', ['']);

        TestBed.configureTestingModule({
            providers: [
                ComponentManagerService,
                { provide: ManagerFacadeService, useFactory: () => managerFacadeServiceSpy },
                { provide: StoreService, useFactory: () => storeServiceSpy },
                { provide: AccountService, useFactory: () => accountServiceSpy },
                { provide: AuthChannelService, useValue: authChannelServiceSpy },
                { provide: WebStorageService, useFactory: () => webStorageServiceSpy },
                { provide: CampaignService, useFactory: () => campaignServiceSpy },
                { provide: ToggleService, useFactory: () => toggleServiceSpy }
            ]
        });

        componentManagerService = TestBed.inject(ComponentManagerService);

    });

    it('should call campaign method of ComponentManagerService', async () => {

        const event = {
            pageEvent: IPageEvent.OnInit,
            pageName: '',
            compeleteReg: false
        };

        authChannelServiceSpy.authEventStatuses[authEvents.logoutSuccess].next(true);
        authChannelServiceSpy.authEventStatuses[authEvents.logoutSuccess].next(true);
        campaignServiceSpy.checkCampaignEnable.and.returnValue(true);
        await componentManagerService.campaign(event);
        expect(campaignServiceSpy.campaign).toHaveBeenCalled();
    });

    it('should call isCampaignEnable method of ComponentManagerService with logoutSuccess as true', async () => {
        authChannelServiceSpy.authEventStatuses[authEvents.logoutSuccess].next(true);
        campaignServiceSpy.checkCampaignEnable.and.returnValue(true);
        const isCampaignEnabled = await componentManagerService.isCampaignEnable({} as IToggles, {} as any);
        expect(isCampaignEnabled).toBeTrue();
    });

    it('should call campaignClear method of ComponentManagerService', async () => {
        authChannelServiceSpy.authEventStatuses[authEvents.logoutSuccess].next(true);
        await componentManagerService.campaignClear();
        expect(campaignServiceSpy.clear).toHaveBeenCalled();
    });

    describe('select method - ComponentManagerService', () => {

        it('should call select method of ComponentManagerService with Vehicles', async () => {

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

            authChannelServiceSpy.authEventStatuses[authEvents.logoutSuccess].next(true);
            campaignServiceSpy.checkCampaignEnable.and.returnValue(true);
            storeServiceSpy.select.and.returnValue(ezTags as any);
            const response = await componentManagerService.select(Prop.Vehicles);
            expect(response[0].tagTypeCode).toEqual(TagType.Tag);
            expect(response[0].licState).toEqual(ezTag.licState);
            expect(response[0].licPlate).toEqual(ezTag.licPlate);
        });

        it('should call select method of ComponentManagerService with Payment', async () => {

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

           const  paymentInfoData = {
                autoReplenishmentStatus: true,
                savePaymentStatus: true,
                isBillingTypeCash: false,
                selectedBillingType: BillingType.Credit,
                paymentRequest: null,
                paymentOperation: null,
            } as any;

            const mockResponse = { billingInfoForCreditorEFT, paymentInfoData } as any;

            authChannelServiceSpy.authEventStatuses[authEvents.logoutSuccess].next(true);
            campaignServiceSpy.checkCampaignEnable.and.returnValue(true);
            managerFacadeServiceSpy.getBillingInfo.and.returnValue(mockResponse.billingInfoForCreditorEFT);
            storeServiceSpy.select.and.returnValue(mockResponse as any);
            const response = await componentManagerService.select(Prop.Payment);
            expect(response.billingInfo.credit.cardNbr).toEqual(billingInfoForCreditorEFT.credit.cardNbr);
            expect(response.paymentInfoData.selectedBillingType).toEqual(BillingType.Credit);
        });

        it('should call select method of ComponentManagerService with DeliveryMethod', async () => {
       
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
            } as AddressInfo;

            const delieveryMethodInfo = {
                selectedDeliveryMethod: DeliveryMethodType.Mail,
                addressInfo: addressInfoObj
            } as IDeliveryMethodInfo;
          
            authChannelServiceSpy.authEventStatuses[authEvents.logoutSuccess].next(true);
            campaignServiceSpy.checkCampaignEnable.and.returnValue(true);
            storeServiceSpy.select.and.returnValue(delieveryMethodInfo as IDeliveryMethodInfo);
            const response = await componentManagerService.select(Prop.DeliveryMethod);
            expect(response.selectedDeliveryMethod).toEqual(delieveryMethodInfo.selectedDeliveryMethod);
            expect(response.addressInfo.address1).toEqual(addressInfoObj.address1);
        });

        it('should call select method of ComponentManagerService with CreditCard', async () => {
        
            const creditCardData = {
                paypageRegistrationId: '2222'
            } as any;

            const mockResponse = { creditCardData } as any;

            authChannelServiceSpy.authEventStatuses[authEvents.logoutSuccess].next(true);
            campaignServiceSpy.checkCampaignEnable.and.returnValue(true);
            storeServiceSpy.select.and.returnValue(mockResponse as any);
            const response = await componentManagerService.select(Prop.CreditCard);
            expect(response.paypageRegistrationId).toEqual(creditCardData.paypageRegistrationId);
        });

    });
});
