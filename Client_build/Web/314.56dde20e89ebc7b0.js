"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[314],{

/***/ 6362:
/*!******************************************************!*\
  !*** ./src/missedatoll/billing/billing.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingComponent": () => (/* binding */ BillingComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frame/frame.component */ 98972);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_form_entry_paymentMethod_paymentMethod_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui/form-entry/paymentMethod/paymentMethod.component */ 51325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_form_entry_bankAccount_bankAccountEntry_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/form-entry/bankAccount/bankAccountEntry.component */ 48738);
/* harmony import */ var _common_ui_form_entry_creditCardEntry_creditCardEntry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/ui/form-entry/creditCardEntry/creditCardEntry.component */ 70858);
/* harmony import */ var _common_ui_form_entry_address_addressEntry_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/form-entry/address/addressEntry.component */ 54608);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 38661);






















function BillingComponent_section_10_bank_account_entry_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "bank-account-entry", 15);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bankDetails", ctx_r3.billingInfo.eft)("validate", true)("showName", true);
  }
}

function BillingComponent_section_10_credit_card_entry_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "credit-card-entry", 16);
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("creditCard", ctx_r4.billingInfo.credit);
  }
}

function BillingComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, BillingComponent_section_10_bank_account_entry_1_Template, 1, 3, "bank-account-entry", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, BillingComponent_section_10_credit_card_entry_2_Template, 1, 1, "credit-card-entry", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.billingInfo.billingType === ctx_r1.BillingType.Eft);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.billingInfo.billingType === ctx_r1.BillingType.Credit);
  }
}

function BillingComponent_card_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "card-container", 17)(1, "header")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Billing Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "mat-divider", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "section")(6, "address-entry", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("internationalChange", function BillingComponent_card_container_11_Template_address_entry_internationalChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r5.billingInfo.billingType === ctx_r5.BillingType.Credit ? ctx_r5.billingInfo.credit.international : ctx_r5.billingInfo.eft.international = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("stateList", ctx_r2.parent.stateList)("address", ctx_r2.billingInfo.billingType === ctx_r2.BillingType.Credit ? ctx_r2.billingInfo.credit : ctx_r2.billingInfo.eft)("billingType", ctx_r2.billingInfo.billingType)("validate", true)("countryList", ctx_r2.parent.countryList)("international", ctx_r2.billingInfo.billingType === ctx_r2.BillingType.Credit ? ctx_r2.billingInfo.credit.international : ctx_r2.billingInfo.eft.international);
  }
}

class BillingComponent {
  constructor(parent, state, uiRouterGlobals, genericRepoService, responseErrorService) {
    this.parent = parent;
    this.state = state;
    this.uiRouterGlobals = uiRouterGlobals;
    this.genericRepoService = genericRepoService;
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

  ngOnInit() {
    this.parent.stepNum = 2;
    this.billingInfo = this.uiRouterGlobals.params.billingInfo || this.billingInfo;
    this.parent.scrollToTop();
  }

  submit(nextState) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.billingInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft) {
        const eftRequest = {
          AccountType: _this.billingInfo.eft.accountType,
          RoutingNumber: _this.billingInfo.eft.routingNumber,
          AccountNumber: _this.billingInfo.eft.accountNumber
        };
        const response = yield _this.genericRepoService.dataFactory.eftValidateRouting(eftRequest);

        if (Array.isArray(response.alerts) && response.alerts.length !== 0) {
          _this.responseErrorService.displayAlertsFromResponse(response, true);
        }
      } else {
        if (_this.creditEntry) {
          const submitResponse = yield _this.creditEntry.submit();

          if (!submitResponse) {
            return;
          }
        }
      }

      yield _this.state.go(nextState, {
        billingInfo: _this.billingInfo
      });
    })();
  }

  previous(prevState) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.state.go(prevState, {
        billingInfo: _this2.billingInfo
      });
    })();
  }

}

BillingComponent.ɵfac = function BillingComponent_Factory(t) {
  return new (t || BillingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_15__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_15__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_4__.GenericRepoService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_4__.ResponseErrorService));
};

BillingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: BillingComponent,
  selectors: [["missed-a-toll-billing-component"]],
  viewQuery: function BillingComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](common_ui__WEBPACK_IMPORTED_MODULE_2__.CreditCardEntryComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.creditEntry = _t.first);
    }
  },
  decls: 21,
  vars: 3,
  consts: [["validation-focus", "", "name", "missedATollForm", "fxLayout", "column", 1, "u-spacing--widthFill"], ["BillingForm", "ngForm"], [1, "u-spacing__divider--marginTopBottom"], [3, "billingType", "billingTypeChange"], ["class", "u-spacing__fieldToField--marginTop", 4, "ngIf"], ["class", "u-spacing__cardToCard--marginTop", 4, "ngIf"], [1, "u-spacing__buttonToField--marginTop"], [3, "next", "previous"], ["wizard-next", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["wizard-cancel", ""], [1, "u-spacing__fieldToField--marginTop"], [3, "bankDetails", "validate", "showName", 4, "ngIf"], [3, "creditCard", 4, "ngIf"], [3, "bankDetails", "validate", "showName"], [3, "creditCard"], [1, "u-spacing__cardToCard--marginTop"], [3, "stateList", "address", "billingType", "validate", "countryList", "international", "internationalChange"]],
  template: function BillingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "page-centered-container")(1, "form", 0, 1)(3, "card-container")(4, "header")(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Payment Method");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "mat-divider", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "section")(9, "payment-method", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("billingTypeChange", function BillingComponent_Template_payment_method_billingTypeChange_9_listener($event) {
        return ctx.billingInfo.billingType = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, BillingComponent_section_10_Template, 3, 2, "section", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, BillingComponent_card_container_11_Template, 7, 6, "card-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "section", 6)(13, "wizard-ui", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("next", function BillingComponent_Template_wizard_ui_next_13_listener($event) {
        return ctx.submit($event);
      })("previous", function BillingComponent_Template_wizard_ui_previous_13_listener($event) {
        return ctx.previous($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "CONTINUE");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("billingType", ctx.billingInfo.billingType);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.billingInfo.billingType);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.billingInfo.billingType);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_6__.FocusDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDivider, _common_ui_form_entry_paymentMethod_paymentMethod_component__WEBPACK_IMPORTED_MODULE_8__.PaymentMethodComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _common_ui_form_entry_bankAccount_bankAccountEntry_component__WEBPACK_IMPORTED_MODULE_9__.BankAccountEntryComponent, _common_ui_form_entry_creditCardEntry_creditCardEntry_component__WEBPACK_IMPORTED_MODULE_10__.CreditCardEntryComponent, _common_ui_form_entry_address_addressEntry_component__WEBPACK_IMPORTED_MODULE_11__.AddressEntryComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_12__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_13__.WizardNextDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutAlignDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon],
  styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGxpbmcubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdRLFdBQUE7QUFIUjtBQUFBO0VBT1EsZ0JBQUE7QUFKUiIsImZpbGUiOiJiaWxsaW5nLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 36247:
/*!******************************************************!*\
  !*** ./src/missedatoll/confirm/confirm.component.ts ***!
  \******************************************************/
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frame/frame.component */ 98972);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/services/webStorageService/webStorage.service */ 38898);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services */ 35682);
/* harmony import */ var _common_services_toggleButtons_toggleButtons_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/services/toggleButtons/toggleButtons.service */ 466);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/ui/display/payment/paymentDisplay.component */ 38321);
/* harmony import */ var _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/ui/display/address/addressDisplay.component */ 23204);
/* harmony import */ var _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/ui/containers/row/row.component */ 80001);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ 38661);






























function ConfirmComponent_div_15_ng_container_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Please enter a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}

function ConfirmComponent_div_15_ng_container_1_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Please enter a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}

function ConfirmComponent_div_15_ng_container_1_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Please enter a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}

function ConfirmComponent_div_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ConfirmComponent_div_15_ng_container_1_p_1_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ConfirmComponent_div_15_ng_container_1_p_2_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, ConfirmComponent_div_15_ng_container_1_p_3_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngSwitch", error_r4.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngSwitchCase", "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngSwitchCase", "maxLength");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngSwitchCase", "minLength");
  }
}

function ConfirmComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ConfirmComponent_div_15_ng_container_1_Template, 4, 4, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](2);

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", _r0.submitted);
  }
}

function ConfirmComponent_address_display_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "address-display", 28);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("address", ctx_r3.billingInfo.billingType === ctx_r3.BillingType.Credit ? ctx_r3.billingInfo.credit : ctx_r3.billingInfo.eft)("international", ctx_r3.billingInfo.billingType === ctx_r3.BillingType.Credit ? ctx_r3.billingInfo.credit.international : ctx_r3.billingInfo.eft.international)("showLabels", true);
  }
}

class ConfirmComponent {
  constructor(parent, state, uiRouterGlobals, webStorage, responseErrorService, missedATollService, dialogService, missedATollApi, eventTrackingService, toggleButtonsService, webStorageConst) {
    this.parent = parent;
    this.state = state;
    this.uiRouterGlobals = uiRouterGlobals;
    this.webStorage = webStorage;
    this.responseErrorService = responseErrorService;
    this.missedATollService = missedATollService;
    this.dialogService = dialogService;
    this.missedATollApi = missedATollApi;
    this.eventTrackingService = eventTrackingService;
    this.toggleButtonsService = toggleButtonsService;
    this.webStorageConst = webStorageConst;
    this.BillingType = common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType;
  }

  get cms() {
    return this.cmsContent;
  }

  ngOnInit() {
    this.parent.stepNum = 3;
    this.billingInfo = this.uiRouterGlobals.params.billingInfo || {};
  }

