import { downgrade } from 'hybrid/module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModule as HctraCommonModule } from 'common/module';
import { TranslationModule } from 'translation/module';
import { AuthenticateRedirectService } from './authenticateRedirectService/authenticateRedirect.service';
import { AuthenticationService } from './authenticationService/authentication.service';
import { AddMissingInformationService } from './addMissingInformationService/addMissingInformation.service';
import { AuthChannelService } from './authChannelService/authChannel.service';

//TODO: Move these back to LOGIN module (if possible) after legacy is deleted
downgrade('authenticateRedirectService', { service: AuthenticateRedirectService });
downgrade('addMissingInformationService', { service: AddMissingInformationService });
downgrade('AuthService', { service: AuthenticationService });
downgrade('authChannel', { service: AuthChannelService });

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HctraCommonModule,
        TranslationModule
    ],
    providers: [
        AuthenticateRedirectService,
        AuthenticationService,
        AddMissingInformationService,
        AuthChannelService
    ]
})
export class AuthenticationModule {
}
