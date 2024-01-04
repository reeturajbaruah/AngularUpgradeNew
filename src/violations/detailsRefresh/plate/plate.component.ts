import {
    Component, Input
} from '@angular/core';

import { ViolationPlate } from 'violations/interfaces';

@Component({
    selector: 'violations-plate-row-refresh',
    templateUrl: './plate.html',
    styleUrls: ['./plate.less']
})
export class PlateRowComponent {

    constructor() { }

    @Input() plate: ViolationPlate;
    @Input() noDiscount: boolean;

}
