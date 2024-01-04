import { Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { IQueryAet } from 'aboutus/interfaces';
import { CMSFacadeService } from 'cms/services/cmsFacade/cms-facade.service';
import { Breakpoint } from 'constants/breakpoints.constants';
import { map } from 'rxjs';
import { BreakpointService } from '../../../../common/services/breakpoint/breakpoint.service';
import { cmsIds } from '../../../constants';

@Injectable()
export class HardySHPFacadeService {

    constructor(private breakpointService: BreakpointService,
        private cmsFcade: CMSFacadeService) {
    }

    getData() {
        let data = {} as IQueryAet;

        return this.breakpointService.observe(Breakpoint).pipe(
            map(async breakpoint => {
                const cmsObj = this.getListCmsIds(breakpoint);
                const cmsIdsList = Object.values(cmsObj);
                const dictionary = await this.cmsFcade.getCmsPagesData(cmsIdsList);
                data = this.parseData(cmsObj, dictionary);
                return data && data['LongDescription'] || '';
            }));
    }

    getListCmsIds(breakpoint: string) {

        switch (breakpoint) {
            case Breakpoints.XSmall: // mobile

                return {cmsId: cmsIds.HardySHPMobile};

            case Breakpoints.Medium: // large tablet
            case Breakpoints.Small: // small tablet

                return {cmsId: cmsIds.HardySHPTablet};

            case Breakpoints.Large: // desktop
            case Breakpoints.XLarge: // desktop

                return {cmsId: cmsIds.HardySHPDesktop};


            default:
                break;
        }

    }
     parseData(cmsObj, resMap: Map<string, any>) {
        return  resMap.get(cmsObj.cmsId);
    }

}

