import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { } from 'jasmine';
import { StateService } from '@uirouter/angular';
import { AccountService, DialogService, VehicleService } from 'common/services';
import { MailingAddressService, VehiclesManagerService } from 'vehicles/shared';

import { MvuDeliveryMethodComponent } from './deliveryMethod.component';
import { InjectionValues } from 'common/ui';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { FormsModule } from '@angular/forms';
import { MvuFrameComponent } from '../frame/frame.component';
import { IMailingInfo } from 'common/models';

describe('MvuDeliveryMethodComponent', () => {
    let component: MvuDeliveryMethodComponent;
    let fixture: ComponentFixture<MvuDeliveryMethodComponent>;
    let parent: MvuFrameComponent;
    let stateService: jasmine.SpyObj<StateService>;
    let mailingService: jasmine.SpyObj<MailingAddressService>;
    // let vehicleService: jasmine.SpyObj<VehicleService>;
    let vehiclesManagerService: jasmine.SpyObj<VehiclesManagerService>;
    let dialogService: jasmine.SpyObj<DialogService>;
    let accountService: jasmine.SpyObj<AccountService>;
    let environmentConfig: jasmine.SpyObj<InjectionValues>;

    beforeEach(async () => {
        stateService = jasmine.createSpyObj('StateService', ['go']);
        // vehicleService = jasmine.createSpyObj('VehicleService', ['destroyMvuDetails']);
        vehiclesManagerService = jasmine.createSpyObj('VehiclesManagerService', ['getDeliveryMethod', 'clearData', 'setDeliveryMethod']);
        dialogService = jasmine.createSpyObj('DialogService', ['openGenericModal', 'openSliderCentered']);
        accountService = jasmine.createSpyObj('AccountService', ['getMailingInfo']);
        environmentConfig = jasmine.createSpyObj('environmentConfig', [], { tagDeliveryConfig: { AllowPickup: false } });
        mailingService = jasmine.createSpyObj('mailingService', ['onMailingAddressEdit', 'getMailingAddress']);
        parent = jasmine.createSpyObj('parent', ['countryList', 'stateList']);

        await TestBed.configureTestingModule({
            declarations: [MvuDeliveryMethodComponent],
            imports: [FormsModule],
            providers: [
                { provide: StateService, useFactory: () => stateService },
                // { provide: VehicleService, useFactory: () => vehicleService },
                { provide: VehiclesManagerService, useFactory: () => vehiclesManagerService },
                { provide: DialogService, useFactory: () => dialogService },
                { provide: AccountService, useFactory: () => accountService },
                { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                { provide: MvuFrameComponent, useFactory: () => parent },
                { provide: MailingAddressService, useFactory: () => mailingService }
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        // vehicleService.destroyMvuDetails.and.returnValue();
        vehiclesManagerService.getDeliveryMethod.and.returnValue({ deliveryMethod: null });

        fixture = TestBed.createComponent(MvuDeliveryMethodComponent);
        component = fixture.componentInstance;
        component.cmsMvuDeliveryMethod = { Title: '', Note: '', PickUpOption: '' };
        component.cancellationModal = { Title: '', LongDescription: '' } as any;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('cancel', () => {
        beforeEach(() => {
            vehiclesManagerService.clearData.and.returnValue();
            stateService.go.and.resolveTo({} as any);
        });

        it('openGenericModal should return object and result in no calls', waitForAsync(() => {
            dialogService.openGenericModal.and.resolveTo({});

            component.cancel({}).then(() => {
                expect(vehiclesManagerService.clearData).toHaveBeenCalledTimes(0);
            });
        }));

        it('openGenericModal should return object and result clearData call', waitForAsync(() => {
            dialogService.openGenericModal.and.resolveTo(null);

            component.cancel({}).then(() => {
                expect(vehiclesManagerService.clearData).toHaveBeenCalled();
            });
        }));
    });

    describe('onMailingAddressEdit', () => {

        it('should call mailingService.setMailingAddress with result', async () => {

            await component.onMailingAddressEdit('Edit');

            expect(mailingService.onMailingAddressEdit).toHaveBeenCalled();
        });

    });

    describe('nextStep', () => {
        beforeEach(() => {
            vehiclesManagerService.setDeliveryMethod.and.returnValue();
            stateService.go.and.resolveTo({} as any);
        });

        it('nextStep should call setDeliveryMethod', waitForAsync(() => {
            component.nextStep({}).then(() => {
                expect(vehiclesManagerService.setDeliveryMethod).toHaveBeenCalled();
            });
        }));
    });

});
