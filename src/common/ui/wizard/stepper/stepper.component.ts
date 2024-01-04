import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { StateDeclaration, Transition, StateService, TransitionService } from '@uirouter/angular';

export interface StepperStep {
    name: string;
    background?: 'primary' | 'secondary' | 'ternary';
    isGreyed?: boolean;
}

@Component({
    selector: 'stepper',
    templateUrl: './stepper.html',
    styleUrls: ['./stepper.less']
})
export class StepperComponent implements OnInit, OnDestroy {
    constructor(
        private stateService: StateService,
        private transition: TransitionService
    ) { }

    @Input() steps: StepperStep[];
    /**
     * This step tracker is 1-based indexed so the first step is 1, NOT 0
     */
    @Input() currentStepNum: number;

    @Input() stepMap: { [key: string]: number };

    private deregisterTransitionHook: () => void;

    ngOnInit() {
        this.deregisterTransitionHook = this.transition.onSuccess({}, this.transitionHook) as (() => void);
        this.tryTransition(this.stateService.current);
    }

    ngOnDestroy() {
        if (this.deregisterTransitionHook) {
            this.deregisterTransitionHook();
        }
    }

    public transitionHook = (transition: Transition) => {
        this.tryTransition(transition.to());
    };

    public tryTransition(state: StateDeclaration) {
        if (this.stepMap && state) {
            this.currentStepNum = this.stepMap[state.name]
                ? this.stepMap[state.name]
                : 0;
        }
    }

    public stepClass(step: number) {
        return (this.currentStepNum === step) ? 'stepOn' : 'step';
    }

    public get currentStepName() {
        return this.getStepName(this.currentStepNum - 1);
    }

    public get nextStepName() {
        return this.getStepName(this.currentStepNum);
    }


    private getStepName(index: number) {
        return (index >= 0 && index < this.steps.length)
            ? this.steps[index].name
            : '';
    }

}
