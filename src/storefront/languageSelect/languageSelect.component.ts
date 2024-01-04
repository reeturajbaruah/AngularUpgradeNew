import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService, Language } from 'translation/services/translationService/translation.service';
import { Subscription } from 'rxjs';
import { wait } from 'common/utilities/promisify';

@Component({
    selector: 'kiosk-language-select',
    templateUrl: './languageSelect.html',
    styleUrls: ['./languageSelect.less']
})
export class LanguageSelectComponent implements OnInit, OnDestroy {
    public showDropDown: boolean;

    public availableLanguages: Language[];
    public isOpen: boolean;

    constructor(public translationService: TranslationService) { }

    public selectedLanguage: Language;

    private translationServiceReady: Subscription;
    private translationEvent: Subscription;

    ngOnInit() {
        this.translationServiceReady = this.translationService.isReadyEvent.subscribe(settings => {
            this.availableLanguages = settings.supportedLanguages;
            this.selectedLanguage = settings.supportedLanguages.find(x=> x.label === this.translationService.languagePreference);
            this.showDropDown = settings.isAvailable && this.availableLanguages.length > 1;
        });

        this.translationEvent = this.translationService.realTimeTranslationsEvent.subscribe(translationEvent => {
            if (translationEvent.status === 'stopping' && translationEvent.hasErrored) {
                this.selectedLanguage = this.availableLanguages.find(x => x.label === this.translationService.languagePreference);
            }
        });
    }

    ngOnDestroy() {
        if (this.translationServiceReady) {
            this.translationServiceReady.unsubscribe();
        }
        if (this.translationEvent) {
            this.translationEvent.unsubscribe();
        }
    }

    changeLanguage() {
        return wait(0).then(() => {
            this.translationService.stopRealtimeTranslations();
            this.translationService.languagePreference = this.selectedLanguage.label;
            if (this.selectedLanguage.nativeLabel) {
                this.translationService.startRealtimeTranslations(this.selectedLanguage.label);
            }
        });
    }
}
