import { TestBed } from '@angular/core/testing';
import { WindowRef } from '../../providers';
import { OperatingSystemSnifferService } from './operatingSystemSniffer.service';

describe('operatingSystemSnifferService', () => {

    let operatingSystemSnifferService: OperatingSystemSnifferService;
    const windowMock = {
        navigator: {
            userAgent: ''
        }
    };

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                OperatingSystemSnifferService,
                {
                    provide: WindowRef,
                    useValue: windowMock
                }
            ]
        });

        operatingSystemSnifferService = TestBed.inject(OperatingSystemSnifferService);
    });

    it('should define service', () => {
        expect(OperatingSystemSnifferService).toBeDefined();
    });

    it('should return desktop', () => {
        windowMock.navigator.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36';
        expect(operatingSystemSnifferService.getOS()).toEqual('desktop');
        expect(operatingSystemSnifferService.isDesktopOs()).toEqual(true);
        expect(operatingSystemSnifferService.getOsFull()).toEqual('windows');
        expect(operatingSystemSnifferService.getDeviceFull()).toEqual(undefined);
    });

    it('should return desktop', () => {
        windowMock.navigator.userAgent = 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1';
        expect(operatingSystemSnifferService.getOS()).toEqual('desktop');
        expect(operatingSystemSnifferService.isDesktopOs()).toEqual(true);
        expect(operatingSystemSnifferService.getOsFull()).toEqual('ios');
        expect(operatingSystemSnifferService.getDeviceFull()).toEqual('iPad');
    });

    it('should return desktop', () => {
        windowMock.navigator.userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36';
        expect(operatingSystemSnifferService.getOS()).toEqual('desktop');
        expect(operatingSystemSnifferService.isDesktopOs()).toEqual(true);
        expect(operatingSystemSnifferService.getOsFull()).toEqual('linux');
        expect(operatingSystemSnifferService.getDeviceFull()).toEqual(undefined);
    });

    it('should return desktop', () => {
        windowMock.navigator.userAgent = 'Mozilla/5.0 (X11; CrOS x86_64 15359.58.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.134 Safari/537.36';
        expect(operatingSystemSnifferService.getOS()).toEqual('desktop');
        expect(operatingSystemSnifferService.isDesktopOs()).toEqual(true);
        expect(operatingSystemSnifferService.getOsFull()).toEqual('chrome os');
        expect(operatingSystemSnifferService.getDeviceFull()).toEqual(undefined);
    });

    it('should return mobile', () => {
        windowMock.navigator.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';
        expect(operatingSystemSnifferService.getOS()).toEqual('mobile');
        expect(operatingSystemSnifferService.isDesktopOs()).toEqual(false);
        expect(operatingSystemSnifferService.getOsFull()).toEqual('ios');
        expect(operatingSystemSnifferService.getDeviceFull()).toEqual('iPhone');
    });
});



