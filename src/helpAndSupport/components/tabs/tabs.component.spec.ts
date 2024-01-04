import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { TabsComponent } from './tabs.component';
import { UIRouterGlobals } from '@uirouter/core';
import { States } from '../../states';
import { IFrameCms } from 'helpAndSupport/models/frame.models';

const mockState = States.ContactUs;

const mockFrameCms = {
    contactUsTab: 'Contact Us',
    topFiveFaqTab: 'Top 5 FAQs',
    documentsTab: 'Documents',
    storeLocatorTab: 'Store Locator'
} as IFrameCms;

describe('Help and Support tabs component', () => {
    let fixture: ComponentFixture<TabsComponent>;
    let component: TabsComponent;

    let state: jasmine.SpyObj<StateService>;
    let uiRouterGlobals: jasmine.SpyObj<UIRouterGlobals>;

    beforeEach(async () => {
        state = jasmine.createSpyObj('state', ['go']);
        uiRouterGlobals = jasmine.createSpyObj('UIRouterGlobals', [], { current: { name: mockState } });

        await TestBed
            .configureTestingModule({
                declarations: [TabsComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(TabsComponent);
        component = fixture.debugElement.componentInstance;
        component.frameCms = mockFrameCms;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('ngOnInit', () => {
        it('should define tabs after initialization', () => {
            component.ngOnInit();

            expect(component.tabs).toBeDefined();
        });

        it('should set currentTab to the current state', () => {
            component.ngOnInit();

            expect(component.currentTab).toBe(uiRouterGlobals.current.name);
        });
    });

    describe('selectTab', () => {
        it('should update currentTab', async () => {
            await component.selectTab(mockState);

            expect(component.currentTab).toBe(mockState);
        });

        it('should call state.go with the new state', async () => {
            await component.selectTab(mockState);

            expect(state.go).toHaveBeenCalledWith(mockState);
        });
    });
});
