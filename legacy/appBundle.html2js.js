(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/account/newAccount/stepFlexbooker/createAccountFlexbooker.html',
    '﻿<section>\n' +
    '    <flexbooker-component (booking-complete)="$ctrl.onBookingComplete($event)" (skip-booking)="$ctrl.onSkipBooking($event)"></flexbooker-component>\n' +
    '</section>\n' +
    '\n' +
    '<div ng-if="$ctrl.skipBooking && !$ctrl.bookingComplete" class="mobile-bottom-buffer border-with-footer-bottom">\n' +
    '    <border-bottom-buttons on-continue-save="$ctrl.onSkip()">\n' +
    '        Skip Scheduling\n' +
    '    </border-bottom-buttons>\n' +
    '</div>\n' +
    '<div ng-if="$ctrl.bookingComplete" class="mobile-bottom-buffer border-with-footer-bottom">\n' +
    '    <border-bottom-buttons on-continue-save="$ctrl.onContinue()">\n' +
    '        Continue\n' +
    '    </border-bottom-buttons>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/cms/templates/aboutUs/constructionAndEngineering/contracts.html',
    '﻿<div id="about-us-contracts">\n' +
    '    <div id="june-redesign" class="row">\n' +
    '        <div class="col-sm-12">\n' +
    '            <h1 class="bottom-buffer-sm title-color no-margin-top-do">{{contractsPageTitle}}</h1>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-show="exists(contractsPageDescription)" class="bottom-buffer-lg" ng-bind-html="contractsPageDescription | trusted"></div>\n' +
    '\n' +
    '    <div ng-repeat="section in contractsSectionArray" class="mobile-bottom-buffer">\n' +
    '        <header class="header-spacing">\n' +
    '            <h2 id="{{section.ItemName}}" ng-class="{\'no-margin-top\': $first && !exists(contractsPageDescription)}">\n' +
    '                {{section.Title}}\n' +
    '            </h2>\n' +
    '            <hr />\n' +
    '        </header>\n' +
    '\n' +
    '        <div ng-class="{\'bottom-buffer-lg\': section.LongDescription}" ng-bind-html="section.LongDescription | trusted"></div>\n' +
    '\n' +
    '        <div class="bottom-buffer-sm" ng-if="exists(section.Children)">\n' +
    '            <div ng-repeat="bidType in section.Children">\n' +
    '\n' +
    '                <div class="row">\n' +
    '                    <div class="col-xs-12">\n' +
    '                        <table class="table info-table-border">\n' +
    '                            <thead>\n' +
    '                                <tr class="info-table-head">\n' +
    '                                    <th class="col-xs-1">Contract</th>\n' +
    '                                    <th class="col-xs-2">Job #</th>\n' +
    '                                    <th class="col-xs-5">Description</th>\n' +
    '                                    <th class="col-xs-3">Estimate (M)</th>\n' +
    '                                    <th class="col-xs-1">Bid Tab</th>\n' +
    '                                </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                                <tr class="info-table-body" ng-repeat="bid in bidType.Children">\n' +
    '                                    <td>{{bid.ContractNumber}}</td>\n' +
    '                                    <td>{{bid.JobNumber}}</td>\n' +
    '                                    <td>{{bid.ShortDescription}}</td>\n' +
    '                                    <td><currency [value]="bid.Estimate"></currency></td>\n' +
    '                                    <td>\n' +
    '                                        <a class="pdfIcon padding-left-md-half" target="_blank" href="{{bid.BidDocument}}">View</a>\n' +
    '                                    </td>\n' +
    '                                </tr>\n' +
    '                            </tbody>\n' +
    '                        </table>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div ng-bind-html="section.ShortDescription | trusted"></div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/cms/templates/aboutUs/constructionAndEngineering/majorProjects.html',
    '﻿<div id="about-us-major-projects">\n' +
    '    <div id="june-redesign" class="row">\n' +
    '        <div class="col-sm-12">\n' +
    '            <h1 class="bottom-buffer-sm title-color no-margin-top-do">{{majorProjectsPageTitle}}</h1>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-show="exists(majorProjectsPageDescription)" class="bottom-buffer-lg" ng-bind-html="majorProjectsPageDescription | trusted"></div>\n' +
    '\n' +
    '    <div ng-repeat="section in majorProjectsSectionArray" class="mobile-bottom-buffer">\n' +
    '        <header class="header-spacing">\n' +
    '            <h2 id="{{section.ItemName}}" ng-class="{\'no-margin-top\': $first && !exists(majorProjectsPageDescription)}">\n' +
    '                {{section.Title}}\n' +
    '            </h2>\n' +
    '            <hr />\n' +
    '        </header>\n' +
    '\n' +
    '        <div ng-class="{\'bottom-buffer-lg\': section.LongDescription}" ng-bind-html="section.LongDescription | trusted"></div>\n' +
    '\n' +
    '        <div class="bottom-buffer-sm" ng-if="exists(section.Children)">\n' +
    '            <div ng-repeat="majorProjectsFolder in section.Children">\n' +
    '                <div ng-if="majorProjectsFolder.ItemName === \'Projects\'">\n' +
    '\n' +
    '                    <div class="row">\n' +
    '                        <div class="col-xs-12">\n' +
    '                    <table class="table info-table-border">\n' +
    '                        <thead>\n' +
    '                            <tr class="info-table-head">\n' +
    '                                <th class="col-xs-5">Project</th>\n' +
    '                                <th class="col-xs-5">Roadway(s) Impacted</th>\n' +
    '                                <th class="col-xs-2">Status</th>\n' +
    '                            </tr>\n' +
    '                        </thead>\n' +
    '                        <tbody>\n' +
    '                            <tr class="info-table-body" ng-repeat="majorProject in majorProjectsFolder.Children">\n' +
    '                                <td>\n' +
    '                                    <a ng-click="toFullArticle(majorProject.ItemID)">{{majorProject.Title}}</a>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                    <span ng-bind-html="majorProject.RoadsImpacted | trusted"></span>\n' +
    '                                </td>\n' +
    '                                <td>{{unCamelCaser(majorProject.Status)}}</td>\n' +
    '                            </tr>\n' +
    '                        </tbody>\n' +
    '                    </table>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div ng-bind-html="section.ShortDescription | trusted"></div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/cms/templates/aboutUs/constructionAndEngineering/proServiceReg.html',
    '﻿<div id="about-us-pro-service-reg">\n' +
    '    <div id="june-redesign" class="row">\n' +
    '        <div class="col-sm-12">\n' +
    '            <h1 class="bottom-buffer-sm title-color no-margin-top-do">{{proServiceRegPageTitle}}</h1>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-show="proServiceRegPageDescription" class="bottom-buffer-lg" ng-bind-html="proServiceRegPageDescription | trusted"></div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/cms/templates/aboutUs/constructionAndEngineeringFrame.html',
    '﻿<div id="toll-road-information">\n' +
    '    <ul class="top-tabs hidden-print">\n' +
    '        <li ng-class="{unselectedtab: currentState !== majorProjectsState}" ng-click="goToMajorProjects()">Major Projects</li>\n' +
    '        <li ng-class="{unselectedtab: currentState !== contractsState}" ng-click="goToContracts()">Contracts</li>\n' +
    '        <li ng-class="{unselectedtab: currentState !== proServiceRegState}" ng-click="goToProServiceReg()">Professional Service Registry</li> \n' +
    '    </ul>\n' +
    '    <div class="border-without-footer">\n' +
    '        <div ui-view></div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/cms/templates/aboutUs/employment/employmentPage.html',
    '﻿<div id="june-redesign" class="row">\n' +
    '    <div class="col-sm-12">\n' +
    '        <h1 class="bottom-buffer-sm title-color">{{employmentPageTitle}}</h1>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="border-without-footer">\n' +
    '\n' +
    '    <div ng-show="exists(employmentPageDescription)" class="bottom-buffer-lg" ng-bind-html="employmentPageDescription | trusted"></div>\n' +
    '\n' +
    '    <div ng-repeat="section in employmentSectionsArray" ng-class="{\'bottom-buffer-md-half\': !$last}">\n' +
    '        <header class="header-spacing">\n' +
    '            <h2 id="{{section.ItemName}}" ng-class="{\'no-margin-top\': $first && !exists(employmentPageDescription)}">\n' +
    '                {{section.Title}}\n' +
    '            </h2>\n' +
    '            <hr />\n' +
    '        </header>\n' +
    '\n' +
    '        <div ng-class="{\'bottom-buffer-sm\': !$last}" ng-bind-html="section.LongDescription | trusted"></div>\n' +
    '\n' +
    '        <div ng-if="exists(section.Children)">\n' +
    '            <div ng-repeat="openingType in section.Children">\n' +
    '                <ul>\n' +
    '                    <li class="bottom-buffer-xs" ng-repeat="opening in openingType.Children">\n' +
    '                        <a ng-click="toFullArticle(opening.ItemID)">{{opening.Title}}</a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/cms/templates/aboutUs/employment/genericJobPage.html',
    '﻿<div id="june-redesign" class="row">\n' +
    '    <div class="col-sm-12">\n' +
    '        <h1 class="bottom-buffer-sm title-color">Job Opening: {{jobTitle}}</h1>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="border-without-footer">\n' +
    '\n' +
    '    <div ng-show="exists(jobShortDescription)" class="bottom-buffer-lg" ng-bind-html="jobShortDescription | trusted"></div>\n' +
    '\n' +
    '    <div ng-repeat="item in jobObject" ng-class="{\'bottom-buffer-md-half\': !$last}">\n' +
    '        <header class="header-spacing">\n' +
    '            <h2 id="{{item.Title.toLowerCase()}}" ng-class="{\'no-margin-top\': $first && !exists(jobShortDescription)}">\n' +
    '                {{item.Title}}\n' +
    '            </h2>\n' +
    '            <hr />\n' +
    '        </header>\n' +
    '\n' +
    '        <p ng-class="{\'no-margin-bottom\': $last}" ng-bind-html="item.Value | trusted"></p>\n' +
    '    </div>\n' +
    '\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/cms/templates/archivePartial.html',
    '﻿<form role="form" name="searchForm" validation-focus novalidate>\n' +
    '    <div class="middle-border">\n' +
    '        <article-search-parameter user-clicked-search="triggerSearchAndClearInChildState()" categories="categories" category-holder="categoryHolder"></article-search-parameter>\n' +
    '    </div>\n' +
    '    <div class="bottom-buffer-lg border-with-header-bottom">\n' +
    '        <paging-infinite-scroll search="triggerPureSearchInChildState()" infinite-scroll-is-disabled="endOfDataReached || virtualScrollisPaused || isDesktop" title-type="titleType" form="searchForm" navigation-urls="navigationUrls"\n' +
    '                                total-items="totalItems" article-array="articleArray" paging-object="pagingObject" title-id="\'search-results\'" archive-type-checker="archiveTypeChecker" article-not-found-text="articleNotFoundText"\n' +
    '                                mobile-search="performSearch()"></paging-infinite-scroll>\n' +
    '    </div>\n' +
    '</form>\n' +
    '<div ui-view></div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/cms/templates/article.html',
    '﻿<div id="june-redesign" class="articleAndRssIconMobileAdjustment rssTitleContainer">\n' +
    '    <h1 class="title-color rssLabel no-margin-top-mo top-buffer-md-do">{{topTitle}}</h1>\n' +
    '    <rss on-rss-click="goToRssFeed()" class="articleRssIconDesktop articleRssIconMobile"></rss>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '<div class="mobile-bottom-buffer border-without-footer" style="margin-top: 8px;">\n' +
    '    <div ng-if="article.Title !== \'Transtar Map\'" class="bottom-buffer-lg" ng-repeat="article in articleArray">\n' +
    '        <header class="header-spacing">\n' +
    '            <div class="row">\n' +
    '                <div class="col-xs-12">\n' +
    '                    <h2 class="no-margin-bottom no-margin-top-do" id="{{article.ItemID.toLowerCase()}}">{{article.Title}}</h2>\n' +
    '                </div>\n' +
    '                <div class="col-xs-12 bottom-buffer-xs">\n' +
    '                    <h4 ng-if="article.Subtitle" class="no-margin-bottom top-buffer-xs">\n' +
    '                        {{article.Subtitle}}\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="col-xs-12 top-buffer-xs">\n' +
    '                    <div ng-if="!isClosures">\n' +
    '                        <h6 class="no-margin-top no-margin-bottom">Published on: {{article.NewsDisplayDate | date: \'longDate\'}}</h6>\n' +
    '                    </div>\n' +
    '                    <div ng-if="isClosures">\n' +
    '                        <h6 class="top-buffer-xs-half no-margin-bottom">\n' +
    '                            {{article.displayDate}}\n' +
    '                        </h6>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <hr />\n' +
    '        </header>\n' +
    '        <div>\n' +
    '            <read-more-or-less [title-name]="article.Title" [long-content]="article.LongDescription" [short-content]="article.ShortDescription" [item-path]="article.ItemPath" [item-id]="article.ItemID" [default-to-more]="false"></read-more-or-less>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div ng-if="addExtraMargin" class="top-buffer-lg-mo"></div>\n' +
    '    <a ng-if="archiveName != \'Closures\'" ng-click="toArchive()">View {{archiveName}} Archive</a>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/cms/templates/genericHeaderBodyTemplate.html',
    '﻿<div class="mobile-bottom-buffer">\n' +
    '    <header id="june-redesign" class="header-spacing">\n' +
    '        <h1 class="no-margin-top-do">{{headerTitle}}</h1>\n' +
    '        <hr />\n' +
    '    </header>\n' +
    '\n' +
    '    <div ng-bind-html="headerContent | trusted"></div>\n' +
    '\n' +
    '    <div ng-repeat="item in bodyDataList">\n' +
    '        <header class="header-spacing">\n' +
    '            <h2>{{item.Title}}</h2>\n' +
    '            <hr />\n' +
    '        </header>\n' +
    '\n' +
    '        <div class="cms-picture-auto-scale">\n' +
    '            <div ng-bind-html="item.LongDescription | trusted"></div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/cms/templates/genericNonSectionalCmsTemplate.html',
    '﻿<div id="june-redesign" class="row">\n' +
    '    <div class="col-sm-12">\n' +
    '        <h1 class="title-color">{{title}}</h1>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="border-without-footer">\n' +
    '    <div class="cms-picture-auto-scale">\n' +
    '        <div id="nonsectional-cms-text" ng-bind-html="content | trusted"></div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/cms/templates/genericSectionalCmsTemplate.html',
    '﻿<div id="june-redesign" class="row">\n' +
    '    <div class="col-sm-12">\n' +
    '        <h1 class="title-color bottom-buffer-md-mo">{{parentTitle}}</h1>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div ng-class="{\'border-without-footer\': !isHelpPage, \'border-with-footer-top\': isHelpPage}">\n' +
    '\n' +
    '    <div ng-class="{\'bottom-buffer-lg\': (parentShortDescription && isHelpPage) || parentLongDescription}">\n' +
    '        <div ng-if="isHelpPage" ng-bind-html="parentShortDescription | trusted"></div>\n' +
    '        <div ng-bind-html="parentLongDescription | trusted"></div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-repeat="section in cmsChildSectionArray">\n' +
    '        <div ng-class="{\'bottom-buffer-lg\': !$last}">\n' +
    '            <header class="header-spacing">\n' +
    '                <h2 id="{{section.ItemName}}" class="h1-mo" ng-class="{\'no-margin-top-do\': $first && ((!parentShortDescription && isHelpPage) || !isHelpPage) && !parentLongDescription}">{{section.Title}}</h2>\n' +
    '                <hr />\n' +
    '            </header>\n' +
    '\n' +
    '            <div class="cms-picture-auto-scale">\n' +
    '                <div ng-if="isHelpPage" ng-bind-html="section.ShortDescription | trusted"></div>\n' +
    '                <img ng-if="section.Image" ng-src="{{section.Image}}" ng-class="{\'top-buffer-sm-half\': section.ShortDescription && isHelpPage, \'bottom-buffer-sm-half\': section.LongDescription}" />\n' +
    '                <div ng-bind-html="section.LongDescription | trusted"></div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '<div storefront-hide-if-enabled="true" ng-if="isHelpPage" class="border-with-footer-bottom mobile-bottom-buffer top-buffer-md-mo">\n' +
    '    <border-bottom-buttons on-continue-save="closeNeedHelp()">\n' +
    '        Close\n' +
    '    </border-bottom-buttons>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/cms/templates/helpAndSupport/faq.html',
    '﻿<header id="june-redesign" class="header-spacing">\n' +
    '	<h1 class="title-color">{{topTitle}}</h1>\n' +
    '</header>\n' +
    '<div class="border-with-header-top">\n' +
    '	<h2>Top {{topSearchResultsCount}} Frequently Asked Questions</h2>\n' +
    '	<hr class="hr-base desktopOnly" />\n' +
    '	<div class="bottom-buffer-xl">\n' +
    '		<div ng-repeat="commonFaq in commonFaqArray">\n' +
    '			<div class="row bottom-buffer-md">\n' +
    '				<div class="col-xs-12">\n' +
    '					<h4 class="no-margin-bottom" id="{{commonFaq.ItemID}}"><a ng-init="showTopFaq = false" ng-click="showTopFaq = !showTopFaq">{{commonFaq.Title}}</a></h4>\n' +
    '				</div>\n' +
    '				<div ng-if="showTopFaq">\n' +
    '					<h6 class="col-xs-12 no-margin-bottom">Last Modified {{commonFaq.__Updated | date: \'longDate\'}}</h6>\n' +
    '					<div class="col-xs-12">\n' +
    '						<hr class="desktopOnly hr-base" />\n' +
    '					</div>\n' +
    '					<div class="col-xs-12 cms-picture-auto-scale">\n' +
    '						<read-more-or-less [title-name]="commonFaq.Title" [long-content]="commonFaq.LongDescription" [short-content]="commonFaq.ShortDescription" [default-to-more]="false" [item-path]="commonFaq.ItemPath"></read-more-or-less>\n' +
    '					</div>					\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '\n' +
    '	<h2 class="no-margin-bottom-do no-margin-top-do">Search FAQ</h2>\n' +
    '</div>\n' +
    '<ng-include src="\'/app/cms/templates/archivePartial.html\'"></ng-include>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/cms/templates/searchArchive.html',
    '﻿<header id="june-redesign" class="header-spacing">\n' +
    '    <h1 class="title-color">{{topTitle}}</h1>\n' +
    '</header>\n' +
    '<div class="border-with-header-top">\n' +
    '    <h2 class="no-margin-bottom-do no-margin-top-do">Search {{titleType}}</h2>\n' +
    '</div>\n' +
    '<ng-include src="\'/app/cms/templates/archivePartial.html\'"></ng-include>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/cms/templates/singleArticle.html',
    '﻿<div class="row">\n' +
    '    <div class="col-sm-12">\n' +
    '        <h1 class="no-margin-bottom title-color">{{cmsData.Title}}</h1>\n' +
    '        <h2 ng-if="redirectText === \'Closures Archive\' && cmsData.Subtitle" class="no-margin-bottom no-margin no-margin-top">{{cmsData.Subtitle}}</h2>\n' +
    '        <h6 style="margin-top:5px;">{{date}}</h6>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="border-with-footer-top">\n' +
    '    <div class="row bottom-buffer-lg-mo">\n' +
    '        <div class="cms-picture-auto-scale">\n' +
    '            <div class="col-sm-12" ng-bind-html="cmsData.description  | trusted"></div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div  ng-if="redirectText != \'View Closures Archive\'" class="border-with-footer-bottom">\n' +
    '    <div class="row mobile-bottom-buffer">\n' +
    '        <div class="col-xs-12">\n' +
    '            <a class="pull-left" href="" ng-click="returnToListOfArticles()">{{redirectText}}</a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/cms/templates/travelTools/mapsCms.html',
    '﻿<div id="toll-road-map">\n' +
    '    <div id="june-redesign" class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <header class="header-spacing">\n' +
    '                <h1 class="title-color">{{map.Title}}</h1>\n' +
    '            </header>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="border-without-footer">\n' +
    '\n' +
    '        <div class="bottom-buffer-lg">\n' +
    '            <header class="header-spacing">\n' +
    '                <h2 class="no-margin-top-do">{{topContent.Title}}</h2>\n' +
    '                <hr />\n' +
    '            </header>\n' +
    '\n' +
    '            <div ng-bind-html="topContent.LongDescription | trusted"></div>\n' +
    '        </div>\n' +
    '        <div ng-bind-html="map.LongDescription | trusted">\n' +
    '\n' +
    '        </div>\n' +
    '        <div>\n' +
    '            <header class="header-spacing">\n' +
    '                <h2>{{bottomContent.Title}}</h2>\n' +
    '                <hr />\n' +
    '            </header>\n' +
    '\n' +
    '            <div ng-bind-html="bottomContent.LongDescription  | trusted"></div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/cms/templates/travelTools/roadsideAssistanceCms.html',
    '﻿<header id="june-redesign" class="header-spacing">\n' +
    '    <h1 class="title-color">{{topTitle}}</h1>\n' +
    '</header>\n' +
    '<div class="border-without-footer">\n' +
    '\n' +
    '    <div class="bottom-buffer-lg">\n' +
    '        <header class="header-spacing">\n' +
    '            <h2 id="{{header.ItemName}}" class="no-margin-top-do">{{header.Title}}</h2>\n' +
    '            <hr />\n' +
    '        </header>\n' +
    '\n' +
    '        <img class="full-width bottom-buffer-sm" ng-src="{{overviewImageSrc}}" alt="{{overviewImageAltText}}" />\n' +
    '        <read-more-or-less [long-content]="header.LongDescription" [short-content]="header.ShortDescription" [default-to-more]="false" [title-name]="header.Title"></read-more-or-less>\n' +
    '    </div>\n' +
    '\n' +
    '    <div id="ContactRoadsideAssistance" class="bottom-buffer-lg">\n' +
    '        <header class="header-spacing">\n' +
    '            <h2 id="{{contact.ItemName}}">{{contact.Title}}</h2>\n' +
    '            <hr />\n' +
    '        </header>\n' +
    '\n' +
    '        <read-more-or-less [long-content]="contact.LongDescription" [short-content]="contact.ShortDescription" [default-to-more]="false" [title-name]="contact.Title"></read-more-or-less>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="bottom-buffer-lg">\n' +
    '        <header class="header-spacing">\n' +
    '            <h2 id="{{about.ItemName}}">{{about.Title}}</h2>\n' +
    '            <hr />\n' +
    '        </header>\n' +
    '\n' +
    '        <read-more-or-less [long-content]="about.LongDescription" [short-content]="about.ShortDescription" [default-to-more]="false" [title-name]="about.Title"></read-more-or-less>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="mobile-bottom-buffer">\n' +
    '        <header class="header-spacing">\n' +
    '            <h2 id="{{testimonialsHeader.ItemName}}">{{testimonialsHeader.Title}}</h2>\n' +
    '            <hr />\n' +
    '        </header>\n' +
    '\n' +
    '        <div ng-repeat="testimonial in testimonialsList">\n' +
    '\n' +
    '            <div ng-bind-html="testimonial.ShortDescription | trusted"></div>\n' +
    '            <p class="top-buffer-sm">{{testimonial.FullName}}{{(testimonial.FullName && testimonial.Location) ? \', \' : \'\'}}{{testimonial.Location}}</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/cms/templates/travelTools/tollRoadInformation/rates.html',
    '﻿<div id="travel-tools-rates" class="desktopOnly">\n' +
    '\n' +
    '    <header id="june-redesign" class="header-spacing">\n' +
    '        <h1 class="title-color">{{pageTitle}}</h1>\n' +
    '    </header>\n' +
    '\n' +
    '    <div class="border-without-footer">\n' +
    '\n' +
    '        <div class="row bottom-buffer-lg">\n' +
    '            <div class="col-xs-12">\n' +
    '                <header class="header-spacing">\n' +
    '                    <h2 class="no-margin-top">Select Location</h2>\n' +
    '                    <hr />\n' +
    '                </header>\n' +
    '                <toll-rates-select toll-roads="tollRoads" selected-toll-road="selectedTollRoad" selected-direction="selectedDirection" selected-class="selectedClass"></toll-rates-select>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row" ng-class="{\'no-margin-bottom\': selectedTollRoad.HideSelect, \'bottom-buffer-lg\':  !selectedTollRoad.HideSelect && selectedTollRoad.LongDescription}">\n' +
    '            <div class="col-xs-12">\n' +
    '                <div ng-bind-html="selectedTollRoad.LongDescription | trusted"></div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row" ng-hide="selectedTollRoad.HideSelect">\n' +
    '            <div class="col-xs-12">\n' +
    '                <header class="header-spacing">\n' +
    '                    <h2 class="no-margin-top">{{selectedTollRoad.Title}} - Traveling {{selectedDirection.Direction}}</h2>\n' +
    '                    <hr/>\n' +
    '                </header>\n' +
    '                <div class="row">\n' +
    '                    <div class="col-xs-12">\n' +
    '                        <table class="table info-table-border no-margin-bottom">\n' +
    '                            <thead>\n' +
    '                                <tr class="info-table-head">\n' +
    '                                    <th class="col-lg-3 col-md-3 col-xs-3">Location</th>\n' +
    '                                    <th class="col-lg-1 col-md-1 col-sm-1 col-xs-1">Type</th>\n' +
    '                                    <th ng-repeat="rate in selectedDirection.TollSections[0].Rates" class="col-lg-2 col-md-1 col-sm-1 col-xs-1" ng-show="axleClassSelected(rate.Label)">{{rate.Label}}</th>\n' +
    '                                </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                                <tr class="info-table-body" ng-repeat="section in selectedDirection.TollSections">\n' +
    '                                    <td translation-skip ng-class="{\'bold-lane\': section.Bold}">{{section.TollingLocations}}</td>\n' +
    '                                    <td class="secondary-location-text">{{section.LocationType | capitalize}}</td>\n' +
    '                                    <th ng-repeat="rate in section.Rates" ng-show="axleClassSelected(rate.Label)">{{rate.Value}}</th>\n' +
    '                                </tr>\n' +
    '                            </tbody>\n' +
    '                        </table>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '<desktop-view-message></desktop-view-message>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/cms/templates/travelTools/tollRoadInformationFrame.html',
    '﻿<div id="toll-road-information">\n' +
    '    <ul class="top-tabs hidden-print">\n' +
    '        <li ng-class="{unselectedtab: currentState !== tollRoadInformationState}" ng-click="goToTollRoadInformation()">Toll Road Information</li>\n' +
    '        <li ng-class="{unselectedtab: currentState !== laneTypesState}" ng-click="goToLaneTypes()">Lane Types</li>\n' +
    '    </ul>\n' +
    '    <div class="border-without-footer">\n' +
    '        <div ui-view></div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/account/authorizedContactsTemplate.html',
    '﻿<div class="desktopOnly">\n' +
    '    <div class="bottom-buffer-lg">\n' +
    '        <header class="header-spacing">\n' +
    '            <a ng-if="displayEdit" href="" class="pull-right" ng-click="onEdit()" aria-label="Edit Authorized Contacts" aria-disabled="{{(!displayEdit)}}">Edit</a>\n' +
    '            <ng-transclude></ng-transclude>\n' +
    '        </header>\n' +
    '\n' +
    '        <div class="group-paragraphs">\n' +
    '            <p class="h4 customer-account-data" ng-repeat=" name in contacts" >{{name | capitalize}}</p>\n' +
    '            <p class="h4 light-gray-color" ng-if="(!contacts || contacts.length === 0) && isAccountInformation">You can add an authorized contact to manage your account without providing them with your login information.</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/account/makeOneTimePayment/oneTimeEnterAmount.html',
    '﻿<div class="form-group" ng-class="validation.getErrorStatusClass(\'paymentAmount\')">\n' +
    '    <label for="paymentAmount" class="sr-only">Payment Amount</label>\n' +
    '    <input class="form-control" type="text" ng-change="onAmountChange()" name="paymentAmount" ng-model="paymentAmount" ng-required="!zeroIsAccepted" ng-pattern="/(?=.)^\\$?(([1-9][0-9]{0,2}([0-9]{3})*)|[0-9]+)?(\\.[0-9]{1,2})?$/" ng-blur="onBlur()" select-on-click/>\n' +
    '    <div ng-messages="validation.getErrorList(\'paymentAmount\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '        <p ng-message="required" class="help-block nobr-do">Please enter a valid payment amount</p>\n' +
    '        <p ng-message="pattern" class="help-block nobr-do">Please enter a valid payment amount</p>\n' +
    '        <p ng-message="NaN" class="help-block nobr-do">Please enter a valid payment amount</p>\n' +
    '        <p ng-message="tooLow" class="help-block nobr-do">Please enter an amount equal to or greater than <currency [value]="minimumAcceptedAmount"></currency></p>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/account/tabControlsTemplate.html',
    '﻿<ul class="desktopOnly top-tabs" ng-repeat="tab in tabTitles track by $index">\n' +
    '    <!--<li ng-class="{tabgray: currentPage !== 1}">Transactions</li>\n' +
    '    <li ng-class="{tabgray: currentPage !== 2}">Statements</li>\n' +
    '    <li ng-class="{tabgray: currentPage !== 3}">Yearly Summary</li>\n' +
    '    <li ng-class="{tabgray: currentPage !== 4}">Receipts</li>-->\n' +
    '\n' +
    '    <li ng-class="backgroundColor($index)">{{tab}}</li>\n' +
    '</ul>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/accountDetailsHeaderTemplate.html',
    '﻿<div id="june-redesign" class="account-details-header desktopOnly row">\n' +
    '    <div class="account-details-col1">\n' +
    '        <p>\n' +
    '            <span class="font-md bold" translation-skip> {{$ctrl.currentUser.firstName}} {{$ctrl.currentUser.lastName}}</span><br />\n' +
    '            <span class="font-md bold" translation-skip ng-show="$ctrl.currentUser.isCorporateAccount">{{$ctrl.currentUser.companyName | uppercase}}</span>\n' +
    '            <span class="font-md" translation-skip ng-show="!$ctrl.currentUser.isCorporateAccount">{{$ctrl.currentUser.driverLicState}} <span class="sr-only">Driver\'s License</span><span class="dontread font-md">DL:</span> <span class="font-md bold" translation-skip>{{$ctrl.currentUser.driverLic | driversLicense}}</span></span>\n' +
    '        </p>\n' +
    '    </div>\n' +
    '    <div ng-if="!$ctrl.togglePaymentPlan" class="verticalLine"></div>\n' +
    '    <div ng-if="$ctrl.togglePaymentPlan" class="verticalLinePaymentPlans"></div>\n' +
    '\n' +
    '    <div class="account-details-col2">\n' +
    '        <account-header current-balance="$ctrl.currentUser.currentBalanceObj.currentBalance" acct-id="$ctrl.currentUser.acctId" suspended="$ctrl.suspended"></account-header>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '    <!-- TODO: CONSIDER TO REFACTOR THIS WHOLE COMPONENT INTO userDetailsHeaderComponent.html and ts-->\n' +
    '    <!--<div class="verticalLineReset"></div>\n' +
    '    <div class="user-details-right-col-container">\n' +
    '        <span>EZ TAG Account: <span class="bold">{{$ctrl.currentUser.acctId}}</span></span>\n' +
    '        <span>Balance: <span class="font-md-do bold red-text"><currency [value]="$ctrl.currentUser.currentBalanceObj.currentBalance"></currency></span> as of {{$ctrl.balanceUpdate | dateWithTimeZone:\'accountHeader\'}}</span>\n' +
    '        <span ng-if="$ctrl.currentUser.hasPaymentPlans">Payment Plan(s) Balance: <span class="font-md-do bold red-text"><currency [value]="$ctrl.currentUser.paymentPlanBalance"></currency></span></span>\n' +
    '        <span ng-if="" class="dark-red-text">\n' +
    '            An error occurred while retrieving your current balance\n' +
    '        </span>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '</div>-->');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/accountHeaderTemplate.html',
    '﻿<span class="font-md-do h4-mo no-margin-top bottom-buffer-xs">EZ TAG Account: <span translation-skip class="font-md-do h4-mo bold">{{$ctrl.acctId}}</span></span>\n' +
    '<p class="h5-mo font-md-do no-margin-top bottom-buffer-xs">\n' +
    '    Balance: <span class="h5-mo font-md-do bold red-text"><currency [value]="$ctrl.currentUser.currentBalanceObj.currentBalance"></currency></span> as of\n' +
    '    <span>{{$ctrl.balanceUpdate | dateWithTimeZone:\'accountHeader\'}}</span>\n' +
    '</p>\n' +
    '<span ng-if="$ctrl.togglePaymentPlan"\n' +
    '      class="font-md-do h5-mo no-margin-top">Payment Plan(s) Balance: <span class="font-md-do bold red-text"><currency [value]="$ctrl.currentUser.paymentPlanBalance"></currency></span></span>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/accountIdentificationTemplate.html',
    '﻿<p class="h4 bottom-buffer-sm nobr-do">Please provide the following information to locate your account and verify your identity.</p>\n' +
    '\n' +
    '<div class="row">\n' +
    '    <div class="col-xs-12 col-sm-5">\n' +
    '        <div class="bottom-buffer-sm">\n' +
    '            <select name="accountInfo" ng-model="idInfoObject.accountInfo" class="form-control" ng-class="isItalic(\'accountInfo\')" id="accountInfo" tabindex="2" ng-change="changeFirstInfo()">\n' +
    '                <option value="waterm" ng-if="idInfoObject.accountInfo === \'waterm\'" selected>Select Account Identification Option</option>\n' +
    '                <option style="font-style: normal;" value="account">Account Number</option>\n' +
    '                <option style="font-style: normal;" value="tag">EZ TAG Number</option>\n' +
    '            </select>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div ng-if="idInfoObject.accountInfo === \'account\'" ng-class="validations.getErrorStatusClass(\'accountNumber\')" class="row">\n' +
    '    <div class="col-xs-12 bottom-buffer-md-half">\n' +
    '        <div class="row">\n' +
    '            <div class="col-xs-12 col-sm-5">\n' +
    '                <label for="accountNumber" class="sr-only">Please enter your account number</label>\n' +
    '                <input type="number" name="accountNumber" ng-model="idInfoObject.accountNumber" ng-maxlength="12" class="form-control" placeholder="Enter Account Number" id="accountNumber" ng-required="idInfoObject.accountInfo === \'account\'" tabindex="3" />\n' +
    '                <div ng-messages="validations.getErrorList(\'accountNumber\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '                    <p ng-message="required" class="help-block">Please enter a valid account number</p>\n' +
    '                    <p ng-message="maxlength" class="help-block">Please enter a valid account number</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div class="col-xs-12">\n' +
    '                <p class="h5 nobr-do top-buffer-xs">Your account number is located on your statement. <a ng-click="needHelp()">Need Help?</a></p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div ng-if="idInfoObject.accountInfo === \'tag\'" class="row">\n' +
    '    <div class="col-xs-12 bottom-buffer-md-half">\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-5 col-xs-12">\n' +
    '                <div class="row">\n' +
    '                    <div class="col-xs-4 no-padding-right">\n' +
    '                        <label for="eztagOrg" class="sr-only">Tag authority</label>\n' +
    '                        <select translation-skip name="eztagOrg" id="eztagOrg" class="form-control" tabindex="4"\n' +
    '                                ng-options="org.authorityCode as org.authorityCode for org in authorityList"\n' +
    '                                ng-model="idInfoObject.eztagOrg"></select>\n' +
    '                    </div>\n' +
    '                    <div class="col-xs-8" ng-class="validations.getErrorStatusClass(\'tagNumber\')">\n' +
    '                        <label for="tagNumber" class="sr-only">Enter your EZ TAG number.</label>\n' +
    '                        <input type="text" name="tagNumber" ng-model="idInfoObject.tagNumber" ng-maxlength="13" ng-change="removeDoubles(idInfoObject.tagNumber, \'tagNumber\')" class="form-control" placeholder="000000000" id="tagNumber" ng-required="idInfoObject.accountInfo === \'tag\'" tabindex="5" ng-pattern="/^[0-9]*$/" />\n' +
    '                        <div ng-messages="validations.getErrorList(\'tagNumber\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '                            <p ng-message="required" class="help-block">Please enter a valid EZ TAG number</p>\n' +
    '                            <p ng-message="pattern" class="help-block">Please enter a valid EZ TAG number</p>\n' +
    '                            <p ng-message="maxlength" class="help-block">Please enter a valid EZ TAG number</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div class="col-xs-12">\n' +
    '                <p class="h5 nobr-do top-buffer-xs">Your EZ TAG number is located on your EZ TAG. <a ng-click="needHelp()">Need Help?</a></p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div ng-if="idInfoObject.accountInfo && idInfoObject.accountInfo !==\'waterm\'" class="row">\n' +
    '    <div class="col-xs-12 col-sm-5 bottom-buffer-sm" ng-class="validations.getErrorStatusClass(\'personalInfo\')">\n' +
    '        <label for="personalInfo" class="sr-only">Select which personal info to enter</label>\n' +
    '        <select name="personalInfo" ng-model="idInfoObject.personalInfo" ng-class="isItalic(\'personalInfo\')" class="form-control" id="personalInfo" tabindex="6" ng-change="changeSecondInfo()">\n' +
    '            <option value="waterm" ng-if="idInfoObject.personalInfo === \'waterm\'" selected>Select Personal Identification Option</option>\n' +
    '            <option style="font-style: normal;" value="driversLicense">Driver License Number</option>\n' +
    '            <option style="font-style: normal;" value="taxId">Tax ID Number</option>\n' +
    '        </select>\n' +
    '        <div ng-messages="validations.getErrorList(\'personalInfo\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '            <p ng-message="required" class="help-block">Please select a valid personal identification option</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div ng-if="idInfoObject.personalInfo === \'driversLicense\'" class="row form-group">\n' +
    '    <div class="col-sm-5 col-xs-12">\n' +
    '        <div class="row">\n' +
    '            <div class="col-xs-4 no-padding-right">\n' +
    '                <label for="driverState" class="sr-only">Select your state</label>\n' +
    '                <select translation-skip name="driverState" id="driverState" class="form-control" tabindex="7"\n' +
    '                        ng-options="state.stateCode as state.stateCode for state in stateList"\n' +
    '                        ng-model="idInfoObject.driverState"></select>\n' +
    '            </div>\n' +
    '            <div class="col-xs-8" ng-class="validations.getErrorStatusClass(\'driversLicense\')">\n' +
    '                <label for="driversLicense" class="sr-only">Enter your driver\'s license number.</label>\n' +
    '                <input type="text" name="driversLicense" ng-model="idInfoObject.driversLicense" ng-maxlength="25" ng-change="removeDoubles(idInfoObject.driversLicense, \'driversLicense\')" class="form-control" placeholder="999999999" ng-required="idInfoObject.personalInfo === \'driversLicense\'" id="driversLicense" tabindex="8" validate-driver-license="idInfoObject.driverState" />\n' +
    '                <div ng-messages="validations.getErrorList(\'driversLicense\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '                    <div ng-messages-include="/app/templates/messages/driverLicenseErrors.html"></div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div ng-if="idInfoObject.personalInfo === \'taxId\'" class="row form-group">\n' +
    '    <div class="col-xs-12 col-sm-5" ng-class="validations.getErrorStatusClass(\'taxIdNumber\')">\n' +
    '        <label for="taxIdNumber" class="sr-only">Enter your tax ID number.</label>\n' +
    '        <input type="text" name="taxIdNumber" ng-model="idInfoObject.taxIdNumber" ng-minlength="9" ng-maxlength="11" ng-change="removeDoubles(idInfoObject.taxIdNumber, \'taxIdNumber\')" class="form-control" placeholder="00-0000000" id="taxIdNumber" ng-required="idInfoObject.personalInfo === \'taxId\'" tabindex="9" ng-pattern="/^[0-9\\-]*$/" />\n' +
    '        <div ng-messages="validations.getErrorList(\'taxIdNumber\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '            <p ng-message="required" class="help-block">Please enter a valid tax ID number</p>\n' +
    '            <p ng-message="pattern" class="help-block">Please enter a valid tax ID number</p>\n' +
    '            <p ng-message="minlength" class="help-block">Please enter a valid tax ID number</p>\n' +
    '            <p ng-message="maxlength" class="help-block">Please enter a valid tax ID number</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/accountInformationTemplate.html',
    '﻿<div class="bottom-buffer-lg">\n' +
    '    <header class="header-spacing">\n' +
    '        <ng-transclude></ng-transclude>\n' +
    '        <hr />\n' +
    '    </header>\n' +
    '    <div class="group-paragraphs">\n' +
    '        <div class="bottom-buffer-xs">\n' +
    '            <div class="row">\n' +
    '                <div class="col-xs-6 col-sm-5 col-md-4 no-padding-right account-info-label">\n' +
    '                    <p class="h4">Account Number:</p>\n' +
    '                </div>\n' +
    '                <div class="col-xs-6 col-sm-7 col-md-8 no-padding-left">\n' +
    '                    <p class="h4 font-avenir-medium">{{currentUser.acctId}}</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="bottom-buffer-xs">\n' +
    '            <div class="row">\n' +
    '                <div class="col-xs-6 col-sm-5 col-md-4 no-padding-right account-info-label">\n' +
    '                    <p class="h4">Payment Date:</p>\n' +
    '                </div>\n' +
    '                <div class="col-xs-6 col-sm-7 col-md-8 no-padding-left">\n' +
    '                    <p class="h4 font-avenir-medium">{{paymentDate | dateWithTimeZone: \'dateTimeFull\'}}</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div ng-hide="hideDeliveryMethod" class="bottom-buffer-xs">\n' +
    '            <div class="row">\n' +
    '                <div class="col-xs-6 col-sm-5 col-md-4 no-padding-right account-info-label">\n' +
    '                    <p class="h4">Delivery Method:</p>\n' +
    '                </div>\n' +
    '                <div class="col-xs-6 col-sm-7 col-md-8 no-padding-left">\n' +
    '                    <p class="h4 font-avenir-medium">{{deliveryMethod == \'mail\' ? \'By mail\' : \'EZ TAG store\'}}</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/accountSetupChargesPartial.html',
    '﻿<div id="account-setup-charges" class="bottom-buffer-lg">\n' +
    '    <header class="header-spacing">\n' +
    '        <h2 class="h1-mo" ng-show="!transcludeIncluded">Account Setup Charges</h2>\n' +
    '        <ng-transclude ng-show="transcludeIncluded" id="accountSetupHeaderTransclude"></ng-transclude>\n' +
    '        <hr />\n' +
    '        <div class="form-entry-width">\n' +
    '            <p class="pull-right h4 font-avenir-medium"><currency [value]="payment.depositAmt"></currency></p>\n' +
    '            <p class="h4">Pre-paid deposit balance for EZ TAG(s):</p>\n' +
    '        </div>\n' +
    '        <hr />\n' +
    '    </header>\n' +
    '\n' +
    '    <div class="group-paragraphs form-entry-width">\n' +
    '        <p class="pull-right h4"><span class="font-avenir-medium"><currency [value]="payment.totalAmt"></currency></span></p>\n' +
    '        <p class="h4"><span class="font-avenir-medium">Total Amount Due:</span></p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="group-paragraphs" ng-if="!isAddPlate">\n' +
    '        <div ng-bind-html="tagFeeNotice | trusted"\n' +
    '                compile-template>\n' +
    '\n' +
    '        </div>\n' +
    '        <!--<p class="h5">A tag fee of <span class="font-avenir-medium"><currency [value]="payment.tagSalesAmt"></currency></span> will be charged to your account when the order is shipped.</p>-->\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/addMultipleVehiclesTemplate.html',
    '<div ng-show="vehicleList.length > 0">\n' +
    '    <header class="header-spacing">\n' +
    '        <h2 class="h1-mo no-margin-top-do">{{title}}</h2>\n' +
    '        <hr />\n' +
    '    </header>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12 col-sm-8">\n' +
    '\n' +
    '            <ul class="vehicle-list">\n' +
    '                <li ng-repeat="vehicle in vehicleList">\n' +
    '                    <div class="group-paragraphs" ng-class="{\'bottom-buffer-lg-do\': $last}">\n' +
    '\n' +
    '                        <p class="h3-mo h3-half-do">\n' +
    '                            <span class="font-avenir-medium"><span translation-skip class="customer-account-data">{{vehicle.nickname ? vehicle.nickname + " - " : ""}}</span> License Plate: <span translation-skip class="customer-account-data">{{vehicle.licState}}-{{vehicle.licPlate}}</span></span>\n' +
    '                        </p>\n' +
    '\n' +
    '                        <p translation-skip class="h5"><span class="customer-account-data">{{vehicle.vehicleYear}} {{vehicle.vehicleMake | capitalize}} {{vehicle.vehicleModel | capitalize}} {{vehicle.vehicleColor | capitalize}} - <span class="nobr customer-account-data">{{classIdToLabel(vehicle.vehicleClassCode)}}</span></span></p>\n' +
    '                        <a class="h5" ng-click="onEdit($index)">Edit</a>\n' +
    '                        &nbsp;\n' +
    '                        <a class="h5"  ng-show="!hideDelete" ng-click="onDelete($index)">Remove</a>\n' +
    '                    </div>\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/appSpinnerTemplate.html',
    '﻿<!-- migrated-->');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/articleSearchParameterTemplate.html',
    '﻿<div class="row">\n' +
    '	<div class="form-group col-xs-8 col-sm-5 col-md-4 col-lg-3" s>\n' +
    '		<label for="category">Search by Category</label>\n' +
    '		<select name="category" ng-model="categoryHolder.category" ng-class="isItalic(\'category\')" class="form-control" id="category" ng-options="category.displayName for category in categories">\n' +
    '		</select>\n' +
    '	</div>\n' +
    '	<div class="col-xs-3 col-sm-2">\n' +
    '		<button type="submit" id="search" name="search" ng-click="userClickedSearch()" class="btn top-margin-do top-margin-mo">Search</button>\n' +
    '	</div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/billingEntry/bankAccountEntryTemplate.html',
    '﻿<div>\n' +
    '    <div class="form-group top-buffer-sm-half" ng-class="validation.getErrorStatusClass(\'bankAccountType\')">\n' +
    '        <label for="bankAccountType">Bank Account Type</label>\n' +
    '\n' +
    '        <select name="bankAccountType" id="bankAccountType" class="form-control form-entry-width" ng-change="clearReq(\'bankDetails\', \'accountType\', \'bankAccountType\')" ng-model="bankDetails.accountTypeDisplay" ng-required="validate">\n' +
    '            <option ng-show="bankDetails.accountTypeDisplay==\'\'" value="">Select Bank Account Type</option>\n' +
    '            <option value="Personal">Personal</option>\n' +
    '            <option value="Business">Business</option>\n' +
    '        </select>\n' +
    '\n' +
    '        <div ng-messages="validation.getErrorList(\'bankAccountType\')" ng-if="validation.hasSubmitted(paymentsform)" role="alert">\n' +
    '            <p ng-message="required" class="help-block">Please select the account type</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div ng-if="showNameField" class="form-group top-buffer-sm-half" ng-class="validation.getErrorStatusClass(\'eftName\')">\n' +
    '        <!--<label for="eftName">{{bankDetails.accountTypeDisplay == \'Business\' ? \'Company Name\' : \'Name\'}}</label>-->\n' +
    '        <label for="eftName">Name on Bank Account</label>\n' +
    '        <input type="text" id="eftName" class="form-control form-entry-width" ng-model="bankDetails.name" name="eftName" ng-pattern="nameOnBankAccountValidation" ng-required="validate" />\n' +
    '        <div ng-messages="validation.getErrorList(\'eftName\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '            <p ng-message="required" class="help-block">Please enter the bank account holder\'s name</p>\n' +
    '            <p ng-message="pattern" class="help-block">Please enter a valid name</p>\n' +
    '            <p ng-message="maxlength" class="help-block">Please enter a valid name</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group top-buffer-sm-half" ng-class="validation.getErrorStatusClass(\'routing\')">\n' +
    '        <label for="routing">Routing Number</label>\n' +
    '        <input type="text" id="routing" class="form-control form-entry-width" ng-model="bankDetails.routingNumber" ng-change="clearReq(\'bankDetails\', \'routingNumber\', \'routing\')" name="routing" ng-pattern="bankRoutingNumberValidation" ng-required="validate" />\n' +
    '        <p class="top-buffer-xs no-margin-bottom">\n' +
    '            <span class="h5"><a ng-click="clickedHelp()">Routing Number</a> - </span>\n' +
    '            <span class="h6">first group of numbers of your check</span>\n' +
    '        </p>\n' +
    '        <div ng-messages="validation.getErrorList(\'routing\')" ng-if="validation.hasSubmitted(paymentsform)" role="alert">\n' +
    '            <p ng-message="required" class="help-block">Please enter a valid routing number</p>\n' +
    '            <p ng-message="pattern" class="help-block">Please enter a valid routing number</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group top-buffer-sm-half" ng-class="validation.getErrorStatusClass(\'account\')">\n' +
    '        <label for="account">Account Number</label>\n' +
    '        <input type="text" id="account" class="form-control form-entry-width" ng-model="bankDetails.accountNumber" name="account" ng-change="clearReq(\'bankDetails\', \'accountNumber\', \'account\')" ng-pattern="bankAccountNumberValidation" ng-required="validate" />\n' +
    '        <p class="top-buffer-xs no-margin-bottom">\n' +
    '            <span class="h5"><a ng-click="clickedHelp()">Account Number</a> - </span>\n' +
    '            <span class="h6">second group of numbers of your check</span>\n' +
    '        </p>\n' +
    '        <div ng-messages="validation.getErrorList(\'account\')" ng-if="validation.hasSubmitted(paymentsform)" role="alert">\n' +
    '            <p ng-message="required" class="help-block">Please enter a valid account number</p>\n' +
    '            <p ng-message="maxlength" class="help-block">Please enter a valid account number</p>\n' +
    '            <p ng-message="pattern" class="help-block">Please enter a valid account number</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group top-buffer-sm-half" ng-class="validation.isValid(\'account\') ? validation.getErrorStatusClass(\'account2\') : \'\'">\n' +
    '        <!--<div class="form-group" ng-class="validation.getErrorStatusClass(\'account2\')">-->\n' +
    '        <label for="account2">Confirm Account Number</label>\n' +
    '        <input type="text" id="account2" class="form-control form-entry-width" ng-model="bankDetails.account2" ng-change="clearReq(\'bankDetails\', \'account2\', \'account2\')" compare-to="bankDetails.accountNumber" name="account2" ng-required="validate" />\n' +
    '        <div ng-messages="validation.getErrorList(\'account2\')" ng-if="validation.hasSubmitted(paymentsform) && validation.isValid(\'account\')" role="alert">\n' +
    '            <p ng-message="required" class="help-block">Please confirm the account number</p>\n' +
    '            <p ng-message="compareTo" class="help-block">Account numbers do not match</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!--EFT ACH DISCLAIMER-->\n' +
    '    <eft-ach-disclaimer></eft-ach-disclaimer>\n' +
    '\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/billingEntry/creditCardEntryTemplate.html',
    '﻿<div>\n' +
    '    <div class="form-group top-buffer-sm-half" ng-class="validation.getErrorStatusClass(addSuffix(\'cardName\'))">\n' +
    '        <label for="cardName{{nameSuffix}}">Name on Credit Card</label>\n' +
    '        <input type="text" id="cardName{{nameSuffix}}" ng-disabled="creditCardNameDisabled" class="form-control form-entry-width" ng-model="creditCard.nameOnCard" name="cardName{{nameSuffix}}" ng-required="!disableValidation" ng-maxlength="80" credit-card-name-validator credit-card-name-num-validator="{{creditCard.cardNbr}}" />\n' +
    '        <div ng-messages="validation.getErrorList(addSuffix(\'cardName\'))" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '            <p ng-message="required" class="help-block">Please enter the name on the card</p>\n' +
    '            <p ng-message="maxlength" class="help-block">Please enter a valid name</p>\n' +
    '            <p ng-message="creditCardNameValidator" class="help-block">Please enter a valid name</p>\n' +
    '            <p ng-message="creditCardNameNumValidator" class="help-block">Please enter a valid name</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '   \n' +
    '    <div ng-switch="strategies[strategyUsed]">\n' +
    '        <div ng-switch-when="Iframe" class="form-group top-buffer-sm-half">\n' +
    '            <label for="cardNumber{{nameSuffix}}">Credit Card Number</label>\n' +
    '            <!-- TODO: Once Android also supports pulling up the numeric keypad for type="text" pattern="[0-9]*", then we can replace the abomination currently uncommented -->\n' +
    '            <!--<input type="text" pattern="[0-9]*" id="cardNumber" name="cardNumber" class="form-control" ng-model="creditCard.cardNbr" ng-minlength="13" ng-maxlength="19" luhn ng-required="!disableValidation"/>-->\n' +
    '            <div class="vantivIframeWrapper">\n' +
    '                <div ng-attr-id="{{\'payframe\' + nameSuffix}}"></div>\n' +
    '                <div class="hideVantivError" ng-if="useExistingCard"></div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div ng-switch-when="Tripos">\n' +
    '            <div class="form-group top-buffer-sm-half" ng-class="validation.getErrorStatusClass(addSuffix(\'cardNumber\'))">\n' +
    '                <label for="cardNumber{{nameSuffix}}">Credit Card Number</label>\n' +
    '\n' +
    '                <div>\n' +
    '                    <input type="tel"\n' +
    '                           id="cardNumber{{nameSuffix}}"\n' +
    '                           name="cardNumber{{nameSuffix}}"\n' +
    '                           class="form-control form-entry-width"\n' +
    '                           ng-model="creditCard.cardNbr"\n' +
    '                           ng-disabled="creditCardNumberDisabled"\n' +
    '                           ng-required="!disableValidation"\n' +
    '                           style="float: left;"/>\n' +
    '                    <div class="creditCardEditTrigger" ng-click="update()">\n' +
    '                        <img cms-image-id="{{editPencilId}}"/> <span cms-text-id="{{editPencilId}}" cms-text-field="Message"></span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div ng-switch-when="Litel">\n' +
    '            <div class="form-group top-buffer-sm-half" ng-class="validation.getErrorStatusClass(addSuffix(\'cardNumber\'))">\n' +
    '                <label for="cardNumber{{nameSuffix}}">Credit Card Number</label>\n' +
    '                <!-- TODO: Once Android also supports pulling up the numeric keypad for type="text" pattern="[0-9]*", then we can replace the abomination currently uncommented -->\n' +
    '                <!--<input type="text" pattern="[0-9]*" id="cardNumber" name="cardNumber" class="form-control" ng-model="creditCard.cardNbr" ng-minlength="13" ng-maxlength="19" luhn ng-required="validate"/>-->\n' +
    '                <input type="tel" id="cardNumber{{nameSuffix}}" name="cardNumber{{nameSuffix}}" class="form-control form-entry-width" ng-model="creditCard.cardNbr" ng-minlength="13" ng-maxlength="19" luhn credit-card-type-validator ng-required="!disableValidation" ng-disabled="creditCardNumberDisabled"/>\n' +
    '                <div ng-messages="validation.getErrorList(addSuffix(\'cardNumber\'))" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                    <p ng-message="required" class="help-block">Please enter a valid credit card number</p>\n' +
    '                    <p ng-message="minlength" class="help-block">Please enter a valid credit card number</p>\n' +
    '                    <p ng-message="maxlength" class="help-block">Please enter a valid credit card number</p>\n' +
    '                    <p ng-message="luhn" class="help-block">Please enter a valid credit card number</p>\n' +
    '                    <p ng-message="creditCardTypeValidator" class="help-block">Please enter a valid credit card number</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group top-buffer-sm-half">\n' +
    '                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding-left no-padding-right" id="creditCardType{{nameSuffix}}" ng-model="creditCard.cardCode" name="creditCardType{{nameSuffix}}">\n' +
    '                    <span><img ng-class="{\'card-icon-selected\': (isVisa)}" class="card-icon" src={{visaImage}}></span>\n' +
    '                    <span><img ng-class="{\'card-icon-selected\': (isMastercard)}" class="card-icon" src={{mastercardImage}}></span>\n' +
    '                    <span><img ng-class="{\'card-icon-selected\': (isAmex)}" class="card-icon" src={{amexImage}}></span>\n' +
    '                    <span><img ng-class="{\'card-icon-selected\': (isDiscover)}" class="card-icon" src={{discoverImage}}></span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    \n' +
    '    <div class="row form-group top-buffer-sm">\n' +
    '        <div class="desktop-exp-width">\n' +
    '            <label for="expMonth{{nameSuffix}}" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">Credit Card Expiration Date</label>\n' +
    '            <div class="col-xs-7 no-padding-right" ng-class="validation.getErrorStatusClass(addSuffix(\'expMonth\'))">\n' +
    '                <label for="expMonth{{nameSuffix}}" class="sr-only">Please enter credit card expiration month</label>\n' +
    '                \n' +
    '\n' +
    '                <select name="expMonth{{nameSuffix}}" class="form-control zip-entry-width" \n' +
    '                        ng-disabled="creditCardExpYearDisabled" \n' +
    '                        ng-model="creditCard.expMonth" id="expMonth{{nameSuffix}}" \n' +
    '                        ng-options="month.value as month.label for month in months" \n' +
    '                        ng-required="!disableValidation">\n' +
    '                    <option value="" disabled selected>Month</option>\n' +
    '                </select>\n' +
    '                \n' +
    '                <div ng-messages="validation.getErrorList(addSuffix(\'expMonth\'))" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                    <p ng-message="required" class="help-block">Please enter a valid expiration month</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="col-xs-5" ng-class="validation.getErrorStatusClass(addSuffix(\'expYear\'))">\n' +
    '                <label for="expYear{{nameSuffix}}" class="sr-only">Please enter the expiration year on your credit card.</label>\n' +
    '                <select translation-skip name="expYear{{nameSuffix}}" id="expYear{{nameSuffix}}" class="form-control plus-four-width"\n' +
    '                        ng-disabled="creditCardExpMothDisabled" \n' +
    '                        ng-options="year for year in yearList track by year"\n' +
    '                        ng-model="creditCard.selectedYear" ng-required="!disableValidation">\n' +
    '                    <option value="" disabled selected>Year</option>\n' +
    '                </select>\n' +
    '                \n' +
    '                <div ng-messages="validation.getErrorList(addSuffix(\'expYear\'))" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                    <p ng-message="required" class="help-block">Please enter a valid expiration year</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/billingInfo/bankInfo.html',
    '﻿<div id="billing-info-partial" class="bottom-buffer-lg">\n' +
    '    <header ng-if="!isAccountInformation" class="header-spacing">\n' +
    '        <a ng-if="!hideEdit" class="pull-right" ng-click="onEdit()" ng-show="showEdit" aria-label="Edit Billing Info">Edit</a>\n' +
    '        <h2 ng-if="noTransHeader" class="h1-mo title-color-mo no-margin-top-do">{{headerText}}</h2>\n' +
    '        <ng-transclude></ng-transclude>\n' +
    '        <hr />\n' +
    '    </header>\n' +
    '\n' +
    '    <div class="group-paragraphs">\n' +
    '        <div class="no-margin-bottom">\n' +
    '            <div class="row">\n' +
    '                <div class="col-xs-6 no-padding-right billing-info-label">\n' +
    '                    <p class="h4"><span ng-if="guaranteedPrimary">Primary </span>Payment Method:</p>\n' +
    '                </div>\n' +
    '                <div class="col-xs-6 no-padding-left">\n' +
    '                    <p class="h4 font-avenir-medium"><span class="nobr">{{ bankDetails.accountTypeDisplay | capitalize }} Bank Account</span></p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="group-paragraphs">\n' +
    '        <div class="no-margin-bottom">\n' +
    '            <div class="row">\n' +
    '                <div class="col-xs-6 no-padding-right billing-info-label">\n' +
    '                    <p class="h4">Routing Number:</p>\n' +
    '                </div>\n' +
    '                <div class="col-xs-6 no-padding-left">\n' +
    '                    <p translation-skip class="h4 font-avenir-medium customer-account-data">{{ bankDetails.routingNumber }}</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="bottom-buffer-xs" ng-show="showAccountNumber">\n' +
    '            <div class="row">\n' +
    '                <div class="col-xs-6 no-padding-right billing-info-label">\n' +
    '                    <p class="h4">Account Number:</p>\n' +
    '                </div>\n' +
    '                <div class="col-xs-6 no-padding-left">\n' +
    '                    <p translation-skip class="h4 font-avenir-medium customer-account-data">{{ bankDetails.accountNumber | bankAccount }}</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/billingInfo/billingAddress.html',
    '﻿<div translation-skip>\n' +
    '    <p ng-class="{h4: !noH4}" class="customer-account-data">{{creditCard.address1 | capitalize}}</p>\n' +
    '    <p ng-class="{h4: !noH4}" class="customer-account-data" ng-if="creditCard.address2">{{creditCard.address2 | capitalize}}</p>\n' +
    '    <p ng-if="!international" ng-class="{h4: !noH4}" class="customer-account-data">{{creditCard.city + ", " | capitalize}}{{creditCard.state + " " + creditCard.zip + (creditCard.plus4 ? "-" + creditCard.plus4 : "") }}</p>\n' +
    '    <p ng-if="international" ng-class="{h4: !noH4}" class="customer-account-data">{{creditCard.address3 | capitalize}}</p>\n' +
    '    <p ng-if="international" ng-class="{h4: !noH4}" class="customer-account-data">{{creditCard.address4 | capitalize}}</p>\n' +
    '    <p ng-if="international" ng-class="{h4: !noH4}" class="customer-account-data">{{creditCard.displayCountry ? creditCard.displayCountry : creditCard.country}}</p>\n' +
    '</div>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/billingInfo/creditCardInfo.html',
    '﻿<div class="bottom-buffer-lg" id="credit-card-info-directive">\n' +
    '    <header ng-if="!isAccountInformation" class="header-spacing">\n' +
    '        <a ng-if="!hideEdit" class="pull-right" ng-click="onEdit()" ng-show="showEdit" aria-label="Edit Billing Info">Edit</a>\n' +
    '        <h2 ng-if="!hideTitle && noTransHeader" class="h1-mo title-color-mo no-margin-top-do">{{headerText}}</h2>\n' +
    '        <ng-transclude></ng-transclude>\n' +
    '        <hr ng-if="!hideTitle" />\n' +
    '    </header>\n' +
    '\n' +
    '    <!--Duplicated below-->\n' +
    '    <div ng-if="!isAccountInformation">\n' +
    '        <div class="bottom-buffer-sm">\n' +
    '            <p class="h4">{{creditCard.orderDisplay}} Payment Method: <span class="font-avenir-medium">Credit Card</span></p>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="group-paragraphs">\n' +
    '            <p translation-skip class="h4 customer-account-data" ng-show="showNameOnCard">{{creditCard.nameOnCard | capitalize}}</p>\n' +
    '            <p translation-skip class="h4 customer-account-data"><span ng-if="!imageSrc">{{creditCard.cardTypeDisplay | charReplace: \'_\': \' \' | capitalize}}</span> {{creditCard.cardNbr | creditCardCode: creditCard.cardCode}} <img ng-if="imageSrc" src="{{imageSrc}}" class="credit-card-info-icon" /></p>\n' +
    '            <p translation-skip class="h4">Exp: <span translation-skip class="customer-account-data">{{creditCard.cardExpires | expDate}}</span></p>\n' +
    '            <div ng-class="{\'top-buffer-xs\': hideAddress}">\n' +
    '                <a class="h5" ng-if="hideAddress" ng-show="showCardEdit" ng-click="onCreditCardEdit()" aria-label="Edit {{creditCard.orderDisplay}} Credit Card">Edit</a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="group-paragraphs">\n' +
    '            <billing-address ng-if="!hideAddress" international="international" credit-card="creditCard"></billing-address>\n' +
    '            <div ng-class="{\'top-buffer-xs\': !hideEdit && !hideAddress}">\n' +
    '                <a class="h5" ng-if="!hideEdit && !hideAddress" ng-show="showCardEdit" ng-click="onCreditCardEdit()" aria-label="Edit {{creditCard.orderDisplay}} Credit Card">Edit</a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!--Duplicated above-->\n' +
    '    <div ng-if="isAccountInformation">\n' +
    '        <div class="row bottom-buffer-sm">\n' +
    '            <div class="h4 col-xs-6 label-format">Payment Method:</div>\n' +
    '            <div ng-if="numCards < 2" class="h4 customer-account-data col-xs-6 no-padding-left">Credit Card</div>\n' +
    '            <div ng-if="numCards >= 2" class="h4 customer-account-data col-xs-6 no-padding-left">\n' +
    '                <a ng-click="onCreditCardEdit()" aria-label="Edit {{creditCard.orderDisplay}} Credit Card">Credit Card</a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="group-paragraphs">\n' +
    '            <div class="row bottom-buffer-sm">\n' +
    '                <div class="h4 col-xs-6 label-format"></div>\n' +
    '                <div translation-skip class="h4 customer-account-data col-xs-6 no-padding-left">{{creditCard.cardTypeDisplay | charReplace: \'_\': \' \' | capitalize}}</div>\n' +
    '                <div translation-skip class="h4 col-xs-6 label-format"></div>\n' +
    '                <div translation-skip class="h4 customer-account-data col-xs-6 no-padding-left">{{creditCard.cardNbr | creditCardCode: creditCard.cardCode}}</div>\n' +
    '        </div>\n' +
    '        <div class="row bottom-buffer-sm">\n' +
    '            <div class="h4 col-xs-6 label-format">Expires:</div>\n' +
    '            <div translation-skip class="h4 customer-account-data col-xs-6 no-padding-left">{{creditCard.cardExpires | expDate}}</div>\n' +
    '        </div>\n' +
    '        <!--<p class="h4">Exp: <span class="customer-account-data">{{creditCard.cardExpires | expDate}}</span></p>-->\n' +
    '        <div ng-if="!isAccountInformation" ng-class="{\'top-buffer-xs\': hideAddress}">\n' +
    '            "{\n' +
    '\n' +
    '            <a class="h5" ng-if="hideAddress" ng-show="showCardEdit" ng-click="onCreditCardEdit()" aria-label="Edit {{creditCard.orderDisplay}} Credit Card">Edit</a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="group-paragraphs">\n' +
    '        <div ng-if="!hideAddress" class="row bottom-buffer-sm">\n' +
    '            <div class="h4 col-xs-6 label-format">Address:</div>\n' +
    '            <div class="col-xs-6 no-padding-left"><billing-address international="international" credit-card="creditCard"></billing-address></div>\n' +
    '        </div>\n' +
    '        <div ng-if="!isAccountInformation" ng-class="{\'top-buffer-xs\': !hideEdit && !hideAddress}">\n' +
    '            <a class="h5" ng-if="!hideEdit && !hideAddress" ng-show="showCardEdit" ng-click="onCreditCardEdit()" aria-label="Edit {{creditCard.orderDisplay}} Credit Card">Edit</a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<a ng-if="!hideEdit" ng-show="showAddSecondaryPayment" ng-click="addSecondaryPayment()" class="h5">Add Secondary Credit Card</a>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/billingInfoPartial.html',
    '﻿<div id="billing-info-partial" class="bottom-buffer-lg">\n' +
    '    <header class="header-spacing">\n' +
    '        <a ng-if="!hideEdit" class="pull-right" ng-click="onEdit()" ng-show="showEdit" aria-label="Edit Billing Info">Edit</a>\n' +
    '        <!--<h2 class="h1-mo" ng-if="!hideTitle">Billing Information</h2>-->\n' +
    '        <h2 class="h1-mo" ng-if="!hideTitle">{{intitle}}</h2>\n' +
    '        <hr ng-if="!hideTitle" />\n' +
    '    </header>\n' +
    '    <div class="bottom-buffer-sm">\n' +
    '        <div class="no-margin-bottom">\n' +
    '            <div class="row">\n' +
    '                <div class="col-xs-6 no-padding-right billing-info-label">\n' +
    '                    <p class="h4">{{creditCard.orderDisplay}} Payment Method:</p>\n' +
    '                </div>\n' +
    '                <div class="col-xs-6 no-padding-left">\n' +
    '                    <p class="h4 font-avenir-medium customer-account-data">{{((billingtype ==\'EFT\' && bankDetails.accountTypeDisplay )? bankDetails.accountTypeDisplay + " " : "") + billingtypeDisplay}}</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-show="billingtype ==\'CREDIT\'">\n' +
    '        <div class="group-paragraphs">\n' +
    '            <p translation-skip class="h4 customer-account-data" ng-show="showNameOnCard">{{creditCard.nameOnCard | capitalize}}</p>\n' +
    '            <p translation-skip class="h4 customer-account-data">{{creditCard.cardCode | creditCardCodeToName | charReplace: \'_\': \' \' | capitalize}} {{creditCard.cardNbr | creditCardCode: creditCard.cardCode}}</p>\n' +
    '            <p class="h4">Exp: <span translation-skip class="customer-account-data">{{creditCard.cardExpires}}</span></p>\n' +
    '            <a ng-if="hideAddress" ng-show="showCardEdit" ng-click="onCreditCardEdit()" aria-label="Edit {{creditCard.orderDisplay}} Credit Card">Edit</a>\n' +
    '        </div>\n' +
    '\n' +
    '        <!--domestic addresses -->\n' +
    '        <!--<div class="group-paragraphs" ng-if="!creditCard.international">\n' +
    '            <p class="h4 customer-account-data">{{creditCard.address1 | capitalize}}</p>\n' +
    '            <p class="h4 customer-account-data" ng-show="creditCard.address2">{{creditCard.address2 | capitalize}}</p>\n' +
    '            <p class="h4 customer-account-data">{{creditCard.city + ", " | capitalize}}{{creditCard.state + " " + creditCard.zip + (creditCard.plus4 ? "-" + creditCard.plus4 : "") }}</p>\n' +
    '            <a ng-show="showCardEdit" ng-click="onCreditCardEdit()" aria-label="Edit {{creditCard.orderDisplay}} Credit Card">Edit</a>\n' +
    '        </div>-->\n' +
    '        <!--international address -->\n' +
    '        <!--<div class="group-paragraphs" ng-if="creditCard.international">\n' +
    '            <p class="h4 customer-account-data">{{creditCard.address1 | capitalize}}</p>\n' +
    '            <p class="h4 customer-account-data">{{creditCard.address2 | capitalize}}</p>\n' +
    '            <p class="h4 customer-account-data">{{creditCard.address3 | capitalize}}</p>\n' +
    '            <p class="h4 customer-account-data">{{creditCard.address4 | capitalize}}</p>\n' +
    '            <p class="h4 customer-account-data">{{creditCard.displayCountry | capitalize}}</p>\n' +
    '            <a ng-show="showCardEdit" ng-click="onCreditCardEdit()" aria-label="Edit {{creditCard.orderDisplay}} Credit Card">Edit</a>\n' +
    '        </div>-->\n' +
    '\n' +
    '        <address-display ng-if="!hideAddress" address="creditCard" international="creditCard.international" display-country="creditCard.displayCountry" on-address-edit="onCreditCardEdit()" show-edit-conditional="showCardEdit"></address-display>\n' +
    '\n' +
    '        <div ng-if="secondaryCreditCard.cardNbr" class="bottom-buffer-sm">\n' +
    '            <div class="no-margin-bottom">\n' +
    '                <div class="row">\n' +
    '                    <div class="col-xs-6 no-padding-right billing-info-label">\n' +
    '                        <p class="h4">Payment Method:</p>\n' +
    '                    </div>\n' +
    '                    <div class="col-xs-6 no-padding-left">\n' +
    '                        <p class="h4 customer-account-data">Secondary Credit Card</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div ng-if="secondaryCreditCard.cardNbr" class="group-paragraphs">\n' +
    '            <p translation-skip class="h4 customer-account-data" ng-show="showNameOnCard">{{secondaryCreditCard.nameOnCard | capitalize}}</p>\n' +
    '            <p translation-skip class="h4 customer-account-data">{{secondaryCardType | charReplace: \'_\': \' \' | capitalize}} {{secondaryCreditCard.cardNbr | creditCardCode: secondaryCreditCard.cardCode}}</p>\n' +
    '            <p class="h4">Exp: <span translation-skip class="customer-account-data">{{secondaryCreditCard.cardExpires}}</span></p>\n' +
    '            <a ng-if="hideAddress" ng-show="showCardEdit" ng-click="onSecondaryCreditCardEdit()" aria-label="Edit {{secondaryCreditCard.orderDisplay}} Credit Card">Edit</a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-show="billingtype ==\'EFT\'">\n' +
    '        <div class="group-paragraphs">\n' +
    '            <div class="no-margin-bottom">\n' +
    '                <div class="row">\n' +
    '                    <div class="col-xs-6 no-padding-right billing-info-label">\n' +
    '                        <p class="h4">Routing Number:</p>\n' +
    '                    </div>\n' +
    '                    <div class="col-xs-6 no-padding-left">\n' +
    '                        <p translation-skip class="h4 font-avenir-medium customer-account-data">{{bankDetails.routingNumber}}</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="bottom-buffer-xs" ng-show="showAccountNumber">\n' +
    '                <div class="row">\n' +
    '                    <div class="col-xs-6 no-padding-right billing-info-label">\n' +
    '                        <p class="h4">Account Number:</p>\n' +
    '                    </div>\n' +
    '                    <div class="col-xs-6 no-padding-left">\n' +
    '                        <p translation-skip class="h4 font-avenir-medium customer-account-data">{{bankDetails.accountNumber}}</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <a ng-show="showAddSecondaryPayment" ng-click="addSecondaryPayment()" class="h5">Add Secondary Credit Card</a>   \n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/borderBottomButtonsTemplate.html',
    '﻿<div class="row">\n' +
    '    <div class="col-xs-12">\n' +
    '\n' +
    '        <span class="sr-only"></span>\n' +
    '        \n' +
    '        <div storefront-hide-if-enabled ng-if="!storefrontOnly">\n' +
    '            <button id="submitBtn" \n' +
    '                    ng-disabled="isDisabled" \n' +
    '                    ng-transclude type="submit" \n' +
    '                    ng-click="continueSaveInvoked()" \n' +
    '                    ng-hide="hideContinueSave" \n' +
    '                    ng-class="{\'exclude-global-disable\': excludeGlobalDisable}" \n' +
    '                    class="btn padding-sides-sm pull-right">\n' +
    '            </button>\n' +
    '\n' +
    '            <a id="cancelLnk"\n' +
    '               ng-show="showCancel"\n' +
    '               class="pull-right padding-top-sm bottom-buffer-sm-half right-buffer-lg-do right-buffer-md-mo"\n' +
    '               aria-label="Cancel"\n' +
    '               ng-click="onCancel()">{{cancelText}}</a>\n' +
    '\n' +
    '            <a ng-show="showPrevious"\n' +
    '               class="pull-left padding-top-sm bottom-buffer-sm-half"\n' +
    '               aria-label="Previous"\n' +
    '               ng-click="onPrevious()">{{previousText || \'Previous\'}}</a>    \n' +
    '        </div>\n' +
    '        <div\n' +
    '            storefront-navigation\n' +
    '            on-proceed="continueSaveInvoked()"\n' +
    '            preserve-work-item="preserveWorkItem"\n' +
    '            on-cancel="onCancel()"\n' +
    '            on-previous="onPrevious()"             \n' +
    '            on-continue-save="onContinueSave()"\n' +
    '            \n' +
    '            hide-proceed="hideContinueSave"\n' +
    '            is-proceed-disabled="isDisabled"\n' +
    '            is-form-completion="formComplete"\n' +
    '            show-cancel="showCancel"\n' +
    '            show-previous="showPrevious"\n' +
    '            exclude-global-disable="excludeGlobalDisable">\n' +
    '            \n' +
    '            <span ng-if="!formComplete" ng-transclude></span>\n' +
    '            <span ng-if="formComplete">Proceed</span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/checkboxTemplate.html',
    '﻿<div ng-class="validation.getErrorStatusClass(\'checkbox\')">\n' +
    '\n' +
    '    <div class="checkbox bottom-buffer-xs">\n' +
    '        <label>\n' +
    '            <input id="checkbox" type="checkbox" ng-model="checkboxIsTruthy" name="checkbox" required /><ng-transclude></ng-transclude>\n' +
    '        </label>\n' +
    '    </div>\n' +
    '    <div ng-messages="validation.getErrorList(\'checkbox\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '        <p ng-message="required" class="help-block">{{errorMessage}}</p>\n' +
    '    </div>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/chooseDeliveryMethodPartial.html',
    '﻿<div class="bottom-buffer-lg">\n' +
    '    <header class="header-spacing">\n' +
    '        <h2 class="h1-mo">{{$ctrl.deliveryMethodHeader}}</h2>\n' +
    '        <hr />\n' +
    '    </header>\n' +
    '\n' +
    '    <div id="chooseDeliveryMethodRadios" class="btn-group-vertical">\n' +
    '\n' +
    '        <!-- By Mail Option ONLY -->\n' +
    '        <div ng-if="$ctrl.allowDeliveryByMail && !$ctrl.allowPickup">\n' +
    '            <label>\n' +
    '                <span ng-bind-html="$ctrl.byMailDeliveryMethod | trusted"></span>\n' +
    '            </label>\n' +
    '        </div>\n' +
    '\n' +
    '        <!-- Pick Up Option ONLY -->\n' +
    '        <div ng-if="!$ctrl.allowDeliveryByMail && $ctrl.allowPickup">\n' +
    '            <label>\n' +
    '                <span ng-bind-html="$ctrl.pickUpInStoreDeliveryMethod | trusted"></span>\n' +
    '            </label>\n' +
    '        </div>\n' +
    '\n' +
    '        <!-- User\'s Choice. Their options: By Mail and Pick Up -->\n' +
    '        <div ng-if="$ctrl.allowDeliveryByMail && $ctrl.allowPickup">\n' +
    '            <div id="delivery-method-by-mail-radio-choice">\n' +
    '                <div>\n' +
    '                    <input type="radio" ng-model="$ctrl.delivery" value="mail" ng-click="clickedRadio()" />\n' +
    '                </div>\n' +
    '                <label>\n' +
    '                    <span ng-bind-html="$ctrl.byMailDeliveryMethod | trusted"></span>\n' +
    '                </label>\n' +
    '            </div>\n' +
    '\n' +
    '            <div id="delivery-method-by-pickup-radio-choice">\n' +
    '                <div>\n' +
    '                    <input type="radio" ng-model="$ctrl.delivery" value="store" ng-click="clickedRadio()" />\n' +
    '                </div>\n' +
    '                <label>\n' +
    '                    <span ng-bind-html="$ctrl.pickUpInStoreDeliveryMethod | trusted"></span>\n' +
    '                </label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/cms/readMoreOrLessTemplate.html',
    '﻿<div class="cms-picture-auto-scale">\n' +
    '	<div ng-bind-html="vm.content | trusted"></div>\n' +
    '</div>\n' +
    '<div class="top-buffer-md">\n' +
    '    <a style="width:70px;" ng-click="expanderClicked()" ng-show="vm.displayReadMoreOrLessLink">{{vm.expanderText}}</a>\n' +
    '\n' +
    '    <a style="width:70px;" ng-click="goToBreakoutPage(vm.articleUrl)" ng-show="vm.displayBreakoutPageLink">Read More</a>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/cms/rssTemplate.html',
    '﻿<img title="{{titleText}}" ng-click="onRssClick()" ng-src="{{rssIcon}}" />');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/cms/tollRatesSelectTemplate.html',
    '﻿<div id="toll-rates-select" class="row">\n' +
    '    <div class="col-xs-4">\n' +
    '        <label for="tollRoadSelect">Select Toll Road</label>\n' +
    '        <select ng-model="selectedTollRoad" ng-change="changeUrl();createDynamicClassifications();selectDefaultDirection();" class="form-control" id="tollRoadSelect" ng-options="road as road.Title for road in tollRoads"></select>\n' +
    '    </div>\n' +
    '    <div class="col-xs-4" ng-hide="selectedTollRoad.HideSelect">\n' +
    '        <label for="directionSelect">Select Direction of Travel</label>\n' +
    '        <select ng-model="selectedDirection" class="form-control" id="directionSelect" ng-options="direction as direction.Direction for direction in selectedTollRoad.Directions"></select>\n' +
    '    </div>\n' +
    '    <div class="col-xs-3" ng-hide="selectedTollRoad.HideSelect">\n' +
    '        <label for="vehicleClassSelect" class="nobr">Select Vehicle Classification</label>\n' +
    '        <select ng-model="selectedClass" class="form-control" id="vehicleClassSelect" ng-options="class as class.Label for class in classifications"></select>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/contactEntry/accountPreferences.html',
    '﻿<header class="header-spacing">\n' +
    '    <a ng-if="displayEdit" href="" class="pull-right" ng-click="onEdit()" aria-label="Edit Preferences" aria-disabled="{{(!displayEdit)}}">Edit</a>\n' +
    '    <ng-transclude></ng-transclude>\n' +
    '</header>\n' +
    '\n' +
    '<div class="bottom-buffer-md">\n' +
    '    <p class="h5">How would you like to receive information about your monthly statements?</p>\n' +
    '    <div>\n' +
    '        <input type="checkbox" ng-model="preferences.emailStatement" id="emailMonthlyStatement" ng-disabled="readOnly" />\n' +
    '        <label for="emailMonthlyStatement" class="h5">Email monthly statements</label>\n' +
    '    </div>\n' +
    '    <div>\n' +
    '        <input type="checkbox" ng-model="preferences.mailStatement" id="printMonthlyStatement" ng-disabled="readOnly">\n' +
    '        <label for="printMonthlyStatement" class="h5">Mail printed monthly statements</label>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<p class="h5">How would you like to receive important updates about your account?</p>\n' +
    '<div>\n' +
    '    <input type="checkbox" ng-model="preferences.byEmail" id="sendByEmail" ng-disabled="readOnly" />\n' +
    '    <label for="sendByEmail" class="h5">By Email</label>\n' +
    '</div>\n' +
    '<div>\n' +
    '    <input type="checkbox" ng-model="preferences.byMail" id="sendByMail" ng-disabled="readOnly">\n' +
    '    <label for="sendByMail" class="h5">By Mail</label>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/contactEntry/authorizedContactEntry.html',
    '﻿<div ng-if="isDesktop">\n' +
    '    <ng-transclude></ng-transclude>\n' +
    '\n' +
    '    <div class="bottom-buffer-sm-half" ng-if="(!isNullOrEmpty(tentativeAuthorizedContact.firstName) || !isNullOrEmpty(tentativeAuthorizedContact.lastName) || !isNullOrEmpty(tentativeAuthorizedContact.accessCode) || innerAuthForm.$dirty || wasRemoval || alwaysShowPassword) && (!neverShowPassword)">\n' +
    '        <div class="row">\n' +
    '            <div class="form-group col-sm-4" ng-class="validations.getErrorStatusClass(\'currentPassword\')">\n' +
    '                <label for="currentPassword">Current Password</label>\n' +
    '                <input autocomplete="new-password" id="currentPassword" name="currentPassword" ng-model="authorizedContactDetails.currentPassword" class="form-control" required type="password" />\n' +
    '                <div ng-messages="validations.getErrorList(\'currentPassword\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '                    <p ng-message="required" class="help-block">Please enter your current password</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <ng-form name="innerAuthForm">\n' +
    '        <div ng-repeat="authorizedContact in authorizedContactDetails.authorizedContacts">\n' +
    '            <div class="bottom-buffer-sm bottom-buffer-lg-mo">\n' +
    '                <div class="row">\n' +
    '                    <div class="form-group col-xs-6 col-sm-4" ng-class="validationsInner.getErrorStatusClass(\'firstName\'+$index)">\n' +
    '                        <label for="firstName{{$index}}">First Name</label>\n' +
    '                        <input id="firstName{{$index}}" name="firstName{{$index}}" ng-model-options="{allowInvalid : true}" ng-model="authorizedContact.firstName" class="form-control" required type="text" ng-maxlength="30" ng-pattern="/^[a-zA-Z0-9]+$/" capitalize-all />\n' +
    '                        <div ng-messages="validationsInner.getErrorList(\'firstName\'+$index)" ng-if="validationsInner.hasSubmitted()" role="alert">\n' +
    '                            <p ng-message="required" class="help-block">Please enter a valid first name</p>\n' +
    '                            <p ng-message="maxlength" class="help-block">Please enter a valid first name</p>\n' +
    '                            <p ng-message="pattern" class="help-block">Please enter a valid first name</p>\n' +
    '                            <p ng-if="authorizedContact.isDuplicate" style="color: #b94a48;" class="help-block">This contact already exists</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group col-xs-6 col-sm-4" ng-class="validationsInner.getErrorStatusClass(\'lastName\'+$index)">\n' +
    '                        <label for="lastName{{$index}}">Last Name</label>\n' +
    '                        <input id="lastName{{$index}}" name="lastName{{$index}}" ng-model-options="{allowInvalid : true}" ng-model="authorizedContact.lastName" class="form-control" required type="text" ng-maxlength="20" ng-pattern="/^[a-zA-Z0-9]+$/" capitalize-all />\n' +
    '                        <div ng-messages="validationsInner.getErrorList(\'lastName\'+$index)" ng-if="validationsInner.hasSubmitted()" role="alert">\n' +
    '                            <p ng-message="required" class="help-block">Please enter a valid last name</p>\n' +
    '                            <p ng-message="maxlength" class="help-block">Please enter a valid last name</p>\n' +
    '                            <p ng-message="pattern" class="help-block">Please enter a valid last name</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group col-xs-9 col-sm-3" ng-class="validationsInner.getErrorStatusClass(\'accessCode\'+$index)">\n' +
    '                        <label for="accessCode{{$index}}">Access Code</label>\n' +
    '                        <input id="accessCode{{$index}}" name="accessCode{{$index}}" ng-model-options="{allowInvalid : true}" ng-model="authorizedContact.accessCode" class="form-control" required type="text" ng-minlength="6" ng-maxlength="12" ng-pattern="/^[a-zA-Z0-9]+$/" />\n' +
    '                        <div ng-messages="validationsInner.getErrorList(\'accessCode\'+$index)" ng-if="validationsInner.hasSubmitted()" role="alert">\n' +
    '                            <p ng-message="required" class="help-block">Please enter a value</p>\n' +
    '                            <p ng-message="minlength" class="help-block">Must be at least 6 characters</p>\n' +
    '                            <p ng-message="maxlength" class="help-block nobr">Must be no more than 12 characters</p>\n' +
    '                            <p ng-message="pattern" class="help-block nobr">Characters must be alphanumeric</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group col-xs-3 col-sm-1 no-padding-left">\n' +
    '                        <div class="bg-white top-buffer-lg text-primary" aria-hidden="true">\n' +
    '                            <span ng-click="removeAuthorizedContact($index)" class="cursor-pointer"><span class="glyphicon glyphicon-trash"></span> Remove</span>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </ng-form>\n' +
    '\n' +
    '    <div class="bottom-buffer-sm" ng-if="!(allowOneRow && authorizedContactDetails.authorizedContacts.length > 0)">\n' +
    '        <div class="row">\n' +
    '            <div class="form-group col-xs-6 col-sm-4" ng-class="validations.getErrorStatusClass(\'tentativeFirstName\')">\n' +
    '                <label for="tentativeFirstName">First Name</label>\n' +
    '                <input id="tentativeFirstName" name="tentativeFirstName" ng-model-options="{allowInvalid : true}" ng-model="tentativeAuthorizedContact.firstName" class="form-control" type="text" ng-required="!isNullOrEmpty(tentativeAuthorizedContact.lastName) || !isNullOrEmpty(tentativeAuthorizedContact.accessCode)" ng-maxlength="30" ng-pattern="/^[a-zA-Z0-9]+$/" capitalize-all />\n' +
    '                <div ng-messages="validations.getErrorList(\'tentativeFirstName\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '                    <p ng-message="required" class="help-block">Please enter a valid first name</p>\n' +
    '                    <p ng-message="maxlength" class="help-block">Please enter a valid first name</p>\n' +
    '                    <p ng-message="pattern" class="help-block">Please enter a valid first name</p>\n' +
    '                    <p ng-if="tentativeAuthorizedContact.isDuplicate" style="color: #b94a48;" class="help-block">This contact already exists</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group col-xs-6 col-sm-4" ng-class="validations.getErrorStatusClass(\'tentativeLastName\')">\n' +
    '                <label for="tentativeLastName">Last Name</label>\n' +
    '                <input id="tentativeLastName" name="tentativeLastName" ng-model-options="{allowInvalid : true}" ng-model="tentativeAuthorizedContact.lastName" class="form-control" type="text" ng-required="!isNullOrEmpty(tentativeAuthorizedContact.firstName) || !isNullOrEmpty(tentativeAuthorizedContact.accessCode)" ng-maxlength="20" ng-pattern="/^[a-zA-Z0-9]+$/" capitalize-all />\n' +
    '                <div ng-messages="validations.getErrorList(\'tentativeLastName\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '                    <p ng-message="required" class="help-block">Please enter a valid last name</p>\n' +
    '                    <p ng-message="maxlength" class="help-block">Please enter a valid last name</p>\n' +
    '                    <p ng-message="pattern" class="help-block">Please enter a valid last name</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group col-xs-9 col-sm-3" ng-class="validations.getErrorStatusClass(\'tentativeAccessCode\')">\n' +
    '                <label for="tentativeAccessCode">Access Code</label>\n' +
    '                <input id="tentativeAccessCode" name="tentativeAccessCode" ng-model-options="{allowInvalid : true}" ng-model="tentativeAuthorizedContact.accessCode" class="form-control" type="text" ng-required="!isNullOrEmpty(tentativeAuthorizedContact.firstName) || !isNullOrEmpty(tentativeAuthorizedContact.lastName)" ng-minlength="6" ng-maxlength="12" ng-pattern="/^[a-zA-Z0-9]+$/" />\n' +
    '                <div ng-messages="validations.getErrorList(\'tentativeAccessCode\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '                    <p ng-message="required" class="help-block">Please enter a value</p>\n' +
    '                    <p ng-message="maxlength" class="help-block nobr">Must be no more than 12 characters</p>\n' +
    '                    <p ng-message="pattern" class="help-block nobr">Characters must be alphanumeric</p>\n' +
    '                    <p ng-message="minlength" class="help-block">Must be at least 6 characters</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <div class="row" ng-if="(authorizedContactDetails.authorizedContacts.length < authContactLimit) && !allowOneRow">\n' +
    '        <div class="col-xs-12 col-sm-12">\n' +
    '            <a ng-click="addAuthorizedContact()">Add additional authorized contact</a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/contactEntry/contactInfoEntry.html',
    '﻿<div class="bottom-buffer-lg">\n' +
    '\n' +
    '	<header class="header-spacing">\n' +
    '		<ng-transclude></ng-transclude>\n' +
    '		<hr />\n' +
    '	</header>\n' +
    '	<div>\n' +
    '		<primary-phone primary-phone="contactInfo.phoneNumber" form="form"></primary-phone>\n' +
    '\n' +
    '		<phone-number-and-ext alt-phone-and-ext="contactInfo" form="form"></phone-number-and-ext>\n' +
    '\n' +
    '		<div class="row no-margin">\n' +
    '			<set-email-address model="contactInfo.emailAddress" emailid="email" form="form" required="true">Email Address</set-email-address>\n' +
    '\n' +
    '            <div ng-if="showConfirm" class="form-group" ng-class="validations.isValidWithNullCheck(\'email\') ? validations.getErrorStatusClass(\'confirmEmailAddress\') : \'\'">\n' +
    '                <label for="confirmEmailAddress">Confirm Email Address</label>\n' +
    '                <input ng-disabled="isLoggedIn" id="confirmEmailAddress" ng-model="confirmModels.confirmEmailAddress" name="confirmEmailAddress" class="form-entry-width form-control" type="email" placeholder="username@domain.com" ng-required="!isLoggedIn" compare-to="contactInfo.emailAddress" case-insensitive />\n' +
    '                <div ng-messages="validations.getErrorList(\'confirmEmailAddress\')" ng-if="validations.hasSubmitted() && validations.isValidWithNullCheck(\'email\')" role="alert">\n' +
    '                    <p ng-message="compareTo" class="help-block">Emails do not match</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '		</div>\n' +
    '\n' +
    '		<div class="row no-margin">\n' +
    '            <set-email-address model="contactInfo.altEmailAddress" emailid="altEmail" form="form" required="false" not-equal="contactInfo.emailAddress">Alternate Email Address</set-email-address>\n' +
    '\n' +
    '            <div ng-if="showConfirm" class="form-group" ng-class="validations.isValidWithNullCheck(\'altEmail\') ? validations.getErrorStatusClass(\'confirmAltEmailAddress\') : \'\'">\n' +
    '                <label for="confirmAltEmailAddress">Confirm Alternate Email Address</label>\n' +
    '                <input ng-disabled="isLoggedIn" id="confirmAltEmailAddress" ng-model="confirmModels.confirmAltEmailAddress" name="confirmAltEmailAddress" class="form-entry-width form-control" type="email" placeholder="username@domain.com" compare-to="contactInfo.altEmailAddress" case-insensitive />\n' +
    '                <div ng-messages="validations.getErrorList(\'confirmAltEmailAddress\')" ng-if="validations.hasSubmitted() && validations.isValidWithNullCheck(\'altEmail\')" role="alert">\n' +
    '                    <p ng-message="compareTo" class="help-block">Alternate emails do not match</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/contactEntry/emailInputTemplate.html',
    '﻿<div class="form-group" ng-class="validations.getErrorStatusClass(emailid)">\n' +
    '    <label tabindex="-1" for="{{emailid}}"><ng-transclude></ng-transclude></label>\n' +
    '    <input type="email" id="{{emailid}}" name="{{emailid}}" tabindex="tabOrderingIndex" class="form-control"\n' +
    '           ng-class="formWidthClass"\n' +
    '           ng-model="emailAddr"\n' +
    '           ng-maxlength="80"\n' +
    '           ng-required="required"\n' +
    '           placeholder="username@domain.com"\n' +
    '           email-valid\n' +
    '           not-equal-to="notEqual" />\n' +
    '    <div ng-messages="validations.getErrorList(emailid)" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '        <p ng-message="required" class="help-block">Please enter a valid email address</p>\n' +
    '        <p ng-message="email" class="help-block">Please enter a valid email address</p>\n' +
    '        <p ng-message="emailValid" class="help-block">Please enter a valid email address</p>\n' +
    '        <p ng-message="maxlength" class="help-block">Please enter a valid email address</p>\n' +
    '        <p ng-message="doubles" class="help-block">Please enter a valid email address</p>\n' +
    '        <p ng-message="notEqualTo" class="help-block">Please enter a different email address</p>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<!--ng-change="removeDoubles(emailAddr, emailid)"-->');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/contactEntry/phoneNumberAndExt.html',
    '﻿<div class="form-group row no-margin">\n' +
    '	<label for="altPhoneNumber">Alternate Phone Number</label>\n' +
    '	<div class="phone-ext">\n' +
    '		<div class="col-xs-7 no-padding-left" ng-class="validations.getErrorStatusClass(\'altPhoneNumber\')">\n' +
    '			<!--<label for="altPhoneNumber" class="sr-only">Alternative Phone Number</label>-->\n' +
    '			<input id="altPhoneNumber" type="tel" placeholder="000-000-0000" name="altPhoneNumber" ng-model="altPhoneAndExt.altPhoneNumber" class="form-control phone-with-ext-fields-width" ng-pattern="/^\\d{3}-?\\d{3}-?\\d{4}$/" maxlength="" ng-blur="onBlurOrChange()" ng-change="onBlurOrChange()"/>\n' +
    '			<div ng-messages="validations.getErrorList(\'altPhoneNumber\')" ng-if="validations.hasSubmitted()" role="alert" ng-class="validations.getErrorStatusClass(\'altPhoneNumber\')">\n' +
    '				<p ng-message="required" class="help-block">Please enter a valid alt. phone number</p>\n' +
    '				<p ng-message="pattern" class="help-block">Please enter a valid alt. phone number</p>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<div class="col-xs-2 phone-ext-container">\n' +
    '			<span>Ext.</span>\n' +
    '		</div>\n' +
    '		<div class="col-xs-3 no-padding" ng-class="validations.getErrorStatusClass(\'ext\')">\n' +
    '			<label for="ext" class="sr-only">Extension</label>\n' +
    '			<input type="text" id="ext" name="ext" ng-model="altPhoneAndExt.altPhoneNumberExt" class="form-control phone-ext-fields-width" ng-maxlength="6" ng-pattern="/^\\d*$/" />\n' +
    '			<div ng-messages="validations.getErrorList(\'ext\')" ng-if="validations.hasSubmitted()" role="alert" ng-class="validations.getErrorStatusClass(\'ext\')">\n' +
    '				<p ng-message="maxlength" class="help-block nobr-do">Please enter a valid extension</p>\n' +
    '				<p ng-message="pattern" class="help-block nobr-do">Please enter a valid extension</p>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/contactEntry/primaryPhone.html',
    '﻿<div class="form-group" ng-class="validations.getErrorStatusClass(\'phoneNumber\')">\n' +
    '	<label for="phoneNumber"><ng-transclude>Phone Number</ng-transclude></label>\n' +
    '	<input id="phoneNumber" name="phoneNumber" class="form-control" ng-class="{ \'form-entry-width\': !full }" ng-model="primaryPhone" type="tel" placeholder="000-000-0000" required ng-pattern="/^\\d{3}-?\\d{3}-?\\d{4}$/" ng-blur="onBlurOrChange()" ng-change="onBlurOrChange()"/>\n' +
    '	<div ng-messages="validations.getErrorList(\'phoneNumber\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '		<p ng-message="required" class="help-block">Please enter a valid phone number</p>\n' +
    '		<p ng-message="pattern" class="help-block">Please enter a valid phone number</p>\n' +
    '	</div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/contactInfo/addressDisplayTemplate.html',
    '﻿<!--domestic addresses -->\n' +
    '<div class="group-paragraphs bottom-buffer-sm" ng-if="!international">\n' +
    '    <p translation-skip class="h4 customer-account-data">{{address.address1 | capitalize}}</p>\n' +
    '    <p translation-skip class="h4 customer-account-data" ng-show="address.address2">{{address.address2 | capitalize}}</p>\n' +
    '    <p translation-skip class="h4 customer-account-data">{{address.city + ", " | capitalize}}{{address.state + " " + address.zip + (address.plus4 ? "-" + address.plus4 : "") }}</p>\n' +
    '\n' +
    '    <div ng-if="showEdit" class="top-buffer-xs">\n' +
    '        <a class="h5" ng-click="onAddressEdit()" aria-label="Edit Address">Edit</a>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<!--international address -->\n' +
    '<div class="group-paragraphs bottom-buffer-sm" ng-if="international">\n' +
    '    <p translation-skip class="h4 customer-account-data">{{address.address1 | capitalize}}</p>\n' +
    '    <p translation-skip class="h4 customer-account-data">{{address.address2 | capitalize}}</p>\n' +
    '    <p translation-skip class="h4 customer-account-data">{{address.address3 | capitalize}}</p>\n' +
    '    <p translation-skip class="h4 customer-account-data">{{address.address4 | capitalize}}</p>\n' +
    '    <p translation-skip class="h4 customer-account-data">{{displayCountry ? (displayCountry | capitalize) : (address.country | capitalize)}}</p>\n' +
    '    <p translation-skip ng-if="hasRefundFields" class="h4 customer-account-data">{{address.city + ", " | capitalize}}{{address.state + " " + address.zip + (address.plus4 ? "-" + address.plus4 : "") }}</p>\n' +
    '\n' +
    '    <div ng-if="showEdit" class="top-buffer-xs">\n' +
    '        <a class="h5" ng-click="onAddressEdit()" aria-label="Edit Address">Edit</a>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/contactInfo/nameAndAddressDisplayTemplate.html',
    '﻿<p translation-skip>{{name}}</p>\n' +
    '<address-display address="address" international="international" display-country="displayCountry" on-address-edit="onAddressEdit"></address-display>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/contactInfo/verboseLoginInfo.html',
    '﻿<div id="login-information" class="bottom-buffer-lg">\n' +
    '\n' +
    '    <ng-transclude></ng-transclude>\n' +
    '\n' +
    '    <div class="group-paragraphs">\n' +
    '        <p class="h4">Account Type</p>\n' +
    '        <p class="h4 customer-account-data">Personal Account</p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="group-paragraphs">\n' +
    '        <p class="h4">Username</p>\n' +
    '        <p class="h4 customer-account-data">{{account.userName}}</p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="group-paragraphs">\n' +
    '        <p class="h4">Security Question</p>\n' +
    '        <p class="h4 customer-account-data">{{securityQuestion}}</p>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/currentPasswordIsolatedTemplate.html',
    '﻿<div class="row">\n' +
    '    <div class="col-xs-12 col-sm-5 col-md-4" ng-class="validation.getErrorStatusClass(\'currentPassword\')">\n' +
    '        <label for="currentPassword">Current Password</label>\n' +
    '        <input id="currentPassword" name="currentPassword" tabindex="tabOrderingIndex" ng-model="currentPassword.currentPassword" class="form-control" required type="password" />\n' +
    '        <div ng-messages="validation.getErrorList(\'currentPassword\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '            <p ng-message="required" class="help-block">Please enter your current password</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/currentPasswordTemplate.html',
    '﻿<div ng-if="showCurrentPassword" class="form-group" ng-class="validation.getErrorStatusClass(\'currentPassword\')">\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12 col-sm-5 col-md-4">\n' +
    '            <label for="currentPassword">Current Password</label>\n' +
    '            <input id="currentPassword" name="currentPassword" tabindex="tabOrderingIndex" ng-model="currentPassword.currentPassword" class="form-control" required type="password" />\n' +
    '            <div ng-messages="validation.getErrorList(\'currentPassword\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                <p ng-message="required" class="help-block">Please enter your current password</p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<new-password parent-form="parentForm" current-password="currentPassword.currentPassword" confirm-password="confirmPassword" password="password" tab-ordering-index="(tabOrderingIndex+1)" show-new-verbiage></new-password>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/desktopUi/DesktopUiTemplate.html',
    '﻿<!-- Mobile Top Nav & Menu Begin -->\n' +
    '<div ng-controller="HamburgerMenuController">\n' +
    '    <div ng-include="\'app/templates/menu/hamburgerMenu.html\'"></div>\n' +
    '</div>\n' +
    '<!-- Mobile Top Nav & Menu End -->\n' +
    '\n' +
    '<div id="special-redesign-background">\n' +
    '    <div id="special-redesign">\n' +
    '        <!--<div id="globalSpinner" us-spinner="{scale: 1.2}" spinner-key="globalSpinner"></div>-->\n' +
    '        <trigger-modal-unsupported-browser></trigger-modal-unsupported-browser>\n' +
    '        <app-spinner class="global-grid-spinner-position"></app-spinner>\n' +
    '        <div>\n' +
    '            <!-- Desktop Top Nav & Menu Begin -->\n' +
    '            <div id="top-menu-container">\n' +
    '                <div ng-controller="MegaMenuController">\n' +
    '                    <div ng-include="\'app/templates/menu/megaMenu.html\'"></div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <!-- Desktop Top Nav & Menu End -->\n' +
    '\n' +
    '            <div id="page-content-container">\n' +
    '                <div id="desktopUiViewRoot">\n' +
    '                    <div ui-view></div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <!-- Footer Begin -->\n' +
    '            <div id="footer-content-container">\n' +
    '                <div ng-controller="FooterController" class="desktopOnly">\n' +
    '                    <div ng-include="\'app/templates/menu/footer.html\'"></div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <!-- Footer End -->\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="footerCopyright desktopOnly">\n' +
    '    <div ng-include="\'/SitecoreViewRequestInterceptor_footerCopyright\'"></div>\n' +
    '</div>\n' +
    '\n' +
    '<!-- Footer Begin -->\n' +
    '<div ng-controller="FooterController" class="mobileOnly">\n' +
    '    <div ng-include="\'app/templates/menu/footer.html\'"></div>\n' +
    '</div>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/desktopUi/DesktopUiTemplateAlpha.html',
    '﻿<trigger-modal-unsupported-browser></trigger-modal-unsupported-browser>\n' +
    '<app-spinner class="global-grid-spinner-position"></app-spinner>\n' +
    '<menu-frame-component>\n' +
    '	<div id="desktopUiViewRoot">\n' +
    '		<div ui-view></div>\n' +
    '	</div>\n' +
    '</menu-frame-component>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/desktopViewMessageTemplate.html',
    '﻿<div class="mobileOnly">\n' +
    '    <p class="h3 top-buffer-md"><a ng-click="onMobileClick()">View desktop version</a> to see this content.</p>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/entryDropdownTemplate.html',
    '﻿<div ng-class="entryDropdownClass()" up-down-enter-interceptor="keyActions">\n' +
    '\n' +
    '   <input class="form-control" type="text" name="{{name}}" id="{{id}}" title="{{title}}" placeholder="{{placeholder}}" tabindex="{{tabIndex}}"\n' +
    '          ng-model="userInput" ng-change="inputChange()" ng-focus="inputFocus($event)" ng-blur="inputBlur($event)" autocomplete="off"/>\n' +
    '    <ul ng-show="dropdownVisible" ng-style="setWidth()" id="{{entryDropdownBoxId}}">\n' +
    '       <li ng-repeat="entry in filteredEntries" ng-class="selectedItemClass($index)" title=""\n' +
    '            ng-mousedown="selectItem(entry)" id="{{entryDropdownItemIdPrefix}}{{$index}}" ng-mousemove="setActive($index)">\n' +
    '            <span>{{getItemDisplayName(entry)}}</span>\n' +
    '        </li>\n' +
    '    </ul>\n' +
    '    <div ng-messages="validationService(form).getErrorListWithNullCheck(name)" ng-if="showValidation()" role="alert">\n' +
    '        <p ng-message="inputError" class="help-block">Please enter a valid license plate</p>\n' +
    '        <p ng-message="submissionError" class="help-block">Please enter a valid license plate</p>\n' +
    '    </div>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/ezTagRequestedTemplate.html',
    '﻿<div class="bottom-buffer-lg">\n' +
    '    <header class="header-spacing">\n' +
    '        <a href="" class="pull-right" ng-click="onEdit()" ng-show="showEdit" aria-label="Edit Requested EZ TAGs">Edit</a>\n' +
    '        <ng-transclude></ng-transclude>\n' +
    '        <hr />\n' +
    '    </header>\n' +
    '\n' +
    '    <ul class="vehicle-list">\n' +
    '        <li ng-repeat="vehicle in vehicleList">\n' +
    '            <div class="group-paragraphs">\n' +
    '                <p class="h3-mo h3-half-do font-avenir-medium">{{vehicle.nickname ? vehicle.nickname + " - " : ""}} License Plate: <span translation-skip class="customer-account-data" id="ez-tag-requested-license-plate">{{vehicle.licState}}-{{vehicle.licPlate}}</span></p>\n' +
    '                <p translation-skip class="h5"><span class="customer-account-data" id="ez-tag-requested-vehicle-details">{{vehicle.vehicleYear\n' +
    '}} {{vehicle.vehicleMake | capitalize}} {{vehicle.vehicleModel | capitalize}} {{vehicle.vehicleColor | capitalize}} <span class="nobr" ng-hide="hideClassCode">- {{classIdToLabel(vehicle.vehicleClassCode)}}</span></span></p>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <li ng-if="vehicleList.length === 0">\n' +
    '            <div class="group-paragraphs">\n' +
    '                <p class="h3-mo h3-half-do font-avenir-medium">None</p>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '    </ul>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/filesUploadTemplate.html',
    '﻿<ul class="vehicle-list">\n' +
    '    <li id="manage-ez-tags-list-item" ng-repeat="file in internalFiles">\n' +
    '        <div class="row no-margin-top bottom-buffer-sm">\n' +
    '            <file-upload id="file.id" validations="validations" file="file" form="form" should-show-delete="true" on-delete="processDelete" on-update="updateFunc()"></file-upload>\n' +
    '        </div>\n' +
    '    </li>\n' +
    '</ul>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/fileUploadTemplate.html',
    '﻿<div ng-class="validation.getErrorStatusClassFastWithNullCheck(id)">\n' +
    '    <div class="col-md-12 input-group">\n' +
    '        <span class="input-group-btn">\n' +
    '            <button class="btn upload-dir-add-button" ngf-select="submitFile($file)" ngf-accept="validations.FileExtensions">\n' +
    '                Browse&hellip;\n' +
    '            </button>\n' +
    '        </span>\n' +
    '        <input type="text" name="{{id}}" id="{{id}}" class="form-control upload-dir-input" readonly ng-model="fileName"/>\n' +
    '        <span class="input-group-btn">\n' +
    '            <button title="Remove Entry" class="close upload-dir-remove-button" type="button" ng-show="showDeleteButton" ng-click="onDelete()" aria-label="Remove Entry" aria-hidden="true">\n' +
    '                &times;\n' +
    '            </button>\n' +
    '        </span>\n' +
    '    </div>\n' +
    '    <div class="col-xs-12">\n' +
    '        <div class="red top-buffer-xs help-block" ng-show="showTypeValidationMessage">{{validations.FieldValidationMessage}}</div>\n' +
    '        <div class="red top-buffer-xs help-block" ng-show="showSizeValidationMessage">{{validations.FieldRequiredValidationMessage}}</div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/footerDesktopViewTemplate.html',
    '﻿<div class="bottom-buffer-sm">\n' +
    '    <a class="mobileOnly" ng-click="onMobileClick()">View Full Website</a>\n' +
    '    <a class="desktopOnly" ng-show="forceDesktopView" ng-click="onDesktopClick()">Show Mobile View</a>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/genericPagingControlTemplate.html',
    '﻿<div class="generic-paging-control col-xs-12 row no-padding-right no-padding ">\n' +
    '\n' +
    '    <span ng-if="vm.suspendedFlow" class="col-md-9 col-xs-12 pull-right">\n' +
    '        <span class="generic-paging-control-page-selection-wrapper">\n' +
    '            <span class="viol-button-border generic-page-button" ng-click="vm.onBackAll()"><span class="generic-full-back-button"></span></span>\n' +
    '            <span class="viol-button-border generic-page-button" ng-click="vm.onBack()"><span class="generic-back-button"></span></span>\n' +
    '            <span class="generic-paging-control-page-input-wrapper">\n' +
    '                page\n' +
    '                <input type="number" id="currentVisiblePageNumber" name="currentVisiblePageNumber" aria-label="Current Page Number" required\n' +
    '                       class="form-control viol-current-page-box" ng-change="vm.onPageNumberEntered(); $event.stopPropagation();" ng-model-options="{ debounce: 500 }"\n' +
    '                       ng-model="vm.visiblePageNumber" ng-disabled="vm.numberOfPages === 1" ng-pattern="/^([0-9]+)$/" />\n' +
    '                of {{vm.numberOfPages}}\n' +
    '            </span>\n' +
    '            <span class="viol-button-border generic-page-button" ng-click="vm.onForward()"><span class="generic-forward-button"></span></span>\n' +
    '            <span class="viol-button-border generic-page-button" ng-click="vm.onForwardAll()"><span class="generic-full-forward-button"></span></span>\n' +
    '        </span>\n' +
    '        <span ng-if="vm.showItemCount" class="generic-paging-control-item-count">{{vm.lowerItemIndex()}} - {{vm.upperItemIndex()}} of {{vm.totalItems}} {{vm.itemCountLabel}}</span>\n' +
    '        <span ng-if="!vm.hideSelector" class="generic-paging-control-dropdown-wrapper">\n' +
    '            <select id="pagingControlPageSize" aria-label="Items per Page" name="pagingControlPageSize" class="form-control generic-paging-control-dropdown" ng-model="vm.pageSize" ng-change="vm.onPageSizeChange()" convert-to-number>\n' +
    '                <option value="" class="invisible">Items per page</option>\n' +
    '                <option value="5">5</option>\n' +
    '                <option value="10">10</option>\n' +
    '                <option value="25">25</option>\n' +
    '                <option value="50">50</option>\n' +
    '            </select>\n' +
    '        </span>\n' +
    '    </span>\n' +
    '\n' +
    '    <span ng-if="!vm.suspendedFlow" class="col-md-9 col-xs-12">\n' +
    '        <span class="generic-paging-control-page-selection-wrapper">\n' +
    '            <span class="viol-button-border generic-page-button" ng-click="vm.onBackAll()"><span class="generic-full-back-button"></span></span>\n' +
    '            <span class="viol-button-border generic-page-button" ng-click="vm.onBack()"><span class="generic-back-button"></span></span>\n' +
    '            <span class="generic-paging-control-page-input-wrapper">\n' +
    '                page\n' +
    '                <input type="number" id="currentVisiblePageNumber" name="currentVisiblePageNumber" aria-label="Current Page Number" required\n' +
    '                       class="form-control viol-current-page-box" ng-change="vm.onPageNumberEntered(); $event.stopPropagation();" ng-model-options="{ debounce: 500 }"\n' +
    '                       ng-model="vm.visiblePageNumber" ng-disabled="vm.numberOfPages === 1" ng-pattern="/^([0-9]+)$/" />\n' +
    '                of {{vm.numberOfPages}}\n' +
    '            </span>\n' +
    '            <span class="viol-button-border generic-page-button" ng-click="vm.onForward()"><span class="generic-forward-button"></span></span>\n' +
    '            <span class="viol-button-border generic-page-button" ng-click="vm.onForwardAll()"><span class="generic-full-forward-button"></span></span>\n' +
    '        </span>\n' +
    '        <span ng-if="vm.showItemCount" class="generic-paging-control-item-count">{{vm.lowerItemIndex()}} - {{vm.upperItemIndex()}} of {{vm.totalItems}} {{vm.itemCountLabel}}</span>\n' +
    '        <span ng-if="!vm.hideSelector" class="generic-paging-control-dropdown-wrapper">\n' +
    '            <select id="pagingControlPageSize" aria-label="Items per Page" name="pagingControlPageSize" class="form-control generic-paging-control-dropdown" ng-model="vm.pageSize" ng-change="vm.onPageSizeChange()" convert-to-number>\n' +
    '                <option value="" class="invisible">Items per page</option>\n' +
    '                <option value="5">5</option>\n' +
    '                <option value="10">10</option>\n' +
    '                <option value="25">25</option>\n' +
    '                <option value="50">50</option>\n' +
    '            </select>\n' +
    '        </span>\n' +
    '    </span>\n' +
    '    <span ng-if="vm.showRecordCount && vm.invoiceCount > 0" class="col-md-3 align-right padding-right-25 padding-top-10 desktopOnly"> {{vm.invoiceCount}} record{{vm.invoiceCount > 1 ? \'s\' : \'\'}} found</span>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/helpAndSupport/faqBrowseCategoryTemplate.html',
    '﻿<div id="faq-browse-category" class="row">\n' +
    '    <div class="col-sm-8">\n' +
    '        <label for="faqCategorySearch">Browse by category</label>\n' +
    '        <select id="faqCategorySearch" ng-model="faqCategory" class="form-control" ng-options="category as category.Purpose for category in categories">\n' +
    '            <option value="" selected>Search by category</option>\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div class="col-sm-4">\n' +
    '        <button id="faq-search-button" class="btn pull-left padding-sides-sm" ng-click="onSearch(faqCategory)">Search</button>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/helpAndSupport/faqSearchBoxTemplate.html',
    '﻿<div id="faq-search-box" class="search">\n' +
    '    <label for="inputFaqSearch">Search by Keywords</label>\n' +
    '    <span class="glyphicon glyphicon-search fa-search" ng-click="onSearch(faqSearchInput)"></span>\n' +
    '    <input type="text" class="form-control input-sm" id="inputFaqSearch" ng-model="faqSearchInput" placeholder="Search" enter-key="onSearch(faqSearchInput)">\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/helpAndSupport/faqSearchTemplate.html',
    '﻿<div id="search-faq" class="row">\n' +
    '    <div class="col-sm-4">\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-10">\n' +
    '                <faq-search-box on-search="searchFaqKeyword"></faq-search-box>\n' +
    '            </div>\n' +
    '            <div class="col-sm-1" id="faq-search-separator"></div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="col-sm-5">\n' +
    '        <faq-browse-category categories="categories" on-search="searchFaqCategory"></faq-browse-category>\n' +
    '    </div>\n' +
    '    <div class="col-sm-3" ng-if="!hideViewAll">\n' +
    '        <div class="top-buffer-lg-half">\n' +
    '            <a ng-click="goToFaq()">View All Frequently Asked Questions</a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/helpAndSupport/mostFaqTemplate.html',
    '﻿<div id="most-faq" class="row" ng-repeat="faq in mostFaq">\n' +
    '    <div class="col-sm-12" ng-class="{\'bottom-buffer-sm\': !$last, \'no-margin-bottom\': $last}">\n' +
    '        <a ng-click="searchMostFaq(faq)">{{faq.Title}}</a>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/home/homeCarouselTemplate.html',
    '﻿<div id="homepage-main-slider" class="row" style="margin-bottom:4px;">\n' +
    '	<div class="col-sm-3 homepage-col-md-side-left">\n' +
    '		<div id="left-slider-container" class="carousel-background-image-container" ng-click="leftClick(); cancelRotate()" style="background-position:right;">\n' +
    '			<img id="left-slider-image" ng-src="{{leftSlide.image}}" alt="{{leftSlide.alt}}" align="right" class="carousel-background-images" />\n' +
    '			<div class="carousel-arrow-container">\n' +
    '				<img id="left-arrow" src="/Content/icons/leftCarouselArrow.png" class="carousel-arrows" />\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '	<div id="homepage-main-slider" class="col-sm-6 homepage-col-md-middle" style="border: 1px solid #47286c;">\n' +
    '		<div id="center-slider-image" class="hctra-slider" style="overflow:hidden;">\n' +
    '			<a href="{{activeSlide.SlideURL}}" target="{{activeSlide.targetFrame}}">\n' +
    '				<img style="display:block;height:auto;" ng-src="{{activeSlide.image}}" alt="{{activeSlide.alt}}" />\n' +
    '			</a>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '	<div class="col-sm-3 homepage-col-md-side-right">\n' +
    '		<div id="right-slider-container" class="carousel-background-image-container" ng-click="rightClick(); cancelRotate()">\n' +
    '			<img id="right-slider-image" ng-src="{{rightSlide.image}}" alt="{{rightSlide.alt}}" align="left" class="carousel-background-images" />\n' +
    '			<div class="carousel-arrow-container">\n' +
    '				<img id="right-arrow" src="/Content/icons/rightCarouselArrow.png" class="carousel-arrows" />\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/home/homeClosuresTemplate.html',
    '﻿<header>\n' +
    '    <rss ng-if="$ctrl.showRSSClosure" on-rss-click="$ctrl.goToRssFeedClosures()" class="rssClosuresIconHomePage pull-right"></rss>\n' +
    '    <h1 class="title-color">{{$ctrl.closureTitle}}</h1>\n' +
    '</header>\n' +
    '\n' +
    '<div ng-repeat="closure in $ctrl.shownClosures" class="closure-container">\n' +
    '    <a ng-if="closure.Title === \'Transtar Map\'" ng-href="{{closure.MapURL}}" target="_blank">\n' +
    '        <span class="bold">{{closure.Title}}</span>\n' +
    '        <span ng-if="closure.Subtitle">{{closure.Subtitle}}</span>\n' +
    '        <span ng-if="closure.ShortDescription" ng-bind-html="closure.ShortDescription"></span>\n' +
    '    </a>\n' +
    '    <a ng-if="closure.Title !== \'Transtar Map\'" ng-click="$ctrl.goToClosureArticle(closure.ItemID)" class="closure-font-size">\n' +
    '        <span class="bold">{{closure.Title}}</span>\n' +
    '        <span>{{closure.displayDate}}</span>\n' +
    '        <img ng-if="closure.ImageSrc" ng-src="{{closure.ImageSrc}}" alt="{{closure.ImageAltText}}" />\n' +
    '    </a>\n' +
    '</div>\n' +
    ' \n' +
    '<div id="closuresMarketingImages" ng-repeat="marketingImage in $ctrl.shownMarketingImages" class="closure-container">\n' +
    '    <img ng-src="{{marketingImage.Image}}" ng-click="$ctrl.goToUrl(marketingImage.ImageURL)" alt="{{marketingImage.ImageAltText}}" class="clickable" />\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/home/homeModuleTemplate.html',
    '﻿<module-button on-module-click="onModuleClick()">\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-4 module-img">\n' +
    '            <span class="helper"></span>\n' +
    '            <img class="btnIcon" ng-src="{{moduleObject.getImageSrc()}}" />\n' +
    '            <!--<img class="hover-image btnIcon" ng-src="{{moduleObject.getHoverImageSrc()}}" />-->\n' +
    '        </div>\n' +
    '        <div class="col-sm-8 no-padding-left">\n' +
    '            <h1 class="bottom-buffer-xs-half">{{moduleObject.getTitle()}}</h1>\n' +
    '            <div class="module-cms-content home-module-cms-text" ng-bind-html="moduleObject.getContent()"></div>\n' +
    '            <div>\n' +
    '                <button class="btn top-buffer-sm">{{moduleObject.getLinkTitle()}}</button>\n' +
    '                <a ng-click="goToFirstTimeLogin($event)" class="bold-do link-by-button" ng-show="isLoginModule" style="padding-top: 6px;">First time to login?</a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</module-button>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/home/homeNewsTemplate.html',
    '﻿<header>\n' +
    '    <rss on-rss-click="goToRssFeedNews()" class="rssNewsIconHomePage pull-right"></rss>\n' +
    '    <h1 class="title-color">News</h1>\n' +
    '</header>\n' +
    '\n' +
    '<div id="homeNews" ng-repeat="news in shownNews" class="news-container">\n' +
    '    <a ng-click="goToNewsArticle(news.ItemID)">\n' +
    '        <span class="bold">{{news.Title}}</span>\n' +
    '        <span ng-if="news.Subtitle" class="bold">{{news.Subtitle}}</span>\n' +
    '        <span ng-if="news.ShortDescription" ng-bind-html="news.ShortDescription"></span>\n' +
    '    </a>\n' +
    '</div>\n' +
    '\n' +
    '<div id="newsMarketingImages" ng-repeat="marketingImage in shownMarketingImages" class="news-container">\n' +
    '    <img ng-src="{{marketingImage.Image}}" ng-click="goToUrl(marketingImage.ImageURL)" alt="{{marketingImage.ImageAltText}}" class="clickable" />\n' +
    '</div>\n' +
    '\n' +
    '<ng-transclude ng-if="shownNews.length == 0"></ng-transclude>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/home/homeQuickLinksTemplate.html',
    '﻿<h1 class="title-color">Quick links</h1>\n' +
    '<div ng-bind-html="links"></div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/inputDropdown/inputDropdownTemplate.html',
    '﻿<div ng-class="inputDropdownClass()" up-down-enter-interceptor="keyActions">\n' +
    '\n' +
    '   <input class="form-control" type="text" name="{{requiredBindings.name}}" id="{{requiredBindings.id}}" title="{{title}}" \n' +
    '          placeholder="{{placeholder}}" tabindex="{{tabIndex}}"\n' +
    '          ng-model="userInput" ng-change="inputChange()" ng-focus="inputFocus($event)" ng-blur="inputBlur($event)" autocomplete="off"/>\n' +
    '    <ul ng-show="dropdownVisible" ng-style="setWidth()" id="{{inputDropdownBoxId}}">\n' +
    '       <li ng-repeat="item in filteredItems" ng-class="selectedItemClass($index)" title=""\n' +
    '            ng-mousedown="selectItem(item)" id="{{inputDropdownItemIdPrefix}}{{$index}}" ng-mousemove="setActive($index)">\n' +
    '            <span>{{requiredBindings.getItemDisplayName(item)}}</span>\n' +
    '        </li>\n' +
    '    </ul>\n' +
    '    <div ng-messages="validationService(requiredBindings.form).getErrorListWithNullCheck(requiredBindings.name)"\n' +
    '          ng-if="showValidation()" role="alert">\n' +
    '        <p ng-message="inputError" class="help-block">Please enter a valid license plate</p>\n' +
    '        <p ng-message="submissionError" class="help-block">Please enter a valid license plate</p>\n' +
    '    </div>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/moduleButtonTemplate.html',
    '﻿<div class="panel-button hover-gray-background"\n' +
    '     ng-click="onModuleClick()">\n' +
    '    <ng-transclude></ng-transclude>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/newAlternateEmailTemplate.html',
    '﻿<div class="row">\n' +
    '    <div class="form-group col-xs-12 col-md-4 col-lg-4" ng-class="validation.getErrorStatusClass(\'alternateEmail\')">\n' +
    '        <label tabindex="-1" for="alternateEmail">Alternate Email Address</label>\n' +
    '        <input type="email" id="alternateEmail" name="alternateEmail" tabindex="tabOrderingIndex" ng-change="removeDoubles(alternateEmail, \'alternateEmail\')" class="form-control" ng-model="alternateEmail" ng-maxlength="80" placeholder="username@domain.com" email-valid />\n' +
    '        <div ng-messages="validation.getErrorList(\'alternateEmail\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '            <p ng-message="required" class="help-block">Please enter a valid email address</p>\n' +
    '            <p ng-message="email" class="help-block">Please enter a valid email address</p>\n' +
    '            <p ng-message="emailValid" class="help-block">Please enter a valid email address</p>\n' +
    '            <p ng-message="maxlength" class="help-block">Please enter a valid email address</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group col-xs-12 col-md-4 col-lg-4" ng-class="validation.isValid(\'alternateEmail\') ? validation.getErrorStatusClass(\'confirmAlternateEmail\') : \'\'">\n' +
    '        <label tabindex="-1" for="confirmAlternateEmail">Confirm Alternate Email Address</label>\n' +
    '        <input id="confirmAlternateEmail" ng-model="confirmAlternateEmail" name="confirmAlternateEmail" tabindex="(tabOrderingIndex+1)" class="form-control" type="email" placeholder="username@domain.com" compare-to="alternateEmail" />\n' +
    '        <div ng-messages="validation.getErrorList(\'confirmAlternateEmail\')" ng-if="validation.hasSubmitted() && validation.isValid(\'alternateEmail\')" role="alert">\n' +
    '            <p ng-message="compareTo" class="help-block">Does not match alternate email address</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/newEmailTemplate.html',
    '﻿<div class="row">\n' +
    '    <div class="form-group col-xs-12 col-sm-5 col-md-4" ng-class="validation.getErrorStatusClass(\'email\')">\n' +
    '        <label tabindex="-1" for="email">Email Address</label>\n' +
    '        <input type="email" id="email" name="email" tabindex="tabOrderingIndex" ng-change="removeDoubles(email, \'email\')" class="form-control" ng-model="email" ng-maxlength="80" required placeholder="username@domain.com" email-valid remove-doubles />\n' +
    '        <div ng-messages="validation.getErrorList(\'email\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '            <p ng-message="required" class="help-block">Please enter a valid email address</p>\n' +
    '            <p ng-message="email" class="help-block">Please enter a valid email address</p>\n' +
    '            <p ng-message="emailValid" class="help-block">Please enter a valid email address</p>\n' +
    '            <p ng-message="maxlength" class="help-block">Please enter a valid email address</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group col-xs-12 col-sm-5 col-md-4" ng-class="validation.isValid(\'email\') ? validation.getErrorStatusClass(\'confirmEmail\') : \'\'">\n' +
    '        <label tabindex="-1" for="confirmEmail">Confirm Email Address</label>\n' +
    '        <input id="confirmEmail" ng-model="confirmEmail" name="confirmEmail" tabindex="(tabOrderingIndex+1)" class="form-control" type="email" placeholder="username@domain.com" compare-to="email" />\n' +
    '        <div ng-messages="validation.getErrorList(\'confirmEmail\')" ng-if="validation.hasSubmitted() && validation.isValid(\'email\')" role="alert">\n' +
    '            <p ng-message="compareTo" class="help-block">Email addresses do not match</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/newPasswordTemplate.html',
    '﻿<div class="row">\n' +
    '    <div class="form-group col-xs-12 col-sm-5 col-md-4" ng-class="validation.getErrorStatusClass(\'password\')">\n' +
    '        <label for="password"><span ng-show="showNewVerbiage">New</span> Password</label>\n' +
    '    <input id="password" name="password" tabindex="tabOrderingIndex" ng-model="password" class="form-control" required type="password" placeholder="must be at least 8 alpha-numeric characters" ng-pattern="/^[a-zA-Z0-9-_@.]+$/" ng-minlength="8" ng-maxlength="16" not-equal-to="currentPassword" />\n' +
    '    <div ng-messages="validation.getErrorList(\'password\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '        <p ng-message="required" class="help-block">Please enter a valid password</p>\n' +
    '        <p ng-message="minlength" class="help-block">Must be at least 8 characters</p>\n' +
    '        <p ng-message="maxlength" class="help-block">Must be no more than 16 characters</p>\n' +
    '        <p ng-message="pattern" class="help-block">Characters must be alphanumeric or @_.-</p>\n' +
    '        <p ng-message="notEqualTo" class="help-block">New password must be different from current password.</p>\n' +
    '    </div>\n' +
    '</div>\n' +
    '    <div class="form-group col-xs-12 col-sm-5 col-md-4" ng-class="validation.isValid(\'password\') ? validation.getErrorStatusClass(\'confirmPassword\') : \'\'">\n' +
    '        <label for="confirmPassword">Confirm <span ng-show="showNewVerbiage">New</span> Password</label>\n' +
    '    <input id="confirmPassword" ng-model="confirmPassword" name="confirmPassword" class="form-control" tabindex="(tabOrderingIndex+1)" type="password" compare-to="password" />\n' +
    '    <div ng-messages="validation.getErrorList(\'confirmPassword\')" ng-if="validation.hasSubmitted() && validation.isValid(\'password\')" role="alert">\n' +
    '        <p ng-message="compareTo" class="help-block">Passwords do not match</p>\n' +
    '    </div>\n' +
    '</div>\n' +
    '</div>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/newSecurityQuestionTemplate.html',
    '﻿<div class="row">\n' +
    '    <div class="form-group col-xs-12 col-sm-5 col-md-4" ng-class="validation.getErrorStatusClass(\'securityQuestionID\')">\n' +
    '        <label tabindex="-1" for="securityQuestionID">Select Security Question</label>\n' +
    '        <select tabindex="tabOrderingIndex" name="securityQuestionID" ng-model=\'securityQuestionID\' class="form-control" required id="securityQuestionID" ng-options="question.securityQuestionID as question.securityQuestion for question in securityQuestions">\n' +
    '            <option value="" disabled selected>Please select security question</option>\n' +
    '        </select>\n' +
    '        <div ng-messages="validation.getErrorList(\'securityQuestionID\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '            <p ng-message="required" class="help-block">Please select a new security question</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="row">\n' +
    '    <div class="form-group col-xs-12 col-sm-5 col-md-4" ng-class="validation.getErrorStatusClass(\'securityAnswer\')">\n' +
    '        <label tabindex="-1" for="securityAnswer">Your Answer</label>\n' +
    '        <input ng-trim="false" name="securityAnswer" type="password" ng-model="securityAnswer" class="form-control" required id="securityAnswer" tabindex="(tabOrderingIndex+1)" aria-required="true" ng-minlength="1" ng-maxlength="20" ng-pattern="/^[0-9a-zA-Z?\\.,\\\'\\u0022\\s]*$/" />\n' +
    '        <div ng-messages="validation.getErrorList(\'securityAnswer\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '            <p ng-message="required" class="help-block">Please enter a valid security answer</p>\n' +
    '            <p ng-message="pattern" class="help-block">Please enter a valid security answer</p>\n' +
    '            <p ng-message="minlength" class="help-block">Please enter a valid security answer</p>\n' +
    '            <p ng-message="maxlength" class="help-block">Please enter a valid security answer</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group col-xs-12 col-sm-5 col-md-4" ng-class="validation.isValid(\'securityAnswer\') ? validation.getErrorStatusClass(\'confirmSecurityAnswer\') : \'\'">\n' +
    '        <label tabindex="-1" for="confirmSecurityAnswer">Confirm Your Answer</label>\n' +
    '        <input type="password" ng-trim="false" name="confirmSecurityAnswer" ng-model="confirmSecurityAnswer" class="form-control" required id="confirmSecurityAnswer" tabindex="(tabOrderingIndex+2)" aria-required="true" compare-to="securityAnswer" />\n' +
    '        <div ng-messages="validation.getErrorList(\'confirmSecurityAnswer\')" ng-if="validation.hasSubmitted() && validation.isValid(\'securityAnswer\')" role="alert">\n' +
    '            <p ng-message="compareTo" class="help-block">Security answers do not match</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/pagingControlTemplate.html',
    '﻿<div class="row">\n' +
    '    <div class="col-sm-8 col-lg-7">\n' +
    '         <div class="form-group" ng-class="validations.getErrorStatusClassFastWithNullCheck(\'currentVisiblePageNumber\')">\n' +
    '             <table align="right">\n' +
    '                 <tr>\n' +
    '                     <td><div ng-if="data.numberOfPages > 0" class="viol-button-border viol-page-button" ng-click="firstPage()"><div class="viol-full-back-button"></div></div></td>\n' +
    '                     <td><a href="{{navigationUrls.previousPage}}" class="paging-control-tag"><div ng-if="data.numberOfPages > 0" class="viol-button-border viol-page-button" ><div class="viol-back-button"></div></div></a></td>\n' +
    '                     <td ng-if="data.numberOfPages > 0" class="viol-page-control-box">\n' +
    '                         <div>\n' +
    '                             page\n' +
    '                             <input type="number" id="currentVisiblePageNumber" name="currentVisiblePageNumber" aria-label="Current Page Number" required\n' +
    '                                    class="form-control viol-current-page-box" ng-change="manualPageUpdate()" ng-model-options="{ debounce: 1000 }"\n' +
    '                                    ng-model="userInputData.visiblePageNumber" ng-disabled="data.numberOfPages === 1" ng-pattern="/^([0-9]+)$/" min="1" max="{{data.numberOfPages}}" />\n' +
    '                             of {{data.numberOfPages}}\n' +
    '                         </div>\n' +
    '                     </td>\n' +
    '                     <td><a href="{{navigationUrls.nextPage}}" class="paging-control-tag"><div ng-if="data.numberOfPages > 0" class="viol-button-border viol-page-button" ><div class="viol-forward-button"></div></div></a></td>\n' +
    '                     <td><div ng-if="data.numberOfPages > 0" class="viol-button-border viol-page-button" ng-click="lastPage()"><div class="viol-full-forward-button"></div></div></td>\n' +
    '                 </tr>\n' +
    '                 <tr>\n' +
    '                     <th colspan="5">\n' +
    '                         <div class="paging-error-message-alignment" ng-messages="validations.getErrorListWithNullCheck(\'currentVisiblePageNumber\')" role="alert">\n' +
    '                             <p ng-message="required" class="help-block">Please enter a valid page number</p>\n' +
    '                             <p ng-message="number" class="help-block">Please enter a valid page number</p>\n' +
    '                             <p ng-message="pattern" class="help-block">Please enter a valid page number</p>\n' +
    '                             <p ng-message="min" class="help-block">Please enter a valid page number</p>\n' +
    '                             <p ng-message="max" class="help-block">Page number must be less than {{data.numberOfPages+1}}</p>\n' +
    '                         </div>\n' +
    '                     </th>\n' +
    '                 </tr>\n' +
    '             </table>\n' +
    '         </div>\n' +
    '    </div>\n' +
    '    <div class="col-sm-offset-1 col-md-offset-1 col-lg-offset-3 col-sm-3 col-md-3 col-lg-2">\n' +
    '        <select id="pagingControlPageSize" aria-label="Items per Page" name="pagingControlPageSize" class="form-control paging-control-dropdown" ng-model="data.pageSize" ng-change="adjustPageSize()" convert-to-number>\n' +
    '            <option value=""  class="invisible">Items per page</option>\n' +
    '            <option value="5">5</option>\n' +
    '            <option value="10">10</option>\n' +
    '            <option value="25">25</option>\n' +
    '            <option value="50">50</option>\n' +
    '        </select>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/pagingInfiniteScrollTemplate.html',
    '﻿<div infinite-scroll="mobileSearch()" infinite-scroll-distance=\'0\' infinite-scroll-disabled="infiniteScrollIsDisabled" >\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-12">\n' +
    '            <h2 id="{{titleId}}" class="pull-left no-margin-top-do no-margin-bottom-do">{{titleType}} Search Results</h2>\n' +
    '            <h5 ng-if="totalItems > 0" class="pull-right top-buffer-md-half-mo no-margin-bottom-do top-buffer-xs-half-do">{{totalItems}} items found</h5>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="desktopOnly">\n' +
    '        <div class="row no-margin no-padding"></div>\n' +
    '        <hr class="hr-base" />\n' +
    '    </div>\n' +
    '    <div class="bottom-buffer-xl" ng-repeat="article in articleArray">\n' +
    '        <header class="header-spacing">\n' +
    '            <div class="row">\n' +
    '                <div class="col-xs-12">\n' +
    '                    <h2 class="no-margin-bottom" id="{{article.itemID}}">{{article.title}}</h2>\n' +
    '                </div>\n' +
    '                <div class="col-xs-12">\n' +
    '                    <h4 ng-if="archiveTypeChecker.isClosures && article.subtitle" class="no-margin-bottom top-buffer-xs">\n' +
    '                        {{article.subtitle}}\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="col-xs-12">\n' +
    '                    <h6 ng-if="archiveTypeChecker.isFaqs && article.title != \'Transtar Map\'" class="no-margin-bottom">\n' +
    '                        Last Modified {{article.__Updated | date: \'longDate\'}}\n' +
    '                    </h6>\n' +
    '                    <h6 ng-if="archiveTypeChecker.isNews && article.title != \'Transtar Map\'" class="no-margin-bottom">\n' +
    '                        Last Modified {{article.newsDisplayDate | date: \'longDate\'}}\n' +
    '                    </h6>\n' +
    '                    <h6 ng-if="archiveTypeChecker.isClosures && article.displayDate && article.title != \'Transtar Map\'" class="no-margin-bottom top-buffer-xs-half">\n' +
    '                        {{article.displayDate}}\n' +
    '                    </h6>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <hr class="desktopOnly" ng-show="hasArticles" />\n' +
    '        </header>\n' +
    '\n' +
    '        <read-more-or-less [title-name]="article.title" [long-content]="article.longDescription" [short-content]="article.shortDescription" [default-to-more]="false" [item-path]="article.itemPath" [item-id]="article.itemID"></read-more-or-less>\n' +
    '\n' +
    '        <div ng-if="!hasArticles" class="desktopOnly row bottom-buffer-xl top-buffer-xl"></div>\n' +
    '    </div>\n' +
    '    <div ng-show="!hasArticles">{{articleNotFoundText}}</div>\n' +
    '    <div class="row desktopOnly">\n' +
    '        <div class="col-xs-12">\n' +
    '            <paging-control data="pagingObject" search-function="search()" form="form" navigation-urls="navigationUrls"></paging-control>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/paymentMethod.html',
    '﻿<div class="bottom-buffer-sm" ng-if="lockType">\n' +
    '    <p class="h4">\n' +
    '        Payment Method:\n' +
    '        <span class="font-avenir-medium" ng-show="billingtypeParent.billingType === \'CREDIT\'">Credit Card</span>\n' +
    '        <span class="font-avenir-medium" ng-show="billingtypeParent.billingType === \'EFT\'">Bank Account</span>\n' +
    '    </p>\n' +
    '</div>\n' +
    '\n' +
    '<div class="form-group" ng-class="getErrorStatusClass(paymentsform, \'paymentmethod\')" ng-if="!lockType">\n' +
    '    <label for="paymentmethod">Select Payment Method</label>\n' +
    '    <select class="form-control payment-method-select" ng-class="isItalic()" id="paymentmethod" name="paymentmethod" ng-model="billingtypeParent.billingType" ng-change="changeType()">\n' +
    '        <option ng-show="billingtypeParent.billingType === \'\'" value="" disabled selected>Select Payment Method</option>\n' +
    '        <option value="CREDIT">Credit Card</option>\n' +
    '        <option value="EFT">Bank Account</option>\n' +
    '    </select>\n' +
    '    <div ng-messages="getErrorList(paymentsform, \'paymentmethod\')" ng-if="hasSubmitted(paymentsform)" role="alert">\n' +
    '        <p ng-message="required" class="help-block">Please select a payment type</p>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/personalInfoPartial.html',
    '﻿<div id="personal-info-directive" ng-class="isAccountInformation ? \'\' : \'bottom-buffer-lg\'">\n' +
    '	<header ng-if="!isAccountInformation" class="header-spacing">\n' +
    '		<a ng-if="!hideEdit" href="" class="pull-right" ng-click="onEdit()" aria-label="Edit Personal Info" aria-disabled="{{(!hideEdit)}}">Edit</a>\n' +
    '        <h2 class="h1-mo" ng-class="{\'no-margin-top-do\': isFirstSection}"><ng-transclude></ng-transclude> Personal Information</h2>\n' +
    '		<hr />\n' +
    '	</header>\n' +
    '\n' +
    '    <div ng-if="!isAccountInformation" class="group-paragraphs">\n' +
    '        <p translation-skip class="h1-half-mo h2-half-do no-margin-bottom customer-account-data" ng-show="personalInfo.companyName">{{personalInfo.companyName | capitalize}}</p>\n' +
    '        <p translation-skip class="h1-half-mo h2-half-do no-margin-bottom customer-account-data">{{personalInfo.firstName + " " + personalInfo.lastName | capitalize}}</p>\n' +
    '\n' +
    '        <p class="h4" ng-show="personalInfo.companyTaxId">Tax ID: <span translation-skip class="customer-account-data">{{personalInfo.companyTaxId | taxId}}</span></p>\n' +
    '\n' +
    '        <p class="h4" ng-show="personalInfo.driverLicNbr"><span translation-skip>{{personalInfo.driverLicState}}</span> <span class="sr-only">Driver\'s License</span><span class="dontread">DL:</span> <span translation-skip class="customer-account-data">{{personalInfo.driverLicNbr | driversLicense}}</span></p>\n' +
    '    </div>\n' +
    '\n' +
    '    <!--Duplicated below-->\n' +
    '    <div translation-skip ng-if="!isAccountInformation" class="group-paragraphs" ng-if="!hideContactInfo">\n' +
    '        <p class="h4 bottom-buffer-2 customer-account-data">{{personalInfo.homePhoNbr | telephone}}</p>\n' +
    '        <p class="h4 customer-account-data" ng-if="personalInfo.workPhonePlusExt">{{personalInfo.workPhonePlusExt | telephoneWithExt}}</p>\n' +
    '        <p class="h4 customer-account-data" ng-if="personalInfo.workPhoNbr && !personalInfo.workPhonePlusExt">{{personalInfo.workPhoNbr | telephone}} {{(personalInfo.workPhoExt ? " ext " + personalInfo.workPhoExt : "")}}</p>\n' +
    '        <p class="h4 text-lowercase customer-account-data">{{personalInfo.emailAddress}}</p>\n' +
    '        <p class="h4 text-lowercase customer-account-data">{{personalInfo.altEmailAddress}}</p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-if="isAccountInformation" class="bottom-buffer-md" ng-if="!hideContactInfo">\n' +
    '        <div class="row">\n' +
    '            \n' +
    '            <div class="h4 col-xs-6 label-format">\n' +
    '                Phone:\n' +
    '            </div>\n' +
    '            <div translation-skip class="h4 customer-account-data col-xs-6 no-padding-left">\n' +
    '                {{personalInfo.homePhoNbr | telephone}}\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="row" ng-if="personalInfo.workPhonePlusExt">\n' +
    '            \n' +
    '            <div class="h4 col-xs-6 label-format">\n' +
    '                Alt. Phone:\n' +
    '            </div>\n' +
    '            <div translation-skip class="h4 customer-account-data col-xs-6 no-padding-left">\n' +
    '                {{personalInfo.workPhonePlusExt | telephoneWithExt}}\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="row" ng-if="personalInfo.workPhoNbr && !personalInfo.workPhonePlusExt">\n' +
    '\n' +
    '            <div class="h4 col-xs-6 label-format">\n' +
    '                Alt. Phone:\n' +
    '            </div>\n' +
    '            <div translation-skip class="h4 customer-account-data col-xs-6 no-padding-left">\n' +
    '                {{personalInfo.workPhoNbr | telephone}} {{(personalInfo.workPhoExt ? " ext " + personalInfo.workPhoExt : "")}}\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '\n' +
    '            <div class="h4 col-xs-6 label-format">\n' +
    '                Email:\n' +
    '            </div>\n' +
    '            <div translation-skip class="h4 text-lowercase customer-account-data col-xs-6 no-padding-left">\n' +
    '                {{personalInfo.emailAddress}}\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div ng-if="personalInfo.altEmailAddress" class="row">\n' +
    '\n' +
    '            <div class="h4 col-xs-6 label-format">\n' +
    '                Alt. Email:\n' +
    '            </div>\n' +
    '            <div translation-skip class="h4 text-lowercase customer-account-data col-xs-6 no-padding-left">\n' +
    '                {{personalInfo.altEmailAddress}}\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row" ng-if="isAccountInformation">\n' +
    '        <div class="h4 col-xs-6 label-format">\n' +
    '            Address:\n' +
    '        </div>\n' +
    '        <div class="col-xs-6 no-padding-left">\n' +
    '            <address-display address="personalInfo" international="personalInfo.international" display-country="personalInfo.displayCountry" ng-if="!hideAddressInfo"></address-display>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <address-display address="personalInfo" international="personalInfo.international" display-country="personalInfo.displayCountry" ng-if="!hideAddressInfo && !isAccountInformation"></address-display>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/printLinkTemplate.html',
    '﻿<a ng-click="clickedPrint()">\n' +
    '    <div class="grayBrickIcon"></div>{{msg}}\n' +
    '</a>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/storefront/storefrontMenuTemplate.html',
    '﻿ <div class="workMenuItem"\n' +
    '      ng-repeat="item in workItems"\n' +
    '      ng-show="item.isSelected && !item.isShadowItem"\n' +
    '      ng-click="skipToItem(item)"\n' +
    '      ng-class="{ \'active\': isItemCurrent(item), \'skippable\': (!isItemCurrent(item) && currentItem().isSkippable) && !item.isCompleted && item.isSelected && !item.isUnavailable, \'complete\': item.isCompleted}">\n' +
    '     <div>\n' +
    '         <img src="{{currentItem().id === item.id ? item.unselectedIcon.image: item.selectedIcon.image}}" \n' +
    '              alt="{{currentItem().id === item.id ? item.unselectedIcon.alt: item.selectedIcon.alt}}"/>\n' +
    '     </div>\n' +
    '     <label>{{item.storefrontDisplayName}}</label>\n' +
    '     <div class="workItemSaveState" ng-if="item.isCompleted"><img src={{taskCompleteIcon.Url}} alt={{taskCompleteIcon.Alt}} /></div>\n' +
    '     <div class="workItemSaveState" ng-if="item.isUnsaved"><img src={{taskNotCompleteIcon.Url}} alt={{taskNotCompleteIcon.Alt}} /></div>\n' +
    ' </div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/storefront/storefrontModalCloseTemplate.html',
    '﻿<img class="closeImg" src="{{modalCloseIcon.Url}}" alt="{{modalCloseIcon.Alt}}" />');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/storefront/storefrontModalGoBackTemplate.html',
    '﻿<a class="goBackLink">\n' +
    '    <img src="{{modalBackIcon.Url}}" alt="{{modalBackIcon.Alt}}" />\n' +
    '    {{storefrontModalGoBack}}\n' +
    '</a>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/storefront/storefrontNavigationTemplate.html',
    '﻿<button ng-transclude ng-if="!hideProceed" ng-disabled="isProceedDisabled" ng-click="continueAction()" ng-class="transcludedClasses"\n' +
    '></button>\n' +
    '\n' +
    '<a ng-if="showCancel" ng-click="cancelAction()"\n' +
    '   class="pull-right padding-top-sm bottom-buffer-sm-half right-buffer-lg-do right-buffer-md-mo"\n' +
    '   aria-label="Cancel"\n' +
    '>Cancel</a>\n' +
    '\n' +
    '<a ng-if="showPrevious" ng-click="gotoPrevious()"\n' +
    '   class="pull-left padding-top-sm bottom-buffer-sm-half"\n' +
    '   aria-label="Previous"\n' +
    '   >Previous</a>\n' +
    '\n' +
    '<a ng-if="showLoginHelp" ng-transclude ng-click="showLoginHelpMessage()"></a>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/storefront/storefrontUiTemplate.html',
    '﻿<div ng-if="!isReadyToUse()" class="initializing">\n' +
    '    <img ng-if="backgroundImage" class="storefrontBackground" src={{backgroundImage.image}} alt={{backgroundImage.alt}} />\n' +
    '    <h1>Storefront Initializing...\n' +
    '        <br/>\n' +
    '        <strong>Machine name: <span ng-bind="machineName"></span> </strong>\n' +
    '        <br />\n' +
    '        <strong>Host: <span ng-bind="host"></span></strong>\n' +
    '    </h1>\n' +
    '\n' +
    '</div>\n' +
    '<div ng-if="isReadyToUse()">\n' +
    '    <app-toaster-container ng-if="!isFullSiteViewActive()" class="refresh-2020"></app-toaster-container>\n' +
    '\n' +
    '    <img ng-if="backgroundImage && !isFullSiteViewActive()" class="storefrontBackground" ng-class="{\'transition\': !showBackgroundImage && transitioningState}" src={{backgroundImage.image}} alt={{backgroundImage.alt}} />\n' +
    '\n' +
    '    <div class="storefrontWorkflowFunctions">\n' +
    '        <button ng-if="showWorkflowFunctions()" class="exit-button storefrontSmallButton exclude-global-disable" ng-click="finish()">Exit</button>\n' +
    '        <kiosk-language-select-component ng-if="showTranslationSelect()"></kiosk-language-select-component>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-if="!isFullSiteViewActive()" ng-class="{\'transition\': isFullSiteViewActive() && transitioningState}">\n' +
    '        <div ng-show="showMenu()">\n' +
    '            <div id="globalSpinner" us-spinner="{scale: 1.2}" spinner-key="globalSpinner"></div>\n' +
    '        </div>\n' +
    '        <div>\n' +
    '            <div class="workItemActivityHeader">\n' +
    '                <img class="storefrontLogo" src={{storefrontLogo.Url}} alt={{storefrontLogo.Alt}} ng-click="hardReset()">\n' +
    '            </div>\n' +
    '            <div ng-class="{\'transitionScale\': !transitionSubView && transitioningState}" tsv="{{transitionSubView}}">\n' +
    '                <storefront-menu ng-show="showMenu()" class="workMenuitems"></storefront-menu>\n' +
    '                <div ng-class="{\'workitemActivity\':showMenu()}">\n' +
    '                    <div ng-if="showMainView() && !isCmsContentView()" ng-class="{\'transition\': (transitionSubView && transitioningState) || externalModalOpen()}">\n' +
    '\n' +
    '                        <div ng-if="templateToUse() == \'\'">\n' +
    '                            <div storefront-link-stripper ui-view></div>\n' +
    '                        </div>\n' +
    '                        <div ng-if="templateToUse() != \'\'">\n' +
    '                            <div storefront-link-stripper ui-view="{{templateToUse()}}"></div>\n' +
    '                        </div>\n' +
    '\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <kiosk-google-translated-icon-component></kiosk-google-translated-icon-component>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-if="isFullSiteViewActive()">\n' +
    '        <desktop-ui id="d-ui" force-fullscreen class="storefrontFullSite"></desktop-ui>\n' +
    '    </div>\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/vehicleInformationTemplate.html',
    '﻿<div class="row" ng-show="allDataHasBeenLoaded">\n' +
    '    <div class="col-xs-12 col-sm-12">\n' +
    '\n' +
    '        <div class="row bottom-buffer-lg-do bottom-buffer-md-mo">\n' +
    '            <div class="col-xs-12">\n' +
    '                <header class="header-spacing">\n' +
    '                    <ng-transclude></ng-transclude>\n' +
    '                    <hr class="desktopOnly" />\n' +
    '                </header>\n' +
    '\n' +
    '\n' +
    '            </div>\n' +
    '\n' +
    '            <div id="licPlateInfo" class="col-xs-12 col-sm-12">\n' +
    '                <div class="row">\n' +
    '                    <div class="col-xs-5 col-sm-2">\n' +
    '                        <label for="licState">State</label>\n' +
    '                        <select translation-skip id="licState" name="licState" ng-model=\'vehicleInfo.licState\' class="form-control" ng-options="state.stateCode as state.stateCode for state in statesList"></select>\n' +
    '                    </div>\n' +
    '                    <div class="col-xs-7 col-sm-4 no-padding-left margin-bottom-20" ng-class="validation.getErrorStatusClass(\'licPlate\')">\n' +
    '                        <label for="licPlate" translation-skip>License Plate Number</label>\n' +
    '                        <input id="licPlate" type="text" name="licPlate" ng-model="vehicleInfo.licPlate" class="form-control" ng-pattern="/^[a-zA-Z0-9]{0,15}$/" required capitalize-all ng-blur="onBlur()" />\n' +
    '                        <div ng-messages="validation.getErrorList(\'licPlate\')" ng-if="validation.hasSubmitted()" role="alert" ng-class="validation.getErrorStatusClass(\'licPlate\')">\n' +
    '                            <p ng-message="required" class="help-block">Please enter a valid license plate number</p>\n' +
    '                            <p ng-message="pattern" class="help-block">Please enter a valid license plate number</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div id="paperPlate" class="col-xs-12 col-sm-6 pull-left" ng-hide="hideTempPlate" ng-class="validation.getErrorStatusClass(\'paperPlateOptions\')">\n' +
    '                        <div>\n' +
    '                            <label for="paperPlate" ng-bind-html="paperPlateQuestion | trusted"></label>\n' +
    '                        </div>\n' +
    '                        <div>\n' +
    '                            <input id="paperPlateYesRdo" name="paperPlateOptions" type="radio" ng-model="vehicleInfo.isPaperPlate" ng-value="true" required />\n' +
    '                            <label for="paperPlateYesRdo" style="margin:10px;">Yes</label>\n' +
    '\n' +
    '                            <input id="paperPlateNoRdo" name="paperPlateOptions" type="radio" ng-model="vehicleInfo.isPaperPlate" ng-value="false" required />\n' +
    '                            <label for="paperPlateNoRdo" style="margin:10px;">No</label>\n' +
    '                        </div>\n' +
    '                        <div ng-messages="validation.getErrorList(\'paperPlateOptions\')" ng-if="validation.hasSubmitted()" role="alert" ng-class="validation.getErrorStatusClass(\'paperPlateOptions\')">\n' +
    '                            <p ng-message="required" class="help-block" ng-bind-html="paperPlateValidationText | trusted"></p>\n' +
    '                        </div>\n' +
    '                        <h6 ng-show="vehicleInfo.isPaperPlate" class="no-margin-bottom">\n' +
    '                            <span ng-bind-html="paperPlateAcknowledgement | trusted"></span>\n' +
    '                        </h6>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="bottom-buffer-lg-do">\n' +
    '            <div class="row">\n' +
    '                <div class="col-xs-12">\n' +
    '                    <header class="header-spacing">\n' +
    '                        <label for="classification" class="no-margin-bottom">Select Vehicle Classification</label>\n' +
    '                    </header>\n' +
    '                    <label class="sr-only" for="classification">Select Vehicle Classification</label>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row bottom-buffer-sm-do">\n' +
    '                <div class="col-xs-12">\n' +
    '                    <div class="row top-buffer-xs">\n' +
    '                        <div id="classification">\n' +
    '                            <div class="col-xs-4 no-padding-right-mo">\n' +
    '                                <select translation-skip title="vehicleClassCode"\n' +
    '                                        ng-disabled="isEdit && vehicleInfo.motorcycle"\n' +
    '                                        ng-change="classChange()"\n' +
    '                                        ng-model=\'vehicleInfo.vehicleClassCode\'\n' +
    '                                        class="form-control"\n' +
    '                                        ng-options="class.value as class.label for class in classList"\n' +
    '                                        required name="vehicleClassCode"></select>\n' +
    '                            </div>\n' +
    '                            <div class="col-xs-8 no-padding-right">\n' +
    '                                <div id="vehicle-axle-image">\n' +
    '                                    <img alt="2-Axles" ng-show="vehicleInfo.vehicleClassCode == \'2\'" src="/Content/images/2-Axle.png" />\n' +
    '                                    <img alt="3-Axles" ng-show="vehicleInfo.vehicleClassCode == \'3\'" src="/Content/images/3-Axle.png" />\n' +
    '                                    <img alt="4-Axles" ng-show="vehicleInfo.vehicleClassCode == \'4\'" src="/Content/images/4-Axle.png" />\n' +
    '                                    <img alt="5-Axles" ng-show="vehicleInfo.vehicleClassCode == \'5\'" src="/Content/images/5-Axle.png" />\n' +
    '                                    <img alt="6+-Axles" ng-show="vehicleInfo.vehicleClassCode == \'6\'" src="/Content/images/6-Axle.png" />\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row top-buffer-sm-mo bottom-buffer-sm-mo">\n' +
    '                <div ng-if="hasSelectedTwoAxle() && (vehicleInfo.motorcycle || !isEdit)" class="col-xs-12">\n' +
    '                    <label class="checkbox-inline h5" ng-disabled="disableMotorcycle">\n' +
    '                        <input ng-disabled="isEdit" ng-model="vehicleInfo.motorcycle" id="motorcycle" type="checkbox" />\n' +
    '                        <p class="top-buffer-3 no-margin-bottom">Motorcycle</p>\n' +
    '                    </label>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <!-- Requirement 60300: Motorocycle flag change -->\n' +
    '            <!--<div class="row top-buffer-sm-mo bottom-buffer-sm-mo">\n' +
    '                <div ng-if="hasSelectedTwoAxle()" class="col-xs-12">\n' +
    '                    <label class="checkbox-inline h5" ng-disabled="disableMotorcycle">\n' +
    '                        <input ng-model="vehicleInfo.motorcycle" id="motorcycle" type="checkbox" />\n' +
    '                        <p class="top-buffer-3 no-margin-bottom">Motorcycle</p>\n' +
    '                    </label>\n' +
    '                </div>\n' +
    '            </div>-->\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="col-xs-12 col-sm-12">\n' +
    '        <div class="row">\n' +
    '            <div class="form-group bottom-buffer-sm-half col-xs-12 col-sm-4 col-md-3" ng-class="validation.getErrorStatusClass(\'vehicleYear\')">\n' +
    '                <label for="vehicleYear">Year</label>\n' +
    '                <select translation-skip title="vehicleYear" name="vehicleYear"\n' +
    '                        ng-model=\'vehicleInfo.vehicleYear\'\n' +
    '                        ng-options="year.toString() as year.toString() for year in yearsList"\n' +
    '                        class="form-control"\n' +
    '                        required>\n' +
    '                    <option value="" disabled selected>Select the year</option>\n' +
    '                </select>\n' +
    '                <div ng-messages="validation.getErrorList(\'vehicleYear\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                    <p ng-message="required" class="help-block">Please select a year</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group bottom-buffer-sm-half col-xs-12 col-sm-4 col-md-3" ng-class="validation.getErrorStatusClass(\'vehicleMake\')">\n' +
    '                <label for="vehicleMake">Make</label>\n' +
    '                <select translation-skip title="vehicleMake" ng-model=\'vehicleInfo.vehicleMake\' name="vehicleMake" class="form-control" ng-options="make.vehicleMake.toUpperCase() as make.vehicleMake for make in makesList" required>\n' +
    '                    <option value="" disabled selected>Select the make</option>\n' +
    '                </select>\n' +
    '                <div ng-messages="validation.getErrorList(\'vehicleMake\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                    <p ng-message="required" class="help-block">Please select a make</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group bottom-buffer-sm-half col-xs-12 col-sm-4 col-md-3" ng-class="validation.getErrorStatusClass(\'vehicleModel\')">\n' +
    '                <label for="vehicleModel">Model</label>\n' +
    '                <input id="vehicleModel" type="text" name="vehicleModel" ng-model="vehicleInfo.vehicleModel" class="form-control" required ng-pattern="/^[0-9a-zA-Z\\-\\,\\.\\\'\\s]*$/" ng-maxlength="30" />\n' +
    '                <div ng-messages="validation.getErrorList(\'vehicleModel\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                    <p ng-message="required" class="help-block">Please enter a valid model</p>\n' +
    '                    <p ng-message="pattern" class="help-block">Please enter a valid model</p>\n' +
    '                    <p ng-message="maxlength" class="help-block">Please enter a valid model</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group bottom-buffer-sm-half col-xs-12 col-sm-4 col-md-3" ng-class="validation.getErrorStatusClass(\'vehicleColor\')">\n' +
    '                <label for="vehicleColor">Color</label>\n' +
    '                <input id="vehicleColor" type="text" name="vehicleColor" ng-model="vehicleInfo.vehicleColor" class="form-control" required ng-pattern="/^[a-zA-Z\\s]*$/" ng-maxlength="20" />\n' +
    '                <div ng-messages="validation.getErrorList(\'vehicleColor\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                    <p ng-message="required" class="help-block">Please enter a valid color</p>\n' +
    '                    <p ng-message="pattern" class="help-block">Please enter a valid color</p>\n' +
    '                    <p ng-message="maxlength" class="help-block">Please enter a valid color</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group col-xs-12 col-sm-6 col-md-4" ng-class="validation.getErrorStatusClass(\'nickname\')">\n' +
    '                <label for="nickname">Vehicle Nickname <small>(Optional)</small></label>\n' +
    '                <input aria-label="Example. My Car or Fleet Number 215" role="button" id="nickname" type="text" name="nickname" ng-model="vehicleInfo.nickname" class="form-control" placeholder="Ex. \'My Car\' or \'Fleet Number 215\'" ng-pattern="/^[0-9a-zA-Z\\-\\,\\.\\\'\\s]*$/" ng-maxlength="30" />\n' +
    '                <div ng-messages="validation.getErrorList(\'nickname\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                    <p ng-message="maxlength" class="help-block">Please enter a valid nickname</p>\n' +
    '                    <p ng-message="pattern" class="help-block">Please enter a valid nickname</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/Violations/step2/addressEntryTemplate.html',
    '﻿\n' +
    '<div id="address-entry-template">\n' +
    '	<!--<input type="checkbox" ng-model="international" ng-click="fetchCountries()" />&nbsp; My billing address is outside the U.S. <br /><br />-->\n' +
    '\n' +
    '	<div class="bottom-buffer-sm">\n' +
    '		<div ng-if="noTransHeader">\n' +
    '			<h2 class="h1-mo" ng-if="billingtype === \'\'">{{defaultHeaderText.blank}}</h2>\n' +
    '			<h2 class="h1-mo" ng-show="billingtype === \'CREDIT\'">{{defaultHeaderText.credit}}</h2>\n' +
    '			<h2 class="h1-mo" ng-show="billingtype === \'EFT\'">{{defaultHeaderText.eft}}</h2>\n' +
    '			<hr class="desktopOnly hr-base" />\n' +
    '		</div>\n' +
    '\n' +
    '		<ng-transclude ng-if="!noTransHeader" id="addressEntryTransclude"></ng-transclude>\n' +
    '\n' +
    '		<span class="checkbox h5">\n' +
    '			<label for="international" class="sr-only">My {{billingOrMailing ? billingOrMailing : \'billing\'}} address is outside the U.S.</label>\n' +
    '            <input id="international" type="checkbox" name="accept" ng-model="international" ng-change="checkInternationalBox()" style="margin-top: 2px;" />My {{billingOrMailing ? billingOrMailing : \'billing\'}} address is outside the U.S.\n' +
    '		</span>\n' +
    '\n' +
    '		<div ng-show="showSameAddress">\n' +
    '			<label class="checkbox-inline" for="billingAddressSame">\n' +
    '				<input type="checkbox" id="billingAddressSame" name="billingAddressSame" ng-model="checkStatus" ng-click="checkSameAddress(checkStatus)" />\n' +
    '				<p class="h5">Same as mailing address</p>\n' +
    '			</label>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '\n' +
    '	<div ng-if="(!international)">\n' +
    '		<div class="form-group top-buffer-sm-half" ng-class="validation.getErrorStatusClass(\'addressLine1\')">\n' +
    '			<label for="addressLine1">Address Line 1</label>\n' +
    '			<input id="addressLine1" name="addressLine1" ng-model="address.address1" class="form-control form-entry-width" type="text" ng-maxlength="100" ng-pattern="/^[0-9a-zA-Z\\#\\.\\:\\\'\\/\\-\\,\\s\\\\]*$/" required />\n' +
    '			<div ng-messages="validation.getErrorList(\'addressLine1\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '				<p ng-message="required" class="help-block">Please enter a valid address</p>\n' +
    '				<p ng-message="maxlength" class="help-block">Please enter a valid address</p>\n' +
    '				<p ng-message="pattern" class="help-block">Please enter a valid address</p>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '\n' +
    '		<div class="form-group top-buffer-sm-half" ng-class="validation.getErrorStatusClass(\'addressLine2\')">\n' +
    '			<label for="addressLine2">Address Line 2</label>\n' +
    '			<input id="addressLine2" name="addressLine2" ng-model="address.address2" class="form-control form-entry-width" type="text" ng-maxlength="100" ng-pattern="/^[0-9a-zA-Z\\#\\.\\:\\\'\\/\\-\\,\\s\\\\]*$/" />\n' +
    '			<div ng-messages="validation.getErrorList(\'addressLine2\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '				<p ng-message="maxlength" class="help-block">Please enter a valid address</p>\n' +
    '				<p ng-message="pattern" class="help-block">Please enter a valid address</p>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '\n' +
    '		<div class="form-group top-buffer-sm-half" ng-class="validation.getErrorStatusClass(\'city\')">\n' +
    '			<label for="city">City</label>\n' +
    '			<input id="city" name="city" ng-model="address.city" class="form-control form-entry-width" type="text" required ng-maxlength="20" ng-pattern="/^[0-9a-zA-Z\\\\\\/\\.\\s]*$/" />\n' +
    '			<div ng-messages="validation.getErrorList(\'city\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '				<p ng-message="required" class="help-block">Please enter a valid city</p>\n' +
    '				<p ng-message="maxlength" class="help-block">Please enter a valid city</p>\n' +
    '				<p ng-message="pattern" class="help-block">Please enter a valid city</p>\n' +
    '			</div>\n' +
    '			<p class="h5 top-buffer-xs">For military address, please enter \'APO\' or \'FFO\'</p>\n' +
    '		</div>\n' +
    '\n' +
    '		<div class="form-group row no-margin top-buffer-sm-half">\n' +
    '			<label for="state">State</label>\n' +
    '			<div id="addressState">\n' +
    '				<div class="col-xs-4 no-padding-left">\n' +
    '					<select translation-skip id="state" name="state" ng-model=\'address.state\' ng-options="state.stateCode as state.stateCode for state in stateList" class="form-control state-entry-width" ng-required="validate"></select>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '\n' +
    '		<div class="form-group row no-margin top-buffer-sm-half">\n' +
    '			<label for="zipCode">Zip Code</label>\n' +
    '			<div class="zip-fields-width">\n' +
    '				<div class="col-xs-7 no-padding-left pull-left" ng-class="validation.getErrorStatusClass(\'zipCode\')">\n' +
    '					<input type="text" id="zipCode" name="zipCode" ng-model="address.zip" class="form-control zip-entry-width" ng-pattern="/^\\d{5}$/" required />\n' +
    '					<div ng-messages="validation.getErrorList(\'zipCode\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '						<p ng-message="required" class="help-block">Please enter a valid zip code</p>\n' +
    '						<p ng-message="pattern" class="help-block ">Please enter a valid zip code</p>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div id="zip-four-ext" class="col-xs-5 no-padding pull-right" ng-class="validation.getErrorStatusClass(\'plus4\')">\n' +
    '					<label for="plus4" class="sr-only">Zip Code Plus Four Extension</label>\n' +
    '					<input type="text" id="plus4" name="plus4" ng-model="address.plus4" class="form-control plus-four-width" ng-pattern="/^\\d{4}$/" ng-class="validation.getErrorStatusClass(\'plus4\')" maxlength="4" />\n' +
    '					<div ng-messages="validation.getErrorList(\'plus4\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '						<p ng-message="pattern" class="help-block">Please enter a valid zip extension</p>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div id="zip-dash-container">\n' +
    '					<span id="zip-dash" class="icon-bar"></span>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '\n' +
    '	<div ng-if="(international)" class="">\n' +
    '		<div class="form-group" ng-class="validation.getErrorStatusClass(\'country\')">\n' +
    '			<label for="country">Location</label>\n' +
    '			<select translation-skip id="country" ng-model="address.country" class="form-control form-entry-width" name="country" ng-options="c.countryCode as c.countryName for c in countryList" required ng-change="countryChanged()">\n' +
    '				<option ng-show="address.country===\'\'" value="">Select Location</option>\n' +
    '			</select>\n' +
    '			<div ng-messages="validation.getErrorList(\'country\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '				<p ng-message="required" class="help-block">Please a valid international address</p>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<div class="form-group" ng-class="validation.getErrorStatusClass(\'intaddressLine1\')">\n' +
    '			<label for="intaddressLine1">Address Line 1</label>\n' +
    '			<input id="intaddressLine1" name="intaddressLine1" ng-model="address.address1" class="form-control form-entry-width" type="text" ng-maxlength="100" ng-pattern="/^[0-9a-zA-Z\\#\\.\\:\\\'\\/\\-\\,\\s\\\\]*$/" required />\n' +
    '			<div ng-messages="validation.getErrorList(\'intaddressLine1\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '				<p ng-message="required" class="help-block">Please enter a valid international address</p>\n' +
    '				<p ng-message="maxlength" class="help-block">Please enter a valid international address</p>\n' +
    '				<p ng-message="pattern" class="help-block">Please enter a valid international address</p>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<div class="form-group" ng-class="validation.getErrorStatusClass(\'intaddressLine2\')">\n' +
    '			<label for="intaddressLine2">Address Line 2</label>\n' +
    '			<input id="intaddressLine2" name="intaddressLine2" ng-model="address.address2" class="form-control form-entry-width" type="text" ng-maxlength="100" ng-pattern="/^[0-9a-zA-Z\\#\\.\\:\\\'\\/\\-\\,\\s\\\\]*$/" />\n' +
    '			<div ng-messages="validation.getErrorList(\'intaddressLine2\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '				<p ng-message="maxlength" class="help-block">Please enter a valid international address</p>\n' +
    '				<p ng-message="pattern" class="help-block">Please enter a valid international address</p>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '        <div ng-if="isRefund">\n' +
    '            <div class="form-group top-buffer-sm-half" ng-class="validation.getErrorStatusClass(\'city\')">\n' +
    '                <label for="city">City</label>\n' +
    '                <input id="city" name="city" ng-model="address.city" class="form-control form-entry-width" type="text" required ng-maxlength="20" ng-pattern="/^[0-9a-zA-Z\\\\\\/\\.\\s]*$/" />\n' +
    '                <div ng-messages="validation.getErrorList(\'city\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                    <p ng-message="required" class="help-block">Please enter a valid city</p>\n' +
    '                    <p ng-message="maxlength" class="help-block">Please enter a valid city</p>\n' +
    '                    <p ng-message="pattern" class="help-block">Please enter a valid city</p>\n' +
    '                </div>\n' +
    '                <p class="h5 top-buffer-xs">For military address, please enter \'APO\' or \'FFO\'</p>\n' +
    '            </div>\n' +
    '            <div class="form-group top-buffer-sm-half" ng-class="validation.getErrorStatusClass(\'state\')">\n' +
    '                <label for="state">State / Province / Territory</label>\n' +
    '                <input id="state" name="state" ng-model="address.state" class="form-control form-entry-width" type="text" required ng-pattern="/^[0-9a-zA-Z\\\\\\/\\.\\s]{2,3}$/" />\n' +
    '                <div ng-messages="validation.getErrorList(\'state\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                    <p ng-message="required" class="help-block">Please enter a valid state</p>\n' +
    '                    <p ng-message="pattern" class="help-block">Please enter a valid state</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group row no-margin top-buffer-sm-half">\n' +
    '                <label for="zipCode">Zip / Postal Code</label>\n' +
    '                <div class="zip-fields-width">\n' +
    '                    <div class="col-xs-7 no-padding-left pull-left" ng-class="validation.getErrorStatusClass(\'zipCode\')">\n' +
    '                        <input type="text" id="zipCode" name="zipCode" ng-model="address.zip" class="form-control zip-entry-width" ng-pattern="/^[a-zA-Z0-9]{5,8}$/" required />\n' +
    '                        <div ng-messages="validation.getErrorList(\'zipCode\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                            <p ng-message="required" class="help-block">Please enter a valid zip code</p>\n' +
    '                            <p ng-message="pattern" class="help-block ">Please enter a valid zip code</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div id="zip-four-ext" class="col-xs-5 no-padding pull-right" ng-class="validation.getErrorStatusClass(\'plus4\')">\n' +
    '                        <label for="plus4" class="sr-only">Zip Code Plus Four Extension</label>\n' +
    '                        <input type="text" id="plus4" name="plus4" ng-model="address.plus4" class="form-control plus-four-width" ng-pattern="/^[a-zA-Z0-9]{4}$/" ng-class="validation.getErrorStatusClass(\'plus4\')" maxlength="4" />\n' +
    '                        <div ng-messages="validation.getErrorList(\'plus4\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                            <p ng-message="pattern" class="help-block">Please enter a valid zip extension</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div id="zip-dash-container">\n' +
    '                        <span id="zip-dash" class="icon-bar"></span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '	</div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/directives/Violations/uninvoicedStaticListTemplate.html',
    '﻿<generic-paging-control ng-if="vm.itemCount > 0" config="vm.config"></generic-paging-control>\n' +
    '<table class="table info-table-border no-margin-bottom">\n' +
    '    <tbody>\n' +
    '        <tr ng-if="vm.itemCount > 0" class="info-table-head">\n' +
    '            <th class="col-xs-6 col-sm-5 col-md-5">\n' +
    '                <ng-transclude>\n' +
    '                    <span class="desktopOnly">Harris County Violation ID</span>\n' +
    '                    <span class="mobileOnly">Harris Co. Violation #</span>\n' +
    '                </ng-transclude>\n' +
    '            </th>\n' +
    '            <th class="col-xs-3 col-sm-5 col-md-4">Violation Date</th>\n' +
    '            <th class="col-xs-3 col-md-3 align-right">Amount Due</th>\n' +
    '        </tr>\n' +
    '        <tr ng-if="vm.itemCount > 0" class="info-table-body" ng-repeat="invoice in vm.currentPage">\n' +
    '            <td ng-bind="invoice.violationNumber"></td>\n' +
    '            <td ng-bind="invoice.violationDate | dateWithTimeZone : \'date1\'"></td>\n' +
    '            <td class="align-right">\n' +
    '                <currency [value]="invoice.amountDue"></currency>\n' +
    '            </td>\n' +
    '        </tr>\n' +
    '    </tbody>\n' +
    '</table>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/googleSearch/googleSearch.html',
    '﻿<div class="border-without-footer">\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '\n' +
    '            <div id="searchfield" class="top-buffer-lg-mo"></div>\n' +
    '\n' +
    '            <hr style="margin-left: -1px; margin-right: -1px;" class="no-margin-bottom top-buffer-xl-do top-buffer-lg-mo" />\n' +
    '\n' +
    '            <div id="june-redesign">\n' +
    '                <h1 class="no-margin-top top-buffer-sm">Search Results</h1>\n' +
    '                <div id="searchResults"></div>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/helpAndSupport/emailUsConfirmationSlidingPanel.html',
    '﻿<div class="modal-header">\n' +
    '    <div class="bottom-buffer-md-half">\n' +
    '        <h2 class="h1-mo">\n' +
    '            {{$ctrl.resolve.emailUsThankYouContent.Title}}\n' +
    '            <button id="exitBtn" type="button" class="close" data-dismiss="modal" ng-click="$ctrl.onClose()">&#10006;</button>\n' +
    '        </h2>\n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="modal-body">\n' +
    '    <div ng-bind-html="$ctrl.resolve.emailUsThankYouContent.ShortDescription | trusted"></div>\n' +
    '\n' +
    '    <div class="back-link-container">\n' +
    '        <a class="back-link" ng-click="$ctrl.redirect()"> < {{$ctrl.redirectText}}</a>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/helpAndSupport/emailUsSlidingPanel.html',
    '﻿<form ng-hide="$ctrl.hideEmailUsSlidingPanel" class="no-margin-bottom" validation-focus id="helpAndSupportForm" name="$ctrl.helpAndSupportForm" novalidate>\n' +
    '\n' +
    '    <div id="email-us-sliding-panel" class="modal-popup">\n' +
    '        <div class="modal-header">\n' +
    '            <h2>\n' +
    '                {{$ctrl.emailUsSection.Title}}\n' +
    '                <button id="exitBtn" type="button" class="close" data-dismiss="modal" ng-click="$ctrl.onClose()">&#10006;</button>\n' +
    '            </h2>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="modal-body">\n' +
    '            <div id="emailUsForm" class="row">\n' +
    '                <div class="col-xs-12 bottom-buffer-md-half">\n' +
    '\n' +
    '                    <div id="email" ng-class="$ctrl.validation.getErrorStatusClass(\'Email\')">\n' +
    '                        <label for="email">{{$ctrl.emailUsFields[\'Email\'].Label}}</label>\n' +
    '                        <input id="email" name="Email" class="form-control"\n' +
    '                               type="email"\n' +
    '                               placeholder="username@domain.com"\n' +
    '                               email-valid\n' +
    '                               ng-model="$ctrl.helpAndSupportDetails.Email"\n' +
    '                               ng-required="true"\n' +
    '                               ng-disabled="$ctrl.isSendingEmail" />\n' +
    '\n' +
    '                        <div ng-messages="$ctrl.validation.getErrorList(\'Email\')" ng-if="$ctrl.validation.hasSubmitted()" role="alert">\n' +
    '                            <p ng-message="required" class="help-block">{{$ctrl.emailUsFields[\'Email\'].FieldRequiredValidationMessage}}</p>\n' +
    '                            <p ng-message="pattern" class="help-block">{{$ctrl.emailUsFields[\'Email\'].FieldValidationMessage}}</p>\n' +
    '                            <p ng-message="maxlength" class="help-block">{{$ctrl.emailUsFields[\'Email\'].FieldValidationMessage}}</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div ng-class="$ctrl.validation.getErrorStatusClass(\'YourName\')">\n' +
    '                        <label for="yourName">{{$ctrl.emailUsFields[\'YourName\'].Label}}</label>\n' +
    '                        <input id="YourName" name="YourName" class="form-control"\n' +
    '                               type="text"\n' +
    '                               ng-model="$ctrl.webFormFields[\'YourName\']"\n' +
    '                               ng-pattern="$ctrl.emailUsFields[\'YourName\'].FieldValidationRegex"\n' +
    '                               ng-required="true"\n' +
    '                               ng-disabled="$ctrl.isSendingEmail" />\n' +
    '                        <div ng-messages="$ctrl.validation.getErrorList(\'YourName\')" ng-if="$ctrl.validation.hasSubmitted()" role="alert">\n' +
    '                            <p ng-message="required" class="help-block">{{$ctrl.emailUsFields[\'YourName\'].FieldRequiredValidationMessage}}</p>\n' +
    '                            <p ng-message="pattern" class="help-block">{{$ctrl.emailUsFields[\'YourName\'].FieldValidationMessage}}</p>\n' +
    '                            <p ng-message="maxlength" class="help-block">{{$ctrl.emailUsFields[\'YourName\'].FieldValidationMessage}}</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <h2 class="h1-mo">{{$ctrl.emailUsForms.aboveFormContent.Title}}</h2>\n' +
    '\n' +
    '                    <label for="contactUsEmailTopic" class="sr-only">Email Us Topic</label>\n' +
    '                    <select ng-model="$ctrl.helpAndSupportDetails.emailTopic" class="form-control" id="contactUsEmailTopic" ng-change="$ctrl.changeTopic()" ng-options="topic as topic.Name for topic in $ctrl.emailUsTopics"></select>\n' +
    '\n' +
    '                    <!-- Verbiage update: See Bug 3633 -->\n' +
    '                    <div ng-if="$ctrl.emailUsForms.aboveFormContent.ShortDescription" class="cms-picture-auto-scale">\n' +
    '                        <p class="h4" ng-bind-html="$ctrl.emailUsForms.aboveFormContent.ShortDescription | trusted"></p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="row">\n' +
    '                <div class="col-xs-12">\n' +
    '                    <div class="col-xs-12 bottom-buffer-md-half no-padding" ng-if="$ctrl.emailUsForms[$ctrl.helpAndSupportDetails.emailTopic.Form].ShortDescription">\n' +
    '                        <p class="h4 no-padding" ng-bind-html="$ctrl.emailUsForms[$ctrl.helpAndSupportDetails.emailTopic.Form].ShortDescription | trusted"></p>\n' +
    '                    </div>\n' +
    '                    <div id="FAQs" class="col-xs-12 bottom-buffer-md-half no-padding" ng-if="$ctrl.emailUsForms[$ctrl.helpAndSupportDetails.emailTopic.Form].FAQs.length > 0">\n' +
    '                        <div class="faq-container" ng-repeat="question in $ctrl.emailUsForms[$ctrl.helpAndSupportDetails.emailTopic.Form].FAQs">\n' +
    '                            <a class="faq-question" ng-click="$ctrl.openFaqSlidingPanel(question.Title)">{{question.Title}}</a>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div id="fieldParent" class="form-group top-buffer-sm-half" ng-repeat="field in $ctrl.cmsFormFieldsInfo">\n' +
    '                        <!--Generic Dynamic Fields Begin-->\n' +
    '                        <div ng-class="$ctrl.validation.getErrorStatusClass(field.ItemName)" ng-if="!($ctrl.typeIs(field.ItemName, \'Checkbox\') || $ctrl.fieldIs(field.ItemName, $ctrl.fieldsToSpecify)) ">\n' +
    '                            <label for="{{field.ItemName}}">{{$ctrl.cmsFormFieldsInfo[field.ItemName].Label}}</label>\n' +
    '                            <textarea ng-if="$ctrl.typeIs(field.ItemName,\'TextArea\')" id="{{field.ItemName}}" name="{{field.ItemName}}" class="form-control"\n' +
    '                                      rows="6"\n' +
    '                                      ng-maxlength="4000"\n' +
    '                                      ng-model="$ctrl.webFormFields[field.ItemName]"\n' +
    '                                      ng-pattern="$ctrl.cmsFormFieldsInfo[field.ItemName].FieldValidationRegex"\n' +
    '                                      ng-required="$ctrl.formHasFieldRequired(field.ItemName)"\n' +
    '                                      ng-disabled="$ctrl.isSendingEmail"></textarea>\n' +
    '\n' +
    '                            <input ng-if="$ctrl.typeIs(field.ItemName, \'PhoneNumber\')" id="{{field.ItemName}}" name="{{field.ItemName}}" class="form-control"\n' +
    '                                   type="tel"\n' +
    '                                   placeholder="000-000-0000"\n' +
    '                                   ng-blur="$ctrl.onBlurOrChangePhone(field.ItemName)"\n' +
    '                                   ng-change="$ctrl.onBlurOrChangePhone(field.ItemName)"\n' +
    '                                   ng-model="$ctrl.webFormFields[field.ItemName]"\n' +
    '                                   ng-pattern="$ctrl.cmsFormFieldsInfo[field.ItemName].FieldValidationRegex"\n' +
    '                                   ng-required="$ctrl.formHasFieldRequired(field.ItemName)"\n' +
    '                                   ng-disabled="$ctrl.isSendingEmail" />\n' +
    '\n' +
    '\n' +
    '                            <input ng-if="$ctrl.typeIs(field.ItemName, \'Input\')" id="{{field.ItemName}}" name="{{field.ItemName}}" class="form-control"\n' +
    '                                   type="text"\n' +
    '                                   ng-model="$ctrl.webFormFields[field.ItemName]"\n' +
    '                                   ng-pattern="$ctrl.cmsFormFieldsInfo[field.ItemName].FieldValidationRegex"\n' +
    '                                   ng-required="$ctrl.formHasFieldRequired(field.ItemName)"\n' +
    '                                   ng-disabled="$ctrl.isSendingEmail" />\n' +
    '\n' +
    '                            <select ng-if="$ctrl.typeIs(field.ItemName, \'Dropdown\')" id="{{field.ItemName}}" name="{{field.ItemName}}"\n' +
    '                                    class="form-control"\n' +
    '                                    ng-model="$ctrl.webFormFields[field.ItemName]"\n' +
    '                                    ng-required="$ctrl.formHasFieldRequired(field.ItemName)"\n' +
    '                                    ng-disabled="$ctrl.isSendingEmail">\n' +
    '                                <option value="" selected>{{field.Comments}}</option>\n' +
    '                                <option ng-repeat="option in field.Options"\n' +
    '                                        ng-class="{helpAndSupportDropDownBold: $ctrl.isBold(option)}" value="{{option.Name}}">\n' +
    '                                    {{$ctrl.displayName(option)}}\n' +
    '                                </option>\n' +
    '                            </select>\n' +
    '\n' +
    '                            <div ng-messages="$ctrl.validation.getErrorList(field.ItemName)" ng-if="$ctrl.validation.hasSubmitted()" role="alert">\n' +
    '                                <p ng-message="required" class="help-block">{{field.FieldRequiredValidationMessage}}</p>\n' +
    '                                <p ng-message="pattern" class="help-block">{{field.FieldValidationMessage}}</p>\n' +
    '                                <p ng-message="email" class="help-block">{{field.FieldValidationMessage}}</p>\n' +
    '                                <p ng-message="maxlength" class="help-block">{{field.FieldValidationMessage}}</p>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div ng-if="$ctrl.typeIs(field.ItemName, \'Checkbox\')" class="checkbox top-buffer-sm-half no-margin-bottom-do">\n' +
    '                            <input id="{{field.ItemName}}" name="{{field.ItemName}}"\n' +
    '                                   type="checkbox"\n' +
    '                                   ng-model="$ctrl.webFormFields[field.ItemName]"\n' +
    '                                   ng-disabled="$ctrl.isSendingEmail" />\n' +
    '                            <label for="{{field.ItemName}}">{{$ctrl.cmsFormFieldsInfo[field.ItemName].Label}}</label>\n' +
    '                            <div class="cms-picture-auto-scale top-buffer-xs">\n' +
    '                                <p class="h5" ng-bind-html="field.Comments | trusted"></p>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <!--Generic Dynamic Fields End-->\n' +
    '                        <!--Specific Dynamic Fields Begin (for special case formatting and forms e.g. TxTagDispute)-->\n' +
    '\n' +
    '                        <div storefront-hide-if-enabled="true" ng-if="$ctrl.typeIs(field.ItemName, \'FileUpload\')" class="form-group top-buffer-sm-half">\n' +
    '                            <label>Attachments (limit {{field.FileMaxUploads}})</label>\n' +
    '                            <file-upload-component legacy\n' +
    '                                                   [files]="$ctrl.helpAndSupportDetails.Files"\n' +
    '                                                   [max-uploads]="+field.FileMaxUploads"\n' +
    '                                                   [accepted-file-extensions]="field.FileExtensions"\n' +
    '                                                   [max-cumulative-upload-in-mb]="field.FileUploadSize"\n' +
    '                                                   (read)="$ctrl.onFileUploadRead($event)"></file-upload-component>\n' +
    '\n' +
    '                            <div ng-messages="$ctrl.fileUploadErrors" role="alert">\n' +
    '                                <p ng-message="fileSize" class="help-block">{{field.FieldRequiredValidationMessage}}</p>\n' +
    '                                <p ng-message="fileType" class="help-block">{{field.FieldValidationMessage}}</p>\n' +
    '                                <p ng-message="fileRead" class="help-block">Could not read file. Try again.</p>\n' +
    '                            </div>\n' +
    '\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div ng-class="$ctrl.validation.getErrorStatusClass(field.ItemName)" ng-if="$ctrl.fieldIs(field.ItemName, [\'Comments\'])" class="form-group top-buffer-sm-half ">\n' +
    '                            <label for="{{field.ItemName}}">{{$ctrl.cmsFormFieldsInfo[field.ItemName].Label}}</label>\n' +
    '                            <textarea id="{{field.ItemName}}" name="{{field.ItemName}}" class="form-control"\n' +
    '                                      rows="6"\n' +
    '                                      ng-maxlength="4000"\n' +
    '                                      ng-model="$ctrl.helpAndSupportDetails.Comments"\n' +
    '                                      ng-pattern="$ctrl.cmsFormFieldsInfo[field.ItemName].FieldValidationRegex"\n' +
    '                                      ng-required="$ctrl.formHasFieldRequired(field.ItemName)"\n' +
    '                                      ng-disabled="$ctrl.isSendingEmail"></textarea>\n' +
    '                            <div ng-messages="$ctrl.validation.getErrorList(field.ItemName)" ng-if="$ctrl.validation.hasSubmitted()" role="alert">\n' +
    '                                <p ng-message="required" class="help-block">{{field.FieldRequiredValidationMessage}}</p>\n' +
    '                                <p ng-message="pattern" class="help-block">{{field.FieldValidationMessage}}</p>\n' +
    '                                <p ng-message="maxlength" class="help-block">Please enter a valid comment or inquiry</p>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="row" ng-if="$ctrl.fieldIs(field.ItemName, [\'LicensePlate\'])">\n' +
    '                            <div ng-class="$ctrl.validation.getErrorStatusClass(\'State\')" ng-if="$ctrl.formHasField(\'State\')" class="form-group top-buffer-sm-half col-md-4 padding-right-md">\n' +
    '                                <label for="State">{{$ctrl.cmsFormFieldsInfo.State.Label}}</label>\n' +
    '                                <select id="State" name="State" class="form-control"\n' +
    '                                        ng-options="$ctrl.state.stateCode as state.stateCode for state in stateList"\n' +
    '                                        ng-model="$ctrl.webFormFields[\'State\']"\n' +
    '                                        ng-required="$ctrl.formHasFieldRequired(\'State\')"\n' +
    '                                        ng-disabled="$ctrl.isSendingEmail"></select>\n' +
    '\n' +
    '                                <div ng-messages="$ctrl.validation.getErrorList(\'State\')" ng-if="$ctrl.validation.hasSubmitted()" role="alert">\n' +
    '                                    <p ng-message="required" class="help-block">{{$ctrl.cmsFormFieldsInfo.State.FieldRequiredValidationMessage}}</p>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '\n' +
    '                            <div ng-class="$ctrl.validation.getErrorStatusClass(field.ItemName)" class="form-group top-buffer-sm-half col-md-8">\n' +
    '                                <label for="{{field.ItemName}}">{{$ctrl.cmsFormFieldsInfo[field.ItemName].Label}}</label>\n' +
    '                                <input id="{{field.ItemName}}" name="{{field.ItemName}}" class="form-control" type="text"\n' +
    '                                       ng-model="$ctrl.webFormFields[field.ItemName]"\n' +
    '                                       ng-pattern="$ctrl.cmsFormFieldsInfo[field.ItemName].FieldValidationRegex"\n' +
    '                                       ng-required="$ctrl.formHasFieldRequired(field.ItemName)"\n' +
    '                                       ng-disabled="$ctrl.isSendingEmail" />\n' +
    '\n' +
    '                                <div ng-messages="$ctrl.validation.getErrorList(field.ItemName)" ng-if="$ctrl.validation.hasSubmitted()" role="alert">\n' +
    '                                    <p ng-message="required" class="help-block">{{field.FieldRequiredValidationMessage}}</p>\n' +
    '                                    <p ng-message="pattern" class="help-block">{{field.FieldValidationMessage}}</p>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="row" ng-if="$ctrl.fieldIs(field.ItemName, [\'FirstName\'])">\n' +
    '                            <!--special formatting for first/last names-->\n' +
    '                            <div ng-class="$ctrl.validation.getErrorStatusClass(field.ItemName)" class="form-group top-buffer-sm-half col-md-6">\n' +
    '                                <label for="{{field.ItemName}}">{{$ctrl.cmsFormFieldsInfo[field.ItemName].Label}}</label>\n' +
    '                                <input id="{{field.ItemName}}" name="{{field.ItemName}}" class="form-control" type="text"\n' +
    '                                       ng-model="$ctrl.webFormFields[field.ItemName]"\n' +
    '                                       ng-pattern="$ctrl.cmsFormFieldsInfo[field.ItemName].FieldValidationRegex"\n' +
    '                                       ng-required="$ctrl.formHasFieldRequired(field.ItemName)"\n' +
    '                                       ng-disabled="$ctrl.isSendingEmail" />\n' +
    '\n' +
    '                                <div ng-messages="$ctrl.validation.getErrorList(field.ItemName)" ng-if="$ctrl.validation.hasSubmitted()" role="alert">\n' +
    '                                    <p ng-message="required" class="help-block">{{field.FieldRequiredValidationMessage}}</p>\n' +
    '                                    <p ng-message="pattern" class="help-block">{{field.FieldValidationMessage}}</p>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div ng-class="$ctrl.validation.getErrorStatusClass(\'LastName\')" ng-if="$ctrl.formHasField(\'LastName\')" class="form-group top-buffer-sm-half col-md-6 padding-right-md">\n' +
    '                                <label for="LastName">{{$ctrl.cmsFormFieldsInfo.LastName.Label}}</label>\n' +
    '                                <input id="LastName" name="LastName" class="form-control"\n' +
    '                                       ng-model="$ctrl.webFormFields.LastName"\n' +
    '                                       ng-pattern="$ctrl.cmsFormFieldsInfo.LastName.FieldValidationRegex"\n' +
    '                                       ng-required="$ctrl.formHasFieldRequired(\'LastName\')"\n' +
    '                                       ng-disabled="$ctrl.isSendingEmail" />\n' +
    '\n' +
    '                                <div ng-messages="$ctrl.validation.getErrorList(\'LastName\')" ng-if="$ctrl.validation.hasSubmitted()" role="alert">\n' +
    '                                    <p ng-message="required" class="help-block">{{$ctrl.cmsFormFieldsInfo.LastName.FieldRequiredValidationMessage}}</p>\n' +
    '                                    <p ng-message="pattern" class="help-block">{{$ctrl.cmsFormFieldsInfo.LastName.FieldValidationMessage}}</p>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div ng-class="$ctrl.validation.getErrorStatusClass(field.ItemName)" ng-if="$ctrl.typeIs(field.ItemName, \'Dropdown\') && $ctrl.fieldIs(field.ItemName, [\'Location\'])" class="form-group top-buffer-sm-half">\n' +
    '                            <label for="{{field.ItemName}}">{{$ctrl.cmsFormFieldsInfo[field.ItemName].Label}}</label>\n' +
    '                            <select id="{{field.ItemName}}" name="{{field.ItemName}}" class="form-control"\n' +
    '                                    ng-model="$ctrl.webFormFields[field.ItemName]"\n' +
    '                                    ng-options="location as location.LocationID for location in field.Options"\n' +
    '                                    ng-required="$ctrl.formHasFieldRequired(field.ItemName)"\n' +
    '                                    ng-disabled="$ctrl.isSendingEmail">\n' +
    '                                <option value="" selected>{{field.Comments}}</option>\n' +
    '                            </select>\n' +
    '                            <div ng-messages="$ctrl.validation.getErrorList(field.ItemName)" ng-if="$ctrl.validation.hasSubmitted()" role="alert">\n' +
    '                                <p ng-message="required" class="help-block">{{field.FieldRequiredValidationMessage}}</p>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <!--Specific Dynamic Fields End-->\n' +
    '                    </div> <!--ng-repeat end-->\n' +
    '                    <div ng-bind-html="$ctrl.emailUsForms.belowFormContent.ShortDescription | trusted"></div>\n' +
    '                    <div>\n' +
    '                        <border-bottom-buttons ng-if="$ctrl.helpAndSupportDetails.emailTopic.Form != \'Please Select Topic\'" ng-hide="$ctrl.isSendingEmail" on-continue-save="$ctrl.onSubmit($ctrl.helpAndSupportForm.$valid)"\n' +
    '                                               exclude-global-disable="true"\n' +
    '                                               show-cancel on-cancel="$ctrl.cancel()">\n' +
    '                            Submit\n' +
    '                        </border-bottom-buttons>\n' +
    '                    </div>\n' +
    '\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</form>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/helpAndSupport/faqSlidingPanel.html',
    '﻿<div class="modal-header">\n' +
    '    <div class="col-xs-12 bottom-buffer-md-half">\n' +
    '        <h2 class="h1-mo">\n' +
    '            <a class="back-link" ng-click="$ctrl.onClose()"> < Back</a>\n' +
    '            <button id="exitBtn" type="button" class="close" data-dismiss="modal" ng-click="$ctrl.onClose()">&#10006;</button>\n' +
    '        </h2>\n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="modal-body">\n' +
    '    <div class="question-title">\n' +
    '        <div ng-bind-html="$ctrl.resolve.faqContent.Title | trusted"></div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="short-description updateDate">\n' +
    '        Last Modified {{$ctrl.resolve.faqContent.LastUpdate | date: \'longDate\'}}</p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="long-description">\n' +
    '        <div ng-bind-html="$ctrl.resolve.faqContent.LongDescription | trusted"></div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/helpAndSupport/helpAndSupport.html',
    '﻿<div id="help-and-support">\n' +
    '\n' +
    '    <header id="june-redesign" class="header-spacing">\n' +
    '        <h1 class="title-color">{{$ctrl.pageTitle}}</h1>\n' +
    '    </header>\n' +
    '    <div class="border-without-footer">\n' +
    '        <div ng-bind-html="$ctrl.pageSubText | trusted" compile-template></div>\n' +
    '        <div ng-repeat="helpAndSupportSection in $ctrl.helpAndSupportCMSSections">\n' +
    '            <div id="helpAndSupportCMSSections" class="row bottom-buffer-lg">\n' +
    '                <div class="col-xs-12">\n' +
    '                    <header class="header-spacing">\n' +
    '                        <h2 ng-click="$ctrl.toggleCollapse($ctrl.headerToggleFlag[$index])" class="h1-mo no-margin-top no-outline section-title">\n' +
    '                            {{helpAndSupportSection.Title}}\n' +
    '                            <span class="pull-right-mobile pull-left-desktop right-buffer-sm-do glyphicon" \n' +
    '                                  ng-class="{\'glyphicon-triangle-bottom\': $ctrl.headerToggleFlag[$index].flag, \'glyphicon-triangle-right\': !$ctrl.headerToggleFlag[$index].flag}"\n' +
    '                                  aria-hidden="true"></span>\n' +
    '                        </h2>\n' +
    '                        <hr />\n' +
    '                    </header>\n' +
    '                    <div uib-collapse="!$ctrl.headerToggleFlag[$index].flag">\n' +
    '                        <div class="row">\n' +
    '                            <div class="col-xs-12">\n' +
    '                                <div id="{{helpAndSupportSection.ElementID}}">\n' +
    '                                    <!--ng-if !isEmailUs && !isFAQ-->\n' +
    '                                    <div ng-if="helpAndSupportSection.Contents" ng-bind-html="helpAndSupportSection.Contents | trusted" compile-template></div>\n' +
    '                                </div>\n' +
    '\n' +
    '                                <div ng-if="helpAndSupportSection.FieldSelection == $ctrl.sectionList.emailUs">\n' +
    '                                    <!--ng-if isEmailUs-->\n' +
    '\n' +
    '                                    <!-- NOT DELETED, communication potentially wants it back-->\n' +
    '                                    <!--<div id="{{helpAndSupportSection.ElementID}}" class="row bottom-buffer-lg">\n' +
    '                                        <div class="col-xs-12">\n' +
    '                                            <div>\n' +
    '                                                <div class="input-group">\n' +
    '                                                    <div class="col-xs-12 no-padding-left">\n' +
    '                                                        <div ng-bind-html="$ctrl.emailUsParent.ShortDescription | trusted"></div>\n' +
    '                                                    </div>\n' +
    '\n' +
    '                                                    <div id="emailUsBtn" ng-click="$ctrl.openEmailUsSlidingPanel()">\n' +
    '                                                        <button class="pull-left-desktop btn">\n' +
    '                                                            <span>Email Us</span>\n' +
    '                                                        </button>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>-->\n' +
    '                                </div>\n' +
    '\n' +
    '                                <div ng-if="helpAndSupportSection.FieldSelection === $ctrl.sectionList.faq">\n' +
    '                                    <!--ng-if isFAQ-->\n' +
    '                                    <div ng-if="helpAndSupportSection.Children.length && helpAndSupportSection.Children.length > 0" class="row" ng-repeat="FAQquestion in helpAndSupportSection.Children">\n' +
    '                                        <div class="col-md-8">\n' +
    '                                            <div class="collapseBox" ng-click="$ctrl.toggleCollapse($ctrl.faqCollapseFlagList[$index])"\n' +
    '                                                 ng-class="{collapseBoxOpen: $ctrl.faqCollapseFlagList[$index].flag === false}">\n' +
    '                                                <div class="row">\n' +
    '                                                    <div class="col-md-11 col-xs-10">{{FAQquestion.Title}}</div>\n' +
    '                                                    <div class="col-md-1 col-xs-2">\n' +
    '                                                        <div ng-if="$ctrl.faqCollapseFlagList[$index].flag" class="plus pull-right"></div>\n' +
    '                                                        <div ng-if="!$ctrl.faqCollapseFlagList[$index].flag" class="minus pull-right"></div>\n' +
    '                                                    </div>\n' +
    '\n' +
    '                                                </div>\n' +
    '\n' +
    '                                                <div class="row" uib-collapse="$ctrl.faqCollapseFlagList[$index].flag">\n' +
    '                                                    <div class="col-md-11 updateDate">Last Modified {{FAQquestion.LastUpdate | date: \'longDate\'}}</div>\n' +
    '                                                    <div class="col-md-11 col-xs-10" ng-bind-html="FAQquestion.LongDescription | trusted"></div>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                            <br />\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '                                <div ng-if="helpAndSupportSection.FieldSelection === $ctrl.sectionList.callUs"\n' +
    '                                     class="contactUs">\n' +
    '                                    <!--ng-if isContactUs-->\n' +
    '                                    <div ng-if="helpAndSupportSection.Children.length && helpAndSupportSection.Children.length > 0" \n' +
    '                                         ng-repeat="contactUsSection in helpAndSupportSection.Children"\n' +
    '                                         class="sectionBox marginBoxAdjustment"\n' +
    '                                         ng-bind-html="contactUsSection.ShortDescription | trusted">                                        \n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '                                <div ng-if="helpAndSupportSection.FieldSelection === $ctrl.sectionList.location">\n' +
    '                                    <!--ng-if Locations-->\n' +
    '                                    <div ng-if="!!$ctrl.locationList && $ctrl.locationList.length > 0" ng-repeat="location in $ctrl.locationList">\n' +
    '                                        <div class="col-md-4 col-xs-12">\n' +
    '                                            <div class="row marginBoxAdjustment no-padding-left">\n' +
    '                                                <h2 class="bottom-buffer-xs font-avenir-medium mobileOnly">\n' +
    '                                                    {{location.region}} <span ng-if="location.subregion" class="h6">{{location.subregion}}</span>\n' +
    '                                                </h2>\n' +
    '                                                <h2 class="bottom-buffer-xs font-avenir-medium desktopOnly">\n' +
    '                                                    {{location.region}} <span ng-if="location.subregion" class="h6">{{location.subregion}}</span>\n' +
    '                                                </h2>\n' +
    '                                                <p class="h5 no-margin-bottom">\n' +
    '                                                    <span translation-skip aria-label="{{location.ariaAddressStreet}}">{{location.addressStreet}}</span>\n' +
    '                                                    <br />\n' +
    '                                                    <span translation-skip>{{location.addressCity}}</span>\n' +
    '                                                </p>\n' +
    '                                                <div storefront-hide-if-enabled="true" ng-bind-html="location.mapLink | trusted"></div>\n' +
    '                                            </div>\n' +
    '                                            <br />\n' +
    '                                        </div>\n' +
    '                                        \n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '\n' +
    '                                <div id="{{helpAndSupportSection.ElementID}}_post_content">\n' +
    '                                    <!--ng-if !isEmailUs && !isFAQ-->\n' +
    '                                    <div ng-if="helpAndSupportSection.PostContents" ng-bind-html="helpAndSupportSection.PostContents | trusted"></div>\n' +
    '                                </div>\n' +
    '\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/indexNoCookieStorage.html',
    '﻿<html>\n' +
    '<head>\n' +
    '	<meta charset="utf-8">\n' +
    '	<meta http-equiv="x-ua-compatible" content="ie=edge">\n' +
    '	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />\n' +
    '	<meta name="description" content="">\n' +
    '\n' +
    '	<link href="/Content/Site.css" rel="stylesheet" />\n' +
    '\n' +
    '	<title>HCTRA</title>\n' +
    '	<base href="/">\n' +
    '\n' +
    '	<script src="/Scripts/bowser.min.js"></script>\n' +
    '\n' +
    '</head>\n' +
    '<body id="html-body">\n' +
    '	<div id="special-redesign-background" class="purple-background">\n' +
    '		<div id="special-redesign" class="container">\n' +
    '			<div>\n' +
    '				<img class="outdated-browser-notice-logo" src="../Content/images/logoHCTRAsm.png" />\n' +
    '			</div>\n' +
    '			<p class="browserupgrade">Current browser configuration is not supported. Both cookies and local storage need to be enabled to use this site.</p>\n' +
    '			<footer class="footer">\n' +
    '				<p>Harris County Toll Road Authority (c) 2007 - 2016. All Rights Reserved</p>\n' +
    '			</footer>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</body>\n' +
    '</html>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/indexPrivateBrowsing.html',
    '﻿<!DOCTYPE html>\n' +
    '<html xmlns="http://www.w3.org/1999/xhtml">\n' +
    '<head>\n' +
    '    <title></title>\n' +
    '</head>\n' +
    '<body>\n' +
    '\n' +
    '</body>\n' +
    '</html>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/microSites/lynchburgFerry.html',
    '﻿<div id="lynchburgFerry">\n' +
    '    <header class="header-spacing">\n' +
    '        <h1 class="h1-mo ferry-Header">{{$ctrl.cmsContent.pageTitle}}</h1>\n' +
    '    </header>\n' +
    '    <div class="row border-without-footer">\n' +
    '        <!-----------------------------------------------------------------Slider Images--------------------------------------------------------------------------->\n' +
    '        <div class="col-md-12 no-padding ferry-slider-arrow" uib-carousel="" interval="$ctrl.interval" no-wrap="false" active="0" no-pause="true">\n' +
    '            <div uib-slide ng-repeat="slide in $ctrl.sliderImageURL track by slide.id" index="slide.id">\n' +
    '                <img ng-if="!slide.urlLinkOn" class="max-scale-element" alt="" src="{{slide.url}}" />\n' +
    '                <a ng-if="slide.urlLinkOn" href="{{slide.urlLink}}">\n' +
    '                    <img class="max-scale-element" alt="" src="{{slide.url}}" />\n' +
    '                </a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <br class="desktopOnly" />\n' +
    '        <!-----------------------------------------------------------------Info Section DESKTOP--------------------------------------------------------------------------->\n' +
    '        <div class="row info_section_layout desktopOnly">\n' +
    '            <!-----------------------------------------------------------------Ferry Info Desktop--------------------------------------------------------------------------->\n' +
    '            <div class="col-md-7 ferry-alignment">\n' +
    '                <label class="info_section_title">{{$ctrl.cmsContent.pageTitle}}</label>\n' +
    '                <hr class="line_design" />\n' +
    '                <div class="info_section_description">\n' +
    '                    <span ng-bind-html="$ctrl.cmsContent.ShortDescription | trusted"></span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div>\n' +
    '\n' +
    '                <div class="col-md-5 col-xs-12">\n' +
    '                    <!-----------------------------------------------------------------Box Object 1--------------------------------------------------------------------------->\n' +
    '                    <div class="row box_layout">\n' +
    '                        <div ng-if="$ctrl.ferryCurrentStatusCode !== -1 && $ctrl.ferryOperationToggle">\n' +
    '                            <div class="col-md-12 col-xs-12" ng-if="$ctrl.ferryCurrentStatusCode === 1">\n' +
    '                                <!--<input class="ng-hide" type="radio" name="ferryDesktop" />-->\n' +
    '                                <div class="row box_object_title">\n' +
    '                                    <div style="padding-left:15px;" ng-bind-html="$ctrl.twoFerryMessage | trusted"></div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="col-md-12 col-xs-12"  ng-if="$ctrl.ferryCurrentStatusCode === 2">\n' +
    '                                <!--<input class="ng-hide" type="radio" name="ferryDesktop" />-->\n' +
    '                                <div class="row box_object_title">\n' +
    '                                    <div style="padding-left:15px;" ng-bind-html="$ctrl.oneFerryMessage | trusted"></div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="col-md-12 col-xs-12"  ng-if="$ctrl.ferryCurrentStatusCode === 3">\n' +
    '                                <!--<input class="ng-hide" type="radio" name="ferryDesktop" checked="checked" />-->\n' +
    '                                <div class="row box_object_title">\n' +
    '                                    <div style="padding-left:15px;" ng-bind-html="$ctrl.closedFerryMessage | trusted"></div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div>\n' +
    '                            <span ng-bind-html="$ctrl.cmsContent.LongDescription | trusted"></span>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <!-----------------------------------------------------------------Info Section Mobile--------------------------------------------------------------------------->\n' +
    '        <div class="col-xs-12 mobileOnly padding-layout">\n' +
    '            <div ng-if="$ctrl.ferryCurrentStatusCode !== -1 && $ctrl.ferryOperationToggle" class="row no-padding">\n' +
    '                <div class="col-md-12 col-xs-12" ng-if="$ctrl.ferryCurrentStatusCode === 1">\n' +
    '                    <!--<input class="ng-hide" type="radio" name="ferryDesktop" />-->\n' +
    '                    <div class="row">\n' +
    '                        <div class="col-md-2 col-xs-2" style="padding-right: 0px; margin-right: -20px;">\n' +
    '                            <img alt="" src="-/media/FD6D1DFF56CA4482B80C54F5B1FB6443.ashx" style="vertical-align: middle;" />\n' +
    '                        </div>\n' +
    '                        <div class="col-md-10 col-xs-02" style="padding-left: 0px;">\n' +
    '                            <p class="box_object_title">Both Ferries Operational</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="col-md-12 col-xs-12" ng-if="$ctrl.ferryCurrentStatusCode === 2">\n' +
    '                    <!--<input class="ng-hide" type="radio" name="ferryDesktop" />-->\n' +
    '                    <div class="row">\n' +
    '                        <div class="col-md-2 col-xs-2" style="padding-right: 0px; margin-right: -20px;">\n' +
    '                            <img alt="" src="-/media/98CFFEF819E94467951216F42574D70B.ashx" style="vertical-align: middle;" />\n' +
    '                        </div>\n' +
    '                        <div class="col-md-10 col-xs-10" style="padding-left: 0px;">\n' +
    '                            <p class="box_object_title">One Ferry Operational</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="col-md-12 col-xs-12" ng-if="$ctrl.ferryCurrentStatusCode === 3">\n' +
    '                    <!--<input class="ng-hide" type="radio" name="ferryDesktop" checked="checked" />-->\n' +
    '                    <div class="row">\n' +
    '                        <div class="col-md-2 col-xs-2" style="padding-right: 0px; margin-right: -20px;">\n' +
    '                            <img alt="" src="-/media/ADDD0DACF7E44894AB0114A20F636F6E.ashx" style="vertical-align: middle;" />\n' +
    '                        </div>\n' +
    '                        <div class="col-md-10 col-xs-10" style="padding-left: 0px;">\n' +
    '                            <p class="box_object_title">Ferries are not operational</p>\n' +
    '                        </div>\n' +
    '                        <div class="col-md-12 col-xs-12">\n' +
    '                            <p class="box_object_description">Ferries are closed until late 2020.</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="row no-padding">\n' +
    '                <span ng-bind-html="$ctrl.cmsContent.LongDescription | trusted"></span>\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    '            <!-----------------------------------------------------------------Ferry Info--------------------------------------------------------------------------->\n' +
    '            <div class="col-xs-12 no-padding">\n' +
    '                <hr class="line_design no-margin-top" />\n' +
    '                <br />\n' +
    '                <label class="info_section_title no-margin-bottom">{{$ctrl.cmsContent.pageTitle}}</label>\n' +
    '                <hr class="line_design no-margin-top" />\n' +
    '                <div class="info_section_description">\n' +
    '                    <span ng-bind-html="$ctrl.cmsContent.ShortDescription | trusted"></span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/microSites/washburnTunnel.html',
    '﻿<div id="washburn-Tunnel">\n' +
    '    <header class="header-spacing">\n' +
    '        <h1 class="h1-mo tunnel-Header">{{$ctrl.cmsContent.pageTitle}}</h1>\n' +
    '    </header>\n' +
    '\n' +
    '    <div class="row border-without-footer">\n' +
    '        <!-----------------------------------------------------------------Slider Images--------------------------------------------------------------------------->\n' +
    '        <div id="mySlides" class="col-md-12 no-padding tunnel-slider-arrow" uib-carousel="" interval="$ctrl.interval" no-wrap="false" active="0" no-pause="true">\n' +
    '            <div uib-slide ng-repeat="slide in $ctrl.sliderImageURL track by slide.id" index="slide.id">\n' +
    '                <a ng-if="!slide.isVideo && slide.urlLinkOn" href="{{slide.urlLink}}">\n' +
    '                    <img class="max-scale-element" alt="" src="{{slide.url}}" />\n' +
    '                </a>\n' +
    '                <img ng-if="!slide.isVideo && !slide.urlLinkOn" class="max-scale-element" alt="" src="{{slide.url}}" />\n' +
    '                <iframe ng-if="slide.isVideo" id="videoDesktop" class="video-size" frameborder="0" ng-src="{{slide.url | trusted}}">{{$ctrl.sliderLoaded()}}</iframe>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <br class="desktopOnly" />\n' +
    '        <!-----------------------------------------------------------------Info Section DESKTOP--------------------------------------------------------------------------->\n' +
    '        <div class="row info_section_layout desktopOnly">\n' +
    '            <!-----------------------------------------------------------------Tunnel Info--------------------------------------------------------------------------->\n' +
    '            <div class="col-md-7 tunnel-alignment">\n' +
    '                <label class="info_section_title">{{$ctrl.cmsContent.pageTitle}}</label>\n' +
    '                <hr class="line_design" />\n' +
    '                <div>\n' +
    '                    <span class="info_section_description" ng-bind-html="$ctrl.cmsContent.ShortDescription | trusted"></span>\n' +
    '                </div>\n' +
    '                <br />\n' +
    '                <label class="info_section_title">{{$ctrl.cmsContent.videoTitle}}</label><hr class="line_design" />\n' +
    '                <p class="box_object_title">{{$ctrl.cmsContent.northEntrance}}</p>\n' +
    '                <div>\n' +
    '                    <img class="gif-scale-element" alt="" src="{{$ctrl.cmsContent.northEntranceURL}}" />\n' +
    '                </div>\n' +
    '                <br />\n' +
    '                <p class="box_object_title">{{$ctrl.cmsContent.southEntrance}}</p>\n' +
    '                <div>\n' +
    '                    <img class="gif-scale-element" alt="" src="{{$ctrl.cmsContent.southEntranceURL}}" />\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <!-----------------------------------------------------------------Box Object--------------------------------------------------------------------------->\n' +
    '            <div class="row box_layout">\n' +
    '                <div>\n' +
    '                    <span ng-bind-html="$ctrl.cmsContent.LongDescription | trusted"></span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <!-----------------------------------------------------------------Info Section MOBILE--------------------------------------------------------------------------->\n' +
    '        <div class="col-xs-12 mobileOnly padding-layout">\n' +
    '            <div class="row no-padding">\n' +
    '                <span ng-bind-html="$ctrl.cmsContent.LongDescription | trusted"></span>\n' +
    '            </div>\n' +
    '            <br />\n' +
    '\n' +
    '            <!-----------------------------------------------------------------Tunnel Info--------------------------------------------------------------------------->\n' +
    '            <div class="row">\n' +
    '                <div class="col-xs-12 no-padding">\n' +
    '                    <label class="info_section_title no-margin-bottom">{{$ctrl.cmsContent.pageTitle}}</label>\n' +
    '                    <hr class="line_design no-margin-top" />\n' +
    '                    <div class="info_section_description">\n' +
    '                        <span ng-bind-html="$ctrl.cmsContent.ShortDescription | trusted"></span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <!-----------------------------------------------------------------Feeds of Tunnels--------------------------------------------------------------------------->\n' +
    '                <div class="col-xs-12 no-padding">\n' +
    '                    <br />\n' +
    '                    <label class="info_section_title">{{$ctrl.cmsContent.videoTitle}}</label><hr class="line_design no-margin-top" />\n' +
    '                    <br />\n' +
    '                    <p class="box_object_title">{{$ctrl.cmsContent.northEntrance}}</p>\n' +
    '                    <div>\n' +
    '                        <img class="max-scale-element" alt="" src="{{$ctrl.cmsContent.northEntranceURL}}" />\n' +
    '                    </div>\n' +
    '                    <br />\n' +
    '                    <p class="box_object_title">{{$ctrl.cmsContent.southEntrance}}</p>\n' +
    '                    <div>\n' +
    '                        <img class="max-scale-element" alt="" src="{{$ctrl.cmsContent.southEntranceURL}}" />\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/account/managePayment.html',
    '﻿<div id="manage-payment">\n' +
    '    <account-information-header>billing</account-information-header>\n' +
    '\n' +
    '    <!-- 10px padding to account for directive at bottom -->\n' +
    '    <div ng-if="billingType !== \'INVOICE\'" class="border-with-footer-top" style="padding-bottom: 15px;">\n' +
    '        <credit-card-info ng-if="billingType === \'CREDIT\'" international="$parent.billingInfo.cards[0].international" on-edit="editPrimaryCreditCard()" creditcard="$parent.billingInfo.cards[0]" on-credit-card-edit="editPrimaryCreditCard()" add-secondary-payment="addSecondaryPayment()" show-name-on-card show-account-number multiplecards="$parent.billingInfo.cards[1] != null" is-primary-set="$parent.isPrimarySet"></credit-card-info>\n' +
    '\n' +
    '        <credit-card-info ng-if="$parent.billingInfo.cards[1] && billingType === \'CREDIT\'" creditcard="$parent.billingInfo.cards[1]" international="$parent.billingInfo.cards[0].international" on-credit-card-edit="editSecondaryCreditCard()" show-name-on-card show-account-number card2 multiplecards="$parent.billingInfo.cards[1] != null" hide-address></credit-card-info>\n' +
    '\n' +
    '        <bank-info ng-if="billingType === \'EFT\'" on-edit="editBank()" bank="$parent.billingInfo.eft" show-name-on-card show-account-number></bank-info>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-if="billingType === \'INVOICE\'" class="border-with-footer-top">\n' +
    '        <header class="header-spacing">\n' +
    '            <a class="pull-right" ng-click="onEditInvoiced()" aria-label="Edit Billing Info">Edit</a>\n' +
    '            <h2 class="h1-mo title-color-mo no-margin-top-do">Billing Information</h2>\n' +
    '            <hr />\n' +
    '            <p class="no-margin-bottom">Payment Method: Invoice</p>\n' +
    '        </header>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="mobile-bottom-buffer border-with-footer-bottom">\n' +
    '        <border-bottom-buttons hide-continue-save show-cancel on-cancel="cancel()" form-complete></border-bottom-buttons>    \n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/activateEzTag/activateEzTag.html',
    '﻿<form validation-focus name="activateTagStep1Form" novalidate>\n' +
    '    <div class="border-with-footer-top" ng-init="init(activateTagStep1Form)">\n' +
    '\n' +
    '        <header class="header-spacing">\n' +
    '            <h2 class="h1-mo no-margin-top-do">Activate EZ TAG</h2>\n' +
    '            <hr class="desktopOnly" />\n' +
    '        </header>\n' +
    '        <p class="h4 bottom-buffer-md">Please  provide the following information to locate your account and verify your identity.</p>\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <div class="bottom-buffer-md-half col-xs-12 activate-eztag-desktop-input-width" ng-class="validations.getErrorStatusClass(\'transactionId\')">\n' +
    '                <label for="transactionId">Tag Request Activation Number</label>\n' +
    '                <input type="text" name="transactionId" ng-model="activateEzTag.transactionId" class="form-control" ng-maxlength="19" id="transactionId" required ng-pattern="/^[0-9]+$/" />\n' +
    '                <div ng-messages="validations.getErrorList(\'transactionId\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '                    <p ng-message="required" class="help-block">Please enter a valid tag request activation number</p>\n' +
    '                    <p ng-message="pattern" class="help-block">Please enter a valid tag request activation number</p>\n' +
    '                    <p ng-message="maxlength" class="help-block">Please enter a valid tag request activation number</p>\n' +
    '                </div>\n' +
    '                <p class="h5 nobr-do top-buffer-xs">The activation number appears on your <span translation-skip>EZ TAG</span> order receipt.</p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row" ng-if="!removeDL">\n' +
    '            <div class="bottom-buffer-sm col-xs-12 activate-eztag-desktop-input-width" ng-class="validations.getErrorStatusClass(\'acctInfoSelect\')">\n' +
    '                <label for="acctInfoSelect" class="sr-only">Select Personal Identification Option</label>\n' +
    '                <select name="acctInfoSelect" ng-model="activateEzTag.acctInfoSelect" ng-class="isItalic(\'acctInfoSelect\')" class="form-control" id="acctInfoSelect" required="true">\n' +
    '                    <option value="" disabled selected>Select Personal Identification Option</option>\n' +
    '                    <option style="font-style: normal;" value="driversLicense">Driver License Number</option>\n' +
    '                    <option style="font-style: normal;" value="taxId">Tax ID Number</option>\n' +
    '                </select>\n' +
    '                <div ng-messages="validations.getErrorList(\'acctInfoSelect\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '                    <p ng-message="required" class="help-block">Please select an identification option</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row" ng-if="removeDL && !isAuthenticated">\n' +
    '            <div class="bottom-buffer-sm col-xs-12 activate-eztag-desktop-input-width" ng-class="validations.getErrorStatusClass(\'verificationSelect\')">                \n' +
    '                <select name="verificationSelect" ng-model="activateEzTag.verificationSelect" ng-class="isItalic(\'verificationSelect\')" class="form-control" id="verificationSelect" required="true">\n' +
    '                    <option value="" disabled selected>Select Verification Option</option>\n' +
    '                    <option style="font-style: normal;" value="emailAddress">Email Address</option>\n' +
    '                    <option style="font-style: normal;" value="phoneNumber">Phone Number</option>\n' +
    '                </select>\n' +
    '                <div ng-messages="validations.getErrorList(\'verificationSelect\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '                    <p ng-message="required" class="help-block">Please select a verification option</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row bottom-buffer-md" ng-if="!removeDL">\n' +
    '            <div ng-if="activateEzTag.acctInfoSelect === \'driversLicense\'">\n' +
    '                <div class="col-xs-4 activate-eztag-state-dropdown">\n' +
    '                    <label for="driverState" class="sr-only">Select your state</label>\n' +
    '                    <select translation-skip name="driverState" id="driverState" class="form-control"\n' +
    '                            ng-options="state.stateCode as state.stateCode for state in stateList"\n' +
    '                            ng-model="activateEzTag.selectedState"></select>\n' +
    '                </div>\n' +
    '                <div class="col-xs-8 no-padding-left activate-eztag-step1-dl" ng-class="validations.getErrorStatusClass(\'driversLicense\')">\n' +
    '                    <label for="driversLicense" class="sr-only">Driver\'s License</label>\n' +
    '                    <input type="text" name="driversLicense" ng-model="activateEzTag.driversLicense" ng-maxlength="25" validate-driver-license="activateEzTag.selectedState" ng-change="removeDoubles(activateEzTag.driversLicense, \'driversLicense\')" class="form-control" placeholder="999999999" id="driversLicense" required />\n' +
    '                    <div ng-messages="validations.getErrorList(\'driversLicense\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '                        <div ng-messages-include="/app/templates/messages/driverLicenseErrors.html"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div ng-if="activateEzTag.acctInfoSelect === \'taxId\'">\n' +
    '                <div class="col-xs-12 activate-eztag-desktop-input-width" ng-class="validations.getErrorStatusClass(\'taxIdNumber\')">\n' +
    '                    <label for="taxIdNumber" class="sr-only">Tax ID Number</label>\n' +
    '                    <input type="text" name="taxIdNumber" ng-model="activateEzTag.taxIdNumber" ng-minlength="9" ng-maxlength="11" ng-pattern="/^[0-9-]+$/" class="form-control" placeholder="00-0000000" id="taxIdNumber" required />\n' +
    '                    <div ng-messages="validations.getErrorList(\'taxIdNumber\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '                        <p ng-message="minlength" class="help-block">Please enter a valid tax ID number</p>\n' +
    '                        <p ng-message="maxlength" class="help-block">Please enter a valid tax ID number</p>\n' +
    '                        <p ng-message="required" class="help-block">Please enter a valid tax ID number</p>\n' +
    '                        <p ng-message="pattern" class="help-block">Please enter a valid tax ID number</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row bottom-buffer-md" ng-if="removeDL">\n' +
    '            <div ng-if="activateEzTag.verificationSelect === \'emailAddress\'">\n' +
    '                <div class="col-xs-12 activate-eztag-desktop-input-width">\n' +
    '                    <set-email-address model="activateEzTag.emailAddress" no-fixed-width emailid="emailAddress" form="activateTagStep1Form" required="true">Please enter the email address associated with your <span translation-skip>EZ TAG</span> account.</set-email-address>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div ng-if="activateEzTag.verificationSelect === \'phoneNumber\'">\n' +
    '                <div class="col-xs-12 activate-eztag-desktop-input-width">\n' +
    '                    <primary-phone primary-phone="activateEzTag.phoneNumber" form="activateTagStep1Form" full="true"><div style="height: 20px;">Please enter the phone number associated with your <span translation-skip>EZ TAG</span> account.</div></primary-phone>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <div class="col-xs-12">\n' +
    '                <a ng-click="searchFaqMountEzTag()">How to mount EZ TAG?</a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="border-with-footer-bottom mobile-bottom-buffer top-buffer-md-mo" ng-if="(activateEzTag.acctInfoSelect !== \'waterm\')">\n' +
    '        <border-bottom-buttons on-continue-save="submitInfo(activateTagStep1Form.$valid)" show-cancel on-cancel="onCancel()">\n' +
    '            Continue\n' +
    '        </border-bottom-buttons>\n' +
    '    </div>\n' +
    '</form>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/activateEzTag/activateEzTagHeaderPartial.html',
    '﻿<div id="june-redesign" class="row">\n' +
    '    <div class="col-xs-12">\n' +
    '        <header class="header-spacing">\n' +
    '            <h1 class="h1-mo no-margin-top-do">Vehicles &amp; EZ TAGs</h1>\n' +
    '            <account-header ng-if="isAuthenticated()" class="mobileOnly" current-balance="currentBalance" acct-id="currentUser.acctId"></account-header>\n' +
    '            <account-details-header ng-if="isAuthenticated()" class="desktopOnly" current-balance="currentBalance" current-user="currentUser"></account-details-header>\n' +
    '        </header>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div ui-view class="mobile-bottom-buffer"></div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/activateEzTag/confirmTagActivation.html',
    '﻿<form validation-focus name="activateTagStep2Form" novalidate>\n' +
    '    <div class="border-with-footer-top" ng-init="init(activateTagStep2Form)">\n' +
    '        <p class="h4 bottom-buffer-lg">Below is a list of EZ TAGs associated with TAG Activation Number: {{activateEzTag.transactionId}}</p>\n' +
    '\n' +
    '        <ez-tag-requested data="activateEzTag.vehicleList" hide-class-code><h2 class="h2">EZ TAG &amp Vehicle Information</h2></ez-tag-requested>\n' +
    '        <hr class="hr-base" style="margin-top: -15px;" />\n' +
    '\n' +
    '        <div class="bottom-buffer-md top-buffer-md">\n' +
    '            <checkbox checkbox-is-truthy="activateEzTag.userHasConfirmed" parent-form="activateTagStep2Form"\n' +
    '                      error-message="\'Please confirm EZ TAG Activation\'">Confirm EZ TAG activation</checkbox>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <p class="h4 col-md-10 col-lg-12">By confirming this information you are accepting responsibility for any fees and tolls associated with these vehicles.</p>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="border-with-footer-bottom mobile-bottom-buffer">\n' +
    '        <border-bottom-buttons on-continue-save="submitInfo(activateTagStep2Form.$valid)" show-cancel on-cancel="onCancel()">\n' +
    '            Activate\n' +
    '        </border-bottom-buttons>\n' +
    '    </div>\n' +
    '</form>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/activateEzTag/tagActivationGratitude.html',
    '﻿<form validation-focus name="activateTagStep3Form" novalidate>\n' +
    '\n' +
    '    <div class="border-with-footer-top">\n' +
    '        <h2 class="h1 no-margin-top-do">Congratulations!</h2>\n' +
    '        <hr class="desktopOnly hr-base" />\n' +
    '\n' +
    '        <p class="h4 bottom-buffer-lg">You have activated the following EZ TAG(s)</p>\n' +
    '        <ez-tag-requested data="activateEzTag.vehicleList" hide-class-code><h2 class="h2">EZ TAG &amp Vehicle Information</h2></ez-tag-requested>\n' +
    '        <hr class="mobileOnly hr-base" style="margin-top: -15px;" />\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <div class="border-with-footer-bottom mobile-bottom-buffer top-buffer-md-mo">\n' +
    '        <border-bottom-buttons on-continue-save="exitWizard()">\n' +
    '            Home\n' +
    '        </border-bottom-buttons>\n' +
    '    </div>\n' +
    '</form>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/common/modal.html',
    '﻿<div id="modal-popup">\n' +
    '    <div class="modal-header">\n' +
    '        <div class="row">\n' +
    '            <div class="col-xs-9 pull-left">\n' +
    '                <h4>{{modalOptions.headerText}}</h4>\n' +
    '            </div>\n' +
    '            <div class="col-xs-1 pull-right">\n' +
    '                <button type="button" data-ng-click="modalOptions.close()" class="close">&times;</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '        <p class="h2 bottom-buffer-xs" ng-bind-html="modalOptions.bodyText | trusted"></p>\n' +
    '        <p class="h5" ng-bind-html="modalOptions.subText | trusted"></p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-footer">\n' +
    '        <button type="button" class="btn"\n' +
    '                data-ng-click="modalOptions.close()">\n' +
    '            {{modalOptions.closeButtonText}}\n' +
    '        </button>\n' +
    '        <button type="button" class="btn"\n' +
    '                data-ng-click="modalOptions.ok(\'ok\');">\n' +
    '            {{modalOptions.actionButtonText}}\n' +
    '        </button>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/common/modalAction.html',
    '﻿<div id="modal-popup">\n' +
    '	<div class="modal-header">\n' +
    '		<div class="row">\n' +
    '			<div class="col-xs-8 pull-left">\n' +
    '				<h4 class="nobr">{{modalOptions.headerText}}</h4>\n' +
    '			</div>\n' +
    '			<div class="col-xs-1 pull-right">\n' +
    '				<button type="button" data-ng-click="modalOptions.close()" class="close">&times;</button>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '\n' +
    '	<div class="modal-body">\n' +
    '		<p class="h2 bottom-buffer-xs" ng-bind-html="modalOptions.bodyText | trusted"></p>\n' +
    '		<p class="h5" ng-bind-html="modalOptions.subText | trusted"></p>\n' +
    '	</div>\n' +
    '\n' +
    '	<div class="modal-footer">\n' +
    '		<button type="button" class="btn"\n' +
    '				data-ng-click="modalOptions.ok();">\n' +
    '			{{modalOptions.actionButtonText}}\n' +
    '		</button>\n' +
    '	</div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/common/modalAlert.html',
    '﻿<div id="modal-popup">\n' +
    '    <div class="modal-header">\n' +
    '        <div class="row">\n' +
    '            <div class="col-xs-8 pull-left">\n' +
    '                <h4 class="nobr">{{modalOptions.headerText}}</h4>\n' +
    '            </div>\n' +
    '            <div class="col-xs-1 pull-right">\n' +
    '                <button type="button" data-ng-click="modalOptions.close()" class="close">&times;</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '        <p class="h2 bottom-buffer-xs" ng-bind-html="modalOptions.bodyText | trusted"></p>\n' +
    '        <p class="h5" ng-bind-html="modalOptions.subText | trusted"></p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-footer">\n' +
    '        <button type="button" class="btn"\n' +
    '                data-ng-click="modalOptions.close()">\n' +
    '            {{modalOptions.closeButtonText}}\n' +
    '        </button>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/common/modalMaintenance.html',
    '﻿<div id="maintenance-modal-popup">\n' +
    '    <div class="modal-body">\n' +
    '        <div ng-bind-html="modalOptions.bodyText | trusted"></div>\n' +
    '        <button type="button" class="btn"\n' +
    '                data-ng-click="modalOptions.close()">\n' +
    '            <span>\n' +
    '                {{modalOptions.closeButtonText}}\n' +
    '            </span>\n' +
    '        </button>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/common/paymentModal.html',
    '﻿<div id="modal-popup">\n' +
    '    <div class="modal-header" storefront-hide-if-enabled>\n' +
    '        <div class="row">\n' +
    '            <div class="col-xs-8 pull-left">\n' +
    '                <h4>{{modalOptions.headerText}}</h4>\n' +
    '            </div>\n' +
    '            <div class="col-xs-1 pull-right">\n' +
    '                <button type="button" data-ng-click="modalOptions.close()" class="close">&times;</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div storefront-show-if-enabled>\n' +
    '        <a ng-click="modalOptions.close()" class="storefrontModalClose" storefront-modal-close></a>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body innerModalContent inner-payment-modal">\n' +
    '        <p class="h2 bottom-buffer-xs" ng-bind-html="modalOptions.subHeading | trusted"></p>\n' +
    '        <div ng-include="\'/app/templates/account/manageBillingInformation/paymentDirectivesSwitch.html\'"></div>\n' +
    '        <p class="h5" ng-bind-html="modalOptions.subText | trusted"></p>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/forgotPassword/forgotPassword.html',
    '﻿<div id="forgot-password">\n' +
    '    <div id="june-redesign" class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <header class="header-spacing">\n' +
    '                <h1 class="title-color h2-mo">Forgot Your Username or Password?</h1>\n' +
    '            </header>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <form validation-focus name="forgotpwform" novalidate>\n' +
    '        <div class="border-with-footer-top">\n' +
    '            <header class="header-spacing desktopOnly">\n' +
    '                <h2 class="no-margin-top-do h3-mo">Select an option below to reset your login</h2>\n' +
    '                <hr />\n' +
    '            </header>\n' +
    '            <div class="row">\n' +
    '                <div class="form-group col-xs-12 col-sm-5 no-margin-top">\n' +
    '                    <label for="resetOption" class="mobileOnly">Select an option below to reset your login</label>\n' +
    '                    <select name="resetOption" ng-model="forgot.option" class="form-control setItalic" ng-change="changePage()" id="resetOption" tabindex="1" aria-required="true">\n' +
    '                        <option value="waterm" ng-if="forgot.option === \'waterm\'" style="display: none;" selected>Select login reset option</option>\n' +
    '                        <option value="email">Email Address</option>\n' +
    '                        <option value="account">EZ TAG Account Information</option>\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/forgotPassword/forgotPasswordAccount.html',
    '﻿<forgot-password-remote vm="vm.remote"></forgot-password-remote>\n' +
    '<div id="forgot-password">\n' +
    '    <div id="june-redesign" class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <header class="header-spacing">\n' +
    '                <h1 class="title-color h2-mo">Forgot Your Username or Password?</h1>\n' +
    '            </header>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <form validation-focus name="forgotpwform" novalidate>\n' +
    '        <div class="border-with-footer-top">\n' +
    '            <div class="row">\n' +
    '                <div class="col-xs-12">\n' +
    '                    <header class="header-spacing desktopOnly">\n' +
    '                        <h2 class="no-margin-top-do h3-mo">Select an option below to reset your login</h2>\n' +
    '                        <hr />\n' +
    '                    </header>\n' +
    '                </div>\n' +
    '                <div class="col-xs-12 col-sm-5 form-group bottom-buffer-lg-mo bottom-buffer-sm-do">\n' +
    '                    <label for="resetOption" class="mobileOnly">Select an option below to reset your login</label>\n' +
    '                    <select name="resetOption" ng-model="forgot.option" class="form-control" ng-change="changePage()" id="resetOption" tabindex="1" aria-required="true">\n' +
    '                        <option value="email">Email Address</option>\n' +
    '                        <option value="account" selected>EZ TAG Account Information</option>\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row no-margin">\n' +
    '                <header class="header-spacing desktopOnly">\n' +
    '                    <h2 class="h3-mo">Locate your account</h2>\n' +
    '                    <hr class="no-margin-bottom-mo" />\n' +
    '                </header>\n' +
    '            </div>\n' +
    '            <account-identification id-info-object="forgot" parent-form="forgotpwform" password-reset-option="forgot.option" statement-help-link="statementCmsHelpLink"></account-identification>\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="border-with-footer-bottom top-buffer-md-mo mobile-bottom-buffer">\n' +
    '            <div ng-if="forgot.accountInfo !== \'waterm\'">\n' +
    '                <border-bottom-buttons on-continue-save="submitInfo(forgotpwform.$valid)">\n' +
    '                    Submit\n' +
    '                </border-bottom-buttons>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/forgotPassword/forgotPasswordEmail.html',
    '﻿<div id="forgot-password">\n' +
    '    <div id="june-redesign" class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <header class="header-spacing">\n' +
    '                <h1 class="title-color h2-mo">Forgot Your Username or Password?</h1>\n' +
    '            </header>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <form validation-focus name="forgotpwform" novalidate>\n' +
    '        <div class="border-with-footer-top">\n' +
    '            <div class="row">\n' +
    '                <div class="col-xs-12">\n' +
    '                    <header class="header-spacing desktopOnly">\n' +
    '                        <h2 class="no-margin-top-do h3-mo">Select an option below to reset your login</h2>\n' +
    '                        <hr />\n' +
    '                    </header>\n' +
    '                </div>\n' +
    '                <div class="col-xs-12 col-sm-5 form-group bottom-buffer-lg">\n' +
    '                    <label for="resetOption" class="mobileOnly">Select an option below to reset your login</label>\n' +
    '                    <select name="resetOption" ng-model="forgot.option" class="form-control" ng-change="changePage()" id="resetOption" tabindex="1" aria-required="true">\n' +
    '                        <option value="email" selected>Email Address</option>\n' +
    '                        <option value="account">EZ TAG Account Information</option>\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="row">\n' +
    '                <div class="col-xs-12">\n' +
    '                    <set-email-address model="forgot.email" emailid="emailAddress" form="forgotpwform" required="true">Please enter the email address associated with your EZ TAG account.</set-email-address>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="border-with-footer-bottom top-buffer-md-mo mobile-bottom-buffer">\n' +
    '            <border-bottom-buttons on-continue-save="submitEmail(forgotpwform.$valid)">\n' +
    '                Submit\n' +
    '            </border-bottom-buttons>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/forgotPassword/forgotPasswordEmailSent.html',
    '﻿<div id="forgot-password">\n' +
    '    <div id="june-redesign" class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <header class="header-spacing desktopOnly">\n' +
    '                <h1 class="title-color">Forgot Your Username or Password?</h1>\n' +
    '            </header>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="border-with-footer-top">\n' +
    '        <div class="row">\n' +
    '            <div class="col-xs-12">\n' +
    '                <header class="header-spacing">\n' +
    '                    <h2 class="h1-mo no-margin-top-do title-color-mo">Password Reset Email Sent</h2>\n' +
    '                    <hr />\n' +
    '                </header>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="col-xs-12">\n' +
    '                <p class="top-buffer-sm h3-half">Please follow the instructions we sent to <span class="font-avenir-medium">{{email}}</span> to receive your username and/or reset your password.</p>\n' +
    '                <p class="h4 top-buffer-md no-margin-bottom">\n' +
    '                    If you did not receive the password reset email, check your spam folder for an email from <span class="font-avenir-medium">noreply@hctra.org</span>.\n' +
    '                </p>\n' +
    '                <p class="h4">\n' +
    '                    If you still have not received the password reset email, you can also reset your login information using your account\n' +
    '                    or tag number, or <a ng-click="goToHelpAndSupport()">contact us</a> for help.\n' +
    '                </p>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/forgotPassword/passwordReset.html',
    '﻿<div id="password-reset">\n' +
    '    <div id="june-redesign" class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <header class="header-spacing desktopOnly">\n' +
    '                <h1 class="title-color">Forgot Your Username or Password?</h1>\n' +
    '            </header>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <form validation-focus name="forgotpwform" novalidate>\n' +
    '        <div class="border-with-footer-top">\n' +
    '            <header class="header-spacing bottom-buffer-lg-do">\n' +
    '                <h2 class="title-color-mo h1-mo no-margin-top-do">Identity Confirmed</h2>\n' +
    '                <hr class="desktopOnly" />\n' +
    '\n' +
    '                <div class="row">\n' +
    '                    <div id="username-label" class="col-xs-6 no-padding-right">\n' +
    '                        <p class="h4 no-margin-bottom">Username:</p>\n' +
    '                    </div>\n' +
    '                    <div class="col-xs-6 no-padding-left">\n' +
    '                        <p id="username" class="h3-mo h4-do font-avenir-medium no-margin-bottom">{{forgot.user}}</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <hr class="mobileOnly" />\n' +
    '            </header>\n' +
    '\n' +
    '            <div class="bottom-buffer-lg">\n' +
    '                <header class="header-spacing">\n' +
    '                    <h2 class="h1-mo">Reset Password</h2>\n' +
    '                    <hr class="desktopOnly" />\n' +
    '                </header>\n' +
    '\n' +
    '                <div class="row">\n' +
    '                    <div class="form-group col-xs-12 col-sm-4" ng-class="violations.getErrorStatusClass(\'password\')">\n' +
    '                        <label for="password" class="nobr">New Password</label>\n' +
    '                        <input id="password" name="password" ng-model="forgot.password" class="form-control" type="password" placeholder="must be at least 8 alpha-numeric characters" required ng-pattern="/^[a-zA-Z0-9-_@.]+$/" ng-minlength="8" ng-maxlength="16" />\n' +
    '                        <div ng-messages="violations.getErrorList(\'password\')" ng-if="violations.hasSubmitted()" role="alert">\n' +
    '                            <p ng-message="required" class="help-block">Please enter a new password</p>\n' +
    '                            <p ng-message="minlength" class="help-block">Must be at least 8 characters</p>\n' +
    '                            <p ng-message="maxlength" class="help-block">Must be no more than 16 characters</p>\n' +
    '                            <p ng-message="pattern" class="help-block">Characters must be alphanumeric or @_.-</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group col-xs-12 col-sm-4" ng-class="violations.isValid(\'password\') ? violations.getErrorStatusClass(\'password2\') : \'\'">\n' +
    '                        <label for="password2" class="nobr">Confirm New Password</label>\n' +
    '                        <input id="password2" name="password2" ng-model="forgot.password2" class="form-control" type="password" placeholder="must be at least 8 alpha-numeric characters" compare-to="forgot.password" />\n' +
    '                        <div ng-messages="violations.getErrorList(\'password2\')" ng-if="violations.hasSubmitted() && violations.isValid(\'password\')" role="alert">\n' +
    '                            <p ng-message="compareTo" class="help-block">Passwords do not match</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div>\n' +
    '                <header class="header-spacing">\n' +
    '                    <h2 id="security-question-title">Change Security Question <span class="h6">(optional)</span></h2>\n' +
    '                    <hr class="desktopOnly" />\n' +
    '                </header>\n' +
    '\n' +
    '                <div class="row">\n' +
    '                    <div class="form-group col-xs-12 col-sm-4" ng-class="violations.getErrorStatusClass(\'secQuestion\')">\n' +
    '                        <label for="secQuestion" class="sr-only">Select a new security question (optional)</label>\n' +
    '                        <select ng-model="forgot.securityQuestionID" class="form-control" ng-class="isItalic(\'securityQuestionID\')" id="secQuestion" name="secQuestion" ng-required="secRequired">\n' +
    '                            <option value="-1" ng-if="forgot.securityQuestionID === \'-1\'" selected>Select Security Question</option>\n' +
    '                            <option ng-repeat="question in securityQuestions" style="font-style: normal;" value="{{question.securityQuestionID}}">{{question.securityQuestion}}</option>\n' +
    '                        </select>\n' +
    '                        <div ng-messages="violations.getErrorList(\'secQuestion\')" ng-if="violations.hasSubmitted()" role="alert">\n' +
    '                            <p ng-message="required" class="help-block">Please select a security question</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="row">\n' +
    '                    <div class="form-group col-xs-12 col-sm-4" ng-class="violations.getErrorStatusClass(\'yourAnswer\')">\n' +
    '                        <label for="yourAnswer" class="nobr">Your Answer</label>\n' +
    '                        <input id="yourAnswer" name="yourAnswer" ng-model="forgot.securityQuestionAnswer" class="form-control" type="password" ng-change="secAnswerSet()" ng-pattern="/^[a-zA-Z0-9.,\'\\u0022\\u0020]+$/" ng-maxlength="20" ng-required="forgot.securityQuestionID && forgot.securityQuestionID !== \'-1\'" />\n' +
    '                        <div ng-messages="violations.getErrorList(\'yourAnswer\')" ng-if="violations.hasSubmitted()" role="alert">\n' +
    '                            <p ng-message="required" class="help-block">Please enter a valid answer</p>\n' +
    '                            <p ng-message="maxlength" class="help-block">Please enter a valid answer</p>\n' +
    '                            <p ng-message="pattern" class="help-block">Please enter a valid answer</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group col-xs-12 col-sm-4" ng-class="violations.isValid(\'yourAnswer\') ? violations.getErrorStatusClass(\'confirmYourAnswer\') : \'\'">\n' +
    '                        <label for="confirmYourAnswer" class="nobr">Confirm Your Answer</label>\n' +
    '                        <input id="confirmYourAnswer" ng-model="forgot.confirmYourAnswer" name="confirmYourAnswer" class="form-control" type="password" optional-compare-to="forgot.securityQuestionAnswer" />\n' +
    '                        <div ng-messages="violations.getErrorList(\'confirmYourAnswer\')" ng-if="violations.hasSubmitted() && violations.isValid(\'yourAnswer\')" role="alert">\n' +
    '                            <p ng-message="optionalCompareTo" class="help-block">Security answers do not match</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="border-with-footer-bottom  top-buffer-md-mo mobile-bottom-buffer">\n' +
    '            <border-bottom-buttons on-continue-save="submitInfo(forgotpwform.$valid)">\n' +
    '                Save\n' +
    '            </border-bottom-buttons>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/forgotPassword/validateAccount.html',
    '﻿<div id="forgot-password">\n' +
    '    <div id="june-redesign" class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <header class="header-spacing desktopOnly">\n' +
    '                <h1 class="title-color">Forgot Your Username or Password?</h1>\n' +
    '            </header>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <form ng-show="question" validation-focus name="forgotpwform" novalidate>\n' +
    '        <div class="border-with-footer-top">\n' +
    '            <header class="header-spacing">\n' +
    '                <h2 class="title-color-mo h1-mo no-margin-top-do">Confirm Account Identity</h2>\n' +
    '                <hr class="desktopOnly" />\n' +
    '            </header>\n' +
    '\n' +
    '            <div class="bottom-buffer-lg">\n' +
    '                <p class="h4">Please answer your security question to confirm your identity.</p>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="bottom-buffer-md">\n' +
    '                <h4 class="no-margin-top bottom-buffer-xs">Security Question</h4>\n' +
    '                <p class="h3 font-avenir-medium">{{question}}</p>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="col-xs-12 col-sm-5" ng-class="validations.getErrorStatusClass(\'questionAnswer\')">\n' +
    '                    <label for="questionAnswer">Your Answer</label>\n' +
    '                    <input type="password" name="questionAnswer" ng-model="forgot.answer" class="form-control" required id="questionAnswer" tabindex="1" />\n' +
    '                    <div ng-messages="validations.getErrorList(\'questionAnswer\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '                        <p ng-message="required" class="help-block">Please enter a valid answer</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="border-with-footer-bottom top-buffer-md-mo mobile-bottom-buffer">\n' +
    '            <border-bottom-buttons on-continue-save="submitAnswer(forgotpwform.$valid)">\n' +
    '                Submit\n' +
    '            </border-bottom-buttons>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/helpAndSupport/helpAndSupportConfirmation.html',
    '﻿<div class="row">\n' +
    '    <div class="col-xs-12">\n' +
    '        <div class="group-paragraphs">\n' +
    '            <h2 class="h1-mo">{{emailUsThankYouContent.Title}}</h2>\n' +
    '            <p class="h4" ng-bind-html="emailUsThankYouContent.ShortDescription | trusted"></p>\n' +
    '        </div>\n' +
    '        <div class="group-paragraphs">\n' +
    '            <a href="" ng-click="redirect()">{{redirectText}}</a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/helpAndSupport/helpAndSupportEmail.html',
    '﻿<div class="row">\n' +
    '    <div class="col-xs-12 bottom-buffer-md-half">\n' +
    '        <h2 class="h1-mo">{{emailUsForms.aboveFormContent.Title}}</h2>\n' +
    '        <!-- Verbiage update: See Bug 3633 -->\n' +
    '        <div class="cms-picture-auto-scale">\n' +
    '            <p class="h4" ng-bind-html="emailUsForms.aboveFormContent.ShortDescription | trusted"></p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="row">\n' +
    '    <div class="col-xs-12">\n' +
    '        <form class="no-margin-bottom" validation-focus id="helpAndSupportForm" name="helpAndSupportForm" novalidate>\n' +
    '            <div class="col-xs-12 bottom-buffer-md-half no-padding" ng-if="emailUsForms[helpAndSupportDetails.emailTopic.Form].ShortDescription">\n' +
    '                <p class="h4 no-padding" ng-bind-html="emailUsForms[helpAndSupportDetails.emailTopic.Form].ShortDescription | trusted"></p>\n' +
    '            </div>\n' +
    '            <div id="fieldParent" class="form-group top-buffer-sm-half" ng-repeat="field in cmsFormFieldsInfo">\n' +
    '                <!--Generic Dynamic Fields Begin-->\n' +
    '                <div ng-class="validation.getErrorStatusClass(field.ItemName)" ng-if="!(typeIs(field.ItemName, \'Checkbox\') || fieldIs(field.ItemName, fieldsToSpecify)) ">\n' +
    '                    <label for="{{field.ItemName}}">{{cmsFormFieldsInfo[field.ItemName].Label}}</label>\n' +
    '                    <textarea ng-if="typeIs(field.ItemName,\'TextArea\')" id="{{field.ItemName}}" name="{{field.ItemName}}" class="form-control"\n' +
    '                              rows="6"\n' +
    '                              ng-maxlength="5000"\n' +
    '                              ng-model="webFormFields[field.ItemName]"\n' +
    '                              ng-pattern="cmsFormFieldsInfo[field.ItemName].FieldValidationRegex"\n' +
    '                              ng-required="formHasFieldRequired(field.ItemName)"\n' +
    '                              ng-disabled="isSendingEmail"></textarea>\n' +
    '\n' +
    '                    <input ng-if="typeIs(field.ItemName, \'PhoneNumber\')" id="{{field.ItemName}}" name="{{field.ItemName}}" class="form-control"\n' +
    '                           type="tel"\n' +
    '                           placeholder="000-000-0000"\n' +
    '                           ng-blur="onBlurOrChangePhone(field.ItemName)"\n' +
    '                           ng-change="onBlurOrChangePhone(field.ItemName)"\n' +
    '                           ng-model="webFormFields[field.ItemName]"\n' +
    '                           ng-pattern="cmsFormFieldsInfo[field.ItemName].FieldValidationRegex"\n' +
    '                           ng-required="formHasFieldRequired(field.ItemName)"\n' +
    '                           ng-disabled="isSendingEmail" />\n' +
    '\n' +
    '                    <input ng-if="typeIs(field.ItemName, \'Email\')" id="{{field.ItemName}}" name="{{field.ItemName}}" class="form-control"\n' +
    '                           type="email"\n' +
    '                           placeholder="username@domain.com"\n' +
    '                           email-valid\n' +
    '                           ng-model="webFormFields[field.ItemName]"\n' +
    '                           ng-required="formHasFieldRequired(field.ItemName)"\n' +
    '                           ng-disabled="isSendingEmail" />\n' +
    '\n' +
    '                    <input ng-if="typeIs(field.ItemName, \'Input\')" id="{{field.ItemName}}" name="{{field.ItemName}}" class="form-control"\n' +
    '                           type="text"\n' +
    '                           ng-model="webFormFields[field.ItemName]"\n' +
    '                           ng-pattern="cmsFormFieldsInfo[field.ItemName].FieldValidationRegex"\n' +
    '                           ng-required="formHasFieldRequired(field.ItemName)"\n' +
    '                           ng-disabled="isSendingEmail" />\n' +
    '\n' +
    '                    <select ng-if="typeIs(field.ItemName, \'Dropdown\')" id="{{field.ItemName}}" name="{{field.ItemName}}"\n' +
    '                            class="form-control"\n' +
    '                            ng-model="webFormFields[field.ItemName]"\n' +
    '                            ng-required="formHasFieldRequired(field.ItemName)"\n' +
    '                            ng-disabled="isSendingEmail">\n' +
    '                        <option value="" selected>{{field.Comments}}</option>\n' +
    '                        <option ng-repeat="option in field.Options"\n' +
    '                                ng-class="{helpAndSupportDropDownBold: isBold(option)}" value="{{option.Name}}">\n' +
    '                            {{displayName(option)}}\n' +
    '                        </option>\n' +
    '                    </select>\n' +
    '\n' +
    '                    <div ng-messages="validation.getErrorList(field.ItemName)" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                        <p ng-message="required" class="help-block">{{field.FieldRequiredValidationMessage}}</p>\n' +
    '                        <p ng-message="pattern" class="help-block">{{field.FieldValidationMessage}}</p>\n' +
    '                        <p ng-message="email" class="help-block">{{field.FieldValidationMessage}}</p>\n' +
    '                        <p ng-message="maxlength" class="help-block">{{field.FieldValidationMessage}}</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div ng-if="typeIs(field.ItemName, \'Checkbox\')" class="checkbox top-buffer-sm-half no-margin-bottom-do">\n' +
    '                    <input id="{{field.ItemName}}" name="{{field.ItemName}}"\n' +
    '                           type="checkbox"\n' +
    '                           ng-model="webFormFields[field.ItemName]"\n' +
    '                           ng-disabled="isSendingEmail" />\n' +
    '                    <label for="{{field.ItemName}}">{{cmsFormFieldsInfo[field.ItemName].Label}}</label>\n' +
    '                    <div class="cms-picture-auto-scale top-buffer-xs">\n' +
    '                        <p class="h5" ng-bind-html="field.Comments | trusted"></p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <!--Generic Dynamic Fields End-->\n' +
    '                <!--Specific Dynamic Fields Begin (for special case formatting and forms e.g. TxTagDispute)-->\n' +
    '                <div ng-class="validation.getErrorStatusClass(field.ItemName)" ng-if="fieldIs(field.ItemName, [\'Email\'])" class="form-group top-buffer-sm-half ">\n' +
    '                    <label for="{{field.ItemName}}">{{cmsFormFieldsInfo[field.ItemName].Label}}</label>\n' +
    '                    <input id="{{field.ItemName}}" name="{{field.ItemName}}" class="form-control"\n' +
    '                           type="email"\n' +
    '                           placeholder="username@domain.com"\n' +
    '                           email-valid\n' +
    '                           ng-maxlength="100"\n' +
    '                           ng-model="helpAndSupportDetails.Email"\n' +
    '                           ng-required="formHasFieldRequired(field.ItemName)"\n' +
    '                           ng-disabled="isSendingEmail" />\n' +
    '                    <div ng-messages="validation.getErrorList(field.ItemName)" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                        <p ng-message="required" class="help-block">{{field.FieldRequiredValidationMessage}}</p>\n' +
    '                        <p ng-message="pattern" class="help-block">{{field.FieldValidationMessage}}</p>\n' +
    '                        <p ng-message="maxlength" class="help-block">{{field.FieldValidationMessage}}</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div ng-class="validation.getErrorStatusClass(field.ItemName)" ng-if="fieldIs(field.ItemName, [\'Comments\'])" class="form-group top-buffer-sm-half ">\n' +
    '                    <label for="{{field.ItemName}}">{{cmsFormFieldsInfo[field.ItemName].Label}}</label>\n' +
    '                    <textarea id="{{field.ItemName}}" name="{{field.ItemName}}" class="form-control"\n' +
    '                              rows="6"\n' +
    '                              ng-maxlength="4000"\n' +
    '                              ng-model="helpAndSupportDetails.Comments"\n' +
    '                              ng-pattern="cmsFormFieldsInfo[field.ItemName].FieldValidationRegex"\n' +
    '                              ng-required="formHasFieldRequired(field.ItemName)"\n' +
    '                              ng-disabled="isSendingEmail"></textarea>\n' +
    '                    <div ng-messages="validation.getErrorList(field.ItemName)" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                        <p ng-message="required" class="help-block">{{field.FieldRequiredValidationMessage}}</p>\n' +
    '                        <p ng-message="pattern" class="help-block">{{field.FieldValidationMessage}}</p>\n' +
    '                        <p ng-message="maxlength" class="help-block">{{field.FieldValidationMessage}}</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div ng-class="validation.getErrorStatusClass(field.ItemName)" ng-if="fieldIs(field.ItemName, [\'TxTagAcct\'])" class="form-group top-buffer-sm-half ">\n' +
    '                    <label for="{{field.ItemName}}">{{cmsFormFieldsInfo[field.ItemName].Label}}</label>\n' +
    '                    <textarea id="{{field.ItemName}}" name="{{field.ItemName}}" class="form-control"\n' +
    '                              rows="6"\n' +
    '                              ng-maxlength="5000"\n' +
    '                              ng-blur="setTxTagValidity()"\n' +
    '                              ng-model="tempFields.TxTagAcctTemp"\n' +
    '                              ng-required="formHasFieldRequired(field.ItemName)"\n' +
    '                              ng-disabled="isSendingEmail"></textarea>\n' +
    '                    <div ng-messages="validation.getErrorList(field.ItemName)" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                        <p ng-message="required" class="help-block">{{field.FieldRequiredValidationMessage}}</p>\n' +
    '                        <p ng-message="pattern" class="help-block">{{field.FieldValidationMessage}}</p>\n' +
    '                        <p ng-message="maxlength" class="help-block">{{field.FieldValidationMessage}}</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="row" ng-if="fieldIs(field.ItemName, [\'LicensePlate\'])">\n' +
    '                    <div ng-class="validation.getErrorStatusClass(\'State\')" ng-if="formHasField(\'State\')" class="form-group top-buffer-sm-half col-md-4 padding-right-md">\n' +
    '                        <label for="State">{{cmsFormFieldsInfo.State.Label}}</label>\n' +
    '                        <select translation-skip id="State" name="State" class="form-control"\n' +
    '                                ng-options="state.stateCode as state.stateCode for state in stateList"\n' +
    '                                ng-model="webFormFields[\'State\']"\n' +
    '                                ng-required="formHasFieldRequired(\'State\')"\n' +
    '                                ng-disabled="isSendingEmail"></select>\n' +
    '\n' +
    '                        <div ng-messages="validation.getErrorList(\'State\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                            <p ng-message="required" class="help-block">{{cmsFormFieldsInfo.State.FieldRequiredValidationMessage}}</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div ng-class="validation.getErrorStatusClass(field.ItemName)" class="form-group top-buffer-sm-half col-md-8">\n' +
    '                        <label for="{{field.ItemName}}">{{cmsFormFieldsInfo[field.ItemName].Label}}</label>\n' +
    '                        <input id="{{field.ItemName}}" name="{{field.ItemName}}" class="form-control" type="text"\n' +
    '                               ng-model="webFormFields[field.ItemName]"\n' +
    '                               ng-pattern="cmsFormFieldsInfo[field.ItemName].FieldValidationRegex"\n' +
    '                               ng-required="formHasFieldRequired(field.ItemName)"\n' +
    '                               ng-disabled="isSendingEmail" />\n' +
    '\n' +
    '                        <div ng-messages="validation.getErrorList(field.ItemName)" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                            <p ng-message="required" class="help-block">{{field.FieldRequiredValidationMessage}}</p>\n' +
    '                            <p ng-message="pattern" class="help-block">{{field.FieldValidationMessage}}</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="row" ng-if="fieldIs(field.ItemName, [\'FirstName\'])">\n' +
    '                    <!--special formatting for first/last names-->\n' +
    '                    <div ng-class="validation.getErrorStatusClass(field.ItemName)" class="form-group top-buffer-sm-half col-md-6">\n' +
    '                        <label for="{{field.ItemName}}">{{cmsFormFieldsInfo[field.ItemName].Label}}</label>\n' +
    '                        <input id="{{field.ItemName}}" name="{{field.ItemName}}" class="form-control" type="text"\n' +
    '                               ng-model="webFormFields[field.ItemName]"\n' +
    '                               ng-pattern="cmsFormFieldsInfo[field.ItemName].FieldValidationRegex"\n' +
    '                               ng-required="formHasFieldRequired(field.ItemName)"\n' +
    '                               ng-disabled="isSendingEmail" />\n' +
    '\n' +
    '                        <div ng-messages="validation.getErrorList(field.ItemName)" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                            <p ng-message="required" class="help-block">{{field.FieldRequiredValidationMessage}}</p>\n' +
    '                            <p ng-message="pattern" class="help-block">{{field.FieldValidationMessage}}</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div ng-class="validation.getErrorStatusClass(\'LastName\')" ng-if="formHasField(\'LastName\')" class="form-group top-buffer-sm-half col-md-6 padding-right-md">\n' +
    '                        <label for="LastName">{{cmsFormFieldsInfo.LastName.Label}}</label>\n' +
    '                        <input id="LastName" name="LastName" class="form-control"\n' +
    '                               ng-model="webFormFields.LastName"\n' +
    '                               ng-pattern="cmsFormFieldsInfo.LastName.FieldValidationRegex"\n' +
    '                               ng-required="formHasFieldRequired(\'LastName\')"\n' +
    '                               ng-disabled="isSendingEmail" />\n' +
    '\n' +
    '                        <div ng-messages="validation.getErrorList(\'LastName\')" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                            <p ng-message="required" class="help-block">{{cmsFormFieldsInfo.LastName.FieldRequiredValidationMessage}}</p>\n' +
    '                            <p ng-message="pattern" class="help-block">{{cmsFormFieldsInfo.LastName.FieldValidationMessage}}</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="row" ng-if="fieldIs(field.ItemName, [\'FilesUpload\'])">\n' +
    '                    <div class="form-group top-buffer-sm-half col-md-12">\n' +
    '                        <label for="{{field.ItemName}}">{{cmsFormFieldsInfo[field.ItemName].Label}}</label>\n' +
    '                        <files-upload id="{{field.ItemName}}" name="{{field.ItemName}}"\n' +
    '                                      validations="fileValidations"\n' +
    '                                      form="helpAndSupportForm"\n' +
    '                                      files="helpAndSupportDetails.Files">\n' +
    '                        </files-upload>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div ng-class="validation.getErrorStatusClass(field.ItemName)" ng-if="typeIs(field.ItemName, \'Dropdown\') && fieldIs(field.ItemName, [\'Location\'])" class="form-group top-buffer-sm-half">\n' +
    '                    <label for="{{field.ItemName}}">{{cmsFormFieldsInfo[field.ItemName].Label}}</label>\n' +
    '                    <select id="{{field.ItemName}}" name="{{field.ItemName}}" class="form-control"\n' +
    '                            ng-model="webFormFields[field.ItemName]"\n' +
    '                            ng-options="location as location.LocationID for location in field.Options"\n' +
    '                            ng-required="formHasFieldRequired(field.ItemName)"\n' +
    '                            ng-disabled="isSendingEmail">\n' +
    '                        <option value="" selected>{{field.Comments}}</option>\n' +
    '                    </select>\n' +
    '                    <div ng-messages="validation.getErrorList(field.ItemName)" ng-if="validation.hasSubmitted()" role="alert">\n' +
    '                        <p ng-message="required" class="help-block">{{field.FieldRequiredValidationMessage}}</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <!--Specific Dynamic Fields End-->\n' +
    '            </div> <!--ng-repeat end-->\n' +
    '            <div ng-bind-html="emailUsForms.belowFormContent.ShortDescription | trusted"></div>\n' +
    '            <div>\n' +
    '                <border-bottom-buttons ng-hide="isSendingEmail" on-continue-save="(helpAndSupportDetails.emailTopic.ItemName !== \'Please Select Topic\') && onSubmit(helpAndSupportForm.$valid)" \n' +
    '                                       exclude-global-disable="true"\n' +
    '                                       is-disabled="isSubmitDisabledByDefaultObj"\n' +
    '                                       show-cancel on-cancel="cancel()">\n' +
    '                    Submit\n' +
    '                </border-bottom-buttons>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/messages/driverLicenseErrors.html',
    '﻿<p ng-message="required" class="help-block">Please enter a valid driver\'s license number</p>\n' +
    '<p ng-message="maxlength" class="help-block">Please enter a valid driver\'s license number</p>\n' +
    '<p ng-message="numericTexasDl" class="help-block">Please enter a valid driver\'s license number</p>\n' +
    '<p ng-message="firstDigitLessThanFiveTexasDl" class="help-block">Texas driver\'s license start with numbers between 0 and 4</p>\n' +
    '<p ng-message="eightDigitTexasDl" class="help-block">Please use an 8 digit number</p>\n' +
    '<p ng-message="alphaNumeric" class="help-block">Please use a combination of alphabets and numbers only</p>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/newAccount/newAccount.html',
    '﻿<div id="accountCreationStepTracker" ng-hide="stepNum==8">\n' +
    '    <div id="june-redesign">\n' +
    '        <h1 id="new-account-title" class="title-color">Create an EZ TAG Account</h1>\n' +
    '    </div>\n' +
    '    <p><span ng-class="stepClass(1)">1</span> <span ng-class="stepClass(2)">2</span> <span ng-class="stepClass(3)">3</span> <span ng-class="stepClass(4)">4</span> <span ng-class="stepClass(5)">5</span> <span ng-class="stepClass(6)">6</span> <span ng-class="stepClass(7)">7</span></p>\n' +
    '</div>\n' +
    '<div ui-view></div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/newAccount/step1/createAccount.html',
    '﻿<div class="border-without-footer no-padding-bottom">\n' +
    '    <div ng-bind-html="createAccVM.existingEzTagNotice | trusted"\n' +
    '         compile-template>\n' +
    '\n' +
    '    </div>\n' +
    '    <header class="header-spacing desktopOnly">\n' +
    '        <h2>Account Information</h2>\n' +
    '        <hr />\n' +
    '    </header>\n' +
    '\n' +
    '    <form validation-focus id="createAccountPersonalAccount" name="form.personalAccountForm" novalidate>\n' +
    '\n' +
    '        <div class="bottom-buffer-lg">\n' +
    '            <div class="row">\n' +
    '                <div class="form-group col-xs-12 col-sm-5 col-md-4" ng-class="validations.getErrorStatusClass(\'companyName\')">\n' +
    '                    <label for="companyName">Company Name <span id="dl-optional-label"><i>(Optional)</i></span></label>\n' +
    '                    <input id="companyName" name="companyName" class="form-control" type="text" ng-model="accountInfo.companyName" ng-pattern="/^[0-9a-zA-Z\\-\\,\\.\\\'\\s]*$/" ng-maxlength="100"/>\n' +
    '                    <div ng-messages="validations.getErrorList(\'companyName\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '                        <p ng-message="required" class="help-block">Please enter a valid company name</p>\n' +
    '                        <p ng-message="pattern" class="help-block">Please enter a valid company name</p>\n' +
    '                        <p ng-message="maxlength" class="help-block">Max character limit of 100 reached</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="form-group col-xs-12 col-sm-5 col-md-4" ng-class="validations.getErrorStatusClass(\'firstName\')">\n' +
    '                    <label for="firstName">First Name</label>\n' +
    '                    <input id="firstName" name="firstName" class="form-control" type="text" ng-model="accountInfo.firstName" ng-bind-html="accountInfo.firstName" ng-bind-html="accountInfo.firstName" required ng-pattern="/^[0-9a-zA-Z\\-\\,\\.\\\'\\s]*$/" ng-maxlength="80"/>\n' +
    '                    <div ng-messages="validations.getErrorList(\'firstName\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '                        <p ng-message="required" class="help-block">Please enter a valid first name</p>\n' +
    '                        <p ng-message="maxlength" class="help-block">Please enter a valid first name</p>\n' +
    '                        <p ng-message="pattern" class="help-block">Please enter a valid first name</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group col-xs-12 col-sm-5 col-md-4" ng-class="validations.getErrorStatusClass(\'lastName\')">\n' +
    '                    <label for="lastName">Last Name</label>\n' +
    '                    <input id="lastName" name="lastName" class="form-control" type="text" ng-model="accountInfo.lastName" required ng-pattern="/^[0-9a-zA-Z\\-\\,\\.\\\'\\s]*$/" ng-maxlength="80"/>\n' +
    '                    <div ng-messages="validations.getErrorList(\'lastName\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '                        <p ng-message="required" class="help-block">Please enter a valid last name</p>\n' +
    '                        <p ng-message="maxlength" class="help-block">Please enter a valid last name</p>\n' +
    '                        <p ng-message="pattern" class="help-block">Please enter a valid last name</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="col-xs-12 col-sm-5 col-md-4">\n' +
    '                    <set-email-address ng-if="!isLoggedIn" model="accountInfo.emailAddress" emailid="emailAddress" form="form.personalAccountForm" required="true" no-fixed-width>Email Address</set-email-address>\n' +
    '                </div>\n' +
    '\n' +
    '                <div ng-if="!isLoggedIn" class="form-group col-xs-12 col-sm-5 col-md-4" ng-class="isValid(\'emailAddress\') ? validations.getErrorStatusClass(\'confirmEmailAddress\') : \'\'">\n' +
    '                    <label for="confirmEmailAddress">Confirm Email Address</label>\n' +
    '                    <input ng-disabled="isLoggedIn" id="confirmEmailAddress" ng-model="confirmModels.confirmEmailAddress" name="confirmEmailAddress" class="form-control" type="email" placeholder="username@domain.com" ng-required="!isLoggedIn" compare-to="accountInfo.emailAddress" case-insensitive />\n' +
    '                    <div ng-messages="validations.getErrorList(\'confirmEmailAddress\')" ng-if="validations.hasSubmitted() && isValid(\'emailAddress\')" role="alert">\n' +
    '                        <p ng-message="compareTo" class="help-block">Email addresses do not match</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="col-xs-12 col-sm-5 col-md-4">\n' +
    '                    <set-email-address ng-if="!isLoggedIn" model="accountInfo.altEmailAddress" emailid="altEmailAddress" form="form.personalAccountForm" required="false" no-fixed-width not-equal="accountInfo.emailAddress">Alternate Email Address</set-email-address>\n' +
    '                </div>\n' +
    '\n' +
    '                <div ng-if="!isLoggedIn" class="form-group col-xs-12 col-sm-5 col-md-4" ng-class="isValid(\'altEmailAddress\') ? validations.getErrorStatusClass(\'confirmAltEmailAddress\') : \'\'">\n' +
    '                    <label for="confirmAltEmailAddress">Confirm Alternate Email Address</label>\n' +
    '                    <input ng-disabled="isLoggedIn" id="confirmAltEmailAddress" ng-model="confirmModels.confirmAltEmailAddress" name="confirmAltEmailAddress" class="form-control" type="email" placeholder="username@domain.com" compare-to="accountInfo.altEmailAddress" case-insensitive />\n' +
    '                    <div ng-messages="validations.getErrorList(\'confirmAltEmailAddress\')" ng-if="validations.hasSubmitted() && isValid(\'altEmailAddress\')" role="alert">\n' +
    '                        <p ng-message="compareTo" class="help-block">Alt. Email addresses do not match</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <ng-include ng-if="!isLoggedIn" src="\'/app/templates/newAccount/step1/setupAccountLoginPartial.html\'"></ng-include>\n' +
    '\n' +
    '        <header class="header-spacing top-buffer-xl-do">\n' +
    '            <hr class="border-hr-margins desktopOnly" style="margin-bottom: 0;" />\n' +
    '        </header>\n' +
    '\n' +
    '        <div class="top-buffer-md-mo mobile-bottom-buffer border-buttons-margins">\n' +
    '            <border-bottom-buttons on-continue-save="onSubmit(form.personalAccountForm.$valid)">\n' +
    '                Save &amp; Continue\n' +
    '            </border-bottom-buttons>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/newAccount/step1/setupAccountLoginPartial.html',
    '﻿<header class="header-spacing">\n' +
    '    <h2>Setup Account Login</h2>\n' +
    '    <hr class="desktopOnly" />\n' +
    '</header>\n' +
    '<div class="row">\n' +
    '    <div class="form-group col-xs-12 col-sm-5 col-md-4" ng-class="validations.getErrorStatusClass(\'username\')">\n' +
    '        <label for="username">Username</label>\n' +
    '        <input ng-disabled="isLoggedIn" id="username" name="username" ng-model="accountInfo.username" class="form-control" type="text" placeholder="min. 6 alpha-num characters" ng-required="!isLoggedIn" ng-pattern="/^[a-zA-Z0-9-_@.]+$/" ng-minlength="6" ng-maxlength="80" />\n' +
    '        <div ng-messages="validations.getErrorList(\'username\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '            <p ng-message="required" class="help-block">Please enter a valid username</p>\n' +
    '            <p ng-message="minlength" class="help-block">Must be at least 6 characters</p>\n' +
    '            <p ng-message="maxlength" class="help-block">Must be no more than 80 characters</p>\n' +
    '            <p ng-message="pattern" class="help-block">Characters must be alpha-numeric or @_.-</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="row">\n' +
    '    <div class="form-group col-xs-12 col-sm-5 col-md-4" ng-class="validations.getErrorStatusClass(\'password\')">\n' +
    '        <label for="password">Password</label>\n' +
    '        <input ng-disabled="isLoggedIn" id="password" name="password" ng-model="accountInfo.password" class="form-control" type="password" placeholder="{{createAccVM.pwPlaceHolder}}" ng-required="!isLoggedIn" ng-pattern="/^[A-Za-z0-9._!@#$^*&();?{}`~<>,+-]+$/" ng-minlength="12" ng-maxlength="50" />\n' +
    '        <div ng-messages="validations.getErrorList(\'password\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '            <p ng-message="required" class="help-block">Please enter a valid password</p>\n' +
    '            <p ng-message="minlength" class="help-block">{{createAccVM.minPassword}}</p>\n' +
    '            <p ng-message="maxlength" class="help-block">{{createAccVM.maxPassword}}</p>\n' +
    '            <p ng-message="pattern" class="help-block">{{createAccVM.invalidCharacter}}</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group col-xs-12 col-sm-5 col-md-4" ng-class="isValid(\'password\') ? validations.getErrorStatusClass(\'confirmPassword\') : \'\'">\n' +
    '        <label for="confirmPassword">Confirm Password</label>\n' +
    '        <input ng-disabled="isLoggedIn" id="confirmPassword" ng-model="confirmModels.confirmPassword" name="confirmPassword" class="form-control" type="password" ng-required="!isLoggedIn" compare-to="accountInfo.password" />\n' +
    '        <div ng-messages="validations.getErrorList(\'confirmPassword\')" ng-if="validations.hasSubmitted() && isValid(\'password\')" role="alert">\n' +
    '            <p ng-message="compareTo" class="help-block">Passwords do not match</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="row">\n' +
    '    <div class="form-group col-xs-12 col-sm-5 col-md-4" ng-class="validations.getErrorStatusClass(\'secQuestion\')">\n' +
    '        <label for="secQuestion">Select Security Question</label>\n' +
    '        <select ng-disabled="isLoggedIn" ng-model=\'accountInfo.securityQuestionID\' class="form-control" id="secQuestion" name="secQuestion" required ng-options="question.securityQuestionID as question.securityQuestion for question in securityQuestions">\n' +
    '            <option value="" disabled selected>Please select security question</option>\n' +
    '        </select>\n' +
    '        <div ng-messages="validations.getErrorList(\'secQuestion\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '            <p ng-message="required" class="help-block">Please select a security question</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="row">\n' +
    '    <div class="form-group col-xs-12 col-sm-5 col-md-4" ng-class="validations.getErrorStatusClass(\'yourAnswer\')">\n' +
    '        <label for="yourAnswer">Your Answer</label>\n' +
    '        <input ng-disabled="isLoggedIn" id="yourAnswer" name="yourAnswer" ng-model="accountInfo.securityQuestionAnswer" class="form-control" type="password" ng-required="!isLoggedIn" ng-pattern="/^[a-zA-Z0-9.,\'\\u0022\\u0020]+$/" ng-maxlength="20" />\n' +
    '        <div ng-messages="validations.getErrorList(\'yourAnswer\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '            <p ng-message="required" class="help-block">Please enter a valid answer</p>\n' +
    '            <p ng-message="maxlength" class="help-block">Please enter a valid answer</p>\n' +
    '            <p ng-message="pattern" class="help-block">Please enter a valid answer</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group col-xs-12 col-sm-5 col-md-4" ng-class="isValid(\'yourAnswer\') ? validations.getErrorStatusClass(\'confirmYourAnswer\') : \'\'">\n' +
    '        <label for="confirmYourAnswer">Confirm Your Answer</label>\n' +
    '        <input ng-disabled="isLoggedIn" id="confirmYourAnswer" ng-model="confirmModels.confirmYourAnswer" name="confirmYourAnswer" class="form-control" type="password" ng-required="!isLoggedIn" compare-to="accountInfo.securityQuestionAnswer" />\n' +
    '        <div ng-messages="validations.getErrorList(\'confirmYourAnswer\')" ng-if="validations.hasSubmitted() && isValid(\'yourAnswer\')" role="alert">\n' +
    '            <p ng-message="compareTo" class="help-block">Answers do not match</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/newAccount/step2/createAccountDetails.html',
    '﻿<div id="personal-information">\n' +
    '    <form validation-focus name="form.personalInformationForm" novalidate>\n' +
    '        <div class="border-with-footer-top">\n' +
    '\n' +
    '            <div class="bottom-buffer-lg">\n' +
    '                <header class="header-spacing">\n' +
    '                    <h2 class="h1-mo no-margin-top-do">Personal Information</h2>\n' +
    '                    <hr class="desktopOnly" />\n' +
    '                </header>\n' +
    '                <ng-include src="\'/app/templates/newAccount/step2/phoneAddressInfoPartial.html\'"></ng-include>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="bottom-buffer-lg-do">\n' +
    '                <authorized-contact-entry authorized-contact-details="accountDetails" tentative-authorized-contact="tentativeAuthorizedContact" auth-contact-limit="authContactLimit" form="form.personalInformationForm" contacts-submitted="contactsSubmitted" no-password one-row>\n' +
    '                    <header class="header-spacing">\n' +
    '                        <h2 class="h1-mo">Add Authorized Contact</h2>\n' +
    '                        <hr class="desktopOnly" />\n' +
    '                        <p class="h4">Authorized Contacts are individuals you are allowing to access and manage your account</p>\n' +
    '                    </header>\n' +
    '                </authorized-contact-entry>\n' +
    '            </div>\n' +
    '\n' +
    '            <div>\n' +
    '                <account-preferences preferences="accountDetails.accountPreferences">\n' +
    '                    <h2 class="h1-mo">Preferences</h2>\n' +
    '                    <hr class="desktopOnly" />\n' +
    '                </account-preferences>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="border-with-footer-bottom top-buffer-md-mo mobile-bottom-buffer">\n' +
    '            <border-bottom-buttons on-continue-save="onSubmit(form.personalInformationForm.$valid)" show-previous on-previous="onPrevious()">\n' +
    '                Continue\n' +
    '            </border-bottom-buttons>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/newAccount/step2/phoneAddressInfoPartial.html',
    '﻿<div class="bottom-buffer-lg">\n' +
    '    <div class="form-group row no-margin form-entry-width" ng-if="!removeDL">\n' +
    '        <label for="dlNumber">Driver License Number <span id="dl-optional-label"><i>(Optional)</i></span></label>\n' +
    '        <div id="dlNumber">\n' +
    '            <div class="col-xs-4 no-padding-left">\n' +
    '                <label for="dlState" class="sr-only">Driver License State</label>\n' +
    '                <select translation-skip id="dlState" ng-model=\'accountDetails.driverLicState\' class="form-control" ng-options="state.stateCode as state.stateCode for state in statesList"></select>\n' +
    '            </div>\n' +
    '            <div class="col-xs-8 no-padding" ng-class="validations.getErrorStatusClass(\'driverLicNumber\')">\n' +
    '                <label for="driverLicNumber" class="sr-only">Driver License Number</label>\n' +
    '                <input id="driverLicNumber" type="text" name="driverLicNumber" ng-model="accountDetails.driverLicNumber" class="form-control" ng-maxlength="25" ng-required="!isBusiness" ng-change="removeDoubles(accountDetails.driverLicNumber, \'driverLicNumber\')" validate-driver-license="accountDetails.driverLicState" />\n' +
    '                <div ng-messages="validations.getErrorList(\'driverLicNumber\')" ng-if="validations.hasSubmitted()" role="alert" ng-class="validations.getErrorStatusClass(\'driverLicNumber\')">\n' +
    '                    <div ng-messages-include="/app/templates/messages/driverLicenseErrors.html"></div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <primary-phone primary-phone="accountDetails.primaryPhone" form="form.personalInformationForm"></primary-phone>\n' +
    '\n' +
    '    <phone-number-and-ext alt-phone-and-ext="accountDetails" form="form.personalInformationForm"></phone-number-and-ext>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '<address-entry ng-init="validateAddress=true" state-list="statesList" address="accountDetails" paymentsform="form.personalInformationForm" validate="validateAddress" country-list="countryList" international="accountDetails.internationalAddress" billing-or-mailing="mailing">\n' +
    '    <h2 class="h1-mo">Mailing Address</h2>\n' +
    '    <hr class="desktopOnly hr-base" />\n' +
    '</address-entry>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/newAccount/step3/addAdditionalVehicle.html',
    '﻿<div class="row">\n' +
    '    <div class="col-xs-12">\n' +
    '        <div class="pull-left-desktop pull-right-mobile">\n' +
    '            <a ng-click="onAddAdditionalVehicle()">Add Additional Vehicle</a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="row mobileOnly">\n' +
    '    <header class="col-xs-12 header-spacing">\n' +
    '        <hr style="margin-bottom: 0;" />\n' +
    '    </header>\n' +
    '</div>\n' +
    '\n' +
    '<header class="header-spacing top-buffer-xl-do">\n' +
    '    <hr class="border-hr-margins desktopOnly" style="margin-bottom: 0;" />\n' +
    '</header>\n' +
    '\n' +
    '<div class="top-buffer-md-mo mobile-bottom-buffer border-buttons-margins">\n' +
    '    <border-bottom-buttons on-continue-save="onContinue()" show-previous on-previous="onPrevious()">\n' +
    '        Continue\n' +
    '    </border-bottom-buttons>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/newAccount/step3/addEZTAG.html',
    '﻿<div id="createAccountAddEZTAG" class="border-without-footer no-padding-bottom">\n' +
    '    <add-multiple-vehicles ng-if="vehicleList.length > 0" vehicle-list="vehicleList" delete-function="onDelete" edit-function="onEdit"></add-multiple-vehicles>\n' +
    '    <div ui-view></div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/newAccount/step3/vehicleInformation.html',
    '﻿<form validation-focus name="form.vehicleInformationForm" novalidate>\n' +
    '    <vehicle-information is-edit="isEdit" parent-form="form.vehicleInformationForm" vehicle-info="$parent.vehicleInfo">\n' +
    '        <h2 class="h1-mo no-margin-top-do">Add EZ TAG</h2>\n' +
    '    </vehicle-information>\n' +
    '\n' +
    '    <header class="header-spacing top-buffer-xl-do">\n' +
    '        <hr class="border-hr-margins desktopOnly" style="margin-bottom: 0;" />\n' +
    '    </header>\n' +
    '\n' +
    '    <div class="top-buffer-md-mo mobile-bottom-buffer border-buttons-margins">\n' +
    '        <border-bottom-buttons ng-hide="hasVehicles()" on-continue-save="onSubmit(form.vehicleInformationForm.$valid)" show-previous on-previous="onPrevious()" form="form.vehicleInformationForm">\n' +
    '            {{isEdit ? "Update" : "Add"}} Vehicle\n' +
    '        </border-bottom-buttons>\n' +
    '        <border-bottom-buttons ng-show="hasVehicles()" on-continue-save="onSubmit(form.vehicleInformationForm.$valid)" show-previous on-previous="goToAddAdditionalVehicle()" form="form.vehicleInformationForm">\n' +
    '            {{isEdit ? "Update" : "Add"}} Vehicle\n' +
    '        </border-bottom-buttons>\n' +
    '    </div>\n' +
    '</form>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/newAccount/step4/addPaymentDetails.html',
    '﻿<div class="border-without-footer no-padding-bottom">\n' +
    '    <header class="header-spacing">\n' +
    '        <h2 class="h1-mo no-margin-top-do">Billing Information</h2>\n' +
    '        <hr class="desktopOnly" />\n' +
    '    </header>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12 bottom-buffer-sm">\n' +
    '            <label for="paymentMethod" class="h4">Select Payment Method</label>\n' +
    '            <select id="paymentMethod" class="form-control form-entry-width" ng-model="choice" ng-change="changeMethod()">\n' +
    '                <option value="" disabled selected>Select Payment Method</option>\n' +
    '                <option value="ct">Credit Card</option>\n' +
    '                <option value="bk">Bank Account</option>\n' +
    '            </select>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ui-view></div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/newAccount/step4/addressPartial.html',
    '﻿<!--<div class="form-group" ng-class="validations.getErrorStatusClass(\'addressLine1\')">\n' +
    '    <label for="addressLine1">Address Line 1</label>\n' +
    '    <input id="addressLine1" name="addressLine1" ng-model="accountDetails.address1" class="form-control" type="text" required ng-maxlength="100" ng-pattern="/^[0-9a-zA-Z\\#\\.\\:\\\'\\/\\-\\,\\s\\\\]*$/" />\n' +
    '    <div ng-messages="validations.getErrorList(\'addressLine1\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '        <p ng-message="required" class="help-block">Please enter a value</p>\n' +
    '        <p ng-message="maxlength" class="help-block">Must be 100 characters or less</p>\n' +
    '        <p ng-message="pattern" class="help-block">Not a valid address</p>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="form-group" ng-class="validations.getErrorStatusClass(\'addressLine2\')">\n' +
    '    <label for="addressLine2">Address Line 2</label>\n' +
    '    <input id="addressLine2" name="addressLine2" ng-model="accountDetails.address2" class="form-control" type="text" ng-maxlength="100" ng-pattern="/^[0-9a-zA-Z\\#\\.\\:\\\'\\/\\-\\,\\s\\\\]*$/" />\n' +
    '    <div ng-messages="validations.getErrorList(\'addressLine2\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '        <p ng-message="maxlength" class="help-block">Must be 100 characters or less</p>\n' +
    '        <p ng-message="pattern" class="help-block">Not a valid address</p>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="form-group" ng-class="validations.getErrorStatusClass(\'city\')">\n' +
    '    <label for="city">City</label>\n' +
    '    <input id="city" name="city" ng-model="accountDetails.city" class="form-control" type="text" required ng-maxlength="21" ng-pattern="/^[0-9a-zA-Z\\\\\\/\\.\\s]*$/" />\n' +
    '    <div ng-messages="validations.getErrorList(\'city\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '        <p ng-message="required" class="help-block">Please enter a value</p>\n' +
    '        <p ng-message="maxlength" class="help-block">Must be 21 characters or less</p>\n' +
    '        <p ng-message="pattern" class="help-block">Not a valid city</p>\n' +
    '    </div>\n' +
    '    <p class="h5 top-buffer-xs">For military address, please enter \'APO\' or \'FFO\'</p>\n' +
    '</div>\n' +
    '<div class="form-group row no-margin">\n' +
    '    <label for="addressState">State</label>\n' +
    '    <div id="addressState">\n' +
    '        <div class="col-xs-4 no-padding-left">\n' +
    '            <select name="state" ng-model=\'accountDetails.state\' ng-options="state.stateCode as state.stateCode for state in stateList" class="form-control"></select>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="form-group row no-margin">\n' +
    '    <label for="zipCode">Zip Code</label>\n' +
    '    <div>\n' +
    '        <div class="col-xs-7 no-padding-left pull-left" ng-class="validations.getErrorStatusClass(\'zipCode\')">\n' +
    '            <input type="text" id="zipCode" name="zipCode" ng-model="accountDetails.zip" class="form-control" ng-pattern="/^\\d{5}$/" required />\n' +
    '        </div>\n' +
    '\n' +
    '        <div id="zip-four-ext" class="col-xs-5 no-padding pull-right">\n' +
    '            <label for="plus4" class="sr-only">Zip Code Plus Four Extension</label>\n' +
    '            <input type="text" id="plus4" name="plus4" ng-model="accountDetails.plus4" class="form-control" ng-pattern="/^\\d{4}$/" ng-class="validations.getErrorStatusClass(\'plus4\')" />\n' +
    '        </div>\n' +
    '\n' +
    '        <div id="zip-dash-container">\n' +
    '            <span id="zip-dash" class="icon-bar"></span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div ng-messages="validations.getErrorList(\'zipCode\')" ng-if="validations.hasSubmitted()" role="alert" ng-class="validations.getErrorStatusClass(\'zipCode\')">\n' +
    '        <p ng-message="required" class="help-block">Please enter a value</p>\n' +
    '        <p ng-message="pattern" class="help-block">Not a valid zip code</p>\n' +
    '    </div>\n' +
    '    <div ng-messages="validations.getErrorList(\'plus4\')" ng-if="validations.hasSubmitted()" role="alert" ng-class="validations.getErrorStatusClass(\'plus4\')">\n' +
    '        <p ng-message="pattern" class="help-block">Zip extension must be four digits</p>\n' +
    '    </div>\n' +
    '</div>-->');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/newAccount/step4/bankAccountEntry.html',
    '﻿<form validation-focus name="paymentEntry" novalidate>\n' +
    '\n' +
    '    <bank-account-entry bank-details="$parent.bankDetails" paymentsform="paymentEntry" validate="true"></bank-account-entry>\n' +
    '\n' +
    '    <div ng-include="\'/app/templates/newAccount/step4/ezTagAgreementPartial.html\'"></div>\n' +
    '    <div class="bottom-buffer-lg" ng-class="validations.getErrorStatusClass(\'accept\')">\n' +
    '        <span class="checkbox h4">\n' +
    '            <label for="accept" class="sr-only">{{ezTagAgreementScreenReader}}</label>\n' +
    '            <input id="accept" type="checkbox" ng-model="paymentInfo.accept" name="accept" required style="margin-top: 3px;" />{{ezTagAgreementCheckBoxMessage}}\n' +
    '        </span>\n' +
    '        <div ng-messages="validations.getErrorList(\'accept\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '            <p ng-message="required" class="help-block">{{ezTagAgreementCheckBoxError}}</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <header class="header-spacing top-buffer-xl-do">\n' +
    '        <hr class="border-hr-margins desktopOnly" style="margin-bottom: 0;" />\n' +
    '    </header>\n' +
    '\n' +
    '    <div class="top-buffer-md-mo mobile-bottom-buffer border-buttons-margins">\n' +
    '        <border-bottom-buttons on-continue-save="submitBK(paymentEntry.$valid)" show-previous on-previous="onPrevious()" form="paymentEntry">\n' +
    '            Continue\n' +
    '        </border-bottom-buttons>\n' +
    '    </div>\n' +
    '\n' +
    '</form>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/newAccount/step4/creditCardEntry.html',
    '﻿<form validation-focus name="paymentEntry" novalidate>\n' +
    '\n' +
    '    <credit-card-entry credit-card="creditCard" paymentsform="paymentEntry" name-suffix="creditCardEntry.submit" auto-update></credit-card-entry>\n' +
    '\n' +
    '    <header class="header-spacing">\n' +
    '        <h2 class="top-buffer-lg h1-mo">Credit Card Billing Address</h2>\n' +
    '        <hr class="desktopOnly" />\n' +
    '    </header>\n' +
    '\n' +
    '    <span class="checkbox-inline text-small">\n' +
    '        <label for="sameAddress" class="sr-only">Credit Card and Mailing Address are the Same</label>\n' +
    '        <input id="sameAddress" type="checkbox" ng-model="paymentInfo.sameAddress" name="billingAddressSame" checked="checked" />\n' +
    '        <p class="h5 top-buffer-2" ng-class="{\'no-margin-bottom\': !paymentInfo.sameAddress}">Same As Mailing Address</p>\n' +
    '    </span>\n' +
    '\n' +
    '    <div ng-if="(paymentInfo.sameAddress)" class="tab-23 h4">\n' +
    '        <address-display address="mailingAddress" international="mailingAddress.international" display-country="displayCountry"></address-display>\n' +
    '    </div>\n' +
    '\n' +
    '    <address-entry ng-if="(!paymentInfo.sameAddress)" ng-init="validateAddress=true" state-list="stateList" address="accountDetails" paymentsform="paymentEntry" validate="validateAddress" country-list="countryList" international="$parent.international">\n' +
    '    </address-entry>\n' +
    '\n' +
    '    <div ng-include="\'/app/templates/newAccount/step4/ezTagAgreementPartial.html\'"></div>\n' +
    '    <div class="bottom-buffer" ng-class="validations.getErrorStatusClass(\'acceptz\')">\n' +
    '        <span class="checkbox h4">\n' +
    '            <label for="accept" class="sr-only">{{ezTagAgreementScreenReader}}</label>\n' +
    '            <input id="accept" type="checkbox" ng-model="accept" name="acceptz" required style="margin-top: 3px;" />{{ezTagAgreementCheckBoxMessage}}\n' +
    '        </span>\n' +
    '        <div ng-messages="validations.getErrorList(\'acceptz\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '            <p ng-message="required" class="help-block">{{ezTagAgreementCheckBoxError}}</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <header class="header-spacing top-buffer-xl-do">\n' +
    '        <hr class="border-hr-margins desktopOnly" style="margin-bottom: 0;" />\n' +
    '    </header>\n' +
    '\n' +
    '    <div class="top-buffer-md-mo mobile-bottom-buffer border-buttons-margins">\n' +
    '        <border-bottom-buttons on-continue-save="submitCC(paymentEntry.$valid)" show-previous on-previous="onPrevious()" form="paymentEntry">\n' +
    '            Continue\n' +
    '        </border-bottom-buttons>\n' +
    '    </div>\n' +
    '</form>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/newAccount/step4/ezTagAgreementPartial.html',
    '﻿<div class="top-buffer-lg">\n' +
    '    <header class="header-spacing">\n' +
    '        <h2 class="no-margin-top h1-mo">{{ezTagAgreementHeader}}</h2>\n' +
    '        <hr class="desktopOnly" />\n' +
    '    </header>\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12 col-sm-10">\n' +
    '            <!--TODO: 2 different out-of-scope links on this page-->\n' +
    '            <div ng-bind-html="ezTagAgreement | trusted" \n' +
    '                 compile-template></div>\n' +
    '            <div ng-bind-html="ezTagAgreementDescription | trusted" \n' +
    '                 compile-template></div>\n' +
    '            <p class="h5">{{contactUsPreButton}} <a class="disable-for-storefront" ng-click="goToContactUs()">{{contactUsButton}}</a></p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/newAccount/step4/openingCostsPartial.html',
    '﻿<div class="top-buffer-md-half">\n' +
    '    <div class="bottom-buffer-lg">\n' +
    '        <header class="header-spacing">\n' +
    '            <h2 class="h1-mo">{{openingCostsHeader}}</h2>\n' +
    '            <hr class="desktopOnly" />\n' +
    '        </header>\n' +
    '        <div class="row">\n' +
    '            <div class="col-xs-12 col-sm-6">\n' +
    '                <div class="group-paragraphs no-margin-bottom">\n' +
    '                    <p class="h5">{{openingCostsMessage}}</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div>\n' +
    '        <header class="header-spacing">\n' +
    '            <h2 class="h1-mo">{{additionalFeeHeader}}</h2>\n' +
    '            <hr class="desktopOnly" />\n' +
    '        </header>\n' +
    '        <div class="row">\n' +
    '            <div class="col-xs-12 col-sm-6">\n' +
    '                <div class="group-paragraphs no-margin-bottom">\n' +
    '                    <p class="h5">{{oneTimeActivationFeeMessage}}<a ng-click="goToEzTagInformationPage()">{{learnMoreButton}}</a></p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <header class="header-spacing top-buffer-xl-do">\n' +
    '        <hr class="border-hr-margins desktopOnly" style="margin-bottom: 0;" />\n' +
    '    </header>\n' +
    '\n' +
    '    <div class="top-buffer-md-mo mobile-bottom-buffer border-buttons-margins">\n' +
    '        <border-bottom-buttons hide-continue-save show-previous on-previous="onPrevious()">\n' +
    '        </border-bottom-buttons>\n' +
    '    </div>\n' +
    '\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/newAccount/step5/createAccountSummary.html',
    '﻿<div id="create-account-summary">\n' +
    '\n' +
    '    <!-- 10px padding to account for Billing Info directive at bottom -->\n' +
    '    <div class="border-with-footer-top" style="padding-bottom: 10px;">\n' +
    '        <header class="header-spacing bottom-buffer-lg">\n' +
    '            <h2 class="h1-mo no-margin-top-do">Account Summary</h2>\n' +
    '            <hr class="desktopOnly" />\n' +
    '            <p class="h5">Please verify the following information is correct.</p>\n' +
    '        </header>\n' +
    '\n' +
    '        <verbose-login-info account="personalInfo">\n' +
    '            <header class="header-spacing">\n' +
    '                <h2 class="h1-mo">Login Information</h2>\n' +
    '                <hr />\n' +
    '            </header>\n' +
    '        </verbose-login-info>\n' +
    '\n' +
    '        <personal-info on-edit="goToPersonalOrBusinessInfo()" data="personalInfo"></personal-info>\n' +
    '\n' +
    '        <authorized-contacts contacts="authContacts" show-edit="true" on-edit="goToPersonalOrBusinessInfo()">\n' +
    '            <h2 class="h1-mo">Authorized Contacts</h2>\n' +
    '            <hr />\n' +
    '        </authorized-contacts>\n' +
    '\n' +
    '        <div class="bottom-buffer-lg">\n' +
    '            <account-preferences preferences="preferences" read-only="true" show-edit="true" on-edit="goToPersonalOrBusinessInfo()">\n' +
    '                <h2 class="h1-mo">Preferences</h2>\n' +
    '                <hr />\n' +
    '            </account-preferences>\n' +
    '        </div>\n' +
    '\n' +
    '        <ez-tag-requested on-edit="goTo(stateNames.addAdditionalVehicle)" data="vehicleList">\n' +
    '            <h2 class="h1-mo">EZ TAG Requested</h2>\n' +
    '        </ez-tag-requested>\n' +
    '\n' +
    '        <billing-info on-edit="goTo(stateNames.choosePaymentMethod)" data="billingInfo" show-account-number></billing-info>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="mobile-bottom-buffer border-with-footer-bottom">\n' +
    '        <border-bottom-buttons on-continue-save="onContinue()" show-previous on-previous="onPrevious()">\n' +
    '            Continue\n' +
    '        </border-bottom-buttons>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/newAccount/step6/checkout.html',
    '﻿<div id="create-account-checkout">\n' +
    '\n' +
    '    <!-- 10px padding to account for account-setup-charges directive at bottom -->\n' +
    '    <div class="border-with-footer-top" style="padding-bottom: 10px;">\n' +
    '        <div class="bottom-buffer-lg">\n' +
    '            <header class="header-spacing">\n' +
    '                <h2 class="h1-mo no-margin-top-do">Order Summary</h2>\n' +
    '                <hr class="desktopOnly" />\n' +
    '                <p class="h5">Please verify the information below is correct.</p>\n' +
    '            </header>\n' +
    '\n' +
    '            <div class="bottom-buffer-xs">\n' +
    '                <p class="h5">This order may trigger your account to be replenished when your tag is shipped. Your replenish amount may increase based on the total number of tags on your account.</p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <choose-delivery-method delivery="payment.deliveryMethod"></choose-delivery-method>\n' +
    '\n' +
    '        <ez-tag-requested data="vehicleList" on-edit="editVehicles()"><h2 class="h1-mo">EZ TAG Requested</h2></ez-tag-requested>\n' +
    '\n' +
    '        <account-setup-charges data="payment"></account-setup-charges>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="mobile-bottom-buffer border-with-footer-bottom">\n' +
    '        <border-bottom-buttons on-continue-save="onCheckout()" show-previous on-previous="onPrevious()">\n' +
    '            Check Out\n' +
    '        </border-bottom-buttons>\n' +
    '    </div>\n' +
    '\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/newAccount/step7/createAccountReceipt.html',
    '﻿<div id="tag-receipt">\n' +
    '    <div id="june-redesign" class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <h1 class="title-color">EZ TAG Account Receipt</h1>\n' +
    '            <hr class="hr-base mobileOnly" />\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- 10px padding to account for account-setup-charges directive at bottom -->\n' +
    '    <div class="border-with-footer-top" style="padding-bottom: 10px;">\n' +
    '\n' +
    '        <header class="header-spacing desktopOnly">\n' +
    '            <print-link class="pull-right top-buffer-sm hidden-print" print-message="printMessage"></print-link>\n' +
    '            <h2 class="h1 no-margin-top-do">{{thankYouMessage}}</h2>\n' +
    '            <hr />\n' +
    '        </header>\n' +
    '\n' +
    '        <div class="bottom-buffer-lg-half">\n' +
    '            <h2 class="h1 no-margin-top-mo mobileOnly hidden-print">{{thankYouMessage}}</h2>\n' +
    '\n' +
    '            <div class="group-paragraphs bottom-buffer-xs">\n' +
    '                <p ng-if="isMail" class="h5">\n' +
    '                    {{orderReceivedMessage}}\n' +
    '                    <span>{{byMailMessage}}</span>\n' +
    '                </p>\n' +
    '                <p ng-if="!isMail" class="h5">\n' +
    '                    {{orderReceivedMessage}}\n' +
    '                    <span ng-if="flexbookerFlag">\n' +
    '                        <span ng-if="!skippedFlexbooker">{{flexbookerPickupMessage}}</span>\n' +
    '                        <span ng-if="skippedFlexbooker">{{flexbookerSkipMessage}}</span>\n' +
    '                    </span>\n' +
    '                    <span ng-if="!flexbookerFlag">{{byPickupMessage}}</span>\n' +
    '                </p>\n' +
    '            </div>\n' +
    '            <div class="group-paragraphs">\n' +
    '                <p class="h5">{{emailConfirmMessage}}</p>\n' +
    '            </div>\n' +
    '            <div ng-if="flexbookerFlag" class="group-paragraphs">\n' +
    '                <p class="h5">{{flexbookerPickupDisclaimer}}</p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="bottom-buffer-lg">\n' +
    '            <header class="header-spacing">\n' +
    '                <h2 class="h1-mo">EZ TAG Account Information</h2>\n' +
    '                <hr />\n' +
    '            </header>\n' +
    '            <div class="group-paragraphs">\n' +
    '                <div class="bottom-buffer-xs">\n' +
    '                    <div class="row">\n' +
    '                        <div class="col-xs-6 no-padding-right account-info-label">\n' +
    '                            <p class="h4">Account Number:</p>\n' +
    '                        </div>\n' +
    '                        <div class="col-xs-6 no-padding-left">\n' +
    '                            <p translation-skip class="h4 customer-account-data">{{currentUser.acctId}}</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="bottom-buffer-xs">\n' +
    '                    <div class="row">\n' +
    '                        <div class="col-xs-6 no-padding-right account-info-label">\n' +
    '                            <p class="h4">Account Opened:</p>\n' +
    '                        </div>\n' +
    '                        <div class="col-xs-6 no-padding-left">\n' +
    '                            <p class="h4 customer-account-data">{{accountOpened | dateWithTimeZone: \'dateTimeFull\'}}</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="bottom-buffer-xs">\n' +
    '                    <div class="row">\n' +
    '                        <div class="col-xs-6 no-padding-right account-info-label">\n' +
    '                            <p class="h4">Delivery Method:</p>\n' +
    '                        </div>\n' +
    '                        <div class="col-xs-6 no-padding-left">\n' +
    '                            <p class="h4 customer-account-data">{{deliveryMethod == \'mail\' ? \'By mail\' : \'EZ TAG store\'}}</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <personal-info hide-edit="true" data="personalInfo"></personal-info>\n' +
    '\n' +
    '        <authorized-contacts contacts="authContacts">\n' +
    '            <h2 class="h1-mo">Authorized Contacts</h2>\n' +
    '            <hr />\n' +
    '        </authorized-contacts>\n' +
    '\n' +
    '        <div class="bottom-buffer-lg">\n' +
    '            <account-preferences preferences="preferences" read-only="true">\n' +
    '                <h2 class="h1-mo">Preferences</h2>\n' +
    '                <hr />\n' +
    '            </account-preferences>\n' +
    '        </div>\n' +
    '\n' +
    '        <billing-info data="billingInfo" show-account-number></billing-info>\n' +
    '\n' +
    '        <ez-tag-requested data="vehicleList">\n' +
    '            <h2 class="h1-mo">EZ TAG Requested</h2>\n' +
    '        </ez-tag-requested>\n' +
    '\n' +
    '        <account-setup-charges data="payment"></account-setup-charges>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="mobile-bottom-buffer border-with-footer-bottom">\n' +
    '        <border-bottom-buttons on-continue-save="goToNextState()" form-complete>\n' +
    '            Manage Account\n' +
    '        </border-bottom-buttons>  \n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/setupOnlineAccess/setupOnlineAccess.html',
    '﻿<div id="setup-online-access">\n' +
    '    <div ui-view></div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/setupOnlineAccess/setupOnlineAccessConfirmation.html',
    '﻿<div id="june-redesign" class="row">\n' +
    '    <div class="col-xs-12">\n' +
    '        <header class="header-spacing desktopOnly">\n' +
    '            <h1 class="title-color">First Time Login</h1>\n' +
    '        </header>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<form validation-focus name="setupOnlineAccessLoginInfoForm" novalidate>\n' +
    '    <div class="border-with-footer-top">\n' +
    '\n' +
    '        <div class="row no-margin">\n' +
    '            <header class="header-spacing">\n' +
    '                <h2 class="h1-mo no-margin-top-do">Congratulations!</h2>\n' +
    '                <hr />\n' +
    '            </header>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="bottom-buffer-lg-half">\n' +
    '            <div class="row">\n' +
    '                <div class="col-xs-12 col-sm-12">\n' +
    '                    <p class="h2">Your online access setup is complete.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="row">\n' +
    '                <div class="col-xs-12 col-sm-12">\n' +
    '                    <p class="h4">A confirmation message has been sent to your email address.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row border-with-footer-bottom">\n' +
    '        <border-bottom-buttons on-continue-save="goToLogin()">\n' +
    '            Log in to your account\n' +
    '        </border-bottom-buttons>\n' +
    '    </div>\n' +
    '</form>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/setupOnlineAccess/setupOnlineAccessIdentification.html',
    '﻿<div id="june-redesign" class="row">\n' +
    '    <div class="col-xs-12">\n' +
    '        <header class="header-spacing desktopOnly">\n' +
    '            <h1 class="title-color">First Time Login</h1>\n' +
    '        </header>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<form validation-focus name="setupOnlineAccessIdentificationForm" novalidate>\n' +
    '    <div class="border-with-footer-top">\n' +
    '\n' +
    '        <div class="row no-margin">\n' +
    '            <header class="header-spacing">\n' +
    '                <h2 class="h1-mo title-color mobileOnly">First Time Login</h2>\n' +
    '                <h2 class="no-margin-top desktopOnly">Locate Your Account</h2>\n' +
    '                <hr />\n' +
    '            </header>\n' +
    '        </div>\n' +
    '\n' +
    '        <account-identification id-info-object="setupOnlineAccessIdentificationDetails"\n' +
    '                                parent-form="setupOnlineAccessIdentificationForm" remote="vm.remote"></account-identification>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="border-with-footer-bottom" ng-if="setupOnlineAccessIdentificationDetails.accountInfo !== \'waterm\'">\n' +
    '        <border-bottom-buttons on-continue-save="submitInfo(setupOnlineAccessIdentificationForm.$valid)">\n' +
    '            Continue\n' +
    '        </border-bottom-buttons>\n' +
    '    </div>\n' +
    '</form>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/setupOnlineAccess/setupOnlineAccessLoginInfo.html',
    '﻿<div id="june-redesign" class="row">\n' +
    '    <div class="col-xs-12">\n' +
    '        <header class="header-spacing desktopOnly">\n' +
    '            <h1 class="title-color">First Time Login</h1>\n' +
    '        </header>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<form validation-focus name="setupOnlineAccessLoginInfoForm" novalidate>\n' +
    '    <div class="border-with-footer-top">\n' +
    '\n' +
    '        <div class="row no-margin">\n' +
    '            <header class="header-spacing">\n' +
    '                <h2 class="h1-mo no-margin-top-do">Setup Online Access</h2>\n' +
    '                <hr />\n' +
    '            </header>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="bottom-buffer-lg-half">\n' +
    '            <div class="row">\n' +
    '                <div class="form-group col-xs-12 col-sm-4" ng-class="validations.getErrorStatusClass(\'username\')">\n' +
    '                    <label for="username">Username</label>\n' +
    '                    <input id="username" name="username" ng-model="setupOnlineAccessLoginInfoDetails.username" class="form-control" type="text" placeholder="must be at least 6 alpha-numeric characters" ng-required="!isLoggedIn" ng-pattern="/^[a-zA-Z0-9-_@.]+$/" ng-minlength="6" ng-maxlength="80" />\n' +
    '                    <div ng-messages="validations.getErrorList(\'username\')" ng-if="validations.hasSubmitted()" role="alert">\n' +
    '                        <p ng-message="required" class="help-block">Please enter your a valid username</p>\n' +
    '                        <p ng-message="minlength" class="help-block">Must be at least 6 characters</p>\n' +
    '                        <p ng-message="maxlength" class="help-block">Must be no more than 80 characters</p>\n' +
    '                        <p ng-message="pattern" class="help-block">Characters must be alpha-numeric or @_.-</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <new-password parent-form="setupOnlineAccessLoginInfoForm" password="setupOnlineAccessLoginInfoDetails.password" confirm-password="setupOnlineAccessLoginInfoDetails.confirmPassword" tab-ordering-index="1"></new-password>\n' +
    '            <new-email tab-ordering-index="3" parent-form="setupOnlineAccessLoginInfoForm" email="setupOnlineAccessLoginInfoDetails.email" confirm-email="setupOnlineAccessLoginInfoDetails.confirmEmail"></new-email>\n' +
    '            <new-alternate-email class="hidden-xs" tab-ordering-index="5" parent-form="setupOnlineAccessLoginInfoForm" alternate-email="setupOnlineAccessLoginInfoDetails.alternateEmail" confirm-alternate-email="setupOnlineAccessLoginInfoDetails.confirmAlternateEmail"></new-alternate-email>\n' +
    '        </div>\n' +
    '\n' +
    '        <new-security-question tab-ordering-index="7" parent-form="setupOnlineAccessLoginInfoForm" security-question-i-d="setupOnlineAccessLoginInfoDetails.securityQuestionID" security-answer="setupOnlineAccessLoginInfoDetails.securityQuestionAnswer" confirm-security-answer="setupOnlineAccessLoginInfoDetails.confirmSecurityQuestionAnswer"></new-security-question>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="border-with-footer-bottom">\n' +
    '        <border-bottom-buttons on-continue-save="submitInfo(setupOnlineAccessLoginInfoForm.$valid)">\n' +
    '            Save\n' +
    '        </border-bottom-buttons>\n' +
    '    </div>\n' +
    '</form>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/siteMap/siteMap.html',
    '﻿<div class="row">\n' +
    '    <div class="col-xs-12">\n' +
    '        <h1 class="bottom-buffer-lg title-color">Site Map</h1>\n' +
    '    </div>\n' +
    '\n' +
    '    <ul list-style-type="disc">\n' +
    '        <li ng-repeat="(key, value) in vm.sitemap">\n' +
    '            <div ng-if="isNotPrototypeProperty(key, vm.sitemap)">\n' +
    '                <h3>{{value.title}}</h3>\n' +
    '                <ul list-style-type="disc">\n' +
    '                    <li ng-repeat="link in value.array">\n' +
    '                        <a href="{{link.url}}">{{link.title}}</a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '    </ul>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/storefront/StorefrontCmsModalTemplate.html',
    '﻿<a ng-click="exit()" class="storefrontModalClose" storefront-modal-close></a>\n' +
    '<div class="innerModalContent">\n' +
    '    <div storefront-dynamic-controller="cmsController">\n' +
    '        <div ng-include="cmsTemplate"></div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/storefront/StorefrontCreditCardPromptTemplate.html',
    '﻿<div class="innerModalContent triposModal">\n' +
    '    <div ng-switch="creditCardPromptStates[readerState]">\n' +
    '        <div ng-switch-when="Wait">\n' +
    '            <h1 cms-text-id="{{promptId}}" cms-text-field="Title"></h1>\n' +
    '            <section>\n' +
    '                <img cms-image-id="{{promptId}}"/>\n' +
    '            </section>\n' +
    '            <div>\n' +
    '                <h2 cms-text-id="{{promptId}}" cms-text-field="Message"></h2>\n' +
    '                <img cms-image-id="{{promptAltId}}" />\n' +
    '            </div> \n' +
    '        </div>\n' +
    '        <div ng-switch-when="Success">\n' +
    '            <img cms-image-id="{{successId}}" />\n' +
    '            <h1 cms-text-id="{{successId}}" cms-text-field="Title"></h1>\n' +
    '        </div>\n' +
    '        <div ng-switch-when="Failure">\n' +
    '            <img cms-image-id="{{failureId}}" />\n' +
    '\n' +
    '            <h1 cms-text-id="{{failureId}}" cms-text-field="Title"></h1>\n' +
    '\n' +
    '            <button type="button" class="btn" ng-click="tryAgain()">\n' +
    '                <span cms-text-id="{{failureId}}" cms-text-field="Subtitle"></span>\n' +
    '            </button>\n' +
    '\n' +
    '            <strong cms-text-id="{{failureId}}" cms-text-field="Message"></strong>\n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '    </div>\n' +
    '    <div ng-if="readerState !== creditCardPromptStates.Wait">\n' +
    '        <div storefront-hide-if-enabled>\n' +
    '            <button type="button" class="btn" ng-click="close()">Close</button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<span ng-if="readerState !== creditCardPromptStates.Wait">\n' +
    '    <span storefront-show-if-enabled>\n' +
    '        <a ng-click="close()" class="storefrontModalClose" storefront-modal-close></a>\n' +
    '    </span>\n' +
    '</span>\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/storefront/StorefrontExternalTaskModalTemplate.html',
    '﻿<div class="innerModalContent" ng-if="show">\n' +
    '    <div ui-view></div>    \n' +
    '</div>\n' +
    '<a ng-click="exit()" class="storefrontModalClose" storefront-modal-close></a>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/storefront/StorefrontGenericPromptTemplate.html',
    '﻿<div class="innerModalContent">\n' +
    '    <div ng-if="showGoBack" storefront-modal-go-back="showGoBack" ng-click="call(\'back\')"></div>\n' +
    '\n' +
    '    <h2 class="fillThreeQuarterWidth centerText" ng-if="header" ng-bind-html="header | trusted"></h2>\n' +
    '    <h4 class="fillThreeQuarterWidth centerText" ng-if="body" ng-bind-html="body | trusted"></h4>\n' +
    '    <br />   \n' +
    '    <div ng-repeat="(key, value) in actions track by $index">\n' +
    '        <button class="mediumBtn fillHalfWidth centerText" ng-if="$index === 0" ng-click="call(key)">{{actionText(key)}}</button>\n' +
    '        <a class="altLink fillHalfWidth centerText" ng-if="$index !== 0" ng-click="call(key)">{{actionText(key)}}</a>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<a ng-if="showModalClose" ng-click="call(\'close\')" class="storefrontModalClose" storefront-modal-close></a>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/storefront/StorefrontInactivityTemplate.html',
    '﻿<div class="innerModalContent" style="padding:20px">\n' +
    '    <h3 ng-bind-html="headerText | trusted"></h3>\n' +
    '    <div>\n' +
    '        <p>{{timeLeftTillResetInSeconds | secondsToDateTime | date:\'mm:ss\'}}</p>\n' +
    '        <p ng-bind-html="bodyText | trusted"></p>\n' +
    '        <button class="mediumBtn" ng-click="call(\'ok\')">{{actionText(\'ok\')}}</button>\n' +
    '    </div>    \n' +
    '</div>\n' +
    '<a ng-click="call(\'ok\')" class="storefrontModalClose" storefront-modal-close></a>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/storefront/StorefrontINeedToTemplate.html',
    '﻿<div class="innerModalContent">\n' +
    '    <h1 class="centerText" ng-if="header">{{header}}</h1>\n' +
    '    <p ng-if="body">{{body}}</p>\n' +
    '\n' +
    '    <button class="largeBtn altBtn fillThreeQuarterWidth" ng-click="call(\'talkToCsr\')">{{actionText(\'talkToCsr\')}}</button>\n' +
    '    <br/>\n' +
    '    <button class="largeBtn altBtn fillThreeQuarterWidth" ng-click="call(\'fullSite\')">{{actionText(\'fullSite\')}}</button>\n' +
    '    <br/>\n' +
    '    <button class="largeBtn fillThreeQuarterWidth" ng-click="call(\'goback\')">{{actionText(\'goback\')}}</button>\n' +
    '</div>\n' +
    '<a ng-hide="showBackButton" ng-click="call(\'goback\')" class="storefrontModalClose" storefront-modal-close></a>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/storefront/StorefrontINeedToWithMoreTemplate.html',
    '﻿<div class="innerModalContent">\n' +
    '    <div ng-if="showGoBack" storefront-modal-go-back="showGoBack" ng-click="call(\'back\')"></div>\n' +
    '    <h1 class="centerText" ng-if="header">{{header}}</h1>\n' +
    '    <p ng-if="body">{{body}}</p>\n' +
    '    \n' +
    '    <button class="largeBtn altBtn fillThreeQuarterWidth" ng-click="call(\'anotherTask\')">{{actionText(\'anotherTask\')}}</button>\n' +
    '    <br />\n' +
    '    <button class="largeBtn altBtn fillThreeQuarterWidth" ng-click="call(\'talkToCsr\')">{{actionText(\'talkToCsr\')}}</button>\n' +
    '    <br/>\n' +
    '    <button class="largeBtn altBtn fillThreeQuarterWidth" ng-click="call(\'fullSite\')">{{actionText(\'fullSite\')}}</button>\n' +
    '    <br/>\n' +
    '    <button class="largeBtn fillThreeQuarterWidth" ng-click="call(\'finish\')">{{actionText(\'finish\')}}</button>\n' +
    '</div>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/storefront/StorefrontMaintenanceTemplate.html',
    '﻿<img class="storefrontMaintenanceModeImage" src="{{image.image}}" alt="{{image.alt}}" />');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/storefront/StorefrontMissedATollPaymentModalTemplate.html',
    '﻿<div class="innerModalContent missedATollPaymentModal">\n' +
    '    <img ng-src="{{image.image}}" alt="{{image.alt}}" />\n' +
    '    <div>\n' +
    '        <h1 class="centerText">{{header}}</h1>\n' +
    '        <p class="centerText">{{body}}</p>\n' +
    '\n' +
    '        <button class="mediumBtn fillThreeQuarterWidth centerText" ng-click="call(\'signUp\')">{{actionText(\'signUp\')}}</button>\n' +
    '        <a class="altLink fillThreeQuarterWidth centerText" ng-click="call(\'finish\')">{{actionText(\'finish\')}}</a>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/storefront/StorefrontModalAlertReplacementTemplate.html',
    '﻿<div class="innerModalContent">\n' +
    '    <h1 ng-if="header" ng-bind-html="header | trusted"></h1>\n' +
    '    <h3 ng-if="body" ng-bind-html="body | trusted"></h3>\n' +
    '    <p ng-bind-html="subText | trusted"></p>\n' +
    '    <br />\n' +
    '    <button class="mediumBtn fillHalfWidth centerText" ng-if="closeButtonText" ng-click="dismiss()">{{closeButtonText}}</button>\n' +
    '    <br />\n' +
    '</div>\n' +
    '<a ng-click="dismiss()" class="storefrontModalClose" storefront-modal-close></a>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/storefront/StorefrontModalReplacementTemplate.html',
    '﻿<div class="innerModalContent">\n' +
    '    <h1 ng-if="header" ng-bind-html="header | trusted"></h1>\n' +
    '    <h3 ng-if="body" ng-bind-html="body | trusted"></h3>\n' +
    '    <p ng-bind-html="subText | trusted"></p>\n' +
    '    <br />    \n' +
    '    <button class="mediumBtn fillHalfWidth centerText" ng-if="action" ng-click="action()">{{actionButtonText}}</button>\n' +
    '    <a class="altLink fillHalfWidth centerText" ng-if="dismiss" ng-click="dismiss()">{{closeButtonText}}</a>\n' +
    '    <br />\n' +
    '</div>\n' +
    '<a ng-click="dismiss()" class="storefrontModalClose" storefront-modal-close></a>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/storefront/StorefrontOpenAccountModalTemplate.html',
    '﻿<div class="innerModalContent">\n' +
    '    <h1 class="centerText" ng-bind-html="header | trusted"></h1>\n' +
    '    <p class="fillHalfWidth centerText">\n' +
    '        {{body}}\n' +
    '    </p>\n' +
    '    <button ng-click="call(\'finish\')" class="mediumBtn fillHalfWidth">{{actionText(\'finish\')}}</button>\n' +
    '    <a ng-click="call(\'notFinished\')" class="altLink fillHalfWidth centerText">{{actionText(\'notFinished\')}}</a>\n' +
    '</div>');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/storefront/StorefrontOptionSelectionTemplate.html',
    '﻿<div id="workItemSelection" ng-keypress="keyPressed($event)">\n' +
    '    <div>\n' +
    '        <h2 ng-bind-html="cmsContent.Title | trusted"></h2>\n' +
    '    </div>\n' +
    '    <div class="optionContainer">\n' +
    '        <div class="workItem"\n' +
    '             ng-repeat="item in uiSortedWorkItems"\n' +
    '             ng-class="{ \'selected\': item.isSelected, \'unavailable\': item.isUnavailable || !item.states || item.states.length === 0}"\n' +
    '             ng-click="toggleWorkItem(item)"\n' +
    '             ng-init="isHovering = false"\n' +
    '             ng-mouseenter="isHovering = true"\n' +
    '             ng-mouseleave="isHovering = false"\n' +
    '             ng-keypress="$event.preventDefault();">\n' +
    '            <img \n' +
    '                class="icon" \n' +
    '                src="{{item.isSelected || item.isUnavailable ? item.selectedIcon.image : item.unselectedIcon.image}}" \n' +
    '                alt="{{item.isSelected || item.isUnavailable ? item.selectedIcon.alt : item.unselectedIcon.alt}}"/>\n' +
    '            <label>{{item.storefrontDisplayName}}</label>\n' +
    '            <div>\n' +
    '                <img src="{{getSelectionIcon(item, isHovering).url}}"  alt="{{getSelectionIcon(item, isHovering).alt}}" class="icon" />\n' +
    '            </div>\n' +
    '        </div>        \n' +
    '    </div>\n' +
    '    <div>\n' +
    '        <a class="openFullSiteBtn" ng-click="dontSeeWantIneed()">I don\'t see what I need.</a>\n' +
    '        <button ng-disabled="noTasksSelected" class="storefrontSmallButton exclude-global-disable" ng-click="startWorkItems()">Proceed</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/storefront/StorefrontPdfViewerTemplate.html',
    '﻿<div class="innerModalContent">\n' +
    '    <a class="grayBrickIcon" ng-click="print()">Print</a>\n' +
    '    <div pdf-viewer pdf-data="pdfRequest" pdf-loaded="loaded" pdf-error="error">{{message}}</div>\n' +
    '</div>\n' +
    '<a ng-click="close()" class="storefrontModalClose" storefront-modal-close></a>    \n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/storefront/StorefrontStartTemplate.html',
    '﻿<!--migrated-->');
}]);
})();


(function(module) {
try {
  module = angular.module('HCTRATemplates');
} catch (e) {
  module = angular.module('HCTRATemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/templates/storefront/StorefrontSurveyTemplate.html',
    '﻿<div class="survey">\n' +
    '    <div ng-hide="isSubmitted" ng-disabled="isSubmitting">\n' +
    '        <div class="row">\n' +
    '            <h1 class="col-md-12" ng-bind-html="surveyContent.Title | trusted"></h1>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row rating">\n' +
    '            <div class="col-md-3"></div>\n' +
    '            <div class="col-md-6">\n' +
    '                <label ng-repeat="option in options" class="col-md-4 margin-left-xs margin-right-xs">\n' +
    '                    <input type="radio" ng-model="survey.selection" ng-value="option.value" name="surveySelection" />\n' +
    '                    <img class="col-lg-8" ng-if="survey.selection == option.value" ng-src="{{option.selectedImageUrl}}" alt="selected" />\n' +
    '                    <img class="col-lg-8" ng-if="survey.selection != option.value" ng-src="{{option.unSelectedImageUrl}}" alt="unselected" />\n' +
    '                    <span class="optionLabel {{option.color}}">{{option.name}}</span>\n' +
    '                </label>\n' +
    '            </div>\n' +
    '            <div class="col-md-3"></div>\n' +
    '        </div>\n' +
    '        <br />\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-2"></div>\n' +
    '            <textarea name="comments" class="col-md-8 hide-horizontal-overflow"\n' +
    '                      maxlength="{{maxCommentsChars}}"\n' +
    '                      ng-model="survey.comments"\n' +
    '                      ng-attr-placeholder={{surveyContent.defaultCommentText}}\n' +
    '                      ng-class="{ \'invalid\': maxCharsReached()}"></textarea>\n' +
    '            <div class="col-md-2"></div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-2"></div>\n' +
    '            <div>\n' +
    '                <p ng-if="!maxCharsReached()" class="col-md-8 text-right">{{charRemaining()}} characters remaining</p>\n' +
    '                <p ng-if="maxCharsReached()" class="col-md-8 text-right text-danger">Must be no more than {{maxCommentsChars}} characters</p>\n' +
    '            </div>\n' +
    '            <div class="col-md-2"></div>\n' +
    '        </div>\n' +
    '        <br />\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-2"></div>\n' +
    '            <div class="col-md-4 no-padding-left padding-right-sm"><button class="col-md-12 skipBtn surveyBtn" ng-click="done()">Skip</button></div>\n' +
    '            <div class="col-md-4 no-padding-right padding-left-sm"><button class="col-md-12 button surveyBtn exclude-global-disable" ng-disabled="!canSubmitt(survey.selection)" ng-click="submit()">Submit</button></div>\n' +
    '            <div class="col-md-2"></div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div ng-show="isSubmitted" class="row">\n' +
    '        <h1 class="col-md-12 centerText bottom-buffer-lg" ng-bind-html="thankYouMessage"></h1>\n' +
    '        <br />\n' +
    '        <div class="col-md-4"></div>\n' +
    '        <button class="col-md-4 thankYouBtn largeBtn fillHalfWidth centerText bottom-buffer-lg" ng-click="done()">{{buttons["EXIT"]}}</button>\n' +
    '        <div class="col-md-4"></div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();
