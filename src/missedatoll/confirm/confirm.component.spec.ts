import { EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { By } from '@angular/platform-browser';
import { StateRegistry, StateService, UIRouterGlobals } from '@uirouter/angular';
import { StateConfig } from 'common/interfaces';
import { BankAccountType, BillingType } from 'common/models';
import { CommonModule as HctraCommonModule } from 'common/module';
import { DialogService, EventTrackingService, ResponseErrorService } from 'common/services';
import { WizardComponent } from 'common/ui';
import {
    InjectionValues as BillingInjectionValues
} from 'common/ui/modals/billingModal/billingModal.component';
import { WizardTestingProvider } from 'common/ui/wizard/wizard.testUtility';
import { UrlPaths, WebStorageConst } from 'constants/module';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { changesStable } from 'testing';
import { ToggleButtonsService } from '../../common/services/toggleButtons/toggleButtons.service';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';
import { FrameComponent } from '../frame/frame.component';
import { ViolationInformationDTO } from '../interfaces';
import { MissedATollService, WebApiService } from '../services';
import { ConfirmComponent } from './confirm.component';


describe('MAT ConfirmComponent tests', () => {

    let fixture: ComponentFixture<ConfirmComponent>;
    let component: ConfirmComponent;
    let form: NgForm;

    let parent: FrameComponent;
    let state: StateService;
    let stateRegistry: StateRegistry;
    let uiRouterGlobals: UIRouterGlobals;
    let api: WebApiService;
    let responseErrorService: jasmine.SpyObj<any>;
    let toggleButtonsService: jasmine.SpyObj<ToggleButtonsService>;
    let missedATollService: MissedATollService;

    let wizardUi: WizardComponent;

    let eventTrackingService: jasmine.SpyObj<EventTrackingService>;
    let dialogueService: jasmine.SpyObj<DialogService>;

    let webStorage;

    let urlPaths: UrlPaths;
    let webStorageConst: WebStorageConst;


    beforeEach(async () => {

        //Parent Mock
        parent = {} as FrameComponent;
        parent.emailAddress = 'test@test.com';
        parent.scrollToTop = jasmine.createSpy('scrollToTop', () => Promise.resolve());

        //StateService Mock
        state = jasmine.createSpyObj('state', ['go']);
        stateRegistry = jasmine.createSpyObj('stateRegistry', ['get']);

        wizardUi = jasmine.createSpyObj('wizardUi', ['gotoPreviousState']);

        //uiRouterGlobals Mock
        uiRouterGlobals = {
            current: {
                wizard: {
                    nextState: 'someState'
                }
            } as StateConfig,
            params: {
                billingInfo: {
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
                    billingType: 'cred'
                }
            }
        } as any;

        //API Mock
        api = jasmine.createSpyObj('webApiService', ['matMakePayment']);
        eventTrackingService = jasmine.createSpyObj('EventTrackingService', ['matTrackViolationCounts']);

        (api.matMakePayment as jasmine.Spy).and.returnValue(Promise.resolve({
            errors: []
        }));

        //ResponseErrorService Mock
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['displayAlertsFromResponse', 'displayErrorsFromResponse', 'isErrorFree']);

        toggleButtonsService = jasmine.createSpyObj('toggleButtonsService', ['disableUntilResolved']);

        missedATollService = jasmine.createSpyObj('missedATollService',
            ['getViolationInformation', 'constructMatPaymentRequest']);

        (missedATollService.getViolationInformation as jasmine.Spy).and.returnValue({
            formattedViolationData: {
                listOfViolations: {
                    invoices: [{ agencyName: 'test', total: 4, data: [{ agencyCode: 'B', amountDue: 4, location: 'X', violationDate: '1/1/2020', violationNumber: 4 }] }],
                    totalInvoices: 1
                },
                grandTotal: 4,
                totalAmountDue: 4
            },
            state: 'TX',
            licensePlate: 'ABC123',
            serviceFee: 1.5
        } as unknown as ViolationInformationDTO);

        (missedATollService.constructMatPaymentRequest as jasmine.Spy).and.returnValue({
            violationInfo: {
                violations: {},
                agencyPayments: {},
                jurisdiction: null,
                licPlateNum: null
            }
        } as unknown as ViolationInformationDTO);

        webStorage = jasmine.createSpyObj('webStorage', ['setKeyValue', 'removeEntry', 'getValue', 'addEmailAddressToViolationsData']);

        urlPaths = new UrlPaths();

        dialogueService = jasmine.createSpyObj('dialogueService', ['openSliderCentered']);

        webStorageConst = new WebStorageConst();


        await TestBed
            .configureTestingModule({
                declarations: [ConfirmComponent],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    PipesModule,
                    FormsModule,
                    FlexLayoutModule,
                    MatDividerModule,
                    MatIconTestingModule],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: StateService, useFactory: () => state },
                    { provide: StateRegistry, useFactory: () => stateRegistry },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: WebStorageService, useFactory: () => webStorage },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: MissedATollService, useValue: missedATollService },
                    { provide: UrlPaths, useFactory: () => urlPaths },
                    { provide: WebApiService, useFactory: () => api },
                    { provide: EventTrackingService, useFactory: () => eventTrackingService },
                    { provide: DialogService, useFactory: () => dialogueService },
                    { provide: ToggleButtonsService, useFactory: () => toggleButtonsService },
                    { provide: WebStorageConst, useValue: webStorageConst }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ConfirmComponent);
        component = fixture.debugElement.componentInstance;
        component.cmsContent = { reviewInfoHeader: '', emailInstructions: '', paymentDetailsHeader: '', totalPaymentLabel: '' };
        form = fixture.debugElement.query(By.directive(NgForm)).references.Form as NgForm;
        
        component.wizardComponent = wizardUi;
        
    });

    it('is a canary test', async () => {

        expect(true).toEqual(true);
    });

    describe('ngOnInit', () => {

        it('should set the step number', async () => {
            //Assert
            await component.ngOnInit();
            await component.ngAfterViewInit();
            expect(parent.stepNum).toBe(3);
        });

        it('should not call scrollTo if billingInfo is null', async () => {
            //Assemble
            (uiRouterGlobals.params as any) = { billingInfo: null };
            (parent.scrollToTop as jasmine.Spy).calls.reset();

            //Act
            await component.ngOnInit();
            await component.ngAfterViewInit();

            //Assert
            expect(parent.scrollToTop).toHaveBeenCalledTimes(0);

        });

        it('should scroll to top if billingInfo exists', async () => {
            //Assemble
            (uiRouterGlobals.params as any) = {
                billingInfo: {
                    eft: {
                        accountType: BankAccountType.Business,
                        routingNumber: '123123',
                        accountNumber: '1111111',
                        name: 'testName'
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
                    billingType: BillingType.Credit
                }
            };
            (parent.scrollToTop as jasmine.Spy).calls.reset();

            //Act
            await component.ngOnInit();
            await component.ngAfterViewInit();

            //Assert
            expect(parent.scrollToTop).toHaveBeenCalledTimes(1);
        });

        it('should call Previous State if billingInfo is null', async () => {
            //Assemble
            (uiRouterGlobals.params as any) = { billingInfo: null };

            //Act
            await component.ngOnInit();
            await component.ngAfterViewInit();

            //Assert
            expect(wizardUi.gotoPreviousState).toHaveBeenCalledTimes(1);
        });

    });

    describe('submit', () => {

        beforeEach( async () => {
            await component.ngOnInit();
            await component.ngAfterViewInit();
            spyOn(component as any, 'goToNextState').and.returnValue(null);
        });

        [
            {
                billingType: 'CREDIT', bankAccountType: null, email: 'test@test.com'
            },
            {
                billingType: 'EFT', bankAccountType: BankAccountType.Business, email: 'test@test.co'
            },
            {
                billingType: 'EFT', bankAccountType: BankAccountType.Personal, email: null
            }
        ].forEach(({ billingType, bankAccountType, email }) => {

            it('should should call constructMatPaymentRequest and matMakePayment for above parameters', async () => {

                //Assemble
                const nextState: StateConfig = {
                    name: 'test'
                };

                component.billingInfo.billingType = billingType;
                component.billingInfo.eft.accountType = bankAccountType;
                parent.emailAddress = email;

                //Act
                await component.submit(nextState);

                //Assert
                expect(missedATollService.constructMatPaymentRequest).toHaveBeenCalledWith(
                    component.billingInfo.billingType,
                    component.billingInfo,
                    missedATollService.getViolationInformation(),
                    missedATollService.getViolationInformation().formattedViolationData.listOfViolations,
                    parent.emailAddress);

                expect(missedATollService.constructMatPaymentRequest).toHaveBeenCalledTimes(1);

                expect(api.matMakePayment).toHaveBeenCalledTimes(1);

            });

        });

        it('should call isErrorFree and not go to next state when errors', async () => {

            //Assemble
            const nextState: StateConfig = {
                name: 'test'
            };

            (api.matMakePayment as jasmine.Spy).and.returnValue(Promise.resolve({ errors: [1, 2, 3] }));

            responseErrorService.isErrorFree.and.returnValue(false);

            //Act
            await component.submit(nextState);

            //Assert
            expect(responseErrorService.isErrorFree)
                .toHaveBeenCalledWith({ errors: [1, 2, 3] });
            expect(responseErrorService.isErrorFree).toHaveBeenCalledTimes(1);
            expect(component['goToNextState']).toHaveBeenCalledTimes(0);

        });

        it('should go to nextState and cleanup violations logging data when no errors', async () => {

            //Assemble
            const nextState: StateConfig = {
                name: 'test'
            };

            (api.matMakePayment as jasmine.Spy).and.returnValue(Promise.resolve({ errors: [] }));

            responseErrorService.isErrorFree.and.returnValue(true);

            //Act
            await component.submit(nextState);

            //Assert
            expect(responseErrorService.isErrorFree).toHaveBeenCalledWith({ errors: [] });
            expect(responseErrorService.isErrorFree).toHaveBeenCalledTimes(1);
            expect(component['goToNextState']).toHaveBeenCalledTimes(1);
            expect(webStorage.removeEntry).toHaveBeenCalledWith(webStorageConst.violationsLogData);

        });

    });

    describe('previous', () => {
        it('should go to previous state', async () => {
            //Assemble
            const prevState: StateConfig = {
                name: 'prev'
            };

            //Act
            await component.ngOnInit();
            await component.ngAfterViewInit();
            component.previous(prevState);

            //Assert
            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith(prevState, { billingInfo: jasmine.any(Object) });

        });
    });

    describe('openModal', () => {
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
                stateList: parent.stateList,
                countryList: parent.countryList
            };

            //Act
            await component.ngOnInit();
            await component.ngAfterViewInit();
            const event = new EventEmitter<BillingInjectionValues>();

            (dialogueService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());

            //Act
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

            await component.ngOnInit();
            await component.ngAfterViewInit();

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

            //Act            
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
