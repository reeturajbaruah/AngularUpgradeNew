import { Component, OnInit } from '@angular/core';
import { IStoreLocatorCms } from 'helpAndSupport/models/store-locator.models';
import { HelpAndSupportManagerService } from 'helpAndSupport/services/manager/help-and-support-manager.service';

@Component({
    selector: 'help-and-support-store-locator',
    templateUrl: './store-locator.component.html',
    styleUrls: ['store-locator.component.less']
})
export class StoreLocatorComponent implements OnInit {
    storeLocatorCms: IStoreLocatorCms;

    constructor(
        private manager: HelpAndSupportManagerService
    ) { }

    ngOnInit() {
        this.storeLocatorCms = this.manager.getStoreLocatorCms();
    }
}
