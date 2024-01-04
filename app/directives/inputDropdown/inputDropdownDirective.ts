((() => {
    "use strict";

    angular.module("HCTRAModule").directive("inputDropdown", ['validationService', 'inputDropdownHelper', 'inputDropdownConstants',
        (validationService: HCTRA.Service.IValidationService,
            inputDropdownHelper: HCTRA.Service.IInputDropdownHelper,
            inputDropdownConstants: HCTRA.Constant.IInputDropdownConstants) => ({
            restrict: "E",
            templateUrl: "/app/directives/inputDropdown/inputDropdownTemplate.html",
            scope: {
                requiredBindings: "=",
                optionalBindings: "="
            },
            link($scope: HCTRA.Model.IInputDropdownDirectiveScope<any>) {

                // local variables
                let upKeyFocus: HCTRA.Model.IInputDropdownDirectiveKeyType = {
                    boundaryType: "top",
                    comparisonSwitch: 1,
                    scrollType: true
                };
                let downKeyFocus: HCTRA.Model.IInputDropdownDirectiveKeyType = {
                    boundaryType: "bottom",
                    comparisonSwitch: -1,
                    scrollType: false
                };

                // Scope variable assignments
                $scope.validationService = validationService;
                $scope.isFocused = false;
                $scope.inputDropdownItemIdPrefix = inputDropdownConstants.inputDropdownItemIdPrefix.substring(1);
                $scope.inputDropdownBoxId = inputDropdownConstants.inputDropdownBoxId.substring(1);
                if ($scope.optionalBindings) {
                    $scope.placeholder = $scope.optionalBindings.placeholder ? $scope.optionalBindings.placeholder : null;
                    $scope.tabIndex = $scope.optionalBindings.tabIndex ? $scope.optionalBindings.tabIndex : null;
                    $scope.title = $scope.optionalBindings.title ? $scope.optionalBindings.title : null;
                }
                $scope.dropdownVisible = false;
                $scope.activeItemIndex = 0;
                $scope.userInput = "";
                $scope.keyActions = {
                    upAction: (): void => {
                        var prevIndex = $scope.activeItemIndex - 1;
                        if (prevIndex >= 0) {
                            inputDropdownHelper.ensureElementFocus(prevIndex, upKeyFocus);
                            $scope.setActive(prevIndex);
                        }
                    },
                    downAction: (): void => {
                        var nextIndex = $scope.activeItemIndex + 1;
                        if (nextIndex < $scope.filteredItems.length) {
                            inputDropdownHelper.ensureElementFocus(nextIndex, downKeyFocus);
                            $scope.setActive(nextIndex);
                        }
                    },
                    enterAction: (event: any): void => {
                        if (!$scope.dropdownVisible) {
                            return;
                        }

                        event.preventDefault();
                        if ($scope.activeItemIndex >= 0 && $scope.activeItemIndex < $scope.filteredItems.length) {
                            $scope.selectItem($scope.filteredItems[$scope.activeItemIndex]);
                        }
                    }
                };

                // Watches
                var unWatchitems = $scope.$watch("requiredBindings.items", () => {
                    if (angular.isArray($scope.requiredBindings.items) && $scope.requiredBindings.items.length > 0) {
                        $scope.filteredItems = angular.copy<any[]>($scope.requiredBindings.items);
                        $scope.requiredBindings.selectedItem = $scope.requiredBindings.getDefaultItem($scope.requiredBindings.items);
                        unWatchitems();
                    } else {
                        $scope.filteredItems = [];
                    }
                });

                // Scope methods
                $scope.setWidth = () => {
                    var inputWidth = <any>angular.element("#" + $scope.requiredBindings.id);
                    return { "width": inputWidth[0].getBoundingClientRect().width+"px" };
                };

                $scope.inputDropdownClass = (): string => {
                    var classes = "input-dropdown";
                    if ($scope.showValidation()) {
                        classes = classes + " " + validationService($scope.requiredBindings.form).getErrorStatusClassFastWithNullCheck($scope.requiredBindings.name);
                        $scope.dropdownVisible = false;
                    }
                    return classes;
                };

                $scope.selectedItemClass = (index: number) => {
                    return { "active": $scope.activeItemIndex === index };
                };

                $scope.setActive = (itemIndex: number): void => {
                    $scope.activeItemIndex = itemIndex;
                };

                $scope.selectItem = (item: any): void => {
                    $scope.requiredBindings.selectedItem = item;
                    $scope.userInput = $scope.requiredBindings.getItemDisplayName(item);
                    $scope.dropdownVisible = false;
                    $scope.filteredItems = [item];
                    inputDropdownHelper.setFormValidity(null,$scope);
                };

                $scope.inputFocus = (): void => {
                    $scope.isFocused = true;
                    if ($scope.filteredItems.length == 0 || $scope.requiredBindings.getExactItemMatch($scope.userInput, $scope.filteredItems)) {
                        $scope.dropdownVisible = false; 
                        return;
                    }

                    $scope.dropdownVisible = true;
                    $scope.setActive(0);
                };

                $scope.inputChange = (): void => {
                    $scope.requiredBindings.selectedItem = null;
                    $scope.dropdownVisible = true;

                    if (!$scope.userInput) {
                        inputDropdownHelper.runProcessesWhenInputIsEmpty($scope);
                    } else if ($scope.optionalBindings && $scope.optionalBindings.shouldValidate) {
                        inputDropdownHelper.runValidationProcesses($scope);
                    } else {
                        inputDropdownHelper.runProcessesForInputChangeWithNoValidation($scope);
                    }                  
                };
                
                $scope.inputBlur = (): void => {
                    $scope.isFocused = false;
                    $scope.dropdownVisible = false;
                };

                $scope.showValidation = (): boolean => {
                    let innerValidationService: HCTRA.Service.IValidationInnerService = validationService($scope.requiredBindings.form);
                    return $scope.requiredBindings.form && innerValidationService.isInvalidWithNullCheck($scope.requiredBindings.name) &&
                        (innerValidationService.getErrorList($scope.requiredBindings.name)[inputDropdownConstants.preSubmitValidationErrorKey] ||
                        (innerValidationService.getErrorList($scope.requiredBindings.name)[inputDropdownConstants.postSubmitValidationErrorKey] &&
                             innerValidationService.hasSubmitted() && !$scope.isFocused));

                }
            
            }
        })]);

})());