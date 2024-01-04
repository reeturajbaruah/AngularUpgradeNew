module HCTRA.Service {

    export interface ITemplateCacheHelper {

        constructUncachedList: () => void;
        removeUncachedFromCache: () => void;
    }

    export class TemplateCacheHelper implements ITemplateCacheHelper {

        static readonly $inject: string[] = ['$templateCache', '$state'];

        private clearList: string[] = [];

        constructor(private $templateCache: angular.ITemplateCacheService, private $state: angular.ui.IStateService) {

        }

        public constructUncachedList = () => {

            let fromSitecoreRegex = /sitecore\/.*/;
            let allStates: any = this.$state.get();

            let sitecoreStates = allStates.filter(s => fromSitecoreRegex.test(s.templateUrl));
            this.clearList = sitecoreStates.map(s => s.templateUrl); // list of urls that should not be cached
        }

        public removeUncachedFromCache = () => {

            for (let url of this.clearList) {

                this.$templateCache.remove(url);
            }
        }
    }
}

(function () {

    "use strict";

    angular.module("HCTRAModule").service("templateCacheHelper", HCTRA.Service.TemplateCacheHelper);
}());