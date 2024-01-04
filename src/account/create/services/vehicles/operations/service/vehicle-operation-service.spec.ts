import { IAddVehicleRequest } from 'account/create/models/add-vehicle.models';
import { IEZTag } from 'shared/vehicle-info/models';
import { VehicleOperationApiService } from '../../api/webapi-service';
import { VehicleOperationService } from './vehicle-operation-service';
import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { TagType } from 'common/models';

describe('Vehicle Operation Service', () => {
    let api: VehicleOperationApiService;
    let vehicleOperationService: VehicleOperationService;

    beforeEach(() => {
        api = jasmine.createSpyObj('api', ['add','edit','delete']);
        TestBed.configureTestingModule({
            providers: [
                VehicleOperationService,
                { provide: VehicleOperationApiService, useFactory: () => api}
            ]
        });

        vehicleOperationService = TestBed.inject(VehicleOperationService);

    });

    const vehicle: IEZTag = {
        tagId: TagType.Plate,
        fullTagId: TagType.Plate,
        acctTagSeq: -1,
        acctTagSeqSepcified: true,
        acctTagStatus: 'Test tag status text',
        tagStatusDesc: 'Test tag status description text',
        pbpStartDate: '2023-01-01',
        pbpEndDate: '2023-12-31',
        tagTypeCode: TagType.Plate,
        activePbpTagExist: false,
        tagless_Desc: 'Test tagless description text',
        acctVehicleId: 123456789,
        nicknameHasBeenManuallyCopiedinApiAndIsForDisplayOnly: false,
        licState: 'TX',
        licPlate: 'ABC789',
        vehicleYear: '2023',
        vehicleModel: 'Model 3',
        vehicleMake: 'Tesla',
        vehicleColor: 'Blue',
        vehicleClassCode: 2,
        vehicleClassDesc: '2-Axel',
        temporaryLicPlate: false,
        motorcycle: false,
        nickname: 'Test nickname text',
        isMotorcycleDisabled: false
    };

    it('should call VehicleOperationApiService add', async () => {

        const request = {
            licPlate: vehicle.licPlate,
            licState: vehicle.licState,
            temporaryLicPlate: vehicle.temporaryLicPlate,
            vehicleClassCode: vehicle.vehicleClassCode,
            vehicleColor: vehicle.vehicleColor,
            vehicleMake: vehicle.vehicleMake,
            vehicleModel: vehicle.vehicleModel,
            vehicleYear: vehicle.vehicleYear,
            vehicleClassDesc: vehicle.vehicleClassDesc,
            motorcycle: vehicle.motorcycle,
            nickname: vehicle.nickname,
            isMotorcycleDisabled: vehicle.isMotorcycleDisabled,
            tagTypeCode: vehicle.tagTypeCode,
            activePbpTagExist: vehicle.activePbpTagExist,
            acctTagSeq: vehicle.acctTagSeq,
            transactionId: 0
        } as IAddVehicleRequest;
        
        await vehicleOperationService.add(vehicle);

        expect(api.add).toHaveBeenCalledWith(request);

    });

    it('should call VehicleOperationApiService edit', async () => {

        await vehicleOperationService.edit(vehicle);

        expect(api.edit).toHaveBeenCalledWith(vehicle);
    });

    it('should call VehicleOperationApiService delete', async () => {

        await vehicleOperationService.delete(vehicle);

        expect(api.delete).toHaveBeenCalledWith(vehicle);
    });
});