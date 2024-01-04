import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { defer } from 'rxjs';
import { BillingAddressComponent } from './billingAddress.component';

describe('component: billing address', () => {

    let fixture: ComponentFixture<BillingAddressComponent>;
    let component: BillingAddressComponent;

    beforeEach(async () => {
        await TestBed
            .configureTestingModule({
                declarations: [
                    BillingAddressComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
            })
            .compileComponents();


        fixture = TestBed.createComponent(BillingAddressComponent);
        component = fixture.debugElement.componentInstance;

    });

    it('defines billing address component', () => {
        component.header = 'Test Header';
        expect(component).toBeDefined();
        expect(component.header).toEqual('Test Header');
    });

    it('should return default header', () => {
        component.header = null;

        expect(component.header).toEqual(component.defaultHeader);
    });
});