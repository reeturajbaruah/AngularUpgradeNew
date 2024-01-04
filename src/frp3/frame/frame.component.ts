import {
    Component, Inject, Input, OnInit
} from '@angular/core';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { WindowRef } from 'common/providers';
import { wait } from 'common/utilities';
import { WebStorageConst } from 'constants/module';
import { StateNames as ViolationStates } from '../constants';
import { hideTrigger } from 'animations/hide';
import { StepperStep } from 'common/ui';
import { FrameCmsData, EOViolationPlateContainer } from '../interfaces';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';

@Component({
    selector: 'violation-frame-component',
    templateUrl: './frame.html',
    styleUrls: ['./frame.less']
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

    private readonly emptyPlate: EOViolationPlateContainer = {
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
            { name: this.cms.Step4, background: 'secondary' }
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

    public getPlateContainer(): EOViolationPlateContainer {
        const plateContainer = this.webStorage.getValue(this.webStorageConst.enhancedViolationsPlateAndInvoiceData);

        if (!plateContainer) {
            this.stateService.go(this.violationStates.Landing);
            return this.emptyPlate;
        }

        return plateContainer;
    }
    
}
