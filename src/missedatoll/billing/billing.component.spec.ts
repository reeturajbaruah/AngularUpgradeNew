import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { By } from '@angular/platform-browser';
import { StateRegistry, StateService, UIRouterGlobals } from '@uirouter/angular';
import { StateConfig } from 'common/interfaces';
import { BankAccountType } from 'common/models';
import { GenericRepoService, ResponseErrorService } from 'common/services';
import { CreditCardEntryComponent, WizardComponent } from 'common/ui';
import { WizardTestingProvider } from 'common/ui/wizard/wizard.testUtility';
import { } from 'jasmine';
import { changesStable } from 'testing';
import { ValidationModule } from 'validation/module';
import { StateNames as MissedATollStateNames } from '../constants';
import { FrameComponent } from '../frame/frame.component';
import { BillingComponent } from './billing.component';


describe('MissedATollBillingComponent', () => {

    let fixture: ComponentFixture<BillingComponent>;
    let component: BillingComponent;
    let form: NgForm;

    let parent: FrameComponent;
    let stateService: StateService;
    let stateRegistry: StateRegistry;
    let uiRouterGlobals: UIRouterGlobals;
    let genericRepo: any;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;

    let wizard: WizardComponent;

    beforeEach(async () => {
        //Parent Mock
        parent = {} as FrameComponent;
        parent.stateList = [{ stateCode: 'fakeState' }, { stateCode: 'TX' }];
        parent.countryList = [{ countryCode: 'TCY', displayName: 'Test Country' }];
        parent.scrollToTop = jasmine.createSpy('scrollToTop', () => Promise.resolve());

        //StateService Mock
        stateService = jasmine.createSpyObj('state', ['go']);
        stateRegistry = jasmine.createSpyObj('stateRegistry', ['get']);

        //GenericRepo Mock
        genericRepo = {
            dataFactory: {
                eftValidateRouting: jasmine.createSpy('eftValidateRouting'),
            }
        };
        genericRepo.dataFactory.eftValidateRouting.and.resolveTo({
            alerts: [],
            errors: []
        });

        //uiRouterGlobals Mock
        uiRouterGlobals = {
            current: {
                wizard: {
                    nextState: 'someState'
                }
            } as StateConfig,
            params: {}
        } as any;

        //ResponseErrorService Mock
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['displayAlertsFromResponse', 'isErrorFree']);
        responseErrorService.isErrorFree.and.returnValue(true);

        await TestBed.configureTestingModule({
            declarations: [BillingComponent, WizardComponent],
            imports: [
                ValidationModule,
                FlexLayoutModule,
                FormsModule,
                MatFormFieldModule,
                MatIconTestingModule
            ],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: FrameComponent, useFactory: () => parent },
                { provide: StateService, useFactory: () => stateService },
                { provide: StateRegistry, useFactory: () => stateRegistry },
                { provide: MissedATollStateNames, useFactory: () => new MissedATollStateNames() },
                { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                { provide: GenericRepoService, useFactory: () => genericRepo  },
                { provide: ResponseErrorService, useFactory: () => responseErrorService },
                WizardTestingProvider
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(BillingComponent);
        component = fixture.debugElement.componentInstance;
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
            billingType: ''
        };
        form = fixture.debugElement.query(By.directive(NgForm)).references.Form as NgForm;

        wizard = fixture.debugElement
            .query(By.directive(WizardComponent))
            .componentInstance as WizardComponent;

        await changesStable(fixture);
    });

    describe('canary', () => {
        it('should return true', () => {
            expect(true).toBeTruthy();
        });
    });

    describe('ngOnInit', () => {
        it('should set the step number', () => {
            //Assert
            expect(parent.stepNum).toBe(2);
        });

        it('should scroll to top', () => {
            //Assemble
            (parent.scrollToTop as jasmine.Spy).calls.reset();

            //Act
            component.ngOnInit();

            //Assert
            expect(parent.scrollToTop).toHaveBeenCalledTimes(1);
        });

    });

    describe('submit', () => {
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
            await component.submit(nextState);

            //Assert
            expect(stateService.go).toHaveBeenCalledTimes(1);
            expect(stateService.go).toHaveBeenCalledWith(nextState, { billingInfo: jasmine.any(Object) });
        });

        it('should have no saveStep call if creditEntry.submit resolves false', async () => {
            //Assemble
            const nextState: StateConfig = {
                name: 'test'
            };
            component.billingInfo.billingType = 'notEFT';
            const mockCreditEntry: CreditCardEntryComponent = jasmine.createSpyObj('creditEntry', ['submit']);
            (mockCreditEntry.submit as any).and.resolveTo(false);
            component.creditEntry = mockCreditEntry;
            //Act
            await component.submit(nextState);

            //Assert
            expect(stateService.go).toHaveBeenCalledTimes(0);
        });

        it('should handle EFT types', async () => {
            //Assemble
            const nextState: StateConfig = {
                name: 'test'
            };
            component.billingInfo.billingType = 'EFT';
            responseErrorService.displayAlertsFromResponse.calls.reset();


            //Act
            await component.submit(nextState);

            //Assert
            expect(genericRepo.dataFactory.eftValidateRouting).toHaveBeenCalledTimes(1);
            expect(genericRepo.dataFactory.eftValidateRouting).toHaveBeenCalledWith({
                AccountType: BankAccountType.Business,
                RoutingNumber: '123123',
                AccountNumber: '1111111'
            });

            expect(responseErrorService.displayAlertsFromResponse).not.toHaveBeenCalled();

            expect(stateService.go).toHaveBeenCalledTimes(1);
            expect(stateService.go).toHaveBeenCalledWith(nextState, { billingInfo: jasmine.any(Object) });
        });

        it('should display EFT alerts', async () => {
            //Assemble
            const nextState: StateConfig = {
                name: 'test'
            };
            component.billingInfo.billingType = 'EFT';
            genericRepo.dataFactory.eftValidateRouting.and.resolveTo({
                alerts: ['alert'],
                errors: []
            });
            responseErrorService.displayAlertsFromResponse.calls.reset();

            //Act
            await component.submit(nextState);

            //Assert

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith({ alerts: ['alert'], errors: [] } as any, true);
        });
    });

    describe('previous', () => {
        it('should go to previous state', () => {
            //Assemble
            const prevState: StateConfig = {
                name: 'prev'
            };

            //Act
            component.previous(prevState);

            //Assert
            expect(stateService.go).toHaveBeenCalledTimes(1);
            expect(stateService.go).toHaveBeenCalledWith(prevState, { billingInfo: jasmine.any(Object) });

        });
    });

});
