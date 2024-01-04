import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WindowRef } from 'common/providers';
import { ToasterService } from 'common/services';
import { WizardStateResolverFactory } from 'common/ui';
import { } from 'jasmine';
import { ReplaySubject, Subscription } from 'rxjs';
import { StorefrontService } from 'storefront/services/storefront.service';
import { TranslationService } from 'translation/services';
import { StartPageComponent } from './startPage.component';

describe('component: StartPageComponent - storefront', () => {
    let component: StartPageComponent;
    let fixture: ComponentFixture<StartPageComponent>;

    let translationService: jasmine.SpyObj<TranslationService>;
    let storefrontService: jasmine.SpyObj<StorefrontService>;
    let windowRef: jasmine.SpyObj<Window>;
    let toasterService: jasmine.SpyObj<ToasterService>;
    let wizardStateResolver: jasmine.SpyObj<WizardStateResolverFactory>;

   let isReady: ReplaySubject<any>;

    beforeEach(async () => {
        wizardStateResolver = jasmine.createSpyObj('WizardStateResolverFactory', ['getService']);
        windowRef = jasmine.createSpyObj('WindowRef', ['setInterval', 'clearInterval']);
        toasterService = jasmine.createSpyObj('ToasterService', ['removeAll']);
        translationService = jasmine.createSpyObj('TranslationService', ['stopRealtimeTranslations', 'startRealtimeTranslations']);
        storefrontService = jasmine.createSpyObj('StorefrontService', ['isEnabled', 'delay', 'nextState']);

        isReady = new ReplaySubject<any>(1);
        Object.defineProperty(translationService, 'isReadyEvent', {
            get: () => isReady.asObservable()
        });

        await TestBed.configureTestingModule({
            declarations: [StartPageComponent],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [CommonModule, FormsModule, BrowserAnimationsModule],
            providers: [
                { provide: TranslationService, useFactory: () => translationService },
                { provide: StorefrontService, useFactory: () => storefrontService },
                { provide: WizardStateResolverFactory, useFactory: () => wizardStateResolver },
                { provide: WindowRef, useFactory: () => windowRef },
                { provide: ToasterService, useFactory: () => toasterService }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(StartPageComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {
        it('should subscribe to translationService.isReadyEvent and setup interval for clearing toaster messages', () => {
            const settings = {
                isAvailable: true,
                supportedLanguages: [
                { label: 'en', nativeLabel: 'English' },
                { label: 'es', nativeLabel: 'Spanish' }]
            } as any;
    
            component.ngOnInit();
    
            isReady.next(settings);
    
            expect(component.translationAvailable).toBeTrue();
            expect(component.languages).toEqual(settings.supportedLanguages);
            expect(windowRef.setInterval).toHaveBeenCalledWith(jasmine.any(Function), 250);
        });
    });

    describe('clear', () => {
        it('should clear the interval if it is set', () => {
            component['intervalCancel'] = 123;

            component.clear();

            expect(windowRef.clearInterval).toHaveBeenCalledWith(123);
        });
    
        it('should unsubscribe from translationServiceReady if it is set', () => {
            const mockSubscription = new Subscription();
            spyOn(mockSubscription, 'unsubscribe');
            component['translationServiceReady'] = mockSubscription;

            component.clear();

            expect(mockSubscription.unsubscribe).toHaveBeenCalled();
        });
    });    

    describe('ngOnDestroy', () => {
        it('should call clear method', () => {
            spyOn(component, 'clear');

            component.ngOnDestroy();

            expect(component.clear).toHaveBeenCalled();
        });
    });
    
    describe('start', () => {
        let mockService;

        beforeEach(() => {
            mockService = jasmine.createSpyObj('Service', ['nextState']);
            wizardStateResolver.getService.and.returnValue(mockService);
        });

        it('should clear existing subscriptions and intervals', async () => {
            spyOn(component, 'clear');

            await component.start();

            expect(component.clear).toHaveBeenCalled();
        });
    
        it('should set translation language and start translations if language is provided', async () => {
            const mockLanguage = { label: 'en', nativeLabel: 'English' } as any;

            await component.start(mockLanguage);
            
            expect(translationService.languagePreference).toBe(mockLanguage.label);
            expect(translationService.startRealtimeTranslations).toHaveBeenCalledWith(mockLanguage.label);
        });
    
        it('should hide the component, wait for a delay, and trigger the next state', async () => {
            await component.start();
    
            expect(component.show).toBeFalse();
            expect(storefrontService.delay).toHaveBeenCalledWith(500);
            expect(mockService.nextState).toHaveBeenCalled();
        });
    });    
});
