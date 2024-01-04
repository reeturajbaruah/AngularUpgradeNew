import { TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { ResponseErrorService } from 'common/services';
import { } from 'jasmine';
import { WebApiService } from './webApi.service';
import { BaseResponse } from 'common/interfaces';
import {
    IManageEzTagResponse, IMultiVehicleCheckoutRequest, ISearchTagsRequest,
    IEZTagRequest, IConfirmTagsRequest, ISwitchEzTagStatusRequest
} from 'vehicles/interfaces';
import { HttpService } from '../../../../common/services/httpService/http.service';

describe('Vehicles webApiService', () => {

    let httpService: jasmine.SpyObj<any>;
    let responseErrorService: jasmine.SpyObj<any>;
    let service: WebApiService;

    beforeEach(() => {
        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);

        TestBed.configureTestingModule({
            providers: [
                WebApiService,
                { provide: HttpService, useValue: httpService },
                { provide: ResponseErrorService, useValue: responseErrorService }
            ]
        });

        service = TestBed.inject(WebApiService);
        responseErrorService = TestBed.inject(ResponseErrorService) as jasmine.SpyObj<any>;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('getEZTagInfo', () => {
        it('should call and return value from httpService.get', async () => {
            httpService.get.and.returnValue(Promise.resolve('fake search response'));
            responseErrorService.isErrorFree.and.returnValue(true);

            const result = await service.getEZTagInfo();

            expect(httpService.get)
                .toHaveBeenCalledWith('/api/sessions/ManageVehicles/GetEzTagsAndAccountInfo');
            expect(httpService.get).toHaveBeenCalledTimes(1);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);
            expect(result).toBe('fake search response' as any);
        });

        it('should not call displayAlertsFromResponse if is not error free', async () => {
            const response = {
                errors: [{
                    message: 'Something Broke',
                    key: 'Opps'
                }],
            } as IManageEzTagResponse;

            responseErrorService.isErrorFree.and.returnValue(false);
            httpService.get.and.returnValue(Promise.resolve(response));

            await service.getEZTagInfo();

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(0);
        });
    });

    describe('searchAccountTags', () => {
        it('should call and return value from httpService.post', async () => {
            const request = {
                searchValue: 'search'
            } as ISearchTagsRequest;

            httpService.post.and.returnValue(Promise.resolve('fake search response'));
            responseErrorService.isErrorFree.and.returnValue(true);

            const result = await service.searchAccountTags(request);

            expect(httpService.post)
                .toHaveBeenCalledWith('/api/sessions/ManageVehicles/SearchAccountTags', request);
            expect(httpService.post).toHaveBeenCalledTimes(1);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);
            expect(result).toBe('fake search response' as any);
        });

        it('should call displayAlertsFromResponse if is not error free', async () => {
            const response = {
                errors: [{
                    message: 'Something Broke',
                    key: 'Opps'
                }],
            } as IManageEzTagResponse;

            const request = {
                searchValue: 'search'
            } as ISearchTagsRequest;

            httpService.post.and.returnValue(Promise.resolve(response));

            await service.searchAccountTags(request);

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(0);
        });
    });

    describe('switchTagStatus', () => {
        it('should call and return value from httpService.post', async () => {
            const request = {
                tagToSwitch: {}
            } as ISwitchEzTagStatusRequest;

            httpService.post.and.returnValue(Promise.resolve('fake search response'));
            responseErrorService.isErrorFree.and.returnValue(true);

            const result = await service.switchTagStatus(request);

            expect(httpService.post)
                .toHaveBeenCalledWith('/api/sessions/ManageVehicles/SwitchTagStatus', request);
            expect(httpService.post).toHaveBeenCalledTimes(1);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);
            expect(result).toBe('fake search response' as any);
        });

        it('should call displayAlertsFromResponse if is not error free', async () => {
            const response = {
                errors: [{
                    message: 'Something Broke',
                    key: 'Opps'
                }],
            } as IManageEzTagResponse;

            const request = {
                tagToSwitch: {}
            } as ISwitchEzTagStatusRequest;

            httpService.post.and.returnValue(Promise.resolve(response));

            await service.switchTagStatus(request);

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(0);
        });
    });

    describe('getEditEzTagData', () => {
        it('should call and return value from httpService.get', async () => {
            httpService.get.and.returnValue(Promise.resolve('fake search response'));
            responseErrorService.isErrorFree.and.returnValue(true);

            const result = await service.getEditEzTagData();

            expect(httpService.get)
                .toHaveBeenCalledWith('/api/sessions/ManageVehicles/GetEditEzTagData');
            expect(httpService.get).toHaveBeenCalledTimes(1);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);
            expect(result).toBe('fake search response' as any);
        });

        it('should call displayAlertsFromResponse if is not error free', async () => {
            const response = {
                errors: [{
                    message: 'Something Broke',
                    key: 'Opps'
                }],
            } as BaseResponse;

            httpService.get.and.returnValue(Promise.resolve(response));

            await service.getEditEzTagData();

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(0);
        });
    });

    describe('updateVehicleFromAccountInformation', () => {
        it('should call and return value from httpService.post', async () => {
            const request = {} as IEZTagRequest;

            httpService.post.and.returnValue(Promise.resolve('fake search response'));
            responseErrorService.isErrorFree.and.returnValue(true);

            const result = await service.updateVehicleFromAccountInformation(request);

            expect(httpService.post)
                .toHaveBeenCalledWith('/api/sessions/ManageVehicles/UpdateVehicleFromAccountInformation', request);
            expect(httpService.post).toHaveBeenCalledTimes(1);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);
            expect(result).toBe('fake search response' as any);
        });

        it('should call displayAlertsFromResponse if is not error free', async () => {
            const response = {
                errors: [{
                    message: 'Something Broke',
                    key: 'Opps'
                }],
            } as BaseResponse;

            const request = {} as IEZTagRequest;

            httpService.post.and.returnValue(Promise.resolve(response));

            await service.updateVehicleFromAccountInformation(request);

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(0);
        });
    });

    describe('addVehicleFromAccountInformation', () => {
        it('should call and return value from httpService.post', async () => {
            const request = {} as IEZTagRequest;

            httpService.post.and.returnValue(Promise.resolve('fake search response'));
            responseErrorService.isErrorFree.and.returnValue(true);

            const result = await service.addVehicleFromAccountInformation(request);

            expect(httpService.post)
                .toHaveBeenCalledWith('/api/sessions/ManageVehicles/AddVehicleFromAccountInformation', request);
            expect(httpService.post).toHaveBeenCalledTimes(1);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);
            expect(result).toBe('fake search response' as any);
        });

        it('should call displayAlertsFromResponse if is not error free', async () => {
            const response = {
                errors: [{
                    message: 'Something Broke',
                    key: 'Opps'
                }],
            } as BaseResponse;

            const request = {} as IEZTagRequest;

            httpService.post.and.returnValue(Promise.resolve(response));

            await service.addVehicleFromAccountInformation(request);

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(0);
        });
    });

    describe('calculateActivationFee', () => {
        it('should call and return value from httpService.post', async () => {
            const request = {} as IConfirmTagsRequest;

            httpService.post.and.returnValue(Promise.resolve('fake search response'));
            responseErrorService.isErrorFree.and.returnValue(true);

            const result = await service.calculateActivationFee(request);

            expect(httpService.post)
                .toHaveBeenCalledWith('/api/sessions/ManageVehicles/CalculateActivationFee', request);
            expect(httpService.post).toHaveBeenCalledTimes(1);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);
            expect(result).toBe('fake search response' as any);
        });

        it('should call displayAlertsFromResponse if is not error free', async () => {
            const response = {
                errors: [{
                    message: 'Something Broke',
                    key: 'Opps'
                }],
            } as BaseResponse;

            const request = {} as IConfirmTagsRequest;

            httpService.post.and.returnValue(Promise.resolve(response));

            await service.calculateActivationFee(request);

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(0);
        });
    });

    describe('getAccountFromEzTag', () => {
        it('should call and return value from httpService.get', async () => {
            httpService.get.and.returnValue(Promise.resolve('fake search response'));
            responseErrorService.isErrorFree.and.returnValue(true);

            const result = await service.getAccountFromEzTag();

            expect(httpService.get)
                .toHaveBeenCalledWith('/api/sessions/ManageVehicles/GetAccount');
            expect(httpService.get).toHaveBeenCalledTimes(1);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);
            expect(result).toBe('fake search response' as any);
        });

        it('should call displayAlertsFromResponse if is not error free', async () => {
            const response = {
                errors: [{
                    message: 'Something Broke',
                    key: 'Opps'
                }],
            } as BaseResponse;

            httpService.get.and.returnValue(Promise.resolve(response));

            await service.getAccountFromEzTag();

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(0);
        });
    });

    describe('confirmAddTags', () => {
        it('should call and return value from httpService.post', async () => {
            const request = {} as IConfirmTagsRequest;

            httpService.post.and.returnValue(Promise.resolve('fake search response'));
            responseErrorService.isErrorFree.and.returnValue(true);

            const result = await service.confirmAddTags(request);

            expect(httpService.post)
                .toHaveBeenCalledWith('/api/sessions/ManageVehicles/ConfirmAddTags', request);
            expect(httpService.post).toHaveBeenCalledTimes(1);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);
            expect(result).toBe('fake search response' as any);
        });

        it('should call displayAlertsFromResponse if is not error free', async () => {
            const response = {
                errors: [{
                    message: 'Something Broke',
                    key: 'Opps'
                }],
            } as BaseResponse;

            const request = {} as IConfirmTagsRequest;

            httpService.post.and.returnValue(Promise.resolve(response));

            await service.confirmAddTags(request);

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(0);
        });
    });

    describe('mvuCheckout', () => {
        it('should call and return value from httpService.post', async () => {
            const request = {} as IMultiVehicleCheckoutRequest;

            httpService.post.and.returnValue(Promise.resolve('fake search response'));
            responseErrorService.isErrorFree.and.returnValue(true);

            const result = await service.mvuCheckout(request);

            expect(httpService.post)
                .toHaveBeenCalledWith('/api/sessions/MultiVehicleUpload/MVUCheckout', request);
            expect(httpService.post).toHaveBeenCalledTimes(1);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);
            expect(result).toBe('fake search response' as any);
        });

        it('should call displayAlertsFromResponse if is not error free', async () => {
            const response = {
                errors: [{
                    message: 'Something Broke',
                    key: 'Opps'
                }],
            } as BaseResponse;

            const request = {} as IMultiVehicleCheckoutRequest;

            httpService.post.and.returnValue(Promise.resolve(response));

            await service.mvuCheckout(request);

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(0);
        });
    });
});
