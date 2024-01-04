import {
    Component, Input,
    ChangeDetectionStrategy,
    OnInit,
    OnDestroy,
    EventEmitter,
    Output
} from '@angular/core';
import { CharmsInfo } from 'menu/frame/frame.component';

@Component({
    selector: 'menu-charms-component',
    templateUrl: './charms.html',
    styleUrls: ['./charms.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharmsComponent implements OnInit, OnDestroy {

    constructor() { }
    
    @Input() side: boolean;
    @Input() charms: CharmsInfo;
    @Output() exists = new EventEmitter<boolean>();

    async ngOnInit() {
        this.exists.emit(true);
    }

    ngOnDestroy() {
        this.exists.emit(false);
    }    
}
