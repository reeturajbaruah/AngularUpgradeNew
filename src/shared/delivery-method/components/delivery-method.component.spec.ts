import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryMethodType, IMailingInfo } from 'common/models';
import { PipesModule } from 'pipes/module';
import { Action } from 'vehicles/common/common.models';
import { IDeliveryMethod } from '../models';
import { DeliveryMethodService } from '../services/delivery-method.service';
import { DeliveryMethodComponent } from './delivery-method.component';

describe('delivery method component', () => {

    let fixture: ComponentFixture<DeliveryMethodComponent>;
    let component: DeliveryMethodComponent;
    let deliveryMethodServiceSpy: jasmine.SpyObj<DeliveryMethodService>;

    let data = {} as IDeliveryMethod;

    beforeEach(async () => {

        deliveryMethodServiceSpy = jasmine.createSpyObj('service', ['getMailingInfo']);
        deliveryMethodServiceSpy.getMailingInfo.and.resolveTo({} as IMailingInfo);

        await TestBed
            .configureTestingModule({
                declarations: [
                    DeliveryMethodComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: DeliveryMethodService, useFactory: () => deliveryMethodServiceSpy }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(DeliveryMethodComponent);
        component = fixture.debugElement.componentInstance;

        data = {
            display: true,
            header: 'test delivery method',
            operations: [
                {
                    label: 'Edit',
                    action: Action.Edit,
                    display: true,
                    source: 'delivery-method'

                },
                {
                    label: 'Remove',
                    action: Action.Remove,
                    display: true,
                    source: 'delivery-method'

                }
            ],
            type: DeliveryMethodType.Mail
        };

    });

    it('initialized the component', async () => {

        component.data = data;
        await component.ngOnInit();

        expect(component).toBeDefined();

    });

    it('checks that if delivery method can be edited for add tag', async () => {

        const newData = { ...data };
        const editOp = newData.operations.find(op => op.action === Action.Edit);
        editOp.display = true;

        component.data = newData;
        await component.ngOnInit();

        const ops = component.operations;
        const compOp = ops.find(op => op.action === Action.Edit);

        expect(compOp.display).toBeTrue();


    });

    it('checks that if delivery method can not be edited for add tag and MVU', async () => {

        const newData = { ...data };
        const editOp = newData.operations.find(op => op.action === Action.Edit);
        editOp.display = false;

        component.data = newData;
        await component.ngOnInit();

        const ops = component.operations;
        const compOp = ops.find(op => op.action === Action.Edit);

        expect(compOp.display).toBeFalse();

    });



    it('tests method setMethodType if delivery method is By Mail ', async () => {

        const newData = { ...data };
        newData.type = DeliveryMethodType.Mail;
        component.data = newData;

        await component.ngOnInit();

        expect(component.isByMail).toBeTrue();

    });

    it('tests method setMethodType if delivery method is Store pick up ', async () => {

        const newData = { ...data };
        newData.type = DeliveryMethodType.Store;
        component.data = newData;

        await component.ngOnInit();

        expect(component.isByMail).toBeFalse();

    });


});