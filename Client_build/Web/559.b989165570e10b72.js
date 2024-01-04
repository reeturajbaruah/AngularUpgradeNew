"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[559],{

/***/ 72898:
/*!*************************************************************************************!*\
  !*** ./src/MFA/components/mfa-security-question/mfa-security-question.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MfaSecurityQuestionComponent": () => (/* binding */ MfaSecurityQuestionComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _login_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../login/constants */ 5723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var MFA_services_multi_factor_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! MFA/services/multi-factor-authentication.service */ 51467);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! authentication/authenticationService/authentication.service */ 44722);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../storefront/utility/utility.component */ 10061);
/* harmony import */ var _common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/ui/title-banner/title-banner.component */ 38018);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _common_ui_form_entry_showHideInputButton_showHideInputButton_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/ui/form-entry/showHideInputButton/showHideInputButton.component */ 27554);
/* harmony import */ var _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../validation/errorMessages/errorMessages.component */ 65316);
/* harmony import */ var _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../validation/errorMessages/errorMessage.component */ 79636);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/ui/modals/actionButtons/actionButtons.component */ 65380);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../pipes/safeHtml.pipe */ 49985);


























function MfaSecurityQuestionComponent_section_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "section", 15)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "section")(4, "div", 16)(5, "mat-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function MfaSecurityQuestionComponent_section_19_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r5.answer = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "show-hide-input-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("showFieldChange", function MfaSecurityQuestionComponent_section_19_Template_show_hide_input_button_showFieldChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r7.isShowPassword = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "error-messages", 21)(11, "error-message", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "error-message", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](8);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r2.securityQuestion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("error-check", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r2.cmsData.Input_Lable_Text);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r2.answer)("type", ctx_r2.isShowPassword ? "text" : "password")("ngClass", ctx_r2.isShowPassword ? "pwd-hide" : "pwd-show");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("showField", ctx_r2.isShowPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("errors", _r4.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r2.cmsData.Input_Pattern_Msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r2.cmsData.Input_Required_Msg);
  }
}

class MfaSecurityQuestionComponent {
  constructor(multiFactorAuthenticationService, uiRouterGlobals, state, authService, responseErrorService, toast) {
    this.multiFactorAuthenticationService = multiFactorAuthenticationService;
    this.uiRouterGlobals = uiRouterGlobals;
    this.state = state;
    this.authService = authService;
    this.responseErrorService = responseErrorService;
    this.toast = toast;
    this.answer = '';
    this.isShowPassword = false;
  }

  ngOnInit() {
    this.multiFactorAuthenticationService.getSecurityQuestions().then(resp => {
      var _a;

      if (resp.errors.length === 0) {
        const securityQuestionIndex = resp === null || resp === void 0 ? void 0 : resp.securityQuestions.findIndex(qus => qus.securityQuestionID === this.uiRouterGlobals.params.securityQuestionID);
        this.securityQuestion = (_a = resp === null || resp === void 0 ? void 0 : resp.securityQuestions[securityQuestionIndex]) === null || _a === void 0 ? void 0 : _a.securityQuestion;
      } else {
        this.responseErrorService.displayErrorsFromResponse(resp);
        this.responseErrorService.displayAlertsFromResponse(resp);
      }
    });
  }

