import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DialogService } from 'common/services';
import { CmsDisplay, DynamicDisplay } from 'shipChannelBridge/ship-channel-bridge.model';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
    selector: 'scb-tabs-component',
    templateUrl: './scb-tabs.component.html',
    styleUrls: ['./scb-tabs.component.less']
})
export class SCBTabsComponent implements OnInit {

    constructor(
        private dialogService: DialogService
    ) {
    }

    @Input() contactUsSuccessMsg: string;
    @Input() dynamicDisplays: DynamicDisplay[];
    @Output() hideCarousel: EventEmitter<boolean> = new EventEmitter();

   public selectedDisplay: DynamicDisplay;

    ngOnInit() {
        this.selectedDisplay = this.dynamicDisplays[0];
    }

    setSelectedDisplay(newDisplay: DynamicDisplay) {
        this.selectedDisplay = newDisplay;
        if (this.selectedDisplay.title === 'Home') {
            this.hideCarousel.emit(true);
        } else {
            this.hideCarousel.emit(false);
        }
        if (this.selectedDisplay.title === 'Contact') {
            const contactUsInfo = { title: this.selectedDisplay.shortDescription, successMsg: this.contactUsSuccessMsg };
            this.dialogService.openSliderFilled(ContactUsComponent, contactUsInfo).then((res) => {
                this.selectedDisplay = this.dynamicDisplays[0];
            });
            this.hideCarousel.emit(true);
        }
    }
}
