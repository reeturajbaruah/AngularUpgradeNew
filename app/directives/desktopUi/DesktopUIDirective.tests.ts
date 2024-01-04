(() => {
     'use strict';

     describe('directive: desktop-ui', () => {

        beforeEach(angular.mock.module('HCTRATemplates'));
        beforeEach(angular.mock.module('HCTRAModule'));

        let scope;
        let element;
        let directive: HCTRA.Directive.DesktopUiDirective;

        let $window;
        let $timeout;
        let $transitions;
        let $transitionsCapturedFunc;
        
        beforeEach(angular.mock.module(() => {
    
            $window = jasmine.createSpy('$window');
            $timeout = jasmine.createSpy('$timeout').and.callFake((fn, delay) => { return setTimeout(fn, delay); });
            $timeout.cancel = jasmine.createSpy('cancel').and.callFake((timeoutPromise) => { clearTimeout(timeoutPromise); });
            $transitions = jasmine.createSpyObj('$transitions', ['onSuccess']);
            $transitions.onSuccess.and.callFake((obj, capturedFunc) => {
                $transitionsCapturedFunc = capturedFunc;
            });
        }));

        beforeEach(angular.mock.inject(($rootScope: angular.IRootScopeService,
            $templateCache: angular.ITemplateCacheService,
            $compile: angular.ICompileService) => {

            scope = $rootScope.$new();

            $templateCache.put('/app/directives/desktopUi/DesktopUiTemplate.html',
                $templateCache.get('app/directives/desktopUi/DesktopUiTemplate.html'));
            element = angular.element('<div desktop-ui></div>');
            $compile(element)(scope);
            scope.$digest();

            directive = new HCTRA.Directive.DesktopUiDirective(null, $window, $timeout, $transitions);
        }));


        describe('link', () => {
            beforeEach(() => {
                spyOn(directive as any, 'modifyStateForRefresh');
                spyOn(directive as any, 'modifySiteForRefresh');
                spyOn(directive as any, 'resize');
            });

            [
                true,
                null,
                '',
                0,
                {}
            ].forEach((definedVal) => {
                it('should resize when force full screen is an attribute', () => {
                    let listenerResizeFn: () => void;
                    spyOn(angular as any, 'element').and.returnValue({
                        resize: (resizeFn) => { listenerResizeFn = resizeFn; }
                    });

                    directive.link(scope, element, { forceFullscreen: definedVal });

                    expect(angular.element).toHaveBeenCalledTimes(1);
                    expect(angular.element).toHaveBeenCalledWith($window);
                    expect(directive["resize"]).toHaveBeenCalledTimes(1);
                    listenerResizeFn();
                    expect(directive["resize"]).toHaveBeenCalledTimes(2);
                });
            });

            it('should ignore resize when force full screen is not an attribute', () => {
                spyOn(angular as any, 'element');

                directive.link(scope, element, { forceFullscreen: undefined });

                expect(angular.element).toHaveBeenCalledTimes(0);
                expect(directive["resize"]).toHaveBeenCalledTimes(0);
            });

            it('should call edge-to-edge page modification function', () => {
                directive.link(scope, element, {});
                $transitionsCapturedFunc({ to: () => ({ name: 'fakeState' }) });

                expect(directive['modifyStateForRefresh']).toHaveBeenCalledTimes(1);
                expect(directive['modifyStateForRefresh']).toHaveBeenCalledWith({ name: 'fakeState' });
                expect(directive['modifySiteForRefresh']).toHaveBeenCalledTimes(1);
            });
        });

        describe('resize', () => {
            it('should try to resize the given element to the window size', () => {
                const fakeHeightSpyReturn = {};
                const fakeWidthSpyReturn = {};
                const windowHeightSpy = jasmine.createSpy('height').and.returnValue(fakeHeightSpyReturn);
                const windowWidthSpy = jasmine.createSpy('width').and.returnValue(fakeWidthSpyReturn);
                spyOn(angular as any, 'element').and.returnValue({
                    height: windowHeightSpy,
                    width: windowWidthSpy
                });
                const elementParamSpy = jasmine.createSpyObj('element', ['outerHeight', 'outerWidth']);

                directive['resize'](elementParamSpy);

                expect(angular.element).toHaveBeenCalledTimes(1);
                expect(angular.element).toHaveBeenCalledWith($window);
                expect(elementParamSpy.outerHeight).toHaveBeenCalledTimes(1);
                expect(elementParamSpy.outerHeight).toHaveBeenCalledWith(fakeHeightSpyReturn);
                expect(windowHeightSpy).toHaveBeenCalledTimes(1);
                expect(elementParamSpy.outerWidth).toHaveBeenCalledTimes(1);
                expect(elementParamSpy.outerWidth).toHaveBeenCalledWith(fakeWidthSpyReturn);
                expect(windowWidthSpy).toHaveBeenCalledTimes(1);
            });
        });

        describe('modifySiteForRefresh', () => {
            it('should modify some common top level DOM elements if edge-to-edge is enabled', () => {
                const angularElementSpy = jasmine.createSpyObj('angularElementSpy', ['css', 'removeClass', 'on']);
                spyOn(angular as any, 'element').and.returnValue(angularElementSpy);
                $window.outerWidth = 767;

                directive['modifySiteForRefresh']();

                expect(angularElementSpy.css).toHaveBeenCalledWith('margin-top', '54px');
            });

            it('should add listeners for mobile header if edge-to-edge is enabled', () => {
                const angularElementSpy = jasmine.createSpyObj('angularElementSpy', ['css', 'removeClass', 'on']);
                spyOn(angular as any, 'element').and.returnValue(angularElementSpy);
                $window.pageYOffset = 1;

                directive['modifySiteForRefresh']();

                expect(directive['prevScrollPos']).toEqual(1);
                expect(angularElementSpy.on).toHaveBeenCalledWith('scroll', jasmine.any(Function));
                expect(angularElementSpy.on).toHaveBeenCalledWith('resize', jasmine.any(Function));

            });
        });

        describe('modifyStateForRefresh', () => {

             it('should modify every state dependent on hybrid flag: true', () => {
                const spies = {};
                
                spyOn(angular as any, 'element').and.callFake(selector => {

                    spies[selector] = jasmine.createSpyObj('angularElementSpy', ['css', 'addClass', 'attr']);
                    if (selector === '.storefrontSmallButton.exit-button') {
                        spies[selector].attr.and.returnValue('fakeStyles');
                    }
                    return spies[selector];
                });

                directive['modifyStateForRefresh']({ settings: { isHybrid: true } });

                expect(spies['body'].css).toHaveBeenCalledTimes(1);
                expect(spies['#desktopUiViewRoot'].css).toHaveBeenCalledTimes(2);

                expect(spies['body'].css).toHaveBeenCalledWith('margin-bottom', '0px');
                expect(spies['#desktopUiViewRoot'].css).toHaveBeenCalledWith('margin-top', '0px');
                expect(spies['#desktopUiViewRoot'].css).toHaveBeenCalledWith('background-color', '#ffffff');
                expect(spies['.storefrontFullSite'].css).toHaveBeenCalledWith('padding-bottom', '0px');
                expect(spies['.storefrontFullSite'].css).toHaveBeenCalledWith('background-color', '');
                expect(spies['.storefrontSmallButton.exit-button'].css).toHaveBeenCalledWith('border', 'none');
                expect(spies['.storefrontSmallButton.exit-button'].css).toHaveBeenCalledWith('float', 'unset');
                expect(spies['.storefrontSmallButton.exit-button'].css).toHaveBeenCalledWith('margin-left', 'unset');
                expect(spies['.storefrontSmallButton.exit-button'].attr).toHaveBeenCalledWith('style');
                expect(spies['.storefrontSmallButton.exit-button'].attr).toHaveBeenCalledWith('style', 'fakeStyles;background-color: #611eb8 !important;');
            
        
             });

             it('should modify every state dependent on hybrid flag: true', () => {
                const angularElementSpy = jasmine.createSpyObj('angularElementSpy', ['css', 'addClass', 'attr']);
                spyOn(angular as any, 'element').and.returnValue(angularElementSpy);

                directive['modifyStateForRefresh']({ settings: { isHybrid: true } });

                expect(angular.element).toHaveBeenCalledWith('body');
                expect(angular.element).toHaveBeenCalledWith('#top-menu-container');
                expect(angular.element).toHaveBeenCalledWith('#footer-content-container > div');
                expect(angular.element).toHaveBeenCalledWith('#desktopUiViewRoot');
                expect(angular.element).toHaveBeenCalledWith('[device-type=\'desktop\'] .footerCopyright div p');
                expect(angularElementSpy.css).toHaveBeenCalledWith('background-color', '#ffffff');
                expect(angularElementSpy.css).toHaveBeenCalledWith('padding-bottom', '4px');
                expect(angularElementSpy.css).toHaveBeenCalledWith('color', '#ffffff');
                expect(angularElementSpy.addClass).toHaveBeenCalledWith('refresh-hybrid-background');
                expect(angularElementSpy.addClass).toHaveBeenCalledWith('refresh-hybrid-container');
                expect(angularElementSpy.addClass).toHaveBeenCalledWith('refresh-hybrid-container');
             });

            [
                { settings: { isHybrid: false } },
                { settings: {} },
                {}
            ].forEach((invalidSettings: any) => {
                 it('should modify every state dependent on hybrid flag: false', () => {
                    const angularElementSpy = jasmine.createSpyObj('angularElementSpy', ['css', 'removeClass', 'attr']);
                    spyOn(angular as any, 'element').and.returnValue(angularElementSpy);

                    directive['modifyStateForRefresh'](invalidSettings);

                    expect(angular.element).toHaveBeenCalledWith('body');
                    expect(angular.element).toHaveBeenCalledWith('#top-menu-container');
                    expect(angular.element).toHaveBeenCalledWith('#footer-content-container > div');
                    expect(angular.element).toHaveBeenCalledWith('#desktopUiViewRoot');
                    expect(angular.element).toHaveBeenCalledWith('[device-type=\'desktop\'] .footerCopyright div p');
                    expect(angularElementSpy.css).toHaveBeenCalledWith('background-color', '');
                    expect(angularElementSpy.css).toHaveBeenCalledWith('padding-bottom', '');
                    expect(angularElementSpy.css).toHaveBeenCalledWith('color', '');
                    expect(angularElementSpy.removeClass).toHaveBeenCalledWith('refresh-hybrid-background');
                    expect(angularElementSpy.removeClass).toHaveBeenCalledWith('refresh-hybrid-container');
                    expect(angularElementSpy.removeClass).toHaveBeenCalledWith('refresh-hybrid-container');
                 });
             });
        });

        describe('mobileTopHeaderOnScroll', () => {
            it('should update previous scroll position', () => {
                const elementSpy = jasmine.createSpyObj('angularElementSpy', ['hasClass', 'removeClass', 'addClass']);
                spyOn(angular as any, 'element').and.returnValue(elementSpy);
                $window.pageYOffset = 0;
                directive['prevScrollPos'] = 1;

                directive['mobileTopHeaderOnScroll']();

                expect(angular.element).toHaveBeenCalledTimes(1);
                expect(directive['prevScrollPos']).toEqual(0);
            });

            it('should stick mobile header to the top AT TOP', () => {
                const elementSpy = jasmine.createSpyObj('angularElementSpy', ['hasClass', 'removeClass', 'addClass']);
                spyOn(angular as any, 'element').and.returnValue(elementSpy);
                $window.pageYOffset = -10;
                directive['prevScrollPos'] = 2;

                directive['mobileTopHeaderOnScroll']();

                expect(angular.element).toHaveBeenCalledWith('#hctra-header.header');
                expect(elementSpy.removeClass).toHaveBeenCalledWith('header--hidden');
            });

            [
                true,
                false
            ].forEach((elementHasClass) => {
                it('should stick mobile header to the top SCROLLING UP', () => {
                    const elementSpy = jasmine.createSpyObj('angularElementSpy', ['hasClass', 'removeClass', 'addClass']);
                    (elementSpy.hasClass as jasmine.Spy).and.returnValue(elementHasClass);
                    spyOn(angular as any, 'element').and.returnValue(elementSpy);
                    $window.pageYOffset = 10;
                    directive['prevScrollPos'] = 15;

                    directive['mobileTopHeaderOnScroll']();

                    expect(angular.element).toHaveBeenCalledWith('#hctra-header.header');
                    if (elementHasClass) {
                        expect(elementSpy.removeClass).toHaveBeenCalledWith('header--hidden');
                    } else {
                        expect(elementSpy.removeClass).not.toHaveBeenCalled();

                    }
                });
            });

            it('should hide mobile header above the top SCROLLING DOWN', () => {
                const elementSpy = jasmine.createSpyObj('angularElementSpy', ['hasClass', 'removeClass', 'addClass']);
                spyOn(angular as any, 'element').and.returnValue(elementSpy);
                $window.pageYOffset = 15;
                directive['prevScrollPos'] = 10;

                directive['mobileTopHeaderOnScroll']();

                expect(angular.element).toHaveBeenCalledWith('#hctra-header.header');
                expect(elementSpy.addClass).toHaveBeenCalledWith('header--hidden');
            });
        });

        describe('topHeaderOnResize', () => {
            it('should ensure mobile header shows if in mobile view', () => {
                const elementSpy = jasmine.createSpyObj('angularElementSpy', ['css', 'removeClass']);
                spyOn(angular as any, 'element').and.returnValue(elementSpy);
                $window.outerWidth = 1;

                directive['topHeaderOnResize']();

                expect(angular.element).toHaveBeenCalledWith('#hctra-header');
                expect(elementSpy.removeClass).toHaveBeenCalledWith('header--hidden');
                expect(angular.element).toHaveBeenCalledWith('#special-redesign');
                expect(elementSpy.css).toHaveBeenCalledWith('margin-top', '54px');
            });

            [
                768,
                4000
            ].forEach((windowWidth) => {
                it('should ensure no extra top margin on the container in desktop view', () => {
                    const cssSpy = jasmine.createSpyObj('angularElementSpy', ['css', 'removeClass']);
                    spyOn(angular as any, 'element').and.returnValue(cssSpy);
                    $window.outerWidth = windowWidth;

                    directive['topHeaderOnResize']();

                    expect(angular.element).toHaveBeenCalledTimes(1);
                    expect(angular.element).toHaveBeenCalledWith('#special-redesign');
                    expect(cssSpy.css).toHaveBeenCalledTimes(1);
                    expect(cssSpy.css).toHaveBeenCalledWith('margin-top', '0');
                });
            });
        });

        // describe('throttle', () => {
        //     it('should allow for function throttling', () => {
        //         const spyObj = jasmine.createSpyObj('spyObj', ['foobar']);

        //         const throttleFunc = directive['throttle'](spyObj.foobar, 200);

        //         throttleFunc();
        //         expect(spyObj.foobar).toHaveBeenCalledTimes(1);

        //         return new Promise((resolve) => setTimeout(resolve, 100)).then(() => {
        //             throttleFunc();
        //             expect(spyObj.foobar).toHaveBeenCalledTimes(1);
        //             return new Promise((resolve) => setTimeout(resolve, 200)).then(() => {
        //                 // The foobar function would've been called once via the set delay already at this point
        //                 throttleFunc();
        //                 expect(spyObj.foobar).toHaveBeenCalledTimes(3);
        //             });
        //         });
        //     });
        // });
     });

})();