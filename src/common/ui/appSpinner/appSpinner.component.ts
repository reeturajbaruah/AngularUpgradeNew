import {
    Component, Input, OnInit, OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from './appSpinner.service';

@Component({
    selector: 'app-spinner',
    templateUrl: './appSpinner.component.html',
    styleUrls:[
        './appSpinner.component.less'
    ]
})
export class AppSpinnerComponent implements OnInit, OnDestroy {

    @Input() show: boolean;
    
    public showDueToBroadcast: boolean;
    private unsubscribe: Subscription;;

    constructor(private spinnerService: SpinnerService ) {        
    }

    ngOnInit(): void {
        this.unsubscribe = this.spinnerService.spinnerEvent$.subscribe(evt => 
            this.showDueToBroadcast = evt === 'app-spinner:start'
        );
    }

    ngOnDestroy(): void {        
        this.unsubscribe?.unsubscribe();
    }
}