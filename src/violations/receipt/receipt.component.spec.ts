import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { ReceiptComponent } from './receipt.component';
import { FrameComponent } from '../frame/frame.component';
import { PipesModule } from 'pipes/module';
import { WindowRef } from 'common/providers';
//import { ViolationsDataService } from '../services/violationsData.service';
import { StateNames as ViolationsStateNames } from 'violations/constants';
import { WizardTestingProvider } from 'common/ui/wizard/wizard.testUtility';
import { WizardComponent } from 'common/ui';
import { ViolationsDataService } from 'violationsCommon/services/violationsService/violationsData.service';
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

    let violationsStateNames: ViolationsStateNames;
    let wizard: WizardComponent;

    beforeEach(async () => {

        frameComponent = jasmine.createSpyObj('frameComponent', ['scrollToTop', 'setTitle', 'getPlateContainer']);
        state = jasmine.createSpyObj('state', ['go']);
        uiRouterGlobals = {
            params: { billingInfo: { fakeAttr: 'fakeInfo', billingType: 'not null' } },
            current: 'fake current'
        } as any;
        windowMock = jasmine.createSpyObj('window', ['print']);
        violationsDataService = jasmine.createSpyObj('violationsDataService', ['removeAllWebStorageEntries', 'findViolations']);
        browserExtensionHandlerService = jasmine.createSpyObj('browserExtensionHandlerService', ['sendTag']);
        violationsStateNames = new ViolationsStateNames();
        wizard = jasmine.createSpyObj('wizard', ['gotoNextState']);

        await TestBed
            .overrideComponent(ReceiptComponent, {
                set: {
                    providers: [
                        { provide: WizardComponent, useFactory: () => wizard }
                    ]
                }
            });

        await TestBed
            .configureTestingModule({
                declarations: [
                    ReceiptComponent, WizardComponent,
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
                    { provide: ViolationsDataService, useValue: violationsDataService },
                    { provide: ViolationsStateNames, useFactory: () => violationsStateNames },
                    WizardTestingProvider
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
            BillingInformationHeader: ''
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
            frameComponent.getPlateContainer.and.returnValue(
                {
                    paymentAmount: 1234,
                    remainingBalance: 2468,
                    violationsFlowName: 'fake flow name'
                } as any);
            spyOnProperty(component as any, 'dateNow', 'get').and.returnValue('fake date' as any);
            (state.go as jasmine.Spy).and.callFake(() => { });
        });

        it('should call parent.setStepOnly with 4', () => {
            //Act
            component.ngOnInit();

            //Assert
            expect(frameComponent.stepNum).toBe(4);
        });

        it('should not call state.go if billingInfo exists', () => {

            //Act
            component.ngOnInit();

            //Assert
            expect(state.go).toHaveBeenCalledTimes(0);
        });
        it('should call state.go if billingInfo is null', () => {
            //Assemble
            component['uiRouterGlobals'] = {
                params: { billingInfo: null },
                current: 'fake current'
            } as any;

            //Act
            component.ngOnInit();

            //Assert
            expect(state.go).toHaveBeenCalledTimes(1);
        });

        it('should call browserExtensionHandlerService.sendTag with uiRouterGlobals.current and violationsFlowName', () => {
            //Act
            component.ngOnInit();

            //Assert
            expect(browserExtensionHandlerService.sendTag).toHaveBeenCalledTimes(1);
            expect(browserExtensionHandlerService.sendTag).toHaveBeenCalledWith('fake current' as StateDeclaration, 'fake flow name');
        });

        it('should call webStorage.getValue() 1 time with webStorageConst.enhancedViolationsPlateAndInvoiceData', async () => {
            //Act
            component.ngOnInit();

            //Assert
            expect(frameComponent.getPlateContainer).toHaveBeenCalledTimes(1);
            expect(frameComponent.getPlateContainer).toHaveBeenCalledWith();
        });
        it('should correctly set plateContainer', async () => {
            //Act
            component['ngOnInit']();

            //Assert
            expect(component.plateContainer).toEqual({
                paymentAmount: 1234,
                remainingBalance: 2468,
                violationsFlowName: 'fake flow name'
            } as any);
        });
        it('should set billingMethod to default value when no uiRouter params', async () => {
            //Assemble
            component['uiRouterGlobals'].params.billingInfo = undefined;
            //Act
            component['ngOnInit']();
            //Assert
            expect(component.billingMethod).toEqual({} as any);
        });
        it('should correctly set billingMethod', async () => {
            //Act
            component['ngOnInit']();

            //Assert
            expect(component.billingMethod).toEqual({ fakeAttr: 'fakeInfo', billingType: 'not null' } as any);
        });
        it('should call frameComponent.setTitle with result of getTitle', async () => {
            //Act
            component['ngOnInit']();

            //Assert
            expect(frameComponent.setTitle).toHaveBeenCalledTimes(1);
            expect(frameComponent.setTitle).toHaveBeenCalledWith('main title');
        });
        it('should correctly set longDescriptionParams', async () => {
            //Assemble
            const thankYouSectionParams = {
                paymentDate: 'fake date',
                totalPayment: 1234,
                remainingBalance: 2468
            };

            //Act
            component.ngOnInit();

            //Assert
            expect(component.thankYouSectionParams).toEqual(thankYouSectionParams);
        });

    });
    describe('goToLoginPageOrAccountOverview', () => {

        it('should call wizard.gotoNextState() 1 time', async () => {
            //Assemble
            (wizard.gotoNextState as jasmine.Spy).and.callFake(() => { });

            //Act
            await component.goToLoginOrAccountOverview();

            //Assert
            expect(wizard.gotoNextState).toHaveBeenCalledTimes(1);
        });
        it('should call violationsDataService.removeAllWebStorageEntries() 1 time', async () => {
            //Assemble
            (violationsDataService.removeAllWebStorageEntries as jasmine.Spy).and.callFake(() => { });

            //Act
            await component.goToLoginOrAccountOverview();

            //Assert
            expect(violationsDataService.removeAllWebStorageEntries).toHaveBeenCalledTimes(1);
        });
    });
    describe('backToInvoicesGrid', () => {
        it('should call violationsStateService.findViolations() 1 time and with correct parameters', () => {
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
            component.backToInvoicesGrid();

            //Assert
            expect(violationsDataService.findViolations).toHaveBeenCalledTimes(1);
            expect(violationsDataService.findViolations).toHaveBeenCalledWith(
                {
                    licenseState: 'Tx',
                    invoiceNumber: '111222333444',
                    licensePlate: 'abc123'
                },
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
