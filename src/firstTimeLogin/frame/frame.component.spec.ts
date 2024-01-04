import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { FirstTimeLoginFrameComponent } from './frame.component';
import { StorefrontUtilityService } from 'storefront/services/storefrontUtility.service';

describe('component: FirstTimeLoginFrameComponent', () => {

    let fixture: ComponentFixture<FirstTimeLoginFrameComponent>;
    let component: FirstTimeLoginFrameComponent;
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
                    FirstTimeLoginFrameComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: StorefrontUtilityService, useFactory: () => storeFrontUtilityService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(FirstTimeLoginFrameComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });
});
