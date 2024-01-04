import { Inject, Injectable } from '@angular/core';
import { BillingType, PaymentMethodInfo, BillingInfo } from 'common/models';
import { CreditCardTypeService, ExpirationDateService } from 'common/billing';
import { CountryConversionService } from 'common/conversions';
import { BillingInfoUtilitiesService } from 'common/billing/billingInfoUtilities.service';
import { BaseResponse, ErrorMessage } from 'common/interfaces';
import { ToasterService, HttpService } from 'common/services';

@Injectable()
export class BillingDataService {
    constructor(
        private httpService: HttpService,
        private countryConversionService: CountryConversionService,
        private creditCardTypeService: CreditCardTypeService,
        private expirationDateService: ExpirationDateService,
        private billingInfoUtilitiesService: BillingInfoUtilitiesService,
        private toastService: ToasterService
    ) { }

    private readonly addEftBillingInfoUrl = '/api/AddBankAccountInfo';
    private readonly addCreditBillingInfoUrl = '/api/AddCreditCardInfo';

    private readonly editEftBillingInfoUrl = '/api/EditBankAccountInfo';
    private readonly editCreditBillingInfoUrl = '/api/EditCreditCardInfo';

    private displayIfError(response: BaseResponse): true | null {
        if (response?.errors?.length > 0) {
            response.errors.forEach(error => this.toastService.show('Error', error.message));
            return null;
        }
        return true;
    }

    private numberWithOrdinalSuffix(num: number): string {
        const tensValue = Math.floor(num / 10 % 10);
        const isTeen = tensValue === 1;
        const onesValue = isTeen ? 'teen' : num % 10;
        const suffix = ({ 1: 'st', 2: 'nd', 3: 'rd' })[onesValue] as string || 'th';

        return `${num}${suffix}`;
    }

    private getPaymentNameForAdd(isEft: boolean, maxCount: number, index: number): string {

        const prefix = maxCount > 1
            ? this.numberWithOrdinalSuffix(index + 1)
            : 'a';

        return `${prefix} ${isEft ? 'Bank Account' : 'Card'}`;
    }

    private getPaymentMethodDisplayDetails(isEft: boolean, paymentMethod, countryList: any[]) {
        return paymentMethod
            ? isEft
                ? {
                    accountInfo: `Bank Account ****** ${paymentMethod.accountNumber.slice(-4)}`
                }
                : {
                    accountInfo: `${this.creditCardTypeService.cardCodeToName(paymentMethod.cardCode)} **** ${paymentMethod.cardNbr.slice(-4)}`,
                    expiration: `${('0' + paymentMethod.expMonth).slice(-2)}/${(paymentMethod.expYear + '').slice(-2)}`,
                    expirationFullYear: `${('0' + paymentMethod.expMonth).slice(-2)}/${(paymentMethod.expYear + '')}`,
                    isInternational: this.billingInfoUtilitiesService.isInternationalAddress(paymentMethod),
                    displayCountry: this.countryConversionService.countryCodeToName(countryList, paymentMethod.country),
                    isCardExpired: !this.expirationDateService.isDateValid(paymentMethod.expMonth, paymentMethod.expYear)
                }
            : {};
    }

    private isPrimary(currentPaymentMethod: { primary: boolean }) {
        return currentPaymentMethod && currentPaymentMethod.primary;
    }

    private mapPaymentMethodToContainer(isEft: boolean, maxCount: number, countryList: any[]) {
        return (currentPaymentMethod, index: number) => ({
            isEft,
            paymentName: this.getPaymentNameForAdd(isEft, maxCount, index),
            isSelected: false,
            paymentMethod: currentPaymentMethod,
            isPrimary: this.isPrimary(currentPaymentMethod),
            ...this.getPaymentMethodDisplayDetails(isEft, currentPaymentMethod, countryList)
        });
    }


    private getPaymentContainers(paymentMethods: any[], maxCount: number, isEft: boolean, countryList: any[]) {
        return (paymentMethods.length < maxCount
            ? [...paymentMethods, false]
            : paymentMethods)
            .map(this.mapPaymentMethodToContainer(isEft, maxCount, countryList));
    }


    private getAllPaymentContainers(cardContainers, eftContainers) {
        return [...cardContainers, ...eftContainers].filter(container => container.paymentMethod);
    }

    private isEftOnTop(creditCards, bankAccounts) {
        return bankAccounts.filter(eft => eft.primary).length > 0 || (creditCards.length < 1 && bankAccounts.length > 0);
    }

    private showDelete(numberOfPaymentMethods) {
        return numberOfPaymentMethods > 1;
    }

    public getBillingInformationFrom({ isAccountInvoiced, creditCards, bankAccounts, mailingAddress, stateList, countryList, maxCards, maxEfts }) {

        mailingAddress.isInternational = this.billingInfoUtilitiesService.isInternationalAddress(mailingAddress);
        if (mailingAddress.country) {
            mailingAddress.displayCountry = this.countryConversionService.countryCodeToName(countryList, mailingAddress.country);
        }

        const cardContainers = this.getPaymentContainers(creditCards, maxCards, false, countryList);
        const eftContainers = this.getPaymentContainers(bankAccounts, maxEfts, true, countryList);
        const allPaymentContainers = this.getAllPaymentContainers(cardContainers, eftContainers);

        return {
            wasLoaded: true,
            isAccountInvoiced,
            eftOnTop: this.isEftOnTop(creditCards, bankAccounts),
            stateList,
            countryList,
            mailingAddress,
            cardContainers,
            eftContainers,
            allPaymentContainers,
            showDelete: this.showDelete(allPaymentContainers.length)
        };
    }

    public async updatePaymentInfo(updateType: string, billingInfo: BillingInfo): Promise<ErrorMessage[]> {
        const isCredit = billingInfo.billingType === BillingType.Credit;

        let url: string;

        if (updateType === 'a') {
            url = isCredit
                ? this.addCreditBillingInfoUrl
                : this.addEftBillingInfoUrl;
        }
        else if (updateType === 'e') {
            url = isCredit
                ? this.editCreditBillingInfoUrl
                : this.editEftBillingInfoUrl;
        }

        const payload = {
            paymentMethod: {
                ...(billingInfo.credit || billingInfo.eft),

                billingType: isCredit ? 0 : 1,
                billingTypeCode: isCredit ? 'C' : 'E',
                billingTypeDisplay: isCredit ? 'CREDIT' : 'EFT'
            }
        };

        const response: BaseResponse = await this.httpService.post(url, payload);

        return this.displayIfError(response) ? [] : response.errors;
    }

}

