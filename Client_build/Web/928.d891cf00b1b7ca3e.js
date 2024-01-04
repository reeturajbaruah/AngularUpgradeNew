"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[928],{

/***/ 59288:
/*!********************************************************************!*\
  !*** ./src/news/components/news-article/news-article.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsArticleComponent": () => (/* binding */ NewsArticleComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 65992);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 14052);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 9717);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 50432);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 48340);
/* harmony import */ var menu_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! menu/constants */ 61860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/core */ 7199);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var cms_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cms/services */ 46693);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var news_services_helpers_news_cms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! news/services/helpers/news-cms-helper */ 74109);
/* harmony import */ var _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/ui/containers/page/pageFilled.component */ 95556);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/ui/containers/card/cardDash.component */ 65663);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/safeHtml.pipe */ 49985);


















function NewsArticleComponent_a_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const facebookLink_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", facebookLink_r5, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}

function NewsArticleComponent_a_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const twitterLink_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", twitterLink_r6, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}

function NewsArticleComponent_a_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const instagramLink_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", instagramLink_r7, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}

function NewsArticleComponent_a_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const linkedinLink_r8 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", linkedinLink_r8, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}

function NewsArticleComponent_a_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const youtubeLink_r9 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", youtubeLink_r9, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}

class NewsArticleComponent {
  constructor(state, genericRepoSerivice, matIcon, cmsResolverService, location, cmsHelper) {
    this.state = state;
    this.genericRepoSerivice = genericRepoSerivice;
    this.matIcon = matIcon;
    this.cmsResolverService = cmsResolverService;
    this.location = location;
    this.cmsHelper = cmsHelper;
    this.commonCmsContentSubject = new rxjs__WEBPACK_IMPORTED_MODULE_10__.ReplaySubject();
    this.onDestroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
  }

  ngOnDestroy() {
    this.commonCmsContentSubject.complete();
    this.onDestroySubject.next();
    this.cmsHelper.reset();
  }

  get commonCmsContent() {
    //only one value needed as this is not being updated
    return this.commonCmsContentSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1));
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.cmsHelper.initialize(_this.newsArticleCms);

      const cmsId = _this.state.params.CmsId;
      const request = {
        ItemId: cmsId
      }; ////send request for cms data

      const response = yield _this.genericRepoSerivice.dataFactory.getCmsPageById(request);
      const parsedResponse = JSON.parse(response.cmsResponse);
      _this.title = parsedResponse.Title;
      _this.subtitle = parsedResponse.Subtitle;
      _this.newsDisplayDate = parsedResponse.NewsDisplayDate;
      _this.category = parsedResponse.Categories || parsedResponse.Category;
      _this.longDescription = parsedResponse.LongDescription;
      const {
        facebook,
        twitter,
        instagram,
        linkedin,
        youtube
      } = yield _this.cmsResolverService.resolve({
        ItemId: menu_constants__WEBPACK_IMPORTED_MODULE_1__.cmsIds.CommonCmsContent,
        mergeParams: true
      });

      _this.commonCmsContentSubject.next({
        facebook,
        twitter,
        instagram,
        linkedin,
        youtube
      });

      _this.facebook$ = _this.matIcon.whenAvailable('facebook-icon').pipe(available$ => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)(available$, _this.commonCmsContent), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(([, res]) => res.facebook));
      _this.twitter$ = _this.matIcon.whenAvailable('twitter-icon').pipe(available$ => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)(available$, _this.commonCmsContent), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(([, res]) => res.twitter));
      _this.instagram$ = _this.matIcon.whenAvailable('instagram-icon').pipe(available$ => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)(available$, _this.commonCmsContent), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(([, res]) => res.instagram));
      _this.linkedin$ = _this.matIcon.whenAvailable('linkedin-icon').pipe(available$ => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)(available$, _this.commonCmsContent), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(([, res]) => res.linkedin));
      _this.youtube$ = _this.matIcon.whenAvailable('youtube-icon').pipe(available$ => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)(available$, _this.commonCmsContent), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(([, res]) => res.youtube));
    })();
  }

  viewArchiveClick() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.location.go('News?filter=Archive');
    })();
  }

  getVal(key) {
    return this.cmsHelper.getVal(key);
  }

}

NewsArticleComponent.ɵfac = function NewsArticleComponent_Factory(t) {
  return new (t || NewsArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_uirouter_core__WEBPACK_IMPORTED_MODULE_2__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.GenericRepoService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.MatIconAvailabilityService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_4__.CmsResolverService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](news_services_helpers_news_cms_helper__WEBPACK_IMPORTED_MODULE_5__.NewsCmsHelper));
};

NewsArticleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NewsArticleComponent,
  selectors: [["news-article"]],
  inputs: {
    newsArticleCms: "newsArticleCms"
  },
  decls: 55,
  vars: 30,
  consts: [[1, "refresh-2020", "u-spacing--widthFill"], [3, "hasGutter"], ["fxLayout", "column", "fxLayoutGap", "20px", 1, "news-main"], ["fxFlex", "auto", "ngClass.gt-xs", "u-spacing__firstHeaderToTitle--marginTop", 3, "hasMargin"], ["fxLayout", "column"], ["id", "header1-row", "fxLayout", "row", "fxLayoutAlign", "space-between end", "fxLayoutAlign.lt-md", "space-between center", "ngClass.lt-md", "compact-menu"], ["id", "header1-left", "fxLayout", "column"], [2, "padding-bottom", "8px"], [1, "newsCategory"], [1, "newsTitle"], [1, "newsSubtitle"], ["id", "header2-row", "fxLayout", "row", "fxLayoutAlign", "space-between end", "fxLayoutAlign.lt-md", "space-between center", "ngClass.lt-md", "compact-menu", 2, "padding-bottom", "32px"], ["id", "header2-left", "fxLayout", "row", "fxLayoutAlign", "space-between end", "fxLayoutAlign.lt-md", "space-between center", 2, "height", "32px"], ["svgIcon", "clock"], [1, "published", 2, "padding-bottom", "3px"], ["id", "header2-right", "fxLayout", "column", "fxLayoutAlign", "space-between end", "fxLayoutAlign.lt-md", "space-around end"], ["fxShow", "", "fxHide.lt-md", "", "fxLayout", "row", "fxLayoutAlign", "space-between end"], ["id", "facebook-link", "target", "_blank", 3, "href", 4, "ngIf"], [2, "padding-left", "8px"], ["id", "twitter-link", "target", "_blank", 3, "href", 4, "ngIf"], ["id", "instagram-link", "target", "_blank", 3, "href", 4, "ngIf"], ["id", "linkedin-link", "target", "_blank", 3, "href", 4, "ngIf"], ["id", "youtube-link", "target", "_blank", 3, "href", 4, "ngIf"], ["id", "header3-row", "fxLayout", "row", "fxLayoutAlign", "space-between end", "fxLayoutAlign.lt-md", "space-between center", "ngClass.lt-md", "compact-menu"], [1, "description", 3, "innerHtml"], ["fxHide", "", "fxShow.lt-md", "", "fxLayout", "column", "fxLayoutAlight", "center center"], ["fxLayout", "row", "fxLayoutAlign", "center center", 2, "padding-top", "20px"], ["fxFlex", "none", "aria-label", "View Archive Page", 3, "click"], ["id", "footer-row", "fxShow", "", "fxHide.lt-md", "", "fxLayout", "row", "fxLayoutAlign", "space-between end", "fxLayoutAlign.lt-md", "space-between center", "ngClass.lt-md", "compact-menu"], ["id", "footer-left", "fxLayout", "row", "fxLayoutAlign", "space-between end", "fxLayoutAlign.lt-md", "space-between center"], ["id", "footer-right", "fxLayout", "column", "fxLayoutAlign", "space-between end", "fxLayoutAlign.lt-md", "space-around end"], ["id", "facebook-link", "target", "_blank", 3, "href"], ["svgIcon", "facebook-icon"], ["id", "twitter-link", "target", "_blank", 3, "href"], ["svgIcon", "twitter-icon"], ["id", "instagram-link", "target", "_blank", 3, "href"], ["svgIcon", "instagram-icon"], ["id", "linkedin-link", "target", "_blank", 3, "href"], ["svgIcon", "linkedin-icon"], ["id", "youtube-link", "target", "_blank", 3, "href"], ["svgIcon", "youtube-icon"]],
  template: function NewsArticleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "main", 0)(1, "page-filled-container", 1)(2, "main", 2)(3, "card-dash-container", 3)(4, "section", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 7)(11, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div")(14, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 11)(18, "div", 12)(19, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](23, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 15)(25, "div", 16)(26, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, NewsArticleComponent_a_27_Template, 2, 1, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](28, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, NewsArticleComponent_a_30_Template, 2, 1, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](31, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, NewsArticleComponent_a_33_Template, 2, 1, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](34, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, NewsArticleComponent_a_36_Template, 2, 1, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](37, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, NewsArticleComponent_a_39_Template, 2, 1, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](40, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 23)(42, "section", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](43, "article", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](44, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 25)(46, "div", 26)(47, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NewsArticleComponent_Template_a_click_47_listener() {
        return ctx.viewArchiveClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](50, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 30)(52, "div", 16)(53, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NewsArticleComponent_Template_a_click_53_listener() {
        return ctx.viewArchiveClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hasGutter", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hasMargin", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.category);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.subtitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx.getVal("publishedOn"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](23, 15, ctx.newsDisplayDate, "longDate"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](28, 18, ctx.facebook$));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](31, 20, ctx.twitter$));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](34, 22, ctx.instagram$));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](37, 24, ctx.linkedin$));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](40, 26, ctx.youtube$));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](44, 28, ctx.longDescription), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.getVal("viewArchiveButtonText"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.getVal("viewArchiveButtonText"), " ");
    }
  },
  directives: [_common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_6__.PageFilledContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutGapDirective, _common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_7__.CardDashContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__.DefaultClassDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutAlignDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDivider, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__.DefaultShowHideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_8__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  background-color: #efeff4;\n}\n@media screen and (min-width: 600px) {\n  [_nghost-%COMP%]   .news-main[_ngcontent-%COMP%] {\n    margin: 0px 2%;\n  }\n  [_nghost-%COMP%]   .news-main[_ngcontent-%COMP%]   card-dash-container[_ngcontent-%COMP%] {\n    border: 1px solid #c4c4c4;\n    border-radius: 10px;\n  }\n}\n[_nghost-%COMP%]   .test[_ngcontent-%COMP%] {\n  background-color: #efeff4;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n  margin-top: 8px;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   card-container[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}\n[_nghost-%COMP%]   card-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   card-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    + section[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]     img {\n  max-width: 100%;\n  margin-bottom: 15px;\n}\n[_nghost-%COMP%]   .newsCategory[_ngcontent-%COMP%] {\n  color: #611eb8;\n  font-family: 'Jost';\n  font-size: 14px;\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   .newsTitle[_ngcontent-%COMP%] {\n  font-family: 'Jost';\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 1.2em;\n  color: #34353a;\n}\n[_nghost-%COMP%]   .newsSubtitle[_ngcontent-%COMP%] {\n  font-family: 'Jost';\n  font-size: 16px;\n  color: #34353a;\n}\n[_nghost-%COMP%]   .published[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  color: #757575;\n  font-size: 14px;\n  padding-bottom: 3px;\n}\n[_nghost-%COMP%]   .description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #34353a;\n}\n[_nghost-%COMP%]     .description * {\n  line-height: 1.5em;\n}\n[_nghost-%COMP%]   .mobileCard[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 0px;\n  padding-right: 0px;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n[_nghost-%COMP%]   mat-icon[svgicon='clock'][_ngcontent-%COMP%] {\n  padding-right: 8px;\n  padding-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MtYXJ0aWNsZS5jb21wb25lbnQubGVzcyIsIi4uXFwuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xccGFnZS5sZXNzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFxjdXN0b21cXHNwYWNpbmdcXHNlY3Rpb25zLmxlc3MiLCIuLlxcLi5cXC4uXFxzdHlsZXNcXGN1c3RvbVxcc3BhY2luZ1xcdXRpbGl0eS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VDaUJJLHlCQUFBO0FEckJKO0FBV1E7RUFBQTtJQUNJLGNBQUE7RUFSVjtFQU9NO0lBSVEseUJBQUE7SUFDQSxtQkFBQTtFQVJkO0FBQ0Y7QUFMQTtFQ2lCSSx5QkFBQTtBRFRKO0FBUkE7RUFzQlEsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVhSO0FBYkE7RUE0QlEsY0FBQTtFRXZCQSxnQkFBQTtBRllSO0FBakJBO0VHQVEsV0FBQTtBSG9CUjtBQXBCQTtFRUtRLGdCQUFBO0FGa0JSO0FBdkJBO0VBeUNRLFdBQUE7QUFmUjtBQTFCQTtFQTZDUSxlQUFBO0VBQ0EsbUJBQUE7QUFoQlI7QUE5QkE7RUFrRFEsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBakJSO0FBcENBO0VBeURRLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBbEJSO0FBM0NBO0VBaUVRLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFuQlI7QUFoREE7RUF1RVEseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBcEJSO0FBdERBO0VBOEVRLGNBQUE7QUFyQlI7QUF6REE7RUFrRlEsa0JBQUE7QUF0QlI7QUE1REE7RUFzRlEsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBdkJSO0FBbkVBO0VBOEZRLGtCQUFBO0VBQ0EsZ0JBQUE7QUF4QlIiLCJmaWxlIjoibmV3cy1hcnRpY2xlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvY3VzdG9tL3NwYWNpbmcvc2VjdGlvbnMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvY3VzdG9tL3NwYWNpbmcvZGl2aWRlcnMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvY3VzdG9tL3NwYWNpbmcvdXRpbGl0eS5sZXNzJztcblxuOmhvc3Qge1xuXG4gICAgbWFpbiB7XG4gICAgICAgIC50LWJvZHktLWJhY2tncm91bmRDb2xvcjIoQHRoZW1lLWxpZ2h0KTtcbiAgICB9XG5cbiAgICAubmV3cy1tYWluIHtcbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWd0LXhzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDIlO1xuXG4gICAgICAgICAgICBjYXJkLWRhc2gtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBAc2lsdmVyLWdyYXk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ZXN0IHtcbiAgICAgICAgLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMihAdGhlbWUtbGlnaHQpO1xuICAgIH1cblxuICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgY2FyZC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCgpO1xuXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmctLXdpZHRoRmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VjdGlvbiArIHNlY3Rpb24ge1xuICAgICAgICAgICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIDo6bmctZGVlcCBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuXG4gICAgLm5ld3NDYXRlZ29yeSB7XG4gICAgICAgIGNvbG9yOiBAcHVycGxlLWhlYXJ0LXB1cnBsZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LWpvc3Q7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG5cbiAgICAubmV3c1RpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LWpvc3Q7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgICAgICBjb2xvcjogQHR1bmEtZ3JheTtcbiAgICB9XG5cbiAgICAubmV3c1N1YnRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LWpvc3Q7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6IEB0dW5hLWdyYXk7XG4gICAgfVxuXG4gICAgLnB1Ymxpc2hlZCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xuICAgICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbiBzcGFuIHtcbiAgICAgICAgY29sb3I6IEB0dW5hLWdyYXk7XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwIC5kZXNjcmlwdGlvbiAqIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIH1cblxuICAgIC5tb2JpbGVDYXJkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIH1cblxuICAgIG1hdC1pY29uW3N2Z2ljb249J2Nsb2NrJ10ge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3ItbGlnaHQ6IEB3aGl0ZTtcbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3IyLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMy1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWNvbG9yLWxpZ2h0OiBAdHVuYS1ncmF5O1xuQGJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLWxpZ2h0OiBAdHJvcGljYWwtcmFpbi1mb3Jlc3QtZ3JlZW47XG5AYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItbGlnaHQ6IEBzaWx2ZXItZ3JheTtcbkBoZWFkZXItLWNvbG9yLWxpZ2h0OiBAdHVuYS1ncmF5O1xuQGxhYmVsLS1jb2xvci1saWdodDogQGJvdWxkZXItZ3JheTtcbkBzZWxlY3RfX2Fycm93LS1jb2xvci1saWdodDogQHNjb3JwaW9uLWdyYXk7XG5AbGluay0tY29sb3ItbGlnaHQ6IEBhenVyZS1yYWRpYW5jZS1ibHVlO1xuQGRpdmlkZXItLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2Nob29sLWJ1cy15ZWxsb3c7XG5cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvci1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IyLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IzKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvcjMtQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1oZWFkZXItLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2hlYWRlci0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1sYWJlbC0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGFiZWwtLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtc2VsZWN0X19hcnJvdy0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnc2VsZWN0X19hcnJvdy0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1saW5rLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdsaW5rLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3IgIWltcG9ydGFudDsgLy8gbWFya2VkIGFzICFpbXBvcnRhbnQgdG8gb3ZlcnJpZGUgYm9vdHN0cmFwXG59XG5cbi50LWRpdmlkZXItLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2RpdmlkZXItLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWRpdmlkZXJfX2Rhc2gtLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG4iLCIucmVmcmVzaC0yMDIwIHtcbiAgICAvLyBEZXNrdG9wXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19faGVhZGVyVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luQm90dG9tIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3BIYWxmIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19idXR0b25Ub0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpcnN0SGVhZGVyVG9UaXRsZS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2FkZHJlc3NUb1BheW1lbnREaXNwbGF5LS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cbiAgICAvLyBNb2JpbGVcbiAgICAmLmx0LW1kLFxuICAgIC5sdC1tZCB7XG4gICAgICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG4ucmVmcmVzaC0yMDIwIHtcblxuICAgICYudS1zcGFjaW5nLS13aWR0aEZpbGwsXG4gICAgLnUtc3BhY2luZy0td2lkdGhGaWxsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnRhYi1jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICAgICAgcGFkZGluZzogMHB4IDclO1xuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1zbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGFiLWNvbnRlbnQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI3LjUycHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNHB4O1xuXG4gICAgICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtc20ge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogdW5zZXQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdW5zZXQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2NjY2U7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYW5uZXItaW1nIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyM3B4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LXNtIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjdweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYW5uZXItdHh0IHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjcuNTJweDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBKb3N0O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMjEsIDkpO1xuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiByZ2IoNjcsIDY5LCA3MykgM3B4IDJweCA4cHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgICAgICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1zbSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1zcGFjaW5nIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 84968:
/*!********************************************************************!*\
  !*** ./src/news/components/news-filters/news-filters.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsFiltersComponent": () => (/* binding */ NewsFiltersComponent)
