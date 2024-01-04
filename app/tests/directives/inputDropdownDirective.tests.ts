(function (): void {
    "use strict";

    describe("directive: input-dropdown", () => {

        beforeEach(angular.mock.module("HCTRATemplates"));
        beforeEach(angular.mock.module("HCTRAModule"));

        let scope;
        let directiveScope: HCTRA.Model.IInputDropdownDirectiveScope<any>;
        const inputDropdownConstants: HCTRA.Constant.IInputDropdownConstants = {
            inputDropdownItemIdPrefix: "#inputDropdownItem",
            inputDropdownBoxId: "#inputDropdownBox",
            preSubmitValidationErrorKey: "inputError",
            postSubmitValidationErrorKey: "submissionError"
        };
        const inputDropdownHelper: HCTRA.Service.IInputDropdownHelper = {
            runProcessesForInputChangeWithNoValidation: <T>(dirScope: HCTRA.Model.IInputDropdownDirectiveScope<T>): void => { dirScope.userInput = "t"; },
            runProcessesWhenInputIsEmpty: <T>(dirScope: HCTRA.Model.IInputDropdownDirectiveScope<T>): void => { dirScope.userInput = "t"; },
            runValidationProcesses: <T>(dirScope: HCTRA.Model.IInputDropdownDirectiveScope<T>): void => { dirScope.userInput = "t"; },
            ensureElementFocus: (elementIndex: number, keyType: HCTRA.Model.IInputDropdownDirectiveKeyType): void => { directiveScope.userInput = "t"; keyType.boundaryType = "top"; },
            setFormValidity: <T>(validationKey: string, dirScope: HCTRA.Model.IInputDropdownDirectiveScope<T>): void => { dirScope.userInput = "t"; }
        };
        const downKeyFocus: HCTRA.Model.IInputDropdownDirectiveKeyType = {
            boundaryType: "bottom",
            comparisonSwitch: -1,
            scrollType: false
        };
        const upKeyFocus: HCTRA.Model.IInputDropdownDirectiveKeyType = {
            boundaryType: "top",
            comparisonSwitch: 1,
            scrollType: true
        };
        const validationObject: any = {};
        let validationServiceWasUsed: boolean;

        const validationService = (valInput: any) => {
            validationServiceWasUsed = true;
            return {
                isInvalidWithNullCheck: (input: string) => valInput.name === input ? true : false,
                getErrorList: (input: string) => input ? validationObject : validationObject,
                hasSubmitted: () => valInput.hasSubmitted,
                getErrorStatusClassFastWithNullCheck: (input: string) => input ? "has-error" : "has-error"
            };
        };

        beforeEach(angular.mock.module(() => {
            validationObject[inputDropdownConstants.preSubmitValidationErrorKey] = false;
            validationObject[inputDropdownConstants.postSubmitValidationErrorKey] = false;
            validationServiceWasUsed = false;
        }));

        beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {
            $provide.value("validationService", validationService);
            $provide.value("inputDropdownHelper", inputDropdownHelper);
            $provide.value("inputDropdownConstants", inputDropdownConstants);
        }));

        describe('scope tests: optional bindings specified',
            () => {
                beforeEach(angular.mock.inject(($rootScope: angular.IRootScopeService,
                    $compile: angular.ICompileService,
                    $templateCache: angular.ITemplateCacheService) => {
                    scope = $rootScope.$new();

                    scope.requiredInputDropdownProperties = {
                        name: "LicensePlateInputDropdownName",
                        id: "LicensePlateInputDropdownId",
                        getDefaultItem: (fullList: HCTRA.Model.AccountActivity.Vehicle[]): HCTRA.Model.AccountActivity.Vehicle => {
                            return fullList[0];
                        },
                        getItemDisplayName: (vehicle: HCTRA.Model.AccountActivity.Vehicle): string => {
                            return vehicle.text;
                        },
                        getPartialItemMatches: (userInput: string, fullList: HCTRA.Model.AccountActivity.Vehicle[]): HCTRA.Model.AccountActivity.Vehicle[] => {
                            if (!userInput) {
                                return [];
                            }
                            const lowerCaseInput: string = userInput.toLowerCase();
                            return fullList.filter(
                                function (element: any) {
                                    if (!element || !element.text) {
                                        return false;
                                    }
                                    return element.text.toLowerCase().indexOf(lowerCaseInput) !== -1;
                                });
                        },
                        getExactItemMatch: (userInput: string, currentFilteredList: HCTRA.Model.AccountActivity.Vehicle[]): HCTRA.Model.AccountActivity.Vehicle => {
                            if (!userInput) {
                                return null;
                            }
                            const lowerCaseInput: string = userInput.toLowerCase();
                            for (const element of currentFilteredList) {
                                if (!element || !element.text) {
                                    continue;
                                }
                                if (element.text.toLowerCase() === lowerCaseInput) {
                                    return element;
                                }
                            }

                            return null;
                        }
                    } as HCTRA.Model.IInputDropdownDirectiveRequiredBindings<HCTRA.Model.AccountActivity.Vehicle>;

                    scope.optionalInputDropdownProperties = {
                        placeholder: "ex. TX-1234567",
                        tabIndex: 2,
                        title: "License Plate",
                        getItemFromNoList: (userInput: string): HCTRA.Model.AccountActivity.Vehicle => {
                            const vehicle: HCTRA.Model.AccountActivity.Vehicle = {
                                text: userInput, value: "L"
                            };
                            return vehicle;
                        }
                    } as HCTRA.Model.IInputDropdownDirectiveOptionalBindings<HCTRA.Model.AccountActivity.Vehicle>;

                    $templateCache.put("/app/directives/inputDropdown/inputDropdownTemplate.html",
                        $templateCache.get("app/directives/inputDropdown/inputDropdownTemplate.html"));
                    const el: angular.IAugmentedJQuery = angular.element("<form name=\"form\">" +
                        "<input-dropdown required-bindings=\"requiredInputDropdownProperties\" optional-bindings=\"optionalInputDropdownProperties\"></input-dropdown>" +
                        + "</form>");
                    $compile(el)(scope);
                    scope.$digest();

                    directiveScope = (el.children() as angular.IAugmentedJQuery).isolateScope() as HCTRA.Model.IInputDropdownDirectiveScope<any>;

                    spyOn(inputDropdownHelper, "ensureElementFocus");
                    spyOn(inputDropdownHelper, "runProcessesWhenInputIsEmpty");
                    spyOn(inputDropdownHelper, "runValidationProcesses");
                    spyOn(inputDropdownHelper, "setFormValidity");
                    spyOn(inputDropdownHelper, "runProcessesForInputChangeWithNoValidation");

                }));


                it("should have a defined scope", () => {
                    expect(scope).toBeDefined();
                });

                it("should have a defined directiveScope", () => {
                    expect(directiveScope).toBeDefined();
                });

                it("test setActive", () => {
                    directiveScope.setActive(3);
                    expect(directiveScope.activeItemIndex).toEqual(3);

                });

                it("keyActions should have correct upAction for valid index", () => {
                    directiveScope.activeItemIndex = 1;
                    directiveScope.keyActions.upAction();
                    expect(inputDropdownHelper.ensureElementFocus).toHaveBeenCalledWith(0, upKeyFocus);
                    expect(inputDropdownHelper.ensureElementFocus).toHaveBeenCalledTimes(1);
                });

                it("keyActions should have correct upAction for invalid index", () => {
                    directiveScope.activeItemIndex = 0;
                    directiveScope.keyActions.upAction();
                    expect(inputDropdownHelper.ensureElementFocus).not.toHaveBeenCalled();
                });

                it("keyActions should have correct downAction for valid index", () => {
                    directiveScope.activeItemIndex = 0;
                    directiveScope.filteredItems = [1, 2];
                    directiveScope.keyActions.downAction();
                    expect(inputDropdownHelper.ensureElementFocus).toHaveBeenCalledWith(1, downKeyFocus);
                    expect(inputDropdownHelper.ensureElementFocus).toHaveBeenCalledTimes(1);
                });

                it("keyActions should have correct downAction for invalid index", () => {
                    directiveScope.activeItemIndex = 2;
                    directiveScope.filteredItems = [1, 2];
                    directiveScope.keyActions.downAction();
                    expect(inputDropdownHelper.ensureElementFocus).not.toHaveBeenCalled();
                });

                it("keyActions should have correct enterAction when dropdown is not visible", () => {
                    let preventDefaultWasCalled = false;
                    const preventDefault = (): void => {
                        preventDefaultWasCalled = true;
                    };

                    directiveScope.dropdownVisible = false;
                    directiveScope.activeItemIndex = 2;
                    directiveScope.filteredItems = [1, 2];
                    directiveScope.keyActions.enterAction({ preventDefault: preventDefault });
                    expect(preventDefaultWasCalled).toBeFalsy();
                });

                it("test selectItem", () => {
                    directiveScope.selectItem({test: 500, text: "like a bat"});

                    expect(inputDropdownHelper.setFormValidity).toHaveBeenCalledWith(null, directiveScope);
                    expect(inputDropdownHelper.setFormValidity).toHaveBeenCalledTimes(1);
                    expect(directiveScope.filteredItems).toEqual([{ test: 500, text: "like a bat" }]);
                    expect(directiveScope.dropdownVisible).toBeFalsy();
                    expect(directiveScope.userInput).toEqual("like a bat");
                    expect(directiveScope.requiredBindings.selectedItem).toEqual({
                        test: 500, text: "like a bat" });
                });

                it("keyActions should have correct enterAction when dropdown is visible but activeIndex is not valid -- should never happen", () => {
                    let preventDefaultWasCalled = false;
                    const preventDefault = (): void => {
                        preventDefaultWasCalled = true;
                    };

                    directiveScope.dropdownVisible = true;
                    directiveScope.activeItemIndex = -2;
                    directiveScope.filteredItems = [1, 2];
                    directiveScope.keyActions.enterAction({ preventDefault: preventDefault });
                    expect(preventDefaultWasCalled).toBeTruthy();
                    expect(inputDropdownHelper.setFormValidity).not.toHaveBeenCalled();

                });

                it("keyActions should have correct enterAction when dropdown is visible but activeIndex is valid", () => {
                    let preventDefaultWasCalled = false;
                    const preventDefault = (): void => {
                        preventDefaultWasCalled = true;
                    };

                    directiveScope.dropdownVisible = true;
                    directiveScope.activeItemIndex = 0;
                    directiveScope.filteredItems = [{ test: 500, text: "like a bat" }, { test: 5300, text: "liiiiike a bat" }];
                    directiveScope.keyActions.enterAction({ preventDefault: preventDefault });
                    expect(preventDefaultWasCalled).toBeTruthy();
                    expect(inputDropdownHelper.setFormValidity).toHaveBeenCalledTimes(1);
                    expect(directiveScope.filteredItems).toEqual([{ test: 500, text: "like a bat" }]);

                });

                it("verify that filtered items is defaulted to an empty array", () => {
                    expect(directiveScope.filteredItems).toEqual([]);

                });

                it("verify that items is assigned to filtered items when it becomes populated -- and watch discontinues after", () => {
                    scope.requiredInputDropdownProperties.items = [];
                    scope.$digest();

                    expect(directiveScope.filteredItems).toEqual([]);
                    expect(directiveScope.requiredBindings.selectedItem).toBeUndefined();

                    scope.requiredInputDropdownProperties.items = [1];
                    scope.$digest();

                    expect(directiveScope.filteredItems).toEqual([1]);
                    expect(directiveScope.requiredBindings.selectedItem).toEqual(1);

                    scope.requiredInputDropdownProperties.items = [2, 1];
                    scope.$digest();

                    expect(directiveScope.filteredItems).toEqual([1]);
                    expect(directiveScope.requiredBindings.selectedItem).toEqual(1);
                });

                it("verify scope is initialized properly (with optional bindings)", () => {
                    expect(directiveScope.validationService).toEqual(validationService);
                    expect(directiveScope.inputDropdownItemIdPrefix).toEqual(inputDropdownConstants.inputDropdownItemIdPrefix.substring(1));
                    expect(directiveScope.inputDropdownBoxId).toEqual(inputDropdownConstants.inputDropdownBoxId.substring(1));
                    expect(directiveScope.placeholder).toEqual("ex. TX-1234567");
                    expect(directiveScope.tabIndex).toEqual(2);
                    expect(directiveScope.title).toEqual("License Plate");
                    expect(directiveScope.dropdownVisible).toEqual(false);
                    expect(directiveScope.activeItemIndex).toEqual(0);
                    expect(directiveScope.userInput).toEqual("");
                    expect(directiveScope.isFocused).toBeFalsy();
                });

                it("test setWidth", () => {
                    const element: any = {
                        getBoundingClientRect: () => {
                            return { width: 50 };
                        }
                    };

                    const spy: jasmine.Spy = spyOn(angular as any, "element").and.callFake((id: string) => {
                        if ("#" + directiveScope.requiredBindings.id === id) {
                            return [element];
                        }
                        throw new Error("Test");
                    });

                    expect(directiveScope.setWidth()).toEqual({"width": "50px"});

                    spy.and.callThrough();
                });

                it("test showValidation: form is non-existent", () => {
                    directiveScope.isFocused = false;
                    directiveScope.requiredBindings.form = null;

                    expect(directiveScope.showValidation()).toBeFalsy();
                });

                it("test showValidation: form is existent but isInvalidWithNullCheck returns false", () => {
                    directiveScope.isFocused = false;
                    const fakeForm: any = { name: "LicensePlateInputDropdownName1", hasSubmitted: true, list: [] };
                    directiveScope.requiredBindings.form = fakeForm as angular.IFormController;

                    expect(directiveScope.showValidation()).toBeFalsy();
                });

                it("test showValidation: getErrorList returns false for all", () => {
                    directiveScope.isFocused = false;
                    validationObject[inputDropdownConstants.preSubmitValidationErrorKey] = false;
                    validationObject[inputDropdownConstants.postSubmitValidationErrorKey] = false;
                    const fakeForm: any = { name: "LicensePlateInputDropdownName", hasSubmitted: true };
                    directiveScope.requiredBindings.form = fakeForm as angular.IFormController;

                    expect(directiveScope.showValidation()).toBeFalsy();
                });

                it("test showValidation: getErrorList returns false for hasSubmitted", () => {
                    directiveScope.isFocused = false;
                    validationObject[inputDropdownConstants.preSubmitValidationErrorKey] = false;
                    validationObject[inputDropdownConstants.postSubmitValidationErrorKey] = true;
                    const fakeForm: any = { name: "LicensePlateInputDropdownName", hasSubmitted: false };
                    directiveScope.requiredBindings.form = fakeForm as angular.IFormController;

                    expect(directiveScope.showValidation()).toBeFalsy();
                });

                it("test showValidation: getErrorList returns true for isFocused", () => {
                    directiveScope.isFocused = true;
                    validationObject[inputDropdownConstants.preSubmitValidationErrorKey] = false;
                    validationObject[inputDropdownConstants.postSubmitValidationErrorKey] = true;
                    const fakeForm: any = { name: "LicensePlateInputDropdownName", hasSubmitted: true };
                    directiveScope.requiredBindings.form = fakeForm as angular.IFormController;

                    expect(directiveScope.showValidation()).toBeFalsy();
                });

                it("test showValidation: preSubmitValidationErrorKey is true", () => {
                    directiveScope.isFocused = true;
                    validationObject[inputDropdownConstants.preSubmitValidationErrorKey] = true;
                    validationObject[inputDropdownConstants.postSubmitValidationErrorKey] = false;
                    const fakeForm: any = { name: "LicensePlateInputDropdownName", hasSubmitted: false };
                    directiveScope.requiredBindings.form = fakeForm as angular.IFormController;

                    expect(directiveScope.showValidation()).toBeTruthy();
                });

                it("test showValidation: postSubmitValidationErrorKey validation set is true", () => {
                    directiveScope.isFocused = false;
                    validationObject[inputDropdownConstants.preSubmitValidationErrorKey] = false;
                    validationObject[inputDropdownConstants.postSubmitValidationErrorKey] = true;
                    const fakeForm: any = { name: "LicensePlateInputDropdownName", hasSubmitted: true };
                    directiveScope.requiredBindings.form = fakeForm as angular.IFormController;

                    expect(directiveScope.showValidation()).toBeTruthy();
                });

                it("test inputDropdownClass when showValidation is true", () => {
                    directiveScope.dropdownVisible = true;
                    validationObject[inputDropdownConstants.preSubmitValidationErrorKey] = true;
                    const fakeForm: any = { name: "LicensePlateInputDropdownName", hasSubmitted: true };
                    directiveScope.requiredBindings.form = fakeForm as angular.IFormController;

                    expect(directiveScope.inputDropdownClass()).toEqual("input-dropdown has-error");
                    expect(validationServiceWasUsed).toBeTruthy();
                    expect(directiveScope.dropdownVisible).toBeFalsy();
                });

                it("test inputDropdownClass when showValidation is false", () => {
                    directiveScope.dropdownVisible = true;
                    validationObject[inputDropdownConstants.preSubmitValidationErrorKey] = false;
                    validationObject[inputDropdownConstants.postSubmitValidationErrorKey] = false;
                    const fakeForm: any = { name: "LicensePlateInputDropdownName", hasSubmitted: false };
                    directiveScope.requiredBindings.form = fakeForm as angular.IFormController;

                    expect(directiveScope.inputDropdownClass()).toEqual("input-dropdown");
                    expect(validationServiceWasUsed).toBeTruthy();
                    expect(directiveScope.dropdownVisible).toBeTruthy();
                });

                it("test selectedItemClass when input equals activeItemIndex", () => {
                    directiveScope.activeItemIndex = 0;

                    expect(directiveScope.selectedItemClass(0)).toEqual({ "active": true });
                });

                it("test selectedItemClass when input does not equal activeItemIndex", () => {
                    directiveScope.activeItemIndex = 1;

                    expect(directiveScope.selectedItemClass(0)).toEqual({ "active": false });
                });

                it("test inputFocus when filteredItems = 0", () => {
                    directiveScope.isFocused = false;
                    directiveScope.dropdownVisible = true;
                    directiveScope.activeItemIndex = 100;
                    directiveScope.filteredItems = [];

                    directiveScope.inputFocus();
                    expect(directiveScope.dropdownVisible).toBeFalsy();
                    expect(directiveScope.isFocused).toBeTruthy();
                    expect(directiveScope.activeItemIndex).toEqual(100);
                });

                it("test inputFocus when getExactItemMatch returns a value", () => {
                    directiveScope.requiredBindings.getExactItemMatch = () => {
                        return true;
                    };
                    directiveScope.isFocused = false;
                    directiveScope.dropdownVisible = true;
                    directiveScope.activeItemIndex = 100;
                    directiveScope.filteredItems = [1, 2];

                    directiveScope.inputFocus();
                    expect(directiveScope.dropdownVisible).toBeFalsy();
                    expect(directiveScope.isFocused).toBeTruthy();
                    expect(directiveScope.activeItemIndex).toEqual(100);
                });

                it("test inputFocus when getExactItemMatch returns a value", () => {
                    directiveScope.requiredBindings.getExactItemMatch = () => {
                        return false;
                    };
                    directiveScope.isFocused = false;
                    directiveScope.dropdownVisible = true;
                    directiveScope.activeItemIndex = 100;
                    directiveScope.filteredItems = [1, 2];

                    directiveScope.inputFocus();
                    expect(directiveScope.dropdownVisible).toBeTruthy();
                    expect(directiveScope.isFocused).toBeTruthy();
                    expect(directiveScope.activeItemIndex).toEqual(0);
                });

                it("test inputChange when userInput is null", () => {
                    directiveScope.requiredBindings.selectedItem = "yes";
                    directiveScope.dropdownVisible = false;
                    directiveScope.userInput = null;

                    directiveScope.inputChange();

                    expect(directiveScope.requiredBindings.selectedItem).toBeNull();
                    expect(directiveScope.dropdownVisible).toBeTruthy();
                    expect(inputDropdownHelper.runProcessesWhenInputIsEmpty).toHaveBeenCalledWith(directiveScope);
                    expect(inputDropdownHelper.runProcessesWhenInputIsEmpty).toHaveBeenCalledTimes(1);
                });

                it("test inputChange when userInput is not null and optional bindings are null", () => {
                    directiveScope.requiredBindings.selectedItem = "yes";
                    directiveScope.dropdownVisible = false;
                    directiveScope.userInput = "t";
                    directiveScope.optionalBindings = null;

                    directiveScope.inputChange();

                    expect(directiveScope.requiredBindings.selectedItem).toBeNull();
                    expect(directiveScope.dropdownVisible).toBeTruthy();
                    expect(inputDropdownHelper.runProcessesForInputChangeWithNoValidation).toHaveBeenCalledWith(directiveScope);
                    expect(inputDropdownHelper.runProcessesForInputChangeWithNoValidation).toHaveBeenCalledTimes(1);
                });

                it("test inputChange when userInput is not null and optional bindings are false", () => {
                    directiveScope.requiredBindings.selectedItem = "yes";
                    directiveScope.dropdownVisible = false;
                    directiveScope.userInput = "t";
                    directiveScope.optionalBindings.shouldValidate = false;

                    directiveScope.inputChange();

                    expect(directiveScope.requiredBindings.selectedItem).toBeNull();
                    expect(directiveScope.dropdownVisible).toBeTruthy();
                    expect(inputDropdownHelper.runProcessesForInputChangeWithNoValidation).toHaveBeenCalledWith(directiveScope);
                    expect(inputDropdownHelper.runProcessesForInputChangeWithNoValidation).toHaveBeenCalledTimes(1);
                });

                it("test inputChange when userInput is not null and optional bindings are false", () => {
                    directiveScope.requiredBindings.selectedItem = "yes";
                    directiveScope.dropdownVisible = false;
                    directiveScope.userInput = "t";
                    directiveScope.optionalBindings.shouldValidate = true;

                    directiveScope.inputChange();

                    expect(directiveScope.requiredBindings.selectedItem).toBeNull();
                    expect(directiveScope.dropdownVisible).toBeTruthy();
                    expect(inputDropdownHelper.runValidationProcesses).toHaveBeenCalledWith(directiveScope);
                    expect(inputDropdownHelper.runValidationProcesses).toHaveBeenCalledTimes(1);
                });

                it("test inputBlur", () => {
                    directiveScope.isFocused = true;
                    directiveScope.dropdownVisible = true;

                    directiveScope.inputBlur();

                    expect(directiveScope.isFocused).toBeFalsy();
                    expect(directiveScope.dropdownVisible).toBeFalsy();
                });
            });

        describe('scope tests: optional bindings not specified',
            () => {
                beforeEach(angular.mock.inject(($rootScope: angular.IRootScopeService,
                    $compile: angular.ICompileService,
                    $templateCache: angular.ITemplateCacheService) => {
                    scope = $rootScope.$new();

                    scope.requiredInputDropdownProperties = {
                        name: "LicensePlateInputDropdownName",
                        id: "LicensePlateInputDropdownId",
                        getDefaultItem: (fullList: HCTRA.Model.AccountActivity.Vehicle[]): HCTRA.Model.AccountActivity.Vehicle => {
                            return fullList[0];
                        },
                        getItemDisplayName: (vehicle: HCTRA.Model.AccountActivity.Vehicle): string => {
                            return vehicle.text;
                        },
                        getPartialItemMatches: (userInput: string, fullList: HCTRA.Model.AccountActivity.Vehicle[]): HCTRA.Model.AccountActivity.Vehicle[] => {
                            if (!userInput) {
                                return [];
                            }
                            const lowerCaseInput: string = userInput.toLowerCase();
                            return fullList.filter(
                                function (element: any) {
                                    if (!element || !element.text) {
                                        return false;
                                    }
                                    return element.text.toLowerCase().indexOf(lowerCaseInput) !== -1;
                                });
                        },
                        getExactItemMatch: (userInput: string, currentFilteredList: HCTRA.Model.AccountActivity.Vehicle[]): HCTRA.Model.AccountActivity.Vehicle => {
                            if (!userInput) {
                                return null;
                            }
                            const lowerCaseInput: string = userInput.toLowerCase();
                            for (const element of currentFilteredList) {
                                if (!element || !element.text) {
                                    continue;
                                }
                                if (element.text.toLowerCase() === lowerCaseInput) {
                                    return element;
                                }
                            }

                            return null;
                        }
                    } as HCTRA.Model.IInputDropdownDirectiveRequiredBindings<HCTRA.Model.AccountActivity.Vehicle>;

                    scope.optionalInputDropdownProperties = {
                        getItemFromNoList: (userInput: string): HCTRA.Model.AccountActivity.Vehicle => {
                            const vehicle: HCTRA.Model.AccountActivity.Vehicle = {
                                text: userInput, value: "L"
                            };
                            return vehicle;
                        }
                    } as HCTRA.Model.IInputDropdownDirectiveOptionalBindings<HCTRA.Model.AccountActivity.Vehicle>;

                    $templateCache.put("/app/directives/inputDropdown/inputDropdownTemplate.html",
                        $templateCache.get("app/directives/inputDropdown/inputDropdownTemplate.html"));
                    const el: angular.IAugmentedJQuery = angular.element("<form name=\"form\">" +
                        "<input-dropdown required-bindings=\"requiredInputDropdownProperties\" optional-bindings=\"optionalInputDropdownProperties\"></input-dropdown>" +
                        + "</form>");
                    $compile(el)(scope);
                    scope.$digest();

                    directiveScope = (el.children() as angular.IAugmentedJQuery).isolateScope() as HCTRA.Model.IInputDropdownDirectiveScope<any>;

                    spyOn(inputDropdownHelper, "ensureElementFocus");
                    spyOn(inputDropdownHelper, "runProcessesWhenInputIsEmpty");
                    spyOn(inputDropdownHelper, "runValidationProcesses");
                    spyOn(inputDropdownHelper, "setFormValidity");
                    spyOn(inputDropdownHelper, "runProcessesForInputChangeWithNoValidation");

                }));

                it("verify scope is initialized properly (with no optional bindings)", () => {
                    expect(directiveScope.validationService).toEqual(validationService);
                    expect(directiveScope.inputDropdownItemIdPrefix).toEqual(inputDropdownConstants.inputDropdownItemIdPrefix.substring(1));
                    expect(directiveScope.inputDropdownBoxId).toEqual(inputDropdownConstants.inputDropdownBoxId.substring(1));
                    expect(directiveScope.placeholder).toBeNull();
                    expect(directiveScope.tabIndex).toBeNull();
                    expect(directiveScope.title).toBeNull();
                    expect(directiveScope.dropdownVisible).toEqual(false);
                    expect(directiveScope.activeItemIndex).toEqual(0);
                    expect(directiveScope.userInput).toEqual("");
                    expect(directiveScope.isFocused).toBeFalsy();
                });

            });
    });
}());