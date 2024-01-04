import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, KeyValueDiffers } from '@angular/core';
import { PipesModule } from 'pipes/module';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CmsContentComponent } from './cmsContent.component';
import { CmsReplacementService } from 'cms/services';
import { changesStable } from 'testing';

describe('directive: compileTemplate', () => {

    let fixture: ComponentFixture<CmsContentComponent>;
    let component: CmsContentComponent;
    let replacementService: jasmine.SpyObj<CmsReplacementService>;

    beforeEach(async () => {

        replacementService = jasmine.createSpyObj('replacementService', ['getTemplateTransformer']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    CmsContentComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: CmsReplacementService, useFactory: () => replacementService },
                    KeyValueDiffers
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(CmsContentComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('template change', () => {

        let originalTemplateTransformerSpy; 
        let newTemplateTransformerSpy;

        beforeEach(async () => {

            component.data = { someProp: 'fake' };

            await changesStable(fixture);

            originalTemplateTransformerSpy = spyOn(component as any, 'templateTransformer');
            newTemplateTransformerSpy = jasmine.createSpy('templateTransformer').and.returnValue('fake transformed template');
            replacementService.getTemplateTransformer.and.returnValue(newTemplateTransformerSpy);
        });

        it('should update template transformer', async () => {
            
            component.template = 'some value';

            await changesStable(fixture);

            expect(component['templateTransformer']).toBe(newTemplateTransformerSpy);
            expect(replacementService.getTemplateTransformer).toHaveBeenCalledTimes(1);
            expect(replacementService.getTemplateTransformer).toHaveBeenCalledWith('some value');
        });

        it('should call new template transformer with', async () => {

            component.template = 'some value';

            await changesStable(fixture);

            expect(originalTemplateTransformerSpy).toHaveBeenCalledTimes(0);
            expect(newTemplateTransformerSpy).toHaveBeenCalledTimes(1);
            expect(newTemplateTransformerSpy).toHaveBeenCalledWith({ someProp: 'fake' });
        });

        it('should update transformed template', async () => {

            component.template = 'some value';

            await changesStable(fixture);

            expect(component.transformedTemplate).toBe('fake transformed template');
        });
    });

    describe('data change', () => {

        let templateTransformerSpy;

        beforeEach(async () => {

            component.data = {
                someProp: 'a'
            };

            await changesStable(fixture);

            templateTransformerSpy = spyOn(component as any, 'templateTransformer').and.returnValue('transformed template good');
        });

        it('should not update transformed template when data object unchanged', async () => {

            component.data = {
                someProp: 'a'
            };

            await changesStable(fixture);

            expect(templateTransformerSpy).toHaveBeenCalledTimes(0);
            expect(component.transformedTemplate).toBe('');
        });
        
        it('should update transformed template when data object changed', async () => {

            component.data = {
                someProp: 'b'
            };

            await changesStable(fixture);

            expect(templateTransformerSpy).toHaveBeenCalledTimes(1);
            expect(templateTransformerSpy).toHaveBeenCalledWith({ someProp: 'b' });
            expect(component.transformedTemplate).toBe('transformed template good');
        });

        it('should update transformed template when data object property changed', async () => {

            component.data.someProp = 'z';

            await changesStable(fixture);

            expect(templateTransformerSpy).toHaveBeenCalledTimes(1);
            expect(templateTransformerSpy).toHaveBeenCalledWith({ someProp: 'z' });
            expect(component.transformedTemplate).toBe('transformed template good');
        });
        
        it('should not update transformed template when data object property unchanged', async () => {

            component.data.someProp = 'a';

            await changesStable(fixture);

            expect(templateTransformerSpy).toHaveBeenCalledTimes(0);
            expect(component.transformedTemplate).toBe('');
        });
        
        it('should update transformed template when data object property added', async () => {

            component.data.someOther = 'z';

            await changesStable(fixture);

            expect(templateTransformerSpy).toHaveBeenCalledTimes(1);
            expect(templateTransformerSpy).toHaveBeenCalledWith({ someProp: 'a', someOther: 'z' });
            expect(component.transformedTemplate).toBe('transformed template good');
        });
        
        it('should update transformed template when data object property removed', async () => {

            delete component.data.someProp;

            await changesStable(fixture);

            expect(templateTransformerSpy).toHaveBeenCalledTimes(1);
            expect(templateTransformerSpy).toHaveBeenCalledWith({});
            expect(component.transformedTemplate).toBe('transformed template good');
        });
    });
});