/* harmony export */ });
/* harmony import */ var news_models_news_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! news/models/news.interface */ 78210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var news_services_state_news_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! news/services/state/news-state.service */ 22363);
/* harmony import */ var news_services_helpers_news_cms_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! news/services/helpers/news-cms-helper */ 74109);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/ui/dropdown/dropdown.component */ 14077);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ 74190);







class NewsFiltersComponent {
    constructor(newsStateService, cmsHelper) {
        this.newsStateService = newsStateService;
        this.cmsHelper = cmsHelper;
        this.categories = [];
        this.list = {
            data: []
        };
        this.viewType = news_models_news_interface__WEBPACK_IMPORTED_MODULE_0__.ViewType;
    }
    ngOnInit() {
        this.getCurrentView();
        this.categories.forEach(cat => {
            const data = {
                id: cat.queryID,
                displayName: cat.displayName
            };
            this.list.data.push(data);
            this.list.defaultDisplayName = this.newsStateService.getState().category.displayName;
        });
    }
    getCurrentView() {
        const currentState = this.newsStateService.getState();
        if (currentState) {
            this.selectedView = currentState.view;
        }
    }
    handleCategoryEvent(event) {
        const selectedCat = this.categories.filter(cat => cat.displayName === event.displayName && cat.queryID === event.id);
        if (selectedCat.length > 0) {
            this.newsStateService.dispatchEvent(news_models_news_interface__WEBPACK_IMPORTED_MODULE_0__.NewsAction.Category, selectedCat[0]);
        }
    }
    handleToggleView(clickedView) {
        const currentView = this.newsStateService.getState().view;
        if (currentView !== clickedView) {
            this.newsStateService.dispatchEvent(news_models_news_interface__WEBPACK_IMPORTED_MODULE_0__.NewsAction.ToggleView);
        }
    }
    getVal(key) {
        return this.cmsHelper.getVal(key);
    }
}
NewsFiltersComponent.ɵfac = function NewsFiltersComponent_Factory(t) { return new (t || NewsFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](news_services_state_news_state_service__WEBPACK_IMPORTED_MODULE_1__.NewsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](news_services_helpers_news_cms_helper__WEBPACK_IMPORTED_MODULE_2__.NewsCmsHelper)); };
NewsFiltersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NewsFiltersComponent, selectors: [["news-filters"]], inputs: { categories: "categories" }, decls: 14, vars: 8, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "start center", "fxLayoutGap", "10px", 1, "filter-section"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "10px", 1, "filter-container"], [1, "filter-category-title"], ["fxLayout", "column", "fxLayoutAlign", "start start"], [3, "list", "onChange"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "10px", 1, "view-container"], [1, "filter-view-title"], ["name", "fontStyle", "aria-label", "Font Style", 3, "value"], [3, "value", "click"], [1, "archive", 3, "value", "click"]], template: function NewsFiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "dropdown", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onChange", function NewsFiltersComponent_Template_dropdown_onChange_5_listener($event) { return ctx.handleCategoryEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5)(7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-button-toggle-group", 7)(10, "mat-button-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NewsFiltersComponent_Template_mat_button_toggle_click_10_listener() { return ctx.handleToggleView(ctx.viewType.Latest); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-button-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NewsFiltersComponent_Template_mat_button_toggle_click_12_listener() { return ctx.handleToggleView(ctx.viewType.Archive); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getVal("filterByCategories"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("list", ctx.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getVal("view"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.selectedView);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.viewType.Latest);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.getVal("latestNews"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.viewType.Archive);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.getVal("archive"), "");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutGapDirective, _common_ui_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_3__.DropdownComponent, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggle], styles: ["[_nghost-%COMP%]   .filter-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n[_nghost-%COMP%]   .menuItem[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .archive.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  border-left: 1px solid #007aff;\n}\n[_nghost-%COMP%]   .parentItem[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .filter-category-title[_ngcontent-%COMP%], [_nghost-%COMP%]   .filter-view-title[_ngcontent-%COMP%] {\n  font-family: 'Jost';\n  font-size: 18px;\n}\n[_nghost-%COMP%]     dropdown .criteria-shape {\n  padding: 0px 22px;\n}\n[_nghost-%COMP%]     dropdown .criteria-shape span {\n  white-space: nowrap;\n}\n  .mat-button-toggle button {\n  background-color: unset !important;\n  padding: 0px !important;\n}\n  .mat-button-toggle .mat-button-toggle-label-content {\n  height: 42px;\n  line-height: 42px !important;\n}\n  .mat-button-toggle-checked {\n  background: #e0e0ef 0% 0% no-repeat padding-box;\n  border: 1px solid #007aff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MtZmlsdGVycy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUdRLGFBQUE7RUFDQSxTQUFBO0FBUFI7QUFHQTtFQU9RLGVBQUE7QUFQUjtBQUFBO0VBVVEsOEJBQUE7QUFQUjtBQUhBO0VBYVEsaUJBQUE7QUFQUjtBQU5BOztFQWlCUSxtQkFBQTtFQUNBLGVBQUE7QUFQUjtBQVhBO0VBcUJRLGlCQUFBO0FBUFI7QUFkQTtFQXVCWSxtQkFBQTtBQU5aO0FBWUE7RUFFUSxrQ0FBQTtFQUNBLHVCQUFBO0FBWFI7QUFRQTtFQU1RLFlBQUE7RUFDQSw0QkFBQTtBQVhSO0FBZUE7RUFDSSwrQ0FBQTtFQUNBLHlCQUFBO0FBYkoiLCJmaWxlIjoibmV3cy1maWx0ZXJzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLy9AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9jb21tb24ubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvYmFzaWMvbGlua3MvYW5jaG9yLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvbWl4aW5zLmxlc3MnO1xuXG46aG9zdCB7XG5cbiAgICAuZmlsdGVyLXNlY3Rpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDE1cHg7XG4gICAgfVxuICAgIC5tZW51SXRlbSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmFyY2hpdmUubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgQGF6dXJlLXJhZGlhbmNlLWJsdWU7XG4gICAgfVxuICAgIC5wYXJlbnRJdGVtIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5maWx0ZXItY2F0ZWdvcnktdGl0bGUsXG4gICAgLmZpbHRlci12aWV3LXRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LWpvc3Q7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgOjpuZy1kZWVwIGRyb3Bkb3duIC5jcml0ZXJpYS1zaGFwZSB7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMnB4O1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50IHtcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDJweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kOiBAc251ZmYtZ3JheSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgQGF6dXJlLXJhZGlhbmNlLWJsdWU7XG59XG5cblxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ 50948:
/*!**************************************************************!*\
  !*** ./src/news/components/news-item/news-item.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsItemComponent": () => (/* binding */ NewsItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var cms_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cms/services */ 46693);
/* harmony import */ var news_services_helpers_news_cms_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! news/services/helpers/news-cms-helper */ 74109);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/safeHtml.pipe */ 49985);








function NewsItemComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 8)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NewsItemComponent_span_15_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.readMore(ctx_r1.item.targetUrl); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.getVal("readMore"), "");
} }
class NewsItemComponent {
    constructor(linkLookupService, cmsHelper) {
        this.linkLookupService = linkLookupService;
        this.cmsHelper = cmsHelper;
    }
    readMore(itemPath) {
        const link = this.linkLookupService.articleLookup(itemPath);
        window.open(link, '_blank');
    }
    getVal(key) {
        return this.cmsHelper.getVal(key);
    }
}
NewsItemComponent.ɵfac = function NewsItemComponent_Factory(t) { return new (t || NewsItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_0__.LinkLookupService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](news_services_helpers_news_cms_helper__WEBPACK_IMPORTED_MODULE_1__.NewsCmsHelper)); };
NewsItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NewsItemComponent, selectors: [["news-item"]], inputs: { item: "item", categoryName: "categoryName" }, decls: 16, vars: 12, consts: [["fxLayout", "column", "fxLayoutGap", "10px"], [1, "category"], [1, "title"], [1, "sub-title", 3, "innerHtml"], ["svgIcon", "clock"], [1, "publish-on"], [1, "description", 3, "innerHTML"], ["class", "read-more", 4, "ngIf"], [1, "read-more"], [3, "click"]], template: function NewsItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "p", 3)(6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div")(8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "article", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "safeHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, NewsItemComponent_span_15_Template, 3, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.item.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.item.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.item.subtitle, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.getVal("publishedOn"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](12, 7, ctx.item.publishedOn, "longDate"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 10, ctx.item.description), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.targetUrl);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutGapDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_2__.SafeHtmlPipe], styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   .category[_ngcontent-%COMP%] {\n  color: #611eb8;\n  text-transform: uppercase;\n  font-family: 'Jost';\n  font-size: 14px;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%], [_nghost-%COMP%]   .sub-title[_ngcontent-%COMP%], [_nghost-%COMP%]   .description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #34353a;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: 'Jost';\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 1.2em;\n}\n[_nghost-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-family: 'Jost';\n  font-size: 16px;\n}\n[_nghost-%COMP%]     .description * {\n  line-height: 1.5em;\n}\n[_nghost-%COMP%]   .read-more[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 10px;\n}\n[_nghost-%COMP%]   .publish-on[_ngcontent-%COMP%] {\n  color: #757575;\n  font-size: 14px;\n  padding-bottom: 1px;\n}\n[_nghost-%COMP%]     img {\n  max-width: 100%;\n  margin-bottom: 15px;\n}\n[_nghost-%COMP%]   mat-icon[svgicon='clock'][_ngcontent-%COMP%] {\n  padding-right: 8px;\n  padding-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MtaXRlbS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVRLFdBQUE7QUFIUjtBQUNBO0VBTVEsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSlI7QUFMQTs7O0VBZVEsY0FBQTtBQUxSO0FBVkE7RUFtQlEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQU5SO0FBaEJBO0VBMEJRLG1CQUFBO0VBQ0EsZUFBQTtBQVBSO0FBcEJBO0VBK0JRLGtCQUFBO0FBUlI7QUF2QkE7RUFtQ1EsZUFBQTtFQUNBLGdCQUFBO0FBVFI7QUEzQkE7RUF3Q1EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVZSO0FBaENBO0VBOENRLGVBQUE7RUFDQSxtQkFBQTtBQVhSO0FBcENBO0VBbURRLGtCQUFBO0VBQ0EsZ0JBQUE7QUFaUiIsImZpbGUiOiJuZXdzLWl0ZW0uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcblxuOmhvc3Qge1xuICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xuICAgIH1cblxuICAgIC5jYXRlZ29yeSB7XG4gICAgICAgIGNvbG9yOiBAcHVycGxlLWhlYXJ0LXB1cnBsZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LWpvc3Q7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAudGl0bGUsXG4gICAgLnN1Yi10aXRsZSxcbiAgICAuZGVzY3JpcHRpb24gc3BhbiB7XG4gICAgICAgIGNvbG9yOiBAdHVuYS1ncmF5O1xuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1qb3N0O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICB9XG5cbiAgICAuc3ViLXRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LWpvc3Q7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICA6Om5nLWRlZXAgLmRlc2NyaXB0aW9uICoge1xuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgfVxuXG4gICAgLnJlYWQtbW9yZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAucHVibGlzaC1vbiB7XG4gICAgICAgIGNvbG9yOiBAYm91bGRlci1ncmF5O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG5cbiAgICBtYXQtaWNvbltzdmdpY29uPSdjbG9jayddIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 77626:
/*!********************************************************************!*\
  !*** ./src/news/components/news-results/news-results.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsResultsComponent": () => (/* binding */ NewsResultsComponent)
/* harmony export */ });
/* harmony import */ var cms_services_linkLookup_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cms/services/linkLookup.service */ 38507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var news_services_helpers_news_cms_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! news/services/helpers/news-cms-helper */ 74109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/ui/containers/card/cardDash.component */ 65663);
/* harmony import */ var _news_item_news_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news-item/news-item.component */ 50948);







