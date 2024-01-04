import { Inject, Injectable } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { StateConfig } from 'common/interfaces';
import { BillingType } from 'common/models';
import { ResponseErrorService } from 'common/services';
import {
    webStorageConst
} from 'constants/module';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';
import { stateNames as missedATollStateNames } from '../constants';
import {
    FormattedViolationDataDTO, InvoiceConstruct, MissedATollViolation, ViolationDataEntry, ViolationInformationDTO
} from '../interfaces';




@Injectable()
export class MissedATollService {
    constructor(
        private webStorage: WebStorageService,
        private responseErrorService: ResponseErrorService,
        private state: StateService
    ) { }

    private internalViolationInformatiion: ViolationInformationDTO;

    public saveViolationInformation(data: ViolationInformationDTO) {
        this.internalViolationInformatiion = data;
    }

    public getViolationInformation(): ViolationInformationDTO {
        return this.internalViolationInformatiion;
    }

    public destroyViolationInformation() {
        this.webStorage.removeEntry(webStorageConst.missedATollCurrentStep);
    }

    public async constructMatPaymentRequest(billingType, billingInfo, violationInformation, violationList, emailAddress) {

        const request = {} as any;
        request.violationInfo = {} as any;

        request.violationInfo.agencyId = null;
        request.violationInfo.licPlateNum = violationInformation.licensePlate;
        request.violationInfo.jurisdiction = violationInformation.state;
        request.violationInfo.serviceFee = violationInformation.serviceFee;
        request.violationInfo.notes = null;

        // Combine all invoice arrays into one for request
        let allViolations = [];
        violationList.invoices.forEach((invoice) => {
            allViolations = allViolations.concat(invoice.data);
        });

        request.violationInfo.violations = allViolations.map((obj) => {
            const tempViolation = {} as any;
            tempViolation.agency = obj.agencyCode;
            tempViolation.violationId = obj.violationNumber;
            tempViolation.eventDateTime = obj.violationDate;
            tempViolation.eventLocation = obj.location;
            tempViolation.balance = obj.amountDue;
            //tempViolation.balance = 0; // switch out with above line to not pay violations
            tempViolation.inPayment = true;

            return tempViolation;
        });

        request.violationInfo.agencyPayments = [];
        violationList.invoices.forEach((invoice) => {
            if (invoice.total > 0) {
                request.violationInfo.agencyPayments.push({ agency: invoice.agencyName, paymentAmount: invoice.total });
            }
        });

        request.emailAddress = emailAddress;

        if (billingType === BillingType.Credit) {
            request.card = Object.assign({}, billingInfo.credit);

            request.card.type = request.card.cardCode;
            request.card.creditCardNumber = request.card.cardNbr;

            request.violationInfo.paymentType = request.card.cardCode;
        } else if (billingType === BillingType.Eft) {
            request.eft = Object.assign({}, billingInfo.eft);

            request.violationInfo.paymentType = request.eft.accountType;
        }

        return await request;
    }

    public setViolationDataAndGenerateTotalAmountDue(listOfViolations, serviceFee) {
        const formattedViolationData: FormattedViolationDataDTO = {
            totalAmountDue: 0.00,
            grandTotal: 0.00,
            listOfViolations: {
                totalInvoices: 0,
                invoices: [] as InvoiceConstruct<ViolationDataEntry>[]
            }
        };

        const invoices = formattedViolationData.listOfViolations.invoices;
        listOfViolations.forEach((element) => {
            const newData = this.mapResponseToDataEntry(element);

            //This was to account for more dynamic agencies for Configurable Agency CAF feature
            if (!invoices.find(x => x.agencyName === newData.agencyCode.toUpperCase())) {
                invoices.push({
                    agencyName: newData.agencyCode,
                    total: newData.amountDue,
                    data: []
                });
                const currIndex = invoices.length - 1;
                invoices[currIndex].data.push(newData);
            }
            else {
                const currIndex = invoices.findIndex(x => x.agencyName === newData.agencyCode);
                invoices[currIndex].data.push(newData);
                invoices[currIndex].total += newData.amountDue;
            }
        });

        invoices.forEach((agency) => {
            agency.data.sort(this.invoiceSort);
        });

        invoices.forEach((element) => {
            formattedViolationData.totalAmountDue += element.total;
            formattedViolationData.listOfViolations.totalInvoices += element.data.length;
        });

        formattedViolationData.grandTotal = serviceFee + formattedViolationData.totalAmountDue;

        return formattedViolationData;
    }

    private invoiceSort(a, b) {
        const aDate = new Date(a.violationDate);
        const bDate = new Date(b.violationDate);
        return aDate.valueOf() - bDate.valueOf();
    }

    private mapResponseToDataEntry(element: MissedATollViolation) {
        const newData: ViolationDataEntry = {
            agencyCode: element.agency,
            violationNumber: element.violationId.toString(),
            violationDate: element.eventDateTime,
            amountDue: element.balance,
            location: element.eventLocation,
            mobileAgency: element.mobileAgency
        };

        return newData;
    }

    public async processSuccessSearch(response, licensePlate, licenseState, nextState?: StateConfig) {
        const formattedViolationData =
            this.setViolationDataAndGenerateTotalAmountDue(response.listOfViolations, response.serviceFee);

        const violationInformationDto: ViolationInformationDTO = {
            lastMatPerformed: response.lastMatPerformed,
            serviceFee: response.serviceFee,
            licensePlate: licensePlate.toUpperCase(),
            state: licenseState,
            formattedViolationData
        };

        this.saveViolationInformation(violationInformationDto);

        this.responseErrorService.displayAlertsFromResponse(response, true);

        await (
            nextState
                ? this.state.go(nextState, {}, { custom: { isExplicitlyAllowedTransition: true } })
                : this.state.go(missedATollStateNames.Grid, {}, { custom: { isExplicitlyAllowedTransition: true } })
        );
    }
}
