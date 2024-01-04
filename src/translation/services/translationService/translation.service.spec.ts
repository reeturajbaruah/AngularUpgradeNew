import { ElementRef, NgZone } from '@angular/core';
import { HttpService, ResponseErrorService } from 'common/services';
import { WebStorageConst } from 'constants/module';
import { } from 'jasmine';
import { LoggingService } from 'logging/module';
import { TranslationServiceImplemented } from './translation.service';


describe('service: TranslationServiceImplemented', () => {

    let service: TranslationServiceImplemented;
    let webStorageConst: WebStorageConst;
    let webStorage;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let httpService: any;
    let ngZone: NgZone;
    let window;
    let loggingService: jasmine.SpyObj<LoggingService>;
    let operatingSystemSnifferService;
    let isReadyObserver;

    beforeEach(async () => {

        webStorageConst = new WebStorageConst();
        webStorage = jasmine.createSpyObj('webStorage', ['setKeyValue', 'removeEntry', 'getValue']);
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayErrorsFromResponse']);
        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);
        ngZone = jasmine.createSpyObj('ngZone', ['runOutsideAngular']);
        window = jasmine.createSpyObj('window', ['addEventListener', 'removeEventListener']);
        window.localStorage = {};
        window.location = { search: ''};
        loggingService = jasmine.createSpyObj('loggingService', ['logMessage']);
        (ngZone.runOutsideAngular as jasmine.Spy).and.callFake((fn: (() => any)) => fn());
        operatingSystemSnifferService = jasmine.createSpyObj('operatingSystemSnifferService', ['isDesktopOs']);

        service = new TranslationServiceImplemented(
            webStorage, httpService, responseErrorService, loggingService, webStorageConst, ngZone, window, operatingSystemSnifferService);

        isReadyObserver = jasmine.createSpy('isReadyObserver');
    });


    describe('canary', () => {
        it('should pass', () => {
            expect(service).toBeDefined();
        });
    });

    describe('isAvailable', () => {

        [
            { isDesktop: false, webMobileViewEnabled: false },
            { isDesktop: false, webMobileViewEnabled: true },
            { isDesktop: true, webMobileViewEnabled: false },
            { isDesktop: true, webMobileViewEnabled: true },
        ].forEach(({ isDesktop, webMobileViewEnabled }) => {

            it('should return false when translationEnabled false', () => {

                operatingSystemSnifferService.isDesktopOs.and.returnValue(isDesktop);

                expect(service.isAvailable({
                    webMobileViewEnabled,
                    translationEnabled: false,
                    errors: [],
                    alerts: [],
                    exception: null,
                    sessionTimedOut: false,
                    accountStatus: null
                })).toBe(false);
            });
        });

        [true, false].forEach(webMobileViewEnabled => {

            it('should return true when translationEnabled and isDesktop', () => {

                operatingSystemSnifferService.isDesktopOs.and.returnValue(true);

                expect(service.isAvailable({
                    webMobileViewEnabled,
                    translationEnabled: true,
                    errors: [],
                    alerts: [],
                    exception: null,
                    sessionTimedOut: false,
                    accountStatus: null
                })).toBe(true);
            });
        });

        [true, false].forEach(webMobileViewEnabled => {

            it('should return webMobileViewEnabled when translationEnabled and not isDesktop', () => {

                operatingSystemSnifferService.isDesktopOs.and.returnValue(false);

                expect(service.isAvailable({
                    webMobileViewEnabled,
                    translationEnabled: true,
                    errors: [],
                    alerts: [],
                    exception: null,
                    sessionTimedOut: false,
                    accountStatus: null
                })).toBe(webMobileViewEnabled);
            });
        });
    });

    describe('setFeatureToggleValues', () => {

        it('should get encoding regex from feature toggle', async () => {
            //Assemble
            responseErrorService.isErrorFree.and.returnValue(true);
            const fakeResponse = {
                supportedLanguages: [], translationEnabled: true, webLoggingEnabled: true, errors: [],
                specialCharacterEncoding: '[%&]'
            };
            (httpService.get as jasmine.Spy).and.resolveTo(fakeResponse);
            spyOn(service, 'isAvailable').and.returnValue(true);

            //Act
            await service.setFeatureToggleValues();

            //Assert
            expect(service['specialCharacterRegex'].toString()).toEqual('/[%&]/gi');
        });
        it('should default encoding regex if no feature toggle available', async () => {
            //Assemble
            responseErrorService.isErrorFree.and.returnValue(true);
            const fakeResponse = {
                supportedLanguages: [], translationEnabled: true, webLoggingEnabled: true, errors: [],
                specialCharacterEncoding: null
            };
            (httpService.get as jasmine.Spy).and.resolveTo(fakeResponse);
            spyOn(service, 'isAvailable').and.returnValue(true);

            //Act
            await service.setFeatureToggleValues();

            //Assert
            expect(service['specialCharacterRegex'].toString()).toEqual('/[%]/gi');
        });

        [
            {
                languages: [
                    { label: 'lang1', code: 'code1', nativeLabel: 'native1', isRtl: false, nativeGeneralExceptionMessage: null },
                    { label: 'lang2', code: 'code2', nativeLabel: 'native2', isRtl: false, nativeGeneralExceptionMessage: null },
                    { label: 'lang3', code: 'code3', nativeLabel: 'native3', isRtl: false, nativeGeneralExceptionMessage: null },
                    { label: 'lang4', code: 'code4', nativeLabel: 'native4', isRtl: true, nativeGeneralExceptionMessage: null }
                ],
                isAvailable: true, webLoggingEnabled: true
            },
            {
                languages: [
                    { label: 'lang11', code: 'code11', nativeLabel: 'native11', isRtl: false, nativeGeneralExceptionMessage: null },
                    { label: 'lang22', code: 'code22', nativeLabel: 'native22', isRtl: false, nativeGeneralExceptionMessage: null },
                    { label: 'lang33', code: 'code33', nativeLabel: 'native33', isRtl: false, nativeGeneralExceptionMessage: null },
                    { label: 'lang44', code: 'code44', nativeLabel: 'native4', isRtl: true, nativeGeneralExceptionMessage: null }
                ],
                isAvailable: false, webLoggingEnabled: false
            },
            {
                languages: [
                    { label: 'lang111', code: 'code11', nativeLabel: 'native11', isRtl: false, nativeGeneralExceptionMessage: null },
                    { label: 'lang222', code: 'code22', nativeLabel: 'native22', isRtl: false, nativeGeneralExceptionMessage: null },
                    { label: 'lang333', code: 'code33', nativeLabel: 'native33', isRtl: false, nativeGeneralExceptionMessage: null },
                    { label: 'lang444', code: 'code44', nativeLabel: 'native4', isRtl: true, nativeGeneralExceptionMessage: null }
                ], isAvailable: true, webLoggingEnabled: false
            },
            {
                languages: [
                    { label: 'lang1111', code: 'code11', nativeLabel: 'native11', isRtl: false, nativeGeneralExceptionMessage: null },
                    { label: 'lang2222', code: 'code22', nativeLabel: 'native22', isRtl: false, nativeGeneralExceptionMessage: null },
                    { label: 'lang3333', code: 'code33', nativeLabel: 'native33', isRtl: false, nativeGeneralExceptionMessage: null },
                    { label: 'lang4444', code: 'code44', nativeLabel: 'native4', isRtl: true, nativeGeneralExceptionMessage: null }
                ], isAvailable: false, webLoggingEnabled: true
            }
        ].forEach(({ languages, isAvailable, webLoggingEnabled }) => {

            it(`should set supportedLanguages as ${languages}, isAvailable as ${isAvailable
                } and loggingEnabled as ${webLoggingEnabled} if api response is error free`,
                async () => {
                    //Assemble
                    responseErrorService.isErrorFree.and.returnValue(true);
                    const fakeResponse = {
                        supportedLanguages: languages,
                        translationEnabled: isAvailable,
                        webLoggingEnabled,
                        errors: [],
                        alerts: [],
                        exception: null,
                        sessionTimedOut: false,
                        accountStatus: null
                    };
                    (httpService.get as jasmine.Spy).and.resolveTo(fakeResponse);
                    spyOn(service, 'isAvailable').and.returnValue(isAvailable);

                    //Act
                    await service.setFeatureToggleValues();

                    //Assert
                    expect(service.settings.supportedLanguages).toEqual(languages);
                    expect(service.settings.isAvailable).toEqual(isAvailable);
                    expect(service.settings.loggingEnabled).toEqual(webLoggingEnabled);
                    expect(window.addEventListener).toHaveBeenCalledTimes(isAvailable ? 1 : 0);
                    expect(service.isAvailable).toHaveBeenCalledOnceWith(fakeResponse);
                });
        });

        it('should pass lookForLanguageChange to window.addEventListener', async () => {
            //Assemble
            responseErrorService.isErrorFree.and.returnValue(true);
            spyOn(service, 'isAvailable').and.returnValue(true);
            const fakeResponse = {
                supportedLanguages: [],
                webLoggingEnabled: true,
                errors: [],
                alerts: [],
                exception: null,
                sessionTimedOut: false,
                accountStatus: null
            };
            (httpService.get as jasmine.Spy).and.resolveTo(fakeResponse);
            spyOn(service, 'lookForLanguageChange');

            //Act
            await service.setFeatureToggleValues();
            const listener = (window.addEventListener as jasmine.Spy).calls.argsFor(0)[1] as any;
            listener();

            //Assert
            expect(window.addEventListener).toHaveBeenCalledOnceWith('blur', jasmine.any(Function), undefined);
            expect(service.lookForLanguageChange).toHaveBeenCalledTimes(1);
            expect(service.isAvailable).toHaveBeenCalledOnceWith(fakeResponse);
        });

        it('should not call lookForLanguageChange', async () => {
            //Assemble
            responseErrorService.isErrorFree.and.returnValue(true);
            (httpService.get as jasmine.Spy).and.resolveTo({
                supportedLanguages: [], translationEnabled: false, webLoggingEnabled: true
            });
            spyOn(service, 'lookForLanguageChange');

            //Act
            await service.setFeatureToggleValues();

            //Assert
            expect(window.addEventListener).toHaveBeenCalledTimes(0);
            expect(service.lookForLanguageChange).toHaveBeenCalledTimes(0);
        });

        [
            {
                languages: [
                    { label: 'lang1', code: 'code1', nativeLabel: 'native1' },
                    { label: 'lang2', code: 'code2', nativeLabel: 'native2' },
                    { label: 'lang3', code: 'code3', nativeLabel: 'native3' },
                    { label: 'lang4', code: 'code4', nativeLabel: 'native4' }
                ],
                isAvailable: true, webLoggingEnabled: true
            },
            {
                languages: [
                    { label: 'lang11', code: 'code11', nativeLabel: 'native11' },
                    { label: 'lang22', code: 'code22', nativeLabel: 'native22' },
                    { label: 'lang33', code: 'code33', nativeLabel: 'native33' },
                    { label: 'lang44', code: 'code44', nativeLabel: 'native4' }
                ],
                isAvailable: false, webLoggingEnabled: true
            },
            {
                languages: [
                    { label: 'lang111', code: 'code11', nativeLabel: 'native11' },
                    { label: 'lang222', code: 'code22', nativeLabel: 'native22' },
                    { label: 'lang333', code: 'code33', nativeLabel: 'native33' },
                    { label: 'lang444', code: 'code44', nativeLabel: 'native4' }
                ], isAvailable: true, webLoggingEnabled: false
            },
            {
                languages: [
                    { label: 'lang1111', code: 'code11', nativeLabel: 'native11' },
                    { label: 'lang2222', code: 'code22', nativeLabel: 'native22' },
                    { label: 'lang3333', code: 'code33', nativeLabel: 'native33' },
                    { label: 'lang4444', code: 'code44', nativeLabel: 'native4' }
                ], isAvailable: false, webLoggingEnabled: false
            }

        ].forEach(({ languages, isAvailable, webLoggingEnabled }) => {

            it(`should not set supportedLanguages as ${languages},
                isAvailable as ${isAvailable} and loggingEnabled as ${webLoggingEnabled} if api response has errors`,
                async () => {
                    //Assemble
                    responseErrorService.isErrorFree.and.returnValue(false);

                    //Act
                    await service.setFeatureToggleValues();

                    //Assert
                    expect(service.settings.supportedLanguages).toEqual([]);
                    expect(service.settings.isAvailable).toBeFalsy();
                    expect(service.settings.loggingEnabled).toBeFalsy();
                    expect(window.addEventListener).toHaveBeenCalledTimes(0);
                });
        });

        [{ translationEnabled: true, functionCalledTimes: 1 },
        { translationEnabled: false, functionCalledTimes: 0 }]
            .forEach(({ translationEnabled, functionCalledTimes }) => {

                it(`should call startRealtimeTranslations ${functionCalledTimes} time
                    if translationEnabled ${translationEnabled} & languagePreference not english`
                    , async () => {
                        //Assemble
                        service.isReadyEvent.subscribe(isReadyObserver);
                        isReadyObserver.calls.reset();
                        service.languagePreference = 'Spanish';
                        responseErrorService.isErrorFree.and.returnValue(true);
                        (httpService.get as jasmine.Spy).and.resolveTo({
                            supportedLanguages: [{ label: 'Spanish', isRtl: false, nativeLabel: '', code: '' }],
                            translationEnabled
                        });
                        spyOn(service, 'startRealtimeTranslations').and.callFake(() => { });
                        spyOn(service, 'isAvailable').and.returnValue(translationEnabled);

                        //Act
                        await service.setFeatureToggleValues();

                        //Assert
                        expect(service.startRealtimeTranslations).toHaveBeenCalledTimes(functionCalledTimes);
                        expect(isReadyObserver).toHaveBeenCalledOnceWith(service.settings);
                    });
            });

        it('can pull language pref from query string', async () => {
            //Assemble
            responseErrorService.isErrorFree.and.returnValue(true);
            const fakeResponse = {
                supportedLanguages: [
                    { label: 'lang1', code: 'code1', nativeLabel: 'native1' }
                ],
                translationEnabled: true,
                webLoggingEnabled: false,
                errors: [],
                alerts: [],
                exception: null,
                sessionTimedOut: false,
                accountStatus: null
            };
            (httpService.get as jasmine.Spy).and.resolveTo(fakeResponse);
            spyOn(service, 'isAvailable').and.returnValue(true);
            window.location.search = 'Lang=lang1';
            //Act
            await service.setFeatureToggleValues();

            //Assert
            expect(service.languagePreference).toBe('lang1');
            
        });
    });

    describe('lookForLanguageChange', () => {

        beforeEach(() => {

            spyOn(service, 'stopRealtimeTranslations');
            spyOn(service, 'startRealtimeTranslations');

            service.isReadyEvent.subscribe(isReadyObserver);
            isReadyObserver.calls.reset();
        });

        it('should subscribe to window event focus', () => {

            service.lookForLanguageChange();

            expect(window.addEventListener).toHaveBeenCalledOnceWith('focus', jasmine.any(Function), undefined);
            expect(isReadyObserver).toHaveBeenCalledTimes(0);
            expect(service.stopRealtimeTranslations).toHaveBeenCalledTimes(0);
            expect(service.startRealtimeTranslations).toHaveBeenCalledTimes(0);
            expect(window.removeEventListener).toHaveBeenCalledTimes(0);
        });

        it('should stop translation and start new translation on language changed', () => {

            service.languagePreference = 'English';

            service.lookForLanguageChange();
            window.localStorage[webStorageConst.selectedLanguage] = 'French';
            const listener = (window.addEventListener as jasmine.Spy).calls.argsFor(0)[1] as any;

            listener();

            expect(isReadyObserver).toHaveBeenCalledOnceWith(service.settings);
            expect(service.stopRealtimeTranslations).toHaveBeenCalledTimes(1);
            expect(service.startRealtimeTranslations).toHaveBeenCalledOnceWith('French');
            expect(window.removeEventListener).toHaveBeenCalledOnceWith('focus', listener, undefined);
        });

        it(`should not stop translation and or start new translation when language unchanged`, () => {

            service.languagePreference = 'French';

            service.lookForLanguageChange();
            window.localStorage[webStorageConst.selectedLanguage] = 'French';
            const listener = (window.addEventListener as jasmine.Spy).calls.argsFor(0)[1] as any;

            listener();

            expect(isReadyObserver).toHaveBeenCalledTimes(0);
            expect(service.stopRealtimeTranslations).toHaveBeenCalledTimes(0);
            expect(service.startRealtimeTranslations).toHaveBeenCalledTimes(0);
            expect(window.removeEventListener).toHaveBeenCalledOnceWith('focus', listener, undefined);
        });
    });

    describe('groupRequest', () => {

        it('make single group', () => {
            const content = [
                'never gonna give you up.',
                'never gonna let you down.',
                'never gonna run around and desert you.'
            ];

            const groups = content.reduce(service.groupRequests, []).filter(x => x.size > 0);

            expect(groups.length).toBe(1);
            expect(groups[0].size).toBe(content.join('').length);
            expect(groups[0].payload.length).toBe(3);
            expect(groups[0].payload).toEqual(content);
            expect(groups[0].maxOut).toBeFalsy();
        });

        it('can limit group size', () => {
            const textSize = (service.maxRequestSize / 2) + 1;
            const longStr = (new Array(textSize)).fill('a').join('');
            const content = [longStr, longStr];

            const groups = content.reduce(service.groupRequests, []).filter(x => x.size > 0);

            expect(groups.length).toBe(2);
            expect(groups[0].payload.length).toBe(1);
            expect(groups[1].payload.length).toBe(1);

            expect(groups[0].payload[0]).toBe(longStr);
            expect(groups[1].payload[0]).toBe(longStr);

            expect(groups[0].size).toBe(textSize);
            expect(groups[1].size).toBe(textSize);

            expect(groups[0].maxOut).toBeFalsy();
            expect(groups[1].maxOut).toBeFalsy();
        });

        it('can limit payload size', () => {

            const payloadSize = (service.maxContentSize + 1);
            const content = (new Array(payloadSize)).fill('a');

            const groups = content.reduce(service.groupRequests, []).filter(x => x.size > 0);

            expect(groups.length).toBe(2);
            expect(groups[0].payload.length).toBe(service.maxContentSize);
            expect(groups[1].payload.length).toBe(1);

            expect(groups[0].maxOut).toBeFalsy();
            expect(groups[1].maxOut).toBeFalsy();

        });

        it('can handle max outs', () => {
            const textSize = service.maxRequestSize + 1;
            const longStr = (new Array(textSize)).fill('a').join('');
            const content = [longStr];

            const groups = content.reduce(service.groupRequests, []).filter(x => x.size > 0);

            expect(groups.length).toBe(1);
            expect(groups[0].payload.length).toBe(1);

            expect(groups[0].payload).toEqual(content);

            expect(groups[0].size).toBe(textSize);

            expect(groups[0].maxOut).toBeTruthy();
        });

    });

    describe('localStorage', () => {

        it('can retrieve alternativeStorage if localStorage does not exist', () => {
            window.localStorage = undefined;
            service['alternativeStorage'] = 'alt storage lang';

            expect(service['localStorage']).toBe('alt storage lang');
        });

    });

    describe('languagePreference', () => {

        it('can store preference', () => {

            service.languagePreference = 'Spanish';

            expect(window.localStorage[webStorageConst.selectedLanguage]).toBe('Spanish');
        });

        it('can retrieve preference', () => {
            window.localStorage[webStorageConst.selectedLanguage] = 'French';

            const preference = service.languagePreference;

            expect(preference).toBe('French');
        });

    });

    describe('startRealtimeTranslations', () => {

        beforeEach(() => {

            service.settings.supportedLanguages = [
                { label: 'Spanish', isRtl: false, nativeLabel: '', code: '', nativeGeneralExceptionMessage: null },
                { label: 'Arabic', isRtl: true, nativeLabel: '', code: '', nativeGeneralExceptionMessage: null }
            ];
        });

        it('doesnt run if not available', () => {
            service.settings.isAvailable = false;
            const spy = jasmine.createSpy('realtimetranslationevent');
            service.realTimeTranslationsEvent.subscribe(event => {
                spy();
            });
            service.startRealtimeTranslations('Spanish');
            expect(spy).not.toHaveBeenCalled();
        });

        it('doesnt run if already running', () => {
            service.settings.isAvailable = true;
            const spy = jasmine.createSpy('realtimetranslationevent');
            service.realTimeTranslationsEvent.subscribe(event => {
                spy();
            });
            service.startRealtimeTranslations('Spanish');
            service.startRealtimeTranslations('Spanish');
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('can run', () => {
            service.settings.isAvailable = true;
            const spy = jasmine.createSpy('realtimetranslationevent');
            spyOn(service, 'startNewTranslationSession');
            service.realTimeTranslationsEvent.subscribe(event => {
                expect(event.status).toBe('starting');
                expect(event.startNewSession).toBeDefined();
                const elm = {} as ElementRef<any>;
                event.startNewSession(elm);
                expect(service.startNewTranslationSession).toHaveBeenCalledWith(elm, 'Spanish', false);
                spy();
            });
            service.startRealtimeTranslations('Spanish');

            expect(spy).toHaveBeenCalled();
        });

        it('can run for rtl languages', () => {
            service.settings.isAvailable = true;
            const spy = jasmine.createSpy('realtimetranslationevent');
            spyOn(service, 'startNewTranslationSession');
            service.realTimeTranslationsEvent.subscribe(event => {
                expect(event.status).toBe('starting');
                expect(event.startNewSession).toBeDefined();
                const elm = {} as ElementRef<any>;
                event.startNewSession(elm);
                expect(service.startNewTranslationSession).toHaveBeenCalledWith(elm, 'Arabic', true);
                spy();
            });
            service.startRealtimeTranslations('Arabic');

            expect(spy).toHaveBeenCalled();
        });


    });

    describe('stopRealtimeTranslations', () => {

        [[{}, {}, {}], undefined].forEach((errors) => {

            it('doesnt stop not already running', () => {
                service.isRunning = false;
                const spy = jasmine.createSpy('realtimetranslationevent');
                service.realTimeTranslationsEvent.subscribe(() => {
                    spy();
                });
                service.stopRealtimeTranslations(errors as any);
                expect(spy).not.toHaveBeenCalled();
                expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledTimes(0);
            });
        });

        [
            { errors: [{}, {}, {}], displayErrorsFromResponse: 1 },
            { errors: undefined, displayErrorsFromResponse: 0 }
        ].forEach(({ errors, displayErrorsFromResponse }) => {
            it('can stop', () => {
                const session = jasmine.createSpyObj('session', ['end']);
                service.isRunning = true;
                service.sessions.push(session);

                const spy = jasmine.createSpy('realtimetranslationevent');

                service.realTimeTranslationsEvent.subscribe(event => {
                    expect(event.status).toBe('stopping');
                    expect(event.hasErrored).toBe(errors ? true : false);
                    spy();
                });
                service.stopRealtimeTranslations(errors as any);

                expect(spy).toHaveBeenCalled();
                expect(session.end).toHaveBeenCalled();
                expect(service.sessions.length).toBe(0);
                expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledTimes(displayErrorsFromResponse);
                if (displayErrorsFromResponse) {
                    expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledWith({ errors } as any);
                }
            });
        });

        it('can display native general exception message', async () => {
            const errors = [
                { key: 'General-Exception', message: 'We are unable to process your request at this time' },
                { key: 'ERROR', message: 'ERROR' }
            ];

            const spy = jasmine.createSpy('realtimetranslationevent');

            service.realTimeTranslationsEvent.subscribe(event => {
                expect(event.status).toBe('stopping');
                expect(event.hasErrored).toBeTruthy();
                spy();
            });


            (httpService.get as jasmine.Spy).and.resolveTo({
                supportedLanguages: [{ label: 'Spanish', isRtl: false, nativeLabel: '', code: '', nativeGeneralExceptionMessage: 'TRANSLATED' }],
                translationEnabled: true
            });

            responseErrorService.isErrorFree.and.returnValue(true);

            await service.setFeatureToggleValues();
            const session = jasmine.createSpyObj('session', ['end']);
            service.isRunning = true;
            service.languagePreference = 'Spanish';
            service.sessions.push(session);

            service.stopRealtimeTranslations(errors as any);

            expect(spy).toHaveBeenCalled();
            expect(session.end).toHaveBeenCalled();
            expect(service.sessions.length).toBe(0);
            expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledTimes(1);
            expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledWith({
                errors: [
                    { key: 'General-Exception', message: 'TRANSLATED' },
                    { key: 'ERROR', message: 'ERROR' }
                ]
            } as any);

        });

    });

    describe('sendRequest', () => {

        beforeEach(() => {

            spyOn(service, 'log');
        });

        it('should call service.log on errors and throw response.errors when errors', async () => {

            httpService.post.and.returnValue(Promise.resolve({ errors: [1, 2, 3] }));

            await expectAsync(service.sendRequest('fakeLang', [])).toBeRejectedWith([1, 2, 3]);

            expect(service.log).toHaveBeenCalledOnceWith('fakeLang', 'Aborting Translation: [1,2,3]');
        });


        it('should return translated content when no errors', async () => {

            httpService.post.and.returnValue(Promise.resolve({ errors: [], translatedContent: ['Translation', 'Fake'] }));

            await expectAsync(service.sendRequest('fakeLang', [])).toBeResolvedTo(['Translation', 'Fake']);

            expect(service.log).toHaveBeenCalledTimes(0);
        });

        it('should encode content before send', async () => {

            spyOn(service, 'encodeContent').and.callFake(htmlContent => `Decoded: ${htmlContent}`);

            httpService.post.and.returnValue(Promise.resolve({ errors: [], translatedContent: [] }));

            await service.sendRequest('fakeLang', ['Translation', 'Fake']);

            expect(service.encodeContent).toHaveBeenCalledTimes(2);
            expect(httpService.post).toHaveBeenCalledWith('/api/translation/fakeLang', {
                englishContent: ['Decoded: Translation', 'Decoded: Fake']
            }, false);
        });
    });

    describe('translator', () => {

        beforeEach(() => {
            spyOn(service, 'log').and.returnValue(Promise.resolve());
        });

        it('can send request', async () => {

            spyOn(service, 'sendRequest').and.callFake((langCode, text) => Promise.resolve(text.map(x => `~${x}`)));

            const content = [
                'never gonna give you up.',
                'never gonna let you down.',
                'never gonna run around and desert you.'
            ];

            const response = await service.translator('Spanish', content);
            expect(response).toEqual(content.map(x => `~${x}`));
            expect(service.log).toHaveBeenCalledTimes(0);
        });

        it('can handle max outs', async () => {

            spyOn(service, 'sendRequest').and.callFake((langCode, text) => Promise.resolve(text.map(x => `~${x}`)));

            const content = [
                (new Array(service.maxRequestSize + 1)).fill('a').join(''), //maxout
                'b'
            ];

            const response = await service.translator('Spanish', content);
            expect(response.length).toBe(2);
            expect(response[0]).toBe(content[0]);//so, not translated!
            expect(response[1]).toBe('~b');

            expect(service.sendRequest).toHaveBeenCalledTimes(1);
            expect(service.sendRequest).toHaveBeenCalledWith('Spanish', ['b']);

            expect(service.log).toHaveBeenCalledOnceWith('Spanish', 'content maxout during translation: size - 30001');
        });

    });

    describe('startNewTranslationSession', () => {

        it('starts new session', () => {

            const mockSession = jasmine.createSpyObj('TranslationSession', ['start']);
            spyOn(service, 'createSession').and.returnValue(mockSession);

            expect(service.sessions.length).toBe(0);

            const elmRef = { nativeElement: {} };
            service.startNewTranslationSession(elmRef, 'Spanish');

            expect(service.sessions.length).toBe(1);
            expect(service.createSession).toHaveBeenCalledWith(jasmine.any(Function), jasmine.any(Function), elmRef, ngZone, window);

            expect(mockSession.start).toHaveBeenCalledWith('Spanish', false);
        });

        it('passes translator function to session', async () => {

            const mockSession = jasmine.createSpyObj('TranslationSession', ['start']);
            spyOn(service, 'createSession').and.returnValue(mockSession);
            spyOn(service, 'translator').and.callFake((lang, content) => Promise.resolve(content));

            const elmRef = { nativeElement: {} };
            service.startNewTranslationSession(elmRef, 'Spanish');

            const func = (service.createSession as jasmine.Spy).calls.argsFor(0)[0] as any;

            await func('test', ['content']);

            expect(service.translator).toHaveBeenCalledWith('test', ['content']);
        });

        it('stops translation if sessions translator function throws an exception', async () => {

            const mockSession = jasmine.createSpyObj('TranslationSession', ['start']);
            spyOn(service, 'createSession').and.returnValue(mockSession);
            spyOn(service, 'translator').and.callFake((lang, content) => Promise.reject([1, 2, 3]));
            spyOn(service, 'stopRealtimeTranslations');

            const elmRef = { nativeElement: {} };
            service.startNewTranslationSession(elmRef, 'Spanish');

            const func = (service.createSession as jasmine.Spy).calls.argsFor(0)[0] as any;

            await func('test', ['content']);

            expect(service.stopRealtimeTranslations).toHaveBeenCalledOnceWith([1, 2, 3] as any);

        });

        it('passes log function to session', async () => {

            const mockSession = jasmine.createSpyObj('TranslationSession', ['start']);
            spyOn(service, 'createSession').and.returnValue(mockSession);
            spyOn(service, 'log');

            const elmRef = { nativeElement: {} };
            service.startNewTranslationSession(elmRef, 'Spanish');

            const func = (service.createSession as jasmine.Spy).calls.argsFor(0)[1] as any;

            func('test message');

            expect(service.log).toHaveBeenCalledWith('Spanish', 'test message');
        });
    });

    describe('log', () => {

        it('should call logginService.logMessage when loggingEnabled', async () => {

            service.settings.loggingEnabled = true;

            await service.log('English', 'Oh no!');

            expect(loggingService.logMessage).toHaveBeenCalledOnceWith('Translation Log\nLanguage: English\nOh no!');
        });
    });

    describe('encodeContent', () => {
        it('encodes html content', () => {
            service['specialCharacterRegex'] = /[%]/ig;
            const result = service.encodeContent('<span>60% of the time, works every time.</span>');
            expect(result).toEqual('<span>60&#x25; of the time, works every time.</span>');
        });
    });

    describe('getLanguagePreferenceFromQuerystring', () => {

        it('can parse key from query string', () => {

            window.location.search = 'test1=abc&key=xyz';

            const result = service['getLanguagePreferenceFromQuerystring']('key');

            expect(result).toBe('xyz');
        });

        it('missing key from query string is falsy', () => {

            window.location.search = 'test1=abc';

            const result = service['getLanguagePreferenceFromQuerystring']('key');

            expect(result).toBeFalsy();
        });

    });
});
