/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { } from 'jasmine';

import { MatDialogRef } from '@angular/material/dialog';
import { DialogService } from './dialog.service';

type anyFunction = (...args: any[]) => any;

export function mockModalOpenAndClose<D, K extends keyof DialogService>(
    service: DialogService, serviceMethod: DialogService[K] extends anyFunction ? K : never,
    resultData: D) {

    (service[serviceMethod] as jasmine.Spy).and.
        returnValue({
            afterClosed: () => ({
                subscribe: (func) => func(resultData)
            })
        } as MatDialogRef<D>);
}
