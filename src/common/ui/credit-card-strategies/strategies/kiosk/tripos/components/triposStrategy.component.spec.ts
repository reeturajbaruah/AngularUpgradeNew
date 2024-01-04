// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule, NgForm } from '@angular/forms';
// import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
// import { CmsUtilService } from 'cms/services';
// import { WindowRef } from 'common/providers';
// import { ToasterService } from 'common/services';
// import { API, CC_CONVERSION, ENVIRON_CONFIG, MODAL_SERVICE, SF_UTILITY, VANTIV_PAY } from 'common/upgrades';
// import { routes, UrlPaths } from 'constants/module';
// import { } from 'jasmine';
// import { changesStable, createFormWrap, TestingModule } from 'testing';
// import { ValidationModule } from 'validation/module';
// import { CreditCardEntryComponent } from '../../../../form-entry/creditCardEntry/creditCardEntry.component';
// import { TriPosStrategyComponent } from './triposStrategy.component';


// describe('component: tripos-strategy', () => {

//     let fixture: ComponentFixture<TriPosStrategyComponent>;
//     let component: TriPosStrategyComponent;

//     let vantivPaymentService;
//     let storefrontUtilityService;
//     let modalService;
//     let api;
//     let cmsUtilService: CmsUtilService;
//     let toasterService: jasmine.SpyObj<ToasterService>;
//     let windowMock;
//     let environmentConfig;
//     let parent;
//     let form: NgForm;
//     let creditCardConversionService;

//     beforeEach(async () => {

//         vantivPaymentService = jasmine.createSpyObj('vantivPaymentService', ['getTokenizedCreditCardData']);
//         modalService = jasmine.createSpyObj('modalService', ['newModalScope', 'closeByName', 'creditCardPromptModal', 'isModalOpen']);
//         modalService.newModalScope.and.callFake((options) => options);
//         modalService.isModalOpen.and.returnValue(true);
//         modalService.modalNames = {
//             CreditCardPrompt: 'prompt'
//         };

//         api = jasmine.createSpyObj('api', ['TriPosStatus', 'getCmsPageById', 'TriPosConfiguration']);
//         cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['parseAllImageAttributes']);
//         (cmsUtilService.parseAllImageAttributes as jasmine.Spy).and.returnValue({ image: null });

//         toasterService = jasmine.createSpyObj('toasterService', ['show']);
//         windowMock = jasmine.createSpyObj('window', ['clearTimeout', 'setTimeout']);

//         storefrontUtilityService = {

//         };
//         environmentConfig = {
//             storefrontConfigs: {
//             }
//         };

//         parent = {
//             nameSuffix: null,
//             creditCard: {},
//             disableValidation: null,
//             useExistingCard: null,
//             expMonthDisabled: null,
//             expYearDisabled: null,
//             maskNumber: CreditCardEntryComponent.prototype.maskNumber
//         };

//         creditCardConversionService = jasmine.createSpyObj('creditCardConversionService', ['convertCodeToString']);
//         (creditCardConversionService.convertCodeToString as jasmine.Spy).and.callFake(code => code);

//         await TestBed
//             .configureTestingModule({
//                 declarations: [
//                     TriPosStrategyComponent
//                 ],
//                 schemas: [NO_ERRORS_SCHEMA],
//                 imports: [FormsModule, ValidationModule, TestingModule],
//                 providers: [
//                     { provide: CreditCardEntryComponent, useFactory: () => parent },
//                     { provide: VANTIV_PAY, useFactory: () => vantivPaymentService },
//                     { provide: SF_UTILITY, useFactory: () => storefrontUtilityService },
//                     { provide: MODAL_SERVICE, useFactory: () => modalService },
//                     { provide: ToasterService, useFactory: () => toasterService },
//                     { provide: API, useFactory: () => api },
//                     { provide: CmsUtilService, useFactory: () => cmsUtilService },
//                     { provide: WindowRef, useFactory: () => windowMock },
//                     { provide: UrlPaths, useFactory: () => routes },
//                     { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
//                     { provide: CC_CONVERSION, useFactory: () => creditCardConversionService }
//                 ]
//             })
//             .overrideModule(BrowserDynamicTestingModule, {
//                 set: {
//                     entryComponents: [TriPosStrategyComponent]
//                 }
//             })
//             .compileComponents();

//         const construct = await createFormWrap(TriPosStrategyComponent, c => { });

//         fixture = construct.fixture;
//         component = construct.component;
//         form = construct.form;
//     });

//     describe('Kiosk configuration', () => {

//         const triPosConfig = {
//             acceptorId: null,
//             accountId: null,
//             errors: null,
//             laneId: 9999,
//             url: 'https://localhost:789',
//             accountStatus: null,
//             applicationId: null,
//             accountToken: null,
//             applicationName: 'name',
//             applicationVersion: 'version',
//             authorization: null,
//             alerts: null,
//             exception: null,
//             requestId: null,
//             sessionTimedOut: null,
//             vaultId: null
//         };

