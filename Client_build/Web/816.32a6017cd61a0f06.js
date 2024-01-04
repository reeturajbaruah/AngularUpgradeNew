"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[816],{

/***/ 7112:
/*!*****************************************************!*\
  !*** ./src/violations/confirm/confirm.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmComponent": () => (/* binding */ ConfirmComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var common_ui_modals_billingModal_billingModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/ui/modals/billingModal/billingModal.component */ 37882);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ 7370);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var violations_frame_frame_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! violations/frame/frame.component */ 62666);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var violationsCommon_services_webapi_webApis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! violationsCommon/services/webapi/webApis.service */ 27898);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/display/payment/paymentDisplay.component */ 38321);
/* harmony import */ var _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/display/address/addressDisplay.component */ 23204);
/* harmony import */ var _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/containers/row/row.component */ 80001);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 38661);



























function ConfirmComponent_div_15_ng_container_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Please enter a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

function ConfirmComponent_div_15_ng_container_1_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Please enter a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

function ConfirmComponent_div_15_ng_container_1_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Please enter a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

function ConfirmComponent_div_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConfirmComponent_div_15_ng_container_1_p_1_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ConfirmComponent_div_15_ng_container_1_p_2_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, ConfirmComponent_div_15_ng_container_1_p_3_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitch", error_r4.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", "maxLength");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", "minLength");
  }
}

function ConfirmComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConfirmComponent_div_15_ng_container_1_Template, 4, 4, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](2);

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _r0.submitted);
  }
}

function ConfirmComponent_address_display_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "address-display", 28);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("address", ctx_r3.billingInfo.billingType === ctx_r3.BillingType.Credit ? ctx_r3.billingInfo.credit : ctx_r3.billingInfo.eft)("international", ctx_r3.billingInfo.billingType === ctx_r3.BillingType.Credit ? ctx_r3.billingInfo.credit.international : ctx_r3.billingInfo.eft.international)("showLabels", true);
  }
}

class ConfirmComponent {
  constructor(parent, uiRouterGlobals, state, webApis, responseErrorService, dialogService) {
    this.parent = parent;
    this.uiRouterGlobals = uiRouterGlobals;
    this.state = state;
    this.webApis = webApis;
    this.responseErrorService = responseErrorService;
    this.dialogService = dialogService;
    this.BillingType = common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType;
  }

  ngOnInit() {
    this.billingInfo = this.uiRouterGlobals.params.billingInfo || {};
    this.plateContainer = {};
    this.parent.stepNum = 3;
  }

  ngAfterViewInit() {
    return this.billingInfo && this.billingInfo.billingType && !(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(this.billingInfo) ? this.setupPage() : this.wizardComponent.gotoPreviousState();
  }

  setupPage() {
    this.plateContainer = this.parent.getPlateContainer();
    this.parent.setTitle(this.cmsData.Title);
    this.parent.scrollToTop();
  }

  previous(targetState) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.state.go(targetState, {
        billingInfo: _this.billingInfo
      });
    })();
  }

  submit(targetState) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        plate,
        paymentAmount
      } = _this2.plateContainer;
      const paymentRequest = { ..._this2.plateContainer,
        isCreditCard: _this2.billingInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit,
        eftPaymentMethod: { ..._this2.billingInfo.eft,
          nameOnBankAccount: _this2.billingInfo.eft.name,
          accountTypeDisplay: _this2.billingInfo.eft.accountType === common_models__WEBPACK_IMPORTED_MODULE_1__.BankAccountType.Personal ? 'Personal' : 'Business'
        },
        creditCardPaymentMethod: { ..._this2.billingInfo.credit
        },
        plate: { ...plate,
          totalPaymentAmount: paymentAmount
        },
        paymentAmount
      };
      const response = yield _this2.webApis.makePayment(paymentRequest);
      yield response.errors.length > 0 ? _this2.responseErrorService.displayErrorsFromResponse(response) : _this2.goToNextState(targetState);
    })();
  }

  goToNextState(nextState) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.state.go(nextState, {
        billingInfo: _this3.billingInfo
      }, {
        custom: {
          isExplicitlyAllowedTransition: true
        }
      });
    })();
  }

  openModal() {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        billingInformation: (0,lodash__WEBPACK_IMPORTED_MODULE_3__.cloneDeep)(_this4.billingInfo),
        billingType: _this4.billingInfo.billingType,
        stateList: _this4.stateList,
        countryList: _this4.countryList
      };
      return _this4.dialogService.openSliderCentered(common_ui_modals_billingModal_billingModal_component__WEBPACK_IMPORTED_MODULE_2__.BillingModalComponent, data).then(result => {
        if (result) {
          _this4.billingInfo = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.cloneDeep)(result.billingInformation);
          _this4.billingInfo.billingType = result.billingType;
        }
      });
    })();
  }

}

ConfirmComponent.ɵfac = function ConfirmComponent_Factory(t) {
  return new (t || ConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](violations_frame_frame_component__WEBPACK_IMPORTED_MODULE_5__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_19__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_19__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](violationsCommon_services_webapi_webApis_service__WEBPACK_IMPORTED_MODULE_6__.WebApisService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_7__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_7__.DialogService));
};

ConfirmComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
  type: ConfirmComponent,
  selectors: [["violations-confirm-component"]],
  viewQuery: function ConfirmComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](common_ui__WEBPACK_IMPORTED_MODULE_4__.WizardComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.wizardComponent = _t.first);
    }
  },
  inputs: {
    emailAddress: "emailAddress",
    stateList: "stateList",
    countryList: "countryList",
    cmsData: "cmsData"
  },
  decls: 41,
  vars: 17,
  consts: [["validation-focus", "", "name", "violationsForm", "fxLayout", "column", 1, "u-spacing--widthFill"], ["ConfirmForm", "ngForm"], [1, "u-spacing__divider--marginTopBottom"], [1, "u-spacing--widthFill", "u-spacing__fieldToSection--marginTop", 3, "error-check"], ["type", "text", "id", "emailAddress", "name", "emailAddress", "maxLength", "80", "minLength", "1", "placeholder", "username@domain.com", "email", "", 1, "u-spacing--widthFill", 3, "ngModel", "ngModelChange"], ["EmailAddressInput", "ngModel"], ["role", "alert", 4, "ngFor", "ngForOf"], [1, "u-spacing__cardToCard--marginTop"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "u-spacing--widthFill"], ["fxFlex", "grow"], ["fxFlex", "none", "aria-label", "Edit", 1, "editButton", 3, "click"], [3, "billingType", "bankDetails", "creditCard", "showAccountNumber", "showLabels"], [3, "address", "international", "showLabels", 4, "ngIf"], [1, "u-spacing__rowToSection--marginTop", 3, "rowType"], ["col-start", "", "id", "totalPaymentLabel", "fxFlex", "grow"], ["col-end", "", "id", "totalPaymentValue", "fxFlex", "none"], [3, "value"], [1, "u-spacing__buttonToField--marginTop"], [3, "next", "previous"], ["wizard-next", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["wizard-cancel", ""], ["role", "alert"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], ["class", "help-block", 4, "ngSwitchCase"], [1, "help-block"], [3, "address", "international", "showLabels"]],
  template: function ConfirmComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "page-centered-container")(1, "form", 0, 1)(3, "card-container")(4, "header")(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](7, "mat-divider", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "article");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "section", 3)(11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12, "EMAIL");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function ConfirmComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.plateContainer.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, ConfirmComponent_div_15_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](16, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "card-container", 7)(18, "header")(19, "div", 8)(20, "h2", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConfirmComponent_Template_a_click_22_listener() {
        return ctx.openModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](23, " Edit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](24, "mat-divider", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](25, "payment-display", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](26, ConfirmComponent_address_display_26_Template, 1, 3, "address-display", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "row-container", 13)(28, "section", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "section", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](31, "currency", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "section", 17)(33, "wizard-ui", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("next", function ConfirmComponent_Template_wizard_ui_next_33_listener($event) {
        return ctx.submit($event);
      })("previous", function ConfirmComponent_Template_wizard_ui_previous_33_listener($event) {
        return ctx.previous($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](34, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](35, "PAY");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](36, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](37, "mat-icon", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](38, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](39, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](40, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](14);

      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx.cmsData.EMAIL_TITLE);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx.cmsData.EMAIL_INSTRUCTION);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("error-check", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx.plateContainer.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](16, 15, _r1.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx.cmsData.BILLING_INFO_HEADER);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("billingType", ctx.billingInfo.billingType)("bankDetails", ctx.billingInfo.eft)("creditCard", ctx.billingInfo.credit)("showAccountNumber", true)("showLabels", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.billingInfo.billingType);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("rowType", "emphasis");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx.cmsData.PAYMENT_DETAILS_TITLE, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", ctx.plateContainer.paymentAmount);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_8__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_9__.FocusDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__.DefaultLayoutDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_10__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDivider, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_11__.ErrorCheckDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgSwitchCase, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__.DefaultFlexDirective, _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_12__.PaymentDisplayComponent, _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_13__.AddressDisplayComponent, _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_14__.RowContainerComponent, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_15__.CurrencyComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_16__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_17__.WizardNextDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.KeyValuePipe],
  styles: ["[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   #totalPaymentLabel[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  color: #34353a;\n  font-weight: 700;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   #totalPaymentValue[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: 'Montserrat';\n  color: #34353a;\n  font-weight: 700;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   .editButton[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: 'Jost';\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0ubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxmb250cy5sZXNzIiwiLi5cXC4uXFxzdHlsZXNcXHRoZW1lXFxtaXhpbnNcXHBhZ2UubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUdRLGdCQUFBO0FBSlI7QUFDQTtFQU9RLFdBQUE7QUFMUjtBQUZBO0VDS0kseUJBQUE7RUN3Q0EsY0FBQTtFRmhDSSxnQkFBQTtFQUNBLGVBQUE7QUFOUjtBQVJBO0VBa0JRLGlCQUFBO0VDYkoseUJBQUE7RUN5QkEsY0FBQTtFRlRJLGdCQUFBO0VBQ0EsZUFBQTtBQVBSO0FBZkE7RUEwQlEsZ0JBQUE7RUN6QkosbUJBQUE7QURrQkoiLCJmaWxlIjoiY29uZmlybS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcblxuICAgIGgyIHtcbiAgICAgICAgbWF4LWhlaWdodDogNzBweDtcbiAgICB9XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG5cbiAgICAjdG90YWxQYXltZW50TGFiZWwge1xuICAgICAgICAudC1ib2R5LS1mb250RmFtaWx5O1xuICAgICAgICAudC1oZWFkZXItLWNvbG9yKEB0aGVtZS1saWdodCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAjdG90YWxQYXltZW50VmFsdWUge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgLnQtYm9keS0tZm9udEZhbWlseTtcbiAgICAgICAgLnQtYm9keS0tY29sb3IoQHRoZW1lLWxpZ2h0KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5lZGl0QnV0dG9uIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgLnQtaGVhZGVyLS1mb250RmFtaWx5O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG4udC1oZWFkZXItLWZvbnRGYW1pbHkoKSB7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LWpvc3Q7XG59XG5cbi50LWJvZHktLWZvbnRGYW1pbHkoKSB7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LW1vbnRzZXJyYXQ7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cblxuQGJvZHktLWJhY2tncm91bmRDb2xvci1saWdodDogQHdoaXRlO1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjItbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AYm9keS0tY29sb3ItbGlnaHQ6IEB0dW5hLWdyYXk7XG5AYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3ItbGlnaHQ6IEB0cm9waWNhbC1yYWluLWZvcmVzdC1ncmVlbjtcbkBib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1saWdodDogQHNpbHZlci1ncmF5O1xuQGhlYWRlci0tY29sb3ItbGlnaHQ6IEB0dW5hLWdyYXk7XG5AbGFiZWwtLWNvbG9yLWxpZ2h0OiBAYm91bGRlci1ncmF5O1xuQHNlbGVjdF9fYXJyb3ctLWNvbG9yLWxpZ2h0OiBAc2NvcnBpb24tZ3JheTtcbkBsaW5rLS1jb2xvci1saWdodDogQGF6dXJlLXJhZGlhbmNlLWJsdWU7XG5AZGl2aWRlci0tYm9yZGVyQ29sb3ItbGlnaHQ6IEBzY2hvb2wtYnVzLXllbGxvdztcblxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IyKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvcjItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjMoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMy1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWhlYWRlci0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnaGVhZGVyLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWxhYmVsLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdsYWJlbC0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1zZWxlY3RfX2Fycm93LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdzZWxlY3RfX2Fycm93LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWxpbmstLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xpbmstLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvciAhaW1wb3J0YW50OyAvLyBtYXJrZWQgYXMgIWltcG9ydGFudCB0byBvdmVycmlkZSBib290c3RyYXBcbn1cblxuLnQtZGl2aWRlci0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnZGl2aWRlci0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtZGl2aWRlcl9fZGFzaC0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 71761:
/*!**********************************************************************!*\
  !*** ./src/violations/detailsRefresh/invoiced/invoiced.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViolationsInvoicedComponent": () => (/* binding */ ViolationsInvoicedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var animations_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animations/collapse */ 16573);
/* harmony import */ var _invoicedDetailsModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoicedDetailsModal.component */ 58952);
/* harmony import */ var _overpaymentModal_overpaymentModal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overpaymentModal/overpaymentModal.component */ 16539);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 51111);
/* harmony import */ var _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/ui/containers/fxRow/fxRow.component */ 47553);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_toolTip_toolTip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/ui/toolTip/toolTip.component */ 63087);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/ui/display/cmsContent/cmsContent.component */ 89707);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _pipes_default_default_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/default/default.pipe */ 53291);
/* harmony import */ var _pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pipes/dateWithTimeZone/dateWithTimeZone.pipe */ 29719);



















const _c0 = function () { return { "width": "12.5px", "margin-left": "5px" }; };
function ViolationsInvoicedComponent_tool_tip_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tool-tip", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "cms-content", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("template", ctx_r0.caoToolTipCms)("data", ctx_r0.caoToolTipData);
} }
function ViolationsInvoicedComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19)(1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViolationsInvoicedComponent_div_21_Template_input_click_3_listener($event) { return $event.stopPropagation(); })("keypress", function ViolationsInvoicedComponent_div_21_Template_input_keypress_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r6.allowKey($event.key); })("ngModelChange", function ViolationsInvoicedComponent_div_21_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r8.amountChanged($event); })("blur", function ViolationsInvoicedComponent_div_21_Template_input_blur_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r9.amountBlur(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("for", ctx_r1.inputMetadata.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.inputMetadata.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx_r1.inputMetadata.id)("ngModel", ctx_r1.paymentAmountString);
} }
function ViolationsInvoicedComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "currency", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx_r3.invoiced.invoiceDueBeforeDiscount);
} }
function ViolationsInvoicedComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 24)(1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViolationsInvoicedComponent_div_24_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r10.isChecked = $event; })("change", function ViolationsInvoicedComponent_div_24_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r12.checkBoxChange(); })("click", function ViolationsInvoicedComponent_div_24_Template_input_click_3_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("for", ctx_r4.checkboxMetadata.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.checkboxMetadata.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx_r4.checkboxMetadata.id)("ngModel", ctx_r4.isChecked);
} }
class ViolationsInvoicedComponent {
    constructor(downloadService, matDialog, dialogService, toastService) {
        this.downloadService = downloadService;
        this.matDialog = matDialog;
        this.dialogService = dialogService;
        this.toastService = toastService;
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        this.paymentAmountChange = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        //move input to row if partial payments for uninvoiced violations as well
        this.updatePaymentAmount = (paymentAmount) => {
            const twoDecimalPlaces = paymentAmount.toFixed(2);
            this.invoiced.paymentAmount = parseFloat(twoDecimalPlaces);
            this.paymentAmountChange.emit();
            return '$' + twoDecimalPlaces;
        };
        this.showOverPaymentModal = () => {
            const settings = {
                data: {
                    cmsContent: this.cmsData,
                    amountDue: this.initialPaymentAmount || this.invoiced.invoiceDueBeforeDiscount
                }
            };
            this.matDialog
                .open(_overpaymentModal_overpaymentModal_component__WEBPACK_IMPORTED_MODULE_3__.OverpaymentModalComponent, settings);
        };
    }
    get isDownloadBusy() {
        return this.downloadService.isBusy;
    }
    checkBoxChange() {
        this.invoiced.checked = this.isChecked;
        this.selectionChange.emit();
        const paymentAmount = this.isChecked
            ? (this.initialPaymentAmount || this.invoiced.invoiceDueBeforeDiscount)
            : 0;
        this.initialPaymentAmount = 0;
        this.paymentAmountString = this.updatePaymentAmount(paymentAmount);
    }
    parseCurrency(amount) {
        const parsed = parseFloat(amount.replace('$', ''));
        return isNaN(parsed) ? 0 : parsed;
    }
    amountBlur() {
        let paymentAmount = this.parseCurrency(this.paymentAmountString);
        const isOverPayment = paymentAmount > this.invoiced.invoiceDueBeforeDiscount;
        if (isOverPayment) {
            this.showOverPaymentModal();
        }
        paymentAmount = isOverPayment
            ? this.invoiced.invoiceDueBeforeDiscount
            : paymentAmount;
        paymentAmount = paymentAmount < 0.01
            ? 0.01
            : paymentAmount;
        this.paymentAmountString = this.updatePaymentAmount(paymentAmount);
    }
    amountChanged(newPaymentAmountString) {
        this.updatePaymentAmount(this.parseCurrency(newPaymentAmountString));
        const hasDollarSign = newPaymentAmountString.indexOf('$') > -1;
        this.paymentAmountString = (hasDollarSign ? '$' : '') + newPaymentAmountString.replace('$', '');
    }
    allowKey(key) {
        const isDigit = [...Array(10).keys()]
            .map(x => x.toString())
            .some(accept => accept === key);
        return isDigit ||
            (key === '$' && this.paymentAmountString === '') ||
            ((key === '.' || key === 'Del' /*IE numpad sends Del for dot*/) && this.paymentAmountString.indexOf('.') < 0);
    }
    ngOnInit() {
        this.areDetailsCollapsed = true;
        this.initialPaymentAmount = this.invoiced.paymentAmount; //paymentAmount not null when returning to page from billing, confirm
        this.caoToolTipData = {
            dueDate: this.invoiced.dueDate,
            futureAmt: this.invoiced.caoFineEstimate + this.invoiced.invoiceDueBeforeDiscount
        };
        const metaData = (prefix) => ({
            id: `${prefix.toLowerCase()}invoice${this.invoiced.invoiceNum}`,
            description: `${prefix} for Invoice ${this.invoiced.invoiceNum}`
        });
        this.checkboxMetadata = metaData('Checkbox');
        this.inputMetadata = metaData('Input');
    }
    ngOnChanges(changes) {
        if (changes.isChecked) {
            if (changes.isChecked.currentValue && this.invoiced.checked) {
                // When the invoiced component is reloaded from pagination
                this.paymentAmountString = this.updatePaymentAmount(this.invoiced.paymentAmount);
            }
            else {
                this.checkBoxChange();
            }
        }
    }
    openTollDetailsModal() {
        this.dialogService.openSliderFilled(_invoicedDetailsModal_component__WEBPACK_IMPORTED_MODULE_2__.InvoicedDetailsModalComponent, { invoiced: this.invoiced, plate: this.plate, isPreviousPaid: false }, { title: 'Invoice Details' });
        this.toastService.removeAll();
    }
}
ViolationsInvoicedComponent.ɵfac = function ViolationsInvoicedComponent_Factory(t) { return new (t || ViolationsInvoicedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_0__.DownloadService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_0__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_0__.ToasterService)); };
ViolationsInvoicedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ViolationsInvoicedComponent, selectors: [["violations-invoiced-row"]], inputs: { plate: "plate", invoiced: "invoiced", isEditAllowed: "isEditAllowed", cmsData: "cmsData", isLast: "isLast", isChecked: "isChecked", caoToolTipCms: "caoToolTipCms" }, outputs: { selectionChange: "selectionChange", paymentAmountChange: "paymentAmountChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([
            //provides a separate instance for each invoice
            //the link for this invoice gets blocked but other links still work
            //remove this to block all pdf links when one is being downloaded 
            common_services__WEBPACK_IMPORTED_MODULE_0__.DownloadService
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]], decls: 25, vars: 22, consts: [[3, "isInner", "isBottom"], ["col-start", "", 1, "fx-flex-auto", "fx-layout-row", "fx-layout-align-start-center"], [1, "fx-flex-auto-shrink-more", "limited-flex"], [1, "fx-layout-row", "fx-layout-align-start-center", "u--noUnderline", "clickable", 3, "click"], ["translation-skip", "", 1, "fx-flex-none", "violationId--width"], [1, "fx-flex-none", "glyphicon", "glyphicon-chevron-right"], ["fxShow", "", "fxHide.lt-md", "", 1, "fx-flex-auto-shrink-more", "limited-flex"], ["fxShow", "", "fxHide.lt-md", "", "fxLayoutAlign", "start start", "fxLayout", "row", 1, "fx-flex-auto-grow-more", "unlimited-flex"], ["translation-skip", ""], [3, "ngStyle", 4, "ngIf"], ["col-end", "", 1, "fx-flex-none", "fx-layout-row", "fx-layout-align-end-center", 2, "width", "160px"], ["class", "fx-flex-auto unlimited-flex-end", "col-amount", "", 4, "ngIf", "ngIfElse"], ["amountDue", ""], ["class", "fx-layout-row fx-layout-align-end-center unlimited-flex-end", 4, "ngIf"], [3, "ngStyle"], ["tool-tip-hover", ""], ["svgIcon", "information"], ["tool-tip-message", "", "ngClass", "hoverBoxAdjusment"], [3, "template", "data"], ["col-amount", "", 1, "fx-flex-auto", "unlimited-flex-end"], ["translation-skip", "", 1, "sr-only", 3, "for"], ["type", "text", "col-amount", "", 3, "id", "ngModel", "click", "keypress", "ngModelChange", "blur"], [1, "fx-flex-auto", "limited-flex-end"], [3, "value"], [1, "fx-layout-row", "fx-layout-align-end-center", "unlimited-flex-end"], ["type", "checkbox", 3, "id", "ngModel", "ngModelChange", "change", "click"]], template: function ViolationsInvoicedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "main")(1, "fx-row", 0)(2, "section", 1)(3, "div", 2)(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViolationsInvoicedComponent_Template_a_click_4_listener() { return ctx.openTollDetailsModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "dateWithTimeZone");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "dateWithTimeZone");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 7)(17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, ViolationsInvoicedComponent_tool_tip_19_Template, 5, 4, "tool-tip", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, ViolationsInvoicedComponent_div_21_Template, 4, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, ViolationsInvoicedComponent_ng_template_22_Template, 2, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, ViolationsInvoicedComponent_div_24_Template, 4, 4, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isInner", !ctx.isLast)("isBottom", ctx.isLast);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.invoiced.invoiceNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](10, 10, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 13, ctx.invoiced.mailedDate, "date1"), "To be mailed"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](14, 16, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](15, 19, ctx.invoiced.dueDate, "date1"), "To be mailed"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.invoiced.agencyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.invoiced.hasCAOFineEstimate);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isEditAllowed && ctx.invoiced.checked)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isEditAllowed);
    } }, directives: [_common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_4__.FxRowComponent, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultShowHideDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _common_ui_toolTip_toolTip_component__WEBPACK_IMPORTED_MODULE_5__.ToolTipComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultStyleDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_6__.CmsContentComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_7__.CurrencyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.CheckboxControlValueAccessor], pipes: [_pipes_default_default_pipe__WEBPACK_IMPORTED_MODULE_8__.DefaultPipe, _pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_9__.DateWithTimeZonePipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n[_nghost-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n  margin-left: 10px;\n  height: auto;\n  height: initial;\n  width: auto;\n  width: initial;\n}\n[_nghost-%COMP%]   input[type='text'][_ngcontent-%COMP%] {\n  text-align: right;\n  height: 30px;\n  width: 130px;\n  padding: 0px 8px;\n  float: right;\n}\n[_nghost-%COMP%]   .glyphicon.glyphicon-chevron-right[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 100;\n  top: -2px;\n}\n[_nghost-%COMP%]   .violationId--width[_ngcontent-%COMP%] {\n  width: 118px;\n}\n[_nghost-%COMP%]   tool-tip[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 12px;\n  width: 12px;\n}\n[_nghost-%COMP%]   .hoverBoxAdjusment[_ngcontent-%COMP%] {\n  padding: 10px;\n  white-space: nowrap;\n  font-size: 16px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbW1vblxcdWlcXGNvbnRhaW5lcnNcXGZ4Um93XFxkZXRhaWxzLmxlc3MiLCJpbnZvaWNlZC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtBQ0RKO0FEQUE7RUFJUSxhQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREpBO0VBOEVJLGNBQUE7RUFDQSxzQkFBQTtBQ3ZFSjtBRFJBO0VBb0ZJLGNBQUE7RUFDQSxzQkFBQTtBQ3pFSjtBRFpBO0VBeUZJLGNBQUE7RUFDQSxzQkFBQTtBQzFFSjtBRGhCQTtFQThGSSxjQUFBO0VBQ0Esc0JBQUE7QUMzRUo7QURwQkE7RUFtR0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUM1RUo7QUR6QkE7RUF5R0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUM3RUo7QUQ5QkE7RUErR0kscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDOUVKO0FEbkNBO0VBcUhJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQy9FSjtBRHhDQTtFQTBDUSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NSO0FEN0NBO0VBZ0RRLFdBQUE7QUNBUjtBRGhEQTtFQW9EUSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRFI7QUR0REE7RUEyRFEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRlI7QUQ1REE7RUFrRVEsZUFBQTtBQ0hSO0FES1E7RUFDSSxlQUFBO0FDSFo7QUFsRUE7RUFFUSxpQkFBQTtFQUNBLFlBQUE7RUFBQSxlQUFBO0VBQ0EsV0FBQTtFQUFBLGNBQUE7QUFtRVI7QUF2RUE7RUFRUSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBa0VSO0FBOURRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQWdFWjtBQW5GQTtFQXdCUSxZQUFBO0FBOERSO0FBdEZBO0VBNEJRLFlBQUE7RUFDQSxXQUFBO0FBNkRSO0FBMUZBO0VBaUNRLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTREUiIsImZpbGUiOiJpbnZvaWNlZC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcblxuOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmhpZGRlbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG5cblxuICAgIC5meC1mbGV4LWF1dG8ge1xuICAgICAgICAuZngtZmxleC1hdXRvLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWZsZXgtbm9uZSB7XG4gICAgICAgIC5meC1mbGV4LW5vbmUtbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtZmxleC1hdXRvLXNocmluay1tb3JlIHtcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZS1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlIHtcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1ncm93LW1vcmUtbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LXJvdyB7XG4gICAgICAgIC5meC1sYXlvdXQtcm93LW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1jb2x1bW4ge1xuICAgICAgICAuZngtbGF5b3V0LWNvbHVtbi1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyIHtcbiAgICAgICAgLmZ4LWxheW91dC1hbGlnbi1zdGFydC1jZW50ZXItbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LWFsaWduLWVuZC1jZW50ZXIge1xuICAgICAgICAuZngtbGF5b3V0LWFsaWduLWVuZC1jZW50ZXItbWl4aW4oKTtcbiAgICB9XG5cbiAgICAubGltaXRlZC1mbGV4IHtcbiAgICAgICAgbWluLXdpZHRoOiAxNzBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA1MzBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnVubGltaXRlZC1mbGV4IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmxpbWl0ZWQtZmxleC1lbmQge1xuICAgICAgICBtaW4td2lkdGg6IDcwcHg7XG4gICAgICAgIG1heC13aWR0aDogODBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG5cbiAgICAubGFyZ2VyLWxpbWl0ZWQtZmxleC1lbmQge1xuICAgICAgICBtaW4td2lkdGg6IDE0M3B4O1xuICAgICAgICBtYXgtd2lkdGg6IDE0NXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cblxuICAgIC50YWJsZS1zcGFjZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcblxuICAgICAgICAmLmx0LW1kIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIE1peGlucyB0byBhcHBlYXNlIHBlcmZvcm1hbmNlXG4uZngtZmxleC1hdXRvLW1peGluKCkge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5meC1mbGV4LW5vbmUtbWl4aW4oKSB7XG4gICAgLy8gbGVzc2hpbnQtZGlzYWJsZS1uZXh0LWxpbmUgemVyb1VuaXRcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1hdXRvLXNocmluay1tb3JlLW1peGluKCkge1xuICAgIGZsZXg6IDEgMiBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlLW1peGluKCkge1xuICAgIGZsZXg6IDIgMSBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5meC1sYXlvdXQtcm93LW1peGluKCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZngtbGF5b3V0LWNvbHVtbi1taXhpbigpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZ4LWxheW91dC1hbGlnbi1zdGFydC1jZW50ZXItbWl4aW4oKSB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZngtbGF5b3V0LWFsaWduLWVuZC1jZW50ZXItbWl4aW4oKSB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiIsIkBpbXBvcnQgJ2NvbW1vbi91aS9jb250YWluZXJzL2Z4Um93L2RldGFpbHMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIGhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgd2lkdGg6IGluaXRpYWw7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT0ndGV4dCddIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHggOHB4O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuXG4gICAgLmdseXBoaWNvbiB7XG4gICAgICAgICYuZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC52aW9sYXRpb25JZC0td2lkdGgge1xuICAgICAgICB3aWR0aDogMTE4cHg7XG4gICAgfVxuXG4gICAgdG9vbC10aXAgc3ZnIHtcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICB9XG5cbiAgICAuaG92ZXJCb3hBZGp1c21lbnQge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgfVxufVxuIl19 */"], data: { animation: [animations_collapse__WEBPACK_IMPORTED_MODULE_1__.collapseTrigger] } });


/***/ }),

