import { } from 'jasmine';

import { WizardStateResolverFactory } from './wizardStateResolver.factory';
import { Injector } from '@angular/core';
import { DefaultWizardStateResolverService } from './defaultStateResolver.service';
import { WizardStateResolverService } from 'storefront/services/wizardStateResolver.service';

describe('WizardStateResolverFactory', () => {

    let factory: WizardStateResolverFactory;
    let injector: jasmine.SpyObj<Injector>;
    let storefrontUtilityService: any;
    let environmentConfig: any;

    beforeEach(() => {

        injector = jasmine.createSpyObj('injector', ['get']);

        storefrontUtilityService = {
            isRunningAsKiosk: false,
            webStoreData: {
                fullSiteMode: false
            }
        };

        environmentConfig = {
           storefrontConfigs: { version: '1.0.0' }
        };


        factory = new WizardStateResolverFactory(
            injector,
            storefrontUtilityService,
            environmentConfig
        );
    });

    describe('resolving wizard state service', () => {

        it('can create factory', () => {
            expect(factory).toBeDefined();
        });

        it('returns default resolver if storefront resolver is not active', () => {

            //arrange
            injector.get.and.callFake(t => t);
            //act
            const service = factory.getService();

            //assert
            expect(service as any).toBe(DefaultWizardStateResolverService);
        });

        it('returns default resolver if storefront resolver is not active', () => {

            //arrange
            storefrontUtilityService.isRunningAsKiosk = true;
            storefrontUtilityService.webStoreData.fullSiteMode = true;
            injector.get.and.callFake(t => t);
            //act
            const service = factory.getService();

            //assert
            expect(service as any).toBe(DefaultWizardStateResolverService);
        });

        it('returns storefront resolver if storefront resolver is active', () => {

            //arrange
            storefrontUtilityService.isRunningAsKiosk = true;

            injector.get.and.callFake(t => t);
            //act
            const service = factory.getService();

            //assert
            expect(typeof service).toEqual(typeof WizardStateResolverService);

        });
    });
});

