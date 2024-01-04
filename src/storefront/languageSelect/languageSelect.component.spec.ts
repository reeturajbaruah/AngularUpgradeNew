import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TranslationService, Language } from 'translation/services';
import { LanguageSelectComponent } from './languageSelect.component';
import { ReplaySubject } from 'rxjs';

describe('component: languageSelect - storefront', () => {

    let fixture: ComponentFixture<LanguageSelectComponent>;
    let component: LanguageSelectComponent;
    let translationService: jasmine.SpyObj<TranslationService>;
   
    let isReady: ReplaySubject<any>;
    let realTime: ReplaySubject<any>;

    const lang1: Language = { label: 'Lang1', nativeLabel: 'Lang1', code: 'Lang1', isRtl: false, nativeGeneralExceptionMessage: null };
    const lang2: Language = { label: 'Lang2', nativeLabel: 'Lang2', code: 'Lang2', isRtl: false, nativeGeneralExceptionMessage: null };
    const lang3: Language = { label: 'Lang3', nativeLabel: 'Lang3', code: 'Lang3', isRtl: false, nativeGeneralExceptionMessage: null };

    beforeEach(async () => {

        isReady = new ReplaySubject<any>(1);
        realTime = new ReplaySubject<any>(1);

        translationService = jasmine.createSpyObj('translationService',
            [
                'stopRealtimeTranslations',
                'startRealtimeTranslations',
            ],
            {
                isReadyEvent: isReady,
                realTimeTranslationsEvent: realTime
            });

        await TestBed
            .configureTestingModule({
                declarations: [
                    LanguageSelectComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: TranslationService, useFactory: () => translationService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(LanguageSelectComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {

        [
            { supportedLanguages: [lang1, lang2, lang3], showDropDownIsAvailable: true, expected: true },
            { supportedLanguages: [lang1, lang2, lang3], showDropDownIsAvailable: false, expected: false },
            { supportedLanguages: [], showDropDownIsAvailable: true, expected: false },
            { supportedLanguages: [], showDropDownIsAvailable: false, expected: false }

        ].forEach(({ supportedLanguages, showDropDownIsAvailable, expected }) => {

            it(`should correctly set showDropDown when supportedLanguges is ${supportedLanguages}
                and isAvailable returns with ${showDropDownIsAvailable}`,
                async () => {
                    //Assemble
                    isReady.next({
                        supportedLanguages,
                        isAvailable: showDropDownIsAvailable
                    });

                    //Act
                    await component.ngOnInit();

                    //Assert
                    expect(component.showDropDown).toEqual(expected);
                });
        });

        it(`should correctly set selectedLanguage as translatedService.languagePreference`,
            async () => {
                //Assemble
                isReady.next({
                    supportedLanguages: [lang1, lang2, lang3],
                    isAvailable: true
                });
                translationService.languagePreference = lang2.label;
                //Act
                await component.ngOnInit();

                //Assert
                expect(component.selectedLanguage.label).toEqual(translationService.languagePreference);
            });

        it('registers for and handles an error event', () => {

            isReady.next({
                supportedLanguages: [lang1, lang2],
                isAvailable: true
            });

            component.ngOnInit();
            component.selectedLanguage = lang2;
            translationService.languagePreference = lang1.label;

            realTime.next({ status: 'stopping', hasErrored: true });
            expect(component.selectedLanguage.label).toBe(translationService.languagePreference);
        });

    });

    describe('changeLanguage', () => {

        it('should call translationService.stopRealtimeTranslations and translationService.startRealtimeTranslations',
            async () => {
                component.selectedLanguage = lang1;

                //Act
                await component.changeLanguage();

                //Assert
                expect(translationService.stopRealtimeTranslations).toHaveBeenCalledTimes(1);
                expect(translationService.startRealtimeTranslations).toHaveBeenCalledOnceWith(lang1.label);
            });

        [lang1, lang2, lang3].forEach(language => {

            it(`should set translationService.languagePreference to ${language.label}`,
                async () => {
                    //Assembnle
                    component.selectedLanguage = language;

                    //Act
                    await component.changeLanguage();

                    //Assert
                    expect(translationService.languagePreference).toEqual(language.label);
                });
        });
    });

});
