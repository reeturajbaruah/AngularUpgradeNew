(function() {
    'use strict';

    describe('StoreFrontSurveyController',function() {

        var scope, storefrontService, $state, stateNames, $rootScope, $controller, Promise, $window;
        
        function createController(s) {
            return $controller("StorefrontSurveyController",
                {
                    $scope: s || scope,
                    $state: $state,
                    StorefrontService: storefrontService,
                    stateNames: stateNames
                });
        }

        function returnResolved(obj) {
            return Promise.resolve(obj);
        }

        beforeEach(angular.mock.module('HCTRAModule'));
        
        beforeEach(angular.mock.inject(function ($injector) {

            $window = $injector.get("$window");
            Promise = $window["Promise"];
            $rootScope = $injector.get('$rootScope');
            scope = $rootScope.$new();
            $controller = $injector.get("$controller");

            $state = jasmine.createSpyObj("$state", ["go"]);

            $state.current = {
                cms: {
                    surveyThankYouModalId: "id1",
                    surveyId : "id2"
                }
            };

            storefrontService = jasmine.createSpyObj("storefrontService", ["isEnabled", "fullSiteMode", "getCmsItemById"]);

            storefrontService.getCmsItemById.and.callFake(function(id) {
                if (id === "id1") {
                    return returnResolved({
                        Title: "title",
                        buttons: {}
                    });
                }else if (id === "id2") {
                    return returnResolved({
                        badRatingIconSelected: {
                            image: {}
                        },
                        neutralRatingIconSelected: {
                            image: {}
                        },
                        goodRatingIconSelected: {
                            image: {}
                        },
                        badRatingIconUnselected: {
                            image: {}
                        },
                        neutralRatingIconUnselected: {
                            image: {}
                        },
                        goodRatingIconUnselected: {
                            image: {}
                        }
                    });
                }
                return Promise.reject();
            });
        }));

        it('can create survey controller', function() {
            //arrange
            //act
            var controller = createController();
            //assert
            expect(controller).toBeDefined();
        });

//        it('can decorate window.open as well as $window.open',function() {
//            //arrange
//
//            //act
//
//            //assert
//            expect($window).toBeDefined();
//            expect($window.open).toBeDefined();
//            expect($window.open['listen']).toBeDefined();
//
//            expect(window).toBeDefined();
//            expect(window.open).toBeDefined();
//            expect(window.open['listen']).toBeDefined();
//        });

    });
})();