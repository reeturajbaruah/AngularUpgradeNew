import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { CmsReplacementService } from 'cms/services';
import { ResponseErrorService } from 'common/services';
import { IEZTag } from 'shared/vehicle-info';
import { ActivateFacadeApiService } from '../../services/activate-facade-api/activate-facade-api.service';
import { ActivateEzTagWizardInformation } from '../../activate.constants';
import { IActivateEzTagConfirmCms, IActivateEzTagWizardInfo } from '../../activate.model';
import { stateNames as homeStateNames } from 'home/constants';
import { stateNames as rootStateNames } from 'constants/stateNames.constants';
import { WebStorageService } from '../../../../../common/services/webStorageService/webStorage.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.less']
})
export class ConfirmComponent implements OnInit {

  private transactionId: string;

  ezTags: IEZTag[];
  isConfirm: boolean;

  @Input() pageCms: IActivateEzTagConfirmCms;

  constructor(
    private activateFacadeApiService: ActivateFacadeApiService,
    private cmsReplacementService: CmsReplacementService,
    private webStorage: WebStorageService,
    private stateService: StateService,
    private responseErrorService: ResponseErrorService
  ) { }

  ngOnInit(): void {
    const activateEzTagWizardInfo: IActivateEzTagWizardInfo = this.webStorage.getValue(ActivateEzTagWizardInformation);

    this.transactionId = activateEzTagWizardInfo?.transactionId ?? '';
    this.pageCms.ListLabel = this.cmsReplacementService.transformTemplate(this.pageCms.ListLabel, { transactionId: this.transactionId });
    this.ezTags = activateEzTagWizardInfo?.listOfVehicles ?? [];
  }

  onConfirmChange(e: any): void {
    this.isConfirm = e.target.checked;
  }

  nextStep(nextState: StateDeclaration): void {
    if (this.isConfirm) {
      this.activateFacadeApiService.finalizeTagActivation({ transactionId: this.transactionId }).then(async res => {
        if (res.errors.length === 0) {
          await this.stateService.go(nextState);
        } else {
          this.responseErrorService.displayErrorsFromResponse(res);
          this.responseErrorService.displayAlertsFromResponse(res);
        }
      });
    }
  }

  async cancel(isKioskView: boolean): Promise<void> {
    this.webStorage.removeEntry(ActivateEzTagWizardInformation);
    // await this.stateService.go(state);
    if (isKioskView) {
      await this.stateService.go(rootStateNames.manageVehicles);
    } else {
      await this.stateService.go(homeStateNames.Frame);
    }
  }

  async prevStep(prevState: StateDeclaration): Promise<void> {
    await this.stateService.go(prevState);
  }

}
