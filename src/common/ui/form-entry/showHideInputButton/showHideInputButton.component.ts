import {
    Component, Input, Output, EventEmitter
} from '@angular/core';

@Component({
    selector: 'show-hide-input-button',
    templateUrl: './showHideInputButton.html',
    styleUrls: ['./showHideInputButton.less']
})
export class ShowHideInputButtonComponent {

    constructor(
    ) { }

    @Input() showField: boolean;
    @Output() showFieldChange = new EventEmitter<boolean>();

    public toggleShowHide = () => {
        this.showField = !this.showField;
        this.showFieldChange.emit(this.showField);
    };
}
