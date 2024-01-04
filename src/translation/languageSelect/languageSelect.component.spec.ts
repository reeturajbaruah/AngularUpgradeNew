import { } from 'jasmine';
import { ChangeDetectorRef, NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TranslationService } from '../services';
import { LanguageSelectComponent } from './languageSelect.component';
import { ReplaySubject } from 'rxjs';
import { CmsUtilService } from 'cms/services';
import { cmsIds } from '../constants';
import { StringUtilsService } from 'common/services/stringUtils/stringUtils.service';
import { GenericRepoService } from '../../common/services';

describe('component: languageSelect', () => {

    let fixture: ComponentFixture<LanguageSelectComponent>;
    let component: LanguageSelectComponent;
    let translationService: jasmine.SpyObj<TranslationService>;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;
    let stringUtils: jasmine.SpyObj<StringUtilsService>;

    let isReady: ReplaySubject<any>;
    let realTime: ReplaySubject<{ status: 'starting' | 'stopping'; hasErrored: boolean }>;
    let genericRepo: any;

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

        
        genericRepo = {
            dataFactory: {
                getCmsPageById: jasmine.createSpy('getCmsPageById')
            }
        };

        genericRepo.dataFactory.getCmsPageById.and.resolveTo({
            cmsResponse: JSON.stringify({
                Title: 'Test',
                Image: '<div img="fake"></div>'
            })
        });

        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['generateFileSrc']);
        stringUtils = jasmine.createSpyObj('StringUtilsService', ['getParameterObject']);


        await TestBed
            .configureTestingModule({
                declarations: [
                    LanguageSelectComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: TranslationService, useFactory: () => translationService },
                    { provide: GenericRepoService, useFactory: () => genericRepo },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                    { provide: StringUtilsService, useFactory: () => stringUtils },
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(LanguageSelectComponent);
        component = fixture.debugElement.componentInstance;
    });

    beforeEach(() => {
        spyOn(component as any, 'setCmsData').and.callThrough();;
        (cmsUtilService.generateFileSrc as jasmine.Spy).and.returnValue('fakeFileSrc');
        stringUtils.getParameterObject.and.callFake(parameters => ({
            foregroundTextColor: 'mock-getParameterObject-foregroundTextColor-' + parameters
        }));
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        [
            { supportedLanguages: ['Lang1', 'Lang2', 'Lang3'], showDropDownIsAvailable: true, expected: true },
            { supportedLanguages: ['Lang1', 'Lang2', 'Lang3'], showDropDownIsAvailable: false, expected: false },
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
                    supportedLanguages: [],
                    isAvailable: true
                });

                //Act
                await component.ngOnInit();

                //Assert
                expect(component.selectedLanguage).toEqual(translationService.languagePreference);
            });

        it('registers for and handles an error event', () => {

            component.ngOnInit();
            component.selectedLanguage = 'Lang1';
            translationService.languagePreference = 'DefaultLang';

            realTime.next({ status: 'stopping', hasErrored: true });
            expect(component.selectedLanguage).toBe(translationService.languagePreference);
        });

    });

    describe('changeLanguage', () => {

        it('should call translationService.stopRealtimeTranslations and translationService.startRealtimeTranslations',
            async () => {
                component.selectedLanguage = 'fakeLanguage';

                //Act
                await component.changeLanguage();

                //Assert
                expect(translationService.stopRealtimeTranslations).toHaveBeenCalledTimes(1);
                expect(translationService.startRealtimeTranslations).toHaveBeenCalledOnceWith('fakeLanguage');
            });

        ['Lang111', 'Lang222', 'hello', 'hi'].forEach(language => {

            it(`should set translationService.languagePreference to ${language}`,
                async () => {
                    //Assembnle
                    component.selectedLanguage = language;

                    //Act
                    await component.changeLanguage();

                    //Assert
                    expect(translationService.languagePreference).toEqual(language);
                });
        });
    });

    describe('setCmsData', () => {

        it('should call api.getCmsPageById() 1 times with correct itemID',
            async () => {

                //Act
                await component['setCmsData']();

                expect(genericRepo.dataFactory.getCmsPageById).toHaveBeenCalledTimes(1);
                const args1 = (genericRepo.dataFactory.getCmsPageById as jasmine.Spy).calls.argsFor(0);
                const args2 = (genericRepo.dataFactory.getCmsPageById as jasmine.Spy).calls.argsFor(1);

                expect(args1[0]).toEqual({
                    ItemId: cmsIds.LanguageDropDown
                });
            });
        it('should call cmsUtilService.generateFileSrc() 1 times with correct parameter',
            async () => {

                //Act
                await component['setCmsData']();

                //Assert
                expect(cmsUtilService.generateFileSrc).toHaveBeenCalledTimes(1);
                expect(cmsUtilService.generateFileSrc).toHaveBeenCalledWith(component.cmsData.Image);
            });

        it('should call changeDetectorRef.markForCheck',
            async () => {

                const changeDetectorRef = fixture.debugElement.injector.get(ChangeDetectorRef);

                // So, I am spying directly on the prototype.
                const markForCheckSpy = spyOn(changeDetectorRef.constructor.prototype, 'markForCheck');

                //Act
                await component['setCmsData']();

                expect(markForCheckSpy).toHaveBeenCalledTimes(1);
            });
    });
});
