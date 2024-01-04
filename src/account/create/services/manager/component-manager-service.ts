import { Injectable, Inject } from '@angular/core';
import { deliveryMethodLocalStorage } from 'account/create/constants';
import { IPageCampaignEvent, IPageEvent } from 'account/create/models/campaign-models';
import { Prop } from 'account/create/models/current-step.model';
import { IDeliveryMethodInfo } from 'account/create/models/delivery-method.model';
import { IToggles } from 'account/create/models/toggles.models';
import { AuthChannelService } from 'authentication/authChannelService/authChannel.service';
import { AccountService } from 'common/services';
import { authEvents } from 'constants/module';
import { Subject, Subscription } from 'rxjs';
import { AddressInfo, BillingInfo, BillingType, CreditCardDetails, IPaymentMethodDetails } from '../../../../common/models';
import { WebStorageService } from '../../../../common/services/webStorageService/webStorage.service';
import { CampaignService } from '../campaign/campaign-service';
import { StoreService } from '../store/store.service';
import { ToggleService } from '../Toggle/toggle.service';
import { ManagerFacadeService } from './facade/manager-facade.service';

@Injectable()
export class ComponentManagerService {

    userResumedCreateAcctFlow: boolean;

    private togglesInfo = {
        togglesSet: false,
        toggles: {} as IToggles,
        togglesReady$: new Subject<any>(),
        togglesSubscriptions: []
    };

    constructor(
        private facade: ManagerFacadeService,
        private store: StoreService,
        private acctSerivce: AccountService,
        private authChannel: AuthChannelService,
        private webStorage: WebStorageService,
        private campaignService: CampaignService,
        private toggleService: ToggleService
    ) {

        this.authChannel.authEventStatuses[authEvents.logoutSuccess].subscribe((isLogout: boolean) => {
            if (isLogout) {
                this.clearStore();
                this.campaignService.clear();
            }
        });
    }

    isCampaignEnable(toggles?: IToggles, params?) {
        return this.campaignService.checkCampaignEnable(toggles, params);
    }

    campaignClear() {
        this.campaignService.clear();
    }

    async campaign(event: IPageCampaignEvent) {
        if (this.isCampaignEnable()) {
            await this.campaignService.campaign(event);
        }
    }

    getCampaignBanner(params) {
        return this.campaignService.getBanner(params);
    }

    subscribeToggles(callback) {
        this.togglesInfo.togglesSubscriptions.push(this.togglesInfo.togglesReady$.subscribe(callback));
    }

    async getToggles() {
        if (!this.togglesInfo.togglesSet) {
            this.togglesInfo.toggles = await this.toggleService.getToggles();
            this.togglesInfo.togglesSet = true;
        }
        this.togglesInfo.togglesReady$.next(this.togglesInfo.toggles);
        return this.togglesInfo.toggles;
    }

    private resetToggles() {
        this.togglesInfo.togglesSet = false;
        this.togglesInfo.togglesSubscriptions.forEach(sub => sub.unsubscribe());
        this.togglesInfo.toggles = {} as IToggles;
    }

    clearStore() {
        this.store.delete();
        this.webStorage.removeEntry(deliveryMethodLocalStorage);
        this.resetToggles();
    }

    checkUserResumedCreateAcctFlow(routerParams) {
        if (routerParams && routerParams.userResumedCreateAcctFlow !== null) {
            this.userResumedCreateAcctFlow = routerParams.userResumedCreateAcctFlow;
        }
    }

    async select(p: Prop) {

        const storedData = this.store.select(p);

        switch (p) {

            case Prop.Vehicles:

                if (storedData === null || storedData === undefined) {
                    const vehicles: [] = await this.fetchVehicles();
                    if (vehicles.length > 0) {
                        this.store.dispatch(Prop.Vehicles, vehicles);
                        return vehicles;
                    } else {
                        return storedData;
                    }

                }
                else {
                    return storedData;
                }

            case Prop.Payment:

                let billingInfo = await this.facade.getBillingInfo();
                const paymentInfoData = storedData?.paymentInfoData;
                const noDataWithSavePayment = (storedData === null || storedData === undefined) &&
                    ((paymentInfoData === null || paymentInfoData === undefined) || paymentInfoData?.savePaymentStatus === true);
                const noSavePayment = (paymentInfoData?.savePaymentStatus === false);
                const isCash = (paymentInfoData?.selectedBillingType === BillingType.Cash);

                if (noDataWithSavePayment) {
                    return {
                        billingInfo,
                    };
                }
                else if (noSavePayment && !isCash) {
                    const oneTimePaymentData = paymentInfoData?.paymentRequest?.payload?.billing;
                    if (oneTimePaymentData) {
                        billingInfo = this.populateBillingInfo(oneTimePaymentData, billingInfo);
                    };
                    return {
                        billingInfo,
                        paymentInfoData
                    };
                }
                else if (isCash) {
                    billingInfo = {
                        credit: { country: 'USA', displayCountry: 'USA', international: false, nameOnCard: null } as CreditCardDetails & AddressInfo,
                        eft: { country: 'USA', displayCountry: 'USA', international: false, nameOnBankAccount: null },
                        billingType: BillingType.Cash,
                        billingInfoExists: true,
                        billingTypeDisplay: BillingType.Cash,
                        paymentMethodDetails: { showCashOption: true, enableCashOption: true } as IPaymentMethodDetails,
                        autoReplenishmentStatus: false,
                        savePaymentStatus: false
                    } as BillingInfo;
                    return {
                        billingInfo,
                    };
                }
                else {
                    return {
                        billingInfo,
                        paymentInfoData
                    };
                }

            case Prop.DeliveryMethod:
                if (storedData === null || storedData === undefined) {
                    const data = this.webStorage.getValue(deliveryMethodLocalStorage);

                    if (data === null || data === undefined) {
                        const addressInfo = await this.acctSerivce.getMailingInfo();
                        return {
                            addressInfo,
                            selectedDeliveryMethod: ''
                        } as IDeliveryMethodInfo;
                    } else {
                        return data as IDeliveryMethodInfo;
                    }

                }
                else {
                    return storedData;
                }

            case Prop.CreditCard:
                const creditCardData = storedData?.creditCardData;
                return creditCardData;

        }
    }

    private populateBillingInfo(oneTimePaymentData, billingInfo) {
        let billingInfoData = {} as BillingInfo & { cards: any[] };
        billingInfoData = { ...billingInfo };
        billingInfoData.billingInfoExists = true;
        billingInfoData.billingType = oneTimePaymentData?.billingType;
        billingInfoData.billingTypeDisplay = oneTimePaymentData?.billingType;
        billingInfoData.cards = [oneTimePaymentData?.credit];
        billingInfoData.cards[0].selectedYear = oneTimePaymentData?.credit?.expYear;
        billingInfoData.eft = oneTimePaymentData?.eft;
        billingInfoData.autoReplenishmentStatus = oneTimePaymentData?.autoReplenishmentStatus;
        billingInfoData.savePaymentStatus = oneTimePaymentData?.savePaymentStatus;
        return billingInfoData;
    }

    private async fetchVehicles() {

        const vehicles = await this.facade.getVehicles();
        return vehicles.accountTags.length > 0 ? vehicles.accountTags : [];
    }
}


