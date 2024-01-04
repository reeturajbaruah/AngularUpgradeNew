import { IEZTag } from 'shared/vehicle-info/models';
import { VehicleOperationService } from '../service/vehicle-operation-service';
import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { VehiclesOperationHelper } from './operation-helper';
import { StoreService } from 'account/create/services/store/store.service';
import { ToasterService } from 'common/services';

describe('Vehicle Operation Helper', () => {
    let vehicleOperationService: jasmine.SpyObj<VehicleOperationService>;
    let vehiclesOperationHelper: VehiclesOperationHelper;
    let toasterService: jasmine.SpyObj<ToasterService>;
    let store: jasmine.SpyObj<StoreService>;
    let vehicles: IEZTag[];

    beforeEach(() => {
        vehicleOperationService = jasmine.createSpyObj('vehicleOperationService', ['edit','delete']);
        toasterService = jasmine.createSpyObj('toasterService', ['show']);
        store = jasmine.createSpyObj('store', ['dispatch']);

        vehicles = [
            { licState: 'TX', licPlate: 'HLF6382201' } as IEZTag,
            { licState: 'TX', licPlate: 'HLF6382210' } as IEZTag,
            { licState: 'UT', licPlate: 'HLF6282201' } as IEZTag,
            { licState: 'CO', licPlate: 'HLF6482201' } as IEZTag,
            { licState: 'TX', licPlate: 'LCM7954' } as IEZTag,
            { licState: 'TX', licPlate: 'CBN2651' } as IEZTag
        ];

        TestBed.configureTestingModule({
            providers: [
                VehiclesOperationHelper,
                { provide: VehicleOperationService, useFactory: () => vehicleOperationService},
                { provide: ToasterService, useFactory: () => toasterService},
                { provide: StoreService, useFactory: () => store}
            ]
        });

        vehiclesOperationHelper = TestBed.inject(VehiclesOperationHelper);

    });

    it('should call vehicleOperationService edit with vehicle', async () => {

        const vehicle: IEZTag = {
            licState: 'TX',
            licPlate: 'ABC789'
        } as IEZTag;

        vehicleOperationService.edit.and.returnValue({} as any);
        await vehiclesOperationHelper.edit(vehicle, 2, vehicles);

        expect(vehicleOperationService.edit).toHaveBeenCalledWith(vehicle);
        expect(store.dispatch).toHaveBeenCalled();
    });

    it('should call toasterService.show', async () => {

        const vehicle: IEZTag = {
            licState: 'TX',
            licPlate: 'HLF6382210'
        } as IEZTag;

        await vehiclesOperationHelper.edit(vehicle, 2, vehicles, 'fake error');

        expect(toasterService.show).toHaveBeenCalledWith('Error', 'fake error');
    });

    it('should not call toasterService.show', async () => {

        const vehicle: IEZTag = {
            licState: 'TX',
            licPlate: 'HLF6382201'
        } as IEZTag;

        vehicleOperationService.edit.and.returnValue({} as any);

        await vehiclesOperationHelper.edit(vehicle, 0, vehicles, 'fake error');

        expect(toasterService.show).not.toHaveBeenCalled();
        expect(vehicleOperationService.edit).toHaveBeenCalledWith(vehicle);
        expect(store.dispatch).toHaveBeenCalled();

    });

    it('should call vehicleOperationService delete', async () => {
        
        vehicleOperationService.delete.and.returnValue({} as any);

        const vehicle = vehicles[0];

        await vehiclesOperationHelper.remove(0, vehicles);

        expect(vehicleOperationService.delete).toHaveBeenCalledWith(vehicle);
    });

    it('should not call vehicleOperationService delete', async () => {

        await vehiclesOperationHelper.remove(-1, vehicles);

        expect(vehicleOperationService.delete).not.toHaveBeenCalled();
    });
});
