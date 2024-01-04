import { } from 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateService, UIRouterGlobals, StateRegistry } from '@uirouter/angular';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';

import { CmsUtilService } from 'cms/services';
import { StateConfig } from 'common/interfaces';

import { WizardTestingProvider } from 'common/ui/wizard/wizard.testUtility';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { DialogService } from 'common/services';
import { InvoiceExampleComponent } from './invoiceExample.component';

import { CommonModule as HctraCommonModule } from 'common/module';
import { PipesModule } from 'pipes/module';
import { ValidationModule } from 'validation/module';

import { LandingComponent } from './landing.component';
import { FrameComponent } from 'violations/frame/frame.component';
import { StateNames as ViolationsStateNames } from 'violations/constants';
import { ViolationsDataService } from 'violationsCommon/services/violationsService/violationsData.service';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';
//import { ViolationsDataService } from 'violations/services/violationsData.service';

describe('ViolationsLandingComponent', () => {

    let fixture: ComponentFixture<LandingComponent>;
    let component: LandingComponent;

    let authService: jasmine.SpyObj<AuthenticationService>;
    let frameComponent: jasmine.SpyObj<FrameComponent>;
    let violationsDataService: ViolationsDataService;
    let uiStateService: StateService;
    let uiStateRegistry: StateRegistry;
    let uiRouterGlobals: UIRouterGlobals;
    let cmsUtilService: CmsUtilService;
    let storefrontUtilityService: any;
    let dialogService: DialogService;

    beforeEach(async () => {
        frameComponent = jasmine.createSpyObj('frameComponent', ['scrollToTop', 'setTitle']);
        frameComponent.stateList = [{ stateCode: 'TX' }];
        storefrontUtilityService = {
            isRunningAsKiosk: false,
            webStoreData: { fullSiteMode: false },
            accountLoggedInWorkItemIds: []
        };
        authService = jasmine.createSpyObj('authService', ['isAuthenticated']);

        violationsDataService = jasmine.createSpyObj('violationsDataService',
            ['findViolations', 'removeAllWebStorageEntries']);

        uiStateService = jasmine.createSpyObj('uiStateService', ['go', 'get']);
        uiStateRegistry = jasmine.createSpyObj('uiStateRegistry', ['get']);
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered', 'openGenericModal']);


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
                    { provide: FrameComponent, useFactory: () => frameComponent },
                    { provide: StateService, useFactory: () => uiStateService },
                    { provide: StateRegistry, useFactory: () => uiStateRegistry },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: ViolationsStateNames, useFactory: () => new ViolationsStateNames() },
                    { provide: ViolationsDataService, useFactory: () => violationsDataService },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                    { provide: StorefrontUtilityService, useFactory: () => storefrontUtilityService },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: AuthenticationService, useFactory: () => authService },
                    WizardTestingProvider
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(LandingComponent);
        component = fixture.debugElement.componentInstance;
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
        component.cmsSectionDoYouHaveAnEZTagAccount = {
            Title: 'fake title cmsSectionDoYouHaveAnEZTagAccount',
            ShortDescription: 'fake short desc cmsSectionDoYouHaveAnEZTagAccount',
            Children: []
        } as any;
        component.cmsSectionImportantReminders = {
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

            expect(frameComponent.stepNum).toBe(0);

            expect(frameComponent.scrollToTop).toHaveBeenCalledTimes(1);

            expect(cmsUtilService.parseAllImageAttributes).toHaveBeenCalledTimes(1);
        });

        [
            { isRunningAsKiosk: true, fullSiteMode: true, isAuthenticated: false, times: 1 },
            { isRunningAsKiosk: true, fullSiteMode: true, isAuthenticated: true, times: 0 },
            { isRunningAsKiosk: false, fullSiteMode: true, isAuthenticated: true, times: 0 },
            { isRunningAsKiosk: false, fullSiteMode: true, isAuthenticated: false, times: 1 },
            { isRunningAsKiosk: true, fullSiteMode: false, isAuthenticated: false, times: 0 },
            { isRunningAsKiosk: true, fullSiteMode: false, isAuthenticated: true, times: 0 },
            { isRunningAsKiosk: false, fullSiteMode: false, isAuthenticated: true, times: 0 },
            { isRunningAsKiosk: false, fullSiteMode: false, isAuthenticated: false, times: 1 }

        ]
            .forEach(testCase =>
                it(`should call showLoginModal ${testCase.times} times
                    when isRunningAsKiosk is ${testCase.isRunningAsKiosk}
                    and fullSiteMode is ${testCase.fullSiteMode}
                    and isAuthenticated is ${testCase.isAuthenticated}`, () => {

                    //Assemble
                    storefrontUtilityService.isRunningAsKiosk = testCase.isRunningAsKiosk;
                    storefrontUtilityService.webStoreData.fullSiteMode = testCase.fullSiteMode;

                    authService.isAuthenticated.and.callFake(() => testCase.isAuthenticated);
                    spyOn<any>(component, 'showLoginModal').and.callFake(() => { });

                    //Act
                    component.ngOnInit();

                    //Assert
                    expect(component['showLoginModal']).toHaveBeenCalledTimes(testCase.times);
                }));

        it('should call dialogService.openGenericModal() 1 times', () => {

            //Act
            component.ngOnInit();

            //Assert
            expect(dialogService.openGenericModal).toHaveBeenCalledTimes(1);
        });
    });


    describe('findViolations', () => {
        it('should call violationsDataService.findViolations() with fullRequest.violationsData', async () => {
            //Assemble
            spyOn(component, 'findViolations').and.callThrough();
            (violationsDataService.findViolations as jasmine.Spy).and.callFake(() => { });
            component.violations = {
                selectedState: { stateCode: 'fake state' },
                invoiceNumber: '123456789',
                licensePlateNumber: 'abc123plate'
            };

            //Act
            await component.findViolations();

            //Assert
            expect(violationsDataService.findViolations).toHaveBeenCalledTimes(1);
            expect(violationsDataService.findViolations).toHaveBeenCalledWith({
                licenseState: component.violations.selectedState.stateCode,
                invoiceNumber: component.violations.invoiceNumber,
                licensePlate: component.violations.licensePlateNumber
            });
        });
    });

    describe('openHelpPage', () => {

        it('can open sliding modal', () => {
            component.openInvoiceExample();
            expect(dialogService.openSliderCentered).toHaveBeenCalled();

            const args = (dialogService.openSliderCentered as jasmine.Spy).calls.argsFor(0);

            expect(args[0]).toBe(InvoiceExampleComponent);

            expect(args[1]).toEqual({
                pageData: component.cmsInvoiceExample
            });
        });

    });

});
