import { BreakpointService } from 'common/services/breakpoint/breakpoint.service';
import { AetFacadeService } from './aet-facade.service';
import { CmsUtilService } from 'cms/services';
import { AetApiService } from '../api/aet-api.service';
import { of } from 'rxjs';
import { fakeAsync, flush, tick } from '@angular/core/testing';
import { cmsIds } from '../../../constants';

import { Breakpoints } from '@angular/cdk/layout';
import { resolve } from 'path/posix';

describe('AetFacadeService', () => {

    let service: AetFacadeService;
    let breakPointCache: jasmine.SpyObj<BreakpointService>;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;
    let aetApiService: jasmine.SpyObj<AetApiService>;

    beforeEach(() => {
        breakPointCache = jasmine.createSpyObj('breakPointCache', ['observe']);
        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['parseAllImageAttributes']);
        aetApiService = jasmine.createSpyObj('aetApiService', ['getCmsPagesIds']);

        service = new AetFacadeService(breakPointCache, aetApiService, cmsUtilService);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('getData', () => {
        it('should get data and return an observable', fakeAsync((done) => {
            // Arrange
            const breakpoint = 'your-breakpoint';
            const a = {};
            breakPointCache.observe.and.returnValue(of(breakpoint));
            aetApiService.getCmsPagesIds.and.returnValue(a as any);
            spyOn(service, 'getListCmsIds').and.returnValue({ key1: 'value1', key2: 'value2' } as any);
            spyOn(service, 'mapSiteCoreReq').and.returnValue('your-request' as any);
            spyOn(service, 'parseResponse').and.returnValue({ key1: 'value1', key2: 'value2' } as any);
            spyOn(service, 'parseData').and.returnValue({ breakpoint, key1: 'value1', key2: 'value2' } as any);

            // Act
            const observable = service.getData();
            tick(1);
            // Subscribe to the observable and check the result
            observable.subscribe((data: any) => {
                // Assert
                expect(data.breakpoint).toBe(undefined);
                expect(data.key1).toBe(undefined);
                expect(data.key2).toBe(undefined);
               // expect(service.parseData).toHaveBeenCalled()
               // done(); // Signal the completion of the test
            });
            //;
        }));
    });

    describe('mapSiteCoreReq', () => {
        it('should check cms ids to be mapped as array of itemId object', () => {
            const mockParams = ['1', '2'];

            const out = service.mapSiteCoreReq(mockParams);

            expect(out).toEqual([{ itemId: '1' }, { itemId: '2' }]);
        });
    });

    describe('getTexts', () => {
        it('should check getTexts method return text array non empty value', () => {
            const mockparam = {
                ContentText1: '1',
                ContentText2: '2',
                ContentText3: ''
            };

            const out = service.getTexts(mockparam);

            expect(out).toEqual(['1', '2']);
        });

        it('should check getTexts method return text array non empty trird value', () => {
            const mockparam = {
                ContentText1: '1',
                ContentText2: '2',
                ContentText3: '3'
            };

            const out = service.getTexts(mockparam);

            expect(out).toEqual(['1', '2', '3']);
        });
    });

    describe('getSignageExpanded', () => {
        it('should check getSignageExpanded to return data to be formatted in IContent[]', () => {
            cmsUtilService.parseAllImageAttributes.and.returnValue({
                image:'8658678'
            } as any);
            spyOn(service, 'getTexts').and.callThrough();
            const mockParam = {
                Children: [{
                    Image: '8658678',
                    ContentText1: '1'
                }]
            };
            const out = service.getSignageExpanded(mockParam);

            expect(out).toEqual([{ image: '8658678', texts: ['1'] }]);
            expect(cmsUtilService.parseAllImageAttributes).toHaveBeenCalled();
            expect(service.getTexts).toHaveBeenCalled();
        });
    });

    describe('getListCmsIds', () => {
        it('should check if breakpoint value is xSmall it returns mobile cms id', () => {

            const out = service.getListCmsIds(Breakpoints.XSmall);

            expect(out.header).toEqual(cmsIds.MobileHeader);
            expect(out.easierRow).toEqual(cmsIds.MobileEasierRow);
            expect(out.saferRow).toEqual(cmsIds.MobileSaferRow);
            expect(out.gantry).toEqual(cmsIds.MobileGantry);
            expect(out.signageChanges).toEqual(cmsIds.MobileSignageChanges);
            expect(out.signageChangesExpanded).toEqual(cmsIds.MobileSignageChangesExpanded);
            expect(out.faqTitle).toEqual(cmsIds.MobileFAQTitle);
            expect(out.tollPolicyRoadWay).toEqual(cmsIds.MobileTollPolicyRoadWay);
        });

        it('should check if breakpoint value is Small it returns tablet small cms id', () => {

            const out = service.getListCmsIds(Breakpoints.Small);

            expect(out.header).toEqual(cmsIds.TabletSmallHeader);
            expect(out.easierRow).toEqual(cmsIds.TabletSmallEasierRow);
            expect(out.saferRow).toEqual(cmsIds.TabletSmallSaferRow);
            expect(out.gantry).toEqual(cmsIds.TabletSmallGantry);
            expect(out.signageChanges).toEqual(cmsIds.TabletSmallSignageChanges);
            expect(out.signageChangesExpanded).toEqual(cmsIds.TabletSmallSignageChangesExpanded);
            expect(out.faqTitle).toEqual(cmsIds.TabletSmallFAQTitle);
            expect(out.tollPolicyRoadWay).toEqual(cmsIds.TabletSmallTollPolicyRoadWay);
        });

        it('should check if breakpoint value is Medium it returns tablet large cms id', () => {

            const out = service.getListCmsIds(Breakpoints.Medium);

            expect(out.header).toEqual(cmsIds.TabletLargeHeader);
            expect(out.easierRow).toEqual(cmsIds.TabletLargeEasierRow);
            expect(out.saferRow).toEqual(cmsIds.TabletLargeSaferRow);
            expect(out.gantry).toEqual(cmsIds.TabletLargeGantry);
            expect(out.signageChanges).toEqual(cmsIds.TabletLargeSignageChanges);
            expect(out.signageChangesExpanded).toEqual(cmsIds.TabletLargeSignageChangesExpanded);
            expect(out.faqTitle).toEqual(cmsIds.TabletLargeFAQTitle);
            expect(out.tollPolicyRoadWay).toEqual(cmsIds.TabletLargeTollPolicyRoadWay);
        });

        it('should check if breakpoint value is Large it returns desktop cms id', () => {

            const out = service.getListCmsIds(Breakpoints.Large);

            expect(out.header).toEqual(cmsIds.DesktopHeader);
            expect(out.easierRow).toEqual(cmsIds.DesktopEasierRow);
            expect(out.saferRow).toEqual(cmsIds.DesktopSaferRow);
            expect(out.gantry).toEqual(cmsIds.DesktopGantry);
            expect(out.signageChanges).toEqual(cmsIds.DesktopSignageChanges);
            expect(out.signageChangesExpanded).toEqual(cmsIds.DesktopSignageChangesExpanded);
            expect(out.faqTitle).toEqual(cmsIds.DesktopFAQTitle);
            expect(out.tollPolicyRoadWay).toEqual(cmsIds.DesktopTollPolicyRoadWay);
        });

        it('should check if breakpoint value is XLarge it returns desktop cms id', () => {

            const out = service.getListCmsIds(Breakpoints.XLarge);

            expect(out.header).toEqual(cmsIds.DesktopHeader);
            expect(out.easierRow).toEqual(cmsIds.DesktopEasierRow);
            expect(out.saferRow).toEqual(cmsIds.DesktopSaferRow);
            expect(out.gantry).toEqual(cmsIds.DesktopGantry);
            expect(out.signageChanges).toEqual(cmsIds.DesktopSignageChanges);
            expect(out.signageChangesExpanded).toEqual(cmsIds.DesktopSignageChangesExpanded);
            expect(out.faqTitle).toEqual(cmsIds.DesktopFAQTitle);
            expect(out.tollPolicyRoadWay).toEqual(cmsIds.DesktopTollPolicyRoadWay);
        });

        it('should check if breakpoint value is empty it returns default', () => {

            const out = service.getListCmsIds('');

            expect(out).toEqual(undefined);
        });
    });

    describe('parseResponse', () => {
        it('should check parseResponse method returns a parsed response', () => {
            cmsUtilService.parseAllImageAttributes.and.returnValue({ image: 'img' } as any);
            const mockRes = {
                responses: [
                    {
                        cmsResponse: JSON.stringify({ Image: 'img', ItemID: 'itemId' })

                    }
                ]
            };

            const exp = new Map<string, any>();
            exp.set('ITEMID', { Image: 'img', ItemID: 'itemId' });

            const out = service.parseResponse(mockRes);

            expect(out).toEqual(exp);
        });
    });

    describe('parseData', () => {
        it('should check parseData method return parsed data', () => {
            cmsUtilService.parseAllImageAttributes.and.returnValue({
                image:'img'
            } as any);
            const result = {
                header: ({
                    about: ({ image: 'header', texts: [] }),
                    benefits: ({
                        easier: ({ image: 'easier', texts: [] }),
                        safer: ({ image: 'safer', texts: [] })
                    }),
                    gantry: ({ image: 'gantry', texts: [] })
                }),
                signage: ({
                    content: ({ image: ['signage'], texts: [] }),
                    expanded: ({
                        content: ({ image: 'siganage_expanded', texts: [] }),
                        children: [({ image: 'img', texts: [] })]
                    })
                }),
                tollPolicyRoadWay: ({ image: ['toll'], texts: [] }),
                faq: ({ title: undefined })
            };

            const resMap = new Map<string, any>();
            resMap.set('HEADER', { Image: 'header', ItemID: 'itemId' });
            resMap.set('EASIER', { Image: 'easier', ItemID: 'itemId' });
            resMap.set('SAFER', { Image: 'safer', ItemID: 'itemId' });
            resMap.set('GANTRY', { Image: 'gantry', ItemID: 'itemId' });
            resMap.set('SIGNAGE', { Image: 'signage', ItemID: 'itemId' });
            resMap.set('SIGNAGE_EXPANDED', { Image: 'siganage_expanded', ItemID: 'itemId',
             Children: [{ Image: {image: 'img'}, texts: 'text' }] });
            resMap.set('TOLL', { Image: 'toll', ItemID: 'itemId' });
            resMap.set('TITLE', { Image: 'title', ItemID: 'itemId' });
            resMap.set('HEADER', { Image: 'header', ItemID: 'itemId' });

            const cmsObj = {
                header: 'HEADER',
                easierRow: 'EASIER',
                saferRow: 'SAFER',
                gantry: 'GANTRY',
                signageChanges: 'SIGNAGE',
                signageChangesExpanded: 'SIGNAGE_EXPANDED',
                tollPolicyRoadWay: 'TOLL',
                faqTitle: 'TITLE'
            };

            const out = service.parseData(cmsObj, resMap);

            expect(out).toEqual(result as any);
        });
    });
});

