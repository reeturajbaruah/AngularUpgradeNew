module HCTRA.Model {

    export interface IBillingInfoDirectiveScope extends angular.IScope {

        showEdit: boolean;
        showAddSecondaryPayment: boolean;
        showNameOnCard: boolean;
        showAccountNumber: boolean;
        billingtypeAvailable: boolean;
        intitle: string;
        transcludeIncluded: boolean;
        billingtype: string;
        billingtypeDisplay: string;
        billingInfo: any;
        bankDetails: any;
        creditCard: any;
        secondaryCreditCard: any;
        cardType: string;
        secondaryCardType: string;
        international: boolean;
    }
}