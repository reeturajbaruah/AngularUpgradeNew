import { Injectable } from '@angular/core';
import { UrlManagerService } from 'common/services/urlManager/urlManager.service';

interface LookupArticle {
    friendlyURL: string;
    templateName: string;
    itemID: string;
}

@Injectable()
export class LinkLookupService {

    constructor(private urlManagerService: UrlManagerService) { }

    public cmsPathDictionary: { [key: string]: LookupArticle };
    public cmsIdDictionary: { [key: string]: LookupArticle };

    public articleLookup(cmsPath: string) {
        const newRoutes = this.urlManagerService.newRoutes;

        this.cmsPathDictionary = newRoutes.articleLookupByPath;

        const cmsPageInfo = this.cmsPathDictionary[cmsPath];
        if (cmsPageInfo) {
            return cmsPageInfo.friendlyURL;
        }
    }

    public articleLookupById(id: string) {
        const newRoutes = this.urlManagerService.newRoutes;

        this.cmsPathDictionary = newRoutes.articleLookupByPath;

        const cmsPageInfo = this.cmsIdDictionary[id.toLowerCase()];
        if (cmsPageInfo) {
            return cmsPageInfo.friendlyURL;
        }
    }

}
