import { Injectable } from '@angular/core';

import { stateNames as makePaymentStateNames } from 'makePayment/constants';
import { stateNames as suspendedAccountStateNames } from 'suspendedAccountRefresh/constants';
import { stateNames as loginStateNames } from 'login/constants';
import { stateNames as frp3StateNames } from 'frp3/constants';
import { stateNames as cavveStateNames } from 'cavve/constants';
import { stateNames as profileStateNames } from 'profile/constants';
import { KioskStates as vehicleStateNames } from 'vehicles/shared/states';
import { KioskStates as createAccountStateNames } from 'account/create/states';
import { stateNames as homeStateNames } from 'home/constants';

import { stateNames as storefrontStateNames } from 'storefront/constants';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { StateRegistry, StateService, UIRouterGlobals } from '@uirouter/core';
import { StorefrontUtilityService } from './storefrontUtility.service';
import { GenericRepoService } from 'common/services';
import { EndStorefrontSessionRequest, StartStorefrontSessionRequest } from 'common/models';
import { MaintenanceFeature } from '../../constants/module';
import { ActivateStateNames } from '../../vehicles/eztag/activate/activate.constants';

//keep order to stay compatible to old storefront
export enum WorkflowStateId {
    Unknown,

    MTOLL,
    GINV,
    OACC,
    UBI,
    UCI,
    UAC,
    URAMT,
    ARTAG,
    MKPAY,
    EO,
    WEBST,
    CSR,

    //shadow ids
    SUSACCT,
    SUSVIOL,
    MISSINFO,
    LOGIN,
    FINISHSETUP,

    START,
    SELECT,
    SURVEY
}

export enum LogOffType {
    Manual,
    Forced,
    Auto
}

export interface IWorkflowStateCmsContent {
    unselectedIcon: any;
    selectedIcon: any;
    class: string;
    checkbox: any;
    displayName: string;
}

export interface IStorefrontSession {
    sessionId: number;
    selectedItemIds: WorkflowStateId[];
    currentItemId: WorkflowStateId;
    completedItemIds: WorkflowStateId[];
    shellUserInitialized: boolean;
    fullSiteMode: boolean;
    kioskToken: string;
}

export interface IWorkflowStateConfig {
    startStateName: string;
    stateNames: Set<string>;
    id: WorkflowStateId;
    cmsContent: IWorkflowStateCmsContent;
    requiresAuth?: boolean;
    beginAction: () => Promise<void>;
    completionAction?: () => Promise<void>;
    isSkippable?: boolean;
    isHidden?: boolean;
    isFrameVisible?: boolean;
    ordinal: number;
    disabledIfSelected: Set<WorkflowStateId>;
    class?: string;
    index?: number;
}

interface IWorkflowStateStatus {
    isCompleted: boolean;
    hasStarted: boolean;
    wasSkipped: boolean;
}

export type WorkItem = IWorkflowStateConfig & IWorkflowStateStatus;

@Injectable({ providedIn: 'root' })
export class StorefrontService {

    private currentOrdinal: number;
    private internalWorkflow: WorkItem[] = [];

    private workflowConfig: Map<WorkflowStateId, IWorkflowStateConfig>;
    private coreIds = new Set([WorkflowStateId.START, WorkflowStateId.SELECT, WorkflowStateId.SURVEY]);
    private reverseStateLookup: Map<string, string>;
    private shellUserInitialized: boolean;
    private token: string;
    private sessionId: number;

    public cancelWizard = false; 
    public hideSelectionWorkItem = false; 
    public startIndex = 0; 

