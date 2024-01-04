(function () {
    'use strict';


    angular.module('HCTRAModule').provider('router', [
        '$stateProvider',
        'routes', 'stateNames',
        'USER_ROLES',
        'quickLinkNav',
        'environmentConfig',

        function RouterProvider(
            $stateProvider,
            routes,
            stateNames,
            USER_ROLES,
            quickLinkNav,
            environmentConfig
        ) {

            //TODO: these resolves are duplicated in Angular. delete these once all routing is migrated over    
            const authResolve = ['AuthResolver', "$transition$", (AuthResolver, $transition$) => {
                return AuthResolver.resolve($transition$.$to().data.authorizedRoles);
            }];

            const maintenanceResolve = ['maintenanceService', "$transition$", function (maintenanceService, $transition$) {
                return maintenanceService.resolveMaintenanceStatus($transition$.$to().data.maintenanceFeaturePool, $transition$.$from().name);
            }];

            const cmsResolver = (options?: { mergeParams?: boolean, selector?: (response: HCTRA.Model.BaseCmsResponse) => any, lookup?: (cmsSetting: any) => any }) => {
                //set default selector. selector selects which property to deserialize from.
                const selector = (options && options.selector) || (r => angular.fromJson(r.cmsResponse));
                //set default lookup. lookup is a map function that chooses how to read from the cms settings obj.
                const lookup = (options && options.lookup) || (state => state["cms"]);
                //set merge params option. mergeParams allows merging URL parameters defined in the parameters property to
                //be merged directly in to the base object, removing the need to parse this field later.
                const mergeParams = options && options.mergeParams;

                return ['genericRepo', '$q', '$transition$', 'stringUtilsService', (
                    genericRepo: HCTRA.Service.IGenericRepo,
                    $q: angular.IQService,
                    $transition$: any,
                    stringUtilsService) => {

                    const spreadAndMerge = (obj) => {
                        const { Children, ...baseObj } = obj;
                        return {
                            ...baseObj,
                            ...stringUtilsService.getParameterObject(baseObj.Parameters),
                            Children: (Children || []).map(spreadAndMerge)
                        };
                    };

                    const request = lookup($transition$.$to());
                    if (request) {
                        //send request for cms data
                        return genericRepo.dataFactory
                            .getCmsPageById(request)
                            .then(selector) //map to the desired data
                            .then(mergeParams ? spreadAndMerge : i => i); //merge data or return data
                    }

                    return $q.resolve(null);
                }];
            };

            const resolveUpdateBillingInformation = ['manageBillingInformationResolver', function (manageBillingInformationResolver) {
                return manageBillingInformationResolver.resolveUpdateBillingInformation();
            }];

            //HCTRA.ORG defined routes.
            function createRoutes() {
                const urls: HCTRA.Constant.IRoutes = routes;
                const states: HCTRA.Constant.IStateNames = stateNames;
                const userRoles = USER_ROLES;

                const t = [
                    {
                        name: states.EZTAGExpressApp,
                        config: {
                            url: urls.cmsEZTAGExpressAppPage,
                            settings: {
                                isHybrid: true
                            },
                            data: {
                                authorizedRoles: [userRoles.anonymous]
                            },
                            quickLink: {
                                nav: quickLinkNav.EZTAGExpressApp,
                                content: 'EZ TAG Express App',
                                hideWhenAuthenticated: true,
                                isCmsUrl: true
                            },
                            resolve: {
                                authResolve: authResolve
                            }
                        }
                    },
                    {
                        name: states.vehicleEzTags,
                        config: {
                            data: {
                                authorizedRoles: [userRoles.anonymous]
                            },
                            settings: {
                                navlevel: 1,
                                parent: states.eZTagAccount,
                                nav: 4,
                                content: 'Vehicles and EZ TAGs',
                                defaultOpenId: 'vehicleEzTags',
                                isHybrid: true
                            }
                        }
                    },
                    {
                        name: states.travelTools,
                        config: {
                            data: {
                                authorizedRoles: [userRoles.anonymous]
                            },
                            settings: {
                                navlevel: 0,
                                nav: 6,
                                content:
                                    "<img src='../Content/icons/menu/hm_travel_tools.png' alt='Click for travel tools'>   Travel Tools",
                                isHybrid: true
                            }
                        }
                    }, {
                        name: states.CALLROADSIDEASSISTANCE,
                        config: {
                            data: {
                                authorizedRoles: [userRoles.anonymous]
                            },
                            settings: {
                                navlevel: 0,
                                nav: 7,
                                content:
                                    "<img src='../Content/icons/menu/hm_roadside_assistance.png' alt='Click to call roadside assistance'>   Call Roadside Assistance",
                                phone: 'tel: ' + urls.roadSideAssistPhoneNumber,
                                isHybrid: true
                            }
                        }
                    }, {
                        name: states.validatePrimaryEmail,
                        config: {
                            url: urls.validatePrimaryEmail,
                            controller: 'ValidatePrimaryEmailController',
                            data: {
                                authorizedRoles: [userRoles.anonymous]
                            },
                            resolve: {
                                authResolve: authResolve
                            },
                            settings: {
                                isHybrid: true
                            }
                        }
                    }, {
                        name: states.sendEmailConfirmation,
                        config: {
                            url: urls.sendEmailConfirmation,
                            controller: 'SendEmailConfirmationController',
                            template: '<div></div>',
                            data: {
                                authorizedRoles: [userRoles.active, userRoles.pendingClosure]
                            },
                            resolve: {
                                authResolve: authResolve
                            },
                            settings: {
                                isHybrid: true
                            }
                        }
                    },
                    {
                        name: states.newsArchiveChild,
                        config: {
                            url: urls.archiveUrlPattern,
                            controller: 'SearchArticleChildController',
                            title: 'News Archive Child',
                            params: {
                                category: null,
                                page: {
                                    value: null,
                                    squash: true
                                },
                                size: {
                                    value: null,
                                    squash: true
                                }
                            },
                            template: "<div ui-view></div>",
                            settings: {
                                isHybrid: true
                            },
                            data: {
                                authorizedRoles: [userRoles.anonymous]
                            },
                            resolve: {
                                authResolve: authResolve
                            },
                            cms: {
                                pageTitleId: urls.newsArchiveCmsTitleId,
                                pageTitleFields: "Title",
                                categoriesId: urls.newsArchiveCmsCategoriesAllId,
                                categoriesFolderId: urls.newsArchiveCmsCategoriesFolderId,
                                categoriesFields: "Title,QueryId,DisplayName,ItemPath,ItemName",
                                titleType: "News"
                            }
                        }
                    }, {
                        name: states.closures,
                        config: {
                            url: urls.closures,
                            title: 'Closures',
                            settings: {
                                nav: 2,
                                parent: states.travelTools,
                                content: "Closures",
                                isHybrid: true
                            },
                            data: {
                                authorizedRoles: [userRoles.anonymous]
                            },
                            resolve: {
                                authResolve: authResolve
                            },
                            cms: {
                            },
                            quickLink: {
                                nav: quickLinkNav.closures,
                                content: 'Closures',
                                external: true
                            }
                        }
                    }
                ];

                const manageBillingInformationRoutes =
                    ((): (keyof HCTRA.Constant.IRoutes)[] => [
                        "editCreditCardInformation",
                        "editBankAccountInformation",
                        "editCreditCardAddress",
                        "addCreditCardInformation",
                        "addBankAccountInformation",
                        "makePaymentMethodPrimary"
                        //,
                        //"deletePaymentMethod"
                    ])()
                        .map(state => ({
                            name: states[state],
                            config: {
                                url: urls[state],
                                template: '',
                                controller: "ManageBillingInformationSubController",
                                title: states[state].replace(".", " -").split(/(?=[A-Z])/).join(" "),
                                settings: {
                                    isHybrid: true
                                },
                                data: {
                                    authorizedRoles: [userRoles.active]
                                },
                                quickLink: {},
                                resolve: {
                                    authResolve: authResolve,
                                    resolveUpdateBillingInformation: resolveUpdateBillingInformation
                                }
                            }
                        }));

                const storefrontRoutes = [
                    {
                        name: states.storefrontSelection,
                        config: {
                            url: urls.storefrontSelection,
                            views: {
                                "storefront": {
                                    templateUrl: "/app/templates/storefront/StorefrontOptionSelectionTemplate.html",
                                    controller: 'StorefrontOptionSelectionController'
                                }
                            },
                            settings: {
                            },
                            data: {
                                authorizedRoles: [userRoles.anonymous],
                                maintenanceFeaturePool: [HCTRA.Model.MaintenanceFeature.Account]
                            },
                            quickLink: {},
                            resolve: {
                                authResolve: authResolve,
                                maintenanceResolve: maintenanceResolve
                            },
                            cms: {
                                taskSelectionPageId: urls.storefrontTaskSelectionPageId,
                                hoverIconId: urls.storefrontHoverIconId,
                                defaultIconId: urls.storefrontDefaultIconId,
                                selectedIconId: urls.storefrontSelectedIconId
                            }
                        }
                    },
                    {
                        name: states.storefrontSurvey,
                        config: {
                            url: urls.storefrontSurvey,
                            views: {
                                "storefront": {
                                    templateUrl: '/app/templates/storefront/StorefrontSurveyTemplate.html',
                                    controller: 'StorefrontSurveyController'
                                }
                            },
                            settings: {
                            },
                            data: {
                                authorizedRoles: [userRoles.anonymous],
                                maintenanceFeaturePool: [HCTRA.Model.MaintenanceFeature.Account]
                            },
                            quickLink: {},
                            resolve: {
                                authResolve: authResolve,
                                maintenanceResolve: maintenanceResolve
                            },
                            cms: {
                                surveyId: urls.storefrontSurveyId,
                                surveyFields: '',
                                surveyThankYouModalId: urls.storefrontThankYouSurveyModal,
                                surveyThankYouModalFields: ''
                            }
                        }
                    }
                ];

                const storefrontVersion = environmentConfig.storefrontConfigs.version || '1.0.0';

                const rawRoutes = t
                    .concat((+storefrontVersion.split('.')[0]) > 1 ? [] : (storefrontRoutes as any))
                    .concat(manageBillingInformationRoutes as any);

                rawRoutes.forEach(function (r) {
                    r.config['angularjs'] = true;
                    $stateProvider.state(r.name, r.config);
                });
                return rawRoutes;
            }


            //define provider factory 'get' method
            this.$get = [function () {
                return createRoutes();
            }
            ];
        }]);
})();


