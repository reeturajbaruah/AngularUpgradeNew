/* eslint-disable no-useless-escape */
(function () {

    'use strict';

    angular.module('HCTRAModule').factory('removeDoubleCharService',
        function () {
            return {
                removeDoubleChar: function (val) {
                    //once a field reaches past its max length, no val sent
                    if (!val) {
                        return;
                    }
                    val = val.toString();

                    val = val.replace(/@@/g, '@');
                    val = val.replace(/\s+/g, ' ');
                    val = val.replace(/\.+/g, '.');
                    val = val.replace(/\-+/g, '-');
                    val = val.replace(/\_+/g, '_');
                    val = val.replace(/[\<\>\'\"]/g, '');

                    return val;
                }
            };
        });
}());