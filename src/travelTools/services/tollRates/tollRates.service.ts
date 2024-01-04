import { Injectable } from '@angular/core';
import { SiteCoreItem } from '../../../cms/cms.module';
import { StringUtilsService } from '../../../common/services/stringUtils/stringUtils.service';

@Injectable({ providedIn: 'root' })
export class TollRatesService {

    constructor(
        private stringUtils: StringUtilsService
    ) { }
    
    allAxles = 'All Axles';
    noRateData = 'No rate data';

    public sortLabels(direction: any): any[] {
        if (Array.isArray(direction.TollSections) && direction.TollSections.length !== 0) {
            let rates = direction.TollSections[0].Rates;
            if (Array.isArray(rates) && rates.length !== 0) {
                rates = rates.sort((a, b) => {
                    if (a.Label > b.Label) {
                        return 1;
                    }
                    if (a.Label < b.Label) {
                        return -1;
                    }
                    return 0;
                });
            }
            rates.unshift({ Label: this.allAxles, Value: this.allAxles });
            return rates;
        }
    };

    public mapTollSections(children: any[]): any[] {
        const tollSections = [];
        if (!Array.isArray(children) || children.length === 0) {
            tollSections.push({
                TollingLocations: this.noRateData
            });
            return tollSections;
        }
        for (const child of children) {
            const parameters = this.stringUtils.getParameterArray(child.Rates);
            const rates = [];
            for (const parameter of parameters) {
                rates.push({
                    Label: parameter[0],
                    Value: parameter[1]
                });
            }
            for (const rate of rates) {
                if (rate.Value.trim() === '' && rate.Label.toString().toLowerCase().includes('cash')) {
                    rate.Value = 'Cash Not Accepted';
                } else if (rate.Value && !isNaN(parseFloat(rate.Value)) && isFinite(rate.Value)) {
                    rate.Value = parseFloat(rate.Value).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
                }
            }
            child.Rates = rates;
            child.Bold = child.Bold.localeCompare('yes', undefined, { sensitivity: 'base' }) === 0;
            child.Position = parseFloat(child.Position);
            tollSections.push(child);
        }
        return tollSections.sort((a, b) => {
            if (a.Position > b.Position) {
                return 1;
            }
            if (a.Position < b.Position) {
                return -1;
            }
            return 0;
        });
    }

    public mapTollRoadDirections(directionsArray) {
        const directions = [];
        if (!Array.isArray(directionsArray)) {
            return directions;
        }
        for (const direction of directionsArray) {
            directions.push({
                Direction: direction.DisplayName,
                TollSections: this.mapTollSections(direction.Children)
            });
        }
        return directions;
    };

    public mapTollRoads(siteCoreItems: SiteCoreItem[]): any[] {
        const arr = [];
        for (const siteCoreItem of siteCoreItems) {
            arr.push({
                Title: siteCoreItem.Title,
                LongDescription: siteCoreItem.LongDescription,
                Directions: this.mapTollRoadDirections(siteCoreItem.Children),
            });
        }
        return arr;
    };
}
