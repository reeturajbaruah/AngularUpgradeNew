import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceModalComponent } from './maintenanceModal.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GenericCmsModalInjectionValues } from '../genericCmsModal/genericCmsModal.component';
import { PipesModule } from 'pipes/module';

describe('MaintenanceModalComponent', () => {
  let component: MaintenanceModalComponent;
  let fixture: ComponentFixture<MaintenanceModalComponent>;
  let matDialogRef: jasmine.SpyObj<MatDialogRef<MaintenanceModalComponent>>;
  let injectedData: jasmine.SpyObj<GenericCmsModalInjectionValues>;

  beforeEach(async () => {
    matDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    injectedData = jasmine.createSpyObj('injectedData', null, ['cmsContent']);

    await TestBed.configureTestingModule({
      declarations: [MaintenanceModalComponent],
      imports: [PipesModule],
      providers: [
        { provide: MatDialogRef, useFactory: () => matDialogRef },
        { provide: MAT_DIALOG_DATA, useFactory: () => injectedData }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call matDialogRef.close', () => {
    component.close();
    expect(matDialogRef.close).toHaveBeenCalled();
  });
});
