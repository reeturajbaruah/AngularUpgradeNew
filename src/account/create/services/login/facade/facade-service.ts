import { Injectable } from '@angular/core';
import { ISetupAccountReq } from 'account/create/models/setup-account.model';
import { AuthChannelService } from 'authentication/authChannelService/authChannel.service';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { ICreateAccountContactInfo, ICreateAccountLoginInfo } from 'common/models';
import { AccountService, ResponseErrorService } from 'common/services';
import { LoginFacadeApiService } from '../api/facade-api.service';

@Injectable()
export class LoginFacadeService {

    isUserLoggedIn: boolean;

    constructor(private acctService: AccountService,
        private api: LoginFacadeApiService,
        private authService: AuthenticationService,
        private authChannel: AuthChannelService,
        private responseErrorService: ResponseErrorService
    ) { }

    async getPersonalInfo() {
        return await this.acctService.getContactInfo();
    }

    async setupAccount(loginAndPersonalAcctInfo: ICreateAccountContactInfo & ICreateAccountLoginInfo,
        isFlexPay) {

        if (!this.isUserLoggedIn) {

            const req = this.mapSetupAcctReq(loginAndPersonalAcctInfo, isFlexPay);
            const res = await this.api.setupAccount(req);

            if (res) {
                const resPersonalInfo = await this.setPersonalInfo(loginAndPersonalAcctInfo);
                if (resPersonalInfo) {

                    return await this.login({
                        userName: loginAndPersonalAcctInfo.username,
                        password: loginAndPersonalAcctInfo.password
                    });
                } else {
                    return false;
                }

            } else {
                return false;
            }
        } else {
            await this.setPersonalInfo(loginAndPersonalAcctInfo);
        }
    }

    private mapSetupAcctReq(loginAndPersonalAcctInfo, isFlexPay) {
        const { companyName, emailAddressContact, firstName, lastName, password,
            securityAnswer, securityQuestionID, username, } = loginAndPersonalAcctInfo;

        return {
            companyName,
            emailAddress: emailAddressContact,
            firstName,
            lastName,
            password,
            securityQuestionAnswer: securityAnswer,
            securityQuestionID,
            username,
            isFlexPay
        } as ISetupAccountReq;

    }

    private async login(credentials: { userName: string; password: string }) {

        const apiAuthResponse = await this.authService.login(credentials);
        if (apiAuthResponse && this.responseErrorService.isErrorFree(apiAuthResponse)) {
            await this.authChannel.logIn(apiAuthResponse);
            this.isUserLoggedIn = true;
            return true;
        } else {
            return false;
        }
    }

    async setPersonalInfo(data: ICreateAccountContactInfo & ICreateAccountLoginInfo) {

        const request = {
            isEdit: false,
            acctType: 'personal', // todo: check if always personal
            internationalAddress: data.internationalAddress,
            authorizedContacts: [],
            accountPreferences: {
                byEmail: true,
                emailStatement: true
            },
            companyName: data.companyName,
            firstName: data.firstName,
            lastName: data.lastName,
            primaryPhone: data.primaryPhone,
            primaryPhoneExt: data.primaryPhoneExt,
            smsAlertsOptIn: data.smsAlertsOptIn,
            country: data.isSaveMailingAddressChecked ? data.country : null,
            state: data.isSaveMailingAddressChecked ? data.state : null,
            address1: data.isSaveMailingAddressChecked ? data.address1 : null,
            address2: data.isSaveMailingAddressChecked ? data.address2 : null,
            city: data.isSaveMailingAddressChecked ? data.city : null,
            zip: data.isSaveMailingAddressChecked ? data.zip : null
        };

        return await this.api.setPersonalInfo(request);
    }
}