//         const triPosStatus = {
//             errors: null,
//             alerts: null,
//             exception: null,
//             active: null,
//             allowCreditCardInputWhenDeviceDisabled: false,
//             sessionTimedOut: null,
//             accountStatus: null,
//             getCardNameFromTriPos: true
//         };

//         let vantivPaymentServiceResponse;

//         beforeEach(() => {
//             triPosStatus.getCardNameFromTriPos = true;
//             triPosStatus.allowCreditCardInputWhenDeviceDisabled = false;

//             vantivPaymentServiceResponse = {
//                 accountNumber: null,
//                 binValue: null,
//                 cardHolderName: null,
//                 cardLogo: '',
//                 entryMode: null,
//                 expirationMonth: '1',
//                 expirationYear: '20',
//                 isOffline: null,
//                 merchantId: null,
//                 transactionDateTime: null,
//                 tokenId: null,
//                 tokenProvider: null,
//                 cancelledByUser: false
//             };

//             api.TriPosConfiguration.and.callFake(() => Promise.resolve(triPosConfig));
//             api.TriPosStatus.and.callFake(() => Promise.resolve(triPosStatus));
//             api.getCmsPageById.and.callFake(() => Promise.resolve({ cmsResponse: JSON.stringify({}) }));

//             vantivPaymentService.getTokenizedCreditCardData.and.callFake(() => Promise.resolve(vantivPaymentServiceResponse));

//             storefrontUtilityService.isRunningAsKiosk = true;
//             storefrontUtilityService.isSecureCardInputAvailable = true;
//             storefrontUtilityService.storefrontLocation = 1;
//             storefrontUtilityService.machineName = 'TestKiosk';
//             storefrontUtilityService.webStoreData = {
//                 sessionId: 0,
//                 selectedItemIds: [],
//                 currentItemName: 'name',
//                 currentItemId: 1,
//                 fullSiteMode: false,
//                 completedItemIds: [],
//                 shellUserInitialized: true
//             };
//             storefrontUtilityService.delay = {
//                 long: 1000,
//                 short: 1000
//             };

//             triPosStatus.active = true;
//             vantivPaymentServiceResponse.cardLogo = 'VISA';
//             vantivPaymentServiceResponse.cardHolderName = 'TESTER';
//             vantivPaymentServiceResponse.binValue = '314159';
//             vantivPaymentServiceResponse.accountNumber = '************-3141';
//             vantivPaymentServiceResponse.expirationMonth = '3';
//             vantivPaymentServiceResponse.expirationYear = '2025';
//         });

//         it('should disable all CC info fields', async () => {

//             await changesStable(fixture);
//             await component.canUse();
//             await component.setup();

//             expect(parent.expYearDisabled).toBeTruthy();
//             expect(parent.expMonthDisabled).toBeTruthy();
//         });

//         it('should get tokenized data', async () => {
//             try {
//                 await changesStable(fixture);
//                 await component.canUse();
//                 await component.setup();

//                 const result = await component.tokenize();

//                 expect(result).toBeTruthy();

//                 expect(vantivPaymentService.getTokenizedCreditCardData).toHaveBeenCalled();

//                 expect(component.creditCard.omniToken).toBe(vantivPaymentServiceResponse.tokenId);
//                 expect(component.creditCard.cardNbr).toBe(vantivPaymentServiceResponse.accountNumber);

//                 expect(component.creditCard.cardCode).toBe('V');
//                 expect(component.creditCard.cardTypeDisplay).toBe('V');

//                 expect(component.creditCard.isNewCard).toBe(true);
//                 expect(component.creditCard.nameOnCard).toBe(vantivPaymentServiceResponse.cardHolderName);
//                 expect(component.creditCard.expMonth).toBe(+vantivPaymentServiceResponse.expirationMonth);
//                 expect(component.creditCard.expYear).toBe(+vantivPaymentServiceResponse.expirationYear);
//             } catch (e) {
//                 fail(e);
//             }
//         });

//         it('should use empty string for card name when status demands it', async () => {

//             triPosStatus.getCardNameFromTriPos = false;

//             vantivPaymentServiceResponse.cardHolderName = 'TESTER';

//             await changesStable(fixture);

//             await component.canUse();
//             await component.setup();
//             const result = await component.tokenize();

//             expect(component.creditCard.nameOnCard).toBe('');
//         });


//         it('should rotate lastname/firstname I', async () => {

//             component.getCardNameFromTriPos = true;

//             vantivPaymentServiceResponse.cardHolderName = 'Lastname/Firstname I';

//             await changesStable(fixture);
//             await component.canUse();
//             await component.setup();
//             const result = await component.tokenize();
//             expect(result).toBeTruthy();
//             expect(component.creditCard.nameOnCard).toBe('Firstname I Lastname');
//         });

//         it('should block CC input if device is down', async () => {

//             triPosStatus.active = false;

//             await changesStable(fixture);

//             await component.canUse();
//             await component.setup();

//             try {
//                 await component.tokenize();
//                 fail('update should have failed');
//             } catch (e) {
//                 expect(vantivPaymentService.getTokenizedCreditCardData).not.toHaveBeenCalled();
//             } finally {
//                 expect(parent.expYearDisabled).toBeTruthy();
//                 expect(parent.expMonthDisabled).toBeTruthy();
//             }
//         });

