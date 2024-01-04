import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateService } from '@uirouter/core';
import { } from 'jasmine';
import { StorefrontModalService } from '../services/modal.service';
import { StorefrontService, WorkflowStateId, WorkItem } from '../services/storefront.service';
import { BannerComponent } from './banner.component';
import { cmsIds } from '../constants';
import { B } from '@angular/cdk/keycodes';

describe('component: BannerComponent - storefront', () => {

    let fixture: ComponentFixture<BannerComponent>;
    let component: BannerComponent;
    let mockStorefrontService: any;
    let storefrontModalService: jasmine.SpyObj<StorefrontModalService>;
    let stateService: jasmine.SpyObj<StateService>;
    let windowMock: any;

    beforeEach(async () => {

        mockStorefrontService = {
            isActiveSession: false,
            desktopMode: false,
            currentWorkItem: null,
            getCmsItem: jasmine.createSpy('getCmsItem'),
            startNewSession: jasmine.createSpy('startNewSession'),
            goToSurvey: jasmine.createSpy('goToSurvey'),
            restart: jasmine.createSpy('restart'),
            delay: jasmine.createSpy('delay')
        };
        storefrontModalService = jasmine.createSpyObj('StorefrontModalService', ['exit']);
        stateService = jasmine.createSpyObj('StateService', ['go']);
        windowMock = {
            location: {
                reload: jasmine.createSpy('reload')
            }
        };

        await TestBed
            .configureTestingModule({
                declarations: [
                    BannerComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    CommonModule
                ],
                providers: [
                    { provide: StateService, useFactory: () => stateService },
                    { provide: StorefrontModalService, useFactory: () => storefrontModalService },
                    { provide: StorefrontService, useValue: mockStorefrontService },
                    { provide: Window, useValue: windowMock }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(BannerComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {
        it('should call getCmsItem with the correct parameter', () => {
            mockStorefrontService.getCmsItem.and.resolveTo();

            //Act 
            component.ngOnInit();

            //Assert 
            expect(mockStorefrontService.getCmsItem).toHaveBeenCalledWith(cmsIds.HCTRALogoId);
        });
    });

    describe('exit', () => {
        beforeEach(() => {
            storefrontModalService.exit.and.resolveTo(true);
            mockStorefrontService.goToSurvey.and.resolveTo({ startStateName: 'survey' });
            mockStorefrontService.restart.and.resolveTo({ startStateName: 'restart' });
        });

        it('should not open another modal if one is already open', async () => {
            component.isModalActive = true;

            //Act 
            await component.exit();

            //Assert
            expect(storefrontModalService.exit).not.toHaveBeenCalled();
        });

        it('should call goToSurvey and not startNewSession', async () => {
            mockStorefrontService.isActiveSession = true;
            mockStorefrontService.desktopMode = true;

            //Act 
            await component.exit();

            //Assert
            expect(mockStorefrontService.goToSurvey).toHaveBeenCalled();
            expect(stateService.go).toHaveBeenCalledWith('survey');
        });

        it('should call goToSurvey', async () => {
            mockStorefrontService.isActiveSession = true;
            mockStorefrontService.desktopMode = false;
            mockStorefrontService.currentWorkItem = { id: WorkflowStateId.LOGIN } as WorkItem;


            //Act 
            await component.exit();

            //Assert
            expect(mockStorefrontService.goToSurvey).toHaveBeenCalled();
            expect(stateService.go).toHaveBeenCalledWith('survey');
        });

        it('should call restart', async () => {
            mockStorefrontService.isActiveSession = false;
            mockStorefrontService.desktopMode = false;
            mockStorefrontService.currentWorkItem = { id: WorkflowStateId.LOGIN } as WorkItem;

            //Act 
            await component.exit();

            //Assert
            expect(mockStorefrontService.goToSurvey).not.toHaveBeenCalled();
            expect(mockStorefrontService.restart).toHaveBeenCalled();
            expect(stateService.go).toHaveBeenCalledWith('restart');
        });

        it('should call restart and delay', async () => {
            mockStorefrontService.isActiveSession = false;
            mockStorefrontService.desktopMode = false;
            mockStorefrontService.currentWorkItem = { id: WorkflowStateId.SELECT } as WorkItem;

            //Act 
            await component.exit();

            //Assert
            expect(mockStorefrontService.goToSurvey).not.toHaveBeenCalled();
            expect(mockStorefrontService.restart).toHaveBeenCalled();
            expect(mockStorefrontService.delay).toHaveBeenCalledWith(500);
            expect(stateService.go).toHaveBeenCalledWith('restart');
        });

        it('should do nothing', async () => {
            storefrontModalService.exit.and.resolveTo(false);

            //Act 
            await component.exit();

            //Assert
            expect(mockStorefrontService.goToSurvey).not.toHaveBeenCalled();
            expect(mockStorefrontService.restart).not.toHaveBeenCalled();
            expect(mockStorefrontService.delay).not.toHaveBeenCalled();
            expect(stateService.go).not.toHaveBeenCalled();
        });
    });
});
