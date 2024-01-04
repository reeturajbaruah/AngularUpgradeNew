import { } from 'jasmine';
import { TestBed } from '@angular/core/testing';
import { StorefrontUtilityService, StoreLocations } from './storefrontUtility.service';
import { ENVIRON_CONFIG } from '../../common/upgrades';
import { WorkflowStateId } from './storefront.service';

describe('StorefrontUtilityService', () => {

    let storefrontUtilityService: StorefrontUtilityService;
    const environmentConfigMock = {
        storefrontConfigs: {
            StorefrontShortDelay: 20,
            DefaultMachineName: '-default'
        }
    };
    const windowMock = {
        navigator: {
            userAgent: ''
        }
    };

    describe('test method and properties', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    StorefrontUtilityService,
                    {
                        provide: ENVIRON_CONFIG,
                        useValue: environmentConfigMock
                    },
                    {
                        provide: Window,
                        useValue: windowMock
                    }
                ]
            });
            storefrontUtilityService = TestBed.inject(StorefrontUtilityService);
        });

        it('can create service', () => {
            expect(storefrontUtilityService).toBeDefined();
        });

        it('accountLoggedInWorkItemIds', () => {
            expect(storefrontUtilityService.accountLoggedInWorkItemIds).toEqual([
                WorkflowStateId.UBI,
                WorkflowStateId.UCI,
                WorkflowStateId.UAC,
                WorkflowStateId.URAMT,
                WorkflowStateId.ARTAG,
                WorkflowStateId.MKPAY
            ]);
        });

        it('delay', () => {
            expect(storefrontUtilityService.delay).toEqual({
                short: 20,
                medium: 80,
                long: 200
            });
        });

    });

    describe('Constructor', () => {
        it('isRunningAsKosk is undefined when userAgent is invalid', () => {
            windowMock.navigator.userAgent = '';
            storefrontUtilityService = new StorefrontUtilityService(windowMock as any, environmentConfigMock);
            expect(storefrontUtilityService.isRunningAsKiosk).toEqual(false);
        });

        it('isRunningAsKosk is undefined when userAgent is invalid', () => {
            windowMock.navigator.userAgent = 'Mozilla/5.0 (Windows NT 6.1; rv:11.0; Kioware 0.0.0.0; TNO) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36';
            storefrontUtilityService = new StorefrontUtilityService(windowMock as any, environmentConfigMock);
            expect(storefrontUtilityService.isRunningAsKiosk).toEqual(false);
        });

        it('isRunningAsKosk is initialized when userAgent is valid', () => {
            windowMock.navigator.userAgent = 'Mozilla/5.0 (Windows NT 6.1; rv:11.0; Kioware 0.0.0.0; HCTRA.Storefront TNO) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36';
            storefrontUtilityService = new StorefrontUtilityService(windowMock as any, environmentConfigMock);
            expect(storefrontUtilityService.isRunningAsKiosk).toEqual(true);
        });

        it('storefrontLocation is undefined when userAgent is invalid', () => {
            windowMock.navigator.userAgent = '';
            storefrontUtilityService = new StorefrontUtilityService(windowMock as any, environmentConfigMock);
            expect(storefrontUtilityService.storefrontLocation).toEqual(undefined);
        });

        it('storefrontLocation is undefined when userAgent is invalids', () => {
            windowMock.navigator.userAgent = 'Mozilla/5.0 (Windows NT 6.1; rv:11.0; Kioware 0.0.0.0; TNO) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36';
            storefrontUtilityService = new StorefrontUtilityService(windowMock as any, environmentConfigMock);
            expect(storefrontUtilityService.storefrontLocation).toEqual(undefined);
        });

        it('storefrontLocation is initialized when userAgent is valid', () => {
            windowMock.navigator.userAgent = 'Mozilla/5.0 (Windows NT 6.1; rv:11.0; Kioware 0.0.0.0; HCTRA.Storefront TNO) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36';
            storefrontUtilityService = new StorefrontUtilityService(windowMock as any, environmentConfigMock);
            expect(storefrontUtilityService.storefrontLocation).toEqual('TNO');
        });

        it('machineName is set to default value from environment config', () => {
            windowMock.navigator.userAgent = '';
            storefrontUtilityService = new StorefrontUtilityService(windowMock as any, environmentConfigMock);
            expect(storefrontUtilityService.machineName).toEqual('-default');
        });


        it('machineName is set to value in user agent', () => {
            windowMock.navigator.userAgent = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; HCTRA.Storefront TNO TestMachineName) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36';
            storefrontUtilityService = new StorefrontUtilityService(windowMock as any, environmentConfigMock);
            expect(storefrontUtilityService.machineName).toEqual('TestMachineName');
        });

        it('machineName is set to value from window KioApp', () => {
            storefrontUtilityService = new StorefrontUtilityService({
                navigator: {
                    userAgent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; HCTRA.Storefront TNO -kapi) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'
                },
                KioApp: {
                    DoUrlSubstitution: (arg) => arg === '$$KIO_COMPUTERNAME$$' && 'MachineName'
                }
            } as any, environmentConfigMock);
            expect(storefrontUtilityService.machineName).toEqual('MachineName');
        });


        it('machineName is set to value from window getKioProperty', () => {
            storefrontUtilityService = new StorefrontUtilityService({
                navigator: {
                    userAgent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; HCTRA.Storefront TNO -kapi) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'
                },
                external: {
                    getKioProperty: (arg) => arg === 'Kiosk' && 'MachineName'
                }
            } as any, environmentConfigMock);
            expect(storefrontUtilityService.machineName).toEqual('MachineName');
        });

        it('machineName is set to value from window getKioProperty', () => {
            storefrontUtilityService = new StorefrontUtilityService({
                navigator: {
                    userAgent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; HCTRA.Storefront TNO -kapi) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'
                },
                external: {
                    getKioProperty: (arg) => arg === 'Unit' && 'MachineName'
                }
            } as any, environmentConfigMock);
            expect(storefrontUtilityService.machineName).toEqual('MachineName');
        });

        it('machineName is set to value in user agent', () => {
            storefrontUtilityService = new StorefrontUtilityService({
                navigator: {
                    userAgent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; HCTRA.Storefront TNO -kapi) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'
                },
                external: {
                    getKioProperty: (arg) => arg === 'Test' && 'MachineName'
                }
            } as any, environmentConfigMock);
            expect(storefrontUtilityService.machineName).toEqual('-kapi');
        });
    });


});