/***/ 58952:
/*!**********************************************************************************!*\
  !*** ./src/violations/detailsRefresh/invoiced/invoicedDetailsModal.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicedDetailsModalComponent": () => (/* binding */ InvoicedDetailsModalComponent)
/* harmony export */ });
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var violationsCommon_services_pdfUrl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! violationsCommon/services/pdfUrl.service */ 47419);
/* harmony import */ var violationsCommon_services_webapi_webApis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! violationsCommon/services/webapi/webApis.service */ 27898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_toaster_toaster_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/ui/toaster/toaster-container.component */ 20919);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/ui/containers/fxRow/fxRow.component */ 47553);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/ui/containers/row/row.component */ 80001);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _pipes_default_default_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/default/default.pipe */ 53291);
/* harmony import */ var _pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/dateWithTimeZone/dateWithTimeZone.pipe */ 29719);

















function InvoicedDetailsModalComponent_section_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 16)(1, "div", 7)(2, "div", 8)(3, "fx-row", 9)(4, "section", 10)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "row-container", 11)(8, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLabel", true)("backgroundColorClass", "transparent-background");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("rowType", "bodyInvert");
} }
const _c0 = function () { return { "margin-top": "2px" }; };
function InvoicedDetailsModalComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "section", 5)(2, "section", 38)(3, "div", 7)(4, "div", 8)(5, "fx-row", 39)(6, "section", 10)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "VIOLATION DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "fx-row", 40)(10, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "dateWithTimeZone");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "section", 41)(15, "div", 7)(16, "div", 8)(17, "fx-row", 39)(18, "section", 10)(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "VIOLATION LOCATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "fx-row", 40)(22, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "section", 42)(25, "div", 7)(26, "div", 8)(27, "fx-row", 39)(28, "section", 20)(29, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "fx-row", 40)(32, "section", 20)(33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](34, "currency", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const violation_r3 = ctx.$implicit;
    const isFirst_r4 = ctx.first;
    const isLast_r5 = ctx.last;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](31, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("fxHide", !isFirst_r4)("isLabel", true)("backgroundColorClass", "transparent-background");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("backgroundColorClass", "white-background")("isTop", ctx_r1.data.invoiced.violations.length > 1 && isFirst_r4)("isBottom", ctx_r1.data.invoiced.violations.length > 1 && isLast_r5)("isInner", !isFirst_r4 && !isLast_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](12, 25, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](13, 28, violation_r3.violationDate, "dateTime3"), "To be mailed"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("fxHide", !isFirst_r4)("isLabel", true)("backgroundColorClass", "transparent-background");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("backgroundColorClass", "white-background")("isTop", ctx_r1.data.invoiced.violations.length > 1 && isFirst_r4)("isBottom", ctx_r1.data.invoiced.violations.length > 1 && isLast_r5)("isInner", !isFirst_r4 && !isLast_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", violation_r3.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("fxHide", !isFirst_r4)("isLabel", true)("backgroundColorClass", "transparent-background");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("backgroundColorClass", "white-background")("isTop", ctx_r1.data.invoiced.violations.length > 1 && isFirst_r4)("isBottom", ctx_r1.data.invoiced.violations.length > 1 && isLast_r5)("isInner", !isFirst_r4 && !isLast_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r1.data.invoiced.invoiceDueBeforeDiscount === 0 ? violation_r3.originalTollAmount : violation_r3.tollAmount);
} }
function InvoicedDetailsModalComponent_row_container_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "row-container", 29)(1, "section", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Adjustments: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "section", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "currency", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("rowType", "bodyInvert")("isInner", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r2.adjustmentAmt * -1);
} }
const _c1 = function (a0) { return { "link-faded": a0 }; };
const _c2 = function () { return { "margin-top": "16px", "margin-bottom": "18px", "width": "100%" }; };
const _c3 = function () { return { "hidden": false }; };
class InvoicedDetailsModalComponent {
    constructor(dialogRef, pdfUrlService, downloadService) {
        this.dialogRef = dialogRef;
        this.pdfUrlService = pdfUrlService;
        this.downloadService = downloadService;
        this.data = {};
    }
    get isDownloadBusy() {
        return this.downloadService.isBusy;
    }
    close() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.data = { ...this.dialogRef.data };
        this.showAdjustments = this.data.invoiced.excusalAmt != null && this.data.isPreviousPaid ?
            (this.data.invoiced.invoiceLevelDiscount + this.data.invoiced.excusalAmt !== 0) :
            (this.data.invoiced.excusalAmt !== 0);
        this.adjustmentAmt = this.data.invoiced.excusalAmt + (this.data.isPreviousPaid ? this.data.invoiced.invoiceLevelDiscount : 0);
    }
    getInvoicePdf() {
        const { invoiceNum, agencyId, mailedDate } = this.data.invoiced;
        const url = this.pdfUrlService.getPdfURL({
            licensePlate: this.data.plate.number,
            licenseState: this.data.plate.state,
            invoiceNum,
            agencyId,
            mailedDate
        });
        this.downloadService.download(url, true);
    }
}
InvoicedDetailsModalComponent.ɵfac = function InvoicedDetailsModalComponent_Factory(t) { return new (t || InvoicedDetailsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_0__.DialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](violationsCommon_services_pdfUrl_service__WEBPACK_IMPORTED_MODULE_1__.PdfUrlService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_0__.DownloadService)); };
InvoicedDetailsModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: InvoicedDetailsModalComponent, selectors: [["violations-invoiced-details"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([
            common_services__WEBPACK_IMPORTED_MODULE_0__.DownloadService,
            { provide: violationsCommon_services_pdfUrl_service__WEBPACK_IMPORTED_MODULE_1__.PdfUrlService, useExisting: violationsCommon_services_webapi_webApis_service__WEBPACK_IMPORTED_MODULE_2__.WebApisService }
        ])], decls: 105, vars: 59, consts: [["fxLayout", "column", "fxLayoutAlign", "start start"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["translation-skip", ""], ["fxFlexOffset", "30px", 1, "pdfIcon", "right-caption", "clickable", 3, "ngClass", "click"], ["src", "/Content/icons/pdf.gif"], ["fxLayout", "row", "fxLayout.lt-md", "row wrap", 3, "ngStyle"], ["fxFlex", "auto"], [1, "u-spacing--widthFill"], ["ngClass.lt-md", "lt-md", 1, "c-labelRowContainer"], [3, "isLabel", "backgroundColorClass"], ["col-start", "", "fxFlex", "auto"], [3, "rowType"], ["translation-skip", "", "col-start", "", "fxFlex", "auto"], ["fxFlex", "auto", "fxFlexOrder", "0", "fxFlexOrder.lt-md", "1", "ngStyle.lt-md", "width: 100%"], ["fxFlexOrder", "0", "fxFlexOrder.lt-md", "1", 1, "hidden", "u-spacing--widthFill", 3, "ngClass.lt-md"], ["fxFlex", "2 1 auto", "fxFlexOrder", "0", "fxFlexOrder.lt-md", "1", 4, "ngIf"], ["fxFlex", "2 1 auto", "fxFlexOrder", "0", "fxFlexOrder.lt-md", "1"], ["translation-skip", "", "col-start", "", "fxFlex", "auto", "fxShow", "", "fxHide.lt-md", ""], ["translation-skip", "", "col-start", "", "fxFlex", "auto", "fxHide", "", "fxShow.lt-md", ""], ["fxFlex", "none"], ["col-end", "", "fxFlex", "none", 1, "u-spacing--widthFill", "c--textAlignEnd"], [3, "value"], ["fxHide.gt-sm", "", 2, "margin-top", "44px", "margin-bottom", "11px"], [2, "width", "100%"], [4, "ngFor", "ngForOf"], ["id", "fee-summary", "fxFlexOffset", "8px", 2, "width", "100%"], [3, "rowType", "isTop"], ["col-start", "", "fxFlex", "grow"], ["col-end", "", "fxFlex", "none"], [3, "rowType", "isInner"], [3, "rowType", "isBottom"], ["id", "violation-summary", "fxFlexOffset", "8px", 2, "width", "100%"], [3, "rowType", "isInner", 4, "ngIf"], ["col-start", "", "fxFlex", "grow", 1, "green-text"], ["col-end", "", "fxFlex", "none", 1, "green-text"], ["id", "total-amount", "fxFlexOffset", "8px", 2, "width", "100%", "margin-bottom", "40px"], ["svgIcon", "checkmark", 1, "center-vertical"], [1, "green-text", 2, "margin-left", "8px"], ["fxFlex", "0 0 45%", "fxFlex.lt-md", "0 0 80%"], ["fxHide.lt-md", "false", 3, "fxHide", "isLabel", "backgroundColorClass"], [3, "backgroundColorClass", "isTop", "isBottom", "isInner"], ["fxFlex", "0 0 40%", "fxFlexOrder", "0", "fxFlexOrder.lt-md", "1", "fxFlex.lt-md", "0 0 auto", "ngStyle.lt-md", "width: 100%"], ["fxFlex", "0 0 15%", "fxFlex.lt-md", "0 0 20%"]], template: function InvoicedDetailsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-toaster-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "header", 1)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Invoice: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InvoicedDetailsModalComponent_Template_figure_click_7_listener() { return ctx.getInvoicePdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " \u00A0PDF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "section", 5)(12, "section", 6)(13, "div", 7)(14, "div", 8)(15, "fx-row", 9)(16, "section", 10)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "INVOICE DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "row-container", 11)(20, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](23, "dateWithTimeZone");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "section", 13)(25, "div", 7)(26, "div", 8)(27, "fx-row", 9)(28, "section", 10)(29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "DUE DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "row-container", 11)(32, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](34, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](35, "dateWithTimeZone");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](36, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, InvoicedDetailsModalComponent_section_37_Template, 12, 3, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](38, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "section", 16)(40, "div", 7)(41, "div", 8)(42, "fx-row", 9)(43, "section", 10)(44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "AGENCY");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "row-container", 11)(47, "section", 17)(48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "section", 18)(51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "section", 19)(54, "div", 7)(55, "div", 8)(56, "fx-row", 9)(57, "section", 20)(58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "AMOUNT DUE");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "row-container", 11)(61, "section", 20)(62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](63, "currency", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "header", 22)(65, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, "Toll Violation Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "section", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](68, InvoicedDetailsModalComponent_div_68_Template, 35, 32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "section", 25)(70, "row-container", 26)(71, "section", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72, " Administrative Fees ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](74, "currency", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "row-container", 29)(76, "section", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, " Collections Fees: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](79, "currency", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "row-container", 30)(81, "section", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82, " Other Fees: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](84, "currency", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "section", 31)(86, "row-container", 26)(87, "section", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](88, " Sub-total Invoice Due: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](90, "currency", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](91, InvoicedDetailsModalComponent_row_container_91_Template, 5, 3, "row-container", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "row-container", 30)(93, "section", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](94, " Amount Already Paid: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "section", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](96, "currency", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](97, "section", 35)(98, "row-container", 11)(99, "section", 27)(100, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](101, "Total Invoice Amount Due: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "section", 28)(103, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](104, "currency", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.data.invoiced.invoiceNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](54, _c1, ctx.isDownloadBusy));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](56, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLabel", true)("backgroundColorClass", "transparent-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("rowType", "bodyInvert");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](22, 42, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](23, 45, ctx.data.invoiced.mailedDate, "date1"), "To be mailed"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLabel", true)("backgroundColorClass", "transparent-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("rowType", "bodyInvert");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](34, 48, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](35, 51, ctx.data.invoiced.dueDate, "date1"), "To be mailed"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](57, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.data.isPreviousPaid);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](58, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLabel", true)("backgroundColorClass", "transparent-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("rowType", "bodyInvert");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.data.invoiced.agencyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.data.invoiced.mobileAgencyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLabel", true)("backgroundColorClass", "transparent-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("rowType", "bodyInvert");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.data.invoiced.invoiceDueBeforeDiscount);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.data.invoiced.violations);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("rowType", "bodyInvert")("isTop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.data.invoiced.originalAdminFees);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("rowType", "bodyInvert")("isInner", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.data.invoiced.originalCollectionFees);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("rowType", "bodyInvert")("isBottom", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.data.invoiced.originalOtherFees);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("rowType", "bodyInvert")("isTop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.data.invoiced.originalInvoiceTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showAdjustments);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("rowType", "bodyInvert")("isBottom", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.data.invoiced.previouslyPaid * -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("rowType", "bodyInvert");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.data.invoiced.invoiceDueBeforeDiscount);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _common_ui_toaster_toaster_container_component__WEBPACK_IMPORTED_MODULE_3__.ToasterContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexOffsetDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultStyleDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_4__.FxRowComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_5__.RowContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexOrderDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultShowHideDirective, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_6__.CurrencyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf], pipes: [_pipes_default_default_pipe__WEBPACK_IMPORTED_MODULE_7__.DefaultPipe, _pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_8__.DateWithTimeZonePipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n[_nghost-%COMP%]   .c--textAlignEnd[_ngcontent-%COMP%] {\n  text-align: end;\n}\n[_nghost-%COMP%]   .c-labelRowContainer.lt-md[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  margin-left: -14px;\n  margin-right: -14px;\n  padding-left: 14px;\n  padding-right: 14px;\n}\n[_nghost-%COMP%]   .green-text[_ngcontent-%COMP%] {\n  color: #018749;\n}\n[_nghost-%COMP%]   .link-faded[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n[_nghost-%COMP%]   .center-vertical[_ngcontent-%COMP%] {\n  vertical-align: text-bottom;\n}\n[_nghost-%COMP%]   app-toaster-container[_ngcontent-%COMP%] {\n  line-height: 1.3;\n  font-size: 10.5pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbW1vblxcdWlcXGNvbnRhaW5lcnNcXGZ4Um93XFxkZXRhaWxzLmxlc3MiLCJpbnZvaWNlZERldGFpbHNNb2RhbC5sZXNzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxwYWdlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FDREo7QURBQTtFQUlRLGFBQUE7RUFDQSxrQkFBQTtBQ0RSO0FESkE7RUE4RUksY0FBQTtFQUNBLHNCQUFBO0FDdkVKO0FEUkE7RUFvRkksY0FBQTtFQUNBLHNCQUFBO0FDekVKO0FEWkE7RUF5RkksY0FBQTtFQUNBLHNCQUFBO0FDMUVKO0FEaEJBO0VBOEZJLGNBQUE7RUFDQSxzQkFBQTtBQzNFSjtBRHBCQTtFQW1HSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQzVFSjtBRHpCQTtFQXlHSSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQzdFSjtBRDlCQTtFQStHSSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUM5RUo7QURuQ0E7RUFxSEkscUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDL0VKO0FEeENBO0VBMENRLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ1I7QUQ3Q0E7RUFnRFEsV0FBQTtBQ0FSO0FEaERBO0VBb0RRLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNEUjtBRHREQTtFQTJEUSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNGUjtBRDVEQTtFQWtFUSxlQUFBO0FDSFI7QURLUTtFQUNJLGVBQUE7QUNIWjtBQWhFQTtFQUVRLGVBQUE7QUFpRVI7QUE3RFE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBK0RaO0FBMUVBO0VDa0NJLGNBQUE7QUQyQ0o7QUE3RUE7RUFvQlEsWUFBQTtBQTREUjtBQWhGQTtFQXdCUSwyQkFBQTtBQTJEUjtBQW5GQTtFQTRCUSxnQkFBQTtFQUNBLGlCQUFBO0FBMERSIiwiZmlsZSI6Imludm9pY2VkRGV0YWlsc01vZGFsLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuXG4gICAgLmZ4LWZsZXgtYXV0byB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtZmxleC1ub25lIHtcbiAgICAgICAgLmZ4LWZsZXgtbm9uZS1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUge1xuICAgICAgICAuZngtZmxleC1hdXRvLXNocmluay1tb3JlLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWZsZXgtYXV0by1ncm93LW1vcmUge1xuICAgICAgICAuZngtZmxleC1hdXRvLWdyb3ctbW9yZS1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtcm93IHtcbiAgICAgICAgLmZ4LWxheW91dC1yb3ctbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LWNvbHVtbiB7XG4gICAgICAgIC5meC1sYXlvdXQtY29sdW1uLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1hbGlnbi1zdGFydC1jZW50ZXIge1xuICAgICAgICAuZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlci1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtYWxpZ24tZW5kLWNlbnRlciB7XG4gICAgICAgIC5meC1sYXlvdXQtYWxpZ24tZW5kLWNlbnRlci1taXhpbigpO1xuICAgIH1cblxuICAgIC5saW1pdGVkLWZsZXgge1xuICAgICAgICBtaW4td2lkdGg6IDE3MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDUzMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAudW5saW1pdGVkLWZsZXgge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAubGltaXRlZC1mbGV4LWVuZCB7XG4gICAgICAgIG1pbi13aWR0aDogNzBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cblxuICAgIC5sYXJnZXItbGltaXRlZC1mbGV4LWVuZCB7XG4gICAgICAgIG1pbi13aWR0aDogMTQzcHg7XG4gICAgICAgIG1heC13aWR0aDogMTQ1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxuXG4gICAgLnRhYmxlLXNwYWNlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuXG4gICAgICAgICYubHQtbWQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gTWl4aW5zIHRvIGFwcGVhc2UgcGVyZm9ybWFuY2Vcbi5meC1mbGV4LWF1dG8tbWl4aW4oKSB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWZsZXgtbm9uZS1taXhpbigpIHtcbiAgICAvLyBsZXNzaGludC1kaXNhYmxlLW5leHQtbGluZSB6ZXJvVW5pdFxuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUtbWl4aW4oKSB7XG4gICAgZmxleDogMSAyIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWZsZXgtYXV0by1ncm93LW1vcmUtbWl4aW4oKSB7XG4gICAgZmxleDogMiAxIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWxheW91dC1yb3ctbWl4aW4oKSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5meC1sYXlvdXQtY29sdW1uLW1peGluKCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlci1taXhpbigpIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5meC1sYXlvdXQtYWxpZ24tZW5kLWNlbnRlci1taXhpbigpIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5AaW1wb3J0ICdjb21tb24vdWkvY29udGFpbmVycy9meFJvdy9kZXRhaWxzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgLmMtLXRleHRBbGlnbkVuZCB7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG5cbiAgICAuYy1sYWJlbFJvd0NvbnRhaW5lciB7XG4gICAgICAgICYubHQtbWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdoaXRlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC1AcGFnZS1iYXItbWFyZ2luLXN0YXRpYy1sdC1tZDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLUBwYWdlLWJhci1tYXJnaW4tc3RhdGljLWx0LW1kO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiBAcGFnZS1iYXItbWFyZ2luLXN0YXRpYy1sdC1tZDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IEBwYWdlLWJhci1tYXJnaW4tc3RhdGljLWx0LW1kO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmdyZWVuLXRleHQge1xuICAgICAgICAudC1ib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvcihAdGhlbWUtbGlnaHQpO1xuICAgIH1cblxuICAgIC5saW5rLWZhZGVkIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cblxuICAgIC5jZW50ZXItdmVydGljYWwge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgfVxuXG4gICAgYXBwLXRvYXN0ZXItY29udGFpbmVyIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgICAgZm9udC1zaXplOiAxMC41cHQ7XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3ItbGlnaHQ6IEB3aGl0ZTtcbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3IyLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMy1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWNvbG9yLWxpZ2h0OiBAdHVuYS1ncmF5O1xuQGJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLWxpZ2h0OiBAdHJvcGljYWwtcmFpbi1mb3Jlc3QtZ3JlZW47XG5AYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItbGlnaHQ6IEBzaWx2ZXItZ3JheTtcbkBoZWFkZXItLWNvbG9yLWxpZ2h0OiBAdHVuYS1ncmF5O1xuQGxhYmVsLS1jb2xvci1saWdodDogQGJvdWxkZXItZ3JheTtcbkBzZWxlY3RfX2Fycm93LS1jb2xvci1saWdodDogQHNjb3JwaW9uLWdyYXk7XG5AbGluay0tY29sb3ItbGlnaHQ6IEBhenVyZS1yYWRpYW5jZS1ibHVlO1xuQGRpdmlkZXItLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2Nob29sLWJ1cy15ZWxsb3c7XG5cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvci1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IyLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IzKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvcjMtQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1oZWFkZXItLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2hlYWRlci0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1sYWJlbC0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGFiZWwtLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtc2VsZWN0X19hcnJvdy0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnc2VsZWN0X19hcnJvdy0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1saW5rLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdsaW5rLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3IgIWltcG9ydGFudDsgLy8gbWFya2VkIGFzICFpbXBvcnRhbnQgdG8gb3ZlcnJpZGUgYm9vdHN0cmFwXG59XG5cbi50LWRpdmlkZXItLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2RpdmlkZXItLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWRpdmlkZXJfX2Rhc2gtLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG4iXX0= */"] });


/***/ }),

/***/ 16539:
/*!***********************************************************************************************!*\
  !*** ./src/violations/detailsRefresh/invoiced/overpaymentModal/overpaymentModal.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverpaymentModalComponent": () => (/* binding */ OverpaymentModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 51111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/ui/display/cmsContent/cmsContent.component */ 89707);








