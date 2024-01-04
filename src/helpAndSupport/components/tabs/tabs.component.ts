import { Component, Input, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { States } from '../../states';
import { IFrameCms } from 'helpAndSupport/models/frame.models';
import { UIRouterGlobals } from '@uirouter/core';

@Component({
    selector: 'tabs',
    templateUrl: './tabs.html',
    styleUrls: ['./tabs.less']
})

export class TabsComponent implements OnInit { 
    @Input() frameCms: IFrameCms;
    currentTab: string;
    States = States;
    tabs: any;

    constructor(
        private state: StateService,
        private uiRouterGlobals: UIRouterGlobals
    ) { }

    ngOnInit() {
        this.tabs = [
            { state: States.ContactUs, label: this.frameCms.contactUsTab },
            { state: States.TopFiveFaq, label: this.frameCms.topFiveFaqTab },
            { state: States.Documents, label: this.frameCms.documentsTab },
            { state: States.StoreLocator, label: this.frameCms.storeLocatorTab }
        ];

        this.currentTab = this.uiRouterGlobals.current.name;
    }

    async selectTab(state: string) {
        this.currentTab = state;
        await this.state.go(state);
    }
}
