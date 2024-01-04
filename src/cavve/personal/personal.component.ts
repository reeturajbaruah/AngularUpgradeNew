import { Component, Input, OnInit, Inject, ViewEncapsulation, OnDestroy } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { StateConfig } from 'common/interfaces';

import { DialogService, GenericRepoService, ResponseErrorService } from 'common/services';

import {
    NewBillingAddressModalComponent,
    NewBillingAddressInjectionValues
} from 'common/ui/modals/newBillingAddressModal/newBillingAddressModal.component';

import {
    EditVehicleModalComponent,
    EditVehicleInjectionValues
} from 'common/ui/modals/editVehicleModal/editVehicleModal.component';

import {
    CancelModalComponent, InjectedCancelationValues
} from '../frame/cancelModal.component';

import { FrameComponent } from '../frame/frame.component';
import { IMailingInfo, IVehicleInfo, IAccountInfo, ILoginInfo, State, Country, CreateLoginAccountInfo } from 'common/models';
import { cloneDeep } from 'common/utilities';
import { GenericCmsModalComponent, GenericCmsModalContent, GenericCmsModalInjectionValues } from 'common/ui';
import { EOViolationPlateContainer } from 'frp3/interfaces';
import { WebStorageConst } from 'constants/module';
import { CancelMessageCmsData, PersonalPageCmsData } from 'cavve/interfaces';
import { PasswordValidationInfo } from 'common/interfaces';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';
@Component({
    selector: 'cavve-personal-component',
    templateUrl: './personal.html',
    styleUrls: ['./personal.less'],
    encapsulation: ViewEncapsulation.None
})
export class PersonalComponent implements OnInit, OnDestroy {

    constructor(
        private parent: FrameComponent,
        private state: StateService,
        private responseErrorService: ResponseErrorService,
        private dialogService: DialogService,
        private genericRepoService: GenericRepoService,
        private webStorage: WebStorageService,
        private webStorageConst: WebStorageConst
    ) { }

    @Input() public personalPageInfo: PersonalPageCmsData;
    @Input() public cancelMessageContent: CancelMessageCmsData;
    @Input() public usStates: State[];
    @Input() public pwCmsData: PasswordValidationInfo;
    public plateContainer: EOViolationPlateContainer;

    //Bindings
    public pageData: any;
    public onContinue: () => void;
    public onPrevious: () => void;
    public onCancel: () => void;

    public accountInfo: IMailingInfo & IVehicleInfo & IAccountInfo & CreateLoginAccountInfo;
    public currentAccountInfo: IMailingInfo & IVehicleInfo & IAccountInfo & CreateLoginAccountInfo;
    public loginInfo: ILoginInfo;

    public isShowPassword: boolean;
    public isShowSecurityAnswer: boolean;
    public securityQuestions: { securityQuestion: string; securityQuestionID: number }[];

    public securityQuestion: string;
    public maskedDriverLicenseNumber: string;

    public statesList: State[] = [];
    public countryList: Country[];

    public isMailingInfoIncomplete: boolean;
    public isVehicleInfoIncomplete: boolean;
    public hasInitialLoginInfo: boolean;
    private isMotorcycleDisabled: boolean;

    public verifyInfoChecked: boolean;

    async ngOnInit() {
        this.plateContainer = this.parent.getPlateContainer();
        this.accountInfo = this.initAccountInfo();
        this.parent.stepNum = 1;

        this.parent.setFrameTitle(this.personalPageInfo.pageTitle);

        this.loginInfo = {
            password: '',
            securityAnswer: ''
        };
        this.isShowPassword = false;
        this.isShowSecurityAnswer = false;

        this.currentAccountInfo = this.webStorage.getValue(this.webStorageConst.cavveConversionData);
        //Generic API Set Functions
        let response: any;
        if (this.currentAccountInfo === null) {
            response = await this.genericRepoService.dataFactory.GetViolatorAccntInfo();
            this.setViolatorAccountInfo(response);
        } else {
            this.accountInfo = this.currentAccountInfo;
        }
        response = await this.genericRepoService.dataFactory.getSecurityQuestions();
        this.setSecurityQuestions(response);
        response = await this.genericRepoService.dataFactory.getStates();
        this.setStatesList(response);
        response = await this.genericRepoService.dataFactory.getCountries();
        this.setCountryList(response);

        if (this.currentAccountInfo !== null) {
            this.isNotMissingMailSliderInfo();
            this.isNotMissingVehicleSliderInfo();
            this.hasInitialLoginInfo = (!this.accountInfo.username) ? false : true;
        }

        this.securityQuestion = '';
        this.maskedDriverLicenseNumber = '';
        if (this.hasInitialLoginInfo) {
            const securityQuestionObj =
                this.securityQuestions.filter(obj => obj.securityQuestionID === this.accountInfo.securityQuestionID)[0];
            if (securityQuestionObj) {
                this.securityQuestion = securityQuestionObj.securityQuestion;
            }
            if (this.accountInfo.driverLicenseNumber) {
                this.maskedDriverLicenseNumber =
                    `****-${this.accountInfo.driverLicenseNumber.substring(this.accountInfo.driverLicenseNumber.length - 3)}`;
            }
        }

            this.isMotorcycleDisabled = true;
    }

