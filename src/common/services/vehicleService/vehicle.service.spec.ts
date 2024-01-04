import { CMSApiService } from 'cms/services/cmsApi/cms-api.service';
import { } from 'jasmine';
import { VehicleService, IVehicleClass, IVehicleMake } from './vehicle.service';

describe('vehicle Service', () => {

    let service: VehicleService;
    let httpService: any;
    let webStorage: jasmine.SpyObj<any>;
    let cmsApiServiceSpy: jasmine.SpyObj<CMSApiService>;

    beforeEach(() => {

        httpService = jasmine.createSpyObj('httpService', ['get']);
        webStorage = jasmine.createSpyObj('webStorage', ['setKeyValue', 'getValue', 'removeEntry']);
        cmsApiServiceSpy = jasmine.createSpyObj('api', ['getCmsPagesIds']);

        service = new VehicleService(httpService, webStorage, cmsApiServiceSpy);
    });

    describe('vehicle makes', () => {

        it('throws response if error', async () => {

            const httpServiceError = {
                errors: ['error']
            };

            (httpService.get as jasmine.Spy).and.resolveTo(httpServiceError);

            await service
                .getVehicleMakes()
                .then(() => {
                    fail('should have thrown!');
                })
                .catch(response => {
                    expect(response).toBe(httpServiceError);
                });

        });

        it('maps resonse to array', async () => {

            const response = {
                vehicleMakes: [{ vehicleMake: 'make1' }, { vehicleMake: 'make2' }]
            };

            (httpService.get as jasmine.Spy).and.resolveTo(response);

            const makes = await service.getVehicleMakes() as IVehicleMake[];

            expect(makes.length).toBe(2);
            expect(makes[0]).toEqual({ code: 'MAKE1', label: 'make1' });
            expect(makes[1]).toEqual({ code: 'MAKE2', label: 'make2' });

        });

        it('getClasses', () => {
            const a = new Promise((resolve, reject) => {
                resolve([]);
            });
            cmsApiServiceSpy.getCmsPagesIds.and.returnValue(a);
            const classes = service.getVehicleInformation();
            expect(classes).toBeInstanceOf(Object);
        });

    });

    describe('model years', () => {

        let modelsYears: string[];

        beforeEach(() => {
            service['getCurrentDate'] = () => new Date('01-01-2021');
            modelsYears = service.getModelYears();
        });

        it('should list years from this + 1 to 1900', () => {

            expect(modelsYears.length).toBe(123);

            for (let i = 0; i < 123; i++) {
                expect(modelsYears[i]).toBe((2022 - i) + '');
            }

        });

    });

    describe('webStorage', () => {

        beforeEach(() => {
            // webStorage.setKeyValue.and.returnValue();
        });

        it('setMvuDetails should call setKeyValue()', () => {
            webStorage.setKeyValue.and.returnValue();
            service.setMvuDetails({});
            expect(webStorage.setKeyValue).toHaveBeenCalled();
        });

        it('getMvuDetails should return null', () => {
            webStorage.getValue.and.returnValue(null);
            const obj = service.getMvuDetails();
            expect(webStorage.getValue).toHaveBeenCalled();
            expect(obj).toBeFalsy();
        });

        it('getMvuDetails should get alets', () => {
            webStorage.getValue.and.returnValue({ alerts: '[{}]' });
            const obj = service.getMvuDetails();
            expect(webStorage.getValue).toHaveBeenCalled();
            expect(obj.alerts).toBeInstanceOf(Array);
        });

        it('getMvuDetails should get errors', () => {
            webStorage.getValue.and.returnValue({ errors: '[{}]' });
            const obj = service.getMvuDetails();
            expect(webStorage.getValue).toHaveBeenCalled();
            expect(obj.errors).toBeInstanceOf(Array);
        });

        it('getMvuDetails should get vehicleList', () => {
            webStorage.getValue.and.returnValue({ vehicleList: '[{}]' });
            const obj = service.getMvuDetails();
            expect(webStorage.getValue).toHaveBeenCalled();
            expect(obj.vehicleList).toBeInstanceOf(Array);
        });

        it('destroyMvuDetails should call removeEntry', () => {
            webStorage.removeEntry.and.returnValue();
            service.destroyMvuDetails();
            expect(webStorage.removeEntry).toHaveBeenCalled();
        });
    });
});
