import { Injectable } from '@angular/core';
import { DialogService } from '../dialogService/dialog.service';

import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui/modals/genericCmsModal/genericCmsModal.component';

@Injectable()
export class EditInvoicedMessageService {

  private phoneNumberDisplay: string;

  constructor(private dialogService: DialogService) { }

  setPhoneNumberDisplay(phoneNumberDisplay: string): this {
    this.phoneNumberDisplay = phoneNumberDisplay;
    return this;
  }

  async invoicedMessage(): Promise<void> {
    const data: GenericCmsModalInjectionValues = {
      cmsContent: {
        Title: 'Invoiced Account',
        PrimaryContent: `Billing related information cannot be modified because the account is invoiced, please call ${this.phoneNumberDisplay} for further assistance.`,
        AcceptBtn: 'Close'
      }
    };
    
    await this.dialogService.openGenericModal(GenericCmsModalComponent, data);
  };

}
