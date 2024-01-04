import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[preventBackspace]'
})
export class PreventBackspaceDirective {

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.keyCode === 8 && !this.isInputElement(event.target)) {
            event.preventDefault();
        }
    }

    private isInputElement(target: EventTarget | null): boolean {
        return target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement;
    }
}
