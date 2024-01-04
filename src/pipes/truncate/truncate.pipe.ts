import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {

    public transform(value: string, limit = 30) {

        return value.length > limit
            ? `${value.substr(0, limit)}...`
            : value;
    }
}
