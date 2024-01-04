(function (): void {
    "use strict";

    // describe("directive: readMoreOrLess", () => {

    //     beforeEach(angular.mock.module("HCTRATemplates"));
    //     beforeEach(angular.mock.module("HCTRAModule"));

    //     let scope,
    //         directiveScope;


    //     let READLESS: string = "Read Less";
    //     let READMORE: string = "Read More";
    //     let SHORTDESCRIPTION: string = "short Description";
    //     let LONGDESCRIPTION: string = "long Description";
    //     let TITLE: string = "Title";




    //     beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {
    //         $provide.value("readMoreOrLessService", {
    //             readLess: "Read Less",
    //             readMore: "Read More",
    //             getReadMoreOrLessInitialState: function () {
    //                 return ({
    //                     content: LONGDESCRIPTION,
    //                     expanderText: READLESS,
    //                     displayBreakoutPageLink: false,
    //                     displayReadMoreOrLessLink: true,
    //                     articleUrl: "url"
    //                 });
    //             }
    //         });
    //     }));

    //     beforeEach(angular.mock.inject(($rootScope: angular.IRootScopeService,
    //         $templateCache: angular.ITemplateCacheService,
    //         $compile: angular.ICompileService) => {

    //         scope = $rootScope.$new();

    //         $templateCache.put("/app/directives/cms/readMoreOrLessTemplate.html",
    //             $templateCache.get("app/directives/cms/readMoreOrLessTemplate.html"));
    //         let el: angular.IAugmentedJQuery = angular.element("<read-more-or-less title-name=\"titleName\" " +
    //             "long-content=\"longDescription\" short-content=\"shortDescription\" default-to-more=\"defaultToMore\" " +
    //             "item-path=\"itemPath\" item-id=\"itemID\">" +
    //             "</read-more-or-less>");
    //         $compile(el)(scope);
    //         scope.$digest();
    //         directiveScope = el.isolateScope();
    //     }));


    //     it("should be defined", () => {

    //         expect(directiveScope).toBeDefined();
    //     });

    //     [
    //         "",
    //         undefined,
    //         null
    //     ].forEach((titleName) => {

    //         it(`should set vm to empty object when titleName "${titleName}"`, () => {

    //             scope.titleName = titleName;
    //             scope.defaultToMore = true;
    //             scope.shortDescription = SHORTDESCRIPTION;
    //             scope.longDescription = LONGDESCRIPTION;
    //             scope.itemPath = "something";
    //             scope.itemID = "something";
    //             scope.$digest();

    //             expect(directiveScope.vm).toEqual({});
    //         });
    //     });

    //     it("should be toggled when ExpanderClicked", function () {


    //         scope.titleName = TITLE;
    //         scope.defaultToMore = true;
    //         scope.shortDescription = SHORTDESCRIPTION;
    //         scope.longDescription = LONGDESCRIPTION;
    //         scope.itemPath = "something";
    //         scope.itemID = "something";
    //         scope.$digest();

    //         expect(directiveScope.vm).toEqual({
    //             content: LONGDESCRIPTION,
    //             expanderText: READLESS,
    //             displayBreakoutPageLink: false,
    //             displayReadMoreOrLessLink: true,
    //             articleUrl: "url"
    //         });

    //         directiveScope.expanderClicked();

    //         expect(directiveScope.vm).toEqual({
    //             content: SHORTDESCRIPTION,
    //             expanderText: READMORE,
    //             displayBreakoutPageLink: false,
    //             displayReadMoreOrLessLink: true,
    //             articleUrl: "url"
    //         });

    //         directiveScope.expanderClicked();

    //         expect(directiveScope.vm).toEqual({
    //             content: LONGDESCRIPTION,
    //             expanderText: READLESS,
    //             displayBreakoutPageLink: false,
    //             displayReadMoreOrLessLink: true,
    //             articleUrl: "url"
    //         });
    //     });

    // });

}());