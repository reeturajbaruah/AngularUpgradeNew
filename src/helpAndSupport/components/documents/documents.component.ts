import { Component, OnInit } from '@angular/core';
import { IDocumentsCms } from 'helpAndSupport/models/documents.models';
import { HelpAndSupportManagerService } from 'helpAndSupport/services/manager/help-and-support-manager.service';

@Component({
    selector: 'help-and-support-documents',
    templateUrl: './documents.component.html',
    styleUrls: ['documents.component.less']
})

export class DocumentsComponent implements OnInit {
    documentsCms: IDocumentsCms;

    constructor(
        private manager: HelpAndSupportManagerService
    ) { }

    ngOnInit() {
        this.documentsCms = this.manager.getDocumentsCms();
    }
}