    constructor(
        private storefrontUtilityService: StorefrontUtilityService,
        private authenicationService: AuthenticationService,
        private uiRouterGlobals: UIRouterGlobals,
        private window: Window,
        private stateRegistry: StateRegistry,
        private stateService: StateService,
        private genericRepo: GenericRepoService
    ) {
        this.workflowConfig = new Map<WorkflowStateId, IWorkflowStateConfig>();

        const configs =
            [
                {
                    id: WorkflowStateId.START,
                    isHidden: true,
                    ordinal: 0x000,
                    startStateName: storefrontStateNames.Home,
                    stateNames: new Set<string>([storefrontStateNames.Home])
                },
                {
                    id: WorkflowStateId.SELECT,
                    isHidden: true,
                    ordinal: 0x010,
                    startStateName: storefrontStateNames.Selection,
                    stateNames: new Set<string>([storefrontStateNames.Selection])
                },
                {
                    id: WorkflowStateId.MTOLL,
                    ordinal: 0x020,
                    startStateName: frp3StateNames.Landing,
                    stateNames: new Set<string>(Object.values(frp3StateNames)),
                    requiresAuth: false,
                    isFrameVisible: true,
                    isSkippable: false,
                    index: 1
                },
                {
                    id: WorkflowStateId.GINV,
                    ordinal: 0x030,
                    startStateName: frp3StateNames.Landing,
                    stateNames: new Set<string>([
                        ...Object.values(frp3StateNames),
                        ...Object.values(cavveStateNames)
                    ]),
                    requiresAuth: false,
                    isFrameVisible: true,
                    isSkippable: false,
                    index: 2
                },
                {
                    id: WorkflowStateId.OACC,
                    ordinal: 0x040,
                    startStateName: createAccountStateNames.Login,
                    stateNames: new Set<string>(Object.values(createAccountStateNames)),
                    requiresAuth: false,
                    isFrameVisible: true,
                    disabledIfSelected: new Set<WorkflowStateId>([
                        WorkflowStateId.UBI,
                        WorkflowStateId.UCI,
                        WorkflowStateId.UAC,
                        WorkflowStateId.URAMT,
                        WorkflowStateId.ARTAG,
                        WorkflowStateId.MKPAY
                    ]),
                    isSkippable: false,
                    index: 3
                },
                {
                    id: WorkflowStateId.LOGIN,
                    isHidden: true,
                    ordinal: 0x100,
                    startStateName: loginStateNames.Login,
                    stateNames: new Set<string>([loginStateNames.Login]),
                    isFrameVisible: true,
                    isSkippable: false
                },

                {
                    id: WorkflowStateId.SUSACCT,
                    isHidden: true,
                    ordinal: 0x110,
                    startStateName: suspendedAccountStateNames.Landing,//w/o violaitons
                    stateNames: new Set<string>(Object.values(suspendedAccountStateNames)),
                    isFrameVisible: true
                },
                {
                    id: WorkflowStateId.SUSVIOL,
                    isHidden: true,
                    ordinal: 0x120,
                    startStateName: suspendedAccountStateNames.ViolationsLanding,
                    stateNames: new Set<string>(Object.values(suspendedAccountStateNames)),
                    isFrameVisible: true
                },
                {
                    id: WorkflowStateId.MISSINFO,
                    isHidden: true,
                    ordinal: 0x130,
                    startStateName: loginStateNames.AddMissingInformation,
                    stateNames: new Set<string>([loginStateNames.AddMissingInformation]),
                    isFrameVisible: true
                },
                {
                    id: WorkflowStateId.UBI,
                    ordinal: 0x150,
                    startStateName: profileStateNames.UpdateBillingInformation,
                    stateNames: new Set<string>([profileStateNames.UpdateBillingInformation, profileStateNames.UpdateFlexpayBillingInformation]),
                    requiresAuth: true,
                    isFrameVisible: true,
                    disabledIfSelected: new Set<WorkflowStateId>([
                        WorkflowStateId.OACC
                    ]),
                    isSkippable: true,
                    index: 4
                },

                {
                    id: WorkflowStateId.UCI,
                    ordinal: 0x160,
                    startStateName: profileStateNames.UpdateContactInformation,
                    stateNames: new Set<string>([profileStateNames.UpdateContactInformation]),
                    requiresAuth: true,
                    isFrameVisible: true,
                    disabledIfSelected: new Set<WorkflowStateId>([
                        WorkflowStateId.OACC
                    ]),
                    isSkippable: true,
                    index: 5
                },

                {
                    id: WorkflowStateId.UAC,
                    ordinal: 0x170,
                    startStateName: profileStateNames.UpdateAuthorizedContacts,
                    stateNames: new Set<string>([profileStateNames.UpdateAuthorizedContacts]),
                    requiresAuth: true,
                    isFrameVisible: true,
                    disabledIfSelected: new Set<WorkflowStateId>([
                        WorkflowStateId.OACC
                    ]),
                    isSkippable: true,
                    index: 6
                },

                {
                    id: WorkflowStateId.URAMT,
                    ordinal: 0x180,
                    startStateName: profileStateNames.UpdateReplenishmentAmount,
                    stateNames: new Set<string>([profileStateNames.UpdateReplenishmentAmount]),
                    requiresAuth: true,
                    isFrameVisible: true,
                    disabledIfSelected: new Set<WorkflowStateId>([
                        WorkflowStateId.OACC
                    ]),
                    isSkippable: true,
                    index: 7
                },

                {
                    id: WorkflowStateId.ARTAG,
                    ordinal: 0x190,
                    startStateName: vehicleStateNames.Root,
                    stateNames: new Set<string>([
                        ...Object.values(vehicleStateNames),
                        ActivateStateNames.Activate.toString(),
                        ActivateStateNames.Completion.toString(),
                        ActivateStateNames.Confirm.toString()
                    ]),
                    requiresAuth: true,
                    isFrameVisible: true,
                    disabledIfSelected: new Set<WorkflowStateId>([
                        WorkflowStateId.OACC
                    ]),
                    isSkippable: true,
                    index: 8
                },

                {
                    id: WorkflowStateId.MKPAY,
                    ordinal: 0x200,
                    startStateName: makePaymentStateNames.Landing,
                    stateNames: new Set<string>(Object.values(makePaymentStateNames)),
                    requiresAuth: true,
                    isFrameVisible: true,
                    disabledIfSelected: new Set<WorkflowStateId>([
                        WorkflowStateId.OACC
                    ]),
                    isSkippable: true,
                    index: 9
                },
                {
                    id: WorkflowStateId.EO,
                    ordinal: 0x210,
                    startStateName: frp3StateNames.Landing,
                    stateNames: new Set<string>([
                        ...Object.values(frp3StateNames),
                        ...Object.values(cavveStateNames)
                    ]),
                    requiresAuth: true,
                    isFrameVisible: true,
                    isHidden: true,
                    disabledIfSelected: new Set<WorkflowStateId>()
                },
                {
                    id: WorkflowStateId.WEBST,
                    ordinal: 0x220,
                    startStateName: homeStateNames.Frame,
                    stateNames: new Set<string>([homeStateNames.Frame]),
                    requiresAuth: false,
                    isHidden: true,
                    isFrameVisible: false
                },

                {
                    id: WorkflowStateId.SURVEY,
                    isHidden: true,
                    ordinal: 0xFFF,
                    startStateName: storefrontStateNames.Survey,
                    stateNames: new Set<string>([storefrontStateNames.Survey])
                },
            ];

        configs.forEach(x => this.workflowConfig.set(x.id, x as IWorkflowStateConfig));
    }

