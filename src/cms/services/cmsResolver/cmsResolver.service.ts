import { Injectable, Inject } from '@angular/core';
import { SiteCoreItem, SiteCoreMediaItem } from 'cms/cms.module';
import { StringUtilsService } from 'common/services/stringUtils/stringUtils.service';
import { GenericRepoService, HttpService } from '../../../common/services';

export interface CmsResolveOptions {
    inlineSvg?: boolean;
    mergeParams?: boolean;
    selector?: (response: any) => SiteCoreItem;
    ItemId: string;
}

@Injectable()
export class CmsResolverService {

    constructor(
        private genericRepoService: GenericRepoService,
        private stringUtils: StringUtilsService,
        private httpService: HttpService
    ) { }

    resolve(options?: CmsResolveOptions): Promise<any> {
        //set default selector. selector selects which property to deserialize from.
        const selector = (options && options.selector) || (r => JSON.parse(r.cmsResponse));
        //set default lookup. lookup is a map function that chooses how to read from the cms settings obj.
        const request = { ItemId: options.ItemId };
        //set merge params option. mergeParams allows merging URL parameters defined in the parameters property to
        //be merged directly in to the base object, removing the need to parse this field later.
        const mergeParams = options && (('mergeParams' in options) ? options.mergeParams : true);


        const spreadAndMerge = (obj: SiteCoreItem) => {
            const { Children, ...baseObj } = obj;
            return {
                ...baseObj,
                ...this.stringUtils.getParameterObject(baseObj.Parameters || ''),
                Children: (Children || []).map(spreadAndMerge)
            };
        };

        //send request for cms data
        return this.genericRepoService
            .dataFactory
            .getCmsPageById(request)
            .then(selector) //map to the desired data
            .then((obj: SiteCoreItem) => {

                if (options.inlineSvg) {
                    return this.httpService.get((obj as SiteCoreMediaItem).ItemMedialUrl);
                } else {
                    return mergeParams ? spreadAndMerge(obj) : obj;
                }
            })
            .catch(e => {
                console.error(e);
                throw e;
            }); //merge data or return data
    }
}
