import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { IAccordionItem, IAccordionKeys, DefaultAccordionKeys } from '../models/accordion.models';

@Injectable()
export class AccordionService {
    createAccordionItems(items: any[], customAccordionkeys?:  string[]): IAccordionItem[] {
        return items.map(item => this.createAccordionItem(item, customAccordionkeys));
    }

    createAccordionItem(item: any, customAccordionkeys?: string[]): IAccordionItem {
        const key = customAccordionkeys ? this.createCustomAccordionKeys(customAccordionkeys) : DefaultAccordionKeys as IAccordionKeys;
        
        return {
            Title: item[key.Title],
            Category: (item[key.Category] ?? '').toUpperCase(),
            LastUpdate: item[key.LastUpdate] ? this.formatDate(item[key.LastUpdate]) : '',
            ShortDescription: item[key.ShortDescription],
            isOpen: false
        };
    }
    
    private createCustomAccordionKeys(keys: string[]): IAccordionKeys {
        return {
            Title: keys[0],
            Category: keys[1],
            LastUpdate: keys[2],
            ShortDescription: keys[3]
        };
    }

    private formatDate(isoString: string): string {
        const date = moment(isoString);
        const formattedDate = date.format('MMMM D, YYYY');
        const formattedTime = date.format('h:mm A');

        return `Last Modified: ${formattedDate} at ${formattedTime}`;
    }
}
