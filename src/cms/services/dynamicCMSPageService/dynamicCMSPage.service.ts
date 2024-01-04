import { Injectable } from '@angular/core';
import { UrlManagerService } from 'common/services/urlManager/urlManager.service';
import { INewsArticleDictionaryItem } from 'news/models/news.interface';

@Injectable()
export class DynamicCMSPageService {

    constructor(private urlManagerService: UrlManagerService) { }

    public getCMSId(path: string, cmsTemplateName: string) {

        const newRoutes = this.urlManagerService.newRoutes;

        const cmsPathDictionary = newRoutes.articleLookupByPath;

        const cmsId = this.articleIdLookup(path, cmsTemplateName, cmsPathDictionary);

        return cmsId;

    }

    public articleIdLookup(cmsPath: string, cmsTemplateName: string, cmsPathDictionary: Map<string, INewsArticleDictionaryItem>): string {


        let cmsID = '';

        for (const key in cmsPathDictionary) {
            
            if (cmsPathDictionary[key]) {

                const value: INewsArticleDictionaryItem = cmsPathDictionary[key];

                if (value.friendlyURL.toLowerCase() === cmsPath.toLowerCase()) {
                    if (value.templateName === cmsTemplateName) {
                        cmsID = value.itemID;

                        return cmsID;
                    }

                }
            }
        }

        return cmsID;
    }

}
