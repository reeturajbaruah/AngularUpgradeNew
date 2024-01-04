import { Injectable } from '@angular/core';
import { futureRoutes } from 'app/routing';

@Injectable()
export class FutureRoutesService {

    constructor(
    ) { }

    public get() {
        return futureRoutes;
    }
}
