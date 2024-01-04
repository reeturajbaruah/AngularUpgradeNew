module HCTRA.Constant {
    export enum EmailConfirmationConstants {
        NOT_CONFIRMED = 1,
        JUST_CONFIRMED = 2,
        PREVIOUSLY_CONFIRMED = 3
    }
}

(function () {
    'use strict';

    angular.module('HCTRAModule').constant('emailConfirmationConstants', HCTRA.Constant.EmailConfirmationConstants);
}());