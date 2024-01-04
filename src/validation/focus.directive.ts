import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[validation-focus]'
})
export class FocusDirective {

    constructor(private form: ElementRef) {
        form.nativeElement.addEventListener('submit', () => this.refocus());
    }
        
    private refocus() {
        const firstInvalid = this.form.nativeElement.querySelector('.ng-invalid');
        
        if (firstInvalid) {
            firstInvalid.focus();
        }
    }    
}