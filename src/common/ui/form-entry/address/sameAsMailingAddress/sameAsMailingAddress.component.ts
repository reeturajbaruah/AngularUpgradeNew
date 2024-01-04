import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';


@Component({
  selector: 'same-as-mailing-address',
  templateUrl: './sameAsMailingAddress.component.html',
  styleUrls: ['./sameAsMailingAddress.component.less']
})
export class SameAsMailingAddressComponent {

  @Input() checkStatus: boolean;

  @Output() statusChange = new EventEmitter<boolean>();

  constructor() { }

  change(e: boolean) {
    this.statusChange.emit(e);
  }

}
