import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AutoReplenishmentDisplayComponent } from './autoReplenishmentDisplay.component';
import { CmsResolverService } from 'cms/services';
import { IAutoReplenishmentContent } from 'shared/payment/autoReplenishment/models/models';

describe('AutoReplenishmentDisplayComponent', () => {
    let component: AutoReplenishmentDisplayComponent;
    let fixture: ComponentFixture<AutoReplenishmentDisplayComponent>;

    let cmsResolverService: jasmine.SpyObj<CmsResolverService>;

    beforeEach(async () => {
        cmsResolverService = jasmine.createSpyObj('cmsResolverService', ['resolve']);

        await TestBed.configureTestingModule({
            declarations: [AutoReplenishmentDisplayComponent],
            providers: [
                { provide: CmsResolverService, useValue: cmsResolverService }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AutoReplenishmentDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('canary test', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('ngOnInit', () => {
        it('should initialize cmsContent from cmsResolverService', async () => {
            // Arrange
            const mockCmsContent: IAutoReplenishmentContent = {
                Title: 'Test Title',
                Yes: 'Test Yes Option',
                No: 'Test No Option'
            };
            
            cmsResolverService.resolve.and.returnValue(Promise.resolve(mockCmsContent));

            // Act
            await component.ngOnInit();

            // Assert
            expect(cmsResolverService.resolve).toHaveBeenCalled();
            expect(component.cmsContent).toEqual(mockCmsContent);
        });
    });
});
