declare var hctraMocks: any;

(() => {
    'use strict';

    describe('DesktopMenuRouteService', () => {
        const mockGenericRepo = {
            dataFactory: {
                getToggleStatus: () => {
                    return {
                        toggleStatus: true,
                        toggleName: "someToggle"
                    };
                }
            }
        };
        beforeEach(angular.mock.module('HCTRAModule'));

        beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {
            $provide.value('genericRepo', mockGenericRepo);
            $provide.value('$state', hctraMocks.fake$state());
            $provide.value('urlManagerService', hctraMocks.urlManagerService());
            $provide.value('MegaMenuCache', hctraMocks.megaMenuCache());
            $provide.value('responseErrorService', hctraMocks.responseErrorService());
            $provide.value('AuthService', hctraMocks.AuthService());
            $provide.value('routes', hctraMocks.routes());
            $provide.value('isInvoicedService', hctraMocks.isInvoicedService());
            $provide.value('USER_ROLES', hctraMocks.USER_ROLES());
            $provide.value('futureRoutes', {});
        }));
        beforeEach(() => {
            spyOn(mockGenericRepo.dataFactory, "getToggleStatus").and.callThrough();
        });

        let service: HCTRA.Service.DesktopMenuRouteService;
        
        describe('authorizeRoute', () => {

            const mockedAuthService = hctraMocks.AuthService();
            let authServiceSpy;

            beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

                $provide.value('AuthService', mockedAuthService);
                $provide.value('USER_ROLES', { anonymous: 'anonymous' });
            }));

            beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

                service = $injector.get<HCTRA.Service.DesktopMenuRouteService>('desktopMenuRouteService');

                authServiceSpy = spyOn(mockedAuthService, 'isAuthorized'); 
            }));

            it('should return true when AuthService.isAuthorized() returns true and passed array does not contain USER_ROLES', () => {

                authServiceSpy.and.returnValue(true);

                expect(service.authorizeRoute({authorizedRoles: []})).toBe(true);
            });

            it('should return true when AuthService.isAuthorized() returns false and passed array contains USER_ROLES', () => {

                authServiceSpy.and.returnValue(false);

                expect(service.authorizeRoute({ authorizedRoles: ['anonymous'] })).toBe(true);
            });

            it('should return true when AuthService.isAuthorized() returns true and passed array contains USER_ROLES', () => {

                authServiceSpy.and.returnValue(true);

                expect(service.authorizeRoute({ authorizedRoles: ['anonymous'] })).toBe(true);
            });

            it('should return false when AuthService.isAuthorized() returns false and passed array does not contain USER_ROLES', () => {

                authServiceSpy.and.returnValue(false);

                expect(service.authorizeRoute({ authorizedRoles: [] })).toBe(false);
            });
        });

        describe('isInvoicedAndLinkUpdateReplenishAmount ', () => {

            const mockedAuthService = hctraMocks.AuthService();
            const mockedisInvoicedService = hctraMocks.isInvoicedService();
            const mockedRoutes = hctraMocks.routes();
            const profileRoutes = { UpdateReplenishmentAmount: '/UpdateReplenishAmount' };
            const accountActivityRoutes = { accountActivityInvoices: '/AccountActivityInvoices' };

            let isAuthenticatedSpy;
            let isInvoicedSpy;

            beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

                $provide.value('AuthService', mockedAuthService);
                $provide.value('isInvoicedService', mockedisInvoicedService);
                $provide.constant('routes', mockedRoutes);
                $provide.constant('profileRoutes', profileRoutes);
                $provide.constant('accountActivityRoutes', accountActivityRoutes);
            }));

            beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

                service = $injector.get<HCTRA.Service.DesktopMenuRouteService>('desktopMenuRouteService');

                isAuthenticatedSpy = spyOn(mockedAuthService, 'isAuthenticated');
                isInvoicedSpy = spyOn(mockedisInvoicedService, 'isAccountInvoiced');
            }));

            it(`should return true when isAuthenticated true and isAccountInvoiced true and linkUrl updateReplenishAmount`, () => {

                isAuthenticatedSpy.and.returnValue(true);
                isInvoicedSpy.and.returnValue(true);

                expect(service.isInvoicedAndLinkUpdateReplenishAmount(profileRoutes.UpdateReplenishmentAmount)).toBe(true);
            });

            it(`should return false when isAuthenticated false and isAccountInvoiced true and linkUrl updateReplenishAmount`, () => {

                isAuthenticatedSpy.and.returnValue(false);
                isInvoicedSpy.and.returnValue(true);

                expect(service.isInvoicedAndLinkUpdateReplenishAmount(profileRoutes.UpdateReplenishmentAmount)).toBe(false);
            });

            it(`should return false when isAuthenticated true and isAccountInvoiced false and linkUrl updateReplenishAmount`, () => {

                isAuthenticatedSpy.and.returnValue(true);
                isInvoicedSpy.and.returnValue(false);

                expect(service.isInvoicedAndLinkUpdateReplenishAmount(profileRoutes.UpdateReplenishmentAmount)).toBe(false);
            });

            it(`should return false when isAuthenticated false and isAccountInvoiced false and linkUrl updateReplenishAmount`, () => {

                isAuthenticatedSpy.and.returnValue(false);
                isInvoicedSpy.and.returnValue(false);

                expect(service.isInvoicedAndLinkUpdateReplenishAmount(profileRoutes.UpdateReplenishmentAmount)).toBe(false);
            });

            it(`should return false when isAuthenticated true and isAccountInvoiced true and linkUrl something else`, () => {

                isAuthenticatedSpy.and.returnValue(true);
                isInvoicedSpy.and.returnValue(true);

                expect(service.isInvoicedAndLinkUpdateReplenishAmount('something else')).toBe(false);
                expect(service.isInvoicedAndLinkUpdateReplenishAmount(accountActivityRoutes.accountActivityInvoices)).toBe(false);
            });

            it(`should return false when isAuthenticated false and isAccountInvoiced true and linkUrl something else`, () => {

                isAuthenticatedSpy.and.returnValue(false);
                isInvoicedSpy.and.returnValue(true);

                expect(service.isInvoicedAndLinkUpdateReplenishAmount('something else')).toBe(false);
                expect(service.isInvoicedAndLinkUpdateReplenishAmount(accountActivityRoutes.accountActivityInvoices)).toBe(false);
            });

            it(`should return false when isAuthenticated true and isAccountInvoiced false and linkUrl something else`, () => {

                isAuthenticatedSpy.and.returnValue(true);
                isInvoicedSpy.and.returnValue(false);

                expect(service.isInvoicedAndLinkUpdateReplenishAmount('something else')).toBe(false);
                expect(service.isInvoicedAndLinkUpdateReplenishAmount(accountActivityRoutes.accountActivityInvoices)).toBe(false);
            });

            it(`should return false when isAuthenticated false and isAccountInvoiced false and linkUrl something else`, () => {

                isAuthenticatedSpy.and.returnValue(false);
                isInvoicedSpy.and.returnValue(false);

                expect(service.isInvoicedAndLinkUpdateReplenishAmount('something else')).toBe(false);
                expect(service.isInvoicedAndLinkUpdateReplenishAmount(accountActivityRoutes.accountActivityInvoices)).toBe(false);
            });
        });

        describe('notInvoicedAndLinkAccountActivityInvoices ', () => {

            const mockedAuthService = hctraMocks.AuthService();
            const mockedisInvoicedService = hctraMocks.isInvoicedService();
            const mockedRoutes = hctraMocks.routes();
            const profileRoutes = { UpdateReplenishmentAmount: '/UpdateReplenishAmount' };
            const accountActivityRoutes = { accountActivityInvoices: '/AccountActivityInvoices' };

            let isAuthenticatedSpy;
            let isInvoicedSpy;

            beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

                $provide.value('AuthService', mockedAuthService);
                $provide.value('isInvoicedService', mockedisInvoicedService);
                $provide.constant('routes', mockedRoutes);
                $provide.constant('profileRoutes', profileRoutes);
                $provide.constant('accountActivityRoutes', accountActivityRoutes);
            }));

            beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

                service = $injector.get<HCTRA.Service.DesktopMenuRouteService>('desktopMenuRouteService');

                isAuthenticatedSpy = spyOn(mockedAuthService, 'isAuthenticated');
                isInvoicedSpy = spyOn(mockedisInvoicedService, 'isAccountInvoiced');
            }));

            it(`should return true when isAuthenticated true and isAccountInvoiced false and linkUrl accountActivityInvoices`, () => {

                isAuthenticatedSpy.and.returnValue(true);
                isInvoicedSpy.and.returnValue(false);

                expect(service.notInvoicedAndLinkAccountActivityInvoices(accountActivityRoutes.accountActivityInvoices)).toBe(true);
            });

            it(`should return false when isAuthenticated false and isAccountInvoiced false and linkUrl accountActivityInvoices`, () => {

                isAuthenticatedSpy.and.returnValue(false);
                isInvoicedSpy.and.returnValue(false);

                expect(service.notInvoicedAndLinkAccountActivityInvoices(accountActivityRoutes.accountActivityInvoices)).toBe(false);
            });

            it(`should return false when isAuthenticated true and isAccountInvoiced true and linkUrl accountActivityInvoices`, () => {

                isAuthenticatedSpy.and.returnValue(true);
                isInvoicedSpy.and.returnValue(true);

                expect(service.notInvoicedAndLinkAccountActivityInvoices(accountActivityRoutes.accountActivityInvoices)).toBe(false);
            });

            it(`should return false when isAuthenticated false and isAccountInvoiced true and linkUrl accountActivityInvoices`, () => {

                isAuthenticatedSpy.and.returnValue(false);
                isInvoicedSpy.and.returnValue(true);

                expect(service.notInvoicedAndLinkAccountActivityInvoices(accountActivityRoutes.accountActivityInvoices)).toBe(false);
            });

            it(`should return false when isAuthenticated true and isAccountInvoiced false and linkUrl something else`, () => {

                isAuthenticatedSpy.and.returnValue(true);
                isInvoicedSpy.and.returnValue(false);

                expect(service.notInvoicedAndLinkAccountActivityInvoices('something else')).toBe(false);
                expect(service.notInvoicedAndLinkAccountActivityInvoices(profileRoutes.UpdateReplenishmentAmount)).toBe(false);
            });

            it(`should return false when isAuthenticated false and isAccountInvoiced false and linkUrl something else`, () => {

                isAuthenticatedSpy.and.returnValue(false);
                isInvoicedSpy.and.returnValue(false);

                expect(service.notInvoicedAndLinkAccountActivityInvoices('something else')).toBe(false);
                expect(service.notInvoicedAndLinkAccountActivityInvoices(profileRoutes.UpdateReplenishmentAmount)).toBe(false);
            });

            it(`should return false when isAuthenticated true and isAccountInvoiced true and linkUrl something else`, () => {

                isAuthenticatedSpy.and.returnValue(true);
                isInvoicedSpy.and.returnValue(true);

                expect(service.notInvoicedAndLinkAccountActivityInvoices('something else')).toBe(false);
                expect(service.notInvoicedAndLinkAccountActivityInvoices(profileRoutes.UpdateReplenishmentAmount)).toBe(false);
            });

            it(`should return false when isAuthenticated false and isAccountInvoiced true and linkUrl something else`, () => {

                isAuthenticatedSpy.and.returnValue(false);
                isInvoicedSpy.and.returnValue(true);

                expect(service.notInvoicedAndLinkAccountActivityInvoices('something else')).toBe(false);
                expect(service.notInvoicedAndLinkAccountActivityInvoices(profileRoutes.UpdateReplenishmentAmount)).toBe(false);
            });
        });

        describe('isAccountPaymentPlanUrlAndNoPaymentPlansAvailable ', () => {

            const mockedAuthService = hctraMocks.AuthService();
            const paymentPlansRoutes = { accountOverviewSummary: '/fakeRoute' };

            let isAuthenticatedSpy;

            beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

                $provide.value('AuthService', mockedAuthService);
                $provide.constant('paymentPlansRoutes', paymentPlansRoutes);
            }));

            beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

                service = $injector.get<HCTRA.Service.DesktopMenuRouteService>('desktopMenuRouteService');
                service['$rootScope'].currentUser = { hasPaymentPlans: false};

                isAuthenticatedSpy = spyOn(mockedAuthService, 'isAuthenticated');
            }));

            it(`should return true when isAuthenticated true and linkUrl paymentPlanRoutes.accountOverviewSummary and no payment plans`, () => {

                isAuthenticatedSpy.and.returnValue(true);
                service['$rootScope'].currentUser.hasPaymentPlans = false;

                expect(service.isAccountPaymentPlanUrlAndNoPaymentPlansAvailable('/fakeRoute')).toBe(true);
            });

            [
                [false, '/something', false],
                [false, '/something', true],
                [false, '/fakeRoute', false],
                [false, '/fakeRoute', true],
                [true, '/something', false],
                [true, '/something', true],
                //[true, '/fakeRoute', false],
                [true, '/fakeRoute', true],
            ].forEach(([isAuthenticated, link, hasPaymentPlans]) => {

                it(`should return false when isAuthenticated false or linkUrl not paymentPlanRoutes.accountOverviewSummary or payment plans present`, () => {

                    isAuthenticatedSpy.and.returnValue(isAuthenticated);
                    service['$rootScope'].currentUser.hasPaymentPlans = hasPaymentPlans;

                    expect(service.isAccountPaymentPlanUrlAndNoPaymentPlansAvailable(link as string)).toBe(false);
                });
            });
        });

        describe('isLinkAuthorized ', () => {

            let mockedAuthorizeRoute;
            let mockedIsInvoicedAndLinkUpdateReplenishAmount;
            let mockedNotInvoicedAndLinkAccountActivityInvoices;
            let mockedIsAccountPaymentPlanUrlAndNoPaymentPlansAvailable;
            
            beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

                service = $injector.get<HCTRA.Service.DesktopMenuRouteService>('desktopMenuRouteService');

                mockedAuthorizeRoute = spyOn(service, 'authorizeRoute');
                mockedIsInvoicedAndLinkUpdateReplenishAmount = spyOn(service, 'isInvoicedAndLinkUpdateReplenishAmount');
                mockedNotInvoicedAndLinkAccountActivityInvoices = spyOn(service, 'notInvoicedAndLinkAccountActivityInvoices');
                mockedIsAccountPaymentPlanUrlAndNoPaymentPlansAvailable = spyOn(service, 'isAccountPaymentPlanUrlAndNoPaymentPlansAvailable');
            }));

            it('should call authorizeRoute with link\'s authorizedRoles, isInvoicedAndLinkUpdateReplenishAmount with link\'s url and notInvoicedAndLinkAccountActivityInvoices with link\'s url', () => {

                mockedAuthorizeRoute.and.returnValue(true);
                mockedIsInvoicedAndLinkUpdateReplenishAmount.and.returnValue(false);
                mockedNotInvoicedAndLinkAccountActivityInvoices.and.returnValue(false);
                mockedIsAccountPaymentPlanUrlAndNoPaymentPlansAvailable.and.returnValue(false);

                service.isLinkAuthorized({ url: 'myUrl', authorizedRoles: ['1', '009'] })

                expect(mockedAuthorizeRoute).toHaveBeenCalledWith({ url: 'myUrl', authorizedRoles: ['1', '009'] });
                expect(mockedIsInvoicedAndLinkUpdateReplenishAmount).toHaveBeenCalledWith('myUrl');
                expect(mockedNotInvoicedAndLinkAccountActivityInvoices).toHaveBeenCalledWith('myUrl');
                expect(mockedIsAccountPaymentPlanUrlAndNoPaymentPlansAvailable).toHaveBeenCalledWith('myUrl');
            });


            it(`should return true when link Authorized and not (isInvoicedAndLinkUpdateReplenishAmount or notInvoicedAndLinkAccountActivityInvoices or isAccountPaymentPlanUrlAndNoPaymentPlansAvailable)`, () => {

                mockedAuthorizeRoute.and.returnValue(true);
                mockedIsInvoicedAndLinkUpdateReplenishAmount.and.returnValue(false);
                mockedNotInvoicedAndLinkAccountActivityInvoices.and.returnValue(false);
                mockedIsAccountPaymentPlanUrlAndNoPaymentPlansAvailable.and.returnValue(false);

                expect(service.isLinkAuthorized({ })).toBe(true);
            }); 
            [
                [false, false, false, false],
                [false, false, false, true],
                [false, false, true, false],
                [false, false, true, true],
                [false, true, false, false],
                [false, true, false, true],
                [false, true, true, false],
                [false, true, true, true],
                //[true, false, false, false],
                [true, false, false, true],
                [true, false, true, false],
                [true, false, true, true],
                [true, true, false, false],
                [true, true, false, true],
                [true, true, true, false],
                [true, true, true, true],
            ].forEach(([authorizeRoute, isInvoicedAndLinkUpdateReplenishAmount, notInvoicedAndLinkAccountActivityInvoices, isAccountPaymentPlanUrlAndNoPaymentPlansAvailable]) => {

                it(`should return false when authorizeRoute false or isInvoicedAndLinkUpdateReplenishAmount true or notInvoicedAndLinkAccountActivityInvoices true or isAccountPaymentPlanUrlAndNoPaymentPlansAvailable true`, () => {

                    mockedAuthorizeRoute.and.returnValue(authorizeRoute);
                    mockedIsInvoicedAndLinkUpdateReplenishAmount.and.returnValue(isInvoicedAndLinkUpdateReplenishAmount);
                    mockedNotInvoicedAndLinkAccountActivityInvoices.and.returnValue(notInvoicedAndLinkAccountActivityInvoices);
                    mockedIsAccountPaymentPlanUrlAndNoPaymentPlansAvailable.and.returnValue(isAccountPaymentPlanUrlAndNoPaymentPlansAvailable);

                    expect(service.isLinkAuthorized({})).toBe(false);
                }); 
            });
        });

        describe('getAuthorizedMegaMenuHelper', () => {

            let authorizeRouteSpy;
            let isLinkAuthorizedSpy;

            beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

                service = $injector.get<HCTRA.Service.DesktopMenuRouteService>('desktopMenuRouteService');

                authorizeRouteSpy = spyOn(service, 'authorizeRoute');
                isLinkAuthorizedSpy = spyOn(service, 'isLinkAuthorized');
            }));

            it('should remove megaMenu item when authorize route return false', () => {

                isLinkAuthorizedSpy.and.returnValue(true);
                authorizeRouteSpy.and.returnValues(false, true, false); 

                const megaMenu = [
                    { authorizedRoles: '1', menuColumns: [{ subMenus: [{ links: [1, 2] }] }] },
                    { authorizedRoles: '2', menuColumns: [{ subMenus: [{ links: [1, 2] }] }] },
                    { authorizedRoles: '3', menuColumns: [{ subMenus: [{ links: [1, 2] }] }] }
                ];

                expect(service.getAuthorizedMegaMenuHelper(megaMenu)).toEqual([{ authorizedRoles: '2', menuColumns: [{ subMenus: [{ links: [1, 2] }] }] }]);
                expect(authorizeRouteSpy).toHaveBeenCalledWith({ authorizedRoles: '1', menuColumns: [{ subMenus: [{ links: [1, 2] }] }] }, 0, megaMenu);
                expect(authorizeRouteSpy).toHaveBeenCalledWith({ authorizedRoles: '2', menuColumns: [{ subMenus: [{ links: [1, 2] }] }] }, 1, megaMenu);
                expect(authorizeRouteSpy).toHaveBeenCalledWith({ authorizedRoles: '3', menuColumns: [{ subMenus: [{ links: [1, 2] }] }] }, 2, megaMenu);
                expect(authorizeRouteSpy).toHaveBeenCalledTimes(3);
            });

            it('should remove menuColumn when subMenus array empty', () => {

                isLinkAuthorizedSpy.and.returnValue(true);
                authorizeRouteSpy.and.returnValue(true);

                const megaMenu = [{ authorizedRoles: '', menuColumns: [
                    { id: 1, subMenus: [{ links: [1, 2] }] },
                    { id: 2, subMenus: [] },
                    { id: 3, subMenus: [{ links: [1, 2] }] }] }];

                expect(service.getAuthorizedMegaMenuHelper(megaMenu)).toEqual([{
                    authorizedRoles: '', menuColumns: [
                        { id: 1, subMenus: [{ links: [1, 2] }] },
                        { id: 3, subMenus: [{ links: [1, 2] }] }]
                }]);
            });

            it('should remove subMenus when links array empty', () => {

                isLinkAuthorizedSpy.and.returnValue(true);
                authorizeRouteSpy.and.returnValue(true);

                const megaMenu = [{ authorizedRoles: '', menuColumns: [{ subMenus: [{ id: 1, links: [1, 2] }, { id: 2, links: [1, 2] }, { id: 3, links: [] }] }]}];

                expect(service.getAuthorizedMegaMenuHelper(megaMenu)).toEqual([{ authorizedRoles: '', menuColumns: [{ subMenus: [{ id: 1, links: [1, 2] }, { id: 2, links: [1, 2] }] }] }]);
            });

            it('should remove links when isLinkAuthorized returns false', () => {

                isLinkAuthorizedSpy.and.returnValues(true, false, true);
                authorizeRouteSpy.and.returnValue(true);

                const megaMenu = [{ authorizedRoles: '', menuColumns: [{ subMenus: [{ links: [1, 2, 3] }] }] }];

                expect(service.getAuthorizedMegaMenuHelper(megaMenu)).toEqual([{ authorizedRoles: '', menuColumns: [{ subMenus: [{ links: [1, 3] }] }] }]);
                expect(isLinkAuthorizedSpy).toHaveBeenCalledWith(1, 0, [1, 2, 3]);
                expect(isLinkAuthorizedSpy).toHaveBeenCalledWith(2, 1, [1, 2, 3]);
                expect(isLinkAuthorizedSpy).toHaveBeenCalledWith(3, 2, [1, 2, 3]);
            });
        });

        describe('getAuthorizedMegaMenu', () => {
            
            let getAuthorizeMegaMenuHelperSpy;
            
            beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {
                service = $injector.get<HCTRA.Service.DesktopMenuRouteService>('desktopMenuRouteService');
                
                getAuthorizeMegaMenuHelperSpy = spyOn(service, 'getAuthorizedMegaMenuHelper');
            }));

            it('should return results from authorizeMegaMenuHelper when routesIn defined', () => {

                getAuthorizeMegaMenuHelperSpy.and.returnValue(['result']);

                expect(service.getAuthorizedMegaMenu(['input'])).toEqual(['result']);
                expect(getAuthorizeMegaMenuHelperSpy).toHaveBeenCalledWith(['input']);
            });

            it('should return undefined when routesIn undefined and not call authorizeMegaMenuHelper', () => {

                expect(service.getAuthorizedMegaMenu(undefined)).toEqual(undefined);
                expect(getAuthorizeMegaMenuHelperSpy).not.toHaveBeenCalled();
            });
        });               

        describe('getFullUrl', () => {

            beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

                service = $injector.get<HCTRA.Service.DesktopMenuRouteService>('desktopMenuRouteService');
            }));

            it('should return empty string when name has no periods and not in statelist', () => {

                expect(service.getFullUrl('test', [{ name: 'notTest', url: 'a' }])).toEqual('');
            });

            it('should return empty string when name has no periods and statelist without url', () => {

                expect(service.getFullUrl('test', [{ name: '' }, { name: 'notTest', url: 'a' }])).toEqual('');
            });

            it('should return url when name has no periods and in statelist with url', () => {

                expect(service.getFullUrl('test', [{ name: 'test', url: 'a' }])).toEqual('a');
            });

            it('should return url when name has one period and in statelist with url and parent not in statelist', () => {

                expect(service.getFullUrl('parent.test', [{ name: 'parent.test', url: 'a' }])).toEqual('a');
            });

            it('should return url when name has one period and in statelist with url and parent in statelist without url', () => {

                expect(service.getFullUrl('parent.test', [{ name: 'parent.test', url: 'a' }, { name:'parent' }])).toEqual('a');
            });

            it('should return concatenation of parent url and own url when name has one period and in statelist with url and parent in statelist with url', () => {

                expect(service.getFullUrl('parent.test', [{ name: 'parent.test', url: 'a' }, { name: 'parent', url: 'parent_' }])).toEqual('parent_a');
            });

            it('should return concatenation of parent url and own url when name has two periods and in statelist with url, parent in statelist with url, grandparent in statelist without url', () => {

                expect(service.getFullUrl('grandparent.parent.test', [{ name: 'grandparent.parent.test', url: 'a' }, { name: 'grandparent.parent', url: 'parent_' }, { name: 'grandparent' }]))
                    .toEqual('parent_a');
            });

            it('should return concatenation of grandparent url and own url when name has two periods and in statelist with url, parent in statelist without url, grandparent in statelist with url', () => {

                expect(service.getFullUrl('grandparent.parent.test', [{ name: 'grandparent.parent.test', url: 'a' }, { name: 'grandparent.parent' }, { name: 'grandparent', url: 'grandparent_' }]))
                    .toEqual('grandparent_a');
            });

            it('should return concatenation of grandparent url, parent url and own url when name has two periods and in statelist with url, parent in statelist with url, grandparent in statelist with url', () => {

                expect(service.getFullUrl('grandparent.parent.test', [{ name: 'grandparent.parent.test', url: 'a' }, { name: 'grandparent.parent', url: 'parent_' }, { name: 'grandparent', url: 'grandparent_' }]))
                    .toEqual('grandparent_parent_a');
            });
        });

        describe('getAuthorizedRoles', () => {

            beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

                service = $injector.get<HCTRA.Service.DesktopMenuRouteService>('desktopMenuRouteService');
            }));

            it('should return authorized roles from angularjs route', () => {

                expect(service.getAuthorizedRoles({ data: { authorizedRoles: ['1', '2'] } })).toEqual(['1', '2']);
            });

            it('should return authorized roles from angular route', () => {

                expect(service.getAuthorizedRoles({ resolve: [{ authorizedRoles: ['3', '2'] }] })).toEqual(['3', '2']);
            });

            it('should return authorized roles from angular route when both angular and angularjs style authorizedRoles present', () => {

                expect(service.getAuthorizedRoles({ data: { authorizedRoles: ['1', '4'] }, resolve: [{ authorizedRoles: ['3', '2'] }] } )).toEqual(['3', '2']);
            });

            [
                {},
                { data: {} },
                { data: { authorizedRoles: [] } },
                { resolve: [] },
                { resolve: [{}] },
                { resolve: [{authorizedRoles: []}]}
            ].forEach(state => {

                it('should return empty list when no authorized roles', () => {

                    expect(service.getAuthorizedRoles(state)).toEqual([]);
                });
            });
            
        });

        describe('configUrlWithStateName', () => {
            let getFullUrlSpy;
            let getAuthorizedRolesSpy;

            beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {
                service = $injector.get<HCTRA.Service.DesktopMenuRouteService>('desktopMenuRouteService');

                getFullUrlSpy = spyOn(service, 'getFullUrl');
                getAuthorizedRolesSpy = spyOn(service, 'getAuthorizedRoles');
            }));

            it('should call getFullUrl and getAuthorizedRouteService with correct arguments', () => {
                getFullUrlSpy.and.returnValue('fullUrl');
                getAuthorizedRolesSpy.and.returnValue([1, 2, 3]);

                service.getFullUrlToAuthorizedRolesDictionary([{ url: 'theUrl', name: 'theName' }]);                

                expect(getFullUrlSpy).toHaveBeenCalledWith('theName', [{ url: 'theUrl', name: 'theName' }]);
                expect(getAuthorizedRolesSpy).toHaveBeenCalledWith({ url: 'theUrl', name: 'theName' });
            });
            
            it('should return empty object when statesWithNames have blank, null or undefined urls only', () => {

                const result = service.getFullUrlToAuthorizedRolesDictionary([{ url: '', name: 'theName' }, { url: null, name: 'theName' }, { url: undefined, name: 'theName' }]);

                expect(result).toEqual({});
            });

            it('should return empty object when statesWithNames have urls with empty authorization roles', () => {
                getFullUrlSpy.and.returnValue('fullUrl');
                getAuthorizedRolesSpy.and.returnValue([]);

                const result = service.getFullUrlToAuthorizedRolesDictionary([{ url: 'a', name: 'theName' }, { url: 'b', name: 'theName' }]);

                expect(result).toEqual({});
            });

            it('should return dictionary where keys are fullUrls and values authorized roles when statesWithNames have valid urls with non-empty authorization roles', () => {
                getFullUrlSpy.and.returnValues('fullUrl1', 'fullUrl2');
                getAuthorizedRolesSpy.and.returnValues([1, 2], [3, 4]);

                const result = service.getFullUrlToAuthorizedRolesDictionary([{ url: 'a', name: 'theName' }, { url: 'b', name: 'theName' }]);

                expect(result).toEqual({fullUrl1: [1, 2], fullUrl2: [3, 4]});
            });
        });
              
        describe('addAuthorizedRolesToMegaMenuNavRoutes', () => {

            beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {

                $provide.value('USER_ROLES', { anonymous: 'anonymous' });
            }));

            beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

                service = $injector.get<HCTRA.Service.DesktopMenuRouteService>('desktopMenuRouteService');                
            }));

            it('should add anonymous role to top level routes when no matching keys in fullUrlToAuthorizedRolesDictionary', () => {

                const topRoute1 = { url: 'a'};
                const topRoute2 = { url: 'b'};
                const topRoute3 = { url: 'c'};

                expect(service.getMegaMenuNavRoutesWithAuthorizedRoles([topRoute1, topRoute2, topRoute3], {}, {}))
                    .toEqual([{ url: 'a', authorizedRoles: ['anonymous'] }, { url: 'b', authorizedRoles: ['anonymous'] }, { url: 'c', authorizedRoles: ['anonymous'] }]);
            });

            it('should add matching roles to top level routes when matching keys in fullUrlToAuthorizedRolesDictionary', () => {



                const topRoute1 = { url: 'a' };
                const topRoute2 = { url: 'b' };
                const topRoute3 = { url: 'c' };

                expect(service.getMegaMenuNavRoutesWithAuthorizedRoles([topRoute1, topRoute2, topRoute3], { a: [1, 3], b: [2, 4], c: [9] }, {}))
                    .toEqual([{ url: 'a', authorizedRoles: [1, 3] }, { url: 'b', authorizedRoles: [2, 4] }, { url: 'c', authorizedRoles: [9] }]);
            });

            it('should add authorized roles to links', () => {

                const link1 = {  url: 'a', openNewTab: true };
                const link2 = {  url: 'b', openNewTab: false };
                const link3 = {  url: 'c', openNewTab: true };

                const topRoute = [{ url: '', menuColumns: [{ subMenus: [{ links: [link1, link2, link3] }] }] }];

                expect(service.getMegaMenuNavRoutesWithAuthorizedRoles(topRoute, { a: [1, 3], b: [2, 4], c: [9] }, { selfTarget: 'self', openTabTarget: 'openTabTarget' })).
                    toEqual([{
                        url: '',
                        authorizedRoles: ['anonymous'],
                        menuColumns: [{
                            subMenus: [{
                                links: [
                                    { url: 'a', openNewTab: true, target: 'openTabTarget', authorizedRoles: [1, 3] },
                                    { url: 'b', openNewTab: false, target: 'self', authorizedRoles: [2, 4] },
                                    { url: 'c', openNewTab: true, target: 'openTabTarget', authorizedRoles: [9] }]
                            }]
                        }]
                    }]);
            });
        });

        describe('getMegaMenu', () => {
            let responseErrorServiceSpy;

            beforeEach(angular.mock.module(($provide: angular.auto.IProvideService) => {
                
                const mockedResponseErrorService = hctraMocks.responseErrorService();

                $provide.value('responseErrorService', mockedResponseErrorService);
                
                responseErrorServiceSpy = spyOn(mockedResponseErrorService, 'displayAlertsFromResponse');
            }));

            beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

                service = $injector.get<HCTRA.Service.DesktopMenuRouteService>('desktopMenuRouteService');
            }));
                        
            it('should call aresponseErrorService.displayAlertsFromResponse with correct argument', () => {

                service.getMegaMenu('response');

                expect(responseErrorServiceSpy).toHaveBeenCalledWith('response');
            });

            it('should return response.navBar when no error', () => {

                expect(service.getMegaMenu({ navBar: ['navBar']})).toEqual(['navBar']);
            });

            it('should return empty Array when error', () => {

                expect(service.getMegaMenu({ navBar: ['navBar'], errors: 'some error'})).toEqual([]);
            });
        });
    });
})();