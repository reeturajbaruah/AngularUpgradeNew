((() => {
    "use strict";

    angular.module("HCTRAModule").directive("filesUpload", [
        () => ({
            restrict: "E",
            templateUrl: "/app/directives/filesUploadTemplate.html",
            scope: {
                files: "=",
                validations: "=",
                form: "="
            },
            link($scope: HCTRA.Model.IFilesUploadDirectiveScope) {

                let runningIdCount: number = 0;
                let idPrefix: string = "fileUploadIdentification";
                $scope.internalFiles = [];
                $scope.internalFiles.push(createNewInitialFileObj());

                $scope.updateFunc = () => {
                    if ($scope.validations.FileMaxUploads > $scope.internalFiles.length) {
                        addNewEntry();
                    }
                    assignCurrentFileSet();
                }

                $scope.processDelete = (id: string) => {
                    $scope.internalFiles = $scope.internalFiles.filter((file) => {
                        return file.id !== id;
                    });
                    addNewEntry();
                    assignCurrentFileSet();
                }

                function assignCurrentFileSet() {
                    $scope.files = $scope.internalFiles.filter((file) => {
                        return file.extension !== null;
                    });
                }

                function addNewEntry() {
                    let hasOpenEntry: boolean = false;
                    $scope.internalFiles.some((file) => {
                        hasOpenEntry = file.extension === null;
                        return hasOpenEntry;
                    });
                    if (!hasOpenEntry) {
                        $scope.internalFiles.push(createNewInitialFileObj());
                    }
                }

                function createNewInitialFileObj() : HCTRA.Model.IHctraFile {
                    runningIdCount++;
                    let newFile: HCTRA.Model.IHctraFile = {
                        data: null,
                        extension: null,
                        id: idPrefix + runningIdCount
                    };
                    return newFile;
                }

            }
        })]);

})());