import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { DialogService, GenericRepoService, ResponseErrorService } from 'common/services';
import { WebStorageConst } from 'constants/module';
import { stateNames as homeStates } from 'home/constants';
import { } from 'jasmine';
import { MissedATollService, WebApiService } from 'missedatoll/services';
import { PipesModule } from 'pipes/module';
import { CallToActionConfig, StateNames } from '../constants';
import { CallToActionDesktopComponent } from './callToActionDesktop.component';
import { stateNames as AccountOverviewStates } from 'accountDashboard/constants';
import { ViolationsDataService } from 'violationsCommon/services/violationsService/violationsData.service';
import { stateNames as Frp3States } from 'frp3/constants';
import { stateNames } from 'constants/stateNames.constants';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { CmsReplacementService } from 'cms/services';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';

describe('component: homePage-CallToActionDesktop', () => {

    let fixture: ComponentFixture<CallToActionDesktopComponent>;
    let component: CallToActionDesktopComponent;
    let webStorage;
    let genericRepo;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let authService;
    let stateService;
    let violationsDataService;
    let webStorageConst: WebStorageConst;
    let missedATollApi;
    let missedATollService;
    let dialogService;
    let environmentConfig;
    let cmsReplacementService: jasmine.SpyObj<CmsReplacementService>;


    beforeEach(async () => {
        webStorage = jasmine.createSpyObj('webStorage', ['setKeyValue']);
        genericRepo = {
            dataFactory: {
                getStates: jasmine.createSpy('getStates'),
            }
        };
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['displayErrorsFromResponse', 'displayAlertsFromResponse', 'isErrorFree']);
        authService = jasmine.createSpyObj('authService', ['isAuthenticated']);
        stateService = jasmine.createSpyObj('stateService', ['go']);
        violationsDataService = jasmine.createSpyObj('violationsDataService', ['findViolations','findViolationAcct']);
        missedATollApi = jasmine.createSpyObj('missedATollApi', ['checkMatEligibility']);
        missedATollService = jasmine.createSpyObj('missedATollService', ['processSuccessSearch']);
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered']);
        cmsReplacementService = jasmine.createSpyObj('cmsReplacementService', ['transformTemplate']);
        webStorageConst = new WebStorageConst();
        environmentConfig = {
            isMergeMATandVioOn: false
        };
        await TestBed
            .configureTestingModule({
                declarations: [
                    CallToActionDesktopComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: WebStorageService, useFactory: () => webStorage },
                    { provide: GenericRepoService, useFactory: () => genericRepo },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: AuthenticationService, useFactory: () => authService },
                    { provide: StateService, useFactory: () => stateService },
                    { provide: ViolationsDataService, useFactory: () => violationsDataService },
                    { provide: WebStorageConst, useFactory: () => webStorageConst },
                    { provide: WebApiService, useFactory: () => missedATollApi },
                    { provide: MissedATollService, useFactory: () => missedATollService },
                    { provide: StateNames, useFactory: () => homeStates },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                    { provide: CmsReplacementService, useFactory: () => cmsReplacementService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(CallToActionDesktopComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsData = {
            mainPanelHeight: '',
            rightPanelHeight: 0,
            Children: [{
                Title: '',
                TitleDescription: '',
                ButtonURL: '',
                ButtonText: '',
                hideAtLogIn: '',
                hideAtLogOut: '',
                ContentTitle: '',
                Content: '',
                SectionConfig: ''
            }]
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

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        it('should call with countries API call success', async () => {
            genericRepo.dataFactory.getStates.and.returnValue(Promise.resolve({
                errors: [],
                states: [
                    {
                        stateCode: 'TX'
                    }
                ]
            }));
            responseErrorService.displayErrorsFromResponse.and.returnValue(Promise.resolve([]));
            authService.isAuthenticated.and.returnValue(false);
            spyOn(component as any, 'updateDisplayList').and.returnValue({});
            component.ngOnInit()
                .then(res => {
                    expect(genericRepo.dataFactory.getStates).toHaveBeenCalledTimes(1);
                    expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledTimes(0);
                })
                .catch(err => fail(err));
        });

        it('should call with countries API call FAIL', async () => {
            genericRepo.dataFactory.getStates.and.returnValue(Promise.resolve({
                errors: {
                    length: 2
                },
                states: []
            }));
            responseErrorService.displayErrorsFromResponse.and.returnValue(Promise.resolve([]));
            authService.isAuthenticated.and.returnValue(false);
            spyOn(component as any, 'updateDisplayList').and.returnValue({});
            component.ngOnInit()
                .then(res => {
                    expect(genericRepo.dataFactory.getStates).toHaveBeenCalledTimes(1);
                    expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledTimes(1);
                })
                .catch(err => fail(err));
        });

        describe('check updateList', () => {
            beforeEach(() => {
                //data
                component.cmsData = {
                    mainPanelHeight: '',
                    rightPanelHeight: 0,
                    Children: [
                        {
                            Title: 'SignUP',
                            TitleDescription: '',
                            ButtonURL: '',
                            ButtonText: '',
                            hideAtLogIn: '1',
                            hideAtLogOut: '',
                            ContentTitle: '',
                            Content: '',
                            SectionConfig: ''
                        },
                        {
                            Title: 'AccountDashboard',
                            TitleDescription: '',
                            ButtonURL: '',
                            ButtonText: '',
                            hideAtLogIn: '',
                            hideAtLogOut: '1',
                            ContentTitle: '',
                            Content: '',
                            SectionConfig: ''
                        },
                        {
                            Title: 'Violations',
                            TitleDescription: '',
                            ButtonURL: '',
                            ButtonText: '',
                            hideAtLogIn: '',
                            hideAtLogOut: '',
                            ContentTitle: '',
                            Content: '',
                            SectionConfig: ''
                        },
                        {
                            Title: 'MissedAToll',
                            TitleDescription: '',
                            ButtonURL: '',
                            ButtonText: '',
                            hideAtLogIn: '',
                            hideAtLogOut: '',
                            ContentTitle: '',
                            Content: '',
                            SectionConfig: ''
                        }
                    ]
                };
            });

            it('should update LOGOUT STAGES ONLY', async () => {
                genericRepo.dataFactory.getStates.and.returnValue(Promise.resolve({
                    errors: [],
                    states: [
                        {
                            stateCode: 'TX'
                        }
                    ]
                }));
                responseErrorService.displayErrorsFromResponse.and.returnValue(Promise.resolve([]));
                authService.isAuthenticated.and.returnValue(false);

                component.displayList = [{
                    Title: 'SignUP',
                    TitleDescription: '',
                    ButtonURL: '',
                    ButtonText: '',
                    hideAtLogIn: '1',
                    hideAtLogOut: '',
                    ContentTitle: '',
                    Content: '',
                    SectionConfig: ''
                }];

                component.ngOnInit()
                    .then(res => {
                        expect(component.displayList.length).toEqual(3);
                        expect(component.displayList[0].Title).toEqual('SignUP');
                        expect(component.displayList[1].Title).toEqual('Violations');
                        expect(component.displayList[2].Title).toEqual('MissedAToll');


                    })
                    .catch(err => fail(err));
            });

            it('should update LOGIN STAGES ONLY', async () => {
                genericRepo.dataFactory.getStates.and.returnValue(Promise.resolve({
                    errors: [],
                    states: [
                        {
                            stateCode: 'TX'
                        }
                    ]
                }));
                responseErrorService.displayErrorsFromResponse.and.returnValue(Promise.resolve([]));
                authService.isAuthenticated.and.returnValue(true);

                component.ngOnInit()
                    .then(res => {
                        expect(component.displayList.length).toEqual(3);
                        expect(component.displayList[0].Title).toEqual('AccountDashboard');
                        expect(component.displayList[1].Title).toEqual('Violations');
                        expect(component.displayList[2].Title).toEqual('MissedAToll');


                    })
                    .catch(err => fail(err));
            });
        });
    });

    describe('updateIndex', () => {

        it('should update index if previous index isnt the same', async () => {
            component.currentSelectedIndex = 0;

            component.updateIndex(1);
            expect(component.previousSelectedIndex).toEqual(0);
            expect(component.currentSelectedIndex).toEqual(1);
        });

        it('should NOT update index if update index is the same as current index', async () => {
            component.currentSelectedIndex = 0;
            component.previousSelectedIndex = 2;
            component.updateIndex(0);
            expect(component.previousSelectedIndex).toEqual(2);
            expect(component.currentSelectedIndex).toEqual(0);
        });
    });

    describe('goToPage', () => {

        it('should go to signUP', async () => {
            stateService.go.and.returnValue({});
            component.goToPage(CallToActionConfig.SignUp);

            expect(stateService.go).toHaveBeenCalledTimes(1);
            expect(stateService.go).toHaveBeenCalledWith(homeStates.SignUp);
        });

        it('should go to Accound Dashboard', async () => {
            stateService.go.and.returnValue({});
            component.goToPage(CallToActionConfig.AccountDashboard);

            expect(stateService.go).toHaveBeenCalledTimes(1);
            expect(stateService.go).toHaveBeenCalledWith(AccountOverviewStates.Frame);
        });
        it('should go to Activate EZ Tag', async () => {
            stateService.go.and.returnValue({});
            component.goToPage(CallToActionConfig.ActivateEzTag);

            expect(stateService.go).toHaveBeenCalledTimes(1);
            expect(stateService.go).toHaveBeenCalledWith(stateNames.activateEzTag);
        });
    });

    describe('findViolations', () => {
        it('should call violation service', async () => {
            component.violations = {
                selectedState: {
                    stateCode: 'TX'
                },
                invoiceNumber: '',
                licensePlateNumber: ''
            };
            const request = {
                licenseState: component.violations.selectedState.stateCode,
                invoiceNumber: component.violations.invoiceNumber,
                licensePlate: component.violations.licensePlateNumber
            };

            (violationsDataService.findViolations as jasmine.Spy).and.returnValue(Promise.resolve());
            component.findViolations()
                .then(res => {
                    expect(violationsDataService.findViolations).toHaveBeenCalledTimes(1);
                    expect(violationsDataService.findViolations).toHaveBeenCalledWith(request);
                    expect(violationsDataService.findViolationAcct).toHaveBeenCalledTimes(0);
                })
                .catch(err => fail(err));;
        });
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

            environmentConfig.isMergeMATandVioOn = true;

            cmsReplacementService.transformTemplate.and.returnValue('CMS message replaced');



            //Act
            await component.findViolations();
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
            expect(violationsDataService.findViolations).toHaveBeenCalledTimes(0);
            expect(violationsDataService.findViolationAcct).toHaveBeenCalledWith({
                licenseState: component.violations.selectedState.stateCode,
                invoiceNumber: component.violations.invoiceNumber,
                licensePlate: component.violations.licensePlateNumber
            }, paymentPlansModal, violationLoginModal, {
                to: Frp3States.Grid, params: {},
                options: { custom: { isExplicitlyAllowedTransition: true } }
            });
        });
    });

    describe('findMissedAToll', () => {
        beforeEach(() => {
            component.violations = {
                selectedState: {
                    stateCode: 'TX'
                },
                invoiceNumber: '',
                licensePlateNumber: ''
            };
        });
        it('should pass with no error with user eligible', async () => {
            (missedATollApi.checkMatEligibility as jasmine.Spy).and.returnValue(Promise.resolve({
                isUserEligible: true
            }));
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
            (webStorage.setKeyValue as jasmine.Spy).and.returnValue({});
            (missedATollService.processSuccessSearch as jasmine.Spy).and.returnValue(Promise.resolve({}));

            component.findMissedAToll()
                .then(res => {
                    expect(missedATollApi.checkMatEligibility).toHaveBeenCalledTimes(1);
                    expect(webStorage.setKeyValue).toHaveBeenCalledTimes(1);
                    expect(missedATollService.processSuccessSearch).toHaveBeenCalledTimes(1);
                })
                .catch(err => fail(err));
        });

        it('should pass with no error with user NOT eligible', async () => {
            (missedATollApi.checkMatEligibility as jasmine.Spy).and.returnValue(Promise.resolve({
                isUserEligible: false
            }));
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
            (webStorage.setKeyValue as jasmine.Spy).and.returnValue({});
            (missedATollService.processSuccessSearch as jasmine.Spy).and.returnValue(Promise.resolve({}));

            component.findMissedAToll()
                .then(res => {
                    expect(missedATollApi.checkMatEligibility).toHaveBeenCalledTimes(1);
                    expect(webStorage.setKeyValue).toHaveBeenCalledTimes(1);
                    expect(missedATollService.processSuccessSearch).toHaveBeenCalledTimes(0);
                })
                .catch(err => fail(err));
        });

        it('should fail and display error', async () => {
            (missedATollApi.checkMatEligibility as jasmine.Spy).and.returnValue(Promise.resolve({}));
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(false);
            (responseErrorService.displayAlertsFromResponse as jasmine.Spy).and.returnValue({});
            (webStorage.setKeyValue as jasmine.Spy).and.returnValue({});
            (missedATollService.processSuccessSearch as jasmine.Spy).and.returnValue(Promise.resolve({}));

            component.findMissedAToll()
                .then(res => {
                    expect(missedATollApi.checkMatEligibility).toHaveBeenCalledTimes(1);
                    expect(webStorage.setKeyValue).toHaveBeenCalledTimes(0);
                    expect(missedATollService.processSuccessSearch).toHaveBeenCalledTimes(0);
                    expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);
                })
                .catch(err => fail(err));
        });
    });
});
