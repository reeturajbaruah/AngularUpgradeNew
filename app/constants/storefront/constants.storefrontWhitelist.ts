module HCTRA.Constant {
    "use strict";

    export interface IStorefrontWhitelist {
        whitelistUrls: string[];
    }

    export class StorefrontWhitelist {
        static get Default(): IStorefrontWhitelist {
            return {
                whitelistUrls : [
                    "api/sessions/MissedAToll",
                    "api/sessions/Login",
                    "api/sessions/AddMissingInformation",
                    "api/sessions/AccountActivity",
                    "api/sessions/ManageVehicles",
                    "api/sessions/ActivateEzTag",
                    "api/sessions/AccountSummary",
                    "api/sessions/Storefront",
                    "api/sessions/Violations",
                    "api/sessions/AccountInformation",
                    "api/sessions/MakeOneTimePayment",
                    "api/sessions/ManagePayment",
                    "api/sessions/PersonalInfo",
                    "api/sessions/UpdateRebillAmount",
                    "api/sessions/SentALetter",
                    "api/sessions/PersonalBusinessData",
                    "api/sessions/PersonalBusinessDetails",
                    "api/sessions/PersonalInfo",
                    "api/sessions/AddPaymentDetails",
                    "api/sessions/AddEZTag",
                    "api/sessions/CreateAccountSummary",
                    "api/sessions/Checkout",
                    "api/sessions/CreateAccountReceipt",
                    "api/sessions/GetCurrentStep",
                    "api/sessions/MultiVehicleUpload"
                ]

            }
        }
    }
}

(function () {
    "use strict";
    angular.module("HCTRAModule").constant("storefrontWhitelist", HCTRA.Constant.StorefrontWhitelist.Default);
}());