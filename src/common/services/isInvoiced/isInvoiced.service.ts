import { Injectable, Inject } from '@angular/core';
import { WebStorageService } from '../webStorageService/webStorage.service';

@Injectable()
export class IsInvoicedService {

  isInvoiced = '';
  values = {
    invoiced: 'invoiced',
    uninvoiced: 'noninvoiced'
  };

    constructor(private webStorage: WebStorageService) { }

  /**
   * returns true if the account is invoiced or false if not
   * 
   * @returns 
   */
  isAccountInvoiced() {
    //see if the browser has been refreshed, and grab from webstorage if it has
    if (this.isInvoiced === '') {
      const val = this.webStorage.getValue('inv');

      if (val) {
        this.isInvoiced = val;
      } else {
        this.isInvoiced = this.values.uninvoiced;
      }
    }

    return this.isInvoiced === this.values.invoiced;
  }

  setAccountInvoiced(invoiced: boolean) {
    this.isInvoiced = invoiced ? this.values.invoiced : this.values.uninvoiced;
    this.webStorage.setKeyValue('inv', this.isInvoiced);
  }

  removeAccountInvoiced() {
    this.isInvoiced = '';
    this.webStorage.removeEntry('inv');
  }

}
