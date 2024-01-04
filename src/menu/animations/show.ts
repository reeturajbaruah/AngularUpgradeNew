import { animate, trigger, transition, style, state } from '@angular/animations';

export const showTrigger = trigger('showTrigger', [
    state('false', style({ height: '0px' })),
    state('true', style({})),
    transition('false => true', [
        animate('.2s linear')
    ]),
]);
