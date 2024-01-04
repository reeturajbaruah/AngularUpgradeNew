import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { AuthorizedContactModalComponent, InjectionValues } from './authorizedContactModal.component';
import { DialogRef } from 'common/services';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthorizedContact, AuthorizedContactDetails } from '../../services';

describe('AuthorizedContactModalComponent tests', () => {
    let fixture: ComponentFixture<AuthorizedContactModalComponent>;
    let component: AuthorizedContactModalComponent;
    let dialogRef: DialogRef<InjectionValues>;
    beforeEach(async () => {
        dialogRef = jasmine.createSpyObj('dialogRef', ['close']);
        (dialogRef as any).data = {
            cmsContent: {
                header: 'header',
                TOOL_TIP_INFO: null
            },
            contactInfo: {
                accessCode: '12345',
                firstName: 'john',
                lastName: 'smith',
                contactId: '123456',
                remove: false
            },
            currentContacts: {
                authorizedContacts: [
                    {
                        firstName: 'first',
                        lastName: 'last',
                        accessCode: 'nocode',
                        contactId: '1'
                    },
                    {
                        firstName: 'frst',
                        lastName: 'lst',
                        accessCode: 'nocode',
                        contactId: '2'
                    }
                ]
            } as AuthorizedContactDetails
        };
        await TestBed
            .configureTestingModule({
                declarations: [
                    AuthorizedContactModalComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule],
                providers: [
                    { provide: DialogRef, useFactory: () => dialogRef }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(AuthorizedContactModalComponent);
        component = fixture.debugElement.componentInstance;


    });

    describe('canary', () => {
        it('should return true', () => {
            expect(true).toBeTruthy();
        });
    });

    describe('onInit', () => {
        it('should set component data', () => {
            component.ngOnInit();

            expect(component.data).toEqual({
                cmsContent: {
                    header: 'header',
                    TOOL_TIP_INFO: null
                },
                contactInfo: {
                    accessCode: '12345',
                    firstName: 'john',
                    lastName: 'smith',
                    contactId: '123456',
                    remove: false
                },
                currentContacts: {
                    authorizedContacts: [
                        {
                            firstName: 'first',
                            lastName: 'last',
                            accessCode: 'nocode',
                            contactId: '1'
                        },
                        {
                            firstName: 'frst',
                            lastName: 'lst',
                            accessCode: 'nocode',
                            contactId: '2'
                        }
                    ]
                } as AuthorizedContactDetails
            });
        });
    });

    describe('close', () => {
        it('should close dialogref', () => {
            component.close();

            expect(dialogRef.close).toHaveBeenCalledTimes(1);
        });
    });

    describe('submit', () => {
        it('should not call close if form not valid', () => {
            component.submit({ valid: false } as NgForm);

            expect(dialogRef.close).not.toHaveBeenCalled();
            expect(component.duplicate).toBeFalsy();
        });

        it('should set duplicate as false if form is valid and contact didnt change', () => {
            component.data.contactInfo = {
                accessCode: '12345',
                firstName: 'JOHN',
                lastName: 'SMITH',
                contactId: '123456',
                remove: false
            };
            component.originalContact = {
                accessCode: '12345',
                firstName: 'JOHN',
                lastName: 'SMITH',
                contactId: '123456'
            };

            component.submit({ valid: true } as NgForm);

            expect(dialogRef.close).toHaveBeenCalled();
            expect(component.duplicate).toBeFalsy();
        });

        it('should set duplicate as false if form is valid and contact isnt duplciate', () => {
            component.data.currentContacts = {
                authorizedContacts: [
                    {
                        firstName: 'FIRST',
                        lastName: 'LAST',
                        accessCode: 'nocode',
                        contactId: '1'
                    },{
                        firstName: 'FRST',
                        lastName: 'LST',
                        accessCode: 'nocode',
                        contactId: '2'
                    }
                ]
            } as AuthorizedContactDetails;

            component.data.contactInfo = {
                accessCode: '12345',
                firstName: 'JOHN',
                lastName: 'SMITH',
                contactId: '123456',
                remove: false
            };
            component.originalContact = {
                accessCode: '12345',
                firstName: 'FIRST',
                lastName: 'SMITH',
                contactId: '123456'
            };

            component.submit({ valid: true } as NgForm);

            expect(component.duplicate).toBeFalsy();
            expect(dialogRef.close).toHaveBeenCalled();
        });

        it('should set duplicate as true if form is valid and contact is duplciate and not close', () => {
            component.data.currentContacts = {
                authorizedContacts: [
                    {
                        firstName: 'first',
                        lastName: 'last',
                        accessCode: 'nocode',
                        contactId: '1'
                    }, {
                        accessCode: '12345',
                        firstName: 'JOHN',
                        lastName: 'SMITH',
                        contactId: '123456'
                    }
                ]
            } as AuthorizedContactDetails;

            component.data.contactInfo = {
                accessCode: '12345',
                firstName: 'JOHN',
                lastName: 'SMITH',
                contactId: '123456',
                remove: false
            };
            component.originalContact = {
                accessCode: '12345',
                firstName: 'first',
                lastName: 'smith',
                contactId: '123456'
            };

            component.submit({ valid: true } as NgForm);

            expect(dialogRef.close).not.toHaveBeenCalled();
            expect(component.duplicate).toBeTruthy();
        });
    });
});
