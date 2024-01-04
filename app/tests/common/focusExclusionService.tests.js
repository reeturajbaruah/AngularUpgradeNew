(function () {
    'use strict';

    //describe() begins a unit testing fixture
    describe('focusExclusionService', function () {

        //module() is registered on window and is a shortcut to angular.mock.module()
        //use it to mock the main app module
        //Note: DO NOT include the real app.js file on the testRunner HTML file. This will 
        // cause a cascade of dependencies that you will have a hard time catching-up to. testApp.js 
        // contains a simple module definition that isolates out the complexities. Unit test piece-by-piece
        beforeEach(angular.mock.module('HCTRAModule'));

        var dictByUrl = {};
        var routes;
        var dictByWildCard = {};
        var service = {};

        //$provide is a module-level object, and thus must get its own 
        //injection through the module() function
        beforeEach(angular.mock.module(function ($provide) {
            $provide.value('routes', hctraMocks.routes());
        }));

        beforeEach(angular.mock.inject(function ($injector, _routes_) {
            service = $injector.get('focusExclusionService');
            routes = _routes_;
            dictByUrl[routes.faq] = true;
            dictByUrl[routes.closuresArchive] = true;
            dictByUrl[routes.newsArchive] = true;
            dictByWildCard[routes.faq] = { expectedSegments: 4, path: routes.faq };
            dictByWildCard[routes.closuresArchive] = { expectedSegments: 4, path: routes.closuresArchive };
            dictByWildCard[routes.newsArchive] = { expectedSegments: 4, path: routes.newsArchive };
        }));

        it('test that dictByUrl has all needed properties', function () {
            expect(service.dictByUrl).toEqual(dictByUrl);
        });


        it('test that dictByWildCard has all needed properties', function () {
            expect(service.dictByWildCard).toEqual(dictByWildCard);
        });

    });

}());