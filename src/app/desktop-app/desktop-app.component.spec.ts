// import { CommonModule } from '@angular/common';
// import { ElementRef, NO_ERRORS_SCHEMA } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { StateService, TransitionService } from '@uirouter/core';
// import { } from 'jasmine';
// import { AuthenticationService } from '../../authentication/authenticationService/authentication.service';
// import { CmsUtilService } from '../../cms/services';
// import { ENVIRON_CONFIG } from '../../common/upgrades';
// import { TranslationModule } from '../../translation/module';
// import { TranslationService } from '../../translation/services';
// import { StorefrontModalService } from '../services/modal.service';
// import { StorefrontService } from '../services/storefront.service';
// import { KioskAppComponent } fro./desktop-app.componentent';


// describe('component: KioskAppComponent - storefront', () => {

//     let fixture: ComponentFixture<KioskAppComponent>;
//     let component: KioskAppComponent;
//     let storefrontService: jasmine.SpyObj<StorefrontService>;
//     let windowMock: any;
//     let stateService: jasmine.SpyObj<StateService>;
//     let modalService: jasmine.SpyObj<StorefrontModalService>;
//     let elementRef: jasmine.SpyObj<ElementRef>;
//     let cmsUtilService: jasmine.SpyObj<CmsUtilService>;
//     let environConfigMock: any;
//     let storefrontModalService: jasmine.SpyObj<StorefrontModalService>;
//     let transitionService: jasmine.SpyObj<TransitionService>;
//     let translationMock: any;
//     let authenticationService: jasmine.SpyObj<AuthenticationService>;

//     beforeEach(async () => {

//         storefrontService = jasmine.createSpyObj('StorefrontService', ['delay', 'isMaintenanceMode', 'getStateNameFromUrl', 'getCmsItem', 'init']);
//         windowMock = {
//             self: undefined,
//             top: undefined,
//             location: {
//                 protocol: '',
//                 origin: ''
//             },
//             addEventListener: jasmine.createSpy('addEventListener')
//         };
//         stateService = jasmine.createSpyObj('StateService', ['get', 'go']);
//         modalService = jasmine.createSpyObj('StorefrontModalService', ['showInactivityMessage', 'showExternalPage', 'showStorefrontMaintenanceMode']);
//         elementRef = jasmine.createSpyObj('elementRef', ['']);
//         cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['parseAllImageAttributes']);
//         environConfigMock = {
//             storefrontConfigs: {
//                 StorefrontInactivityReset: 100,
//                 StorefrontInactivityWarning: 100,
//                 StorefrontInactivityIntervalDelay: 100
//             }
//         };
//         storefrontModalService = jasmine.createSpyObj('StorefrotModalService', ['showInactivityMessage', 'showExternalPage', 'showStorefrontMaintenanceMode']);
//         transitionService = jasmine.createSpyObj('TransitionService', ['onBefore', 'onSuccess']);
//         translationMock = {
//             languagePreference: ''
//         };
//         authenticationService = jasmine.createSpyObj('AuthenticationService', ['isAuthenticated']);

//         await TestBed
//             .configureTestingModule({
//                 declarations: [
//                     KioskAppComponent
//                 ],
//                 schemas: [NO_ERRORS_SCHEMA],
//                 imports: [
//                     CommonModule,
//                     TranslationModule,
//                 ],
//                 providers: [
//                     { provide: StorefrontService, useFactory: () => storefrontService },
//                     { provide: Window, useValue: windowMock },
//                     { provide: StateService, useFactory: () => stateService },
//                     { provide: StorefrontModalService, useFactory: () => modalService },
//                     { provide: ElementRef, useFactory: () => elementRef },
//                     { provide: CmsUtilService, useFactory: () => cmsUtilService },
//                     { provide: ENVIRON_CONFIG, useValue: environConfigMock },
//                     { provide: StorefrontModalService, useFactory: () => storefrontModalService },
//                     { provide: TransitionService, useFactory: () => transitionService },
//                     { provide: TranslationService, useValue: () => translationMock },
//                     { provide: AuthenticationService, useFactory: () => authenticationService }
//                 ]
//             })
//             .compileComponents();


//         fixture = TestBed.createComponent(KioskAppComponent);
//         component = fixture.debugElement.componentInstance;
//     });

//     describe('canary', () => {
//         it('should pass', () => {
//             expect(component).toBeDefined();
//         });
//     });
// });
