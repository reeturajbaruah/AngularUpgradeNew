import { Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StateService } from '@uirouter/core';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { WindowRef } from 'common/module';
import { ResponseErrorService } from 'common/services';
import { stateNames as homeStateNames } from 'home/constants';
import { AccountDropdownComponent, InjectionValues as AccountDropDownInjection } from 'menu/accountDropdown/accountDropDown.component';
import { ChildModalComponent, InjectionValues as ChildInjectionValues } from 'menu/hamburger/child/childModal.component';
import { CloseOptions, ContainerComponent, InjectionValues as ContainerInjection } from 'menu/hamburger/container/container.component';
import { ParentModalComponent } from 'menu/hamburger/parent/parentModal.component';
import { InjectionValues as SearchInjection, SearchComponent } from 'menu/search/search.component';
import { defer, EMPTY, iif, Observable, of } from 'rxjs';
import { catchError, filter, map, take } from 'rxjs/operators';
import { CmsMenuLink, LinkInfo } from '../menuLinkMapperService/menuLinkMapper.service';



@Injectable()
export class MenuNavigationService {

    constructor(
        @Inject(WindowRef) private window: Window,
        private responseErrorService: ResponseErrorService,
        private stateService: StateService,
        private authService: AuthenticationService,
        private matDialog: MatDialog
    ) { }

    async logout() {
        const response = await this.authService.logout();

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response, true);
            this.stateService.go(homeStateNames.Frame);
        }
    }

    showSearchModal({ right }: DOMRect) {
        return this.matDialog.open(SearchComponent, {
            data: {
                right: this.window.document.documentElement.clientWidth - right,
                scrollY: this.window.pageYOffset
            } as SearchInjection,
            panelClass: ['hctra-dialog-container', 'hctra-menu-transparent-container'],
            backdropClass: 'hctra-dialog-translucent-backdrop',
            disableClose: false
        });
    }

    showDropdownModal(cmsContent$: Observable<CmsMenuLink[]>, { right }: DOMRect) {
        return this.matDialog.open(AccountDropdownComponent, {
            data: {
                right: this.window.document.documentElement.clientWidth - right,
                cmsContent$,
                scrollY: this.window.pageYOffset
            } as AccountDropDownInjection,
            panelClass: ['hctra-dialog-container', 'hctra-menu-transparent-container'],
            backdropClass: 'hctra-dialog-translucent-backdrop',
            disableClose: false
        });
    }

    openMenuModal<T>(component: typeof ParentModalComponent | typeof ChildModalComponent, data: T): MatDialogRef<ContainerComponent> {
        return this.matDialog.open(ContainerComponent, {
            data: {
                component,
                ...data
            } as ContainerInjection & T,
            panelClass: 'hctra-dialog-container',
            disableClose: true
        });
    }

    goToLinkFromHamburger(link: LinkInfo, currentMenu$: Observable<LinkInfo[]>, currentMenuPath: string[], { ctrlKey, metaKey }: MouseEvent): Observable<CloseOptions> {

        const openChild$ = defer(() => this.openMenuModal<ChildInjectionValues>(ChildModalComponent, {
            menuPath: [...currentMenuPath, link.label],
            currentMenu$
        }).componentInstance.beforeClosed$)
            .pipe(take(1), map(all => ({ all, skipAnimation: true })));

        const openLink$ = of({ all: !link.external && !ctrlKey && !metaKey, skipAnimation: false });

        return iif(() => link.hasChildren, openChild$, openLink$)
            .pipe(
                //the subscriber is not interested if all is false
                filter(({ all }) => all),
                catchError(() => EMPTY));


    }
}
