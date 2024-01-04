import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageEvent } from '@angular/material/paginator';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { stateNames as cavveStates } from 'cavve/constants';
import { DialogService, ToasterService } from 'common/services';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { WebStorageConst } from 'constants/module';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { FrameComponent } from 'violations/frame/frame.component';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';
import { AgencyInformation, Violation, ViolationInvoice, ViolationPlate, ViolationPlateContainer } from '../interfaces';
import { GridComponent } from './grid.component';



describe('component: violations-grid', () => {

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

        frameComponent = jasmine.createSpyObj('frameComponent', ['scrollToTop', 'setTitle', 'getPlateContainer']);
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
                    GridComponent
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

        spyOn(component as any, 'recalculatePlateContainerValues');

        const fakeElement = document.createElement('div');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(fakeElement);

    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('default properties', () => {
        it('should default the discountCmsData to empty object', async () => {
            expect(component.discountCmsData).toEqual({} as any);
        });

        it('should default the noDiscountCmsData to empty object', async () => {
            expect(component.noDiscountCmsData).toEqual({} as any);
        });

        it('should default the prevPaidCmsData to empty object', async () => {
            expect(component.prevPaidCmsData).toEqual({} as any);
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
    describe('getPreviouslyPaidPlate', () => {

        it('should return previously paid plate', async () => {

            const result = component['getPreviouslyPaidPlate']({
                someProp: 'value of prop',
                previouslyPaidInvoices: [8, 7, 3],
                invoices: [1, 2, 3]
            } as any);

            expect(result).toEqual({
                someProp: 'value of prop',
                previouslyPaidInvoices: [8, 7, 3],
                invoices: [8, 7, 3],
                uninvoicedViolations: [],
                plateDueBeforeDiscount: 0
            } as any);
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

    describe('getShowDiscountPage', () => {

        [
            [false, false, false, false],
            [false, false, true, false],
            [false, true, false, false],
            [false, true, true, false],
            [true, false, false, false],
            [true, false, true, false],
            [true, true, false, true],
            [true, true, true, false]
        ].forEach(([discountCmsData, hasOutstandingViolations, partialPayments, expected]) => {

            it(`should return ${expected} when discountCmsData: ${discountCmsData
                }, hasOutstandingViolations: ${hasOutstandingViolations}, partialPayments: ${partialPayments} `, async () => {

                    const result = component['getShowDiscountPage'](
                        discountCmsData,
                        hasOutstandingViolations,
                        partialPayments);

                    expect(result).toBe(expected);
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

    describe('recalculatePlateContainerValues', () => {
        beforeEach(() => {
            (component as any).recalculatePlateContainerValues.and.callThrough();
        });

        [
            {
                plate: {
                    agencies: [
                        {
                            agencyName: 'hctra',
                            mobileAgencyName: 'h',
                            agencyID: 1,
                            discountTotal: 10,
                            totalDueBeforeDiscount: 11,
                            totalDueAfterDiscount: 11,
                            discountProgram: 'frp fake',
                            excusalCode: 'excusal fake',
                            programFees: 2222,
                            paymentAmount: 0
                        },
                        {
                            agencyName: 'fake hctra',
                            mobileAgencyName: 'fh',
                            agencyID: 2,
                            discountTotal: 2,
                            totalDueBeforeDiscount: 22,
                            totalDueAfterDiscount: 222,
                            discountProgram: 'frp fake',
                            excusalCode: 'excusal fake',
                            programFees: 123,
                            paymentAmount: 0
                        }]
                },

                //This is the use case where some agencies are selected
                selectedAgencies: [
                    {
                        agencyName: 'hctra',
                        mobileAgencyName: 'h',
                        agencyID: 1,
                        discountTotal: 10,
                        totalDueBeforeDiscount: 11,
                        totalDueAfterDiscount: 5,
                        discountProgram: 'frp fake',
                        excusalCode: 'excusal fake',
                        programFees: 2222,
                        paymentAmount: 0
                    }],
                totalSelected: 5,
                totalFeesDiscounted: 10,
                remainingBalance: 22
            },
            {
                plate: {
                    agencies: [
                        {
                            agencyName: 'hctra',
                            mobileAgencyName: 'h',
                            agencyID: 1,
                            discountTotal: 1,
                            totalDueBeforeDiscount: 11,
                            totalDueAfterDiscount: 11,
                            discountProgram: 'frp fake',
                            excusalCode: 'excusal fake',
                            programFees: 222,
                            paymentAmount: 0
                        },
                        {
                            agencyName: 'fake hctra',
                            mobileAgencyName: 'fh',
                            agencyID: 2,
                            discountTotal: 2,
                            totalDueBeforeDiscount: 22,
                            totalDueAfterDiscount: 222,
                            discountProgram: 'frp fake',
                            excusalCode: 'excusal fake',
                            programFees: 123,
                            paymentAmount: 0
                        }]
                },

                //This is the use case where all agencies are selected
                selectedAgencies: [
                    {
                        agencyName: 'hctra',
                        mobileAgencyName: 'h',
                        agencyID: 1,
                        discountTotal: 1,
                        totalDueBeforeDiscount: 11,
                        totalDueAfterDiscount: 11,
                        discountProgram: 'frp fake',
                        excusalCode: 'excusal fake',
                        programFees: 222,
                        paymentAmount: 0
                    },
                    {
                        agencyName: 'fake hctra',
                        mobileAgencyName: 'h',
                        agencyID: 2,
                        discountTotal: 2,
                        totalDueBeforeDiscount: 22,
                        totalDueAfterDiscount: 222,
                        discountProgram: 'frp fake',
                        excusalCode: 'excusal fake',
                        programFees: 123,
                        paymentAmount: 0
                    }],

                totalSelected: 233,
                totalFeesDiscounted: 3,
                remainingBalance: 0
            },
            {
                plate: {
                    agencies: [{
                        agencyName: 'hctra',
                        mobileAgencyName: 'h',
                        agencyID: 1,
                        discountTotal: 1,
                        totalDueBeforeDiscount: 11,
                        totalDueAfterDiscount: 11,
                        discountProgram: 'frp fake',
                        excusalCode: 'excusal fake',
                        programFees: 222,
                        paymentAmount: 0
                    },]
                },

                //This is the use case where no agencies are selected
                selectedAgencies: [],
                totalSelected: 0,
                totalFeesDiscounted: 0,
                remainingBalance: 11
            }]
            .forEach(({ plate,
                selectedAgencies,
                totalSelected,
                totalFeesDiscounted,
                remainingBalance
            }) => {
                it(`should set plateContainer.plate.totalSelected ${totalSelected},
                    totalFeesDiscounted to ${totalFeesDiscounted}, remainingBalance to ${remainingBalance}`,
                    () => {
                        //Assemble
                        component.selectedAgenciesToPay = selectedAgencies;
                        (component.plateContainer as any) = {
                            plate,
                            licenseState: 'fake licenseState',
                            licensePlate: 'fake licensePlate',
                            discountProgramCode: 0,
                            invoices: [],
                            uninvoicedViolations: [],
                            previouslyPaidInvoices: [{} as ViolationInvoice]
                        };

                        //Act
                        component['recalculatePlateContainerValues']();

                        //Assert
                        expect(component.plateContainer.plate.totalSelected).toEqual(totalSelected);
                        expect(component.plateContainer.plate.totalFeesDiscounted).toEqual(totalFeesDiscounted);
                        expect(component.plateContainer.remainingBalance).toEqual(remainingBalance);
                    });
            });

        [
            {
                plate: {
                    agencies: [
                        {
                            agencyName: 'hctra',
                            mobileAgencyName: 'h',
                            agencyID: 1,
                            discountTotal: 10,
                            totalDueBeforeDiscount: 11,
                            totalDueAfterDiscount: 50,
                            discountProgram: 'frp fake',
                            excusalCode: 'excusal fake',
                            programFees: 2222,
                            paymentAmount: 111
                        },
                        {
                            agencyName: 'fake hctra',
                            mobileAgencyName: 'fh',
                            agencyID: 2,
                            discountTotal: 2,
                            totalDueBeforeDiscount: 22,
                            totalDueAfterDiscount: 222,
                            discountProgram: 'frp fake',
                            excusalCode: 'excusal fake',
                            programFees: 123,
                            paymentAmount: 2
                        }]
                },
                totalSelected: 272,
                totalFeesDiscounted: 12,
                remainingBalance: 0,
                checked: true
            },
            {
                plate: {
                    agencies: [
                        {
                            agencyName: 'hctra',
                            mobileAgencyName: 'h',
                            agencyID: 1,
                            discountTotal: 1,
                            totalDueBeforeDiscount: 11,
                            totalDueAfterDiscount: 11,
                            discountProgram: 'frp fake',
                            excusalCode: 'excusal fake',
                            programFees: 2222,
                            paymentAmount: 111
                        },
                        {
                            agencyName: 'fake hctra',
                            mobileAgencyName: 'fh',
                            agencyID: 2,
                            discountTotal: 9,
                            totalDueBeforeDiscount: 22,
                            totalDueAfterDiscount: 222,
                            discountProgram: 'frp fake',
                            excusalCode: 'excusal fake',
                            programFees: 123,
                            paymentAmount: 9
                        }]
                },
                totalSelected: 233,
                totalFeesDiscounted: 10,
                remainingBalance: 0,
                checked: false
            }]
            .forEach(({ plate,
                totalSelected,
                totalFeesDiscounted,
                remainingBalance,
                checked
            }) => {
                it(`should set plateContainer.plate.totalSelected ${totalSelected},
                    totalFeesDiscounted to ${totalFeesDiscounted}, remainingBalance to ${remainingBalance}, and checked ${checked}`,
                    () => {
                        //Assemble
                        (component.plateContainer as any) = {
                            plate,
                            licenseState: 'fake licenseState',
                            licensePlate: 'fake licensePlate',
                            discountProgramCode: 0,
                            invoices: [],
                            uninvoicedViolations: [],
                            previouslyPaidInvoices: [{} as ViolationInvoice]
                        };
                        component.selectedAgenciesToPay = plate.agencies;

                        //Act
                        component['recalculatePlateContainerValues']();

                        //Assert
                        expect(component.plateContainer.plate.totalSelected).toEqual(totalSelected);
                        expect(component.plateContainer.plate.totalFeesDiscounted).toEqual(totalFeesDiscounted);
                        expect(component.plateContainer.remainingBalance).toEqual(remainingBalance);
                    });
            });
    });
    describe('selectSingleAgencyToPay', () => {
        [
            {
                xTimes: 1, checkboxChecked: true,
                expectedSelectedAgenciesToPay: [
                    {
                        agencyName: 'hctra',
                        mobileAgencyName: 'h',
                        agencyID: 1,
                        discountTotal: 1000,
                        totalDueBeforeDiscount: 1111,
                        totalDueAfterDiscount: 9999,
                        discountProgram: 'frp fake',
                        excusalCode: 'excusal fake',
                        programFees: 123,
                        paymentAmount: 0
                    }]
            },
            {
                xTimes: 0, checkboxChecked: false,
                expectedSelectedAgenciesToPay: []
            }]
            .forEach(testCase => {
                it(`should call Array.find() ${testCase.xTimes} time(s) when checkboxChecked is ${testCase.checkboxChecked}`,
                    () => {
                        //Assemble
                        component.selectedAgenciesToPay = [];
                        (component.plateContainer as any) = {
                            plate: {
                                agencies: [
                                    {
                                        agencyName: 'hctra',
                                        mobileAgencyName: 'h',
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
                                        mobileAgencyName: 'fh',
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
                                        mobileAgencyName: 'f',
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
                                previouslyPaidInvoices: [{} as ViolationInvoice]
                            } as ViolationPlate
                        };
                        component.unpaidAgencies = component.plateContainer.plate.agencies;
                        spyOn(component.plateContainer.plate.agencies, 'find').and.callThrough();

                        const event = {
                            target: {
                                checked: testCase.checkboxChecked,
                                value: 'hctra'
                            }
                        };

                        //Act
                        component.selectSingleAgencyToPay(event);

                        //Assert
                        expect(component.plateContainer.plate.agencies.find).toHaveBeenCalledTimes(testCase.xTimes);
                        expect(component.selectedAgenciesToPay).toEqual(testCase.expectedSelectedAgenciesToPay);
                        expect((component as any).recalculatePlateContainerValues).toHaveBeenCalledTimes(1);
                    });
            });
        it(`should set checked attribute of element 'selectPayAllAgenciesCheckbox' to true`,
            () => {
                //Assemble
                (component.plateContainer as any) = {
                    plate: {
                        agencies: [
                            {
                                agencyName: 'hctra',
                                mobileAgencyName: 'h',
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
                                mobileAgencyName: 'fh',
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
                                mobileAgencyName: 'f',
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
                        previouslyPaidInvoices: [{} as ViolationInvoice]
                    } as ViolationPlate
                };
                component.selectedAgenciesToPay = [];
                component.unpaidAgencies = [component.plateContainer.plate.agencies[0]];

                spyOn(component.plateContainer.plate.agencies, 'find').and.callThrough();

                const event = {
                    target: {
                        checked: true,
                        value: 'hctra'
                    }
                };

                //Act
                component.selectSingleAgencyToPay(event);

                //Assert
                expect((document.getElementById('selectPayAllAgenciesCheckbox') as any).checked).toEqual(true);
            });
        it(`should remove agency from selectedAgenciesToPay array if unchecked`,
            () => {
                //Assemble
                (component.plateContainer as any) = {
                    plate: {
                        agencies: [
                            {
                                agencyName: 'hctra',
                                mobileAgencyName: 'h',
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
                                mobileAgencyName: 'fh',
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
                                mobileAgencyName: 'f',
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
                        previouslyPaidInvoices: [{} as ViolationInvoice]
                    } as ViolationPlate
                };
                component.selectedAgenciesToPay = component.plateContainer.plate.agencies;

                spyOn(component.plateContainer.plate.agencies, 'find').and.callThrough();

                const event = {
                    target: {
                        checked: false,
                        value: 'hctra'
                    }
                };

                //Act
                component.selectSingleAgencyToPay(event);

                //Assert
                expect(component.selectedAgenciesToPay.length).toEqual(component.plateContainer.plate.agencies.length - 1);
            });

    });

    describe('selectAllCheckboxes', () => {

        [true, false].forEach(checked => {
            it('should call recalculatePlateContainerValues() 1 time', async () => {
                //Assemble
                component.selectedAgenciesToPay = [];
                (component.plateContainer as any) = {
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
                        discountProgramCode: 0,
                        invoices: [],
                        uninvoicedViolations: [],
                        previouslyPaidInvoices: [{} as ViolationInvoice]
                    } as ViolationPlate
                };
                component.unpaidAgencies = component.plateContainer.plate.agencies;

                const event = {
                    target: {
                        checked,
                        value: 'hctra'
                    }
                };

                //Act
                component.selectAllCheckboxes(event);

                //Assert
                expect((component as any).recalculatePlateContainerValues).toHaveBeenCalledTimes(1);
            });
        });

        [
            {
                plate: {
                    agencies: [
                        {
                            agencyName: 'hctra',
                            agencyID: 1,
                            discountTotal: 10,
                            totalDueBeforeDiscount: 11,
                            totalDueAfterDiscount: 11,
                            discountProgram: 'frp fake',
                            excusalCode: 'excusal fake',
                            programFees: 2222,
                            paymentAmount: 111
                        },
                        {
                            agencyName: 'fake hctra',
                            agencyID: 2,
                            discountTotal: 2,
                            totalDueBeforeDiscount: 22,
                            totalDueAfterDiscount: 222,
                            discountProgram: 'frp fake',
                            excusalCode: 'excusal fake',
                            programFees: 123,
                            paymentAmount: 2
                        }]
                },
                totalSelected: 113,
                totalFeesDiscounted: 12,
                remainingBalance: 0,
                checked: true
            },
            {
                plate: {
                    agencies: [
                        {
                            agencyName: 'hctra',
                            agencyID: 1,
                            discountTotal: 10,
                            totalDueBeforeDiscount: 11,
                            totalDueAfterDiscount: 11,
                            discountProgram: 'frp fake',
                            excusalCode: 'excusal fake',
                            programFees: 2222,
                            paymentAmount: 111
                        },
                        {
                            agencyName: 'fake hctra',
                            agencyID: 2,
                            discountTotal: 2,
                            totalDueBeforeDiscount: 22,
                            totalDueAfterDiscount: 222,
                            discountProgram: 'frp fake',
                            excusalCode: 'excusal fake',
                            programFees: 123,
                            paymentAmount: 2
                        }]
                },
                totalSelected: 0,
                totalFeesDiscounted: 0,
                remainingBalance: 113,
                checked: false
            }]
            .forEach(({ plate,
                totalSelected,
                totalFeesDiscounted,
                remainingBalance,
                checked

            }) => {
                it(`should set plateContainer.plate.totalSelected ${totalSelected},
                    totalFeesDiscounted to ${totalFeesDiscounted}, remainingBalance to ${remainingBalance}, and checked ${checked}`,
                    () => {
                        //Assemble
                        (component.plateContainer as any) = {
                            plate,
                            licenseState: 'fake licenseState',
                            licensePlate: 'fake licensePlate',
                            discountProgramCode: 0,
                            invoices: [],
                            uninvoicedViolations: [],
                            previouslyPaidInvoices: [{} as ViolationInvoice]
                        };
                        component.unpaidAgencies = component.plateContainer.plate.agencies;
                        component.selectedAgenciesToPay = [{} as any, {} as any];

                        const event = {
                            target: {
                                checked,
                                value: 'hctra'
                            }
                        };

                        //Act
                        component.selectAllCheckboxes(event);

                        //Assert
                        expect((component.plateContainer.plate.agencies[0] as any).isChecked).toEqual(checked);
                        expect((component.plateContainer.plate.agencies[1] as any).isChecked).toEqual(checked);

                        component.plateContainer.plate.agencies.forEach(agency =>
                            expect((document.getElementById(`selectPayAgency${agency.agencyName}Checkbox`) as any).checked).toEqual(checked)
                        );

                        expect((component as any).recalculatePlateContainerValues).toHaveBeenCalledTimes(1);
                    });
            });

        it('should only check unpaidAgencies', () => {
            //Assemble
            const checked = true;
            const plate = {
                agencies: [
                    {
                        agencyName: 'hctra',
                        agencyID: 1,
                        discountTotal: 10,
                        totalDueBeforeDiscount: 11,
                        totalDueAfterDiscount: 11,
                        discountProgram: 'frp fake',
                        excusalCode: 'excusal fake',
                        programFees: 2222,
                        paymentAmount: 111
                    },
                    {
                        agencyName: 'fake hctra',
                        agencyID: 2,
                        discountTotal: 2,
                        totalDueBeforeDiscount: 22,
                        totalDueAfterDiscount: 222,
                        discountProgram: 'frp fake',
                        excusalCode: 'excusal fake',
                        programFees: 123,
                        paymentAmount: 2
                    }]
            };
            (component.plateContainer as any) = {
                plate,
                licenseState: 'fake licenseState',
                licensePlate: 'fake licensePlate',
                discountProgramCode: 0,
                invoices: [],
                uninvoicedViolations: [],
                previouslyPaidInvoices: [{} as ViolationInvoice]
            };
            component.unpaidAgencies = [component.plateContainer.plate.agencies[0]];
            component.selectedAgenciesToPay = [{} as any, {} as any];

            const event = {
                target: {
                    checked,
                    value: 'hctra'
                }
            };

            //Act
            component.selectAllCheckboxes(event);

            //Assert
            expect((component.plateContainer.plate.agencies[0] as any).isChecked).toEqual(checked);
            expect((component.plateContainer.plate.agencies[1] as any).isChecked).not.toEqual(checked);

            expect((document.getElementById(`selectPayAgencyhctraCheckbox`) as any).checked).toEqual(checked);

            expect((component as any).recalculatePlateContainerValues).toHaveBeenCalledTimes(1);

            expect(component.selectedAgenciesToPay).toEqual(component.unpaidAgencies);
            expect(component.selectedAgenciesToPay).not.toEqual(component.plateContainer.plate.agencies);
        });
    });

    describe('ngOnInit', () => {
        const prevPaidPlate = {
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
            previouslyPaidInvoices: [{
            } as ViolationInvoice]
        } as ViolationPlate;

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
            previouslyPaidInvoices: [{} as ViolationInvoice]
        } as ViolationPlate;

        beforeEach(() => {

            component.cmsData = {
                Title: 'fake title',
                LongDescription: 'fake long description',
                ShortDescription: 'fake short description',
                OVERPAYMENT_BODY: 'fake over payment body',
                OVERPAYMENT_HEADER: 'fake over payment header',
                NO_DISCOUNT_HEADER: 'fake ND header',
                DISCOUNT_VIOLATIONS_HEADER: 'fake select header refresh',
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

            spyOn(component as any, 'getPreviouslyPaidPlate').and.returnValue(prevPaidPlate);
            spyOn(component as any, 'getDiscountTitle').and.returnValue('fake discount title');
            spyOn(component as any, 'getShowDiscountPage').and.returnValue(false);
            spyOn(component as any, 'getCurrentStep').and.returnValue(111);
            frameComponent.getPlateContainer.and.returnValue({ plate } as any);
            uiRouterGlobals.current = { data: {} };
        });

        it('should call frameComponent.setTitle with to cmsData.Title', async () => {

            component.ngOnInit();

            expect(frameComponent.setTitle).toHaveBeenCalledTimes(1);
            expect(frameComponent.setTitle).toHaveBeenCalledWith('fake discount title');
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
                plate
            } as any);
        });

        it('should set previouslyPaidPlate to value returned by getPreviouslyPaidPlate', async () => {
            (component as any).getShowDiscountPage.and.returnValue(false);

            component.ngOnInit();

            expect(component.previouslyPaidPlate).toBe(prevPaidPlate);
            expect(component['getPreviouslyPaidPlate']).toHaveBeenCalledTimes(1);
            expect(component['getPreviouslyPaidPlate']).toHaveBeenCalledWith(component.plateContainer.plate);
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
                    } as ViolationInvoice]
                }
            } as any);

            component.ngOnInit();

            expect(component.plateContainer.plate.invoicesAndViolations[0]).toBe(violation1 as ViolationInvoice);
            expect(component.plateContainer.plate.invoicesAndViolations[1]).toBe(violation2 as ViolationInvoice);
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
                    } as ViolationInvoice]
                }
            } as any);

            component.ngOnInit();

            expect(component.plateContainer.plate.invoices[0]).toBe(violation1 as ViolationInvoice);
            expect(component.plateContainer.plate.uninvoicedViolations[0]).toBe(violation2 as Violation);
        });

        it('should set uiRouterGlobals.current.data.currentStep to value returned by getCurrentStep', async () => {

            component.ngOnInit();

            expect(uiRouterGlobals.current.data.currentStep).toBe(111);
            expect(component['getCurrentStep']).toHaveBeenCalledWith(false);
        });

        [
            { discountCode: 0, expectedCmsData: undefined },
            { discountCode: 2, expectedCmsData: undefined },
            {
                discountCode: 9, expectedCmsData: {
                    LongDescription: 'fake long description 9',
                    DISCOUNT_ENUM: '9',
                    Children: [{
                        ItemName: 'Summary',
                        ShortDescription: 'child short description'
                    },
                    {
                        ItemName: 'Important Reminder',
                        ShortDescription: 'child short description'
                    }],
                    PAYMENT_SUMMARY_INFO: 'Payment Summary Long Description'
                }
            },
            {
                discountCode: 1, expectedCmsData: {
                    LongDescription: 'fake long description aik',
                    DISCOUNT_ENUM: '1',
                    Children: [{
                        ItemName: 'Summary',
                        ShortDescription: 'child short description'
                    },
                    {
                        ItemName: 'Important Reminder',
                        ShortDescription: 'child short description'
                    }],
                    PAYMENT_SUMMARY_INFO: 'Payment Summary Long Description'
                }
            }
        ].forEach(({ discountCode, expectedCmsData }) => {

            it(`should set discountCmsData to ${expectedCmsData} when discountCode${discountCode}`, async () => {
                component.cmsData.Children.push(
                    {
                        LongDescription: 'Payment Summary Long Description',
                        ItemName: 'Summary'
                    } as any);

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
                        discountProgramCode: discountCode,
                        invoices: [],
                        uninvoicedViolations: [],
                        previouslyPaidInvoices: [{
                        } as ViolationInvoice]
                    }
                } as any);

                component.ngOnInit();

                expect(component.discountCmsData).toEqual(expectedCmsData as any);
            });
        });

        [
            { present: 'no', summary: {} },
            { present: 'yes', summary: { ItemName: 'Summary', someOtherProp: 'xy' } },
            { present: 'yes', summary: { ItemName: 'Summary', someOtherProp: 'xy', another: '1' } }
        ].forEach(({ present, summary }) => {

            it(`should set noDiscountCmsData to ${summary} when summery ${present}`, async () => {

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
                        } as ViolationInvoice]
                    }
                } as any);
                component.cmsData.Children.push(summary as any);

                component.ngOnInit();

                expect(component.noDiscountCmsData).toEqual(summary as any);
            });
        });

        [
            { discountCode: 0, partialPayments: false, cmsFoundForDiscount: false },
            { discountCode: 2, partialPayments: false, cmsFoundForDiscount: false },
            { discountCode: 9, partialPayments: false, cmsFoundForDiscount: true },
            { discountCode: 1, partialPayments: false, cmsFoundForDiscount: true },
            { discountCode: 0, partialPayments: true, cmsFoundForDiscount: false },
            { discountCode: 2, partialPayments: true, cmsFoundForDiscount: false },
            { discountCode: 9, partialPayments: true, cmsFoundForDiscount: true },
            { discountCode: 1, partialPayments: true, cmsFoundForDiscount: true }
        ].forEach(({ discountCode, partialPayments, cmsFoundForDiscount }) => {

            it(`should set showDiscountPage to value returned by getShowDiscountPage`, async () => {

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
                        discountProgramCode: discountCode,
                        invoices: [],
                        uninvoicedViolations: [],
                        secondCall: true,
                        previouslyPaidInvoices: [{
                        } as ViolationInvoice]
                    },
                    partialPayments
                } as any);

                component.ngOnInit();

                expect(component.showDiscountPage).toEqual(false);
                expect(component['getShowDiscountPage']).toHaveBeenCalledTimes(1);
                expect(component['getShowDiscountPage']).toHaveBeenCalledWith(
                    cmsFoundForDiscount,
                    false,
                    partialPayments);
            });
        });

        [
            { discountCode: 0, longDescription: undefined },
            { discountCode: 2, longDescription: undefined },
            { discountCode: 9, longDescription: 'fake long description 9' },
            { discountCode: 1, longDescription: 'fake long description aik' }
        ].forEach(({ discountCode, longDescription }) => {

            it(`should set noDiscountTop to ${longDescription} when discount code ${discountCode}`, async () => {

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
                        discountProgramCode: discountCode,
                        invoices: [],
                        uninvoicedViolations: [],
                        secondCall: true,
                        previouslyPaidInvoices: [{
                        } as ViolationInvoice]
                    }
                } as any);

                component.ngOnInit();

                expect(component.cms.discountTop.text).toEqual(longDescription);
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
                    } as ViolationInvoice]
                }
            } as any);

            component.ngOnInit();

            expect(component.cms).toEqual({
                noDiscountTop: {
                    plateHeaderDescription: 'fake short description',
                    outstandingViolationsHeaderDescription: 'fake long description',
                    plateHeader: 'fake ND header',
                    outstandingViolationsHeader: undefined,
                    data: {
                        licensePlateState: 'FAKE LICENSESTATE',
                        licensePlateNumber: 'FAKE LICENSEPLATE',
                        itemsFound: 7,
                        totalAmountDue: 974
                    }
                } as any,
                discountTop: {
                    invoiceHeaderDescription: undefined,
                    invoiceHeader: undefined,
                    text: 'fake long description aik',
                    selectHeader: undefined,
                    selectHeaderDescription: 'fake long description aik',
                    importantReminderHeader: undefined,
                    summary: 'child short description',
                    importantReminder: 'child short description',
                    data: {
                        licensePlateState: 'FAKE LICENSESTATE',
                        licensePlateNumber: 'FAKE LICENSEPLATE',
                        itemsFound: 7,
                        totalAmountDue: 974
                    }
                } as any
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
                    }
                } as any);

                component.ngOnInit();

                expect(component.wizardBackLabel).toEqual(expectedValue);
            });
        });

        [
            { discountCode: 0, cavveEligible: false, expectedValue: 'Previous' },
            { discountCode: 0, cavveEligible: true, expectedValue: 'Back to Offer' },
            { discountCode: 9, cavveEligible: false, expectedValue: 'Previous' },
            { discountCode: 9, cavveEligible: true, expectedValue: 'Previous' }
        ].forEach(({ discountCode, cavveEligible, expectedValue }) => {

            it(`should set noDiscountWizardBackLabel to ${expectedValue}
                when isNewEzTagAccountEligibile ${cavveEligible} and discountCode ${discountCode}`, async () => {

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
                        isNewEzTagAccountEligibile: cavveEligible,
                        discountProgramCode: discountCode,
                        invoices: [],
                        uninvoicedViolations: [],
                        previouslyPaidInvoices: [{
                        } as ViolationInvoice]
                    }
                } as any);

                component.ngOnInit();

                expect(component.noDiscountWizardBackLabel).toEqual(expectedValue);
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
                    previouslyPaidInvoices: [{} as ViolationInvoice]
                }
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

        describe('setSummaryArray', () => {
            beforeEach(() => {
                component.cmsData.Children = [
                    {
                        LongDescription: 'fake long description aik',
                        DISCOUNT_ENUM: '1',
                        DISCOUNT_STRING: 'FRP',
                        Children: [{
                            ItemName: 'Summary',
                            ShortDescription: 'FRP short description',
                            LongDescription: 'FRP long description'
                        },
                        {
                            ItemName: 'Important Reminder',
                            ShortDescription: 'child short description'
                        }]
                    },
                    {
                        LongDescription: 'fake long description 9',
                        DISCOUNT_ENUM: '9',
                        DISCOUNT_STRING: 'CFDP',
                        Children: [{
                            ItemName: 'Summary',
                            ShortDescription: 'CFDP short description',
                            LongDescription: 'CFDP long description'
                        },
                        {
                            ItemName: 'Important Reminder',
                            ShortDescription: 'child important reminder'
                        }]
                    }] as any;
            });

            it('should extract correct summary array', () => {


                frameComponent.getPlateContainer.and.returnValue({
                    plate: {
                        licenseState: 'fake licenseState',
                        licensePlate: 'fake licensePlate',
                        isNewEzTagAccountEligibile: true,
                        discountProgramCode: 0,
                        invoices: Array(51).fill({ key: 'hello' }),
                        uninvoicedViolations: Array(51).fill({ key: 'world' }),
                        previouslyPaidInvoices: [{} as ViolationInvoice],
                        agencies: [
                            { discountProgram: 'FRP' } as any,
                            { discountProgram: 'Not real discount' } as any,
                            { discountProgram: 'CFDP' } as any,
                            { discountProgram: null } as any
                        ]
                    }
                } as any);

                component.discountPerAgencyAvailable = true;

                component.ngOnInit();

                expect(component.discountArray[0]).toBe('FRP long description');
                expect(component.discountArray[1]).toBe('CFDP long description');
            });

            it('should extract only frp description', () => {


                frameComponent.getPlateContainer.and.returnValue({
                    plate: {
                        licenseState: 'fake licenseState',
                        licensePlate: 'fake licensePlate',
                        isNewEzTagAccountEligibile: true,
                        discountProgramCode: 0,
                        invoices: Array(51).fill({ key: 'hello' }),
                        uninvoicedViolations: Array(51).fill({ key: 'world' }),
                        previouslyPaidInvoices: [{} as ViolationInvoice],
                        agencies: [
                            { discountProgram: 'FRP' } as any
                        ]
                    }
                } as any);

                component.discountPerAgencyAvailable = true;

                component.ngOnInit();

                expect(component.discountArray[0]).toBe('FRP long description');
            });

            it('should extract only cfdp description', () => {


                frameComponent.getPlateContainer.and.returnValue({
                    plate: {
                        licenseState: 'fake licenseState',
                        licensePlate: 'fake licensePlate',
                        isNewEzTagAccountEligibile: true,
                        discountProgramCode: 0,
                        invoices: Array(51).fill({ key: 'hello' }),
                        uninvoicedViolations: Array(51).fill({ key: 'world' }),
                        previouslyPaidInvoices: [{} as ViolationInvoice],
                        agencies: [
                            { discountProgram: 'CFDP' } as any
                        ]
                    }
                } as any);

                component.discountPerAgencyAvailable = true;

                component.ngOnInit();

                expect(component.discountArray[0]).toBe('CFDP long description');
            });

            it('should extract empty array if toggle off', () => {


                frameComponent.getPlateContainer.and.returnValue({
                    plate: {
                        licenseState: 'fake licenseState',
                        licensePlate: 'fake licensePlate',
                        isNewEzTagAccountEligibile: true,
                        discountProgramCode: 0,
                        invoices: Array(51).fill({ key: 'hello' }),
                        uninvoicedViolations: Array(51).fill({ key: 'world' }),
                        previouslyPaidInvoices: [{} as ViolationInvoice],
                        agencies: [
                            { discountProgram: 'FRP' } as any,
                            { discountProgram: 'CFDP' } as any
                        ]
                    }
                } as any);

                component.discountPerAgencyAvailable = false;

                component.ngOnInit();

                expect(component.discountArray.length).toBe(0);
            });

            it('should extract empty array if no agencies', () => {


                frameComponent.getPlateContainer.and.returnValue({
                    plate: {
                        licenseState: 'fake licenseState',
                        licensePlate: 'fake licensePlate',
                        isNewEzTagAccountEligibile: true,
                        discountProgramCode: 0,
                        invoices: Array(51).fill({ key: 'hello' }),
                        uninvoicedViolations: Array(51).fill({ key: 'world' }),
                        previouslyPaidInvoices: [{} as ViolationInvoice],
                        agencies: []
                    }
                } as any);

                component.discountPerAgencyAvailable = true;

                component.ngOnInit();

                expect(component.discountArray.length).toBe(0);
            });
        });


        it('should set plateContainer values if showDiscountpage is true', async () => {
            (component['getShowDiscountPage'] as jasmine.Spy).and.returnValue(true);
            component.discountPerAgencyAvailable = true;

            component.ngOnInit();

            expect(frameComponent.setTitle).toHaveBeenCalledTimes(1);
            expect(component.plateContainer.plate.agencies).not.toEqual([
                {
                    agencyName: 'hctra',
                    mobileAgencyName: 'h',
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
                    mobileAgencyName: 'fh',
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
                    mobileAgencyName: 'f',
                    agencyID: 3,
                    discountTotal: 1000,
                    totalDueBeforeDiscount: 3333,
                    totalDueAfterDiscount: 9999,
                    discountProgram: 'frp fake',
                    excusalCode: 'excusal fake',
                    programFees: 123,
                    paymentAmount: 0
                }]);
            expect((component.plateContainer.plate.agencies[0] as any).isChecked).toEqual(false);
            expect(component['recalculatePlateContainerValues']).toHaveBeenCalledTimes(1);
        });

        it('should set unpaidAgencies to agencies with totalDueBeforeDiscount above 0', () => {

            frameComponent.getPlateContainer.and.returnValue({
                plate: {
                    licenseState: 'fake licenseState',
                    licensePlate: 'fake licensePlate',
                    isNewEzTagAccountEligibile: true,
                    discountProgramCode: 0,
                    invoices: Array(51).fill({ key: 'hello' }),
                    uninvoicedViolations: Array(51).fill({ key: 'world' }),
                    previouslyPaidInvoices: [{} as ViolationInvoice],
                    agencies: [
                        {
                            agencyName: 'hctra',
                            mobileAgencyName: 'h',
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
                            mobileAgencyName: 'fh',
                            agencyID: 2,
                            discountTotal: 1000,
                            totalDueBeforeDiscount: 0,
                            totalDueAfterDiscount: 0,
                            discountProgram: 'frp fake',
                            excusalCode: 'excusal fake',
                            programFees: 123,
                            paymentAmount: 0
                        }
                    ]
                }
            } as any);
            component.discountPerAgencyAvailable = true;
            (component['getShowDiscountPage'] as jasmine.Spy).and.returnValue(true);
            component.ngOnInit();

            expect(component.unpaidAgencies).toEqual([component.plateContainer.plate.agencies[0]]);
        });

        [
            {
                discountToggle: false,
                discountCode: 0,
                discountStringArray: [],
                words: 'not'
            },
            {
                discountToggle: false,
                discountCode: 0,
                discountStringArray: [{ discountProgram: 'CFDP' } as AgencyInformation],
                words: 'not'
            },
            {
                discountToggle: false,
                discountCode: 1,
                discountStringArray: [],
                words: 'not'
            },
            {
                discountToggle: false,
                discountCode: 1,
                discountStringArray: [{ discountProgram: 'CFDP' } as AgencyInformation],
                words: 'not'
            },
            {
                discountToggle: true,
                discountCode: 0,
                discountStringArray: [],
                words: 'not'
            },
            {
                discountToggle: true,
                discountCode: 0,
                discountStringArray: [{ discountProgram: 'CFDP' } as AgencyInformation],
                words: ''
            },
            {
                discountToggle: true,
                discountCode: 1,
                discountStringArray: [],
                words: 'not'
            },
            {
                discountToggle: true,
                discountCode: 1,
                discountStringArray: [{ discountProgram: 'CFDP' } as AgencyInformation],
                words: 'not'
            },
            {
                discountToggle: true,
                discountCode: 0,
                discountStringArray: [
                    { discountProgram: 'CFDP' } as AgencyInformation,
                    { discountProgram: 'doesntmatter' } as AgencyInformation
                ],
                words: ''
            },
        ].forEach(({ discountToggle, discountCode, discountStringArray, words }) => {

            it(`should ${words} set discountCmsData to discount array program value when discountToggle is ${discountToggle},
                discount code is ${discountCode}, and the array is length ${discountStringArray.length}`, async () => {

                component.cmsData.Children = [
                    {
                        LongDescription: 'fake long description aik',
                        DISCOUNT_ENUM: '1',
                        DISCOUNT_STRING: 'FRP',
                        Children: [{
                            ItemName: 'Summary',
                            ShortDescription: 'FRP short description',
                            LongDescription: 'FRP long description'
                        },
                        {
                            ItemName: 'Important Reminder',
                            ShortDescription: 'child short description'
                        }]
                    },
                    {
                        LongDescription: 'fake long description 9',
                        DISCOUNT_ENUM: '9',
                        DISCOUNT_STRING: 'CFDP',
                        Children: [{
                            ItemName: 'Summary',
                            ShortDescription: 'CFDP short description',
                            LongDescription: 'CFDP long description'
                        },
                        {
                            ItemName: 'Important Reminder',
                            ShortDescription: 'child important reminder'
                        }]
                    }] as any;
                component.discountPerAgencyAvailable = discountToggle;
                frameComponent.getPlateContainer.and.returnValue({
                    plate: {
                        licenseState: 'fake licenseState',
                        licensePlate: 'fake licensePlate',
                        discountProgramCode: discountCode,
                        invoices: [],
                        uninvoicedViolations: [],
                        previouslyPaidInvoices: [],
                        secondCall: true,
                        agencies: discountStringArray
                    }
                } as any);

                component.ngOnInit();

                if (words === 'not' && discountCode === 1) {
                    expect(component.discountCmsData.LongDescription).toEqual(component.cmsData.Children[0].LongDescription);
                }
                else if (words === 'not' && discountCode === 0) {
                    expect(component.discountCmsData).toBeUndefined();
                }
                else {
                    expect(component.discountCmsData.LongDescription).toEqual(component.cmsData.Children[1].LongDescription);
                }
            });
        });

        it('should set agency payment amounts to 0', async () => {
            frameComponent.getPlateContainer.and.returnValue({
                plate: {
                    licenseState: 'fake licenseState',
                    licensePlate: 'fake licensePlate',
                    isNewEzTagAccountEligibile: true,
                    discountProgramCode: 0,
                    invoices: Array(51).fill({ key: 'hello' }),
                    uninvoicedViolations: Array(51).fill({ key: 'world' }),
                    previouslyPaidInvoices: [{} as ViolationInvoice],
                    agencies: [
                        {
                            agencyName: 'hctra',
                            mobileAgencyName: 'h',
                            agencyID: 1,
                            discountTotal: 1000,
                            totalDueBeforeDiscount: 1111,
                            totalDueAfterDiscount: 9999,
                            discountProgram: 'frp fake',
                            excusalCode: 'excusal fake',
                            programFees: 123,
                            paymentAmount: 1000
                        },
                        {
                            agencyName: 'fake hctra',
                            mobileAgencyName: 'fh',
                            agencyID: 2,
                            discountTotal: 1000,
                            totalDueBeforeDiscount: 0,
                            totalDueAfterDiscount: 0,
                            discountProgram: 'frp fake',
                            excusalCode: 'excusal fake',
                            programFees: 123,
                            paymentAmount: 1234
                        }
                    ]
                }
            } as any);
            component.discountPerAgencyAvailable = true;
            (component['getShowDiscountPage'] as jasmine.Spy).and.returnValue(true);

            await component.ngOnInit();

            expect(component.plateContainer.plate.agencies[0].paymentAmount).toBe(0);
            expect(component.plateContainer.plate.agencies[1].paymentAmount).toBe(0);

        });
    });

    describe('goToNextWhenPaymentAmountValid', () => {

        beforeEach(() => {

            spyOn(component, 'goToNextState').and.returnValue(null);
        });

        [0.01, 1, 2.5, 100, 3010].forEach(totalSelected => {

            it('should call goToNextState with targetState when totalSelectedValid', async () => {

                component.plateContainer = { plate: { totalSelected } } as any;
                component.cmsData = { TOAST_NO_INVOICES_SELECTED: 'fake toast message' } as any;

                await component.goToNextWhenPaymentAmountValid('fakeTargetState');

                expect(component.goToNextState).toHaveBeenCalledTimes(1);
                expect(component.goToNextState).toHaveBeenCalledWith('fakeTargetState');
            });
        });

        [0.009, 0, -5].forEach(totalSelected => {

            it('should not call goToNextState with targetState when totalSelectedValid false', async () => {

                component.plateContainer = { plate: { totalSelected } } as any;
                component.cmsData = { TOAST_NO_INVOICES_SELECTED: 'fake toast message' } as any;

                await component.goToNextWhenPaymentAmountValid('fakeTargetState');

                expect(component.goToNextState).toHaveBeenCalledTimes(0);
            });
        });

        [0.01, 1, 2.5, 100, 3010].forEach(totalSelected => {

            it('should not call toaster display when totalSelectedValid', async () => {

                component.plateContainer = { plate: { totalSelected } } as any;
                component.cmsData = { TOAST_NO_INVOICES_SELECTED: 'fake toast message' } as any;

                await component.goToNextWhenPaymentAmountValid('fakeTargetState');

                expect(toasterService.show).toHaveBeenCalledTimes(0);
            });
        });

        [0.009, 0, -5].forEach(totalSelected => {

            it('should call toaster display when totalSelectedValid false', async () => {

                component.plateContainer = { plate: { totalSelected } } as any;
                component.cmsData = { TOAST_NO_INVOICES_SELECTED: 'fake toast message' } as any;

                await component.goToNextWhenPaymentAmountValid('fakeTargetState');

                expect(toasterService.show).toHaveBeenCalledTimes(1);
                expect(toasterService.show).toHaveBeenCalledWith('Success', 'fake toast message');
            });
        });
    });

    describe('savePlateContainer', () => {

        [
            {
                showDiscountPage: false,
                discountPerAgency: false,
                partialPayments: true,
                paymentAmount: 91122,
                remainingBalance: 911222,
                violationsFlowName: 'OLVPS',
                plate: {
                    someProp: 'fakeProp1', totalSelected: 91122,
                    plateDueBeforeDiscount: 911222, remainingBalance: 911222, serviceFee: 5
                }
            },
            {
                showDiscountPage: true,
                discountPerAgency: false,
                partialPayments: false,
                paymentAmount: 123,
                remainingBalance: 0,
                violationsFlowName: 'fake discount name',
                plate: {
                    agencies: [],
                    someProp: 'fakeProp2', totalSelected: 221,
                    plateDueBeforeDiscount: 22111, remainingBalance: 22111, serviceFee: 5,
                    totalPaymentAmount: 123
                }
            },
            {
                showDiscountPage: true,
                discountPerAgency: true,
                partialPayments: false,
                paymentAmount: 226,
                remainingBalance: 22111,
                violationsFlowName: 'fake discount name',
                plate: {
                    agencies: [],
                    someProp: 'fakeProp2', totalSelected: 221,
                    plateDueBeforeDiscount: 22111, remainingBalance: 22111, serviceFee: 5
                }
            },
            {
                showDiscountPage: false,
                discountPerAgency: true,
                partialPayments: true,
                paymentAmount: 91122,
                remainingBalance: 911222,
                violationsFlowName: 'OLVPS',
                plate: {
                    someProp: 'fakeProp1', totalSelected: 91122,
                    plateDueBeforeDiscount: 911222, remainingBalance: 911222, serviceFee: 5
                }
            }
        ].forEach(({ showDiscountPage, discountPerAgency, partialPayments, paymentAmount, remainingBalance, violationsFlowName, plate }) => {

            it('should call webStorage.setKeyValue with plateContainerWithDiscount', async () => {

                component.plateContainer = {
                    plate
                } as any;

                component.selectedAgenciesToPay = component.plateContainer.plate.agencies;
                component.showDiscountPage = showDiscountPage;
                component.discountPerAgencyAvailable = discountPerAgency;
                component.discountCmsData = { ItemName: 'fake discount name' } as any;

                await component['savePlateContainer']();

                expect(webStorage.setKeyValue).toHaveBeenCalledTimes(1);
                expect(webStorage.setKeyValue).toHaveBeenCalledWith(webStorageConst.enhancedViolationsPlateAndInvoiceData, {
                    plate,
                    partialPayments,
                    paymentAmount,
                    remainingBalance,
                    violationsFlowName
                });
            });
        });

        it('should delete isChecked attribute per agency if showDiscountPage is true', async () => {

            component.plateContainer = {
                plate: {
                    agencies: [{ isChecked: true }],
                    someProp: 'fakeProp2', totalSelected: 221,
                    plateDueBeforeDiscount: 22111, remainingBalance: 22111
                }
            } as any;

            component.selectedAgenciesToPay = component.plateContainer.plate.agencies;
            component.showDiscountPage = true;
            component.discountPerAgencyAvailable = true;
            component.discountCmsData = { ItemName: 'fake discount name' } as any;

            await component['savePlateContainer']();

            expect((component.plateContainer.plate.agencies[0] as any).isChecked).toBeUndefined();
        });

        it('should set selectedAgencies paymentAmount to totalDueAfterDiscount and all others to 0', async () => {
            const agencyInfo1 = { paymentAmount: 0, totalDueAfterDiscount: 100 } as any;
            const agencyInfo2 = { paymentAmount: 0, totalDueAfterDiscount: 200 } as any;
            component.plateContainer = {
                plate: {
                    agencies: [agencyInfo1, agencyInfo2],
                    someProp: 'fakeProp2', totalSelected: 221,
                    plateDueBeforeDiscount: 22111, remainingBalance: 22111
                }
            } as any;

            component.selectedAgenciesToPay = [component.plateContainer.plate.agencies[1]];
            component.showDiscountPage = true;
            component.discountPerAgencyAvailable = true;
            component.discountCmsData = { ItemName: 'fake discount name' } as any;

            await component['savePlateContainer']();

            expect(agencyInfo1.paymentAmount).toBe(0);
            expect(agencyInfo2.paymentAmount).toBe(200);
        });
    });

    describe('goToNextState', () => {

        it('should call savePlateContainer', async () => {

            spyOn(component as any, 'savePlateContainer');

            component.plateContainer = { plate: { someProp: 'fakeProp' } } as any;

            await component.goToNextState('fakeTargetState');

            expect(component['savePlateContainer']).toHaveBeenCalledTimes(1);
        });

        it('should call state.go with targetState', async () => {

            component.plateContainer = { plate: { someProp: 'fakeProp' } } as any;

            await component.goToNextState('fakeTargetState');

            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith('fakeTargetState', { billingInfo: 'fake billing info' });
        });
    });

    describe('showDiscount', () => {

        let savePlateContainerSpy;

        beforeEach(() => {

            spyOn(component, 'goToPreviousState').and.returnValue(null);
            spyOn(component as any, 'getDiscountTitle').and.returnValue('fake discount title');
            savePlateContainerSpy = spyOn(component as any, 'savePlateContainer');
        });

        [
            [undefined, false],
            [{}, true]
        ].forEach(([discountCmsData, showDiscountPage]) => {

            it('should set showDiscountPage to true when discountCmsData truthy', async () => {

                component.discountCmsData = discountCmsData as any;
                component.showDiscountPage = 'some fake val' as any;

                await component.showDiscount('fakeTargetState');

                expect(component.showDiscountPage).toBe(showDiscountPage || 'some fake val' as any);
            });
        });

        [
            [undefined, undefined],
            [{}, 'fake discount title']
        ].forEach(([discountCmsData, discountTitle]) => {

            it('should call frameComponent.setTitle with discountTitle when discountCmsData truthy', async () => {

                component.discountCmsData = discountCmsData as any;
                component.showDiscountPage = 'some fake val' as any;

                await component.showDiscount('fakeTargetState');


                expect(frameComponent.setTitle).toHaveBeenCalledTimes(discountTitle ? 1 : 0);

                if (discountTitle) {
                    expect(frameComponent.setTitle).toHaveBeenCalledWith('fake discount title');
                }
            });
        });

        [
            [undefined, false],
            [{}, true]
        ].forEach(([discountCmsData, shouldCallScrollToTop]) => {

            it('should call frameComponent.scrollToTop when discountCmsData truthy', async () => {

                component.discountCmsData = discountCmsData as any;
                component.showDiscountPage = 'some fake val' as any;

                await component.showDiscount('fakeTargetState');


                expect(frameComponent.scrollToTop).toHaveBeenCalledTimes(shouldCallScrollToTop ? 1 : 0);

                if (shouldCallScrollToTop) {
                    expect(frameComponent.scrollToTop).toHaveBeenCalledWith();
                }
            });
        });

        [
            [undefined, false],
            [{}, true]
        ].forEach(([discountCmsData, shouldSavePlateContainer]) => {

            it('should call savePlateContainer when discountCmsData truthy', async () => {

                component.discountCmsData = discountCmsData as any;
                savePlateContainerSpy.and.callFake(() => !component.showDiscountPage && fail('showDiscountPage not set'));

                await component.showDiscount('fakeTargetState');

                expect(component['savePlateContainer']).toHaveBeenCalledTimes(shouldSavePlateContainer ? 1 : 0);

                if (shouldSavePlateContainer) {
                    expect(component['savePlateContainer']).toHaveBeenCalledWith();
                }
            });
        });

        it('should call goToPreviousState when discountCmsData falsy', async () => {

            component.discountCmsData = undefined;

            await component.showDiscount('fakeTargetState');

            expect(component.goToPreviousState).toHaveBeenCalledTimes(1);
            expect(component.goToPreviousState).toHaveBeenCalledWith('fakeTargetState');
        });

        it('should not call goToPreviousState when discountCmsData truthy', async () => {

            component.discountCmsData = {} as any;

            await component.showDiscount('fakeTargetState');

            expect(component.goToPreviousState).toHaveBeenCalledTimes(0);
        });
    });

    describe('hideDiscount', () => {

        let savePlateContainerSpy;

        beforeEach(() => {

            component.cmsData = { Title: 'fake title' } as any;
            component.showDiscountPage = 'initial' as any;
            savePlateContainerSpy = spyOn(component as any, 'savePlateContainer');
        });

        it('should call savePlateContainer', async () => {

            savePlateContainerSpy.and.callFake(() => component.showDiscountPage && fail('showDiscountPage not set to false'));

            await component.hideDiscount();

            expect(component['savePlateContainer']).toHaveBeenCalledTimes(1);
        });

        it('should set showDiscountPage to false', async () => {

            await component.hideDiscount();

            expect(component.showDiscountPage).toBe(false);
        });

        it('should call frameComponent.setTitle with to cmsData.title', async () => {

            await component.hideDiscount();

            expect(frameComponent.setTitle).toHaveBeenCalledTimes(1);
            expect(frameComponent.setTitle).toHaveBeenCalledWith('fake title');
        });

        it('should call frameComponent.scrollToTop', async () => {

            await component.hideDiscount();

            expect(frameComponent.scrollToTop).toHaveBeenCalledTimes(1);
            expect(frameComponent.scrollToTop).toHaveBeenCalledWith();
        });

        it('should set selectedAgenciesToPay to []', async () => {
            component.selectedAgenciesToPay = [{} as AgencyInformation];

            await component.hideDiscount();

            expect(component.selectedAgenciesToPay).toEqual([]);
        });

        it('should call this.recalculatePlateContainerValues()', async () => {

            await component.hideDiscount();

            expect(component['recalculatePlateContainerValues']).toHaveBeenCalledTimes(1);
        });
    });

    describe('goToPreviousState', () => {

        beforeEach(() => {

            spyOn(component as any, 'savePlateContainer');
        });
        [true, false].forEach(isNewEzTagAccountEligibile => {

            it('should call savePlateContainer', async () => {

                component.plateContainer = { plate: { isNewEzTagAccountEligibile } } as any;

                await component.goToPreviousState('fakeTargetState');

                expect(component['savePlateContainer']).toHaveBeenCalledTimes(1);
            });
        });

        it('should call state.go with targetState when isNewEzTagAccountEligibile false', async () => {

            component.plateContainer = { plate: { isNewEzTagAccountEligibile: false } } as any;

            await component.goToPreviousState('fakeTargetState');

            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith('fakeTargetState');
        });

        it('should call state.go with cavveStates.Offer when isNewEzTagAccountEligibile', async () => {

            component.plateContainer = { plate: { isNewEzTagAccountEligibile: true } } as any;

            await component.goToPreviousState('fakeTargetState');

            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith(cavveStates.Offer);
        });
    });

    describe('updateViolationsDetailsTable', () => {
        it('should create a new paginated plate while maintaining object references', async () => {
            component.plateContainer = {
                plate: {} as ViolationPlate
            } as ViolationPlateContainer;
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
                plate: {} as ViolationPlate
            } as ViolationPlateContainer;

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
});
