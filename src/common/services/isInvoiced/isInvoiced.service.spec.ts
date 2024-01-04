import { TestBed } from '@angular/core/testing';
import { WebStorageService } from '../webStorageService/webStorage.service';

import { IsInvoicedService } from './isInvoiced.service';

describe('IsInvoicedService', () => {
    let service: IsInvoicedService;
    let webStorage: jasmine.SpyObj<WebStorageService>;
  let inStorage: any;

  beforeEach(() => {
    webStorage = jasmine.createSpyObj('webStorage', ['getValue', 'setKeyValue', 'removeEntry']);

    inStorage = {};

    webStorage.getValue.and.callFake(() => inStorage[`inv`]);
    webStorage.setKeyValue.and.callFake((a, b) => { inStorage[`inv`] = b; });
    webStorage.removeEntry.and.callFake(() => { inStorage[`inv`] = undefined; });

    TestBed.configureTestingModule({
      providers: [
            IsInvoicedService,
            { provide: WebStorageService, useFactory: () => webStorage }
      ]
    });
    service = TestBed.inject(IsInvoicedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false if the invoice is empty', () => {
    inStorage[`inv`] = '';
    expect(inStorage[`inv`]).toBeDefined();
    expect(service.isAccountInvoiced()).toBeFalsy();
  });

  it('should return false if the invoice is undefined', () => {
    expect(inStorage[`inv`]).toBeUndefined();
    expect(service.isAccountInvoiced()).toBeFalsy();
  });

  it('should return false if the invoice is "noninvoiced"', () => {
    inStorage[`inv`] = 'noninvoiced';
    expect(inStorage[`inv`]).toBeDefined();
    expect(service.isAccountInvoiced()).toBeFalsy();
  });

  it('should return true if the invoice is "invoiced"', () => {
    inStorage[`inv`] = 'invoiced';
    expect(inStorage[`inv`]).toBeDefined();
    expect(service.isAccountInvoiced()).toBeTruthy();
  });

  it('should set inStorage.inv to invoiced', () => {
    service.setAccountInvoiced(true);
    expect(inStorage[`inv`]).toBeDefined();
    expect(inStorage[`inv`]).toEqual('invoiced');
  });

  it('should set inStorage.inv to noninvoiced', () => {
    service.setAccountInvoiced(false);
    expect(inStorage[`inv`]).toBeDefined();
    expect(inStorage[`inv`]).toEqual('noninvoiced');
  });

  it('should remove inStorage.inv', () => {
    service.removeAccountInvoiced();
    expect(inStorage[`inv`]).toBeUndefined();
  });
});
