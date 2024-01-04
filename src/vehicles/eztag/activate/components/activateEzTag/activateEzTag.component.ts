import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { SiteCoreItem } from 'cms/cms.module';
import { CurrentUser, CurrentUserService, DialogContent, DialogService, ToasterService } from 'common/services';
import { StateNames } from 'home/constants';
import { ActivateEzTagWizardInformation, TagVerifyOptions } from '../../activate.constants';
import { IActivateTag } from '../../activate.model';
import { ActivateFacadeApiService } from '../../services/activate-facade-api/activate-facade-api.service';
import { MountEzTagComponent } from '../mountEzTag/mountEzTag.component';
import { stateNames as rootStateNames } from 'constants/stateNames.constants';
import { WebStorageService } from '../../../../../common/services/webStorageService/webStorage.service';

@Component({
  selector: 'activate-ez-tag',
  templateUrl: './activateEzTag.component.html',
  styleUrls: ['./activateEzTag.component.less']
})
export class ActivateEzTagComponent implements OnInit {

  public tagRequestActivationNumber: string;
  public isAuthenticated: boolean;
  public currentUser: CurrentUser;
  public VerifyOption: string;
  public phoneNumber: string;
  public emailAddress: string;
  public VerifyOptions = TagVerifyOptions;

  @Input() activateEzTag: SiteCoreItem;

  @Input() mountEZTag: SiteCoreItem;

  constructor(
    private activateFacadeApiService: ActivateFacadeApiService,
    private toaster: ToasterService,
    public authService: AuthenticationService,
    private stateService: StateService,
    private homeStates: StateNames,
    private webStorage: WebStorageService,
    private currentUserService: CurrentUserService,
    private dialogService: DialogService,

  ) { }

  async ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.authService.isAuthenticated$.subscribe(res => this.isAuthenticated = res);
    this.currentUser = await this.currentUserService.getCurrentUser();
  }
  
  onCancel(isKioskView: boolean) {
    this.webStorage.removeEntry(ActivateEzTagWizardInformation);

    if (isKioskView) {
      this.stateService.go(rootStateNames.manageVehicles);
    } else {
      this.stateService.go(this.homeStates.Frame);
    }
  }

    nextState(nextState: StateDeclaration) {
    const payload: IActivateTag = {
      accountId: this.isAuthenticated ? this.currentUser?.acctId : null,
      transactionId: this.tagRequestActivationNumber
    };

    switch (this.VerifyOption) {
      case TagVerifyOptions.Phone:
        payload.phoneNumber = this.phoneNumber;
        break;
      case TagVerifyOptions.Email:
        payload.emailAddress = this.emailAddress;
        break;
      default: 
        break;
    }

    this.activateFacadeApiService.findTagsToActivate(payload).then((response) => {
      if (response?.errors?.length === 0) {
        this.webStorage.setKeyValue(ActivateEzTagWizardInformation, {
          transactionId: this.tagRequestActivationNumber, listOfVehicles: response?.ezTags
        });
        this.stateService.go(nextState);
      } else {
        this.toaster.show('Error', response?.errors?.[0]?.message);
      }
    });
  };

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  mountEzTag() {
    const data = {
      modalCms: this.mountEZTag
    };

    this.dialogService.openSliderFilled(MountEzTagComponent,
      data, { title: this.mountEZTag?.Title } as DialogContent);
  }
}