    ngOnDestroy() {
        this.webStorage.setKeyValue(this.webStorageConst.cavveConversionData, this.accountInfo);
    }

    public submit(nextState: StateConfig) {
        if (this.isNotMissingMailSliderInfo() && this.isNotMissingVehicleSliderInfo()) {
            this.accountInfo.byMail = false;
            this.accountInfo.byEmail = true;
            const request = {
                accountInfo: this.accountInfo,
                password: this.loginInfo.password,
                securityAnswer: this.loginInfo.securityAnswer
            };

            return this.genericRepoService.dataFactory.SetViolatorAccountInfo(request).then(res => {
                if (this.responseErrorService.isErrorFree(res)) {
                    this.state.go(nextState);
                }

            });
        }
    }

    public async previous(prevState: StateConfig) {
        await this.state.go(prevState);
    }

    public async tryCancel(cancelState: StateConfig) {

        const data: GenericCmsModalInjectionValues = {
            cmsContent: {
                Title: this.cancelMessageContent.cancelQuestion,
                PrimaryContent: '',
                CancelBtn: this.cancelMessageContent.cancelResolve,
                AcceptBtn: this.cancelMessageContent.cancelReject
            }
        };
        const res = await this.dialogService.openGenericModal(GenericCmsModalComponent, data);
        if (!res) {
            this.state.go(cancelState);
        }
    }

    public openMailingAddressModal() {

        const data: NewBillingAddressInjectionValues = {
            mailingInfo: cloneDeep(this.getMailingAddressInfo()),
            stateList: this.statesList,
            countryList: this.countryList,
            isShowPersonalInfo: true,
            addressTitle: 'Mailing Address'
        };

        return this.dialogService.openSliderCentered(NewBillingAddressModalComponent, data, {
            title: 'Edit Personal Information'
        }).then((result) => {
            if (result) {
                this.setMailingAddressInfo(result.mailingInfo);
                this.isNotMissingMailSliderInfo();
            }
        });
    }

    public openLicensePlateModal() {

        const data: EditVehicleInjectionValues = {
            vehicleInfo: cloneDeep(this.getVehicleInfo()),
            modalCms: {
                vehicleInfoTitle: this.personalPageInfo.vehicleInfoTitle,
                vehicleToolTipEditButton: this.personalPageInfo.vehicleToolTipEditButton,
                vehicleToolTipText: this.personalPageInfo.vehicleToolTipText
            },
            stateList: this.statesList,
            plateIsReadOnly: true,
            motorcycleDisabled: true
        };

        return this.dialogService.openSliderCentered(EditVehicleModalComponent, data, {
            title: 'Edit Vehicle Information'
        })
            .then((result) => {
                if (result) {
                    this.setVehicleInfo(result.vehicleInfo);
                    this.isNotMissingVehicleSliderInfo();
                }
            });
    }

    public initAccountInfo = (): IMailingInfo & IVehicleInfo & IAccountInfo & CreateLoginAccountInfo => ({
        securityQuestionID: null,
        driverLicenseNumber: null,
        byMail: null,
        byEmail: null,
        username: null,

        internationalAddress: null,
        firstName: null,
        lastName: null,
        address1: null,
        city: null,
        country: null,

        licState: null,
        licPlate: null,
        vehicleYear: null,
        vehicleModel: null,
        vehicleMake: null,
        vehicleColor: null,
        vehicleClassCode: 2,
        vehicleClassDesc: null,
        temporaryLicPlate: null,
        motorcycle: null,
        nickname: null,
        isMotorcycleDisabled: null,

        emailAddress: null,
        phoneNum: null,
        phoneExt: null,
        smsAlertsOptIn: null,
        driverLicenseState: null
    });

    public getMailingAddressInfo = (): IMailingInfo => ({
        firstName: this.accountInfo.firstName,
        lastName: this.accountInfo.lastName,
        internationalAddress: this.accountInfo.internationalAddress,
        address1: this.accountInfo.address1,
        address2: this.accountInfo.address2,
        city: this.accountInfo.city,
        state: this.accountInfo.state,
        zip: this.accountInfo.zip,
        plus4: this.accountInfo.plus4,
        country: this.accountInfo.country
    });

