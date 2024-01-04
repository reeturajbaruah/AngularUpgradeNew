import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { AuthContactComponent } from './authContact.component';

describe('AuthContactComponent tests', () => {
    let fixture: ComponentFixture<AuthContactComponent>;
    let component: AuthContactComponent;
    beforeEach(async () => {
        await TestBed
            .configureTestingModule({
                declarations: [
                    AuthContactComponent
                ],
                schemas: [NO_ERRORS_SCHEMA]
            })
            .compileComponents();


        fixture = TestBed.createComponent(AuthContactComponent);
        component = fixture.debugElement.componentInstance;

        component.contactInfo = {
            firstName: 'John',
            lastName: 'Smith',
            contactId: '12345',
            accessCode: '123456',
            remove: false
        };
    });

    describe('canary', () => {
        it('should return true', () => {
            expect(true).toBeTruthy();
        });
    });

    describe('toggleRemoveContact', () => {
        it('should emit contactId', () => {
            spyOn(component.removeContact, 'emit');

            component.toggleRemoveContact();

            expect(component.removeContact.emit).toHaveBeenCalledOnceWith();
        });
    });

    describe('openAuthContact', () => {
        it('should emit contactInfo', () => {
            spyOn(component.editContact, 'emit');

            component.openAuthContact();

            expect(component.editContact.emit).toHaveBeenCalledTimes(1);
        });
    });
});
