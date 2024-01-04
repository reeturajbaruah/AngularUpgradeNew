import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PipesModule } from '../../pipes/module';
import { TollRoadInformationComponent } from './tollRoadInformation.component';
import { StateService } from '@uirouter/angular';

describe('TollRoadInformationComponent', () => {
    let component: TollRoadInformationComponent;
    let fixture: ComponentFixture<TollRoadInformationComponent>;
    let state: jasmine.SpyObj<StateService>;


    beforeEach(async () => {
        state = jasmine.createSpyObj('StateService', ['go']);

        await TestBed.configureTestingModule({
            declarations: [TollRoadInformationComponent],
            providers: [
                { provide: StateService, useFactory: () => state }
            ],
            imports: [
                PipesModule
            ]
        }).compileComponents();

    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TollRoadInformationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
