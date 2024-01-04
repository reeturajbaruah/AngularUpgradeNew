(function (): void {
    "use strict";

    describe("directive: home-news", () => {

        beforeEach(angular.mock.module("HCTRATemplates"));
        beforeEach(angular.mock.module("HCTRAModule"));

        let scope,
            directiveScope,
            routes,
            mockWindow,
            mockRssService;


        beforeEach(angular.mock.module(() => {
            mockWindow = {
                open: (z) => z
            };
            mockRssService = {
                rssHomeNewsKey: "fake home news key",
                goToRssFeed: (z) => z
            };
        }));

        beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {
            $provide.value("cmsUtilService", {});
            $provide.value("AuthService", {});
            $provide.value("AUTH_EVENTS", {});
            $provide.value("marketingImageService", {});
            $provide.value("$window", mockWindow);
            $provide.value("rssService", mockRssService);
        }));

        beforeEach(angular.mock.inject(($rootScope: angular.IRootScopeService,
            $templateCache: angular.ITemplateCacheService,
            $compile: angular.ICompileService,
            _routes_) => {

            scope = $rootScope.$new();
            routes = _routes_;

            $templateCache.put("/app/directives/home/homeNewsTemplate.html",
                $templateCache.get("app/directives/home/homeNewsTemplate.html"));
            let el: angular.IAugmentedJQuery = angular.element("<home-news></home-news>");
            $compile(el)(scope);
            scope.$digest();

            directiveScope = el.isolateScope();
        }));




        describe("canary", () => {

            it("should pass", () => {

                expect(true).toBe(true);
            });
        });

        describe("goToRssFeedNews", () => {
            
            it("should navigate to the RSS feed", () => {

                spyOn(mockRssService, "goToRssFeed").and.returnValue(null);

                directiveScope.goToRssFeedNews();

                expect(mockRssService.goToRssFeed).toHaveBeenCalledWith("fake home news key");
                expect(mockRssService.goToRssFeed).toHaveBeenCalledTimes(1);
            });
        });

        describe("goToNewsArticle", () => {

            it("should open a new page using the articleId provided", () => {

                spyOn(mockWindow, "open").and.returnValue(null);
                routes.newsFeed = "fakeNewsFeedRoute";

                directiveScope.goToNewsArticle("fakeArticleId");

                expect(mockWindow.open).toHaveBeenCalledWith("fakeNewsFeedRoute#fakeArticleId", "_blank");
                expect(mockWindow.open).toHaveBeenCalledTimes(1);
            });
        });
    });
}());