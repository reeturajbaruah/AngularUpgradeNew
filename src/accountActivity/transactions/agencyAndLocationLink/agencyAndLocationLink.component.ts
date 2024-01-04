import { Component, Inject, Input, OnInit } from '@angular/core';
import { AccountActivityService } from 'accountActivity/services';
import { TransactionRecord } from 'accountDashboard/services';


@Component({
    selector: 'agency-and-location-link',
    templateUrl: './agencyAndLocationLink.html',
    styleUrls: ['./agencyAndLocationLink.less']
})
export class AgencyAndLocationLinkComponent implements OnInit {

    @Input() record: TransactionRecord;
    @Input() showLocationLink = false;

    public agencyLinkLeftPart = '';
    public agencyLinkMatchedString = '';
    public agencyLinkRightPart = '';

    constructor(
        public accountActivityService: AccountActivityService
    ) { }


    ngOnInit() {
        this.setAgencyLinkParts(this.record);
    }

    private setAgencyLinkParts(record: TransactionRecord) {
        const resultArray = this.isAgencyInLocationName(record);

        if (resultArray) {
            this.agencyLinkMatchedString = resultArray[2];
            this.agencyLinkLeftPart = resultArray[1];
            this.agencyLinkRightPart = resultArray[3];
        }
    }

    public showPlainLocationName(record: TransactionRecord) {
        return (!this.showLocationLink && !this.isAgencyInLocationName(record))
            || (this.showLocationLink && !this.hasLaneNameOrCoordinates(record));
    }

    public isAgencyInLocationName(record: TransactionRecord) {
        const locationRegex = /(.*)(HCTRA|CTRMA|FBGPTRA|METRO|NTTA|TxDOT-TOD)(.*)/i;
        return locationRegex.exec(record.locationName);
    }

    public hasLaneNameOrCoordinates(record: TransactionRecord) {
        return record.laneName || this.accountActivityService.hasLocationCoordinates(record);
    }
}


