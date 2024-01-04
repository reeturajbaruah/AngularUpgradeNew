module HCTRA.Service {
    "use strict";

    export interface IInputDropdownHelper {
        runProcessesForInputChangeWithNoValidation<T>(directiveScope: HCTRA.Model.IInputDropdownDirectiveScope<T>): void;
        runProcessesWhenInputIsEmpty<T>(directiveScope: HCTRA.Model.IInputDropdownDirectiveScope<T>): void;
        runValidationProcesses<T>(directiveScope: HCTRA.Model.IInputDropdownDirectiveScope<T>): void;
        ensureElementFocus(elementIndex: number, keyType: HCTRA.Model.IInputDropdownDirectiveKeyType): void;
        setFormValidity<T>(validationKey: string, directiveScope: HCTRA.Model.IInputDropdownDirectiveScope<T>): void;
    }

    export class InputDropdownHelper implements IInputDropdownHelper {

        static $inject = ["inputDropdownConstants"];

        constructor(private inputDropdownConstants: HCTRA.Constant.IInputDropdownConstants) { }

        private setFormValidityInternal = <T>(validationKey: string, directiveScope: HCTRA.Model.IInputDropdownDirectiveScope<T>): void => {
            directiveScope.requiredBindings.form[directiveScope.requiredBindings.name].$setValidity(this.inputDropdownConstants.preSubmitValidationErrorKey,
                this.inputDropdownConstants.preSubmitValidationErrorKey !== validationKey);
            directiveScope.requiredBindings.form[directiveScope.requiredBindings.name].$setValidity(this.inputDropdownConstants.postSubmitValidationErrorKey,
                this.inputDropdownConstants.postSubmitValidationErrorKey !== validationKey);
        }

        private assignPartialMatches = <T>(directiveScope: HCTRA.Model.IInputDropdownDirectiveScope<T>): void => {
            let matches: any[] = directiveScope.requiredBindings.getPartialItemMatches(directiveScope.userInput, directiveScope.requiredBindings.items);
            if (!angular.isArray(matches))
                matches = [];

            directiveScope.filteredItems = matches;
        }

        private preSubmitValidationIsValid = <T>(directiveScope: HCTRA.Model.IInputDropdownDirectiveScope<T>): boolean => {
            this.assignPartialMatches(directiveScope);
            if (directiveScope.filteredItems.length == 0) {
                directiveScope.dropdownVisible = false;
                this.setFormValidityInternal(this.inputDropdownConstants.preSubmitValidationErrorKey, directiveScope);
                return false;
            }

            return true;
        }

        public setFormValidity = <T>(validationKey: string, directiveScope: HCTRA.Model.IInputDropdownDirectiveScope<T>): void => {
            this.setFormValidityInternal(validationKey, directiveScope);
        }

        public runProcessesForInputChangeWithNoValidation = <T>(directiveScope: HCTRA.Model.IInputDropdownDirectiveScope<T>): void => {
            this.setFormValidityInternal(null, directiveScope);
            this.assignPartialMatches(directiveScope);

            if (directiveScope.filteredItems.length == 0)
                directiveScope.dropdownVisible = false;
            else if (directiveScope.filteredItems.length == 1 && directiveScope.requiredBindings.getExactItemMatch(directiveScope.userInput, directiveScope.filteredItems)) {
                directiveScope.requiredBindings.selectedItem = directiveScope.requiredBindings.getExactItemMatch(directiveScope.userInput, directiveScope.filteredItems);
                directiveScope.dropdownVisible = false;
                return;
            }

            directiveScope.requiredBindings.selectedItem = directiveScope.optionalBindings.getItemFromNoList(directiveScope.userInput);
        }

        public runProcessesWhenInputIsEmpty = <T>(directiveScope: HCTRA.Model.IInputDropdownDirectiveScope<T>): void => {
            this.setFormValidityInternal(null, directiveScope);
            directiveScope.requiredBindings.selectedItem = directiveScope.requiredBindings.getDefaultItem(directiveScope.requiredBindings.items);
            directiveScope.filteredItems = angular.copy<T[]>(directiveScope.requiredBindings.items);
            directiveScope.setActive(0);
        }

        public runValidationProcesses = <T>(directiveScope: HCTRA.Model.IInputDropdownDirectiveScope<T>): void => {
            if (!this.preSubmitValidationIsValid(directiveScope))
                return;

            let exactMatch: T = directiveScope.requiredBindings.getExactItemMatch(directiveScope.userInput, directiveScope.filteredItems);
            if (!exactMatch) {
                this.setFormValidityInternal(this.inputDropdownConstants.postSubmitValidationErrorKey, directiveScope);
            } else if (directiveScope.filteredItems.length > 1) {
                this.setFormValidityInternal(this.inputDropdownConstants.postSubmitValidationErrorKey, directiveScope);
            } else {
                directiveScope.requiredBindings.selectedItem = exactMatch;
                this.setFormValidityInternal(null, directiveScope);
                directiveScope.dropdownVisible = false;
            }
        }

        public ensureElementFocus = (elementIndex: number, keyType: HCTRA.Model.IInputDropdownDirectiveKeyType): void => {
            let findElementQuery: ng.IAugmentedJQuery = angular.element(this.inputDropdownConstants.inputDropdownItemIdPrefix + elementIndex);
            let findDropdownQuery: ng.IAugmentedJQuery = angular.element(this.inputDropdownConstants.inputDropdownBoxId);
            if (!findElementQuery || !findDropdownQuery || findElementQuery.length < 1 || findDropdownQuery.length < 1)
                return;

            let element: HTMLElement = findElementQuery[0];
            let elementBound: number = keyType.comparisonSwitch * element.getBoundingClientRect()[keyType.boundaryType];

            let dropdownBound: number = keyType.comparisonSwitch * findDropdownQuery[0].getBoundingClientRect()[keyType.boundaryType];

            if (dropdownBound - elementBound > 0) {
                element.scrollIntoView(keyType.scrollType);
            }
        }


    }
}

(function () {
    "use strict";
    angular.module("HCTRAModule").service("inputDropdownHelper", HCTRA.Service.InputDropdownHelper);
}());