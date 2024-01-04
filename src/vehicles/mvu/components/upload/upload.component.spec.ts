import { ComponentFixture, TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { FormsModule } from '@angular/forms';
import { CmsUtilService } from 'cms/services';
import { ResponseErrorService, ToasterService, VehicleService } from 'common/services';
import { UploadService } from 'common/services/upload/upload.service';
import { asyncScheduler, scheduled, throwError } from 'rxjs';

import { MvuUploadComponent } from './upload.component';
import { HttpErrorResponse } from '@angular/common/http';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { InjectionValues } from 'common/ui';
import { SERVER_CONSTANTS } from 'common/upgrades';

describe('MvuUploadComponent', () => {
  let component: MvuUploadComponent;
  let fixture: ComponentFixture<MvuUploadComponent>;

  let cmsUtilService: jasmine.SpyObj<CmsUtilService>;
  let uploadService: jasmine.SpyObj<UploadService>;
  let toasterService: jasmine.SpyObj<ToasterService>;
  let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
  let stateService: jasmine.SpyObj<StateService>;
  let vehicleService: jasmine.SpyObj<VehicleService>;
  let serverConstants: jasmine.SpyObj<InjectionValues>;
  let uiRouterGlobals: jasmine.SpyObj<UIRouterGlobals>;

  beforeEach(async () => {
    cmsUtilService = jasmine.createSpyObj('CmsUtilService', ['generateFileSrc']);
    uploadService = jasmine.createSpyObj('UploadService', ['upload']);
    toasterService = jasmine.createSpyObj('ToasterService', ['show']);
    responseErrorService = jasmine.createSpyObj('ResponseErrorService', ['displayErrorsFromResponse', 'handleMaintenanceErrors']);
    stateService = jasmine.createSpyObj('StateService', ['go']);
    vehicleService = jasmine.createSpyObj('VehicleService', ['setMvuDetails', 'destroyMvuDetails']);
    serverConstants = jasmine.createSpyObj('serverConstants', null, { currentlyDownloadedWebUiVersion: 'test' });
    uiRouterGlobals = jasmine.createSpyObj('uiRouterGlobals', [], { current: { name: 'test' } });

    await TestBed.configureTestingModule({
      declarations: [MvuUploadComponent],
      imports: [FormsModule],
      providers: [
        { provide: CmsUtilService, useFactory: () => cmsUtilService },
        { provide: UploadService, useFactory: () => uploadService },
        { provide: ToasterService, useFactory: () => toasterService },
        { provide: ResponseErrorService, useFactory: () => responseErrorService },
        { provide: StateService, useFactory: () => stateService },
        { provide: VehicleService, useFactory: () => vehicleService },
        { provide: SERVER_CONSTANTS, useFactory: () => serverConstants },
        { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    toasterService.show.and.returnValue({} as any);
    vehicleService.setMvuDetails.and.returnValue();
    vehicleService.destroyMvuDetails.and.returnValue();
    stateService.go.and.resolveTo({} as any);
    responseErrorService.handleMaintenanceErrors.and.resolveTo();

    fixture = TestBed.createComponent(MvuUploadComponent);
    component = fixture.componentInstance;
    component.pageCms = { Title: '' } as any;
    component.downInstructCms = { LongDescription: '', SearchTitle: '', SearchDescription: '' } as any;
    component.downTemplCms = { Title: '' } as any;
    component.uploadVehicleCsvFileCms = { Title: '' } as any;
    fixture.detectChanges();
  });

  it('should create here', () => {
    expect(component).toBeTruthy();
  });

  describe('Valid blob file and successful upload', () => {
    const blob = new Blob(['ID,Name\n1,abc\n2,def\n'], { type: 'text/csv' });

    beforeEach(() => {
      uploadService.upload.and.returnValue(scheduled([{ type: 1, loaded: 50, total: 100 } as any, {
        type: 4, body: {
          alerts: [
            {
              alertId: 1,
              alertMsg: '',
              importance: 1
            },
            {
              alertId: 2,
              alertMsg: '',
              importance: 2
            }
          ], errors: []
        }
      } as any], asyncScheduler));
      responseErrorService.displayErrorsFromResponse.and.resolveTo([]);
    });

    it('onFileSelected should set isFileValid to true', done => {
      component.onFileSelected({ target: { files: [blob as File] } } as any).then(() => {
        expect(component.isFileValid).toBeTruthy();
        done();
      });
    });

    it('saveInformation should call uploadFile and nextStep/cancel should call go', done => {
        component.onFileSelected({ target: { files: [blob as File] } } as any).then(() => {
        component.saveInformation(true).then(() => {
          component.nextStep({}).then(() => {
            component.cancel({}).then(() => {
              expect(vehicleService.setMvuDetails).toHaveBeenCalled();
              expect(stateService.go).toHaveBeenCalledTimes(2);
              done();
            });
          });
        });
      });
    });
  });

  describe('Valid blob file and unsuccessful upload', () => {
    const blob = new Blob(['ID,Name\n1,abc\n2,def\n'], { type: 'text/csv' });

    beforeEach(() => {
      uploadService.upload.and.returnValue(scheduled([{ type: 1, loaded: 50, total: 100 } as any, {
        type: 4, body: {
          alerts: [], errors: [{}]
        }
      } as any], asyncScheduler));
      responseErrorService.displayErrorsFromResponse.and.resolveTo([]);
    });

    it('onFileSelected should set isFileValid to true', done => {
        component.onFileSelected({ target: { files: [blob as File] } } as any).then(() => {
        expect(component.isFileValid).toBeTruthy();
        done();
      });
    });

    it('saveInformation should set fileUploadProgress to gt 0', done => {
        component.onFileSelected({ target: { files: [blob as File] } } as any).then(() => {
        component.saveInformation(true).then(() => {
          expect(component.fileUploadProgress).toBeTruthy();
          done();
        });
      });
    });

    it('FileReader should throw error', done => {
      const mockFileReader = {
        readAsText: (inputBlob) => { },
        onloadend: () => { },
        onerror: () => { }
      } as any;
      spyOn(window, 'FileReader').and.returnValue(mockFileReader);
      spyOn(mockFileReader, 'readAsText').and.callFake((inputBlob) => {
        mockFileReader.onerror();
      });
        component.onFileSelected({ target: { files: [blob as File] } } as any).then(() => {
        expect(component.isFileValid).toBeFalsy();
        done();
      });
    });

    it('charCodeAt should read 65533', done => {
      const mockFileReader = {
        readAsText: (inputBlob) => { },
        onloadend: (event) => Promise.resolve(event.target.result),
        onerror: () => { }
      } as any;
      spyOn(window, 'FileReader').and.returnValue(mockFileReader);
      spyOn(mockFileReader, 'readAsText').and.callFake((inputBlob) => {
        mockFileReader.onloadend({ target: { result: '�' } });
      });
        component.onFileSelected({ target: { files: [blob as File] } } as any).then(() => {
        expect(component.isFileValid).toBeFalsy();
        done();
      });
    });
  });

  describe('Invalid blob file as html', () => {
    const blob = new Blob(['<html />'], { type: 'text/html' });

    it('onFileSelected should set isFileValid to false', done => {
        component.onFileSelected({ target: { files: [blob as File] } } as any).then(() => {
        expect(component.isFileValid).toBeFalsy();
        done();
      });
    });

    it('onFileSelected should set isFileValid to false', done => {
        component.onFileSelected({ target: { files: [blob as File] } } as any).then(() => {
        expect(component.isFileValid).toBeFalsy();
        done();
      });
    });
  });

  describe('Invalid blob file as null', () => {
    const blob: Blob = null;

    it('onFileSelected should set isFileValid to false', done => {
      component.onFileSelected({ target: { files: [blob as File] } } as any).then(() => {
        expect(component.isFileValid).toBeFalsy();
        done();
      });
    });
  });

  describe('upload should throw error', () => {
    const blob = new Blob(['ID,Name\n1,abc\n2,def\n'], { type: 'text/csv' });

    beforeEach(() => {
      uploadService.upload.and.returnValue(throwError(() => {
        const error: any = new HttpErrorResponse({ error: { errors: [{}], fileName: 'test' } });
        return error;
      }));
      responseErrorService.displayErrorsFromResponse.and.resolveTo([]);
    });

    it('saveInformation should fail', done => {
        component.onFileSelected({ target: { files: [blob as File] } } as any).then(() => {
        component.saveInformation(true).then(() => {
          expect(component.fileUploadProgress).toBeFalsy();
          done();
        });
      });
    });
  });
});
