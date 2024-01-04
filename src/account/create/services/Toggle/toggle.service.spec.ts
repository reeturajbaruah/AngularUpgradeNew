

import { TestBed } from '@angular/core/testing';
import { IKioskInfo } from 'account/create/models/kiosk-models';
import { CurrentUserService, ResponseErrorService } from 'common/services';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { } from 'jasmine';
import { StorefrontUtilityService } from '../../../../storefront/services/storefrontUtility.service';
import { KioskFacadeService } from '../kiosk/facade/kiosk-facade.service';
import { ToggleService } from './toggle.service';


describe('Create Account Toggle Service', () => {

    let toggleService: ToggleService;
    let currentUserServiceSpy: jasmine.SpyObj<CurrentUserService>;
    let kioskFacadeServiceSpy: jasmine.SpyObj<KioskFacadeService>;
    let responseErrorServiceSpy: jasmine.SpyObj<ResponseErrorService>;
    const environmentConfig: { [key: string]: boolean } = {};

    const sfUtility = {
        isRunningAsKiosk: false,
        webStoreData: {
            fullSiteMode: false
        }
    };

    beforeEach(() => {

        currentUserServiceSpy = jasmine.createSpyObj('currentUser', ['getCurrentUser']);
        kioskFacadeServiceSpy = jasmine.createSpyObj('kioskFacadeService', ['getKioskStoreConfig']);
        responseErrorServiceSpy = jasmine.createSpyObj('responseErrorService', ['isErrorFree']);


        TestBed.configureTestingModule({
            providers: [
                ToggleService,
                { provide: CurrentUserService, useFactory: () => currentUserServiceSpy },
                { provide: KioskFacadeService, useFactory: () => kioskFacadeServiceSpy },
                { provide: ResponseErrorService, useFactory: () => responseErrorServiceSpy },
                { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                { provide: StorefrontUtilityService, useValue: sfUtility }


            ]
        });

        toggleService = TestBed.inject(ToggleService);

    });


    it('checks if the new user account is created with flexpay flow', async () => {

        environmentConfig.flexpayWebEnabled = true;
        sfUtility.isRunningAsKiosk = false;

        currentUserServiceSpy.getCurrentUser.and.returnValue({
            isFlexPay: false,
            acctActivity: null
        });


        const toggles = await toggleService.getToggles();
        expect(toggles.IsFlexPay).toBeTrue();

    });


    it('checks if the new user account is created with eztag flow', async () => {
        environmentConfig.flexpayWebEnabled = false;
        sfUtility.isRunningAsKiosk = false;

        currentUserServiceSpy.getCurrentUser.and.returnValue({
            isFlexPay: false,
            acctActivity: null
        });

        const toggles = await toggleService.getToggles();
        expect(toggles.IsFlexPay).toBeFalse();
    });


    it('checks if the new user account is created on kiosk with flexpay flow', async () => {

        sfUtility.isRunningAsKiosk = true;
        kioskFacadeServiceSpy.getKioskStoreConfig.and.resolveTo({
            flexpayEnabled: true
        } as IKioskInfo);

        currentUserServiceSpy.getCurrentUser.and.returnValue({
            isFlexPay: false,
            acctActivity: null
        });


        const toggles = await toggleService.getToggles();
        expect(toggles.IsFlexPay).toBeTrue();
    });


    it('checks if the new user account is created on kiosk with eztag flow', async () => {

        sfUtility.isRunningAsKiosk = true;
        kioskFacadeServiceSpy.getKioskStoreConfig.and.resolveTo({
            flexpayEnabled: false
        } as IKioskInfo);

        currentUserServiceSpy.getCurrentUser.and.returnValue({
            isFlexPay: false,
            acctActivity: null
        });


        const toggles = await toggleService.getToggles();
        expect(toggles.IsFlexPay).toBeFalse();

    });

    it('checks that the pending flexpay user logs into Web and the server has flexpay toggles ON', async () => {
        sfUtility.isRunningAsKiosk = false;
        environmentConfig.flexpayWebEnabled = true;
        currentUserServiceSpy.getCurrentUser.and.returnValue({
            isFlexPay: true,
            acctActivity: 'P'
        });

        const toggles = await toggleService.getToggles();
        expect(toggles.IsFlexPay).toBeTrue();


    });

    it('checks that the pending flexpay user logs into Web and the server has flexpay toggles OFF', async () => {
        sfUtility.isRunningAsKiosk = false;
        environmentConfig.flexpayWebEnabled = false;
        currentUserServiceSpy.getCurrentUser.and.returnValue({
            isFlexPay: true,
            acctActivity: 'P'
        });

        const toggles = await toggleService.getToggles();
        expect(toggles.IsFlexPay).toBeTrue();

    });

    it('checks that the pending eztag user logs into Web and the server has flexpay toggles ON', async () => {
        sfUtility.isRunningAsKiosk = false;
        environmentConfig.flexpayWebEnabled = true;
        currentUserServiceSpy.getCurrentUser.and.returnValue({
            isFlexPay: false,
            acctActivity: 'P'
        });

        const toggles = await toggleService.getToggles();
        expect(toggles.IsFlexPay).toBeFalse();
    });

    it('checks that the pending eztag user logs into Web and the server has flexpay toggles OFF', async () => {
        sfUtility.isRunningAsKiosk = false;
        environmentConfig.flexpayWebEnabled = false;
        currentUserServiceSpy.getCurrentUser.and.returnValue({
            isFlexPay: false,
            acctActivity: 'P'
        });

        const toggles = await toggleService.getToggles();
        expect(toggles.IsFlexPay).toBeFalse();
    });


    it('checks that the pending flexpay user logs into kiosk and the server has flexpay toggles ON', async () => {
        sfUtility.isRunningAsKiosk = true;
        currentUserServiceSpy.getCurrentUser.and.returnValue({
            isFlexPay: true,
            acctActivity: 'P'
        });

        kioskFacadeServiceSpy.getKioskStoreConfig.and.resolveTo({
            flexpayEnabled: true
        } as IKioskInfo);

        const toggles = await toggleService.getToggles();
        expect(toggles.IsFlexPay).toBeTrue();


    });

    it('checks that the pending flexpay user logs into kiosk and the server has flexpay toggles OFF', async () => {
        sfUtility.isRunningAsKiosk = false;
        currentUserServiceSpy.getCurrentUser.and.returnValue({
            isFlexPay: true,
            acctActivity: 'P'
        });


        kioskFacadeServiceSpy.getKioskStoreConfig.and.resolveTo({
            flexpayEnabled: false
        } as IKioskInfo);

        const toggles = await toggleService.getToggles();
        expect(toggles.IsFlexPay).toBeTrue();

    });

    it('checks that the pending eztag user logs into kiosk and the server has flexpay toggles ON', async () => {
        sfUtility.isRunningAsKiosk = true;
        currentUserServiceSpy.getCurrentUser.and.returnValue({
            isFlexPay: false,
            acctActivity: 'P'
        });

        kioskFacadeServiceSpy.getKioskStoreConfig.and.resolveTo({
            flexpayEnabled: true
        } as IKioskInfo);

        const toggles = await toggleService.getToggles();
        expect(toggles.IsFlexPay).toBeFalse();


    });

    it('checks that the pending eztag user logs into kiosk and the server has flexpay toggles OFF', async () => {
        sfUtility.isRunningAsKiosk = true;
        currentUserServiceSpy.getCurrentUser.and.returnValue({
            isFlexPay: false,
            acctActivity: 'P'
        });


        kioskFacadeServiceSpy.getKioskStoreConfig.and.resolveTo({
            flexpayEnabled: false
        } as IKioskInfo);

        const toggles = await toggleService.getToggles();
        expect(toggles.IsFlexPay).toBeFalse();

    });

});
