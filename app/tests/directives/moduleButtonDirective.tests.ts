(function (): void {
    "use strict";

    describe("directive: module-button", () => {

        beforeEach(angular.mock.module("HCTRATemplates"));
        beforeEach(angular.mock.module("HCTRAModule"));

        let scope,
            directiveHtml,
            onModuleClickFuncCalled,
            recompileDirective;


        beforeEach(angular.mock.inject(($rootScope: angular.IRootScopeService,
            $templateCache: angular.ITemplateCacheService,
            $compile: angular.ICompileService) => {

            onModuleClickFuncCalled = false;
            scope = $rootScope.$new();
            scope.onModuleClickFunc = () => onModuleClickFuncCalled = true;

            $templateCache.put("/app/directives/moduleButtonTemplate.html",
                $templateCache.get("app/directives/moduleButtonTemplate.html"));

            recompileDirective = () => {
                directiveHtml = angular.element("<module-button on-module-click='onModuleClickFunc()'>Some Content</module-button>");
                $compile(directiveHtml)(scope);
                scope.$digest();
            };

            recompileDirective();
        }));


        it("canary", () => {
            expect(true).toBe(true);
        });

        it("should call onModuleClickFunc when module is clicked", () => {

            expect(onModuleClickFuncCalled).toBeFalsy();

            directiveHtml.children()[0].click();

            expect(onModuleClickFuncCalled).toBeTruthy();
        });

        it("should retain content inside the directive tags", () => {

            expect(directiveHtml.children().first().children()[0].outerText).toBe("Some Content");
        });
    });
        
}());