    public async isMaintenanceMode(): Promise<boolean> {
        const response = await this.genericRepo.dataFactory.getMaintenanceDetails();
        const match = response.featureStates.find(x => [MaintenanceFeature.Account, MaintenanceFeature.Violations].includes(x.feature) && x.inMaintenance);
        return match === undefined ? false : true;
    }

    public getStateNameFromUrl(url: string): string {
        return this.reverseStateLookup.get(url.toLowerCase());
    }

    private async isAuthenticated(): Promise<boolean> {
        return this.authenicationService.isAuthenticated();
    }

    private createWorkItem(id: WorkflowStateId): WorkItem {
        if (!this.workflowConfig.has(id)) {
            return null;
        }

        const config = this.workflowConfig.get(id);
        return {
            ...config,
            isCompleted: false,
            hasStarted: false,
            wasSkipped: false
        };
    }

    public clearTasks(keepOpenAccount: boolean = false) {
        this.internalWorkflow.filter(x => !this.coreIds.has(x.id)).forEach(async x => {
            if (x.id !== WorkflowStateId.OACC || (x.id === WorkflowStateId.OACC && !keepOpenAccount)) {
                await this.remove(x.id);
            }
        });
    }

    public get workItemDefinitions(): IWorkflowStateConfig[] {
        if (this.workflowConfig) {
            return [...this.workflowConfig.values()];
        } else {
            return [];
        }
    }

    public getWorkItemDef(id: WorkflowStateId): IWorkflowStateConfig {
        return this.workflowConfig.get(id);
    }

    public async completeWorkItem(workItem: WorkItem): Promise<void> {
        if (!workItem || workItem.isCompleted) {
            return;
        }

        workItem.isCompleted = true;
        await this.save();
    }

    public get currentWorkItem(): WorkItem {
        return this.internalWorkflow.find(x => x.ordinal === this.currentOrdinal);
    }

    public get currentWorkItemIsLoaded(): boolean {
        const currentWorkItem = this.currentWorkItem;

        return currentWorkItem.stateNames.has(this.uiRouterGlobals.current.name);
    }

    public get workflow(): ReadonlyArray<WorkItem> {
        return this.internalWorkflow;
    }

    public get isEnabled(): boolean {
        return this.storefrontUtilityService.isRunningAsKiosk;
    }

    public get desktopMode(): boolean {
        return this.currentOrdinal === this.getWorkItemDef(WorkflowStateId.WEBST).ordinal;
    }

    public isCurrentCoreWorkItem(): boolean {
        return this.coreIds.has(this.currentWorkItem?.id);
    }

