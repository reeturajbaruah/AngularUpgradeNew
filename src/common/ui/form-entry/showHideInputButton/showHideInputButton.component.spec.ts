import { } from 'jasmine';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ShowHideInputButtonComponent } from './ShowHideInputButton.component';

describe('show-hide-input-button component', () => {

    let fixture: ComponentFixture<any>;
    let component: ShowHideInputButtonComponent;

    beforeEach(async () => {


        await TestBed
            .configureTestingModule({
                declarations: [
                    ShowHideInputButtonComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: []
            })
            .compileComponents();

        fixture = TestBed.createComponent(ShowHideInputButtonComponent);
        component = fixture.debugElement.componentInstance;

    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('toggleShowHide', () => {

        [true, false].forEach(show => {
            it('should toggle component.showField to be opposite boolean value', async () => {
                //Assemble
                component.showField = show;

                //Act
                component.toggleShowHide();

                //Assert
                expect(component.showField).toBe(!show);
            });

            it('should call emit() with component.showField', async () => {
                //Assemble
                component.showField = show;
                spyOn(component.showFieldChange, 'emit').and.returnValue(null);

                //Act
                component.toggleShowHide();

                //Assert
                expect(component.showFieldChange.emit).toHaveBeenCalledTimes(1);
            });
        });
    });
});
