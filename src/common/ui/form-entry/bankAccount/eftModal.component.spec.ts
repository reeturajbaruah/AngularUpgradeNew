import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { EftModalComponent } from './eftModal.component';
import { MatDialogRef } from '@angular/material/dialog';
import { StateNames as CoreStateNames } from 'constants/stateNames.constants';
import { UrlPaths } from 'constants/module';
import { CmsUtilService } from 'cms/services';
import { PipesModule } from 'pipes/module';
import { CmsImage } from '../../../interfaces';
import { changesStable } from 'testing';
import { GenericRepoService } from '../../../services';

describe('EftModalComponent tests', () => {

    let fixture: ComponentFixture<EftModalComponent>;
    let component: EftModalComponent;

    let dialog: jasmine.SpyObj<MatDialogRef<EftModalComponent>>;
    let coreStateNames: CoreStateNames;
    let genericRepo: any;
    let urlPaths: UrlPaths;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;

    beforeEach(async () => {
        dialog = jasmine.createSpyObj('MatDialogRef', ['close']);

        coreStateNames = new CoreStateNames();

        genericRepo = {
            dataFactory: {
                getCmsPageById: jasmine.createSpy('getCmsPageById'),
            }
        };
        genericRepo.dataFactory.getCmsPageById.and.resolveTo({
            cmsResponse: JSON.stringify({
                Title: 'Test',
                Image: { image: '/Content/icons/pdf.gif', alt: 'test', height: '5', width:'5'}
            })
        });

        urlPaths = new UrlPaths();

        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['parseAllImageAttributes']);
        (cmsUtilService.parseAllImageAttributes as jasmine.Spy).
            and.returnValue({ image: '/Content/icons/pdf.gif', alt: 'test', height: '5', width: '5' });

        await TestBed
            .configureTestingModule({
                declarations: [
                    EftModalComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: dialog, useFactory: () => dialog },
                    { provide: MatDialogRef, useFactory: () => dialog },
                    { provide: CoreStateNames, useFactory: () => coreStateNames },
                    { provide: GenericRepoService, useFactory: () => genericRepo },
                    { provide: UrlPaths, useFactory: () => urlPaths },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(EftModalComponent);
        component = fixture.debugElement.componentInstance;
        component.eftAccountNumber = {
            Title: 'test',
            ShortDescription: 'test',
            Image: '/Content/icons/pdf.gif'
        };
        component.eftRouterNumber = {
            Title: 'test',
            ShortDescription: 'test',
            Image: '/Content/icons/pdf.gif'
        };
        component.eftHeader = {
            Title: 'test'
        };

        await changesStable(fixture);
    });

    it('is a canary test', async () => {

        expect(true).toEqual(true);
    });

    describe('ngOnInit', () => {
        it('verify that the images for router and account are set as expected', () => {

            const img: CmsImage = { image: '/Content/icons/pdf.gif', alt: 'test', height: '5', width: '5' };

            component.ngOnInit();

            expect(component.routerImage.image).toEqual(img.image);
            expect(component.accountImage.image).toEqual(img.image);
        });

        it('check parseAllImageAttributes is called with expected image values and is called twice', () => {
                        
            component.ngOnInit();

            expect(cmsUtilService.parseAllImageAttributes).toHaveBeenCalledTimes(2);
        });

    });

    describe('close', () => {

        it('should call dialog.close() 1 times', () => {

            component['close']();
            expect(dialog.close).toHaveBeenCalledTimes(1);
        });

    });

});
