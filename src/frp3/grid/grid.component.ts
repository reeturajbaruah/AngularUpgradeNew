import { Component, Inject, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { StateOrName, StateService, UIRouterGlobals } from '@uirouter/angular';
import { stateNames as cavveStates } from 'cavve/constants';
import { DialogContent, DialogService, ToasterService } from 'common/services';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { WebStorageConst } from 'constants/module';
import { clone, isNil } from 'lodash';
import { FrameComponent } from 'frp3/frame/frame.component';
import {
    GridPageCmsData, SummaryCmsData, EOViolation, EOViolationInvoice, EOViolationPlate,
    EOViolationPlateContainer, PrevPaidCmsData, PrevPaidInvoicesData, PaymentPlanToolTip, VeriTransCmsData
} from 'frp3/interfaces';
import { ICmsContent, IViolationPlate } from '../../violationsCommon/interfaces';
import { collapseTrigger } from 'animations/collapse';
import { PrevPaidInvoicesComponent } from './prevPaidInvoices/prevPaidInvoicesModal.component';
import { ViolationsPlateComponent } from 'violationsCommon/components/violationsPlate/violationsPlate.component';
import { ViolationsDetailsComponent } from 'violationsCommon/components/violationsDetails/violationsDetails.component';
import { Decimal } from 'decimal.js-light';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';

@Component({
    selector: 'violation-grid',
    templateUrl: './grid.html',
    styleUrls: ['./grid.less'],
    animations: [
        collapseTrigger,
    ]
})
export class GridComponent implements OnInit {

    @ViewChildren(ViolationsPlateComponent) violationsPlateCompList: QueryList<ViolationsPlateComponent>;
    @ViewChildren(ViolationsDetailsComponent) violationsDetailsCompList: QueryList<ViolationsDetailsComponent>;

    constructor(
        private parent: FrameComponent,
        private state: StateService,
        private webStorageConst: WebStorageConst,
        private uiRouterGlobals: UIRouterGlobals,
        private webStorage: WebStorageService,
        private dialogService: DialogService,
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private toasterService: ToasterService
    ) { }

    @Input() cmsData: GridPageCmsData;
    @Input() cmsContentPmntPlan: PaymentPlanToolTip;

    //Pagination
    public paginatedPlate: EOViolationPlate = { invoices: [], uninvoicedViolations: [], invoicesAndViolations: [] } as EOViolationPlate;
    public mobileLoadedPlate: EOViolationPlate = { invoices: [], uninvoicedViolations: [], invoicesAndViolations: [] } as EOViolationPlate;
    public get mobileLoadedCombinedViolationsArrayLength() {
        // Used for length comparison in HTML
        return this.mobileLoadedPlate.invoices.length + this.mobileLoadedPlate.uninvoicedViolations.length;
    }
    public readonly defaultPageSize = this.environmentConfig.paginationConfig.violations.PageSize;
    public readonly paginationLimit = this.environmentConfig.paginationConfig.violations.LimitToStart;

    public discountArray: string[] = [];

    public overpaymentModalCmsContent: ICmsContent;
    public plateContainer: EOViolationPlateContainer;
    public summaryCmsData: SummaryCmsData = {} as SummaryCmsData;
    public prevPaidCmsData: PrevPaidCmsData = {} as PrevPaidCmsData;
    veriTransCmsData: VeriTransCmsData = {} as VeriTransCmsData;
    public wizardBackLabel: string;
    public noDiscountWizardBackLabel: string;
    public hasOutstandingViolations: boolean;
    public previouslyPaidPlate: EOViolationPlate;
    public showPreviouslyPaidPlate: boolean;
    public cms = {
        data: {}
    };

    associatedPlates: { plate: IViolationPlate; collapsed: boolean }[];
    associatedPlatesSelectedTot = new Decimal(0);
    associatedPlatesSelRemBal = new Decimal(0);
    associatedPlatesDiscounted = new Decimal(0);
    associatedPlatesAdminFees = new Decimal(0);
    totalSelected = new Decimal(0);
    totalFeesDiscounted = new Decimal(0);
    totalPaymentAmount = new Decimal(0);
    totalRemainingBalance = new Decimal(0);
    totalAdminFees = new Decimal(0);
    hasDiscount = false;

    public violationFlowName = {
        0: 'OLVPS',
        1: 'FRP',
        2: 'CFDP'
    };

    public searchPlate: { plate: IViolationPlate; collapsed: boolean };

    private getPreviouslyPaidPlate = (plate: EOViolationPlate): EOViolationPlate => ({
        ...plate,
        invoices: plate.previouslyPaidInvoices,
        uninvoicedViolations: [],
        plateDueBeforeDiscount: 0
    });

    private hasViewableContent = (plate: EOViolationPlate): boolean => (plate.invoices.length + plate.uninvoicedViolations.length) > 0;

    private getCurrentStep = (hasOutstandingViolations: boolean): number => hasOutstandingViolations ? 1 : 0;

    ngOnInit() {
        this.plateContainer = this.parent.getPlateContainer();

        //The if else can be removed once we cleanup the CAF feature toggle
        if (this.plateContainer.plate.invoicesAndViolations) {
            //This is to sync the object references
            this.plateContainer.plate.invoices = this.plateContainer.plate.invoicesAndViolations.filter(violation =>
                Array.isArray((violation as EOViolationInvoice).violations)) as EOViolationInvoice[];
            this.plateContainer.plate.uninvoicedViolations = this.plateContainer.plate.invoicesAndViolations.filter(violation =>
                !Array.isArray((violation as EOViolationInvoice).violations)) as EOViolation[];

            //Process associated plates' invoices and violations
            this.plateContainer.associatedPlates.forEach(p => {
                p.invoices = p.invoicesAndViolations.filter(violation => Array.isArray((violation as EOViolationInvoice).violations)) as EOViolationInvoice[];
                p.uninvoicedViolations = p.invoicesAndViolations.filter(violation => !Array.isArray((violation as EOViolationInvoice).violations)) as EOViolation[];
            });

        } else {
            this.plateContainer.plate.invoicesAndViolations =
                [].concat(this.plateContainer.plate.invoices,
                    this.plateContainer.plate.uninvoicedViolations)
                    .filter(vio => !isNil(vio));

            //Else concat associated plates' invoices and violations not null
            this.plateContainer.associatedPlates.forEach(p => {
                p.invoicesAndViolations = [].concat(p.invoices, p.uninvoicedViolations).filter(vio => !isNil(vio));
            });
        }

        //discountStringArray = discountStringArray.filter(x => !isNil(x));
        this.previouslyPaidPlate = this.getPreviouslyPaidPlate(this.plateContainer.plate);

        this.showPreviouslyPaidPlate = this.hasViewableContent(this.previouslyPaidPlate);
        this.hasOutstandingViolations = this.hasViewableContent(this.plateContainer.plate); //set to false to view previously paid only
        this.uiRouterGlobals.current.data.currentStep = this.getCurrentStep(this.hasOutstandingViolations);
        this.parent.stepNum = this.uiRouterGlobals.current.data.currentStep;

        this.summaryCmsData = (this.cmsData.Children
            .filter(child => 'Summary' === child.ItemName)[0] || {}) as SummaryCmsData;
        this.prevPaidCmsData = (this.cmsData.Children
            .filter(child => 'Previously Paid' === child.ItemName)[0] || {}) as PrevPaidCmsData;
        this.veriTransCmsData = (this.cmsData.Children
            .filter(child => 'Verify Transactions' === child.ItemName)[0] || {}) as VeriTransCmsData;

        this.cms.data = {
            licensePlateState: this.plateContainer.plate.licenseState.toUpperCase(),
            licensePlateNumber: this.plateContainer.plate.licensePlate.toUpperCase(),
            itemsFound: this.plateContainer.plate.invoices.length + this.plateContainer.plate.uninvoicedViolations.length,
            totalAmountDue: this.plateContainer.plate.plateDueBeforeDiscount
        };

        this.overpaymentModalCmsContent = {
            Title: this.cmsData.OVERPAYMENT_HEADER,
            PrimaryContent: this.cmsData.OVERPAYMENT_BODY,
        };

        this.wizardBackLabel = this.plateContainer.plate.isNewEzTagAccountEligibile
            ? 'Back to Offer'
            : 'Previous';

        this.parent.scrollToTop();

        //Mobile Pagination 
        this.mobileLoadedPlate = clone(this.plateContainer.plate);
        this.mobileLoadedPlate.invoices = [];
        this.mobileLoadedPlate.uninvoicedViolations = [];
        this.mobileLoadedPlate.invoicesAndViolations = [];

        this.paginatedPlate = clone(this.plateContainer.plate);
        this.paginatedPlate.invoices = [];
        this.paginatedPlate.uninvoicedViolations = [];
        this.paginatedPlate.invoicesAndViolations = [];

        // Any pagination related logic
        if (this.plateContainer.plate.invoicesAndViolations.length >= this.paginationLimit) {
            this.updateViolationsDetailsTable({
                pageIndex: 0,
                pageSize: this.defaultPageSize
            } as PageEvent);

            this.mobileLoadMore();
        }

        //Associated Plates
        this.associatedPlates = this.plateContainer.associatedPlates.map(associatedPlate => ({ plate: associatedPlate, collapsed: true }));
        this.searchPlate = { plate: this.plateContainer.plate, collapsed: false };
        this.associatedPlates.sort((a, b) => a.plate.plateDueBeforeDiscount > b.plate.plateDueBeforeDiscount ? -1 : a.plate.plateDueBeforeDiscount < b.plate.plateDueBeforeDiscount ? 1 : 0);
    }

    public updateViolationsDetailsTable(event: PageEvent) {
        // Use the start/end indexes to retrieve the violations to show
        const start = event.pageIndex * event.pageSize;
        const end = (event.pageIndex + 1) * event.pageSize;
        const subViolationsArray = this.plateContainer.plate.invoicesAndViolations.slice(start, end);

        // Split the violations array back into the separate arrays for component and later logic consumption
        this.paginatedPlate.invoices = subViolationsArray.filter(violation =>
            Array.isArray((violation as EOViolationInvoice).violations)) as EOViolationInvoice[];
        this.paginatedPlate.uninvoicedViolations = subViolationsArray.filter(violation =>
            !Array.isArray((violation as EOViolationInvoice).violations)) as EOViolation[];
        this.paginatedPlate.invoicesAndViolations = subViolationsArray;

        // Used to change the reference while maintaining the same invoice objects
        // Considered having ngDoCheck in violationsDetails but it resulted in an excessive amount of checking on the array objects
        this.paginatedPlate = clone(this.paginatedPlate);
    }

    public mobileLoadMore() {
        // Use the start/end indexes to retrieve the violations to append
        const start = this.mobileLoadedCombinedViolationsArrayLength;
        const end = this.mobileLoadedCombinedViolationsArrayLength + this.defaultPageSize;
        const subViolationsArray = this.plateContainer.plate.invoicesAndViolations.slice(start, end);

        // Split the violations array back into the separate arrays for component and later logic consumption
        this.mobileLoadedPlate.invoices = this.mobileLoadedPlate.invoices.concat(subViolationsArray.filter(
            violation => Array.isArray((violation as EOViolationInvoice).violations)) as EOViolationInvoice[]);
        this.mobileLoadedPlate.uninvoicedViolations = this.mobileLoadedPlate.uninvoicedViolations.concat(subViolationsArray.filter(
            violation => !Array.isArray((violation as EOViolationInvoice).violations)) as EOViolation[]);
        this.mobileLoadedPlate.invoicesAndViolations = this.mobileLoadedPlate.invoicesAndViolations.concat(subViolationsArray);

        // Used to change the reference while maintaining the same invoice objects
        // Considered having ngDoCheck in violationsDetails but it resulted in an excessive amount of checking on the array objects
        this.mobileLoadedPlate = clone(this.mobileLoadedPlate);
    }

    public openPrevPaidInvoices() {

        const data = {
            previouslyPaidInvoices: this.plateContainer.plate.previouslyPaidInvoices,
            plate: {
                state: this.plateContainer.plate.licenseState,
                // eslint-disable-next-line id-blacklist
                number: this.plateContainer.plate.licensePlate
            }
        } as PrevPaidInvoicesData;

        this.dialogService.openSliderFilled(
            PrevPaidInvoicesComponent, data,
            { title: 'Previously Paid Invoices' } as DialogContent
        );
    }

    async goToNextState(targetState: StateOrName) {
        this.savePlateContainer();
        await this.state.go(targetState, { billingInfo: this.uiRouterGlobals.params.billingInfo });
    }

    private savePlateContainer = () => {
        const { plate } = this.plateContainer;
        //Save Associated plates

        const plateContainerWithDiscount: EOViolationPlateContainer = {
            ...this.plateContainer,
            violationsFlowName: this.violationFlowName[this.plateContainer.plate.discountProgramCode],
            paymentAmount: plate.totalPaymentAmountFRP3,
            remainingBalance: plate.remainingBalance,
            assocPlatesPaymentAmount: this.associatedPlatesSelectedTot.minus(this.associatedPlatesDiscounted).plus(this.associatedPlatesAdminFees ?? 0).toNumber(),
            assocPlatesRemainingAmount: this.associatedPlatesSelRemBal.toNumber()
        };

        this.webStorage.setKeyValue(this.webStorageConst.enhancedViolationsPlateAndInvoiceData, plateContainerWithDiscount);
    };

    async goToPreviousState(targetState: StateOrName) {
        const to = this.plateContainer.plate.isNewEzTagAccountEligibile
            ? cavveStates.Offer
            : targetState;

        this.savePlateContainer();
        await this.state.go(to);
    }

    plateChangeSelectAll(detailsId: string): void {
        this.violationsDetailsCompList.forEach(comp => {
            if (comp.id === detailsId) {
                comp.areAllSelected = !comp.areAllSelected;
                comp.changeSelectAll();
            }
        });
    }

    detailsChangeSelectAll(plateId: string) {
        this.violationsPlateCompList.forEach(plate => {
            if (plate.id === plateId) {
                plate.areAllSelected = !plate.areAllSelected;
            }
        });
    }

    associatedPlateSelTot(): void {
        this.associatedPlatesSelectedTot = this.plateContainer.associatedPlates.reduce((acc, val) =>  acc.plus(val.totalSelected ?? 0), new Decimal(0));
        this.associatedPlatesSelRemBal = this.plateContainer.associatedPlates.reduce((acc, val) => acc.plus(val.remainingBalance ?? 0), new Decimal(0));
        this.associatedPlatesDiscounted = this.plateContainer.associatedPlates.reduce((acc, val) => acc.plus(val.totalFeesDiscountedFRP3 ?? 0), new Decimal(0));
        this.associatedPlatesAdminFees = this.plateContainer.associatedPlates.reduce((acc, val) => acc.plus(val.totalSelected > 0 ? (val.serviceFee ?? 0) : 0), new Decimal(0));

        this.calSummaryValues();
    }

    calSummaryValues(): void {
        this.totalSelected = this.associatedPlatesSelectedTot.plus(this.plateContainer.plate.totalSelected ?? 0);
        this.totalFeesDiscounted = this.associatedPlatesDiscounted.plus(this.plateContainer.plate.totalFeesDiscountedFRP3 ?? 0);
        this.totalAdminFees = this.associatedPlatesAdminFees.plus(this.plateContainer.plate.totalPaymentAmountFRP3 > 0 ? (this.plateContainer.plate.serviceFee ?? 0) : 0);
        this.totalPaymentAmount = this.associatedPlatesSelectedTot
            .minus(this.associatedPlatesDiscounted ?? 0)
            .plus(this.associatedPlatesAdminFees ?? 0)
            .plus(this.plateContainer.plate.totalPaymentAmountFRP3 ?? 0);
        this.totalRemainingBalance = this.associatedPlatesSelRemBal.plus(this.plateContainer.plate.remainingBalance ?? 0);

        this.discountCheck();
    }

    discountCheck(): void {
        if (!this.hasDiscount && this.totalFeesDiscounted.greaterThan(0)) {
            this.hasDiscount = true;
        }
    }
}
