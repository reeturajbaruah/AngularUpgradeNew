import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DialogRef } from 'common/services';
import { EditVehicleModalComponent, EditVehicleInjectionValues } from './editVehicleModal.component';
import { FormsModule, NgForm, FormGroup } from '@angular/forms';
import { TestingModule, createFormWrap } from 'testing';
import { MatSelectModule } from '@angular/material/select';

describe('EditVehicleModalComponent', () => {

    let fixture: ComponentFixture<EditVehicleModalComponent>;
    let component: EditVehicleModalComponent;
    let dialogRef: DialogRef<EditVehicleInjectionValues>;

    beforeEach(async () => {

        dialogRef = {
            data: {} as EditVehicleInjectionValues,
            close: jasmine.createSpy('close') as () => void
        } as DialogRef<EditVehicleInjectionValues>;

        await TestBed
            .configureTestingModule({
                declarations: [
                    EditVehicleModalComponent
                ],
                imports: [FormsModule, TestingModule, MatSelectModule],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: DialogRef, useFactory: () => dialogRef }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(EditVehicleModalComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('modal methods', () => {

        it('should close dialog on cancel', () => {

            component.cancel();

            expect(dialogRef.close).toHaveBeenCalled();
        });

        it('should close dialog on submit', () => {

            component.submit();

            expect(dialogRef.close).toHaveBeenCalledWith(dialogRef.data);
        });

    });
});
