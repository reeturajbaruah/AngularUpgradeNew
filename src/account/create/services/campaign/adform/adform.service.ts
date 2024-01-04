import { Injectable } from '@angular/core';
import { adform } from '../../../../../socialMediaScripts/AdformScript';

@Injectable()
export class AdformService {

    constructor(
    ) { }

    async adformTrackPoint(pageName: string) {
        adform(pageName);
    }
}
