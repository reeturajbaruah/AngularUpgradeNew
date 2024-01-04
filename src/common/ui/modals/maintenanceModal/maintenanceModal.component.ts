import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GenericCmsModalContent, GenericCmsModalInjectionValues } from '../genericCmsModal/genericCmsModal.component';

@Component({
  selector: 'maintenance-modal',
  templateUrl: './maintenanceModal.component.html',
  styleUrls: ['./maintenanceModal.component.less']
})
export class MaintenanceModalComponent implements OnInit {

  cmsContent: GenericCmsModalContent;

  constructor(
    private matDialogRef: MatDialogRef<MaintenanceModalComponent>,
    @Inject(MAT_DIALOG_DATA) private injectedData: GenericCmsModalInjectionValues
  ) { }

  ngOnInit(): void {
    this.cmsContent = this.injectedData.cmsContent;
  }

  close(): void {
    this.matDialogRef.close();
  }

}
