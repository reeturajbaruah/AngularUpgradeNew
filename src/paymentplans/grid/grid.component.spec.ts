import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StateService } from '@uirouter/angular';
import { CommonModule as HctraCommonModule } from 'common/module';
import { DialogService, ResponseErrorService } from 'common/services';
import { SpinnerService } from 'common/ui';
import { StateNames, UrlPaths } from 'constants/module';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { CmsUtilService } from '../../cms/services';
import { PaymentPlansStateNames } from '../constants';
import { FrameComponent } from '../frame/frame.component';
import { PlateSearchResponse } from '../interfaces';
import { PaymentPlanData, PaymentPlanInfo, PlateDataService } from '../services';
import { WebApiService } from '../services/webApi.service';
import { GridComponent } from './grid.component';


describe('PaymentPlanGridComponent', () => {
    let fixture: ComponentFixture<GridComponent>;
    let component: GridComponent;

    let parent: FrameComponent;
    let dataService: PlateDataService;
    let dialogService: DialogService;
    let routes: UrlPaths;
    let paymentPlanApi: WebApiService;
    let state: StateService;
    let stateNames: StateNames;
    let paymentPlansStateNames: PaymentPlansStateNames;
    let cmsUtilService: CmsUtilService;
    let responseErrorService: ResponseErrorService;
    let spinnerService: SpinnerService;

    beforeEach((() => {
        routes = new UrlPaths();
        stateNames = new StateNames();
        paymentPlansStateNames = new PaymentPlansStateNames();


        state = jasmine.createSpyObj('state', ['go']);
        parent = jasmine.createSpyObj('FrameComponent', ['scrollToTop']);
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderFilled']);
        dataService = jasmine.createSpyObj('PlateDataService', ['resetPlanDataInfo', 'getPlanDataInfo', 'getActive',
            'getInactive', 'resetSelectedPlan', 'setPaymentPlans', 'toggleCurrentPlan', 'storePlan']);
        paymentPlanApi = jasmine.createSpyObj('WebApiService', ['ezTagSearchPaymentPlans']);
        cmsUtilService = jasmine.createSpyObj('CmsUtilService', ['generateFileSrc']);
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree']);
        spinnerService = jasmine.createSpyObj('spinnerService', ['startSpinner', 'stopSpinner']);


        TestBed
            .configureTestingModule({
                declarations: [GridComponent],
                imports: [HctraCommonModule, PipesModule, FormsModule],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: PlateDataService, useFactory: () => dataService },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: UrlPaths, useFactory: () => routes },
                    { provide: WebApiService, useFactory: () => paymentPlanApi },
                    { provide: StateService, useFactory: () => state },
                    { provide: StateNames, useFactory: () => stateNames },
                    { provide: PaymentPlansStateNames, useFactory: () => paymentPlansStateNames },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                    { provide: SpinnerService, useFactory: () => spinnerService }
                ],
                //this will allow for nested components to be ignored. 
                //use when you don't need to interact with the sub component in the tests
                schemas: [NO_ERRORS_SCHEMA]
            })
            .compileComponents();

        fixture = TestBed.createComponent(GridComponent);
        component = fixture.debugElement.componentInstance;

        parent.planData = {
            billingMethod: {
                eftPaymentMethod: {
                    accountType: null,
                    name: null,
                    routingNumber: null,
                    accountNumber: null,
                    address1: null,
                    city: null,
                    country: null
                },
                creditCardPaymentMethod: {
                    cardCode: null,
                    cardNbr: null,
                    expMonth: null,
                    expYear: null,
                    nameOnCard: null,
                    address1: null,
                    city: null,
                    country: null
                },
                address: {
                    address1: null,
                    city: null,
                    country: null
                }
            },
            selectedPaymentPlan: {
                paymentPlanId: null,
                settlementAmount: null,
                discountAmount: null,
                paidAmount: null,
                balanceAmount: null,
                status: null,
                agency: null,
                mobileAgency: null,
                nextInstallmentAmount: null,
                nextInstallmentDate: null,
                nextUpcomingInstallmentDate: null,
                billingMethod: null
            },
            paymentAmount: null,
            addAccountFunds: null,
            addAccountFundsAmount: null
        };

        (dataService.getPlanDataInfo as jasmine.Spy).and.returnValue({
            billingMethod: {
                eftPaymentMethod: {
                    accountType: null,
                    name: null,
                    routingNumber: null,
                    accountNumber: null,
                    address1: null,
                    city: null,
                    country: null
                },
                creditCardPaymentMethod: {
                    cardCode: null,
                    cardNbr: null,
                    expMonth: null,
                    expYear: null,
                    nameOnCard: null,
                    address1: null,
                    city: null,
                    country: null
                },
                address: {
                    address1: null,
                    city: null,
                    country: null
                }
            },
            selectedPaymentPlan: {
                paymentPlanId: null,
                settlementAmount: null,
                discountAmount: null,
                paidAmount: null,
                balanceAmount: null,
                status: null,
                agency: null,
                nextInstallmentAmount: null,
                nextInstallmentDate: null,
                nextUpcomingInstallmentDate: null,
                billingMethod: null
            },
            paymentAmount: 20,
            addAccountFunds: null,
            addAccountFundsAmount: null
        });
        (dataService.getActive as jasmine.Spy).and.returnValue([
            {
                paymentPlans: [{
                    paymentPlanId: 123456,
                    settlementAmount: 50,
                    discountAmount: 5,
                    paidAmount: 10,
                    balanceAmount: 20,
                    status: null,
                    agency: null,
                    nextInstallmentAmount: null,
                    nextInstallmentDate: null,
                    nextUpcomingInstallmentDate: null,
                    billingMethod: {
                        eftPaymentMethod: {
                            accountType: null,
                            name: null,
                            routingNumber: null,
                            accountNumber: null,
                            address1: null,
                            city: null,
                            country: null
                        },
                        creditCardPaymentMethod: {
                            cardCode: null,
                            cardNbr: null,
                            expMonth: null,
                            expYear: null,
                            nameOnCard: null,
                            address1: null,
                            city: null,
                            country: null
                        },
                        address: {
                            address1: null,
                            city: null,
                            country: null
                        }
                    }
                }],
                licPlateNumber: 'ABC123',
                licPlateState: 'TX',
                isActive: true
            }
        ]);
        (dataService.getInactive as jasmine.Spy).and.returnValue([
            {
                paymentPlans: [{
                    paymentPlanId: 99999,
                    settlementAmount: 50,
                    discountAmount: 5,
                    paidAmount: 10,
                    balanceAmount: 20,
                    status: null,
                    agency: null,
                    nextInstallmentAmount: null,
                    nextInstallmentDate: null,
                    nextUpcomingInstallmentDate: null,
                    billingMethod: {
                        eftPaymentMethod: {
                            accountType: null,
                            name: null,
                            routingNumber: null,
                            accountNumber: null,
                            address1: null,
                            city: null,
                            country: null
                        },
                        creditCardPaymentMethod: {
                            cardCode: null,
                            cardNbr: null,
                            expMonth: null,
                            expYear: null,
                            nameOnCard: null,
                            address1: null,
                            city: null,
                            country: null
                        },
                        address: {
                            address1: null,
                            city: null,
                            country: null
                        }
                    }
                }],
                licPlateNumber: 'CAB987',
                licPlateState: 'TX',
                isActive: true
            }
        ]);
        (dataService.resetSelectedPlan as jasmine.Spy).and.returnValue({
            paymentPlanId: 9999,
            settlementAmount: null,
            discountAmount: null,
            paidAmount: null,
            balanceAmount: null,
            status: null,
            agency: null,
            nextInstallmentAmount: null,
            nextInstallmentDate: null,
            nextUpcomingInstallmentDate: null,
            billingMethod: null
        });
    }));

    describe('canary', () => {
        it('should pass', async () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        beforeEach(() => {
            (cmsUtilService.generateFileSrc as jasmine.Spy).and.returnValue({});
            component.cmsContent = {
                Children: [
                    {
                        LongDescription: 'Child0LongDescription',
                        passedDueTemplate: 'passedDueTemplateTest'
                    }, {
                        LongDescription: 'Child1LongDescription',
                        ShortDescription: 'Child1ShortDescription',
                        BalanceDue: 'Child1BalanceDue',
                        PaidAmount: 'Child1PaidAmount',
                        SettlementAmount: 'Child1SettlementAmount'
                    }, {
                        Title: 'Child2Title',
                        LongDescription: 'Child2LongDescription',
                    }, {
                        Image: 'Default'
                    }, {
                        ShortDescription: 'Child4ShortDescription',
                        pdfDownloaded: 'Child4pdfDownloaded',
                        pdfError: 'Child4pdfError',
                        pdfProcessing: 'Child4pdfProcessing'
                    }
                ],
                ShortDescription: 'ShortTest',
                LongDescription: 'LongDescription Test'
            };
        });
       
        it('should parse Info for EZTAGFLOW', async () => {
            component.isEzTagFlow = true;
            (paymentPlanApi.ezTagSearchPaymentPlans as jasmine.Spy).and.resolveTo({
                plates: [{
                    activePaymentPlans: [],
                    inactivePaymentPlans: [],
                    licPlateNumber: 'ABC123',
                    licPlateState: 'TX'
                }]
            });

            component.ngOnInit();

            expect(paymentPlanApi.ezTagSearchPaymentPlans).toHaveBeenCalledTimes(1);
        });
    });

    describe('planData', () => {
        it('should return', async () => {
            const testObject: PaymentPlanData = {
                billingMethod: {
                    eftPaymentMethod: {
                        accountType: null,
                        name: null,
                        routingNumber: null,
                        accountNumber: null,
                        address1: null,
                        city: null,
                        country: null
                    },
                    creditCardPaymentMethod: {
                        cardCode: null,
                        cardNbr: null,
                        expMonth: null,
                        expYear: null,
                        nameOnCard: null,
                        address1: null,
                        city: null,
                        country: null
                    },
                    address: {
                        address1: null,
                        city: null,
                        country: null
                    }
                },
                selectedPaymentPlan: {
                    paymentPlanId: null,
                    settlementAmount: null,
                    discountAmount: null,
                    paidAmount: null,
                    balanceAmount: null,
                    status: null,
                    agency: null,
                    mobileAgency: null,
                    nextInstallmentAmount: null,
                    nextInstallmentDate: null,
                    nextUpcomingInstallmentDate: null,
                    billingMethod: null
                },
                paymentAmount: 20,
                addAccountFunds: null,
                addAccountFundsAmount: null
            };
            component.planData = testObject;
            const result = component.planData;
            expect(result.paymentAmount).toEqual(20);
        });
    });

    describe('onClickGrid', () => {
        it('should return', async () => {
            (dataService.toggleCurrentPlan as jasmine.Spy).and.returnValue({
                paymentPlanId: 123456,
                settlementAmount: null,
                discountAmount: null,
                paidAmount: 19,
                balanceAmount: null,
                status: null,
                agency: null,
                nextInstallmentAmount: null,
                nextInstallmentDate: null,
                nextUpcomingInstallmentDate: null,
                billingMethod: null
            } as PaymentPlanInfo);

            component.onClickGrid(123456);
            expect(component.planData.selectedPaymentPlan.paidAmount).toEqual(19);
            expect(component.planData.selectedPaymentPlan.paymentPlanId).toEqual(123456);
        });
    });

    describe('selectPlan', () => {
        it('should return', async () => {
            const testObject = {
                paymentPlanId: 123456,
                settlementAmount: null,
                discountAmount: null,
                paidAmount: 19,
                balanceAmount: null,
                status: null,
                agency: null,
                nextInstallmentAmount: null,
                nextInstallmentDate: null,
                nextUpcomingInstallmentDate: null,
                billingMethod: null
            } as PaymentPlanInfo;
            component.activePlates = [
                {
                    paymentPlans: [{
                        paymentPlanId: 123456,
                        settlementAmount: 50,
                        discountAmount: 5,
                        paidAmount: 10,
                        balanceAmount: 20,
                        status: null,
                        agency: null,
                        mobileAgency: null,
                        nextInstallmentAmount: null,
                        nextInstallmentDate: null,
                        nextUpcomingInstallmentDate: null,
                        billingMethod: {
                            eftPaymentMethod: {
                                accountType: null,
                                name: null,
                                routingNumber: null,
                                accountNumber: null,
                                address1: null,
                                city: null,
                                country: null
                            },
                            creditCardPaymentMethod: {
                                cardCode: null,
                                cardNbr: null,
                                expMonth: null,
                                expYear: null,
                                nameOnCard: null,
                                address1: null,
                                city: null,
                                country: null
                            },
                            address: {
                                address1: null,
                                city: null,
                                country: null
                            }
                        }
                    }],
                    licPlateNumber: 'ABC123',
                    licPlateState: 'TX',
                    isActive: true
                }
            ];
            component.inactivePlates = [
                {
                    paymentPlans: [{
                        paymentPlanId: 99999,
                        settlementAmount: 50,
                        discountAmount: 5,
                        paidAmount: 10,
                        balanceAmount: 20,
                        status: null,
                        agency: null,
                        mobileAgency: null,
                        nextInstallmentAmount: null,
                        nextInstallmentDate: null,
                        nextUpcomingInstallmentDate: null,
                        billingMethod: {
                            eftPaymentMethod: {
                                accountType: null,
                                name: null,
                                routingNumber: null,
                                accountNumber: null,
                                address1: null,
                                city: null,
                                country: null
                            },
                            creditCardPaymentMethod: {
                                cardCode: null,
                                cardNbr: null,
                                expMonth: null,
                                expYear: null,
                                nameOnCard: null,
                                address1: null,
                                city: null,
                                country: null
                            },
                            address: {
                                address1: null,
                                city: null,
                                country: null
                            }
                        }
                    }],
                    licPlateNumber: 'CAB987',
                    licPlateState: 'TX',
                    isActive: true
                }
            ];

            component.selectPlan(testObject);
            expect(dataService.storePlan).toHaveBeenCalledWith(component.planData.selectedPaymentPlan, component.isEzTagFlow);
            expect(dataService.storePlan).toHaveBeenCalledTimes(1);
            expect(component.planData.selectedPaymentPlan.paymentPlanId).toEqual(123456);
        });
    });

    describe('processPaymentPlanSearch', () => {
        it('should return TRUE', async () => {
            const testResponse = {
                plates: [{
                    activePaymentPlans: [],
                    inactivePaymentPlans: [],
                    licPlateNumber: 'ABC123',
                    licPlateState: 'TX'
                }]
            } as PlateSearchResponse;

            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);

            component.processPaymentPlanSearch(testResponse);
            expect(dataService.setPaymentPlans).toHaveBeenCalledWith(testResponse, true);
            expect(dataService.setPaymentPlans).toHaveBeenCalledTimes(1);

        });

        it('should return FALSE when there is ERROR', async () => {
            const testResponse = {
                plates: [{
                    activePaymentPlans: [],
                    inactivePaymentPlans: [],
                    licPlateNumber: 'ABC123',
                    licPlateState: 'TX'
                }]
            } as PlateSearchResponse;

            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(false);
            try {
                component.processPaymentPlanSearch(testResponse);
            }
            catch (e) {
                expect(e).toBe(testResponse);
                expect(dataService.setPaymentPlans).toHaveBeenCalledTimes(0);
            }

        });
    });

    describe('processingPlans', () => {
        it('should return', async () => {
            component.isEzTagFlow = false;
            component.processingPlans();


            expect(dataService.resetPlanDataInfo).toHaveBeenCalledWith(component.isEzTagFlow);
            expect(dataService.resetPlanDataInfo).toHaveBeenCalledTimes(1);
            expect(component.planData.selectedPaymentPlan.paymentPlanId).toEqual(9999);
        });
    });
});
