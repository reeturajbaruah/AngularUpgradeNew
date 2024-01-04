"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[129],{

/***/ 83772:
/*!****************************************************************!*\
  !*** ./src/profile/accountDetails/accountDetails.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountDetailsComponent": () => (/* binding */ AccountDetailsComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 72786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var profile_services_webApis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! profile/services/webApis.service */ 60629);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/services */ 8784);






function AccountDetailsComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "update-contact-info-card", 11)(2, "update-mailing-address-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const contactInfoAsync_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("contactInfoTitle", ctx_r0.cmsProfileContent.CONTACT_INFO_TITLE)("contactInfo", contactInfoAsync_r3)("cmsContent", ctx_r0.contactInfoCardCMSContent)("isAccountClosed", ctx_r0.isAccountClosed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mailingInfoTitle", ctx_r0.cmsProfileContent.MAILING_ADDRESS_TITLE)("mailingInfo", contactInfoAsync_r3)("isAccountClosed", ctx_r0.isAccountClosed)("noMailingAddress", ctx_r0.cmsProfileContent.NO_MAILING_ADDRESS)("isMailingAddress", !ctx_r0.isHideByMail);
  }
}

function AccountDetailsComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "auth-contacts-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const authContactsAsync_r4 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("authContactsTitle", ctx_r1.cmsProfileContent.AUTH_CONTACT_TITLE)("authContactsNames", authContactsAsync_r4.contactNames)("isAccountClosed", ctx_r1.isAccountClosed)("noAuthContacts", ctx_r1.cmsProfileContent.NO_AUTH_CONTACTS)("authContacts", authContactsAsync_r4.authorizedContactList)("authContactLimit", authContactsAsync_r4.authContactLimit);
  }
}

function AccountDetailsComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "rebill-amt-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const accountDataAsync_r5 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rebillAmtTitle", ctx_r2.cmsProfileContent.REBILL_AMT_TITLE)("rebillAmtContext", ctx_r2.cmsProfileContent.REBILL_AMT_CONTEXT)("rebillAmt", accountDataAsync_r5.rebillAmount)("isAccountClosed", ctx_r2.isAccountClosed)("isAccountInvoiced", ctx_r2.isAccountInvoiced)("accountData", accountDataAsync_r5)("autoReplenishIndicatorCms", ctx_r2.autoReplenishCms);
  }
}

class AccountDetailsComponent {
  constructor(webApi, currentUserService, isInvoicedService, accountService) {
    this.webApi = webApi;
    this.currentUserService = currentUserService;
    this.isInvoicedService = isInvoicedService;
    this.accountService = accountService;
  }

  checkIfAccountClosed() {
    if (this.currentUser === null || this.currentUser.acctActivity === 'I') {
      return true;
    }

    return false;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.accountData$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(_this.webApi.getAccountInfo());
      _this.authContacts$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(_this.webApi.getAuthContacts());
      _this.contactInfo$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(_this.accountService.getContactInfo());
      _this.currentUser = _this.currentUserService.getCurrentUser();
      _this.isHideByMail = (yield _this.accountService.getMailingInfo()).address1 === null;
      _this.isAccountClosed = _this.checkIfAccountClosed();
      _this.isAccountInvoiced = _this.isInvoicedService.isAccountInvoiced();
    })();
  }

}

AccountDetailsComponent.ɵfac = function AccountDetailsComponent_Factory(t) {
  return new (t || AccountDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](profile_services_webApis_service__WEBPACK_IMPORTED_MODULE_1__.WebApisService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_2__.CurrentUserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_2__.IsInvoicedService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_2__.AccountService));
};

AccountDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AccountDetailsComponent,
  selectors: [["account-details-component"]],
  inputs: {
    cmsProfileContent: "cmsProfileContent",
    closeAccountModalCms: "closeAccountModalCms",
    contactInfoCardCMSContent: "contactInfoCardCMSContent",
    paymentMethodImages: "paymentMethodImages",
    billingCMS: "billingCMS",
    autoReplenishCms: "autoReplenishCms"
  },
  decls: 21,
  vars: 32,
  consts: [[3, "hasGutter"], ["fxLayout", "column", "fxLayoutAlign", "center center", "ngClass.gt-md", "hide"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutAlign", "start start", 1, "title", "row-width"], [3, "titleDescription", "subtitleDescription", "showSubTitle"], ["ngClass.lt-lg", "hide", 2, "margin-left", "auto", "margin-top", "auto"], ["fxLayout", "row wrap", "fxLayout.lt-md", "column", "fxLayoutAlign", "start start", "fxLayoutGap", "12px", "fxLayoutGap.gt-sm", "0px", 1, "row-width"], [4, "ngIf"], ["fxLayout", "column", 3, "loginSecurityTitle", "isAccountClosed", "closeAccountModalCms"], ["fxLayout", "column", 3, "billingTitle", "paymentMethodImages", "billingCMS", "isAccountClosed", "isAccountInvoiced", "autoReplenishIndicatorCms"], ["fxLayout", "column", 3, "comPrefTitle", "comPrefMonthlyStatementsContext", "comPrefImportantUpdatesContext", "comPrefUpdateToasterContext", "comPrefNoMailingAddress", "isAccountClosed", "isHideByMail"], ["fxLayout", "column", 3, "contactInfoTitle", "contactInfo", "cmsContent", "isAccountClosed"], ["fxLayout", "column", 3, "mailingInfoTitle", "mailingInfo", "isAccountClosed", "noMailingAddress", "isMailingAddress"], ["fxLayout", "column", 3, "authContactsTitle", "authContactsNames", "isAccountClosed", "noAuthContacts", "authContacts", "authContactLimit"], ["fxLayout", "column", 3, "rebillAmtTitle", "rebillAmtContext", "rebillAmt", "isAccountClosed", "isAccountInvoiced", "accountData", "autoReplenishIndicatorCms"]],
  template: function AccountDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "page-centered-dash-container", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "account-balance-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "section", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "titleSubTitle", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "account-balance-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AccountDetailsComponent_ng_container_9_Template, 3, 9, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AccountDetailsComponent_ng_container_11_Template, 2, 6, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "titleSubTitle", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "update-login-info-card", 8)(17, "billing-card", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AccountDetailsComponent_ng_container_18_Template, 2, 7, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "com-preferences-card", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hasGutter", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("titleDescription", ctx.cmsProfileContent.Title)("subtitleDescription", ctx.cmsProfileContent.PROFILE_SUB)("showSubTitle", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 26, ctx.contactInfo$));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 28, ctx.authContacts$));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("titleDescription", ctx.cmsProfileContent.SETTINGS_TITLE)("subtitleDescription", ctx.cmsProfileContent.SETTINGS_SUB)("showSubTitle", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("loginSecurityTitle", ctx.cmsProfileContent.UPDATE_LOGIN_TITLE)("isAccountClosed", ctx.isAccountClosed)("closeAccountModalCms", ctx.closeAccountModalCms);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("billingTitle", ctx.cmsProfileContent.BILLING_TITLE)("paymentMethodImages", ctx.paymentMethodImages)("billingCMS", ctx.billingCMS)("isAccountClosed", ctx.isAccountClosed)("isAccountInvoiced", ctx.isAccountInvoiced)("autoReplenishIndicatorCms", ctx.autoReplenishCms);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 30, ctx.accountData$));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("comPrefTitle", ctx.cmsProfileContent.COM_PREFERENCES_TITLE)("comPrefMonthlyStatementsContext", ctx.cmsProfileContent.STATEMENTS_PREFERENCES)("comPrefImportantUpdatesContext", ctx.cmsProfileContent.ACCOUNT_UPDATES_PREFENCES)("comPrefUpdateToasterContext", ctx.cmsProfileContent.COM_PREFERENCES_TOASTER)("comPrefNoMailingAddress", ctx.cmsProfileContent.COM_PREF_NO_MAILING)("isAccountClosed", ctx.isAccountClosed)("isHideByMail", ctx.isHideByMail);
    }
  },
  styles: ["[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 100px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n@media screen and (max-width: 599.98px) {\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959.98px) {\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n}\n@media screen and (max-width: 599.98px) {\n  [_nghost-%COMP%]   .row-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959.98px) {\n  [_nghost-%COMP%]   .row-width[_ngcontent-%COMP%] {\n    width: 500px;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1119px) {\n  [_nghost-%COMP%]   .row-width[_ngcontent-%COMP%] {\n    width: 840px;\n  }\n}\n@media screen and (min-width: 1120px) and (max-width: 1279px) {\n  [_nghost-%COMP%]   .row-width[_ngcontent-%COMP%] {\n    width: 928px;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919.98px) {\n  [_nghost-%COMP%]   .row-width[_ngcontent-%COMP%] {\n    width: 1180px;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   .row-width[_ngcontent-%COMP%] {\n    width: 1260px;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   update-contact-info-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1119px) {\n  [_nghost-%COMP%]   update-contact-info-card[_ngcontent-%COMP%] {\n    width: 420px;\n  }\n}\n@media screen and (min-width: 1120px) and (max-width: 1279px) {\n  [_nghost-%COMP%]   update-contact-info-card[_ngcontent-%COMP%] {\n    width: 440px;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919.98px) {\n  [_nghost-%COMP%]   update-contact-info-card[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   update-contact-info-card[_ngcontent-%COMP%] {\n    width: 450px;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   update-mailing-address-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1119px) {\n  [_nghost-%COMP%]   update-mailing-address-card[_ngcontent-%COMP%] {\n    width: 420px;\n  }\n}\n@media screen and (min-width: 1120px) and (max-width: 1279px) {\n  [_nghost-%COMP%]   update-mailing-address-card[_ngcontent-%COMP%] {\n    width: 440px;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919.98px) {\n  [_nghost-%COMP%]   update-mailing-address-card[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   update-mailing-address-card[_ngcontent-%COMP%] {\n    width: 450px;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   auth-contacts-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1119px) {\n  [_nghost-%COMP%]   auth-contacts-card[_ngcontent-%COMP%] {\n    width: 420px;\n  }\n}\n@media screen and (min-width: 1120px) and (max-width: 1279px) {\n  [_nghost-%COMP%]   auth-contacts-card[_ngcontent-%COMP%] {\n    width: 440px;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919.98px) {\n  [_nghost-%COMP%]   auth-contacts-card[_ngcontent-%COMP%] {\n    width: 380px;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   auth-contacts-card[_ngcontent-%COMP%] {\n    width: 360px;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   update-login-info-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1279.98px) {\n  [_nghost-%COMP%]   update-login-info-card[_ngcontent-%COMP%] {\n    width: 420px;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919.98px) {\n  [_nghost-%COMP%]   update-login-info-card[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   update-login-info-card[_ngcontent-%COMP%] {\n    width: 280px;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   billing-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1279.98px) {\n  [_nghost-%COMP%]   billing-card[_ngcontent-%COMP%] {\n    width: 420px;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919.98px) {\n  [_nghost-%COMP%]   billing-card[_ngcontent-%COMP%] {\n    width: 220px;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   billing-card[_ngcontent-%COMP%] {\n    width: 290px;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   rebill-amt-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1279.98px) {\n  [_nghost-%COMP%]   rebill-amt-card[_ngcontent-%COMP%] {\n    width: 420px;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919.98px) {\n  [_nghost-%COMP%]   rebill-amt-card[_ngcontent-%COMP%] {\n    width: 320px;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   rebill-amt-card[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   com-preferences-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1279.98px) {\n  [_nghost-%COMP%]   com-preferences-card[_ngcontent-%COMP%] {\n    width: 420px;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919.98px) {\n  [_nghost-%COMP%]   com-preferences-card[_ngcontent-%COMP%] {\n    width: 380px;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   com-preferences-card[_ngcontent-%COMP%] {\n    width: 390px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnREZXRhaWxzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFUSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUhSO0FBS1E7RUFBQTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUFGVjtBQUNGO0FBSVE7RUFBQTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUFEVjtBQUNGO0FBS1E7RUFBQTtJQUNJLFdBQUE7RUFGVjtBQUNGO0FBSVE7RUFBQTtJQUNJLFlBQUE7RUFEVjtBQUNGO0FBR1E7RUFBQTtJQUNJLFlBQUE7RUFBVjtBQUNGO0FBRVE7RUFBQTtJQUNJLFlBQUE7RUFDVjtBQUNGO0FBQ1E7RUFBQTtJQUNJLGFBQUE7RUFFVjtBQUNGO0FBQVE7RUFBQTtJQUNJLGFBQUE7RUFHVjtBQUNGO0FBQ1E7RUFBQTtJQUNJLFdBQUE7RUFFVjtBQUNGO0FBQVE7RUFBQTtJQUNJLFlBQUE7RUFHVjtBQUNGO0FBRFE7RUFBQTtJQUNJLFlBQUE7RUFJVjtBQUNGO0FBRlE7RUFBQTtJQUNJLFlBQUE7RUFLVjtBQUNGO0FBSFE7RUFBQTtJQUNJLFlBQUE7RUFNVjtBQUNGO0FBRlE7RUFBQTtJQUNJLFdBQUE7RUFLVjtBQUNGO0FBSFE7RUFBQTtJQUNJLFlBQUE7RUFNVjtBQUNGO0FBSlE7RUFBQTtJQUNJLFlBQUE7RUFPVjtBQUNGO0FBTFE7RUFBQTtJQUNJLFlBQUE7RUFRVjtBQUNGO0FBTlE7RUFBQTtJQUNJLFlBQUE7RUFTVjtBQUNGO0FBTFE7RUFBQTtJQUNJLFdBQUE7RUFRVjtBQUNGO0FBTlE7RUFBQTtJQUNJLFlBQUE7RUFTVjtBQUNGO0FBUFE7RUFBQTtJQUNJLFlBQUE7RUFVVjtBQUNGO0FBUlE7RUFBQTtJQUNJLFlBQUE7RUFXVjtBQUNGO0FBVFE7RUFBQTtJQUNJLFlBQUE7RUFZVjtBQUNGO0FBUlE7RUFBQTtJQUNJLFdBQUE7RUFXVjtBQUNGO0FBVFE7RUFBQTtJQUNJLFlBQUE7RUFZVjtBQUNGO0FBVlE7RUFBQTtJQUNJLFlBQUE7RUFhVjtBQUNGO0FBWFE7RUFBQTtJQUNJLFlBQUE7RUFjVjtBQUNGO0FBVlE7RUFBQTtJQUNJLFdBQUE7RUFhVjtBQUNGO0FBWFE7RUFBQTtJQUNJLFlBQUE7RUFjVjtBQUNGO0FBWlE7RUFBQTtJQUNJLFlBQUE7RUFlVjtBQUNGO0FBYlE7RUFBQTtJQUNJLFlBQUE7RUFnQlY7QUFDRjtBQVpRO0VBQUE7SUFDSSxXQUFBO0VBZVY7QUFDRjtBQWJRO0VBQUE7SUFDSSxZQUFBO0VBZ0JWO0FBQ0Y7QUFkUTtFQUFBO0lBQ0ksWUFBQTtFQWlCVjtBQUNGO0FBZlE7RUFBQTtJQUNJLFlBQUE7RUFrQlY7QUFDRjtBQWRRO0VBQUE7SUFDSSxXQUFBO0VBaUJWO0FBQ0Y7QUFmUTtFQUFBO0lBQ0ksWUFBQTtFQWtCVjtBQUNGO0FBaEJRO0VBQUE7SUFDSSxZQUFBO0VBbUJWO0FBQ0Y7QUFqQlE7RUFBQTtJQUNJLFlBQUE7RUFvQlY7QUFDRiIsImZpbGUiOiJhY2NvdW50RGV0YWlscy5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICAudGl0bGUge1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LXNtIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtc20ge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5yb3ctd2lkdGgge1xuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtc20ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtc20ge1xuICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LW1kMSB7XG4gICAgICAgICAgICB3aWR0aDogODQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbWQyIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MjhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sZyB7XG4gICAgICAgICAgICB3aWR0aDogMTE4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWd0LWxnIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMjYwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUtY29udGFjdC1pbmZvLWNhcmQge1xuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbWQxIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1tZDIge1xuICAgICAgICAgICAgd2lkdGg6IDQ0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWxnIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1ndC1sZyB7XG4gICAgICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUtbWFpbGluZy1hZGRyZXNzLWNhcmQge1xuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbWQxIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1tZDIge1xuICAgICAgICAgICAgd2lkdGg6IDQ0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWxnIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1ndC1sZyB7XG4gICAgICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhdXRoLWNvbnRhY3RzLWNhcmQge1xuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbWQxIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1tZDIge1xuICAgICAgICAgICAgd2lkdGg6IDQ0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWxnIHtcbiAgICAgICAgICAgIHdpZHRoOiAzODBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1ndC1sZyB7XG4gICAgICAgICAgICB3aWR0aDogMzYwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUtbG9naW4taW5mby1jYXJkIHtcbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LW1kIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LW1kIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sZyB7XG4gICAgICAgICAgICB3aWR0aDogMjYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtZ3QtbGcge1xuICAgICAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmlsbGluZy1jYXJkIHtcbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LW1kIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LW1kIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sZyB7XG4gICAgICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtZ3QtbGcge1xuICAgICAgICAgICAgd2lkdGg6IDI5MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmViaWxsLWFtdC1jYXJkIHtcbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LW1kIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LW1kIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sZyB7XG4gICAgICAgICAgICB3aWR0aDogMzIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtZ3QtbGcge1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tLXByZWZlcmVuY2VzLWNhcmQge1xuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbWQge1xuICAgICAgICAgICAgd2lkdGg6IDQyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWxnIHtcbiAgICAgICAgICAgIHdpZHRoOiAzODBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1ndC1sZyB7XG4gICAgICAgICAgICB3aWR0aDogMzkwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 62261:
/*!*************************************************************************************************!*\
  !*** ./src/profile/accountDetails/display cards/authContactsCard/authContactsCard.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthContactsCardComponent": () => (/* binding */ AuthContactsCardComponent)
/* harmony export */ });
/* harmony import */ var profile_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! profile/constants */ 30129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/ui/containers/card/cardDash.component */ 65663);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 38661);








function AuthContactsCardComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const name_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", i_r4 + 1, ". ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, name_r3), "");
} }
function AuthContactsCardComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AuthContactsCardComponent_div_8_div_1_Template, 4, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.authContactsNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", ctx_r0.authContactsNames.length, " of ", ctx_r0.totalContacts, " Contact", ctx_r0.totalContacts > 1 ? "s" : "", " ");
} }
function AuthContactsCardComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.noAuthContacts);
} }
class AuthContactsCardComponent {
    constructor(state) {
        this.state = state;
    }
    editAuthorizedContact() {
        const params = {
            authContacts: this.authContacts,
            authContactLimit: this.authContactLimit
        };
        this.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_0__.stateNames.UpdateAuthorizedContacts, params);
    }
    ;
    ngOnInit() {
        this.totalContacts = this.authContactsNames.length;
        if (this.totalContacts > 3) {
            this.authContactsNames = this.authContactsNames.slice(0, 3);
        }
    }
}
AuthContactsCardComponent.ɵfac = function AuthContactsCardComponent_Factory(t) { return new (t || AuthContactsCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_3__.StateService)); };
AuthContactsCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AuthContactsCardComponent, selectors: [["auth-contacts-card"]], inputs: { authContactsTitle: "authContactsTitle", noAuthContacts: "noAuthContacts", authContactsNames: "authContactsNames", isAccountClosed: "isAccountClosed", authContacts: "authContacts", authContactLimit: "authContactLimit" }, decls: 10, vars: 4, consts: [[1, "top-row-heights"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "u-spacing--widthFill"], ["fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [3, "fxHide", "click"], ["class", "context", 4, "ngIf"], [4, "ngIf"], [1, "context"], ["translation-skip", "", 4, "ngFor", "ngForOf"], [1, "card-footer"], ["translation-skip", ""], ["svgIcon", "no-auth-contacts", "fxFlexAlign", "center"], ["fxFlexAlign", "center", 1, "context"]], template: function AuthContactsCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "card-dash-container")(1, "section", 0)(2, "div", 1)(3, "header", 2)(4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthContactsCardComponent_Template_a_click_6_listener() { return ctx.editAuthorizedContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AuthContactsCardComponent_div_8_Template, 4, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AuthContactsCardComponent_div_9_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.authContactsTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fxHide", ctx.isAccountClosed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalContacts > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalContacts === 0);
    } }, directives: [_common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_1__.CardDashContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultShowHideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexAlignDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe], styles: ["[_nghost-%COMP%]   card-dash-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n[_nghost-%COMP%]   .context[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  font-size: 14px !important;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   .context-long[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  font-size: 12px !important;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: 'Jost';\n  margin-left: auto;\n}\n[_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n  height: 190px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n    height: 190px;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1279.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 320px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGVDYXJkcy5sZXNzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxmb250cy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRVEsV0FBQTtBQUhSO0FBQ0E7RUFNUSxvQkFBQTtBQUpSO0FBRkE7RUFVUSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQVBBO0VBZ0JRLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQU5SO0FBWkE7RUNDSSxtQkFBQTtFRHNCSSxpQkFBQTtBQVBSO0FBaEJBO0VBMkJRLGFBQUE7QUFSUjtBQVVRO0VBQUE7SUFDSSxZQUFBO0VBUFY7QUFDRjtBQVNRO0VBQUE7SUFDSSxhQUFBO0VBTlY7QUFDRjtBQVVRO0VBQUE7SUFDSSxZQUFBO0VBUFY7QUFDRjtBQVNRO0VBQUE7SUFDSSxhQUFBO0VBTlY7QUFDRjtBQVFRO0VBQUE7SUFDSSxhQUFBO0VBTFY7QUFDRjtBQU9RO0VBQUE7SUFDSSxhQUFBO0VBSlY7QUFDRiIsImZpbGUiOiJwcm9maWxlQ2FyZHMubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgY2FyZC1kYXNoLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgfVxuXG4gICAgLmNvbnRleHQge1xuICAgICAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmNvbnRleHQtbG9uZyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgLnQtaGVhZGVyLS1mb250RmFtaWx5KCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cblxuICAgIC50b3Atcm93LWhlaWdodHMge1xuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtZ3QtbGcge1xuICAgICAgICAgICAgaGVpZ2h0OiAxOTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ib3R0b20tcm93LWhlaWdodHMge1xuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LW1kIHtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbGcge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1ndC1sZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbi50LWhlYWRlci0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtam9zdDtcbn1cblxuLnQtYm9keS0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbn1cbiJdfQ== */", "[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  text-align: right;\n  width: 100%;\n  font-size: 13px;\n}\n[_nghost-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 100%;\n  text-align: center;\n  color: #757575;\n}\n[_nghost-%COMP%]   mat-icon[_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 50%;\n  margin-right: 25%;\n  margin-left: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhDb250YWN0c0NhcmQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVRLGtCQUFBO0FBRlI7QUFBQTtFQU1RLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFIUjtBQVBBO0VBY1EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFKUjtBQWJBO0VBb0JZLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKWiIsImZpbGUiOiJhdXRoQ29udGFjdHNDYXJkLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgc2VjdGlvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAuY2FyZC1mb290ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG5cbiAgICBtYXQtaWNvbiB7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IEBib3VsZGVyLWdyYXk7XG5cbiAgICAgICAgfiBkaXYge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 62526:
/*!***************************************************************************************!*\
  !*** ./src/profile/accountDetails/display cards/billingCard/billingCard.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingCardComponent": () => (/* binding */ BillingCardComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/ui/containers/card/cardDash.component */ 65663);
/* harmony import */ var _common_ui_display_billingCardDisplay_billingCardDisplay_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/ui/display/billingCardDisplay/billingCardDisplay.component */ 4410);





class BillingCardComponent {
  constructor(currentUser) {
    this.currentUser = currentUser;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      _this.isAccountInvoiced = (_a = yield _this.currentUser.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.isInvoiced;
    })();
  }

}

BillingCardComponent.ɵfac = function BillingCardComponent_Factory(t) {
  return new (t || BillingCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_1__.CurrentUserService));
};

BillingCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: BillingCardComponent,
  selectors: [["billing-card"]],
  inputs: {
    billingTitle: "billingTitle",
    billingImages: "billingImages",
    billingCMS: "billingCMS",
    isAccountClosed: "isAccountClosed",
    isAccountInvoiced: "isAccountInvoiced",
    paymentMethodImages: "paymentMethodImages",
    autoReplenishIndicatorCms: "autoReplenishIndicatorCms"
  },
  decls: 2,
  vars: 10,
  consts: [[2, "width", "100%"], ["callingComponent", "billingCard", 1, "bottom-row-heights", 3, "billingTitle", "paymentMethodImages", "noDataTitle", "expiringTooltip", "expiredTooltip", "blockedTooltip", "isPendingClosure", "isAccountInvoiced", "showAutoReplenishmentIndicator", "replenishmentIndicatorCMS"]],
  template: function BillingCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "card-dash-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "billing-card-display", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("billingTitle", ctx.billingTitle)("paymentMethodImages", ctx.paymentMethodImages)("noDataTitle", ctx.billingCMS.NoData)("expiringTooltip", ctx.billingCMS.ExpiringTooltip)("expiredTooltip", ctx.billingCMS.ExpiredTooltip)("blockedTooltip", ctx.billingCMS.LongDescription)("isPendingClosure", ctx.isAccountClosed)("isAccountInvoiced", ctx.isAccountInvoiced)("showAutoReplenishmentIndicator", false)("replenishmentIndicatorCMS", ctx.autoReplenishIndicatorCms);
    }
  },
  directives: [_common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_2__.CardDashContainerComponent, _common_ui_display_billingCardDisplay_billingCardDisplay_component__WEBPACK_IMPORTED_MODULE_3__.BillingCardDisplayComponent],
  styles: ["[_nghost-%COMP%]   card-dash-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n[_nghost-%COMP%]   .context[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  font-size: 14px !important;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   .context-long[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  font-size: 12px !important;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: 'Jost';\n  margin-left: auto;\n}\n[_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n  height: 190px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n    height: 190px;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1279.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 320px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGVDYXJkcy5sZXNzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxmb250cy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRVEsV0FBQTtBQUhSO0FBQ0E7RUFNUSxvQkFBQTtBQUpSO0FBRkE7RUFVUSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQVBBO0VBZ0JRLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQU5SO0FBWkE7RUNDSSxtQkFBQTtFRHNCSSxpQkFBQTtBQVBSO0FBaEJBO0VBMkJRLGFBQUE7QUFSUjtBQVVRO0VBQUE7SUFDSSxZQUFBO0VBUFY7QUFDRjtBQVNRO0VBQUE7SUFDSSxhQUFBO0VBTlY7QUFDRjtBQVVRO0VBQUE7SUFDSSxZQUFBO0VBUFY7QUFDRjtBQVNRO0VBQUE7SUFDSSxhQUFBO0VBTlY7QUFDRjtBQVFRO0VBQUE7SUFDSSxhQUFBO0VBTFY7QUFDRjtBQU9RO0VBQUE7SUFDSSxhQUFBO0VBSlY7QUFDRiIsImZpbGUiOiJwcm9maWxlQ2FyZHMubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgY2FyZC1kYXNoLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgfVxuXG4gICAgLmNvbnRleHQge1xuICAgICAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmNvbnRleHQtbG9uZyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgLnQtaGVhZGVyLS1mb250RmFtaWx5KCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cblxuICAgIC50b3Atcm93LWhlaWdodHMge1xuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtZ3QtbGcge1xuICAgICAgICAgICAgaGVpZ2h0OiAxOTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ib3R0b20tcm93LWhlaWdodHMge1xuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LW1kIHtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbGcge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1ndC1sZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbi50LWhlYWRlci0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtam9zdDtcbn1cblxuLnQtYm9keS0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbn1cbiJdfQ== */", "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWxsaW5nQ2FyZC5sZXNzIn0= */"]
});

/***/ }),

/***/ 17347:
/*!*****************************************************************************************************!*\
  !*** ./src/profile/accountDetails/display cards/comPreferencesCard/comPreferencesCard.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComPreferencesCardComponent": () => (/* binding */ ComPreferencesCardComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 72786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var profile_services_webApis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! profile/services/webApis.service */ 60629);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var translation_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! translation/services */ 28671);
/* harmony import */ var _common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/ui/containers/card/cardDash.component */ 65663);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_toolTip_toolTip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/ui/toolTip/toolTip.component */ 63087);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../pipes/safeHtml.pipe */ 49985);














const _c0 = function () {
  return {
    "right": "24px",
    "bottom": "15px"
  };
};

function ComPreferencesCardComponent_ng_container_6_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span")(1, "tool-tip", 14)(2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stayOpenOnHover", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c0))("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 3, ctx_r2.comPrefNoMailingAddress), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}

const _c1 = function () {
  return {
    "left": "24px",
    "bottom": "15px"
  };
};

function ComPreferencesCardComponent_ng_container_6_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span")(1, "tool-tip", 14)(2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stayOpenOnHover", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c1))("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 3, ctx_r3.comPrefNoMailingAddress), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}

const _c2 = function (a0, a1) {
  return {
    "context": a0,
    "context-long": a1
  };
};

function ComPreferencesCardComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 6)(4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ComPreferencesCardComponent_ng_container_6_Template_input_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r4.updatePreferences($event.target.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Email monthly statements ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6)(8, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ComPreferencesCardComponent_ng_container_6_Template_input_change_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r6.updatePreferences($event.target.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Mail printed monthly statements ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ComPreferencesCardComponent_ng_container_6_span_11_Template, 6, 6, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 6)(17, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ComPreferencesCardComponent_ng_container_6_Template_input_change_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r7.updatePreferences($event.target.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " By Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 6)(21, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ComPreferencesCardComponent_ng_container_6_Template_input_change_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r8.updatePreferences($event.target.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, " By Mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, ComPreferencesCardComponent_ng_container_6_span_24_Template, 6, 6, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](14, _c2, !ctx_r0.longText, ctx_r0.longText));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.comPrefMonthlyStatementsContext);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r0.preferences.monthlyStatementsAreByEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r0.preferences.monthlyStatementsAreByMail)("disabled", ctx_r0.isHideByMail);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isHideByMail);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r0.longText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.comPrefImportantUpdatesContext);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", !ctx_r0.longText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.comPrefImportantUpdatesContext);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r0.preferences.importantUpdatesAreByEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r0.preferences.importantUpdatesAreByMail)("disabled", ctx_r0.isHideByMail);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isHideByMail);
  }
}

class ComPreferencesCardComponent {
  constructor(webApi, responseErrorService, translationService, toasterService) {
    this.webApi = webApi;
    this.responseErrorService = responseErrorService;
    this.translationService = translationService;
    this.toasterService = toasterService;
    this.longText = false;
  }

  updatePreferences(id) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      switch (id) {
        case 'monthlyStatementsEmail':
          _this.preferences.monthlyStatementsAreByEmail = !_this.preferences.monthlyStatementsAreByEmail;
          break;

        case 'monthlyStatementsMail':
          _this.preferences.monthlyStatementsAreByMail = !_this.preferences.monthlyStatementsAreByMail;
          break;

        case 'importantUpdatesEmail':
          _this.preferences.importantUpdatesAreByEmail = !_this.preferences.importantUpdatesAreByEmail;
          break;

        case 'importantUpdatesMail':
          _this.preferences.importantUpdatesAreByMail = !_this.preferences.importantUpdatesAreByMail;
          break;
      }

      yield _this.webApi.setComPreferences(_this.preferences).then(response => {
        _this.responseErrorService.displayAlertsFromResponse(response);

        if (_this.responseErrorService.isErrorFree(response)) {
          _this.toasterService.show('Success', _this.comPrefUpdateToasterContext);
        }
      });
    })();
  }

  ngOnInit() {
    this.initialPrefernces$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(this.webApi.getComPreferences());
    this.initialPrefernces$.subscribe(p => this.preferences = p);
  }

  ngAfterViewInit() {
    this.translationService.realTimeTranslationsEvent.subscribe(evt => {
      if (evt.status === 'starting') {
        if (this.translationService.languagePreference === 'Filipino') {
          this.longText = true;
        }
      } else {
        this.longText = false;
      }
    });
  }

}

ComPreferencesCardComponent.ɵfac = function ComPreferencesCardComponent_Factory(t) {
  return new (t || ComPreferencesCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](profile_services_webApis_service__WEBPACK_IMPORTED_MODULE_1__.WebApisService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_2__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](translation_services__WEBPACK_IMPORTED_MODULE_3__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_2__.ToasterService));
};

ComPreferencesCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ComPreferencesCardComponent,
  selectors: [["com-preferences-card"]],
  inputs: {
    comPrefTitle: "comPrefTitle",
    comPrefMonthlyStatementsContext: "comPrefMonthlyStatementsContext",
    comPrefImportantUpdatesContext: "comPrefImportantUpdatesContext",
    comPrefUpdateToasterContext: "comPrefUpdateToasterContext",
    comPrefNoMailingAddress: "comPrefNoMailingAddress",
    isAccountClosed: "isAccountClosed",
    isHideByMail: "isHideByMail"
  },
  decls: 8,
  vars: 4,
  consts: [[1, "bottom-row-heights"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "u-spacing--widthFill"], ["fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [4, "ngIf"], [3, "ngClass"], ["fxLayout", "row", "fxLayoutAlign", "start start", 1, "u-spacing--widthFill"], ["type", "checkbox", "id", "monthlyStatementsEmail", 3, "checked", "change"], [1, "context"], ["type", "checkbox", "id", "monthlyStatementsMail", 3, "checked", "disabled", "change"], [1, "context", 3, "hidden"], [1, "context-long", 3, "hidden"], ["type", "checkbox", "id", "importantUpdatesEmail", 3, "checked", "change"], ["type", "checkbox", "id", "importantUpdatesMail", 3, "checked", "disabled", "change"], [1, "toolTip", 3, "stayOpenOnHover"], ["tool-tip-hover", ""], ["svgIcon", "information", 1, "infoIcon"], ["tool-tip-message", "", "ngClass", "hoverBoxAdjusment", 3, "ngStyle", "innerHTML"]],
  template: function ComPreferencesCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "card-dash-container")(1, "div", 0)(2, "div", 1)(3, "header", 2)(4, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ComPreferencesCardComponent_ng_container_6_Template, 25, 17, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.comPrefTitle, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 2, ctx.initialPrefernces$));
    }
  },
  directives: [_common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_4__.CardDashContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__.DefaultClassDirective, _common_ui_toolTip_toolTip_component__WEBPACK_IMPORTED_MODULE_5__.ToolTipComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__.DefaultStyleDirective],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_6__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%]   card-dash-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n[_nghost-%COMP%]   .context[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  font-size: 14px !important;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   .context-long[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  font-size: 12px !important;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: 'Jost';\n  margin-left: auto;\n}\n[_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n  height: 190px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n    height: 190px;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1279.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 320px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGVDYXJkcy5sZXNzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxmb250cy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRVEsV0FBQTtBQUhSO0FBQ0E7RUFNUSxvQkFBQTtBQUpSO0FBRkE7RUFVUSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQVBBO0VBZ0JRLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQU5SO0FBWkE7RUNDSSxtQkFBQTtFRHNCSSxpQkFBQTtBQVBSO0FBaEJBO0VBMkJRLGFBQUE7QUFSUjtBQVVRO0VBQUE7SUFDSSxZQUFBO0VBUFY7QUFDRjtBQVNRO0VBQUE7SUFDSSxhQUFBO0VBTlY7QUFDRjtBQVVRO0VBQUE7SUFDSSxZQUFBO0VBUFY7QUFDRjtBQVNRO0VBQUE7SUFDSSxhQUFBO0VBTlY7QUFDRjtBQVFRO0VBQUE7SUFDSSxhQUFBO0VBTFY7QUFDRjtBQU9RO0VBQUE7SUFDSSxhQUFBO0VBSlY7QUFDRiIsImZpbGUiOiJwcm9maWxlQ2FyZHMubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgY2FyZC1kYXNoLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgfVxuXG4gICAgLmNvbnRleHQge1xuICAgICAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmNvbnRleHQtbG9uZyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgLnQtaGVhZGVyLS1mb250RmFtaWx5KCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cblxuICAgIC50b3Atcm93LWhlaWdodHMge1xuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtZ3QtbGcge1xuICAgICAgICAgICAgaGVpZ2h0OiAxOTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ib3R0b20tcm93LWhlaWdodHMge1xuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LW1kIHtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbGcge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1ndC1sZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbi50LWhlYWRlci0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtam9zdDtcbn1cblxuLnQtYm9keS0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbn1cbiJdfQ== */", "[_nghost-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n[_nghost-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  margin-left: 10px;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  background: #dddddd;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%]:disabled    + label[_ngcontent-%COMP%] {\n  color: #cccccc;\n}\n[_nghost-%COMP%]   .hoverBoxAdjusment[_ngcontent-%COMP%] {\n  padding: 2px;\n  min-width: 150px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n[_nghost-%COMP%]   .toolTip[_ngcontent-%COMP%] {\n  padding-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbVByZWZlcmVuY2VzQ2FyZC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRVEsV0FBQTtFQUNBLFlBQUE7QUFGUjtBQURBO0VBT1EsZUFBQTtFQUNBLGlCQUFBO0FBSFI7QUFMQTtFQVlRLG1CQUFBO0FBSlI7QUFSQTtFQWdCUSxjQUFBO0FBTFI7QUFYQTtFQW9CUSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFOUjtBQWpCQTtFQTJCUSxpQkFBQTtBQVBSIiwiZmlsZSI6ImNvbVByZWZlcmVuY2VzQ2FyZC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcblxuOmhvc3Qge1xuICAgIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgIH1cblxuICAgIGxhYmVsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG5cbiAgICBpbnB1dDpkaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkZGRkZGQ7XG4gICAgfVxuXG4gICAgaW5wdXQ6ZGlzYWJsZWQgKyBsYWJlbCB7XG4gICAgICAgIGNvbG9yOiAjY2NjY2NjO1xuICAgIH1cblxuICAgIC5ob3ZlckJveEFkanVzbWVudCB7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIH1cblxuICAgIC50b29sVGlwIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 81213:
/*!*******************************************************************************************!*\
  !*** ./src/profile/accountDetails/display cards/rebillAmtCard/rebillAmtCard.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RebillAmtCardComponent": () => (/* binding */ RebillAmtCardComponent)
/* harmony export */ });
/* harmony import */ var profile_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! profile/constants */ 30129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/ui/containers/card/cardDash.component */ 65663);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _common_ui_autoReplenishmentIndicator_auto_replenishment_indicator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/ui/autoReplenishmentIndicator/auto-replenishment-indicator.component */ 86932);








class RebillAmtCardComponent {
    constructor(state) {
        this.state = state;
    }
    goToUpdateRebillAmt() {
        this.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_0__.stateNames.UpdateReplenishmentAmount, { accountData: this.accountData });
    }
    ;
}
RebillAmtCardComponent.ɵfac = function RebillAmtCardComponent_Factory(t) { return new (t || RebillAmtCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_5__.StateService)); };
RebillAmtCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RebillAmtCardComponent, selectors: [["rebill-amt-card"]], inputs: { rebillAmtTitle: "rebillAmtTitle", rebillAmtContext: "rebillAmtContext", rebillAmt: "rebillAmt", isAccountClosed: "isAccountClosed", isAccountInvoiced: "isAccountInvoiced", noAuthContacts: "noAuthContacts", accountData: "accountData", autoReplenishIndicatorCms: "autoReplenishIndicatorCms" }, decls: 18, vars: 5, consts: [["fxlayout", "column", 1, "bottom-row-heights"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "u-spacing--widthFill"], ["fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [2, "margin-left", "auto", 3, "fxHide", "click"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "u-spacing--widthFill"], ["fxlayout", "column"], ["fxlayout", "row", "fxLayoutAlign", "space-between start", 1, "context", 2, "padding-bottom", "20px"], ["fxLayout", "row", "fxLayoutAlign", "start start", 1, "context"], ["fxFlex", ""], [3, "value"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "u-spacing__fieldToField--marginTopHalf"], ["callingComponent", "rebillAmtCard", 1, "u-spacing--widthFill", "cardwidth", 3, "cmsData"]], template: function RebillAmtCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "card-dash-container")(1, "div", 0)(2, "div", 1)(3, "header", 2)(4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RebillAmtCardComponent_Template_a_click_6_listener() { return ctx.goToUpdateRebillAmt(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8)(13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Current replenishment amount: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "currency", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "auto-replenishment-indicator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.rebillAmtTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fxHide", ctx.isAccountClosed || ctx.isAccountInvoiced);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.rebillAmtContext);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.rebillAmt);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cmsData", ctx.autoReplenishIndicatorCms);
    } }, directives: [_common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_1__.CardDashContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultShowHideDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_2__.CurrencyComponent, _common_ui_autoReplenishmentIndicator_auto_replenishment_indicator_component__WEBPACK_IMPORTED_MODULE_3__.AutoReplenishmentIndicatorComponent], styles: ["[_nghost-%COMP%]   card-dash-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n[_nghost-%COMP%]   .context[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  font-size: 14px !important;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   .context-long[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  font-size: 12px !important;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: 'Jost';\n  margin-left: auto;\n}\n[_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n  height: 190px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n    height: 190px;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1279.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 320px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGVDYXJkcy5sZXNzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxmb250cy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRVEsV0FBQTtBQUhSO0FBQ0E7RUFNUSxvQkFBQTtBQUpSO0FBRkE7RUFVUSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQVBBO0VBZ0JRLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQU5SO0FBWkE7RUNDSSxtQkFBQTtFRHNCSSxpQkFBQTtBQVBSO0FBaEJBO0VBMkJRLGFBQUE7QUFSUjtBQVVRO0VBQUE7SUFDSSxZQUFBO0VBUFY7QUFDRjtBQVNRO0VBQUE7SUFDSSxhQUFBO0VBTlY7QUFDRjtBQVVRO0VBQUE7SUFDSSxZQUFBO0VBUFY7QUFDRjtBQVNRO0VBQUE7SUFDSSxhQUFBO0VBTlY7QUFDRjtBQVFRO0VBQUE7SUFDSSxhQUFBO0VBTFY7QUFDRjtBQU9RO0VBQUE7SUFDSSxhQUFBO0VBSlY7QUFDRiIsImZpbGUiOiJwcm9maWxlQ2FyZHMubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgY2FyZC1kYXNoLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgfVxuXG4gICAgLmNvbnRleHQge1xuICAgICAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmNvbnRleHQtbG9uZyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgLnQtaGVhZGVyLS1mb250RmFtaWx5KCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cblxuICAgIC50b3Atcm93LWhlaWdodHMge1xuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtZ3QtbGcge1xuICAgICAgICAgICAgaGVpZ2h0OiAxOTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ib3R0b20tcm93LWhlaWdodHMge1xuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LW1kIHtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbGcge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1ndC1sZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbi50LWhlYWRlci0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtam9zdDtcbn1cblxuLnQtYm9keS0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbn1cbiJdfQ== */", "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWJpbGxBbXRDYXJkLmxlc3MifQ== */"] });


/***/ }),

/***/ 5853:
/*!***********************************************************************************************************!*\
  !*** ./src/profile/accountDetails/display cards/updateContactInfoCard/updateContactInfoCard.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateContactInfoCardComponent": () => (/* binding */ UpdateContactInfoCardComponent)
/* harmony export */ });
/* harmony import */ var profile_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! profile/constants */ 30129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var pipes_phoneNumber_phoneNumber_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../pipes/phoneNumber/phoneNumber.pipe */ 78794);
/* harmony import */ var _common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/ui/containers/card/cardDash.component */ 65663);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 63277);









function UpdateContactInfoCardComponent_div_8_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0", ctx_r5.cmsContent.PhoneExt, " ");
} }
function UpdateContactInfoCardComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, UpdateContactInfoCardComponent_div_8_span_5_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.cmsContent.PhoneNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, ctx_r0.contactInfo.contactInfo.phoneNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.contactInfo.contactInfo.phoneExt);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.contactInfo.contactInfo.phoneExt);
} }
function UpdateContactInfoCardComponent_div_9_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0", ctx_r6.cmsContent.AltPhoneExt1, " ");
} }
function UpdateContactInfoCardComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UpdateContactInfoCardComponent_div_9_span_4_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.cmsContent.AltPhoneNumber1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.contactInfo.contactInfo.workPhoNbr);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.contactInfo.contactInfo.workPhoExt);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.contactInfo.contactInfo.workPhoExt);
} }
function UpdateContactInfoCardComponent_div_10_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0", ctx_r7.cmsContent.AltPhoneExt2, " ");
} }
function UpdateContactInfoCardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UpdateContactInfoCardComponent_div_10_span_4_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.cmsContent.AltPhoneNumber2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.contactInfo.contactInfo.mobilePhoNbr);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.contactInfo.contactInfo.mobilePhoExt);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.contactInfo.contactInfo.mobilePhoExt);
} }
function UpdateContactInfoCardComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r3.cmsContent.Email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.trimEmail(ctx_r3.contactInfo.contactInfo.emailAddress));
} }
function UpdateContactInfoCardComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r4.cmsContent.AltEmail, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.trimEmail(ctx_r4.contactInfo.contactInfo.altEmailAddress));
} }
class UpdateContactInfoCardComponent {
    constructor(state, phoneNumberPipe) {
        this.state = state;
        this.phoneNumberPipe = phoneNumberPipe;
        this.contactInfo = {};
    }
    ngOnInit() {
        this.formatPhoneNumber();
    }
    updateContactInfo() {
        this.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_0__.stateNames.UpdateContactInformation, { personalInfo: this.contactInfo });
    }
    trimEmail(email) {
        let trimmedEmail = email;
        if (email.length > 35) {
            trimmedEmail = email.slice(0, 12) + '...' + email.slice(-12);
        }
        return trimmedEmail;
    }
    formatPhoneNumber() {
        this.contactInfo.contactInfo.phoneNumber = this.phoneNumberPipe.transform(this.contactInfo.contactInfo.phoneNumber);
        this.contactInfo.contactInfo.workPhoNbr = this.phoneNumberPipe.transform(this.contactInfo.contactInfo.workPhoNbr);
        this.contactInfo.contactInfo.mobilePhoNbr = this.phoneNumberPipe.transform(this.contactInfo.contactInfo.mobilePhoNbr);
    }
}
UpdateContactInfoCardComponent.ɵfac = function UpdateContactInfoCardComponent_Factory(t) { return new (t || UpdateContactInfoCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_4__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](pipes_phoneNumber_phoneNumber_pipe__WEBPACK_IMPORTED_MODULE_1__.PhoneNumberPipe)); };
UpdateContactInfoCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UpdateContactInfoCardComponent, selectors: [["update-contact-info-card"]], inputs: { contactInfoTitle: "contactInfoTitle", cmsContent: "cmsContent", contactInfo: "contactInfo", isAccountClosed: "isAccountClosed" }, decls: 13, vars: 7, consts: [[1, "top-row-heights"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "u-spacing--widthFill"], ["fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [3, "fxHide", "click"], ["class", "context", 4, "ngIf"], [1, "context"]], template: function UpdateContactInfoCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "card-dash-container")(1, "div", 0)(2, "div", 1)(3, "header", 2)(4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateContactInfoCardComponent_Template_a_click_6_listener() { return ctx.updateContactInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, UpdateContactInfoCardComponent_div_8_Template, 8, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, UpdateContactInfoCardComponent_div_9_Template, 7, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, UpdateContactInfoCardComponent_div_10_Template, 7, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, UpdateContactInfoCardComponent_div_11_Template, 4, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, UpdateContactInfoCardComponent_div_12_Template, 4, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.contactInfoTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fxHide", ctx.isAccountClosed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contactInfo.contactInfo.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contactInfo.contactInfo.workPhoNbr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contactInfo.contactInfo.mobilePhoNbr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contactInfo.contactInfo.emailAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contactInfo.contactInfo.altEmailAddress);
    } }, directives: [_common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_2__.CardDashContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultShowHideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], pipes: [pipes_phoneNumber_phoneNumber_pipe__WEBPACK_IMPORTED_MODULE_1__.PhoneNumberPipe], styles: ["[_nghost-%COMP%]   card-dash-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n[_nghost-%COMP%]   .context[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  font-size: 14px !important;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   .context-long[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  font-size: 12px !important;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: 'Jost';\n  margin-left: auto;\n}\n[_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n  height: 190px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n    height: 190px;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1279.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 320px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGVDYXJkcy5sZXNzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxmb250cy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRVEsV0FBQTtBQUhSO0FBQ0E7RUFNUSxvQkFBQTtBQUpSO0FBRkE7RUFVUSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQVBBO0VBZ0JRLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQU5SO0FBWkE7RUNDSSxtQkFBQTtFRHNCSSxpQkFBQTtBQVBSO0FBaEJBO0VBMkJRLGFBQUE7QUFSUjtBQVVRO0VBQUE7SUFDSSxZQUFBO0VBUFY7QUFDRjtBQVNRO0VBQUE7SUFDSSxhQUFBO0VBTlY7QUFDRjtBQVVRO0VBQUE7SUFDSSxZQUFBO0VBUFY7QUFDRjtBQVNRO0VBQUE7SUFDSSxhQUFBO0VBTlY7QUFDRjtBQVFRO0VBQUE7SUFDSSxhQUFBO0VBTFY7QUFDRjtBQU9RO0VBQUE7SUFDSSxhQUFBO0VBSlY7QUFDRiIsImZpbGUiOiJwcm9maWxlQ2FyZHMubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgY2FyZC1kYXNoLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgfVxuXG4gICAgLmNvbnRleHQge1xuICAgICAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmNvbnRleHQtbG9uZyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgLnQtaGVhZGVyLS1mb250RmFtaWx5KCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cblxuICAgIC50b3Atcm93LWhlaWdodHMge1xuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtZ3QtbGcge1xuICAgICAgICAgICAgaGVpZ2h0OiAxOTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ib3R0b20tcm93LWhlaWdodHMge1xuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LW1kIHtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbGcge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1ndC1sZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbi50LWhlYWRlci0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtam9zdDtcbn1cblxuLnQtYm9keS0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbn1cbiJdfQ== */", "[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZUNvbnRhY3RJbmZvQ2FyZC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRVEsaUJBQUE7QUFGUiIsImZpbGUiOiJ1cGRhdGVDb250YWN0SW5mb0NhcmQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBzcGFuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 592:
/*!*******************************************************************************************************!*\
  !*** ./src/profile/accountDetails/display cards/updateLoginInfoCard/updateLoginInfoCard.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateLoginInfoCardComponent": () => (/* binding */ UpdateLoginInfoCardComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var profile_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! profile/constants */ 30129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/ui/containers/card/cardDash.component */ 65663);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);












const _c0 = function (a0) {
  return {
    "disable": a0
  };
};

class UpdateLoginInfoCardComponent {
  constructor(state, responseErrorService, dialogService, accountService) {
    this.state = state;
    this.responseErrorService = responseErrorService;
    this.dialogService = dialogService;
    this.accountService = accountService;
  }

  changeUsername() {
    this.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_3__.stateNames.ChangeUsername);
  }

  changePassword() {
    this.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_3__.stateNames.ChangePassword);
  }

  updateSecurityQuestion() {
    this.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_3__.stateNames.UpdateSecurityQuestion);
  }

  closeAccount() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let allVehiclesInactiveOrExpired = false;
      const tagData = yield _this.accountService.getEZTagInfo();

      if (_this.responseErrorService.isErrorFree(tagData)) {
        const accountTags = tagData.accountTags || [];
        const pbpTags = tagData.pbpTags || [];
        allVehiclesInactiveOrExpired = accountTags.every(_this.isInactiveTag) && pbpTags.every(_this.isExpiredTag);
      }

      yield _this.triggerCloseAccountModal(allVehiclesInactiveOrExpired);
    })();
  }

  isInactiveTag(tag) {
    return !!tag.tagStatusDesc && tag.tagStatusDesc.toLowerCase() === common_services__WEBPACK_IMPORTED_MODULE_1__.TagStatus.INACTIVE;
  }

  isExpiredTag(tag) {
    return !!tag.tagStatusDesc && tag.tagStatusDesc.toLowerCase() === common_services__WEBPACK_IMPORTED_MODULE_1__.TagStatus.EXPIRED;
  }

  triggerCloseAccountModal(vehiclesInactive) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (vehiclesInactive) {
        return _this2.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_3__.stateNames.CloseAccountAgreement);
      }

      const data = {
        cmsContent: {
          Title: _this2.closeAccountModalCms.ModalTitle,
          PrimaryContent: _this2.closeAccountModalCms.LongDescription,
          AcceptBtn: _this2.closeAccountModalCms.ContinueButtonText,
          CancelBtn: _this2.closeAccountModalCms.CloseButtonText
        }
      };
      const res = yield _this2.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_2__.GenericCmsModalComponent, data);

      if (res) {
        return _this2.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_3__.stateNames.CloseAccountAgreement);
      }
    })();
  }

}

UpdateLoginInfoCardComponent.ɵfac = function UpdateLoginInfoCardComponent_Factory(t) {
  return new (t || UpdateLoginInfoCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_6__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_1__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_1__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_1__.AccountService));
};

UpdateLoginInfoCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: UpdateLoginInfoCardComponent,
  selectors: [["update-login-info-card"]],
  inputs: {
    loginSecurityTitle: "loginSecurityTitle",
    isAccountClosed: "isAccountClosed",
    closeAccountModalCms: "closeAccountModalCms"
  },
  decls: 15,
  vars: 4,
  consts: [[1, "bottom-row-heights"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "u-spacing--widthFill"], ["fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [3, "ngClass"], [3, "click"]],
  template: function UpdateLoginInfoCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "card-dash-container")(1, "div", 0)(2, "div", 1)(3, "header", 2)(4, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UpdateLoginInfoCardComponent_Template_a_click_7_listener() {
        return ctx.changeUsername();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Change Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UpdateLoginInfoCardComponent_Template_a_click_9_listener() {
        return ctx.changePassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Change Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UpdateLoginInfoCardComponent_Template_a_click_11_listener() {
        return ctx.updateSecurityQuestion();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Update Security Question");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UpdateLoginInfoCardComponent_Template_a_click_13_listener() {
        return ctx.closeAccount();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Close Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.loginSecurityTitle, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c0, ctx.isAccountClosed));
    }
  },
  directives: [_common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_4__.CardDashContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultClassDirective],
  styles: ["[_nghost-%COMP%]   card-dash-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n[_nghost-%COMP%]   .context[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  font-size: 14px !important;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   .context-long[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  font-size: 12px !important;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: 'Jost';\n  margin-left: auto;\n}\n[_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n  height: 190px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n    height: 190px;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1279.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 320px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGVDYXJkcy5sZXNzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxmb250cy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRVEsV0FBQTtBQUhSO0FBQ0E7RUFNUSxvQkFBQTtBQUpSO0FBRkE7RUFVUSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQVBBO0VBZ0JRLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQU5SO0FBWkE7RUNDSSxtQkFBQTtFRHNCSSxpQkFBQTtBQVBSO0FBaEJBO0VBMkJRLGFBQUE7QUFSUjtBQVVRO0VBQUE7SUFDSSxZQUFBO0VBUFY7QUFDRjtBQVNRO0VBQUE7SUFDSSxhQUFBO0VBTlY7QUFDRjtBQVVRO0VBQUE7SUFDSSxZQUFBO0VBUFY7QUFDRjtBQVNRO0VBQUE7SUFDSSxhQUFBO0VBTlY7QUFDRjtBQVFRO0VBQUE7SUFDSSxhQUFBO0VBTFY7QUFDRjtBQU9RO0VBQUE7SUFDSSxhQUFBO0VBSlY7QUFDRiIsImZpbGUiOiJwcm9maWxlQ2FyZHMubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgY2FyZC1kYXNoLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgfVxuXG4gICAgLmNvbnRleHQge1xuICAgICAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmNvbnRleHQtbG9uZyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgLnQtaGVhZGVyLS1mb250RmFtaWx5KCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cblxuICAgIC50b3Atcm93LWhlaWdodHMge1xuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtZ3QtbGcge1xuICAgICAgICAgICAgaGVpZ2h0OiAxOTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ib3R0b20tcm93LWhlaWdodHMge1xuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LW1kIHtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbGcge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1ndC1sZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbi50LWhlYWRlci0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtam9zdDtcbn1cblxuLnQtYm9keS0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbn1cbiJdfQ== */", "[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 15px;\n  padding-bottom: 15px;\n  margin-left: 0px !important;\n}\n[_nghost-%COMP%]   .disable[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: #757575 !important;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZUxvZ2luSW5mb0NhcmQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVRLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQUZSO0FBSEE7RUFTUSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBSFIiLCJmaWxlIjoidXBkYXRlTG9naW5JbmZvQ2FyZC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcblxuOmhvc3Qge1xuICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5kaXNhYmxlIGEge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBjb2xvcjogQGJvdWxkZXItZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 990:
/*!*****************************************************************************************************************!*\
  !*** ./src/profile/accountDetails/display cards/updateMailingAddressCard/updateMailingAddressCard.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateMailingAddressCardComponent": () => (/* binding */ UpdateMailingAddressCardComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var profile_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! profile/constants */ 30129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/ui/containers/card/cardDash.component */ 65663);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/ui/display/address/addressDisplay.component */ 23204);










function UpdateMailingAddressCardComponent_address_display_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "address-display", 8);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("address", ctx_r0.mailingInfo.mailingAddress)("international", ctx_r0.mailingInfo.mailingAddress.country !== "USA")("showLabels", false);
  }
}

function UpdateMailingAddressCardComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.noMailingAddress);
  }
}

class UpdateMailingAddressCardComponent {
  constructor(state) {
    this.state = state;
    this.mailingInfo = {};
  }

  updateMailingInfo() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_1__.stateNames.UpdateMailingAddress, {
        personalInfo: _this.mailingInfo
      });
    })();
  }

}

UpdateMailingAddressCardComponent.ɵfac = function UpdateMailingAddressCardComponent_Factory(t) {
  return new (t || UpdateMailingAddressCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_5__.StateService));
};

UpdateMailingAddressCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: UpdateMailingAddressCardComponent,
  selectors: [["update-mailing-address-card"]],
  inputs: {
    mailingInfoTitle: "mailingInfoTitle",
    mailingInfo: "mailingInfo",
    isAccountClosed: "isAccountClosed",
    noMailingAddress: "noMailingAddress",
    isMailingAddress: "isMailingAddress"
  },
  decls: 14,
  vars: 10,
  consts: [[1, "top-row-heights"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "u-spacing--widthFill"], ["fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [3, "fxHide", "click"], ["translation-skip", "", 1, "context"], ["class", "context", 3, "address", "international", "showLabels", 4, "ngIf"], ["class", "context", 4, "ngIf"], [1, "context", 3, "address", "international", "showLabels"], [1, "context"]],
  template: function UpdateMailingAddressCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "card-dash-container")(1, "div", 0)(2, "div", 1)(3, "header", 2)(4, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UpdateMailingAddressCardComponent_Template_a_click_6_listener() {
        return ctx.updateMailingInfo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "titlecase");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "titlecase");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, UpdateMailingAddressCardComponent_address_display_12_Template, 1, 3, "address-display", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, UpdateMailingAddressCardComponent_span_13_Template, 2, 1, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.mailingInfoTitle, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fxHide", ctx.isAccountClosed);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 6, ctx.mailingInfo.personalInfo.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 8, ctx.mailingInfo.personalInfo.lastName), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isMailingAddress);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isMailingAddress);
    }
  },
  directives: [_common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_2__.CardDashContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultShowHideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_3__.AddressDisplayComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe],
  styles: ["[_nghost-%COMP%]   card-dash-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n[_nghost-%COMP%]   .context[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  font-size: 14px !important;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   .context-long[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  font-size: 12px !important;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: 'Jost';\n  margin-left: auto;\n}\n[_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n  height: 190px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   .top-row-heights[_ngcontent-%COMP%] {\n    height: 190px;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1279.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919.98px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}\n@media screen and (min-width: 1920px) {\n  [_nghost-%COMP%]   .bottom-row-heights[_ngcontent-%COMP%] {\n    height: 320px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGVDYXJkcy5sZXNzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxmb250cy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRVEsV0FBQTtBQUhSO0FBQ0E7RUFNUSxvQkFBQTtBQUpSO0FBRkE7RUFVUSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQVBBO0VBZ0JRLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQU5SO0FBWkE7RUNDSSxtQkFBQTtFRHNCSSxpQkFBQTtBQVBSO0FBaEJBO0VBMkJRLGFBQUE7QUFSUjtBQVVRO0VBQUE7SUFDSSxZQUFBO0VBUFY7QUFDRjtBQVNRO0VBQUE7SUFDSSxhQUFBO0VBTlY7QUFDRjtBQVVRO0VBQUE7SUFDSSxZQUFBO0VBUFY7QUFDRjtBQVNRO0VBQUE7SUFDSSxhQUFBO0VBTlY7QUFDRjtBQVFRO0VBQUE7SUFDSSxhQUFBO0VBTFY7QUFDRjtBQU9RO0VBQUE7SUFDSSxhQUFBO0VBSlY7QUFDRiIsImZpbGUiOiJwcm9maWxlQ2FyZHMubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgY2FyZC1kYXNoLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgfVxuXG4gICAgLmNvbnRleHQge1xuICAgICAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmNvbnRleHQtbG9uZyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgLnQtaGVhZGVyLS1mb250RmFtaWx5KCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cblxuICAgIC50b3Atcm93LWhlaWdodHMge1xuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtZ3QtbGcge1xuICAgICAgICAgICAgaGVpZ2h0OiAxOTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ib3R0b20tcm93LWhlaWdodHMge1xuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LW1kIHtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbGcge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1ndC1sZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbi50LWhlYWRlci0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtam9zdDtcbn1cblxuLnQtYm9keS0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbn1cbiJdfQ== */", "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGVNYWlsaW5nQWRkcmVzc0NhcmQubGVzcyJ9 */"]
});

/***/ }),

/***/ 42309:
/*!****************************************************************!*\
  !*** ./src/profile/changePassword/changePassword.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var profile_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! profile/constants */ 30129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var authentication_addMissingInformationService_addMissingInformation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! authentication/addMissingInformationService/addMissingInformation.service */ 10402);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _common_ui_form_entry_showHideInputButton_showHideInputButton_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/form-entry/showHideInputButton/showHideInputButton.component */ 27554);
/* harmony import */ var _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../validation/errorMessages/errorMessages.component */ 65316);
/* harmony import */ var _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../validation/errorMessages/errorMessage.component */ 79636);
/* harmony import */ var _validation_notEqualTo_notEqualTo_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../validation/notEqualTo/notEqualTo.directive */ 99758);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/modals/actionButtons/actionButtons.component */ 65380);























function ChangePasswordComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "article", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHtml", ctx_r1.cmsContent.ShortDescription, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
  }
}

class ChangePasswordComponent {
  constructor(responseErrorService, accountService, state, addMissingInformationService, dialogService) {
    this.responseErrorService = responseErrorService;
    this.accountService = accountService;
    this.state = state;
    this.addMissingInformationService = addMissingInformationService;
    this.dialogService = dialogService;
    this.isShowCurrentPassword = false;
    this.isShowNewPassword = false;
  }

  ngOnInit() {
    this.addMissingInformation = {
      password: '',
      confirmPassword: '',
      email: '',
      confirmEmail: '',
      securityAnswer: '',
      confirmSecurityAnswer: '',
      securityQuestionID: '',
      currentPassword: '',
      missingInformationFlags: this.addMissingInformationService.returnMissingInformation()
    };
  }

  showCompletionModal() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        cmsContent: {
          Title: _this.cmsContent.completionModalTitle,
          AcceptBtn: 'OKAY',
          PrimaryContent: _this.cmsContent.LongDescription
        }
      };
      yield _this.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_1__.GenericCmsModalComponent, data);
      yield _this.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.AccountDetails);
    })();
  } // Used in the action buttons component.


  saveInformation(form) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!form.valid) {
        return;
      }

      _this2.addMissingInformation.securityAnswer = null;
      const apiResponse = yield _this2.accountService.saveInformation(_this2.addMissingInformation);

      if (_this2.responseErrorService.isErrorFree(apiResponse)) {
        _this2.showCompletionModal();
      }
    })();
  } // Used in the action buttons component.


  cancel() {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.AccountDetails);
    })();
  }

}

ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) {
  return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_15__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](authentication_addMissingInformationService_addMissingInformation_service__WEBPACK_IMPORTED_MODULE_4__.AddMissingInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.DialogService));
};

ChangePasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: ChangePasswordComponent,
  selectors: [["change-password"]],
  inputs: {
    cmsContent: "cmsContent",
    pwCmsData: "pwCmsData"
  },
  decls: 46,
  vars: 21,
  consts: [["hasAlternateBackgroundColor", "true"], ["fxLayout", "column"], ["fxFlexOffset", "21px"], ["validation-focus", "", "novalidate", "", "fxLayout", "column start", "method", "post"], ["ChangePasswordForm", "ngForm"], [1, "u-spacing__divider--marginTopBottom"], [4, "ngIf"], ["fxLayout", "column", "ngClass", "spanPosition", 1, "u-spacing__fieldToField--marginTop", 3, "error-check"], ["for", "currentPassword"], ["type", "text", "id", "currentPasswordTxtBox", "name", "currentPassword", "tabindex", "1", "required", "", 3, "ngModel", "type", "ngClass", "ngModelChange"], ["currentPasswordInput", "ngModel"], [3, "showField", "showFieldChange"], [3, "errors", "activeBeforeSubmit"], ["rule", "required"], ["fxLayout", "column", 1, "u-spacing__fieldToField--marginTop", 3, "error-check"], ["for", "newPassword"], ["type", "text", "id", "newPasswordTxtBox", "name", "newPassword", "tabindex", "2", "pattern", "[A-Za-z0-9._!@#$^*&();?{}`~<>,+-]+$", "minlength", "12", "maxlength", "50", "required", "", 3, "ngModel", "type", "notEqualTo", "ngClass", "ngModelChange"], ["newPasswordInput", "ngModel"], [1, "password-rules"], ["rule", "minlength"], ["rule", "maxlength"], ["rule", "pattern"], ["rule", "notEqualTo"], [1, "u-spacing__buttonToField--marginTop"], [3, "main", "alt"], ["action-main", "", "tabindex", "3"], ["action-alt", "", "tabindex", "4"], [3, "innerHtml"]],
  template: function ChangePasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3, 4)(5, "card-container")(6, "header")(7, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "mat-divider", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, ChangePasswordComponent_section_10_Template, 2, 1, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "section")(12, "div", 7)(13, "mat-label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "CURRENT PASSWORD (REQUIRED)");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "input", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.addMissingInformation.currentPassword = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "show-hide-input-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("showFieldChange", function ChangePasswordComponent_Template_show_hide_input_button_showFieldChange_17_listener($event) {
        return ctx.isShowCurrentPassword = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "error-messages", 12)(19, "error-message", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, "Please enter your password");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 14)(22, "mat-label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "NEW PASSWORD");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "input", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_24_listener($event) {
        return ctx.addMissingInformation.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "show-hide-input-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("showFieldChange", function ChangePasswordComponent_Template_show_hide_input_button_showFieldChange_26_listener($event) {
        return ctx.isShowNewPassword = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "error-messages", 12)(30, "error-message", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, "Please enter a password");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "error-message", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "error-message", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "error-message", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "error-message", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](39, "New password must be different from current password.");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "div", 23)(41, "action-buttons", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("main", function ChangePasswordComponent_Template_action_buttons_main_41_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](4);

        return ctx.saveInformation(_r0);
      })("alt", function ChangePasswordComponent_Template_action_buttons_alt_41_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](43, "SAVE");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](45, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](16);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](25);

      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.cmsContent.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.cmsContent.ShortDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("error-check", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.addMissingInformation.currentPassword)("type", ctx.isShowCurrentPassword ? "text" : "password")("ngClass", ctx.isShowCurrentPassword ? "pwd-hide" : "pwd-show");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("showField", ctx.isShowCurrentPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("errors", _r2.errors)("activeBeforeSubmit", _r2.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("error-check", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.addMissingInformation.password)("type", ctx.isShowNewPassword ? "text" : "password")("notEqualTo", ctx.addMissingInformation.currentPassword)("ngClass", ctx.isShowNewPassword ? "pwd-hide" : "pwd-show");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("showField", ctx.isShowNewPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.pwCmsData.PasswordDesc);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("errors", _r3.errors)("activeBeforeSubmit", _r3.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.pwCmsData.MinPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.pwCmsData.MaxPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.pwCmsData.InvalidCharacter);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__.PageCenteredContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultFlexOffsetDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_6__.FocusDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__.DefaultClassDirective, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_8__.ErrorCheckDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _common_ui_form_entry_showHideInputButton_showHideInputButton_component__WEBPACK_IMPORTED_MODULE_9__.ShowHideInputButtonComponent, _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_10__.ErrorMessagesComponent, _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_11__.ErrorMessageComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.MaxLengthValidator, _validation_notEqualTo_notEqualTo_directive__WEBPACK_IMPORTED_MODULE_12__.NotEqualToDirective, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_13__.ActionButtonsComponent],
  styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   .password-rules[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZVBhc3N3b3JkLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFUSxXQUFBO0FBRlI7QUFBQTtFQU1RLGVBQUE7QUFIUiIsImZpbGUiOiJjaGFuZ2VQYXNzd29yZC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcblxuOmhvc3Qge1xuICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xuICAgIH1cblxuICAgIC5wYXNzd29yZC1ydWxlcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 69899:
/*!****************************************************************!*\
  !*** ./src/profile/changeUsername/changeUsername.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeUsernameComponent": () => (/* binding */ ChangeUsernameComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var profile_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! profile/constants */ 30129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var authentication_addMissingInformationService_addMissingInformation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! authentication/addMissingInformationService/addMissingInformation.service */ 10402);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _common_ui_form_entry_showHideInputButton_showHideInputButton_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/form-entry/showHideInputButton/showHideInputButton.component */ 27554);
/* harmony import */ var _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../validation/errorMessages/errorMessages.component */ 65316);
/* harmony import */ var _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../validation/errorMessages/errorMessage.component */ 79636);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/modals/actionButtons/actionButtons.component */ 65380);






















function ChangeUsernameComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "article", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("innerHtml", ctx_r1.cmsContent.ShortDescription, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeHtml"]);
  }
}

class ChangeUsernameComponent {
  constructor(genericRepoService, responseErrorService, state, addMissingInformationService, dialogService) {
    this.genericRepoService = genericRepoService;
    this.responseErrorService = responseErrorService;
    this.state = state;
    this.addMissingInformationService = addMissingInformationService;
    this.dialogService = dialogService;
    this.isShowPassword = false;
  }

  ngOnInit() {
    this.addMissingInformation = {
      password: '',
      confirmPassword: '',
      username: '',
      email: '',
      confirmEmail: '',
      securityAnswer: '',
      confirmSecurityAnswer: '',
      securityQuestionID: '',
      currentPassword: '',
      newUsername: '',
      missingInformationFlags: this.addMissingInformationService.returnMissingInformation()
    };
  }

  showCompletionModal() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        cmsContent: {
          Title: _this.cmsContent.completionModalTitle,
          AcceptBtn: 'OKAY',
          PrimaryContent: _this.cmsContent.LongDescription
        }
      };
      yield _this.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_1__.GenericCmsModalComponent, data);
      yield _this.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.AccountDetails);
    })();
  } // Used in the action buttons component.


  saveInformation(form) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!form.valid) {
        return;
      }

      const apiResponse = yield _this2.genericRepoService.dataFactory.updateLoginID(_this2.addMissingInformation);

      if (_this2.responseErrorService.isErrorFree(apiResponse)) {
        _this2.showCompletionModal();
      }
    })();
  } // Used in the action buttons component.


  cancel() {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.AccountDetails);
    })();
  }

}

ChangeUsernameComponent.ɵfac = function ChangeUsernameComponent_Factory(t) {
  return new (t || ChangeUsernameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.GenericRepoService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_14__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](authentication_addMissingInformationService_addMissingInformation_service__WEBPACK_IMPORTED_MODULE_4__.AddMissingInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.DialogService));
};

ChangeUsernameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: ChangeUsernameComponent,
  selectors: [["change-username"]],
  inputs: {
    cmsContent: "cmsContent"
  },
  decls: 41,
  vars: 12,
  consts: [["hasAlternateBackgroundColor", "true"], ["fxLayout", "column"], ["fxFlexOffset", "21px"], ["validation-focus", "", "novalidate", "", "fxLayout", "column start", "method", "post"], ["ChangeUsernameForm", "ngForm"], [1, "u-spacing__divider--marginTopBottom"], [4, "ngIf"], ["fxLayout", "column", "ngClass", "spanPosition", 1, "u-spacing__fieldToField--marginTop", 3, "error-check"], ["for", "currentPassword"], ["type", "text", "id", "currentPasswordTxtBox", "name", "currentPassword", "tabindex", "1", "required", "", 3, "ngModel", "type", "ngModelChange"], ["currentPasswordInput", "ngModel"], [3, "showField", "showFieldChange"], [3, "errors", "activeBeforeSubmit"], ["rule", "required"], ["fxLayout", "column", 1, "u-spacing__fieldToField--marginTop", 3, "error-check"], ["for", "newUsername"], ["type", "text", "id", "newUsernameTxtBox", "name", "newUsername", "tabindex", "2", "minlength", "6", "maxlength", "30", "pattern", "^[a-zA-Z0-9-_@.]{0,30}$", "required", "", 3, "ngModel", "ngModelChange"], ["newUsernameInput", "ngModel"], ["rule", "minlength"], ["rule", "maxlength"], ["rule", "pattern"], [1, "u-spacing__buttonToField--marginTop"], [3, "main", "alt"], ["action-main", "", "tabindex", "3"], ["action-alt", "", "tabindex", "4"], [3, "innerHtml"]],
  template: function ChangeUsernameComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3, 4)(5, "card-container")(6, "header")(7, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "mat-divider", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, ChangeUsernameComponent_section_10_Template, 2, 1, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "section")(12, "div", 7)(13, "mat-label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "CURRENT PASSWORD (REQUIRED)");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "input", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function ChangeUsernameComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.addMissingInformation.currentPassword = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "show-hide-input-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("showFieldChange", function ChangeUsernameComponent_Template_show_hide_input_button_showFieldChange_17_listener($event) {
        return ctx.isShowPassword = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "error-messages", 12)(19, "error-message", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "Please enter your password");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 14)(22, "mat-label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "NEW USERNAME");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "input", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function ChangeUsernameComponent_Template_input_ngModelChange_24_listener($event) {
        return ctx.addMissingInformation.newUsername = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "error-messages", 12)(27, "error-message", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "Please enter a username");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "error-message", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30, "Must be at least 6 characters");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "error-message", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32, "Must be no more than 30 characters");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "error-message", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, "Please enter a valid username");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "div", 21)(36, "action-buttons", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("main", function ChangeUsernameComponent_Template_action_buttons_main_36_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](4);

        return ctx.saveInformation(_r0);
      })("alt", function ChangeUsernameComponent_Template_action_buttons_alt_36_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, "SAVE");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](16);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](25);

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.cmsContent.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.cmsContent.ShortDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("error-check", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.addMissingInformation.currentPassword)("type", ctx.isShowPassword ? "text" : "password");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("showField", ctx.isShowPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("errors", _r2.errors)("activeBeforeSubmit", _r2.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("error-check", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.addMissingInformation.newUsername);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("errors", _r3.errors)("activeBeforeSubmit", _r3.touched);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__.PageCenteredContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultFlexOffsetDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_6__.FocusDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__.DefaultClassDirective, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_8__.ErrorCheckDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _common_ui_form_entry_showHideInputButton_showHideInputButton_component__WEBPACK_IMPORTED_MODULE_9__.ShowHideInputButtonComponent, _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_10__.ErrorMessagesComponent, _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_11__.ErrorMessageComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.PatternValidator, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_12__.ActionButtonsComponent],
  styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZVVzZXJuYW1lLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFUSxXQUFBO0FBRlIiLCJmaWxlIjoiY2hhbmdlVXNlcm5hbWUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 36607:
/*!******************************************************************************!*\
  !*** ./src/profile/closeAccountAgreement/closeAccountAgreement.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseAccountAgreementComponent": () => (/* binding */ CloseAccountAgreementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _closeAccountFrame_frame_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../closeAccountFrame/frame.component */ 28727);
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/core */ 7199);
/* harmony import */ var _common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/webStorageService/webStorage.service */ 38898);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/safeHtml.pipe */ 49985);











function CloseAccountAgreementComponent_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 8)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.cmsContent.TitlePretext);
} }
class CloseAccountAgreementComponent {
    constructor(parent, stateService, webStorage) {
        this.parent = parent;
        this.stateService = stateService;
        this.webStorage = webStorage;
    }
    ngOnInit() {
        this.webStorage.removeEntry('closeAgreed');
        this.cmsContent.accountClosureAgreement = this.cmsContent.ShortDescription;
        this.parent.stepNum = 1;
    }
    onAccept(state) {
        this.webStorage.setKeyValue('closeAgreed', true);
        if (this.parent.closeAccountRefund.currentBalance === 0) {
            this.parent.onCloseContinue();
            return;
        }
        this.stateService.go(state.name);
    }
    onDecline(state) {
        this.stateService.go(state.name);
    }
}
CloseAccountAgreementComponent.ɵfac = function CloseAccountAgreementComponent_Factory(t) { return new (t || CloseAccountAgreementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_closeAccountFrame_frame_component__WEBPACK_IMPORTED_MODULE_0__.CloseAccountFrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_uirouter_core__WEBPACK_IMPORTED_MODULE_1__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_2__.WebStorageService)); };
CloseAccountAgreementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CloseAccountAgreementComponent, selectors: [["close-account-agreement"]], inputs: { cmsContent: "cmsContent" }, decls: 16, vars: 7, consts: [["hasAlternateBackgroundColor", "true"], ["class", "u-spacing__sectionToSection--marginBottom", 4, "ngIf"], [1, "u-spacing__divider--marginTopBottom"], [3, "innerHtml"], [1, "u-spacing__buttonToField--marginTop"], [3, "next", "cancel"], ["wizard-next", ""], ["wizard-cancel", ""], [1, "u-spacing__sectionToSection--marginBottom"]], template: function CloseAccountAgreementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "card-container")(2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CloseAccountAgreementComponent_section_3_Template, 3, 1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "header")(5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "mat-divider", 2)(8, "article", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "safeHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "section", 4)(11, "wizard-ui", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("next", function CloseAccountAgreementComponent_Template_wizard_ui_next_11_listener($event) { return ctx.onAccept($event); })("cancel", function CloseAccountAgreementComponent_Template_wizard_ui_cancel_11_listener($event) { return ctx.onDecline($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.cmsContent.TitlePretext);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.cmsContent.TitleAgreement);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 5, ctx.cmsContent.accountClosureAgreement), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.cmsContent.BtnAccept);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.cmsContent.BtnDecline);
    } }, directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_3__.PageCenteredContainerComponent, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_4__.CardContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_5__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_6__.WizardNextDirective], pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_7__.SafeHtmlPipe], styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3NlQWNjb3VudEFncmVlbWVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRVEsV0FBQTtBQUhSIiwiZmlsZSI6ImNsb3NlQWNjb3VudEFncmVlbWVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 28727:
/*!**********************************************************!*\
  !*** ./src/profile/closeAccountFrame/frame.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseAccountFrameComponent": () => (/* binding */ CloseAccountFrameComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var animations_hide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animations/hide */ 33965);
/* harmony import */ var common_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/providers */ 61264);
/* harmony import */ var common_upgrades__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/upgrades */ 41034);
/* harmony import */ var common_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/utilities */ 56516);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @uirouter/core */ 7199);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ 30129);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/services/webStorageService/webStorage.service */ 38898);
/* harmony import */ var common_services_session_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/services/session/session.service */ 19511);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var common_billing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/billing */ 92208);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var _common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/wizard/stepper/stepper.component */ 63457);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @uirouter/angular */ 99305);



















function CloseAccountFrameComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ui-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@hide", ctx_r0.isHidden);
  }
}

class CloseAccountFrameComponent {
  constructor(windowRef, stateService, profileStatesNames, responseErrorService, environmentConfig, genericRepoService, webStorage, session, userRoles, currentUser, billingInfoUtilitiesService, mailingAddressService) {
    this.windowRef = windowRef;
    this.stateService = stateService;
    this.profileStatesNames = profileStatesNames;
    this.responseErrorService = responseErrorService;
    this.environmentConfig = environmentConfig;
    this.genericRepoService = genericRepoService;
    this.webStorage = webStorage;
    this.session = session;
    this.userRoles = userRoles;
    this.currentUser = currentUser;
    this.billingInfoUtilitiesService = billingInfoUtilitiesService;
    this.mailingAddressService = mailingAddressService;
    this.title = 'FAKE TITLE';
    this.creditValue = 'credit';
    this.checkValue = 'check';
    this.steps = [];
    this.stepNum = 0;
  }

  ngOnInit() {
    this.closeAccountRefund = {
      mailingInfo: null,
      method: null,
      billingType: null,
      creditCard: null,
      currentBalance: null,
      date: null
    };
    this.populateRefundData();
    this.steps = [{
      name: this.cmsContent.Step1,
      background: 'ternary'
    }, {
      name: this.cmsContent.Step2,
      background: 'ternary'
    }, {
      name: this.cmsContent.Step3,
      background: 'ternary'
    }];
  }

  scrollToTop() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isHidden = true;
      yield (0,common_utilities__WEBPACK_IMPORTED_MODULE_4__.wait)(20);

      _this.windowRef.scrollTo(0, 0);

      _this.isHidden = false;
    })();
  }

  onCloseContinue() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if ((0,common_utilities__WEBPACK_IMPORTED_MODULE_4__.isUndefined)(_this2.closeAccountRefund.method)) {
        _this2.closeAccountRefund.method = _this2.closeAccountRefund.billingType === common_models__WEBPACK_IMPORTED_MODULE_5__.BillingType.Credit ? _this2.creditValue : _this2.checkValue;
      }

      const updated = yield _this2.mailingAddressService.setMailingAddressOnAcctLevel();
      const response = yield _this2.genericRepoService.dataFactory.closeAccount({
        refundType: _this2.closeAccountRefund.method,
        creditValue: _this2.creditValue,
        checkValue: _this2.checkValue
      });

      if (updated && _this2.responseErrorService.isErrorFree(response)) {
        _this2.webStorage.removeEntry('closeAgreed');

        _this2.session.userRole = _this2.userRoles.pendingClosure;

        _this2.session.setAcctActivity('I');

        const currentUserData = _this2.currentUser.getCurrentUser();

        currentUserData.acctActivity = 'I';

        _this2.currentUser.updateCurrentUser(currentUserData);

        yield _this2.stateService.go(_this2.profileStatesNames.CloseAccountReview, {}, {
          custom: {
            isExplicitlyAllowedTransition: true
          }
        });
      }
    })();
  }

  populateRefundData() {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield _this3.genericRepoService.dataFactory.getRefundData();
      const mailingInfo = yield _this3.mailingAddressService.getMailingAddress();

      if (_this3.responseErrorService.isErrorFree(response) && !!mailingInfo) {
        _this3.closeAccountRefund.currentBalance = response.currentBalance; // new Date() is used so date will match the <account-header>, but it used to be response.timeWithZone.split('at')[0];

        _this3.closeAccountRefund.date = new Date();
        _this3.closeAccountRefund.creditCard = Array.isArray(response.billingInfo.cards) ? response.billingInfo.cards[0] : undefined;
        _this3.closeAccountRefund.billingType = response.billingInfo.billingTypeDisplay;
        _this3.closeAccountRefund.mailingInfo = mailingInfo;
        _this3.closeAccountRefund.mailingInfo.international = _this3.billingInfoUtilitiesService.isInternationalAddress(mailingInfo);
        _this3.hideRefundMethodSelection = _this3.environmentConfig.hideRefundMethodSelection; // The toggle hideRefundMethodSelection has been true for a while now
        // User should be able to validate mailing address only
        // TODO: Anand - Remove feature toggle and cleanup after this feature is stable in PROD
        // Why is the refund method defaulted to checkValue?

        _this3.closeAccountRefund.method = _this3.environmentConfig.hideRefundMethodSelection || response.billingInfo.billingTypeDisplay !== 'CREDIT' ? _this3.checkValue : _this3.creditValue;
      }
    })();
  }

}

CloseAccountFrameComponent.ɵfac = function CloseAccountFrameComponent_Factory(t) {
  return new (t || CloseAccountFrameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](common_providers__WEBPACK_IMPORTED_MODULE_2__.WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_uirouter_core__WEBPACK_IMPORTED_MODULE_6__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_constants__WEBPACK_IMPORTED_MODULE_7__.StateNames), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_8__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](common_upgrades__WEBPACK_IMPORTED_MODULE_3__.ENVIRON_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_8__.GenericRepoService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_9__.WebStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](common_services_session_session_service__WEBPACK_IMPORTED_MODULE_10__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](constants_module__WEBPACK_IMPORTED_MODULE_11__.UserRoles), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_8__.CurrentUserService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](common_billing__WEBPACK_IMPORTED_MODULE_12__.BillingInfoUtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_13__.MailingAddressService));
};

CloseAccountFrameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: CloseAccountFrameComponent,
  selectors: [["close-account-frame-component"]],
  inputs: {
    stateList: "stateList",
    countryList: "countryList",
    cmsContent: "cmsContent"
  },
  decls: 3,
  vars: 3,
  consts: [[1, "refresh-2020"], [3, "steps", "currentStepNum"], [4, "ngIf"]],
  template: function CloseAccountFrameComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "main", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "stepper", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, CloseAccountFrameComponent_div_2_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("steps", ctx.steps)("currentStepNum", ctx.stepNum);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.closeAccountRefund.mailingInfo);
    }
  },
  directives: [_common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_14__.StepperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _uirouter_angular__WEBPACK_IMPORTED_MODULE_17__.UIView],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcmFtZS5sZXNzIn0= */"],
  data: {
    animation: [animations_hide__WEBPACK_IMPORTED_MODULE_1__.hideTrigger]
  }
});

/***/ }),

/***/ 38530:
/*!************************************************************************!*\
  !*** ./src/profile/closeAccountRefund/closeAccountRefund.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseAccountRefundComponent": () => (/* binding */ CloseAccountRefundComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _closeAccountFrame_frame_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../closeAccountFrame/frame.component */ 28727);
/* harmony import */ var _common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/webStorageService/webStorage.service */ 38898);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ 30129);
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uirouter/core */ 7199);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/display/cmsContent/cmsContent.component */ 89707);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/ui/display/address/addressDisplay.component */ 23204);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pipes/safeHtml.pipe */ 49985);



















function CloseAccountRefundComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r0.cmsContent.mailingAddressMissing);
  }
}

class CloseAccountRefundComponent {
  constructor(parent, webStorage, profileRoutes, stateService, mailingAddressService) {
    this.parent = parent;
    this.webStorage = webStorage;
    this.profileRoutes = profileRoutes;
    this.stateService = stateService;
    this.mailingAddressService = mailingAddressService;
    this.accountClosureCmsParams = {};
  }

  get closeAccountRefund() {
    return this.parent.closeAccountRefund;
  }

  get hasRefundFields() {
    return !!this.closeAccountRefund.mailingInfo.city && !!this.closeAccountRefund.mailingInfo.state && !!this.closeAccountRefund.mailingInfo.zip;
  }

  ngOnInit() {
    this.parent.stepNum = 2;
    this.webStorage.validateOnValue('closeAgreed', this.profileRoutes.CloseAccountFrame + this.profileRoutes.CloseAccountAgreement);
    this.accountClosureCmsParams = {
      balance: this.closeAccountRefund.currentBalance,
      date: this.closeAccountRefund.date
    };
  }

  onMailingAddressEdit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.mailingAddressService.onMailingAddressEdit('Edit', _this.parent.stateList, _this.parent.countryList, common_ui__WEBPACK_IMPORTED_MODULE_1__.NewBillingAddressModalComponent);
    })();
  }

  onCancel(state) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.webStorage.removeEntry('closeAgreed');

      yield _this2.stateService.go(state.name);
    })();
  }

  onContinue() {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.parent.onCloseContinue();
    })();
  }

}

CloseAccountRefundComponent.ɵfac = function CloseAccountRefundComponent_Factory(t) {
  return new (t || CloseAccountRefundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_closeAccountFrame_frame_component__WEBPACK_IMPORTED_MODULE_2__.CloseAccountFrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_3__.WebStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_constants__WEBPACK_IMPORTED_MODULE_4__.Routes), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_uirouter_core__WEBPACK_IMPORTED_MODULE_5__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_6__.MailingAddressService));
};

CloseAccountRefundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: CloseAccountRefundComponent,
  selectors: [["close-account-refund"]],
  inputs: {
    cmsContent: "cmsContent"
  },
  decls: 31,
  vars: 13,
  consts: [["hasAlternateBackgroundColor", "true"], [1, "u-spacing__divider--marginTopBottom"], [3, "template", "data"], [1, "u-spacing__sectionToSection--marginTop"], [3, "innerHtml"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [3, "click"], ["style", "color: red;", 4, "ngIf"], [3, "address", "international", "showLabels"], [1, "u-spacing__buttonToField--marginTop"], [3, "disabled", "next", "cancel"], ["wizard-next", ""], ["wizard-cancel", ""], [2, "color", "red"]],
  template: function CloseAccountRefundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "card-container")(2, "section")(3, "header")(4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "mat-divider", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "cms-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "section", 3)(10, "header")(11, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "mat-divider", 1)(14, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](15, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "section", 3)(17, "header", 5)(18, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CloseAccountRefundComponent_Template_a_click_20_listener() {
        return ctx.onMailingAddressEdit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](22, "mat-divider", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, CloseAccountRefundComponent_div_23_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "address-display", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "section", 9)(26, "wizard-ui", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("next", function CloseAccountRefundComponent_Template_wizard_ui_next_26_listener() {
        return ctx.onContinue();
      })("cancel", function CloseAccountRefundComponent_Template_wizard_ui_cancel_26_listener($event) {
        return ctx.onCancel($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, "CLOSE ACCOUNT");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.cmsContent.ACCOUNT_CLOSURE_HEADER);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("template", ctx.cmsContent.LongDescription)("data", ctx.accountClosureCmsParams);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.cmsContent.REFUND_METHOD_HEADER);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](15, 11, ctx.cmsContent.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.cmsContent.VALIDATE_HEADER);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.hasRefundFields);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("address", ctx.closeAccountRefund.mailingInfo)("international", ctx.closeAccountRefund.mailingInfo.international)("showLabels", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx.hasRefundFields);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_7__.PageCenteredContainerComponent, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_8__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_9__.CmsContentComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_10__.AddressDisplayComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_12__.WizardNextDirective],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_13__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3NlQWNjb3VudFJlZnVuZC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRVEsV0FBQTtBQUhSIiwiZmlsZSI6ImNsb3NlQWNjb3VudFJlZnVuZC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 21588:
/*!************************************************************************!*\
  !*** ./src/profile/closeAccountReview/closeAccountReview.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseAccountReviewComponent": () => (/* binding */ CloseAccountReviewComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/core */ 7199);
/* harmony import */ var _closeAccountFrame_frame_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../closeAccountFrame/frame.component */ 28727);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/safeHtml.pipe */ 49985);













function CloseAccountReviewComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 7)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.cmsContent.TitlePretext);
  }
}

class CloseAccountReviewComponent {
  constructor(stateService, parent, mailingAddressService) {
    this.stateService = stateService;
    this.parent = parent;
    this.mailingAddressService = mailingAddressService;
  }

  ngOnInit() {
    this.parent.stepNum = 3;
  }

  ngOnDestroy() {
    this.mailingAddressService.clearData();
  }

  nextState(state) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.stateService.go(state.name);
    })();
  }

}

CloseAccountReviewComponent.ɵfac = function CloseAccountReviewComponent_Factory(t) {
  return new (t || CloseAccountReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_uirouter_core__WEBPACK_IMPORTED_MODULE_1__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_closeAccountFrame_frame_component__WEBPACK_IMPORTED_MODULE_2__.CloseAccountFrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_3__.MailingAddressService));
};

CloseAccountReviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: CloseAccountReviewComponent,
  selectors: [["close-account-review"]],
  inputs: {
    cmsContent: "cmsContent"
  },
  decls: 14,
  vars: 7,
  consts: [["hasAlternateBackgroundColor", "true"], ["class", "u-spacing__sectionToSection--marginBottom", 4, "ngIf"], [1, "u-spacing__divider--marginTopBottom"], [3, "innerHtml"], [1, "u-spacing__buttonToField--marginTop"], [3, "reverseOrder", "next"], ["wizard-next", ""], [1, "u-spacing__sectionToSection--marginBottom"]],
  template: function CloseAccountReviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "card-container")(2, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, CloseAccountReviewComponent_section_3_Template, 3, 1, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "header")(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "mat-divider", 2)(8, "article", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "section", 4)(11, "wizard-ui", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("next", function CloseAccountReviewComponent_Template_wizard_ui_next_11_listener($event) {
        return ctx.nextState($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.cmsContent.TitlePretext);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.cmsContent.TitleReview);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 5, ctx.cmsContent.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("reverseOrder", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.cmsContent.BtnContinue);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_4__.PageCenteredContainerComponent, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_5__.CardContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDivider, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_6__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_7__.WizardNextDirective],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_8__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3NlQWNjb3VudFJldmlldy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRVEsV0FBQTtBQUhSIiwiZmlsZSI6ImNsb3NlQWNjb3VudFJldmlldy5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 25129:
/*!*******************************!*\
  !*** ./src/profile/module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildCmsIds": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_31__.ChildCmsIds),
/* harmony export */   "CmsIds": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_31__.CmsIds),
/* harmony export */   "FeatureToggles": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_31__.FeatureToggles),
/* harmony export */   "ProfileModule": () => (/* binding */ ProfileModule),
/* harmony export */   "Routes": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_31__.Routes),
/* harmony export */   "StateNames": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_31__.StateNames),
/* harmony export */   "childCmsIds": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_31__.childCmsIds),
/* harmony export */   "cmsIds": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_31__.cmsIds),
/* harmony export */   "featureToggles": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_31__.featureToggles),
/* harmony export */   "stateNames": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_31__.stateNames),
/* harmony export */   "urlPaths": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_31__.urlPaths)
/* harmony export */ });
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @uirouter/angular */ 99305);
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var validation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validation/module */ 26186);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _accountDetails_accountDetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accountDetails/accountDetails.component */ 83772);
/* harmony import */ var _changePassword_changePassword_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./changePassword/changePassword.component */ 42309);
/* harmony import */ var _changeUsername_changeUsername_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./changeUsername/changeUsername.component */ 69899);
/* harmony import */ var _closeAccountAgreement_closeAccountAgreement_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./closeAccountAgreement/closeAccountAgreement.component */ 36607);
/* harmony import */ var _closeAccountFrame_frame_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./closeAccountFrame/frame.component */ 28727);
/* harmony import */ var _closeAccountRefund_closeAccountRefund_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./closeAccountRefund/closeAccountRefund.component */ 38530);
/* harmony import */ var _closeAccountReview_closeAccountReview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./closeAccountReview/closeAccountReview.component */ 21588);
/* harmony import */ var _updateAuthorizedContacts_updateAuthorizedContacts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./updateAuthorizedContacts/updateAuthorizedContacts.component */ 30055);
/* harmony import */ var _updateAuthorizedContacts_authContact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./updateAuthorizedContacts/authContact.component */ 5402);
/* harmony import */ var _updateAuthorizedContacts_authorizedContactModal_authorizedContactModal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./updateAuthorizedContacts/authorizedContactModal/authorizedContactModal.component */ 86376);
/* harmony import */ var _updateBillingInformation_updateBillingInformation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./updateBillingInformation/updateBillingInformation.component */ 15047);
/* harmony import */ var _updateContactInformation_updateContactInformation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./updateContactInformation/updateContactInformation.component */ 45969);
/* harmony import */ var _updateMailingAddress_updateMailingAddress_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./updateMailingAddress/updateMailingAddress.component */ 48223);
/* harmony import */ var _updateReplenishmentAmount_updateReplenishAmount_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./updateReplenishmentAmount/updateReplenishAmount.component */ 19221);
/* harmony import */ var _updateSecurityQuestion_updateSecurityQuestion_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./updateSecurityQuestion/updateSecurityQuestion.component */ 26983);
/* harmony import */ var _accountDetails_display_cards_authContactsCard_authContactsCard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./accountDetails/display cards/authContactsCard/authContactsCard.component */ 62261);
/* harmony import */ var _accountDetails_display_cards_comPreferencesCard_comPreferencesCard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./accountDetails/display cards/comPreferencesCard/comPreferencesCard.component */ 17347);
/* harmony import */ var _accountDetails_display_cards_rebillAmtCard_rebillAmtCard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./accountDetails/display cards/rebillAmtCard/rebillAmtCard.component */ 81213);
/* harmony import */ var _accountDetails_display_cards_updateContactInfoCard_updateContactInfoCard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./accountDetails/display cards/updateContactInfoCard/updateContactInfoCard.component */ 5853);
/* harmony import */ var _accountDetails_display_cards_updateLoginInfoCard_updateLoginInfoCard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./accountDetails/display cards/updateLoginInfoCard/updateLoginInfoCard.component */ 592);
/* harmony import */ var _accountDetails_display_cards_updateMailingAddressCard_updateMailingAddressCard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./accountDetails/display cards/updateMailingAddressCard/updateMailingAddressCard.component */ 990);
/* harmony import */ var _accountDetails_display_cards_billingCard_billingCard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./accountDetails/display cards/billingCard/billingCard.component */ 62526);
/* harmony import */ var _updateBillingInformation_paymentMethods_paymentMethods_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./updateBillingInformation/paymentMethods/paymentMethods.component */ 21266);
/* harmony import */ var _updateBillingInformation_removePaymentModal_removePaymentModal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./updateBillingInformation/removePaymentModal/removePaymentModal.component */ 45234);
/* harmony import */ var _updateBillingInformation_rebillOptInModal_rebillOptInModal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./updateBillingInformation/rebillOptInModal/rebillOptInModal.component */ 87626);
/* harmony import */ var _services_webApis_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/webApis.service */ 60629);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/flex-layout */ 45046);
/* harmony import */ var pipes_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! pipes/module */ 20445);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./routing */ 30826);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./constants */ 30129);
/* harmony import */ var _updateFlexpayBillingInformation_updateFlexpayBillingInformation_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./updateFlexpayBillingInformation/updateFlexpayBillingInformation.component */ 87038);
/* harmony import */ var shared_ui_form_entry_phone_number_phone_number_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! shared/ui/form-entry/phone-number/phone-number.module */ 27134);
/* harmony import */ var shared_ui_form_entry_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! shared/ui/form-entry/checkbox/checkbox.module */ 28656);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _common_ui_containers_page_pageCenteredDash_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../common/ui/containers/page/pageCenteredDash.component */ 73512);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_accountBalanceHeader_accountBalanceHeader_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../common/ui/accountBalanceHeader/accountBalanceHeader.component */ 95002);
/* harmony import */ var _common_ui_titleSubTitle_titleSubTitle_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../common/ui/titleSubTitle/titleSubTitle.component */ 25279);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../common/ui/containers/fxRow/fxRow.component */ 47553);
/* harmony import */ var _common_ui_toolTip_toolTip_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../common/ui/toolTip/toolTip.component */ 63087);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../validation/errorCheck.directive */ 35256);
/* harmony import */ var _common_ui_form_entry_showHideInputButton_showHideInputButton_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../common/ui/form-entry/showHideInputButton/showHideInputButton.component */ 27554);
/* harmony import */ var _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../validation/errorMessages/errorMessages.component */ 65316);
/* harmony import */ var _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../validation/errorMessages/errorMessage.component */ 79636);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../common/ui/modals/actionButtons/actionButtons.component */ 65380);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../pipes/safeHtml.pipe */ 49985);





//components






























































const routesWithComponents = _routing__WEBPACK_IMPORTED_MODULE_30__.routes.map(route => {
    const componentDictionary = {
        [_constants__WEBPACK_IMPORTED_MODULE_31__.stateNames.AccountDetails]: _accountDetails_accountDetails_component__WEBPACK_IMPORTED_MODULE_3__.AccountDetailsComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_31__.stateNames.ChangePassword]: _changePassword_changePassword_component__WEBPACK_IMPORTED_MODULE_4__.ChangePasswordComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_31__.stateNames.ChangeUsername]: _changeUsername_changeUsername_component__WEBPACK_IMPORTED_MODULE_5__.ChangeUsernameComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_31__.stateNames.CloseAccountAgreement]: _closeAccountAgreement_closeAccountAgreement_component__WEBPACK_IMPORTED_MODULE_6__.CloseAccountAgreementComponent,
        //[stateNames.CloseAccountCheckInformation]: AddMissingInformationComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_31__.stateNames.CloseAccountFrame]: _closeAccountFrame_frame_component__WEBPACK_IMPORTED_MODULE_7__.CloseAccountFrameComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_31__.stateNames.CloseAccountRefund]: _closeAccountRefund_closeAccountRefund_component__WEBPACK_IMPORTED_MODULE_8__.CloseAccountRefundComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_31__.stateNames.CloseAccountReview]: _closeAccountReview_closeAccountReview_component__WEBPACK_IMPORTED_MODULE_9__.CloseAccountReviewComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_31__.stateNames.UpdateAuthorizedContacts]: _updateAuthorizedContacts_updateAuthorizedContacts_component__WEBPACK_IMPORTED_MODULE_10__.UpdateAuthorizedContactsComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_31__.stateNames.UpdateContactInformation]: _updateContactInformation_updateContactInformation_component__WEBPACK_IMPORTED_MODULE_14__.UpdateContactInformationComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_31__.stateNames.UpdateBillingInformation]: _updateBillingInformation_updateBillingInformation_component__WEBPACK_IMPORTED_MODULE_13__.UpdateBillingInformationComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_31__.stateNames.UpdateFlexpayBillingInformation]: _updateFlexpayBillingInformation_updateFlexpayBillingInformation_component__WEBPACK_IMPORTED_MODULE_32__.UpdateFlexpayBillingInformationComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_31__.stateNames.UpdateMailingAddress]: _updateMailingAddress_updateMailingAddress_component__WEBPACK_IMPORTED_MODULE_15__.UpdateMailingAddressComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_31__.stateNames.UpdateReplenishmentAmount]: _updateReplenishmentAmount_updateReplenishAmount_component__WEBPACK_IMPORTED_MODULE_16__.UpdateReplenishmentAmountComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_31__.stateNames.UpdateSecurityQuestion]: _updateSecurityQuestion_updateSecurityQuestion_component__WEBPACK_IMPORTED_MODULE_17__.UpdateSecurityQuestionComponent,
    };
    return {
        ...route,
        component: componentDictionary[route.name]
    };
});
class ProfileModule {
}
ProfileModule.ɵfac = function ProfileModule_Factory(t) { return new (t || ProfileModule)(); };
ProfileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_49__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_49__["ɵɵdefineInjector"]({ providers: [
        { provide: _constants__WEBPACK_IMPORTED_MODULE_31__.StateNames, useValue: _constants__WEBPACK_IMPORTED_MODULE_31__.stateNames },
        { provide: _constants__WEBPACK_IMPORTED_MODULE_31__.Routes, useValue: _constants__WEBPACK_IMPORTED_MODULE_31__.urlPaths },
        common_services__WEBPACK_IMPORTED_MODULE_2__.BillingDataService,
        common_services__WEBPACK_IMPORTED_MODULE_2__.ManageBillingService,
        _services_webApis_service__WEBPACK_IMPORTED_MODULE_28__.WebApisService
    ], imports: [[
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_50__.UIRouterModule.forChild({ states: routesWithComponents }),
            common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_51__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_52__.FormsModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_53__.MatDividerModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_54__.MatSelectModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_56__.MatIconModule,
            pipes_module__WEBPACK_IMPORTED_MODULE_29__.PipesModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_53__.MatDividerModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_57__.FlexLayoutModule,
            validation_module__WEBPACK_IMPORTED_MODULE_1__.ValidationModule,
            shared_ui_form_entry_phone_number_phone_number_module__WEBPACK_IMPORTED_MODULE_33__.PhoneNumberModule,
            shared_ui_form_entry_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_34__.CheckboxModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_49__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_accountDetails_accountDetails_component__WEBPACK_IMPORTED_MODULE_3__.AccountDetailsComponent,
        _accountDetails_display_cards_authContactsCard_authContactsCard_component__WEBPACK_IMPORTED_MODULE_18__.AuthContactsCardComponent,
        _accountDetails_display_cards_comPreferencesCard_comPreferencesCard_component__WEBPACK_IMPORTED_MODULE_19__.ComPreferencesCardComponent,
        _accountDetails_display_cards_rebillAmtCard_rebillAmtCard_component__WEBPACK_IMPORTED_MODULE_20__.RebillAmtCardComponent,
        _accountDetails_display_cards_updateContactInfoCard_updateContactInfoCard_component__WEBPACK_IMPORTED_MODULE_21__.UpdateContactInfoCardComponent,
        _accountDetails_display_cards_updateLoginInfoCard_updateLoginInfoCard_component__WEBPACK_IMPORTED_MODULE_22__.UpdateLoginInfoCardComponent,
        _accountDetails_display_cards_updateMailingAddressCard_updateMailingAddressCard_component__WEBPACK_IMPORTED_MODULE_23__.UpdateMailingAddressCardComponent,
        _accountDetails_display_cards_billingCard_billingCard_component__WEBPACK_IMPORTED_MODULE_24__.BillingCardComponent,
        _changePassword_changePassword_component__WEBPACK_IMPORTED_MODULE_4__.ChangePasswordComponent,
        _changeUsername_changeUsername_component__WEBPACK_IMPORTED_MODULE_5__.ChangeUsernameComponent,
        _closeAccountAgreement_closeAccountAgreement_component__WEBPACK_IMPORTED_MODULE_6__.CloseAccountAgreementComponent,
        _closeAccountFrame_frame_component__WEBPACK_IMPORTED_MODULE_7__.CloseAccountFrameComponent,
        _closeAccountRefund_closeAccountRefund_component__WEBPACK_IMPORTED_MODULE_8__.CloseAccountRefundComponent,
        _closeAccountReview_closeAccountReview_component__WEBPACK_IMPORTED_MODULE_9__.CloseAccountReviewComponent,
        _updateAuthorizedContacts_updateAuthorizedContacts_component__WEBPACK_IMPORTED_MODULE_10__.UpdateAuthorizedContactsComponent,
        _updateAuthorizedContacts_authContact_component__WEBPACK_IMPORTED_MODULE_11__.AuthContactComponent,
        _updateAuthorizedContacts_authorizedContactModal_authorizedContactModal_component__WEBPACK_IMPORTED_MODULE_12__.AuthorizedContactModalComponent,
        _updateBillingInformation_updateBillingInformation_component__WEBPACK_IMPORTED_MODULE_13__.UpdateBillingInformationComponent,
        _updateFlexpayBillingInformation_updateFlexpayBillingInformation_component__WEBPACK_IMPORTED_MODULE_32__.UpdateFlexpayBillingInformationComponent,
        _updateContactInformation_updateContactInformation_component__WEBPACK_IMPORTED_MODULE_14__.UpdateContactInformationComponent,
        _updateMailingAddress_updateMailingAddress_component__WEBPACK_IMPORTED_MODULE_15__.UpdateMailingAddressComponent,
        _updateReplenishmentAmount_updateReplenishAmount_component__WEBPACK_IMPORTED_MODULE_16__.UpdateReplenishmentAmountComponent,
        _updateSecurityQuestion_updateSecurityQuestion_component__WEBPACK_IMPORTED_MODULE_17__.UpdateSecurityQuestionComponent,
        _updateBillingInformation_paymentMethods_paymentMethods_component__WEBPACK_IMPORTED_MODULE_25__.PaymentMethodsComponent,
        _updateBillingInformation_removePaymentModal_removePaymentModal_component__WEBPACK_IMPORTED_MODULE_26__.RemovePaymentModalComponent,
        _updateBillingInformation_rebillOptInModal_rebillOptInModal_component__WEBPACK_IMPORTED_MODULE_27__.RebillOptInModalComponent], imports: [_uirouter_angular__WEBPACK_IMPORTED_MODULE_50__.UIRouterModule, common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_51__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_52__.FormsModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_53__.MatDividerModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_54__.MatSelectModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_56__.MatIconModule,
        pipes_module__WEBPACK_IMPORTED_MODULE_29__.PipesModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_53__.MatDividerModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_57__.FlexLayoutModule,
        validation_module__WEBPACK_IMPORTED_MODULE_1__.ValidationModule,
        shared_ui_form_entry_phone_number_phone_number_module__WEBPACK_IMPORTED_MODULE_33__.PhoneNumberModule,
        shared_ui_form_entry_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_34__.CheckboxModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_49__["ɵɵsetComponentScope"](_accountDetails_accountDetails_component__WEBPACK_IMPORTED_MODULE_3__.AccountDetailsComponent, [_common_ui_containers_page_pageCenteredDash_component__WEBPACK_IMPORTED_MODULE_35__.PageCenteredDashContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_58__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_58__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_59__.DefaultClassDirective, _common_ui_accountBalanceHeader_accountBalanceHeader_component__WEBPACK_IMPORTED_MODULE_36__.AccountBalanceHeaderComponent, _common_ui_titleSubTitle_titleSubTitle_component__WEBPACK_IMPORTED_MODULE_37__.TitleSubTitleComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_58__.DefaultLayoutGapDirective, _angular_common__WEBPACK_IMPORTED_MODULE_51__.NgIf, _accountDetails_display_cards_updateContactInfoCard_updateContactInfoCard_component__WEBPACK_IMPORTED_MODULE_21__.UpdateContactInfoCardComponent,
    _accountDetails_display_cards_updateMailingAddressCard_updateMailingAddressCard_component__WEBPACK_IMPORTED_MODULE_23__.UpdateMailingAddressCardComponent,
    _accountDetails_display_cards_authContactsCard_authContactsCard_component__WEBPACK_IMPORTED_MODULE_18__.AuthContactsCardComponent,
    _accountDetails_display_cards_updateLoginInfoCard_updateLoginInfoCard_component__WEBPACK_IMPORTED_MODULE_22__.UpdateLoginInfoCardComponent,
    _accountDetails_display_cards_billingCard_billingCard_component__WEBPACK_IMPORTED_MODULE_24__.BillingCardComponent,
    _accountDetails_display_cards_rebillAmtCard_rebillAmtCard_component__WEBPACK_IMPORTED_MODULE_20__.RebillAmtCardComponent,
    _accountDetails_display_cards_comPreferencesCard_comPreferencesCard_component__WEBPACK_IMPORTED_MODULE_19__.ComPreferencesCardComponent], [_angular_common__WEBPACK_IMPORTED_MODULE_51__.AsyncPipe]);
_angular_core__WEBPACK_IMPORTED_MODULE_49__["ɵɵsetComponentScope"](_updateAuthorizedContacts_updateAuthorizedContacts_component__WEBPACK_IMPORTED_MODULE_10__.UpdateAuthorizedContactsComponent, [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_38__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_52__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_52__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.NgForm, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_58__.DefaultLayoutDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_39__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_53__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_51__.NgIf, _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_40__.FxRowComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_58__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_58__.DefaultLayoutAlignDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__.MatLabel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_58__.DefaultFlexOffsetDirective, _common_ui_toolTip_toolTip_component__WEBPACK_IMPORTED_MODULE_41__.ToolTipComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_56__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_51__.NgForOf, _updateAuthorizedContacts_authContact_component__WEBPACK_IMPORTED_MODULE_11__.AuthContactComponent, _angular_common__WEBPACK_IMPORTED_MODULE_51__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_59__.DefaultClassDirective, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_42__.ErrorCheckDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.NgModel, _common_ui_form_entry_showHideInputButton_showHideInputButton_component__WEBPACK_IMPORTED_MODULE_43__.ShowHideInputButtonComponent, _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_44__.ErrorMessagesComponent, _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_45__.ErrorMessageComponent, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_46__.ActionButtonsComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_47__.WizardComponent], [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_48__.SafeHtmlPipe]);
_angular_core__WEBPACK_IMPORTED_MODULE_49__["ɵɵsetComponentScope"](_updateBillingInformation_updateBillingInformation_component__WEBPACK_IMPORTED_MODULE_13__.UpdateBillingInformationComponent, [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_38__.PageCenteredContainerComponent, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_39__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_53__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_58__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_58__.DefaultLayoutAlignDirective, _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_40__.FxRowComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__.MatLabel, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_59__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_51__.NgForOf, _updateBillingInformation_paymentMethods_paymentMethods_component__WEBPACK_IMPORTED_MODULE_25__.PaymentMethodsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_51__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_58__.DefaultFlexDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_56__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_58__.DefaultFlexOffsetDirective, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_46__.ActionButtonsComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_47__.WizardComponent], [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_48__.SafeHtmlPipe]);


/***/ }),

/***/ 5402:
/*!***********************************************************************!*\
  !*** ./src/profile/updateAuthorizedContacts/authContact.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthContactComponent": () => (/* binding */ AuthContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/ui/containers/row/row.component */ 80001);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_toolTip_toolTip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/ui/toolTip/toolTip.component */ 63087);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);








const _c0 = function () { return { "left": "-80px" }; };
function AuthContactComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 7)(1, "tool-tip", 8)(2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Missing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.cmsContent.LongDescription, " ");
} }
function AuthContactComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.contactInfo.accessCode);
} }
class AuthContactComponent {
    constructor() {
        this.removeContact = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.editContact = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    toggleRemoveContact() {
        this.removeContact.emit();
    }
    openAuthContact() {
        this.editContact.emit();
    }
}
AuthContactComponent.ɵfac = function AuthContactComponent_Factory(t) { return new (t || AuthContactComponent)(); };
AuthContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AuthContactComponent, selectors: [["auth-contact"]], inputs: { contactInfo: "contactInfo", cmsContent: "cmsContent" }, outputs: { removeContact: "removeContact", editContact: "editContact" }, decls: 12, vars: 11, consts: [["col-start", "", "fxFlex", "grow", "fxLayout", "row", "fxLayoutAlign", "start center"], [1, "clickable", "contact-name", 3, "click"], [1, "fx-flex-none", "glyphicon", "glyphicon-chevron-right"], ["col-end", "", "fxLayout", "row", "fxLayoutAlign", "end center"], ["style", "padding-left:8px;", 4, "ngIf", "ngIfElse"], ["withAccessCode", ""], ["fxFlexOffset", "16px", 1, "clickable", 3, "svgIcon", "click"], [2, "padding-left", "8px"], [1, "toolTip"], ["tool-tip-hover", ""], ["svgIcon", "alert", 1, "emptyAccessCode"], ["fxFlexOffset", "6px", 1, "emptyAccessCode"], ["tool-tip-message", "", "ngClass", "hover-box-adjustment", 3, "ngStyle"]], template: function AuthContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "row-container")(1, "section", 0)(2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthContactComponent_Template_p_click_2_listener() { return ctx.openAuthContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AuthContactComponent_span_8_Template, 8, 3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AuthContactComponent_ng_template_9_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthContactComponent_Template_mat_icon_click_11_listener() { return ctx.toggleRemoveContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("remove", ctx.contactInfo.remove);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 7, ctx.contactInfo.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 9, ctx.contactInfo.lastName), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contactInfo.accessCode === null)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", ctx.contactInfo.remove ? "undo-icon" : "trash-icon");
    } }, directives: [_common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_0__.RowContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _common_ui_toolTip_toolTip_component__WEBPACK_IMPORTED_MODULE_1__.ToolTipComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexOffsetDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultStyleDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe], styles: ["[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n[_nghost-%COMP%]   .remove[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #c4c4c4;\n}\n[_nghost-%COMP%]   .contact-name[_ngcontent-%COMP%] {\n  color: #007aff;\n  word-break: break-all;\n}\n[_nghost-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\n  color: #007aff;\n}\n[_nghost-%COMP%]   .emptyAccessCode[_ngcontent-%COMP%] {\n  color: #fc2125;\n}\n[_nghost-%COMP%]   .hover-box-adjustment[_ngcontent-%COMP%] {\n  padding: 15px;\n  font-size: 11px;\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhDb250YWN0Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFUSxxQkFBQTtBQUZSO0FBQUE7RUFPWSxjQUFBO0FBSlo7QUFIQTtFQVlRLGNBQUE7RUFDQSxxQkFBQTtBQU5SO0FBUEE7RUFpQlEsY0FBQTtBQVBSO0FBVkE7RUFxQlEsY0FBQTtBQVJSO0FBYkE7RUF5QlEsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBVFIiLCJmaWxlIjoiYXV0aENvbnRhY3QubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBwIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC5yZW1vdmUge1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiBAc2lsdmVyLWdyYXk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGFjdC1uYW1lIHtcbiAgICAgICAgY29sb3I6IEBhenVyZS1yYWRpYW5jZS1ibHVlO1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgfVxuXG4gICAgLmdseXBoaWNvbiB7XG4gICAgICAgIGNvbG9yOiBAYXp1cmUtcmFkaWFuY2UtYmx1ZTtcbiAgICB9XG5cbiAgICAuZW1wdHlBY2Nlc3NDb2RlIHtcbiAgICAgICAgY29sb3I6IEB0b3JjaC1yZWQ7XG4gICAgfVxuXG4gICAgLmhvdmVyLWJveC1hZGp1c3RtZW50IHtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 86376:
/*!*********************************************************************************************************!*\
  !*** ./src/profile/updateAuthorizedContacts/authorizedContactModal/authorizedContactModal.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizedContactModalComponent": () => (/* binding */ AuthorizedContactModalComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7370);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../validation/errorMessages/errorMessages.component */ 65316);
/* harmony import */ var _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../validation/errorMessages/errorMessage.component */ 79636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_toolTip_toolTip_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/ui/toolTip/toolTip.component */ 63087);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/ui/modals/actionButtons/actionButtons.component */ 65380);

















function AuthorizedContactModalComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "This contact already exists");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
class AuthorizedContactModalComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.data = {};
    }
    close() {
        this.dialogRef.close();
    }
    submit(form) {
        if (!form.valid) {
            this.duplicate = false;
            return;
        }
        else if (this.contactsSame(this.originalContact)) {
            this.duplicate = false;
            this.dialogRef.close(this.data);
        }
        else {
            this.duplicate = this.data.currentContacts.authorizedContacts.some(this.contactsSame.bind(this));
            if (!this.duplicate) {
                this.dialogRef.close(this.data);
            }
        }
    }
    ngOnInit() {
        this.data = { ...this.dialogRef.data };
        this.duplicate = false;
        this.originalContact = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.clone)(this.data.contactInfo);
    }
    contactsSame(contact) {
        var _a, _b, _c, _d, _e, _f;
        return contact.firstName ===
            ((_c = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.contactInfo) === null || _b === void 0 ? void 0 : _b.firstName) === null || _c === void 0 ? void 0 : _c.toUpperCase())
            && contact.lastName ===
                ((_f = (_e = (_d = this.data) === null || _d === void 0 ? void 0 : _d.contactInfo) === null || _e === void 0 ? void 0 : _e.lastName) === null || _f === void 0 ? void 0 : _f.toUpperCase());
    }
}
AuthorizedContactModalComponent.ɵfac = function AuthorizedContactModalComponent_Factory(t) { return new (t || AuthorizedContactModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_1__.DialogRef)); };
AuthorizedContactModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: AuthorizedContactModalComponent, selectors: [["authorized-contact-modal"]], decls: 58, vars: 12, consts: [["validation-focus", "", "fxLayout", "column", 1, "u-spacing--widthFill"], ["AuthContactForm", "ngForm"], [1, "u-spacing__divider--marginTopBottom"], ["fxLayout", "row", "fxLayout.lt-md", "row wrap", "fxLayoutAlign", "space-between start"], ["fxFlex", "37", "fxFlex.lt-md", "grow", 3, "error-check"], ["name", "firstName", "type", "text", "maxlength", "30", "pattern", "^[a-zA-Z\\-\\'\\.,\\s]*$", "required", "", 3, "ngModel", "ngModelChange"], ["FirstNameInput", "ngModel"], [3, "errors"], ["rule", "required"], ["rule", "maxlength"], ["rule", "pattern"], ["id", "duplicate-error-message", 4, "ngIf"], ["name", "lastName", "type", "text", "maxlength", "30", "pattern", "^[a-zA-Z\\-\\'\\.,\\s]*$", "required", "", 3, "ngModel", "ngModelChange"], ["LastNameInput", "ngModel"], ["fxFlex", "22", "fxFlex.lt-md", "grow", 3, "error-check"], [1, "accesCode"], ["tool-tip-hover", ""], ["svgIcon", "information"], ["tool-tip-message", "", 1, "hover-box-adjustment"], ["name", "accessCode", "type", "text", "maxlength", "12", "minlength", "6", "pattern", "^[a-zA-Z0-9]+$", "required", "", 3, "ngModel", "ngModelChange"], ["AccessCodeInput", "ngModel"], ["rule", "minlength"], [1, "u-spacing__buttonToField--marginTop"], [3, "main", "alt"], ["action-main", ""], ["action-alt", ""], ["id", "duplicate-error-message"]], template: function AuthorizedContactModalComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "page-centered-container")(1, "form", 0, 1)(3, "card-container")(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "mat-divider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "section", 3)(8, "section", 4)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "FIRST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AuthorizedContactModalComponent_Template_input_ngModelChange_11_listener($event) { return ctx.data.contactInfo.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "error-messages", 7)(14, "error-message", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Please enter a valid name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "error-message", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Please enter a valid name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "error-message", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Please enter a valid name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, AuthorizedContactModalComponent_span_20_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "section", 4)(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "LAST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AuthorizedContactModalComponent_Template_input_ngModelChange_24_listener($event) { return ctx.data.contactInfo.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "error-messages", 7)(27, "error-message", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Please enter a valid name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "error-message", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "Please enter a valid name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "error-message", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "Please enter a valid name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "section", 14)(34, "mat-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "ACCESS CODE");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "tool-tip")(37, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](38, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AuthorizedContactModalComponent_Template_input_ngModelChange_41_listener($event) { return ctx.data.contactInfo.accessCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "error-messages", 7)(44, "error-message", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "Please enter a value");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "error-message", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Must be no more than 12 characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "error-message", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "Must be at least 6 characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "error-message", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "Characters must be alphanumeric");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "section", 22)(53, "action-buttons", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("main", function AuthorizedContactModalComponent_Template_action_buttons_main_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](2); return ctx.submit(_r0); })("alt", function AuthorizedContactModalComponent_Template_action_buttons_alt_53_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](12);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](25);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.data.cmsContent.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("error-check", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.data.contactInfo.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("errors", _r1.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.duplicate);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("error-check", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.data.contactInfo.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("errors", _r3.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("error-check", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.data.cmsContent.TOOL_TIP_INFO, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.data.contactInfo.accessCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("errors", _r4.errors);
    } }, directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_2__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_3__.FocusDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_4__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexDirective, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_5__.ErrorCheckDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_6__.ErrorMessagesComponent, _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_7__.ErrorMessageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _common_ui_toolTip_toolTip_component__WEBPACK_IMPORTED_MODULE_8__.ToolTipComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MinLengthValidator, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_9__.ActionButtonsComponent], styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   #duplicate-error-message[_ngcontent-%COMP%] {\n  color: #fc2125;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  margin-top: 6px;\n}\n[_nghost-%COMP%]   .hover-box-adjustment[_ngcontent-%COMP%] {\n  padding: 15px;\n  font-size: 12px;\n  line-height: 1.5;\n  bottom: 2em;\n  width: 270px;\n}\n[_nghost-%COMP%]   .accesCode[_ngcontent-%COMP%] {\n  padding-right: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml6ZWRDb250YWN0TW9kYWwubGVzcyIsIi4uXFwuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xcZXJyb3IubGVzcyIsIi4uXFwuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xcZm9udHMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVRLFdBQUE7QUFGUjtBQUFBO0VDUUksY0FBQTtFQ0ZBLHlCQUFBO0VGRUksZUFBQTtFQUNBLGVBQUE7QUFIUjtBQU5BO0VBYVEsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSlI7QUFiQTtFQXFCUSxvQkFBQTtBQUxSIiwiZmlsZSI6ImF1dGhvcml6ZWRDb250YWN0TW9kYWwubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG5cbiAgICAjZHVwbGljYXRlLWVycm9yLW1lc3NhZ2Uge1xuICAgICAgICAudC1lcnJvci0tY29sb3IoQHRoZW1lLWxpZ2h0KTtcbiAgICAgICAgLnQtYm9keS0tZm9udEZhbWlseSgpO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICB9XG5cbiAgICAuaG92ZXItYm94LWFkanVzdG1lbnQge1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGJvdHRvbTogMmVtO1xuICAgICAgICB3aWR0aDogMjcwcHg7XG4gICAgfVxuXG4gICAgLmFjY2VzQ29kZSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG5AZXJyb3ItLWNvbG9yLWxpZ2h0OiBAdG9yY2gtcmVkO1xuQHdhcm5pbmctLWNvbG9yLWxpZ2h0OiBAcGl6YXp6LWdvbGQ7XG5Ac3VjY2Vzcy0tY29sb3ItbGlnaHQ6IEBjYWx5cHNvLWJsdWU7XG5cblxuLnQtZXJyb3ItLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2Vycm9yLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWVycm9yLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdlcnJvci0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtZXJyb3ItLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdlcnJvci0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXdhcm5pbmctLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICd3YXJuaW5nLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtc3VjY2Vzcy0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3N1Y2Nlc3MtLWNvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbi50LWhlYWRlci0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtam9zdDtcbn1cblxuLnQtYm9keS0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 30055:
/*!************************************************************************************!*\
  !*** ./src/profile/updateAuthorizedContacts/updateAuthorizedContacts.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateAuthorizedContactsComponent": () => (/* binding */ UpdateAuthorizedContactsComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var profile_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! profile/constants */ 30129);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var _authorizedContactModal_authorizedContactModal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authorizedContactModal/authorizedContactModal.component */ 86376);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ 7370);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var profile_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! profile/services */ 8769);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../storefront/services/storefrontUtility.service */ 18011);











function UpdateAuthorizedContactsComponent_fx_row_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fx-row", 12)(1, "section", 13)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "section", 14)(5, "tool-tip")(6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "ACCESS CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isLabel", true)("backgroundColorClass", "transparent-background");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.cmsContent.TOOL_TIP_INFO, " ");
  }
}

function UpdateAuthorizedContactsComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 19)(1, "auth-contact", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("removeContact", function UpdateAuthorizedContactsComponent_section_10_Template_auth_contact_removeContact_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const i_r8 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r9.toggleRemove(i_r8);
    })("editContact", function UpdateAuthorizedContactsComponent_section_10_Template_auth_contact_editContact_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const i_r8 = restoredCtx.index;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r11.openAuthContactEdit(i_r8);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const contact_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("contactInfo", contact_r7)("cmsContent", ctx_r2.cmsContent.Children[1]);
  }
}

const _c0 = function (a0) {
  return {
    disabled: a0
  };
};

function UpdateAuthorizedContactsComponent_section_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateAuthorizedContactsComponent_section_11_Template_section_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r12.openAuthContactAdd();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c0, ctx_r3.hasEmptyAccesCode));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r3.cmsContent.ADD_BUTTON);
  }
}

function UpdateAuthorizedContactsComponent_section_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r4.cmsContent.MAX_LIMIT);
  }
}

function UpdateAuthorizedContactsComponent_card_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "card-container", 27)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "section", 28)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "CURRENT PASSWORD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpdateAuthorizedContactsComponent_card_container_13_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r15.authorizedContactDetails.currentPassword = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "show-hide-input-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("showFieldChange", function UpdateAuthorizedContactsComponent_card_container_13_Template_show_hide_input_button_showFieldChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r17.isShowPassword = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "error-messages", 32)(10, "error-message", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Please enter your password");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);

    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r5.cmsContent.PASSWORD_INFO);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("error-check", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r5.authorizedContactDetails.currentPassword)("type", ctx_r5.isShowPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("showField", ctx_r5.isShowPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("errors", _r14.errors)("activeBeforeSubmit", _r14.touched);
  }
}

function UpdateAuthorizedContactsComponent_section_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 34)(1, "action-buttons", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("main", function UpdateAuthorizedContactsComponent_section_14_Template_action_buttons_main_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);

      const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);

      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);

      return ctx_r19.submit(_r0, _r18);
    })("alt", function UpdateAuthorizedContactsComponent_section_14_Template_action_buttons_alt_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);

      const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);

      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r21.cancel(_r18);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "wizard-ui", null, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r6.saveButtonText);
  }
}

class UpdateAuthorizedContactsComponent {
  constructor(uiRouterGlobals, webApis, stateService, dialogService, storefrontUtilityService, responseErrorService) {
    this.uiRouterGlobals = uiRouterGlobals;
    this.webApis = webApis;
    this.stateService = stateService;
    this.dialogService = dialogService;
    this.storefrontUtilityService = storefrontUtilityService;
    this.responseErrorService = responseErrorService;
    this.tentativeAuthorizedContacts = [];
    this.isShowPassword = false;
    this.saveButtonText = 'SAVE';
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b;

      _this.cmsContent.MAIN_INFO = _this.cmsContent.ShortDescription;
      _this.cmsContent.TOOL_TIP_INFO = _this.cmsContent.LongDescription;
      _this.authorizedContactDetails = {
        authorizedContacts: [],
        currentPassword: null
      };
      _this.authContactLimit = (_a = _this.uiRouterGlobals.params) === null || _a === void 0 ? void 0 : _a.authContactLimit;
      _this.authorizedContactDetails.authorizedContacts = (_b = _this.uiRouterGlobals.params) === null || _b === void 0 ? void 0 : _b.authContacts;

      if (_this.authContactLimit === null || _this.authorizedContactDetails.authorizedContacts === null) {
        yield _this.getAuthContactsFromApi();
      }

      _this.tentativeAuthorizedContacts = _this.authorizedContactDetails.authorizedContacts.map(contact => ({
        remove: false,
        ...contact
      }));
      _this.isKiosk = _this.storefrontUtilityService.isRunningAsKiosk && !_this.storefrontUtilityService.webStoreData.fullSiteMode;

      if (_this.isKiosk) {
        _this.saveButtonText = 'PROCEED';
      }

      _this.hasEmptyAccesCode = _this.checkEmptyAccessCodeInList();

      if (_this.hasEmptyAccesCode) {
        _this.responseErrorService.displayToast(_this.cmsContent.Children[1].ShortDescription, 'Error', false);
      }
    })();
  }

  getAuthContactsFromApi() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _this2.webApis.getAuthContacts();
      _this2.authContactLimit = res.authContactLimit;
      _this2.authorizedContactDetails.authorizedContacts = res.authorizedContactList;
    })();
  }

  cancel(wizardUi) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.isKiosk && wizardUi) {
        yield wizardUi.gotoCancelState();
        return;
      }

      _this3.stateService.go(profile_constants__WEBPACK_IMPORTED_MODULE_1__.stateNames.AccountDetails);
    })();
  }

  submit(form, wizardUi) {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!form.valid) {
        return;
      }

      if (_this4.isKiosk && _this4.tentativeIsSameAsOriginal()) {
        yield wizardUi.gotoNextState();
        return;
      }

      const request = {
        authorizedContacts: _this4.getRemovedContactArray(),
        currentPassword: _this4.authorizedContactDetails.currentPassword
      };

      try {
        yield _this4.webApis.setAuthContacts(request);
        const modalCms = _this4.cmsContent.Children[0];
        const data = {
          cmsContent: {
            Title: modalCms.LongDescription,
            AcceptBtn: 'OKAY',
            PrimaryContent: modalCms.ShortDescription
          }
        };
        yield _this4.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_2__.GenericCmsModalComponent, data);

        if (_this4.isKiosk && wizardUi) {
          yield wizardUi.gotoNextState();
          return;
        }

        return _this4.stateService.go(profile_constants__WEBPACK_IMPORTED_MODULE_1__.stateNames.AccountDetails);
      } catch (e) {}
    })();
  }

  toggleRemove(index) {
    const contact = this.tentativeAuthorizedContacts[index];
    contact.remove = !contact.remove;
  }

  openAuthContactEdit(index) {
    var _this5 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //send in authorizedContactDetails
      const contact = _this5.tentativeAuthorizedContacts[index];
      const data = {
        cmsContent: {
          header: _this5.cmsContent.MODAL_HEADER,
          TOOL_TIP_INFO: _this5.cmsContent.TOOL_TIP_INFO
        },
        contactInfo: {
          firstName: contact.firstName,
          lastName: contact.lastName,
          accessCode: contact.accessCode,
          contactId: contact.contactId,
          remove: contact.remove
        },
        currentContacts: _this5.authorizedContactDetails
      };
      const response = yield _this5.dialogService.openSliderCentered(_authorizedContactModal_authorizedContactModal_component__WEBPACK_IMPORTED_MODULE_3__.AuthorizedContactModalComponent, data, {
        title: _this5.cmsContent.EDIT_CONTACT_TITLE
      });

      if (response) {
        Object.assign(contact, response.contactInfo);
      }
    })();
  }

  openAuthContactAdd() {
    var _this6 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //send in authorizedContactDetails
      const data = {
        cmsContent: {
          header: _this6.cmsContent.MODAL_HEADER,
          TOOL_TIP_INFO: _this6.cmsContent.TOOL_TIP_INFO
        },
        contactInfo: {
          firstName: '',
          lastName: '',
          accessCode: '',
          contactId: '',
          remove: false
        },
        currentContacts: _this6.authorizedContactDetails
      };
      const response = yield _this6.dialogService.openSliderCentered(_authorizedContactModal_authorizedContactModal_component__WEBPACK_IMPORTED_MODULE_3__.AuthorizedContactModalComponent, data, {
        title: _this6.cmsContent.ADD_CONTACT_TITLE
      });

      if (response) {
        _this6.tentativeAuthorizedContacts.push(response.contactInfo);
      }
    })();
  }

  tentativeIsSameAsOriginal() {
    if (!this.tentativeAuthorizedContacts || !this.authorizedContactDetails) {
      return false;
    }

    return (0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEqual)(this.getRemovedContactArray(), this.authorizedContactDetails.authorizedContacts);
  }

  getRemovedContactArray() {
    return this.tentativeAuthorizedContacts.filter(x => !x.remove).map(({
      remove,
      ...keep
    }) => keep);
  }

  checkEmptyAccessCodeInList() {
    const request = this.tentativeAuthorizedContacts;
    const val = request.filter(x => x.accessCode === null);

    if (val.length > 0) {
      return true;
    } else {
      return false;
    }
  }

}

UpdateAuthorizedContactsComponent.ɵfac = function UpdateAuthorizedContactsComponent_Factory(t) {
  return new (t || UpdateAuthorizedContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_9__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](profile_services__WEBPACK_IMPORTED_MODULE_5__.WebApisService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_9__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_7__.StorefrontUtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.ResponseErrorService));
};

UpdateAuthorizedContactsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: UpdateAuthorizedContactsComponent,
  selectors: [["update-authorized-contacts"]],
  inputs: {
    cmsContent: "cmsContent"
  },
  decls: 15,
  vars: 10,
  consts: [["hasAlternateBackgroundColor", "true", 1, "refresh-2020"], ["fxLayout", "column", 1, "u-spacing--widthFill"], ["AuthPasswordForm", "ngForm"], [1, "u-spacing__fieldToSection--marginTop"], [1, "u-spacing__divider--marginTopBottom"], [3, "innerHtml"], ["class", "u-spacing__sectionToSection--marginTop", 3, "isLabel", "backgroundColorClass", 4, "ngIf"], ["class", "contact", 4, "ngFor", "ngForOf"], ["class", "u-spacing__fieldToSection--marginTop", "fxLayout", "row", "fxLayoutAlign", "center center", 3, "ngClass", "click", 4, "ngIf"], ["class", "u-spacing__fieldToSection--marginTop", "fxLayout", "row", "fxLayoutAlign", "center baseline", 4, "ngIf"], ["class", "u-spacing__cardToCard--marginTop", 4, "ngIf"], ["class", "u-spacing__buttonToField--marginTop", 4, "ngIf"], [1, "u-spacing__sectionToSection--marginTop", 3, "isLabel", "backgroundColorClass"], ["col-start", "", "fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "start end"], ["col-end", "", "fxFlexOffset", "40px", "fxLayout", "row", "fxLayoutAlign", "start end"], ["tool-tip-hover", ""], ["svgIcon", "information"], ["tool-tip-message", "", 1, "hover-box-adjustment"], ["fxFlexOffset", "5px"], [1, "contact"], ["translation-skip", "", 3, "contactInfo", "cmsContent", "removeContact", "editContact"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "u-spacing__fieldToSection--marginTop", 3, "ngClass", "click"], ["svgIcon", "add-icon"], ["fxFlexOffset", "6px", 1, "add-text"], ["fxLayout", "row", "fxLayoutAlign", "center baseline", 1, "u-spacing__fieldToSection--marginTop"], ["svgIcon", "alert", 1, "alert-icon"], ["fxFlexOffset", "6px"], [1, "u-spacing__cardToCard--marginTop"], [3, "error-check"], ["type", "text", "name", "currentPassword", "required", "", 3, "ngModel", "type", "ngModelChange"], ["CurrentPasswordInput", "ngModel"], [3, "showField", "showFieldChange"], [3, "errors", "activeBeforeSubmit"], ["rule", "required"], [1, "u-spacing__buttonToField--marginTop"], [3, "main", "alt"], ["action-main", ""], ["action-alt", ""], ["wizardUi", ""]],
  template: function UpdateAuthorizedContactsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "form", 1, 2)(3, "card-container", 3)(4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "mat-divider", 4)(7, "article", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, UpdateAuthorizedContactsComponent_fx_row_9_Template, 12, 3, "fx-row", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, UpdateAuthorizedContactsComponent_section_10_Template, 2, 2, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, UpdateAuthorizedContactsComponent_section_11_Template, 4, 4, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, UpdateAuthorizedContactsComponent_section_12_Template, 4, 1, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, UpdateAuthorizedContactsComponent_card_container_13_Template, 12, 7, "card-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, UpdateAuthorizedContactsComponent_section_14_Template, 8, 1, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.cmsContent.MAIN_HEADER);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 8, ctx.cmsContent.MAIN_INFO), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.tentativeAuthorizedContacts.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.tentativeAuthorizedContacts);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.tentativeAuthorizedContacts.length < ctx.authContactLimit);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.tentativeAuthorizedContacts.length >= ctx.authContactLimit);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.tentativeIsSameAsOriginal());
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.tentativeIsSameAsOriginal() || ctx.isKiosk);
    }
  },
  styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n[_nghost-%COMP%]   .add-text[_ngcontent-%COMP%] {\n  color: #007aff;\n}\n[_nghost-%COMP%]   .hover-box-adjustment[_ngcontent-%COMP%] {\n  padding: 15px;\n  font-size: 12px;\n  line-height: 1.5;\n  bottom: 2em;\n  left: -18em;\n  width: 270px;\n}\n[_nghost-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  color: #ff9200;\n}\n[_nghost-%COMP%]   action-buttons[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}\n[_nghost-%COMP%]   action-buttons[_ngcontent-%COMP%]   [action-main][_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   action-buttons[_ngcontent-%COMP%]   [action-alt][_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n[_nghost-%COMP%]   .disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZUF1dGhvcml6ZWRDb250YWN0cy5sZXNzIiwiLi5cXC4uXFxzdHlsZXNcXGN1c3RvbVxcc3BhY2luZ1xcc2VjdGlvbnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUVRLFdBQUE7QUFMUjtBQUdBO0VBTVEsbUJBQUE7QUFOUjtBQUFBO0VBVVEsY0FBQTtBQVBSO0FBSEE7RUFjUSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUlI7QUFYQTtFQXVCUSxjQUFBO0FBVFI7QUFkQTtFQTJCUSxjQUFBO0VDYkEsZ0JBQUE7QURJUjtBQWxCQTtFQStCWSx5QkFBQTtBQVZaO0FBckJBO0VBbUNZLDBCQUFBO0FBWFo7QUF4QkE7RUF3Q1EsbUJBQUE7RUFDQSxZQUFBO0FBYlIiLCJmaWxlIjoidXBkYXRlQXV0aG9yaXplZENvbnRhY3RzLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL3NlY3Rpb25zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL2RpdmlkZXJzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcblxuOmhvc3Qge1xuICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xuICAgIH1cblxuICAgIC5jb250YWN0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAuYWRkLXRleHQge1xuICAgICAgICBjb2xvcjogQGF6dXJlLXJhZGlhbmNlLWJsdWU7XG4gICAgfVxuXG4gICAgLmhvdmVyLWJveC1hZGp1c3RtZW50IHtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBib3R0b206IDJlbTtcbiAgICAgICAgbGVmdDogLTE4ZW07XG4gICAgICAgIHdpZHRoOiAyNzBweDtcbiAgICB9XG5cbiAgICAuYWxlcnQtaWNvbiB7XG4gICAgICAgIGNvbG9yOiBAcGl6YXp6LWdvbGQ7XG4gICAgfVxuXG4gICAgYWN0aW9uLWJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wKCk7XG5cbiAgICAgICAgW2FjdGlvbi1tYWluXSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgW2FjdGlvbi1hbHRdIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRpc2FibGVkIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbn1cbiIsIi5yZWZyZXNoLTIwMjAge1xuICAgIC8vIERlc2t0b3BcbiAgICAudS1zcGFjaW5nX19maWVsZFRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19oZWFkZXJUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Cb3R0b20ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcEhhbGYge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2J1dHRvblRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmlyc3RIZWFkZXJUb1RpdGxlLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fYWRkcmVzc1RvUGF5bWVudERpc3BsYXktLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuICAgIC8vIE1vYmlsZVxuICAgICYubHQtbWQsXG4gICAgLmx0LW1kIHtcbiAgICAgICAgLnUtc3BhY2luZ19fY2FyZFRvQ2FyZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 21266:
/*!*****************************************************************************************!*\
  !*** ./src/profile/updateBillingInformation/paymentMethods/paymentMethods.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentMethodsComponent": () => (/* binding */ PaymentMethodsComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/animations */ 2225);
/* harmony import */ var animations_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animations/collapse */ 16573);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var common_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/utilities */ 56516);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ 7370);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var common_ui_modals_billingModal_billingModal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/ui/modals/billingModal/billingModal.component */ 37882);
/* harmony import */ var profile_updateBillingInformation_removePaymentModal_removePaymentModal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! profile/updateBillingInformation/removePaymentModal/removePaymentModal.component */ 45234);
/* harmony import */ var profile_updateBillingInformation_updateBillingInformation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! profile/updateBillingInformation/updateBillingInformation.component */ 15047);
/* harmony import */ var cms_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cms/services */ 46693);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var profile_services_webApis_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! profile/services/webApis.service */ 60629);
/* harmony import */ var common_billing_billingInfoUtilities_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/billing/billingInfoUtilities.service */ 25636);
/* harmony import */ var authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! authentication/authenticationService/authentication.service */ 44722);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/ui/containers/fxRow/fxRow.component */ 47553);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _common_ui_toolTip_toolTip_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/ui/toolTip/toolTip.component */ 63087);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/ui/display/address/addressDisplay.component */ 23204);
/* harmony import */ var _pipes_cardType_cardType_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../pipes/cardType/cardType.pipe */ 3036);
/* harmony import */ var _pipes_paymentMasking_creditCardMask_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../pipes/paymentMasking/creditCardMask.pipe */ 83955);
/* harmony import */ var _pipes_paymentMasking_bankAccountMask_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../pipes/paymentMasking/bankAccountMask.pipe */ 10686);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../pipes/safeHtml.pipe */ 49985);































function PaymentMethodsComponent_div_6_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "img", 30);
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("src", ctx_r13.cmsImage, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
  }
}

function PaymentMethodsComponent_div_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}

function PaymentMethodsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "div", 21)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, PaymentMethodsComponent_div_6_img_5_Template, 1, 1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, PaymentMethodsComponent_div_6_div_7_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div", 27)(9, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](11, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](12, "cardType");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](17, "maskCreditCard");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@rotatedState", ctx_r0.animationState);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r0.cmsImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r0.paymentMethod.credit.primary);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](11, 5, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](12, 7, ctx_r0.paymentMethod.credit.cardCode)), "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](17, 9, ctx_r0.paymentMethod.credit.cardNbr, ctx_r0.paymentMethod.credit.cardCode), "\u00A0");
  }
}

function PaymentMethodsComponent_div_7_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "img", 30);
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("src", ctx_r15.cmsImage, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
  }
}

function PaymentMethodsComponent_div_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}

function PaymentMethodsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "div", 21)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, PaymentMethodsComponent_div_7_img_5_Template, 1, 1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, PaymentMethodsComponent_div_7_div_7_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div")(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "Bank Account\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](15, "maskBankAccount");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@rotatedState", ctx_r1.animationState);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.cmsImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.paymentMethod.eft.primary);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](15, 4, ctx_r1.paymentMethod.eft.accountNumber), "\u00A0");
  }
}

const _c0 = function (a0, a1) {
  return {
    "padding-top": a0,
    "width": a1
  };
};

function PaymentMethodsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 33)(1, "span", 34)(2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](3, _c0, ctx_r2.isPrimary ? "22px" : "0px", ctx_r2.isBlocked ? "160px" : "185px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"]("", ctx_r2.paymentMethod.credit.expMonth, " / ", ctx_r2.paymentMethod.credit.expYear, "");
  }
}

const _c1 = function (a0) {
  return {
    "padding-top": a0
  };
};

function PaymentMethodsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](1, _c1, ctx_r3.isPrimary ? "22px" : "0px"));
  }
}

const _c2 = function () {
  return {
    "left": "-200px"
  };
};

function PaymentMethodsComponent_section_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "section", 36)(1, "div", 37)(2, "tool-tip", 38)(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div")(8, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](3, _c1, ctx_r4.isPrimary ? "22px" : "0px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](5, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r4.expiringTooltip, " ");
  }
}

function PaymentMethodsComponent_section_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "section", 36)(1, "div", 37)(2, "tool-tip", 38)(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div")(8, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, "Expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](3, _c1, ctx_r5.isPrimary ? "22px" : "0px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](5, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r5.expiredTooltip, " ");
  }
}

function PaymentMethodsComponent_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "section", 36)(1, "div", 37)(2, "tool-tip", 38)(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](5, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div")(7, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8, "Blocked");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](3, _c1, ctx_r6.isPrimary ? "22px" : "0px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](5, _c2))("innerHtml", ctx_r6.blockedTooltip, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
  }
}

function PaymentMethodsComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 50)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "EXPIRES");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"]("", ctx_r17.paymentMethod.credit.expMonth, " / ", ctx_r17.paymentMethod.credit.expYear, "");
  }
}

function PaymentMethodsComponent_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 52)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r18.paymentMethod.credit.nameOnCard);
  }
}

function PaymentMethodsComponent_div_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 52)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "BILLING ADDRESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "address-display", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("address", ctx_r19.paymentMethod.credit)("international", ctx_r19.paymentMethod.credit.international);
  }
}

function PaymentMethodsComponent_div_16_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 54)(1, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PaymentMethodsComponent_div_16_span_5_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return ctx_r24.openEditPaymentMethodModal();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}

function PaymentMethodsComponent_div_16_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}

function PaymentMethodsComponent_div_16_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}

function PaymentMethodsComponent_div_16_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}

function PaymentMethodsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PaymentMethodsComponent_div_16_div_1_Template, 5, 2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PaymentMethodsComponent_div_16_div_2_Template, 5, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, PaymentMethodsComponent_div_16_div_3_Template, 4, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, PaymentMethodsComponent_div_16_span_5_Template, 3, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, PaymentMethodsComponent_div_16_span_6_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PaymentMethodsComponent_div_16_Template_a_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return ctx_r26.removePaymentMethod();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "tool-tip", 18)(10, "span", 19)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](13, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](14, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](15, PaymentMethodsComponent_div_16_span_15_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PaymentMethodsComponent_div_16_Template_a_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return ctx_r28.unblockPaymentMethod();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17, "Unblock");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](18, PaymentMethodsComponent_div_16_span_18_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PaymentMethodsComponent_div_16_Template_a_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r27);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return ctx_r29.makePrimaryPayment();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](20, "Make Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r7.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r7.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r7.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r7.isBlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r7.isBlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("fxShow", !ctx_r7.isOnlyPayment || ctx_r7.isFlexPay);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("fxShow", ctx_r7.isOnlyPayment && !ctx_r7.isFlexPay)("stayOpenOnHover", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", ctx_r7.setRightOffset())("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](14, 14, ctx_r7.removeOnlyCMS.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r7.isBlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("fxShow", ctx_r7.isBlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r7.isPrimary && !ctx_r7.isBlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("fxShow", !ctx_r7.isPrimary && !ctx_r7.isBlocked);
  }
}

function PaymentMethodsComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 52)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r30.paymentMethod.eft.nameOnBankAccount);
  }
}

function PaymentMethodsComponent_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 52)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "ROUTING NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r31.paymentMethod.eft.routingNumber);
  }
}

function PaymentMethodsComponent_div_17_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 54)(1, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PaymentMethodsComponent_div_17_span_4_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return ctx_r36.openEditPaymentMethodModal();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}

function PaymentMethodsComponent_div_17_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}

function PaymentMethodsComponent_div_17_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}

function PaymentMethodsComponent_div_17_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}

function PaymentMethodsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, PaymentMethodsComponent_div_17_div_1_Template, 5, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, PaymentMethodsComponent_div_17_div_2_Template, 5, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, PaymentMethodsComponent_div_17_span_4_Template, 3, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, PaymentMethodsComponent_div_17_span_5_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PaymentMethodsComponent_div_17_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return ctx_r38.removePaymentMethod();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "tool-tip", 18)(9, "span", 19)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](12, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](13, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](14, PaymentMethodsComponent_div_17_span_14_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PaymentMethodsComponent_div_17_Template_a_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r39);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return ctx_r40.unblockPaymentMethod();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, "Unblock");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](17, PaymentMethodsComponent_div_17_span_17_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PaymentMethodsComponent_div_17_Template_a_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r39);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return ctx_r41.makePrimaryPayment();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](19, "Make Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r8.paymentMethod.eft.nameOnBankAccount && ctx_r8.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r8.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r8.isBlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r8.isBlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("fxShow", !ctx_r8.isOnlyPayment || ctx_r8.isFlexPay);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("fxShow", ctx_r8.isOnlyPayment && !ctx_r8.isFlexPay)("stayOpenOnHover", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", ctx_r8.setRightOffset())("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](13, 13, ctx_r8.removeOnlyCMS.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r8.isBlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("fxShow", ctx_r8.isBlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r8.isPrimary && !ctx_r8.isBlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("fxShow", !ctx_r8.isPrimary && !ctx_r8.isBlocked);
  }
}

function PaymentMethodsComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 54)(1, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PaymentMethodsComponent_span_20_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return ctx_r42.openEditPaymentMethodModal();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}

function PaymentMethodsComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}

function PaymentMethodsComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}

function PaymentMethodsComponent_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}

const _c3 = function (a0) {
  return {
    "padding-bottom": a0
  };
};

class PaymentMethodsComponent {
  constructor(parent, cmsUtilService, dialogService, webApi, responseErrorService, toasterService, billingInfoUtilitiesService, billingDataService, manageBillingInformationService, cmsReplacementService, titleCasePipe, authService) {
    this.parent = parent;
    this.cmsUtilService = cmsUtilService;
    this.dialogService = dialogService;
    this.webApi = webApi;
    this.responseErrorService = responseErrorService;
    this.toasterService = toasterService;
    this.billingInfoUtilitiesService = billingInfoUtilitiesService;
    this.billingDataService = billingDataService;
    this.manageBillingInformationService = manageBillingInformationService;
    this.cmsReplacementService = cmsReplacementService;
    this.titleCasePipe = titleCasePipe;
    this.authService = authService;
    this.BillingType = common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType;
    this.animationState = 'default';
    this.reloadGrid = new _angular_core__WEBPACK_IMPORTED_MODULE_21__.EventEmitter();

    this.getIconImage = () => {
      if (!this.paymentMethodImages) {
        return '';
      }

      const iconDict = this.paymentMethodImages.Children.reduce((acc, curr) => ({ ...acc,
        [curr.ItemName]: curr.Image
      }), {});
      const childName = this.getPaymentType(this.paymentMethod);
      return this.cmsUtilService.generateFileSrc(iconDict[childName] || '');
    };

    this.normalizeCreditCard = creditCard => {
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_5__.isString)(creditCard.cardNbr) && (0,lodash__WEBPACK_IMPORTED_MODULE_5__.isNumber)(creditCard.expMonth) && (0,lodash__WEBPACK_IMPORTED_MODULE_5__.isNumber)(creditCard.expYear)) {
        // Retrofit the return information to work with legacy directives
        const cardAsLegacy = Object.assign({}, creditCard, {
          cardNbr: creditCard.cardNbr.slice(creditCard.cardNbr.length - 4),
          cardExpires: `${creditCard.expMonth}/${creditCard.expYear}`,
          selectedYear: creditCard.expYear,
          international: this.billingInfoUtilitiesService.isInternationalAddress(creditCard)
        });
        return cardAsLegacy;
      }

      return creditCard;
    };

    this.normalizeEFT = eft => {
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_5__.isString)(eft.nameOnBankAccount)) {
        const eftAsLegacy = Object.assign({}, eft, {
          name: eft.nameOnBankAccount,
          accountType: eft.accountTypeDisplay.toUpperCase(),
          accountTypeDisplay: eft.accountTypeDisplay.toUpperCase(),
          account2: eft.accountNumber,
          international: this.billingInfoUtilitiesService.isInternationalAddress(eft)
        });
        return eftAsLegacy;
      }

      return eft;
    };
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.getPaymentMethodData();
      _this.isFlexPay = _this.parent.isFlexPay;
    })();
  }

  getPaymentMethodData() {
    this.paymentType = this.paymentMethod.billingType;
    this.cmsImage = this.getIconImage();
    this.isPrimary = this.paymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Credit ? this.paymentMethod.credit.primary : this.paymentMethod.eft.primary;

    if (this.paymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Eft && this.paymentMethod.eft.nameOnBankAccount) {
      this.paymentMethod.eft.nameOnBankAccount = this.paymentMethod.eft.nameOnBankAccount.toLowerCase();
    }

    if (this.paymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Credit && this.paymentMethod.credit.nameOnCard) {
      this.paymentMethod.credit.nameOnCard = this.paymentMethod.credit.nameOnCard.toLowerCase();
    }

    if (this.paymentType !== common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Eft) {
      const dateToCompare = new Date(this.paymentMethod.credit.expYear, this.paymentMethod.credit.expMonth);
      const today = new Date();
      this.thirtyDays = new Date();
      this.thirtyDays.setDate(this.thirtyDays.getDate() + 30);
      this.expirationDate = dateToCompare;
      const blocked = this.isBlocked;
      const expired = dateToCompare < today && !blocked && this.paymentType !== common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Eft;
      const expiring = dateToCompare < this.thirtyDays && !expired && !blocked && !expired;
      this.isActive = !blocked && !expired && !expiring;
      this.isExpiring = expiring;
      this.isExpired = expired;
    } else if (this.paymentType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Eft) {
      const blocked = this.isBlocked;
      this.isActive = !blocked;
      this.isExpired = false;
      this.isExpiring = false;
    }
  }

  getPaymentType(paymentMethod) {
    const cardCodes = {
      a: 'AMEX',
      m: 'MasterCard',
      d: 'Discover',
      v: 'Visa'
    };
    return paymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Eft ? 'Bank' : cardCodes[(this.paymentMethod.credit.cardCode || '').toLowerCase()] || '';
  }

  changeSelection() {
    this.isSelected = !this.isSelected;
    this.animationState = this.animationState === 'default' ? 'rotated' : 'default';

    if (this.isBlocked) {
      this.parent.selectedIndexBlocked = this.myIndex;
    } else {
      this.parent.selectedIndex = this.myIndex;
    }
  }

  unblockPaymentMethod() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data;

      if (_this2.paymentType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Credit && _this2.activeCreditSlots <= 0) {
        data = {
          cmsContent: {
            Title: _this2.unblockCMS.UnblockMaxTitle,
            PrimaryContent: _this2.unblockCMS.UnblockMaxCard,
            AcceptBtn: 'OKAY'
          }
        };
        yield _this2.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_3__.GenericCmsModalComponent, data);
        return;
      } else if (_this2.paymentType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Eft && _this2.activeEFTSlots <= 0) {
        data = {
          cmsContent: {
            Title: _this2.unblockCMS.UnblockMaxTitle,
            PrimaryContent: _this2.unblockCMS.UnblockMaxEft,
            AcceptBtn: 'OKAY'
          }
        };
        yield _this2.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_3__.GenericCmsModalComponent, data);
        return;
      }

      data = {
        cmsContent: {
          Title: _this2.unblockCMS.Title,
          PrimaryContent: _this2.unblockCMS.LongDescription,
          AcceptBtn: _this2.parent.cmsContent.BUTTON_CONTINUE,
          CancelBtn: _this2.parent.cmsContent.BUTTON_CANCEL
        }
      };
      const res = yield _this2.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_3__.GenericCmsModalComponent, data);

      if (res) {
        const unblockPaymentMethodData = {
          accountBillingMethodId: _this2.paymentMethod.credit ? _this2.paymentMethod.credit.accountBillingMethodId : _this2.paymentMethod.eft.accountBillingMethodId
        };
        yield _this2.webApi.unblockPaymentMethod(unblockPaymentMethodData).then(response => {
          _this2.responseErrorService.displayAlertsFromResponse(response);

          if (_this2.responseErrorService.isErrorFree(response)) {
            _this2.toasterService.show('Success', _this2.parent.cmsContent.SUCCESS_DESC);
          }
        });
      }

      yield _this2.manageBillingInformationService.refreshBillingInfo([]);

      _this2.reloadGrid.emit();
    })();
  }

  openEditPaymentMethodModal() {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        billingInformation: {
          credit: (0,common_utilities__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(_this3.paymentMethod.credit),
          eft: (0,common_utilities__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(_this3.paymentMethod.eft)
        },
        billingType: (0,common_utilities__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(_this3.paymentMethod.billingType),
        stateList: (0,common_utilities__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(_this3.parent.stateList),
        countryList: (0,common_utilities__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(_this3.parent.countryList),
        lockType: true,
        creditEntryExpireOnly: true,
        hideForEFT: true,
        hidePaymentSelection: true,
        uiOptions: {
          isNew: false,
          showMakePrimary: !_this3.isPrimary
        },
        cmsImage: _this3.cmsImage
      };

      if (_this3.paymentMethod.eft) {
        data.billingInformation.eft.account2 = _this3.paymentMethod.eft.accountNumber;
        data.billingInformation.eft.accountType = common_models__WEBPACK_IMPORTED_MODULE_2__.BankAccountType[_this3.paymentMethod.eft.accountTypeDisplay];
      }

      yield _this3.dialogService.openSliderCentered(common_ui_modals_billingModal_billingModal_component__WEBPACK_IMPORTED_MODULE_6__.BillingModalComponent, data, {
        title: _this3.parent.cmsContent.EDIT_MODAL
      }).then(result => {
        if (result) {
          _this3.paymentMethod = result.billingInformation;
          _this3.paymentMethod.billingType = result.billingType;

          if (result.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Credit) {
            _this3.paymentMethod.credit = _this3.normalizeCreditCard(_this3.paymentMethod.credit);
          }

          if (result.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Eft) {
            _this3.paymentMethod.eft.accountTypeDisplay = _this3.titleCasePipe.transform(result.billingInformation.eft.accountType);
            _this3.paymentMethod.eft.nameOnBankAccount = result.billingInformation.eft.name;
            _this3.paymentMethod.eft = _this3.normalizeEFT(_this3.paymentMethod.eft);
          }

          _this3.updatePaymentMethod(result);
        }
      });
      yield _this3.manageBillingInformationService.refreshBillingInfo([]);

      _this3.reloadGrid.emit();
    })();
  }

  removePaymentMethod() {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.setRemoveChangeRequestCMS();

      const remainingPaymentMethods = _this4.parent.paymentMethods.filter(p => p !== _this4.paymentMethod);

      const dataChangeRequest = {
        cmsContent: {
          Title: _this4.removeCMS.Title,
          MainContent: _this4.removeCMSModalContent,
          NewPrimaryContent: _this4.removeCMS.NewPrimaryContent,
          PrimaryAcceptBtn: _this4.parent.cmsContent.BUTTON_SAVE,
          NonPrimaryAcceptBtn: _this4.parent.cmsContent.BUTTON_CONTINUE,
          CancelBtn: _this4.parent.cmsContent.BUTTON_CANCEL,
          ConfirmBtn: _this4.parent.cmsContent.BUTTON_CONFIRM,
          isPrimary: _this4.isPrimary,
          isOnlyPayment: _this4.isOnlyPayment,
          isFlexPay: _this4.parent.isFlexPay,
          removeFlexPay: _this4.removeCMS.removeFlexPay,
          otherMethods: remainingPaymentMethods,
          paymentMethodImages: _this4.paymentMethodImages,
          isOptIn: _this4.parent.isOptIn
        }
      };
      const res_removeModal = yield _this4.dialogService.openGenericModal(profile_updateBillingInformation_removePaymentModal_removePaymentModal_component__WEBPACK_IMPORTED_MODULE_7__.RemovePaymentModalComponent, dataChangeRequest);

      if (res_removeModal) {
        if (!res_removeModal.isRemoveOnly && !res_removeModal.optOut) {
          if (res_removeModal.newPrimaryMethod) {
            const newPrimaryPaymentMethod = res_removeModal.newPrimaryMethod;

            if (newPrimaryPaymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Credit) {
              newPrimaryPaymentMethod.eft = null;
              newPrimaryPaymentMethod.credit.primary = true;
            } else if (newPrimaryPaymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Eft) {
              newPrimaryPaymentMethod.credit = null;
              newPrimaryPaymentMethod.eft.primary = true;
            }

            const errors = yield _this4.billingDataService.updatePaymentInfo('e', newPrimaryPaymentMethod);

            if (errors.length === 0) {
              const removePaymentMethodData = {
                eFTPaymentMethod: _this4.paymentMethod.eft,
                creditCardPaymentMethod: _this4.paymentMethod.credit,
                isCreditCard: _this4.paymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Credit
              };
              const removeResponse = yield _this4.webApi.removePaymentMethod(removePaymentMethodData);

              if (_this4.responseErrorService.isErrorFree(removeResponse)) {
                _this4.toasterService.show('Success', _this4.parent.cmsContent.SUCCESS_DESC);
              }
            }
          }
        }

        if (res_removeModal.optOut) {
          const optOutResponse = yield _this4.webApi.updateRebillAmount({
            accountType: 'Flex Pay',
            currentRebillAmount: 0,
            minimumBalance: 0,
            minimumBalanceMultiplier: .25,
            rebillAmount: 0
          });

          if (optOutResponse) {
            yield _this4.authService.profile({});
            const removePaymentMethodData = {
              eFTPaymentMethod: _this4.paymentMethod.eft,
              creditCardPaymentMethod: _this4.paymentMethod.credit,
              isCreditCard: _this4.paymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Credit
            };
            const removeResponse = yield _this4.webApi.removePaymentMethod(removePaymentMethodData);

            if (_this4.responseErrorService.isErrorFree(removeResponse)) {
              _this4.toasterService.show('Success', _this4.parent.cmsContent.SUCCESS_DESC);
            }
          }
        }

        if (res_removeModal.isRemoveOnly) {
          const removePaymentMethodData = {
            eFTPaymentMethod: _this4.paymentMethod.eft,
            creditCardPaymentMethod: _this4.paymentMethod.credit,
            isCreditCard: _this4.paymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Credit
          };
          const removeResponse = yield _this4.webApi.removePaymentMethod(removePaymentMethodData);

          if (_this4.responseErrorService.isErrorFree(removeResponse)) {
            _this4.toasterService.show('Success', _this4.parent.cmsContent.SUCCESS_DESC);
          }
        }
      }

      yield _this4.manageBillingInformationService.refreshBillingInfo([]);

      _this4.reloadGrid.emit();
    })();
  }

  setRemoveChangeRequestCMS() {
    let insertValues;

    if (this.paymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Eft) {
      insertValues = {
        oldPaymentType: this.getPaymentType(this.paymentMethod) + ' Account',
        oldLast4: this.paymentMethod.eft.accountNumber.slice(-4)
      };
    } else {
      insertValues = {
        oldPaymentType: this.getPaymentType(this.paymentMethod),
        oldLast4: this.paymentMethod.credit.cardNbr.slice(-4)
      };
    }

    this.removeCMSModalContent = this.cmsReplacementService.transformTemplate(this.removeCMS.ShortDescription, insertValues);
  }

  updatePaymentMethod(result) {
    var _this5 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      const editPaymentMethod = { ...result.billingInformation,
        billingType: result.billingType,
        makePrimary: (_a = result.uiResults) === null || _a === void 0 ? void 0 : _a.makePrimary
      };

      if (editPaymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Credit) {
        editPaymentMethod.eft = null;
      } else if (editPaymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Eft) {
        editPaymentMethod.credit = null;
      }

      const errors = yield _this5.billingDataService.updatePaymentInfo('e', editPaymentMethod);

      if (errors.length === 0) {
        const modalData = {
          cmsContent: {
            Title: _this5.parent.cmsContent.SUCCESS_TITLE,
            AcceptBtn: _this5.parent.cmsContent.SUCCESS_BUTTON,
            PrimaryContent: _this5.parent.cmsContent.SUCCESS_DESC
          }
        };
        yield _this5.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_3__.GenericCmsModalComponent, modalData);
      }

      _this5.manageBillingInformationService.billingInformation = {
        selected: null,
        allPaymentContainers: null
      };
      yield _this5.manageBillingInformationService.refreshBillingInfo([]);

      _this5.parent.loadGrid();
    })();
  }

  makePrimaryPayment() {
    var _this6 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        cmsContent: {
          Title: _this6.makePrimaryCMS.Title,
          PrimaryContent: _this6.makePrimaryCMS.LongDescription,
          AcceptBtn: _this6.parent.cmsContent.BUTTON_CONTINUE,
          CancelBtn: _this6.parent.cmsContent.BUTTON_CANCEL
        }
      };
      const res = yield _this6.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_3__.GenericCmsModalComponent, data);

      if (res) {
        const editPaymentMethod = _this6.paymentMethod;

        if (editPaymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Credit) {
          editPaymentMethod.eft = null;
          editPaymentMethod.credit.primary = true;
        } else if (editPaymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Eft) {
          editPaymentMethod.credit = null;
          editPaymentMethod.eft.primary = true;
        }

        const errors = yield _this6.billingDataService.updatePaymentInfo('e', editPaymentMethod);

        if (errors.length === 0) {
          _this6.toasterService.show('Success', _this6.parent.cmsContent.SUCCESS_DESC);
        }
      }

      yield _this6.manageBillingInformationService.refreshBillingInfo([]);

      _this6.parent.loadGrid();
    })();
  }

  setRightOffset() {
    return {
      right: this.isPrimary ? '0px' : '-165px'
    };
  }

}

PaymentMethodsComponent.ɵfac = function PaymentMethodsComponent_Factory(t) {
  return new (t || PaymentMethodsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](profile_updateBillingInformation_updateBillingInformation_component__WEBPACK_IMPORTED_MODULE_8__.UpdateBillingInformationComponent), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_9__.CmsUtilService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_10__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](profile_services_webApis_service__WEBPACK_IMPORTED_MODULE_11__.WebApisService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_10__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_10__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](common_billing_billingInfoUtilities_service__WEBPACK_IMPORTED_MODULE_12__.BillingInfoUtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_10__.BillingDataService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_10__.ManageBillingService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_9__.CmsReplacementService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_22__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_13__.AuthenticationService));
};

PaymentMethodsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
  type: PaymentMethodsComponent,
  selectors: [["payment-methods-component"]],
  inputs: {
    myIndex: "myIndex",
    paymentMethodImages: "paymentMethodImages",
    name: "name",
    paymentMethod: "paymentMethod",
    isSelected: "isSelected",
    isBlocked: "isBlocked",
    isOnlyPayment: "isOnlyPayment",
    unblockCMS: "unblockCMS",
    removeCMS: "removeCMS",
    removeOnlyCMS: "removeOnlyCMS",
    stateList: "stateList",
    countryList: "countryList",
    makePrimaryCMS: "makePrimaryCMS",
    activeCreditSlots: "activeCreditSlots",
    activeEFTSlots: "activeEFTSlots",
    animationState: "animationState",
    expiringTooltip: "expiringTooltip",
    expiredTooltip: "expiredTooltip",
    blockedTooltip: "blockedTooltip"
  },
  outputs: {
    reloadGrid: "reloadGrid"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_22__.TitleCasePipe])],
  decls: 36,
  vars: 32,
  consts: [["fxLayout", "column"], [2, "padding-top", "4px", "padding-bottom", "4px"], [1, "clickable", 3, "isSelectedTop", "isTop", "ngSwitch", "click"], ["col-start", "", "fxFlex", "grow"], ["fxLayout", "row", "fxLayoutAlign", "start start", 2, "padding-top", "32px", 3, "ngStyle"], [1, "fx-flex-auto-shrink-more", "limited-flex"], [4, "ngSwitchCase"], ["fxShow", "", "fxHide.lt-md", "", "style", "vertical-align:bottom; padding-left:20px; width:185px; text-align:right;", 3, "ngStyle", 4, "ngSwitchCase"], ["col-end", "", 2, "text-align", "right", "vertical-align", "top", "min-width", "100px"], ["class", "activeStatus", "style", "padding-right:10px;", 3, "ngStyle", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start start", 3, "ngStyle", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start center", 3, "isSelectedBottom", "isBottom", "ngSwitch"], ["col-start", "", "fxFlex", "2 1 auto", 2, "padding-bottom", "32px"], ["col-end", "", "fxFlex", "none"], ["ngClass.lt-sm", "hide"], ["style", "padding-top: 100%;", 4, "ngIf"], ["style", "padding:0px 5px;", 4, "ngIf"], [3, "fxShow", "click"], [3, "fxShow", "stayOpenOnHover"], ["tool-tip-hover", ""], ["tool-tip-message", "", "ngClass", "hoverBoxAdjusment", 3, "ngStyle", "innerHTML"], ["fxLayout", "row", "fxLayoutAlign", "start start"], ["svgIcon", "previous-arrow", 1, "iconUnselected"], [2, "padding-left", "12px"], [3, "src", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start start", 2, "padding-left", "12px", "vertical-align", "bottom"], ["class", "isPrimary", 4, "ngIf"], [2, "min-width", "169px"], ["translation-skip", "", 1, "itemFont"], ["fxShow", "", "fxHide.gt-xs", ""], [3, "src"], [1, "isPrimary"], ["fxLayout", "column", "fxLayoutAlign", "start start", "ngClass.gt-sm", "bankAccountWidth", 2, "padding-left", "12px", "vertical-align", "bottom"], ["fxShow", "", "fxHide.lt-md", "", 2, "vertical-align", "bottom", "padding-left", "20px", "width", "185px", "text-align", "right", 3, "ngStyle"], [2, "padding-right", "40px"], [1, "activeStatus", 2, "padding-right", "10px", 3, "ngStyle"], ["fxLayout", "row", "fxLayoutAlign", "start start", 3, "ngStyle"], [2, "padding-right", "5px"], [1, "toolTip"], ["svgIcon", "alert", 1, "expiring"], ["tool-tip-message", "", "ngClass", "hoverBoxAdjusment", 3, "ngStyle.lt-md"], [1, "activeStatus"], ["svgIcon", "alert", 1, "expired"], ["tool-tip-message", "", "ngClass", "hoverBoxAdjusment", 3, "ngStyle"], [1, "expiredStatus"], ["tool-tip-message", "", "ngClass", "hoverBoxAdjusment", 3, "ngStyle", "innerHtml"], [1, "blockedStatus"], ["fxHide", "", "fxShow.lt-md", "", "style", "padding-left: 31px;", 4, "ngIf"], ["style", "padding-left: 31px;", 4, "ngIf"], ["ngClass.gt-sm", "hide", 2, "padding-left", "31px", "padding-top", "10px"], ["fxHide", "", "fxShow.lt-md", "", 2, "padding-left", "31px"], ["translation-skip", "", 1, "nameFormat"], [2, "padding-left", "31px"], [3, "address", "international"], [2, "padding-top", "100%"], [1, "add-text", 2, "vertical-align", "bottom", 3, "click"], [2, "padding", "0px 5px"]],
  template: function PaymentMethodsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "fx-row", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PaymentMethodsComponent_Template_fx_row_click_2_listener() {
        return ctx.changeSelection();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, PaymentMethodsComponent_div_6_Template, 18, 12, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, PaymentMethodsComponent_div_7_Template, 16, 6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, PaymentMethodsComponent_div_8_Template, 4, 6, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, PaymentMethodsComponent_div_10_Template, 2, 3, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, PaymentMethodsComponent_section_11_Template, 10, 6, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, PaymentMethodsComponent_section_12_Template, 10, 6, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](13, PaymentMethodsComponent_section_13_Template, 9, 6, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "fx-row", 11)(15, "section", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](16, PaymentMethodsComponent_div_16_Template, 21, 16, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](17, PaymentMethodsComponent_div_17_Template, 20, 15, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "section", 13)(19, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](20, PaymentMethodsComponent_span_20_Template, 3, 0, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](21, PaymentMethodsComponent_span_21_Template, 2, 0, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PaymentMethodsComponent_Template_a_click_22_listener() {
        return ctx.removePaymentMethod();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](23, "Remove");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](24, "tool-tip", 18)(25, "span", 19)(26, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](27, "Remove");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](28, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](29, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](30, PaymentMethodsComponent_span_30_Template, 2, 0, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PaymentMethodsComponent_Template_a_click_31_listener() {
        return ctx.unblockPaymentMethod();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](32, "Unblock");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](33, PaymentMethodsComponent_span_33_Template, 2, 0, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function PaymentMethodsComponent_Template_a_click_34_listener() {
        return ctx.makePrimaryPayment();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](35, "Make Primary");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("isSelectedTop", ctx.isSelected)("isTop", ctx.isSelected)("ngSwitch", ctx.paymentMethod.billingType);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](30, _c3, ctx.isSelected ? "20px" : "32px"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngSwitchCase", ctx.BillingType.Credit);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngSwitchCase", ctx.BillingType.Eft);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngSwitchCase", ctx.BillingType.Credit);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.isActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.isExpiring);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.isExpired);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.isBlocked);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("isSelectedBottom", true)("isBottom", true)("ngSwitch", ctx.paymentMethod.billingType)("@collapse", !ctx.isSelected);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngSwitchCase", ctx.BillingType.Credit);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngSwitchCase", ctx.BillingType.Eft);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx.isBlocked);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx.isBlocked);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("fxShow", !ctx.isOnlyPayment || ctx.isFlexPay);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("fxShow", ctx.isOnlyPayment && !ctx.isFlexPay)("stayOpenOnHover", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", ctx.setRightOffset())("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](29, 28, ctx.removeOnlyCMS.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.isBlocked);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("fxShow", ctx.isBlocked);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx.isPrimary && !ctx.isBlocked);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("fxShow", !ctx.isPrimary && !ctx.isBlocked);
    }
  },
  directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutDirective, _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_14__.FxRowComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitch, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__.DefaultStyleDirective, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchCase, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__.DefaultShowHideDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__.DefaultClassDirective, _common_ui_toolTip_toolTip_component__WEBPACK_IMPORTED_MODULE_15__.ToolTipComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatLabel, _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_16__.AddressDisplayComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.UpperCasePipe, _pipes_cardType_cardType_pipe__WEBPACK_IMPORTED_MODULE_17__.CardTypePipe, _pipes_paymentMasking_creditCardMask_pipe__WEBPACK_IMPORTED_MODULE_18__.CreditCardMaskPipe, _pipes_paymentMasking_bankAccountMask_pipe__WEBPACK_IMPORTED_MODULE_19__.BankAccountMaskPipe, _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_20__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n[_nghost-%COMP%]   .isPrimary[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 5px;\n  width: 64px;\n  height: 18px;\n  font-size: 8px;\n  line-height: 18px;\n  text-align: center;\n  background-color: #ffdd09;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n[_nghost-%COMP%]   .iconSelected[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 19px;\n  transform: rotate(270deg);\n}\n[_nghost-%COMP%]   .iconUnselected[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 19px;\n  transform: rotate(90deg);\n}\n[_nghost-%COMP%]   .itemFont[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Montserrat';\n}\n[_nghost-%COMP%]   .nameFormat[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Montserrat';\n  text-transform: capitalize;\n}\n[_nghost-%COMP%]   .activeStatus[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Montserrat';\n  color: #018749;\n}\n[_nghost-%COMP%]   .expiredStatus[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Montserrat';\n  color: #fc2125;\n}\n[_nghost-%COMP%]   .blockedStatus[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Montserrat';\n  color: #fc2125;\n  padding-left: -20px;\n}\n[_nghost-%COMP%]   .expiring[_ngcontent-%COMP%] {\n  color: #ff9200;\n}\n[_nghost-%COMP%]   .expiring[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]    > path[_ngcontent-%COMP%] {\n  fill: #ff9200;\n}\n[_nghost-%COMP%]   .expired[_ngcontent-%COMP%] {\n  color: #fc2125;\n}\n[_nghost-%COMP%]   .expired[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]    > path[_ngcontent-%COMP%] {\n  fill: #fc2125;\n}\n[_nghost-%COMP%]   .hoverBoxAdjusment[_ngcontent-%COMP%] {\n  padding: 15px;\n  min-width: 300px;\n  font-size: 16px;\n  line-height: 2;\n}\n[_nghost-%COMP%]   .bankAccountWidth[_ngcontent-%COMP%] {\n  width: 365px;\n}\n[_nghost-%COMP%]   .bankAccountWidthMob[_ngcontent-%COMP%] {\n  width: 160px;\n}\n[_nghost-%COMP%]   .mobWidth[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n[_nghost-%COMP%]   span[tool-tip-hover][_ngcontent-%COMP%] {\n  color: #757575;\n}\n[_nghost-%COMP%]   tool-tip[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbW1vblxcdWlcXGNvbnRhaW5lcnNcXGZ4Um93XFxkZXRhaWxzLmxlc3MiLCJwYXltZW50TWV0aG9kcy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtBQ0RKO0FEQUE7RUFJUSxhQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREpBO0VBOEVJLGNBQUE7RUFDQSxzQkFBQTtBQ3ZFSjtBRFJBO0VBb0ZJLGNBQUE7RUFDQSxzQkFBQTtBQ3pFSjtBRFpBO0VBeUZJLGNBQUE7RUFDQSxzQkFBQTtBQzFFSjtBRGhCQTtFQThGSSxjQUFBO0VBQ0Esc0JBQUE7QUMzRUo7QURwQkE7RUFtR0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUM1RUo7QUR6QkE7RUF5R0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUM3RUo7QUQ5QkE7RUErR0kscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDOUVKO0FEbkNBO0VBcUhJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQy9FSjtBRHhDQTtFQTBDUSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NSO0FEN0NBO0VBZ0RRLFdBQUE7QUNBUjtBRGhEQTtFQW9EUSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRFI7QUR0REE7RUEyRFEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRlI7QUQ1REE7RUFrRVEsZUFBQTtBQ0hSO0FES1E7RUFDSSxlQUFBO0FDSFo7QUFqRUE7RUFHUSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQWlFUjtBQTdFQTtFQWdCUSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBZ0VSO0FBbEZBO0VBc0JRLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUErRFI7QUF2RkE7RUE0QlEsZUFBQTtFQUNBLHlCQUFBO0FBOERSO0FBM0ZBO0VBaUNRLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBNkRSO0FBaEdBO0VBdUNRLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUE0RFI7QUFyR0E7RUE2Q1EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQTJEUjtBQTFHQTtFQW1EUSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUEwRFI7QUFoSEE7RUEwRFEsY0FBQTtBQXlEUjtBQW5IQTtFQThEUSxhQUFBO0FBd0RSO0FBdEhBO0VBa0VRLGNBQUE7QUF1RFI7QUF6SEE7RUFzRVEsYUFBQTtBQXNEUjtBQTVIQTtFQTBFUSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQXFEUjtBQWxJQTtFQWlGUSxZQUFBO0FBb0RSO0FBcklBO0VBcUZRLFlBQUE7QUFtRFI7QUF4SUE7RUF5RlEsZUFBQTtBQWtEUjtBQTNJQTtFQTZGUSxjQUFBO0FBaURSO0FBOUlBO0VBaUdRLHFCQUFBO0FBZ0RSIiwiZmlsZSI6InBheW1lbnRNZXRob2RzLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuXG4gICAgLmZ4LWZsZXgtYXV0byB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtZmxleC1ub25lIHtcbiAgICAgICAgLmZ4LWZsZXgtbm9uZS1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUge1xuICAgICAgICAuZngtZmxleC1hdXRvLXNocmluay1tb3JlLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWZsZXgtYXV0by1ncm93LW1vcmUge1xuICAgICAgICAuZngtZmxleC1hdXRvLWdyb3ctbW9yZS1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtcm93IHtcbiAgICAgICAgLmZ4LWxheW91dC1yb3ctbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LWNvbHVtbiB7XG4gICAgICAgIC5meC1sYXlvdXQtY29sdW1uLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1hbGlnbi1zdGFydC1jZW50ZXIge1xuICAgICAgICAuZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlci1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtYWxpZ24tZW5kLWNlbnRlciB7XG4gICAgICAgIC5meC1sYXlvdXQtYWxpZ24tZW5kLWNlbnRlci1taXhpbigpO1xuICAgIH1cblxuICAgIC5saW1pdGVkLWZsZXgge1xuICAgICAgICBtaW4td2lkdGg6IDE3MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDUzMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAudW5saW1pdGVkLWZsZXgge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAubGltaXRlZC1mbGV4LWVuZCB7XG4gICAgICAgIG1pbi13aWR0aDogNzBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cblxuICAgIC5sYXJnZXItbGltaXRlZC1mbGV4LWVuZCB7XG4gICAgICAgIG1pbi13aWR0aDogMTQzcHg7XG4gICAgICAgIG1heC13aWR0aDogMTQ1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxuXG4gICAgLnRhYmxlLXNwYWNlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuXG4gICAgICAgICYubHQtbWQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gTWl4aW5zIHRvIGFwcGVhc2UgcGVyZm9ybWFuY2Vcbi5meC1mbGV4LWF1dG8tbWl4aW4oKSB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWZsZXgtbm9uZS1taXhpbigpIHtcbiAgICAvLyBsZXNzaGludC1kaXNhYmxlLW5leHQtbGluZSB6ZXJvVW5pdFxuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUtbWl4aW4oKSB7XG4gICAgZmxleDogMSAyIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWZsZXgtYXV0by1ncm93LW1vcmUtbWl4aW4oKSB7XG4gICAgZmxleDogMiAxIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWxheW91dC1yb3ctbWl4aW4oKSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5meC1sYXlvdXQtY29sdW1uLW1peGluKCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlci1taXhpbigpIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5meC1sYXlvdXQtYWxpZ24tZW5kLWNlbnRlci1taXhpbigpIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgJ2NvbW1vbi91aS9jb250YWluZXJzL2Z4Um93L2RldGFpbHMubGVzcyc7XG5cbjpob3N0IHtcblxuICAgIC5pc1ByaW1hcnkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBzY2hvb2wtYnVzLXllbGxvdztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgIC5pY29uU2VsZWN0ZWQge1xuICAgICAgICB3aWR0aDogMTlweDtcbiAgICAgICAgaGVpZ2h0OiAxOXB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgIH1cblxuICAgIC5pY29uVW5zZWxlY3RlZCB7XG4gICAgICAgIHdpZHRoOiAxOXB4O1xuICAgICAgICBoZWlnaHQ6IDE5cHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB9XG5cbiAgICAuaXRlbUZvbnQge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xuICAgIH1cblxuICAgIC5uYW1lRm9ybWF0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuXG4gICAgLmFjdGl2ZVN0YXR1cyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LW1vbnRzZXJyYXQ7XG4gICAgICAgIGNvbG9yOiBAdHJvcGljYWwtcmFpbi1mb3Jlc3QtZ3JlZW47XG4gICAgfVxuXG4gICAgLmV4cGlyZWRTdGF0dXMge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xuICAgICAgICBjb2xvcjogQHRvcmNoLXJlZDtcbiAgICB9XG5cbiAgICAuYmxvY2tlZFN0YXR1cyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LW1vbnRzZXJyYXQ7XG4gICAgICAgIGNvbG9yOiBAdG9yY2gtcmVkO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IC0yMHB4O1xuICAgIH1cblxuICAgIC5leHBpcmluZyB7XG4gICAgICAgIGNvbG9yOiBAcGl6YXp6LWdvbGQ7XG4gICAgfVxuXG4gICAgLmV4cGlyaW5nIHN2ZyA+IHBhdGgge1xuICAgICAgICBmaWxsOiBAcGl6YXp6LWdvbGQ7XG4gICAgfVxuXG4gICAgLmV4cGlyZWQge1xuICAgICAgICBjb2xvcjogQHRvcmNoLXJlZDtcbiAgICB9XG5cbiAgICAuZXhwaXJlZCBzdmcgPiBwYXRoIHtcbiAgICAgICAgZmlsbDogQHRvcmNoLXJlZDtcbiAgICB9XG5cbiAgICAuaG92ZXJCb3hBZGp1c21lbnQge1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgIH1cblxuICAgIC5iYW5rQWNjb3VudFdpZHRoIHtcbiAgICAgICAgd2lkdGg6IDM2NXB4O1xuICAgIH1cblxuICAgIC5iYW5rQWNjb3VudFdpZHRoTW9iIHtcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgIH1cblxuICAgIC5tb2JXaWR0aCB7XG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBzcGFuW3Rvb2wtdGlwLWhvdmVyXSB7XG4gICAgICAgIGNvbG9yOiBAYm91bGRlci1ncmF5O1xuICAgIH1cblxuICAgIHRvb2wtdGlwIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbn1cbiJdfQ== */"],
  data: {
    animation: [animations_collapse__WEBPACK_IMPORTED_MODULE_1__.collapseTrigger, // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_27__.trigger)('rotatedState', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_27__.state)('default', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_27__.style)({
      transform: 'rotate(90deg)'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_27__.state)('rotated', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_27__.style)({
      transform: 'rotate(270deg)'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_27__.transition)('rotated => default', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_27__.animate)('400ms ease-out')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_27__.transition)('default => rotated', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_27__.animate)('400ms ease-in'))])]
  }
});

/***/ }),

/***/ 87626:
/*!*********************************************************************************************!*\
  !*** ./src/profile/updateBillingInformation/rebillOptInModal/rebillOptInModal.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RebillOptInModalComponent": () => (/* binding */ RebillOptInModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 51111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/ui/modals/actionButtons/actionButtons.component */ 65380);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/safeHtml.pipe */ 49985);












class RebillOptInModalComponent {
    constructor(dialogRef, injectedData) {
        this.dialogRef = dialogRef;
        this.injectedData = injectedData;
    }
    ngOnInit() {
        this.cmsContent = this.injectedData;
    }
    acceptButtonClick() {
        this.dialogRef.close(true);
    }
    cancelButtonClick() {
        this.dialogRef.close(false);
    }
}
RebillOptInModalComponent.ɵfac = function RebillOptInModalComponent_Factory(t) { return new (t || RebillOptInModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
RebillOptInModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RebillOptInModalComponent, selectors: [["rebill-opIn-modal-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([], [
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ControlContainer, useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm }
        ])], decls: 21, vars: 12, consts: [["validation-focus", "", "name", "optInForm"], ["optInForm", "ngForm"], ["id", "modal-popup", 1, "refresh-2020", 2, "position", "relative"], ["fxLayout", "column", "ngClass.lt-md", "mobile-style", "ngClass", "desktop-style"], ["fxLayout", "column", "fxLayoutAlign", "center center"], [1, "u-spacing__divider--marginTopBottom"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "u-spacing__divider--marginTopBottom"], [3, "innerHtml"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "u-spacing__buttonToField--marginTop"], [3, "direction", "directionLtMd", "reverseOrder", "main", "alt"], ["action-alt", ""], ["action-main", ""]], template: function RebillOptInModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0, 1)(2, "main", 2)(3, "section", 3)(4, "div", 4)(5, "header", 4)(6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "safeHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "safeHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9)(16, "action-buttons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("main", function RebillOptInModalComponent_Template_action_buttons_main_16_listener() { return ctx.acceptButtonClick(); })("alt", function RebillOptInModalComponent_Template_action_buttons_alt_16_listener() { return ctx.cancelButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.cmsContent.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 8, ctx.cmsContent.success), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 10, ctx.cmsContent.MainContent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("direction", "column")("directionLtMd", "column")("reverseOrder", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.cmsContent.CancelBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.cmsContent.optInBtn);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_0__.FocusDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_1__.ActionButtonsComponent], pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_2__.SafeHtmlPipe], styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   .mobile-style[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 45px 35px;\n}\n[_nghost-%COMP%]   .desktop-style[_ngcontent-%COMP%] {\n  min-width: 700px;\n  max-width: 700px;\n  padding: 32px 20px;\n}\n[_nghost-%COMP%]   label[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 100%;\n  margin: 0px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 26px;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  margin: 0px 10px 0px 8px;\n}\n[_nghost-%COMP%]   .has-error[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  border-left: 1px solid #fc2125;\n  border-right: 1px solid #fc2125;\n}\n[_nghost-%COMP%]   .has-error[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-of-type {\n  border-top: 1px solid #fc2125;\n}\n[_nghost-%COMP%]   .has-error[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: 1px solid #fc2125;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYmlsbE9wdEluTW9kYWwubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVRLFdBQUE7QUFGUjtBQUFBO0VBTVEsa0JBQUE7QUFIUjtBQUhBO0VBVVEsV0FBQTtFQUNBLGtCQUFBO0FBSlI7QUFQQTtFQWVRLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUxSO0FBWkE7RUFxQlEsWUFBQTtFQUNBLFdBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUFQUjtBQWxCQTtFQTZCUSxlQUFBO0FBUlI7QUFyQkE7RUFpQ1EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVRSO0FBM0JBO0VBd0NRLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFWUjtBQWhDQTtFQStDWSw4QkFBQTtFQUNBLCtCQUFBO0FBWlo7QUFwQ0E7RUFvRFksNkJBQUE7QUFiWjtBQXZDQTtFQXdEWSxnQ0FBQTtBQWRaIiwiZmlsZSI6InJlYmlsbE9wdEluTW9kYWwubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG5cbiAgICBzZWN0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5tb2JpbGUtc3R5bGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogNDVweCAzNXB4O1xuICAgIH1cblxuICAgIC5kZXNrdG9wLXN0eWxlIHtcbiAgICAgICAgbWluLXdpZHRoOiA3MDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgICAgcGFkZGluZzogMzJweCAyMHB4O1xuICAgIH1cblxuICAgIGxhYmVsIHtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxuXG4gICAgbGFiZWw6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgbGFiZWwgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEzcHg7XG4gICAgICAgIGhlaWdodDogMTNweDtcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweCAwcHggOHB4O1xuICAgIH1cblxuICAgIC5oYXMtZXJyb3Ige1xuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIEB0b3JjaC1yZWQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBAdG9yY2gtcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWw6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgQHRvcmNoLXJlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVsOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgQHRvcmNoLXJlZDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 45234:
/*!*************************************************************************************************!*\
  !*** ./src/profile/updateBillingInformation/removePaymentModal/removePaymentModal.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemovePaymentModalComponent": () => (/* binding */ RemovePaymentModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 51111);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var cms_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cms/services */ 46693);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../validation/errorMessages/errorMessages.component */ 65316);
/* harmony import */ var _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../validation/errorMessages/errorMessage.component */ 79636);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/ui/modals/actionButtons/actionButtons.component */ 65380);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/safeHtml.pipe */ 49985);
/* harmony import */ var _pipes_cardType_cardType_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/cardType/cardType.pipe */ 3036);
/* harmony import */ var _pipes_paymentMasking_creditCardMask_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/paymentMasking/creditCardMask.pipe */ 83955);
/* harmony import */ var _pipes_paymentMasking_bankAccountMask_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pipes/paymentMasking/bankAccountMask.pipe */ 10686);



















const _c0 = ["group"];
function RemovePaymentModalComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "safeHtml");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, ctx_r2.cmsContent.MainContent), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function RemovePaymentModalComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "safeHtml");
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, ctx_r3.cmsContent.MainContent), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function RemovePaymentModalComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "safeHtml");
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, ctx_r4.cmsContent.removeFlexPay), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function RemovePaymentModalComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "safeHtml");
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, ctx_r10.cmsContent.NewPrimaryContent), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function RemovePaymentModalComponent_div_14_label_6_span_5_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function RemovePaymentModalComponent_div_14_label_6_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 21)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "cardType");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "maskCreditCard");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, RemovePaymentModalComponent_div_14_label_6_span_5_span_11_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const paymentMethod_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r14.getIconImage(paymentMethod_r12), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 4, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 6, paymentMethod_r12.credit.cardCode)), "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](10, 8, paymentMethod_r12.credit.cardNbr, paymentMethod_r12.credit.cardCode), "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", paymentMethod_r12.credit.primary);
} }
function RemovePaymentModalComponent_div_14_label_6_span_6_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function RemovePaymentModalComponent_div_14_label_6_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 21)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Bank Account\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "maskBankAccount");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, RemovePaymentModalComponent_div_14_label_6_span_6_span_9_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const paymentMethod_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r15.getIconImage(paymentMethod_r12), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 3, paymentMethod_r12.eft.accountNumber), "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", paymentMethod_r12.eft.primary);
} }
const _c1 = function (a0) { return { "selected": a0 }; };
const _c2 = function () { return { "required": true }; };
const _c3 = function () { return {}; };
function RemovePaymentModalComponent_div_14_label_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "label", 18)(1, "error-messages", 14)(2, "error-message", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function RemovePaymentModalComponent_div_14_label_6_Template_input_ngModelChange_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21); const paymentMethod_r12 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r20.paymentMethodChanged(paymentMethod_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, RemovePaymentModalComponent_div_14_label_6_span_5_Template, 12, 11, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, RemovePaymentModalComponent_div_14_label_6_span_6_Template, 10, 5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const paymentMethod_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("for", "otherMethods_id" + i_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitch", paymentMethod_r12.billingType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](10, _c1, ctx_r11.selectedPaymentMethod === paymentMethod_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("errors", _r1.invalid ? _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](12, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](13, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("id", "otherMethods_id" + i_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r11.selectedPaymentMethod)("value", paymentMethod_r12)("required", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", ctx_r11.BillingType.Credit);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", ctx_r11.BillingType.Eft);
} }
function RemovePaymentModalComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, RemovePaymentModalComponent_div_14_div_1_Template, 2, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 13)(3, "error-messages", 14)(4, "error-message", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, RemovePaymentModalComponent_div_14_label_6_Template, 7, 14, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r5.cmsContent.isOnlyPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("errors", _r1.invalid ? _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](3, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](4, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r5.otherMethods);
} }
function RemovePaymentModalComponent_div_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r22.cmsContent.CancelBtn);
} }
function RemovePaymentModalComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 26)(1, "action-buttons", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("main", function RemovePaymentModalComponent_div_15_Template_action_buttons_main_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r23.acceptButtonClick(); })("alt", function RemovePaymentModalComponent_div_15_Template_action_buttons_alt_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r25.cancelButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, RemovePaymentModalComponent_div_15_span_2_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("direction", "column")("directionLtMd", "column")("reverseOrder", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.cmsContent.CancelBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r6.cmsContent.NonPrimaryAcceptBtn);
} }
function RemovePaymentModalComponent_div_16_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r26.cmsContent.CancelBtn);
} }
function RemovePaymentModalComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 26)(1, "action-buttons", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("main", function RemovePaymentModalComponent_div_16_Template_action_buttons_main_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r27.acceptButtonClick(); })("alt", function RemovePaymentModalComponent_div_16_Template_action_buttons_alt_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r29.cancelButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, RemovePaymentModalComponent_div_16_span_2_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("direction", "column")("directionLtMd", "column")("reverseOrder", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.cmsContent.CancelBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r7.cmsContent.PrimaryAcceptBtn);
} }
function RemovePaymentModalComponent_div_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r30.cmsContent.CancelBtn);
} }
function RemovePaymentModalComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 26)(1, "action-buttons", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("main", function RemovePaymentModalComponent_div_17_Template_action_buttons_main_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r31.acceptButtonClick(); })("alt", function RemovePaymentModalComponent_div_17_Template_action_buttons_alt_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r33.cancelButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, RemovePaymentModalComponent_div_17_span_2_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("direction", "column")("directionLtMd", "column")("reverseOrder", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.cmsContent.CancelBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r8.cmsContent.ConfirmBtn);
} }
function RemovePaymentModalComponent_div_18_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r34.cmsContent.CancelBtn);
} }
function RemovePaymentModalComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 26)(1, "action-buttons", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("main", function RemovePaymentModalComponent_div_18_Template_action_buttons_main_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r35.acceptButtonClick(); })("alt", function RemovePaymentModalComponent_div_18_Template_action_buttons_alt_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r37.cancelButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, RemovePaymentModalComponent_div_18_span_2_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("direction", "column")("directionLtMd", "column")("reverseOrder", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.cmsContent.CancelBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r9.cmsContent.NonPrimaryAcceptBtn);
} }
class RemovePaymentModalComponent {
    constructor(cmsUtilService, dialogRef, injectedData) {
        this.cmsUtilService = cmsUtilService;
        this.dialogRef = dialogRef;
        this.injectedData = injectedData;
        this.BillingType = common_models__WEBPACK_IMPORTED_MODULE_0__.BillingType;
        this.results = {};
        this.getIconImage = (paymentMethod) => {
            if (!this.paymentMethodImages) {
                return '';
            }
            const iconDict = this.paymentMethodImages.Children.reduce((acc, curr) => ({ ...acc, [curr.ItemName]: curr.Image }), {});
            const childName = this.getPaymentType(paymentMethod);
            return this.cmsUtilService.generateFileSrc(iconDict[childName] || '');
        };
    }
    ngOnInit() {
        this.cmsContent = this.injectedData.cmsContent;
        this.otherMethods = this.cmsContent.otherMethods;
        this.isPrimaryMethod = this.cmsContent.isPrimary;
        this.showNewPrimarySelect = false;
        this.paymentMethodImages = this.cmsContent.paymentMethodImages;
    }
    acceptButtonClick() {
        if (this.isPrimaryMethod && !this.cmsContent.isOnlyPayment) {
            this.results.newPrimaryMethod = this.selectedPaymentMethod;
            this.results.isRemoveOnly = false;
            this.results.optOut = false;
        }
        else if (this.cmsContent.isOnlyPayment && this.cmsContent.isOptIn && this.cmsContent.isFlexPay) {
            this.results.isRemoveOnly = false;
            this.results.optOut = true;
        }
        else {
            this.results.isRemoveOnly = true;
            this.results.optOut = false;
        }
        this.dialogRef.close(this.results);
    }
    cancelButtonClick() {
        this.dialogRef.close(false);
    }
    paymentMethodChanged(newSelection) {
        this.selectedPaymentMethod = newSelection;
    }
    getPaymentType(paymentMethod) {
        const cardCodes = {
            a: 'AMEX',
            m: 'MasterCard',
            d: 'Discover',
            v: 'Visa'
        };
        return paymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_0__.BillingType.Eft
            ? 'Bank'
            : cardCodes[(paymentMethod.credit.cardCode || '').toLowerCase()] || '';
    }
}
RemovePaymentModalComponent.ɵfac = function RemovePaymentModalComponent_Factory(t) { return new (t || RemovePaymentModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_1__.CmsUtilService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA)); };
RemovePaymentModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: RemovePaymentModalComponent, selectors: [["remove-payment-modal-component"]], viewQuery: function RemovePaymentModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.group = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([], [
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ControlContainer, useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm }
        ])], decls: 19, vars: 10, consts: [["validation-focus", "", "name", "removePaymentForm"], ["RemovePaymentForm", "ngForm"], ["id", "modal-popup", 1, "refresh-2020", 2, "position", "relative", 3, "ngModelGroup"], ["group", "ngModelGroup"], ["fxLayout", "column", "ngClass.lt-md", "mobile-style", "ngClass", "desktop-style"], ["fxLayout", "column", "fxLayoutAlign", "center center"], [1, "u-spacing__divider--marginTopBottom"], ["fxLayout", "row", "fxLayoutAlign", "center center"], [3, "innerHtml", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", "class", "u-spacing__buttonToField--marginTop", 4, "ngIf"], [3, "innerHtml"], ["style", "padding-top:25px;", 3, "innerHtml", 4, "ngIf"], [2, "padding-top", "10px"], [3, "errors"], ["rule", "required"], ["fxLayout", "row", "fxLayoutAlign", "start center", 3, "for", "ngSwitch", "ngClass", 4, "ngFor", "ngForOf"], [2, "padding-top", "25px", 3, "innerHtml"], ["fxLayout", "row", "fxLayoutAlign", "start center", 3, "for", "ngSwitch", "ngClass"], ["type", "radio", "name", "selectedPaymentMethod", 3, "id", "ngModel", "value", "required", "ngModelChange"], ["fxFlex", "", "fxLayout", "row", 4, "ngSwitchCase"], ["fxFlex", "", "fxLayout", "row"], [3, "src"], ["translation-skip", ""], ["class", "isPrimary", 4, "ngIf"], [1, "isPrimary"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "u-spacing__buttonToField--marginTop"], [3, "direction", "directionLtMd", "reverseOrder", "main", "alt"], ["action-alt", "", 4, "ngIf"], ["action-main", ""], ["action-alt", ""]], template: function RemovePaymentModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 0, 1)(2, "main", 2, 3)(4, "section", 4)(5, "div", 5)(6, "header", 5)(7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, RemovePaymentModalComponent_div_11_Template, 2, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, RemovePaymentModalComponent_div_12_Template, 2, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, RemovePaymentModalComponent_div_13_Template, 2, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, RemovePaymentModalComponent_div_14_Template, 7, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, RemovePaymentModalComponent_div_15_Template, 5, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, RemovePaymentModalComponent_div_16_Template, 5, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, RemovePaymentModalComponent_div_17_Template, 5, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, RemovePaymentModalComponent_div_18_Template, 5, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModelGroup", "otherMethods");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.cmsContent.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.cmsContent.isOnlyPayment);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.cmsContent.isOnlyPayment && !ctx.cmsContent.isOptIn && ctx.cmsContent.isFlexPay);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.cmsContent.isOnlyPayment && ctx.cmsContent.isFlexPay && ctx.cmsContent.isOptIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isPrimaryMethod && !ctx.cmsContent.isOnlyPayment);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isPrimaryMethod && !ctx.cmsContent.isOnlyPayment);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isPrimaryMethod && !ctx.cmsContent.isOnlyPayment);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.cmsContent.isOnlyPayment && ctx.cmsContent.isFlexPay && ctx.cmsContent.isOptIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.cmsContent.isOnlyPayment && ctx.cmsContent.isFlexPay && !ctx.cmsContent.isOptIn);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_2__.FocusDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModelGroup, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_3__.ErrorMessagesComponent, _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_4__.ErrorMessageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitch, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitchCase, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_5__.ActionButtonsComponent], pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_6__.SafeHtmlPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.UpperCasePipe, _pipes_cardType_cardType_pipe__WEBPACK_IMPORTED_MODULE_7__.CardTypePipe, _pipes_paymentMasking_creditCardMask_pipe__WEBPACK_IMPORTED_MODULE_8__.CreditCardMaskPipe, _pipes_paymentMasking_bankAccountMask_pipe__WEBPACK_IMPORTED_MODULE_9__.BankAccountMaskPipe], styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   .mobile-style[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 45px 35px;\n}\n[_nghost-%COMP%]   .desktop-style[_ngcontent-%COMP%] {\n  min-width: 700px;\n  max-width: 700px;\n  padding: 32px 20px;\n}\n[_nghost-%COMP%]   label[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 100%;\n  margin: 0px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 26px;\n}\n[_nghost-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .isPrimary[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 64px;\n  height: 18px;\n  font-size: 8px;\n  line-height: 18px;\n  text-align: center;\n  background-color: #ffdd09;\n  text-transform: uppercase;\n  margin: 4px;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  margin: 0px 10px 0px 8px;\n}\n[_nghost-%COMP%]   .has-error[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  border-left: 1px solid #fc2125;\n  border-right: 1px solid #fc2125;\n}\n[_nghost-%COMP%]   .has-error[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-of-type {\n  border-top: 1px solid #fc2125;\n}\n[_nghost-%COMP%]   .has-error[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: 1px solid #fc2125;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbW92ZVBheW1lbnRNb2RhbC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRVEsV0FBQTtBQUZSO0FBQUE7RUFNUSxrQkFBQTtBQUhSO0FBSEE7RUFVUSxXQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQVBBO0VBZVEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTFI7QUFaQTtFQXFCUSxZQUFBO0VBQ0EsV0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQVBSO0FBbEJBO0VBNkJRLGVBQUE7QUFSUjtBQXJCQTtFQWlDUSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBVFI7QUEzQkE7RUF3Q1EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFWUjtBQXRDQTtFQW9EUSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBWFI7QUEzQ0E7RUEyRFksOEJBQUE7RUFDQSwrQkFBQTtBQWJaO0FBL0NBO0VBZ0VZLDZCQUFBO0FBZFo7QUFsREE7RUFvRVksZ0NBQUE7QUFmWiIsImZpbGUiOiJyZW1vdmVQYXltZW50TW9kYWwubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG5cbiAgICBzZWN0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5tb2JpbGUtc3R5bGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogNDVweCAzNXB4O1xuICAgIH1cblxuICAgIC5kZXNrdG9wLXN0eWxlIHtcbiAgICAgICAgbWluLXdpZHRoOiA3MDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgICAgcGFkZGluZzogMzJweCAyMHB4O1xuICAgIH1cblxuICAgIGxhYmVsIHtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxuXG4gICAgbGFiZWw6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgbGFiZWwgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIH1cblxuICAgIGxhYmVsIHNwYW4gLmlzUHJpbWFyeSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBzY2hvb2wtYnVzLXllbGxvdztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luOiA0cHg7XG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogMTNweDtcbiAgICAgICAgaGVpZ2h0OiAxM3B4O1xuICAgICAgICBtYXJnaW46IDBweCAxMHB4IDBweCA4cHg7XG4gICAgfVxuXG4gICAgLmhhcy1lcnJvciB7XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgQHRvcmNoLXJlZDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIEB0b3JjaC1yZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBsYWJlbDpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBAdG9yY2gtcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWw6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBAdG9yY2gtcmVkO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 15047:
/*!************************************************************************************!*\
  !*** ./src/profile/updateBillingInformation/updateBillingInformation.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateBillingInformationComponent": () => (/* binding */ UpdateBillingInformationComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var common_ui_modals_billingModal_billingModal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/ui/modals/billingModal/billingModal.component */ 37882);
/* harmony import */ var _rebillOptInModal_rebillOptInModal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rebillOptInModal/rebillOptInModal.component */ 87626);
/* harmony import */ var profile_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! profile/constants */ 30129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../storefront/services/storefrontUtility.service */ 18011);
/* harmony import */ var _storefront_services_storefront_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../storefront/services/storefront.service */ 77526);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @uirouter/angular */ 7199);












function UpdateBillingInformationComponent_section_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 18)(1, "payment-methods-component", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("reloadGrid", function UpdateBillingInformationComponent_section_20_Template_payment_methods_component_reloadGrid_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r8.loadGrid();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const paymentMethod_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("myIndex", i_r6)("paymentMethod", paymentMethod_r5)("paymentMethodImages", ctx_r0.paymentMethodImages)("isSelected", ctx_r0.isSelected(i_r6, ctx_r0.selectedIndex))("isBlocked", ctx_r0.isBlockedPaymentMethod(paymentMethod_r5))("animationState", ctx_r0.toggleAnimation(i_r6, ctx_r0.selectedIndex))("expiringTooltip", ctx_r0.billingCMS.ExpiringTooltip)("expiredTooltip", ctx_r0.billingCMS.ExpiredTooltip)("removeCMS", ctx_r0.cmsContent.Children[0])("removeOnlyCMS", ctx_r0.cmsContent.Children[1])("stateList", ctx_r0.stateList)("countryList", ctx_r0.countryList)("isOnlyPayment", ctx_r0.isOnlyPayment)("makePrimaryCMS", ctx_r0.cmsContent.Children[3]);
  }
}

function UpdateBillingInformationComponent_section_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 21)(1, "fx-row")(2, "section", 22)(3, "section", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.cmsContent.NO_DATA_TITLE);
  }
}

function UpdateBillingInformationComponent_section_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function UpdateBillingInformationComponent_section_22_Template_section_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r10.openEditBillingModal();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.addPayment);
  }
}

function UpdateBillingInformationComponent_div_23_section_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 18)(1, "payment-methods-component", 29, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("reloadGrid", function UpdateBillingInformationComponent_div_23_section_18_Template_payment_methods_component_reloadGrid_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return ctx_r16.loadGrid();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const blockedPaymentMethod_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("myIndex", i_r14)("animationState", ctx_r12.toggleAnimation(i_r14, ctx_r12.selectedIndexBlocked))("paymentMethod", blockedPaymentMethod_r13)("paymentMethodImages", ctx_r12.paymentMethodImages)("isSelected", ctx_r12.isSelected(i_r14, ctx_r12.selectedIndexBlocked))("isBlocked", ctx_r12.isBlockedPaymentMethod(blockedPaymentMethod_r13))("blockedTooltip", ctx_r12.billingCMS.LongDescription)("unblockCMS", ctx_r12.cmsContent.Children[2])("removeCMS", ctx_r12.cmsContent.Children[0])("removeOnlyCMS", ctx_r12.cmsContent.Children[1])("stateList", ctx_r12.stateList)("countryList", ctx_r12.countryList)("activeCreditSlots", ctx_r12.activeCreditSlots)("activeEFTSlots", ctx_r12.activeEFTSlots);
  }
}

const _c0 = function () {
  return {
    "hidden": true
  };
};

function UpdateBillingInformationComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "card-container")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "mat-divider", 2)(5, "article", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "section", 4)(7, "div", 5)(8, "section", 6)(9, "fx-row", 7)(10, "section", 8)(11, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "PAYMENT METHOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "mat-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "EXPIRES");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "section", 11)(16, "mat-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, UpdateBillingInformationComponent_div_23_section_18_Template, 3, 14, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r3.cmsContent.BLOCKED_TITLE);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHtml", ctx_r3.cmsContent.BLOCKED_DESC, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLabel", true)("backgroundColorClass", "transparent-background");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r3.blockedPaymentMethods);
  }
}

function UpdateBillingInformationComponent_section_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 30)(1, "action-buttons", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("main", function UpdateBillingInformationComponent_section_24_Template_action_buttons_main_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20);

      const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](5);

      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r19.proceed(_r18);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "PROCEED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "wizard-ui", null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

class UpdateBillingInformationComponent {
  constructor(manageBillingInformationService, dialogService, billingDataService, storefrontUtilityService, storefrontService, accountService, currentUserService, state) {
    this.manageBillingInformationService = manageBillingInformationService;
    this.dialogService = dialogService;
    this.billingDataService = billingDataService;
    this.storefrontUtilityService = storefrontUtilityService;
    this.storefrontService = storefrontService;
    this.accountService = accountService;
    this.currentUserService = currentUserService;
    this.state = state;
    this.paymentMethods = [];
    this.blockedPaymentMethods = [];
    this.isNoData = false;
    this.existingPaymentCount = 0;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isKiosk = _this.storefrontUtilityService.isRunningAsKiosk && !_this.storefrontUtilityService.webStoreData.fullSiteMode;
      _this.selectedIndex = -1;
      _this.selectedIndexBlocked = -1;

      _this.loadGrid();
    })();
  }

  loadGrid() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b;

      _this2.setUserData();

      const savedPaymentMethods = yield _this2.accountService.getAllPaymentMethods();
      _this2.existingPaymentCount = ((_a = savedPaymentMethods.bankAccounts) === null || _a === void 0 ? void 0 : _a.length) + ((_b = savedPaymentMethods.creditCards) === null || _b === void 0 ? void 0 : _b.length); //maxCards and maxEfts subtract blocked payment methods when they shouldn't.
      //is this a bug for ETC?

      _this2.maxCards = 2; //savedPaymentMethods.maxCards;

      _this2.maxEft = 1; //savedPaymentMethods.maxEfts;

      _this2.paymentMethods = [...(savedPaymentMethods.bankAccounts || []).filter(x => x).map(eft => ({
        billingType: common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft,
        primary: eft.primary || false,
        eft
      })), ...(savedPaymentMethods.creditCards || []).filter(x => x).map(credit => ({
        billingType: common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit,
        primary: credit.primary || false,
        credit
      }))];

      if (_this2.paymentMethods === null) {
        _this2.isNoData = true;
      } else {
        _this2.isNoData = _this2.paymentMethods.length > 0 ? false : true;
      }

      _this2.openEFTSlots = _this2.maxEft - _this2.paymentMethods.filter(x => x.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft).length;
      _this2.openCreditSlots = _this2.maxCards - _this2.paymentMethods.filter(x => x.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit).length;
      _this2.blockedPaymentMethods = _this2.paymentMethods.filter(_this2.isBlockedPaymentMethod).sort((a, b) => _this2.getRank(b) - _this2.getRank(a));
      _this2.paymentMethods = _this2.paymentMethods.filter(p => !_this2.isBlockedPaymentMethod(p)).sort((a, b) => _this2.getRank(b) - _this2.getRank(a));
      _this2.isOnlyPayment = _this2.paymentMethods.length === 1;
      _this2.activeEFTSlots = _this2.maxEft - _this2.paymentMethods.filter(x => x.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft).length;
      _this2.activeCreditSlots = _this2.maxCards - _this2.paymentMethods.filter(x => x.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit).length;

      if (_this2.openEFTSlots === 0 && _this2.openCreditSlots === 0) {
        _this2.showAddPayment = false;
      } else if (_this2.openEFTSlots === 0 && _this2.openCreditSlots > 0) {
        _this2.addPayment = _this2.cmsContent.ADD_MODAL_CARD; //'Add a new card';

        _this2.showAddPayment = true;
      } else if (_this2.openEFTSlots === 1 && _this2.openCreditSlots === 0) {
        _this2.addPayment = _this2.cmsContent.ADD_MODAL_EFT; //'Add Bank Account';

        _this2.showAddPayment = true;
      } else if (_this2.openEFTSlots === 1 && _this2.openCreditSlots > 0) {
        _this2.addPayment = _this2.cmsContent.ADD_MODAL_ALL; //'Add a new Payment Method';

        _this2.showAddPayment = true;
      }
    })();
  }

  setUserData() {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.currentUser = yield _this3.currentUserService.getCurrentUser();
      _this3.isOptIn = _this3.currentUser.rebillOptIn;
      _this3.isFlexPay = _this3.currentUser.isFlexPay;
    })();
  }

  isBlockedPaymentMethod(input) {
    if (input.credit) {
      return input.credit.isBlocked;
    } else {
      return input.eft.isBlocked;
    }
  }

  isSelected(index, selectedIndex) {
    if (index === selectedIndex && selectedIndex >= 0) {
      return true;
    } else {
      return false;
    }
  }

  toggleAnimation(index, selectedIndex) {
    if (index === selectedIndex && selectedIndex >= 0) {
      return 'default';
    } else {
      return 'rotated';
    }
  }

  getRank(paymentMethod) {
    let rank = 0;
    rank += paymentMethod.primary ? 4 : 0;
    rank += paymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit ? 2 : 1;
    return rank;
  }

  openEditBillingModal() {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      const openEftSlots = _this4.openEFTSlots;
      const openCardSlots = _this4.openCreditSlots;
      const thisLockType = openEftSlots === 0 || openCardSlots === 0 ? true : false;
      let openBillingType = null;

      if (openEftSlots === 0) {
        openBillingType = common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit;
      } else if (openCardSlots === 0) {
        openBillingType = common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft;
      }

      const newBillingInfo = {
        credit: {},
        eft: {},
        billingType: openBillingType
      }; //if this needs to be either just EFT or just Credit, locktype needs to be passed to paymentmethod inside modal
      //and injection billing type needs to be set to just necessary type

      const data = {
        billingInformation: newBillingInfo,
        billingType: openBillingType,
        stateList: _this4.stateList,
        countryList: _this4.countryList,
        lockType: thisLockType,
        hideForEFT: true,
        shouldForcePrimarySelection: _this4.existingPaymentCount === 0,
        paymentMethodAvailability: {
          openCardSlots,
          openEftSlots
        },
        uiOptions: {
          //the add button is only shown if there's an open slot
          // so, showMakePrimary can always be true
          showMakePrimary: true
        }
      };
      const result = yield _this4.dialogService.openSliderCentered(common_ui_modals_billingModal_billingModal_component__WEBPACK_IMPORTED_MODULE_3__.BillingModalComponent, data, {
        title: _this4.addPayment
      });

      if (result) {
        //then call the add payment method api and call api to get new list of payment methods
        const newPaymentMethod = { ...result.billingInformation,
          billingType: result.billingType,
          newMethodAdded: true,
          makePrimary: (_a = result.uiResults) === null || _a === void 0 ? void 0 : _a.makePrimary //this is true if the Make Primary checkbox was checked

        };

        if (newPaymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit) {
          newPaymentMethod.eft = null;
        } else if (newPaymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft) {
          newPaymentMethod.credit = null;
        }

        const errors = yield _this4.billingDataService.updatePaymentInfo('a', newPaymentMethod);

        if (errors.length === 0 && _this4.isOptIn || errors.length === 0 && !_this4.isOptIn && !_this4.isFlexPay) {
          const modalData = {
            cmsContent: {
              Title: _this4.cmsContent.SUCCESS_TITLE,
              AcceptBtn: _this4.cmsContent.SUCCESS_BUTTON,
              PrimaryContent: _this4.cmsContent.SUCCESS_DESC
            }
          };
          yield _this4.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_2__.GenericCmsModalComponent, modalData);
        }

        _this4.manageBillingInformationService.billingInformation = {
          selected: null,
          allPaymentContainers: null
        };
        yield _this4.manageBillingInformationService.refreshBillingInfo([]);

        if (errors.length === 0 && !_this4.isOptIn && _this4.isFlexPay) {
          const optIn = yield _this4.dialogService.openGenericModal(_rebillOptInModal_rebillOptInModal_component__WEBPACK_IMPORTED_MODULE_4__.RebillOptInModalComponent, _this4.optInCMS);

          if (optIn) {
            if (!_this4.storefrontUtilityService.isRunningAsKiosk || _this4.storefrontUtilityService.isRunningAsKiosk && _this4.storefrontUtilityService.webStoreData.fullSiteMode) {
              _this4.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_5__.stateNames.UpdateReplenishmentAmount);
            }

            if (_this4.storefrontUtilityService.isRunningAsKiosk && !_this4.storefrontUtilityService.webStoreData.fullSiteMode) {
              _this4.storefrontService.startDesktopMode(true);

              yield _this4.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_5__.stateNames.UpdateReplenishmentAmount);
            }
          }
        }

        _this4.loadGrid();
      }
    })();
  }

  proceed(wizardUi) {
    if (this.isKiosk && wizardUi) {
      wizardUi.gotoNextState();
      return;
    }
  }

}

UpdateBillingInformationComponent.ɵfac = function UpdateBillingInformationComponent_Factory(t) {
  return new (t || UpdateBillingInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.ManageBillingService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.BillingDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_7__.StorefrontUtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_storefront_services_storefront_service__WEBPACK_IMPORTED_MODULE_8__.StorefrontService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.CurrentUserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_10__.StateService));
};

UpdateBillingInformationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: UpdateBillingInformationComponent,
  selectors: [["update-billing-information"]],
  inputs: {
    cmsContent: "cmsContent",
    billingCMS: "billingCMS",
    optInCMS: "optInCMS",
    stateList: "stateList",
    countryList: "countryList",
    paymentMethodImages: "paymentMethodImages"
  },
  decls: 25,
  vars: 13,
  consts: [["hasAlternateBackgroundColor", "true", 1, "refresh-2020"], [1, "u-spacing__fieldToSection--marginTop"], [1, "u-spacing__divider--marginTopBottom"], [3, "innerHtml"], [1, "u-spacing--widthFill"], ["fxLayout", "row", "fxLayoutAlign", "start start"], [1, "u-spacing--widthFill", "u-spacing__gridToRecords--marginTop", 2, "padding-left", "31px"], [3, "isLabel", "backgroundColorClass"], ["col-start", "", 1, "fx-flex-auto", "fx-layout-row", "fx-layout-align-start-center"], [1, "fx-flex-auto-shrink-more", "limited-flex"], [1, "fx-flex-auto-shrink-more", "limited-flex", 2, "padding-left", "135px", 3, "ngClass.lt-md"], ["col-end", "", 1, "fx-flex-none", "fx-layout-row", "fx-layout-align-end-center"], [1, "fx-flex-auto", "limited-flex-end", 2, "padding-right", "5px"], ["fxLayout", "row", "fxLayoutAlign", "start start", "class", "u-spacing--widthFill", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "center center", "class", "u-spacing--widthFill", 4, "ngIf"], ["class", "u-spacing__fieldToSection--marginTop", "fxLayout", "row", "fxLayoutAlign", "center center", 3, "click", 4, "ngIf"], ["class", "u-spacing__fieldToSection--marginTop", 4, "ngIf"], ["class", "u-spacing__buttonToField--marginTop", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start start", 1, "u-spacing--widthFill"], [3, "myIndex", "paymentMethod", "paymentMethodImages", "isSelected", "isBlocked", "animationState", "expiringTooltip", "expiredTooltip", "removeCMS", "removeOnlyCMS", "stateList", "countryList", "isOnlyPayment", "makePrimaryCMS", "reloadGrid"], ["PaymentSelection", ""], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "u-spacing--widthFill"], ["col-start", "", "fxFlex", "grow"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "noDataContent"], ["svgIcon", "cc-icon", 1, "noDataIcon"], [1, "noDataCMS", 2, "text-align", "center"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "u-spacing__fieldToSection--marginTop", 3, "click"], ["svgIcon", "add-icon"], ["fxFlexOffset", "6px", 1, "add-text"], [3, "myIndex", "animationState", "paymentMethod", "paymentMethodImages", "isSelected", "isBlocked", "blockedTooltip", "unblockCMS", "removeCMS", "removeOnlyCMS", "stateList", "countryList", "activeCreditSlots", "activeEFTSlots", "reloadGrid"], [1, "u-spacing__buttonToField--marginTop"], [3, "main"], ["action-main", ""], ["wizardUi", ""]],
  template: function UpdateBillingInformationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "div", 1)(2, "card-container")(3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "mat-divider", 2)(6, "article", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "section", 4)(9, "div", 5)(10, "section", 6)(11, "fx-row", 7)(12, "section", 8)(13, "mat-label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "PAYMENT METHOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "mat-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "EXPIRES");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "section", 11)(18, "mat-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "STATUS");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, UpdateBillingInformationComponent_section_20_Template, 3, 14, "section", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, UpdateBillingInformationComponent_section_21_Template, 7, 1, "section", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, UpdateBillingInformationComponent_section_22_Template, 4, 1, "section", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, UpdateBillingInformationComponent_div_23_Template, 19, 7, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, UpdateBillingInformationComponent_section_24_Template, 6, 0, "section", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.cmsContent.PAGE_TITLE);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 10, ctx.cmsContent.LongDescription), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLabel", true)("backgroundColorClass", "transparent-background");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](12, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.paymentMethods);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isNoData);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showAddPayment);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.blockedPaymentMethods.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isKiosk);
    }
  },
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   .noDataIcon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  vertical-align: text-top;\n  margin-right: 8.75px;\n  color: #757575;\n}\n[_nghost-%COMP%]   .noDataCMS[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n[_nghost-%COMP%]   .noDataContent[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcY29tbW9uXFx1aVxcY29udGFpbmVyc1xcZnhSb3dcXGRldGFpbHMubGVzcyIsInVwZGF0ZUJpbGxpbmdJbmZvcm1hdGlvbi5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtBQ0RKO0FEQUE7RUFJUSxhQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREpBO0VBOEVJLGNBQUE7RUFDQSxzQkFBQTtBQ3ZFSjtBRFJBO0VBb0ZJLGNBQUE7RUFDQSxzQkFBQTtBQ3pFSjtBRFpBO0VBeUZJLGNBQUE7RUFDQSxzQkFBQTtBQzFFSjtBRGhCQTtFQThGSSxjQUFBO0VBQ0Esc0JBQUE7QUMzRUo7QURwQkE7RUFtR0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUM1RUo7QUR6QkE7RUF5R0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUM3RUo7QUQ5QkE7RUErR0kscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDOUVKO0FEbkNBO0VBcUhJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQy9FSjtBRHhDQTtFQTBDUSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NSO0FEN0NBO0VBZ0RRLFdBQUE7QUNBUjtBRGhEQTtFQW9EUSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRFI7QUR0REE7RUEyRFEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRlI7QUQ1REE7RUFrRVEsZUFBQTtBQ0hSO0FES1E7RUFDSSxlQUFBO0FDSFo7QUFqRUE7RUFFUSxXQUFBO0FBa0VSO0FBcEVBO0VBTVEsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQWlFUjtBQTNFQTtFQWNRLGVBQUE7QUFnRVI7QUE5RUE7RUFrQlEsaUJBQUE7RUFDQSxvQkFBQTtBQStEUiIsImZpbGUiOiJ1cGRhdGVCaWxsaW5nSW5mb3JtYXRpb24ubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuXG5cbiAgICAuZngtZmxleC1hdXRvIHtcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1mbGV4LW5vbmUge1xuICAgICAgICAuZngtZmxleC1ub25lLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZSB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUtbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtZmxleC1hdXRvLWdyb3ctbW9yZSB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1yb3cge1xuICAgICAgICAuZngtbGF5b3V0LXJvdy1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtY29sdW1uIHtcbiAgICAgICAgLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlciB7XG4gICAgICAgIC5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyIHtcbiAgICAgICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmxpbWl0ZWQtZmxleCB7XG4gICAgICAgIG1pbi13aWR0aDogMTcwcHg7XG4gICAgICAgIG1heC13aWR0aDogNTMwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC51bmxpbWl0ZWQtZmxleCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5saW1pdGVkLWZsZXgtZW5kIHtcbiAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxuXG4gICAgLmxhcmdlci1saW1pdGVkLWZsZXgtZW5kIHtcbiAgICAgICAgbWluLXdpZHRoOiAxNDNweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxNDVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG5cbiAgICAudGFibGUtc3BhY2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICAgICAgJi5sdC1tZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBNaXhpbnMgdG8gYXBwZWFzZSBwZXJmb3JtYW5jZVxuLmZ4LWZsZXgtYXV0by1taXhpbigpIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1ub25lLW1peGluKCkge1xuICAgIC8vIGxlc3NoaW50LWRpc2FibGUtbmV4dC1saW5lIHplcm9Vbml0XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZS1taXhpbigpIHtcbiAgICBmbGV4OiAxIDIgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1hdXRvLWdyb3ctbW9yZS1taXhpbigpIHtcbiAgICBmbGV4OiAyIDEgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtbGF5b3V0LXJvdy1taXhpbigpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAnY29tbW9uL3VpL2NvbnRhaW5lcnMvZnhSb3cvZGV0YWlscy5sZXNzJztcblxuOmhvc3Qge1xuICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xuICAgIH1cblxuICAgIC5ub0RhdGFJY29uIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDguNzVweDtcbiAgICAgICAgY29sb3I6IEBib3VsZGVyLWdyYXk7XG4gICAgfVxuXG4gICAgLm5vRGF0YUNNUyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAubm9EYXRhQ29udGVudCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 45969:
/*!************************************************************************************!*\
  !*** ./src/profile/updateContactInformation/updateContactInformation.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateContactInformationComponent": () => (/* binding */ UpdateContactInformationComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var profile_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! profile/constants */ 30129);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var common_upgrades__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/upgrades */ 41034);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ 7370);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var profile_services_webApis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! profile/services/webApis.service */ 60629);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var pipes_phoneNumber_phoneNumber_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pipes/phoneNumber/phoneNumber.pipe */ 78794);
/* harmony import */ var _storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../storefront/services/storefrontUtility.service */ 18011);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_form_entry_emailAddress_emailAddress_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/form-entry/emailAddress/emailAddress.component */ 37864);
/* harmony import */ var _shared_ui_form_entry_phone_number_components_phone_number_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/ui/form-entry/phone-number/components/phone-number.component */ 22754);
/* harmony import */ var _shared_ui_form_entry_checkbox_components_checkbox_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/ui/form-entry/checkbox/components/checkbox.component */ 83799);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _common_ui_form_entry_address_addressEntry_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/ui/form-entry/address/addressEntry.component */ 54608);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/ui/modals/actionButtons/actionButtons.component */ 65380);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../pipes/safeHtml.pipe */ 49985);



























function UpdateContactInformationComponent_card_container_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r5.cmsContent.EmailAddressDesc);
  }
}

function UpdateContactInformationComponent_card_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "card-container", 8)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "mat-divider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, UpdateContactInformationComponent_card_container_3_span_4_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "section", 11)(6, "email-address", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("emailAddressChange", function UpdateContactInformationComponent_card_container_3_Template_email_address_emailAddressChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r6.fullContactInfo.contactInfo.emailAddress = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "section", 13)(8, "email-address", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("emailAddressChange", function UpdateContactInformationComponent_card_container_3_Template_email_address_emailAddressChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r8.fullContactInfo.contactInfo.altEmailAddress = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.cmsContent.EmailAddressTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.syncRiteToggles == null ? null : ctx_r1.syncRiteToggles.MasterToggle);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵclassProp"]("u-spacing__fieldToSection--marginTop", ctx_r1.syncRiteToggles == null ? null : ctx_r1.syncRiteToggles.MasterToggle);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("emailAddress", ctx_r1.fullContactInfo.contactInfo.emailAddress)("header", ctx_r1.cmsContent.EmailAddressHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("emailAddress", ctx_r1.fullContactInfo.contactInfo.altEmailAddress)("header", ctx_r1.cmsContent.AltEmailAddressHeader)("required", false);
  }
}

function UpdateContactInformationComponent_card_container_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r9.cmsContent.PhoneNumberDesc);
  }
}

function UpdateContactInformationComponent_card_container_4_shared_checkbox_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "shared-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("checkboxChange", function UpdateContactInformationComponent_card_container_4_shared_checkbox_8_Template_shared_checkbox_checkboxChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r14.fullContactInfo.contactInfo.smsAlertsOptIn = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("checkbox", ctx_r10.fullContactInfo.contactInfo.smsAlertsOptIn)("desc", ctx_r10.cmsContent.PhoneAlertsOptInDesc);
  }
}

function UpdateContactInformationComponent_card_container_4_section_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section", 13)(1, "shared-phone-number", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("phoneNumberChange", function UpdateContactInformationComponent_card_container_4_section_9_Template_shared_phone_number_phoneNumberChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r16.fullContactInfo.contactInfo.altPhoneNumber = $event;
    })("phoneNumberExtChange", function UpdateContactInformationComponent_card_container_4_section_9_Template_shared_phone_number_phoneNumberExtChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r18.fullContactInfo.contactInfo.altPhoneNumberExt = $event;
    })("trashClicked", function UpdateContactInformationComponent_card_container_4_section_9_Template_shared_phone_number_trashClicked_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r17);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r19.deleteFirstAltPhone();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("required", false)("showPhoneNumberExt", ctx_r11.syncRiteToggles == null ? null : ctx_r11.syncRiteToggles.SyncRitePhoneExt)("showTrashIcon", ctx_r11.syncRiteToggles == null ? null : ctx_r11.syncRiteToggles.MasterToggle)("phoneNumberHeader", ctx_r11.cmsContent.AltPhoneNumberHeader)("phoneNumberExtHeader", ctx_r11.cmsContent.AltPhoneNumberExtHeader)("phoneNumber", ctx_r11.fullContactInfo.contactInfo.altPhoneNumber)("phoneNumberExt", ctx_r11.fullContactInfo.contactInfo.altPhoneNumberExt);
  }
}

function UpdateContactInformationComponent_card_container_4_section_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section", 13)(1, "shared-phone-number", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("phoneNumberChange", function UpdateContactInformationComponent_card_container_4_section_10_Template_shared_phone_number_phoneNumberChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r20.fullContactInfo.contactInfo.mobilePhoNbr = $event;
    })("phoneNumberExtChange", function UpdateContactInformationComponent_card_container_4_section_10_Template_shared_phone_number_phoneNumberExtChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r22.fullContactInfo.contactInfo.mobilePhoExt = $event;
    })("trashClicked", function UpdateContactInformationComponent_card_container_4_section_10_Template_shared_phone_number_trashClicked_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r21);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r23.deleteSecondAltPhone();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("required", false)("showPhoneNumberExt", ctx_r12.syncRiteToggles == null ? null : ctx_r12.syncRiteToggles.SyncRitePhoneExt)("showTrashIcon", ctx_r12.syncRiteToggles == null ? null : ctx_r12.syncRiteToggles.MasterToggle)("phoneNumberHeader", ctx_r12.cmsContent.AltPhoneNumber2Header)("phoneNumberExtHeader", ctx_r12.cmsContent.AltPhoneNumber2ExtHeader)("phoneNumber", ctx_r12.fullContactInfo.contactInfo.mobilePhoNbr)("phoneNumberExt", ctx_r12.fullContactInfo.contactInfo.mobilePhoExt);
  }
}

function UpdateContactInformationComponent_card_container_4_section_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function UpdateContactInformationComponent_card_container_4_section_11_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r24.onAddAltPhoneNumberClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r13.cmsContent.AddAltPhoneNumberText);
  }
}

function UpdateContactInformationComponent_card_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "card-container", 8)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "mat-divider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, UpdateContactInformationComponent_card_container_4_span_4_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "section", 15)(6, "shared-phone-number", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("phoneNumberChange", function UpdateContactInformationComponent_card_container_4_Template_shared_phone_number_phoneNumberChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r26.fullContactInfo.contactInfo.phoneNumber = $event;
    })("phoneNumberExtChange", function UpdateContactInformationComponent_card_container_4_Template_shared_phone_number_phoneNumberExtChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r28.fullContactInfo.contactInfo.phoneExt = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, UpdateContactInformationComponent_card_container_4_shared_checkbox_8_Template, 1, 2, "shared-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, UpdateContactInformationComponent_card_container_4_section_9_Template, 2, 7, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, UpdateContactInformationComponent_card_container_4_section_10_Template, 2, 7, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, UpdateContactInformationComponent_card_container_4_section_11_Template, 4, 1, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r2.cmsContent.PhoneNumberTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.syncRiteToggles == null ? null : ctx_r2.syncRiteToggles.MasterToggle);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵclassProp"]("u-spacing__fieldToSection--marginTop", ctx_r2.syncRiteToggles == null ? null : ctx_r2.syncRiteToggles.MasterToggle);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("showPhoneNumberExt", ctx_r2.syncRiteToggles == null ? null : ctx_r2.syncRiteToggles.SyncRitePhoneExt)("showTrashIcon", ctx_r2.syncRiteToggles == null ? null : ctx_r2.syncRiteToggles.MasterToggle)("disableTrashIcon", ctx_r2.syncRiteToggles == null ? null : ctx_r2.syncRiteToggles.MasterToggle)("phoneNumberHeader", ctx_r2.cmsContent.PhoneNumberHeader)("phoneNumberExtHeader", ctx_r2.cmsContent.PhoneNumberExtHeader)("phoneNumber", ctx_r2.fullContactInfo.contactInfo.phoneNumber)("phoneNumberExt", ctx_r2.fullContactInfo.contactInfo.phoneExt);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵclassProp"]("u-spacing__fieldToSection--marginTop", ctx_r2.syncRiteToggles == null ? null : ctx_r2.syncRiteToggles.SyncRitePhoneOptIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.syncRiteToggles == null ? null : ctx_r2.syncRiteToggles.SyncRitePhoneOptIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !(ctx_r2.syncRiteToggles == null ? null : ctx_r2.syncRiteToggles.MasterToggle) || ctx_r2.firstAltPhoneState || ctx_r2.fullContactInfo.contactInfo.altPhoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (ctx_r2.syncRiteToggles == null ? null : ctx_r2.syncRiteToggles.MasterToggle) && (ctx_r2.secondAltPhoneState || ctx_r2.fullContactInfo.contactInfo.mobilePhoNbr));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.showAddAltPhoneButton && (!ctx_r2.fullContactInfo.contactInfo.altPhoneNumber || !ctx_r2.fullContactInfo.contactInfo.mobilePhoNbr));
  }
}

function UpdateContactInformationComponent_card_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "card-container", 8)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "mat-divider", 9)(4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "address-entry", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("internationalChange", function UpdateContactInformationComponent_card_container_5_Template_address_entry_internationalChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r29.fullContactInfo.mailingAddress.international = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r3.mailingCmsContent.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 7, ctx_r3.mailingCmsContent.LongDescription), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("stateList", ctx_r3.stateList)("address", ctx_r3.fullContactInfo.mailingAddress)("validate", true)("countryList", ctx_r3.countryList)("international", ctx_r3.fullContactInfo.mailingAddress.international);
  }
}

class UpdateContactInformationComponent {
  constructor(webApi, state, uiRouterGlobals, dialogService, phoneNumberPipe, storefrontUtilityService, accountService, environmentConfig) {
    this.webApi = webApi;
    this.state = state;
    this.uiRouterGlobals = uiRouterGlobals;
    this.dialogService = dialogService;
    this.phoneNumberPipe = phoneNumberPipe;
    this.storefrontUtilityService = storefrontUtilityService;
    this.accountService = accountService;
    this.environmentConfig = environmentConfig;
    this.currentInfo = {};
    this.saveButtonText = 'SAVE';
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.getContactInfo();

      _this.setToggles();

      _this.detectKioskMode();

      _this.cloneContactInfo();
    })();
  }

  getContactInfo() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.fullContactInfo = _this2.uiRouterGlobals.params.personalInfo;

      if (!_this2.fullContactInfo) {
        _this2.fullContactInfo = yield _this2.accountService.getContactInfo();
      }

      _this2.formatPhoneNumber();
    })();
  }

  formatPhoneNumber() {
    this.fullContactInfo.contactInfo.phoneNumber = this.phoneNumberPipe.transform(this.fullContactInfo.contactInfo.phoneNumber);
    this.fullContactInfo.contactInfo.altPhoneNumber = this.phoneNumberPipe.transform(this.fullContactInfo.contactInfo.altPhoneNumber);
    this.fullContactInfo.contactInfo.mobilePhoNbr = this.phoneNumberPipe.transform(this.fullContactInfo.contactInfo.mobilePhoNbr);
  }

  setToggles() {
    this.syncRiteToggles = this.environmentConfig.syncRiteToggles;

    if (this.syncRiteToggles.MasterToggle) {
      this.initAddAltPhoneFlow();
    }
  }

  initAddAltPhoneFlow() {
    // Initialize the states based on if alt phone numbers already exists
    this.firstAltPhoneState = !!this.fullContactInfo.contactInfo.altPhoneNumber;
    this.secondAltPhoneState = !!this.fullContactInfo.contactInfo.mobilePhoNbr;
    this.updateAddAltPhoneButton();
  } // Helper method to update the state of the "Add Alt Phone" button


  updateAddAltPhoneButton() {
    // Hide the "Add Alt Phone" button only if both phone number states are true
    this.showAddAltPhoneButton = !(this.firstAltPhoneState && this.secondAltPhoneState);
  }

  detectKioskMode() {
    this.isKiosk = this.storefrontUtilityService.isRunningAsKiosk && !this.storefrontUtilityService.webStoreData.fullSiteMode;
  } // Method to clone original contact information in currentInfo


  cloneContactInfo() {
    this.currentInfo.contactInfo = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(this.fullContactInfo.contactInfo);

    if (this.isKiosk) {
      this.saveButtonText = 'PROCEED';
      this.currentInfo.mailingAddress = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(this.fullContactInfo.mailingAddress);
      this.currentInfo.mailingAddress.displayCountry = this.currentInfo.mailingAddress.country;
    }
  } // Event handler for "Add Alt Phone" button


  onAddAltPhoneNumberClick() {
    // Show the first alternative phone number if it's not already shown
    if (!this.firstAltPhoneState) {
      this.firstAltPhoneState = true;
    } // Show the second alternative phone number if the first is shown and the second is not
    else if (!this.secondAltPhoneState) {
        this.secondAltPhoneState = true;
      }

    this.updateAddAltPhoneButton();
  } // Event handler to delete the first alternative phone number


  deleteFirstAltPhone() {
    // If the second phone number is present, transfer its data to the first, and clear and hide the second phone
    if (this.secondAltPhoneState) {
      this.fullContactInfo.contactInfo.altPhoneNumber = this.fullContactInfo.contactInfo.mobilePhoNbr;
      this.fullContactInfo.contactInfo.altPhoneNumberExt = this.fullContactInfo.contactInfo.mobilePhoExt;
      this.fullContactInfo.contactInfo.mobilePhoNbr = '';
      this.fullContactInfo.contactInfo.mobilePhoExt = '';
      this.secondAltPhoneState = false;
    } // If the second phone number is not shown, simply hide the first
    else {
        this.fullContactInfo.contactInfo.altPhoneNumber = '';
        this.fullContactInfo.contactInfo.altPhoneNumberExt = '';
        this.firstAltPhoneState = false;
      }

    this.updateAddAltPhoneButton();
  } // Event handler to delete the second alternative phone number


  deleteSecondAltPhone() {
    // Hide the second alternative phone number
    this.secondAltPhoneState = false;
    this.fullContactInfo.contactInfo.mobilePhoNbr = '';
    this.fullContactInfo.contactInfo.mobilePhoExt = '';
    this.updateAddAltPhoneButton();
  }

  submit(form, wizardUi) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!form.valid) {
        return;
      }

      _this3.formatPhoneNumber();

      if (_this3.checkIfFormChanged()) {
        const res = yield _this3.updateContactInfo();

        if (!res) {
          return;
        }

        yield _this3.openConfirmationModal();
      }

      if (_this3.isKiosk && wizardUi) {
        yield wizardUi.gotoNextState();
        return;
      }

      yield _this3.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_1__.stateNames.AccountDetails);
    })();
  }

  checkIfFormChanged() {
    const hasContactInfoChanged = JSON.stringify(this.currentInfo.contactInfo) !== JSON.stringify(this.fullContactInfo.contactInfo);

    if (!this.isKiosk) {
      return hasContactInfoChanged;
    } else {
      const hasMailingAddressChanged = JSON.stringify(this.currentInfo.mailingAddress) !== JSON.stringify(this.fullContactInfo.mailingAddress);
      return hasContactInfoChanged || hasMailingAddressChanged;
    }
  }

  updateContactInfo() {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const contactInfoResponse = yield _this4.webApi.updateContactInfo(_this4.fullContactInfo.contactInfo);

      if (contactInfoResponse && _this4.isKiosk) {
        return yield _this4.webApi.updateMailingInfo(_this4.fullContactInfo.mailingAddress);
      }

      return contactInfoResponse;
    })();
  }

  openConfirmationModal() {
    var _this5 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modalCms = _this5.cmsContent.Children[0];
      const data = {
        cmsContent: {
          Title: modalCms.Title,
          AcceptBtn: 'OKAY',
          PrimaryContent: modalCms.ShortDescription
        }
      };
      yield _this5.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_2__.GenericCmsModalComponent, data);
    })();
  }

  cancel(wizardUi) {
    var _this6 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.isKiosk && wizardUi) {
        yield wizardUi.gotoCancelState();
        return;
      }

      yield _this6.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_1__.stateNames.AccountDetails);
    })();
  }

}

UpdateContactInformationComponent.ɵfac = function UpdateContactInformationComponent_Factory(t) {
  return new (t || UpdateContactInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](profile_services_webApis_service__WEBPACK_IMPORTED_MODULE_5__.WebApisService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_20__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_20__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](pipes_phoneNumber_phoneNumber_pipe__WEBPACK_IMPORTED_MODULE_7__.PhoneNumberPipe), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_8__.StorefrontUtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](common_upgrades__WEBPACK_IMPORTED_MODULE_3__.ENVIRON_CONFIG));
};

UpdateContactInformationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
  type: UpdateContactInformationComponent,
  selectors: [["update-contact-information"]],
  inputs: {
    cmsContent: "cmsContent",
    mailingCmsContent: "mailingCmsContent",
    stateList: "stateList",
    countryList: "countryList"
  },
  decls: 14,
  vars: 4,
  consts: [[1, "refresh-2020"], ["validation-focus", "", "name", "contactInfoForm", "fxLayout", "column", 1, "u-spacing--widthFill"], ["ContactInfoForm", "ngForm"], ["class", "u-spacing__fieldToSection--marginTop", 4, "ngIf"], [3, "main", "alt"], ["action-main", ""], ["action-alt", ""], ["wizardUi", ""], [1, "u-spacing__fieldToSection--marginTop"], [1, "u-spacing__divider--marginTopBottom"], [4, "ngIf"], [1, "u-spacing--widthFill"], [3, "emailAddress", "header", "emailAddressChange"], [1, "u-spacing--widthFill", "u-spacing__fieldToSection--marginTop"], ["id", "altEmailAddress", "name", "altEmailAddress", "placeholder", "username@domain.com", 3, "emailAddress", "header", "required", "emailAddressChange"], [1, "u-spacing--widthFil"], ["prefix", "first", 3, "showPhoneNumberExt", "showTrashIcon", "disableTrashIcon", "phoneNumberHeader", "phoneNumberExtHeader", "phoneNumber", "phoneNumberExt", "phoneNumberChange", "phoneNumberExtChange"], [3, "checkbox", "desc", "checkboxChange", 4, "ngIf"], ["class", "u-spacing--widthFill u-spacing__fieldToSection--marginTop", 4, "ngIf"], ["class", "u-spacing__fieldToSection--marginTop add-alt-phone-number-section", 4, "ngIf"], [3, "checkbox", "desc", "checkboxChange"], ["prefix", "second", 3, "required", "showPhoneNumberExt", "showTrashIcon", "phoneNumberHeader", "phoneNumberExtHeader", "phoneNumber", "phoneNumberExt", "phoneNumberChange", "phoneNumberExtChange", "trashClicked"], ["prefix", "third", 3, "required", "showPhoneNumberExt", "showTrashIcon", "phoneNumberHeader", "phoneNumberExtHeader", "phoneNumber", "phoneNumberExt", "phoneNumberChange", "phoneNumberExtChange", "trashClicked"], [1, "u-spacing__fieldToSection--marginTop", "add-alt-phone-number-section"], ["svgIcon", "add-icon"], [3, "click"], [3, "innerHtml"], [3, "stateList", "address", "validate", "countryList", "international", "internationalChange"]],
  template: function UpdateContactInformationComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "form", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, UpdateContactInformationComponent_card_container_3_Template, 9, 9, "card-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, UpdateContactInformationComponent_card_container_4_Template, 12, 17, "card-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, UpdateContactInformationComponent_card_container_5_Template, 7, 9, "card-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "section")(7, "action-buttons", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("main", function UpdateContactInformationComponent_Template_action_buttons_main_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](2);

        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](13);

        return ctx.submit(_r0, _r4);
      })("alt", function UpdateContactInformationComponent_Template_action_buttons_alt_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);

        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](13);

        return ctx.cancel(_r4);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](12, "wizard-ui", null, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.fullContactInfo !== null);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.fullContactInfo !== null);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.fullContactInfo !== null && ctx.isKiosk);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx.saveButtonText);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_9__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_10__.FocusDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultLayoutDirective, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_11__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDivider, _common_ui_form_entry_emailAddress_emailAddress_component__WEBPACK_IMPORTED_MODULE_12__.EmailAddressComponent, _shared_ui_form_entry_phone_number_components_phone_number_component__WEBPACK_IMPORTED_MODULE_13__.PhoneNumberComponent, _shared_ui_form_entry_checkbox_components_checkbox_component__WEBPACK_IMPORTED_MODULE_14__.CheckboxComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _common_ui_form_entry_address_addressEntry_component__WEBPACK_IMPORTED_MODULE_15__.AddressEntryComponent, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_16__.ActionButtonsComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_17__.WizardComponent],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_18__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   action-buttons[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}\n[_nghost-%COMP%]   action-buttons[_ngcontent-%COMP%]   [action-main][_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   action-buttons[_ngcontent-%COMP%]   [action-alt][_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n[_nghost-%COMP%]   .add-alt-phone-number-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZUNvbnRhY3RJbmZvcm1hdGlvbi5sZXNzIiwiLi5cXC4uXFxzdHlsZXNcXGN1c3RvbVxcc3BhY2luZ1xcc2VjdGlvbnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUVRLFdBQUE7QUFMUjtBQUdBO0VBTVEsY0FBQTtFQ1FBLGdCQUFBO0FEYlI7QUFEQTtFQVVZLHlCQUFBO0FBTlo7QUFKQTtFQWNZLDBCQUFBO0FBUFo7QUFQQTtFQW1CUSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFUUiIsImZpbGUiOiJ1cGRhdGVDb250YWN0SW5mb3JtYXRpb24ubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvY3VzdG9tL3NwYWNpbmcvc2VjdGlvbnMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvY3VzdG9tL3NwYWNpbmcvZGl2aWRlcnMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgbWF0LWRpdmlkZXIge1xuICAgICAgICB3aWR0aDogQHdpZHRoLWRpdmlkZXI7XG4gICAgfVxuXG4gICAgYWN0aW9uLWJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wKCk7XG5cbiAgICAgICAgW2FjdGlvbi1tYWluXSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgW2FjdGlvbi1hbHRdIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFkZC1hbHQtcGhvbmUtbnVtYmVyLXNlY3Rpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cbn1cbiIsIi5yZWZyZXNoLTIwMjAge1xuICAgIC8vIERlc2t0b3BcbiAgICAudS1zcGFjaW5nX19maWVsZFRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19oZWFkZXJUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Cb3R0b20ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcEhhbGYge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2J1dHRvblRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmlyc3RIZWFkZXJUb1RpdGxlLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fYWRkcmVzc1RvUGF5bWVudERpc3BsYXktLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuICAgIC8vIE1vYmlsZVxuICAgICYubHQtbWQsXG4gICAgLmx0LW1kIHtcbiAgICAgICAgLnUtc3BhY2luZ19fY2FyZFRvQ2FyZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 87038:
/*!**************************************************************************************************!*\
  !*** ./src/profile/updateFlexpayBillingInformation/updateFlexpayBillingInformation.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateFlexpayBillingInformationComponent": () => (/* binding */ UpdateFlexpayBillingInformationComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var common_ui_modals_billingModal_billingModal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/ui/modals/billingModal/billingModal.component */ 37882);
/* harmony import */ var profile_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! profile/constants */ 30129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../storefront/services/storefrontUtility.service */ 18011);
/* harmony import */ var profile_services_webApis_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! profile/services/webApis.service */ 60629);
/* harmony import */ var cms_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cms/services */ 46693);
/* harmony import */ var authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! authentication/authenticationService/authentication.service */ 44722);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/modals/actionButtons/actionButtons.component */ 65380);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../pipes/safeHtml.pipe */ 49985);
/* harmony import */ var _pipes_cardType_cardType_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../pipes/cardType/cardType.pipe */ 3036);
/* harmony import */ var _pipes_paymentMasking_creditCardMask_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../pipes/paymentMasking/creditCardMask.pipe */ 83955);
/* harmony import */ var _pipes_paymentMasking_bankAccountMask_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../pipes/paymentMasking/bankAccountMask.pipe */ 10686);




























function UpdateFlexpayBillingInformationComponent_ng_container_15_ng_container_5_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "img", 28);
  }

  if (rf & 2) {
    const paymentMethod_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("src", ctx_r13.getCmsImage(paymentMethod_r5), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
  }
}

function UpdateFlexpayBillingInformationComponent_ng_container_15_ng_container_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, " primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function UpdateFlexpayBillingInformationComponent_ng_container_15_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, UpdateFlexpayBillingInformationComponent_ng_container_15_ng_container_5_img_2_Template, 1, 1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, UpdateFlexpayBillingInformationComponent_ng_container_15_ng_container_5_div_4_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div")(6, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](9, "cardType");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](14, "maskCreditCard");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const paymentMethod_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r7.getCmsImage(paymentMethod_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", paymentMethod_r5.credit.primary);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](8, 4, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](9, 6, paymentMethod_r5.credit.cardCode)), "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](14, 8, paymentMethod_r5.credit.cardNbr, paymentMethod_r5.credit.cardCode), "\u00A0");
  }
}

function UpdateFlexpayBillingInformationComponent_ng_container_15_ng_container_6_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "img", 28);
  }

  if (rf & 2) {
    const paymentMethod_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("src", ctx_r17.getCmsImage(paymentMethod_r5), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
  }
}

function UpdateFlexpayBillingInformationComponent_ng_container_15_ng_container_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "primary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function UpdateFlexpayBillingInformationComponent_ng_container_15_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, UpdateFlexpayBillingInformationComponent_ng_container_15_ng_container_6_img_2_Template, 1, 1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, UpdateFlexpayBillingInformationComponent_ng_container_15_ng_container_6_div_4_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div")(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, "Bank Account\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "maskBankAccount");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const paymentMethod_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r8.getCmsImage(paymentMethod_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", paymentMethod_r5.eft.primary);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](12, 3, paymentMethod_r5.eft.accountNumber), "\u00A0");
  }
}

function UpdateFlexpayBillingInformationComponent_ng_container_15_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 32)(1, "span", 33)(2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const paymentMethod_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"]("", paymentMethod_r5.credit.expMonth, " / ", paymentMethod_r5.credit.expYear, "");
  }
}

function UpdateFlexpayBillingInformationComponent_ng_container_15_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function UpdateFlexpayBillingInformationComponent_ng_container_15_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function UpdateFlexpayBillingInformationComponent_ng_container_15_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Blocked");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function UpdateFlexpayBillingInformationComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0)(1, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "section", 13)(3, "div", 14)(4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, UpdateFlexpayBillingInformationComponent_ng_container_15_ng_container_5_Template, 15, 11, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, UpdateFlexpayBillingInformationComponent_ng_container_15_ng_container_6_Template, 13, 5, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, UpdateFlexpayBillingInformationComponent_ng_container_15_div_8_Template, 4, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, UpdateFlexpayBillingInformationComponent_ng_container_15_span_10_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, UpdateFlexpayBillingInformationComponent_ng_container_15_span_11_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, UpdateFlexpayBillingInformationComponent_ng_container_15_span_12_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]()();
  }

  if (rf & 2) {
    const paymentMethod_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitch", paymentMethod_r5.billingType);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitchCase", ctx_r0.BillingType.Credit);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitchCase", ctx_r0.BillingType.Eft);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitchCase", ctx_r0.BillingType.Credit);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r0.checkActive(paymentMethod_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r0.checkExpired(paymentMethod_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r0.checkBlocked(paymentMethod_r5));
  }
}

function UpdateFlexpayBillingInformationComponent_section_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section", 37)(1, "section", 38)(2, "section", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.cmsContent.NO_DATA_TITLE);
  }
}

function UpdateFlexpayBillingInformationComponent_section_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function UpdateFlexpayBillingInformationComponent_section_17_Template_section_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r22.openEditBillingModal();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r2.addPayment);
  }
}

function UpdateFlexpayBillingInformationComponent_section_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section", 45)(1, "wizard-ui", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("next", function UpdateFlexpayBillingInformationComponent_section_18_Template_wizard_ui_next_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r27);

      const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](11);

      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r26.proceed(_r25);
    })("cancel", function UpdateFlexpayBillingInformationComponent_section_18_Template_wizard_ui_cancel_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r27);

      const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](11);

      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r28.cancel(_r25);
    })("previous", function UpdateFlexpayBillingInformationComponent_section_18_Template_wizard_ui_previous_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r27);

      const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](11);

      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r29.previous(_r25);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "PROCEED");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](8, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](10, "wizard-ui", null, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", ctx_r3.isDisabled);
  }
}

function UpdateFlexpayBillingInformationComponent_section_19_action_buttons_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "action-buttons", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("main", function UpdateFlexpayBillingInformationComponent_section_19_action_buttons_1_Template_action_buttons_main_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r34);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

      const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](4);

      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r33.proceed(_r32);
    })("alt", function UpdateFlexpayBillingInformationComponent_section_19_action_buttons_1_Template_action_buttons_alt_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r34);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

      const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](4);

      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r35.cancel(_r32);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "PROCEED");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", ctx_r30.isDisabled);
  }
}

function UpdateFlexpayBillingInformationComponent_section_19_wizard_ui_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "wizard-ui", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("previous", function UpdateFlexpayBillingInformationComponent_section_19_wizard_ui_2_Template_wizard_ui_previous_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r37);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

      const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](4);

      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r36.previous(_r32);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}

function UpdateFlexpayBillingInformationComponent_section_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, UpdateFlexpayBillingInformationComponent_section_19_action_buttons_1_Template, 5, 1, "action-buttons", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, UpdateFlexpayBillingInformationComponent_section_19_wizard_ui_2_Template, 4, 0, "wizard-ui", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "wizard-ui", null, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r4.isKiosk);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r4.isKiosk);
  }
}

const _c0 = function () {
  return {
    "hidden": true
  };
};

class UpdateFlexpayBillingInformationComponent {
  constructor(manageBillingInformationService, dialogService, billingDataService, accountService, currentUserService, state, storefrontUtilityService, toaster, profileApiService, cmsUtilService, authService) {
    this.manageBillingInformationService = manageBillingInformationService;
    this.dialogService = dialogService;
    this.billingDataService = billingDataService;
    this.accountService = accountService;
    this.currentUserService = currentUserService;
    this.state = state;
    this.storefrontUtilityService = storefrontUtilityService;
    this.toaster = toaster;
    this.profileApiService = profileApiService;
    this.cmsUtilService = cmsUtilService;
    this.authService = authService;
    this.BillingType = common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType;
    this.paymentMethods = [];
    this.blockedPaymentMethods = [];
    this.isNoData = false;
    this.existingPaymentMethodsCount = 0;

    this.getIconImage = paymentMethod => {
      if (!this.paymentMethodImages) {
        return '';
      }

      const iconDict = this.paymentMethodImages.Children.reduce((acc, curr) => ({ ...acc,
        [curr.ItemName]: curr.Image
      }), {});
      const childName = this.getPaymentType(paymentMethod);
      return this.cmsUtilService.generateFileSrc(iconDict[childName] || '');
    };
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isKiosk = _this.storefrontUtilityService.isRunningAsKiosk && !_this.storefrontUtilityService.webStoreData.fullSiteMode;
      _this.selectedIndex = -1;
      _this.selectedIndexBlocked = -1;

      _this.loadGrid();
    })();
  }

  openEditBillingModal() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      const openEftSlots = _this2.openEFTSlots;
      const openCardSlots = _this2.openCreditSlots;
      const thisLockType = openEftSlots === 0 || openCardSlots === 0 ? true : false;
      let openBillingType = null;

      if (openEftSlots === 0) {
        openBillingType = common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit;
      } else if (openCardSlots === 0) {
        openBillingType = common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft;
      }

      const newBillingInfo = {
        credit: {},
        eft: {},
        billingType: openBillingType
      }; //if this needs to be either just EFT or just Credit, locktype needs to be passed to paymentmethod inside modal
      //and injection billing type needs to be set to just necessary type

      const data = {
        billingInformation: newBillingInfo,
        billingType: openBillingType,
        stateList: _this2.stateList,
        countryList: _this2.countryList,
        lockType: thisLockType,
        hideForEFT: true,
        shouldForcePrimarySelection: _this2.existingPaymentMethodsCount === 0,
        paymentMethodAvailability: {
          openCardSlots,
          openEftSlots
        },
        uiOptions: {
          //the add button is only shown if there's an open slot
          // so, showMakePrimary can always be true
          showMakePrimary: true
        }
      };
      const result = yield _this2.dialogService.openSliderCentered(common_ui_modals_billingModal_billingModal_component__WEBPACK_IMPORTED_MODULE_3__.BillingModalComponent, data, {
        title: _this2.addPayment
      });

      if (result) {
        //then call the add payment method api and call api to get new list of payment methods
        const newPaymentMethod = { ...result.billingInformation,
          billingType: result.billingType,
          newMethodAdded: true,
          makePrimary: (_a = result.uiResults) === null || _a === void 0 ? void 0 : _a.makePrimary //this is true if the Make Primary checkbox was checked

        };

        if (newPaymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit) {
          newPaymentMethod.eft = null;
        } else if (newPaymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft) {
          newPaymentMethod.credit = null;
        }

        const errors = yield _this2.billingDataService.updatePaymentInfo('a', newPaymentMethod);

        if (errors.length === 0 && _this2.isOptIn) {
          const modalData = {
            cmsContent: {
              Title: _this2.cmsContent.SUCCESS_TITLE,
              AcceptBtn: _this2.cmsContent.SUCCESS_BUTTON,
              PrimaryContent: _this2.cmsContent.SUCCESS_DESC
            }
          };
          yield _this2.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_2__.GenericCmsModalComponent, modalData);
        }

        _this2.manageBillingInformationService.billingInformation = {
          selected: null,
          allPaymentContainers: null
        };
        yield _this2.manageBillingInformationService.refreshBillingInfo([]);

        _this2.loadGrid();
      }
    })();
  }

  getCmsImage(paymentMethod) {
    return this.getIconImage(paymentMethod);
  }

  getPaymentType(paymentMethod) {
    var _a;

    const cardCodes = {
      a: 'AMEX',
      m: 'MasterCard',
      d: 'Discover',
      v: 'Visa'
    };
    return paymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft ? 'Bank' : cardCodes[(((_a = paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.credit) === null || _a === void 0 ? void 0 : _a.cardCode) || '').toLowerCase()] || '';
  }

  loadGrid() {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b;

      _this3.setUserData();

      const savedPaymentMethods = yield _this3.accountService.getAllPaymentMethods();
      _this3.existingPaymentMethodsCount = ((_a = savedPaymentMethods.bankAccounts) === null || _a === void 0 ? void 0 : _a.length) + ((_b = savedPaymentMethods.creditCards) === null || _b === void 0 ? void 0 : _b.length); //maxCards and maxEfts subtract blocked payment methods when they shouldn't.
      //is this a bug for ETC?

      _this3.maxCards = 2; //savedPaymentMethods.maxCards;

      _this3.maxEft = 1; //savedPaymentMethods.maxEfts;

      _this3.paymentMethods = [...(savedPaymentMethods.bankAccounts || []).filter(x => x).map(eft => ({
        billingType: common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft,
        primary: eft.primary || false,
        eft
      })), ...(savedPaymentMethods.creditCards || []).filter(x => x).map(credit => ({
        billingType: common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit,
        primary: credit.primary || false,
        credit
      }))];

      if (_this3.paymentMethods === null) {
        _this3.isNoData = true;
      } else {
        _this3.isNoData = _this3.paymentMethods.length > 0 ? false : true;
      }

      _this3.openEFTSlots = _this3.maxEft - _this3.paymentMethods.filter(x => x.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft).length;
      _this3.openCreditSlots = _this3.maxCards - _this3.paymentMethods.filter(x => x.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit).length;
      _this3.isOnlyPayment = _this3.paymentMethods.length === 1;
      _this3.blockedPaymentMethods = _this3.paymentMethods.filter(_this3.checkBlocked).sort((a, b) => _this3.getRank(b) - _this3.getRank(a));
      _this3.paymentMethods = _this3.paymentMethods.filter(p => !_this3.checkBlocked(p)).sort((a, b) => _this3.getRank(b) - _this3.getRank(a));
      _this3.activeEFTSlots = _this3.maxEft - _this3.paymentMethods.filter(x => x.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft).length;
      _this3.activeCreditSlots = _this3.maxCards - _this3.paymentMethods.filter(x => x.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit).length;

      if (_this3.openEFTSlots === 0 && _this3.openCreditSlots > 0) {
        _this3.addPayment = _this3.cmsContent.ADD_MODAL_CARD;
      } else if (_this3.openEFTSlots === 1 && _this3.openCreditSlots === 0) {
        _this3.addPayment = _this3.cmsContent.ADD_MODAL_EFT;
      } else if (_this3.openEFTSlots === 1 && _this3.openCreditSlots > 0) {
        _this3.addPayment = _this3.cmsContent.ADD_MODAL_ALL;
      }

      _this3.isDisabled = _this3.paymentMethods.length === 0;
    })();
  }

  checkBlocked(payment) {
    if (payment.credit) {
      return payment.credit.isBlocked;
    } else {
      return payment.eft.isBlocked;
    }
  }

  checkActive(payment) {
    if ((payment === null || payment === void 0 ? void 0 : payment.billingType) !== common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft) {
      const dateToCompare = new Date(payment.credit.expYear, payment.credit.expMonth);
      const today = new Date();
      const thirtyDays = new Date();
      thirtyDays.setDate(thirtyDays.getDate() + 30);
      const blocked = this.checkBlocked(payment);
      const expired = dateToCompare < today && !blocked && payment.billingType !== common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft;
      const expiring = dateToCompare < thirtyDays && !expired && !blocked && !expired;
      return !blocked && !expired && !expiring;
    } else if ((payment === null || payment === void 0 ? void 0 : payment.billingType) === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft) {
      return !payment.eft.isBlocked;
    } else {
      return true;
    }
  }

  checkExpired(payment) {
    if (payment.billingType !== common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft) {
      const dateToCompare = new Date(payment.credit.expYear, payment.credit.expMonth);
      const today = new Date();
      const blocked = this.checkBlocked(payment);
      const expired = dateToCompare < today && !blocked;
      return expired;
    } else {
      return false;
    }
  }

  getRank(paymentMethod) {
    let rank = 0;
    rank += paymentMethod.primary ? 4 : 0;
    rank += paymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit ? 2 : 1;
    return rank;
  }

  setUserData() {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.currentUser = yield _this4.currentUserService.getCurrentUser();
      _this4.isOptIn = _this4.currentUser.rebillOptIn;
      _this4.isFlexPay = _this4.currentUser.isFlexPay;
    })();
  }

  proceed(wizardUi) {
    var _this5 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.showConfirmationModal(wizardUi);
    })();
  }

  showConfirmationModal(wizardUi) {
    var _this6 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      const data = {
        cmsContent: {
          Title: _this6.paymentConfirmModal.Title,
          AcceptBtn: 'Confirm',
          CancelBtn: 'CANCEL',
          PrimaryContent: _this6.isOptIn ? (_a = _this6.paymentConfirmModal) === null || _a === void 0 ? void 0 : _a.ShortDescription : _this6.paymentConfirmModal.optInMessage
        }
      };
      const res = yield _this6.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_2__.GenericCmsModalComponent, data);

      if (res) {
        const apiResponse = yield _this6.profileApiService.updateRebillAmount(_this6.manageBillingInformationService.rebillObj);

        if ((apiResponse === null || apiResponse === void 0 ? void 0 : apiResponse.errors.length) === 0) {
          yield _this6.authService.profile({});

          if (_this6.isKiosk && wizardUi) {
            yield wizardUi.gotoNextState();
            return;
          }

          yield _this6.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.AccountDetails);
        } else {
          _this6.toaster.show('Error', res === null || res === void 0 ? void 0 : res.errors);
        }
      }
    })();
  }

  cancel(wizardUi) {
    var _this7 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this7.isKiosk && wizardUi) {
        yield wizardUi.gotoNextState();
        return;
      }

      yield _this7.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.AccountDetails);
    })();
  }

  previous(wizardUi) {
    var _this8 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this8.isKiosk && wizardUi) {
        yield wizardUi.gotoPreviousState();
        return;
      }

      yield _this8.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.UpdateReplenishmentAmount);
    })();
  }

}

UpdateFlexpayBillingInformationComponent.ɵfac = function UpdateFlexpayBillingInformationComponent_Factory(t) {
  return new (t || UpdateFlexpayBillingInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_5__.ManageBillingService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_5__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_5__.BillingDataService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_5__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_5__.CurrentUserService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_20__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_6__.StorefrontUtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_5__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](profile_services_webApis_service__WEBPACK_IMPORTED_MODULE_7__.WebApisService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_8__.CmsUtilService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_9__.AuthenticationService));
};

UpdateFlexpayBillingInformationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
  type: UpdateFlexpayBillingInformationComponent,
  selectors: [["update-flexpay-billing-information"]],
  inputs: {
    cmsContent: "cmsContent",
    billingCMS: "billingCMS",
    flexPaycmsContent: "flexPaycmsContent",
    paymentConfirmModal: "paymentConfirmModal",
    stateList: "stateList",
    countryList: "countryList",
    paymentMethodImages: "paymentMethodImages"
  },
  decls: 20,
  vars: 11,
  consts: [["hasAlternateBackgroundColor", "true", 1, "refresh-2020"], [1, "u-spacing__fieldToSection--marginTop"], [1, "u-spacing__divider--marginTopBottom"], [3, "innerHtml"], ["fxFlex", "100%", "fxLayoutAlign", "center center", 1, "u-spacing--widthFill", 2, "margin-top", "10px"], ["fxFlex", "60%", "fxLayoutAlign", "center center", 1, "fx-flex-auto-shrink-more", "limited-flex"], ["fxFlex", "20%", "fxLayoutAlign", "center center", 1, "fx-flex-auto-shrink-more", "limited-flex", 3, "ngClass.lt-md"], ["fxFlex", "20%", "fxLayoutAlign", "center center", 1, "fx-flex-auto", "limited-flex-end"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "center center", "class", "u-spacing--widthFill no-data-section", 4, "ngIf"], ["class", "u-spacing__fieldToSection--marginTop", "fxLayout", "row", "fxLayoutAlign", "center center", 3, "click", 4, "ngIf"], ["class", "u-spacing__buttonToField--marginTop", 4, "ngIf"], [3, "ngSwitch"], [1, "section-container"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "payment-section"], [1, "fx-flex-auto-shrink-more"], [4, "ngSwitchCase"], ["fxShow", "", "fxHide.lt-md", "", 4, "ngSwitchCase"], ["fxFlex", "20%", "fxLayoutAlign", "end center", 1, "fx-flex-auto", "limited-flex-end"], ["class", "activeStatus", 4, "ngIf"], ["class", "expiredStatus", 4, "ngIf"], ["class", "blockedStatus", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start start"], [3, "src", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "account-section"], ["class", "isPrimary", 4, "ngIf"], ["translation-skip", "", 1, "itemFont"], ["fxShow", "", "fxHide.gt-xs", ""], [3, "src"], [1, "isPrimary"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["fxLayout", "column", "fxLayoutAlign", "start start", "ngClass.gt-sm", "bankAccountWidth", 1, "account-section"], ["fxShow", "", "fxHide.lt-md", ""], [2, "padding-right", "40px"], [1, "activeStatus"], [1, "expiredStatus"], [1, "blockedStatus"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "u-spacing--widthFill", "no-data-section"], ["col-start", "", "fxFlex", "grow"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "noDataContent"], ["svgIcon", "cc-icon", 1, "noDataIcon"], [1, "noDataCMS", 2, "text-align", "center"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "u-spacing__fieldToSection--marginTop", 3, "click"], ["svgIcon", "add-icon"], ["fxFlexOffset", "6px", 1, "add-text"], [1, "u-spacing__buttonToField--marginTop"], [3, "disabled", "next", "cancel", "previous"], ["Wizard", ""], ["wizard-next", ""], ["wizard-cancel", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["wizardUi", ""], [3, "disabled", "main", "alt", 4, "ngIf"], [3, "previous", 4, "ngIf"], [3, "disabled", "main", "alt"], ["action-main", ""], ["action-alt", ""], [3, "previous"], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center", 2, "margin-top", "-36px"]],
  template: function UpdateFlexpayBillingInformationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "div", 1)(2, "card-container")(3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](5, "mat-divider", 2)(6, "article", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](7, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "section", 4)(9, "mat-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10, " PAYMENT METHOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "mat-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12, "EXPIRES");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "mat-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "STATUS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](15, UpdateFlexpayBillingInformationComponent_ng_container_15_Template, 13, 7, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](16, UpdateFlexpayBillingInformationComponent_section_16_Template, 6, 1, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](17, UpdateFlexpayBillingInformationComponent_section_17_Template, 4, 1, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](18, UpdateFlexpayBillingInformationComponent_section_18_Template, 12, 1, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](19, UpdateFlexpayBillingInformationComponent_section_19_Template, 5, 2, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx.flexPaycmsContent == null ? null : ctx.flexPaycmsContent.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("innerHtml", ctx.isNoData ? ctx.flexPaycmsContent.LongDescription : _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](7, 8, ctx.flexPaycmsContent.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](10, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx.paymentMethods);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isNoData);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isNoData);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.isKiosk);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isKiosk);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_10__.PageCenteredContainerComponent, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_11__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultLayoutAlignDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLabel, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitch, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultLayoutDirective, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__.DefaultShowHideDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultFlexOffsetDirective, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_12__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_13__.WizardNextDirective, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_14__.ActionButtonsComponent],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_15__.SafeHtmlPipe, _angular_common__WEBPACK_IMPORTED_MODULE_25__.UpperCasePipe, _pipes_cardType_cardType_pipe__WEBPACK_IMPORTED_MODULE_16__.CardTypePipe, _pipes_paymentMasking_creditCardMask_pipe__WEBPACK_IMPORTED_MODULE_17__.CreditCardMaskPipe, _pipes_paymentMasking_bankAccountMask_pipe__WEBPACK_IMPORTED_MODULE_18__.BankAccountMaskPipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n.noDataContent[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   .isPrimary[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 5px;\n  width: 64px;\n  height: 18px;\n  font-size: 8px;\n  line-height: 18px;\n  text-align: center;\n  background-color: #ffdd09;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n[_nghost-%COMP%]   .itemFont[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Montserrat';\n}\n[_nghost-%COMP%]   .nameFormat[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Montserrat';\n  text-transform: capitalize;\n}\n[_nghost-%COMP%]   .activeStatus[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Montserrat';\n  color: #018749;\n}\n[_nghost-%COMP%]   .expiredStatus[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Montserrat';\n  color: #fc2125;\n}\n[_nghost-%COMP%]   .blockedStatus[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Montserrat';\n  color: #fc2125;\n  padding-left: -20px;\n}\n[_nghost-%COMP%]   .expiring[_ngcontent-%COMP%] {\n  color: #ff9200;\n}\n[_nghost-%COMP%]   .expiring[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]    > path[_ngcontent-%COMP%] {\n  fill: #ff9200;\n}\n[_nghost-%COMP%]   .expired[_ngcontent-%COMP%] {\n  color: #fc2125;\n}\n[_nghost-%COMP%]   .expired[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]    > path[_ngcontent-%COMP%] {\n  fill: #fc2125;\n}\n[_nghost-%COMP%]   .bankAccountWidth[_ngcontent-%COMP%] {\n  width: 365px;\n}\n[_nghost-%COMP%]   span[tool-tip-hover][_ngcontent-%COMP%] {\n  color: #757575;\n}\n[_nghost-%COMP%]   .previous-link[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n[_nghost-%COMP%]   tool-tip[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n[_nghost-%COMP%]   .no-data-section[_ngcontent-%COMP%] {\n  background: #f6f6f6 0% 0% no-repeat padding-box;\n  border: 1px solid #007aff;\n  border-radius: 10px;\n}\n[_nghost-%COMP%]   .section-container[_ngcontent-%COMP%] {\n  height: 100px;\n  background: #f6f6f6 0% 0% no-repeat padding-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #c4c4c4;\n  border-radius: 10px;\n  margin: 4px 0px;\n}\n[_nghost-%COMP%]   .account-section[_ngcontent-%COMP%] {\n  padding-left: 12px;\n  vertical-align: bottom;\n}\n[_nghost-%COMP%]   .payment-section[_ngcontent-%COMP%] {\n  padding: 15px 20px 15px 15px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcY29tbW9uXFx1aVxcY29udGFpbmVyc1xcZnhSb3dcXGRldGFpbHMubGVzcyIsInVwZGF0ZUZsZXhwYXlCaWxsaW5nSW5mb3JtYXRpb24ubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7QUNESjtBREFBO0VBSVEsYUFBQTtFQUNBLGtCQUFBO0FDRFI7QURKQTtFQThFSSxjQUFBO0VBQ0Esc0JBQUE7QUN2RUo7QURSQTtFQW9GSSxjQUFBO0VBQ0Esc0JBQUE7QUN6RUo7QURaQTtFQXlGSSxjQUFBO0VBQ0Esc0JBQUE7QUMxRUo7QURoQkE7RUE4RkksY0FBQTtFQUNBLHNCQUFBO0FDM0VKO0FEcEJBO0VBbUdJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDNUVKO0FEekJBO0VBeUdJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDN0VKO0FEOUJBO0VBK0dJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQzlFSjtBRG5DQTtFQXFISSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUMvRUo7QUR4Q0E7RUEwQ1EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDUjtBRDdDQTtFQWdEUSxXQUFBO0FDQVI7QURoREE7RUFvRFEsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RSO0FEdERBO0VBMkRRLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FENURBO0VBa0VRLGVBQUE7QUNIUjtBREtRO0VBQ0ksZUFBQTtBQ0haO0FBL0RBO0VBQ0ksaUJBQUE7QUFpRUo7QUE5REE7RUFHUSxXQUFBO0FBOERSO0FBakVBO0VBT1EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUE2RFI7QUE3RUE7RUFvQlEsZUFBQTtFQUNBLHlCQUFBO0FBNERSO0FBakZBO0VBeUJRLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBMkRSO0FBdEZBO0VBK0JRLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUEwRFI7QUEzRkE7RUFxQ1EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQXlEUjtBQWhHQTtFQTJDUSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUF3RFI7QUF0R0E7RUFrRFEsY0FBQTtBQXVEUjtBQXpHQTtFQXNEUSxhQUFBO0FBc0RSO0FBNUdBO0VBMERRLGNBQUE7QUFxRFI7QUEvR0E7RUE4RFEsYUFBQTtBQW9EUjtBQWxIQTtFQWtFUSxZQUFBO0FBbURSO0FBckhBO0VBc0VRLGNBQUE7QUFrRFI7QUF4SEE7RUEwRVEsa0JBQUE7QUFpRFI7QUEzSEE7RUE4RVEscUJBQUE7QUFnRFI7QUE5SEE7RUFrRlEsK0NBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBK0NSO0FBbklBO0VBd0ZRLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUE4Q1I7QUE3SUE7RUFtR1Esa0JBQUE7RUFDQSxzQkFBQTtBQTZDUjtBQWpKQTtFQXdHUSw0QkFBQTtFQUNBLFdBQUE7QUE0Q1IiLCJmaWxlIjoidXBkYXRlRmxleHBheUJpbGxpbmdJbmZvcm1hdGlvbi5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcblxuOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmhpZGRlbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG5cblxuICAgIC5meC1mbGV4LWF1dG8ge1xuICAgICAgICAuZngtZmxleC1hdXRvLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWZsZXgtbm9uZSB7XG4gICAgICAgIC5meC1mbGV4LW5vbmUtbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtZmxleC1hdXRvLXNocmluay1tb3JlIHtcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZS1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlIHtcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1ncm93LW1vcmUtbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LXJvdyB7XG4gICAgICAgIC5meC1sYXlvdXQtcm93LW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1jb2x1bW4ge1xuICAgICAgICAuZngtbGF5b3V0LWNvbHVtbi1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyIHtcbiAgICAgICAgLmZ4LWxheW91dC1hbGlnbi1zdGFydC1jZW50ZXItbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LWFsaWduLWVuZC1jZW50ZXIge1xuICAgICAgICAuZngtbGF5b3V0LWFsaWduLWVuZC1jZW50ZXItbWl4aW4oKTtcbiAgICB9XG5cbiAgICAubGltaXRlZC1mbGV4IHtcbiAgICAgICAgbWluLXdpZHRoOiAxNzBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA1MzBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnVubGltaXRlZC1mbGV4IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmxpbWl0ZWQtZmxleC1lbmQge1xuICAgICAgICBtaW4td2lkdGg6IDcwcHg7XG4gICAgICAgIG1heC13aWR0aDogODBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG5cbiAgICAubGFyZ2VyLWxpbWl0ZWQtZmxleC1lbmQge1xuICAgICAgICBtaW4td2lkdGg6IDE0M3B4O1xuICAgICAgICBtYXgtd2lkdGg6IDE0NXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cblxuICAgIC50YWJsZS1zcGFjZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcblxuICAgICAgICAmLmx0LW1kIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIE1peGlucyB0byBhcHBlYXNlIHBlcmZvcm1hbmNlXG4uZngtZmxleC1hdXRvLW1peGluKCkge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5meC1mbGV4LW5vbmUtbWl4aW4oKSB7XG4gICAgLy8gbGVzc2hpbnQtZGlzYWJsZS1uZXh0LWxpbmUgemVyb1VuaXRcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1hdXRvLXNocmluay1tb3JlLW1peGluKCkge1xuICAgIGZsZXg6IDEgMiBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlLW1peGluKCkge1xuICAgIGZsZXg6IDIgMSBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5meC1sYXlvdXQtcm93LW1peGluKCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZngtbGF5b3V0LWNvbHVtbi1taXhpbigpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZ4LWxheW91dC1hbGlnbi1zdGFydC1jZW50ZXItbWl4aW4oKSB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZngtbGF5b3V0LWFsaWduLWVuZC1jZW50ZXItbWl4aW4oKSB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiIsIlxuXG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAnY29tbW9uL3VpL2NvbnRhaW5lcnMvZnhSb3cvZGV0YWlscy5sZXNzJztcblxuLm5vRGF0YUNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuXG46aG9zdCB7XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG5cbiAgICAuaXNQcmltYXJ5IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAc2Nob29sLWJ1cy15ZWxsb3c7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG5cbiAgICAuaXRlbUZvbnQge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xuICAgIH1cblxuICAgIC5uYW1lRm9ybWF0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuXG4gICAgLmFjdGl2ZVN0YXR1cyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LW1vbnRzZXJyYXQ7XG4gICAgICAgIGNvbG9yOiBAdHJvcGljYWwtcmFpbi1mb3Jlc3QtZ3JlZW47XG4gICAgfVxuXG4gICAgLmV4cGlyZWRTdGF0dXMge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xuICAgICAgICBjb2xvcjogQHRvcmNoLXJlZDtcbiAgICB9XG5cbiAgICAuYmxvY2tlZFN0YXR1cyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LW1vbnRzZXJyYXQ7XG4gICAgICAgIGNvbG9yOiBAdG9yY2gtcmVkO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IC0yMHB4O1xuICAgIH1cblxuICAgIC5leHBpcmluZyB7XG4gICAgICAgIGNvbG9yOiBAcGl6YXp6LWdvbGQ7XG4gICAgfVxuXG4gICAgLmV4cGlyaW5nIHN2ZyA+IHBhdGgge1xuICAgICAgICBmaWxsOiBAcGl6YXp6LWdvbGQ7XG4gICAgfVxuXG4gICAgLmV4cGlyZWQge1xuICAgICAgICBjb2xvcjogQHRvcmNoLXJlZDtcbiAgICB9XG5cbiAgICAuZXhwaXJlZCBzdmcgPiBwYXRoIHtcbiAgICAgICAgZmlsbDogQHRvcmNoLXJlZDtcbiAgICB9XG5cbiAgICAuYmFua0FjY291bnRXaWR0aCB7XG4gICAgICAgIHdpZHRoOiAzNjVweDtcbiAgICB9XG5cbiAgICBzcGFuW3Rvb2wtdGlwLWhvdmVyXSB7XG4gICAgICAgIGNvbG9yOiBAYm91bGRlci1ncmF5O1xuICAgIH1cblxuICAgIC5wcmV2aW91cy1saW5rIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgIHRvb2wtdGlwIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC5uby1kYXRhLXNlY3Rpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBAd2lsZC1zYW5kLWdyYXkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBAYXp1cmUtcmFkaWFuY2UtYmx1ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG5cbiAgICAuc2VjdGlvbi1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBAd2lsZC1zYW5kLWdyYXkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgQHNpbHZlci1ncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBtYXJnaW46IDRweCAwcHg7XG4gICAgfVxuXG4gICAgLmFjY291bnQtc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICB9XG5cbiAgICAucGF5bWVudC1zZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMTVweCAyMHB4IDE1cHggMTVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG59XG4iXX0= */"]
});

/***/ }),

/***/ 48223:
/*!****************************************************************************!*\
  !*** ./src/profile/updateMailingAddress/updateMailingAddress.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateMailingAddressComponent": () => (/* binding */ UpdateMailingAddressComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var profile_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! profile/constants */ 30129);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var profile_services_webApis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! profile/services/webApis.service */ 60629);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_form_entry_address_addressEntry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui/form-entry/address/addressEntry.component */ 54608);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/modals/actionButtons/actionButtons.component */ 65380);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/safeHtml.pipe */ 49985);


















function UpdateMailingAddressComponent_card_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "card-container", 4)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "mat-divider", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "address-entry", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("internationalChange", function UpdateMailingAddressComponent_card_container_3_Template_address_entry_internationalChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r2.fullContactInfo.mailingAddress.international = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "section", 8)(8, "action-buttons", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("main", function UpdateMailingAddressComponent_card_container_3_Template_action_buttons_main_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](2);

      return ctx_r4.submit(_r0);
    })("alt", function UpdateMailingAddressComponent_card_container_3_Template_action_buttons_alt_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r5.cancel();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "SAVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.cmsContent.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 7, ctx_r1.cmsContent.LongDescription), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("stateList", ctx_r1.stateList)("address", ctx_r1.fullContactInfo.mailingAddress)("validate", true)("countryList", ctx_r1.countryList)("international", ctx_r1.fullContactInfo.mailingAddress.international);
  }
}

class UpdateMailingAddressComponent {
  constructor(webApi, state, uiRouterGlobals, dialogService, accountService) {
    this.webApi = webApi;
    this.state = state;
    this.uiRouterGlobals = uiRouterGlobals;
    this.dialogService = dialogService;
    this.accountService = accountService;
    this.requestInfo = {};
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.fullContactInfo = _this.uiRouterGlobals.params.personalInfo;

      if (!_this.fullContactInfo) {
        _this.fullContactInfo = yield _this.accountService.getContactInfo();
      }
    })();
  }

  cancel() {
    this.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_1__.stateNames.AccountDetails);
  }

  submit(form) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!form.valid) {
        return;
      }

      _this2.requestInfo.mailingAddress = _this2.fullContactInfo.mailingAddress;
      _this2.requestInfo.contactInfo = _this2.fullContactInfo.contactInfo;
      _this2.requestInfo.personalInfo = _this2.fullContactInfo.personalInfo;
      yield _this2.webApi.setContactInfo(_this2.requestInfo);
      const modalCms = _this2.cmsContent.Children[0];
      const data = {
        cmsContent: {
          Title: modalCms.Title,
          AcceptBtn: 'OKAY',
          PrimaryContent: modalCms.ShortDescription
        }
      };
      yield _this2.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_2__.GenericCmsModalComponent, data);
      yield _this2.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_1__.stateNames.AccountDetails);
    })();
  }

}

UpdateMailingAddressComponent.ɵfac = function UpdateMailingAddressComponent_Factory(t) {
  return new (t || UpdateMailingAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](profile_services_webApis_service__WEBPACK_IMPORTED_MODULE_3__.WebApisService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_12__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_12__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_4__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_4__.AccountService));
};

UpdateMailingAddressComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: UpdateMailingAddressComponent,
  selectors: [["update-mailing-address"]],
  inputs: {
    cmsContent: "cmsContent",
    stateList: "stateList",
    countryList: "countryList"
  },
  decls: 4,
  vars: 1,
  consts: [["hasAlternateBackgroundColor", "true", 1, "refresh-2020"], ["validation-focus", "", "name", "mailingAddressForm", "fxLayout", "column", 1, "u-spacing--widthFill"], ["MailingAddressForm", "ngForm"], ["class", "u-spacing__fieldToSection--marginTop", 4, "ngIf"], [1, "u-spacing__fieldToSection--marginTop"], [1, "u-spacing__divider--marginTopBottom"], [3, "innerHtml"], [3, "stateList", "address", "validate", "countryList", "international", "internationalChange"], [1, "u-spacing__buttonToField--marginTop"], [3, "main", "alt"], ["action-main", ""], ["action-alt", ""]],
  template: function UpdateMailingAddressComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "form", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, UpdateMailingAddressComponent_card_container_3_Template, 13, 9, "card-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.fullContactInfo !== null);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_6__.FocusDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, _common_ui_form_entry_address_addressEntry_component__WEBPACK_IMPORTED_MODULE_8__.AddressEntryComponent, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_9__.ActionButtonsComponent],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_10__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZU1haWxpbmdBZGRyZXNzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFUSxXQUFBO0FBRlIiLCJmaWxlIjoidXBkYXRlTWFpbGluZ0FkZHJlc3MubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 19221:
/*!**********************************************************************************!*\
  !*** ./src/profile/updateReplenishmentAmount/updateReplenishAmount.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingTypeLong": () => (/* binding */ BillingTypeLong),
/* harmony export */   "UpdateReplenishmentAmountComponent": () => (/* binding */ UpdateReplenishmentAmountComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var profile_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! profile/constants */ 30129);
/* harmony import */ var accountDashboard_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! accountDashboard/constants */ 75888);
/* harmony import */ var _common_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/utilities */ 56516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var profile_services_webApis_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! profile/services/webApis.service */ 60629);
/* harmony import */ var _storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../storefront/services/storefrontUtility.service */ 18011);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var constants_userRoles_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! constants/userRoles.constants */ 32994);
/* harmony import */ var common_services_session_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/services/session/session.service */ 19511);
/* harmony import */ var authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! authentication/authenticationService/authentication.service */ 44722);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/ui/display/cmsContent/cmsContent.component */ 89707);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _validation_min_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../validation/min.directive */ 44854);
/* harmony import */ var _validation_max_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../validation/max.directive */ 54491);
/* harmony import */ var _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../validation/errorMessages/errorMessages.component */ 65316);
/* harmony import */ var _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../validation/errorMessages/errorMessage.component */ 79636);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../common/ui/modals/actionButtons/actionButtons.component */ 65380);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../pipes/safeHtml.pipe */ 49985);


































function UpdateReplenishmentAmountComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 15)(1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("change", function UpdateReplenishmentAmountComponent_div_10_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return ctx_r8.authorizeChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](3, " Authorize HCTRA to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function UpdateReplenishmentAmountComponent_div_10_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return ctx_r10.onAuthorizationClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](5, "replenish account automatically");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("checked", ctx_r1.currentUser == null ? null : ctx_r1.currentUser.rebillOptIn);
  }
}

function UpdateReplenishmentAmountComponent_section_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](1, "cms-content", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("template", ctx_r2.content.ShortDescription)("data", ctx_r2.shortDescriptionParams);
  }
}

function UpdateReplenishmentAmountComponent_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](2, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](2, 1, ctx_r3.replenishmentAmtError.LongDescription), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsanitizeHtml"]);
  }
}

const _c0 = function (a0) {
  return {
    "display": a0
  };
};

function UpdateReplenishmentAmountComponent_section_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "section")(1, "div", 20)(2, "mat-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](3, "NEW REPLENISHMENT AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](4, "div")(5, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("focus", function UpdateReplenishmentAmountComponent_section_14_Template_input_focus_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r15);

      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](9);

      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return ctx_r14.switchTo(_r13);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](7, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("ngModelChange", function UpdateReplenishmentAmountComponent_section_14_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return ctx_r16.rebillObj.rebillAmount = $event;
    })("blur", function UpdateReplenishmentAmountComponent_section_14_Template_input_blur_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return ctx_r17.paymentAmountFocus = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](10, "error-messages", 26)(11, "error-message", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](12, "Please enter a valid amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](13, "error-message", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](14, "Please enter a valid amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](15, "error-message", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](16, "Minimum amount must be more than ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](17, "currency", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](18, "error-message", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](19, "Maximum amount must be less than ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](20, "currency", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](8);

    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("error-check", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵclassProp"]("disabled", !(ctx_r4.currentUser == null ? null : ctx_r4.currentUser.rebillOptIn) && (ctx_r4.currentUser == null ? null : ctx_r4.currentUser.isFlexPay));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpureFunction1"](12, _c0, ctx_r4.paymentAmountFocus ? "none" : "inherit"))("value", ctx_r4.paymentAmountWithCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpureFunction1"](14, _c0, ctx_r4.paymentAmountFocus ? "inherit" : "none"))("ngModel", ctx_r4.rebillObj.rebillAmount)("min", !(ctx_r4.currentUser == null ? null : ctx_r4.currentUser.rebillOptIn) && (ctx_r4.currentUser == null ? null : ctx_r4.currentUser.isFlexPay) ? 0 : ctx_r4.minNeededDeposit)("max", 4800);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("errors", _r12.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("value", ctx_r4.minNeededDeposit);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("value", 4800);
  }
}

function UpdateReplenishmentAmountComponent_section_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "section", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](1, "cms-content", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("template", ctx_r5.content.LongDescription)("data", ctx_r5.longDescriptionParams);
  }
}

function UpdateReplenishmentAmountComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
}

const _c1 = function (a0) {
  return {
    "opt-out": a0
  };
};

var BillingTypeLong;

(function (BillingTypeLong) {
  BillingTypeLong["BankAccount"] = "bank account";
  BillingTypeLong["CreditCard"] = "credit card";
})(BillingTypeLong || (BillingTypeLong = {}));

;
class UpdateReplenishmentAmountComponent {
  constructor(state, dialogService, uiRouterGlobals, profileApiService, storefrontUtilityService, toasterService, currencyPipe, isInvoicedService, userRoles, session, authService, manageBillingService, currentUserService) {
    this.state = state;
    this.dialogService = dialogService;
    this.uiRouterGlobals = uiRouterGlobals;
    this.profileApiService = profileApiService;
    this.storefrontUtilityService = storefrontUtilityService;
    this.toasterService = toasterService;
    this.currencyPipe = currencyPipe;
    this.isInvoicedService = isInvoicedService;
    this.userRoles = userRoles;
    this.session = session;
    this.authService = authService;
    this.manageBillingService = manageBillingService;
    this.currentUserService = currentUserService;
    this.saveButtonText = 'SAVE';
    this.content = {
      Title: '',
      ShortDescription: '',
      LongDescription: ''
    };
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.rebillObj = {
        accountType: 'false',
        currentRebillAmount: 0,
        minimumBalance: 0,
        minimumBalanceMultiplier: _this.cmsContent.minimumBalanceMultiplier,
        rebillAmount: null
      };
      _this.isPendingClosure = _this.session.userRole === _this.userRoles.pendingClosure;
      _this.isAccountInvoiced = _this.isInvoicedService.isAccountInvoiced();
      _this.currentUser = yield _this.currentUserService.getCurrentUser();
      const cmsId = _this.isAccountInvoiced ? profile_constants__WEBPACK_IMPORTED_MODULE_3__.childCmsIds.InvoicedAccountsReplenishmentAmountError : profile_constants__WEBPACK_IMPORTED_MODULE_3__.childCmsIds.PendingClosureReplenishmentAmountError;
      _this.replenishmentAmtError = _this.cmsContent.Children.find(content => content.ItemID === cmsId.toLocaleLowerCase());
      _this.minNeededDeposit = 0;
      _this.shortDescriptionParams = {
        accountMinBalance: 0,
        currentReplenishmentAmount: 0
      };
      _this.longDescriptionParams = {
        newAccountMinBalance: _this.calculateMinAcctBalance(_this.rebillObj.rebillAmount),
        newReplenishmentAmount: _this.rebillObj.rebillAmount || 0,
        billingTypeLong: null
      };
      _this.isKiosk = _this.storefrontUtilityService.isRunningAsKiosk && !_this.storefrontUtilityService.webStoreData.fullSiteMode;

      if (_this.isKiosk || _this.currentUser.isFlexPay) {
        _this.saveButtonText = 'PROCEED';
      }

      if (_this.currentUser.isFlexPay) {
        const flexPayCMSContent = _this.cmsContent.Children.find(content => content.ItemID === profile_constants__WEBPACK_IMPORTED_MODULE_3__.childCmsIds.FlexPayUpdateReplenishment.toLocaleLowerCase());

        _this.content.LongDescription = flexPayCMSContent && flexPayCMSContent.LongDescription || '';
        _this.content.ShortDescription = flexPayCMSContent && flexPayCMSContent.ShortDescription || '';
        _this.content.Title = flexPayCMSContent && flexPayCMSContent.Title || '';
      } else {
        _this.content.LongDescription = _this.cmsContent.LongDescription;
        _this.content.ShortDescription = _this.cmsContent.ShortDescription;
        _this.content.Title = _this.cmsContent.Title;
      }

      if (!_this.isKiosk && (_this.isPendingClosure || _this.isAccountInvoiced) && !_this.currentUser.isFlexPay) {
        _this.saveButtonText = 'RETURN TO ACCOUNT DASHBOARD';
      }

      _this.paymentAmountFocus = false;
      yield _this.getAccountInfo();
    })();
  }

  authorizeChange(e) {
    this.currentUser.rebillOptIn = e.target.checked;
    this.rebillObj.rebillAmount = this.currentUser.rebillOptIn ? this.accountData.rebillAmount : 0;
    this.minNeededDeposit = 0;

    if (this.accountData && this.currentUser.rebillOptIn) {
      this.minNeededDeposit = this.accountData.billingInfo.billingTypeDisplay === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft ? this.accountData.depositAmtEFT : this.accountData.depositAmtCC;
      this.rebillObj.rebillAmount = this.minNeededDeposit;

      if (this.minNeededDeposit < this.cmsContent.minReqDeposit) {
        this.minNeededDeposit = this.cmsContent.minReqDeposit;
      }
    }
  }

  onAuthorizationClick() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const replenishmentAmountCms = _this2.cmsContent.Children.find(content => content.ItemID === profile_constants__WEBPACK_IMPORTED_MODULE_3__.childCmsIds.ReplenishmentAmount.toLocaleLowerCase());

      const data = {
        modalCms: replenishmentAmountCms
      };
      yield _this2.dialogService.openSliderCentered(common_ui__WEBPACK_IMPORTED_MODULE_2__.ReplenishmentInfoModalComponent, data, {
        title: replenishmentAmountCms === null || replenishmentAmountCms === void 0 ? void 0 : replenishmentAmountCms.Title
      });
    })();
  }

  ngDoCheck() {
    const billingTypeText = this.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft ? BillingTypeLong.BankAccount : BillingTypeLong.CreditCard; //The newReplenishmentAmount and newAccountMinBalance change depending on user input

    this.longDescriptionParams = {
      newAccountMinBalance: this.calculateMinAcctBalance(this.rebillObj.rebillAmount),
      newReplenishmentAmount: this.rebillObj.rebillAmount || 0,
      billingTypeLong: billingTypeText
    };
  }

  getAccountInfo() {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a; // Pull the account type and current rebill amount from state params (to minimize API Calls)


      _this3.accountData = (_a = _this3.uiRouterGlobals.params) === null || _a === void 0 ? void 0 : _a.accountData; // Pull the account type and the current rebill amount from API (if needed/not obtained from state params)

      if (!_this3.accountData) {
        const accountInfoApiResponse = yield _this3.profileApiService.getAccountInfo();
        _this3.accountData = accountInfoApiResponse;
      }

      if (_this3.accountData) {
        _this3.minNeededDeposit = _this3.accountData.billingInfo.billingTypeDisplay === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft ? _this3.accountData.depositAmtEFT : _this3.accountData.depositAmtCC;

        if (_this3.minNeededDeposit < _this3.cmsContent.minReqDeposit) {
          _this3.minNeededDeposit = _this3.cmsContent.minReqDeposit;
        }

        _this3.billingType = _this3.accountData.billingInfo.billingTypeDisplay;
        const billingTypeText = _this3.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft ? BillingTypeLong.BankAccount : BillingTypeLong.CreditCard;
        _this3.shortDescriptionParams = {
          accountMinBalance: _this3.accountData.minimumBalance,
          currentReplenishmentAmount: _this3.accountData.rebillAmount || 0
        };
        _this3.longDescriptionParams = {
          newAccountMinBalance: _this3.calculateMinAcctBalance(_this3.rebillObj.rebillAmount),
          newReplenishmentAmount: _this3.rebillObj.rebillAmount || 0,
          billingTypeLong: billingTypeText
        };
      }

      _this3.rebillObj.rebillAmount = _this3.currentUser.rebillOptIn ? _this3.accountData.rebillAmount : 0;
    })();
  }

  isReBillAmtNotChanged() {
    var _a, _b;

    return (this.accountData && ((_a = this.accountData) === null || _a === void 0 ? void 0 : _a.rebillAmount)) === (this.rebillObj && ((_b = this.rebillObj) === null || _b === void 0 ? void 0 : _b.rebillAmount));
  }

  showCompletionModal() {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const cmsId = _this4.currentUser.isFlexPay ? profile_constants__WEBPACK_IMPORTED_MODULE_3__.childCmsIds.OptOutCompletionModal : profile_constants__WEBPACK_IMPORTED_MODULE_3__.childCmsIds.CompletionModal;

      const modalCms = _this4.cmsContent.Children.find(content => content.ItemID === cmsId.toLocaleLowerCase());

      const data = {
        cmsContent: {
          Title: modalCms.Title,
          AcceptBtn: 'OKAY',
          PrimaryContent: modalCms.ShortDescription
        }
      };
      yield _this4.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_2__.GenericCmsModalComponent, data);
    })();
  }

  displayErrorForRequiredMinAmount() {
    //Enforce business rules that are not enforced by webservices, hardcoded on fronted on legacy HCTRA site
    //hardcoded alert for minimum balance depending upon the type of account, webservices only make sure value is not <=0 and NAN
    if (this.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft && this.rebillObj.rebillAmount < this.accountData.depositAmtEFT) {
      this.toasterService.show('Error', 'The required minimum replenishment amount for your account is $' + this.accountData.depositAmtEFT);
      return true;
    }

    if (this.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit && this.rebillObj.rebillAmount < this.accountData.depositAmtCC) {
      this.toasterService.show('Error', 'The required minimum replenishment amount for your account is $' + this.accountData.depositAmtCC);
      return true;
    }

    return false;
  }

  // Used in the action button component
  saveInformation(form, wizardUi) {
    var _this5 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.isPendingClosure || _this5.isAccountInvoiced) {
        if (_this5.isKiosk && wizardUi) {
          yield wizardUi.gotoNextState();
          return;
        }

        yield _this5.state.go(accountDashboard_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.Frame);
        return;
      }

      if (!form.valid) {
        return;
      }

      if ((_this5.currentUser.isFlexPay && _this5.currentUser.rebillOptIn || !_this5.currentUser.isFlexPay) && _this5.displayErrorForRequiredMinAmount()) {
        return;
      }

      if (_this5.isReBillAmtNotChanged()) {
        if (_this5.isKiosk && wizardUi) {
          const state = _this5.state.current;
          state['wizard']['isEndState'] = true;
          yield wizardUi.gotoNextState();
          state['wizard']['isEndState'] = false;
        } else {
          yield _this5.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_3__.stateNames.AccountDetails);
          ;
        }

        return;
      }

      if (_this5.currentUser.isFlexPay && _this5.currentUser.rebillOptIn) {
        _this5.viewBillingClick(wizardUi);
      } else {
        const apiResponse = yield _this5.profileApiService.updateRebillAmount(_this5.rebillObj);

        if (apiResponse) {
          yield _this5.showCompletionModal();
          yield _this5.authService.profile({});

          if (_this5.isKiosk && wizardUi) {
            yield wizardUi.gotoCancelState();
            return;
          }

          yield _this5.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_3__.stateNames.AccountDetails);
        }
      }
    })();
  }

  viewBillingClick(wizardUi) {
    var _this6 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.manageBillingService.rebillObj = _this6.rebillObj;

      if (!_this6.isKiosk) {
        yield _this6.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_3__.stateNames.UpdateFlexpayBillingInformation);
      }

      if (_this6.isKiosk && wizardUi) {
        yield wizardUi.gotoNextState();
        return;
      }
    })();
  } // Used in the action buttons component.


  cancel(wizardUi) {
    var _this7 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this7.isKiosk && wizardUi) {
        yield wizardUi.gotoCancelState();
        return;
      }

      yield _this7.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_3__.stateNames.AccountDetails);
    })();
  }

  calculateMinAcctBalance(input) {
    var _a, _b;

    this.rebillObj.minimumBalance = input * this.rebillObj.minimumBalanceMultiplier;
    this.rebillObj.minimumBalance = this.rebillObj.minimumBalance < this.cmsContent.minLowBalance ? this.cmsContent.minLowBalance : this.rebillObj.minimumBalance;

    if (!((_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.rebillOptIn) && ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.isFlexPay)) {
      this.rebillObj.minimumBalance = 0;
    }

    return this.rebillObj.minimumBalance || 0;
  }

  switchTo(input) {
    var _this8 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.paymentAmountFocus = true;
      yield (0,_common_utilities__WEBPACK_IMPORTED_MODULE_5__.wait)(0);
      input.focus();
      input.select();
    })();
  }

  get paymentAmountWithCurrency() {
    try {
      return this.currencyPipe.transform(this.rebillObj.rebillAmount, 'USD');
    } catch (e) {
      return '';
    }
  }

}

UpdateReplenishmentAmountComponent.ɵfac = function UpdateReplenishmentAmountComponent_Factory(t) {
  return new (t || UpdateReplenishmentAmountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_26__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_26__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](profile_services_webApis_service__WEBPACK_IMPORTED_MODULE_7__.WebApisService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_8__.StorefrontUtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_27__.CurrencyPipe), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.IsInvoicedService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](constants_userRoles_constants__WEBPACK_IMPORTED_MODULE_9__.UserRoles), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](common_services_session_session_service__WEBPACK_IMPORTED_MODULE_10__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_11__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.ManageBillingService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.CurrentUserService));
};

UpdateReplenishmentAmountComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineComponent"]({
  type: UpdateReplenishmentAmountComponent,
  selectors: [["update-replenishment-amount"]],
  inputs: {
    cmsContent: "cmsContent"
  },
  decls: 23,
  vars: 11,
  consts: [["hasAlternateBackgroundColor", "true"], ["fxLayout", "column"], ["fxFlexOffset", "21px"], ["validation-focus", "", "novalidate", "", "fxLayout", "column start", "method", "post"], ["ChangeReplenishmentAmountForm", "ngForm"], [1, "u-spacing__divider--marginTopBottom"], ["class", "fx-layout-row fx-layout-align-end-center", 4, "ngIf"], [3, "ngClass"], [4, "ngIf"], ["class", "u-spacing__fieldToField--marginTop", 4, "ngIf"], [1, "u-spacing__buttonToField--marginTop"], [3, "main", "alt"], ["action-main", "", "tabindex", "2"], ["action-alt", "", "tabindex", "3", 4, "ngIf"], ["wizardUi", ""], [1, "fx-layout-row", "fx-layout-align-end-center"], ["type", "checkbox", 3, "checked", "change"], [1, "reflenish-link", 3, "click"], [3, "template", "data"], [3, "innerHTML"], ["fxLayout", "column", 1, "u-spacing__fieldToField--marginTop", 3, "error-check"], ["for", "newReplenishmentAmount"], ["type", "text", "name", "paymentAmountDisplay", 3, "ngStyle", "value", "focus"], ["newReplenishmentAmountTxtBox", ""], ["type", "number", "step", ".01", "tabindex", "-1", "name", "newReplenishmentAmount", "pattern", "^[0-9]*(\\.[0-9]{0,2})?$", "required", "", 3, "ngStyle", "ngModel", "min", "max", "ngModelChange", "blur"], ["newReplenishmentAmountInput", "ngModel", "paymentAmountElm", ""], [3, "errors"], ["rule", "required"], ["rule", "pattern"], ["rule", "min"], [3, "value"], ["rule", "max"], [1, "u-spacing__fieldToField--marginTop"], ["action-alt", "", "tabindex", "3"]],
  template: function UpdateReplenishmentAmountComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3, 4)(5, "card-container")(6, "header")(7, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](9, "mat-divider", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](10, UpdateReplenishmentAmountComponent_div_10_Template, 6, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](11, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](12, UpdateReplenishmentAmountComponent_section_12_Template, 2, 2, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](13, UpdateReplenishmentAmountComponent_section_13_Template, 3, 3, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](14, UpdateReplenishmentAmountComponent_section_14_Template, 21, 16, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](15, UpdateReplenishmentAmountComponent_section_15_Template, 2, 2, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](16, "div", 10)(17, "action-buttons", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("main", function UpdateReplenishmentAmountComponent_Template_action_buttons_main_17_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r18);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](4);

        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](22);

        return ctx.saveInformation(_r0, _r7);
      })("alt", function UpdateReplenishmentAmountComponent_Template_action_buttons_alt_17_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r18);

        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](22);

        return ctx.cancel(_r7);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](18, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](20, UpdateReplenishmentAmountComponent_span_20_Template, 2, 0, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](21, "wizard-ui", null, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx.isPendingClosure || ctx.isAccountInvoiced ? ctx.replenishmentAmtError.Title : ctx.cmsContent.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.currentUser == null ? null : ctx.currentUser.isFlexPay);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpureFunction1"](9, _c1, !(ctx.currentUser == null ? null : ctx.currentUser.rebillOptIn) && (ctx.currentUser == null ? null : ctx.currentUser.isFlexPay)));
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !ctx.isPendingClosure && !ctx.isAccountInvoiced && ctx.content.ShortDescription || (ctx.currentUser == null ? null : ctx.currentUser.isFlexPay));
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.isPendingClosure || ctx.isAccountInvoiced);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !ctx.isPendingClosure && !ctx.isAccountInvoiced);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !ctx.isPendingClosure && !ctx.isAccountInvoiced && ctx.content.LongDescription || (ctx.currentUser == null ? null : ctx.currentUser.isFlexPay));
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx.saveButtonText);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !ctx.isKiosk && !ctx.isPendingClosure && !ctx.isAccountInvoiced);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_12__.PageCenteredContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__.DefaultFlexOffsetDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_13__.FocusDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_14__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_31__.DefaultClassDirective, _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_15__.CmsContentComponent, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_16__.ErrorCheckDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatLabel, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_31__.DefaultStyleDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NumberValueAccessor, _validation_min_directive__WEBPACK_IMPORTED_MODULE_17__.MinDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.MinValidator, _validation_max_directive__WEBPACK_IMPORTED_MODULE_18__.MaxDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgModel, _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_19__.ErrorMessagesComponent, _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_20__.ErrorMessageComponent, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_21__.CurrencyComponent, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_22__.ActionButtonsComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_23__.WizardComponent],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_24__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   .reflenish-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .opt-out[_ngcontent-%COMP%]     .agree-tag {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZVJlcGxlbmlzaEFtb3VudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRVEsV0FBQTtBQUZSO0FBQUE7RUFNUSxlQUFBO0FBSFI7QUFIQTtFQVdZLGFBQUE7QUFMWiIsImZpbGUiOiJ1cGRhdGVSZXBsZW5pc2hBbW91bnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG5cbiAgICAucmVmbGVuaXNoLWxpbmsge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLm9wdC1vdXQge1xuICAgICAgICA6Om5nLWRlZXAgLmFncmVlLXRhZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 26983:
/*!********************************************************************************!*\
  !*** ./src/profile/updateSecurityQuestion/updateSecurityQuestion.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateSecurityQuestionComponent": () => (/* binding */ UpdateSecurityQuestionComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_ui_modals_genericCmsModal_genericCmsModal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/ui/modals/genericCmsModal/genericCmsModal.component */ 21920);
/* harmony import */ var profile_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! profile/constants */ 30129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var authentication_addMissingInformationService_addMissingInformation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! authentication/addMissingInformationService/addMissingInformation.service */ 10402);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _common_ui_form_entry_showHideInputButton_showHideInputButton_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/form-entry/showHideInputButton/showHideInputButton.component */ 27554);
/* harmony import */ var _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../validation/errorMessages/errorMessages.component */ 65316);
/* harmony import */ var _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../validation/errorMessages/errorMessage.component */ 79636);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 73067);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/modals/actionButtons/actionButtons.component */ 65380);
























function UpdateSecurityQuestionComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "article", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("innerHtml", ctx_r1.cmsContent.ShortDescription, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeHtml"]);
  }
}

function UpdateSecurityQuestionComponent_mat_option_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("valueChange", function UpdateSecurityQuestionComponent_mat_option_29_Template_mat_option_valueChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9);
      const question_r7 = restoredCtx.$implicit;
      return question_r7.securityQuestionID = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const question_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", question_r7.securityQuestionID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](question_r7.securityQuestion);
  }
}

class UpdateSecurityQuestionComponent {
  constructor(responseErrorService, accountService, state, addMissingInformationService, dialogService) {
    this.responseErrorService = responseErrorService;
    this.accountService = accountService;
    this.state = state;
    this.addMissingInformationService = addMissingInformationService;
    this.dialogService = dialogService;
    this.isShowPassword = false;
    this.isShowSecurityAnswer = false;
    this.isShowSecurityAnswerConfirm = false;
  }

  ngOnInit() {
    this.addMissingInformation = {
      password: '',
      confirmPassword: '',
      email: '',
      confirmEmail: '',
      securityAnswer: '',
      confirmSecurityAnswer: '',
      securityQuestionID: '',
      currentPassword: '',
      missingInformationFlags: this.addMissingInformationService.returnMissingInformation()
    };
    this.setSecurityQuestions();
  }

  setSecurityQuestions() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const apiResponse = yield _this.accountService.getSecurityQuestions();

      if (_this.responseErrorService.isErrorFree(apiResponse)) {
        _this.securityQuestions = apiResponse.securityQuestions;
      }
    })();
  }

  showCompletionModal() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modalCms = _this2.cmsContent.Children[0];
      const data = {
        cmsContent: {
          Title: modalCms.Title,
          AcceptBtn: 'OKAY',
          PrimaryContent: modalCms.ShortDescription
        }
      };
      yield _this2.dialogService.openGenericModal(common_ui_modals_genericCmsModal_genericCmsModal_component__WEBPACK_IMPORTED_MODULE_1__.GenericCmsModalComponent, data);
    })();
  } // Used in the action buttons component.


  saveInformation(form) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!form.valid) {
        return;
      }

      const apiResponse = yield _this3.accountService.saveInformation(_this3.addMissingInformation);

      if (_this3.responseErrorService.isErrorFree(apiResponse)) {
        yield _this3.showCompletionModal();
        yield _this3.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.AccountDetails);
      }
    })();
  } // Used in the action buttons component.


  cancel() {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.state.go(profile_constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.AccountDetails);
    })();
  }

}

UpdateSecurityQuestionComponent.ɵfac = function UpdateSecurityQuestionComponent_Factory(t) {
  return new (t || UpdateSecurityQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_14__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](authentication_addMissingInformationService_addMissingInformation_service__WEBPACK_IMPORTED_MODULE_4__.AddMissingInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.DialogService));
};

UpdateSecurityQuestionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: UpdateSecurityQuestionComponent,
  selectors: [["update-security-question"]],
  inputs: {
    cmsContent: "cmsContent"
  },
  decls: 69,
  vars: 25,
  consts: [["hasAlternateBackgroundColor", "true"], ["fxLayout", "column"], ["fxFlexOffset", "21px"], ["validation-focus", "", "novalidate", "", "fxLayout", "column start", "method", "post"], ["ChangeSecurityQuestionForm", "ngForm"], [1, "u-spacing__divider--marginTopBottom"], [4, "ngIf"], ["fxLayout", "column", 3, "error-check"], ["for", "currentPassword"], ["type", "text", "id", "currentPasswordTxtBox", "name", "currentPassword", "tabindex", "1", "required", "", 3, "ngModel", "type", "ngModelChange"], ["currentPasswordInput", "ngModel"], [3, "showField", "showFieldChange"], [3, "errors", "activeBeforeSubmit"], ["rule", "required"], [1, "u-spacing__fieldToField--marginTop"], ["fxLayout", "row", "ngClass", "labelMargin"], ["name", "securityQuestions", "id", "securityQuestions", "placeholder", "Please select security question", "required", "", "tabindex", "2", 3, "ngModel", "ngModelChange"], ["SecurityQuestion", "ngModel"], [3, "value", "valueChange", 4, "ngFor", "ngForOf"], ["fxLayout", "column", 1, "u-spacing__fieldToField--marginTop"], ["for", "Answer", "fxLayout", "row", "ngClass", "labelMargin"], ["fxLayout", "row", "id", "Answer", "name", "answer", "pattern", "^[a-zA-Z0-9]{1,20}$", "required", "", "tabindex", "3", "minlength", "1", "maxlength", "20", 3, "type", "value", "ngModel", "valueChange", "ngModelChange"], ["Answer", "ngModel"], ["rule", "pattern"], ["rule", "maxlength"], ["rule", "minlength"], ["for", "ConfirmAnswer", "fxLayout", "row", "ngClass", "labelMargin"], ["fxLayout", "row", "id", "ConfirmAnswer", "name", "confirmAnswer", "required", "", "tabindex", "4", "minlength", "1", "maxlength", "20", 3, "type", "value", "ngModel", "pattern", "valueChange", "ngModelChange"], ["ConfirmAnswer", "ngModel"], [1, "u-spacing__buttonToField--marginTop"], [3, "main", "alt"], ["action-main", "", "tabindex", "5"], ["action-alt", "", "tabindex", "6"], [3, "innerHtml"], [3, "value", "valueChange"]],
  template: function UpdateSecurityQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3, 4)(5, "card-container")(6, "header")(7, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "mat-divider", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, UpdateSecurityQuestionComponent_section_10_Template, 2, 1, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "section")(12, "div", 7)(13, "mat-label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "CURRENT PASSWORD (REQUIRED)");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "input", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function UpdateSecurityQuestionComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.addMissingInformation.currentPassword = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "show-hide-input-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("showFieldChange", function UpdateSecurityQuestionComponent_Template_show_hide_input_button_showFieldChange_17_listener($event) {
        return ctx.isShowPassword = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "error-messages", 12)(19, "error-message", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "Please enter your password");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "section", 14)(22, "section", 1)(23, "div")(24, "mat-label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "SELECT SECURITY QUESTION");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div")(27, "mat-select", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function UpdateSecurityQuestionComponent_Template_mat_select_ngModelChange_27_listener($event) {
        return ctx.addMissingInformation.securityQuestionID = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](29, UpdateSecurityQuestionComponent_mat_option_29_Template, 2, 2, "mat-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "error-messages", 12)(31, "error-message", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32, "Please select a new security question.");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "section", 19)(34, "div")(35, "mat-label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](36, "YOUR ANSWER");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "div")(38, "input", 21, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("valueChange", function UpdateSecurityQuestionComponent_Template_input_valueChange_38_listener($event) {
        return ctx.addMissingInformation.securityAnswer = $event;
      })("ngModelChange", function UpdateSecurityQuestionComponent_Template_input_ngModelChange_38_listener($event) {
        return ctx.addMissingInformation.securityAnswer = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "show-hide-input-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("showFieldChange", function UpdateSecurityQuestionComponent_Template_show_hide_input_button_showFieldChange_40_listener($event) {
        return ctx.isShowSecurityAnswer = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "error-messages", 12)(42, "error-message", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43, "Please enter a answer.");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "error-message", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45, "Please enter a valid answer.");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "error-message", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47, "Max. 20 alpha num character.");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "error-message", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49, "Min. 1 alpha num character.");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "section", 19)(51, "div")(52, "mat-label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](53, "CONFIRM YOUR ANSWER");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "div")(55, "input", 27, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("valueChange", function UpdateSecurityQuestionComponent_Template_input_valueChange_55_listener($event) {
        return ctx.addMissingInformation.confirmSecurityAnswer = $event;
      })("ngModelChange", function UpdateSecurityQuestionComponent_Template_input_ngModelChange_55_listener($event) {
        return ctx.addMissingInformation.confirmSecurityAnswer = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "show-hide-input-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("showFieldChange", function UpdateSecurityQuestionComponent_Template_show_hide_input_button_showFieldChange_57_listener($event) {
        return ctx.isShowSecurityAnswerConfirm = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](58, "error-messages", 12)(59, "error-message", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](60, "Please enter a answer.");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](61, "error-message", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](62, "Please make sure your security answers match.");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](63, "div", 29)(64, "action-buttons", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("main", function UpdateSecurityQuestionComponent_Template_action_buttons_main_64_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](4);

        return ctx.saveInformation(_r0);
      })("alt", function UpdateSecurityQuestionComponent_Template_action_buttons_alt_64_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](66, "SAVE");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](67, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](68, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](16);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](28);

      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](39);

      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](56);

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.cmsContent.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.cmsContent.ShortDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("error-check", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.addMissingInformation.currentPassword)("type", ctx.isShowPassword ? "text" : "password");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("showField", ctx.isShowPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("errors", _r2.errors)("activeBeforeSubmit", _r2.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.addMissingInformation.securityQuestionID);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.securityQuestions);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("errors", _r3.errors)("activeBeforeSubmit", _r3.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", ctx.isShowSecurityAnswer ? "text" : "password")("value", ctx.addMissingInformation.securityAnswer)("ngModel", ctx.addMissingInformation.securityAnswer);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("showField", ctx.isShowSecurityAnswer);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("errors", _r5.errors)("activeBeforeSubmit", _r5.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("pattern", "^", ctx.addMissingInformation.securityAnswer, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", ctx.isShowSecurityAnswerConfirm ? "text" : "password")("value", ctx.addMissingInformation.confirmSecurityAnswer)("ngModel", ctx.addMissingInformation.confirmSecurityAnswer);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("showField", ctx.isShowSecurityAnswerConfirm);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("errors", _r6.errors)("activeBeforeSubmit", _r6.touched);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__.PageCenteredContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultFlexOffsetDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_6__.FocusDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_8__.ErrorCheckDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _common_ui_form_entry_showHideInputButton_showHideInputButton_component__WEBPACK_IMPORTED_MODULE_9__.ShowHideInputButtonComponent, _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_10__.ErrorMessagesComponent, _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_11__.ErrorMessageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__.DefaultClassDirective, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.MaxLengthValidator, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_12__.ActionButtonsComponent],
  styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZVNlY3VyaXR5UXVlc3Rpb24ubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVRLFdBQUE7QUFGUiIsImZpbGUiOiJ1cGRhdGVTZWN1cml0eVF1ZXN0aW9uLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgbWF0LWRpdmlkZXIge1xuICAgICAgICB3aWR0aDogQHdpZHRoLWRpdmlkZXI7XG4gICAgfVxufVxuIl19 */"]
});

/***/ })

}]);
//# sourceMappingURL=129.4d1111d5572b4660.js.map