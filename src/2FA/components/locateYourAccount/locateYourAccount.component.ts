import { AccountIdentificationOption, AccountSearchData, AdditionalInfoData } from '2FA/interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SiteCoreItem } from 'cms/cms.module';

@Component({
  selector: 'locate-your-account',
  templateUrl: './locateYourAccount.component.html',
  styleUrls: ['./locateYourAccount.component.less'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocateYourAccountComponent {

  public AccountIdentificationOptionEnum = AccountIdentificationOption;

  @Input() additionalInfoCmsData: AdditionalInfoData;
  @Input() helpLinkCmsData: SiteCoreItem;
  @Input() agencies: string[];
  @Input() data: AccountSearchData = {} as AccountSearchData;
  @Output() dataChange = new EventEmitter<AccountSearchData>();

  constructor() { }

  public updateValue(): void {
    this.dataChange.emit(this.data);
  }

}
