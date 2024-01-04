import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WebApisService } from 'accountActivity/services';


@Component({
    selector: 'year-transition-dropdown',
    templateUrl: './yearTransitionDropdown.html',
    styleUrls: ['./yearTransitionDropdown.less']
})
export class YearTransitionDropdownComponent implements OnInit {

    constructor() { }

    @Input() yearTransitionData: string[];
    @Output() yearTransitionChange: EventEmitter<string> = new EventEmitter<string>();

    public selectedYear: string;

    ngOnInit() {
        this.selectedYear = this.yearTransitionData[0];
    }

    public updateValue(): void {
        this.yearTransitionChange.emit(this.selectedYear);
    }


}
