import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { VehiclesCartComponent } from './cart.component';
import { VehicleOperationService } from '../../../services/vehicles/operations/service/vehicle-operation-service';
import { ToasterService } from '../../../../../common/services';
import { StoreService } from '../../../services/store/store.service';
import { VehiclesOperationHelper } from '../../../services/vehicles/operations/helper/operation-helper';
import { NavigationService } from '../../../services/navigation/navigation.service';
import { FrameComponent } from '../../frame/frame.component';
import { ComponentManagerService } from '../../../services/manager/component-manager-service';
import { IToggles } from '../../../models/toggles.models';
import { IWizardStateResolverService } from '../../../../../common/interfaces';
import { WizardStateResolverFactory } from '../../../../../common/ui';
import { IEZTag, IVehicleConfig, IVehiclesCartList } from '../../../../../shared/vehicle-info';
import { State, TagType } from '../../../../../common/models';
import { ICartCms } from '../../../models/add-vehicle.models';
import { SiteCoreItem } from '../../../../../cms/cms.module';
import { remove } from 'lodash';

describe('vehicle cart component', () => {

    let fixture: ComponentFixture<VehiclesCartComponent>;
    let component: VehiclesCartComponent;
    let vehicleOperationServiceSpy: jasmine.SpyObj<VehicleOperationService>;
    let toasterServiceSpy: jasmine.SpyObj<ToasterService>;
    let stateServiceSpy: jasmine.SpyObj<StateService>;
    let vehiclesOperationHelperSpy: jasmine.SpyObj<VehiclesOperationHelper>;
    let storeServiceSpy: jasmine.SpyObj<StoreService>;
    let parent: jasmine.SpyObj<FrameComponent>;
    let navigationServiceSpy: jasmine.SpyObj<NavigationService>;
    let componentManagerServiceSpy: jasmine.SpyObj<ComponentManagerService>;
    let wizardStateResolverFactory: jasmine.SpyObj<WizardStateResolverFactory>;
    let iWizardStateResolverServiceSpy: jasmine.SpyObj<IWizardStateResolverService>;
    const index = 0;

    beforeEach(async () => {

        iWizardStateResolverServiceSpy = jasmine.createSpyObj('fakeService', ['nextState', 'previousState', 'cancelState', 'getUiOrder']);
        wizardStateResolverFactory = jasmine.createSpyObj('fakeFactory', ['getService']);
        wizardStateResolverFactory.getService.and.returnValue(iWizardStateResolverServiceSpy);

        vehicleOperationServiceSpy = jasmine.createSpyObj('vehicleOperationServiceSpy', ['edit', 'add']);
      
        toasterServiceSpy = jasmine.createSpyObj('toasterServiceSpy', ['removeAll', 'show']);
        stateServiceSpy = jasmine.createSpyObj('state', ['go']);
        vehiclesOperationHelperSpy = jasmine.createSpyObj('vehiclesOperationHelperSpy', ['edit','remove']);
        storeServiceSpy = jasmine.createSpyObj('store', ['select','dispatch']);
        parent = jasmine.createSpyObj('parent', ['campaignInit', 'nextButtonText', 'setTitle', 'setStepOnly']);
        navigationServiceSpy = jasmine.createSpyObj('navigation', ['navigation']);

        componentManagerServiceSpy = jasmine.createSpyObj('componentManagerServiceSpy', ['select', 'getToggles', 'checkUserResumedCreateAcctFlow']);
        componentManagerServiceSpy.getToggles.and.resolveTo({ IsFlexPay: true } as IToggles);

        await TestBed
            .configureTestingModule({
                declarations: [
                    VehiclesCartComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: WizardStateResolverFactory, useFactory: () => wizardStateResolverFactory },
                    { provide: VehicleOperationService, useFactory: () => vehicleOperationServiceSpy },
                    { provide: ToasterService, useFactory: () => toasterServiceSpy },
                    { provide: StateService, useFactory: () => stateServiceSpy },
                    { provide: VehiclesOperationHelper, useFactory: () => vehiclesOperationHelperSpy },
                    { provide: StoreService, useFactory: () => storeServiceSpy },
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: NavigationService, useFactory: () => navigationServiceSpy },
                    { provide: ComponentManagerService, useFactory: () => componentManagerServiceSpy },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(VehiclesCartComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('intialize Vehicles Cart component', () => {
        it('initialized the component', async () => {
            component.cartListData = {} as IVehiclesCartList;
            await component.ngOnInit();
            expect(component).toBeDefined();
        });
    });

    describe('add/edit methods of Vehicles Cart component', () => {

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

        const cartCmsInfo = {
            vehicleExists: 'vehicleExists',
            tagOrdered: 'tagOrdered',
            tagNotOrdered: 'tagNotOrdered',
            vehicleDetailsHeader: 'vehicleDetailsHeader'
        } as ICartCms;

        it('should call add method with existing ezTag', async () => {
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
                config: {} as IVehicleConfig
            } as IVehiclesCartList;

            component.cartListData = cartList;
            component.vehicles = ezTags;
            component.cms = cartCmsInfo;
            await component.add(ezTag);
            expect(component.vehicles.length).toBe(1);
            expect(component.vehicles[0].tagId).toBe(TagType.Tag);
            expect(component.vehicles[0].licPlate).toBe('ABC123');
            expect(toasterServiceSpy.show).toHaveBeenCalledTimes(1);
        });

        it('should call add method with new ezTag', async () => {
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
                config: {} as IVehicleConfig
            } as IVehiclesCartList;

            component.cartListData = cartList;
            component.vehicles = ezTags;
            component.cms = cartCmsInfo;
            vehicleOperationServiceSpy.add.and.resolveTo(Promise.resolve(newEzTag));
            await component.add(newEzTag);
            expect(component.vehicles.length).toBe(2);
            expect(component.vehicles[1].tagId).toBe(TagType.Tag);
            expect(component.vehicles[1].licPlate).toBe('TEST200');
            expect(vehicleOperationServiceSpy.add).toHaveBeenCalledTimes(1);
        });

        it('should call add method with new ezPlate', async () => {

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
                config: {} as IVehicleConfig
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
            component.vehicles = ezPlates;
            component.cms = cartCmsInfo;
            vehicleOperationServiceSpy.add.and.resolveTo(Promise.resolve(newEzPlate));
            await component.add(newEzPlate);
            expect(component.vehicles.length).toBe(2);
            expect(component.vehicles[1].tagId).toBe(TagType.Plate);
            expect(component.vehicles[1].licPlate).toBe('TEST400');
            expect(vehicleOperationServiceSpy.add).toHaveBeenCalledTimes(1);
        });

        it('should call edit method for ezTag', async () => {
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
                config: {} as IVehicleConfig
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
            component.vehicles = ezPlates;
            component.cms = cartCmsInfo;
            //Just validating signature
            await component.edit({} as IEZTag, index);
            expect(vehiclesOperationHelperSpy.edit).toHaveBeenCalledTimes(1);
        });
    });

    describe('remove method of Vehicles Cart component', () => {
        it('should call remove method for ezTag', async () => {
            //Just validating signature
            await component.remove(index);
            expect(vehiclesOperationHelperSpy.remove).toHaveBeenCalledTimes(1);
        });
    });
});
