import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewEncapsulation, Input, HostBinding } from '@angular/core';
import { wait } from 'common/utilities';

const delayTime = 300;

@Component({
    selector: 'tool-tip',
    templateUrl: './toolTip.html',
    styleUrls: ['./toolTip.less'],
    encapsulation: ViewEncapsulation.None,
    animations: [trigger('fade', [
        state('true', style({ opacity: 1 })),
        state('false', style({ opacity: 0 })),
        transition('false => true', [
            style({ opacity: 0 }),
            animate(delayTime, style({ opacity: 1 }))
        ]),
        transition('true => false', [
            style({ opacity: 1 }),
            animate(delayTime, style({ opacity: 0 }))
        ])
    ])]
})
export class ToolTipComponent {

    @Input() stayOpenOnHover: boolean;
    @HostBinding('class.useOverlay') @Input() useOverlay?: boolean;
    
    public isVisible = false;
    public overlayPanelClass: string;
    public panelOpen = false;
    
    constructor() {          
    }

    public async close() {
        if (!this.panelOpen) {
            return;
        }

        this.isVisible = false;
        await wait(delayTime);
        this.panelOpen = false;
    }

    public async open() {
        if (this.panelOpen) {
            return;
        }

        this.panelOpen = true;
        await wait(0);
        this.isVisible = true;
    }
}
