import { EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { ValidationModule } from 'validation/module';
import { FrameComponent } from 'frp3/frame/frame.component';
import { ConfirmPaymentComponent } from './confirm.component';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { WebApisService } from 'violationsCommon/services/webapi/webApis.service';
import { DialogService, ResponseErrorService } from 'common/services';
import { WizardComponent } from 'common/ui';
import { StateConfig } from 'common/interfaces';
import { BankAccountType, BillingType } from 'common/models';
import { InjectionValues as BillingInjectionValues } from 'common/ui/modals/billingModal/billingModal.component';
import { Decimal } from 'decimal.js-light';

describe('ConfirmPaymentComponent', () => {

    let fixture: ComponentFixture<ConfirmPaymentComponent>;
    let component: ConfirmPaymentComponent;
    let parent: jasmine.SpyObj<FrameComponent>;
    let uiRouterGlobals: UIRouterGlobals;

    let state: jasmine.SpyObj<StateService>;
    let webApisService: jasmine.SpyObj<WebApisService>;
    let dialogueService: jasmine.SpyObj<DialogService>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let wizardUi: jasmine.SpyObj<WizardComponent>;

    beforeEach(async () => {
        parent = jasmine.createSpyObj('parent', ['scrollToTop', 'getPlateContainer']);
        state = jasmine.createSpyObj('state', ['go']);
        uiRouterGlobals = { param: {}, current: { wizard: {} } } as any;
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['displayErrorsFromResponse']);
        webApisService = jasmine.createSpyObj('webApisService', ['makeMultiPayment']);
        dialogueService = jasmine.createSpyObj('dialogueService', ['openSliderCentered']);
        wizardUi = jasmine.createSpyObj('wizardUi', ['gotoPreviousState']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    ConfirmPaymentComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, FormsModule, ValidationModule],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: StateService, useFactory: () => state },
                    { provide: WebApisService, useFactory: () => webApisService },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: DialogService, useFactory: () => dialogueService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ConfirmPaymentComponent);
        component = fixture.debugElement.componentInstance;
        component.wizardComponent = wizardUi;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('goToNextState', () => {

        beforeEach(() => {
            component['billingInfo'] = {
                billingType: 'fake',
                eft: { someEftProp: 'some eft prop', name: 'fake name' },
                credit: { someCardProp: 'some card prop' }
            } as any;
        });


        it('should call state.go', async () => {
            await component.goToNextState({
                name: 'test'
            } as StateConfig);

            expect(state.go)
                .toHaveBeenCalledWith({ name: 'test' }, {
                    billingInfo: {
                        billingType: 'fake',
                        eft: { someEftProp: 'some eft prop', name: 'fake name' },
                        credit: { someCardProp: 'some card prop' }
                    }
                }, { custom: { isExplicitlyAllowedTransition: true } });
            expect(state.go).toHaveBeenCalledTimes(1);
        });
    });

    describe('submit', () => {
        beforeEach(() => {

            webApisService.makeMultiPayment.and.returnValue({
                errors: []
            } as any);

            component['plateContainer'] = {
                plate: {
                    invoices: [{ paymentAmount: 1, invoiceDueBeforeDiscount: 1, invoiceDueAfterDiscount: 0.5 }]
                },
                someOtherProp: 'some other prop',
                paymentAmount: 'some payment amount',
                associatedPlates: [{
                    totalPaymentAmountFRP3: 1, totalPaymentAmount: 0, invoices: [
                        { paymentAmount: 1, invoiceDueBeforeDiscount: 1, invoiceDueAfterDiscount: 0.5 }
                    ]
                }]
            } as any;

            component['billingInfo'] = {
                billingType: 'fake',
                eft: { someEftProp: 'some eft prop', name: 'fake name' },
                credit: { someCardProp: 'some card prop' }
            } as any;
            component['totalPayment'] = new Decimal(20);
        });

        [
            {
                billingType: BillingType.Credit, isCreditCard: true, accountType: BankAccountType.Personal, accountTypeDisplay: 'Personal'
            },
            {
                billingType: BillingType.Eft, isCreditCard: false, accountType: BankAccountType.Business, accountTypeDisplay: 'Business'
            }
        ].forEach(({ billingType, isCreditCard, accountType, accountTypeDisplay }) => {

            it('should call makeMultiPayment', async () => {

                component['billingInfo'].billingType = billingType;
                component['billingInfo'].eft.accountType = accountType;

                await component.submit({
                    name: 'test'
                } as StateConfig);

                expect(webApisService.makeMultiPayment)
                    .toHaveBeenCalledWith({
                        paymentAmount: 20,
                        plate: {
                            totalPaymentAmount: 'some payment amount',
                            invoices: [{ paymentAmount: 0.5, invoiceDueBeforeDiscount: 1, invoiceDueAfterDiscount: 0.5 }]
                        },
                        someOtherProp: 'some other prop',
                        isCreditCard,
                        eftPaymentMethod: {
                            someEftProp: 'some eft prop',
                            nameOnBankAccount: 'fake name',
                            name: 'fake name',
                            accountType,
                            accountTypeDisplay
                        },
                        creditCardPaymentMethod: { someCardProp: 'some card prop' },
                        associatedPlates: [{
                            totalPaymentAmountFRP3: 1, totalPaymentAmount: 1, invoices: [
                                { paymentAmount: 0.5, invoiceDueBeforeDiscount: 1, invoiceDueAfterDiscount: 0.5 }
                            ]
                        }]
                    } as any);
                expect(webApisService.makeMultiPayment).toHaveBeenCalledTimes(1);
            });
        });

        it('should call responseErrorService.displayErrorsFromResponse when errors', async () => {

            webApisService.makeMultiPayment.and.returnValue({ errors: [1, 2, 3] } as any);

            await component.submit({
                name: 'test'
            } as StateConfig);

            expect(responseErrorService.displayErrorsFromResponse)
                .toHaveBeenCalledWith({ errors: [1, 2, 3] } as any);
            expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledTimes(0);
        });

        it('should call goToNextState when no errors', async () => {
            spyOn(component, 'goToNextState');
            webApisService.makeMultiPayment.and.returnValue({ errors: [] } as any);

            await component.submit({
                name: 'test'
            } as StateConfig);

            expect(component.goToNextState).toHaveBeenCalledWith({ name: 'test' });
            expect(component.goToNextState).toHaveBeenCalledTimes(1);
            expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledTimes(0);
        });
    });

    describe('previous', () => {

        beforeEach(() => {

            component['billingInfo'] = 'fake billing method' as any;
        });

        it('should call state.go', async () => {

            await component.previous({
                name: 'test'
            } as StateConfig);

            expect(state.go)
                .toHaveBeenCalledWith({ name: 'test' }, { billingInfo: 'fake billing method' });
            expect(state.go).toHaveBeenCalledTimes(1);
        });
    });

    describe('setupPage', () => {
        const plate = {};
        beforeEach(() => {

            component.cmsData = { Title: 'fake cms data' } as any;

            parent.getPlateContainer.and.returnValue({
                partialPayments: false,
                plate,
                paymentAmount: 0,
                assocPlatesPaymentAmount: 0
            } as any);
        });

        it('should set plateContainer to value returned by parent.getPlateContainer', async () => {

            component['setupPage']();

            expect(component['plateContainer']).toEqual({
                partialPayments: false,
                plate,
                paymentAmount: 0,
                assocPlatesPaymentAmount: 0
            } as any);
        });

        it('should call parent.getPlateContainer', async () => {

            component['setupPage']();

            expect(parent.getPlateContainer).toHaveBeenCalledTimes(1);
            expect(parent.getPlateContainer).toHaveBeenCalledWith();
        });

        it('should call parent.scrollToTop', async () => {

            component['setupPage']();

            expect(parent.scrollToTop).toHaveBeenCalledTimes(1);
            expect(parent.scrollToTop).toHaveBeenCalledWith();
        });
    });

    describe('ngOnInit', () => {

        beforeEach(() => {

            spyOn(component as any, 'setupPage').and.returnValue(null);
            uiRouterGlobals.params = {
                billingInfo: 'fake billing info'
            } as any;
            (uiRouterGlobals.current as any).wizard = {};
        });

        it('should use parent.stepNum', () => {
            component['ngOnInit']();

            expect(parent.stepNum).toBe(3);

        });

        it('preset billingInfo to billingInfo from params', async () => {

            await component.ngOnInit();

            expect(component['billingInfo']).toEqual('fake billing info' as any);
        });

        it('should not call state.go with prevState when billingInfo from params is null', () => {

            (uiRouterGlobals.params as any) = { billingInfo: null };

            component.ngOnInit();
            component.ngAfterViewInit();

            expect(component['setupPage']).toHaveBeenCalledTimes(0);
            expect(wizardUi.gotoPreviousState).toHaveBeenCalledTimes(1);
        });

        it('should call state.go with prevState when billingInfo from params is valid', () => {

            (uiRouterGlobals.params as any) = { billingInfo: { billingType: 'type' } };
            (uiRouterGlobals.current as any).wizard.prevState = 'fake prev state';

            component.ngOnInit();
            component.ngAfterViewInit();

            expect(state.go).toHaveBeenCalledTimes(0);
            expect(component['setupPage']).toHaveBeenCalledTimes(1);
            expect(component['setupPage']).toHaveBeenCalledWith();
        });
    });

    describe('openModal', () => {
        beforeEach(() => {
            component['billingInfo'] = {
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
                billingType: 'original value'
            } as any;
        });

        it('should call dialogueService.openSliderCentered() 1 time', async () => {

            //Assemble
            const mockBillingInfo = {
                eft: {
                    accountType: BankAccountType.Personal,
                    routingNumber: '999999',
                    accountNumber: '99999999',
                    name: 'new name',
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
                    cardCode: null,
                    cardNbr: null,
                    expMonth: null,
                    expYear: null,
                    nameOnCard: null,
                    address1: null,
                    city: null,
                    state: null,
                    zip: null,
                    plus4: null,
                    country: null,
                    displayCountry: null,
                    international: null
                },
                billingType: 'eft'
            };

            const data: BillingInjectionValues = {
                billingInformation: mockBillingInfo,
                billingType: mockBillingInfo.billingType,
                stateList: component.stateList,
                countryList: component.countryList
            };

            //Act

            const event = new EventEmitter<BillingInjectionValues>();

            (dialogueService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());

            const promise = component['openModal']();

            event.emit(data);
            event.complete();
            await promise;

            //Assert
            expect(dialogueService.openSliderCentered).toHaveBeenCalledTimes(1);

            expect(component.billingInfo).toEqual(mockBillingInfo);
            expect(component.billingInfo).not.toBe(mockBillingInfo);

            expect(component.billingInfo.billingType).toEqual('eft');
        });

        it('should not change values if returns empty string', async () => {

            //Assemble
            const expectedBillingInfo = {
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
                billingType: 'original value'
            };

            component.billingInfo.billingType = 'original value';



            const event = new EventEmitter<string>();
            (dialogueService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());

            ////Act
            //await component['openModal']();

            const promise = component['openModal']();

            event.emit('');
            event.complete();
            await promise;

            //Assert
            expect(dialogueService.openSliderCentered).toHaveBeenCalledTimes(1);

            expect(component.billingInfo).toEqual(expectedBillingInfo);

            expect(component.billingInfo.billingType).toEqual('original value');

        });
    });
});
