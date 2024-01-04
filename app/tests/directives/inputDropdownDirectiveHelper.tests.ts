declare var hctraMocks: any;

(function () {
    "use strict";

    describe("inputDropdownHelper", function () {

        beforeEach(angular.mock.module("HCTRAModule"));

        let service: HCTRA.Service.InputDropdownHelper;
        let inputDropdownScope: HCTRA.Model.IInputDropdownDirectiveScope<any>;
        let dictionary: {};
        let constants: HCTRA.Constant.IInputDropdownConstants;

        beforeEach(angular.mock.module(function () {

            inputDropdownScope = {
                requiredBindings: {
                    items: [],
                    name: "element",
                    selectedItem: { },
                    form: {} as angular.IFormController,
                    id: "",
                    getDefaultItem: (fullList: any[]): any => { return fullList; },
                    getItemDisplayName: (item: any): string => { return (item) ? "" : ""; },
                    getPartialItemMatches: (userInput: string, fullList: any[]): any[] => { return userInput && fullList ? [] : []; },
                    getExactItemMatch: (userInput: string, currentFilteredList: any[]): any => { return userInput && currentFilteredList ? "exact" : "exact"; }
                },
                optionalBindings: {
                    placeholder: "",
                    tabIndex: 0,
                    title: "",
                    shouldValidate: false,
                    getItemFromNoList: (userInput: string): any => { return userInput; }
                },
                filteredItems: [],
                keyActions: {
                    upAction: (): void => { },
                    downAction: (): void => { },
                    enterAction: (event: any): void => { if (!event) { event = "false"; } }
                },
                inputDropdownItemIdPrefix: "",
                inputDropdownBoxId: "",
                userInput: "",
                dropdownVisible: false,
                inputChange: (): void => { },
                inputDropdownClass: (): string => { return ""; },
                setActive: (index: number): void => { if (index === 500000) { index = 1; } }
            } as HCTRA.Model.IInputDropdownDirectiveScope<any>;
            inputDropdownScope.requiredBindings.form["element"] = {
                $setValidity: (key: string, isValid: boolean): void => {
                    dictionary[key] = isValid;
                }
            };
            dictionary = {};
        }));

        beforeEach(angular.mock.inject(function ($injector: angular.auto.IInjectorService) {
            service = $injector.get<HCTRA.Service.InputDropdownHelper>("inputDropdownHelper");
            constants = $injector.get<HCTRA.Constant.IInputDropdownConstants>("inputDropdownConstants");
        }));


        it("test setFormValidity with null", () => {
            service.setFormValidity(null, inputDropdownScope);
            expect(dictionary[constants.preSubmitValidationErrorKey]).toBeTruthy();
            expect(dictionary[constants.postSubmitValidationErrorKey]).toBeTruthy();
        });

        it("test setFormValidity with preSubmitValidationErrorKey", () => {
            service.setFormValidity(constants.preSubmitValidationErrorKey, inputDropdownScope);
            expect(dictionary[constants.preSubmitValidationErrorKey]).toBeFalsy();
            expect(dictionary[constants.postSubmitValidationErrorKey]).toBeTruthy();
        });

        it("test setFormValidity with postSubmitValidationErrorKey", () => {
            service.setFormValidity(constants.postSubmitValidationErrorKey, inputDropdownScope);
            expect(dictionary[constants.preSubmitValidationErrorKey]).toBeTruthy();
            expect(dictionary[constants.postSubmitValidationErrorKey]).toBeFalsy();
        });

        it("test runProcessesForInputChangeWithNoValidation when getPartialItemMatches returns null", () => {
            inputDropdownScope.userInput = ".";
            inputDropdownScope.dropdownVisible = true;
            inputDropdownScope.requiredBindings.getPartialItemMatches = (userInput: string, fullList: any[]): any[] => { return (fullList || userInput) ? null : null; };

            service.runProcessesForInputChangeWithNoValidation(inputDropdownScope);

            expect(dictionary[constants.preSubmitValidationErrorKey]).toBeTruthy();
            expect(dictionary[constants.postSubmitValidationErrorKey]).toBeTruthy();
            expect(inputDropdownScope.dropdownVisible).toBeFalsy();
            expect(inputDropdownScope.requiredBindings.selectedItem).toEqual(".");
            expect(inputDropdownScope.filteredItems).toEqual([]);
        });

        it("test runProcessesForInputChangeWithNoValidation when getPartialItemMatches returns []", () => {
            inputDropdownScope.userInput = ".";
            inputDropdownScope.dropdownVisible = true;
            inputDropdownScope.requiredBindings.getPartialItemMatches = (userInput: string, fullList: any[]): any[] => { return fullList || userInput ? [] : []; };

            service.runProcessesForInputChangeWithNoValidation(inputDropdownScope);

            expect(dictionary[constants.preSubmitValidationErrorKey]).toBeTruthy();
            expect(dictionary[constants.postSubmitValidationErrorKey]).toBeTruthy();
            expect(inputDropdownScope.dropdownVisible).toBeFalsy();
            expect(inputDropdownScope.requiredBindings.selectedItem).toEqual(".");
            expect(inputDropdownScope.filteredItems).toEqual([]);
        });

        it("test runProcessesForInputChangeWithNoValidation when getPartialItemMatches returns array with single item", () => {
            inputDropdownScope.userInput = ".";
            inputDropdownScope.dropdownVisible = true;
            inputDropdownScope.requiredBindings.getPartialItemMatches = (userInput: string, fullList: any[]): any[] => { return userInput || fullList ? [1] :  [1]; };

            service.runProcessesForInputChangeWithNoValidation(inputDropdownScope);

            expect(dictionary[constants.preSubmitValidationErrorKey]).toBeTruthy();
            expect(dictionary[constants.postSubmitValidationErrorKey]).toBeTruthy();
            expect(inputDropdownScope.dropdownVisible).toBeFalsy();
            expect(inputDropdownScope.requiredBindings.selectedItem).toEqual("exact");
            expect(inputDropdownScope.filteredItems).toEqual([1]);
        });

        it("test runProcessesForInputChangeWithNoValidation when getPartialItemMatches returns array with multiple items", () => {
            inputDropdownScope.userInput = ".";
            inputDropdownScope.dropdownVisible = true;
            inputDropdownScope.requiredBindings.getPartialItemMatches = (userInput: string, fullList: any[]): any[] => { return fullList || userInput ? [1,2] : [1,2]; };

            service.runProcessesForInputChangeWithNoValidation(inputDropdownScope);

            expect(dictionary[constants.preSubmitValidationErrorKey]).toBeTruthy();
            expect(dictionary[constants.postSubmitValidationErrorKey]).toBeTruthy();
            expect(inputDropdownScope.dropdownVisible).toBeTruthy();
            expect(inputDropdownScope.requiredBindings.selectedItem).toEqual(".");
            expect(inputDropdownScope.filteredItems).toEqual([1, 2]);
        });

        it("test runProcessesWhenInputIsEmpty", () => {
            let setActiveIndex = 3;
            inputDropdownScope.dropdownVisible = true;
            inputDropdownScope.setActive = (index: number): void => { setActiveIndex = index; };
            inputDropdownScope.requiredBindings.items = [1,2,3];

            service.runProcessesWhenInputIsEmpty(inputDropdownScope);

            expect(dictionary[constants.preSubmitValidationErrorKey]).toBeTruthy();
            expect(dictionary[constants.postSubmitValidationErrorKey]).toBeTruthy();
            expect(setActiveIndex).toEqual(0);
            expect(inputDropdownScope.dropdownVisible).toBeTruthy();
            expect(inputDropdownScope.requiredBindings.selectedItem).toEqual([1, 2, 3]);
            expect(inputDropdownScope.filteredItems).toEqual([1, 2, 3]);
        });

        it("test runValidationProcesses when preSubmit returns false", () => {
            var exactMatchWasCalled = false;
            inputDropdownScope.dropdownVisible = true;
            inputDropdownScope.requiredBindings.getPartialItemMatches = (userInput: string, fullList: any[]): any[] => {
                if (userInput && fullList)
                    return null;
                return null;
            };
            inputDropdownScope.requiredBindings.getExactItemMatch = (userInput: string, currentFilteredList: any[]): any => {
                if (currentFilteredList || userInput) {
                    exactMatchWasCalled = true;
                }
                exactMatchWasCalled = true;
                return "exact";
            };

            service.runValidationProcesses(inputDropdownScope);

            expect(dictionary[constants.preSubmitValidationErrorKey]).toBeFalsy();
            expect(dictionary[constants.postSubmitValidationErrorKey]).toBeTruthy();
            expect(inputDropdownScope.dropdownVisible).toBeFalsy();
            expect(inputDropdownScope.filteredItems).toEqual([]);
            expect(exactMatchWasCalled).toBeFalsy();
        });

        it("test runValidationProcesses when getExactItemMatch returns empty", () => {
            var exactMatchWasCalled = false;
            inputDropdownScope.dropdownVisible = true;
            inputDropdownScope.requiredBindings.getPartialItemMatches = (userInput: string, fullList: any[]): any[] => { return userInput || fullList ? [1, 2] : [1, 2]; };
            inputDropdownScope.requiredBindings.getExactItemMatch = (userInput: string, currentFilteredList: any[]): any => {
                if (currentFilteredList || userInput) {
                    exactMatchWasCalled = true;
                }
                exactMatchWasCalled = true;
                return null;
            };

            service.runValidationProcesses(inputDropdownScope);

            expect(dictionary[constants.preSubmitValidationErrorKey]).toBeTruthy();
            expect(dictionary[constants.postSubmitValidationErrorKey]).toBeFalsy();
            expect(inputDropdownScope.dropdownVisible).toBeTruthy();
            expect(inputDropdownScope.filteredItems).toEqual([1, 2]);
            expect(exactMatchWasCalled).toBeTruthy();
        });

        it("test runValidationProcesses when getExactItemMatch returns match and filteredItems are momre than 1 --> this should never happen", () => {
            var exactMatchWasCalled = false;
            inputDropdownScope.dropdownVisible = true;
            inputDropdownScope.requiredBindings.getPartialItemMatches = (userInput: string, fullList: any[]): any[] => { return userInput || fullList ? [1, 2] : [1, 2]; };
            inputDropdownScope.requiredBindings.getExactItemMatch = (userInput: string, currentFilteredList: any[]): any => {
                if (currentFilteredList) {
                    exactMatchWasCalled = true;
                }
                exactMatchWasCalled = true;
                return "cool man";
            };

            service.runValidationProcesses(inputDropdownScope);

            expect(dictionary[constants.preSubmitValidationErrorKey]).toBeTruthy();
            expect(dictionary[constants.postSubmitValidationErrorKey]).toBeFalsy();
            expect(inputDropdownScope.dropdownVisible).toBeTruthy();
            expect(inputDropdownScope.filteredItems).toEqual([1, 2]);
            expect(exactMatchWasCalled).toBeTruthy();
        });

        it("test runValidationProcesses when getExactItemMatch returns exact match", () => {
            var exactMatchWasCalled = false;
            inputDropdownScope.dropdownVisible = true;
            inputDropdownScope.requiredBindings.getPartialItemMatches = (userInput: string, fullList: any[]): any[] => { return (fullList) ? [1] : [1]; };
            inputDropdownScope.requiredBindings.getExactItemMatch = (userInput: string, currentFilteredList: any[]): any => {
                if (currentFilteredList) {
                    exactMatchWasCalled = true;
                }
                exactMatchWasCalled = true;
                return "cool man";
            };

            service.runValidationProcesses(inputDropdownScope);

            expect(dictionary[constants.preSubmitValidationErrorKey]).toBeTruthy();
            expect(dictionary[constants.postSubmitValidationErrorKey]).toBeTruthy();
            expect(inputDropdownScope.requiredBindings.selectedItem).toEqual("cool man");
            expect(inputDropdownScope.filteredItems).toEqual([1]);
            expect(inputDropdownScope.filteredItems).toEqual([1]);
            expect(exactMatchWasCalled).toBeTruthy();
        });


        it("test ensureElementFocus when findElementQuery is null", () => {
            const elementIndex = 1;
            let inputDropdownItemIdPrefix = false;
            let inputDropdownBoxId = false;
            const keyType: HCTRA.Model.IInputDropdownDirectiveKeyType = {
                boundaryType: "botom",
                comparisonSwitch: 1,
                scrollType: true
            };
            const elementGetBoundingClientRect = (): any => {
                return {
                    botom: 15
                };
            };
            const findDropdownQueryGetBoundingClientRect = (): any => {
                return {
                    botom: 11
                };
            };
            let scroll = false;
            const scrollIntoView = (input: boolean): void => {
                scroll = input;
            };
            const spy: jasmine.Spy = spyOn(angular as any, "element").and.callFake((id: string) => {
                if (constants.inputDropdownItemIdPrefix + "" + elementIndex === id) {
                    inputDropdownItemIdPrefix = true;
                    return [{ getBoundingClientRect: elementGetBoundingClientRect, scrollIntoView: scrollIntoView }];
                } else if (constants.inputDropdownBoxId === id) {
                    inputDropdownBoxId = true;
                    return [{ getBoundingClientRect: findDropdownQueryGetBoundingClientRect }];
                } else {
                    return null;
                }

            });

            service.ensureElementFocus(elementIndex, keyType);
            expect(scroll).toBeFalsy();

            expect(inputDropdownItemIdPrefix).toBeTruthy();
            expect(inputDropdownBoxId).toBeTruthy();
            spy.and.callThrough();
        });

        it("test ensureElementFocus when findDropdownQuery is null", () => {
            const elementIndex = 1;
            let inputDropdownItemIdPrefix = false;
            let inputDropdownBoxId = false;
            const keyType: HCTRA.Model.IInputDropdownDirectiveKeyType = {
                boundaryType: "botom",
                comparisonSwitch: 1,
                scrollType: true
            };
            const elementGetBoundingClientRect = (): any => {
                return {
                    botom: 15
                };
            };
            const findDropdownQueryGetBoundingClientRect = (): any => {
                return {
                    botom: 11
                };
            };
            let scroll = false;
            const scrollIntoView = (input: boolean): void => {
                scroll = input;
            };
            const spy: jasmine.Spy = spyOn(angular as any, "element").and.callFake((id: string) => {
                if (constants.inputDropdownItemIdPrefix + "" + elementIndex === id) {
                    inputDropdownItemIdPrefix = true;
                    return [{ getBoundingClientRect: elementGetBoundingClientRect, scrollIntoView: scrollIntoView }];
                } else if (constants.inputDropdownBoxId === id) {
                    inputDropdownBoxId = true;
                    return [{ getBoundingClientRect: findDropdownQueryGetBoundingClientRect }];
                } else {
                    return null;
                }

            });

            service.ensureElementFocus(elementIndex, keyType);
            expect(scroll).toBeFalsy();

            expect(inputDropdownItemIdPrefix).toBeTruthy();
            expect(inputDropdownBoxId).toBeTruthy();
            spy.and.callThrough();
        });

        it("test ensureElementFocus when findElementQuery is not an array", () => {
            const elementIndex = 1;
            let inputDropdownItemIdPrefix = false;
            let inputDropdownBoxId = false;
            const keyType: HCTRA.Model.IInputDropdownDirectiveKeyType = {
                boundaryType: "botom",
                comparisonSwitch: 1,
                scrollType: true
            };
            const elementGetBoundingClientRect = (): any => {
                return {
                    botom: 15
                };
            };
            const findDropdownQueryGetBoundingClientRect = (): any => {
                return {
                    botom: 11
                };
            };
            let scroll = false;
            const scrollIntoView = (input: boolean): void => {
                scroll = input;
            };
            const spy: jasmine.Spy = spyOn(angular as any, "element").and.callFake((id: string) => {
                if (constants.inputDropdownItemIdPrefix + "" + elementIndex === id) {
                    inputDropdownItemIdPrefix = true;
                    return [{ getBoundingClientRect: elementGetBoundingClientRect, scrollIntoView: scrollIntoView }];
                } else if (constants.inputDropdownBoxId === id) {
                    inputDropdownBoxId = true;
                    return [{ getBoundingClientRect: findDropdownQueryGetBoundingClientRect }];
                } else {
                    return null;
                }

            });

            service.ensureElementFocus(elementIndex, keyType);
            expect(scroll).toBeFalsy();

            expect(inputDropdownItemIdPrefix).toBeTruthy();
            expect(inputDropdownBoxId).toBeTruthy();
            spy.and.callThrough();
        });

        it("test ensureElementFocus when findElementQuery is not an array", () => {
            const elementIndex = 1;
            let inputDropdownItemIdPrefix = false;
            let inputDropdownBoxId = false;
            const keyType: HCTRA.Model.IInputDropdownDirectiveKeyType = {
                boundaryType: "botom",
                comparisonSwitch: 1,
                scrollType: true
            };
            const elementGetBoundingClientRect = (): any => {
                return {
                    botom: 15
                };
            };
            const findDropdownQueryGetBoundingClientRect = (): any => {
                return {
                    botom: 11
                };
            };
            let scroll = false;
            const scrollIntoView = (input: boolean): void => {
                scroll = input;
            };
            const spy: jasmine.Spy = spyOn(angular as any, "element").and.callFake((id: string) => {
                if (constants.inputDropdownItemIdPrefix + "" + elementIndex === id) {
                    inputDropdownItemIdPrefix = true;
                    return [{ getBoundingClientRect: elementGetBoundingClientRect, scrollIntoView: scrollIntoView }];
                } else if (constants.inputDropdownBoxId === id) {
                    inputDropdownBoxId = true;
                    return [{ getBoundingClientRect: findDropdownQueryGetBoundingClientRect }];
                } else {
                    return null;
                }

            });

            service.ensureElementFocus(elementIndex, keyType);
            expect(scroll).toBeFalsy();

            expect(inputDropdownItemIdPrefix).toBeTruthy();
            expect(inputDropdownBoxId).toBeTruthy();
            spy.and.callThrough();
        });

        it("test ensureElementFocus", () => {
            const elementIndex = 1;
            let inputDropdownItemIdPrefix = false;
            let inputDropdownBoxId = false;
            const keyType: HCTRA.Model.IInputDropdownDirectiveKeyType = {
                boundaryType: "botom",
                comparisonSwitch: 1,
                scrollType: true
            };
            const elementGetBoundingClientRect = ():any => {
                return {
                    botom: 10
                };
            };
            const findDropdownQueryGetBoundingClientRect = (): any => {
                return {
                    botom: 11
                };
            };
            let scroll = false;
            const scrollIntoView = (input: boolean): void => {
                scroll = input;
            }; 
            const spy: jasmine.Spy = spyOn(angular as any, "element").and.callFake((id: string) => {
                if (constants.inputDropdownItemIdPrefix + "" + elementIndex === id) {
                    inputDropdownItemIdPrefix = true;
                    return [{ getBoundingClientRect: elementGetBoundingClientRect, scrollIntoView: scrollIntoView}];
                } else if (constants.inputDropdownBoxId === id) {
                    inputDropdownBoxId = true;
                    return [{ getBoundingClientRect: findDropdownQueryGetBoundingClientRect }];
                } else {
                    return null;
                }

            });

            service.ensureElementFocus(elementIndex, keyType);

            expect(inputDropdownItemIdPrefix).toBeTruthy();
            expect(inputDropdownBoxId).toBeTruthy();
            expect(scroll).toBeTruthy();
            spy.and.callThrough();
        });

        it("test ensureElementFocus scrollType = false", () => {
            const elementIndex = 1;
            let inputDropdownItemIdPrefix = false;
            let inputDropdownBoxId = false;
            const keyType: HCTRA.Model.IInputDropdownDirectiveKeyType = {
                boundaryType: "botom",
                comparisonSwitch: 1,
                scrollType: true
            };
            const elementGetBoundingClientRect = (): any => {
                return {
                    botom: 15
                };
            };
            const findDropdownQueryGetBoundingClientRect = (): any => {
                return {
                    botom: 11
                };
            };
            let scroll = false;
            const scrollIntoView = (input: boolean): void => {
                scroll = input;
            };
            const spy: jasmine.Spy = spyOn(angular as any, "element").and.callFake((id: string) => {
                if (constants.inputDropdownItemIdPrefix + "" + elementIndex === id) {
                    inputDropdownItemIdPrefix = true;
                    return [{ getBoundingClientRect: elementGetBoundingClientRect, scrollIntoView: scrollIntoView }];
                } else if (constants.inputDropdownBoxId === id) {
                    inputDropdownBoxId = true;
                    return [{ getBoundingClientRect: findDropdownQueryGetBoundingClientRect }];
                } else {
                    return null;
                }

            });

            service.ensureElementFocus(elementIndex, keyType);

            expect(inputDropdownItemIdPrefix).toBeTruthy();
            expect(inputDropdownBoxId).toBeTruthy();
            expect(scroll).toBeFalsy();
            spy.and.callThrough();
        });
    });
}());