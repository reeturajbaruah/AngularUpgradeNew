import { CmsReplacementService, CmsUtilService } from 'cms/services';
import { CmsBundler } from 'cms/services/cmsBundler/cmsBundler.service';
import { DialogService } from 'common/services';
import { LogOffType, StorefrontService, WorkflowStateId, WorkItem } from './storefront.service';
import { cmsIds } from 'storefront/constants';
import { StateService, UIRouterGlobals } from '@uirouter/core';
import { SiteCoreItem } from 'cms/cms.module';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { stateNames as cavveStateNames } from 'cavve/constants';
import { ExternalDialogComponent, IExternalDialogInjectedValues } from '../external-dialog/external-dialog.component';
import { Action, GenericDialogComponent, IGenericDialogInjectedValues } from '../generic-dialog/generic-dialog.component';
import { CreditCardDialogComponent, ICreditCardDialogInjectedValues } from '../credit-card-dialog/credit-card-dialog.component';

@Injectable({ providedIn: 'root' })
export class StorefrontModalService {
    constructor(
        private dialogService: DialogService,
        private matDialog: MatDialog,
        private cmsService: CmsBundler,
        private storefrontService: StorefrontService,
        private stateService: StateService,
        private uiRouterGlobals: UIRouterGlobals,
        private cmsReplacementService: CmsReplacementService,
        private cmsUtilService: CmsUtilService
    ) {
    }

    public closeAll() {
        this.matDialog.closeAll();
    }

    public async showCreditCardPrompt(data: ICreditCardDialogInjectedValues): Promise<string> {
        return await this.dialogService.openFloater(CreditCardDialogComponent, data);
    }

    public async showExternalPage(data: IExternalDialogInjectedValues): Promise<void> {
        await this.dialogService.openFloater(ExternalDialogComponent, data);
    }

    public async showCompletionMessage(workItem: WorkItem): Promise<void> {
        switch (workItem.id) {
            case WorkflowStateId.GINV:
            case WorkflowStateId.MTOLL:
                if (this.uiRouterGlobals.current.name === workItem.startStateName) {
                    await this.handleDefaultTaskComplete();
                    break;
                } else if (cavveStateNames.Receipt === this.uiRouterGlobals.current.name) {
                    const removed = await this.storefrontService.remove(WorkflowStateId.OACC);
                    if (removed) {
                        await this.postCAVVESignup();
                    } else {
                        await this.postSignup();
                    }
                } else {
                    if (this.storefrontService.workflow.filter(x => x.id === WorkflowStateId.OACC).length > 0) {
                        await this.handleDefaultTaskComplete();
                    } else {
                        await this.postPaymentUpsale();
                    }
                }
                break;
            case WorkflowStateId.OACC:
                await this.postSignup();
                break;
            case WorkflowStateId.SUSVIOL:
                await this.showVehicalViolationSuspendedAccountMessage();
                break;
            default:
                await this.handleDefaultTaskComplete(workItem.wasSkipped);
        }

    }

    private async postCAVVESignup(): Promise<boolean> {
        const content = await this.get(cmsIds.ThankYouCAVVEModal);

        const key = await this.open({
            header: content.Title,
            body: content.Message,
            class: 'post-cavve',
            actions: [
                {
                    key: 'finish',
                    text: content.buttons['FINISH'],
                    type: 'button'
                },
                {
                    key: 'notFinished',
                    text: content.buttons['NOTFINISHED'],
                    type: 'button'
                }
            ]
        });

        if (key === 'notFinished') {
            const response = await this.doMoreMessage();
            if (response === 'notFinished') {
                return await this.postCAVVESignup();
            }
        }

        return true;
    }

    private async postSignup(): Promise<boolean> {
        const content = await this.get(cmsIds.ThankYouNewAccountModal);

        const key = await this.open({
            header: content.Title,
            body: content.Message,
            class: 'post-sign-up',
            actions: [
                {
                    key: 'finish',
                    text: content.buttons['FINISH'],
                    type: 'button'
                },
                {
                    key: 'notFinished',
                    text: content.buttons['NOTFINISHED'],
                    type: 'button'
                }
            ]
        });

        if (key === 'notFinished') {
            const response = await this.doMoreMessage();
            if (response === 'notFinished') {
                return await this.postSignup();
            }
        }

        return true;
    }

