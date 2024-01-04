"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[997],{

/***/ 27451:
/*!*******************************************************!*\
  !*** ./src/paymentplans/confirm/confirm.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmComponent": () => (/* binding */ ConfirmComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 98928);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frame/frame.component */ 50985);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ 82500);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _services_webApi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/webApi.service */ 42423);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ 33945);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/display/payment/paymentDisplay.component */ 38321);
/* harmony import */ var _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/display/address/addressDisplay.component */ 23204);
/* harmony import */ var _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/containers/row/row.component */ 80001);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/ui/display/cmsContent/cmsContent.component */ 89707);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 38661);




























function ConfirmComponent_section_7_div_11_ng_container_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Please enter a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function ConfirmComponent_section_7_div_11_ng_container_1_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Please enter a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function ConfirmComponent_section_7_div_11_ng_container_1_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Please enter a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function ConfirmComponent_section_7_div_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ConfirmComponent_section_7_div_11_ng_container_1_p_1_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, ConfirmComponent_section_7_div_11_ng_container_1_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, ConfirmComponent_section_7_div_11_ng_container_1_p_3_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitch", error_r6.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitchCase", "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitchCase", "maxLength");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitchCase", "minLength");
  }
}

function ConfirmComponent_section_7_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ConfirmComponent_section_7_div_11_ng_container_1_Template, 4, 4, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](2);

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _r0.submitted);
  }
}

function ConfirmComponent_section_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section", 25)(1, "header")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "mat-divider", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "section", 27)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8, "EMAIL");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function ConfirmComponent_section_7_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r12.emailReceipt = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, ConfirmComponent_section_7_div_11_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](10);

    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.cmsContent.paymentDetailsTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("innerHtml", ctx_r1.cmsContent.emailInstruction, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("error-check", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r1.emailReceipt);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](12, 5, _r4.errors));
  }
}

const _c0 = function (a0, a1) {
  return {
    paymentAmount: a0,
    nextUpcomingInstallmentDateFormatted: a1
  };
};

function ConfirmComponent_section_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section", 36)(1, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "cms-content", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("template", ctx_r2.cmsContent.amountSelectionNoteTemplate)("data", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction2"](2, _c0, ctx_r2.paymentAmount, ctx_r2.nextUpcomingInstallmentDateFormatted));
  }
}

class ConfirmComponent {
  //@host decorator was removed for parent due to issue with Ivy. see https://github.com/angular/angular/issues/31539
  constructor(parent, dataService, state, responseErrorService, paymentPlanApi, genericRepoService, stateNames) {
    this.parent = parent;
    this.dataService = dataService;
    this.state = state;
    this.responseErrorService = responseErrorService;
    this.paymentPlanApi = paymentPlanApi;
    this.genericRepoService = genericRepoService;
    this.stateNames = stateNames;

    this.formatDate = date => moment__WEBPACK_IMPORTED_MODULE_2__(date instanceof Date ? date : new Date(date)).format('MMM Do, YYYY');

    this.todayFormatted = this.formatDate(new Date());
  }

  get planData() {
    return this.parent.planData;
  }

  get cms() {
    return this.cmsContent;
  }

  get isMaxPayment() {
    return this.planData.paymentAmount === this.planData.selectedPaymentPlan.balanceAmount;
  }

  get hasOverage() {
    return this.planData.paymentAmount > this.planData.selectedPaymentPlan.nextInstallmentAmount;
  }

  get paymentAmount() {
    return this.planData.paymentAmount;
  }

  get nextUpcomingInstallmentDateFormatted() {
    return this.formatDate(this.planData.selectedPaymentPlan.nextUpcomingInstallmentDate);
  }

  ngOnInit() {
    this.parent.stepNum = 3;
    this.parent.scrollToTop();

    if (this.isEzTagFlow) {
      this.genericRepoService.dataFactory.getPersonalInfo().then(response => {
        this.emailReceipt = response.contactInfo.emailAddress;
      });
    }

    this.totalDue = this.planData.paymentAmount + (this.planData.addAccountFunds ? this.planData.addAccountFundsAmount : 0);
  }

  makePayment(nextState) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.planData.billingMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft) {
        _this.planData.billingMethod.eftPaymentMethod.name = _this.planData.billingMethod.eftPaymentMethod.name || _this.planData.billingMethod.eftPaymentMethod.nameOnBankAccount;
        _this.planData.billingMethod.eftPaymentMethod.nameOnBankAccount = _this.planData.billingMethod.eftPaymentMethod.nameOnBankAccount || _this.planData.billingMethod.eftPaymentMethod.name;
      }

      let accountDisplayType;

      if (_this.planData.billingMethod.eftPaymentMethod) {
        accountDisplayType = _this.planData.billingMethod.eftPaymentMethod.accountType === common_models__WEBPACK_IMPORTED_MODULE_1__.BankAccountType.Personal ? 'Personal' : 'Business';
      }

      const paymentPlanRequest = {
        eftPaymentMethod: Object.assign({}, _this.planData.billingMethod.eftPaymentMethod, {
          accountTypeDisplay: accountDisplayType
        }),
        creditCardPaymentMethod: _this.planData.billingMethod.creditCardPaymentMethod,
        creditCard: _this.planData.billingMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit,
        paymentPlanId: _this.planData.selectedPaymentPlan.paymentPlanId,
        amount: _this.planData.paymentAmount,
        email: _this.emailReceipt
      };

      if (_this.isEzTagFlow) {
        Object.assign(paymentPlanRequest, {
          AccountPayment: _this.planData.addAccountFunds,
          AccountPaymentAmount: _this.planData.addAccountFundsAmount
        });
      }

      const response = yield _this.isEzTagFlow ? _this.paymentPlanApi.ezTagPayment(paymentPlanRequest) : _this.paymentPlanApi.violationsPayment(paymentPlanRequest);

      if (!_this.responseErrorService.isErrorFree(response)) {
        return;
      }

      const paymentResponse = {
        originalRequest: response.originalRequest,
        currentBalanceObj: _this.isEzTagFlow ? response.currentBalanceObj : null,
        currentPaymentPlanBalanceObj: _this.isEzTagFlow ? response.currentPaymentPlanBalanceObj : null
      };

      _this.dataService.setPaymentResponse(paymentResponse, _this.isEzTagFlow);

      _this.dataService.setPlanDataInfo(_this.planData, _this.isEzTagFlow);

      yield _this.state.go(nextState);
    })();
  }

}

ConfirmComponent.ɵfac = function ConfirmComponent_Factory(t) {
  return new (t || ConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__.PlateDataService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_20__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_5__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_webApi_service__WEBPACK_IMPORTED_MODULE_6__.WebApiService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_5__.GenericRepoService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_constants__WEBPACK_IMPORTED_MODULE_7__.PaymentPlansStateNames));
};

ConfirmComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
  type: ConfirmComponent,
  selectors: [["confirm-component"]],
  inputs: {
    cmsContent: "cmsContent",
    isEzTagFlow: "isEzTagFlow"
  },
  decls: 39,
  vars: 17,
  consts: [["validation-focus", "", "name", "paymentPlanConfirmForm"], ["ConfirmForm", "ngForm"], ["fxLayout", "column"], ["fxLayout", "column", "class", "u-spacing__sectionToSection--marginTop", 4, "ngIf"], ["fxLayout", "column", 1, "u-spacing__headerToSection--marginTop"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "u-spacing--widthFill"], ["fxFlex", "grow"], ["fxFlex", "none", "aria-label", "Edit", 1, "editButton", 3, "click"], [1, "u-spacing__divider--marginTopBottom"], [3, "billingType", "bankDetails", "creditCard", "showAccountNumber", "showLabels", "edit"], [3, "address", "international", "showLabels"], [1, "u-spacing__rowToSection--marginTop", 3, "rowType"], ["col-start", "", "id", "totalPaymentLabel", "fxFlex", "grow"], ["col-end", "", "id", "totalPaymentValue", "fxFlex", "none"], [3, "value"], ["fxLayout", "row", 1, "u-spacing__sectionToRow--marginTop"], ["fxFlex", "none"], ["class", "noteBoxLayout u-spacing__sectionToSection--marginTop", 4, "ngIf"], ["fxLayout", "column", 1, "u-spacing__buttonToField--marginTop"], [3, "next"], ["Wizard", ""], ["wizard-next", ""], ["wizard-cancel", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["fxLayout", "column", 1, "u-spacing__sectionToSection--marginTop"], [3, "innerHtml"], [1, "u-spacing--widthFill", "u-spacing__fieldToSection--marginTop", 3, "error-check"], ["type", "text", "id", "emailAddress", "name", "emailAddress", "maxLength", "80", "minLength", "1", "placeholder", "username@domain.com", "email", "", 1, "u-spacing--widthFill", 3, "ngModel", "ngModelChange"], ["EmailAddressInput", "ngModel"], ["role", "alert", 4, "ngFor", "ngForOf"], ["role", "alert"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], ["class", "help-block", 4, "ngSwitchCase"], [1, "help-block"], [1, "noteBoxLayout", "u-spacing__sectionToSection--marginTop"], [3, "template", "data"]],
  template: function ConfirmComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "page-centered-container")(1, "form", 0, 1)(3, "card-container")(4, "section", 2)(5, "article");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, ConfirmComponent_section_7_Template, 13, 7, "section", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "section", 4)(9, "header")(10, "div", 5)(11, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ConfirmComponent_Template_a_click_13_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r14);

        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](31);

        return _r3.gotoPreviousState();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, " Edit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](15, "mat-divider", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "payment-display", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("edit", function ConfirmComponent_Template_payment_display_edit_16_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r14);

        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](31);

        return _r3.gotoPreviousState();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](17, "address-display", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "row-container", 11)(19, "section", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "section", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](22, "currency", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "section", 15)(24, "article", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "article", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](28, ConfirmComponent_section_28_Template, 3, 5, "section", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "section", 18)(30, "wizard-ui", 19, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("next", function ConfirmComponent_Template_wizard_ui_next_30_listener($event) {
        return ctx.makePayment($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](32, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](33, "SUBMIT PAYMENT");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](34, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](35, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](36, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](37, "mat-icon", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](38, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.reviewInfoHeader, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.isEzTagFlow);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx.cms.paymentDetailsHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("billingType", ctx.planData.billingMethod.billingType)("bankDetails", ctx.planData.billingMethod.eftPaymentMethod)("creditCard", ctx.planData.billingMethod.creditCardPaymentMethod)("showAccountNumber", true)("showLabels", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("address", ctx.planData.billingMethod.address)("international", ctx.planData.billingMethod.address.international)("showLabels", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("rowType", "emphasis");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.paymentPlanAmountLabel, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", ctx.planData.paymentAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.paymentDateLabel, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx.todayFormatted, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.hasOverage && !ctx.isMaxPayment);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_8__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_9__.FocusDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_10__.CardContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultLayoutDirective, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDivider, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_11__.ErrorCheckDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgSwitchCase, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultFlexDirective, _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_12__.PaymentDisplayComponent, _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_13__.AddressDisplayComponent, _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_14__.RowContainerComponent, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_15__.CurrencyComponent, _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_16__.CmsContentComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_17__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_18__.WizardNextDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.KeyValuePipe],
  styles: ["[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   .noteBoxLayout[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  padding: 16px 20px;\n  margin-left: -20px;\n  margin-right: -20px;\n  border-radius: 10px 10px;\n}\n[_nghost-%COMP%]   #totalPaymentLabel[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  color: #34353a;\n  font-weight: 700;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   #totalPaymentValue[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: 'Montserrat';\n  color: #34353a;\n  font-weight: 700;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   .editButton[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: 'Jost';\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0ubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFx0ZXh0Ym94Lmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xcZm9udHMubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxwYWdlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFHUSxnQkFBQTtBQUpSO0FBQ0E7RUFPUSxXQUFBO0FBTFI7QUFGQTtFQ0tJLHlCQUFBO0VET0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFOUjtBQVRBO0VFS0kseUJBQUE7RUN3Q0EsY0FBQTtFSHhCSSxnQkFBQTtFQUNBLGVBQUE7QUFQUjtBQWZBO0VBMEJRLGlCQUFBO0VFckJKLHlCQUFBO0VDeUJBLGNBQUE7RUhESSxnQkFBQTtFQUNBLGVBQUE7QUFSUjtBQXRCQTtFQWtDUSxnQkFBQTtFRWpDSixtQkFBQTtBRnlCSiIsImZpbGUiOiJjb25maXJtLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcblxuICAgIGgyIHtcbiAgICAgICAgbWF4LWhlaWdodDogNzBweDtcbiAgICB9XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG5cbiAgICAubm90ZUJveExheW91dCB7XG4gICAgICAgIC50LXRleHRib3gtLWJhY2tncm91bmRDb2xvcihAdGhlbWUtbGlnaHQpO1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4O1xuICAgIH1cblxuICAgICN0b3RhbFBheW1lbnRMYWJlbCB7XG4gICAgICAgIC50LWJvZHktLWZvbnRGYW1pbHk7XG4gICAgICAgIC50LWhlYWRlci0tY29sb3IoQHRoZW1lLWxpZ2h0KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgICN0b3RhbFBheW1lbnRWYWx1ZSB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAudC1ib2R5LS1mb250RmFtaWx5O1xuICAgICAgICAudC1ib2R5LS1jb2xvcihAdGhlbWUtbGlnaHQpO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLmVkaXRCdXR0b24ge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAudC1oZWFkZXItLWZvbnRGYW1pbHk7XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbkB0ZXh0Ym94LS1iYWNrZ3JvdW5kQ29sb3ItbGlnaHQ6IEBhbGFiYXN0ZXItZ3JheTtcblxuXG4udC10ZXh0Ym94LS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAndGV4dGJveC0tYmFja2dyb3VuZENvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbi50LWhlYWRlci0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtam9zdDtcbn1cblxuLnQtYm9keS0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG5AYm9keS0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAd2hpdGU7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMi1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjMtbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1saWdodDogQHRyb3BpY2FsLXJhaW4tZm9yZXN0LWdyZWVuO1xuQGJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2lsdmVyLWdyYXk7XG5AaGVhZGVyLS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBsYWJlbC0tY29sb3ItbGlnaHQ6IEBib3VsZGVyLWdyYXk7XG5Ac2VsZWN0X19hcnJvdy0tY29sb3ItbGlnaHQ6IEBzY29ycGlvbi1ncmF5O1xuQGxpbmstLWNvbG9yLWxpZ2h0OiBAYXp1cmUtcmFkaWFuY2UtYmx1ZTtcbkBkaXZpZGVyLS1ib3JkZXJDb2xvci1saWdodDogQHNjaG9vbC1idXMteWVsbG93O1xuXG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjIoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMi1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMyhAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtaGVhZGVyLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdoZWFkZXItLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGFiZWwtLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xhYmVsLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXNlbGVjdF9fYXJyb3ctLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3NlbGVjdF9fYXJyb3ctLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGluay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGluay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yICFpbXBvcnRhbnQ7IC8vIG1hcmtlZCBhcyAhaW1wb3J0YW50IHRvIG92ZXJyaWRlIGJvb3RzdHJhcFxufVxuXG4udC1kaXZpZGVyLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdkaXZpZGVyLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1kaXZpZGVyX19kYXNoLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuIl19 */"]
});

/***/ }),

/***/ 50985:
/*!***************************************************!*\
  !*** ./src/paymentplans/frame/frame.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrameComponent": () => (/* binding */ FrameComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var animations_hide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animations/hide */ 33965);
/* harmony import */ var common_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/utilities */ 56516);
/* harmony import */ var common_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/providers */ 61264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ 82500);
/* harmony import */ var _common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ui/title-banner/title-banner.component */ 38018);
/* harmony import */ var _common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ui/wizard/stepper/stepper.component */ 63457);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @uirouter/angular */ 99305);









class FrameComponent {
  constructor(paymentPlansStateService, plateDataService, windowRef) {
    this.paymentPlansStateService = paymentPlansStateService;
    this.plateDataService = plateDataService;
    this.windowRef = windowRef;
    this.steps = [];
    this.stepNum = 0;
    this.eftMailingInfo = new Map();
  }

  ngOnInit() {
    this.isEzTagFlow = this.isEzTagFlow;
    this.planData = this.plateDataService.getPlanDataInfo(this.isEzTagFlow);
    this.Title = this.cmsBaseContent.Title;
    this.steps = [{
      name: this.cmsBaseContent.Step1,
      background: 'primary'
    }, {
      name: this.cmsBaseContent.Step2,
      background: 'secondary'
    }, {
      name: this.cmsBaseContent.Step3,
      background: 'secondary'
    }, {
      name: this.cmsBaseContent.Step4
    }];
    const eftCachedAddressInfo = this.paymentPlansStateService.getCachedEftAddressInfo() || {};
    this.eftMailingInfo.clear();
    Object.keys(eftCachedAddressInfo).forEach(key => {
      this.eftMailingInfo.set(+key, eftCachedAddressInfo[key]);
    });
  }

  ngOnDestroy() {
    this.paymentPlansStateService.destroyPaymentPlansCurrentStep(this.isEzTagFlow);
    this.eftMailingInfo.clear();
  }

  getCachedEftMailingInfo(accountBillingMethodId) {
    return this.eftMailingInfo.get(accountBillingMethodId);
  }

  setCachedEftMailingInfo(accountBillingMethodId, mailingInfo) {
    this.eftMailingInfo.set(accountBillingMethodId, mailingInfo);
    const cache = [...this.eftMailingInfo.entries()].reduce((acc, v) => ({ ...acc,
      [v[0]]: v[1]
    }), {});
    this.paymentPlansStateService.setCachedEftAddressInfo(cache);
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

}

FrameComponent.ɵfac = function FrameComponent_Factory(t) {
  return new (t || FrameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__.PlateDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](common_providers__WEBPACK_IMPORTED_MODULE_3__.WindowRef));
};

FrameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: FrameComponent,
  selectors: [["payment-plans-frame-component"]],
  inputs: {
    isEzTagFlow: "isEzTagFlow",
    cmsBaseContent: "cmsBaseContent"
  },
  decls: 6,
  vars: 4,
  consts: [[1, "refresh-2020"], [3, "steps", "currentStepNum"]],
  template: function FrameComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "main", 0)(1, "title-banner");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "stepper", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "ui-view");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.cmsBaseContent.Title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("steps", ctx.steps)("currentStepNum", ctx.stepNum);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@hide", ctx.isHidden);
    }
  },
  directives: [_common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_5__.TitleBannerComponent, _common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_6__.StepperComponent, _uirouter_angular__WEBPACK_IMPORTED_MODULE_8__.UIView],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcmFtZS5sZXNzIn0= */"],
  data: {
    animation: [animations_hide__WEBPACK_IMPORTED_MODULE_1__.hideTrigger]
  }
});

/***/ }),

/***/ 35414:
/*!*************************************************!*\
  !*** ./src/paymentplans/grid/grid.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridComponent": () => (/* binding */ GridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frame/frame.component */ 50985);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ 82500);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _services_webApi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/webApi.service */ 42423);
/* harmony import */ var cms_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cms/services */ 46693);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/ui */ 50933);







const _c0 = function (a0) { return { "plate-spacing": a0 }; };
function GridComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "plan-detail", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const plate_r3 = ctx.$implicit;
    const isFirst_r4 = ctx.first;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c0, !isFirst_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.cms.data.planActiveTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", plate_r3.licPlateState, " ", plate_r3.licPlateNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isActive", true)("plate", plate_r3);
} }
function GridComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "plan-detail", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const plate_r5 = ctx.$implicit;
    const isFirst_r6 = ctx.first;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c0, !isFirst_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.cms.data.planInactiveTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", plate_r5.licPlateState, " ", plate_r5.licPlateNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isActive", false)("plate", plate_r5);
} }
function GridComponent_payment_details_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "payment-details", 9);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("details", ctx_r2.planData.selectedPaymentPlan)("cmsContent", ctx_r2.cms)("isEzTagFlow", ctx_r2.isEzTagFlow);
} }
class GridComponent {
    //@host decorator was removed for parent due to issue with Ivy. see https://github.com/angular/angular/issues/31539
    constructor(parent, dataService, responseErrorService, paymentPlanApi, cmsUtilService, spinnerService) {
        this.parent = parent;
        this.dataService = dataService;
        this.responseErrorService = responseErrorService;
        this.paymentPlanApi = paymentPlanApi;
        this.cmsUtilService = cmsUtilService;
        this.spinnerService = spinnerService;
        this.activePlates = [];
        this.inactivePlates = [];
        this.processingPlans = () => {
            //TODO: once ETC fix auto pay, need to seperate out the autopay/billingCard on account and new payment method.
            this.dataService.resetPlanDataInfo(this.isEzTagFlow);
            this.planData = this.dataService.getPlanDataInfo(this.isEzTagFlow);
            this.activePlates = this.dataService.getActive(this.isEzTagFlow);
            this.inactivePlates = this.dataService.getInactive(this.isEzTagFlow);
            this.planData.selectedPaymentPlan = this.dataService.resetSelectedPlan(this.activePlates, this.inactivePlates, this.isEzTagFlow);
            this.hasCurrentSelectedPlan = true;
        };
        this.processPaymentPlanSearch = (response) => {
            this.spinnerService.stopSpinner();
            if (!this.responseErrorService.isErrorFree(response)) {
                throw response;
            }
            this.dataService.setPaymentPlans(response, true);
        };
        this.onClickGrid = (planId) => {
            this.planData.selectedPaymentPlan =
                this.dataService.toggleCurrentPlan(planId, this.activePlates, this.inactivePlates, this.isEzTagFlow);
        };
        this.selectPlan = (selectedPlan) => {
            this.planData.selectedPaymentPlan = selectedPlan;
            //reset the 'isSelected' prop
            [...this.activePlates, ...this.inactivePlates]
                .reduce((acc, plateInfo) => acc.concat(plateInfo.paymentPlans), [])
                .forEach(plan => plan.isSelected = plan.paymentPlanId === selectedPlan.paymentPlanId);
            //store current selected plan
            this.dataService.storePlan(this.planData.selectedPaymentPlan, this.isEzTagFlow);
        };
    }
    get planData() {
        return this.parent.planData;
    }
    set planData(value) {
        this.parent.planData = value;
    }
    ngOnInit() {
        this.parent.stepNum = 1;
        this.parent.scrollToTop();
        this.hasCurrentSelectedPlan = false;
        const pdfContent = this.cmsContent.Children[4];
        const infoIcon = this.cmsContent.Children[3];
        const planText = this.cmsContent.Children[1];
        this.cms = {
            pdf: {
                pdfDownloadText: pdfContent.ShortDescription,
                pdfDownloadedMessage: pdfContent.pdfDownloaded,
                pdfError: pdfContent.pdfError,
                pdfProcessingMesssage: pdfContent.pdfProcessing
            },
            data: {
                planActiveTitle: this.cmsContent.ShortDescription,
                planInactiveTitle: this.cmsContent.LongDescription,
                infoIcon: this.cmsUtilService.generateFileSrc(infoIcon.Image),
                settlementAmmountText: planText.SettlementAmount,
                paidAmmountText: planText.PaidAmount,
                balanceDueText: planText.BalanceDue,
                paymentPlanTerms: planText.LongDescription,
                activePlanToolTipdecription: planText.ShortDescription,
                defaultedTitle: this.cmsContent.Children[2].Title,
                defaultedBody: this.cmsContent.Children[2].LongDescription,
                balanceToolTip: null,
                paymentPlanTermsLink: null,
                paymentLateText: this.cmsContent.Children[0].LongDescription,
                paymentLatePopup: this.cmsContent.Children[0]['passedDueTemplate']
            }
        };
        if (this.isEzTagFlow) {
            this.spinnerService.startSpinner();
            this.paymentPlanApi.ezTagSearchPaymentPlans()
                .then(this.processPaymentPlanSearch)
                .then(this.processingPlans)
                .catch(() => { });
        }
        else {
            this.spinnerService.stopSpinner();
            this.processingPlans();
        }
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_0__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.PlateDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_2__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_webApi_service__WEBPACK_IMPORTED_MODULE_3__.WebApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_4__.CmsUtilService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](common_ui__WEBPACK_IMPORTED_MODULE_5__.SpinnerService)); };
GridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["payment-plans-grid-component"]], inputs: { isEzTagFlow: "isEzTagFlow", cmsContent: "cmsContent" }, decls: 7, vars: 4, consts: [[3, "hasGutter"], ["fxLayout", "row", "fxLayoutGap", "30px", "fxLayoutGap.lt-md", "none", "ngClass.lt-md", "lt-md"], ["fxFlex", "445px", "fxFlex.lt-md", "none", "ngClass.lt-md", "u-spacing--widthFill"], [4, "ngFor", "ngForOf"], ["fxFlex", "grow", "fxHide.lt-md", ""], [3, "details", "cmsContent", "isEzTagFlow", 4, "ngIf"], [3, "ngClass"], ["translation-skip", ""], [3, "isActive", "plate"], [3, "details", "cmsContent", "isEzTagFlow"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "page-filled-container", 0)(1, "main", 1)(2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, GridComponent_ng_container_3_Template, 6, 8, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, GridComponent_ng_container_4_Template, 6, 8, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, GridComponent_payment_details_6_Template, 1, 3, "payment-details", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasGutter", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.activePlates);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.inactivePlates);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.planData.selectedPaymentPlan && ctx.hasCurrentSelectedPlan);
    } }, styles: ["[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  min-height: 600px;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]:first-child {\n  overflow-y: scroll;\n  padding-right: 13px;\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  font-family: 'Jost';\n}\n[_nghost-%COMP%]   .plate-spacing[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n[_nghost-%COMP%]   .lt-md[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:first-child {\n  padding-right: 0px;\n}\n[_nghost-%COMP%]   .lt-md[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-left: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxmb250cy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBR1EsaUJBQUE7QUFKUjtBQUNBO0VBT1Esa0JBQUE7RUFDQSxtQkFBQTtBQUxSO0FBSEE7RUFZUSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQ2JKLG1CQUFBO0FEUUo7QUFUQTtFQW1CUSxnQkFBQTtBQVBSO0FBWkE7RUF5Qlksa0JBQUE7QUFWWjtBQWZBO0VBNkJZLGlCQUFBO0FBWFoiLCJmaWxlIjoiZ3JpZC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL2ZvbnRzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcblxuOmhvc3Qge1xuXG4gICAgc2VjdGlvbiB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgIH1cblxuICAgIHNlY3Rpb246Zmlyc3QtY2hpbGQge1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAudC1oZWFkZXItLWZvbnRGYW1pbHkoKTtcbiAgICB9XG5cbiAgICAucGxhdGUtc3BhY2luZyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgLmx0LW1kIHtcblxuICAgICAgICBzZWN0aW9uOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBAcGFnZS1iYXItbWFyZ2luLXN0YXRpYy1sdC1tZDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG4udC1oZWFkZXItLWZvbnRGYW1pbHkoKSB7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LWpvc3Q7XG59XG5cbi50LWJvZHktLWZvbnRGYW1pbHkoKSB7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LW1vbnRzZXJyYXQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ 74406:
/*!*******************************************************!*\
  !*** ./src/paymentplans/grid/planDetail.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanDetailComponent": () => (/* binding */ PlanDetailComponent)
/* harmony export */ });
/* harmony import */ var _paymentDetails_paymentDetails_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../paymentDetails/paymentDetails.component */ 17550);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 98928);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.component */ 35414);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ 33945);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ 62965);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ui/display/cmsContent/cmsContent.component */ 89707);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/safeHtml.pipe */ 49985);














