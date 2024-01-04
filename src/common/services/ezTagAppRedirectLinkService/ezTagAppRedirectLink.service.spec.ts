import { } from 'jasmine';

import { EzTagAppRedirectLinkService } from './ezTagAppRedirectLink.service';
import { wait } from 'common/utilities';


describe('EzTagAppRedirectLinkService', () => {

    let service: EzTagAppRedirectLinkService;
    let environmentConfig: {
        mappEzTagIOSLink: string;
        mappEzTagAndroidLink: string;
    };
    let operatingSystemSnifferService: jasmine.SpyObj<any>;

    beforeEach(() => {
        environmentConfig = {
            mappEzTagIOSLink: 'fake ios from envConfig',
            mappEzTagAndroidLink: 'fake android from envConfig'
        };
        operatingSystemSnifferService = jasmine.createSpyObj('operatingSystemSnifferService', ['getOsFull']);

        service = new EzTagAppRedirectLinkService(
            environmentConfig, operatingSystemSnifferService
        );
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('getEzTagAppLink', () => {

        [{ mobileOs: 'ios', expected: 'fake ios from envConfig' },
        { mobileOs: 'android', expected: 'fake android from envConfig' }]
            .forEach(({ mobileOs, expected }) => {
                it(`should get the correct link for ${mobileOs} to be ${expected}`, () => {
                    //Assemble
                    operatingSystemSnifferService.getOsFull.and.returnValue(mobileOs);

                    //Act
                    const result = service.getEzTagAppLink();

                    //Assert
                    expect(result).toBe(expected);
                });
            });
    });
});
