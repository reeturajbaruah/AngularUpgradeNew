import { Inject, Injectable } from '@angular/core';
import { RawParams, StateOrName, StateService, TransitionOptions } from '@uirouter/angular';
import { stateNames as cavveStates } from 'cavve/constants';
import { DialogService, ResponseErrorService } from 'common/services';
import { ViolationsService } from './violationsService';
import { WebStorageConst } from 'constants/module';
import { stateNames as violationsStateNames } from 'violations/constants';
import { stateNames as loginStateNames } from 'login/constants';
import { stateNames as paymentPlansStateNames } from 'paymentplans/constants';
import { CreateAccountFromViolationsTotals, ViolationInvoice, ViolationPlate, ViolationPlateContainer } from 'violations/interfaces';
import { WebApisService } from '../webapi/webApis.service';
import { IAcctSearchResponse, IPlateSearchResponse, IViolationRequest } from '../webapi/interfaces/webapi.interface';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { CmsReplacementService } from 'cms/services';
import {
    PaymentPlansModalCmsContent,
    PaymentPlansModalComponent,
    PaymentPlansModalInjectionValues,
    PaymentPlansModalResult,
    ViolationLoginPopUpModalCmsContent,
    ViolationLoginPopUpModalComponent, VioloationModalPopupActionType,
    ViolationLoginPopUpModalInjectionValues
} from 'common/ui';
import { PlateDataService, WebApiService, StateService as PaymentPlanStateService } from 'paymentplans/services';
import { WebStorageService } from '../../../common/services/webStorageService/webStorage.service';
import { StorefrontUtilityService } from '../../../storefront/services/storefrontUtility.service';
import { StorefrontService } from '../../../storefront/services/storefront.service';
import { StorefrontModalService } from '../../../storefront/services/modal.service';


export interface ViolationHeader {
    invoiceNumber: string;
    remainingBalance: number;
}

export interface NextState {
    to: StateOrName;
    params?: RawParams;
    options?: TransitionOptions;
}

@Injectable()
export class ViolationsDataService {
    constructor(
        private webStorage: WebStorageService,
        private responseErrorService: ResponseErrorService,
        private storefrontModalService: StorefrontModalService,
        private storefrontUtilityService: StorefrontUtilityService,
        private storefrontService: StorefrontService,
        private state: StateService,
        private webStorageConst: WebStorageConst,
        private webApis: WebApisService,
        private violationsService: ViolationsService,
        private authService: AuthenticationService,
        private dialogService: DialogService,
        private cmsReplacementService: CmsReplacementService,
        private paymentPlanApi: WebApiService,
        private dataService: PlateDataService,
        private paymentPlanStateService: PaymentPlanStateService
    ) { }

    public async findViolations(request: IViolationRequest, nextState?: NextState) {

        this.removeAllWebStorageEntries();
        const response: IPlateSearchResponse = await this.webApis.searchForViolations(request);

        if (response.errors.length > 0) {
            if (this.storefrontUtilityService.isRunningAsKiosk) {
                const errorMessage = this.responseErrorService.formatErrorMessages(response).join('\n');
                this.storefrontModalService.noViolationsFound(errorMessage);
                return;
            } else {
                return this.responseErrorService.displayErrorsFromResponse(response);
            }
        }

        response.plate = this.violationsService.replaceNullsInViolationPlate(response.plate);

        const storefrontSessionStorage = this.storefrontUtilityService.webStoreData;

        if (storefrontSessionStorage && this.storefrontUtilityService.isRunningAsKiosk) {
            const hasAccountRelatedWorkItemSelected = this.getAccountRelatedWorkItemSelected(storefrontSessionStorage);

            response.plate.isNewEzTagAccountEligibile = response.plate.isNewEzTagAccountEligibile && !hasAccountRelatedWorkItemSelected;
        }

        const runCreateAccountFlow = response.plate.isNewEzTagAccountEligibile;

        if (runCreateAccountFlow) {
            this.storeCreateAccountFromViolationsData(response.plate);
        }

        this.storeDataForViolationsGrid(response);

        await this.goToNextState(runCreateAccountFlow, nextState);
    }

