import { Injectable } from '@angular/core';
import { DeliveryMethodType } from 'common/models';
import { IEZTag } from 'vehicles/interfaces';
import { IReceipt } from 'vehicles/common/receipt';


@Injectable()
export class ReceiptDataHelperService {

    constructor() {
    }

    getData(input: {
        cmsContent: any;
        ezTags: IEZTag[];
        paymentAmt: number;
        deliveryMethod: string;
        isPlate: boolean;
    }) {
        return {

            summary: {
                title: input.cmsContent.Title,
                description: input.deliveryMethod === DeliveryMethodType.Mail
                    ? input.cmsContent.LongDescription : input.cmsContent.tagStorePickup,
                subtitle: input.cmsContent.ShortDescription
            },
            paymentInfo: {
                paymentAmount: {
                    label: input.cmsContent.paymentAmount,
                    amount: input.paymentAmt
                },
                paymentDate: {
                    label: input.cmsContent.paymentReceivedOn,
                    receivedDate: new Date()
                },
                replenishAmt: input.cmsContent.replenishAmt
            },
            accountInfo: {
                title: input.cmsContent.accountInfo
            },
            deliveryMethodInfo: {
                type: input.deliveryMethod === DeliveryMethodType.Mail ? DeliveryMethodType.Mail : DeliveryMethodType.Store,
                description: input.deliveryMethod === DeliveryMethodType.Mail
                    ? 'Delivery Method:By Mail' : 'Delivery Method:EZ TAG Store Pickup'

            },
            tagsOrdered: {
                title: input.cmsContent.tagsOrdered,
                tags: [
                    {
                        title: input.cmsContent.tagsRequested,
                        ezTags: input.ezTags,
                        isPlate: input.isPlate
                    }
                ]
            }
        } as IReceipt;
    }


}

