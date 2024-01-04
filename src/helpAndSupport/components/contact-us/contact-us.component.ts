import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { HelpAndSupportManagerService } from 'helpAndSupport/services/manager/help-and-support-manager.service';
import { IContactUsCms } from 'helpAndSupport/models/contact-us.models';
import { DialogService } from 'common/services';
import { EmailUsComponent } from 'shared/sliders/email-us/components/email-us.component';

@Component({
    selector: 'help-and-support-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['contact-us.component.less']
})

export class ContactUsComponent implements OnInit, AfterViewInit {
    contactUsCms: IContactUsCms;

    constructor(
        private manager: HelpAndSupportManagerService,
        private dialogService: DialogService,
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) { }

    ngOnInit() {
        this.contactUsCms = this.manager.getContactUsCms();
    }

    ngAfterViewInit() {
        const emailUsLink = this.elementRef.nativeElement.querySelector('#emailUs');
        if (emailUsLink) {
            this.renderer.listen(emailUsLink, 'click', (event) => {
                event.preventDefault();
                this.openEmailUsSlider();
            });
        }
    }

    async openEmailUsSlider() {
        await this.dialogService.openSliderCentered(EmailUsComponent, '', { title: this.contactUsCms.emailUsCms.Title });
    }
}
