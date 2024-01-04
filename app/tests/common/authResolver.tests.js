(function () {
	'use strict';

	describe('AuthResolver', function () {

		beforeEach(angular.mock.module('HCTRAModule'));

		function unwatch(){}

		var service,
			USER_ROLES,
			addMissingInformationService,
			rootScope,
			$state,
			authObj = {
				isAuthenticated: true,
				isAuthorized: true
			};

		let storefrontUtilityService;
		let authenticateRedirectService;

		beforeEach(() => {
			storefrontUtilityService = {
				isRunningAsKiosk: false,
				webStoreData: null
			};
		});

		describe("returns promise", function () {
			beforeEach(angular.mock.module(function ($provide) {

				authenticateRedirectService = jasmine.createSpyObj('authRedirectService', ['saveToState']);

				rootScope = jasmine.createSpyObj('rootScope', ['$watch', '$apply', '$digest', '$on']);

				rootScope.$watch.and.callFake((prop, action)=>{
					action && action(rootScope[prop]);
					return unwatch;
				});
				USER_ROLES = hctraMocks.USER_ROLES();
				addMissingInformationService = hctraMocks.addMissingInformationService();
				$state = hctraMocks.$state({});
				$provide.value('$location', hctraMocks.$location(''));
				$provide.value('AuthService', hctraMocks.AuthService(authObj));
				$provide.value('USER_ROLES', USER_ROLES);
				$provide.value('$state', $state);
				$provide.value('stateNames', hctraMocks.stateNames());
				$provide.value('addMissingInformationService', addMissingInformationService);
				$provide.value('authenticateRedirectService', authenticateRedirectService);
				$provide.value('StorefrontUtilityService', storefrontUtilityService);
				$provide.value('$rootScope', rootScope);
				$provide.factory('$q', ['replacementQService', (replacementQService) =>replacementQService]);
			}));

			beforeEach(angular.mock.inject(function ($injector) {
				service = $injector.get('AuthResolver');
			}));

			it('should resolve as successful', function () {
				var authRoles = [USER_ROLES.anonymous];
				addMissingInformationService.setMissingInformation(false, false, false);
				addMissingInformationService.setProfileCallHasOccured(true);
				//var result;

				return service.resolve(authRoles).then(function (data) {
				    //result = data;
				    expect(data).toBe('success');
				});

				//rootScope.$apply();
				
			});

			// it('should resolve as successful when role is active', async function () {
			// 	var authRoles = [USER_ROLES.active];
			// 	addMissingInformationService.setMissingInformation(false, false, false);
			// 	//var result;

			// 	rootScope.currentUser = {};
			// 	rootScope.currentUser.acctActivity = "A";

			// 	const data = await service.resolve(authRoles);//.then(function (data) {
			// 	    //result = data;
			// 	    expect(data).toBe('success');
			// 	//});
			// 	// rootScope.currentUser = {};
			// 	// rootScope.currentUser.acctActivity = "A";
			// 	//rootScope.$apply();
			// 	//rootScope.$digest();				
			// });

			it('should resolve as successful when role anonymous', function () {
				var authRoles = [USER_ROLES.anonymous];
				authObj.isAuthenticated = false;
				addMissingInformationService.setMissingInformation(false, false, false);
				//var result;

				rootScope.currentUser = {};
				rootScope.currentUser.acctActivity = "A";

				return service.resolve(authRoles).then(function (data) {
					//result = data;
					expect(data).toBe('success');
				});
				// rootScope.currentUser = {};
				// rootScope.currentUser.acctActivity = "A";
				//rootScope.$apply();
				//rootScope.$digest();				
			});

			// it('should resolve as successful when missing info', async function () {
			// 	var authRoles = [USER_ROLES.anonymous];
			// 	addMissingInformationService.setMissingInformation(true, false, false);
			// 	//var result;
			// 	rootScope.currentUser = {};
			// 	rootScope.currentUser.acctActivity = "A";
			// 	const data = await service.resolve(authRoles);//.then(function (data) {
			// 	    //result = data;
			// 	    expect(data).toBe('success');
			// 	//});
			// 	// rootScope.currentUser = {};
			// 	// rootScope.currentUser.acctActivity = "A";
			// 	//rootScope.$apply();
			// 	//rootScope.$digest();
				
			// });

			it('should reject as notAuthenticated when not notAuthenticated', function () {
				authObj.isAuthenticated = false;
				authObj.isAuthorized = false;
				var authRoles = [USER_ROLES.active];
				addMissingInformationService.setMissingInformation(true, false, false);
				rootScope.currentUser = {};
				rootScope.currentUser.acctActivity = "A";

				//var result;
				return service.resolve(authRoles).then(function () {

				}).catch(function (data) {
					//result = data;
                    expect(data).toBe('notAuthenticated');
				});

				// rootScope.$apply();
				// rootScope.$digest();
				
			});

			it('should reject as missingRequiredInformation when not missingRequiredInformation', function () {
				authObj.isAuthenticated = true,
				authObj.isAuthorized = false;
				var authRoles = [USER_ROLES.active];
				addMissingInformationService.setMissingInformation(true, false, false);
				rootScope.currentUser = {};
				rootScope.currentUser.acctActivity = "A";

				//var result;
				return service.resolve(authRoles).then(function () {

				}).catch(function (data) {
					//result = data;
					expect(data).toBe('missingRequiredInformation');
				});

				// rootScope.$apply();
				// rootScope.$digest();
				
			});

			it('should reject as notAuthorized when not notAuthorized', function () {
				authObj.isAuthenticated = true,
				authObj.isAuthorized = false;
				var authRoles = [USER_ROLES.active];
				addMissingInformationService.setMissingInformation(false, false, false);
				rootScope.currentUser = {};
				rootScope.currentUser.acctActivity = "A";

				//var result;
				return service.resolve(authRoles).then(function () {

				}).catch(function (data) {
					//result = data;
                    expect(data).toBe('notAuthorized');
				});

				// rootScope.$apply();
				// rootScope.$digest();
				
			});

		});
		
		describe("redirects to different $state", function () {
			beforeEach(angular.mock.module(function ($provide) {

				authenticateRedirectService = jasmine.createSpyObj('authRedirectService', ['saveToState']);

				rootScope = jasmine.createSpyObj('rootScope', ['$watch', '$apply', '$digest', '$on']);

				rootScope.$watch.and.callFake((prop, action)=>{
					action && action(rootScope[prop]);
					return unwatch;
				});

				USER_ROLES = hctraMocks.USER_ROLES();
				addMissingInformationService = hctraMocks.addMissingInformationService();
				$state = hctraMocks.$state({});
				$provide.value('AuthService', hctraMocks.AuthService(authObj));
				$provide.value('USER_ROLES', USER_ROLES);
				$provide.value('$state', $state);
				$provide.value('stateNames', hctraMocks.stateNames());
				$provide.value('addMissingInformationService', addMissingInformationService);
				$provide.value('authenticateRedirectService', authenticateRedirectService);
				$provide.value('StorefrontUtilityService', storefrontUtilityService);

				$provide.value('$rootScope', rootScope);
				$provide.factory('$q', ['replacementQService', (replacementQService) =>replacementQService]);
			}));

			beforeEach(angular.mock.inject(function ($injector) {
				service = $injector.get('AuthResolver');
				spyOn($state, "go");
			}));
			
			it('should check spy is called with Login when not authenticated', function () {
				authObj.isAuthenticated = false;
				authObj.isAuthorized = false;
				var authRoles = [USER_ROLES.active];
				addMissingInformationService.setMissingInformation(true, false, false);
				rootScope.currentUser = {};
				rootScope.currentUser.acctActivity = "A";

				return service.resolve(authRoles).then(function () {

				}).catch(function () {
				    expect($state.go).toHaveBeenCalledWith('Login');
				});

				// rootScope.$apply();
				// rootScope.$digest();
				
			});

			it('should check spy is called with missingRequiredInformation when not missingRequiredInformation', function () {
				authObj.isAuthenticated = true,
				authObj.isAuthorized = false;
				var authRoles = [USER_ROLES.active];
				addMissingInformationService.setMissingInformation(true, false, false);
				rootScope.currentUser = {};
				rootScope.currentUser.acctActivity = "A";

				return service.resolve(authRoles).then(function () {

				}).catch(function () {
				    expect($state.go).toHaveBeenCalledWith('AddMissingInformation');
                });

				// rootScope.$apply();
				// rootScope.$digest();
				
			});

			it('should check spy is not called when not notAuthorized', function () {
				authObj.isAuthenticated = true,
				authObj.isAuthorized = false;
				var authRoles = [USER_ROLES.active];
				addMissingInformationService.setMissingInformation(false, false, false);
				rootScope.currentUser = {};
				rootScope.currentUser.acctActivity = "A";


				return service.resolve(authRoles).then(function () {

				}).catch(function () {
				    expect($state.go).not.toHaveBeenCalledWith('Login');
				    expect($state.go).not.toHaveBeenCalledWith('AddMissingInformation');
				});

				// rootScope.$apply();
				// rootScope.$digest();
				
			});
		});

		describe('storefront override', () => {

			beforeEach(angular.mock.module(function ($provide) {

				rootScope = jasmine.createSpyObj('rootScope', ['$watch', '$apply', '$digest', '$on']);

				rootScope.$watch.and.callFake((prop, action)=>{
					action && action(rootScope[prop]);
					return unwatch;
				});

				authenticateRedirectService = jasmine.createSpyObj('authRedirectService', ['saveToState']);

				USER_ROLES = hctraMocks.USER_ROLES();
				addMissingInformationService = hctraMocks.addMissingInformationService();
				$state = hctraMocks.$state({});
				$provide.value('AuthService', hctraMocks.AuthService(authObj));
				$provide.value('USER_ROLES', USER_ROLES);
				$provide.value('$state', $state);
				$provide.value('stateNames', hctraMocks.stateNames());
				$provide.value('addMissingInformationService', addMissingInformationService);
				$provide.value('authenticateRedirectService', authenticateRedirectService);
				$provide.value('StorefrontUtilityService', storefrontUtilityService);
				$provide.value('$rootScope', rootScope);
				$provide.factory('$q', ['replacementQService', (replacementQService) =>replacementQService]);
			}));

			beforeEach(angular.mock.inject(function ($injector) {
				service = $injector.get('AuthResolver');
				spyOn($state, "go");
			}));

			it('transitions in kiosk non-fullsite mode missing data', () => {

				storefrontUtilityService.isRunningAsKiosk = true;
				storefrontUtilityService.webStoreData = { fullSiteMode: false };

				var authRoles = [USER_ROLES.anonymous];
				addMissingInformationService.setMissingInformation(true, false, false);
				
				rootScope.currentUser = {};
				rootScope.currentUser.acctActivity = "A";

				return service.resolve(authRoles).then(function (data) {
					expect(data).toBe('success');
				});
				// rootScope.currentUser = {};
				// rootScope.currentUser.acctActivity = "A";
				// rootScope.$apply();
				// rootScope.$digest();

			});
			it('does not transition in kiosk fullsite node', () => {

				storefrontUtilityService.isRunningAsKiosk = true;
				storefrontUtilityService.webStoreData = { fullSiteMode: true };

				var authRoles = [USER_ROLES.anonymous];
				addMissingInformationService.setMissingInformation(true, false, false);
								
				//.then(function (data) {
					//expect(data).not.toBe('success');
				//});

				rootScope.currentUser = {};
				rootScope.currentUser.acctActivity = "A";
				// rootScope.$apply();
				// rootScope.$digest();
				
				return service.resolve(authRoles).catch(data=> {
					expect(data).not.toBe('success');
				});

			});

		});
	});
}());