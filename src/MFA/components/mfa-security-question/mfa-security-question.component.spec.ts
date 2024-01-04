import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { ResponseErrorService } from 'common/services';
import { MultiFactorAuthenticationService } from 'MFA/services/multi-factor-authentication.service';
import { PipesModule } from 'pipes/module';
import { MfaSecurityQuestionComponent } from './mfa-security-question.component';

describe('MfaSecurityQuestionComponent', () => {
    let component: MfaSecurityQuestionComponent;
    let fixture: ComponentFixture<MfaSecurityQuestionComponent>;
    let stateService: jasmine.SpyObj<StateService>;
    let uiRouterGlobals: jasmine.SpyObj<UIRouterGlobals>;
    let multiFactorAuthenticationService: jasmine.SpyObj<MultiFactorAuthenticationService>;
    let authService: jasmine.SpyObj<AuthenticationService>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;

    beforeEach(async () => {
        stateService = jasmine.createSpyObj('stateService', ['go']);
        uiRouterGlobals = jasmine.createSpyObj('UIRouterGlobals', null, {
            params: {
                securityQuestionID: 1,
                loginApiResponse: {
                    passwordNeedsReset: false,
                    emailIsMissing: false,
                    securityQuestionIsMissing: false
                }
            }
        });
        stateService.go.and.resolveTo({} as any);
        multiFactorAuthenticationService = jasmine.createSpyObj('MultiFactorAuthenticationService', ['getSecurityQuestions', 'verifySecurityQuestionResponse', 'authenticateUser', 'handleRedirects']);
        multiFactorAuthenticationService.getSecurityQuestions.and.resolveTo({
            errors: [], securityQuestions: [
                {
                    securityQuestionID: 1,
                    securityQuestion: 'security question'
                }
            ]
        } as any);
        multiFactorAuthenticationService.authenticateUser.and.resolveTo({});
        authService = jasmine.createSpyObj('authenticationService', ['isAuthenticated', 'logout']);
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['displayErrorsFromResponse', 'displayAlertsFromResponse']);
       

        await TestBed.configureTestingModule({
            declarations: [MfaSecurityQuestionComponent],
            imports: [
                PipesModule,
                FormsModule
            ],
            providers: [
                { provide: MultiFactorAuthenticationService, useValue: multiFactorAuthenticationService },
                { provide: StateService, useFactory: () => stateService },
                { provide: AuthenticationService, useFactory: () => authService },
                { provide: ResponseErrorService, useFactory: () => responseErrorService },
                { provide: UIRouterGlobals, useValue: uiRouterGlobals }
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MfaSecurityQuestionComponent);
        component = fixture.componentInstance;
        component.cmsData = {
            ItemID: '1',
            ItemName: 'MFA Security Question',
            ItemPath: '/sitecore/content/HCTRA/EZTagAccount/MFA/MFA Security Question',
            DisplayName: 'MFA Security Question',
            ShortDescription: '<p>Answer the following security question to verify your identity:</p>',
            Title: 'Manage Your Account ',
            Purpose: 'MFA Security Question',
            Btn_Text: 'Verify',
            Success_Msg_Text: ' update Phone/Email for verification next time.',
            Multi_Factor_Authentication_Title_Text: 'Multi-factor Authentication',
        } as any;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('should check oninit will invoke getSecurityQuestions api', () => {

            component.ngOnInit();

            expect(multiFactorAuthenticationService.getSecurityQuestions).toHaveBeenCalled();
        });
    });


    describe('cancel', () => {
        it('should check cancel should invoke authservice.logout to have been called', () => {
            authService.logout.and.resolveTo();

            component.cancel();

            expect(authService.logout).toHaveBeenCalled();
        });
    });

    describe('verify', () => {
        it('should call multiFactorAuthenticationService.handleRedirects', fakeAsync(() => {
            multiFactorAuthenticationService.verifySecurityQuestionResponse.and.resolveTo({ errors: [] } as any);

            component.verify();
            tick();
            expect(multiFactorAuthenticationService.authenticateUser).toHaveBeenCalled();
            expect(multiFactorAuthenticationService.handleRedirects).toHaveBeenCalled();
        }));

        it('should call responseErrorService functions', fakeAsync(() => {
            responseErrorService.displayErrorsFromResponse.and.resolveTo([]);
            responseErrorService.displayAlertsFromResponse.and.resolveTo([]);
            multiFactorAuthenticationService.verifySecurityQuestionResponse.and.resolveTo({ errors: [{}] } as any);

            component.verify();
            tick();
            expect(multiFactorAuthenticationService.verifySecurityQuestionResponse).toHaveBeenCalled();
            expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalled();
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalled();
        }));
    });
});
