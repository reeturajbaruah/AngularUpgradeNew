import {
    Component, Inject, Input, OnInit
} from '@angular/core';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { WindowRef } from 'common/providers';
import { wait } from 'common/utilities';

import { ViolationPlateContainer } from 'violations/interfaces';
import { WebStorageConst } from 'constants/module';
import { StateNames as ViolationStates } from 'violations/constants';
import { hideTrigger } from 'animations/hide';
import { StepperStep } from 'common/ui';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';


interface FrameCmsData {
    Step1: string;
    Step2: string;
    Step3: string;
    Step4: string;
}


@Component({
    selector: 'violations-frame-component',
    templateUrl: './frame.html',
    styleUrls: ['./frame.less'],
    animations: [hideTrigger]
})
export class FrameComponent implements OnInit {

    constructor(
        private uiRouterGlobals: UIRouterGlobals,
        private webStorageConst: WebStorageConst,
        private violationStates: ViolationStates,
        @Inject(WindowRef) private windowRef: Window,
        private webStorage: WebStorageService,
        private stateService: StateService
    ) { }

    private readonly emptyPlate: ViolationPlateContainer = {
        plate: {
            licensePlate: '',
            licenseState: '',
            discountProgramCode: 0,
            uninvoicedViolations: [],
            invoices: []
        }
    } as any;

    @Input() cms: FrameCmsData;
    @Input() public stateList: { stateCode: string }[];
    @Input() public countryList: { countryCode: string; displayName: string }[];
    public steps: StepperStep[] = [];
    public stepNum = 0;
    public isHidden: boolean;

    ngOnInit() {
        this.steps = [
            { name: this.cms.Step1, background: 'primary' },
            { name: this.cms.Step2, background: 'secondary' },
            { name: this.cms.Step3, background: 'secondary' },
            { name: this.cms.Step4 }
        ];
    }

    public async scrollToTop() {
        this.isHidden = true;

        await wait(20);
        this.windowRef.scrollTo(0, 0);

        this.isHidden = false;
    }

    public get currentData() {
        return this.uiRouterGlobals.current?.data || {};
    }

    public setTitle(title: string) {
        this.uiRouterGlobals.current.data.title = title;
    }

    public getPlateContainer(): ViolationPlateContainer {
        const plateContainer = this.webStorage.getValue(this.webStorageConst.enhancedViolationsPlateAndInvoiceData);

        if (!plateContainer) {
            this.stateService.go(this.violationStates.Landing);
            return this.emptyPlate;
        }

        return plateContainer;
    }
}
