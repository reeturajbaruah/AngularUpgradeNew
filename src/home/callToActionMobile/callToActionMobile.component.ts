import { Component, Input, OnInit, DoCheck, Inject } from '@angular/core';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { SiteCoreMediaItem } from 'cms/cms.module';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { CallToActionConfig } from '../constants';
import { callToActionSection, callToActionCMS } from '../interfaces';
import { FeaturesRoutes } from 'shared/routes';

@Component({
    selector: 'call-to-action-mobile-component',
    templateUrl: './callToActionMobile.html',
    styleUrls: ['./callToActionMobile.less'],
    animations: [
        trigger('rotatedState', [
            state('default', style({ transform: 'rotate(0)' })),
            state('rotated', style({ transform: 'rotate(-180deg)' })),
            transition('rotated => default', animate('500ms ease-out')),
            transition('default => rotated', animate('500ms ease-in'))
        ])
    ]
})
export class CallToActionMobileComponent implements OnInit, DoCheck {
    constructor(
        private authService: AuthenticationService,
        @Inject(ENVIRON_CONFIG) public environmentConfig
    ) { }

    @Input() cmsData: callToActionCMS;

    public state = 'default';
    public isLoggedin: boolean;
    public isDropDownOpen: boolean;
    public displayList: callToActionSection[] = [];
    public callToActionConfig = CallToActionConfig;

    ngOnInit() {
        this.isLoggedin = this.authService.isAuthenticated();
        this.isDropDownOpen = false;

        this.updateDisplayList();
    }

    //TODO: change this to use Kim's trigger instead of docheck
    ngDoCheck() {
        if (this.isLoggedin !== this.authService.isAuthenticated()) {
            this.isLoggedin = this.authService.isAuthenticated();
            this.updateDisplayList();
        }
    }

    private updateDisplayList(): void {
        if (this.displayList.length > 0) {
            this.displayList = [];
        }
        for (const section of this.cmsData.Children) {
            if ((this.isLoggedin && section.hideAtLogIn === '')
                || (!this.isLoggedin && section.hideAtLogOut === '')) {

                if ((this.environmentConfig.isMergeMATandVioOn &&
                    this.callToActionConfig.Violations !== section.SectionConfig
                    && this.callToActionConfig.MissedAToll !== section.SectionConfig)

                    || (!this.environmentConfig.isMergeMATandVioOn &&
                        this.callToActionConfig.PayTollsAndInvoices !== section.SectionConfig
                        && this.callToActionConfig.ActivateEzTag !== section.SectionConfig)) {

                    this.displayList.push(section);
                }
            }
        }

        if (this.environmentConfig.createAccountRefresh) {
            this.parseSignup();
        }

    }

    private parseSignup() {
        const signUp = this.displayList.filter(list => list.SectionConfig === this.callToActionConfig.SignUp);
        const signUpSection = signUp.length > 0 ? signUp[0] : null;
        if (signUpSection) {
            signUpSection.ButtonURL = FeaturesRoutes.creteAccountLogin;

        }
    }
    public toggleDropDown(): void {
        this.isDropDownOpen = !this.isDropDownOpen;
        if (this.isDropDownOpen) {
            this.state = 'rotated';
        } else {
            this.state = 'default';
        }
    }

}
