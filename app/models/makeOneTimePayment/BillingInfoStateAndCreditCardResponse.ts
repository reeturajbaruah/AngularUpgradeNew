module HCTRA.Model {

    export interface BillingInfoStateAndCreditCardResponse extends IBaseResponse {
        accountTags: Vehicle[];
        pbpTags: Vehicle[];

        billingInfo: BillingInfo;
        creditCardTypes: CreditCardType[];
        states: State[];
        countries: Country[];
    }
}