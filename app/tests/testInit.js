(function () {
    'use strict';

    angular
        .module('HCTRAModule', [
            'ngFileUpload', 'ngRoute', 'ngAnimate',
            'infinite-scroll', 'ngMessages', 'ui.bootstrap', 'ngAria',
            'ngSanitize' 
        ])
        .factory('sniffrjs', ['thirdPartyDowngrades', thirdPartyDowngrades => thirdPartyDowngrades.Sniffr])
        .factory('bowserjs', ['thirdPartyDowngrades', thirdPartyDowngrades => thirdPartyDowngrades.Bowser])
        .factory('momentjs', ['thirdPartyDowngrades', thirdPartyDowngrades => thirdPartyDowngrades.Moment])
        .factory('vimeoPlayer', ['thirdPartyDowngrades', thirdPartyDowngrades => thirdPartyDowngrades.Vimeo]);

})();