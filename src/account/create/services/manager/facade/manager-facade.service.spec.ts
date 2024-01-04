import { TestBed, waitForAsync } from '@angular/core/testing';
import { ManagerFacadeService } from './manager-facade.service';
import { ManagerFacadeApiService } from '../api/manager-facade-api.service';

describe('ManagerFacadeService', () => {
    let service: ManagerFacadeService;
    let managerFacadeApiService: jasmine.SpyObj<ManagerFacadeApiService>;

    beforeEach(() => {
        managerFacadeApiService = jasmine.createSpyObj('ManagerFacadeApiService', ['getVehicles', 'getPersonalInfo', 'getBillingInfo']);
        managerFacadeApiService.getVehicles.and.resolveTo({});
        managerFacadeApiService.getPersonalInfo.and.resolveTo({});
        managerFacadeApiService.getBillingInfo.and.resolveTo({});

        TestBed.configureTestingModule({
            providers: [
                ManagerFacadeService,
                { provide: ManagerFacadeApiService, useValue: managerFacadeApiService }
            ]
        });

        service = TestBed.inject(ManagerFacadeService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should call getVehicles', waitForAsync(() => {
        service.getVehicles().then(res => {
            expect(res).toEqual({});
            expect(managerFacadeApiService.getVehicles).toHaveBeenCalled();
        });
    }));

    it('should call getPersonalInfo', waitForAsync(() => {
        service.getPersonalInfo().then(res => {
            expect(res).toEqual({});
            expect(managerFacadeApiService.getPersonalInfo).toHaveBeenCalled();
        });
    }));

    it('should call getBillingInfo', waitForAsync(() => {
        service.getBillingInfo().then(res => {
            expect(res).toEqual({});
            expect(managerFacadeApiService.getBillingInfo).toHaveBeenCalled();
        });
    }));
});