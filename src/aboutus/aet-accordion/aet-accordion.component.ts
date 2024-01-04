import { Component, Input } from '@angular/core';
import {
    Accordion
} from 'aboutus/interfaces';

@Component({
  selector: 'aet-accordion',
  templateUrl: './aet-accordion.component.html',
  styleUrls: ['./aet-accordion.component.less']
})
export class AetAccordionComponent {
    @Input() faqSection: Accordion[];

    panelOpenState: number;

    setPanelState(index: number) {
        this.panelOpenState = index;
    }

  constructor() { }

}
