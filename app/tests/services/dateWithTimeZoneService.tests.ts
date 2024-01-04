(() => {
    'use strict';

    // describe('dateWithTimeZoneService', () => {

    //     beforeEach(angular.mock.module('HCTRAModule'));
        
    //     let _responseErrorService,
    //         service: HCTRA.Service.IDateWithTimeZoneService;


    //     beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

    //         service = $injector.get<HCTRA.Service.IDateWithTimeZoneService>('dateWithTimeZoneService');
    //     }));

    //     describe('canary', () => {


    //         it('should pass', () => {

    //             expect(true).toBe(true);
    //         });
    //     });

    //     describe('withOffsetToCentral', () => {

    //         [
    //             ["YYYY-MM-DDTHH:mm", "2019-04-05 09:30:26.123+03:00", "2019-04-05T01:30"],
    //             ["YYYY-MM-DDTHH:mm", "2015-05-15T12:00:50-00:00", "2015-05-15T07:00"],
    //             ["YYYY-MM-DDTHH:mm", "2019-12-01T12:00:50-12:00", "2019-12-01T18:00"],
    //             ["YYYY-MM-DDTHH:mm", "09/30/2019 12:00 PM -05:00", "2019-09-30T12:00"],
    //             ["YYYY-MM-DDTHH:mm:ssZ", "2019-04-05 07:30:26.123+03:00", "2019-04-04T23:30:26-05:00"],
    //             ["YYYY-MM-DDTHH:mm", "09/30/2019 02:00 AM -00:00", "2019-09-29T21:00"],
    //             ["YYYY-MM-DDTHH:mm:ssZ", "2019-04-05 09:30:26.123+03:00", "2019-04-05T01:30:26-05:00"],
    //             ["YYYY-MM-DDTHH:mm:ssZ", "2015-05-15T12:00:50-00:00", "2015-05-15T07:00:50-05:00"],
    //             ["YYYY-MM-DDTHH:mm:ssZ", "2019-12-01T12:00:50-12:00", "2019-12-01T18:00:50-06:00"],
    //             ["YYYY-MM-DDTHH:mm:ssZ", "09/30/2019 12:00 PM -05:00", "2019-09-30T12:00:00-05:00"]
    //         ].forEach(([format, dateWithOffSet, expected]) => {

    //             it(`should convert ${dateWithOffSet} to ${expected} when requested format is ${format}`, () => {

    //                 expect(service.withOffsetToCentral(dateWithOffSet, format)).toBe(expected);
    //             });
    //         });
    //     });

    //     describe('withoutOffsetToCentral', () => {

    //         [
    //             ["YYYY-MM-DDTHH:mm:ssZ", "2019-04-05 09:30:26.123", "2019-04-05T09:30:26-05:00"],
    //             ["YYYY-MM-DDTHH:mm:ssZ", "2015-05-15T12:00:50", "2015-05-15T12:00:50-05:00"],
    //             ["YYYY-MM-DDTHH:mm:ssZ", "2019-12-01T12:00:50", "2019-12-01T12:00:50-06:00"],
    //             ["YYYY-MM-DDTHH:mm:ssZ", "09/30/2019 12:00 PM", "2019-09-30T12:00:00-05:00"],
    //             ["YYYY-MM-DDTHH:mm:ss z", "2019-04-05 09:30:26.123", "2019-04-05T09:30:26 CDT"],
    //             ["YYYY-MM-DDTHH:mm:ss z", "2015-05-15T12:00:50", "2015-05-15T12:00:50 CDT"],
    //             ["YYYY-MM-DDTHH:mm:ss z", "2019-12-01T12:00:50", "2019-12-01T12:00:50 CST"],
    //             ["YYYY-MM-DDTHH:mm:ss z", "09/30/2019 12:00 PM", "2019-09-30T12:00:00 CDT"]
    //         ].forEach(([format, dateWithoutOffSet, expected]) => {
                
    //             it(`should convert ${dateWithoutOffSet} to ${expected} when requested format is ${format}`, () => {

    //                 expect(service.withoutOffsetToCentral(dateWithoutOffSet, format)).toBe(expected);
    //             });
    //         });
    //     });
    // });
})();