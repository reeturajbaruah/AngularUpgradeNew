// declare var hctraMocks: any;

// (() => {
//     'use strict';

//     describe('MobileMenuRouteService', () => {

//         beforeEach(angular.mock.module('HCTRAModule'));

//         beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

//             $provide.value('AuthService', hctraMocks.AuthService());
//         }));

//         let service;

//         describe('isAuthorized', () => {

//             const mockedAuthService = hctraMocks.AuthService();
// 			let authServiceSpy;			
//             let fakeRoute;

//             beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {
                				
// 				$provide.factory("$q", ["$window", function ($window) {
// 					return $window["Promise"];
// 				}]);
//                 $provide.value('AuthService', mockedAuthService);
//                 $provide.value('USER_ROLES', { anonymous: 'anonymous' });
// 				$provide.value('router', hctraMocks.router());	
// 				$provide.value('featureToggleResolver', jasmine.createSpyObj('featureToggleResolver', ['resolveFeatureToggle', 'isResolvedFeatureToggle']));				
//                 $provide.value('responseErrorService', hctraMocks.responseErrorService({
//                     value: ""
//                 }));
//                 $provide.value('MegaMenuCache', hctraMocks.megaMenuCache());
//                 $provide.value('$state', hctraMocks.$state({
//                     value: ""
//                 }));
//                 $provide.value('urlManagerService', hctraMocks.urlManagerService());
//                 $provide.value('futureRoutes', {});
//             }));

//             beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

// 				service = $injector.get('mobileMenuRouteService');

//                 authServiceSpy = spyOn(mockedAuthService, 'isAuthorized');
//                 fakeRoute = {
//                     config: {
// 						data: {
// 							authorizedRoles: []
// 						}
//                     }
//                 };
//             }));

//             it('should return true when AuthService.isAuthorized() returns true and passed array does not contain USER_ROLES', () => {

//                 authServiceSpy.and.returnValue(true);

//                 expect(service.isAuthorized(fakeRoute)).toBe(true);
//                 expect(authServiceSpy).toHaveBeenCalledWith([]);
//             });

//             it('should return true when AuthService.isAuthorized() returns false and passed array contains USER_ROLES', () => {

//                 authServiceSpy.and.returnValue(false);

//                 fakeRoute.config.data.authorizedRoles = ['anonymous'];

//                 expect(service.isAuthorized(fakeRoute)).toBe(true);
//                 expect(authServiceSpy).toHaveBeenCalledWith(['anonymous']);
//             });

//             it('should return true when AuthService.isAuthorized() returns true and passed array contains USER_ROLES', () => {

//                 authServiceSpy.and.returnValue(true);

//                 fakeRoute.config.data.authorizedRoles = ['anonymous'];

//                 expect(service.isAuthorized(fakeRoute)).toBe(true);
//                 expect(authServiceSpy).toHaveBeenCalledWith(['anonymous']);
//             });

//             it('should return false when AuthService.isAuthorized() returns false and passed array does not contain USER_ROLES', () => {

//                 authServiceSpy.and.returnValue(false);

//                 expect(service.isAuthorized(fakeRoute)).toBe(false);
//                 expect(authServiceSpy).toHaveBeenCalledWith([]);
//             });
//         });

//         describe('getHierarchicalRoutes', () => {

//             beforeEach(angular.mock.module(function ($provide) {
// 				$provide.factory("$q", ["$window", function ($window) {
// 					return $window["Promise"];
// 				}]);
//                 $provide.value('AuthService', hctraMocks.AuthService({
//                     isAuthenticated: false
//                 }));
//                 $provide.value('USER_ROLES', hctraMocks.USER_ROLES());
//                 $provide.value('router', hctraMocks.router());
//                 $provide.value('genericRepo', hctraMocks.genericRepo());
//                 $provide.value('responseErrorService', hctraMocks.responseErrorService({
//                     value: ""
//                 }));
//                 $provide.value('MegaMenuCache', hctraMocks.megaMenuCache());
//                 $provide.value('$state', hctraMocks.$state({
//                     value: ""
//                 }));
//                 $provide.value('urlManagerService', hctraMocks.urlManagerService());
//                 $provide.value('futureRoutes', {});
//             }));

//             let theRouter;

//             beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

//                 service = $injector.get('mobileMenuRouteService');


//                 const child1 = { name: 'child1', config: { settings: { parent: 'parent1' } } };
//                 const child2 = { name: 'child2', config: { settings: { parent: 'parent1' } } };
//                 const child3 = { name: 'child3', config: { settings: { parent: 'parent2' } } };
//                 const parent1 = { name: 'parent1', config: { settings: { parent: 'grandParent1' } } };
//                 const parent2 = { name: 'parent2', config: { settings: { parent: 'grandParent1' } } };
//                 const grandParent1 = { name: 'grandParent1', config: { settings: { navlevel: 0 } } };
//                 const grandParent2 = { name: 'grandParent2', config: { settings: { navlevel: 0 } } }
//                 theRouter = [
//                     child3, grandParent2, child1, parent2, grandParent1, child2, parent1
//                 ];
//             }));

