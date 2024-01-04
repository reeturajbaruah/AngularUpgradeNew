import { Component, Input } from '@angular/core';


@Component({
    selector: 'card-dash-container',
    templateUrl: './cardDash.html',
    styleUrls: ['./cardDash.less']
})
export class CardDashContainerComponent {

    constructor() { }

    @Input() alignment?: string;
    @Input() height?: string;
    @Input() hasMargin? = true;
    @Input() hasNoExtented = false;
}