    public tasks(): Readonly<WorkItem>[] {
        return this.internalWorkflow.filter(x => !x.isHidden && !this.coreIds.has(x.id));
    }

    public isWorkflowComplete(): boolean {
        return !this.internalWorkflow
            .filter(x => !this.coreIds.has(x.id) && !x.wasSkipped)
            .some(x => !x.isCompleted);
    }

    public containsSkippedWorkItem(): WorkItem {
        return this.internalWorkflow.filter(x => x.wasSkipped).sort((a, b) => a.ordinal - b.ordinal)[0];
    }

    public async startDesktopMode(endCurrentSession: boolean = false): Promise<WorkItem> {
        await this.startNewSession(endCurrentSession);

        this.internalWorkflow
            .filter(x => !this.coreIds.has(x.id))
            .forEach(x => x.isCompleted = true);

        await this.add(WorkflowStateId.WEBST);
        const item = await this.next(WorkflowStateId.WEBST);
        await this.save();
        return item;
    }

    public async goToSurvey(): Promise<WorkItem> {
        this.internalWorkflow
            .filter(x => !this.coreIds.has(x.id))
            .forEach(x => x.isCompleted = true);

        const item = await this.next(WorkflowStateId.SURVEY);
        await this.save();
        return item;
    }

    public async init(): Promise<void> {
        await this.authenicationService.profile({});
        await this.loadWorkflowModules();
        await this.restart(false);
        await this.restore();
        await this.initShellUser();
    }

    public delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    private async loadWorkflowModules(): Promise<void> {

        const lazyModules = this.stateService.get()
            .filter(x => x.lazyLoad);

        for (const module of lazyModules) {
            //some routes use the same loaded module,
            //so we need to add a try/catch when a route is loaded
            //and the next one is already loaded
            try {
                await this.stateService.lazyLoad(module.name);
            } catch (e) { }

        }

        this.reverseStateLookup = new Map<string, string>(
            [...this.workflowConfig.values()]
                .map(x => [...x.stateNames.keys()])
                .flat()
                .filter(x => this.stateRegistry.get(x)?.url)
                .map(x => [this.stateRegistry.get(x).url.toLowerCase(), x]));

        return;
    }

    private async initShellUser(): Promise<void> {
        if (this.shellUserInitialized) {
            return;
        }

        await this.authenticateShellAccount();
    }

    private async authenticateShellAccount(): Promise<void> {
        if (this.storefrontUtilityService.machineName === this.storefrontUtilityService.defaultMachineName) {
            this.shellUserInitialized = true;
            await this.save();
        } else {
            const response = await this.genericRepo.dataFactory.StorefrontInitialize();
            this.token = response.token;
            this.shellUserInitialized = true;
            await this.save();
        }
    }

    public async startNewSession(endCurrentSession: boolean = false): Promise<void> {
        let tasks = this.tasks();

        if (this.desktopMode) {
            tasks = this.internalWorkflow.filter(x => x.id === WorkflowStateId.WEBST);
        }

        let selectedOptions = tasks.map(x => WorkflowStateId[x.id]);
        if (selectedOptions.length < 1) {
            selectedOptions = [WorkflowStateId[WorkflowStateId.Unknown]];
        }

        if (endCurrentSession) {
            const endSessionRequest: EndStorefrontSessionRequest = {
                logOffType: LogOffType.Forced.toString(),
                storefrontSessionID: this.sessionId
            };

            await this.genericRepo.dataFactory.EndStorefrontDBSession(endSessionRequest);
        }

        const startSessionRequest: StartStorefrontSessionRequest = {
            location: this.storefrontUtilityService.storefrontLocation,
            selectedOptions: selectedOptions.join(',')
        };

        const response = await this.genericRepo.dataFactory.StartStorefrontDBSession(startSessionRequest);
        this.sessionId = response.dbResponse;
        await this.save();
    }

    public async save(): Promise<void> {
        const workItem = this.currentWorkItem;
        const data = {
            sessionId: this.sessionId,
            currentItemId: workItem.id,
            selectedItemIds: this.internalWorkflow.map(x => x.id),
            completedItemIds: this.internalWorkflow.filter(x => x.isCompleted).map(x => x.id),
            shellUserInitialized: this.shellUserInitialized,
            fullSiteMode: this.desktopMode,
            kioskToken: this.token
        } as IStorefrontSession;

        this.window.sessionStorage.setItem('StorefrontService', JSON.stringify(data));
    }

