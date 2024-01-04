((() => {
    "use strict";

    angular.module("HCTRAModule").directive("fileUpload", ["validationService",
        (validationService) => ({
            restrict: "E",
            templateUrl: "/app/directives/fileUploadTemplate.html",
            scope: {
                file: "=",
                validations: "=",
                form: "=",
                deleteFunc: "=?onDelete",
                shouldShowDelete: "=?",
                updateFunc: "&?onUpdate",
                id: "=?"
            },
            link($scope: HCTRA.Model.IFileUploadDirectiveScope) {

                const BYTES_PER_MEGABYTE = 1048576;

                let invalidKey: string = "AttachmentInvalid";
                $scope.showTypeValidationMessage = false;
                $scope.showSizeValidationMessage = false;
                $scope.showDeleteButton = false;
                if (!$scope.id)
                    $scope.id = "fileUploadIdentifier0";
                $scope.fileName = "";
                $scope.validation = validationService($scope.form);

                $scope.submitFile = (file: any) => {
                    if (!file) // this is needed because this function is triggered incorrectly after the first time a user hits upload and selects a file
                        return;

                    $scope.showDeleteButton = $scope.shouldShowDelete === true;
                    var indexOfExtension = file.name.lastIndexOf(".");
                    var extension = (indexOfExtension === -1 ? "" : file.name.substring(indexOfExtension)).toLowerCase();
                    $scope.fileName = file.name;

                    if (!isValid(file, extension))
                        return;

                    updateFile(file, extension);
                };

                function updateFile(file: any, extension: string) {
                    $scope.showTypeValidationMessage = false;
                    $scope.showSizeValidationMessage = false;
                    $scope.form[$scope.id].$setValidity(invalidKey, true);
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onloadend = () => {

                        $scope.$apply(() => { // FileReader API doesn't trigger digest cycle; need $apply (Bug 14058)

                            $scope.file.data = reader.result;
                            $scope.file.extension = extension;

                            if ($scope.updateFunc)
                                $scope.updateFunc();
                        });
                        
                    }
                }

                function isValid(file: any, extension: string): boolean {

                    // FileUploadSize [megabytes] * BYTES_PER_MEGABYTE [bytes/megabytes]
                    let maxFileSizeInBytes = $scope.validations.FileUploadSize * BYTES_PER_MEGABYTE;

                    if ($scope.validations.FileExtensions.indexOf(extension) === -1) {
                        $scope.showSizeValidationMessage = false;
                        $scope.showTypeValidationMessage = true;
                        invalidateFile();
                        return false;
                    }

                    if (file.size > maxFileSizeInBytes) {
                        $scope.showTypeValidationMessage = false;
                        $scope.showSizeValidationMessage = true;
                        invalidateFile();
                        return false;
                    }
                    return true;
                }

                function invalidateFile() {
                    $scope.file.data = null;
                    $scope.file.extension = null;
                    $scope.form[$scope.id].$setValidity(invalidKey, false);
                }

                $scope.onDelete = () => {
                    $scope.form[$scope.id].$setValidity(invalidKey, true);
                    $scope.file.data = null;
                    $scope.file.extension = null;
                    $scope.deleteFunc($scope.id);
                }
            }
        })]);

})());