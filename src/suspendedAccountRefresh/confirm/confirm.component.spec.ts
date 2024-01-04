import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { FormsModule } from '@angular/forms';
import { ValidationModule } from 'validation/module';
import { ConfirmComponent, ConfirmContent } from './confirm.component';
import { SuspendedAccountService } from '../services/suspendedAccount.service';
import { StateService } from '@uirouter/core';
import { FrameComponent } from 'suspendedAccountRefresh/frame/frame.component';
import { SiteCoreItem } from 'cms/cms.module';
import { BillingInfo, BillingType } from 'common/models';
import { ConfirmManager } from './confirm.manager';
import { ResponseErrorService } from 'common/services';
import { BaseResponse } from 'common/interfaces';
import { AuthChannelService } from 'authentication/authChannelService/authChannel.service';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';
import { SessionService } from 'common/services/session/session.service';

describe('component: suspended-confirm', () => {

    let fixture: ComponentFixture<ConfirmComponent>;
    let component: ConfirmComponent;

    let frameComponent: FrameComponent;
    let suspendedAccountService: SuspendedAccountService;
    let stateService;
    let confirmManager;
    let responseErrorService;
    let session: jasmine.SpyObj<SessionService>;
    let authService: AuthenticationService;
    let webStorage: any;

    beforeEach(async () => {

        frameComponent = jasmine.createSpyObj('frame', ['']);
        suspendedAccountService = {} as SuspendedAccountService;
        stateService = jasmine.createSpyObj('stateService', ['go']);
        confirmManager = jasmine.createSpyObj('manager', ['submitPayment']);
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['displayErrorsFromResponse']);
        session = jasmine.createSpyObj('session', ['create']);
        authService = jasmine.createSpyObj('authService', ['profile']);
        webStorage =jasmine.createSpyObj('webStorage', ['getValue']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    ConfirmComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, FormsModule, ValidationModule],
                providers: [
                    { provide: FrameComponent, useFactory: () => frameComponent },
                    { provide: SuspendedAccountService, useFactory: () => suspendedAccountService },
                    { provide: StateService, useFactory: () => stateService },
                    { provide: ConfirmManager, useFactory: () => confirmManager },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: AuthenticationService, useFactory: () => authService },
                    { provide: SessionService, useFactory: () => session },

                    { provide: WebStorageService, useFactory: () => webStorage },
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(ConfirmComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should create confirm comp', async () => {

        expect(component).toBeDefined();

    });

    it('should intitalize confirm comp - CC', async () => {

        component.cmsContent = {} as SiteCoreItem & ConfirmContent;
        component.cmsContent.LongDescription = 'Please verify the information..test';
        component.cmsContent.paymentDetailsCC = 'Payment Details CC';

        const response = { billingType: BillingType.Credit } as any;
        suspendedAccountService.paymentInfo = response;
        await component.ngOnInit();

        expect(component.paymentConfirmConfig.header).toEqual(component.cmsContent.LongDescription);
        expect(component.paymentConfirmConfig.paymentDetails.header.label).toEqual('Payment Details CC');
    });

    it('should intitalize confirm comp - EFT', async () => {

        component.cmsContent = {} as SiteCoreItem & ConfirmContent;
        component.cmsContent.LongDescription = 'Please verify the information..test';
        component.cmsContent.paymentDetailsEFT = 'Payment Details EFT';

        const response = { billingType: BillingType.Eft } as any;
        suspendedAccountService.paymentInfo = response;
        await component.ngOnInit();

        expect(component.paymentConfirmConfig.header).toEqual(component.cmsContent.LongDescription);
        expect(component.paymentConfirmConfig.paymentDetails.header.label).toEqual('Payment Details EFT');
    });

    it('should go to next state if no error: unsuspended', async () => {

        const response = {
            errors: [],
            suspensionFlag: false,
            acctId: '1234'
        } as any;

        (confirmManager.submitPayment as jasmine.Spy)
            .and.resolveTo(response);

        const state = {} as any;

        await component.nextStep(state);
        expect(stateService.go).toHaveBeenCalledWith(state);
        expect(authService.profile).toHaveBeenCalled();

    });

    it('should go to next state if no error: not unsuspended', async () => {

        const response = {
            errors: [],
            suspensionFlag: true,
            acctId: '1234'
        } as any;

        (confirmManager.submitPayment as jasmine.Spy)
            .and.resolveTo(response);

        const state = {} as any;

        await component.nextStep(state);
        expect(stateService.go).toHaveBeenCalledWith(state);
        expect(authService.profile).toHaveBeenCalled();

    });

    it('should not go to next state if error', async () => {
        const res = {
            errors: [{ key: '', message: 'error' }],
        } as BaseResponse;

        (confirmManager.submitPayment as jasmine.Spy).
            and.
            resolveTo(res);

        const state = {} as any;

        await component.nextStep(state);
        expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledWith(res);


    });
});
