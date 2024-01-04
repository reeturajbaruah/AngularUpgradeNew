(function () {
    "use strict";
    angular.module("HCTRAModule").
        filter("telephoneWithExt", ["$filter", function ($filter) {
            return function (numberWithExt: string) {

                if (!numberWithExt) { return ""; }

                let captureArr = /(.*)(\sext.*)/g.exec(numberWithExt);

                let numberWithoutExt,
                    extension;

                if (angular.isDefined(captureArr) && captureArr !== null) {
                    numberWithoutExt = captureArr[1];
                    extension = captureArr[2];
                } else {
                    numberWithoutExt = numberWithExt;
                    extension = "";
                }

                let maskedNumber = $filter("telephone")(numberWithoutExt);

                return maskedNumber + extension;
            }
        }]);
} ());