import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { SetupYearlyPageResponse } from 'accountActivity/interfaces';
import { WebApisService } from 'accountActivity/services';
import { } from 'jasmine';
import { YearTransitionDropdownComponent } from './yearTransitionDropdown.component';

describe('component: yearTransitionDropdownComponent', () => {

    let fixture: ComponentFixture<YearTransitionDropdownComponent>;
    let component: YearTransitionDropdownComponent;
    let state: StateService;

    beforeEach(async () => {
        state = jasmine.createSpyObj('state', ['go']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    YearTransitionDropdownComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: StateService, useFactory: () => state }
                ]
            })
            .compileComponents();
        //service = TestBed.inject(WebApisService);
        fixture = TestBed.createComponent(YearTransitionDropdownComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });


    ['a'].forEach(event => {

        it(`should emit choiceSelectedsChange`, () => {

            //Assemble
            component.selectedYear = event;
            spyOn(component.yearTransitionChange, 'emit').and.returnValue(null);

            //Act
            component.updateValue();

            //Assert
            expect(component.yearTransitionChange.emit).toHaveBeenCalledTimes(1);
        });
    });

});
