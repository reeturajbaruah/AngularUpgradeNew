import { } from 'jasmine';
import { MenuNavigationService} from 'menu/services';
import { StateService } from '@uirouter/core';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { stateNames as homeStateNames } from 'home/constants';
import { ContainerComponent } from 'menu/hamburger/container/container.component';
import { Subject } from 'rxjs';
import { LinkInfo } from '../menuLinkMapperService/menuLinkMapper.service';
import { reduce } from 'rxjs/operators';
import { ChildModalComponent } from 'menu/hamburger/child/childModal.component';
import { AccountDropdownComponent } from 'menu/accountDropdown/accountDropDown.component';
import { SearchComponent } from 'menu/search/search.component';

describe('menuLinkNavigationService', () => {

    let responseErrorService: jasmine.SpyObj<any>;
    let authService: jasmine.SpyObj<AuthenticationService>;
    let matDialog: jasmine.SpyObj<MatDialog>;
    let stateService: jasmine.SpyObj<StateService>;
    let windowMock: Window;
    let service: MenuNavigationService;

    beforeEach(() => {
        windowMock = {
            pageYOffset: 100,
            document: {
                documentElement: {
                    clientWidth: 1000
                }
            }
        } as Window;
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);
        stateService = jasmine.createSpyObj('stateService', ['go']);
        authService = jasmine.createSpyObj('authService', ['logout']);
        matDialog = jasmine.createSpyObj('matDialog', ['open']);

        service = new MenuNavigationService(windowMock, responseErrorService, stateService, authService, matDialog);
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('logout', () => {

        beforeEach(() => {

            authService.logout.and.returnValue('fake logout response' as any);
        });

        it('should call authService.logout', async () => {

            service.logout();

            expect(authService.logout).toHaveBeenCalledTimes(1);
        });

        it('should call responseErrorService.isErrorFree with logout response', async () => {

            await service.logout();

            expect(responseErrorService.isErrorFree).toHaveBeenCalledOnceWith('fake logout response');
        });

        it('should show alerts and goToHome when no errors', async () => {

            responseErrorService.isErrorFree.and.returnValue(true);

            await service.logout();

            expect(stateService.go).toHaveBeenCalledOnceWith(homeStateNames.Frame);
            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledOnceWith('fake logout response', true);
        });

        it('should not show alerts nor goToHome when errors', async () => {

            responseErrorService.isErrorFree.and.returnValue(false);

            await service.logout();

            expect(stateService.go).not.toHaveBeenCalled();
            expect(responseErrorService.displayAlertsFromResponse).not.toHaveBeenCalled();
        });
    });


    describe('showSearchModal', () => {

        beforeEach(() => {

            matDialog.open.and.returnValue('fake return value' as any);
        });

        it('should call matDialog.open with SearchComponent cmsContent panelClass backdropClass disableClose false', async () => {

            expect(service.showSearchModal({ right: 150 } as any));

            expect(matDialog.open).toHaveBeenCalledOnceWith(SearchComponent, {
                data: {
                    right: 850,
                    scrollY: 100
                },
                panelClass: ['hctra-dialog-container', 'hctra-menu-transparent-container'],
                backdropClass: 'hctra-dialog-translucent-backdrop',
                disableClose: false
            });
        });
    });

    describe('showDropdownModal', () => {

        beforeEach(() => {

            matDialog.open.and.returnValue('fake return value' as any);
        });

        it('should call matDialog.open with AccountDropdownComponent cmsContent panelClass backdropClass disableClose false', async () => {

            expect(service.showDropdownModal('fake cms content' as any, { right: 99 } as any));

            expect(matDialog.open).toHaveBeenCalledOnceWith(AccountDropdownComponent, {
                data: {
                    right: 901,
                    cmsContent$: 'fake cms content',
                    scrollY: 100
                },
                panelClass: ['hctra-dialog-container', 'hctra-menu-transparent-container'],
                backdropClass: 'hctra-dialog-translucent-backdrop',
                disableClose: false
            });
        });
    });

    describe('openMenuModal', () => {

        beforeEach(() => {

            matDialog.open.and.returnValue('fake return value' as any);
        });

        it('should call matDialog.open with ContainerComponent, passed component, data, panelClass and disableClose true', async () => {

            service.openMenuModal('some fake component' as any, { a: 1, b: 2 });

            expect(matDialog.open).toHaveBeenCalledOnceWith(ContainerComponent, {
                data: {
                    component: 'some fake component',
                    a: 1,
                    b: 2
                },
                panelClass: 'hctra-dialog-container',
                disableClose: true
            });
        });
    });

    describe('goToLinkFromHamburger', () => {

        let openMenuModalSpy;
        let beforeClosedSubject: Subject<boolean>;

        beforeEach(() => {

            beforeClosedSubject = new Subject();
            openMenuModalSpy = spyOn(service, 'openMenuModal');
            openMenuModalSpy.and.returnValue({
                componentInstance: {
                    beforeClosed$: beforeClosedSubject.asObservable()
                }
            });
        });

        it('for link without children should emit skipAnimation false', async () => {

            const result = await service.goToLinkFromHamburger(
                { hasChildren: false } as LinkInfo, 'fake observable' as any, ['a', 'b'], {} as MouseEvent)
                .pipe(reduce((acc, curr) => [...acc, curr], []))
                .toPromise();

            expect(result.length).toEqual(1);
            expect(result[0]).toEqual({
                all: true,
                skipAnimation: false
            });

            expect(openMenuModalSpy).not.toHaveBeenCalled();            
        });

        [
            [false, false, true],
            [false, true, false],
            [false, true, true],
            [true, false, false],
            [true, false, true],
            [true, true, false],
            [true, true, true]
        ].forEach(([external, ctrlKey, metaKey]) => {

            it(`for link without children should emit nothing if external ${external}, ctrlKey ${ctrlKey}, metaKey ${metaKey}`, async () => {

                const result = await service.goToLinkFromHamburger(
                    { hasChildren: false, external } as LinkInfo, 'fake observable' as any, ['a', 'b'], { ctrlKey, metaKey } as MouseEvent)
                    .pipe(reduce((acc, curr) => [...acc, curr], []))
                    .toPromise();

                expect(result.length).toEqual(0);

                expect(openMenuModalSpy).not.toHaveBeenCalled();
            });
        });

        it('for link with children should call service.openMenuModal', async () => {

            service.goToLinkFromHamburger(
                { hasChildren: true, label: 'current label' } as LinkInfo, 'fake observable' as any, ['a', 'b'], {} as MouseEvent)
            .subscribe().unsubscribe();

            expect(openMenuModalSpy).toHaveBeenCalledOnceWith(ChildModalComponent, {
                menuPath: ['a', 'b', 'current label'],
                currentMenu$: 'fake observable'
            });
        });

        it('for link with children should emit skipAnimation true when beforeClosed$ emits true', async () => {

            const resultPromise = service.goToLinkFromHamburger(
                { hasChildren: true, label: 'current label' } as LinkInfo, 'fake observable' as any, ['a', 'b'], {} as MouseEvent)
                .pipe(reduce((acc, curr) => [...acc, curr], []))
                .toPromise();

            beforeClosedSubject.next(true);
            beforeClosedSubject.next(false); //should be ignored

            const result = await resultPromise;

            expect(result.length).toBe(1);
            expect(result[0]).toEqual({
                all: true,
                skipAnimation: true
            });
        });

        it('for link with children should emit nothing when beforeClosed$ emits true', async () => {

            const resultPromise = service.goToLinkFromHamburger(
                { hasChildren: true, label: 'current label' } as LinkInfo, 'fake observable' as any, ['a', 'b'], {} as MouseEvent)
                .pipe(reduce((acc, curr) => [...acc, curr], []))
                .toPromise();

            beforeClosedSubject.next(false);
            beforeClosedSubject.next(true); //should be ignored

            const result = await resultPromise;

            expect(result.length).toBe(0);
        });
    });
});
