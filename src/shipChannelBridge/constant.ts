import { Injectable } from '@angular/core';

export enum SCBStateNames {
    Future = 'ShipChannelBridge.**',
    ShipChannelBridge = 'ShipChannelBridge'
}

export enum SCBRoutes {
    Future = '/ShipChannelBridge',
    ShipChannelBridge = '/ShipChannelBridge'
}


@Injectable()
export class CmsIds {
    SCBPageCMS = '6E92B46A-C233-48A6-985D-85BE64A4FD97';

    SCBDesktopBanner = '95A8B0D6-1F94-47B6-97B4-D8717F289962';
    SCBTabletBanner = '02CA0B62-F003-4351-875A-D2FD5C66C93B';
    SCBMobileBanner = 'B8EFD26B-C458-4DC9-B1C3-0DB9BDB2C617';

    SCBDesktopCarousel = 'D1D6C85C-849C-4530-97CB-0E9A86C8866B';
    SCBTabletCarousel = 'ED64A7FC-239C-48F6-AD53-987023EC3AF0';
    SCBMobileCarousel = 'C8B39500-E4B6-4E21-9684-74094B72C2EF';

    SCBDesktopTabs = '9EB229E9-05C2-40A8-B29C-772F7C4105BF';
    SCBTabletTabs = '6463C1FA-D847-4BA8-8D3F-602612AF1E29';
    SCBMobileTabs = '174515B0-A2A4-4E6F-8B7A-1E849444B4E3';

    TopicContentId = '12712F10-22E2-4B76-8C98-7A207323DD37';
    FormContentId = 'E8287B30-353C-4662-83D4-A8F193B6CCD6';
}


export const cmsIds = new CmsIds();
