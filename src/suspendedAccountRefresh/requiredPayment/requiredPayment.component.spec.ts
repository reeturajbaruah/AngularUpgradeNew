import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateService } from '@uirouter/core';
import { PipesModule } from 'pipes/module';
import { FrameComponent } from 'suspendedAccountRefresh/frame/frame.component';
import { IWithoutViolations, RequiredPaymentComponent } from './requiredPayment.component';
import { ISuspendedAccountInfo, WebApiService } from 'suspendedAccountRefresh/services/webapi.service';
import { SuspendedAccountService } from '../services/suspendedAccount.service';

describe('component: required payment', () => {

    let fixture: ComponentFixture<RequiredPaymentComponent>;
    let component: RequiredPaymentComponent;

    const stateService = jasmine.createSpyObj('stateService', ['go']);
    const frameComponent: FrameComponent = jasmine.createSpyObj('frame', ['scrollToTop']);
    const webApiService: WebApiService = jasmine.createSpyObj('api', ['getSuspendedAccountData']);
    const suspendedAccountService = jasmine.createSpyObj('suspendedAccountService', ['paymentInfo', 'getReplenishmentAmtText']);


    beforeEach(async () => {
        await TestBed
            .configureTestingModule({
                declarations: [
                    RequiredPaymentComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: StateService, useValue: stateService },
                    { provide: FrameComponent, useFactory: () => frameComponent },
                    { provide: WebApiService, useFactory: () => webApiService },
                    { provide: SuspendedAccountService, useFactory: () => suspendedAccountService },

                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(RequiredPaymentComponent);
        component = fixture.debugElement.componentInstance;

    });

    it('should create component', () => {
        expect(component).toBeDefined();
    });

    it('should initialize component', async () => {

        const response = {} as ISuspendedAccountInfo;
        response.rebillAmount = 10;
        response.totalUnsuspensionPaymentAmount = 40;

        (webApiService.getSuspendedAccountData as jasmine.Spy)
            .and.resolveTo(response);

        component.cmsContentReqPayment = {
            ReplenishmentAmount: 'test optin',
            ReplenishmentAmountTextOptOut: 'test optout'
        } as IWithoutViolations;


        await component.ngOnInit();
        expect(frameComponent.showStepper).toBeTrue();
        expect(frameComponent.showTitleBanner).toBeFalse();
        expect(component.replinishAmt).toEqual(10);
        expect(component.reinstateAmt).toEqual(30);
        expect(component.requiredPaymentAmt).toEqual(component.replinishAmt + component.reinstateAmt);

    });

});
