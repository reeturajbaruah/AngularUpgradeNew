import { Component, Input } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { AccountService, DialogService, ManageEzTagResponse, ResponseErrorService, TagStatus, Vehicle } from 'common/services';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui';
import { CloseAccountModalCms } from 'profile/accountDetails/accountDetails.component';
import { stateNames as profileStateNames } from 'profile/constants';


@Component({
    selector: 'update-login-info-card',
    templateUrl: './updateLoginInfoCard.html',
    styleUrls: ['../profileCards.less', './updateLoginInfoCard.less']
})
export class UpdateLoginInfoCardComponent {
    @Input() loginSecurityTitle: string;
    @Input() isAccountClosed: boolean;
    @Input() closeAccountModalCms: CloseAccountModalCms;

    constructor(
        private state: StateService,
        private responseErrorService: ResponseErrorService,
        private dialogService: DialogService,
        private accountService: AccountService
    ) { }

    public changeUsername() {
        this.state.go(profileStateNames.ChangeUsername);
    };

    public changePassword() {
        this.state.go(profileStateNames.ChangePassword);
    };

    public updateSecurityQuestion() {
        this.state.go(profileStateNames.UpdateSecurityQuestion);
    };

    public async closeAccount() {

        let allVehiclesInactiveOrExpired = false;

        const tagData: ManageEzTagResponse = await this.accountService.getEZTagInfo();

        if (this.responseErrorService.isErrorFree(tagData)) {
            const accountTags = tagData.accountTags || [];
            const pbpTags = tagData.pbpTags || [];

            allVehiclesInactiveOrExpired = accountTags.every(this.isInactiveTag)
                && pbpTags.every(this.isExpiredTag);
        }

        await this.triggerCloseAccountModal(allVehiclesInactiveOrExpired);
    };

    private isInactiveTag(tag: Vehicle) {
        return !!tag.tagStatusDesc && tag.tagStatusDesc.toLowerCase() === TagStatus.INACTIVE;
    }

    private isExpiredTag(tag: Vehicle) {
        return !!tag.tagStatusDesc && tag.tagStatusDesc.toLowerCase() === TagStatus.EXPIRED;
    }

    private async triggerCloseAccountModal(vehiclesInactive) {
        if (vehiclesInactive) {
            return this.state.go(profileStateNames.CloseAccountAgreement);
        }

        const data = {
            cmsContent: {
                Title: this.closeAccountModalCms.ModalTitle,
                PrimaryContent: this.closeAccountModalCms.LongDescription,
                AcceptBtn: this.closeAccountModalCms.ContinueButtonText,
                CancelBtn: this.closeAccountModalCms.CloseButtonText
            }
        };

        const res = await this.dialogService.openGenericModal<GenericCmsModalComponent, GenericCmsModalInjectionValues>(GenericCmsModalComponent, data);

        if (res) {
            return this.state.go(profileStateNames.CloseAccountAgreement);
        }
    }
}
