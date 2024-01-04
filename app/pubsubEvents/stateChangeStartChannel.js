//(function () {
//    "use strict";
//
//    angular.module("HCTRAModule").factory("stateChangeStartChannel", ["$rootScope","$transitions",
//		function ($rootScope,$transitions) {
//
//		    //event is published by UI-Router
//
//		    // subscribe to event		    
//		    var onStateChangeStart = function ($scope, handler) {
//		        var destroyStateChangeStart = $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, options) {
//		            handler(event, toState, toParams, fromState, options);
//		        });
//
//		        $rootScope.$on("$destroy", function () {
//		            destroyStateChangeStart();
//		        });
//
//		        return destroyStateChangeStart;
//		    };
//
//		    return {
//		        onStateChangeStart: onStateChangeStart
//		    };
//		}]);
//}());
//
////http://eburley.github.io/2013/01/31/angularjs-watch-pub-sub-best-practices.html