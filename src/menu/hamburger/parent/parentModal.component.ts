import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatIconAvailabilityService } from 'common/services';
import { CmsMenuLink, LinkInfo } from 'menu/services';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { MenuLinkHelper } from '../../services/menuLinkHelper';
import { AddMissingInformationService } from '../../../authentication/addMissingInformationService/addMissingInformation.service';



export interface InjectionValues {
    cmsContent: Observable<CmsMenuLink[]>;
}

@Component({
    selector: 'hamburger-parent-modal',
    templateUrl: './parentModal.html',
    styleUrls: ['./parentModal.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentModalComponent implements OnInit, OnDestroy {

    constructor(
        private matIcon: MatIconAvailabilityService,
        private authService: AuthenticationService,
        private menuLinkHelper: MenuLinkHelper,
        private addMissingInformationService: AddMissingInformationService,
    ) {
    }

    public data = {} as InjectionValues;
    public get close$() {
        return this.menuLinkHelper.getCloseSubject().asObservable();
    }

    showHctraLogo$: Observable<boolean>;
    showCloseIcon$: Observable<boolean>;
    currentViewLinks$: Observable<LinkInfo[]>;

    loginLink: LinkInfo;
    isLoggedIn = false;
    logoutLink: LinkInfo;

    ngOnDestroy(): void {
        this.menuLinkHelper?.onDestroySubject?.next();
    }

    ngOnInit(): void {
        this.showCloseIcon$ = this.matIcon.whenAvailable('close-menu-icon').pipe(map(() => true));
        this.showHctraLogo$ = this.matIcon.whenAvailable('hctra-logo').pipe(map(() => true));

        this.menuLinkHelper.setCmsContent(this.data);
        this.menuLinkHelper.listentoMenuEvent();
        this.currentViewLinks$ = this.menuLinkHelper.getCurrentMenu();

        this.displayLogin();
        this.displayLogout();
    }

    displayLogin() {
        this.loginLink = {
            authorizedChildren: [],
            external: false,
            hasChildren: false,
            label: 'Login',
            name: 'Login',
            url: '/Login'
        };
        this.authService.isAuthenticated$.subscribe(res => this.isLoggedIn = res);
    }

    displayLogout() {
        this.logoutLink = {
            authorizedChildren: [],
            external: false,
            hasChildren: false,
            label: 'Logout',
            name: 'Home',
            url: '/Home'
        };
    }

    async logout(link: LinkInfo, parentLabel: string, event: MouseEvent) {
        this.addMissingInformationService.destroyMissingInformationFlags();
        await this.authService.logout();
        await this.goTo(link, parentLabel, event);
    }

    closeModal() {
        this.menuLinkHelper.getCloseSubject().next({ all: false });
    }

    async goTo(link: LinkInfo, parentLabel: string, event: MouseEvent) {
        this.menuLinkHelper.goToEvent().next([link, parentLabel, event]);
    }

    async goToOtherLinks(eventInfo) {
        this.menuLinkHelper.goToEvent().next([eventInfo.link, eventInfo.link.label, eventInfo.event]);
    }

    getLinks(links: LinkInfo[]) {
        this.enrichLinks(links, 1);
        return links;
    }

    private enrichLinks(links: LinkInfo[], level: number) {
        for (const link of links) {
            link.level = level;

            if (link.hasChildren) {
                this.enrichLinks(link.authorizedChildren, level + 1);
            }
        }
    }

}
