import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DialogRef } from 'common/services';
import { ReplenishmentInfoModalComponent } from './replenishmentInfoModal.component';
import { IReplenishmentInfoInjectionValues } from './replenishmentInfoModal.interface';
import { TestingModule } from 'testing';
import { PipesModule } from 'pipes/module';

describe('ReplenishmentInfoModalComponent', () => {

    let fixture: ComponentFixture<ReplenishmentInfoModalComponent>;
    let component: ReplenishmentInfoModalComponent;
    let dialogRef: DialogRef<IReplenishmentInfoInjectionValues>;

    beforeEach(async () => {

        dialogRef = {
            data: {
                modalCms: {
                    ONE_TWO_VEHICLE_REBILL: '$10.00',
                    ONE_TWO_VEHICLE_LB: '$5.00'
                }
            } as IReplenishmentInfoInjectionValues,
            close: jasmine.createSpy('close') as () => void
        } as DialogRef<IReplenishmentInfoInjectionValues>;

        await TestBed
            .configureTestingModule({
                declarations: [
                    ReplenishmentInfoModalComponent
                ],
                imports: [TestingModule, PipesModule],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: DialogRef, useFactory: () => dialogRef }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(ReplenishmentInfoModalComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        it('should set replenishmentTable', () => {
            component.ngOnInit();

            expect(component.rebillTable).toEqual([
                {
                    numVehicles: '1-2 Vehicles',
                    rebillAmt: '$10.00',
                    rebillMin: '$5.00',
                },
                {
                    numVehicles: '3-4 Vehicles',
                    rebillAmt: '$40.00',
                    rebillMin: '$10.00',
                },
                {
                    numVehicles: '5-6 Vehicles',
                    rebillAmt: '$60.00',
                    rebillMin: '$15.00',
                },
                {
                    numVehicles: '7-8 Vehicles',
                    rebillAmt: '$80.00',
                    rebillMin: '$20.00',
                },
                {
                    numVehicles: 'Etc.',
                    rebillAmt: 'Max $600.00*',
                    rebillMin: 'Max $300.00**',
                }
            ]);
        });
    });

    describe('cancel', () => {
        it('should close the modal', () => {
            component.cancel();

            expect(dialogRef.close).toHaveBeenCalled();
        });
    });
});
