import { animate, trigger, transition, style, state, keyframes } from '@angular/animations';

const uncollapsedStyle = { height: '*', display: 'block', overflow: 'visible' };
const collapsedStyle = { height: '0px', display: 'none', overflow: 'hidden' };

export const collapseTrigger = trigger('collapse', [
    state('false', style({ ...uncollapsedStyle })),
    state('true', style({ ...collapsedStyle })),
    transition('true => false', animate('300ms ease-in', keyframes([
        style({ display: 'block', offset: 0 }),
        style({ display: 'block', overflow: 'hidden', height: '*', offset: 1 })
    ]))),
    transition('false => true', animate('200ms ease-in', keyframes([
        style({ overflow: 'hidden', offset: 0, opacity: 0.3 }),
        style({ height: '0px', display: 'none', overflow: 'hidden', offset: 1, opacity: 0 })
    ])))
]);
