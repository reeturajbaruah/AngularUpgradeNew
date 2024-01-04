

import { TestBed } from '@angular/core/testing';
import { UrlService } from '@uirouter/angular';
import { ISetupAccountReq } from 'account/create/models/setup-account.model';
import { AuthChannelService } from 'authentication/authChannelService/authChannel.service';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { DynamicCMSPageService } from 'cms/services/dynamicCMSPageService/dynamicCMSPage.service';
import { ICreateAccountContactInfo, ICreateAccountLoginInfo } from 'common/models';
import { ENVIRON_CONFIG } from 'common/module';
import { AccountService, ResponseErrorService, UrlManagerService } from 'common/services';
import { } from 'jasmine';
import { ConfigRouterService } from './confing-router.service';

describe('ConfigRouterService', () => {

    let configRouterService: ConfigRouterService;
    let authenticationServiceSpy: jasmine.SpyObj<AuthenticationService>;
    let urlService: jasmine.SpyObj<UrlService>;
    let dynamicCMSPageService: jasmine.SpyObj<DynamicCMSPageService>;
    let urlManagerService: jasmine.SpyObj<UrlManagerService>;
    let environmentConfig: { [key: string]: string };


    beforeEach(() => {

        authenticationServiceSpy = jasmine.createSpyObj('authService', ['login']);
        urlService = jasmine.createSpyObj(['url', 'path']);
        dynamicCMSPageService = jasmine.createSpyObj('DynamicCMSPageService', ['getCMSId']);
        urlManagerService = jasmine.createSpyObj('urlManagerService', null, ['newRoutes']);
        environmentConfig = { googleAnalyticsID: 'test' };



        TestBed.configureTestingModule({
            providers: [
                ConfigRouterService,
                { provide: AuthenticationService, useFactory: () => authenticationServiceSpy },
                { provide: UrlService, useFactory: () => urlService },
                { provide: DynamicCMSPageService, useFactory: () => dynamicCMSPageService },
                { provide: UrlManagerService, useFactory: () => urlManagerService },
                { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },

            ]
        });

        configRouterService = TestBed.inject(ConfigRouterService);



    });
    
    it('ConfigRouterService', () => {
        expect(configRouterService).toBeTruthy();
    });

});

