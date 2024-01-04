import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DialogRef, ToasterService } from 'common/services';
import { cmsIds } from '../../constant';
import { ShipChannelBridgeFacadeService } from 'shipChannelBridge/services/ship-channel-bridge-facade-api/ship-channel-bridge-facade.service';
import { Contact } from 'shipChannelBridge/ship-channel-bridge.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.less'],

})
export class ContactUsComponent implements OnInit {

  title = '';
  contactUsForm: Contact = {
    Name: '',
    Email: '',
    Subject: '',
    Comments: '',
    TopicContentId: cmsIds.TopicContentId,
    FormContentId: cmsIds.FormContentId
  };

  constructor(
    private dialogRef: DialogRef<any>,
    private toaster: ToasterService,
    private shipFacadeService: ShipChannelBridgeFacadeService
  ) { }

  ngOnInit() {
    this.title = this.dialogRef.data.title;
  }

  Save(form: NgForm) {
    if (form.valid) {
      this.shipFacadeService.onContactSave(this.contactUsForm).then((res) => {
        this.dialogRef.close(res);
        if (res?.errors.length === 0) {
          this.toaster.show('Success', this.dialogRef.data.successMsg);
        } else {
          this.toaster.show('Error', res?.errors);
        }
      });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
