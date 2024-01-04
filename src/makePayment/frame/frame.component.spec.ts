import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { WindowRef } from 'common/providers';

import { FrameComponent } from './frame.component';
import { PaymentInfo } from '../interfaces';
import { PaymentInfoService } from 'makePayment/services/paymentInfo.service';
import { SessionService } from 'common/services/session/session.service';

describe('component: make-payment-frame-component', () => {

    let fixture: ComponentFixture<FrameComponent>;
    let component: FrameComponent;
    let windowRef: jasmine.SpyObj<Window>;
    let paymentInfoService: PaymentInfoService;
    let session: jasmine.SpyObj<SessionService>;
    beforeEach(async () => {
        windowRef = jasmine.createSpyObj('window', ['scrollTo']);
        paymentInfoService = { paymentInfo: null } as any;
        session = jasmine.createSpyObj('session', ['userRole']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    FrameComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: WindowRef, useFactory: () => windowRef },
                    { provide: PaymentInfoService, useFactory: () => paymentInfoService },
                    { provide: SessionService, useFactory: () => session },
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(FrameComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {
            expect(component).toBeDefined();
        });
    });

    describe('onInit', () => {
        it('set steps', async () => {

            component.baseCmsContent = {
                step1: 'step1',
                step2: 'step2',
                step3: 'step3'
            };
            component.ngOnInit();

            expect(component.steps).toEqual([
                { name: 'step1', background: 'secondary' },
                { name: 'step2', background: 'secondary' },
                { name: 'step3', background: 'secondary' },
            ]);

        });
    });

    describe('onDestroy', () => {

        it('clears payment info', () => {

            component.paymentInfo = {} as any;

            expect(component.paymentInfo).toBeDefined();
            component.ngOnDestroy();

            expect(component.paymentInfo).toBeFalsy();
        });

    });

    describe('paymentInfo', () => {

        it('can set paymentinfo', () => {

            const info = {} as PaymentInfo;
            component.paymentInfo = info;

            expect(paymentInfoService.paymentInfo).toBe(info);
        });

        it('can clear paymentInfo', () => {
            const info = null;
            component.paymentInfo = info;

            expect(paymentInfoService.paymentInfo).toBe(info);
        });

        it('can get paymentInfo', () => {

            const info = {} as PaymentInfo;
            paymentInfoService.paymentInfo = info;

            const results = component.paymentInfo;

            expect(results).toBe(info);
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

    describe('getDate', () => {

        it('returns a date obj', () => {

            const obj = component.getDate();

            expect(obj instanceof Date).toBeTrue();
        });

    });
});
