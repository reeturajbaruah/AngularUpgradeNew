import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { FirstTimeLoginSetupAccessComponent } from './setupOnlineAccess.component';
import { FirstTimeLoginFrameComponent } from '../frame/frame.component';
import { WebApiService } from 'firstTimeLogin/services/webApi.service';
import { OnlineAccessLoginInfo, SetupAccessCms } from 'firstTimeLogin/interfaces';
import { FirstTimeLoginService } from 'firstTimeLogin/services/firstTimeLogin.service';
import { DialogService, SecurityQuestionInfo } from 'common/services';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('FirstTimeLoginSetupAccessComponent', () => {

    let fixture: ComponentFixture<FirstTimeLoginSetupAccessComponent>;
    let component: FirstTimeLoginSetupAccessComponent;
    let state: StateService;
    let parent: FirstTimeLoginFrameComponent;
    let dialogService: DialogService;
    let service: FirstTimeLoginService;
    let uiRouterGlobals: UIRouterGlobals;
    let form: NgForm;

    beforeEach(async () => {

        state = jasmine.createSpyObj('state', ['go']);
        service = jasmine.createSpyObj('service', ['setupAccount', 'getSecurityQuestions']);
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered', 'openGenericModal']);

        uiRouterGlobals = {
            params: {
                email: null,
                acctId: 1,
                loginId: null,
                dbSessionId: 'session'
            }
        } as any;

        await TestBed
            .configureTestingModule({
                declarations: [
                    FirstTimeLoginSetupAccessComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: FirstTimeLoginFrameComponent, useFactory: () => parent },
                    { provide: FirstTimeLoginService, useFactory: () => service },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: DialogService, useFactory: () => dialogService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(FirstTimeLoginSetupAccessComponent);
        component = fixture.debugElement.componentInstance;
        form = fixture.debugElement.query(By.directive(NgForm)).references.Form as NgForm;
        form.form.addControl('password', new FormControl(''));
        form.form.addControl('confirmPassword', new FormControl(''));
        form.form.addControl('primaryEmail_email', new FormControl(''));
        form.form.addControl('confirmPrimaryEmail_email', new FormControl(''));
        form.form.addControl('altEmail_email', new FormControl(''));
        form.form.addControl('confirmAltEmail_email', new FormControl(''));
        form.form.addControl('answer', new FormControl(''));
        form.form.addControl('confirmAnswer', new FormControl(''));

        component.cmsData = {
            CANCEL_TITLE: 'Cancel',
            CANCEL_CONTEXT: 'Context'
        } as SetupAccessCms;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });

    describe('submit', () => {

        it('should not setup if form is invalid', async () => {

            await component.submit(false, 'next');

            expect(state.go).not.toHaveBeenCalled();

        });

        [
            { sq: false, pass: true, email: true, alt: true },
            { sq: true, pass: false, email: true, alt: true },
            { sq: true, pass: true, email: false, alt: true },
            { sq: true, pass: true, email: true, alt: false }
        ]
            .forEach(testCase => {
                it(`should not setup if form is not matching`, async () => {
                    component.doSQsMatch = testCase.sq;
                    component.doPasswordsMatch = testCase.pass;
                    component.doEmailsMatch = testCase.email;
                    component.doAltEmailsMatch = testCase.alt;

                    await component.submit(true, 'next');

                    expect(service.setupAccount).not.toHaveBeenCalled();
                    expect(state.go).not.toHaveBeenCalled();
                });
            });

        it('should send all correct data to setup', async () => {

            const expectedRequest = {
                username: 'username',
                alternateEmail: 'alt',
                email: 'email',
                password: 'pass',
                securityQuestionAnswer: 'answer',
                securityQuestionID: 'ID',
                acctId: 1,
                dbSessionId: 'session'
            } as OnlineAccessLoginInfo;

            (service.setupAccount as jasmine.Spy).and.resolveTo(true);

            component.username = expectedRequest.username;
            component.altEmailAddress = expectedRequest.alternateEmail;
            component.emailAddress = expectedRequest.email;
            component.password = expectedRequest.password;
            component.securityAnswer = expectedRequest.securityQuestionAnswer;
            component.securityQuestionID = expectedRequest.securityQuestionID;
            component.doSQsMatch = true;
            component.doPasswordsMatch = true;
            component.doEmailsMatch = true;
            component.doAltEmailsMatch = true;

            await component.submit(true, 'next');

            expect(service.setupAccount).toHaveBeenCalledWith(expectedRequest);
            expect(state.go).toHaveBeenCalledWith('next');

        });

        it('should not call state.go if setup fails', async () => {

            (service.setupAccount as jasmine.Spy).and.resolveTo(false);

            await component.submit(true, 'next');

            expect(state.go).not.toHaveBeenCalled();
        });

    });

    describe('ngOnInit', () => {

        it('can get security questions', async () => {

            const questions = [
                { securityQuestion: 'What is Your Name?', securityQuestionID: 1 },
                { securityQuestion: 'What is Your Quest?', securityQuestionID: 2 },
                { securityQuestion: 'What is Your Favorite Colour?', securityQuestionID: 3 }
            ] as SecurityQuestionInfo[];

            (service.getSecurityQuestions as jasmine.Spy).and.resolveTo(questions);

            await component.ngOnInit();

            expect(service.getSecurityQuestions).toHaveBeenCalled();
            expect(component.securityQuestions).toEqual(questions);
        });

    });

    describe('cancel', () => {
        it('calls dialogService.openGenericModal and state.go when user cancels out', async () => {
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue(null);

            await component.cancel({} as StateDeclaration);

            expect(dialogService.openGenericModal).toHaveBeenCalled();
            expect(state.go).not.toHaveBeenCalled();
        });

        it('calls dialogService.openGenericModal and not state.go when user does not cancel out', async () => {
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue(true);

            await component.cancel({} as StateDeclaration);

            expect(dialogService.openGenericModal).toHaveBeenCalled();
            expect(state.go).toHaveBeenCalled();
        });
    });

    describe('form', () => {
        it('validateMatchingPassword', () => {;
            form.form.controls.password.markAsDirty();
            form.form.controls.confirmPassword.markAsDirty();
            component.password = 'test';
            component.confirmPassword = 'test';

            component.validateMatchingPassword(form);

            expect(component.doPasswordsMatch).toBeTrue();
        });

        it('validateMatchingEmail', () => {;
            form.form.controls.primaryEmail_email.markAsDirty();
            form.form.controls.confirmPrimaryEmail_email.markAsDirty();
            component.emailAddress = 'test@test';
            component.confirmEmailAddress = 'test@test';

            component.validateMatchingEmail(form);

            expect(component.doEmailsMatch).toBeTrue();
        });

        it('validateMatchingAltEmail', () => {
            form.form.controls.altEmail_email.markAsDirty();
            form.form.controls.confirmAltEmail_email.markAsDirty();
            component.altEmailAddress = 'test@test';
            component.confirmAltEmailAddress = 'test@test';

            component.validateMatchingAltEmail(form);

            expect(component.doAltEmailsMatch).toBeTrue();
        });

        it('validateMatchingSQ', () => {
            form.form.controls.answer.markAsDirty();
            form.form.controls.confirmAnswer.markAsDirty();
            component.securityAnswer = 'test';
            component.confirmSecurityAnswer = 'test';

            component.validateMatchingSQ(form);

            expect(component.doSQsMatch).toBeTrue();
        });
    });
});
