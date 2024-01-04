module HCTRA.Model {
    export class VantivTriPosCreateOmniTokenResponse {
        accountNumber: string;
        binValue: string;
        cardHolderName: string;
        cardLogo: string;
        entryMode: string;
        expirationMonth: string;
        expirationYear: string;
        isOffline: boolean;
        merchantId: string;
        tokenId: string;
        tokenProvider: string;
        transactionDateTime: string;

        cancelledByUser?: boolean;
    }
}