module HCTRA.Service {
    export class DynamicRoutesAsyncActionProvider {
        static $inject = ['asyncActionsProvider'];

        static angularJsRegistrationName = 'routerBootstrapReady';

        constructor(asyncActionsProvider: IAsyncActionsProvider) {
            asyncActionsProvider.register(DynamicRoutesAsyncActionProvider.angularJsRegistrationName);
        }

        private readyPromise: ng.IPromise<any>;

        public $get = ['urlManagerService', 'templateCacheHelper', 'linkLookupService', 'responseErrorService', '$state',
            function (
                urlManagerService: any,
                templateCacheHelper: any,
                linkLookupService: any,
                responseErrorService: any,
                $state: any,
            ) {

                if (!this.readyPromise) {
                    const authResolve = ['AuthResolver', "$transition$", (AuthResolver, $transition$) => {
                        return AuthResolver.resolve($transition$.$to().data.authorizedRoles);
                    }];

                    this.readyPromise = urlManagerService
                        .getStartingRoutes()
                        .then(function (response) {
                            if (!response.errors && response.states.length !== 0) {

                                response.states.forEach(function (element) {
                                    element.config.resolve.authResolve = authResolve;
                                    element.config.settings = { ...(element.config.settings || {}), isHybrid: true };
                                    const newState = { ...element.config, name: element.name, angularjs: true };
                                    $state.router.stateRegistry.register(newState);
                                });

                                linkLookupService.cmsPathDictionary = response.articleLookupByPath;
                                linkLookupService.cmsIdDictionary = response.articleLookupById;
                            } else {
                                responseErrorService.displayErrorsFromResponse(response, true);
                            }

                        })
                        .then(function () {
                            templateCacheHelper.constructUncachedList();
                        });
                }

                return this.readyPromise;

            }];

    }
}

(function () {
    angular.module('HCTRAModule')
        .provider(HCTRA.Service.DynamicRoutesAsyncActionProvider.angularJsRegistrationName, HCTRA.Service.DynamicRoutesAsyncActionProvider);
})();