  ngAfterViewInit() {
    return this.billingInfo && this.billingInfo.billingType && !(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(this.billingInfo) ? this.setupPage() : this.wizardComponent.gotoPreviousState();
  }

  setupPage() {
    this.parent.scrollToTop();
    const violationInformation = this.missedATollService.getViolationInformation();
    const formattedViolationData = violationInformation.formattedViolationData;
    this.totalPayment = formattedViolationData.grandTotal;
  }

  submit(nextState) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.webStorage.addEmailAddressToViolationsData(_this.parent.emailAddress);

      const violationInformation = _this.missedATollService.getViolationInformation();

      const request = yield _this.missedATollService.constructMatPaymentRequest(_this.billingInfo.billingType, _this.billingInfo, violationInformation, violationInformation.formattedViolationData.listOfViolations, _this.parent.emailAddress);
      request.violations = request.violationInfo.violations;
      request.agencyPayments = request.violationInfo.agencyPayments;
      request.violationsData = {
        licenseState: request.violationInfo.jurisdiction,
        licensePlate: request.violationInfo.licPlateNum
      };

      const responsePromise = _this.missedATollApi.matMakePayment(request);

      _this.toggleButtonsService.disableUntilResolved(responsePromise);

      const response = yield responsePromise;

      if (_this.responseErrorService.isErrorFree(response)) {
        // Delete violations data from webStorage if successful payment
        _this.webStorage.removeEntry(_this.webStorageConst.violationsLogData);

        yield _this.goToNextState(nextState, request.violations);
      }
    })();
  }

  goToNextState(nextState, violations) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.eventTrackingService.matTrackViolationCounts(violations);

      yield _this2.state.go(nextState, {
        billingInfo: _this2.billingInfo
      }, {
        custom: {
          isExplicitlyAllowedTransition: true
        }
      });
    })();
  }

  previous(prevState) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.state.go(prevState, {
        billingInfo: _this3.billingInfo
      });
    })();
  }

  openModal() {
    const data = {
      billingInformation: (0,lodash__WEBPACK_IMPORTED_MODULE_3__.cloneDeep)(this.billingInfo),
      billingType: this.billingInfo.billingType,
      stateList: this.parent.stateList,
      countryList: this.parent.countryList
    };
    return this.dialogService.openSliderCentered(common_ui_modals_billingModal_billingModal_component__WEBPACK_IMPORTED_MODULE_2__.BillingModalComponent, data, {
      title: 'Edit Payment Method'
    }).then(result => {
      if (result) {
        this.billingInfo = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.cloneDeep)(result.billingInformation);
        this.billingInfo.billingType = result.billingType;
      }
    });
  }

}

ConfirmComponent.ɵfac = function ConfirmComponent_Factory(t) {
  return new (t || ConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_5__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_22__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_22__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_6__.WebStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_7__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__.MissedATollService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_7__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__.WebApiService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_7__.EventTrackingService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_common_services_toggleButtons_toggleButtons_service__WEBPACK_IMPORTED_MODULE_9__.ToggleButtonsService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](constants_module__WEBPACK_IMPORTED_MODULE_10__.WebStorageConst));
};

ConfirmComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
  type: ConfirmComponent,
  selectors: [["confirm-component"]],
  viewQuery: function ConfirmComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](common_ui__WEBPACK_IMPORTED_MODULE_4__.WizardComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.wizardComponent = _t.first);
    }
  },
  inputs: {
    cmsContent: "cmsContent",
    emailAddress: "emailAddress"
  },
  decls: 41,
  vars: 17,
  consts: [["validation-focus", "", "name", "missedATollForm", "fxLayout", "column", 1, "u-spacing--widthFill"], ["ConfirmForm", "ngForm"], [1, "u-spacing__divider--marginTopBottom"], [1, "u-spacing--widthFill", "u-spacing__fieldToSection--marginTop", 3, "error-check"], ["type", "text", "id", "emailAddress", "name", "emailAddress", "maxLength", "80", "minLength", "1", "placeholder", "username@domain.com", "email", "", 1, "u-spacing--widthFill", 3, "ngModel", "ngModelChange"], ["EmailAddressInput", "ngModel"], ["role", "alert", 4, "ngFor", "ngForOf"], [1, "u-spacing__cardToCard--marginTop"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "u-spacing--widthFill"], ["fxFlex", "grow"], ["fxFlex", "none", "aria-label", "Edit", 1, "editButton", 3, "click"], [3, "billingType", "bankDetails", "creditCard", "showAccountNumber", "showLabels"], [3, "address", "international", "showLabels", 4, "ngIf"], [1, "u-spacing__rowToSection--marginTop", 3, "rowType"], ["col-start", "", "id", "totalPaymentLabel", "fxFlex", "grow"], ["col-end", "", "id", "totalPaymentValue", "fxFlex", "none"], [3, "value"], [1, "u-spacing__buttonToField--marginTop"], [3, "next", "previous"], ["wizard-next", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["wizard-cancel", ""], ["role", "alert"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], ["class", "help-block", 4, "ngSwitchCase"], [1, "help-block"], [3, "address", "international", "showLabels"]],
  template: function ConfirmComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "page-centered-container")(1, "form", 0, 1)(3, "card-container")(4, "header")(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](7, "mat-divider", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "article");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "section", 3)(11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12, "EMAIL");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function ConfirmComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.parent.emailAddress = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](15, ConfirmComponent_div_15_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](16, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "card-container", 7)(18, "header")(19, "div", 8)(20, "h2", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ConfirmComponent_Template_a_click_22_listener() {
        return ctx.openModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](23, " Edit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](24, "mat-divider", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](25, "payment-display", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](26, ConfirmComponent_address_display_26_Template, 1, 3, "address-display", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "row-container", 13)(28, "section", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "section", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](31, "currency", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](32, "section", 17)(33, "wizard-ui", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("next", function ConfirmComponent_Template_wizard_ui_next_33_listener($event) {
        return ctx.submit($event);
      })("previous", function ConfirmComponent_Template_wizard_ui_previous_33_listener($event) {
        return ctx.previous($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](35, "PAY");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](36, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](37, "mat-icon", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](38, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](39, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](40, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](14);

      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx.cms.reviewInfoHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx.cms.emailInstructions);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("error-check", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx.parent.emailAddress);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](16, 15, _r1.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx.cms.paymentDetailsHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("billingType", ctx.billingInfo.billingType)("bankDetails", ctx.billingInfo.eft)("creditCard", ctx.billingInfo.credit)("showAccountNumber", true)("showLabels", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.billingInfo.billingType);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("rowType", "emphasis");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx.cms.totalPaymentLabel, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", ctx.totalPayment);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_11__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_12__.FocusDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__.DefaultLayoutDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_13__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__.MatDivider, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_14__.ErrorCheckDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgSwitchCase, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__.DefaultFlexDirective, _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_15__.PaymentDisplayComponent, _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_16__.AddressDisplayComponent, _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_17__.RowContainerComponent, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_18__.CurrencyComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_19__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_20__.WizardNextDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIcon],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.KeyValuePipe],
  styles: ["[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   #totalPaymentLabel[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  color: #34353a;\n  font-weight: 700;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   #totalPaymentValue[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: 'Montserrat';\n  color: #34353a;\n  font-weight: 700;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   .editButton[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: 'Jost';\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0ubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxmb250cy5sZXNzIiwiLi5cXC4uXFxzdHlsZXNcXHRoZW1lXFxtaXhpbnNcXHBhZ2UubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUdRLGdCQUFBO0FBSlI7QUFDQTtFQU9RLFdBQUE7QUFMUjtBQUZBO0VDS0kseUJBQUE7RUN3Q0EsY0FBQTtFRmhDSSxnQkFBQTtFQUNBLGVBQUE7QUFOUjtBQVJBO0VBa0JRLGlCQUFBO0VDYkoseUJBQUE7RUN5QkEsY0FBQTtFRlRJLGdCQUFBO0VBQ0EsZUFBQTtBQVBSO0FBZkE7RUEwQlEsZ0JBQUE7RUN6QkosbUJBQUE7QURrQkoiLCJmaWxlIjoiY29uZmlybS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcblxuICAgIGgyIHtcbiAgICAgICAgbWF4LWhlaWdodDogNzBweDtcbiAgICB9XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG5cbiAgICAjdG90YWxQYXltZW50TGFiZWwge1xuICAgICAgICAudC1ib2R5LS1mb250RmFtaWx5O1xuICAgICAgICAudC1oZWFkZXItLWNvbG9yKEB0aGVtZS1saWdodCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAjdG90YWxQYXltZW50VmFsdWUge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgLnQtYm9keS0tZm9udEZhbWlseTtcbiAgICAgICAgLnQtYm9keS0tY29sb3IoQHRoZW1lLWxpZ2h0KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5lZGl0QnV0dG9uIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgLnQtaGVhZGVyLS1mb250RmFtaWx5O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG4udC1oZWFkZXItLWZvbnRGYW1pbHkoKSB7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LWpvc3Q7XG59XG5cbi50LWJvZHktLWZvbnRGYW1pbHkoKSB7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LW1vbnRzZXJyYXQ7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cblxuQGJvZHktLWJhY2tncm91bmRDb2xvci1saWdodDogQHdoaXRlO1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjItbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AYm9keS0tY29sb3ItbGlnaHQ6IEB0dW5hLWdyYXk7XG5AYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3ItbGlnaHQ6IEB0cm9waWNhbC1yYWluLWZvcmVzdC1ncmVlbjtcbkBib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1saWdodDogQHNpbHZlci1ncmF5O1xuQGhlYWRlci0tY29sb3ItbGlnaHQ6IEB0dW5hLWdyYXk7XG5AbGFiZWwtLWNvbG9yLWxpZ2h0OiBAYm91bGRlci1ncmF5O1xuQHNlbGVjdF9fYXJyb3ctLWNvbG9yLWxpZ2h0OiBAc2NvcnBpb24tZ3JheTtcbkBsaW5rLS1jb2xvci1saWdodDogQGF6dXJlLXJhZGlhbmNlLWJsdWU7XG5AZGl2aWRlci0tYm9yZGVyQ29sb3ItbGlnaHQ6IEBzY2hvb2wtYnVzLXllbGxvdztcblxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IyKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvcjItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjMoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMy1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWhlYWRlci0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnaGVhZGVyLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWxhYmVsLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdsYWJlbC0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1zZWxlY3RfX2Fycm93LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdzZWxlY3RfX2Fycm93LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWxpbmstLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xpbmstLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvciAhaW1wb3J0YW50OyAvLyBtYXJrZWQgYXMgIWltcG9ydGFudCB0byBvdmVycmlkZSBib290c3RyYXBcbn1cblxuLnQtZGl2aWRlci0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnZGl2aWRlci0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtZGl2aWRlcl9fZGFzaC0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 68107:
/*!******************************************************!*\
  !*** ./src/missedatoll/details/details.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsComponent": () => (/* binding */ DetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/ui/containers/fxRow/fxRow.component */ 47553);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _uninvoiced_uninvoiced_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uninvoiced/uninvoiced.component */ 55975);






const _c0 = function (a0) { return { "table-space": a0 }; };
const _c1 = function (a0) { return { "table-space": a0, "lt-md": true }; };
function DetailsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "missed-a-toll-violations-uninvoiced", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const violation_r1 = ctx.$implicit;
    const isFirst_r2 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, !isFirst_r2))("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, !isFirst_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("uninvoiced", violation_r1);
} }
const _c2 = function () { return { "hidden": true }; };
class DetailsComponent {
    constructor() { }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(); };
DetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["missed-a-toll-violations-details"]], inputs: { uninvoices: "uninvoices", arePlatesExpanded: "arePlatesExpanded" }, decls: 13, vars: 7, consts: [[3, "isLabel", "backgroundColorClass"], ["col-start", "", 1, "fx-flex-auto", "fx-layout-row", "fx-layout-align-start-center"], [1, "fx-flex-auto-shrink-more", "limited-flex"], [1, "fx-flex-auto-shrink-more", "limited-flex", 3, "ngClass.lt-md"], [1, "fx-flex-auto-grow-more", "unlimited-flex", 3, "ngClass.lt-md"], ["col-end", "", 1, "fx-flex-none", "fx-layout-row", "fx-layout-align-end-center"], [1, "fx-flex-auto", "limited-flex-end"], [4, "ngFor", "ngForOf"], [3, "ngClass", "ngClass.lt-md"], [3, "uninvoiced"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main")(1, "fx-row", 0)(2, "section", 1)(3, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "VIOLATIONS ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "VIOLATION DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "AGENCY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "section", 5)(10, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "AMOUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DetailsComponent_div_12_Template, 3, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isLabel", true)("backgroundColorClass", "transparent-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.uninvoices);
    } }, directives: [_common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_0__.FxRowComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _uninvoiced_uninvoiced_component__WEBPACK_IMPORTED_MODULE_1__.UninvoicedComponent], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcY29tbW9uXFx1aVxcY29udGFpbmVyc1xcZnhSb3dcXGRldGFpbHMubGVzcyIsImRldGFpbHMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7QUNESjtBREFBO0VBSVEsYUFBQTtFQUNBLGtCQUFBO0FDRFI7QURKQTtFQThFSSxjQUFBO0VBQ0Esc0JBQUE7QUN2RUo7QURSQTtFQW9GSSxjQUFBO0VBQ0Esc0JBQUE7QUN6RUo7QURaQTtFQXlGSSxjQUFBO0VBQ0Esc0JBQUE7QUMxRUo7QURoQkE7RUE4RkksY0FBQTtFQUNBLHNCQUFBO0FDM0VKO0FEcEJBO0VBbUdJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDNUVKO0FEekJBO0VBeUdJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDN0VKO0FEOUJBO0VBK0dJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQzlFSjtBRG5DQTtFQXFISSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUMvRUo7QUR4Q0E7RUEwQ1EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDUjtBRDdDQTtFQWdEUSxXQUFBO0FDQVI7QURoREE7RUFvRFEsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RSO0FEdERBO0VBMkRRLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FENURBO0VBa0VRLGVBQUE7QUNIUjtBREtRO0VBQ0ksZUFBQTtBQ0haIiwiZmlsZSI6ImRldGFpbHMubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuXG5cbiAgICAuZngtZmxleC1hdXRvIHtcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1mbGV4LW5vbmUge1xuICAgICAgICAuZngtZmxleC1ub25lLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZSB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUtbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtZmxleC1hdXRvLWdyb3ctbW9yZSB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1yb3cge1xuICAgICAgICAuZngtbGF5b3V0LXJvdy1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtY29sdW1uIHtcbiAgICAgICAgLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlciB7XG4gICAgICAgIC5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyIHtcbiAgICAgICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmxpbWl0ZWQtZmxleCB7XG4gICAgICAgIG1pbi13aWR0aDogMTcwcHg7XG4gICAgICAgIG1heC13aWR0aDogNTMwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC51bmxpbWl0ZWQtZmxleCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5saW1pdGVkLWZsZXgtZW5kIHtcbiAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxuXG4gICAgLmxhcmdlci1saW1pdGVkLWZsZXgtZW5kIHtcbiAgICAgICAgbWluLXdpZHRoOiAxNDNweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxNDVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG5cbiAgICAudGFibGUtc3BhY2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICAgICAgJi5sdC1tZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBNaXhpbnMgdG8gYXBwZWFzZSBwZXJmb3JtYW5jZVxuLmZ4LWZsZXgtYXV0by1taXhpbigpIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1ub25lLW1peGluKCkge1xuICAgIC8vIGxlc3NoaW50LWRpc2FibGUtbmV4dC1saW5lIHplcm9Vbml0XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZS1taXhpbigpIHtcbiAgICBmbGV4OiAxIDIgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1hdXRvLWdyb3ctbW9yZS1taXhpbigpIHtcbiAgICBmbGV4OiAyIDEgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtbGF5b3V0LXJvdy1taXhpbigpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbjpob3N0IC5meC1mbGV4LWF1dG8ge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbjpob3N0IC5meC1mbGV4LW5vbmUge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbjpob3N0IC5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUge1xuICBmbGV4OiAxIDIgYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbjpob3N0IC5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlIHtcbiAgZmxleDogMiAxIGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG46aG9zdCAuZngtbGF5b3V0LXJvdyB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuZngtbGF5b3V0LWNvbHVtbiB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlciB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLmxpbWl0ZWQtZmxleCB7XG4gIG1pbi13aWR0aDogMTcwcHg7XG4gIG1heC13aWR0aDogNTMwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLnVubGltaXRlZC1mbGV4IHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAubGltaXRlZC1mbGV4LWVuZCB7XG4gIG1pbi13aWR0aDogNzBweDtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuOmhvc3QgLmxhcmdlci1saW1pdGVkLWZsZXgtZW5kIHtcbiAgbWluLXdpZHRoOiAxNDNweDtcbiAgbWF4LXdpZHRoOiAxNDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbjpob3N0IC50YWJsZS1zcGFjZSB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbjpob3N0IC50YWJsZS1zcGFjZS5sdC1tZCB7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 55975:
/*!********************************************************************!*\
  !*** ./src/missedatoll/details/uninvoiced/uninvoiced.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UninvoicedComponent": () => (/* binding */ UninvoicedComponent)
/* harmony export */ });
/* harmony import */ var _uninvoicedDetailsModal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uninvoicedDetailsModal.component */ 21682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/ui/containers/fxRow/fxRow.component */ 47553);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/dateWithTimeZone/dateWithTimeZone.pipe */ 29719);








