import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { AddTagCartComponent } from './cart.component';
import { WebApiService } from 'vehicles/shared';
import { PipesModule } from 'pipes/module';
import { IEzTagResponse, IEZTag } from 'vehicles/interfaces';
import { VehiclesManagerService } from 'vehicles/shared';
import { DialogService, ToasterService } from 'common/services';
import { AddTagFrameComponent } from '../frame/frame.component';
import { VehicleModalCms } from 'vehicles/shared';

describe('AddTagCartComponent', () => {

    let fixture: ComponentFixture<AddTagCartComponent>;
    let component: AddTagCartComponent;
    let state: StateService;
    let webApi: jasmine.SpyObj<WebApiService>;
    let nextState: StateDeclaration;
    let frame: AddTagFrameComponent;
    let manager: jasmine.SpyObj<VehiclesManagerService>;
    let dialogService: DialogService;
    let toasterService: jasmine.SpyObj<ToasterService>;


    beforeEach(async () => {

        state = jasmine.createSpyObj('state', ['go']);
        webApi = jasmine.createSpyObj('webApi', ['addVehicleFromAccountInformation']);
        parent = {} as any;
        manager = jasmine.createSpyObj('manager', ['setVehicleInfoItem', 'getVehicleInfoList', 'updateWholeVehicleList', 'editVehicleInfoItem', 'removeVehicleInfoItem',
            'clearData', 'getStepperData']);
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered', 'openGenericModal']);
        frame = {} as any;
        toasterService = jasmine.createSpyObj('toasterService', ['show']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    AddTagCartComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: AddTagFrameComponent, useFactory: () => frame },
                    { provide: VehiclesManagerService, useFactory: () => manager },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: ToasterService, useFactory: () => toasterService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(AddTagCartComponent);
        component = fixture.debugElement.componentInstance;

        nextState = { name: 'DeliveryMethod' } as StateDeclaration;

        component.cancellationModal = {
            Title: 'Title',
            ShortDescription: 'So short',
            LongDescription: 'So long',
            RebillToolTip: ''
        } as any;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('addIEZTagDeliveryMethodClick', () => {
        it('should initialize values correctly and get vehicles from web storage', async () => {
            //Assemble
            manager.getVehicleInfoList.and.returnValue([{
                licPlate: 'ABC123',
                licState: 'TX',
                motorcycle: false,
                nickname: 'Loud Car',
                vehicleClassCode: 2,
                vehicleColor: 'Red',
                vehicleMake: 'Corvette',
                vehicleModel: 'ZR1',
                vehicleYear: '1995',
                temporaryLicPlate: false
            } as IEzTagResponse,
            {
                licPlate: 'AAAHHHH',
                licState: 'TX',
                motorcycle: false,
                nickname: 'Scar Car',
                vehicleClassCode: 2,
                vehicleColor: 'Blue',
                vehicleMake: 'Corvette',
                vehicleModel: 'ZR1',
                vehicleYear: '1991',
                temporaryLicPlate: false
            } as IEzTagResponse]);

            //Act
            await component.ngOnInit();

            //Assert
            expect(component.addVehicle).toEqual({
                vehicleClassCode: 2,
                licState: 'TX'
            } as IEZTag);
            expect(component.addingAdditionalVehicle).toEqual(false);
            expect(component.cartTags).toEqual([{
                licPlate: 'ABC123',
                licState: 'TX',
                motorcycle: false,
                nickname: 'Loud Car',
                vehicleClassCode: 2,
                vehicleColor: 'Red',
                vehicleMake: 'Corvette',
                vehicleModel: 'ZR1',
                vehicleYear: '1995',
                temporaryLicPlate: false
            } as IEzTagResponse,
            {
                licPlate: 'AAAHHHH',
                licState: 'TX',
                motorcycle: false,
                nickname: 'Scar Car',
                vehicleClassCode: 2,
                vehicleColor: 'Blue',
                vehicleMake: 'Corvette',
                vehicleModel: 'ZR1',
                vehicleYear: '1991',
                temporaryLicPlate: false
            } as IEzTagResponse]);
        });
    });

    describe('addIEZTagDeliveryMethodClick', () => {

        it('should go to next state if a vehicle is added', async () => {
            component.cartTags = [{
                licPlate: 'plate1'
            } as IEzTagResponse];

            await component.addEzTagDeliveryMethodClick(nextState);

            expect(state.go).toHaveBeenCalledWith(nextState);
        });

        it('should not go to next state if all vehicles are removed', async () => {
            component.cartTags = [];

            await component.addEzTagDeliveryMethodClick(nextState);

            expect(state.go).not.toHaveBeenCalledWith(nextState);
            expect(toasterService.show).toHaveBeenCalled();
        });
    });

    describe('removeVehicle', () => {
        it('should call remove method from service', () => {
            //Assemble
            manager.removeVehicleInfoItem.and.resolveTo();

            //Act
            component.removeVehicle(0);

            //Assert
            expect(manager.removeVehicleInfoItem).toHaveBeenCalledTimes(1);
        });
    });

    describe('editVehicle and edits the tag', () => {

        it('updates the licence plate if this plate is already in the cart but is the plate being updated', async () => {

            component.cartTags = [{
                licPlate: 'PLATE1',
                licState: 'TX'
            } as IEzTagResponse,
            {
                licPlate: 'PLATE2',
                licState: 'TN'
            } as IEzTagResponse];

            component.addAdditionalTagCms = { ErrorPlateExistsInCart: 'error' } as VehicleModalCms;

            component.editVehicle({ licPlate: 'PLATE2', licState: 'TX' } as any, 1);
            expect(toasterService.show).not.toHaveBeenCalled();
            expect(manager.editVehicleInfoItem).toHaveBeenCalled();
        });

        it('does not update the licence plate if this plate is already in the cart', async () => {

            component.cartTags = [{
                licPlate: 'PLATE1',
                licState: 'TX'
            } as IEzTagResponse,
            {
                licPlate: 'PLATE2',
                licState: 'TX'
            } as IEzTagResponse];

            component.addAdditionalTagCms = { ErrorPlateExistsInCart: 'error' } as VehicleModalCms;

            component.editVehicle({ licPlate: 'PLATE2', licState: 'TX' } as any, 0);
            expect(toasterService.show).toHaveBeenCalled();
            expect(manager.editVehicleInfoItem).not.toHaveBeenCalled();
        });

        it('updates the licence plate and call editVehicleInfoItem for new plate', async () => {

            component.cartTags = [{
                licPlate: 'plate1'
            } as IEzTagResponse,
            {
                licPlate: 'plate2'
            } as IEzTagResponse];

            component.editVehicle({ licPlate: 'plate3' } as any, 0);

            expect(manager.editVehicleInfoItem).toHaveBeenCalled();
        });
    });

    describe('addAdditionalVehicle', () => {

        it('should not add an additional vehicle if the added plate already in the cart', async () => {

            component.cartTags = [{
                licPlate: 'PLATE1',
                licState: 'TX'
            } as IEzTagResponse];

            component.addVehicle = { licPlate: 'PLATE1', licState: 'TX' } as IEZTag;
            component.addAdditionalTagCms = { ErrorPlateExistsInCart: 'error' } as VehicleModalCms;
            await component.addAdditionalVehicle();
            expect(component.addingAdditionalVehicle).toBeTrue();
        });

        it('should not add an additional vehicle if the added plate not in the cart and already added in the backed', async () => {

            component.cartTags = [{
                licPlate: 'plate1',
                licState: 'TX'
            } as IEzTagResponse];

            component.addVehicle = {
                licPlate: 'plate2',
                licState: 'TX',
            } as IEZTag;

            manager.getVehicleInfoList.and.returnValue([
                {
                    licPlate: 'plate1',
                    licState: 'TX',
                } as IEzTagResponse]);

            await component.addAdditionalVehicle();
            expect(manager.setVehicleInfoItem).toHaveBeenCalled();
            expect(manager.getVehicleInfoList).toHaveBeenCalled();
            expect(component.addingAdditionalVehicle).toBeTrue();


        });

        it('should add an additional vehicle if the added plate not in the cart and not added in the backed', async () => {

            component.cartTags = [{
                licPlate: 'PLATE1',
                licState: 'TX',
            } as IEzTagResponse];

            component.addVehicle = {
                licPlate: 'PLATE2',
                licState: 'TX',
            } as IEZTag;

            manager.getVehicleInfoList.and.returnValue([
                {
                    licPlate: 'PLATE2',
                    licState: 'TX',
                } as IEzTagResponse,
                {
                    licPlate: 'PLATE1',
                    licState: 'TX',
                } as IEzTagResponse

            ]);

            await component.addAdditionalVehicle();
            expect(manager.setVehicleInfoItem).toHaveBeenCalled();
            expect(manager.getVehicleInfoList).toHaveBeenCalled();
            expect(component.addingAdditionalVehicle).toBeFalse();

        });

    });

    describe('resetAddAdditionalVehicle', () => {
        it('should add a new tag and reset form values', async () => {
            //Assemble
            component.cartTags = [{
                licPlate: 'ABC123',
                licState: 'TX',
                motorcycle: false,
                nickname: 'Loud Car',
                vehicleClassCode: 2,
                vehicleColor: 'Red',
                vehicleMake: 'Corvette',
                vehicleModel: 'ZR1',
                vehicleYear: '1995',
                temporaryLicPlate: false
            } as IEzTagResponse,
            {
                licPlate: 'AAAHHHH',
                licState: 'TX',
                motorcycle: false,
                nickname: 'Scar Car',
                vehicleClassCode: 2,
                vehicleColor: 'Blue',
                vehicleMake: 'Corvette',
                vehicleModel: 'ZR1',
                vehicleYear: '1991',
                temporaryLicPlate: false
            } as IEzTagResponse];
            component.addingAdditionalVehicle = true;
            component.addVehicle = {
                licPlate: '98765432',
                licState: 'TX',
                motorcycle: false,
                nickname: 'Quiet Car',
                vehicleClassCode: 2,
                vehicleColor: 'Blue',
                vehicleMake: 'Cobra',
                vehicleModel: '???',
                vehicleYear: '1995',
                temporaryLicPlate: false
            } as IEZTag;

            //Act
            await component.resetAddAdditionalVehicle();

            //Assert
            expect(component.cartTags).toEqual([{
                licPlate: 'ABC123',
                licState: 'TX',
                motorcycle: false,
                nickname: 'Loud Car',
                vehicleClassCode: 2,
                vehicleColor: 'Red',
                vehicleMake: 'Corvette',
                vehicleModel: 'ZR1',
                vehicleYear: '1995',
                temporaryLicPlate: false
            } as IEzTagResponse,
            {
                licPlate: 'AAAHHHH',
                licState: 'TX',
                motorcycle: false,
                nickname: 'Scar Car',
                vehicleClassCode: 2,
                vehicleColor: 'Blue',
                vehicleMake: 'Corvette',
                vehicleModel: 'ZR1',
                vehicleYear: '1991',
                temporaryLicPlate: false
            } as IEzTagResponse]);
            expect(component.addVehicle).toEqual({
                vehicleClassCode: 2,
                licState: 'TX'
            } as IEZTag);
            expect(component.addingAdditionalVehicle).toEqual(false);
        });
    });

    describe('cancel', () => {
        it('calls clearData', async () => {
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue(null);

            await component.cancel({} as StateDeclaration);

            expect(manager.clearData).toHaveBeenCalled();
            expect(state.go).toHaveBeenCalled();
        });

        it('doesnt call clearData', async () => {
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue(true);

            await component.cancel({} as StateDeclaration);

            expect(manager.clearData).not.toHaveBeenCalled();
            expect(state.go).not.toHaveBeenCalled();
        });
    });

});
