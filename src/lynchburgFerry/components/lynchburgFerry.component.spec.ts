import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CmsUtilService } from '../../cms/services';
import { FeatureToggleResolverService } from '../../common/services/featureToggleResolverService/featureToggleResolver.service';
import { PipesModule } from '../../pipes/module';
import { LynchburgFerryComponent } from './lynchburgFerry.component';

describe('LynchburgFerryComponent', () => {
    let component: LynchburgFerryComponent;
    let fixture: ComponentFixture<LynchburgFerryComponent>;
    let featureToggleResolver: jasmine.SpyObj<FeatureToggleResolverService>;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;

    beforeEach(async () => {
        featureToggleResolver = jasmine.createSpyObj('featureToggleResolver', ['isResolvedFeatureToggle']);
        cmsUtilService = jasmine.createSpyObj('CmsUtilService', ['parseAllImageAttributes']);

        featureToggleResolver.isResolvedFeatureToggle.and.resolveTo({} as any);

        await TestBed.configureTestingModule({
            declarations: [LynchburgFerryComponent],
            providers: [
                { provide: FeatureToggleResolverService, useFactory: () => featureToggleResolver },
                { provide: CmsUtilService, useFactory: () => cmsUtilService }
            ],
            imports: [
                PipesModule
            ]
        }).compileComponents();

    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LynchburgFerryComponent);
        component = fixture.componentInstance;
        component.cmsPage = {
            Children: [
                {
                    Children: [
                        {} as any
                    ]
                } as any,
            ]
        } as any;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('getStatusCode', () => {
        beforeEach(() => {
        });

        it('should return 3', () => {
            const result = component.getStatusCode('Monday', 1);
            expect(result).toEqual(3);
        });

        it('should return 2', () => {
            const result = component.getStatusCode('Monday', 270);
            expect(result).toEqual(2);
        });

        it('should return 1', () => {
            const result = component.getStatusCode('Friday', 930);
            expect(result).toEqual(1);
        });

        it('should return 3', () => {
            const result = component.getStatusCode('Saturday', 1440);
            expect(result).toEqual(3);
        });

        it('should return 2', () => {
            const result = component.getStatusCode('Saturday', 660);
            expect(result).toEqual(2);
        });

        it('should return -1', () => {
            const result = component.getStatusCode('Saturday', 1441);
            expect(result).toEqual(-1);
        });

        it('should return -1', () => {
            const result = component.getStatusCode('Moonday', 1);
            expect(result).toEqual(-1);
        });
    });
});
