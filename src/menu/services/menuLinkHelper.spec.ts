import { fakeAsync, tick } from '@angular/core/testing';
import { } from 'jasmine';
import { CloseOptions } from 'menu/hamburger/container/container.component';
import { LinkInfo, MenuLinkMapperService, MenuNavigationService } from 'menu/services';
import { NEVER, Observable, of, Subject } from 'rxjs';

import { MenuLinkHelper } from './menuLinkHelper';

describe('menuLinkHelper', () => {

    let menuLinkHelper: MenuLinkHelper;
    let menuNavigationService: jasmine.SpyObj<MenuNavigationService>;
    let menuLinkMapper: jasmine.SpyObj<MenuLinkMapperService>;
    const closeEventSub = new Subject<CloseOptions>();
    const goToEventSub = new Subject<[LinkInfo, string, MouseEvent]>();

    beforeEach(() => {
        menuNavigationService = jasmine.createSpyObj('menuNavigationService', ['goToLinkFromHamburger']);

        menuLinkMapper = jasmine.createSpyObj('menuLinkMapper', ['getMapFilterObservable']);
        menuLinkMapper.getMapFilterObservable.and.returnValue(of('fake map filter observable') as any);

        menuLinkHelper = new MenuLinkHelper(menuNavigationService, menuLinkMapper);
    });

    it('service to be defined', () => {

        expect(menuLinkHelper).toBeDefined();
    });

    it('gets the current menu', () => {

        menuLinkHelper.getCurrentMenu();
        expect(menuLinkMapper.getMapFilterObservable).toHaveBeenCalled();
    });

    it('sets the cms content', () => {
        const data = {
            cmsContent: new Observable<any>()
        };

        menuLinkHelper.setCmsContent(data);
        expect(data).toEqual(menuLinkHelper.data);

    });

    it('returns the close event subject', () => {
        const sub = menuLinkHelper.getCloseSubject();
        expect(sub).toEqual(closeEventSub);
    });


    it('returns the goto event subject', () => {
        const sub = menuLinkHelper.getCloseSubject();
        expect(sub).toEqual(goToEventSub);
    });

    it('calls method listentoMenuEvent', fakeAsync(async () => {

        menuNavigationService.goToLinkFromHamburger.and.returnValue(NEVER);

        menuLinkHelper.listentoMenuEvent();

        const go = menuLinkHelper.goToEvent();
        go.next(['fake link' as any, 'fake parent', 'fake mouse event' as any]);
        tick(1);

        expect(menuNavigationService.goToLinkFromHamburger).toHaveBeenCalled();

    }));

});