import { } from 'jasmine';
import { WebApisService } from '../services/webApis.service';

describe('webApisService', () => {

    let service: WebApisService;
    let httpService: jasmine.SpyObj<any>;

    beforeEach(() => {

        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);

        service = new WebApisService(httpService);
    });

    describe('canary', () => {
        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });
});
