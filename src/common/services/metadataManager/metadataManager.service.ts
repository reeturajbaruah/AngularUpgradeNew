import { Inject, Injectable } from '@angular/core';
import { UrlPaths } from '../../../constants/routes.constants';
import { WindowRef } from '../../providers';
import { UrlManagerService } from '../urlManager/urlManager.service';

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

@Injectable({ providedIn: 'root' })
export class MetadataManagerService {
    articleArray = ['News', 'Closure', 'FAQ'];
    metadataDictionary = {};
    urlParametersToConsider = ['tollRoad'];
    wildCardDictionary: IWildCardDictionary = {};

    constructor(
        private urlManagerService: UrlManagerService,
        @Inject(WindowRef) private $window,
        private urlPaths: UrlPaths
    ) {
        this.wildCardDictionary[this.urlPaths.faq] = new WildCardDictionaryElement(4, this.urlPaths.faq);
        this.wildCardDictionary[this.urlPaths.newsArchive] = new WildCardDictionaryElement(4, this.urlPaths.newsArchive);
    }

    public injectMetaDataIfNeeded(relativeUrl): Promise<any> {
        return new Promise((resolve, reject) => {
            if (Object.keys(this.metadataDictionary).length !== 0) {
                resolve(this.returnMetadataOrIndicatePageShouldBeIgnored(relativeUrl));
            }
            this.urlManagerService.getMetadata().then((response) => {
                this.metadataDictionary = response.metadata;
                resolve(this.returnMetadataOrIndicatePageShouldBeIgnored(relativeUrl));
            });
        });
    }

    public returnMetadataOrIndicatePageShouldBeIgnored(relativeUrl) {
        relativeUrl = this.modifyRelativeUrlForUrlParamsInSitecore(relativeUrl);
        let neededMetadataEntry = this.metadataDictionary[relativeUrl];
        neededMetadataEntry = this.lookupMetadataForWilcardRelativeUrl(neededMetadataEntry, relativeUrl);
        if (neededMetadataEntry) {
            if (neededMetadataEntry.includeInSearch) {
                if (this.articleArray.indexOf(neededMetadataEntry.templateName) === -1) {
                    neededMetadataEntry.templateName = '';
                }
                neededMetadataEntry.doNotIndex = false;
                return neededMetadataEntry;
            } else {
                return { doNotIndex: true, searchTitle: neededMetadataEntry.searchTitle };
            }
        } else {
            return { doNotIndex: true };
        }
    }

    public modifyRelativeUrlForUrlParamsInSitecore(relativeUrl) {
        const searchParams = new URL(this.$window.location.href).searchParams;
        for (const key of this.urlParametersToConsider) {
            if (searchParams.hasOwnProperty(key)) {
                const url = this.$window.location.pathname + this.$window.search + this.$window.hash;
                return decodeURIComponent(url);
            }
        }
        return relativeUrl;
    }

    public lookupMetadataForWilcardRelativeUrl(neededMetadataEntry, relativeUrl) {
        return neededMetadataEntry ? neededMetadataEntry : this.metadataDictionary[this.findMatch(relativeUrl)];
    }

    private findMatch = (relativeUrl: string): string => {
        if (!relativeUrl || relativeUrl.search('/') === -1) {
            return null;
        }
        const numberofUrlSegments: number = relativeUrl.match(/\//g).length;
        const locationArray: string[] = relativeUrl.split('/');
        return this.wildCardDictionary['/' + locationArray[1]] && this.wildCardDictionary['/' + locationArray[1]].expectedSegments >= numberofUrlSegments ?
            this.wildCardDictionary['/' + locationArray[1]].path : null;
    };
}

