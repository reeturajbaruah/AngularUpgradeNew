import { } from 'jasmine';
import { FlexbookerConfigResponse, FlexbookerService } from '../services/flexbooker.service';


describe('flexbooker config', () => {

    let httpService: jasmine.SpyObj<any>;
    let responseErrorService: jasmine.SpyObj<any>;
    let service: FlexbookerService;


    beforeEach(() => {
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree']);
        httpService = jasmine.createSpyObj('httpService', ['get']);
        service = new FlexbookerService(httpService, responseErrorService);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('getFlexbookerConfigErrorFree', () => {
        it('should make a basic api call', async () => {
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
            httpService.get.and.returnValue(Promise.resolve({ errors: [] }));

            const response = await service.getFlexbookerConfig();

            expect(response).toBeDefined();
            expect(httpService.get).toHaveBeenCalledWith('/api/flexbooker/config');
        });
    });

    describe('getFlexbookerConfigWithErrors', () => {
        it('should make a basic api call', async () => {
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(false);
            httpService.get.and.returnValue(Promise.resolve({ errors: [] }));

            const response = await service.getFlexbookerConfig();

            expect(response).toBeDefined();
            expect(response.skipBooking).toBeTrue();
            expect(response.iframeBookingUrl).toEqual('');
            expect(httpService.get).toHaveBeenCalledWith('/api/flexbooker/config');
        });
    });
});
