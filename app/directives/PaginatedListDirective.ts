(function () {
    'use strict';

    angular.module('HCTRAModule').directive('paginatedList', [
        function (): ng.IDirective {
            return {
                scope: {
                    inList: '=flatList',
                    beforePageChange: '=', // callback; fires before view's page assignment
                    afterPageChange: '=', // callback; fires after view's page assignment
                    initPageSize: '<',
                    invoiceCount: '=?',
                    showRecordCount: '=?'
                },
                controller: PaginatedListController,
                templateUrl: function (tElement, tAttrs) {
                    return tAttrs.templateUrl;
                },
                controllerAs: 'vm',
                bindToController: true,
                transclude: true
            };
        }]);

    function PaginatedListController($scope: PaginatedListScope, genericPagingControlService: HCTRA.Service.IGenericPagingControlService) {

        let vm: PaginatedListVm = this;

        type IPaginator = HCTRA.Datastructure.IPaginator<any>;

        vm.$onInit = () => {

            let unwatchInList = $scope.$watch('vm.inList', () => {

                if (vm.inList) {

                    vm.itemCount = vm.inList.length;

                    const initPageSize = vm.initPageSize || 25;
                    let paginator: IPaginator = new HCTRA.Datastructure.Paginator(vm.inList, initPageSize);
                    vm.config = genericPagingControlService.generateSimpleConfig(paginator, newPage => {

                        if (vm.beforePageChange) vm.beforePageChange();
                        vm.currentPage = newPage;
                        if (vm.afterPageChange) vm.afterPageChange();
                    });

                    vm.currentPage = paginator.getPage(1);

                    unwatchInList();
                }
            });
        }

        
    }

    PaginatedListController.$inject = ['$scope', 'genericPagingControlService'];

    type PaginatedListScope = ng.IScope & {
        inList: any[];
        beforePageChange: () => void;
        afterPageChange: () => void;
        initPageSize: number;
        invoiceCount: number;
        showRecordCount: boolean;
        $onInit: () => void;
    };

    type PaginatedListVm = PaginatedListScope & {
        itemCount: number;
        currentPage: any[];
        config: HCTRA.Model.PagingControlConfig;
    };
}());