    public async showInactivityMessage(ms: number): Promise<boolean> {
        const content = await this.get(cmsIds.SessionTimeoutModal);
        const insertionValues = {
            timeLeftAfterWarningInMinutesStatic: Math.floor(ms / 60000)
        };
        content.Title = this.cmsReplacementService.transformTemplate(content.Title, insertionValues);

        const key = await this.open({
            header: content.Title,
            body: content.Message,
            image: content.ImageItem,
            class: 'inactivity',
            actions: [
                {
                    key: 'ok',
                    text: content.buttons['OK'],
                    type: 'button'
                }
            ]
        });

        if (key === 'reset') {
            const item = await this.storefrontService.restart(true, LogOffType.Auto);
            await this.stateService.go(item.startStateName);
            return false;
        };

        return true;
    }

    private async postPaymentUpsale(): Promise<boolean> {
        const content = await this.get(cmsIds.PaymentViolationsModal);
        const image = this.cmsUtilService.parseAllImageAttributes(content.Image);

        const key = await this.open({
            header: content.Title,
            body: content.Message,
            image,
            class: 'post-payment',
            actions: [
                {
                    key: 'signUp',
                    text: content.buttons['SIGNUP'],
                    type: 'button'
                },
                {
                    key: 'finish',
                    text: content.buttons['FINISH'],
                    type: 'button'
                }
            ]
        });
        if (key === 'signUp') {
            await this.storefrontService.add(WorkflowStateId.OACC);
            return true;
        }

        return true; 
    }

    public async failedToInitMessage(): Promise<void> {
        await this.open({
            header: 'Storefront failed to initialize.',
            body: 'The storefront failed to initialize properly. View logs for more information.',
            actions: [
                {
                    key: 'Reload',
                    text: 'Reload',
                    type: 'button'
                }
            ]
        });
    }

    public async skippedTasksMessage(): Promise<boolean> {
        const content = await this.get(cmsIds.SkippedTasksModal);

        const key = await this.open({
            header: content.Title,
            body: content.Message,
            class: 'skipped-tasks',
            actions: [
                {
                    key: 'notFinished',
                    text: content.buttons['NOTFINISHED'],
                    type: 'button'
                },
                {
                    key: 'finish',
                    text: content.buttons['FINISH'],
                    type: 'button'
                }
            ]
        });

        return key === 'notFinished';
    }

    public async exit(): Promise<boolean> {
        const content = await this.get(cmsIds.ExitSessionModal);

        const key = await this.open({
            header: content.Title,
            body: content.Message,
            class: 'exit-session',
            actions: [
                {
                    key: 'exit',
                    text: content.buttons['EXIT'],
                    type: 'button'
                },
                {
                    key: 'stay',
                    text: content.buttons['STAY'],
                    type: 'button'
                }
            ]
        });

        return key === 'exit';
    }

    public async showStorefrontMaintenanceMode(): Promise<void> {
        const content = await this.get(cmsIds.MaintenanceImgId);

        await this.open({
            image: content,
            class: 'maintenance-mode',
            actions: []
        });

    }

    public async noViolationsWithInvoiceFound(header: string, body: string): Promise<boolean> {

        const key = await this.open({
            header,
            body,
            actions: [
                {
                    key: 'proceed',
                    text: 'Proceed',
                    type: 'button'
                },
                {
                    key: 'tryagain',
                    text: 'Try another plate or invoice number',
                    type: 'button'
                }
            ]
        });

        return key === 'proceed';
    }

    public async noViolationsFound(errorMessage: string): Promise<void> {
        const content = await this.get(cmsIds.NoViolationsFoundModal);

        const key = await this.open({
            header: content.Title,
            body: errorMessage,
            class: 'violation-not-found',
            actions: [
                {
                    key: 'proceed',
                    text: content.buttons['PROCEED'],
                    type: 'button'
                },
                {
                    key: 'tryAgain',
                    text: content.buttons['TRYAGAIN'],
                    type: 'button'
                }
            ]
        });

        if (key === 'proceed') {
            const currentWorkItem = this.storefrontService.currentWorkItem;
            this.storefrontService.completeWorkItem(currentWorkItem);
            await this.handleDefaultTaskComplete();
            const nextWorkItem = await this.storefrontService.next();
            await this.stateService.go(nextWorkItem.startStateName);
        }
    }

