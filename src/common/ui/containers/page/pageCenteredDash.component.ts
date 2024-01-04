import { Component, Input } from '@angular/core';

@Component({
    selector: 'page-centered-dash-container',
    templateUrl: './pageCenteredDash.html',
    styleUrls: ['./pageCenteredDash.less']
})
export class PageCenteredDashContainerComponent {

    constructor() { }

    @Input() hasGutter = true;

}
