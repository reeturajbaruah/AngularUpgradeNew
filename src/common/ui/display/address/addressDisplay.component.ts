import {
    Component, Input, Host, Optional, OnInit, Inject,
    Output, EventEmitter
} from '@angular/core';

import { AddressInfo } from 'common/models';

@Component({
    selector: 'address-display',
    templateUrl: './addressDisplay.html',
    styleUrls: ['./addressDisplay.less']
})
export class AddressDisplayComponent {
        
    @Input() showEdit: boolean;

    @Input() address: AddressInfo;
    @Input() international: boolean;

    @Input() displayCountry: boolean;

    @Input() legacy?: boolean;

    @Input() showLabels?: boolean;

    @Output() editAddress = new EventEmitter<AddressInfo>();

    public editAddressClicked = () => {
        this.editAddress.emit(this.address);
    };

    public get showAddress() {
        return (this.address.address1 && this.address.city && this.address.country) ? true : false;
    }
}
