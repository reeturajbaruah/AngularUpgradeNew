module HCTRA.Model {

    export class VantivRequestLog {
        public orderId: string;
        public paypageId: string;
        public requestId: string;
        public reportGroup: string;
        public url: string;

        public violationsData: CoreViolationsData;
    }

}