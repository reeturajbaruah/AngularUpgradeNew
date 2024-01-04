import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { stateNames as accountDashboardStates } from 'accountDashboard/constants';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { WindowRef } from 'common/providers';
import { CurrentUserService, GenericRepoService, ResponseErrorService } from 'common/services';
import { WebStorageConst } from 'constants/module';
import { } from 'jasmine';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';
import { FrameComponent } from '../frame/frame.component';
import { ReceiptComponent } from './receipt.component';


describe('CAVVE ReceiptComponent', () => {

    let fixture: ComponentFixture<ReceiptComponent>;
    let component: ReceiptComponent;
    let webStorageConst: WebStorageConst;
    let webStorage: any;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let genericRepo: any;
    let parent: FrameComponent;
    let authService: jasmine.SpyObj<AuthenticationService>;
    let uiRouterGlobals: UIRouterGlobals;
    let window: Window;
    let state: StateService;
    let dateNowSpy: jasmine.Spy;
    let currUserService: jasmine.SpyObj<CurrentUserService>;

    beforeEach(async () => {
        parent = {} as FrameComponent;
        parent.setFrameTitle = jasmine.createSpy('setFrameTitle');

        //StateService Mock
        state = jasmine.createSpyObj('state', ['go']);

        responseErrorService =
            jasmine.createSpyObj('responseErrorService', ['displayAlertsFromResponse', 'isErrorFree']);
        responseErrorService.isErrorFree.and.returnValue(true);
        webStorageConst = new WebStorageConst();
        webStorage = jasmine.createSpyObj('webStorage', ['getValue']);
        genericRepo = {
            dataFactory: {
                oneTimePaymentGetBillingInfo: jasmine.createSpy('oneTimePaymentGetBillingInfo'),
                getEZTagInfo: jasmine.createSpy('getEZTagInfo')
            }
        };

        window = jasmine.createSpyObj('window', ['print']);
        uiRouterGlobals = {
            params: {
                billingInfo: {},
                vehicleInfo: {}
            }
        } as any;

        authService = jasmine.createSpyObj('authService', ['profile']);
        currUserService = jasmine.createSpyObj('CurrentUserService', ['getCurrentUser']);


        await TestBed
            .configureTestingModule({
                declarations: [ReceiptComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: WebStorageConst, useValue: webStorageConst },
                    { provide: WebStorageService, useFactory: () => webStorage },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: GenericRepoService, useFactory: () => genericRepo },
                    { provide: AuthenticationService, useFactory: () => authService },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: WindowRef, useFactory: () => window },
                    { provide: StateService, useFactory: () => state },
                    { provide: CurrentUserService, useFactory: () => currUserService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(ReceiptComponent);
        component = fixture.debugElement.componentInstance;
    });

    beforeEach(() => {

        dateNowSpy = spyOnProperty(component as any, 'dateNow', 'get').and.returnValue('fake date' as any);
        (authService.profile as jasmine.Spy).and.callFake(() => { });
        component.cmsContent = {
            Title: 'fake title',
            billingInfoHeader: 'fake bililng info header',
            ezTagRequestedHeader: 'fake ez tag requested header'
        };

        const paramsForWebStorageGetValueFnCall = {
            violationHeaders:
                [
                    {
                        agencyCode: 'h',
                        dueDate: '10/10/2021'
                    },
                    {
                        agencyCode: 'h',
                        dueDate: '10/10/2020'
                    }
                ],

            uninvoiced: null,
            createAccountFromViolationsTotals: {
                totalViolationsDue: null,
                serviceFee: null,
                createAccountPlateTotal: null
            },
            remainingPlateTotalBeforeDiscount: null,
            serviceFee: null

        };

        (webStorage.getValue as jasmine.Spy).and.callFake((myParam) => paramsForWebStorageGetValueFnCall[myParam]);

    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });
    it('can create a component', () => {
        //assert
        expect(component).toBeDefined();
    });
    describe('ngOnInit', () => {
        beforeEach(() => {
            spyOn<any>(component, 'setUpPage').and.callFake(() => { });

        });


        it('should call webStorage.getValue(3)', () => {
            //act
            component['ngOnInit']();

            //assert
            expect(webStorage.getValue).toHaveBeenCalledTimes(3);
        });


        it('should call webStorage.getValue() 3 times', () => {
            //act
            component['ngOnInit']();

            //assert
            expect(webStorage.getValue).toHaveBeenCalledTimes(3);
        });

        it('should call setUpPage', () => {
            //act
            component['ngOnInit']();

            //assert
            expect(component['setUpPage']).toHaveBeenCalledTimes(1);
        });

    });
    describe('print', () => {
        it('should call window.print() 1 time', () => {
            //Assemble
            (window.print as jasmine.Spy).and.callFake(() => { });

            //Act
            component.print();

            //Assert
            expect(window.print).toHaveBeenCalledTimes(1);
        });
    });
    describe('setUpPage', () => {
        beforeEach(() => {
            spyOn<any>(component, 'populateCMSContent').and.callFake(() => { });
            spyOn<any>(component, 'setAccountData').and.callFake(() => { });

            (authService.profile as jasmine.Spy).and.callFake(() => { });

            component.createAccountFromViolationsTotals = {
                totalViolationsDue: 111,
                serviceFee: 222,
                createAccountPlateTotal: 333
            };
        });
        it('should set parent.stepNum to 4', async () => {
            //Act
            await component['setUpPage']();

            //Assert
            expect(parent.stepNum).toBe(4);
        });
        it('should call populateCMSContent', async () => {
            //Act
            await component['setUpPage']();

            //Assert
            expect(component['populateCMSContent']).toHaveBeenCalledTimes(1);
        });

        it('should set parent.showaccountdetailsheader to true', async () => {
            //Act
            await component['setUpPage']();

            //Assert
            expect(parent.showAccountDetailsHeader).toBe(true);
        });
        it('should call authService.profile', async () => {
            //Act
            await component['setUpPage']();

            //Assert
            expect(authService.profile).toHaveBeenCalledTimes(1);
        });

        it('should call setAccountData', async () => {
            //Act
            await component['setUpPage']();

            //Assert
            expect(component['setAccountData']).toHaveBeenCalledTimes(1);
        });
    });
    describe('populateCMSContent', () => {
        beforeEach(() => {
            component.totalPaid = 333;
        });
        it('should call parent.setFrameTitle with title from cms', async () => {
            //Act
            await component['populateCMSContent']();

            //Assert
            expect(parent.setFrameTitle).toHaveBeenCalledTimes(1);
            expect(parent.setFrameTitle).toHaveBeenCalledWith('fake title');
        });
        it('should correctly set paymentDetailsParams', async () => {
            //Assemble
            const paymentDetailsParams = {
                current_date: 'fake date',
                total_paid: 333
            };

            //Act
            await component['populateCMSContent']();

            //Assert
            expect(component.paymentDetailsParams).toEqual(paymentDetailsParams);
        });

    });
    describe('setAccountData()', () => {
        beforeEach(() => {
            spyOn<any>(component, 'getVehicleInfo').and.callFake(() => { });
            spyOn<any>(component, 'getBillingInfo').and.callFake(() => { });

        });
        it('should not call getVehicleInfo or getBillingInfo if at least one of uiRouterGlobals.params are not null', async () => {
            //act
            await component['setAccountData']();

            //assert
            expect(component['getVehicleInfo']).toHaveBeenCalledTimes(0);
            expect(component['getBillingInfo']).toHaveBeenCalledTimes(0);
        });


        it('should call getVehicleInfo and getBillingInfo if at least one of uiRouterGlobals.params are null', async () => {
            //assemble
            component['uiRouterGlobals'] = {
                params: {
                    billingInfo: null,
                    vehicleInfo: null
                }
            } as any;

            //act
            await component['setAccountData']();

            //assert
            expect(component['getVehicleInfo']).toHaveBeenCalledTimes(1);
            expect(component['getBillingInfo']).toHaveBeenCalledTimes(1);
        });
    });
    describe('getVehicleInfo()', () => {
        beforeEach(() => {
            (genericRepo.dataFactory.getEZTagInfo).and.returnValue({
                accountTags: 'api response vehicle info'
            });
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);

        });
        it('should call api.getEZTagInfo', async () => {
            //act
            await component['getVehicleInfo']();

            //assert
            expect(genericRepo.dataFactory.getEZTagInfo).toHaveBeenCalledTimes(1);
        });
        it('should call api.getEZTagInfo', async () => {
            //act
            await component['getVehicleInfo']();

            //assert
            expect(genericRepo.dataFactory.getEZTagInfo).toHaveBeenCalledTimes(1);
        });
        it('should set component.vehicleInfo if api response is error free', async () => {
            //act
            await component['getVehicleInfo']();

            //assert
            expect(component.vehicleInfo).toBe('api response vehicle info');
        });
        it('should not set component.vehicleInfo if api response has errors', async () => {
            //assemble
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(false);

            //act
            await component['getVehicleInfo']();

            //assert
            expect(component.vehicleInfo).toBeUndefined();
        });

    });
    describe('getBillingInfo()', () => {
        beforeEach(() => {
            (genericRepo.dataFactory.oneTimePaymentGetBillingInfo).and.returnValue({
                billingInfo: 'api response billing info'
            });
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);

        });
        it('should call api.oneTimePaymentGetBillingInfo', async () => {
            //act
            await component['getBillingInfo']();

            //assert
            expect(genericRepo.dataFactory.oneTimePaymentGetBillingInfo).toHaveBeenCalledTimes(1);
        });
        it('should set component.billingInfo if api response is error free', async () => {
            //act
            await component['getBillingInfo']();

            //assert
            expect(component.billingInfo).toBe('api response billing info');
        });
        it('should not set component.billingInfo if api response has errors', async () => {
            //assemble
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(false);

            //act
            await component['getBillingInfo']();

            //assert
            expect(component.billingInfo).toBeUndefined();
        });
    });
    describe('goToAccountOverviewOrLoginPage', () => {

        it('should call state.go', async () => {

            //Act
            await component.goToAccountOverviewOrLoginPage();

            //Assert
            expect(state.go).toHaveBeenCalledWith(accountDashboardStates.Frame);
            expect(state.go).toHaveBeenCalledTimes(1);
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
