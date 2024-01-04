import { Component, Inject, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { StateOrName, StateService, UIRouterGlobals } from '@uirouter/angular';
import { stateNames as cavveStates } from 'cavve/constants';
import { DialogContent, DialogService, ToasterService } from 'common/services';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { WebStorageConst } from 'constants/module';
import { clone, isNil } from 'lodash';
import {
    CmsContent as OverpaymentModalCmsContent
} from 'violations/detailsRefresh/invoiced/overpaymentModal/overpaymentModal.component';
import { FrameComponent } from 'violations/frame/frame.component';
import {
    AgencyInformation, Violation, ViolationInvoice, ViolationPlate,
    ViolationPlateContainer
} from 'violations/interfaces';
import { PdfUrlService } from 'violationsCommon/services/pdfUrl.service';
import { WebApisService } from 'violationsCommon/services/webapi/webApis.service';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';
import { InvoiceOverPaymentCmsData } from '../detailsRefresh';
import { PrevPaidInvoicesComponent, PrevPaidInvoicesData } from './prevPaidInvoicesModal/prevPaidInvoicesModal.component';


interface CmsChild {
    DISCOUNT_ENUM: string;
    DISCOUNT_STRING: string;
    ItemName: string;
}

interface GridDiscountCmsData extends CmsChild {
    ItemName: string;
    Title: string;
    LongDescription: string;
    ShortDescription: string;
    SUMMARY_HEADER: string;
    DISCOUNT_INVOICE_HEADER: string;
    DISCOUNT_VIOLATIONS_HEADER: string;
    DISCOUNT_OUTSTANDING_HEADER: string;
    IMPORTANT_REMINDER: string;
    Children?: any;
    PAYMENT_SUMMARY_INFO?: string;

}

interface SummaryCmsData extends CmsChild {
    ShortDescription: string;
    LongDescription: string;
    SUMMARY_HEADER: string;
    LABEL_ORIGINAL_DUE: string;
    LABEL_SELECTED: string;
    LABEL_REMAINING: string;
}

interface PrevPaidCmsData extends CmsChild {
    ShortDescription: string;
    LongDescription: string;
    SUMMARY_HEADER: string;
    LABEL_REMAINING_BALANCE: string;
    LABEL_TOTAL_PAYMENT: string;
    NO_INVOICES: string;
    HEADER: string;
}

interface GridPageCmsData extends InvoiceOverPaymentCmsData {
    Title: string;
    LongDescription: string;
    ShortDescription: string;
    LABEL_ORIGINAL_DUE: string;
    LABEL_DISCOUNT: string;
    LABEL_ADMIN_FEE: string;
    LABEL_TOTAL_DUE: string;
    TOAST_NO_INVOICES_SELECTED: string;
    PREVIOUSLY_PAID_HEADER: string;
    NO_DISCOUNT_HEADER: string;
    NO_DISCOUNT_INVOICE_HEADER: string;
    CAO_FEE_INFO: string;
    CAO_TOOL_TIP: string;
    LABEL_REMAINING_BALANCE: string;
    LABEL_TOTAL_PAYMENT: string;
    Children: (GridDiscountCmsData | SummaryCmsData | PrevPaidCmsData)[];
    CAF_TOOL_TIP_TITLE: string;
}

@Component({
    selector: 'violations-grid-component',
    templateUrl: './grid.html',
    styleUrls: ['./grid.less'],
    providers: [{ provide: PdfUrlService, useExisting: WebApisService }]
})
export class GridComponent implements OnInit {

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

    // CAF Feature Toggle. This is used in HTML file as well.
    @Input() discountPerAgencyAvailable: boolean;


    //Pagination
    public paginatedPlate: ViolationPlate = { invoices: [], uninvoicedViolations: [], invoicesAndViolations: [] } as ViolationPlate;
    public mobileLoadedPlate: ViolationPlate = { invoices: [], uninvoicedViolations: [], invoicesAndViolations: [] } as ViolationPlate;
    public get mobileLoadedCombinedViolationsArrayLength() {
        // Used for length comparison in HTML
        return this.mobileLoadedPlate.invoices.length + this.mobileLoadedPlate.uninvoicedViolations.length;
    }
    public readonly defaultPageSize = this.environmentConfig.paginationConfig.violations.PageSize;
    public readonly paginationLimit = this.environmentConfig.paginationConfig.violations.LimitToStart;

    public discountArray: string[] = [];

    public overpaymentModalCmsContent: OverpaymentModalCmsContent;
    public plateContainer: ViolationPlateContainer;
    public discountCmsData: GridDiscountCmsData = {} as GridDiscountCmsData;
    public noDiscountCmsData: SummaryCmsData = {} as SummaryCmsData;
    public prevPaidCmsData: PrevPaidCmsData = {} as PrevPaidCmsData;
    public showDiscountPage: boolean;
    public wizardBackLabel: string;
    public noDiscountWizardBackLabel: string;
    public previouslyPaidPlate: ViolationPlate;
    public showPreviouslyPaidPlate: boolean;
    public hasOutstandingViolations: boolean;
    public selectedAgenciesToPay: AgencyInformation[];
    public unpaidAgencies: AgencyInformation[];

    public cms = {
        discountTop: {
            text: '',
            invoiceHeader: '',
            invoiceHeaderDescription: '',
            selectHeader: '',
            selectHeaderDescription: '',
            summary: '',
            importantReminderHeader: '',
            importantReminder: '',
            data: {}
        },
        noDiscountTop: {
            plateHeader: '',
            plateHeaderDescription: '',
            outstandingViolationsHeader: '',
            outstandingViolationsHeaderDescription: '',
            data: {}
        }
    };

    private getPreviouslyPaidPlate = (plate: ViolationPlate): ViolationPlate => ({
        ...plate,
        invoices: plate.previouslyPaidInvoices,
        uninvoicedViolations: [],
        plateDueBeforeDiscount: 0
    });

    private hasViewableContent = (plate: ViolationPlate): boolean => (plate.invoices.length + plate.uninvoicedViolations.length) > 0;

    private getShowDiscountPage = (discountCmsData: boolean, hasOutstandingViolations: boolean, partialPayments: boolean) =>
        discountCmsData && hasOutstandingViolations && !partialPayments;

    private getCurrentStep = (hasOutstandingViolations: boolean): number => hasOutstandingViolations ? 1 : 0;


    private recalculatePlateContainerValues() {
        this.plateContainer.plate.totalSelected =
            this.selectedAgenciesToPay.reduce((sum, current) => sum + current.totalDueAfterDiscount, 0);
        this.plateContainer.plate.totalFeesDiscounted = this.selectedAgenciesToPay.reduce((sum, current) => sum + current.discountTotal, 0);
        this.plateContainer.remainingBalance =
            this.plateContainer.plate.agencies.reduce((sum, current) => sum + current.totalDueBeforeDiscount, 0)
            - this.selectedAgenciesToPay.reduce((sum, current) => sum + current.totalDueBeforeDiscount, 0);
    }

    selectSingleAgencyToPay(event: any) {
        if (event.target.checked) {
            this.selectedAgenciesToPay.push(
                this.plateContainer.plate.agencies.find(x => x.agencyName.toLowerCase() === event.target.value.toLowerCase())
            );

            //if all checkboxes are checked, check the "select all" checkbox.
            if (this.selectedAgenciesToPay.length === this.unpaidAgencies.length) {
                (document.getElementById('selectPayAllAgenciesCheckbox') as any).checked = true;
            }

        } else {
            this.selectedAgenciesToPay = this.selectedAgenciesToPay.filter(
                obj => obj.agencyName.toLowerCase() !== event.target.value.toLowerCase()
            );

            (document.getElementById('selectPayAllAgenciesCheckbox') as any).checked = false;
        }

        this.recalculatePlateContainerValues();
    }

    selectAllCheckboxes(event: any) {
        const checked = event.target.checked;
        this.unpaidAgencies.forEach(agency => {
            ((agency as any).isChecked = checked);
            ((document.getElementById(`selectPayAgency${agency.agencyName}Checkbox`) as any).checked) = checked;
        });

        //This removes all agencies currently in the array so that there are no duplicates (added twice)
        //use case: if user selected an agency before clicking "select all" -- this will cause duplicates of selected agencies
        while (this.selectedAgenciesToPay.length !== 0) {
            this.selectedAgenciesToPay.pop();
        }

        if (event.target.checked) {
            this.unpaidAgencies.forEach(agency => this.selectedAgenciesToPay.push(agency));
        }

        this.recalculatePlateContainerValues();
    }

    ngOnInit() {
        this.selectedAgenciesToPay = [];
        this.plateContainer = this.parent.getPlateContainer();
        //The if else can be removed once we cleanup the CAF feature toggle
        if (this.plateContainer.plate.invoicesAndViolations) {
            //This is to sync the object references
            this.plateContainer.plate.invoices = this.plateContainer.plate.invoicesAndViolations.filter(violation =>
                Array.isArray((violation as ViolationInvoice).violations)) as ViolationInvoice[];
            this.plateContainer.plate.uninvoicedViolations = this.plateContainer.plate.invoicesAndViolations.filter(violation =>
                !Array.isArray((violation as ViolationInvoice).violations)) as Violation[];
        } else {
            this.plateContainer.plate.invoicesAndViolations =
                [].concat(this.plateContainer.plate.invoices,
                    this.plateContainer.plate.uninvoicedViolations)
                    .filter(vio => !isNil(vio));
        }
        let discountStringArray = [];

        if (this.discountPerAgencyAvailable) {
            this.plateContainer.plate.agencies.forEach((agency) => {
                (agency as any).isChecked = false;
                //This is for the backwards flow as a way to reset
                agency.paymentAmount = 0;
            });
            this.recalculatePlateContainerValues();
            this.unpaidAgencies = this.plateContainer.plate.agencies.filter(x => x.totalDueBeforeDiscount !== 0);
            discountStringArray = [...new Set(this.plateContainer.plate.agencies.map(item => item.discountProgram))];
            discountStringArray = discountStringArray.filter(x => !isNil(x));
        }

        this.previouslyPaidPlate = this.getPreviouslyPaidPlate(this.plateContainer.plate);

        this.showPreviouslyPaidPlate = this.hasViewableContent(this.previouslyPaidPlate);
        this.hasOutstandingViolations = this.hasViewableContent(this.plateContainer.plate);//set to false to view previously paid only
        this.uiRouterGlobals.current.data.currentStep = this.getCurrentStep(this.hasOutstandingViolations);
        this.parent.stepNum = this.uiRouterGlobals.current.data.currentStep;

        this.discountCmsData = this.cmsData.Children
            .filter(child =>
                this.plateContainer
                    .plate
                    .discountProgramCode
                    .toString() === child.DISCOUNT_ENUM)[0] as GridDiscountCmsData;

        if (this.discountPerAgencyAvailable && discountStringArray.length > 0 && this.plateContainer.plate.discountProgramCode === 0) {
            this.discountCmsData = this.cmsData.Children
                .filter(child => discountStringArray[0] === child.DISCOUNT_STRING)[0] as GridDiscountCmsData;
        }

        this.setSummaryArray(discountStringArray);

        this.noDiscountCmsData = (this.cmsData.Children
            .filter(child => 'Summary' === child.ItemName)[0] || {}) as SummaryCmsData;
        this.prevPaidCmsData = (this.cmsData.Children
            .filter(child => 'Previously Paid' === child.ItemName)[0] || {}) as PrevPaidCmsData;
        if (this.discountCmsData) {
            this.discountCmsData.PAYMENT_SUMMARY_INFO = this.noDiscountCmsData.LongDescription || '';
        }

        this.showDiscountPage = this.getShowDiscountPage(
            !!this.discountCmsData,
            this.hasOutstandingViolations,
            this.plateContainer.partialPayments);

        this.cms.noDiscountTop.plateHeader = this.cmsData.NO_DISCOUNT_HEADER;
        this.cms.noDiscountTop.plateHeaderDescription = this.cmsData.ShortDescription;
        this.cms.noDiscountTop.outstandingViolationsHeaderDescription = this.cmsData.LongDescription;
        this.cms.noDiscountTop.outstandingViolationsHeader = this.cmsData.NO_DISCOUNT_INVOICE_HEADER;
        this.cms.discountTop.text = this.discountCmsData && this.discountCmsData.LongDescription;
        this.cms.discountTop.summary = this.discountCmsData &&
            this.discountCmsData.Children.filter(child => 'Summary' === child.ItemName)[0].ShortDescription || '';
        this.cms.discountTop.invoiceHeader = this.discountCmsData && this.discountCmsData.DISCOUNT_INVOICE_HEADER;
        this.cms.discountTop.invoiceHeaderDescription = this.discountCmsData && this.discountCmsData.ShortDescription;
        this.cms.discountTop.selectHeader = this.discountCmsData && this.discountCmsData.DISCOUNT_VIOLATIONS_HEADER;
        this.cms.discountTop.selectHeaderDescription = this.discountCmsData && this.discountCmsData.LongDescription;
        this.cms.discountTop.importantReminderHeader = this.discountCmsData && this.discountCmsData.IMPORTANT_REMINDER;
        this.cms.discountTop.importantReminder = this.discountCmsData &&
            this.discountCmsData.Children.filter(child => 'Important Reminder' === child.ItemName)[0].ShortDescription || '';

        this.cms.discountTop.data = this.cms.noDiscountTop.data = {
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

        this.noDiscountWizardBackLabel = this.discountCmsData
            ? 'Previous'
            : this.wizardBackLabel;

        this.parent.setTitle(this.getDiscountTitle());
        this.parent.scrollToTop();


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
    }
    // The paginated version of the plate should only be updated when pagination events are triggered
    public updateViolationsDetailsTable(event: PageEvent) {
        // Use the start/end indexes to retrieve the violations to show
        const start = event.pageIndex * event.pageSize;
        const end = (event.pageIndex + 1) * event.pageSize;
        const subViolationsArray = this.plateContainer.plate.invoicesAndViolations.slice(start, end);

        // Split the violations array back into the separate arrays for component and later logic consumption
        this.paginatedPlate.invoices = subViolationsArray.filter(violation =>
            Array.isArray((violation as ViolationInvoice).violations)) as ViolationInvoice[];
        this.paginatedPlate.uninvoicedViolations = subViolationsArray.filter(violation =>
            !Array.isArray((violation as ViolationInvoice).violations)) as Violation[];
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
            violation => Array.isArray((violation as ViolationInvoice).violations)) as ViolationInvoice[]);
        this.mobileLoadedPlate.uninvoicedViolations = this.mobileLoadedPlate.uninvoicedViolations.concat(subViolationsArray.filter(
            violation => !Array.isArray((violation as ViolationInvoice).violations)) as Violation[]);
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

    async goToNextWhenPaymentAmountValid(targetState: StateOrName) {

        if (this.plateContainer.plate.totalSelected >= 0.01) {
            await this.goToNextState(targetState);
        } else {
            this.toasterService.show('Success', this.cmsData.TOAST_NO_INVOICES_SELECTED);
        }
    }

    async goToNextState(targetState: StateOrName) {

        this.savePlateContainer();
        await this.state.go(targetState, { billingInfo: this.uiRouterGlobals.params.billingInfo });
    }

    private savePlateContainer = () => {
        if (this.discountPerAgencyAvailable && this.showDiscountPage) {

            // Manually delete the isChecked attribute per agency if showDiscountPage is true.
            // It was used for user selection of agencies to pay.
            // This is not needed if !showDiscountPage because it is the "original", which doesn't have isChecked. 
            this.plateContainer.plate.agencies.forEach(agency => delete (agency as any).isChecked);
            this.selectedAgenciesToPay.forEach(agency => agency.paymentAmount = agency.totalDueAfterDiscount);
        }

        const { plate } = this.plateContainer;

        const plateContainerWithDiscount: ViolationPlateContainer = {
            ...this.plateContainer,
            violationsFlowName: this.showDiscountPage ? this.discountCmsData.ItemName : 'OLVPS',
            partialPayments: !this.showDiscountPage,
            paymentAmount: !this.discountPerAgencyAvailable && this.showDiscountPage
                ? plate.totalPaymentAmount
                : this.discountPerAgencyAvailable && this.showDiscountPage
                    ? plate.totalSelected + plate.serviceFee
                    : plate.totalSelected,
            remainingBalance: !this.discountPerAgencyAvailable && this.showDiscountPage
                ? 0
                : plate.remainingBalance
        };

        this.webStorage.setKeyValue(this.webStorageConst.enhancedViolationsPlateAndInvoiceData, plateContainerWithDiscount);
    };

    async showDiscount(targetState: StateOrName) {

        if (this.discountCmsData) {
            this.parent.setTitle(this.getDiscountTitle());
            this.showDiscountPage = true;
            this.savePlateContainer();
            this.parent.scrollToTop();
        } else {
            await this.goToPreviousState(targetState);
        }
    }

    async hideDiscount() {
        this.selectedAgenciesToPay = [];
        this.recalculatePlateContainerValues();
        this.parent.setTitle(this.cmsData.Title);
        this.showDiscountPage = false;
        this.savePlateContainer();
        this.parent.scrollToTop();
    }

    private getDiscountTitle() {
        return (this.discountCmsData && this.discountCmsData.Title) || this.cmsData.Title;
    }

    async goToPreviousState(targetState: StateOrName) {

        const to = this.plateContainer.plate.isNewEzTagAccountEligibile
            ? cavveStates.Offer
            : targetState;


        this.savePlateContainer();
        await this.state.go(to);
    }

    private setSummaryArray(discountEnumArray: string[]) {
        discountEnumArray.forEach((x) => {
            const discountCms = (this.cmsData.Children
                .filter(child =>
                    x.toString() === child.DISCOUNT_STRING)[0] as GridDiscountCmsData);
            const discountSummary = !discountCms ? '' :
                discountCms
                    .Children
                    .filter(child => 'Summary' === child.ItemName)[0].LongDescription || '';

            if (discountSummary) {
                this.discountArray = this.discountArray.concat(discountSummary);
            }
        });
    }
}
