import { animate, animateChild, query, state, style, transition, trigger } from '@angular/animations';

export const simpleFadeAnimation = trigger('simpleFadeAnimation', [
    state('in', style({ opacity: 1, transform: 'scale(1)' })),

    transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate(500)
    ]),

    transition(':leave',
        animate(500, style({ opacity: 0, transform: 'scale(0.95)' }))
    )
]);

export const fadeAnimation = trigger('fadeAnimation', [
    state('on', style({
        opacity: 1,
    })),
    state('off', style({
        opacity: 0,
    })),
    transition('on => off', [
        animate(200)
    ]),
    transition('off => on', [
        animate(200)
    ]),
]);

export const modalSlideDown = trigger('modalSlideDown', [

    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        animate(300)
    ]),

    transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate(300, style({ opacity: 0, transform: 'translateY(-100px)' }))
    ]),
]);

export const modalSlideDownSmall = trigger('modalSlideDownSmall', [

    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),
        animate(300)
    ]),

    transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate(300, style({ opacity: 0, transform: 'translateY(-50px)' }))
    ]),
]);
