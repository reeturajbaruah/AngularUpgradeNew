import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';
import { hideTrigger } from 'animations/hide';
import { BillingInfoUtilitiesService } from 'common/billing';
import { WindowRef } from 'common/providers';
import { CurrentUserService, GenericRepoService, ResponseErrorService } from 'common/services';
import { StepperStep } from 'common/ui';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { isUndefined, wait } from 'common/utilities';
import { UserRoles } from 'constants/module';
import { BillingType, IMailingInfo } from 'common/models';
import { StateNames as ProfileStateNames } from '../constants';
import { MailingAddressService } from 'vehicles/shared';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';
import { SessionService } from 'common/services/session/session.service';


export interface CloseAccountRefund {
    method: 'credit' | 'check';
    mailingInfo: IMailingInfo;
    billingType: BillingType;
    currentBalance: any;
    date: any;
    creditCard: any;
}

@Component({
    selector: 'close-account-frame-component',
    templateUrl: './frame.html',
    styleUrls: ['./frame.less'],
    animations: [hideTrigger]
})
export class CloseAccountFrameComponent implements OnInit {
    constructor(
        @Inject(WindowRef) private windowRef: Window,
        private stateService: StateService,
        private profileStatesNames: ProfileStateNames,
        private responseErrorService: ResponseErrorService,
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private genericRepoService: GenericRepoService,
        private webStorage: WebStorageService,
        private session: SessionService,
        private userRoles: UserRoles,
        private currentUser: CurrentUserService,
        private billingInfoUtilitiesService: BillingInfoUtilitiesService,
        private mailingAddressService: MailingAddressService
    ) { }

    @Input() public stateList: { stateCode: string }[];
    @Input() public countryList: { countryCode: string; countryName: string; displayName: string }[];
    @Input() public cmsContent: { Step1: string; Step2: string; Step3: string };

    public title = 'FAKE TITLE';
    public isHidden: boolean;
    public closeAccountRefund: CloseAccountRefund;
    public hideRefundMethodSelection: boolean;
    public readonly creditValue = 'credit';
    public readonly checkValue = 'check';


    public steps: StepperStep[] = [];
    public stepNum = 0;


    ngOnInit() {
        this.closeAccountRefund = {
            mailingInfo: null,
            method: null,
            billingType: null,
            creditCard: null,
            currentBalance: null,
            date: null
        };
        this.populateRefundData();

        this.steps = [
            { name: this.cmsContent.Step1, background: 'ternary' },
            { name: this.cmsContent.Step2, background: 'ternary' },
            { name: this.cmsContent.Step3, background: 'ternary' }
        ];
    }

    public async scrollToTop() {
        this.isHidden = true;

        await wait(20);
        this.windowRef.scrollTo(0, 0);

        this.isHidden = false;
    }

    public async onCloseContinue() {

        if (isUndefined(this.closeAccountRefund.method)) {
            this.closeAccountRefund.method = this.closeAccountRefund.billingType === BillingType.Credit
                ? this.creditValue
                : this.checkValue;
        }

        const updated = await this.mailingAddressService.setMailingAddressOnAcctLevel();

        const response = await this.genericRepoService.dataFactory.closeAccount({
            refundType: this.closeAccountRefund.method,
            creditValue: this.creditValue,
            checkValue: this.checkValue
        });

        if (updated && this.responseErrorService.isErrorFree(response)) {
            this.webStorage.removeEntry('closeAgreed');
            this.session.userRole = this.userRoles.pendingClosure;
            this.session.setAcctActivity('I');
            const currentUserData = this.currentUser.getCurrentUser();
            currentUserData.acctActivity = 'I';
            this.currentUser.updateCurrentUser(currentUserData);

            await this.stateService.go(this.profileStatesNames.CloseAccountReview, {}, { custom: { isExplicitlyAllowedTransition: true } });
        }
    }

    private async populateRefundData() {

        const response = await this.genericRepoService.dataFactory.getRefundData();
        const mailingInfo = await this.mailingAddressService.getMailingAddress();

        if (this.responseErrorService.isErrorFree(response) && !!mailingInfo) {
            this.closeAccountRefund.currentBalance = response.currentBalance;

            // new Date() is used so date will match the <account-header>, but it used to be response.timeWithZone.split('at')[0];
            this.closeAccountRefund.date = new Date();

            this.closeAccountRefund.creditCard = Array.isArray(response.billingInfo.cards) ? response.billingInfo.cards[0] : undefined;
            this.closeAccountRefund.billingType = response.billingInfo.billingTypeDisplay;
            this.closeAccountRefund.mailingInfo = mailingInfo;
            this.closeAccountRefund.mailingInfo.international = this.billingInfoUtilitiesService.isInternationalAddress(mailingInfo);
            this.hideRefundMethodSelection = this.environmentConfig.hideRefundMethodSelection;

            // The toggle hideRefundMethodSelection has been true for a while now
            // User should be able to validate mailing address only
            // TODO: Anand - Remove feature toggle and cleanup after this feature is stable in PROD

            // Why is the refund method defaulted to checkValue?
            this.closeAccountRefund.method = this.environmentConfig.hideRefundMethodSelection ||
                (response.billingInfo.billingTypeDisplay !== 'CREDIT')
                ? this.checkValue
                : this.creditValue;
        }
    }
}
