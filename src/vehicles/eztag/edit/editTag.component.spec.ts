import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { EditTagComponent } from './editTag.component';
import { DialogRef } from 'common/services';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { IEditTagInjectedValues } from 'vehicles/shared';


describe('component: EditTagComponent', () => {

    let fixture: ComponentFixture<EditTagComponent>;
    let component: EditTagComponent;

    let dialogRef: DialogRef<IEditTagInjectedValues>;
    let data: IEditTagInjectedValues;

    beforeEach(async () => {

        dialogRef = jasmine.createSpyObj('dialogRef', ['close'], ['data']);

        (Object.getOwnPropertyDescriptor(dialogRef, 'data').get as jasmine.Spy).and.callFake(()=> data);

        await TestBed
            .configureTestingModule({
                declarations: [
                    EditTagComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule, MatSelectModule],
                providers: [
                    { provide: DialogRef, useFactory: () => dialogRef }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(EditTagComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });

    describe('exitModal', () => {

        [true, false].forEach(saveTag => {

            it(`passes ${saveTag} to modal close`, () => {

                data = {
                    cmsAddTagVehicleInfo: { Title:'' },
                    cmsModalValues: {} as any,
                    showStatus: false,
                    statesList: [],
                    tag: {} as any
                };

                component.exitModal(saveTag);

                expect(dialogRef.close).toHaveBeenCalledWith({
                    ...data,
                    saveTag
                });

            });

        });

    });

    describe('isActive', () => {

        [
            [true, 'A'],
            [false, 'I']
        ].forEach(([isActive, acctTagStatus]: [boolean, string]) => {

            it(`is ${isActive} when tagStatus is ${acctTagStatus}`, () => {

                data = {
                    tag: {
                        acctTagStatus
                    }
                } as any;

                expect(component.isActive).toBe(isActive);

            });

        });

    });

    describe('properties', () => {
        it('should get tag', () => {
            data = {
                tag: {}
            } as any;

            const tag = component.tag;

            expect(tag).toEqual(data.tag);
        });

        it('should get showStatus', () => {
            data = {
                showStatus: true
            } as any;

            const showStatus = component.showStatus;

            expect(showStatus).toEqual(data.showStatus);
        });

        it('should get statesList', () => {
            data = {
                usStates: []
            } as any;

            const usStates = component.usStates;

            expect(usStates).toEqual(data.statesList);
        });

        it('should get cmsAddTagVehicleInfo', () => {
            data = {
                cmsAddTagVehicleInfo: {}
            } as any;

            const cmsAddTagVehicleInfo = component.editVehicleCmsContent;

            expect(cmsAddTagVehicleInfo).toEqual(data.cmsAddTagVehicleInfo);
        });

        it('should get cmsModalValues', () => {
            data = {
                cmsModalValues: {}
            } as any;

            const cmsModalValues = component.cmsModalContent;

            expect(cmsModalValues).toEqual(data.cmsModalValues);
        });

        it('should get isActive', () => {
            data = {
                tag: {
                    acctTagStatus: ''
                }
            } as any;

            const isActive = component.isActive;

            expect(isActive).toBeFalse();
        });
    });
});
