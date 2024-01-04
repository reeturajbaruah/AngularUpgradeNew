"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[445],{

/***/ 5691:
/*!***********************************************!*\
  !*** ./src/frp3/confirm/confirm.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPaymentComponent": () => (/* binding */ ConfirmPaymentComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ 7370);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_ui_modals_billingModal_billingModal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/ui/modals/billingModal/billingModal.component */ 37882);
/* harmony import */ var decimal_js_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! decimal.js-light */ 75671);
/* harmony import */ var decimal_js_light__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(decimal_js_light__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var frp3_frame_frame_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! frp3/frame/frame.component */ 43012);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var violationsCommon_services_webapi_webApis_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! violationsCommon/services/webapi/webApis.service */ 27898);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_form_entry_emailAddress_emailAddress_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/form-entry/emailAddress/emailAddress.component */ 37864);
/* harmony import */ var _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/display/payment/paymentDisplay.component */ 38321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/display/address/addressDisplay.component */ 23204);
/* harmony import */ var _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/ui/containers/row/row.component */ 80001);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 38661);



























function ConfirmPaymentComponent_address_display_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "address-display", 20);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("address", ctx_r1.billingInfo.billingType === ctx_r1.BillingType.Credit ? ctx_r1.billingInfo.credit : ctx_r1.billingInfo.eft)("international", ctx_r1.billingInfo.billingType === ctx_r1.BillingType.Credit ? ctx_r1.billingInfo.credit.international : ctx_r1.billingInfo.eft.international)("showLabels", true);
  }
}

class ConfirmPaymentComponent {
  constructor(parent, uiRouterGlobals, state, webApis, responseErrorService, dialogService) {
    this.parent = parent;
    this.uiRouterGlobals = uiRouterGlobals;
    this.state = state;
    this.webApis = webApis;
    this.responseErrorService = responseErrorService;
    this.dialogService = dialogService;
    this.BillingType = common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType;
    this.totalPayment = new decimal_js_light__WEBPACK_IMPORTED_MODULE_5__.Decimal(0);
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
    this.totalPayment = this.totalPayment.plus(this.plateContainer.paymentAmount).plus(this.plateContainer.assocPlatesPaymentAmount);
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
      _this2.plateContainer.plate.invoices.map(i => {
        i.paymentAmount = i.paymentAmount === i.invoiceDueBeforeDiscount ? i.invoiceDueAfterDiscount : i.paymentAmount;
      });

      _this2.plateContainer.associatedPlates.map(p => {
        p.totalPaymentAmount = p.totalPaymentAmountFRP3;
        p.invoices.map(inv => {
          inv.paymentAmount = inv.paymentAmount === inv.invoiceDueBeforeDiscount ? inv.invoiceDueAfterDiscount : inv.paymentAmount;
        });
      });

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
        paymentAmount: _this2.totalPayment.toNumber()
      };
      const response = yield _this2.webApis.makeMultiPayment(paymentRequest);
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
      return _this4.dialogService.openSliderCentered(common_ui_modals_billingModal_billingModal_component__WEBPACK_IMPORTED_MODULE_4__.BillingModalComponent, data).then(result => {
        if (result) {
          _this4.billingInfo = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.cloneDeep)(result.billingInformation);
          _this4.billingInfo.billingType = result.billingType;
        }
      });
    })();
  }

}

ConfirmPaymentComponent.ɵfac = function ConfirmPaymentComponent_Factory(t) {
  return new (t || ConfirmPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](frp3_frame_frame_component__WEBPACK_IMPORTED_MODULE_6__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_20__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_20__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](violationsCommon_services_webapi_webApis_service__WEBPACK_IMPORTED_MODULE_7__.WebApisService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_8__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_8__.DialogService));
};

ConfirmPaymentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
  type: ConfirmPaymentComponent,
  selectors: [["violations-confirm-payment"]],
  viewQuery: function ConfirmPaymentComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵviewQuery"](common_ui__WEBPACK_IMPORTED_MODULE_2__.WizardComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵloadQuery"]()) && (ctx.wizardComponent = _t.first);
    }
  },
  inputs: {
    emailAddress: "emailAddress",
    stateList: "stateList",
    countryList: "countryList",
    cmsData: "cmsData"
  },
  decls: 35,
  vars: 17,
  consts: [["validation-focus", "", "name", "violationsForm", "fxLayout", "column", 1, "u-spacing--widthFill"], ["ConfirmForm", "ngForm"], [1, "u-spacing__divider--marginTopBottom"], [1, "u-spacing--widthFill", "u-spacing__fieldToSection--marginTop", 3, "emailAddress", "header", "name", "required", "hideMinMax", "emailAddressChange"], [1, "u-spacing__cardToCard--marginTop"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "u-spacing--widthFill"], ["fxFlex", "grow"], ["fxFlex", "none", "aria-label", "Edit", 1, "editButton", 3, "click"], [3, "billingType", "bankDetails", "creditCard", "showAccountNumber", "showLabels"], [3, "address", "international", "showLabels", 4, "ngIf"], [1, "u-spacing__rowToSection--marginTop", 3, "rowType"], ["col-start", "", "id", "totalPaymentLabel", "fxFlex", "grow"], ["col-end", "", "id", "totalPaymentValue", "fxFlex", "none"], [3, "value"], [1, "u-spacing__buttonToField--marginTop"], [3, "next", "previous"], ["wizard-next", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["wizard-cancel", ""], [3, "address", "international", "showLabels"]],
  template: function ConfirmPaymentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "page-centered-container")(1, "form", 0, 1)(3, "card-container")(4, "header")(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](7, "mat-divider", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "article");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "email-address", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("emailAddressChange", function ConfirmPaymentComponent_Template_email_address_emailAddressChange_10_listener($event) {
        return ctx.plateContainer.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "card-container", 4)(12, "header")(13, "div", 5)(14, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ConfirmPaymentComponent_Template_a_click_16_listener() {
        return ctx.openModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17, " Edit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](18, "mat-divider", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](19, "payment-display", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](20, ConfirmPaymentComponent_address_display_20_Template, 1, 3, "address-display", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "row-container", 10)(22, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](24, "section", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](25, "currency", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "section", 14)(27, "wizard-ui", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("next", function ConfirmPaymentComponent_Template_wizard_ui_next_27_listener($event) {
        return ctx.submit($event);
      })("previous", function ConfirmPaymentComponent_Template_wizard_ui_previous_27_listener($event) {
        return ctx.previous($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](28, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](29, "PAY");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](30, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](31, "mat-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](32, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](33, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](34, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"]((ctx.cmsData == null ? null : ctx.cmsData.EMAIL_TITLE) || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"]((ctx.cmsData == null ? null : ctx.cmsData.EMAIL_INSTRUCTION) || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("emailAddress", ctx.plateContainer.email)("header", (ctx.cmsData == null ? null : ctx.cmsData.EMAIL_HEADER) || "")("name", ctx.emailAddress)("required", false)("hideMinMax", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"]((ctx.cmsData == null ? null : ctx.cmsData.BILLING_INFO_HEADER) || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("billingType", ctx.billingInfo.billingType)("bankDetails", ctx.billingInfo.eft)("creditCard", ctx.billingInfo.credit)("showAccountNumber", true)("showLabels", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.billingInfo.billingType);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("rowType", "emphasis");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", (ctx.cmsData == null ? null : ctx.cmsData.TOTAL_PAYMENT) || "", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", ctx.totalPayment);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_9__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_10__.FocusDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultLayoutDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_11__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__.MatDivider, _common_ui_form_entry_emailAddress_emailAddress_component__WEBPACK_IMPORTED_MODULE_12__.EmailAddressComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultFlexDirective, _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_13__.PaymentDisplayComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_14__.AddressDisplayComponent, _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_15__.RowContainerComponent, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_16__.CurrencyComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_17__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_18__.WizardNextDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon],
  styles: ["[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   #totalPaymentLabel[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  color: #34353a;\n  font-weight: 700;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   #totalPaymentValue[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: 'Montserrat';\n  color: #34353a;\n  font-weight: 700;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   .editButton[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: 'Jost';\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0ubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxmb250cy5sZXNzIiwiLi5cXC4uXFxzdHlsZXNcXHRoZW1lXFxtaXhpbnNcXHBhZ2UubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUdRLGdCQUFBO0FBSlI7QUFDQTtFQU9RLFdBQUE7QUFMUjtBQUZBO0VDS0kseUJBQUE7RUN3Q0EsY0FBQTtFRmhDSSxnQkFBQTtFQUNBLGVBQUE7QUFOUjtBQVJBO0VBa0JRLGlCQUFBO0VDYkoseUJBQUE7RUN5QkEsY0FBQTtFRlRJLGdCQUFBO0VBQ0EsZUFBQTtBQVBSO0FBZkE7RUEwQlEsZ0JBQUE7RUN6QkosbUJBQUE7QURrQkoiLCJmaWxlIjoiY29uZmlybS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcblxuICAgIGgyIHtcbiAgICAgICAgbWF4LWhlaWdodDogNzBweDtcbiAgICB9XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG5cbiAgICAjdG90YWxQYXltZW50TGFiZWwge1xuICAgICAgICAudC1ib2R5LS1mb250RmFtaWx5O1xuICAgICAgICAudC1oZWFkZXItLWNvbG9yKEB0aGVtZS1saWdodCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAjdG90YWxQYXltZW50VmFsdWUge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgLnQtYm9keS0tZm9udEZhbWlseTtcbiAgICAgICAgLnQtYm9keS0tY29sb3IoQHRoZW1lLWxpZ2h0KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5lZGl0QnV0dG9uIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgLnQtaGVhZGVyLS1mb250RmFtaWx5O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG4udC1oZWFkZXItLWZvbnRGYW1pbHkoKSB7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LWpvc3Q7XG59XG5cbi50LWJvZHktLWZvbnRGYW1pbHkoKSB7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LW1vbnRzZXJyYXQ7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cblxuQGJvZHktLWJhY2tncm91bmRDb2xvci1saWdodDogQHdoaXRlO1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjItbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AYm9keS0tY29sb3ItbGlnaHQ6IEB0dW5hLWdyYXk7XG5AYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3ItbGlnaHQ6IEB0cm9waWNhbC1yYWluLWZvcmVzdC1ncmVlbjtcbkBib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1saWdodDogQHNpbHZlci1ncmF5O1xuQGhlYWRlci0tY29sb3ItbGlnaHQ6IEB0dW5hLWdyYXk7XG5AbGFiZWwtLWNvbG9yLWxpZ2h0OiBAYm91bGRlci1ncmF5O1xuQHNlbGVjdF9fYXJyb3ctLWNvbG9yLWxpZ2h0OiBAc2NvcnBpb24tZ3JheTtcbkBsaW5rLS1jb2xvci1saWdodDogQGF6dXJlLXJhZGlhbmNlLWJsdWU7XG5AZGl2aWRlci0tYm9yZGVyQ29sb3ItbGlnaHQ6IEBzY2hvb2wtYnVzLXllbGxvdztcblxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IyKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvcjItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjMoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMy1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWhlYWRlci0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnaGVhZGVyLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWxhYmVsLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdsYWJlbC0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1zZWxlY3RfX2Fycm93LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdzZWxlY3RfX2Fycm93LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWxpbmstLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xpbmstLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvciAhaW1wb3J0YW50OyAvLyBtYXJrZWQgYXMgIWltcG9ydGFudCB0byBvdmVycmlkZSBib290c3RyYXBcbn1cblxuLnQtZGl2aWRlci0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnZGl2aWRlci0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtZGl2aWRlcl9fZGFzaC0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 43012:
/*!*******************************************!*\
  !*** ./src/frp3/frame/frame.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrameComponent": () => (/* binding */ FrameComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/providers */ 61264);
/* harmony import */ var common_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/utilities */ 56516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @uirouter/angular */ 99305);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ 39387);
/* harmony import */ var _common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/services/webStorageService/webStorage.service */ 38898);
/* harmony import */ var _common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ui/title-banner/title-banner.component */ 38018);
/* harmony import */ var _common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ui/wizard/stepper/stepper.component */ 63457);










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
      name: this.cms.Step4,
      background: 'secondary'
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
  return new (t || FrameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_9__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](constants_module__WEBPACK_IMPORTED_MODULE_3__.WebStorageConst), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_constants__WEBPACK_IMPORTED_MODULE_4__.StateNames), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](common_providers__WEBPACK_IMPORTED_MODULE_1__.WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_5__.WebStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_9__.StateService));
};

FrameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: FrameComponent,
  selectors: [["violation-frame-component"]],
  inputs: {
    cms: "cms",
    stateList: "stateList",
    countryList: "countryList"
  },
  decls: 5,
  vars: 3,
  consts: [[1, "refresh-2020"], [3, "steps", "currentStepNum"]],
  template: function FrameComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "main", 0)(1, "title-banner");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "stepper", 1)(4, "ui-view");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.cms.Title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("steps", ctx.steps)("currentStepNum", ctx.stepNum);
    }
  },
  directives: [_common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_6__.TitleBannerComponent, _common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_7__.StepperComponent, _uirouter_angular__WEBPACK_IMPORTED_MODULE_10__.UIView],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcmFtZS5sZXNzIn0= */"]
});

/***/ }),

/***/ 30937:
/*!*****************************************!*\
  !*** ./src/frp3/grid/grid.component.ts ***!
  \*****************************************/
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
/* harmony import */ var animations_collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animations/collapse */ 16573);
/* harmony import */ var _prevPaidInvoices_prevPaidInvoicesModal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prevPaidInvoices/prevPaidInvoicesModal.component */ 56565);
/* harmony import */ var violationsCommon_components_violationsPlate_violationsPlate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../violationsCommon/components/violationsPlate/violationsPlate.component */ 42349);
/* harmony import */ var violationsCommon_components_violationsDetails_violationsDetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../violationsCommon/components/violationsDetails/violationsDetails.component */ 56799);
/* harmony import */ var decimal_js_light__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! decimal.js-light */ 75671);
/* harmony import */ var decimal_js_light__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(decimal_js_light__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var frp3_frame_frame_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! frp3/frame/frame.component */ 43012);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var _common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/services/webStorageService/webStorage.service */ 38898);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/containers/page/pageFilled.component */ 95556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/display/cmsContent/cmsContent.component */ 89707);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_matPaginatorGoto_matPaginatorGoto_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/ui/matPaginatorGoto/matPaginatorGoto.component */ 9038);
/* harmony import */ var _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/ui/containers/row/row.component */ 80001);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../pipes/safeHtml.pipe */ 49985);































function GridComponent_section_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "safeHtml");
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 1, ctx_r6.cmsData.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
  }
}

function GridComponent_section_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "safeHtml");
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 1, ctx_r7.veriTransCmsData.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
  }
}

function GridComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "section", 7)(1, "header")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "cms-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, GridComponent_section_1_div_6_Template, 2, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, GridComponent_section_1_div_7_Template, 2, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("template", ctx_r0.cmsData.PAGE_HEADER)("data", ctx_r0.cms.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r0.plateContainer.hasMultipleAccts);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r0.plateContainer.hasMultipleAccts);
  }
}

function GridComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "section", 7)(1, "header")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "cms-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "mat-divider", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](6, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("template", ctx_r1.cmsData.IMPORTANT_REMINDER_HEADER)("data", ctx_r1.prevPaidCmsData.HEADER);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](6, 3, ctx_r1.prevPaidCmsData.LongDescription), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
  }
}

function GridComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "section", 12)(1, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "h2", 10)(3, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("innerHTML", ctx_r2.cmsData.IMPORTANT_REMINDER_HEADER, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("innerHTML", ctx_r2.cmsData.LongDescription, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
  }
}

function GridComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 13)(1, "mat-paginator-goto", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("page", function GridComponent_div_8_Template_mat_paginator_goto_page_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return ctx_r8.updateViolationsDetailsTable($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("length", ctx_r3.cms.data["itemsFound"])("pageIndex", 0)("pageSize", ctx_r3.defaultPageSize)("hidePageSize", true);
  }
}

function GridComponent_ng_template_9_violations_details_rows_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "violations-details-rows", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("changeAllSelected", function GridComponent_ng_template_9_violations_details_rows_4_Template_violations_details_rows_changeAllSelected_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return ctx_r20.detailsChangeSelectAll("ap-row-searchPlate");
    })("afterComputeTotals", function GridComponent_ng_template_9_violations_details_rows_4_Template_violations_details_rows_afterComputeTotals_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return ctx_r22.calSummaryValues();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("isEditAllowed", true)("arePlatesExpanded", true)("hideFooter", true)("caoToolTipCms", ctx_r10.cmsData.CAO_TOOL_TIP)("cmsDataOverPmnt", ctx_r10.overpaymentModalCmsContent)("plate", ctx_r10.searchPlate.plate)("paginatedPlate", ctx_r10.searchPlate.plate)("selectAllAsDefault", true)("disableSelectAll", true);
  }
}

function GridComponent_ng_template_9_violations_details_rows_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "violations-details-rows", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("changeAllSelected", function GridComponent_ng_template_9_violations_details_rows_5_Template_violations_details_rows_changeAllSelected_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return ctx_r23.detailsChangeSelectAll("ap-row-searchPlate-mobile");
    })("afterComputeTotals", function GridComponent_ng_template_9_violations_details_rows_5_Template_violations_details_rows_afterComputeTotals_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return ctx_r25.calSummaryValues();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("isEditAllowed", true)("arePlatesExpanded", true)("hideFooter", true)("caoToolTipCms", ctx_r11.cmsData.CAO_TOOL_TIP)("cmsDataOverPmnt", ctx_r11.overpaymentModalCmsContent)("plate", ctx_r11.searchPlate.plate)("paginatedPlate", ctx_r11.searchPlate.plate)("selectAllAsDefault", true)("disableSelectAll", true);
  }
}

function GridComponent_ng_template_9_violations_details_rows_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "violations-details-rows", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("changeAllSelected", function GridComponent_ng_template_9_violations_details_rows_6_Template_violations_details_rows_changeAllSelected_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return ctx_r26.detailsChangeSelectAll("ap-row-searchPlate");
    })("afterComputeTotals", function GridComponent_ng_template_9_violations_details_rows_6_Template_violations_details_rows_afterComputeTotals_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return ctx_r28.calSummaryValues();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("isEditAllowed", true)("arePlatesExpanded", true)("hideFooter", true)("caoToolTipCms", ctx_r12.cmsData.CAO_TOOL_TIP)("cmsDataOverPmnt", ctx_r12.overpaymentModalCmsContent)("plate", ctx_r12.searchPlate.plate)("paginatedPlate", ctx_r12.paginatedPlate)("selectAllAsDefault", true)("disableSelectAll", true);
  }
}

function GridComponent_ng_template_9_violations_details_rows_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 45)(1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function GridComponent_ng_template_9_violations_details_rows_7_div_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return ctx_r30.mobileLoadMore();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Load more");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}

function GridComponent_ng_template_9_violations_details_rows_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "violations-details-rows", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("changeAllSelected", function GridComponent_ng_template_9_violations_details_rows_7_Template_violations_details_rows_changeAllSelected_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return ctx_r32.detailsChangeSelectAll("ap-row-searchPlate-mobile");
    })("afterComputeTotals", function GridComponent_ng_template_9_violations_details_rows_7_Template_violations_details_rows_afterComputeTotals_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return ctx_r34.calSummaryValues();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, GridComponent_ng_template_9_violations_details_rows_7_div_1_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("isEditAllowed", true)("arePlatesExpanded", true)("hideFooter", true)("caoToolTipCms", ctx_r13.cmsData.CAO_TOOL_TIP)("cmsDataOverPmnt", ctx_r13.overpaymentModalCmsContent)("plate", ctx_r13.searchPlate.plate)("paginatedPlate", ctx_r13.mobileLoadedPlate)("selectAllAsDefault", true)("disableSelectAll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r13.cms.data["itemsFound"] >= ctx_r13.paginationLimit && ctx_r13.mobileLoadedCombinedViolationsArrayLength < ctx_r13.cms.data["itemsFound"]);
  }
}

function GridComponent_ng_template_9_a_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function GridComponent_ng_template_9_a_8_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return ctx_r35.openPrevPaidInvoices();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " View Previously Paid Invoices ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}

function GridComponent_ng_template_9_ng_container_9_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div")(2, "violations-plate-row", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("isCollapsedChange", function GridComponent_ng_template_9_ng_container_9_ng_container_6_Template_violations_plate_row_isCollapsedChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r41);
      const associatedPlate_r38 = restoredCtx.$implicit;
      return associatedPlate_r38.collapsed = $event;
    })("changeSelectionAll", function GridComponent_ng_template_9_ng_container_9_ng_container_6_Template_violations_plate_row_changeSelectionAll_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r41);
      const i_r39 = restoredCtx.index;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return ctx_r42.plateChangeSelectAll("ap-rows-" + i_r39);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 50)(4, "violations-details-rows", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("afterComputeTotals", function GridComponent_ng_template_9_ng_container_9_ng_container_6_Template_violations_details_rows_afterComputeTotals_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r41);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return ctx_r43.associatedPlateSelTot();
    })("changeAllSelected", function GridComponent_ng_template_9_ng_container_9_ng_container_6_Template_violations_details_rows_changeAllSelected_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r41);
      const i_r39 = restoredCtx.index;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return ctx_r44.detailsChangeSelectAll("ap-row-" + i_r39);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const associatedPlate_r38 = ctx.$implicit;
    const i_r39 = ctx.index;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("id", "ap-row-" + i_r39)("hideHeader", i_r39 > 0)("plate", associatedPlate_r38.plate)("showCollapseUi", (associatedPlate_r38.plate == null ? null : associatedPlate_r38.plate.invoicesAndViolations.length) > 0)("isCollapsed", associatedPlate_r38.collapsed)("selectAllAsDefault", true)("isEditAllowed", true)("isRound", true)("isAssociated", true)("cmsData", ctx_r37.cmsContentPmntPlan);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@collapse", associatedPlate_r38.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("id", "ap-rows-" + i_r39)("isEditAllowed", true)("plate", associatedPlate_r38.plate)("paginatedPlate", associatedPlate_r38.plate)("hideFooter", true)("caoToolTipCms", ctx_r37.cmsData.CAO_TOOL_TIP)("selectAllAsDefault", true)("disableSelectAll", true)("cmsDataOverPmnt", ctx_r37.overpaymentModalCmsContent);
  }
}

function GridComponent_ng_template_9_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "section", 12)(2, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "h2", 10)(4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, GridComponent_ng_template_9_ng_container_9_ng_container_6_Template, 5, 20, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("innerHTML", ctx_r15.cmsData.ASSOCIATED_PLATES_HEADER, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("innerHTML", ctx_r15.cmsData.ASSOCIATED_PLATES_DESC, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r15.associatedPlates);
  }
}

function GridComponent_ng_template_9_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "safeHtml");
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 1, ctx_r16.summaryCmsData.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
  }
}

function GridComponent_ng_template_9_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "safeHtml");
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 1, ctx_r17.cmsData.CAO_FEE_INFO), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
  }
}

function GridComponent_ng_template_9_row_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "row-container", 33)(1, "section", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "section", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "currency", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("rowType", "semi-emphasis")("isInner", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r18.summaryCmsData.LABEL_ADMIN_FEE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", ctx_r18.totalAdminFees);
  }
}

function GridComponent_ng_template_9_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "row-container", 33)(2, "section", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "section", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](6, "currency", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("rowType", "semi-emphasis")("isInner", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r19.summaryCmsData.LABEL_DISCOUNT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", ctx_r19.totalFeesDiscounted);
  }
}

function GridComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "section", 7)(1, "violations-plate-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("isCollapsedChange", function GridComponent_ng_template_9_Template_violations_plate_row_isCollapsedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return ctx_r45.searchPlate.collapsed = $event;
    })("changeSelectionAll", function GridComponent_ng_template_9_Template_violations_plate_row_changeSelectionAll_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r46);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return ctx_r47.plateChangeSelectAll("ap-rows-searchPlate");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "violations-plate-row", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("isCollapsedChange", function GridComponent_ng_template_9_Template_violations_plate_row_isCollapsedChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r46);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return ctx_r48.searchPlate.collapsed = $event;
    })("changeSelectionAll", function GridComponent_ng_template_9_Template_violations_plate_row_changeSelectionAll_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r46);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return ctx_r49.plateChangeSelectAll("ap-rows-searchPlate-mobile");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, GridComponent_ng_template_9_violations_details_rows_4_Template, 1, 9, "violations-details-rows", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, GridComponent_ng_template_9_violations_details_rows_5_Template, 1, 9, "violations-details-rows", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, GridComponent_ng_template_9_violations_details_rows_6_Template, 1, 9, "violations-details-rows", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, GridComponent_ng_template_9_violations_details_rows_7_Template, 2, 10, "violations-details-rows", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, GridComponent_ng_template_9_a_8_Template, 2, 0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, GridComponent_ng_template_9_ng_container_9_Template, 7, 3, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "section", 12)(11, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](12, "h2", 10)(13, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "div", 23)(15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](16, GridComponent_ng_template_9_span_16_Template, 2, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](17, GridComponent_ng_template_9_span_17_Template, 2, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "section", 26)(19, "div", 27)(20, "row-container", 28)(21, "section", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "section", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](24, "currency", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](25, GridComponent_ng_template_9_row_container_25_Template, 5, 4, "row-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](26, GridComponent_ng_template_9_ng_container_26_Template, 7, 4, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "row-container", 33)(28, "section", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "section", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](31, "currency", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](32, "row-container", 34)(33, "section", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](35, "section", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](36, "currency", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "wizard-ui", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("previous", function GridComponent_ng_template_9_Template_wizard_ui_previous_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r46);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return ctx_r50.goToPreviousState($event);
    })("next", function GridComponent_ng_template_9_Template_wizard_ui_next_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r46);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return ctx_r51.goToNextState($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](38, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](39, "CONTINUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](40, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](41, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](42, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](43, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("plate", ctx_r4.searchPlate.plate)("noDiscount", true)("cmsData", ctx_r4.cmsContentPmntPlan)("showCollapseUi", true)("isCollapsed", ctx_r4.searchPlate.collapsed)("selectAllAsDefault", true)("isEditAllowed", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("plate", ctx_r4.searchPlate.plate)("noDiscount", true)("cmsData", ctx_r4.cmsContentPmntPlan)("showCollapseUi", true)("isCollapsed", ctx_r4.searchPlate.collapsed)("selectAllAsDefault", true)("isEditAllowed", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@collapse", ctx_r4.searchPlate.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r4.cms.data["itemsFound"] < ctx_r4.paginationLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r4.cms.data["itemsFound"] < ctx_r4.paginationLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r4.cms.data["itemsFound"] >= ctx_r4.paginationLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r4.cms.data["itemsFound"] >= ctx_r4.paginationLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r4.searchPlate.plate.previouslyPaidInvoices && ctx_r4.searchPlate.plate.previouslyPaidInvoices.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r4.associatedPlates.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("innerHTML", ctx_r4.summaryCmsData.SUMMARY_HEADER, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r4.hasDiscount);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r4.searchPlate.plate.hasCAOFineEstimates);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("rowType", "semi-emphasis")("isTop", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r4.summaryCmsData.LABEL_SELECTED, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", ctx_r4.totalSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r4.totalAdminFees.equals(0));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r4.hasDiscount);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("rowType", "emphasis")("isInner", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r4.summaryCmsData.LABEL_TOTAL, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", ctx_r4.totalPaymentAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("rowType", "semi-emphasis")("isBottom", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r4.summaryCmsData.LABEL_REMAINING, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", ctx_r4.totalRemainingBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r4.searchPlate.plate.totalSelected === 0 && ctx_r4.associatedPlatesSelectedTot.equals(0));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r4.wizardBackLabel, " ");
  }
}

function GridComponent_ng_template_10_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function GridComponent_ng_template_10_a_5_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return ctx_r53.openPrevPaidInvoices();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " View Previously Paid Invoices ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}

function GridComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "violations-plate-row", 55)(2, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, GridComponent_ng_template_10_a_5_Template, 2, 0, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "section", 12)(7, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](8, "h2", 10)(9, "mat-divider", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](12, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "div", 59)(14, "div", 27)(15, "row-container", 28)(16, "section", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "section", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](19, "currency", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "row-container", 34)(21, "section", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "section", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](24, "currency", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "wizard-ui", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("previous", function GridComponent_ng_template_10_Template_wizard_ui_previous_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return ctx_r55.goToPreviousState($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](27, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("plate", ctx_r5.searchPlate.plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r5.prevPaidCmsData.NO_INVOICES);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r5.searchPlate.plate.previouslyPaidInvoices && ctx_r5.searchPlate.plate.previouslyPaidInvoices.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("innerHTML", ctx_r5.prevPaidCmsData.SUMMARY_HEADER, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](12, 14, ctx_r5.prevPaidCmsData.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("rowType", "emphasis")("isTop", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r5.prevPaidCmsData.LABEL_TOTAL_PAYMENT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("rowType", "semi-emphasis")("isBottom", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r5.prevPaidCmsData.LABEL_REMAINING_BALANCE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r5.wizardBackLabel, " ");
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
    this.summaryCmsData = {};
    this.prevPaidCmsData = {};
    this.veriTransCmsData = {};
    this.cms = {
      data: {}
    };
    this.associatedPlatesSelectedTot = new decimal_js_light__WEBPACK_IMPORTED_MODULE_8__.Decimal(0);
    this.associatedPlatesSelRemBal = new decimal_js_light__WEBPACK_IMPORTED_MODULE_8__.Decimal(0);
    this.associatedPlatesDiscounted = new decimal_js_light__WEBPACK_IMPORTED_MODULE_8__.Decimal(0);
    this.associatedPlatesAdminFees = new decimal_js_light__WEBPACK_IMPORTED_MODULE_8__.Decimal(0);
    this.totalSelected = new decimal_js_light__WEBPACK_IMPORTED_MODULE_8__.Decimal(0);
    this.totalFeesDiscounted = new decimal_js_light__WEBPACK_IMPORTED_MODULE_8__.Decimal(0);
    this.totalPaymentAmount = new decimal_js_light__WEBPACK_IMPORTED_MODULE_8__.Decimal(0);
    this.totalRemainingBalance = new decimal_js_light__WEBPACK_IMPORTED_MODULE_8__.Decimal(0);
    this.totalAdminFees = new decimal_js_light__WEBPACK_IMPORTED_MODULE_8__.Decimal(0);
    this.hasDiscount = false;
    this.violationFlowName = {
      0: 'OLVPS',
      1: 'FRP',
      2: 'CFDP'
    };

    this.getPreviouslyPaidPlate = plate => ({ ...plate,
      invoices: plate.previouslyPaidInvoices,
      uninvoicedViolations: [],
      plateDueBeforeDiscount: 0
    });

    this.hasViewableContent = plate => plate.invoices.length + plate.uninvoicedViolations.length > 0;

    this.getCurrentStep = hasOutstandingViolations => hasOutstandingViolations ? 1 : 0;

    this.savePlateContainer = () => {
      var _a;

      const {
        plate
      } = this.plateContainer; //Save Associated plates

      const plateContainerWithDiscount = { ...this.plateContainer,
        violationsFlowName: this.violationFlowName[this.plateContainer.plate.discountProgramCode],
        paymentAmount: plate.totalPaymentAmountFRP3,
        remainingBalance: plate.remainingBalance,
        assocPlatesPaymentAmount: this.associatedPlatesSelectedTot.minus(this.associatedPlatesDiscounted).plus((_a = this.associatedPlatesAdminFees) !== null && _a !== void 0 ? _a : 0).toNumber(),
        assocPlatesRemainingAmount: this.associatedPlatesSelRemBal.toNumber()
      };
      this.webStorage.setKeyValue(this.webStorageConst.enhancedViolationsPlateAndInvoiceData, plateContainerWithDiscount);
    };
  }

  get mobileLoadedCombinedViolationsArrayLength() {
    // Used for length comparison in HTML
    return this.mobileLoadedPlate.invoices.length + this.mobileLoadedPlate.uninvoicedViolations.length;
  }

  ngOnInit() {
    this.plateContainer = this.parent.getPlateContainer(); //The if else can be removed once we cleanup the CAF feature toggle

    if (this.plateContainer.plate.invoicesAndViolations) {
      //This is to sync the object references
      this.plateContainer.plate.invoices = this.plateContainer.plate.invoicesAndViolations.filter(violation => Array.isArray(violation.violations));
      this.plateContainer.plate.uninvoicedViolations = this.plateContainer.plate.invoicesAndViolations.filter(violation => !Array.isArray(violation.violations)); //Process associated plates' invoices and violations

      this.plateContainer.associatedPlates.forEach(p => {
        p.invoices = p.invoicesAndViolations.filter(violation => Array.isArray(violation.violations));
        p.uninvoicedViolations = p.invoicesAndViolations.filter(violation => !Array.isArray(violation.violations));
      });
    } else {
      this.plateContainer.plate.invoicesAndViolations = [].concat(this.plateContainer.plate.invoices, this.plateContainer.plate.uninvoicedViolations).filter(vio => !(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isNil)(vio)); //Else concat associated plates' invoices and violations not null

      this.plateContainer.associatedPlates.forEach(p => {
        p.invoicesAndViolations = [].concat(p.invoices, p.uninvoicedViolations).filter(vio => !(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isNil)(vio));
      });
    } //discountStringArray = discountStringArray.filter(x => !isNil(x));


    this.previouslyPaidPlate = this.getPreviouslyPaidPlate(this.plateContainer.plate);
    this.showPreviouslyPaidPlate = this.hasViewableContent(this.previouslyPaidPlate);
    this.hasOutstandingViolations = this.hasViewableContent(this.plateContainer.plate); //set to false to view previously paid only

    this.uiRouterGlobals.current.data.currentStep = this.getCurrentStep(this.hasOutstandingViolations);
    this.parent.stepNum = this.uiRouterGlobals.current.data.currentStep;
    this.summaryCmsData = this.cmsData.Children.filter(child => 'Summary' === child.ItemName)[0] || {};
    this.prevPaidCmsData = this.cmsData.Children.filter(child => 'Previously Paid' === child.ItemName)[0] || {};
    this.veriTransCmsData = this.cmsData.Children.filter(child => 'Verify Transactions' === child.ItemName)[0] || {};
    this.cms.data = {
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
    this.parent.scrollToTop(); //Mobile Pagination 

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
    } //Associated Plates


    this.associatedPlates = this.plateContainer.associatedPlates.map(associatedPlate => ({
      plate: associatedPlate,
      collapsed: true
    }));
    this.searchPlate = {
      plate: this.plateContainer.plate,
      collapsed: false
    };
    this.associatedPlates.sort((a, b) => a.plate.plateDueBeforeDiscount > b.plate.plateDueBeforeDiscount ? -1 : a.plate.plateDueBeforeDiscount < b.plate.plateDueBeforeDiscount ? 1 : 0);
  }

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
    this.dialogService.openSliderFilled(_prevPaidInvoices_prevPaidInvoicesModal_component__WEBPACK_IMPORTED_MODULE_5__.PrevPaidInvoicesComponent, data, {
      title: 'Previously Paid Invoices'
    });
  }

  goToNextState(targetState) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.savePlateContainer();

      yield _this.state.go(targetState, {
        billingInfo: _this.uiRouterGlobals.params.billingInfo
      });
    })();
  }

  goToPreviousState(targetState) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const to = _this2.plateContainer.plate.isNewEzTagAccountEligibile ? cavve_constants__WEBPACK_IMPORTED_MODULE_1__.stateNames.Offer : targetState;

      _this2.savePlateContainer();

      yield _this2.state.go(to);
    })();
  }

  plateChangeSelectAll(detailsId) {
    this.violationsDetailsCompList.forEach(comp => {
      if (comp.id === detailsId) {
        comp.areAllSelected = !comp.areAllSelected;
        comp.changeSelectAll();
      }
    });
  }

  detailsChangeSelectAll(plateId) {
    this.violationsPlateCompList.forEach(plate => {
      if (plate.id === plateId) {
        plate.areAllSelected = !plate.areAllSelected;
      }
    });
  }

  associatedPlateSelTot() {
    this.associatedPlatesSelectedTot = this.plateContainer.associatedPlates.reduce((acc, val) => {
      var _a;

      return acc.plus((_a = val.totalSelected) !== null && _a !== void 0 ? _a : 0);
    }, new decimal_js_light__WEBPACK_IMPORTED_MODULE_8__.Decimal(0));
    this.associatedPlatesSelRemBal = this.plateContainer.associatedPlates.reduce((acc, val) => {
      var _a;

      return acc.plus((_a = val.remainingBalance) !== null && _a !== void 0 ? _a : 0);
    }, new decimal_js_light__WEBPACK_IMPORTED_MODULE_8__.Decimal(0));
    this.associatedPlatesDiscounted = this.plateContainer.associatedPlates.reduce((acc, val) => {
      var _a;

      return acc.plus((_a = val.totalFeesDiscountedFRP3) !== null && _a !== void 0 ? _a : 0);
    }, new decimal_js_light__WEBPACK_IMPORTED_MODULE_8__.Decimal(0));
    this.associatedPlatesAdminFees = this.plateContainer.associatedPlates.reduce((acc, val) => {
      var _a;

      return acc.plus(val.totalSelected > 0 ? (_a = val.serviceFee) !== null && _a !== void 0 ? _a : 0 : 0);
    }, new decimal_js_light__WEBPACK_IMPORTED_MODULE_8__.Decimal(0));
    this.calSummaryValues();
  }

  calSummaryValues() {
    var _a, _b, _c, _d, _e, _f, _g;

    this.totalSelected = this.associatedPlatesSelectedTot.plus((_a = this.plateContainer.plate.totalSelected) !== null && _a !== void 0 ? _a : 0);
    this.totalFeesDiscounted = this.associatedPlatesDiscounted.plus((_b = this.plateContainer.plate.totalFeesDiscountedFRP3) !== null && _b !== void 0 ? _b : 0);
    this.totalAdminFees = this.associatedPlatesAdminFees.plus(this.plateContainer.plate.totalPaymentAmountFRP3 > 0 ? (_c = this.plateContainer.plate.serviceFee) !== null && _c !== void 0 ? _c : 0 : 0);
    this.totalPaymentAmount = this.associatedPlatesSelectedTot.minus((_d = this.associatedPlatesDiscounted) !== null && _d !== void 0 ? _d : 0).plus((_e = this.associatedPlatesAdminFees) !== null && _e !== void 0 ? _e : 0).plus((_f = this.plateContainer.plate.totalPaymentAmountFRP3) !== null && _f !== void 0 ? _f : 0);
    this.totalRemainingBalance = this.associatedPlatesSelRemBal.plus((_g = this.plateContainer.plate.remainingBalance) !== null && _g !== void 0 ? _g : 0);
    this.discountCheck();
  }

  discountCheck() {
    if (!this.hasDiscount && this.totalFeesDiscounted.greaterThan(0)) {
      this.hasDiscount = true;
    }
  }

}

GridComponent.ɵfac = function GridComponent_Factory(t) {
  return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](frp3_frame_frame_component__WEBPACK_IMPORTED_MODULE_9__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_22__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](constants_module__WEBPACK_IMPORTED_MODULE_10__.WebStorageConst), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_22__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_11__.WebStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_12__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](common_upgrades__WEBPACK_IMPORTED_MODULE_2__.ENVIRON_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_12__.ToasterService));
};

GridComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
  type: GridComponent,
  selectors: [["violation-grid"]],
  viewQuery: function GridComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](violationsCommon_components_violationsPlate_violationsPlate_component__WEBPACK_IMPORTED_MODULE_6__.ViolationsPlateComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](violationsCommon_components_violationsDetails_violationsDetails_component__WEBPACK_IMPORTED_MODULE_7__.ViolationsDetailsComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.violationsPlateCompList = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.violationsDetailsCompList = _t);
    }
  },
  inputs: {
    cmsData: "cmsData",
    cmsContentPmntPlan: "cmsContentPmntPlan"
  },
  decls: 11,
  vars: 9,
  consts: [["fxLayout", "column", "class", "u-spacing--widthFill", 4, "ngIf"], ["fxLayout", "column", "class", "u-spacing--widthFill u-spacing__headerToSection--marginTop", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "u-spacing--widthFill", "u-spacing__sectionToSection--marginTop"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "u-spacing--widthFill"], ["id", "records-found-text", 3, "fxFlex"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "auto", "fxLayout", "row", "fxLayoutAlign", "end center", 4, "ngIf"], [3, "ngIf"], ["fxLayout", "column", 1, "u-spacing--widthFill"], [3, "template", "data"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], [1, "u-spacing__divider--marginTopBottom"], ["fxLayout", "column", 1, "u-spacing--widthFill", "u-spacing__headerToSection--marginTop"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "auto", "fxLayout", "row", "fxLayoutAlign", "end center"], [3, "length", "pageIndex", "pageSize", "hidePageSize", "page"], ["fxShow", "", "fxHide.lt-md", "", "id", "ap-row-searchPlate", 3, "plate", "noDiscount", "cmsData", "showCollapseUi", "isCollapsed", "selectAllAsDefault", "isEditAllowed", "isCollapsedChange", "changeSelectionAll"], ["fxHide", "", "fxShow.lt-md", "", "id", "ap-row-searchPlate-mobile", 3, "plate", "noDiscount", "cmsData", "showCollapseUi", "isCollapsed", "selectAllAsDefault", "isEditAllowed", "isCollapsedChange", "changeSelectionAll"], ["fxShow", "", "fxHide.lt-md", "", "id", "ap-rows-searchPlate", "class", "u-spacing__sectionToSection--marginTop", 3, "isEditAllowed", "arePlatesExpanded", "hideFooter", "caoToolTipCms", "cmsDataOverPmnt", "plate", "paginatedPlate", "selectAllAsDefault", "disableSelectAll", "changeAllSelected", "afterComputeTotals", 4, "ngIf"], ["fxHide", "", "fxShow.lt-md", "", "id", "ap-rows-searchPlate-mobile", "class", "u-spacing__sectionToSection--marginTop", 3, "isEditAllowed", "arePlatesExpanded", "hideFooter", "caoToolTipCms", "cmsDataOverPmnt", "plate", "paginatedPlate", "selectAllAsDefault", "disableSelectAll", "changeAllSelected", "afterComputeTotals", 4, "ngIf"], ["id", "ap-rows-searchPlate", "fxShow", "", "fxHide.lt-md", "", "class", "u-spacing__sectionToSection--marginTop", 3, "isEditAllowed", "arePlatesExpanded", "hideFooter", "caoToolTipCms", "cmsDataOverPmnt", "plate", "paginatedPlate", "selectAllAsDefault", "disableSelectAll", "changeAllSelected", "afterComputeTotals", 4, "ngIf"], ["id", "ap-rows-searchPlate-mobile", "fxHide", "", "fxShow.lt-md", "", "class", "u-spacing__sectionToSection--marginTop", 3, "isEditAllowed", "arePlatesExpanded", "hideFooter", "caoToolTipCms", "cmsDataOverPmnt", "plate", "paginatedPlate", "selectAllAsDefault", "disableSelectAll", "changeAllSelected", "afterComputeTotals", 4, "ngIf"], ["id", "prevPaidInvoicesLink", "fxFlex.gt-sm", "none", "class", "smaller-font", "style", "text-align:right;", 3, "click", 4, "ngIf"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayout.lt-md", "column"], ["ngClass.gt-sm", "max-width-half"], [3, "innerHtml", 4, "ngIf"], ["fxLayout", "row", 1, "u-spacing--widthFill", "u-spacing__sectionToSection--marginTop"], ["ngClass.gt-sm", "payment-summary-desktop", "ngClass.lt-md", "u-spacing--widthFill"], [3, "rowType", "isTop"], ["col-start", "", "fxFlex", "grow"], ["col-end", "", "fxFlex", "none"], [3, "value"], [3, "rowType", "isInner", 4, "ngIf"], [3, "rowType", "isInner"], [3, "rowType", "isBottom"], [3, "disabled", "previous", "next"], ["wizard-next", ""], ["wizard-cancel", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["fxShow", "", "fxHide.lt-md", "", "id", "ap-rows-searchPlate", 1, "u-spacing__sectionToSection--marginTop", 3, "isEditAllowed", "arePlatesExpanded", "hideFooter", "caoToolTipCms", "cmsDataOverPmnt", "plate", "paginatedPlate", "selectAllAsDefault", "disableSelectAll", "changeAllSelected", "afterComputeTotals"], ["fxHide", "", "fxShow.lt-md", "", "id", "ap-rows-searchPlate-mobile", 1, "u-spacing__sectionToSection--marginTop", 3, "isEditAllowed", "arePlatesExpanded", "hideFooter", "caoToolTipCms", "cmsDataOverPmnt", "plate", "paginatedPlate", "selectAllAsDefault", "disableSelectAll", "changeAllSelected", "afterComputeTotals"], ["id", "ap-rows-searchPlate", "fxShow", "", "fxHide.lt-md", "", 1, "u-spacing__sectionToSection--marginTop", 3, "isEditAllowed", "arePlatesExpanded", "hideFooter", "caoToolTipCms", "cmsDataOverPmnt", "plate", "paginatedPlate", "selectAllAsDefault", "disableSelectAll", "changeAllSelected", "afterComputeTotals"], ["id", "ap-rows-searchPlate-mobile", "fxHide", "", "fxShow.lt-md", "", 1, "u-spacing__sectionToSection--marginTop", 3, "isEditAllowed", "arePlatesExpanded", "hideFooter", "caoToolTipCms", "cmsDataOverPmnt", "plate", "paginatedPlate", "selectAllAsDefault", "disableSelectAll", "changeAllSelected", "afterComputeTotals"], ["fxLayout", "row", "fxLayoutAlign", "center", "class", "u-spacing--widthFill u-spacing__loadMore--margin", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center", 1, "u-spacing--widthFill", "u-spacing__loadMore--margin"], [1, "u--noUnderline", 3, "click"], ["id", "prevPaidInvoicesLink", "fxFlex.gt-sm", "none", 1, "smaller-font", 2, "text-align", "right", 3, "click"], [4, "ngFor", "ngForOf"], [3, "id", "hideHeader", "plate", "showCollapseUi", "isCollapsed", "selectAllAsDefault", "isEditAllowed", "isRound", "isAssociated", "cmsData", "isCollapsedChange", "changeSelectionAll"], [1, "u-spacing__firstHeaderToTitle--marginTop"], [3, "id", "isEditAllowed", "plate", "paginatedPlate", "hideFooter", "caoToolTipCms", "selectAllAsDefault", "disableSelectAll", "cmsDataOverPmnt", "afterComputeTotals", "changeAllSelected"], [3, "innerHtml"], ["col-start", "", "fxFlex", "grow", 1, "green-text"], ["col-end", "", "fxFlex", "none", 1, "green-text"], [3, "plate"], ["svgIcon", "no-invoices-found", "fxFlexAlign", "center"], [1, "text-align-center"], ["id", "prevPaidInvoicesLink", "fxFlex.gt-sm", "none", "class", "smaller-font text-align-center", 3, "click", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayout.lt-md", "column", 1, "u-spacing__firstHeaderToTitle--marginTop"], [3, "previous"], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "link-spacing"], ["id", "prevPaidInvoicesLink", "fxFlex.gt-sm", "none", 1, "smaller-font", "text-align-center", 3, "click"]],
  template: function GridComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "page-filled-container");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, GridComponent_section_1_Template, 8, 4, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, GridComponent_section_2_Template, 7, 5, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, GridComponent_section_3_Template, 5, 2, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "section", 2)(5, "section", 3)(6, "aside", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, GridComponent_div_8_Template, 2, 4, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, GridComponent_ng_template_9_Template, 45, 40, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, GridComponent_ng_template_10_Template, 29, 16, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.hasOutstandingViolations);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.prevPaidCmsData.HEADER && ctx.showPreviouslyPaidPlate && !ctx.hasOutstandingViolations);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.hasOutstandingViolations);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("fxFlex", ctx.cms.data["itemsFound"] >= ctx.paginationLimit ? "none" : "grow");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", ctx.cms.data["itemsFound"], " Record", ctx.cms.data["itemsFound"] > 1 ? "s" : "", " found ");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.cms.data["itemsFound"] >= ctx.paginationLimit);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.hasOutstandingViolations);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.showPreviouslyPaidPlate && !ctx.hasOutstandingViolations);
    }
  },
  directives: [_common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_13__.PageFilledContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__.DefaultLayoutDirective, _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_14__.CmsContentComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__.DefaultShowHideDirective, _common_ui_matPaginatorGoto_matPaginatorGoto_component__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorGotoComponent, violationsCommon_components_violationsPlate_violationsPlate_component__WEBPACK_IMPORTED_MODULE_6__.ViolationsPlateComponent, violationsCommon_components_violationsDetails_violationsDetails_component__WEBPACK_IMPORTED_MODULE_7__.ViolationsDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__.DefaultClassDirective, _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_16__.RowContainerComponent, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_17__.CurrencyComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_18__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_19__.WizardNextDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__.DefaultFlexAlignDirective],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_20__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n[_nghost-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n  margin-left: 10px;\n  height: auto;\n  width: auto;\n}\n[_nghost-%COMP%]   .pay-label[_ngcontent-%COMP%] {\n  position: relative;\n  height: 0px;\n  top: -10px;\n  left: 7px;\n  color: #007aff !important;\n}\n[_nghost-%COMP%]   .pay-label-disabled[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.refresh-2020[_ngcontent-%COMP%]   .u-spacing__divider--marginTopBottom[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 20px;\n}\n\n\n\n.refresh-2020.u-spacing--widthFill[_ngcontent-%COMP%], .refresh-2020[_ngcontent-%COMP%]   .u-spacing--widthFill[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.refresh-2020[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%] {\n  background: #f6f6f6 0% 0% no-repeat padding-box;\n  padding: 0px 7%;\n}\n@media screen and (max-width: 599.98px) {\n  .refresh-2020[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n}\n.refresh-2020[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  border: 1px solid #ccccce;\n  border-radius: 20px;\n  background: #ffffff;\n  line-height: 27.52px;\n  letter-spacing: 0.24px;\n}\n@media screen and (max-width: 599.98px) {\n  .refresh-2020[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n    border: unset;\n    border-radius: unset;\n    border-top: 1px solid #ccccce;\n    border-bottom: 1px solid #ccccce;\n  }\n}\n.refresh-2020[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%] {\n  align-items: center;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  height: 223px;\n  justify-content: center;\n}\n@media screen and (max-width: 599.98px) {\n  .refresh-2020[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%] {\n    height: 127px;\n  }\n}\n.refresh-2020[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .banner-txt[_ngcontent-%COMP%] {\n  line-height: 27.52px;\n  letter-spacing: 0.24px;\n  font-family: Jost;\n  font-weight: 900;\n  margin: 0px;\n  font-size: 50px;\n  color: #ffdd09;\n  text-shadow: #434549 3px 2px 8px;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 599.98px) {\n  .refresh-2020[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .banner-txt[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.refresh-2020[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .content-spacing[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.refresh-2020[_ngcontent-%COMP%]   .u-spacing__fieldToSection--marginTop[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.refresh-2020[_ngcontent-%COMP%]   .u-spacing__headerToSection--marginTop[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.refresh-2020[_ngcontent-%COMP%]   .u-spacing__sectionToSection--marginTop[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.refresh-2020[_ngcontent-%COMP%]   .u-spacing__sectionToSection--marginBottom[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.refresh-2020[_ngcontent-%COMP%]   .u-spacing__fieldToField--marginTop[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.refresh-2020[_ngcontent-%COMP%]   .u-spacing__fieldToField--marginTopHalf[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.refresh-2020[_ngcontent-%COMP%]   .u-spacing__buttonToField--marginTop[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.refresh-2020[_ngcontent-%COMP%]   .u-spacing__firstHeaderToTitle--marginTop[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.refresh-2020[_ngcontent-%COMP%]   .u-spacing__cardToCard--marginTop[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.refresh-2020[_ngcontent-%COMP%]   .u-spacing__addressToPaymentDisplay--marginTop[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.refresh-2020.lt-md[_ngcontent-%COMP%]   .u-spacing__cardToCard--marginTop[_ngcontent-%COMP%], .refresh-2020[_ngcontent-%COMP%]   .lt-md[_ngcontent-%COMP%]   .u-spacing__cardToCard--marginTop[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.green-text[_ngcontent-%COMP%] {\n  color: #018749;\n}\n.text-align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\nh2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\nmat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n  margin-top: 16px;\n  margin-bottom: 20px;\n}\nmat-divider.mat-divider-vertical[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 0px;\n  border-width: 2px;\n  border-color: #c4c4c4;\n  margin-top: -1px;\n  margin-left: 8px;\n  margin-right: 12px;\n}\n#records-found-text[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n.smaller-font[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.max-width-half[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n.payment-summary-desktop[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.hoverBoxAdjustment[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 16px;\n  line-height: 1.5;\n  bottom: 1.5em;\n  left: -9em;\n  width: 320px;\n  margin-left: 10em;\n}\n.tool-tip-heading[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.tool-tip[_ngcontent-%COMP%] {\n  width: 12.5px;\n  margin-left: 0px;\n}\n.tool-tip.lt-md[_ngcontent-%COMP%] {\n  margin-left: 0px;\n  height: 20px;\n}\n.align-currency[_ngcontent-%COMP%] {\n  padding-right: 23px;\n}\n.link-spacing[_ngcontent-%COMP%] {\n  padding-top: 40px;\n}\nwizard-ui[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}\nviolations-plate-row[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\ninput[type='checkbox'][_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border-radius: 2px;\n  display: inline;\n  margin: 0px 14px 3px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcY29tbW9uXFx1aVxcY29udGFpbmVyc1xcZnhSb3dcXGRldGFpbHMubGVzcyIsImdyaWQubGVzcyIsIi4uXFwuLlxcdmlvbGF0aW9uc0NvbW1vblxcY29tcG9uZW50c1xcdmlvbGF0aW9uc0RldGFpbHNcXHZpb2xhdGlvbnNEZXRhaWxzLmNvbXBvbmVudC5sZXNzIiwiLi5cXC4uXFxzdHlsZXNcXHRoZW1lXFxtaXhpbnNcXHBhZ2UubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFxjdXN0b21cXHNwYWNpbmdcXGRpdmlkZXJzLmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcY3VzdG9tXFxzcGFjaW5nXFx1dGlsaXR5Lmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcY3VzdG9tXFxzcGFjaW5nXFxzZWN0aW9ucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUMsV0FBQTtBQ0REO0FEREE7RUFLRSxhQUFBO0VBQ0Qsa0JBQUE7QUNERDtBRExBO0VBdUVVLGNBQUE7RUFNUCxzQkFBQTtBQ3BFSDtBRFRBO0VBZ0ZxQixjQUFBO0VBR2Qsc0JBQUE7QUN0RVA7QURiQTtFQXFGSyxjQUFBO0VBQ0Qsc0JBQUE7QUNyRUo7QURqQkE7RUF5Rm1DLGNBQUE7RUFDakIsc0JBQUE7QUNyRWxCO0FEckJBO0VBOEZtQixtQkFBQTtFQUNWLHNCQUFBO0VBQ08sYUFBQTtBQ3RFaEI7QUQxQkE7RUFvR00sc0JBQUE7RUFDRSxzQkFBQTtFQUNELGFBQUE7QUN2RVA7QUQvQkE7RUEwR2UscUJBQUE7RUFDRiwyQkFBQTtFQUNJLG1CQUFBO0FDeEVqQjtBRHBDQTtFQWdIaUIscUJBQUE7RUFDRCx5QkFBQTtFQUNILG1CQUFBO0FDekViO0FEekNBO0VBdUN3QyxnQkFBQTtFQUc3QixnQkFBQTtFQUNLLFdBQUE7QUNHaEI7QUQ5Q0E7RUE2Q1ksV0FBQTtBQ0laO0FEakRBO0VBaURVLGVBQUE7RUFHTixlQUFBO0VBQ0EsV0FBQTtFQUFxQixlQUFBO0FDRXpCO0FEdkRBO0VBd0RjLGdCQUFBO0VBR1QsZ0JBQUE7RUFBMEIsV0FBQTtFQUNYLGVBQUE7QUNDcEI7QUQ3REE7RUE4RGlCLGVBQUE7QUNFakI7QUREcUI7RUFHYixlQUFBO0FDQ1I7QUNqRUE7RUFFUSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEa0VSO0FDdEVBO0VBUVEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUNpREoseUJBQUE7QUZpQko7QUM3RUE7RUFnQlEsaUJBQUE7RUFDQSxrQkFBQTtBRGdFUjtBR3BGQTtFQUVRLGdCQUFBO0VBQ0EsbUJBQUE7QUhxRlI7QUFDQTs7Ozs7Ozs7OzBCQVMwQjtBQUMxQixtQ0FBbUM7QUFDbkMsc0JBQXNCO0FJaEdsQjs7RUFFSSxXQUFBO0FKa0dSO0FJdEdBO0VBUVEsK0NBQUE7RUFDQSxlQUFBO0FKaUdSO0FJL0ZRO0VBQUE7SUFDSSxZQUFBO0VKa0dWO0FBQ0Y7QUkvR0E7RUFnQlksV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FKa0daO0FJaEdZO0VBQUE7SUFDSSxhQUFBO0lBQ0Esb0JBQUE7SUFDQSw2QkFBQTtJQUNBLGdDQUFBO0VKbUdkO0FBQ0Y7QUloSUE7RUFnQ2dCLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBSm1HaEI7QUlqR2dCO0VBQUE7SUFDSSxhQUFBO0VKb0dsQjtBQUNGO0FJOUlBO0VBOENnQixvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7QUptR2hCO0FJakdnQjtFQUFBO0lBQ0ksZUFBQTtFSm9HbEI7QUFDRjtBSTlKQTtFQStEWSxnQkFBQTtBSmtHWjtBS25LQTtFQUdRLGdCQUFBO0FMbUtSO0FLdEtBO0VBT1EsZ0JBQUE7QUxrS1I7QUt6S0E7RUFXUSxnQkFBQTtBTGlLUjtBSzVLQTtFQWVRLG1CQUFBO0FMZ0tSO0FLL0tBO0VBbUJRLGdCQUFBO0FMK0pSO0FLbExBO0VBdUJRLGdCQUFBO0FMOEpSO0FLckxBO0VBMkJRLGdCQUFBO0FMNkpSO0FLeExBO0VBK0JRLGdCQUFBO0FMNEpSO0FLM0xBO0VBbUNRLGdCQUFBO0FMMkpSO0FLOUxBO0VBdUNRLGdCQUFBO0FMMEpSO0FLdkpJOztFQUdRLGdCQUFBO0FMd0paO0FBN0xBO0VFOEJJLGNBQUE7QUZrS0o7QUE1TEE7RUFDSSxpQkFBQTtBQThMSjtBQTNMQTtFQUNJLGtCQUFBO0FBNkxKO0FBMUxBO0VBQ0ksZ0JBQUE7QUE0TEo7QUF6TEE7RUFDSSxXQUFBO0VHdkJJLGdCQUFBO0VBQ0EsbUJBQUE7QUhtTlI7QUExTEk7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VFMENKLHFCQUFBO0VGeENJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTRMUjtBQXhMQTtFQUNJLGdCQUFBO0FBMExKO0FBdkxBO0VBQ0ksZUFBQTtBQXlMSjtBQXRMQTtFQUNJLGNBQUE7QUF3TEo7QUFyTEE7RUFDSSxXQUFBO0FBdUxKO0FBcExBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBc0xKO0FBbkxBO0VBQ0ksZ0JBQUE7QUFxTEo7QUFsTEE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFvTEo7QUFsTEk7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFvTFI7QUFoTEE7RUFDSSxtQkFBQTtBQWtMSjtBQS9LQTtFQUNJLGlCQUFBO0FBaUxKO0FBOUtBO0VBQ0ksY0FBQTtFSzdESSxnQkFBQTtBTDhPUjtBQTdLQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQStLSjtBQTVLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUE4S0oiLCJmaWxlIjoiZ3JpZC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcclxuXHJcbjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5oaWRkZW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuZngtZmxleC1hdXRvIHtcclxuICAgICAgICAuZngtZmxleC1hdXRvLW1peGluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmZ4LWZsZXgtbm9uZSB7XHJcbiAgICAgICAgLmZ4LWZsZXgtbm9uZS1taXhpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUge1xyXG4gICAgICAgIC5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUtbWl4aW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAuZngtZmxleC1hdXRvLWdyb3ctbW9yZSB7XHJcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1ncm93LW1vcmUtbWl4aW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAuZngtbGF5b3V0LXJvdyB7XHJcbiAgICAgICAgLmZ4LWxheW91dC1yb3ctbWl4aW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAuZngtbGF5b3V0LWNvbHVtbiB7XHJcbiAgICAgICAgLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAuZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlciB7XHJcbiAgICAgICAgLmZ4LWxheW91dC1hbGlnbi1zdGFydC1jZW50ZXItbWl4aW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAuZngtbGF5b3V0LWFsaWduLWVuZC1jZW50ZXIge1xyXG4gICAgICAgIC5meC1sYXlvdXQtYWxpZ24tZW5kLWNlbnRlci1taXhpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC5saW1pdGVkLWZsZXgge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTcwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MzBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAudW5saW1pdGVkLWZsZXgge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5saW1pdGVkLWZsZXgtZW5kIHtcclxuICAgICAgICBtaW4td2lkdGg6IDcwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIH1cclxuXHJcbiAgICAubGFyZ2VyLWxpbWl0ZWQtZmxleC1lbmQge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTQzcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNDVweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlLXNwYWNlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcblxyXG4gICAgICAgICYubHQtbWQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1peGlucyB0byBhcHBlYXNlIHBlcmZvcm1hbmNlXHJcbi5meC1mbGV4LWF1dG8tbWl4aW4oKSB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5meC1mbGV4LW5vbmUtbWl4aW4oKSB7XHJcbiAgICAvLyBsZXNzaGludC1kaXNhYmxlLW5leHQtbGluZSB6ZXJvVW5pdFxyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZngtZmxleC1hdXRvLXNocmluay1tb3JlLW1peGluKCkge1xyXG4gICAgZmxleDogMSAyIGF1dG87XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZngtZmxleC1hdXRvLWdyb3ctbW9yZS1taXhpbigpIHtcclxuICAgIGZsZXg6IDIgMSBhdXRvO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmZ4LWxheW91dC1yb3ctbWl4aW4oKSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5meC1sYXlvdXQtY29sdW1uLW1peGluKCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlci1taXhpbigpIHtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5meC1sYXlvdXQtYWxpZ24tZW5kLWNlbnRlci1taXhpbigpIHtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0ICcuLi8uLi9jb21tb24vdWkvY29udGFpbmVycy9meFJvdy9kZXRhaWxzLmxlc3MnO1xuQGltcG9ydCAnLi4vLi4vdmlvbGF0aW9uc0NvbW1vbi9jb21wb25lbnRzL3Zpb2xhdGlvbnNEZXRhaWxzL3Zpb2xhdGlvbnNEZXRhaWxzLmNvbXBvbmVudC5sZXNzJztcbkBpbXBvcnQgJy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy9kaXZpZGVycy5sZXNzJztcbkBpbXBvcnQgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5AaW1wb3J0ICcuLi8uLi9zdHlsZXMvY3VzdG9tL3NwYWNpbmcvdXRpbGl0eS5sZXNzJztcbkBpbXBvcnQgJy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy9zZWN0aW9ucy5sZXNzJztcblxuLmdyZWVuLXRleHQge1xuICAgIC50LWJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yKEB0aGVtZS1saWdodCk7XG59XG5cbi50ZXh0LWFsaWduLXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtYWxpZ24tY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgyIHtcbiAgICBtYXgtaGVpZ2h0OiA3MHB4O1xufVxuXG5tYXQtZGl2aWRlciB7XG4gICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xuICAgIC5yZWZyZXNoLTIwMjAudS1zcGFjaW5nX19kaXZpZGVyLS1tYXJnaW5Ub3BCb3R0b20oKTtcblxuICAgICYubWF0LWRpdmlkZXItdmVydGljYWwge1xuICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgIHdpZHRoOiAwcHg7XG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgICAgICAudC1kaXZpZGVyX19kYXNoLS1ib3JkZXJDb2xvcihAdGhlbWUtbGlnaHQpO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgfVxufVxuXG4jcmVjb3Jkcy1mb3VuZC10ZXh0IHtcbiAgICBtaW4td2lkdGg6IDE0MHB4O1xufVxuXG4uc21hbGxlci1mb250IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXgtd2lkdGgtaGFsZiB7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG59XG5cbi5wYXltZW50LXN1bW1hcnktZGVza3RvcCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5ob3ZlckJveEFkanVzdG1lbnQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgYm90dG9tOiAxLjVlbTtcbiAgICBsZWZ0OiAtOWVtO1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBlbTtcbn1cblxuLnRvb2wtdGlwLWhlYWRpbmcge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50b29sLXRpcCB7XG4gICAgd2lkdGg6IDEyLjVweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuXG4gICAgJi5sdC1tZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICB9XG59XG5cbi5hbGlnbi1jdXJyZW5jeSB7XG4gICAgcGFkZGluZy1yaWdodDogMjNweDtcbn1cblxuLmxpbmstc3BhY2luZyB7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbndpemFyZC11aSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX2J1dHRvblRvRmllbGQtLW1hcmdpblRvcCgpO1xufVxuXG52aW9sYXRpb25zLXBsYXRlLXJvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luOiAwcHggMTRweCAzcHggMHB4O1xufVxuXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9jb21tb24vdWkvY29udGFpbmVycy9meFJvdy9kZXRhaWxzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcblxuOmhvc3Qge1xuICAgIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG5cbiAgICAucGF5LWxhYmVsIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgbGVmdDogN3B4O1xuICAgICAgICAudC1saW5rLS1jb2xvcihAdGhlbWUtbGlnaHQpO1xuICAgIH1cblxuICAgIC5wYXktbGFiZWwtZGlzYWJsZWQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG5AYm9keS0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAd2hpdGU7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMi1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjMtbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1saWdodDogQHRyb3BpY2FsLXJhaW4tZm9yZXN0LWdyZWVuO1xuQGJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2lsdmVyLWdyYXk7XG5AaGVhZGVyLS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBsYWJlbC0tY29sb3ItbGlnaHQ6IEBib3VsZGVyLWdyYXk7XG5Ac2VsZWN0X19hcnJvdy0tY29sb3ItbGlnaHQ6IEBzY29ycGlvbi1ncmF5O1xuQGxpbmstLWNvbG9yLWxpZ2h0OiBAYXp1cmUtcmFkaWFuY2UtYmx1ZTtcbkBkaXZpZGVyLS1ib3JkZXJDb2xvci1saWdodDogQHNjaG9vbC1idXMteWVsbG93O1xuXG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjIoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMi1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMyhAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtaGVhZGVyLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdoZWFkZXItLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGFiZWwtLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xhYmVsLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXNlbGVjdF9fYXJyb3ctLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3NlbGVjdF9fYXJyb3ctLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGluay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGluay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yICFpbXBvcnRhbnQ7IC8vIG1hcmtlZCBhcyAhaW1wb3J0YW50IHRvIG92ZXJyaWRlIGJvb3RzdHJhcFxufVxuXG4udC1kaXZpZGVyLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdkaXZpZGVyLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1kaXZpZGVyX19kYXNoLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuIiwiLnJlZnJlc2gtMjAyMCB7XG4gICAgLnUtc3BhY2luZ19fZGl2aWRlci0tbWFyZ2luVG9wQm90dG9tIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cbi5yZWZyZXNoLTIwMjAge1xuXG4gICAgJi51LXNwYWNpbmctLXdpZHRoRmlsbCxcbiAgICAudS1zcGFjaW5nLS13aWR0aEZpbGwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAudGFiLWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNmY2ZjYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgICAgICBwYWRkaW5nOiAwcHggNyU7XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LXNtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50YWItY29udGVudCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjcuNTJweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjI0cHg7XG5cbiAgICAgICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1zbSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiB1bnNldDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB1bnNldDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2NjZTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhbm5lci1pbWcge1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjIzcHg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtc20ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyN3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhbm5lci10eHQge1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNy41MnB4O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjI0cHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEpvc3Q7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIyMSwgOSk7XG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IHJnYig2NywgNjksIDczKSAzcHggMnB4IDhweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAgICAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LXNtIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXNwYWNpbmcge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5yZWZyZXNoLTIwMjAge1xuICAgIC8vIERlc2t0b3BcbiAgICAudS1zcGFjaW5nX19maWVsZFRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19oZWFkZXJUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Cb3R0b20ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcEhhbGYge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2J1dHRvblRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmlyc3RIZWFkZXJUb1RpdGxlLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fYWRkcmVzc1RvUGF5bWVudERpc3BsYXktLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuICAgIC8vIE1vYmlsZVxuICAgICYubHQtbWQsXG4gICAgLmx0LW1kIHtcbiAgICAgICAgLnUtc3BhY2luZ19fY2FyZFRvQ2FyZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"],
  data: {
    animation: [animations_collapse__WEBPACK_IMPORTED_MODULE_4__.collapseTrigger]
  }
});

