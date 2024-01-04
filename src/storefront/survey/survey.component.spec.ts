import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { StorefrontService } from '../services/storefront.service';
import { SurveyComponent } from './survey.component';
import { CmsUtilService } from '../../cms/services';
import { WizardComponent } from '../../common/ui';

describe('component: SurveyComponent - storefront', () => {

    let fixture: ComponentFixture<SurveyComponent>;
    let component: SurveyComponent;
    let storefrontService: jasmine.SpyObj<StorefrontService>;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;

    beforeEach(async () => {

        storefrontService = jasmine.createSpyObj('StorefrontService', ['delay', 'postSurvey']);;
        cmsUtilService = jasmine.createSpyObj('CmsUtilService', ['parseAllImageAttributes']);;

        await TestBed
            .configureTestingModule({
                declarations: [
                    SurveyComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    CommonModule
                ],
                providers: [
                    { provide: StorefrontService, useFactory: () => storefrontService },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(SurveyComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });

    describe('proceed', () => {
        it('should do nothing if wizardUI is undefined', async () => {
            //Act
            await component.proceed(undefined);

            //Assert
            expect(storefrontService.delay).not.toHaveBeenCalled();
        });

        it('should do nothing if wizardUI is undefined', async () => {
            //Act
            await component.proceed({ gotoNextState: () => { } } as WizardComponent);

            //Assert
            expect(storefrontService.delay).toHaveBeenCalled();
            expect(component.show).toEqual(false);
        });
    });

    describe('Submit', () => {
        it('should not call postSurvey', async () => {
            component.selectedValue = undefined;

            //Act
            await component.submit();

            //Assert
            expect(storefrontService.postSurvey).not.toHaveBeenCalled();
        });

        it('should not call postSurvey', async () => {
            component.selectedValue = null;

            //Act
            await component.submit();

            //Assert
            expect(storefrontService.postSurvey).not.toHaveBeenCalled();
        });

        it('should not call postSurvey', async () => {
            component.selectedValue = 2;

            //Act
            await component.submit();

            //Assert
            expect(storefrontService.postSurvey).not.toHaveBeenCalled();
        });

        it('should call postSurvey', async () => {
            component.selectedValue = 0;
            component.comments = 'comments';

            //Act
            await component.submit();

            //Assert
            expect(storefrontService.postSurvey).toHaveBeenCalledWith('comments', 0);
            expect(component.submitted).toEqual(true);
        });

        it('should call postSurvey with null value for as argument 0', async () => {
            component.selectedValue = 0;
            component.comments = '';

            //Act
            await component.submit();

            //Assert
            expect(storefrontService.postSurvey).toHaveBeenCalledWith(null, 0);
            expect(component.submitted).toEqual(true);
        });
    });
});
