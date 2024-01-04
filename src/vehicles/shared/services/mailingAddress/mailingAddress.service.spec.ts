import { TestBed, waitForAsync } from '@angular/core/testing';
import { } from 'jasmine';
import { IMailingInfo } from 'common/models';
import { AccountService, DialogService, GetContactInfoResponse } from 'common/services';
import { MailingAddressService } from './mailingAddress.service';
import { BaseResponse } from 'common/interfaces';

describe('Mailing Address Service', () => {

    let mailingService: MailingAddressService;
    let accountService: jasmine.SpyObj<AccountService>;
    let dialogService: DialogService;

    beforeEach(() => {

        accountService = jasmine.createSpyObj('profileApis', ['getContactInfo', 'getMailingInfo', 'setContactInfo']);
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered']);

        TestBed.configureTestingModule({
            providers: [
                MailingAddressService,
                { provide: DialogService, useFactory: () => dialogService },
                { provide: AccountService, useFactory: () => accountService }
            ]
        });

        mailingService = TestBed.inject(MailingAddressService);

    });

    describe('canary', () => {
        it('should pass', () => {
            expect(mailingService).toBeDefined();
        });
    });

    describe('setData', () => {
        it('should intialize MailingAddressInfo', waitForAsync(async () => {

            const result = {
                address1: '123',
                address2: '234',
                city: 'City',
                country: 'USA',
                international: false,
                state: 'TX',
                zip: '77777',
                internationalAddress: false
            } as IMailingInfo;

            const contact = {
                contactInfo: {
                    altEmailAddress: 'alt@eh.com',
                    altPhoneNumber: '1233331234',
                    emailAddress: 'email@eh.com',
                    phoneNumber: '3214444321',
                }
            } as GetContactInfoResponse;

            accountService.getMailingInfo.and.resolveTo(result);
            accountService.getContactInfo.and.resolveTo(contact);

            await mailingService.setData();

            expect(accountService.getMailingInfo).toHaveBeenCalled();
            expect(accountService.getContactInfo).toHaveBeenCalled();

            const res = mailingService.getMailingAddressInfo();

            expect(res.mailingInfo).toEqual(result);
            expect(res.contactInfo).toEqual(contact);
        }));
    });

    describe('setMailingAddress', () => {
        it('should update mailingInfo', waitForAsync(async () => {

            const result = {
                address1: '123',
                address2: '234',
                city: 'City',
                country: 'USA',
                international: false,
                state: 'TX',
                zip: '77777',
                internationalAddress: false
            } as IMailingInfo;

            accountService.getMailingInfo.and.resolveTo({} as IMailingInfo);
            accountService.getContactInfo.and.resolveTo({} as GetContactInfoResponse);

            await mailingService.setData();
            mailingService.setMailingAddress(result);

            expect(await mailingService.getMailingAddress()).toEqual(result);
        }));
    });

    describe('onMailingAddressEdit', () => {

        it('should call setMailingAddress with result', async () => {
            spyOn(mailingService, 'setMailingAddress');
            const result = {
                mailingInfo: {
                    address1: '123',
                    address2: '234',
                    city: 'City',
                    country: 'USA',
                    international: false,
                    state: 'TX',
                    zip: '77777',
                    internationalAddress: false
                } as IMailingInfo
            };
            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue(result);

            await mailingService.onMailingAddressEdit('Edit', null, null, null);

            expect(mailingService.setMailingAddress).toHaveBeenCalledWith(result.mailingInfo);
        });

    });

    describe('setMailingAddressOnAcctLevel', () => {
        it('should update account mailing address', waitForAsync(() => {

            accountService.setContactInfo.and.resolveTo({} as BaseResponse);
            const result = {
                address1: '123',
                address2: '234',
                city: 'City',
                country: 'USA',
                international: false,
                state: 'TX',
                zip: '77777',
                internationalAddress: false
            } as IMailingInfo;

            mailingService.setMailingAddress(result);

            mailingService.setMailingAddressOnAcctLevel().then(() => {
                expect(accountService.setContactInfo).toHaveBeenCalled();
            });

        }));
    });
});