  verify() {
    var _this = this;

    this.multiFactorAuthenticationService.verifySecurityQuestionResponse(this.answer).then( /*#__PURE__*/function () {
      var _ref = (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resp) {
        if (resp) {
          if (resp.errors.length === 0) {
            yield _this.multiFactorAuthenticationService.authenticateUser();
            const loginApiResponse = _this.uiRouterGlobals.params.loginApiResponse;
            yield _this.multiFactorAuthenticationService.handleRedirects(loginApiResponse);

            _this.toast.show('Success', _this.cmsData.Success_Msg_Text);
          } else {
            _this.responseErrorService.displayErrorsFromResponse(resp);

            _this.responseErrorService.displayAlertsFromResponse(resp);
          }
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  cancel() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.authService.logout();
      yield _this2.state.go(_login_constants__WEBPACK_IMPORTED_MODULE_1__.stateNames.Login);
    })();
  }

}

MfaSecurityQuestionComponent.ɵfac = function MfaSecurityQuestionComponent_Factory(t) {
  return new (t || MfaSecurityQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](MFA_services_multi_factor_authentication_service__WEBPACK_IMPORTED_MODULE_2__.MultiFactorAuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_18__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_18__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_4__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_4__.ToasterService));
};

MfaSecurityQuestionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
  type: MfaSecurityQuestionComponent,
  selectors: [["app-mfa-security-question"]],
  inputs: {
    cmsData: "cmsData"
  },
  decls: 28,
  vars: 7,
  consts: [[1, "refresh-2020"], ["storefront", ""], ["validation-focus", "", "novalidate", "", "method", "post"], ["SecurityAnswerForm", "ngForm"], ["fxLayout", "column"], [1, "u-spacing__firstHeaderToTitle--marginTop"], [1, "u-spacing__divider--marginTopBottom"], [1, "u-spacing__divider--marginTopBottom", "question-title"], [3, "innerHtml"], ["class", "question-section", 4, "ngIf"], [1, "u-spacing__buttonToField--marginTop"], [3, "main", "alt"], ["action-alt", ""], ["action-main", ""], ["wizardUi", ""], [1, "question-section"], ["fxLayout", "column", "ngClass", "spanPosition", 1, "u-spacing__fieldToField--marginTop", 3, "error-check"], ["for", "answer"], ["type", "text", "id", "answerTxtBox", "name", "answer", "tabindex", "1", "pattern", "^[a-zA-Z0-9]{1,20}$", "required", "", 3, "ngModel", "type", "ngClass", "ngModelChange"], ["answerInput", "ngModel"], [3, "showField", "showFieldChange"], [3, "errors"], ["rule", "pattern"], ["rule", "required"]],
  template: function MfaSecurityQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "main", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "storefront-utility", null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "title-banner");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "page-centered-container")(6, "form", 2, 3)(8, "div", 4)(9, "card-container", 5)(10, "section", 4)(11, "header")(12, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](14, "mat-divider", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "section")(16, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](17, "article", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](18, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](19, MfaSecurityQuestionComponent_section_19_Template, 15, 10, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "div", 10)(21, "action-buttons", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("main", function MfaSecurityQuestionComponent_Template_action_buttons_main_21_listener() {
        return ctx.verify();
      })("alt", function MfaSecurityQuestionComponent_Template_action_buttons_alt_21_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](23, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](26, "wizard-ui", null, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.cmsData.Title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.cmsData.Multi_Factor_Authentication_Title_Text, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](18, 5, ctx.cmsData.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.securityQuestion);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.cmsData.Btn_Text);
    }
  },
  directives: [_storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_5__.StorefrontUtilityComponent, _common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_6__.TitleBannerComponent, _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_7__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_8__.FocusDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__.DefaultLayoutDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_9__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_10__.ErrorCheckDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _common_ui_form_entry_showHideInputButton_showHideInputButton_component__WEBPACK_IMPORTED_MODULE_11__.ShowHideInputButtonComponent, _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_12__.ErrorMessagesComponent, _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_13__.ErrorMessageComponent, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_14__.ActionButtonsComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_15__.WizardComponent],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_16__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   .question-title[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n[_nghost-%COMP%]   .question-section[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1mYS1zZWN1cml0eS1xdWVzdGlvbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUVRLFdBQUE7QUFMUjtBQVFRO0VBQ0ksZUFBQTtBQU5aO0FBUVE7RUFDSSxnQkFBQTtBQU5aIiwiZmlsZSI6Im1mYS1zZWN1cml0eS1xdWVzdGlvbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL3NlY3Rpb25zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL2RpdmlkZXJzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgbWF0LWRpdmlkZXIge1xuICAgICAgICB3aWR0aDogQHdpZHRoLWRpdmlkZXI7XG4gICAgfVxuICAgIC5xdWVzdGlvbiB7XG4gICAgICAgICYtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICB9XG4gICAgICAgICYtc2VjdGlvbiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 86378:
/*!*************************************************************************!*\
  !*** ./src/MFA/components/mfa-verify-code/mfa-verify-code.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MfaVerifyCodeComponent": () => (/* binding */ MfaVerifyCodeComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _2FA_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 2FA/interfaces */ 61954);
/* harmony import */ var MFA_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! MFA/constant */ 45702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var cms_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cms/services */ 46693);
/* harmony import */ var _services_multi_factor_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/multi-factor-authentication.service */ 51467);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _2FA_components_enterVerificationCode_enterVerificationCode_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../2FA/components/enterVerificationCode/enterVerificationCode.component */ 94582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/safeHtml.pipe */ 49985);













function MfaVerifyCodeComponent_card_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "card-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "article", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r0.cmsData.LongDescription), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
  }
}

function MfaVerifyCodeComponent_card_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "card-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "article", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r1.cmsData.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
  }
}

class MfaVerifyCodeComponent {
  constructor(state, cmsReplacementService, uiRouterGlobals, mfaService) {
    this.state = state;
    this.cmsReplacementService = cmsReplacementService;
    this.uiRouterGlobals = uiRouterGlobals;
    this.mfaService = mfaService;
    this.source = MFA_constant__WEBPACK_IMPORTED_MODULE_2__.source;
  }

  ngOnInit() {
    this.isEmail = this.uiRouterGlobals.params.channel === _2FA_interfaces__WEBPACK_IMPORTED_MODULE_1__.Channel.Email;
    this.cmsData.EMAIL_DESC = this.cmsReplacementService.transformTemplate(this.cmsData.EMAIL_DESC, {
      email: this.uiRouterGlobals.params.email.maskedInfo
    });
    this.cmsData.PHONE_DESC = this.cmsReplacementService.transformTemplate(this.cmsData.PHONE_DESC, {
      phoneNumber: this.uiRouterGlobals.params.phoneNumber.maskedInfo
    });
  }

  verify() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.mfaService.authenticateUser();
      const loginApiResponse = _this.uiRouterGlobals.params.loginApiResponse;

