import { Injectable } from '@angular/core';
import { EmailConfirmationConstants } from 'accountDashboard/services';
import { Alert } from 'common/interfaces';
import { WebStorageService } from '../webStorageService/webStorage.service';

@Injectable()
export class AccountSummaryAlertFilterService {

  constructor(private webStorage: WebStorageService) { }

  private storeInStorage(key: string, val) {
    const storeObject = this.webStorage.getValue('alertStore') || {};
    storeObject[key] = val;

    this.webStorage.setKeyValue('alertStore', storeObject);
  }

  private getFromStorage(key: string) {
    const val = this.webStorage.getValue('alertStore');
    if (!val) {
      return false;
    } else {
      if (key in val) {
        return true;
      }
    }
  }

  private removeAlerts() {
      if (this.webStorage.getValue('alertStore') !== null) {
          this.webStorage.removeEntry('alertStore');
      }
  }

  filterAccountSummaryAlerts(inAlertArr: Alert[]) {
    for (let x = 0; x < inAlertArr.length; x++) {
      if (this.getFromStorage(inAlertArr[x].alertMsg)) {
        //this alert is stored so it has been shown; remove it
        inAlertArr.splice(x, 1);

        x--;
      } else {
        //the alert is not stored, so store it
        this.storeInStorage(inAlertArr[x].alertMsg, inAlertArr[x].alertId);
      }
    }
  }
  filterEmailConfirmationAlert(emailAddress: string, status: EmailConfirmationConstants) {
    if (!this.getFromStorage(`emailConfirm:${emailAddress}:${status}`)) {
      //return true if the email confirmation should be shown and store the email address
      this.storeInStorage(`emailConfirm:${emailAddress}:${status}`, 'true');

      return true;
    } else {
      return false;
    }
  }
  removeAccountSummaryAlerts() {
    this.removeAlerts();
  }
}
