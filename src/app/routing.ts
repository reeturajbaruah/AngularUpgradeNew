/* eslint-disable prefer-arrow/prefer-arrow-functions */

import { stateNames as cavveStateNames, urlPaths as cavveUrlPaths } from 'cavve/constants';
//routes for cavve do not need to be added to future as they are not part of hamburger or mega menu
import { stateNames as violationsStateNames, urlPaths as violationsUrlPaths } from 'violations/constants';
import { routes as violationsRoutes } from 'violations/routing';
import { routes as profileRoutes } from 'profile/routing';
import { stateNames as accountActivityStateNames, urlPaths as accountActivityUrlPaths } from 'accountActivity/constants';
import { routes as accountActivityRoutes } from 'accountActivity/routing';
import { stateNames as missedATollStateNames, urlPaths as missedATollUrlPaths } from 'missedatoll/constants';
import { routes as missedATollRoutes } from 'missedatoll/routing';
import { stateNames as paymentPlansStateNames, urlPaths as paymentPlansUrlPaths } from 'paymentplans/constants';
import { routes as paymentPlansRoutes } from 'paymentplans/routing';

import { stateNames as suspendedStateNames, urlPaths as suspendedUrlPaths } from 'suspendedAccountRefresh/constants';

//routes for suspendedAccount do not need to be added to future as they are not part of hamburger or mega menu
import { stateNames as aboutUsStateNames, urlPaths as aboutUsUrlPaths } from 'aboutus/constants';
import { routes as aboutUsRoutes } from 'aboutus/routing';
import { routes as loginRoutes } from 'login/routing';
import { routes as accountDashboardRoutes } from 'accountDashboard/routing';
import { stateNames as accountDashboardStateNames, urlPaths as accountDashboardUrlPaths } from 'accountDashboard/constants';

import { routes as makePaymentRoutes } from 'makePayment/routing';
import { stateNames as makePaymentStateNames, urlPaths as makePaymentUrlPaths } from 'makePayment/constants';

// import { routes as vehiclesRoutes } from 'vehicles/routing';
// import { stateNames as vehiclesStateNames, urlPaths as vehiclesUrlPaths } from 'vehicles/constants';

import { routes as forgotPasswordRoutes } from 'forgotPassword/routing';
import { stateNames as forgotPasswordStateNames, urlPaths as forgotPasswordUrlPaths } from 'forgotPassword/constants';
import { Ng2StateDeclaration, StatesModule, UIRouterModule, UIROUTER_MODULE_TOKEN, ModuleTypeCallback, loadNgModule } from '@uirouter/angular';

import { routes as firstTimeLoginRoutes } from 'firstTimeLogin/routing';
import { stateNames as firstTimeLoginStateNames, urlPaths as firstTimeLoginUrlPaths } from 'firstTimeLogin/constants';

import { routes as violationRoutes } from 'frp3/routing';
import { stateNames as violatorStateNames, urlPaths as violatorUrlPaths } from 'frp3/constants';
import { NewsRoutes, NewsStateNames } from 'news/news.constants';
import { NewsRoutesStateConfig as newsStates } from 'news/news.routing';

import { FutureLazyLoadRoutes, VehicleLazyLoadRoute } from 'vehicles/shared/lazy-load.routes';
import { LazyloadRoute as CreateAccountLazyLoadRoute, SignupRoute } from 'account/create';
import { SCBRoutes, SCBStateNames } from 'shipChannelBridge/constant';
import { ActivateRoutes, ActivateStateNames } from 'vehicles/eztag/activate/activate.constants';
import { LazyloadRoute as forgotUsernameLazyloadRoute } from 'forgotUsername/forgotUsername.lazyLoad';
import { mfaRoutes, mfaStateNames } from 'MFA/constant';
import { FaqLazyLoadRoute } from '../FAQs/lazy-load.route';
import { FaqStatesConfig } from '../FAQs/states-config';
import { HelpAndSupportLazyLoad, HelpAndSupportStatesConfig } from 'helpAndSupport';

const loginLazyRoutes = loginRoutes
    .map(x => ({
        name: x.name + '.**',
        url: x.url,
        loadChildren: () => import('login/module').then(mod => mod.LoginModule)
    }));

const profileLazyRoutes = profileRoutes
    .map(x => ({
        name: x.name + '.**',
        url: x.url,
        loadChildren: () => import('profile/module').then(mod => mod.ProfileModule)
    }));

