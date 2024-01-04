import { BillingInfo, Country, State } from 'common/models';

export interface IBillingContent {
    header: string;
    billingInfo: BillingInfo;
    links: [
        {
            name: string;
            visible: boolean;
        }
    ];
    states: State[];
    countries: Country[];
    redirectToPaymentOnEdit?: boolean;
}
