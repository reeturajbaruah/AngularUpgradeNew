import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ListItems } from 'accountActivity/interfaces';



@Component({
    selector: 'transaction-type-dropdown',
    templateUrl: './transactionTypeDropdown.html',
    styleUrls: ['./transactionTypeDropdown.less']
})
export class TransactionTypeDropdownComponent implements OnChanges {

    constructor() { }

    @Input() searchTransactionData: ListItems[] = [];
    @Output() searchTransitionChange: EventEmitter<ListItems> = new EventEmitter<ListItems>();

    public selectedTransaction: ListItems;

    ngOnChanges() { 
        this.selectedTransaction = this.searchTransactionData[0] || {} as ListItems;
        this.searchTransitionChange.emit(this.selectedTransaction);
    }

    public updateValue() {
        this.searchTransitionChange.emit(this.selectedTransaction);
    }

}
