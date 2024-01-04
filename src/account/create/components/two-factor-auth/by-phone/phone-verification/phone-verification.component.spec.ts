// import { } from 'jasmine';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { TestBed, ComponentFixture } from '@angular/core/testing';
// import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
// import { ForgotPasswordPhoneVerificationComponent } from './phoneVerification.component';
// import { ForgotPasswordFrameComponent } from '../frame/frame.component';
// import { WebStorageConst } from '../../constants/webstorage.constants';
// import { WindowRef } from '../../common/module';
// import { CmsReplacementService } from '../../cms/services';
// import { PipesModule } from 'pipes/module';
// import { ForgotPasswordService } from '../services/forgotPassword.service';
// import { PhoneVerificationCMS, TwoFactorAuthSendResponse } from '2FA/interfaces';

// describe('ForgotPasswordPhoneVerificationComponent', () => {

//     let fixture: ComponentFixture<ForgotPasswordPhoneVerificationComponent>;
//     let component: ForgotPasswordPhoneVerificationComponent;
//     let state: StateService;
//     let parent: ForgotPasswordFrameComponent;
//     let forgotPasswordService: jasmine.SpyObj<ForgotPasswordService>;
//     let webStorage: WebStorageConst;
//     let cmsReplacement: jasmine.SpyObj<CmsReplacementService>;
//     let windowRef: jasmine.SpyObj<Window>;
//     let uiRouterGlobals: UIRouterGlobals;

//     beforeEach(async () => {

//         state = jasmine.createSpyObj('state', ['go']);
//         parent = {} as ForgotPasswordFrameComponent;
//         forgotPasswordService = jasmine.createSpyObj('forgotPasswordService', ['sendCode']);
//         webStorage = new WebStorageConst();
//         cmsReplacement = jasmine.createSpyObj('cmsReplacementService', ['transformTemplate']);
//         windowRef = jasmine.createSpyObj('window', ['localStorage']);
//         uiRouterGlobals = {
//             params: {}
//         } as UIRouterGlobals;

//         await TestBed
//             .configureTestingModule({
//                 declarations: [
//                     ForgotPasswordPhoneVerificationComponent
//                 ],
//                 schemas: [NO_ERRORS_SCHEMA],
//                 imports: [PipesModule],
//                 providers: [
//                     { provide: WindowRef, useFactory: () => windowRef },
//                     { provide: StateService, useFactory: () => state },
//                     { provide: ForgotPasswordFrameComponent, useFactory: () => parent },
//                     { provide: ForgotPasswordService, useFactory: () => forgotPasswordService },
//                     { provide: WebStorageConst, useFactory: () => webStorage },
//                     { provide: Window, useFactory: () => windowRef },
//                     { provide: CmsReplacementService, useFactory: () => cmsReplacement },
//                     { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals }
//                 ]
//             })
//             .compileComponents();

//         fixture = TestBed.createComponent(ForgotPasswordPhoneVerificationComponent);
//         component = fixture.debugElement.componentInstance;

//         component.cmsData = {
//             LongDescription: ''
//         } as PhoneVerificationCMS;
//     });

//     describe('canary', () => {
//         it('should pass', () => {
//             expect(true).toBe(true);
//         });
//     });

//     describe('ngOnInit', () => {

//         it('should update cms text', async () => {
//             cmsReplacement.transformTemplate.and.returnValue('CMS message replaced');

//             component.ngOnInit();

//             expect(component.isText).toBe(true);
//             expect(component.cmsData.LongDescription).toBe('CMS message replaced');
//         });
//     });

//     describe('sendCode', () => {
//         it('should call sendVerificationCode and go to next state on success', async () => {
//             forgotPasswordService.sendCode.and.returnValue(Promise.resolve({} as TwoFactorAuthSendResponse));

//             await component.sendCode({} as StateDeclaration);

//             expect(forgotPasswordService.sendCode).toHaveBeenCalled();
//             expect(state.go).toHaveBeenCalled();
//         });

//         it('should call sendVerificationCode and not go to next state on failure', async () => {
//             forgotPasswordService.sendCode.and.returnValue(Promise.resolve(null));

//             await component.sendCode({} as StateDeclaration);

//             expect(forgotPasswordService.sendCode).toHaveBeenCalled();
//             expect(state.go).not.toHaveBeenCalled();
//         });
//     });
// });
