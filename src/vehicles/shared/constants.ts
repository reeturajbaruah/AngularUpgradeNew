import { IMailingInfo } from 'common/models';

export const Constants = {
    root: 'ManageVehicles'
};

export const emptyMailingInfo = {
    address1: null,
    address2: null,
    city: null,
    country: 'USA',
    international: false,
    state: 'TX',
    zip: null,
    internationalAddress: false
} as IMailingInfo;

