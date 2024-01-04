import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'error-message',
    templateUrl: './errorMessage.html'
})
export class ErrorMessageComponent {
    @Input() rule: string;
    public isVisible: boolean;
}
