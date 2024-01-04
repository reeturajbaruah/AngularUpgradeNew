import {
    ChangeDetectionStrategy,
    Component, Inject, OnDestroy, OnInit
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EMPTY, from, Observable, Subject } from 'rxjs';
import { catchError, exhaustMap, startWith, takeUntil, tap } from 'rxjs/operators';
import { showTrigger } from '../animations/show';
import { CmsMenuLink, LinkInfo, MenuLinkMapperService, MenuNavigationService } from '../services';
import { CurrentUser, CurrentUserService } from 'common/services';

export interface InjectionValues {
    right: number;
    cmsContent$: Observable<CmsMenuLink[]>;
    scrollY: number;
}

@Component({
    selector: 'menu-account-dropdown-component',
    templateUrl: './accountDropDown.html',
    styleUrls: ['./accountDropDown.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [showTrigger]
})
export class AccountDropdownComponent implements OnInit, OnDestroy {

    constructor(
        private menuLinkMapper: MenuLinkMapperService,
        private menuNavigationService: MenuNavigationService,
        private dialogRef: MatDialogRef<AccountDropdownComponent>,
        @Inject(MAT_DIALOG_DATA) private injectedValues: InjectionValues,
        private currentUserService: CurrentUserService
        ) { }

    public currentUser: CurrentUser;
    public right: number;
    public scrollY: number;
    public links$: Observable<LinkInfo[]>;
    public allowNavigation$: Observable<boolean>;
    private logoutSubject = new Subject<boolean>();
    private onDestroySubject = new Subject<void>();

    ngOnDestroy(): void {
        this.onDestroySubject.next();
    }

    ngOnInit(): void {

        this.right = this.injectedValues.right;
        this.scrollY = this.injectedValues.scrollY;

        this.logoutSubject.pipe(
            exhaustMap(() => from(this.menuNavigationService.logout()).pipe(
                catchError(() => EMPTY),
                tap({ complete: () => this.closeMenu() })
            )),
            takeUntil(this.onDestroySubject)
        ).subscribe();

        this.links$ = this.menuLinkMapper.getMapFilterObservable(this.injectedValues.cmsContent$);

        this.allowNavigation$ = this.logoutSubject.pipe(startWith(true));

        this.currentUser = this.currentUserService.getCurrentUser();
    }

    logout() {
        this.logoutSubject.next(false);
    }

    closeMenu(){
        this.dialogRef.close();
    }
}
