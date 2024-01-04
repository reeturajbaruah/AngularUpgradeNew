import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CMSApiService } from '../../cms/services/cmsApi/cms-api.service';
import { PipesModule } from '../../pipes/module';
import { GenericHeaderBodyComponent } from './genericHeaderBody.component';

describe('GenericHeaderBodyComponent', () => {
    let component: GenericHeaderBodyComponent;
    let fixture: ComponentFixture<GenericHeaderBodyComponent>;
    let cmsApiService: jasmine.SpyObj<CMSApiService>;


    beforeEach(async () => {
        cmsApiService = jasmine.createSpyObj('CMSApiService', ['getCmsPagesIds']);

        await TestBed.configureTestingModule({
            declarations: [GenericHeaderBodyComponent],
            providers: [
                { provide: CMSApiService, useFactory: () => cmsApiService }
            ],
            imports: [
                PipesModule
            ]
        }).compileComponents();

    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GenericHeaderBodyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
