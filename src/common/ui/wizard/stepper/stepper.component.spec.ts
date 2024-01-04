import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { Transition, StateService } from '@uirouter/angular';
import { TransitionService } from '@uirouter/core';
import { StepperComponent } from './stepper.component';

describe('component: stepper', () => {

    let fixture: ComponentFixture<StepperComponent>;
    let component: StepperComponent;

    let stateService: StateService;
    let transition: TransitionService;
    let deregister: () => void;

    beforeEach(async () => {

        stateService = {            
            current: { name: 'state0' }
        } as any;

        transition = jasmine.createSpyObj('Transition', ['onSuccess', 'to']);

        deregister = jasmine.createSpy('onSuccess');
        (transition.onSuccess as jasmine.Spy).and.returnValue(deregister);

        await TestBed
            .configureTestingModule({
                declarations: [
                    StepperComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: StateService, useFactory: () => stateService },
                    { provide: TransitionService, useFactory: () => transition }
                ]
            })
            .compileComponents();

            fixture = TestBed.createComponent(StepperComponent);
        component = fixture.debugElement.componentInstance;
      
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {

        it('can set hooks', () => {

            spyOn(component, 'tryTransition');
            component.ngOnInit();            
            expect(transition.onSuccess).toHaveBeenCalledWith({}, component.transitionHook);
            expect(component.tryTransition).toHaveBeenCalledWith(stateService.current);

        });
        
    });

    describe('ngOnDestroy', () => {

        it('can deregister hooks', () => {

            component.ngOnInit();
            component.ngOnDestroy();

            expect(deregister).toHaveBeenCalled();

        });
        
    });

    describe('transitionHook', () => {
        it('calls tryTransition', () => {
            spyOn(component, 'tryTransition');
            const toState = { name: 'state' };
            const trans = jasmine.createSpyObj('', ['to']);
            (trans.to as jasmine.Spy).and.returnValue(toState);

            component.transitionHook(trans);

            expect(component.tryTransition).toHaveBeenCalledWith(toState);
        });
    });

    describe('tryTransition', () => {

        it('ignores when stepMap is not defined', () => {

            const state = { name: 'state' };
            component.currentStepNum = 1;
            component.stepMap = undefined;
            component.ngOnInit();

            component.tryTransition(state);

            expect(component.currentStepNum).toBe(1);
        });

        it('sets the current step number from map', () => {

            const state = { name: 'state2' };
            component.currentStepNum = 1;
            component.stepMap = { state1: 1, state2: 2, state3: 3 };
            component.ngOnInit();

            component.tryTransition(state);

            expect(component.currentStepNum).toBe(2);

        });

        it('sets the current set number to zero if map is defined but state not found in map', () => {
            const state = { name: 'state4' };
            component.currentStepNum = 1;
            component.stepMap = { state1: 1, state2: 2, state3: 3 };
            component.ngOnInit();

            component.tryTransition(state);

            expect(component.currentStepNum).toBe(0);
        });

    });

    describe('stepClass', () => {
        [
            { currentStep: 0, newStep: 0, expectedCss: 'stepOn' },
            { currentStep: 0, newStep: 1, expectedCss: 'step' }
        ].forEach(({ currentStep, newStep, expectedCss }) => {
            it('should return css class based on equality', () => {
                component.currentStepNum = currentStep;

                const cssClass = component.stepClass(newStep);

                expect(cssClass).toEqual(expectedCss);
            });
        });
    });

    describe('currentStepName', () => {
        [
            { currentStep: 0, steps: [{ name: 'fakeStep1' }, { name: 'fakeStep2' }], expectedStepName: '' },
            { currentStep: 1, steps: [{ name: 'fakeStep1' }, { name: 'fakeStep2' }], expectedStepName: 'fakeStep1' },
            { currentStep: 3, steps: [{ name: 'fakeStep1' }, { name: 'fakeStep2' }], expectedStepName: '' }
        ].forEach(({ currentStep, steps, expectedStepName }) => {
            it('should return the current step name if valid index', () => {
                component.steps = steps;
                component.currentStepNum = currentStep;

                const stepName = component.currentStepName;

                expect(stepName).toEqual(expectedStepName);
            });
        });
    });

    describe('nextStepName', () => {
        [
            { currentStep: 0, steps: [{ name: 'fakeStep1' }, { name: 'fakeStep2' }], expectedStepName: 'fakeStep1' },
            { currentStep: 1, steps: [{ name: 'fakeStep1' }, { name: 'fakeStep2' }], expectedStepName: 'fakeStep2' },
            { currentStep: 2, steps: [{ name: 'fakeStep1' }, { name: 'fakeStep2' }], expectedStepName: '' }
        ].forEach(({ currentStep, steps, expectedStepName }) => {
            it('should return the current step name if valid index', () => {
                component.steps = steps;
                component.currentStepNum = currentStep;

                const stepName = component.nextStepName;

                expect(stepName).toEqual(expectedStepName);
            });
        });
    });
});
