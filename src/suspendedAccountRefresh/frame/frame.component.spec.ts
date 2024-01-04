import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';

import { WindowRef } from 'common/providers';

import { CommonModule } from 'common/module';
import { FormsModule } from '@angular/forms';
import { FrameComponent } from './frame.component';

import { stateNames } from '../constants';
import { CurrentUserService } from 'common/services';

describe('component: suspended-frame', () => {

    let fixture: ComponentFixture<FrameComponent>;
    let component: FrameComponent;
    let mockWindow: Window;
    let currentUserService: CurrentUserService;

    beforeEach(async () => {

        mockWindow = jasmine.createSpyObj('window', ['scrollTo']);
        currentUserService = jasmine.createSpyObj('currentuserService', ['getCurrentUser']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    FrameComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: WindowRef, useFactory: () => mockWindow },
                    { provide: CurrentUserService, useFactory: () => currentUserService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(FrameComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {

        it('sets stepper correctly with violations', async () => {

            component.hasViolations = true;

            component.baseCmsContent = {
                confirmStep: 'confirm',
                paymentStep: 'payment', 
                receiptStep: 'receipt',
                requiredPaymentStep: 'required'
            };

            await component.ngOnInit();

            expect(component.steps).toEqual([
                { name: 'payment', background: 'secondary' },
                { name: 'confirm', background: 'secondary' },
                { name: 'receipt', background: 'secondary' }
            ]);

            expect(component.stepMap).toEqual({
                [stateNames.Payment]: 1,
                [stateNames.Confirm]: 2,
                [stateNames.Receipt]: 3
            });

        });

        it('sets stepper correctly without violations', async () => {

            component.hasViolations = false;

            component.baseCmsContent = {
                confirmStep: 'confirm',
                paymentStep: 'payment', 
                receiptStep: 'receipt',
                requiredPaymentStep: 'required'
            };

            await component.ngOnInit();

            expect(component.steps).toEqual([
                { name: 'required', background: 'secondary'},
                { name: 'payment', background: 'secondary' },
                { name: 'confirm', background: 'secondary' },
                { name: 'receipt', background: 'secondary' }
            ]);

            expect(component.stepMap).toEqual({
                [stateNames.RequiredPayment]: 1,
                [stateNames.Payment]: 2,
                [stateNames.Confirm]: 3,
                [stateNames.Receipt]: 4
            });
        });
    });

});