/***/ }),

/***/ 56565:
/*!***************************************************************************!*\
  !*** ./src/frp3/grid/prevPaidInvoices/prevPaidInvoicesModal.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrevPaidInvoicesComponent": () => (/* binding */ PrevPaidInvoicesComponent)
/* harmony export */ });
/* harmony import */ var violationsCommon_components_violationsDetails_invoiced_invoicedDetails_invoicedDetails_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! violationsCommon/components/violationsDetails/invoiced/invoicedDetails/invoicedDetails.component */ 40063);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", invoiced_r1.invoiceNum, " ");
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
        this.dialogService.openSliderFilled(violationsCommon_components_violationsDetails_invoiced_invoicedDetails_invoicedDetails_component__WEBPACK_IMPORTED_MODULE_0__.InvoicedDetailsComponent, {
            invoiced: this.prevPaidInvoices[index],
            plate: this.plate,
            isPreviousPaid: true
        }, {
            title: 'Invoice Details',
            hasBack: true
        });
    }
}
PrevPaidInvoicesComponent.ɵfac = function PrevPaidInvoicesComponent_Factory(t) { return new (t || PrevPaidInvoicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_1__.DialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_1__.DialogService)); };
PrevPaidInvoicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PrevPaidInvoicesComponent, selectors: [["previously-paid-invoices-component"]], decls: 19, vars: 11, consts: [[1, "refresh-2020"], ["fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxFlexOffset", "34px", 2, "margin-bottom", "10px", "margin-top", "0px"], [3, "isLabel", "backgroundColorClass"], ["col-start", "", 1, "fx-flex-auto", "fx-layout-row", "fx-layout-align-start-center"], [1, "fx-flex-auto-shrink-more", "limited-flex"], [1, "fx-flex-auto-shrink-more", "limited-flex", 3, "ngClass.lt-md"], [1, "fx-flex-auto-grow-more", "unlimited-flex", 3, "ngClass.lt-md"], ["col-end", "", 1, "fx-flex-none", "fx-layout-row", "fx-layout-align-end-center"], [1, "fx-flex-auto", "larger-limited-flex-end"], ["class", "violations-plate-row", 4, "ngFor", "ngForOf"], [1, "violations-plate-row"], [3, "ngClass", "ngClass.lt-md"], [1, "clickable", 3, "backgroundColorClass", "click"], [1, "fx-layout-row", "fx-layout-align-start-center", "u--noUnderline"], ["translation-skip", "", 1, "fx-flex-none", "violationId--width"], [1, "fx-flex-none", "glyphicon", "glyphicon-chevron-right"], ["translation-skip", "", "fxShow", "", "fxHide.lt-md", "", 1, "fx-flex-auto-shrink-more", "limited-flex"], ["fxShow", "", "fxHide.lt-md", "", 1, "fx-flex-auto-shrink-more", "limited-flex", "fx-layout-align-start-center"], ["svgIcon", "checkmark", 1, "center-vertical"], [1, "check-mark-text"], ["translation-skip", "", "fxShow", "", "fxHide.lt-md", "", 1, "fx-flex-auto-grow-more", "unlimited-flex"], [3, "value"]], template: function PrevPaidInvoicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "aside", 2)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "fx-row", 3)(6, "section", 4)(7, "mat-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "INVOICE ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "INVOICE DATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "STATUS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "AGENCY ");
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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexOffsetDirective, _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_2__.FxRowComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultShowHideDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_3__.CurrencyComponent], pipes: [_pipes_default_default_pipe__WEBPACK_IMPORTED_MODULE_4__.DefaultPipe, _pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_5__.DateWithTimeZonePipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n.table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n.check-mark-text[_ngcontent-%COMP%] {\n  color: #018749;\n  margin-left: 8px;\n}\n.glyphicon.glyphicon-chevron-right[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 100;\n  top: -1px;\n}\n.violationId--width[_ngcontent-%COMP%] {\n  width: 118px;\n}\n.center-vertical[_ngcontent-%COMP%] {\n  vertical-align: text-bottom;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbW1vblxcdWlcXGNvbnRhaW5lcnNcXGZ4Um93XFxkZXRhaWxzLmxlc3MiLCJwcmV2UGFpZEludm9pY2VzTW9kYWwubGVzcyIsIi4uXFwuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xccGFnZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtBQ0RKO0FEQUE7RUFJUSxhQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREpBO0VBOEVJLGNBQUE7RUFDQSxzQkFBQTtBQ3ZFSjtBRFJBO0VBb0ZJLGNBQUE7RUFDQSxzQkFBQTtBQ3pFSjtBRFpBO0VBeUZJLGNBQUE7RUFDQSxzQkFBQTtBQzFFSjtBRGhCQTtFQThGSSxjQUFBO0VBQ0Esc0JBQUE7QUMzRUo7QURwQkE7RUFtR0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUM1RUo7QUR6QkE7RUF5R0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUM3RUo7QUQ5QkE7RUErR0kscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDOUVKO0FEbkNBO0VBcUhJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQy9FSjtBRHhDQTtFQTBDUSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NSO0FEN0NBO0VBZ0RRLFdBQUE7QUNBUjtBRGhEQTtFQW9EUSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRFI7QUR0REE7RUEyRFEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRlI7QUQ1REE7RUFrRVEsZUFBQTtBQ0hSO0FES1E7RUFDSSxlQUFBO0FDSFo7QUFqRUE7RUFDSSxlQUFBO0FBbUVKO0FBakVJO0VBQ0ksZUFBQTtBQW1FUjtBQS9EQTtFQzJCSSxjQUFBO0VEekJBLGdCQUFBO0FBaUVKO0FBN0RJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQStEUjtBQTNEQTtFQUNJLFlBQUE7QUE2REo7QUExREE7RUFDSSwyQkFBQTtBQTRESiIsImZpbGUiOiJwcmV2UGFpZEludm9pY2VzTW9kYWwubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuXG5cbiAgICAuZngtZmxleC1hdXRvIHtcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1mbGV4LW5vbmUge1xuICAgICAgICAuZngtZmxleC1ub25lLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZSB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUtbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtZmxleC1hdXRvLWdyb3ctbW9yZSB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1yb3cge1xuICAgICAgICAuZngtbGF5b3V0LXJvdy1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtY29sdW1uIHtcbiAgICAgICAgLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlciB7XG4gICAgICAgIC5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyIHtcbiAgICAgICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmxpbWl0ZWQtZmxleCB7XG4gICAgICAgIG1pbi13aWR0aDogMTcwcHg7XG4gICAgICAgIG1heC13aWR0aDogNTMwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC51bmxpbWl0ZWQtZmxleCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5saW1pdGVkLWZsZXgtZW5kIHtcbiAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxuXG4gICAgLmxhcmdlci1saW1pdGVkLWZsZXgtZW5kIHtcbiAgICAgICAgbWluLXdpZHRoOiAxNDNweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxNDVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG5cbiAgICAudGFibGUtc3BhY2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICAgICAgJi5sdC1tZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBNaXhpbnMgdG8gYXBwZWFzZSBwZXJmb3JtYW5jZVxuLmZ4LWZsZXgtYXV0by1taXhpbigpIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1ub25lLW1peGluKCkge1xuICAgIC8vIGxlc3NoaW50LWRpc2FibGUtbmV4dC1saW5lIHplcm9Vbml0XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZS1taXhpbigpIHtcbiAgICBmbGV4OiAxIDIgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1hdXRvLWdyb3ctbW9yZS1taXhpbigpIHtcbiAgICBmbGV4OiAyIDEgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtbGF5b3V0LXJvdy1taXhpbigpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAnY29tbW9uL3VpL2NvbnRhaW5lcnMvZnhSb3cvZGV0YWlscy5sZXNzJztcblxuLnRhYmxlLXNwYWNlIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICAmLmx0LW1kIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIH1cbn1cblxuLmNoZWNrLW1hcmstdGV4dCB7XG4gICAgLnQtYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3IoQHRoZW1lLWxpZ2h0KTtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uZ2x5cGhpY29uIHtcbiAgICAmLmdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0IHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICB0b3A6IC0xcHg7XG4gICAgfVxufVxuXG4udmlvbGF0aW9uSWQtLXdpZHRoIHtcbiAgICB3aWR0aDogMTE4cHg7XG59XG5cbi5jZW50ZXItdmVydGljYWwge1xuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG5AYm9keS0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAd2hpdGU7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMi1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjMtbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1saWdodDogQHRyb3BpY2FsLXJhaW4tZm9yZXN0LWdyZWVuO1xuQGJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2lsdmVyLWdyYXk7XG5AaGVhZGVyLS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBsYWJlbC0tY29sb3ItbGlnaHQ6IEBib3VsZGVyLWdyYXk7XG5Ac2VsZWN0X19hcnJvdy0tY29sb3ItbGlnaHQ6IEBzY29ycGlvbi1ncmF5O1xuQGxpbmstLWNvbG9yLWxpZ2h0OiBAYXp1cmUtcmFkaWFuY2UtYmx1ZTtcbkBkaXZpZGVyLS1ib3JkZXJDb2xvci1saWdodDogQHNjaG9vbC1idXMteWVsbG93O1xuXG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjIoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMi1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMyhAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtaGVhZGVyLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdoZWFkZXItLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGFiZWwtLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xhYmVsLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXNlbGVjdF9fYXJyb3ctLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3NlbGVjdF9fYXJyb3ctLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGluay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGluay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yICFpbXBvcnRhbnQ7IC8vIG1hcmtlZCBhcyAhaW1wb3J0YW50IHRvIG92ZXJyaWRlIGJvb3RzdHJhcFxufVxuXG4udC1kaXZpZGVyLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdkaXZpZGVyLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1kaXZpZGVyX19kYXNoLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuIl19 */"] });


/***/ }),

