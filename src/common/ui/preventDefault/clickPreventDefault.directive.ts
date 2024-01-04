import { Directive, HostListener, Input } from '@angular/core';

@Directive({
    selector: `[clickPreventDefault]`
})
export class ClickPreventDefaultDirective {

    @Input() clickPreventDefault: { enabled: boolean };

    @HostListener('click', ['$event'])
    public onClick(event: Event): void {
        if (!this.clickPreventDefault || this.clickPreventDefault.enabled) {
            event.preventDefault();
        }
    }
}
