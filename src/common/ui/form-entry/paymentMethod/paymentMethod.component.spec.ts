import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentMethodComponent } from './paymentMethod.component';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

describe('PaymentMethodComponent', () => {
    let component: PaymentMethodComponent;
    let fixture: ComponentFixture<PaymentMethodComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule, MatSelectModule],
            declarations: [PaymentMethodComponent],
            providers: [NgForm]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PaymentMethodComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('updateValue should call emit', () => {
        spyOn(component.billingTypeChange, 'emit');
        component.updateValue();

        expect(component.billingTypeChange.emit).toHaveBeenCalled();
    });
});