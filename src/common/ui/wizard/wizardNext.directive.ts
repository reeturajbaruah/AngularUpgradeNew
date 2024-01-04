import { ElementRef, Directive, OnInit } from '@angular/core';
import { WizardComponent } from './wizard.component';
import { WizardStateResolverFactory } from './wizardStateResolver.factory';

@Directive({
    selector: '[wizard-next]'
})
export class WizardNextDirective implements OnInit {
    constructor(
        private elm: ElementRef,
        private stateResolverFactory: WizardStateResolverFactory,
        private component: WizardComponent) {
    }

    ngOnInit() {
        const service = this.stateResolverFactory.getService();
        if (service.getNextStateTemplate(this.component.input)) {
            const nativeElm = this.elm.nativeElement as HTMLElement;
            nativeElm.innerText = service.getNextStateTemplate(this.component.input);
        }
    }
}
