import { HttpErrorResponse, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { SiteCoreItem } from 'cms/cms.module';
import { CmsUtilService } from 'cms/services';
import { ResponseErrorService, ToasterService, VehicleService } from 'common/services';
import { UploadService } from 'common/services/upload/upload.service';
import { SERVER_CONSTANTS } from 'common/upgrades';
import { isObject, isUndefined } from 'common/utilities';
import { asyncScheduler, catchError, lastValueFrom, map, Observable, scheduled } from 'rxjs';
// import { CmsIds as cmsConst } from '../../constants';
import { CmsIds } from '../../constants';

import { IDownInstructCmsContent, IMvuResponse } from 'vehicles/interfaces';

@Component({
  selector: 'vehicles-mvu-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class MvuUploadComponent implements OnInit {

  private file: File;

  fileName: string;
  isFileValid: boolean;
  fileInvalidMessage: string;
  fileUploadProgress: number;

  // readonly cmsIds = cmsConst;

  private uploadSuccess = false;

  @Input() pageCms: SiteCoreItem;
  @Input() downInstructCms: IDownInstructCmsContent;
  @Input() downTemplCms: IDownInstructCmsContent;
  @Input() uploadVehicleCsvFileCms: IDownInstructCmsContent;
  mvuInstructions: string;
  mvuTemplate: string;

  constructor(
    public cmsUtilService: CmsUtilService,
    private uploadService: UploadService,
    private toasterService: ToasterService,
    private responseErrorService: ResponseErrorService,
    private stateService: StateService,
    private vehicleService: VehicleService,
    @Inject(SERVER_CONSTANTS) private serverConstants: any,
    private uiRouterGlobals: UIRouterGlobals
  ) { }

  ngOnInit() {
    this.mvuInstructions = this.cmsUtilService.generateFileSrc(CmsIds.MvuInstructions);
    this.mvuTemplate = this.cmsUtilService.generateFileSrc(CmsIds.MvuTemplate);
  }

  async onFileSelected(event: Event): Promise<void> {
    this.file = (event.target as HTMLInputElement).files.length > 0 ? (event.target as HTMLInputElement).files[0] : null;

    await this.checkFileValid(this.file);
  }

  private readFile(file: Blob): Promise<string | ArrayBuffer | DOMException> {
    return new Promise<string | ArrayBuffer | DOMException>((resolve, reject) => {
      const reader = new FileReader();

      reader.onerror = (event) => {
        reject(event.target.error);
      };
      reader.onloadend = (event) => {
        resolve(event.target.result);
      };

      reader.readAsText(file);
    });
  }

  private async checkFileValid(file: Blob): Promise<void> {
    if (!isUndefined(file) && file !== null) {
      if (file.type === 'text/csv' || file.type === 'application/vnd.ms-excel') {
        this.fileName = this.file.name;

        try {
          const result: string = await this.readFile(file.slice(0, 1)) as string;

          // Char code 65533 means that the file is improperly formatted
          if (result.charCodeAt(0) === 65533) {
            this.setFileValidityModel(false, 'Selected file must be formatted or Saved As a .CSV');
          } else {
            this.setFileValidityModel(true);
          }
        } catch (err) {
          this.setFileValidityModel(false);
        }
      } else {
        this.setFileValidityModel(false, 'Selected file must be a .CSV');
      }
    } else {
      this.setFileValidityModel(false);
    }
  }

  private setFileValidityModel(fileIsValid: boolean, invalidMessage?: string): void {
    this.isFileValid = fileIsValid;
    this.fileInvalidMessage = invalidMessage ?? '';
  }

  async saveInformation(formIsValid: boolean): Promise<void> {
    if (this.isFileValid && formIsValid) {
      await this.uploadFile(this.file);
    }
  }

  private async uploadFile(file: File): Promise<void> {
    if (!isUndefined(file) && file !== null) {
      const res$: Observable<HttpEvent<IMvuResponse>> = this.uploadService.upload<IMvuResponse>('/api/sessions/MultiVehicleUpload/UploadCSVFile', file).pipe(
        map(event => {
          switch (event.type) {
            case HttpEventType.UploadProgress:
              this.fileUploadProgress = Math.round(event.loaded * 100 / event.total);
              break;
            case HttpEventType.Response:
              return event;
          }
        }),
        catchError((error: HttpErrorResponse) => {
          this.fileUploadProgress = 0;
          this.uploadSuccess = false;
          return scheduled([{ body: error.error } as any], asyncScheduler);
        })
      );

      const res = await lastValueFrom(res$) as HttpResponse<IMvuResponse>;

      if (isObject(res) && isObject(res.body)) {
        const baseResponse = res.body;

        if (baseResponse.errors instanceof Array && baseResponse.errors.length === 0) {
          const hasAlerts = isObject(baseResponse) && baseResponse.alerts instanceof Array && baseResponse.alerts.length > 0;

          if (hasAlerts) {
            const sortedAlerts = baseResponse.alerts.sort((alert1, alert2) => alert1.importance - alert2.importance);
            const alertArr = sortedAlerts.map(alert => alert.alertMsg);
            alertArr.forEach(alert => this.toasterService.show('Success', alert));

            this.vehicleService.setMvuDetails(baseResponse);
            this.uploadSuccess = true;
          }
        } else {
          // If errors include maintenance errors, redirects to home
          this.responseErrorService.handleMaintenanceErrors(baseResponse);

          // Hard coded error leading to PDF of .csv errors
          if (typeof baseResponse.fileName === 'string' && baseResponse.fileName !== '') {
            const pdfLink = `/api/sessions/Pdf/GetMvuErrorPdfReport/?reportId=${baseResponse.fileName}&angularState=${this.uiRouterGlobals.current.name
              }&clientVersion=${this.serverConstants.currentlyDownloadedWebUiVersion}`;

            const errorMsg = `${baseResponse.hardErrorCount} errors. Click <a target="_blank" href="${pdfLink}">here</a> to download the errors in PDF`;
            this.toasterService.show('Error', errorMsg);
          }

          this.responseErrorService.displayErrorsFromResponse(baseResponse);
        }
      }
    }
  }

  async nextStep(state: StateDeclaration): Promise<void> {
    if (this.isFileValid && this.uploadSuccess) {
      await this.stateService.go(state);
    }
  }

  async cancel(state: StateDeclaration): Promise<void> {
    if (this.uploadSuccess) {
      this.vehicleService.destroyMvuDetails();
    }

    await this.stateService.go(state);
  }

}