function PlanDetailComponent_section_0_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mat-icon", 12);
} }
function PlanDetailComponent_section_0_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mat-icon", 13);
} }
const _c0 = function (a0, a1) { return { "nextInstallmentAmount": a0, "formatedPassedDue": a1 }; };
function PlanDetailComponent_section_0_cms_content_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "cms-content", 14);
} if (rf & 2) {
    const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("template", ctx_r4.infoIconText(plan_r1))("data", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](2, _c0, plan_r1.nextInstallmentAmount, ctx_r4.getCorrectTimeZoneTime(plan_r1.nextInstallmentDate)));
} }
function PlanDetailComponent_section_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "safeHtml");
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, ctx_r5.setdeafultTooltip()), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
} }
function PlanDetailComponent_section_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "currency", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\u00A0|\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 20)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Bal:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "currency", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", plan_r1.nextInstallmentAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0due\u00A0", ctx_r6.getCorrectTimeZoneTime(plan_r1.nextInstallmentDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", plan_r1.balanceAmount);
} }
function PlanDetailComponent_section_0_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Closed: ", ctx_r7.getCorrectTimeZoneTime(plan_r1.nextInstallmentDate), "");
} }
function PlanDetailComponent_section_0_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Defaulted");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
const _c1 = function (a0) { return { "selectedPlan": a0 }; };
const _c2 = function (a0, a1) { return { "passedDue": a0, "defaulted": a1 }; };
function PlanDetailComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PlanDetailComponent_section_0_Template_section_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13); const plan_r1 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r12.viewDetails(plan_r1, "lt-md"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 2)(2, "div")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Payment Plan Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PlanDetailComponent_section_0_Template_a_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); $event.stopPropagation(); return ctx_r14.updateToggleFlag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, PlanDetailComponent_section_0_mat_icon_8_Template, 1, 0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, PlanDetailComponent_section_0_mat_icon_9_Template, 1, 0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div")(11, "aside");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, PlanDetailComponent_section_0_cms_content_12_Template, 1, 5, "cms-content", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, PlanDetailComponent_section_0_div_13_Template, 2, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, PlanDetailComponent_section_0_div_14_Template, 13, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, PlanDetailComponent_section_0_div_15_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, PlanDetailComponent_section_0_div_16_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const plan_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "plan", plan_r1.paymentPlanId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](11, _c1, ctx_r0.currentSelectedPlan === plan_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](plan_r1.paymentPlanId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](13, _c2, ctx_r0.isPassedDue(plan_r1), plan_r1.status === "Defaulted"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", plan_r1.status === "Open" && ctx_r0.isPassedDue(plan_r1) || plan_r1.status === "Defaulted");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", plan_r1.status === "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", plan_r1.status !== "Defaulted" && ctx_r0.infoIconText(plan_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", plan_r1.status === "Defaulted");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", plan_r1.status === "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", plan_r1.status === "Defaulted");
} }
class PlanDetailComponent {
    //@host decorator was removed for grid due to issue with Ivy. see https://github.com/angular/angular/issues/31539
    constructor(grid, dateWithTimeZoneService, genericRepoService, cmsIds, operatingSystemSnifferService, dialogService, mediaObserver) {
        this.grid = grid;
        this.dateWithTimeZoneService = dateWithTimeZoneService;
        this.genericRepoService = genericRepoService;
        this.cmsIds = cmsIds;
        this.operatingSystemSnifferService = operatingSystemSnifferService;
        this.dialogService = dialogService;
        this.mediaObserver = mediaObserver;
        this.populateCmsContent = (response) => {
            const parsedRes = JSON.parse(response.cmsResponse);
            this.alertContent = parsedRes.ShortDescription;
        };
        this.getCorrectTimeZoneTime = (time) => {
            this.dueDate = this.dateWithTimeZoneService.withoutOffsetToCentral(time, 'MMM Do, YYYY z');
            return this.dueDate;
        };
        this.setCurrentDate = () => {
            this.currentDate = moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD');
        };
        this.isPassedDueDate = (currentDate, dueDate) => new Date(currentDate) > new Date(dueDate);
        this.onClickPlanDesktop = (plan) => {
            if (this.operatingSystemSnifferService.isDesktopOs()) {
                this.grid.onClickGrid(plan.paymentPlanId);
            }
        };
        this.onClickPlanMobile = (plan) => {
            if (!this.operatingSystemSnifferService.isDesktopOs()) {
                this.grid.onClickGrid(plan.paymentPlanId);
            }
        };
        this.viewDetails = (plan, mobileBreakpoint) => {
            const isMobile = this.mediaObserver.isActive(mobileBreakpoint);
            this.grid.selectPlan(plan);
            if (isMobile && !this.warningBoxFlag) {
                this.dialogService.openSliderFilled(_paymentDetails_paymentDetails_component__WEBPACK_IMPORTED_MODULE_0__.PaymentDetailsComponent, {
                    details: plan,
                    cmsContent: this.cms,
                    isEzTagFlow: this.isEzTagFlow
                }, {
                    title: 'Plan Details'
                });
            }
            else if (this.warningBoxFlag) {
                this.updateToggleFlag();
            }
        };
    }
    get currentSelectedPlan() {
        return this.grid.planData.selectedPaymentPlan;
    }
    get cms() {
        return this.grid.cms;
    }
    get isEzTagFlow() {
        return this.grid.isEzTagFlow;
    }
    ngOnInit() {
        this.warningBoxFlag = false;
        this.setCurrentDate();
        const request = {
            ItemId: this.cmsIds.DetailsAlert
        };
        this.genericRepoService.dataFactory.getCmsPageById(request).then(this.populateCmsContent);
    }
    get isFullsite() {
        return this.operatingSystemSnifferService.isDesktopOs();
    }
    isPassedDue(plan) {
        return this.isPassedDueDate(this.currentDate, plan.nextInstallmentDate);
    }
    infoIconText(plan) {
        const isPlanPassedDue = this.isPassedDueDate(this.currentDate, plan.nextInstallmentDate);
        if (plan.status === 'Open' && isPlanPassedDue) {
            //late  
            return this.cms.data.paymentLatePopup;
        }
        return null;
    }
    setdeafultTooltip() {
        var _a;
        return (_a = this.cms.data) === null || _a === void 0 ? void 0 : _a.defaultedBody;
    }
    updateToggleFlag() {
        this.warningBoxFlag = !this.warningBoxFlag;
        return;
    }
}
PlanDetailComponent.ɵfac = function PlanDetailComponent_Factory(t) { return new (t || PlanDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_grid_component__WEBPACK_IMPORTED_MODULE_2__.GridComponent), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.DateWithTimeZoneService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.GenericRepoService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.OperatingSystemSnifferService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.MediaObserver)); };
PlanDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: PlanDetailComponent, selectors: [["plan-detail"]], inputs: { plate: "plate", isActive: "isActive" }, decls: 1, vars: 1, consts: [["ngClass.lt-md", "lt-md", "class", "refresh-2020", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutAlign.lt-md", "space-between center", 3, "ngClass", "id", "click", 4, "ngFor", "ngForOf"], ["ngClass.lt-md", "lt-md", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutAlign.lt-md", "space-between center", 1, "refresh-2020", 3, "ngClass", "id", "click"], ["fxLayout", "column"], ["translation-skip", ""], [3, "ngClass", "click"], ["svgIcon", "alert", 4, "ngIf"], ["svgIcon", "checkmark", "class", "center-align", 4, "ngIf"], [3, "template", "data", 4, "ngIf"], ["class", "default-plan-tooltip", 3, "innerHtml", 4, "ngIf"], ["fxLayout", "row wrap", 4, "ngIf"], [4, "ngIf"], ["fxHide", "", "fxShow.lt-md", "", 1, "selectArrow"], ["svgIcon", "alert"], ["svgIcon", "checkmark", 1, "center-align"], [3, "template", "data"], [1, "default-plan-tooltip", 3, "innerHtml"], ["fxLayout", "row wrap"], ["fxFlex.lt-md", "grow"], [3, "value"], ["fxHide.lt-md", ""], ["fxFlex", "nogrow"]], template: function PlanDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, PlanDetailComponent_section_0_Template, 18, 16, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.plate.paymentPlans);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__.DefaultClassDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_5__.CmsContentComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexDirective, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_6__.CurrencyComponent, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__.DefaultShowHideDirective], pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_7__.SafeHtmlPipe], styles: ["plan-detail {\n  width: 100%;\n}\nplan-detail section {\n  border: 1px solid #f6f6f6;\n  border-radius: 10px;\n  background-color: #f6f6f6;\n  margin: 8px 0px !important;\n  max-height: 110px;\n  padding: 30px 14px;\n  cursor: pointer;\n}\nplan-detail section > div {\n  width: 100%;\n}\nplan-detail section > div > div strong {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 26px;\n  font-family: 'Montserrat';\n}\nplan-detail section > div > div:first-child strong {\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 30px;\n  font-family: 'Jost';\n}\nplan-detail section i.selectArrow {\n  border: 0px;\n  border-right: 2px solid #007aff;\n  border-bottom: 2px solid #007aff;\n  width: 7px;\n  height: 7px;\n  margin-right: 4px;\n  transform: rotate(-45deg);\n}\nplan-detail section a,\nplan-detail section a:hover {\n  text-decoration: none;\n  color: unset;\n}\nplan-detail section a:empty {\n  display: none;\n}\nplan-detail section a {\n  display: inline-block;\n  width: 20.25px;\n  height: 17.21px;\n}\nplan-detail section a img {\n  vertical-align: text-bottom;\n}\nplan-detail section a + div {\n  position: relative;\n}\nplan-detail section a + div > aside {\n  position: absolute;\n  opacity: 0;\n  width: 270px;\n  min-height: 75px;\n  left: calc(50% - 135px);\n  background-color: white;\n  transition: opacity 500ms;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n  padding: 21px 10px;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  font-family: 'Montserrat';\n}\nplan-detail section a.passedDue mat-icon {\n  fill: #fc2125;\n  margin-left: 8px;\n}\nplan-detail section a.defaulted mat-icon {\n  fill: #ff9200;\n  margin-left: 8px;\n}\nplan-detail section a.passedDue + div > aside * {\n  color: #fc2125;\n}\nplan-detail section .default-plan-tooltip * {\n  color: #34353a !important;\n}\nplan-detail section a:hover + div > aside {\n  opacity: 1;\n}\nplan-detail section.selectedPlan {\n  border: 1px solid #007aff;\n  background-color: #e0e0ef;\n}\nplan-detail section.lt-md a + div > aside {\n  width: 100%;\n  left: 0px;\n}\nplan-detail section.lt-md,\nplan-detail section.lt-md.selectedPlan {\n  border: 0px;\n  border-radius: 0px;\n  background-color: #f6f6f6;\n  margin: 4px 0px;\n  padding: 18px 15px 22px 15px;\n}\nplan-detail .center-align {\n  vertical-align: text-bottom;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYW5EZXRhaWwubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxmb250cy5sZXNzIiwiLi5cXC4uXFxzdHlsZXNcXHRoZW1lXFxtaXhpbnNcXHRhYmxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxXQUFBO0FBRko7QUFDQTtFQUlRLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFGUjtBQUlRO0VBQ0ksV0FBQTtBQUZaO0FBS1E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQ2RSLHlCQUFBO0FEWUo7QUFNUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VDekJSLG1CQUFBO0FEc0JKO0FBdkJBO0VBK0JZLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBTFo7QUFoQ0E7O0VBMENZLHFCQUFBO0VBQ0EsWUFBQTtBQU5aO0FBckNBO0VBK0NZLGFBQUE7QUFQWjtBQXhDQTtFQW1EWSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBUlo7QUE3Q0E7RUF5RFksMkJBQUE7QUFUWjtBQWhEQTtFQTZEWSxrQkFBQTtBQVZaO0FBbkRBO0VBaUVZLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQ3ZFUix5QkFBQTtBRDZESjtBQWxFQTtFQWlGWSxhQUFBO0VBQ0EsZ0JBQUE7QUFaWjtBQXRFQTtFQXNGWSxhQUFBO0VBQ0EsZ0JBQUE7QUFiWjtBQTFFQTtFQTJGWSxjQUFBO0FBZFo7QUE3RUE7RUErRlkseUJBQUE7QUFmWjtBQWhGQTtFQW1HWSxVQUFBO0FBaEJaO0FBbkZBO0VBd0dRLHlCQUFBO0VFdkZKLHlCQUFBO0FGc0VKO0FBdkZBO0VBOEdZLFdBQUE7RUFDQSxTQUFBO0FBcEJaO0FBM0ZBOztFQXFIUSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQXRCUjtBQW5HQTtFQTZIUSwyQkFBQTtBQXZCUiIsImZpbGUiOiJwbGFuRGV0YWlsLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcblxucGxhbi1kZXRhaWwge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgc2VjdGlvbiB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIEB3aWxkLXNhbmQtZ3JheTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdpbGQtc2FuZC1ncmF5O1xuICAgICAgICBtYXJnaW46IDhweCAwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogMTEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMTRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICYgPiBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAmID4gZGl2ID4gZGl2IHN0cm9uZyB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgLnQtYm9keS0tZm9udEZhbWlseSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiA+IGRpdiA+IGRpdjpmaXJzdC1jaGlsZCBzdHJvbmcge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgLnQtaGVhZGVyLS1mb250RmFtaWx5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpLnNlbGVjdEFycm93IHtcbiAgICAgICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgQGF6dXJlLXJhZGlhbmNlLWJsdWU7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgQGF6dXJlLXJhZGlhbmNlLWJsdWU7XG4gICAgICAgICAgICB3aWR0aDogN3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICBhLFxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB1bnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGE6ZW1wdHkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDIwLjI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE3LjIxcHg7XG4gICAgICAgIH1cblxuICAgICAgICBhIGltZyB7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgICAgIH1cblxuICAgICAgICBhICsgZGl2IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGEgKyBkaXYgPiBhc2lkZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjA7XG4gICAgICAgICAgICB3aWR0aDogMjcwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA3NXB4O1xuICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxMzVweCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXM7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgICAgICAgcGFkZGluZzogMjFweCAxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgLnQtYm9keS0tZm9udEZhbWlseSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYS5wYXNzZWREdWUgbWF0LWljb24ge1xuICAgICAgICAgICAgZmlsbDogQHRvcmNoLXJlZDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICBhLmRlZmF1bHRlZCBtYXQtaWNvbiB7XG4gICAgICAgICAgICBmaWxsOiBAcGl6YXp6LWdvbGQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYS5wYXNzZWREdWUgKyBkaXYgPiBhc2lkZSAqIHtcbiAgICAgICAgICAgIGNvbG9yOiBAdG9yY2gtcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlZmF1bHQtcGxhbi10b29sdGlwICoge1xuICAgICAgICAgICAgY29sb3I6IEB0dW5hLWdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGE6aG92ZXIgKyBkaXYgPiBhc2lkZSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLjA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWN0aW9uLnNlbGVjdGVkUGxhbiB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIEBhenVyZS1yYWRpYW5jZS1ibHVlO1xuICAgICAgICAudC10YWJsZV9fZW1waGFzaXMtLWJhY2tncm91bmRDb2xvcihAdGhlbWUtbGlnaHQpO1xuICAgIH1cblxuICAgIHNlY3Rpb24ubHQtbWQge1xuICAgICAgICBhICsgZGl2ID4gYXNpZGUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWN0aW9uLmx0LW1kLFxuICAgIHNlY3Rpb24ubHQtbWQuc2VsZWN0ZWRQbGFuIHtcbiAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdpbGQtc2FuZC1ncmF5O1xuICAgICAgICBtYXJnaW46IDRweCAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDE4cHggMTVweCAyMnB4IDE1cHg7XG4gICAgfVxuXG4gICAgLmNlbnRlci1hbGlnbiB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICB9XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cblxuLnQtaGVhZGVyLS1mb250RmFtaWx5KCkge1xuICAgIGZvbnQtZmFtaWx5OiBAZm9udC1qb3N0O1xufVxuXG4udC1ib2R5LS1mb250RmFtaWx5KCkge1xuICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbkB0YWJsZV9faGVhZGVyLS1iYWNrZ3JvdW5kQ29sb3ItbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkB0YWJsZV9fYm9keS0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAd2lsZC1zYW5kLWdyYXk7XG5AdGFibGVfX2VtcGhhc2lzLS1iYWNrZ3JvdW5kQ29sb3ItbGlnaHQ6IEBzbnVmZi1ncmF5O1xuXG5cbi50LXRhYmxlX19oZWFkZXItLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICd0YWJsZV9faGVhZGVyLS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXRhYmxlX19ib2R5LS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAndGFibGVfX2JvZHktLWJhY2tncm91bmRDb2xvci1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtdGFibGVfX2VtcGhhc2lzLS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAndGFibGVfX2VtcGhhc2lzLS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 75731:
/*!**************************************************************!*\
  !*** ./src/paymentplans/landing/invoiceExample.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceExampleComponent": () => (/* binding */ InvoiceExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var cms_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cms/services */ 46693);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 63277);





function InvoiceExampleComponent_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](section_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", section_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
class InvoiceExampleComponent {
    constructor(dialogRef, cmsUtilityService) {
        this.dialogRef = dialogRef;
        this.cmsUtilityService = cmsUtilityService;
        const pageData = dialogRef.data.pageData;
        const reverseOrder = dialogRef.data.reverseOrder;
        this.header = pageData.ShortDescription;
        this.sections = pageData.Children.map(c => ({
            message: c.ShortDescription,
            url: cmsUtilityService.generateFileSrc(c.Image),
            order: c['order']
        })).sort((a, b) => (a.order - b.order) * (reverseOrder ? -1 : 1));
    }
}
InvoiceExampleComponent.ɵfac = function InvoiceExampleComponent_Factory(t) { return new (t || InvoiceExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_0__.DialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_1__.CmsUtilService)); };
InvoiceExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InvoiceExampleComponent, selectors: [["paymentplan-invoice-example"]], decls: 4, vars: 2, consts: [[4, "ngFor", "ngForOf"], [3, "src"]], template: function InvoiceExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, InvoiceExampleComponent_section_3_Template, 4, 2, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sections);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  width: 65px;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  font-family: 'Jost';\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  font-family: 'Jost';\n  margin-bottom: 0px;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 8px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludm9pY2VFeGFtcGxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFHUSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUpSO0FBREE7RUFVUSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQU5SO0FBUkE7RUFrQlEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVBSO0FBZEE7RUF5QlEsZ0JBQUE7QUFSUjtBQWpCQTtFQTZCUSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFUUiIsImZpbGUiOiJpbnZvaWNlRXhhbXBsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy9mb250cy5sZXNzJztcblxuOmhvc3Qge1xuXG4gICAgbWF0LWRpdmlkZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB3aWR0aDogQHdpZHRoLWRpdmlkZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG5cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LWpvc3Q7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LWZhbWlseTogQGZvbnQtam9zdDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH1cblxuICAgIHNlY3Rpb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 18597:
/*!*******************************************************!*\
  !*** ./src/paymentplans/landing/landing.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _invoiceExample_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoiceExample.component */ 75731);
/* harmony import */ var common_upgrades__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/upgrades */ 41034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var paymentplans_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! paymentplans/frame/frame.component */ 50985);
/* harmony import */ var authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! authentication/authenticationService/authentication.service */ 44722);
/* harmony import */ var paymentplans_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! paymentplans/services */ 82500);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var paymentplans_services_webApi_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! paymentplans/services/webApi.service */ 42423);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/services/webStorageService/webStorage.service */ 38898);
/* harmony import */ var _constants_webstorage_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/webstorage.constants */ 60450);
/* harmony import */ var _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/ui/containers/page/pageFilled.component */ 95556);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 73067);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);


























function LandingComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", item_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r8.stateCode);
  }
}

function LandingComponent_aside_21_ng_container_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Please enter a valid license plate number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function LandingComponent_aside_21_ng_container_1_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Please enter a valid license plate number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function LandingComponent_aside_21_ng_container_1_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Please enter a valid license plate number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function LandingComponent_aside_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, LandingComponent_aside_21_ng_container_1_p_1_Template, 2, 0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, LandingComponent_aside_21_ng_container_1_p_2_Template, 2, 0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, LandingComponent_aside_21_ng_container_1_p_3_Template, 2, 0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitch", error_r9.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", "pattern");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", "maxlength");
  }
}

function LandingComponent_aside_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "aside");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, LandingComponent_aside_21_ng_container_1_Template, 4, 4, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](9);

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", _r0.submitted);
  }
}

function LandingComponent_aside_29_ng_container_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Please enter a valid invoice number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function LandingComponent_aside_29_ng_container_1_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Please enter a valid invoice number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function LandingComponent_aside_29_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, LandingComponent_aside_29_ng_container_1_p_1_Template, 2, 0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, LandingComponent_aside_29_ng_container_1_p_2_Template, 2, 0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitch", error_r15.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", "pattern");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", "required");
  }
}

function LandingComponent_aside_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "aside");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, LandingComponent_aside_29_ng_container_1_Template, 3, 3, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](9);

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", _r0.submitted);
  }
}

function LandingComponent_aside_41_ng_container_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Please enter a valid payment plan number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function LandingComponent_aside_41_ng_container_1_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Please enter a valid payment plan number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function LandingComponent_aside_41_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, LandingComponent_aside_41_ng_container_1_p_1_Template, 2, 0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, LandingComponent_aside_41_ng_container_1_p_2_Template, 2, 0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitch", error_r20.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", "pattern");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", "required");
  }
}

function LandingComponent_aside_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "aside", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, LandingComponent_aside_41_ng_container_1_Template, 3, 3, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](9);

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", _r0.submitted);
  }
}

class LandingComponent {
  //@host decorator was removed for parent due to issue with Ivy. see https://github.com/angular/angular/issues/31539
  constructor(parent, authService, dataService, responseErrorService, paymentPlanApi, state, dialogService, webStorage, webStorageConst, environmentConfig) {
    this.parent = parent;
    this.authService = authService;
    this.dataService = dataService;
    this.responseErrorService = responseErrorService;
    this.paymentPlanApi = paymentPlanApi;
    this.state = state;
    this.dialogService = dialogService;
    this.webStorage = webStorage;
    this.webStorageConst = webStorageConst;
    this.environmentConfig = environmentConfig;
  } //parent wraps


  get isEzTagFlow() {
    return this.parent.isEzTagFlow;
  }

  get Title() {
    return this.cmsPage.ShortDescription;
  }

  get Description() {
    return this.cmsPage.LongDescription;
  }

  ngOnInit() {
    var _a, _b;

    this.parent.stepNum = 0;
    this.parent.scrollToTop();
    const plateData = this.webStorage.getValue(this.webStorageConst.vehicleSelected);

    if (this.environmentConfig.isMergeMATandVioOn && plateData != null) {
      this.licensePlateNumber = (_a = plateData.number) !== null && _a !== void 0 ? _a : '';
      const usState = (_b = plateData.state) !== null && _b !== void 0 ? _b : '';
      this.selectedState = usState ? this.USstates.find(x => x.stateCode === usState) : this.USstates.find(x => x.stateCode === 'TX');
      this.webStorage.removeEntry(this.webStorageConst.vehicleSelected);
    }

    if (!this.environmentConfig.isMergeMATandVioOn || plateData === null) {
      this.licensePlateNumber = '';
      this.selectedState = this.USstates.find(x => x.stateCode === 'TX');
    }

    if (this.authService.isAuthenticated()) {
      return;
    }
  }

  findViolations(nextState) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const fullRequest = {
        InvoiceNumber: _this.invoiceNumber ? '' + _this.invoiceNumber : null,
        LicenseState: _this.selectedState.stateCode,
        LicensePlate: _this.licensePlateNumber,
        PaymentPlanId: _this.paymentPlanId ? '' + _this.paymentPlanId : null
      };
      const response = yield _this.paymentPlanApi.violationsPaymentPlansSearch(fullRequest);

      if (!_this.responseErrorService.isErrorFree(response)) {
        return;
      }

      _this.dataService.setPaymentPlans(response, _this.isEzTagFlow);

      yield _this.state.go(nextState);
    })();
  } //refresh


  openInvoiceExample(reverseOrder) {
    this.dialogService.openSliderCentered(_invoiceExample_component__WEBPACK_IMPORTED_MODULE_1__.InvoiceExampleComponent, {
      pageData: this.cmsInvoiceExample,
      reverseOrder
    });
  }

}

LandingComponent.ɵfac = function LandingComponent_Factory(t) {
  return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](paymentplans_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](paymentplans_services__WEBPACK_IMPORTED_MODULE_5__.PlateDataService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](paymentplans_services_webApi_service__WEBPACK_IMPORTED_MODULE_7__.WebApiService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_16__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_8__.WebStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_constants_webstorage_constants__WEBPACK_IMPORTED_MODULE_9__.WebStorageConst), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](common_upgrades__WEBPACK_IMPORTED_MODULE_2__.ENVIRON_CONFIG));
};

LandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: LandingComponent,
  selectors: [["payment-plans-landing-component"]],
  inputs: {
    selectedState: "selectedState",
    licensePlateNumber: "licensePlateNumber",
    paymentPlanId: "paymentPlanId",
    invoiceNumber: "invoiceNumber",
    USstates: "USstates",
    cmsPopup: "cmsPopup",
    cmsPage: "cmsPage",
    closeImage: "closeImage",
    cmsInvoiceExample: "cmsInvoiceExample"
  },
  decls: 50,
  vars: 23,
  consts: [[1, "u-spacing__firstHeaderToTitle--marginTop"], [1, "u-spacing__divider--marginTopBottom"], ["fxLayout", "column", "validation-focus", "", "novalidate", "", 1, "u-spacing__fieldToSection--marginTop"], ["LandingForm", "ngForm"], ["fxLayout", "row", "fxLayoutGap", "20px"], ["fxFlex", "none"], ["translation-skip", "", "id", "selectedState", "tabindex", "1", 3, "value", "disableOptionCentering", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "auto", "ngClass.gt-sm", "plate-input-width", 3, "error-check"], ["for", "licensePlate"], ["type", "text", "name", "licensePlate", "pattern", "^[a-zA-Z0-9]{1,10}$", "id", "licensePlate", "tabindex", "2", "maxlength", "10", "required", "", 3, "ngModel", "ngModelChange"], ["licensePlateInput", "ngModel"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayout.lt-md", "column", "fxLayoutAlign.lt-md", "start center", 1, "u-spacing__fieldToField--marginTop"], ["fxFlex", "grow 100%", "fxFlex.lt-md", "auto", "ngClass.gt-sm", "invoice-number-container", "ngClass.lt-md", "u-spacing--widthFill", 3, "error-check"], ["type", "text", "id", "invoice", "pattern", "^[0-9]+$", "name", "invoice", "tabindex", "3", 3, "ngModel", "required", "ngModelChange"], ["invoiceNumberInput", "ngModel"], ["id", "findInvoiceLnk", 3, "click"], ["ngClass.gt-sm", "or-separator-spacing-desktop", "ngClass.lt-md", "or-separator-spacing-mobile", "fxFlex", "none", "fxFlex.lt-md", "auto", 1, "or-separator"], ["fxFlex", "grow 100%", "fxFlex.lt-md", "auto", "ngClass.gt-sm", "payment-plan-number-container", "ngClass.lt-md", "u-spacing--widthFill", 3, "error-check"], ["for", "invoice"], ["type", "text", "id", "payPlanIdTxt", "pattern", "^[0-9]{1,10}$", "name", "paymentPlans", "tabindex", "3", 3, "ngModel", "required", "ngModelChange"], ["PaymentPlanNumberInput", "ngModel"], ["class", "error-messages", 4, "ngFor", "ngForOf"], [3, "click"], [1, "u-spacing__buttonToField--marginTop"], [3, "reverseOrder", "next"], ["wizard-next", ""], [3, "value"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], ["class", "help-block", 4, "ngSwitchCase"], [1, "help-block"], [1, "error-messages"]],
  template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "page-filled-container")(1, "section", 0)(2, "header")(3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "mat-divider", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "article");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "form", 2, 3)(10, "div", 4)(11, "section", 5)(12, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, "STATE");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "mat-select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("valueChange", function LandingComponent_Template_mat_select_valueChange_14_listener($event) {
        return ctx.selectedState = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](15, LandingComponent_mat_option_15_Template, 2, 2, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "section", 8)(17, "mat-label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, "LICENSE PLATE NUMBER");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function LandingComponent_Template_input_ngModelChange_19_listener($event) {
        return ctx.licensePlateNumber = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](21, LandingComponent_aside_21_Template, 2, 1, "aside", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](22, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "div", 13)(24, "section", 14)(25, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, "INVOICE NUMBER");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "input", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function LandingComponent_Template_input_ngModelChange_27_listener($event) {
        return ctx.invoiceNumber = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](29, LandingComponent_aside_29_Template, 2, 1, "aside", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](30, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "div")(32, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_32_listener() {
        return ctx.openInvoiceExample(true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33, "Need help finding the information on your invoice?");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](35, "OR");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "section", 19)(37, "mat-label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](38, "PAYMENT PLAN NUMBER");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](39, "input", 21, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function LandingComponent_Template_input_ngModelChange_39_listener($event) {
        return ctx.paymentPlanId = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](41, LandingComponent_aside_41_Template, 2, 1, "aside", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](42, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "div")(44, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_44_listener() {
        return ctx.openInvoiceExample(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](45, "The Payment Plan Number was given upon creation of your Payment Plan");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "div", 25)(47, "wizard-ui", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("next", function LandingComponent_Template_wizard_ui_next_47_listener($event) {
        return ctx.findViolations($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](49, "SEARCH PAYMENT PLANS");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](20);

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](28);

      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](40);

      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.Description);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", ctx.selectedState)("disableOptionCentering", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.USstates);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("error-check", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.licensePlateNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](22, 17, _r2.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("error-check", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.invoiceNumber)("required", !ctx.paymentPlanId);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](30, 19, _r4.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("error-check", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.paymentPlanId)("required", !ctx.invoiceNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](42, 21, _r6.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("reverseOrder", true);
    }
  },
  directives: [_common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_10__.PageFilledContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutDirective, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_11__.FocusDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatOption, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__.DefaultClassDirective, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_12__.ErrorCheckDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchCase, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutAlignDirective, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_13__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_14__.WizardNextDirective],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.KeyValuePipe],
  styles: ["[_nghost-%COMP%]   .or-separator[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: 'Jost';\n  font-size: 15px;\n  font-weight: 700;\n  width: 125px;\n}\n[_nghost-%COMP%]   .or-separator-spacing-desktop[_ngcontent-%COMP%] {\n  margin-top: 42px;\n}\n[_nghost-%COMP%]   .or-separator-spacing-mobile[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   mat-select[_ngcontent-%COMP%] {\n  width: 100px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n[_nghost-%COMP%]   .plate-input-width[_ngcontent-%COMP%] {\n  max-width: 370px;\n  min-width: 225px;\n}\n[_nghost-%COMP%]   .invoice-number-container[_ngcontent-%COMP%] {\n  max-width: 445px;\n}\n[_nghost-%COMP%]   .payment-plan-number-container[_ngcontent-%COMP%] {\n  max-width: 470px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxmb250cy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBR1Esa0JBQUE7RUNGSixtQkFBQTtFRElJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFKUjtBQUhBO0VBV1EsZ0JBQUE7QUFMUjtBQU5BO0VBZVEsZ0JBQUE7RUFDQSxtQkFBQTtBQU5SO0FBVkE7RUFzQlEsWUFBQTtBQVRSO0FBYkE7RUEwQlEsV0FBQTtBQVZSO0FBaEJBO0VBOEJRLGVBQUE7QUFYUjtBQW5CQTtFQW9DUSxnQkFBQTtFQUNBLGdCQUFBO0FBZFI7QUF2QkE7RUF5Q1EsZ0JBQUE7QUFmUjtBQTFCQTtFQTZDUSxnQkFBQTtBQWhCUiIsImZpbGUiOiJsYW5kaW5nLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcblxuOmhvc3Qge1xuXG4gICAgLm9yLXNlcGFyYXRvciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLnQtaGVhZGVyLS1mb250RmFtaWx5KCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgd2lkdGg6IDEyNXB4O1xuICAgIH1cblxuICAgIC5vci1zZXBhcmF0b3Itc3BhY2luZy1kZXNrdG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNDJweDtcbiAgICB9XG5cbiAgICAub3Itc2VwYXJhdG9yLXNwYWNpbmctbW9iaWxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICBAc2VsZWN0LXN0YXRlLXdpZHRoOiAxMDBweDtcblxuICAgIG1hdC1zZWxlY3Qge1xuICAgICAgICB3aWR0aDogQHNlbGVjdC1zdGF0ZS13aWR0aDtcbiAgICB9XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgIEBpbnB1dC1tYXgtd2lkdGg6IDM3MHB4O1xuXG4gICAgLnBsYXRlLWlucHV0LXdpZHRoIHtcbiAgICAgICAgbWF4LXdpZHRoOiBAaW5wdXQtbWF4LXdpZHRoO1xuICAgICAgICBtaW4td2lkdGg6IDIyNXB4O1xuICAgIH1cblxuICAgIC5pbnZvaWNlLW51bWJlci1jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDQ0NXB4O1xuICAgIH1cblxuICAgIC5wYXltZW50LXBsYW4tbnVtYmVyLWNvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogNDcwcHg7XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbi50LWhlYWRlci0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtam9zdDtcbn1cblxuLnQtYm9keS0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 99997:
/*!************************************!*\
  !*** ./src/paymentplans/module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPlansModule": () => (/* binding */ PaymentPlansModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @uirouter/angular */ 99305);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pipes/module */ 20445);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout */ 45046);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _paymentDetails_paymentDetails_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paymentDetails/paymentDetails.component */ 17550);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frame/frame.component */ 50985);
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/landing.component */ 18597);
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid/grid.component */ 35414);
/* harmony import */ var _grid_planDetail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid/planDetail.component */ 74406);
/* harmony import */ var _selectPayment_selectPayment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectPayment/selectPayment.component */ 54346);
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./confirm/confirm.component */ 27451);
/* harmony import */ var _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./receipt/receipt.component */ 55201);
/* harmony import */ var _landing_invoiceExample_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./landing/invoiceExample.component */ 75731);
/* harmony import */ var storefront_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! storefront/module */ 89550);
/* harmony import */ var validation_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! validation/module */ 26186);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services */ 82500);
/* harmony import */ var _services_webApi_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/webApi.service */ 42423);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./constants */ 33945);
/* harmony import */ var hybrid_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! hybrid/module */ 98730);
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./routing */ 66274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/ui/containers/page/pageFilled.component */ 95556);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);










//payment plan components






















const routesWithComponents = _routing__WEBPACK_IMPORTED_MODULE_17__.routes.map(route => {
    const componentDictionary = {
        [_constants__WEBPACK_IMPORTED_MODULE_15__.stateNames.Root]: _frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.FrameComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_15__.stateNames.Landing]: _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__.LandingComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_15__.stateNames.Grid]: _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_15__.stateNames.MakePayment]: _selectPayment_selectPayment_component__WEBPACK_IMPORTED_MODULE_7__.SelectPaymentComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_15__.stateNames.Confirm]: _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__.ConfirmComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_15__.stateNames.Receipt]: _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_9__.ReceiptComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_15__.stateNames.AccountOverview]: _frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.FrameComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_15__.stateNames.AccountOverviewSummary]: _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_15__.stateNames.AccountOverviewSelectPayment]: _selectPayment_selectPayment_component__WEBPACK_IMPORTED_MODULE_7__.SelectPaymentComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_15__.stateNames.AccountOverviewConfirm]: _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__.ConfirmComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_15__.stateNames.AccountOverviewReceipt]: _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_9__.ReceiptComponent
    };
    return {
        ...route,
        component: componentDictionary[route.name]
    };
});
class PaymentPlansModule {
}
PaymentPlansModule.ɵfac = function PaymentPlansModule_Factory(t) { return new (t || PaymentPlansModule)(); };
PaymentPlansModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: PaymentPlansModule });
PaymentPlansModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_20__.CurrencyPipe, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_20__.CurrencyPipe },
        { provide: _services__WEBPACK_IMPORTED_MODULE_13__.StateService, useClass: _services__WEBPACK_IMPORTED_MODULE_13__.StateService },
        { provide: _constants__WEBPACK_IMPORTED_MODULE_15__.PaymentPlansStateNames, useValue: _constants__WEBPACK_IMPORTED_MODULE_15__.stateNames },
        { provide: _constants__WEBPACK_IMPORTED_MODULE_15__.CmsIds, useValue: _constants__WEBPACK_IMPORTED_MODULE_15__.cmsIds },
        { provide: _constants__WEBPACK_IMPORTED_MODULE_15__.PaymentPlanRoutes, useValue: _constants__WEBPACK_IMPORTED_MODULE_15__.urlPaths },
        { provide: _services__WEBPACK_IMPORTED_MODULE_13__.PlateDataService, useClass: _services__WEBPACK_IMPORTED_MODULE_13__.PlateDataService },
        { provide: _constants__WEBPACK_IMPORTED_MODULE_15__.FeatureToggles, useValue: _constants__WEBPACK_IMPORTED_MODULE_15__.featureToggles },
        { provide: _services_webApi_service__WEBPACK_IMPORTED_MODULE_14__.WebApiService, useClass: _services_webApi_service__WEBPACK_IMPORTED_MODULE_14__.WebApiService }
    ], imports: [[
            pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_21__.UIRouterModule.forChild({ states: routesWithComponents }),
            common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule, storefront_module__WEBPACK_IMPORTED_MODULE_11__.StorefrontModule,
            hybrid_module__WEBPACK_IMPORTED_MODULE_16__.HybridModule,
            validation_module__WEBPACK_IMPORTED_MODULE_12__.ValidationModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__.FlexLayoutModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormFieldModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__.MatDividerModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](PaymentPlansModule, { declarations: [_paymentDetails_paymentDetails_component__WEBPACK_IMPORTED_MODULE_2__.PaymentDetailsComponent, _frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.FrameComponent, _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__.LandingComponent, _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent,
        _grid_planDetail_component__WEBPACK_IMPORTED_MODULE_6__.PlanDetailComponent, _selectPayment_selectPayment_component__WEBPACK_IMPORTED_MODULE_7__.SelectPaymentComponent,
        _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__.ConfirmComponent, _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_9__.ReceiptComponent, _landing_invoiceExample_component__WEBPACK_IMPORTED_MODULE_10__.InvoiceExampleComponent], imports: [pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _uirouter_angular__WEBPACK_IMPORTED_MODULE_21__.UIRouterModule, common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule, storefront_module__WEBPACK_IMPORTED_MODULE_11__.StorefrontModule,
        hybrid_module__WEBPACK_IMPORTED_MODULE_16__.HybridModule,
        validation_module__WEBPACK_IMPORTED_MODULE_12__.ValidationModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__.FlexLayoutModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormFieldModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__.MatDividerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetComponentScope"](_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent, [_common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_18__.PageFilledContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__.DefaultLayoutGapDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_29__.DefaultClassDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _grid_planDetail_component__WEBPACK_IMPORTED_MODULE_6__.PlanDetailComponent, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_29__.DefaultShowHideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _paymentDetails_paymentDetails_component__WEBPACK_IMPORTED_MODULE_2__.PaymentDetailsComponent], []);


/***/ }),

/***/ 17550:
/*!*********************************************************************!*\
  !*** ./src/paymentplans/paymentDetails/paymentDetails.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailsComponent": () => (/* binding */ PaymentDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _common_ui_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/ui/progress-bar/progress-bar.component */ 62022);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ui/display/cmsContent/cmsContent.component */ 89707);













