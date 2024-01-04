import { Component, Input, OnInit } from '@angular/core';
import { CmsResolverService } from 'cms/services';
import { IAutoReplenishmentContent } from 'shared/payment/autoReplenishment/models/models';
import { CmsIds } from '../constants';

@Component({
    selector: 'auto-replenishment-display',
    templateUrl: './autoReplenishmentDisplay.html',
    styleUrls: ['./autoReplenishmentDisplay.less']
})

export class AutoReplenishmentDisplayComponent implements OnInit {
    constructor(private cmsResolverService: CmsResolverService) { }

    @Input() autoReplenishmentStatus: boolean;
    cmsContent: IAutoReplenishmentContent;

    async ngOnInit() {
        const cmsContent = await this.cmsResolverService.resolve({
            ItemId: CmsIds.Display,
            mergeParams: true
        }) as IAutoReplenishmentContent;
        this.cmsContent = cmsContent;
    }
}
