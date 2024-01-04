import { Injectable } from '@angular/core';

@Injectable()
export class WebStorageConst {
    currentBalance = 'currentBalance';
    currentPaymentPlanBalance = 'currentPaymentPlanBalance';
    currentUser = 'currentUser';
    violationsLogData = 'violationsLogData';
    vehicleNeedingEditingEditEzTag = 'VehicleNeedingEditingEditEzTag';
    vehicleNeedingEditingEditEzTagIfBack = 'VehicleNeedingEditingEditEzTagIfBack';
    vehicleNeedingEditingEditEzPlate = 'vehicleNeedingEditingEditEzPlate';
    mappSessionBeingUsed = 'mappSessionBeingUsed';
    activePlatesAccountOverView = 'activePlatesAccountOverView';
    inactivePlatesAccountOverView = 'inactivePlatesAccountOverView';
    activePlatesViolation = 'activePlatesViolation';
    inactivePlatesViolation = 'inactivePlatesViolation';
    currentSelectedPlanAccountOverview = 'currentSelectedPlanAccountOverview';
    currentSelectedPlanViolation = 'currentSelectedPlanViolation';
    billingMethodViolation = 'billingMethodViolation';
    billingMethodAccountOverview = 'billingMethodAccountOverview';
    paymentAmountViolation = 'paymentAmountViolation';
    paymentAmmountAccountOverview = 'paymentAmmountAccountOverview';
    paymentPlanResponseViolation = 'paymentPlanResponseViolation';
    paymentPlanResponseAccountOverview = 'paymentPlanResponseAccountOverview';
    paymentPlanReceiptCurrentDateViolation = 'paymentPlanReceiptCurrentDateViolation';
    paymentPlanReceiptCurrentDateAccountOverview = 'paymentPlanReceiptCurrentDateAccountOverview';
    paymentPlanAccountOverviewAddCountFund = 'paymentPlanAccountOverviewAddCountFund';
    paymentPlanAccountOverviewAddCountFundAmount = 'paymentPlanAccountOverviewAddCountFundAmount';
    paymentPlanAccountOverviewUserHeaderData = 'paymentPlanAccountOverviewUserHeaderData';
    enhanceViolationsCurrentStep = 'enhancedViolationsCurrentStep';
    enhancedViolationsPlateAndInvoiceData = 'enhancedViolationsPlateAndInvoiceData';
    enhancedSuspendedCurrentStep = 'enhancedSuspendedCurrentStep';

    //Violations
    createAccountFromViolationsTotals = 'createAccountFromViolationsTotals';
    violationHeaders = 'violationHeaders';
    remainingPlateTotalBeforeDiscount = 'remainingPlateTotalBeforeDiscount';
    remainingPlateTotalAfterDiscount = 'remainingPlateTotalAfterDiscount';
    serviceFee = 'serviceFee';
    linfo = 'linfo';

    //Suspended Flow
    totalUnsuspensionPaymentAmount = 'totalUnsuspensionPaymentAmount';
    suspendedBillingAmountKey = 'SUSPENDED_BILLING_AMOUNT_KEY';
    suspendedStepKey = 'SUSPENDED_WIZARD_STEP_KEY';
    suspendedFrpChargesByPlateListKey = 'SUSPENDED_FRP_CHARGES_BY_PLATE_LIST_KEY';
    suspendedChargesByPlateListKey = 'SUSPENDED_CHARGES_BY_PLATE_LIST_KEY';


    //Missed A Toll
    missedATollCurrentStep = 'MISSED_A_TOLL_VIOLATION_CURRENT_STEP';

    //Close Account
    closeAccountCurrentStep = 'closeAccountCurrentStep';

    //Make a Payment
    makePaymentCurrentStep = 'makePaymentCurrentStep';

    //CAVVE
    cavveCurrentStep = 'CAVVE_CURRENT_STEP';
    cavveConversionData = 'CAVVE_DATA';

    //Vehicles
    vehiclesTagCurrentStep = 'VEHICLES_TAG_CURRENT_STEP';
    vehiclesPlateCurrentStep = 'VEHICLES_PLATE_CURRENT_STEP';
    vehiclesTagReplacementCurrentStep = 'VEHICLES_TAG_REPLACMENT_CURRENT_STEP';
    vehicleSelected = 'vehicleSelected';

    //language
    selectedLanguage = 'SELECTED_LANGUAGE';

    forgotPassword = 'FORGOT_PASSWORD';

    firstTimeLogin = 'FIRST_TIME_LOGIN';

    createAccount = 'CREATEACCOUNT_CURRENT_STEP';

    activateEzTag = 'ACTIVATE_EZ_TAG_CURRENT_STEP';

    forgotUsername = 'FORGOT_USERNAME';

    mfaLogin = 'MFA_LOGIN';

    // Session
    sessionAccountActivity = 'acctActivity';
    sessionCurrentStep = 'currentStep';
}
