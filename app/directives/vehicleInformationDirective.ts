module HCTRA.Directive {

    export class VehicleInformationDirective implements angular.IDirective {
        transclude = true;
        restrict = "E";
        templateUrl = "/app/directives/vehicleInformationTemplate.html";

        constructor(private validationService: HCTRA.Service.IValidationService,
            private responseErrorService: HCTRA.Service.IResponseErrorService,
            private genericRepo: HCTRA.Service.IGenericRepo,
            private localDataRepo: HCTRA.Service.ILocalDataRepoService,
            private manageVehiclesPaperPlateService: HCTRA.Service.IManageVehiclesPaperPlateService,
            private environmentConfig: HCTRA.Constant.IEnvironmentConfig) { }

        scope = {
            vehicleInfo: "=",
            parentForm: "=",
            tabOrderingIndex: "=",
            isEdit: "=",
            hideTempPlate: "=?"
        };

        static factory(): ng.IDirectiveFactory {
            const directive = (validationService: any,
                responseErrorService: HCTRA.Service.IResponseErrorService,
                genericRepo: HCTRA.Service.IGenericRepo,
                localDataRepo,
                manageVehiclesPaperPlateService,
                environmentConfig) =>
                new VehicleInformationDirective(validationService,
                    responseErrorService,
                    genericRepo,
                    localDataRepo,
                    manageVehiclesPaperPlateService,
                    environmentConfig);

            directive.$inject = ["validationService", "responseErrorService", "genericRepo", "localDataRepo", "manageVehiclesPaperPlateService", "environmentConfig"];
            return directive;
        }

        link = ($scope: HCTRA.Model.IVehicleInformationDirectiveScope | any) => {
            Object.defineProperty($scope.vehicleInfo, 'isPaperPlate', {
                get: function () { return this.temporaryLicPlate; },
                set: function (value) { this.temporaryLicPlate = value; }
            });

            if (!$scope.vehicleInfo) {
                $scope.vehicleInfo = {};
            }

            let oldLicPlate = $scope.vehicleInfo.licPlate;


            // TODO: Cleanup so vehicleClassCode is a string
            $scope.vehicleInfo.vehicleClassCode = Number($scope.vehicleInfo.vehicleClassCode) as any;
            $scope.validation = this.validationService($scope.parentForm);
            $scope.classList = this.localDataRepo.getClasses(); // Axle classifications
            $scope.yearsList = this.localDataRepo.getModelYears(); // Years from 1900 to present year + 1
            $scope.allDataHasBeenLoaded = false;

            $scope.hasSelectedTwoAxle = () => {
                return $scope.vehicleInfo.vehicleClassCode.toString() === "2";
            };

            $scope.classChange = () => {
                $scope.disableMotorcycle = ($scope.vehicleInfo.vehicleClassCode.toString() !== "2");

                if ($scope.disableMotorcycle)
                    $scope.vehicleInfo.motorcycle = false;
            };
            $scope.classChange(); // Run once on controller creation

            if (!$scope.hideTempPlate) {
                $scope.onBlur = () => {
                    if (oldLicPlate !== $scope.vehicleInfo.licPlate) {
                        oldLicPlate = $scope.vehicleInfo.licPlate;
                        $scope.vehicleInfo.temporaryLicPlate = null;
                    }
                };
            }
            else {
                $scope.onBlur = angular.noop;
            }

            this.genericRepo.dataFactory.getEditEzTagData().then((response: any) => {
                if (this.responseErrorService.isErrorFree(response)) {
                    $scope.statesList = response.states;
                    $scope.makesList = response.vehicleMakes;
                }
                this.responseErrorService.displayAlertsFromResponse(response);
                $scope.allDataHasBeenLoaded = true;
            });

            this.manageVehiclesPaperPlateService.getPaperPlateCms().then(cms => {
                $scope.paperPlateAcknowledgement = cms.paperPlateAcknowledgement;
                $scope.paperPlateQuestion = cms.paperPlateQuestion;
                $scope.paperPlateValidationText = cms.paperPlateValidationText;
            });

        };
    }

}

(function () {
    "use strict";
    angular.module("HCTRAModule").directive("vehicleInformation", HCTRA.Directive.VehicleInformationDirective.factory());
}());