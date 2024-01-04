import { Injectable } from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { SiteCoreItem } from 'cms/cms.module';
import { DialogService } from 'common/services';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui';
import { States as SharedStates } from 'vehicles/shared';

@Injectable()
export class ReplacementHelperService {

    constructor(private dialogService: DialogService,
        private stateService: StateService
    ) {

    }

    async cancel(data: SiteCoreItem, state: StateDeclaration) {

        const modalContent = {
            cmsContent: {
                Title: data.Title,
                PrimaryContent: data.LongDescription,
                AcceptBtn: 'No',
                CancelBtn: 'Yes'
            }
        } as GenericCmsModalInjectionValues;

        const result = await this.dialogService.openGenericModal(GenericCmsModalComponent, modalContent);
        if (!result) {
            this.stateService.go(state);
        }
    }

}




