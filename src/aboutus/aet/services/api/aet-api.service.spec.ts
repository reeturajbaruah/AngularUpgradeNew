
import { HttpService } from 'common/services';
import { AetApiService } from './aet-api.service';

describe('AetApiService', () => {

    let httpService: jasmine.SpyObj<HttpService>;
    let service: AetApiService;

    beforeEach(() => {
        httpService = jasmine.createSpyObj('httpService', [ 'post']);
        httpService.post.and.resolveTo({ errors: [] });

        service = new AetApiService(httpService);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('getCmsPagesIds', () => {
        it('should check getCmsPagesIds invokes post method with proper params', () => {
            const mockParam = [{itemId: '1'}];
            const endpoint = 'api/sessions/GenericCms/GetCmsPagesByIds';
            const payload = { requests: mockParam };

            service.getCmsPagesIds(mockParam);

            expect(httpService.post).toHaveBeenCalledWith(endpoint, payload);
        });
    });
});