const _c0 = function () { return { "width": "100%", "padding-top": "45px" }; };
const _c1 = function () { return { "min-width": "700px", "max-width": "700px", "padding-top": "32px" }; };
const _c2 = function () { return { "width": "100%" }; };
const _c3 = function () { return { "max-width": "700px" }; };
const _c4 = function () { return { "width": "100%", "padding-left": "32px", "padding-right": "32px" }; };
const _c5 = function () { return { "width": "auto" }; };
class OverpaymentModalComponent {
    constructor(dialogRef, injectedData) {
        this.dialogRef = dialogRef;
        this.injectedData = injectedData;
        this.primaryContentParams = {};
    }
    ngOnInit() {
        this.cmsContent = this.injectedData.cmsContent;
        this.primaryContentParams = { amountDue: this.injectedData.amountDue };
    }
    close() {
        this.dialogRef.close();
    }
}
OverpaymentModalComponent.ɵfac = function OverpaymentModalComponent_Factory(t) { return new (t || OverpaymentModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
OverpaymentModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OverpaymentModalComponent, selectors: [["overpayment-modal-component"]], decls: 12, vars: 15, consts: [["id", "modal-popup", 1, "refresh-2020", 2, "position", "relative"], ["fxLayout", "column", 1, "overpayment-modal", 2, "padding-top", "32px", 3, "ngStyle.lt-md", "ngStyle"], ["fxLayout", "column", "fxLayoutAlign", "center center", 2, "width", "100%", "max-width", "700px", "text-align", "center"], ["fxLayout", "column", "fxLayoutAlign", "center center", 3, "ngStyle.lt-md", "ngStyle"], ["fxLayout", "row", "fxLayoutAlign", "center center", 2, "padding-top", "20.5px", "text-align", "center"], [3, "template", "data"], ["fxLayout", "row", "fxLayoutAlign", "center center", 2, "padding-top", "33px"], ["id", "close", "type", "button", 3, "ngStyle.lt-md", "ngStyle", "click"]], template: function OverpaymentModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "header", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "cms-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OverpaymentModalComponent_Template_button_click_10_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " CLOSE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c2))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cmsContent.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("template", ctx.cmsContent.PrimaryContent)("data", ctx.primaryContentParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c4))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c5));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultStyleDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_0__.CmsContentComponent], styles: ["[device-type]   [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0px 0px;\n  padding-bottom: 24px;\n}\n[device-type]   [_nghost-%COMP%]   .overpayment-modal[_ngcontent-%COMP%] {\n  padding: 35px;\n}\n[device-type]   [_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[device-type]   [_nghost-%COMP%]   #closeModal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJwYXltZW50TW9kYWwubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUlZLGVBQUE7RUFDQSxvQkFBQTtBQUpaO0FBREE7RUFTWSxhQUFBO0FBTFo7QUFKQTtFQWFZLFdBQUE7QUFOWjtBQVBBO0VBaUJZLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFQWiIsImZpbGUiOiJvdmVycGF5bWVudE1vZGFsLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuXG5bZGV2aWNlLXR5cGVdIHtcbiAgICA6aG9zdCB7XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAub3ZlcnBheW1lbnQtbW9kYWwge1xuICAgICAgICAgICAgcGFkZGluZzogMzVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICNjbG9zZU1vZGFsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 51663:
/*!****************************************************************!*\
  !*** ./src/violations/detailsRefresh/plate/plate.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlateRowComponent": () => (/* binding */ PlateRowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/ui/containers/fxRow/fxRow.component */ 47553);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/ui/containers/row/row.component */ 80001);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/ui/display/currency/currency.component */ 32761);







function PlateRowComponent_section_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "currency", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.plate.plateDueBeforeDiscount);
} }
class PlateRowComponent {
    constructor() { }
}
PlateRowComponent.ɵfac = function PlateRowComponent_Factory(t) { return new (t || PlateRowComponent)(); };
PlateRowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PlateRowComponent, selectors: [["violations-plate-row-refresh"]], inputs: { plate: "plate", noDiscount: "noDiscount" }, decls: 11, vars: 8, consts: [[3, "isLabel", "backgroundColorClass"], ["col-start", "", 1, "fx-flex-auto", "fx-layout-row", "fx-layout-align-start-center"], [1, "fx-flex-auto-shrink-more", "limited-flex"], ["col-end", "", 1, "fx-flex-none", "fx-layout-row", "fx-layout-align-end-center"], [1, "fx-flex-auto", "limited-flex-end"], [3, "rowType", "isTop", "isBig"], ["translation-skip", "", "col-start", "", "fxFlex", "grow"], ["col-end", "", "fxFlex", "none", "class", "totalAmountValue", 4, "ngIf"], ["col-end", "", "fxFlex", "none", 1, "totalAmountValue"], [3, "value"]], template: function PlateRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fx-row", 0)(1, "section", 1)(2, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "PLATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "section", 3)(5, "mat-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "AMOUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "row-container", 5)(8, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, PlateRowComponent_section_10_Template, 2, 1, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLabel", true)("backgroundColorClass", "transparent-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rowType", "semi-emphasis")("isTop", true)("isBig", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.plate.licenseState, " ", ctx.plate.licensePlate, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.plate.totalPaymentAmount !== 0);
    } }, directives: [_common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_0__.FxRowComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_1__.RowContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_2__.CurrencyComponent], styles: [".avenir-85-heavy[_ngcontent-%COMP%] {\n  font-family: 'Avenir LT Std 85 Heavy Regular';\n}\n\n.dark-purple-text[_ngcontent-%COMP%] {\n  color: #2e124e;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXRlLmxlc3MiLCIuLlxcLi5cXC4uXFxzdHlsZXNcXG1peGlucy5sZXNzIiwiLi5cXC4uXFwuLlxcY29tbW9uXFx1aVxcY29udGFpbmVyc1xcZnhSb3dcXGRldGFpbHMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVO0FDS1Y7RUFDSSw2Q0FBQTtBREhKO0FBQ0EsV0FBVztBQ09YO0VBQ0ksY0FBQTtBRExKO0FBQ0EsZ0JBQWdCO0FFTmhCO0VBQ0ksV0FBQTtBRlFKO0FFVEE7RUFJUSxhQUFBO0VBQ0Esa0JBQUE7QUZRUjtBRWJBO0VBOEVJLGNBQUE7RUFDQSxzQkFBQTtBRjlESjtBRWpCQTtFQW9GSSxjQUFBO0VBQ0Esc0JBQUE7QUZoRUo7QUVyQkE7RUF5RkksY0FBQTtFQUNBLHNCQUFBO0FGakVKO0FFekJBO0VBOEZJLGNBQUE7RUFDQSxzQkFBQTtBRmxFSjtBRTdCQTtFQW1HSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBRm5FSjtBRWxDQTtFQXlHSSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBRnBFSjtBRXZDQTtFQStHSSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUZyRUo7QUU1Q0E7RUFxSEkscUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FGdEVKO0FFakRBO0VBMENRLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FGVVI7QUV0REE7RUFnRFEsV0FBQTtBRlNSO0FFekRBO0VBb0RRLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUZRUjtBRS9EQTtFQTJEUSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUZPUjtBRXJFQTtFQWtFUSxlQUFBO0FGTVI7QUVKUTtFQUNJLGVBQUE7QUZNWiIsImZpbGUiOiJwbGF0ZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZm9udHMgKi9cbi5hdmVuaXItODUtaGVhdnkge1xuICBmb250LWZhbWlseTogJ0F2ZW5pciBMVCBTdGQgODUgSGVhdnkgUmVndWxhcic7XG59XG4vKiBjb2xvcnMgKi9cbi5kYXJrLXB1cnBsZS10ZXh0IHtcbiAgY29sb3I6ICMyZTEyNGU7XG59XG4vKiByb3cgc3BhY2luZyAqL1xuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IC5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG46aG9zdCAuZngtZmxleC1hdXRvIHtcbiAgZmxleDogMSAxIGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG46aG9zdCAuZngtZmxleC1ub25lIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG46aG9zdCAuZngtZmxleC1hdXRvLXNocmluay1tb3JlIHtcbiAgZmxleDogMSAyIGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG46aG9zdCAuZngtZmxleC1hdXRvLWdyb3ctbW9yZSB7XG4gIGZsZXg6IDIgMSBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuOmhvc3QgLmZ4LWxheW91dC1yb3cge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgLmZ4LWxheW91dC1jb2x1bW4ge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgLmZ4LWxheW91dC1hbGlnbi1zdGFydC1jZW50ZXIge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5meC1sYXlvdXQtYWxpZ24tZW5kLWNlbnRlciB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5saW1pdGVkLWZsZXgge1xuICBtaW4td2lkdGg6IDE3MHB4O1xuICBtYXgtd2lkdGg6IDUzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IC51bmxpbWl0ZWQtZmxleCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmxpbWl0ZWQtZmxleC1lbmQge1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIG1heC13aWR0aDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbjpob3N0IC5sYXJnZXItbGltaXRlZC1mbGV4LWVuZCB7XG4gIG1pbi13aWR0aDogMTQzcHg7XG4gIG1heC13aWR0aDogMTQ1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG46aG9zdCAudGFibGUtc3BhY2Uge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG46aG9zdCAudGFibGUtc3BhY2UubHQtbWQge1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG4iLCIvLyBERVBSRUNBVEVEIEZJTEUgLSBQbGVhc2UgZGVsZXRlIGFmdGVyIFJlZnJlc2ggZWZmb3J0XG5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJ3ZhcmlhYmxlcy5sZXNzJztcblxuLyogZm9udHMgKi9cbi5hdmVuaXItODUtaGVhdnkge1xuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyIExUIFN0ZCA4NSBIZWF2eSBSZWd1bGFyJztcbn1cblxuXG4vKiBjb2xvcnMgKi9cbi5kYXJrLXB1cnBsZS10ZXh0IHtcbiAgICBjb2xvcjogQHZhbGVudGluby1wdXJwbGU7XG59XG5cblxuLyogcm93IHNwYWNpbmcgKi9cbi5leHRlbmRlZC1yb3ctbWl4aW4oKSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5leHRlbmRlZC1yb3ctbHQtbWQtbWl4aW4oKSB7XG4gICAgbWFyZ2luLWxlZnQ6IC1AcGFnZS1iYXItbWFyZ2luLXN0YXRpYy1sdC1tZDtcbiAgICBtYXJnaW4tcmlnaHQ6IC1AcGFnZS1iYXItbWFyZ2luLXN0YXRpYy1sdC1tZDtcbiAgICBwYWRkaW5nLWxlZnQ6IEBwYWdlLWJhci1tYXJnaW4tc3RhdGljLWx0LW1kO1xuICAgIHBhZGRpbmctcmlnaHQ6IEBwYWdlLWJhci1tYXJnaW4tc3RhdGljLWx0LW1kO1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcblxuOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmhpZGRlbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG5cblxuICAgIC5meC1mbGV4LWF1dG8ge1xuICAgICAgICAuZngtZmxleC1hdXRvLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWZsZXgtbm9uZSB7XG4gICAgICAgIC5meC1mbGV4LW5vbmUtbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtZmxleC1hdXRvLXNocmluay1tb3JlIHtcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZS1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlIHtcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1ncm93LW1vcmUtbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LXJvdyB7XG4gICAgICAgIC5meC1sYXlvdXQtcm93LW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1jb2x1bW4ge1xuICAgICAgICAuZngtbGF5b3V0LWNvbHVtbi1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyIHtcbiAgICAgICAgLmZ4LWxheW91dC1hbGlnbi1zdGFydC1jZW50ZXItbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LWFsaWduLWVuZC1jZW50ZXIge1xuICAgICAgICAuZngtbGF5b3V0LWFsaWduLWVuZC1jZW50ZXItbWl4aW4oKTtcbiAgICB9XG5cbiAgICAubGltaXRlZC1mbGV4IHtcbiAgICAgICAgbWluLXdpZHRoOiAxNzBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA1MzBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnVubGltaXRlZC1mbGV4IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmxpbWl0ZWQtZmxleC1lbmQge1xuICAgICAgICBtaW4td2lkdGg6IDcwcHg7XG4gICAgICAgIG1heC13aWR0aDogODBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG5cbiAgICAubGFyZ2VyLWxpbWl0ZWQtZmxleC1lbmQge1xuICAgICAgICBtaW4td2lkdGg6IDE0M3B4O1xuICAgICAgICBtYXgtd2lkdGg6IDE0NXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cblxuICAgIC50YWJsZS1zcGFjZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcblxuICAgICAgICAmLmx0LW1kIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIE1peGlucyB0byBhcHBlYXNlIHBlcmZvcm1hbmNlXG4uZngtZmxleC1hdXRvLW1peGluKCkge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5meC1mbGV4LW5vbmUtbWl4aW4oKSB7XG4gICAgLy8gbGVzc2hpbnQtZGlzYWJsZS1uZXh0LWxpbmUgemVyb1VuaXRcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1hdXRvLXNocmluay1tb3JlLW1peGluKCkge1xuICAgIGZsZXg6IDEgMiBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlLW1peGluKCkge1xuICAgIGZsZXg6IDIgMSBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5meC1sYXlvdXQtcm93LW1peGluKCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZngtbGF5b3V0LWNvbHVtbi1taXhpbigpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZ4LWxheW91dC1hbGlnbi1zdGFydC1jZW50ZXItbWl4aW4oKSB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZngtbGF5b3V0LWFsaWduLWVuZC1jZW50ZXItbWl4aW4oKSB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 93182:
/*!**************************************************************************!*\
  !*** ./src/violations/detailsRefresh/uninvoiced/uninvoiced.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViolationsUnInvoicedComponent": () => (/* binding */ ViolationsUnInvoicedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var missedatoll_details_uninvoiced_uninvoicedDetailsModal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! missedatoll/details/uninvoiced/uninvoicedDetailsModal.component */ 21682);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/ui/containers/fxRow/fxRow.component */ 47553);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/ui/display/currency/currency.component */ 32761);









function ViolationsUnInvoicedComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViolationsUnInvoicedComponent_div_13_Template_input_click_3_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r0.inputMetadata.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.inputMetadata.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r0.inputMetadata.id)("ngModel", ctx_r0.paymentAmountString);
} }
function ViolationsUnInvoicedComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "currency", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r2.uninvoiced.tollAmount);
} }
function ViolationsUnInvoicedComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17)(1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ViolationsUnInvoicedComponent_div_16_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.isChecked = $event; })("change", function ViolationsUnInvoicedComponent_div_16_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.checkBoxChange(); })("click", function ViolationsUnInvoicedComponent_div_16_Template_input_click_3_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r3.checkboxMetadata.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.checkboxMetadata.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r3.checkboxMetadata.id)("ngModel", ctx_r3.isChecked);
} }
class ViolationsUnInvoicedComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.paymentAmountChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    checkBoxChange() {
        this.uninvoiced.checked = this.isChecked;
        this.selectionChange.emit();
        this.uninvoiced.paymentAmount = this.isChecked ? this.uninvoiced.tollAmount : 0;
        this.paymentAmountChange.emit();
        this.paymentAmountString = '$' + this.uninvoiced.paymentAmount.toFixed(2);
    }
    ngOnInit() {
        this.areDetailsCollapsed = true;
        const metaData = (prefix) => ({
            id: `${prefix.toLowerCase()}violation${this.uninvoiced.violationId}`,
            description: `${prefix} for Violation ${this.uninvoiced.violationId}`
        });
        this.checkboxMetadata = metaData('Checkbox');
        this.inputMetadata = metaData('Input');
    }
    ngOnChanges(changes) {
        if (changes.isChecked) {
            if (changes.isChecked.currentValue && this.uninvoiced.checked) {
                // When the invoiced component is reloaded from pagination
                this.paymentAmountString = '$' + this.uninvoiced.paymentAmount.toFixed(2);
            }
            else {
                this.checkBoxChange();
            }
        }
    }
    openTollDetailsModal() {
        const uninvoicedData = {
            agencyCode: this.uninvoiced.agencyName,
            amountDue: this.uninvoiced.tollAmount,
            location: this.uninvoiced.location,
            violationDate: this.uninvoiced.violationDate,
            violationNumber: this.uninvoiced.violationId.toString()
        };
        this.dialogService.openSliderFilled(missedatoll_details_uninvoiced_uninvoicedDetailsModal_component__WEBPACK_IMPORTED_MODULE_0__.UninvoicedDetailsModalComponent, { uninvoicedDetails: uninvoicedData }, { title: 'Invoice Details' });
    }
}
ViolationsUnInvoicedComponent.ɵfac = function ViolationsUnInvoicedComponent_Factory(t) { return new (t || ViolationsUnInvoicedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_1__.DialogService)); };
ViolationsUnInvoicedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ViolationsUnInvoicedComponent, selectors: [["violations-uninvoiced-row"]], inputs: { uninvoiced: "uninvoiced", isEditAllowed: "isEditAllowed", isLast: "isLast", isChecked: "isChecked" }, outputs: { selectionChange: "selectionChange", paymentAmountChange: "paymentAmountChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 7, consts: [[3, "isInner", "isBottom"], ["col-start", "", 1, "fx-flex-auto", "fx-layout-row", "fx-layout-align-start-center"], [1, "fx-flex-auto-shrink-more", "limited-flex"], [1, "fx-layout-row", "fx-layout-align-start-center", "u--noUnderline", "clickable", 3, "click"], ["translation-skip", "", 1, "fx-flex-none", "violationId--width"], [1, "fx-flex-none", "glyphicon", "glyphicon-chevron-right"], ["fxShow", "", "fxHide.lt-md", "", 1, "fx-flex-auto-shrink-more", "limited-flex"], ["translation-skip", "", "fxShow", "", "fxHide.lt-md", "", 1, "fx-flex-auto-grow-more", "unlimited-flex"], ["col-end", "", 1, "fx-flex-none", "fx-layout-row", "fx-layout-align-end-center", 2, "width", "160px"], ["class", "fx-flex-auto unlimited-flex-end", "col-amount", "", 4, "ngIf", "ngIfElse"], ["amountDue", ""], ["class", "fx-layout-row fx-layout-align-end-center unlimited-flex-end", 4, "ngIf"], ["col-amount", "", 1, "fx-flex-auto", "unlimited-flex-end"], ["translation-skip", "", 1, "sr-only", 3, "for"], ["type", "text", "readonly", "", "col-amount", "", 3, "id", "ngModel", "click"], [1, "fx-flex-auto", "limited-flex-end"], [3, "value"], [1, "fx-layout-row", "fx-layout-align-end-center", "unlimited-flex-end"], ["type", "checkbox", 3, "id", "ngModel", "ngModelChange", "change", "click"]], template: function ViolationsUnInvoicedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main")(1, "fx-row", 0)(2, "section", 1)(3, "div", 2)(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViolationsUnInvoicedComponent_Template_a_click_4_listener() { return ctx.openTollDetailsModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "div", 6)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ViolationsUnInvoicedComponent_div_13_Template, 4, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ViolationsUnInvoicedComponent_ng_template_14_Template, 2, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ViolationsUnInvoicedComponent_div_16_Template, 4, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isInner", !ctx.isLast)("isBottom", ctx.isLast);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.uninvoiced.violationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.uninvoiced.agencyName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isEditAllowed && ctx.uninvoiced.checked)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isEditAllowed);
    } }, directives: [_common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_2__.FxRowComponent, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultShowHideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_3__.CurrencyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n[_nghost-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n  margin-left: 10px;\n  height: auto;\n  height: initial;\n  width: auto;\n  width: initial;\n}\n[_nghost-%COMP%]   input[type='text'][_ngcontent-%COMP%] {\n  text-align: right;\n  height: 30px;\n  width: 130px;\n  padding: 0px 8px;\n  background-color: #efeff4;\n  cursor: not-allowed;\n  float: right;\n}\n[_nghost-%COMP%]   .glyphicon.glyphicon-chevron-right[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 100;\n  top: -2px;\n}\n[_nghost-%COMP%]   .violationId--width[_ngcontent-%COMP%] {\n  width: 118px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbW1vblxcdWlcXGNvbnRhaW5lcnNcXGZ4Um93XFxkZXRhaWxzLmxlc3MiLCJ1bmludm9pY2VkLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FDREo7QURBQTtFQUlRLGFBQUE7RUFDQSxrQkFBQTtBQ0RSO0FESkE7RUE4RUksY0FBQTtFQUNBLHNCQUFBO0FDdkVKO0FEUkE7RUFvRkksY0FBQTtFQUNBLHNCQUFBO0FDekVKO0FEWkE7RUF5RkksY0FBQTtFQUNBLHNCQUFBO0FDMUVKO0FEaEJBO0VBOEZJLGNBQUE7RUFDQSxzQkFBQTtBQzNFSjtBRHBCQTtFQW1HSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQzVFSjtBRHpCQTtFQXlHSSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQzdFSjtBRDlCQTtFQStHSSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUM5RUo7QURuQ0E7RUFxSEkscUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDL0VKO0FEeENBO0VBMENRLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ1I7QUQ3Q0E7RUFnRFEsV0FBQTtBQ0FSO0FEaERBO0VBb0RRLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNEUjtBRHREQTtFQTJEUSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNGUjtBRDVEQTtFQWtFUSxlQUFBO0FDSFI7QURLUTtFQUNJLGVBQUE7QUNIWjtBQWpFQTtFQUVRLGlCQUFBO0VBQ0EsWUFBQTtFQUFBLGVBQUE7RUFDQSxXQUFBO0VBQUEsY0FBQTtBQWtFUjtBQXRFQTtFQVFRLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBaUVSO0FBN0RRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQStEWjtBQXBGQTtFQTBCUSxZQUFBO0FBNkRSIiwiZmlsZSI6InVuaW52b2ljZWQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuXG5cbiAgICAuZngtZmxleC1hdXRvIHtcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1mbGV4LW5vbmUge1xuICAgICAgICAuZngtZmxleC1ub25lLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZSB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUtbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtZmxleC1hdXRvLWdyb3ctbW9yZSB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1yb3cge1xuICAgICAgICAuZngtbGF5b3V0LXJvdy1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtY29sdW1uIHtcbiAgICAgICAgLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlciB7XG4gICAgICAgIC5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyIHtcbiAgICAgICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmxpbWl0ZWQtZmxleCB7XG4gICAgICAgIG1pbi13aWR0aDogMTcwcHg7XG4gICAgICAgIG1heC13aWR0aDogNTMwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC51bmxpbWl0ZWQtZmxleCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5saW1pdGVkLWZsZXgtZW5kIHtcbiAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxuXG4gICAgLmxhcmdlci1saW1pdGVkLWZsZXgtZW5kIHtcbiAgICAgICAgbWluLXdpZHRoOiAxNDNweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxNDVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG5cbiAgICAudGFibGUtc3BhY2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICAgICAgJi5sdC1tZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBNaXhpbnMgdG8gYXBwZWFzZSBwZXJmb3JtYW5jZVxuLmZ4LWZsZXgtYXV0by1taXhpbigpIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1ub25lLW1peGluKCkge1xuICAgIC8vIGxlc3NoaW50LWRpc2FibGUtbmV4dC1saW5lIHplcm9Vbml0XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZS1taXhpbigpIHtcbiAgICBmbGV4OiAxIDIgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1hdXRvLWdyb3ctbW9yZS1taXhpbigpIHtcbiAgICBmbGV4OiAyIDEgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtbGF5b3V0LXJvdy1taXhpbigpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvbWl4aW5zLmxlc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vY29tbW9uL3VpL2NvbnRhaW5lcnMvZnhSb3cvZGV0YWlscy5sZXNzJztcblxuOmhvc3Qge1xuICAgIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xuICAgICAgICB3aWR0aDogaW5pdGlhbDtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPSd0ZXh0J10ge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCA4cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBhdGhlbnMtZ3JheTtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cblxuICAgIC5nbHlwaGljb24ge1xuICAgICAgICAmLmdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudmlvbGF0aW9uSWQtLXdpZHRoIHtcbiAgICAgICAgd2lkdGg6IDExOHB4O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 99322:
/*!**********************************************************************!*\
  !*** ./src/violations/detailsRefresh/violationsDetails.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViolationsDetailsComponent": () => (/* binding */ ViolationsDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 28596);

function ViolationsDetailsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "mat-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "PAY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViolationsDetailsComponent_div_14_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.areAllSelected = $event; })("change", function ViolationsDetailsComponent_div_14_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.changeSelectAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.areAllSelected);
} }
const _c0 = function (a0, a1) { return { state: a0, number: a1 }; };
function ViolationsDetailsComponent_div_15_violations_invoiced_row_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "violations-invoiced-row", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ViolationsDetailsComponent_div_15_violations_invoiced_row_2_Template_violations_invoiced_row_selectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.computeSelectAll(); })("paymentAmountChange", function ViolationsDetailsComponent_div_15_violations_invoiced_row_2_Template_violations_invoiced_row_paymentAmountChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.computePaymentAmount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const violation_r5 = ctx_r13.$implicit;
    const isLast_r7 = ctx_r13.last;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cmsData", ctx_r8.cmsData)("caoToolTipCms", ctx_r8.caoToolTipCms)("plate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx_r8.paginatedPlate.licenseState, ctx_r8.paginatedPlate.licensePlate))("invoiced", violation_r5)("isEditAllowed", ctx_r8.isEditAllowed)("isLast", isLast_r7)("isChecked", violation_r5.checked);
} }
function ViolationsDetailsComponent_div_15_violations_uninvoiced_row_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "violations-uninvoiced-row", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ViolationsDetailsComponent_div_15_violations_uninvoiced_row_3_Template_violations_uninvoiced_row_selectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.computeSelectAll(); })("paymentAmountChange", function ViolationsDetailsComponent_div_15_violations_uninvoiced_row_3_Template_violations_uninvoiced_row_paymentAmountChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.computePaymentAmount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const violation_r5 = ctx_r17.$implicit;
    const isLast_r7 = ctx_r17.last;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uninvoiced", violation_r5)("isEditAllowed", ctx_r9.isEditAllowed)("isLast", isLast_r7)("isChecked", violation_r5.checked);
} }
const _c1 = function (a0) { return { "table-space": a0 }; };
const _c2 = function (a0) { return { "table-space": a0, "lt-md": true }; };
function ViolationsDetailsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViolationsDetailsComponent_div_15_violations_invoiced_row_2_Template, 1, 10, "violations-invoiced-row", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViolationsDetailsComponent_div_15_violations_uninvoiced_row_3_Template, 1, 4, "violations-uninvoiced-row", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const violation_r5 = ctx.$implicit;
    const isFirst_r6 = ctx.first;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, !isFirst_r6))("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, !isFirst_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isInvoice(violation_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isInvoice(violation_r5));
} }
const _c3 = function () { return { "hidden": true }; };
const _c4 = function () { return { "lt-md": true }; };
const _c5 = ["*"];
class ViolationsDetailsComponent {
    constructor() { }
    get plateHasInvoicedViolations() {
        return !!this.paginatedPlate.invoices && this.paginatedPlate.invoices.length > 0;
    }
    computeSelectAll() {
        this.areAllSelected = this.isEveryChildSelected();
    }
    computePaymentAmount() {
        this.computeTotals();
        this.total = this.plate.totalSelected;
    }
    computeTotals() {
        const sumPartials = (list) => list
            .map(x => x.paymentAmount || 0)
            .reduce((a, b) => a + b, 0);
        this.plate.totalSelected = sumPartials(this.plate.invoices) + sumPartials(this.plate.uninvoicedViolations);
        this.plate.remainingBalance = this.plate.plateDueBeforeDiscount - this.plate.totalSelected;
    }
    changeSelectAll() {
        if (this.isEveryChildSelected() !== this.areAllSelected) {
            this.applyCheckEventToAll();
        }
    }
    applyCheckEventToAll() {
        this.plate.checked = this.areAllSelected;
        this.plate.invoices.forEach(item => this.setPaymentAmountAndChecked(item, item.invoiceDueBeforeDiscount, 0));
        this.plate.uninvoicedViolations.forEach(item => this.setPaymentAmountAndChecked(item, item.tollAmount, 0));
        this.computePaymentAmount();
    }
    setPaymentAmountAndChecked(item, checkedDefaultAmount, notCheckedDefaultAmount) {
        if (!item.checked && this.areAllSelected) {
            item.paymentAmount = checkedDefaultAmount;
        }
        else if (item.checked && !this.areAllSelected) {
            item.paymentAmount = notCheckedDefaultAmount;
        }
        item.checked = this.areAllSelected;
    }
    ;
    isEveryChildSelected() {
        const isChecked = (x) => x.checked;
        const allInvoicesSelected = this.plate.invoices.every(isChecked);
        const allUninvoicedViolationsSelected = this.plate.uninvoicedViolations.every(isChecked);
        return allInvoicesSelected && allUninvoicedViolationsSelected;
    }
    //This is for backwards compatibility. Once we get rid of the CAF Toggle we can remove this
    isInvoice(violation) {
        return violation.isInvoice || Array.isArray(violation.violations);
    }
    ngOnInit() {
        this.computeTotals();
        this.checkboxMetadata = {
            id: 'checkboxSelectAll',
            description: 'Checkbox for Selecting All'
        };
        this.total = this.isEditAllowed
            ? 0
            : this.plate.plateDueBeforeDiscount;
    }
}
ViolationsDetailsComponent.ɵfac = function ViolationsDetailsComponent_Factory(t) { return new (t || ViolationsDetailsComponent)(); };
ViolationsDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViolationsDetailsComponent, selectors: [["violations-details-rows-refresh"]], inputs: { totalDescription: "totalDescription", plate: "plate", paginatedPlate: "paginatedPlate", isEditAllowed: "isEditAllowed", arePlatesExpanded: "arePlatesExpanded", cmsData: "cmsData", caoToolTipCms: "caoToolTipCms" }, ngContentSelectors: _c5, decls: 23, vars: 16, consts: [[3, "isLabel", "backgroundColorClass"], ["col-start", "", 1, "fx-flex-auto", "fx-layout-row", "fx-layout-align-start-center"], [1, "fx-flex-auto-shrink-more", "limited-flex"], [1, "fx-flex-auto-shrink-more", "limited-flex", 3, "ngClass.lt-md"], [1, "fx-flex-auto-grow-more", "unlimited-flex", 3, "ngClass.lt-md"], ["col-end", "", 1, "fx-flex-none", "fx-layout-row", "fx-layout-align-end-center", 2, "width", "160px"], [1, "fx-flex-auto", "limited-flex-end"], ["class", "fx-layout-column fx-layout-align-end-start unlimited-flex-end", 4, "ngIf"], ["class", "violations-plate-row", 4, "ngFor", "ngForOf"], [1, "table-space", 3, "ngClass.lt-md"], [3, "rowType", "isBig"], ["col-start", "", "fxFlex", "grow", 2, "font-weight", "700"], ["col-end", "", "fxFlex", "none", 1, "totalAmountValue", 2, "font-weight", "700"], [3, "value"], [1, "fx-layout-column", "fx-layout-align-end-start", "unlimited-flex-end"], [1, "pay-label"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], [1, "violations-plate-row"], [3, "ngClass", "ngClass.lt-md"], [3, "cmsData", "caoToolTipCms", "plate", "invoiced", "isEditAllowed", "isLast", "isChecked", "selectionChange", "paymentAmountChange", 4, "ngIf"], [3, "uninvoiced", "isEditAllowed", "isLast", "isChecked", "selectionChange", "paymentAmountChange", 4, "ngIf"], [3, "cmsData", "caoToolTipCms", "plate", "invoiced", "isEditAllowed", "isLast", "isChecked", "selectionChange", "paymentAmountChange"], [3, "uninvoiced", "isEditAllowed", "isLast", "isChecked", "selectionChange", "paymentAmountChange"]], template: function ViolationsDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main")(1, "fx-row", 0)(2, "section", 1)(3, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "INVOICE/VIOLATIONS ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "INVOICE DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "DUE DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "AGENCY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 5)(12, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "AMOUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ViolationsDetailsComponent_div_14_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ViolationsDetailsComponent_div_15_Template, 4, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9)(18, "row-container", 10)(19, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "currency", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isLabel", true)("backgroundColorClass", "transparent-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditAllowed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paginatedPlate.invoicesAndViolations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowType", "emphasis")("isBig", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isEditAllowed ? "Selected Payment Amount" : "Original Amount Due", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.isEditAllowed ? ctx.paginatedPlate.totalSelected : ctx.paginatedPlate.plateDueBeforeDiscount);
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n[_nghost-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n  margin-left: 10px;\n  height: auto;\n  width: auto;\n}\n[_nghost-%COMP%]   .pay-label[_ngcontent-%COMP%] {\n  position: relative;\n  height: 0px;\n  top: -10px;\n  left: 7px;\n  color: #007aff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcY29tbW9uXFx1aVxcY29udGFpbmVyc1xcZnhSb3dcXGRldGFpbHMubGVzcyIsInZpb2xhdGlvbnNEZXRhaWxzLmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xccGFnZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtBQ0RKO0FEQUE7RUFJUSxhQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREpBO0VBOEVJLGNBQUE7RUFDQSxzQkFBQTtBQ3ZFSjtBRFJBO0VBb0ZJLGNBQUE7RUFDQSxzQkFBQTtBQ3pFSjtBRFpBO0VBeUZJLGNBQUE7RUFDQSxzQkFBQTtBQzFFSjtBRGhCQTtFQThGSSxjQUFBO0VBQ0Esc0JBQUE7QUMzRUo7QURwQkE7RUFtR0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUM1RUo7QUR6QkE7RUF5R0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUM3RUo7QUQ5QkE7RUErR0kscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDOUVKO0FEbkNBO0VBcUhJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQy9FSjtBRHhDQTtFQTBDUSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NSO0FEN0NBO0VBZ0RRLFdBQUE7QUNBUjtBRGhEQTtFQW9EUSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRFI7QUR0REE7RUEyRFEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRlI7QUQ1REE7RUFrRVEsZUFBQTtBQ0hSO0FES1E7RUFDSSxlQUFBO0FDSFo7QUFqRUE7RUFFUSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBa0VSO0FBdEVBO0VBUVEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUNpREoseUJBQUE7QURpQkoiLCJmaWxlIjoidmlvbGF0aW9uc0RldGFpbHMubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuXG5cbiAgICAuZngtZmxleC1hdXRvIHtcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1mbGV4LW5vbmUge1xuICAgICAgICAuZngtZmxleC1ub25lLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZSB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUtbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtZmxleC1hdXRvLWdyb3ctbW9yZSB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1yb3cge1xuICAgICAgICAuZngtbGF5b3V0LXJvdy1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtY29sdW1uIHtcbiAgICAgICAgLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlciB7XG4gICAgICAgIC5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyIHtcbiAgICAgICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmxpbWl0ZWQtZmxleCB7XG4gICAgICAgIG1pbi13aWR0aDogMTcwcHg7XG4gICAgICAgIG1heC13aWR0aDogNTMwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC51bmxpbWl0ZWQtZmxleCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5saW1pdGVkLWZsZXgtZW5kIHtcbiAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxuXG4gICAgLmxhcmdlci1saW1pdGVkLWZsZXgtZW5kIHtcbiAgICAgICAgbWluLXdpZHRoOiAxNDNweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxNDVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG5cbiAgICAudGFibGUtc3BhY2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICAgICAgJi5sdC1tZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBNaXhpbnMgdG8gYXBwZWFzZSBwZXJmb3JtYW5jZVxuLmZ4LWZsZXgtYXV0by1taXhpbigpIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1ub25lLW1peGluKCkge1xuICAgIC8vIGxlc3NoaW50LWRpc2FibGUtbmV4dC1saW5lIHplcm9Vbml0XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZS1taXhpbigpIHtcbiAgICBmbGV4OiAxIDIgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1hdXRvLWdyb3ctbW9yZS1taXhpbigpIHtcbiAgICBmbGV4OiAyIDEgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtbGF5b3V0LXJvdy1taXhpbigpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi9jb21tb24vdWkvY29udGFpbmVycy9meFJvdy9kZXRhaWxzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcblxuOmhvc3Qge1xuICAgIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG5cbiAgICAucGF5LWxhYmVsIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgbGVmdDogN3B4O1xuICAgICAgICAudC1saW5rLS1jb2xvcihAdGhlbWUtbGlnaHQpO1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG5AYm9keS0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAd2hpdGU7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMi1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjMtbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1saWdodDogQHRyb3BpY2FsLXJhaW4tZm9yZXN0LWdyZWVuO1xuQGJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2lsdmVyLWdyYXk7XG5AaGVhZGVyLS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBsYWJlbC0tY29sb3ItbGlnaHQ6IEBib3VsZGVyLWdyYXk7XG5Ac2VsZWN0X19hcnJvdy0tY29sb3ItbGlnaHQ6IEBzY29ycGlvbi1ncmF5O1xuQGxpbmstLWNvbG9yLWxpZ2h0OiBAYXp1cmUtcmFkaWFuY2UtYmx1ZTtcbkBkaXZpZGVyLS1ib3JkZXJDb2xvci1saWdodDogQHNjaG9vbC1idXMteWVsbG93O1xuXG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjIoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMi1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMyhAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtaGVhZGVyLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdoZWFkZXItLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGFiZWwtLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xhYmVsLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXNlbGVjdF9fYXJyb3ctLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3NlbGVjdF9fYXJyb3ctLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGluay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGluay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yICFpbXBvcnRhbnQ7IC8vIG1hcmtlZCBhcyAhaW1wb3J0YW50IHRvIG92ZXJyaWRlIGJvb3RzdHJhcFxufVxuXG4udC1kaXZpZGVyLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdkaXZpZGVyLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1kaXZpZGVyX19kYXNoLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuIl19 */"] });


/***/ }),

