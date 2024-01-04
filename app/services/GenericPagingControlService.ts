module HCTRA.Service {
    'use strict';

    export interface IGenericPagingControlService {

        generateSimpleConfig: (paginator: IPaginator, vmAssignmentCb: any) => HCTRA.Model.PagingControlConfig;
    }

    export class GenericPagingControlService implements IGenericPagingControlService {

        public generateSimpleConfig = (paginator: IPaginator, vmAssignmentCb: any): HCTRA.Model.PagingControlConfig => {

            let onPageChange = onPageChangeFactory(paginator, vmAssignmentCb);
            let onPageSizeChange = onPageSizeChangeFactory(paginator, vmAssignmentCb);

            return {
                onBackAll: onPageChange,
                onBack: onPageChange,
                onForward: onPageChange,
                onForwardAll: onPageChange,
                onPageSizeChange: onPageSizeChange,
                onPageNumberEntered: onPageChange,
                initPageSize: paginator.pageSize,
                totalItems: paginator.itemCount
            };

            function onPageChangeFactory(paginator: IPaginator, vmAssignmentCb: Function) {

                return (visiblePageNumber: number) => {

                    let newPageArray = paginator.getPage(visiblePageNumber);
                    vmAssignmentCb(newPageArray); // vm/$scope assignment must be done lexically, so we call a callback and pass in the info to assign
                };
            }

            function onPageSizeChangeFactory(paginator: IPaginator, vmAssignmentCb: Function) {

                return (visiblePageNumber: number, pageSize: number) => {

                    paginator.setPageSize(pageSize);
                    let newPageArray = paginator.getPage(visiblePageNumber);
                    vmAssignmentCb(newPageArray); // vm/$scope assignment must be done lexically, so we call a callback and pass in the info to assign
                }
            }
        }
    }

    type IPaginator = HCTRA.Datastructure.IPaginator<any>;
}

(function () {
    'use strict';

    angular.module('HCTRAModule').service('genericPagingControlService', HCTRA.Service.GenericPagingControlService)
}());