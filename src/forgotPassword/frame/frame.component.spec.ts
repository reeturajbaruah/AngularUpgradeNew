import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { ForgotPasswordFrameComponent } from './frame.component';
import { StorefrontUtilityService } from 'storefront/services/storefrontUtility.service';

describe('component: ForgotPasswordFrameComponent', () => {

    let fixture: ComponentFixture<ForgotPasswordFrameComponent>;
    let component: ForgotPasswordFrameComponent;
    let state: StateService;
    let storeFrontUtilityService;

    beforeEach(async () => {

        state = jasmine.createSpyObj('state', ['go']);
        storeFrontUtilityService = {
            webStoreData: {
                fullSiteMode: false,
            },
            isRunningAsKiosk: false
        };

        await TestBed
            .configureTestingModule({
                declarations: [
                    ForgotPasswordFrameComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: StorefrontUtilityService, useFactory: () => storeFrontUtilityService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ForgotPasswordFrameComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });
});
