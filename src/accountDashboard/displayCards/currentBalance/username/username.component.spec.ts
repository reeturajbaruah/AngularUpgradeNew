import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameComponent } from './username.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('UsernameComponent', () => {
  let component: UsernameComponent;
  let fixture: ComponentFixture<UsernameComponent>;
  let matDialogRef: jasmine.SpyObj<MatDialogRef<UsernameComponent>>;
  let injectedData: jasmine.SpyObj<any>;

  beforeEach(async () => {
    matDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    injectedData = jasmine.createSpyObj('injectedData', null, ['title', 'username']);

    await TestBed.configureTestingModule({
      declarations: [UsernameComponent],
      providers: [
        { provide: MatDialogRef, useFactory: () => matDialogRef },
        { provide: MAT_DIALOG_DATA, useFactory: () => injectedData }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('closeModal', () => {
    beforeEach(() => {
    });

    it('should call close()', () => {
      component.closeModal();

      expect(matDialogRef.close).toHaveBeenCalled();
    });
  });
});
