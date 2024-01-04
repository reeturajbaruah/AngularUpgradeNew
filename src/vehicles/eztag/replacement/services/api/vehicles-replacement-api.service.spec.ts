import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { IReplacementApiRequest, IReplacementApiResponse } from 'vehicles/eztag/replacement/models/model';
import { HttpService } from '../../../../../common/services/httpService/http.service';
import { VehiclesReplacementApiService } from './vehicles-replacement-api.service';


describe('Replacement Api Service', () => {

    let vehiclesReplacementApiService: VehiclesReplacementApiService;
    let httpService: jasmine.SpyObj<HttpService>;

    beforeEach(() => {

        httpService = jasmine.createSpyObj('httpService', ['post']);

        TestBed.configureTestingModule({
            providers: [
                VehiclesReplacementApiService,
                { provide: HttpService, useValue: httpService },

            ]
        });

        vehiclesReplacementApiService = TestBed.inject(VehiclesReplacementApiService);

    });

    it('defines the service', () => {
        expect(vehiclesReplacementApiService).toBeDefined();
    });

    it('calls the replace endpoint', async () => {
        await vehiclesReplacementApiService.replace({} as IReplacementApiRequest);

        expect(httpService.post).toHaveBeenCalled();

    });

    it('confirms the vehicle resplacement', async () => {
        const successStatus = true;
        httpService.post.and.resolveTo({
            successStatus
        } as IReplacementApiResponse);

        const res = await vehiclesReplacementApiService.replace({} as IReplacementApiRequest);

        expect(httpService.post).toHaveBeenCalled();
        expect(res.successStatus).toEqual(successStatus);
    });


});
