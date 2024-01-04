
import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { take, toArray } from 'rxjs/operators';
import { AccountDropdownComponent, InjectionValues } from './accountDropDown.component';
import { MenuLinkMapperService, MenuNavigationService } from '../services';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CurrentUserService } from 'common/services';

describe('component: menu-account-dropdown-component', () => {

    let fixture: ComponentFixture<AccountDropdownComponent>;
    let component: AccountDropdownComponent;
    let menuNavigationService: jasmine.SpyObj<MenuNavigationService>;
    let menuLinkMapper: jasmine.SpyObj<MenuLinkMapperService>;
    let dialogRef: jasmine.SpyObj<MatDialogRef<AccountDropdownComponent>>;
    let dialogData: InjectionValues;
    let currentUserService: jasmine.SpyObj<CurrentUserService>;

    beforeEach(async () => {
        menuNavigationService = jasmine.createSpyObj('menuNavigationService', ['openMenuModal', 'showDropdownModal', 'logout']);
        menuLinkMapper = jasmine.createSpyObj('menuLinkMapper', ['getMapFilterObservable']);
        dialogData = { cmsContent$: 'fake cms content observable' as any, scrollY: 97, right: 75 };
        currentUserService = jasmine.createSpyObj('CurrentUserService', ['getCurrentUser']);

        dialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
        menuLinkMapper.getMapFilterObservable.and.returnValue('fake map filter observable' as any);
        menuNavigationService.logout.and.returnValue(Promise.resolve());

        await TestBed
            .configureTestingModule({
                declarations: [
                    AccountDropdownComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: MAT_DIALOG_DATA, useFactory: () => dialogData },
                    { provide: MenuLinkMapperService, useFactory: () => menuLinkMapper },
                    { provide: MenuNavigationService, useFactory: () => menuNavigationService },
                    { provide: MatDialogRef, useFactory: () => dialogRef },
                    { provide: CurrentUserService, useFactory: () => currentUserService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(AccountDropdownComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        it(`should set right`, async () => {

            component.ngOnInit();

            expect(component.right).toBe(75);
        });

        it(`should set scrollY`, async () => {

            component.ngOnInit();

            expect(component.scrollY).toBe(97);
        });

        it(`should set links$`, () => {

            component.ngOnInit();

            expect(component.links$).toEqual('fake map filter observable' as any);
            expect(menuLinkMapper.getMapFilterObservable)
                .toHaveBeenCalledOnceWith('fake cms content observable' as any);
        });
    });

    describe('closeMenu', () => {

        it(`should call dialogRef.close`, async () => {

            component.closeMenu();

            expect(dialogRef.close).toHaveBeenCalledTimes(1);
        });
    });

    describe('logout', () => {

        beforeEach(() => {

            component.ngOnInit();
        });

        afterEach(() => {
            component.ngOnDestroy();
        });

        it('should disable navigation', fakeAsync(async () => {

            component.ngOnInit();

            const allowNavigationPromise = component.allowNavigation$.pipe(take(2), toArray()).toPromise();

            component.logout();
            tick(1);

            expect(await allowNavigationPromise).toEqual([true, false]);
        }));

        it('should call menuNavigationService.logout once then wait for it to resolve', fakeAsync(() => {

            menuNavigationService.logout.and.returnValue(new Promise(() => null));

            component.logout();
            tick(1);
            component.logout();
            tick(1);
            component.logout();
            tick(1);
            component.logout();
            tick(1);

            expect(menuNavigationService.logout).toHaveBeenCalledTimes(1);
            expect(dialogRef.close).toHaveBeenCalledTimes(0);
        }));

        it('should allow call to menuNavigationService.logout when last call resolves', fakeAsync(() => {

            menuNavigationService.logout.and.returnValue(Promise.resolve());

            component.logout();
            tick(1);
            component.logout();
            tick(1);
            component.logout();
            tick(1);
            component.logout();
            tick(1);

            expect(menuNavigationService.logout).toHaveBeenCalledTimes(4);
            expect(dialogRef.close).toHaveBeenCalledTimes(4);
        }));
    });
});



