import { Inject, Injectable } from '@angular/core';
import { HttpService, ResponseErrorService } from 'common/services';
import { ForgotPasswordAccountSearchRequest, ForgotPasswordAccountSearchResponse } from 'forgotPassword/interfaces';

@Injectable()
export class WebApiService {

    constructor(
        private httpService: HttpService,
    private responseErrorService: ResponseErrorService
  ) { }

  private get baseUrl() {
    return '/api/forgotUsername';
  }

  public async forgotPasswordGetAccount(request: ForgotPasswordAccountSearchRequest): Promise<ForgotPasswordAccountSearchResponse> {
    const url = '/api/forgotPassword/getAccount';

    const response: ForgotPasswordAccountSearchResponse = await this.httpService.post(url, request);

    await this.handleErrors(response);

    return response;
  }

  public async forgotUsernameGetAccount(request: ForgotPasswordAccountSearchRequest): Promise<ForgotPasswordAccountSearchResponse> {
    const url = `${this.baseUrl}/getAccount`;

    const response: ForgotPasswordAccountSearchResponse = await this.httpService.post(url, request);

    await this.handleErrors(response);

    return response;
  }

  private async handleErrors(response: ForgotPasswordAccountSearchResponse): Promise<void> {
    if (this.responseErrorService.isErrorFree(response)) {
      await this.responseErrorService.displayAlertsFromResponse(response);
    } else {
      response.hasError = true;
    }
  }

}
