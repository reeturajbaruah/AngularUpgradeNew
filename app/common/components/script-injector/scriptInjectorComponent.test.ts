 describe("ScriptInjectorComponent tests", () => {

     let $window;
     let scriptTagSpy: HTMLScriptElement;
     let environmentConfig: HCTRA.Constant.IEnvironmentConfig;
     let loggingService: HCTRA.Service.ILoggingService;
     let serverConstants: HCTRA.Constant.ServerConstants;
     let component: HCTRA.Controller.ScriptInjectorController;

     beforeEach(angular.mock.module("HCTRAModule"));

     beforeEach(angular.mock.inject(() => {
         $window = {
             document: jasmine.createSpyObj("document", ["createElement", "getElementsByTagName", "querySelector", "readyState"]),
             setTimeout: (func, num) => { setTimeout(func, num) },
             addEventListener: () => { }
         };

         scriptTagSpy = jasmine.createSpyObj("scriptTagSpy", ["setAttribute", "addEventListener", "appendChild"]);
         loggingService = jasmine.createSpyObj("loggingService", ["logMessage"]);

         ($window.document.createElement as jasmine.Spy).and.returnValue(scriptTagSpy);
         ($window.document.getElementsByTagName as jasmine.Spy).and.returnValue([scriptTagSpy]);

         environmentConfig = {
             scriptIntegrityConfig: {},
             mcAfeeIconQuerySelector: 'fake selector'
         } as HCTRA.Constant.IEnvironmentConfig;
         serverConstants = { currentlyDownloadedWebUiVersion: "1.2.3" } as HCTRA.Constant.ServerConstants;

         component = new HCTRA.Controller.ScriptInjectorController(
             $window,
             environmentConfig,
             loggingService,
             serverConstants
         );

         component.$onInit();
     }));


     it("can create a component", () => {
         expect(component).toBeDefined();
     });

     describe("bindings based logic", () => {
         it("does not try to create script tags if disabled", () => {
             component["enable"] = false;

             component.$postLink();

             expect($window.document.createElement).not.toHaveBeenCalled();
         });

         it("tries to create script tags if enabled", () => {
             component["enable"] = true;
             spyOn(component as any, "isValidIntegrityValue").and.returnValue(true);

             component.$postLink();

             expect($window.document.createElement).toHaveBeenCalled();
         });

     });


     describe("$postLink", () => {

         it("should call addScriptElementToDOM() ", () => {
             component["enable"] = true;
             component["srcAttempt"] = "https://cdn.test.org";
             component["srcFallback"] = "/Client_build/mcAfeeFallbackScript.js";
             spyOn(component as any, "addScriptElementToDOM");
             spyOn(component as any, "isValidIntegrityValue").and.returnValue(true);

             component.$postLink();

             expect(component["addScriptElementToDOM"]).toHaveBeenCalledTimes(1);
         });

         it("should not call addScriptElementToDOM() ", () => {
             component["enable"] = true;
             component["srcAttempt"] = "https://cdn.test.org";
             component["srcFallback"] = "/Client_build/mcAfeeFallbackScript.js";
             spyOn(component as any, "addScriptElementToDOM");
             spyOn(component as any, "isValidIntegrityValue").and.returnValue(false);

             component.$postLink();

             expect(component["addScriptElementToDOM"]).toHaveBeenCalledTimes(0);
         });
     });

 

     describe("addScriptElementToDOM()", () => {
         it("should set all attributes of the script tag", () => {
             spyOn(component as any, "addScriptElementToDOM").and.callThrough();
             component["addScriptElementToDOM"]({ myAttr: 'hello' });

             expect($window.document.createElement).toHaveBeenCalledWith("script");
             expect($window.document.createElement).toHaveBeenCalledTimes(1);
             expect(scriptTagSpy.setAttribute).toHaveBeenCalledTimes(1);

         });

         it("should call getElementsByTagName() and appendChild()", () => {
             spyOn(component as any, "addScriptElementToDOM").and.callThrough();
             component["addScriptElementToDOM"]({ myAttr: 'hello' });

             expect($window.document.getElementsByTagName).toHaveBeenCalledWith("head");
             expect($window.document.getElementsByTagName).toHaveBeenCalledTimes(1);

             const myElement = $window.document.getElementsByTagName("scriptTagHere")[0];
             expect(myElement.appendChild).toHaveBeenCalledTimes(1);
         });

         it("should prove checkElementPresence() is added to new script tag load event", () => {
             //Assemble
             spyOn(component as any, "addScriptElementToDOM").and.callThrough();
             spyOn(component as any, "checkElementPresence");
             (scriptTagSpy.addEventListener as jasmine.Spy).and.callThrough();

             //Act
             component["addScriptElementToDOM"]({ myAttr: 'hello' });
             const myElement = $window.document.getElementsByTagName("scriptTagHere")[0] as HTMLElement;

             //Assert
             expect((myElement.addEventListener as jasmine.Spy).calls.argsFor(0)).toEqual(["load", jasmine.any(Function), false]);
         });
     });


     describe("isValidIntegrityValue()", () => {
         [
             { shaKey: "sha256-test" },
             { shaKey: "sha384-test" },
             { shaKey: "sha512-test" }
         ].forEach(({ shaKey }: { shaKey: string }) => {

             it(`should return true when shaKey is ${shaKey}`, () => {
                 const result = component["isValidIntegrityValue"](`${shaKey}`);
                 expect(result).toBe(true);
             });
         });

         [
             { shaKey: "sha999-test" },
             { shaKey: "test-test" },
             { shaKey: "" },
             { shaKey: " " },
             { shaKey: undefined },
             { shaKey: null },
             { shaKey: null }
         ].forEach(({ shaKey }: { shaKey: string }) => {
             it(`should return false when shaKey is ${shaKey}`, () => {
                 const result = component["isValidIntegrityValue"](`${shaKey}`);
                 expect(result).toBe(false);
             });
         });
     });


     describe("onError()", () => {

         it("should call log()", () => {
             const myElement: HTMLScriptElement = {
                 src: "mysrc",
                 parentNode: {
                     removeChild: jasmine.createSpy('removeChild')
                 },
                 hasAttribute: jasmine.createSpy('hasAttribute')
             } as any;

             (myElement.parentNode.removeChild as any).and.callThrough();
             (myElement.hasAttribute as any).and.returnValue(false);
             spyOn(component as any, "logSrcThatFailedToLoad").and.callThrough();

             component["onError"](myElement);

             expect(component["logSrcThatFailedToLoad"]).toHaveBeenCalledTimes(1);
         });

         it("should call parentNode.removeChild()", () => {
             const myElement: HTMLScriptElement = {
                 src: "mysrc",
                 parentNode: {
                     removeChild: jasmine.createSpy('removeChild')
                 },
                 hasAttribute: jasmine.createSpy('hasAttribute')
             } as any;

             (myElement.parentNode.removeChild as any).and.callThrough();
             (myElement.hasAttribute as any).and.returnValue(false);

             component["onError"](myElement);

             expect(myElement.parentNode.removeChild).toHaveBeenCalledTimes(1);
         });

         it('should call addScriptElementToDOM() when element has attribute "srcFallback"', () => {
             const myElement: HTMLScriptElement = {
                 src: "mysrc",
                 parentNode: {
                     removeChild: jasmine.createSpy('removeChild')
                 },
                 hasAttribute: jasmine.createSpy('hasAttribute')
             } as any;

             component["scriptIntegrityObj"] = {
                 ShaKey: "fakeShaKey",
                 CrossoriginAttribute: "fakeCrossoriginAttribute",
                 SrcFallback: "hurdeedur.js"
             };
             spyOn(component as any, "addScriptElementToDOM").and.callThrough();
             (myElement.parentNode.removeChild as any).and.callThrough();
             (myElement.hasAttribute as any).and.returnValue(true);

             component["onError"](myElement);

             expect(component["addScriptElementToDOM"]).toHaveBeenCalledTimes(1);
             expect(component["addScriptElementToDOM"]).toHaveBeenCalledWith({ type: "text/javascript", src: "hurdeedur.js?123" });
         });

         it('should not call addScriptElementToDOM() when element does not have attribute "srcFallback"', () => {
             const myElement: HTMLScriptElement = {
                 src: "mysrc",
                 parentNode: {
                     removeChild: jasmine.createSpy('removeChild')
                 },
                 hasAttribute: jasmine.createSpy('hasAttribute')
             } as any;

             spyOn(component as any, "addScriptElementToDOM").and.callThrough();
             (myElement.parentNode.removeChild as any).and.callThrough();
             (myElement.hasAttribute as any).and.returnValue(false);

             component["onError"](myElement);

             expect(component["addScriptElementToDOM"]).toHaveBeenCalledTimes(0);
         });

     });

     describe("checkElementPresence()", () => {
         var originalTimeout;

         beforeEach(() => {
             originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
             jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
         });

         afterEach(() => {
             jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
         });

         it("should not call loggingService.logMessage()", async () => {
             spyOn($window, "setTimeout").and.callThrough();
             ($window.document.querySelector as jasmine.Spy).and.returnValue('element exists' as any);

             await component["checkElementPresence"]('fakeElementId');

             expect(loggingService.logMessage).toHaveBeenCalledTimes(0);
         });

         it("should call loggingService.logMessage()", async () => {
             spyOn($window, "setTimeout").and.callThrough();
             ($window.document.querySelector as jasmine.Spy).and.returnValue(undefined);

             await component["checkElementPresence"]('fakeElementId');

             expect(loggingService.logMessage).toHaveBeenCalledTimes(1);             
         });

     });
 });