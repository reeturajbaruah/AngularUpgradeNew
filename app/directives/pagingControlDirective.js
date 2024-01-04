(function () {
    'use strict';

    angular.module('HCTRAModule').directive('pagingControl', ['validationService','$state','stateNames',
        function (validationService,$state,stateNames) {
            return {
                scope: {
                    data: '=',
                    searchFunction: '&',
                    form: '=',
                    navigationUrls: '=' // needed for prerender javascript timeout
                },
                templateUrl: '/app/directives/pagingControlTemplate.html',
                link: function (scope) {
                    // init
                    scope.userInputData = { visiblePageNumber: 1 };
                    // init

                   scope.validations = validationService(scope.form);

                    // watches
                    scope.$watch('data.currentPage', function () {
                        if (scope.data && angular.isNumber(scope.data.currentPage)) {
                            scope.userInputData.visiblePageNumber = ((scope.data.currentPage) + 1);
                        }
                    });

                    scope.$watch('data.pageSize', function () {
                        if (scope.data && scope.data.pageSize === "" && ($state.is(stateNames.faq) || $state.is(stateNames.faqChild))) {
                            scope.data.pageSize = 50;
                        }
                    });
                    // watches

                    // on change
                    scope.adjustPageSize = function () {
                        scope.data.currentPage = 0;
                        scope.searchFunction();
                    };

                    scope.lastPage = function () {
                        if ((scope.data.currentPage) === ((scope.data.numberOfPages) - 1)) {
                            return;
                        }

                        scope.data.currentPage = ((scope.data.numberOfPages) - 1);
                        scope.searchFunction();
                    };

                    scope.firstPage = function () {
                        if ((scope.data.currentPage) === 0) {
                            return;
                        }
                        scope.data.currentPage = 0;
                        scope.searchFunction();
                    };

                    scope.manualPageUpdate = function () {
                        if (scope.form.currentVisiblePageNumber.$valid) {
                            scope.data.currentPage = angular.copy(scope.userInputData.visiblePageNumber - 1);
                            scope.searchFunction();
                            angular.element(':focus').blur(); // the search function automatically sets the page back up to the title. focus needs to be manually removed from the
                            // input box becuase the input will no longer be visible after the search. if the user attempts to scroll after a successful search and focus is still on the input,
                            // then the number will change instead of the screen scrolling
                        }
                    };
                    // on change
                }
            };
        }]);
}());