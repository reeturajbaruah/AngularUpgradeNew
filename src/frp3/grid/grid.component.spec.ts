import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridComponent } from './grid.component';
import { FrameComponent } from 'frp3/frame/frame.component';
import { PageEvent } from '@angular/material/paginator';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { stateNames as cavveStates } from 'cavve/constants';
import { DialogService, ToasterService } from 'common/services';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { WebStorageConst } from 'constants/module';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { EOViolation, EOViolationInvoice, EOViolationPlate, EOViolationPlateContainer } from '../interfaces';
import { ViolationsPlateComponent } from 'violationsCommon/components/violationsPlate/violationsPlate.component';
import { ViolationsDetailsComponent } from 'violationsCommon/components/violationsDetails/violationsDetails.component';
import { Decimal } from 'decimal.js-light';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';

describe('GridComponent', () => {

    let fixture: ComponentFixture<GridComponent>;
    let component: GridComponent;

    let state: StateService;
    let uiRouterGlobals: UIRouterGlobals;
    let frameComponent: jasmine.SpyObj<FrameComponent>;
    let webStorageConst: WebStorageConst;
    let webStorage;
    let toasterService: jasmine.SpyObj<ToasterService>;
    let dialogService: DialogService;
    let environmentConfig;

    beforeEach(async () => {

        frameComponent = jasmine.createSpyObj('frameComponent', ['scrollToTop', 'getPlateContainer']);
        state = jasmine.createSpyObj('state', ['go']);
        uiRouterGlobals = {
            params: { billingInfo: 'fake billing info' }
        } as any;
        webStorageConst = new WebStorageConst();
        webStorage = jasmine.createSpyObj('webStorage', ['setKeyValue', 'removeEntry', 'getValue']);
        toasterService = jasmine.createSpyObj('toasterService', ['show']);
        dialogService = jasmine.createSpyObj('dialogueService', ['openSliderFilled']);
        environmentConfig = {
            paginationConfig: {
                violations: {
                    PageSize: 25,
                    LimitToStart: 100
                }
            }
        };

        await TestBed
            .configureTestingModule({
                declarations: [
                    GridComponent,
                    ViolationsPlateComponent,
                    ViolationsDetailsComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: FrameComponent, useFactory: () => frameComponent },
                    { provide: StateService, useFactory: () => state },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: WebStorageConst, useValue: webStorageConst },
                    { provide: WebStorageService, useFactory: () => webStorage },
                    { provide: ToasterService, useFactory: () => toasterService },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(GridComponent);
        component = fixture.debugElement.componentInstance;
    });

    beforeEach(() => {
        const fakeElement = document.createElement('div');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(fakeElement);
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('default properties', () => {
        it('should default the summaryCmsData to empty object', async () => {
            expect(component.summaryCmsData).toEqual({} as any);
        });
    });

    describe('openPrevPaidInvoices', () => {
        it('should call openModal 1 time', () => {
            //Assemble
            component['closedLogoImgSrc'] = 'fake img src';
            component.plateContainer = {
                plate: { previouslyPaidInvoices: [] }
            } as any;

            //Act
            component.openPrevPaidInvoices();

            //Assert
            expect(dialogService.openSliderFilled).toHaveBeenCalledTimes(1);

        });
    });

    describe('hasViewableContent', () => {

        it('should return false when invoices and uninvoicedViolations empty', async () => {

            const result = component['hasViewableContent']({
                uninvoicedViolations: [],
                invoices: []
            } as any);

            expect(result).toBe(false);
        });

        [
            {
                uninvoicedViolations: [1],
                invoices: []
            },
            {
                uninvoicedViolations: [],
                invoices: [2]
            },
            {
                uninvoicedViolations: [5],
                invoices: [9]
            }
        ].forEach(plate => {

            it('should return false when invoices and uninvoicedViolations empty', async () => {

                const result = component['hasViewableContent'](plate as any);

                expect(result).toBe(true);
            });
        });
    });

    describe('getCurrentStep', () => {

        it('should return 1 when hasOutstandingViolations', async () => {

            const result = component['getCurrentStep'](true);

            expect(result).toBe(1);
        });

        it('should return 0 when hasOutstandingViolations false', async () => {

            const result = component['getCurrentStep'](false);

            expect(result).toBe(0);
        });
    });

    describe('ngOnInit', () => {
        const plate = {
            agencies: [
                {
                    agencyName: 'hctra',
                    agencyID: 1,
                    discountTotal: 1000,
                    totalDueBeforeDiscount: 1111,
                    totalDueAfterDiscount: 9999,
                    discountProgram: 'frp fake',
                    excusalCode: 'excusal fake',
                    programFees: 123,
                    paymentAmount: 0
                },
                {
                    agencyName: 'fake hctra',
                    agencyID: 2,
                    discountTotal: 1000,
                    totalDueBeforeDiscount: 2222,
                    totalDueAfterDiscount: 9999,
                    discountProgram: 'frp fake',
                    excusalCode: 'excusal fake',
                    programFees: 123,
                    paymentAmount: 0
                },
                {
                    agencyName: 'fbctra',
                    agencyID: 3,
                    discountTotal: 1000,
                    totalDueBeforeDiscount: 3333,
                    totalDueAfterDiscount: 9999,
                    discountProgram: 'frp fake',
                    excusalCode: 'excusal fake',
                    programFees: 123,
                    paymentAmount: 0
                }],
            licenseState: 'fake licenseState',
            licensePlate: 'fake licensePlate',
            discountProgramCode: 0,
            invoices: [],
            uninvoicedViolations: [],
            previouslyPaidInvoices: [{} as EOViolationInvoice]
        } as EOViolationPlate;

        const associatedPlates = [
            {
                invoices: [{}],
                uninvoicedViolations: [{}],
                invoicesAndViolations: [{}]
            }
        ];

        beforeEach(() => {

            component.cmsData = {
                Title: 'fake title',
                LongDescription: 'fake long description',
                ShortDescription: 'fake short description',
                OVERPAYMENT_BODY: 'fake over payment body',
                OVERPAYMENT_HEADER: 'fake over payment header',
                NO_DISCOUNT_HEADER: 'fake ND header',
                DISCOUNT_VIOLATIONS_HEADER: 'fake select header refresh',
                ASSOCIATED_PLATES_HEADER: 'fake title',
                ASSOCIATED_PLATES_DESC: 'fake desc',
                IMPORTANT_REMINDER: 'fake important reminder',
                Children: [
                    {
                        LongDescription: 'fake long description aik',
                        DISCOUNT_ENUM: '1',
                        Children: [{
                            ItemName: 'Summary',
                            ShortDescription: 'child short description'
                        },
                        {
                            ItemName: 'Important Reminder',
                            ShortDescription: 'child short description'
                        }]
                    },
                    {
                        LongDescription: 'fake long description 9',
                        DISCOUNT_ENUM: '9',
                        Children: [{
                            ItemName: 'Summary',
                            ShortDescription: 'child short description'
                        },
                        {
                            ItemName: 'Important Reminder',
                            ShortDescription: 'child short description'
                        }]
                    }
                ]
            } as any;

            spyOn(component as any, 'getCurrentStep').and.returnValue(111);
            frameComponent.getPlateContainer.and.returnValue({ plate, associatedPlates } as any);
            uiRouterGlobals.current = { data: {} };
        });

        it('should use parent.stepNum', () => {
            component['ngOnInit']();

            expect(frameComponent.stepNum).toBe(111);
        });

        it('should call frameComponent.scrollToTop', async () => {

            component.ngOnInit();

            expect(frameComponent.scrollToTop).toHaveBeenCalledTimes(1);
            expect(frameComponent.scrollToTop).toHaveBeenCalledWith();
        });

        it('should call webStorage.getValue with webStorageConst.enhancedViolationsPlateAndInvoiceData', async () => {

            component.ngOnInit();

            expect(frameComponent.getPlateContainer).toHaveBeenCalledTimes(1);
            expect(frameComponent.getPlateContainer).toHaveBeenCalledWith();
        });

        it('should set plateContainer to equal value returned by getViolationPlateContainer', async () => {

            component.ngOnInit();

            expect(component.plateContainer).toEqual({
                plate,
                associatedPlates
            } as any);
        });

        it('should create invoicesAndViolations array if it does not exist', () => {
            const violation1 = { violations: [] };
            const violation2 = { violations: null };
            frameComponent.getPlateContainer.and.returnValue({
                plate: {
                    licenseState: 'fake licenseState',
                    licensePlate: 'fake licensePlate',
                    discountProgramCode: 0,
                    invoices: [violation1],
                    uninvoicedViolations: [violation2],
                    previouslyPaidInvoices: [{
                    } as EOViolationInvoice]
                },
                associatedPlates: []
            } as any);

            component.ngOnInit();

            expect(component.plateContainer.plate.invoicesAndViolations[0]).toBe(violation1 as EOViolationInvoice);
            expect(component.plateContainer.plate.invoicesAndViolations[1]).toBe(violation2 as EOViolationInvoice);
        });

        it('should reassign object references to invoices and uninvoicedViolations from invoicessAndViolations array', () => {
            const violation1 = { violations: [] };
            const violation2 = {};
            frameComponent.getPlateContainer.and.returnValue({
                plate: {
                    licenseState: 'fake licenseState',
                    licensePlate: 'fake licensePlate',
                    discountProgramCode: 0,
                    invoices: [],
                    uninvoicedViolations: [],
                    invoicesAndViolations: [violation1, violation2],
                    previouslyPaidInvoices: [{
                    } as EOViolationInvoice]
                },
                associatedPlates: []
            } as any);

            component.ngOnInit();

            expect(component.plateContainer.plate.invoices[0]).toBe(violation1 as EOViolationInvoice);
            expect(component.plateContainer.plate.uninvoicedViolations[0]).toBe(violation2 as EOViolation);
        });

        it('should set uiRouterGlobals.current.data.currentStep to value returned by getCurrentStep', async () => {

            component.ngOnInit();

            expect(uiRouterGlobals.current.data.currentStep).toBe(111);
            expect(component['getCurrentStep']).toHaveBeenCalledWith(false);
        });


        [
            { present: 'no', summary: {} },
            { present: 'yes', summary: { ItemName: 'Summary', someOtherProp: 'xy' } },
            { present: 'yes', summary: { ItemName: 'Summary', someOtherProp: 'xy', another: '1' } }
        ].forEach(({ present, summary }) => {

            it(`should set summaryCmsData to ${summary} when summary ${present}`, async () => {

                frameComponent.getPlateContainer.and.returnValue({
                    plate: {
                        agencies: [
                            {
                                agencyName: 'hctra',
                                agencyID: 1,
                                discountTotal: 1000,
                                totalDueBeforeDiscount: 1111,
                                totalDueAfterDiscount: 9999,
                                discountProgram: 'frp fake',
                                excusalCode: 'excusal fake',
                                programFees: 123,
                                paymentAmount: 0
                            },
                            {
                                agencyName: 'fake hctra',
                                agencyID: 2,
                                discountTotal: 1000,
                                totalDueBeforeDiscount: 2222,
                                totalDueAfterDiscount: 9999,
                                discountProgram: 'frp fake',
                                excusalCode: 'excusal fake',
                                programFees: 123,
                                paymentAmount: 0
                            },
                            {
                                agencyName: 'fbctra',
                                agencyID: 3,
                                discountTotal: 1000,
                                totalDueBeforeDiscount: 3333,
                                totalDueAfterDiscount: 9999,
                                discountProgram: 'frp fake',
                                excusalCode: 'excusal fake',
                                programFees: 123,
                                paymentAmount: 0
                            }],
                        licenseState: 'fake licenseState',
                        licensePlate: 'fake licensePlate',
                        invoices: [],
                        discountProgramCode: '',
                        uninvoicedViolations: [],
                        previouslyPaidInvoices: [{
                        } as EOViolationInvoice]
                    },
                    associatedPlates: []
                } as any);
                component.cmsData.Children.push(summary as any);

                component.ngOnInit();

                expect(component.summaryCmsData).toEqual(summary as any);
            });
        });

        it(`should set cms`, async () => {

            frameComponent.getPlateContainer.and.returnValue({
                plate: {
                    licenseState: 'fake licenseState',
                    licensePlate: 'fake licensePlate',
                    discountProgramCode: 1,
                    invoices: [1, 2, 3],
                    uninvoicedViolations: [4, 5, 6, 7],
                    secondCall: true,
                    plateDueBeforeDiscount: 974,
                    previouslyPaidInvoices: [{
                    } as EOViolationInvoice]
                },
                associatedPlates: []
            } as any);

            component.ngOnInit();

            expect(component.cms).toEqual({
                data: {
                    licensePlateState: 'FAKE LICENSESTATE',
                    licensePlateNumber: 'FAKE LICENSEPLATE',
                    itemsFound: 7,
                    totalAmountDue: 974
                }
            });
        });

        it(`should set gridCmsData`, async () => {

            component.ngOnInit();

            expect(component.overpaymentModalCmsContent).toEqual({
                Title: 'fake over payment header',
                PrimaryContent: 'fake over payment body'
            });
        });

        [
            { eligible: false, expectedValue: 'Previous' },
            { eligible: true, expectedValue: 'Back to Offer' }
        ].forEach(({ eligible, expectedValue }) => {

            it(`should set wizardBackLabel to ${expectedValue} when isNewEzTagAccountEligibile ${eligible}`, async () => {

                frameComponent.getPlateContainer.and.returnValue({
                    plate: {
                        licenseState: 'fake licenseState',
                        licensePlate: 'fake licensePlate',
                        isNewEzTagAccountEligibile: eligible,
                        discountProgramCode: 0,
                        invoices: [],
                        uninvoicedViolations: [],
                        previouslyPaidInvoices: [],
                        secondCall: true
                    },
                    associatedPlates: []
                } as any);

                component.ngOnInit();

                expect(component.wizardBackLabel).toEqual(expectedValue);
            });
        });

        it('should prep pagination related data if needed', () => {
            frameComponent.getPlateContainer.and.returnValue({
                plate: {
                    agencies: [
                        {
                            agencyName: 'hctra',
                            agencyID: 1,
                            discountTotal: 1000,
                            totalDueBeforeDiscount: 1111,
                            totalDueAfterDiscount: 9999,
                            discountProgram: 'frp fake',
                            excusalCode: 'excusal fake',
                            programFees: 123,
                            paymentAmount: 0
                        },
                        {
                            agencyName: 'fake hctra',
                            agencyID: 2,
                            discountTotal: 1000,
                            totalDueBeforeDiscount: 2222,
                            totalDueAfterDiscount: 9999,
                            discountProgram: 'frp fake',
                            excusalCode: 'excusal fake',
                            programFees: 123,
                            paymentAmount: 0
                        },
                        {
                            agencyName: 'fbctra',
                            agencyID: 3,
                            discountTotal: 1000,
                            totalDueBeforeDiscount: 3333,
                            totalDueAfterDiscount: 9999,
                            discountProgram: 'frp fake',
                            excusalCode: 'excusal fake',
                            programFees: 123,
                            paymentAmount: 0
                        }],
                    licenseState: 'fake licenseState',
                    licensePlate: 'fake licensePlate',
                    isNewEzTagAccountEligibile: true,
                    discountProgramCode: 0,
                    invoices: Array(51).fill({ key: 'hello' }),
                    uninvoicedViolations: Array(51).fill({ key: 'world' }),
                    previouslyPaidInvoices: [{} as EOViolationInvoice]
                },
                associatedPlates: []
            } as any);
            spyOn(component as any, 'updateViolationsDetailsTable');
            spyOn(component as any, 'mobileLoadMore');

            component.ngOnInit();

            expect(component.plateContainer.plate.invoicesAndViolations.length).toEqual(102);
            expect(component.plateContainer.plate.invoicesAndViolations[0]).toEqual({ key: 'hello' } as any);
            expect(component.plateContainer.plate.invoicesAndViolations[51]).toEqual({ key: 'world' } as any);
            expect(component.updateViolationsDetailsTable).toHaveBeenCalledWith({
                pageIndex: 0,
                pageSize: 25
            } as PageEvent);
            expect(component.mobileLoadMore).toHaveBeenCalledTimes(1);
        });

        //Should be updated when associate plates are added in
        //it('should extract correct summary array', () => {
        //    frameComponent.getPlateContainer.and.returnValue({
        //        plate: {
        //            licenseState: 'fake licenseState',
        //            licensePlate: 'fake licensePlate',
        //            isNewEzTagAccountEligibile: true,
        //            discountProgramCode: 0,
        //            invoices: Array(51).fill({ key: 'hello' }),
        //            uninvoicedViolations: Array(51).fill({ key: 'world' }),
        //            previouslyPaidInvoices: [{} as EOViolationInvoice],
        //            agencies: [
        //                { discountProgram: 'FRP' } as any,
        //                { discountProgram: 'Not real discount' } as any,
        //                { discountProgram: 'CFDP' } as any,
        //                { discountProgram: null } as any
        //            ]
        //        }
        //    } as any);

        //    component.ngOnInit();

        //    expect(component.discountArray[0]).toBe('FRP long description');
        //    expect(component.discountArray[1]).toBe('CFDP long description');
        //});
    });

    describe('savePlateContainer', () => {

        [
            {
                partialPayments: true,
                paymentAmount: 91122,
                remainingBalance: 911222,
                violationsFlowName: 'OLVPS',
                plate: {
                    someProp: 'fakeProp1', totalSelected: 91122,
                    plateDueBeforeDiscount: 911222, remainingBalance: 911222, serviceFee: 5,
                    totalPaymentAmountFRP3: 91122, discountProgramCode: 0
                }
            },
            {
                partialPayments: true,
                paymentAmount: 226,
                remainingBalance: 22111,
                violationsFlowName: 'FRP',
                plate: {
                    agencies: [],
                    someProp: 'fakeProp2', totalSelected: 221,
                    plateDueBeforeDiscount: 22111, remainingBalance: 22111, serviceFee: 5,
                    totalPaymentAmountFRP3: 226, discountProgramCode: 1
                }
            },
            {
                partialPayments: true,
                paymentAmount: 91122,
                remainingBalance: 911222,
                violationsFlowName: 'CFDP',
                plate: {
                    someProp: 'fakeProp1', totalSelected: 91122,
                    plateDueBeforeDiscount: 911222, remainingBalance: 911222, serviceFee: 5,
                    totalPaymentAmountFRP3: 91122, discountProgramCode: 2
                },
                associatedPlates: []
            }
        ].forEach(({ partialPayments, paymentAmount, remainingBalance, violationsFlowName, plate, associatedPlates }) => {

            it('should call webStorage.setKeyValue with plateContainerWithDiscount', async () => {

                component.plateContainer = {
                    plate,
                    associatedPlates
                } as any;

                component.associatedPlatesSelectedTot = new Decimal(0);
                component.associatedPlatesSelRemBal = new Decimal(0);

                await component['savePlateContainer']();

                expect(webStorage.setKeyValue).toHaveBeenCalledTimes(1);
                expect(webStorage.setKeyValue).toHaveBeenCalledWith(webStorageConst.enhancedViolationsPlateAndInvoiceData, {
                    plate,
                    associatedPlates,
                    paymentAmount,
                    remainingBalance,
                    violationsFlowName,
                    assocPlatesPaymentAmount: 0,
                    assocPlatesRemainingAmount: 0
                });
            });
        });
    });

    describe('goToNextState', () => {

        it('should call savePlateContainer', async () => {

            spyOn(component as any, 'savePlateContainer');

            component.plateContainer = { plate: { someProp: 'fakeProp' }, associatedPlates: [] } as any;

            await component.goToNextState('fakeTargetState');

            expect(component['savePlateContainer']).toHaveBeenCalledTimes(1);
        });

        it('should call state.go with targetState', async () => {

            component.plateContainer = { plate: { someProp: 'fakeProp' }, associatedPlates: [] } as any;

            await component.goToNextState('fakeTargetState');

            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith('fakeTargetState', { billingInfo: 'fake billing info' });
        });
    });

    describe('goToPreviousState', () => {

        beforeEach(() => {

            spyOn(component as any, 'savePlateContainer');
        });
        [true, false].forEach(isNewEzTagAccountEligibile => {

            it('should call savePlateContainer', async () => {

                component.plateContainer = { plate: { isNewEzTagAccountEligibile }, associatedPlates: [] } as any;

                await component.goToPreviousState('fakeTargetState');

                expect(component['savePlateContainer']).toHaveBeenCalledTimes(1);
            });
        });

        it('should call state.go with targetState when isNewEzTagAccountEligibile false', async () => {

            component.plateContainer = { plate: { isNewEzTagAccountEligibile: false }, associatedPlates: [] } as any;

            await component.goToPreviousState('fakeTargetState');

            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith('fakeTargetState');
        });

        it('should call state.go with cavveStates.Offer when isNewEzTagAccountEligibile', async () => {

            component.plateContainer = { plate: { isNewEzTagAccountEligibile: true }, associatedPlates: [] } as any;

            await component.goToPreviousState('fakeTargetState');

            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith(cavveStates.Offer);
        });
    });

    describe('updateViolationsDetailsTable', () => {
        it('should create a new paginated plate while maintaining object references', async () => {
            component.plateContainer = {
                plate: {} as EOViolationPlate,
                associatedPlates: []
            } as EOViolationPlateContainer;
            const violation1 = { violations: [] };
            const violation2 = { violations: [] };
            const violation3 = { violations: [] };
            const violation4 = {};
            const violation5 = {};
            component.plateContainer.plate.invoicesAndViolations = [
                violation1,
                violation2,
                violation3,
                violation4,
                violation5
            ] as any;

            component.paginatedPlate = { licensePlate: 'Texas', licenseState: 'TX' } as any;
            const oldReferenceToPlate = component.paginatedPlate;

            component.updateViolationsDetailsTable({
                pageIndex: 0,
                pageSize: 4
            } as PageEvent);

            expect(component.paginatedPlate).not.toBe(oldReferenceToPlate);
            expect(component.paginatedPlate.invoices.length).toEqual(3);
            expect(component.paginatedPlate.licensePlate).toEqual('Texas');
            expect(component.paginatedPlate.licenseState).toEqual('TX');
            expect(violation1).toBe(component.paginatedPlate.invoices[0]);
            expect(component.paginatedPlate.uninvoicedViolations.length).toEqual(1);
            expect(violation4).toBe(component.paginatedPlate.uninvoicedViolations[0]);
        });
    });

    describe('mobileLoadMore', () => {
        it('should create a new paginated plate while maintaining object references', async () => {
            component.plateContainer = {
                plate: {} as EOViolationPlate,
                associatedPlates: []
            } as EOViolationPlateContainer;

            const violation1 = { violations: [] };
            const violation2 = { violations: [] };
            const violation3 = { violations: [] };
            const violation4 = {};
            const violation5 = {};
            component.plateContainer.plate.invoicesAndViolations = [
                violation1,
                violation2,
                violation3,
                violation4,
                violation5
            ] as any;

            component.mobileLoadedPlate = { invoices: [], uninvoicedViolations: [], invoicesAndViolations: [], licensePlate: 'Texas', licenseState: 'TX' } as any;
            const oldReferenceToPlate = component.mobileLoadedPlate;

            component.mobileLoadMore();

            expect(component.mobileLoadedPlate).not.toBe(oldReferenceToPlate);
            expect(component.mobileLoadedPlate.invoices.length).toEqual(3);
            expect(component.mobileLoadedPlate.licensePlate).toEqual('Texas');
            expect(component.mobileLoadedPlate.licenseState).toEqual('TX');
            expect(violation1).toBe(component.mobileLoadedPlate.invoices[0]);
            expect(component.mobileLoadedPlate.uninvoicedViolations.length).toEqual(2);
            expect(violation4).toBe(component.mobileLoadedPlate.uninvoicedViolations[0]);
        });
    });

    describe('platechangeSelectAll', () => {
        let comp: { id: string; areAllSelected: boolean; changeSelectAll: () => void };

        beforeEach(() => {
            comp = {
                id: '1',
                areAllSelected: true,
                changeSelectAll: () => { }
            };
            component.violationsDetailsCompList = [
                comp
            ] as any;
        });

        it('should call changeSelectAll', () => {
            spyOn(comp, 'changeSelectAll');
            component.plateChangeSelectAll('1');
            expect(comp.changeSelectAll).toHaveBeenCalled();
        });
    });

    describe('associatedPlateTotSel', () => {
        beforeEach(() => {
            component.plateContainer = {
                plate: {
                    invoices: [{}],
                    uninvoicedViolations: [{}],
                    invoicesAndViolations: [{}],
                    totalSelected: 1.00,
                    remainingBalance: 0,
                    totalFeesDiscountedFRP3: 0,
                    totalPaymentAmountFRP3: 0
                },
                associatedPlates: [
                    {
                        invoices: [{}],
                        uninvoicedViolations: [{}],
                        invoicesAndViolations: [{}],
                        totalSelected: 1.00,
                        serviceFee: 3,
                        remainingBalance: 0,
                        totalFeesDiscountedFRP3: 0
                    },
                    {
                        invoices: [{}],
                        uninvoicedViolations: [{}],
                        invoicesAndViolations: [{}],
                        totalSelected: 2.00,
                        serviceFee: 2,
                        remainingBalance: 0,
                        totalFeesDiscountedFRP3: 0
                    }
                ]
            } as EOViolationPlateContainer;
        });

        it('should return total', () => {
            component.associatedPlateSelTot();
            expect(component.associatedPlatesSelectedTot).toEqual(new Decimal(3));
            expect(component.associatedPlatesAdminFees).toEqual(new Decimal(5));
        });
    });
});

