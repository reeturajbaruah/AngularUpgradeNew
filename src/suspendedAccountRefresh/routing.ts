import { StateConfig } from 'common/interfaces';

import {
    StateGuard, AuthResolve, CmsResolve,
    UsStatesResolver,
    CountryResolver, MaintenanceResolve
} from 'common/resolvers';

import {
    stateNames, cmsIds, urlPaths, SuspendedAccountCurrentStepKey
} from './constants';

import {
    userRoles
} from 'constants/module';

import { stateNames as homeStates } from 'home/constants';
import { WebApiService } from './services/webapi.service';
import { SuspendedAccountService } from './services/suspendedAccount.service';

import { stateNames as dashBoardStates } from 'accountDashboard/constants';
import { Transition } from '@uirouter/core';

export const stateGuard = StateGuard(SuspendedAccountCurrentStepKey, homeStates.Frame);

const HasViolationsResolve = (token: string) => ({
    token,
    deps: [WebApiService],
    resolveFn: async (suspendedAccountWebApiService: WebApiService) => {

            const status = await suspendedAccountWebApiService.getSuspendedAccountStatus();

        return status.violationFlag;
    }
});

const paymentInfoGuard = {
    token: 'paymentInfoGuard',
    deps: [Transition, SuspendedAccountService, WebApiService],
    resolveFn: async (transition: Transition, suspenedAccountService: SuspendedAccountService, suspendedAccountWebApiService: WebApiService) => {
        if (!suspenedAccountService.paymentInfo) {
            const status = await suspendedAccountWebApiService.getSuspendedAccountStatus();
            const state = status.violationFlag
                ? stateNames.ViolationsLanding
                : stateNames.RequiredPayment;
            return transition.router.stateService.go(state);
        }
    }
};

export const routes: StateConfig[] = [
    {
        name: stateNames.Root,
        abstract: true,
        resolve: [
            MaintenanceResolve(),
            CmsResolve('baseCmsContent', { ItemId: cmsIds.Root }),
            HasViolationsResolve('hasViolations')
        ],
        data: {
            title: 'Suspended Account'
        }
    },

    {
        name: stateNames.Landing,
        url: urlPaths.Landing,
        title: 'Suspended Without Violations',
        resolve: [
            AuthResolve(userRoles.suspended),
            CmsResolve('cmsContentWithoutViolations', { ItemId: cmsIds.suspendedAccountWithoutViolationsCms })
        ],
        wizard: {
            isEndState: (positiveBalance: boolean) => positiveBalance,
        
            nextState: stateNames.RequiredPayment
        }
    },

    {
        name: stateNames.RequiredPayment,
        url: urlPaths.RequiredPayment,
        title: 'Suspended Account Required Payment',
        resolve: [
            AuthResolve(userRoles.suspended),
            CmsResolve('cmsContentReqPayment', { ItemId: cmsIds.RequiredPayment })
        ],
        wizard: {
            cancelState: stateNames.Landing,
            nextState: stateNames.Payment
        }
    },

    {
        name: stateNames.ViolationsLanding,
        url: urlPaths.ViolationsLanding,
        title: 'Suspended With Violations',
        resolve: [
            AuthResolve(userRoles.suspended),            
            CmsResolve('cmsContent', { ItemId: cmsIds.ViolationsLanding })
        ],
        wizard: {
            nextState: stateNames.Payment
        }
    },

    {
        name: stateNames.Payment,
        url: urlPaths.Payment,
        title: 'Suspended Account Payment',
        resolve: [
            paymentInfoGuard,
            AuthResolve(userRoles.suspended),
            CmsResolve('cmsContent', { mergeParams: true, ItemId: cmsIds.MakePayment }),
            UsStatesResolver('stateList'),
            CountryResolver('countryList')
            //stateGuard()
        ],
        wizard: {
            cancelState: (hasViolations: boolean) => hasViolations 
                    ? stateNames.ViolationsLanding 
                    : stateNames.Landing,
        
            isEndState: false,
        
            prevState: (hasViolations: boolean) => hasViolations 
                    ? stateNames.ViolationsLanding 
                    : stateNames.RequiredPayment,
        
            nextState: stateNames.Confirm
        }
    },
    {
        name: stateNames.Confirm,
        url: urlPaths.Confirm,
        title: 'Suspended Account Confirm',
        resolve: [
            paymentInfoGuard,
            AuthResolve(userRoles.suspended),
            CmsResolve('cmsContent', { ItemId: cmsIds.Confirmation, mergeParams: true })
            // stateGuard({
            //     explicitlyForbidden: [stateNames.Receipt]
            // })
        ],
        wizard: {
            cancelState: (hasViolations: boolean) => 
                hasViolations 
                    ? stateNames.ViolationsLanding 
                    : stateNames.Landing,
        
            isEndState: false,
        
            prevState: stateNames.Payment,
        
            nextState: stateNames.Receipt
        }
    },
    {
        name: stateNames.Receipt,
        url: urlPaths.Receipt,
        title: 'Suspended Account Receipt',
        resolve: [
            paymentInfoGuard,
            AuthResolve(userRoles.suspended, userRoles.active),
            CmsResolve('cmsContent', { mergeParams: true, ItemId: cmsIds.Receipt })
            // stateGuard({
            //     explicitlyAllowed: [stateNames.Confirm],
            //     explicitlyForbidden: [accountDashboardStates.Frame]
            // })
        ],
        wizard: {
            nextState: dashBoardStates.Frame
        }
    }
];
