"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[917],{

/***/ 11917:
/*!*******************************!*\
  !*** ./src/2FA/2FA.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwoFactorAuthModule": () => (/* binding */ TwoFactorAuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ 45046);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var validation_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validation/module */ 26186);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var cms_cms_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cms/cms.module */ 92985);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/overlay */ 41938);
/* harmony import */ var _components_accountSearch_accountSearch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/accountSearch/accountSearch.component */ 94039);
/* harmony import */ var _components_phoneVerifcationSelection_phoneVerifcationSelection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/phoneVerifcationSelection/phoneVerifcationSelection.component */ 36099);
/* harmony import */ var _components_enterVerificationCode_enterVerificationCode_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/enterVerificationCode/enterVerificationCode.component */ 94582);
/* harmony import */ var _services_2FA_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/2FA.service */ 70664);
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pipes/module */ 20445);
/* harmony import */ var _components_locateYourAccount_locateYourAccount_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/locateYourAccount/locateYourAccount.component */ 42350);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 28596);


















;
class TwoFactorAuthModule {
}
TwoFactorAuthModule.ɵfac = function TwoFactorAuthModule_Factory(t) { return new (t || TwoFactorAuthModule)(); };
TwoFactorAuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: TwoFactorAuthModule });
TwoFactorAuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        _services_2FA_service__WEBPACK_IMPORTED_MODULE_5__.TwoFAService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            common_module__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            pipes_module__WEBPACK_IMPORTED_MODULE_7__.PipesModule,
            validation_module__WEBPACK_IMPORTED_MODULE_0__.ValidationModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
            cms_cms_module__WEBPACK_IMPORTED_MODULE_1__.CmsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__.OverlayModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](TwoFactorAuthModule, { declarations: [_components_accountSearch_accountSearch_component__WEBPACK_IMPORTED_MODULE_2__.AccountSearchComponent,
        _components_phoneVerifcationSelection_phoneVerifcationSelection_component__WEBPACK_IMPORTED_MODULE_3__.PhoneVerifcationSelectionComponent,
        _components_enterVerificationCode_enterVerificationCode_component__WEBPACK_IMPORTED_MODULE_4__.EnterVerificationCodeComponent,
        _components_locateYourAccount_locateYourAccount_component__WEBPACK_IMPORTED_MODULE_8__.LocateYourAccountComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        common_module__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        pipes_module__WEBPACK_IMPORTED_MODULE_7__.PipesModule,
        validation_module__WEBPACK_IMPORTED_MODULE_0__.ValidationModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
        cms_cms_module__WEBPACK_IMPORTED_MODULE_1__.CmsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__.OverlayModule], exports: [_components_accountSearch_accountSearch_component__WEBPACK_IMPORTED_MODULE_2__.AccountSearchComponent,
        _components_phoneVerifcationSelection_phoneVerifcationSelection_component__WEBPACK_IMPORTED_MODULE_3__.PhoneVerifcationSelectionComponent,
        _components_enterVerificationCode_enterVerificationCode_component__WEBPACK_IMPORTED_MODULE_4__.EnterVerificationCodeComponent,
        _components_locateYourAccount_locateYourAccount_component__WEBPACK_IMPORTED_MODULE_8__.LocateYourAccountComponent] }); })();


/***/ }),

/***/ 94039:
/*!*********************************************************************!*\
  !*** ./src/2FA/components/accountSearch/accountSearch.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountSearchComponent": () => (/* binding */ AccountSearchComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _2FA_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 2FA/interfaces */ 61954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_toolTip_toolTip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/ui/toolTip/toolTip.component */ 63087);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 73067);
/* harmony import */ var _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../validation/errorMessages/errorMessages.component */ 65316);
/* harmony import */ var _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../validation/errorMessages/errorMessage.component */ 79636);
/* harmony import */ var _common_ui_form_entry_emailAddress_emailAddress_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/ui/form-entry/emailAddress/emailAddress.component */ 37864);
/* harmony import */ var _common_ui_form_entry_primaryPhone_primaryPhone_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/ui/form-entry/primaryPhone/primaryPhone.component */ 52129);
/* harmony import */ var _locateYourAccount_locateYourAccount_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../locateYourAccount/locateYourAccount.component */ 42350);





















function AccountSearchComponent_tool_tip_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tool-tip", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-icon", 12)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("useOverlay", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHtml", ctx_r0.titlePopup, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"]);
  }
}

function AccountSearchComponent_section_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section")(1, "email-address", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("emailAddressChange", function AccountSearchComponent_section_21_Template_email_address_emailAddressChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      ctx_r5.data.to = $event;
      return ctx_r5.reset();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("emailAddress", ctx_r2.data.to)("header", ctx_r2.cmsData.LongDescription);
  }
}

function AccountSearchComponent_section_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section")(1, "primary-phone", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("primaryPhoneChange", function AccountSearchComponent_section_22_Template_primary_phone_primaryPhoneChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      ctx_r7.data.to = $event;
      return ctx_r7.reset();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("primaryPhone", ctx_r3.data.to)("header", ctx_r3.cmsData.ShortDescription);
  }
}

function AccountSearchComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "locate-your-account", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("additionalInfoCmsData", ctx_r4.additionalInfoCmsData)("helpLinkCmsData", ctx_r4.helpLinkCmsData)("data", ctx_r4.data)("agencies", ctx_r4.agencies);
  }
}

class AccountSearchComponent {
  constructor(searchAccountForm, dataService) {
    this.searchAccountForm = searchAccountForm;
    this.dataService = dataService;
    this.LoginResetOptionEnum = _2FA_interfaces__WEBPACK_IMPORTED_MODULE_1__.LoginResetOption;
    this.AccountIdentificationOptionEnum = _2FA_interfaces__WEBPACK_IMPORTED_MODULE_1__.AccountIdentificationOption;
    this.data = {};
  }

