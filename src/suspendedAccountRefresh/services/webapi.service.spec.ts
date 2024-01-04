import { } from 'jasmine';

import { WebApiService } from './webapi.service';


describe('webApiService', () => {

    let service: WebApiService;
    let httpService: jasmine.SpyObj<any>;

    beforeEach(() => {

        httpService = jasmine.createSpyObj('httpService', ['get']);

        service = new WebApiService(httpService);
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(service).toBeDefined();
        });
    });

    describe('getSuspendedAccountData', () => {

        it('should call httpService.get', async () => {

            await service.getSuspendedAccountData();

            expect(httpService.get)
                .toHaveBeenCalledWith(service['suspendedAccountDataUrl']);
            expect(httpService.get).toHaveBeenCalledTimes(1);
        });

        it('should return value returned by httpService.get', async () => {

            httpService.get.and.returnValue(Promise.resolve('fake search response'));

            const result = await service.getSuspendedAccountData();

            expect(result).toBe('fake search response' as any);
        });
    });

    describe('getSuspendedAccountStatus', () => {

        it('should call httpService.get', async () => {

            await service.getSuspendedAccountStatus();

            expect(httpService.get)
                .toHaveBeenCalledWith(service['suspendedAccountStatusUrl']);
            expect(httpService.get).toHaveBeenCalledTimes(1);
        });

        it('should return value returned by httpService.get', async () => {

            httpService.get.and.returnValue(Promise.resolve('fake response'));

            const result = await service.getSuspendedAccountStatus();

            expect(result).toBe('fake response' as any);
        });
    });

});
