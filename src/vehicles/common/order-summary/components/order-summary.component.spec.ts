import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiteCoreItem } from 'cms/cms.module';
import { PipesModule } from 'pipes/module';
import { Action } from 'vehicles/common/common.models';
import { IEZTag } from 'vehicles/interfaces';
import { IOrder, IOrderDetails } from '../models';
import { OrdersummaryComponent } from './order-summary.component';

describe('order summary component', () => {

    let fixture: ComponentFixture<OrdersummaryComponent>;
    let component: OrdersummaryComponent;

    let data = {} as IOrder;

    beforeEach(async () => {

        await TestBed
            .configureTestingModule({
                declarations: [
                    OrdersummaryComponent
                ],
               schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(OrdersummaryComponent);
        component = fixture.debugElement.componentInstance;

        data = {
            display: true,
            details: [
                {
                    tags: [],
                    title: 'test title',
                    isPlate: false
                }
            ],
            operations: {
                isEditable: true,
                isRemoveable: true,
                editContent: {} as SiteCoreItem,
                removeContent: {} as SiteCoreItem

            },
            stateList: [
                {
                    stateCode: 'TX'
                }
            ],
            summary: {
                description: 'test order summary',
                title: 'test order title'
            }

        };

    });

    it('initializes component', async () => {

        component.data = data;
        component.ngOnInit();

        expect(component).toBeDefined();

    });

    it('checks if the tag or plate can be edited', async () => {

        component.data = data;
        component.data.operations.isEditable = true;

        component.ngOnInit();

        expect(component.canEdit).toEqual(true);

    });

    it('checks if the tag can be removed', async () => {

        component.data = data;
        component.data.operations.isRemoveable = true;
        component.ngOnInit();

        expect(component.canRemove).toEqual(true);

    });

    it('checks if the tag can not be removed', async () => {

        const order = { ...data };
        order.operations.isRemoveable = false;
        component.data = order;
        component.ngOnInit();

        expect(component.canRemove).toBeFalse();

    });

    it('checks that added plate can not be removed', async () => {


        const order = { ...data };
        order.operations.isRemoveable = false;
        order.details[0].isPlate = true;

        component.data = data;
        component.ngOnInit();

        expect(component.canRemove).toBeFalse();


    });

    it('checks that MVU order can not be edited and removed', async () => {

        const order = { ...data };
        order.operations.isRemoveable = false;
        order.operations.isEditable = false;
        order.details[0].isPlate = false;

        component.data = data;
        component.ngOnInit();

        expect(component.canRemove).toBeFalse();
        expect(component.canEdit).toBeFalse();

    });

    it('handles the event when the vechile is edited', async () => {
        const vehicleEdited = {} as IEZTag;
        const editedIndex = 0;
        component.event$.subscribe(res => {

            expect(res.data.vehicleEdited).toEqual(vehicleEdited);
            expect(res.action).toEqual(Action.Edit);
        });

        component.editVehicle(vehicleEdited, editedIndex);
    });

    it('handles the event when the vechile is removed', async () => {

        const index = 0;

        component.event$.subscribe(res => {
            expect(res.action).toEqual(Action.Remove);
            expect(res.data.index).toEqual(index);
        });

        component.removeVehicle(index);

    });


});