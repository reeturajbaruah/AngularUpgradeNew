module HCTRA.Service {
    export interface IMapperService {
        mapToAccountActivityDTO(data: HCTRA.Model.UnformattedAccountActivityDTO, vehicleData: any): HCTRA.Model.AccountActivityDTO;
        mapToViolationsData(invoice: HCTRA.Model.Invoice, paymentAmount?: string): HCTRA.Model.ViolationsData;
    }
}