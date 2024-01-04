module HCTRA.Constant {
    "use strict";

    export interface IEntryDropdownConstants {
        entryDropdownItemIdPrefix: string;
        entryDropdownBoxId: string;
        preSubmitValidationErrorKey: string;
        postSubmitValidationErrorKey: string;
    }

    export class EntryDropdownConstants {
        static get Default(): IEntryDropdownConstants {
            return {
                entryDropdownItemIdPrefix: "#entryDropdownItem",
                entryDropdownBoxId: "#inputDropdownBox",
                preSubmitValidationErrorKey: "inputError",
                postSubmitValidationErrorKey: "submissionError"
            }
        }
    }
}

(function () {
    "use strict";
    angular.module("HCTRAModule").constant("entryDropdownConstants", HCTRA.Constant.EntryDropdownConstants.Default);
}());