const _c0 = function () { return { "extended-row": false }; };
class UninvoicedComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    openTollDetailsModal() {
        // TODO: Put into Sitecore
        this.dialogService.openSliderFilled(_uninvoicedDetailsModal_component__WEBPACK_IMPORTED_MODULE_0__.UninvoicedDetailsModalComponent, { uninvoicedDetails: this.uninvoiced }, { title: 'Violation Details' });
    }
}
UninvoicedComponent.ɵfac = function UninvoicedComponent_Factory(t) { return new (t || UninvoicedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_1__.DialogService)); };
UninvoicedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: UninvoicedComponent, selectors: [["missed-a-toll-violations-uninvoiced"]], inputs: { tollDetailsTitle: "tollDetailsTitle", uninvoiced: "uninvoiced" }, decls: 16, vars: 9, consts: [["ngClass", "extended-row", 3, "ngClass.lt-md"], [1, "clickable", 3, "click"], ["col-start", "", 1, "fx-flex-auto", "fx-layout-row", "fx-layout-align-start-center"], [1, "fx-flex-auto-shrink-more", "limited-flex"], [1, "fx-layout-row", "fx-layout-align-start-center", "u--noUnderline"], ["translation-skip", "", 1, "fx-flex-none", "violationId--width"], [1, "fx-flex-none", "glyphicon", "glyphicon-chevron-right"], ["translation-skip", "", "fxShow", "", "fxHide.lt-md", "", 1, "fx-flex-auto-shrink-more", "limited-flex"], ["translation-skip", "", "fxShow", "", "fxHide.lt-md", "", 1, "fx-flex-auto-grow-more", "unlimited-flex"], ["col-end", "", 1, "fx-flex-none", "fx-layout-row", "fx-layout-align-end-center"], [1, "fx-flex-auto", "limited-flex-end"], [3, "value"]], template: function UninvoicedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 0)(1, "fx-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UninvoicedComponent_Template_fx_row_click_1_listener() { return ctx.openTollDetailsModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "section", 2)(3, "div", 3)(4, "a", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "dateWithTimeZone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "section", 9)(14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "currency", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.uninvoiced.violationNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](10, 5, ctx.uninvoiced.violationDate, "date1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.uninvoiced.agencyCode, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.uninvoiced.amountDue);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultClassDirective, _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_2__.FxRowComponent, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultShowHideDirective, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_3__.CurrencyComponent], pipes: [_pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_4__.DateWithTimeZonePipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n[_nghost-%COMP%]   .extended-row[_ngcontent-%COMP%] {\n  margin-left: -20px;\n  margin-right: -20px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n[_nghost-%COMP%]   .extended-row.lt-md[_ngcontent-%COMP%] {\n  margin-left: -14px;\n  margin-right: -14px;\n  padding-left: 14px;\n  padding-right: 14px;\n}\n[_nghost-%COMP%]   .glyphicon.glyphicon-chevron-right[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 100;\n  top: -2px;\n}\n[_nghost-%COMP%]   .violationId--width[_ngcontent-%COMP%] {\n  width: 118px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbW1vblxcdWlcXGNvbnRhaW5lcnNcXGZ4Um93XFxkZXRhaWxzLmxlc3MiLCJ1bmludm9pY2VkLmxlc3MiLCIuLlxcLi5cXC4uXFxzdHlsZXNcXG1peGlucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtBQ0RKO0FEQUE7RUFJUSxhQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREpBO0VBOEVJLGNBQUE7RUFDQSxzQkFBQTtBQ3ZFSjtBRFJBO0VBb0ZJLGNBQUE7RUFDQSxzQkFBQTtBQ3pFSjtBRFpBO0VBeUZJLGNBQUE7RUFDQSxzQkFBQTtBQzFFSjtBRGhCQTtFQThGSSxjQUFBO0VBQ0Esc0JBQUE7QUMzRUo7QURwQkE7RUFtR0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUM1RUo7QUR6QkE7RUF5R0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUM3RUo7QUQ5QkE7RUErR0kscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDOUVKO0FEbkNBO0VBcUhJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQy9FSjtBRHhDQTtFQTBDUSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NSO0FEN0NBO0VBZ0RRLFdBQUE7QUNBUjtBRGhEQTtFQW9EUSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRFI7QUR0REE7RUEyRFEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRlI7QUQ1REE7RUFrRVEsZUFBQTtBQ0hSO0FES1E7RUFDSSxlQUFBO0FDSFo7QUFqRUE7RUNlSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRHFESjtBQW5FUTtFQ2tCSixrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRG9ESjtBQW5FUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFxRVo7QUFsRkE7RUFrQlEsWUFBQTtBQW1FUiIsImZpbGUiOiJ1bmludm9pY2VkLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuXG4gICAgLmZ4LWZsZXgtYXV0byB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtZmxleC1ub25lIHtcbiAgICAgICAgLmZ4LWZsZXgtbm9uZS1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUge1xuICAgICAgICAuZngtZmxleC1hdXRvLXNocmluay1tb3JlLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWZsZXgtYXV0by1ncm93LW1vcmUge1xuICAgICAgICAuZngtZmxleC1hdXRvLWdyb3ctbW9yZS1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtcm93IHtcbiAgICAgICAgLmZ4LWxheW91dC1yb3ctbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LWNvbHVtbiB7XG4gICAgICAgIC5meC1sYXlvdXQtY29sdW1uLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1hbGlnbi1zdGFydC1jZW50ZXIge1xuICAgICAgICAuZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlci1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtYWxpZ24tZW5kLWNlbnRlciB7XG4gICAgICAgIC5meC1sYXlvdXQtYWxpZ24tZW5kLWNlbnRlci1taXhpbigpO1xuICAgIH1cblxuICAgIC5saW1pdGVkLWZsZXgge1xuICAgICAgICBtaW4td2lkdGg6IDE3MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDUzMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAudW5saW1pdGVkLWZsZXgge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAubGltaXRlZC1mbGV4LWVuZCB7XG4gICAgICAgIG1pbi13aWR0aDogNzBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cblxuICAgIC5sYXJnZXItbGltaXRlZC1mbGV4LWVuZCB7XG4gICAgICAgIG1pbi13aWR0aDogMTQzcHg7XG4gICAgICAgIG1heC13aWR0aDogMTQ1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxuXG4gICAgLnRhYmxlLXNwYWNlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuXG4gICAgICAgICYubHQtbWQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gTWl4aW5zIHRvIGFwcGVhc2UgcGVyZm9ybWFuY2Vcbi5meC1mbGV4LWF1dG8tbWl4aW4oKSB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWZsZXgtbm9uZS1taXhpbigpIHtcbiAgICAvLyBsZXNzaGludC1kaXNhYmxlLW5leHQtbGluZSB6ZXJvVW5pdFxuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUtbWl4aW4oKSB7XG4gICAgZmxleDogMSAyIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWZsZXgtYXV0by1ncm93LW1vcmUtbWl4aW4oKSB7XG4gICAgZmxleDogMiAxIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWxheW91dC1yb3ctbWl4aW4oKSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5meC1sYXlvdXQtY29sdW1uLW1peGluKCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlci1taXhpbigpIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5meC1sYXlvdXQtYWxpZ24tZW5kLWNlbnRlci1taXhpbigpIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL21peGlucy5sZXNzJztcbkBpbXBvcnQgJy4uL2RldGFpbHMubGVzcyc7XG5cbjpob3N0IHtcbiAgICAuZXh0ZW5kZWQtcm93IHtcbiAgICAgICAgLmV4dGVuZGVkLXJvdy1taXhpbjtcblxuICAgICAgICAmLmx0LW1kIHtcbiAgICAgICAgICAgIC5leHRlbmRlZC1yb3ctbHQtbWQtbWl4aW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZ2x5cGhpY29uIHtcbiAgICAgICAgJi5nbHlwaGljb24tY2hldnJvbi1yaWdodCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnZpb2xhdGlvbklkLS13aWR0aCB7XG4gICAgICAgIHdpZHRoOiAxMThweDtcbiAgICB9XG59XG4iLCIvLyBERVBSRUNBVEVEIEZJTEUgLSBQbGVhc2UgZGVsZXRlIGFmdGVyIFJlZnJlc2ggZWZmb3J0XG5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJ3ZhcmlhYmxlcy5sZXNzJztcblxuLyogZm9udHMgKi9cbi5hdmVuaXItODUtaGVhdnkge1xuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyIExUIFN0ZCA4NSBIZWF2eSBSZWd1bGFyJztcbn1cblxuXG4vKiBjb2xvcnMgKi9cbi5kYXJrLXB1cnBsZS10ZXh0IHtcbiAgICBjb2xvcjogQHZhbGVudGluby1wdXJwbGU7XG59XG5cblxuLyogcm93IHNwYWNpbmcgKi9cbi5leHRlbmRlZC1yb3ctbWl4aW4oKSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5leHRlbmRlZC1yb3ctbHQtbWQtbWl4aW4oKSB7XG4gICAgbWFyZ2luLWxlZnQ6IC1AcGFnZS1iYXItbWFyZ2luLXN0YXRpYy1sdC1tZDtcbiAgICBtYXJnaW4tcmlnaHQ6IC1AcGFnZS1iYXItbWFyZ2luLXN0YXRpYy1sdC1tZDtcbiAgICBwYWRkaW5nLWxlZnQ6IEBwYWdlLWJhci1tYXJnaW4tc3RhdGljLWx0LW1kO1xuICAgIHBhZGRpbmctcmlnaHQ6IEBwYWdlLWJhci1tYXJnaW4tc3RhdGljLWx0LW1kO1xufVxuIl19 */"] });


/***/ }),

/***/ 98972:
/*!**************************************************!*\
  !*** ./src/missedatoll/frame/frame.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrameComponent": () => (/* binding */ FrameComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var animations_hide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animations/hide */ 33965);
/* harmony import */ var common_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/providers */ 61264);
/* harmony import */ var common_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/utilities */ 56516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ 35682);
/* harmony import */ var _common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ui/title-banner/title-banner.component */ 38018);
/* harmony import */ var _common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ui/wizard/stepper/stepper.component */ 63457);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @uirouter/angular */ 99305);









class FrameComponent {
  constructor(missedATollService, windowRef) {
    this.missedATollService = missedATollService;
    this.windowRef = windowRef;
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

  ngOnDestroy() {
    this.missedATollService.destroyViolationInformation();
  }

  scrollToTop() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isHidden = true;
      yield (0,common_utilities__WEBPACK_IMPORTED_MODULE_3__.wait)(20);

      _this.windowRef.scrollTo(0, 0);

      _this.isHidden = false;
    })();
  }

}

FrameComponent.ɵfac = function FrameComponent_Factory(t) {
  return new (t || FrameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__.MissedATollService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](common_providers__WEBPACK_IMPORTED_MODULE_2__.WindowRef));
};

FrameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: FrameComponent,
  selectors: [["missed-a-toll-frame-component"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.cms.Title, " ");
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

/***/ 96316:
/*!************************************************!*\
  !*** ./src/missedatoll/grid/grid.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridComponent": () => (/* binding */ GridComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_upgrades__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/upgrades */ 41034);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ 56697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frame/frame.component */ 98972);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ 35682);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/services/webStorageService/webStorage.service */ 38898);
/* harmony import */ var _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui/containers/page/pageFilled.component */ 95556);
/* harmony import */ var _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/display/cmsContent/cmsContent.component */ 89707);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_matPaginatorGoto_matPaginatorGoto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/ui/matPaginatorGoto/matPaginatorGoto.component */ 9038);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../details/details.component */ 68107);
/* harmony import */ var _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/containers/row/row.component */ 80001);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 38661);
























function GridComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 28)(1, "mat-paginator-goto", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("page", function GridComponent_div_12_Template_mat_paginator_goto_page_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return ctx_r5.updateViolationsDetailsTable($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("length", ctx_r0.totalRecordsFound)("pageIndex", 0)("pageSize", ctx_r0.defaultPageSize)("hidePageSize", true);
  }
}

function GridComponent_missed_a_toll_violations_details_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "missed-a-toll-violations-details", 30);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("uninvoices", ctx_r1.listOfAllViolations);
  }
}

function GridComponent_missed_a_toll_violations_details_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "missed-a-toll-violations-details", 31);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("uninvoices", ctx_r2.paginatedViolations);
  }
}

function GridComponent_missed_a_toll_violations_details_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "missed-a-toll-violations-details", 32);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("uninvoices", ctx_r3.mobileLoadedViolations);
  }
}

function GridComponent_section_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "section", 33)(1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function GridComponent_section_17_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return ctx_r7.mobileLoadMore();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "Load more");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}

const _c0 = function (a0, a1) {
  return {
    licenseState: a0,
    licensePlate: a1
  };
};

const _c1 = function (a0) {
  return {
    serviceFee: a0
  };
};

class GridComponent {
  constructor(parent, missedATollService, state, uiRouterGlobals, environmentConfig, missedATollApi, webStorageConst, responseErrorService, webStorage) {
    this.parent = parent;
    this.missedATollService = missedATollService;
    this.state = state;
    this.uiRouterGlobals = uiRouterGlobals;
    this.environmentConfig = environmentConfig;
    this.missedATollApi = missedATollApi;
    this.webStorageConst = webStorageConst;
    this.responseErrorService = responseErrorService;
    this.webStorage = webStorage;
    this.defaultPageSize = this.environmentConfig.paginationConfig.missedAToll.PageSize;
    this.paginationLimit = this.environmentConfig.paginationConfig.missedAToll.LimitToStart;
    this.userIneligible = false;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.parent.stepNum = 1;

      _this.parent.scrollToTop();

      let violationInformation = yield _this.missedATollService.getViolationInformation();

      if (!violationInformation) {
        yield _this.retryFindMissedAToll();

        if (_this.userIneligible) {
          yield _this.state.go(_constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Landing);
        } else {
          const refreshedViolationInfo = yield _this.missedATollService.getViolationInformation();

          if (!refreshedViolationInfo) {
            yield _this.state.go(_constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Landing);
          } else {
            violationInformation = refreshedViolationInfo;

            _this.setupGrid(violationInformation);
          }
        }
      } else {
        _this.setupGrid(violationInformation);
      }
    })();
  }

  setupGrid(violationInformation) {
    const formattedViolationData = violationInformation.formattedViolationData;
    this.totalRecordsFound = formattedViolationData.listOfViolations.totalInvoices;
    this.listOfAllViolations = formattedViolationData.listOfViolations.invoices.reduce((prev, curr) => [...prev, ...curr.data], []);
    this.paginatedViolations = this.listOfAllViolations.slice(0, this.defaultPageSize);
    this.mobileLoadedViolations = this.listOfAllViolations.slice(0, this.defaultPageSize);
    this.licenseState = violationInformation.state;
    this.licensePlate = violationInformation.licensePlate;
    this.serviceFee = violationInformation.serviceFee;
    this.totalViolationAmount = formattedViolationData.totalAmountDue;
    this.totalAmount = formattedViolationData.grandTotal;
  }

  updateViolationsDetailsTable(event) {
    const start = event.pageIndex * event.pageSize;
    const end = (event.pageIndex + 1) * event.pageSize;
    this.paginatedViolations = this.listOfAllViolations.slice(start, end);
  }

  mobileLoadMore() {
    const start = this.mobileLoadedViolations.length;
    const end = this.mobileLoadedViolations.length + this.defaultPageSize;
    this.mobileLoadedViolations = this.mobileLoadedViolations.concat(this.listOfAllViolations.slice(start, end));
  }

  onContinue(nextState) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.state.go(nextState, {
        billingInfo: _this2.uiRouterGlobals.params.billingInfo
      });
    })();
  }

  retryFindMissedAToll() {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const violationsDataInfo = _this3.webStorage.getValue(_this3.webStorageConst.violationsLogData);

      const response = yield _this3.missedATollApi.checkMatEligibility({
        violationsData: violationsDataInfo
      });

      if (_this3.responseErrorService.isErrorFree(response)) {
        if (response.isUserEligible) {
          const formattedViolationData = _this3.missedATollService.setViolationDataAndGenerateTotalAmountDue(response.listOfViolations, response.serviceFee);

          const violationInformationDto = {
            lastMatPerformed: response.lastMatPerformed,
            serviceFee: response.serviceFee,
            licensePlate: violationsDataInfo.licensePlate.toUpperCase(),
            state: violationsDataInfo.licenseState,
            formattedViolationData
          };

          _this3.missedATollService.saveViolationInformation(violationInformationDto);
        } else {
          _this3.userIneligible = true;
        }
      } else {
        _this3.responseErrorService.displayAlertsFromResponse(response);
      }
    })();
  }

}

