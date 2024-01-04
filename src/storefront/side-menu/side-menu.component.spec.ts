import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateService } from '@uirouter/core';
import { } from 'jasmine';
import { StorefrontModalService } from '../services/modal.service';
import { StorefrontService, WorkflowStateId, WorkItem } from '../services/storefront.service';
import { SideMenuComponent } from './side-menu.component';

describe('component: SideMenuComponent - storefront', () => {

    let fixture: ComponentFixture<SideMenuComponent>;
    let component: SideMenuComponent;
    let mockStorefrontService: any;
    let storefrontModalService: jasmine.SpyObj<StorefrontModalService>;
    let stateService: jasmine.SpyObj<StateService>;

    beforeEach(async () => {

        mockStorefrontService = {
            currentWorkItem: {} as WorkItem,
            workflow: [],
            startIndex: 0,
            next: jasmine.createSpy('next')
        };
        storefrontModalService = jasmine.createSpyObj('StorefrontModalService', ['skipTaskMessage']);
        stateService = jasmine.createSpyObj('StateService', ['go']);;

        await TestBed
            .configureTestingModule({
                declarations: [
                    SideMenuComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    CommonModule
                ],
                providers: [
                    { provide: StorefrontService, useFactory: () => mockStorefrontService },
                    { provide: StorefrontModalService, useFactory: () => storefrontModalService },
                    { provide: StateService, useFactory: () => stateService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(SideMenuComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });

    describe('workItems', () => {
        it('should return a list of workItems in order based on ordinal and isHidden properties', () => {
            mockStorefrontService.workflow = [
                {
                    id: WorkflowStateId.UBI,
                    isHidden: false,
                    ordinal: 0x020
                },
                {
                    id: WorkflowStateId.ARTAG,
                    isHidden: false,
                    ordinal: 0x030
                },
                {
                    id: WorkflowStateId.UCI,
                    isHidden: false,
                    ordinal: 0x010
                },
                {
                    id: WorkflowStateId.START,
                    isHidden: true,
                    ordinal: 0x100
                }
            ];

            //Act
            const workItems = component.workItems;

            //Assert
            expect(workItems).toEqual([
                {
                    id: WorkflowStateId.UCI,
                    isHidden: false,
                    ordinal: 0x010
                },
                {
                    id: WorkflowStateId.UBI,
                    isHidden: false,
                    ordinal: 0x020
                },
                {
                    id: WorkflowStateId.ARTAG,
                    isHidden: false,
                    ordinal: 0x030
                } as any
            ]);
        });
    });

    describe('skip', () => {
        beforeEach(() => {
            storefrontModalService.skipTaskMessage.and.resolveTo(true);
        });

        it('should do nothing', async () => {

            //Act
            await component.skip({
                isCompleted: true,
                class: ''
            } as WorkItem);

            //Assert
            expect(storefrontModalService.skipTaskMessage).not.toHaveBeenCalled();
        });

        it('should do nothing', async () => {

            //Act
            await component.skip({
                isCompleted: true,
                class: 'active'
            } as WorkItem);

            //Assert
            expect(storefrontModalService.skipTaskMessage).not.toHaveBeenCalled();
        });

        it('should do nothing', async () => {
            mockStorefrontService.currentWorkItem = { isSkippable: false };

            //Act
            await component.skip({
                isCompleted: false,
                class: 'test'
            } as WorkItem);

            //Assert
            expect(storefrontModalService.skipTaskMessage).not.toHaveBeenCalled();
        });

        it('should skip task', async () => {
            mockStorefrontService.currentWorkItem = { isSkippable: true };
            mockStorefrontService.next.and.resolveTo({ startStateName: 'test' });

            //Act
            await component.skip({
                isCompleted: false,
                class: 'test'
            } as WorkItem);

            //Assert
            expect(storefrontModalService.skipTaskMessage).toHaveBeenCalled();
            expect(stateService.go).toHaveBeenCalled();
        });

        it('should do nothing', async () => {
            mockStorefrontService.currentWorkItem = { isSkippable: true };
            mockStorefrontService.next.and.resolveTo({ startStateName: 'test' });
            storefrontModalService.skipTaskMessage.and.resolveTo(false);

            //Act
            await component.skip({
                isCompleted: false,
                class: 'test'
            } as WorkItem);

            //Assert
            expect(stateService.go).not.toHaveBeenCalled();
        });
    });

    describe('setClass', () => {
        beforeEach(() => {
            mockStorefrontService.currentWorkItem = { id: WorkflowStateId.UBI };
        });

        it('should set class to undefined', () => {
            const workItem = {
                class: undefined,
                hasStarted: false,
                wasSkipped: false,
                isCompleted: false
            } as WorkItem;

            //Act
            component.setClass(workItem);

            //Assert
            expect(workItem.class).toEqual(undefined);
        });

        it('should set class to skipped', () => {
            const workItem = {
                class: undefined,
                hasStarted: true,
                wasSkipped: true,
                isCompleted: false
            } as WorkItem;

            //Act
            component.setClass(workItem);

            //Assert
            expect(workItem.class).toEqual('skipped');
        });

        it('should set class to complete', () => {
            const workItem = {
                class: undefined,
                hasStarted: true,
                wasSkipped: false,
                isCompleted: true
            } as WorkItem;

            //Act
            component.setClass(workItem);

            //Assert
            expect(workItem.class).toEqual('complete');
        });

        it('should set class to active', () => {
            const workItem = {
                class: undefined,
                hasStarted: true,
                wasSkipped: false,
                isCompleted: false
            } as WorkItem;

            //Act
            component.setClass(workItem);

            //Assert
            expect(workItem.class).toEqual('active');
        });

        it('should set startIndex', () => {
            mockStorefrontService.currentWorkItem = {
                id: WorkflowStateId.LOGIN
            };

            mockStorefrontService.workflow = [
                {
                    id: WorkflowStateId.UBI,
                    isHidden: false,
                    ordinal: 0x020,
                    isCompleted: false,
                    hasStarted: false,
                    index: 4
                }
            ];

            const workItem = {
                class: undefined,
            } as WorkItem;

            //Act
            component.setClass(workItem);

            //Assert
            expect(mockStorefrontService.startIndex).toEqual(4);
            expect(mockStorefrontService.workflow[0].hasStarted).toEqual(true);
            expect(workItem.class).toEqual(undefined);
        });
    });
});
