(function () {
    "use strict";
    angular.module("HCTRAModule").filter("momentDate", ["momentService",
        function (momentService) {
            return function (dateInput, outFormat, inFormat) {
                if (!dateInput) { return ""; }

                var outDate = momentService.moment(dateInput, inFormat).format(outFormat);

                return outDate;
            };
        }
    ]);
}());