import { Directive, Input } from '@angular/core';
import { ToasterService } from 'common/services';
import { IEzTagResponse } from 'vehicles/interfaces';
import { VehicleModalCms } from 'vehicles/shared';

@Directive()
export abstract class VehicleCartBase {

    @Input() addAdditionalTagCms: VehicleModalCms;

    public cartTags: IEzTagResponse[];

    constructor(protected toasterService: ToasterService) { }

    checkIfLicExistsInCart(licPlate: string, licState: string) {
        if (this.cartTags.filter(tag =>
            tag.licPlate === licPlate.toUpperCase()
            && tag.licState === licState.toUpperCase()).length > 0) {
            const errorMsg = this.addAdditionalTagCms.ErrorPlateExistsInCart;

            this.toasterService.show('Error', errorMsg);

            return true;
        } else {
            return false;
        }
    }

}
