import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'agencyName' })
export class AgencyNamePipe implements PipeTransform {

    static readonly knownAgencyAbbreviations: any = {
        HCTRA: 'Harris County',
        MCTRA: 'Montgomery County',
        FBCTRA: 'Fort Bend County',
        FBGPTRA: 'Fort Bend Grand Parkway'
    };

    transform(value: string, ...args) {        
        return AgencyNamePipe.knownAgencyAbbreviations[value] || value;
    }
}