      _this.mfaService.handleRedirects(loginApiResponse);
    })();
  }

  tryAnotherWay() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.state.go(MFA_constant__WEBPACK_IMPORTED_MODULE_2__.mfaStateNames.MultiFactorAuthentication, {
        custom: {
          isExplicitlyAllowedTransition: true
        }
      });
    })();
  }

}

MfaVerifyCodeComponent.ɵfac = function MfaVerifyCodeComponent_Factory(t) {
  return new (t || MfaVerifyCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_10__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_3__.CmsReplacementService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_10__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_multi_factor_authentication_service__WEBPACK_IMPORTED_MODULE_4__.MultiFactorAuthenticationService));
};

MfaVerifyCodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: MfaVerifyCodeComponent,
  selectors: [["app-mfa-verify-code"]],
  inputs: {
    cmsData: "cmsData"
  },
  decls: 4,
  vars: 9,
  consts: [[1, "refresh-2020"], [3, "cmsInfo", "contactInfo", "acctId", "source", "channel", "disableTryAnotherWay", "isRememberDevice", "verifyEmit", "tryAnotherWayEmit"], [4, "ngIf"], [3, "innerHtml"]],
  template: function MfaVerifyCodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "enter-verification-code", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("verifyEmit", function MfaVerifyCodeComponent_Template_enter_verification_code_verifyEmit_1_listener() {
        return ctx.verify();
      })("tryAnotherWayEmit", function MfaVerifyCodeComponent_Template_enter_verification_code_tryAnotherWayEmit_1_listener() {
        return ctx.tryAnotherWay();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, MfaVerifyCodeComponent_card_container_2_Template, 3, 3, "card-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, MfaVerifyCodeComponent_card_container_3_Template, 3, 3, "card-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("cmsInfo", ctx.cmsData)("contactInfo", ctx.uiRouterGlobals.params.email.value)("acctId", ctx.uiRouterGlobals.params.acctId)("source", ctx.source)("channel", ctx.uiRouterGlobals.params.channel)("disableTryAnotherWay", false)("isRememberDevice", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isEmail);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isEmail);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__.PageCenteredContainerComponent, _2FA_components_enterVerificationCode_enterVerificationCode_component__WEBPACK_IMPORTED_MODULE_6__.EnterVerificationCodeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__.CardContainerComponent],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_8__.SafeHtmlPipe],
  styles: ["card-container[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1mYS12ZXJpZnktY29kZS5jb21wb25lbnQubGVzcyIsIi4uXFwuLlxcLi5cXHN0eWxlc1xcY3VzdG9tXFxzcGFjaW5nXFxzZWN0aW9ucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksY0FBQTtFQ0tJLGdCQUFBO0FEUlIiLCJmaWxlIjoibWZhLXZlcmlmeS1jb2RlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvY3VzdG9tL3NwYWNpbmcvc2VjdGlvbnMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvY3VzdG9tL3NwYWNpbmcvZGl2aWRlcnMubGVzcyc7XG5cbmNhcmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luVG9wKCk7XG59XG4iLCIucmVmcmVzaC0yMDIwIHtcbiAgICAvLyBEZXNrdG9wXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19faGVhZGVyVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luQm90dG9tIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3BIYWxmIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19idXR0b25Ub0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpcnN0SGVhZGVyVG9UaXRsZS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2FkZHJlc3NUb1BheW1lbnREaXNwbGF5LS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cbiAgICAvLyBNb2JpbGVcbiAgICAmLmx0LW1kLFxuICAgIC5sdC1tZCB7XG4gICAgICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 69016:
/*!*********************************************************************!*\
  !*** ./src/MFA/components/multi-factor-authentication.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiFactorAuthenticationComponent": () => (/* binding */ MultiFactorAuthenticationComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _login_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../login/constants */ 5723);
/* harmony import */ var MFA_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! MFA/constant */ 45702);
/* harmony import */ var common_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/providers */ 61264);
/* harmony import */ var _2FA_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 2FA/interfaces */ 61954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var MFA_services_multi_factor_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! MFA/services/multi-factor-authentication.service */ 51467);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! authentication/authenticationService/authentication.service */ 44722);
/* harmony import */ var constants_webstorage_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! constants/webstorage.constants */ 60450);
/* harmony import */ var _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../storefront/utility/utility.component */ 10061);
/* harmony import */ var _common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/title-banner/title-banner.component */ 38018);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/modals/actionButtons/actionButtons.component */ 65380);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pipes/safeHtml.pipe */ 49985);























const _c0 = function (a0, a1, a2, a3) {
  return {
    "last": a0,
    "first": a1,
    "radius": a2,
    "selected": a3
  };
};

function MultiFactorAuthenticationComponent_div_37_section_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "section", 19)(1, "label", 20)(2, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function MultiFactorAuthenticationComponent_div_37_section_1_Template_input_ngModelChange_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10);
      const selectedItem_r5 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return ctx_r9.receiveCodeChange(selectedItem_r5);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const selectedItem_r5 = ctx.$implicit;
    const first_r6 = ctx.first;
    const last_r7 = ctx.last;
    const i_r8 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("for", i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction4"](7, _c0, last_r7, first_r6, ctx_r4.selectedItems.length === 1, ctx_r4.selectedInfo === i_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("id", i_r8)("ngModel", ctx_r4.selectedInfo)("value", i_r8)("name", selectedItem_r5.lable);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](selectedItem_r5.maskedInfo);
  }
}

function MultiFactorAuthenticationComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, MultiFactorAuthenticationComponent_div_37_section_1_Template, 5, 12, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.selectedItems);
  }
}

function MultiFactorAuthenticationComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r2.noDataMsg);
  }
}

function MultiFactorAuthenticationComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 23)(1, "action-buttons", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("main", function MultiFactorAuthenticationComponent_div_41_Template_action_buttons_main_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r12.verify();
    })("alt", function MultiFactorAuthenticationComponent_div_41_Template_action_buttons_alt_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r14.cancel();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "wizard-ui", null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

const _c1 = function (a0) {
  return {
    "selected": a0
  };
};

class MultiFactorAuthenticationComponent {
  constructor(multiFactorAuthenticationService, state, authService, webStorageConst, window, uiRouterGlobals) {
    this.multiFactorAuthenticationService = multiFactorAuthenticationService;
    this.state = state;
    this.authService = authService;
    this.webStorageConst = webStorageConst;
    this.window = window;
    this.uiRouterGlobals = uiRouterGlobals;
    this.selectedClass = MFA_constant__WEBPACK_IMPORTED_MODULE_2__.MFATypes.TEXT;
    this.selectedItems = [];
    this.noDataMsg = '';
  }

  ngOnInit() {
    this.multiFactorAuthenticationService.getAccountInfo().then(resp => {
      this.accountInfo = resp;
      this.selectionChange(this.selectedClass);
    });
  }

  selectionChange(updatedSelection) {
    var _a, _b;

    this.selectedClass = updatedSelection;
    this.selectedItems = [];

    if (updatedSelection === MFA_constant__WEBPACK_IMPORTED_MODULE_2__.MFATypes.TEXT || updatedSelection === MFA_constant__WEBPACK_IMPORTED_MODULE_2__.MFATypes.CALL) {
      const phoneArray = MFA_constant__WEBPACK_IMPORTED_MODULE_2__.phoneKeys;
      this.formSelectedItem(phoneArray, updatedSelection);
      this.noDataMsg = (_a = this.mfaPageContent) === null || _a === void 0 ? void 0 : _a.Phone_Num_Length_Msg;
    } else {
      const emailArray = MFA_constant__WEBPACK_IMPORTED_MODULE_2__.emailKeys;
      this.formSelectedItem(emailArray, updatedSelection);
      this.noDataMsg = (_b = this.mfaPageContent) === null || _b === void 0 ? void 0 : _b.Email_Length_Msg;
    }

    this.selectedInfo = 0;
  }

  formSelectedItem(keys, selection) {
    const contactInfo = this.accountInfo.contactInfo;
    keys.forEach((key, i) => {
      if (contactInfo[key]) {
        this.selectedItems.push({
          id: i,
          label: key,
          value: contactInfo[key],
          maskedInfo: selection === MFA_constant__WEBPACK_IMPORTED_MODULE_2__.MFATypes.EMAIL ? this.getEmailMaskedInfo(contactInfo[key]) : '***-***-' + contactInfo[key].slice(-4)
        });
      }
    });
  }

  getEmailMaskedInfo(email) {
    const splittedMailArr = email.split('@');
    const numberOfAsterisk = splittedMailArr[0].length - 3;
    const asteriskString = '*'.repeat(numberOfAsterisk);
    return splittedMailArr[0].slice(0, 3) + asteriskString + '@' + splittedMailArr[1];
  }

  receiveCodeChange(val) {
    this.selectedInfo = val.id;
  }

  verify() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const payload = {
        to: _this.selectedItems[_this.selectedInfo].value,
        language: _this.window.localStorage[_this.webStorageConst.selectedLanguage],
        accountId: _this.accountInfo.acctId,
        source: MFA_constant__WEBPACK_IMPORTED_MODULE_2__.source,
        channel: _this.selectedClass === MFA_constant__WEBPACK_IMPORTED_MODULE_2__.MFATypes.TEXT ? _2FA_interfaces__WEBPACK_IMPORTED_MODULE_4__.Channel.Sms : _this.selectedClass === MFA_constant__WEBPACK_IMPORTED_MODULE_2__.MFATypes.CALL ? _2FA_interfaces__WEBPACK_IMPORTED_MODULE_4__.Channel.Phone : _2FA_interfaces__WEBPACK_IMPORTED_MODULE_4__.Channel.Email
      };
      const res = yield _this.multiFactorAuthenticationService.sendCode(payload);

      if (res) {
        _this.state.go(MFA_constant__WEBPACK_IMPORTED_MODULE_2__.mfaStateNames.VerifyCode, {
          phoneNumber: _this.selectedItems[_this.selectedInfo],
          email: _this.selectedItems[_this.selectedInfo],
          channel: payload.channel,
          acctId: _this.accountInfo.acctId,
          loginApiResponse: _this.uiRouterGlobals.params.loginApiResponse
        }, {
          custom: {
            isExplicitlyAllowedTransition: true
          }
        });
      }
    })();
  }

  cancel() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.authService.logout();
      yield _this2.state.go(_login_constants__WEBPACK_IMPORTED_MODULE_1__.stateNames.Login);
    })();
  }

  tryAnotherVerification() {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.state.go(MFA_constant__WEBPACK_IMPORTED_MODULE_2__.mfaStateNames.SecurityQuestion, {
        securityQuestionID: _this3.accountInfo.personalInfo.securityQuestionID,
        loginApiResponse: _this3.uiRouterGlobals.params.loginApiResponse
      }, {
        custom: {
          isExplicitlyAllowedTransition: true
        }
      });
    })();
  }

}

