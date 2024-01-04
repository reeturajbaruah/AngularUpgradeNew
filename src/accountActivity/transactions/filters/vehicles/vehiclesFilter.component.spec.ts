import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { FilterChangeService } from '../../../services/filter/filter-change.service';
import { FilterDataManager } from '../../../services/filter/filter-data.manager';
import { VehiclesFilterComponent } from './vehiclesFilter.component';
import { OverlayModule } from '@angular/cdk/overlay';

describe('component: SearchTransactionsComponent', () => {
    let fixture: ComponentFixture<VehiclesFilterComponent>;
    let component: VehiclesFilterComponent;
    let service: jasmine.SpyObj<FilterChangeService>;
    let serviceDataManager: jasmine.SpyObj<FilterDataManager>;

    beforeEach(async () => {
        service = jasmine.createSpyObj('service', ['notifyEvent']);
        serviceDataManager = jasmine.createSpyObj('serviceDataManager', ['getVehicleFilterData']);
        serviceDataManager.getVehicleFilterData.and.returnValue([{
            text: 'My Vehicle',
            value: 'L'
        }]);

        await TestBed
            .configureTestingModule({
                declarations: [
                    VehiclesFilterComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [OverlayModule],
                providers: [
                    { provide: FilterDataManager, useFactory: () => serviceDataManager },
                    { provide: FilterChangeService, useFactory: () => service },

                ]
            })
            .compileComponents();
        fixture = TestBed.createComponent(VehiclesFilterComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('ngOnInit', () => {
        it('should call getVehiclesData', () => {
            component.ngOnInit();
            expect(component.selectedVehicle).toBe('All Vehicles');
        });
    });

    describe('close', () => {
        it('should call function close', () => {

            component.close();

            expect(component.isOpen).toBe(false);
        });
    });

    describe('resetValid', () => {
        it('should call function resetValid', () => {

            component.resetValid();
            expect(component.isValid).toBe(true);
        });
    });

    describe('notify', () => {
        it('should call function notify', () => {

            component.notify();
            expect(service.notifyEvent).toHaveBeenCalled();

        });
    });

    describe('applyFilter', () => {
        it('should call function applyFilter', () => {
            component.licensePlate = 'M';
            component.searchVehicleDropdownData = [{
                text: 'M',
                value: 'L'
            }];


            expect(component.isValid).toBeTruthy();
            expect(component.isOpen).toBe(false);

        });
    });

    describe('clear', () => {
        it('should call function close', () => {

            component.clear();

            expect(component.licensePlate).toBe('');
        });
    });

    describe( 'selectOption', () => {
        it('should call function selectOption', () => {
        component.licensePlate = 'M';
        component.searchVehicleDropdownData = [{
            text: 'M',
            value: 'L'
        }];
        expect(component.isOpen).toBe(false);
    });
});

});