import { Component, Input } from '@angular/core';


@Component({
    selector: 'card-container',
    templateUrl: './card.html',
    styleUrls: ['./card.less']
})
export class CardContainerComponent {

    constructor() { }

    @Input() alignment?: string;
}
