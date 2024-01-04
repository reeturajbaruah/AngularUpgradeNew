import { Component, HostBinding, OnInit } from '@angular/core';
import { StorefrontService, WorkflowStateId, WorkItem } from 'storefront/services/storefront.service';
import { cmsIds } from '../constants';
import { StorefrontModalService } from '../services/modal.service';
import { WizardStateResolverFactory } from 'common/ui';
import { StateService } from '@uirouter/core';

@Component({
    selector: 'side-menu-component',
    templateUrl: './side-menu.component.html',
    styleUrls: [
        './side-menu.component.less'
    ]
})
export class SideMenuComponent implements OnInit {

    public taskComplete: any;
    public taskNotComplete: any;

    constructor(
        private storefrontService: StorefrontService,
        private storefrontModalService: StorefrontModalService,
        private stateService: StateService
    ) {
    }

    public get workItems(): ReadonlyArray<WorkItem> {
        return this.storefrontService.workflow.filter(x => !x.isHidden).sort((a, b) => a.ordinal - b.ordinal);
    }

    public async skip(skipTo: WorkItem): Promise<void> {
        if (skipTo.isCompleted || skipTo.class === 'active') {
            return;
        }

        const current = this.storefrontService.currentWorkItem;
        if (!current.isSkippable) {
            return;
        }

        const skip = await this.storefrontModalService.skipTaskMessage();
        if (skip) {
            const nextWorkItem = await this.storefrontService.next(skipTo.id);
            this.stateService.go(nextWorkItem.startStateName);
        }
    }

    public setClass(workItem: WorkItem): string {
        if (this.storefrontService.currentWorkItem.id === WorkflowStateId.LOGIN) {
            const nextWorkItem = this.storefrontService.workflow.filter(x => !x.isCompleted && !x.isHidden)
                .reduce((a, b) => a.ordinal < b.ordinal ? a : b);
            //nextWorkItem will never be null
            nextWorkItem.hasStarted = true;
            this.storefrontService.startIndex = nextWorkItem.index;
        }

        if (!workItem.hasStarted) {
            workItem.class = undefined;
        } else if (workItem.wasSkipped) {
            workItem.class = 'skipped';
        } else if (workItem.isCompleted) {
            workItem.class = 'complete';
        } else {
            workItem.class = 'active';
        }

        return workItem.class;
    }

    ngOnInit() {
        this.storefrontService.getCmsItems([cmsIds.taskCompleteIconId, cmsIds.TaskNotCompleteIconId]).then((response) => {
            this.taskComplete = response[0];
            this.taskNotComplete = response[1];
        });

        const workItems = this.workItems.filter(x => [WorkflowStateId.MTOLL, WorkflowStateId.GINV].includes(x.id));
        if (workItems.length > 0) {
            this.storefrontService.startIndex = workItems[0].index;
        }
    }
}