/***/ 62666:
/*!*************************************************!*\
  !*** ./src/violations/frame/frame.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrameComponent": () => (/* binding */ FrameComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/providers */ 61264);
/* harmony import */ var common_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/utilities */ 56516);
/* harmony import */ var animations_hide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animations/hide */ 33965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @uirouter/angular */ 99305);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var violations_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! violations/constants */ 27520);
/* harmony import */ var _common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/services/webStorageService/webStorage.service */ 38898);
/* harmony import */ var _common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ui/title-banner/title-banner.component */ 38018);
/* harmony import */ var _common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui/wizard/stepper/stepper.component */ 63457);











class FrameComponent {
  constructor(uiRouterGlobals, webStorageConst, violationStates, windowRef, webStorage, stateService) {
    this.uiRouterGlobals = uiRouterGlobals;
    this.webStorageConst = webStorageConst;
    this.violationStates = violationStates;
    this.windowRef = windowRef;
    this.webStorage = webStorage;
    this.stateService = stateService;
    this.emptyPlate = {
      plate: {
        licensePlate: '',
        licenseState: '',
        discountProgramCode: 0,
        uninvoicedViolations: [],
        invoices: []
      }
    };
    this.steps = [];
    this.stepNum = 0;
  }

  ngOnInit() {
    this.steps = [{
      name: this.cms.Step1,
      background: 'primary'
    }, {
      name: this.cms.Step2,
      background: 'secondary'
    }, {
      name: this.cms.Step3,
      background: 'secondary'
    }, {
      name: this.cms.Step4
    }];
  }

  scrollToTop() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isHidden = true;
      yield (0,common_utilities__WEBPACK_IMPORTED_MODULE_2__.wait)(20);

      _this.windowRef.scrollTo(0, 0);

      _this.isHidden = false;
    })();
  }

  get currentData() {
    var _a;

    return ((_a = this.uiRouterGlobals.current) === null || _a === void 0 ? void 0 : _a.data) || {};
  }

  setTitle(title) {
    this.uiRouterGlobals.current.data.title = title;
  }

  getPlateContainer() {
    const plateContainer = this.webStorage.getValue(this.webStorageConst.enhancedViolationsPlateAndInvoiceData);

    if (!plateContainer) {
      this.stateService.go(this.violationStates.Landing);
      return this.emptyPlate;
    }

    return plateContainer;
  }

}

FrameComponent.ɵfac = function FrameComponent_Factory(t) {
  return new (t || FrameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_10__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](constants_module__WEBPACK_IMPORTED_MODULE_4__.WebStorageConst), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](violations_constants__WEBPACK_IMPORTED_MODULE_5__.StateNames), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](common_providers__WEBPACK_IMPORTED_MODULE_1__.WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_6__.WebStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_10__.StateService));
};

FrameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: FrameComponent,
  selectors: [["violations-frame-component"]],
  inputs: {
    cms: "cms",
    stateList: "stateList",
    countryList: "countryList"
  },
  decls: 6,
  vars: 4,
  consts: [[1, "refresh-2020"], [3, "steps", "currentStepNum"]],
  template: function FrameComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "main", 0)(1, "title-banner");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "stepper", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "ui-view");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.currentData.title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("steps", ctx.steps)("currentStepNum", ctx.stepNum);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@hide", ctx.isHidden);
    }
  },
  directives: [_common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_7__.TitleBannerComponent, _common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_8__.StepperComponent, _uirouter_angular__WEBPACK_IMPORTED_MODULE_11__.UIView],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcmFtZS5sZXNzIn0= */"],
  data: {
    animation: [animations_hide__WEBPACK_IMPORTED_MODULE_3__.hideTrigger]
  }
});

/***/ }),

/***/ 5524:
/*!***********************************************!*\
  !*** ./src/violations/grid/grid.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridComponent": () => (/* binding */ GridComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var cavve_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cavve/constants */ 73748);
/* harmony import */ var common_upgrades__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/upgrades */ 41034);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ 7370);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var violationsCommon_services_pdfUrl_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! violationsCommon/services/pdfUrl.service */ 47419);
/* harmony import */ var violationsCommon_services_webapi_webApis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! violationsCommon/services/webapi/webApis.service */ 27898);
/* harmony import */ var _prevPaidInvoicesModal_prevPaidInvoicesModal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prevPaidInvoicesModal/prevPaidInvoicesModal.component */ 75842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var violations_frame_frame_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! violations/frame/frame.component */ 62666);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var _common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/services/webStorageService/webStorage.service */ 38898);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/containers/page/pageFilled.component */ 95556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/display/cmsContent/cmsContent.component */ 89707);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_matPaginatorGoto_matPaginatorGoto_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/matPaginatorGoto/matPaginatorGoto.component */ 9038);
/* harmony import */ var _detailsRefresh_plate_plate_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../detailsRefresh/plate/plate.component */ 51663);
/* harmony import */ var _detailsRefresh_violationsDetails_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../detailsRefresh/violationsDetails.component */ 99322);
/* harmony import */ var _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/ui/containers/row/row.component */ 80001);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _common_ui_toolTip_toolTip_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/ui/toolTip/toolTip.component */ 63087);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../pipes/safeHtml.pipe */ 49985);































function GridComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "div");
  }
}

function GridComponent_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "div");
  }
}

function GridComponent_ng_template_2_ng_template_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "section", 11)(2, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](3, "h2", 9)(4, "mat-divider", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHTML", ctx_r11.cms.discountTop.selectHeader, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHTML", ctx_r11.cms.discountTop.selectHeaderDescription, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
  }
}

const _c0 = function (a0) {
  return {
    "text-align-right": a0
  };
};

function GridComponent_ng_template_2_ng_template_1_a_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function GridComponent_ng_template_2_ng_template_1_a_17_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return ctx_r22.openPrevPaidInvoices();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " View Previously Paid Invoices ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngClass.gt-sm", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](1, _c0, ctx_r12.cms.discountTop.data["itemsFound"] < ctx_r12.paginationLimit));
  }
}

function GridComponent_ng_template_2_ng_template_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 29)(1, "mat-paginator-goto", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("page", function GridComponent_ng_template_2_ng_template_1_div_18_Template_mat_paginator_goto_page_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return ctx_r24.updateViolationsDetailsTable($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("length", ctx_r13.cms.discountTop.data["itemsFound"])("pageIndex", 0)("pageSize", ctx_r13.defaultPageSize)("hidePageSize", true);
  }
}

function GridComponent_ng_template_2_ng_template_1_violations_details_rows_refresh_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "violations-details-rows-refresh", 31);
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("arePlatesExpanded", true)("caoToolTipCms", ctx_r14.cmsData.CAO_TOOL_TIP)("plate", ctx_r14.plateContainer.plate)("paginatedPlate", ctx_r14.plateContainer.plate);
  }
}

function GridComponent_ng_template_2_ng_template_1_violations_details_rows_refresh_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "violations-details-rows-refresh", 32);
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("arePlatesExpanded", true)("caoToolTipCms", ctx_r15.cmsData.CAO_TOOL_TIP)("plate", ctx_r15.plateContainer.plate)("paginatedPlate", ctx_r15.paginatedPlate);
  }
}

function GridComponent_ng_template_2_ng_template_1_violations_details_rows_refresh_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 35)(1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function GridComponent_ng_template_2_ng_template_1_violations_details_rows_refresh_23_div_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
      return ctx_r27.mobileLoadMore();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "Load more");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}

function GridComponent_ng_template_2_ng_template_1_violations_details_rows_refresh_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "violations-details-rows-refresh", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, GridComponent_ng_template_2_ng_template_1_violations_details_rows_refresh_23_div_1_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("arePlatesExpanded", true)("caoToolTipCms", ctx_r16.cmsData.CAO_TOOL_TIP)("plate", ctx_r16.plateContainer.plate)("paginatedPlate", ctx_r16.mobileLoadedPlate);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r16.cms.discountTop.data["itemsFound"] >= ctx_r16.paginationLimit && ctx_r16.mobileLoadedCombinedViolationsArrayLength < ctx_r16.cms.discountTop.data["itemsFound"]);
  }
}

function GridComponent_ng_template_2_ng_template_1_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const summary_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](2, 1, summary_r29), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
  }
}

function GridComponent_ng_template_2_ng_template_1_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](1, "safeHtml");
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](1, 1, ctx_r18.cms.discountTop.summary), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
  }
}

function GridComponent_ng_template_2_ng_template_1_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](1, "safeHtml");
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](1, 1, ctx_r19.cmsData.CAO_FEE_INFO), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
  }
}

function GridComponent_ng_template_2_ng_template_1_div_36_row_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "row-container", 42)(1, "section", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "section", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "currency", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("rowType", "semi-emphasis")("isInner", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r30.cmsData.LABEL_ADMIN_FEE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", ctx_r30.plateContainer.plate.serviceFee);
  }
}

function GridComponent_ng_template_2_ng_template_1_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 37)(1, "row-container", 38)(2, "section", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "section", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "currency", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "row-container", 42)(7, "section", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "section", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](11, "currency", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](12, GridComponent_ng_template_2_ng_template_1_div_36_row_container_12_Template, 5, 4, "row-container", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "row-container", 46)(14, "section", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "section", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](17, "currency", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("rowType", "semi-emphasis")("isTop", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r20.cmsData.LABEL_ORIGINAL_DUE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", ctx_r20.plateContainer.plate.plateDueBeforeDiscount);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("rowType", "emphasis")("isInner", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r20.cmsData.LABEL_DISCOUNT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", ctx_r20.plateContainer.plate.totalFeesDiscounted);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r20.plateContainer.plate.serviceFee !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("rowType", "semi-emphasis")("isBottom", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r20.cmsData.LABEL_TOTAL_DUE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", ctx_r20.plateContainer.plate.totalPaymentAmount);
  }
}

function GridComponent_ng_template_2_ng_template_1_div_37_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 67)(1, "row-container", 68)(2, "section", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "section", 70)(5, "section", 71)(6, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](7, "currency", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "div", 73)(9, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function GridComponent_ng_template_2_ng_template_1_div_37_div_6_Template_input_change_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
      return ctx_r37.selectSingleAgencyToPay($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const agency_r35 = ctx.$implicit;
    const isFirst_r36 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "", agency_r35.agencyName, "Row");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("isTop", isFirst_r36)("isInner", !isFirst_r36)("isBottom", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", agency_r35.agencyName, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", agency_r35.totalDueBeforeDiscount);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "selectPayAgency", agency_r35.agencyName, "Checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", agency_r35.agencyName)("checked", agency_r35.isChecked);
  }
}

function GridComponent_ng_template_2_ng_template_1_div_37_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 75)(1, "row-container", 68)(2, "section", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "section", 70)(5, "section", 71)(6, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](7, "currency", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "div", 73)(9, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function GridComponent_ng_template_2_ng_template_1_div_37_div_7_Template_input_change_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
      return ctx_r41.selectSingleAgencyToPay($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const agency_r39 = ctx.$implicit;
    const isFirst_r40 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "", agency_r39.mobileAgencyName, "Row");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("isTop", isFirst_r40)("isInner", !isFirst_r40)("isBottom", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", agency_r39.mobileAgencyName, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", agency_r39.totalDueBeforeDiscount);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "selectPayAgency", agency_r39.agencyName, "Checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", agency_r39.agencyName)("checked", agency_r39.isChecked);
  }
}

function GridComponent_ng_template_2_ng_template_1_div_37_row_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "row-container", 76)(1, "section", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "section", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "currency", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("isInner", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r33.cmsData.LABEL_ADMIN_FEE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", ctx_r33.plateContainer.plate.serviceFee);
  }
}

function GridComponent_ng_template_2_ng_template_1_div_37_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "div", 77)(2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](8, "currency", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const agencies_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](agencies_r43.agencyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](agencies_r43.mobileAgencyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", agencies_r43.discountTotal);
  }
}

const _c1 = function () {
  return {
    "max-width": "160px"
  };
};

const _c2 = function () {
  return {
    "lt-md": true
  };
};

function GridComponent_ng_template_2_ng_template_1_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 37)(1, "section", 47)(2, "div", 48)(3, "mat-label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "PAY");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function GridComponent_ng_template_2_ng_template_1_div_37_Template_input_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return ctx_r44.selectAllCheckboxes($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](6, GridComponent_ng_template_2_ng_template_1_div_37_div_6_Template, 10, 9, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](7, GridComponent_ng_template_2_ng_template_1_div_37_div_7_Template, 10, 9, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](8, GridComponent_ng_template_2_ng_template_1_div_37_row_container_8_Template, 5, 3, "row-container", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "row-container", 54)(10, "section", 55)(11, "div", 56)(12, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "tool-tip", 58)(15, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](16, "mat-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](17, "div", 61)(18, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](20, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](21, GridComponent_ng_template_2_ng_template_1_div_37_div_21_Template, 9, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](22, "section", 63)(23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](24, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](25, "currency", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](26, "row-container", 64)(27, "section", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](29, "section", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](30, "currency", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](31, "row-container", 66)(32, "section", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](34, "section", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](35, "currency", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r21.unpaidAgencies);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r21.unpaidAgencies);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r21.plateContainer.plate.serviceFee > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("isInner", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction0"](18, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r21.cmsData.LABEL_DISCOUNT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx_r21.selectedAgenciesToPay.length === 0)("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction0"](19, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r21.cmsData.CAF_TOOL_TIP_TITLE);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r21.selectedAgenciesToPay);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", ctx_r21.plateContainer.plate.totalFeesDiscounted);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("rowType", "emphasis")("isInner", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r21.prevPaidCmsData.LABEL_TOTAL_PAYMENT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", ctx_r21.plateContainer.plate.totalSelected + ctx_r21.plateContainer.plate.serviceFee);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("isBottom", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r21.prevPaidCmsData.LABEL_REMAINING_BALANCE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", ctx_r21.plateContainer.remainingBalance);
  }
}

function GridComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "section", 6)(1, "header")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](3, "cms-content", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "mat-divider", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](6, GridComponent_ng_template_2_ng_template_1_div_6_Template, 6, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "section", 11)(8, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](9, "h2", 9)(10, "mat-divider", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "section", 12)(13, "section", 13)(14, "aside", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](16, "mat-divider", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](17, GridComponent_ng_template_2_ng_template_1_a_17_Template, 2, 3, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](18, GridComponent_ng_template_2_ng_template_1_div_18_Template, 2, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](20, "violations-plate-row-refresh", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](21, GridComponent_ng_template_2_ng_template_1_violations_details_rows_refresh_21_Template, 1, 4, "violations-details-rows-refresh", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](22, GridComponent_ng_template_2_ng_template_1_violations_details_rows_refresh_22_Template, 1, 4, "violations-details-rows-refresh", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](23, GridComponent_ng_template_2_ng_template_1_violations_details_rows_refresh_23_Template, 2, 5, "violations-details-rows-refresh", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](24, "section", 11)(25, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](26, "h2", 9)(27, "mat-divider", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](28, "div", 22)(29, "div", 23)(30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](31, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](32, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](33, GridComponent_ng_template_2_ng_template_1_div_33_Template, 3, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](34, GridComponent_ng_template_2_ng_template_1_span_34_Template, 2, 3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](35, GridComponent_ng_template_2_ng_template_1_span_35_Template, 2, 3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](36, GridComponent_ng_template_2_ng_template_1_div_36_Template, 18, 13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](37, GridComponent_ng_template_2_ng_template_1_div_37_Template, 36, 20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("template", ctx_r7.cms.discountTop.invoiceHeader)("data", ctx_r7.cms.noDiscountTop.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHTML", ctx_r7.cms.discountTop.invoiceHeaderDescription, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r7.discountPerAgencyAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHTML", ctx_r7.cms.discountTop.importantReminderHeader, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHTML", ctx_r7.cms.discountTop.importantReminder, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("fxFlex", ctx_r7.cms.discountTop.data["itemsFound"] >= ctx_r7.paginationLimit ? "none" : "grow");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"](" ", ctx_r7.cms.discountTop.data["itemsFound"], " Record", ctx_r7.cms.discountTop.data["itemsFound"] > 1 ? "s" : "", " found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("vertical", true)("fxShow", ctx_r7.cms.discountTop.data["itemsFound"] >= ctx_r7.paginationLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r7.plateContainer.plate.previouslyPaidInvoices && ctx_r7.plateContainer.plate.previouslyPaidInvoices.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r7.cms.discountTop.data["itemsFound"] >= ctx_r7.paginationLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("plate", ctx_r7.plateContainer.plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r7.cms.discountTop.data["itemsFound"] < ctx_r7.paginationLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r7.cms.discountTop.data["itemsFound"] >= ctx_r7.paginationLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r7.cms.discountTop.data["itemsFound"] >= ctx_r7.paginationLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHTML", ctx_r7.discountCmsData.SUMMARY_HEADER, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](32, 24, ctx_r7.discountCmsData.PAYMENT_SUMMARY_INFO), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r7.discountArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r7.discountArray || ctx_r7.discountArray.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r7.plateContainer.plate.hasCAOFineEstimates);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r7.discountPerAgencyAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r7.discountPerAgencyAvailable);
  }
}

function GridComponent_ng_template_2_ng_template_3_a_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function GridComponent_ng_template_2_ng_template_3_a_16_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return ctx_r52.openPrevPaidInvoices();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " View Previously Paid Invoices ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngClass.gt-sm", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](1, _c0, ctx_r46.cms.noDiscountTop.data["itemsFound"] < ctx_r46.paginationLimit));
  }
}

function GridComponent_ng_template_2_ng_template_3_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 29)(1, "mat-paginator-goto", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("page", function GridComponent_ng_template_2_ng_template_3_div_17_Template_mat_paginator_goto_page_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return ctx_r54.updateViolationsDetailsTable($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("length", ctx_r47.cms.noDiscountTop.data["itemsFound"])("pageIndex", 0)("pageSize", ctx_r47.defaultPageSize)("hidePageSize", true);
  }
}

function GridComponent_ng_template_2_ng_template_3_violations_details_rows_refresh_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "violations-details-rows-refresh", 86);
  }

  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("isEditAllowed", true)("arePlatesExpanded", true)("caoToolTipCms", ctx_r48.cmsData.CAO_TOOL_TIP)("cmsData", ctx_r48.overpaymentModalCmsContent)("plate", ctx_r48.plateContainer.plate)("paginatedPlate", ctx_r48.plateContainer.plate);
  }
}

function GridComponent_ng_template_2_ng_template_3_violations_details_rows_refresh_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "violations-details-rows-refresh", 87);
  }

  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("isEditAllowed", true)("arePlatesExpanded", true)("caoToolTipCms", ctx_r49.cmsData.CAO_TOOL_TIP)("cmsData", ctx_r49.overpaymentModalCmsContent)("plate", ctx_r49.plateContainer.plate)("paginatedPlate", ctx_r49.paginatedPlate);
  }
}

function GridComponent_ng_template_2_ng_template_3_violations_details_rows_refresh_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 35)(1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function GridComponent_ng_template_2_ng_template_3_violations_details_rows_refresh_22_div_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
      return ctx_r57.mobileLoadMore();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "Load more");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}

function GridComponent_ng_template_2_ng_template_3_violations_details_rows_refresh_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "violations-details-rows-refresh", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, GridComponent_ng_template_2_ng_template_3_violations_details_rows_refresh_22_div_1_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("isEditAllowed", true)("arePlatesExpanded", true)("caoToolTipCms", ctx_r50.cmsData.CAO_TOOL_TIP)("cmsData", ctx_r50.overpaymentModalCmsContent)("plate", ctx_r50.plateContainer.plate)("paginatedPlate", ctx_r50.mobileLoadedPlate);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r50.cms.noDiscountTop.data["itemsFound"] >= ctx_r50.paginationLimit && ctx_r50.mobileLoadedCombinedViolationsArrayLength < ctx_r50.cms.discountTop.data["itemsFound"]);
  }
}

function GridComponent_ng_template_2_ng_template_3_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](1, "safeHtml");
  }

  if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](1, 1, ctx_r51.cmsData.CAO_FEE_INFO), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
  }
}

function GridComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "section", 6)(1, "header")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](3, "cms-content", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "mat-divider", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "section", 11)(7, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](8, "h2", 9)(9, "mat-divider", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "section", 12)(12, "section", 13)(13, "aside", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](15, "mat-divider", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](16, GridComponent_ng_template_2_ng_template_3_a_16_Template, 2, 3, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](17, GridComponent_ng_template_2_ng_template_3_div_17_Template, 2, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](18, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](19, "violations-plate-row-refresh", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](20, GridComponent_ng_template_2_ng_template_3_violations_details_rows_refresh_20_Template, 1, 6, "violations-details-rows-refresh", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](21, GridComponent_ng_template_2_ng_template_3_violations_details_rows_refresh_21_Template, 1, 6, "violations-details-rows-refresh", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](22, GridComponent_ng_template_2_ng_template_3_violations_details_rows_refresh_22_Template, 2, 7, "violations-details-rows-refresh", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](23, "section", 11)(24, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](25, "h2", 9)(26, "mat-divider", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](27, "div", 85)(28, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](29, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](30, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](31, GridComponent_ng_template_2_ng_template_3_span_31_Template, 2, 3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](32, "div", 37)(33, "row-container", 38)(34, "section", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](36, "section", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](37, "currency", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](38, "row-container", 42)(39, "section", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](41, "section", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](42, "currency", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](43, "row-container", 46)(44, "section", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](46, "section", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](47, "currency", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("template", ctx_r9.cms.noDiscountTop.plateHeader)("data", ctx_r9.cms.noDiscountTop.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHTML", ctx_r9.cms.noDiscountTop.plateHeaderDescription, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHTML", ctx_r9.cms.noDiscountTop.outstandingViolationsHeader, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHTML", ctx_r9.cms.noDiscountTop.outstandingViolationsHeaderDescription, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("fxFlex", ctx_r9.cms.noDiscountTop.data["itemsFound"] >= ctx_r9.paginationLimit ? "none" : "grow");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"](" ", ctx_r9.cms.noDiscountTop.data["itemsFound"], " Record", ctx_r9.cms.noDiscountTop.data["itemsFound"] > 1 ? "s" : "", " found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("vertical", true)("fxShow", ctx_r9.cms.noDiscountTop.data["itemsFound"] >= ctx_r9.paginationLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r9.plateContainer.plate.previouslyPaidInvoices && ctx_r9.plateContainer.plate.previouslyPaidInvoices.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r9.cms.noDiscountTop.data["itemsFound"] >= ctx_r9.paginationLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("plate", ctx_r9.plateContainer.plate)("noDiscount", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r9.cms.noDiscountTop.data["itemsFound"] < ctx_r9.paginationLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r9.cms.noDiscountTop.data["itemsFound"] >= ctx_r9.paginationLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r9.cms.noDiscountTop.data["itemsFound"] >= ctx_r9.paginationLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHTML", ctx_r9.noDiscountCmsData.SUMMARY_HEADER, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](30, 32, ctx_r9.noDiscountCmsData.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r9.plateContainer.plate.hasCAOFineEstimates);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("rowType", "semi-emphasis")("isTop", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r9.noDiscountCmsData.LABEL_ORIGINAL_DUE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", ctx_r9.plateContainer.plate.plateDueBeforeDiscount);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("rowType", "emphasis")("isInner", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r9.noDiscountCmsData.LABEL_SELECTED, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", ctx_r9.plateContainer.plate.totalSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("rowType", "semi-emphasis")("isBottom", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r9.noDiscountCmsData.LABEL_REMAINING, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", ctx_r9.plateContainer.plate.remainingBalance);
  }
}

function GridComponent_ng_template_2_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "div");
  }
}

function GridComponent_ng_template_2_div_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "wizard-ui", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("next", function GridComponent_ng_template_2_div_5_ng_template_2_Template_wizard_ui_next_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r65);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return ctx_r64.goToNextState($event);
    })("previous", function GridComponent_ng_template_2_div_5_ng_template_2_Template_wizard_ui_previous_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r65);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return ctx_r66.goToPreviousState($event);
    })("cancel", function GridComponent_ng_template_2_div_5_ng_template_2_Template_wizard_ui_cancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r65);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return ctx_r67.hideDiscount();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "ACCEPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "Decline");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](6, "mat-icon", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", ctx_r61.discountPerAgencyAvailable && ctx_r61.selectedAgenciesToPay.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r61.wizardBackLabel, " ");
  }
}

function GridComponent_ng_template_2_div_5_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "wizard-ui", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("next", function GridComponent_ng_template_2_div_5_ng_template_4_Template_wizard_ui_next_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r69);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return ctx_r68.goToNextWhenPaymentAmountValid($event);
    })("previous", function GridComponent_ng_template_2_div_5_ng_template_4_Template_wizard_ui_previous_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r69);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return ctx_r70.showDiscount($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "CONTINUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](6, "mat-icon", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r63.noDiscountWizardBackLabel, " ");
  }
}

function GridComponent_ng_template_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, GridComponent_ng_template_2_div_5_div_1_Template, 1, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, GridComponent_ng_template_2_div_5_ng_template_2_Template, 8, 2, "ng-template", null, 90, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, GridComponent_ng_template_2_div_5_ng_template_4_Template, 8, 1, "ng-template", null, 91, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](3);

    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](5);

    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r10.showDiscountPage)("ngIfThen", _r60)("ngIfElse", _r62);
  }
}

function GridComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](0, GridComponent_ng_template_2_div_0_Template, 1, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, GridComponent_ng_template_2_ng_template_1_Template, 38, 26, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, GridComponent_ng_template_2_ng_template_3_Template, 48, 34, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](5, GridComponent_ng_template_2_div_5_Template, 6, 3, "div", 5);
  }

  if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](2);

    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](4);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.showDiscountPage)("ngIfThen", _r6)("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.hasOutstandingViolations);
  }
}

function GridComponent_ng_template_4_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "section", 6)(1, "header")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](3, "cms-content", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "mat-divider", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](6, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("template", ctx_r71.cms.discountTop.invoiceHeader)("data", ctx_r71.prevPaidCmsData.HEADER);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](6, 3, ctx_r71.prevPaidCmsData.LongDescription), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
  }
}

function GridComponent_ng_template_4_a_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function GridComponent_ng_template_4_a_11_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r74);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return ctx_r73.openPrevPaidInvoices();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " View Previously Paid Invoices ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}

function GridComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](0, GridComponent_ng_template_4_section_0_Template, 7, 5, "section", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "section", 12)(2, "section", 13)(3, "aside", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, " 0 Records found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "mat-divider", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](7, "violations-plate-row-refresh", 18)(8, "mat-icon", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](11, GridComponent_ng_template_4_a_11_Template, 2, 0, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "section", 11)(13, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](14, "h2", 9)(15, "mat-divider", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](17, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](18, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "div", 37)(20, "row-container", 42)(21, "section", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](23, "section", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](24, "currency", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](25, "row-container", 46)(26, "section", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](28, "section", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](29, "currency", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](30, "wizard-ui", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("previous", function GridComponent_ng_template_4_Template_wizard_ui_previous_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return ctx_r75.goToPreviousState($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](31, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](32, "mat-icon", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r4.prevPaidCmsData.HEADER);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("fxFlex", ctx_r4.cms.discountTop.data["itemsFound"] >= ctx_r4.paginationLimit ? "none" : "grow");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("vertical", true)("fxShow", ctx_r4.cms.discountTop.data["itemsFound"] >= ctx_r4.paginationLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("plate", ctx_r4.plateContainer.plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r4.prevPaidCmsData.NO_INVOICES);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r4.plateContainer.plate.previouslyPaidInvoices && ctx_r4.plateContainer.plate.previouslyPaidInvoices.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHTML", ctx_r4.prevPaidCmsData.SUMMARY_HEADER, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](18, 18, ctx_r4.prevPaidCmsData.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("rowType", "emphasis")("isInner", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r4.prevPaidCmsData.LABEL_TOTAL_PAYMENT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("rowType", "semi-emphasis")("isBottom", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r4.prevPaidCmsData.LABEL_REMAINING_BALANCE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r4.wizardBackLabel, " ");
  }
}

class GridComponent {
  constructor(parent, state, webStorageConst, uiRouterGlobals, webStorage, dialogService, environmentConfig, toasterService) {
    this.parent = parent;
    this.state = state;
    this.webStorageConst = webStorageConst;
    this.uiRouterGlobals = uiRouterGlobals;
    this.webStorage = webStorage;
    this.dialogService = dialogService;
    this.environmentConfig = environmentConfig;
    this.toasterService = toasterService; //Pagination

    this.paginatedPlate = {
      invoices: [],
      uninvoicedViolations: [],
      invoicesAndViolations: []
    };
    this.mobileLoadedPlate = {
      invoices: [],
      uninvoicedViolations: [],
      invoicesAndViolations: []
    };
    this.defaultPageSize = this.environmentConfig.paginationConfig.violations.PageSize;
    this.paginationLimit = this.environmentConfig.paginationConfig.violations.LimitToStart;
    this.discountArray = [];
    this.discountCmsData = {};
    this.noDiscountCmsData = {};
    this.prevPaidCmsData = {};
    this.cms = {
      discountTop: {
        text: '',
        invoiceHeader: '',
        invoiceHeaderDescription: '',
        selectHeader: '',
        selectHeaderDescription: '',
        summary: '',
        importantReminderHeader: '',
        importantReminder: '',
        data: {}
      },
      noDiscountTop: {
        plateHeader: '',
        plateHeaderDescription: '',
        outstandingViolationsHeader: '',
        outstandingViolationsHeaderDescription: '',
        data: {}
      }
    };

    this.getPreviouslyPaidPlate = plate => ({ ...plate,
      invoices: plate.previouslyPaidInvoices,
      uninvoicedViolations: [],
      plateDueBeforeDiscount: 0
    });

    this.hasViewableContent = plate => plate.invoices.length + plate.uninvoicedViolations.length > 0;

    this.getShowDiscountPage = (discountCmsData, hasOutstandingViolations, partialPayments) => discountCmsData && hasOutstandingViolations && !partialPayments;

    this.getCurrentStep = hasOutstandingViolations => hasOutstandingViolations ? 1 : 0;

    this.savePlateContainer = () => {
      if (this.discountPerAgencyAvailable && this.showDiscountPage) {
        // Manually delete the isChecked attribute per agency if showDiscountPage is true.
        // It was used for user selection of agencies to pay.
        // This is not needed if !showDiscountPage because it is the "original", which doesn't have isChecked. 
        this.plateContainer.plate.agencies.forEach(agency => delete agency.isChecked);
        this.selectedAgenciesToPay.forEach(agency => agency.paymentAmount = agency.totalDueAfterDiscount);
      }

      const {
        plate
      } = this.plateContainer;
      const plateContainerWithDiscount = { ...this.plateContainer,
        violationsFlowName: this.showDiscountPage ? this.discountCmsData.ItemName : 'OLVPS',
        partialPayments: !this.showDiscountPage,
        paymentAmount: !this.discountPerAgencyAvailable && this.showDiscountPage ? plate.totalPaymentAmount : this.discountPerAgencyAvailable && this.showDiscountPage ? plate.totalSelected + plate.serviceFee : plate.totalSelected,
        remainingBalance: !this.discountPerAgencyAvailable && this.showDiscountPage ? 0 : plate.remainingBalance
      };
      this.webStorage.setKeyValue(this.webStorageConst.enhancedViolationsPlateAndInvoiceData, plateContainerWithDiscount);
    };
  }

  get mobileLoadedCombinedViolationsArrayLength() {
    // Used for length comparison in HTML
    return this.mobileLoadedPlate.invoices.length + this.mobileLoadedPlate.uninvoicedViolations.length;
  }

  recalculatePlateContainerValues() {
    this.plateContainer.plate.totalSelected = this.selectedAgenciesToPay.reduce((sum, current) => sum + current.totalDueAfterDiscount, 0);
    this.plateContainer.plate.totalFeesDiscounted = this.selectedAgenciesToPay.reduce((sum, current) => sum + current.discountTotal, 0);
    this.plateContainer.remainingBalance = this.plateContainer.plate.agencies.reduce((sum, current) => sum + current.totalDueBeforeDiscount, 0) - this.selectedAgenciesToPay.reduce((sum, current) => sum + current.totalDueBeforeDiscount, 0);
  }

  selectSingleAgencyToPay(event) {
    if (event.target.checked) {
      this.selectedAgenciesToPay.push(this.plateContainer.plate.agencies.find(x => x.agencyName.toLowerCase() === event.target.value.toLowerCase())); //if all checkboxes are checked, check the "select all" checkbox.

      if (this.selectedAgenciesToPay.length === this.unpaidAgencies.length) {
        document.getElementById('selectPayAllAgenciesCheckbox').checked = true;
      }
    } else {
      this.selectedAgenciesToPay = this.selectedAgenciesToPay.filter(obj => obj.agencyName.toLowerCase() !== event.target.value.toLowerCase());
      document.getElementById('selectPayAllAgenciesCheckbox').checked = false;
    }

    this.recalculatePlateContainerValues();
  }

  selectAllCheckboxes(event) {
    const checked = event.target.checked;
    this.unpaidAgencies.forEach(agency => {
      agency.isChecked = checked;
      document.getElementById(`selectPayAgency${agency.agencyName}Checkbox`).checked = checked;
    }); //This removes all agencies currently in the array so that there are no duplicates (added twice)
    //use case: if user selected an agency before clicking "select all" -- this will cause duplicates of selected agencies

    while (this.selectedAgenciesToPay.length !== 0) {
      this.selectedAgenciesToPay.pop();
    }

    if (event.target.checked) {
      this.unpaidAgencies.forEach(agency => this.selectedAgenciesToPay.push(agency));
    }

    this.recalculatePlateContainerValues();
  }

  ngOnInit() {
    this.selectedAgenciesToPay = [];
    this.plateContainer = this.parent.getPlateContainer(); //The if else can be removed once we cleanup the CAF feature toggle

    if (this.plateContainer.plate.invoicesAndViolations) {
      //This is to sync the object references
      this.plateContainer.plate.invoices = this.plateContainer.plate.invoicesAndViolations.filter(violation => Array.isArray(violation.violations));
      this.plateContainer.plate.uninvoicedViolations = this.plateContainer.plate.invoicesAndViolations.filter(violation => !Array.isArray(violation.violations));
    } else {
      this.plateContainer.plate.invoicesAndViolations = [].concat(this.plateContainer.plate.invoices, this.plateContainer.plate.uninvoicedViolations).filter(vio => !(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isNil)(vio));
    }

    let discountStringArray = [];

    if (this.discountPerAgencyAvailable) {
      this.plateContainer.plate.agencies.forEach(agency => {
        agency.isChecked = false; //This is for the backwards flow as a way to reset

        agency.paymentAmount = 0;
      });
      this.recalculatePlateContainerValues();
      this.unpaidAgencies = this.plateContainer.plate.agencies.filter(x => x.totalDueBeforeDiscount !== 0);
      discountStringArray = [...new Set(this.plateContainer.plate.agencies.map(item => item.discountProgram))];
      discountStringArray = discountStringArray.filter(x => !(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isNil)(x));
    }

    this.previouslyPaidPlate = this.getPreviouslyPaidPlate(this.plateContainer.plate);
    this.showPreviouslyPaidPlate = this.hasViewableContent(this.previouslyPaidPlate);
    this.hasOutstandingViolations = this.hasViewableContent(this.plateContainer.plate); //set to false to view previously paid only

    this.uiRouterGlobals.current.data.currentStep = this.getCurrentStep(this.hasOutstandingViolations);
    this.parent.stepNum = this.uiRouterGlobals.current.data.currentStep;
    this.discountCmsData = this.cmsData.Children.filter(child => this.plateContainer.plate.discountProgramCode.toString() === child.DISCOUNT_ENUM)[0];

    if (this.discountPerAgencyAvailable && discountStringArray.length > 0 && this.plateContainer.plate.discountProgramCode === 0) {
      this.discountCmsData = this.cmsData.Children.filter(child => discountStringArray[0] === child.DISCOUNT_STRING)[0];
    }

    this.setSummaryArray(discountStringArray);
    this.noDiscountCmsData = this.cmsData.Children.filter(child => 'Summary' === child.ItemName)[0] || {};
    this.prevPaidCmsData = this.cmsData.Children.filter(child => 'Previously Paid' === child.ItemName)[0] || {};

    if (this.discountCmsData) {
      this.discountCmsData.PAYMENT_SUMMARY_INFO = this.noDiscountCmsData.LongDescription || '';
    }

    this.showDiscountPage = this.getShowDiscountPage(!!this.discountCmsData, this.hasOutstandingViolations, this.plateContainer.partialPayments);
    this.cms.noDiscountTop.plateHeader = this.cmsData.NO_DISCOUNT_HEADER;
    this.cms.noDiscountTop.plateHeaderDescription = this.cmsData.ShortDescription;
    this.cms.noDiscountTop.outstandingViolationsHeaderDescription = this.cmsData.LongDescription;
    this.cms.noDiscountTop.outstandingViolationsHeader = this.cmsData.NO_DISCOUNT_INVOICE_HEADER;
    this.cms.discountTop.text = this.discountCmsData && this.discountCmsData.LongDescription;
    this.cms.discountTop.summary = this.discountCmsData && this.discountCmsData.Children.filter(child => 'Summary' === child.ItemName)[0].ShortDescription || '';
    this.cms.discountTop.invoiceHeader = this.discountCmsData && this.discountCmsData.DISCOUNT_INVOICE_HEADER;
    this.cms.discountTop.invoiceHeaderDescription = this.discountCmsData && this.discountCmsData.ShortDescription;
    this.cms.discountTop.selectHeader = this.discountCmsData && this.discountCmsData.DISCOUNT_VIOLATIONS_HEADER;
    this.cms.discountTop.selectHeaderDescription = this.discountCmsData && this.discountCmsData.LongDescription;
    this.cms.discountTop.importantReminderHeader = this.discountCmsData && this.discountCmsData.IMPORTANT_REMINDER;
    this.cms.discountTop.importantReminder = this.discountCmsData && this.discountCmsData.Children.filter(child => 'Important Reminder' === child.ItemName)[0].ShortDescription || '';
    this.cms.discountTop.data = this.cms.noDiscountTop.data = {
      licensePlateState: this.plateContainer.plate.licenseState.toUpperCase(),
      licensePlateNumber: this.plateContainer.plate.licensePlate.toUpperCase(),
      itemsFound: this.plateContainer.plate.invoices.length + this.plateContainer.plate.uninvoicedViolations.length,
      totalAmountDue: this.plateContainer.plate.plateDueBeforeDiscount
    };
    this.overpaymentModalCmsContent = {
      Title: this.cmsData.OVERPAYMENT_HEADER,
      PrimaryContent: this.cmsData.OVERPAYMENT_BODY
    };
    this.wizardBackLabel = this.plateContainer.plate.isNewEzTagAccountEligibile ? 'Back to Offer' : 'Previous';
    this.noDiscountWizardBackLabel = this.discountCmsData ? 'Previous' : this.wizardBackLabel;
    this.parent.setTitle(this.getDiscountTitle());
    this.parent.scrollToTop();
    this.mobileLoadedPlate = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.clone)(this.plateContainer.plate);
    this.mobileLoadedPlate.invoices = [];
    this.mobileLoadedPlate.uninvoicedViolations = [];
    this.mobileLoadedPlate.invoicesAndViolations = [];
    this.paginatedPlate = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.clone)(this.plateContainer.plate);
    this.paginatedPlate.invoices = [];
    this.paginatedPlate.uninvoicedViolations = [];
    this.paginatedPlate.invoicesAndViolations = []; // Any pagination related logic

    if (this.plateContainer.plate.invoicesAndViolations.length >= this.paginationLimit) {
      this.updateViolationsDetailsTable({
        pageIndex: 0,
        pageSize: this.defaultPageSize
      });
      this.mobileLoadMore();
    }
  } // The paginated version of the plate should only be updated when pagination events are triggered


  updateViolationsDetailsTable(event) {
    // Use the start/end indexes to retrieve the violations to show
    const start = event.pageIndex * event.pageSize;
    const end = (event.pageIndex + 1) * event.pageSize;
    const subViolationsArray = this.plateContainer.plate.invoicesAndViolations.slice(start, end); // Split the violations array back into the separate arrays for component and later logic consumption

    this.paginatedPlate.invoices = subViolationsArray.filter(violation => Array.isArray(violation.violations));
    this.paginatedPlate.uninvoicedViolations = subViolationsArray.filter(violation => !Array.isArray(violation.violations));
    this.paginatedPlate.invoicesAndViolations = subViolationsArray; // Used to change the reference while maintaining the same invoice objects
    // Considered having ngDoCheck in violationsDetails but it resulted in an excessive amount of checking on the array objects

    this.paginatedPlate = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.clone)(this.paginatedPlate);
  }

  mobileLoadMore() {
    // Use the start/end indexes to retrieve the violations to append
    const start = this.mobileLoadedCombinedViolationsArrayLength;
    const end = this.mobileLoadedCombinedViolationsArrayLength + this.defaultPageSize;
    const subViolationsArray = this.plateContainer.plate.invoicesAndViolations.slice(start, end); // Split the violations array back into the separate arrays for component and later logic consumption

    this.mobileLoadedPlate.invoices = this.mobileLoadedPlate.invoices.concat(subViolationsArray.filter(violation => Array.isArray(violation.violations)));
    this.mobileLoadedPlate.uninvoicedViolations = this.mobileLoadedPlate.uninvoicedViolations.concat(subViolationsArray.filter(violation => !Array.isArray(violation.violations)));
    this.mobileLoadedPlate.invoicesAndViolations = this.mobileLoadedPlate.invoicesAndViolations.concat(subViolationsArray); // Used to change the reference while maintaining the same invoice objects
    // Considered having ngDoCheck in violationsDetails but it resulted in an excessive amount of checking on the array objects

    this.mobileLoadedPlate = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.clone)(this.mobileLoadedPlate);
  }

  openPrevPaidInvoices() {
    const data = {
      previouslyPaidInvoices: this.plateContainer.plate.previouslyPaidInvoices,
      plate: {
        state: this.plateContainer.plate.licenseState,
        // eslint-disable-next-line id-blacklist
        number: this.plateContainer.plate.licensePlate
      }
    };
    this.dialogService.openSliderFilled(_prevPaidInvoicesModal_prevPaidInvoicesModal_component__WEBPACK_IMPORTED_MODULE_6__.PrevPaidInvoicesComponent, data, {
      title: 'Previously Paid Invoices'
    });
  }

  goToNextWhenPaymentAmountValid(targetState) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.plateContainer.plate.totalSelected >= 0.01) {
        yield _this.goToNextState(targetState);
      } else {
        _this.toasterService.show('Success', _this.cmsData.TOAST_NO_INVOICES_SELECTED);
      }
    })();
  }

  goToNextState(targetState) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.savePlateContainer();

      yield _this2.state.go(targetState, {
        billingInfo: _this2.uiRouterGlobals.params.billingInfo
      });
    })();
  }

  showDiscount(targetState) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.discountCmsData) {
        _this3.parent.setTitle(_this3.getDiscountTitle());

        _this3.showDiscountPage = true;

        _this3.savePlateContainer();

        _this3.parent.scrollToTop();
      } else {
        yield _this3.goToPreviousState(targetState);
      }
    })();
  }

  hideDiscount() {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.selectedAgenciesToPay = [];

      _this4.recalculatePlateContainerValues();

      _this4.parent.setTitle(_this4.cmsData.Title);

      _this4.showDiscountPage = false;

      _this4.savePlateContainer();

      _this4.parent.scrollToTop();
    })();
  }

  getDiscountTitle() {
    return this.discountCmsData && this.discountCmsData.Title || this.cmsData.Title;
  }

  goToPreviousState(targetState) {
    var _this5 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const to = _this5.plateContainer.plate.isNewEzTagAccountEligibile ? cavve_constants__WEBPACK_IMPORTED_MODULE_1__.stateNames.Offer : targetState;

      _this5.savePlateContainer();

      yield _this5.state.go(to);
    })();
  }

  setSummaryArray(discountEnumArray) {
    discountEnumArray.forEach(x => {
      const discountCms = this.cmsData.Children.filter(child => x.toString() === child.DISCOUNT_STRING)[0];
      const discountSummary = !discountCms ? '' : discountCms.Children.filter(child => 'Summary' === child.ItemName)[0].LongDescription || '';

      if (discountSummary) {
        this.discountArray = this.discountArray.concat(discountSummary);
      }
    });
  }

}

