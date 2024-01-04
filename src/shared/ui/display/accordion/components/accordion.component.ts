import { Component, Input } from '@angular/core';
import { IAccordionItem } from '../models/accordion.models';

@Component({
    selector: 'shared-accordion',
    templateUrl: 'accordion.component.html',
    styleUrls: ['accordion.component.less']
})

export class AccordionComponent {
    @Input() items: IAccordionItem[];

    toggleAccordion(item: IAccordionItem): void {
        item.isOpen = !item.isOpen;
    }
}
