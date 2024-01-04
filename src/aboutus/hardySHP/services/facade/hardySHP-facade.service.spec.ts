import { HardySHPFacadeService } from './hardySHP-facade.service';
import { BreakpointService } from 'common/services/breakpoint/breakpoint.service';
import { CMSFacadeService } from 'cms/services/cmsFacade/cms-facade.service';
import { of } from 'rxjs/internal/observable/of';
import { Breakpoint } from 'constants/breakpoints.constants';
import { firstValueFrom } from 'rxjs';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { cmsIds } from '../../../constants';


describe('hardySHPFacadeService', () => {

    let service: HardySHPFacadeService;
    let breakPointCache: jasmine.SpyObj<BreakpointService>;
    let cmsFacadeCache: jasmine.SpyObj<CMSFacadeService>;
    let parseDataSpy;


    beforeEach(() => {

        breakPointCache = jasmine.createSpyObj('BreakpointService', ['observe']);
        cmsFacadeCache = jasmine.createSpyObj('CMSFacadeService', ['getCmsPagesData']);

        TestBed.configureTestingModule({
            providers: [
                HardySHPFacadeService,
                { provide: BreakpointService, useValue: breakPointCache },
                { provide: CMSFacadeService, useValue: cmsFacadeCache },
            ]
        });

        service = TestBed.inject(HardySHPFacadeService);
        parseDataSpy = spyOn(service as any, 'parseData');
    });

    describe('hardySHP', () => {

        it('observe returns XSmall', waitForAsync(() => {
            breakPointCache.observe.and.returnValue(of(Breakpoint[0]));
            cmsFacadeCache.getCmsPagesData.and.resolveTo(new Map<string, any>([
                [cmsIds.HardySHPMobile, { LongDescription: 'HardySHPMobile' }]
            ]));
            parseDataSpy.and.callThrough();

            firstValueFrom(service.getData()).then(data => {
                expect(data).toEqual('HardySHPMobile' as any);
            });
        }));

        it('observe returns Small', waitForAsync(() => {
            breakPointCache.observe.and.returnValue(of(Breakpoint[2]));
            cmsFacadeCache.getCmsPagesData.and.resolveTo(new Map<string, any>([
                [cmsIds.HardySHPTablet, { LongDescription: 'HardySHPTablet' }]
            ]));
            parseDataSpy.and.callThrough();

            firstValueFrom(service.getData()).then(data => {
                expect(data).toEqual('HardySHPTablet' as any);
            });
        }));

        it('observe returns Large', waitForAsync(() => {
            breakPointCache.observe.and.returnValue(of(Breakpoint[3]));
            cmsFacadeCache.getCmsPagesData.and.resolveTo(new Map<string, any>([
                [cmsIds.HardySHPDesktop, { LongDescription: 'HardySHPDesktop' }]
            ]));
            parseDataSpy.and.callThrough();

            firstValueFrom(service.getData()).then(data => {
                expect(data).toEqual('HardySHPDesktop' as any);
            });
        }));

        it('should  parseData', () => {
            const resp: Map<string, any> = new Map<string, any>();
            resp.set('test', 1);
            service.parseData({ cmsId: '98BBF1CC-5C37-4A4D-8FFC-7794E16CCA3F' }, resp);
            expect(parseDataSpy).toHaveBeenCalled();

        });



    });


});


