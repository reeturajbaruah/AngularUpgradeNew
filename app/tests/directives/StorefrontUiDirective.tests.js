(function () {
    'use strict';

    xdescribe('directive: storefront ui directive', function () {

        beforeEach(angular.mock.module("HCTRATemplates"));
        beforeEach(angular.mock.module('HCTRAModule'));

        var scope, el, compile, rootScope;
        var controller;

        beforeEach(angular.mock.module(function ($provide) {
            //replace with fake controller
            controller = jasmine.createSpyObj("StorefrontController", ["onCompletedWorkItem"]);
            $provide.value('StorefrontController', controller);
        }));

        beforeEach(angular.mock.inject(function ($injector, $compile, $templateCache, $rootScope) {
            try {
                compile = $compile;
                rootScope = $rootScope;
               
                var templatePath = "app/directives/storefront/storefrontUiTemplate.html";
                $templateCache.put("/" + templatePath, $templateCache.get(templatePath));
            } catch (e) {
                fail(e);
            }
        }));

        function buildDirective() {
            scope = rootScope.$new();
            
            el = angular.element("<storefront-ui></storefront-ui>");

            //scope. = ;
            
            compile(el)(scope);
            scope.$digest();
            // = el.children();
        }

        describe('basic functionality', function () {

            beforeEach(function () {
                
                buildDirective();
            });

            it('', function() {

            });
        });
    });

}());