export const lazyRoutes = [
    {
        name: aboutUsStateNames.KatyManagedLanes + '.**',
        url: aboutUsUrlPaths.KatyManagedLanes,
        loadChildren: () => import('aboutus/module').then(mod => mod.AboutUsModule)
    },
    {
        name: aboutUsStateNames.AllElectronicTolling + '.**',
        url: aboutUsUrlPaths.AllElectronicTolling,
        loadChildren: () => import('aboutus/module').then(mod => mod.AboutUsModule)
    },
    {
        name: aboutUsStateNames.HardySHP + '.**',
        url: aboutUsUrlPaths.HardySHP,
        loadChildren: () => import('aboutus/module').then(mod => mod.AboutUsModule)
    },
    {
        name: cavveStateNames.Future,
        url: cavveUrlPaths.Future,
        loadChildren: () => import('cavve/module').then(mod => mod.CAVVEModule)
    },
    {
        name: violationsStateNames.Future,
        url: violationsUrlPaths.Future,
        loadChildren: () => import('violations/module').then(mod => mod.ViolationsModule)
    },
    {
        name: accountActivityStateNames.Future,
        url: accountActivityUrlPaths.Future,
        loadChildren: () => import('accountActivity/module').then(mod => mod.AccountActivityModule)
    },
    {
        name: missedATollStateNames.Future,
        url: missedATollUrlPaths.Future,
        loadChildren: () => import('missedatoll/module').then(mod => mod.MissedATollModule)
    },
    {
        name: paymentPlansStateNames.Future,
        url: paymentPlansUrlPaths.Future,
        loadChildren: () => import('paymentplans/module').then(mod => mod.PaymentPlansModule)
    },
    {
        name: paymentPlansStateNames.AccountOverviewFuture,
        url: paymentPlansUrlPaths.AccountOverviewFuture,
        loadChildren: () => import('paymentplans/module').then(mod => mod.PaymentPlansModule)
    },
    {
        name: suspendedStateNames.Future,
        url: suspendedUrlPaths.Future,
        loadChildren: () => import('suspendedAccountRefresh/lazy.module').then(mod => mod.SuspendedLazyModule)
    },
    {
        name: accountDashboardStateNames.Future,
        url: accountDashboardUrlPaths.Future,
        loadChildren: () => import('accountDashboard/module').then(mod => mod.AccountDashboardModule)
    },
    {
        name: makePaymentStateNames.Future,
        url: makePaymentUrlPaths.Future,
        loadChildren: () => import('makePayment/module').then(mod => mod.MakePaymentModule)
    },
    ...FutureLazyLoadRoutes,
    {
        name: forgotPasswordStateNames.Future,
        url: forgotPasswordUrlPaths.Future,
        loadChildren: () => import('forgotPassword/module').then(mod => mod.ForgotPasswordModule)
    },
    {
        name: firstTimeLoginStateNames.Future,
        url: firstTimeLoginUrlPaths.Future,
        loadChildren: () => import('firstTimeLogin/module').then(mod => mod.FirstTimeLoginModule)
    },
    {
        name: violatorStateNames.Future,
        url: violatorUrlPaths.Future,
        loadChildren: () => import('frp3/module').then(mod => mod.Frp3ViolationsModule)
    },
    {
        name: NewsStateNames.NewsArticle.toString() + '.**',
        url: NewsStateNames.NewsArticle.toString(),
        loadChildren: () => import('news/news.module').then(mod => mod.NewsModule)
    },
    {
        name: NewsStateNames.Future.toString(),
        url: NewsRoutes.Future.toString(),
        loadChildren: () => import('news/news.module').then(mod => mod.NewsModule),
    },
    {
        name: mfaStateNames.Future,
        url: mfaRoutes.Future,
        loadChildren: () => import('MFA/multi-factor-authentication.module').then(mod => mod.MultiFactorAuthenticationModule),
    },
    ...profileLazyRoutes,
    ...loginLazyRoutes,
    { ...CreateAccountLazyLoadRoute },
    { ...forgotUsernameLazyloadRoute },
    { ...FaqLazyLoadRoute },
    { ...HelpAndSupportLazyLoad }

].map(x => ({ ...x, lazyLoad: loadNgModule(x.loadChildren as ModuleTypeCallback) }));

export const futureRoutes = [
    ...violationsRoutes,
    ...missedATollRoutes,
    ...paymentPlansRoutes,
    ...aboutUsRoutes,
    ...accountDashboardRoutes,
    ...profileRoutes,
    ...accountActivityRoutes,
    ...makePaymentRoutes,
    { ...VehicleLazyLoadRoute },
    ...forgotPasswordRoutes,
    ...firstTimeLoginRoutes,
    ...violationRoutes,
    ...newsStates,
    { ...SignupRoute },
    ...FaqStatesConfig,  //We need FaqStatesConfig for the below map method
    ...HelpAndSupportStatesConfig
].map(x => ({
    url: x.url,
    name: x.name,
    settings: x.settings,
    resolve: (x.resolve as any[] || []).filter(res => res.authorizedRoles),
    quickLink: x.quickLink
}));

export function DynamicRoutes(deps: any[], statesFactory: (...params) => Ng2StateDeclaration[]) {
    return {
        ngModule: UIRouterModule,
        providers: [
            {
                provide: UIROUTER_MODULE_TOKEN,
                deps,
                useFactory: (...args) => ({ states: statesFactory(...args) }),
                multi: true
            }
        ]
    };
}

