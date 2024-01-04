import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FirstTimeLoginVerifyCodeComponent } from './verifyCode.component';
import { FirstTimeLoginFrameComponent } from '../frame/frame.component';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { CmsReplacementService } from '../../cms/services';
import { VerifyCodeCMS } from '../../2FA/interfaces';

describe('FirstTimeLoginVerifyCodeComponent', () => {

    let fixture: ComponentFixture<FirstTimeLoginVerifyCodeComponent>;
    let component: FirstTimeLoginVerifyCodeComponent;
    let state: StateService;
    let parent: FirstTimeLoginFrameComponent;
    let cmsReplacement: jasmine.SpyObj<CmsReplacementService>;
    let uiRouterGlobals: UIRouterGlobals;

    beforeEach(async () => {

        state = jasmine.createSpyObj('state', ['go']);
        cmsReplacement = jasmine.createSpyObj('cmsReplacementService', ['transformTemplate']);
        uiRouterGlobals = {
            params: {}
        } as UIRouterGlobals;
        parent = new FirstTimeLoginFrameComponent(state);
        parent.source = 'Forgot';

        await TestBed
            .configureTestingModule({
                declarations: [
                    FirstTimeLoginVerifyCodeComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: FirstTimeLoginFrameComponent, useFactory: () => parent },
                    { provide: CmsReplacementService, useFactory: () => cmsReplacement },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(FirstTimeLoginVerifyCodeComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsData = {
            LongDescription: 'Long',
            SUGGEST_EMAIL: 'email',
            SUGGEST_PHONE: 'phone'
        } as VerifyCodeCMS;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('tryAnotherWay', () => {
        it('should call state.go', async () => {
            component.tryAnotherWay();

            expect(state.go).toHaveBeenCalled();
        });
    });

    describe('verify', () => {
        it('should call state.go', async () => {
            await component.verify();

            expect(state.go).toHaveBeenCalled();
        });
    });
});
