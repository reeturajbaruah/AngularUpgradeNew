// module HCTRA.Service {
//     export interface IDateWithTimeZoneService {

//         //unexpected behavior when called with  date with an offset
//         withoutOffsetToCentral(date: string, format: string): string;
        
//         //unexpected behavior when called with a date without an offset
//         withOffsetToCentral(date: string, format: string): string;
//     }
// }

// module HCTRA.Service {
//     export class DateWithTimeZoneService implements IDateWithTimeZoneService {

//         static $inject = ["momentService"];
        
//         constructor(private momentService: HCTRA.Service.IMomentService, ) { }

//         private standardize = (date: string, format: string): string =>
//             this.momentService.moment(new Date(date)).format(format);

//         private toCentral = (date: string, format: string): string =>
//             this.momentService.moment.tz(date, "America/Chicago").format(format);

//         public withoutOffsetToCentral = (date: string, format: string):string =>
//             this.toCentral(this.standardize(date, "YYYY-MM-DDTHH:mm:ss"), format);

//         public withOffsetToCentral = (date: string, format: string): string =>
//             this.toCentral(this.standardize(date, "YYYY-MM-DDTHH:mm:ssZ"), format);   
//     }  
// }


(() => {
    'use strict';

    // angular.module('HCTRAModule').service('dateWithTimeZoneService', HCTRA.Service.DateWithTimeZoneService);
})();