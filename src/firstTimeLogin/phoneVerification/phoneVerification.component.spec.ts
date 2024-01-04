import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { FirstTimeLoginPhoneVerificationComponent } from './phoneVerification.component';
import { FirstTimeLoginFrameComponent } from '../frame/frame.component';
import { WebStorageConst } from '../../constants/webstorage.constants';
import { WindowRef } from '../../common/module';
import { CmsReplacementService } from '../../cms/services';
import { PipesModule } from 'pipes/module';
import { FirstTimeLoginService } from '../services/firstTimeLogin.service';
import { PhoneVerificationCMS, TwoFactorAuthSendResponse } from '../../2FA/interfaces';

describe('FirstTimeLoginPhoneVerificationComponent', () => {

    let fixture: ComponentFixture<FirstTimeLoginPhoneVerificationComponent>;
    let component: FirstTimeLoginPhoneVerificationComponent;
    let state: StateService;
    let parent: FirstTimeLoginFrameComponent;
    let firstTimeLoginService: jasmine.SpyObj<FirstTimeLoginService>;
    let webStorage: WebStorageConst;
    let cmsReplacement: jasmine.SpyObj<CmsReplacementService>;
    let windowRef: jasmine.SpyObj<Window>;
    let uiRouterGlobals: UIRouterGlobals;

    beforeEach(async () => {

        state = jasmine.createSpyObj('state', ['go']);
        parent = {} as FirstTimeLoginFrameComponent;
        firstTimeLoginService = jasmine.createSpyObj('firstTimeLoginService', ['sendCode']);
        webStorage = new WebStorageConst();
        cmsReplacement = jasmine.createSpyObj('cmsReplacementService', ['transformTemplate']);
        windowRef = jasmine.createSpyObj('window', ['localStorage']);
        uiRouterGlobals = {
            params: {}
        } as UIRouterGlobals;

        await TestBed
            .configureTestingModule({
                declarations: [
                    FirstTimeLoginPhoneVerificationComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: WindowRef, useFactory: () => windowRef },
                    { provide: StateService, useFactory: () => state },
                    { provide: FirstTimeLoginFrameComponent, useFactory: () => parent },
                    { provide: FirstTimeLoginService, useFactory: () => firstTimeLoginService },
                    { provide: WebStorageConst, useFactory: () => webStorage },
                    { provide: Window, useFactory: () => windowRef },
                    { provide: CmsReplacementService, useFactory: () => cmsReplacement },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(FirstTimeLoginPhoneVerificationComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsData = {
            LongDescription: ''
        } as PhoneVerificationCMS;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        it('should update cms text', async () => {
            cmsReplacement.transformTemplate.and.returnValue('CMS message replaced');

            component.ngOnInit();

            expect(component.isText).toBe(true);
            expect(component.cmsData.LongDescription).toBe('CMS message replaced');
        });
    });

    describe('sendCode', () => {
        it('should call sendVerificationCode and go to next state on success', async () => {
            firstTimeLoginService.sendCode.and.returnValue(Promise.resolve({} as TwoFactorAuthSendResponse));

            await component.sendCode({} as StateDeclaration);

            expect(firstTimeLoginService.sendCode).toHaveBeenCalled();
            expect(state.go).toHaveBeenCalled();
        });

        it('should call sendVerificationCode and not go to next state on failure', async () => {
            firstTimeLoginService.sendCode.and.returnValue(Promise.resolve(null));

            await component.sendCode({} as StateDeclaration);

            expect(firstTimeLoginService.sendCode).toHaveBeenCalled();
            expect(state.go).not.toHaveBeenCalled();
        });
    });
});
