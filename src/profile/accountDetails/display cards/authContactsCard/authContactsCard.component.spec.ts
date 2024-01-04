import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { AuthContactsCardComponent } from './authContactsCard.component';

describe('component: AuthContactsCard', () => {

    let fixture: ComponentFixture<AuthContactsCardComponent>;
    let component: AuthContactsCardComponent;
    let state: StateService;

    beforeEach(async () => {

        state = jasmine.createSpyObj('state', ['go']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    AuthContactsCardComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: StateService, useFactory: () => state }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(AuthContactsCardComponent);
        component = fixture.debugElement.componentInstance;

        component.authContactsNames = [
            'Angela Awesome',
            'The Best',
            'First Last',
            'A Name'
        ];
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('editAuthorizedContact', () => {

        it('should call state.go with profileStateNames.UpdateAuthorizedContacts and state params', async () => {
            component.authContactLimit = 20;
            component.authContacts = [{
                firstName: 'john',
                lastName: 'smith',
                accessCode: '123456',
                contactId: '999999'
            }];

            const expectedParams = {
                authContactLimit: 20,
                authContacts: [{
                    firstName: 'john',
                    lastName: 'smith',
                    accessCode: '123456',
                    contactId: '999999'
                }]
            };

            await component.editAuthorizedContact();

            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith('UpdateAuthorizedContact', expectedParams);
        });
    });

    describe('ngOnInit', () => {

        it('should set totalContacts to length of auth contacts list', async () => {
            await component.ngOnInit();

            expect(component.totalContacts).toBe(4);
        });

        it('should truncate contacts if there are more than 3', async () => {
            await component.ngOnInit();

            expect(component.totalContacts).toBe(4);
            expect(component.authContactsNames.length).toBe(3);
            expect(component.authContactsNames).toEqual([
                'Angela Awesome',
                'The Best',
                'First Last',
            ]);
        });

        it('should not truncate contacts if there are 3 or less', async () => {
            component.authContactsNames = [
                'Angela Awesome',
                'The Best'
            ];

            await component.ngOnInit();

            expect(component.totalContacts).toBe(2);
            expect(component.authContactsNames.length).toBe(2);
            expect(component.authContactsNames).toEqual([
                'Angela Awesome',
                'The Best'
            ]);
        });
    });
});