const _c0 = function () { return { "text-align": "right" }; };
const _c1 = function () { return { "text-align": "left", "padding-top": "16px" }; };
function PaymentDetailsComponent_ng_container_14_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "AutoPay:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c0))("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.autoPayInfo.autoPayData);
} }
function PaymentDetailsComponent_ng_container_14_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "article", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r4.cmsContent.data.paymentLateText, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function PaymentDetailsComponent_ng_container_14_wizard_ui_59_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "wizard-ui", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("next", function PaymentDetailsComponent_ng_container_14_wizard_ui_59_Template_wizard_ui_next_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r6.continueWithPayment($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "MAKE A PAYMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
const _c2 = function (a0) { return { "paymentPastDue": a0 }; };
const _c3 = function (a0) { return { "media-buttons-faded": a0 }; };
function PaymentDetailsComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "section")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Plan Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Agency: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "section", 9)(9, "div", 10)(10, "div", 11)(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Next installment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 12)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Installment amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "currency", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, PaymentDetailsComponent_ng_container_14_div_20_Template, 5, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, PaymentDetailsComponent_ng_container_14_div_21_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "section", 16)(23, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Payment Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 18)(26, "div", 19)(27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "currency", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 16)(32, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "mat-icon", 21)(34, "mat-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div")(36, "aside", 16)(37, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "currency", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "currency", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "strong", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "strong", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "currency", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "strong", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "currency", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](53, "progress-bar", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 26)(55, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PaymentDetailsComponent_ng_container_14_Template_a_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r8.downloadPdf(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, PaymentDetailsComponent_ng_container_14_wizard_ui_59_Template, 3, 0, "wizard-ui", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.details.mobileAgency);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](22, _c2, ctx_r0.isPastDue));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.formattedDueDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](24, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r0.details.nextInstallmentAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.autoPayInfo.autoPayFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isPastDue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r0.cmsContent.data.settlementAmmountText, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r0.details.settlementAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r0.cmsContent.data.balanceDueText, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r0.cmsContent.data.settlementAmmountText, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r0.details.settlementAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r0.cmsContent.data.paidAmmountText, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r0.details.paidAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r0.cmsContent.data.balanceDueText, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r0.details.balanceAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r0.details.balanceAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", ctx_r0.isPastDue && "#FC2125")("progress", ctx_r0.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](25, _c3, ctx_r0.pdfProcessing));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.cmsContent.pdf.pdfDownloadText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.details.status === "Open");
} }
function PaymentDetailsComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "cms-content", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 35)(5, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PaymentDetailsComponent_ng_template_15_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r10.downloadPdf(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r2.cmsContent.data.defaultedTitle, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("template", ctx_r2.cmsContent.data.defaultedBody)("data", ctx_r2.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c3, ctx_r2.pdfProcessing));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r2.cmsContent.pdf.pdfDownloadText, " ");
} }
class PaymentDetailsComponent {
    constructor(dateWithTimeZoneService, operatingSystemSnifferService, stateService, dialogRef, downloadService) {
        this.dateWithTimeZoneService = dateWithTimeZoneService;
        this.operatingSystemSnifferService = operatingSystemSnifferService;
        this.stateService = stateService;
        this.dialogRef = dialogRef;
        this.downloadService = downloadService;
        this.pdfProcessing = false;
        this.downloadPdf = () => {
            const url = this.isEzTagFlow ? 'api/sessions/Pdf/GetPaymentPlanAccountPdf' : 'api/sessions/Pdf/GetPaymentPlanPdf';
            this.downloadService.download(url, true, {
                paymentPlanId: this.details.paymentPlanId
            }, {
                busy: this.cmsContent.pdf.pdfProcessingMesssage,
                failure: this.cmsContent.pdf.pdfError,
                success: this.cmsContent.pdf.pdfDownloadedMessage
            }, 100000);
        };
        if (dialogRef) {
            this.details = dialogRef.data.details;
            this.cmsContent = dialogRef.data.cmsContent;
            this.isEzTagFlow = dialogRef.data.isEzTagFlow;
        }
    }
    get autoPayInfo() {
        return this.checkAutoPay();
    }
    get isFullsite() {
        return this.operatingSystemSnifferService.isDesktopOs();
    }
    get progress() {
        return this.details ? Math.round(100 * (this.details.paidAmount / this.details.settlementAmount)) : 0;
    }
    get isPastDue() {
        if (!this.details || !this.details.nextInstallmentDate) {
            return false;
        }
        const today = new Date();
        const dueDate = new Date(this.details.nextInstallmentDate);
        return new Date(today.getFullYear(), today.getMonth(), today.getDate()) > dueDate
            && this.details.nextInstallmentAmount > 0;
    }
    get formattedDueDate() {
        if (this.details && this.details.status === 'Closed') {
            return 'None';
        }
        if (!this.details || !this.details.nextInstallmentDate) {
            return 'None';
        }
        const formattedDate = this.dateWithTimeZoneService.withoutOffsetToCentral(this.details.nextInstallmentDate, 'MMM Do, YYYY z');
        if (formattedDate === 'Invalid date') {
            return 'None';
        }
        return formattedDate;
    }
    checkAutoPay() {
        if (this.details && this.details.billingMethod && this.details.billingMethod.creditCardPaymentMethod != null) {
            return {
                autoPayFlag: true,
                autoPayData: '****' + this.details.billingMethod.creditCardPaymentMethod.cardNbr.slice(-4)
            };
        }
        else if (this.details && this.details.billingMethod && this.details.billingMethod.eftPaymentMethod != null) {
            return {
                autoPayFlag: true,
                autoPayData: '****' + this.details.billingMethod.eftPaymentMethod.accountNumber.slice(-4)
            };
        }
        return {
            autoPayFlag: false,
            autoPayData: ''
        };
    }
    ;
    continueWithPayment(nextState) {
        this.stateService
            .go(nextState)
            .then(() => this.dialogRef && this.dialogRef.close());
    }
}
PaymentDetailsComponent.ɵfac = function PaymentDetailsComponent_Factory(t) { return new (t || PaymentDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_0__.DateWithTimeZoneService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_0__.OperatingSystemSnifferService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_7__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_0__.DialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_0__.DownloadService)); };
PaymentDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PaymentDetailsComponent, selectors: [["payment-details"]], inputs: { details: "details", cmsContent: "cmsContent", isEzTagFlow: "isEzTagFlow" }, decls: 17, vars: 5, consts: [["ngClass.lt-md", "lt-md", 1, "refresh-2020"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "", "fxShow", "", "fxHide.lt-md", ""], ["translation-skip", ""], ["fxFlex", "", "fxHide", "", "fxShow.lt-md", ""], ["fxShow", "", "fxHide.lt-md", "", 2, "text-align", "right"], [4, "ngIf", "ngIfElse"], ["defaulted", ""], ["fxHide", "", "fxShow.lt-md", ""], ["fxLayout", "column", 3, "ngClass"], ["fxLayout", "row", "fxLayoutGap", "14px", "fxLayout.lt-md", "row wrap", "fxLayoutGap.lt-md", "0px"], ["fxFlex", "0 0 160px", "fxFlex.lt-md", "0 0 50%", "fxLayout", "column"], ["fxFlex", "1 1 160px", "fxFlex.lt-md", "0 0 50%", "fxLayout", "column", 3, "ngStyle.lt-md"], [3, "value"], ["fxFlex", "1 1 100%", "fxFlex.lt-md", "2 0 100%", "fxLayout", "column", 3, "ngStyle", "ngStyle.lt-md", 4, "ngIf"], [4, "ngIf"], ["fxLayout", "column"], [2, "padding-bottom", "17px"], ["fxLayout", "row", "fxLayoutAlign", "end"], ["fxFlex", "", "fxLayout", "column"], [3, "innerHTML"], ["svgIcon", "information"], [2, "padding-left", "4px", "text-align", "right", 3, "innerHTML"], ["fxLayout", "row", "fxLayoutAlign", "space-between stretch"], [2, "text-align", "right"], [3, "color", "progress"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutAlign.gt-md", "center center", 2, "padding", "0 16px"], ["fxFlex", "grow", 3, "ngClass", "click"], ["src", "/Content/icons/pdf.gif", 2, "vertical-align", "text-top", "padding-right", "8px"], ["fxFlex", "294px", "fxFlex.lt-md", "", "fxFlexOffset.lt-md", "52px"], [3, "next", 4, "ngIf"], ["fxFlex", "1 1 100%", "fxFlex.lt-md", "2 0 100%", "fxLayout", "column", 3, "ngStyle", "ngStyle.lt-md"], [3, "next"], ["wizard-next", ""], [3, "template", "data"], ["fxLayout", "row", "fxLayoutAlign", "center center", 2, "padding", "0 16px"]], template: function PaymentDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Plan: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Payment Plan Number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Agency: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, PaymentDetailsComponent_ng_container_14_Template, 60, 27, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, PaymentDetailsComponent_ng_template_15_Template, 8, 7, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.details.paymentPlanId);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.details.paymentPlanId);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.details.agency);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.details.status !== "Defaulted")("ngIfElse", _r1);
    } }, directives: [_angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__.DefaultClassDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__.DefaultShowHideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutGapDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__.DefaultStyleDirective, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_1__.CurrencyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _common_ui_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__.ProgressBarComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexOffsetDirective, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_4__.WizardNextDirective, _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_5__.CmsContentComponent], styles: ["[_nghost-%COMP%] {\n  font-size: 16px;\n  line-height: 26px;\n  font-weight: 600;\n  font-family: 'Montserrat';\n  display: block;\n  height: 100%;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 10px;\n  line-height: 12px;\n  font-weight: bold;\n  font-family: 'Jost';\n  margin: 0px 0px 4px 0px;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  margin: 2px 0px;\n  padding: 15px 14px;\n  background-color: #efeff4;\n  display: block;\n  min-height: 50px;\n  width: 100%;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 20px;\n  line-height: 30px;\n  font-weight: 600;\n  font-family: 'Jost';\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]:first-child {\n  margin-top: 0px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #e0e0ef;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]:last-of-type {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  margin-bottom: 24px;\n}\n[_nghost-%COMP%]   progress-bar[_ngcontent-%COMP%] {\n  margin: 24px 0px 12px 0px;\n}\n[_nghost-%COMP%]   progress-bar[_ngcontent-%COMP%]   .progressBarPaymentPastDue[_ngcontent-%COMP%] {\n  background-color: #fc2125 !important;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%] {\n  width: 100%;\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   .prev-button[_ngcontent-%COMP%], [_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   .cancel-button[_ngcontent-%COMP%] {\n  display: none !important;\n}\n[_nghost-%COMP%]   section.paymentPastDue[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%], [_nghost-%COMP%]   section.paymentPastDue[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], [_nghost-%COMP%]   section.paymentPastDue[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  color: #fc2125 !important;\n}\n[_nghost-%COMP%]   section.paymentPastDue[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  margin: 24px 0px;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%], [_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: unset;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]    > aside[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 270px;\n  height: 75px;\n  left: -135px;\n  top: -98px;\n  background-color: white;\n  transition: opacity 500ms;\n  text-align: left;\n  padding: 10px 8px;\n  font-size: 12px;\n  line-height: 15px;\n  font-family: 'Montserrat';\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.16);\n  text-transform: capitalize;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]    > aside[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 3px 0px 10px 0px;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]    > aside[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  min-width: 126px;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover    + div[_ngcontent-%COMP%]    > aside[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%]   .lt-md[_ngcontent-%COMP%] {\n  padding-bottom: 60px;\n}\n[_nghost-%COMP%]   .lt-md[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  background-color: white;\n}\n[_nghost-%COMP%]   .lt-md[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  background-color: unset;\n}\n[_nghost-%COMP%]   .lt-md[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:last-of-type {\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n[_nghost-%COMP%]   .lt-md[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]    > aside[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnREZXRhaWxzLmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xcZm9udHMubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxwYWdlLmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xcdGFibGUubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxlcnJvci5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUNFQSx5QkFBQTtFREFBLGNBQUE7RUFDQSxZQUFBO0FBRko7QUFKQTtFQVNRLFlBQUE7QUFGUjtBQVBBO0VBYVEseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQ2ZKLG1CQUFBO0VEaUJJLHVCQUFBO0FBSFI7QUFmQTtFQXNCUSxlQUFBO0VBQ0Esa0JBQUE7RUVISix5QkFBQTtFRktJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFKUjtBQXZCQTs7RUErQlksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VDakNSLG1CQUFBO0FEOEJKO0FBL0JBO0VBeUNRLGVBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VHMUJKLHlCQUFBO0FIb0JKO0FBckNBO0VBZ0RRLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQVJSO0FBMUNBO0VBc0RRLHlCQUFBO0FBVFI7QUE3Q0E7RUF5RFksb0NBQUE7QUFUWjtBQWhEQTtFQThEUSxXQUFBO0VBQ0EseUJBQUE7QUFYUjtBQXBEQTs7RUFvRVEsd0JBQUE7QUFaUjtBQXhEQTs7O0VJT0kseUJBQUE7QUpzREo7QUE3REE7RUErRVksZ0JBQUE7QUFmWjtBQWhFQTs7RUFxRlEscUJBQUE7RUFDQSxZQUFBO0FBakJSO0FBckVBO0VBMEZRLGtCQUFBO0FBbEJSO0FBeEVBO0VBOEZRLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQ3BHSix5QkFBQTtFRHNHSSwyQ0FBQTtFQUNBLDBCQUFBO0FBbkJSO0FBekZBO0VBK0dZLHdCQUFBO0FBbkJaO0FBNUZBO0VBb0hRLGdCQUFBO0FBckJSO0FBL0ZBO0VBeUhRLFVBQUE7QUF2QlI7QUE0QkE7RUFDSSxvQkFBQTtBQTFCSjtBQXlCQTtFQUlRLHVCQUFBO0FBMUJSO0FBc0JBO0VBUVEsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0FBM0JSO0FBaUJBO0VBY1EsOEJBQUE7RUFDQSwrQkFBQTtBQTVCUjtBQWFBO0VBbUJRLFVBQUE7RUFDQSxVQUFBO0FBN0JSIiwiZmlsZSI6InBheW1lbnREZXRhaWxzLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuXG4vL1RPRE86IFRoaXMgZmlsZSBuZWVkcyB0byBoYXZlIHRoZSB0aGVtZXMubGVzcyBtaXhpbnMgYXBwbGllZCB0byBpdCBpbnN0ZWFkIG9mIGRpcmVjdGx5IHVzaW5nIGNvbG9ycyBhbmQgZm9udHNcbjpob3N0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAudC1ib2R5LS1mb250RmFtaWx5O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIG1haW4ge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgbWF0LWxhYmVsIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIC50LWhlYWRlci0tZm9udEZhbWlseTtcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDRweCAwcHg7XG4gICAgfVxuXG4gICAgc2VjdGlvbiB7XG4gICAgICAgIG1hcmdpbjogMnB4IDBweDtcbiAgICAgICAgcGFkZGluZzogMTVweCBAcGFnZS1iYXItbWFyZ2luLXN0YXRpYy1sdC1tZDtcbiAgICAgICAgLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMihAdGhlbWUtbGlnaHQpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgaDIsXG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgLnQtaGVhZGVyLS1mb250RmFtaWx5O1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzZWN0aW9uOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgLnQtdGFibGVfX2VtcGhhc2lzLS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lLWxpZ2h0KTtcbiAgICB9XG5cbiAgICBzZWN0aW9uOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cblxuICAgIHByb2dyZXNzLWJhciB7XG4gICAgICAgIG1hcmdpbjogMjRweCAwcHggMTJweCAwcHg7XG5cbiAgICAgICAgLnByb2dyZXNzQmFyUGF5bWVudFBhc3REdWUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHRvcmNoLXJlZCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2l6YXJkLXVpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgd2l6YXJkLXVpIC5wcmV2LWJ1dHRvbixcbiAgICB3aXphcmQtdWkgLmNhbmNlbC1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgc2VjdGlvbi5wYXltZW50UGFzdER1ZSB7XG4gICAgICAgIG1hdC1sYWJlbCxcbiAgICAgICAgc3Ryb25nLFxuICAgICAgICBhcnRpY2xlIHtcbiAgICAgICAgICAgIC50LWVycm9yLS1jb2xvcihAdGhlbWUtbGlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBhcnRpY2xlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjRweCAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhLFxuICAgIGE6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiB1bnNldDtcbiAgICB9XG5cbiAgICBhICsgZGl2IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIGEgKyBkaXYgPiBhc2lkZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgb3BhY2l0eTogMC4wO1xuICAgICAgICB3aWR0aDogMjcwcHg7XG4gICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgbGVmdDogLTEzNXB4O1xuICAgICAgICB0b3A6IC05OHB4OyAvLzc1IChib3ggaGVpZ2h0KSArIDEyIChtYXQtbGFiZWwgbGluZSBoZWlnaHQpICsgMjAgKHBhZGRpbmcgdG9wK2JvdHRvbSlcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXM7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggOHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICAudC1ib2R5LS1mb250RmFtaWx5O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblxuICAgICAgICBociB7XG4gICAgICAgICAgICBtYXJnaW46IDNweCAwcHggMTBweCAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhICsgZGl2ID4gYXNpZGUgPiBkaXYgPiBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWluLXdpZHRoOiAxMjZweDtcbiAgICB9XG5cblxuICAgIGE6aG92ZXIgKyBkaXYgPiBhc2lkZSB7XG4gICAgICAgIG9wYWNpdHk6IDEuMDtcbiAgICB9XG59XG5cblxuOmhvc3QgLmx0LW1kIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcblxuICAgIHNlY3Rpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICBzZWN0aW9uOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICB9XG5cbiAgICBzZWN0aW9uOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgICB9XG5cbiAgICBhICsgZGl2ID4gYXNpZGUge1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICByaWdodDogMHB4O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG4udC1oZWFkZXItLWZvbnRGYW1pbHkoKSB7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LWpvc3Q7XG59XG5cbi50LWJvZHktLWZvbnRGYW1pbHkoKSB7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LW1vbnRzZXJyYXQ7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cblxuQGJvZHktLWJhY2tncm91bmRDb2xvci1saWdodDogQHdoaXRlO1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjItbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AYm9keS0tY29sb3ItbGlnaHQ6IEB0dW5hLWdyYXk7XG5AYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3ItbGlnaHQ6IEB0cm9waWNhbC1yYWluLWZvcmVzdC1ncmVlbjtcbkBib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1saWdodDogQHNpbHZlci1ncmF5O1xuQGhlYWRlci0tY29sb3ItbGlnaHQ6IEB0dW5hLWdyYXk7XG5AbGFiZWwtLWNvbG9yLWxpZ2h0OiBAYm91bGRlci1ncmF5O1xuQHNlbGVjdF9fYXJyb3ctLWNvbG9yLWxpZ2h0OiBAc2NvcnBpb24tZ3JheTtcbkBsaW5rLS1jb2xvci1saWdodDogQGF6dXJlLXJhZGlhbmNlLWJsdWU7XG5AZGl2aWRlci0tYm9yZGVyQ29sb3ItbGlnaHQ6IEBzY2hvb2wtYnVzLXllbGxvdztcblxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IyKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvcjItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjMoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMy1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWhlYWRlci0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnaGVhZGVyLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWxhYmVsLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdsYWJlbC0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1zZWxlY3RfX2Fycm93LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdzZWxlY3RfX2Fycm93LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWxpbmstLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xpbmstLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvciAhaW1wb3J0YW50OyAvLyBtYXJrZWQgYXMgIWltcG9ydGFudCB0byBvdmVycmlkZSBib290c3RyYXBcbn1cblxuLnQtZGl2aWRlci0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnZGl2aWRlci0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtZGl2aWRlcl9fZGFzaC0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG5AdGFibGVfX2hlYWRlci0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AdGFibGVfX2JvZHktLWJhY2tncm91bmRDb2xvci1saWdodDogQHdpbGQtc2FuZC1ncmF5O1xuQHRhYmxlX19lbXBoYXNpcy0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAc251ZmYtZ3JheTtcblxuXG4udC10YWJsZV9faGVhZGVyLS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAndGFibGVfX2hlYWRlci0tYmFja2dyb3VuZENvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC10YWJsZV9fYm9keS0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3RhYmxlX19ib2R5LS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXRhYmxlX19lbXBoYXNpcy0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3RhYmxlX19lbXBoYXNpcy0tYmFja2dyb3VuZENvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbkBlcnJvci0tY29sb3ItbGlnaHQ6IEB0b3JjaC1yZWQ7XG5Ad2FybmluZy0tY29sb3ItbGlnaHQ6IEBwaXphenotZ29sZDtcbkBzdWNjZXNzLS1jb2xvci1saWdodDogQGNhbHlwc28tYmx1ZTtcblxuXG4udC1lcnJvci0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnZXJyb3ItLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtZXJyb3ItLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2Vycm9yLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1lcnJvci0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2Vycm9yLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtd2FybmluZy0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3dhcm5pbmctLWNvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1zdWNjZXNzLS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnc3VjY2Vzcy0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG4iXX0= */"] });


/***/ }),

