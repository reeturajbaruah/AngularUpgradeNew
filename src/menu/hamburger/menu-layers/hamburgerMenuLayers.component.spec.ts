import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerMenuLayersComponent } from './hamburgerMenuLayers.component';
import { MatIconAvailabilityService } from 'common/services';
import { MenuLinkHelper } from 'menu/services/menuLinkHelper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Subject } from 'rxjs';

describe('HamburgerMenuLayersComponent', () => {
    let component: HamburgerMenuLayersComponent;
    let fixture: ComponentFixture<HamburgerMenuLayersComponent>;
    let matIconAvailabilityService: any;
    let menuLinkHelper: jasmine.SpyObj<MenuLinkHelper>;

    beforeEach(async () => {

        matIconAvailabilityService = {};
        menuLinkHelper = jasmine.createSpyObj('MenuLinkHelper', ['listentoMenuEvent', 'goToEvent']);

        menuLinkHelper.listentoMenuEvent.and.returnValue();

        await TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule],
            declarations: [HamburgerMenuLayersComponent],
            providers: [
                { provide: MatIconAvailabilityService, useValue: matIconAvailabilityService },
                { provide: MenuLinkHelper, useValue: menuLinkHelper }
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HamburgerMenuLayersComponent);
        component = fixture.componentInstance;
        component.links = [{ collapse: false, hasChildren: true, authorizedChildren: [] } as any];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('handleMenuClick', () => {
        it('should call goToEvent', () => {
            menuLinkHelper.goToEvent.and.returnValue(new Subject<any>());

            component.handleMenuClick({ collapse: false, hasChildren: false } as any, new MouseEvent('click'));

            expect(menuLinkHelper.goToEvent).toHaveBeenCalled();
        });
    });

    describe('getHeight', () => {
        it('should return 47px', () => {
            const height = component.getHeight({ level: 1 } as any);

            expect(height).toEqual('47px');
        });

        it('should return 40px', () => {
            const height = component.getHeight({ level: 2 } as any);

            expect(height).toEqual('40px');
        });

        it('should return 38px', () => {
            const height = component.getHeight({ level: 3 } as any);

            expect(height).toEqual('38px');
        });

        it('should return 47px', () => {
            const height = component.getHeight({ level: 4 } as any);

            expect(height).toEqual('47px');
        });
    });

    describe('getFontSize', () => {
        it('should return 20px', () => {
            const height = component.getFontSize({ level: 1 } as any);

            expect(height).toEqual('20px');
        });

        it('should return 18px', () => {
            const height = component.getFontSize({ level: 2 } as any);

            expect(height).toEqual('18px');
        });

        it('should return 16px', () => {
            const height = component.getFontSize({ level: 3 } as any);

            expect(height).toEqual('16px');
        });

        it('should return 20px', () => {
            const height = component.getFontSize({ level: 4 } as any);

            expect(height).toEqual('20px');
        });
    });
});
