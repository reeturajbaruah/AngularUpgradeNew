module HCTRA.Constant {
    "use strict";

    export interface IInputDropdownConstants {
        inputDropdownItemIdPrefix: string;
        inputDropdownBoxId: string;
        preSubmitValidationErrorKey: string;
        postSubmitValidationErrorKey: string;
    }

    export class InputDropdownConstants {
        static get Default(): IInputDropdownConstants {
            return {
                inputDropdownItemIdPrefix: "#inputDropdownItem",
                inputDropdownBoxId: "#inputDropdownBox",
                preSubmitValidationErrorKey: "inputError",
                postSubmitValidationErrorKey: "submissionError"
            }
        }
    }
}

(function () {
    "use strict";
    angular.module("HCTRAModule").constant("inputDropdownConstants", HCTRA.Constant.InputDropdownConstants.Default);
}());