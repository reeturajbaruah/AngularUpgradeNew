(function () {
    'use strict';

    angular.module('HCTRAModule').directive("creditCardInfo", ["arrayUtilService", "cmsUtilService",
        function (arrayUtilService: HCTRA.Service.IArrayUtilService, cmsUtilService) {

		    return {
		        restrict: "E",
		        templateUrl: "/app/directives/billingInfo/creditCardInfo.html",
		        transclude: true,
		        scope: {
		            creditcard: '=',
		            onEdit: '&',//TODO: Optional Attribute
		            onCreditCardEdit: '&',
		            addSecondaryPayment: '&',
		            multiplecards: '&',
		            hideEdit: '=?',
		            international: '=',
		            isAccountInformation: '=',
		            numCards: '=',
                    isPrimarySet: '=',
                    cardCmsContent: '<?'
		        },
                link: function ($scope : any, elem, attrs, ctrl, $transclude) {                    
		            var multipleCreditCards = $scope.multiplecards();
		            $scope.showEdit = !!attrs.onEdit && !multipleCreditCards;
		            $scope.noTransHeader = false;
		            $scope.headerText = "Update Billing Information";
		            $scope.showAddSecondaryPayment = 'addSecondaryPayment' in attrs && !multipleCreditCards;
		            $scope.showNameOnCard = 'showNameOnCard' in attrs;
		            $scope.hideTitle = 'card2' in attrs;
		            $scope.showCardEdit = multipleCreditCards && 'multiplecards' in attrs;
		            $scope.hideAddress = 'hideAddress' in attrs;
                    $scope.guaranteedPrimary = 'guaranteedPrimary' in attrs;

		            $scope.creditCard = $scope.creditcard === null ? {} : $scope.creditcard;

		            var unwatch = $scope.$watch('creditcard', function () {

		                if ($scope.creditcard && $scope.creditcard.cardNbr) {

		                    $scope.creditCard = $scope.creditcard === null ? {} : $scope.creditcard;

                            if (multipleCreditCards && !$scope.guaranteedPrimary) {
                                $scope.creditCard.orderDisplay = $scope.creditCard.primary ? "Primary" : "Secondary";
                            }
                            else if ($scope.guaranteedPrimary) {
                                $scope.creditCard.orderDisplay = 'Primary';
                            }
                            else {
                                $scope.creditCard.orderDisplay = '';
                            }

                            assignCardImage($scope.cardCmsContent, $scope.creditCard.cardCode);
                            unwatch();
		                }
                    });

                    var unwatch2 = $scope.$watch('cardCmsContent', function () {

                        if ($scope.cardCmsContent) {
                            assignCardImage($scope.cardCmsContent, $scope.creditCard.cardCode);
                            unwatch2();
                        }
                    });

		            $scope.$watch('isPrimarySet', function (newValue) {
		                $scope.showAddSecondaryPayment = 'addSecondaryPayment' in attrs && !multipleCreditCards && newValue;
		            });

		            // Checks if there is a transcluded header or not
		            $transclude(function (header) {
		                if (!header.length) {
		                    $scope.noTransHeader = true;
		                }
		            });


                    function assignCardImage(cardCmsContent: HCTRA.Model.PaymentMethodsList, cardCode: string) {

                        if (cardCmsContent && cardCode) {

                            const paymentMethodImageDict = arrayUtilService.toDictionary(cardCmsContent, u => u.Label[0].toUpperCase());
                            $scope.imageSrc = cmsUtilService.generateFileSrc(paymentMethodImageDict[cardCode].Image);
                        }
                    }
		        }
		    };
		}]);
}());