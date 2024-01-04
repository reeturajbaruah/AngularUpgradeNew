(function (): void {
    "use strict";

    describe("directive: up-down-enter-interceptor", () => {

        beforeEach(angular.mock.module("HCTRATemplates"));
        beforeEach(angular.mock.module("HCTRAModule"));

        let scope,
            element: angular.IAugmentedJQuery;

        beforeEach(angular.mock.inject(($rootScope: angular.IRootScopeService,
            $compile: angular.ICompileService) => {
            scope = $rootScope.$new();

            scope.keyActions = <HCTRA.Model.IUpDownEnterInterceptorActions>{
                    upAction: (): void => { },
                    downAction: (): void => { },
                    enterAction: (event: JQueryEventObject): void => { if (event) { scope.isDummy = true; } }
            };

            element = angular.element("<div up-down-enter-interceptor=\"keyActions\" \>");
            $compile(element)(scope);
            scope.$digest();

            spyOn(scope.keyActions, "upAction");
            spyOn(scope.keyActions, "downAction");
            spyOn(scope.keyActions, "enterAction");
        }));

        it("should have a defined scope", () => {
            expect(scope).toBeDefined();
        });

        it("keypress: verify correct method is called for 38 = up key", () => {
            let event: JQueryEventObject = angular.element.Event("keypress");
            event.which = 38;
            element.triggerHandler(event);

            expect(scope.keyActions.upAction).toHaveBeenCalledTimes(1);
            expect(scope.keyActions.downAction).not.toHaveBeenCalled();
            expect(scope.keyActions.enterAction).not.toHaveBeenCalled();
        });

        it("keydown: verify correct method is called for 38 = up key", () => {
            let event: JQueryEventObject = angular.element.Event("keydown");
            event.which = 38;
            element.triggerHandler(event);

            expect(scope.keyActions.upAction).toHaveBeenCalledTimes(1);
            expect(scope.keyActions.downAction).not.toHaveBeenCalled();
            expect(scope.keyActions.enterAction).not.toHaveBeenCalled();
        });

        it("keypress: verify correct method is called for 40 = down key", () => {
            let event: JQueryEventObject = angular.element.Event("keypress");
            event.which = 40;
            element.triggerHandler(event);

            expect(scope.keyActions.upAction).not.toHaveBeenCalled();
            expect(scope.keyActions.downAction).toHaveBeenCalledTimes(1);
            expect(scope.keyActions.enterAction).not.toHaveBeenCalled();
        });

        it("keydown: verify correct method is called for 40 = down key", () => {
            let event: JQueryEventObject = angular.element.Event("keydown");
            event.which = 40;
            element.triggerHandler(event);

            expect(scope.keyActions.upAction).not.toHaveBeenCalled();
            expect(scope.keyActions.downAction).toHaveBeenCalledTimes(1);
            expect(scope.keyActions.enterAction).not.toHaveBeenCalled();
        });

        it("keypress: verify correct method is called for 13 = enter key", () => {
            let event: JQueryEventObject = angular.element.Event("keypress");
            event.which = 13;
            element.triggerHandler(event);

            expect(scope.keyActions.upAction).not.toHaveBeenCalled();
            expect(scope.keyActions.downAction).not.toHaveBeenCalled();
            expect(scope.keyActions.enterAction).toHaveBeenCalledTimes(1);
            expect(scope.keyActions.enterAction).toHaveBeenCalledWith(event);
        });

        it("keydown: verify correct method is called for 13 = enter key", () => {
            let event: JQueryEventObject = angular.element.Event("keydown");
            event.which = 13;
            element.triggerHandler(event);

            expect(scope.keyActions.upAction).not.toHaveBeenCalled();
            expect(scope.keyActions.downAction).not.toHaveBeenCalled();
            expect(scope.keyActions.enterAction).toHaveBeenCalledTimes(1);
            expect(scope.keyActions.enterAction).toHaveBeenCalledWith(event);
        });


    });
}());