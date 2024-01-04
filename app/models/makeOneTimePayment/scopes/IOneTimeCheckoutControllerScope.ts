
module HCTRA.Model {

    export interface IOneTimeCheckoutControllerScope extends angular.IScope {
        $parent: any;
        billingInfo: any;
        paymentAmount: number;

        onSubmit: Function;
        onEdit: Function;
        onPrevious: Function;
    }
}