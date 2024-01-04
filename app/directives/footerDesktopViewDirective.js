// (function () {
//     'use strict';

//     angular.module('HCTRAModule').directive("footerDesktopView", ['toggleFullWebsiteService', 'desktopAutoRedirect',
//         function (toggleFullWebsiteService, desktopAutoRedirect) {
//             return {
//                 restrict: 'E',
//                 templateUrl: "/app/directives/footerDesktopViewTemplate.html",
//                 link: function (scope) {

//                     scope.forceDesktopView = desktopAutoRedirect.isForcedDesktopView();

//                     scope.onMobileClick = toggleFullWebsiteService.onMobileClick;
//                     scope.onDesktopClick = toggleFullWebsiteService.onDesktopClick;
//                 }
//             };
//         }
//     ]);
// }());