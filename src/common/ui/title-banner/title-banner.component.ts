import { Component, Input } from '@angular/core';


@Component({
    selector: 'title-banner',
    templateUrl: './title-banner.html',
    styleUrls: ['./title-banner.less']
})
export class TitleBannerComponent {
    constructor() { }

    @Input() harMarginBottom = false;
}
