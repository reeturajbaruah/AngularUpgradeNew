import { Injectable } from '@angular/core';
import { CMSFacadeService } from 'cms/services/cmsFacade/cms-facade.service';
import { BreakpointService } from 'common/services/breakpoint/breakpoint.service';
import { Breakpoint } from 'constants/breakpoints.constants';
import { map, Observable } from 'rxjs';
import { Breakpoints } from '@angular/cdk/layout';
import { cmsIds } from '../../constant';
import { ShipChannelBridgeService } from '../ship-channel-bridge-api/ship-channel-bridge.service';
import { Contact } from 'shipChannelBridge/ship-channel-bridge.model';

@Injectable()
export class ShipChannelBridgeFacadeService {
    constructor(private breakpointService: BreakpointService,
        private cmsFcade: CMSFacadeService,
        private shipChannelBridgeService: ShipChannelBridgeService) { }

    getData() {
        let data;

        return this.breakpointService.observe(Breakpoint).pipe(
            map(async breakpoint => {
                const cmsObj = this.getListCmsIds(breakpoint);
                const cmsIdsList = Object.values(cmsObj);
                const dictionary = await this.cmsFcade.getCmsPagesData(cmsIdsList);
                data = this.parseData(cmsObj, dictionary);
                return data;
            }));
    }

    getListCmsIds(breakpoint: string) {

        switch (breakpoint) {
            case Breakpoints.XSmall: // mobile

                return {
                    banner: cmsIds.SCBMobileBanner,
                    carousel: cmsIds.SCBMobileCarousel,
                    tabs: cmsIds.SCBMobileTabs
                };

            case Breakpoints.Medium: // large tablet
            case Breakpoints.Small: // small tablet

                return {
                    banner: cmsIds.SCBTabletBanner,
                    carousel: cmsIds.SCBTabletCarousel,
                    tabs: cmsIds.SCBTabletTabs

                };

            case Breakpoints.Large: // desktop
            case Breakpoints.XLarge: // desktop

                return {
                    banner: cmsIds.SCBDesktopBanner,
                    carousel: cmsIds.SCBDesktopCarousel,
                    tabs: cmsIds.SCBDesktopTabs

                };

            default:
                break;
        }

    }

    parseData(cmsObj, resMap: Map<string, any>) {
        return {
            banner: resMap.get(cmsObj.banner),
            carousel: resMap.get(cmsObj.carousel),
            tabs: resMap.get(cmsObj.tabs)
        };
    }

    onContactSave(data: Contact): Promise<any> {
        return this.shipChannelBridgeService.saveContact(data);
    }

}