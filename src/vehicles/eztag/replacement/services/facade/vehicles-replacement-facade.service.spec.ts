import { TestBed } from '@angular/core/testing';
import { DeliveryMethodType } from 'common/models';
import { } from 'jasmine';
import { IEZTag } from 'vehicles/interfaces';
import { VehiclesReplacementApiService } from '../api/vehicles-replacement-api.service';
import { ReplacementStateService } from '../state/state.service';
import { VehiclesReplacementFacadeService } from './vehicles-replacement-facade.service';


describe('Replacement Facade Service', () => {

    let vehiclesReplacementFacadeService: VehiclesReplacementFacadeService;
    let stateSpy: jasmine.SpyObj<ReplacementStateService>;
    let apiSpy: jasmine.SpyObj<VehiclesReplacementApiService>;

    beforeEach(() => {

        stateSpy = jasmine.createSpyObj('state', ['getState']);
        apiSpy = jasmine.createSpyObj('api', ['replace']);

        TestBed.configureTestingModule({
            providers: [
                VehiclesReplacementFacadeService,
                { provide: ReplacementStateService, useFactory: () => stateSpy },
                { provide: VehiclesReplacementApiService, useFactory: () => apiSpy }

            ]
        });

        vehiclesReplacementFacadeService = TestBed.inject(VehiclesReplacementFacadeService);

    });

    it('defines the service', () => {
        expect(vehiclesReplacementFacadeService).toBeDefined();
    });

    it('calls the replace functionality and check status true', async () => {

        apiSpy.replace.and.resolveTo({
            successStatus: true
        });

        stateSpy.getState.and.returnValue({
            deliveryMethod: DeliveryMethodType.Mail,
            reason: 'xyz',
            replaceTag: { fullTagId: '1233 ' } as IEZTag
        });


        const res = await vehiclesReplacementFacadeService.replace();
        expect(apiSpy.replace).toHaveBeenCalled();
    });

    it('calls the replace functionality and check status false', async () => {

        apiSpy.replace.and.resolveTo({
            successStatus: false
        });

        stateSpy.getState.and.returnValue({
            deliveryMethod: DeliveryMethodType.Mail,
            reason: 'xyz',
            replaceTag: {} as IEZTag
        });


        const res = await vehiclesReplacementFacadeService.replace();
        expect(apiSpy.replace).not.toHaveBeenCalled();
        expect(res.successStatus).toEqual(false);
    });
});
