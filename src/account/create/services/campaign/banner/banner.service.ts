import { Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { CmsUtilService } from 'cms/services';
import { CMSApiService } from 'cms/services/cmsApi/cms-api.service';
import { BreakpointService } from 'common/services/breakpoint/breakpoint.service';
import { Breakpoint } from 'constants/breakpoints.constants';
import { map } from 'rxjs';
import { CampaignBannerModels } from './models/banner.models';

@Injectable()
export class CampaignBannerService {

    constructor(private breakpointService: BreakpointService,
        private cmsApiService: CMSApiService,
        private cmsUtilService: CmsUtilService) {
    }


    getBanner(lang: string) {
        return this.breakpointService.observe(Breakpoint).pipe(
            map(async breakpoint => {
                const cmsObj = this.getListCmsIds(breakpoint, lang);
                const res = await this.cmsApiService.getCmsPagesIds([cmsObj]);
                const dictionary = this.parseResponse(res);
                return dictionary[0];
            })
        );
    }

    private parseResponse(res) {
        const parsedResponses = [];
        if (res.responses && res.responses.length > 0) {

            const responses: any[] = res.responses;
            responses.forEach(response => {
                const cmsRes = response.cmsResponse.toString();
                const cmsJson = JSON.parse(cmsRes);

                cmsJson.Image = this.cmsUtilService.parseAllImageAttributes(cmsJson.Image).image;

                parsedResponses.push(cmsJson);
            });

            return parsedResponses;
        }
    }

    private getListCmsIds(breakpoint: string, lang: string) {

        const siteCore = this.getSiteCoreIds(lang);

        switch (breakpoint) {
            case Breakpoints.XSmall: // mobile

                return { itemId: siteCore.mobile };

            case Breakpoints.Small: // small tablet
            case Breakpoints.Medium:

                return { itemId: siteCore.tablet };

            case Breakpoints.Large: // desktop
            case Breakpoints.XLarge: // desktop

                return { itemId: siteCore.desktop };


            default:
                break;
        }

    }

    private getSiteCoreIds(lang: string) {
        const data = CampaignBannerModels.filter(model => model.lang === lang);
        if (data.length > 0) {
            return data[0].cms;
        }
    }
}
