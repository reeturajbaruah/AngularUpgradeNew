import { } from 'jasmine';

import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateService, UIRouterGlobals, StateRegistry } from '@uirouter/angular';

import { WizardComponent } from 'common/ui';
import { WizardTestingProvider } from 'common/ui/wizard/wizard.testUtility';
import { StateConfig } from 'common/interfaces';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconTestingModule } from '@angular/material/icon/testing';

import { CommonModule as HctraCommonModule, ENVIRON_CONFIG } from 'common/module';
import { PipesModule } from 'pipes/module';

import { GridComponent } from './grid.component';
import { FrameComponent } from '../frame/frame.component';
import { MissedATollService, WebApiService } from '../services';
import { ViolationInformationDTO } from '../interfaces';

import { changesStable } from 'testing';
import { PageEvent } from '@angular/material/paginator';

import { WebStorageConst } from 'constants/module';

import { ResponseErrorService } from 'common/services';

import { CmsReplacementService } from 'cms/services';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';

describe('MissedATollGridComponent', () => {

    let fixture: ComponentFixture<GridComponent>;
    let component: GridComponent;

    // Injected into the component
    let parent: FrameComponent;
    let missedATollService: MissedATollService;
    let uiStateService: StateService;
    let uiRouterGlobals: UIRouterGlobals;
    let uiStateRegistry: StateRegistry;
    let environmentConfig;
    let webStorage;
    let webStorageConst: WebStorageConst;
    let missedATollApi;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let cmsReplacementService: CmsReplacementService;
    // Part of the template
    let wizard: WizardComponent;

    beforeEach(async () => {
        parent = {} as FrameComponent;
        parent.scrollToTop = jasmine.createSpy('scrollToTop', () => Promise.resolve());

        webStorage = jasmine.createSpyObj('webStorage', ['setKeyValue']);

        webStorageConst = new WebStorageConst();

        responseErrorService = jasmine.createSpyObj('responseErrorService', ['displayErrorsFromResponse', 'displayAlertsFromResponse', 'isErrorFree']);

        missedATollApi = jasmine.createSpyObj('missedATollApi', ['checkMatEligibility']);

        missedATollService = jasmine.createSpyObj('missedATollService', ['getViolationInformation',
            'saveViolationInformation', 'setViolationDataAndGenerateTotalAmountDue']);
        (missedATollService.getViolationInformation as jasmine.Spy).and.returnValue({
            formattedViolationData: {
                listOfViolations: {
                    invoices: [
                        { data: [] }
                    ]
                }
            }
        } as ViolationInformationDTO);

        uiStateService = jasmine.createSpyObj('uiStateService', ['go']);

        uiRouterGlobals = {
            current: {
                title: 'currentState',
                wizard: {
                    nextState: 'someState'
                }
            } as StateConfig,
            params: {
                billingInfo: 'fakeBillingInfo'
            }
        } as any;
        uiStateRegistry = jasmine.createSpyObj('uiStateRegistry', ['get']);

        environmentConfig = {
            paginationConfig: {
                missedAToll: {
                    PageSize: 25,
                    LimitToStart: 100
                }
            }
        };

        cmsReplacementService = jasmine.createSpyObj('cmsRepServ', ['getTemplateTransformer']);
        (cmsReplacementService.getTemplateTransformer as jasmine.Spy).and.returnValue(() => '');

        await TestBed
            .configureTestingModule({
                declarations: [GridComponent],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    CommonModule,
                    HctraCommonModule,
                    FormsModule,
                    PipesModule,
                    FlexLayoutModule,
                    MatDividerModule,
                    MatIconTestingModule],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: MissedATollService, useFactory: () => missedATollService },
                    { provide: StateService, useFactory: () => uiStateService },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: StateRegistry, useFactory: () => uiStateRegistry },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                    { provide: WebStorageService, useFactory: () => webStorage },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: WebStorageConst, useFactory: () => webStorageConst },
                    { provide: WebApiService, useFactory: () => missedATollApi },
                    { provide: CmsReplacementService, useFactory: () => cmsReplacementService},
                    WizardTestingProvider
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(GridComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsSection1 = { Title: '', ShortDescription: '' };
        component.cmsSection2 = { Title: '', ShortDescription: '' };

        wizard = fixture.debugElement
            .query(By.directive(WizardComponent))
            .componentInstance as WizardComponent;

        await changesStable(fixture);
    });


    describe('ngOnInit', () => {
        it('should set the step number', () => {
            //Assert
            expect(parent.stepNum).toBe(1);
        });

        it('should scroll to top', () => {
            //Assert
            expect(parent.scrollToTop).toHaveBeenCalledTimes(1);
        });

        it('should set some component variables from violation information', async () => {
            //Assemble
            (missedATollService.getViolationInformation as jasmine.Spy).and.returnValue({
                formattedViolationData: {
                    listOfViolations: {
                        invoices: [{ data: [1] as any }, { data: [2] as any }],
                        totalInvoices: 10
                    },
                    grandTotal: 1.23,
                    totalAmountDue: 4.56
                },
                state: 'TX',
                licensePlate: 'ABC123',
                serviceFee: 1.5
            } as ViolationInformationDTO);
            (missedATollService.getViolationInformation as jasmine.Spy).calls.reset();

            //Act
            await component.ngOnInit();

            //Assert
            expect(missedATollService.getViolationInformation).toHaveBeenCalledTimes(1);

            expect(component.totalRecordsFound).toEqual(10);
            expect(component.listOfAllViolations).toEqual([1, 2] as any);
            expect(component.paginatedViolations).toEqual([1, 2] as any);
            expect(component.mobileLoadedViolations).toEqual([1, 2] as any);
            expect(component.licenseState).toEqual('TX');
            expect(component.licensePlate).toEqual('ABC123');
            expect(component.serviceFee).toEqual(1.5);
            expect(component.totalViolationAmount).toEqual(4.56);
            expect(component.totalAmount).toEqual(1.23);
        });
    });

    describe('updateViolationsDetailsTable', () => {
        it('should change the paginated violations based on the pagination event: general', () => {
            //Assemble
            component.listOfAllViolations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as any;

            //Act
            component.updateViolationsDetailsTable({ pageIndex: 0, pageSize: 10 } as PageEvent);

            //Assert
            expect(component.paginatedViolations).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as any);
        });

        it('should change the paginated violations based on the pagination event: end of array', () => {
            //Assemble
            component.listOfAllViolations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as any;

            //Act
            component.updateViolationsDetailsTable({ pageIndex: 1, pageSize: 10 } as PageEvent);

            //Assert
            expect(component.paginatedViolations).toEqual([11] as any);
        });
    });

    describe('mobileLoadMore', () => {
        it('should change the load-more violations: general', () => {
            //Assemble
            component.listOfAllViolations = [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30
            ] as any;
            component.mobileLoadedViolations = [];

            //Act
            component.mobileLoadMore();

            //Assert
            expect(component.mobileLoadedViolations).toEqual([
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25
            ] as any);
        });

        it('should change the load-more violations: end of array', () => {
            //Assemble
            component.listOfAllViolations = [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30
            ] as any;
            component.mobileLoadedViolations = [];

            //Act
            component.mobileLoadMore();
            component.mobileLoadMore();

            //Assert
            expect(component.mobileLoadedViolations).toEqual([
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30
            ] as any);
        });
    });

    describe('onContinue', () => {
        it('should go to the next state', async () => {
            //Assemble
            const nextState = { name: 'fakeNextState' };

            //Act
            await component.onContinue(nextState);

            //Assert
            expect(uiStateService.go).toHaveBeenCalledWith(nextState, { billingInfo: 'fakeBillingInfo' });
        });
    });

});
