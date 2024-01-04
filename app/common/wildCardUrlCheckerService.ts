module HCTRA.Service {
    "use strict";

    export interface IWildCardUrlCheckerService {
        findParentUrlInWildCardDict(relativeUrl: string): string;

        wildCardUrlisMatch(relativeUrl: string, wilcardDict: IWildCardDictionary): boolean;
    }

    export class WildCardDictionaryElement {
        constructor(_expectedSegments: number, _path: string) {
            this.expectedSegments = _expectedSegments;
            this.path = _path;
        }
        expectedSegments: number;
        path: string;
    }


    export interface IWildCardDictionary {
        [urlPartial: string]: WildCardDictionaryElement;
    }

    export class WildCardUrlCheckerService implements IWildCardUrlCheckerService {

        private wildCardDictionary: IWildCardDictionary = {};

        static $inject = ["routes"];

        constructor(routes: HCTRA.Constant.IRoutes) {
            this.wildCardDictionary[routes.faq] = new WildCardDictionaryElement(4, routes.faq);
            //this.wildCardDictionary[routes.closuresArchive] = new WildCardDictionaryElement(4, routes.closuresArchive);
            this.wildCardDictionary[routes.newsArchive] = new WildCardDictionaryElement(4, routes.newsArchive);
        }

        public findParentUrlInWildCardDict = (relativeUrl: string): string => {
            return this.findMatch(relativeUrl, this.wildCardDictionary);
        };

        public wildCardUrlisMatch = (relativeUrl: string, wilcardDict: IWildCardDictionary): boolean => {
            return this.findMatch(relativeUrl, wilcardDict) !== null;
        };

        private findMatch = (relativeUrl: string, wilcardDict: IWildCardDictionary): string => {
            if (relativeUrl == null || angular.isUndefined(relativeUrl) || relativeUrl.search("/") === -1) { return null; }
            let numberofUrlSegments: number = relativeUrl.match(/\//g).length;
            let locationArray: string[] = relativeUrl.split("/");
            return wilcardDict["/" + locationArray[1]] && wilcardDict["/" + locationArray[1]].expectedSegments >= numberofUrlSegments ?
                wilcardDict["/" + locationArray[1]].path : null;
        };

    }
}

(function (): void {

    "use strict";

    angular.module("HCTRAModule").service("wildCardUrlCheckerService", HCTRA.Service.WildCardUrlCheckerService);

} ());