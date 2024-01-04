import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IEzTagResponse } from 'vehicles/interfaces';
import { ToasterService } from 'common/services';
import { VehicleCartBase } from './vehicleCartBase';
import { VehicleModalCms } from 'vehicles/shared';

//It's difficult to test an abstract class, so here is a workaround
@Component({
    selector: 'test-class',
})
class TestClassComponent extends VehicleCartBase {
    constructor(protected toasterService: ToasterService) {
        super(toasterService);
    }
}

describe('VehicleCartBase', () => {
    let fixture: ComponentFixture<TestClassComponent>;
    let component: TestClassComponent;
    let frame: TestClassComponent;
    let toasterService: jasmine.SpyObj<ToasterService>;

    beforeEach(async () => {
        frame = {} as any;
        toasterService = jasmine.createSpyObj('toasterService', ['show']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    TestClassComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: ToasterService, useFactory: () => toasterService },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(TestClassComponent);
        component = fixture.debugElement.componentInstance;

        component.addAdditionalTagCms = { ErrorPlateExistsInCart: 'error' } as VehicleModalCms;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('checkIfLicExistsInCart', () => {

        it('returns true and shows toaster if both licence plate and state are already in the cart', async () => {
            component.cartTags = ([
                {
                    licPlate: 'PLATE2',
                    licState: 'TX',
                } as IEzTagResponse,
                {
                    licPlate: 'PLATE1',
                    licState: 'TX',
                } as IEzTagResponse
            ]);

            const ret = component.checkIfLicExistsInCart('PLATE2', 'TX');

            expect(ret).toBeTrue();
            expect(toasterService.show).toHaveBeenCalled();
        });

        it('returns false if licence plate or state are not in the cart', async () => {
            component.cartTags = ([
                {
                    licPlate: 'PLATE1',
                    licState: 'TX',
                } as IEzTagResponse,
                {
                    licPlate: 'PLATE2',
                    licState: 'TN',
                } as IEzTagResponse
            ]);

            const ret = component.checkIfLicExistsInCart('PLATE2', 'TX');

            expect(ret).toBeFalse();
            expect(toasterService.show).not.toHaveBeenCalled();
        });
    });

});
