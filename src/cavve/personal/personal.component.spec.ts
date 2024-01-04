import { EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { StateService } from '@uirouter/angular';
import { StateConfig } from 'common/interfaces';
import { IMailingInfo, IVehicleInfo } from 'common/models';
import { DialogService, GenericRepoService, ResponseErrorService, WebStorageService } from 'common/services';
import {
    EditVehicleInjectionValues
} from 'common/ui/modals/editVehicleModal/editVehicleModal.component';
import {
    NewBillingAddressInjectionValues
} from 'common/ui/modals/newBillingAddressModal/newBillingAddressModal.component';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { FrameComponent } from '../frame/frame.component';
import { PersonalComponent } from './personal.component';
import { WebStorageConst } from 'constants/module';


describe('CAVVE PersonalComponent', () => {

    let fixture: ComponentFixture<PersonalComponent>;
    let component: PersonalComponent;
    let form: NgForm;

    let parent: FrameComponent;
    let stateService: StateService;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let dialogueService: DialogService;
    let genericRepo: any;

    let mockViolatorAccountObj;
    let webStorage;
    let webStorageConst: WebStorageConst;

    beforeEach(async () => {
        parent = {} as FrameComponent;
        parent.setFrameTitle = jasmine.createSpy('setFrameTitle');
        parent.getPlateContainer = jasmine.createSpy('getPlateContainer');

        //StateService Mock
        stateService = jasmine.createSpyObj('state', ['go']);

        //ResponseErrorService Mock
        responseErrorService =
            jasmine.createSpyObj('responseErrorService', ['displayAlertsFromResponse', 'isErrorFree']);
        responseErrorService.isErrorFree.and.returnValue(true);

        dialogueService = jasmine.createSpyObj('dialogueService', ['openSliderCentered', 'openGenericModal']);

        genericRepo = {
            dataFactory: {
                GetViolatorAccntInfo: jasmine.createSpy('GetViolatorAccntInfo'),
                SetViolatorAccountInfo: jasmine.createSpy('SetViolatorAccountInfo'),
                getSecurityQuestions: jasmine.createSpy('getSecurityQuestions'),
                getStates: jasmine.createSpy('getStates'),
                getCountries: jasmine.createSpy('getCountries'),
            }
        };

        //Create mock objects
        mockViolatorAccountObj = {
            accountId: 999999999,
            address1: '123 test st',
            address2: '999 test ln',
            byEmail: false,
            byMail: false,
            city: 'test city',
            country: 'test country',
            driverLicenseNumber: '12341234',
            driverLicenseState: 'TX',
            emailAddress: 'test@test.com',
            firstName: 'John',
            lastName: 'Smith',
            internationalAddress: false,
            licPlate: 'TEST1234',
            licState: 'TX',
            motorcycle: false,
            nickname: 'test nickname',
            phoneNum: '1231231234',
            plus4: '1234',
            state: 'TX',
            securityQuestionID: 9,
            temporaryLicPlate: false,
            username: 'raul0013',
            vehicleClassCode: '2',
            vehicleClassDesc: '2-Axle',
            vehicleColor: 'Red',
            vehicleMake: 'TOYOTA',
            vehicleModel: 'Camry',
            vehicleYear: '2000',
            zip: '12345',
            addressId: 999999999,
            personId: 999999999
        };

        webStorage = jasmine.createSpyObj('webStorage', ['setKeyValue', 'getValue']);
        webStorageConst = new WebStorageConst();

        await TestBed
            .configureTestingModule({
                declarations: [PersonalComponent],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule, PipesModule],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: StateService, useFactory: () => stateService },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: DialogService, useFactory: () => dialogueService },
                    { provide: GenericRepoService, useValue: genericRepo },
                    { provide: WebStorageService, useFactory: () => webStorage },
                    { provide: WebStorageConst, useValue: webStorageConst }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(PersonalComponent);
        component = fixture.debugElement.componentInstance;

        parent.stepNum = 0;
        parent.cmsBaseContent = {
            Title: 'Base Title',
            Step1: '',
            Step2: '',
            Step3: '',
            Step4: '',
            CancelQuestion: '',
            CancelReject: '',
            CancelResolve: ''
        };

        parent.cmsBaseContent.Title = 'Previous Page';

        component.personalPageInfo = {
            pageTitle: 'Account Information Page',
            mailingAddressHeader: 'test personal info header',
            licenseHeader: 'test license header',
            securityInfoHeader: 'test login security info header',
            vehicleInfoTitle: 'test vehicle info title',
            vehicleToolTipEditButton: 'vehicle tool tip edit button',
            vehicleToolTipText: 'test tool tip text',
            verifyInfoCheckboxDescription: 'test checkbox description',
            verifyInfoHelp: 'test checkbox help',
            phoneAlertsOptInDesc: 'test opt in description'
        };

        component.cancelMessageContent = {
            cancelQuestion: 'Title',
            cancelResolve: 'Resolve',
            cancelReject: 'Reject'

        } as any;
        form = fixture.debugElement.query(By.directive(NgForm)).references.Form as NgForm;

        //Define Spy Objects
        //Generic Repo
        (webStorage.getValue as jasmine.Spy).withArgs(webStorageConst.cavveConversionData).and.returnValue(null);
        (genericRepo.dataFactory.GetViolatorAccntInfo as jasmine.Spy).and.returnValue(Promise.resolve({ accountInfo: mockViolatorAccountObj }));
        (genericRepo.dataFactory.SetViolatorAccountInfo as jasmine.Spy).and.returnValue(Promise.resolve({}));
        (genericRepo.dataFactory.getSecurityQuestions as jasmine.Spy).and.returnValue(Promise.resolve({
            securityQuestions: [{
                securityQuestion: 'test question',
                securityQuestionID: 9
            }]
        }));
        (genericRepo.dataFactory.getStates as jasmine.Spy).and.returnValue(Promise.resolve({ states: ['test', 'state'] }));
        (genericRepo.dataFactory.getCountries as jasmine.Spy).
            and.returnValue(Promise.resolve({ countries: ['test', 'country'] }));
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    it('should set initial variables', async () => {

        //Assemble

        //Act
        await component.ngOnInit();

        //Assert
        expect(parent.getPlateContainer).toHaveBeenCalled();
        expect(parent.setFrameTitle).toHaveBeenCalled();
        expect(parent.setFrameTitle).toHaveBeenCalledWith('Account Information Page');

        expect(parent.stepNum).toBe(1);

        expect((component as any).loginInfo).toEqual({
            password: '',
            securityAnswer: ''
        });
        expect((component as any).isShowPassword).toEqual(false);
        expect((component as any).isShowSecurityAnswer).toEqual(false);
        expect(webStorage.getValue).toHaveBeenCalledWith(webStorageConst.cavveConversionData);
        expect(genericRepo.dataFactory.GetViolatorAccntInfo).toHaveBeenCalledTimes(1);
        expect(genericRepo.dataFactory.getSecurityQuestions).toHaveBeenCalledTimes(1);
        expect(genericRepo.dataFactory.getStates).toHaveBeenCalledTimes(1);
        expect(genericRepo.dataFactory.getCountries).toHaveBeenCalledTimes(1);
    });

    describe('ngOnInit()', () => {
        it('should call setViolatorAccountInfo with res.accountInfo.securityQuestionID as 0', async () => {
            //Assemble
            (genericRepo.dataFactory.GetViolatorAccntInfo as jasmine.Spy).
                and.returnValue(Promise.resolve({
                    accountInfo: {
                        securityQuestionID: 0,
                        driverLicenseState: ''
                    }
                }));
            spyOn(component as any, 'setViolatorAccountInfo').and.callThrough();

            //Act
            await component.ngOnInit();

            //Assert
            expect(component['setViolatorAccountInfo']).toHaveBeenCalledTimes(1);
        });

        it('should not call genericRepo.dataFactory.GetViolatorAccntInfo or setViolatorAccountInfo', async () => {
            //Assemble
            (webStorage.getValue as jasmine.Spy).withArgs(webStorageConst.cavveConversionData).and.returnValue(webStorageConst.cavveConversionData);
            spyOn(component as any, 'setViolatorAccountInfo').and.callThrough();

            //Act
            await component.ngOnInit();

            //Assert
            expect(webStorage.getValue).toHaveBeenCalledWith(webStorageConst.cavveConversionData);
            expect(genericRepo.dataFactory.GetViolatorAccntInfo).toHaveBeenCalledTimes(0);
            expect(component['setViolatorAccountInfo']).toHaveBeenCalledTimes(0);
        });
    });

    describe('ngOnDestroy', () => {
        it('should set cavveConversionData', async () => {
            //Assemble

            //Act
            await component.ngOnDestroy();

            //Assert
            expect(webStorage.setKeyValue as jasmine.Spy).toHaveBeenCalledTimes(1);
        });
    });


    //Part of Task 53675
    describe('onLicensePlateEdit()', () => {
        it('should call modalService.showSlidingModal', async () => {
            //Assemble
            (component as any).accountInfo = mockViolatorAccountObj;

            const event = new EventEmitter<EditVehicleInjectionValues>();

            (dialogueService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());

            //Act
            const promise = component.openLicensePlateModal();

            event.emit({
                vehicleInfo: {} as IVehicleInfo
            } as EditVehicleInjectionValues);
            event.complete();
            await promise;

            //Assert
            expect(dialogueService.openSliderCentered).toHaveBeenCalledTimes(1);
        });

        it('should set new variables in accountInfo when promise is resolved', async () => {
            //Assemble
            (component as any).accountInfo = mockViolatorAccountObj;
            spyOn(component, 'setVehicleInfo').and.callThrough();
            spyOn(component, 'isNotMissingVehicleSliderInfo').and.callThrough();
            const mockVehicleInfoReturn: IVehicleInfo = {
                licPlate: 'NEW1234',
                licState: 'VT',
                motorcycle: true,
                nickname: 'new nickname',
                temporaryLicPlate: false,
                vehicleClassCode: '2',
                vehicleClassDesc: '2-Axle',
                vehicleColor: 'Blue',
                vehicleMake: 'Honda',
                vehicleModel: 'Accord',
                vehicleYear: '1980',
                isMotorcycleDisabled: undefined
            };

            const event = new EventEmitter<EditVehicleInjectionValues>();

            (dialogueService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());

            //Act
            const promise = component.openLicensePlateModal();

            event.emit({
                vehicleInfo: mockVehicleInfoReturn
            } as EditVehicleInjectionValues);
            event.complete();
            await promise;

            //Assert            
            expect((component as any).setVehicleInfo).toHaveBeenCalledTimes(1);
            expect((component as any).getVehicleInfo()).toEqual(mockVehicleInfoReturn);
            expect(component.isNotMissingVehicleSliderInfo).toHaveBeenCalledTimes(1);
        });
    });

    //Part of Task 53673
    describe('onMailingAddressEdit()', () => {
        it('should call modalService.showSlidingModal', async () => {
            //Assemble
            (component as any).accountInfo = mockViolatorAccountObj;

            const event = new EventEmitter<NewBillingAddressInjectionValues>();

            (dialogueService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());

            //Act
            const promise = component.openMailingAddressModal();

            event.emit({
                vehicleInfo: null,
                countryList: null,
                mailingInfo: {} as IMailingInfo,
                stateList: null,
                addressTitle: null,
                isShowPersonalInfo: null
            } as NewBillingAddressInjectionValues);
            event.complete();
            await promise;

            //Assert
            expect(dialogueService.openSliderCentered).toHaveBeenCalledTimes(1);
        });

        it('should set new variables in accountInfo when promise is resolved', async () => {
            //Assemble
            (component as any).accountInfo = mockViolatorAccountObj;
            spyOn(component, 'setMailingAddressInfo').and.callThrough();
            spyOn(component, 'isNotMissingMailSliderInfo').and.callThrough();
            const mockMailInfoReturn: IMailingInfo = {
                address1: 'new test st.',
                address2: 'new test2 st.',
                internationalAddress: false,
                city: 'New York City',
                state: 'New York',
                country: 'USA',
                firstName: 'Jane',
                lastName: 'Doe',
                zip: '55555',
                plus4: '4444'
            };

            const event = new EventEmitter<NewBillingAddressInjectionValues>();

            (dialogueService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());

            //Act
            const promise = component.openMailingAddressModal();

            event.emit({
                vehicleInfo: null,
                countryList: null,
                mailingInfo: mockMailInfoReturn,
                stateList: null,
                addressTitle: null,
                isShowPersonalInfo: null
            } as NewBillingAddressInjectionValues);
            event.complete();
            await promise;

            //Assert
            expect((component as any).setMailingAddressInfo).toHaveBeenCalledTimes(1);
            expect((component as any).getMailingAddressInfo()).toEqual(mockMailInfoReturn);
            expect(component.isNotMissingMailSliderInfo).toHaveBeenCalledTimes(1);

        });
    });

    //Part of Task 53673
    describe('isNotMissingMailSliderInfo', () => {
        [
            {
                testCase: 'everything defined for internationalAddress',
                expectedReturn: true,
                acctInfoObj: {
                    firstName: 'defined', lastName: 'defined',
                    address1: 'defined', internationalAddress: true, city: '', state: '', zip: '', country: 'defined'
                }
            },
            {
                testCase: 'everything defined for !internationalAddress',
                expectedReturn: true,
                acctInfoObj: {
                    firstName: 'defined', lastName: 'defined', address1: 'defined',
                    internationalAddress: false, city: 'defined', state: 'defined', zip: 'defined', country: ''
                }
            },
            {
                testCase: 'firstName missing',
                expectedReturn: false,
                acctInfoObj: {
                    firstName: '', lastName: 'defined', address1: 'defined',
                    internationalAddress: true, city: '', state: '', zip: '', country: 'defined'
                }
            },
            {
                testCase: 'lastName missing',
                expectedReturn: false,
                acctInfoObj: {
                    firstName: 'defined', lastName: '', address1: 'defined',
                    internationalAddress: true, city: '', state: '', zip: '', country: 'defined'
                }
            },
            {
                testCase: 'address1 missing',
                expectedReturn: false,
                acctInfoObj: {
                    firstName: 'defined', lastName: 'defined', address1: '',
                    internationalAddress: true, city: '', state: '', zip: '', country: 'defined'
                }
            },
            {
                testCase: 'country missing for internationalAddress',
                expectedReturn: false,
                acctInfoObj: {
                    firstName: 'defined', lastName: 'defined', address1: 'defined',
                    internationalAddress: true, city: '', state: '', zip: '', country: ''
                }
            },
            {
                testCase: 'city missing for !internationalAddress',
                expectedReturn: false,
                acctInfoObj: {
                    firstName: 'defined', lastName: 'defined', address1: 'defined',
                    internationalAddress: false, city: '', state: 'defined', zip: 'defined', country: ''
                }
            },
            {
                testCase: 'state missing for !internationalAddress',
                expectedReturn: false,
                acctInfoObj: {
                    firstName: 'defined', lastName: 'defined', address1: 'defined',
                    internationalAddress: false, city: 'defined', state: '', zip: 'defined', country: ''
                }
            },
            {
                testCase: 'zip missing for !internationalAddress',
                expectedReturn: false,
                acctInfoObj: {
                    firstName: 'defined', lastName: 'defined', address1: 'defined',
                    internationalAddress: false, city: 'defined', state: 'defined', zip: '', country: ''
                }
            }
        ].forEach(({ testCase, expectedReturn, acctInfoObj }) => {
            it(`should return ${expectedReturn} if ${testCase}`, () => {
                //Assemble
                (component as any).accountInfo = { ...acctInfoObj };

                //Act
                const res = component.isNotMissingMailSliderInfo();
                //Assert
                expect(res).toEqual(expectedReturn);
                expect((component as any).isMailingInfoIncomplete).toEqual(!expectedReturn);
            });

        });
    });

    //Part of Task 53675
    describe('isNotMissingVehSliiderInfo', () => {
        [
            {
                testCase: 'everything is defined',
                expectedReturn: true,
                acctInfoObj: {
                    vehicleClassCode: 'defined', vehicleYear: 'defined',
                    vehicleMake: 'defined', vehicleModel: 'defined', vehicleColor: 'defined'
                }
            },
            {
                testCase: 'vehicleClassCode is not defined',
                expectedReturn: false,
                acctInfoObj: {
                    vehicleClassCode: '', vehicleYear: 'defined', vehicleMake:
                        'defined', vehicleModel: 'defined', vehicleColor: 'defined'
                }
            },
            {
                testCase: 'vehicleYear is not defined',
                expectedReturn: false,
                acctInfoObj: {
                    vehicleClassCode: 'defined', vehicleYear: '', vehicleMake:
                        'defined', vehicleModel: 'defined', vehicleColor: 'defined'
                }
            },
            {
                testCase: 'vehicleMake is not defined',
                expectedReturn: false,
                acctInfoObj: {
                    vehicleClassCode: 'defined', vehicleYear: 'defined',
                    vehicleMake: '', vehicleModel: 'defined', vehicleColor: 'defined'
                }
            },
            {
                testCase: 'vehicleModel is not defined',
                expectedReturn: false,
                acctInfoObj: {
                    vehicleClassCode: 'defined', vehicleYear: 'defined',
                    vehicleMake: 'defined', vehicleModel: '', vehicleColor: 'defined'
                }
            },
            {
                testCase: 'vehicleColor is not defined',
                expectedReturn: false,
                acctInfoObj: {
                    vehicleClassCode: 'defined', vehicleYear: 'defined',
                    vehicleMake: 'defined', vehicleModel: 'defined', vehicleColor: ''
                }
            }

        ].forEach(({ testCase, expectedReturn, acctInfoObj }) => {
            it(`should return ${expectedReturn} if ${testCase}`, () => {
                //Assemble
                (component as any).accountInfo = { ...acctInfoObj };

                //Act
                const res = component.isNotMissingVehicleSliderInfo();
                //Assert
                expect(res).toEqual(expectedReturn);
                expect((component as any).isVehicleInfoIncomplete).toEqual(!expectedReturn);
            });

        });
    });

    describe('onSubmit()', () => {
        it('should call SetViolatorAccountInfo and stateService.go', () => {
            //Assemble
            (component as any).accountInfo = { firstName: 'testValue' };
            (component as any).loginInfo = { password: 'pass', securityAnswer: 'secAns' };
            spyOn(component, 'isNotMissingMailSliderInfo').and.returnValue(true);
            spyOn(component, 'isNotMissingVehicleSliderInfo').and.returnValue(true);

            const nextState: StateConfig = {
                name: 'test'
            };

            //Act
            const prom = component.submit(nextState);

            //Assert
            expect(component.isNotMissingMailSliderInfo).toHaveBeenCalledTimes(1);
            expect(component.isNotMissingVehicleSliderInfo).toHaveBeenCalledTimes(1);
            expect(genericRepo.dataFactory.SetViolatorAccountInfo).toHaveBeenCalledTimes(1);
            expect(genericRepo.dataFactory.SetViolatorAccountInfo).toHaveBeenCalledWith(
                {
                    accountInfo: { firstName: 'testValue', byMail: false, byEmail: true },
                    password: 'pass', securityAnswer: 'secAns'
                });
            return prom.then(() => {
                expect(stateService.go).toHaveBeenCalledTimes(1);
            }).catch((e) => {
                fail(e);
            });
        });

        [
            {
                testCase: 'isNotMissingMailSliderInfo returns false',
                notMissingMailSlider: false, notMissingVehicleSlider: true
            },
            {
                testCase: 'isNotMissingVehicleSliderInfo returns false',
                notMissingMailSlider: true, notMissingVehicleSlider: false
            }
        ].forEach(({ testCase, notMissingMailSlider, notMissingVehicleSlider }) => {
            it(`should not call SetViolatorAccountInfo if ${testCase}`, () => {
                //Assemble
                spyOn(component, 'isNotMissingMailSliderInfo').and.returnValue(notMissingMailSlider);
                spyOn(component, 'isNotMissingVehicleSliderInfo').and.returnValue(notMissingVehicleSlider);

                const nextState: StateConfig = {
                    name: 'test'
                };

                //Act
                component.submit(nextState);

                //Assert
                expect(genericRepo.dataFactory.SetViolatorAccountInfo).toHaveBeenCalledTimes(0);
            });
        });

        it('should not call stateService.go if response returns with errors', () => {
            //Assemble
            (component as any).accountInfo = { firstName: 'testValue' };
            (component as any).loginInfo = { password: 'pass', securityAnswer: 'secAns' };
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(false);
            spyOn(component, 'isNotMissingMailSliderInfo').and.returnValue(true);
            spyOn(component, 'isNotMissingVehicleSliderInfo').and.returnValue(true);

            const nextState: StateConfig = {
                name: 'test'
            };

            //Act
            const prom = component.submit(nextState);

            //Assert
            expect(genericRepo.dataFactory.SetViolatorAccountInfo).toHaveBeenCalledTimes(1);
            return prom.then(() => {
                expect(stateService.go).not.toHaveBeenCalled();
            }).catch((e) => {
                fail(e);
            });
        });

    });

    describe('previous', () => {
        it('should go to previous state', async () => {
            //Assemble
            const prevState: StateConfig = {
                name: 'prev'
            };

            //Act
            await component.previous(prevState);

            //Assert
            expect(stateService.go).toHaveBeenCalledTimes(1);
            expect(stateService.go).toHaveBeenCalledWith(prevState);

        });
    });

    describe('tryCancel', () => {
        it('calls stateService.go', async () => {
            (dialogueService.openGenericModal as jasmine.Spy).and.returnValue(null);
            const cancelState: StateConfig = {
                name: 'cancelState'
            };
            await component.tryCancel(cancelState);
            expect(stateService.go).toHaveBeenCalled();
        });

        it('doesnt call stateService.go', async () => {
            (dialogueService.openGenericModal as jasmine.Spy).and.returnValue(true);
            const cancelState: StateConfig = {
                name: 'cancelState'
            };
            await component.tryCancel(cancelState);
            expect(stateService.go).not.toHaveBeenCalled();
        });
    });
});
