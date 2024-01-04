// (function () {
//     'use strict';

//     angular.module('HCTRAModule').constant('routes', urls());
//     angular.module('HCTRAModule').constant('stateNames', states());


//     // Define the route state names
//     function states() {
//         return {
//             personalAccount: 'NewAccount.CreateAccount.PersonalAccount',
//             personalInformation: 'NewAccount.CreateAccountDetails.PersonalInformation',
//             vehicleInformation: 'NewAccount.AddEZTAG.VehicleInformation',
//             choosePaymentMethod: 'NewAccount.PaymentMaster.ChooseMethod',
//             enterBankAccount: 'NewAccount.PaymentMaster.BankAccount',
//             creditCardEntry: 'NewAccount.PaymentMaster.CreditCard',
//             addMissingInformation: 'AddMissingInformation',
//             createAccountReceipt: 'NewAccount.CreateAccountReceipt'
//         };
//     }

//     // Define the route page urls
//     function urls() {
//         return {
//             accountActivity: '/AccountActivity',
//             accountSummary: '/AccountSummary',
//             creditCardEntry: '/CreditCardEntry',
//             forgotPasswordAccount: '/ForgotPasswordAccount',
//             forgotPasswordEmail: '/ForgotPasswordEmail',
//             forgotPasswordEmailSent: '/ForgotPasswordEmailSent',
//             forgotPasswordValidateAccount: '/ForgotPasswordValidateAccount',
//             forgotPasswordReset: '/ForgotPasswordReset',
//             login: '/Login',
//             newAccount: '/NewAccount',
//             createAccount: '/CreateAccount',
//             personalAccount: '/PersonalAccount',
//             createAccountDetails: '/CreateAccountDetails',
//             personalInformation: '/PersonalInformation',
//             addEZTAG: '/AddEZTAG',
//             vehicleInformation: '/VehicleInformation',
//             addAdditionalVehicle: '/AddAdditionalVehicle',
//             paymentMaster: '/PaymentMaster',
//             choosePaymentMethod: '/ChoosePaymentMethod',
//             enterBankAccount: '/EnterBankAccount',
//             addMissingInformation: '/AddMissingInformation'
//         };
//     }
// })();