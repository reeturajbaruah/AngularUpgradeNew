(function (): void {
    "use strict";

    describe("directive: file-upload", () => {

        beforeEach(angular.mock.module("HCTRATemplates"));
        beforeEach(angular.mock.module("HCTRAModule"));

        let scope,
            directiveScope,
            validationObj: {};
        let deleteFlag: Boolean = false;
        let deleteId: string = null;
        //let updateFlag: Boolean = false;
        let timeoutService: angular.ITimeoutService;


        beforeEach(angular.mock.module(() => {
            validationObj = {};
            deleteFlag = false;
            deleteId = null;
            //updateFlag = false;
        }));

        beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {
            $provide.value("validationService", hctraMocks.validationService(validationObj));
        }));

        describe('process delete, update func, id and shouldShowDelete Func all have values',
            () => {
                beforeEach(angular.mock.inject(($rootScope: angular.IRootScopeService,
                    $compile: angular.ICompileService,
                    $templateCache: angular.ITemplateCacheService,
                    $timeout: angular.ITimeoutService) => {
                    timeoutService = $timeout;
                    scope = $rootScope.$new();
                    scope.form = {};
                    scope.details = {
                        validations: {
                            FileUploadSize: 20,
                            FileMaxUploads: 4,
                            FileExtensions: [".pdf",".png"],
                            FieldValidationMessage: "invalid file type",
                            FieldRequiredValidationMessage: "size to large"
                        },
                        file: {
                            data: null,
                            extension: null,
                            id: "fileId1"
                        },
                        shouldShowDelete: true,
                        processDelete: (id: string) => {
                            deleteFlag = true;
                            deleteId = id;
                        },
                        updateFunc: () => {
                            //updateFlag = true;
                        }
                    };

                    $templateCache.put("/app/directives/fileUploadTemplate.html",
                        $templateCache.get("app/directives/fileUploadTemplate.html"));
                    let el: angular.IAugmentedJQuery = angular.element("<form name=\"form\">" +
                        "<file-upload id=\"details.file.id\" validations=\"details.validations\" file=\"details.file\" form=\"form\" should-show-delete=\"details.shouldShowDelete\" " +
                        "on-delete=\"details.processDelete\" on-update=\"details.updateFunc()\"></file-upload>" +
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
                    expect(scope.details.validations.FileExtensions).toEqual([".pdf", ".png"]);
                    expect(scope.details.validations.FieldValidationMessage).toEqual("invalid file type");
                    expect(scope.details.validations.FieldRequiredValidationMessage).toEqual("size to large");
                    expect(scope.details.file.data).toBe(null);
                    expect(scope.details.file.extension).toBe(null);
                    expect(scope.details.file.id).toBe("fileId1");
                    expect(scope.details.shouldShowDelete).toBeTruthy();
                    expect(scope.details.processDelete).toBeDefined();
                    expect(scope.details.updateFunc).toBeDefined();
                });

                it("test directive scope", () => {
                    expect(directiveScope.showTypeValidationMessage).toBeFalsy();
                    expect(directiveScope.showSizeValidationMessage).toBeFalsy();
                    expect(directiveScope.showDeleteButton).toBeFalsy();
                    expect(directiveScope.id).toEqual("fileId1");
                    expect(directiveScope.fileName).toEqual("");
                    expect(directiveScope.validation).toEqual("Uses validationService");
                    expect(directiveScope.submitFile).toBeDefined();
                    expect(directiveScope.onDelete).toBeDefined();
                    expect(directiveScope.deleteFunc).toBeDefined();
                    expect(directiveScope.updateFunc).toBeDefined();
                }); 

                it("test submit file with blank file", () => {
                    directiveScope.submitFile(null);
                    expect(directiveScope.showTypeValidationMessage).toBeFalsy();
                    expect(directiveScope.showSizeValidationMessage).toBeFalsy();
                    expect(directiveScope.showDeleteButton).toBeFalsy();
                    expect(directiveScope.id).toEqual("fileId1");
                    expect(directiveScope.fileName).toEqual("");
                    expect(directiveScope.validation).toEqual("Uses validationService");
                    expect(directiveScope.submitFile).toBeDefined();
                    expect(directiveScope.onDelete).toBeDefined();
                    expect(directiveScope.updateFunc).toBeDefined();

                    directiveScope.submitFile("");
                    expect(directiveScope.showTypeValidationMessage).toBeFalsy();
                    expect(directiveScope.showSizeValidationMessage).toBeFalsy();
                    expect(directiveScope.showDeleteButton).toBeFalsy();
                    expect(directiveScope.id).toEqual("fileId1");
                    expect(directiveScope.fileName).toEqual("");
                    expect(directiveScope.validation).toEqual("Uses validationService");
                    expect(directiveScope.submitFile).toBeDefined();
                    expect(directiveScope.onDelete).toBeDefined();
                    expect(directiveScope.updateFunc).toBeDefined();

                    directiveScope.submitFile(undefined);
                    expect(directiveScope.showTypeValidationMessage).toBeFalsy();
                    expect(directiveScope.showSizeValidationMessage).toBeFalsy();
                    expect(directiveScope.showDeleteButton).toBeFalsy();
                    expect(directiveScope.id).toEqual("fileId1");
                    expect(directiveScope.fileName).toEqual("");
                    expect(directiveScope.validation).toEqual("Uses validationService");
                    expect(directiveScope.submitFile).toBeDefined();
                    expect(directiveScope.onDelete).toBeDefined();
                    expect(directiveScope.updateFunc).toBeDefined();

                    directiveScope.submitFile();
                    expect(directiveScope.showTypeValidationMessage).toBeFalsy();
                    expect(directiveScope.showSizeValidationMessage).toBeFalsy();
                    expect(directiveScope.showDeleteButton).toBeFalsy();
                    expect(directiveScope.id).toEqual("fileId1");
                    expect(directiveScope.fileName).toEqual("");
                    expect(directiveScope.validation).toEqual("Uses validationService");
                    expect(directiveScope.submitFile).toBeDefined();
                    expect(directiveScope.onDelete).toBeDefined();
                    expect(directiveScope.updateFunc).toBeDefined();
                });

                it("test submit file with filled invalid file extension", () => {
                    directiveScope.submitFile({name: "test.zzz"});

                    expect(directiveScope.showDeleteButton).toBeTruthy();
                    expect(directiveScope.fileName).toEqual("test.zzz");
                    expect(directiveScope.showSizeValidationMessage).toBeFalsy();
                    expect(directiveScope.showTypeValidationMessage).toBeTruthy();
                    expect(directiveScope.file.data).toBeNull();
                    expect(directiveScope.file.extension).toBeNull();
                    expect(directiveScope.form.fileId1.$valid).toBeFalsy();
                });

                it("test submit file with filled invalid (blank) file extension", () => {
                    directiveScope.submitFile({ name: "testz" });

                    expect(directiveScope.showDeleteButton).toBeTruthy();
                    expect(directiveScope.fileName).toEqual("testz");
                    expect(directiveScope.showSizeValidationMessage).toBeFalsy();
                    expect(directiveScope.showTypeValidationMessage).toBeTruthy();
                    expect(directiveScope.file.data).toBeNull();
                    expect(directiveScope.file.extension).toBeNull();
                    expect(directiveScope.form.fileId1.$valid).toBeFalsy();
                });

                it("test submit file with filled valid file extension and invalid file size", () => {
                    directiveScope.submitFile({ name: "test.pdf", size: 99999999999999999 });

                    expect(directiveScope.showDeleteButton).toBeTruthy();
                    expect(directiveScope.fileName).toEqual("test.pdf");
                    expect(directiveScope.showSizeValidationMessage).toBeTruthy();
                    expect(directiveScope.showTypeValidationMessage).toBeFalsy();
                    expect(directiveScope.file.data).toBeNull();
                    expect(directiveScope.file.extension).toBeNull();
                    expect(directiveScope.form.fileId1.$valid).toBeFalsy();
                });

                it("test submit file with filled valid file extension and valid file size",  () => {
                    let fileOptions: FilePropertyBag = {
                        type: "application/pdf",
                        lastModified: new Date().getTime()
                    };
                    let file: File = new File(["test", "test", "test"], "test.pdf", fileOptions);
                    directiveScope.submitFile(file);
                    expect(directiveScope.showDeleteButton).toBeTruthy();
                    expect(directiveScope.fileName).toEqual("test.pdf");
                    expect(directiveScope.showSizeValidationMessage).toBeFalsy();
                    expect(directiveScope.showTypeValidationMessage).toBeFalsy();
                    expect(directiveScope.form.fileId1.$valid).toBeTruthy();
                    //TODO: need to find way to verify file.data, file.extension and updateFunc were set/called
                });

                it("test deletion",
                    () => {
                        directiveScope.onDelete();
                        expect(directiveScope.form.fileId1.$valid).toBeTruthy();
                        expect(directiveScope.file.data).toBeNull();
                        expect(directiveScope.file.extension).toBeNull();
                        expect(deleteFlag).toBeTruthy();
                        expect(deleteId).toEqual("fileId1");
                    });
            });

        describe('process delete, update func, id and shouldShowDelete Func have NO values',
            () => {
                beforeEach(angular.mock.inject(($rootScope: angular.IRootScopeService,
                    $compile: angular.ICompileService,
                    $templateCache: angular.ITemplateCacheService,
                    $timeout: angular.ITimeoutService) => {
                    timeoutService = $timeout;
                    scope = $rootScope.$new();
                    scope.form = {};
                    scope.details = {
                        validations: {
                            FileUploadSize: 20,
                            FileMaxUploads: 4,
                            FileExtensions: [".pdf", ".png"],
                            FieldValidationMessage: "invalid file type",
                            FieldRequiredValidationMessage: "size to large"
                        },
                        file: {
                            data: null,
                            extension: null
                        }
                    };

                    $templateCache.put("/app/directives/fileUploadTemplate.html",
                        $templateCache.get("app/directives/fileUploadTemplate.html"));
                    let el: angular.IAugmentedJQuery = angular.element("<form name=\"form\">" +
                        "<file-upload validations=\"details.validations\" file=\"details.file\" form=\"form\" " +
                        "></file-upload>" +
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
                    expect(scope.details.validations.FileExtensions).toEqual([".pdf", ".png"]);
                    expect(scope.details.validations.FieldValidationMessage).toEqual("invalid file type");
                    expect(scope.details.validations.FieldRequiredValidationMessage).toEqual("size to large");
                    expect(scope.details.file.data).toBe(null);
                    expect(scope.details.file.extension).toBe(null);
                    expect(scope.details.file.id).toBeUndefined();
                    expect(scope.details.shouldShowDelete).toBeUndefined();
                    expect(scope.details.processDelete).toBeUndefined();
                    expect(scope.details.updateFunc).toBeUndefined();
                });

                it("test directive scope", () => {
                    expect(directiveScope.showTypeValidationMessage).toBeFalsy();
                    expect(directiveScope.showSizeValidationMessage).toBeFalsy();
                    expect(directiveScope.showDeleteButton).toBeFalsy();
                    expect(directiveScope.id).toEqual("fileUploadIdentifier0");
                    expect(directiveScope.fileName).toEqual("");
                    expect(directiveScope.validation).toEqual("Uses validationService");
                    expect(directiveScope.deleteFunc).toBeUndefined();
                    expect(directiveScope.submitFile).toBeDefined();
                    expect(directiveScope.onDelete).toBeDefined();
                    expect(directiveScope.updateFunc).toBeUndefined();
                });

                it("test submit file with blank file", () => {
                    directiveScope.submitFile(null);
                    expect(directiveScope.showTypeValidationMessage).toBeFalsy();
                    expect(directiveScope.showSizeValidationMessage).toBeFalsy();
                    expect(directiveScope.showDeleteButton).toBeFalsy();
                    expect(directiveScope.id).toEqual("fileUploadIdentifier0");
                    expect(directiveScope.fileName).toEqual("");
                    expect(directiveScope.validation).toEqual("Uses validationService");
                    expect(directiveScope.deleteFunc).toBeUndefined();
                    expect(directiveScope.submitFile).toBeDefined();
                    expect(directiveScope.onDelete).toBeDefined();
                    expect(directiveScope.updateFunc).toBeUndefined();

                    directiveScope.submitFile("");
                    expect(directiveScope.showTypeValidationMessage).toBeFalsy();
                    expect(directiveScope.showSizeValidationMessage).toBeFalsy();
                    expect(directiveScope.showDeleteButton).toBeFalsy();
                    expect(directiveScope.id).toEqual("fileUploadIdentifier0");
                    expect(directiveScope.fileName).toEqual("");
                    expect(directiveScope.validation).toEqual("Uses validationService");
                    expect(directiveScope.deleteFunc).toBeUndefined();
                    expect(directiveScope.submitFile).toBeDefined();
                    expect(directiveScope.onDelete).toBeDefined();
                    expect(directiveScope.updateFunc).toBeUndefined();

                    directiveScope.submitFile(undefined);
                    expect(directiveScope.showTypeValidationMessage).toBeFalsy();
                    expect(directiveScope.showSizeValidationMessage).toBeFalsy();
                    expect(directiveScope.showDeleteButton).toBeFalsy();
                    expect(directiveScope.id).toEqual("fileUploadIdentifier0");
                    expect(directiveScope.fileName).toEqual("");
                    expect(directiveScope.validation).toEqual("Uses validationService");
                    expect(directiveScope.deleteFunc).toBeUndefined();
                    expect(directiveScope.submitFile).toBeDefined();
                    expect(directiveScope.onDelete).toBeDefined();
                    expect(directiveScope.updateFunc).toBeUndefined();

                    directiveScope.submitFile();
                    expect(directiveScope.showTypeValidationMessage).toBeFalsy();
                    expect(directiveScope.showSizeValidationMessage).toBeFalsy();
                    expect(directiveScope.showDeleteButton).toBeFalsy();
                    expect(directiveScope.id).toEqual("fileUploadIdentifier0");
                    expect(directiveScope.fileName).toEqual("");
                    expect(directiveScope.validation).toEqual("Uses validationService");
                    expect(directiveScope.deleteFunc).toBeUndefined();
                    expect(directiveScope.submitFile).toBeDefined();
                    expect(directiveScope.onDelete).toBeDefined();
                    expect(directiveScope.updateFunc).toBeUndefined();
                });

                it("test submit file with filled invalid file extension", () => {
                    directiveScope.submitFile({ name: "test.zzz" });

                    expect(directiveScope.showDeleteButton).toBeFalsy();
                    expect(directiveScope.fileName).toEqual("test.zzz");
                    expect(directiveScope.showSizeValidationMessage).toBeFalsy();
                    expect(directiveScope.showTypeValidationMessage).toBeTruthy();
                    expect(directiveScope.file.data).toBeNull();
                    expect(directiveScope.file.extension).toBeNull();
                    expect(directiveScope.form.fileUploadIdentifier0.$valid).toBeFalsy();
                });

                it("test submit file with filled valid file extension and invalid file size", () => {
                    directiveScope.submitFile({ name: "test.pdf", size: 99999999999999999 });

                    expect(directiveScope.showDeleteButton).toBeFalsy();
                    expect(directiveScope.fileName).toEqual("test.pdf");
                    expect(directiveScope.showSizeValidationMessage).toBeTruthy();
                    expect(directiveScope.showTypeValidationMessage).toBeFalsy();
                    expect(directiveScope.file.data).toBeNull();
                    expect(directiveScope.file.extension).toBeNull();
                    expect(directiveScope.form.fileUploadIdentifier0.$valid).toBeFalsy();
                });

                it("test submit file with filled valid file extension and valid file size", () => {
                    let fileOptions: FilePropertyBag = {
                        type: "application/pdf",
                        lastModified: new Date().getTime()
                    };
                    let file: File = new File(["test", "test", "test"], "test.pdf", fileOptions);
                    directiveScope.submitFile(file);
                    expect(directiveScope.showDeleteButton).toBeFalsy();
                    expect(directiveScope.fileName).toEqual("test.pdf");
                    expect(directiveScope.showSizeValidationMessage).toBeFalsy();
                    expect(directiveScope.showTypeValidationMessage).toBeFalsy();
                    expect(directiveScope.form.fileUploadIdentifier0.$valid).toBeTruthy();
                    //TODO: need to find way to verify file.data, file.extension and updateFunc were set/called
                });

                it("test deletion",
                    () => {
                        expect(() => {directiveScope.onDelete()}).toThrow();
                        expect(directiveScope.form.fileUploadIdentifier0.$valid).toBeTruthy();
                        expect(directiveScope.file.data).toBeNull();
                        expect(directiveScope.file.extension).toBeNull();
                        expect(deleteFlag).toBeFalsy();
                        expect(deleteId).toBeNull();
                    });
            });
    });
}());