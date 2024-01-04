import { Directive, ElementRef, HostListener, AfterViewInit, Input, Renderer2, Inject, LOCALE_ID } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Directive({
    selector: '[inputCurrency]',
    providers: [CurrencyPipe],
})
export class InputCurrencyDirective implements AfterViewInit {
    private readonly currencyCode = 'USD';
    constructor(
        private el: ElementRef,
        private currencyPipe: CurrencyPipe,
        private renderer: Renderer2,
        @Inject(LOCALE_ID) private locale: string) { }

    private regex = {
        positiveDecimal: new RegExp(/^\d*[\.|,]?\d*$/g),
        allDecimal: new RegExp(/^-?\d*[\.|,]?\d*$/g)
    };
    private specialKeys: Array<string> = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Del'];

    private reverseFormatNumber(val, locale): any {
        const group = new Intl.NumberFormat(locale).format(1111).replace(/1/g, '');
        const decimal = new Intl.NumberFormat(locale).format(1.1).replace(/1/g, '');
        let reversedCurrencyVal = val.replace(new RegExp('\\' + group, 'g'), '');
        reversedCurrencyVal = reversedCurrencyVal.replace(new RegExp('\\' + decimal, 'g'), '.');
        const reversedVal = reversedCurrencyVal.replace(/[^\d.-]/g, '');
        return Number.isNaN(reversedVal) ? 0 : reversedVal;
    }

    ngAfterViewInit() {
        this.el.nativeElement.value = this.currencyPipe.transform(this.el.nativeElement.value.replace(/[,]/g, ''), this.currencyCode);
    }

    @HostListener('focus') onFocus() {
        this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^\d.,-]/g, '');
        this.el.nativeElement.select();
    }

    @HostListener('focusout') onFocusout() {
        let val = this.el.nativeElement.value;
        if (val.length === 0 || (val.length === 1 && [',', '.', ''].indexOf(val[0]) > -1)) {
            val = '0';
        }
        this.el.nativeElement.value = this.currencyPipe.transform(val, this.currencyCode);
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        const matches = event.key.match(this.regex.positiveDecimal);
        if (!matches) {
            event.preventDefault();
        }
    }

    @HostListener('blur') onBlur($event) {
        const amount = this.reverseFormatNumber(this.el.nativeElement.value, this.locale).replace(/^[^0-9]{2}..*/g, '');
        this.el.nativeElement.value = amount;
    }

}
