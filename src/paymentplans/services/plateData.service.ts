import { Injectable, Inject } from '@angular/core';

import { WebStorageConst } from 'constants/module';

import { PaymentResponse } from '../interfaces';

import { BankDetails, CreditCardDetails, AddressInfo, BillingType } from 'common/models';
import { WebStorageService, OperatingSystemSnifferService } from 'common/services';

export interface BillingMethod {
    eftPaymentMethod: BankDetails & AddressInfo;
    creditCardPaymentMethod: CreditCardDetails & AddressInfo;
    address: AddressInfo;
    billingType?: BillingType;
    autoPay?: boolean;
    isInternational?: boolean;
}

export interface PaymentPlanData {
    billingMethod: BillingMethod;
    selectedPaymentPlan: PaymentPlanInfo;
    paymentAmount: number;
    addAccountFunds: boolean;
    addAccountFundsAmount: number;
}

export interface PlateInformation {
    paymentPlans: PaymentPlanInfo[];
    licPlateNumber: string;
    licPlateState: string;
    isActive: boolean;
}

//as defined from API
interface PaymentPlanApiInformation {

    paymentPlanId: number;
    settlementAmount: number;
    discountAmount: number;
    paidAmount: number;
    balanceAmount: number;
    status: string;
    agency: string;
    mobileAgency: string;
    nextInstallmentAmount: number;

    isSelected?: boolean;

    nextInstallmentDate: string;
    nextUpcomingInstallmentDate: string;

    eftPaymentMethod: BankDetails & AddressInfo;
    creditCardPaymentMethod: CreditCardDetails & AddressInfo;
}

//as defined from API
export interface PlateApiInformation {
    activePaymentPlans: PaymentPlanApiInformation[];
    inactivePaymentPlans: PaymentPlanApiInformation[];
    licPlateNumber: string;
    licPlateState: string;
}

export interface PaymentPlanInfo {
    paymentPlanId: number;
    settlementAmount: number;
    discountAmount: number;
    paidAmount: number;
    balanceAmount: number;
    status: string;
    agency: string;
    mobileAgency: string;
    nextInstallmentAmount: number;

    isSelected?: boolean;

    nextInstallmentDate: string;
    nextUpcomingInstallmentDate: string;

    billingMethod: BillingMethod;
}


@Injectable()
export class PlateDataService {

    constructor(
        private webStorage: WebStorageService,
        private webStorageConst: WebStorageConst,
        private operatingSystemSnifferService: OperatingSystemSnifferService
    ) { }

    public setBillingMethod = (billingMethod: BillingMethod, paymentAmount: number, isEzTagFlow: boolean) => {
        this.webStorage.setKeyValue(
            isEzTagFlow
                ? this.webStorageConst.billingMethodAccountOverview
                : this.webStorageConst.billingMethodViolation, billingMethod);

        this.webStorage.setKeyValue(
            isEzTagFlow
                ? this.webStorageConst.paymentAmmountAccountOverview
                : this.webStorageConst.paymentAmountViolation, paymentAmount);
        return;
    };

    public getPaymentResponse = (isEzTagFlow: boolean): PaymentResponse => this.webStorage.getValue(
        isEzTagFlow
            ? this.webStorageConst.paymentPlanResponseAccountOverview
            : this.webStorageConst.paymentPlanResponseViolation);

    public setPaymentResponse = (paymentResponse: PaymentResponse, isEzTagFlow: boolean) => {
        this.webStorage.setKeyValue(
            isEzTagFlow
                ? this.webStorageConst.paymentPlanResponseAccountOverview
                : this.webStorageConst.paymentPlanResponseViolation, paymentResponse);
    };

    public resetPlanDataInfo = (isEzTagFlow: boolean) => {
        this.webStorage.removeEntry(
            isEzTagFlow
                ? this.webStorageConst.paymentPlanResponseAccountOverview
                : this.webStorageConst.paymentPlanResponseViolation);

        this.webStorage.removeEntry(
            isEzTagFlow
                ? this.webStorageConst.billingMethodAccountOverview
                : this.webStorageConst.billingMethodViolation);

        this.webStorage.removeEntry(
            isEzTagFlow
                ? this.webStorageConst.paymentAmmountAccountOverview
                : this.webStorageConst.paymentAmountViolation);

        if (isEzTagFlow) {
            this.webStorage.removeEntry(this.webStorageConst.paymentPlanAccountOverviewAddCountFund);
            this.webStorage.removeEntry(this.webStorageConst.paymentPlanAccountOverviewAddCountFundAmount);
        }
        return;
    };

    public getPlanDataInfo = (isEzTagFlow: boolean): PaymentPlanData => ({
        selectedPaymentPlan: this.webStorage.getValue(
            isEzTagFlow
                ? this.webStorageConst.currentSelectedPlanAccountOverview
                : this.webStorageConst.currentSelectedPlanViolation),

        billingMethod: this.webStorage.getValue(
            isEzTagFlow
                ? this.webStorageConst.billingMethodAccountOverview
                : this.webStorageConst.billingMethodViolation),

        paymentAmount: this.webStorage.getValue(
            isEzTagFlow
                ? this.webStorageConst.paymentAmmountAccountOverview
                : this.webStorageConst.paymentAmountViolation),

        addAccountFunds: this.webStorage.getValue(
            isEzTagFlow
                ? this.webStorageConst.paymentPlanAccountOverviewAddCountFund
                : null),

        addAccountFundsAmount: this.webStorage.getValue(
            isEzTagFlow
                ? this.webStorageConst.paymentPlanAccountOverviewAddCountFundAmount
                : null)
    });

