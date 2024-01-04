(() => {
    'use strict';

    describe('HttpResponseErrorLogInterceptor', () => {

        let service;
        let scope;
        let applicationLoggingService;
        let siteVerbiage;
        let errorInterceptorService;
        let $window;
        let authService;

        beforeEach(angular.mock.module('HCTRAModule'));

        beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

            applicationLoggingService = jasmine.createSpyObj("applicationLoggingService", ["interceptorError", "error"]);
            siteVerbiage = {
                genericErrorMsg: "fake generic error"
            };
            errorInterceptorService = jasmine.createSpyObj("errorInterceptorService", ["shouldMessageTriggerLogging"]);

            authService = jasmine.createSpyObj("AuthService", ["logoutOnFourOneSeven"]);
            $provide.value('AuthService', authService);

            $window = { location: jasmine.createSpyObj("location", ["reload"]) };

            $provide.value('applicationLoggingService', applicationLoggingService);
            $provide.value('siteVerbiage', siteVerbiage);
            $provide.value('errorInterceptorService', errorInterceptorService);
            $provide.value('$window', $window);
        }));

        beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

            service = $injector.get('HttpResponseErrorLogInterceptor');
            const rootscope = $injector.get('$rootScope');
            scope = rootscope.$new();
        }));


        describe("canary", () => {

            it("should pass", () => {

                expect(true).toBe(true);
            });
        });

        describe("responseError function", () => {

            it("should call the response fucntion", () => {
                spyOn(service, "response").and.returnValue("response was called");

                const result = service.responseError("fake input");

                expect(result).toBe("response was called");
                expect(service.response).toHaveBeenCalledWith("fake input");
                expect(service.response).toHaveBeenCalledTimes(1);
            });
        });

        describe("response", () => {

            [
                null,
                true,
                1,
                "html page",
                {},
                { errors: [] }

            ].forEach(data => {
                it("should return response unchanged when status code 200 and no errors ", () => {
                    
                    const response = {
                        status: 200,
                        data: data
                    };

                    const expectedResponse = angular.copy(response);
                    
                    expect(service.response(response)).toEqual(expectedResponse);

                    expect(applicationLoggingService.error).toHaveBeenCalledTimes(0);
                    expect(applicationLoggingService.interceptorError).toHaveBeenCalledTimes(0);
                    expect(errorInterceptorService.shouldMessageTriggerLogging).toHaveBeenCalledTimes(0);
                    expect($window.location.reload).toHaveBeenCalledTimes(0);
                });
            });

            [
                null,
                0,
                100,
                204,
                206,
                200,
                300,
                503,
                600,
                700
            ].forEach(statusCode => {
                it(`should return response unchanged when status code ${statusCode} and no loggable errors `, () => {

                    errorInterceptorService.shouldMessageTriggerLogging.and.returnValue(false);

                    const response = {
                        status: statusCode,
                        data: { errors: [{ message: "" }, { message: "" }] }
                    };

                    const expectedResponse = angular.copy(response);

                    expect(service.response(response)).toEqual(expectedResponse);

                    expect(applicationLoggingService.error).toHaveBeenCalledTimes(0);
                    expect(applicationLoggingService.interceptorError).toHaveBeenCalledTimes(0);
                    expect(errorInterceptorService.shouldMessageTriggerLogging).toHaveBeenCalledTimes(2);
                    expect($window.location.reload).toHaveBeenCalledTimes(0);
                });
            });

            [
                null,
                0,
                100,
                204,
                206,
                200,
                300,
                400,
                500,
                503,
                600,
                700
            ].forEach(statusCode => {
                it(`should return response unchanged when status code ${statusCode} and call applicationLoggingService.interceptorError when loggable errors`, () => {

                    errorInterceptorService.shouldMessageTriggerLogging.and.returnValue(true);

                    const response = {
                        status: statusCode,
                        data: { errors: [{ message: "" }, { message: "" }] },
                        config: {
                            method: "duck",
                            url: "quack"
                        }
                    };

                    const expectedResponse = angular.copy(response);

                    expect(service.response(response)).toEqual(expectedResponse);

                    expect(applicationLoggingService.error).toHaveBeenCalledTimes(0);
                    expect(applicationLoggingService.interceptorError).toHaveBeenCalledTimes(1);
                    expect(applicationLoggingService.interceptorError).toHaveBeenCalledWith(angular.toJson({
                        method: "duck",
                        url: "quack",
                        message: { errors: [{ message: "" }, { message: "" }] },
                        status: statusCode
                    }));
                    expect(errorInterceptorService.shouldMessageTriggerLogging).toHaveBeenCalledTimes(2);
                    expect($window.location.reload).toHaveBeenCalledTimes(0);
                });
            });

            it(`should call reload when statuscode 503`, () => {

                errorInterceptorService.shouldMessageTriggerLogging.and.returnValue(true);

                const response = {
                    status: 503,
                    data: { errors: [] },
                    config: {
                        method: "duck",
                        url: "quack"
                    }
                };

                service.response(response);

                expect($window.location.reload).toHaveBeenCalledTimes(1);
                expect($window.location.reload).toHaveBeenCalledWith(true);
            });


            [
                null,
                0,
                204,
                206,
                400,
                500
            ].forEach(statusCode => {
                it(`should return response with generic error when status code ${statusCode} and no errors in response`, () => {

                    errorInterceptorService.shouldMessageTriggerLogging.and.returnValue(true);

                    const response = {
                        status: statusCode,
                        data: { },
                        config: {
                            method: "cat",
                            url: "meow"
                        }
                    };

                    const expectedResponse = {
                        status: statusCode,
                        data: { errors: [{ method: 'cat', url: 'meow', message: 'We are unable to process your request at this time.', status: statusCode }], alerts: [] },
                        config: {
                            method: "cat",
                            url: "meow"
                        }
                    };
                                        
                    const result = service.response(response);

                    expect(result).toEqual(expectedResponse);


                    expect(applicationLoggingService.interceptorError).toHaveBeenCalledTimes(0);
                    expect(applicationLoggingService.error).toHaveBeenCalledTimes(1);
                    expect(applicationLoggingService.error).toHaveBeenCalledWith(angular.toJson({
                        method: "cat",
                        url: "meow",
                        message: { },
                        status: statusCode
                    }));
                    expect(errorInterceptorService.shouldMessageTriggerLogging).toHaveBeenCalledTimes(0);
                    expect($window.location.reload).toHaveBeenCalledTimes(0);
                });
            });

            [
                null,
                0,
                204,
                206,
                400,
                500
            ].forEach(statusCode => {
                it(`should return response with generic error when status code ${statusCode} and response.data is not an object`, () => {

                    errorInterceptorService.shouldMessageTriggerLogging.and.returnValue(true);

                    const response = {
                        status: statusCode,
                        data: "<html><head><title>Request Rejected</title></head><body>The requested URL was rejected. Please consult with your administrator.<br><br>Your support ID is: 12736568780651982685</body></html>",
                        config: {
                            method: "cat",
                            url: "meow"
                        }
                    };

                    const expectedResponse = {
                        status: statusCode,
                        data: {
                            originalResponse: "<html><head><title>Request Rejected</title></head><body>The requested URL was rejected. Please consult with your administrator.<br><br>Your support ID is: 12736568780651982685</body></html>",
                            errors: [{ method: 'cat', url: 'meow', message: 'We are unable to process your request at this time.', status: statusCode }], alerts: []
                        },
                        config: {
                            method: "cat",
                            url: "meow"
                        }
                    };
                    
                    const result = service.response(response);

                    expect(result).toEqual(expectedResponse);

                    expect(applicationLoggingService.interceptorError).toHaveBeenCalledTimes(0);
                    expect(applicationLoggingService.error).toHaveBeenCalledTimes(1);
                    expect(applicationLoggingService.error).toHaveBeenCalledWith(angular.toJson({
                        method: "cat",
                        url: "meow",
                        message: "<html><head><title>Request Rejected</title></head><body>The requested URL was rejected. Please consult with your administrator.<br><br>Your support ID is: 12736568780651982685</body></html>",
                        status: statusCode
                    }));
                    expect(errorInterceptorService.shouldMessageTriggerLogging).toHaveBeenCalledTimes(0);
                    expect($window.location.reload).toHaveBeenCalledTimes(0);
                });
            });
        });
        
    });
})();