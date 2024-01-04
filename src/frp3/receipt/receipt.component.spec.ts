import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { ReceiptComponent } from './receipt.component';
import { FrameComponent } from 'frp3/frame/frame.component';
import { PipesModule } from 'pipes/module';
import { WindowRef } from 'common/providers';
import { StateNames as ViolationsStateNames } from 'frp3/constants';
import { StateNames as LoginStateNames } from 'login/constants';
import { ViolationsDataService } from 'violationsCommon/services/violationsService/violationsData.service';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { Decimal } from 'decimal.js-light';
import { BrowserExtensionHandlerService } from '../../common/services/browserExtensionHandlerService/browserExtensionHandler.service';

describe('ReceiptComponent tests', () => {

    let fixture: ComponentFixture<ReceiptComponent>;
    let component: ReceiptComponent;
    let frameComponent: jasmine.SpyObj<FrameComponent>;
    let uiRouterGlobals: UIRouterGlobals;
    let state: StateService;
    let windowMock: jasmine.SpyObj<Window>;
    let violationsDataService: ViolationsDataService;
    let browserExtensionHandlerService: BrowserExtensionHandlerService;
    let loginStateNames: LoginStateNames;
    let violationsStateNames: ViolationsStateNames;
    let authenticationService: jasmine.SpyObj<AuthenticationService>;

    beforeEach(async () => {

        frameComponent = jasmine.createSpyObj('frameComponent', ['scrollToTop', 'getPlateContainer']);
        state = jasmine.createSpyObj('state', ['go']);
        uiRouterGlobals = {
            params: { billingInfo: { fakeAttr: 'fakeInfo', billingType: 'not null' } },
            current: 'fake current'
        } as any;
        windowMock = jasmine.createSpyObj('window', ['print']);
        violationsDataService = jasmine.createSpyObj('violationsDataService',
            ['removeAllWebStorageEntries', 'findViolations', 'findViolationAcct']);
        browserExtensionHandlerService = jasmine.createSpyObj('browserExtensionHandlerService', ['sendTag']);
        violationsStateNames = new ViolationsStateNames();
        loginStateNames = new LoginStateNames();
        authenticationService = jasmine.createSpyObj('AuthenticationService', ['isAuthenticated']);

        await TestBed
            .overrideComponent(ReceiptComponent, {
                set: {
                    providers: []
                }
            });

        await TestBed
            .configureTestingModule({
                declarations: [
                    Component({ selector: 'storefront-utility', template: '' })((class FakeStoreFrontUtility { isKioskView: false; }))
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: FrameComponent, useFactory: () => frameComponent },
                    { provide: BrowserExtensionHandlerService, useFactory: () => browserExtensionHandlerService },
                    { provide: WindowRef, useFactory: () => windowMock },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: StateService, useFactory: () => state },
                    { provide: ViolationsDataService, useFactory: () => violationsDataService },
                    { provide: ViolationsStateNames, useFactory: () => violationsStateNames },
                    { provide: LoginStateNames, useFactory: () => loginStateNames },
                    { provide: AuthenticationService, useFactory: () => authenticationService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ReceiptComponent);
        component = fixture.debugElement.componentInstance;
    });

    beforeEach(() => {
        component.cmsContent = {
            Title: 'main title',
            TITLE_1: 'main title 2',
            BillingInformationHeader: '',
            RemainingBalanceHeader: '',
            RemainingBalanceSubHeader: ''
        };
        component.cmsSectionImportantInformation = {
            Title: 'important info title',
            LongDescription: 'important info long desc'
        };
        component.cmsSectionThankYou = {
            Title: 'thank you title',
            LongDescription: 'thank you long desc'
        };
        component.cmsPaymentPostingPopup = {
            Title: 'payment posting popup title',
            LongDescription: 'payment posting popup long desc',
            ButtonText: 'button text'
        };
    });

    it('is a canary test', async () => {

        expect(true).toEqual(true);
    });

    describe('ngOnInit', () => {
        beforeEach(() => {
            (violationsDataService.findViolationAcct as jasmine.Spy).and.resolveTo({});
            frameComponent.getPlateContainer.and.returnValue(
                {
                    paymentAmount: 1234,
                    violationsFlowName: 'fake flow name',
                    assocPlatesPaymentAmount: 0,
                    plate: {
                        totalInvoicedAmount: 1234,
                        totalUninvoicedAmount: 1234
                    }
                } as any);
            spyOnProperty(component as any, 'dateNow', 'get').and.returnValue('fake date' as any);
            (state.go as jasmine.Spy).and.callFake(() => { });
        });

        it('should call parent.setStepOnly with 4', waitForAsync(() => {
            //Act
            component.ngOnInit().then(() => {
                //Assert
                expect(frameComponent.stepNum).toBe(4);
            });
        }));

        it('should not call state.go if billingInfo exists', waitForAsync(() => {

            //Act
            component.ngOnInit().then(() => {
                //Assert
                expect(state.go).toHaveBeenCalledTimes(0);
            });
        }));
        it('should call state.go if billingInfo is null', waitForAsync(() => {
            //Assemble
            component['uiRouterGlobals'] = {
                params: { billingInfo: null },
                current: 'fake current'
            } as any;

            //Act
            component.ngOnInit().then(() => {
                //Assert
                expect(state.go).toHaveBeenCalledTimes(1);
            });
        }));

        it('should call browserExtensionHandlerService.sendTag with uiRouterGlobals.current and violationsFlowName', waitForAsync(() => {
            //Act
            component.ngOnInit().then(() => {
                //Assert
                expect(browserExtensionHandlerService.sendTag).toHaveBeenCalledTimes(1);
                expect(browserExtensionHandlerService.sendTag).toHaveBeenCalledWith('fake current' as StateDeclaration, 'fake flow name');
            });
        }));

        it('should call webStorage.getValue() 1 time with webStorageConst.enhancedViolationsPlateAndInvoiceData', waitForAsync(() => {
            //Act
            component.ngOnInit().then(() => {
                //Assert
                expect(frameComponent.getPlateContainer).toHaveBeenCalledTimes(2);
                expect(frameComponent.getPlateContainer).toHaveBeenCalledWith();
            });
        }));
        it('should correctly set plateContainer', waitForAsync(() => {
            //Act
            component.ngOnInit().then(() => {
                //Assert
                expect(component.plateContainer).toEqual({
                    paymentAmount: 1234,
                    violationsFlowName: 'fake flow name',
                    assocPlatesPaymentAmount: 0,
                    plate: {
                        totalInvoicedAmount: 1234,
                        totalUninvoicedAmount: 1234
                    }
                } as any);
            });
        }));
        it('should set billingMethod to default value when no uiRouter params', waitForAsync(() => {
            //Assemble
            component['uiRouterGlobals'].params.billingInfo = undefined;
            //Act
            component.ngOnInit().then(() => {
                //Assert
                expect(component.billingMethod).toEqual({} as any);
            });
        }));
        it('should correctly set billingMethod', waitForAsync(() => {
            //Act
            component.ngOnInit().then(() => {
                //Assert
                expect(component.billingMethod).toEqual({ fakeAttr: 'fakeInfo', billingType: 'not null' } as any);
            });
        }));

        it('should correctly set longDescriptionParams', waitForAsync(() => {
            //Assemble
            const thankYouSectionParams = {
                paymentDate: 'fake date',
                totalPayment: 1234,
                remainingBalance: 2468
            };

            //Act
            component.ngOnInit().then(() => {
                //Assert
                expect(component.thankYouSectionParams).toEqual(thankYouSectionParams);
            });
        }));

        describe('bare getPlateContainer', () => {
            beforeEach(() => {
                (violationsDataService.findViolationAcct as jasmine.Spy).and.resolveTo({});
                frameComponent.getPlateContainer.and.returnValue({
                    plate: {
                        licenseState: '',
                        licensePlate: '',
                        totalInvoicedAmount: 0,
                        totalUninvoicedAmount: 0
                    }
                } as any);
                (state.go as jasmine.Spy).and.callFake(() => { });
            });

            it('should call state.go if billingInfo and paymentAmount is null', waitForAsync(() => {
                //Assemble
                component['uiRouterGlobals'] = {
                    params: { billingInfo: null },
                    current: 'fake current'
                } as any;

                //Act
                component.ngOnInit().then(() => {
                    //Assert
                    expect(state.go).toHaveBeenCalledTimes(1);
                });
            }));
        });
    });

    describe('goToLoginPageOrAccountOverview', () => {

        it('should call violationsDataService.removeAllWebStorageEntries() 1 time', async () => {
            //Assemble
            (violationsDataService.removeAllWebStorageEntries as jasmine.Spy).and.callFake(() => { });

            //Act
            await component.goToLoginOrAccountOverview();

            //Assert
            expect(violationsDataService.removeAllWebStorageEntries).toHaveBeenCalledTimes(1);
        });

        it('should call state.go with AccountOverview.Frame', async () => {
            //Assemble
            (violationsDataService.removeAllWebStorageEntries as jasmine.Spy).and.callFake(() => { });

            //Act
            component.isAuthenticated = true;
            await component.goToLoginOrAccountOverview();

            //Assert
            expect(state.go).toHaveBeenCalledWith('AccountOverview');
        });
    });

    describe('updateViolations', () => {
        beforeEach(() => {
            (violationsDataService.findViolationAcct as jasmine.Spy).and.callFake(() => { });
            (frameComponent.getPlateContainer as jasmine.Spy).and.returnValue({
                invoiceSearchNum: '111222333444',
                plate: {
                    licensePlate: 'abc123',
                    licenseState: 'Tx',
                    totalInvoicedAmount: 12,
                    totalUninvoicedAmount: 12
                },
                paymentAmount: 155555555,
                associatedPlates: [{
                    totalInvoicedAmount: 1.5,
                    totalUninvoicedAmount: 1.5
                }]
            } as any);
        });

        it('should call violationsDataService.findViolationAcct() and update plateContainer', async () => {
            //Assemble
            spyOn(component, 'updateViolations').and.callThrough();

            component.plateContainer = {
                invoiceSearchNum: '111222333444',
                plate: {
                    licensePlate: 'abc123',
                    licenseState: 'Tx',
                    totalInvoicedAmount: 12,
                    totalUninvoicedAmount: 12
                },
                paymentAmount: 155555555
            } as any;

            //Act
            await component.updateViolations();

            //Assert
            expect(violationsDataService.findViolationAcct).toHaveBeenCalledTimes(1);
            expect(violationsDataService.findViolationAcct).toHaveBeenCalledWith(
                {
                    licenseState: 'Tx',
                    invoiceNumber: '111222333444',
                    licensePlate: 'abc123',
                    research: true
                },
                null, null, null, true);

            expect(frameComponent.getPlateContainer).toHaveBeenCalledTimes(1);
            expect(frameComponent.getPlateContainer).toHaveBeenCalledWith();
            expect(component.showRemainingBalance).toBeTruthy();
        });
    });

    describe('backToInvoicesGrid', () => {
        it('should call violationsStateService.findViolationAcct() 1 time and with correct parameters', () => {
            //Assemble
            component.plateContainer = {
                invoiceSearchNum: '111222333444',
                plate: {
                    licensePlate: 'abc123',
                    licenseState: 'Tx'
                }
            } as any;
            component.billingMethod = 'fake billing method' as any;

            //Act
            component.backToSearchGrid();

            //Assert
            expect(violationsDataService.findViolationAcct).toHaveBeenCalledTimes(1);
            expect(violationsDataService.findViolationAcct).toHaveBeenCalledWith(
                {
                    licenseState: 'Tx',
                    invoiceNumber: '111222333444',
                    licensePlate: 'abc123'
                },
                null,
                null,
                {
                    to: violationsStateNames.Grid, params: { billingInfo: 'fake billing method' },
                    options: { custom: { isExplicitlyAllowedTransition: true } }
                }
            );
        });
    });

    describe('nextTask', () => {

        it('should call state.go', async () => {
            //Assemble
            const obj = { myProp: 'hello' } as any;

            //Act
            await component.nextTask(obj);

            //Assert
            expect(state.go).toHaveBeenCalledWith(obj);
            expect(state.go).toHaveBeenCalledTimes(1);
        });
    });

});
