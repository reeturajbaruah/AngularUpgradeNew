import { Component, Input } from '@angular/core';


@Component({
    selector: 'fx-row',
    templateUrl: './fxRow.html',
    styleUrls: ['./fxRow.less']
})
export class FxRowComponent {

    constructor() { }

    @Input() isLabel: boolean;
    @Input() isValue: boolean;
    @Input() isSubtitle: boolean;
    @Input() isTop: boolean;
    @Input() isInner: boolean;
    @Input() isBottom: boolean;
    @Input() backgroundColorClass: string;
    @Input() isSelectedTop: boolean;
    @Input() isSelectedBottom: boolean;

    public calculateClasses() {
        return {
            'is-subtitle': this.isSubtitle,
            'is-label': this.isLabel,
            'is-value': this.isValue,
            top: this.isTop,
            inner: this.isInner,
            bottom: this.isBottom,
            [this.backgroundColorClass]: this.backgroundColorClass ? true : false,
            'is-selected-top': this.isSelectedTop,
            'is-selected-bottom': this.isSelectedBottom,
        };
    }

}
