import { Injectable } from '@angular/core';
import { SiteCoreItem } from 'cms/cms.module';
import { bufferTime, filter, firstValueFrom, map, mergeMap, Subject } from 'rxjs';
import { CmsPostCache } from 'cms/services/cmsPostCache/cmsPostCache.service';
import { CmsFilter, CmsItemMap, IListCmsResponse } from 'cms/cms.models';

const maxTime = 200;
const maxSize = 20;

@Injectable()
export class CmsBundler {

    private queue$ = new Subject<CmsFilter>();
    private response$ = new Subject<CmsItemMap>();

    constructor(        
        private cmsPostCache: CmsPostCache        
    ){
        this.queue$
            .pipe(  
                bufferTime(maxTime, null, maxSize),
                filter(x=> x.length > 0),                
                mergeMap(itemIds => this.postThenMap(itemIds))
            )
            .subscribe(x=> this.response$.next(x));
    }

    private xor(guids: string[]): string {
        return guids.length === 0 
            ? '' 
            : guids
                .map(g=> g.toLowerCase())
                //remove dups
                .reduce((acc, g) => (acc.set.has(g) || (acc.set.add(g), acc.array.push(g)), acc), { array: [], set: new Set()})
                .array
                .map(g => g
                    .replace(/-/g, '')
                    .match(/.{2}/g)
                    .map(x => parseInt(x, 16))
                )        
                .reduce((acc, v) =>
                    // eslint-disable-next-line no-bitwise
                    acc.map((x, i) => (x ^ v[i]) & 0xFF)
                )
                .map(x => x.toString(16))
                //repad
                .map(x => x.length === 1 ? `0${x}` : x )
                .join('');
    }

    private async postThenMap(requests: CmsFilter[]): Promise<CmsItemMap> {
        if (requests.length === 0) {
            return {};
        }

        //normalize request itemIds
        const tag = this.xor(requests.map(x => x.ItemId || x.itemId || x.itemID || x.ItemID).filter(x => x));

        const { responses } = (await this.cmsPostCache.post(`/api/sessions/GenericCms/GetCmsPagesByIds?tag=${tag}`, { requests })) || { responses: [] };

        return responses
            .reduce((acc, response) => ({ ...acc, [response.requestedItemId.toLowerCase()]: response }), {} as CmsItemMap);
    }

    public async getCmsItemByIds(requests: CmsFilter[]): Promise<CmsItemMap> {
        if (requests.length === 0) {
            return {};
        }

        //normalize request itemIds
        const tag = this.xor(requests.map(x => x.ItemId || x.itemId || x.itemID || x.ItemID).filter(x => x));
        const url = `/api/sessions/GenericCms/GetCmsPagesByIds?tag=${tag}`;
        return await this.cmsPostCache.post(url, { requests });
    }

    public async getCmsItemById(cmsFilter: CmsFilter): Promise<SiteCoreItem> {        
        //normalize request itemIds
        const itemId = (cmsFilter.ItemId || cmsFilter.itemId || cmsFilter.itemID || cmsFilter.ItemID || '').toLowerCase();
        const { ItemId, ...filterCopy } = { ...cmsFilter, itemId };
        
        const p = firstValueFrom(
            this.response$.pipe(
                filter(x=> itemId in x),
                map(x=> x[itemId])
            )
        );
        
        this.queue$.next(filterCopy);

        return await p;
    }

    getCmsPages(data: CmsItemMap): Promise<IListCmsResponse> {
        const url = '/api/sessions/GenericCms/GetCmsPages';

        return this.cmsPostCache.post(url, data);
    }

}
