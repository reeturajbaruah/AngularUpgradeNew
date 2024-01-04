import { } from 'jasmine';
import { CookieService } from '../cookieService/cookie.service';


describe('cookieService', () => {

    let service: CookieService;

    beforeEach(() => {

        document.cookie = 'fakeCookie=initial;path=/';
        document.cookie = 'anotherFake=8965;path=/';

        service = new CookieService(window);
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('get', () => {

        [
            { key: 'fakeCookie', value: 'initial' },
            { key: 'anotherFake', value: '8965' }
        ].forEach(({ key, value }) => {

            it(`should return ${value} from cookie for key ${key}`, () => {

                expect(service.get(key)).toEqual(value);
            });
        });        
    });

    describe('set', () => {

        it(`should set value for provided key`, () => {

            service.put('newFake', 5678);
            expect(document.cookie.includes('newFake=5678')).toBe(true);
        });


        it(`should replace existing value with new value`, () => {

            expect(document.cookie.includes('fakeCookie=initial')).toBe(true);

            service.put('fakeCookie', 9482);
            expect(document.cookie.includes('fakeCookie=initial')).toBe(false);
            expect(document.cookie.includes('fakeCookie=9482')).toBe(true);
        });
    });
});