function NewsResultsComponent_section_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "card-dash-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "news-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hasMargin", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("item", item_r2)("categoryName", ctx_r1.results.category.displayName);
} }
function NewsResultsComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 1)(1, "section", 2)(2, "div", 3)(3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, NewsResultsComponent_section_0_ng_container_9_Template, 3, 3, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getVal("searchResults"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.results.category.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r0.results.count, " ", ctx_r0.getVal("itemsFound"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.results.items);
} }
class NewsResultsComponent {
    constructor(cmsHelper) {
        this.cmsHelper = cmsHelper;
    }
    getVal(key) {
        return this.cmsHelper.getVal(key);
    }
}
NewsResultsComponent.ɵfac = function NewsResultsComponent_Factory(t) { return new (t || NewsResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](news_services_helpers_news_cms_helper__WEBPACK_IMPORTED_MODULE_1__.NewsCmsHelper)); };
NewsResultsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NewsResultsComponent, selectors: [["news-results"]], inputs: { results: "results" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([cms_services_linkLookup_service__WEBPACK_IMPORTED_MODULE_0__.LinkLookupService])], decls: 1, vars: 1, consts: [["fxLayout", "column", 4, "ngIf"], ["fxLayout", "column"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between", 1, "results-title-section"], ["fxLayout", "row wrap", 1, "results-for-container"], [1, "results-for"], [1, "result-count"], [4, "ngFor", "ngForOf"], ["fxFlex", "auto", 1, "u-spacing__cardToCard--marginTop", "news-results-card", 3, "hasMargin"], [3, "item", "categoryName"]], template: function NewsResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NewsResultsComponent_section_0_Template, 10, 5, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.results);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_2__.CardDashContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _news_item_news_item_component__WEBPACK_IMPORTED_MODULE_3__.NewsItemComponent], styles: ["[_nghost-%COMP%]   .results-title-section[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  gap: 20px;\n  font-family: 'Jost';\n}\n[_nghost-%COMP%]   .results-title-section[_ngcontent-%COMP%]   .results-for-container[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n[_nghost-%COMP%]   .results-title-section[_ngcontent-%COMP%]   .results-for-container[_ngcontent-%COMP%]   .results-for[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n[_nghost-%COMP%]   .results-title-section[_ngcontent-%COMP%]   .result-count[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n[_nghost-%COMP%]   .news-results-card[_ngcontent-%COMP%] {\n  margin-top: 10px !important;\n  margin-bottom: 10px !important;\n}\n@media screen and (min-width: 600px) {\n  [_nghost-%COMP%]   .news-results-card[_ngcontent-%COMP%] {\n    border: 1px solid #c4c4c4;\n    border-radius: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MtcmVzdWx0cy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBRFI7QUFIQTtFQU1ZLGVBQUE7QUFBWjtBQU5BO0VBUWdCLGlCQUFBO0FBQ2hCO0FBVEE7RUFZWSxlQUFBO0FBQVo7QUFaQTtFQWdCUSwyQkFBQTtFQUNBLDhCQUFBO0FBRFI7QUFHUTtFQUFBO0lBQ0kseUJBQUE7SUFDQSxtQkFBQTtFQUFWO0FBQ0YiLCJmaWxlIjoibmV3cy1yZXN1bHRzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbjpob3N0IHtcbiAgICAucmVzdWx0cy10aXRsZS1zZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgICAgIGdhcDogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LWpvc3Q7XG4gICAgICAgIC5yZXN1bHRzLWZvci1jb250YWluZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgLnJlc3VsdHMtZm9yIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucmVzdWx0LWNvdW50IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubmV3cy1yZXN1bHRzLWNhcmQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtZ3QteHMge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgQHNpbHZlci1ncmF5O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 46171:
/*!****************************************************!*\
  !*** ./src/news/components/news/news.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsComponent": () => (/* binding */ NewsComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! news/models/news.interface */ 78210);
/* harmony import */ var news_news_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! news/news.constants */ 84993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var news_services_news_facade_api_news_facade_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! news/services/news-facade-api/news-facade-api.service */ 31834);
/* harmony import */ var news_services_state_news_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! news/services/state/news-state.service */ 22363);
/* harmony import */ var common_ui_pagination_services_pagination_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/ui/pagination/services/pagination-state.service */ 62425);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var news_services_helpers_news_cms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! news/services/helpers/news-cms-helper */ 74109);
/* harmony import */ var _common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/ui/title-banner/title-banner.component */ 38018);
/* harmony import */ var _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/ui/containers/page/pageFilled.component */ 95556);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/ui/containers/card/cardDash.component */ 65663);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _news_filters_news_filters_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../news-filters/news-filters.component */ 84968);
/* harmony import */ var _news_results_news_results_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../news-results/news-results.component */ 77626);
/* harmony import */ var _common_ui_pagination_components_pagination_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/ui/pagination/components/pagination.component */ 61424);


















function NewsComponent_news_filters_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "news-filters", 7);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("categories", ctx_r0.categories);
  }
}

function NewsComponent_news_results_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "news-results", 8);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("results", ctx_r1.newsResults);
  }
}

function NewsComponent_pagination_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "pagination", 9);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("itemsPerPageList", ctx_r2.itemsPerPageList);
  }
}

class NewsComponent {
  constructor(facadeApi, newsStateService, paginationStateService, uiRouterGlobals, state, cmsHelper) {
    this.facadeApi = facadeApi;
    this.newsStateService = newsStateService;
    this.paginationStateService = paginationStateService;
    this.uiRouterGlobals = uiRouterGlobals;
    this.state = state;
    this.cmsHelper = cmsHelper;
    this.viewType = news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.ViewType;
    this.itemsPerPageList = [5, 10, 25, 50];
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.cmsHelper.initialize(_this.newsCms);

      _this.paginationStateService.subcribeEvent(event => {
        _this.newsStateService.dispatchPaginationEvent(event.action, event.val);
      });

      _this.newsStateService.subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (state) {
          if (state) {
            yield _this.refreshPage(state);
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());

      yield _this.loadPage();
    })();
  }

  loadPage() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const routerParams = _this2.uiRouterGlobals.params;
      let newsQuery;

      if (routerParams.category || routerParams.filter) {
        const params = {
          category: routerParams.category,
          filter: routerParams.filter
        };
        newsQuery = yield _this2.facadeApi.getPageInfo(params);
      } else {
        newsQuery = yield _this2.facadeApi.getPageInfo();
      }

      _this2.initPage(newsQuery);
    })();
  }

  initPage(newsQuery) {
    this.categories = newsQuery.categories;
    this.newsResults = newsQuery.results;
    const pagingState = {
      totalPages: newsQuery.totalPages,
      totalResultCount: newsQuery.results.count,
      currentpageItemsCount: newsQuery.results.items.length,
      currentPage: 0,
      itemsPerPage: this.newsStateService.getState().pageSize
    };
    this.paginationStateService.dispatchPagingInfo(pagingState);
  }

  refreshPage(state) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const results = yield _this3.facadeApi.refreshResults(state);
      _this3.newsResults = results.newsResults;

      if (results.noOfPages) {
        const pagingState = {
          totalPages: results.noOfPages,
          totalResultCount: results.newsResults.count,
          currentpageItemsCount: results.newsResults.items.length,
          currentPage: state.currentPage,
          itemsPerPage: state.pageSize
        };

        _this3.paginationStateService.dispatchPagingInfo(pagingState);
      } else {
        _this3.paginationStateService.dispatchPagingInfo(null);
      }

      _this3.updateUrlWithoutRefresh(state);
    })();
  }

  updateUrlWithoutRefresh(state) {
    if (this.uiRouterGlobals.params.category || this.uiRouterGlobals.params.filter) {
      this.state.go(news_news_constants__WEBPACK_IMPORTED_MODULE_2__.NewsStateNames.News, {
        filter: state.view.toString(),
        category: state.category.displayName
      }, {
        notify: false,
        reload: false
      });
    }
  }

  getView() {
    return this.newsStateService.getState().view;
  }

  ngOnDestroy() {
    this.newsStateService.unsubscribe();
    this.paginationStateService.unsubscribe();
    this.cmsHelper.reset();
    this.newsStateService.clearState();
  }

}

NewsComponent.ɵfac = function NewsComponent_Factory(t) {
  return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](news_services_news_facade_api_news_facade_api_service__WEBPACK_IMPORTED_MODULE_3__.NewsFacadeApiService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](news_services_state_news_state_service__WEBPACK_IMPORTED_MODULE_4__.NewsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](common_ui_pagination_services_pagination_state_service__WEBPACK_IMPORTED_MODULE_5__.PaginationStateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_14__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_14__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](news_services_helpers_news_cms_helper__WEBPACK_IMPORTED_MODULE_6__.NewsCmsHelper));
};

NewsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: NewsComponent,
  selectors: [["hctra-news"]],
  inputs: {
    newsCms: "newsCms"
  },
  decls: 9,
  vars: 6,
  consts: [[1, "refresh-2020", "u-spacing--widthFill"], [3, "hasGutter"], ["fxLayout", "column", "fxLayoutGap", "20px", 1, "news-main"], ["fxFlex", "auto", 1, "u-spacing__firstHeaderToTitle--marginTop", 3, "hasMargin"], [3, "categories", 4, "ngIf"], [3, "results", 4, "ngIf"], [3, "itemsPerPageList", 4, "ngIf"], [3, "categories"], [3, "results"], [3, "itemsPerPageList"]],
  template: function NewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "main", 0)(1, "title-banner");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "page-filled-container", 1)(4, "main", 2)(5, "card-dash-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, NewsComponent_news_filters_6_Template, 1, 1, "news-filters", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, NewsComponent_news_results_7_Template, 1, 1, "news-results", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, NewsComponent_pagination_8_Template, 1, 1, "pagination", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx.newsCms.bannerTitle, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hasGutter", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hasMargin", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.categories);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.newsResults);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.newsResults && ctx.newsResults.count > 0 && ctx.getView() === ctx.viewType.Archive);
    }
  },
  directives: [_common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_7__.TitleBannerComponent, _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_8__.PageFilledContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutGapDirective, _common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_9__.CardDashContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _news_filters_news_filters_component__WEBPACK_IMPORTED_MODULE_10__.NewsFiltersComponent, _news_results_news_results_component__WEBPACK_IMPORTED_MODULE_11__.NewsResultsComponent, _common_ui_pagination_components_pagination_component__WEBPACK_IMPORTED_MODULE_12__.PaginationComponent],
  styles: ["main[_ngcontent-%COMP%] {\n  background-color: #efeff4;\n}\n@media screen and (min-width: 600px) {\n  .news-main[_ngcontent-%COMP%] {\n    margin: 0px 2%;\n  }\n  .news-main[_ngcontent-%COMP%]   card-dash-container[_ngcontent-%COMP%] {\n    border: 1px solid #c4c4c4;\n    border-radius: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MuY29tcG9uZW50Lmxlc3MiLCIuLlxcLi5cXC4uXFxzdHlsZXNcXHRoZW1lXFxtaXhpbnNcXHBhZ2UubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ29CSSx5QkFBQTtBRHJCSjtBQU1JO0VBQUE7SUFDSSxjQUFBO0VBSE47RUFFRTtJQUdRLHlCQUFBO0lBQ0EsbUJBQUE7RUFGVjtBQUNGIiwiZmlsZSI6Im5ld3MuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcblxubWFpbiB7XG4gICAgLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMihAdGhlbWUtbGlnaHQpO1xufVxuXG4ubmV3cy1tYWluIHtcbiAgICBAbWVkaWEgQGJyZWFrcG9pbnQtZ3QteHMge1xuICAgICAgICBtYXJnaW46IDBweCAyJTtcbiAgICAgICAgY2FyZC1kYXNoLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBAc2lsdmVyLWdyYXk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3ItbGlnaHQ6IEB3aGl0ZTtcbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3IyLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMy1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWNvbG9yLWxpZ2h0OiBAdHVuYS1ncmF5O1xuQGJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLWxpZ2h0OiBAdHJvcGljYWwtcmFpbi1mb3Jlc3QtZ3JlZW47XG5AYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItbGlnaHQ6IEBzaWx2ZXItZ3JheTtcbkBoZWFkZXItLWNvbG9yLWxpZ2h0OiBAdHVuYS1ncmF5O1xuQGxhYmVsLS1jb2xvci1saWdodDogQGJvdWxkZXItZ3JheTtcbkBzZWxlY3RfX2Fycm93LS1jb2xvci1saWdodDogQHNjb3JwaW9uLWdyYXk7XG5AbGluay0tY29sb3ItbGlnaHQ6IEBhenVyZS1yYWRpYW5jZS1ibHVlO1xuQGRpdmlkZXItLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2Nob29sLWJ1cy15ZWxsb3c7XG5cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvci1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IyLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IzKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvcjMtQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1oZWFkZXItLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2hlYWRlci0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1sYWJlbC0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGFiZWwtLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtc2VsZWN0X19hcnJvdy0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnc2VsZWN0X19hcnJvdy0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1saW5rLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdsaW5rLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3IgIWltcG9ydGFudDsgLy8gbWFya2VkIGFzICFpbXBvcnRhbnQgdG8gb3ZlcnJpZGUgYm9vdHN0cmFwXG59XG5cbi50LWRpdmlkZXItLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2RpdmlkZXItLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWRpdmlkZXJfX2Rhc2gtLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG4iXX0= */"]
});

/***/ }),

/***/ 78210:
/*!*******************************************!*\
  !*** ./src/news/models/news.interface.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldsEnum": () => (/* binding */ FieldsEnum),
/* harmony export */   "NewsAction": () => (/* binding */ NewsAction),
/* harmony export */   "ViewType": () => (/* binding */ ViewType)
/* harmony export */ });
var FieldsEnum;
(function (FieldsEnum) {
    FieldsEnum["Title"] = "Title";
    FieldsEnum["QueryId"] = "QueryId";
    FieldsEnum["DisplayName"] = "DisplayName";
    FieldsEnum["ItemPath"] = "ItemPath";
    FieldsEnum["ItemName"] = "ItemName";
    FieldsEnum["ItemID"] = "ItemID";
    FieldsEnum["Query"] = "Query";
})(FieldsEnum || (FieldsEnum = {}));
var NewsAction;
(function (NewsAction) {
    NewsAction[NewsAction["Category"] = 0] = "Category";
    NewsAction[NewsAction["ToggleView"] = 1] = "ToggleView";
})(NewsAction || (NewsAction = {}));
var ViewType;
(function (ViewType) {
    ViewType["Latest"] = "Latest";
    ViewType["Archive"] = "Archive";
})(ViewType || (ViewType = {}));


/***/ }),

/***/ 64928:
/*!*********************************!*\
  !*** ./src/news/news.module.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsModule": () => (/* binding */ NewsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout */ 45046);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pipes/module */ 20445);
/* harmony import */ var validation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validation/module */ 26186);
/* harmony import */ var _news_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news.constants */ 84993);
/* harmony import */ var _news_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news.routing */ 85589);
/* harmony import */ var storefront_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! storefront/module */ 89550);
/* harmony import */ var _components_news_filters_news_filters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/news-filters/news-filters.component */ 84968);
/* harmony import */ var _components_news_results_news_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/news-results/news-results.component */ 77626);
/* harmony import */ var _components_news_item_news_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/news-item/news-item.component */ 50948);
/* harmony import */ var app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/routing */ 59389);
/* harmony import */ var _services_state_news_state_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/state/news-state.service */ 22363);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/overlay */ 41938);
/* harmony import */ var _components_news_news_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/news/news.component */ 46171);
/* harmony import */ var common_ui_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/ui/pagination/pagination.module */ 26325);
/* harmony import */ var common_ui_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! common/ui/dropdown/dropdown.module */ 9091);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/button-toggle */ 74190);
/* harmony import */ var _services_helpers_news_latest_response_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/helpers/news-latest-response.helper */ 3937);
/* harmony import */ var _services_helpers_news_archive_response_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/helpers/news-archive-response.helper */ 53518);
/* harmony import */ var _services_news_facade_api_news_facade_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/news-facade-api/news-facade-api.service */ 31834);
/* harmony import */ var _services_news_api_news_api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/news-api/news-api.service */ 30949);
/* harmony import */ var _components_news_article_news_article_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/news-article/news-article.component */ 59288);
/* harmony import */ var _services_helpers_news_cms_helper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/helpers/news-cms-helper */ 74109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @uirouter/angular */ 99305);
































