/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { StateService, Transition } from '@uirouter/angular';
import { StateResolverService, StateResolverOptions, MaintenanceService, CurrentUserService } from 'common/services';
import { CmsResolveOptions, CmsResolverService } from 'cms/services';
import { SessionService } from 'common/services/session/session.service';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { UserRoles } from 'constants/userRoles.constants';
import { AddMissingInformationService } from 'authentication/addMissingInformationService/addMissingInformation.service';
import { stateNames as loginStateNames } from 'login/constants';
import { AuthenticateRedirectService } from 'authentication/authenticateRedirectService/authenticateRedirect.service';

import { StorefrontUtilityService } from 'storefront/services/storefrontUtility.service';
/**
 * #### Example:
 * ```js
 * const stateGuard = StateGuard('WEB_STORAGE_KEY', 'Home');
 *
 * export const routes: StateConfig[] = [    
 *  {
 *      name: 'TheDestinationState'
 *      url: '/Url',
 *      ...        
 *      resolve: [
 *          stateGuard({
 *              denyRefresh: false,
 *              allowed: ['allowedAlways']
 *              explicitlyAllowed: ['allowedSpecial'], //
 *              explicitlyForbidden: ['neverAllowed']
 *          })
 *      ],
 *      wizard: {
 *          prevState: 'PreviousState',
 *          nextState: 'NextState'
 *      }
 *  }];
 * ```
 * denyRefresh when true does not allow a state to be refreshed
 * 
 * navigating from states wizard.prevState, wizard.nextState or states present in allowed is permitted with no special requirements
 * (unless the state is also present in the explicitlyAllowed array)
 * 
 * navigating from a state present in explicitlyAllowed array requires option: { custom: { isExplicitlyAllowedTransition: true}}
 * state.go('allowedSpecial', { any or no params }, { custom: { isExplicitlyAllowedTransition: true}});
 * navigation from an explicitlyAllowed state is rejected if initiated using browser forward or back button
 *
 * navigating from a state present in explicitlyForbidden array is never allowed *  
 *
 * @param currentStepWebStorageKey The key used when storing current state to WebStorage
 *
 *    The current state is saved to WebStorage to allow navigation to current state upon refresh. 
 *
 * @param fallbackState This is the state the user will be redirected to if the destination state is not allowed
 */
export function StateGuard(currentStepWebStorageKey: string, fallbackState: string) {

    return (transisitionAllowedFrom?: StateResolverOptions) => ({

        token: 'stateGuard',
        deps: [Transition, StateResolverService],
        resolveFn: (transition: Transition, stateResolver: StateResolverService) => stateResolver.resolveState(
            transition,
            transisitionAllowedFrom,
            currentStepWebStorageKey,
            fallbackState)
    });
}

