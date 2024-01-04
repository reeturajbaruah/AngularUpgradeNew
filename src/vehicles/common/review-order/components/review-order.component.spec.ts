import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { Action, IEvent } from 'vehicles/common/common.models';
import { IReviewOrder } from '../models';
import { ReviewOrderService } from '../services/review-order.service';
import { ReviewOrderComponent } from './review.-order.component';


describe('delivery method component', () => {

    let fixture: ComponentFixture<ReviewOrderComponent>;
    let component: ReviewOrderComponent;
    let reviewOrderServiceSpy: jasmine.SpyObj<ReviewOrderService>;
    const data = {} as IReviewOrder;

    beforeEach(async () => {

        reviewOrderServiceSpy = jasmine.createSpyObj('service', ['dispatchAction']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    ReviewOrderComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: ReviewOrderService, useFactory: () => reviewOrderServiceSpy }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ReviewOrderComponent);
        component = fixture.debugElement.componentInstance;
        component.data = data;


    });

    it('initializes the component', async () => {

        expect(component).toBeDefined();

    });

    it('tests method onClickOperation', async () => {
        const event = {
            action: Action.Edit,
            source: 'delivery-method',
            data: {}
        } as IEvent;

        component.onClickOperation(event);

        expect(reviewOrderServiceSpy.dispatchAction).toHaveBeenCalled();
    });

});
