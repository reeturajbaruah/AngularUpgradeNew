import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { CmsReplacementService } from 'cms/services';
import { IEZTag } from 'vehicles/interfaces';
import { WebStorageService } from '../../../../../common/services/webStorageService/webStorage.service';
import { ActivateEzTagWizardInformation } from '../../activate.constants';
import { IActivateEzTagCompletionCms, IActivateEzTagWizardInfo } from '../../activate.model';

@Component({
  selector: 'app-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.less']
})
export class CompletionComponent implements OnInit, OnDestroy {

  ezTags: IEZTag[];
  isAuthenticated: boolean;

  @Input() pageCms: IActivateEzTagCompletionCms;

  constructor(
      private cmsReplacementService: CmsReplacementService,
      private webStorage: WebStorageService,
    private stateService: StateService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    const activateEzTagWizardInfo: IActivateEzTagWizardInfo = this.webStorage.getValue(ActivateEzTagWizardInformation);

    this.ezTags = activateEzTagWizardInfo?.listOfVehicles ?? [];
    this.pageCms.EzTagList = this.cmsReplacementService.transformTemplate(this.pageCms.EzTagList, { ezTagList: this.generateEzTagList(this.ezTags) });
    this.isAuthenticated = this.authenticationService.isAuthenticated();
  }

  ngOnDestroy(): void {
    this.webStorage.removeEntry(ActivateEzTagWizardInformation);
  }

  private generateEzTagList(ezTags: IEZTag[]): string {
    const tags: string[] = [];

    ezTags.forEach(tag => tags.push(tag.fullTagId));

    return tags.join(', ');
  }

  async nextStep(nextState: StateDeclaration): Promise<void> {
    await this.stateService.go(nextState);
  }

  async cancel(state: StateDeclaration): Promise<void> {
    await this.stateService.go(state);
  }

}
