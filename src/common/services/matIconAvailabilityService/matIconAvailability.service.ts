import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { defer, Observable, throwError } from 'rxjs';
import { delay, retryWhen, take, concat as concatWith, map } from 'rxjs/operators';

@Injectable()
export class MatIconAvailabilityService {

    constructor(private matIconRegistry: MatIconRegistry) { }
    /**
     * Returns a promise which resolves when the svg icon is available. The promise is rejected if
     * the svg icon cannot be found after retryCount number of retries
     * 
     * @param name Name of the icon to be check. 
     * @param retryDelay In case of icon not found, time after which matIconRegistry is checked again
     * @param retryCount Count of how many times matIconRegistry is checked
     */
    public whenAvailable(name: string, retryDelay = 500, retryCount = 10): Observable<void> {

        return defer(() => this.matIconRegistry.getNamedSvgIcon(name))
            .pipe(
                retryWhen(errors =>

                    errors.pipe(
                        delay(retryDelay),
                        take(retryCount),
                        concatWith(throwError('Svg not found')))
                ),
                take(1),
                map(() => null)
            );

    }
}