    public async open<T extends IGenericDialogInjectedValues, S extends keyof T['actions']>(data: T): Promise<string> {
        return await this.dialogService.openFloater(GenericDialogComponent, data);
    }

    private async get(itemId: string): Promise<SiteCoreItem> {
        const response = await this.cmsService.getCmsItemById({ itemId });
        if ('cmsResponse' in response) {
            const item = JSON.parse(response['cmsResponse'] as string);
            item.buttons = [...new URLSearchParams(item.buttons).entries()]
                .reduce((acc, [key, val]) => (acc[key] = val, acc), {});
            return item;
        }
        return response;
    }

    public async handleDefaultTaskComplete(wasSkipped: boolean = false): Promise<void> {
        if (wasSkipped) {
            return;
        }
        if (this.storefrontService.isWorkflowComplete()) {
            const nextSkippedWorkItem = this.storefrontService.containsSkippedWorkItem();
            if (nextSkippedWorkItem) {
                const notFinished = await this.skippedTasksMessage();
                if (notFinished) {
                    nextSkippedWorkItem.wasSkipped = false;
                }
            }
            else {
                await this.showAllTasksComplete();
            }
        } else {
            await this.showTaskComplete();
        }
    }

    public async showTaskComplete(): Promise<void> {
        const content = await this.get(cmsIds.TaskCompleteModal);
        const insertionValues = {
            completeTaskCount: ((this.storefrontService.currentWorkItem.index + 1) - this.storefrontService.startIndex).toString(),
            selectedTaskCount: this.storefrontService.tasks().length.toString()

        };
        content.Message = this.cmsReplacementService.transformTemplate(content.Message, insertionValues);

        await this.open({
            header: content.Title,
            body: content.Message,
            class: 'task-complete',
            actions: [
                {
                    key: 'next',
                    text: content.buttons['NEXT'],
                    type: 'button'
                }
            ]
        });
    }

    public async showAllTasksComplete(): Promise<void> {
        const content = await this.get(cmsIds.AllTasksCompleteModal);

        const key = await this.open({
            header: content.Title,
            body: content.Message,
            class: 'all-tasks-complete',
            actions: [
                {
                    key: 'finish',
                    text: content.buttons['FINISH'],
                    type: 'button'
                },
                {
                    key: 'notFinished',
                    text: content.buttons['NOTFINISHED'],
                    type: 'button'
                }
            ]
        });

        if (key === 'notFinished') {
            const response = await this.doMoreMessage();
            if (response === 'notFinished') {
                await this.showAllTasksComplete();
            }
        }
    }

    public async finishAccountSetup(): Promise<void> {
        const content = await this.get(cmsIds.FinishAccountSetupModal);

        await this.open({
            header: content.Title,
            body: content.Message,
            class: 'finish-setup',
            actions: [
                {
                    key: 'finish',
                    text: content.buttons['FINISH'],
                    type: 'button'
                }
            ]
        });

        await this.storefrontService.add(WorkflowStateId.OACC);
        const workItem = await this.storefrontService.next(WorkflowStateId.OACC);

        this.storefrontService.clearTasks(true);

        await this.stateService.go(workItem.startStateName);
    }

    public async showGotoCsr(): Promise<boolean> {
        const content = await this.get(cmsIds.AdditionalHelpModal);

        const key = await this.open({
            header: content.Title,
            class: 'csr',
            actions: [
                {
                    key: 'finish',
                    text: content.buttons['FINISH'],
                    type: 'button'
                }
            ]
        });

        return key === 'finish';
    }

    public async iDontSeeWhatINeedMessage(): Promise<'csr' | 'fullsite' | 'none'> {
        const content = await this.get(cmsIds.OtherOptionsModal);

        const key = await this.open({
            header: content.Title,
            class: 'other-options',
            actions: [
                {
                    key: 'talkToCsr',
                    text: content.buttons['CSR'],
                    type: 'button'
                },
                {
                    key: 'fullSite',
                    text: content.buttons['WEBSITE'],
                    type: 'button'
                },
                {
                    key: 'goback',
                    text: content.buttons['TASKSELECTION'],
                    type: 'button'
                }
            ]
        });

        switch (key) {
            case 'talkToCsr':
                const done = await this.showGotoCsr();
                if (done) {
                    return 'csr';
                } else {
                    return await this.iDontSeeWhatINeedMessage();
                }
            case 'fullSite':
                return 'fullsite';
            default:
                return 'none';
        }
    }

