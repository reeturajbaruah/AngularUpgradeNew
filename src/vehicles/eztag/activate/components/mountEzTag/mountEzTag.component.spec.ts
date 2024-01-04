import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogRef } from 'common/services';
import { TestingModule } from 'testing';
import { MountEzTagComponent } from './mountEzTag.component';

describe('MountEzTagComponent', () => {
  let component: MountEzTagComponent;
  let fixture: ComponentFixture<MountEzTagComponent>;
  let dialogRef: DialogRef<any>;

  beforeEach(async () => {

    dialogRef = {
      data: { Title: 'title' },
      close: jasmine.createSpy('close') as () => void
    } as DialogRef<any>;

    await TestBed.configureTestingModule({
      declarations: [MountEzTagComponent],
      imports: [TestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: DialogRef, useFactory: () => dialogRef }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MountEzTagComponent);
    component = fixture.componentInstance;
    component.modalCms = {
      Title: 'MountEzTag'
    } as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
