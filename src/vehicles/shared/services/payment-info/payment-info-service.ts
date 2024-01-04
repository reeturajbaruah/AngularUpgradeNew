import { Inject, Injectable } from '@angular/core';
import { WebStorageConst } from 'constants/module';
import { IConfirmTagsRequest, IEZTag, IPaymentInfoData } from 'vehicles/interfaces';
import { WebStorageService } from '../../../../common/services/webStorageService/webStorage.service';
import { WebApiService } from '../webapi/webApi.service';


@Injectable()
export class PaymentInfoService {

    constructor(private webApis: WebApiService,
        private webStorage: WebStorageService,
        private webStorageConst: WebStorageConst,
    ) {

    }
    async getPaymentInfo(vehicleList: IEZTag[]): Promise<IPaymentInfoData> {

        let paymentInfo: IPaymentInfoData;

        const res = await this.webApis.calculateActivationFee({
            tagList: vehicleList,
            transactionId: null,
            tagSalesAmount: null,
            totalAmount: null,
            deliveryMethod: null,
            depositAmount: null
        } as IConfirmTagsRequest);

        // if (res) {
        //     this.stepperData.tagAmount = res.tagAmount;
        // }
        if (res) {
            paymentInfo = res;
        }


        return paymentInfo;
    }

    getCurrentBalance() {
        return this.webStorage.getValue(this.webStorageConst.currentBalance);
    }
}
