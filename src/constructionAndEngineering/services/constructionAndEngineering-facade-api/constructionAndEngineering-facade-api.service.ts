import { Injectable } from '@angular/core';
import { CmsItemMap, IListCmsResponse } from 'cms/cms.models';
import { CmsUtilService } from 'cms/services';
import { CmsBundler } from 'cms/services/cmsBundler/cmsBundler.service';
import { CmsImage } from 'common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CEFacadeApiService {

  constructor(
    private cmsUtilService: CmsUtilService,
    private cmsBundler: CmsBundler
    ) { }

  parseAllImageAttributes(imageString: string): CmsImage {
    return this.cmsUtilService.parseAllImageAttributes(imageString);
  }

  processItemId(rawItemId: string): string {
    return this.cmsUtilService.processItemId(rawItemId);
  }

  getCmsPages(request: CmsItemMap): Promise<IListCmsResponse> {
    return this.cmsBundler.getCmsPages(request);
  }

}
