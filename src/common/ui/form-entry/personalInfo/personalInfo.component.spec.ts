import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { PersonalInfoComponent } from './personalInfo.component';
import { IPersonalInfo } from '../../../models';

import { FormsModule, NgForm, FormGroup } from '@angular/forms';
import { TestingModule, createFormWrap } from 'testing';
import { MatSelectModule } from '@angular/material/select';

describe('PersonalInfoComponent', () => {

    let fixture: ComponentFixture<PersonalInfoComponent>;
    let component: PersonalInfoComponent;

    beforeEach(async () => {

        await TestBed
            .configureTestingModule({
                declarations: [
                    PersonalInfoComponent
                ],
                imports: [FormsModule, TestingModule, MatSelectModule],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                ]
            })
            .compileComponents();


        const construct = await createFormWrap(PersonalInfoComponent, c => {
            c.personalInfo = {} as IPersonalInfo;
        });

        fixture = construct.fixture;
        component = construct.component;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });
});