GridComponent.ɵfac = function GridComponent_Factory(t) {
  return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__.MissedATollService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_17__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_17__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](common_upgrades__WEBPACK_IMPORTED_MODULE_1__.ENVIRON_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__.WebApiService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](constants_module__WEBPACK_IMPORTED_MODULE_5__.WebStorageConst), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_7__.WebStorageService));
};

GridComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
  type: GridComponent,
  selectors: [["missed-a-toll-grid-component"]],
  inputs: {
    cmsSection1: "cmsSection1",
    cmsSection2: "cmsSection2"
  },
  decls: 51,
  vars: 26,
  consts: [[1, "u-spacing--widthFill"], [3, "template", "data"], [1, "u-spacing__divider--marginTopBottom"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "u-spacing--widthFill", "u-spacing__sectionToSection--marginTop"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "u-spacing--widthFill"], ["fxFlex", "none"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "auto", "fxLayout", "row", "fxLayoutAlign", "end center", 4, "ngIf"], [1, "u-spacing--widthFill", "u-spacing__gridToRecords--marginTop"], [3, "uninvoices", 4, "ngIf"], ["fxShow", "", "fxHide.lt-md", "", 3, "uninvoices", 4, "ngIf"], ["fxHide", "", "fxShow.lt-md", "", 3, "uninvoices", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center", "fxHide", "", "fxShow.lt-md", "", "class", "u-spacing--widthFill u-spacing__loadMore--margin", 4, "ngIf"], [1, "u-spacing--widthFill", "u-spacing__rowToRow--marginTop"], [3, "rowType"], ["col-start", "", "fxFlex", "grow", 1, "totalAmountLabel"], ["col-end", "", "fxFlex", "none", 1, "totalAmountValue"], [3, "value"], [1, "u-spacing--widthFill", "u-spacing__headerToSection--marginTop"], [3, "isTop"], ["col-start", "", "fxFlex", "grow"], ["col-end", "", "fxFlex", "none"], [3, "isInner"], [3, "isBottom", "rowType"], [1, "u-spacing--widthFill", "u-spacing__buttonToField--marginTop"], [3, "next"], ["wizard-next", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "auto", "fxLayout", "row", "fxLayoutAlign", "end center"], [3, "length", "pageIndex", "pageSize", "hidePageSize", "page"], [3, "uninvoices"], ["fxShow", "", "fxHide.lt-md", "", 3, "uninvoices"], ["fxHide", "", "fxShow.lt-md", "", 3, "uninvoices"], ["fxLayout", "row", "fxLayoutAlign", "center", "fxHide", "", "fxShow.lt-md", "", 1, "u-spacing--widthFill", "u-spacing__loadMore--margin"], [1, "u--noUnderline", 3, "click"]],
  template: function GridComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "page-filled-container")(1, "section", 0)(2, "header")(3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "cms-content", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "mat-divider", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "article");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](7, "cms-content", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "section", 3)(9, "section", 4)(10, "aside", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](12, GridComponent_div_12_Template, 2, 4, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](14, GridComponent_missed_a_toll_violations_details_14_Template, 1, 1, "missed-a-toll-violations-details", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](15, GridComponent_missed_a_toll_violations_details_15_Template, 1, 1, "missed-a-toll-violations-details", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](16, GridComponent_missed_a_toll_violations_details_16_Template, 1, 1, "missed-a-toll-violations-details", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](17, GridComponent_section_17_Template, 3, 0, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "section", 12)(19, "row-container", 13)(20, "section", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21, " Total Amount: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "section", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](23, "currency", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "section", 17)(25, "header")(26, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](28, "mat-divider", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "row-container", 18)(30, "section", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](31, " Total Amount: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "section", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](33, "currency", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "row-container", 21)(35, "section", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](36, " Administrative Fee: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "section", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](38, "currency", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](39, "row-container", 22)(40, "section", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](41, " Total Payment Amount: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](42, "section", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](43, "currency", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](44, "section", 23)(45, "wizard-ui", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("next", function GridComponent_Template_wizard_ui_next_45_listener($event) {
        return ctx.onContinue($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](46, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](47, "CONTINUE");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](48, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](49, "mat-icon", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](50, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("template", ctx.cmsSection1.Title)("data", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction2"](21, _c0, ctx.licenseState, ctx.licensePlate));
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("template", ctx.cmsSection1.ShortDescription)("data", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](24, _c1, ctx.serviceFee));
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"](" ", ctx.totalRecordsFound, " Record", ctx.totalRecordsFound > 1 ? "s" : "", " found ");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.totalRecordsFound >= ctx.paginationLimit);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.totalRecordsFound < ctx.paginationLimit);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.totalRecordsFound >= ctx.paginationLimit);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.totalRecordsFound >= ctx.paginationLimit);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.totalRecordsFound >= ctx.paginationLimit && ctx.mobileLoadedViolations.length < ctx.totalRecordsFound);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("rowType", "emphasis");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx.totalViolationAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx.cmsSection2.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("isTop", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx.totalViolationAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("isInner", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx.serviceFee);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("isBottom", true)("rowType", "emphasis");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx.totalAmount);
    }
  },
  directives: [_common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_8__.PageFilledContainerComponent, _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_9__.CmsContentComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__.DefaultShowHideDirective, _common_ui_matPaginatorGoto_matPaginatorGoto_component__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorGotoComponent, _details_details_component__WEBPACK_IMPORTED_MODULE_11__.DetailsComponent, _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_12__.RowContainerComponent, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_13__.CurrencyComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_14__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_15__.WizardNextDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon],
  styles: ["[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   .totalAmountLabel[_ngcontent-%COMP%] {\n  color: #34353a;\n  font-weight: 700;\n}\n[_nghost-%COMP%]   .totalAmountValue[_ngcontent-%COMP%] {\n  text-align: right;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxwYWdlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFUSxnQkFBQTtBQUhSO0FBQ0E7RUFNUSxXQUFBO0FBSlI7QUFGQTtFQzZDSSxjQUFBO0VEbENJLGdCQUFBO0FBTFI7QUFOQTtFQWVRLGlCQUFBO0VBQ0EsZ0JBQUE7QUFOUiIsImZpbGUiOiJncmlkLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcblxuOmhvc3Qge1xuICAgaDIge1xuICAgICAgICBtYXgtaGVpZ2h0OiA3MHB4O1xuICAgIH1cblxuICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xuICAgIH1cblxuICAgIC50b3RhbEFtb3VudExhYmVsIHtcbiAgICAgICAgLnQtaGVhZGVyLS1jb2xvcihAdGhlbWUtbGlnaHQpO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cblxuICAgIC50b3RhbEFtb3VudFZhbHVlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3ItbGlnaHQ6IEB3aGl0ZTtcbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3IyLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMy1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWNvbG9yLWxpZ2h0OiBAdHVuYS1ncmF5O1xuQGJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLWxpZ2h0OiBAdHJvcGljYWwtcmFpbi1mb3Jlc3QtZ3JlZW47XG5AYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItbGlnaHQ6IEBzaWx2ZXItZ3JheTtcbkBoZWFkZXItLWNvbG9yLWxpZ2h0OiBAdHVuYS1ncmF5O1xuQGxhYmVsLS1jb2xvci1saWdodDogQGJvdWxkZXItZ3JheTtcbkBzZWxlY3RfX2Fycm93LS1jb2xvci1saWdodDogQHNjb3JwaW9uLWdyYXk7XG5AbGluay0tY29sb3ItbGlnaHQ6IEBhenVyZS1yYWRpYW5jZS1ibHVlO1xuQGRpdmlkZXItLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2Nob29sLWJ1cy15ZWxsb3c7XG5cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvci1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IyLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IzKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvcjMtQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1oZWFkZXItLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2hlYWRlci0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1sYWJlbC0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGFiZWwtLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtc2VsZWN0X19hcnJvdy0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnc2VsZWN0X19hcnJvdy0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1saW5rLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdsaW5rLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3IgIWltcG9ydGFudDsgLy8gbWFya2VkIGFzICFpbXBvcnRhbnQgdG8gb3ZlcnJpZGUgYm9vdHN0cmFwXG59XG5cbi50LWRpdmlkZXItLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2RpdmlkZXItLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWRpdmlkZXJfX2Rhc2gtLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG4iXX0= */"]
});

/***/ }),

/***/ 65871:
/*!******************************************************!*\
  !*** ./src/missedatoll/landing/landing.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frame/frame.component */ 98972);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ 35682);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var cms_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cms/services */ 46693);
/* harmony import */ var _common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/services/webStorageService/webStorage.service */ 38898);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ui/containers/page/pageFilled.component */ 95556);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 73067);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../storefront/utility/utility.component */ 10061);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pipes/safeHtml.pipe */ 49985);

























function LandingComponent_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const state_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", state_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](state_r8.stateCode);
  }
}

function LandingComponent_aside_22_ng_container_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Please enter a valid license plate number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function LandingComponent_aside_22_ng_container_1_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Please enter a valid license plate number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function LandingComponent_aside_22_ng_container_1_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Please enter a valid license plate number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function LandingComponent_aside_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, LandingComponent_aside_22_ng_container_1_p_1_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, LandingComponent_aside_22_ng_container_1_p_2_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, LandingComponent_aside_22_ng_container_1_p_3_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitch", error_r9.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", "pattern");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", "maxlength");
  }
}

