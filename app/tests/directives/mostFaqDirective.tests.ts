(function (): void {
    "use strict";

    describe("directive: most-faq", () => {

        beforeEach(angular.mock.module("HCTRATemplates"));
        beforeEach(angular.mock.module("HCTRAModule"));

        let scope;
        let directiveScope: HCTRA.Model.IMostFaqDirectiveScope;
        let genericRepo;
        let linkLookupService;


        beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

            genericRepo = {
                dataFactory: {
                    getCmsPageById: () => { }
                }
            };

            $provide.value("$state", hctraMocks.$state({}));
            $provide.value("$location", hctraMocks.$location());
            $provide.value('genericRepo', genericRepo);
            linkLookupService = jasmine.createSpyObj('linkLookupService', ['articleLookupById']);
            $provide.value('linkLookupService', linkLookupService);
        }));


        beforeEach(angular.mock.inject((_genericRepo_: HCTRA.Service.IGenericRepo) => {

            spyOn(genericRepo.dataFactory, "getCmsPageById").and.callFake(
                () => {
                    return {
                        then: (cb: (input: any) => void): void => {
                            cb({
                                cmsResponse: angular.toJson({
                                    Query: {
                                        Results: [
                                            { Title: "faq 1" },
                                            { Title: "faq 2" },
                                            { Title: "faq 3" },
                                            { Title: "faq 4" },
                                            { Title: "faq 5" },
                                            { Title: "faq 6" }
                                        ]
                                    }
                                }),
                                errors: [],
                                alerts: []
                            });
                        }
                    };
                }
            );
                        
        }));

        beforeEach(angular.mock.inject(($rootScope: angular.IRootScopeService,
            $templateCache: angular.ITemplateCacheService,
            $compile: angular.ICompileService) => {

            scope = $rootScope.$new();

            scope.form = {};

            $templateCache.put("/app/directives/helpAndSupport/mostFaqTemplate.html",
                $templateCache.get("app/directives/helpAndSupport/mostFaqTemplate.html"));
            const el: angular.IAugmentedJQuery = angular.element("<form name=\"form\"><most-faq></most-faq></form>");
            $compile(el)(scope);
            scope.$digest();

            directiveScope = (el.children() as angular.IAugmentedJQuery).isolateScope() as HCTRA.Model.IMostFaqDirectiveScope;
        }));


        it("should begin as defined", () => {
            expect(directiveScope).toBeDefined();
        });

        it("should begin as valid", () => {
            expect(directiveScope.mostFaq).toBeTruthy();
        });

        it("should have called linklookup service", () => {
            directiveScope.searchMostFaq({} as any);
            expect(linkLookupService.articleLookupById).toHaveBeenCalled();
        });

        it("should not have called linklookup service", () => {
            const blank: any = undefined;
            directiveScope.searchMostFaq(blank);
            expect(linkLookupService.articleLookupById).not.toHaveBeenCalled();
        });

    });

} ());