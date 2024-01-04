import { Component, Input, OnInit } from '@angular/core';
import { IBDConfig, IBDHeader, IRowFxFlexValue } from './bottomdrawer-container.model';
import { CmsImage } from 'common/interfaces';

@Component({
  selector: 'bottomdrawer-container',
  templateUrl: './bottomdrawer-container.component.html',
  styleUrls: ['./bottomdrawer-container.component.less']
})
export class BottomDrawerContainerComponent implements OnInit {

  headers: IBDHeader[];
  rowFxFlexValues: IRowFxFlexValue[] = [];
  headerFxFlex: string;
  headerFxFlexCaret: string;

  @Input() config: IBDConfig;
  @Input() enableHeader = false;
  @Input() caretCmsImage: CmsImage;
  @Input() disableDesktopDrawer = false;

  constructor() { }

  ngOnInit(): void {
    this.setUpHeaders();
  }

  private setUpHeaders(): void {
    if (this.enableHeader) {
      this.headerFxFlex = this.disableDesktopDrawer ? '100' : '95';
      this.headerFxFlexCaret = this.disableDesktopDrawer ? '0' : '5';
      this.headers = this.config?.headers;

      this.headers?.forEach(h => {
        this.rowFxFlexValues.push({
          fxFlexValue: h.fxFlexValue,
          isPrimary: h.isPrimary
        });
      });
    }
  }

  toggleRow(id: number): void {
    const toggled = this.config?.data[id];
    toggled.isSelected = !toggled.isSelected;
  }

}
