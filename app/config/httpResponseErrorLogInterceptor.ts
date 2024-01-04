module HCTRA.Service {
    export interface IHttpResponseErrorLogInterceptor {
        response(response);
        responseError(response);
    }
}

class HttpResponseErrorLogInterceptor implements HCTRA.Service.IHttpResponseErrorLogInterceptor {

    static $inject = ["$q", "applicationLoggingService", "siteVerbiage", "$injector", "errorInterceptorService", "assignNullDataDefaults", "$window"];

    constructor(
        private $q: angular.IQService,
        private applicationLoggingService,
        private siteVerbiage,
        private $injector: any,
        private errorInterceptorService,
        private assignNullDataDefaults,
        private $window
    ) { }

    public response = (response) => {
      
        const firstNumber = response.status && response.status.toString().substring(0, 1);

        if (response.data && angular.isArray(response.data.errors) && response.data.errors.length > 0) {

            if (response.data.errors
                .filter(error => this.errorInterceptorService.shouldMessageTriggerLogging(error.message))
                .length > 0) {

                this.applicationLoggingService.interceptorError(angular.toJson({
                    method: response.config.method,
                    url: response.config.url,
                    message: response.data,
                    status: response.status
                }));
            }
        } else if (response.status === null
            || firstNumber === "5"
            || response.status === 0
            || firstNumber === "4"
            || response.status === 204
            || response.status === 206) {

            // F5 responded with sticky note .png
            if (response.status === 503) {
                this.$window.location.reload(true); // reload so they will be served the stickynote png
            }

            //Log out user and navigating to login component on status code 417 and displays 417 message
            if (response.status === 417) {
                const authService = this.$injector.get('AuthService') as any;
                authService.logOutOnFourOneSeven();
            }

            const error = {
                method: response.config.method,
                url: response.config.url,
                message: response.data,
                status: response.status
            };

            this.applicationLoggingService.error(angular.toJson(error));

            if (!angular.isObject(response.data)) {
                response.data = { originalResponse: response.data };
            }

            this.assignNullDataDefaults(response);

            //Stop adding other errors on status code 417 
            if (response.status !== 417) {
                error.message = this.siteVerbiage.genericErrorMsg;

                if (angular.isArray(response.data.errors)) {
                        response.data.errors.push(error);
                }
            }
        }

        return response;
    }

    public responseError = (response) => this.response(response);
}

angular.module("HCTRAModule").service("HttpResponseErrorLogInterceptor", HttpResponseErrorLogInterceptor);