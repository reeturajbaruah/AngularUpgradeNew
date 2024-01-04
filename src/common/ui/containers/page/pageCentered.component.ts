import { Component, Input } from '@angular/core';


@Component({
    selector: 'page-centered-container',
    templateUrl: './pageCentered.html',
    styleUrls: ['./pageCentered.less']
})
export class PageCenteredContainerComponent {

    constructor() { }

    @Input() hasGutter = true;
    @Input() hasAlternateBackgroundColor = false;

}
