module HCTRA.Service {
    export interface IManageVehiclesPaperPlateService {
        getPaperPlateCms: () => ng.IPromise<{ paperPlateAcknowledgement: string, paperPlateQuestion: string, paperPlateValidationText: string }>;
    }

    export class ManageVehiclesPaperPlateService implements IManageVehiclesPaperPlateService {

        private static $inject = ['modalService', '$q', 'genericRepo', 'stringUtilsService', 'responseErrorService', 'routes'
        ];

        constructor(private modalService: HCTRA.Service.IModalService,
            private $q: ng.IQService,
            private genericRepo: HCTRA.Service.IGenericRepo,
            private stringUtilsService,
            private responseErrorService: HCTRA.Service.IResponseErrorService,
            private routes: HCTRA.Constant.IRoutes) {
        }

        public getPaperPlateCms = () => {
            return this.genericRepo.dataFactory.getCmsPageById({
                path: null,
                fields: 'Parameters',
                itemId: this.routes.addTagCms
            }).then(res => {
                if (this.responseErrorService.isErrorFree(res)) {

                    const addEzTagItem = angular.fromJson(res.cmsResponse);
                    const params = this.stringUtilsService.getParameterObject(addEzTagItem.Parameters);
                    const paperPlateQuestion = params.paperPlateQuestion;
                    const paperPlateAcknowledgement = params.paperPlateAcknowledgement;
                    const paperPlateValidationText = params.paperPlateValidationText;

                    return { paperPlateAcknowledgement, paperPlateQuestion, paperPlateValidationText };
                }})
        }
    }
}

(function () {

    'use strict';

    angular.module('HCTRAModule').service('manageVehiclesPaperPlateService', HCTRA.Service.ManageVehiclesPaperPlateService as any);
}());