GridComponent.ɵfac = function GridComponent_Factory(t) {
  return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](violations_frame_frame_component__WEBPACK_IMPORTED_MODULE_7__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_23__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](constants_module__WEBPACK_IMPORTED_MODULE_8__.WebStorageConst), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_23__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_9__.WebStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_10__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](common_upgrades__WEBPACK_IMPORTED_MODULE_2__.ENVIRON_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_10__.ToasterService));
};

GridComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({
  type: GridComponent,
  selectors: [["violations-grid-component"]],
  inputs: {
    cmsData: "cmsData",
    discountPerAgencyAvailable: "discountPerAgencyAvailable"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵProvidersFeature"]([{
    provide: violationsCommon_services_pdfUrl_service__WEBPACK_IMPORTED_MODULE_4__.PdfUrlService,
    useExisting: violationsCommon_services_webapi_webApis_service__WEBPACK_IMPORTED_MODULE_5__.WebApisService
  }])],
  decls: 6,
  vars: 3,
  consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["activeInvoices", ""], ["paidInvoices", ""], ["discountPage", ""], ["noDiscountPage", ""], ["class", "u-spacing--widthFill u-spacing__buttonToField--marginTop", 4, "ngIf"], ["fxLayout", "column", 1, "u-spacing--widthFill"], [3, "template", "data"], [1, "u-spacing__divider--marginTopBottom"], [3, "innerHTML"], [4, "ngIf"], ["fxLayout", "column", 1, "u-spacing--widthFill", "u-spacing__headerToSection--marginTop"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "u-spacing--widthFill", "u-spacing__sectionToSection--marginTop"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "u-spacing--widthFill"], ["id", "records-found-text", 3, "fxFlex"], ["fxHide.lt-md", "", 3, "vertical", "fxShow"], ["id", "prevPaidInvoicesLink", "fxFlex.gt-sm", "none", "ngClass.lt-md", "text-align-right smaller-font", 3, "ngClass.gt-sm", "click", 4, "ngIf"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "auto", "fxLayout", "row", "fxLayoutAlign", "end center", 4, "ngIf"], [3, "plate"], ["totalDescription", "Original Amount Due", "class", "u-spacing__sectionToSection--marginTop", 3, "arePlatesExpanded", "caoToolTipCms", "plate", "paginatedPlate", 4, "ngIf"], ["fxShow", "", "fxHide.lt-md", "", "totalDescription", "Original Amount Due", "class", "u-spacing__sectionToSection--marginTop", 3, "arePlatesExpanded", "caoToolTipCms", "plate", "paginatedPlate", 4, "ngIf"], ["fxHide", "", "fxShow.lt-md", "", "totalDescription", "Original Amount Due", "class", "u-spacing__sectionToSection--marginTop", 3, "arePlatesExpanded", "caoToolTipCms", "plate", "paginatedPlate", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayout.lt-md", "column", 1, "u-spacing--widthFill"], ["ngClass.gt-sm", "max-width-half"], [3, "innerHtml"], [4, "ngFor", "ngForOf"], [3, "innerHtml", 4, "ngIf"], ["ngClass.gt-sm", "payment-summary-desktop", "ngClass.lt-md", "u-spacing--widthFill", 4, "ngIf"], ["id", "prevPaidInvoicesLink", "fxFlex.gt-sm", "none", "ngClass.lt-md", "text-align-right smaller-font", 3, "ngClass.gt-sm", "click"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "auto", "fxLayout", "row", "fxLayoutAlign", "end center"], [3, "length", "pageIndex", "pageSize", "hidePageSize", "page"], ["totalDescription", "Original Amount Due", 1, "u-spacing__sectionToSection--marginTop", 3, "arePlatesExpanded", "caoToolTipCms", "plate", "paginatedPlate"], ["fxShow", "", "fxHide.lt-md", "", "totalDescription", "Original Amount Due", 1, "u-spacing__sectionToSection--marginTop", 3, "arePlatesExpanded", "caoToolTipCms", "plate", "paginatedPlate"], ["fxHide", "", "fxShow.lt-md", "", "totalDescription", "Original Amount Due", 1, "u-spacing__sectionToSection--marginTop", 3, "arePlatesExpanded", "caoToolTipCms", "plate", "paginatedPlate"], ["fxLayout", "row", "fxLayoutAlign", "center", "class", "u-spacing--widthFill u-spacing__loadMore--margin", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center", 1, "u-spacing--widthFill", "u-spacing__loadMore--margin"], [1, "u--noUnderline", 3, "click"], ["ngClass.gt-sm", "payment-summary-desktop", "ngClass.lt-md", "u-spacing--widthFill"], [3, "rowType", "isTop"], ["col-start", "", "fxFlex", "grow"], ["col-end", "", "fxFlex", "none"], [3, "value"], [3, "rowType", "isInner"], ["col-start", "", "fxFlex", "grow", 1, "green-text"], ["col-end", "", "fxFlex", "none", 1, "green-text"], [3, "rowType", "isInner", 4, "ngIf"], [3, "rowType", "isBottom"], ["col-end", "", 1, "fx-flex-none", "fx-layout-row", "fx-layout-align-end-center", 2, "padding-bottom", "5px"], [1, "fx-layout-column", "fx-layout-align-end-start", "unlimited-flex-end"], [1, "pay-label"], ["id", "selectPayAllAgenciesCheckbox", "type", "checkbox", 3, "change"], ["fxShow", "", "fxHide.lt-md", "", 4, "ngFor", "ngForOf"], ["fxHide", "", "fxShow.lt-md", "", 4, "ngFor", "ngForOf"], ["id", "adminFeeRow", 3, "isInner", 4, "ngIf"], ["id", "feeReductionRow", 3, "isInner"], ["col-start", "", "fxFlex", "grow", "fxFlex.lt-md", "50"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "green-text", 3, "ngStyle.lt-md"], ["fxFlex", "none", 1, "tool-tip", 3, "hidden", "ngClass.lt-md"], ["tool-tip-hover", ""], ["svgIcon", "information"], ["tool-tip-message", "", 1, "hoverBoxAdjustment"], [1, "tool-tip-heading"], ["col-end", "", "fxFlex", "none", "fxFlex.lt-md", "50", 1, "green-text", "align-currency", 2, "text-align", "right"], ["id", "totalPaymentRow", 3, "rowType", "isInner"], ["col-end", "", "fxFlex", "none", 1, "align-currency"], ["id", "remainingBalanceRow", 3, "isBottom"], ["fxShow", "", "fxHide.lt-md", ""], [3, "isTop", "isInner", "isBottom", "id"], ["translation-skip", "", "col-start", "", "fxFlex", "grow"], ["col-end", "", 1, "fx-flex-none", "fx-layout-row", "fx-layout-align-end-center"], ["fxFlex", "none"], [1, "fx-flex-auto", "limited-flex-end"], [1, "fx-flex-auto", "unlimited-flex-end"], ["type", "checkbox", "col-amount", "", 3, "id", "value", "checked", "change"], ["fxHide", "", "fxShow.lt-md", ""], ["id", "adminFeeRow", 3, "isInner"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["translation-skip", "", "fxShow", "", "fxHide.lt-md", ""], ["translation-skip", "", "fxHide", "", "fxShow.lt-md", ""], [1, "green-text"], [3, "plate", "noDiscount"], ["totalDescription", "Selected Payment Amount ", "class", "u-spacing__sectionToSection--marginTop", 3, "isEditAllowed", "arePlatesExpanded", "caoToolTipCms", "cmsData", "plate", "paginatedPlate", 4, "ngIf"], ["fxShow", "", "fxHide.lt-md", "", "totalDescription", "Selected Payment Amount ", "class", "u-spacing__sectionToSection--marginTop", 3, "isEditAllowed", "arePlatesExpanded", "caoToolTipCms", "cmsData", "plate", "paginatedPlate", 4, "ngIf"], ["fxHide", "", "fxShow.lt-md", "", "totalDescription", "Selected Payment Amount ", "class", "u-spacing__sectionToSection--marginTop", 3, "isEditAllowed", "arePlatesExpanded", "caoToolTipCms", "cmsData", "plate", "paginatedPlate", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayout.lt-md", "column"], ["totalDescription", "Selected Payment Amount ", 1, "u-spacing__sectionToSection--marginTop", 3, "isEditAllowed", "arePlatesExpanded", "caoToolTipCms", "cmsData", "plate", "paginatedPlate"], ["fxShow", "", "fxHide.lt-md", "", "totalDescription", "Selected Payment Amount ", 1, "u-spacing__sectionToSection--marginTop", 3, "isEditAllowed", "arePlatesExpanded", "caoToolTipCms", "cmsData", "plate", "paginatedPlate"], ["fxHide", "", "fxShow.lt-md", "", "totalDescription", "Selected Payment Amount ", 1, "u-spacing__sectionToSection--marginTop", 3, "isEditAllowed", "arePlatesExpanded", "caoToolTipCms", "cmsData", "plate", "paginatedPlate"], [1, "u-spacing--widthFill", "u-spacing__buttonToField--marginTop"], ["discountWizard", ""], ["noDiscountWizard", ""], [3, "disabled", "next", "previous", "cancel"], ["wizard-next", ""], ["wizard-cancel", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], [3, "next", "previous"], ["fxLayout", "column", "class", "u-spacing--widthFill", 4, "ngIf"], ["svgIcon", "no-invoices-found", "fxFlexAlign", "center"], [1, "text-align-center"], ["id", "prevPaidInvoicesLink", "fxFlex.gt-sm", "none", "class", "smaller-font text-align-center", 3, "click", 4, "ngIf"], ["ngClass.gt-sm", "max-width-half", 3, "innerHTML"], [3, "previous"], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "link-spacing"], ["id", "prevPaidInvoicesLink", "fxFlex.gt-sm", "none", 1, "smaller-font", "text-align-center", 3, "click"]],
  template: function GridComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "page-filled-container");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, GridComponent_div_1_Template, 1, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, GridComponent_ng_template_2_Template, 6, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, GridComponent_ng_template_4_Template, 34, 20, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](3);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](5);

      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.showPreviouslyPaidPlate && !ctx.hasOutstandingViolations)("ngIfThen", _r3)("ngIfElse", _r1);
    }
  },
  directives: [_common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_11__.PageFilledContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__.DefaultLayoutDirective, _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_12__.CmsContentComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__.DefaultShowHideDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__.DefaultClassDirective, _common_ui_matPaginatorGoto_matPaginatorGoto_component__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorGotoComponent, _detailsRefresh_plate_plate_component__WEBPACK_IMPORTED_MODULE_14__.PlateRowComponent, _detailsRefresh_violationsDetails_component__WEBPACK_IMPORTED_MODULE_15__.ViolationsDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_16__.RowContainerComponent, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_17__.CurrencyComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__.MatLabel, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__.DefaultStyleDirective, _common_ui_toolTip_toolTip_component__WEBPACK_IMPORTED_MODULE_18__.ToolTipComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIcon, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_19__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_20__.WizardNextDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__.DefaultFlexAlignDirective],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_21__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n[_nghost-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n  margin-left: 10px;\n  height: auto;\n  width: auto;\n}\n[_nghost-%COMP%]   .pay-label[_ngcontent-%COMP%] {\n  position: relative;\n  height: 0px;\n  top: -10px;\n  left: 7px;\n  color: #007aff !important;\n}\n[_nghost-%COMP%]   .green-text[_ngcontent-%COMP%] {\n  color: #018749;\n}\n[_nghost-%COMP%]   .text-align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[_nghost-%COMP%]   .text-align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   mat-divider.mat-divider-vertical[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 0px;\n  border-width: 2px;\n  border-color: #c4c4c4;\n  margin-top: -1px;\n  margin-left: 8px;\n  margin-right: 12px;\n}\n[_nghost-%COMP%]   #records-found-text[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n[_nghost-%COMP%]   .smaller-font[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n[_nghost-%COMP%]   .max-width-half[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n[_nghost-%COMP%]   .payment-summary-desktop[_ngcontent-%COMP%] {\n  width: 475px;\n  margin-left: 50px;\n}\n[_nghost-%COMP%]   .hoverBoxAdjustment[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 16px;\n  line-height: 1.5;\n  bottom: 1.5em;\n  left: -9em;\n  width: 320px;\n}\n[_nghost-%COMP%]   .tool-tip-heading[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n[_nghost-%COMP%]   .tool-tip[_ngcontent-%COMP%] {\n  width: 12.5px;\n  margin-left: 5px;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   .tool-tip.lt-md[_ngcontent-%COMP%] {\n  margin-left: 0px;\n  height: 20px;\n  margin-bottom: 30px;\n}\n[_nghost-%COMP%]   .align-currency[_ngcontent-%COMP%] {\n  padding-right: 23px;\n}\n[_nghost-%COMP%]   .link-spacing[_ngcontent-%COMP%] {\n  padding-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcY29tbW9uXFx1aVxcY29udGFpbmVyc1xcZnhSb3dcXGRldGFpbHMubGVzcyIsImdyaWQubGVzcyIsIi4uXFxkZXRhaWxzUmVmcmVzaFxcdmlvbGF0aW9uc0RldGFpbHMubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxwYWdlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFQyxXQUFBO0FDREQ7QUREQTtFQUtFLGFBQUE7RUFDRCxrQkFBQTtBQ0REO0FETEE7RUF1RVUsY0FBQTtFQU1QLHNCQUFBO0FDcEVIO0FEVEE7RUFnRnFCLGNBQUE7RUFHZCxzQkFBQTtBQ3RFUDtBRGJBO0VBcUZLLGNBQUE7RUFDRCxzQkFBQTtBQ3JFSjtBRGpCQTtFQXlGbUMsY0FBQTtFQUNqQixzQkFBQTtBQ3JFbEI7QURyQkE7RUE4Rm1CLG1CQUFBO0VBQ1Ysc0JBQUE7RUFDTyxhQUFBO0FDdEVoQjtBRDFCQTtFQW9HTSxzQkFBQTtFQUNFLHNCQUFBO0VBQ0QsYUFBQTtBQ3ZFUDtBRC9CQTtFQTBHZSxxQkFBQTtFQUNGLDJCQUFBO0VBQ0ksbUJBQUE7QUN4RWpCO0FEcENBO0VBZ0hpQixxQkFBQTtFQUNELHlCQUFBO0VBQ0gsbUJBQUE7QUN6RWI7QUR6Q0E7RUF1Q3dDLGdCQUFBO0VBRzdCLGdCQUFBO0VBQ0ssV0FBQTtBQ0doQjtBRDlDQTtFQTZDWSxXQUFBO0FDSVo7QURqREE7RUFpRFUsZUFBQTtFQUdOLGVBQUE7RUFDQSxXQUFBO0VBQXFCLGVBQUE7QUNFekI7QUR2REE7RUF3RGMsZ0JBQUE7RUFHVCxnQkFBQTtFQUEwQixXQUFBO0VBQ1gsZUFBQTtBQ0NwQjtBRDdEQTtFQThEaUIsZUFBQTtBQ0VqQjtBRERxQjtFQUdiLGVBQUE7QUNDUjtBQ2pFQTtFQUVRLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURrRVI7QUN0RUE7RUFRUSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQ2lESix5QkFBQTtBRmlCSjtBQTVFQTtFRWtDSSxjQUFBO0FGNkNKO0FBL0VBO0VBTVEsaUJBQUE7QUE0RVI7QUFsRkE7RUFVUSxrQkFBQTtBQTJFUjtBQXJGQTtFQWNRLGdCQUFBO0FBMEVSO0FBeEZBO0VBa0JRLFdBQUE7QUF5RVI7QUF2RVE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VFOENSLHFCQUFBO0VGNUNRLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXlFWjtBQXBHQTtFQWdDUSxnQkFBQTtBQXVFUjtBQXZHQTtFQW9DUSxlQUFBO0FBc0VSO0FBMUdBO0VBd0NRLGNBQUE7QUFxRVI7QUE3R0E7RUE0Q1EsWUFBQTtFQUNBLGlCQUFBO0FBb0VSO0FBakhBO0VBaURRLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFtRVI7QUF6SEE7RUEwRFEsZ0JBQUE7QUFrRVI7QUE1SEE7RUE4RFEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFpRVI7QUEvRFE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWlFWjtBQXRJQTtFQTBFUSxtQkFBQTtBQStEUjtBQXpJQTtFQThFUSxpQkFBQTtBQThEUiIsImZpbGUiOiJncmlkLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLmhpZGRlbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5meC1mbGV4LWF1dG8ge1xyXG4gICAgICAgIC5meC1mbGV4LWF1dG8tbWl4aW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAuZngtZmxleC1ub25lIHtcclxuICAgICAgICAuZngtZmxleC1ub25lLW1peGluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZSB7XHJcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZS1taXhpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlIHtcclxuICAgICAgICAuZngtZmxleC1hdXRvLWdyb3ctbW9yZS1taXhpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC5meC1sYXlvdXQtcm93IHtcclxuICAgICAgICAuZngtbGF5b3V0LXJvdy1taXhpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC5meC1sYXlvdXQtY29sdW1uIHtcclxuICAgICAgICAuZngtbGF5b3V0LWNvbHVtbi1taXhpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyIHtcclxuICAgICAgICAuZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlci1taXhpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC5meC1sYXlvdXQtYWxpZ24tZW5kLWNlbnRlciB7XHJcbiAgICAgICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbWl0ZWQtZmxleCB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNzBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDUzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC51bmxpbWl0ZWQtZmxleCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbWl0ZWQtZmxleC1lbmQge1xyXG4gICAgICAgIG1pbi13aWR0aDogNzBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgfVxyXG5cclxuICAgIC5sYXJnZXItbGltaXRlZC1mbGV4LWVuZCB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNDNweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDE0NXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIH1cclxuXHJcbiAgICAudGFibGUtc3BhY2Uge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuXHJcbiAgICAgICAgJi5sdC1tZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWl4aW5zIHRvIGFwcGVhc2UgcGVyZm9ybWFuY2VcclxuLmZ4LWZsZXgtYXV0by1taXhpbigpIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmZ4LWZsZXgtbm9uZS1taXhpbigpIHtcclxuICAgIC8vIGxlc3NoaW50LWRpc2FibGUtbmV4dC1saW5lIHplcm9Vbml0XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUtbWl4aW4oKSB7XHJcbiAgICBmbGV4OiAxIDIgYXV0bztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlLW1peGluKCkge1xyXG4gICAgZmxleDogMiAxIGF1dG87XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZngtbGF5b3V0LXJvdy1taXhpbigpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCkge1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCkge1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgJy4uLy4uL2NvbW1vbi91aS9jb250YWluZXJzL2Z4Um93L2RldGFpbHMubGVzcyc7XG5AaW1wb3J0ICcuLi8uLi92aW9sYXRpb25zL2RldGFpbHNSZWZyZXNoL3Zpb2xhdGlvbnNEZXRhaWxzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgLmdyZWVuLXRleHQge1xuICAgICAgICAudC1ib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvcihAdGhlbWUtbGlnaHQpO1xuICAgIH1cblxuICAgIC50ZXh0LWFsaWduLXJpZ2h0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuXG4gICAgLnRleHQtYWxpZ24tY2VudGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgbWF4LWhlaWdodDogNzBweDtcbiAgICB9XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcblxuICAgICAgICAmLm1hdC1kaXZpZGVyLXZlcnRpY2FsIHtcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgIHdpZHRoOiAwcHg7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgICAgIC50LWRpdmlkZXJfX2Rhc2gtLWJvcmRlckNvbG9yKEB0aGVtZS1saWdodCk7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNyZWNvcmRzLWZvdW5kLXRleHQge1xuICAgICAgICBtaW4td2lkdGg6IDE0MHB4O1xuICAgIH1cblxuICAgIC5zbWFsbGVyLWZvbnQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLm1heC13aWR0aC1oYWxmIHtcbiAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgfVxuXG4gICAgLnBheW1lbnQtc3VtbWFyeS1kZXNrdG9wIHtcbiAgICAgICAgd2lkdGg6IDQ3NXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICB9XG5cbiAgICAuaG92ZXJCb3hBZGp1c3RtZW50IHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBib3R0b206IDEuNWVtO1xuICAgICAgICBsZWZ0OiAtOWVtO1xuICAgICAgICB3aWR0aDogMzIwcHg7XG4gICAgfVxuXG4gICAgLnRvb2wtdGlwLWhlYWRpbmcge1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cblxuICAgIC50b29sLXRpcCB7XG4gICAgICAgIHdpZHRoOiAxMi41cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgICAgJi5sdC1tZCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hbGlnbi1jdXJyZW5jeSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIzcHg7XG4gICAgfVxuXG4gICAgLmxpbmstc3BhY2luZyB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgJy4uLy4uL2NvbW1vbi91aS9jb250YWluZXJzL2Z4Um93L2RldGFpbHMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cblxuICAgIC5wYXktbGFiZWwge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgICBsZWZ0OiA3cHg7XG4gICAgICAgIC50LWxpbmstLWNvbG9yKEB0aGVtZS1saWdodCk7XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3ItbGlnaHQ6IEB3aGl0ZTtcbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3IyLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMy1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWNvbG9yLWxpZ2h0OiBAdHVuYS1ncmF5O1xuQGJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLWxpZ2h0OiBAdHJvcGljYWwtcmFpbi1mb3Jlc3QtZ3JlZW47XG5AYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItbGlnaHQ6IEBzaWx2ZXItZ3JheTtcbkBoZWFkZXItLWNvbG9yLWxpZ2h0OiBAdHVuYS1ncmF5O1xuQGxhYmVsLS1jb2xvci1saWdodDogQGJvdWxkZXItZ3JheTtcbkBzZWxlY3RfX2Fycm93LS1jb2xvci1saWdodDogQHNjb3JwaW9uLWdyYXk7XG5AbGluay0tY29sb3ItbGlnaHQ6IEBhenVyZS1yYWRpYW5jZS1ibHVlO1xuQGRpdmlkZXItLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2Nob29sLWJ1cy15ZWxsb3c7XG5cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvci1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IyLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IzKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvcjMtQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1oZWFkZXItLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2hlYWRlci0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1sYWJlbC0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGFiZWwtLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtc2VsZWN0X19hcnJvdy0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnc2VsZWN0X19hcnJvdy0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1saW5rLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdsaW5rLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3IgIWltcG9ydGFudDsgLy8gbWFya2VkIGFzICFpbXBvcnRhbnQgdG8gb3ZlcnJpZGUgYm9vdHN0cmFwXG59XG5cbi50LWRpdmlkZXItLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2RpdmlkZXItLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWRpdmlkZXJfX2Rhc2gtLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG4iXX0= */"]
});

/***/ }),

/***/ 75842:
/*!**************************************************************************************!*\
  !*** ./src/violations/grid/prevPaidInvoicesModal/prevPaidInvoicesModal.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrevPaidInvoicesComponent": () => (/* binding */ PrevPaidInvoicesComponent)
