import { fakeAsync, tick } from '@angular/core/testing';
import { ResponseErrorService, HttpService } from 'common/services';
import { } from 'jasmine';
import { IAddVehicleRequest } from 'account/create/models/add-vehicle.models';
import { VehicleOperationApiService } from './webapi-service';
import { TagType } from 'common/models';
import { IEZTag } from 'vehicles/interfaces';

describe('web api service', () => {

    let httpService: jasmine.SpyObj<HttpService>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let service: VehicleOperationApiService;

    beforeEach(() => {
        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);
        httpService.post.and.resolveTo({ errors: [] });
        httpService.get.and.resolveTo({ errors: [] });
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);

        service = new VehicleOperationApiService(httpService, responseErrorService);
    });
    

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('add', () => {
        it('should check add invokes proper api url with proper response', fakeAsync(() => {
            responseErrorService.isErrorFree.and.returnValue(true);
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

            service.add(request);

            tick();
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AddEZTag/AddEZTag', request);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
        }));
    });

    describe('edit', () => {
        it('should check edit invokes proper api url with proper response', fakeAsync(() => {
            responseErrorService.isErrorFree.and.returnValue(true);

            service.edit({} as any);

            tick();
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AddEZTag/UpdateEZTag', {} as any);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
        }));
    });

    describe('saveDevice', () => {
        it('should invoke api post call saveDevice and return baseResponse', fakeAsync(() => {
            responseErrorService.isErrorFree.and.returnValue(true);

            service.delete({} as any);

            tick();
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/AddEZTag/DeleteEZTag', {} as any);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith({ errors: [] } as any);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith({ errors: [] } as any);
        }));
    });
});