/***/ 49324:
/*!***********************************************!*\
  !*** ./src/frp3/landing/landing.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_ui_modals_loginPopUpModal_loginModal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/ui/modals/loginPopUpModal/loginModal.component */ 84612);
/* harmony import */ var violations_landing_invoiceExample_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! violations/landing/invoiceExample.component */ 81053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frame/frame.component */ 43012);
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
/* harmony import */ var _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../storefront/utility/utility.component */ 10061);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);

























function LandingComponent_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const state_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", state_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](state_r8.stateCode);
  }
}

function LandingComponent_aside_22_ng_container_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Please enter a valid license plate number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function LandingComponent_aside_22_ng_container_1_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Please enter a valid license plate number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function LandingComponent_aside_22_ng_container_1_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Please enter a valid license plate number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function LandingComponent_aside_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, LandingComponent_aside_22_ng_container_1_p_1_Template, 2, 0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, LandingComponent_aside_22_ng_container_1_p_2_Template, 2, 0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, LandingComponent_aside_22_ng_container_1_p_3_Template, 2, 0, "p", 30);
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

function LandingComponent_aside_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "aside");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, LandingComponent_aside_22_ng_container_1_Template, 4, 4, "ng-container", 28);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Please enter a valid invoice number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function LandingComponent_aside_29_ng_container_1_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Please enter a valid invoice number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function LandingComponent_aside_29_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, LandingComponent_aside_29_ng_container_1_p_1_Template, 2, 0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, LandingComponent_aside_29_ng_container_1_p_2_Template, 2, 0, "p", 30);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, LandingComponent_aside_29_ng_container_1_Template, 3, 3, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](10);

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", _r0.submitted);
  }
}

function LandingComponent_figure_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "figure", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", ctx_r7.cmsImage.image, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("alt", ctx_r7.cmsImage.alt)("height", ctx_r7.cmsImage.height)("width", ctx_r7.cmsImage.width);
  }
}

class LandingComponent {
  constructor(parent, violationsDataService, cmsUtilService, storefrontUtilityService, dialogService, authService, cmsReplacementService) {
    this.parent = parent;
    this.violationsDataService = violationsDataService;
    this.cmsUtilService = cmsUtilService;
    this.storefrontUtilityService = storefrontUtilityService;
    this.dialogService = dialogService;
    this.authService = authService;
    this.cmsReplacementService = cmsReplacementService;
    this.cmsMainPage = {};
    this.cmsSectionPayingOutstandingTolls = {};
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
    this.parent.scrollToTop();
    this.violations.selectedState = (_a = this.stateList) === null || _a === void 0 ? void 0 : _a.find(x => x.stateCode === 'TX');
    this.cmsImage = this.cmsUtilService.parseAllImageAttributes(this.cmsSectionInvoiceImage.Image) || {};
    this.notKioskModeOrIsFullSiteKiosk = !this.storefrontUtilityService.isRunningAsKiosk || this.storefrontUtilityService.webStoreData.fullSiteMode;

    if (!this.authService.isAuthenticated() && this.notKioskModeOrIsFullSiteKiosk) {
      this.showLoginModal();
    }
  }

  showLoginModal() {
    const data = {
      cmsContent: this.cmsLoginModal,
      closeImage: this.closeImage
    };
    this.dialogService.openGenericModal(common_ui_modals_loginPopUpModal_loginModal_component__WEBPACK_IMPORTED_MODULE_1__.LoginModalComponent, data);
  }

  findViolations(state) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //Old API, clean up later
      const fullRequest = {
        violationsData: {
          licenseState: _this.violations.selectedState.stateCode,
          invoiceNumber: _this.violations.invoiceNumber,
          licensePlate: _this.violations.licensePlateNumber
        }
      };
      _this.paymentPlansModal.LongDescription = _this.cmsReplacementService.transformTemplate(_this.paymentPlansModal.LongDescription, {
        plate: `${fullRequest.violationsData.licenseState.toUpperCase()} ${fullRequest.violationsData.licensePlate.toUpperCase()}`
      });
      yield _this.violationsDataService.findViolationAcct(fullRequest.violationsData, _this.paymentPlansModal, { ..._this.violationLoginModal,
        ..._this.cmsContentPmntPlan
      }, {
        to: state,
        options: {
          custom: {
            isExplicitlyAllowedTransition: true
          }
        }
      });
    })();
  }

  openInvoiceExample() {
    this.dialogService.openSliderCentered(violations_landing_invoiceExample_component__WEBPACK_IMPORTED_MODULE_2__.InvoiceExampleComponent, {
      pageData: this.cmsInvoiceExample
    });
  }

  ngOnDestroy() {
    this.dialogService.closeAllModals();
  }

}

LandingComponent.ɵfac = function LandingComponent_Factory(t) {
  return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](violationsCommon_services_violationsService_violationsData_service__WEBPACK_IMPORTED_MODULE_4__.ViolationsDataService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_5__.CmsUtilService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_6__.StorefrontUtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_7__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_8__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_5__.CmsReplacementService));
};

LandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: LandingComponent,
  selectors: [["violation-search-landing"]],
  inputs: {
    cmsMainPage: "cmsMainPage",
    cmsSectionPayingOutstandingTolls: "cmsSectionPayingOutstandingTolls",
    cmsSectionInvoiceImage: "cmsSectionInvoiceImage",
    cmsSectionSearchForTollViolationInvoices: "cmsSectionSearchForTollViolationInvoices",
    cmsInvoiceExample: "cmsInvoiceExample",
    cmsLoginModal: "cmsLoginModal",
    paymentPlansModal: "paymentPlansModal",
    violationLoginModal: "violationLoginModal",
    closeImage: "closeImage",
    cmsContentPmntPlan: "cmsContentPmntPlan",
    usStates: "usStates"
  },
  decls: 50,
  vars: 20,
  consts: [["fxLayout", "column", 1, "u-spacing__firstHeaderToTitle--marginTop", "u-spacing--widthFill"], ["fxLayout", "column"], [1, "u-spacing__divider--marginTopBottom"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "80px", 1, "u-spacing--widthFill"], [3, "innerHTML"], ["validation-focus", "", "novalidate", "", "fxLayout", "column start", 1, "u-spacing__fieldToSection--marginTop"], ["LandingForm", "ngForm"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "30px"], ["fxFlex", "none"], ["translation-skip", "", 3, "value", "disableOptionCentering", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "auto", "fxFlex.lt-md", "calc(100% - 587px)", 3, "error-check"], ["type", "text", "name", "licensePlate", "required", "", "id", "licensePlate", "tabindex", "2", "pattern", "^[a-zA-Z0-9]{1,10}$", "maxlength", "10", 3, "ngModel", "ngModelChange"], ["licensePlateInput", "ngModel"], [4, "ngFor", "ngForOf"], ["fxLayout", "column", 1, "u-spacing__fieldToField--marginTop", 3, "error-check"], ["for", "invoice"], ["type", "text", "id", "invoice", "pattern", "^[0-9]+$", "name", "invoice", "tabindex", "3", 3, "ngModel", "ngModelChange"], ["invoiceNumberInput", "ngModel"], ["id", "findInvoiceLnk", 3, "click"], [1, "u-spacing__buttonToField--marginTop"], ["storefront", ""], [3, "reverseOrder", "next"], ["wizard-next", ""], ["fxLayout", "column", "fxHide.lt-md", ""], ["id", "violations-landing-image", 4, "ngIf"], ["fxLayout", "column", 1, "u-spacing__headerToSection--marginTop"], [3, "value"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], ["class", "help-block", 4, "ngSwitchCase"], [1, "help-block"], ["id", "violations-landing-image"], [3, "src"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](35, "storefront-utility", null, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "wizard-ui", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("next", function LandingComponent_Template_wizard_ui_next_37_listener($event) {
        return ctx.findViolations($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39, "SUBMIT");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](41, LandingComponent_figure_41_Template, 2, 4, "figure", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](44, "section", 26)(45, "header", 1)(46, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](48, "mat-divider", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](49, "article", 4);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](23, 16, _r2.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("error-check", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.violations.invoiceNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](30, 18, _r4.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("reverseOrder", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.cmsImage.image);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.cmsSectionInvoiceImage.ImageCaption);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.cmsSectionPayingOutstandingTolls.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", ctx.cmsSectionPayingOutstandingTolls.ShortDescription, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
    }
  },
  directives: [_common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_9__.PageFilledContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutGapDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_10__.FocusDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOption, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_11__.ErrorCheckDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgSwitchCase, _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_12__.StorefrontUtilityComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_13__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_14__.WizardNextDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__.DefaultShowHideDirective],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.KeyValuePipe],
  styles: ["[_nghost-%COMP%]   mat-select[_ngcontent-%COMP%] {\n  width: 100px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n[_nghost-%COMP%]   #violations-landing-image[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUtRLFlBQUE7QUFMUjtBQUFBO0VBU1EsV0FBQTtBQU5SO0FBSEE7RUFhUSxlQUFBO0FBUFI7QUFOQTtFQWlCUSxvQkFBQTtBQVJSIiwiZmlsZSI6ImxhbmRpbmcubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcblxuICAgIEBzZWxlY3Qtc3RhdGUtd2lkdGg6IDEwMHB4O1xuXG4gICAgbWF0LXNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiBAc2VsZWN0LXN0YXRlLXdpZHRoO1xuICAgIH1cblxuICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgI3Zpb2xhdGlvbnMtbGFuZGluZy1pbWFnZSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 33445:
/*!****************************!*\
  !*** ./src/frp3/module.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Frp3ViolationsModule": () => (/* binding */ Frp3ViolationsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pipes/module */ 20445);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frame/frame.component */ 43012);
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ 49324);
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid/grid.component */ 30937);
/* harmony import */ var _paymentMethod_paymentMethod_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paymentMethod/paymentMethod.component */ 96092);
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm/confirm.component */ 5691);
/* harmony import */ var _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./receipt/receipt.component */ 13517);
/* harmony import */ var _grid_prevPaidInvoices_prevPaidInvoicesModal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grid/prevPaidInvoices/prevPaidInvoicesModal.component */ 56565);
/* harmony import */ var violationsCommon_violationsCommon_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! violationsCommon/violationsCommon.module */ 82690);
/* harmony import */ var storefront_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! storefront/module */ 89550);
/* harmony import */ var validation_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! validation/module */ 26186);
/* harmony import */ var app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/routing */ 59389);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout */ 45046);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var violations_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! violations/constants */ 27520);
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routing */ 33051);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./constants */ 39387);
/* harmony import */ var hybrid_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! hybrid/module */ 98730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @uirouter/angular */ 99305);




