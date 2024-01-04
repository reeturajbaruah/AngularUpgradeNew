import { FormsModule, NgForm } from '@angular/forms';
import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { EmailAddressComponent } from './emailAddress.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('primaryPhone Component', () => {
    let fixture: ComponentFixture<EmailAddressComponent>;
    let component: EmailAddressComponent;

    beforeEach(async () => {
        await TestBed
            .configureTestingModule({
                declarations: [EmailAddressComponent],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule, MatDialogModule],
                providers: [
                    NgForm
                ]
            })
            .compileComponents();
        fixture = TestBed.createComponent(EmailAddressComponent);
        component = fixture.debugElement.componentInstance;

    });

    describe('canary', () => {
        it('should pass', async () => {
            expect(true).toBe(true);
        });
    });

    it('form shoud return parent form value FLASE', async () => {
        component.form = {
            value: {
                name: 'Hello',
                category: 'World'
            },
            submitted: false
        } as NgForm;
        //Act
        const result = component.submitted;

        //Assert
        expect(result).toEqual(false);
    });

    it('form shoud return parent form value TRUE', async () => {
        component.form = {
            value: {
                name: 'Hello',
                category: 'World'
            },
            submitted: true
        } as NgForm;
        //Act
        const result = component.submitted;

        //Assert
        expect(result).toEqual(true);
    });
});
