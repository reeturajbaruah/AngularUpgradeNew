module HCTRA.Controller {
    export class HomeClosuresController {
        static $inject = [
            '$location',
            'routes',
            'cmsUtilService',
            'AuthService',
            'marketingImageService',
            'rssService',
            "$window",
            'momentService',
            'genericRepo',
            'stringUtilsService',
            '$rootScope',
            'AUTH_EVENTS',
            'APP_LIFECYCLE_EVENTS'
        ];
        constructor(
            private $location,
            private routes,
            private cmsUtilService,
            private AuthService,
            private marketingImageService,
            private rssService,
            private $window,
            private momentService,
            private genericRepo,
            private stringUtilsService,
            private $rootScope,
            private AUTH_EVENTS,
            private APP_LIFECYCLE_EVENTS
        ) { }
        public maxSegments = 10000; // 10000 is basically unlimited
        public shownClosures = [];
        public shownMarketingImages = [];
        public imageObj;

        public closures: any;
        public marketingImages: any;
        public closureTitle: any;
        public showRSSClosure: any;

        public destroyLogoutSuccessListener = this.$rootScope.$on(this.AUTH_EVENTS.logoutSuccess, () => {
            this.useImagesByLoggedInState();
        });
        public destroySessionTimedOutListener = this.$rootScope.$on(this.AUTH_EVENTS.sessionTimedOut, () => {
            this.useImagesByLoggedInState();
        });
        public destroySecurityIssueListener = this.$rootScope.$on(this.AUTH_EVENTS.securityIssue, () => {
            this.useImagesByLoggedInState();
        });
        public destroySetNavBarLoginListener = this.$rootScope.$on(this.APP_LIFECYCLE_EVENTS.setNavBarLogin, () => {
            this.useImagesByLoggedInState();
        });
        public destroyRestoredUserStateListener = this.$rootScope.$on(this.APP_LIFECYCLE_EVENTS.restoredUserState, () => {
            this.useImagesByLoggedInState();
        });


        public $postLink = () => {
            if (this.closures) {
                const c = this.closures;
                let segmentCount = 0;

                for (const x of c) {
                    let segmentAddValue = 1; // the text itself counts as a segment

                    x.image = this.cmsUtilService.generateFileSrc(x.Image);
                    x.alt = this.cmsUtilService.parseAltText(x.Image);
                    x.closureDates = this.momentService.moment(x.StartDate, 'YYYYMMDD').format('MMMM DD, YYYY');
                    if (x.EndDate) {
                        x.closureDates = x.closureDates + " - " + this.momentService.moment(x.EndDate, 'YYYYMMDD').format('MMMM DD, YYYY');
                    }

                    if (x.image) // images count as two other segments
                        segmentAddValue += 2;

                    if ((segmentCount + segmentAddValue) <= this.maxSegments) { // Lane closures not overflowing
                        this.shownClosures.push(x);
                        segmentCount += segmentAddValue;
                    }
                    else // No room for more closures
                        break;
                }
            }

            if (this.closures && this.marketingImages) {
                //initialize object
                this.imageObj = angular.copy(this.marketingImageService.processImagesToObj(this.marketingImages));
                //check for Transtar
                if (angular.isDefined(this.closures) && this.closures.length > 0 && this.closures[0].Title === "Transtar Map") {
                    this.imageObj.startIndex = 1;
                }
                //set max articles before no images
                this.imageObj.articles = this.closures.length;
                this.imageObj.maxArticles = this.imageObj.startIndex + 2;
                this.imageObj.maxSmall = 2;
                //check login state

            }

            this.useImagesByLoggedInState();
            this.updateClosureTitle();
        };

        public goToClosureArticle = (articleID) => {
            this.$window.open(this.routes.closures + "#" + articleID, "_blank");
        };

        public goToUrl = (imageURL) => {
            this.$location.url(imageURL);
        };
        
        public goToRssFeedClosures = () => {
            this.rssService.goToRssFeed(this.rssService.rssMajorClosuresKey);
        };
        
        
        public updateClosureTitle = () => {
            this.genericRepo.dataFactory.getCmsPageById({
                ItemId: this.routes.majorClosureSection
            }).then(this.parseClosureTitle);
        };
        
        public parseClosureTitle = (response) => {
            const parsedRes = angular.fromJson(response.cmsResponse);
            this.closureTitle = parsedRes.ShortDescription;
        
            const paramObjs = this.stringUtilsService.getParameterObject(parsedRes.Parameters);
            if (paramObjs.isRSSshow === "true") {
                this.showRSSClosure = true;
            }
        };

        public useImagesByLoggedInState = () => {
            this.shownMarketingImages = [];
            if (this.AuthService.isAuthenticated()) {
                this.shownMarketingImages = this.marketingImageService.setImages('logIn', this.imageObj);
            } else {
                this.shownMarketingImages = this.marketingImageService.setImages('logOut', this.imageObj);
            }
        };

        public $onDestroy = () => {
            this.destroyLogoutSuccessListener();

            this.destroySessionTimedOutListener();

            this.destroySecurityIssueListener();

            this.destroySetNavBarLoginListener();

            this.destroyRestoredUserStateListener();

        };
    }
}

(() => {
    'use strict';

    angular.module('HCTRAModule').component("homeClosures", {
        templateUrl: '/app/directives/home/homeClosuresTemplate.html',
        bindings: {
            closures: "=",
            marketingImages: "="
        },
        controller: HCTRA.Controller.HomeClosuresController
    });
})();