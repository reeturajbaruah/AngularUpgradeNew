//TODO: Move addMissingInformationService to "ng-app/src/login/services" 
// AFTER we delete legacy addMissingInformationcomponent\controller

import { Inject, Injectable } from '@angular/core';
import { DialogService, GenericRepoService, ResponseErrorService } from 'common/services';
import { StringUtilsService } from 'common/services/stringUtils/stringUtils.service';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { environment } from 'environments/environment';
import { cmsIds } from 'login/constants';
import { MissingInformationFlags } from 'login/interfaces';

export interface CmsContentBlockUserNavModal {
    Title: string;
    ShortDescription: string;
    CloseButtonText: string;
}

@Injectable({
    providedIn: 'root',
})

export class AddMissingInformationService {

    constructor(
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private genericRepoService: GenericRepoService,
        private responseErrorService: ResponseErrorService,
        private stringUtils: StringUtilsService,

        private dialogService: DialogService
    ) { }

    private missingInfo: MissingInformationFlags = {
        passwordNeedsReset: false,
        emailIsMissing: false,
        securityQuestionIsMissing: false,
        profileCallHasOccured: false// this is important becuase authResolver needs confirmation of when it is safe to assume that login
        //information has been filled in. normally authResolver does not need this extra flag; but becuase addmissinginformation
        //denies the user access to public pages, then an extra flag must be checked.
        // note: profile populates addmissinginformation info
    };

    public setMissingInformation(passwordNeedsReset: boolean, emailIsMissing: boolean, securityQuestionIsMissing: boolean) {
        this.missingInfo.passwordNeedsReset = passwordNeedsReset;
        this.missingInfo.emailIsMissing = this.newEmailRequired(passwordNeedsReset, emailIsMissing, securityQuestionIsMissing);
        this.missingInfo.securityQuestionIsMissing = securityQuestionIsMissing;
    }

    public missingInformationIsAnIssue = () => this.missingInfo.passwordNeedsReset ||
        this.missingInfo.emailIsMissing ||
        this.missingInfo.securityQuestionIsMissing;

    public returnMissingInformation() {
        return { ...this.missingInfo };
    }

    public destroyMissingInformationFlags() {
        this.missingInfo.passwordNeedsReset = false;
        this.missingInfo.emailIsMissing = false;
        this.missingInfo.securityQuestionIsMissing = false;
    }

    public setProfileCallHasOccured(profileCallHasOccured: boolean) {
        this.missingInfo.profileCallHasOccured = profileCallHasOccured;
    }

    public returnProfileCallHasOccured() {
        return this.missingInfo.profileCallHasOccured;
    }

    public isMissingInfo(passwordMissing: boolean, emailMissing: boolean, securityQuestionMissing: boolean) {
        return passwordMissing || this.newEmailRequired(passwordMissing, emailMissing, securityQuestionMissing) || securityQuestionMissing;
    }

    private newEmailRequired(passwordMissing: boolean, emailMissing: boolean, securityQuestionMissing: boolean) {
        //Only email can be missing. If missing more than email, this bypass will break
        return (this.environmentConfig.missingEmailBypass && (!passwordMissing && !securityQuestionMissing)) ? false : emailMissing;
    }

    public async showBlockUserNavModal() {

        const apiRequest = { ItemId: cmsIds.BlockUserNavigationModal, Fields: 'Title,ShortDescription,Parameters' };
        const apiResponse = await this.genericRepoService.dataFactory.getCmsPageById(apiRequest) || {};

        if (this.responseErrorService.isErrorFree(apiResponse)) {
            const parsedResponse = JSON.parse(apiResponse.cmsResponse);

            this.dialogService.openGenericModal
                <GenericCmsModalComponent, GenericCmsModalInjectionValues>
                (GenericCmsModalComponent,

                    //Injected Data
                    {
                        cmsContent: {
                            Title: parsedResponse.Title,
                            PrimaryContent: parsedResponse.ShortDescription,
                            AcceptBtn: this.stringUtils.getParameterObject(parsedResponse.Parameters).CloseButtonText
                        }
                    }
                );
        }
    }
}
