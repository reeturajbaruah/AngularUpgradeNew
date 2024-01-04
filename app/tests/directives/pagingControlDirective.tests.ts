(function (): void {
    "use strict";

    describe("directive: paging-control", () => {

        beforeEach(angular.mock.module("HCTRATemplates"));
        beforeEach(angular.mock.module("HCTRAModule"));

        let scope,
            directiveScope,
            inState = {};


        beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {
            $provide.value("validationService", () => { return {}; });
            $provide.value("$state", hctraMocks.$state(inState));
            $provide.value("stateNames", hctraMocks.stateNames());
        }));

        beforeEach(angular.mock.inject(($rootScope: angular.IRootScopeService,
            $templateCache: angular.ITemplateCacheService,
            $compile: angular.ICompileService) => {

            scope = $rootScope.$new();
            scope.form = {};
            scope.pagingObject = {
                currentPage: 0,
                numberOfPages: 0,
                pageSize: ""
            };
            // scope.userInputData = { visiblePageNumber: (scope.data.currentPage) + 1 };
            scope.search = () => {
                scope.itWorked = true;
            };

            $templateCache.put("/app/directives/pagingControlTemplate.html",
                $templateCache.get("app/directives/pagingControlTemplate.html"));
            let element: angular.IAugmentedJQuery = angular.element("<form name=\"form\">" +
                "<paging-control data=\"pagingObject\" search-function=\"search()\" form=\"form\">" +
                "</paging-control>" +
                "</form>");
            $compile(element)(scope);
            scope.$digest();

            directiveScope = (<angular.IAugmentedJQuery>element.children()).isolateScope();
        }));
        //todo: add unit test for watch of paging size

        it("ensure that visible page number variable has loaded correctly", () => {
            expect(directiveScope.userInputData.visiblePageNumber).toBe(1);
        });

        it("test lastPage functionality", () => {
            directiveScope.data.currentPage = 0;
            directiveScope.data.numberOfPages = 1;
            scope.itWorked = false;

            directiveScope.lastPage();

            expect(scope.itWorked).toBeFalsy();

            directiveScope.data.currentPage = 0;
            directiveScope.data.numberOfPages = 2;
            scope.itWorked = false;

            directiveScope.lastPage();

            expect(scope.itWorked).toBeTruthy();

        });

        it("test firstPage functionality", () => {
            directiveScope.data.currentPage = 0;
            scope.itWorked = false;

            directiveScope.firstPage();

            expect(scope.itWorked).toBeFalsy();

            directiveScope.data.currentPage = 1;
            scope.itWorked = false;

            directiveScope.firstPage();

            expect(scope.itWorked).toBeTruthy();
        });

        it("test manual update of page number (check currentVisiblePageNumber validation)", () => {
            directiveScope.data.numberOfPages = 2;

            directiveScope.userInputData.visiblePageNumber = 0;
            directiveScope.$digest();
            scope.itWorked = false;

            directiveScope.manualPageUpdate();
            expect(scope.itWorked).toBeFalsy();

            directiveScope.userInputData.visiblePageNumber = "";
            directiveScope.$digest();
            scope.itWorked = false;

            directiveScope.manualPageUpdate();
            expect(scope.itWorked).toBeFalsy();

            directiveScope.userInputData.visiblePageNumber = 3;
            directiveScope.$digest();
            scope.itWorked = false;

            directiveScope.manualPageUpdate();
            expect(scope.itWorked).toBeFalsy();

            directiveScope.userInputData.visiblePageNumber = 1;
            directiveScope.$digest();
            scope.itWorked = false;

            directiveScope.manualPageUpdate();
            expect(scope.itWorked).toBeTruthy();
        });
    });
} ());