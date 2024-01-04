import { ErrorMessagePopUpModalComponent } from 'common/ui/modals/errorMessagePopUpModal/errorMessagePopUpModal.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PipesModule } from 'pipes/module';
import { GenericRepoService } from '../../../services';

describe('billingModalComponent', () => {
    let genericRepo: any;
    let fixture: ComponentFixture<ErrorMessagePopUpModalComponent>;
    let component: ErrorMessagePopUpModalComponent;

    beforeEach(async () => {
        genericRepo = {
            dataFactory: {
                getCmsPageById: jasmine.createSpy('getCmsPageById'),
            }
        };
        genericRepo.dataFactory.getCmsPageById.and.returnValue({
            cmsResponse: '{ "Title": "fake cms title", "ShortDescription": "fake cms short desc" }',
            errors: []
        });

        await TestBed.configureTestingModule({
            declarations: [ErrorMessagePopUpModalComponent],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [PipesModule],
            providers: [{ provide: GenericRepoService, useFactory: () => genericRepo }]
        }).compileComponents();

        fixture = TestBed.createComponent(ErrorMessagePopUpModalComponent);
        component = fixture.debugElement.componentInstance;

        spyOn<any>(component, 'getCmsContent').and.returnValue({
                cmsResponse: { Title: 'fake cms title', ShortDescription: 'fake cms short desc' },
                errors: []
        });
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        it('should call getCmsContent()', async () => {
            await component.ngOnInit();
            expect(component['getCmsContent']).toHaveBeenCalled();
        });
    });

    describe('getCmsContent', () => {
        beforeEach(() => {
            (component['getCmsContent'] as jasmine.Spy).and.callThrough();
        });

        it('should call api.getCmsPageId() 1 time', async () => {
            //Assemble
            genericRepo.dataFactory.getCmsPageById.and.returnValue({
                cmsResponse: '{ "Title": "fake cms title", "ShortDescription": "fake cms short desc" }',
                errors: ['error1', 'error2']
            });

            //Act
            await component['getCmsContent']();

            //Assert
            expect(genericRepo.dataFactory.getCmsPageById).toHaveBeenCalledTimes(1);
        });

        it('should return with correct object if no errors are returned for cms call', async () => {
            //Act
            const result = await component['getCmsContent']();

            //Assert
            expect(genericRepo.dataFactory.getCmsPageById).toHaveBeenCalledTimes(1);
            expect(result).toEqual({ Title: 'fake cms title', ShortDescription: 'fake cms short desc' });
        });

        it('should return with empty object {} if errors are returned for cms call', async () => {
            //Assemble
            genericRepo.dataFactory.getCmsPageById.and.returnValue({
                cmsResponse: '{ "Title": "fake cms title", "ShortDescription": "fake cms short desc" }',
                errors: ['error1', 'error2']
            });

            //Act
            const result = await component['getCmsContent']();
            
            //Assert
            expect(genericRepo.dataFactory.getCmsPageById).toHaveBeenCalledTimes(1);
            expect(result).toEqual({});
        });
    });
});
