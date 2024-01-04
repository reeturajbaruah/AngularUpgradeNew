declare module HCTRA.Model {

    export interface AddMissingInformationResponse extends IBaseResponse {

        accountId: number;
        accountActivity: string;
        newAccountStep: { currentStep: number, accountComplete: boolean };
        firstName: string;
        lastName: string;
        driverLic: string;
        driverLicState: string;
        companyName: string;
        isInvoiced: boolean;
    }
}