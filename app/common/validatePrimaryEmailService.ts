module HCTRA.Service {
    'use strict';

    export interface IValidatePrimaryEmailService {
        setEmailValidationId: (id) => void;
        getEmailValidationId: () => number;
        destroyEmailValidationId: () => void;
        setEmailSent: (isSent: boolean) => void;
        getEmailSent: () => boolean;
        destroyEmailSent: () => void;
        processEmailConfirmationStatus: (emailConfirmationStatus: HCTRA.Constant.EmailConfirmationConstants, emailAddress: string, previousState: string) => void;
    }

    export class ValidatePrimaryEmailService implements IValidatePrimaryEmailService {
        private emailValidationId: number;
        private emailSent: boolean;

        static $inject = ['accountSummaryAlertFilterService', 'responseErrorService', 'emailConfirmationConstants'];

        constructor(private accountSummaryAlertFilterService, private responseErrorService: HCTRA.Service.IResponseErrorService, private emailConfirmationConstants: { [k: string]: HCTRA.Constant.EmailConfirmationConstants }) {

        }

        public setEmailValidationId = (id: number) => {
            this.emailValidationId = id;
        };

        public getEmailValidationId = () => {
            return this.emailValidationId;
        };

        public destroyEmailValidationId = () => {
            this.emailValidationId = null;
        };

        public setEmailSent = (isSent: boolean) => {
            this.emailSent = isSent;
        };

        public getEmailSent = () => {
            return this.emailSent;
        };

        public destroyEmailSent = () => {
            this.emailSent = null;
        };

        public processEmailConfirmationStatus = (emailConfirmationStatus: HCTRA.Constant.EmailConfirmationConstants, emailAddress: string, previousState: string): void => {


            if (this.accountSummaryAlertFilterService.filterEmailConfirmationAlert(emailAddress, emailConfirmationStatus)) {
                var msg, type;

                if (emailConfirmationStatus == this.emailConfirmationConstants.NOT_CONFIRMED && previousState != "SendEmailConfirmation") {

                    var url = "'/SendEmailConfirmation'";

                    msg = "Your email address " + emailAddress + " has not been verified. <a href=" + url + ">Please confirm your email address.</a>";

                    type = "warning";

                    this.responseErrorService.displayToast(msg, type);
                }
                else if (emailConfirmationStatus == this.emailConfirmationConstants.JUST_CONFIRMED) {

                    msg = "Thank you for confirming your email address" + (emailAddress ? `, ${emailAddress}.` : ".");
                    type = "success";

                    this.responseErrorService.displayToast(msg, type);
                }
                // else it's "previouslyConfirmed" and we do nothing
            }

        };
    }
}

(function () {

    'use strict';

    angular.module('HCTRAModule').service('validatePrimaryEmailService', HCTRA.Service.ValidatePrimaryEmailService);
}());