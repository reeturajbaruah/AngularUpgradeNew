import { OnDestroy } from '@angular/core';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LoggingService } from 'logging/module';
import { concat, Subject, Subscription } from 'rxjs';
import { take, throttleTime } from 'rxjs/operators';


@Injectable()
export class HctraErrorHandler implements ErrorHandler, OnDestroy {
    private logThrottleSubject = new Subject<any>();
    private logThrottleSubscription: Subscription;

    constructor(
        private injector: Injector // Can't directly inject into the ErrorHandler because of when the ErrorHandler is instantiated
    ) {
        const takeFirstErrors$ = this.logThrottleSubject.asObservable().pipe(take(100)); // Accept errors at full speed
        const throttleErrors$ = this.logThrottleSubject.asObservable().pipe(throttleTime(10000)); // Accept errors with delay

        this.logThrottleSubscription = concat(takeFirstErrors$, throttleErrors$)
            .subscribe((error: any) => {
                const loggingService = this.injector.get(LoggingService);
                loggingService.logException(error);
            });
    }


    handleError(error) {
        // Default Angular behavior
        console.error(error);

        // Custom logging
        try {
            this.logThrottleSubject.next(error);
        } catch (exception) {
            console.error(`Failed to log! \n ${exception}`);
        }
    }

    ngOnDestroy() {
        if (this.logThrottleSubscription) {
            this.logThrottleSubscription.unsubscribe();
        }
    }
}
