import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { By } from '@angular/platform-browser';
import { StateRegistry, StateService, UIRouterGlobals } from '@uirouter/angular';
import { CmsUtilService } from 'cms/services';
import { StateConfig } from 'common/interfaces';
import { CommonModule as HctraCommonModule } from 'common/module';
import { ResponseErrorService } from 'common/services';
import { WizardComponent } from 'common/ui';
import { WizardTestingProvider } from 'common/ui/wizard/wizard.testUtility';
import { WebStorageConst } from 'constants/module';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { changesStable } from 'testing';
import { ValidationModule } from 'validation/module';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';
import { FrameComponent } from '../frame/frame.component';
import { MissedATollService, WebApiService } from '../services';
import { LandingComponent } from './landing.component';


describe('MissedATollLandingComponent', () => {

    let fixture: ComponentFixture<LandingComponent>;
    let component: LandingComponent;

    // Injected into the component
    let parent: FrameComponent;
    let api: WebApiService;
    let responseErrorService: jasmine.SpyObj<any>;
    let missedATollService: MissedATollService;
    let uiStateService: StateService;
    let uiStateRegistry: StateRegistry;
    let uiRouterGlobals: UIRouterGlobals;
    let cmsUtilService: CmsUtilService;
    let webStorage: jasmine.SpyObj<any>;
    let webStorageConst: WebStorageConst;

    // Part of the template
    let wizard: WizardComponent;

    beforeEach(async () => {
        parent = {} as FrameComponent;
        parent.emailAddress = '';
        parent.stateList = [{ stateCode: 'fakeState' }, { stateCode: 'TX' }];
        parent.scrollToTop = jasmine.createSpy('scrollToTop', () => Promise.resolve());

        api = jasmine.createSpyObj('webApiService', ['checkMatEligibility']);

        responseErrorService = jasmine.createSpyObj('responseErrorService',
            ['displayAlertsFromResponse', 'isErrorFree']);

        missedATollService = jasmine.createSpyObj('missedATollService',
            ['destroyViolationInformation', 'setViolationDataAndGenerateTotalAmountDue', 'saveViolationInformation', 'processSuccessSearch']);

        uiStateService = jasmine.createSpyObj('uiStateService', ['go', 'get']);
        uiStateRegistry = jasmine.createSpyObj('uiStateRegistry', ['get']);

        uiRouterGlobals = {
            current: {
                wizard: {
                    nextState: 'someState'
                }
            } as StateConfig,
            params: {}
        } as any;

        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['parseAllImageAttributes']);
        (cmsUtilService.parseAllImageAttributes as jasmine.Spy).and.returnValues({ image: '/Content/icons/pdf.gif' }, { image: '/Content/icons/excel.gif' });

        webStorage = jasmine.createSpyObj('webStorage', ['setKeyValue']);
        webStorageConst = new WebStorageConst();

        await TestBed
            .configureTestingModule({
                declarations: [LandingComponent],
                imports: [HctraCommonModule,
                    FormsModule,
                    ValidationModule,
                    PipesModule,
                    FlexLayoutModule,
                    MatDividerModule,
                    MatFormFieldModule,
                    MatSelectModule],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: WebApiService, useFactory: () => api },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: MissedATollService, useFactory: () => missedATollService },
                    { provide: StateService, useFactory: () => uiStateService },
                    { provide: StateRegistry, useFactory: () => uiStateRegistry },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                    { provide: WebStorageService, useFactory: () => webStorage },
                    { provide: WebStorageConst, useValue: webStorageConst },
                    WizardTestingProvider
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(LandingComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsSection1 = { Title: '', ShortDescription: '', Image: 'cmsImage1' };
        component.cmsSection2 = { Title: '', ShortDescription: '', Image: 'cmsImage2' };

        wizard = fixture.debugElement
            .query(By.directive(WizardComponent))
            .componentInstance as WizardComponent;

        (missedATollService.processSuccessSearch as jasmine.Spy).and.returnValue({});

        await changesStable(fixture);
    });


    describe('ngOnInit', () => {
        it('should set some component variables', () => {
            expect(parent.emailAddress).toBeNull();
            expect(component.states).toEqual({ stateList: parent.stateList });
            expect(component.violations).toEqual({ selectedState: { stateCode: 'TX' } });
            expect(component.cmsImage1).toEqual({ image: '/Content/icons/pdf.gif' } as any);
            expect(component.cmsImage2).toEqual({ image: '/Content/icons/excel.gif' } as any);
        });

        it('should call some setup functions', () => {
            expect(parent.stepNum).toBe(0);
            expect(parent.scrollToTop).toHaveBeenCalledTimes(1);
            expect(missedATollService.destroyViolationInformation).toHaveBeenCalledTimes(1);
            expect(cmsUtilService.parseAllImageAttributes).toHaveBeenCalledWith('cmsImage1');
            expect(cmsUtilService.parseAllImageAttributes).toHaveBeenCalledWith('cmsImage2');
        });
    });

    describe('form validation', () => {
        beforeEach(() => {
            spyOn(component, 'submit');
        });

        [
            '',
            '!@#$',
            '01234567890'
        ].forEach((invalidPlate) => {
            it('should NOT call submit if licensePlate is invalid', async () => {
                component.licensePlateNumber = invalidPlate;

                await changesStable(fixture);

                wizard['gotoNextState']();

                expect(component.submit).not.toHaveBeenCalled();
            });
        });

        [
            'abc1234',
            'ABC1234'
        ].forEach((validPlate) => {
            it('should call submit if licensePlate is valid', async () => {
                component.licensePlateNumber = validPlate;

                await changesStable(fixture);

                wizard['gotoNextState']();

                expect(component.submit).toHaveBeenCalledTimes(1);
            });
        });

        it('should not have a previous or cancel', async () => {
            try{
                await wizard.gotoPreviousState();
                fail('should have failed');                
            } catch(e){
                expect(e.message).toBe('state not defined in wizard or no wizard config in state config');
            }

            try{
                await wizard.gotoCancelState();
                fail('should have failed');                
            } catch(e){
                expect(e.message).toBe('state not defined in wizard or no wizard config in state config');
            }

        });

    });

    describe('submit', () => {
        beforeEach(() => {
            component.violations = { selectedState: { stateCode: 'AB' } };
            component.licensePlateNumber = 'abc1234';
        });

        it('should call the api', async () => {
            (api.checkMatEligibility as jasmine.Spy).and.returnValue(Promise.resolve({}));

            await changesStable(fixture);
            await component.submit({});

            expect(api.checkMatEligibility).toHaveBeenCalledWith({
                violationsData: {
                    licenseState: 'AB',
                    licensePlate: 'ABC1234'
                }
            });
        });

        it('should call failure processing function if errors were returned', async () => {
            const errorResponse = { errors: ['error'] };
            (api.checkMatEligibility as jasmine.Spy).and.returnValue(Promise.resolve(errorResponse));

            await changesStable(fixture);
            await component.submit({});

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith(errorResponse);
            expect(missedATollService.processSuccessSearch).not.toHaveBeenCalled();
        });

        it('should display errors and alerts if user is not eligible', async () => {
            const successResponse = { errors: [], isUserEligible: false };
            (api.checkMatEligibility as jasmine.Spy).and.returnValue(Promise.resolve(successResponse));

            await changesStable(fixture);
            await component.submit({});

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledWith(successResponse);
            expect(missedATollService.processSuccessSearch).not.toHaveBeenCalled();
        });

        it('should call success processing function and store violations logging data if api was successful', async () => {
            const successResponse = { errors: [], isUserEligible: true };
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
            (api.checkMatEligibility as jasmine.Spy).and.returnValue(Promise.resolve(successResponse));

            await changesStable(fixture);
            await component.submit({});

            expect(webStorage.setKeyValue).toHaveBeenCalledWith(webStorageConst.violationsLogData, { licenseState: 'AB', licensePlate: 'ABC1234' });
            expect(responseErrorService.displayAlertsFromResponse).not.toHaveBeenCalled();
            expect(missedATollService.processSuccessSearch).toHaveBeenCalledWith(successResponse, 'ABC1234', 'AB', {});
        });
    });


});
