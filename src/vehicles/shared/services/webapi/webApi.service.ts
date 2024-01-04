import { Inject, Injectable } from '@angular/core';
import { BaseResponse } from 'common/interfaces';
import {
    IEzTagResponse, IManageEzTagResponse, IMultiVehicleCheckoutRequest, ISearchTagsRequest,
    IEZTagRequest, IConfirmTagsRequest, ISwitchEzTagStatusRequest
} from 'vehicles/interfaces';
import { ResponseErrorService, HttpService } from 'common/services';

@Injectable()
export class WebApiService {

    constructor(
        private httpService: HttpService,
        private responseErrorService: ResponseErrorService
    ) { }

    private get baseUrl() {
        return `/api/sessions/`;
    }

    public async getEZTagInfo(): Promise<IManageEzTagResponse> {

        const url = `${this.baseUrl}ManageVehicles/GetEzTagsAndAccountInfo`;

        const response: IManageEzTagResponse = await this.httpService.get(url);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    public async searchAccountTags(request: ISearchTagsRequest): Promise<IManageEzTagResponse> {

        const url = `${this.baseUrl}ManageVehicles/SearchAccountTags`;

        const response: IManageEzTagResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    public async switchTagStatus(request: ISwitchEzTagStatusRequest): Promise<IManageEzTagResponse> {

        const url = `${this.baseUrl}ManageVehicles/SwitchTagStatus`;

        const response: IManageEzTagResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    public async getEditEzTagData(): Promise<BaseResponse> {

        const url = `${this.baseUrl}ManageVehicles/GetEditEzTagData`;

        const response: BaseResponse = await this.httpService.get(url);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

        // todo: move to new edit service

    public async updateVehicleFromAccountInformation(request: IEZTagRequest): Promise<IEzTagResponse> {

        const url = `${this.baseUrl}ManageVehicles/UpdateVehicleFromAccountInformation`;

        const response: IEzTagResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    public async updateTagVehicleInfoFromManageVehiclesLanding(request: IEZTagRequest): Promise<IEzTagResponse> {

        const url = `${this.baseUrl}ManageVehicles/UpdateTagVehicleInfoFromManageVehiclesLanding`;

        const response: IEzTagResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }
    
    public async addVehicleFromAccountInformation(request: IEZTagRequest): Promise<IEzTagResponse> {

        const url = `${this.baseUrl}ManageVehicles/AddVehicleFromAccountInformation`;

        const response: IEzTagResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    public async deleteEzTag(request: IEZTagRequest): Promise<IEzTagResponse> {
        const url = `${this.baseUrl}AddEZTag/DeleteEZTag`;

        const response: IEzTagResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    public async calculateActivationFee(request: IConfirmTagsRequest): Promise<IEzTagResponse> {

        const url = `${this.baseUrl}ManageVehicles/CalculateActivationFee`;

        const response: IEzTagResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    public async getAccountFromEzTag(): Promise<BaseResponse> {

        const url = `${this.baseUrl}ManageVehicles/GetAccount`;

        const response: BaseResponse = await this.httpService.get(url);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    public async confirmAddTags(request: IConfirmTagsRequest): Promise<BaseResponse> {

        const url = `${this.baseUrl}ManageVehicles/ConfirmAddTags`;

        const response: BaseResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    public async mvuCheckout(request: IMultiVehicleCheckoutRequest): Promise<BaseResponse> {

        const url = `${this.baseUrl}MultiVehicleUpload/MVUCheckout`;

        const response: BaseResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }
}
