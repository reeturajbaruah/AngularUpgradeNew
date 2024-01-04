import { CreditCardDetails } from 'common/models';

export interface IState {
    creditCard: CreditCardDetails;
    nameSuffix: string;
    disableValidation?: boolean;
    config?: {
        useExistingCard: boolean;
        expMonthDisabled: boolean;
        expYearDisabled: boolean;
    };
}

