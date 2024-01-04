import { Component, Input, OnInit } from '@angular/core';
import { IFrameCms, IHelpAndSupportCms } from 'helpAndSupport/models/frame.models';
import { HelpAndSupportManagerService } from '../../services/manager/help-and-support-manager.service';

@Component({
    selector: 'frame-helpandsupport',
    templateUrl: './frame.component.html',
    styleUrls: ['frame.component.less']
})
export class FrameComponent implements OnInit {
    @Input() cmsContent: IHelpAndSupportCms;
    frameCms: IFrameCms;

    constructor(
        private manager: HelpAndSupportManagerService
    ) { }

    ngOnInit() {
        this.manager.loadCmsData(this.cmsContent);
        this.frameCms = this.manager.getFrameCms();
    }
}