    public getVehicleInfo = (): IVehicleInfo => ({
        licState: this.accountInfo.licState,
        licPlate: this.accountInfo.licPlate,
        vehicleYear: this.accountInfo.vehicleYear,
        vehicleModel: this.accountInfo.vehicleModel,
        vehicleMake: this.accountInfo.vehicleMake,
        vehicleColor: this.accountInfo.vehicleColor,
        vehicleClassCode: this.accountInfo.vehicleClassCode,
        vehicleClassDesc: this.accountInfo.vehicleClassDesc,
        temporaryLicPlate: this.accountInfo.temporaryLicPlate,
        nickname: this.accountInfo.nickname,
        motorcycle: this.accountInfo.motorcycle,
        isMotorcycleDisabled: this.isMotorcycleDisabled
    });

    public setMailingAddressInfo = (res: IMailingInfo) => {
        this.accountInfo.firstName = res.firstName;
        this.accountInfo.lastName = res.lastName;
        this.accountInfo.internationalAddress = res.internationalAddress;
        this.accountInfo.address1 = res.address1;
        this.accountInfo.address2 = res.address2;
        this.accountInfo.city = res.city;
        this.accountInfo.state = res.state;
        this.accountInfo.zip = res.zip;
        this.accountInfo.plus4 = res.plus4;
        this.accountInfo.country = res.country;
    };

    public setVehicleInfo = (res: IVehicleInfo) => {
        this.accountInfo.licState = res.licState;
        this.accountInfo.licPlate = res.licPlate;
        this.accountInfo.vehicleYear = res.vehicleYear;
        this.accountInfo.vehicleModel = res.vehicleModel;
        this.accountInfo.vehicleMake = res.vehicleMake;
        this.accountInfo.vehicleColor = res.vehicleColor;
        this.accountInfo.vehicleClassCode = res.vehicleClassCode;
        this.accountInfo.vehicleClassDesc = res.vehicleClassDesc;
        this.accountInfo.temporaryLicPlate = res.temporaryLicPlate;
        this.accountInfo.motorcycle = res.motorcycle;
        this.accountInfo.nickname = res.nickname;
    };

    public isNotMissingMailSliderInfo = () => {
        const acctInfo = this.accountInfo;

        //comment below is from original implementation
        //This boolean covers the international conditions TODO: Make this a positive variable name to avoid double negatives
        const internationalIsInvalid = (!acctInfo.internationalAddress && !(acctInfo.city && acctInfo.state && acctInfo.zip)) ||
            (acctInfo.internationalAddress && !acctInfo.country);
        if (!(acctInfo.firstName && acctInfo.lastName && acctInfo.address1) || internationalIsInvalid) {
            this.isMailingInfoIncomplete = true;
            return false;
        } else {
            this.isMailingInfoIncomplete = false;
            return true;
        }
    };

    public isNotMissingVehicleSliderInfo = () => {
        const acctInfo = this.accountInfo;
        if (!(acctInfo.vehicleClassCode && acctInfo.vehicleYear && acctInfo.vehicleMake
            && acctInfo.vehicleModel && acctInfo.vehicleColor)) {
            this.isVehicleInfoIncomplete = true;
            return false;
        } else {
            this.isVehicleInfoIncomplete = false;
            return true;
        }
    };

    private setViolatorAccountInfo = (res) => {
        if (this.responseErrorService.isErrorFree(res)) {
            if (res.accountInfo !== null) {
                res.accountInfo.securityQuestionID = (res.accountInfo.securityQuestionID === 0) ?
                    undefined : res.accountInfo.securityQuestionID;
                res.accountInfo.driverLicenseState = (res.accountInfo.driverLicenseNumber) ?
                    res.accountInfo.driverLicenseState : 'TX';
                this.accountInfo = res.accountInfo;

                //this is to trigger the alert icon if there is missing info in the sliders
                this.isNotMissingMailSliderInfo();
                this.isNotMissingVehicleSliderInfo();

                this.hasInitialLoginInfo = (!this.accountInfo.username) ? false : true;
            }
            else {
                this.loginInfo = {
                    password: '',
                    securityAnswer: ''
                };
                this.isShowPassword = false;
                this.isShowSecurityAnswer = false;

                this.accountInfo.licPlate = this.plateContainer.plate.licensePlate;
                this.accountInfo.licState = this.plateContainer.plate.licenseState;
                this.accountInfo.accountId = this.plateContainer.accountId;
                this.accountInfo.personId = this.plateContainer.accountConversionData.personId;
                this.accountInfo.addressId = this.plateContainer.accountConversionData.addressId;
                this.isMailingInfoIncomplete = true;
                this.isVehicleInfoIncomplete = true;
            }
        }
    };

    private setSecurityQuestions = (res) => {
        if (this.responseErrorService.isErrorFree(res)) {
            this.securityQuestions = res.securityQuestions;
        }

    };

    private setStatesList = (res) => {
        if (this.responseErrorService.isErrorFree(res)) {
            this.statesList = res.states;
        }
    };

    private setCountryList = (res) => {
        if (this.responseErrorService.isErrorFree(res)) {
            this.countryList = res.countries;
        }
    };
}
