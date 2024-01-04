import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { IData, IList } from './models/dropdown.interface';

@Component({
    selector: 'dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.less']
})
export class DropdownComponent implements OnInit, OnDestroy {

    isOpen = false;

    @Input() list: IList;
    @Output() onChange = new EventEmitter<IData>();
    selectedData: IData;
    showDefault = false;

    ngOnInit() {
        if (this.list.defaultDisplayName) {
            this.showDefault = true;
        } else {
            this.showDefault = false;
            this.selectedData = this.list.data[0];
        }
    }

    close() {
        this.isOpen = false;
    }

    dispatchEvent(data: IData) {

        this.selectedData = data;
        this.isOpen = false;
        this.showDefault = false;
        this.onChange.emit(data);

    }

    ngOnDestroy() {
        this.onChange.unsubscribe();
    }

}