/* harmony export */ });
/* harmony import */ var violations_detailsRefresh_invoiced_invoicedDetailsModal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! violations/detailsRefresh/invoiced/invoicedDetailsModal.component */ 58952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/ui/containers/fxRow/fxRow.component */ 47553);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _pipes_default_default_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/default/default.pipe */ 53291);
/* harmony import */ var _pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pipes/dateWithTimeZone/dateWithTimeZone.pipe */ 29719);












const _c0 = function (a0) { return { "table-space": a0 }; };
const _c1 = function (a0) { return { "table-space": a0, "lt-md": true }; };
function PrevPaidInvoicesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "fx-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PrevPaidInvoicesComponent_div_18_Template_fx_row_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const index_r4 = restoredCtx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.openTollDetailsModal(index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "section", 4)(4, "div", 5)(5, "a", 14)(6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "dateWithTimeZone");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "section", 8)(20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "currency", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const invoiced_r1 = ctx.$implicit;
    const isFirst_r2 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](13, _c0, !isFirst_r2))("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](15, _c1, !isFirst_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("backgroundColorClass", "white-background");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](invoiced_r1.invoiceNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](11, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](12, 10, invoiced_r1.mailedDate, "date1"), "To be mailed"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoiced_r1.agencyName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", invoiced_r1.originalInvoiceTotal);
} }
const _c2 = function () { return { "hidden": true }; };
class PrevPaidInvoicesComponent {
    constructor(dialogRef, dialogService) {
        this.dialogRef = dialogRef;
        this.dialogService = dialogService;
    }
    ngOnInit() {
        this.prevPaidInvoices = this.dialogRef.data.previouslyPaidInvoices;
        this.plate = this.dialogRef.data.plate;
    }
    openTollDetailsModal(index) {
        this.dialogService.openSliderFilled(violations_detailsRefresh_invoiced_invoicedDetailsModal_component__WEBPACK_IMPORTED_MODULE_0__.InvoicedDetailsModalComponent, {
            invoiced: this.prevPaidInvoices[index],
            plate: this.plate, isPreviousPaid: true
        }, { title: 'Invoice Details', hasBack: true });
    }
}
PrevPaidInvoicesComponent.ɵfac = function PrevPaidInvoicesComponent_Factory(t) { return new (t || PrevPaidInvoicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_1__.DialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_1__.DialogService)); };
PrevPaidInvoicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PrevPaidInvoicesComponent, selectors: [["previously-paid-invoices"]], decls: 19, vars: 11, consts: [[1, "refresh-2020"], ["fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxFlexOffset", "34px", 2, "margin-bottom", "10px", "margin-top", "0px"], [3, "isLabel", "backgroundColorClass"], ["col-start", "", 1, "fx-flex-auto", "fx-layout-row", "fx-layout-align-start-center"], [1, "fx-flex-auto-shrink-more", "limited-flex"], [1, "fx-flex-auto-shrink-more", "limited-flex", 3, "ngClass.lt-md"], [1, "fx-flex-auto-grow-more", "unlimited-flex", 3, "ngClass.lt-md"], ["col-end", "", 1, "fx-flex-none", "fx-layout-row", "fx-layout-align-end-center"], [1, "fx-flex-auto", "larger-limited-flex-end"], ["class", "violations-plate-row", 4, "ngFor", "ngForOf"], [1, "violations-plate-row"], [3, "ngClass", "ngClass.lt-md"], [1, "clickable", 3, "backgroundColorClass", "click"], [1, "fx-layout-row", "fx-layout-align-start-center", "u--noUnderline"], ["translation-skip", "", 1, "fx-flex-none", "violationId--width"], [1, "fx-flex-none", "glyphicon", "glyphicon-chevron-right"], ["translation-skip", "", "fxShow", "", "fxHide.lt-md", "", 1, "fx-flex-auto-shrink-more", "limited-flex"], ["fxShow", "", "fxHide.lt-md", "", 1, "fx-flex-auto-shrink-more", "limited-flex", "fx-layout-align-start-center"], ["svgIcon", "checkmark", 1, "center-vertical"], [1, "check-mark-text"], ["translation-skip", "", "fxShow", "", "fxHide.lt-md", "", 1, "fx-flex-auto-grow-more", "unlimited-flex"], [3, "value"]], template: function PrevPaidInvoicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "aside", 2)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "fx-row", 3)(6, "section", 4)(7, "mat-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "INVOICE ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "INVOICE DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "AGENCY");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "section", 8)(16, "mat-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "ORIGINAL INVOICE AMOUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, PrevPaidInvoicesComponent_div_18_Template, 22, 17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx.prevPaidInvoices.length, " Record", ctx.prevPaidInvoices.length > 1 ? "s" : "", " found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLabel", true)("backgroundColorClass", "transparent-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.prevPaidInvoices);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexOffsetDirective, _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_2__.FxRowComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultShowHideDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_3__.CurrencyComponent], pipes: [_pipes_default_default_pipe__WEBPACK_IMPORTED_MODULE_4__.DefaultPipe, _pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_5__.DateWithTimeZonePipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n[_nghost-%COMP%]   .check-mark-text[_ngcontent-%COMP%] {\n  color: #018749;\n  margin-left: 8px;\n}\n[_nghost-%COMP%]   .glyphicon.glyphicon-chevron-right[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 100;\n  top: -1px;\n}\n[_nghost-%COMP%]   .violationId--width[_ngcontent-%COMP%] {\n  width: 118px;\n}\n[_nghost-%COMP%]   .center-vertical[_ngcontent-%COMP%] {\n  vertical-align: text-bottom;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbW1vblxcdWlcXGNvbnRhaW5lcnNcXGZ4Um93XFxkZXRhaWxzLmxlc3MiLCJwcmV2UGFpZEludm9pY2VzTW9kYWwubGVzcyIsIi4uXFwuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xccGFnZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtBQ0RKO0FEQUE7RUFJUSxhQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREpBO0VBOEVJLGNBQUE7RUFDQSxzQkFBQTtBQ3ZFSjtBRFJBO0VBb0ZJLGNBQUE7RUFDQSxzQkFBQTtBQ3pFSjtBRFpBO0VBeUZJLGNBQUE7RUFDQSxzQkFBQTtBQzFFSjtBRGhCQTtFQThGSSxjQUFBO0VBQ0Esc0JBQUE7QUMzRUo7QURwQkE7RUFtR0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUM1RUo7QUR6QkE7RUF5R0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUM3RUo7QUQ5QkE7RUErR0kscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDOUVKO0FEbkNBO0VBcUhJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQy9FSjtBRHhDQTtFQTBDUSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NSO0FEN0NBO0VBZ0RRLFdBQUE7QUNBUjtBRGhEQTtFQW9EUSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRFI7QUR0REE7RUEyRFEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRlI7QUQ1REE7RUFrRVEsZUFBQTtBQ0hSO0FES1E7RUFDSSxlQUFBO0FDSFo7QUFqRUE7RUFHUSxlQUFBO0FBaUVSO0FBL0RRO0VBQ0ksZUFBQTtBQWlFWjtBQXZFQTtFQ21DSSxjQUFBO0VEdkJJLGdCQUFBO0FBK0RSO0FBM0RRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQTZEWjtBQWhGQTtFQXdCUSxZQUFBO0FBMkRSO0FBbkZBO0VBNEJRLDJCQUFBO0FBMERSIiwiZmlsZSI6InByZXZQYWlkSW52b2ljZXNNb2RhbC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcblxuOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmhpZGRlbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG5cblxuICAgIC5meC1mbGV4LWF1dG8ge1xuICAgICAgICAuZngtZmxleC1hdXRvLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWZsZXgtbm9uZSB7XG4gICAgICAgIC5meC1mbGV4LW5vbmUtbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtZmxleC1hdXRvLXNocmluay1tb3JlIHtcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZS1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlIHtcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1ncm93LW1vcmUtbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LXJvdyB7XG4gICAgICAgIC5meC1sYXlvdXQtcm93LW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1jb2x1bW4ge1xuICAgICAgICAuZngtbGF5b3V0LWNvbHVtbi1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyIHtcbiAgICAgICAgLmZ4LWxheW91dC1hbGlnbi1zdGFydC1jZW50ZXItbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LWFsaWduLWVuZC1jZW50ZXIge1xuICAgICAgICAuZngtbGF5b3V0LWFsaWduLWVuZC1jZW50ZXItbWl4aW4oKTtcbiAgICB9XG5cbiAgICAubGltaXRlZC1mbGV4IHtcbiAgICAgICAgbWluLXdpZHRoOiAxNzBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA1MzBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnVubGltaXRlZC1mbGV4IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmxpbWl0ZWQtZmxleC1lbmQge1xuICAgICAgICBtaW4td2lkdGg6IDcwcHg7XG4gICAgICAgIG1heC13aWR0aDogODBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG5cbiAgICAubGFyZ2VyLWxpbWl0ZWQtZmxleC1lbmQge1xuICAgICAgICBtaW4td2lkdGg6IDE0M3B4O1xuICAgICAgICBtYXgtd2lkdGg6IDE0NXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cblxuICAgIC50YWJsZS1zcGFjZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcblxuICAgICAgICAmLmx0LW1kIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIE1peGlucyB0byBhcHBlYXNlIHBlcmZvcm1hbmNlXG4uZngtZmxleC1hdXRvLW1peGluKCkge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5meC1mbGV4LW5vbmUtbWl4aW4oKSB7XG4gICAgLy8gbGVzc2hpbnQtZGlzYWJsZS1uZXh0LWxpbmUgemVyb1VuaXRcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1hdXRvLXNocmluay1tb3JlLW1peGluKCkge1xuICAgIGZsZXg6IDEgMiBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlLW1peGluKCkge1xuICAgIGZsZXg6IDIgMSBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5meC1sYXlvdXQtcm93LW1peGluKCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZngtbGF5b3V0LWNvbHVtbi1taXhpbigpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZ4LWxheW91dC1hbGlnbi1zdGFydC1jZW50ZXItbWl4aW4oKSB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZngtbGF5b3V0LWFsaWduLWVuZC1jZW50ZXItbWl4aW4oKSB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0ICdjb21tb24vdWkvY29udGFpbmVycy9meFJvdy9kZXRhaWxzLmxlc3MnO1xuXG46aG9zdCB7XG5cbiAgICAudGFibGUtc3BhY2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICAgICAgJi5sdC1tZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hlY2stbWFyay10ZXh0IHtcbiAgICAgICAgLnQtYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3IoQHRoZW1lLWxpZ2h0KTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9XG5cbiAgICAuZ2x5cGhpY29uIHtcbiAgICAgICAgJi5nbHlwaGljb24tY2hldnJvbi1yaWdodCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgdG9wOiAtMXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnZpb2xhdGlvbklkLS13aWR0aCB7XG4gICAgICAgIHdpZHRoOiAxMThweDtcbiAgICB9XG5cbiAgICAuY2VudGVyLXZlcnRpY2FsIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG5AYm9keS0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAd2hpdGU7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMi1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjMtbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1saWdodDogQHRyb3BpY2FsLXJhaW4tZm9yZXN0LWdyZWVuO1xuQGJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2lsdmVyLWdyYXk7XG5AaGVhZGVyLS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBsYWJlbC0tY29sb3ItbGlnaHQ6IEBib3VsZGVyLWdyYXk7XG5Ac2VsZWN0X19hcnJvdy0tY29sb3ItbGlnaHQ6IEBzY29ycGlvbi1ncmF5O1xuQGxpbmstLWNvbG9yLWxpZ2h0OiBAYXp1cmUtcmFkaWFuY2UtYmx1ZTtcbkBkaXZpZGVyLS1ib3JkZXJDb2xvci1saWdodDogQHNjaG9vbC1idXMteWVsbG93O1xuXG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjIoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMi1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMyhAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtaGVhZGVyLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdoZWFkZXItLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGFiZWwtLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xhYmVsLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXNlbGVjdF9fYXJyb3ctLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3NlbGVjdF9fYXJyb3ctLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGluay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGluay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yICFpbXBvcnRhbnQ7IC8vIG1hcmtlZCBhcyAhaW1wb3J0YW50IHRvIG92ZXJyaWRlIGJvb3RzdHJhcFxufVxuXG4udC1kaXZpZGVyLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdkaXZpZGVyLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1kaXZpZGVyX19kYXNoLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuIl19 */"] });


/***/ }),

/***/ 40232:
/*!*****************************************************!*\
  !*** ./src/violations/landing/landing.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _invoiceExample_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoiceExample.component */ 81053);
/* harmony import */ var common_ui_modals_loginPopUpModal_loginModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/ui/modals/loginPopUpModal/loginModal.component */ 84612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var violations_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! violations/frame/frame.component */ 62666);
/* harmony import */ var violationsCommon_services_violationsService_violationsData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! violationsCommon/services/violationsService/violationsData.service */ 3938);
/* harmony import */ var cms_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cms/services */ 46693);
/* harmony import */ var _storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../storefront/services/storefrontUtility.service */ 18011);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! authentication/authenticationService/authentication.service */ 44722);
/* harmony import */ var _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/containers/page/pageFilled.component */ 95556);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 73067);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pipes/safeHtml.pipe */ 49985);

























function LandingComponent_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const state_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", state_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](state_r7.stateCode);
  }
}

function LandingComponent_aside_22_ng_container_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Please enter a valid license plate number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function LandingComponent_aside_22_ng_container_1_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Please enter a valid license plate number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function LandingComponent_aside_22_ng_container_1_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Please enter a valid license plate number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function LandingComponent_aside_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, LandingComponent_aside_22_ng_container_1_p_1_Template, 2, 0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, LandingComponent_aside_22_ng_container_1_p_2_Template, 2, 0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, LandingComponent_aside_22_ng_container_1_p_3_Template, 2, 0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitch", error_r8.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", "pattern");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", "maxlength");
  }
}

function LandingComponent_aside_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "aside");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, LandingComponent_aside_22_ng_container_1_Template, 4, 4, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](10);

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", _r0.submitted);
  }
}

function LandingComponent_aside_29_ng_container_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Please enter a valid invoice number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function LandingComponent_aside_29_ng_container_1_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Please enter a valid invoice number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function LandingComponent_aside_29_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, LandingComponent_aside_29_ng_container_1_p_1_Template, 2, 0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, LandingComponent_aside_29_ng_container_1_p_2_Template, 2, 0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitch", error_r14.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", "pattern");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", "required");
  }
}

function LandingComponent_aside_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "aside");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, LandingComponent_aside_29_ng_container_1_Template, 3, 3, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](10);

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", _r0.submitted);
  }
}

function LandingComponent_figure_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "figure", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", ctx_r6.cmsImage.image, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("alt", ctx_r6.cmsImage.alt)("height", ctx_r6.cmsImage.height)("width", ctx_r6.cmsImage.width);
  }
}

class LandingComponent {
  //@host decorator was removed for parent due to issue with Ivy. see https://github.com/angular/angular/issues/31539
  constructor(parent, violationsDataService, cmsUtilService, storefrontUtilityService, dialogService, authService) {
    this.parent = parent;
    this.violationsDataService = violationsDataService;
    this.cmsUtilService = cmsUtilService;
    this.storefrontUtilityService = storefrontUtilityService;
    this.dialogService = dialogService;
    this.authService = authService;
    this.cmsMainPage = {};
    this.cmsSectionDoYouHaveAnEZTagAccount = {};
    this.cmsSectionImportantReminders = {};
    this.cmsSectionInvoiceImage = {};
    this.cmsSectionSearchForTollViolationInvoices = {};
    this.cmsInvoiceExample = {};
    this.stateList = [];
    this.violations = {
      selectedState: {
        stateCode: ''
      },
      licensePlateNumber: '',
      invoiceNumber: ''
    };
  }

  ngOnInit() {
    var _a;

    this.violationsDataService.removeAllWebStorageEntries();
    this.stateList = this.parent.stateList;
    this.parent.stepNum = 0;
    this.parent.setTitle(this.cmsMainPage.Title);
    this.parent.scrollToTop();
    this.violations.selectedState = (_a = this.stateList) === null || _a === void 0 ? void 0 : _a.find(x => x.stateCode === 'TX');
    this.cmsImage = this.cmsUtilService.parseAllImageAttributes(this.cmsSectionInvoiceImage.Image) || {}; //Kiosk
    //This is to prevent the login modal popping on top of the survey in kiosk

    const notKioskModeOrIsFullSiteKiosk = !this.storefrontUtilityService.isRunningAsKiosk || this.storefrontUtilityService.webStoreData.fullSiteMode;

    if (!this.authService.isAuthenticated() && notKioskModeOrIsFullSiteKiosk) {
      this.showLoginModal();
    }
  }

  showLoginModal() {
    const data = {
      cmsContent: this.cmsLoginModal,
      closeImage: this.closeImage
    };
    this.dialogService.openGenericModal(common_ui_modals_loginPopUpModal_loginModal_component__WEBPACK_IMPORTED_MODULE_2__.LoginModalComponent, data);
  }

  findViolations() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const fullRequest = {
        violationsData: {
          licenseState: _this.violations.selectedState.stateCode,
          invoiceNumber: _this.violations.invoiceNumber,
          licensePlate: _this.violations.licensePlateNumber
        }
      };
      yield _this.violationsDataService.findViolations(fullRequest.violationsData);
    })();
  }

  openInvoiceExample() {
    this.dialogService.openSliderCentered(_invoiceExample_component__WEBPACK_IMPORTED_MODULE_1__.InvoiceExampleComponent, {
      pageData: this.cmsInvoiceExample
    });
  }

}

LandingComponent.ɵfac = function LandingComponent_Factory(t) {
  return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](violations_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](violationsCommon_services_violationsService_violationsData_service__WEBPACK_IMPORTED_MODULE_4__.ViolationsDataService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_5__.CmsUtilService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_6__.StorefrontUtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_7__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_8__.AuthenticationService));
};

LandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: LandingComponent,
  selectors: [["violations-landing-component"]],
  inputs: {
    cmsMainPage: "cmsMainPage",
    cmsSectionDoYouHaveAnEZTagAccount: "cmsSectionDoYouHaveAnEZTagAccount",
    cmsSectionImportantReminders: "cmsSectionImportantReminders",
    cmsSectionInvoiceImage: "cmsSectionInvoiceImage",
    cmsSectionSearchForTollViolationInvoices: "cmsSectionSearchForTollViolationInvoices",
    cmsInvoiceExample: "cmsInvoiceExample",
    cmsLoginModal: "cmsLoginModal",
    closeImage: "closeImage",
    usStates: "usStates"
  },
  decls: 55,
  vars: 24,
  consts: [["fxLayout", "column", 1, "u-spacing__firstHeaderToTitle--marginTop", "u-spacing--widthFill"], ["fxLayout", "column"], [1, "u-spacing__divider--marginTopBottom"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "80px", 1, "u-spacing--widthFill"], [3, "innerHTML"], ["validation-focus", "", "novalidate", "", "fxLayout", "column start", 1, "u-spacing__fieldToSection--marginTop"], ["LandingForm", "ngForm"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "30px"], ["fxFlex", "none"], ["translation-skip", "", 3, "value", "disableOptionCentering", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "auto", "fxFlex.lt-md", "calc(100% - 587px)", 3, "error-check"], ["type", "text", "name", "licensePlate", "required", "", "id", "licensePlate", "tabindex", "2", "pattern", "^[a-zA-Z0-9]{1,10}$", "maxlength", "10", 3, "ngModel", "ngModelChange"], ["licensePlateInput", "ngModel"], [4, "ngFor", "ngForOf"], ["fxLayout", "column", 1, "u-spacing__fieldToField--marginTop", 3, "error-check"], ["for", "invoice"], ["type", "text", "id", "invoice", "pattern", "^[0-9]+$", "name", "invoice", "tabindex", "3", "required", "", 3, "ngModel", "ngModelChange"], ["invoiceNumberInput", "ngModel"], ["id", "findInvoiceLnk", 3, "click"], [1, "u-spacing__buttonToField--marginTop"], [3, "reverseOrder", "next"], ["wizard-next", ""], ["fxLayout", "column", "fxHide.lt-md", ""], ["id", "violations-landing-image", 4, "ngIf"], ["fxLayout", "column", 1, "u-spacing__headerToSection--marginTop"], [3, "value"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], ["class", "help-block", 4, "ngSwitchCase"], [1, "help-block"], ["id", "violations-landing-image"], [3, "src"]],
  template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "page-filled-container")(1, "section", 0)(2, "header", 1)(3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "mat-divider", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 3)(7, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "form", 5, 6)(11, "div", 7)(12, "div", 8)(13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "STATE");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "mat-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("valueChange", function LandingComponent_Template_mat_select_valueChange_15_listener($event) {
        return ctx.violations.selectedState = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](16, LandingComponent_mat_option_16_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 11)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19, "LICENSE PLATE NUMBER");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "input", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function LandingComponent_Template_input_ngModelChange_20_listener($event) {
        return ctx.violations.licensePlateNumber = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](22, LandingComponent_aside_22_Template, 2, 1, "aside", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](23, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "div", 15)(25, "mat-label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, "INVOICE NUMBER");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "input", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function LandingComponent_Template_input_ngModelChange_27_listener($event) {
        return ctx.violations.invoiceNumber = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](29, LandingComponent_aside_29_Template, 2, 1, "aside", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](30, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "div")(32, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_32_listener() {
        return ctx.openInvoiceExample();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33, "Need help finding the information on your invoice?");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "div", 20)(35, "wizard-ui", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("next", function LandingComponent_Template_wizard_ui_next_35_listener() {
        return ctx.findViolations();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](37, "SUBMIT");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](39, LandingComponent_figure_39_Template, 2, 4, "figure", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "section", 25)(43, "header", 1)(44, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](46, "mat-divider", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](47, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "section", 25)(49, "header", 1)(50, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](52, "mat-divider", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](53, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](54, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](21);

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](28);

      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.cmsSectionSearchForTollViolationInvoices.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", ctx.cmsSectionSearchForTollViolationInvoices.ShortDescription, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", ctx.violations.selectedState)("disableOptionCentering", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.stateList);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("error-check", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.violations.licensePlateNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](23, 18, _r2.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("error-check", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.violations.invoiceNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](30, 20, _r4.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("reverseOrder", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.cmsImage.image);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.cmsSectionInvoiceImage.ImageCaption);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.cmsSectionDoYouHaveAnEZTagAccount.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", ctx.cmsSectionDoYouHaveAnEZTagAccount.LongDescription, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.cmsSectionImportantReminders.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](54, 22, ctx.cmsSectionImportantReminders.LongDescription), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
    }
  },
  directives: [_common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_9__.PageFilledContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutGapDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_10__.FocusDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOption, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_11__.ErrorCheckDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgSwitchCase, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_12__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_13__.WizardNextDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__.DefaultShowHideDirective],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.KeyValuePipe, _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_14__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%]   mat-select[_ngcontent-%COMP%] {\n  width: 100px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n[_nghost-%COMP%]   #violations-landing-image[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUtRLFlBQUE7QUFMUjtBQUFBO0VBU1EsV0FBQTtBQU5SO0FBSEE7RUFhUSxlQUFBO0FBUFI7QUFOQTtFQWlCUSxvQkFBQTtBQVJSIiwiZmlsZSI6ImxhbmRpbmcubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcblxuICAgIEBzZWxlY3Qtc3RhdGUtd2lkdGg6IDEwMHB4O1xuXG4gICAgbWF0LXNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiBAc2VsZWN0LXN0YXRlLXdpZHRoO1xuICAgIH1cblxuICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgI3Zpb2xhdGlvbnMtbGFuZGluZy1pbWFnZSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 52816:
/*!**********************************!*\
  !*** ./src/violations/module.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViolationsModule": () => (/* binding */ ViolationsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pipes/module */ 20445);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frame/frame.component */ 62666);
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ 40232);
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid/grid.component */ 5524);
/* harmony import */ var _selectPayment_selectPayment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectPayment/selectPayment.component */ 80953);
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm/confirm.component */ 7112);
/* harmony import */ var _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./receipt/receipt.component */ 80477);
/* harmony import */ var _landing_invoiceExample_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/invoiceExample.component */ 81053);
/* harmony import */ var _grid_prevPaidInvoicesModal_prevPaidInvoicesModal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./grid/prevPaidInvoicesModal/prevPaidInvoicesModal.component */ 75842);
/* harmony import */ var _detailsRefresh_invoiced_invoicedDetailsModal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detailsRefresh/invoiced/invoicedDetailsModal.component */ 58952);
/* harmony import */ var storefront_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! storefront/module */ 89550);
/* harmony import */ var validation_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! validation/module */ 26186);
/* harmony import */ var app_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/routing */ 59389);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/flex-layout */ 45046);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var frp3_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! frp3/constants */ 39387);
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routing */ 6469);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./constants */ 27520);
/* harmony import */ var hybrid_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! hybrid/module */ 98730);
/* harmony import */ var _detailsRefresh_invoiced_overpaymentModal_overpaymentModal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./detailsRefresh/invoiced/overpaymentModal/overpaymentModal.component */ 16539);
/* harmony import */ var violationsCommon_violationsCommon_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! violationsCommon/violationsCommon.module */ 82690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _detailsRefresh_plate_plate_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./detailsRefresh/plate/plate.component */ 51663);
/* harmony import */ var _detailsRefresh_violationsDetails_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./detailsRefresh/violationsDetails.component */ 99322);
/* harmony import */ var _detailsRefresh_invoiced_invoiced_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./detailsRefresh/invoiced/invoiced.component */ 71761);
/* harmony import */ var _detailsRefresh_uninvoiced_uninvoiced_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./detailsRefresh/uninvoiced/uninvoiced.component */ 93182);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @uirouter/angular */ 99305);
/* harmony import */ var _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../common/ui/containers/fxRow/fxRow.component */ 47553);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../common/ui/containers/row/row.component */ 80001);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../common/ui/display/currency/currency.component */ 32761);




//components












/* Refresh Imports*/

























