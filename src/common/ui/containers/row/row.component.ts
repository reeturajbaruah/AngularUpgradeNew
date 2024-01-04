import { Component, Input, HostBinding } from '@angular/core';


@Component({
    selector: 'row-container',
    templateUrl: './row.html',
    styleUrls: ['./row.less']
})
export class RowContainerComponent {
    constructor() { }

    @Input() isTop: boolean;
    @Input() isInner: boolean;
    @Input() isBottom: boolean;
    @Input() rowType = RowContainerType.Body;
    @Input() isBig: boolean;
    @Input() isLabel: boolean;

    public calculateClasses() {
        return {
            'is-top': this.isTop,
            'is-inner': this.isInner,
            'is-bottom': this.isBottom,
            'body--backgroundColor': this.rowType === RowContainerType.Body,
            'bodyInvert--backgroundColor': this.rowType === RowContainerType.BodyInvert,
            'emphasis--backgroundColor': this.rowType === RowContainerType.Emphasis,
            'transparent--backgroundColor': this.rowType === RowContainerType.Transparent,
            'semi-emphasis--backgroundColor': this.rowType === RowContainerType.SemiEmphasis,
            big: this.isBig,
            'is-label': this.isLabel
        };
    }

    public calculateClassesLtMd() {
        const classesObj = this.calculateClasses();
        classesObj['lt-md'] = true;
        return classesObj;
    }
}


export enum RowContainerType {
    Body = 'body',
    BodyInvert = 'bodyInvert',
    Emphasis = 'emphasis',
    Transparent = 'transparent',
    SemiEmphasis = 'semi-emphasis'
}
