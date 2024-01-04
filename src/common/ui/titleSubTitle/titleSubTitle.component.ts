import { Component, Input } from '@angular/core';

@Component({
    selector: 'titleSubTitle',
    templateUrl: './titleSubTitle.html',
    styleUrls: ['./titleSubTitle.less']
})
export class TitleSubTitleComponent {

    @Input() titleDescription: string;
    @Input() subtitleDescription: string;
    @Input() showSubTitle: boolean;

    constructor() { }
}
