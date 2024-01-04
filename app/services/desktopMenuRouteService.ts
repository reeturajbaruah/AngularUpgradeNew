﻿module HCTRA.Service {
    export interface IDesktopMenuRouteService {
        getMegaMenuNavRoutes(): void;
    }
}

module HCTRA.Service {
    export class DesktopMenuRouteService implements IDesktopMenuRouteService {
        static $inject = ['accountActivityRoutes', 'profileRoutes', '$rootScope', '$q', '$state', 'urlManagerService', 'MegaMenuCache', 'responseErrorService', 'AuthService', 'routes', 'isInvoicedService', 'USER_ROLES', 'paymentPlansRoutes', 'futureRoutes'];

        constructor(private accountActivityRoutes, private profileRoutes, private $rootScope: angular.IRootScopeService | any, private $q, private $state, private urlManagerService, private MegaMenuCache, private responseErrorService, private AuthService, private routes: HCTRA.Constant.IRoutes, private isInvoicedService, private USER_ROLES, private paymentPlansRoutes, private futureRoutes) {

        }

        //The following 6 methods are responsible for returning authorized routes

        authorizeRoute = (route): boolean =>
            this.AuthService.isAuthorized(route.authorizedRoles) || route.authorizedRoles.indexOf(this.USER_ROLES.anonymous) > -1

        isInvoicedAndLinkUpdateReplenishAmount = (linkUrl: string): boolean =>
            this.AuthService.isAuthenticated() && this.isInvoicedService.isAccountInvoiced() && linkUrl === this.profileRoutes.UpdateReplenishmentAmount

        notInvoicedAndLinkAccountActivityInvoices = (linkUrl: string): boolean =>
            this.AuthService.isAuthenticated() && !this.isInvoicedService.isAccountInvoiced() && linkUrl === this.accountActivityRoutes.accountActivityInvoices

        isAccountPaymentPlanUrlAndNoPaymentPlansAvailable = (linkUrl: string): boolean => {
            return this.AuthService.isAuthenticated() && linkUrl === this.paymentPlansRoutes.accountOverviewSummary && !this.$rootScope.currentUser.hasPaymentPlans;
        }

        isLinkAuthorized = (link): boolean =>
            this.authorizeRoute(link) && !this.isInvoicedAndLinkUpdateReplenishAmount(link.url) && !this.notInvoicedAndLinkAccountActivityInvoices(link.url) && !this.isAccountPaymentPlanUrlAndNoPaymentPlansAvailable(link.url)

        
        getAuthorizedMegaMenuHelper = (megaMenu: any[]): any[] => {

            //callback passed to filter is invoked with three arguments:
            //the value of the element
            //the index of the element
            //the Array object being traversed
            //we only use the first for this.authorizeRoute and this.isLinkAuthorized

            const authorizedMegaMenu = angular.copy(megaMenu.filter(this.authorizeRoute));

            angular.forEach(authorizedMegaMenu, (megaMenuItem) => {
                angular.forEach(megaMenuItem.menuColumns, (column) => {
                    angular.forEach(column.subMenus, (subMenu) => {

                        subMenu.links = subMenu.links.filter(this.isLinkAuthorized);
                    });

                    column.subMenus = column.subMenus.filter((subMenu) => subMenu.links.length > 0);
                });

                megaMenuItem.menuColumns = megaMenuItem.menuColumns.filter((column) => column.subMenus.length > 0);
            });

            return authorizedMegaMenu;
        }
    
        getAuthorizedMegaMenu = (routesIn: any[]): any[] => {
            if (!routesIn) {
                return routesIn;
            }

            return this.getAuthorizedMegaMenuHelper(routesIn);
        }

        //:category/:page /:size
        // Checkout

        // the following 4 methods add authorized roles to megaMenu
        getFullUrl = (name: string, statesWithNames: any[]): string => {

            const findUrl = (namePart: string) => ((statesWithNames as any).find((potentialMatch) => potentialMatch.name === namePart) || {}).url;

            const splitName = name.split('.');
            let fullName = '';
            let fullUrl = '';
            
            for (const part of splitName) {
                fullName += part;
                
                fullUrl += findUrl(fullName) || '';

                fullName += '.';
            }           
            
            return fullUrl;
        }

