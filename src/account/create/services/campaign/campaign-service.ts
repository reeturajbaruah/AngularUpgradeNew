import { Inject, Injectable } from '@angular/core';
import { AdformService } from './adform/adform.service';
import { MetaPixelService } from './meta/meta-pixel.service';
import { StackAdaptPixelService } from './stack-adapt/stack-adapt-pixel';
import { ICampaignEvent, CampaignEventName, IPageCampaignEvent, IPageEvent, CampaignSource, BannerLanguages, langDictionary } from '../../models/campaign-models';
import { campaignEnableLocalStorage } from 'account/create/constants';
import { stackAdapt } from '../../../../SocialMediaScripts/StackAdapt';
import { clarity } from '../../../../socialMediaScripts/ClarityScript';
import { metaScript } from '../../../../socialMediaScripts/MetaScript';
import { CampaignBannerService } from './banner/banner.service';
import { TranslationService } from 'translation/services';
import { wait } from 'common/utilities';
import { WebStorageService } from '../../../../common/services';

@Injectable()
export class CampaignService {

    jsLoaded = false;

    constructor(private adFormService: AdformService,
        private metaPixelService: MetaPixelService,
        private stackAdaptService: StackAdaptPixelService,
        private webStorage: WebStorageService,
        private bannerService: CampaignBannerService,
        private translationService: TranslationService
    ) {
    }

    clear() {
        this.webStorage.removeEntry(campaignEnableLocalStorage);
        this.jsLoaded = false;
    }

    private loadCampaignJS() {

        if (!this.jsLoaded) {
            stackAdapt();
            clarity();
            metaScript();
            this.jsLoaded = true;
        }
    }

    async campaign(event: IPageCampaignEvent) {

        this.loadCampaignJS();

        switch (event.pageEvent) {

            case IPageEvent.OnInit:

                await this.exec({ name: CampaignEventName.MetaPixel, data: event.compeleteReg });
                await this.exec({ name: CampaignEventName.AdForm, data: event.pageName });

                break;

            case IPageEvent.Submit:

                await this.exec({ name: CampaignEventName.StackAdapt, data: event.pageName });
                break;

            default:
                break;

        }
    }

    private async exec(event: ICampaignEvent) {

        switch (event.name) {

            case CampaignEventName.MetaPixel:
                await this.metaPixelService.trackPageView(event.data);
                break;

            case CampaignEventName.AdForm:
                await this.adFormService.adformTrackPoint(event.data);
                break;

            case CampaignEventName.StackAdapt:
                await this.stackAdaptService.trackSubmit(event.data);
                break;

        }
    }

    checkCampaignEnable(toggles, queryParams) {

        let isCampaignEnable = this.webStorage.getValue(campaignEnableLocalStorage);
        if (isCampaignEnable === null || isCampaignEnable === undefined) {

            const paramsCheck = this.parseCampaignParams(toggles, queryParams);
            isCampaignEnable = paramsCheck && toggles.SocialMediaCampaign.isSocialMediaCampaign;

            this.webStorage.setKeyValue(campaignEnableLocalStorage, isCampaignEnable);
        }
        return isCampaignEnable;
    }

    private parseCampaignParams(toggles, queryParams) {

        let check = false;
        if (queryParams && queryParams.utm_source && queryParams.utm_campaign) {

            const campaignToggles = toggles.SocialMediaCampaign;
            const sources = campaignToggles.campaignSources.map(source => source.toUpperCase());

            check = sources.includes(queryParams.utm_source.toUpperCase());
            if (check) {
                check = queryParams.utm_campaign.toUpperCase() === campaignToggles.campaignName.toUpperCase();
            }

        }
        return check;
    }

    getBanner(params) {

        const lang = this.parseBannerLanguage(params);
        return this.bannerService.getBanner(lang);
    }

    private parseBannerLanguage(params) {

        const lang = 'eng';

        if (params && params.utm_source) {

            switch (params.utm_source) {

                case CampaignSource.waze:
                    if (params.utm_content) {
                        return this.checkLanguage(params.utm_content);
                    }
                    break;

                case CampaignSource.fb:
                case CampaignSource.stackadapt:
                case CampaignSource.af:
                case CampaignSource.youtube:
                case CampaignSource.hulu:
                case CampaignSource.univision:
                    if (params.utm_term) {
                        return this.checkLanguage(params.utm_term);
                    }
                    break;

                default:
                    if (params.utm_term) {
                        return this.checkLanguage(params.utm_term);
                    }
                    break;

            }

        }
        return lang;
    }

    private checkLanguage(lang: string) {
        let defaultLang = 'eng';

        BannerLanguages.forEach(bannerLang => {
            if (lang.toLowerCase().trim().includes(bannerLang)) {
                defaultLang = bannerLang;
                return;
            }

        });

        this.changeLanguage(defaultLang);
        return defaultLang;
    }

    private changeLanguage(lang) {
        const selectedLanguage = langDictionary.get(lang);

        if (selectedLanguage !== '') {
            return wait(0).then(() => {
                this.translationService.stopRealtimeTranslations();
                this.translationService.languagePreference = selectedLanguage;
                this.translationService.startRealtimeTranslations(selectedLanguage);
            });
        }
    }
}
