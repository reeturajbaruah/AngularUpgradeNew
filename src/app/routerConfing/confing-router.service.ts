import { Inject, Injectable, NgModuleRef, NgZone } from '@angular/core';
import { DynamicCMSPageService } from 'cms/services';
import { NewsStateNames as newsStateNames } from 'news/news.constants';
import { stateNames as homeStatesNames } from 'home/constants';
import { stateNames as accountDashboardStateNames } from 'accountDashboard/constants';
import { UrlService } from '@uirouter/core';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { AppModule } from 'app/app.module';
import { SPTStateNames } from 'simple-page-template/constant';
import { UrlManagerService } from 'common/services/urlManager/urlManager.service';
import { ENVIRON_CONFIG } from 'common/module';
import { SectionalPTStateNames } from 'sectional-page-template/constant';

@Injectable()
export class ConfigRouterService {
    constructor(public urlService: UrlService, public authService: AuthenticationService, public platformRef: NgModuleRef<AppModule>,
        public dynamicCMSPageService: DynamicCMSPageService, private urlManagerService: UrlManagerService,
        @Inject(ENVIRON_CONFIG) private environmentConfig,
    ) { }

    setRouteState(useNewsRefresh = false) {

        this.urlService.rules.otherwise((matchValue, urlParts, router) => {
            //using path from otherise params
            const { path } = urlParts;
            const isSimplePage = this.environmentConfig.refreshCMSSimplePage;
            const newRoutes = this.urlManagerService.newRoutes;
            const cmsPathDictionary = newRoutes.articleLookupByPath;
            const key = this.urlManagerService.lookupKeys[path.toLowerCase()];

            //removed the for loop
            if (key && this.urlManagerService.metadataDictionary[key]) {
                const metaData = this.urlManagerService.metadataDictionary[key];
                const { friendlyURL, templateName, includeInSearch, permanentURL } = cmsPathDictionary[metaData.itemPath];
                const siteCoreObj = cmsPathDictionary[metaData.itemPath];
                if (isSimplePage && path !== '/News') {
                    switch (templateName) {
                        case 'Page':
                            const noPermanatentUrl = !permanentURL && includeInSearch;
                            if (noPermanatentUrl) {
                                router.stateService.go(SPTStateNames.SimplePageTemplate.toString(), { CmsId: siteCoreObj.itemID }, { location: false });
                            }

                            const hasUniquesFriendlyUrl = permanentURL && permanentURL !== friendlyURL;
                            if (hasUniquesFriendlyUrl) {
                                if (permanentURL === '/NonSectional') {
                                    router.stateService.go(SPTStateNames.SimplePageTemplate.toString(), { CmsId: siteCoreObj.itemID }, { location: false });
                                }
                                if (permanentURL === '/Sectional') {
                                    router.stateService.go(SectionalPTStateNames.SectionalPageTemplate.toString(), { CmsId: siteCoreObj.itemID }, { location: false });
                                }
                            }

                            break;
                        case 'SimplePage':
                        case 'MajorProject':
                            if (isSimplePage) {
                                router.stateService.go(SPTStateNames.SimplePageTemplate.toString(), { CmsId: siteCoreObj.itemID }, { location: false });
                            }
                            break;
                    }
                }
                if (useNewsRefresh && templateName === 'News') {
                    const newsCMSId = this.dynamicCMSPageService.getCMSId(path, 'News');

                    if (newsCMSId !== '') {
                        router.stateService.go(newsStateNames.NewsArticle, { CmsId: newsCMSId }, { location: false });
                    } else {
                        router.stateService.go(homeStatesNames.Frame);
                    }
                }
            }
        });

        this.urlService.config.caseInsensitive(true);
        this.urlService.config.strictMode(false);
        this.urlService.deferIntercept();
        this.urlService.rules.initial(() => {
            if (this.authService.isAuthenticated()) {
                return { state: accountDashboardStateNames.Frame };
            } else {
                return { state: homeStatesNames.Frame };
            }
        });

        //In an Angular Zone to avoid "digest already in process" errors
        this.platformRef.injector.get<NgZone>(NgZone).run(() => {
            this.urlService.listen();
            this.urlService.sync();
        });


    }
}
