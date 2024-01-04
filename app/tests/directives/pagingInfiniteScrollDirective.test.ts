(function (): void {
    "use strict";

    describe("directive: paging infinite scroll", () => {

        beforeEach(angular.mock.module("HCTRATemplates"));
        beforeEach(angular.mock.module("HCTRAModule"));

        let scope,
            directiveScope,

            inState: { statePath: string };


        beforeEach(angular.mock.module(() => {
            inState = {
                statePath: ""
            };
        }));

        beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {
            $provide.value("$state", hctraMocks.$state(inState));
            $provide.value("stateNames", hctraMocks.stateNames());
        }));

        beforeEach(angular.mock.inject(($rootScope: angular.IRootScopeService,
            $templateCache: angular.ITemplateCacheService,
            $compile: angular.ICompileService) => {

            scope = $rootScope.$new();

            $templateCache.put("/app/directives/pagingInfiniteScrollTemplate.html",
                $templateCache.get("app/directives/pagingInfiniteScrollTemplate.html"));
            let el: angular.IAugmentedJQuery = angular.element("<paging-infinite-scroll search=\"triggerPureSearchInChildState()\" " +
                "infinite-scroll-is-disabled=\"endOfDataReached || virtualScrollisPaused || isDesktop\" " +
                "title-type=\"titleType\" form=\"searchForm\" navigation-urls=\"navigationUrls\" " +
                "total-items=\"totalItems\" article-array=\"articleArray\" paging-object=\"pagingObject\" " +
                "title-id=\"search-results\" archive-type-checker=\"archiveTypeChecker\" " +
                "article-not-found-text=\"articleNotFoundText\" mobile-search=\"performSearch()\">" +
                "</paging-infinite-scroll>");
            $compile(el)(scope);
            scope.$digest();

            directiveScope = el.isolateScope();
        }));


        it("should be defined", () => {
            scope.totalItems = 1;
            scope.$digest();

            expect(directiveScope).toBeDefined();
        });

        it("should have articles when articles equals one", () => {
            scope.totalItems = 1;
            scope.$digest();

            expect(directiveScope.hasArticles).toBeTruthy();
        });

        it("should not have articles when articles equals zero", () => {
            scope.totalItems = 0;
            scope.$digest();

            expect(directiveScope.hasArticles).toBeFalsy();
        });
    });

} ());