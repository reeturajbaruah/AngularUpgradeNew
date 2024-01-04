(function () {
    'use strict';

    //describe() begins a unit testing fixture
    describe('wildCardUrlCheckerService', function () {

        //module() is registered on window and is a shortcut to angular.mock.module()
        //use it to mock the main app module
        //Note: DO NOT include the real app.js file on the testRunner HTML file. This will 
        // cause a cascade of dependencies that you will have a hard time catching-up to. testApp.js 
        // contains a simple module definition that isolates out the complexities. Unit test piece-by-piece
        beforeEach(angular.mock.module('HCTRAModule'));

        var routes;
        var service = {};
        var wildCardDict = {};

        //$provide is a module-level object, and thus must get its own 
        //injection through the module() function
        beforeEach(angular.mock.module(function ($provide) {
            $provide.value('routes', hctraMocks.routes());
        }));

        beforeEach(angular.mock.inject(function ($injector, _routes_) {
            service = $injector.get('wildCardUrlCheckerService');
            routes = _routes_;
            wildCardDict[routes.faq] = { expectedSegments: 4, path: routes.faq };
            wildCardDict[routes.closuresArchive] = { expectedSegments: 4, path: routes.closuresArchive };
            wildCardDict[routes.newsArchive] = { expectedSegments: 4, path: routes.newsArchive };
        }));

        it('test findParentUrlInWildCardDict for matching route but too many segments', function () {
            expect(service.findParentUrlInWildCardDict("/FAQ/All/0/501/"))
                .toEqual(null);
        });

        it('test wildCardUrlisMatch for matching route but too many segments', function () {
            expect(service.wildCardUrlisMatch("/FAQ/All/0/501/", wildCardDict))
                .toBeFalsy();
        });

        it('test findParentUrlInWildCardDict for faq wilcard route - 4 segments', function () {
            expect(service.findParentUrlInWildCardDict("/FAQ/All/0/"))
                .toEqual("/FAQ");
        });

        it('test wildCardUrlisMatch for faq wilcard route - 4 segments', function () {
            expect(service.wildCardUrlisMatch("/FAQ/All/0/", wildCardDict))
                .toBeTruthy();
        });

        it('test findParentUrlInWildCardDict for faq wilcard route - 3 segments', function () {
            expect(service.findParentUrlInWildCardDict("/FAQ/All/0"))
                .toEqual("/FAQ");
        });

        it('test wildCardUrlisMatch for faq wilcard route - 3 segments', function () {
            expect(service.wildCardUrlisMatch("/FAQ/All/0", wildCardDict))
                .toBeTruthy();
        });

        it('test findParentUrlInWildCardDict for faq wilcard route - 2 segments', function () {
            expect(service.findParentUrlInWildCardDict("/FAQ/All"))
                .toEqual("/FAQ");
        });

        it('test wildCardUrlisMatch for faq wilcard route - 2 segments', function () {
            expect(service.wildCardUrlisMatch("/FAQ/All", wildCardDict))
                .toBeTruthy();
        });

        it('test findParentUrlInWildCardDict for faq wilcard route - 1 segments', function () {
            expect(service.findParentUrlInWildCardDict("/FAQ"))
                .toEqual("/FAQ");
        });

        it('test wildCardUrlisMatch for faq wilcard route - 1 segments', function () {
            expect(service.wildCardUrlisMatch("/FAQ", wildCardDict))
                .toBeTruthy();
        });

        it('test findParentUrlInWildCardDict only /', function () {
            expect(service.findParentUrlInWildCardDict("/"))
                .toEqual(null);
        });

        it('test wildCardUrlisMatch only /', function () {
            expect(service.wildCardUrlisMatch("/", wildCardDict))
                .toBeFalsy();
        });

        //it('test findParentUrlInWildCardDict for closure wilcard route', function () {
        //    expect(service.findParentUrlInWildCardDict("/ClosuresArchive/All/0/"))
        //        .toEqual("/ClosuresArchive");
        //});

        //it('test wildCardUrlisMatch for closure wilcard route', function () {
        //    expect(service.wildCardUrlisMatch("/ClosuresArchive/All/0/", wildCardDict))
        //        .toBeTruthy();
        //});

        it('test findParentUrlInWildCardDict for News wilcard route', function () {
            expect(service.findParentUrlInWildCardDict("/NewsArchive/All/0/"))
                .toEqual("/NewsArchive");
        });

        it('test wildCardUrlisMatch for News wilcard route', function () {
            expect(service.wildCardUrlisMatch("/NewsArchive/All/0/", wildCardDict))
                .toBeTruthy();
        });

        it('test findParentUrlInWildCardDict for non-wilcard route', function () {
            expect(service.findParentUrlInWildCardDict("/Home/All/0/"))
                .toBeNull();
        });

        it('test wildCardUrlisMatch for non-wilcard route', function () {
            expect(service.wildCardUrlisMatch("/Home/All/0/", wildCardDict))
                .toBeFalsy();
        });

        it('test findParentUrlInWildCardDict for null route', function () {
            expect(service.findParentUrlInWildCardDict(null))
                .toBeNull();
        });

        it('test wildCardUrlisMatch for null route', function () {
            expect(service.wildCardUrlisMatch(null, wildCardDict))
                .toBeFalsy();
        });

        it('test findParentUrlInWildCardDict for null route', function () {
            expect(service.findParentUrlInWildCardDict(undefined))
                .toBeNull();
        });

        it('test wildCardUrlisMatch for null route', function () {
            expect(service.wildCardUrlisMatch(undefined, wildCardDict))
                .toBeFalsy();
        });

        it('test findParentUrlInWildCardDict for null route', function () {
            expect(service.findParentUrlInWildCardDict("hello"))
                .toBeNull();
        });

        it('test wildCardUrlisMatch for null route', function () {
            expect(service.wildCardUrlisMatch("hello", wildCardDict))
                .toBeFalsy();
        });


    });

}());