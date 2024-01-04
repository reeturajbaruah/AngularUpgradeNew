import { Component, Input } from '@angular/core';
import { StateService } from '@uirouter/angular';
import type { SiteCoreItem } from 'cms/cms.module';

@Component({
    selector: 'first-time-login-frame',
    templateUrl: './frame.html',
    styleUrls: ['./frame.less']
})
export class FirstTimeLoginFrameComponent{

    @Input() cmsData: SiteCoreItem;
    public source = 'FIRST TIME LOGIN';

    constructor(
        private state: StateService
    ) { }
}
