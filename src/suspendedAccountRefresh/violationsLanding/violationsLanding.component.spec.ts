import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';

import { ViolationsLandingComponent } from './violationsLanding.component';
import { FrameComponent } from '../frame/frame.component';

import { StateService } from '@uirouter/core';
import { WebApiService } from 'suspendedAccountRefresh/services/webapi.service';
import { SiteCoreItem } from 'cms/cms.module';
import { ResponseErrorService, ToasterService } from 'common/services';
import { ISuspendedPaymentInfo, SuspendedAccountService } from 'suspendedAccountRefresh/services/suspendedAccount.service';
import { BillingType } from 'common/models';

describe('component: suspended-frame', () => {

    let fixture: ComponentFixture<ViolationsLandingComponent>;
    let component: ViolationsLandingComponent;
    let webapiService: WebApiService;
    let stateService: StateService;
    let frameComponent: FrameComponent;
    let suspendedAccountService: SuspendedAccountService;
    let responseErrorService: ResponseErrorService;
    let toasterService: ToasterService;
    let storePaymentInfo: ISuspendedPaymentInfo;

    beforeEach(async () => {

        frameComponent = jasmine.createSpyObj('frameComponent', ['scrollToTop']);
        webapiService = jasmine.createSpyObj('webapiService', ['getSuspendedAccountData']);
        stateService = jasmine.createSpyObj('stateService', ['go']);
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayErrorsFromResponse']);
        suspendedAccountService = jasmine.createSpyObj('suspendedAccountService', ['getSuspendedAccountStatus', 'getReplenishmentAmtText'], ['paymentInfo']);
        toasterService = jasmine.createSpyObj('toasterService', ['isShowing', 'show']);

        (Object.getOwnPropertyDescriptor(suspendedAccountService, 'paymentInfo').get as jasmine.Spy).and.callFake(() => storePaymentInfo);


        await TestBed
            .configureTestingModule({
                declarations: [
                    ViolationsLandingComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: StateService, useFactory: () => stateService },
                    { provide: FrameComponent, useFactory: () => frameComponent },
                    { provide: WebApiService, useFactory: () => webapiService },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: SuspendedAccountService, useFactory: () => suspendedAccountService },
                    { provide: ToasterService, useFactory: () => toasterService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(ViolationsLandingComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {

        it('can setup component', async () => {

            (responseErrorService.isErrorFree as jasmine.Spy)
                .and
                .returnValue(true);

            const response = {
                plates: [],
                rest: {}
            };

            (webapiService.getSuspendedAccountData as jasmine.Spy)
                .and
                .resolveTo(response);

            component.cmsContent = {
                Purpose: 'purpose',
                Children: [
                    {} as SiteCoreItem,
                    {} as SiteCoreItem
                ]
            } as any;

            await component.ngOnInit();

            expect(frameComponent.title).toBe('Account Suspended');
            expect(frameComponent.bannerContent).toBe('purpose');
            expect(frameComponent.showStepper).toBeFalse();
            expect(frameComponent.showTitleBanner).toBeTrue();

            expect(webapiService.getSuspendedAccountData).toHaveBeenCalled();

            expect(component.plates).toEqual(response.plates.map(plate => ({ plate, collapsed: true })));
            expect(component.summary).toEqual({ rest: response.rest } as any);

        });

        it('handles webapi failure', async () => {

            (responseErrorService.isErrorFree as jasmine.Spy)
                .and
                .returnValue(false);

            const response = {
                plates: [],
                rest: {}
            };

            (webapiService.getSuspendedAccountData as jasmine.Spy)
                .and
                .resolveTo(response);

            component.cmsContent = {
                Purpose: 'purpose',
                Children: [
                    {} as SiteCoreItem,
                    {} as SiteCoreItem
                ]
            } as any;

            await component.ngOnInit();

            expect(webapiService.getSuspendedAccountData).toHaveBeenCalled();

            expect(component.plates).toBeUndefined();
            expect(component.discounts).toBeUndefined();
            expect(component.summary).toBeUndefined();
            expect(component.dataReady).toBeFalse();
        });

    });

    describe('nextStep', () => {

        it('goes to next step if terms are agreed to', async () => {
            component.agreeToTerms = true;
            component.summary = { totalUnsuspensionPaymentAmount: 3141 } as any;
            const state = {} as any;
            await component.nextStep(state);

            expect(stateService.go).toHaveBeenCalledWith(state);
        });

        it('does not go to next step if terms are not agreed to', async () => {
            component.agreeToTerms = false;
            component.cmsContent = { AgreeToWarning: 'test' } as any;
            const state = {} as any;
            await component.nextStep(state);

            expect(stateService.go).not.toHaveBeenCalled();
        });

        it('shows toaster if terms not agreed to', async () => {
            component.agreeToTerms = false;
            component.cmsContent = { AgreeToWarning: 'test' } as any;
            const state = {} as any;
            (toasterService.isShowing as jasmine.Spy).and.returnValue(false);
            await component.nextStep(state);

            expect(toasterService.show).toHaveBeenCalledWith('Error', component.cmsContent.AgreeToWarning);
            expect(frameComponent.scrollToTop).toHaveBeenCalled();
        });

        it('doesnt show another toaster is toaster is already there', async () => {
            component.agreeToTerms = false;
            component.cmsContent = { AgreeToWarning: 'test' } as any;
            const state = {} as any;
            (toasterService.isShowing as jasmine.Spy).and.returnValue(true);
            await component.nextStep(state);

            expect(toasterService.show).not.toHaveBeenCalled();
            expect(stateService.go).not.toHaveBeenCalled();
            expect(frameComponent.scrollToTop).toHaveBeenCalled();
        });

    });

});