const componentDictionary = {
    [_news_constants__WEBPACK_IMPORTED_MODULE_3__.NewsStateNames.News]: _components_news_news_component__WEBPACK_IMPORTED_MODULE_11__.NewsComponent,
    [_news_constants__WEBPACK_IMPORTED_MODULE_3__.NewsStateNames.NewsArticle]: _components_news_article_news_article_component__WEBPACK_IMPORTED_MODULE_18__.NewsArticleComponent
};
const routesWithComponents = _news_routing__WEBPACK_IMPORTED_MODULE_4__.NewsRoutesStateConfig.map(route => {
    const routes = {
        ...route,
        component: componentDictionary[route.name]
    };
    return routes;
});
class NewsModule {
}
NewsModule.ɵfac = function NewsModule_Factory(t) { return new (t || NewsModule)(); };
NewsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: NewsModule });
NewsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [_services_helpers_news_latest_response_helper__WEBPACK_IMPORTED_MODULE_14__.NewsLatestResponseHelper, _services_helpers_news_archive_response_helper__WEBPACK_IMPORTED_MODULE_15__.NewsArchiveResHelper, _services_news_facade_api_news_facade_api_service__WEBPACK_IMPORTED_MODULE_16__.NewsFacadeApiService, _services_news_api_news_api_service__WEBPACK_IMPORTED_MODULE_17__.NewApiService,
        _services_state_news_state_service__WEBPACK_IMPORTED_MODULE_10__.NewsStateService, _services_helpers_news_cms_helper__WEBPACK_IMPORTED_MODULE_19__.NewsCmsHelper, _angular_common__WEBPACK_IMPORTED_MODULE_21__.DatePipe], imports: [[
            (0,app_routing__WEBPACK_IMPORTED_MODULE_9__.DynamicRoutes)([common_module__WEBPACK_IMPORTED_MODULE_0__.ENVIRON_CONFIG], (environConfig) => environConfig.useNewsRefresh ? routesWithComponents : []),
            common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__.MatDividerModule,
            pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__.FlexLayoutModule,
            validation_module__WEBPACK_IMPORTED_MODULE_2__.ValidationModule,
            storefront_module__WEBPACK_IMPORTED_MODULE_5__.StorefrontModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__.OverlayModule,
            common_ui_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_12__.PaginationModule,
            common_ui_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_13__.DropdownModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_29__.MatButtonToggleModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](NewsModule, { declarations: [_components_news_news_component__WEBPACK_IMPORTED_MODULE_11__.NewsComponent,
        _components_news_filters_news_filters_component__WEBPACK_IMPORTED_MODULE_6__.NewsFiltersComponent,
        _components_news_results_news_results_component__WEBPACK_IMPORTED_MODULE_7__.NewsResultsComponent,
        _components_news_article_news_article_component__WEBPACK_IMPORTED_MODULE_18__.NewsArticleComponent,
        _components_news_item_news_item_component__WEBPACK_IMPORTED_MODULE_8__.NewsItemComponent], imports: [_uirouter_angular__WEBPACK_IMPORTED_MODULE_30__.UIRouterModule, common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__.MatDividerModule,
        pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__.FlexLayoutModule,
        validation_module__WEBPACK_IMPORTED_MODULE_2__.ValidationModule,
        storefront_module__WEBPACK_IMPORTED_MODULE_5__.StorefrontModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__.OverlayModule,
        common_ui_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_12__.PaginationModule,
        common_ui_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_13__.DropdownModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_29__.MatButtonToggleModule] }); })();


/***/ }),

/***/ 53518:
/*!*******************************************************************!*\
  !*** ./src/news/services/helpers/news-archive-response.helper.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsArchiveResHelper": () => (/* binding */ NewsArchiveResHelper)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 63277);


class NewsArchiveResHelper {
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    parseResponse(res) {
        const results = {
            count: res.numberOfArticles,
            items: this.parseArticles(res),
        };
        return results;
    }
    parseArticles(res) {
        const items = [];
        if (res.articles) {
            res.articles.forEach(article => {
                const item = {
                    title: article.title,
                    description: article.shortDescription,
                    publishedOn: article.newsDisplayDate,
                    subtitle: article.subtitle,
                    targetUrl: article.longDescription ? article.itemPath : '',
                    category: article.categories || article.category
                };
                if (article.newsDisplayDate) {
                    const publishedDate = new Date(this.datePipe.transform(article.newsDisplayDate, 'short'));
                    const today = new Date();
                    if (publishedDate <= today) {
                        items.push(item);
                    }
                }
            });
        }
        return items;
    }
}
NewsArchiveResHelper.ɵfac = function NewsArchiveResHelper_Factory(t) { return new (t || NewsArchiveResHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe)); };
NewsArchiveResHelper.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewsArchiveResHelper, factory: NewsArchiveResHelper.ɵfac });


/***/ }),

/***/ 74109:
/*!******************************************************!*\
  !*** ./src/news/services/helpers/news-cms-helper.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsCmsHelper": () => (/* binding */ NewsCmsHelper)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 28596);

class NewsCmsHelper {
    constructor() { }
    initialize(data) {
        this.cmsData = data;
        this.keys = Object.keys(this.cmsData);
    }
    getVal(param) {
        const keyName = this.keys.find(key => key === param);
        if (keyName) {
            return this.cmsData[keyName];
        }
        return '';
    }
    reset() {
        this.cmsData = {};
        this.keys = [];
    }
}
NewsCmsHelper.ɵfac = function NewsCmsHelper_Factory(t) { return new (t || NewsCmsHelper)(); };
NewsCmsHelper.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewsCmsHelper, factory: NewsCmsHelper.ɵfac });


/***/ }),

/***/ 3937:
/*!******************************************************************!*\
  !*** ./src/news/services/helpers/news-latest-response.helper.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsLatestResponseHelper": () => (/* binding */ NewsLatestResponseHelper)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var cms_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cms/services */ 46693);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 63277);



class NewsLatestResponseHelper {
    constructor(cmsUtilService, datePipe) {
        this.cmsUtilService = cmsUtilService;
        this.datePipe = datePipe;
    }
    parseResponse(res) {
        if (res.responses && res.responses.length > 0) {
            const response = res.responses[0].cmsResponse.toString();
            const results = this.jsonParse(response);
            const latesNews = this.cmsUtilService.processArticleArray(results);
            return this.mapResults(latesNews);
        }
    }
    jsonParse(response) {
        return JSON.parse(response).Query.Results;
    }
    mapResults(latesNews) {
        const newsItems = [];
        latesNews.forEach(news => {
            const item = {
                title: news.Title,
                subtitle: news.Subtitle,
                description: news.ShortDescription !== '' ? news.ShortDescription : news.LongDescription,
                publishedOn: news.NewsDisplayDate,
                targetUrl: news.LongDescription ? news.ItemPath : '',
                category: news.Categories || news.Category
            };
            if (news.NewsDisplayDate) {
                const publishedDate = new Date(this.datePipe.transform(news.NewsDisplayDate, 'short'));
                const today = new Date();
                if (publishedDate <= today) {
                    newsItems.push(item);
                }
            }
        });
        return {
            count: newsItems.length,
            items: newsItems,
        };
    }
}
NewsLatestResponseHelper.ɵfac = function NewsLatestResponseHelper_Factory(t) { return new (t || NewsLatestResponseHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](cms_services__WEBPACK_IMPORTED_MODULE_0__.CmsUtilService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe)); };
NewsLatestResponseHelper.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NewsLatestResponseHelper, factory: NewsLatestResponseHelper.ɵfac });


/***/ }),

/***/ 30949:
/*!********************************************************!*\
  !*** ./src/news/services/news-api/news-api.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewApiService": () => (/* binding */ NewApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _common_services_httpService_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/services/httpService/http.service */ 18407);


class NewApiService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getCategories(req) {
        const endpoint = '/api/sessions/Article/Categories';
        return this.httpService.post(endpoint, req);
    }
    getArchiveNewsByCategoryId(req) {
        const endpoint = '/api/sessions/Article/ExecuteCmsPaging';
        return this.httpService.post(endpoint, req);
    }
    getLatestNews(req) {
        const endpoint = 'api/sessions/GenericCms/GetCmsPages';
        const payload = {
            requests: [req]
        };
        return this.httpService.post(endpoint, payload);
    }
}
NewApiService.ɵfac = function NewApiService_Factory(t) { return new (t || NewApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_common_services_httpService_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService)); };
NewApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NewApiService, factory: NewApiService.ɵfac });


/***/ }),

/***/ 31834:
/*!**********************************************************************!*\
  !*** ./src/news/services/news-facade-api/news-facade-api.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsFacadeApiService": () => (/* binding */ NewsFacadeApiService)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! news/models/news.interface */ 78210);
/* harmony import */ var news_news_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! news/news.constants */ 84993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _news_api_news_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news-api/news-api.service */ 30949);
/* harmony import */ var _helpers_news_archive_response_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/news-archive-response.helper */ 53518);
/* harmony import */ var _helpers_news_latest_response_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/news-latest-response.helper */ 3937);
/* harmony import */ var _state_news_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/news-state.service */ 22363);








