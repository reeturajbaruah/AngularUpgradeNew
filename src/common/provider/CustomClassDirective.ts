import { Directive } from '@angular/core';
import { ClassDirective } from '@angular/flex-layout';

const selector = `[ngClass.md1],[ngClass.md2],[ngClass.lt-md2]`;

const inputs = ['ngClass.md1', 'ngClass.md2', 'ngClass.lt-md2'];

// eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
@Directive({ selector, inputs })
export class CustomClassDirective extends ClassDirective {
    protected inputs = inputs;
}
