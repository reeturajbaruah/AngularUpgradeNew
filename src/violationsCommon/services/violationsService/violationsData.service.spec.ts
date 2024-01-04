import { RawParams, StateService } from '@uirouter/angular';
import { stateNames as cavveStates } from 'cavve/constants';
import { DialogService, ResponseErrorService } from 'common/services';
import { ViolationsService } from './violationsService';
import { WebStorageConst } from 'constants/module';
import { } from 'jasmine';
import { stateNames as violationsStateNames } from 'violations/constants';
import { CreateAccountFromViolationsTotals, ViolationInvoice, ViolationPlate } from 'violations/interfaces';
import { NextState, ViolationsDataService } from './violationsData.service';
import { WebApisService } from '../webapi/webApis.service';
import { IPlateSearchResponse } from '../services.index';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { CmsReplacementService } from 'cms/services';
import { PlateDataService, WebApiService, StateService as PaymentPlanStateService } from 'paymentplans/services';
import { StorefrontModalService } from '../../../storefront/services/modal.service';

describe('violationsDataService', () => {

    let service: ViolationsDataService;
    let webStorage;
    let webStorageConst: WebStorageConst;
    let stateService: jasmine.SpyObj<StateService>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let webApisService: jasmine.SpyObj<WebApisService>;
    let violationsService: ViolationsService;
    let storefrontModalService: jasmine.SpyObj<StorefrontModalService>;
    let storefrontUtilityService: any;
    let authenticationService: jasmine.SpyObj<AuthenticationService>;
    let dialogService: jasmine.SpyObj<DialogService>;
    let cmsReplacementService: jasmine.SpyObj<CmsReplacementService>;
    let paymentPlanApi: jasmine.SpyObj<WebApiService>;
    let dataService: jasmine.SpyObj<PlateDataService>;
    let paymentPlanStateService: jasmine.SpyObj<PaymentPlanStateService>;
    let storefrontService: jasmine.SpyObj<any>;

    beforeEach(() => {
        webStorage = jasmine.createSpyObj('webStorage', ['setKeyValue', 'removeEntry', 'getValue']);
        webStorageConst = new WebStorageConst();
        webApisService = jasmine.createSpyObj('webApisService', ['searchForViolations', 'searchForViolationAcct']);
        storefrontModalService = jasmine.createSpyObj('storefrontModalService', ['noViolationsFound']);
        storefrontUtilityService = { webStoreData: null, accountLoggedInWorkItemIds: [], isRunningAsKiosk: false };
        storefrontService = jasmine.createSpyObj('storefrontService', ['startNewSession']);
        paymentPlanApi = jasmine.createSpyObj('paymentPlanApi', ['violationsPaymentPlansSearch']);
        dataService = jasmine.createSpyObj('dataService', ['setPaymentPlans']);
        paymentPlanStateService = jasmine.createSpyObj('paymentPlanStateService', ['saveStep']);

        violationsService = new ViolationsService();

        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayErrorsFromResponse', 'formatErrorMessages']);
        responseErrorService.isErrorFree.and.returnValue(true);

        stateService = jasmine.createSpyObj('stateService', ['go', 'get']);
        authenticationService = jasmine.createSpyObj('authenticationService', ['isAuthenticated']);
        dialogService = jasmine.createSpyObj('dialogService', ['openGenericModal']);
        cmsReplacementService = jasmine.createSpyObj('cmsReplacementService', ['transformTemplate']);

        service = new ViolationsDataService(
            webStorage,
            responseErrorService,
            storefrontModalService,
            storefrontUtilityService,
            storefrontService,
            stateService,
            webStorageConst,
            webApisService,
            violationsService,
            authenticationService,
            dialogService,
            cmsReplacementService,
            paymentPlanApi,
            dataService,
            paymentPlanStateService
        );
    });

    it('can create a service', () => {
        expect(service).toBeDefined();
    });
    describe('findViolations', () => {
        beforeEach(() => {
            spyOn(service as any, 'storeCreateAccountFromViolationsData').and.callFake(() => { });

            storefrontUtilityService.webStoreData = {
                selectedItemIds: []
            };
        });
        it('should call searchForViolationAcct with full request', async () => {
            //Assemble
            const fullRequest = {
                licenseState: 'TX',
                invoiceNumber: '1234567890',
                licensePlate: 'licPlate123'
            };

            webApisService.searchForViolationAcct.and.returnValue(
                new Promise((resolve, reject) => {
                    resolve(
                        { errors: [{ errorOne: 'an error message for errorOne' }] });
                }) as any
            );
            const paymentPlansModal = {
                AcceptBtn: '',
                CancelBtn: '',
                LongDescription: '',
                Title: '',
                ShortDescription: '',
                associatedPlatesTitle: ''
            };
            const violationLoginModal = {
                AcceptBtn: '',
                CancelBtn: '',
                LongDescription: '',
                Title: '',
                PAY_PLAN_TOOLTIP_LINK: '',
                PAY_PLAN_TOOLTIP_TEXT: '',
                PAY_PLAN_TOOLTIP_KIOSK_TEXT: ''
            };
            //Act
            await service.findViolationAcct(fullRequest, paymentPlansModal, violationLoginModal, null, true);

            //Assert
            expect(webApisService.searchForViolationAcct).toHaveBeenCalledTimes(1);
            expect(webApisService.searchForViolationAcct).toHaveBeenCalledWith(fullRequest as any);
        });
        it('should call searchForViolationAcct with empty invoice number', async () => {
            const fullRequest = {
                licenseState: 'TX',
                invoiceNumber: '',
                licensePlate: 'licPlate123'
            };

            webApisService.searchForViolationAcct.and.returnValue(
                new Promise((resolve, reject) => {
                    resolve(
                        { plate: { invoicesAndViolations: [] }, associatedPlates: [], alerts: {}, errors: [] });
                }) as any
            );

            const paymentPlansModal = {
                AcceptBtn: '',
                CancelBtn: '',
                LongDescription: '',
                Title: '',
                ShortDescription: '',
                associatedPlatesTitle: ''
            };
            const violationLoginModal = {
                AcceptBtn: '',
                CancelBtn: '',
                LongDescription: '',
                Title: '',
                PAY_PLAN_TOOLTIP_LINK: '',
                PAY_PLAN_TOOLTIP_TEXT: '',
                PAY_PLAN_TOOLTIP_KIOSK_TEXT: ''
            };
            //Act
            await service.findViolationAcct(fullRequest, paymentPlansModal, violationLoginModal);

            //Assert
            expect(webApisService.searchForViolationAcct).toHaveBeenCalledTimes(1);
            expect(webApisService.searchForViolationAcct).toHaveBeenCalledWith(fullRequest as any);
        });

        it('should call searchForViolationAcct with empty invoice number', async () => {
            const fullRequest = {
                licenseState: 'TX',
                invoiceNumber: '',
                licensePlate: 'licPlate123'
            };

            webApisService.searchForViolationAcct.and.returnValue(
                new Promise((resolve, reject) => {
                    resolve(
                        { plate: { invoicesAndViolations: [] }, associatedPlates: [], alerts: {}, errors: [] });
                }) as any
            );

            //Act
            await service.findViolationAcct(fullRequest, null, null, {
                to: '', params: { billingInfo: {} },
                options: { custom: { isExplicitlyAllowedTransition: true } }
            });

            //Assert
            expect(stateService.go).toHaveBeenCalledTimes(1);
        });
    });
    describe('findViolations', () => {

        beforeEach(() => {
            spyOn(service as any, 'storeCreateAccountFromViolationsData').and.callFake(() => { });

            storefrontUtilityService.webStoreData = {
                selectedItemIds: []
            };
        });

        it('should call violationsEnhancementGetData()', async () => {
            //Assemble
            const fullRequest = {
                licenseState: 'TX',
                invoiceNumber: '1234567890',
                licensePlate: 'licPlate123'
            };

            webApisService.searchForViolations.and.returnValue(
                new Promise((resolve, reject) => {
                    resolve(
                        { errors: [{ errorOne: 'an error message for errorOne' }] });
                }) as any
            );

            //Act
            await service.findViolations(fullRequest);

            //Assert
            expect(webApisService.searchForViolations).toHaveBeenCalledTimes(1);
            expect(webApisService.searchForViolations).toHaveBeenCalledWith(fullRequest as any);
        });

        it('should call responseErrorService.displayErrorsFromResponse() if errors > 0',
            async () => {

                //Assemble
                const fullRequest = {
                    licenseState: 'TX',
                    invoiceNumber: '1234567890',
                    licensePlate: 'licPlate123'
                };
                webApisService.searchForViolations.and.returnValue(
                    new Promise((resolve, reject) => {
                        resolve(
                            { errors: [{ errorOne: 'an error message for errorOne' }] });
                    }) as any
                );

                //Act
                await service.findViolations(fullRequest);

                //Assert
                expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledTimes(1);
                expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledWith({
                    errors: [{ errorOne: 'an error message for errorOne' }]
                } as any);
            }
        );

        it('should call storeCreateAccountFromViolationsData() & saveDiscountProgramGrid() if plate.isNewEzTagAccountEligibile is TRUE',
            async () => {
                //Assemble
                const fullRequest = {
                    licenseState: 'TX',
                    invoiceNumber: '1234567890',
                    licensePlate: 'licPlate123'
                };
                webApisService.searchForViolations.and.returnValue(
                    new Promise((resolve, reject) => {
                        resolve(
                            {
                                errors: [],
                                plate: { isNewEzTagAccountEligibile: true }
                            });
                    }) as any
                );

                //Act
                await service.findViolations(fullRequest);

                //Assert
                expect(service['storeCreateAccountFromViolationsData']).toHaveBeenCalledTimes(1);
                expect(service['storeCreateAccountFromViolationsData']).toHaveBeenCalledWith({
                    isNewEzTagAccountEligibile: true, invoices: [], previouslyPaidInvoices: [], uninvoicedViolations: []
                } as ViolationPlate);
            }
        );

        it('should call storeDataForViolationsGrid()', async () => {
            //Assemble
            const fullRequest = {
                licenseState: 'TX',
                invoiceNumber: '1234567890',
                licensePlate: 'licPlate123'
            };

            spyOn(service as any, 'storeDataForViolationsGrid').and.returnValue({});
            webApisService.searchForViolations.and.returnValue(
                new Promise((resolve, reject) => {
                    resolve(
                        {
                            errors: [],
                            plate: { isNewEzTagAccountEligibile: true }
                        });
                }) as any
            );

            //Act
            await service.findViolations(fullRequest);

            //Assert
            expect(service['storeDataForViolationsGrid']).toHaveBeenCalledTimes(1);
            expect(service['storeDataForViolationsGrid']).toHaveBeenCalledWith({
                errors: [],
                plate: {
                    isNewEzTagAccountEligibile: true,
                    invoices: [], previouslyPaidInvoices: [],
                    uninvoicedViolations: []
                } as ViolationPlate
            } as IPlateSearchResponse);
        });

        [
            //{ nextState: '', runCreateAccountFlow: true }
            { nextState: () => cavveStates.Offer, runCreateAccountFlow: true, isRunningKiosk: false },
            { nextState: () => violationsStateNames.Grid, runCreateAccountFlow: false, isRunningKiosk: false },
            { nextState: () => cavveStates.Offer, runCreateAccountFlow: true, isRunningKiosk: true },
            { nextState: () => violationsStateNames.Grid, runCreateAccountFlow: false, isRunningKiosk: true }
        ].forEach(({ nextState, runCreateAccountFlow, isRunningKiosk }) => {
            it(`should call state.go() with correct state if plate.isNewEzTagAccountEligibile is ${runCreateAccountFlow} and isRunningKiosk is ${isRunningKiosk}`, async () => {
                //Assemble
                storefrontUtilityService.isRunningAsKiosk = isRunningKiosk;

                const fullRequest = {
                    licenseState: 'TX',
                    invoiceNumber: '1234567890',
                    licensePlate: 'licPlate123'
                };
                spyOn(service as any, 'storeDataForViolationsGrid').and.callFake(() => { });
                webApisService.searchForViolations.and.returnValue(
                    new Promise((resolve, reject) => {
                        resolve(
                            {
                                errors: [],
                                plate: { isNewEzTagAccountEligibile: runCreateAccountFlow }
                            });
                    }) as any
                );

                //Act
                await service.findViolations(fullRequest);

                //Assert
                expect(stateService.go).toHaveBeenCalledTimes(1);
                expect(stateService.go).toHaveBeenCalledWith(nextState(), {}, { custom: { isExplicitlyAllowedTransition: true } });
            });
        });

        [false, true].forEach(runCreateAccountFlow => {

            it(`should call goToNextState with runCreateAccountFlow and next state`, async () => {
                //Assemble
                const fullRequest = {
                    licenseState: 'TX',
                    invoiceNumber: '1234567890',
                    licensePlate: 'licPlate123'
                };
                spyOn(service as any, 'storeDataForViolationsGrid').and.callFake(() => { });
                webApisService.searchForViolations.and.returnValue(
                    new Promise((resolve, reject) => {
                        resolve(
                            {
                                errors: [],
                                plate: { isNewEzTagAccountEligibile: runCreateAccountFlow }
                            });
                    }) as any
                );
                spyOn(service as any, 'goToNextState').and.returnValue({});
                const nextState = {} as NextState;
                //Act
                await service.findViolations(fullRequest, nextState);

                //Assert
                expect(service['goToNextState']).toHaveBeenCalledTimes(1);
                expect(service['goToNextState']).toHaveBeenCalledWith(runCreateAccountFlow, nextState);
            });
        });

    });

    describe('goToNextState', () => {

        [false, true].forEach((runCreateAccountFlow) => {

            it('should call state.go with nextState when it is not falsy', async () => {
                const nextState = {
                    to: 'fake to', params: {} as RawParams, options: 'fake options'
                } as NextState;
                await service['goToNextState'](
                    runCreateAccountFlow,
                    nextState);

                expect(stateService.go).toHaveBeenCalledWith(nextState.to, nextState.params, nextState.options);
            });
        });

        [
            { nextState: cavveStates.Offer, runCreateAccountFlow: true },
            { nextState: violationsStateNames.Grid, runCreateAccountFlow: false }
        ].forEach(({ nextState, runCreateAccountFlow }) => {

            it(`should call state.go with ${nextState} when runCreateAccountFlow ${runCreateAccountFlow}`, async () => {

                await service['goToNextState'](runCreateAccountFlow, undefined);

                expect(stateService.go).toHaveBeenCalledWith(nextState, {}, { custom: { isExplicitlyAllowedTransition: true } });
            });
        });

    });

    describe('storeDataForViolationsGrid', () => {
        it('should call webStorage.setKeyValue() 1 time', () => {
            //Assemble
            webStorage.setKeyValue.and.callFake(() => { });

            const response: IPlateSearchResponse = {
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
                    previouslyPaidInvoices: [],
                    invoices: [],
                    uninvoicedViolations: [],
                    discountProgramCode: 123,
                    violatorID: 123,
                    totalFeesDiscounted: 123,
                    serviceFee: 123,
                    plateDueAfterDiscount: 123,
                    plateDueBeforeDiscount: 123,
                    isNewEzTagAccountEligibile: true,
                    newEzTagAccountDiscount: 123,
                    newEzTagAccountStartingBalance: 123,
                    newEzTagAccountEZTagFee: 123,
                    newEzTagAccountPlateTotal: 123,
                    hasPaymentPlan: true,
                    licensePlate: '',
                    licenseState: '',
                    totalPaymentAmount: 123,
                    totalUninvoicedAmount: 123,
                    totalInvoicedAmount: 123,
                    accountVehicleId: 123,
                    hasCAOFineEstimates: false,
                    invoicesAndViolations: []
                },
                invoiceSearchNum: '1234567890',
                errors: [],
                alerts: [],
                exception: 'error',
                sessionTimedOut: false,
                accountStatus: 'acctStatus',
                webVersion: '1.2.3.4.5'
            };

            //Act
            service['storeDataForViolationsGrid'](response);

            //Assert
            expect(webStorage.setKeyValue as jasmine.Spy).toHaveBeenCalledTimes(1);
        });
    });

    describe('storeCreateAccountFromViolationsData', () => {
        it('should call webStorage.setKeyValue() 5 times', () => {
            //Assemble
            webStorage.setKeyValue.and.callFake(() => { });

            const plate: ViolationPlate = {
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
                previouslyPaidInvoices: [],
                invoices: [],
                uninvoicedViolations: [],
                discountProgramCode: 123,
                violatorID: 123,
                totalFeesDiscounted: 123,
                serviceFee: 123,
                plateDueAfterDiscount: 123,
                plateDueBeforeDiscount: 123,
                isNewEzTagAccountEligibile: true,
                newEzTagAccountDiscount: 123,
                newEzTagAccountStartingBalance: 123,
                newEzTagAccountEZTagFee: 123,
                newEzTagAccountPlateTotal: 123,
                hasPaymentPlan: true,
                licensePlate: '',
                licenseState: '',
                totalPaymentAmount: 123,
                totalUninvoicedAmount: 123,
                totalInvoicedAmount: 123,
                accountVehicleId: 123,
                hasCAOFineEstimates: false,
                invoicesAndViolations: []
            };

            //Act
            service['storeCreateAccountFromViolationsData'](plate);

            //Assert
            expect(webStorage.setKeyValue as jasmine.Spy).toHaveBeenCalledTimes(5);
        });
    });

    describe('removeAllWebStorageEntries', () => {
        it('should call webStorage.removeEntry() 6 times', () => {
            //Assemble
            webStorage.removeEntry.and.callFake(() => { });

            //Act
            service.removeAllWebStorageEntries();

            //Assert
            expect(webStorage.removeEntry as jasmine.Spy).toHaveBeenCalledTimes(7);
        });
    });

    describe('mapViolationHeaders', () => {
        it('should return the correct mapped result', () => {
            //Assemble
            const originalInvoices: ViolationInvoice[] = [
                {
                    openAdminFeesDue: 123456,
                    openTollAmountDue: 123456,
                    openCollectionFeesDue: 123456,
                    openOtherFeesDue: 123456,
                    agencyId: 123456,
                    agencyName: 'fake',
                    mobileAgencyName: 'h',
                    mailedDate: 'fake',
                    dueDate: 'fake',
                    status: 'fake',
                    invoiceId: 'fake',
                    invoiceNum: 'fake',
                    invoiceDueAfterDiscount: 123456,
                    invoiceDueBeforeDiscount: 123456,
                    invoiceLevelDiscount: 123456,
                    originalTollAmount: 123456,
                    originalAdminFees: 123456,
                    originalCollectionFees: 123456,
                    originalOtherFees: 123456,
                    originalInvoiceTotal: 123456,
                    previouslyPaid: 123456,
                    newEzTagAccountInvoiceDiscountAmt: 123456,
                    newEzTagAccountInvoiceDueAfterDiscountAmt: 123456,
                    violations: [],
                    paymentAmount: 123456,
                    excusalAmt: 4,
                    hasCAOFineEstimate: false,
                    caoFineEstimate: 0,
                },
                {
                    openAdminFeesDue: 2468,
                    openTollAmountDue: 2468,
                    openCollectionFeesDue: 2468,
                    openOtherFeesDue: 2468,
                    agencyId: 2468,
                    agencyName: 'fake2',
                    mobileAgencyName: 'h',
                    mailedDate: 'fake2',
                    dueDate: 'fake2',
                    status: 'fake2',
                    invoiceId: 'fake2',
                    invoiceNum: 'fake2',
                    invoiceDueAfterDiscount: 2468,
                    invoiceDueBeforeDiscount: 2468,
                    invoiceLevelDiscount: 2468,
                    originalTollAmount: 2468,
                    originalAdminFees: 2468,
                    originalCollectionFees: 2468,
                    originalOtherFees: 2468,
                    originalInvoiceTotal: 2468,
                    previouslyPaid: 2468,
                    newEzTagAccountInvoiceDiscountAmt: 2468,
                    newEzTagAccountInvoiceDueAfterDiscountAmt: 2468,
                    violations: [],
                    paymentAmount: 2468,
                    excusalAmt: 4,
                    hasCAOFineEstimate: false,
                    caoFineEstimate: 0,
                }];
            const expectedMappedInvoices = [
                {
                    invoiceNumber: originalInvoices[0].invoiceNum,
                    remainingBalance: originalInvoices[0].invoiceDueBeforeDiscount
                },
                {
                    invoiceNumber: originalInvoices[1].invoiceNum,
                    remainingBalance: originalInvoices[1].invoiceDueBeforeDiscount
                }];

            //Act
            const result = service['mapViolationHeaders'](originalInvoices);

            //Assert
            expect(result).toEqual(expectedMappedInvoices as any);
        });
    });

    describe('mapCreateAccountFromViolationsTotals', () => {

        it('should return the correct mapped result', () => {
            //Assemble
            const originalPlate: ViolationPlate = {
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
                previouslyPaidInvoices: [],
                invoices: [],
                uninvoicedViolations: [],
                discountProgramCode: 123,
                violatorID: 123,
                totalFeesDiscounted: 123,
                serviceFee: 123,
                plateDueAfterDiscount: 123,
                plateDueBeforeDiscount: 123,
                isNewEzTagAccountEligibile: true,
                newEzTagAccountDiscount: 123,
                newEzTagAccountStartingBalance: 123,
                newEzTagAccountEZTagFee: 123,
                newEzTagAccountPlateTotal: 123,
                hasPaymentPlan: true,
                licensePlate: '',
                licenseState: '',
                totalPaymentAmount: 123,
                totalUninvoicedAmount: 123,
                totalInvoicedAmount: 123,
                accountVehicleId: 123,
                hasCAOFineEstimates: false,
                invoicesAndViolations: []
            };
            const expectedMappedPlate: CreateAccountFromViolationsTotals = {
                totalFeesDiscountedDontCreateAccount: originalPlate.totalFeesDiscounted,
                createAccountDiscount: originalPlate.newEzTagAccountDiscount,
                createAccountStartingBalance: originalPlate.newEzTagAccountStartingBalance,
                createAccountEZTagFee: originalPlate.newEzTagAccountEZTagFee,
                createAccountPlateTotal: originalPlate.newEzTagAccountPlateTotal,
                dontCreateAccountPlateTotal: originalPlate.plateDueBeforeDiscount,
                totalUninvoicedAmount: originalPlate.totalUninvoicedAmount,
                totalViolationsDue: null,
                serviceFee: null
            };

            //Act
            const result = service['mapCreateAccountFromViolationsTotals'](originalPlate);

            //Assert
            expect(result).toEqual(expectedMappedPlate);
        });
    });

    describe('getAccountRelatedWorkItemSelected', () => {
        it('should set hasAccountRelatedWorkItemSelected to false', async () => {
            //Assemble
            spyOn<any>(service, 'getAccountRelatedWorkItemSelected').and.callThrough();

            const storefrontSessionStorage = {
                selectedItemIds: []
            };

            storefrontUtilityService = { isRunningAsKiosk: true };

            //Act
            const hasAccountRelatedWorkItemSelected = service['getAccountRelatedWorkItemSelected'](storefrontSessionStorage);

            //Assert
            expect(hasAccountRelatedWorkItemSelected).toEqual(false);
        });
        it('should set hasAccountRelatedWorkItemSelected to true', async () => {
            //Assemble
            spyOn<any>(service, 'getAccountRelatedWorkItemSelected').and.callThrough();
            storefrontUtilityService.accountLoggedInWorkItemIds = [2];

            const storefrontSessionStorage = {
                selectedItemIds: [2, 3]
            };

            storefrontUtilityService = { isRunningAsKiosk: true };

            //Act
            const hasAccountRelatedWorkItemSelected = service['getAccountRelatedWorkItemSelected'](storefrontSessionStorage);

            //Assert
            expect(hasAccountRelatedWorkItemSelected).toEqual(true);
        });
    });
});
