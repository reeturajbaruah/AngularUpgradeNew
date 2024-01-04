import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { } from 'jasmine';
import { FrameComponent } from 'frp3/frame/frame.component';
import { PaymentMethodComponent } from './paymentMethod.component';
import { FormsModule, NgForm } from '@angular/forms';
import { StateService, UIRouterGlobals } from '@uirouter/core';
import { ResponseErrorService } from 'common/services';
import { PaymentEntryComponent } from 'common/ui/form-entry/paymentEntry/paymentEntry.component';
import { WebApisService as ValidationApis } from 'validation/services/webApis.service';
import { StateConfig } from 'common/interfaces';
import { BankAccountType, BillingType } from 'common/models';
import { changesStable } from 'testing';
import { WizardComponent, WizardStateResolverFactory } from 'common/ui';
import { By } from '@angular/platform-browser';
import { PipesModule } from 'pipes/module';

describe('PaymentMethodComponent', () => {

    let fixture: ComponentFixture<PaymentMethodComponent>;
    let component: PaymentMethodComponent;
    let form: NgForm;

    let state: StateService;
    let uiRouterGlobals: UIRouterGlobals;
    let parent: jasmine.SpyObj<FrameComponent>;

    let creditCardTypeService: jasmine.SpyObj<any>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let paymentEntry: jasmine.SpyObj<PaymentEntryComponent>;
    let validationApis: jasmine.SpyObj<ValidationApis>;

    beforeEach(async () => {
        parent = jasmine.createSpyObj('parent', ['scrollToTop', 'getPlateContainer']);
        state = jasmine.createSpyObj('state', ['go']);
        uiRouterGlobals = {
            params: { billingInfo: null }
        } as any;
        creditCardTypeService = jasmine.createSpyObj('creditCardTypeService', ['cardCodeToName']);
        creditCardTypeService.cardCodeToName.and.returnValue('CARDTYPE');
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['displayAlertsFromResponse']);
        validationApis = jasmine.createSpyObj('webApisService', ['validateRoutingNumber']);
        paymentEntry = jasmine.createSpyObj('paymentEntry', ['getStatus']);
        (paymentEntry.getStatus as jasmine.Spy).and.callFake(() => { });

        const wizardStateResolveFactory = jasmine.createSpyObj('wizardStateResolverFactory', ['getService']);
        wizardStateResolveFactory.getService.and.returnValue(jasmine.createSpyObj('wizardStateResolverService', ['getUiOrder']));

        await TestBed
            .configureTestingModule({
                declarations: [
                    PaymentMethodComponent,
                    WizardComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule, PipesModule],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: StateService, useFactory: () => state },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: ValidationApis, useFactory: () => validationApis },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: WizardStateResolverFactory, useFactory: () => wizardStateResolveFactory }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(PaymentMethodComponent);
        component = fixture.debugElement.componentInstance;
        form = fixture.debugElement.query(By.directive(NgForm)).references.Form as NgForm;
    });

    beforeEach(() => {
        component.cmsContent = {
            Title: '',
            ShortDescription: '',
            PaymentMethodHeader: '',
            BillingAddressHeader: ''
        };
    });

    it('is a canary test', () => {
        expect(true).toEqual(true);
    });

    describe('nextStep()', () => {

        it('should handle credit card types', waitForAsync(() => {
            //Assemble
            const nextState: StateConfig = {
                name: 'test'
            };
            component.billingInfo.billingType = 'notEFT';
            const mockPaymentEntry: PaymentEntryComponent = jasmine.createSpyObj('paymentEntry', ['getStatus']);
            (mockPaymentEntry.getStatus as jasmine.Spy).and.resolveTo(true);
            component.paymentMethod = mockPaymentEntry;
            //Act
            component.nextStep(nextState).then(() => {
                //Assert
                expect(state.go).toHaveBeenCalledTimes(1);
                expect(state.go).toHaveBeenCalledWith(nextState, { billingInfo: jasmine.any(Object) });
            });
        }));

        [
            {
                billingType: BillingType.Credit,
                creditEntryExists: true,
                creditCardEntrySuccess: true,
                funcToHaveBeenCalledXtimes: 1
            },
            {
                billingType: BillingType.Credit,
                creditEntryExists: false,
                creditCardEntrySuccess: true,
                funcToHaveBeenCalledXtimes: 1
            },
            {
                billingType: BillingType.Credit,
                creditEntryExists: true,
                creditCardEntrySuccess: false,
                funcToHaveBeenCalledXtimes: 0
            },
            {
                billingType: BillingType.Eft,
                creditEntryExists: false,
                creditCardEntrySuccess: false,
                funcToHaveBeenCalledXtimes: 0
            }
        ].forEach(({ billingType, creditEntryExists, creditCardEntrySuccess, funcToHaveBeenCalledXtimes }) => {
            it(`calls state.go ${funcToHaveBeenCalledXtimes} time when billingType=${billingType} & CreditEntry=${creditEntryExists}`,
                waitForAsync(() => {
                    changesStable(fixture).then(() => {
                        validationApis.validateRoutingNumber.and.returnValue({
                            alerts: []
                        } as any);

                        //Assemble
                        component.billingInfo.billingType = billingType;
                        component.paymentMethod = paymentEntry;
                        (paymentEntry.getStatus as jasmine.Spy).and.resolveTo(creditCardEntrySuccess);

                        const fakeState = '';

                        //Act
                        component.nextStep(fakeState as any).then(() => {
                            //Assert
                            expect(state.go).toHaveBeenCalledTimes(funcToHaveBeenCalledXtimes);
                        });
                    });
                }));
        });

        [
            {
                alertCalledTimes: 0,
                alertEmpty: 'are',
                alerts: []
            }
        ].forEach(({ alertCalledTimes, alertEmpty, alerts }) => {
            it(`calls validateRoutingNumber for EFT payment methods
                , calls displayAlertsFromResponse ${alertCalledTimes} time when alerts ${alertEmpty} empty.`, waitForAsync(() => {
                changesStable(fixture).then(() => {
                    component.paymentMethod = paymentEntry;

                    (paymentEntry.getStatus as jasmine.Spy).and.resolveTo(true);

                    validationApis.validateRoutingNumber.and.returnValue({ alerts } as any);

                    //Assemble
                    const fakeState = '';
                    component.billingInfo = {
                        eft: {
                            accountType: BankAccountType.Business,
                            routingNumber: '123123',
                            accountNumber: '1111111',
                            name: 'testName',
                            address1: 'Test 123',
                            city: 'Test City',
                            state: 'Test State',
                            zip: '12345',
                            plus4: '1234',
                            country: 'USA',
                            displayCountry: 'USA',
                            international: false
                        },
                        credit: {
                            cardCode: '123',
                            cardNbr: '1111',
                            expMonth: 1,
                            expYear: 1,
                            nameOnCard: 'Test Name',
                            address1: 'Test 123',
                            city: 'Test City',
                            state: 'Test State',
                            zip: '12345',
                            plus4: '1234',
                            country: 'USA',
                            displayCountry: 'USA',
                            international: false
                        },
                        billingType: BillingType.Eft
                    };

                    //Act
                    component.nextStep(fakeState as any).then(() => {
                        //Assert
                        expect(state.go).toHaveBeenCalledTimes(1);
                        expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(alertCalledTimes);
                    });
                });
            }));
        });

        
    });

    describe('goToPreviousState', () => {

        beforeEach(() => {

            component.billingInfo = 'fake billing method' as any;
        });

        it('should call state.go', waitForAsync(() => {
            component.goToPreviousState('fake target state').then(() => {
                expect(state.go).toHaveBeenCalledWith('fake target state', { billingInfo: 'fake billing method' });
                expect(state.go).toHaveBeenCalledTimes(1);
            });
        }));
    });

    describe('ngOnInit', () => {
        const plate = {};
        beforeEach(() => {

            component.cmsContent = { Title: 'fake cms data' } as any;

            parent.getPlateContainer.and.returnValue({
                partialPayments: true,
                plate
            } as any);
        });

        it('should call parent.scrollToTop', () => {

            component['ngOnInit']();

            expect(parent.scrollToTop).toHaveBeenCalledTimes(1);
            expect(parent.scrollToTop).toHaveBeenCalledWith();
        });

        ['some truthy value', false].forEach(billingInfoParam => {

            it('should set payment info to params.billing info when truthy', () => {

                const original = component.billingInfo;
                uiRouterGlobals.params.billingInfo = billingInfoParam;

                component['ngOnInit']();

                expect(component.billingInfo).toBe(billingInfoParam ? billingInfoParam : original as any);
            });
        });

        it('should use parent.stepNum', () => {
            component['ngOnInit']();

            expect(parent.stepNum).toBe(2);
        });
    });

});
