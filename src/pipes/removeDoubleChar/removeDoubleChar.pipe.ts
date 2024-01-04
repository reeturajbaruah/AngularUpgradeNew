import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'removeDoubleChars' })
export class RemoveDoubleCharPipe implements PipeTransform {

    constructor() { }

    transform(val) {
        //once a field reaches past its max length, no val sent
        if (!val) {
            return;
        }
        val = val.toString();

        val = val.replace(/@@/g, '@');
        val = val.replace(/\s+/g, ' ');
        val = val.replace(/\.+/g, '.');
        val = val.replace(/\-+/g, '-');
        val = val.replace(/\_+/g, '_');
        val = val.replace(/[\<\>\'\"]/g, '');

        return val;                        
    }
}
