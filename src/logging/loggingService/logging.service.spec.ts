import { UIRouterGlobals } from '@uirouter/core';
import { ThirdPartyDowngrades } from 'common/thirdPartyDowngrades';
import { } from 'jasmine';
import { LoggingService } from './logging.service';


describe('loggingService', () => {

    let service: LoggingService;
    let $window: jasmine.SpyObj<Window>;
    let thirdPartyDowngrades: ThirdPartyDowngrades;
    let uiRouterGlobals: UIRouterGlobals;
    let serverConstants;
    let environmentConfig;

    beforeEach(() => {

        $window = jasmine.createSpyObj('$window', ['alert', 'fetch'], ['location', 'document']);
        (Object.getOwnPropertyDescriptor($window, 'location').get as jasmine.Spy).and.returnValue({ href: 'fake href' });
        thirdPartyDowngrades = {
            Sniffr: jasmine.createSpyObj('sniffrjs', [], ['os', 'browser', 'device'])
        } as ThirdPartyDowngrades;
        (Object.getOwnPropertyDescriptor(thirdPartyDowngrades.Sniffr, 'os').get as jasmine.Spy).and.returnValue({
            name: 'fake os name', versionString: 'fake os version'
        });
        (Object.getOwnPropertyDescriptor(thirdPartyDowngrades.Sniffr, 'browser').get as jasmine.Spy).and.returnValue({
            name: 'fake browser name', versionString: 'fake browser version'
        });
        (Object.getOwnPropertyDescriptor(thirdPartyDowngrades.Sniffr, 'device').get as jasmine.Spy).and.returnValue({
            name: 'fake device name', versionString: 'fake device version'
        });

        uiRouterGlobals = {
            current: {
                name: 'fake current state'
            }
        } as UIRouterGlobals;
        serverConstants = {
            currentlyDownloadedWebUiVersion: 'fake version'
        };
        environmentConfig = {
            angularExPopUpEnabled: 'true'
        };

        service = new LoggingService(
            $window,
            thirdPartyDowngrades,
            serverConstants,
            environmentConfig,
            uiRouterGlobals);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('logMessage', () => {
        it('should call internal other logging call', () => {
            spyOn(service, 'logException');

            service.logMessage('fake message');

            expect(service.logException).toHaveBeenCalledWith(new Error('fake message'));
        });
    });

    describe('logException', () => {
        beforeEach(() => {
            spyOn(service as any, 'httpPostLog').and.callFake(() => { });
        });

        it('should call string length check', () => {
            spyOn(service as any, 'checkStringLengthsAndEraseIfNeeded').and.callThrough();

            service.logException(new Error('fake error'));

            expect(service['checkStringLengthsAndEraseIfNeeded']).toHaveBeenCalledTimes(1);
        });

        it('should call the post ajax with proper url', () => {
            service.logException(new Error('fake error'));

            expect(service['httpPostLog']).toHaveBeenCalledWith(
                'api/sessions/AngularLog/LogAngularExceptions?angularState=fake current state&clientVersion=fake version',
                jasmine.any(Object)
            );
        });

        it('should call the post ajax with proper body data', () => {
            service.logException(new Error('fake error'));

            expect(service['httpPostLog']).toHaveBeenCalledWith(
                jasmine.any(String),
                {
                    url: 'fake href',
                    opSystemName: 'fake os name',
                    opSystemVersion: 'fake os version',
                    browserName: 'fake browser name',
                    browserVersion: 'fake browser version',
                    deviceName: 'fake device name',
                    deviceVersion: 'fake device version',
                    errorMessage: 'fake error',
                    stackTrace: jasmine.any(String)
                }
            );
        });
    });

    describe('httpPostLog', () => {
        it('should make a fetch call', () => {
            spyOn(service as any, 'getCookie').and.returnValue('fake cookie');

            service['httpPostLog']('fake url', { fakeKey: 'fakeValue' });

            expect(service['getCookie']).toHaveBeenCalledTimes(1);
            expect($window.fetch).toHaveBeenCalledWith('fake url', {
                body: '{"fakeKey":"fakeValue"}',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-XSRF-TOKEN': 'fake cookie'
                }
            });
        });
    });

    describe('checkStringLengthsAndEraseIfNeeded', () => {
        it('should shorten the errorMessage', () => {
            const longString = 'a'.repeat(501);

            const exceptionObject = { errorMessage: longString };
            service['checkStringLengthsAndEraseIfNeeded'](exceptionObject);

            expect(exceptionObject.errorMessage.endsWith('|| The rest of this string was cutoff to guard against overflow ||')).toBeTrue();
            expect(exceptionObject.errorMessage.length).toBe(500);
        });

        it('should shorten the stackTrace', () => {
            const longString = 'a'.repeat(501);

            const exceptionObject = { stackTrace: longString };
            service['checkStringLengthsAndEraseIfNeeded'](exceptionObject);

            expect(exceptionObject.stackTrace.endsWith('|| The rest of this string was cutoff to guard against overflow ||')).toBeTrue();
            expect(exceptionObject.stackTrace.length).toBe(500);
        });
    });

    describe('getCookie', () => {
        beforeEach(() => {
            (Object.getOwnPropertyDescriptor($window, 'document').get as jasmine.Spy).and.returnValue({
                cookie: 'fakeCookie=initial;path=/; anotherFake=8965;path=/'
            });
        });

        [
            { key: 'fakeCookie', value: 'initial' },
            { key: 'anotherFake', value: '8965' }
        ].forEach(({ key, value }) => {

            it(`should return ${value} from cookie for key ${key}`, () => {

                expect(service['getCookie'](key)).toEqual(value);
            });
        });
    });
});
