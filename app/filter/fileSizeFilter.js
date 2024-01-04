(function () {
    'use strict';

    angular.module('HCTRAModule').filter('fileSize', [
        function () {
            return function (fileSizeInput) {
                if (!fileSizeInput || !(!isNaN(parseFloat(fileSizeInput)) && isFinite(fileSizeInput))) { return ''; }

                var sizeValue = parseFloat(fileSizeInput);
                var kilobytes = sizeValue / 1024;
                var megabytes = kilobytes / 1024;
                var gigabytes = megabytes / 1024;

                var fileSize;
                if (gigabytes >= 1) {
                    fileSize = Math.floor(gigabytes) + ' GB';
                } else if (megabytes >= 1) {
                    fileSize = Math.floor(megabytes) + ' MB';
                } else if (kilobytes >= 1) {
                    fileSize = Math.floor(kilobytes) + ' KB';
                } else {
                    fileSize = sizeValue + ' B';
                }

                return fileSize;
            };
        }
    ]);
}());