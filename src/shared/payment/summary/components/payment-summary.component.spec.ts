import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiteCoreItem } from 'cms/cms.module';
import { DialogService } from 'common/services';
import { PipesModule } from 'pipes/module';
import { IPaymentDueInfo, IPaymentSummary } from '../models';
import { PaymentSummaryComponent } from './payment-summary.component';


describe('payment summary component', () => {

    let fixture: ComponentFixture<PaymentSummaryComponent>;
    let component: PaymentSummaryComponent;
    let dialogServiceSpy: jasmine.SpyObj<DialogService>;

    let data = {} as IPaymentSummary;

    beforeEach(async () => {

        dialogServiceSpy = jasmine.createSpyObj('dialogService', ['openSliderCentered']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    PaymentSummaryComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: DialogService, useFactory: () => dialogServiceSpy }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(PaymentSummaryComponent);
        component = fixture.debugElement.componentInstance;

        data = {
            header: 'test payment summary',
            paymentContext: 'test details',
            paymentDueInfo: {} as IPaymentDueInfo,
            replenishmentAmt: {
                link: {
                    linkDesc: 'test replenishment link',
                    onClickContent: {} as SiteCoreItem
                }
            },
            tagInfo: {
                display: true,
                contextDesc: 'test tag info desc',
                link: {
                    linkDesc: 'test tag info link',
                    onClickContent: {} as SiteCoreItem
                },
                motorcycleText:'test'
            }
        };

    });

    it('initialized the component', async () => {

        expect(component).toBeDefined();

    });

    it('tests method onClickReplenishmentLink', async () => {

        component.data = data;
        await component.onClickReplenishmentLink();
        expect(dialogServiceSpy.openSliderCentered).toHaveBeenCalled();

    });

    it('tests method onClickTagInfo', async () => {

        component.data = data;
        await component.onClickTagInfo();
        expect(dialogServiceSpy.openSliderCentered).toHaveBeenCalled();


    });

});