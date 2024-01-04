import { Component, Input, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import type { SiteCoreItem } from 'cms/cms.module';
//import { stateNames } from 'forgotPassword/constants';

@Component({
    selector: 'forgot-password-frame',
    templateUrl: './frame.html',
    styleUrls: ['./frame.less']
})
export class ForgotPasswordFrameComponent{

    @Input() cmsData: SiteCoreItem;
    public source = 'FORGOT PASSWORD';

    constructor(
        private state: StateService
    ) { }
}
