import { TestBed } from '@angular/core/testing';

import { AccountSummaryAlertFilterService } from './accountSummaryAlertFilter.service';
import { EmailConfirmationConstants } from 'accountDashboard/services';
import { WebStorageService } from '../webStorageService/webStorage.service';

describe('AccountSummaryAlertFilterService', () => {
  let service: AccountSummaryAlertFilterService;
  let webStorage: jasmine.SpyObj<WebStorageService>;
  let inStorage: any;
  let inAlertArr: any[];

  beforeEach(() => {
    webStorage = jasmine.createSpyObj('webStorage', ['getValue', 'setKeyValue', 'removeEntry']);

    inStorage = {};
    inAlertArr = [{ alertMsg: 'test', alertId: 1 }];

    webStorage.getValue.and.callFake(() => inStorage[`alertStore`]);
    webStorage.setKeyValue.and.callFake((a, b) => { inStorage[`alertStore`] = b; });
    webStorage.removeEntry.and.callFake(() => { inStorage[`alertStore`] = undefined; });

    TestBed.configureTestingModule({
      providers: [
        AccountSummaryAlertFilterService,
        { provide: WebStorageService, useFactory: () => webStorage }
      ]
    });
    service = TestBed.inject(AccountSummaryAlertFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('filterAccountSummaryAlerts', () => {
    it('should not have alertStore inStorage', () => {
      expect(inStorage[`alertStore`]).toBeUndefined();
    });
    it('should have test in alertStore inStorage', () => {
      service.filterAccountSummaryAlerts(inAlertArr);

      expect(inStorage[`alertStore`]).toBeDefined();
      expect(inStorage[`alertStore`].test).toEqual(1);
    });
    it('should remove test from alertStore inStorage', () => {
      inStorage[`alertStore`] = { test: 1 };

      service.filterAccountSummaryAlerts(inAlertArr);

      expect(inStorage[`alertStore`]).toBeDefined();
      expect(inAlertArr).toBeDefined();
      expect(inAlertArr).not.toContain({ alertMsg: 'test', alertId: 1 });
    });
  });

  describe('filterEmailConfirmationAlert', () => {
    it('should store email and status in inStorage', () => {
      const emailAddress = 'test';
      const status = EmailConfirmationConstants.JUST_CONFIRMED;

      expect(service.filterEmailConfirmationAlert(emailAddress, status)).toBeTruthy();
      expect(inStorage[`alertStore`]['emailConfirm:test:2']).toEqual('true');
    });
    it('should have email and status in inStorage', () => {
      const emailAddress = 'test';
      const status = EmailConfirmationConstants.NOT_CONFIRMED;

      service.filterEmailConfirmationAlert(emailAddress, status);

      expect(service.filterEmailConfirmationAlert(emailAddress, status)).toBeFalsy();
    });
  });

  describe('removeEntry', () => {
    it('should delete the alertStore', () => {
      inStorage[`alertStore`] = 'true';

      service.removeAccountSummaryAlerts();

      expect(inStorage[`alertStore`]).toBeUndefined();
    });
  });
});