MultiFactorAuthenticationComponent.ɵfac = function MultiFactorAuthenticationComponent_Factory(t) {
  return new (t || MultiFactorAuthenticationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](MFA_services_multi_factor_authentication_service__WEBPACK_IMPORTED_MODULE_5__.MultiFactorAuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_16__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_6__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](constants_webstorage_constants__WEBPACK_IMPORTED_MODULE_7__.WebStorageConst), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](common_providers__WEBPACK_IMPORTED_MODULE_3__.WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_16__.UIRouterGlobals));
};

MultiFactorAuthenticationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: MultiFactorAuthenticationComponent,
  selectors: [["app-multi-factor-authentication"]],
  inputs: {
    mfaPageContent: "mfaPageContent"
  },
  decls: 42,
  vars: 27,
  consts: [[1, "refresh-2020"], ["storefront", ""], ["fxLayout", "column"], [1, "u-spacing__firstHeaderToTitle--marginTop"], [1, "u-spacing__divider--marginTopBottom"], [1, "u-spacing__divider--marginTopBottom", 3, "innerHTML"], [1, "contact-section", "u-spacing__divider--marginTopBottom"], ["fxLayout", "row", "for", "text", 1, "border", "first", 3, "ngClass"], ["type", "radio", "id", "text", "value", "text", "name", "contactSelection", "checked", "", 3, "ngModel", "ngModelChange"], [1, "subTitleClass"], ["fxLayout", "row", "for", "call", 1, "border", "last", 3, "ngClass"], ["type", "radio", "id", "call", "value", "call", "name", "contactSelection", "checked", "", 3, "ngModel", "ngModelChange"], ["fxLayout", "row", "for", "email", 1, "border", "radius", 3, "ngClass"], ["type", "radio", "id", "email", "value", "email", "name", "emailSelection", "checked", "", 3, "ngModel", "ngModelChange"], ["class", "u-spacing__divider--marginTopBottom", 4, "ngIf"], [4, "ngIf"], [3, "click"], ["class", "u-spacing__buttonToField--marginTop", 4, "ngIf"], ["class", "contact-section", 4, "ngFor", "ngForOf"], [1, "contact-section"], ["fxLayout", "row", 1, "border", 3, "for", "ngClass"], ["type", "radio", "checked", "", 3, "id", "ngModel", "value", "name", "ngModelChange"], [1, "help-block", "u-spacing__divider--marginTopBottom"], [1, "u-spacing__buttonToField--marginTop"], [3, "main", "alt"], ["action-alt", ""], ["action-main", ""], ["wizardUi", ""]],
  template: function MultiFactorAuthenticationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "main", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "storefront-utility", null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "title-banner");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "page-centered-container")(6, "div", 2)(7, "card-container", 3)(8, "section", 2)(9, "header")(10, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "mat-divider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](15, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "section", 6)(19, "label", 7)(20, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function MultiFactorAuthenticationComponent_Template_input_ngModelChange_20_listener() {
        return ctx.selectionChange("text");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "span", 2)(22, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "label", 10)(27, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function MultiFactorAuthenticationComponent_Template_input_ngModelChange_27_listener() {
        return ctx.selectionChange("call");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "section", 6)(31, "label", 12)(32, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function MultiFactorAuthenticationComponent_Template_input_ngModelChange_32_listener() {
        return ctx.selectionChange("email");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](37, MultiFactorAuthenticationComponent_div_37_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](38, MultiFactorAuthenticationComponent_div_38_Template, 3, 1, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](39, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MultiFactorAuthenticationComponent_Template_a_click_39_listener() {
        return ctx.tryAnotherVerification();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](41, MultiFactorAuthenticationComponent_div_41_Template, 8, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx.mfaPageContent.Title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.mfaPageContent.Multi_Factor_Authentication_Title_Text);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](15, 19, ctx.mfaPageContent.LongDescription), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx.mfaPageContent.Receive_Verification_Text, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](21, _c1, ctx.selectedClass === "text"));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.selectedClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.mfaPageContent.Text_Me_Text);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.mfaPageContent.Text_Me_Desc_Text);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](23, _c1, ctx.selectedClass === "call"));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.selectedClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.mfaPageContent.Automated_Call_Text);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](25, _c1, ctx.selectedClass === "email"));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.selectedClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.mfaPageContent.Email_Me_Text);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx.selectedClass === "email" ? ctx.mfaPageContent.Email_Address_Receive_Code : ctx.mfaPageContent.Phone_Number_Rceive_Code, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.selectedItems.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.selectedItems.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx.mfaPageContent.Try_Another_Verification_Option, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.selectedItems.length > 0);
    }
  },
  directives: [_storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_8__.StorefrontUtilityComponent, _common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_9__.TitleBannerComponent, _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_10__.PageCenteredContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_11__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDivider, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_12__.ActionButtonsComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_13__.WizardComponent],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_14__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%]   input[type='radio'][_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n}\n[_nghost-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n[_nghost-%COMP%]   .subTitleClass[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Montserrat';\n  color: #34353a;\n  font-weight: 500;\n  margin-left: 10px;\n}\n[_nghost-%COMP%]   .padding-10[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   .border[_ngcontent-%COMP%] {\n  border: 1px solid #c4c4c4;\n  padding: 10px;\n}\n[_nghost-%COMP%]   .border.first[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0px 0px;\n}\n[_nghost-%COMP%]   .border.last[_ngcontent-%COMP%] {\n  border-radius: 0px 0px 10px 10px;\n}\n[_nghost-%COMP%]   .border.radius[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n[_nghost-%COMP%]   .selected[_ngcontent-%COMP%] {\n  border-color: #007aff !important;\n  background-color: #e0e0ef !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11bHRpLWZhY3Rvci1hdXRoZW50aWNhdGlvbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUdRLFlBQUE7RUFDQSxXQUFBO0FBTlI7QUFFQTtFQVFRLGtCQUFBO0FBUFI7QUFEQTtFQVlRLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBUlI7QUFSQTtFQW9CUSxhQUFBO0FBVFI7QUFYQTtFQXdCUSxXQUFBO0FBVlI7QUFkQTtFQTRCUSx5QkFBQTtFQUNBLGFBQUE7QUFYUjtBQWFRO0VBQ0ksZ0NBQUE7QUFYWjtBQWNRO0VBQ0ksZ0NBQUE7QUFaWjtBQWVRO0VBQ0ksbUJBQUE7QUFiWjtBQTNCQTtFQTZDUSxnQ0FBQTtFQUNBLG9DQUFBO0FBZlIiLCJmaWxlIjoibXVsdGktZmFjdG9yLWF1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi9Db250ZW50L2Nzcy9zaXRlLXZhcmlhYmxlcy5sZXNzJztcblxuXG46aG9zdCB7XG5cbiAgICBpbnB1dFt0eXBlPSdyYWRpbyddIHtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICB9XG5cbiAgICBsYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG5cbiAgICAuc3ViVGl0bGVDbGFzcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LW1vbnRzZXJyYXQ7XG4gICAgICAgIGNvbG9yOiBAZGFyay1ncmF5LWJhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cblxuICAgIC5wYWRkaW5nLTEwIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG5cbiAgICAuYm9yZGVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICAmLmZpcnN0IHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5sYXN0IHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5yYWRpdXMge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZWxlY3RlZCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwN2FmZiAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGVmICFpbXBvcnRhbnQ7XG4gICAgfVxuXG59XG4iXX0= */"]
});