    public async restore(): Promise<void> {
        const rawData = this.window.sessionStorage.getItem('StorefrontService');
        if (!rawData) {
            return;
        }

        const data = JSON.parse(rawData) as IStorefrontSession;

        if (data) {
            this.sessionId = data.sessionId;
            this.internalWorkflow = [];
            const completed = new Set(data.completedItemIds);

            for (const id of data.selectedItemIds) {
                const item = await this.add(id);
                if (completed.has(id)) {
                    await this.completeWorkItem(item);
                }
                if (id === data.currentItemId) {
                    this.currentOrdinal = item.ordinal;
                }
            }
        }
    }

    public async getCmsItem(itemId: string): Promise<any> {
        const response = await this.genericRepo.dataFactory.getCmsPageById({ itemId });
        return JSON.parse(response.cmsResponse);
    }

    public async getCmsItems(itemIds: any[]): Promise<any[]> {
        const requests = [];
        for (const itemId of itemIds) {
            requests.push({ itemId });
        }
        const response = await this.genericRepo.dataFactory.getCmsPagesByIds({ requests });
        const parsedResponse = [];
        for (const res of response.responses) {
            parsedResponse.push(JSON.parse(res.cmsResponse));
        }
        return parsedResponse;
    }

    private getStartingOrdinal(): number {
        return this.workflowConfig.get(WorkflowStateId.START).ordinal;
    }

    public get isActiveSession(): boolean {
        return !!this.sessionId;
    }

    public async restart(persist: boolean = false, logOffType: LogOffType = LogOffType.Manual): Promise<WorkItem> {
        const isAuthenticated = await this.isAuthenticated();
        if (isAuthenticated) {
            await this.authenicationService.logout();
        }

        if (this.isActiveSession) {
            const endSessionRequest: EndStorefrontSessionRequest = {
                logOffType: logOffType.toString(),
                storefrontSessionID: this.sessionId
            };

            await this.genericRepo.dataFactory.EndStorefrontDBSession(endSessionRequest);
            this.sessionId = null;
        }

        this.internalWorkflow = [
            WorkflowStateId.START,
            WorkflowStateId.SELECT,
            WorkflowStateId.SURVEY
        ].map(id => this.createWorkItem(id));
        this.currentOrdinal = this.getStartingOrdinal();

        if (persist) {
            await this.save();
        }

        return this.currentWorkItem;
    }

    public async next(skipTo: WorkflowStateId = null): Promise<WorkItem> {
        const current = this.currentWorkItem;

        const remaining = this.internalWorkflow
            .filter(x => !x.isCompleted && !x.wasSkipped && x.id !== current.id);

        if (remaining.length === 0) {
            await this.restart();
            return this.currentWorkItem;
        }

        let nextWorkItem: WorkItem;

        if (skipTo === null) {
            nextWorkItem = remaining.reduce((a, b) => a.ordinal < b.ordinal ? a : b);
        } else {
            nextWorkItem = this.internalWorkflow.find(x => x.id === skipTo);
            current.wasSkipped = true;
        }

        const isAuthenticated = await this.isAuthenticated();

        if (nextWorkItem?.requiresAuth && !isAuthenticated) {
            nextWorkItem = this.createWorkItem(WorkflowStateId.LOGIN);
            this.internalWorkflow.push(nextWorkItem);
        }

        nextWorkItem.hasStarted = true;
        nextWorkItem.wasSkipped = false;
        this.currentOrdinal = nextWorkItem?.ordinal;
        await this.save();
        return nextWorkItem;
    }

    public async add(workflowStateId: WorkflowStateId): Promise<WorkItem> {
        if (this.inWorkflow(workflowStateId)) {
            return this.internalWorkflow.find(x => x.id === workflowStateId);
        }

        const newWorkItem = this.createWorkItem(workflowStateId);
        if (newWorkItem) {
            this.internalWorkflow.push(newWorkItem);
            await this.save();
        }
        return newWorkItem;
    }

    public async remove(workflowStateId: WorkflowStateId): Promise<boolean> {
        if (!this.internalWorkflow.some(x => x.id === workflowStateId)) {
            return false;
        }

        const index = this.internalWorkflow.findIndex(x => x.id === workflowStateId);
        this.internalWorkflow.splice(index, 1);
        await this.save();
        return true;
    }

    public inWorkflow(workflowStateId: WorkflowStateId): boolean {
        return this.internalWorkflow.findIndex(x => x.id === workflowStateId) >= 0;
    }

    public async postSurvey(comments: string, experienceValue: number): Promise<void> {
        await this.genericRepo.dataFactory.SaveSurveyToStorefrontDB({
            comments,
            experienceValue,
            storefrontSessionID: this.sessionId
        });
    }
}