//             it('should add children to routes with children', () => {

//                 const expectedChild1 = { name: 'child1', config: { settings: { parent: 'parent1', children: [] } } };
//                 const expectedChild2 = { name: 'child2', config: { settings: { parent: 'parent1', children: [] } } };
//                 const expectedChild3 = { name: 'child3', config: { settings: { parent: 'parent2', children: [] } } };
//                 const expectedParent1 = { name: 'parent1', config: { settings: { parent: 'grandParent1', children: [expectedChild1, expectedChild2] } } };
//                 const expectedParent2 = { name: 'parent2', config: { settings: { parent: 'grandParent1', children: [expectedChild3] } } };
//                 const expectedGrandParent1 = { name: 'grandParent1', config: { settings: { navlevel: 0, children: [expectedParent2, expectedParent1] } } };
//                 const expectedGrandParent2 = { name: 'grandParent2', config: { settings: { navlevel: 0, children: [] } } }

//                 expect(service.getHierarchicalRoutes(theRouter)).toEqual([expectedChild3, expectedGrandParent2, expectedChild1, expectedParent2, expectedGrandParent1, expectedChild2, expectedParent1]);
//             });
//         });

//         describe('sortChildren', () => {

//             beforeEach(angular.mock.module(function($provide) {

// 				$provide.factory("$q", ["$window", function ($window) {
// 					return $window["Promise"];
// 				}]);
//                 $provide.value('AuthService', hctraMocks.AuthService({
//                     isAuthenticated: false
//                 }));
//                 $provide.value('USER_ROLES', hctraMocks.USER_ROLES());
//                 $provide.value('router', hctraMocks.router());
//                 $provide.value('genericRepo', hctraMocks.genericRepo());
//                 $provide.value('responseErrorService', hctraMocks.responseErrorService({
//                     value: ""
//                 }));
//                 $provide.value('MegaMenuCache', hctraMocks.megaMenuCache());
//                 $provide.value('$state', hctraMocks.$state({
//                     value: ""
//                 }));
//                 $provide.value('urlManagerService', hctraMocks.urlManagerService());
//                 $provide.value('futureRoutes', {});
//             }));

//             let hierarchicalRoutes;
//             let child1; let child2; let child3;
//             let parent1; let parent2;
//             let grandParent1; let grandParent2;

//             beforeEach(() => {
//                 child1 = { config: { settings: { nav: 1, children: [] } } };
//                 child2 = { config: { settings: { nav: 2, children: [] } } };
//                 child3 = { config: { settings: { nav: 3, children: [] } } };
//                 parent1 = { config: { settings: { nav: 1, children: [child2, child3, child1] } } };
//                 parent2 = { config: { settings: { nav: 2, children: [] } } };
//                 grandParent1 = { config: { settings: { nav: 1, children: [parent2, parent1] } } };
//                 grandParent2 = { config: { settings: { nav: 2, children: [] } } }
//                 hierarchicalRoutes = [child1, child2, child3, parent1, parent2, grandParent2, grandParent1];
//             })

//             beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {
//                 service = $injector.get('mobileMenuRouteService');
//             }));

//             it('should sort children of routes in hierarchicalRoutes', () => {

//                 const expectedChild1 = { config: { settings: { nav: 1, children: [] } } };
//                 const expectedChild2 = { config: { settings: { nav: 2, children: [] } } };
//                 const expectedChild3 = { config: { settings: { nav: 3, children: [] } } };
//                 const expectedParent1 = { config: { settings: { nav: 1, children: [expectedChild1, expectedChild2, expectedChild3] } } };
//                 const expectedParent2 = { config: { settings: { nav: 2, children: [] } } };
//                 const expectedGrandParent1 = { config: { settings: { nav: 1, children: [expectedParent1, expectedParent2] } } };
//                 const expectedGrandParent2 = { config: { settings: { nav: 2, children: [] } } }

//                 expect(service.sortChildren(hierarchicalRoutes))
//                     .toEqual([expectedChild1, expectedChild2, expectedChild3, expectedParent1, expectedParent2, expectedGrandParent2, expectedGrandParent1]);
//             });
//         });

//         describe('mergeRoutes', () => {

//             beforeEach(angular.mock.module(function ($provide) {

