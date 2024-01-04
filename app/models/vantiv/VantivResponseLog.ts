module HCTRA.Model {

    export class VantivResponseLog {
        public id?: string;
        public vantivTxnId?: string;
        public litleTxnId?: string;
        public message?: string;
        public orderId?: string;
        public paypageRegistrationId?: string;
        public reportGroup?: string;
        public response?: string;
        public responseTime?: string;
        public targetServer?: string;
        public type?: string;
        public url?: string;
        public isError?: boolean;
        public customLogMessage?: string;

        public violationsData: CoreViolationsData;
    }

}