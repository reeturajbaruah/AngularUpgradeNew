import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { SiteCoreItem } from 'cms/cms.module';
import { WindowRef } from 'common/providers';
import { ToasterService } from 'common/services';
import { WizardStateResolverFactory } from 'common/ui';
import { Subscription } from 'rxjs';
import { Language, TranslationService } from 'translation/services';
import { simpleFadeAnimation } from 'common/ui/animations/animations';
import { StorefrontService } from '../services/storefront.service';

@Component({
    selector: 'storefront-start-page-component',
    templateUrl: './startPage.component.html',
    styleUrls: ['./startPage.component.less'],
    animations: [simpleFadeAnimation]
})
export class StartPageComponent implements OnInit, OnDestroy {

    private intervalCancel = 0;
    private translationServiceReady: Subscription;
    public show = true;
    public legacyStartPage = false;

    @Input() public cmsContent: any;
    @Input() public cmsTranslationContent: SiteCoreItem;

    public translationAvailable: boolean;
    public languages: Language[] = [];

    constructor(
        private wizardStateResolver: WizardStateResolverFactory,
        @Inject(WindowRef) private windowRef: Window,
        private toasterService: ToasterService,
        private translation: TranslationService,
        private storefrontService: StorefrontService
    ) {
    }

    ngOnInit() {
        this.translationServiceReady = this.translation.isReadyEvent.subscribe((settings) => {
            this.translation.stopRealtimeTranslations();
            this.translationAvailable = settings.isAvailable
                && settings.supportedLanguages
                && settings.supportedLanguages.length > 1;
            this.languages = settings.supportedLanguages;
        });

        this.intervalCancel = this.windowRef.setInterval(() => {
            this.toasterService.removeAll();
        }, 250);
    }

    clear() {
        if (this.intervalCancel !== 0) {
            this.windowRef.clearInterval(this.intervalCancel);
        }
        if (this.translationServiceReady) {
            this.translationServiceReady.unsubscribe();
        }
    }

    ngOnDestroy() {
        this.clear();
    }

    async start(language: Language = null) {
        this.clear();
        if (language) {
            this.translation.languagePreference = language.label;
            if (language.nativeLabel) {
                this.translation.startRealtimeTranslations(language.label);
            }
        }

        this.show = false;
        await this.storefrontService.delay(500);

        return this.wizardStateResolver.getService().nextState();
    };

}