    /**
     * Passing paymentPlansModal & violationLoginModal parameters as NULL with result in a direct goToNextState() call given update as false
     * 
     * @param request 
     * @param paymentPlansModal 
     * @param violationLoginModal 
     * @param nextState 
     * @param update 
     * @returns State object
     */
    public async findViolationAcct(request: IViolationRequest, paymentPlansModal?: PaymentPlansModalCmsContent, violationLoginModal?: ViolationLoginPopUpModalCmsContent,
        nextState?: NextState, update: boolean = false) {

        const response: IAcctSearchResponse = await this.webApis.searchForViolationAcct(request);
        if (response.errors.length > 0) {
            if (update) {
                //This error is thrown when nothing comes back from the search since everything paid off was an uninvoiced violation
                if (response.errors[0].key === 'V-2' || response.errors[0].key === 'V-3') {
                    const plateContainer = this.webStorage.getValue(this.webStorageConst.enhancedViolationsPlateAndInvoiceData);
                    plateContainer.plate.totalInvoicedAmount = 0;
                    plateContainer.plate.totalUninvoicedAmount = 0;
                    plateContainer.associatedPlates = [] as any;
                    this.storeDataForViolationAcctGrid(plateContainer);
                }
                return;
            }

            if (this.storefrontUtilityService.isRunningAsKiosk) {
                const errorMessage = this.responseErrorService.formatErrorMessages(response).join('\n');
                this.storefrontModalService.noViolationsFound(errorMessage);
                return;
            } else {
                return this.responseErrorService.displayErrorsFromResponse(response);
            }
        }

        this.removeAllWebStorageEntries();

        response.plate = this.violationsService.replaceNullsInViolationPlate(response.plate);
        response.plate.totalFeesDiscountedFRP3 = response.plate.totalFeesDiscounted;
        response.plate.totalPaymentAmountFRP3 = response.plate.totalPaymentAmount;

        const storefrontSessionStorage = this.storefrontUtilityService.webStoreData;

        if (storefrontSessionStorage && this.storefrontUtilityService.isRunningAsKiosk) {
            const hasAccountRelatedWorkItemSelected = this.getAccountRelatedWorkItemSelected(storefrontSessionStorage);

            response.plate.isNewEzTagAccountEligibile = response.plate.isNewEzTagAccountEligibile && !hasAccountRelatedWorkItemSelected;
        }

        const runCreateAccountFlow = response.plate.isNewEzTagAccountEligibile;

        if (runCreateAccountFlow) {
            nextState = null;
            this.storeCreateAccountFromViolationsData(response.plate);
        }
        this.storeDataForViolationAcctGrid(response);

        if (!update) {
            if (!paymentPlansModal || !violationLoginModal) {
                await this.goToNextState(runCreateAccountFlow, nextState);
            } else if (response.plate.invoicesAndViolations.length !== 0 && !this.authService.isAuthenticated()
                && (!this.storefrontUtilityService.isRunningAsKiosk || this.storefrontUtilityService.webStoreData.fullSiteMode) && response.hasAssociatedPlates
                && !response.hasMultipleAccts) {

                const data = {
                    cmsContent: violationLoginModal,
                    data: response
                };
                const res = await this.dialogService.openGenericModal<ViolationLoginPopUpModalComponent, ViolationLoginPopUpModalInjectionValues,
                    VioloationModalPopupActionType>(ViolationLoginPopUpModalComponent, data);

                switch (res) {
                    case 'accept':
                        await this.state.go(loginStateNames.Login);
                        break;
                    case 'cancel':
                        await this.goToNextState(runCreateAccountFlow, nextState);
                        break;
                    default:
                        break;
                }

            } else if (response.plate.invoicesAndViolations.length === 0 && response.hasPaymentPlan) {
                const data = {
                    cmsContent: paymentPlansModal,
                    data: response,
                    searchedWithInvoice: response.invoiceSearchNum != null
                } as PaymentPlansModalInjectionValues;

                const res: PaymentPlansModalResult = await this.dialogService.openGenericModal<PaymentPlansModalComponent, PaymentPlansModalInjectionValues>(PaymentPlansModalComponent, data);

                if ((res.goToPaymentPlansLanding || res.goToPaymentPlansSearch) && this.storefrontUtilityService.isRunningAsKiosk) {
                    await this.storefrontService.startDesktopMode(true);
                    await this.state.go(paymentPlansStateNames.Landing);
                } else if (res.goToPaymentPlansSearch) {
                    const fullRequest = {
                        InvoiceNumber: response.invoiceSearchNum,
                        LicenseState: response.plate.licenseState,
                        LicensePlate: response.plate.licensePlate,
                        PaymentPlanId: null
                    };

                    const paymentPlanSearchRes = await this.paymentPlanApi.violationsPaymentPlansSearch(fullRequest);

                    //Does anyone really need to know if this search fails? We can just take them to the landing page and pretend that nothing happened
                    //Otherwise, we get a payment plan error toaster when this person didn't even know we were doing a search for them. Feels weird.
                    if (paymentPlanSearchRes.errors?.length !== 0) {
                        return this.state.go(paymentPlansStateNames.Landing);
                    }

                    this.dataService.setPaymentPlans(paymentPlanSearchRes, false);

                    //await this.state.go(nextState);
                    this.paymentPlanStateService.saveStep(violationsStateNames.Landing, false);
                    await this.state.go(paymentPlansStateNames.Grid);
                }
                //If the user doesn't go to either, they stay on the violations search page
            } else {
                await this.goToNextState(runCreateAccountFlow, nextState);
            }
        }
    }

