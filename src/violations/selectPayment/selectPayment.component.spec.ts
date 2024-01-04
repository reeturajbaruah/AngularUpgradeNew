import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { StateConfig } from 'common/interfaces';
import { BankAccountType, BillingType } from 'common/models';
import { ResponseErrorService } from 'common/services';
import { CreditCardEntryComponent, WizardComponent, WizardStateResolverFactory } from 'common/ui';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { changesStable } from 'testing';
import { WebApisService as ValidationApis } from 'validation/services/webApis.service';
import { FrameComponent } from '../frame/frame.component';
import { SelectPaymentComponent } from './selectPayment.component';


describe('SelectPaymentComponent tests', () => {

    let fixture: ComponentFixture<SelectPaymentComponent>;
    let component: SelectPaymentComponent;
    let form: NgForm;

    let state: StateService;
    let uiRouterGlobals: UIRouterGlobals;
    let frameComponent: jasmine.SpyObj<FrameComponent>;

    let creditCardTypeService: jasmine.SpyObj<any>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let creditEntry: CreditCardEntryComponent;
    let validationApis: jasmine.SpyObj<ValidationApis>;

    beforeEach(async () => {

        frameComponent = jasmine.createSpyObj('frameComponent',
            ['scrollToTop', 'setTitle', 'getPlateContainer']);
        state = jasmine.createSpyObj('state', ['go']);
        uiRouterGlobals = {
            params: { billingInfo: null }
        } as any;
        creditCardTypeService = jasmine.createSpyObj('creditCardTypeService', ['cardCodeToName']);
        creditCardTypeService.cardCodeToName.and.returnValue('CARDTYPE');
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['displayAlertsFromResponse']);
        validationApis = jasmine.createSpyObj('webApisService', ['validateRoutingNumber']);
        creditEntry = jasmine.createSpyObj('creditEntry', ['submit']);
        (creditEntry.submit as jasmine.Spy).and.callFake(() => { });

        const wizardStateResolveFactory = jasmine.createSpyObj('wizardStateResolverFactory', ['getService']);
        wizardStateResolveFactory.getService.and.returnValue(jasmine.createSpyObj('wizardStateResolverService', ['getUiOrder']));

        await TestBed
            .configureTestingModule({
                declarations: [
                    SelectPaymentComponent,
                    WizardComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule, PipesModule],
                providers: [
                    { provide: FrameComponent, useFactory: () => frameComponent },
                    { provide: StateService, useFactory: () => state },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: ValidationApis, useFactory: () => validationApis },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: WizardStateResolverFactory, useFactory: () => wizardStateResolveFactory }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(SelectPaymentComponent);
        component = fixture.debugElement.componentInstance;
        form = fixture.debugElement.query(By.directive(NgForm)).references.Form as NgForm;
    });

    beforeEach(() => {
        component.cmsContent = {
            Title: '',
            ShortDescription: '',
            PaymentMethodHeader: '',
            CCBillingAddressHeader: '',
            EFTBillingAddressHeader: ''
        };
    });

    it('is a canary test', async () => {

        expect(true).toEqual(true);
    });

    describe('nextStep()', () => {

        it('should handle credit card types', async () => {
            //Assemble
            const nextState: StateConfig = {
                name: 'test'
            };
            component.billingInfo.billingType = 'notEFT';
            const mockCreditEntry: CreditCardEntryComponent = jasmine.createSpyObj('creditEntry', ['submit']);
            (mockCreditEntry.submit as any).and.resolveTo(true);
            component.creditEntry = mockCreditEntry;
            //Act
            await component.nextStep(nextState);

            //Assert
            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith(nextState, { billingInfo: jasmine.any(Object) });
        });

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
                funcToHaveBeenCalledXtimes: 0
            },
            {
                billingType: BillingType.Credit,
                creditEntryExists: true,
                creditCardEntrySuccess: false,
                funcToHaveBeenCalledXtimes: 0
            },
            { billingType: BillingType.Eft, creditEntryExists: false, funcToHaveBeenCalledXtimes: 1 }
        ].forEach(({ billingType, creditEntryExists, creditCardEntrySuccess, funcToHaveBeenCalledXtimes }) => {
            it(`calls state.go ${funcToHaveBeenCalledXtimes} time when billingType=${billingType} & CreditEntry=${creditEntryExists}`,
                async () => {
                    await changesStable(fixture);

                    validationApis.validateRoutingNumber.and.returnValue({
                        alerts: []
                    } as any);

                    //Assemble
                    component.billingInfo.billingType = billingType;
                    (creditEntry.submit as any).and.returnValue(creditCardEntrySuccess);
                    (component.creditEntry as any) = creditEntryExists && creditEntry;
                    const fakeState = '';

                    //Act
                    await component.nextStep(fakeState as any);

                    //Assert
                    expect(state.go).toHaveBeenCalledTimes(funcToHaveBeenCalledXtimes);

                });
        });

        [
            {
                alertCalledTimes: 0,
                alertEmpty: 'are',
                alerts: []
            },
            {
                alertCalledTimes: 1,
                alertEmpty: 'are not',
                alerts: ['Something is up.']
            }
        ].forEach(({ alertCalledTimes, alertEmpty, alerts }) => {
            it(`calls validateRoutingNumber for EFT payment methods
                , calls displayAlertsFromResponse ${alertCalledTimes} time when alerts ${alertEmpty} empty.`, async () => {
                await changesStable(fixture);

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
                const result = await component.nextStep(fakeState as any);

                //Assert
                expect(state.go).toHaveBeenCalledTimes(1);
                expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(alertCalledTimes);
            });
        });

        it('should display EFT alerts', async () => {
            //Assemble
            const nextState: StateConfig = {
                name: 'test'
            };
            component.billingInfo.billingType = 'EFT';
            validationApis.validateRoutingNumber.and.returnValue({
                alerts: ['alert'],
                errors: []
            } as any);
            responseErrorService.displayAlertsFromResponse.calls.reset();

            //Act
            await component.nextStep(nextState);

            //Assert

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith({ alerts: ['alert'], errors: [] } as any, true);
        });
    });

    describe('goToPreviousState', () => {

        beforeEach(() => {

            component.billingInfo = 'fake billing method' as any;
        });

        it('should call state.go', async () => {

            await component.goToPreviousState('fake target state');

            expect(state.go)
                .toHaveBeenCalledWith('fake target state', { billingInfo: 'fake billing method' });
            expect(state.go).toHaveBeenCalledTimes(1);
        });
    });

    describe('ngOnInit', () => {
        const plate = {};
        beforeEach(() => {

            component.cmsContent = { Title: 'fake cms data' } as any;

            frameComponent.getPlateContainer.and.returnValue({
                partialPayments: true,
                plate
            } as any);
        });

        it('should call frameComponent.setTitle with result of getTitle', async () => {

            component['ngOnInit']();

            expect(frameComponent.setTitle).toHaveBeenCalledTimes(1);
            expect(frameComponent.setTitle).toHaveBeenCalledWith('fake cms data');
        });

        it('should call frameComponent.scrollToTop', async () => {

            component['ngOnInit']();

            expect(frameComponent.scrollToTop).toHaveBeenCalledTimes(1);
            expect(frameComponent.scrollToTop).toHaveBeenCalledWith();
        });

        ['some truthy value', false].forEach(billingInfoParam => {

            it('should set payment info to params.billing info when truthy', async () => {

                const original = component.billingInfo;
                uiRouterGlobals.params.billingInfo = billingInfoParam;

                component['ngOnInit']();

                expect(component.billingInfo).toBe(billingInfoParam ? billingInfoParam : original as any);
            });
        });

        it('should use parent.stepNum', () => {
            component['ngOnInit']();

            expect(frameComponent.stepNum).toBe(2);
        });
    });
});
