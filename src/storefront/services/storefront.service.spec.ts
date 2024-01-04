import { } from 'jasmine';
import { IWorkflowStateConfig, StorefrontService, WorkflowStateId, WorkItem } from './storefront.service';
import { AuthenticationService } from '../../authentication/authenticationService/authentication.service';
import { StateConfig } from '../../common/interfaces';
import { StateRegistry, StateService, UIRouterGlobals } from '@uirouter/core';
import { TestBed } from '@angular/core/testing';
import { StorefrontUtilityService } from './storefrontUtility.service';
import { GenericRepoService } from '../../common/services';
import { stateNames as storefrontStateNames } from 'storefront/constants';
import { KioskStates as createAccountStateNames } from 'account/create/states';
import { stateNames as loginStateNames } from 'login/constants';

describe('StorefrontService', () => {

    let service: StorefrontService;
    let storefrontUtilityService: jasmine.SpyObj<StorefrontUtilityService>;
    let authenticationService: jasmine.SpyObj<AuthenticationService>;
    let currentState: StateConfig;
    let uiRouterGlobals: UIRouterGlobals;
    let windowMock: any;
    let stateRegistry: jasmine.SpyObj<StateRegistry>;
    let stateService: jasmine.SpyObj<StateService>;
    let genericRepoMock: any;
    let workItems: WorkItem[];

    beforeEach(() => {
        storefrontUtilityService = jasmine.createSpyObj('storefrontUtilityService ', ['isRunningAsKiosk']);
        authenticationService = jasmine.createSpyObj('authenticationService', ['profile', 'logout', 'isAuthenticated']);
        currentState = {} as StateConfig;
        uiRouterGlobals = { current: currentState } as UIRouterGlobals;
        let store = {};
        windowMock = {
            sessionStorage: {
                getItem: (key: string): string => key in store ? store[key] : null,
                setItem: (key: string, value: string) => {
                    store[key] = `${value}`;
                },
                removeItem: (key: string) => {
                    delete store[key];
                },
                clear: () => {
                    store = {};
                }
            }
        };
        stateRegistry = jasmine.createSpyObj('stateRegistry', ['get']);
        stateService = jasmine.createSpyObj('stateService', ['get', 'lazyLoad']);
        genericRepoMock = {
            dataFactory: {
                getCmsPageById: jasmine.createSpy('getCmsPageById'),
                getCmsPagesByIds: jasmine.createSpy('getCmsPagesByIds')
            }
        };

        TestBed.configureTestingModule({
            providers: [
                StorefrontService,
                {
                    provide: StorefrontUtilityService,
                    useFactory: () => storefrontUtilityService
                },
                {
                    provide: AuthenticationService,
                    useFactory: () => authenticationService
                },
                {
                    provide: UIRouterGlobals,
                    useValue: uiRouterGlobals
                },
                {
                    provide: Window,
                    useValue: windowMock
                },
                {
                    provide: UIRouterGlobals,
                    useValue: uiRouterGlobals
                },
                {
                    provide: StateRegistry,
                    useFactory: () => stateRegistry
                },
                {
                    provide: StateService,
                    useFactory: () => stateService
                },
                {
                    provide: GenericRepoService,
                    useValue: genericRepoMock
                }
            ]
        });

        service = TestBed.inject(StorefrontService);

        spyOn(service, 'save').and.resolveTo();

        workItems = [
            {
                id: WorkflowStateId.START,
                isHidden: true,
                ordinal: 0x000,
                startStateName: storefrontStateNames.Home,
                stateNames: new Set<string>([storefrontStateNames.Home]),
                isCompleted: false,
                hasStarted: false,
                wasSkipped: false
            } as WorkItem,
            {
                id: WorkflowStateId.SELECT,
                isHidden: true,
                ordinal: 0x010,
                startStateName: storefrontStateNames.Selection,
                stateNames: new Set<string>([storefrontStateNames.Selection]),
                isCompleted: false,
                hasStarted: false,
                wasSkipped: false
            } as WorkItem,
            {
                id: WorkflowStateId.SURVEY,
                isHidden: true,
                ordinal: 0xFFF,
                startStateName: storefrontStateNames.Survey,
                stateNames: new Set<string>([storefrontStateNames.Survey]),
                isCompleted: false,
                hasStarted: false,
                wasSkipped: false
            } as WorkItem,
            {
                id: WorkflowStateId.LOGIN,
                isHidden: true,
                ordinal: 0x100,
                startStateName: loginStateNames.Login,
                stateNames: new Set<string>([loginStateNames.Login]),
                isFrameVisible: true,
                isSkippable: false,
                isCompleted: false,
                hasStarted: false,
                wasSkipped: false
            } as WorkItem
        ];
    });

    describe('canary', () => {

        it('can create service', () => {
            expect(service).toBeDefined();
        });
    });

    describe('getWorkItemDef', () => {

        it('START returns valid config', () => {

            const workflowDef = {
                id: WorkflowStateId.START,
                isHidden: true,
                ordinal: 0x000,
                startStateName: storefrontStateNames.Home,
                stateNames: new Set<string>([storefrontStateNames.Home])
            } as IWorkflowStateConfig;

            expect(service.getWorkItemDef(WorkflowStateId.START)).toEqual(workflowDef);
        });

        it('OACC returns valid config', () => {

            const workflowDef = {
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
            } as IWorkflowStateConfig;

            expect(service.getWorkItemDef(WorkflowStateId.OACC)).toEqual(workflowDef);
        });
    });

    describe('completeWorkItem', () => {
        it('should do nothing if workItem is null', async () => {
            await service.completeWorkItem(null);
            expect(service.save).not.toHaveBeenCalled();
        });

        it('should do nothing if workItem is undefined', async () => {
            await service.completeWorkItem(undefined);
            expect(service.save).not.toHaveBeenCalled();
        });

        it('should do nothing if isCompleted is true', async () => {
            const workItem = workItems[0];
            workItem.isCompleted = true;

            await service.completeWorkItem(workItem);

            expect(service.save).not.toHaveBeenCalled();
        });

        it('should do set isCompleted to true', async () => {
            await service.completeWorkItem(workItems[0]);

            expect(workItems[0].isCompleted).toEqual(true);
            expect(service.save).toHaveBeenCalled();
        });
    });

    describe('add', () => {
        it('should add work item to the workflow and not save', async () => {
            const item = await service.add(WorkflowStateId.START);

            expect(item).toEqual(workItems[0]);
            expect(service.workflow[0]).toEqual(workItems[0]);
            expect(service.workflow.length).toEqual(1);
            expect(service.save).toHaveBeenCalled();
        });

        it('should add two work items to the workflow if they are not the same ids', async () => {
            const itemOne = await service.add(WorkflowStateId.START);
            const itemTwo = await service.add(WorkflowStateId.SELECT);

            expect(itemOne).toEqual(workItems[0]);
            expect(itemTwo).toEqual(workItems[1]);
            expect(service.workflow.find(x => x.id === WorkflowStateId.START)).toEqual(workItems[0]);
            expect(service.workflow.find(x => x.id === WorkflowStateId.SELECT)).toEqual(workItems[1]);
            expect(service.workflow.length).toEqual(2);
            expect(service.save).toHaveBeenCalledTimes(2);
        });

        it('should not add work item to the workflow if it already exists and should not call save', async () => {
            const itemOne = await service.add(WorkflowStateId.START);
            const itemTwo = await service.add(WorkflowStateId.START);

            expect(itemOne).toEqual(workItems[0]);
            expect(itemTwo).toEqual(workItems[0]);
            expect(service.workflow[0]).toEqual(workItems[0]);
            expect(service.workflow.length).toEqual(1);
            expect(service.save).toHaveBeenCalledTimes(1);
        });

        it('should not add work item to the workflow if it does not exist in the worflow config and should not call save', async () => {
            const item = await service.add({} as WorkflowStateId);

            expect(item).toEqual(null);
            expect(service.save).not.toHaveBeenCalledTimes(1);
            expect(service.workflow.length).toEqual(0);
        });
    });

    describe('remove', () => {
        it('should remove work item from workflow', async () => {
            await service.add(WorkflowStateId.START);

            expect(service.workflow.length).toEqual(1);

            const result = await service.remove(WorkflowStateId.START);

            expect(result).toEqual(true);
            expect(service.workflow.length).toEqual(0);
            expect(service.save).toHaveBeenCalledTimes(2);

        });

        it('should not remove work item from workflow', async () => {
            await service.add(WorkflowStateId.START);

            expect(service.workflow.length).toEqual(1);

            const result = await service.remove(WorkflowStateId.SELECT);

            expect(result).toEqual(false);
            expect(service.workflow.length).toEqual(1);
            expect(service.save).toHaveBeenCalledTimes(1);
        });
    });

    describe('next', () => {
        it('should go to the next work item in the workflow', async () => {
            await service.restart();
            expect(service.workflow.length).toEqual(3);

            expect(service.currentWorkItem).toEqual(workItems[0]);

            const nextWorkItem = await service.next();
            const workItem = workItems[1];
            workItem.hasStarted = true;
            expect(nextWorkItem).toEqual(workItem);
            expect(service.save).toHaveBeenCalledTimes(1);
        });

        it('should call restart if there are not more items in the workflow', async () => {
            await service.restart();
            expect(service.workflow.length).toEqual(3);

            spyOn(service, 'restart').and.callThrough();

            await service.remove(WorkflowStateId.SELECT);
            await service.remove(WorkflowStateId.SURVEY);
            await service.next();

            expect(service.restart).toHaveBeenCalledTimes(1);
        });

        it('should skip to task', async () => {
            await service.restart();
            expect(service.workflow.length).toEqual(3);

            const nextWorkItem = await service.next(WorkflowStateId.SURVEY);

            const workItem = workItems[2];
            workItem.hasStarted = true;
            expect(nextWorkItem).toEqual(workItem);
        });

        it('should add login task to the workflow', async () => {
            await service.restart();
            expect(service.workflow.length).toEqual(3);

            await service.remove(WorkflowStateId.SELECT);
            await service.remove(WorkflowStateId.SURVEY);
            expect(service.workflow.length).toEqual(1);

            await service.add(WorkflowStateId.UBI);
            expect(service.workflow.length).toEqual(2);

            await service.next();

            expect(service.workflow.length).toEqual(3);
            const workItem = workItems[3];
            workItem.hasStarted = true;
            expect(service.workflow.find(x => x.id === WorkflowStateId.LOGIN)).toEqual(workItem);
        });
    });
});

