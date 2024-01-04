(function () {
    'use strict';

    angular.module('HCTRAModule').constant('sitecoreTemplateMap', {
        homeQuickLinksTemplate: {
			sitecore: '/sitecore/9BD5E5DB-03CF-4B79-8CD3-75C87E675262', //content/HCTRA/Home/HomePage/QuickLinks
            dotNet: '/app/directives/home/homeQuickLinksTemplate.html'
        },
        desktopHome: {
			sitecore: '/sitecore/0F89086A-8B3B-4170-98E8-3578F45800C0', //app/templates/home/desktopHome
            dotNet: '/app/templates/home/desktopHome.html'
        },
        footerCopyright: {
			sitecore: '/sitecore/DC3D277D-C715-4459-8524-100382DAA52E', //content/HCTRA/Common/AnyPage/FooterSection/HCTRACopyright
            dotNet: '/app/templates/menu/footerCopyright.html'
        },
        homeCarouselTemplate: {
			sitecore: '/sitecore/F2AEBDC0-F015-4D90-9FF3-6C152B8DFB72', //app/directives/home/homeCarouselTemplate
            dotNet: '/app/directives/home/homeCarouselTemplate.html'
        },
        homeModuleTemplate: {
			sitecore: '/sitecore/77AE0153-7E1E-4153-A71A-A9BB5448A3B6', //content/HCTRA/Home/HomePage/ModulesSection
            dotNet: '/app/directives/home/homeModuleTemplate.html'
        },
        footerLinkList: {
			sitecore: '/sitecore/228426D3-4884-469F-BFC9-E1D2D9F08479', //content/HCTRA/Common/AnyPage/FooterSection/FooterNavigationMenu
            dotNet: '/app/templates/menu/footerLinkList.html'
        }
    });
}());