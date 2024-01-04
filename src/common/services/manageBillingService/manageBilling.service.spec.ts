import { } from 'jasmine';

import { ManageBillingService } from './manageBilling.service';


import { UrlPaths } from 'constants/routes.constants';
import { StateNames } from 'constants/stateNames.constants';
import { PhoneNumbers } from 'constants/phoneNumbers.constants';
import { CmsUtilService } from 'cms/services/cmsUtil/cmsUtil.service';
import { BillingDataService } from './billingData.service';
import { StateService } from '@uirouter/core';
import { StringUtilsService } from '../stringUtils/stringUtils.service';
import { EditInvoicedMessageService } from '../editInvoicedMessage/editInvoicedMessage.service';

describe('billingDataService', () => {

    let service: ManageBillingService;
    let routes: UrlPaths;
    let stateNames: StateNames;
    let phoneNumbers: PhoneNumbers;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;
    let billingDataService: jasmine.SpyObj<BillingDataService>;
    let stateService: jasmine.SpyObj<StateService>;
    let window: jasmine.SpyObj<Window>;
    let go: jasmine.SpyObj<any>;
    let stringUtils: jasmine.SpyObj<StringUtilsService>;
    let genericRepo: any;
    let responseErrorService: jasmine.SpyObj<any>;
    let editInvoicedMessageService: jasmine.SpyObj<EditInvoicedMessageService>;

    beforeEach(() => {

        routes = new UrlPaths();
        stateNames = new StateNames();
        phoneNumbers = new PhoneNumbers();
        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['generateFileSrc']);
        billingDataService = jasmine.createSpyObj('billingDataService', ['getBillingInformationFrom']);
        stateService = jasmine.createSpyObj('stateService', ['go']);
        go = jasmine.createSpy('go');
        window = { history: { go } } as any;
        stringUtils = jasmine.createSpyObj('StringUtilsService', ['getParameterObject']);
        genericRepo = {
            dataFactory: {
                getCmsPagesByIds: jasmine.createSpy('getCmsPagesByIds'),
                getAllPaymentMethods: jasmine.createSpy('getAllPaymentMethods')
            }
        };
        genericRepo.dataFactory.editBankAccountInfo = 'fake editBankAccountInfo-api';
        genericRepo.dataFactory.addBankAccountInfo = 'fake addBankAccountInfo-api';
        genericRepo.dataFactory.editCreditCardInfo = 'fake editCreditCardInfo-api';
        genericRepo.dataFactory.addCreditCardInfo = 'fake addCreditCardInfo-api';

        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree']);
        editInvoicedMessageService = jasmine.createSpyObj('EditInvoicedMessageService', ['setPhoneNumberDisplay', 'invoicedMessage']);
        editInvoicedMessageService.setPhoneNumberDisplay.and.callFake(() => editInvoicedMessageService);
        editInvoicedMessageService.invoicedMessage.and.callFake(() => Promise.resolve());

        cmsUtilService.generateFileSrc.and.callFake(tagString => 'mock-generateFileSrc-' + tagString);
        stringUtils.getParameterObject.and.callFake(parameters => ({
            foregroundTextColor: 'mock-getParameterObject-foregroundTextColor-' + parameters
        }));

        service = new ManageBillingService(
            routes,
            stateNames,
            phoneNumbers,
            cmsUtilService,
            billingDataService,
            stateService,
            window,
            stringUtils,
            genericRepo,
            responseErrorService,
            editInvoicedMessageService);
    });

    describe('canary', () => {

        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('parseIcon', () => {

        it('should parse content for an Icon correctly', () => {

            expect(service['parseIcon'](
                {
                    ItemName: 'Zitem', TertiaryImage: 'terImg', Image: 'img', Parameters: 'params'
                }
            )).toEqual(
                {
                    largeImages: { Z: 'url(mock-generateFileSrc-terImg)' },
                    smallImages: { Z: 'mock-generateFileSrc-img' },
                    imageForegroundTextColors: { Z: 'mock-getParameterObject-foregroundTextColor-params' }
                });
        });
    });

    describe('parseBillingInformation', () => {

        it('should parse content for BillingInformation correctly', () => {
            expect(service['parseBillingInformation'](
                {
                    ShortDescription: 'Short-Description',
                    Children: [
                        {
                            ItemName: 'Cards',
                            Title: 'Cards Title'
                        },
                        {
                            ItemName: 'Bank Accounts',
                            Title: 'Bank Accounts Title'
                        },
                        {
                            ItemName: 'Confirm Changes',
                            Title: 'Confirm Changes Title',
                            PrimaryContent: 'Confirm Changes Primary Content'
                        },
                        {
                            ItemName: 'Billing Information Update',
                            Title: 'Billing Information Update Title',
                            PrimaryContent: 'Billing Information Update Primary Content'
                        },
                        {
                            ItemName: 'No Billing Information Popup',
                            Title: 'No Billing Information Popup Update Title',
                            PrimaryContent: 'No Billing Information Popup Primary Content'
                        }
                        ,
                        {
                            ItemName: 'Delete Payment Method',
                            Title: 'Delete Payment Method Title',
                            PrimaryContent: 'Delete Payment Method Primary Content',
                            SecondaryContent: 'Delete Payment Method Secondary Content'
                        }
                    ]
                }

            )).toEqual(
                {
                    updateBillingInfoTitle: 'Short-Description',
                    cardsTitle: 'Cards Title',
                    eftsTitle: 'Bank Accounts Title',
                    confirmMakePrimary: {
                        title: 'Confirm Changes Title',
                        body: 'Confirm Changes Primary Content'
                    },
                    updateSuccessfull: {
                        title: 'Billing Information Update Title',
                        body: 'Billing Information Update Primary Content'
                    },
                    noBillingInfo: {
                        title: 'No Billing Information Popup Update Title',
                        body: 'No Billing Information Popup Primary Content'
                    }
                });
        });
    });

    describe('parseExpiredCardPopup', () => {

        it('should parse content for ExpiredCardPopup correctly', () => {
            expect(service['parseExpiredCardPopup'](
                {
                    PrimaryContent: 'Primary-Content'
                }
            )).toEqual(
                {
                    alertTooltip: { body: 'Primary-Content' }
                });
        });
    });

    describe('parseAlertImage', () => {

        it('should parse content for AlertImage correctly', () => {

            expect(service['parseAlertImage'](
                {
                    SecondaryImage: 'Secondary-Image'
                }
            )).toEqual(
                {
                    alertTooltip: { image: 'mock-generateFileSrc-Secondary-Image' }
                });
        });
    });

    describe('parse', () => {

        beforeEach(() => {

            spyOn(service as any, 'parseIcon').and.returnValue('fake parsed icon');
            spyOn(service as any, 'parseBillingInformation').and.returnValue('fake parsed billing info');
            spyOn(service as any, 'parseExpiredCardPopup').and.returnValue('fake parsed expired card popup');
            spyOn(service as any, 'parseAlertImage').and.returnValue('fake parsed alert image');
        });

        [
            () => routes.visaIcon,
            () => routes.amexIcon,
            () => routes.discoverIcon,
            () => routes.masterCardIcon,
            () => routes.bankIcon
        ].forEach(cmsItemId => {

            it(`should call service.parseIcon for billing icon`, () => {

                expect(service['parse'](cmsItemId(), 'fake raw icon' as any)).toBe('fake parsed icon');

                expect(service['parseIcon']).toHaveBeenCalledTimes(1);
                expect(service['parseIcon']).toHaveBeenCalledWith('fake raw icon' as any);
            });
        });

        it('should call service.parseBillingInformation for routes.manageBillingInformationCmsContent', () => {

            expect(service['parse'](routes.manageBillingInformationCmsContent, 'fake raw billing page cms' as any))
                .toBe('fake parsed billing info');

            expect(service['parseBillingInformation']).toHaveBeenCalledTimes(1);
            expect(service['parseBillingInformation']).toHaveBeenCalledWith('fake raw billing page cms' as any);
        });

        it('should call service.expiredCardPopup for routes.manageBillingInformationCmsContent', () => {

            expect(service['parse'](routes.expiredCardPopup, 'fake raw expired card popup' as any))
                .toBe('fake parsed expired card popup');

            expect(service['parseExpiredCardPopup']).toHaveBeenCalledTimes(1);
            expect(service['parseExpiredCardPopup']).toHaveBeenCalledWith('fake raw expired card popup' as any);
        });

        it('should call service.expiredCardPopup for routes.manageBillingInformationCmsContent', () => {

            expect(service['parse'](routes.alertImage, 'fake raw alert image' as any))
                .toBe('fake parsed alert image');

            expect(service['parseAlertImage']).toHaveBeenCalledTimes(1);
            expect(service['parseAlertImage']).toHaveBeenCalledWith('fake raw alert image' as any);
        });

        ['', null, 1, 0, 1.1].forEach(unHandledId => {

            it(`should return empty object for ${unHandledId}`, () => {

                expect(service['parse'](unHandledId as any, 'fake cms content' as any)).toEqual({});
            });
        });

    });

    describe('parseCmsContent', () => {

        it('should parse cmsContent using correct functions for each response and put them together', () => {
            const responses = [
                { cmsResponse: `"manageBillingInformationCmsContent"` },
                { cmsResponse: `"alert"` },
                { cmsResponse: `"visa"` },
                { cmsResponse: `"amex"` },
                { cmsResponse: `"master"` },
                { cmsResponse: `"discover"` },
                { cmsResponse: `"bank"` },
                { cmsResponse: `"expired"` }
            ];

            const allItemIds = [
                routes.manageBillingInformationCmsContent,
                routes.alertImage,
                routes.visaIcon,
                routes.amexIcon,
                routes.masterCardIcon,
                routes.discoverIcon,
                routes.bankIcon,
                routes.expiredCardPopup
            ];


            spyOn(service as any, 'parseIcon').and.callFake(raw => ({ parseIcon: { [raw]: true } }));
            spyOn(service as any, 'parseBillingInformation').and.callFake(raw => ({ billingInformation: raw }));
            spyOn(service as any, 'parseExpiredCardPopup').and.callFake(raw => ({ alert: { message: raw } }));
            spyOn(service as any, 'parseAlertImage').and.callFake(raw => ({ alert: { image: raw } }));

            expect(service['parseCmsContent'](allItemIds, responses)).toEqual({
                parseIcon: {
                    visa: true,
                    amex: true,
                    master: true,
                    discover: true,
                    bank: true
                },
                alert: {
                    image: 'alert',
                    message: 'expired'
                },
                billingInformation: 'manageBillingInformationCmsContent'
            });
        });
    });

    describe('fetchCmsContent', () => {

        beforeEach(() => {

            service.cmsContent = {} as any;

            spyOn(service as any, 'parseCmsContent').and.callFake((a, b) => ({ allItemIds: a, responses: b }));
            responseErrorService.isErrorFree.and.returnValue(false);
            genericRepo.dataFactory.getCmsPagesByIds.and.returnValue({ responses: 'responses', errors: 'errors' });
        });

        it('should call api.getCmsPagesByIds with correct itemIds', () => {

            service.fetchCmsContent();

            expect(genericRepo.dataFactory.getCmsPagesByIds).toHaveBeenCalledTimes(1);
            expect(genericRepo.dataFactory.getCmsPagesByIds).toHaveBeenCalledWith({
                requests: [
                    { itemId: routes.amexIcon },
                    { itemId: routes.discoverIcon },
                    { itemId: routes.masterCardIcon },
                    { itemId: routes.bankIcon },
                    { itemId: routes.visaIcon },
                    { itemId: routes.manageBillingInformationCmsContent },
                    { itemId: routes.expiredCardPopup },
                    { itemId: routes.alertImage }
                ]
            });
        });

        it('should call responseErrorService.isErrorFree with response from api.getCmsPagesByIds as args', async () => {

            await service.fetchCmsContent();

            expect(responseErrorService.isErrorFree).toHaveBeenCalledTimes(1);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith({ responses: 'responses', errors: 'errors' });
        });

        it('should not change the cmsContent if responseErrorService.isErrorFree returns false', async () => {

            await service.fetchCmsContent();

            expect(service.cmsContent).toEqual({} as any);
            expect(service['parseCmsContent']).not.toHaveBeenCalled();
        });

        it('should extend value of cmsContent if response error free', async () => {

            responseErrorService.isErrorFree.and.returnValue(true);

            const expectedItemIds = [
                routes.amexIcon,
                routes.discoverIcon,
                routes.masterCardIcon,
                routes.bankIcon,
                routes.visaIcon,
                routes.manageBillingInformationCmsContent,
                routes.expiredCardPopup,
                routes.alertImage
            ];
            const expectedCmsContent = {
                responses: 'responses',
                allItemIds: expectedItemIds
            };

            await service.fetchCmsContent();

            expect(service.cmsContent).toEqual(expectedCmsContent as any);
            expect(service['parseCmsContent']).toHaveBeenCalledWith(expectedItemIds, 'responses' as any);
            expect(service['parseCmsContent']).toHaveBeenCalledTimes(1);
        });
    });

    describe('triggerShowSubControllerContents', () => {

        it('should call service.showSubControllerContents and set service.showSubControllerContents to function which does nothing', () => {

            let callCount = 0;

            service.showSubControllerContents = () => callCount += 1;

            service.triggerShowSubControllerContents();

            expect(callCount).toBe(1);

            service.triggerShowSubControllerContents();

            expect(callCount).toBe(1);
        });
    });

    describe('refreshBillingInfo', () => {

        let getAllPaymentMethodsResponse;

        beforeEach(() => {

            getAllPaymentMethodsResponse = { responses: 'responses', errors: 'errors' };

            service.billingInformation = { oldContent: 'old' } as any;
            billingDataService.getBillingInformationFrom
                .and
                .callFake(() => ({ allPaymentContainers: [{}, { primary: true }, {}] }) as any);
            responseErrorService.isErrorFree.and.returnValue(true);
            spyOn(service as any, 'makeSelection');
            genericRepo.dataFactory.getAllPaymentMethods.and.returnValue(getAllPaymentMethodsResponse);
        });


        it('should delete everything in service.billingInformation when service.genericRepo.dataFactory.getAllPaymentMethods return response with errors', async () => {

            responseErrorService.isErrorFree.and.returnValue(false);

            await service.refreshBillingInfo(null);

            expect(service.billingInformation).toEqual({} as any);
        });

        it('should populate service.billingInformation with values returned by service.manageBillingInformationAccountData.getBillingInformationFrom', async () => {

            await service.refreshBillingInfo(null);

            expect(billingDataService.getBillingInformationFrom).toHaveBeenCalledWith({ responses: 'responses', errors: 'errors' } as any);
            expect(billingDataService.getBillingInformationFrom).toHaveBeenCalledTimes(1);
            expect(service.billingInformation).toEqual({ allPaymentContainers: [{}, { primary: true }, {}] } as any);
        });

        it('should not call service.editInvoicedMessageService when isAccountInvoiced is false', async () => {

            getAllPaymentMethodsResponse.isAccountInvoiced = false;

            await service.refreshBillingInfo(null);

            expect(editInvoicedMessageService.setPhoneNumberDisplay).not.toHaveBeenCalled();
        });

        it('should call service.editInvoicedMessageService with when isAccountInvoiced is true', async () => {

            getAllPaymentMethodsResponse.isAccountInvoiced = true;

            await service.refreshBillingInfo(null);

            expect(editInvoicedMessageService.setPhoneNumberDisplay).toHaveBeenCalledTimes(1);
            expect(editInvoicedMessageService.setPhoneNumberDisplay).toHaveBeenCalledWith(phoneNumbers.invoicedAccountSupport.display);
            expect(editInvoicedMessageService.invoicedMessage).toHaveBeenCalledTimes(1);
            expect(editInvoicedMessageService.invoicedMessage).toHaveBeenCalledWith();
        });

        it('should call service.makeSelection with all payment containers and unselected', async () => {

            await service.refreshBillingInfo('fake unselected' as any);

            expect(service['makeSelection']).toHaveBeenCalledTimes(1);
            expect(service['makeSelection']).toHaveBeenCalledWith([{}, { primary: true }, {}] as any, 'fake unselected' as any);
        });

        it('should not call service.makeSelection with all payment containers and unselected when api call return errros', async () => {

            responseErrorService.isErrorFree.and.returnValue(false);

            await service.refreshBillingInfo('fake unselected' as any);

            expect(service['makeSelection']).not.toHaveBeenCalled();
        });
    });

    describe('makeSelection', () => {

        beforeEach(() => {

            spyOn(service as any, 'select');
        });

        it('should call service.select with payment container not in unselected', () => {

            service['makeSelection']([{
                isPrimary: false,
                paymentMethod: { accountBillingMethodId: 11 }
            }, {
                isPrimary: true,
                paymentMethod: { accountBillingMethodId: 23 }
            }, {
                isPrimary: false,
                paymentMethod: { accountBillingMethodId: 45 }
            }] as any, [23, 45]);

            expect(service['select']).toHaveBeenCalledTimes(1);
            expect(service['select']).toHaveBeenCalledWith({
                isPrimary: false,
                paymentMethod: { accountBillingMethodId: 11 }
            } as any, false);
        });

        it('should call service.select with primary payment container when unselected falsy', () => {

            service['makeSelection']([{
                isPrimary: false,
                paymentMethod: { accountBillingMethodId: 11 }
            }, {
                isPrimary: true,
                paymentMethod: { accountBillingMethodId: 23 }
            }, {
                isPrimary: false,
                paymentMethod: { accountBillingMethodId: 45 }
            }] as any, null);

            expect(service['select']).toHaveBeenCalledTimes(1);
            expect(service['select']).toHaveBeenCalledWith({
                isPrimary: true,
                paymentMethod: { accountBillingMethodId: 23 }
            } as any, false);
        });

        it('should call service.select with first payment container in list when unselected falsy and no primary', () => {

            service['makeSelection']([{
                isPrimary: false,
                paymentMethod: { accountBillingMethodId: 11 }
            }, {
                isPrimary: false,
                paymentMethod: { accountBillingMethodId: 23 }
            }, {
                isPrimary: false,
                paymentMethod: { accountBillingMethodId: 45 }
            }] as any, null);

            expect(service['select']).toHaveBeenCalledTimes(1);
            expect(service['select']).toHaveBeenCalledWith({
                isPrimary: false,
                paymentMethod: { accountBillingMethodId: 11 }
            } as any, false);
        });
    });

    describe('select', () => {

        beforeEach(() => {

            service.billingInformation = { selected: 'initial' } as any;
        });

        [1, 'string', 0, null, undefined].forEach(paymentContainer => {

            it('should not modify billingInformation.selected when paymentContainer is not an object', () => {

                service.select(paymentContainer as any, false);

                expect(service.billingInformation.selected).toEqual('initial' as any);
            });
        });

        it('should set paymentContainer.isSelected and service.billingInformation.selected to false if isMobile and paymentContainer.isSelected', () => {

            const paymentContainer = { isSelected: true };

            service.select(paymentContainer as any, true);

            expect(paymentContainer.isSelected).toEqual(false);
            expect(service.billingInformation.selected).toEqual(null);
        });

        [{ isSelected: false, isMobile: false }, { selected: false, isMobile: true }, { selected: true, mobile: false }]
            .forEach(({ isSelected, isMobile }) => {

                it(`should set paymentContainer.isSelected to true and service.billingInformation.selected to passed paymentContainer 
                    when paymentContainer.isSelected is ${isSelected} and isMobile flag is ${isMobile}`, () => {

                    const paymentContainer = { isSelected, passed: 'yes' };
                    service.billingInformation.allPaymentContainers = [{ isSelected: true }, { isSelected: true }, { isSelected: true }] as any;

                    service.select(paymentContainer as any, isMobile);

                    expect(paymentContainer.isSelected).toEqual(true);
                    expect(service.billingInformation.selected).toBe(paymentContainer as any);
                    expect(service.billingInformation.allPaymentContainers).toEqual([
                        { isSelected: false },
                        { isSelected: false },
                        { isSelected: false }] as any);
                });
            });
    });

    describe('getUnselectedBillingMethodIds', () => {

        it('should return accountBillingMethodIds not equal to selectedAccountBillingMethodId', () => {

            const result = service['getUnselectedBillingMethodIds']([
                { paymentMethod: { accountBillingMethodId: 1234 } },
                { paymentMethod: { accountBillingMethodId: 4567 } },
                { paymentMethod: { accountBillingMethodId: 6 } },
                { paymentMethod: { accountBillingMethodId: 9567 } }
            ] as any, 4567);

            expect(result).toEqual([1234, 6, 9567]);
        });
    });

    describe('returnToManageBillingInformationPage', () => {

        it('should not call window.history.go when inChildState false', () => {

            service.inChildState = false;

            service.returnToManageBillingInformationPage();

            expect(go).not.toHaveBeenCalled();
        });

        it('should call window.history.go when inChildState true', () => {

            service.inChildState = true;

            service.returnToManageBillingInformationPage();

            expect(go).toHaveBeenCalledTimes(1);
            expect(go).toHaveBeenCalledWith(-1);
        });
    });
});    