/***/ }),

/***/ 88559:
/*!*******************************************************!*\
  !*** ./src/MFA/multi-factor-authentication.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiFactorAuthenticationModule": () => (/* binding */ MultiFactorAuthenticationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var app_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/routing */ 59389);
/* harmony import */ var _components_multi_factor_authentication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/multi-factor-authentication.component */ 69016);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant */ 45702);
/* harmony import */ var _multi_factor_authentication_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multi-factor-authentication.routing */ 41694);
/* harmony import */ var storefront_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! storefront/module */ 89550);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ 45046);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var validation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! validation/module */ 26186);
/* harmony import */ var pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pipes/module */ 20445);
/* harmony import */ var _services_multi_factor_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/multi-factor-authentication.service */ 51467);
/* harmony import */ var _2FA_2FA_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! 2FA/2FA.module */ 11917);
/* harmony import */ var _components_mfa_verify_code_mfa_verify_code_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/mfa-verify-code/mfa-verify-code.component */ 86378);
/* harmony import */ var _components_mfa_security_question_mfa_security_question_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/mfa-security-question/mfa-security-question.component */ 72898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @uirouter/angular */ 99305);









// Refresh imports












const componentDictionary = {
    [_constant__WEBPACK_IMPORTED_MODULE_3__.mfaStateNames.MultiFactorAuthentication]: _components_multi_factor_authentication_component__WEBPACK_IMPORTED_MODULE_2__.MultiFactorAuthenticationComponent,
    [_constant__WEBPACK_IMPORTED_MODULE_3__.mfaStateNames.VerifyCode]: _components_mfa_verify_code_mfa_verify_code_component__WEBPACK_IMPORTED_MODULE_10__.MfaVerifyCodeComponent,
    [_constant__WEBPACK_IMPORTED_MODULE_3__.mfaStateNames.SecurityQuestion]: _components_mfa_security_question_mfa_security_question_component__WEBPACK_IMPORTED_MODULE_11__.MfaSecurityQuestionComponent
};
const routesWithComponents = _multi_factor_authentication_routing__WEBPACK_IMPORTED_MODULE_4__.MultiFactorAuthenticationRoutesStateConfig.map(route => {
    const routes = {
        ...route,
        component: componentDictionary[route.name]
    };
    return routes;
});
class MultiFactorAuthenticationModule {
}
MultiFactorAuthenticationModule.ɵfac = function MultiFactorAuthenticationModule_Factory(t) { return new (t || MultiFactorAuthenticationModule)(); };
MultiFactorAuthenticationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: MultiFactorAuthenticationModule });
MultiFactorAuthenticationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [_services_multi_factor_authentication_service__WEBPACK_IMPORTED_MODULE_8__.MultiFactorAuthenticationService], imports: [[
            (0,app_routing__WEBPACK_IMPORTED_MODULE_1__.DynamicRoutes)([common_module__WEBPACK_IMPORTED_MODULE_0__.ENVIRON_CONFIG], (environConfig) => routesWithComponents),
            common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule, storefront_module__WEBPACK_IMPORTED_MODULE_5__.StorefrontModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__.FlexLayoutModule,
            validation_module__WEBPACK_IMPORTED_MODULE_6__.ValidationModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
            pipes_module__WEBPACK_IMPORTED_MODULE_7__.PipesModule,
            _2FA_2FA_module__WEBPACK_IMPORTED_MODULE_9__.TwoFactorAuthModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](MultiFactorAuthenticationModule, { declarations: [_components_multi_factor_authentication_component__WEBPACK_IMPORTED_MODULE_2__.MultiFactorAuthenticationComponent,
        _components_mfa_verify_code_mfa_verify_code_component__WEBPACK_IMPORTED_MODULE_10__.MfaVerifyCodeComponent,
        _components_mfa_security_question_mfa_security_question_component__WEBPACK_IMPORTED_MODULE_11__.MfaSecurityQuestionComponent], imports: [_uirouter_angular__WEBPACK_IMPORTED_MODULE_19__.UIRouterModule, common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule, storefront_module__WEBPACK_IMPORTED_MODULE_5__.StorefrontModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__.FlexLayoutModule,
        validation_module__WEBPACK_IMPORTED_MODULE_6__.ValidationModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
        pipes_module__WEBPACK_IMPORTED_MODULE_7__.PipesModule,
        _2FA_2FA_module__WEBPACK_IMPORTED_MODULE_9__.TwoFactorAuthModule] }); })();


