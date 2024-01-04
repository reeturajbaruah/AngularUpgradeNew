declare var hctraMocks: any;

(function () {
    "use strict";

    describe("rssService", function () {

        beforeEach(angular.mock.module("HCTRAModule"));

        var service: HCTRA.Service.RssService,
            routes: HCTRA.Constant.IRoutes,
            documentLocationService: HCTRA.Service.IDocumentLocationService,
            $rootScope: angular.IRootScopeService,
            hrefUrl: any;


        beforeEach(function () {
            hrefUrl = {};
        });

        beforeEach(angular.mock.module(function ($provide: angular.auto.IProvideService) {
            $provide.constant("environmentConfig", hctraMocks.environmentConfig());
            $provide.value("documentLocationService", hctraMocks.documentLocationService(hrefUrl));
        }));

        beforeEach(angular.mock.inject(function ($injector: angular.auto.IInjectorService) {
            service = $injector.get<HCTRA.Service.RssService>("rssService");
        }));

        beforeEach(angular.mock.inject(function (_$rootScope_: angular.IRootScopeService, _documentLocationService_: any, _routes_: any) {
            $rootScope = _$rootScope_;
            documentLocationService = _documentLocationService_;
            routes = _routes_;

            spyOn(documentLocationService, "goToHref").and.callFake(hctraMocks.documentLocationService(hrefUrl).goToHref);
        }));


        it("should call documentLocationService when id is found closures", function () {
            service.goToRssFeed(service.rssHomeClosuresKey);
            expect(documentLocationService.goToHref).toHaveBeenCalled();
            expect(hrefUrl.value).toBe(routes.rssFeed + "closures");
        });

        it("should call documentLocationService when id is found news", function () {
            service.goToRssFeed(service.rssLatestNewsKey);
            expect(documentLocationService.goToHref).toHaveBeenCalled();
            expect(hrefUrl.value).toBe(routes.rssFeed + "news");
        });

        it("should call documentLocationService when id is found custom", function () {
            service.goToRssFeed(service.rssMajorClosuresKey);
            expect(documentLocationService.goToHref).toHaveBeenCalled();
            expect(hrefUrl.value).toBe(routes.rssFeed + "customClosures");
        });

        it("should not call documentLocationService when id is not found", function () {
            service.goToRssFeed("");
            expect(documentLocationService.goToHref).not.toHaveBeenCalled();
            expect(hrefUrl.value).toBeUndefined();
        });

        it("should return a promise during rss link injection call", function () {
            let rssPromise = service.injectRssData();
            let rssArray: string[];
            rssPromise.then(function (result: string[]) {
                rssArray = result
            });
            $rootScope.$digest();

            expect(rssArray.length).toBe(4);
            for (let i = 0; i < rssArray.length; i++) {
                expect(rssArray[i]).toMatch(/^\/rss\/.*$/);
            }
        });

    });
} ());