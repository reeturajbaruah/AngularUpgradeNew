import { Component, Input } from '@angular/core';
import { SiteCoreItem } from 'cms/cms.module';

@Component({
    selector: 'setup-complete',
    templateUrl: './setupComplete.html',
    styleUrls: ['./setupComplete.less']
})
export class FirstTimeLoginSetupCompleteComponent {

    @Input() cmsData: SiteCoreItem;

}
