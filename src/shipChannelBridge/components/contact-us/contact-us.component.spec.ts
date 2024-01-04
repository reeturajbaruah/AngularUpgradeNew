import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { By } from '@angular/platform-browser';
import { DialogRef, ToasterService } from 'common/services';
import { PipesModule } from 'pipes/module';
import { ShipChannelBridgeFacadeService } from 'shipChannelBridge/services/ship-channel-bridge-facade-api/ship-channel-bridge-facade.service';

import { ContactUsComponent } from './contact-us.component';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;
  let shipChannelBridgeFacadeService: jasmine.SpyObj<ShipChannelBridgeFacadeService>;
  let toasterService: jasmine.SpyObj<ToasterService>;
  let form: NgForm;
  let dialogRef: jasmine.SpyObj<DialogRef<any>>;

  beforeEach(async () => {
    shipChannelBridgeFacadeService = jasmine.createSpyObj('ShipChannelBridgeFacadeService', ['onContactSave']);
    toasterService = jasmine.createSpyObj('ToasterService', ['show']);
    dialogRef = jasmine.createSpyObj('dialogRef', ['close'], ['data']);
    const data = {
      titlle: 'contact'
    };

    (Object.getOwnPropertyDescriptor(dialogRef, 'data').get as jasmine.Spy).and.callFake(() => data);


    await TestBed.configureTestingModule({
      declarations: [ContactUsComponent],
      providers: [
        { provide: ShipChannelBridgeFacadeService, useFactory: () => shipChannelBridgeFacadeService },
        { provide: ToasterService, useFactory: () => toasterService },
        { provide: DialogRef, useFactory: () => dialogRef }

      ], schemas: [NO_ERRORS_SCHEMA],
      imports: [
        PipesModule,
        FormsModule,
        MatSelectModule
      ],
    }).compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    form = fixture.debugElement.query(By.directive(NgForm)).references.Form as NgForm;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Submit', () => {
    it('should invoke save api', () => {
      const mockParam = {
        valid: true,
        value: {}
      } as NgForm;
      const output = new Promise(null);
      shipChannelBridgeFacadeService.onContactSave.and.returnValue(output);
      component.Save(mockParam);

      expect(shipChannelBridgeFacadeService.onContactSave).toHaveBeenCalled();
    });

    it('should not invoke onContactSave, if formis invalid', () => {
      const mockParam = {
        valid: false,
        value: {}
      } as NgForm;
      const output = new Promise(null);
      shipChannelBridgeFacadeService.onContactSave.and.returnValue(output);
      component.Save(mockParam);

      expect(shipChannelBridgeFacadeService.onContactSave).not.toHaveBeenCalled();
    });
  });

  describe('cancel', () => {
    it('should invoke close', () => {
      component.cancel();

      expect(dialogRef.close).toHaveBeenCalled();
    });
  });
});
