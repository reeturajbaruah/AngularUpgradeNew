import { } from 'jasmine';

import { TestBed, ComponentFixture, } from '@angular/core/testing';
import { StorefrontUtilityComponent } from './utility.component';
import { StorefrontUtilityService } from '../services/storefrontUtility.service';

describe('directive: storefront utility', () => {

    let fixture: ComponentFixture<StorefrontUtilityComponent>;
    let component: StorefrontUtilityComponent;
    let storefrontUtilityService;

    beforeEach(async () => {

        storefrontUtilityService = {
            isRunningAsKiosk: null,
            webStoreData: {
                fullSiteMode: null
            }
        };

        await TestBed
            .configureTestingModule({
                declarations: [StorefrontUtilityComponent],
                imports: [],
                providers: [
                    { provide: StorefrontUtilityService, useFactory: () => storefrontUtilityService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(StorefrontUtilityComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    describe('test properties', () => {

        describe('isKioskView', () => {

            it('is false when not running as kiosk', () => {
                storefrontUtilityService.isRunningAsKiosk = false;

                expect(component.isKioskView).toBeFalsy();
            });

            it('is false when running as kiosk and in full site mode', () => {
                storefrontUtilityService.isRunningAsKiosk = true;
                storefrontUtilityService.webStoreData.fullSiteMode = true;

                expect(component.isKioskView).toBeFalsy();
            });

            it('is true when running as kiosk and not in full site mode', () => {
                storefrontUtilityService.isRunningAsKiosk = true;
                storefrontUtilityService.webStoreData.fullSiteMode = false;

                expect(component.isKioskView).toBeTruthy();
            });

        });

    });
});
