import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CallToActionMobileComponent } from './callToActionMobile.component';
import { ENVIRON_CONFIG } from 'common/upgrades';

describe('component: homePage-CallToActionMobileMobile', () => {

    let fixture: ComponentFixture<CallToActionMobileComponent>;
    let authService: jasmine.SpyObj<AuthenticationService>;
    let component: CallToActionMobileComponent;
    let environmentConfig;

    beforeEach(async () => {
        authService = jasmine.createSpyObj('authenticationService', ['isAuthenticated']);
        environmentConfig = {
            isMergeMATandVioOn: false
        };
        await TestBed
            .configureTestingModule({
                declarations: [
                    CallToActionMobileComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, MatMenuModule, MatButtonModule, BrowserAnimationsModule],
                providers: [
                    { provide: AuthenticationService, useFactory: () => authService },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(CallToActionMobileComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsData = {
            Children: [
                {
                    Title: '',
                    ButtonURL: '',
                    hideAtLogIn: '',
                    hideAtLogOut: '',
                    SectionConfig: ''
                },
                {
                    Title: '',
                    ButtonURL: '',
                    hideAtLogIn: '1',
                    hideAtLogOut: '',
                    SectionConfig: ''
                },
                {
                    Title: '',
                    ButtonURL: '',
                    hideAtLogIn: '',
                    hideAtLogOut: '1',
                    SectionConfig: ''
                },
                {
                    Title: '',
                    ButtonURL: '',
                    hideAtLogIn: '',
                    hideAtLogOut: '',
                    SectionConfig: ''
                },
            ]
        };
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('logged IN', () => {
        it('should pass with correct Data', async () => {
            
            authService.isAuthenticated.and.returnValue(true);
            fixture.detectChanges();
            const displayResultTest = {
                Children: [
                    {
                        Title: '',
                        ButtonURL: '',
                        hideAtLogIn: '',
                        hideAtLogOut: '',
                        SectionConfig: ''
                    },
                    {
                        Title: '',
                        ButtonURL: '',
                        hideAtLogIn: '',
                        hideAtLogOut: '1',
                        SectionConfig: ''
                    },
                    {
                        Title: '',
                        ButtonURL: '',
                        hideAtLogIn: '',
                        hideAtLogOut: '',
                        SectionConfig: ''
                    },
                ]
            };
            expect(displayResultTest.Children).toEqual(component.displayList);
        });
    });

    describe('logged OUT', () => {
        it('should pass with correct Data', async () => {

            authService.isAuthenticated.and.returnValue(false);
            fixture.detectChanges();
            const displayResultTest = {
                Children: [
                    {
                        Title: '',
                        ButtonURL: '',
                        hideAtLogIn: '',
                        hideAtLogOut: '',
                        SectionConfig: ''
                    },
                    {
                        Title: '',
                        ButtonURL: '',
                        hideAtLogIn: '1',
                        hideAtLogOut: '',
                        SectionConfig: ''
                    },
                    {
                        Title: '',
                        ButtonURL: '',
                        hideAtLogIn: '',
                        hideAtLogOut: '',
                        SectionConfig: ''
                    },
                ]
            };
            expect(displayResultTest.Children).toEqual(component.displayList);
        });
    });

    describe('toggleDropDown', () => {
        it('should toggle flag', async () => {

            component.isDropDownOpen = false;
            component.toggleDropDown();
            expect(component.isDropDownOpen).toBeTrue();
        });
    });
});