/***/ 55201:
/*!*******************************************************!*\
  !*** ./src/paymentplans/receipt/receipt.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptComponent": () => (/* binding */ ReceiptComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 98928);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frame/frame.component */ 50985);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _services_webApi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/webApi.service */ 42423);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services */ 82500);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_print_link_print_link_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/print-link/print-link.component */ 33402);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/ui/containers/row/row.component */ 80001);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/display/cmsContent/cmsContent.component */ 89707);
/* harmony import */ var _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/display/payment/paymentDisplay.component */ 38321);
/* harmony import */ var _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/display/address/addressDisplay.component */ 23204);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
























const _c0 = function (a0) {
  return {
    paymentPlanNumber: a0
  };
};

function ReceiptComponent_section_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "section", 22)(1, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "cms-content", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("template", ctx_r0.cmsContent.Children[0].ShortDescription)("data", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](2, _c0, ctx_r0.paymentPlanNumber));
  }
}

function ReceiptComponent_payment_display_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "payment-display", 23);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("billingType", ctx_r1.planData.billingMethod.billingType)("bankDetails", ctx_r1.planData.billingMethod.eftPaymentMethod)("creditCard", ctx_r1.planData.billingMethod.creditCardPaymentMethod)("showAccountNumber", true);
  }
}

function ReceiptComponent_address_display_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "address-display", 24);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("address", ctx_r2.planData.billingMethod.billingType === ctx_r2.BillingType.Credit ? ctx_r2.planData.billingMethod.creditCardPaymentMethod : ctx_r2.planData.billingMethod.eftPaymentMethod)("international", ctx_r2.planData.billingMethod.billingType === ctx_r2.BillingType.Credit ? ctx_r2.planData.billingMethod.creditCardPaymentMethod.international : ctx_r2.planData.billingMethod.eftPaymentMethod.international)("showLabels", false)("showEdit", false);
  }
}

const _c1 = function (a0, a1) {
  return {
    paymentAmount: a0,
    nextUpcomingInstallmentDateFormatted: a1
  };
};

function ReceiptComponent_section_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "section", 22)(1, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "cms-content", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("template", ctx_r3.cmsContent.LongDescription)("data", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction2"](2, _c1, ctx_r3.paymentAmount, ctx_r3.nextUpcomingInstallmentDateFormatted));
  }
}

const _c2 = function (a0, a1) {
  return {
    "u-spacing__sectionToSection--marginTop": a0,
    "u-spacing__sectionToRow--marginTop": a1
  };
};

const _c3 = function (a0) {
  return {
    leftoverAmount: a0
  };
};

class ReceiptComponent {
  //@host decorator was removed for parent due to issue with Ivy. see https://github.com/angular/angular/issues/31539
  constructor(parent, state, paymentPlanApi, responseErrorService, dataService, dateWithTimeZoneService) {
    this.parent = parent;
    this.state = state;
    this.paymentPlanApi = paymentPlanApi;
    this.responseErrorService = responseErrorService;
    this.dataService = dataService;
    this.dateWithTimeZoneService = dateWithTimeZoneService;
    this.BillingType = common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType;

    this.formatCurrentDate = () => {
      this.paymentDate = this.dateWithTimeZoneService.withoutOffsetToCentral(moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DDTHH:mm:ss'), 'MMM D, YYYY h:mm:ss A z');
    };
  }

  get cms() {
    return this.cmsContent;
  }

  get planData() {
    return this.parent.planData;
  }

  get paymentAmount() {
    return this.planData.paymentAmount;
  }

  backToPaymentPlans(nextState) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield _this.isEzTagFlow ? _this.paymentPlanApi.ezTagSearchPaymentPlans() : _this.paymentPlanApi.violationsPaymentPlansSearch({
        InvoiceNumber: '' + (_this.paymentResponse.originalRequest.invoiceNumber || ''),
        LicenseState: _this.paymentResponse.originalRequest.licenseState,
        LicensePlate: _this.paymentResponse.originalRequest.licensePlate,
        PaymentPlanId: '' + (_this.paymentResponse.originalRequest.paymentPlanId || '')
      });

      if (_this.responseErrorService.isErrorFree(response)) {
        _this.dataService.setPaymentPlans(response, _this.isEzTagFlow);

        yield _this.state.go(nextState);
      }
    })();
  }

  ngOnInit() {
    this.parent.stepNum = 4;
    this.parent.scrollToTop();
    this.paymentResponse = this.dataService.getPaymentResponse(this.isEzTagFlow);
    this.formatCurrentDate();
    this.leftoverAmount = this.planData.selectedPaymentPlan.balanceAmount - this.planData.paymentAmount;
    this.nextUpcomingInstallmentDateFormatted = this.dateWithTimeZoneService.withoutOffsetToCentral(this.planData.selectedPaymentPlan.nextInstallmentDate, 'MMM Do, YYYY z');
    this.paymentPlanNumber = this.planData.selectedPaymentPlan.paymentPlanId;
  }

  get isMaxPayment() {
    return this.planData.paymentAmount === this.planData.selectedPaymentPlan.balanceAmount;
  }

  get hasOverage() {
    return this.planData.paymentAmount > this.planData.selectedPaymentPlan.nextInstallmentAmount;
  }

  print() {
    window.print();
  }

}

ReceiptComponent.ɵfac = function ReceiptComponent_Factory(t) {
  return new (t || ReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_18__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_webApi_service__WEBPACK_IMPORTED_MODULE_4__.WebApiService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_5__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__.PlateDataService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_5__.DateWithTimeZoneService));
};

ReceiptComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
  type: ReceiptComponent,
  selectors: [["receipt-component"]],
  inputs: {
    cmsContent: "cmsContent",
    isEzTagFlow: "isEzTagFlow"
  },
  decls: 36,
  vars: 20,
  consts: [["fxLayout", "column"], [1, "u-spacing__firstHeaderToTitle--marginTop"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayout.lt-md", "column", "fxLayoutAlign.lt-md", "start start"], ["fxFlex", "grow", "fxFlexOrder", "1", "fxFlexOrder.lt-md", "2"], ["fxFlex", "none", "fxFlexOrder", "2", "fxFlexOrder.lt-md", "1", "ngClass.lt-md", "printContainer-extra-bottom-space"], ["id", "printButton"], [1, "u-spacing__divider--marginTopBottom"], [3, "rowType"], ["col-start", "", "id", "totalPaymentLabel", "fxFlex", "grow"], ["col-end", "", "id", "totalPaymentValue", "fxFlex", "none"], [3, "value"], [1, "u-spacing__sectionToRow--marginTop"], ["class", "noteBoxLayout u-spacing__sectionToSection--marginTop", 4, "ngIf"], [3, "ngClass"], [3, "template", "data"], ["fxLayout", "column", 1, "u-spacing__headerToSection--marginTop"], [3, "billingType", "bankDetails", "creditCard", "showAccountNumber", 4, "ngIf"], ["class", "u-spacing__addressToPaymentDisplay--marginTop", 3, "address", "international", "showLabels", "showEdit", 4, "ngIf"], [1, "u-spacing__buttonToField--marginTop"], [3, "reverseOrder", "next"], ["Wizard", ""], ["wizard-next", ""], [1, "noteBoxLayout", "u-spacing__sectionToSection--marginTop"], [3, "billingType", "bankDetails", "creditCard", "showAccountNumber"], [1, "u-spacing__addressToPaymentDisplay--marginTop", 3, "address", "international", "showLabels", "showEdit"]],
  template: function ReceiptComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "page-centered-container")(1, "div", 0)(2, "card-container", 1)(3, "section", 0)(4, "header")(5, "div", 2)(6, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "print-link", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](10, "mat-divider", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "row-container", 7)(12, "article", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "article", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](15, "currency", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "section", 11)(17, "article");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](19, ReceiptComponent_section_19_Template, 3, 4, "section", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "section", 13)(21, "article");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](22, "cms-content", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "section", 15)(24, "header")(25, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](27, "mat-divider", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](28, ReceiptComponent_payment_display_28_Template, 1, 4, "payment-display", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](29, ReceiptComponent_address_display_29_Template, 1, 4, "address-display", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](30, ReceiptComponent_section_30_Template, 3, 5, "section", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "section", 18)(32, "wizard-ui", 19, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("next", function ReceiptComponent_Template_wizard_ui_next_32_listener($event) {
        return ctx.backToPaymentPlans($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](35, "BACK TO PAYMENT PLANS");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.Title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("rowType", "emphasis");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.paymentAmount, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", ctx.paymentAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"]("", ctx.cmsContent.paymentDate, " ", ctx.paymentDate, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.leftoverAmount === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction2"](15, _c2, ctx.leftoverAmount !== 0, ctx.leftoverAmount === 0));
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("template", ctx.cmsContent.ShortDescription)("data", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](18, _c3, ctx.leftoverAmount));
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.cmsContent.billingInfoHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.planData.billingMethod && ctx.planData.billingMethod.billingType);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.planData.billingMethod && ctx.planData.billingMethod.billingType);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.hasOverage && !ctx.isMaxPayment);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("reverseOrder", true);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_7__.PageCenteredContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_8__.CardContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultFlexOrderDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__.DefaultClassDirective, _common_ui_print_link_print_link_component__WEBPACK_IMPORTED_MODULE_9__.PrintLinkComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDivider, _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_10__.RowContainerComponent, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_11__.CurrencyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_12__.CmsContentComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_13__.PaymentDisplayComponent, _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_14__.AddressDisplayComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_15__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_16__.WizardNextDirective],
  styles: ["[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   .noteBoxLayout[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  padding: 16px 20px;\n  margin-left: -20px;\n  margin-right: -20px;\n  border-radius: 10px 10px;\n}\n[_nghost-%COMP%]   #totalPaymentLabel[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n  color: #34353a;\n}\n[_nghost-%COMP%]   #totalPaymentValue[_ngcontent-%COMP%] {\n  text-align: right;\n  font-weight: 700;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   .printContainer-extra-bottom-space[_ngcontent-%COMP%] {\n  margin-left: 26px;\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VpcHQubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFx0ZXh0Ym94Lmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xccGFnZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBR1EsZ0JBQUE7QUFKUjtBQUNBO0VBT1EsV0FBQTtBQUxSO0FBRkE7RUNLSSx5QkFBQTtFRE9JLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBTlI7QUFUQTtFQW1CUSxnQkFBQTtFQUNBLGVBQUE7RUV5QkosY0FBQTtBRi9CSjtBQWRBO0VBeUJRLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUlI7QUFuQkE7RUErQlEsaUJBQUE7RUFDQSxtQkFBQTtBQVRSIiwiZmlsZSI6InJlY2VpcHQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuXG46aG9zdCB7XG5cbiAgICBoMiB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XG4gICAgfVxuXG4gICAgbWF0LWRpdmlkZXIge1xuICAgICAgICB3aWR0aDogQHdpZHRoLWRpdmlkZXI7XG4gICAgfVxuXG4gICAgLm5vdGVCb3hMYXlvdXQge1xuICAgICAgICAudC10ZXh0Ym94LS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lLWxpZ2h0KTtcbiAgICAgICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweDtcbiAgICB9XG5cbiAgICAjdG90YWxQYXltZW50TGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIC50LWhlYWRlci0tY29sb3IoQHRoZW1lLWxpZ2h0KTtcbiAgICB9XG5cbiAgICAjdG90YWxQYXltZW50VmFsdWUge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5wcmludENvbnRhaW5lci1leHRyYS1ib3R0b20tc3BhY2Uge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICB9XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cblxuQHRleHRib3gtLWJhY2tncm91bmRDb2xvci1saWdodDogQGFsYWJhc3Rlci1ncmF5O1xuXG5cbi50LXRleHRib3gtLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICd0ZXh0Ym94LS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cblxuQGJvZHktLWJhY2tncm91bmRDb2xvci1saWdodDogQHdoaXRlO1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjItbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AYm9keS0tY29sb3ItbGlnaHQ6IEB0dW5hLWdyYXk7XG5AYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3ItbGlnaHQ6IEB0cm9waWNhbC1yYWluLWZvcmVzdC1ncmVlbjtcbkBib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1saWdodDogQHNpbHZlci1ncmF5O1xuQGhlYWRlci0tY29sb3ItbGlnaHQ6IEB0dW5hLWdyYXk7XG5AbGFiZWwtLWNvbG9yLWxpZ2h0OiBAYm91bGRlci1ncmF5O1xuQHNlbGVjdF9fYXJyb3ctLWNvbG9yLWxpZ2h0OiBAc2NvcnBpb24tZ3JheTtcbkBsaW5rLS1jb2xvci1saWdodDogQGF6dXJlLXJhZGlhbmNlLWJsdWU7XG5AZGl2aWRlci0tYm9yZGVyQ29sb3ItbGlnaHQ6IEBzY2hvb2wtYnVzLXllbGxvdztcblxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IyKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvcjItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjMoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMy1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWhlYWRlci0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnaGVhZGVyLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWxhYmVsLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdsYWJlbC0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1zZWxlY3RfX2Fycm93LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdzZWxlY3RfX2Fycm93LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWxpbmstLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xpbmstLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvciAhaW1wb3J0YW50OyAvLyBtYXJrZWQgYXMgIWltcG9ydGFudCB0byBvdmVycmlkZSBib290c3RyYXBcbn1cblxuLnQtZGl2aWRlci0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnZGl2aWRlci0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtZGl2aWRlcl9fZGFzaC0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 54346:
/*!*******************************************************************!*\
  !*** ./src/paymentplans/selectPayment/selectPayment.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentOptions": () => (/* binding */ PaymentOptions),
/* harmony export */   "SelectPaymentComponent": () => (/* binding */ SelectPaymentComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var animations_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animations/collapse */ 16573);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var common_ui_modals_billingModal_billingModal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/ui/modals/billingModal/billingModal.component */ 37882);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 98928);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../frame/frame.component */ 50985);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services */ 82500);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var common_conversions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/conversions */ 41354);
/* harmony import */ var common_billing_billingInfoUtilities_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/billing/billingInfoUtilities.service */ 25636);
/* harmony import */ var common_billing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/billing */ 92208);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _validation_min_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../validation/min.directive */ 44854);
/* harmony import */ var _validation_max_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../validation/max.directive */ 54491);
/* harmony import */ var _common_ui_form_entry_inputCurrency_inputCurrency_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/ui/form-entry/inputCurrency/inputCurrency.directive */ 93002);
/* harmony import */ var _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../validation/errorMessages/errorMessages.component */ 65316);
/* harmony import */ var _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../validation/errorMessages/errorMessage.component */ 79636);
/* harmony import */ var _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../common/ui/display/cmsContent/cmsContent.component */ 89707);
/* harmony import */ var common_billing_eftAchDisclaimer_eftAchDisclaimer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! common/billing/eftAchDisclaimer/eftAchDisclaimer.component */ 29565);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/icon */ 38661);



































function SelectPaymentComponent_section_14_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, " (AutoPay)");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}

function SelectPaymentComponent_section_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "section", 20)(1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ngModelChange", function SelectPaymentComponent_section_14_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return ctx_r10.selectedPaymentMethod = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "label", 22)(3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, SelectPaymentComponent_section_14_span_5_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const paymentMethod_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate1"]("id", "paymentPlanPaymentMethod_", i_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngModel", ctx_r1.selectedPaymentMethod)("value", paymentMethod_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate1"]("for", "paymentPlanPaymentMethod_", i_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](paymentMethod_r7.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", paymentMethod_r7.data.autoPay);
  }
}

function SelectPaymentComponent_section_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "section", 24)(1, "header")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.cms.selectPaymentAmount);
  }
}

function SelectPaymentComponent_section_21_section_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "section", 28)(1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ngModelChange", function SelectPaymentComponent_section_21_section_1_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return ctx_r15.selectedPaymentAmount = $event;
    })("change", function SelectPaymentComponent_section_21_section_1_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return ctx_r17.updateAmount();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "label", 30)(3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, "Installment Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "strong", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "currency", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngModel", ctx_r12.selectedPaymentAmount)("value", ctx_r12.PaymentOptions.NextInstallmentAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("value", ctx_r12.planData.selectedPaymentPlan.nextInstallmentAmount);
  }
}

function SelectPaymentComponent_section_21_section_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "section", 5)(1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ngModelChange", function SelectPaymentComponent_section_21_section_2_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return ctx_r18.selectedPaymentAmount = $event;
    })("change", function SelectPaymentComponent_section_21_section_2_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return ctx_r20.updateAmount();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "label", 33)(3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, "Remaining Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "strong", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "currency", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngModel", ctx_r13.selectedPaymentAmount)("value", ctx_r13.PaymentOptions.BalanceAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("value", ctx_r13.planData.selectedPaymentPlan.balanceAmount);
  }
}

function SelectPaymentComponent_section_21_ng_container_3_error_messages_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "error-messages", 41)(1, "error-message", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Minimum payment amount must be more than ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "currency", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "error-message", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5, "Amount may not exceed your balance amount of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "currency", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();

    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵreference"](8);

    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("errors", _r21.errors)("activeBeforeSubmit", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("value", ctx_r22.minPaymentAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("value", ctx_r22.planData.selectedPaymentPlan.balanceAmount);
  }
}

const _c0 = function () {
  return {
    "margin-left": "0%"
  };
};

function SelectPaymentComponent_section_21_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](1, "section", 5)(2, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ngModelChange", function SelectPaymentComponent_section_21_ng_container_3_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return ctx_r23.selectedPaymentAmount = $event;
    })("change", function SelectPaymentComponent_section_21_ng_container_3_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return ctx_r25.updateAmount(true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "label", 35)(4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5, "Other amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "span", 37)(7, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("change", function SelectPaymentComponent_section_21_ng_container_3_Template_input_change_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r24);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return ctx_r26.updateDisplayText($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](11, SelectPaymentComponent_section_21_ng_container_3_error_messages_11_Template, 7, 4, "error-messages", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵreference"](8);

    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngModel", ctx_r14.selectedPaymentAmount)("value", ctx_r14.PaymentOptions.OtherPaymentAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("error-check", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](16, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("min", ctx_r14.minPaymentAmount)("max", ctx_r14.planData.selectedPaymentPlan.balanceAmount)("value", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](9, 10, ctx_r14.otherPaymentAmount, "1.2-2"))("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](10, 13, ctx_r14.otherPaymentAmount, "1.2-2"))("required", ctx_r14.selectedPaymentAmount === ctx_r14.PaymentOptions.OtherPaymentAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r14.selectedPaymentAmount === ctx_r14.PaymentOptions.OtherPaymentAmount);
  }
}

