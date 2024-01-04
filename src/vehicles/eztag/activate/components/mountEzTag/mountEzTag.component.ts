import { Component } from '@angular/core';
import { SiteCoreItem } from 'cms/cms.module';
import { DialogRef } from 'common/services';

@Component({
  selector: 'app-mount-ez-tag',
  templateUrl: './mountEzTag.component.html',
  styleUrls: ['./mountEzTag.component.less']
})
export class MountEzTagComponent {
  public modalCms: SiteCoreItem;

  constructor(
    private dialogRef: DialogRef<any>,
  ) {
    this.modalCms = dialogRef.data.modalCms;
  }
}
