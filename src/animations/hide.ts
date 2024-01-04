import { animate, trigger, transition, style, state, keyframes } from '@angular/animations';

export const hideTrigger = trigger('hide', [
    state('false', style({ display: 'block', opacity: 1 })),
    state('true', style({ display: 'none', opacity: 0 })),
    transition('true => false', animate('700ms ease-in', keyframes([
        style({ display: 'block', offset: 0, opacity: 0 }),
        style({ display: 'block', offset: 0.6, opacity: 0.3 }),
        style({ display: 'block', offset: 1, opacity: 1 })
    ]))),
]);
