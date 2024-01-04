import { } from 'jasmine';
import { WebApiService } from '../services/webApi.service';


describe('MAT webApiService', () => {

    let httpService: jasmine.SpyObj<any>;
    let service: WebApiService;


    beforeEach(() => {
        httpService = jasmine.createSpyObj('httpService', ['post']);
        service = new WebApiService(httpService);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('checkMatEligibility', () => {
        it('should make a basic api call', async () => {
            httpService.post.and.returnValue(Promise.resolve({ errors: [] }));

            const response = await service.checkMatEligibility({ violationsData: 'fakeViolationsData' });

            expect(response).toEqual({ errors: [] });
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/MissedAToll/CheckEligibility', { violationsData: 'fakeViolationsData' });
        });
    });

    describe('matMakePayment', () => {
        it('should make a basic api call', async () => {
            httpService.post.and.returnValue(Promise.resolve({ errors: [] }));

            const response = await service.matMakePayment({ violationsData: 'fakeViolationsData' });

            expect(response).toEqual({ errors: [] });
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/MissedAToll/MakePayment',
                { violationsData: 'fakeViolationsData' });
        });
    });
});
