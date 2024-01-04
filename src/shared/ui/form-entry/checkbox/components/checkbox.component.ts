import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'shared-checkbox',
    templateUrl: 'checkbox.component.html',
    styleUrls: ['checkbox.component.less']
})

export class CheckboxComponent {
    @Input() desc?: string;
    @Input() checkbox?: boolean;
    @Output() checkboxChange?: EventEmitter<boolean> = new EventEmitter<boolean>();
}
