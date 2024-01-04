import { Injectable } from '@angular/core';
import { IEZTag } from 'vehicles/interfaces';

export enum SortColumn {
    nickname = 'nickname',
    color = 'vehicleColor',
    axles = 'vehicleClassCode',
    status = 'tagStatusDesc',
    licencePlate = 'licencePlate',
    eztagnum = 'fullTagId',
    'year/make/model' = 'year/make/model',
    startDate = 'pbpStartDate',
    endDate = 'pbpEndDate'
}

@Injectable()
export class VehiclesSortingService {

    sort(vehicles: IEZTag[], sortOn: { colName: SortColumn; type: 'asc' | 'desc' }) {

        if (sortOn.colName !== undefined) {
            switch (sortOn.colName) {
                case SortColumn['year/make/model']:
                    this.sortMakeYearModel(vehicles, sortOn.type);
                    return vehicles;

                case SortColumn.licencePlate:
                    this.sortLicPlate(vehicles, sortOn.type);
                    return vehicles;

                default:
                    this.sortColumn(vehicles, sortOn);
                    return vehicles;

            }

        }
    }

    private sortColumn(vehicles: IEZTag[], sortOn: { colName: SortColumn; type: 'asc' | 'desc' }) {
        switch (sortOn.type) {

            case 'asc':

                vehicles.sort((a, b) =>
                    this.getVal(a[sortOn.colName], b[sortOn.colName], 'asc')
                );
                break;

            case 'desc':
                vehicles.sort((a, b) =>
                    this.getVal(a[sortOn.colName], b[sortOn.colName], 'desc')
                );
                break;

        }


    }

    private getVal(val1, val2, order: 'asc' | 'desc') {
        if (val1 === null) {
            return 1;
        }
        if (val2 === null) {
            return -1;
        }
        switch (order) {

            case 'asc':
                return val1.toUpperCase() < val2.toUpperCase() ? -1 : val1.toUpperCase() > val2.toUpperCase() ? 1 : 0;
            case 'desc':
                return val1.toUpperCase() < val2.toUpperCase() ? 1 : val1.toUpperCase() > val2.toUpperCase() ? -1 : 0;
            default:
                return 0;
        }

    }

    private sortLicPlate(vehicles: IEZTag[], type: 'asc' | 'desc') {

        switch (type) {

            case 'asc':

                vehicles.sort((a, b) =>
                    a.licState < b.licState ? -1 :
                        a.licState === b.licState ? this.getVal(a.licPlate, b.licPlate, 'asc') : 1
                );

                break;

            case 'desc':

                vehicles.sort((a, b) =>
                    a.licState > b.licState ? -1 :
                        a.licState === b.licState ? this.getVal(a.licPlate, b.licPlate, 'desc') : 1
                );
                break;

            default:
                break;
        }

    }

    private sortMakeYearModel(vehicles: IEZTag[], type: 'asc' | 'desc') {

        switch (type) {

            case 'asc':

                vehicles.sort((a, b) =>
                    a.vehicleYear < b.vehicleYear ? -1 :
                        a.vehicleYear > b.vehicleYear ? 1 :

                            (a.vehicleMake < b.vehicleMake ? -1 :
                                a.vehicleMake > b.vehicleMake ? 1 :
                                    this.getVal(a.vehicleModel, b.vehicleModel, 'asc')
                            )

                );

                break;

            case 'desc':

                vehicles.sort((a, b) =>

                    a.vehicleYear < b.vehicleYear ? 1 :
                        a.vehicleYear > b.vehicleYear ? -1 :

                            (a.vehicleMake > b.vehicleMake ? -1 :
                                a.vehicleMake < b.vehicleMake ? 1 :
                                    this.getVal(a.vehicleModel, b.vehicleModel, 'desc')
                            )


                );
                break;

            default:
                break;
        }

    }



}