    private goToNextState = async (runCreateAccountFlow: boolean, nextState: NextState) => {
        await (nextState
            ? this.state.go(nextState.to, nextState.params, nextState.options)
            : this.state.go(
                runCreateAccountFlow ? cavveStates.Offer : violationsStateNames.Grid,
                {},
                { custom: { isExplicitlyAllowedTransition: true } }));
    };

    private storeDataForViolationsGrid = ({ plate, invoiceSearchNum }: IPlateSearchResponse) => {
        this.webStorage.setKeyValue(this.webStorageConst.enhancedViolationsPlateAndInvoiceData, { plate, invoiceSearchNum });
    };

    private storeDataForViolationAcctGrid = (acct: IAcctSearchResponse) => {
        this.webStorage.setKeyValue(this.webStorageConst.enhancedViolationsPlateAndInvoiceData, acct);
    };

    private storeCreateAccountFromViolationsData = (plate: ViolationPlate) => {
        this.webStorage.setKeyValue(this.webStorageConst.remainingPlateTotalBeforeDiscount, plate.plateDueBeforeDiscount);
        this.webStorage.setKeyValue(this.webStorageConst.violationHeaders, this.mapViolationHeaders(plate.invoices));
        this.webStorage.setKeyValue(this.webStorageConst.serviceFee, plate.serviceFee);
        this.webStorage.setKeyValue(
            this.webStorageConst.createAccountFromViolationsTotals,
            this.mapCreateAccountFromViolationsTotals(plate)
        );
        this.webStorage.setKeyValue(this.webStorageConst.linfo, this.getLinfo(plate));
    };

    private getLinfo = (plate: ViolationPlate) => ({
        licNumber: plate.licensePlate,
        licState: plate.licenseState
    });

    //We will call this when the violations landing page is loaded.
    public removeAllWebStorageEntries = () => {
        [
            this.webStorageConst.createAccountFromViolationsTotals,
            this.webStorageConst.violationHeaders,
            this.webStorageConst.remainingPlateTotalBeforeDiscount,
            this.webStorageConst.serviceFee,
            this.webStorageConst.enhancedViolationsPlateAndInvoiceData,
            this.webStorageConst.linfo,
            this.webStorageConst.vehicleSelected
        ].forEach(key => this.webStorage.removeEntry(key));
    };

    private mapViolationHeaders = (invoices: ViolationInvoice[]): ViolationHeader[] => {

        const getViolationHeader = (invoice: ViolationInvoice): ViolationHeader => ({
            invoiceNumber: invoice.invoiceNum,
            remainingBalance: invoice.invoiceDueBeforeDiscount
        });

        return invoices.map(getViolationHeader);
    };

    private mapCreateAccountFromViolationsTotals = (response: ViolationPlate): CreateAccountFromViolationsTotals => ({
        totalFeesDiscountedDontCreateAccount: response.totalFeesDiscounted,
        createAccountDiscount: response.newEzTagAccountDiscount,
        createAccountStartingBalance: response.newEzTagAccountStartingBalance,
        createAccountEZTagFee: response.newEzTagAccountEZTagFee,
        createAccountPlateTotal: response.newEzTagAccountPlateTotal,
        dontCreateAccountPlateTotal: response.totalPaymentAmount,
        totalUninvoicedAmount: response.totalUninvoicedAmount,
        totalViolationsDue: null,
        serviceFee: null
    });

    private getAccountRelatedWorkItemSelected(storefrontSessionStorage) {

        //This section is for Kiosk CAVVE Task 45820
        const selectedItems = storefrontSessionStorage.selectedItemIds;
        const unavailableItems = this.storefrontUtilityService.accountLoggedInWorkItemIds;

        return selectedItems.some(x => unavailableItems.indexOf(x) > -1);
    }
}
