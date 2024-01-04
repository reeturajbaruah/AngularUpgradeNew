import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TranslationService } from 'translation/services';
import { GoogleTranslatedIconComponent } from './googleTranslatedIcon.component';
import { generate, ReplaySubject } from 'rxjs';
import { CmsUtilService } from 'cms/services';
import { cmsIds } from '../constants';
import { GenericRepoService } from '../../common/services';

describe('component: googleTranslatedIcon - storefront', () => {

    let fixture: ComponentFixture<GoogleTranslatedIconComponent>;
    let component: GoogleTranslatedIconComponent;
    let translationService: jasmine.SpyObj<TranslationService>;
    let genericRepo: any;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;
   
    let isReady: ReplaySubject<{ isAvailable: boolean }>;
    let realTime: ReplaySubject<{ status: 'starting' | 'stopping' }>;

    const cmsResponse = {
        Title: 'Test',
        Image: '<div img="fake"></div>'
    };

    beforeEach(async () => {

        isReady = new ReplaySubject<{ isAvailable: boolean }>(1);
        realTime = new ReplaySubject<{ status: 'starting' | 'stopping' }>(1);

        genericRepo = {
            dataFactory: {
                getCmsPageById: jasmine.createSpy('getCmsPageById'),
            }
        };
        genericRepo.dataFactory.getCmsPageById.and.resolveTo({
            cmsResponse: JSON.stringify(cmsResponse)
        });

        translationService = jasmine.createSpyObj('translationService',
            [
                'stopRealtimeTranslations',
                'startRealtimeTranslations',
            ],
            {
                isReadyEvent: isReady,
                realTimeTranslationsEvent: realTime
            });


        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['generateFileSrc']);
       
        await TestBed
            .configureTestingModule({
                declarations: [
                    GoogleTranslatedIconComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: TranslationService, useFactory: () => translationService },
                    { provide: GenericRepoService, useFactory: () => genericRepo },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(GoogleTranslatedIconComponent);
        component = fixture.debugElement.componentInstance;
    });

    beforeEach(() => {        
        (cmsUtilService.generateFileSrc as jasmine.Spy).and.returnValue('fakeFileSrc');       
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {

        it('can show icon', () => {

            component.ngOnInit();

            realTime.next({ status: 'starting' });

            expect(component.showIcon).toBeTruthy();
        });

        it('can not show icon', () => {

            component.ngOnInit();

            realTime.next({ status: 'stopping' });

            expect(component.showIcon).toBeFalsy();
        });

        it('can load cms data', async () => {

            const prom = Promise.resolve();
            spyOn(component as any, 'setCmsData').and.returnValue(prom);

            component.ngOnInit();

            isReady.next({ isAvailable: true });

            await prom;

            expect(component.setCmsData).toHaveBeenCalled();
        });
        it('can not load cms data', async () => {
            const prom = Promise.resolve();
            spyOn(component as any, 'setCmsData').and.returnValue(prom);

            isReady.next({ isAvailable: false });

            await prom;

            expect(component.setCmsData).not.toHaveBeenCalled();
        });

    });

    describe('setCmsData', () => {

        it('should call api.getCmsPageById() 1 times with correct itemID',
            async () => {

                //Act
                await component.setCmsData();

                expect(genericRepo.dataFactory.getCmsPageById).toHaveBeenCalled();
                const args1 = (genericRepo.dataFactory.getCmsPageById).calls.argsFor(0);
                
                expect(args1[0]).toEqual({
                    ItemId: cmsIds.Translation
                });

            });
        it('should call cmsUtilService.generateFileSrc() 1 times with correct parameter',
            async () => {

                //Act
                await component.setCmsData();

                //Assert
                expect(cmsUtilService.generateFileSrc).toHaveBeenCalledTimes(1);
                expect(cmsUtilService.generateFileSrc).toHaveBeenCalledWith(cmsResponse.Image);
            });
    });
});
