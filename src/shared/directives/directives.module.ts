import { NgModule } from '@angular/core';
import { PreventBackspaceDirective } from './PreventBackspaceDirective';

@NgModule({
    declarations: [
        PreventBackspaceDirective
        // Add more directives as needed
    ],
    exports: [
        PreventBackspaceDirective
        // Add more directives as needed
    ],
})
export class DirectivesModule { }
