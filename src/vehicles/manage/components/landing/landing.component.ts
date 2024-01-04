import { Component, OnInit, Input, Predicate, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { ResponseErrorService, ToasterService } from 'common/services';
import { IEditPlateInjectedValues, IEZTag, ISearchTagsRequest, IStatus } from 'vehicles/interfaces';

import { DialogService } from 'common/services';
import {
    GenericCmsModalComponent,
    GenericCmsModalContent,
    GenericCmsModalInjectionValues
} from 'common/ui/modals/genericCmsModal/genericCmsModal.component';
import { State } from 'common/models';
// import { EditPlateComponent } from 'vehicles/editPlate/editPlate.component';
import { stateNames as LegacyStates } from 'constants/stateNames.constants';
import { stateNames } from 'constants/module';
import { WindowRef } from 'common/providers';
import { DateWithTimeZonePipe } from 'pipes/dateWithTimeZone/dateWithTimeZone.pipe';
import { CopyToExcelService } from 'common/services/copyToExcel/copyToExcel.service';
import { ENVIRON_CONFIG } from 'common/module';
import { TagReactivateManagerService, TagReactivateStatus } from 'vehicles/eztag/reactivate';
import { ReplacementManagerService } from 'vehicles/eztag/replacement';
import { WebUIStates as VehicleStates } from '../../../shared';
import { EditTagComponent } from 'vehicles/eztag/edit/editTag.component';
import { EditPlateComponent } from 'vehicles/ezplate/edit/editPlate.component';
import { IAddPlateVehicleInfoCMSContent, IAddTagVehicleInfoCMSContent, IEditTagInjectedValues, VehicleProduct } from 'vehicles/shared/models';
import { IManageVehiclesOptions, MANAGE_VEHICLES_OPTIONS, VehicleAction, VehicleCmsContent, VehicleFilter, VehicleState } from './models';
import { VehiclesManagerService } from 'vehicles/shared';
import { SortColumn, VehiclesSortingService } from 'vehicles/manage/services/sorting/sorting-service';
import { MediaObserver } from '@angular/flex-layout';
import { Sort } from '@angular/material/sort';
import { MailingAddressService } from 'vehicles/shared';

const default_options: IManageVehiclesOptions = {
    pageSize: 25
};

@Component({
    selector: 'vehicles-landing',
    templateUrl: './landing.html',
    styleUrls: ['./landing.less'],
    providers: [{ provide: MANAGE_VEHICLES_OPTIONS, useValue: default_options },
        CopyToExcelService
    ]
})
export class LandingComponent implements OnInit, AfterViewInit {

    public readonly pageCount;

    eztagStatusValues: {
        key: string;
        value: VehicleAction;
    }[] = [];

    sortState: {
        colName: SortColumn;
        order: 'asc' | 'desc';
    };

    sortCol = SortColumn;

    constructor(
        private vehiclesManagerService: VehiclesManagerService,
        private responseErrorService: ResponseErrorService,
        private state: StateService,
        private dialogService: DialogService,
        @Inject(MANAGE_VEHICLES_OPTIONS) manageVehicleOptions: IManageVehiclesOptions,
        @Inject(WindowRef) private window: Window,
        private dateWithTimeZonePipe: DateWithTimeZonePipe,
        private copyToExcelService: CopyToExcelService,
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private tagReactivateMgrService: TagReactivateManagerService,
        private replacementManagerService: ReplacementManagerService,
        private sortingService: VehiclesSortingService,
        private mediaObserver: MediaObserver,
        private mailingService: MailingAddressService,
        private toasterService: ToasterService
    ) {
        this.pageCount = manageVehicleOptions.pageSize;
    }

    @Input() vehicleCmsContent: VehicleCmsContent;
    @Input() stateList: State[];
    @Input() public cmsAddTagVehicleInfo: IAddTagVehicleInfoCMSContent;
    @Input() public cmsAddPlateVehicleInfo: IAddPlateVehicleInfoCMSContent;

    @ViewChild('GridContainer') gridContainer: ElementRef;
    @ViewChild('GridCopyContainer') gridCopyContainer: ElementRef;

    maxEzPlatesAllowed: number;
    disableAddProductLink: boolean;
    disableAddEzPlatLinkError: string;
    editBtnText: string;
    // todo: child shouldnot be accessed by index. Remove during new refactor
    get deactivateTagCmsContent(): GenericCmsModalContent {
        return {
            Title: this.vehicleCmsContent?.Children[2].Title,
            AcceptBtn: this.vehicleCmsContent?.Children[2]['accept'],
            PrimaryContent: this.vehicleCmsContent?.Children[2].LongDescription,
            CancelBtn: this.vehicleCmsContent?.Children[2]['cancel']
        };
    };

    // todo: child shouldnot be accessed by index. Remove during new refactor

    get activatePlateCmsContent(): GenericCmsModalContent {
        return {
            Title: this.vehicleCmsContent?.Children[3].Title,
            AcceptBtn: this.vehicleCmsContent?.Children[3]['accept'],
            PrimaryContent: this.vehicleCmsContent?.Children[3].LongDescription,
            CancelBtn: this.vehicleCmsContent?.Children[3]['cancel']
        };
    };

    // todo: child shouldnot be accessed by index. Remove during new refactor

    get deactivatePlateCmsContent(): GenericCmsModalContent {
        return {
            Title: this.vehicleCmsContent?.Children[4].Title,
            AcceptBtn: this.vehicleCmsContent?.Children[4]['accept'],
            PrimaryContent: this.vehicleCmsContent?.Children[4].LongDescription,
            CancelBtn: this.vehicleCmsContent?.Children[4]['cancel']
        };
    };

    get emptyVehicleCmsContent(): string {
        const activeParam = this.filter.isActive ? '' : 'In';
        const productParam = this.filter.product === VehicleProduct.eztag ? 'Tag' : 'Plate';
        const key = `no${activeParam}ActiveEz${productParam}`;
        return this.vehicleCmsContent?.Children[4][key];
    };

    public VehicleState = VehicleState;
    public VehicleProduct = VehicleProduct;
    public VehicleAction = VehicleAction;

    public filter: VehicleFilter;

    public ezTags: IEZTag[];
    public ezPlates: IEZTag[];
    public isMVUEligible: boolean;
    isLtMd: boolean;
    filteredVehicles: IEZTag[];

    public get hasMore(): boolean {

        if (!this.filter) {
            return false;
        }

        const vehicles = this.filter.product === VehicleProduct.eztag
            ? this.ezTags || []
            : this.ezPlates || [];

        const numberOfPages = 1 + Math.floor((vehicles.length - 1) / this.pageCount);

        return this.filter.visiblePages < numberOfPages;
    }

    private getSubset() {

        const vehicles = this.filter.product === VehicleProduct.eztag
            ? this.ezTags || []
            : this.ezPlates || [];

        let subset = vehicles.filter((ignore, index) => this.filter.visiblePages > Math.floor(index / this.pageCount));

        if (this.sortState && this.sortState !== undefined) {
            subset = this.sortingService.sort(subset,
                { colName: this.sortState.colName, type: this.sortState.order });
        }
        return subset;
    }

    public loadMore() {
        this.filter.visiblePages++;

        this.filteredVehicles = this.getSubset();

    }

    async ngOnInit(): Promise<void> {
        this.disableAddEzPlatLinkError = this.cmsAddPlateVehicleInfo.MaxPlateError;
        this.filter = {
            product: VehicleProduct.eztag,
            isActive: true,
            keyword: null,
            visiblePages: 1
        };

        await this.queryVehicles();

        this.isLtMd = this.mediaObserver.isActive('lt-md');

        this.filteredVehicles = this.getSubset();
        this.setEztagStatusValues();
        this.editBtnText = this.setEditBtnText();
        await this.mailingService.clearData();
    }

    filterVehicles(ezTags: IEZTag[], ezPlates: IEZTag[]) {

        return [
            ezTags.filter(x => this.isActive(x) === this.filter.isActive),
            ezPlates.filter(x => this.isActive(x) === this.filter.isActive)
        ];
    }

    public isActive(vehicle: IEZTag): boolean {

        switch (vehicle.tagStatusDesc) {
            case VehicleState.active:
            case VehicleState.pending:
            case VehicleState.pendingActivation:
                return true;
            default:
                return false;
        }
    }

    public canEdit: Predicate<IEZTag> = (vehicle: IEZTag): boolean => {
        switch (vehicle.tagStatusDesc) {
            case VehicleState.pendingActivation:
                return false;
            case VehicleState.inactive:
                return false;
            case VehicleState.expired:
                return false;
            case VehicleState.unknown:
                return false;
            default:
                return true;
        }
    };

    public getVehicleState(vehicle: IEZTag): VehicleState {

        switch (vehicle.tagStatusDesc) {
            case VehicleState.active:
            case VehicleState.inactive:
            case VehicleState.expired:
            case VehicleState.pendingActivation:
            case VehicleState.lostInMail:
            case VehicleState.pending:
                return vehicle.tagStatusDesc as VehicleState;
            default:
                return VehicleState.unknown;
        }
    }

    public getVehicleStateDescription(vehicle: IEZTag): string {

        const state = this.getVehicleState(vehicle);

        switch (state) {
            case VehicleState.active: return this.vehicleCmsContent.active;
            case VehicleState.inactive: return this.vehicleCmsContent.inactive;
            case VehicleState.pending: return this.vehicleCmsContent.pending;
            case VehicleState.expired: return this.vehicleCmsContent.expired;
            case VehicleState.pendingActivation: return this.vehicleCmsContent.pendingActivation;
            case VehicleState.lostInMail: return this.vehicleCmsContent.lostInMail;
            default: return null;
        }

    }

    public async queryVehicles(keyword?: string, resetPageCount: boolean = true) {

        this.filter.keyword = keyword;

        if (resetPageCount) {
            this.filter.visiblePages = 1;
        }

        const query = { searchValue: this.filter.keyword } as ISearchTagsRequest;
        const response = await this.vehiclesManagerService.queryVehicles(query);

        this.maxEzPlatesAllowed = response.maxEzPlatesAllowed;

        if (!this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayErrorsFromResponse(response);
            return;
        }

        const { accountTags: ezTags, pbpTags: ezPlates } = response;
        [this.ezTags, this.ezPlates] = this.filterVehicles(ezTags, ezPlates);

        if (keyword !== undefined) {
            this.refreshGridWhenSearchTags();
        }

        this.isMVUEligible = response.multiVehicleAllowed;

        this.disableAddProduct();
    }

    private refreshGridWhenSearchTags() {
        this.filteredVehicles = this.getSubset();
    }

    public async addProduct() {
        this.vehiclesManagerService.clearData();
        if (this.filter.product === VehicleProduct.eztag) {
            await this.state.go(VehicleStates.TagVehicleInformation);
        } else if (this.filter.product === VehicleProduct.ezplate) {
            await this.state.go(VehicleStates.PlateVehicleInformation);
        }
    }

    disableAddProduct() {
        this.disableAddProductLink = false;

        if (this.filter.product === VehicleProduct.ezplate &&
            (this.ezPlates && (this.ezPlates.length === this.maxEzPlatesAllowed))
        ) {
            this.disableAddProductLink = true;
        }
    }

    public async addMVU() {
        await this.state.go(this.environmentConfig.useNewMvu ? VehicleStates.MvuUpload : LegacyStates.multiVehicleUpload);
    }

    public async toggleVehicleStatus() {
        this.filter.isActive = !this.filter.isActive;

        await this.queryVehicles();
        this.sortState = null;
        this.filteredVehicles = this.getSubset();
        this.setEztagStatusValues();
    }

    public async toEZTag() {
        this.sortState = null;
        this.filter.visiblePages = 1;
        this.filter.product = VehicleProduct.eztag;
        this.filteredVehicles = this.getSubset();
        this.disableAddProduct();
        this.editBtnText = this.setEditBtnText();
    }

    public async toEZPlate() {
        this.sortState = null;
        this.filter.visiblePages = 1;
        this.filter.product = VehicleProduct.ezplate;
        this.filteredVehicles = this.getSubset();
        this.disableAddProduct();
        this.editBtnText = this.setEditBtnText();
    }

    public setEditBtnText = () => {

        switch (this.filter.product) {
            case VehicleProduct.eztag:
                return this.vehicleCmsContent.tagEditButton;

            case VehicleProduct.ezplate:
                return this.vehicleCmsContent.plateEditButton;

            default:
                return this.vehicleCmsContent.tagEditButton;
        }
    };

    // todo: move to new edit service
    public async editEzPlate(vehicle: IEZTag) {
        const data: IEditPlateInjectedValues = {
            plate: { ...vehicle } as IEZTag,
            header: 'EZ PLATE',
            cmsContent: { ...this.cmsAddPlateVehicleInfo },
            showStatus: true,
            status: {
                active: this.vehicleCmsContent.active,
                inactive: this.vehicleCmsContent.inactive,
            } as IStatus,
            statesList: this.stateList
        };

        const { plate, savePlate } = (await this.dialogService.openSliderFilled(EditPlateComponent, data, { title: 'Edit EZ PLATE' })) || {};

        if (savePlate) {
            const res = await this.vehiclesManagerService.update(plate);
            if (res.errors.length === 0) {
                this.toasterService.show('Success', this.cmsAddPlateVehicleInfo.EDIT_EZPLATE);
            }
            await this.queryVehicles(this.filter.keyword, false);
            this.filteredVehicles = this.getSubset();
        }

    }

    // todo: move to new edit service

    public async editEzTag(vehicle: IEZTag) {

        const data = {
            tag: { ...vehicle } as IEZTag,
            cmsAddTagVehicleInfo: {
                ...this.cmsAddTagVehicleInfo
            },
            cmsModalValues: {
                active: this.vehicleCmsContent.active,
                inactive: this.vehicleCmsContent.inactive,
                title: 'EZ TAG'
            },
            showStatus: true,
            statesList: this.stateList
        } as IEditTagInjectedValues;

        const { tag, saveTag } = (await this.dialogService.openSliderFilled(EditTagComponent, data, { title: 'Edit EZ TAG' })) || {};

        if (saveTag) {
            const res = await this.vehiclesManagerService.updateTagVehicleInfoFromLanding(tag);
            if (res.errors.length === 0) {
                this.toasterService.show('Success', 'Edit EZ Tag Successfully Saved');
            }
            await this.queryVehicles(this.filter.keyword, false);
            this.filteredVehicles = this.getSubset();
        }

    }

    public async doVehicleAction(vehicle: IEZTag, product: VehicleProduct, action: VehicleAction) {

        switch (action) {
            case VehicleAction.activate:
                //for now, only deactivate
                return;
            case VehicleAction.deactivate:
                return await this.doVehicleDeactivation(vehicle, product);

            case VehicleAction.reactivate:
                if (product === VehicleProduct.eztag) {
                    await this.reactivateTag(vehicle);
                }
                break;

            case VehicleAction.replace:
                if (product === VehicleProduct.eztag) {
                    this.replaceTag(vehicle);
                }
                break;
        }

    }

    async reactivateTag(vehicle: IEZTag) {

        const data = this.vehicleCmsContent.Children.filter(child => child.ItemName.toUpperCase() === 'REACTIVATE TAG');
        if (data.length > 0) {

            const res = await this.tagReactivateMgrService.reactivate({
                ezTagNum: vehicle.fullTagId,
                sitecoreContent: data[0],
                vehicle
            });

            switch (res.status) {

                case TagReactivateStatus.UserCancel:
                    break;

                case TagReactivateStatus.Pass:
                    await this.toggleVehicleStatus();
                    this.toasterService.show('Success', 'Your Vehicle information has been successfully updated.');
                    break;

                case TagReactivateStatus.Fail:
                    this.toasterService.show('Error', res.errors[0].message);
            }
        }
    }


    replaceTag(vehicle: IEZTag) {

        const content = this.vehicleCmsContent.Children.filter(child => child.ItemName.toUpperCase() === 'REPLACE TAG');
        if (content.length > 0) {
            this.replacementManagerService.replace(content[0], vehicle);
        }
    }

    // todo move to new service
    public async doVehicleDeactivation(vehicle: IEZTag, product: VehicleProduct) {
        if (!this.isActive(vehicle)) {
            return;
        }

        const cmsContent = product === VehicleProduct.eztag
            ? this.deactivateTagCmsContent
            : this.deactivatePlateCmsContent;

        const data = {
            cmsContent
        } as GenericCmsModalInjectionValues;

        const accepted = (await this.dialogService.openGenericModal(GenericCmsModalComponent, data)) as boolean;

        if (accepted) {

            const statusUpdated = await this.vehiclesManagerService.deactivate(vehicle, product);

            if (this.responseErrorService.isErrorFree(statusUpdated)) {
                await this.queryVehicles(this.filter.keyword);
                this.sortState = null;
                this.filteredVehicles = this.getSubset();
            } else {
                this.responseErrorService.displayErrorsFromResponse(statusUpdated);
            }

        }
    }

    public async pendingActivationClick() {
        await this.state.go(stateNames.activateEzTag);
    }

    setEztagStatusValues() {
        switch (this.filter.isActive) {

            case true:
                this.eztagStatusValues = [
                    {
                        key: this.vehicleCmsContent.active,
                        value: VehicleAction.activate
                    },
                    {
                        key: this.vehicleCmsContent.inactivate,
                        value: VehicleAction.deactivate
                    }
                ];

                if (this.environmentConfig.vehicleReplacement) {
                    this.eztagStatusValues.push({
                        key: this.vehicleCmsContent.replace,
                        value: VehicleAction.replace
                    });
                }

                break;

            case false:

                this.eztagStatusValues = [
                    {
                        key: this.vehicleCmsContent.inactive,
                        value: VehicleAction.deactivate
                    }
                ];
                if (this.environmentConfig.vehicleReactivate) {
                    this.eztagStatusValues.push({
                        key: this.vehicleCmsContent.reactivate,
                        value: VehicleAction.reactivate
                    });
                }

                break;

        }

    }

    filterStatus(vehicle: IEZTag) {
        if (vehicle.fullTagId === '' && !this.filter.isActive && this.environmentConfig.vehicleReactivate) {
            return this.eztagStatusValues.filter(status => status.value !== VehicleAction.reactivate);
        } else if (vehicle.fullTagId === '' || vehicle.fullTagId === '0') {
            return this.eztagStatusValues.filter(status => status.value !== VehicleAction.replace);
        }
        else {
            return this.eztagStatusValues;
        }
    }

    sortData(sort: Sort) {
        const data = this.ezTags;
        if (!sort.active || sort.direction === '') {
            this.ezTags = data;
            return;
        }

        if (sort.active && sort.direction) {
            const colName = sort.active as SortColumn;
            this.sort(colName, sort.direction);
        }
    }

    private sort(colName: SortColumn, order: 'asc' | 'desc') {
        this.sortState = { colName, order };

        this.sortingService.sort(this.filteredVehicles, { colName, type: order });
    }

    ngAfterViewInit() {

        //To do: complete the requiremeent 85436 first if there is a change in the UI of vehicles grid

        const gridElement = this.gridContainer.nativeElement as HTMLElement;

        gridElement.addEventListener('copy', (e) => {

            if (this.filter.product === VehicleProduct.eztag) {
                this.copyToExcelEzTag(e);
            }

            if (this.filter.product === VehicleProduct.ezplate) {
                this.copyToExcelEzPlate(e);
            }
        });
    }

    private copyToExcelEzTag(e) {
        const data = this.window.getSelection().toString().split('\n');
        const filterData = data.filter(d => d !== '');

        const range = this.window.getSelection().getRangeAt(0);

        //set start container

        const startContainer = range.startContainer;
        let startEl = startContainer;
        const objRows = [];
        let newStartEl = startEl;

        while (startEl.textContent !== filterData[0]) {
            startEl = startEl.parentElement.nextElementSibling;
        }

        if (startEl.childNodes.length > 0) {
            if (startEl.firstChild.nodeName === '#text') {
                newStartEl = startEl.firstChild;
            }
        }

        let parentEl = newStartEl.parentElement;

        while (parentEl.localName !== 'fx-row') {
            parentEl = parentEl.parentElement;
        };

        const fxRow = parentEl;
        let nextFxRow = fxRow;

        //create first object
        let obj = {} as any;

        const key = newStartEl.parentElement.getAttribute('name');
        obj[key] = filterData[0];


        let nextElement = newStartEl.parentElement.nextElementSibling;

        for (let i = 1; i < filterData.length; i++) {

            while (nextElement.textContent.trim() === '') {
                nextElement = nextElement.nextElementSibling;
            }

            if (filterData[i].trim() !== '' && (nextElement.textContent.trim() === filterData[i].trim())) {

                const key1 = nextElement.getAttribute('name');
                obj[key1] = filterData[i];

                //end of fxrow
                if (nextElement.getAttribute('name') === 'status') {

                    objRows.push(obj);

                    const newFxRow = nextFxRow.nextElementSibling;
                    if (newFxRow !== null) {
                        const vehicleRow = newFxRow.getElementsByClassName('vehicle-row')[0];
                        nextElement = vehicleRow.children[0];
                        nextFxRow = newFxRow as HTMLElement;
                    }

                    obj = {};
                } else {

                    if (i === filterData.length - 1) {
                        objRows.push(obj);
                    }

                    //move to next sibling
                    nextElement = nextElement.nextElementSibling;
                }
            }

        }

        // console.log(objRows);


        const cols = ['nickname', 'year/make/model', 'licence plate', 'ez tag number', 'color', 'axles', 'status'];
        const newTbl = this.copyToExcelService.getDataForExcel(objRows, cols);

        e.clipboardData.setData('text/plain', newTbl);

        e.preventDefault();

    }

    private copyToExcelEzPlate(e) {
        const data = this.window.getSelection().toString().split('\n');
        const filterData = data.filter(d => d !== '');

        const range = this.window.getSelection().getRangeAt(0);

        //set start container

        const startContainer = range.startContainer;
        let startEl = startContainer;
        const objRows = [];
        let newStartEl = startEl;

        let textContent = startEl.textContent;

        let filterDataFirstEl = filterData[0];
        let filterDataStartPosition = 1;

        while (textContent.trim() !== filterDataFirstEl) {

            if (startEl.parentElement.nextElementSibling.getAttribute('name') === 'start date' ||
                startEl.parentElement.nextElementSibling.getAttribute('name') === 'end date') {
                const datetime = startEl.parentElement.nextElementSibling.textContent.trim().split('  ');
                // textContent = datetime[0];
                textContent = startEl.parentElement.nextElementSibling.textContent.trim();
                filterDataFirstEl = startEl.parentElement.nextElementSibling.textContent.trim();

                startEl = startEl.parentElement.nextElementSibling;
                filterDataStartPosition++;;
            } else {
                startEl = startEl.parentElement.nextElementSibling;
                textContent = startEl.textContent;
            }



        }

        if (startEl.childNodes.length > 0) {
            if (startEl.firstChild.nodeName === '#text') {
                newStartEl = startEl.firstChild;
            }
        }

        let parentEl = newStartEl.parentElement;

        while (parentEl.localName !== 'fx-row') {
            parentEl = parentEl.parentElement;
        };

        const fxRow = parentEl;
        let nextFxRow = fxRow;

        //create first object
        let obj = {} as any;

        const key = newStartEl.parentElement.getAttribute('name');
        obj[key] = filterDataFirstEl;
        // obj[key] = filterData[0];


        let nextElement = newStartEl.parentElement.nextElementSibling;

        for (let i = filterDataStartPosition; i < filterData.length; i++) {

            while (nextElement.textContent.trim() === '' ||
                nextElement.hasAttribute('name') === false) {
                nextElement = nextElement.nextElementSibling;
            }

            if (nextElement.getAttribute('name') === 'start date' ||
                nextElement.getAttribute('name') === 'end date') {
                const datetime = nextElement.textContent.trim().split('  ');
                const date = datetime[0];
                const time = datetime[1];

                if ((date === filterData[i]) && (time === filterData[i + 1])) {

                    const key1 = nextElement.getAttribute('name');
                    obj[key1] = nextElement.textContent.trim();

                    i++;

                    if (i === filterData.length - 1) {
                        objRows.push(obj);
                    }

                    nextElement = nextElement.nextElementSibling;

                }
            } else {

                if (filterData[i].trim() !== '' && (nextElement.textContent.trim() === filterData[i].trim())) {

                    const newKey = nextElement.getAttribute('name');
                    obj[newKey] = filterData[i];

                    //end of fxrow
                    if (nextElement.getAttribute('name') === 'status') {

                        objRows.push(obj);

                        const newFxRow = nextFxRow.nextElementSibling;
                        if (newFxRow !== null) { //if undefined, it means the end of grid
                            const vehicleRow = newFxRow.getElementsByClassName('vehicle-row')[0];
                            nextElement = vehicleRow.children[0];
                            nextFxRow = newFxRow as HTMLElement;
                        }

                        obj = {};
                    } else {

                        if (i === filterData.length - 1) {
                            objRows.push(obj);
                        }

                        //move to next sibling
                        nextElement = nextElement.nextElementSibling;
                    }
                }
            }

        }

        const cols = ['nickname', 'year/make/model', 'licence plate', 'color', 'start date', 'end date', 'status'];
        const newTbl = this.copyToExcelService.getDataForExcel(objRows, cols);

        e.clipboardData.setData('text/plain', newTbl);



        e.preventDefault();

    }

}



