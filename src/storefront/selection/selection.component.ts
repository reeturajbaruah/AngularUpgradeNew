import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { StateService } from '@uirouter/core';
import { StorefrontModalService } from 'storefront/services/modal.service';
import { IWorkflowStateCmsContent, IWorkflowStateConfig, StorefrontService, WorkflowStateId } from 'storefront/services/storefront.service';
import { SiteCoreItem, SiteCoreMediaItem } from '../../cms/cms.module';
import { CmsUtilService } from '../../cms/services';
import { cmsIds } from '../constants';
import { WizardComponent } from 'common/ui';
import { simpleFadeAnimation } from '../../common/ui/animations/animations';
import { disableDebugTools } from '@angular/platform-browser';
import { AuthenticationService } from '../../authentication/authenticationService/authentication.service';

@Component({
    selector: 'storefront-selection-component',
    templateUrl: './selection.component.html',
    styleUrls: ['./selection.component.less'],
    animations: [simpleFadeAnimation]
})
export class SelectionComponent implements OnInit {

    public show = false;
    public tasks: IWorkflowStateConfig[];
    public selectedCount = 0;
    public isOpenAccountDisabled = false;
    config: any;
    public isModalActive: boolean;
    @Input() public cmsContent: SiteCoreItem;
    @Input() public checkboxNormal: SiteCoreMediaItem;
    @Input() public checkboxFocus: SiteCoreMediaItem;
    @Input() public checkboxSelected: SiteCoreMediaItem;

    constructor(
        private storefrontService: StorefrontService,
        private storefrontModalService: StorefrontModalService,
        private stateService: StateService,
        private cmsUtilService: CmsUtilService,
        private authenticationService: AuthenticationService
    ) {
    }

    async ngOnInit() {

        //Make sure that this component will not show within <ui-view> in the side-menu step
        const currentWorkItem = this.storefrontService.currentWorkItem;
        if (!currentWorkItem || currentWorkItem.id === WorkflowStateId.SELECT) {
            this.show = true;
            this.storefrontService.hideSelectionWorkItem = false;
        } else {
            return;
        }

        const cmsItems = await this.storefrontService.getCmsItems([
            cmsIds.MissedAToll,
            cmsIds.GotAnInvoice,
            cmsIds.OpenAnAccount,
            cmsIds.UpdateBillingInfo,
            cmsIds.UpdateContactInfo,
            cmsIds.UpdateAuthorizedContact,
            cmsIds.UpdateReplenishAmount,
            cmsIds.AddOrRemoveTag,
            cmsIds.MakeAPayment
        ]);

        this.tasks = this.storefrontService.workItemDefinitions
            .filter(x => !x.isHidden)
            .sort(x => x.ordinal)
            .map(x => {
                const cmsItem = cmsItems.filter(item => Number(WorkflowStateId[item.dbId]) === x.id)[0];
                x.cmsContent = {} as IWorkflowStateCmsContent;
                x.class = undefined;
                x.cmsContent.checkbox = this.checkboxNormal;
                x.cmsContent.selectedIcon = this.cmsUtilService.parseAllImageAttributes(cmsItem.cmsSelectedIcon);
                x.cmsContent.unselectedIcon = this.cmsUtilService.parseAllImageAttributes(cmsItem.cmsUnselectedIcon);
                x.cmsContent.displayName = cmsItem.storefrontDisplayName;
                return x;
            });

        if (this.authenticationService.isAuthenticated()) {
            this.tasks.filter(x => x.id === WorkflowStateId.OACC)[0].class = 'disabled';
            this.isOpenAccountDisabled = true;
        }
    }

    public get workflowContainsTasks(): boolean {
        return this.storefrontService.tasks().length > 0;
    }

    public onMouseEnter(task: IWorkflowStateConfig) {
        if (['disabled', 'selected'].includes(task.class)) {
            return;
        }
        task.class = 'hover';
        task.cmsContent.checkbox = this.checkboxFocus;
    }

    public onMouseLeave(task: IWorkflowStateConfig) {
        if (task.class === 'hover') {
            task.class = undefined;
            task.cmsContent.checkbox = this.checkboxNormal;
        }
    }

    public async handleClick(task: IWorkflowStateConfig) {
        if (task.class === 'disabled') {
            return;
        }

        if (task.class === 'selected') {
            task.class = undefined;
            task.cmsContent.checkbox = this.checkboxNormal;
            await this.storefrontService.remove(task.id);
        } else {
            task.class = 'selected';
            task.cmsContent.checkbox = this.checkboxSelected;
            await this.storefrontService.add(task.id);
        }

        if (task.disabledIfSelected && task.disabledIfSelected.size > 0) {
            const toValue = task.class === 'selected' ? 'disabled' : undefined;
            //to keep simple, hard code case for open account 
            const selected = this.tasks.filter(x => x.class === 'selected' && x.id !== task.id);
            if (task.disabledIfSelected.has(WorkflowStateId.OACC) && selected.filter(x => x.disabledIfSelected && x.disabledIfSelected.has(WorkflowStateId.OACC)).length > 0) {
                return;
            }
            this.tasks.filter(x => task.disabledIfSelected.has(x.id)).forEach(x => {
                if (x.id !== WorkflowStateId.OACC || (x.id === WorkflowStateId.OACC && !this.isOpenAccountDisabled)) {
                    x.class = toValue;
                } 
            });
        }
    }

    public get openAccount() {
        return this.tasks.filter(x => x.id === WorkflowStateId.OACC)[0];
    }

    public async proceed(wizardUi: WizardComponent) {
        if (wizardUi) {
            this.show = false;
            await this.storefrontService.delay(500);
            await this.storefrontService.startNewSession();
            await wizardUi.gotoNextState();
            //use the start index as an offset to display when the task is completed 
            this.storefrontService.startIndex = this.storefrontService.tasks()[0].index;;
        }
    }

    public get hide(): boolean {
        return this.storefrontService.hideSelectionWorkItem;
    }

    public async dontSeeWhatINeed() {
        if (this.isModalActive) {
            return;
        }

        //prevent user from spam clicking causing mulitple modals
        this.isModalActive = true;

        const result = await this.storefrontModalService.iDontSeeWhatINeedMessage();

        this.isModalActive = false;

        switch (result) {
            case 'csr':
                this.show = false;
                await this.storefrontService.delay(500);
                const item = await this.storefrontService.restart();
                await this.stateService.go(item.startStateName);
                break;
            case 'fullsite':
                const workItem = await this.storefrontService.startDesktopMode();
                await this.stateService.go(workItem.startStateName);
                break;
            default:
                break;
        }
    }
}