//components






















const routesWithComponents = _routing__WEBPACK_IMPORTED_MODULE_14__.routes.map(route => {
    const componentDictionary = {
        [_constants__WEBPACK_IMPORTED_MODULE_15__.stateNames.Root]: _frame_frame_component__WEBPACK_IMPORTED_MODULE_2__.FrameComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_15__.stateNames.Landing]: _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__.LandingComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_15__.stateNames.Grid]: _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__.GridComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_15__.stateNames.MakePayment]: _paymentMethod_paymentMethod_component__WEBPACK_IMPORTED_MODULE_5__.PaymentMethodComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_15__.stateNames.Confirm]: _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmPaymentComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_15__.stateNames.Receipt]: _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_7__.ReceiptComponent
    };
    return {
        ...route,
        component: componentDictionary[route.name]
    };
});
class Frp3ViolationsModule {
}
Frp3ViolationsModule.ɵfac = function Frp3ViolationsModule_Factory(t) { return new (t || Frp3ViolationsModule)(); };
Frp3ViolationsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: Frp3ViolationsModule });
Frp3ViolationsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [
        { provide: _constants__WEBPACK_IMPORTED_MODULE_15__.StateNames, useValue: _constants__WEBPACK_IMPORTED_MODULE_15__.stateNames },
        { provide: _constants__WEBPACK_IMPORTED_MODULE_15__.CmsIds, useValue: _constants__WEBPACK_IMPORTED_MODULE_15__.cmsIds },
        { provide: _constants__WEBPACK_IMPORTED_MODULE_15__.Routes, useValue: _constants__WEBPACK_IMPORTED_MODULE_15__.urlPaths },
        { provide: _constants__WEBPACK_IMPORTED_MODULE_15__.FeatureToggles, useValue: _constants__WEBPACK_IMPORTED_MODULE_15__.featureToggles }
    ], imports: [[
            pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
            (0,app_routing__WEBPACK_IMPORTED_MODULE_12__.DynamicRoutes)([common_module__WEBPACK_IMPORTED_MODULE_0__.ENVIRON_CONFIG], (environConfig) => environConfig.isMergeMATandVioOn
                ? routesWithComponents
                : [{ name: _constants__WEBPACK_IMPORTED_MODULE_15__.stateNames.Root, url: _constants__WEBPACK_IMPORTED_MODULE_15__.urlPaths.Future, redirectTo: violations_constants__WEBPACK_IMPORTED_MODULE_13__.stateNames.Landing }]),
            common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule, storefront_module__WEBPACK_IMPORTED_MODULE_10__.StorefrontModule,
            hybrid_module__WEBPACK_IMPORTED_MODULE_16__.HybridModule,
            validation_module__WEBPACK_IMPORTED_MODULE_11__.ValidationModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__.FlexLayoutModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDividerModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule,
            violationsCommon_violationsCommon_module__WEBPACK_IMPORTED_MODULE_9__.ViolationsCommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](Frp3ViolationsModule, { declarations: [_frame_frame_component__WEBPACK_IMPORTED_MODULE_2__.FrameComponent,
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__.LandingComponent,
        _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__.GridComponent,
        _paymentMethod_paymentMethod_component__WEBPACK_IMPORTED_MODULE_5__.PaymentMethodComponent,
        _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_7__.ReceiptComponent,
        _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmPaymentComponent,
        _grid_prevPaidInvoices_prevPaidInvoicesModal_component__WEBPACK_IMPORTED_MODULE_8__.PrevPaidInvoicesComponent], imports: [pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _uirouter_angular__WEBPACK_IMPORTED_MODULE_25__.UIRouterModule, common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule, storefront_module__WEBPACK_IMPORTED_MODULE_10__.StorefrontModule,
        hybrid_module__WEBPACK_IMPORTED_MODULE_16__.HybridModule,
        validation_module__WEBPACK_IMPORTED_MODULE_11__.ValidationModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__.FlexLayoutModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule,
        violationsCommon_violationsCommon_module__WEBPACK_IMPORTED_MODULE_9__.ViolationsCommonModule] }); })();


/***/ }),

/***/ 96092:
/*!***********************************************************!*\
  !*** ./src/frp3/paymentMethod/paymentMethod.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentMethodComponent": () => (/* binding */ PaymentMethodComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var common_ui_form_entry_paymentEntry_paymentEntry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/ui/form-entry/paymentEntry/paymentEntry.component */ 11311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var frp3_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! frp3/frame/frame.component */ 43012);
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uirouter/core */ 7199);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_form_entry_billingAddress_billingAddress_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui/form-entry/billingAddress/billingAddress.component */ 61618);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 38661);


















function PaymentMethodComponent_card_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "card-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "billing-address", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("billingInfo", ctx_r1.billingInfo)("stateList", ctx_r1.stateList)("validate", true)("countryList", ctx_r1.countryList)("header", ctx_r1.cmsContent.BillingAddressHeader);
  }
}

class PaymentMethodComponent {
  constructor(parent, state, uiRouterGlobals) {
    this.parent = parent;
    this.state = state;
    this.uiRouterGlobals = uiRouterGlobals;
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

  ngOnInit() {
    this.billingInfo = this.uiRouterGlobals.params.billingInfo || this.billingInfo;
    this.parent.stepNum = 2;
    this.parent.scrollToTop();
  }

  nextStep(nextState) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const paymentReady = yield _this.paymentMethod.getStatus();

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

}

PaymentMethodComponent.ɵfac = function PaymentMethodComponent_Factory(t) {
  return new (t || PaymentMethodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](frp3_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_uirouter_core__WEBPACK_IMPORTED_MODULE_4__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_uirouter_core__WEBPACK_IMPORTED_MODULE_4__.UIRouterGlobals));
};

PaymentMethodComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: PaymentMethodComponent,
  selectors: [["violation-payment-method"]],
  viewQuery: function PaymentMethodComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](common_ui_form_entry_paymentEntry_paymentEntry_component__WEBPACK_IMPORTED_MODULE_2__.PaymentEntryComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.paymentMethod = _t.first);
    }
  },
  inputs: {
    stateList: "stateList",
    countryList: "countryList",
    cmsContent: "cmsContent"
  },
  decls: 15,
  vars: 3,
  consts: [["validation-focus", "", "name", "violationsForm", "fxLayout", "column", 1, "u-spacing--widthFill"], ["BillingForm", "ngForm"], [3, "header", "billingInfo"], ["class", "u-spacing__cardToCard--marginTop", 4, "ngIf"], [1, "u-spacing__buttonToField--marginTop"], [3, "next", "previous"], ["wizard-next", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["wizard-cancel", ""], [1, "u-spacing__cardToCard--marginTop"], [3, "billingInfo", "stateList", "validate", "countryList", "header"]],
  template: function PaymentMethodComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "page-centered-container")(1, "form", 0, 1)(3, "card-container");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "payment-entry", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, PaymentMethodComponent_card_container_5_Template, 2, 5, "card-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "section", 4)(7, "wizard-ui", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("next", function PaymentMethodComponent_Template_wizard_ui_next_7_listener($event) {
        return ctx.nextStep($event);
      })("previous", function PaymentMethodComponent_Template_wizard_ui_previous_7_listener($event) {
        return ctx.goToPreviousState($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "CONTINUE");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "mat-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("header", ctx.cmsContent.PaymentMethodHeader)("billingInfo", ctx.billingInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.billingInfo.billingType);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_6__.FocusDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__.CardContainerComponent, common_ui_form_entry_paymentEntry_paymentEntry_component__WEBPACK_IMPORTED_MODULE_2__.PaymentEntryComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _common_ui_form_entry_billingAddress_billingAddress_component__WEBPACK_IMPORTED_MODULE_8__.BillingAddressComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_9__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_10__.WizardNextDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon],
  styles: ["[_nghost-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   payment-method-mui[_ngcontent-%COMP%] {\n    margin-top: 32px;\n  }\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\n[_nghost-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 2px;\n  display: inline;\n  margin: 0px 10px 3px 0px;\n}\n[_nghost-%COMP%]   section[after-billing-entry][_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnRNZXRob2QubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFxjdXN0b21cXHNwYWNpbmdcXHV0aWxpdHkubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFxjdXN0b21cXHNwYWNpbmdcXHNlY3Rpb25zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUNFUSxXQUFBO0FESlI7QUFFQTtFQU9RLFdBQUE7QUFOUjtBQURBO0VFdUJRLGdCQUFBO0FGbkJSO0FBVUk7RUFBQTtJRVBJLGdCQUFBO0VGQ047QUFDRjtBQVRBO0VBcUJRLGdCQUFBO0FBVFI7QUFaQTtFQXlCUSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBVlI7QUFuQkE7RUVPUSxnQkFBQTtBRmVSIiwiZmlsZSI6InBheW1lbnRNZXRob2QubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvY3VzdG9tL3NwYWNpbmcvdXRpbGl0eS5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy9zZWN0aW9ucy5sZXNzJztcblxuOmhvc3Qge1xuXG4gICAgZm9ybSB7XG4gICAgICAgIC5yZWZyZXNoLTIwMjAudS1zcGFjaW5nLS13aWR0aEZpbGwoKTtcbiAgICB9XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG5cbiAgICB3aXphcmQtdWkge1xuICAgICAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fYnV0dG9uVG9GaWVsZC0tbWFyZ2luVG9wKCk7XG4gICAgfVxuXG4gICAgQG1lZGlhIEBicmVha3BvaW50LWx0LW1kIHtcbiAgICAgICAgcGF5bWVudC1tZXRob2QtbXVpIHtcbiAgICAgICAgICAgIC5yZWZyZXNoLTIwMjAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Ub3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgbWF4LWhlaWdodDogNzBweDtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHggM3B4IDBweDtcbiAgICB9XG5cbiAgICBzZWN0aW9uW2FmdGVyLWJpbGxpbmctZW50cnldIHtcbiAgICAgICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCgpO1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuLnJlZnJlc2gtMjAyMCB7XG5cbiAgICAmLnUtc3BhY2luZy0td2lkdGhGaWxsLFxuICAgIC51LXNwYWNpbmctLXdpZHRoRmlsbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC50YWItY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDBweCA3JTtcblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtc20ge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhYi1jb250ZW50IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2U7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNy41MnB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjRweDtcblxuICAgICAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LXNtIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IHVuc2V0O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjY2NlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFubmVyLWltZyB7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMjNweDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1zbSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTI3cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFubmVyLXR4dCB7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI3LjUycHg7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjRweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogSm9zdDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjIxLCA5KTtcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogcmdiKDY3LCA2OSwgNzMpIDNweCAycHggOHB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtc20ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtc3BhY2luZyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLnJlZnJlc2gtMjAyMCB7XG4gICAgLy8gRGVza3RvcFxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2hlYWRlclRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpbkJvdHRvbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wSGFsZiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fYnV0dG9uVG9GaWVsZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maXJzdEhlYWRlclRvVGl0bGUtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fY2FyZFRvQ2FyZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19hZGRyZXNzVG9QYXltZW50RGlzcGxheS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG4gICAgLy8gTW9iaWxlXG4gICAgJi5sdC1tZCxcbiAgICAubHQtbWQge1xuICAgICAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 13517:
/*!***********************************************!*\
  !*** ./src/frp3/receipt/receipt.component.ts ***!
  \***********************************************/
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
/* harmony import */ var login_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! login/constants */ 5723);
/* harmony import */ var accountDashboard_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! accountDashboard/constants */ 75888);
/* harmony import */ var decimal_js_light__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! decimal.js-light */ 75671);
/* harmony import */ var decimal_js_light__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(decimal_js_light__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var frp3_frame_frame_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! frp3/frame/frame.component */ 43012);
/* harmony import */ var _common_services_browserExtensionHandlerService_browserExtensionHandler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/services/browserExtensionHandlerService/browserExtensionHandler.service */ 31902);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var violationsCommon_services_violationsService_violationsData_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! violationsCommon/services/violationsService/violationsData.service */ 3938);
/* harmony import */ var frp3_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! frp3/constants */ 39387);
/* harmony import */ var authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! authentication/authenticationService/authentication.service */ 44722);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_print_link_print_link_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/print-link/print-link.component */ 33402);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/ui/containers/row/row.component */ 80001);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/ui/display/cmsContent/cmsContent.component */ 89707);
/* harmony import */ var _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/ui/display/payment/paymentDisplay.component */ 38321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/ui/display/address/addressDisplay.component */ 23204);
/* harmony import */ var _violationsCommon_components_violationsPlate_violationsPlate_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../violationsCommon/components/violationsPlate/violationsPlate.component */ 42349);
/* harmony import */ var _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../storefront/utility/utility.component */ 10061);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);































function ReceiptComponent_address_display_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "address-display", 21);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("address", ctx_r0.billingMethod.billingType === ctx_r0.BillingType.Credit ? ctx_r0.billingMethod.credit : ctx_r0.billingMethod.eft)("international", ctx_r0.billingMethod.billingType === ctx_r0.BillingType.Credit ? ctx_r0.billingMethod.credit.international : ctx_r0.billingMethod.eft.international);
  }
}

function ReceiptComponent_cms_content_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "cms-content", 22);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("template", ctx_r1.cmsSectionImportantInformation.LongDescription);
  }
}

function ReceiptComponent_cms_content_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "cms-content", 22);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("template", ctx_r2.cmsSectionImportantInformation.ShortDescription);
  }
}

function ReceiptComponent_section_35_violations_plate_row_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "violations-plate-row", 28);
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("hideHeader", false)("plate", ctx_r7.plateContainer.plate)("showCollapseUi", false)("selectAllAsDefault", false)("isEditAllowed", false)("isRound", true)("cmsData", ctx_r7.cmsContentPmntPlan);
  }
}

function ReceiptComponent_section_35_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](1, "violations-plate-row", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const plate_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("hideHeader", true)("plate", plate_r9)("showCollapseUi", false)("selectAllAsDefault", false)("isEditAllowed", false)("isRound", true)("cmsData", ctx_r8.cmsContentPmntPlan)("isAssociated", true);
  }
}

function ReceiptComponent_section_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "section", 13)(1, "header")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](4, "mat-divider", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](6, ReceiptComponent_section_35_violations_plate_row_6_Template, 1, 7, "violations-plate-row", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](7, ReceiptComponent_section_35_div_7_Template, 2, 8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](8, "row-container", 25)(9, "section", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](10, " Remaining Balance: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](11, "section", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](12, "currency", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](ctx_r3.cmsContent.RemainingBalanceHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", ctx_r3.cmsContent.RemainingBalanceSubHeader, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx_r3.searchPlateBalancePaid);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngForOf", ctx_r3.plateContainer.associatedPlates);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("rowType", "emphasis")("isBig", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("value", ctx_r3.remainingBalance);
  }
}

