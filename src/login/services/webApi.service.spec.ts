import { } from 'jasmine';
import { WebApiService } from 'login/services/webApi.service';


describe('Login webApiService', () => {

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

    describe('claimSession', () => {
        it('should make a basic api call', async () => {
            httpService.post.and.returnValue(Promise.resolve({ errors: [] }));

            const response = await service.claimSession({ violationsData: 'fakeViolationsData' });

            expect(response).toEqual({ errors: [] } as any);
            expect(httpService.post).toHaveBeenCalledWith('/api/sessions/Session/ClaimSession',
                { violationsData: 'fakeViolationsData' });
        });
    });
});
