import { Component, OnInit, Input } from '@angular/core';
import { TollRatesService } from 'travelTools/services/tollRates/tollRates.service';
import { ITollRatesSiteCoreItem } from 'travelTools/travelTools.models';

@Component({
    selector: 'toll-rates',
    templateUrl: './tollRates.component.html',
    styleUrls: ['tollRates.component.less'],
})
export class TollRatesComponent implements OnInit {

    @Input() cmsPage: ITollRatesSiteCoreItem;
    pageTitle: string;
    tollRoads: any[];
    selectedTollRoad: any;
    selectedDirection: any;
    classes: any;
    selectedClass: any;
    searchParams: URLSearchParams;

    constructor(
        public tollRatesService: TollRatesService
    ) {
    }

    ngOnInit() {
        this.pageTitle = this.cmsPage.Title;
        this.tollRoads = this.tollRatesService.mapTollRoads(this.cmsPage.Children[0].Children);
        if (this.tollRoads.length > 0) {
            this.searchParams = new URL(location.href).searchParams;
            const tollRoadFromUrl = this.searchParams.get('tollRoad');
            if (tollRoadFromUrl) {
                const filter = this.tollRoads.filter(r => r.Title === tollRoadFromUrl)[0];
                if (filter) { 
                    this.selectedTollRoad = filter;
                }
                else {
                    this.selectedTollRoad = this.tollRoads[0];
                }
            }
            else {
                this.selectedTollRoad = this.tollRoads[0];
            }
            this.setDefaultValues();
        }
    }
    
    setDefaultValues() {
        if (this.selectedTollRoad.Directions.length > 0) {
            this.selectedDirection = this.selectedTollRoad.Directions[0];
            this.classes = this.tollRatesService.sortLabels(this.selectedTollRoad.Directions[0]);
            this.selectedClass = this.classes[0];
        }
    }

    onSelectChange() {
        this.searchParams.set('tollRoad', this.selectedTollRoad.Title);
        window.history.replaceState({}, '', `${location.pathname}?${this.searchParams}`);
        this.setDefaultValues();
    }

}
