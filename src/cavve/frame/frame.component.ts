import { Inject } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { StateService, Transition } from '@uirouter/angular';
import { StepperStep } from 'common/ui';

import { EOViolationPlateContainer } from 'frp3/interfaces';
import { WebStorageConst } from 'constants/module';
import { stateNames as violationStates } from 'violations/constants';
import { IFeeInfo } from 'cavve/interfaces';

import { webStorageConstants } from 'cavve/constants';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';

interface FrameCmsData {
    Title: string;
    Step1: string;
    Step2: string;
    Step3: string;
    Step4: string;
    CancelQuestion: string;
    CancelResolve: string;
    CancelReject: string;
}

@Component({
    selector: 'cavve-frame-component',
    templateUrl: './frame.html',
    styleUrls: ['./frame.less']
})
export class FrameComponent implements OnInit {
    constructor(
        private webStorageConst: WebStorageConst,
        private webStorage: WebStorageService,
        private stateService: StateService
    ) { }
    @Input() cmsBaseContent: FrameCmsData;
    @Input() public usStates: { stateCode: string }[];
    @Input() public countries: { countryCode: string; displayName: string }[];

    public initialStateSuccess: boolean;

    public steps: StepperStep[] = [];
    public stepNum = 0;

    public showAccountDetailsHeader: boolean;

    public createAccountFromViolationsTotals: IFeeInfo;
    public violations: any;

    public getPlateContainer(): EOViolationPlateContainer {
        const plateContainer = this.webStorage.getValue(this.webStorageConst.enhancedViolationsPlateAndInvoiceData);

        if (!plateContainer) {
            // To see offer page without going through Violations:
            // Comment out the line below.
            this.stateService.go(violationStates.Landing);

            return {
                plate: {
                    licensePlate: '',
                    licenseState: '',
                    discountProgramCode: 0,
                    uninvoicedViolations: [],
                    invoices: []
                }
            } as any;
        }

        return plateContainer;
    }

    ngOnInit() {
        this.webStorage.removeEntry(this.webStorageConst.cavveConversionData);

        this.violations = this.webStorage.getValue(webStorageConstants.uninvoiced);

        this.createAccountFromViolationsTotals =
            this.webStorage.getValue(webStorageConstants.createAccountFromViolationsTotals) || {};

        this.createAccountFromViolationsTotals.totalViolationsDue =
            this.webStorage.getValue(webStorageConstants.remainingPlateTotalBeforeDiscount);

        this.createAccountFromViolationsTotals.serviceFee = this.webStorage.getValue(webStorageConstants.serviceFee);

        this.steps = [
            { name: this.cmsBaseContent.Step1, background: 'secondary' },
            { name: this.cmsBaseContent.Step2, background: 'secondary' },
            { name: this.cmsBaseContent.Step3, background: 'secondary' },
            { name: this.cmsBaseContent.Step4 }
        ];

        this.showAccountDetailsHeader = false;
    }

    public setFrameTitle(title: string) {
        this.cmsBaseContent.Title = title;
    }
}
