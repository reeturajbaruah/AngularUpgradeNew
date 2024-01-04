describe("paymentPlanDataService", () => {
    beforeEach(angular.mock.module('HCTRAModule'));

    let filter;
    const $ace = {
        trustAsHtml: () => { return ''; },
        trustAsResourceUrl: () => { return ''; }
    };

    beforeEach(angular.mock.module(($provide) => {
        $provide.value('$sce', $ace);
    }));

    beforeEach(angular.mock.inject(($injector) => {
        filter = $injector.get("$filter");
    }));

    it('should trust html if type string', () => {
        spyOn($ace, "trustAsHtml").and.returnValue("value");
        spyOn($ace, "trustAsResourceUrl").and.returnValue("value");
        expect(filter("trusted")("value")).toEqual("value")
        expect($ace.trustAsHtml).toHaveBeenCalledTimes(1);
        expect($ace.trustAsResourceUrl).toHaveBeenCalledTimes(0);
    });

    it('should NOT trust html if type is NOT string', () => {
        spyOn($ace, "trustAsHtml").and.returnValue("value");
        spyOn($ace, "trustAsResourceUrl").and.returnValue("value");
        filter("trusted")(5000);
        expect($ace.trustAsHtml).toHaveBeenCalledTimes(0);
        expect($ace.trustAsResourceUrl).toHaveBeenCalledTimes(0);
    });

    it('should trust html if type is string, and call https function if it starts with https', () => {
        spyOn($ace, "trustAsHtml").and.returnValue("value");
        spyOn($ace, "trustAsResourceUrl").and.returnValue("value");
        filter("trusted")("https://somewebsite.com");
        expect($ace.trustAsHtml).toHaveBeenCalledTimes(0);
        expect($ace.trustAsResourceUrl).toHaveBeenCalledTimes(1);
    });
});