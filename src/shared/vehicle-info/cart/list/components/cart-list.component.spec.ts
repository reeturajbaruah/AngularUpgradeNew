import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogService } from 'common/services';
import { Event, IEZTag, IVehicleConfig } from 'shared/vehicle-info/models';
import { TagType } from 'common/models';
import { VehicleCartListComponent } from './cart-list.component';
import { mockConfig, mockCartListData, mockVehicle } from 'shared/vehicle-info/mock';

describe('VehicleCartListComponent', () => {
    let component: VehicleCartListComponent;
    let fixture: ComponentFixture<VehicleCartListComponent>;
    let dialogService: jasmine.SpyObj<DialogService>;

    beforeEach(async () => {
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered']);

        await TestBed.configureTestingModule({
            declarations: [ VehicleCartListComponent ],
            providers: [
                { provide: DialogService, useFactory: () => dialogService }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(VehicleCartListComponent);
        component = fixture.debugElement.componentInstance;
        component.data = mockCartListData;
    });

    describe('canary', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('removeVehicle', () => {
        it('should emit remove vehicle event', () => {
            // Arrange
            spyOn(component.vehicleEvent$, 'emit');
            const index = 1;

            // Act
            component.removeVehicle(index);

            // Assert
            expect(component.vehicleEvent$.emit).toHaveBeenCalledWith({ name: Event.Remove, data: { index } });
        });
    });

    describe('editVehicle', () => {
        it('should emit edit vehicle event', () => {
            // Arrange
            spyOn(component.vehicleEvent$, 'emit');
            const index = 1;
            const vehicle: IEZTag = mockVehicle;

            // Act
            component.editVehicle(vehicle, index);

            // Assert
            expect(component.vehicleEvent$.emit).toHaveBeenCalledWith({ name: Event.Edit, data: { vehicle, index } });
        });
    });

    describe('addAdditionalVehicle', () => {
        it('should call openSliderCentered and not emit the event if dialog returns false', async () => {
            // Arrange
            dialogService.openSliderCentered.and.returnValue(Promise.resolve(false));
            spyOn(component.vehicleEvent$, 'emit');

            // Act
            await component.addAdditionalVehicle();

            // Assert
            expect(dialogService.openSliderCentered).toHaveBeenCalled();
            expect(component.vehicleEvent$.emit).not.toHaveBeenCalled();
        });

        it('should call openSliderCentered and emit the event if dialog returns true', async () => {
            // Arrange
            dialogService.openSliderCentered.and.returnValue(Promise.resolve(true));
            spyOn(component.vehicleEvent$, 'emit');

            // Act
            await component.addAdditionalVehicle();

            // Assert
            expect(dialogService.openSliderCentered).toHaveBeenCalled();
            expect(component.vehicleEvent$.emit).toHaveBeenCalled();
        });
    });

    describe('initNewVehicle', () => {
        it('should initialize new vehicle', () => {
            // Arrange & Act
            const newVehicle = (component as any).initNewVehicle();

            // Assert
            expect(newVehicle).toEqual({
                licState: 'TX',
                vehicleClassCode: 2,
                motorcycle: false,
                activePbpTagExist: false,
                isMotorcycleDisabled: true,
                tagTypeCode: TagType.Tag,
                acctTagSeq: -1
            });
        });
    });

    describe('getAdditioanlVehicleDialogData', () => {
        it('should get dialog data', () => {
            // Arrange
            const vehicle: IEZTag = mockVehicle;

            // Act
            const dialogData = (component as any).getAdditioanlVehicleDialogData(vehicle);

            // Assert
            expect(dialogData).toEqual({
                vehicleInfo: vehicle,
                modalCms: {
                    vehicleInfoTitle: mockCartListData.modalContent.add.Title,
                    tempPlateInfo: mockCartListData.modalContent.add.LongDescription
                },
                stateList: mockCartListData.states,
                plateIsReadOnly: false,
                motorcycleDisabled: false,
                config: mockCartListData.config
            });
        });
    });

    describe('getConfig', () => {
        it('should modify config if ezTagOrder exists', () => {
            // Arrange
            const config: IVehicleConfig = mockConfig;

            // Act
            const modifiedConfig = (component as any).getConfig(config);

            // Assert
            expect(modifiedConfig.ezTagOptionConfig.ezTagOrder.flag).toBeTruthy();
        });

        it('should return null if no config', () => {
            // Arrange & Act
            const modifiedConfig = (component as any).getConfig(null);

            // Assert
            expect(modifiedConfig).toBeNull();
        });
    });
});