  get showMoreInfoNeeded() {
    return this.forceRequireMoreInfo || this.data.moreInfoNeeded;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.agencies = yield _this.dataService.getTagAuthorities();
      _this.data.selectedAgency = _this.agencies.find(x => x === AccountSearchComponent.defaultAgency);
      _this.childCms = _this.cmsData.Children.reduce((acc, item) => ({ ...acc,
        [item.ItemName]: item
      }), {});
    })();
  }

  get inputType() {
    switch (this.data.loginResetOption) {
      case _2FA_interfaces__WEBPACK_IMPORTED_MODULE_1__.LoginResetOption.Email:
        return 'email';

      case _2FA_interfaces__WEBPACK_IMPORTED_MODULE_1__.LoginResetOption.Phone:
        return 'tel';

      default:
        return null;
    }
  }

  get additionalInfoCmsData() {
    var _a;

    return (_a = this.childCms) === null || _a === void 0 ? void 0 : _a['More Info'];
  }

  get helpLinkCmsData() {
    var _a;

    return (_a = this.childCms) === null || _a === void 0 ? void 0 : _a['Help Locating Account'];
  }

  get titlePopup() {
    var _a, _b, _c;

    return (_c = (_b = (_a = this.childCms) === null || _a === void 0 ? void 0 : _a['Title Popup']) === null || _b === void 0 ? void 0 : _b.LongDescription) === null || _c === void 0 ? void 0 : _c.trim();
  }

  reset(includeTo = false) {
    this.clearValidations();
    this.data.moreInfoNeeded = false;
    this.data.accountIdentificationOption = null;
    this.data.selectedAgency = AccountSearchComponent.defaultAgency;
    this.data.ezTagNumber = null;
    this.data.accountNumber = null;

    if (includeTo) {
      this.data.to = null;
    }
  }

  clearValidations() {
    //force form to 'forget' it was submitted        
    this.searchAccountForm.submitted = false;
  }

}
AccountSearchComponent.defaultAgency = 'HCTR';

AccountSearchComponent.ɵfac = function AccountSearchComponent_Factory(t) {
  return new (t || AccountSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_2__.DataService));
};

AccountSearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: AccountSearchComponent,
  selectors: [["account-search-component"]],
  inputs: {
    cmsData: "cmsData",
    name: "name",
    forceRequireMoreInfo: "forceRequireMoreInfo",
    data: "data"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵProvidersFeature"]([], [{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ControlContainer,
    useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm
  }])],
  decls: 24,
  vars: 15,
  consts: [[3, "ngModelGroup"], [3, "useOverlay", 4, "ngIf"], [3, "error-check"], ["name", "loginResetOption", "required", "", "placeholder", "Select option", 3, "ngModel", "ngModelChange"], ["LoginResetOptionSelect", "ngModel"], [3, "value"], [3, "errors"], ["rule", "required"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngIf"], [3, "useOverlay"], ["tool-tip-anchor", "", "svgIcon", "information"], ["tool-tip-content", "", 1, "titlePopup", 3, "innerHtml"], [3, "emailAddress", "header", "emailAddressChange"], [3, "primaryPhone", "header", "primaryPhoneChange"], [3, "additionalInfoCmsData", "helpLinkCmsData", "data", "agencies"]],
  template: function AccountSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "card-container", 0)(1, "h2")(2, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, AccountSearchComponent_tool_tip_4_Template, 3, 2, "tool-tip", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "article");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "section", 2)(9, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "mat-select", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function AccountSearchComponent_Template_mat_select_ngModelChange_11_listener($event) {
        ctx.data.loginResetOption = $event;
        return ctx.reset(true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Email address");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Phone number");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "error-messages", 6)(18, "error-message", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](20, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, AccountSearchComponent_section_21_Template, 2, 2, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, AccountSearchComponent_section_22_Template, 2, 2, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, AccountSearchComponent_ng_container_23_Template, 2, 4, "ng-container", 10);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](12);

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModelGroup", ctx.name || "accountSearch");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.cmsData == null ? null : ctx.cmsData.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.titlePopup);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.cmsData == null ? null : ctx.cmsData.Purpose, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("error-check", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.cmsData == null ? null : ctx.cmsData.selectResetOption);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.data.loginResetOption);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", ctx.LoginResetOptionEnum.Email);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", ctx.LoginResetOptionEnum.Phone);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("errors", _r1.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((ctx.cmsData == null ? null : ctx.cmsData.resetOptionRequired) || "Please select a reset option.");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitch", ctx.data.loginResetOption);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", ctx.LoginResetOptionEnum.Email);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", ctx.LoginResetOptionEnum.Phone);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.showMoreInfoNeeded);
    }
  },
  directives: [_common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_3__.CardContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModelGroup, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _common_ui_toolTip_toolTip_component__WEBPACK_IMPORTED_MODULE_4__.ToolTipComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_5__.ErrorCheckDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_6__.ErrorMessagesComponent, _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_7__.ErrorMessageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitchCase, _common_ui_form_entry_emailAddress_emailAddress_component__WEBPACK_IMPORTED_MODULE_8__.EmailAddressComponent, _common_ui_form_entry_primaryPhone_primaryPhone_component__WEBPACK_IMPORTED_MODULE_9__.PrimaryPhoneComponent, _locateYourAccount_locateYourAccount_component__WEBPACK_IMPORTED_MODULE_10__.LocateYourAccountComponent],
  styles: ["mat-label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\ncard-container[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}\ncard-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  width: 100%;\n}\ncard-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    + section[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\narticle[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 20px;\n  margin: 5px 0px;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 20px;\n  width: 65px;\n}\n.titlePopup[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  display: block;\n  background-color: #ffffff;\n  box-shadow: 0px 3px 3px #00000029;\n  padding: 15px 10px 15px 15px;\n  font-size: 14px;\n  font-weight: 500;\n  position: relative;\n  width: calc(50vw - 10%);\n  max-width: 270px;\n  min-height: 90px;\n  top: -45px;\n  left: 20px;\n  margin: 0px 5%;\n}\n@media screen and (min-width: 387px) and (max-width: 599.98px) {\n  .titlePopup[_ngcontent-%COMP%] {\n    max-width: unset;\n  }\n}\n@media screen and (max-width: 386.98px) {\n  .titlePopup[_ngcontent-%COMP%] {\n    width: calc(100vw - 10%);\n    max-width: unset;\n    top: 0px;\n    left: 0px;\n  }\n}\nmat-icon[_ngcontent-%COMP%] {\n  margin: 0px 5px;\n  vertical-align: super;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnRTZWFyY2guY29tcG9uZW50Lmxlc3MiLCIuLlxcLi5cXC4uXFxzdHlsZXNcXGN1c3RvbVxcc3BhY2luZ1xcc2VjdGlvbnMubGVzcyIsIi4uXFwuLlxcLi5cXHN0eWxlc1xcY3VzdG9tXFxzcGFjaW5nXFx1dGlsaXR5Lmxlc3MiLCIuLlxcLi5cXC4uXFxzdHlsZXNcXGN1c3RvbVxcc3BhY2luZ1xcZGl2aWRlcnMubGVzcyIsIi4uXFwuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xcZm9udHMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLHlCQUFBO0FBTEo7QUFRQTtFQUNJLGNBQUE7RUNBSSxnQkFBQTtBRExSO0FBSUE7RUVKUSxXQUFBO0FGR1I7QUFDQTtFQ0NRLGdCQUFBO0FEQ1I7QUFXQTtFR3JCUSxnQkFBQTtFQUNBLG1CQUFBO0VIc0JKLGVBQUE7QUFSSjtBQVdBO0VHMUJRLGdCQUFBO0VBQ0EsbUJBQUE7RUgyQkosV0FBQTtBQVJKO0FBV0E7RUl6QkkseUJBQUE7RUoyQkEsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBVko7QUFZSTtFQUFBO0lBQ0ksZ0JBQUE7RUFUTjtBQUNGO0FBV0k7RUFBQTtJQUNJLHdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtFQVJOO0FBQ0Y7QUFXQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQVRKIiwiZmlsZSI6ImFjY291bnRTZWFyY2guY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy91dGlsaXR5Lmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL3NlY3Rpb25zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL2RpdmlkZXJzLmxlc3MnO1xuXG5tYXQtbGFiZWwge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmNhcmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luVG9wKCk7XG5cbiAgICBzZWN0aW9uIHtcbiAgICAgICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmctLXdpZHRoRmlsbCgpO1xuICAgIH1cblxuICAgIHNlY3Rpb24gKyBzZWN0aW9uIHtcbiAgICAgICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCgpO1xuICAgIH1cbn1cblxuYXJ0aWNsZSB7XG4gICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX2RpdmlkZXItLW1hcmdpblRvcEJvdHRvbSgpO1xuICAgIG1hcmdpbjogNXB4IDBweDtcbn1cblxubWF0LWRpdmlkZXIge1xuICAgIC5yZWZyZXNoLTIwMjAudS1zcGFjaW5nX19kaXZpZGVyLS1tYXJnaW5Ub3BCb3R0b20oKTtcbiAgICB3aWR0aDogQHdpZHRoLWRpdmlkZXI7XG59XG5cbi50aXRsZVBvcHVwIHtcbiAgICAudC1ib2R5LS1mb250RmFtaWx5KCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggM3B4ICMwMDAwMDAyOTtcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIHdpZHRoOiBjYWxjKDUwdncgLSAxMCUpO1xuICAgIG1heC13aWR0aDogMjcwcHg7XG4gICAgbWluLWhlaWdodDogOTBweDtcbiAgICB0b3A6IC00NXB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luOiAwcHggNSU7XG5cbiAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbWljcm8ge1xuICAgICAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICAgIH1cblxuICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1taWNybyB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTAlKTtcbiAgICAgICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICB9XG59XG5cbm1hdC1pY29uIHtcbiAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xufVxuIiwiLnJlZnJlc2gtMjAyMCB7XG4gICAgLy8gRGVza3RvcFxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2hlYWRlclRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpbkJvdHRvbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wSGFsZiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fYnV0dG9uVG9GaWVsZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maXJzdEhlYWRlclRvVGl0bGUtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fY2FyZFRvQ2FyZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19hZGRyZXNzVG9QYXltZW50RGlzcGxheS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG4gICAgLy8gTW9iaWxlXG4gICAgJi5sdC1tZCxcbiAgICAubHQtbWQge1xuICAgICAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuLnJlZnJlc2gtMjAyMCB7XG5cbiAgICAmLnUtc3BhY2luZy0td2lkdGhGaWxsLFxuICAgIC51LXNwYWNpbmctLXdpZHRoRmlsbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC50YWItY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDBweCA3JTtcblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtc20ge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhYi1jb250ZW50IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2U7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNy41MnB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjRweDtcblxuICAgICAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LXNtIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IHVuc2V0O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjY2NlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFubmVyLWltZyB7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMjNweDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1zbSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTI3cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFubmVyLXR4dCB7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI3LjUycHg7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjRweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogSm9zdDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjIxLCA5KTtcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogcmdiKDY3LCA2OSwgNzMpIDNweCAycHggOHB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtc20ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtc3BhY2luZyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLnJlZnJlc2gtMjAyMCB7XG4gICAgLnUtc3BhY2luZ19fZGl2aWRlci0tbWFyZ2luVG9wQm90dG9tIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cblxuLnQtaGVhZGVyLS1mb250RmFtaWx5KCkge1xuICAgIGZvbnQtZmFtaWx5OiBAZm9udC1qb3N0O1xufVxuXG4udC1ib2R5LS1mb250RmFtaWx5KCkge1xuICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xufVxuIl19 */"]
});

/***/ }),

/***/ 94582:
/*!*************************************************************************************!*\
  !*** ./src/2FA/components/enterVerificationCode/enterVerificationCode.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterVerificationCodeComponent": () => (/* binding */ EnterVerificationCodeComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interfaces */ 61954);
/* harmony import */ var _common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/module */ 51392);
/* harmony import */ var _constants_webstorage_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/webstorage.constants */ 60450);
/* harmony import */ var _services_2FA_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/2FA.service */ 70664);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/services */ 8784);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../validation/errorMessages/errorMessages.component */ 65316);
/* harmony import */ var _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../validation/errorMessages/errorMessage.component */ 79636);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/ui/modals/actionButtons/actionButtons.component */ 65380);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../pipes/safeHtml.pipe */ 49985);






















function EnterVerificationCodeComponent_article_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "article", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "safeHtml");
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 1, ctx_r0.cmsInfo.EMAIL_DESC), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeHtml"]);
  }
}

function EnterVerificationCodeComponent_article_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "article", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "safeHtml");
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 1, ctx_r1.cmsInfo.PHONE_DESC), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeHtml"]);
  }
}

function EnterVerificationCodeComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 19)(2, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function EnterVerificationCodeComponent_ng_container_18_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r7.toggleSaveDevice();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("checked", ctx_r4.saveDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.cmsInfo.REMEMBER_CHECHBOX_LABEL);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.cmsInfo.REMEMBER_CHECHBOX_DESC);
  }
}

function EnterVerificationCodeComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-divider", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EnterVerificationCodeComponent_ng_container_22_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r9.tryAnotherWay();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Try Another Way");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("vertical", true);
  }
}

function EnterVerificationCodeComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-divider", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EnterVerificationCodeComponent_ng_container_33_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r11.tryAnotherWay();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Try Another Way");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("vertical", true);
  }
}

class EnterVerificationCodeComponent {
  constructor(webStorageConst, window, twoFAService, toasterService) {
    this.webStorageConst = webStorageConst;
    this.window = window;
    this.twoFAService = twoFAService;
    this.toasterService = toasterService;
    this.tryAnotherWayEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
    this.verifyEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
    this.disableTryAnotherWay = false;
    this.disableWarning = true;
    this.isRememberDevice = false;
  }

  ngOnInit() {
    this.isEmail = this.channel === _interfaces__WEBPACK_IMPORTED_MODULE_1__.Channel.Email;
    this.saveDevice = false;
  }

  resendCode() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        to: _this.contactInfo,
        language: _this.window.localStorage[_this.webStorageConst.selectedLanguage],
        accountId: _this.acctId,
        source: _this.source,
        channel: _this.channel
      };
      const res = yield _this.twoFAService.sendVerificationCode(data);

      if (res) {
        if (res.verificationSent) {
          _this.toasterService.show('Success', _this.cmsInfo.RESEND_SUCCESS);
        } else {
          _this.toasterService.show('Error', _this.cmsInfo.RESEND_FAIL);
        }
      }
    })();
  }

  tryAnotherWay() {
    this.tryAnotherWayEmit.emit();
  }

  toggleSaveDevice() {
    this.saveDevice = !this.saveDevice;
  }

  verify() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      const res = yield _this2.twoFAService.validateVerificationCode({
        code: _this2.verificationCode,
        source: _this2.source
      });

      if (res) {
        if (res.isVerified) {
          if (_this2.saveDevice) {
            yield _this2.twoFAService.saveDevice();
          }

          _this2.verifyEmit.emit();
        } else if (((_a = res.errors) === null || _a === void 0 ? void 0 : _a.length) === 0) {
          _this2.toasterService.show('Error', _this2.cmsInfo.VERIFY_FAIL);
        }
      } else {
        if (!_this2.disableWarning) {
          _this2.toasterService.show('Warning', _this2.isEmail ? _this2.cmsInfo.SUGGEST_PHONE : _this2.cmsInfo.SUGGEST_EMAIL);
        }
      }
    })();
  }

}

EnterVerificationCodeComponent.ɵfac = function EnterVerificationCodeComponent_Factory(t) {
  return new (t || EnterVerificationCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_constants_webstorage_constants__WEBPACK_IMPORTED_MODULE_3__.WebStorageConst), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_common_module__WEBPACK_IMPORTED_MODULE_2__.WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_2FA_service__WEBPACK_IMPORTED_MODULE_4__.TwoFAService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_common_services__WEBPACK_IMPORTED_MODULE_5__.ToasterService));
};

EnterVerificationCodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: EnterVerificationCodeComponent,
  selectors: [["enter-verification-code"]],
  inputs: {
    cmsInfo: "cmsInfo",
    contactInfo: "contactInfo",
    acctId: "acctId",
    source: "source",
    channel: "channel",
    disableTryAnotherWay: "disableTryAnotherWay",
    disableWarning: "disableWarning",
    isRememberDevice: "isRememberDevice"
  },
  outputs: {
    tryAnotherWayEmit: "tryAnotherWayEmit",
    verifyEmit: "verifyEmit"
  },
  decls: 34,
  vars: 9,
  consts: [[1, "u-spacing__divider--marginTopBottom"], [3, "innerHtml", 4, "ngIf"], ["validation-focus", "", "novalidate", "", "method", "post"], ["VerifyCodeForm", "ngForm"], ["ngClass", "spanPosition", 3, "error-check"], ["for", "password"], ["type", "text", "id", "codeTxtBox", "placeholder", "Enter Code", "name", "code", "tabindex", "2", "pattern", "^[0-9]{6}$", "required", "", 3, "ngModel", "ngModelChange"], ["codeInput", "ngModel"], [3, "errors"], ["rule", "pattern"], ["rule", "required"], [4, "ngIf"], ["fxHide.lt-md", "", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "u-spacing__buttonToField--marginTop", "linksSection"], ["fxFlex", "nogrow", 3, "click"], [3, "main"], ["action-main", ""], ["fxHide", "", "fxShow.lt-md", "", 1, "u-spacing__buttonToField--marginTop", "linksSection"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "u-spacing__buttonToField--marginTop"], [3, "innerHtml"], ["fxLayout", "row", "fxLayoutAlign", "start baseline", 1, "u-spacing--widthFill", "u-spacing__fieldToSection--marginTop"], ["type", "checkbox", "id", "isRememebrDevice", 3, "checked", "change"], [1, "remember-chk-label"], [1, "remember-chk-desc"], ["fxFlex", "nogrow", 3, "vertical"]],
  template: function EnterVerificationCodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "card-container")(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "mat-divider", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, EnterVerificationCodeComponent_article_4_Template, 2, 3, "article", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, EnterVerificationCodeComponent_article_5_Template, 2, 3, "article", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "form", 2, 3)(8, "div", 4)(9, "mat-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "VERIFICATION CODE");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "input", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function EnterVerificationCodeComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.verificationCode = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "error-messages", 8)(14, "error-message", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Invalid code entered. Please try entering again.");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "error-message", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "Please enter your verification code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, EnterVerificationCodeComponent_ng_container_18_Template, 7, 3, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "section", 12)(20, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EnterVerificationCodeComponent_Template_a_click_20_listener() {
        return ctx.resendCode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "Resend Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, EnterVerificationCodeComponent_ng_container_22_Template, 4, 1, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "action-buttons", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("main", function EnterVerificationCodeComponent_Template_action_buttons_main_23_listener() {
        return ctx.verify();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "Verify");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "section", 16)(27, "action-buttons", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("main", function EnterVerificationCodeComponent_Template_action_buttons_main_27_listener() {
        return ctx.verify();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "Verify");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "section", 17)(31, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EnterVerificationCodeComponent_Template_a_click_31_listener() {
        return ctx.resendCode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32, "Resend Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](33, EnterVerificationCodeComponent_ng_container_33_Template, 4, 1, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](12);

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.cmsInfo.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isEmail);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.isEmail);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("error-check", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.verificationCode);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("errors", _r3.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isRememberDevice);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.disableTryAnotherWay);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.disableTryAnotherWay);
    }
  },
  directives: [_common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_6__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_7__.FocusDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__.DefaultClassDirective, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_8__.ErrorCheckDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_9__.ErrorMessagesComponent, _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_10__.ErrorMessageComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__.DefaultShowHideDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultFlexDirective, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_11__.ActionButtonsComponent],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_12__.SafeHtmlPipe],
  styles: ["h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\nmat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n.spanPosition[_ngcontent-%COMP%] {\n  position: relative;\n}\n.linkSpacing[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\na[_ngcontent-%COMP%] {\n  font-family: 'Jost';\n}\n.linksSection[_ngcontent-%COMP%]   action-buttons[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.linksSection[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 2px;\n  border-width: 2px;\n  border-color: #34353a;\n  margin-left: 10px;\n  margin-right: 10px;\n}\ncard-container[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}\nmat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\narticle[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n}\n.remember-chk-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.remember-chk-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: 'Montserrat';\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGVyVmVyaWZpY2F0aW9uQ29kZS5jb21wb25lbnQubGVzcyIsIi4uXFwuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xcZm9udHMubGVzcyIsIi4uXFwuLlxcLi5cXHN0eWxlc1xcY3VzdG9tXFxzcGFjaW5nXFxzZWN0aW9ucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksZ0JBQUE7QUFKSjtBQU9BO0VBQ0ksV0FBQTtBQUxKO0FBUUE7RUFDSSxrQkFBQTtBQU5KO0FBU0E7RUFDSSxnQkFBQTtBQVBKO0FBVUE7RUNqQkksbUJBQUE7QURVSjtBQVdBO0VBRVEsaUJBQUE7QUFWUjtBQVFBO0VBTVEsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVhSO0FBZUE7RUFDSSxjQUFBO0VFOUJJLGdCQUFBO0FGa0JSO0FBZ0JBO0VBQ0ksV0FBQTtBQWRKO0FBaUJBO0VBQ0ksZUFBQTtBQWZKO0FBa0JBO0VBQ0ksZ0JBQUE7QUFoQko7QUFtQkE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQWpCSiIsImZpbGUiOiJlbnRlclZlcmlmaWNhdGlvbkNvZGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy9zZWN0aW9ucy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy9kaXZpZGVycy5sZXNzJztcblxuaDIge1xuICAgIG1heC1oZWlnaHQ6IDcwcHg7XG59XG5cbm1hdC1kaXZpZGVyIHtcbiAgICB3aWR0aDogQHdpZHRoLWRpdmlkZXI7XG59XG5cbi5zcGFuUG9zaXRpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxpbmtTcGFjaW5nIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG5hIHtcbiAgICAudC1oZWFkZXItLWZvbnRGYW1pbHkoKTtcbn1cblxuLmxpbmtzU2VjdGlvbiB7XG4gICAgYWN0aW9uLWJ1dHRvbnMge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB9XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgIGJvcmRlci1jb2xvcjogQHR1bmEtZ3JheTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG59XG5cbmNhcmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luVG9wKCk7XG59XG5cbm1hdC1kaXZpZGVyIHtcbiAgICB3aWR0aDogQHdpZHRoLWRpdmlkZXI7XG59XG5cbmFydGljbGUge1xuICAgIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLnJlbWVtYmVyLWNoay1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnJlbWVtYmVyLWNoay1kZXNjIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbi50LWhlYWRlci0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtam9zdDtcbn1cblxuLnQtYm9keS0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbn1cbiIsIi5yZWZyZXNoLTIwMjAge1xuICAgIC8vIERlc2t0b3BcbiAgICAudS1zcGFjaW5nX19maWVsZFRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19oZWFkZXJUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Cb3R0b20ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcEhhbGYge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2J1dHRvblRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmlyc3RIZWFkZXJUb1RpdGxlLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fYWRkcmVzc1RvUGF5bWVudERpc3BsYXktLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuICAgIC8vIE1vYmlsZVxuICAgICYubHQtbWQsXG4gICAgLmx0LW1kIHtcbiAgICAgICAgLnUtc3BhY2luZ19fY2FyZFRvQ2FyZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 42350:
/*!*****************************************************************************!*\
  !*** ./src/2FA/components/locateYourAccount/locateYourAccount.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocateYourAccountComponent": () => (/* binding */ LocateYourAccountComponent)
/* harmony export */ });
/* harmony import */ var _2FA_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 2FA/interfaces */ 61954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 73067);
/* harmony import */ var _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../validation/errorMessages/errorMessages.component */ 65316);
/* harmony import */ var _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../validation/errorMessages/errorMessage.component */ 79636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pipes/safeHtml.pipe */ 49985);
















