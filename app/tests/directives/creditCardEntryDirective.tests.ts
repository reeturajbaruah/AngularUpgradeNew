(function (): void {
    "use strict";
    describe("directive: credit-card-entry", () => {
        
        beforeEach(angular.mock.module("HCTRATemplates"));
        beforeEach(angular.mock.module("HCTRAModule"));

        let scope;
        let rootScope;
        let directiveScope;
        let element: angular.IAugmentedJQuery;
        let compile: any;
       
        let responseErrorServiceMock;
        let creditCardInputService;
        let q;
        let expirationDateService;

        function flush() {
            rootScope.$apply();
        }

        const setup = ($rootScope: angular.IRootScopeService,
            $templateCache: angular.ITemplateCacheService,
            $compile: angular.ICompileService, $q: angular.IQService) => {

            rootScope = $rootScope;
            compile = $compile;
            q = $q;

            $templateCache.put("/app/directives/billingEntry/creditCardEntryTemplate.html",
            $templateCache.get("app/directives/billingEntry/creditCardEntryTemplate.html"));
        }

        function buildDirective() {

            scope = rootScope.$new();
            scope.creditCardTypes = ["VISA", "DISCOVER", "MASTERCARD", "AMEX"];
            scope.creditCard = {};
            scope.form = {};
            scope.suffix = 'theCreditCardDirective';
            
            const el: angular.IAugmentedJQuery = angular.element("<form name=\"form\">" +
                "<credit-card-entry on-setup-complete=\"onSetupComplete()\" credit-card=\"creditCard\" creditcardtypes=\"creditCardTypes\" " +
                "paymentsform=\"form\" validate=\"true\" name-suffix=\"suffix\">" +
                "</credit-card-entry>" +
                "</form>");
            element = compile(el)(scope);
            scope.$digest();
            directiveScope = (el.children() as angular.IAugmentedJQuery).isolateScope();
            directiveScope.$apply();
        }

        
        beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {
            
            responseErrorServiceMock = jasmine.createSpyObj("responseErrorService", ["displayAlertsFromResponse", "displayToast"]);
            creditCardInputService = jasmine.createSpyObj("creditCardInputService", ["setup", "update", "submit"]);

            expirationDateService = jasmine.createSpyObj('expirationDateService', ['isInternationalAddress']);

            $provide.value('expirationDateService', expirationDateService);
            $provide.value("creditCardInputService", creditCardInputService);
            $provide.value("validationService", {});
        }));

        beforeEach(angular.mock.inject(setup));
        
        describe("Non-kiosk configuration", () => {
            
            beforeEach(() => {
                creditCardInputService.setup.and.callFake((s) => {
                    s.strategyUsed = HCTRA.Model.CreditCardInputStrategyEnum.Iframe;
                    return q.resolve();
                });
                creditCardInputService.update.and.callFake(() => {
                    return q.resolve();
                });
                creditCardInputService.submit.and.callFake(() => {
                    return q.resolve();
                });
                
                buildDirective();
            });

            it("should use iframe", () => {
                directiveScope.update();
                flush();
                expect(directiveScope.strategyUsed).toBe(HCTRA.Model.CreditCardInputStrategyEnum.Iframe);
                expect(angular.element("[class='vantivIframeWrapper']", element).length).toBe(1);
            });

            it("should have a defined scope", () => {
                expect(scope).toBeDefined("scope not defined");
                expect(directiveScope).toBeDefined("directiveScope not defined");
            });

            it("should start with an invalid form", () => {
                expect(scope.form.$valid).toBeFalsy();
                expect(scope.form.$invalid).toBeTruthy();
            });

            it("should accept valid card name", () => {
                scope.creditCard.nameOnCard = "First, L'ast-Last Esq.";
                scope.$digest();

                expect(scope.form.cardNametheCreditCardDirective.$valid).toBeTruthy();
                expect(scope.form.cardNametheCreditCardDirective.$invalid).toBeFalsy();
            });

            it("should reject a blank card name", () => {
                scope.creditCard.nameOnCard = "";
                scope.$digest();

                expect(scope.form.cardNametheCreditCardDirective.$valid).toBeFalsy();
                expect(scope.form.cardNametheCreditCardDirective.$invalid).toBeTruthy();
            });

            it("should reject card number in name field", () => {
                scope.creditCard.nameOnCard = "4916913787560670";
                scope.creditCard.cardNbr = "4916913787560670";
                scope.$digest();

                expect(scope.form.cardNametheCreditCardDirective.$valid).toBeFalsy();
                expect(scope.form.cardNametheCreditCardDirective.$invalid).toBeTruthy();
            });
        });

        describe("Kiosk configuration", () => {

            beforeEach(() => {
                creditCardInputService.setup.and.callFake((s) => {
                    s.strategyUsed = HCTRA.Model.CreditCardInputStrategyEnum.Tripos;
                    return q.resolve();
                });
                creditCardInputService.update.and.callFake(() => {
                    return q.resolve();
                });
                creditCardInputService.submit.and.callFake(() => {
                    return q.resolve();
                });
                
                buildDirective();
            });

            it("should only show readonly CC info fields", () => {
                expect(angular.element("[name='cardNumbertheCreditCardDirective'][disabled]", element).length).toBe(1);
                expect(angular.element("[name='expMonththeCreditCardDirective'][disabled]", element).length).toBe(1);
                expect(angular.element("[name='expYeartheCreditCardDirective'][disabled]", element).length).toBe(1);
                expect(angular.element("[name='cardNametheCreditCardDirective'][disabled]", element).length).toBe(1);
           });
            
            it("should get tokenized data on update", () => {
                directiveScope.update();
                flush();

                expect(creditCardInputService.update).toHaveBeenCalled();
            });
        });

    });
} ());