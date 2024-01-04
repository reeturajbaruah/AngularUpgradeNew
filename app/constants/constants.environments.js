(function () {
    'use strict';

    // Have to do this here so the constant can be injected into config.route.js
    var initUrl = window.location.href; // eslint-disable-line angular/window-service

    var urlResult = initUrl.match(/sc_itemid/);
    var isSitecore = !!urlResult && !!urlResult[0];

	angular.module('HCTRAModule').constant('environments', {
	    isSitecore: isSitecore,
        isExperienceEditor: false
	});
}());