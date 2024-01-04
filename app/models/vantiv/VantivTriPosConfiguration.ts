module HCTRA.Model {
    
    export class VantivTriPosConfiguration extends HCTRA.Model.BaseResponse {

        accountId: string;
        accountToken: string;
        applicationId: string;
        acceptorId: string;
        laneId: number;
        vaultId: string;

        applicationName: string;
        applicationVersion: string;
        authorization: string;
        requestId: string;

        url: string;
    }

    export class VantivTriPosStatus extends HCTRA.Model.BaseResponse {
        active: boolean;
        allowCreditCardInputWhenDeviceDisabled: boolean;
        getCardNameFromTriPos: boolean;
    }
}