/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { NgModule, InjectionToken, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';

import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';

//updraded components

declare let angular: any;

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [],
    providers: []
})
export class HybridModule {
}

const downgrades: { registrationName: string; injectable: DowngradeInjectableInfo }[] = [];

interface DowngradeComponentInfo {
    component: any;
    downgradedModule?: string;
    propagateDigest?: boolean;
    inputs?: string[];
    outputs?: string[];
    selectors?: string[];
}

interface DowngradeInjectableInfo {
    component?: any;
    downgradedModule?: string;
    propagateDigest?: boolean;
    inputs?: string[];
    outputs?: string[];
    selectors?: string[];
    service?: any;
    pipe?: any;
    injectors?: string[];
    constant?: any;

    //addes a prefix to constant properties ( or service methods in the future)
    prefix?: string;

    custom?: (angular, module, registrationName: string) => void;
}

export function downgrade(registrationName: string, injectable: DowngradeInjectableInfo) {
    downgrades.push({ registrationName, injectable });
}

export function processDowngrades() {

    downgrades.forEach(({ registrationName, injectable }) => {
        
        const module = angular.module('HCTRAModule');
        if (injectable.component) {
            module.directive(registrationName, downgradeComponent(injectable as DowngradeComponentInfo));
        } else if (injectable.service) {
            module.factory(registrationName, downgradeInjectable(injectable.service));
        } else if (injectable.pipe) {
            const filterFactoryFunction = (...args) => new injectable.pipe(...args).transform;
            module.filter(registrationName, [...(injectable.injectors || []), filterFactoryFunction]);
        } else if (injectable.constant) {

            let constant = injectable.constant;
            if (injectable.prefix) {
                const prefixedConstant: any = {};
                for (const key in constant) {
                    if (constant.hasOwnProperty(key)) {
                        prefixedConstant[injectable.prefix + key] = constant[key];
                    }
                }
                constant = prefixedConstant;
            }

            module.constant(registrationName, constant);
        } else if (injectable.custom) {
            injectable.custom(angular, module, registrationName);
        } else {
            throw new Error('Configuration error: downgraded injectable not defined.');
        }

    });
    
}

export function generateProviderInjection(angularResource: string, factory?: (i: { get: (r: string) => any }) => any): { provider: Provider; token: InjectionToken<Record<string, unknown>> } {
    const token = new InjectionToken(angularResource);
    const useFactory = factory || ((i: any) => i.get(angularResource));

    const provider = {
            provide: token,
            useFactory,
            deps: ['$injector']
        } as Provider;

    return { provider, token };
}

export function createProvider(resource: string, useFactory: () => any): { provider: Provider; token: InjectionToken<Record<string, unknown>> } {

    const token = new InjectionToken(resource);
    return {
        provider: {
            provide: token,
            useFactory
        } as Provider,
        token
    };
}
