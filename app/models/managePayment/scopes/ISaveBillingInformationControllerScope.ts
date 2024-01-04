
module HCTRA.Model {

    export interface ISaveBillingInformationControllerScope extends angular.IScope {
        $parent: any;
        billingType: string;

        addSecondaryPayment: Function;
        editSecondaryCreditCard: Function;
        editPrimaryCreditCard: Function;
        editBank: Function;
        cancel: Function;
        save: Function;
    }
}