import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';

import { ReceiptComponent } from './receipt.component';
import { FrameComponent } from '../frame/frame.component';

import { StateDeclaration, StateService } from '@uirouter/core';
import { ISuspendedPaymentInfo, SuspendedAccountService } from '../services/suspendedAccount.service';
import { BillingInfo } from 'common/models';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CurrentUserService, ToasterService } from 'common/services';

describe('component: receipt', () => {

    let fixture: ComponentFixture<ReceiptComponent>;
    let component: ReceiptComponent;
    let stateService: StateService;
    let suspendedAccountService: SuspendedAccountService;
    let currentUserService: CurrentUserService;
    let toasterService: ToasterService;
    let frameComponent: FrameComponent;

    let storePaymentInfo: ISuspendedPaymentInfo;

    beforeEach(async () => {

        frameComponent = jasmine.createSpyObj('frameComponent', ['scrollToTop', 'getDate']);
        suspendedAccountService = jasmine.createSpyObj('suspendedAccountService', ['destroySuspendedWizardInformation'], ['paymentInfo']);
        currentUserService = jasmine.createSpyObj('currentUserServer', ['getCurrentUser']);
        toasterService = jasmine.createSpyObj('toasterService', ['show']);


        (Object.getOwnPropertyDescriptor(suspendedAccountService, 'paymentInfo').get as jasmine.Spy).and.callFake(()=> storePaymentInfo);

        stateService = jasmine.createSpyObj('stateService', ['go']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    ReceiptComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, FormsModule, CommonModule],
                providers: [
                    { provide: StateService, useFactory: () => stateService },
                    { provide: FrameComponent, useFactory: () => frameComponent },
                    { provide: SuspendedAccountService, useFactory: () => suspendedAccountService },
                    { provide: CurrentUserService, useFactory: () => currentUserService },
                    { provide: ToasterService, useFactory: () => toasterService}
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(ReceiptComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {

        [true, false].forEach((makePrimary: boolean)=>{
            it(`${ makePrimary ? '' : 'doest not '}show toaster if make primary was ${makePrimary}`, async ()=>{

                storePaymentInfo = { amount: 3141, makePrimary } as any;
                component.cmsContent = { billingInfoUpdated: 'test' } as any;

                await component.ngOnInit();

                if (makePrimary) {
                    expect(toasterService.show).toHaveBeenCalledWith('Success', component.cmsContent.billingInfoUpdated);
                } else {
                    expect(toasterService.show).not.toHaveBeenCalled();
                }
            });
        });
        

        

    });

    describe('nextStep', () => {

        it('cleans up', async ()=> {

            const state = {} as any;
            await component.nextStep(state);
            
            expect(stateService.go).toHaveBeenCalledWith(state);
            expect(suspendedAccountService.destroySuspendedWizardInformation).toHaveBeenCalled();
        });

    });

});