class NewsFacadeApiService {
  constructor(api, archiveResHelper, newsLatestResHelper, stateService) {
    this.api = api;
    this.archiveResHelper = archiveResHelper;
    this.newsLatestResHelper = newsLatestResHelper;
    this.stateService = stateService;
  }

  getCategories() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const req = {
        fields: `${news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.FieldsEnum.Title.toString()},${news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.FieldsEnum.QueryId},${news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.FieldsEnum.DisplayName},${news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.FieldsEnum.ItemPath}, ${news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.FieldsEnum.ItemName}`,
        itemId: news_news_constants__WEBPACK_IMPORTED_MODULE_2__.NewsCmsIds.categoriesCmsId
      };
      const res = yield _this.api.getCategories(req);
      const categories = [];

      if (res.categories && res.categories.length > 0) {
        res.categories.forEach(cat => {
          const newCat = {
            displayName: cat.displayName,
            itemID: cat.itemID,
            queryID: cat.queryID,
            isDefault: false
          };
          categories.push(newCat);
        });

        if (res.defaultCategory) {
          const defaultCat = categories.filter(cat => cat.queryID === res.defaultCategory.queryID);

          if (defaultCat.length > 0) {
            defaultCat[0].isDefault = true;
          }
        }
      }

      return categories;
    })();
  }

  setDefaultSelectedCategory(categories, params) {
    let defaultCat;
    const initDefaultCat = categories.find(c => c.isDefault === true);

    if (params && params.category) {
      const selectedCat = categories.find(c => c.displayName.toUpperCase() === params.category.toUpperCase());

      if (selectedCat) {
        defaultCat = selectedCat;
      } else {
        defaultCat = initDefaultCat;
      }
    } else {
      defaultCat = initDefaultCat;
    }

    this.stateService.setInitialState({
      action: news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.NewsAction.Category,
      value: defaultCat
    });
  }

  setSelectedView(params) {
    let selectedView;

    if (params && params.filter) {
      switch (params.filter.toString().toUpperCase()) {
        case 'LATEST':
          selectedView = news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.ViewType.Latest;
          break;

        case 'ARCHIVE':
          selectedView = news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.ViewType.Archive;
          break;

        default:
          selectedView = news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.ViewType.Latest;
          break;
      }
    } else {
      selectedView = news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.ViewType.Latest;
    }

    this.stateService.setInitialState({
      action: news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.NewsAction.ToggleView,
      value: selectedView
    });
  }

  getPageInfo(params) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const cat = yield _this2.getCategories();

      _this2.setDefaultSelectedCategory(cat, params);

      _this2.setSelectedView(params);

      const state = _this2.stateService.getState();

      let newsResults;

      switch (state.view) {
        case news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.ViewType.Latest:
          newsResults = yield _this2.getLatestNews(state);
          return {
            categories: cat,
            results: newsResults
          };

        case news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.ViewType.Archive:
          const results = yield _this2.getArchiveNews(state);
          newsResults = results.newsResults;
          return {
            categories: cat,
            results: newsResults,
            totalPages: results.noOfPages
          };

        default:
          break;
      }
    })();
  }

  getArchiveNews(state) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const req = {
        currentPage: state.currentPage,
        isClosures: false,
        isNews: true,
        itemId: state.category.queryID,
        pageSize: state.pageSize,
        pagingSuffix: ''
      };
      const res = yield _this3.api.getArchiveNewsByCategoryId(req);

      const newsResults = _this3.archiveResHelper.parseResponse(res);

      newsResults.category = state.category;
      const noOfPages = res.numberOfPages;
      return {
        newsResults,
        noOfPages
      };
    })();
  }

  getLatestNews(state) {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const req = {
        fields: `${news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.FieldsEnum.ItemID.toString()},${news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.FieldsEnum.Query}`,
        itemId: state.category.queryID
      };
      const res = yield _this4.api.getLatestNews(req);

      const newsResults = _this4.newsLatestResHelper.parseResponse(res);

      newsResults.category = state.category;
      return newsResults;
    })();
  }

  refreshResults(state) {
    var _this5 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      switch (state.view) {
        case news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.ViewType.Latest:
          const newsResults = yield _this5.getLatestNews(state);
          return {
            newsResults,
            noOfPages: null
          };

        case news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.ViewType.Archive:
          const results = yield _this5.getArchiveNews(state);
          return results;

        default:
          break;
      }
    })();
  }

}

NewsFacadeApiService.ɵfac = function NewsFacadeApiService_Factory(t) {
  return new (t || NewsFacadeApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_news_api_news_api_service__WEBPACK_IMPORTED_MODULE_3__.NewApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_helpers_news_archive_response_helper__WEBPACK_IMPORTED_MODULE_4__.NewsArchiveResHelper), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_helpers_news_latest_response_helper__WEBPACK_IMPORTED_MODULE_5__.NewsLatestResponseHelper), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_state_news_state_service__WEBPACK_IMPORTED_MODULE_6__.NewsStateService));
};

NewsFacadeApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: NewsFacadeApiService,
  factory: NewsFacadeApiService.ɵfac
});

/***/ }),

/***/ 22363:
/*!*******************************************************!*\
  !*** ./src/news/services/state/news-state.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsStateService": () => (/* binding */ NewsStateService)
/* harmony export */ });
/* harmony import */ var common_ui_pagination_models_pagination_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/ui/pagination/models/pagination.interface */ 28528);
/* harmony import */ var news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! news/models/news.interface */ 78210);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 33177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 28596);




class NewsStateService {
    constructor() {
        this.defaultPageSize = 5;
        this.subscriptions = [];
        this.state = {
            currentPage: 0,
            pageSize: this.defaultPageSize
        };
        this.state$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    }
    subscribe(callback) {
        const subscription = this.state$.subscribe(callback);
        this.subscriptions.push(subscription);
    }
    getState() {
        return { ...this.state };
    }
    setInitialState(obj) {
        switch (obj.action) {
            case news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.NewsAction.ToggleView:
                this.state.view = obj.value;
                break;
            case news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.NewsAction.Category:
                this.state.category = obj.value;
                break;
            default:
                break;
        }
    }
    clearState() {
        this.state = {
            currentPage: 0,
            pageSize: this.defaultPageSize
        };
        this.state$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    }
    dispatchEvent(action, val) {
        switch (action) {
            case news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.NewsAction.Category:
                this.state.category = val;
                this.state.currentPage = 0;
                break;
            case news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.NewsAction.ToggleView:
                this.state.view = this.state.view === news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.ViewType.Archive ? news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.ViewType.Latest : news_models_news_interface__WEBPACK_IMPORTED_MODULE_1__.ViewType.Archive;
                this.state.currentPage = 0;
                this.state.pageSize = this.defaultPageSize;
                break;
            default:
                break;
        }
        const state = JSON.parse(JSON.stringify(this.state));
        this.state$.next(state);
    }
    dispatchPaginationEvent(action, val) {
        switch (action) {
            case common_ui_pagination_models_pagination_interface__WEBPACK_IMPORTED_MODULE_0__.PagingAction.NextPaging:
                this.state.currentPage++;
                break;
            case common_ui_pagination_models_pagination_interface__WEBPACK_IMPORTED_MODULE_0__.PagingAction.PrevPaging:
                this.state.currentPage--;
                break;
            case common_ui_pagination_models_pagination_interface__WEBPACK_IMPORTED_MODULE_0__.PagingAction.ItemsPerPage:
                this.state.pageSize = val;
                this.state.currentPage = 0;
                break;
            case common_ui_pagination_models_pagination_interface__WEBPACK_IMPORTED_MODULE_0__.PagingAction.SetPage:
                this.state.currentPage = val;
                break;
            default:
                break;
        }
        const state = JSON.parse(JSON.stringify(this.state));
        this.state$.next(state);
    }
    unsubscribe() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
NewsStateService.ɵfac = function NewsStateService_Factory(t) { return new (t || NewsStateService)(); };
NewsStateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NewsStateService, factory: NewsStateService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=928.d891cf00b1b7ca3e.js.map