import { StateConfig } from 'common/interfaces';
import { AuthResolve, CmsResolve, StateGuard } from 'common/resolvers';
import { userRoles, webStorageConst } from 'constants/module';
import { ActivateCmsIds, ActivateRoutes, ActivateStateNames } from './activate.constants';
import { stateNames as homeStateNames } from 'home/constants';
import { stateNames as accountDashStateNames } from 'accountDashboard/constants';
import { stateNames as loginStateNames } from 'login/constants';
import { stateNames as rootStateNames } from 'constants/stateNames.constants';


export const stateGuardTag = StateGuard(webStorageConst.activateEzTag, rootStateNames.manageVehicles);

export const ActivateRoutesStateConfig: StateConfig[] = [
    {
        name: ActivateStateNames.Activate.toString(),
        url: ActivateRoutes.Activate.toString(),
        settings: {},
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('activateEzTag', { ItemId: ActivateCmsIds.ActivateEzTag }),
            CmsResolve('mountEZTag', { ItemId: ActivateCmsIds.MountEZTag }),
        ],
        wizard: {
            nextState: ActivateStateNames.Confirm.toString(),
            prevState: '',
            cancelState: rootStateNames.manageVehicles
        }
    },
    {
        name: ActivateStateNames.Confirm.toString(),
        url: ActivateRoutes.Confirm.toString(),
        settings: {},
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('pageCms', { ItemId: ActivateCmsIds.ActivateConfirm }),
            stateGuardTag({
                explicitlyForbidden: [ActivateStateNames.Completion]
            })
        ],
        wizard: {
            nextState: ActivateStateNames.Completion.toString(),
            prevState: ActivateStateNames.Activate.toString(),
            cancelState: rootStateNames.manageVehicles
        }
    },
    {
        name: ActivateStateNames.Completion.toString(),
        url: ActivateRoutes.Completion.toString(),
        settings: {},
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('pageCms', { ItemId: ActivateCmsIds.ActivateCompletion }),
            stateGuardTag({
                allowed: [ActivateStateNames.Confirm],
                explicitlyForbidden: [ accountDashStateNames.Frame, loginStateNames.Login, rootStateNames.manageVehicles]
            })
        ],
        wizard: {
            nextState: (input: any) => {
                let state: string;

                if (input.isKioskView) {
                    state = rootStateNames.manageVehicles;
                } else if (input.isAuthenticated) {
                    state = accountDashStateNames.Frame;
                } else {
                    state = loginStateNames.Login;
                }

                return state;
            },
            cancelState: (input: boolean) => {
                    const state = input ? rootStateNames.manageVehicles : homeStateNames.Frame;
                    return state;
            },
            isEndState: false
        }
    }
];


