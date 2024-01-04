import { Component, Input } from '@angular/core';


@Component({
    selector: 'page-filled-container',
    templateUrl: './pageFilled.html',
    styleUrls: ['./pageFilled.less']
})
export class PageFilledContainerComponent {

    constructor() { }

    @Input() hasGutter = true;
}
