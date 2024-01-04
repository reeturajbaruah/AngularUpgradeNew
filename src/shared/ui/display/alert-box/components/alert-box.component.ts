import { Component, Input } from '@angular/core';

@Component({
    selector: 'shared-alert-box',
    templateUrl: 'alert-box.component.html',
    styleUrls: ['alert-box.component.less']
})

export class AlertBoxComponent {
    @Input() containerClass?: string;
    @Input() svgIcon?: string;
    @Input() svgIconClass?: string;
    @Input() title?: string;
    @Input() titleClass?: string;
    @Input() desc?: string;
}
