(function () {
    'use strict';
    // describe("vantivPaymentService", function () {
    //     var service;
    //     var $http, q, rootScope, dataFactory;
        
    //     var config = {
    //         applicationId: "app",
    //         applicationName: "appName",
    //         applicationVersion: "v0.0.0",
    //         authorization: "authorization",
    //         acceptorId: "acceptorId",
    //         accountId: "accountId",
    //         accountToken: "TOKEN",
    //         requestId: "3141",
    //         laneId: 9999,
    //         url: "http://www.test.test/",
    //         vaultId: "vaultId"
    //     };

    //     beforeEach(angular.mock.module('HCTRAModule'));
    //     beforeEach(angular.mock.module(function ($provide) {
    //         $http = jasmine.createSpyObj("$http", ["post"]);
    //         dataFactory = jasmine.createSpyObj("dataFactory", ["TriPosLog"]);
    //         $provide.value("$http", $http);

    //         $provide.value("errorDisplayService", {});
    //         $provide.value("genericRepo",
    //             {
    //                 dataFactory: dataFactory
    //             });
    //         $provide.value("responseErrorService", {});
    //         $provide.constant("environmentConfig", {});
    //         $provide.value("siteVerbiage", {});
    //         $provide.value("creditCardTypes", {});
    //         $provide.value('StorefrontUtilityService', { machineName: 'machineName' });

    //     }));
    //     beforeEach(angular.mock.inject(function ($injector, $q, $rootScope) {
    //         q = $q;
    //         service = $injector.get('vantivPaymentService');
    //         rootScope = $rootScope;
    //     }));
    //     it("should get configuration then call vantiv", function () {
    //         //arrange
    //         var response = {};
    //         var postResult = {
    //             data: response,
    //             config: {},
    //             status: 200 
    //         };

    //         var configCopy = angular.extend({}, config);

    //         $http.post.and.returnValue(q.resolve(postResult));
    //         //assert
    //         expect(configCopy.url).toBeDefined();
    //         expect(configCopy.laneId).toBeDefined();
    //         expect(configCopy.vaultId).toBeDefined();
    //         expect(configCopy.applicationId).toBeDefined();
    //         expect(configCopy.applicationName).toBeDefined();
    //         expect(configCopy.applicationVersion).toBeDefined();
    //         expect(configCopy.authorization).toBeDefined();
    //         expect(configCopy.acceptorId).toBeDefined();
    //         expect(configCopy.accountId).toBeDefined();
    //         expect(configCopy.accountToken).toBeDefined();
    //         expect(configCopy.requestId).toBeDefined();

    //         service
    //             .getTokenizedCreditCardData(configCopy, false, "")
    //             .then(function(result) {

    //                 expect($http.post).toHaveBeenCalled();
    //                 var args = $http.post.calls.argsFor(0);
    //                 expect(args[0]).toBe(config.url + "token/omni");
    //                 expect(args[1].laneId).toBe(config.laneId);
    //                 expect(args[1].vaultId).toBe(config.vaultId);

    //                 var headers = args[2].headers;
    //                 expect(headers["tp-application-id"]).toBe(config.applicationId);
    //                 expect(headers["tp-application-name"]).toBe(config.applicationName);
    //                 expect(headers["tp-application-version"]).toBe(config.applicationVersion);
    //                 expect(headers["tp-authorization"]).toBe(config.authorization);
    //                 expect(headers["tp-express-acceptor-id"]).toBe(config.acceptorId);
    //                 expect(headers["tp-express-account-id"]).toBe(config.accountId);
    //                 expect(headers["tp-express-account-token"]).toBe(config.accountToken);
    //                 expect(headers["tp-request-id"]).toBe(config.requestId);
    //                 expect(result).toBe(response);
    //                 expect(result.cancelledByUser).toBeFalsy();

    //                 expect(dataFactory.TriPosLog).toHaveBeenCalled();

    //                 expect(configCopy.url).toBeUndefined();
    //                 expect(configCopy.laneId).toBeUndefined();
    //                 expect(configCopy.vaultId).toBeUndefined();
    //                 expect(configCopy.applicationId).toBeUndefined();
    //                 expect(configCopy.applicationName).toBeUndefined();
    //                 expect(configCopy.applicationVersion).toBeUndefined();
    //                 expect(configCopy.authorization).toBeUndefined();
    //                 expect(configCopy.acceptorId).toBeUndefined();
    //                 expect(configCopy.accountId).toBeUndefined();
    //                 expect(configCopy.accountToken).toBeUndefined();

    //                 expect(configCopy.requestId).toBeDefined();
    //             })
    //             .catch(function() {
    //                 fail('should have not rejected');
    //             });
    //         rootScope.$apply();
    //     });

    //     it("should handle cancelled events from vantiv", function () {
    //         //arrange
    //         var response = {
    //             _hasErrors: true,
    //             _errors: [{ exceptionMessage: "sometext and cancelled response" }]
    //         };
    //         var postResult = {
    //             data: response,
    //             config: {},
    //             status: 200 
    //         };

    //         $http.post.and.returnValue(q.resolve(postResult));
    //         var configCopy = angular.extend({}, config);
    //         //assert
    //         service
    //             .getTokenizedCreditCardData(configCopy, false, "")
    //             .then(function (result) {
    //                 expect(result.cancelledByUser).toBeTruthy();
    //                 expect(dataFactory.TriPosLog).toHaveBeenCalled();
    //             }).catch(function () {
    //                 fail('should not have rejected');
    //             });

    //         rootScope.$apply();
    //     });

    //     it("should reject on an error from vantiv", function () {
    //         //arrange
    //         var response = {
    //             _hasErrors: true,
    //             _errors: [{ exceptionMessage: "any error" }]
    //         };
    //         var postResult = {
    //             data: response,
    //             config: {},
    //             status: 200 
    //         };

    //         var configCopy = angular.extend({}, config);

    //         $http.post.and.returnValue(q.resolve(postResult));
    //         //assert
    //         service
    //             .getTokenizedCreditCardData(configCopy, false, "")
    //             .then(function () {
    //                 fail('should not have resolved');
    //             }).catch(function (val) {
    //                 expect(val).toBeDefined();
                    
    //                 expect(dataFactory.TriPosLog).toHaveBeenCalled();
    //             });

    //         rootScope.$apply();
    //     });
    // });
})();