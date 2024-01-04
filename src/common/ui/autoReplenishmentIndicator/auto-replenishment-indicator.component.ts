import { Component, OnInit, Input } from '@angular/core';
import { SiteCoreItem } from '../../../cms/cms.module';
import { CmsUtilService } from '../../../cms/services';
import { CurrentUserService } from '../../services';

export interface IFlexPayCurrentUser {
    isFlexPay: boolean;
    rebillOptIn: boolean;
}

enum IndicatorState {
    On = 'Indicator-On',
    Off = 'Indicator-Off'
}

@Component({
    selector: 'auto-replenishment-indicator',
    templateUrl: './auto-replenishment-indicator.component.html',
    styleUrls: ['./auto-replenishment-indicator.component.less']
})
export class AutoReplenishmentIndicatorComponent implements OnInit {
    @Input() cmsData: SiteCoreItem;
    @Input() callingComponent: string;

    private currentUser: any;
    public isFlexPay: boolean;

    private greenIndicator = '#018C25';
    private redIndicator = '#EC0407';

    IndicatorState = IndicatorState;

    //Properties
    get indicatorIcon(): string {
        if (!this.cmsData) {
            throw new ReferenceError('In property indicatorIcon, variable cmsData is undefined.');
        }
        if (!this.cmsData.Children) {
            throw new ReferenceError('In property indicatorIcon, variable cmsData.Children is undefined.');
        }
        return this.OffOn;
    }

    get OffOn(): IndicatorState {
        if (!this.currentUser) {
            return IndicatorState.Off;
        }
        return this.currentUser?.rebillOptIn ? IndicatorState.On : IndicatorState.Off;
    }

    get indicatorColor(): string {
        return this.OffOn === IndicatorState.On ? this.greenIndicator : this.redIndicator;
    }

    //Class methods
    constructor(private cmsUtilService: CmsUtilService,
        private currentUserSvc: CurrentUserService
    ) {
    }

    async ngOnInit() {
        this.currentUser = await this.currentUserSvc.getCurrentUser();
        this.isFlexPay = this.currentUser.isFlexPay;
    }
}