//                 $provide.factory("$q", ["$window", function ($window) {
//                     return $window["Promise"];
//                 }]);
//                 $provide.value('AuthService', hctraMocks.AuthService({
//                     isAuthenticated: false
//                 }));
//                 $provide.value('USER_ROLES', hctraMocks.USER_ROLES());
//                 $provide.value('router', hctraMocks.router());
//                 $provide.value('genericRepo', hctraMocks.genericRepo());
//                 $provide.value('responseErrorService', hctraMocks.responseErrorService({
//                     value: ""
//                 }));
//                 $provide.value('MegaMenuCache', hctraMocks.megaMenuCache());
//                 $provide.value('$state', hctraMocks.$state({
//                     value: ""
//                 }));
//                 $provide.value('urlManagerService', hctraMocks.urlManagerService());
//                 $provide.value('futureRoutes', {});
//             }));

//             beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {
//                 service = $injector.get('mobileMenuRouteService');
//             }));

//             it('should return loadedRoutes and futureRoutes not present in loaded routes', () => {

//                 const result = service.mergeRoutes([{ name: 'fake1' }, { name: 'fake4' }], [{ name: 'fake2' }, { name: 'fake3' }, { name: 'fake4' }, { name: 'fake5' }]);

//                 expect(result).toEqual([{ name: 'fake1' }, { name: 'fake4' }, { name: 'fake2' }, { name: 'fake3' }, { name: 'fake5' }]);
//             });
//         });

//         describe('mobileMenuRouteService', function () {

//             let fakeState;
//             let fakeFutureRoutes;

//             beforeEach(angular.mock.module(function ($provide) {
                
// 				$provide.factory("$q", ["$window", function ($window) {
// 					return $window["Promise"];
// 				}]);
//                 $provide.value('AuthService', hctraMocks.AuthService({
//                     isAuthenticated: false
//                 }));
//                 $provide.value('USER_ROLES', hctraMocks.USER_ROLES());
//                 $provide.value('router', hctraMocks.router());
//                 $provide.value('genericRepo', hctraMocks.genericRepo());
//                 $provide.value('responseErrorService', hctraMocks.responseErrorService({
//                     value: ""
//                 }));
//                 $provide.value('MegaMenuCache', hctraMocks.megaMenuCache());
//                 $provide.value('$state', hctraMocks.$state({
//                     value: ""
//                 }));
//                 $provide.value('urlManagerService', hctraMocks.urlManagerService());
//                 fakeState = jasmine.createSpyObj('$state', ['get']);
//                 $provide.value('$state', fakeState);
//                 fakeFutureRoutes = jasmine.createSpyObj('futureRoutes', ['get']);
//                 $provide.value('futureRoutes', fakeFutureRoutes);
//             }));


//             beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

//                 service = $injector.get('mobileMenuRouteService');
//             }));

//             it('should match sort and hierarchy for hamburger menu', function () {

//                 fakeState.get.and.returnValue([
//                     {
//                         name: "Home",
//                         url: "home",
//                         templateUrl: "/app/templates/home/home.html",
//                         controller: "HomeController",
//                         settings: {
//                             navlevel: 0,
//                             children: [],
//                             nav: 1,
//                             content: "<img src='../Content/icons/menu/hm_home.png' alt='Click to go to home page'>   HOME"
//                         },
//                         data: { authorizedRoles: ["anonymous"] }, quickLink: {}

//                     }]);

//                 fakeFutureRoutes.get.and.returnValue([{
//                         name: "eZTagAccount",
//                         settings: {
//                             navlevel: 0,
//                             nav: 2,
//                             content: "<img src='../Content/icons/menu/hm_ez_tag_acct.png' alt='Click to see account options'>   EZ TAG ACCOUNT",
//                             children: []
//                         },
//                         data: { authorizedRoles: ["anonymous"] }
//                     }
//                 ]);

//                 const test = [
//                     {
//                         name: "Home",
//                         config: {
//                             name: "Home",
//                             url: "home",
//                             templateUrl: "/app/templates/home/home.html",
//                             controller: "HomeController",
//                             settings: {
//                                 navlevel: 0,
//                                 children: [],
//                                 nav: 1,
//                                 content: "<img src='../Content/icons/menu/hm_home.png' alt='Click to go to home page'>   HOME"
//                             },
//                             data: { authorizedRoles: ["anonymous"] }, quickLink: {}
//                         },
//                         toggleResolved: true
//                     }, {
//                         name: "eZTagAccount",
//                         config: {
//                             name: "eZTagAccount",
//                             settings: {
//                                 navlevel: 0,
//                                 nav: 2,
//                                 content: "<img src='../Content/icons/menu/hm_ez_tag_acct.png' alt='Click to see account options'>   EZ TAG ACCOUNT",
//                                 children: []
//                             },
//                             data: { authorizedRoles: ["anonymous"] }
//                         },
//                         toggleResolved: true
//                     }
//                 ];

//                 //var routeObject = service.getNavRoutes();
//                 //expect(routeObject).toEqual(test);
// 				return service
//                     .getNavRoutes()
//                     .then(r => expect(r).toEqual(test));				
//             });
//         });
//     });
// })();