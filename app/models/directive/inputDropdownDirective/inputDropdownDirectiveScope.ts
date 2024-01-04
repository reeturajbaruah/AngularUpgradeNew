module HCTRA.Model {

    export interface IInputDropdownDirectiveKeyType {
        boundaryType: string;
        comparisonSwitch: number;
        scrollType: boolean;
    }

    export interface IInputDropdownDirectiveRequiredBindings<T> {
        items: T[];
        name: string;
        selectedItem: T;
        form: angular.IFormController;
        id: string;
        getDefaultItem: (fullList: T[]) => T;
        getItemDisplayName: (item: T) => string;
        getPartialItemMatches: (userInput: string, fullList: T[]) => T[];
        getExactItemMatch: (userInput: string, currentFilteredList: T[]) => T;
    }

    export interface IInputDropdownDirectiveOptionalBindings<T> {
        placeholder: string;
        tabIndex: number;
        title: string;
        shouldValidate: boolean;
        getItemFromNoList: (userInput: string) => T;
    }

    export interface IInputDropdownDirectiveScope<T> extends angular.IScope {
        requiredBindings: IInputDropdownDirectiveRequiredBindings<T>;
        optionalBindings: IInputDropdownDirectiveOptionalBindings<T>;

        validationService: HCTRA.Service.IValidationService;
        filteredItems: T[];
        placeholder: string;
        tabIndex: number;
        title: string;
        keyActions: HCTRA.Model.IUpDownEnterInterceptorActions;
        inputDropdownItemIdPrefix: string;
        inputDropdownBoxId: string;
        userInput: string;
        dropdownVisible: boolean;
        activeItemIndex: number;
        isFocused: boolean;

        inputChange: () => void;
        inputDropdownClass: () => string;
        setActive: (index: number) => void;
        setWidth: () => { width : string};
        selectedItemClass: (index: number) => { active: boolean };
        selectItem: (item: any) => void;
        inputFocus: () => void;
        inputBlur: () => void;
        showValidation: () => boolean;
    }
}