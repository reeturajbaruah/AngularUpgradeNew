module HCTRA.Model {
    export interface IBaseResponse extends IErrorList {

        alerts: Alert[];
        exception: string;
        sessionTimedOut: boolean;
        accountStatus: string;
    }
}