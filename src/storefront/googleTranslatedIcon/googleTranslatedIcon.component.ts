import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { TranslationService } from 'translation/services/translationService/translation.service';
import { Subscription } from 'rxjs';
import { SiteCoreItem } from 'cms/cms.module';
import { CmsUtilService } from 'cms/services';
import { cmsIds } from '../constants';
import { GenericRepoService } from '../../common/services';

@Component({
    selector: 'google-translated-incon',
    templateUrl: './googleTranslatedIcon.html',
    styleUrls: ['./googleTranslatedIcon.less']
})
export class GoogleTranslatedIconComponent implements OnInit, OnDestroy {
    
    public imgSrc: any;

    constructor(
        public translationService: TranslationService,
        private cmsUtilService: CmsUtilService,
        private genericRepoService: GenericRepoService
    ) { }

    private translationEvent: Subscription;
    private translationReady: Subscription;
    
    public showIcon: boolean;

    ngOnInit() {

        this.translationEvent = this.translationService.realTimeTranslationsEvent.subscribe((translationEvent) => {
            this.showIcon = translationEvent.status === 'starting';
        });

        this.translationReady = this.translationService.isReadyEvent.subscribe(settings => {
            if (settings.isAvailable) {
                this.setCmsData();
            } 
        });
    }

    ngOnDestroy() {
        if (this.translationEvent) {
            this.translationEvent.unsubscribe();
        }
        if (this.translationReady) {
            this.translationReady.unsubscribe();
        }
    }

    public async setCmsData() {
        const response = await this.genericRepoService.dataFactory.getCmsPageById({
            ItemId: cmsIds.Translation
        });

        const cmsData = JSON.parse(response.cmsResponse) || {} as SiteCoreItem;
        this.imgSrc = this.cmsUtilService.generateFileSrc(cmsData.Image) || '';
    }
}
