import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { CommonModule, DatePipe } from '@angular/common';
import { downgrade } from 'hybrid/module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'pipes/module';

import { MissedATollService, WebApiService } from 'missedatoll/services';
import { ValidationModule } from 'validation/module';
import { CommonModule as HctraCommonModule } from 'common/module';
import { MatCarouselModule } from 'common/ui/carousel/carousel.module';

//components
import { FrameComponent } from './frame/frame.component';
import { CallToActionMobileComponent } from './callToActionMobile/callToActionMobile.component';
import { CallToActionDesktopComponent } from './callToActionDesktop/callToActionDesktop.component';
import { AdsComponent } from './ads/ads.component';
import { HomeCarouselDesktopComponent } from './homePageCarouselDesktop/homePageCarouselDesktop.component';
import { HomeCarouselMobileComponent } from './homePageCarouselMobile/homePageCarouselMobile.component';
import { HomeHelpAndSupportComponent } from './helpAndSupport/homeHelpAndSupport.component';
import { HomeNewsComponent } from './news/homeNews.component';
import { SocialMediaComponent } from './socialMedia/socialMedia.component';
import { DynamicDisplayComponent } from './dynamicDisplay/dynamicDisplay.component';
import { SocialMediaAltComponent } from './socialMediaAlt/socialMediaAlt.component';
import { TweetCarouselComponent } from './socialMediaAlt/tweetCarousel/tweetCarousel.component';

import { WebApiTwitterService } from './services/webApiTwitter.service';
import { TweetRetrievalService } from './services/tweetRetrieval/tweetRetrieval.service';


import { routes } from './routing';
import {
    stateNames, urlPaths, StateNames
} from './constants';
import { WhatsNewComponent } from './whatsNew/whatsNew.component';
import { PictureModule } from 'common/ui/picture/picture.module';
import { ViolationsCommonModule } from 'violationsCommon/violationsCommon.module';
export * from './constants';

downgrade('homeStates', { constant: stateNames });
downgrade('homeRoutes', { constant: urlPaths });

@NgModule({
    declarations: [
        FrameComponent, CallToActionMobileComponent, CallToActionDesktopComponent, HomeCarouselDesktopComponent,
        AdsComponent, HomeCarouselMobileComponent, HomeHelpAndSupportComponent, HomeNewsComponent, SocialMediaComponent, DynamicDisplayComponent,
        WhatsNewComponent, SocialMediaAltComponent, TweetCarouselComponent,
    ],
    imports: [
        UIRouterModule.forChild({ states: routes }),
        CommonModule, HctraCommonModule,
        FlexLayoutModule, MatMenuModule, MatButtonModule, MatIconModule,
        MatDividerModule, MatSelectModule, MatFormFieldModule, FormsModule,
        ValidationModule, PipesModule, PictureModule,
        MatCarouselModule.forRoot(),
        ViolationsCommonModule
    ],
    providers: [
        { provide: StateNames, useValue: stateNames },
        WebApiTwitterService, TweetRetrievalService,
        MissedATollService, WebApiService, DatePipe
    ]
})

export class HomeModule { }
