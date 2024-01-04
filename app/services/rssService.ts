module HCTRA.Service {
    "use strict";

    export interface IRssService {
        goToRssFeed(locationId: string): void;
    }


    export class RssService implements IRssService {
        rssHomeClosuresKey: string;
        rssHomeNewsKey: string;
        rssMajorClosuresKey: string;
        rssLatestNewsKey: string;
        getRssLink: Function;

        static $inject = ["environmentConfig", "documentLocationService", "routes", "$q"];

        constructor(public environmentConfig: HCTRA.Constant.IEnvironmentConfig,
            public documentLocationService: HCTRA.Service.IDocumentLocationService,
            public routes: HCTRA.Constant.IRoutes,
            public $q: angular.IQService) {
            this.rssHomeClosuresKey = "inHomeClosures";
            this.rssHomeNewsKey = "inHomeNews";
            this.rssMajorClosuresKey = "inMajorClosures";
            this.rssLatestNewsKey = "inLatestNews";

            this.getRssLink = (locationId: string): string => {
                let rssConfig = this.environmentConfig.rssConfig;
                for (let rssLink in rssConfig) {
                    if (rssConfig.hasOwnProperty(rssLink)) {
                        if (rssConfig[rssLink].Locations.indexOf(locationId) !== -1) {
                            return this.routes.rssFeed + rssLink;
                        }
                    }
                }
            };
        }

        goToRssFeed = (locationId: string): void => {
            let rssLink: string = this.getRssLink(locationId);
            if (angular.isDefined(rssLink)) {
                this.documentLocationService.goToHref(rssLink);
            }
        };

        injectRssData = (): angular.IPromise<any> => {
            let rssLinkArray: string[] = [
                this.getRssLink(this.rssHomeClosuresKey),
                this.getRssLink(this.rssHomeNewsKey),
                this.getRssLink(this.rssMajorClosuresKey),
                this.getRssLink(this.rssLatestNewsKey)
            ];
            return this.$q(function (fulfill) {
                fulfill(rssLinkArray);
            });
        };

    }
}

(function () {

    "use strict";

    angular.module("HCTRAModule").service("rssService", HCTRA.Service.RssService);

} ());