//         it('should defer if tripos cannot be used', async () => {

//             triPosStatus.active = false;
//             triPosStatus.allowCreditCardInputWhenDeviceDisabled = true;

//             await changesStable(fixture);
//             const result = await component.canUse();
//             expect(result).toBeFalsy();
//             expect(parent.expYearDisabled).toBeFalsy();
//             expect(parent.expMonthDisabled).toBeFalsy();
//         });

//         it('should defer if not a kiosk', async () => {

//             triPosStatus.active = true;
//             triPosStatus.allowCreditCardInputWhenDeviceDisabled = false;

//             storefrontUtilityService.isRunningAsKiosk = false;

//             await changesStable(fixture);
//             const result = await component.canUse();
//             expect(result).toBeFalsy();
//         });

//         it('should block CC input if default and configured so', async () => {

//             storefrontUtilityService.machineName = storefrontUtilityService.defaultMachineName;

//             environmentConfig.storefrontConfigs.KioskConfigs = {
//                 [storefrontUtilityService.defaultMachineName]: {
//                     AllowCreditCardInputWhenDeviceDisabled: false
//                 }
//             };

//             triPosStatus.active = false;
//             vantivPaymentServiceResponse.cardLogo = 'VISA';

//             await changesStable(fixture);
//             await component.canUse();
//             await component.setup();

//             try {
//                 const result = await component.tokenize();
//                 fail('update should have failed');
//             } catch (e) {
//                 expect(vantivPaymentService.getTokenizedCreditCardData).not.toHaveBeenCalled();
//             } finally {
//                 expect(parent.expYearDisabled).toBeTruthy();
//                 expect(parent.expMonthDisabled).toBeTruthy();
//             }

//         });


//         it('should allow CC input if default is configured so', async () => {

//             storefrontUtilityService.machineName = storefrontUtilityService.defaultMachineName;

//             environmentConfig.storefrontConfigs.KioskConfigs = {
//                 [storefrontUtilityService.defaultMachineName]: {
//                     AllowCreditCardInputWhenDeviceDisabled: true
//                 }
//             };

//             triPosStatus.active = false;
//             triPosStatus.allowCreditCardInputWhenDeviceDisabled = true;
//             vantivPaymentServiceResponse.cardLogo = 'VISA';

//             await changesStable(fixture);
//             const result = await component.canUse();
//             expect(result).toBeFalsy();
//             expect(parent.expYearDisabled).toBeFalsy();
//             expect(parent.expMothDisabled).toBeFalsy();

//         });

//         it('should not wipe credit card name if change was detected', async () => {

//             triPosStatus.active = true;

//             vantivPaymentServiceResponse.cardHolderName = 'Lastname/Firstname I';

//             parent.creditCard.nameOnCard = 'TEST TEST';

//             await changesStable(fixture);

//             await component.canUse();
//             await component.setup();

//             expect(component.detectedCreditCardNameChange).toBe(false);
//             parent.creditCard.nameOnCard = 'TEST2 TEST2';

//             await changesStable(fixture);
//             await component.update();

//             expect(component.detectedCreditCardNameChange).toBe(true);

//             await component.tokenize();
//             await component.update();

//             expect(parent.creditCard.nameOnCard).toBe('TEST2 TEST2');
//         });

//         it('should wipe credit card name if no change was detected', async () => {

//             try {
//                 triPosStatus.active = true;

//                 vantivPaymentServiceResponse.cardHolderName = 'Lastname/Firstname I';

//                 parent.creditCard.nameOnCard = 'TEST TEST';

//                 await changesStable(fixture);

//                 await component.canUse();
//                 await component.setup();

//                 await component.tokenize();

//                 expect(parent.creditCard.nameOnCard).toBe('Firstname I Lastname');
//             } catch (e) {
//                 fail(e);
//             }
//         });

//         it('should flag use existing card as false if swipe changes card number', async () => {

//             triPosStatus.active = true;

//             vantivPaymentServiceResponse.cardHolderName = 'Lastname/Firstname I';
//             vantivPaymentServiceResponse.accountNumber = '************-1234';

//             parent.creditCard.nameOnCard = 'TEST TEST';
//             parent.creditCard.cardNbr = '************-5309';

//             await changesStable(fixture);

//             await component.canUse();
//             await component.setup();

//             expect(parent.useExistingCard).toBe(true);
//             expect(parent.creditCard.cardNbr).toBe('************-5309');

//             await component.tokenize();
//             await component.update();

//             expect(parent.useExistingCard).toBe(false);
//             expect(parent.creditCard.cardNbr).toBe('************-1234');
//         });

//         it('should set cardNumber display when onCardNumberChange is called', async () => {

//             parent.creditCard.cardCode = 'm';
//             parent.creditCard.cardNbr = '************-5309';

//             component.onCardNumberChange();

//             expect(component.creditCard.cardNbr).toBe('5309');
//             expect(component.cardNumberDisplay).toBe('**** **** **** 5309');
//         });
//     });

// });
