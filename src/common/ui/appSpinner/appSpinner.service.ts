import {
    Injectable
} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SpinnerService {

    private internalSpinnerEvent$ = new Subject<string>();
    public spinnerEvent$ = this.internalSpinnerEvent$.asObservable();

    public startSpinner = () => {
        this.internalSpinnerEvent$.next('app-spinner:start');
    };

    public stopSpinner = () => {
        this.internalSpinnerEvent$.next('app-spinner:stop');
    };
}