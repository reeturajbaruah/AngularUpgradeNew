module HCTRA.Directive {

    export class BillingInfoDirective implements angular.IDirective {
        transclude = true;
        restrict = "E";
        templateUrl = "/app/directives/billingInfoPartial.html";
        //CreditCardType is convereted to enum in Angular
        constructor(private creditCardTypes: any,
            private billingInfoUtilitiesService: HCTRA.Service.IBillingInfoUtilitiesService) { }
        scope = {
            billingInfo: "=data",
            onEdit: "&",
            addSecondaryPayment: "&",
            billingtype: "=?",
            hideEdit: "=?",
            intitle: "=?"
        };

        static factory(): ng.IDirectiveFactory {
            const directive = (creditCardTypes: any,
                billingInfoUtilitiesService: HCTRA.Service.IBillingInfoUtilitiesService) => new BillingInfoDirective(creditCardTypes, billingInfoUtilitiesService);
            directive.$inject = ["creditCardTypes",
                "billingInfoUtilitiesService"];
            return directive
        }

        link = ($scope: HCTRA.Model.IBillingInfoDirectiveScope | any,           
            elem: angular.IAugmentedJQuery,
            attrs: HCTRA.Model.IBillingInfoDirectiveAttributes) => {            
            $scope.showEdit = !!attrs.onEdit;
            $scope.hideAddress = "hideAddress" in attrs;
            $scope.showAddSecondaryPayment = "addSecondaryPayment" in attrs;
            $scope.showNameOnCard = "showNameOnCard" in attrs;
            $scope.showAccountNumber = "showAccountNumber" in attrs;
            $scope.billingtypeAvailable = !!attrs.billingtype;
            if (!$scope.intitle) {
                $scope.intitle = "Billing Information";
            }

            const cardCodeToName = (code: string) => {
                switch (code) {
                    case "V":
                        return this.creditCardTypes.visa;
                    case "M":
                        return this.creditCardTypes.mastercard;
                    case "D":
                        return this.creditCardTypes.discover;
                    case "A":
                        return this.creditCardTypes.amex;
                }
            }

            const transHeaders = angular.element("#accountSetupHeaderTransclude > :header").first();
            if (transHeaders.length > 0) { // They included a header tag
                $scope.transcludeIncluded = true;
            } else {
                $scope.transcludeIncluded = false;
            }


            if ($scope.billingtypeAvailable && $scope.billingtype === "EFT") {
                $scope.bankDetails = $scope.billingInfo.eft;
                $scope.billingtypeDisplay = "Bank Account";
            } else if ($scope.billingtypeAvailable && $scope.billingtype === "CREDIT") {
                $scope.creditCard = $scope.billingInfo.cards[0] === null ? {} : $scope.billingInfo.cards[0];
                $scope.secondaryCreditCard = $scope.billingInfo.cards[1] === null ? {} : $scope.billingInfo.cards[1];

                $scope.cardType = cardCodeToName($scope.creditCard.cardCode);

                $scope.billingtypeDisplay = "Credit Card";
                $scope.creditCard.international = this.billingInfoUtilitiesService.isInternationalAddress($scope.creditCard);
            }


            const unwatch = $scope.$watch("billingInfo", () => {
                if ($scope.billingInfo && $scope.billingInfo.billingType === HCTRA.Constant.PaymentType.EFT && $scope.billingInfo.eft && $scope.billingInfo.eft.accountNumber && !$scope.billingtypeAvailable) {

                    $scope.bankDetails = {};
                    $scope.bankDetails = $scope.billingInfo.eft;
                    $scope.bankDetails.accountType = $scope.bankDetails.accountType ? "Business" : "Personal";
                    $scope.billingtypeDisplay = "Bank Account";
                    $scope.billingtype = $scope.billingInfo.billingTypeDisplay;
                    unwatch();

                }
                if ($scope.billingInfo && $scope.billingInfo.billingType === HCTRA.Constant.PaymentType.CREDIT && $scope.billingInfo.cards && $scope.billingInfo.cards[0] && $scope.billingInfo.cards[0].cardNbr && !$scope.billingtypeAvailable) {

                    $scope.creditCard = $scope.billingInfo.cards[0] === null ? {} : $scope.billingInfo.cards[0];
                    $scope.secondaryCreditCard = $scope.billingInfo.cards[1] === null ? {} : $scope.billingInfo.cards[1];

                    // Hide Add secondary link if the only card returned is non-primary
                    // This directive isn't currently (6/2/17) used anywhere where the secondary credit card would be added so no need for this change yet
                    //if ($scope.billingInfo.cards.length === 1 && !$scope.billingInfo.cards[0].primary) {
                    //    $scope.showAddSecondaryPayment = false;
                    //}

                    $scope.cardType = cardCodeToName($scope.creditCard.cardCode);

                    if ($scope.secondaryCreditCard)
                        $scope.secondaryCardType = cardCodeToName($scope.secondaryCreditCard.cardCode);

                    $scope.billingtype = $scope.billingInfo.billingTypeDisplay;
                    $scope.billingtypeDisplay = "Credit Card";

                    $scope.creditCard.international = this.billingInfoUtilitiesService.isInternationalAddress($scope.creditCard);
                    unwatch();
                }
            });
        };
    }

}

(function () {
    "use strict";
    angular.module("HCTRAModule").directive("billingInfo", HCTRA.Directive.BillingInfoDirective.factory());
}());