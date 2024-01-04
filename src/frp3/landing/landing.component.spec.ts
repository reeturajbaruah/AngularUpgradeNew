import { } from 'jasmine';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LandingComponent } from './landing.component';
import { FrameComponent } from 'frp3/frame/frame.component';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { CmsReplacementService, CmsUtilService } from 'cms/services';

import { DialogService } from 'common/services';
import { StateService, UIRouterGlobals, StateRegistry } from '@uirouter/angular';
import { StateConfig } from 'common/interfaces';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { CommonModule as HctraCommonModule } from 'common/module';
import { PipesModule } from 'pipes/module';
import { ValidationModule } from 'validation/module';
import { WizardTestingProvider } from 'common/ui/wizard/wizard.testUtility';
import { StateNames as ViolationsStateNames } from 'violations/constants';
import { ViolationsDataService } from 'violationsCommon/services/violationsService/violationsData.service';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';

describe('ViolationsLandingComponent', () => {

    let fixture: ComponentFixture<LandingComponent>;
    let component: LandingComponent;
    let parent: FrameComponent;

    let authService: jasmine.SpyObj<AuthenticationService>;
    let violationsDataService: ViolationsDataService;
    let uiStateService: StateService;
    let uiStateRegistry: StateRegistry;
    let uiRouterGlobals: UIRouterGlobals;
    let cmsUtilService: CmsUtilService;
    let storefrontUtilityService: any;
    let dialogService: DialogService;
    let cmsReplacement: jasmine.SpyObj<CmsReplacementService>;
    beforeEach(async () => {
        parent = jasmine.createSpyObj('frameComponent', ['scrollToTop']);
        parent.stateList = [{ stateCode: 'TX' }];
        storefrontUtilityService = {
            isRunningAsKiosk: false,
            webStoreData: { fullSiteMode: false },
            accountLoggedInWorkItemIds: []
        };
        authService = jasmine.createSpyObj('authService', ['isAuthenticated']);

        violationsDataService = jasmine.createSpyObj('violationsDataService',
            ['findViolationAcct', 'removeAllWebStorageEntries']);

        uiStateService = jasmine.createSpyObj('uiStateService', ['go', 'get']);
        uiStateRegistry = jasmine.createSpyObj('uiStateRegistry', ['get']);
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered', 'openGenericModal', 'closeAllModals']);
        cmsReplacement = jasmine.createSpyObj('cmsReplacementService', ['transformTemplate']);
        uiRouterGlobals = {
            current: {
                wizard: {
                    nextState: 'someState'
                }
            } as StateConfig,
            params: {}
        } as any;

        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['parseAllImageAttributes']);
        (cmsUtilService.parseAllImageAttributes as jasmine.Spy).and.returnValues({ image: 'fake img1' }, { image: 'fake img2' });


        await TestBed
            .configureTestingModule({
                declarations: [LandingComponent],
                imports: [
                    HctraCommonModule,
                    FormsModule,
                    ValidationModule,
                    PipesModule,
                    FlexLayoutModule,
                    MatDividerModule,
                    MatFormFieldModule,
                    MatSelectModule
                ],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: StateService, useFactory: () => uiStateService },
                    { provide: StateRegistry, useFactory: () => uiStateRegistry },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: ViolationsStateNames, useFactory: () => new ViolationsStateNames() },
                    { provide: ViolationsDataService, useFactory: () => violationsDataService },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                    { provide: StorefrontUtilityService, useFactory: () => storefrontUtilityService },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: AuthenticationService, useFactory: () => authService },
                    { provide: CmsReplacementService, useFactory: () => cmsReplacement },
                    WizardTestingProvider
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(LandingComponent);
        component = fixture.debugElement.componentInstance;
        component.cmsLoginModal = {
            AcceptButton: '',
            RejectButton: '',
            PrimaryContent: '',
            Title: ''
        };
        component.paymentPlansModal = {
            AcceptBtn: '',
            CancelBtn: '',
            LongDescription: '',
            Title: '',
            ShortDescription: '',
            associatedPlatesTitle: ''
        };
        component.violationLoginModal = {
            AcceptBtn: '',
            CancelBtn: '',
            LongDescription: '',
            Title: '',
            PAY_PLAN_TOOLTIP_LINK: '',
            PAY_PLAN_TOOLTIP_TEXT: '',
            PAY_PLAN_TOOLTIP_KIOSK_TEXT: ''
        };
    });

    beforeEach(() => {
        component.cmsMainPage = {
            Title: 'fake title 1',
            ShortDescription: 'fake short desc',
            Children: []
        } as any;
        component.cmsSectionInvoiceImage = {
            Title: 'fake title cmsSectionInvoiceImage',
            ShortDescription: 'fake short desc cmsSectionInvoiceImage',
            Image: 'fake image cmsSectionSearchForTollViolationInvoices',
            Children: []
        } as any;
        component.cmsSectionPayingOutstandingTolls = {
            Title: 'fake title cmsSectionImportantReminders',
            ShortDescription: 'fake short desc cmsSectionImportantReminders',
            Children: []
        } as any;
        component.cmsSectionSearchForTollViolationInvoices = {
            Title: 'fake title 1',
            ShortDescription: 'fake short desc cmsSectionSearchForTollViolationInvoices',
            Children: []
        } as any;

        component.usStates = [{ stateCode: 'AR' }, { stateCode: 'TX' }];

    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        beforeEach(() => {
            component.usStates = [{ stateCode: 'AR' }, { stateCode: 'TX' }];

        });
        it('should set violations.selectedState', () => {
            //Act
            component.ngOnInit();

            //Assert
            expect(component.violations.selectedState).toEqual({ stateCode: 'TX' });
        });

        it('should call some setup functions', () => {
            //Assemble
            (violationsDataService.removeAllWebStorageEntries as jasmine.Spy).and.callFake(() => { });


            //Act
            component.ngOnInit();

            //Assert
            expect(violationsDataService.removeAllWebStorageEntries).toHaveBeenCalledTimes(1);
            expect(parent.stepNum).toBe(0);
            expect(parent.scrollToTop).toHaveBeenCalledTimes(1);
            expect(cmsUtilService.parseAllImageAttributes).toHaveBeenCalledTimes(1);
        });

        [
            { isRunningAsKiosk: true, desktopMode: true, isAuthenticated: false, times: 1 },
            { isRunningAsKiosk: true, desktopMode: true, isAuthenticated: true, times: 0 },
            { isRunningAsKiosk: false, desktopMode: true, isAuthenticated: true, times: 0 },
            { isRunningAsKiosk: false, desktopMode: true, isAuthenticated: false, times: 1 },
            { isRunningAsKiosk: true, desktopMode: false, isAuthenticated: false, times: 0 },
            { isRunningAsKiosk: true, desktopMode: false, isAuthenticated: true, times: 0 },
            { isRunningAsKiosk: false, desktopMode: false, isAuthenticated: true, times: 0 },
            { isRunningAsKiosk: false, desktopMode: false, isAuthenticated: false, times: 1 }

        ]
            .forEach(testCase =>
                it(`should call showLoginModal ${testCase.times} times
                when isRunningAsKiosk is ${testCase.isRunningAsKiosk}
                and desktopMode is ${testCase.desktopMode}
                and isAuthenticated is ${testCase.isAuthenticated}`, () => {

                    //Assemble
                    storefrontUtilityService.isRunningAsKiosk = testCase.isRunningAsKiosk;
                    storefrontUtilityService.webStoreData.fullSiteMode = testCase.desktopMode;

                    authService.isAuthenticated.and.callFake(() => testCase.isAuthenticated);
                    spyOn<any>(component, 'showLoginModal').and.callFake(() => { });

                    //Act
                    component.ngOnInit();

                    //Assert
                    expect(component['showLoginModal']).toHaveBeenCalledTimes(testCase.times);
                }));
    });

    describe('findViolationAcct', () => {
        it('should call violationsDataService.findViolationAcct() with fullRequest.violationsData', async () => {
            //Assemble
            spyOn(component, 'findViolations').and.callThrough();
            (violationsDataService.findViolationAcct as jasmine.Spy).and.callFake(() => { });
            component.violations = {
                selectedState: { stateCode: 'fake state' },
                invoiceNumber: '123456789',
                licensePlateNumber: 'abc123plate'
            };
            cmsReplacement.transformTemplate.and.returnValue('CMS message replaced');
            //Act
            await component.findViolations(null);
            const paymentPlansModal = {
                AcceptBtn: '',
                CancelBtn: '',
                LongDescription: 'CMS message replaced',
                Title: '',
                ShortDescription: '',
                associatedPlatesTitle: ''
            };
            const violationLoginModal = {
                AcceptBtn: '',
                CancelBtn: '',
                LongDescription: '',
                Title: '',
                PAY_PLAN_TOOLTIP_LINK: '',
                PAY_PLAN_TOOLTIP_TEXT: '',
                PAY_PLAN_TOOLTIP_KIOSK_TEXT: ''
            };
            //Assert
            expect(violationsDataService.findViolationAcct).toHaveBeenCalledTimes(1);
            expect(violationsDataService.findViolationAcct).toHaveBeenCalledWith({
                licenseState: component.violations.selectedState.stateCode,
                invoiceNumber: component.violations.invoiceNumber,
                licensePlate: component.violations.licensePlateNumber
            }, paymentPlansModal, violationLoginModal, { to: null, options: { custom: { isExplicitlyAllowedTransition: true } } });
        });
    });
});
