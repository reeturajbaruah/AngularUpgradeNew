import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { downgrade } from 'hybrid/module';
import { environment } from 'environments/environment';
import { CommonModule as HctraCommonModule } from 'common/module';
import { ValidationModule } from 'validation/module';
import { BillingDataService, ManageBillingService } from 'common/services';
import { CommonModule, CurrencyPipe } from '@angular/common';

//components
import { AccountDetailsComponent } from './accountDetails/accountDetails.component';
import { ChangePasswordComponent } from './changePassword/changePassword.component';
import { ChangeUsernameComponent } from './changeUsername/changeUsername.component';
import { CloseAccountAgreementComponent } from './closeAccountAgreement/closeAccountAgreement.component';
import { CloseAccountFrameComponent } from './closeAccountFrame/frame.component';
import { CloseAccountRefundComponent } from './closeAccountRefund/closeAccountRefund.component';
import { CloseAccountReviewComponent } from './closeAccountReview/closeAccountReview.component';
import { UpdateAuthorizedContactsComponent } from './updateAuthorizedContacts/updateAuthorizedContacts.component';
import { AuthContactComponent } from './updateAuthorizedContacts/authContact.component';
import { AuthorizedContactModalComponent } from './updateAuthorizedContacts/authorizedContactModal/authorizedContactModal.component';
import { UpdateBillingInformationComponent } from './updateBillingInformation/updateBillingInformation.component';
import { UpdateContactInformationComponent } from './updateContactInformation/updateContactInformation.component';
import { UpdateMailingAddressComponent } from './updateMailingAddress/updateMailingAddress.component';
import { UpdateReplenishmentAmountComponent } from './updateReplenishmentAmount/updateReplenishAmount.component';
import { UpdateSecurityQuestionComponent } from './updateSecurityQuestion/updateSecurityQuestion.component';
import { AuthContactsCardComponent } from './accountDetails/display cards/authContactsCard/authContactsCard.component';
import { ComPreferencesCardComponent } from './accountDetails/display cards/comPreferencesCard/comPreferencesCard.component';
import { RebillAmtCardComponent } from './accountDetails/display cards/rebillAmtCard/rebillAmtCard.component';
import { UpdateContactInfoCardComponent } from './accountDetails/display cards/updateContactInfoCard/updateContactInfoCard.component';
import { UpdateLoginInfoCardComponent } from './accountDetails/display cards/updateLoginInfoCard/updateLoginInfoCard.component';
import { UpdateMailingAddressCardComponent } from './accountDetails/display cards/updateMailingAddressCard/updateMailingAddressCard.component';
import { BillingCardComponent } from './accountDetails/display cards/billingCard/billingCard.component';
import { PaymentMethodsComponent } from './updateBillingInformation/paymentMethods/paymentMethods.component';
import { RemovePaymentModalComponent } from './updateBillingInformation/removePaymentModal/removePaymentModal.component';
import { RebillOptInModalComponent } from './updateBillingInformation/rebillOptInModal/rebillOptInModal.component';

import { WebApisService } from './services/webApis.service';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PipesModule } from 'pipes/module';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { states, routes } from './routing';
import {
    stateNames, urlPaths, StateNames, Routes
} from './constants';
import { UpdateFlexpayBillingInformationComponent } from './updateFlexpayBillingInformation/updateFlexpayBillingInformation.component';
import { PhoneNumberModule } from 'shared/ui/form-entry/phone-number/phone-number.module';
import { CheckboxModule } from 'shared/ui/form-entry/checkbox/checkbox.module';
export * from './constants';

const routesWithComponents = routes.map(route => {
    const componentDictionary = {
        [stateNames.AccountDetails]: AccountDetailsComponent,
        [stateNames.ChangePassword]: ChangePasswordComponent,
        [stateNames.ChangeUsername]: ChangeUsernameComponent,
        [stateNames.CloseAccountAgreement]: CloseAccountAgreementComponent,
        //[stateNames.CloseAccountCheckInformation]: AddMissingInformationComponent,
        [stateNames.CloseAccountFrame]: CloseAccountFrameComponent,
        [stateNames.CloseAccountRefund]: CloseAccountRefundComponent,
        [stateNames.CloseAccountReview]: CloseAccountReviewComponent,
        [stateNames.UpdateAuthorizedContacts]: UpdateAuthorizedContactsComponent,
        [stateNames.UpdateContactInformation]: UpdateContactInformationComponent,
        [stateNames.UpdateBillingInformation]: UpdateBillingInformationComponent,
        [stateNames.UpdateFlexpayBillingInformation]: UpdateFlexpayBillingInformationComponent,
        [stateNames.UpdateMailingAddress]: UpdateMailingAddressComponent,
        [stateNames.UpdateReplenishmentAmount]: UpdateReplenishmentAmountComponent,
        [stateNames.UpdateSecurityQuestion]: UpdateSecurityQuestionComponent,
    };

    return {
        ...route,
        component: componentDictionary[route.name]
    };
});

@NgModule({
    declarations: [
        AccountDetailsComponent,
        AuthContactsCardComponent,
        ComPreferencesCardComponent,
        RebillAmtCardComponent,
        UpdateContactInfoCardComponent,
        UpdateLoginInfoCardComponent,
        UpdateMailingAddressCardComponent,
        BillingCardComponent,
        ChangePasswordComponent,
        ChangeUsernameComponent,
        CloseAccountAgreementComponent,
        CloseAccountFrameComponent,
        CloseAccountRefundComponent,
        CloseAccountReviewComponent,
        UpdateAuthorizedContactsComponent,
        AuthContactComponent,
        AuthorizedContactModalComponent,
        UpdateBillingInformationComponent,
        UpdateFlexpayBillingInformationComponent,
        UpdateContactInformationComponent,
        UpdateMailingAddressComponent,
        UpdateReplenishmentAmountComponent,
        UpdateSecurityQuestionComponent,
        PaymentMethodsComponent,
        RemovePaymentModalComponent,
        RebillOptInModalComponent
    ],
    imports: [
        UIRouterModule.forChild({ states: routesWithComponents }),
        HctraCommonModule,
        CommonModule,
        FormsModule,
        MatDividerModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        PipesModule,
        MatDividerModule,
        FlexLayoutModule,
        ValidationModule,
        PhoneNumberModule,
        CheckboxModule
    ],
    providers: [
        { provide: StateNames, useValue: stateNames },
        { provide: Routes, useValue: urlPaths },
        BillingDataService,
        ManageBillingService,
        WebApisService
    ]
})
export class ProfileModule {
}
