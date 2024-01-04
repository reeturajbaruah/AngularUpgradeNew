import { Injectable } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { SiteCoreItem } from 'cms/cms.module';
import { DialogService } from 'common/services';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui';
import { IEZTag } from 'vehicles/interfaces';
import { States } from 'vehicles/eztag/replacement/states';
import { States as SharedStates } from 'vehicles/shared';

@Injectable()
export class ReplacementManagerService {

    constructor(private dialogService: DialogService,
        private stateService: StateService,
    ) {

    }

    // todo: this will move to the lading module during code optimization
    async replace(data: SiteCoreItem, vehicle: IEZTag) {

        const dataSet = {
            cmsContent: {
                Title: data.Title ? data.Title : '',
                PrimaryContent: data.LongDescription ? data.LongDescription : '',
                AcceptBtn: data['accept'] ? data['accept'] : '',
                CancelBtn: data['cancel'] ? data['cancel'] : ''
            }
        } as GenericCmsModalInjectionValues;

        const result = await this.dialogService.openGenericModal(GenericCmsModalComponent, dataSet);
        if (result) {
            this.stateService.go(States.ReplacementDeliveryMethod, {
                vehicle
            });
        }

    }
}