const _c1 = function () {
  return {
    "margin-bottom": "20px"
  };
};

function SelectPaymentComponent_section_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "section", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, SelectPaymentComponent_section_21_section_1_Template, 7, 3, "section", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](2, SelectPaymentComponent_section_21_section_2_Template, 7, 3, "section", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](3, SelectPaymentComponent_section_21_ng_container_3_Template, 12, 17, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r3.selectedPaymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r3.selectedPaymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r3.selectedPaymentMethod);
  }
}

const _c2 = function (a0, a1) {
  return {
    otherPaymentAmount: a0,
    nextUpcomingInstallmentDateFormatted: a1
  };
};

function SelectPaymentComponent_section_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "section", 44)(1, "article", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](2, "cms-content", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("@collapse", !ctx_r4.hasOverage);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("template", ctx_r4.cms.amountSelectionNoteTemplate)("data", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction2"](3, _c2, ctx_r4.otherPaymentAmount, ctx_r4.nextUpcomingInstallmentDateFormatted));
  }
}

function SelectPaymentComponent_section_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "eft-ach-disclaimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}

var PaymentOptions;

(function (PaymentOptions) {
  PaymentOptions["BalanceAmount"] = "balanceAmount";
  PaymentOptions["NextInstallmentAmount"] = "nextInstallmentAmount";
  PaymentOptions["OtherPaymentAmount"] = "otherPaymentAmount";
})(PaymentOptions || (PaymentOptions = {}));

class SelectPaymentComponent {
  //@host decorator was removed for parent due to issue with Ivy. see https://github.com/angular/angular/issues/31539
  constructor(parent, dataService, state, dialogService, countryConversionService, billingInfoUtilitiesService, creditCardTypeService, genericRepoService, responseErrorService) {
    this.parent = parent;
    this.dataService = dataService;
    this.state = state;
    this.dialogService = dialogService;
    this.countryConversionService = countryConversionService;
    this.billingInfoUtilitiesService = billingInfoUtilitiesService;
    this.creditCardTypeService = creditCardTypeService;
    this.genericRepoService = genericRepoService;
    this.responseErrorService = responseErrorService;
    this.PaymentOptions = PaymentOptions;
    this.BillingType = common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType;
    this.maxPaymentAmount = 10000;
    this.nextUpcomingInstallmentDateFormatted = null;
    this.addEzTagPayment = false;
    this.ezTagPaymentAmount = 0;
    this.paymentInfo = [];

    this.getLabel = data => {
      if (data === null) {
        return null;
      }

      if (data.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Credit) {
        let card;

        if (data.billingInformation) {
          card = data.billingInformation.credit;
        } else {
          card = data.creditCardPaymentMethod;
        }

        return `${this.creditCardTypeService.cardCodeToName(card.cardCode)} **** ${card.cardNbr.replace(/[*-]/g, '')}`;
      } else if (data.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Eft) {
        let eft;

        if (data.billingInformation) {
          eft = data.billingInformation.eft;
        } else {
          eft = data.eftPaymentMethod;
        }

        const accountType = eft.accountType ? eft.accountType : eft.accountTypeDisplay;
        return `${accountType} **** ${eft.accountNumber.slice(-4)}`;
      } else {
        return null;
      }
    };
  }

  get planData() {
    return this.parent.planData;
  }

  get host() {
    return this;
  }

  updateOtherAmount(option) {
    if (option === PaymentOptions.BalanceAmount) {
      this.otherPaymentAmount = this.planData.selectedPaymentPlan.balanceAmount;
    } else if (option === PaymentOptions.NextInstallmentAmount) {
      this.otherPaymentAmount = this.planData.selectedPaymentPlan.nextInstallmentAmount;
    }
  }

  get minPaymentAmount() {
    if (this.selectedPaymentAmount !== PaymentOptions.OtherPaymentAmount) {
      return;
    }

    if (this.planData && this.planData.selectedPaymentPlan) {
      const lessThanOneDollarPaymentAllowed = this.planData.selectedPaymentPlan.balanceAmount < 1 || this.planData.selectedPaymentPlan.nextInstallmentAmount < 1;
      return lessThanOneDollarPaymentAllowed ? 0.01 : 1.0;
    }

    return 1.0;
  }

  updateDisplayText(element) {
    let factorNum = null;

    if (element.target.value.match(/^\d+(,\d{3})*(\.\d{0,2})?$/)) {
      factorNum = element.target.value.replace(/[,]/g, '');
      this.otherPaymentAmount = factorNum;
    } else {
      this.otherPaymentAmount = 0;
      element.target.value = 0;
    }
  }

  updateAmount(isOtherAmountSelected) {
    this.otherPaymentAmount = this.planData.selectedPaymentPlan.balanceAmount;

    if (isOtherAmountSelected) {
      document.getElementById('otherAmountTxt').select();
    }
  }

  get paymentAmount() {
    let amount = null;

    if (this.selectedPaymentAmount === this.PaymentOptions.BalanceAmount || this.selectedPaymentAmount === this.PaymentOptions.NextInstallmentAmount) {
      amount = this.planData.selectedPaymentPlan[this.selectedPaymentAmount];
    } else if (this.selectedPaymentAmount === this.PaymentOptions.OtherPaymentAmount) {
      amount = this.otherPaymentAmount;
    }

    return amount;
  }

  isWizardDisabled(formInvalid) {
    return this.selectedPaymentMethod === undefined || this.selectedPaymentMethod === null || formInvalid;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.parent.stepNum = 2;

      _this.parent.scrollToTop();

      _this.cms = Object.assign({}, _this.cmsContent, {
        amountSelectionNoteTemplate: _this.cmsContent.ShortDescription
      });
      yield _this.processingPaymentInfo();

      if (_this.planData.selectedPaymentPlan.nextUpcomingInstallmentDate) {
        _this.nextUpcomingInstallmentDateFormatted = moment__WEBPACK_IMPORTED_MODULE_5__(_this.planData.selectedPaymentPlan.nextUpcomingInstallmentDate).format('MMM Do, YYYY');
      }

      if (_this.planData.paymentAmount) {
        if (_this.planData.paymentAmount === _this.planData.selectedPaymentPlan.balanceAmount) {
          _this.selectedPaymentAmount = _this.PaymentOptions.BalanceAmount;
        } else if (_this.planData.paymentAmount === _this.planData.selectedPaymentPlan.nextInstallmentAmount) {
          _this.selectedPaymentAmount = _this.PaymentOptions.NextInstallmentAmount;
        } else {
          _this.selectedPaymentAmount = _this.PaymentOptions.OtherPaymentAmount;
        }

        _this.otherPaymentAmount = _this.planData.paymentAmount;
      } else {
        _this.selectedPaymentAmount = _this.PaymentOptions.NextInstallmentAmount;
        _this.otherPaymentAmount = _this.planData.selectedPaymentPlan.nextInstallmentAmount;
      }
    })();
  }

  promptNewPaymentMethod() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentMailingAddress = yield _this2.getCurrentMailingAddress();
      const billingInformation = {
        eft: {
          accountType: null,
          accountTypeDisplay: null,
          name: null,
          routingNumber: null,
          accountNumber: null,
          account2: null,
          primary: null,
          accountBillingMethodId: null,
          nameOnBankAccount: null,
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
          paypageRegistrationId: null,
          omniToken: null,
          primary: null,
          isNewCard: null,
          address1: null,
          city: null,
          state: null,
          zip: null,
          plus4: null,
          country: 'USA',
          displayCountry: 'USA',
          international: false
        }
      };
      const data = {
        stateList: _this2.states,
        countryList: _this2.countries,
        billingType: null,
        billingInformation
      };
      const dialogContent = {
        title: 'Add a New Payment Method'
      };
      return _this2.dialogService.openSliderCentered(common_ui_modals_billingModal_billingModal_component__WEBPACK_IMPORTED_MODULE_4__.BillingModalComponent, data, dialogContent).then(result => {
        if (result) {
          const billingType = result.billingType;
          const address = billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Credit ? result.billingInformation.credit || currentMailingAddress : result.billingInformation.eft || currentMailingAddress;
          const newPaymentMethod = {
            data: {
              billingType,
              creditCardPaymentMethod: result.billingInformation.credit,
              eftPaymentMethod: result.billingInformation.eft,
              address
            },
            label: _this2.getLabel(result),
            stored: false,
            attached: false
          };

          _this2.paymentInfo.push(newPaymentMethod);

          _this2.selectedPaymentMethod = newPaymentMethod;

          if (!_this2.selectedPaymentAmount) {
            _this2.selectedPaymentAmount = _this2.PaymentOptions.NextInstallmentAmount;
          }
        } else {
          _this2.selectedPaymentMethod = null;
        }
      });
    })();
  }

  nextStep(nextState) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const isEft = _this3.selectedPaymentMethod.data.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Eft;
      const isStored = _this3.selectedPaymentMethod.stored;

      if (isEft && isStored) {
        const eft = _this3.selectedPaymentMethod.data.eftPaymentMethod;

        const cachedAddress = _this3.parent.getCachedEftMailingInfo(eft.accountBillingMethodId);

        const eftData = {
          stateList: _this3.states,
          countryList: _this3.countries,
          isShowPersonalInfo: true,
          addressTitle: 'EFT Billing Address',
          mailingInfo: cachedAddress ? { ...cachedAddress
          } : {}
        };
        const result = yield _this3.dialogService.openSliderCentered(common_ui__WEBPACK_IMPORTED_MODULE_3__.NewBillingAddressModalComponent, eftData, {
          title: 'EFT Billing Information'
        });

        if (!result) {
          return;
        }

        _this3.parent.setCachedEftMailingInfo(eft.accountBillingMethodId, result.mailingInfo);

        const {
          firstName,
          lastName
        } = result.mailingInfo;
        _this3.selectedPaymentMethod.data.eftPaymentMethod.nameOnBankAccount = `${firstName} ${lastName}`;
        _this3.selectedPaymentMethod.data.address = result.mailingInfo;
      }

      _this3.planData.billingMethod = _this3.selectedPaymentMethod.data;
      _this3.planData.paymentAmount = _this3.paymentAmount;

      _this3.dataService.setBillingMethod(_this3.planData.billingMethod, _this3.planData.paymentAmount, _this3.isEzTagFlow); //stuff below are no longer needed(for now)


      _this3.planData.addAccountFunds = _this3.addEzTagPayment;
      _this3.planData.addAccountFundsAmount = _this3.addEzTagPayment ? _this3.ezTagPaymentAmount : 0;
      yield _this3.state.go(nextState);
    })();
  }

  get hasOverage() {
    if (this.selectedPaymentAmount === this.PaymentOptions.OtherPaymentAmount) {
      return this.otherPaymentAmount > this.planData.selectedPaymentPlan.nextInstallmentAmount;
    } else {
      return false;
    }
  }

  get showNoteForOtherAmmount() {
    return this.planData.selectedPaymentPlan.balanceAmount > this.planData.selectedPaymentPlan.nextInstallmentAmount;
  }

  processingPaymentInfo() {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.paymentInfo = []; //Add stored payments

      if (_this4.isEzTagFlow) {
        const results = yield _this4.genericRepoService.dataFactory.getAllPaymentMethods();

        if (_this4.responseErrorService.isErrorFree(results)) {
          _this4.paymentInfo = [...(results.creditCards || []).map(cc => ({
            billingType: common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Credit,
            creditCardPaymentMethod: cc,
            autoPay: false,
            eftPaymentMethod: null,
            address: results.address || cc,
            isInternational: (results.address || cc || {}).country !== 'USA'
          })).filter(card => !card.creditCardPaymentMethod.isBlocked), ...(results.bankAccounts || []).map(eft => ({
            billingType: common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Eft,
            eftPaymentMethod: eft,
            autoPay: false,
            address: results.address,
            isInternational: (results.address || {}).country !== 'USA'
          }))].map(payment => ({
            data: payment,
            label: _this4.getLabel(payment),
            stored: true,
            attached: false
          }));
        }
      } //add billing method attached to the payment plan


      if (_this4.planData.selectedPaymentPlan.billingMethod && _this4.planData.selectedPaymentPlan.billingMethod.billingType) {
        const paymentMethod = {
          data: _this4.planData.selectedPaymentPlan.billingMethod,
          label: _this4.getLabel(_this4.planData.selectedPaymentPlan.billingMethod),
          stored: true,
          attached: true
        };

        _this4.paymentInfo.push(paymentMethod);
      } //match selected payment into stored list or
      //add to payment options


      if (_this4.planData.billingMethod && _this4.planData.billingMethod.billingType) {
        const billingMethodId = _this4.planData.billingMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Credit ? _this4.planData.billingMethod.creditCardPaymentMethod.accountBillingMethodId : _this4.planData.billingMethod.eftPaymentMethod.accountBillingMethodId;
        let selection;

        if (billingMethodId) {
          //a stored billing method was already chosen,
          //find in list and set it as selected
          const selector = _this4.planData.billingMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType.Credit ? x => x.data.creditCardPaymentMethod.accountBillingMethodId === billingMethodId : x => x.data.eftPaymentMethod.accountBillingMethodId === billingMethodId;
          selection = _this4.paymentInfo.filter(x => x.stored && x.data.billingType === _this4.planData.billingMethod.billingType).find(selector);
        }

        if (selection) {
          _this4.selectedPaymentMethod = selection;
        } else {
          _this4.selectedPaymentMethod = {
            attached: false,
            label: _this4.getLabel(_this4.planData.billingMethod),
            stored: false,
            data: _this4.planData.billingMethod
          };

          _this4.paymentInfo.push(_this4.selectedPaymentMethod);
        }
      } else {
        //use the attached method
        _this4.selectedPaymentMethod = _this4.paymentInfo.find(x => x.attached);
      }
    })();
  }

  getCurrentMailingAddress() {
    var _this5 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield _this5.genericRepoService.dataFactory.getPersonalInfo();

      if (response.errors.length > 0 || !_this5.isEzTagFlow) {
        return null;
      }

      const {
        mailingAddress
      } = response;
      const {
        countryList
      } = mailingAddress;
      let {
        country
      } = mailingAddress;

      if (country && !_this5.countryConversionService.isValidCountryCode(countryList, country)) {
        country = _this5.countryConversionService.countryNameToCode(countryList, country);
      }

      return { ...mailingAddress,
        country,
        international: _this5.billingInfoUtilitiesService.isInternationalAddress(mailingAddress)
      };
    })();
  }

}

SelectPaymentComponent.ɵfac = function SelectPaymentComponent_Factory(t) {
  return new (t || SelectPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_6__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__.PlateDataService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_27__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_8__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](common_conversions__WEBPACK_IMPORTED_MODULE_9__.CountryConversionService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](common_billing_billingInfoUtilities_service__WEBPACK_IMPORTED_MODULE_10__.BillingInfoUtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](common_billing__WEBPACK_IMPORTED_MODULE_11__.CreditCardTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_8__.GenericRepoService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_8__.ResponseErrorService));
};

SelectPaymentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineComponent"]({
  type: SelectPaymentComponent,
  selectors: [["select-payment"]],
  inputs: {
    isEzTagFlow: "isEzTagFlow",
    states: "states",
    countries: "countries",
    cmsContent: "cmsContent"
  },
  decls: 34,
  vars: 9,
  consts: [["name", "selectPaymentPlanPaymentMethod", "validation-focus", "", "novalidate", ""], ["Form", "ngForm"], [1, "u-spacing__divider--marginTopBottom"], [1, "selection-to-header-spacing", 2, "justify-content", "flex-start"], ["fxLayout", "row", "fxLayoutAlign", "start center", "class", "stack-layout", "id", "paymentMethodsLst", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "stack-layout"], ["type", "radio", "id", "newPaymentRadioBtn", "name", "paymentMethodSelection", "value", "", 1, "inputPosition", 3, "ngModel", "ngModelChange", "click"], ["for", "newPaymentRadioBtn", 1, "u-spacing--widthFill"], [1, "spanReadjust"], ["class", "u-spacing__sectionToSection--marginTop", 4, "ngIf"], ["class", "selection-to-header-spacing", "style", "justify-content: flex-start;", 3, "ngStyle.lt-md", 4, "ngIf"], ["class", "noteBoxLayout u-spacing__sectionToSection--marginTop", 4, "ngIf"], [4, "ngIf"], [1, "u-spacing__buttonToField--marginTop"], [3, "disabled", "next"], ["Wizard", ""], ["wizard-next", ""], ["wizard-cancel", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["fxLayout", "row", "fxLayoutAlign", "start center", "id", "paymentMethodsLst", 1, "stack-layout"], ["type", "radio", "name", "paymentMethodSelection", 1, "inputPosition", 3, "id", "ngModel", "value", "ngModelChange"], [1, "u-spacing--widthFill", 3, "for"], ["class", "spanReadjust", 4, "ngIf"], [1, "u-spacing__sectionToSection--marginTop"], [1, "selection-to-header-spacing", 2, "justify-content", "flex-start", 3, "ngStyle.lt-md"], ["fxLayout", "row", "fxLayoutAlign", "start center", "class", "stack-layout", "id", "installmentAmountRdo", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start center", "class", "stack-layout", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start center", "id", "installmentAmountRdo", 1, "stack-layout"], ["type", "radio", "id", "paymentPlanInstallationAmount", "name", "paymentAmountSelection", 1, "inputPosition", 3, "ngModel", "value", "ngModelChange", "change"], ["for", "paymentPlanInstallationAmount", 1, "boxSpread", "u-spacing--widthFill"], [3, "value"], ["type", "radio", "id", "paymentPlanRemainingAmount", "name", "paymentAmountSelection", 1, "inputPosition", 3, "ngModel", "value", "ngModelChange", "change"], ["for", "paymentPlanRemainingAmount", 1, "boxSpread", "u-spacing--widthFill"], ["type", "radio", "id", "paymentPlanOtherAmount", "name", "paymentAmountSelection", 1, "inputPosition", 3, "ngModel", "value", "ngModelChange", "change"], ["fxLayout", "row", "fxLayoutAlign", "start center", "for", "paymentPlanOtherAmount", 1, "boxSpread", "staticOtherAmountPadding", "u-spacing--widthFill", 3, "error-check"], ["fxFlex", "grow", 1, "spanReadjust"], ["fxFlex", "none", 1, "form-text", "spanReadjust", "otherAmountMargin", 3, "ngStyle.lt-md"], ["inputCurrency", "", "type", "text", "id", "otherAmountTxt", "step", "0.01", "name", "otherAmount", "pattern", "^\\d+(,\\d{3})*(\\.\\d{0,2})?$", 1, "otherAmountPadding", 3, "min", "max", "value", "ngModel", "required", "change"], ["OtherInputAmount", "ngModel"], [3, "errors", "activeBeforeSubmit", 4, "ngIf"], [3, "errors", "activeBeforeSubmit"], ["rule", "min"], ["rule", "max"], [1, "noteBoxLayout", "u-spacing__sectionToSection--marginTop"], ["fxLayout", "column"], ["id", "otherNoteTxt", 3, "template", "data"]],
  template: function SelectPaymentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "page-centered-container")(1, "form", 0, 1)(3, "card-container")(4, "section")(5, "header")(6, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](8, "mat-divider", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](9, "section")(10, "header")(11, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](13, "section", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](14, SelectPaymentComponent_section_14_Template, 6, 6, "section", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](15, "section", 5)(16, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ngModelChange", function SelectPaymentComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.selectedPaymentMethod = $event;
      })("click", function SelectPaymentComponent_Template_input_click_16_listener() {
        return ctx.promptNewPaymentMethod();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](17, "label", 7)(18, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](19, "New payment method");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](20, SelectPaymentComponent_section_20_Template, 4, 1, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](21, SelectPaymentComponent_section_21_Template, 4, 5, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](22, SelectPaymentComponent_section_22_Template, 3, 6, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](23, SelectPaymentComponent_section_23_Template, 2, 0, "section", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](24, "section", 13)(25, "wizard-ui", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("next", function SelectPaymentComponent_Template_wizard_ui_next_25_listener($event) {
        return ctx.nextStep($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](27, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](28, "CONTINUE");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](29, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](30, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](31, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](32, "mat-icon", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](33, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx.cms.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx.cms.selectPaymentMethod);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx.paymentInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngModel", ctx.selectedPaymentMethod);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx.selectedPaymentMethod);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx.selectedPaymentMethod);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx.showNoteForOtherAmmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx.selectedPaymentMethod && ctx.selectedPaymentMethod.data.billingType === ctx.BillingType.Eft);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("disabled", ctx.isWizardDisabled(_r0.invalid));
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_12__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_13__.FocusDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_14__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_29__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_31__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_31__.DefaultLayoutAlignDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgIf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_32__.DefaultStyleDirective, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_15__.CurrencyComponent, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_16__.ErrorCheckDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_31__.DefaultFlexDirective, _validation_min_directive__WEBPACK_IMPORTED_MODULE_17__.MinDirective, _validation_max_directive__WEBPACK_IMPORTED_MODULE_18__.MaxDirective, _common_ui_form_entry_inputCurrency_inputCurrency_directive__WEBPACK_IMPORTED_MODULE_19__.InputCurrencyDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.RequiredValidator, _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_20__.ErrorMessagesComponent, _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_21__.ErrorMessageComponent, _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_22__.CmsContentComponent, common_billing_eftAchDisclaimer_eftAchDisclaimer_component__WEBPACK_IMPORTED_MODULE_23__.EftAchDisclaimerComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_24__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_25__.WizardNextDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__.MatIcon],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.DecimalPipe],
  styles: ["[_nghost-%COMP%]   input[type='radio'][_ngcontent-%COMP%] {\n  vertical-align: text-top;\n  cursor: pointer;\n  z-index: 501;\n  margin-left: 10px;\n  margin-top: 0px;\n}\n[_nghost-%COMP%]   input[type='radio'][_ngcontent-%COMP%]:focus {\n  outline-width: 0px;\n}\n[_nghost-%COMP%]   input[type='radio'][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  padding-left: 48px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin-bottom: 0px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d1d1d5;\n  border-top-width: 0px;\n  cursor: pointer;\n  z-index: 500;\n  user-select: none;\n  \n  -webkit-user-select: none;\n  \n  -khtml-user-select: none;\n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n}\n[_nghost-%COMP%]   input[type='radio'][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background-color: #d1d1d5;\n  box-shadow: 0px 0px 0px 1px #2b90ff;\n}\n[_nghost-%COMP%]   input[type='radio'][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%], [_nghost-%COMP%]   input[type='radio'][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]    > stack-layout[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-right: 10px;\n  width: 100px;\n  text-align: right;\n}\n[_nghost-%COMP%]   .stack-layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: 44px !important;\n  position: relative;\n}\n[_nghost-%COMP%]   .stack-layout[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .stack-layout[_ngcontent-%COMP%]:first-of-type    > input[type='radio'][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  border-top-width: 1px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n[_nghost-%COMP%]   .stack-layout[_ngcontent-%COMP%]:last-of-type    > input[type='radio'][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n[_nghost-%COMP%]   .stack-layout[_ngcontent-%COMP%]    > input[type='radio'][_ngcontent-%COMP%]:invalid    + label[_ngcontent-%COMP%] {\n  border-left-color: #fc2125;\n  border-right-color: #fc2125;\n}\n[_nghost-%COMP%]   .stack-layout[_ngcontent-%COMP%]:nth-child(2)    > input[type='radio'][_ngcontent-%COMP%]:invalid    + label[_ngcontent-%COMP%] {\n  border-top-color: #fc2125;\n}\n[_nghost-%COMP%]   .stack-layout[_ngcontent-%COMP%]:last-of-type    > input[type='radio'][_ngcontent-%COMP%]:invalid    + label[_ngcontent-%COMP%] {\n  border-bottom-color: #fc2125;\n}\n[_nghost-%COMP%]   input[type='radio'][_ngcontent-%COMP%]:not(:checked)    + label[for='paymentPlanOtherAmount'][_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:first-child) {\n  display: none;\n}\n[_nghost-%COMP%]   label[for='paymentPlanOtherAmount'][_ngcontent-%COMP%] {\n  display: flex !important;\n}\n[_nghost-%COMP%]   label[for='paymentPlanOtherAmount'][_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n  margin-left: 25%;\n}\n[_nghost-%COMP%]   input.currency[_ngcontent-%COMP%] {\n  float: right !important;\n  padding-left: 2em;\n  padding-right: 5px;\n  width: 100px;\n  text-align: right;\n  border: 1px solid #2b90ff;\n  border-radius: 3px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   .selection-to-header-spacing[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n[_nghost-%COMP%]   .otherAmountPadding[_ngcontent-%COMP%] {\n  height: 32px !important;\n  width: 133px;\n  text-align: end;\n}\n[_nghost-%COMP%]   input.otherAmountPadding[_ngcontent-%COMP%]:valid, [_nghost-%COMP%]   input.otherAmountPadding.ng-valid[_ngcontent-%COMP%] {\n  border: 0px;\n}\n[_nghost-%COMP%]   input.otherAmountPadding[_ngcontent-%COMP%]:invalid, [_nghost-%COMP%]   input.otherAmountPadding.ng-invalid[_ngcontent-%COMP%] {\n  border-width: 1px;\n  border-color: #fc2125;\n}\n[_nghost-%COMP%]   .otherAmountMargin[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  display: flex;\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  position: relative !important;\n}\n[_nghost-%COMP%]   .boxSpread[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .staticOtherAmountPadding[_ngcontent-%COMP%] {\n  padding-top: 5px !important;\n}\n[_nghost-%COMP%]   .spanReadjust[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  font-size: 16px;\n  font-weight: bold;\n  padding-top: 2px;\n}\n[_nghost-%COMP%]   .noteBoxLayout[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  padding: 16px 20px;\n  margin-left: -20px;\n  margin-right: -20px;\n  border-radius: 10px 10px;\n}\n[_nghost-%COMP%]   .inputPosition[_ngcontent-%COMP%] {\n  position: absolute;\n  width: auto;\n  height: auto;\n}\n[_nghost-%COMP%]   .otherAmountWarning[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: 10px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdFBheW1lbnQubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxlcnJvci5sZXNzIiwiLi5cXC4uXFxzdHlsZXNcXHRoZW1lXFxtaXhpbnNcXGZvbnRzLmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xcdGV4dGJveC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRVEsd0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUhSO0FBSEE7RUFVUSxrQkFBQTtBQUpSO0FBTkE7RUFjUSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQU5OLGtDQUFrQztFQU81Qix5QkFBQTtFQUxOLFdBQVc7RUFNTCx3QkFBQTtFQUpOLG1CQUFtQjtFQUtiLHNCQUFBO0VBSE4sWUFBWTtFQUlOLHFCQUFBO0VBRk4sMkJBQTJCO0FBQzdCO0FBNUJBO0VBa0NRLHlCQUFBO0VBQ0EsbUNBQUE7QUFIUjtBQWhDQTs7RUF3Q1EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUpSO0FBdkNBO0VBK0NRLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBTFI7QUE1Q0E7RUFxRFEsYUFBQTtBQU5SO0FBL0NBO0VBeURRLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQVBSO0FBcERBO0VBK0RRLCtCQUFBO0VBQ0EsZ0NBQUE7QUFSUjtBQXhEQTtFQW9FUSwwQkFBQTtFQUNBLDJCQUFBO0FBVFI7QUE1REE7RUF5RVEseUJBQUE7QUFWUjtBQS9EQTtFQTZFUSw0QkFBQTtBQVhSO0FBbEVBO0VBaUZRLGFBQUE7QUFaUjtBQXJFQTtFQXNGUSx3QkFBQTtBQWRSO0FBeEVBO0VBMEZRLGdCQUFBO0FBZlI7QUEzRUE7RUE4RlEsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQWhCUjtBQXBGQTtFQXdHUSxXQUFBO0FBakJSO0FBdkZBO0VBNEdRLGdCQUFBO0FBbEJSO0FBMUZBO0VBZ0hRLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFuQlI7QUEvRkE7O0VBdUhRLFdBQUE7QUFwQlI7QUFuR0E7O0VBNEhRLGlCQUFBO0VDaEhKLHFCQUFBO0FENEZKO0FBeEdBO0VBaUlRLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBdEJSO0FBN0dBO0VBdUlRLDZCQUFBO0FBdkJSO0FBaEhBO0VBMklRLDhCQUFBO0FBeEJSO0FBbkhBO0VBK0lRLDJCQUFBO0FBekJSO0FBdEhBO0VFS0kseUJBQUE7RUYrSUksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUExQlI7QUE1SEE7RUdLSSx5QkFBQTtFSHNKSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQTNCUjtBQW5JQTtFQWtLUSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBNUJSO0FBeElBO0VBd0tRLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUE3QlIiLCJmaWxlIjoic2VsZWN0UGF5bWVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBpbnB1dFt0eXBlPSdyYWRpbyddIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHotaW5kZXg6IDUwMTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPSdyYWRpbyddOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZS13aWR0aDogMHB4O1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9J3JhZGlvJ10gKyBsYWJlbCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNDhweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIC8vaGVpZ2h0OiA0NHB4O1xuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBAaXJvbi1ncmF5O1xuICAgICAgICBib3JkZXItdG9wLXdpZHRoOiAwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgei1pbmRleDogNTAwO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gICAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgICB9XG5cblxuICAgIGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIGxhYmVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQGlyb24tZ3JheTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4IEBkb2RnZXItYmx1ZTtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPSdyYWRpbyddICsgbGFiZWwgPiBzdHJvbmcsXG4gICAgaW5wdXRbdHlwZT0ncmFkaW8nXSArIGxhYmVsID4gc3RhY2stbGF5b3V0IHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG5cbiAgICAuc3RhY2stbGF5b3V0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAuc3RhY2stbGF5b3V0ID4gKiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLnN0YWNrLWxheW91dDpmaXJzdC1vZi10eXBlID4gaW5wdXRbdHlwZT0ncmFkaW8nXSArIGxhYmVsIHtcbiAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICB9XG5cbiAgICAuc3RhY2stbGF5b3V0Omxhc3Qtb2YtdHlwZSA+IGlucHV0W3R5cGU9J3JhZGlvJ10gKyBsYWJlbCB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIH1cblxuICAgIC5zdGFjay1sYXlvdXQgPiBpbnB1dFt0eXBlPSdyYWRpbyddOmludmFsaWQgKyBsYWJlbCB7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBAdG9yY2gtcmVkO1xuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IEB0b3JjaC1yZWQ7XG4gICAgfVxuXG4gICAgLnN0YWNrLWxheW91dDpudGgtY2hpbGQoMikgPiBpbnB1dFt0eXBlPSdyYWRpbyddOmludmFsaWQgKyBsYWJlbCB7XG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IEB0b3JjaC1yZWQ7XG4gICAgfVxuXG4gICAgLnN0YWNrLWxheW91dDpsYXN0LW9mLXR5cGUgPiBpbnB1dFt0eXBlPSdyYWRpbyddOmludmFsaWQgKyBsYWJlbCB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IEB0b3JjaC1yZWQ7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT0ncmFkaW8nXTpub3QoOmNoZWNrZWQpICsgbGFiZWxbZm9yPSdwYXltZW50UGxhbk90aGVyQW1vdW50J10gPiA6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuXG4gICAgbGFiZWxbZm9yPSdwYXltZW50UGxhbk90aGVyQW1vdW50J10ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgbGFiZWxbZm9yPSdwYXltZW50UGxhbk90aGVyQW1vdW50J10gPiA6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgfVxuXG4gICAgaW5wdXQuY3VycmVuY3kge1xuICAgICAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgQGRvZGdlci1ibHVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxuICAgIC8vV2ViUmVmcmVzaFxuICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xuICAgIH1cblxuICAgIC5zZWxlY3Rpb24tdG8taGVhZGVyLXNwYWNpbmcge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5vdGhlckFtb3VudFBhZGRpbmcge1xuICAgICAgICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEzM3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxuXG4gICAgaW5wdXQub3RoZXJBbW91bnRQYWRkaW5nOnZhbGlkLFxuICAgIGlucHV0Lm90aGVyQW1vdW50UGFkZGluZy5uZy12YWxpZCB7XG4gICAgICAgIGJvcmRlcjogMHB4O1xuICAgIH1cblxuICAgIGlucHV0Lm90aGVyQW1vdW50UGFkZGluZzppbnZhbGlkLFxuICAgIGlucHV0Lm90aGVyQW1vdW50UGFkZGluZy5uZy1pbnZhbGlkIHtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgIC50LWVycm9yLS1ib3JkZXJDb2xvcihAdGhlbWUtbGlnaHQpO1xuICAgIH1cblxuICAgIC5vdGhlckFtb3VudE1hcmdpbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIH1cblxuICAgIC5mb3JtLXRleHQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYm94U3ByZWFkIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIC5zdGF0aWNPdGhlckFtb3VudFBhZGRpbmcge1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnNwYW5SZWFkanVzdCB7XG4gICAgICAgIC50LWJvZHktLWZvbnRGYW1pbHk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgfVxuXG4gICAgLm5vdGVCb3hMYXlvdXQge1xuICAgICAgICAudC10ZXh0Ym94LS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lLWxpZ2h0KTtcbiAgICAgICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweDtcbiAgICB9XG5cbiAgICAuaW5wdXRQb3NpdGlvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAub3RoZXJBbW91bnRXYXJuaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG5AZXJyb3ItLWNvbG9yLWxpZ2h0OiBAdG9yY2gtcmVkO1xuQHdhcm5pbmctLWNvbG9yLWxpZ2h0OiBAcGl6YXp6LWdvbGQ7XG5Ac3VjY2Vzcy0tY29sb3ItbGlnaHQ6IEBjYWx5cHNvLWJsdWU7XG5cblxuLnQtZXJyb3ItLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2Vycm9yLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWVycm9yLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdlcnJvci0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtZXJyb3ItLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdlcnJvci0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXdhcm5pbmctLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICd3YXJuaW5nLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtc3VjY2Vzcy0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3N1Y2Nlc3MtLWNvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbi50LWhlYWRlci0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtam9zdDtcbn1cblxuLnQtYm9keS0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG5AdGV4dGJveC0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAYWxhYmFzdGVyLWdyYXk7XG5cblxuLnQtdGV4dGJveC0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3RleHRib3gtLWJhY2tncm91bmRDb2xvci1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cbiJdfQ== */"],
  data: {
    animation: [animations_collapse__WEBPACK_IMPORTED_MODULE_1__.collapseTrigger]
  }
});

/***/ })

}]);
//# sourceMappingURL=997.37d5311388f097ab.js.map