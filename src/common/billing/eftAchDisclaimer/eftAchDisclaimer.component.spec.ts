import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DialogService, GenericRepoService, ResponseErrorService } from 'common/services';
import { } from 'jasmine';
import { StorefrontUtilityService } from '../../../storefront/services/storefrontUtility.service';
import { shortContentCmsId as EftAchCmsId, EftAchDisclaimerComponent } from './eftAchDisclaimer.component';

describe('eftAchDisclaimerComponent', () => {

    let fixture: ComponentFixture<EftAchDisclaimerComponent>;
    let component: EftAchDisclaimerComponent;

    let genericRepo: any;
    let responseErrorService: jasmine.SpyObj<any>;
    let storefrontUtilityService: jasmine.SpyObj<any>;
    let dialogService: DialogService;

    beforeEach(async () => {

        //API Mock
        genericRepo = {
            dataFactory: {
                getCmsPageById: jasmine.createSpy('getCmsPageById'),
            }
        };
        genericRepo.dataFactory.getCmsPageById.and.resolveTo({
            cmsResponse: JSON.stringify({
                ShortDescription: 'Short Test'
            })
        });

        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree']);

        storefrontUtilityService = { isRunningAsKiosk: false };
        dialogService = jasmine.createSpyObj('dialogService', ['openGenericModal']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    EftAchDisclaimerComponent
                ],
                imports: [FormsModule],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: GenericRepoService, useFactory: () => genericRepo },
                    { provide: StorefrontUtilityService, useFactory: () => storefrontUtilityService },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: DialogService, useFactory: () => dialogService }

                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(EftAchDisclaimerComponent);
        component = fixture.debugElement.componentInstance;
    });

    beforeEach(() => {
        responseErrorService.isErrorFree.and.returnValue(true);
    });


    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        it('should call api.getCmsPageById and set cmsContent correctly if no errors',
            async () => {
                //Assemble
                genericRepo.dataFactory.getCmsPageById.and.resolveTo({
                    cmsResponse: JSON.stringify({
                        Title: 'fakeTitle',
                        ShortDescription: 'fake short desc',
                        Paramaters: 'fakeParams'
                    })
                });

                //Act
                await component.ngOnInit();

                //Assemble
                expect(genericRepo.dataFactory.getCmsPageById).toHaveBeenCalledOnceWith(
                    { ItemId: EftAchCmsId, Fields: 'ShortDescription' });
                expect(component.cmsContent.ShortDescription = 'fake short desc');
            });

        it('should call api.getCmsPageById but set cmsContent correctly if there are errors',
            async () => {

                //Assemble
                responseErrorService.isErrorFree.and.returnValue(false);
                genericRepo.dataFactory.getCmsPageById.and.resolveTo({
                    cmsResponse: JSON.stringify({
                        Title: 'fakeTitle',
                        ShortDescription: 'fake short desc',
                        Paramaters: 'fakeParams'
                    })
                });

                //Act
                await component.ngOnInit();

                //Assemble
                expect(genericRepo.dataFactory.getCmsPageById).toHaveBeenCalledOnceWith(
                    { ItemId: EftAchCmsId, Fields: 'ShortDescription' });
                expect(component.cmsContent.ShortDescription = '');
            });


    });

    describe('bubbledClick', () => {

        it('asmodal false is handled', () => {
            component['asModal'] = false;
            const event = {
                target: {},
                preventDefault: jasmine.createSpy('preventDefault')
            } as any;
            component.bubbledClick(event);

            expect(dialogService.openGenericModal).not.toHaveBeenCalled();
            expect(event.preventDefault).not.toHaveBeenCalled();
        });

        it('asmodal true and non-anchored clicked', () => {
            component['asModal'] = true;
            const event = {
                target: {
                    localName: 'div'
                },
                preventDefault: jasmine.createSpy('preventDefault')
            } as any;
            component.bubbledClick(event);

            expect(dialogService.openGenericModal).not.toHaveBeenCalled();
            expect(event.preventDefault).not.toHaveBeenCalled();
        });

        it('asmodal true and anchored clicked', () => {
            component['asModal'] = true;
            const event = {
                target: {
                    localName: 'a',
                    href: 'about:blank'
                },
                preventDefault: jasmine.createSpy('preventDefault')
            } as any;
            component.bubbledClick(event);

            expect(dialogService.openGenericModal).toHaveBeenCalled();
            expect(event.preventDefault).toHaveBeenCalled();
        });

    });


});
