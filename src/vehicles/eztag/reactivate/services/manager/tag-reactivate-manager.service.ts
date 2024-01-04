import { Injectable } from '@angular/core';
import { DialogService } from 'common/services';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui';
import { IEZTag } from 'vehicles/interfaces';
import { ITagReactivateContent, ITagReactivateReq, ITagReactivateResponse, TagReactivateStatus } from 'vehicles/eztag/reactivate';
import { TagReactivateFacadeService } from '../facade/tag-reactivate-facade.service';


@Injectable()
export class TagReactivateManagerService {

    constructor(private facade: TagReactivateFacadeService,
        private dialogService: DialogService) {

    }

    async reactivate(data: ITagReactivateContent) {

        return await this.getStatus(data);
    }

    private async getStatus(data: ITagReactivateContent) {

        const result = await this.openModal(data);

        if (result) {
            return this.checkReactivateStatus(data.vehicle);
        } else {
            return {
                status: TagReactivateStatus.UserCancel
            } as ITagReactivateResponse;
        }

    }

    private async openModal(data: ITagReactivateContent) {

        const modalContent = {

            cmsContent: {
                AcceptBtn: data.sitecoreContent ? data.sitecoreContent['accept'] : '',
                CancelBtn: data.sitecoreContent ? data.sitecoreContent['cancel'] : '',
                PrimaryContent: data.sitecoreContent ? data.sitecoreContent.LongDescription : '',
                Title: `${data.sitecoreContent ? data.sitecoreContent.Title : ''}: ${data.ezTagNum}`
            }
        } as GenericCmsModalInjectionValues;

        return (await this.dialogService.openGenericModal(GenericCmsModalComponent, modalContent)) as boolean;

    }

    private async checkReactivateStatus(vehicle: IEZTag) {
        return await this.facade.reactivate(vehicle);
    }

}