        getAuthorizedRoles = <T extends { data?: { authorizedRoles?: string[] }, resolve?: { authorizedRoles?: string[] }[] }>({ data, resolve }: T): string[] => {

            const angularAuthRoles = angular.isArray(resolve)
                && resolve
                    .map(x => x.authorizedRoles)
                    .find(authorizedRoles => angular.isArray(authorizedRoles));

            const angularjsAuthRoles = angular.isObject(data)
                && angular.isArray(data.authorizedRoles)
                && data.authorizedRoles;

            return angular.copy(angularAuthRoles || angularjsAuthRoles || []);
        }

        getFullUrlToAuthorizedRolesDictionary = (statesWithNames: any[]): {} =>
            statesWithNames
                .filter((currentState) => currentState.url)
                .map((currentState) => ({
                    fullUrl: this.getFullUrl(currentState.name, statesWithNames),
                    authorizedRoles: this.getAuthorizedRoles(currentState)
                }))
                .filter(urlRolesObject => urlRolesObject.authorizedRoles.length > 0)
                .map(({ fullUrl, authorizedRoles }) => ({
                    [fullUrl]: authorizedRoles
                }))
                .reduce((acc, curr) => angular.extend(acc, curr), {})
        
        getMegaMenuNavRoutesWithAuthorizedRoles = (megaMenuRoutes: any[], fullUrlToAuthorizedRolesDictionary, routes) => {

            const megaMenuRoutesCopy = angular.copy(megaMenuRoutes);

            angular.forEach(megaMenuRoutesCopy, (topLevelRoute) => {

                topLevelRoute.authorizedRoles = fullUrlToAuthorizedRolesDictionary[topLevelRoute.url] || [this.USER_ROLES.anonymous];

                angular.forEach(topLevelRoute.menuColumns, (currentMenuColumn) => {

                    angular.forEach(currentMenuColumn.subMenus, (currentSubMenu) => {

                        angular.forEach(currentSubMenu.links, (currentLink) => {

                            currentLink.target = currentLink.openNewTab ? routes.openTabTarget : routes.selfTarget;
                            currentLink.authorizedRoles = fullUrlToAuthorizedRolesDictionary[currentLink.url] || [this.USER_ROLES.anonymous];
                        });
                    });
                });
            });

            return megaMenuRoutesCopy;
        }
        
        getMegaMenu = (response): any[] => {
            
            this.responseErrorService.displayAlertsFromResponse(response);
            if (!response.errors) {
                return response.navBar;
            } else {
                return [];
            }
        }

        getMegaMenuNavRoutes = () => {

            const deferred = this.$q.defer();
            let cachedMegaMenu = this.MegaMenuCache.getCachedMegaMenu();

            if (cachedMegaMenu.length === 0) {
                this.urlManagerService.getMegaMenu().then((response) => {

                    const megaMenuFromUrlManagerService = this.getMegaMenu(response);
                    const fullUrlToAuthorizedRolesDictionary = this.getFullUrlToAuthorizedRolesDictionary([...this.$state.get(), ...this.futureRoutes.get()]);
                    const megaMenuNavRoutesWithAuthorizedRoles = this.getMegaMenuNavRoutesWithAuthorizedRoles(megaMenuFromUrlManagerService, fullUrlToAuthorizedRolesDictionary, this.routes);

                    cachedMegaMenu = this.MegaMenuCache.cacheMegaMenu(megaMenuNavRoutesWithAuthorizedRoles);

                    deferred.resolve(this.getAuthorizedMegaMenu(cachedMegaMenu));
                });
            } else {
                deferred.resolve(this.getAuthorizedMegaMenu(cachedMegaMenu));
            }

            return deferred.promise;
        }
    }
}

(() => {
    'use strict';

    angular.module('HCTRAModule').service('desktopMenuRouteService', HCTRA.Service.DesktopMenuRouteService);

})();