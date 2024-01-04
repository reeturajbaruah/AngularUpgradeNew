import { Component, Input } from '@angular/core';

@Component({
    selector: 'progress-bar',
    templateUrl: './progress-bar.html',
    styleUrls: ['./progress-bar.less']
})
export class ProgressBarComponent {

    @Input() progress: number;
    @Input() color: string;

	@Input() statusClasses: any;//deprecate
}
