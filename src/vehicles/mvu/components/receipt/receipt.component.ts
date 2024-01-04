import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { AddressInfo, BankDetails, BillingInfo, BillingType, CreditCardDetails, IMailingInfo } from 'common/models';
import { IEZTag } from 'vehicles/interfaces';
import { VehiclesManagerService } from 'vehicles/shared';
import { DeliveryMethodType } from 'common/ui';
import { AccountService, IVehicleClass } from 'common/services';
import { VehicleService } from 'common/services';
import { stateNames as accountDashboardStates } from 'accountDashboard/constants';
import { IEzTagResponse } from 'vehicles/interfaces';
import { States as SharedStates } from 'vehicles/shared';
import { MvuFrameComponent } from '../frame/frame.component';
import { IMvuReceiptContentCms } from './models';
import { WebStorageService } from '../../../../common/services/webStorageService/webStorage.service';

@Component({
  selector: 'vehicles-mvu-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.less']
})
export class MvuReceiptComponent implements OnInit {

  @Input() pageCms: IMvuReceiptContentCms;
  public paymentAmount: number;
  public paymentDate: Date;
  public actNumber: number;
  public actName: string;
  public billingInfo: BillingInfo = {
    credit: {} as CreditCardDetails & AddressInfo,
    eft: {} as BankDetails & AddressInfo
  } as BillingInfo;
  public tags: IEZTag[] = [];
  public deliveryMethod: string;
  public mailingAddress$: Promise<IMailingInfo>;
  public isByMail: boolean;
  public BillingType = BillingType;
  public mvuDetails: any;
  public inactiveTags: IEzTagResponse[];
  vehicleClassDescList: IVehicleClass[];


  constructor(
    private frame: MvuFrameComponent,
    private state: StateService,
    private vehiclesManagerService: VehiclesManagerService,
    private accountService: AccountService,
    private webStorage: WebStorageService,
    private vehicleService: VehicleService
  ) { }

  async ngOnInit() {
    this.mvuDetails = this.webStorage.getValue('MVU_DETAILS');
    this.frame.showStepper = true;
    this.paymentDate = new Date();
    this.paymentAmount = (await this.vehiclesManagerService.getPaymentInfo()).totalAmt;
    this.getActInfo();
    this.mailingAddress$ = this.accountService.getMailingInfo();
    this.setDeliveryMethod();
    this.billingInfo = await this.vehiclesManagerService.getBillingInfo();
    this.tags = this.mvuDetails?.vehicleList?.filter(vehicle => vehicle.action.toUpperCase() === 'ADD');
    this.inactiveTags = this.mvuDetails?.vehicleList?.filter(vehicle => vehicle.action.toUpperCase() === 'INACTIVATE');
    const vehicleInformation = await this.vehicleService.getVehicleInformation();
    this.vehicleClassDescList = vehicleInformation?.classes;
    this.setClassDesc();
  }

  public async setClassDesc() {
    this.tags.forEach((vehicle) => {
      vehicle.vehicleClassDesc = this.getVehicleClassDesc(vehicle.vehicleClassCode);
    });
    this.inactiveTags.forEach((vehicle) => {
      vehicle.vehicleClassDesc = this.getVehicleClassDesc(vehicle.vehicleClassCode);
    });
  }

  public getVehicleClassDesc(code) {
    const filteredVehicleClassInfo = this.vehicleClassDescList?.filter(info => info.value?.toString() === code?.toString());
    return (filteredVehicleClassInfo.length > 0) ? filteredVehicleClassInfo[0].label : null;
  }

  private setDeliveryMethod() {
    const deliveryMethodData = this.vehiclesManagerService.getDeliveryMethod();
    this.isByMail = deliveryMethodData.deliveryMethod === DeliveryMethodType.Mail;
    this.deliveryMethod = 'Delivery Method:' + (this.isByMail ? 'By Mail' : 'EZ TAG Store Pickup');
  }

  private getActInfo() {
    const currentUser = this.vehiclesManagerService.getCurrentUser();
    this.actNumber = currentUser.acctId;
    this.actName = currentUser.firstName + ' ' + currentUser.lastName;
  }

  public async viewVehiclesClick() {
    this.vehiclesManagerService.clearData();
    this.vehicleService.destroyMvuDetails();
    await this.state.go(SharedStates.Root);
  }

  async goToAccountOverview() {
    this.vehiclesManagerService.clearData();
    this.vehicleService.destroyMvuDetails();
    await this.state.go(accountDashboardStates.Frame);
  }

}
