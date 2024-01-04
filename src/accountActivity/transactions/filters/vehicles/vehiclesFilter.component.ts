import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NickName, SearchAccountActivityRequest } from 'accountActivity/interfaces';
import { FilterChangeService } from 'accountActivity/services/filter/filter-change.service';
import { FilterDataManager } from 'accountActivity/services/filter/filter-data.manager';
import { EventType, FilterName, IFilterEvent } from 'accountActivity/transactions/transactions.interfaces';
import { Subject, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    styleUrls: ['../../transaction.common.less', './vehiclesFilter.component.less'],
    templateUrl: './vehiclesFilter.component.html'
})
export class VehiclesFilterComponent implements OnInit {

    event$ = new Subject<IFilterEvent>();
    showList = false;
    value = 'All Vehicles';

    isOpen = false;

    public selectedVehicle: string;

    public control = new FormControl();
    public searchVehicleDropdownData: NickName[] = [];
    public filteredSearchVehicleDropdownData: NickName[];

    public licensePlate: string;

    public isValid = true;

    constructor(
        private filterChangeService: FilterChangeService,
        private filterDataManager: FilterDataManager
    ) {

    }

    ngOnInit() {
        this.licensePlate = '';

        this.getVehiclesData();

        this.selectedVehicle = 'All Vehicles';
    }

    notify() {
        const eventInfo = {
            eventType: EventType.Filter,
            name: FilterName.Vehicle,
            value: this.selectedVehicle ? this.selectedVehicle : 'All Vehicles'
        } as IFilterEvent;

        this.filterChangeService.notifyEvent(eventInfo);

    }

    resetValid() {
        this.isValid = true;
    }

    private getVehiclesData() {

        this.searchVehicleDropdownData = this.filterDataManager.getVehicleFilterData();
        this.filteredSearchVehicleDropdownData = this.searchVehicleDropdownData;
    }

    public close() {
        this.isOpen = false;
        this.licensePlate = '';
    }

    public clear() {
        this.licensePlate = '';
    }

    selectOption(vehicle) {
        const vehicleText = vehicle.text.trim();
        this.selectedVehicle = vehicleText.toLowerCase() === 'all vehicles' ? 'All Vehicles' : vehicleText.toUpperCase();
        this.notify();
        this.isOpen = false;
    }

    public filteredSearchVehicleDropdownList() {
        const vehicletext = this.control.value.toLowerCase().trim();
        return this.filteredSearchVehicleDropdownData.filter(vehicle => vehicle.text.toLowerCase().trim().includes(vehicletext));
    }

}