export function AuthResolve(...authorizedRoles: string[]) {
    return {
        authorizedRoles,
        token: 'authResolve',
        deps: [
            StateService, AuthenticationService, UserRoles, 
            AddMissingInformationService,AuthenticateRedirectService,
            StorefrontUtilityService,CurrentUserService
        ],
        resolveFn: (
            stateService: StateService, 
            authtenticationService: AuthenticationService, 
            userRoles: UserRoles, 
            addMissingInformationService: AddMissingInformationService,
            authenticationRedirectService: AuthenticateRedirectService,
            storefrontUtiltityService: StorefrontUtilityService
        ) => new Promise((resolve, reject) => {                
                if (authorizedRoles.indexOf(userRoles.anonymous) > -1 &&
                    !addMissingInformationService.missingInformationIsAnIssue() && 
                    addMissingInformationService.returnProfileCallHasOccured()) { 
                    //profileCallHasOccured needed to accurately check missinginformation
                    resolve('success');
                } else {
                    
                    if (authtenticationService.isAuthorized(authorizedRoles) || // need rest of if statement in order to verify that missing information is not an issue
                        (authorizedRoles.indexOf(userRoles.anonymous) > -1 && (!addMissingInformationService.missingInformationIsAnIssue()
                        || !authtenticationService.isAuthenticated()))
                    ) {
                        resolve('success');
                    } else {
                        if (!authtenticationService.isAuthenticated()) {
                            reject('notAuthenticated');
                        } else if (addMissingInformationService.missingInformationIsAnIssue()) {
                            const isKiosk = storefrontUtiltityService.isRunningAsKiosk;
                            const isFullSiteMode = storefrontUtiltityService.webStoreData
                                ? storefrontUtiltityService.webStoreData.fullSiteMode
                                : false;
                            //don't block kiosk from navigating away in kiosk mode
                            if (isKiosk && !isFullSiteMode) {
                                resolve('success');
                            } else {
                                addMissingInformationService.showBlockUserNavModal();
                                reject(userRoles.missingRequiredInformation);
                            } 

                        } else {
                            reject('notAuthorized');
                        }
                    }
                            
                }
            })
            .then(
                ()=> {
                //only enters this code if deferred.resolve is called
                },
                (res)=>{
    				if (res === 'notAuthenticated') {                        
                        authenticationRedirectService.saveToState();
                        return stateService.go(loginStateNames.Login);
    				} else if (res === userRoles.missingRequiredInformation) {
                        return stateService.go(loginStateNames.AddMissingInformation);
    				} else if (res === 'notAuthorized') {
    					// Handled automatically by ui-router.
    					// User will be sent back to last successfully loaded state.
    					// If a url was entered, the last successfully loaded state is "".
    					// This case is handled in the app.js callback $stateChangeError.
    				}
                }
            )
        
    };
}


export function MaintenanceResolve(...maintenanceFeaturePool) {
    return {
        token: 'maintenanceResolve',
        deps: [
            MaintenanceService, Transition
        ],
        resolveFn: async (
            maintenanceService: MaintenanceService, $transition$: Transition
            ) => {
            await maintenanceService.resolveMaintenanceStatus(maintenanceFeaturePool, $transition$.$from().name);
            return true;
        }
    };
}

export function FeatureToggleResolve(...inputs) {
    let token: string;
    let toggle: string;
    if (inputs.length === 1) {
        toggle = inputs[0];
    } else if (inputs.length === 2) {
        token = inputs[0];
        toggle = inputs[1];
    } else {
        throw new Error('FeatureToggleResolve config bad');
    }

    return {
        token: token || 'featureToggleResolve',
        deps: ['featureToggleResolver'],
        resolveFn: (featureToggleResolver) => token
            ? featureToggleResolver.isResolvedFeatureToggle(toggle)
            : featureToggleResolver.resolveFeatureToggle(toggle)
    };
}

export const UpdateBillingInformationResolve = {
    token: 'resolveUpdateBillingInformation',
    deps: ['manageBillingInformationResolver'],
    resolveFn: (manageBillingInformationResolver) => manageBillingInformationResolver.resolveUpdateBillingInformation()
};

export const ManagePaymentResolve = {
    token: 'resolveManagePayment',
    deps: ['manageBillingInformationResolver'],
    resolveFn: (manageBillingInformationResolver) => manageBillingInformationResolver.resolveManagePayment()
};

export const SuspendedRedirectResolve = {
    token: 'suspendedRedirect',
    deps: ['authResolve', 'USER_ROLES', 'suspendedAccountService', SessionService, StateService],
    resolveFn: (authResolveParam, USER_ROLES, suspendedAccountService, Session, state: StateService) => new Promise<void>((resolve, reject) => {
        if (Session.userRole === USER_ROLES.suspended) {
            suspendedAccountService
                .getFirstSuspendedAccountState()
                .then(state.go)
                .finally(() => reject());
        } else {
            resolve();
        }
    })
};

export function CmsResolve(token: string, options?: CmsResolveOptions) {
    
    return {
        token,
        deps: [CmsResolverService],
        resolveFn: (cmsResolverService: CmsResolverService) => cmsResolverService.resolve(options)
    };
}

export function BooleanResolve(token: string, flag: boolean) {
    return {
        token,
        deps: [],
        resolveFn: () => flag
    };
}
