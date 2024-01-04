(() => {
    'use strict'

    describe('CreateAccountFromViolationsBillingInfoController', () => {
        let $location;
        let routes;
        let cmsUtilService;
        let AuthService;
        let marketingImageService;
        let rssService;
        let $window;
        let momentService;
        let genericRepo;
        let stringUtils;
        let $rootScope;
        let AUTH_EVENTS;
        let APP_LIFECYCLE_EVENTS;

        let $q;
        
        let component;

        beforeEach(angular.mock.module('HCTRAModule'));

        beforeEach(angular.mock.inject(($injector) => {
            $q = $injector.get("replacementQService");
            
            $location = $injector.get("$location");
            routes = $injector.get("routes");
            cmsUtilService = jasmine.createSpyObj("cmsUtilService", ["generateFileSrc"]);
            AuthService = jasmine.createSpyObj("AuthService", ["isAuthenticated"]);
            marketingImageService = jasmine.createSpyObj("marketingImageService", ["processImagesToObj", "setImages"]);
            rssService = jasmine.createSpyObj("rssService", ["goToRssFeed"]);
            $window = jasmine.createSpyObj("$window", ["open"]);
            momentService = $injector.get("momentService");
            genericRepo = { dataFactory: jasmine.createSpyObj("dataFactory", ["getCmsPageById"]) };
            stringUtils = jasmine.createSpyObj("stringUtilsService", ["getParameterObject"]);
            $rootScope = $injector.get("$rootScope");
            AUTH_EVENTS = $injector.get("AUTH_EVENTS");
            APP_LIFECYCLE_EVENTS = $injector.get("APP_LIFECYCLE_EVENTS");


            genericRepo.dataFactory.getCmsPageById.and.callFake(() => $q.defer().promise);

            component = new HCTRA.Controller.HomeClosuresController(
                $location,
                routes,
                cmsUtilService,
                AuthService,
                marketingImageService,
                rssService,
                $window,
                momentService,
                genericRepo,
                stringUtils,
                $rootScope,
                AUTH_EVENTS,
                APP_LIFECYCLE_EVENTS
            );

        }));

        it("should navigate to the RSS feed", () => {
            component.goToRssFeedClosures();
            expect(rssService.goToRssFeed).toHaveBeenCalledTimes(1);
        });


        it("should grab closure data from CMS with genericRepo", () => {
            component.updateClosureTitle();
            expect(genericRepo.dataFactory.getCmsPageById).toHaveBeenCalledTimes(1);

        });


        it("data from genericRepo should parse correctly from res", () => {
            //component.showRSSClosure;
            const res = { "errors": [], "cmsResponse": "{ \"Parameters\":\"isRSSshow=false\",\"ShortDescription\":\"Tolls Waived\"}" };
            stringUtils.getParameterObject.and.returnValue({ isRSSshow : "true"});
            component.parseClosureTitle(res);
            expect(component.showRSSClosure).toEqual(true);
        });

    });


})();