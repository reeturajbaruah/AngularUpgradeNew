import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { PersonalInfoDisplayComponent } from './personalInfoDisplay.component';

describe('PersonalInfoDisplayComponent', () => {

    let fixture: ComponentFixture<PersonalInfoDisplayComponent>;
    let component: PersonalInfoDisplayComponent;

    beforeEach(async () => {

        await TestBed
            .configureTestingModule({
                declarations: [
                    PersonalInfoDisplayComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(PersonalInfoDisplayComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });
});
