module HCTRA.Model {

    export class PushStorefrontRequest{
        storefrontSessionID: number;
        accountID: number;
        lP: string;
        licensePlateState: string;
        invoice: string;
        loginID: string;
        activityTime: Date;
        dBSession: string;
        angularState: string;
        uRL: string;
        error: string;
        alert: string;
        email: string;
    }
}