/***/ }),

/***/ 41694:
/*!********************************************************!*\
  !*** ./src/MFA/multi-factor-authentication.routing.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiFactorAuthenticationRoutesStateConfig": () => (/* binding */ MultiFactorAuthenticationRoutesStateConfig),
/* harmony export */   "stateGuard": () => (/* binding */ stateGuard)
/* harmony export */ });
/* harmony import */ var common_resolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/resolvers */ 1444);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ 45702);
/* harmony import */ var login_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! login/constants */ 5723);




const stateGuard = (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.StateGuard)(constants_module__WEBPACK_IMPORTED_MODULE_1__.webStorageConst.mfaLogin, login_constants__WEBPACK_IMPORTED_MODULE_3__.stateNames.Login);
const MultiFactorAuthenticationRoutesStateConfig = [
    {
        name: _constant__WEBPACK_IMPORTED_MODULE_2__.mfaStateNames.MultiFactorAuthentication,
        url: _constant__WEBPACK_IMPORTED_MODULE_2__.mfaRoutes.MultiFactorAuthentication,
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.notAuthenticatedMf, constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.missingRequiredInformation),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('mfaPageContent', { ItemId: _constant__WEBPACK_IMPORTED_MODULE_2__.cmsIds.MFAPageCMS }),
            stateGuard({ denyRefresh: true, allowed: [login_constants__WEBPACK_IMPORTED_MODULE_3__.stateNames.Login, _constant__WEBPACK_IMPORTED_MODULE_2__.mfaStateNames.VerifyCode] })
        ],
        params: {
            loginApiResponse: null
        },
    },
    {
        name: _constant__WEBPACK_IMPORTED_MODULE_2__.mfaStateNames.VerifyCode,
        url: _constant__WEBPACK_IMPORTED_MODULE_2__.mfaRoutes.VerifyCode,
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.notAuthenticatedMf, constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.missingRequiredInformation),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cmsData', { ItemId: _constant__WEBPACK_IMPORTED_MODULE_2__.cmsIds.VerifyCode }),
            stateGuard({ denyRefresh: true, allowed: [_constant__WEBPACK_IMPORTED_MODULE_2__.mfaStateNames.MultiFactorAuthentication] })
        ],
        params: {
            phoneNumber: null,
            email: null,
            channel: null,
            acctId: null,
            loginApiResponse: null
        },
    },
    {
        name: _constant__WEBPACK_IMPORTED_MODULE_2__.mfaStateNames.SecurityQuestion,
        url: _constant__WEBPACK_IMPORTED_MODULE_2__.mfaRoutes.SecurityQuestion,
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.notAuthenticatedMf, constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.missingRequiredInformation),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cmsData', { ItemId: _constant__WEBPACK_IMPORTED_MODULE_2__.cmsIds.SecurityQuestionCMS }),
            stateGuard({ denyRefresh: true, allowed: [_constant__WEBPACK_IMPORTED_MODULE_2__.mfaStateNames.MultiFactorAuthentication] })
        ],
        params: {
            securityQuestionID: null,
            loginApiResponse: null
        }
    },
];


