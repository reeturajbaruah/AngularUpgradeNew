(function () {
    'use strict';

    angular.module('HCTRAModule').constant('validationMessages', {
        genericPre: 'Please enter a valid ', // will have content after
        genericPreAlt: 'Please enter your ',
        genericPost: '', // will have content before; paired with genericPre
        confirmPre: 'Does not match ',
        confirmPost: '',
        alphaNumPre: 'Characters must be alphanumeric',
        alphaNumPost: '',
        alphaNumPostAlt: ' or @_.-',
        minLengthPre: 'Must be at least ',
        minLengthPost: ' characters',
        maxLengthPre: 'Must be at most ',
        maxLengthPost: ' characters'
    });
}());