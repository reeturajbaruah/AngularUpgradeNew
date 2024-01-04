import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { UpdateMailingAddressCardComponent } from './updateMailingAddressCard.component';

describe('component: UpdateMailingAddressCard', () => {

    let fixture: ComponentFixture<UpdateMailingAddressCardComponent>;
    let component: UpdateMailingAddressCardComponent;
    let state: StateService;

    beforeEach(async () => {
        state = jasmine.createSpyObj('state', ['go']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    UpdateMailingAddressCardComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: StateService, useFactory: () => state }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(UpdateMailingAddressCardComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('updateMailingInfo', () => {

        it('should call state.go with profileStateNames.UpdateMailingAddress', async () => {
            await component.updateMailingInfo();

            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith('UpdateMailingAddress', Object({ personalInfo: Object({}) }));
        });
    });
});
