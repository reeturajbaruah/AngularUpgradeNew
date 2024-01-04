import {
    Component, Input, ElementRef, OnInit
} from '@angular/core';
import { isNullOrUndefined } from '@uirouter/core';
import { Decimal } from 'decimal.js-light';
import { isString, isNumber } from 'lodash';

@Component({
    selector: 'currency',
    templateUrl: './currency.html',
    styleUrls: ['./currency.less']    
})
export class CurrencyComponent implements OnInit {
    @Input() value: number | string | Decimal;

    private readonly currencyCheck = /(\d+)(\.\d{1,2})?/;

    get valueAsNumber(): number {
        const raw = this.value as any;
        if (isString(raw)) {
            const results = this.currencyCheck.exec(raw as string);
            if (results) {
                return +results[0];
            } else {
                return null;
            }
        } else if (isNumber(raw) || isNullOrUndefined(raw)) {
            return this.value as number;
        } else {
            return (this.value as Decimal).toNumber();
        }
    }

    constructor(
        private el: ElementRef
    ) { }

    ngOnInit() {
        //to avoid styling issues, no child html tags will be used,
        //so to ensure attributes are added to the 'host' element,
        //we manually set them here
        const element = this.el.nativeElement as HTMLElement;
        if (!element.classList.contains('notranslate')) {
            element.classList.add('notranslate');
        }
    }
}
