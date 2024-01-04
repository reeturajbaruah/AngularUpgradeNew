// module HCTRA.Service {
//     export interface IMobileMenuRouteService {
//         //getNavRoutes(): any[]
// 		getNavRoutes(): angular.IPromise<any[]>;
//     }
// }

// (() => {
//     'use strict';

//     class MobileMenuRouteService implements HCTRA.Service.IMobileMenuRouteService {
//         static $inject = ['routes', '$rootScope', '$state', 'AuthService', 'featureToggleResolver', 'USER_ROLES', "$q", 'paymentPlansRoutes', 'desktopMenuRouteService', 'futureRoutes'];

//         constructor(private routes: HCTRA.Constant.IRoutes, private $rootScope: angular.IRootScopeService | any, private $state, private AuthService, private featureToggleResolver, private USER_ROLES, private $q: angular.IQService, private paymentPlansRoutes, private desktopMenuRouteService, private futureRoutes) { }

//         isAuthorized = ({ config }): boolean => {
//             const authorizedRoles = this.desktopMenuRouteService.getAuthorizedRoles(config);

//             return this.AuthService.isAuthorized(authorizedRoles) || authorizedRoles.indexOf(this.USER_ROLES.anonymous) > -1;
// 		}



//         isResolved = (route): angular.IPromise<any> => {		

//             if (route.config.url === this.paymentPlansRoutes.accountOverviewSummary) {
//                 return this.$q.resolve<any>(angular.extend(route, { toggleResolved: this.$rootScope.currentUser.hasPaymentPlans }));
//             }

//             if (angular.isUndefined(route.config.data) || angular.isUndefined(route.config.data.toggle)) {
//                 return this.$q.resolve<any>(angular.extend(route, { toggleResolved: true }));
//             }	
            
//             return this.featureToggleResolver.isResolvedFeatureToggle(route.config.data.toggle)
//                 .then(res => angular.extend(route, { toggleResolved: res }));
            					
// 		}

//         getAuthorizedRoutes = (flatRoutes: any[]): any[] =>
// 			angular.copy(flatRoutes).filter(this.isAuthorized)

// 		getResolvedRoutes = (flatRoutes: any[]): angular.IPromise<[any, boolean]>[] =>
// 			angular.copy(flatRoutes).map(this.isResolved)

//         getHierarchicalRoutes = (theRouter: any[]): any[] => {

//             const routerCopy = angular.copy(theRouter.filter(x => x.config.settings));

//             //two separate forEach on same list to aid readability and simple code
//             angular.forEach(routerCopy, (currentRoute) => currentRoute.config.settings.children = []);

//             angular.forEach(routerCopy, (childRoute) => {

//                 const parent = (routerCopy as any).find((potentialParent) => potentialParent.name === childRoute.config.settings.parent);

//                 if (parent) {
//                     parent.config.settings.children.push(childRoute);
//                 }
//             });

//             return routerCopy;
//         }

//         compareNavOrder = (firstRoute, secondRoute) => firstRoute.config.settings.nav - secondRoute.config.settings.nav;

//         sortChildren = (routes) => {

//             const sortedRoutes = angular.copy(routes);

//             angular.forEach(sortedRoutes, (currentRoute) =>
//                 currentRoute.config.settings.children.sort(this.compareNavOrder));

//             return sortedRoutes;
//         }

//         mergeRoutes = (loadedRoutes, futureRoutes) => {

//             const missingFutureRoutes = futureRoutes.filter(route => !loadedRoutes.some(x => x.name === route.name));
//             return [...loadedRoutes, ...missingFutureRoutes];
//         }

// 		getNavRoutes = (): angular.IPromise<any[]> => {
// 			//let authorizedRoutes = this.getAuthorizedRoutes(this.router);
// 			//let hierarchicalRoutes = this.getHierarchicalRoutes(authorizedRoutes);
// 			//let withSortedChildren = this.sortChildren(hierarchicalRoutes);

// 			//return withSortedChildren
// 			//    .filter((currentRoute) => currentRoute.config.settings.navlevel === 0)
// 			//    .sort(this.compareNavOrder);

//             const mergedRoutes = this.mergeRoutes(this.$state.get(), this.futureRoutes.get());
//             const authorizedRoutes = this.getAuthorizedRoutes(mergedRoutes.map(state => ({ name: state.name, config: state })));

//             return this.$q.all<any>(this.getResolvedRoutes(authorizedRoutes))
//                 .then(routes =>
//                     routes
//                         .filter(x => angular.isDefined(x))
//                         .filter(x => x.toggleResolved))
//                 .then(this.getHierarchicalRoutes)
//                 .then(this.sortChildren)
//                 .then(routes =>
//                     routes
//                         .filter((currentRoute) => currentRoute.config.settings.navlevel === 0)
//                         .sort(this.compareNavOrder));
// 		}
//     }
//     angular.module('HCTRAModule').service('mobileMenuRouteService', MobileMenuRouteService);
// })();