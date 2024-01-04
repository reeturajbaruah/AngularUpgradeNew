import { Component, Input } from '@angular/core';
import { Toast } from 'common/interfaces';
import { ToasterService } from 'common/services';
import { timer } from 'rxjs';

@Component({
    selector: 'app-toaster',
    templateUrl: './toaster.html',
    styleUrls: ['./toaster.less']
})
export class ToasterComponent {

    showToaster = true;

    @Input() toast: Toast;

    constructor(
        private toaster: ToasterService
    ) { }

    public removeToaster() {
        this.showToaster = false;

        // Delay the toaster's removal until animation finishes
        timer(500).subscribe(() => {
            this.toaster.remove(this.toast);
        });
    }

}
