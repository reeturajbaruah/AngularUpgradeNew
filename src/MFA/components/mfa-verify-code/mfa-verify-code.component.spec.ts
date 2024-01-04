import { I } from '@angular/cdk/keycodes';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { CmsReplacementService } from 'cms/services/cmsReplacement/cmsReplacement.service';
import { PipesModule } from 'pipes/module';
import { MfaVerifyCodeComponent } from './mfa-verify-code.component';
import { mfaStateNames } from 'MFA/constant';
import { MultiFactorAuthenticationService } from '../../services/multi-factor-authentication.service';

describe('MfaVerifyCodeComponent', () => {
    let component: MfaVerifyCodeComponent;
    let fixture: ComponentFixture<MfaVerifyCodeComponent>;
    let stateService: jasmine.SpyObj<StateService>;
    let uiRouterGlobals: jasmine.SpyObj<UIRouterGlobals>;
    let cmsReplacementService: jasmine.SpyObj<CmsReplacementService>;
    let mfaService: jasmine.SpyObj<MultiFactorAuthenticationService>;

    beforeEach(async () => {
        stateService = jasmine.createSpyObj('stateService', ['go']);
        uiRouterGlobals = jasmine.createSpyObj('UIRouterGlobals', null, {
            params: {
                email: '',
                phoneNumber: '***-***-9999',
                acctId: '',
                channel: 'Phone',
                loginApiResponse: {
                    passwordNeedsReset: false,
                    emailIsMissing: false,
                    securityQuestionIsMissing: false
                }
            }
        });
        cmsReplacementService = jasmine.createSpyObj('CmsReplacementService', ['transformTemplate']);
        mfaService = jasmine.createSpyObj('MultiFactorAuthenticationService', ['authenticateUser', 'handleRedirects']);
        mfaService.authenticateUser.and.resolveTo(null);
        stateService.go.and.resolveTo({} as any);
        cmsReplacementService.transformTemplate.and.returnValue('');

        await TestBed.configureTestingModule({
            declarations: [MfaVerifyCodeComponent],
            imports: [PipesModule],
            providers: [
                { provide: StateService, useValue: stateService },
                { provide: CmsReplacementService, useValue: cmsReplacementService },
                { provide: UIRouterGlobals, useValue: uiRouterGlobals },
                { provide: MultiFactorAuthenticationService, useFactory: () => mfaService },
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MfaVerifyCodeComponent);
        component = fixture.componentInstance;
        component.cmsData = {
            ItemID: '4b2d0d6a-0609-47b5-8249-2f86bb985f31',
            DisplayName: 'Verify Code',
            Title: 'Verification Required',
            Purpose: 'Verify Code',
            EMAIL_DESC: `<p>We sent a verification code to:  [[email]]. This one-time code expires in 10 minutes after it was sent.
      </p> <p style=\'margin-top: 10px;\'> <b>Please note:</b> Keep this window open to avoid an interruption in your progress.</p>`,
            RESEND_SUCCESS: 'Code resent. Please enter code.',
            RESEND_FAIL: 'Code not sent. You have exceeded the max resend attempt. Please wait 10 minutes and try again.',
            VERIFY_FAIL: 'Invalid code entered. Please try entering again.',
            SAVE_FAIL: 'Remember device failed',
            PHONE_DESC: `<p>We sent a verification code to:  [[phoneNumber]]. This one-time code expires in 10 minutes after it was sent.</p>
       <p style=\'margin-top: 10px;\'> <b>Please note:</b> Keep this window open to avoid an interruption in your progress.</p>`,
        } as any;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('should expect initial values are updated', () => {
            component.ngOnInit();

            expect(component.isEmail).toBeFalse();
        });
    });

    describe('verify', () => {
        it('should check stateService.go to have been called with proper params', async () => {

            await component.verify();
            expect(mfaService.authenticateUser).toHaveBeenCalled();
            expect(mfaService.handleRedirects).toHaveBeenCalled();
        });
    });

    describe('tryAnotherWay', () => {
        it('should check on invokation of try another way, stateService.go to have been called with proper params', () => {
            component.tryAnotherWay();

            expect(stateService.go).toHaveBeenCalledWith(mfaStateNames.MultiFactorAuthentication, { custom: { isExplicitlyAllowedTransition: true } });
        });
    });
});
