import { } from 'jasmine';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { CommonModule } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';
import { FormsModule } from '@angular/forms';

import {
    CommonModule as HctraCommonModule
} from 'common/module';

import { AddressDisplayComponent } from './addressDisplay.component';

describe('address-display component', () => {

    let fixture: ComponentFixture<AddressDisplayComponent>;
    let component: AddressDisplayComponent;

    beforeEach((() => {
        
        TestBed
            .configureTestingModule({
                declarations: [AddressDisplayComponent],
                imports: [FormsModule]
            })
            .compileComponents();

        fixture = TestBed.createComponent(AddressDisplayComponent);
        component = fixture.debugElement.componentInstance;

        component.address = {
            country: 'USA',
            address1: 'address line 1',
            address2: 'address line 2',
            address3: 'address line 3',
            address4: 'address line 4',
            city: 'Houston',
            plus4: '1234',
            state: 'TX',
            zip: '12345',
            international: false
        };
        component.displayCountry = false;
              
        fixture.detectChanges();
    }));

    //no non-trival tests?

    describe('showAddress', () => {
        it('is FALSE if variable missing address1', async () => {
            component.address.address1 = undefined;
            expect(component.showAddress).toBe(false);
        });

        it('is FALSE if variable missing city', async () => {
            component.address.city = undefined;
            expect(component.showAddress).toBe(false);
        });

        it('is FALSE if variable missing country', async () => {
            component.address.country = undefined;
            expect(component.showAddress).toBe(false);
        });

        it('is TRUE if variable have all address info', async () => {
            expect(component.showAddress).toBe(true);
        });
    });
});
