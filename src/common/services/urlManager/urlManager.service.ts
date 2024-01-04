import { Inject, Injectable } from '@angular/core';
import { GenericRepoService } from '../genericRepo/genericRepo.service';

@Injectable()
export class UrlManagerService {

  metadataDictionary = null;
  lookupKeys: any = {};
  newRoutes: any = {};
  megaMenuStructure = null;
  footerCmsResponse = null;

    constructor(private genericRepoService: GenericRepoService) { }

  // this function should start running before all other public functions
  getStartingRoutes(angularStatesObject: any): Promise<any> {
    return new Promise<any>((resolve) => {
      if (Object.keys(this.newRoutes).length === 0) {
          const request = Object.assign({ getMin: true }, angularStatesObject);
          this.genericRepoService.dataFactory.GetAllMenuUrlMetadata(request).then((res: any) => {
          if (res.errors.length === 0) {
            this.metadataDictionary = res.metadata;

            const rekeyed = Object.keys(res.metadata).reduce((acc, key) => {
              const obj = res.metadata[key];

              acc.articleLookupByPath[obj.itemPath] = obj;
              acc.articleLookupById[obj.itemID] = obj;
              //added an case-insensitive Path lookup to the metaDataDictionary
              acc.lookupKeys[key.toLowerCase()] = key;

              return acc;
            }, { articleLookupByPath: {}, articleLookupById: {}, lookupKeys: {} });

            const { articleLookupByPath, articleLookupById, lookupKeys } = rekeyed;
            this.lookupKeys = lookupKeys;
            this.newRoutes = {
              states: res.states,
              articleLookupByPath,
              articleLookupById
            };
            this.megaMenuStructure = res.navBar;
            this.footerCmsResponse = res.footerURls;
            resolve(this.newRoutes);
          } else {
            resolve({ errors: res.errors });
          }

        });
      } else {
        resolve(this.newRoutes);
      }
    });
  };

  getMegaMenu(): Promise<any> {
    return new Promise<any>((resolve) => {
      if (this.megaMenuStructure === null) {
        Promise.resolve({ navBar: this.megaMenuStructure }).then(result => resolve(result),
          err => resolve({ errors: true }));
      } else {
        resolve({ navBar: this.megaMenuStructure });
      }
    });
  };

  getMetadata(): Promise<any> {
    return new Promise<any>((resolve) => {
      if (this.metadataDictionary === null) {
        Promise.resolve({ metadata: this.metadataDictionary }).then(result => resolve(result),
          err => resolve({ errors: true }));
      } else {
        resolve({ metadata: this.metadataDictionary });
      }
    });
  };

  getFooterdata(): Promise<any> {
    return new Promise<any>((resolve) => {
      if (this.footerCmsResponse === null) {
        Promise.resolve({ footerCmsResponse: this.footerCmsResponse }).then(result => resolve(result),
          err => resolve({ errors: true }));
      } else {
        resolve(this.footerCmsResponse);
      }
    });
  };

}
