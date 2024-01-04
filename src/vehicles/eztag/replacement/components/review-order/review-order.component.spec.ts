import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { PipesModule } from 'pipes/module';
import { StateService } from '@uirouter/angular';
import { AccountService, CurrentUser, CurrentUserService, ToasterService } from 'common/services';
import { ReplacementStateService } from 'vehicles/eztag/replacement/services';
import { ReplacementHelperService } from 'vehicles/eztag/replacement/services/helper/helper-service';
import { MailingAddressService } from 'vehicles/shared';
import { IState } from 'vehicles/eztag/replacement/services/state/model';
import { ReviewOrderComponent } from './review-order.component';
import { CmsReplacementService } from 'cms/services';
import { PaymentInfoService } from 'vehicles/shared';
import { VehiclesReplacementFacadeService } from 'vehicles/eztag/replacement/services/facade/vehicles-replacement-facade.service';
import { ReviewOrderService } from 'vehicles/common';
import { IReviewOrderCms } from '../../models/model';

describe('Replacement Review Component', () => {

    let fixture: ComponentFixture<ReviewOrderComponent>;
    let component: ReviewOrderComponent;
    let stateServiceSpy: jasmine.SpyObj<StateService>;
    let replacementStateServiceSpy: jasmine.SpyObj<ReplacementStateService>;
    let replacementHelperServiceSpy: jasmine.SpyObj<ReplacementHelperService>;
    let mailingService: jasmine.SpyObj<MailingAddressService>;
    let accountServiceSpy: jasmine.SpyObj<AccountService>;
    let cmsReplacementServiceSpy: jasmine.SpyObj<CmsReplacementService>;
    let paymentInfoServiceSpy: jasmine.SpyObj<PaymentInfoService>;
    let reviewOrderServiceSpy: jasmine.SpyObj<ReviewOrderService>;
    let vehiclesReplacementFacadeServiceSpy: jasmine.SpyObj<VehiclesReplacementFacadeService>;
    let toasterServiceSpy: jasmine.SpyObj<ToasterService>;
    let currentUserServiceSpy: jasmine.SpyObj<CurrentUser>;


    beforeEach(async () => {
        stateServiceSpy = jasmine.createSpyObj('state', ['go']);
        replacementStateServiceSpy = jasmine.createSpyObj('replacementStateService', ['getState', 'setState']);
        replacementHelperServiceSpy = jasmine.createSpyObj('helperService', ['cancel']);
        accountServiceSpy = jasmine.createSpyObj('accountService', ['getMailingInfo']);
        cmsReplacementServiceSpy = jasmine.createSpyObj('cmsReplacementService', ['transformTemplate']);
        paymentInfoServiceSpy = jasmine.createSpyObj('paymentInfoService', ['getPaymentInfo', 'getCurrentBalance']);
        reviewOrderServiceSpy = jasmine.createSpyObj('reviewOrderService', ['subscribe']);
        vehiclesReplacementFacadeServiceSpy = jasmine.createSpyObj('facade', ['replace']);
        toasterServiceSpy = jasmine.createSpyObj('toaster', ['show']);
        mailingService = jasmine.createSpyObj('mailingService', ['setMailingAddressOnAcctLevel', 'getMailingAddress', 'setMailingAddress']);

        currentUserServiceSpy = jasmine.createSpyObj('currentUserService', ['getCurrentUser']);
        await TestBed
            .configureTestingModule({
                declarations: [
                    ReviewOrderComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule, PipesModule],
                providers: [
                    { provide: StateService, useFactory: () => stateServiceSpy },
                    { provide: ReplacementStateService, useFactory: () => replacementStateServiceSpy },
                    { provide: ReplacementHelperService, useFactory: () => replacementHelperServiceSpy },
                    { provide: AccountService, useFactory: () => accountServiceSpy },
                    { provide: CmsReplacementService, useFactory: () => cmsReplacementServiceSpy },
                    { provide: PaymentInfoService, useFactory: () => paymentInfoServiceSpy },
                    { provide: ReviewOrderService, useFactory: () => reviewOrderServiceSpy },
                    { provide: VehiclesReplacementFacadeService, useFactory: () => vehiclesReplacementFacadeServiceSpy },
                    { provide: ToasterService, useFactory: () => toasterServiceSpy },
                    { provide: MailingAddressService, useFactory: () => mailingService },
                    { provide: CurrentUserService, useFactory: () => currentUserServiceSpy }

                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ReviewOrderComponent);
        component = fixture.debugElement.componentInstance;

        component.pageCms = {} as IReviewOrderCms;

    });

    it('defines the component', async () => {
        expect(component).toBeDefined();
    });

    it('defines the component', async () => {

        replacementStateServiceSpy.getState.and.returnValue({} as IState);
        paymentInfoServiceSpy.getPaymentInfo.and.resolveTo({
            totalAmt: 10,
            depositAmt: 5,
            tagAmount: 1,
            tagSalesAmt: 3,
            transactionId: 343
        });
        paymentInfoServiceSpy.getCurrentBalance.and.returnValue(20);
        spyOn<any>(component, 'subscribeEvents');
        spyOn<any>(component, 'setupData');
        await component.ngOnInit();
        expect(component['setupData']).toHaveBeenCalled();
    });

    it('checks if the order is placed sucessfully', async () => {
        mailingService.setMailingAddressOnAcctLevel.and.resolveTo(true);

        vehiclesReplacementFacadeServiceSpy.replace.and.resolveTo({ successStatus: true });
        replacementStateServiceSpy.getState.and.returnValue({} as IState);
        await component.placeOrder({});
        expect(mailingService.setMailingAddressOnAcctLevel).toHaveBeenCalled();
        expect(vehiclesReplacementFacadeServiceSpy.replace).toHaveBeenCalled();
        expect(replacementStateServiceSpy.setState).toHaveBeenCalled();
        expect(stateServiceSpy.go).toHaveBeenCalled();
    });

    it('checks if the order is NOT placed', async () => {
        mailingService.setMailingAddressOnAcctLevel.and.resolveTo(true);

        const error = 'something went wrong';
        vehiclesReplacementFacadeServiceSpy.replace.and.resolveTo({ successStatus: false, errors: [{ key: 'error', message: 'something went wrong' }] });
        await component.placeOrder({});
        expect(mailingService.setMailingAddressOnAcctLevel).toHaveBeenCalled();
        expect(vehiclesReplacementFacadeServiceSpy.replace).toHaveBeenCalled();
        expect(stateServiceSpy.go).not.toHaveBeenCalled();
        expect(toasterServiceSpy.show).toHaveBeenCalledWith('Error', error);
    });

    it('checks if the user cancels the order', async () => {

        await component.cancel({});
        expect(replacementHelperServiceSpy.cancel).toHaveBeenCalled();
    });

});

