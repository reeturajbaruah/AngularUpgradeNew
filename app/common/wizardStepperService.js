(function () {

    'use strict';

    angular.module('HCTRAModule').factory('wizardStepperService',
        function () {
            return function () {
                return {
                    checkStep: function (inStep) {
                        //if (currentStep.value === inStep) {
                        if (this.currentStep == inStep) {
                            return "stepOn";
                        } else {
                            return "step";
                        }
                    },
                    currentStep: 0
                };
            };
        });
}());