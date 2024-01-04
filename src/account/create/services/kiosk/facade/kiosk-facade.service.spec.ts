import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { KioskFacadeService } from './kiosk-facade.service';
import { BillingType } from 'common/models';
import { UrlPaths } from 'constants/routes.constants';
import { ENVIRON_CONFIG } from '../../../../../common/upgrades';
import { IKioskInfo } from '../../../models/kiosk-models';
import { KioskApiService } from '../api/kiosk-api.service';
import { StorefrontModalService } from 'storefront/services/modal.service';
import { StorefrontUtilityService } from 'storefront/services/storefrontUtility.service';

describe('Payment Facade Service', () => {

    let kioskFacadeService: KioskFacadeService;
    let kioskApiService: jasmine.SpyObj<KioskApiService>;
    let cmsItemId: jasmine.SpyObj<UrlPaths>;
    let environmentConfigMock: any;
    let storefrontUtilityService: any;
    let storefrontModalService: any;

    beforeEach(() => {
        kioskApiService = jasmine.createSpyObj('kioskApiService', ['getKioskStoreConfig']);
        storefrontModalService = jasmine.createSpyObj('StorefrontModalService', ['genericPostSignup']);

        environmentConfigMock = {
            storefrontConfigs: {
                DefaultMachineName: 'testmachine',
                version: '1.0.0'
            }
        };

        storefrontUtilityService = {
            isRunningAsKiosk: false,
            machineName: 'testmachine'
        };

        cmsItemId = {
            storefrontThankYouNewCashAccountEzTagModal: 'cashTestEzTag',
            storefrontThankYouNewCashAccountNoEzTagModal: 'cashTestNoEzTag',
            storefrontThankYouNewAccountModal: 'TestEzTag',
            storefrontThankYouNewAccountNoEzTagModal: 'TestNoEzTag'
        } as UrlPaths;

        TestBed.configureTestingModule({
            providers: [
                KioskFacadeService,
                { provide: KioskApiService, useValue: kioskApiService },
                { provide: ENVIRON_CONFIG, useValue: environmentConfigMock },
                { provide: StorefrontUtilityService, useFactory: () => storefrontUtilityService },
                { provide: StorefrontModalService, useFactory: () => storefrontModalService },
                { provide: UrlPaths, useFactory: () => cmsItemId }
            ]
        });

        kioskFacadeService = TestBed.inject(KioskFacadeService, storefrontModalService,storefrontUtilityService,);
    });

    it('should call getKioskStoreConfig and return expected response', async () => {

        const mockResponse: IKioskInfo = {
            isKiosk: true,
            flexpayEnabled: true,
            showCashOption: true,
            ezTagOption: false,
            isMailingAddressOptional: true,
            isAutoReplenishmentEnabled: true
        };
    
        kioskApiService.getKioskStoreConfig.and.resolveTo(mockResponse);
    
        spyOn(kioskFacadeService, 'getKioskStoreConfig').and.callThrough();
    
        const result = await kioskFacadeService.getKioskStoreConfig();
    
        const expectedResponse = {
            isKiosk: true,
            flexpayEnabled: mockResponse.flexpayEnabled,
            showCashOption: mockResponse.showCashOption,
            ezTagOption: mockResponse.ezTagOption,
            isMailingAddressOptional: mockResponse.isMailingAddressOptional,
            isAutoReplenishmentEnabled: mockResponse.isAutoReplenishmentEnabled
        };
        
        expect(kioskApiService.getKioskStoreConfig).toHaveBeenCalledWith(storefrontUtilityService.machineName);
        expect(result).toEqual(expectedResponse);
    });

    it('should call genericPostSignup with storefrontThankYouNewCashAccountEzTagModal', async () => {

        storefrontModalService.genericPostSignup.and.resolveTo('test');

        await kioskFacadeService.proceedOnAcctComplete(BillingType.Cash, true);

        expect(storefrontModalService.genericPostSignup).toHaveBeenCalledWith(cmsItemId.storefrontThankYouNewCashAccountEzTagModal);
    });

    it('should call genericPostSignup with storefrontThankYouNewCashAccountNoEzTagModal', async () => {

        storefrontModalService.genericPostSignup.and.resolveTo('test');

        await kioskFacadeService.proceedOnAcctComplete(BillingType.Cash, false);

        expect(storefrontModalService.genericPostSignup).toHaveBeenCalledWith(cmsItemId.storefrontThankYouNewCashAccountNoEzTagModal);
    });
    
    it('should call genericPostSignup with storefrontThankYouNewAccountModal', async () => {

        storefrontModalService.genericPostSignup.and.resolveTo('test');

        await kioskFacadeService.proceedOnAcctComplete(BillingType.Credit, true);

        expect(storefrontModalService.genericPostSignup).toHaveBeenCalledWith(cmsItemId.storefrontThankYouNewAccountModal);
    });

    it('should call genericPostSignup with storefrontThankYouNewAccountNoEzTagModal', async () => {

        storefrontModalService.genericPostSignup.and.resolveTo('test');

        await kioskFacadeService.proceedOnAcctComplete(BillingType.Credit, false);

        expect(storefrontModalService.genericPostSignup).toHaveBeenCalledWith(cmsItemId.storefrontThankYouNewAccountNoEzTagModal);
    });
    
    it('should call genericPostSignup with storefrontThankYouNewAccountModal', async () => {

        storefrontModalService.genericPostSignup.and.resolveTo('test');

        await kioskFacadeService.proceedOnAcctComplete(BillingType.Eft, true);

        expect(storefrontModalService.genericPostSignup).toHaveBeenCalledWith(cmsItemId.storefrontThankYouNewAccountModal);
    });

    it('should call genericPostSignup with storefrontThankYouNewAccountNoEzTagModal', async () => {

        storefrontModalService.genericPostSignup.and.resolveTo('test');

        await kioskFacadeService.proceedOnAcctComplete(BillingType.Eft, false);

        expect(storefrontModalService.genericPostSignup).toHaveBeenCalledWith(cmsItemId.storefrontThankYouNewAccountNoEzTagModal);
    });
});
