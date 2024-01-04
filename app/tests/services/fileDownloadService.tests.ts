declare var hctraMocks: any;

(function () {
    "use strict";

    describe("fileDownloadService", function () {

        beforeEach(angular.mock.module("HCTRAModule"));
        const header = {
            header: (() => { }) as ng.IHttpHeadersGetter
        };
        let service: HCTRA.Service.FileDownloadService;
        let _window: angular.IWindowService;
        let _state: angular.ui.IStateService;
        let _currentUser: HCTRA.Service.ICurrentUser;
        let _storefrontUtilityService: HCTRA.Storefront.Service.IStorefrontUtilityService;
        let inDoc;

        beforeEach(angular.mock.module(() => {
            
            _state = {
                go: (): angular.IPromise<any> => { return; },
                current: { name: "test" }
            } as any;

            _window = {
                open: () => { return; }
            } as any;

            _currentUser = {
                currentUserIsInSyncAcrossTabs: (): boolean => { return true; }
            } as HCTRA.Service.ICurrentUser;

            _storefrontUtilityService = {
                isRunningAsKiosk: null,
                storefrontLocation: 1,
                machineName: "TestKiosk",
                webStoreData: null
            } as HCTRA.Storefront.Service.IStorefrontUtilityService;

            inDoc = {};


        }));

        beforeEach(angular.mock.module(function ($provide: angular.auto.IProvideService) {
            $provide.value("serverConstants", { currentlyDownloadedWebUiVersion: "WEBUI_VERSION" });
            $provide.value("$state", _state);
            $provide.value("$window", _window);
            $provide.value("CurrentUser", _currentUser);
            $provide.value("StorefrontUtilityService", _storefrontUtilityService);
            $provide.value('$document', hctraMocks.$document(inDoc));
        }));

        beforeEach(angular.mock.inject(function ($injector: angular.auto.IInjectorService) {
            service = $injector.get<HCTRA.Service.FileDownloadService>("fileDownloadService");
        }));

        it('should output correct uri', () => {
            const url = "/api/PDF/TestApi";
            const testObj = {
                test: "test"
            };
            expect(service.getUrl(url, testObj)).toBe("/api/PDF/TestApi?test=test&angularState=test&clientVersion=WEBUI_VERSION");
        });

        it('window.open should be called if currentUserIsInSynceAcrossTabs() returns true', () => {
            _currentUser.currentUserIsInSyncAcrossTabs = () => { return true; };
            spyOn(_window, 'open');
            service.downloadFile("testUrl", { test: "test" });
            expect(_window.open).toHaveBeenCalledWith("testUrl?test=test&angularState=test&clientVersion=WEBUI_VERSION", "_blank");
        });


        it('return correct fileName', () => {
            spyOn(header, "header").and.returnValue("attachment; filename=PaymentPlan_503784.pdf");
            const result = service.getFileNameFromHeader(header.header);
            expect(result).toEqual("PaymentPlan_503784.pdf");
        });

    });
}());