function ReceiptComponent_section_39_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](1, "Pay Remaining Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
}

function ReceiptComponent_section_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "section")(1, "wizard-ui", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("next", function ReceiptComponent_section_39_Template_wizard_ui_next_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return ctx_r11.goToLoginOrAccountOverview();
    })("previous", function ReceiptComponent_section_39_Template_wizard_ui_previous_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return ctx_r13.backToSearchGrid();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](4, ReceiptComponent_section_39_span_4_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("reverseOrder", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](ctx_r5.isAuthenticated ? "ACCOUNT DASHBOARD" : "LOGIN TO MY ACCOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx_r5.searchPlateBalancePaid);
  }
}

function ReceiptComponent_section_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "section")(1, "wizard-ui", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("next", function ReceiptComponent_section_40_Template_wizard_ui_next_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return ctx_r14.nextTask($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](3, "PROCEED");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
  }
}

class ReceiptComponent {
  constructor(parent, browserExtensionHandlerService, window, uiRouterGlobals, state, violationsDataService, stateNames, authenticationService) {
    this.parent = parent;
    this.browserExtensionHandlerService = browserExtensionHandlerService;
    this.window = window;
    this.uiRouterGlobals = uiRouterGlobals;
    this.state = state;
    this.violationsDataService = violationsDataService;
    this.stateNames = stateNames;
    this.authenticationService = authenticationService;
    this.BillingType = common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType;
    this.thankYouSectionParams = {};
    this.isAuthenticated = false;
  }

  get dateNow() {
    return new Date();
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.parent.stepNum = 4; //This removes the wizard stepper.

      _this.billingMethod = _this.uiRouterGlobals.params.billingInfo || {};
      _this.plateContainer = _this.parent.getPlateContainer();
      _this.paymentAmount = _this.plateContainer.paymentAmount || _this.plateContainer.assocPlatesPaymentAmount ? new decimal_js_light__WEBPACK_IMPORTED_MODULE_6__.Decimal(_this.plateContainer.paymentAmount).plus(_this.plateContainer.assocPlatesPaymentAmount) : new decimal_js_light__WEBPACK_IMPORTED_MODULE_6__.Decimal(0);
      yield _this.updateViolations();

      if (_this.billingMethod && _this.billingMethod.billingType && !(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(_this.billingMethod)) {
        _this.setupPage();
      } else {
        _this.state.go(_this.stateNames.Landing);
      }
    })();
  }

  setupPage() {
    this.browserExtensionHandlerService.sendTag(this.uiRouterGlobals.current, this.plateContainer.violationsFlowName);
    this.searchPlateBalancePaid = this.searchPlateBalance.greaterThan(0);
    this.thankYouSectionParams = {
      paymentDate: this.dateNow,
      totalPayment: this.paymentAmount.toNumber(),
      remainingBalance: this.remainingBalance.toNumber()
    };
    this.isAuthenticated = this.authenticationService.isAuthenticated();
  }

  updateViolations() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b, _c, _d;

      const fullRequest = {
        licenseState: _this2.plateContainer.plate.licenseState,
        invoiceNumber: _this2.plateContainer.invoiceSearchNum === null ? '' : _this2.plateContainer.invoiceSearchNum,
        licensePlate: _this2.plateContainer.plate.licensePlate,
        research: true
      };
      yield _this2.violationsDataService.findViolationAcct(fullRequest, null, null, null, true);
      _this2.plateContainer = _this2.parent.getPlateContainer();
      const assocPlates = _this2.plateContainer.associatedPlates;
      const assocPlatesRemBal = assocPlates instanceof Array && assocPlates.length > 0 ? assocPlates.reduce((acc, val) => acc.plus(val.totalInvoicedAmount).plus(val.totalUninvoicedAmount), new decimal_js_light__WEBPACK_IMPORTED_MODULE_6__.Decimal(0)) : new decimal_js_light__WEBPACK_IMPORTED_MODULE_6__.Decimal(0);
      _this2.searchPlateBalance = new decimal_js_light__WEBPACK_IMPORTED_MODULE_6__.Decimal((_a = _this2.plateContainer.plate.totalInvoicedAmount) !== null && _a !== void 0 ? _a : 0).plus((_b = _this2.plateContainer.plate.totalUninvoicedAmount) !== null && _b !== void 0 ? _b : 0);
      _this2.remainingBalance = assocPlatesRemBal.plus((_c = _this2.plateContainer.plate.totalInvoicedAmount) !== null && _c !== void 0 ? _c : 0).plus((_d = _this2.plateContainer.plate.totalUninvoicedAmount) !== null && _d !== void 0 ? _d : 0);
      _this2.showRemainingBalance = _this2.remainingBalance.greaterThan(0);
    })();
  }

  goToLoginOrAccountOverview() {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.isAuthenticated) {
        _this3.state.go(accountDashboard_constants__WEBPACK_IMPORTED_MODULE_5__.stateNames.Frame);
      } else {
        _this3.state.go(login_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.Login);
      }

      _this3.violationsDataService.removeAllWebStorageEntries();
    })();
  }

  backToSearchGrid() {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const fullRequest = {
        licenseState: _this4.plateContainer.plate.licenseState,
        invoiceNumber: !_this4.plateContainer.invoiceSearchNum ? '' : _this4.plateContainer.invoiceSearchNum,
        licensePlate: _this4.plateContainer.plate.licensePlate
      };
      yield _this4.violationsDataService.findViolationAcct(fullRequest, null, null, {
        to: _this4.stateNames.Grid,
        params: {
          billingInfo: _this4.billingMethod
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
    var _this5 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.state.go(nextState);
    })();
  }

  onPopState(event) {
    this.state.go(this.stateNames.Landing);
  }

}

ReceiptComponent.ɵfac = function ReceiptComponent_Factory(t) {
  return new (t || ReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](frp3_frame_frame_component__WEBPACK_IMPORTED_MODULE_7__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_common_services_browserExtensionHandlerService_browserExtensionHandler_service__WEBPACK_IMPORTED_MODULE_8__.BrowserExtensionHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](common_providers__WEBPACK_IMPORTED_MODULE_1__.WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_25__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_25__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](violationsCommon_services_violationsService_violationsData_service__WEBPACK_IMPORTED_MODULE_9__.ViolationsDataService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](frp3_constants__WEBPACK_IMPORTED_MODULE_10__.StateNames), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_11__.AuthenticationService));
};

ReceiptComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineComponent"]({
  type: ReceiptComponent,
  selectors: [["receipt-component"]],
  hostBindings: function ReceiptComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("popstate", function ReceiptComponent_popstate_HostBindingHandler($event) {
        return ctx.onPopState($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresolveWindow"]);
    }
  },
  inputs: {
    cmsContent: "cmsContent",
    cmsSectionImportantInformation: "cmsSectionImportantInformation",
    cmsSectionThankYou: "cmsSectionThankYou",
    cmsPaymentPostingPopup: "cmsPaymentPostingPopup",
    cmsContentPmntPlan: "cmsContentPmntPlan"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵProvidersFeature"]([])],
  decls: 41,
  vars: 17,
  consts: [["fxLayout", "column"], [1, "u-spacing__firstHeaderToTitle--marginTop"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayout.lt-md", "column", "fxLayoutAlign.lt-md", "start start"], ["fxFlex", "grow", "fxFlexOrder", "1", "fxFlexOrder.lt-md", "2"], ["fxFlex", "none", "fxFlexOrder", "2", "fxFlexOrder.lt-md", "1", "ngClass.lt-md", "printContainer-extra-bottom-space"], ["id", "printButton"], [1, "u-spacing__divider--marginTopBottom"], [3, "rowType"], ["col-start", "", "id", "totalPaymentLabel", "fxFlex", "grow"], ["col-end", "", "id", "totalPaymentValue", "fxFlex", "none"], [3, "value"], ["fxLayout", "column", 1, "u-spacing__sectionToRow--marginTop"], ["id", "thankYouSection", 3, "template", "data"], ["fxLayout", "column", 1, "u-spacing__fieldToSection--marginTop"], [3, "billingType", "bankDetails", "creditCard", "showAccountNumber"], ["class", "u-spacing__addressToPaymentDisplay--marginTop", 3, "address", "international", 4, "ngIf"], ["id", "importantInformationSection", 3, "template", 4, "ngIf"], ["fxLayout", "column", "class", "u-spacing__fieldToSection--marginTop", 4, "ngIf"], [1, "u-spacing--widthFill", "u-spacing__buttonToField--marginTop"], ["storefront", ""], [4, "ngIf"], [1, "u-spacing__addressToPaymentDisplay--marginTop", 3, "address", "international"], ["id", "importantInformationSection", 3, "template"], [3, "hideHeader", "plate", "showCollapseUi", "selectAllAsDefault", "isEditAllowed", "isRound", "cmsData", 4, "ngIf"], [4, "ngFor", "ngForOf"], [2, "margin-top", "10px", 3, "rowType", "isBig"], ["col-start", "", "fxFlex", "grow", 2, "font-weight", "700"], ["col-end", "", "fxFlex", "none", 1, "totalAmountValue", 2, "font-weight", "700"], [3, "hideHeader", "plate", "showCollapseUi", "selectAllAsDefault", "isEditAllowed", "isRound", "cmsData"], [3, "hideHeader", "plate", "showCollapseUi", "selectAllAsDefault", "isEditAllowed", "isRound", "cmsData", "isAssociated"], [3, "reverseOrder", "next", "previous"], ["wizard-next", ""], ["wizard-previous", "", 4, "ngIf"], ["wizard-previous", ""], [3, "next"]],
  template: function ReceiptComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "page-centered-container")(1, "div", 0)(2, "card-container", 1)(3, "section", 0)(4, "header")(5, "div", 2)(6, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](9, "print-link", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](10, "mat-divider", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](11, "section", 0)(12, "row-container", 7)(13, "article", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](14, " Payment Amount: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](15, "article", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](16, "currency", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](17, "section", 11)(18, "article");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](19, "cms-content", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](20, "section", 13)(21, "header")(22, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](24, "mat-divider", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](25, "payment-display", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](26, ReceiptComponent_address_display_26_Template, 1, 2, "address-display", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](27, "section", 13)(28, "header")(29, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](31, "mat-divider", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](32, "article");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](33, ReceiptComponent_cms_content_33_Template, 1, 1, "cms-content", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](34, ReceiptComponent_cms_content_34_Template, 1, 1, "cms-content", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](35, ReceiptComponent_section_35_Template, 13, 7, "section", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](36, "section", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](37, "storefront-utility", null, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](39, ReceiptComponent_section_39_Template, 5, 3, "section", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](40, ReceiptComponent_section_40_Template, 4, 0, "section", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵreference"](38);

      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", ctx.cmsSectionThankYou.Title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("rowType", "emphasis");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("value", ctx.paymentAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("template", ctx.cmsSectionThankYou.LongDescription)("data", ctx.thankYouSectionParams);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](ctx.cmsContent.BillingInformationHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("billingType", ctx.billingMethod.billingType)("bankDetails", ctx.billingMethod.eft)("creditCard", ctx.billingMethod.credit)("showAccountNumber", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.billingMethod.billingType);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](ctx.cmsSectionImportantInformation.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.showRemainingBalance);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", !_r4.isKioskView);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", _r4.isKioskView);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_12__.PageCenteredContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__.DefaultLayoutDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_13__.CardContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__.DefaultFlexOrderDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__.DefaultClassDirective, _common_ui_print_link_print_link_component__WEBPACK_IMPORTED_MODULE_14__.PrintLinkComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDivider, _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_15__.RowContainerComponent, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_16__.CurrencyComponent, _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_17__.CmsContentComponent, _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_18__.PaymentDisplayComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_19__.AddressDisplayComponent, _violationsCommon_components_violationsPlate_violationsPlate_component__WEBPACK_IMPORTED_MODULE_20__.ViolationsPlateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgForOf, _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_21__.StorefrontUtilityComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_22__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_23__.WizardNextDirective],
  styles: ["h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\nmat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n#totalPaymentLabel[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n  color: #34353a;\n}\n#totalPaymentValue[_ngcontent-%COMP%] {\n  text-align: right;\n  font-weight: 700;\n  font-size: 16px;\n}\n.printContainer-extra-bottom-space[_ngcontent-%COMP%] {\n  margin-left: 26px;\n  margin-bottom: 25px;\n}\n.custom-spacing-addressToDisplay[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\nviolations-plate-row[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VpcHQubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxwYWdlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxnQkFBQTtBQUZKO0FBS0E7RUFDSSxXQUFBO0FBSEo7QUFNQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQ21DQSxjQUFBO0FEdENKO0FBT0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUxKO0FBUUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBTko7QUFTQTtFQUNJLGdCQUFBO0FBUEo7QUFVQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQVJKIiwiZmlsZSI6InJlY2VpcHQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG5oMiB7XG4gICAgbWF4LWhlaWdodDogNzBweDtcbn1cblxubWF0LWRpdmlkZXIge1xuICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbn1cblxuI3RvdGFsUGF5bWVudExhYmVsIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAudC1oZWFkZXItLWNvbG9yKEB0aGVtZS1saWdodCk7XG59XG5cbiN0b3RhbFBheW1lbnRWYWx1ZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5wcmludENvbnRhaW5lci1leHRyYS1ib3R0b20tc3BhY2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAyNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5jdXN0b20tc3BhY2luZy1hZGRyZXNzVG9EaXNwbGF5IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG52aW9sYXRpb25zLXBsYXRlLXJvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG5AYm9keS0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAd2hpdGU7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMi1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjMtbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1saWdodDogQHRyb3BpY2FsLXJhaW4tZm9yZXN0LWdyZWVuO1xuQGJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2lsdmVyLWdyYXk7XG5AaGVhZGVyLS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBsYWJlbC0tY29sb3ItbGlnaHQ6IEBib3VsZGVyLWdyYXk7XG5Ac2VsZWN0X19hcnJvdy0tY29sb3ItbGlnaHQ6IEBzY29ycGlvbi1ncmF5O1xuQGxpbmstLWNvbG9yLWxpZ2h0OiBAYXp1cmUtcmFkaWFuY2UtYmx1ZTtcbkBkaXZpZGVyLS1ib3JkZXJDb2xvci1saWdodDogQHNjaG9vbC1idXMteWVsbG93O1xuXG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjIoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMi1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMyhAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtaGVhZGVyLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdoZWFkZXItLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGFiZWwtLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xhYmVsLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXNlbGVjdF9fYXJyb3ctLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3NlbGVjdF9fYXJyb3ctLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGluay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGluay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yICFpbXBvcnRhbnQ7IC8vIG1hcmtlZCBhcyAhaW1wb3J0YW50IHRvIG92ZXJyaWRlIGJvb3RzdHJhcFxufVxuXG4udC1kaXZpZGVyLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdkaXZpZGVyLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1kaXZpZGVyX19kYXNoLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuIl19 */"]
});

/***/ })

}]);
//# sourceMappingURL=445.b310fcd5e156f365.js.map