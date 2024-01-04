import {
    Component, Input
} from '@angular/core';
import { } from 'common/models';

interface CmsContent {
    EZTagVehiclesHeader: string;
    EZPlateVehiclesHeader: string;
    ItemCountLabelEZTags: string;
    ItemCountLabelEZPlates: string;
}

@Component({
    selector: 'active-vehicles-display',
    templateUrl: './activeVehiclesDisplay.html'
})

export class ActiveVehiclesDisplayComponent {
    
    @Input() activeVehiclesList: any[];
    @Input() activeEZPlatesList: any[];
    @Input() itemsPerPage: number;
    @Input() cmsContent: CmsContent;

    public paginatedArrVehicles = [];
    public paginatedArrEzPlates = [];
}
