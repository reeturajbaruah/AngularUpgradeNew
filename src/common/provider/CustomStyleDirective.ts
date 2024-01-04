
import { Directive } from '@angular/core';
import { StyleDirective } from '@angular/flex-layout';
//lt-md2
const selector = `[ngStyle.md1],[ngStyle.md2],[ngStyle.lt-md2]`;

const inputs = ['ngStyle.md1', 'ngStyle.md2', 'ngStyle.lt-md2'];

// eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
@Directive({ selector, inputs })
export class CustomStyleDirective extends StyleDirective {
    protected inputs = inputs;
}
