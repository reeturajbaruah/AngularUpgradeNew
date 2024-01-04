import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StateService } from '@uirouter/core';
import { BillingInfoUtilitiesService } from 'common/billing';
import { ENVIRON_CONFIG } from 'common/module';
import { WindowRef } from 'common/providers';
import { CurrentUserService, GenericRepoService, ResponseErrorService } from 'common/services';
import { UserRoles } from 'constants/module';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { StateNames as ProfileStateNames } from 'profile/module';
import { MailingAddressService } from 'vehicles/shared';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';
import { CloseAccountFrameComponent } from './frame.component';
import { SessionService } from 'common/services/session/session.service';


describe('component: close-account-frame', () => {

    let fixture: ComponentFixture<CloseAccountFrameComponent>;
    let component: CloseAccountFrameComponent;
    let windowRef: jasmine.SpyObj<Window>;
    let stateService: jasmine.SpyObj<StateService>;
    let profileStateNames: ProfileStateNames;
    let responseErrorService: jasmine.SpyObj<{ isErrorFree }>;
    let environmentConfig: { hideRefundMethodSelection: boolean };
    let genericRepo: any;
    let webStorage: jasmine.SpyObj<{ removeEntry }>;
    let session: jasmine.SpyObj<SessionService>;
    let userRoles: UserRoles;
    let currentUser: jasmine.SpyObj<{ getCurrentUser; updateCurrentUser }>;
    let billingInfoUtilitiesService: jasmine.SpyObj<BillingInfoUtilitiesService>;
    let mailingAddressService: jasmine.SpyObj<MailingAddressService>;


    beforeEach(async () => {
        windowRef = jasmine.createSpyObj('window', ['scrollTo']);
        stateService = jasmine.createSpyObj('stateService', ['go']);
        profileStateNames = new ProfileStateNames();
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree']);
        environmentConfig = {
            hideRefundMethodSelection: true
        };
        genericRepo = {
            dataFactory: {
                closeAccount: jasmine.createSpy('closeAccount'),
                getRefundData: jasmine.createSpy('getRefundData'),
            }
        };
        webStorage = jasmine.createSpyObj('webStorage', ['removeEntry']);
        session = jasmine.createSpyObj('SessionService', ['setAcctActivity'], { userRole: 'fake user role' });
        userRoles = new UserRoles();
        currentUser = jasmine.createSpyObj('currentUser', ['updateCurrentUser', 'getCurrentUser']);
        billingInfoUtilitiesService = jasmine.createSpyObj('billingInfoUtilitiesService', ['isInternationalAddress']);
        mailingAddressService = jasmine.createSpyObj('MailingAddressService', ['setMailingAddressOnAcctLevel', 'getMailingAddress']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    CloseAccountFrameComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: WindowRef, useFactory: () => windowRef },
                    { provide: StateService, useFactory: () => stateService },
                    { provide: ProfileStateNames, useFactory: () => profileStateNames },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                    { provide: GenericRepoService, useFactory: () => genericRepo },
                    { provide: WebStorageService, useFactory: () => webStorage },
                    { provide: SessionService, useFactory: () => session },
                    { provide: UserRoles, useFactory: () => userRoles },
                    { provide: CurrentUserService, useFactory: () => currentUser },
                    { provide: BillingInfoUtilitiesService, useFactory: () => billingInfoUtilitiesService },
                    { provide: MailingAddressService, useFactory: () => mailingAddressService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(CloseAccountFrameComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsContent = {
            Step1: 'step1',
            Step2: 'step2',
            Step3: 'step3'
        };
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('onInit', () => {

        beforeEach(() => {

            spyOn(component as any, 'populateRefundData');
            mailingAddressService.setMailingAddressOnAcctLevel.and.resolveTo(true);
        });

        it('should sucessfully assign empty CloseAccountRefund object to closeAccountRefund', async () => {

            await component.ngOnInit();

            expect(component.closeAccountRefund).toEqual({
                mailingInfo: null,
                method: null,
                billingType: null,
                currentBalance: null,
                creditCard: null,
                date: null
            });
        });

        it('should sucessfully call component.populateRefundData', async () => {

            await component.ngOnInit();

            expect(component['populateRefundData']).toHaveBeenCalledTimes(1);
            expect(component['populateRefundData']).toHaveBeenCalledWith();
        });

        it('should set steps', async () => {

            await component.ngOnInit();

            expect(component.steps).toEqual([
                { name: 'step1', background: 'ternary' },
                { name: 'step2', background: 'ternary' },
                { name: 'step3', background: 'ternary' }
            ]);
        });
    });

    describe('scrollToTop', () => {
        it('should toggle hidden flag and scroll to top of page', async () => {

            component.isHidden = true;

            await component.scrollToTop();

            expect(component.isHidden).toBe(false);
            expect(windowRef.scrollTo).toHaveBeenCalledWith(0, 0);
        });
    });

    describe('onCloseContinue', () => {

        const fakeCurrentUser = {
            user: 'fake user',
            acctActivity: 'A'
        };

        beforeEach(() => {

            spyOn(component as any, 'populateRefundData');
            component.closeAccountRefund = {} as any;
            genericRepo.dataFactory.closeAccount.and.returnValue('fake close account response');
            responseErrorService.isErrorFree.and.returnValue(false);
            currentUser.getCurrentUser.and.returnValue(fakeCurrentUser);
            mailingAddressService.setMailingAddressOnAcctLevel.and.resolveTo(true);
            session.setAcctActivity.and.callThrough();
        });

        it('should not modify closeAccountRefund.method if it is defined', () => {

            component.closeAccountRefund.method = 'some method' as any;

            component.onCloseContinue();

            expect(component.closeAccountRefund.method).toEqual('some method');
        });

        [
            { billingType: 'CREDIT', expected: 'credit' },
            { billingType: 'EFT', expected: 'check' }
        ].forEach(({ billingType, expected }) => {

            it('should modify closeAccountRefund.method if it is defined', () => {

                component.closeAccountRefund.billingType = billingType as any;

                component.onCloseContinue();

                expect(component.closeAccountRefund.method).toEqual(expected);
            });
        });

        it('should call api.closeAccount', waitForAsync(() => {

            component.closeAccountRefund.method = 'some method' as any;

            component.onCloseContinue().then(() => {
                expect(genericRepo.dataFactory.closeAccount).toHaveBeenCalledTimes(1);
                expect(genericRepo.dataFactory.closeAccount).toHaveBeenCalledWith({
                    refundType: 'some method',
                    creditValue: 'credit',
                    checkValue: 'check'
                });
            });
        }));

        it('should call responseErrorService.isErrorFree with api.closeAccount response', async () => {

            await component.onCloseContinue();

            expect(responseErrorService.isErrorFree).toHaveBeenCalledTimes(1);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith('fake close account response');
        });

        it('should not go to closeAccountReview when responseErrorService.isErrorFree returns false', async () => {

            await component.onCloseContinue();

            expect(webStorage.removeEntry).not.toHaveBeenCalled();
            expect(session.userRole).toBe('fake user role');
            expect(session.setAcctActivity).not.toHaveBeenCalled();
            expect(currentUser.getCurrentUser).not.toHaveBeenCalled();
            expect(currentUser.updateCurrentUser).not.toHaveBeenCalled();
            expect(stateService.go).not.toHaveBeenCalled();
        });

        it('should go to closeAccountReview when responseErrorService.isErrorFree returns true', async () => {
            (Object.getOwnPropertyDescriptor(session, 'userRole').get as jasmine.Spy).and.returnValue('pendingClosure');
            responseErrorService.isErrorFree.and.returnValue(true);

            await component.onCloseContinue();

            expect(webStorage.removeEntry).toHaveBeenCalledTimes(1);
            expect(webStorage.removeEntry).toHaveBeenCalledWith('closeAgreed');
            expect(session.userRole).toBe(userRoles.pendingClosure);
            expect(session.setAcctActivity).toHaveBeenCalledTimes(1);
            expect(session.setAcctActivity).toHaveBeenCalledWith('I');
            expect(currentUser.getCurrentUser).toHaveBeenCalledWith();
            expect(currentUser.updateCurrentUser).toHaveBeenCalledTimes(1);
            expect(currentUser.updateCurrentUser).toHaveBeenCalledWith({ user: 'fake user', acctActivity: 'I' });
            expect(currentUser.getCurrentUser()).toEqual({ user: 'fake user', acctActivity: 'I' });
            expect(stateService.go).toHaveBeenCalledTimes(1);
            expect(stateService.go).toHaveBeenCalledWith(profileStateNames.CloseAccountReview, {}, { custom: { isExplicitlyAllowedTransition: true } });
        });
    });

    describe('populateRefundData', () => {

        let response;

        beforeEach(() => {

            response = {
                currentBalance: 'fake current balance',
                billingInfo: {
                    cards: ['first fake card', 'second fake card'],
                    billingTypeDisplay: 'fake billing type display',
                }
            };

            genericRepo.dataFactory.getRefundData.and.returnValue(response);
            responseErrorService.isErrorFree.and.returnValue(false);
            billingInfoUtilitiesService.isInternationalAddress.and.returnValue('fake is international address' as any);
            component.closeAccountRefund = {} as any;
            component.hideRefundMethodSelection = null;
            mailingAddressService.getMailingAddress.and.resolveTo({ address1: 'fake address 1',  } as any);
        });

        it('should call getRefundData', () => {

            component['populateRefundData']();

            expect(genericRepo.dataFactory.getRefundData).toHaveBeenCalledTimes(1);
        });

        it('should call responseErrorService.isErrorFree', async () => {

            await component['populateRefundData']();

            expect(responseErrorService.isErrorFree).toHaveBeenCalledTimes(1);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith(response);
        });

        it('should not modify hideRefundMethodSelection when responseErrorService.isErrorFree returns false', async () => {

            await component['populateRefundData']();

            expect(component.hideRefundMethodSelection).toBe(null);
        });

        it('should not modify closeAccountRefund when responseErrorService.isErrorFree returns false', async () => {

            await component['populateRefundData']();

            expect(component.closeAccountRefund).toEqual({} as any);
        });

        it('should set hideRefundMethodSelection to environmentConfig.hideRefundMethodSelection ' +
            'when responseErrorService.isErrorFree returns true',
            async () => {

                responseErrorService.isErrorFree.and.returnValue(true);
                environmentConfig.hideRefundMethodSelection = 'fake hideRefundMethodSelection' as any;

                await component['populateRefundData']();

                expect(component.hideRefundMethodSelection).toBe('fake hideRefundMethodSelection' as any);
            });

        it('should set closeAccountRefund.currentBalance when response error free', async () => {

            responseErrorService.isErrorFree.and.returnValue(true);

            await component['populateRefundData']();

            expect(component.closeAccountRefund.currentBalance).toBe('fake current balance');
        });

        it('should set closeAccountRefund.date when response error free', async () => {

            responseErrorService.isErrorFree.and.returnValue(true);

            const before = new Date().getTime();
            await component['populateRefundData']();
            const after = new Date().getTime();

            expect(component.closeAccountRefund.date.getTime()).toBeGreaterThanOrEqual(before);
            expect(component.closeAccountRefund.date.getTime()).toBeLessThanOrEqual(after);
        });

        it('should set closeAccountRefund.creditCard when response error free', async () => {

            responseErrorService.isErrorFree.and.returnValue(true);

            await component['populateRefundData']();

            expect(component.closeAccountRefund.creditCard).toEqual('first fake card');
        });

        it('should set closeAccountRefund.billingType when response error free', async () => {

            responseErrorService.isErrorFree.and.returnValue(true);

            await component['populateRefundData']();

            expect(component.closeAccountRefund.billingType).toEqual('fake billing type display');
        });

        it('should set closeAccountRefund.mailingAddress when response error free', async () => {

            responseErrorService.isErrorFree.and.returnValue(true);

            await component['populateRefundData']();

            expect(billingInfoUtilitiesService.isInternationalAddress).toHaveBeenCalledTimes(1);
            expect(component.closeAccountRefund.mailingInfo).toEqual({
                address1: 'fake address 1',
                international: 'fake is international address'
            } as any);
        });

        [
            { billingTypeDisplay: 'EFT', hideRefundMethodSelection: false, expected: 'check' },
            { billingTypeDisplay: 'EFT', hideRefundMethodSelection: true, expected: 'check' },
            { billingTypeDisplay: 'CREDIT', hideRefundMethodSelection: false, expected: 'credit' },
            { billingTypeDisplay: 'CREDIT', hideRefundMethodSelection: true, expected: 'check' },
        ].forEach(({ billingTypeDisplay, hideRefundMethodSelection, expected }) => {

            it('should set closeAccountRefund.method when response error free', async () => {

                responseErrorService.isErrorFree.and.returnValue(true);
                response.billingInfo.billingTypeDisplay = billingTypeDisplay;
                environmentConfig.hideRefundMethodSelection = hideRefundMethodSelection;

                await component['populateRefundData']();

                expect(component.closeAccountRefund.method).toEqual(expected);
            });
        });

    });

});
