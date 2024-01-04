import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'collapsedClass' })
export class CollapsedClassPipe implements PipeTransform {
    public transform(collapsed: boolean) {
        return `glyphicon ${collapsed ? 'glyphicon-chevron-right' : 'glyphicon-chevron-down'}`;
    }
}
