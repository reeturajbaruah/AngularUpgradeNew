import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistryComponent, ICmsResponse, ImatIcon } from './matIconRegistry.component';

describe('MatIconRegistryComponent', () => {
    let component: MatIconRegistryComponent;
    let matIconRegistry: jasmine.SpyObj<MatIconRegistry>;
    let domSanitizer: jasmine.SpyObj<DomSanitizer>;
    let genericRepo: any;

    beforeEach(async () => {
        matIconRegistry = jasmine.createSpyObj('matIconRegistry', ['addSvgIcon']);
        domSanitizer = jasmine.createSpyObj('domSanitizer', ['bypassSecurityTrustResourceUrl']);
        genericRepo = {
            dataFactory: {
                getCmsPagesByIds: jasmine.createSpy('getCmsPagesByIds'),
            }
        };

        component = new MatIconRegistryComponent(genericRepo, matIconRegistry, domSanitizer);
    });

    describe('ngOnInit', () => {

        it('should call registerIconsFromCMS for both arrays', () => {
            spyOn(component as any, 'registerIconsFromCMS');

            component.ngOnInit();

            expect(component['registerIconsFromCMS']).toHaveBeenCalledTimes(2);
        });
    });

    describe('registerIconsFromCMS', () => {

        beforeEach(() => {
            spyOn(component as any, 'parseCmsContent').and.callFake((a, b) => ([{ svgCmsId: 'fakeCmsId', svgIcon: 'fakeIconName', rawCmsContent: { ItemMedialUrl: 'test' } }]));
            spyOn(component as any, 'tryAddSvgIcon').and.callFake((a) => ({ svgCmsId: 'fakeCmsId', svgIcon: 'fakeIconName', rawCmsContent: { ItemMedialUrl: 'test' } }));

            genericRepo.dataFactory.getCmsPagesByIds.and.returnValue({ responses: [{ ItemMedialUrl: 'test' }], errors: 'errors' });
        });

        it('should register all the icons needed by the website', async () => {

            await component['registerIconsFromCMS']([{ svgCmsId: 'fakeCmsId', svgIcon: 'fakeIconName', rawCmsContent: null }]);

            expect(genericRepo.dataFactory.getCmsPagesByIds).toHaveBeenCalledTimes(1);
            expect(component['tryAddSvgIcon']).toHaveBeenCalledTimes(1);
        });
    });

    describe('parseCmsContent', () => {

        it('should parse cmsContent using correct functions for each response and put them together', () => {
            const iconsArray: ImatIcon[] = [
                { svgCmsId: 'fakeCmsId', svgIcon: 'fakeIconName', rawCmsContent: null }
            ];

            const responses: ICmsResponse[] = [{ cmsResponse: '{\"ItemMedialUrl\":\"test\"}' }];

            expect(component['parseCmsContent'](iconsArray, responses)).toEqual([
                { svgCmsId: 'fakeCmsId', svgIcon: 'fakeIconName', rawCmsContent: { ItemMedialUrl: 'test' } }
            ]);
        });
    });

    describe('tryAddSvgIcon', () => {

        it('should add the icons to the registry where url exists', () => {
  
            component['tryAddSvgIcon']({ svgCmsId: 'fakeCmsId', svgIcon: 'fakeIconName', rawCmsContent: { ItemMedialUrl: 'test' } });

            expect(matIconRegistry.addSvgIcon).toHaveBeenCalledTimes(1);

        });

        it('should add the icons to the registry where url does not exist', () => {

            component['tryAddSvgIcon']({ svgCmsId: 'fakeCmsId', svgIcon: 'fakeIconName', rawCmsContent: { ItemMedialUrl: '' } });

            expect(matIconRegistry.addSvgIcon).toHaveBeenCalledTimes(0);

        });
    });

});
