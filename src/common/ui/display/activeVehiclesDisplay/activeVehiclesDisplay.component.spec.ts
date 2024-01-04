import { } from 'jasmine';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActiveVehiclesDisplayComponent } from './activeVehiclesDisplay.component';

describe('address-display component', () => {

    let fixture: ComponentFixture<ActiveVehiclesDisplayComponent>;
    let component: ActiveVehiclesDisplayComponent;

    beforeEach((() => {

        TestBed
            .configureTestingModule({
                declarations: [ActiveVehiclesDisplayComponent],
                imports: []
            })
            .compileComponents();

        fixture = TestBed.createComponent(ActiveVehiclesDisplayComponent);
        component = fixture.debugElement.componentInstance;

        component.activeVehiclesList = [];
        component.activeEZPlatesList = [];
        component.itemsPerPage = 3;

        fixture.detectChanges();
    }));

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });
});