    public async doMoreMessage(): Promise<string> {
        const content = await this.get(cmsIds.DoMoreModal);

        const key = await this.open({
            header: content.Title,
            class: 'other-options-complete',
            actions: [
                {
                    key: 'anotherTask',
                    text: content.buttons['ANOTHERTASK'],
                    type: 'button'
                },
                {
                    key: 'talkToCsr',
                    text: content.buttons['CSR'],
                    type: 'button'
                },
                {
                    key: 'fullSite',
                    text: content.buttons['FULLWEBSITE'],
                    type: 'button'
                },
                {
                    key: 'finish',
                    text: content.buttons['FINISH'],
                    type: 'button'
                }
            ]
        });

        switch (key) {
            case 'anotherTask':
                this.matDialog.closeAll();
                const nextWorkItem = await this.storefrontService.next(WorkflowStateId.SELECT);
                await this.stateService.go(nextWorkItem.startStateName);
                this.storefrontService.clearTasks();
                this.storefrontService.cancelWizard = true;
                return key;
            case 'finish':
                return key;
            case 'fullSite':
                const fullsite = await this.storefrontService.startDesktopMode();
                await this.stateService.go(fullsite.startStateName);
                this.storefrontService.cancelWizard = true;
                return key;
            case 'talkToCsr':
                const handled = await this.showGotoCsr();
                if (handled) {
                    return key;
                } else {
                    return await this.doMoreMessage();
                }
            default:
                return 'notFinished';
        }
    }

    public async genericPostSignup(cmsId: string) {
        const content = await this.get(cmsId);

        const actions = [
            {
                key: 'finish',
                text: content.buttons['FINISH'],
                type: 'button'
            }
        ] as Action[];

        if (content.buttons['NOTFINISHED']) {
            actions.push(
                {
                    key: 'notFinished',
                    text: content.buttons['NOTFINISHED'],
                    type: 'button'
                }
            );
        }

        const key = await this.open({
            header: content.Title,
            body: content.Message,
            class: 'post-sign-up',
            actions
        });

        if (key === 'notFinished') {
            const response = await this.doMoreMessage();
            if (response === 'notFinished') {
                await this.genericPostSignup(cmsId);
            } else if (response === 'finish') {
                const survey = await this.storefrontService.goToSurvey();
                await this.stateService.go(survey.startStateName);
            }
        } else {
            const survey = await this.storefrontService.goToSurvey();
            await this.stateService.go(survey.startStateName);
        }
    }

    public async showVehicalViolationSuspendedAccountMessage(): Promise<boolean> {
        const content = await this.get(cmsIds.VehicleHasViolationSuspendedAccountModal);

        const key = await this.open({
            header: content.Title,
            body: content.Message,
            class: 'vehicle-violation',
            actions: [
                {
                    key: 'finish',
                    text: content.buttons['FINISH'],
                    type: 'button'
                },
                {
                    key: 'notFinished',
                    text: content.buttons['NOTFINISHED'],
                    type: 'button'
                }
            ]
        });

        if (key === 'notFinished') {
            const response = await this.doMoreMessage();
            if (response === 'notFinished') {
                return await this.showVehicalViolationSuspendedAccountMessage();
            } else if (response === 'finish') {
                const survey = await this.storefrontService.goToSurvey();
                await this.stateService.go(survey.startStateName);
            }
        } else {
            const survey = await this.storefrontService.goToSurvey();
            await this.stateService.go(survey.startStateName);
        }

        return true;
    }

    public async skipTaskMessage(): Promise<boolean> {
        const content = await this.get(cmsIds.SkipTaskOrGoBackModal);

        const key = await this.open({
            header: content.Title,
            body: content.Message,
            class: 'skip-task',
            actions: [
                {
                    key: 'stay',
                    text: content.buttons['STAY'],
                    type: 'button'
                },
                {
                    key: 'leave',
                    text: content.buttons['LEAVE'],
                    type: 'button'
                }
            ]
        });

        return key === 'leave';
    }
}
