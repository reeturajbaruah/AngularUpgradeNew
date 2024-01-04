import { } from 'jasmine';
import { HttpService } from '../../common/services';

import { WebApisService } from '../services/webApis.service';


describe('webApisService', () => {

    let service: WebApisService;
    let httpService: jasmine.SpyObj<HttpService>;

    beforeEach(() => {

        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);

        service = new WebApisService(httpService);
    });

    describe('canary', () => {

        
        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });
    
    describe('validateRoutingNumber', () => {

        it('should call httpService.post', async () => {

            const bankAcctRequest = {
                accountType: 'Personal',
                accountNumber: '1111111111111',
                routingNumber: '22222222'
            };

            service.validateRoutingNumber(bankAcctRequest);

            expect(httpService.post)
                .toHaveBeenCalledWith('api/sessions/Billing/ValidateEFTRouting', bankAcctRequest);
            expect(httpService.post).toHaveBeenCalledTimes(1);
        });
    });
});
