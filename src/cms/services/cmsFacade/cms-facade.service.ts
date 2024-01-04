import { Injectable } from '@angular/core';
import { CmsUtilService } from 'cms/services';
import { CMSApiService } from '../cmsApi/cms-api.service';

@Injectable()
export class CMSFacadeService {

    constructor(private cmsUtilService: CmsUtilService,
        private api: CMSApiService) {
    }


    async getCmsPagesData(cmsIdsList) {
        const req = this.mapSiteCoreReq(cmsIdsList);
        const res = await this.api.getCmsPagesIds(req);
        const dictionary = this.parseResponse(res);
        return dictionary;
    }


    private mapSiteCoreReq(cmsIdArray: string[]) {

        const reqs: { itemId: string }[] = [];

        cmsIdArray.forEach(id => {
            const req = { itemId: id };
            reqs.push(req);
        });

        return reqs;
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

            const resMap = new Map<string, any>();
            parsedResponses.forEach(parsedRes => {
                resMap.set(parsedRes.ItemID.toUpperCase(), parsedRes);
            });

            return resMap;
        }
    }

}

