import { Component, OnInit, Inject } from '@angular/core';  
import { MatDialogRef } from '@angular/material/dialog'; 
import { StateNames as CoreStateNames } from 'constants/stateNames.constants';
import { UrlPaths } from 'constants/module';
import { CmsUtilService } from 'cms/services';
import { CmsImage } from 'common/interfaces';
import { GenericRepoService } from '../../../services';

interface CmsHeader {
    Title: string;
}

interface CmsSection {
    Title: string;
    ShortDescription: string;
    Image: string;
}

@Component({
    selector: 'eft-modal-component',
    templateUrl: './eftModal.html',
    styleUrls: ['./eftModal.less']
})
export class EftModalComponent implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<EftModalComponent>,
        private coreStateNames: CoreStateNames,
        private routes: UrlPaths,
        private cmsUtilService: CmsUtilService,
        private genericRepoService: GenericRepoService
    ) {
    }

    public eftHeader = {} as CmsHeader;
    public eftAccountNumber = {} as CmsSection;
    public eftRouterNumber = {} as CmsSection;

    public routerImage = {} as CmsImage;

    public accountImage = {} as CmsImage;

    ngOnInit() {

        this.populateHeader();
        this.populateRouter();
        this.populateAccount();

    }

    async populateHeader() {
        const requestHeader = {
            ItemId: this.routes.eftHelp,
            Fields: 'Title'
        };

        const responseHeader = await this.genericRepoService.dataFactory.getCmsPageById(requestHeader);

        this.populateHeaderCmsContent(responseHeader);
    }

    async populateRouter() {
        const requestRouter = {
            ItemId: this.routes.eftRouter,
            Fields: 'Title,Image'
        };

        const responseRouter = await this.genericRepoService.dataFactory.getCmsPageById(requestRouter);

        this.populateRouterCmsContent(responseRouter);
    }

    async populateAccount() {
        const requestAccount = {
            ItemId: this.routes.eftAccount,
            Fields: 'Title,Image'
        };

        const responseAccount = await this.genericRepoService.dataFactory.getCmsPageById(requestAccount);

        this.populateAccountCmsContent(responseAccount);
    }

    public populateHeaderCmsContent = (response) => {

        this.eftHeader = JSON.parse(response.cmsResponse);
    };

    public populateRouterCmsContent = (response) => {

        this.eftRouterNumber = JSON.parse(response.cmsResponse);

        this.routerImage = this.cmsUtilService.parseAllImageAttributes(this.eftRouterNumber.Image);
    };

    public populateAccountCmsContent = (response) => {

        this.eftAccountNumber = JSON.parse(response.cmsResponse);

        this.accountImage = this.cmsUtilService.parseAllImageAttributes(this.eftAccountNumber.Image);
    };

    public close() {

        this.dialogRef.close();
    }

}
