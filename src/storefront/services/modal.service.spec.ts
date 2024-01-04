import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { StateService, UIRouterGlobals } from '@uirouter/core';
import { CmsReplacementService, CmsUtilService } from '../../cms/services';
import { CmsBundler } from '../../cms/services/cmsBundler/cmsBundler.service';
import { DialogService } from '../../common/services';
import { CreditCardDialogComponent, ICreditCardDialogInjectedValues } from '../credit-card-dialog/credit-card-dialog.component';
import { ExternalDialogComponent, IExternalDialogInjectedValues } from '../external-dialog/external-dialog.component';
import { IWorkflowStateConfig, StorefrontService, WorkflowStateId, WorkItem } from '../services/storefront.service';
import { StorefrontModalService } from './modal.service';
import { stateNames as frp3StateNames } from 'frp3/constants';
import { stateNames as cavveStateNames } from 'cavve/constants';

describe('service: StorefrontModalService - storefront', () => {

    let service: StorefrontModalService;
    let storefrontService: jasmine.SpyObj<StorefrontService>;
    let dialogService: jasmine.SpyObj<DialogService>;
    let matDialog: jasmine.SpyObj<MatDialog>;
    let cmsService: jasmine.SpyObj<CmsBundler>;
    let stateService: jasmine.SpyObj<StateService>;
    let uiRouterGlobals: jasmine.SpyObj<UIRouterGlobals>;
    let cmsReplacementService: jasmine.SpyObj<CmsReplacementService>;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;

    beforeEach(() => {

        storefrontService = jasmine.createSpyObj('StorefrontService',
            ['completeWorkItem', 'remove', 'add', 'restart', 'next', 'containsSkippedWorkItem', 'tasks', 'clearTasks', 'startDesktopMode', 'goToSurvey', 'isWorkflowComplete'],
            { workflow: undefined }
        );
        dialogService = jasmine.createSpyObj('DialogService', ['openFloater']);
        matDialog = jasmine.createSpyObj('MatDialog', ['closeAll']);
        cmsService = jasmine.createSpyObj('CmsBundler', ['getCmsItemById']);
        stateService = jasmine.createSpyObj('StateService', ['go']);
        uiRouterGlobals = jasmine.createSpyObj('uiRouterGlobals', [], { current: { name: '' } });
        cmsReplacementService = jasmine.createSpyObj('CmsReplacementService', ['transformTemplate']);
        cmsUtilService = jasmine.createSpyObj('CmsUtilService', ['parseAllImageAttributes']);;


        TestBed.configureTestingModule({
            providers: [
                StorefrontModalService,
                { provide: StorefrontService, useFactory: () => storefrontService },
                { provide: DialogService, useFactory: () => dialogService },
                { provide: MatDialog, useFactory: () => matDialog },
                { provide: CmsBundler, useFactory: () => cmsService },
                { provide: StateService, useFactory: () => stateService },
                { provide: UIRouterGlobals, useValue: uiRouterGlobals },
                { provide: CmsReplacementService, useFactory: () => cmsReplacementService },
                { provide: CmsUtilService, useFactory: () => cmsUtilService }
            ]
        });

        service = TestBed.inject(StorefrontModalService);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(service).toBeDefined();
        });
    });

    describe('closeAll', () => {
        it('should call matDialog.closeAll', () => {
            //Act
            service.closeAll();

            //Assert
            expect(matDialog.closeAll).toHaveBeenCalled();
        });
    });

    describe('showCreditCardDialog', () => {
        it('should call dialogService.openFloater', async () => {
            //Arrange
            const data = {
                isSnapPay: false,
                closeDialog: undefined,
                cmsData: undefined,
                state: undefined
            } as ICreditCardDialogInjectedValues;

            //Act
            await service.showCreditCardPrompt(data);

            //Assert
            expect(dialogService.openFloater).toHaveBeenCalledWith(CreditCardDialogComponent, data);
        });
    });

    describe('showExternalPage', () => {
        it('should call dialog.openFloater', async () => {
            //Arrange
            const data = {
                pdf: false,
                url: undefined
            } as IExternalDialogInjectedValues;

            //Act
            await service.showExternalPage(data);

            //Assert
            expect(dialogService.openFloater).toHaveBeenCalledWith(ExternalDialogComponent, data);
        });
    });

    describe('showCompletionMessage', () => {
        it('should call handleDefaultTaskComplete', async () => {
            //Arrange
            spyOn(service, 'handleDefaultTaskComplete').and.stub();
            (Object.getOwnPropertyDescriptor(uiRouterGlobals, 'current').get as jasmine.Spy<any>).and.returnValue({ name: frp3StateNames.Landing });

            //Act
            await service.showCompletionMessage({
                id: WorkflowStateId.GINV,
                startStateName: frp3StateNames.Landing
            } as WorkItem);

            //Assert
            expect(service.handleDefaultTaskComplete).toHaveBeenCalledWith();
        });

        it('should call handleDefaultTaskComplete', async () => {
            //Arrange
            spyOn(service, 'handleDefaultTaskComplete').and.stub();
            (Object.getOwnPropertyDescriptor(uiRouterGlobals, 'current').get as jasmine.Spy<any>).and.returnValue({ name: frp3StateNames.Landing });

            //Act
            await service.showCompletionMessage({
                id: WorkflowStateId.MTOLL,
                startStateName: frp3StateNames.Landing
            } as WorkItem);

            //Assert
            expect(service.handleDefaultTaskComplete).toHaveBeenCalledWith();
        });

        it('should call postPaymentUpsale', async () => {
            //Arrange
            const spy = spyOn<any>(service, 'postPaymentUpsale').and.stub();
            (Object.getOwnPropertyDescriptor(uiRouterGlobals, 'current').get as jasmine.Spy<any>).and.returnValue({ name: frp3StateNames.Receipt });
            (Object.getOwnPropertyDescriptor(storefrontService, 'workflow').get as jasmine.Spy<() => ReadonlyArray<WorkItem>>).and.returnValue([{ id: WorkflowStateId.LOGIN } as WorkItem]);

            //Act
            await service.showCompletionMessage({
                id: WorkflowStateId.GINV,
                startStateName: frp3StateNames.Landing
            } as WorkItem);

            //Assert
            expect(spy).toHaveBeenCalled();
        });

        it('should call postCAVVESignup', async () => {
            //Arrange
            const spy = spyOn<any>(service, 'postCAVVESignup').and.stub();
            (Object.getOwnPropertyDescriptor(uiRouterGlobals, 'current').get as jasmine.Spy<any>).and.returnValue({ name: cavveStateNames.Receipt });
            storefrontService.remove.and.resolveTo(true);

            //Act
            await service.showCompletionMessage({
                id: WorkflowStateId.GINV,
                startStateName: frp3StateNames.Landing
            } as WorkItem);

            //Assert
            expect(spy).toHaveBeenCalled();
        });

        it('should call postSignup', async () => {
            //Arrange
            const spy = spyOn<any>(service, 'postSignup').and.stub();
            (Object.getOwnPropertyDescriptor(uiRouterGlobals, 'current').get as jasmine.Spy<any>).and.returnValue({ name: cavveStateNames.Receipt });
            storefrontService.remove.and.resolveTo(false);

            //Act
            await service.showCompletionMessage({
                id: WorkflowStateId.GINV,
                startStateName: frp3StateNames.Landing
            } as WorkItem);

            //Assert
            expect(spy).toHaveBeenCalled();
        });

        it('should call postSignup', async () => {
            //Arrange
            const spy = spyOn<any>(service, 'postSignup').and.stub();
            //Act
            await service.showCompletionMessage({
                id: WorkflowStateId.OACC,
            } as WorkItem);

            //Assert
            expect(spy).toHaveBeenCalled();
        });

        it('should call showVehicalViolationSuspendedAccountMessage', async () => {
            //Arrange
            const spy = spyOn<any>(service, 'showVehicalViolationSuspendedAccountMessage').and.stub();
            //Act
            await service.showCompletionMessage({
                id: WorkflowStateId.SUSVIOL,
            } as WorkItem);

            //Assert
            expect(spy).toHaveBeenCalled();
        });

        it('should call handleDefaultTaskComplete with false', async () => {
            //Arrange
            spyOn(service, 'handleDefaultTaskComplete').and.stub();

            //Act
            await service.showCompletionMessage({
                id: WorkflowStateId.UBI,
                wasSkipped: false
            } as WorkItem);

            //Assert
            expect(service.handleDefaultTaskComplete).toHaveBeenCalledWith(false);
        });

        it('should call handleDefaultTaskComplete with true', async () => {
            //Arrange
            spyOn(service, 'handleDefaultTaskComplete').and.stub();

            //Act
            await service.showCompletionMessage({
                id: WorkflowStateId.UBI,
                wasSkipped: true
            } as WorkItem);

            //Assert
            expect(service.handleDefaultTaskComplete).toHaveBeenCalledWith(true);
        });
    });

    describe('postCAVVESignup', () => {
        beforeEach(() => {
            spyOn<any>(service, 'get').and.resolveTo({ buttons: { FINISH: '', NOTFINISHED: '' } });
        });

        it('should not call doMoreMessage', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('finish');
            spyOn(service, 'doMoreMessage');

            //Act
            const response = await service['postCAVVESignup']();

            //Assert
            expect(response).toEqual(true);
            expect(service.doMoreMessage).not.toHaveBeenCalled();
        });

        it('should call doMoreMessage', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('notFinished');
            spyOn(service, 'doMoreMessage').and.resolveTo('finish');

            //Act
            const response = await service['postCAVVESignup']();

            //Assert
            expect(response).toEqual(true);
            expect(service.doMoreMessage).toHaveBeenCalled();
        });

        it('should call doMoreMessage 2 times', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('notFinished');
            spyOn(service, 'doMoreMessage').and.returnValues('notFinished' as any, 'finish' as any);

            //Act
            const response = await service['postCAVVESignup']();

            //Assert
            expect(response).toEqual(true);
            expect(service.doMoreMessage).toHaveBeenCalledTimes(2);
        });
    });

    describe('postSignup', () => {
        beforeEach(() => {
            spyOn<any>(service, 'get').and.resolveTo({ buttons: { FINISH: '', NOTFINISHED: '' } });
        });

        it('should not call doMoreMessage', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('finish');
            spyOn(service, 'doMoreMessage');

            //Act
            const response = await service['postSignup']();

            //Assert
            expect(response).toEqual(true);
            expect(service.doMoreMessage).not.toHaveBeenCalled();
        });

        it('should call doMoreMessage', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('notFinished');
            spyOn(service, 'doMoreMessage').and.resolveTo('finish');

            //Act
            const response = await service['postSignup']();

            //Assert
            expect(response).toEqual(true);
            expect(service.doMoreMessage).toHaveBeenCalled();
        });

        it('should call doMoreMessage 2 times', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('notFinished');
            spyOn(service, 'doMoreMessage').and.returnValues('notFinished' as any, 'finish' as any);

            //Act
            const response = await service['postSignup']();

            //Assert
            expect(response).toEqual(true);
            expect(service.doMoreMessage).toHaveBeenCalledTimes(2);
        });
    });

    describe('showInactivityMessage', () => {
        beforeEach(() => {
            spyOn<any>(service, 'get').and.resolveTo({ buttons: { OK: '' } });
            cmsReplacementService.transformTemplate.and.stub();
        });

        it('should call stateService.go', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('reset');
            storefrontService.restart.and.resolveTo({ startStateName: 'test' } as WorkItem);

            //Act
            const response = await service['showInactivityMessage'](100);

            //Assert
            expect(response).toEqual(false);
            expect(stateService.go).toHaveBeenCalledWith('test');
        });

        it('should call stateServicego', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('ok');

            //Act
            const response = await service['showInactivityMessage'](100);

            //Assert
            expect(response).toEqual(true);
            expect(stateService.go).not.toHaveBeenCalled();
        });
    });

    describe('postPaymentUpsale', () => {
        beforeEach(() => {
            spyOn<any>(service, 'get').and.resolveTo({ buttons: { SIGNUP: '', FINISH: '' } });
        });

        it('should call storefrontService.add', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('signUp');

            //Act
            const response = await service['postPaymentUpsale']();

            //Assert
            expect(response).toEqual(true);
            expect(storefrontService.add).toHaveBeenCalledWith(WorkflowStateId.OACC);
        });

        it('should not call storefrontService.add', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('finish');

            //Act
            const response = await service['postPaymentUpsale']();

            //Assert
            expect(response).toEqual(true);
            expect(storefrontService.add).not.toHaveBeenCalled();
        });
    });

    describe('noViolationsFound', () => {
        beforeEach(() => {
            spyOn<any>(service, 'get').and.resolveTo({ buttons: { PROCEED: '', TRYAGAIN: '' } });
        });

        it('should perform side effects', async () => {
            //Arrange
            spyOn(service, 'handleDefaultTaskComplete').and.stub();
            spyOn(service, 'open').and.resolveTo('proceed');
            storefrontService.completeWorkItem.and.stub();
            storefrontService.next.and.resolveTo({ startStateName: 'test' } as WorkItem);

            //Act
            await service['noViolationsFound']('');

            //Assert
            expect(storefrontService.completeWorkItem).toHaveBeenCalled();
            expect(stateService.go).toHaveBeenCalledWith('test');
        });
    });

    describe('handleDefaultTaskComplete', () => {
        it('should return without performing side effects', async () => {
            //Act
            await service.handleDefaultTaskComplete(true);

            //Assert
            expect(storefrontService.isWorkflowComplete).not.toHaveBeenCalled();
        });

        it('should call showTaskComplete', async () => {
            //Arrange
            spyOn(service, 'showTaskComplete').and.stub();
            storefrontService.isWorkflowComplete.and.returnValue(false);

            //Act
            await service.handleDefaultTaskComplete();

            //Assert
            expect(service.showTaskComplete).toHaveBeenCalled();
        });

        it('should call showAllTasksComplete', async () => {
            //Arrange
            spyOn(service, 'showAllTasksComplete').and.stub();
            storefrontService.isWorkflowComplete.and.returnValue(true);
            storefrontService.containsSkippedWorkItem.and.returnValue(undefined);

            //Act
            await service.handleDefaultTaskComplete();

            //Assert
            expect(service.showAllTasksComplete).toHaveBeenCalled();
        });

        it('should call skippedTasksMessage(', async () => {
            //Arrange
            spyOn(service, 'skippedTasksMessage').and.resolveTo(true);
            storefrontService.isWorkflowComplete.and.returnValue(true);
            const workItem = { wasSkipped: true } as WorkItem;
            storefrontService.containsSkippedWorkItem.and.returnValue(workItem);

            //Act
            await service.handleDefaultTaskComplete();

            //Assert
            expect(service.skippedTasksMessage).toHaveBeenCalled();
            expect(workItem.wasSkipped).toEqual(false);
        });
    });

    describe('showAllTasksComplete', () => {
        beforeEach(() => {
            spyOn<any>(service, 'get').and.resolveTo({ buttons: { FINISH: '', NOTFINISHED: '' } });
        });

        it('should call doMoreMessage 1 time', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('notFinished');
            spyOn(service, 'doMoreMessage').and.resolveTo('finish');

            //Act
            await service.showAllTasksComplete();

            //Assert
            expect(service.doMoreMessage).toHaveBeenCalledTimes(1);
        });

        it('should call doMoreMessage 2 time', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('notFinished');
            spyOn(service, 'doMoreMessage').and.returnValues('notFinished' as any, 'finish' as any);

            //Act
            await service.showAllTasksComplete();

            //Assert
            expect(service.doMoreMessage).toHaveBeenCalledTimes(2);
        });

        it('should call not call doMoreMessage', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('finish');
            spyOn(service, 'doMoreMessage');


            //Act
            await service.showAllTasksComplete();

            //Assert
            expect(service.doMoreMessage).not.toHaveBeenCalled();
        });
    });

    describe('finishAccountSetup', () => {
        beforeEach(() => {
            spyOn<any>(service, 'get').and.resolveTo({ buttons: { FINISH: '' } });
        });

        it('should perform side effects', async () => {
            //Arrange
            storefrontService.next.and.resolveTo({ startStateName: 'test' } as WorkItem);

            //Act
            await service.finishAccountSetup();

            //Assert
            expect(storefrontService.add).toHaveBeenCalled();
            expect(storefrontService.clearTasks).toHaveBeenCalled();
            expect(stateService.go).toHaveBeenCalledWith('test');
        });
    });

    describe('iDontSeeWhatINeedMessage', () => {
        beforeEach(() => {
            spyOn<any>(service, 'get').and.resolveTo({ buttons: { CSR: '', WEBSITE: '', TASKSELECTION: ''} });
        });

        it('should return none', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('goback');
            spyOn(service, 'showGotoCsr');

            //Act
            const response = await service.iDontSeeWhatINeedMessage();

            //Assert
            expect(response).toEqual('none');
            expect(service.showGotoCsr).not.toHaveBeenCalled();
          
        });

        it('should return fullsite', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('fullSite');
            spyOn(service, 'showGotoCsr');

            //Act
            const response = await service.iDontSeeWhatINeedMessage();

            //Assert
            expect(response).toEqual('fullsite');
            expect(service.showGotoCsr).not.toHaveBeenCalled();
        });

        it('should return csr and call showGoToCsr 1 times', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('talkToCsr');
            spyOn(service, 'showGotoCsr').and.resolveTo(true);

            //Act
            const response = await service.iDontSeeWhatINeedMessage();

            //Assert
            expect(response).toEqual('csr');
            expect(service.showGotoCsr).toHaveBeenCalledTimes(1);
        });
    });

    describe('genericPostSignup', () => {
        beforeEach(() => {
            spyOn<any>(service, 'get').and.resolveTo({ buttons: { NOTFINISHED: '' } });
        });

        it('should call storefrontService.goToSurvey', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('finish');
            storefrontService.goToSurvey.and.resolveTo({ startStateName: 'survey' } as WorkItem);

            //Act
            await service.genericPostSignup('');

            //Assert
            expect(storefrontService.goToSurvey).toHaveBeenCalled();
            expect(stateService.go).toHaveBeenCalledWith('survey');

        });

        it('should call doMoreMessage and storefrontService.goToSurvey', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('notFinished');
            storefrontService.goToSurvey.and.resolveTo({ startStateName: 'survey' } as WorkItem);
            spyOn(service, 'doMoreMessage').and.resolveTo('finish');

            //Act
            await service.genericPostSignup('');

            //Assert
            expect(service.doMoreMessage).toHaveBeenCalledTimes(1);
            expect(storefrontService.goToSurvey).toHaveBeenCalled();
            expect(stateService.go).toHaveBeenCalledWith('survey');

        });

        it('should call doMoreMessage 2 times and storefrontService.goToSurvey', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('notFinished');
            storefrontService.goToSurvey.and.resolveTo({ startStateName: 'survey' } as WorkItem);
            spyOn(service, 'doMoreMessage').and.returnValues('notFinished' as any, 'finish' as any);

            //Act
            await service.genericPostSignup('');

            //Assert
            expect(service.doMoreMessage).toHaveBeenCalledTimes(2);
            expect(storefrontService.goToSurvey).toHaveBeenCalled();
            expect(stateService.go).toHaveBeenCalledWith('survey');

        });
    });

    describe('showVehicalViolationSuspendedAccountMessage', () => {
        beforeEach(() => {
            spyOn<any>(service, 'get').and.resolveTo({ buttons: { NOTFINISHED: '', FINISHED: '' } });
        });

        it('should call storefrontService.goToSurvey', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('finish');
            storefrontService.goToSurvey.and.resolveTo({ startStateName: 'survey' } as WorkItem);

            //Act
            await service.showVehicalViolationSuspendedAccountMessage();

            //Assert
            expect(storefrontService.goToSurvey).toHaveBeenCalled();
            expect(stateService.go).toHaveBeenCalledWith('survey');

        });

        it('should call doMoreMessage and storefrontService.goToSurvey', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('notFinished');
            storefrontService.goToSurvey.and.resolveTo({ startStateName: 'survey' } as WorkItem);
            spyOn(service, 'doMoreMessage').and.resolveTo('finish');

            //Act
            await service.showVehicalViolationSuspendedAccountMessage();

            //Assert
            expect(service.doMoreMessage).toHaveBeenCalledTimes(1);
            expect(storefrontService.goToSurvey).toHaveBeenCalled();
            expect(stateService.go).toHaveBeenCalledWith('survey');

        });

        it('should call doMoreMessage 2 times and storefrontService.goToSurvey', async () => {
            //Arrange
            spyOn(service, 'open').and.resolveTo('notFinished');
            storefrontService.goToSurvey.and.resolveTo({ startStateName: 'survey' } as WorkItem);
            spyOn(service, 'doMoreMessage').and.returnValues('notFinished' as any, 'finish' as any);

            //Act
            await service.showVehicalViolationSuspendedAccountMessage();

            //Assert
            expect(service.doMoreMessage).toHaveBeenCalledTimes(2);
            expect(storefrontService.goToSurvey).toHaveBeenCalled();
            expect(stateService.go).toHaveBeenCalledWith('survey');

        });
    });
});
