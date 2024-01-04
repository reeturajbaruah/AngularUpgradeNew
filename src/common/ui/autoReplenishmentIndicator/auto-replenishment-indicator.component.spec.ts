import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiteCoreItem } from '../../../cms/cms.module';
import { CmsUtilService } from '../../../cms/services';
import { CurrentUserService, CurrentUser } from '../../services';
import { AutoReplenishmentIndicatorComponent, IFlexPayCurrentUser } from './auto-replenishment-indicator.component';

enum IndicatorState {
    On = 'Indicator-On',
    Off = 'Indicator-Off'
}

describe('AutoReplenishmentIndicatorComponent', () => {
    let component: AutoReplenishmentIndicatorComponent;
    let fixture: ComponentFixture<AutoReplenishmentIndicatorComponent>;
    let fakeIndicatorCms: SiteCoreItem;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;
    let currentUserSvc: jasmine.SpyObj<CurrentUserService>;


    beforeEach(async () => {

        //TODO: Improve the cmsUtilService call to actually return the fakeIndicatorCms children 'Image' values.
        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['parseAllImageAttributes']);
        cmsUtilService.parseAllImageAttributes.and.callFake(() => ( { image: 'fakeImageUrl', alt: 'fakeImageUrl', height: '', width: '' }) );

        currentUserSvc = jasmine.createSpyObj('currentUserSvc', ['getCurrentUser']);

        await TestBed.configureTestingModule({
            declarations: [AutoReplenishmentIndicatorComponent],
            providers: [
                { provide: CmsUtilService, useFactory: () => cmsUtilService },
                { provide: CurrentUserService, useFactory: () => currentUserSvc }]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AutoReplenishmentIndicatorComponent);
        component = fixture.componentInstance;

        fakeIndicatorCms = {
            Title: 'Fake Indicator',
            Children: [
                { Title: 'Indicator-Off', Image: 'fakeOffUrl' },
                { Title: 'Indicator-On', Image: 'fakeOnUrl' }
            ] as SiteCoreItem[]
        } as SiteCoreItem;

        component.cmsData = fakeIndicatorCms;

    });

    it('should create', () => {
        expect(component).toBeDefined();
    });

    it('should use current user values when rebill opt in is false', async () => {
        const thisCurrentUser = {
            isFlexPay: true,
            rebillOptIn: false
        } as CurrentUser;
        currentUserSvc.getCurrentUser.and.callFake(() => thisCurrentUser);
        await component.ngOnInit();
        fixture.detectChanges();
    
        expect(component.cmsData).toBeDefined();
        expect(component.indicatorIcon).toBeDefined();
        expect(component.indicatorIcon).toEqual(IndicatorState.Off);
    });

    it('should use current user values when rebill opt in is true', async () => {
        const thisCurrentUser = {
            isFlexPay: true,
            rebillOptIn: true
        } as CurrentUser;
        currentUserSvc.getCurrentUser.and.callFake(() => thisCurrentUser);
        await component.ngOnInit();
        fixture.detectChanges();
    
        expect(component.cmsData).toBeDefined();
        expect(component.indicatorIcon).toBeDefined();
        expect(component.indicatorIcon).toEqual(IndicatorState.On);
    });
});
