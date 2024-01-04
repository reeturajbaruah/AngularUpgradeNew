declare var hctraMocks: any;

(() => {
    "use strict";

    // describe("ReadMoreOrLessService", () => {


    //     let service: HCTRA.Service.ReadMoreOrLessService;
    //     const mockState = hctraMocks.$state("myName");
    //     const mockLinkLookupService = hctraMocks.linkLookupService({ id: "byId", url: "byCmsPath" });
    //     const mockStateNames = hctraMocks.stateNames();


    //     beforeEach(angular.mock.module("HCTRAModule"));



    //     beforeEach(angular.mock.module(function ($provide) {

    //         $provide.value('$state', mockState);
    //         $provide.value('linkLookupService', mockLinkLookupService);
    //         $provide.value('stateNames', mockStateNames);
    //     }));

    //     describe("defaultToLess", () => {

    //         beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

    //             service = $injector.get<HCTRA.Service.ReadMoreOrLessService>("readMoreOrLessService");
    //         }));

    //         it("canary", () => {
    //             expect(true).toBe(true);
    //         });

    //         it("should return true when titleName is 'Transtar Map'", () => {

    //             expect(service.defaultToLess('Transtar Map')).toBe(true);
    //         });

    //         [
    //             'Something',
    //             'Something Else',
    //             'Not Transtar map',
    //             undefined,
    //             null,
    //             ""
    //         ].forEach((titleName) => {

    //             it("should return false when titleName not 'Transtar Map'", () => {

    //                 expect(service.defaultToLess(titleName)).toBe(false);
    //             });
    //         });
    //     });

    //     describe("breakoutPageNeeded", () => {

    //         beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

    //             service = $injector.get<HCTRA.Service.ReadMoreOrLessService>("readMoreOrLessService");
    //         }));

    //         it("canary", () => {
    //             expect(true).toBe(true);
    //         });

    //         [
    //             mockStateNames.closures,
    //             mockStateNames.newsFeed,
    //             mockStateNames.closuresArchiveChild,
    //             mockStateNames.newsArchiveChild

    //         ].forEach((stateName) => {

    //             it("should return true when state.current.name in closure or newsFeed or closuresArchiveChild or closuresArchiveChild", () => {

    //                 mockState.current.name = stateName;
    //                 expect(service.breakoutPageNeeded()).toBe(true);
    //             });
    //         });

    //         Object.keys(mockStateNames)
    //             .filter((key) => ['closures', 'newsFeed', 'closuresArchiveChild', 'newsArchiveChild'].indexOf(key) < 0)
    //             .map((key) => mockStateNames[key])
    //             .forEach((stateName) => {

    //                 it("should return false when state.current.name neither closure nor newsFeed nor closuresArchiveChild nor closuresArchiveChild", () => {

    //                     mockState.current.name = stateName;
    //                     expect(service.breakoutPageNeeded()).toBe(false);
    //                 });
    //             });
    //     });

    //     describe("displayBreakoutPageLink", () => {

    //         beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

    //             service = $injector.get<HCTRA.Service.ReadMoreOrLessService>("readMoreOrLessService");
    //         }));

    //         it("canary", () => {
    //             expect(true).toBe(true);
    //         });

    //         [
    //             ["A", false, true],
    //             ["B", false, true],
    //             ["C", false, true]

    //         ].forEach((input) => {

    //             const longContent = input[0] as string;
    //             const isDefaultToLess = input[1] as boolean;
    //             const needsBreakoutPage = input[2] as boolean;

    //             it(`should return true when longContent non-empty string, defaultToLess false and needsBreakoutPage true`, function () {

    //                 expect(service.displayBreakoutPageLink(longContent, isDefaultToLess, needsBreakoutPage)).toBe(true);
    //             });
    //         });

    //         [
    //             [undefined, true, false],
    //             [null, true, true],
    //             ["", false, false],
    //             [undefined, false, true],
    //             ["E", true, false],
    //             ["C", true, true],
    //             ["D", false, false]

    //         ].forEach((input) => {

    //             const longContent = input[0] as string;
    //             const isDefaultToLess = input[1] as boolean;
    //             const needsBreakoutPage = input[2] as boolean;

    //             it(`should return false when longContent empty string\\null\\undefined or defaultToLess false or needsBreakoutPage false`, function () {

    //                 expect(service.displayBreakoutPageLink(longContent, isDefaultToLess, needsBreakoutPage)).toBe(false);
    //             });
    //         });
    //     });

    //     describe("isLongContent", () => {

    //         beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

    //             service = $injector.get<HCTRA.Service.ReadMoreOrLessService>("readMoreOrLessService");
    //         }));

    //         it("canary", () => {
    //             expect(true).toBe(true);
    //         });

    //         [
    //             ["A", false, true],
    //             ["B", false, true],
    //             ["C", false, true]

    //         ].forEach((input) => {

    //             const longContent = input[0] as string;
    //             const defaultToLess = input[1] as boolean;
    //             const defaultToMore = input[2] as boolean;

    //             it(`should return true when longContent non-empty string, defaultToLess false and defaultToMore true`, function () {

    //                 expect(service.isLongContent(longContent, defaultToLess, defaultToMore)).toBe(true);
    //             });
    //         });

    //         [
    //             [undefined, true, false],
    //             [null, true, true],
    //             ["", false, false],
    //             [undefined, false, true],
    //             ["E", true, false],
    //             ["C", true, true],
    //             ["D", false, false]

    //         ].forEach((input) => {

    //             const longContent = input[0] as string;
    //             const defaultToLess = input[1] as boolean;
    //             const defaultToMore = input[2] as boolean;

    //             it(`should return false when longContent empty string\\null\\undefined or defaultToLess false or defaultToMore false`, function () {

    //                 expect(service.isLongContent(longContent, defaultToLess, defaultToMore)).toBe(false);
    //             });
    //         });
    //     });

    //     describe("getContent", () => {

    //         let isLongContentSpy;

    //         beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

    //             service = $injector.get<HCTRA.Service.ReadMoreOrLessService>("readMoreOrLessService");

    //             isLongContentSpy = spyOn(service as any, "isLongContent");
    //         }));

    //         it("canary", () => {

    //             expect(true).toBe(true);
    //         });

    //         [
    //             ["", ""],
    //             [null, null],
    //             [undefined, undefined],
    //             [undefined, null],
    //             [null, undefined],
    //             ["", undefined]

    //         ].forEach((input) => {

    //             const shortContent = input[0] as string;
    //             const longContent = input[1] as string;

    //             it(`should return empty string when shortContent "${shortContent}" and longContent "${longContent}"`, function () {

    //                 expect(service.getContent(shortContent, longContent, false, true)).toEqual("");
    //                 expect(isLongContentSpy).not.toHaveBeenCalled();
    //             });
    //         });

    //         [
    //             "",
    //             null,
    //             undefined

    //         ].forEach((shortContent) => {

    //             it(`should return longContent when shortContent "${shortContent}"`, function () {

    //                 expect(service.getContent(shortContent, "longContent", true, false)).toEqual("longContent");
    //                 expect(isLongContentSpy).not.toHaveBeenCalled();
    //             });
    //         });

    //         it(`should return longContent when shortContent non-empty string and isLongContent returns true`, function () {

    //             isLongContentSpy.and.returnValue(true);

    //             expect(service.getContent("shortContent", "longContent", true, false)).toEqual("longContent");
    //             expect(isLongContentSpy).toHaveBeenCalledWith("longContent", true, false);
    //         });

    //         it(`should return shortContent when shortContent non-empty string and isLongContent returns false`, function () {

    //             isLongContentSpy.and.returnValue(false);

    //             expect(service.getContent("shortContent", "longContent", true, false)).toEqual("shortContent");
    //             expect(isLongContentSpy).toHaveBeenCalledWith("longContent", true, false);
    //         });
    //     });

    //     describe("getExpanderText", () => {

    //         let isLongContentSpy;

    //         beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

    //             service = $injector.get<HCTRA.Service.ReadMoreOrLessService>("readMoreOrLessService");

    //             isLongContentSpy = spyOn(service as any, "isLongContent");
    //         }));

    //         it("canary", () => {
    //             expect(true).toBe(true);
    //         });

    //         [
    //             "",
    //             undefined,
    //             null

    //         ].forEach((shortContent) => {

    //             it(`should return "Read More" when shortContent "${shortContent}"`, function () {

    //                 expect(service.getExpanderText(shortContent, "longContent", false, true)).toEqual("Read More");
    //                 expect(isLongContentSpy).not.toHaveBeenCalled();
    //             });
    //         });

    //         it(`should return "Read More" when shortContent non-empty string and isLongContent returns false`, function () {

    //             isLongContentSpy.and.returnValue(false);

    //             expect(service.getExpanderText("shortContent", "longContent", true, false)).toEqual("Read More");
    //             expect(isLongContentSpy).toHaveBeenCalledWith("longContent", true, false);
    //         });

    //         it(`should return "Read Less" when shortContent non-empty string and isLongContent returns true`, function () {

    //             isLongContentSpy.and.returnValue(true);

    //             expect(service.getExpanderText("shortContent", "longContent", true, false)).toEqual("Read Less");
    //             expect(isLongContentSpy).toHaveBeenCalledWith("longContent", true, false);
    //         });
    //     });

    //     describe("displayReadMoreOrLessLink", () => {

    //         beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

    //             service = $injector.get<HCTRA.Service.ReadMoreOrLessService>("readMoreOrLessService");
    //         }));

    //         it("canary", () => {
    //             expect(true).toBe(true);
    //         });

    //         [
    //             ["A", "B", false, false],
    //             ["B", "C", false, false]

    //         ].forEach((input) => {
    //             const shortContent = input[0] as string;
    //             const longContent = input[1] as string;
    //             const isDefaultToLess = input[2] as boolean;
    //             const displayBreakOutPage = input[3] as boolean;

    //             it(`should return true when shortContent and longContent non-empty strings and not same, defaultToLess false and displayBreakOutPageLink false`, function () {

    //                 expect(service.displayReadMoreOrLessLink(shortContent, longContent, isDefaultToLess, displayBreakOutPage)).toBe(true);
    //             });
    //         });

    //         [
    //             ["", "", true, true],
    //             [undefined, undefined, true, false],
    //             [null, null, false, true],
    //             ["", "", false, false],
    //             ["", "B", true, true],
    //             ["", "C", true, false],
    //             ["", "B", false, true],
    //             ["", "C", false, false],
    //             ["A", "", true, true],
    //             ["A", undefined, true, false],
    //             ["A", null, false, true],
    //             ["A", "", false, false],
    //             ["B", "B", true, true],
    //             ["C", "C", true, false],
    //             ["B", "B", false, true],
    //             ["C", "C", false, false]

    //         ].forEach((input) => {

    //             const shortContent = input[0] as string;
    //             const longContent = input[1] as string;
    //             const isDefaultToLess = input[2] as boolean;
    //             const displayBreakOutPage = input[3] as boolean;

    //             it(`should return false when shortContent or longContent null\\undefined\\empty strings or same or defaultToLess true or displayBreakOutPageLink true`, function () {

    //                 expect(service.displayReadMoreOrLessLink(shortContent, longContent, isDefaultToLess, displayBreakOutPage)).toBe(false);
    //             });
    //         });
    //     });

    //     describe("getArticleUrl", () => {

    //         beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

    //             service = $injector.get<HCTRA.Service.ReadMoreOrLessService>("readMoreOrLessService");
    //         }));

    //         it("canary", () => {
    //             expect(true).toBe(true);
    //         });

    //         [
    //             mockStateNames.closuresArchiveChild,
    //             mockStateNames.newsArchiveChild

    //         ].forEach((stateName) => {

    //             it("should call and return value of linkLookupService.articleLookupById when state.current.name closuresArchiveChild or closuresArchiveChild", () => {

    //                 const linkLookUpServiceSpy = spyOn(mockLinkLookupService, 'articleLookupById').and.callThrough();

    //                 mockState.current.name = stateName;
    //                 expect(service.getArticleUrl('id', 'path')).toBe('byId');
    //                 expect(linkLookUpServiceSpy).toHaveBeenCalledWith('id');
    //             });
    //         });

    //         Object.keys(mockStateNames)
    //             .filter((key) => ['closuresArchiveChild', 'newsArchiveChild'].indexOf(key) < 0)
    //             .map((key) => mockStateNames[key])
    //             .forEach((stateName) => {

    //                 it("should call and retrun value of linkLookupService.articleLookup when state.current.name neither closuresArchiveChild nor closuresArchiveChild", () => {


    //                     const linkLookUpServiceSpy = spyOn(mockLinkLookupService, 'articleLookup').and.callThrough();

    //                     mockState.current.name = stateName;
    //                     expect(service.getArticleUrl('id', 'path')).toBe('byCmsPath');
    //                     expect(linkLookUpServiceSpy).toHaveBeenCalledWith('path');
    //                 });
    //             });
    //     });

    //     describe("getReadMoreOrLessInitialState", () => {

    //         let defaultToLessSpy;
    //         let needsBreakoutPageSpy;
    //         let displayBreakOutPageLinkSpy;
    //         let getContentSpy;
    //         let getExpanderTextSpy;
    //         let displayReadMoreOrLessLinkSpy;
    //         let getArticleUrlSpy;

    //         beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

    //             service = $injector.get<HCTRA.Service.ReadMoreOrLessService>("readMoreOrLessService");

    //             defaultToLessSpy = spyOn(service as any, "defaultToLess").and.returnValue("defaultToLess");
    //             needsBreakoutPageSpy = spyOn(service as any, "breakoutPageNeeded").and.returnValue("breakoutPageNeeded");
    //             displayBreakOutPageLinkSpy = spyOn(service as any, "displayBreakoutPageLink").and.returnValue(true);
    //             getContentSpy = spyOn(service as any, "getContent").and.returnValue("getContent");
    //             getExpanderTextSpy = spyOn(service as any, "getExpanderText").and.returnValue("getExpanderText");
    //             displayReadMoreOrLessLinkSpy = spyOn(service as any, "displayReadMoreOrLessLink").and.returnValue(true);
    //             getArticleUrlSpy = spyOn(service as any, "getArticleUrl").and.returnValue("getArticleUrl");
    //         }));

    //         it("canary", () => {
    //             expect(true).toBe(true);
    //         });

    //         it("should call functions with correct arguments and return readMoreOrLessInitialState", () => {

    //             expect(service.getReadMoreOrLessInitialState("shortContent", "longContent", true, "titleName", "itemId", "itemPath")).toEqual({
    //                 content: "getContent",
    //                 expanderText: "getExpanderText",
    //                 displayBreakoutPageLink: true,
    //                 displayReadMoreOrLessLink: true,
    //                 articleUrl: "getArticleUrl"
    //             });

    //             expect(defaultToLessSpy).toHaveBeenCalledWith("titleName");
    //             expect(needsBreakoutPageSpy).toHaveBeenCalledWith();
    //             expect(displayBreakOutPageLinkSpy).toHaveBeenCalledWith("longContent", "defaultToLess", "breakoutPageNeeded");
    //             expect(getContentSpy).toHaveBeenCalledWith("shortContent", "longContent", "defaultToLess", true);
    //             expect(getExpanderTextSpy).toHaveBeenCalledWith("shortContent", "longContent", "defaultToLess", true);
    //             expect(displayReadMoreOrLessLinkSpy).toHaveBeenCalledWith("shortContent", "longContent", "defaultToLess", true);
    //             expect(getArticleUrlSpy).toHaveBeenCalledWith("itemId", "itemPath");
    //         });
    //     });

    // });
})();