const routesWithComponents = _routing__WEBPACK_IMPORTED_MODULE_15__.routes.map(route => {
    const componentDictionary = {
        [_constants__WEBPACK_IMPORTED_MODULE_16__.stateNames.Root]: _frame_frame_component__WEBPACK_IMPORTED_MODULE_2__.FrameComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_16__.stateNames.Landing]: _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__.LandingComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_16__.stateNames.Grid]: _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__.GridComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_16__.stateNames.MakePayment]: _selectPayment_selectPayment_component__WEBPACK_IMPORTED_MODULE_5__.SelectPaymentComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_16__.stateNames.Confirm]: _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_16__.stateNames.Receipt]: _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_7__.ReceiptComponent
    };
    return {
        ...route,
        component: componentDictionary[route.name]
    };
});
class ViolationsModule {
}
ViolationsModule.ɵfac = function ViolationsModule_Factory(t) { return new (t || ViolationsModule)(); };
ViolationsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: ViolationsModule });
ViolationsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ providers: [
        { provide: _constants__WEBPACK_IMPORTED_MODULE_16__.StateNames, useValue: _constants__WEBPACK_IMPORTED_MODULE_16__.stateNames },
        { provide: _constants__WEBPACK_IMPORTED_MODULE_16__.CmsIds, useValue: _constants__WEBPACK_IMPORTED_MODULE_16__.cmsIds },
        { provide: _constants__WEBPACK_IMPORTED_MODULE_16__.Routes, useValue: _constants__WEBPACK_IMPORTED_MODULE_16__.urlPaths },
        { provide: _constants__WEBPACK_IMPORTED_MODULE_16__.FeatureToggles, useValue: _constants__WEBPACK_IMPORTED_MODULE_16__.featureToggles }
    ], imports: [[
            pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, _angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule,
            (0,app_routing__WEBPACK_IMPORTED_MODULE_13__.DynamicRoutes)([common_module__WEBPACK_IMPORTED_MODULE_0__.ENVIRON_CONFIG], (environConfig) => environConfig.isMergeMATandVioOn
                ? [{ name: _constants__WEBPACK_IMPORTED_MODULE_16__.stateNames.Root, url: _constants__WEBPACK_IMPORTED_MODULE_16__.urlPaths.Future, redirectTo: frp3_constants__WEBPACK_IMPORTED_MODULE_14__.stateNames.Landing }]
                : routesWithComponents),
            common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule, storefront_module__WEBPACK_IMPORTED_MODULE_11__.StorefrontModule,
            hybrid_module__WEBPACK_IMPORTED_MODULE_17__.HybridModule,
            validation_module__WEBPACK_IMPORTED_MODULE_12__.ValidationModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__.FlexLayoutModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__.MatDividerModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatFormFieldModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_33__.MatSelectModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__.MatIconModule,
            violationsCommon_violationsCommon_module__WEBPACK_IMPORTED_MODULE_19__.ViolationsCommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](ViolationsModule, { declarations: [_frame_frame_component__WEBPACK_IMPORTED_MODULE_2__.FrameComponent,
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__.LandingComponent,
        _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__.GridComponent,
        _selectPayment_selectPayment_component__WEBPACK_IMPORTED_MODULE_5__.SelectPaymentComponent,
        _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_7__.ReceiptComponent,
        _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmComponent,
        _landing_invoiceExample_component__WEBPACK_IMPORTED_MODULE_8__.InvoiceExampleComponent,
        _grid_prevPaidInvoicesModal_prevPaidInvoicesModal_component__WEBPACK_IMPORTED_MODULE_9__.PrevPaidInvoicesComponent,
        _detailsRefresh_invoiced_overpaymentModal_overpaymentModal_component__WEBPACK_IMPORTED_MODULE_18__.OverpaymentModalComponent, _detailsRefresh_plate_plate_component__WEBPACK_IMPORTED_MODULE_20__.PlateRowComponent, _detailsRefresh_violationsDetails_component__WEBPACK_IMPORTED_MODULE_21__.ViolationsDetailsComponent, _detailsRefresh_invoiced_invoiced_component__WEBPACK_IMPORTED_MODULE_22__.ViolationsInvoicedComponent, _detailsRefresh_uninvoiced_uninvoiced_component__WEBPACK_IMPORTED_MODULE_23__.ViolationsUnInvoicedComponent, _detailsRefresh_invoiced_invoicedDetailsModal_component__WEBPACK_IMPORTED_MODULE_10__.InvoicedDetailsModalComponent], imports: [pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, _angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, _uirouter_angular__WEBPACK_IMPORTED_MODULE_35__.UIRouterModule, common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule, storefront_module__WEBPACK_IMPORTED_MODULE_11__.StorefrontModule,
        hybrid_module__WEBPACK_IMPORTED_MODULE_17__.HybridModule,
        validation_module__WEBPACK_IMPORTED_MODULE_12__.ValidationModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__.FlexLayoutModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatFormFieldModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_33__.MatSelectModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__.MatIconModule,
        violationsCommon_violationsCommon_module__WEBPACK_IMPORTED_MODULE_19__.ViolationsCommonModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetComponentScope"](_detailsRefresh_violationsDetails_component__WEBPACK_IMPORTED_MODULE_21__.ViolationsDetailsComponent, [_common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_24__.FxRowComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatLabel, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_36__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgClass, _detailsRefresh_invoiced_invoiced_component__WEBPACK_IMPORTED_MODULE_22__.ViolationsInvoicedComponent, _detailsRefresh_uninvoiced_uninvoiced_component__WEBPACK_IMPORTED_MODULE_23__.ViolationsUnInvoicedComponent, _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_25__.RowContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_37__.DefaultFlexDirective, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_26__.CurrencyComponent], []);


/***/ }),

/***/ 80477:
/*!*****************************************************!*\
  !*** ./src/violations/receipt/receipt.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptComponent": () => (/* binding */ ReceiptComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/providers */ 61264);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ 7370);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frame/frame.component */ 62666);
/* harmony import */ var _common_services_browserExtensionHandlerService_browserExtensionHandler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/services/browserExtensionHandlerService/browserExtensionHandler.service */ 31902);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var violationsCommon_services_violationsService_violationsData_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! violationsCommon/services/violationsService/violationsData.service */ 3938);
/* harmony import */ var violations_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! violations/constants */ 27520);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_print_link_print_link_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/print-link/print-link.component */ 33402);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/containers/row/row.component */ 80001);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/display/cmsContent/cmsContent.component */ 89707);
/* harmony import */ var _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/ui/display/payment/paymentDisplay.component */ 38321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/ui/display/address/addressDisplay.component */ 23204);
/* harmony import */ var _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../storefront/utility/utility.component */ 10061);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);




























function ReceiptComponent_address_display_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "address-display", 20);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("address", ctx_r0.billingMethod.billingType === ctx_r0.BillingType.Credit ? ctx_r0.billingMethod.credit : ctx_r0.billingMethod.eft)("international", ctx_r0.billingMethod.billingType === ctx_r0.BillingType.Credit ? ctx_r0.billingMethod.credit.international : ctx_r0.billingMethod.eft.international);
  }
}

function ReceiptComponent_section_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "section")(1, "wizard-ui", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("next", function ReceiptComponent_section_37_Template_wizard_ui_next_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r4.goToLoginOrAccountOverview();
    })("previous", function ReceiptComponent_section_37_Template_wizard_ui_previous_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r6.backToInvoicesGrid();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5, "Return to Invoices");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("reverseOrder", true);
  }
}

function ReceiptComponent_section_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "section")(1, "wizard-ui", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("next", function ReceiptComponent_section_38_Template_wizard_ui_next_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return ctx_r7.nextTask($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3, "PROCEED");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
}

class ReceiptComponent {
  constructor(parent, browserExtensionHandlerService, window, uiRouterGlobals, state, violationsDataService, stateNames, wizard) {
    this.parent = parent;
    this.browserExtensionHandlerService = browserExtensionHandlerService;
    this.window = window;
    this.uiRouterGlobals = uiRouterGlobals;
    this.state = state;
    this.violationsDataService = violationsDataService;
    this.stateNames = stateNames;
    this.wizard = wizard;
    this.BillingType = common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType;
    this.thankYouSectionParams = {};
  }

  get dateNow() {
    return new Date();
  }

  ngOnInit() {
    this.parent.stepNum = 4; //This removes the wizard stepper.

    this.billingMethod = this.uiRouterGlobals.params.billingInfo || {};
    this.plateContainer = this.parent.getPlateContainer();

    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(this.billingMethod) && this.billingMethod.billingType) {
      this.browserExtensionHandlerService.sendTag(this.uiRouterGlobals.current, this.plateContainer.violationsFlowName);
      this.showReturnToInvoicesLink = this.plateContainer.remainingBalance !== 0;
      this.parent.setTitle(this.cmsContent.Title);
      this.thankYouSectionParams = {
        paymentDate: this.dateNow,
        totalPayment: this.plateContainer.paymentAmount,
        remainingBalance: this.plateContainer.remainingBalance
      };
    } else {
      this.state.go(this.stateNames.Landing);
    }
  }

  goToLoginOrAccountOverview() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.wizard.gotoNextState();

      _this.violationsDataService.removeAllWebStorageEntries();
    })();
  }

  backToInvoicesGrid() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const fullRequest = {
        licenseState: _this2.plateContainer.plate.licenseState,
        invoiceNumber: _this2.plateContainer.invoiceSearchNum,
        licensePlate: _this2.plateContainer.plate.licensePlate
      };
      yield _this2.violationsDataService.findViolations(fullRequest, {
        to: _this2.stateNames.Grid,
        params: {
          billingInfo: _this2.billingMethod
        },
        options: {
          custom: {
            isExplicitlyAllowedTransition: true
          }
        }
      });
    })();
  }

  nextTask(nextState) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.state.go(nextState);
    })();
  }

}

ReceiptComponent.ɵfac = function ReceiptComponent_Factory(t) {
  return new (t || ReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_5__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_common_services_browserExtensionHandlerService_browserExtensionHandler_service__WEBPACK_IMPORTED_MODULE_6__.BrowserExtensionHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](common_providers__WEBPACK_IMPORTED_MODULE_1__.WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_21__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_21__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](violationsCommon_services_violationsService_violationsData_service__WEBPACK_IMPORTED_MODULE_7__.ViolationsDataService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](violations_constants__WEBPACK_IMPORTED_MODULE_8__.StateNames), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](common_ui__WEBPACK_IMPORTED_MODULE_4__.WizardComponent));
};

ReceiptComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({
  type: ReceiptComponent,
  selectors: [["receipt-component"]],
  inputs: {
    cmsContent: "cmsContent",
    cmsSectionImportantInformation: "cmsSectionImportantInformation",
    cmsSectionThankYou: "cmsSectionThankYou",
    cmsPaymentPostingPopup: "cmsPaymentPostingPopup"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵProvidersFeature"]([common_ui__WEBPACK_IMPORTED_MODULE_4__.WizardComponent])],
  decls: 39,
  vars: 16,
  consts: [["fxLayout", "column"], [1, "u-spacing__firstHeaderToTitle--marginTop"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayout.lt-md", "column", "fxLayoutAlign.lt-md", "start start"], ["fxFlex", "grow", "fxFlexOrder", "1", "fxFlexOrder.lt-md", "2"], ["fxFlex", "none", "fxFlexOrder", "2", "fxFlexOrder.lt-md", "1", "ngClass.lt-md", "printContainer-extra-bottom-space"], ["id", "printButton"], [1, "u-spacing__divider--marginTopBottom"], [3, "rowType"], ["col-start", "", "id", "totalPaymentLabel", "fxFlex", "grow"], ["col-end", "", "id", "totalPaymentValue", "fxFlex", "none"], [3, "value"], ["fxLayout", "column", 1, "u-spacing__sectionToRow--marginTop"], ["id", "thankYouSection", 3, "template", "data"], ["fxLayout", "column", 1, "u-spacing__headerToSection--marginTop"], [3, "billingType", "bankDetails", "creditCard", "showAccountNumber"], ["class", "u-spacing__addressToPaymentDisplay--marginTop", 3, "address", "international", 4, "ngIf"], ["id", "importantInformationSection", 3, "template", "data"], [1, "u-spacing--widthFill", "u-spacing__buttonToField--marginTop"], ["storefront", ""], [4, "ngIf"], [1, "u-spacing__addressToPaymentDisplay--marginTop", 3, "address", "international"], [3, "reverseOrder", "next", "previous"], ["wizard-next", ""], ["wizard-previous", ""], [3, "next"]],
  template: function ReceiptComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "page-centered-container")(1, "div", 0)(2, "card-container", 1)(3, "section", 0)(4, "header")(5, "div", 2)(6, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](9, "print-link", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](10, "mat-divider", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](11, "section", 0)(12, "row-container", 7)(13, "article", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](14, " Payment Amount: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](15, "article", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](16, "currency", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](17, "section", 11)(18, "article");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](19, "cms-content", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](20, "section", 13)(21, "header")(22, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](24, "mat-divider", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](25, "payment-display", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](26, ReceiptComponent_address_display_26_Template, 1, 2, "address-display", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](27, "section", 13)(28, "header")(29, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](31, "mat-divider", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](32, "article");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](33, "cms-content", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](34, "section", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](35, "storefront-utility", null, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](37, ReceiptComponent_section_37_Template, 6, 1, "section", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](38, ReceiptComponent_section_38_Template, 4, 0, "section", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](36);

      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", ctx.cmsSectionThankYou.Title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("rowType", "emphasis");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("value", ctx.plateContainer.paymentAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("template", ctx.cmsSectionThankYou.LongDescription)("data", ctx.thankYouSectionParams);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx.cmsContent.BillingInformationHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("billingType", ctx.billingMethod.billingType)("bankDetails", ctx.billingMethod.eft)("creditCard", ctx.billingMethod.credit)("showAccountNumber", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.billingMethod.billingType);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx.cmsSectionImportantInformation.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("template", ctx.cmsSectionImportantInformation.LongDescription)("data", ctx.thankYouSectionParams);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !_r1.isKioskView);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", _r1.isKioskView);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_9__.PageCenteredContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultLayoutDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_10__.CardContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultFlexOrderDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__.DefaultClassDirective, _common_ui_print_link_print_link_component__WEBPACK_IMPORTED_MODULE_11__.PrintLinkComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDivider, _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_12__.RowContainerComponent, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_13__.CurrencyComponent, _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_14__.CmsContentComponent, _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_15__.PaymentDisplayComponent, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_16__.AddressDisplayComponent, _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_17__.StorefrontUtilityComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_18__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_19__.WizardNextDirective],
  styles: ["[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   #totalPaymentLabel[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n  color: #34353a;\n}\n[_nghost-%COMP%]   #totalPaymentValue[_ngcontent-%COMP%] {\n  text-align: right;\n  font-weight: 700;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   .printContainer-extra-bottom-space[_ngcontent-%COMP%] {\n  margin-left: 26px;\n  margin-bottom: 25px;\n}\n[_nghost-%COMP%]   .custom-spacing-addressToDisplay[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VpcHQubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxwYWdlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFHUSxnQkFBQTtBQUpSO0FBQ0E7RUFPUSxXQUFBO0FBTFI7QUFGQTtFQVdRLGdCQUFBO0VBQ0EsZUFBQTtFQ2lDSixjQUFBO0FEdENKO0FBUEE7RUFpQlEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFQUjtBQVpBO0VBdUJRLGlCQUFBO0VBQ0EsbUJBQUE7QUFSUjtBQWhCQTtFQTRCUSxnQkFBQTtBQVRSIiwiZmlsZSI6InJlY2VpcHQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG5cbiAgICBoMiB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XG4gICAgfVxuXG4gICAgbWF0LWRpdmlkZXIge1xuICAgICAgICB3aWR0aDogQHdpZHRoLWRpdmlkZXI7XG4gICAgfVxuXG4gICAgI3RvdGFsUGF5bWVudExhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAudC1oZWFkZXItLWNvbG9yKEB0aGVtZS1saWdodCk7XG4gICAgfVxuXG4gICAgI3RvdGFsUGF5bWVudFZhbHVlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAucHJpbnRDb250YWluZXItZXh0cmEtYm90dG9tLXNwYWNlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgfVxuXG4gICAgLmN1c3RvbS1zcGFjaW5nLWFkZHJlc3NUb0Rpc3BsYXkge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG5AYm9keS0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAd2hpdGU7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMi1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjMtbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1saWdodDogQHRyb3BpY2FsLXJhaW4tZm9yZXN0LWdyZWVuO1xuQGJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2lsdmVyLWdyYXk7XG5AaGVhZGVyLS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBsYWJlbC0tY29sb3ItbGlnaHQ6IEBib3VsZGVyLWdyYXk7XG5Ac2VsZWN0X19hcnJvdy0tY29sb3ItbGlnaHQ6IEBzY29ycGlvbi1ncmF5O1xuQGxpbmstLWNvbG9yLWxpZ2h0OiBAYXp1cmUtcmFkaWFuY2UtYmx1ZTtcbkBkaXZpZGVyLS1ib3JkZXJDb2xvci1saWdodDogQHNjaG9vbC1idXMteWVsbG93O1xuXG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjIoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMi1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMyhAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtaGVhZGVyLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdoZWFkZXItLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGFiZWwtLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xhYmVsLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXNlbGVjdF9fYXJyb3ctLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3NlbGVjdF9fYXJyb3ctLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGluay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGluay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yICFpbXBvcnRhbnQ7IC8vIG1hcmtlZCBhcyAhaW1wb3J0YW50IHRvIG92ZXJyaWRlIGJvb3RzdHJhcFxufVxuXG4udC1kaXZpZGVyLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdkaXZpZGVyLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1kaXZpZGVyX19kYXNoLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuIl19 */"]
});

/***/ }),

/***/ 80953:
/*!*****************************************************************!*\
  !*** ./src/violations/selectPayment/selectPayment.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectPaymentComponent": () => (/* binding */ SelectPaymentComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frame/frame.component */ 62666);
/* harmony import */ var validation_services_webApis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! validation/services/webApis.service */ 31836);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_form_entry_paymentMethod_paymentMethod_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/form-entry/paymentMethod/paymentMethod.component */ 51325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_form_entry_bankAccount_bankAccountEntry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/ui/form-entry/bankAccount/bankAccountEntry.component */ 48738);
/* harmony import */ var _common_ui_form_entry_creditCardEntry_creditCardEntry_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/form-entry/creditCardEntry/creditCardEntry.component */ 70858);
/* harmony import */ var _common_ui_form_entry_address_addressEntry_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/form-entry/address/addressEntry.component */ 54608);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 38661);























function SelectPaymentComponent_section_10_bank_account_entry_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "bank-account-entry", 15);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("bankDetails", ctx_r3.billingInfo.eft)("validate", true)("showName", true);
  }
}

function SelectPaymentComponent_section_10_credit_card_entry_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "credit-card-entry", 16);
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("creditCard", ctx_r4.billingInfo.credit);
  }
}

function SelectPaymentComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, SelectPaymentComponent_section_10_bank_account_entry_1_Template, 1, 3, "bank-account-entry", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, SelectPaymentComponent_section_10_credit_card_entry_2_Template, 1, 1, "credit-card-entry", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.billingInfo.billingType === ctx_r1.BillingType.Eft);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.billingInfo.billingType === ctx_r1.BillingType.Credit);
  }
}

function SelectPaymentComponent_card_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "card-container", 17)(1, "header")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Billing Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "mat-divider", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "address-entry", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("internationalChange", function SelectPaymentComponent_card_container_11_Template_address_entry_internationalChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r5.billingInfo.billingType === ctx_r5.BillingType.Credit ? ctx_r5.billingInfo.credit.international : ctx_r5.billingInfo.eft.international = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("stateList", ctx_r2.stateList)("address", ctx_r2.billingInfo.billingType === ctx_r2.BillingType.Credit ? ctx_r2.billingInfo.credit : ctx_r2.billingInfo.eft)("billingType", ctx_r2.billingInfo.billingType)("validate", true)("countryList", ctx_r2.countryList)("international", ctx_r2.billingInfo.billingType === ctx_r2.BillingType.Credit ? ctx_r2.billingInfo.credit.international : ctx_r2.billingInfo.eft.international);
  }
}

class SelectPaymentComponent {
  constructor(state, uiRouterGlobals, parent, validationApis, responseErrorService) {
    this.state = state;
    this.uiRouterGlobals = uiRouterGlobals;
    this.parent = parent;
    this.validationApis = validationApis;
    this.responseErrorService = responseErrorService;
    this.BillingType = common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType;
    this.billingInfo = {
      eft: {
        accountType: null,
        name: null,
        routingNumber: null,
        accountNumber: null,
        address1: null,
        city: null,
        state: null,
        zip: null,
        plus4: null,
        country: 'USA',
        displayCountry: 'USA',
        international: false
      },
      credit: {
        cardCode: null,
        cardNbr: null,
        expMonth: null,
        expYear: null,
        nameOnCard: null,
        address1: null,
        city: null,
        state: null,
        zip: null,
        plus4: null,
        country: 'USA',
        displayCountry: 'USA',
        international: false
      },
      billingType: null
    };
  }

  nextStep(nextState) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let paymentReady = false;

      if (_this.billingInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft) {
        const eftRequest = {
          accountType: _this.billingInfo.eft.accountType,
          routingNumber: _this.billingInfo.eft.routingNumber,
          accountNumber: _this.billingInfo.eft.accountNumber
        };
        const response = yield _this.validationApis.validateRoutingNumber(eftRequest);

        if (Array.isArray(response.alerts) && response.alerts.length !== 0) {
          _this.responseErrorService.displayAlertsFromResponse(response, true);
        }

        paymentReady = true;
      } else if (_this.creditEntry) {
        paymentReady = yield _this.creditEntry.submit();
      }

      if (paymentReady) {
        yield _this.state.go(nextState, {
          billingInfo: _this.billingInfo
        });
      }
    })();
  }

  goToPreviousState(targetState) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.state.go(targetState, {
        billingInfo: _this2.billingInfo
      });
    })();
  }

  ngOnInit() {
    this.billingInfo = this.uiRouterGlobals.params.billingInfo || this.billingInfo;
    this.parent.setTitle(this.cmsContent.Title);
    this.parent.stepNum = 2;
    this.parent.scrollToTop();
  }

}

SelectPaymentComponent.ɵfac = function SelectPaymentComponent_Factory(t) {
  return new (t || SelectPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_16__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_16__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](validation_services_webApis_service__WEBPACK_IMPORTED_MODULE_4__.WebApisService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_5__.ResponseErrorService));
};

SelectPaymentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: SelectPaymentComponent,
  selectors: [["select-payment"]],
  viewQuery: function SelectPaymentComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](common_ui__WEBPACK_IMPORTED_MODULE_2__.CreditCardEntryComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.creditEntry = _t.first);
    }
  },
  inputs: {
    stateList: "stateList",
    countryList: "countryList",
    cmsContent: "cmsContent"
  },
  decls: 21,
  vars: 4,
  consts: [["validation-focus", "", "name", "violationsForm", "fxLayout", "column", 1, "u-spacing--widthFill"], ["BillingForm", "ngForm"], [1, "u-spacing__divider--marginTopBottom"], [3, "billingType", "billingTypeChange"], ["class", "u-spacing__fieldToField--marginTop", 4, "ngIf"], ["class", "u-spacing__cardToCard--marginTop", 4, "ngIf"], [1, "u-spacing__buttonToField--marginTop"], [3, "next", "previous"], ["wizard-next", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["wizard-cancel", ""], [1, "u-spacing__fieldToField--marginTop"], [3, "bankDetails", "validate", "showName", 4, "ngIf"], [3, "creditCard", 4, "ngIf"], [3, "bankDetails", "validate", "showName"], [3, "creditCard"], [1, "u-spacing__cardToCard--marginTop"], [3, "stateList", "address", "billingType", "validate", "countryList", "international", "internationalChange"]],
  template: function SelectPaymentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "page-centered-container")(1, "form", 0, 1)(3, "card-container")(4, "header")(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "mat-divider", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "section")(9, "payment-method", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("billingTypeChange", function SelectPaymentComponent_Template_payment_method_billingTypeChange_9_listener($event) {
        return ctx.billingInfo.billingType = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, SelectPaymentComponent_section_10_Template, 3, 2, "section", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, SelectPaymentComponent_card_container_11_Template, 6, 6, "card-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "section", 6)(13, "wizard-ui", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("next", function SelectPaymentComponent_Template_wizard_ui_next_13_listener($event) {
        return ctx.nextStep($event);
      })("previous", function SelectPaymentComponent_Template_wizard_ui_previous_13_listener($event) {
        return ctx.goToPreviousState($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15, "CONTINUE");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](17, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.cmsContent.PaymentMethodHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("billingType", ctx.billingInfo.billingType);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.billingInfo.billingType);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.billingInfo.billingType);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_6__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_7__.FocusDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__.DefaultLayoutDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_8__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDivider, _common_ui_form_entry_paymentMethod_paymentMethod_component__WEBPACK_IMPORTED_MODULE_9__.PaymentMethodComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _common_ui_form_entry_bankAccount_bankAccountEntry_component__WEBPACK_IMPORTED_MODULE_10__.BankAccountEntryComponent, _common_ui_form_entry_creditCardEntry_creditCardEntry_component__WEBPACK_IMPORTED_MODULE_11__.CreditCardEntryComponent, _common_ui_form_entry_address_addressEntry_component__WEBPACK_IMPORTED_MODULE_12__.AddressEntryComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_13__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_14__.WizardNextDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__.DefaultLayoutAlignDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon],
  styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdFBheW1lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVRLFdBQUE7QUFGUjtBQUFBO0VBTVEsZ0JBQUE7QUFIUiIsImZpbGUiOiJzZWxlY3RQYXltZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgbWF0LWRpdmlkZXIge1xuICAgICAgICB3aWR0aDogQHdpZHRoLWRpdmlkZXI7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgICBtYXgtaGVpZ2h0OiA3MHB4O1xuICAgIH1cbn1cbiJdfQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=816.32a6017cd61a0f06.js.map