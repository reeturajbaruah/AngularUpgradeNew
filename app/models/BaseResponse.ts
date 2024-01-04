module HCTRA.Model {
    export class BaseResponse implements IBaseResponse {

        constructor() {
            this.errors = [];
            this.alerts = [];
        }

        errors: ErrorMessage[];
        alerts: Alert[];
        exception: string;
        sessionTimedOut: boolean;
        accountStatus: string;
    }
}