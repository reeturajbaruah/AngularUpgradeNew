(function () {
    'use strict';

    describe('MegaMenuCache', function () {

        beforeEach(angular.mock.module('HCTRAModule'));

        var service;

        beforeEach(angular.mock.inject(function ($injector) {
            service = $injector.get('MegaMenuCache');
        }));

        it('should return cache', function () {
            var megaMenu = [1, 2, 3];
            service.cacheMegaMenu(megaMenu);
            expect(service.getCachedMegaMenu()).toEqual(megaMenu);
        });
    });
})();