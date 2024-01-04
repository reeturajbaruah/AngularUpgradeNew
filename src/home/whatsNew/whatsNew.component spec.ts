import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CmsUtilService } from 'cms/services/cmsUtil/cmsUtil.service';
import { PipesModule } from 'pipes/module';
import { WhatsNewComponent } from './whatsNew.component';
import { BREAKPOINTS, BreakPoint } from '@angular/flex-layout';
import { IMedia, IMetaInfo, IWhatsNewPageCmsContent } from './whatsNew.interface';
import { SiteCoreItem } from 'cms/cms.module';

type CmsDisplay = SiteCoreItem & IMetaInfo & IMedia;


describe('unit tests for whats new page', async () => {

    let fixture: ComponentFixture<WhatsNewComponent>;
    let comp: WhatsNewComponent;
    const whatsNewPageCmsContent = {} as IWhatsNewPageCmsContent;

    beforeEach(async () => {

        const cmsUtilServiceSpy = jasmine.createSpyObj('cmsUtilService', ['parseAllImageAttributes']);
        (cmsUtilServiceSpy.parseAllImageAttributes as jasmine.Spy).and.callFake(p => ({ image: p }));

        whatsNewPageCmsContent.banner = 'THE NEW HCTRA.ORG';
        whatsNewPageCmsContent.Title = 'SEE WHATS NEW';
        whatsNewPageCmsContent.LongDescription = 'Test long description';

        whatsNewPageCmsContent.Children = [
            {
                MediaType: 'Image',
                MediaURL: '',
                Image: 'image4',
                MobileImage: 'mobileImage4',
                sort: '1',
                isActive: '1',
                ShortDescription: '',
                LongDescription: 'test desc',
                Title: 'Your New EZ Tag Dashboad'
            } as CmsDisplay,
            {
                MediaType: 'Image',
                MediaURL: '',
                Image: 'image3',
                MobileImage: 'mobileImage3',
                sort: '2',
                isActive: '1',
                ShortDescription: '',
                LongDescription: 'test desc',
                Title: 'Our New Home Page'
            } as CmsDisplay
        ];

        await TestBed.configureTestingModule({
    declarations: [WhatsNewComponent],
    imports: [CommonModule, PipesModule],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [
        { provide: CmsUtilService, useFactory: () => cmsUtilServiceSpy },
        { provide: BREAKPOINTS, useFactory: () => ([{ alias: 'lt-md', mediaQuery: 'screen' }] as BreakPoint[]) }
    ],
    teardown: { destroyAfterEach: false }
});

        fixture = TestBed.createComponent(WhatsNewComponent);
        comp = fixture.componentInstance;
    });

    it('defines component', async () => {
        expect(comp).toBeDefined();
    });

    it('checks the no of displays from cms', async () => {
        comp.whatsNewPageCmsContent = whatsNewPageCmsContent;
        await comp.ngOnInit();
        expect(comp.whatsNewPageCmsContent.Children.length).toEqual(2);
    });

    it('check the no of dynamic display to map on UI', async () => {
        comp.whatsNewPageCmsContent = whatsNewPageCmsContent;
        await comp.ngOnInit();
        expect(comp.dynamicDisplays.length).toEqual(comp.whatsNewPageCmsContent.Children.length);
    });

    it('check the  title of dynamic display content', async () => {
        comp.whatsNewPageCmsContent = whatsNewPageCmsContent;
        await comp.ngOnInit();
        const display = comp.dynamicDisplays[0];
        expect(display.title).toEqual(comp.whatsNewPageCmsContent.Children[0].Title);

    });

    it('check the content of dynamic display content', async () => {
        comp.whatsNewPageCmsContent = whatsNewPageCmsContent;
        await comp.ngOnInit();
        const display = comp.dynamicDisplays[0];
        expect(display.content).toEqual(comp.whatsNewPageCmsContent.Children[0].LongDescription);

    });

});
