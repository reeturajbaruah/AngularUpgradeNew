(function () {
    'use strict';

    angular.module('HCTRAModule').directive('genericPagingControl', [
        function (): ng.IDirective {
            return {
                scope: {
                    config: "=", // HCTRA.Model.PagingControlConfig,
                    showRecordCount: "=?",
                    invoiceCount: "=?",
                    suspendedFlow: "=?"
                },
                templateUrl: '/app/directives/genericPagingControlTemplate.html',
                controller: GenericPagingControlController,
                controllerAs: 'vm'
            };
        }]);

    function GenericPagingControlController($scope: GenericPagingControlScope | any, $attrs: ng.IAttributes) {

        let vm: GenericPagingControlVm = this;

        const DEFAULT_PAGE_NUMBER = 1;

        let lastVisiblePageNumber = DEFAULT_PAGE_NUMBER;

        vm.$onInit = function () {

            vm.hideSelector = angular.isDefined($attrs.hideSelector);
            vm.showItemCount = angular.isDefined($attrs.showItemCount);
            vm.itemCountLabel = $attrs.itemCountLabel;

            let unwatch = $scope.$watch('config', () => { 

                if ($scope.config) {
                    vm.visiblePageNumber = DEFAULT_PAGE_NUMBER;
                    vm.pageSize = $scope.config.initPageSize;
                    vm.numberOfPages = calculateNumberOfPages($scope.config.totalItems, vm.pageSize);//Math.ceil($scope.config.totalItems / vm.pageSize);
                    vm.totalItems = $scope.config.totalItems;
                    vm.showRecordCount = $scope.showRecordCount;
                    vm.invoiceCount = $scope.invoiceCount;
                    vm.suspendedFlow = $scope.suspendedFlow;
                    unwatch();
                }
            });

            vm.onBackAll = () => {

                //vm.visiblePageNumber = 1;
                setVisiblePageNumber(1);

                if ($scope.config && $scope.config.onBackAll) {

                    $scope.config.onBackAll(vm.visiblePageNumber);
                }
            };

            vm.onBack = () => {

                if (vm.visiblePageNumber > 1) {

                    //vm.visiblePageNumber--;
                    setVisiblePageNumber(vm.visiblePageNumber - 1);
                }
                
                if ($scope.config && $scope.config.onBack) {

                    $scope.config.onBack(vm.visiblePageNumber);
                }
            };

            vm.onForward = () => {

                if (vm.visiblePageNumber < vm.numberOfPages) {

                    //vm.visiblePageNumber++;
                    setVisiblePageNumber(vm.visiblePageNumber + 1);
                }

                if ($scope.config && $scope.config.onForward) {

                    $scope.config.onForward(vm.visiblePageNumber);
                }
            };

            vm.onForwardAll = () => {

                //vm.visiblePageNumber = vm.numberOfPages;
                setVisiblePageNumber(vm.numberOfPages);

                if ($scope.config && $scope.config.onForwardAll) {

                    $scope.config.onForwardAll(vm.visiblePageNumber);
                }
            };

            vm.onPageSizeChange = () => { // when vm.pageSize changes

                vm.numberOfPages = calculateNumberOfPages($scope.config.totalItems, vm.pageSize);

                if (vm.visiblePageNumber > vm.numberOfPages) {

                    setVisiblePageNumber(vm.numberOfPages);
                }

                if ($scope.config && $scope.config.onPageSizeChange) {

                    $scope.config.onPageSizeChange(vm.visiblePageNumber, vm.pageSize);
                }
            };

            vm.onPageNumberEntered = () => { // when vm.visiblePageNumber changes

                if (Math.floor(vm.visiblePageNumber) === vm.visiblePageNumber) { // if integer

                    if (vm.visiblePageNumber < 1) { // out of bound: below

                        vm.visiblePageNumber = 1;
                    }
                    else if (vm.visiblePageNumber > vm.numberOfPages) { // out of bounds: above

                        vm.visiblePageNumber = vm.numberOfPages;
                    }

                    lastVisiblePageNumber = vm.visiblePageNumber; // set lastVisiblePageNumber to the appropriate bound
                }
                else {

                    vm.visiblePageNumber = lastVisiblePageNumber;
                }
                
                if ($scope.config && $scope.config.onPageNumberEntered) {

                    $scope.config.onPageNumberEntered(vm.visiblePageNumber);
                }
            };

            vm.lowerItemIndex = () => {
                return (vm.visiblePageNumber - 1) * vm.pageSize + 1;
            };

            vm.upperItemIndex = () => {
                return Math.min(vm.visiblePageNumber * vm.pageSize, vm.totalItems);
            };

            function setVisiblePageNumber(inNumber) {

                lastVisiblePageNumber = vm.visiblePageNumber;
                vm.visiblePageNumber = inNumber;
            }

            function calculateNumberOfPages(totalItems: number, pageSize: number) {

                return Math.ceil(totalItems / pageSize);
            }
        };
    }

    GenericPagingControlController.$inject = ['$scope', '$attrs'];

    type GenericPagingControlScope = ng.IScope & { config: HCTRA.Model.PagingControlConfig }; // add the config property to the scope

    type GenericPagingControlVm = {

        $onInit: Function;
        onBackAll: Function;
        onBack: Function;
        onForward: Function;
        onForwardAll: Function;
        onPageSizeChange: Function;
        onPageNumberEntered: Function;

        pageSize: number;
        visiblePageNumber: number;
        numberOfPages: number;
        hideSelector: boolean;
        totalItems: number;
        showItemCount: boolean;
        lowerItemIndex: Function;
        upperItemIndex: Function;
        itemCountLabel: string;
        showRecordCount: number;
        invoiceCount: number;
        suspendedFlow: boolean;
    }
}());