    public setPlanDataInfo = (planData: PaymentPlanData, isEzTagFlow: boolean) => {
        this.webStorage.setKeyValue(
            isEzTagFlow
                ? this.webStorageConst.paymentAmmountAccountOverview
                : this.webStorageConst.paymentAmountViolation, planData.paymentAmount);

        this.webStorage.setKeyValue(
            isEzTagFlow
                ? this.webStorageConst.billingMethodAccountOverview
                : this.webStorageConst.billingMethodViolation, planData.billingMethod);

        if (isEzTagFlow) {
            this.webStorage.setKeyValue(this.webStorageConst.paymentPlanAccountOverviewAddCountFund, planData.addAccountFunds);
            this.webStorage.setKeyValue(this.webStorageConst.paymentPlanAccountOverviewAddCountFundAmount, planData.addAccountFundsAmount);
        }

    };

    private convert(x: PaymentPlanApiInformation): PaymentPlanInfo {
        const address = (x.creditCardPaymentMethod || x.eftPaymentMethod) as AddressInfo;
        return {
            ...x,
            billingMethod: {
                address: x.creditCardPaymentMethod || x.eftPaymentMethod,
                eftPaymentMethod: x.eftPaymentMethod,
                creditCardPaymentMethod: x.creditCardPaymentMethod,
                billingType: !!x.creditCardPaymentMethod
                    ? BillingType.Credit
                    : !!x.eftPaymentMethod
                        ? BillingType.Eft
                        : null,
                autoPay: !!x.creditCardPaymentMethod || !!x.eftPaymentMethod,
                isInternational: (!address || address.country === 'USA') ? false : true
            }
        } as PaymentPlanInfo;
    }

    public setPaymentPlans = (data: { plates: PlateApiInformation[] }, isEzTagFlow: boolean) => {
        const activePaymentPlans = data.plates
            .filter(vehicle => vehicle.activePaymentPlans.length > 0)
            .map(vehicle => ({
                licPlateNumber: vehicle.licPlateNumber,
                licPlateState: vehicle.licPlateState,
                paymentPlans: vehicle.activePaymentPlans.map(this.convert),
                isActive: true
            } as PlateInformation));
        this.webStorage.setKeyValue(
            isEzTagFlow
                ? this.webStorageConst.activePlatesAccountOverView
                : this.webStorageConst.activePlatesViolation, activePaymentPlans);

        const inactivePaymentPlans = data.plates
            .filter(vehicle => vehicle.inactivePaymentPlans.length > 0)
            .map(vehicle => ({
                licPlateNumber: vehicle.licPlateNumber,
                licPlateState: vehicle.licPlateState,
                paymentPlans: vehicle.inactivePaymentPlans.map(this.convert),
                isActive: false
            } as PlateInformation));

        this.webStorage.setKeyValue(
            isEzTagFlow
                ? this.webStorageConst.inactivePlatesAccountOverView
                : this.webStorageConst.inactivePlatesViolation, inactivePaymentPlans);

    };

    public getInactive = (isEzTagFlow: boolean): PlateInformation[] => this.webStorage.getValue(
        isEzTagFlow
            ? this.webStorageConst.inactivePlatesAccountOverView
            : this.webStorageConst.inactivePlatesViolation);

    public getActive = (isEzTagFlow: boolean): PlateInformation[] => this.webStorage.getValue(
        isEzTagFlow
            ? this.webStorageConst.activePlatesAccountOverView
            : this.webStorageConst.activePlatesViolation);


    //TODO: The 2 functions below should probably be moved into a different service?
    //TODO: Add condition check to make sure no empty page
    public resetSelectedPlan = (activePlates: PlateInformation[], inactivePlates: PlateInformation[], isEzTagFlow: boolean) => {
        let selectedPlan;
        if (activePlates.length > 0) {
            activePlates[0].paymentPlans[0].isSelected = true;
            selectedPlan = activePlates[0].paymentPlans[0];
        } else if (inactivePlates.length > 0) {
            inactivePlates[0].paymentPlans[0].isSelected = true;
            selectedPlan = inactivePlates[0].paymentPlans[0];
        }
        this.webStorage.setKeyValue(
            isEzTagFlow
                ? this.webStorageConst.currentSelectedPlanAccountOverview
                : this.webStorageConst.currentSelectedPlanViolation, selectedPlan);

        return selectedPlan;
    };

    public toggleCurrentPlan =
        (planId: number, activePlans: PlateInformation[], inactivePlans: PlateInformation[], isEzTagFlow: boolean) => {
            const plansArray = activePlans.concat(inactivePlans).reduce((acc, v) => acc.concat(v.paymentPlans), []);
            const currentSelectedPlan = this.selectPaymentPlan(planId, plansArray);

            this.webStorage.setKeyValue(
                isEzTagFlow
                    ? this.webStorageConst.currentSelectedPlanAccountOverview
                    : this.webStorageConst.currentSelectedPlanViolation, currentSelectedPlan);
            return currentSelectedPlan;
        };

    public storePlan = (plan: PaymentPlanInfo, isEzTagFlow: boolean) => {
        this.webStorage.setKeyValue(
            isEzTagFlow
                ? this.webStorageConst.currentSelectedPlanAccountOverview
                : this.webStorageConst.currentSelectedPlanViolation, plan);
    };

    public selectPaymentPlan = (planId: number, plansArray: Array<any>) => {
        let selectedPlan;
        const isMobile = !this.operatingSystemSnifferService.isDesktopOs();
        plansArray.forEach(plan => {
            if (plan.paymentPlanId === planId) {
                if (isMobile) {
                    plan.isSelected = !plan.isSelected;
                    selectedPlan = plan.isSelected ? plan : null;
                } else {
                    plan.isSelected = true;
                    selectedPlan = plan;
                }
            } else {
                plan.isSelected = false;
            }
        });
        return selectedPlan;
    };
}
