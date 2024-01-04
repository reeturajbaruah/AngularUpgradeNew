import { BreakpointService } from 'common/services/breakpoint/breakpoint.service';
import { CMSFacadeService } from 'cms/services/cmsFacade/cms-facade.service';
import { of } from 'rxjs/internal/observable/of';
import { ShipChannelBridgeFacadeService } from './ship-channel-bridge-facade.service';
import { ShipChannelBridgeService } from '../ship-channel-bridge-api/ship-channel-bridge.service';
import { Contact } from 'shipChannelBridge/ship-channel-bridge.model';
import { Breakpoint } from 'constants/breakpoints.constants';
import { firstValueFrom } from 'rxjs';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { cmsIds } from '../../constant';


describe('ShipChannelBridgeFacadeService', () => {

    let service: ShipChannelBridgeFacadeService;
    let shipChannelBridgeService: jasmine.SpyObj<ShipChannelBridgeService>;
    let breakPointCache: jasmine.SpyObj<BreakpointService>;
    let cmsFacadeCache: jasmine.SpyObj<CMSFacadeService>;
    let parseDataSpy;


    beforeEach(() => {

        breakPointCache = jasmine.createSpyObj('breakPointCache', ['observe']);
        cmsFacadeCache = jasmine.createSpyObj('cmsFacadeCache', ['getCmsPagesData']);
        shipChannelBridgeService = jasmine.createSpyObj('shipChannelBridgeService', ['saveContact']);

        TestBed.configureTestingModule({
            providers: [
                ShipChannelBridgeFacadeService,
                { provide: ShipChannelBridgeService, useValue: shipChannelBridgeService },
                { provide: BreakpointService, useValue: breakPointCache },
                { provide: CMSFacadeService, useValue: cmsFacadeCache },
            ]
        });

        service = TestBed.inject(ShipChannelBridgeFacadeService);
        parseDataSpy = spyOn(service as any, 'parseData');

    });

    describe('shipFacadeService', () => {

        it('observe returns XSmall', waitForAsync(() => {
            breakPointCache.observe.and.returnValue(of(Breakpoint[0]));
            cmsFacadeCache.getCmsPagesData.and.resolveTo(new Map<string, any>([
                [cmsIds.SCBMobileBanner, 'SCBMobileBanner'],
                [cmsIds.SCBMobileCarousel, 'SCBMobileCarousel'],
                [cmsIds.SCBMobileTabs, 'SCBMobileTabs']
            ]));
            parseDataSpy.and.callThrough();

            firstValueFrom(service.getData()).then(data => {
                expect(data).toEqual({
                    banner: 'SCBMobileBanner',
                    carousel: 'SCBMobileCarousel',
                    tabs: 'SCBMobileTabs'
                } as any);
            });
        }));

        it('observe returns Small', waitForAsync(() => {
            breakPointCache.observe.and.returnValue(of(Breakpoint[1]));
            cmsFacadeCache.getCmsPagesData.and.resolveTo(new Map<string, any>([
                [cmsIds.SCBTabletBanner, 'SCBTabletBanner'],
                [cmsIds.SCBTabletCarousel, 'SCBTabletCarousel'],
                [cmsIds.SCBTabletTabs, 'SCBTabletTabs']
            ]));
            parseDataSpy.and.callThrough();

            firstValueFrom(service.getData()).then(data => {
                expect(data).toEqual({
                    banner: 'SCBTabletBanner',
                    carousel: 'SCBTabletCarousel',
                    tabs: 'SCBTabletTabs'
                } as any);
            });
        }));

        it('observe returns Large', waitForAsync(() => {
            breakPointCache.observe.and.returnValue(of(Breakpoint[3]));
            cmsFacadeCache.getCmsPagesData.and.resolveTo(new Map<string, any>([
                [cmsIds.SCBDesktopBanner, 'SCBDesktopBanner'],
                [cmsIds.SCBDesktopCarousel, 'SCBDesktopCarousel'],
                [cmsIds.SCBDesktopTabs, 'SCBDesktopTabs']
            ]));
            parseDataSpy.and.callThrough();

            firstValueFrom(service.getData()).then(data => {
                expect(data).toEqual({
                    banner: 'SCBDesktopBanner',
                    carousel: 'SCBDesktopCarousel',
                    tabs: 'SCBDesktopTabs'
                } as any);
            });
        }));

        it('should  parseData', () => {
            const resp: Map<string, any> = new Map<string, any>();
            resp.set('test', 1);
            service.parseData({ cmsId: '98BBF1CC-5C37-4A4D-8FFC-7794E16CCA3F' }, resp);
            expect(parseDataSpy).toHaveBeenCalled();

        });

    });

    describe('onContactSave', () => {
        it('should check api is invoked', () => {
           (shipChannelBridgeService.saveContact as jasmine.Spy).and.returnValue(of());

            service.onContactSave({} as Contact);

            expect(shipChannelBridgeService.saveContact).toHaveBeenCalled();
        });
    });

});