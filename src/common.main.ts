import { downgrade } from 'hybrid/module';

import { asyncScheduler, EMPTY, firstValueFrom } from 'rxjs';
import { catchError, delay, observeOn, take, retry } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { NgModuleRef } from '@angular/core';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { ConfigRouterService } from 'app/routerConfing/confing-router.service';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { HctraModuleService } from './app/services/hctra-module.service';
import { TransitionService, UrlService } from '@uirouter/core';
import { StateStackMemoryService } from 'common/services';
import { MaintenanceService, OperatingSystemSnifferService } from 'common/services';

export const commonDowngrades = (globalScope) => {

    downgrade('environmentConfig', { constant: globalScope.hctraEnvironmentConfiguration.webUiToggles });

    downgrade('releaseToggle', {
        constant: {
            r2p3_rtvIsActive: globalScope.hctraEnvironmentConfiguration.webUiToggles.RtvIsActive.toLowerCase()
        }
    });

    downgrade('perfToggle', {
        constant: {
            messagesToLogDictionary: globalScope.hctraEnvironmentConfiguration.webUiToggles.errorMessageLogging.messages
        }
    });

    downgrade('serverConstants', {
        constant: {
            ...globalScope.hctraEnvironmentConfiguration.environmentServerConstants,
            ...globalScope.hctraHashFileNames,
            ...globalScope.hctraWebUiConstants
        }
    });

    downgrade('sitecoreNameGuids', {
        constant: globalScope.hctraSiteCoreConfig.sitecoreNameGuids
    });

    downgrade('sitecoreApiParams', {
        constant: globalScope

            .hctraSiteCoreConfig.sitecoreApiParams
    });
};

export const xsrfInit = () => firstValueFrom(
    ajax.get('/api/xsrf')
        .pipe(
            observeOn(asyncScheduler), // Guarantee that the oberserver for this XSRF API call won't fire until next macroQueue tick which should allow Safari to update header values
            //retryWhen is about to be removed from rxjs, using retry:delay now
            retry({
                delay: (errors) =>
                    errors.pipe(
                        delay(500), // Delay 500 ms before next retry
                        take(10) // Retry 10 times before giving up
                    )
            }),
            catchError(() => EMPTY)) // Still load the website but there will be red toasters
);


type HctraAppModule = {
    isReady: () => Promise<void>;
};

export const platformInit = async <M extends HctraAppModule>(platformRef: NgModuleRef<M>) => {
    await platformRef.instance.isReady();
   
    const hctraModuleService: HctraModuleService = platformRef.injector.get(HctraModuleService);
    await hctraModuleService.init();


    start(platformRef);

    const authService: AuthenticationService = platformRef.injector.get(AuthenticationService);
    await authService.profile({}).then(() => authService);

    const environmentConfig = platformRef.injector.get(ENVIRON_CONFIG) as any;
    const configRouteService = platformRef.injector.get(ConfigRouterService);

    const useNewsRefresh = environmentConfig.useNewsRefresh ? true : false;
    configRouteService.setRouteState(useNewsRefresh);

};

const start = (platformRef) => {
    const operatingSystemifferService: OperatingSystemSnifferService = platformRef.injector.get(OperatingSystemSnifferService);
    const maintenanceService: MaintenanceService = platformRef.injector.get(MaintenanceService);

    operatingSystemifferService.getOS();
    maintenanceService.considerMaintenancePopup();

    onStartTransition(platformRef);

};

const onStartTransition = (platformRef) => {
    const transitionService: TransitionService = platformRef.injector.get(TransitionService);
    const stateStackMemoryService: StateStackMemoryService = platformRef.injector.get(StateStackMemoryService);

    const urlService: UrlService = platformRef.injector.get(UrlService);

    transitionService.onStart({}, async (transition) => {
        const stateSub = transition.to().name.substring(0, 10);
        if (stateSub === 'SectionalC' || stateSub === 'NonSection') {
            stateStackMemoryService.addStateToStackMemory(urlService.url, 'url');
        } else {
            stateStackMemoryService.addStateToStackMemory(transition.to().name, 'state');

        }

    });

};

export const kioskPlatformInit = async <M extends HctraAppModule>(platformRef: NgModuleRef<M>) => {
    await platformRef.instance.isReady();

    start(platformRef);

    const authService: AuthenticationService = platformRef.injector.get(AuthenticationService);
    await authService.profile({}).then(() => authService);

    const environmentConfig = platformRef.injector.get(ENVIRON_CONFIG) as any;
    const configRouteService = platformRef.injector.get(ConfigRouterService);

    const useNewsRefresh = environmentConfig.useNewsRefresh ? true : false;
    configRouteService.setRouteState(useNewsRefresh);
};
