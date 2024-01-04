import { Inject, Injectable } from '@angular/core';
import { ErrorMessage, IBaseResponse, IFeatureState } from 'common/interfaces';
import { BaseResponse, MaintenanceResponse } from 'common/models';
import { SERVER_CONSTANTS } from 'common/upgrades';
import { MaintenanceFeature } from 'constants/module';
import { ArrayUtilService } from '../arrayUtil/arrayUtil.service';
import { StateService } from '@uirouter/core';
import { ResponseErrorService } from '../responseErrorService/responseError.service';
import { DialogService } from '../dialogService/dialog.service';
import { GenericCmsModalInjectionValues } from 'common/ui';
import { isString } from 'lodash';
import { stateNames as homeStateNames } from '../../../home/constants';
import { MaintenanceConfigService } from '../maintenanceService/maintenanceConfig.service';
import { firstValueFrom } from 'rxjs';
import { MaintenanceModalComponent } from 'common/ui/modals/maintenanceModal/maintenanceModal.component';
import { OperatingSystemSnifferService } from 'common/services';

@Injectable()
export class MaintenanceService {

  private mostRecentResolvedFeatures: IFeatureState[] = null;

  constructor(
    private maintenanceConfigService: MaintenanceConfigService,
    private arrayUtilService: ArrayUtilService,
    private stateService: StateService,
    private responseErrorService: ResponseErrorService,
      private dialogService: DialogService,
      private osSnifferService: OperatingSystemSnifferService,
    @Inject(SERVER_CONSTANTS) private serverConstants
  ) { }

  public getMostRecentFeatureMainenanceList(): IFeatureState[] {
    return (this.mostRecentResolvedFeatures || []).slice();
  }

  public async resolveMaintenanceStatus(navFeatures: MaintenanceFeature[], previousStateName: string): Promise<any> {
    const getMaintenanceDetails$ = this.maintenanceConfigService.getMaintenanceDetails();

    return firstValueFrom<MaintenanceResponse>(getMaintenanceDetails$).then(response => {
      if (response.errors && response.errors.length === 0) {
        const featuresInMaintenance: IFeatureState[] = response.featureStates.filter((val: IFeatureState) => val.inMaintenance);

        this.mostRecentResolvedFeatures = featuresInMaintenance;

        // intersect of features-in-maintenance and features of the state we're navigating to
        const blockedFeatures: IFeatureState[] = this.arrayUtilService.intersect(featuresInMaintenance, navFeatures, (m: IFeatureState, n: MaintenanceFeature) => m.feature === n);
        if (blockedFeatures && blockedFeatures.length > 0) {
          const baseResponse: IBaseResponse = this.featureStatesToBaseResponse(blockedFeatures);

          let delayFlag = false;
          // previous state's name is '' on reload, direct navigation to URL, bookmark, etc
          if (isString(previousStateName) && previousStateName !== '') {
            this.stateService.go(previousStateName);
          } else {
            this.stateService.go(homeStateNames.Frame);
            delayFlag = true;
          }

          this.responseErrorService.displayErrorsFromResponse(baseResponse, delayFlag);

          return Promise.reject();
        }
      } else {
        this.responseErrorService.displayErrorsFromResponse(response);

        return Promise.reject();
      }
    });
  }

  public considerMaintenancePopup(): void {
    const getMaintenanceDetails$ = this.maintenanceConfigService.getMaintenanceDetails();

    firstValueFrom<MaintenanceResponse>(getMaintenanceDetails$).then(response => {
      if (response.showMaintenancePopup) {
        this.showMaintenanceModal();
      }
    });
  }

  private featureStatesToBaseResponse(features: IFeatureState[]): IBaseResponse {
    const newResponse: IBaseResponse = new BaseResponse();
    const errors: ErrorMessage[] = features.map(
      (val: ErrorMessage) => {
        const obj = {
          key: this.serverConstants.maintenanceKey,
          message: val.message
        };

        return obj;
      });

    newResponse.errors = errors;

    return newResponse;
  }

  private async showMaintenanceModal(): Promise<any> {
    let imageSrc = '-/media/B820D13393F34580A738639AA0291EA5.ashx';
    let altText = 'Website Mobile Maintenance Image';

    if (this.osSnifferService.isDesktopOs()) {
      imageSrc = '-/media/4C541629D7D64FA6B8DA2DB8243ACC89.ashx';
      altText = 'Website Desktop Maintenance Image';
    }

    const data: GenericCmsModalInjectionValues = {
      cmsContent: {
        Title: 'Maintenance',
        PrimaryContent: `<img alt='${altText}' src='${imageSrc}' />`,
        AcceptBtn: 'Close',
      }
    };

    return this.dialogService.openGenericModal(MaintenanceModalComponent, data);
  }

}