function LandingComponent_aside_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "aside");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, LandingComponent_aside_22_ng_container_1_Template, 4, 4, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](10);

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _r0.submitted);
  }
}

function LandingComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function LandingComponent_figure_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "figure", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", ctx_r6.cmsImage1.image, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("alt", ctx_r6.cmsImage1.alt)("height", ctx_r6.cmsImage1.height)("width", ctx_r6.cmsImage1.width);
  }
}

function LandingComponent_figure_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "figure", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", ctx_r7.cmsImage2.image, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("alt", ctx_r7.cmsImage2.alt)("height", ctx_r7.cmsImage2.height)("width", ctx_r7.cmsImage2.width);
  }
}

class LandingComponent {
  //@host decorator was removed for parent due to issue with Ivy. see https://github.com/angular/angular/issues/31539
  constructor(parent, missedATollApi, responseErrorService, missedATollService, state, cmsUtilService, webStorage, webStorageConst) {
    this.parent = parent;
    this.missedATollApi = missedATollApi;
    this.responseErrorService = responseErrorService;
    this.missedATollService = missedATollService;
    this.state = state;
    this.cmsUtilService = cmsUtilService;
    this.webStorage = webStorage;
    this.webStorageConst = webStorageConst;
    this.cmsSection1 = {};
    this.cmsSection2 = {};
    this.states = {
      stateList: []
    };
    this.violations = {
      selectedState: {
        stateCode: ''
      }
    };
  }

  ngOnInit() {
    var _a;

    this.parent.stepNum = 0;
    this.parent.scrollToTop();
    this.parent.emailAddress = null;
    this.missedATollService.destroyViolationInformation();
    this.states.stateList = this.parent.stateList;
    this.violations.selectedState = (_a = this.parent.stateList) === null || _a === void 0 ? void 0 : _a.find(x => x.stateCode === 'TX');
    this.cmsImage1 = this.cmsUtilService.parseAllImageAttributes(this.cmsSection1.Image) || {};
    this.cmsImage2 = this.cmsUtilService.parseAllImageAttributes(this.cmsSection2.Image) || {};
  }

  submit(nextState) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userInfo = {
        violationsData: {
          licenseState: _this.violations.selectedState.stateCode,
          licensePlate: _this.licensePlateNumber.toUpperCase()
        }
      };
      const response = yield _this.missedATollApi.checkMatEligibility(userInfo);

      if (_this.responseErrorService.isErrorFree(response)) {
        // Set violations data in webStorage after result
        _this.webStorage.setKeyValue(_this.webStorageConst.violationsLogData, userInfo.violationsData);

        if (response.isUserEligible) {
          yield _this.missedATollService.processSuccessSearch(response, userInfo.violationsData.licensePlate, userInfo.violationsData.licenseState, nextState);
        }
      } else {
        _this.responseErrorService.displayAlertsFromResponse(response);
      }
    })();
  }

}

LandingComponent.ɵfac = function LandingComponent_Factory(t) {
  return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_1__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__.WebApiService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__.MissedATollService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_15__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_4__.CmsUtilService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_5__.WebStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](constants_module__WEBPACK_IMPORTED_MODULE_6__.WebStorageConst));
};

LandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: LandingComponent,
  selectors: [["missed-a-toll-landing-component"]],
  inputs: {
    cmsSection1: "cmsSection1",
    cmsSection2: "cmsSection2"
  },
  decls: 41,
  vars: 18,
  consts: [[1, "u-spacing__firstHeaderToTitle--marginTop"], [1, "u-spacing__divider--marginTopBottom"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "40px"], ["fxLayout", "column"], [3, "innerHTML"], ["validation-focus", "", "novalidate", "", "fxLayout", "column start", 1, "u-spacing__fieldToSection--marginTop"], ["LandingForm", "ngForm"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "20px"], ["fxFlex", "none"], ["translation-skip", "", 3, "value", "disableOptionCentering", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "auto", "fxFlex.lt-md", "calc(100% - 587px)", "ngClass.gt-sm", "plate-input-width", 3, "error-check"], ["type", "text", "name", "licensePlate", "required", "", "id", "licensePlate", "tabindex", "2", "pattern", "^[a-zA-Z0-9]{1,10}$", "maxlength", "10", 3, "ngModel", "ngModelChange"], ["licensePlateInput", "ngModel"], [4, "ngFor", "ngForOf"], [1, "u-spacing__buttonToField--marginTop"], ["storefront", ""], [3, "reverseOrder", "next"], ["wizard-next", ""], ["wizard-cancel", "", 4, "ngIf"], ["fxShow", "", "fxHide.lt-md", "", "class", "figure-negative-margin-top", 4, "ngIf"], [1, "u-spacing__headerToSection--marginTop"], ["fxShow", "", "fxHide.lt-md", "", 4, "ngIf"], [3, "value"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], ["class", "help-block", 4, "ngSwitchCase"], [1, "help-block"], ["wizard-cancel", ""], ["fxShow", "", "fxHide.lt-md", "", 1, "figure-negative-margin-top"], [3, "src"], ["fxShow", "", "fxHide.lt-md", ""]],
  template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "page-filled-container")(1, "section", 0)(2, "header")(3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "mat-divider", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 2)(7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "form", 5, 6)(11, "div", 7)(12, "div", 8)(13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "STATE");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "mat-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("valueChange", function LandingComponent_Template_mat_select_valueChange_15_listener($event) {
        return ctx.violations.selectedState = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, LandingComponent_mat_option_16_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 11)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, "LICENSE PLATE NUMBER");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "input", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function LandingComponent_Template_input_ngModelChange_20_listener($event) {
        return ctx.licensePlateNumber = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, LandingComponent_aside_22_Template, 2, 1, "aside", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](23, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](25, "storefront-utility", null, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "wizard-ui", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("next", function LandingComponent_Template_wizard_ui_next_27_listener($event) {
        return ctx.submit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29, "SUBMIT");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](30, LandingComponent_span_30_Template, 2, 0, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, LandingComponent_figure_31_Template, 2, 4, "figure", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "section", 21)(33, "header")(34, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](36, "mat-divider", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](38, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](39, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](40, LandingComponent_figure_40_Template, 2, 4, "figure", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](21);

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](26);

      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.cmsSection1.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", ctx.cmsSection1.ShortDescription, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx.violations.selectedState)("disableOptionCentering", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.states.stateList);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("error-check", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.licensePlateNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](23, 14, _r2.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("reverseOrder", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _r4.isKioskView);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.cmsImage1.image);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.cmsSection2.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](39, 16, ctx.cmsSection2.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.cmsImage2.image);
    }
  },
  directives: [_common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_7__.PageFilledContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutGapDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_8__.FocusDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOption, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__.DefaultClassDirective, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_9__.ErrorCheckDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgSwitchCase, _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_10__.StorefrontUtilityComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_12__.WizardNextDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__.DefaultShowHideDirective],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.KeyValuePipe, _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_13__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\n[_nghost-%COMP%]   .figure-negative-margin-top[_ngcontent-%COMP%] {\n  margin-top: -24px;\n}\n[_nghost-%COMP%]   mat-select[_ngcontent-%COMP%] {\n  width: 100px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   .plate-input-width[_ngcontent-%COMP%] {\n  max-width: 370px;\n  min-width: 225px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdRLGdCQUFBO0FBSFI7QUFBQTtFQU9RLGlCQUFBO0FBSlI7QUFIQTtFQWNRLFlBQUE7QUFSUjtBQU5BO0VBa0JRLFdBQUE7QUFUUjtBQVRBO0VBeUJRLGdCQUFBO0VBQ0EsZ0JBQUE7QUFiUiIsImZpbGUiOiJsYW5kaW5nLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG5cbiAgICBoMiB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XG4gICAgfVxuXG4gICAgLmZpZ3VyZS1uZWdhdGl2ZS1tYXJnaW4tdG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTI0cHg7XG4gICAgfVxuXG5cbiAgICBAc2VsZWN0LXN0YXRlLXdpZHRoOiAxMDBweDtcblxuICAgIG1hdC1zZWxlY3Qge1xuICAgICAgICB3aWR0aDogQHNlbGVjdC1zdGF0ZS13aWR0aDtcbiAgICB9XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG5cblxuICAgIEBpbnB1dC1tYXgtd2lkdGg6IDM3MHB4O1xuXG4gICAgLnBsYXRlLWlucHV0LXdpZHRoIHtcbiAgICAgICAgbWF4LXdpZHRoOiBAaW5wdXQtbWF4LXdpZHRoO1xuICAgICAgICBtaW4td2lkdGg6IDIyNXB4O1xuICAgIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 6314:
/*!***********************************!*\
  !*** ./src/missedatoll/module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MissedATollModule": () => (/* binding */ MissedATollModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout */ 45046);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var cms_cms_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cms/cms.module */ 92985);
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pipes/module */ 20445);
/* harmony import */ var validation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! validation/module */ 26186);
/* harmony import */ var hybrid_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hybrid/module */ 98730);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./frame/frame.component */ 98972);
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/landing.component */ 65871);
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grid/grid.component */ 96316);
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./billing/billing.component */ 6362);
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./confirm/confirm.component */ 36247);
/* harmony import */ var _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./receipt/receipt.component */ 23421);
/* harmony import */ var _receipt_receiptModal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./receipt/receiptModal.component */ 72472);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants */ 56697);
/* harmony import */ var frp3_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! frp3/constants */ 39387);
/* harmony import */ var storefront_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! storefront/module */ 89550);
/* harmony import */ var app_routing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/routing */ 59389);
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routing */ 37906);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _details_uninvoiced_uninvoiced_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./details/uninvoiced/uninvoiced.component */ 55975);
/* harmony import */ var _details_uninvoiced_uninvoicedDetailsModal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./details/uninvoiced/uninvoicedDetailsModal.component */ 21682);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./details/details.component */ 68107);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @uirouter/angular */ 99305);












//missed a toll components

















