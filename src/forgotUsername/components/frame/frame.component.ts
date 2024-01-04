import { Component, Input } from '@angular/core';
import { SiteCoreItem } from 'cms/cms.module';

@Component({
  selector: 'forgot-username-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.less']
})
export class FrameComponent {

  static readonly source = 'FORGOT USERNAME';

  @Input() cmsData: SiteCoreItem;

  constructor() { }

}
