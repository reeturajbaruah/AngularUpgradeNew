import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StateRegistry, StateService, UIRouterGlobals } from '@uirouter/angular';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { SiteCoreItem } from 'cms/cms.module';
import { StateConfig } from 'common/interfaces';
import { CommonModule as HctraCommonModule } from 'common/module';
import { DialogService, ResponseErrorService } from 'common/services';
import { WizardComponent } from 'common/ui';
import { WizardTestingProvider } from 'common/ui/wizard/wizard.testUtility';
import { UrlPaths, WebStorageConst } from 'constants/module';
import { } from 'jasmine';
import { StateNames as LoginStates } from 'login/constants';
import { FrameComponent } from 'paymentplans/frame/frame.component';
import { PlateDataService, StateService as PaymentPlanStateService } from 'paymentplans/services';
import { WebApiService } from 'paymentplans/services/webApi.service';
import { PipesModule } from 'pipes/module';
import { changesStable } from 'testing';
import { ValidationModule } from 'validation/module';
import { InvoiceExampleComponent } from './invoiceExample.component';
import { LandingComponent } from './landing.component';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';


describe('PaymentPlansLandingComponent', () => {

    let fixture: ComponentFixture<LandingComponent>;
    let component: LandingComponent;
    let parent: FrameComponent;
    let environmentConfig;
    let authService: jasmine.SpyObj<AuthenticationService>;
    let stateService: PaymentPlanStateService;
    let dataService: PlateDataService;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let api: WebApiService;
    let uiStateService: StateService;
    let uiStateRegistry: StateRegistry;
    let wizard: WizardComponent;
    let dialogService: DialogService;
    let uIRouterGlobals: jasmine.SpyObj<UIRouterGlobals>;
    let webStorage: any;
    let webStorageConst: WebStorageConst;

    beforeEach(async () => {
        webStorageConst = new WebStorageConst();
        webStorage = jasmine.createSpyObj('webStorage', ['getValue', 'removeEntry']);
        authService = jasmine.createSpyObj('authService', ['isAuthenticated']);
        stateService = jasmine.createSpyObj('stateService', ['destroyPaymentPlansCurrentStep', 'resetPaymentComplete', 'saveStep']);
        dataService = jasmine.createSpyObj('dataService', ['setPaymentPlans']);

        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree']);
        responseErrorService.isErrorFree.and.returnValue(true);
        environmentConfig = {
            isMergeMATandVioOn: false
        };
        api = jasmine.createSpyObj('api', ['violationsPaymentPlansSearch']);
        (api.violationsPaymentPlansSearch as jasmine.Spy).and.returnValue(Promise.resolve({}));
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered', 'openGenericModal']);
        uiStateService = jasmine.createSpyObj('uiStateService', ['go']);
        uIRouterGlobals = jasmine.createSpyObj('UIRouterGlobals', [], {
            current: {
                wizard: {
                    nextState: 'someState'
                }
            },
            params: {
                licensePlate: null,
                licenseState: null
            }
        });
        uiStateRegistry = jasmine.createSpyObj('uiStateRegistry', ['get']);
        parent = {} as FrameComponent;
        parent.scrollToTop = jasmine.createSpy('scrollToTop', () => Promise.resolve());

        (webStorage.removeEntry as jasmine.Spy).and.callFake(() => { });

        await TestBed
            .configureTestingModule({
                declarations: [
                    LandingComponent
                ],
                imports: [
                    HctraCommonModule, PipesModule, FormsModule, ValidationModule,

                    BrowserAnimationsModule,
                    FlexLayoutModule, MatSelectModule,
                    MatFormFieldModule, MatDividerModule

                ],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: AuthenticationService, useFactory: () => authService },
                    { provide: PaymentPlanStateService, useFactory: () => stateService },
                    { provide: PlateDataService, useFactory: () => dataService },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: WebApiService, useFactory: () => api },
                    { provide: StateService, useFactory: () => uiStateService },
                    { provide: StateRegistry, useFactory: () => uiStateRegistry },
                    { provide: UrlPaths, useFactory: () => new UrlPaths() },
                    { provide: LoginStates, useFactory: () => new LoginStates() },
                    { provide: DialogService, useFactory: () => dialogService },
                    WizardTestingProvider,
                    { provide: UIRouterGlobals, useFactory: () => uIRouterGlobals },
                    { provide: WebStorageService, useFactory: () => webStorage },
                    { provide: WebStorageConst, useValue: webStorageConst },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(LandingComponent);

        component = fixture.debugElement.componentInstance;
        wizard = fixture.debugElement
            .query(By.directive(WizardComponent))
            .componentInstance as WizardComponent;


        component.cmsPopup = {
            AcceptButton: '',
            RejectButton: '',
            PrimaryContent: '',
            Title: ''
        };

        component.cmsInvoiceExample = {} as SiteCoreItem;

        component.USstates = [
            {
                stateCode: 'TX'
            }, {
                stateCode: 'FL'
            }
        ];

        component.cmsPage = {
            LongDescription: '',
            ShortDescription: ''
        };
        component.closeImage = {
            Image: null
        };
        component.selectedState = { stateCode: 'TX' };
        component.cmsPopup = {
            Title: null,
            PrimaryContent: null,
            AcceptButton: null,
            RejectButton: null,
        };

        await changesStable(fixture);
    });

    //note: when testing 'form' related features like validation, you must set the values of the form
    //through the ngForm, and not the component; those values will not reliably trigger the validations!
    describe('validation', () => {

        beforeEach(() => {
            spyOn(component, 'findViolations').and.callThrough();
        });

        it('findViolations should return when hit error', async () => {
            responseErrorService.isErrorFree.and.returnValue(false);
            component.licensePlateNumber = 'abc1234';
            component.paymentPlanId = '123456';

            await changesStable(fixture);

            wizard['gotoNextState']();

            expect(component.findViolations).toHaveBeenCalled();
        });

        it('findViolations should NOT be call if licensePlate is invalid', async () => {

            component.licensePlateNumber = '!@$%$';

            await changesStable(fixture);

            wizard['gotoNextState']();

            expect(component.findViolations).not.toHaveBeenCalled();
        });

        it('findViolations should be call if invoice is undefined, paymentID is valide, and licensePlate is valid', async () => {
            component.licensePlateNumber = 'abc1234';
            component.paymentPlanId = '123456';

            await changesStable(fixture);

            wizard['gotoNextState']();

            expect(component.findViolations).toHaveBeenCalled();
        });

        it('findViolations should be call if invoice is valid, paymentID is undefined, and licensePlate is valid', async () => {

            component.licensePlateNumber = 'abc1234';
            component.invoiceNumber = '987654321';

            await changesStable(fixture);

            wizard['gotoNextState']();

            expect(component.findViolations).toHaveBeenCalled();
        });

    });

    describe('findViolations', () => {

        it('should call api.violationsPaymentPlansSearch', async () => {

            const state = {} as StateConfig;

            (api.violationsPaymentPlansSearch as jasmine.Spy).and.returnValue(Promise.resolve({}));

            await component.findViolations(state);

            expect(api.violationsPaymentPlansSearch).toHaveBeenCalledTimes(1);
            expect(uiStateService.go).toHaveBeenCalledWith(state);
        });
    });

    describe('openInvoiceExample', () => {

        it('can open sliding modal', () => {
            component.openInvoiceExample(true);
            expect(dialogService.openSliderCentered).toHaveBeenCalled();

            const args = (dialogService.openSliderCentered as jasmine.Spy).calls.argsFor(0);

            expect(args[0]).toBe(InvoiceExampleComponent);

            expect(args[1]).toEqual({
                pageData: component.cmsInvoiceExample,
                reverseOrder: true
            });
        });

    });


    describe('authService', () => {

        it('reject page if is not Authenticated', () => {
            (authService.isAuthenticated as jasmine.Spy).and.returnValue(true);
            component.ngOnInit();
            expect(dialogService.openSliderCentered).not.toHaveBeenCalled();
        });

    });

    describe('ngOnInit', () => {
        beforeEach(() => {
            (Object.getOwnPropertyDescriptor(uIRouterGlobals, 'params').get as jasmine.Spy).and.returnValue({
                licensePlate: 'TESTPLATE',
                licenseState: 'FL'
            });

            (webStorage.getValue as jasmine.Spy).and.returnValue({number: 0, state: 'TX'}); // eslint-disable-line id-blacklist
        });

        afterAll(() => {
            environmentConfig.isMergeMATandVioOn = false;
        });

        it('should call ', () => {
            environmentConfig.isMergeMATandVioOn = true;

            component.ngOnInit();

            expect(webStorage.removeEntry).toHaveBeenCalled();
        });
    });
});
