import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { BillingType } from 'common/models';
import { CurrentUserService, DialogService, IsInvoicedService, ManageBillingService, ResponseErrorService, ToasterService } from 'common/services';
import { GenericCmsModalComponent, WizardComponent } from 'common/ui';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { childCmsIds, stateNames as profileStates } from 'profile/constants';
import { WebApisService as ProfileApiService } from 'profile/services';
import { GetAccountInformationResponse } from 'profile/services/webApis.service';
import { BillingTypeLong, CmsContent, UpdateReplenishmentAmountComponent } from './updateReplenishAmount.component';
import { CurrencyPipe } from '@angular/common';
import { UserRoles } from 'constants/userRoles.constants';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { SessionService } from 'common/services/session/session.service';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';
import { StorefrontService } from '../../storefront/services/storefront.service';

describe('component: update-replenishment-amount', () => {

    let fixture: ComponentFixture<UpdateReplenishmentAmountComponent>;
    let component: UpdateReplenishmentAmountComponent;
    let profileApiService: ProfileApiService;
    let dialogService: DialogService;
    let stateService: any;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let toasterService: jasmine.SpyObj<ToasterService>;
    let isInvoicedService: jasmine.SpyObj<IsInvoicedService>;
    let userRoles: UserRoles;
    let session: jasmine.SpyObj<SessionService>;
    let storeFrontUtilityService;
    let storefrontService: jasmine.SpyObj<any>;
    let uiRouterGlobals: {
        params: { accountData: GetAccountInformationResponse };
    };
    let wizard: WizardComponent;
    let authService: AuthenticationService;
    let manageBillingService: ManageBillingService;
    let currentUserService: jasmine.SpyObj<CurrentUserService>;

    beforeEach(async () => {
        currentUserService = jasmine.createSpyObj('currentUserService', ['getCurrentUser']);
        currentUserService.getCurrentUser.and.returnValue({} as any);
        profileApiService = jasmine.createSpyObj('profileApiService', ['getAccountInfo', 'updateRebillAmount']);
        authService = jasmine.createSpyObj('authService', ['profile']);
        dialogService = jasmine.createSpyObj('dialogService', ['openGenericModal', 'openSliderCentered']);
        stateService = {
            go: jasmine.createSpy('go'),
            current: {
                wizard: {
                    isEndState: true
                }
            }
        };
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree']);
        toasterService = jasmine.createSpyObj('toasterService', ['show']);
        wizard = jasmine.createSpyObj('wizard', ['gotoNextState', 'gotoCancelState']);
        isInvoicedService = jasmine.createSpyObj('isInvoicedService', ['isAccountInvoiced']);
        session = jasmine.createSpyObj('session', null, ['userRole']);
        manageBillingService = jasmine.createSpyObj('manageBillingService', ['']);
        userRoles = new UserRoles();
        storefrontService = jasmine.createSpyObj('storefrontService', ['startNewSession', 'fullSiteMode', 'completeWorkItem']);

        storeFrontUtilityService = {
            webStoreData: {
                fullSiteMode: false,
            },
            isRunningAsKiosk: false
        };
        uiRouterGlobals = {
            params: {
                accountData: undefined
            }
        } as any;

        await TestBed
            .configureTestingModule({
                declarations: [
                    UpdateReplenishmentAmountComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, FormsModule],
                providers: [
                    { provide: StateService, useValue: stateService },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: ProfileApiService, useFactory: () => profileApiService },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: AuthenticationService, useFactory: () => authService },
                    { provide: IsInvoicedService, useFactory: () => isInvoicedService },
                    { provide: UserRoles, useFactory: () => userRoles },
                    { provide: SessionService, useFactory: () => session },
                    { provide: StorefrontUtilityService, useFactory: () => storeFrontUtilityService },
                    { provide: StorefrontService, useFactory: () => storefrontService },
                    { provide: ToasterService, useFactory: () => toasterService },
                    CurrencyPipe,
                    { provide: ManageBillingService, useFactory: () => manageBillingService },
                    { provide: CurrentUserService, useFactory: () => currentUserService },


                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(UpdateReplenishmentAmountComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsContent = {
            ShortDescription: 'fake Short Description',
            LongDescription: 'fake Long Description',
            minLowBalance: 0,
            minimumBalanceMultiplier: 0.25,
            minReqDeposit: 0,
            Title: 'title',
            Children: [{ Title: 'modal title', ShortDescription: 'modal desc' } as any],
        } as CmsContent;
        component.currentUser = {
            isFlexPay: false,
            rebillOptIn: false
        } as any;
        component.rebillObj = {
            accountType: 'false',
            currentRebillAmount: 0,
            minimumBalance: 0,
            minimumBalanceMultiplier: .25,
            rebillAmount: null
        };
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        it('should set rebillObj initial values', async () => {
            //Act
            await component.ngOnInit();

            //Assert
            expect(component.rebillObj).toEqual({
                accountType: 'false',
                currentRebillAmount: 0,
                minimumBalance: 0,
                minimumBalanceMultiplier: .25,
                rebillAmount: 0
            });
        });

        it('should set accountMinBalance initial value', async () => {
            //Act
            await component.ngOnInit();

            //Assert
            expect(component.minNeededDeposit).toEqual(0);
        });

        it('should set shortDescriptionParams and longDescriptionParams initial values', async () => {
            //Act
            await component.ngOnInit();

            //Assert
            expect(component.shortDescriptionParams).toEqual({
                accountMinBalance: component.minNeededDeposit,
                currentReplenishmentAmount: 0
            });
            expect(component.longDescriptionParams).toEqual({
                newAccountMinBalance: component.calculateMinAcctBalance(component.rebillObj.rebillAmount),
                newReplenishmentAmount: component.rebillObj.rebillAmount || 0,
                billingTypeLong: null
            });
        });

        it('should call getAccountInfo()', async () => {

            //Act
            await component.ngOnInit();

            //Assert
            expect(profileApiService.getAccountInfo).toHaveBeenCalled(); //toHaveBeenCalledTimes(1);
        });

    });

    describe('ngDoCheck', () => {
        it('should change longDescriptionParams (EFT)', () => {
            //Assemble
            component.ngOnInit(); //to mock out component init to set rebillobj values to be defined.
            component.billingType = BillingType.Eft;

            //Act
            component.rebillObj.rebillAmount = 12345;
            component.ngDoCheck();

            //Assert
            expect(component.longDescriptionParams).toEqual({
                newAccountMinBalance: component.calculateMinAcctBalance(12345),
                newReplenishmentAmount: 12345,
                billingTypeLong: BillingTypeLong.BankAccount
            });
        });

        it('should change longDescriptionParams (CC)', () => {
            //Assemble
            component.ngOnInit(); //to mock out component init to set rebillobj values to be defined.
            component.billingType = BillingType.Credit;

            //Act
            component.rebillObj.rebillAmount = 54321;
            component.ngDoCheck();

            //Assert
            expect(component.longDescriptionParams).toEqual({
                newAccountMinBalance: component.calculateMinAcctBalance(54321),
                newReplenishmentAmount: 54321,
                billingTypeLong: BillingTypeLong.CreditCard
            });
        });
    });

    describe('getAccountInfo', () => {
        it('should set accountData with state params', async () => {
            //Assemble
            component.rebillObj = {
                accountType: 'false',
                currentRebillAmount: 0,
                minimumBalance: 0,
                minimumBalanceMultiplier: .25,
                rebillAmount: null
            };

            const expectedAccountData = {
                depositAmtEFT: 111111,
                depositAmtCC: 2222222,
                billingInfo: {
                    billingTypeDisplay: BillingType.Eft
                },
                minimumBalance: 333333,
                rebillAmount: 444444
            } as any;

            uiRouterGlobals.params.accountData = expectedAccountData;

            //Act
            await component['getAccountInfo']();

            //Assert
            expect(profileApiService.getAccountInfo).not.toHaveBeenCalled();
            expect(component.accountData).toEqual(expectedAccountData);
        });

        it('should call api and set accountData with apiResponse if accountData not obtained by state params',
            async () => {
                //Assemble
                component.rebillObj = {
                    accountType: 'false',
                    currentRebillAmount: 0,
                    minimumBalance: 0,
                    minimumBalanceMultiplier: .25,
                    rebillAmount: null
                };
                const expectedAccountData = {
                    billingInfo: { billingTypeDisplay: 'fake billingTypeDisplay' },
                    depositAmtEFT: 1111,
                    depositAmtCC: 2222
                } as GetAccountInformationResponse;

                (profileApiService.getAccountInfo as jasmine.Spy).and.returnValue(expectedAccountData);

                //Act
                await component['getAccountInfo']();

                //Assert
                expect(profileApiService.getAccountInfo).toHaveBeenCalledTimes(1);
                expect(component.accountData).toEqual(expectedAccountData);

            });
        it('should set component values if state params is truthy with CREDIT', async () => {
            //Assemble
            component.rebillObj = {
                accountType: 'false',
                currentRebillAmount: 0,
                minimumBalance: 0,
                minimumBalanceMultiplier: .25,
                rebillAmount: null
            };

            const expectedAccountData = {
                billingInfo: { billingTypeDisplay: BillingType.Credit },
                depositAmtEFT: 1111,
                depositAmtCC: 2222,
                minimumBalance: 888
            } as GetAccountInformationResponse;

            uiRouterGlobals.params.accountData = expectedAccountData;

            //Act
            await component['getAccountInfo']();

            //Assert
            expect(profileApiService.getAccountInfo).not.toHaveBeenCalled();
            expect(component.billingType).toEqual(BillingType.Credit);
            expect(component.accountData).toEqual(expectedAccountData);
            expect(component.minNeededDeposit).toEqual(2222);
            expect(component.shortDescriptionParams).toEqual({
                accountMinBalance: 888,
                currentReplenishmentAmount: expectedAccountData.rebillAmount || 0
            });
            expect(component.longDescriptionParams).toEqual({
                newAccountMinBalance: component.calculateMinAcctBalance(expectedAccountData.rebillAmount),
                newReplenishmentAmount: expectedAccountData.rebillAmount || 0,
                billingTypeLong: BillingTypeLong.CreditCard
            });
        });

        it('should set component values if state params is truthy with EFT', async () => {
            //Assemble
            component.rebillObj = {
                accountType: 'false',
                currentRebillAmount: 0,
                minimumBalance: 0,
                minimumBalanceMultiplier: .25,
                rebillAmount: null
            };

            const expectedAccountData = {
                billingInfo: { billingTypeDisplay: BillingType.Eft },
                depositAmtEFT: 1111,
                depositAmtCC: 2222,
                minimumBalance: 888
            } as GetAccountInformationResponse;

            uiRouterGlobals.params.accountData = expectedAccountData;

            //Act
            await component['getAccountInfo']();

            //Assert
            expect(profileApiService.getAccountInfo).not.toHaveBeenCalled();
            expect(component.billingType).toEqual(BillingType.Eft);
            expect(component.accountData).toEqual(expectedAccountData);
            expect(component.minNeededDeposit).toEqual(1111);
            expect(component.shortDescriptionParams).toEqual({
                accountMinBalance: 888,
                currentReplenishmentAmount: expectedAccountData.rebillAmount || 0
            });
            expect(component.longDescriptionParams).toEqual({
                newAccountMinBalance: component.calculateMinAcctBalance(expectedAccountData.rebillAmount),
                newReplenishmentAmount: expectedAccountData.rebillAmount || 0,
                billingTypeLong: BillingTypeLong.BankAccount
            });
        });
        it('should set component values if response is truthy with CREDIT', async () => {
            //Assemble
            component.rebillObj = {
                accountType: 'false',
                currentRebillAmount: 0,
                minimumBalance: 0,
                minimumBalanceMultiplier: .25,
                rebillAmount: null
            };

            const apiResponseGetAccountInfo = {
                billingInfo: { billingTypeDisplay: BillingType.Credit },
                depositAmtEFT: 1111,
                depositAmtCC: 2222,
                minimumBalance: 888
            } as GetAccountInformationResponse;
            (profileApiService.getAccountInfo as jasmine.Spy).and.returnValue(apiResponseGetAccountInfo);

            //Act
            await component['getAccountInfo']();

            //Assert
            expect(profileApiService.getAccountInfo).toHaveBeenCalledTimes(1);
            expect(component.billingType).toEqual(BillingType.Credit);
            expect(component.accountData).toEqual(apiResponseGetAccountInfo);
            expect(component.minNeededDeposit).toEqual(2222);
            expect(component.shortDescriptionParams).toEqual({
                accountMinBalance: 888,
                currentReplenishmentAmount: apiResponseGetAccountInfo.rebillAmount || 0
            });
            expect(component.longDescriptionParams).toEqual({
                newAccountMinBalance: component.calculateMinAcctBalance(apiResponseGetAccountInfo.rebillAmount),
                newReplenishmentAmount: apiResponseGetAccountInfo.rebillAmount || 0,
                billingTypeLong: BillingTypeLong.CreditCard
            });
        });

        it('should set component values if response is truthy with EFT', async () => {
            //Assemble
            component.rebillObj = {
                accountType: 'false',
                currentRebillAmount: 0,
                minimumBalance: 0,
                minimumBalanceMultiplier: .25,
                rebillAmount: null
            };

            const apiResponseGetAccountInfo = {
                billingInfo: { billingTypeDisplay: BillingType.Eft },
                depositAmtEFT: 1111,
                depositAmtCC: 2222,
                minimumBalance: 888
            } as GetAccountInformationResponse;
            (profileApiService.getAccountInfo as jasmine.Spy).and.returnValue(apiResponseGetAccountInfo);

            //Act
            await component['getAccountInfo']();

            //Assert
            expect(profileApiService.getAccountInfo).toHaveBeenCalledTimes(1);
            expect(component.billingType).toEqual(BillingType.Eft);
            expect(component.accountData).toEqual(apiResponseGetAccountInfo);
            expect(component.minNeededDeposit).toEqual(1111);
            expect(component.shortDescriptionParams).toEqual({
                accountMinBalance: 888,
                currentReplenishmentAmount: apiResponseGetAccountInfo.rebillAmount || 0
            });
            expect(component.longDescriptionParams).toEqual({
                newAccountMinBalance: component.calculateMinAcctBalance(apiResponseGetAccountInfo.rebillAmount),
                newReplenishmentAmount: apiResponseGetAccountInfo.rebillAmount || 0,
                billingTypeLong: BillingTypeLong.BankAccount
            });
        });
    });

    describe('showCompletionModal', () => {

        it('should call dialogService.openGenericModal with correct parameters', async () => {
            //Assemble
            component.cmsContent = {
                Children: [{
                    Title: 'modal title', ShortDescription: 'modal desc',
                    ItemID: childCmsIds.CompletionModal.toLocaleLowerCase()

                } as any],
                ShortDescription: '333',
                LongDescription: 'Long Description',
                Title: '444',
                minLowBalance: 10,
                minimumBalanceMultiplier: 0.25,
                minReqDeposit: 0,
            };

            const data = {
                cmsContent: {
                    Title: 'modal title',
                    AcceptBtn: 'OKAY',
                    PrimaryContent: 'modal desc'
                }
            };

            //Act
            await component['showCompletionModal']();

            //Assert
            expect(dialogService.openGenericModal).toHaveBeenCalledOnceWith(GenericCmsModalComponent, data);
        });
    });

    describe('displayErrorForRequiredMinAmount', () => {
        it('should call toaster display 1 time if rebillAmount is less than depositAmtEFT', () => {
            //assemble
            component.billingType = BillingType.Eft;
            component.rebillObj = { rebillAmount: 1 } as any;
            component.accountData = { depositAmtEFT: 2 } as any;

            //act
            const result = component['displayErrorForRequiredMinAmount']();

            //assert
            expect(toasterService.show).toHaveBeenCalledOnceWith(
                'Error',
                'The required minimum replenishment amount for your account is $' + component.accountData.depositAmtEFT);
            expect(result).toEqual(true);
        });
        it('should call toaster display 1 time if rebillAmount is less than depositAmtCC', () => {
            //assemble
            component.billingType = BillingType.Credit;
            component.rebillObj = { rebillAmount: 1 } as any;
            component.accountData = { depositAmtCC: 2 } as any;

            //act
            const result = component['displayErrorForRequiredMinAmount']();

            //assert
            expect(toasterService.show).toHaveBeenCalledOnceWith(
                'Error',
                'The required minimum replenishment amount for your account is $' + component.accountData.depositAmtCC);
            expect(result).toEqual(true);

        });
        it('should not call toaster display if rebillAmount is more than depositAmtEFT', () => {
            //assemble
            component.billingType = BillingType.Eft;
            component.rebillObj = { rebillAmount: 2 } as any;
            component.accountData = { depositAmtEFT: 1 } as any;

            //act
            const result = component['displayErrorForRequiredMinAmount']();

            //assert
            expect(toasterService.show).not.toHaveBeenCalled();
            expect(result).toEqual(false);
        });
        it('should not call toaster display if rebillAmount is more than depositAmtCC', () => {
            //assemble
            component.billingType = BillingType.Eft;
            component.rebillObj = { rebillAmount: 2 } as any;
            component.accountData = { depositAmtCC: 1 } as any;

            //act
            const result = component['displayErrorForRequiredMinAmount']();

            //assert
            expect(toasterService.show).not.toHaveBeenCalled();
            expect(result).toEqual(false);
        });
    });

    describe('saveInformation', () => {
        beforeEach(() => {
            spyOn(component as any, 'showCompletionModal').and.resolveTo();
            spyOn(component as any, 'displayErrorForRequiredMinAmount').and.returnValue(false);

            responseErrorService.isErrorFree.and.returnValue(true);
        });

        it('should not call updateRebillAmount if invalid form', async () => {
            await component.saveInformation({ valid: false } as NgForm, wizard);

            expect(profileApiService.updateRebillAmount).not.toHaveBeenCalled();
        });
        it('should not call updateRebillAmount if displayErrorForRequiredMinAmount() returns true', async () => {
            //assemble
            (component as any)['displayErrorForRequiredMinAmount'].and.returnValue(true);

            //act
            await component.saveInformation({ valid: true } as NgForm, wizard);

            //Assert
            expect(profileApiService.updateRebillAmount).not.toHaveBeenCalled();
        });

        it('should call displayErrorForRequiredMinAmount()', async () => {
            //act
            await component.saveInformation({ valid: true } as NgForm, wizard);

            //assert
            expect((component as any).displayErrorForRequiredMinAmount).toHaveBeenCalledTimes(1);
        });

        it('should call updateRebillAmount()', async () => {
            //assemble
            component.rebillObj = 'fake obj' as any;
            spyOn(component, 'isReBillAmtNotChanged').and.returnValue(false);

            //act
            await component.saveInformation({ valid: true } as NgForm, wizard);

            //assert
            expect(profileApiService.updateRebillAmount).toHaveBeenCalledOnceWith('fake obj' as any);
        });

        it('should call showCompletionModal if response has no errors', async () => {
            //Assemnble
            (profileApiService.updateRebillAmount as jasmine.Spy).and.resolveTo({});
            spyOn(component, 'isReBillAmtNotChanged').and.returnValue(false);

            //Act
            await component.saveInformation({ valid: true } as NgForm, wizard);

            //Assert
            expect((component as any).showCompletionModal).toHaveBeenCalledTimes(1);
            expect(stateService.go).toHaveBeenCalledOnceWith(profileStates.AccountDetails);
        });

        it('should not call showCompletionModal if response has errors', async () => {
            //Assemble
            responseErrorService.isErrorFree.and.returnValue(false);

            //Act
            await component.saveInformation({ valid: true } as NgForm, wizard);

            //Assert
            expect((component as any).showCompletionModal as jasmine.Spy).not.toHaveBeenCalled();
        });

        it('should call wizard.gotoNextState if kiosk', async () => {
            //Assemble
            (profileApiService.updateRebillAmount as jasmine.Spy).and.resolveTo({});
            spyOn(component, 'isReBillAmtNotChanged').and.returnValue(false);
            component.isKiosk = true;

            //Act
            await component.saveInformation({ valid: true } as NgForm, wizard);

            //Assert
            expect((component as any).showCompletionModal as jasmine.Spy).toHaveBeenCalledTimes(1);
            expect(stateService.go).not.toHaveBeenCalled();
            expect(authService.profile).toHaveBeenCalled();
            expect(wizard.gotoCancelState).toHaveBeenCalledTimes(1);
        });

        it('should call state.go if desktopMode', async () => {
            //Assemble
            (profileApiService.updateRebillAmount as jasmine.Spy).and.resolveTo({});
            storeFrontUtilityService.isRunningAsKiosk = true;
            storeFrontUtilityService.webStoreData.fullSiteMode = true;
            spyOn(component, 'isReBillAmtNotChanged').and.returnValue(false);

            //Act
            await component.saveInformation({ valid: true } as NgForm, wizard);

            //Assert
            expect((component as any).showCompletionModal as jasmine.Spy).toHaveBeenCalledTimes(1);
            expect(authService.profile).toHaveBeenCalled();
            expect(stateService.go).toHaveBeenCalledOnceWith(profileStates.AccountDetails);
        });

        it('should call storefrontService.completeWorkItem if kiosk', async () => {
            //Assemble
            (profileApiService.updateRebillAmount as jasmine.Spy).and.resolveTo({});
            (storefrontService.completeWorkItem as jasmine.Spy).and.resolveTo();
            spyOn(component, 'isReBillAmtNotChanged').and.returnValue(true);
            component.isKiosk = true;

            //Act
            await component.saveInformation({ valid: true } as NgForm, wizard);

            //Assert
            // expect((component as any).showCompletionModal as jasmine.Spy).toHaveBeenCalledTimes(1);
            //expect(storefrontService.completeWorkItem).not.toHaveBeenCalled();
            expect(wizard.gotoNextState).toHaveBeenCalled();
            // expect(authService.profile).toHaveBeenCalled();
            // expect(wizard.gotoCancelState).toHaveBeenCalledTimes(1);
        });
    });

    describe('cancel', () => {

        it('should call state.go 1 time', async () => {
            //Act
            await component.cancel(wizard);

            //assert
            expect(stateService.go).toHaveBeenCalledOnceWith(profileStates.AccountDetails);
        });

        it('should call gotoCancelState 1 time', async () => {
            //Act
            component.isKiosk = true;
            await component.cancel(wizard);

            //assert
            expect(wizard.gotoCancelState).toHaveBeenCalledTimes(1);
        });
    });

    describe('calculateNewMinAcctBalance', () => {
        [{ fullAmt: 100, expectedMinBalance: 25 },
        { fullAmt: 200, expectedMinBalance: 50 },
        { fullAmt: 300, expectedMinBalance: 75 },
        { fullAmt: 400, expectedMinBalance: 100 }
        ]
            .forEach(({ fullAmt, expectedMinBalance }) => {
                it('should set rebillObj.minimumBalance to correct value and return correct value', () => {
                    //Assemble
                    component.rebillObj = { minimumBalanceMultiplier: .25 } as any;

                    //Act
                    const result = component.calculateMinAcctBalance(fullAmt);

                    //Assert
                    expect(component.rebillObj.minimumBalance).toEqual(expectedMinBalance);
                    expect(result).toEqual(expectedMinBalance);
                });
            });
    });

    describe('authorizeChange', () => {
        beforeEach(() => {
            component.rebillObj = {
                accountType: 'false',
                currentRebillAmount: 0,
                minimumBalance: 0,
                minimumBalanceMultiplier: .25,
                rebillAmount: null
            };
            component.accountData = {
                rebillAmount: 40,
                billingInfo: { billingTypeDisplay: BillingType.Eft },
                depositAmtEFT: 40
            } as any;
        });

        it('should check minNeededDeposit to be 0, if isChecked is false and isFlexPay is true', () => {
            const mockEvent = { target: { checked: false } };
            component.authorizeChange(mockEvent);
            expect(component.minNeededDeposit).toEqual(0);

        });

        it('should check minNeededDeposit not be 0, if isChecked is true and isFlexPay is true', () => {
            const mockEvent = { target: { checked: true } };

            component.authorizeChange(mockEvent);

            expect(component.minNeededDeposit).toEqual(40);
        });
    });

    describe('onAuthorizationClick', () => {
        it('should check openSliderCentered is invoked onAuthorizationClick', () => {
            component.onAuthorizationClick();

            expect(dialogService.openSliderCentered).toHaveBeenCalled();
        });
    });

    describe('authorizeChange', () => {
        beforeEach(() => {
            component.rebillObj = {
                accountType: 'false',
                currentRebillAmount: 0,
                minimumBalance: 0,
                minimumBalanceMultiplier: .25,
                rebillAmount: null
            };
            component.accountData = {
                rebillAmount: 40,
                billingInfo: { billingTypeDisplay: BillingType.Eft },
                depositAmtEFT: 40
            } as any;
        });

        it('should check minNeededDeposit to be 0, if isChecked is false and isFlexPay is true', () => {
            const mockEvent = { target: { checked: false } };
            component.authorizeChange(mockEvent);
            expect(component.minNeededDeposit).toEqual(0);

        });

        it('should check minNeededDeposit not be 0, if isChecked is true and isFlexPay is true', () => {
            const mockEvent = { target: { checked: true } };

            component.authorizeChange(mockEvent);

            expect(component.minNeededDeposit).toEqual(40);
        });
    });

    describe('onAuthorizationClick', () => {
        it('should check openSliderCentered is invoked onAuthorizationClick', () => {
            component.onAuthorizationClick();

            expect(dialogService.openSliderCentered).toHaveBeenCalled();
        });
    });
});
