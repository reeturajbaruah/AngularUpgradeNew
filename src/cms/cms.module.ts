import { NgModule } from '@angular/core';
import { LinkLookupService, CmsReplacementService, CmsUtilService, CmsResolverService } from './services';
import { downgrade } from 'hybrid/module';
import { CmsBundler } from './services/cmsBundler/cmsBundler.service';
import { ClientCache, BuildIdRef } from 'common/providers';
import { CmsCacheName } from './constants';
import { CmsPostCache } from './services/cmsPostCache/cmsPostCache.service';
import { DynamicCMSPageService } from './services/dynamicCMSPageService/dynamicCMSPage.service';
import { CMSApiService } from './services/cmsApi/cms-api.service';
import { CMSFacadeService } from './services/cmsFacade/cms-facade.service';

export interface SiteCoreMediaItem {
    /** src tag for slide image */
    image?: string;
    /** target for image being clicked (_blank or _self) */
    targetFrame?: string;
    /** href target url when user clicks on slide */
    SlideURL?: string;
    /** alt text for the slide's image */
    alt?: string;
    /** Contains unparsed Sitecore file tag */
    File?: string;
    /** Contains unparsed Sitecore image tag */
    Image?: string;

    ItemMedialUrl?: string;

    ImageCaption?: string;
}
export interface SiteCoreItem {

    ItemID: string;
    HasChildren: boolean;
    Children: SiteCoreItem[];
    Title: string;
    TemplateName: string;
    LongDescription: string;
    Category: string;
    Image: string;
    ShortDescription: string;
    __Updated: string;
    StartDate: string;
    EndDate: string;
    QueryID: string;
    ItemPath: string;
    DisplayName: string;
    Subtitle: string;
    FriendlyURL: string;
    IsPermanent: string;
    ItemName: string;
    ImageItem: SiteCoreMediaItem;
    IsEmailUs: boolean;
    HasHeader: boolean;
    Contents: string;
    Parameters: string;
    AltTitle: string;

    //refactor these out as we migrate over!!!
    // Help and Support
    Form: string;
    Name: string;
    Bold: string;

    // FAQ
    Purpose: string;

    //Storefront
    Message: string;
    buttons: { [key: string]: string } | string;
    defaultCommentText: string;
    badRatingText: string;
    badRatingIconUnselected: any;
    badRatingIconSelected: any;
    neutralRatingText: string;
    neutralRatingIconUnselected: any;
    neutralRatingIconSelected: any;
    goodRatingText: string;
    goodRatingIconUnselected: any;
    goodRatingIconSelected: any;
    maxCommentCharacters: number;
}

downgrade('linkLookupService', { service: LinkLookupService });
downgrade('cmsUtilService', { service: CmsUtilService });
downgrade('cmsBundler', { service: CmsBundler });
downgrade('cmsPostCache', { service: CmsPostCache });

@NgModule({
    providers: [
        LinkLookupService,
        CmsReplacementService,
        CmsUtilService,
        CmsResolverService,
        CmsBundler,
        CmsPostCache,
        DynamicCMSPageService,
        CMSApiService,
        CMSFacadeService,
        //cmsCache
        { provide: ClientCache, deps: [BuildIdRef], useFactory: (buildId: string) => `${CmsCacheName}${buildId}`, multi: true }
    ]
})
export class CmsModule {

}
