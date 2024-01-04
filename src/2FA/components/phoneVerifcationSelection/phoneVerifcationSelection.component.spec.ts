import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PhoneVerifcationSelectionComponent } from './phoneVerifcationSelection.component';
import { PipesModule } from 'pipes/module';

describe('PhoneVerifcationSelectionComponent', () => {

    let fixture: ComponentFixture<PhoneVerifcationSelectionComponent>;
    let component: PhoneVerifcationSelectionComponent;

    beforeEach(async () => {

        await TestBed
            .configureTestingModule({
                declarations: [
                    PhoneVerifcationSelectionComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: []
            })
            .compileComponents();

        fixture = TestBed.createComponent(PhoneVerifcationSelectionComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        [
            { isText: true, expectedClass: 'text' },
            { isText: false, expectedClass: 'call' },
        ]
        .forEach(testCase => {
            it(`should set the selected class to ${testCase.expectedClass}`, async () => {
                //Assemble
                component.isText = testCase.isText;

                //Act
                component.ngOnInit();

                //Assert
                expect(component.selectedClass).toBe(testCase.expectedClass);
            });
        });
    });

    describe('selectionChange', () => {
        [
            { isText: true, expectedClass: 'text' },
            { isText: false, expectedClass: 'call' },
        ]
            .forEach(testCase => {
                it(`should set the selected class to ${testCase.expectedClass} and emit`, async () => {
                    //Assemble
                    component.isText = true;
                    spyOn(component.isTextChange, 'emit').and.returnValue(null);

                    //Act
                    component.selectionChange(testCase.expectedClass);

                    //Assert
                    expect(component.selectedClass).toBe(testCase.expectedClass);
                    expect(component.isText).toBe(testCase.isText);
                    expect(component.isTextChange.emit).toHaveBeenCalled();
                });
            });
    });
});
