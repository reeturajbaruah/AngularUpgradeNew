(function (): void {
    "use strict";

    describe("directive: files-upload", () => {

        beforeEach(angular.mock.module("HCTRATemplates"));
        beforeEach(angular.mock.module("HCTRAModule"));

        let scope,
            directiveScope;

        beforeEach(angular.mock.inject(($rootScope: angular.IRootScopeService,
            $compile: angular.ICompileService,
            $templateCache: angular.ITemplateCacheService) => {
            scope = $rootScope.$new();
            scope.form = {};
            scope.details = {
                validations: {
                    FileUploadSize: 20,
                    FileMaxUploads: 4,
                    FileExtensions: ".pdf,.png",
                    FieldValidationMessage: "invalid file type",
                    FieldRequiredValidationMessage: "size to large"
                },
                files: []
            };

            $templateCache.put("/app/directives/filesUploadTemplate.html",
                $templateCache.get("app/directives/filesUploadTemplate.html"));
            let el: angular.IAugmentedJQuery = angular.element("<form name=\"form\">" +
                "<files-upload validations=\"details.validations\" files=\"details.files\" form=\"form\" " +
                "></files-upload>" +
                + "</form>");
            $compile(el)(scope);
            scope.$digest();

            directiveScope = (<angular.IAugmentedJQuery>el.children()).isolateScope();
        }));


        it("should have a defined scope", () => {
            expect(scope).toBeDefined();
        });

        it("test parent scope", () => {
            expect(scope.details.validations.FileUploadSize).toEqual(20);
            expect(scope.details.validations.FileMaxUploads).toEqual(4);
            expect(scope.details.validations.FileExtensions).toEqual(".pdf,.png");
            expect(scope.details.validations.FieldValidationMessage).toEqual("invalid file type");
            expect(scope.details.validations.FieldRequiredValidationMessage).toEqual("size to large");
            expect(scope.details.files).toEqual([]);
        });

        it("test directive scope", () => {
            expect(directiveScope.validations.FileUploadSize).toEqual(20);
            expect(directiveScope.validations.FileMaxUploads).toEqual(4);
            expect(directiveScope.validations.FileExtensions).toEqual(".pdf,.png");
            expect(directiveScope.validations.FieldValidationMessage).toEqual("invalid file type");
            expect(directiveScope.validations.FieldRequiredValidationMessage).toEqual("size to large");
            expect(directiveScope.files).toEqual([]);
            expect(directiveScope.internalFiles.length).toBe(1);
            expect(directiveScope.internalFiles[0].data).toBeNull();
            expect(directiveScope.internalFiles[0].extension).toBeNull();
            expect(directiveScope.internalFiles[0].id).toEqual("fileUploadIdentification1");
            expect(directiveScope.updateFunc).toBeDefined();
            expect(directiveScope.processDelete).toBeDefined();
        });

        it("test updateFunc with less than max files",
            () => {
                expect(directiveScope.internalFiles.length).toEqual(1);
                expect(directiveScope.files.length).toEqual(0);

                directiveScope.internalFiles[0].data = "test";
                directiveScope.internalFiles[0].extension = ".loust";
                directiveScope.updateFunc();

                expect(directiveScope.internalFiles.length).toEqual(2);
                expect(directiveScope.files.length).toEqual(1);
                expect(directiveScope.internalFiles[0].data).toEqual("test");
                expect(directiveScope.internalFiles[0].extension).toEqual(".loust");
                expect(directiveScope.internalFiles[0].id).toEqual("fileUploadIdentification1");
                expect(directiveScope.internalFiles[1].data).toBeNull();
                expect(directiveScope.internalFiles[1].extension).toBeNull();
                expect(directiveScope.internalFiles[1].id).toEqual("fileUploadIdentification2");
                expect(directiveScope.files[0].data).toEqual("test");
                expect(directiveScope.files[0].extension).toEqual(".loust");
                expect(directiveScope.files[0].id).toEqual("fileUploadIdentification1");
            }
        );

        it("test updateFunc when user updated an old file and there is already an open file",
            () => {
                directiveScope.internalFiles[0].data = "test";
                directiveScope.internalFiles[0].extension = ".loust";
                let newFile2: HCTRA.Model.IHctraFile = {
                    data: null,
                    extension: null,
                    id: "fileUploadIdentification2"
                };
                directiveScope.internalFiles.push(newFile2);
                expect(directiveScope.internalFiles.length).toEqual(2);
                directiveScope.files[0] = directiveScope.internalFiles[0];
                expect(directiveScope.files.length).toEqual(1);

                directiveScope.internalFiles[0].data = "newerValue";
                directiveScope.internalFiles[0].extension = ".superLoust";
                directiveScope.updateFunc();

                expect(directiveScope.internalFiles.length).toEqual(2);
                expect(directiveScope.files.length).toEqual(1);
                expect(directiveScope.internalFiles[0].data).toEqual("newerValue");
                expect(directiveScope.internalFiles[0].extension).toEqual(".superLoust");
                expect(directiveScope.internalFiles[0].id).toEqual("fileUploadIdentification1");
                expect(directiveScope.internalFiles[1].data).toBeNull();
                expect(directiveScope.internalFiles[1].extension).toBeNull();
                expect(directiveScope.internalFiles[1].id).toEqual("fileUploadIdentification2");
                expect(directiveScope.files[0].data).toEqual("newerValue");
                expect(directiveScope.files[0].extension).toEqual(".superLoust");
                expect(directiveScope.files[0].id).toEqual("fileUploadIdentification1");
            }
        );

        it("test updateFunc with more or equal than max files",
            () => {
                let newFile2: HCTRA.Model.IHctraFile = {
                    data: "test",
                    extension: ".incredible",
                    id: "fileUploadIdentification2"
                };
                let newFile3: HCTRA.Model.IHctraFile = {
                    data: "test",
                    extension: ".incredible",
                    id: "fileUploadIdentification3"
                };
                let newFile4: HCTRA.Model.IHctraFile = {
                    data: "test",
                    extension: ".incredible",
                    id: "fileUploadIdentification4"
                };
                directiveScope.internalFiles[0].data = "test";
                directiveScope.internalFiles[0].extension = ".loust";
                directiveScope.internalFiles.push(newFile2);
                directiveScope.internalFiles.push(newFile3);
                directiveScope.internalFiles.push(newFile4);
                directiveScope.files.push(directiveScope.internalFiles[0]);
                directiveScope.files.push(directiveScope.internalFiles[1]);
                directiveScope.files.push(directiveScope.internalFiles[2]);


                expect(directiveScope.internalFiles.length).toEqual(4);
                expect(directiveScope.files.length).toEqual(3);

                directiveScope.updateFunc();

                expect(directiveScope.internalFiles.length).toEqual(4);
                expect(directiveScope.files.length).toEqual(4);
                expect(directiveScope.internalFiles[0].data).toEqual("test");
                expect(directiveScope.internalFiles[0].extension).toEqual(".loust");
                expect(directiveScope.internalFiles[0].id).toEqual("fileUploadIdentification1");
                expect(directiveScope.internalFiles[1].data).toEqual("test");
                expect(directiveScope.internalFiles[1].extension).toEqual(".incredible");
                expect(directiveScope.internalFiles[1].id).toEqual("fileUploadIdentification2");
                expect(directiveScope.internalFiles[2].data).toEqual("test");
                expect(directiveScope.internalFiles[2].extension).toEqual(".incredible");
                expect(directiveScope.internalFiles[2].id).toEqual("fileUploadIdentification3");
                expect(directiveScope.internalFiles[3].data).toEqual("test");
                expect(directiveScope.internalFiles[3].extension).toEqual(".incredible");
                expect(directiveScope.internalFiles[3].id).toEqual("fileUploadIdentification4");
                expect(directiveScope.files[0].data).toEqual("test");
                expect(directiveScope.files[0].extension).toEqual(".loust");
                expect(directiveScope.files[0].id).toEqual("fileUploadIdentification1");
                expect(directiveScope.files[1].data).toEqual("test");
                expect(directiveScope.files[1].extension).toEqual(".incredible");
                expect(directiveScope.files[1].id).toEqual("fileUploadIdentification2");
                expect(directiveScope.files[2].data).toEqual("test");
                expect(directiveScope.files[2].extension).toEqual(".incredible");
                expect(directiveScope.files[2].id).toEqual("fileUploadIdentification3");
                expect(directiveScope.files[3].data).toEqual("test");
                expect(directiveScope.files[3].extension).toEqual(".incredible");
                expect(directiveScope.files[3].id).toEqual("fileUploadIdentification4");
            }
        );

        it("test processDelete correctly removes ids",
            () => {
                directiveScope.internalFiles[0].data = "test";
                directiveScope.internalFiles[0].extension = ".loust";
                let newFile2: HCTRA.Model.IHctraFile = {
                    data: null,
                    extension: null,
                    id: "fileUploadIdentification2"
                };
                directiveScope.internalFiles.push(newFile2);
                expect(directiveScope.internalFiles.length).toEqual(2);
                directiveScope.files[0] = directiveScope.internalFiles[0];
                expect(directiveScope.files.length).toEqual(1);

                directiveScope.processDelete("fileUploadIdentification1");

                expect(directiveScope.internalFiles.length).toEqual(1);
                expect(directiveScope.files.length).toEqual(0);
                expect(directiveScope.internalFiles[0].data).toBeNull();
                expect(directiveScope.internalFiles[0].extension).toBeNull();
                expect(directiveScope.internalFiles[0].id).toEqual("fileUploadIdentification2");
            }
        );

    });
}());