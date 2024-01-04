

import { TestBed } from '@angular/core/testing';
import { IPageEvent } from 'account/create/models/campaign-models';
import { WebStorageService } from 'common/services';

import { } from 'jasmine';
import { TranslationService } from 'translation/services';
import { AdformService } from './adform/adform.service';
import { CampaignBannerService } from './banner/banner.service';
import { CampaignService } from './campaign-service';
import { MetaPixelService } from './meta/meta-pixel.service';
import { StackAdaptPixelService } from './stack-adapt/stack-adapt-pixel';

describe('Campaign Service', () => {

    let service: CampaignService;
    let adformServiceSpy: jasmine.SpyObj<AdformService>;
    let metaPixelServiceSpy: jasmine.SpyObj<MetaPixelService>;
    let stackAdaptPixelServiceSpy: jasmine.SpyObj<StackAdaptPixelService>;
    let campaignBannerServiceSpy: jasmine.SpyObj<CampaignBannerService>;
    let translationServiceSpy: jasmine.SpyObj<TranslationService>;
    let webStorageServiceSpy: jasmine.SpyObj<WebStorageService>;

    beforeEach(() => {

        adformServiceSpy = jasmine.createSpyObj('adFormService', ['adformTrackPoint']);
        metaPixelServiceSpy = jasmine.createSpyObj('metaPixelService', ['trackPageView']);
        stackAdaptPixelServiceSpy = jasmine.createSpyObj('stackAdaptService', ['trackSubmit']);
        campaignBannerServiceSpy = jasmine.createSpyObj('bannerService', ['getBanner']);
        translationServiceSpy = jasmine.createSpyObj('translationService', ['stopRealtimeTranslations', 'startRealtimeTranslations']);
        webStorageServiceSpy = jasmine.createSpyObj('webStorage', ['getValue', 'setKeyValue', 'removeEntry']);


        TestBed.configureTestingModule({
            providers: [
                CampaignService,
                { provide: AdformService, useFactory: () => adformServiceSpy },
                { provide: MetaPixelService, useFactory: () => metaPixelServiceSpy },
                { provide: StackAdaptPixelService, useFactory: () => stackAdaptPixelServiceSpy },
                { provide: CampaignBannerService, useFactory: () => campaignBannerServiceSpy },
                { provide: TranslationService, useFactory: () => translationServiceSpy },
                { provide: WebStorageService, useFactory: () => webStorageServiceSpy }

            ]
        });

        service = TestBed.inject(CampaignService);

    });

    it('checks if service is instantiated', () => {
        expect(service).toBeDefined();
    });

    it('should not enable campaign if the toggle is OFF', () => {

        const toggles = {
            SocialMediaCampaign: {
                isSocialMediaCampaign: false,
                campaignSources: ['af', 'stackadapt', 'fb', 'waze', 'youtube', 'hulu', 'univision'],
                campaignName: 'ezTag'

            }
        };

        const params = {
            utm_source: 'test',
            utm_campaign: 'test'
        };

        const res = service.checkCampaignEnable(toggles, params);
        expect(res).toBeFalse();
        expect(webStorageServiceSpy.getValue).toHaveBeenCalled();
        expect(webStorageServiceSpy.setKeyValue).toHaveBeenCalled();

    });

    it('should not enable campaign if the toggle is OFF even if query params are valid', () => {

        const toggles = {
            SocialMediaCampaign: {
                isSocialMediaCampaign: false,
                campaignSources: ['af', 'stackadapt', 'fb', 'waze', 'youtube', 'hulu', 'univision'],
                campaignName: 'ezTag'

            }
        };

        const params = {
            utm_source: 'stackadapt',
            utm_campaign: 'ezTag'
        };

        const res = service.checkCampaignEnable(toggles, params);
        expect(res).toBeFalse();
        expect(webStorageServiceSpy.getValue).toHaveBeenCalled();
        expect(webStorageServiceSpy.setKeyValue).toHaveBeenCalled();

    });

    it('should not enable campaign if the toggle is ON and query params utm_source is invalid', () => {

        const toggles = {
            SocialMediaCampaign: {
                isSocialMediaCampaign: true,
                campaignSources: ['af', 'stackadapt', 'fb', 'waze', 'youtube', 'hulu', 'univision'],
                campaignName: 'ezTag'

            }
        };

        const params = {
            utm_source: 'testtt',
            utm_campaign: 'ezTag'
        };

        const res = service.checkCampaignEnable(toggles, params);
        expect(res).toBeFalse();
        expect(webStorageServiceSpy.getValue).toHaveBeenCalled();
        expect(webStorageServiceSpy.setKeyValue).toHaveBeenCalled();

    });

    it('should not enable campaign if the toggle is ON and query param utm_campaign is invalid', () => {

        const toggles = {
            SocialMediaCampaign: {
                isSocialMediaCampaign: true,
                campaignSources: ['af', 'stackadapt', 'fb', 'waze', 'youtube', 'hulu', 'univision'],
                campaignName: 'ezTag'

            }
        };

        const params = {
            utm_source: 'fb',
            utm_campaign: 'ezTagttt'
        };

        const res = service.checkCampaignEnable(toggles, params);
        expect(res).toBeFalse();
        expect(webStorageServiceSpy.getValue).toHaveBeenCalled();
        expect(webStorageServiceSpy.setKeyValue).toHaveBeenCalled();

    });

    it('should enable campaign if the toggle is ON query params are valid', () => {

        const toggles = {
            SocialMediaCampaign: {
                isSocialMediaCampaign: true,
                campaignSources: ['af', 'stackadapt', 'fb', 'waze', 'youtube', 'hulu', 'univision'],
                campaignName: 'ezTag'

            }
        };

        const params = {
            utm_source: 'fb',
            utm_campaign: 'ezTag'
        };

        const res = service.checkCampaignEnable(toggles, params);
        expect(res).toBeTrue();
        expect(webStorageServiceSpy.getValue).toHaveBeenCalled();
        expect(webStorageServiceSpy.setKeyValue).toHaveBeenCalled();

    });

    it('retrieves campaigng Enable value from webstorage', () => {

        const toggles = {
            SocialMediaCampaign: {
                isSocialMediaCampaign: true,
                campaignSources: ['af', 'stackadapt', 'fb', 'waze', 'youtube', 'hulu', 'univision'],
                campaignName: 'ezTag'

            }
        };

        const params = {
            utm_source: 'fb',
            utm_campaign: 'ezTag'
        };

        webStorageServiceSpy.getValue.and.returnValue(true);
        const res = service.checkCampaignEnable(toggles, params);
        expect(res).toBeTrue();
        expect(webStorageServiceSpy.getValue).toHaveBeenCalled();

    });

    it('executes the campaign event MetaPixel on components page load onInit', async () => {
        spyOn<any>(service, 'loadCampaignJS');
        await service.campaign({
            pageEvent: IPageEvent.OnInit,
            pageName: 'login',
            compeleteReg: false
        });

        expect(metaPixelServiceSpy.trackPageView).toHaveBeenCalled();

    });

    it('executes the campaign event AdForm on components page load onInit', async () => {
        spyOn<any>(service, 'loadCampaignJS');

        await service.campaign({
            pageEvent: IPageEvent.OnInit,
            pageName: 'login',
            compeleteReg: false
        });

        expect(adformServiceSpy.adformTrackPoint).toHaveBeenCalled();
    });

    it('executes the campaign event StackAdapt on components page submit', async () => {
        spyOn<any>(service, 'loadCampaignJS');

        await service.campaign({
            pageEvent: IPageEvent.Submit,
            pageName: 'receipt',
            compeleteReg: true
        });

        expect(stackAdaptPixelServiceSpy.trackSubmit).toHaveBeenCalled();
        expect(adformServiceSpy.adformTrackPoint).not.toHaveBeenCalled();
        expect(metaPixelServiceSpy.trackPageView).not.toHaveBeenCalled();


    });

    it('clears the objects in memory', () => {

    });

    it('gets English banner info based on when campaign source is waze', async () => {

        const toggles = {
            SocialMediaCampaign: {
                isSocialMediaCampaign: false,
                campaignSources: ['af', 'stackadapt', 'fb', 'waze', 'youtube', 'hulu', 'univision'],
                campaignName: 'ezTag'

            }
        };

        const params = {
            utm_source: 'waze',
            utm_campaign: 'ezTag',
            utm_content: 'eng1'
        };

        await service.getBanner(params);
        expect(campaignBannerServiceSpy.getBanner).toHaveBeenCalled();
        expect(campaignBannerServiceSpy.getBanner).toHaveBeenCalledWith('eng');


    });

    it('gets spanish banner info when campaign source is NOT waze', async () => {

        const toggles = {
            SocialMediaCampaign: {
                isSocialMediaCampaign: false,
                campaignSources: ['af', 'stackadapt', 'fb', 'waze', 'youtube', 'hulu', 'univision'],
                campaignName: 'ezTag'

            }
        };

        const params = {
            utm_source: 'af',
            utm_campaign: 'ezTag',
            utm_content: 'esp123',
            utm_term: 'esp123'
        };

        await service.getBanner(params);
        expect(campaignBannerServiceSpy.getBanner).toHaveBeenCalled();
        expect(campaignBannerServiceSpy.getBanner).toHaveBeenCalledWith('esp');


    });

});
