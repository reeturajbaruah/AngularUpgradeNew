import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, SecurityContext, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';
import { modalSlideDown } from '../../common/ui/animations/animations';

import { cmsIds } from '../constants';
import { IStorefrontSession, StorefrontService } from '../services/storefront.service';

export interface IExternalDialogInjectedValues {
    url: string;
    pdf: boolean;
};

@Component({
    selector: 'external-dialog-component',
    templateUrl: './external-dialog.component.html',
    styleUrls: ['./external-dialog.component.less'],
    animations: [modalSlideDown]
})
export class ExternalDialogComponent implements OnInit {

    public url: SafeResourceUrl;
    public closeIcon: any;
    public show = false;
    public routerView: any;
    public pdfLoaded = false;
    @ViewChild('iframe') iframe;

    constructor(
        private dialogRef: MatDialogRef<ExternalDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private injectedData: IExternalDialogInjectedValues,
        private sanitizer: DomSanitizer,
        private storefrontService: StorefrontService,
        private window: Window
    ) {
        const urlObj = new URL(this.injectedData.url, window.location.origin);
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(urlObj.toString());
        if (urlObj.pathname.startsWith('/-/media/')) {
            this.injectedData.pdf = true;
        }
    }

    public async close(): Promise<void> {
        if (!this.pdf) {
            const rawData = this.window.sessionStorage.getItem('StorefrontService');
            const jsonData = JSON.parse(rawData) as IStorefrontSession;
            jsonData.fullSiteMode = false;
            this.window.sessionStorage.setItem('StorefrontService', JSON.stringify(jsonData));
        }

        this.show = false;
        await this.storefrontService.delay(300);
        this.dialogRef.close();
    }

    public get pdf(): boolean {
        return this.injectedData.pdf;
    }

    public get frameHeight() {
        if (!this.routerView) {
            if (this.iframe) {
                const document = this.iframe.nativeElement.contentWindow.document;
                this.routerView = document.querySelector('.fragment-view');
            }
        } else {
            const scrollHeight = this.routerView.scrollHeight;
            if (scrollHeight > 0) {
                return scrollHeight + 'px';
            }
        }
    }

    async ngOnInit() {
        if (!this.pdf) {
            const rawData = this.window.sessionStorage.getItem('StorefrontService');
            const jsonData = JSON.parse(rawData) as IStorefrontSession;
            jsonData.fullSiteMode = true;
            this.window.sessionStorage.setItem('StorefrontService', JSON.stringify(jsonData));
        }

        this.closeIcon = await this.storefrontService.getCmsItem(cmsIds.CloseModalImgId);
        this.show = true;
    }
}


