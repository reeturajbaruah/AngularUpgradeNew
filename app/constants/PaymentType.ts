module HCTRA.Constant {
    "use strict";

    // Must match the PaymentType enum in BosWebServices
    export enum PaymentType {
        CREDIT,
        EFT,
        INVOICE,
        NON_REVENUE,
        CASH
    }
}