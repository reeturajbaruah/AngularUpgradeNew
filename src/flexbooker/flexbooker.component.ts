import { Component, ElementRef, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { WindowRef } from '../common/providers';
import { FlexbookerConfigResponse, FlexbookerService } from './services/flexbooker.service';

@Component({
    selector: 'flexbooker-component',
    templateUrl: './flexbooker.html',
    providers: [FlexbookerService]
})

export class FlexbookerComponent implements OnInit {
    
    constructor(
        private flexbookerService: FlexbookerService,
        private sanitizer: DomSanitizer,
        @Inject(WindowRef) private window: Window
    ) {
        this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
    }

    public iframeUrl: SafeResourceUrl;
    @Output() bookingComplete = new EventEmitter<boolean>();
    @Output() skipBooking = new EventEmitter<boolean>();

    async ngOnInit() {
        const configResponse: FlexbookerConfigResponse = await this.flexbookerService.getFlexbookerConfig();
        this.skipBooking.emit(configResponse.skipBooking);
        this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(configResponse.iframeBookingUrl);

        this.window.addEventListener('message', $event => {
            if ($event.data === 'BookingComplete') {
                this.bookingComplete.emit(true);
            }
        });

        const iframe = document.getElementById('flexbookeriframe');

        iframe.addEventListener('load', () => {
            iframe.style.height = iframe.ownerDocument.body.scrollHeight + 'px';
        });
    }
}
