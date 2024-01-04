import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { } from 'jasmine';
import { AuthenticationService } from '../../../../authentication/authenticationService/authentication.service';
import { IWizardStateResolverService } from '../../../../common/interfaces';
import { WindowRef } from '../../../../common/providers';
import { DialogService } from '../../../../common/services';
import { CreateAccountComponent, StepperStep, WizardComponent, WizardStateResolverFactory } from '../../../../common/ui';
import { IToggles } from '../../models/toggles.models';
import { ComponentManagerService } from '../../services/manager/component-manager-service';
import { NavigationService } from '../../services/navigation/navigation.service';
import { FrameComponent } from '../frame/frame.component';
import { IEZTag } from '../../../../shared/vehicle-info';
import { TagType } from '../../../../common/models';
import { States } from '../../states';
import { SiteCoreItem } from '../../../../cms/cms.module';
import { cloneDeep } from 'lodash';
import { StorefrontUtilityService } from '../../../../storefront/services/storefrontUtility.service';

describe('frame component', () => {

    let fixture: ComponentFixture<FrameComponent>;
    let component: FrameComponent;
    let windowRef: jasmine.SpyObj<Window>;
    let stateServiceSpy: jasmine.SpyObj<StateService>;
    let componentManagerServiceSpy: jasmine.SpyObj<ComponentManagerService>;
    let wizardStateResolverFactory: jasmine.SpyObj<WizardStateResolverFactory>;
    let iWizardStateResolverServiceSpy: jasmine.SpyObj<IWizardStateResolverService>;
    let storefrontUtilityService: any;
    let dialogService: jasmine.SpyObj<DialogService>;
    let navigation: jasmine.SpyObj<NavigationService>;
    let authService: jasmine.SpyObj<AuthenticationService>;
    let wizardComponent: WizardComponent;

    const mockCMSData = {
        step1: 'step1',
        step2: 'step2',
        step3: 'step3',
        step4: 'step4',
        step5: 'step5',
        step6: 'step6',
    } as any;

    beforeEach(async () => {
        iWizardStateResolverServiceSpy = jasmine.createSpyObj('fakeService', ['nextState', 'previousState', 'cancelState', 'getUiOrder']);
        wizardStateResolverFactory = jasmine.createSpyObj('fakeFactory', ['getService']);
        wizardStateResolverFactory.getService.and.returnValue(iWizardStateResolverServiceSpy);

        windowRef = jasmine.createSpyObj('window', ['localStorage']);
        storefrontUtilityService = {
            isRunningAsKiosk: false,
            webStoreData: { fullSiteMode: false },
            accountLoggedInWorkItemIds: []
        };

        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered', 'openGenericModal']);
        dialogService.openSliderCentered.and.resolveTo(true);
        stateServiceSpy = jasmine.createSpyObj('state', ['go']);
        authService = jasmine.createSpyObj('authenticationService', ['isAuthenticated', 'logout']);
        navigation = jasmine.createSpyObj('navigation', ['navigation', 'setOrder', 'skipStep', 'addStep']);
        componentManagerServiceSpy = jasmine.createSpyObj('componentManagerServiceSpy', ['select', 'getToggles', 'checkUserResumedCreateAcctFlow', 'campaign', 'subscribeToggles', 'clearStore']);
        componentManagerServiceSpy.getToggles.and.resolveTo({ IsFlexPay: true } as IToggles);
        componentManagerServiceSpy.campaign.and.resolveTo({} as any);

        await TestBed
            .configureTestingModule({
                declarations: [
                    FrameComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: WizardStateResolverFactory, useFactory: () => wizardStateResolverFactory },
                    { provide: WindowRef, useFactory: () => windowRef },
                    { provide: StorefrontUtilityService, useFactory: () => storefrontUtilityService },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: StateService, useFactory: () => stateServiceSpy },
                    { provide: AuthenticationService, useFactory: () => authService },
                    { provide: ComponentManagerService, useFactory: () => componentManagerServiceSpy },
                    { provide: NavigationService, useFactory: () => navigation },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(FrameComponent);
        component = fixture.debugElement.componentInstance;
        component.cmsFrame = cloneDeep(mockCMSData);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('intialize frame component', () => {
        it('initialized the component', async () => {
            const response = { IsFlexPay: true } as IToggles;
            componentManagerServiceSpy.subscribeToggles(Promise.resolve(response));
            await component.ngOnInit();
            expect(component).toBeDefined();
        });

        it('should initialize steps and stepMap correctly when IsFlexPay is true', async () => {
            const response = { IsFlexPay: true } as IToggles;
            componentManagerServiceSpy.subscribeToggles.and.callFake((callback) => { callback(response); });
            await component.ngOnInit();

            expect(component.steps).toEqual([
                { name: mockCMSData.step1, background: 'secondary' },
                { name: mockCMSData.step2, background: 'secondary' },
                { name: mockCMSData.step4, background: 'secondary' },
                { name: mockCMSData.step3, background: 'secondary' },
                { name: mockCMSData.step5, background: 'secondary' },
                { name: mockCMSData.step6, background: 'secondary' }

            ]);

            expect(component.stepMap).toEqual({
                [States.Login]: 1,
                [States.VehicleInfo]: 2,
                [States.PaymentInfo]: 4,
                [States.DeliveryMethod]: 3,
                [States.Review]: 5,
                [States.Receipt]: 6
            });
        });

        it('should initialize steps and stepMap correctly when IsFlexPay is false', async () => {
            const response = { IsFlexPay: false } as IToggles;
            componentManagerServiceSpy.subscribeToggles.and.callFake((callback) => { callback(response); });
            await component.ngOnInit();

            expect(component.steps).toEqual([
                { name: component.cmsFrame.step1, background: 'secondary' },
                { name: component.cmsFrame.step2, background: 'secondary' },
                { name: component.cmsFrame.step3, background: 'secondary' },
                { name: component.cmsFrame.step4, background: 'secondary' },
                { name: component.cmsFrame.step5, background: 'secondary' },
                { name: component.cmsFrame.step6, background: 'secondary' }

            ]);

            expect(component.stepMap).toEqual({
                [States.Login]: 1,
                [States.VehicleInfo]: 2,
                [States.PaymentInfo]: 3,
                [States.DeliveryMethod]: 4,
                [States.Review]: 5,
                [States.Receipt]: 6
            });
        });
    });


    describe('campaignInit', () => {
        it('Should call campaignInit method of frame component', async () => {
            await component.campaignInit('pageName');
            expect(componentManagerServiceSpy.campaign).toHaveBeenCalledTimes(1);
        });
    });

    describe('skipDeliveryStep method of frame component', () => {

        it('Should not skip DeliveryStep', async () => {
            const ezPlate: IEZTag = {
                tagId: TagType.Plate,
                fullTagId: TagType.Plate,
                acctTagSeq: -1,
                acctTagSeqSepcified: true,
                acctTagStatus: 'Test tag status text',
                tagStatusDesc: 'Test tag status description text',
                pbpStartDate: '2023-01-01',
                pbpEndDate: '2023-12-31',
                tagTypeCode: TagType.Plate,
                activePbpTagExist: false,
                tagless_Desc: 'Test tagless description text',
                acctVehicleId: 123456789,
                nicknameHasBeenManuallyCopiedinApiAndIsForDisplayOnly: false,
                licState: 'TX',
                licPlate: 'ABC789',
                vehicleYear: '2023',
                vehicleModel: 'Model 3',
                vehicleMake: 'Tesla',
                vehicleColor: 'Blue',
                vehicleClassCode: 2,
                vehicleClassDesc: '2-Axel',
                temporaryLicPlate: false,
                motorcycle: false,
                nickname: 'Test nickname text',
                isMotorcycleDisabled: false
            };

            const ezPlates = [ezPlate];
            componentManagerServiceSpy.select.and.resolveTo(ezPlates as any);
            const step = {
                name: 'Delivery Method',
                background: 'primary',
                isGreyed: true
            };
            component.steps = [step] as StepperStep[];
            component.toggles = { IsFlexPay: true, EzTagOption: true } as IToggles;
            const skipDeliveryMethod = await component.skipDeliveryStep();
            expect(skipDeliveryMethod).toEqual(false);;
            expect(componentManagerServiceSpy.select).toHaveBeenCalledTimes(1);
        });

        it('Should skip DeliveryStep', async () => {
            const ezPlate: IEZTag = {
                tagId: TagType.NoTag,
                fullTagId: TagType.Plate,
                acctTagSeq: -1,
                acctTagSeqSepcified: true,
                acctTagStatus: 'Test tag status text',
                tagStatusDesc: 'Test tag status description text',
                pbpStartDate: '2023-01-01',
                pbpEndDate: '2023-12-31',
                tagTypeCode: TagType.Plate,
                activePbpTagExist: false,
                tagless_Desc: 'Test tagless description text',
                acctVehicleId: 123456789,
                nicknameHasBeenManuallyCopiedinApiAndIsForDisplayOnly: false,
                licState: 'TX',
                licPlate: 'ABC789',
                vehicleYear: '2023',
                vehicleModel: 'Model 3',
                vehicleMake: 'Tesla',
                vehicleColor: 'Blue',
                vehicleClassCode: 2,
                vehicleClassDesc: '2-Axel',
                temporaryLicPlate: false,
                motorcycle: false,
                nickname: 'Test nickname text',
                isMotorcycleDisabled: false
            };

            const ezPlates = [ezPlate];
            componentManagerServiceSpy.select.and.resolveTo(ezPlates as any);
            const step = {
                name: 'Delivery Method',
                background: 'primary',
                isGreyed: true
            };
            component.steps = [step] as StepperStep[];
            navigation.skipStep.and.returnValue(true);
            component.toggles = { IsFlexPay: true, EzTagOption: true } as IToggles;
            const skipDeliveryMethod = await component.skipDeliveryStep();
            expect(skipDeliveryMethod).toEqual(true);
            expect(componentManagerServiceSpy.select).toHaveBeenCalledTimes(1);
        });
    });

    describe('nextButtonText method of frame component', () => {

        it('Should call nextButtonText', async () => {
            component.toggles = { IsFlexPay: true, EzTagOption: true } as IToggles;

            component.steps = [
                { name: 'step1', background: 'secondary' },
                { name: 'step2', background: 'secondary' },
                { name: 'step4', background: 'secondary' },
                { name: 'step3', background: 'secondary' },
                { name: 'step5', background: 'secondary' },
                { name: 'step6', background: 'secondary' }
            ];

            component.stepMap = {
                [States.Login]: 1,
                [States.VehicleInfo]: 2,
                [States.PaymentInfo]: 4,
                [States.DeliveryMethod]: 3,
                [States.Review]: 5,
                [States.Receipt]: 6
            };

            component.cmsFrame = {
                Title: 'parent',
                Children: [],
                submitButtonText: 'submitButtonText'
            } as any;

            const nextButtonText = component.nextButtonText(States.Login, true);
            expect(nextButtonText).toEqual(component.cmsFrame.submitButtonText);
        });

    });

    describe('Cancel', () => {
        it('should abort KioskFlow when isKiosk is true', async () => {
            const siteCoreItem = { Title: 'Title' } as SiteCoreItem;
            component.isKiosk = true;
            await component.cancel(siteCoreItem, wizardComponent);
            expect(componentManagerServiceSpy.clearStore).toHaveBeenCalledTimes(1);
        });

        it('should cancel the current step', async () => {
            const siteCoreItem = { Title: 'Title' } as SiteCoreItem;
            component.isKiosk = false;
            dialogService.openGenericModal.and.resolveTo(Promise.resolve(true));
            await component.cancel(siteCoreItem, wizardComponent);
            expect(dialogService.openGenericModal).toHaveBeenCalledTimes(1);
        });

        it('should logout when openGenericModal fails', async () => {
            const siteCoreItem = { Title: 'Title' } as SiteCoreItem;
            component.isKiosk = false;
            dialogService.openGenericModal.and.resolveTo(null);
            await component.cancel(siteCoreItem, wizardComponent);
            expect(dialogService.openGenericModal).toHaveBeenCalledTimes(1);
        });

    });
});
