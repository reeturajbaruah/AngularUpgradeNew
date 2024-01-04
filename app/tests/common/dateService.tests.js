(function () {
    'use strict';

    describe('dateService', function () {

        //module() is registered on window and is a shortcut to angular.mock.module()
        //use it to mock the main app module
        //Note: DO NOT include the real app.js file on the testRunner HTML file. This will 
        // cause a cascade of dependencies that you will have a hard time catching-up to. testApp.js 
        // contains a simple module definition that isolates out the complexities. Unit test piece-by-piece
        beforeEach(angular.mock.module('HCTRAModule'));

    	var service,
			bowserService,
            date1,
            date2,
            dateObj;

    	beforeEach(angular.mock.module(function () {
    	    date1 = new Date(1992, 10, 9, 5, 5, 5, 100);
    	    date2 = new Date(1992, 10, 9, 5, 5, 5, 100);
            dateObj = {
    	        endDate: new Date(1992, 10, 9, 5, 5, 5, 100)
    	    };
        }));

        //$provide is a module-level object, and thus must get its own 
        //injection through the module() function
        beforeEach(angular.mock.module(function ($provide) {
            $provide.value('bowserService', hctraMocks.bowserService());
            $provide.factory('momentService', ['momentjs', (momentjs) => ({ moment: (d) => momentjs(d || dateObj.endDate) })]);
        }));

        beforeEach(angular.mock.inject(function ($injector, _bowserService_) {
        	service = $injector.get('dateService');
        	bowserService = _bowserService_;
        }));

        it('should return a new date that is 5 days ago', function () {
            date1.setMonth(6);
            date1.setDate(10);
            expect(service.getDaysAgo(5, date1).getDate()).toEqual(5);
        });

        it('should return a new date that is in a previous month', function () {
            date1.setMonth(6);
            date1.setDate(2);
            expect(service.getDaysAgo(5, date1).getDate()).toEqual(27);
        });

        it('should return true if the date1 is before date2', function () {
            date1.setMonth(6);
            date1.setDate(10);
            date2.setMonth(6);
            date2.setDate(20);
            expect(service.isBefore(date1, date2)).toBeTruthy();
        });

        it('should return true if the date1 is after date2', function () {
            date1.setMonth(6);
            date1.setDate(20);
            date2.setMonth(6);
            date2.setDate(10);
            expect(service.isAfter(date1, date2)).toBeTruthy();
        });

        it('should return true if the string is in date format', function () {
            expect(service.isDate('07/18/2016')).toBeTruthy();
            expect(service.isDate('07/18/16')).toBeTruthy();
            // Chutzpah PhantomJS doesn't support proper date conversion as of 2.1.1 but these tests work fine when run in Chrome
            if (!bowserService.phantom) {
                expect(service.isDate('07-18-2016')).toBeTruthy();
                expect(service.isDate('07-18-16')).toBeTruthy();
            }
            expect(service.isDate('July 18, 2016')).toBeTruthy();
            expect(service.isDate('Test')).toBeFalsy();
        });

        it('should keep articles that are permanent', function () {
            var article = {
                isPermanent: '1',
                endDate: new Date(1990, 7, 10, 2, 45, 0)
            };

            expect(service.isExpiredFilterForCms(article)).toBeTruthy();
        });

        it('should filter down to millisecond granularity', function () {
            var currentDate = angular.copy(dateObj.endDate);
            var articleValid = {
                isPermanent: '',
                endDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds(), 900)
            };

            var articleExpired = {
                isPermanent: '',
                endDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds(), 0)
            };

            expect(service.isExpiredFilterForCms(articleValid)).toBeTruthy();
            expect(service.isExpiredFilterForCms(articleExpired)).toBeFalsy();
        });

        it('should filter down to second granularity', function () {
            var currentDate = angular.copy(dateObj.endDate);
            var articleValid = {
                isPermanent: '',
                endDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), 59, 0)
            };

            var articleExpired = {
                isPermanent: '',
                endDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), 0, 0)
            };

            expect(service.isExpiredFilterForCms(articleValid)).toBeTruthy();
            expect(service.isExpiredFilterForCms(articleExpired)).toBeFalsy();
        });

        it('should filter down to minute granularity', function () {
            var currentDate = angular.copy(dateObj.endDate);
            var articleValid = {
                isPermanent: '',
                endDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), 59, 59, 0)
            };

            var articleExpired = {
                isPermanent: '',
                endDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), 0, 0, 0)
            };

            expect(service.isExpiredFilterForCms(articleValid)).toBeTruthy();
            expect(service.isExpiredFilterForCms(articleExpired)).toBeFalsy();
        });

        it('should keep articles that have no end date', function () {
            var article = {
                isPermanent: '',
                endDate: null
            };
            expect(service.isExpiredFilterForCms(article)).toBeTruthy();

            article = {
                isPermanent: '',
                endDate: ''
            };
            expect(service.isExpiredFilterForCms(article)).toBeTruthy();
        });

        it('should filter out end dates that are before today (single date obj)', function () {
            var yesterdayDate = angular.copy(dateObj.endDate);
            yesterdayDate.setDate(yesterdayDate.getDate() - 1);
            var article = {
                isPermanent: '',
                endDate: yesterdayDate
            };

            expect(service.isExpiredFilterForCms(article)).toBeFalsy();
        });

        it('should filter out end dates that are before today (date obj array)', function () {
            var yesterdayDate = angular.copy(dateObj.endDate);
            yesterdayDate.setDate(yesterdayDate.getDate() - 1);
            var tomorrowDate = angular.copy(dateObj.endDate);
            tomorrowDate.setDate(tomorrowDate.getDate() + 1);
            var articleArr = [
                {
                    isPermanent: '',
                    endDate: yesterdayDate
                },
                {
                    isPermanent: '',
                    endDate: tomorrowDate
                }
            ];

            expect(articleArr.filter(service.isExpiredFilterForCms)).toEqual([{
                isPermanent: '',
                endDate: tomorrowDate
            }]);
        });
    });
}());