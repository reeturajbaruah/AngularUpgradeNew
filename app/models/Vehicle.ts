module HCTRA.Model {
    export interface Vehicle {
        tagId: string;
        fullTagId: string;
        acctTagSeq: number;
        acctTagSeqSpecified: boolean;
        licPlate: string;
        licState: string;
        motorcycle: boolean;
        nickname: string;
        temporaryLicPlate: boolean;
        vehicleClassCode: string;
        vehicleClassDesc: string;
        vehicleColor: string;
        vehicleMake: string;
        vehicleModel: string;
        vehicleYear: string;
        acctTagStatus: string;
        tagStatusDesc: string;
        pbpStartDate: Date;
        pbpEndDate: Date;
        tagTypeCode: string;
        activePbpTagExist: boolean;
        tagless_Desc: string;
    }
}