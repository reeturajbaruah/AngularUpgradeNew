import { Component, OnInit, OnDestroy, Inject, Input, AfterViewInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { TranslationService, Language } from 'translation/services/translationService/translation.service';
import { Subscription } from 'rxjs';
import { SiteCoreItem, SiteCoreMediaItem } from 'cms/cms.module';
import { CmsUtilService } from 'cms/services';
import { cmsIds } from '../constants';
import { commonCmsIds } from 'cms/constants';
import { wait } from 'common/utilities/promisify';
import { StringUtilsService } from 'common/services/stringUtils/stringUtils.service';
import { GenericRepoService } from '../../common/services';

@Component({
    selector: 'language-select',
    templateUrl: './languageSelect.html',
    styleUrls: ['./languageSelect.less']
})
export class LanguageSelectComponent implements OnInit, OnDestroy {
    public showDropDown: boolean;
    public selectedLanguage: string;
    public availableLanguages: Language[];
    public cmsData: any;
    public isOpen: boolean;

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private translationService: TranslationService,
        private cmsUtilService: CmsUtilService,
        private genericRepoService: GenericRepoService,
        private stringUtils: StringUtilsService
    ) { }

    private translationServiceReady: Subscription;
    private translationEvent: Subscription;

    ngOnInit() {
        //todo: this should just be removed and template updated in next step cleanup
        this.translationServiceReady = this.translationService.isReadyEvent.subscribe(settings => {
            if (settings.isAvailable && !this.cmsData) {
                this.setCmsData();
            }

            this.availableLanguages = settings.supportedLanguages;
            this.showDropDown = settings.isAvailable && this.availableLanguages.length > 1;
            this.selectedLanguage = this.translationService.languagePreference;
        });

        this.translationEvent = this.translationService.realTimeTranslationsEvent.subscribe(translationEvent => {
            if (translationEvent.status === 'starting') {
                this.selectedLanguage = this.translationService.languagePreference;
            }

            if (translationEvent.status === 'stopping' && translationEvent.hasErrored) {
                this.selectedLanguage = this.translationService.languagePreference;
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

    public changeLanguage() {
        return wait(0).then(() => {
            this.translationService.stopRealtimeTranslations();
            this.translationService.languagePreference = this.selectedLanguage;
            this.translationService.startRealtimeTranslations(this.selectedLanguage);
        });
    }

    private async setCmsData() {
        const response = await this.genericRepoService.dataFactory.getCmsPageById({
            ItemId: cmsIds.LanguageDropDown
        });

        this.cmsData = JSON.parse(response.cmsResponse) || {} as SiteCoreItem;
        this.cmsData.ImageSrc = this.cmsUtilService.generateFileSrc(this.cmsData.Image) || '';

        //TODO: CLEAN UP FOR PHASE 2 MULTILINGUAL FEATURE
        //There's nothing wrong with this.
        //However, we could write something that will allow us to use all this boilerplate code
        //from geting cms content for a common component like this.
        //Let's just remember this so when we update translation in a phase 2 we can tackle making a cleaning way of doing this.
        const parsedParams = this.stringUtils.getParameterObject(this.cmsData.Parameters);
        this.cmsData.imageHREFLink = parsedParams.imageHREFLink;

        //this components is used by components using the onpush change detection strategy
        //the following call makes sure the change detection is executed.
        //converting cmsData to Observable would be another way of fixing this
        //however I didn't want to update the legacy html
        this.changeDetectorRef.markForCheck();
    }
}
