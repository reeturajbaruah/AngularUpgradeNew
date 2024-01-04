import { Component, Input, OnInit, Inject } from '@angular/core';
import { SiteCoreItem } from 'cms/cms.module';
import { ControlContainer, NgForm } from '@angular/forms';
import { AccountIdentificationOption, AccountSearchData, AdditionalInfoData, FindAccountChild, FindAccountCmsData, LoginResetOption } from '2FA/interfaces';
import { DataService } from 'common/services';
import { ENVIRON_CONFIG } from 'common/upgrades';

@Component({
    selector: 'account-search-component',
    templateUrl: './accountSearch.component.html',
    styleUrls: ['./accountSearch.component.less'],
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})
export class AccountSearchComponent implements OnInit {
    
    static defaultAgency = 'HCTR';

    @Input() public cmsData: FindAccountCmsData;
    @Input() public name: string;

    @Input() public forceRequireMoreInfo: boolean;

    private childCms: { [key: string]: FindAccountChild };
    public agencies: string[];

    public LoginResetOptionEnum = LoginResetOption;
    public AccountIdentificationOptionEnum = AccountIdentificationOption;
    
    @Input() public data: AccountSearchData = {} as AccountSearchData;

    constructor(
        private searchAccountForm: NgForm,
        private dataService: DataService
    ) {
    }

    public get showMoreInfoNeeded(): boolean {
        return this.forceRequireMoreInfo || this.data.moreInfoNeeded;
    }

    async ngOnInit() {        
        this.agencies = await this.dataService.getTagAuthorities();
        this.data.selectedAgency = this.agencies.find(x=> x === AccountSearchComponent.defaultAgency);
        this.childCms = this.cmsData.Children.reduce((acc, item) => ({ ...acc, [item.ItemName]: item }), {});
    }

    public get inputType(): string {
         switch(this.data.loginResetOption)
         {
             case LoginResetOption.Email: return 'email';
             case LoginResetOption.Phone: return 'tel';
             default: return null;
         }
    }

    public get additionalInfoCmsData(): AdditionalInfoData {
        return this.childCms?.['More Info'] as AdditionalInfoData;
    }

    public get helpLinkCmsData(): SiteCoreItem {
        return this.childCms?.['Help Locating Account'] as SiteCoreItem;
    }

    public get titlePopup(): string {
        return (this.childCms?.['Title Popup'] as SiteCoreItem)?.LongDescription?.trim();
    }

    public reset(includeTo: boolean = false) {

        this.clearValidations();

        this.data.moreInfoNeeded = false;
        this.data.accountIdentificationOption = null;
        this.data.selectedAgency = AccountSearchComponent.defaultAgency;
        this.data.ezTagNumber = null;
        this.data.accountNumber = null;

        if (includeTo) {
            this.data.to = null;
        }
        
    }

    public clearValidations() {
        //force form to 'forget' it was submitted        
        (this.searchAccountForm as { submitted: boolean }).submitted = false;
    }

}