/***/ }),

/***/ 51467:
/*!*****************************************************************!*\
  !*** ./src/MFA/services/multi-factor-authentication.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiFactorAuthenticationService": () => (/* binding */ MultiFactorAuthenticationService)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var accountDashboard_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! accountDashboard/constants */ 75888);
/* harmony import */ var login_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! login/constants */ 5723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _2FA_services_2FA_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 2FA/services/2FA.service */ 70664);
/* harmony import */ var _authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../authentication/authenticationService/authentication.service */ 44722);
/* harmony import */ var _constants_userRoles_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/userRoles.constants */ 32994);
/* harmony import */ var _authentication_authChannelService_authChannel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../authentication/authChannelService/authChannel.service */ 67734);
/* harmony import */ var _suspendedAccountRefresh_services_suspendedAccount_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../suspendedAccountRefresh/services/suspendedAccount.service */ 14717);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _authentication_addMissingInformationService_addMissingInformation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../authentication/addMissingInformationService/addMissingInformation.service */ 10402);












class MultiFactorAuthenticationService {
  constructor(accountService, twoFAService, genericRepoService, authenticationService, currentUserService, userRoles, authChannel, suspendedAccountService, state, addMissingInformationService) {
    this.accountService = accountService;
    this.twoFAService = twoFAService;
    this.genericRepoService = genericRepoService;
    this.authenticationService = authenticationService;
    this.currentUserService = currentUserService;
    this.userRoles = userRoles;
    this.authChannel = authChannel;
    this.suspendedAccountService = suspendedAccountService;
    this.state = state;
    this.addMissingInformationService = addMissingInformationService;
  }

  authenticateUser() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loginResponse = yield _this.authenticationService.profile({});

      _this.currentUserService.updateCurrentUser(loginResponse);

      yield _this.authChannel.logIn(loginResponse);
    })();
  }

  getAccountInfo() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const accountInfo = yield _this2.accountService.getAccountInformation2fa();
      return accountInfo;
    })();
  }

  sendCode(request) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this3.twoFAService.sendVerificationCode(request);
    })();
  }

  validateCode(request) {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this4.twoFAService.validateVerificationCode(request);
    })();
  }

  getSecurityQuestions() {
    var _this5 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this5.genericRepoService.dataFactory.getSecurityQuestions();
    })();
  }

  verifySecurityQuestionResponse(answer) {
    var _this6 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this6.twoFAService.validateSecurityAnswer({
        answer
      });
    })();
  }

  handleRedirects(loginApiResponse) {
    var _this7 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (loginApiResponse === null || loginApiResponse === void 0 ? void 0 : loginApiResponse.passwordNeedsReset) {
        _this7.addMissingInformationService.setMissingInformation(loginApiResponse.passwordNeedsReset, loginApiResponse.emailIsMissing, loginApiResponse.securityQuestionIsMissing);

        yield _this7.state.go(login_constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.AddMissingInformation);
      } else if (_this7.authenticationService.isAuthorized(_this7.userRoles.suspended)) {
        yield _this7.suspendedAccountService.getFirstSuspendedAccountState().then(_this7.state.go);
      } else {
        yield _this7.state.go(accountDashboard_constants__WEBPACK_IMPORTED_MODULE_1__.stateNames.Frame);
      }
    })();
  }

}

MultiFactorAuthenticationService.ɵfac = function MultiFactorAuthenticationService_Factory(t) {
  return new (t || MultiFactorAuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](common_services__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_2FA_services_2FA_service__WEBPACK_IMPORTED_MODULE_4__.TwoFAService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](common_services__WEBPACK_IMPORTED_MODULE_3__.GenericRepoService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](common_services__WEBPACK_IMPORTED_MODULE_3__.CurrentUserService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_constants_userRoles_constants__WEBPACK_IMPORTED_MODULE_6__.UserRoles), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_authentication_authChannelService_authChannel_service__WEBPACK_IMPORTED_MODULE_7__.AuthChannelService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_suspendedAccountRefresh_services_suspendedAccount_service__WEBPACK_IMPORTED_MODULE_8__.SuspendedAccountService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_11__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_authentication_addMissingInformationService_addMissingInformation_service__WEBPACK_IMPORTED_MODULE_9__.AddMissingInformationService));
};

MultiFactorAuthenticationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
  token: MultiFactorAuthenticationService,
  factory: MultiFactorAuthenticationService.ɵfac
});

/***/ })

}]);
//# sourceMappingURL=559.b989165570e10b72.js.map