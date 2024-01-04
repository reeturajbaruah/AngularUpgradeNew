import { EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { StateConfig } from 'common/interfaces';
import { BankAccountType, BillingType } from 'common/models';
import { DialogService, ResponseErrorService } from 'common/services';
import {
    InjectionValues as BillingInjectionValues
} from 'common/ui/modals/billingModal/billingModal.component';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { ValidationModule } from 'validation/module';
import { FrameComponent } from 'violations/frame/frame.component';
import { WebApisService } from 'violationsCommon/services/webapi/webApis.service';
import { ConfirmComponent } from './confirm.component';

import { WizardComponent } from 'common/ui';

describe('component: violations-confirm', () => {

    let fixture: ComponentFixture<ConfirmComponent>;
    let component: ConfirmComponent;
    let uiRouterGlobals: UIRouterGlobals;

    let state: jasmine.SpyObj<StateService>;
    let frameComponent: jasmine.SpyObj<FrameComponent>;
    let webApisService: jasmine.SpyObj<WebApisService>;
    let dialogueService: jasmine.SpyObj<DialogService>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let wizardUi: jasmine.SpyObj<WizardComponent>;

    beforeEach(async () => {

        frameComponent = jasmine.createSpyObj('frameComponent',
            ['scrollToTop', 'setTitle', 'getPlateContainer']);
        state = jasmine.createSpyObj('state', ['go']);
        uiRouterGlobals = { param: {}, current: { wizard: {} } } as any;
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['displayErrorsFromResponse']);
        webApisService = jasmine.createSpyObj('webApisService', ['makePayment']);
        dialogueService = jasmine.createSpyObj('dialogueService', ['openSliderCentered']);
        wizardUi = jasmine.createSpyObj('wizardUi', ['gotoPreviousState']);
        
        await TestBed
            .configureTestingModule({
                declarations: [
                    ConfirmComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, FormsModule, ValidationModule],
                providers: [
                    { provide: FrameComponent, useFactory: () => frameComponent },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: StateService, useFactory: () => state },
                    { provide: WebApisService, useFactory: () => webApisService },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: DialogService, useFactory: () => dialogueService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ConfirmComponent);
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

            webApisService.makePayment.and.returnValue({
                errors: []
            } as any);

            component['plateContainer'] = {
                plate: {},
                someOtherProp: 'some other prop',
                paymentAmount: 'some payment amount'
            } as any;

            component['billingInfo'] = {
                billingType: 'fake',
                eft: { someEftProp: 'some eft prop', name: 'fake name' },
                credit: { someCardProp: 'some card prop' }
            } as any;
        });

        [
            {
                billingType: BillingType.Credit, isCreditCard: true, accountType: BankAccountType.Personal, accountTypeDisplay: 'Personal'
            },
            {
                billingType: BillingType.Eft, isCreditCard: false, accountType: BankAccountType.Business, accountTypeDisplay: 'Business'
            }
        ].forEach(({ billingType, isCreditCard, accountType, accountTypeDisplay }) => {

            it('should call makePayment', async () => {

                component['billingInfo'].billingType = billingType;
                component['billingInfo'].eft.accountType = accountType;

                await component.submit({
                    name: 'test'
                } as StateConfig);

                expect(webApisService.makePayment)
                    .toHaveBeenCalledWith({
                        paymentAmount: 'some payment amount',
                        plate: { totalPaymentAmount: 'some payment amount' },
                        someOtherProp: 'some other prop',
                        isCreditCard,
                        eftPaymentMethod: {
                            someEftProp: 'some eft prop',
                            nameOnBankAccount: 'fake name',
                            name: 'fake name',
                            accountType,
                            accountTypeDisplay
                        },
                        creditCardPaymentMethod: { someCardProp: 'some card prop' }
                    } as any);
                expect(webApisService.makePayment).toHaveBeenCalledTimes(1);
            });
        });

        it('should call responseErrorService.displayErrorsFromResponse when errors', async () => {

            webApisService.makePayment.and.returnValue({ errors: [1, 2, 3] } as any);

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
            webApisService.makePayment.and.returnValue({ errors: [] } as any);

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

            frameComponent.getPlateContainer.and.returnValue({
                partialPayments: false,
                plate
            } as any);
        });

        it('should set plateContainer to value returned by frameComponent.getPlateContainer', async () => {

            component['setupPage']();

            expect(component['plateContainer']).toEqual({
                partialPayments: false,
                plate
            } as any);
        });

        it('should call frameComponent.getPlateContainer', async () => {

            component['setupPage']();

            expect(frameComponent.getPlateContainer).toHaveBeenCalledTimes(1);
            expect(frameComponent.getPlateContainer).toHaveBeenCalledWith();
        });

        it('should call frameComponent.setTitle with result of getTitle', async () => {

            component['setupPage']();

            expect(frameComponent.setTitle).toHaveBeenCalledTimes(1);
            expect(frameComponent.setTitle).toHaveBeenCalledWith('fake cms data');
        });

        it('should call frameComponent.scrollToTop', async () => {

            component['setupPage']();

            expect(frameComponent.scrollToTop).toHaveBeenCalledTimes(1);
            expect(frameComponent.scrollToTop).toHaveBeenCalledWith();
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

            expect(frameComponent.stepNum).toBe(3);

        });

        it('preset billingInfo to billingInfo from params', async () => {

            await component.ngOnInit();

            expect(component['billingInfo']).toEqual('fake billing info' as any);
        });

        it('should not call state.go with prevState when billingInfo from params is null', async () => {

            (uiRouterGlobals.params as any) = { billingInfo: null };
            
            await component.ngOnInit();
            await component.ngAfterViewInit();

            expect(component['setupPage']).toHaveBeenCalledTimes(0);
            expect(wizardUi.gotoPreviousState).toHaveBeenCalledTimes(1);
        });

        it('should call state.go with prevState when billingInfo from params is valid', async () => {

            (uiRouterGlobals.params as any) = { billingInfo: { billingType: 'type' } };
            (uiRouterGlobals.current as any).wizard.prevState = 'fake prev state';

            await component.ngOnInit();
            await component.ngAfterViewInit();

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
