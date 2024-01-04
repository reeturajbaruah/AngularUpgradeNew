import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { VehicleOperationService } from '../../../services/vehicles/operations/service/vehicle-operation-service';
import { StoreService } from '../../../services/store/store.service';
import { FrameComponent } from '../../frame/frame.component';
import { ComponentManagerService } from '../../../services/manager/component-manager-service';
import { IToggles } from '../../../models/toggles.models';
import { IWizardStateResolverService } from '../../../../../common/interfaces';
import { WizardComponent, WizardStateResolverFactory } from '../../../../../common/ui';
import { VehicleInfoComponent } from './vehicle-info.component';
import { IEZTag, IVehicleConfig, IVehiclesCartList } from '../../../../../shared/vehicle-info';
import { State, TagType } from '../../../../../common/models';
import { SiteCoreItem } from '../../../../../cms/cms.module';
import { ICartCms } from '../../../models/add-vehicle.models';

describe('vehicle-info component', () => {

    let fixture: ComponentFixture<VehicleInfoComponent>;
    let component: VehicleInfoComponent;
    let vehicleOperationServiceSpy: jasmine.SpyObj<VehicleOperationService>;
    let stateServiceSpy: jasmine.SpyObj<StateService>;
    let storeServiceSpy: jasmine.SpyObj<StoreService>;
    let parent: jasmine.SpyObj<FrameComponent>;
    let componentManagerServiceSpy: jasmine.SpyObj<ComponentManagerService>;
    let wizardStateResolverFactory: jasmine.SpyObj<WizardStateResolverFactory>;
    let iWizardStateResolverServiceSpy: jasmine.SpyObj<IWizardStateResolverService>;
    let uiRouterGlobals: jasmine.SpyObj<UIRouterGlobals>;
    let wizardComponent: WizardComponent;

    beforeEach(async () => {
        iWizardStateResolverServiceSpy = jasmine.createSpyObj('fakeService', ['nextState', 'previousState', 'cancelState', 'getUiOrder']);
        wizardStateResolverFactory = jasmine.createSpyObj('fakeFactory', ['getService']);
        wizardStateResolverFactory.getService.and.returnValue(iWizardStateResolverServiceSpy);

        vehicleOperationServiceSpy = jasmine.createSpyObj('vehicleOperationServiceSpy', ['edit', 'add']);
        componentManagerServiceSpy = jasmine.createSpyObj('componentManagerServiceSpy', ['select', 'getToggles', 'checkUserResumedCreateAcctFlow','campaign']);
        componentManagerServiceSpy.getToggles.and.resolveTo({ IsFlexPay: true } as IToggles);
        componentManagerServiceSpy.campaign.and.resolveTo({} as any);

        uiRouterGlobals = jasmine.createSpyObj('UIRouterGlobals', [], { current: { name: '' } });
        storeServiceSpy = jasmine.createSpyObj('store', ['select', 'dispatch']);
        parent = jasmine.createSpyObj('parent', ['campaignInit', 'nextButtonText', 'setTitle', 'setStepOnly','cancel']);
        stateServiceSpy = jasmine.createSpyObj('state', ['go']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    VehicleInfoComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: WizardStateResolverFactory, useFactory: () => wizardStateResolverFactory },
                    { provide: VehicleOperationService, useFactory: () => vehicleOperationServiceSpy },
                    { provide: ComponentManagerService, useFactory: () => componentManagerServiceSpy },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: StoreService, useFactory: () => storeServiceSpy },
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: StateService, useFactory: () => stateServiceSpy },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(VehicleInfoComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('intialize vehicle-info component', () => {
        it('initialized the component', async () => {
            await component.ngOnInit();
            expect(component).toBeDefined();
        });
    });

    describe('add vehicle', () => {
        it('should call add event of vehicle-info component', async () => {
            const newEzTag: IEZTag = {
                tagId: TagType.Tag,
                fullTagId: TagType.Tag,
                acctTagSeq: -1,
                acctTagSeqSepcified: true,
                acctTagStatus: 'Test tag status text',
                tagStatusDesc: 'Test tag status description text',
                pbpStartDate: '2023-01-01',
                pbpEndDate: '2023-12-31',
                tagTypeCode: TagType.Tag,
                activePbpTagExist: false,
                tagless_Desc: 'Test tagless description text',
                acctVehicleId: 123456789,
                nicknameHasBeenManuallyCopiedinApiAndIsForDisplayOnly: false,
                licState: 'TX',
                licPlate: 'TEST200',
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

            const newEzPlate: IEZTag = {
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
                licPlate: 'TEST400',
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

            const ezTagOptConfig = {
                ezTagOptionConfig: {
                    ezTagOrder: {
                        flag: true,
                        msgWhenMotorcyleNotOpted: 'msgWhenMotorcyleNotOpted',
                        msgWhenMotorcyleOpted: 'msgWhenMotorcyleOpted',
                        warningDesc: 'warningDesc'
                    },
                    motorcycle: {
                        message: 'message'
                    }
                }
            } as IVehicleConfig ;

            const ezTag: IEZTag = {
                tagId: TagType.Tag,
                fullTagId: TagType.Tag,
                acctTagSeq: -1,
                acctTagSeqSepcified: true,
                acctTagStatus: 'Test tag status text',
                tagStatusDesc: 'Test tag status description text',
                pbpStartDate: '2023-01-01',
                pbpEndDate: '2023-12-31',
                tagTypeCode: TagType.Tag,
                activePbpTagExist: false,
                tagless_Desc: 'Test tagless description text',
                acctVehicleId: 123456789,
                nicknameHasBeenManuallyCopiedinApiAndIsForDisplayOnly: false,
                licState: 'TX',
                licPlate: 'ABC123',
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

            const ezTags = [ezTag];

            const cartCmsInfo = {
                vehicleExists: 'vehicleExists',
                tagOrdered: 'tagOrdered',
                tagNotOrdered: 'tagNotOrdered',
                vehicleDetailsHeader: 'vehicleDetailsHeader'
            } as ICartCms;

            const cartList = {
                title: 'title',
                context: 'context',
                vehicleDetailsHeader: 'header',
                modalContent: {
                    edit: {} as SiteCoreItem,
                    remove: {} as SiteCoreItem,
                    cancel: {} as SiteCoreItem,
                    add: {} as SiteCoreItem
                },
                ezTags,
                states: [{ stateCode: 'TX' } as State],
                config: ezTagOptConfig as IVehicleConfig
            } as IVehiclesCartList;


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

            component.cartListData = cartList;
            component.vehiclesList = ezPlates;
            component.cartCms = cartCmsInfo;
            component.config = ezTagOptConfig as IVehicleConfig;
            vehicleOperationServiceSpy.add.and.resolveTo(Promise.resolve(newEzTag));
            await component.add({} as any);
            expect(component.vehiclesList.length).toBe(2);
            expect(component.vehiclesList[1].tagId).toBe(TagType.Tag);
            expect(component.vehiclesList[1].licPlate).toBe('TEST200');
            expect(vehicleOperationServiceSpy.add).toHaveBeenCalledTimes(1);
        });
    });


    describe('Cancel', () => {
        it('should call cancel event of vehicle-info component', async () => {
            //Just validating singnatures
            const state = { name: 'test' } as StateDeclaration;
            await component.cancel(state, wizardComponent);
            expect(parent.cancel).toHaveBeenCalledTimes(1);
        });
    });
});