const routesWithComponents = _routing__WEBPACK_IMPORTED_MODULE_16__.routes.map(route => {
    const componentDictionary = {
        [_constants__WEBPACK_IMPORTED_MODULE_12__.stateNames.Root]: _frame_frame_component__WEBPACK_IMPORTED_MODULE_5__.FrameComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_12__.stateNames.Landing]: _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__.LandingComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_12__.stateNames.Grid]: _grid_grid_component__WEBPACK_IMPORTED_MODULE_7__.GridComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_12__.stateNames.Billing]: _billing_billing_component__WEBPACK_IMPORTED_MODULE_8__.BillingComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_12__.stateNames.Confirm]: _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__.ConfirmComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_12__.stateNames.Receipt]: _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_10__.ReceiptComponent
    };
    return {
        ...route,
        component: componentDictionary[route.name]
    };
});
class MissedATollModule {
}
MissedATollModule.ɵfac = function MissedATollModule_Factory(t) { return new (t || MissedATollModule)(); };
MissedATollModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: MissedATollModule });
MissedATollModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
            (0,app_routing__WEBPACK_IMPORTED_MODULE_15__.DynamicRoutes)([common_module__WEBPACK_IMPORTED_MODULE_1__.ENVIRON_CONFIG], (environConfig) => environConfig.isMergeMATandVioOn
                ? [{ name: _constants__WEBPACK_IMPORTED_MODULE_12__.stateNames.Root, url: _constants__WEBPACK_IMPORTED_MODULE_12__.urlPaths.Future, redirectTo: frp3_constants__WEBPACK_IMPORTED_MODULE_13__.stateNames.Landing }]
                : routesWithComponents),
            common_module__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
            pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
            hybrid_module__WEBPACK_IMPORTED_MODULE_4__.HybridModule,
            validation_module__WEBPACK_IMPORTED_MODULE_3__.ValidationModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__.FlexLayoutModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule,
            storefront_module__WEBPACK_IMPORTED_MODULE_14__.StorefrontModule,
            cms_cms_module__WEBPACK_IMPORTED_MODULE_0__.CmsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](MissedATollModule, { declarations: [_frame_frame_component__WEBPACK_IMPORTED_MODULE_5__.FrameComponent,
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__.LandingComponent,
        _grid_grid_component__WEBPACK_IMPORTED_MODULE_7__.GridComponent,
        _billing_billing_component__WEBPACK_IMPORTED_MODULE_8__.BillingComponent,
        _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__.ConfirmComponent,
        _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_10__.ReceiptComponent,
        _receipt_receiptModal_component__WEBPACK_IMPORTED_MODULE_11__.ReceiptModalComponent, _details_uninvoiced_uninvoiced_component__WEBPACK_IMPORTED_MODULE_17__.UninvoicedComponent, _details_uninvoiced_uninvoicedDetailsModal_component__WEBPACK_IMPORTED_MODULE_18__.UninvoicedDetailsModalComponent, _details_details_component__WEBPACK_IMPORTED_MODULE_19__.DetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _uirouter_angular__WEBPACK_IMPORTED_MODULE_28__.UIRouterModule, common_module__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
        hybrid_module__WEBPACK_IMPORTED_MODULE_4__.HybridModule,
        validation_module__WEBPACK_IMPORTED_MODULE_3__.ValidationModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__.FlexLayoutModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule,
        storefront_module__WEBPACK_IMPORTED_MODULE_14__.StorefrontModule,
        cms_cms_module__WEBPACK_IMPORTED_MODULE_0__.CmsModule] }); })();


/***/ }),

/***/ 23421:
/*!******************************************************!*\
  !*** ./src/missedatoll/receipt/receipt.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptComponent": () => (/* binding */ ReceiptComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _receiptModal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receiptModal.component */ 72472);
/* harmony import */ var accountDashboard_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! accountDashboard/constants */ 75888);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ 7370);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var violations_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! violations/constants */ 27520);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ 56697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../frame/frame.component */ 98972);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services */ 35682);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ 51111);
/* harmony import */ var _storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../storefront/services/storefrontUtility.service */ 18011);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../storefront/utility/utility.component */ 10061);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_print_link_print_link_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/print-link/print-link.component */ 33402);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/containers/row/row.component */ 80001);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/ui/display/cmsContent/cmsContent.component */ 89707);
/* harmony import */ var _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/ui/display/payment/paymentDisplay.component */ 38321);
/* harmony import */ var _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/ui/display/address/addressDisplay.component */ 23204);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/ui/modals/actionButtons/actionButtons.component */ 65380);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);






























function ReceiptComponent_section_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "section", 14)(1, "header")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "mat-divider", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "section", 20)(8, "action-buttons", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("main", function ReceiptComponent_section_27_Template_action_buttons_main_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return ctx_r4.payInvoiceClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10, "PAY FOR AN INVOICE");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.gotInvoice.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHtml", ctx_r1.gotInvoice.LongDescription, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("reverseOrder", true)("alignment", "start center");
  }
}

function ReceiptComponent_section_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "section", 14)(1, "header")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "mat-divider", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "section", 20)(9, "action-buttons", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("main", function ReceiptComponent_section_28_Template_action_buttons_main_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return ctx_r6.acctOverviewClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11, "ACCOUNT OVERVIEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r2.importantInfo.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHtml", ctx_r2.importantInfo.LongDescription, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("reverseOrder", true)("alignment", "start center");
  }
}

function ReceiptComponent_section_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "section")(1, "wizard-ui", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("next", function ReceiptComponent_section_29_Template_wizard_ui_next_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return ctx_r8.nextTask($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "PROCEED");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
}

class ReceiptComponent {
  constructor(parent, state, uiRouterGlobals, missedATollService, //private readonly printHook: PrintHook,
  matDialog, storefrontUtilityService, location) {
    this.parent = parent;
    this.state = state;
    this.uiRouterGlobals = uiRouterGlobals;
    this.missedATollService = missedATollService;
    this.matDialog = matDialog;
    this.storefrontUtilityService = storefrontUtilityService;
    this.location = location;
    this.BillingType = common_models__WEBPACK_IMPORTED_MODULE_3__.BillingType;
    this.longDescriptionParams = {}; //TODO there is an issue with Angular Material and printing.
    //Print button and code below may need to be included to resolve.
    //
    //const printHookAny = this.printHook as any;
    //const orig = printHookAny.collectActivations;
    //printHookAny.collectActivations = (event) => {
    //    if (!printHookAny.isPrintingBeforeAfterEvent) {
    //        orig.bind(printHookAny, event)();
    //    }
    //}
  }

  get dateNow() {
    return new Date();
  }

  ngOnInit() {
    this.parent.stepNum = 4;
    this.billingInfo = this.uiRouterGlobals.params.billingInfo || {};
    return this.billingInfo && this.billingInfo.billingType && !(0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(this.billingInfo) ? this.setupPage() : this.state.go(_constants__WEBPACK_IMPORTED_MODULE_6__.stateNames.Landing);
  }

  setupPage() {
    this.parent.scrollToTop();
    const violationInformation = this.missedATollService.getViolationInformation();
    const formattedViolationData = violationInformation.formattedViolationData;
    this.totalPayment = formattedViolationData.grandTotal;
    this.longDescriptionParams = {
      current_date: this.dateNow,
      total_payment: formattedViolationData.grandTotal
    };

    if (!this.storefrontUtilityService.isRunningAsKiosk) {
      this.showReceiptModal();
    }

    this.missedATollService.destroyViolationInformation();
  }

  payInvoiceClick() {
    this.state.go(violations_constants__WEBPACK_IMPORTED_MODULE_5__.stateNames.Landing);
  }

  acctOverviewClick() {
    /*
     * This needed to be changed to use location due to authenticateRedirectService
     * redirecting to MAT landing after login instead of Account Overview
     */
    this.location.go(accountDashboard_constants__WEBPACK_IMPORTED_MODULE_2__.urlPaths.Frame);
  } //TODO refactor to matDialogService and coordinate with Nathan


  showReceiptModal() {
    const receiptModalCmsContent = this.gotInvoice;
    const closeImageCmsContent = this.closeImage;
    const settings = {
      data: {
        cmsContent: receiptModalCmsContent,
        closeImage: closeImageCmsContent
      }
    };
    this.matDialog.open(_receiptModal_component__WEBPACK_IMPORTED_MODULE_1__.ReceiptModalComponent, settings);
  }

  nextTask(nextState) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.state.go(nextState);
    })();
  }

}

ReceiptComponent.ɵfac = function ReceiptComponent_Factory(t) {
  return new (t || ReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_7__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_23__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_23__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__.MissedATollService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_9__.StorefrontUtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_25__.Location));
};

ReceiptComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({
  type: ReceiptComponent,
  selectors: [["receipt-component"]],
  inputs: {
    thankYou: "thankYou",
    billing: "billing",
    gotInvoice: "gotInvoice",
    importantInfo: "importantInfo",
    closeImage: "closeImage"
  },
  decls: 30,
  vars: 15,
  consts: [["storefront", ""], ["fxLayout", "column"], [1, "u-spacing__firstHeaderToTitle--marginTop"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayout.lt-md", "column", "fxLayoutAlign.lt-md", "start start"], ["fxFlex", "grow", "fxFlexOrder", "1", "fxFlexOrder.lt-md", "2"], ["fxFlex", "none", "fxFlexOrder", "2", "fxFlexOrder.lt-md", "1", "ngClass.lt-md", "printContainer-extra-bottom-space"], ["id", "printButton"], [1, "u-spacing__divider--marginTopBottom"], [3, "rowType"], ["col-start", "", "id", "totalPaymentLabel", "fxFlex", "grow"], ["col-end", "", "id", "totalPaymentValue", "fxFlex", "none"], [3, "value"], [1, "u-spacing__sectionToRow--marginTop"], [3, "template", "data"], ["fxLayout", "column", 1, "u-spacing__headerToSection--marginTop"], [3, "billingType", "bankDetails", "creditCard", "showAccountNumber"], [1, "u-spacing__addressToPaymentDisplay--marginTop", 3, "address", "international"], ["fxLayout", "column", "class", "u-spacing__headerToSection--marginTop", 4, "ngIf"], [4, "ngIf"], [3, "innerHtml"], [1, "u-spacing__buttonToField--marginTop"], [3, "reverseOrder", "alignment", "main"], ["action-main", ""], [3, "next"], ["wizard-next", ""]],
  template: function ReceiptComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "page-centered-container");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "storefront-utility", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 1)(4, "card-container", 2)(5, "section", 1)(6, "header")(7, "div", 3)(8, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](11, "print-link", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](12, "mat-divider", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "row-container", 8)(14, "article", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](15, " Total Payment: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "article", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](17, "currency", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](18, "section", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](19, "cms-content", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](20, "section", 14)(21, "header")(22, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](24, "mat-divider", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](25, "payment-display", 15)(26, "address-display", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](27, ReceiptComponent_section_27_Template, 11, 4, "section", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](28, ReceiptComponent_section_28_Template, 12, 4, "section", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](29, ReceiptComponent_section_29_Template, 4, 0, "section", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx.thankYou.Title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("rowType", "emphasis");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", ctx.totalPayment);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("template", ctx.thankYou.LongDescription)("data", ctx.longDescriptionParams);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx.billing.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("billingType", ctx.billingInfo.billingType)("bankDetails", ctx.billingInfo.eft)("creditCard", ctx.billingInfo.credit)("showAccountNumber", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("address", ctx.billingInfo.billingType === ctx.BillingType.Credit ? ctx.billingInfo.credit : ctx.billingInfo.eft)("international", ctx.billingInfo.billingType === ctx.BillingType.Credit ? ctx.billingInfo.credit.international : ctx.billingInfo.eft.international);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !_r0.isKioskView);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !_r0.isKioskView);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", _r0.isKioskView);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_10__.PageCenteredContainerComponent, _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_11__.StorefrontUtilityComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__.DefaultLayoutDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_12__.CardContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__.DefaultFlexOrderDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__.DefaultClassDirective, _common_ui_print_link_print_link_component__WEBPACK_IMPORTED_MODULE_13__.PrintLinkComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDivider, _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_14__.RowContainerComponent, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_15__.CurrencyComponent, _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_16__.CmsContentComponent, _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_17__.PaymentDisplayComponent, _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_18__.AddressDisplayComponent, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_19__.ActionButtonsComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_20__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_21__.WizardNextDirective],
  styles: ["[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   #totalPaymentLabel[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n  color: #34353a;\n}\n[_nghost-%COMP%]   #totalPaymentValue[_ngcontent-%COMP%] {\n  text-align: right;\n  font-weight: 700;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   .printContainer-extra-bottom-space[_ngcontent-%COMP%] {\n  margin-left: 26px;\n  margin-bottom: 25px;\n}\n[_nghost-%COMP%]   .custom-spacing-addressToDisplay[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VpcHQubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxwYWdlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFHUSxnQkFBQTtBQUpSO0FBQ0E7RUFPUSxXQUFBO0FBTFI7QUFGQTtFQVdRLGdCQUFBO0VBQ0EsZUFBQTtFQ2lDSixjQUFBO0FEdENKO0FBUEE7RUFpQlEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFQUjtBQVpBO0VBdUJRLGlCQUFBO0VBQ0EsbUJBQUE7QUFSUjtBQWhCQTtFQTRCUSxnQkFBQTtBQVRSIiwiZmlsZSI6InJlY2VpcHQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG5cbiAgICBoMiB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XG4gICAgfVxuXG4gICAgbWF0LWRpdmlkZXIge1xuICAgICAgICB3aWR0aDogQHdpZHRoLWRpdmlkZXI7XG4gICAgfVxuXG4gICAgI3RvdGFsUGF5bWVudExhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAudC1oZWFkZXItLWNvbG9yKEB0aGVtZS1saWdodCk7XG4gICAgfVxuXG4gICAgI3RvdGFsUGF5bWVudFZhbHVlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAucHJpbnRDb250YWluZXItZXh0cmEtYm90dG9tLXNwYWNlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgfVxuXG4gICAgLmN1c3RvbS1zcGFjaW5nLWFkZHJlc3NUb0Rpc3BsYXkge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG5AYm9keS0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAd2hpdGU7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMi1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjMtbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1saWdodDogQHRyb3BpY2FsLXJhaW4tZm9yZXN0LWdyZWVuO1xuQGJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2lsdmVyLWdyYXk7XG5AaGVhZGVyLS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBsYWJlbC0tY29sb3ItbGlnaHQ6IEBib3VsZGVyLWdyYXk7XG5Ac2VsZWN0X19hcnJvdy0tY29sb3ItbGlnaHQ6IEBzY29ycGlvbi1ncmF5O1xuQGxpbmstLWNvbG9yLWxpZ2h0OiBAYXp1cmUtcmFkaWFuY2UtYmx1ZTtcbkBkaXZpZGVyLS1ib3JkZXJDb2xvci1saWdodDogQHNjaG9vbC1idXMteWVsbG93O1xuXG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjIoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMi1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMyhAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtaGVhZGVyLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdoZWFkZXItLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGFiZWwtLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xhYmVsLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXNlbGVjdF9fYXJyb3ctLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3NlbGVjdF9fYXJyb3ctLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGluay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGluay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yICFpbXBvcnRhbnQ7IC8vIG1hcmtlZCBhcyAhaW1wb3J0YW50IHRvIG92ZXJyaWRlIGJvb3RzdHJhcFxufVxuXG4udC1kaXZpZGVyLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdkaXZpZGVyLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1kaXZpZGVyX19kYXNoLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuIl19 */"]
});

/***/ }),

/***/ 72472:
/*!***********************************************************!*\
  !*** ./src/missedatoll/receipt/receiptModal.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptModalComponent": () => (/* binding */ ReceiptModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 51111);
/* harmony import */ var violations_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! violations/constants */ 27520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var cms_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cms/services */ 46693);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 68074);










const _c0 = function () { return { "width": "100%", "padding-top": "45px" }; };
const _c1 = function () { return { "max-width": "635px", "padding-top": "32px" }; };
const _c2 = function () { return { "width": "100%" }; };
const _c3 = function () { return { "max-width": "635px" }; };
const _c4 = function () { return { "width": "auto" }; };
class ReceiptModalComponent {
    constructor(dialogRef, injectedData, state, cmsUtilService) {
        this.dialogRef = dialogRef;
        this.injectedData = injectedData;
        this.state = state;
        this.cmsUtilService = cmsUtilService;
    }
    ngOnInit() {
        this.cmsContent = this.injectedData.cmsContent;
        this.cmsImage = this.cmsUtilService.parseAllImageAttributes(this.injectedData.closeImage.Image);
    }
    payInvoiceClick() {
        this.state.go(violations_constants__WEBPACK_IMPORTED_MODULE_0__.stateNames.Landing);
        this.dialogRef.close();
    }
    close() {
        this.dialogRef.close();
    }
}
ReceiptModalComponent.ɵfac = function ReceiptModalComponent_Factory(t) { return new (t || ReceiptModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_4__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_1__.CmsUtilService)); };
ReceiptModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReceiptModalComponent, selectors: [["receipt-modal-component"]], decls: 15, vars: 14, consts: [["id", "modal-popup", 1, "refresh-2020", 2, "position", "relative"], ["fxLayout", "column", 1, "mat-receipt-modal", 2, "padding-top", "32px", 3, "ngStyle.lt-md", "ngStyle"], ["fxLayout", "column", "fxLayoutAlign", "center center", 2, "width", "100%", "max-width", "635px", "text-align", "center"], ["fxLayout", "column", "fxLayoutAlign", "center center", 3, "ngStyle.lt-md", "ngStyle"], ["fxLayout", "row", "fxLayoutAlign", "center center", 2, "padding-top", "20.5px", "text-align", "center"], [3, "innerHtml"], ["fxLayout", "row", "fxLayoutAlign", "center center", 2, "padding-top", "33px"], ["id", "payInvoiceBtn", "type", "button", 3, "ngStyle.lt-md", "ngStyle", "click"], ["id", "ViewReceipt", "fxFlexAlign", "center", "aria-label", "Close", 3, "click"]], template: function ReceiptModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "header", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6)(10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReceiptModalComponent_Template_button_click_10_listener() { return ctx.payInvoiceClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " PAY FOR AN INVOICE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6)(13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReceiptModalComponent_Template_a_click_13_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " View My Receipt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c2))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.cmsContent.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.cmsContent.LongDescription, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c2))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c4));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultStyleDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexAlignDirective], styles: ["[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0px 0px;\n  max-height: 70px;\n  padding-bottom: 24px;\n}\n[_nghost-%COMP%]   .mat-receipt-modal[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   #ViewReceipt[_ngcontent-%COMP%] {\n  color: #34353a;\n  font-family: 'Jost';\n  font-size: 16px;\n  font-weight: 500;\n}\n[_nghost-%COMP%]   #closeModal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VpcHRNb2RhbC5sZXNzIiwiLi5cXC4uXFxzdHlsZXNcXHRoZW1lXFxtaXhpbnNcXHBhZ2UubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxmb250cy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBR1EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFKUjtBQURBO0VBU1EsYUFBQTtBQUxSO0FBSkE7RUFhUSxXQUFBO0FBTlI7QUFQQTtFQzZDSSxjQUFBO0VDNUNBLG1CQUFBO0VGa0JJLGVBQUE7RUFDQSxnQkFBQTtBQVBSO0FBYkE7RUF3QlEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQVJSIiwiZmlsZSI6InJlY2VpcHRNb2RhbC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcblxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA3MHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICB9XG5cbiAgICAubWF0LXJlY2VpcHQtbW9kYWwge1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgIH1cblxuICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xuICAgIH1cblxuICAgICNWaWV3UmVjZWlwdCB7XG4gICAgICAgIC50LWhlYWRlci0tY29sb3IoQHRoZW1lLWxpZ2h0KTtcbiAgICAgICAgLnQtaGVhZGVyLS1mb250RmFtaWx5O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgI2Nsb3NlTW9kYWwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogOHB4O1xuICAgICAgICByaWdodDogOHB4O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG5AYm9keS0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAd2hpdGU7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMi1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjMtbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1saWdodDogQHRyb3BpY2FsLXJhaW4tZm9yZXN0LWdyZWVuO1xuQGJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2lsdmVyLWdyYXk7XG5AaGVhZGVyLS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBsYWJlbC0tY29sb3ItbGlnaHQ6IEBib3VsZGVyLWdyYXk7XG5Ac2VsZWN0X19hcnJvdy0tY29sb3ItbGlnaHQ6IEBzY29ycGlvbi1ncmF5O1xuQGxpbmstLWNvbG9yLWxpZ2h0OiBAYXp1cmUtcmFkaWFuY2UtYmx1ZTtcbkBkaXZpZGVyLS1ib3JkZXJDb2xvci1saWdodDogQHNjaG9vbC1idXMteWVsbG93O1xuXG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjIoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMi1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMyhAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtaGVhZGVyLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdoZWFkZXItLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGFiZWwtLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xhYmVsLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXNlbGVjdF9fYXJyb3ctLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3NlbGVjdF9fYXJyb3ctLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGluay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGluay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yICFpbXBvcnRhbnQ7IC8vIG1hcmtlZCBhcyAhaW1wb3J0YW50IHRvIG92ZXJyaWRlIGJvb3RzdHJhcFxufVxuXG4udC1kaXZpZGVyLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdkaXZpZGVyLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1kaXZpZGVyX19kYXNoLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbi50LWhlYWRlci0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtam9zdDtcbn1cblxuLnQtYm9keS0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbn1cbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=314.56dde20e89ebc7b0.js.map