function LocateYourAccountComponent_section_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 1)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function LocateYourAccountComponent_section_18_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); ctx_r4.data.accountNumber = $event; return ctx_r4.updateValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "error-messages", 5)(6, "error-message", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Please input an account number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "error-message", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Please input a valid account number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "aside", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("error-check", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.additionalInfoCmsData == null ? null : ctx_r1.additionalInfoCmsData.enterAccountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.data.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("errors", _r3.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 5, ctx_r1.helpLinkCmsData == null ? null : ctx_r1.helpLinkCmsData.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function LocateYourAccountComponent_section_19_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const agency_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", agency_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](agency_r9);
} }
function LocateYourAccountComponent_section_19_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 14)(1, "div", 15)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-select", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function LocateYourAccountComponent_section_19_Template_mat_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); ctx_r10.data.selectedAgency = $event; return ctx_r10.updateValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, LocateYourAccountComponent_section_19_mat_option_6_Template, 2, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "error-messages", 5)(8, "error-message", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Please select an agency.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "mat-label", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function LocateYourAccountComponent_section_19_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); ctx_r12.data.ezTagNumber = $event; return ctx_r12.updateValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "error-messages", 5)(15, "error-message", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Please input an ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "EZ TAG");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "error-message", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Please input a valid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "EZ TAG");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "aside", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](13);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("error-check", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.additionalInfoCmsData == null ? null : ctx_r2.additionalInfoCmsData.selectAgency);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.data.selectedAgency);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.agencies);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("errors", _r6.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("error-check", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", ctx_r2.additionalInfoCmsData == null ? null : ctx_r2.additionalInfoCmsData.ShortDescription, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.data.ezTagNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("errors", _r8.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](26, 10, ctx_r2.helpLinkCmsData == null ? null : ctx_r2.helpLinkCmsData.LongDescription), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
class LocateYourAccountComponent {
    constructor() {
        this.AccountIdentificationOptionEnum = _2FA_interfaces__WEBPACK_IMPORTED_MODULE_0__.AccountIdentificationOption;
        this.data = {};
        this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    }
    updateValue() {
        this.dataChange.emit(this.data);
    }
}
LocateYourAccountComponent.ɵfac = function LocateYourAccountComponent_Factory(t) { return new (t || LocateYourAccountComponent)(); };
LocateYourAccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: LocateYourAccountComponent, selectors: [["locate-your-account"]], inputs: { additionalInfoCmsData: "additionalInfoCmsData", helpLinkCmsData: "helpLinkCmsData", agencies: "agencies", data: "data" }, outputs: { dataChange: "dataChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([], [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ControlContainer, useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm }])], decls: 20, vars: 11, consts: [[3, "innerHtml"], [3, "error-check"], ["name", "accountIndentificationOption", "required", "", "placeholder", "Select identification option", 3, "ngModel", "ngModelChange"], ["AccountIndentificationOptionSelect", "ngModel"], [3, "value"], [3, "errors"], ["rule", "required"], [3, "ngSwitch"], [3, "error-check", 4, "ngSwitchCase"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutAlign", "space-between start", "fxLayoutGap", "20px", 4, "ngSwitchCase"], ["type", "text", "name", "accountNumber", "pattern", "^\\d{1,12}$", "required", "", 3, "ngModel", "ngModelChange"], ["AccountNumber", "ngModel"], ["rule", "pattern"], ["from-cms", "", 3, "innerHtml"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutAlign", "space-between start", "fxLayoutGap", "20px"], ["fxFlex", "25", "fxFlex.lt-md", "none", 1, "accountIdOption", 3, "error-check"], ["name", "agency", "required", "", 3, "ngModel", "ngModelChange"], ["AgencySelect", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "", "flFlex.lt-md", "none", 1, "accountIdOption", 3, "error-check"], ["type", "text", "name", "ezTagNumber", "pattern", "^\\d{1,13}$", "required", "", 3, "ngModel", "ngModelChange"], ["EzTagNumber", "ngModel"], ["translation-skip", ""]], template: function LocateYourAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "card-container")(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "mat-divider")(4, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "section", 1)(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-select", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function LocateYourAccountComponent_Template_mat_select_ngModelChange_8_listener($event) { ctx.data.accountIdentificationOption = $event; return ctx.updateValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "EZ TAG Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "error-messages", 5)(15, "error-message", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Please select a valid identification option.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, LocateYourAccountComponent_section_18_Template, 12, 7, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, LocateYourAccountComponent_section_19_Template, 27, 12, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.additionalInfoCmsData == null ? null : ctx.additionalInfoCmsData.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", ctx.additionalInfoCmsData == null ? null : ctx.additionalInfoCmsData.LongDescription, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("error-check", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.additionalInfoCmsData == null ? null : ctx.additionalInfoCmsData.identificationOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.data.accountIdentificationOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.AccountIdentificationOptionEnum.AccountNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.AccountIdentificationOptionEnum.EzTagNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("errors", _r0.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", ctx.data.accountIdentificationOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", ctx.AccountIdentificationOptionEnum.AccountNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", ctx.AccountIdentificationOptionEnum.EzTagNumber);
    } }, directives: [_common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_2__.ErrorCheckDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_3__.ErrorMessagesComponent, _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_4__.ErrorMessageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.PatternValidator, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf], pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_5__.SafeHtmlPipe], styles: ["mat-label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\ncard-container[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}\ncard-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  width: 100%;\n}\ncard-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    + section[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\narticle[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 20px;\n  margin: 5px 0px;\n}\naside[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 12px;\n  line-height: 15px;\n}\n.accountIdOption[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 20px;\n  width: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0ZVlvdXJBY2NvdW50LmNvbXBvbmVudC5sZXNzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFxjdXN0b21cXHNwYWNpbmdcXHNlY3Rpb25zLmxlc3MiLCIuLlxcLi5cXC4uXFxzdHlsZXNcXGN1c3RvbVxcc3BhY2luZ1xcdXRpbGl0eS5sZXNzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFxjdXN0b21cXHNwYWNpbmdcXGRpdmlkZXJzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSx5QkFBQTtBQUhKO0FBTUE7RUFDSSxjQUFBO0VDRUksZ0JBQUE7QURMUjtBQUVBO0VFRlEsV0FBQTtBRkdSO0FBREE7RUNHUSxnQkFBQTtBRENSO0FBU0E7RUduQlEsZ0JBQUE7RUFDQSxtQkFBQTtFSG9CSixlQUFBO0FBTko7QUFTQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBUEo7QUFVQTtFRTFCUSxXQUFBO0FGbUJSO0FBV0E7RUdsQ1EsZ0JBQUE7RUFDQSxtQkFBQTtFSG1DSixXQUFBO0FBUkoiLCJmaWxlIjoibG9jYXRlWW91ckFjY291bnQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvY3VzdG9tL3NwYWNpbmcvdXRpbGl0eS5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy9zZWN0aW9ucy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy9kaXZpZGVycy5sZXNzJztcblxubWF0LWxhYmVsIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5jYXJkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCgpO1xuXG4gICAgc2VjdGlvbiB7XG4gICAgICAgIC5yZWZyZXNoLTIwMjAudS1zcGFjaW5nLS13aWR0aEZpbGwoKTtcbiAgICB9XG5cbiAgICBzZWN0aW9uK3NlY3Rpb24ge1xuICAgICAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luVG9wKCk7XG4gICAgfVxufVxuXG5hcnRpY2xlIHtcbiAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fZGl2aWRlci0tbWFyZ2luVG9wQm90dG9tKCk7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG5hc2lkZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG59XG5cbi5hY2NvdW50SWRPcHRpb24ge1xuICAgIC5yZWZyZXNoLTIwMjAudS1zcGFjaW5nLS13aWR0aEZpbGwoKTtcbn1cblxubWF0LWRpdmlkZXIge1xuICAgIC5yZWZyZXNoLTIwMjAudS1zcGFjaW5nX19kaXZpZGVyLS1tYXJnaW5Ub3BCb3R0b20oKTtcbiAgICB3aWR0aDogQHdpZHRoLWRpdmlkZXI7XG59XG4iLCIucmVmcmVzaC0yMDIwIHtcbiAgICAvLyBEZXNrdG9wXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19faGVhZGVyVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luQm90dG9tIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3BIYWxmIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19idXR0b25Ub0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpcnN0SGVhZGVyVG9UaXRsZS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2FkZHJlc3NUb1BheW1lbnREaXNwbGF5LS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cbiAgICAvLyBNb2JpbGVcbiAgICAmLmx0LW1kLFxuICAgIC5sdC1tZCB7XG4gICAgICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG4ucmVmcmVzaC0yMDIwIHtcblxuICAgICYudS1zcGFjaW5nLS13aWR0aEZpbGwsXG4gICAgLnUtc3BhY2luZy0td2lkdGhGaWxsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnRhYi1jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICAgICAgcGFkZGluZzogMHB4IDclO1xuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1zbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGFiLWNvbnRlbnQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI3LjUycHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNHB4O1xuXG4gICAgICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtc20ge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogdW5zZXQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdW5zZXQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2NjY2U7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYW5uZXItaW1nIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyM3B4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LXNtIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjdweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYW5uZXItdHh0IHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjcuNTJweDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBKb3N0O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMjEsIDkpO1xuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiByZ2IoNjcsIDY5LCA3MykgM3B4IDJweCA4cHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgICAgICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1zbSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1zcGFjaW5nIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIucmVmcmVzaC0yMDIwIHtcbiAgICAudS1zcGFjaW5nX19kaXZpZGVyLS1tYXJnaW5Ub3BCb3R0b20ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 36099:
/*!*********************************************************************************************!*\
  !*** ./src/2FA/components/phoneVerifcationSelection/phoneVerifcationSelection.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneVerifcationSelectionComponent": () => (/* binding */ PhoneVerifcationSelectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/safeHtml.pipe */ 49985);








const _c0 = function (a0) { return { "selected": a0 }; };
class PhoneVerifcationSelectionComponent {
    constructor() {
        this.isTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ;
    ngOnInit() {
        this.selectedClass = this.isText ? 'text' : 'call';
    }
    selectionChange(updatedSelection) {
        this.selectedClass = updatedSelection;
        this.isText = this.selectedClass === 'text';
        this.isTextChange.emit(this.isText);
    }
}
PhoneVerifcationSelectionComponent.ɵfac = function PhoneVerifcationSelectionComponent_Factory(t) { return new (t || PhoneVerifcationSelectionComponent)(); };
PhoneVerifcationSelectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PhoneVerifcationSelectionComponent, selectors: [["phone-verifcation-selection"]], inputs: { phoneNumber: "phoneNumber", isText: "isText", cmsInfo: "cmsInfo" }, outputs: { isTextChange: "isTextChange" }, decls: 16, vars: 15, consts: [[1, "u-spacing__divider--marginTopBottom"], [3, "innerHtml"], ["for", "text", 3, "ngClass"], ["type", "radio", "id", "text", "value", "text", "name", "contactSelection", "checked", "", 3, "ngModel", "ngModelChange"], [1, "inputLabelTitle"], [1, "subtext"], ["for", "call", 3, "ngClass"], ["type", "radio", "id", "call", "value", "call", "name", "contactSelection", 3, "ngModel", "ngModelChange"]], template: function PhoneVerifcationSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "card-container")(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-divider", 0)(4, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "safeHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 2)(7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PhoneVerifcationSelectionComponent_Template_input_ngModelChange_7_listener() { return ctx.selectionChange("text"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 6)(13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PhoneVerifcationSelectionComponent_Template_input_ngModelChange_13_listener() { return ctx.selectionChange("call"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.cmsInfo.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 9, ctx.cmsInfo.LongDescription), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ctx.selectedClass === "text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.cmsInfo.TextRadio);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.cmsInfo.TextRadioSubtext);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, ctx.selectedClass === "call"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.cmsInfo.CallRadio);
    } }, directives: [_common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultClassDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_1__.SafeHtmlPipe], styles: ["label[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top: 1px solid #c4c4c4;\n  border-left: 1px solid #c4c4c4;\n  border-right: 1px solid #c4c4c4;\n  margin: 0px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding-left: 10px;\n}\nlabel[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #f6f6f6;\n}\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  font-weight: 600;\n  line-height: 26px;\n  color: #34353a;\n  position: relative;\n  display: block;\n}\n.subtext[_ngcontent-%COMP%] {\n  margin: 0px 0px 10px 21px;\n  font-size: 14px;\n}\n.inputLabelTitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 12px;\n}\nlabel[_ngcontent-%COMP%]:first-of-type {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\nlabel.selected[_ngcontent-%COMP%] {\n  background-color: #e0e0ef;\n  border-top: 1px solid #007aff;\n  border-left: 1px solid #007aff;\n  border-right: 1px solid #007aff;\n}\nlabel.selected[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  border-top: 1px solid #007aff;\n}\nlabel[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: 1px solid #c4c4c4;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\nlabel[_ngcontent-%COMP%]:last-of-type.selected {\n  border-bottom: 1px solid #007aff;\n}\ninput[_ngcontent-%COMP%] {\n  width: 13px;\n  margin: 0px 10px 0px 8px;\n  float: left;\n}\n.has-error[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  border-left: 1px solid #fc2125;\n  border-right: 1px solid #fc2125;\n}\n.has-error[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-of-type {\n  border-top: 1px solid #fc2125;\n}\n.has-error[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: 1px solid #fc2125;\n}\ncard-container[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}\nmat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\narticle[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob25lVmVyaWZjYXRpb25TZWxlY3Rpb24uY29tcG9uZW50Lmxlc3MiLCIuLlxcLi5cXC4uXFxzdHlsZXNcXGN1c3RvbVxcc3BhY2luZ1xcc2VjdGlvbnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUVJLFdBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQUxKO0FBUUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUFOSjtBQVNBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVBKO0FBVUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFSSjtBQVdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBVEo7QUFZQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7QUFWSjtBQWFBO0VBQ0kseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUFYSjtBQWNBO0VBQ0ksNkJBQUE7QUFaSjtBQWVBO0VBQ0ksZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FBYko7QUFnQkE7RUFDSSxnQ0FBQTtBQWRKO0FBaUJBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtBQWZKO0FBa0JBO0VBRVEsOEJBQUE7RUFDQSwrQkFBQTtBQWpCUjtBQWNBO0VBT1EsNkJBQUE7QUFsQlI7QUFXQTtFQVdRLGdDQUFBO0FBbkJSO0FBdUJBO0VBQ0ksY0FBQTtFQzdFSSxnQkFBQTtBRHlEUjtBQXdCQTtFQUNJLFdBQUE7QUF0Qko7QUF5QkE7RUFDSSxlQUFBO0FBdkJKIiwiZmlsZSI6InBob25lVmVyaWZjYXRpb25TZWxlY3Rpb24uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy9zZWN0aW9ucy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy9kaXZpZGVycy5sZXNzJztcblxubGFiZWwge1xuICAgIC8vaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBAc2lsdmVyLWdyYXk7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBAc2lsdmVyLWdyYXk7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgQHNpbHZlci1ncmF5O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxubGFiZWw6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2lsZC1zYW5kLWdyYXk7XG59XG5cbmxhYmVsIHNwYW4ge1xuICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgY29sb3I6IEB0dW5hLWdyYXk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3VidGV4dCB7XG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHggMjFweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbnB1dExhYmVsVGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG5sYWJlbDpmaXJzdC1vZi10eXBlIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG5sYWJlbC5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHNudWZmLWdyYXk7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIEBhenVyZS1yYWRpYW5jZS1ibHVlO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgQGF6dXJlLXJhZGlhbmNlLWJsdWU7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgQGF6dXJlLXJhZGlhbmNlLWJsdWU7XG59XG5cbmxhYmVsLnNlbGVjdGVkICsgbGFiZWwge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBAYXp1cmUtcmFkaWFuY2UtYmx1ZTtcbn1cblxubGFiZWw6bGFzdC1vZi10eXBlIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgQHNpbHZlci1ncmF5O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbmxhYmVsOmxhc3Qtb2YtdHlwZS5zZWxlY3RlZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIEBhenVyZS1yYWRpYW5jZS1ibHVlO1xufVxuXG5pbnB1dCB7XG4gICAgd2lkdGg6IDEzcHg7XG4gICAgbWFyZ2luOiAwcHggMTBweCAwcHggOHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uaGFzLWVycm9yIHtcbiAgICBsYWJlbCB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgQHRvcmNoLXJlZDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgQHRvcmNoLXJlZDtcbiAgICB9XG5cbiAgICBsYWJlbDpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIEB0b3JjaC1yZWQ7XG4gICAgfVxuXG4gICAgbGFiZWw6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIEB0b3JjaC1yZWQ7XG4gICAgfVxufVxuXG5jYXJkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCgpO1xufVxuXG5tYXQtZGl2aWRlciB7XG4gICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xufVxuXG5hcnRpY2xlIHtcbiAgICBtYXJnaW46IDVweCAwcHg7XG59XG4iLCIucmVmcmVzaC0yMDIwIHtcbiAgICAvLyBEZXNrdG9wXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19faGVhZGVyVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luQm90dG9tIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3BIYWxmIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19idXR0b25Ub0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpcnN0SGVhZGVyVG9UaXRsZS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2FkZHJlc3NUb1BheW1lbnREaXNwbGF5LS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cbiAgICAvLyBNb2JpbGVcbiAgICAmLmx0LW1kLFxuICAgIC5sdC1tZCB7XG4gICAgICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 70664:
/*!*****************************************!*\
  !*** ./src/2FA/services/2FA.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwoFAService": () => (/* binding */ TwoFAService)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/services */ 8784);



class TwoFAService {
  constructor(httpService, responseErrorService) {
    this.httpService = httpService;
    this.responseErrorService = responseErrorService;
  }

  get baseUrl() {
    return `api/2fa`;
  }

  sendVerificationCode(request) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${_this.baseUrl}/send`;
      const response = yield _this.httpService.post(url, request);

      if (_this.responseErrorService.isErrorFree(response)) {
        _this.responseErrorService.displayAlertsFromResponse(response);

        return response;
      }
    })();
  }

  validateVerificationCode(request) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${_this2.baseUrl}/verify`;
      const response = yield _this2.httpService.post(url, request);

      if (_this2.responseErrorService.isErrorFree(response)) {
        _this2.responseErrorService.displayAlertsFromResponse(response);

        return response;
      }
    })();
  }

  saveDevice() {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${_this3.baseUrl}/saveDevice`;
      const response = yield _this3.httpService.post(url, null);

      if (_this3.responseErrorService.isErrorFree(response)) {
        _this3.responseErrorService.displayAlertsFromResponse(response);

        return response;
      }
    })();
  }

  validateSecurityAnswer(data) {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${_this4.baseUrl}/validatesecurityanswer`;
      const response = yield _this4.httpService.post(url, data);

      if (_this4.responseErrorService.isErrorFree(response)) {
        _this4.responseErrorService.displayAlertsFromResponse(response);

        return response;
      }
    })();
  }

}

TwoFAService.ɵfac = function TwoFAService_Factory(t) {
  return new (t || TwoFAService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](common_services__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](common_services__WEBPACK_IMPORTED_MODULE_1__.ResponseErrorService));
};

TwoFAService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: TwoFAService,
  factory: TwoFAService.ɵfac
});

/***/ })

}]);
//# sourceMappingURL=917.411d4cdc27f7ed91.js.map