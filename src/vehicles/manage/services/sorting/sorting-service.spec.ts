import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { IEZTag } from 'vehicles/interfaces';
import { SortColumn, VehiclesSortingService } from './sorting-service';

describe('Vehicles Sorting Service', () => {

    let vehiclesSortingService: VehiclesSortingService;

    beforeEach(() => {


        TestBed.configureTestingModule({
            providers: [
                VehiclesSortingService

            ]
        });

        vehiclesSortingService = TestBed.inject(VehiclesSortingService);

    });

    it('defines the service', () => {
        expect(vehiclesSortingService).toBeDefined();
    });

    it('sorts the column nickname in ascending order', () => {

        const vehicles = [
            { nickname: 'a' },
            { nickname: 'b' },
            { nickname: 'd' },
            { nickname: 'c' },
            { nickname: '' },
            { nickname: 'bcaa' },
            { nickname: 'ab' },
            { nickname: 'bca' }

        ] as IEZTag[];

        const sortedVehicles = [
            { nickname: '' },
            { nickname: 'a' },
            { nickname: 'ab' },
            { nickname: 'b' },
            { nickname: 'bca' },
            { nickname: 'bcaa' },
            { nickname: 'c' },
            { nickname: 'd' }

        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn.nickname, type: 'asc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column nickname in ascending order if nickname has CAPITAL letters', () => {

        const vehicles = [
            { nickname: 'TX-4234' },
            { nickname: 'Da' },
            { nickname: 'a' },
            { nickname: 'b' },
            { nickname: 'd' },
            { nickname: 'c' },
            { nickname: 'bcaa' },
            { nickname: 'ab' },
            { nickname: 'bca' }

        ] as IEZTag[];

        const sortedVehicles = [
            { nickname: 'a' },
            { nickname: 'ab' },
            { nickname: 'b' },
            { nickname: 'bca' },
            { nickname: 'bcaa' },
            { nickname: 'c' },
            { nickname: 'd' },
            { nickname: 'Da' },
            { nickname: 'TX-4234' }


        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn.nickname, type: 'asc' });
        expect(vehicles).toEqual(sortedVehicles);
    });


    it('sorts the column nickname in ascending order if nickname is null', () => {

        const vehicles = [
            { nickname: null },
            { nickname: 'test' },
            { nickname: 'test' },
            { nickname: null },
            { nickname: 'rer' },


        ] as IEZTag[];

        const sortedVehicles = [
            { nickname: 'rer' },
            { nickname: 'test' },
            { nickname: 'test' },
            { nickname: null },
            { nickname: null },

        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn.nickname, type: 'asc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column nickname in descending order if nickname is null', () => {

        const vehicles = [
            { nickname: null },
            { nickname: 'test' },
            { nickname: 'test' },
            { nickname: null },
            { nickname: 'rer' },


        ] as IEZTag[];

        const sortedVehicles = [
            { nickname: 'test' },
            { nickname: 'test' },
            { nickname: 'rer' },
            { nickname: null },
            { nickname: null },

        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn.nickname, type: 'desc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column nickname in descending order', () => {

        const vehicles = [
            { nickname: 'a' },
            { nickname: 'b' },
            { nickname: 'd' },
            { nickname: 'c' },
            { nickname: 'ca' },
            { nickname: '' },
            { nickname: 'bcaa' },
            { nickname: 'ab' },
            { nickname: 'bca' }

        ] as IEZTag[];

        const sortedVehicles = [
            { nickname: 'd' },
            { nickname: 'ca' },
            { nickname: 'c' },
            { nickname: 'bcaa' },
            { nickname: 'bca' },
            { nickname: 'b' },
            { nickname: 'ab' },
            { nickname: 'a' },
            { nickname: '' }

        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn.nickname, type: 'desc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column nickname in descending order if letters are capital', () => {

        const vehicles = [
            { nickname: 'a' },
            { nickname: 'b' },
            { nickname: 'd' },
            { nickname: 'c' },
            { nickname: 'ca' },
            { nickname: 'bcaa' },
            { nickname: 'ab' },
            { nickname: 'bca' },
            { nickname: 'ECFA' },

        ] as IEZTag[];

        const sortedVehicles = [
            { nickname: 'ECFA' },
            { nickname: 'd' },
            { nickname: 'ca' },
            { nickname: 'c' },
            { nickname: 'bcaa' },
            { nickname: 'bca' },
            { nickname: 'b' },
            { nickname: 'ab' },
            { nickname: 'a' },

        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn.nickname, type: 'desc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column nickname in descending order if letters are capital', () => {

        const vehicles = [
            { nickname: 'a' },
            { nickname: 'b' },
            { nickname: 'd' },
            { nickname: 'c' },
            { nickname: 'ca' },
            { nickname: 'bcaa' },
            { nickname: 'ab' },
            { nickname: 'bca' },
            { nickname: 'EcFa' },

        ] as IEZTag[];

        const sortedVehicles = [
            { nickname: 'EcFa' },
            { nickname: 'd' },
            { nickname: 'ca' },
            { nickname: 'c' },
            { nickname: 'bcaa' },
            { nickname: 'bca' },
            { nickname: 'b' },
            { nickname: 'ab' },
            { nickname: 'a' },

        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn.nickname, type: 'desc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column Status in ascending order', () => {

        const vehicles = [
            { nickname: 'a', tagStatusDesc: 'Active' },
            { nickname: 'b', tagStatusDesc: 'Pending' },
            { nickname: 'c', tagStatusDesc: 'Inactive' },
            { nickname: 'd', tagStatusDesc: 'Expired' }
        ] as IEZTag[];

        const sortedVehicles = [
            { nickname: 'a', tagStatusDesc: 'Active' },
            { nickname: 'd', tagStatusDesc: 'Expired' },
            { nickname: 'c', tagStatusDesc: 'Inactive' },
            { nickname: 'b', tagStatusDesc: 'Pending' }

        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn.status, type: 'asc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column Status in desc order', () => {

        const vehicles = [
            { nickname: 'a', tagStatusDesc: 'Active' },
            { nickname: 'b', tagStatusDesc: 'Pending' },
            { nickname: 'c', tagStatusDesc: 'Inactive' },
            { nickname: 'd', tagStatusDesc: 'Expired' }
        ] as IEZTag[];

        const sortedVehicles = [
            { nickname: 'b', tagStatusDesc: 'Pending' },
            { nickname: 'c', tagStatusDesc: 'Inactive' },
            { nickname: 'd', tagStatusDesc: 'Expired' },
            { nickname: 'a', tagStatusDesc: 'Active' }

        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn.status, type: 'desc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column Licence plate in asc order', () => {

        const vehicles = [
            { nickname: 'a', tagStatusDesc: 'Active', licState: 'TX', licPlate: 'HLF6382201' },
            { nickname: 'b', tagStatusDesc: 'Pending', licState: 'TX', licPlate: 'APJ6382210' },
            { nickname: 'c', tagStatusDesc: 'Inactive', licState: 'UT', licPlate: 'HLF6382201' },
            { nickname: 'd', tagStatusDesc: 'Expired', licState: 'CO', licPlate: 'HLF6382201' },
            { nickname: 'b', tagStatusDesc: 'Pending', licState: 'TX', licPlate: 'APJ6382211' }
        ] as IEZTag[];

        const sortedVehicles = [
            { nickname: 'd', tagStatusDesc: 'Expired', licState: 'CO', licPlate: 'HLF6382201' },
            { nickname: 'b', tagStatusDesc: 'Pending', licState: 'TX', licPlate: 'APJ6382210' },
            { nickname: 'b', tagStatusDesc: 'Pending', licState: 'TX', licPlate: 'APJ6382211' },
            { nickname: 'a', tagStatusDesc: 'Active', licState: 'TX', licPlate: 'HLF6382201' },
            { nickname: 'c', tagStatusDesc: 'Inactive', licState: 'UT', licPlate: 'HLF6382201' }
        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn.licencePlate, type: 'asc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column Licence plate in descending order', () => {

        const vehicles = [
            { nickname: 'a', tagStatusDesc: 'Active', licState: 'TX', licPlate: 'HLF6382201' },
            { nickname: 'b', tagStatusDesc: 'Pending', licState: 'TX', licPlate: 'HLF6382210' },
            { nickname: 'c', tagStatusDesc: 'Inactive', licState: 'UT', licPlate: 'HLF6382201' },
            { nickname: 'd', tagStatusDesc: 'Expired', licState: 'CO', licPlate: 'HLF6382201' },
            { nickname: 'a', tagStatusDesc: 'Active', licState: 'TX', licPlate: 'LCM7954' },
            { nickname: 'a', tagStatusDesc: 'Active', licState: 'TX', licPlate: 'CBN2651' }

        ] as IEZTag[];

        const sortedVehicles = [
            { nickname: 'c', tagStatusDesc: 'Inactive', licState: 'UT', licPlate: 'HLF6382201' },
            { nickname: 'a', tagStatusDesc: 'Active', licState: 'TX', licPlate: 'LCM7954' },
            { nickname: 'b', tagStatusDesc: 'Pending', licState: 'TX', licPlate: 'HLF6382210' },
            { nickname: 'a', tagStatusDesc: 'Active', licState: 'TX', licPlate: 'HLF6382201' },
            { nickname: 'a', tagStatusDesc: 'Active', licState: 'TX', licPlate: 'CBN2651' },
            { nickname: 'd', tagStatusDesc: 'Expired', licState: 'CO', licPlate: 'HLF6382201' }
        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn.licencePlate, type: 'desc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column EZ TAG Number in ascending order', () => {

        const vehicles = [
            { fullTagId: 'HCTR32', licPlate: 'HLF6382201' },
            { fullTagId: 'HCTR321', licPlate: 'HLF63822011' },
            { fullTagId: 'PENDING', licPlate: 'HLF6382202' },
            { fullTagId: 'HCTR323', licPlate: 'HLF6382203' },


        ] as IEZTag[];

        const sortedVehicles = [
            { fullTagId: 'HCTR32', licPlate: 'HLF6382201' },
            { fullTagId: 'HCTR321', licPlate: 'HLF63822011' },
            { fullTagId: 'HCTR323', licPlate: 'HLF6382203' },
            { fullTagId: 'PENDING', licPlate: 'HLF6382202' },

        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn.eztagnum, type: 'asc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column EZ TAG Number in descending order', () => {

        const vehicles = [
            { fullTagId: 'HCTR32', licPlate: 'HLF6382201' },
            { fullTagId: 'HCTR321', licPlate: 'HLF63822011' },
            { fullTagId: 'PENDING', licPlate: 'HLF6382202' },
            { fullTagId: 'HCTR323', licPlate: 'HLF6382203' },


        ] as IEZTag[];

        const sortedVehicles = [
            { fullTagId: 'PENDING', licPlate: 'HLF6382202' },
            { fullTagId: 'HCTR323', licPlate: 'HLF6382203' },
            { fullTagId: 'HCTR321', licPlate: 'HLF63822011' },
            { fullTagId: 'HCTR32', licPlate: 'HLF6382201' },
        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn.eztagnum, type: 'desc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column MAKE YEAR MODEL in descending order of YEAR', () => {

        const vehicles = [
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'JHJI' },
            // { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel:'JHJH'},
            { vehicleYear: '2018', vehicleMake: 'AMC', vehicleModel: 'FD' },
            // { vehicleYear: '2019', vehicleMake: 'AM GENERAL', vehicleModel:'JKJK'},
            { vehicleYear: '2020', vehicleMake: 'APRILLA', vehicleModel: 'JHJH' },

        ] as IEZTag[];

        const sortedVehicles = [
            { vehicleYear: '2020', vehicleMake: 'APRILLA', vehicleModel: 'JHJH' },
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'JHJI' },
            { vehicleYear: '2018', vehicleMake: 'AMC', vehicleModel: 'FD' }


        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn['year/make/model'], type: 'desc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column MAKE YEAR MODEL in descending order of MAKE when YEAR is same', () => {

        const vehicles = [
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'JHJI' },
            { vehicleYear: '2019', vehicleMake: 'AQRILLA', vehicleModel: 'JHJH' },
            { vehicleYear: '2019', vehicleMake: 'AM GENERAL', vehicleModel: 'JKJK' },

        ] as IEZTag[];

        const sortedVehicles = [
            { vehicleYear: '2019', vehicleMake: 'AQRILLA', vehicleModel: 'JHJH' },
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'JHJI' },
            { vehicleYear: '2019', vehicleMake: 'AM GENERAL', vehicleModel: 'JKJK' }


        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn['year/make/model'], type: 'desc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column MAKE YEAR MODEL in descending order of MODEL when YEAR and MAKE are same', () => {

        const vehicles = [
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'JHJI' },
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'ABC' },
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'JKJK' },

        ] as IEZTag[];

        const sortedVehicles = [
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'JKJK' },
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'JHJI' },
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'ABC' }
        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn['year/make/model'], type: 'desc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column MAKE YEAR MODEL in ascending order of YEAR', () => {

        const vehicles = [
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'JHJI' },
            { vehicleYear: '2018', vehicleMake: 'AMC', vehicleModel: 'FD' },
            { vehicleYear: '2020', vehicleMake: 'APRILLA', vehicleModel: 'JHJH' },

        ] as IEZTag[];

        const sortedVehicles = [
            { vehicleYear: '2018', vehicleMake: 'AMC', vehicleModel: 'FD' },
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'JHJI' },
            { vehicleYear: '2020', vehicleMake: 'APRILLA', vehicleModel: 'JHJH' },

        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn['year/make/model'], type: 'asc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column MAKE YEAR MODEL in ascending order of MAKE when YEAR is same', () => {

        const vehicles = [
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'JHJI' },
            { vehicleYear: '2019', vehicleMake: 'AQRILLA', vehicleModel: 'JHJH' },
            { vehicleYear: '2019', vehicleMake: 'AM GENERAL', vehicleModel: 'JKJK' },

        ] as IEZTag[];

        const sortedVehicles = [
            { vehicleYear: '2019', vehicleMake: 'AM GENERAL', vehicleModel: 'JKJK' },
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'JHJI' },
            { vehicleYear: '2019', vehicleMake: 'AQRILLA', vehicleModel: 'JHJH' }


        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn['year/make/model'], type: 'asc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column MAKE YEAR MODEL in ascending order of MODEL when YEAR and MAKE are same', () => {

        const vehicles = [
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'JHJI' },
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'ABC' },
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'JKJK' },

        ] as IEZTag[];

        const sortedVehicles = [
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'ABC' },
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'JHJI' },
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'JKJK' }
        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn['year/make/model'], type: 'asc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column MAKE YEAR MODEL in ascending order when vehicles are in random order', () => {

        const vehicles = [
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'JHJI' },
            { vehicleYear: '2018', vehicleMake: 'AMC', vehicleModel: 'FD' },
            { vehicleYear: '2020', vehicleMake: 'APRILLA', vehicleModel: 'JHJH' },
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'ABC' },
            { vehicleYear: '2019', vehicleMake: 'AQRILLA', vehicleModel: 'JHJH' },


        ] as IEZTag[];

        const sortedVehicles = [
            { vehicleYear: '2018', vehicleMake: 'AMC', vehicleModel: 'FD' },
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'ABC' },
            { vehicleYear: '2019', vehicleMake: 'APRILLA', vehicleModel: 'JHJI' },
            { vehicleYear: '2019', vehicleMake: 'AQRILLA', vehicleModel: 'JHJH' },
            { vehicleYear: '2020', vehicleMake: 'APRILLA', vehicleModel: 'JHJH' }

        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn['year/make/model'], type: 'asc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column START DATE in ascending order', () => {

        const vehicles = [
            { pbpStartDate: '2022-12-28T14:12:00-06:00' },
            { pbpStartDate: '2022-12-27T12:43:18-06:00' },

        ] as IEZTag[];

        const sortedVehicles = [
            { pbpStartDate: '2022-12-27T12:43:18-06:00' },
            { pbpStartDate: '2022-12-28T14:12:00-06:00' }
        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn.startDate, type: 'asc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column START DATE in descending order', () => {

        const vehicles = [
            { pbpStartDate: '2022-12-27T12:43:18-06:00' },
            { pbpStartDate: '2022-12-28T14:12:00-06:00' },

        ] as IEZTag[];

        const sortedVehicles = [
            { pbpStartDate: '2022-12-28T14:12:00-06:00' },
            { pbpStartDate: '2022-12-27T12:43:18-06:00' },
        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn.startDate, type: 'desc' });
        expect(vehicles).toEqual(sortedVehicles);
    });

    it('sorts the column END DATE in ascending order', () => {

        const vehicles = [
            { pbpEndDate: '2022-12-31T14:12:00-06:00' },
            { pbpEndDate: '2022-12-30T12:43:18-06:00' },

        ] as IEZTag[];

        const sortedVehicles = [
            { pbpEndDate: '2022-12-30T12:43:18-06:00' },
            { pbpEndDate: '2022-12-31T14:12:00-06:00' },
        ] as IEZTag[];

        const res = vehiclesSortingService.sort(vehicles, { colName: SortColumn.endDate, type: 'asc' });
        expect(vehicles).toEqual(sortedVehicles);
    });
});
