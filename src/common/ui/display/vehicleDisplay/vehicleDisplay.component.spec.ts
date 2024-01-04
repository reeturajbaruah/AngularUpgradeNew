import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleDisplayComponent } from './vehicleDisplay.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('VehicleDisplayComponent', () => {
    let component: VehicleDisplayComponent;
    let fixture: ComponentFixture<VehicleDisplayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [VehicleDisplayComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(VehicleDisplayComponent);
        component = fixture.componentInstance;
        component.vehicleInfo = {
            licState: 'test',
            licPlate: 'test',
            vehicleYear: 'test',
            vehicleModel: 'test',
            vehicleMake: 'test',
            vehicleColor: 'test',
            vehicleClassCode: 'string | number',
            vehicleClassDesc: 'test;43;',
            temporaryLicPlate: false,
            motorcycle: false,
            nickname: 'test',
            isMotorcycleDisabled: true
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
