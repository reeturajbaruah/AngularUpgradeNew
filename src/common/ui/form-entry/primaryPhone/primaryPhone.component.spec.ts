import { FormsModule, NgForm } from '@angular/forms';
import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { PrimaryPhoneComponent } from './primaryPhone.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('primaryPhone Component', () => {
    let fixture: ComponentFixture<PrimaryPhoneComponent>;
    let component: PrimaryPhoneComponent;
    
    beforeEach(async () => {
        await TestBed
            .configureTestingModule({
                declarations: [PrimaryPhoneComponent],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule, MatDialogModule],
                providers: [
                    NgForm
                ]
            })
            .compileComponents();
        fixture = TestBed.createComponent(PrimaryPhoneComponent);
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


    it('updateValue shoud update value if condition match without Regex', async () => {
        component.primaryPhone = '123456';
        component.updateValue();
        //Assert
        expect(component.primaryPhone).toEqual('123456');
    });

    it('updateValue shoud update value if condition match With Regex', async () => {
        component.primaryPhone = '1234567890';
        component.updateValue();
        //Assert
        expect(component.primaryPhone).toEqual('123-456-7890');
    });
});
