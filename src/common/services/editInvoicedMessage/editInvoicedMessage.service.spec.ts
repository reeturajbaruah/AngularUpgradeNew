import { TestBed, waitForAsync } from '@angular/core/testing';
import { EditInvoicedMessageService } from './editInvoicedMessage.service';
import { DialogService } from '../dialogService/dialog.service';
import { CommonModule, CommonServicesModule } from 'common/module';

describe('EditInvoicedMessageService', () => {
  let service: EditInvoicedMessageService;
  let dialogService: jasmine.SpyObj<DialogService>;

  beforeEach(async () => {
    dialogService = jasmine.createSpyObj('DialogService', ['openGenericModal']);
    dialogService.openGenericModal.and.callFake(() => Promise.resolve(null));

    await TestBed.configureTestingModule({
      imports: [CommonModule, CommonServicesModule],
      providers: [
        EditInvoicedMessageService,
        { provide: DialogService, useFactory: () => dialogService }
      ]
    }).compileComponents();

    service = TestBed.inject(EditInvoicedMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store phone number and call dialogService.openGenericModal', waitForAsync(() => {
    service.setPhoneNumberDisplay('555-555-5555').invoicedMessage().then(() => {
      expect(service[`phoneNumberDisplay`]).toBeDefined();
      expect(dialogService.openGenericModal).toHaveBeenCalled();
    });
  }));
});
