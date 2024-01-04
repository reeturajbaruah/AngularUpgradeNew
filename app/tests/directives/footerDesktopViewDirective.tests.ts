// (function (): void {
//     "use strict";

//     describe("directive: footer-desktop-view", () => {

//         beforeEach(angular.mock.module("HCTRATemplates"));
//         beforeEach(angular.mock.module("HCTRAModule"));

//         let scope,
//             directiveHtml,
//             onMobileClickCalled,
//             onDesktopClickCalled,
//             forceDesktopView,
//             recompileDirective;


//         beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {
//             $provide.value("toggleFullWebsiteService", {
//                 onMobileClick: () => { onMobileClickCalled = true },
//                 onDesktopClick: () => { onDesktopClickCalled = true }
//             });
//             $provide.value("desktopAutoRedirect", {
//                 isForcedDesktopView: () => forceDesktopView
//             });
//         }));

//         beforeEach(angular.mock.inject(($rootScope: angular.IRootScopeService,
//             $templateCache: angular.ITemplateCacheService,
//             $compile: angular.ICompileService) => {

//             scope = $rootScope.$new();
//             onMobileClickCalled = false;
//             onDesktopClickCalled = false;

//             $templateCache.put("/app/directives/footerDesktopViewTemplate.html",
//                 $templateCache.get("app/directives/footerDesktopViewTemplate.html"));

//             recompileDirective = () => {
//                 directiveHtml = angular.element("<footer-desktop-view></footer-desktop-view>");
//                 $compile(directiveHtml)(scope);
//                 scope.$digest();
//             };

//             recompileDirective();           
//         }));


//         it("canary", () => {
//             expect(true).toBe(true);
//         });

//         it("should call onMobileClick of toggleFullWebsiteService when mobileOnly button is clicked", () => {

//             expect(onMobileClickCalled).toBeFalsy();

//             directiveHtml.find(".mobileOnly")[0].click();
            
//             expect(onMobileClickCalled).toBeTruthy();
//         });

//         it("should call onDesktopClick of toggleFullWebsiteService when desktopOnly button is clicked", () => {

//             expect(onDesktopClickCalled).toBeFalsy();
            
//             directiveHtml.find(".desktopOnly")[0].click();
                        
//             expect(onDesktopClickCalled).toBeTruthy();
//         });        

//         it("should show desktopOnly when desktop View forced", () => {

//             forceDesktopView = true;

//             recompileDirective();

//             expect(directiveHtml.find(".desktopOnly.ng-hide").length).toBe(0);
//         });

//         it("should hide desktopOnly when desktop View not forced", () => {

//             forceDesktopView = false;

//             recompileDirective();

//             expect(directiveHtml.find(".desktopOnly.ng-hide").length).toBe(1);
//         });
//     });
// }());