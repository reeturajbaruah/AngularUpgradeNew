"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[523],{

/***/ 67733:
/*!************************************************!*\
  !*** ./src/cavve/billing/billing.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingComponent": () => (/* binding */ BillingComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frame/frame.component */ 50321);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_form_entry_paymentMethod_paymentMethod_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui/form-entry/paymentMethod/paymentMethod.component */ 51325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_form_entry_bankAccount_bankAccountEntry_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/form-entry/bankAccount/bankAccountEntry.component */ 48738);
/* harmony import */ var _common_ui_form_entry_creditCardEntry_creditCardEntry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/ui/form-entry/creditCardEntry/creditCardEntry.component */ 70858);
/* harmony import */ var _common_ui_selectBillingAddress_selectBillingAddress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/selectBillingAddress/selectBillingAddress.component */ 43714);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 38661);























function BillingComponent_section_10_bank_account_entry_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "bank-account-entry", 16);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bankDetails", ctx_r2.billingInfo.eft)("validate", true)("showName", true);
  }
}

function BillingComponent_section_10_credit_card_entry_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "credit-card-entry", 17);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("creditCard", ctx_r3.billingInfo.credit);
  }
}

function BillingComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, BillingComponent_section_10_bank_account_entry_1_Template, 1, 3, "bank-account-entry", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, BillingComponent_section_10_credit_card_entry_2_Template, 1, 1, "credit-card-entry", 15);
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

const _c0 = function () {
  return {
    "margin-bottom": "48px"
  };
};

class BillingComponent {
  constructor(parent, state, genericRepoService, responseErrorService, uiRouterGlobals, dialogService) {
    this.parent = parent;
    this.state = state;
    this.genericRepoService = genericRepoService;
    this.responseErrorService = responseErrorService;
    this.uiRouterGlobals = uiRouterGlobals;
    this.dialogService = dialogService;
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

    this.compareAddress = billingInfo => {
      if (billingInfo) {
        const billingAddress = this.normalizeAddress(billingInfo);
        const mailingAddress = this.normalizeAddress(this.defaultAddress);
        return mailingAddress.address1 === billingAddress.address1 && mailingAddress.address2 === billingAddress.address2 && mailingAddress.city === billingAddress.city && mailingAddress.country === billingAddress.country && mailingAddress.plus4 === billingAddress.plus4 && mailingAddress.state === billingAddress.state && mailingAddress.zip === billingAddress.zip;
      }

      return false;
    };

    this.normalizeAddress = ({
      address1,
      address2,
      city,
      state,
      country,
      zip,
      plus4
    }) => {
      const normalized = {
        address1,
        address2,
        city,
        state,
        country,
        zip,
        plus4
      };
      Object.keys(normalized).forEach(key => {
        if (normalized[key] === '') {
          normalized[key] = null;
        }
      });
      return normalized;
    };
  }

  ngOnInit() {
    this.checkBoxFlag = common_ui__WEBPACK_IMPORTED_MODULE_2__.IAddressCheckBoxFlag.Default;
    this.newAddressFlag = common_ui__WEBPACK_IMPORTED_MODULE_2__.INewAddressFlag.Empty;
    this.parent.stepNum = 2;
    this.parent.setFrameTitle(this.cmsContent.Title);
    this.statesList = this.parent.usStates;
    this.countriesList = this.parent.countries;
    this.setDefaultAddress();
  }

  setDefaultAddress() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _this.genericRepoService.dataFactory.GetMailingAddressCreateAccountViolation();

      if (_this.responseErrorService.isErrorFree(res)) {
        _this.defaultAddress = {
          firstName: null,
          lastName: null,
          internationalAddress: null,
          address1: res.address1,
          address2: res.address2,
          city: res.city,
          state: res.state,
          zip: res.zip,
          plus4: res.plus4,
          country: res.country
        };

        _this.setBillingInfoFromStateParams();
      }
    })();
  }

  setBillingInfoFromStateParams() {
    if (this.uiRouterGlobals.params.billingInfo) {
      const billingInfo = this.uiRouterGlobals.params.billingInfo;

      if (billingInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit) {
        this.billingInfo.credit = billingInfo.credit;
        this.billingInfo.billingType = common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit;
      } else {
        this.billingInfo.eft = { ...billingInfo.eft
        };
        this.billingInfo.eft.account2 = this.billingInfo.eft.accountNumber;
        this.billingInfo.billingType = common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft;
      } //If defaulted and addresses are different


      const isSameAddress = this.compareAddress(billingInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit ? this.billingInfo.credit : this.billingInfo.eft);

      if (!isSameAddress && (billingInfo.credit || billingInfo.eft)) {
        this.newAddressFlag = common_ui__WEBPACK_IMPORTED_MODULE_2__.INewAddressFlag.Updated;
        this.checkBoxFlag = common_ui__WEBPACK_IMPORTED_MODULE_2__.IAddressCheckBoxFlag.New;
        this.newAddress = billingInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit ? { ...billingInfo.credit
        } : { ...billingInfo.eft
        };
        this.newAddress.internationalAddress = billingInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit ? billingInfo.credit.international : billingInfo.eft.international;
      }
    }
  }

  submitBillingInfo(nextState) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.billingAddress = _this2.checkBoxFlag === common_ui__WEBPACK_IMPORTED_MODULE_2__.IAddressCheckBoxFlag.Default ? _this2.defaultAddress : _this2.newAddress;

      if (_this2.billingInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit) {
        if (_this2.creditEntry) {
          const submitResponse = yield _this2.creditEntry.submit();

          if (!submitResponse) {
            return;
          }
        }

        const request = {
          creditCardPaymentMethod: Object.assign(_this2.billingInfo.credit, _this2.billingAddress),
          isCreditCard: true
        };
        const res = yield _this2.genericRepoService.dataFactory.SetBillingInfoCreateAccountViolation(request);
        yield _this2.processBillingInfoCall(res, nextState);
      } else if (_this2.billingInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft) {
        const bankReq = {
          nameOnBankAccount: _this2.billingInfo.eft.name,
          //API expects this specific casing (first letter capitalized),
          //while the components on this page returned / expected all caps
          accountTypeDisplay: _this2.billingInfo.eft.accountType === common_models__WEBPACK_IMPORTED_MODULE_1__.BankAccountType.Business ? 'Business' : 'Personal'
        };
        const request = {
          eFTPaymentMethod: Object.assign(_this2.billingInfo.eft, bankReq, _this2.billingAddress),
          isCreditCard: false
        };
        const res = yield _this2.genericRepoService.dataFactory.SetBillingInfoCreateAccountViolation(request);
        yield _this2.processBillingInfoCall(res, nextState);
      }
    })();
  }

  processBillingInfoCall(res, nextState) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.responseErrorService.isErrorFree(res)) {
        _this3.responseErrorService.displayAlertsFromResponse(res, true);

        yield _this3.billingInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit ? _this3.state.go(nextState) : _this3.state.go(nextState, {
          //This should be clean up when ETC fix thier set violatorCall to include address, BUG 58048
          eftAddress: {
            address1: _this3.billingInfo.eft.address1,
            address2: _this3.billingInfo.eft.address2
          }
        });
      }
    })();
  }

  cancel(cancelState) {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        cmsContent: {
          Title: _this4.cancelMessageContent.cancelQuestion,
          PrimaryContent: '',
          CancelBtn: _this4.cancelMessageContent.cancelResolve,
          AcceptBtn: _this4.cancelMessageContent.cancelReject
        }
      };
      const res = yield _this4.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_2__.GenericCmsModalComponent, data);

      if (!res) {
        _this4.state.go(cancelState);
      }
    })();
  }

}

BillingComponent.ɵfac = function BillingComponent_Factory(t) {
  return new (t || BillingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_15__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_4__.GenericRepoService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_4__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_15__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_4__.DialogService));
};

BillingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: BillingComponent,
  selectors: [["cavve-billing-component"]],
  viewQuery: function BillingComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](common_ui__WEBPACK_IMPORTED_MODULE_2__.CreditCardEntryComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.creditEntry = _t.first);
    }
  },
  inputs: {
    cmsContent: "cmsContent",
    cancelMessageContent: "cancelMessageContent"
  },
  decls: 26,
  vars: 13,
  consts: [["validation-focus", "", "name", "CavveForm", "fxLayout", "column", 1, "u-spacing--widthFill", 3, "ngStyle.lt-md"], ["BillingForm", "ngForm"], [1, "h1-mo"], [2, "margin-top", "21px"], [3, "billingType", "billingTypeChange"], ["style", "margin-top:32px", 4, "ngIf"], ["fxFlexOffset", "32px", "fxLayout", "column"], [3, "billingTitle", "defaultAddress", "newAddress", "checkBoxFlag", "newAddressFlag", "countriesList", "statesList", "defaultAddressChange", "newAddressChange", "checkBoxFlagChange", "newAddressFlagChange"], [2, "margin-top", "32px"], [3, "next", "cancel"], ["wizard-next", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["wizard-cancel", ""], [3, "bankDetails", "validate", "showName", 4, "ngIf"], [3, "creditCard", 4, "ngIf"], [3, "bankDetails", "validate", "showName"], [3, "creditCard"]],
  template: function BillingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "page-centered-container")(1, "form", 0, 1)(3, "card-container")(4, "section")(5, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "section", 3)(9, "payment-method", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("billingTypeChange", function BillingComponent_Template_payment_method_billingTypeChange_9_listener($event) {
        return ctx.billingInfo.billingType = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, BillingComponent_section_10_Template, 3, 2, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "card-container", 6)(12, "section")(13, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "select-billing-address", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("defaultAddressChange", function BillingComponent_Template_select_billing_address_defaultAddressChange_16_listener($event) {
        return ctx.defaultAddress = $event;
      })("newAddressChange", function BillingComponent_Template_select_billing_address_newAddressChange_16_listener($event) {
        return ctx.newAddress = $event;
      })("checkBoxFlagChange", function BillingComponent_Template_select_billing_address_checkBoxFlagChange_16_listener($event) {
        return ctx.checkBoxFlag = $event;
      })("newAddressFlagChange", function BillingComponent_Template_select_billing_address_newAddressFlagChange_16_listener($event) {
        return ctx.newAddressFlag = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "section", 8)(18, "wizard-ui", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("next", function BillingComponent_Template_wizard_ui_next_18_listener($event) {
        return ctx.submitBillingInfo($event);
      })("cancel", function BillingComponent_Template_wizard_ui_cancel_18_listener($event) {
        return ctx.cancel($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, "CONTINUE");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](22, "mat-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](12, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.cmsContent.paymentMethodHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("billingType", ctx.billingInfo.billingType);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.billingInfo.billingType);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.cmsContent.billingAddressHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("billingTitle", ctx.cmsContent.newBillingSliderHeader)("defaultAddress", ctx.defaultAddress)("newAddress", ctx.newAddress)("checkBoxFlag", ctx.checkBoxFlag)("newAddressFlag", ctx.newAddressFlag)("countriesList", ctx.countriesList)("statesList", ctx.statesList);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_6__.FocusDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__.DefaultStyleDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDivider, _common_ui_form_entry_paymentMethod_paymentMethod_component__WEBPACK_IMPORTED_MODULE_8__.PaymentMethodComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _common_ui_form_entry_bankAccount_bankAccountEntry_component__WEBPACK_IMPORTED_MODULE_9__.BankAccountEntryComponent, _common_ui_form_entry_creditCardEntry_creditCardEntry_component__WEBPACK_IMPORTED_MODULE_10__.CreditCardEntryComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultFlexOffsetDirective, _common_ui_selectBillingAddress_selectBillingAddress_component__WEBPACK_IMPORTED_MODULE_11__.SelectBillingAddressComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_12__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_13__.WizardNextDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutAlignDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon],
  styles: ["[_nghost-%COMP%]   form[_ngcontent-%COMP%] {\n  max-width: 540px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n  padding-bottom: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGxpbmcubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdRLGdCQUFBO0FBSFI7QUFBQTtFQU9RLFdBQUE7QUFKUjtBQUhBO0VBV1EsZ0JBQUE7RUFDQSxvQkFBQTtBQUxSIiwiZmlsZSI6ImJpbGxpbmcubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcblxuICAgIGZvcm0ge1xuICAgICAgICBtYXgtd2lkdGg6IEBwYWdlLWNlbnRlcmVkLW1heC13aWR0aDtcbiAgICB9XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICAgIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 51319:
/*!************************************************!*\
  !*** ./src/cavve/confirm/confirm.component.ts ***!
  \************************************************/
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
/* harmony import */ var common_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/utilities */ 56516);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var common_ui_chooseDeliveryMethod_chooseDeliveryMethod_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ui/chooseDeliveryMethod/chooseDeliveryMethod.component */ 5472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../frame/frame.component */ 50321);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var common_billing_billingInfoUtilities_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/billing/billingInfoUtilities.service */ 25636);
/* harmony import */ var authentication_authChannelService_authChannel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! authentication/authChannelService/authChannel.service */ 67734);
/* harmony import */ var common_services_session_session_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/services/session/session.service */ 19511);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../storefront/utility/utility.component */ 10061);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/ui/display/payment/paymentDisplay.component */ 38321);
/* harmony import */ var _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/ui/display/address/addressDisplay.component */ 23204);
/* harmony import */ var _common_ui_display_vehicleDisplay_vehicleDisplay_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/ui/display/vehicleDisplay/vehicleDisplay.component */ 49703);
/* harmony import */ var _paymentSummary_paymentSummary_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../paymentSummary/paymentSummary.component */ 29052);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ 38661);


































function ConfirmComponent_payment_display_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "payment-display", 41);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("billingType", ctx_r2.billingInfo.billingType)("bankDetails", ctx_r2.billingInfo.eft)("creditCard", ctx_r2.billingInfo.credit)("hideTitle", true)("showAccountNumber", true)("showNameOnCard", true)("showLabels", true);
  }
}

function ConfirmComponent_address_display_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "address-display", 42);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("address", ctx_r3.billingInfo.billingType === ctx_r3.BillingType.Credit ? ctx_r3.billingInfo.credit : ctx_r3.billingInfo.eft)("international", ctx_r3.billingInfo.billingType === ctx_r3.BillingType.Credit ? ctx_r3.billingInfo.credit.international : ctx_r3.billingInfo.eft.international)("showLabels", true);
  }
}

function ConfirmComponent_vehicle_display_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "vehicle-display", 43);
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("vehicleInfo", ctx_r4.vehicleInfo);
  }
}

function ConfirmComponent_article_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "article", 44);
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("innerHtml", ctx_r6.cmsSectionConfirmOrderSummary.LongDescription, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsanitizeHtml"]);
  }
}

function ConfirmComponent_div_57_ng_container_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "p", 49);
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("innerHtml", ctx_r11.cmsSectionConfirmOrderSummary.EzTagAgreementValidation, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsanitizeHtml"]);
  }
}

function ConfirmComponent_div_57_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerStart"](0, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](1, ConfirmComponent_div_57_ng_container_1_p_1_Template, 1, 1, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngSwitch", error_r9.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngSwitchCase", "required");
  }
}

function ConfirmComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](1, ConfirmComponent_div_57_ng_container_1_Template, 2, 2, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵreference"](2);

    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", _r0.submitted);
  }
}

const _c0 = function () {
  return {
    "margin-bottom": "30px"
  };
};

const _c1 = function () {
  return {
    "margin-top": "24px"
  };
};

class ConfirmComponent {
  constructor(parent, state, userRoles, dialogService, billingInfoUtilitiesService, uiRouterGlobals, authChannel, genericRepoService, responseErrorService, session) {
    var _this = this;

    this.parent = parent;
    this.state = state;
    this.userRoles = userRoles;
    this.dialogService = dialogService;
    this.billingInfoUtilitiesService = billingInfoUtilitiesService;
    this.uiRouterGlobals = uiRouterGlobals;
    this.authChannel = authChannel;
    this.genericRepoService = genericRepoService;
    this.responseErrorService = responseErrorService;
    this.session = session;
    this.BillingType = common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType;
    this.setUpPage = /*#__PURE__*/(0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.parent.setFrameTitle(_this.cmsContent.Title);

      _this.parent.stepNum = 3; //set Violations Data

      _this.createAccountFromViolationsTotals = _this.parent.createAccountFromViolationsTotals;
      const accountSummary = yield _this.genericRepoService.dataFactory.GetAccountSummaryCreateAccountFromViolation();
      yield _this.setAccountData(accountSummary); //This is only set once, because
      //we only want to check for state params from uirouterglobals at the very beginning
      //This should be clean up when ETC fix thier set violatorCall to include address, BUG 58048

      if (_this.responseErrorService.isErrorFree(accountSummary)) {
        _this.billingInfo.eft.address1 = _this.billingInfo.eft.address1 || (_this.uiRouterGlobals.params.eftAddress ? _this.uiRouterGlobals.params.eftAddress.address1 : null);
        _this.billingInfo.eft.address2 = _this.billingInfo.eft.address2 || (_this.uiRouterGlobals.params.eftAddress ? _this.uiRouterGlobals.params.eftAddress.address2 : null);
        _this.billingInfoOriginal.eft.address1 = _this.billingInfoOriginal.eft.address1 || (_this.uiRouterGlobals.params.eftAddress ? _this.uiRouterGlobals.params.eftAddress.address1 : null);
        _this.billingInfoOriginal.eft.address2 = _this.billingInfoOriginal.eft.address2 || (_this.uiRouterGlobals.params.eftAddress ? _this.uiRouterGlobals.params.eftAddress.address2 : null);
      }
    }); // Component & Modal View Model Binding Functions

    this.setAccountData = response => {
      var _a, _b;

      if (this.responseErrorService.isErrorFree(response)) {
        const billingInfoInternal = {
          credit: this.normalizeCreditCard(response.creditCardPaymentMethod || {}),
          eft: this.normalizeEFT(response.eftPaymentMethod || {}),
          billingType: response.isCreditCard ? common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit : common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft,
          international: this.billingInfoUtilitiesService.isInternationalAddress(response.creditCardPaymentMethod)
        }; //This should be clean up when ETC fix thier set violatorCall to include address, BUG 58048

        if (this.billingInfo && this.billingInfo.eft && ((_a = billingInfoInternal === null || billingInfoInternal === void 0 ? void 0 : billingInfoInternal.eft) === null || _a === void 0 ? void 0 : _a.address1) && ((_b = billingInfoInternal === null || billingInfoInternal === void 0 ? void 0 : billingInfoInternal.eft) === null || _b === void 0 ? void 0 : _b.address2)) {
          billingInfoInternal.eft.address1 = this.billingInfo.eft.address1;
          billingInfoInternal.eft.address2 = this.billingInfo.eft.address2;
        }

        if (this.billingInfo) {
          if (this.billingInfo.billingType !== billingInfoInternal.billingType) {
            this.billingInfo.credit = {};
            this.billingInfo.eft = {};
          }

          const card = this.billingInfo.credit;
          const eft = this.billingInfo.eft;
          Object.keys(card).forEach(key => delete card[key]);
          Object.keys(eft).forEach(key => delete eft[key]);
          Object.assign(card, billingInfoInternal.credit);
          Object.assign(eft, billingInfoInternal.eft);
          this.billingInfo.billingType = billingInfoInternal.billingType;
          this.billingInfo.international = billingInfoInternal.international;
        } else {
          this.billingInfo = billingInfoInternal;
        }

        this.billingInfoOriginal = (0,common_utilities__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(this.billingInfo);
        this.accountInfoOriginal = (0,common_utilities__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(response.accountInfo);
        this.vehicleInfoOriginal = this.normalizeVehicleInfo(response.accountInfo);

        if (!this.vehicleInfo || (0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEqual)(this.vehicleInfo, this.vehicleInfoOriginal)) {
          this.vehicleInfo = (0,common_utilities__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(this.vehicleInfoOriginal);
        }
      }
    }; // Data Mapping


    this.normalizeCreditCard = creditCard => {
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_3__.isString)(creditCard.cardNbr) && (0,lodash__WEBPACK_IMPORTED_MODULE_3__.isNumber)(creditCard.expMonth) && (0,lodash__WEBPACK_IMPORTED_MODULE_3__.isNumber)(creditCard.expYear)) {
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
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_3__.isString)(eft.nameOnBankAccount)) {
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

    this.normalizeVehicleInfo = objContainsVehicleInfo => ({
      licPlate: objContainsVehicleInfo.licPlate,
      licState: objContainsVehicleInfo.licState,
      motorcycle: objContainsVehicleInfo.motorcycle,
      nickname: objContainsVehicleInfo.nickname,
      temporaryLicPlate: objContainsVehicleInfo.temporaryLicPlate,
      vehicleClassCode: Number(objContainsVehicleInfo.vehicleClassCode),
      vehicleClassDesc: objContainsVehicleInfo.vehicleClassDesc,
      vehicleColor: objContainsVehicleInfo.vehicleColor,
      vehicleMake: objContainsVehicleInfo.vehicleMake,
      vehicleModel: objContainsVehicleInfo.vehicleModel,
      vehicleYear: objContainsVehicleInfo.vehicleYear,
      isMotorcycleDisabled: true
    });

    this.onSubmit = /*#__PURE__*/function () {
      var _ref2 = (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (nextState) {
        yield _this.setEditedBillingInfo(_this.billingInfo);
        yield _this.setEditedVehicleInfo(_this.vehicleInfo);
        yield _this.convertAccountAndGoToReceiptPage(nextState);
      });

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.onPrevious = /*#__PURE__*/function () {
      var _ref3 = (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (nextState) {
        yield _this.state.go(nextState, {
          billingInfo: _this.billingInfo
        }, {
          custom: {
            isExplicitlyAllowedTransition: true
          }
        });
      });

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    this.convertAccountAndGoToReceiptPage = /*#__PURE__*/function () {
      var _ref4 = (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (nextState) {
        const convertAccountRequest = {
          deliveryMethod: _this.deliveryMethodOptions.deliveryMethod,
          totalPaymentAmount: _this.createAccountFromViolationsTotals.createAccountPlateTotal
        };
        const apiResponse = yield _this.genericRepoService.dataFactory.ConvertAccountCreateAccountFromViolation(convertAccountRequest);

        if (_this.responseErrorService.isErrorFree(apiResponse)) {
          _this.session.userRole = _this.userRoles.active;

          _this.session.setAcctActivity('A');

          _this.authChannel.logIn(apiResponse);

          yield _this.state.go(nextState, {
            billingInfo: _this.billingInfo,
            vehicleInfo: _this.vehicleInfo
          }, {
            custom: {
              isExplicitlyAllowedTransition: true
            }
          });
        }
      });

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }(); // Form Submissions


    this.setEditedBillingInfo = /*#__PURE__*/function () {
      var _ref5 = (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (billingInfo) {
        const violatorBillingInfoRequest = {
          creditCardPaymentMethod: billingInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit ? billingInfo.credit : null,
          eftPaymentMethod: billingInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft ? billingInfo.eft : null,
          isCreditCard: billingInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit
        };

        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEqual)(billingInfo, _this.billingInfoOriginal)) {
          //API expects this specific casing (first letter capitalized),
          //while the components on this page returned / expected all caps
          if (billingInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft) {
            violatorBillingInfoRequest.eftPaymentMethod.nameOnBankAccount = _this.billingInfo.eft.name;

            if (violatorBillingInfoRequest.eftPaymentMethod.accountType === common_models__WEBPACK_IMPORTED_MODULE_1__.BankAccountType.Business) {
              violatorBillingInfoRequest.eftPaymentMethod.accountType = 'Business';
              violatorBillingInfoRequest.eftPaymentMethod.accountTypeDisplay = 'Business';
            } else {
              violatorBillingInfoRequest.eftPaymentMethod.accountType = 'Personal';
              violatorBillingInfoRequest.eftPaymentMethod.accountTypeDisplay = 'Personal';
            }
          }

          const apiResponseSetBillingInfoCreateAccountViolation = yield _this.genericRepoService.dataFactory.SetBillingInfoCreateAccountViolation(violatorBillingInfoRequest);

          if (_this.responseErrorService.isErrorFree(apiResponseSetBillingInfoCreateAccountViolation)) {
            _this.responseErrorService.displayAlertsFromResponse(apiResponseSetBillingInfoCreateAccountViolation);

            const apiResponseGetAccountSummaryCreateAccountFromViolation = yield _this.genericRepoService.dataFactory.GetAccountSummaryCreateAccountFromViolation();

            if (_this.responseErrorService.isErrorFree(apiResponseGetAccountSummaryCreateAccountFromViolation)) {
              _this.setAccountData(apiResponseGetAccountSummaryCreateAccountFromViolation);
            }
          } else {
            throw new Error('setEditedBillingInfo() failed at API call SetBillingInfoCreateAccountViolation().');
          }
        }
      });

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }();

    this.setEditedVehicleInfo = /*#__PURE__*/function () {
      var _ref6 = (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (vehicleInfo) {
        const violatorAccountInfoRequest = {
          AccountInfo: Object.assign({}, _this.accountInfoOriginal, vehicleInfo)
        };

        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEqual)(vehicleInfo, _this.vehicleInfoOriginal)) {
          const apiResponseSetViolatorAccountInfo = yield _this.genericRepoService.dataFactory.SetViolatorAccountInfo(violatorAccountInfoRequest);

          if (_this.responseErrorService.isErrorFree(apiResponseSetViolatorAccountInfo)) {
            const apiResponseGetAccountSummaryCreateAccountFromViolation = yield _this.genericRepoService.dataFactory.GetAccountSummaryCreateAccountFromViolation();

            if (_this.responseErrorService.isErrorFree(apiResponseGetAccountSummaryCreateAccountFromViolation)) {
              _this.setAccountData(apiResponseGetAccountSummaryCreateAccountFromViolation);
            }
          } else {
            throw new Error('setEditedVehicleInfo() failed at API call SetViolatorAccountInfo().');
          }
        }
      });

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }();
  }

  ngOnInit() {
    this.setUpPage();
  }

  openEditBillingModal() {
    const data = {
      billingInformation: {
        credit: (0,common_utilities__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(this.billingInfo.credit),
        eft: (0,common_utilities__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(this.billingInfo.eft)
      },
      billingType: (0,common_utilities__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(this.billingInfo.billingType),
      stateList: (0,common_utilities__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(this.parent.usStates),
      countryList: (0,common_utilities__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(this.parent.countries)
    };
    return this.dialogService.openSliderCentered(common_ui_modals_billingModal_billingModal_component__WEBPACK_IMPORTED_MODULE_2__.BillingModalComponent, data, {
      title: 'Edit Payment Method'
    }).then(result => {
      if (result) {
        this.billingInfo = result.billingInformation;
        this.billingInfo.billingType = result.billingType;

        if (result.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit) {
          this.billingInfo.credit = this.normalizeCreditCard(this.billingInfo.credit);
        }

        if (result.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft) {
          this.billingInfo.eft.accountTypeDisplay = result.billingInformation.eft.accountType;
          this.billingInfo.eft.nameOnBankAccount = result.billingInformation.eft.name;
          this.billingInfo.eft = this.normalizeEFT(this.billingInfo.eft);
        }
      }
    });
  }

  openEditVehiclesModal() {
    const data = {
      vehicleInfo: (0,common_utilities__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(this.vehicleInfo),
      modalCms: {
        vehicleInfoTitle: this.cmsContent.editVehicleInfoTitle,
        vehicleToolTipEditButton: this.cmsContent.editVehicleToolTipEditButton,
        vehicleToolTipText: this.cmsContent.editVehicleToolTipText
      },
      stateList: this.parent.usStates,
      plateIsReadOnly: true,
      motorcycleDisabled: true
    };
    this.dialogService.openSliderCentered(common_ui__WEBPACK_IMPORTED_MODULE_5__.EditVehicleModalComponent, data, {
      title: 'Edit Vehicles'
    }).then(result => {
      if (result) {
        this.vehicleInfo = this.normalizeVehicleInfo(result.vehicleInfo);
      }
    });
  }

}

ConfirmComponent.ɵfac = function ConfirmComponent_Factory(t) {
  return new (t || ConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_7__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_25__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](constants_module__WEBPACK_IMPORTED_MODULE_8__.UserRoles), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_9__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](common_billing_billingInfoUtilities_service__WEBPACK_IMPORTED_MODULE_10__.BillingInfoUtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_25__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](authentication_authChannelService_authChannel_service__WEBPACK_IMPORTED_MODULE_11__.AuthChannelService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_9__.GenericRepoService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_9__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](common_services_session_session_service__WEBPACK_IMPORTED_MODULE_12__.SessionService));
};

ConfirmComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineComponent"]({
  type: ConfirmComponent,
  selectors: [["cavve-confirm-component"]],
  viewQuery: function ConfirmComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](common_ui_chooseDeliveryMethod_chooseDeliveryMethod_component__WEBPACK_IMPORTED_MODULE_6__.ChooseDeliveryMethodComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.deliveryMethodOptions = _t.first);
    }
  },
  inputs: {
    cmsContent: "cmsContent",
    cmsSectionConfirmOrderSummary: "cmsSectionConfirmOrderSummary"
  },
  decls: 68,
  vars: 22,
  consts: [["validation-focus", "", "name", "cavveEzTagAgreementForm", 1, "u-spacing--widthFill", 3, "ngStyle.lt-md"], ["EzTagAgreementForm", "ngForm"], ["storefront", ""], ["fxLayout", "column"], ["id", "billingInfoSection"], ["fxLayout", "column", "fxLayoutAlign", "start start"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "u-spacing--widthFill"], ["id", "billingInfoHdr"], ["fxFlex", "none", "aria-label", "Edit", 1, "editButton", 3, "click"], ["fxLayout", "column", 2, "margin-top", "24px"], [3, "billingType", "bankDetails", "creditCard", "hideTitle", "showAccountNumber", "showNameOnCard", "showLabels", 4, "ngIf"], [3, "address", "international", "showLabels", 4, "ngIf"], ["id", "vehicleInfoSection", "fxFlexOffset", "21px"], ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "u-spacing--widthFill"], ["id", "vehicleInfoHdr"], ["fxLayout", "column", "fxLayoutAlign", "center start", 2, "margin-top", "24px"], [3, "vehicleInfo", 4, "ngIf"], ["id", "chooseDeliveryMethodSection", "fxFlexOffset", "21px"], ["fxLayout", "row", "fxLayout.lt-md", "column"], ["fxLayout", "column", "fxFlex", "grow", "fxFlexOrder", "1", "fxFlexOrder.lt-md", "2", "ngClass.lt-md", "u-spacing--widthFill", 3, "ngStyle.lt-md"], ["id", "chooseDeliveryMethodHdr"], ["fxLayout", "column", "fxFlex", "none", "fxLayoutAlign", "start end", "fxLayoutAlign.lt-md", "start start", "fxFlexOrder", "2", "fxFlexOrder.lt-md", "1", "ngClass.lt-md", "u-spacing--widthFill", 2, "font-weight", "bold"], ["DeliveryMethodsOptions", ""], ["id", "orderSummarySection", "fxFlexOffset", "21px"], ["id", "orderSummaryHdr"], ["fxLayout", "column", "fxLayoutAlign", "center", 2, "margin-top", "24px"], [3, "isConfirmPage", "fees"], ["id", "ezTagAgreementSection", 2, "margin-top", "4px"], ["style", "margin-top:18px;", 3, "innerHtml", 4, "ngIf"], [2, "margin-top", "18px", 3, "error-check"], ["fxLayout", "row", "fxLayoutAlign", "start start", 1, "u-spacing--widthFill"], ["type", "checkbox", "name", "verifyAgreementChecked", "required", "", 2, "width", "16px", "height", "16px", 3, "ngModel"], ["EzTagAgreementCheck", "ngModel"], [2, "margin-top", "2px", "margin-left", "10px", 3, "innerHtml"], ["role", "alert", 4, "ngFor", "ngForOf"], [1, "u-spacing__buttonToField--marginTop"], [3, "next", "previous"], ["wizard-next", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["wizard-cancel", ""], [3, "billingType", "bankDetails", "creditCard", "hideTitle", "showAccountNumber", "showNameOnCard", "showLabels"], [3, "address", "international", "showLabels"], [3, "vehicleInfo"], [2, "margin-top", "18px", 3, "innerHtml"], ["role", "alert"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], ["class", "help-block", 3, "innerHtml", 4, "ngSwitchCase"], [1, "help-block", 3, "innerHtml"]],
  template: function ConfirmComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "page-centered-container")(1, "form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](3, "storefront-utility", null, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](5, "div", 3)(6, "card-container", 4)(7, "section", 5)(8, "div", 6)(9, "header", 3)(10, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](12, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](13, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function ConfirmComponent_Template_a_click_13_listener() {
        return ctx.openEditBillingModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](14, " Edit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](15, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](16, ConfirmComponent_payment_display_16_Template, 1, 7, "payment-display", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](17, ConfirmComponent_address_display_17_Template, 1, 3, "address-display", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](18, "card-container", 12)(19, "section", 13)(20, "div", 6)(21, "header", 3)(22, "h2", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](24, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](25, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function ConfirmComponent_Template_a_click_25_listener() {
        return ctx.openEditVehiclesModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](26, " Edit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](27, "section", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](28, ConfirmComponent_vehicle_display_28_Template, 1, 1, "vehicle-display", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](29, "card-container", 17)(30, "section", 18)(31, "article", 19)(32, "header")(33, "h2", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](35, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](36, "article", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](37, "section", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](38, "choose-delivery-method", null, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](40, "card-container", 23)(41, "section", 18)(42, "article", 19)(43, "header")(44, "h2", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](46, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](47, "article", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](48, "section", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](49, "cavve-payment-summary", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](50, "section", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](51, ConfirmComponent_article_51_Template, 1, 1, "article", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](52, "div", 29)(53, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](54, "input", 31, 32)(56, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](57, ConfirmComponent_div_57_Template, 2, 1, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](58, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](59, "section", 35)(60, "wizard-ui", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("next", function ConfirmComponent_Template_wizard_ui_next_60_listener($event) {
        return ctx.onSubmit($event);
      })("previous", function ConfirmComponent_Template_wizard_ui_previous_60_listener($event) {
        return ctx.onPrevious($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](61, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](62, "PAY");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](63, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](64, "mat-icon", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](65, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](66, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](67, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵreference"](55);

      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](19, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.billingInfoHeader, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.billingInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.billingInfo && ctx.billingInfo.billingType);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.vehicleInfoHeader, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.vehicleInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](20, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.deliveryMethodHeader, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](21, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", ctx.cmsSectionConfirmOrderSummary.Title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("isConfirmPage", true)("fees", ctx.createAccountFromViolationsTotals);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.cmsSectionConfirmOrderSummary.LongDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("error-check", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngModel", ctx.verifyAgreementChecked);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("innerHtml", ctx.cmsSectionConfirmOrderSummary.ShortDescription, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](58, 17, _r7.errors));
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_13__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_14__.FocusDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__.DefaultStyleDirective, _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_15__.StorefrontUtilityComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__.DefaultLayoutDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_16__.CardContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__.DefaultLayoutAlignDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_29__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgIf, _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_17__.PaymentDisplayComponent, _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_18__.AddressDisplayComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__.DefaultFlexOffsetDirective, _common_ui_display_vehicleDisplay_vehicleDisplay_component__WEBPACK_IMPORTED_MODULE_19__.VehicleDisplayComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__.DefaultFlexOrderDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__.DefaultClassDirective, common_ui_chooseDeliveryMethod_chooseDeliveryMethod_component__WEBPACK_IMPORTED_MODULE_6__.ChooseDeliveryMethodComponent, _paymentSummary_paymentSummary_component__WEBPACK_IMPORTED_MODULE_20__.PaymentSummaryComponent, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_21__.ErrorCheckDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.CheckboxRequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgSwitchCase, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_22__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_23__.WizardNextDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIcon],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.KeyValuePipe],
  styles: ["[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0px 0px;\n  max-height: 70px;\n  padding-bottom: 16px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   .editButton[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: 'Jost';\n  text-align: right;\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0ubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxmb250cy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRVEsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFIUjtBQURBO0VBUVEsV0FBQTtBQUpSO0FBSkE7RUFZUSxnQkFBQTtFQ1hKLG1CQUFBO0VEYUksaUJBQUE7RUFDQSxnQkFBQTtBQUxSIiwiZmlsZSI6ImNvbmZpcm0ubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgaDIge1xuICAgICAgICBtYXJnaW46IDBweCAwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xuICAgIH1cblxuICAgIC5lZGl0QnV0dG9uIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgLnQtaGVhZGVyLS1mb250RmFtaWx5O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB9XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cblxuLnQtaGVhZGVyLS1mb250RmFtaWx5KCkge1xuICAgIGZvbnQtZmFtaWx5OiBAZm9udC1qb3N0O1xufVxuXG4udC1ib2R5LS1mb250RmFtaWx5KCkge1xuICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xufVxuIl19 */"]
});

/***/ }),

/***/ 71059:
/*!**************************************************!*\
  !*** ./src/cavve/frame/cancelModal.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelModalComponent": () => (/* binding */ CancelModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/ui/modals/actionButtons/actionButtons.component */ 65380);




class CancelModalComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.question = dialogRef.data.question;
        this.rejectMessage = dialogRef.data.rejectMessage;
        this.confirmMessage = dialogRef.data.confirmMessage;
    }
    makeChoice(cancel) {
        this.dialogRef.data.isCancelled = cancel;
        this.dialogRef.close(this.dialogRef.data);
    }
}
CancelModalComponent.ɵfac = function CancelModalComponent_Factory(t) { return new (t || CancelModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_0__.DialogRef)); };
CancelModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CancelModalComponent, selectors: [["cavve-cancel-modal"]], decls: 10, vars: 3, consts: [[1, "refresh-2020"], [3, "main", "alt"], ["action-main", ""], ["action-alt", ""]], template: function CancelModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0)(1, "header")(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "action-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("main", function CancelModalComponent_Template_action_buttons_main_5_listener() { return ctx.makeChoice(false); })("alt", function CancelModalComponent_Template_action_buttons_alt_5_listener() { return ctx.makeChoice(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.question);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.rejectMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.confirmMessage);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDivider, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_1__.ActionButtonsComponent], styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n  padding-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbmNlbE1vZGFsLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFUSxXQUFBO0FBSFI7QUFDQTtFQU1RLG1CQUFBO0FBSlI7QUFGQTtFQVVRLGdCQUFBO0VBQ0Esb0JBQUE7QUFMUiIsImZpbGUiOiJjYW5jZWxNb2RhbC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG5cbiAgICBoZWFkZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgbWF4LWhlaWdodDogNzBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 50321:
/*!********************************************!*\
  !*** ./src/cavve/frame/frame.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrameComponent": () => (/* binding */ FrameComponent)
/* harmony export */ });
/* harmony import */ var violations_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! violations/constants */ 27520);
/* harmony import */ var cavve_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cavve/constants */ 73748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var _common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/webStorageService/webStorage.service */ 38898);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @uirouter/angular */ 99305);
/* harmony import */ var _common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/ui/title-banner/title-banner.component */ 38018);
/* harmony import */ var _common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ui/wizard/stepper/stepper.component */ 63457);








class FrameComponent {
    constructor(webStorageConst, webStorage, stateService) {
        this.webStorageConst = webStorageConst;
        this.webStorage = webStorage;
        this.stateService = stateService;
        this.steps = [];
        this.stepNum = 0;
    }
    getPlateContainer() {
        const plateContainer = this.webStorage.getValue(this.webStorageConst.enhancedViolationsPlateAndInvoiceData);
        if (!plateContainer) {
            // To see offer page without going through Violations:
            // Comment out the line below.
            this.stateService.go(violations_constants__WEBPACK_IMPORTED_MODULE_0__.stateNames.Landing);
            return {
                plate: {
                    licensePlate: '',
                    licenseState: '',
                    discountProgramCode: 0,
                    uninvoicedViolations: [],
                    invoices: []
                }
            };
        }
        return plateContainer;
    }
    ngOnInit() {
        this.webStorage.removeEntry(this.webStorageConst.cavveConversionData);
        this.violations = this.webStorage.getValue(cavve_constants__WEBPACK_IMPORTED_MODULE_1__.webStorageConstants.uninvoiced);
        this.createAccountFromViolationsTotals =
            this.webStorage.getValue(cavve_constants__WEBPACK_IMPORTED_MODULE_1__.webStorageConstants.createAccountFromViolationsTotals) || {};
        this.createAccountFromViolationsTotals.totalViolationsDue =
            this.webStorage.getValue(cavve_constants__WEBPACK_IMPORTED_MODULE_1__.webStorageConstants.remainingPlateTotalBeforeDiscount);
        this.createAccountFromViolationsTotals.serviceFee = this.webStorage.getValue(cavve_constants__WEBPACK_IMPORTED_MODULE_1__.webStorageConstants.serviceFee);
        this.steps = [
            { name: this.cmsBaseContent.Step1, background: 'secondary' },
            { name: this.cmsBaseContent.Step2, background: 'secondary' },
            { name: this.cmsBaseContent.Step3, background: 'secondary' },
            { name: this.cmsBaseContent.Step4 }
        ];
        this.showAccountDetailsHeader = false;
    }
    setFrameTitle(title) {
        this.cmsBaseContent.Title = title;
    }
}
FrameComponent.ɵfac = function FrameComponent_Factory(t) { return new (t || FrameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](constants_module__WEBPACK_IMPORTED_MODULE_2__.WebStorageConst), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_3__.WebStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_7__.StateService)); };
FrameComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: FrameComponent, selectors: [["cavve-frame-component"]], inputs: { cmsBaseContent: "cmsBaseContent", usStates: "usStates", countries: "countries" }, decls: 5, vars: 3, consts: [[1, "refresh-2020"], [3, "steps", "currentStepNum"]], template: function FrameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "main", 0)(1, "title-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "stepper", 1)(4, "ui-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.cmsBaseContent.Title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("steps", ctx.steps)("currentStepNum", ctx.stepNum);
    } }, directives: [_common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_4__.TitleBannerComponent, _common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_5__.StepperComponent, _uirouter_angular__WEBPACK_IMPORTED_MODULE_8__.UIView], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcmFtZS5sZXNzIn0= */"] });


/***/ }),

/***/ 27523:
/*!*****************************!*\
  !*** ./src/cavve/module.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CAVVEModule": () => (/* binding */ CAVVEModule)
/* harmony export */ });
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @uirouter/angular */ 99305);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout */ 45046);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var storefront_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! storefront/module */ 89550);
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pipes/module */ 20445);
/* harmony import */ var validation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! validation/module */ 26186);
/* harmony import */ var hybrid_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hybrid/module */ 98730);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./frame/frame.component */ 50321);
/* harmony import */ var _offer_offer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offer/offer.component */ 74709);
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./personal/personal.component */ 68369);
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./billing/billing.component */ 67733);
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./confirm/confirm.component */ 51319);
/* harmony import */ var _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./receipt/receipt.component */ 8667);
/* harmony import */ var _frame_cancelModal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./frame/cancelModal.component */ 71059);
/* harmony import */ var _offer_offerButton_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./offer/offerButton.component */ 64456);
/* harmony import */ var _paymentSummary_paymentSummary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./paymentSummary/paymentSummary.component */ 29052);
/* harmony import */ var _paymentSummary_tollViolationsModal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./paymentSummary/tollViolationsModal.component */ 3170);
/* harmony import */ var _paymentSummary_invoiced_invoiced_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./paymentSummary/invoiced/invoiced.component */ 92912);
/* harmony import */ var _paymentSummary_unInvoiced_unInvoiced_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./paymentSummary/unInvoiced/unInvoiced.component */ 22179);
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./routing */ 87144);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./constants */ 73748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 28596);













//cavve components
















class CAVVEModule {
}
CAVVEModule.ɵfac = function CAVVEModule_Factory(t) { return new (t || CAVVEModule)(); };
CAVVEModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: CAVVEModule });
CAVVEModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [
        { provide: _constants__WEBPACK_IMPORTED_MODULE_18__.StateNames, useValue: _constants__WEBPACK_IMPORTED_MODULE_18__.stateNames }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_21__.UIRouterModule.forChild({ states: _routing__WEBPACK_IMPORTED_MODULE_17__.routes }),
            common_module__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
            pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
            hybrid_module__WEBPACK_IMPORTED_MODULE_4__.HybridModule,
            validation_module__WEBPACK_IMPORTED_MODULE_3__.ValidationModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__.FlexLayoutModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule,
            storefront_module__WEBPACK_IMPORTED_MODULE_0__.StorefrontModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](CAVVEModule, { declarations: [_frame_frame_component__WEBPACK_IMPORTED_MODULE_5__.FrameComponent,
        _offer_offer_component__WEBPACK_IMPORTED_MODULE_6__.OfferComponent,
        _personal_personal_component__WEBPACK_IMPORTED_MODULE_7__.PersonalComponent,
        _billing_billing_component__WEBPACK_IMPORTED_MODULE_8__.BillingComponent,
        _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__.ConfirmComponent,
        _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_10__.ReceiptComponent,
        _offer_offerButton_component__WEBPACK_IMPORTED_MODULE_12__.OfferButtonComponent,
        _frame_cancelModal_component__WEBPACK_IMPORTED_MODULE_11__.CancelModalComponent,
        _paymentSummary_paymentSummary_component__WEBPACK_IMPORTED_MODULE_13__.PaymentSummaryComponent,
        _paymentSummary_tollViolationsModal_component__WEBPACK_IMPORTED_MODULE_14__.TollViolationsModalComponent,
        _paymentSummary_invoiced_invoiced_component__WEBPACK_IMPORTED_MODULE_15__.InvoicedComponent,
        _paymentSummary_unInvoiced_unInvoiced_component__WEBPACK_IMPORTED_MODULE_16__.UnInvoicedComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _uirouter_angular__WEBPACK_IMPORTED_MODULE_21__.UIRouterModule, common_module__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
        hybrid_module__WEBPACK_IMPORTED_MODULE_4__.HybridModule,
        validation_module__WEBPACK_IMPORTED_MODULE_3__.ValidationModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__.FlexLayoutModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule,
        storefront_module__WEBPACK_IMPORTED_MODULE_0__.StorefrontModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule] }); })();


/***/ }),

/***/ 74709:
/*!********************************************!*\
  !*** ./src/cavve/offer/offer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferComponent": () => (/* binding */ OfferComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var violations_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! violations/constants */ 27520);
/* harmony import */ var frp3_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frp3/constants */ 39387);
/* harmony import */ var common_upgrades__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/upgrades */ 41034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../frame/frame.component */ 50321);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ui/containers/page/pageFilled.component */ 95556);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ui/display/cmsContent/cmsContent.component */ 89707);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _offerButton_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offerButton.component */ 64456);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 38661);















class OfferComponent {
  constructor(parent, state, environmentConfig) {
    this.parent = parent;
    this.state = state;
    this.environmentConfig = environmentConfig;
    this.subHeaderParams = {};
    this.choiceSelected = '';
  }

  ngOnInit() {
    this.parent.setFrameTitle(this.landingPageInfo.Title);
    this.parent.stepNum = 0;
    this.plateContainer = this.parent.getPlateContainer();
    this.subHeaderParams = {
      plateInfo: this.plateContainer.plate.licenseState + ' ' + this.plateContainer.plate.licensePlate
    };
  }

  onOfferButtonSelectionChanged(btnChoiceSelected) {
    this.choiceSelected = btnChoiceSelected;
  }

  goToGridPage() {
    return this.state.go(this.environmentConfig.isMergeMATandVioOn ? frp3_constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Grid : violations_constants__WEBPACK_IMPORTED_MODULE_1__.stateNames.Grid, {}, {
      custom: {
        isExplicitlyAllowedTransition: true
      }
    });
  }

  goToNextPage(nextState) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.choiceSelected === 'yes') {
        yield _this.state.go(nextState);
      } else {
        _this.goToGridPage();
      }
    })();
  }

  previous(prevState) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.state.go(_this2.environmentConfig.isMergeMATandVioOn ? frp3_constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Landing : prevState, {
        custom: {
          isExplicitlyAllowedTransition: true
        }
      });
    })();
  }

}

OfferComponent.ɵfac = function OfferComponent_Factory(t) {
  return new (t || OfferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_4__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_11__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](common_upgrades__WEBPACK_IMPORTED_MODULE_3__.ENVIRON_CONFIG));
};

OfferComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: OfferComponent,
  selectors: [["cavve-offer-component"]],
  inputs: {
    landingPageInfo: "landingPageInfo"
  },
  decls: 20,
  vars: 4,
  consts: [["fxLayout", "column", "fxLayoutAlign", "center start", 1, "u-spacing--widthFill", 2, "padding-top", "21px"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "u-spacing--widthFill"], [3, "template", "data"], ["fxLayout", "column", "fxLayoutAlign", "center start", 1, "u-spacing--widthFill", 2, "padding-top", "20.5px"], ["fxLayout", "row"], [3, "innerHtml"], ["fxLayout", "column", "fxLayoutAlign", "center start", 1, "u-spacing--widthFill", 2, "padding-top", "8px", "padding-bottom", "32px"], [3, "choiceSelectedChange"], ["fxLayout", "column", 1, "u-spacing--widthFill", 2, "padding-top", "8px"], [3, "disabled", "next", "previous"], ["wizard-next", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"]],
  template: function OfferComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "page-filled-container")(1, "section", 0)(2, "div", 1)(3, "header")(4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "cms-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "section", 3)(8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "section", 6)(11, "div", 4)(12, "cavve-offer-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("choiceSelectedChange", function OfferComponent_Template_cavve_offer_button_choiceSelectedChange_12_listener($event) {
        return ctx.onOfferButtonSelectionChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "section", 8)(14, "wizard-ui", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("next", function OfferComponent_Template_wizard_ui_next_14_listener($event) {
        return ctx.goToNextPage($event);
      })("previous", function OfferComponent_Template_wizard_ui_previous_14_listener($event) {
        return ctx.previous($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "CONTINUE");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "mat-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("template", ctx.landingPageInfo.subHeader)("data", ctx.subHeaderParams);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHtml", ctx.landingPageInfo.LongDescription, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.choiceSelected === "");
    }
  },
  directives: [_common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_5__.PageFilledContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutAlignDirective, _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_6__.CmsContentComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__.MatDivider, _offerButton_component__WEBPACK_IMPORTED_MODULE_7__.OfferButtonComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_8__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_9__.WizardNextDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon],
  styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n  padding-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmVyLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFUSxXQUFBO0FBSFI7QUFDQTtFQU1RLGdCQUFBO0VBQ0Esb0JBQUE7QUFKUiIsImZpbGUiOiJvZmZlci5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 64456:
/*!**************************************************!*\
  !*** ./src/cavve/offer/offerButton.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferButtonComponent": () => (/* binding */ OfferButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var animations_collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animations/collapse */ 16573);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ 2225);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 73748);
/* harmony import */ var common_upgrades__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/upgrades */ 41034);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frame/frame.component */ 50321);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _paymentSummary_paymentSummary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../paymentSummary/paymentSummary.component */ 29052);
/* harmony import */ var _pipes_collapsedClass_collapsedClass_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/collapsedClass/collapsedClass.pipe */ 20571);














const _c0 = ["yesPaymentSummary"];
const _c1 = function () { return { "width": "962px" }; };
const _c2 = function () { return { "width": "100%" }; };
const _c3 = function (a0) { return { "selected": a0 }; };
const _c4 = function () { return { "width": "100%", "padding-bottom": "5px" }; };
const _c5 = function (a0) { return { height: a0 }; };
const _c6 = function (a0, a1) { return { value: a0, params: a1 }; };
const _c7 = function () { return { "width": "100%", "padding-bottom": "27px" }; };
const _c8 = function () { return { height: "288px" }; };
class OfferButtonComponent {
    constructor(parent, environmentConfig) {
        this.parent = parent;
        this.environmentConfig = environmentConfig;
        this.choiceSelected = '';
        this.choiceSelectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    }
    ngOnInit() {
        this.createAccountFromViolationsTotals = this.parent.createAccountFromViolationsTotals;
        this.isFrp3 = this.environmentConfig.isMergeMATandVioOn;
        this.paymentSummaryYesCollapsed = false;
        this.paymentSummaryNoCollapsed = false;
        this.yesSummary = _constants__WEBPACK_IMPORTED_MODULE_1__.animationStates.Open;
        this.noSummary = _constants__WEBPACK_IMPORTED_MODULE_1__.animationStates.Open;
    }
    toggleYes() {
        this.yesSummary = this.yesSummary === _constants__WEBPACK_IMPORTED_MODULE_1__.animationStates.Closed ? _constants__WEBPACK_IMPORTED_MODULE_1__.animationStates.Open : _constants__WEBPACK_IMPORTED_MODULE_1__.animationStates.Closed;
        this.paymentSummaryYesCollapsed = !this.paymentSummaryYesCollapsed;
    }
    toggleNo() {
        this.noSummary = this.noSummary === _constants__WEBPACK_IMPORTED_MODULE_1__.animationStates.Closed ? _constants__WEBPACK_IMPORTED_MODULE_1__.animationStates.Open : _constants__WEBPACK_IMPORTED_MODULE_1__.animationStates.Closed;
        this.paymentSummaryNoCollapsed = !this.paymentSummaryNoCollapsed;
    }
    updateValue() {
        this.choiceSelectedChange.emit(this.choiceSelected);
    }
}
OfferButtonComponent.ɵfac = function OfferButtonComponent_Factory(t) { return new (t || OfferButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](common_upgrades__WEBPACK_IMPORTED_MODULE_2__.ENVIRON_CONFIG)); };
OfferButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: OfferButtonComponent, selectors: [["cavve-offer-button"]], viewQuery: function OfferButtonComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.yesPaymentSummary = _t.first);
    } }, inputs: { choiceSelected: "choiceSelected" }, outputs: { choiceSelectedChange: "choiceSelectedChange" }, decls: 58, vars: 72, consts: [["fxLayout", "column", "fxLayoutAlign", "start start", 1, "u-spacing--widthFill"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutAlign", "space-between start", 3, "ngStyle", "ngStyle.lt-md"], [1, "unSelected", 3, "ngClass", "ngStyle.lt-md"], ["fxLayout", "column", "fxLayoutAlign", "start start"], ["fxLayout", "row", "fxLayoutAlign", "start start"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "radioColumn"], ["type", "radio", "id", "acceptOfferRdo", "value", "yes", "name", "offerRdo", 3, "ngModel", "ngModelChange", "change"], ["AcceptOfferRdo", "ngModel"], ["for", "acceptOfferRdo"], ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "displayColumn"], [1, "radioLabel"], [1, "totalDisplay"], [3, "value"], [1, "totalLabel"], [1, "paymentDisplayLabel"], ["fxLayout", "row", "fxLayoutAlign", "start start", 1, "clickable", 3, "click"], ["fxFlexOffset", "5px"], [3, "ngClass"], [1, "paymentSummary"], ["fxLayout", "row", "fxLayoutAlign", "start start", 3, "ngStyle.lt-md"], ["id", "paymentSummary", 3, "ngStyle.lt-md"], [3, "isCreateAccount", "fees", "choiceSelected"], ["yesPaymentSummary", ""], ["fxFlexOffset.lt-md", "8px", 1, "unSelected", 3, "ngClass", "ngStyle.lt-md"], ["type", "radio", "id", "rejectOfferRdo", "value", "no", "name", "offerRdo", 3, "ngModel", "ngModelChange", "change"], ["RejectOfferRdo", "ngModel"], ["for", "rejectOfferRdo"], ["id", "paymentSummaryNoAccount", 3, "ngStyle.lt-md"]], template: function OfferButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "main")(1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function OfferButtonComponent_Template_input_ngModelChange_7_listener($event) { return ctx.choiceSelected = $event; })("change", function OfferButtonComponent_Template_input_change_7_listener() { return ctx.updateValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 9)(11, "div")(12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Yes, Create My Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div")(15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "currency", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "\u00A0TOTAL TODAY");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 14)(20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function OfferButtonComponent_Template_div_click_20_listener() { return ctx.toggleYes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "collapsedClass");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 16)(25, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "View Payment Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 19)(28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "cavve-payment-summary", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 23)(32, "div", 3)(33, "div", 4)(34, "div", 5)(35, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function OfferButtonComponent_Template_input_ngModelChange_35_listener($event) { return ctx.choiceSelected = $event; })("change", function OfferButtonComponent_Template_input_change_35_listener() { return ctx.updateValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 9)(39, "div")(40, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, " No, Don't Create My Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div")(43, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "currency", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "\u00A0TOTAL TODAY");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 14)(48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function OfferButtonComponent_Template_div_click_48_listener() { return ctx.toggleNo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](51, "collapsedClass");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 16)(53, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "View Payment Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 19)(56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](57, "cavve-payment-summary", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](32, _c1))("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](33, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](34, _c3, ctx.choiceSelected === "yes"))("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](36, _c4))("@slideYes", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](39, _c6, ctx.yesSummary, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](37, _c5, _r1.isAdjustmentsZero ? "338px" : "388px")));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@slideYes", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](44, _c6, ctx.yesSummary, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](42, _c5, _r1.isAdjustmentsZero ? "338px" : "388px")));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.choiceSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.createAccountFromViolationsTotals.createAccountPlateTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 28, ctx.paymentSummaryYesCollapsed));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](47, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](48, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@collapse", ctx.paymentSummaryYesCollapsed)("isCreateAccount", true)("fees", ctx.createAccountFromViolationsTotals)("choiceSelected", ctx.choiceSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](49, _c3, ctx.choiceSelected === "no"))("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](51, _c7))("@slideNo", ctx.isFrp3 ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](54, _c6, ctx.noSummary, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](52, _c5, _r1.isAdjustmentsZero ? "290px" : "340px")) : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](58, _c6, ctx.noSummary, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](57, _c8)));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@slideNo", ctx.isFrp3 ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](63, _c6, ctx.noSummary, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](61, _c5, _r1.isAdjustmentsZero ? "290px" : "340px")) : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](67, _c6, ctx.noSummary, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](66, _c8)));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.choiceSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.createAccountFromViolationsTotals.dontCreateAccountPlateTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](51, 30, ctx.paymentSummaryNoCollapsed));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](70, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](71, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@collapse", ctx.paymentSummaryNoCollapsed)("isCreateAccount", false)("fees", ctx.createAccountFromViolationsTotals)("choiceSelected", ctx.choiceSelected);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__.DefaultStyleDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__.DefaultClassDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_4__.CurrencyComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexOffsetDirective, _paymentSummary_paymentSummary_component__WEBPACK_IMPORTED_MODULE_5__.PaymentSummaryComponent], pipes: [_pipes_collapsedClass_collapsedClass_pipe__WEBPACK_IMPORTED_MODULE_6__.CollapsedClassPipe], styles: ["[_nghost-%COMP%]   input[type='radio'][_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 23px;\n  width: 23px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n[_nghost-%COMP%]   .selected[_ngcontent-%COMP%] {\n  background-color: #e0e0ef;\n  box-shadow: 0px 0px 0px 1px #2b90ff;\n}\n[_nghost-%COMP%]   .unSelected[_ngcontent-%COMP%] {\n  border-width: 2px;\n  border-style: solid;\n  border-color: #d1d1d5;\n  border-radius: 10px;\n  height: 136px;\n  width: 473px;\n}\n[_nghost-%COMP%]   .radioLabel[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: 'Jost';\n}\n[_nghost-%COMP%]   .totalDisplay[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .totalLabel[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #757575;\n}\n[_nghost-%COMP%]   .paymentDisplayLabel[_ngcontent-%COMP%] {\n  padding-top: 14px;\n}\n[_nghost-%COMP%]   .yesStretched[_ngcontent-%COMP%] {\n  padding-top: 90px;\n}\n[_nghost-%COMP%]   .noStretched[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n[_nghost-%COMP%]   .radioColumn[_ngcontent-%COMP%] {\n  width: 43px;\n  padding-top: 20px;\n}\n[_nghost-%COMP%]   .displayColumn[_ngcontent-%COMP%] {\n  height: 136px;\n  padding-top: 20px;\n}\n[_nghost-%COMP%]   .paymentSummary[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmVyQnV0dG9uLmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xcdGFibGUubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxmb250cy5sZXNzIiwiLi5cXC4uXFxzdHlsZXNcXHRoZW1lXFxtaXhpbnNcXHBhZ2UubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVRLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFGUjtBQUpBO0VDa0JJLHlCQUFBO0VEUEksbUNBQUE7QUFIUjtBQVJBO0VBZVEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUpSO0FBaEJBO0VBd0JRLGVBQUE7RUFDQSxpQkFBQTtFRXZCSixtQkFBQTtBRm1CSjtBQXJCQTtFQThCUSxlQUFBO0VBQ0EsaUJBQUE7QUFOUjtBQXpCQTtFQW1DUSxlQUFBO0VHZ0JKLGNBQUE7QUh0Qko7QUE3QkE7RUF3Q1EsaUJBQUE7QUFSUjtBQWhDQTtFQTRDUSxpQkFBQTtBQVRSO0FBbkNBO0VBZ0RRLGlCQUFBO0FBVlI7QUF0Q0E7RUFvRFEsV0FBQTtFQUNBLGlCQUFBO0FBWFI7QUExQ0E7RUF5RFEsYUFBQTtFQUNBLGlCQUFBO0FBWlI7QUE5Q0E7RUE4RFEsZUFBQTtBQWJSIiwiZmlsZSI6Im9mZmVyQnV0dG9uLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgaW5wdXRbdHlwZT0ncmFkaW8nXSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAyM3B4O1xuICAgICAgICB3aWR0aDogMjNweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cblxuICAgIC5zZWxlY3RlZCB7XG4gICAgICAgIC50LXRhYmxlX19lbXBoYXNpcy0tYmFja2dyb3VuZENvbG9yKEB0aGVtZS1saWdodCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCByZ2IoNDMsIDE0NCwgMjU1KTtcbiAgICB9XG5cbiAgICAudW5TZWxlY3RlZCB7XG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYigyMDksIDIwOSwgMjEzKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMzZweDtcbiAgICAgICAgd2lkdGg6IDQ3M3B4O1xuICAgIH1cblxuICAgIC5yYWRpb0xhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgLnQtaGVhZGVyLS1mb250RmFtaWx5KCk7XG4gICAgfVxuXG4gICAgLnRvdGFsRGlzcGxheSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLnRvdGFsTGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIC50LWxhYmVsLS1jb2xvcihAdGhlbWUtbGlnaHQpO1xuICAgIH1cblxuICAgIC5wYXltZW50RGlzcGxheUxhYmVsIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDE0cHg7XG4gICAgfVxuXG4gICAgLnllc1N0cmV0Y2hlZCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA5MHB4O1xuICAgIH1cblxuICAgIC5ub1N0cmV0Y2hlZCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIH1cblxuICAgIC5yYWRpb0NvbHVtbiB7XG4gICAgICAgIHdpZHRoOiA0M3B4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAuZGlzcGxheUNvbHVtbiB7XG4gICAgICAgIGhlaWdodDogMTM2cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5wYXltZW50U3VtbWFyeSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cblxuQHRhYmxlX19oZWFkZXItLWJhY2tncm91bmRDb2xvci1saWdodDogQGF0aGVucy1ncmF5O1xuQHRhYmxlX19ib2R5LS1iYWNrZ3JvdW5kQ29sb3ItbGlnaHQ6IEB3aWxkLXNhbmQtZ3JheTtcbkB0YWJsZV9fZW1waGFzaXMtLWJhY2tncm91bmRDb2xvci1saWdodDogQHNudWZmLWdyYXk7XG5cblxuLnQtdGFibGVfX2hlYWRlci0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3RhYmxlX19oZWFkZXItLWJhY2tncm91bmRDb2xvci1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtdGFibGVfX2JvZHktLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICd0YWJsZV9fYm9keS0tYmFja2dyb3VuZENvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC10YWJsZV9fZW1waGFzaXMtLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICd0YWJsZV9fZW1waGFzaXMtLWJhY2tncm91bmRDb2xvci1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG4udC1oZWFkZXItLWZvbnRGYW1pbHkoKSB7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LWpvc3Q7XG59XG5cbi50LWJvZHktLWZvbnRGYW1pbHkoKSB7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LW1vbnRzZXJyYXQ7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cblxuQGJvZHktLWJhY2tncm91bmRDb2xvci1saWdodDogQHdoaXRlO1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjItbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AYm9keS0tY29sb3ItbGlnaHQ6IEB0dW5hLWdyYXk7XG5AYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3ItbGlnaHQ6IEB0cm9waWNhbC1yYWluLWZvcmVzdC1ncmVlbjtcbkBib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1saWdodDogQHNpbHZlci1ncmF5O1xuQGhlYWRlci0tY29sb3ItbGlnaHQ6IEB0dW5hLWdyYXk7XG5AbGFiZWwtLWNvbG9yLWxpZ2h0OiBAYm91bGRlci1ncmF5O1xuQHNlbGVjdF9fYXJyb3ctLWNvbG9yLWxpZ2h0OiBAc2NvcnBpb24tZ3JheTtcbkBsaW5rLS1jb2xvci1saWdodDogQGF6dXJlLXJhZGlhbmNlLWJsdWU7XG5AZGl2aWRlci0tYm9yZGVyQ29sb3ItbGlnaHQ6IEBzY2hvb2wtYnVzLXllbGxvdztcblxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IyKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvcjItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjMoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMy1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWhlYWRlci0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnaGVhZGVyLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWxhYmVsLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdsYWJlbC0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1zZWxlY3RfX2Fycm93LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdzZWxlY3RfX2Fycm93LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWxpbmstLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xpbmstLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvciAhaW1wb3J0YW50OyAvLyBtYXJrZWQgYXMgIWltcG9ydGFudCB0byBvdmVycmlkZSBib290c3RyYXBcbn1cblxuLnQtZGl2aWRlci0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnZGl2aWRlci0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtZGl2aWRlcl9fZGFzaC0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cbiJdfQ== */"], data: { animation: [animations_collapse__WEBPACK_IMPORTED_MODULE_0__.collapseTrigger,
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('slideYes', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)(_constants__WEBPACK_IMPORTED_MODULE_1__.animationStates.Open, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
                    height: '{{height}}'
                }), { params: { height: '338px' } }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)(_constants__WEBPACK_IMPORTED_MODULE_1__.animationStates.Closed, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
                    height: '136px'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('open => closed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('100ms ease-in-out')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('closed => open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('100ms ease-in-out'))
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('slideNo', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)(_constants__WEBPACK_IMPORTED_MODULE_1__.animationStates.Open, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
                    height: '{{height}}'
                }), { params: { height: '288px' } }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)(_constants__WEBPACK_IMPORTED_MODULE_1__.animationStates.Closed, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
                    height: '136px'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('open => closed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('100ms ease-in-out')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('closed => open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('100ms ease-in-out'))
            ])] } });


/***/ }),

/***/ 92912:
/*!*****************************************************************!*\
  !*** ./src/cavve/paymentSummary/invoiced/invoiced.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicedComponent": () => (/* binding */ InvoicedComponent)
/* harmony export */ });
/* harmony import */ var violationsCommon_components_violationsDetails_invoiced_invoicedDetails_invoicedDetails_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! violationsCommon/components/violationsDetails/invoiced/invoicedDetails/invoicedDetails.component */ 40063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/ui/containers/fxRow/fxRow.component */ 47553);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/dateWithTimeZone/dateWithTimeZone.pipe */ 29719);








const _c0 = function () { return { "extended-row": false }; };
class InvoicedComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    openTollDetailsModal() {
        this.dialogService.openSliderFilled(violationsCommon_components_violationsDetails_invoiced_invoicedDetails_invoicedDetails_component__WEBPACK_IMPORTED_MODULE_0__.InvoicedDetailsComponent, {
            invoiced: this.invoiced,
            plate: this.plate, isPreviousPaid: false
        }, { title: 'Invoice Details', hasBack: true, hasClose: false });
    }
}
InvoicedComponent.ɵfac = function InvoicedComponent_Factory(t) { return new (t || InvoicedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_1__.DialogService)); };
InvoicedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: InvoicedComponent, selectors: [["cavve-violations-invoiced"]], inputs: { tollDetailsTitle: "tollDetailsTitle", plate: "plate", invoiced: "invoiced" }, decls: 16, vars: 10, consts: [["ngClass", "extended-row", 3, "ngClass.lt-md"], [1, "clickable", 3, "backgroundColorClass", "click"], ["col-start", "", 1, "fx-flex-auto", "fx-layout-row", "fx-layout-align-start-center"], [1, "fx-flex-auto-shrink-more", "limited-flex"], [1, "fx-layout-row", "fx-layout-align-start-center", "u--noUnderline"], ["translation-skip", "", 1, "fx-flex-none", "violationId--width"], [1, "fx-flex-none", "glyphicon", "glyphicon-chevron-right"], ["fxShow", "", "fxHide.lt-md", "", 1, "fx-flex-auto-shrink-more", "limited-flex"], ["translation-skip", "", "fxShow", "", "fxHide.lt-md", "", 1, "fx-flex-auto-grow-more", "unlimited-flex"], ["col-end", "", 1, "fx-flex-none", "fx-layout-row", "fx-layout-align-end-center"], [1, "fx-flex-auto", "limited-flex-end"], [3, "value"]], template: function InvoicedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 0)(1, "fx-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InvoicedComponent_Template_fx_row_click_1_listener() { return ctx.openTollDetailsModal(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("backgroundColorClass", "white-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.invoiced.invoiceNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](10, 6, ctx.invoiced.dueDate, "date1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.invoiced.agencyName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.invoiced.invoiceDueBeforeDiscount);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultClassDirective, _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_2__.FxRowComponent, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultShowHideDirective, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_3__.CurrencyComponent], pipes: [_pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_4__.DateWithTimeZonePipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n[_nghost-%COMP%]   .rows[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 469px;\n}\n[_nghost-%COMP%]   .rowsConfirm[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 566px;\n}\n[_nghost-%COMP%]   .topRow[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 469px;\n  border-top: 2px solid #d1d1d5;\n  border-bottom: 2px solid #d1d1d5;\n}\n[_nghost-%COMP%]   .topRowConfirm[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 566px;\n  border-top: 0px;\n  border-bottom: 1px solid #e0e0ef;\n}\n[_nghost-%COMP%]   .bottomRow[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 469px;\n  border-top: 2px solid #d1d1d5;\n}\n[_nghost-%COMP%]   .bottomRowConfirm[_ngcontent-%COMP%] {\n  height: 49px;\n  width: 566px;\n  border-top: 0px;\n  background-color: #e0e0ef;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n[_nghost-%COMP%]   .fields[_ngcontent-%COMP%] {\n  padding-left: 14px;\n}\n[_nghost-%COMP%]   .greenFields[_ngcontent-%COMP%] {\n  color: #018749;\n  padding-left: 14px;\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .values[_ngcontent-%COMP%] {\n  padding-right: 14px;\n}\n[_nghost-%COMP%]   .greenValues[_ngcontent-%COMP%] {\n  color: #018749;\n  padding-right: 14px;\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .rowSelected[_ngcontent-%COMP%] {\n  background-color: #efeff4;\n  border-top: 2px solid white;\n  border-bottom: 2px solid white;\n}\n[_nghost-%COMP%]   .totalRowSelected[_ngcontent-%COMP%] {\n  border-top: 2px solid white;\n}\n[_nghost-%COMP%]   .confirmBorder[_ngcontent-%COMP%] {\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e0e0ef;\n  border-radius: 10px;\n  height: 248px;\n  width: 566px;\n}\n[_nghost-%COMP%]   #tollViolationsLabel[_ngcontent-%COMP%] {\n  color: #007aff !important;\n  padding-left: 14px;\n}\n[_nghost-%COMP%]   .glyphicon.glyphicon-chevron-right[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 100;\n  top: -2px;\n  color: #007aff !important;\n}\n[_nghost-%COMP%]   .border-height[_ngcontent-%COMP%] {\n  height: 248px;\n}\n[_nghost-%COMP%]   .border-height-nondiscount[_ngcontent-%COMP%] {\n  height: 198px;\n}\n[_nghost-%COMP%]   .extended-row[_ngcontent-%COMP%] {\n  margin-left: -20px;\n  margin-right: -20px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n[_nghost-%COMP%]   .extended-row.lt-md[_ngcontent-%COMP%] {\n  margin-left: -14px;\n  margin-right: -14px;\n  padding-left: 14px;\n  padding-right: 14px;\n}\n[_nghost-%COMP%]   .glyphicon.glyphicon-chevron-right[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 100;\n  top: -2px;\n}\n[_nghost-%COMP%]   .violationId--width[_ngcontent-%COMP%] {\n  width: 118px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbW1vblxcdWlcXGNvbnRhaW5lcnNcXGZ4Um93XFxkZXRhaWxzLmxlc3MiLCJpbnZvaWNlZC5sZXNzIiwiLi5cXHBheW1lbnRTdW1tYXJ5Lmxlc3MiLCIuLlxcLi5cXC4uXFxzdHlsZXNcXHRoZW1lXFxtaXhpbnNcXHRhYmxlLmxlc3MiLCIuLlxcLi5cXC4uXFxzdHlsZXNcXHRoZW1lXFxtaXhpbnNcXHBhZ2UubGVzcyIsIi4uXFwuLlxcLi5cXHN0eWxlc1xcbWl4aW5zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FDREo7QURBQTtFQUlRLGFBQUE7RUFDQSxrQkFBQTtBQ0RSO0FESkE7RUE4RUksY0FBQTtFQUNBLHNCQUFBO0FDdkVKO0FEUkE7RUFvRkksY0FBQTtFQUNBLHNCQUFBO0FDekVKO0FEWkE7RUF5RkksY0FBQTtFQUNBLHNCQUFBO0FDMUVKO0FEaEJBO0VBOEZJLGNBQUE7RUFDQSxzQkFBQTtBQzNFSjtBRHBCQTtFQW1HSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQzVFSjtBRHpCQTtFQXlHSSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQzdFSjtBRDlCQTtFQStHSSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUM5RUo7QURuQ0E7RUFxSEkscUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDL0VKO0FEeENBO0VBMENRLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ1I7QUQ3Q0E7RUFnRFEsV0FBQTtBQ0FSO0FEaERBO0VBb0RRLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNEUjtBRHREQTtFQTJEUSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNGUjtBRDVEQTtFQWtFUSxlQUFBO0FDSFI7QURLUTtFQUNJLGVBQUE7QUNIWjtBQ2pFQTtFQUVRLFlBQUE7RUFDQSxZQUFBO0FEa0VSO0FDckVBO0VBT1EsWUFBQTtFQUNBLFlBQUE7QURpRVI7QUN6RUE7RUFZUSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QURnRVI7QUMvRUE7RUFtQlEsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUQrRFI7QUNyRkE7RUEwQlEsWUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBRDhEUjtBQzFGQTtFQWdDUSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUNqQkoseUJBQUE7RURtQkksK0JBQUE7RUFDQSxnQ0FBQTtBRDZEUjtBQ2xHQTtFQXlDUSxrQkFBQTtBRDREUjtBQ3JHQTtFRW1DSSxjQUFBO0VGV0ksa0JBQUE7RUFDQSxpQkFBQTtBRDJEUjtBQzFHQTtFQW1EUSxtQkFBQTtBRDBEUjtBQzdHQTtFRW1DSSxjQUFBO0VGcUJJLG1CQUFBO0VBQ0EsaUJBQUE7QUR5RFI7QUNsSEE7RUVvQkkseUJBQUE7RUYwQ0ksMkJBQUE7RUFDQSw4QkFBQTtBRHdEUjtBQ3ZIQTtFQW1FUSwyQkFBQTtBRHVEUjtBQzFIQTtFQXVFUSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FEc0RSO0FDbElBO0VFNERJLHlCQUFBO0VGcUJJLGtCQUFBO0FEcURSO0FDakRRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFRTVCUix5QkFBQTtBSGdGSjtBQzVJQTtFQThGUSxhQUFBO0FEaURSO0FDL0lBO0VBa0dRLGFBQUE7QURnRFI7QUFqSkE7RUljSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBSnNJSjtBQW5KUTtFSWlCSixrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBSnFJSjtBQW5KUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFxSlo7QUFsS0E7RUFrQlEsWUFBQTtBQW1KUiIsImZpbGUiOiJpbnZvaWNlZC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcblxuOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmhpZGRlbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG5cblxuICAgIC5meC1mbGV4LWF1dG8ge1xuICAgICAgICAuZngtZmxleC1hdXRvLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWZsZXgtbm9uZSB7XG4gICAgICAgIC5meC1mbGV4LW5vbmUtbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtZmxleC1hdXRvLXNocmluay1tb3JlIHtcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZS1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlIHtcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1ncm93LW1vcmUtbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LXJvdyB7XG4gICAgICAgIC5meC1sYXlvdXQtcm93LW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1jb2x1bW4ge1xuICAgICAgICAuZngtbGF5b3V0LWNvbHVtbi1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyIHtcbiAgICAgICAgLmZ4LWxheW91dC1hbGlnbi1zdGFydC1jZW50ZXItbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LWFsaWduLWVuZC1jZW50ZXIge1xuICAgICAgICAuZngtbGF5b3V0LWFsaWduLWVuZC1jZW50ZXItbWl4aW4oKTtcbiAgICB9XG5cbiAgICAubGltaXRlZC1mbGV4IHtcbiAgICAgICAgbWluLXdpZHRoOiAxNzBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA1MzBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnVubGltaXRlZC1mbGV4IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmxpbWl0ZWQtZmxleC1lbmQge1xuICAgICAgICBtaW4td2lkdGg6IDcwcHg7XG4gICAgICAgIG1heC13aWR0aDogODBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG5cbiAgICAubGFyZ2VyLWxpbWl0ZWQtZmxleC1lbmQge1xuICAgICAgICBtaW4td2lkdGg6IDE0M3B4O1xuICAgICAgICBtYXgtd2lkdGg6IDE0NXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cblxuICAgIC50YWJsZS1zcGFjZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcblxuICAgICAgICAmLmx0LW1kIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIE1peGlucyB0byBhcHBlYXNlIHBlcmZvcm1hbmNlXG4uZngtZmxleC1hdXRvLW1peGluKCkge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5meC1mbGV4LW5vbmUtbWl4aW4oKSB7XG4gICAgLy8gbGVzc2hpbnQtZGlzYWJsZS1uZXh0LWxpbmUgemVyb1VuaXRcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1hdXRvLXNocmluay1tb3JlLW1peGluKCkge1xuICAgIGZsZXg6IDEgMiBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlLW1peGluKCkge1xuICAgIGZsZXg6IDIgMSBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5meC1sYXlvdXQtcm93LW1peGluKCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZngtbGF5b3V0LWNvbHVtbi1taXhpbigpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZ4LWxheW91dC1hbGlnbi1zdGFydC1jZW50ZXItbWl4aW4oKSB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZngtbGF5b3V0LWFsaWduLWVuZC1jZW50ZXItbWl4aW4oKSB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy9taXhpbnMubGVzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi9jb21tb24vdWkvY29udGFpbmVycy9meFJvdy9kZXRhaWxzLmxlc3MnO1xuQGltcG9ydCAnLi4vcGF5bWVudFN1bW1hcnkubGVzcyc7XG5cbjpob3N0IHtcbiAgICAuZXh0ZW5kZWQtcm93IHtcbiAgICAgICAgLmV4dGVuZGVkLXJvdy1taXhpbjtcblxuICAgICAgICAmLmx0LW1kIHtcbiAgICAgICAgICAgIC5leHRlbmRlZC1yb3ctbHQtbWQtbWl4aW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZ2x5cGhpY29uIHtcbiAgICAgICAgJi5nbHlwaGljb24tY2hldnJvbi1yaWdodCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnZpb2xhdGlvbklkLS13aWR0aCB7XG4gICAgICAgIHdpZHRoOiAxMThweDtcbiAgICB9XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcblxuOmhvc3Qge1xuICAgIC5yb3dzIHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB3aWR0aDogNDY5cHg7XG4gICAgfVxuXG4gICAgLnJvd3NDb25maXJtIHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB3aWR0aDogNTY2cHg7XG4gICAgfVxuXG4gICAgLnRvcFJvdyB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDQ2OXB4O1xuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDIwOSwgMjA5LCAyMTMpO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIwOSwgMjA5LCAyMTMpO1xuICAgIH1cblxuICAgIC50b3BSb3dDb25maXJtIHtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB3aWR0aDogNTY2cHg7XG4gICAgICAgIGJvcmRlci10b3A6IDBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIEBzbnVmZi1ncmF5O1xuICAgIH1cblxuICAgIC5ib3R0b21Sb3cge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHdpZHRoOiA0NjlweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigyMDksIDIwOSwgMjEzKTtcbiAgICB9XG5cbiAgICAuYm90dG9tUm93Q29uZmlybSB7XG4gICAgICAgIGhlaWdodDogNDlweDtcbiAgICAgICAgd2lkdGg6IDU2NnB4O1xuICAgICAgICBib3JkZXItdG9wOiAwcHg7XG4gICAgICAgIC50LXRhYmxlX19lbXBoYXNpcy0tYmFja2dyb3VuZENvbG9yKEB0aGVtZS1saWdodCk7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIH1cblxuICAgIC5maWVsZHMge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gICAgfVxuXG4gICAgLmdyZWVuRmllbGRzIHtcbiAgICAgICAgLnQtYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3IoQHRoZW1lLWxpZ2h0KTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAudmFsdWVzIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTRweDtcbiAgICB9XG5cbiAgICAuZ3JlZW5WYWx1ZXMge1xuICAgICAgICAudC1ib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvcihAdGhlbWUtbGlnaHQpO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAucm93U2VsZWN0ZWQge1xuICAgICAgICAudC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IyKEB0aGVtZS1saWdodCk7XG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICAgIH1cblxuICAgIC50b3RhbFJvd1NlbGVjdGVkIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xuICAgIH1cblxuICAgIC5jb25maXJtQm9yZGVyIHtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogQHNudWZmLWdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGhlaWdodDogMjQ4cHg7XG4gICAgICAgIHdpZHRoOiA1NjZweDtcbiAgICB9XG5cbiAgICAjdG9sbFZpb2xhdGlvbnNMYWJlbCB7XG4gICAgICAgIC50LWxpbmstLWNvbG9yKEB0aGVtZS1saWdodCk7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTRweDtcbiAgICB9XG5cbiAgICAuZ2x5cGhpY29uIHtcbiAgICAgICAgJi5nbHlwaGljb24tY2hldnJvbi1yaWdodCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICAgICAgLnQtbGluay0tY29sb3IoQHRoZW1lLWxpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ib3JkZXItaGVpZ2h0IHtcbiAgICAgICAgaGVpZ2h0OiAyNDhweDtcbiAgICB9XG5cbiAgICAuYm9yZGVyLWhlaWdodC1ub25kaXNjb3VudCB7XG4gICAgICAgIGhlaWdodDogMTk4cHg7XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbkB0YWJsZV9faGVhZGVyLS1iYWNrZ3JvdW5kQ29sb3ItbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkB0YWJsZV9fYm9keS0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAd2lsZC1zYW5kLWdyYXk7XG5AdGFibGVfX2VtcGhhc2lzLS1iYWNrZ3JvdW5kQ29sb3ItbGlnaHQ6IEBzbnVmZi1ncmF5O1xuXG5cbi50LXRhYmxlX19oZWFkZXItLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICd0YWJsZV9faGVhZGVyLS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXRhYmxlX19ib2R5LS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAndGFibGVfX2JvZHktLWJhY2tncm91bmRDb2xvci1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtdGFibGVfX2VtcGhhc2lzLS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAndGFibGVfX2VtcGhhc2lzLS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cblxuQGJvZHktLWJhY2tncm91bmRDb2xvci1saWdodDogQHdoaXRlO1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjItbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AYm9keS0tY29sb3ItbGlnaHQ6IEB0dW5hLWdyYXk7XG5AYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3ItbGlnaHQ6IEB0cm9waWNhbC1yYWluLWZvcmVzdC1ncmVlbjtcbkBib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1saWdodDogQHNpbHZlci1ncmF5O1xuQGhlYWRlci0tY29sb3ItbGlnaHQ6IEB0dW5hLWdyYXk7XG5AbGFiZWwtLWNvbG9yLWxpZ2h0OiBAYm91bGRlci1ncmF5O1xuQHNlbGVjdF9fYXJyb3ctLWNvbG9yLWxpZ2h0OiBAc2NvcnBpb24tZ3JheTtcbkBsaW5rLS1jb2xvci1saWdodDogQGF6dXJlLXJhZGlhbmNlLWJsdWU7XG5AZGl2aWRlci0tYm9yZGVyQ29sb3ItbGlnaHQ6IEBzY2hvb2wtYnVzLXllbGxvdztcblxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IyKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvcjItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjMoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMy1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWhlYWRlci0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnaGVhZGVyLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWxhYmVsLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdsYWJlbC0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1zZWxlY3RfX2Fycm93LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdzZWxlY3RfX2Fycm93LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWxpbmstLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xpbmstLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvciAhaW1wb3J0YW50OyAvLyBtYXJrZWQgYXMgIWltcG9ydGFudCB0byBvdmVycmlkZSBib290c3RyYXBcbn1cblxuLnQtZGl2aWRlci0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnZGl2aWRlci0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtZGl2aWRlcl9fZGFzaC0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cbiIsIi8vIERFUFJFQ0FURUQgRklMRSAtIFBsZWFzZSBkZWxldGUgYWZ0ZXIgUmVmcmVzaCBlZmZvcnRcblxuQGltcG9ydCAocmVmZXJlbmNlKSAndmFyaWFibGVzLmxlc3MnO1xuXG4vKiBmb250cyAqL1xuLmF2ZW5pci04NS1oZWF2eSB7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXIgTFQgU3RkIDg1IEhlYXZ5IFJlZ3VsYXInO1xufVxuXG5cbi8qIGNvbG9ycyAqL1xuLmRhcmstcHVycGxlLXRleHQge1xuICAgIGNvbG9yOiBAdmFsZW50aW5vLXB1cnBsZTtcbn1cblxuXG4vKiByb3cgc3BhY2luZyAqL1xuLmV4dGVuZGVkLXJvdy1taXhpbigpIHtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmV4dGVuZGVkLXJvdy1sdC1tZC1taXhpbigpIHtcbiAgICBtYXJnaW4tbGVmdDogLUBwYWdlLWJhci1tYXJnaW4tc3RhdGljLWx0LW1kO1xuICAgIG1hcmdpbi1yaWdodDogLUBwYWdlLWJhci1tYXJnaW4tc3RhdGljLWx0LW1kO1xuICAgIHBhZGRpbmctbGVmdDogQHBhZ2UtYmFyLW1hcmdpbi1zdGF0aWMtbHQtbWQ7XG4gICAgcGFkZGluZy1yaWdodDogQHBhZ2UtYmFyLW1hcmdpbi1zdGF0aWMtbHQtbWQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ 29052:
/*!**************************************************************!*\
  !*** ./src/cavve/paymentSummary/paymentSummary.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentSummaryComponent": () => (/* binding */ PaymentSummaryComponent)
/* harmony export */ });
/* harmony import */ var _tollViolationsModal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tollViolationsModal.component */ 3170);
/* harmony import */ var common_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/utilities */ 56516);
/* harmony import */ var common_upgrades__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/upgrades */ 41034);
/* harmony import */ var decimal_js_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! decimal.js-light */ 75671);
/* harmony import */ var decimal_js_light__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(decimal_js_light__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../frame/frame.component */ 50321);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);











const _c0 = function (a0, a1) { return { "rowSelected": a0, "rowsConfirm": a1 }; };
const _c1 = function () { return { "width": "100%" }; };
function PaymentSummaryComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 14)(2, "div", 2)(3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Adjustments");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 2)(6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "currency", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](3, _c0, ctx_r0.isCreateAccount && ctx_r0.choiceSelected === "yes" || !ctx_r0.isCreateAccount && ctx_r0.choiceSelected === "no", ctx_r0.isConfirmPage))("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.adjustments);
} }
function PaymentSummaryComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "section", 14)(2, "div", 2)(3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Starting Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 2)(6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "currency", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "section", 14)(9, "div", 2)(10, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "EZ TAG Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 2)(13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "currency", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c0, ctx_r1.isCreateAccount && ctx_r1.choiceSelected === "yes" || !ctx_r1.isCreateAccount && ctx_r1.choiceSelected === "no", ctx_r1.isConfirmPage))("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](11, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r1.fees.createAccountStartingBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](12, _c0, ctx_r1.isCreateAccount && ctx_r1.choiceSelected === "yes" || !ctx_r1.isCreateAccount && ctx_r1.choiceSelected === "no", ctx_r1.isConfirmPage))("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](15, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r1.fees.createAccountEZTagFee);
} }
function PaymentSummaryComponent_section_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 14)(1, "div", 2)(2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Admin Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2)(5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "currency", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](3, _c0, ctx_r2.isCreateAccount && ctx_r2.choiceSelected === "yes" || !ctx_r2.isCreateAccount && ctx_r2.choiceSelected === "no", ctx_r2.isConfirmPage))("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r2.fees.serviceFee);
} }
const _c2 = function (a0, a1, a2) { return { "confirmBorder": a0, "border-height": a1, "border-height-nondiscount": a2 }; };
const _c3 = function (a0, a1) { return { "rowSelected": a0, "topRowConfirm": a1 }; };
const _c4 = function (a0, a1) { return { "totalRowSelected": a0, "bottomRowConfirm": a1 }; };
class PaymentSummaryComponent {
    constructor(parent, dialogService, environmentConfig) {
        this.parent = parent;
        this.dialogService = dialogService;
        this.environmentConfig = environmentConfig;
    }
    ngOnInit() {
        this.isCreateAccount = this.isCreateAccount || false;
        this.isFrp3 = this.environmentConfig.isMergeMATandVioOn;
        this.tollSummary = {
            totalViolationsDue: this.fees.totalViolationsDue
        };
        this.adjustments = this.isCreateAccount || this.isConfirmPage ? new decimal_js_light__WEBPACK_IMPORTED_MODULE_3__.Decimal(this.fees.createAccountDiscount) : new decimal_js_light__WEBPACK_IMPORTED_MODULE_3__.Decimal(this.fees.totalFeesDiscountedDontCreateAccount);
    }
    openTollViolationsModal() {
        const data = {
            tollSummaryDetails: (0,common_utilities__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(this.tollSummary),
            plate: this.parent.getPlateContainer().plate
        };
        this.dialogService.openSliderFilled(_tollViolationsModal_component__WEBPACK_IMPORTED_MODULE_0__.TollViolationsModalComponent, data, { title: 'Toll Transactions' });
    }
    get isAdjustmentsZero() {
        return this.adjustments ? this.adjustments.isZero() : this.adjustments;
    }
}
PaymentSummaryComponent.ɵfac = function PaymentSummaryComponent_Factory(t) { return new (t || PaymentSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_4__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_5__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](common_upgrades__WEBPACK_IMPORTED_MODULE_2__.ENVIRON_CONFIG)); };
PaymentSummaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PaymentSummaryComponent, selectors: [["cavve-payment-summary"]], inputs: { fees: "fees", isCreateAccount: "isCreateAccount", isConfirmPage: "isConfirmPage", choiceSelected: "choiceSelected" }, decls: 20, vars: 24, consts: [[3, "ngClass", "ngStyle.lt-md"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "topRow", 3, "ngClass", "ngStyle.lt-md"], ["fxLayout", "column", "fxLayoutAlign", "center start"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["id", "tollViolationsLabel", 1, "clickable", 3, "click"], ["fxFlexOffset", "5px", 1, "fx-flex-none", "glyphicon", "glyphicon-chevron-right"], [1, "values"], [3, "value"], [4, "ngIf"], [3, "ngStyle.lt-md", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "class", "rows", 3, "ngClass", "ngStyle.lt-md", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "bottomRow", 3, "ngClass", "ngStyle.lt-md"], [1, "fields", 2, "font-weight", "bold"], [1, "values", 2, "font-weight", "bold"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "rows", 3, "ngClass", "ngStyle.lt-md"], [1, "greenFields"], [1, "greenValues"], [3, "ngStyle.lt-md"], [1, "fields"]], template: function PaymentSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentSummaryComponent_Template_span_click_4_listener() { return ctx.openTollViolationsModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Toll Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 2)(8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "currency", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, PaymentSummaryComponent_ng_container_10_Template, 9, 7, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, PaymentSummaryComponent_div_11_Template, 15, 16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, PaymentSummaryComponent_section_12_Template, 7, 7, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "section", 11)(14, "div", 2)(15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Total Due Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 2)(18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "currency", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](11, _c2, ctx.isConfirmPage === true, !ctx.adjustments.isZero(), ctx.adjustments.isZero()))("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](15, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](16, _c3, ctx.isCreateAccount && ctx.choiceSelected === "yes" || !ctx.isCreateAccount && ctx.choiceSelected === "no", ctx.isConfirmPage))("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](19, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.fees.totalViolationsDue);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.adjustments.isZero());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isCreateAccount || ctx.isConfirmPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isCreateAccount && ctx.isFrp3 && !ctx.isConfirmPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](20, _c4, ctx.isCreateAccount && ctx.choiceSelected === "yes" || !ctx.isCreateAccount && ctx.choiceSelected === "no", ctx.isConfirmPage))("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](23, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.isCreateAccount || ctx.isConfirmPage ? ctx.fees.createAccountPlateTotal : ctx.fees.dontCreateAccountPlateTotal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultClassDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultStyleDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexOffsetDirective, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_6__.CurrencyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf], styles: ["[_nghost-%COMP%]   .rows[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 469px;\n}\n[_nghost-%COMP%]   .rowsConfirm[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 566px;\n}\n[_nghost-%COMP%]   .topRow[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 469px;\n  border-top: 2px solid #d1d1d5;\n  border-bottom: 2px solid #d1d1d5;\n}\n[_nghost-%COMP%]   .topRowConfirm[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 566px;\n  border-top: 0px;\n  border-bottom: 1px solid #e0e0ef;\n}\n[_nghost-%COMP%]   .bottomRow[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 469px;\n  border-top: 2px solid #d1d1d5;\n}\n[_nghost-%COMP%]   .bottomRowConfirm[_ngcontent-%COMP%] {\n  height: 49px;\n  width: 566px;\n  border-top: 0px;\n  background-color: #e0e0ef;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n[_nghost-%COMP%]   .fields[_ngcontent-%COMP%] {\n  padding-left: 14px;\n}\n[_nghost-%COMP%]   .greenFields[_ngcontent-%COMP%] {\n  color: #018749;\n  padding-left: 14px;\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .values[_ngcontent-%COMP%] {\n  padding-right: 14px;\n}\n[_nghost-%COMP%]   .greenValues[_ngcontent-%COMP%] {\n  color: #018749;\n  padding-right: 14px;\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .rowSelected[_ngcontent-%COMP%] {\n  background-color: #efeff4;\n  border-top: 2px solid white;\n  border-bottom: 2px solid white;\n}\n[_nghost-%COMP%]   .totalRowSelected[_ngcontent-%COMP%] {\n  border-top: 2px solid white;\n}\n[_nghost-%COMP%]   .confirmBorder[_ngcontent-%COMP%] {\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e0e0ef;\n  border-radius: 10px;\n  height: 248px;\n  width: 566px;\n}\n[_nghost-%COMP%]   #tollViolationsLabel[_ngcontent-%COMP%] {\n  color: #007aff !important;\n  padding-left: 14px;\n}\n[_nghost-%COMP%]   .glyphicon.glyphicon-chevron-right[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 100;\n  top: -2px;\n  color: #007aff !important;\n}\n[_nghost-%COMP%]   .border-height[_ngcontent-%COMP%] {\n  height: 248px;\n}\n[_nghost-%COMP%]   .border-height-nondiscount[_ngcontent-%COMP%] {\n  height: 198px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnRTdW1tYXJ5Lmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xcdGFibGUubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxwYWdlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFUSxZQUFBO0VBQ0EsWUFBQTtBQUhSO0FBQUE7RUFPUSxZQUFBO0VBQ0EsWUFBQTtBQUpSO0FBSkE7RUFZUSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFMUjtBQVZBO0VBbUJRLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBTlI7QUFoQkE7RUEwQlEsWUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQVBSO0FBckJBO0VBZ0NRLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQ2pCSix5QkFBQTtFRG1CSSwrQkFBQTtFQUNBLGdDQUFBO0FBUlI7QUE3QkE7RUF5Q1Esa0JBQUE7QUFUUjtBQWhDQTtFRW1DSSxjQUFBO0VGV0ksa0JBQUE7RUFDQSxpQkFBQTtBQVZSO0FBckNBO0VBbURRLG1CQUFBO0FBWFI7QUF4Q0E7RUVtQ0ksY0FBQTtFRnFCSSxtQkFBQTtFQUNBLGlCQUFBO0FBWlI7QUE3Q0E7RUVvQkkseUJBQUE7RUYwQ0ksMkJBQUE7RUFDQSw4QkFBQTtBQWJSO0FBbERBO0VBbUVRLDJCQUFBO0FBZFI7QUFyREE7RUF1RVEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQWZSO0FBN0RBO0VFNERJLHlCQUFBO0VGcUJJLGtCQUFBO0FBaEJSO0FBb0JRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFRTVCUix5QkFBQTtBRldKO0FBdkVBO0VBOEZRLGFBQUE7QUFwQlI7QUExRUE7RUFrR1EsYUFBQTtBQXJCUiIsImZpbGUiOiJwYXltZW50U3VtbWFyeS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICAucm93cyB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDQ2OXB4O1xuICAgIH1cblxuICAgIC5yb3dzQ29uZmlybSB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDU2NnB4O1xuICAgIH1cblxuICAgIC50b3BSb3cge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHdpZHRoOiA0NjlweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigyMDksIDIwOSwgMjEzKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyMDksIDIwOSwgMjEzKTtcbiAgICB9XG5cbiAgICAudG9wUm93Q29uZmlybSB7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgd2lkdGg6IDU2NnB4O1xuICAgICAgICBib3JkZXItdG9wOiAwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBAc251ZmYtZ3JheTtcbiAgICB9XG5cbiAgICAuYm90dG9tUm93IHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB3aWR0aDogNDY5cHg7XG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2IoMjA5LCAyMDksIDIxMyk7XG4gICAgfVxuXG4gICAgLmJvdHRvbVJvd0NvbmZpcm0ge1xuICAgICAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgICAgIHdpZHRoOiA1NjZweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMHB4O1xuICAgICAgICAudC10YWJsZV9fZW1waGFzaXMtLWJhY2tncm91bmRDb2xvcihAdGhlbWUtbGlnaHQpO1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICB9XG5cbiAgICAuZmllbGRzIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICAgIH1cblxuICAgIC5ncmVlbkZpZWxkcyB7XG4gICAgICAgIC50LWJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yKEB0aGVtZS1saWdodCk7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLnZhbHVlcyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE0cHg7XG4gICAgfVxuXG4gICAgLmdyZWVuVmFsdWVzIHtcbiAgICAgICAgLnQtYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3IoQHRoZW1lLWxpZ2h0KTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLnJvd1NlbGVjdGVkIHtcbiAgICAgICAgLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMihAdGhlbWUtbGlnaHQpO1xuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgICB9XG5cbiAgICAudG90YWxSb3dTZWxlY3RlZCB7XG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICB9XG5cbiAgICAuY29uZmlybUJvcmRlciB7XG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItY29sb3I6IEBzbnVmZi1ncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDI0OHB4O1xuICAgICAgICB3aWR0aDogNTY2cHg7XG4gICAgfVxuXG4gICAgI3RvbGxWaW9sYXRpb25zTGFiZWwge1xuICAgICAgICAudC1saW5rLS1jb2xvcihAdGhlbWUtbGlnaHQpO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gICAgfVxuXG4gICAgLmdseXBoaWNvbiB7XG4gICAgICAgICYuZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgICAgIC50LWxpbmstLWNvbG9yKEB0aGVtZS1saWdodCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYm9yZGVyLWhlaWdodCB7XG4gICAgICAgIGhlaWdodDogMjQ4cHg7XG4gICAgfVxuXG4gICAgLmJvcmRlci1oZWlnaHQtbm9uZGlzY291bnQge1xuICAgICAgICBoZWlnaHQ6IDE5OHB4O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG5AdGFibGVfX2hlYWRlci0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AdGFibGVfX2JvZHktLWJhY2tncm91bmRDb2xvci1saWdodDogQHdpbGQtc2FuZC1ncmF5O1xuQHRhYmxlX19lbXBoYXNpcy0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAc251ZmYtZ3JheTtcblxuXG4udC10YWJsZV9faGVhZGVyLS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAndGFibGVfX2hlYWRlci0tYmFja2dyb3VuZENvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC10YWJsZV9fYm9keS0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3RhYmxlX19ib2R5LS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXRhYmxlX19lbXBoYXNpcy0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3RhYmxlX19lbXBoYXNpcy0tYmFja2dyb3VuZENvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3ItbGlnaHQ6IEB3aGl0ZTtcbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3IyLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMy1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWNvbG9yLWxpZ2h0OiBAdHVuYS1ncmF5O1xuQGJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLWxpZ2h0OiBAdHJvcGljYWwtcmFpbi1mb3Jlc3QtZ3JlZW47XG5AYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItbGlnaHQ6IEBzaWx2ZXItZ3JheTtcbkBoZWFkZXItLWNvbG9yLWxpZ2h0OiBAdHVuYS1ncmF5O1xuQGxhYmVsLS1jb2xvci1saWdodDogQGJvdWxkZXItZ3JheTtcbkBzZWxlY3RfX2Fycm93LS1jb2xvci1saWdodDogQHNjb3JwaW9uLWdyYXk7XG5AbGluay0tY29sb3ItbGlnaHQ6IEBhenVyZS1yYWRpYW5jZS1ibHVlO1xuQGRpdmlkZXItLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2Nob29sLWJ1cy15ZWxsb3c7XG5cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvci1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IyLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IzKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvcjMtQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1oZWFkZXItLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2hlYWRlci0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1sYWJlbC0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGFiZWwtLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtc2VsZWN0X19hcnJvdy0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnc2VsZWN0X19hcnJvdy0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1saW5rLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdsaW5rLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3IgIWltcG9ydGFudDsgLy8gbWFya2VkIGFzICFpbXBvcnRhbnQgdG8gb3ZlcnJpZGUgYm9vdHN0cmFwXG59XG5cbi50LWRpdmlkZXItLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2RpdmlkZXItLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWRpdmlkZXJfX2Rhc2gtLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG4iXX0= */"] });


/***/ }),

/***/ 3170:
/*!*******************************************************************!*\
  !*** ./src/cavve/paymentSummary/tollViolationsModal.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TollViolationsModalComponent": () => (/* binding */ TollViolationsModalComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7370);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_upgrades__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/upgrades */ 41034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/ui/containers/fxRow/fxRow.component */ 47553);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _invoiced_invoiced_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoiced/invoiced.component */ 92912);
/* harmony import */ var _unInvoiced_unInvoiced_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unInvoiced/unInvoiced.component */ 22179);
/* harmony import */ var _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ui/containers/row/row.component */ 80001);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);













const _c0 = function () { return { "lt-md": true }; };
const _c1 = function (a0, a1) { return { state: a0, number: a1 }; };
function TollViolationsModalComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "cavve-violations-invoiced", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const invoiced_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("invoiced", invoiced_r2)("plate", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](4, _c1, ctx_r0.plate.licenseState, ctx_r0.plate.licensePlate));
} }
function TollViolationsModalComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "cavve-violations-uninvoiced", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const violation_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("unInvoiced", violation_r4)("plate", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](4, _c1, ctx_r1.plate.licenseState, ctx_r1.plate.licensePlate));
} }
const _c2 = function () { return { "hidden": true }; };
class TollViolationsModalComponent {
    constructor(dialogRef, environmentConfig) {
        this.dialogRef = dialogRef;
        this.environmentConfig = environmentConfig;
        this.data = {};
        this.sortInvoices = (invoices) => [...invoices].sort((a, b) => {
            if (a.agencyName === b.agencyName) {
                if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(a.dueDate) && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(a.dueDate)
                    && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isDate)(a.dueDate)) {
                    return -1;
                }
                if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(b.dueDate) && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(b.dueDate)
                    && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isDate)(b.dueDate)) {
                    return 1;
                }
                const aDate = new Date(a.dueDate);
                const bDate = new Date(b.dueDate);
                if (aDate > bDate) {
                    return 1;
                }
                return -1;
            }
            else if (a.agencyName === 'h'
                || (a.agencyName === 'f' && b.agencyName !== 'h')) {
                return -1;
            }
            else if ((a.agencyName === 'f' && b.agencyName === 'h')
                || a.agencyName === 'm') {
                return 1;
            }
            return 0;
        });
    }
    close() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.data = { ...this.dialogRef.data };
        this.plate = this.data.plate;
        this.invoices = this.sortInvoices(this.plate.invoices);
        this.unInvoiced = this.environmentConfig.isMergeMATandVioOn ? this.plate.uninvoicedViolations : [];
        this.totalAmount = this.data.tollSummaryDetails.totalViolationsDue;
        this.recordsFound = this.environmentConfig.isMergeMATandVioOn ? this.invoices.length + this.unInvoiced.length : this.invoices.length;
    }
}
TollViolationsModalComponent.ɵfac = function TollViolationsModalComponent_Factory(t) { return new (t || TollViolationsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_2__.DialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](common_upgrades__WEBPACK_IMPORTED_MODULE_1__.ENVIRON_CONFIG)); };
TollViolationsModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: TollViolationsModalComponent, selectors: [["cavve-toll-violations-modal"]], decls: 24, vars: 12, consts: [["fxLayout", "column"], ["fxFlex", "none", "fxLayoutGap", "8px"], [2, "padding-top", "8px", 3, "isLabel", "backgroundColorClass"], ["col-start", "", 1, "fx-flex-auto", "fx-layout-row", "fx-layout-align-start-center"], [1, "fx-flex-auto-shrink-more", "limited-flex"], [1, "fx-flex-auto-shrink-more", "limited-flex", 3, "ngClass.lt-md"], [1, "fx-flex-auto-grow-more", "unlimited-flex", 3, "ngClass.lt-md"], ["col-end", "", 1, "fx-flex-none", "fx-layout-row", "fx-layout-align-end-center"], [1, "fx-flex-auto", "limited-flex-end"], [4, "ngFor", "ngForOf"], [2, "padding-top", "8px", 3, "rowType"], ["col-start", "", "fxFlex", "grow"], ["col-end", "", "fxFlex", "none"], [3, "value"], [2, "padding-top", "8px", 3, "ngClass.lt-md"], [3, "invoiced", "plate"], [3, "unInvoiced", "plate"]], template: function TollViolationsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "main")(1, "div", 0)(2, "aside", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "fx-row", 2)(5, "section", 3)(6, "mat-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "INVOICE/TRANSACTION ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "INVOICE DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "AGENCY");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "section", 7)(13, "mat-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "AMOUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, TollViolationsModalComponent_div_15_Template, 3, 7, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, TollViolationsModalComponent_div_16_Template, 3, 7, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "row-container", 10)(18, "section", 11)(19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Total Toll Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "section", 12)(22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "currency", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx.recordsFound, " Record", ctx.recordsFound > 1 ? "s" : "", " found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isLabel", true)("backgroundColorClass", "transparent-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.invoices);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.unInvoiced);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rowType", "bodyInvert");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.totalAmount);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutGapDirective, _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_3__.FxRowComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _invoiced_invoiced_component__WEBPACK_IMPORTED_MODULE_4__.InvoicedComponent, _unInvoiced_unInvoiced_component__WEBPACK_IMPORTED_MODULE_5__.UnInvoicedComponent, _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_6__.RowContainerComponent, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_7__.CurrencyComponent], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcY29tbW9uXFx1aVxcY29udGFpbmVyc1xcZnhSb3dcXGRldGFpbHMubGVzcyIsInRvbGxWaW9sYXRpb25zTW9kYWwubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7QUNESjtBREFBO0VBSVEsYUFBQTtFQUNBLGtCQUFBO0FDRFI7QURKQTtFQThFSSxjQUFBO0VBQ0Esc0JBQUE7QUN2RUo7QURSQTtFQW9GSSxjQUFBO0VBQ0Esc0JBQUE7QUN6RUo7QURaQTtFQXlGSSxjQUFBO0VBQ0Esc0JBQUE7QUMxRUo7QURoQkE7RUE4RkksY0FBQTtFQUNBLHNCQUFBO0FDM0VKO0FEcEJBO0VBbUdJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDNUVKO0FEekJBO0VBeUdJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDN0VKO0FEOUJBO0VBK0dJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQzlFSjtBRG5DQTtFQXFISSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUMvRUo7QUR4Q0E7RUEwQ1EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDUjtBRDdDQTtFQWdEUSxXQUFBO0FDQVI7QURoREE7RUFvRFEsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RSO0FEdERBO0VBMkRRLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FENURBO0VBa0VRLGVBQUE7QUNIUjtBREtRO0VBQ0ksZUFBQTtBQ0haIiwiZmlsZSI6InRvbGxWaW9sYXRpb25zTW9kYWwubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuXG5cbiAgICAuZngtZmxleC1hdXRvIHtcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1mbGV4LW5vbmUge1xuICAgICAgICAuZngtZmxleC1ub25lLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZSB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUtbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtZmxleC1hdXRvLWdyb3ctbW9yZSB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1yb3cge1xuICAgICAgICAuZngtbGF5b3V0LXJvdy1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtY29sdW1uIHtcbiAgICAgICAgLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlciB7XG4gICAgICAgIC5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyIHtcbiAgICAgICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmxpbWl0ZWQtZmxleCB7XG4gICAgICAgIG1pbi13aWR0aDogMTcwcHg7XG4gICAgICAgIG1heC13aWR0aDogNTMwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC51bmxpbWl0ZWQtZmxleCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5saW1pdGVkLWZsZXgtZW5kIHtcbiAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxuXG4gICAgLmxhcmdlci1saW1pdGVkLWZsZXgtZW5kIHtcbiAgICAgICAgbWluLXdpZHRoOiAxNDNweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxNDVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG5cbiAgICAudGFibGUtc3BhY2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICAgICAgJi5sdC1tZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBNaXhpbnMgdG8gYXBwZWFzZSBwZXJmb3JtYW5jZVxuLmZ4LWZsZXgtYXV0by1taXhpbigpIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1ub25lLW1peGluKCkge1xuICAgIC8vIGxlc3NoaW50LWRpc2FibGUtbmV4dC1saW5lIHplcm9Vbml0XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZS1taXhpbigpIHtcbiAgICBmbGV4OiAxIDIgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1hdXRvLWdyb3ctbW9yZS1taXhpbigpIHtcbiAgICBmbGV4OiAyIDEgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtbGF5b3V0LXJvdy1taXhpbigpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbjpob3N0IC5meC1mbGV4LWF1dG8ge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbjpob3N0IC5meC1mbGV4LW5vbmUge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbjpob3N0IC5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUge1xuICBmbGV4OiAxIDIgYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbjpob3N0IC5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlIHtcbiAgZmxleDogMiAxIGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG46aG9zdCAuZngtbGF5b3V0LXJvdyB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuZngtbGF5b3V0LWNvbHVtbiB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlciB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLmxpbWl0ZWQtZmxleCB7XG4gIG1pbi13aWR0aDogMTcwcHg7XG4gIG1heC13aWR0aDogNTMwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLnVubGltaXRlZC1mbGV4IHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAubGltaXRlZC1mbGV4LWVuZCB7XG4gIG1pbi13aWR0aDogNzBweDtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuOmhvc3QgLmxhcmdlci1saW1pdGVkLWZsZXgtZW5kIHtcbiAgbWluLXdpZHRoOiAxNDNweDtcbiAgbWF4LXdpZHRoOiAxNDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbjpob3N0IC50YWJsZS1zcGFjZSB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbjpob3N0IC50YWJsZS1zcGFjZS5sdC1tZCB7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 22179:
/*!*********************************************************************!*\
  !*** ./src/cavve/paymentSummary/unInvoiced/unInvoiced.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnInvoicedComponent": () => (/* binding */ UnInvoicedComponent)
/* harmony export */ });
/* harmony import */ var missedatoll_details_uninvoiced_uninvoicedDetailsModal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! missedatoll/details/uninvoiced/uninvoicedDetailsModal.component */ 21682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/ui/containers/fxRow/fxRow.component */ 47553);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/ui/display/currency/currency.component */ 32761);







const _c0 = function () { return { "extended-row": false }; };
class UnInvoicedComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    ngOnInit() {
        this.violationNumber = this.unInvoiced.violationId;
    }
    openTollDetailsModal() {
        const uninvoicedData = {
            agencyCode: this.unInvoiced.agencyName,
            amountDue: this.unInvoiced.tollAmount,
            location: this.unInvoiced.location,
            violationDate: this.unInvoiced.violationDate,
            violationNumber: this.unInvoiced.violationId.toString()
        };
        this.dialogService.openSliderFilled(missedatoll_details_uninvoiced_uninvoicedDetailsModal_component__WEBPACK_IMPORTED_MODULE_0__.UninvoicedDetailsModalComponent, { uninvoicedDetails: uninvoicedData }, { title: 'Transaction Details', hasBack: true, hasClose: false });
    }
}
UnInvoicedComponent.ɵfac = function UnInvoicedComponent_Factory(t) { return new (t || UnInvoicedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_1__.DialogService)); };
UnInvoicedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UnInvoicedComponent, selectors: [["cavve-violations-uninvoiced"]], inputs: { tollDetailsTitle: "tollDetailsTitle", plate: "plate", unInvoiced: "unInvoiced" }, decls: 14, vars: 6, consts: [["ngClass", "extended-row", 3, "ngClass.lt-md"], [1, "clickable", 3, "backgroundColorClass", "click"], ["col-start", "", 1, "fx-flex-auto", "fx-layout-row", "fx-layout-align-start-center"], [1, "fx-flex-auto-shrink-more", "limited-flex"], [1, "fx-layout-row", "fx-layout-align-start-center", "u--noUnderline"], ["translation-skip", "", 1, "fx-flex-none", "violationId--width"], [1, "fx-flex-none", "glyphicon", "glyphicon-chevron-right"], ["fxShow", "", "fxHide.lt-md", "", 1, "fx-flex-auto-shrink-more", "limited-flex"], ["translation-skip", "", "fxShow", "", "fxHide.lt-md", "", 1, "fx-flex-auto-grow-more", "unlimited-flex"], ["col-end", "", 1, "fx-flex-none", "fx-layout-row", "fx-layout-align-end-center"], [1, "fx-flex-auto", "limited-flex-end"], [3, "value"]], template: function UnInvoicedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main", 0)(1, "fx-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UnInvoicedComponent_Template_fx_row_click_1_listener() { return ctx.openTollDetailsModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "section", 2)(3, "div", 3)(4, "a", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "section", 9)(12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "currency", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("backgroundColorClass", "white-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.violationNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.unInvoiced.agencyName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.unInvoiced.tollAmount);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultClassDirective, _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_2__.FxRowComponent, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultShowHideDirective, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_3__.CurrencyComponent], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n[_nghost-%COMP%]   .rows[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 469px;\n}\n[_nghost-%COMP%]   .rowsConfirm[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 566px;\n}\n[_nghost-%COMP%]   .topRow[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 469px;\n  border-top: 2px solid #d1d1d5;\n  border-bottom: 2px solid #d1d1d5;\n}\n[_nghost-%COMP%]   .topRowConfirm[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 566px;\n  border-top: 0px;\n  border-bottom: 1px solid #e0e0ef;\n}\n[_nghost-%COMP%]   .bottomRow[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 469px;\n  border-top: 2px solid #d1d1d5;\n}\n[_nghost-%COMP%]   .bottomRowConfirm[_ngcontent-%COMP%] {\n  height: 49px;\n  width: 566px;\n  border-top: 0px;\n  background-color: #e0e0ef;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n[_nghost-%COMP%]   .fields[_ngcontent-%COMP%] {\n  padding-left: 14px;\n}\n[_nghost-%COMP%]   .greenFields[_ngcontent-%COMP%] {\n  color: #018749;\n  padding-left: 14px;\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .values[_ngcontent-%COMP%] {\n  padding-right: 14px;\n}\n[_nghost-%COMP%]   .greenValues[_ngcontent-%COMP%] {\n  color: #018749;\n  padding-right: 14px;\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .rowSelected[_ngcontent-%COMP%] {\n  background-color: #efeff4;\n  border-top: 2px solid white;\n  border-bottom: 2px solid white;\n}\n[_nghost-%COMP%]   .totalRowSelected[_ngcontent-%COMP%] {\n  border-top: 2px solid white;\n}\n[_nghost-%COMP%]   .confirmBorder[_ngcontent-%COMP%] {\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e0e0ef;\n  border-radius: 10px;\n  height: 248px;\n  width: 566px;\n}\n[_nghost-%COMP%]   #tollViolationsLabel[_ngcontent-%COMP%] {\n  color: #007aff !important;\n  padding-left: 14px;\n}\n[_nghost-%COMP%]   .glyphicon.glyphicon-chevron-right[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 100;\n  top: -2px;\n  color: #007aff !important;\n}\n[_nghost-%COMP%]   .border-height[_ngcontent-%COMP%] {\n  height: 248px;\n}\n[_nghost-%COMP%]   .border-height-nondiscount[_ngcontent-%COMP%] {\n  height: 198px;\n}\n[_nghost-%COMP%]   .extended-row[_ngcontent-%COMP%] {\n  margin-left: -20px;\n  margin-right: -20px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n[_nghost-%COMP%]   .extended-row.lt-md[_ngcontent-%COMP%] {\n  margin-left: -14px;\n  margin-right: -14px;\n  padding-left: 14px;\n  padding-right: 14px;\n}\n[_nghost-%COMP%]   .glyphicon.glyphicon-chevron-right[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 100;\n  top: -2px;\n}\n[_nghost-%COMP%]   .violationId--width[_ngcontent-%COMP%] {\n  width: 118px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbW1vblxcdWlcXGNvbnRhaW5lcnNcXGZ4Um93XFxkZXRhaWxzLmxlc3MiLCJ1bkludm9pY2VkLmxlc3MiLCIuLlxccGF5bWVudFN1bW1hcnkubGVzcyIsIi4uXFwuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xcdGFibGUubGVzcyIsIi4uXFwuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xccGFnZS5sZXNzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFxtaXhpbnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7QUNESjtBREFBO0VBSVEsYUFBQTtFQUNBLGtCQUFBO0FDRFI7QURKQTtFQThFSSxjQUFBO0VBQ0Esc0JBQUE7QUN2RUo7QURSQTtFQW9GSSxjQUFBO0VBQ0Esc0JBQUE7QUN6RUo7QURaQTtFQXlGSSxjQUFBO0VBQ0Esc0JBQUE7QUMxRUo7QURoQkE7RUE4RkksY0FBQTtFQUNBLHNCQUFBO0FDM0VKO0FEcEJBO0VBbUdJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDNUVKO0FEekJBO0VBeUdJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDN0VKO0FEOUJBO0VBK0dJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQzlFSjtBRG5DQTtFQXFISSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUMvRUo7QUR4Q0E7RUEwQ1EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDUjtBRDdDQTtFQWdEUSxXQUFBO0FDQVI7QURoREE7RUFvRFEsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RSO0FEdERBO0VBMkRRLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FENURBO0VBa0VRLGVBQUE7QUNIUjtBREtRO0VBQ0ksZUFBQTtBQ0haO0FDakVBO0VBRVEsWUFBQTtFQUNBLFlBQUE7QURrRVI7QUNyRUE7RUFPUSxZQUFBO0VBQ0EsWUFBQTtBRGlFUjtBQ3pFQTtFQVlRLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBRGdFUjtBQy9FQTtFQW1CUSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBRCtEUjtBQ3JGQTtFQTBCUSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FEOERSO0FDMUZBO0VBZ0NRLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQ2pCSix5QkFBQTtFRG1CSSwrQkFBQTtFQUNBLGdDQUFBO0FENkRSO0FDbEdBO0VBeUNRLGtCQUFBO0FENERSO0FDckdBO0VFbUNJLGNBQUE7RUZXSSxrQkFBQTtFQUNBLGlCQUFBO0FEMkRSO0FDMUdBO0VBbURRLG1CQUFBO0FEMERSO0FDN0dBO0VFbUNJLGNBQUE7RUZxQkksbUJBQUE7RUFDQSxpQkFBQTtBRHlEUjtBQ2xIQTtFRW9CSSx5QkFBQTtFRjBDSSwyQkFBQTtFQUNBLDhCQUFBO0FEd0RSO0FDdkhBO0VBbUVRLDJCQUFBO0FEdURSO0FDMUhBO0VBdUVRLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QURzRFI7QUNsSUE7RUU0REkseUJBQUE7RUZxQkksa0JBQUE7QURxRFI7QUNqRFE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VFNUJSLHlCQUFBO0FIZ0ZKO0FDNUlBO0VBOEZRLGFBQUE7QURpRFI7QUMvSUE7RUFrR1EsYUFBQTtBRGdEUjtBQWpKQTtFSWNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FKc0lKO0FBbkpRO0VJaUJKLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FKcUlKO0FBbkpRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQXFKWjtBQWxLQTtFQWtCUSxZQUFBO0FBbUpSIiwiZmlsZSI6InVuSW52b2ljZWQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuXG5cbiAgICAuZngtZmxleC1hdXRvIHtcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1mbGV4LW5vbmUge1xuICAgICAgICAuZngtZmxleC1ub25lLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZSB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUtbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtZmxleC1hdXRvLWdyb3ctbW9yZSB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1yb3cge1xuICAgICAgICAuZngtbGF5b3V0LXJvdy1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtY29sdW1uIHtcbiAgICAgICAgLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlciB7XG4gICAgICAgIC5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyIHtcbiAgICAgICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmxpbWl0ZWQtZmxleCB7XG4gICAgICAgIG1pbi13aWR0aDogMTcwcHg7XG4gICAgICAgIG1heC13aWR0aDogNTMwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC51bmxpbWl0ZWQtZmxleCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5saW1pdGVkLWZsZXgtZW5kIHtcbiAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxuXG4gICAgLmxhcmdlci1saW1pdGVkLWZsZXgtZW5kIHtcbiAgICAgICAgbWluLXdpZHRoOiAxNDNweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxNDVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG5cbiAgICAudGFibGUtc3BhY2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICAgICAgJi5sdC1tZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBNaXhpbnMgdG8gYXBwZWFzZSBwZXJmb3JtYW5jZVxuLmZ4LWZsZXgtYXV0by1taXhpbigpIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1ub25lLW1peGluKCkge1xuICAgIC8vIGxlc3NoaW50LWRpc2FibGUtbmV4dC1saW5lIHplcm9Vbml0XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZS1taXhpbigpIHtcbiAgICBmbGV4OiAxIDIgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1hdXRvLWdyb3ctbW9yZS1taXhpbigpIHtcbiAgICBmbGV4OiAyIDEgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtbGF5b3V0LXJvdy1taXhpbigpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvbWl4aW5zLmxlc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vY29tbW9uL3VpL2NvbnRhaW5lcnMvZnhSb3cvZGV0YWlscy5sZXNzJztcbkBpbXBvcnQgJy4uL3BheW1lbnRTdW1tYXJ5Lmxlc3MnO1xuXG46aG9zdCB7XG4gICAgLmV4dGVuZGVkLXJvdyB7XG4gICAgICAgIC5leHRlbmRlZC1yb3ctbWl4aW47XG5cbiAgICAgICAgJi5sdC1tZCB7XG4gICAgICAgICAgICAuZXh0ZW5kZWQtcm93LWx0LW1kLW1peGluO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmdseXBoaWNvbiB7XG4gICAgICAgICYuZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC52aW9sYXRpb25JZC0td2lkdGgge1xuICAgICAgICB3aWR0aDogMTE4cHg7XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICAucm93cyB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDQ2OXB4O1xuICAgIH1cblxuICAgIC5yb3dzQ29uZmlybSB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDU2NnB4O1xuICAgIH1cblxuICAgIC50b3BSb3cge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHdpZHRoOiA0NjlweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigyMDksIDIwOSwgMjEzKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyMDksIDIwOSwgMjEzKTtcbiAgICB9XG5cbiAgICAudG9wUm93Q29uZmlybSB7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgd2lkdGg6IDU2NnB4O1xuICAgICAgICBib3JkZXItdG9wOiAwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBAc251ZmYtZ3JheTtcbiAgICB9XG5cbiAgICAuYm90dG9tUm93IHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB3aWR0aDogNDY5cHg7XG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2IoMjA5LCAyMDksIDIxMyk7XG4gICAgfVxuXG4gICAgLmJvdHRvbVJvd0NvbmZpcm0ge1xuICAgICAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgICAgIHdpZHRoOiA1NjZweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMHB4O1xuICAgICAgICAudC10YWJsZV9fZW1waGFzaXMtLWJhY2tncm91bmRDb2xvcihAdGhlbWUtbGlnaHQpO1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICB9XG5cbiAgICAuZmllbGRzIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICAgIH1cblxuICAgIC5ncmVlbkZpZWxkcyB7XG4gICAgICAgIC50LWJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yKEB0aGVtZS1saWdodCk7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLnZhbHVlcyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE0cHg7XG4gICAgfVxuXG4gICAgLmdyZWVuVmFsdWVzIHtcbiAgICAgICAgLnQtYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3IoQHRoZW1lLWxpZ2h0KTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLnJvd1NlbGVjdGVkIHtcbiAgICAgICAgLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMihAdGhlbWUtbGlnaHQpO1xuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgICB9XG5cbiAgICAudG90YWxSb3dTZWxlY3RlZCB7XG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICB9XG5cbiAgICAuY29uZmlybUJvcmRlciB7XG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItY29sb3I6IEBzbnVmZi1ncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDI0OHB4O1xuICAgICAgICB3aWR0aDogNTY2cHg7XG4gICAgfVxuXG4gICAgI3RvbGxWaW9sYXRpb25zTGFiZWwge1xuICAgICAgICAudC1saW5rLS1jb2xvcihAdGhlbWUtbGlnaHQpO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gICAgfVxuXG4gICAgLmdseXBoaWNvbiB7XG4gICAgICAgICYuZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgICAgIC50LWxpbmstLWNvbG9yKEB0aGVtZS1saWdodCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYm9yZGVyLWhlaWdodCB7XG4gICAgICAgIGhlaWdodDogMjQ4cHg7XG4gICAgfVxuXG4gICAgLmJvcmRlci1oZWlnaHQtbm9uZGlzY291bnQge1xuICAgICAgICBoZWlnaHQ6IDE5OHB4O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG5AdGFibGVfX2hlYWRlci0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AdGFibGVfX2JvZHktLWJhY2tncm91bmRDb2xvci1saWdodDogQHdpbGQtc2FuZC1ncmF5O1xuQHRhYmxlX19lbXBoYXNpcy0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAc251ZmYtZ3JheTtcblxuXG4udC10YWJsZV9faGVhZGVyLS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAndGFibGVfX2hlYWRlci0tYmFja2dyb3VuZENvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC10YWJsZV9fYm9keS0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3RhYmxlX19ib2R5LS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXRhYmxlX19lbXBoYXNpcy0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3RhYmxlX19lbXBoYXNpcy0tYmFja2dyb3VuZENvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3ItbGlnaHQ6IEB3aGl0ZTtcbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3IyLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMy1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWNvbG9yLWxpZ2h0OiBAdHVuYS1ncmF5O1xuQGJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLWxpZ2h0OiBAdHJvcGljYWwtcmFpbi1mb3Jlc3QtZ3JlZW47XG5AYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItbGlnaHQ6IEBzaWx2ZXItZ3JheTtcbkBoZWFkZXItLWNvbG9yLWxpZ2h0OiBAdHVuYS1ncmF5O1xuQGxhYmVsLS1jb2xvci1saWdodDogQGJvdWxkZXItZ3JheTtcbkBzZWxlY3RfX2Fycm93LS1jb2xvci1saWdodDogQHNjb3JwaW9uLWdyYXk7XG5AbGluay0tY29sb3ItbGlnaHQ6IEBhenVyZS1yYWRpYW5jZS1ibHVlO1xuQGRpdmlkZXItLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2Nob29sLWJ1cy15ZWxsb3c7XG5cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvci1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IyLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IzKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvcjMtQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1oZWFkZXItLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2hlYWRlci0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1sYWJlbC0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGFiZWwtLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtc2VsZWN0X19hcnJvdy0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnc2VsZWN0X19hcnJvdy0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1saW5rLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdsaW5rLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3IgIWltcG9ydGFudDsgLy8gbWFya2VkIGFzICFpbXBvcnRhbnQgdG8gb3ZlcnJpZGUgYm9vdHN0cmFwXG59XG5cbi50LWRpdmlkZXItLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2RpdmlkZXItLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWRpdmlkZXJfX2Rhc2gtLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG4iLCIvLyBERVBSRUNBVEVEIEZJTEUgLSBQbGVhc2UgZGVsZXRlIGFmdGVyIFJlZnJlc2ggZWZmb3J0XG5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJ3ZhcmlhYmxlcy5sZXNzJztcblxuLyogZm9udHMgKi9cbi5hdmVuaXItODUtaGVhdnkge1xuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyIExUIFN0ZCA4NSBIZWF2eSBSZWd1bGFyJztcbn1cblxuXG4vKiBjb2xvcnMgKi9cbi5kYXJrLXB1cnBsZS10ZXh0IHtcbiAgICBjb2xvcjogQHZhbGVudGluby1wdXJwbGU7XG59XG5cblxuLyogcm93IHNwYWNpbmcgKi9cbi5leHRlbmRlZC1yb3ctbWl4aW4oKSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5leHRlbmRlZC1yb3ctbHQtbWQtbWl4aW4oKSB7XG4gICAgbWFyZ2luLWxlZnQ6IC1AcGFnZS1iYXItbWFyZ2luLXN0YXRpYy1sdC1tZDtcbiAgICBtYXJnaW4tcmlnaHQ6IC1AcGFnZS1iYXItbWFyZ2luLXN0YXRpYy1sdC1tZDtcbiAgICBwYWRkaW5nLWxlZnQ6IEBwYWdlLWJhci1tYXJnaW4tc3RhdGljLWx0LW1kO1xuICAgIHBhZGRpbmctcmlnaHQ6IEBwYWdlLWJhci1tYXJnaW4tc3RhdGljLWx0LW1kO1xufVxuIl19 */"] });


/***/ }),

/***/ 68369:
/*!**************************************************!*\
  !*** ./src/cavve/personal/personal.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalComponent": () => (/* binding */ PersonalComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_ui_modals_newBillingAddressModal_newBillingAddressModal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/ui/modals/newBillingAddressModal/newBillingAddressModal.component */ 28072);
/* harmony import */ var common_ui_modals_editVehicleModal_editVehicleModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/ui/modals/editVehicleModal/editVehicleModal.component */ 28218);
/* harmony import */ var common_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/utilities */ 56516);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frame/frame.component */ 50321);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/services/webStorageService/webStorage.service */ 38898);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _common_ui_display_personalInfoDisplay_personalInfoDisplay_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/display/personalInfoDisplay/personalInfoDisplay.component */ 67313);
/* harmony import */ var _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/display/address/addressDisplay.component */ 23204);
/* harmony import */ var _common_ui_display_vehicleDisplay_vehicleDisplay_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/display/vehicleDisplay/vehicleDisplay.component */ 49703);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _common_ui_form_entry_createAccount_createAccount_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/ui/form-entry/createAccount/createAccount.component */ 20516);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);




























function PersonalComponent_ng_container_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Missing Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}

function PersonalComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, PersonalComponent_ng_container_12_div_1_Template, 4, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "personal-info-display", 23)(3, "address-display", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isMailingInfoIncomplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("personalInfo", ctx_r1.accountInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("address", ctx_r1.accountInfo)("international", ctx_r1.accountInfo.internationalAddress);
  }
}

function PersonalComponent_ng_container_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Missing Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}

const _c0 = function () {
  return ["licPlate", "licState"];
};

function PersonalComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, PersonalComponent_ng_container_21_div_1_Template, 4, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div")(3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](5, "vehicle-display", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.isVehicleInfoIncomplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"]("", ctx_r2.accountInfo.licState, "-", ctx_r2.accountInfo.licPlate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("vehicleInfo", ctx_r2.accountInfo)("exclude", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](5, _c0));
  }
}

function PersonalComponent_div_27_ng_container_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "p", 33);
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("innerHtml", ctx_r9.personalPageInfo.verifyInfoHelp, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeHtml"]);
  }
}

function PersonalComponent_div_27_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, PersonalComponent_div_27_ng_container_1_p_1_Template, 1, 1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitch", error_r7.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitchCase", "required");
  }
}

function PersonalComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, PersonalComponent_div_27_ng_container_1_Template, 2, 2, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](2);

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _r0.submitted);
  }
}

const _c1 = function () {
  return {
    "margin-bottom": "30px"
  };
};

class PersonalComponent {
  constructor(parent, state, responseErrorService, dialogService, genericRepoService, webStorage, webStorageConst) {
    this.parent = parent;
    this.state = state;
    this.responseErrorService = responseErrorService;
    this.dialogService = dialogService;
    this.genericRepoService = genericRepoService;
    this.webStorage = webStorage;
    this.webStorageConst = webStorageConst;
    this.statesList = [];

    this.initAccountInfo = () => ({
      securityQuestionID: null,
      driverLicenseNumber: null,
      byMail: null,
      byEmail: null,
      username: null,
      internationalAddress: null,
      firstName: null,
      lastName: null,
      address1: null,
      city: null,
      country: null,
      licState: null,
      licPlate: null,
      vehicleYear: null,
      vehicleModel: null,
      vehicleMake: null,
      vehicleColor: null,
      vehicleClassCode: 2,
      vehicleClassDesc: null,
      temporaryLicPlate: null,
      motorcycle: null,
      nickname: null,
      isMotorcycleDisabled: null,
      emailAddress: null,
      phoneNum: null,
      phoneExt: null,
      smsAlertsOptIn: null,
      driverLicenseState: null
    });

    this.getMailingAddressInfo = () => ({
      firstName: this.accountInfo.firstName,
      lastName: this.accountInfo.lastName,
      internationalAddress: this.accountInfo.internationalAddress,
      address1: this.accountInfo.address1,
      address2: this.accountInfo.address2,
      city: this.accountInfo.city,
      state: this.accountInfo.state,
      zip: this.accountInfo.zip,
      plus4: this.accountInfo.plus4,
      country: this.accountInfo.country
    });

    this.getVehicleInfo = () => ({
      licState: this.accountInfo.licState,
      licPlate: this.accountInfo.licPlate,
      vehicleYear: this.accountInfo.vehicleYear,
      vehicleModel: this.accountInfo.vehicleModel,
      vehicleMake: this.accountInfo.vehicleMake,
      vehicleColor: this.accountInfo.vehicleColor,
      vehicleClassCode: this.accountInfo.vehicleClassCode,
      vehicleClassDesc: this.accountInfo.vehicleClassDesc,
      temporaryLicPlate: this.accountInfo.temporaryLicPlate,
      nickname: this.accountInfo.nickname,
      motorcycle: this.accountInfo.motorcycle,
      isMotorcycleDisabled: this.isMotorcycleDisabled
    });

    this.setMailingAddressInfo = res => {
      this.accountInfo.firstName = res.firstName;
      this.accountInfo.lastName = res.lastName;
      this.accountInfo.internationalAddress = res.internationalAddress;
      this.accountInfo.address1 = res.address1;
      this.accountInfo.address2 = res.address2;
      this.accountInfo.city = res.city;
      this.accountInfo.state = res.state;
      this.accountInfo.zip = res.zip;
      this.accountInfo.plus4 = res.plus4;
      this.accountInfo.country = res.country;
    };

    this.setVehicleInfo = res => {
      this.accountInfo.licState = res.licState;
      this.accountInfo.licPlate = res.licPlate;
      this.accountInfo.vehicleYear = res.vehicleYear;
      this.accountInfo.vehicleModel = res.vehicleModel;
      this.accountInfo.vehicleMake = res.vehicleMake;
      this.accountInfo.vehicleColor = res.vehicleColor;
      this.accountInfo.vehicleClassCode = res.vehicleClassCode;
      this.accountInfo.vehicleClassDesc = res.vehicleClassDesc;
      this.accountInfo.temporaryLicPlate = res.temporaryLicPlate;
      this.accountInfo.motorcycle = res.motorcycle;
      this.accountInfo.nickname = res.nickname;
    };

    this.isNotMissingMailSliderInfo = () => {
      const acctInfo = this.accountInfo; //comment below is from original implementation
      //This boolean covers the international conditions TODO: Make this a positive variable name to avoid double negatives

      const internationalIsInvalid = !acctInfo.internationalAddress && !(acctInfo.city && acctInfo.state && acctInfo.zip) || acctInfo.internationalAddress && !acctInfo.country;

      if (!(acctInfo.firstName && acctInfo.lastName && acctInfo.address1) || internationalIsInvalid) {
        this.isMailingInfoIncomplete = true;
        return false;
      } else {
        this.isMailingInfoIncomplete = false;
        return true;
      }
    };

    this.isNotMissingVehicleSliderInfo = () => {
      const acctInfo = this.accountInfo;

      if (!(acctInfo.vehicleClassCode && acctInfo.vehicleYear && acctInfo.vehicleMake && acctInfo.vehicleModel && acctInfo.vehicleColor)) {
        this.isVehicleInfoIncomplete = true;
        return false;
      } else {
        this.isVehicleInfoIncomplete = false;
        return true;
      }
    };

    this.setViolatorAccountInfo = res => {
      if (this.responseErrorService.isErrorFree(res)) {
        if (res.accountInfo !== null) {
          res.accountInfo.securityQuestionID = res.accountInfo.securityQuestionID === 0 ? undefined : res.accountInfo.securityQuestionID;
          res.accountInfo.driverLicenseState = res.accountInfo.driverLicenseNumber ? res.accountInfo.driverLicenseState : 'TX';
          this.accountInfo = res.accountInfo; //this is to trigger the alert icon if there is missing info in the sliders

          this.isNotMissingMailSliderInfo();
          this.isNotMissingVehicleSliderInfo();
          this.hasInitialLoginInfo = !this.accountInfo.username ? false : true;
        } else {
          this.loginInfo = {
            password: '',
            securityAnswer: ''
          };
          this.isShowPassword = false;
          this.isShowSecurityAnswer = false;
          this.accountInfo.licPlate = this.plateContainer.plate.licensePlate;
          this.accountInfo.licState = this.plateContainer.plate.licenseState;
          this.accountInfo.accountId = this.plateContainer.accountId;
          this.accountInfo.personId = this.plateContainer.accountConversionData.personId;
          this.accountInfo.addressId = this.plateContainer.accountConversionData.addressId;
          this.isMailingInfoIncomplete = true;
          this.isVehicleInfoIncomplete = true;
        }
      }
    };

    this.setSecurityQuestions = res => {
      if (this.responseErrorService.isErrorFree(res)) {
        this.securityQuestions = res.securityQuestions;
      }
    };

    this.setStatesList = res => {
      if (this.responseErrorService.isErrorFree(res)) {
        this.statesList = res.states;
      }
    };

    this.setCountryList = res => {
      if (this.responseErrorService.isErrorFree(res)) {
        this.countryList = res.countries;
      }
    };
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.plateContainer = _this.parent.getPlateContainer();
      _this.accountInfo = _this.initAccountInfo();
      _this.parent.stepNum = 1;

      _this.parent.setFrameTitle(_this.personalPageInfo.pageTitle);

      _this.loginInfo = {
        password: '',
        securityAnswer: ''
      };
      _this.isShowPassword = false;
      _this.isShowSecurityAnswer = false;
      _this.currentAccountInfo = _this.webStorage.getValue(_this.webStorageConst.cavveConversionData); //Generic API Set Functions

      let response;

      if (_this.currentAccountInfo === null) {
        response = yield _this.genericRepoService.dataFactory.GetViolatorAccntInfo();

        _this.setViolatorAccountInfo(response);
      } else {
        _this.accountInfo = _this.currentAccountInfo;
      }

      response = yield _this.genericRepoService.dataFactory.getSecurityQuestions();

      _this.setSecurityQuestions(response);

      response = yield _this.genericRepoService.dataFactory.getStates();

      _this.setStatesList(response);

      response = yield _this.genericRepoService.dataFactory.getCountries();

      _this.setCountryList(response);

      if (_this.currentAccountInfo !== null) {
        _this.isNotMissingMailSliderInfo();

        _this.isNotMissingVehicleSliderInfo();

        _this.hasInitialLoginInfo = !_this.accountInfo.username ? false : true;
      }

      _this.securityQuestion = '';
      _this.maskedDriverLicenseNumber = '';

      if (_this.hasInitialLoginInfo) {
        const securityQuestionObj = _this.securityQuestions.filter(obj => obj.securityQuestionID === _this.accountInfo.securityQuestionID)[0];

        if (securityQuestionObj) {
          _this.securityQuestion = securityQuestionObj.securityQuestion;
        }

        if (_this.accountInfo.driverLicenseNumber) {
          _this.maskedDriverLicenseNumber = `****-${_this.accountInfo.driverLicenseNumber.substring(_this.accountInfo.driverLicenseNumber.length - 3)}`;
        }
      }

      _this.isMotorcycleDisabled = true;
    })();
  }

  ngOnDestroy() {
    this.webStorage.setKeyValue(this.webStorageConst.cavveConversionData, this.accountInfo);
  }

  submit(nextState) {
    if (this.isNotMissingMailSliderInfo() && this.isNotMissingVehicleSliderInfo()) {
      this.accountInfo.byMail = false;
      this.accountInfo.byEmail = true;
      const request = {
        accountInfo: this.accountInfo,
        password: this.loginInfo.password,
        securityAnswer: this.loginInfo.securityAnswer
      };
      return this.genericRepoService.dataFactory.SetViolatorAccountInfo(request).then(res => {
        if (this.responseErrorService.isErrorFree(res)) {
          this.state.go(nextState);
        }
      });
    }
  }

  previous(prevState) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.state.go(prevState);
    })();
  }

  tryCancel(cancelState) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        cmsContent: {
          Title: _this3.cancelMessageContent.cancelQuestion,
          PrimaryContent: '',
          CancelBtn: _this3.cancelMessageContent.cancelResolve,
          AcceptBtn: _this3.cancelMessageContent.cancelReject
        }
      };
      const res = yield _this3.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_4__.GenericCmsModalComponent, data);

      if (!res) {
        _this3.state.go(cancelState);
      }
    })();
  }

  openMailingAddressModal() {
    const data = {
      mailingInfo: (0,common_utilities__WEBPACK_IMPORTED_MODULE_3__.cloneDeep)(this.getMailingAddressInfo()),
      stateList: this.statesList,
      countryList: this.countryList,
      isShowPersonalInfo: true,
      addressTitle: 'Mailing Address'
    };
    return this.dialogService.openSliderCentered(common_ui_modals_newBillingAddressModal_newBillingAddressModal_component__WEBPACK_IMPORTED_MODULE_1__.NewBillingAddressModalComponent, data, {
      title: 'Edit Personal Information'
    }).then(result => {
      if (result) {
        this.setMailingAddressInfo(result.mailingInfo);
        this.isNotMissingMailSliderInfo();
      }
    });
  }

  openLicensePlateModal() {
    const data = {
      vehicleInfo: (0,common_utilities__WEBPACK_IMPORTED_MODULE_3__.cloneDeep)(this.getVehicleInfo()),
      modalCms: {
        vehicleInfoTitle: this.personalPageInfo.vehicleInfoTitle,
        vehicleToolTipEditButton: this.personalPageInfo.vehicleToolTipEditButton,
        vehicleToolTipText: this.personalPageInfo.vehicleToolTipText
      },
      stateList: this.statesList,
      plateIsReadOnly: true,
      motorcycleDisabled: true
    };
    return this.dialogService.openSliderCentered(common_ui_modals_editVehicleModal_editVehicleModal_component__WEBPACK_IMPORTED_MODULE_2__.EditVehicleModalComponent, data, {
      title: 'Edit Vehicle Information'
    }).then(result => {
      if (result) {
        this.setVehicleInfo(result.vehicleInfo);
        this.isNotMissingVehicleSliderInfo();
      }
    });
  }

}

PersonalComponent.ɵfac = function PersonalComponent_Factory(t) {
  return new (t || PersonalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_5__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_20__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.GenericRepoService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_7__.WebStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](constants_module__WEBPACK_IMPORTED_MODULE_8__.WebStorageConst));
};

PersonalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
  type: PersonalComponent,
  selectors: [["cavve-personal-component"]],
  inputs: {
    personalPageInfo: "personalPageInfo",
    cancelMessageContent: "cancelMessageContent",
    usStates: "usStates",
    pwCmsData: "pwCmsData"
  },
  decls: 47,
  vars: 23,
  consts: [["validation-focus", "", "name", "cavvePersonalForm", 1, "u-spacing--widthFill", 3, "ngStyle.lt-md"], ["PersonalForm", "ngForm"], ["fxLayout", "column", "fxLayoutGap", "32px"], ["alignment", "start start"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "u-spacing--widthFill", 2, "padding-bottom", "21px"], ["fxFlex", "none", "aria-label", "Edit", 1, "editButton", 3, "click"], [4, "ngIf"], [2, "padding-top", "32px", 3, "error-check"], ["fxLayout", "row", "fxLayoutAlign", "start start", 1, "u-spacing--widthFill"], ["type", "checkbox", "name", "verifyInfoChecked", "required", "", 2, "width", "20px", "height", "20px", 3, "ngModel"], ["CompletedInfo", "ngModel"], [1, "textOverlay", 2, "margin-top", "6px", 3, "innerHtml"], ["role", "alert", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "u-spacing--widthFill", 2, "padding-bottom", "21px"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "u-spacing--widthFill"], [3, "hasInitialLoginInfo", "accLoginInfo", "sercurityInfo", "securityQuestions", "securityQuestion", "isShowPassword", "isShowSecurityAnswer", "statesList", "passwordValidationCMS", "phoneALertsOptInCMS", "hasInitialLoginInfoChange", "accLoginInfoChange", "sercurityInfoChange", "securityQuestionChange", "isShowPasswordChange", "isShowSecurityAnswerChange"], ["fxFlexOffset", "32px"], [3, "next", "previous", "cancel"], ["wizard-next", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["wizard-cancel", ""], ["class", "missingInfo", 4, "ngIf"], [3, "personalInfo"], [3, "address", "international"], [1, "missingInfo"], ["svgIcon", "alert"], ["translation-skip", "", 2, "text-transform", "uppercase"], ["isCompactView", "true", 3, "vehicleInfo", "exclude"], ["role", "alert"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], ["class", "help-block", 3, "innerHtml", 4, "ngSwitchCase"], [1, "help-block", 3, "innerHtml"]],
  template: function PersonalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "page-centered-container")(1, "form", 0, 1)(3, "div", 2)(4, "card-container", 3)(5, "div", 4)(6, "header")(7, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](9, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PersonalComponent_Template_a_click_10_listener() {
        return ctx.openMailingAddressModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, " Edit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, PersonalComponent_ng_container_12_Template, 4, 4, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "card-container", 3)(14, "div", 4)(15, "header")(16, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](18, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function PersonalComponent_Template_a_click_19_listener() {
        return ctx.openLicensePlateModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](20, " Edit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](21, PersonalComponent_ng_container_21_Template, 6, 6, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "div", 7)(23, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](24, "input", 9, 10)(26, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](27, PersonalComponent_div_27_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](28, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "card-container")(30, "section", 13)(31, "div", 14)(32, "header")(33, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](35, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](36, "section")(37, "create-account-form-entry", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("hasInitialLoginInfoChange", function PersonalComponent_Template_create_account_form_entry_hasInitialLoginInfoChange_37_listener($event) {
        return ctx.hasInitialLoginInfo = $event;
      })("accLoginInfoChange", function PersonalComponent_Template_create_account_form_entry_accLoginInfoChange_37_listener($event) {
        return ctx.accountInfo = $event;
      })("sercurityInfoChange", function PersonalComponent_Template_create_account_form_entry_sercurityInfoChange_37_listener($event) {
        return ctx.loginInfo = $event;
      })("securityQuestionChange", function PersonalComponent_Template_create_account_form_entry_securityQuestionChange_37_listener($event) {
        return ctx.securityQuestion = $event;
      })("isShowPasswordChange", function PersonalComponent_Template_create_account_form_entry_isShowPasswordChange_37_listener($event) {
        return ctx.isShowPassword = $event;
      })("isShowSecurityAnswerChange", function PersonalComponent_Template_create_account_form_entry_isShowSecurityAnswerChange_37_listener($event) {
        return ctx.isShowSecurityAnswer = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](38, "section", 16)(39, "wizard-ui", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("next", function PersonalComponent_Template_wizard_ui_next_39_listener($event) {
        return ctx.submit($event);
      })("previous", function PersonalComponent_Template_wizard_ui_previous_39_listener($event) {
        return ctx.previous($event);
      })("cancel", function PersonalComponent_Template_wizard_ui_cancel_39_listener($event) {
        return ctx.tryCancel($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](40, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](41, "CONTINUE");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](42, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](43, "mat-icon", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](44, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](45, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](46, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](25);

      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](22, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx.personalPageInfo.mailingAddressHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.accountInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx.personalPageInfo.licenseHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.accountInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("error-check", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx.verifyInfoChecked);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("innerHtml", ctx.personalPageInfo.verifyInfoCheckboxDescription, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](28, 20, _r3.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx.personalPageInfo.securityInfoHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("hasInitialLoginInfo", ctx.hasInitialLoginInfo)("accLoginInfo", ctx.accountInfo)("sercurityInfo", ctx.loginInfo)("securityQuestions", ctx.securityQuestions)("securityQuestion", ctx.securityQuestion)("isShowPassword", ctx.isShowPassword)("isShowSecurityAnswer", ctx.isShowSecurityAnswer)("statesList", ctx.statesList)("passwordValidationCMS", ctx.pwCmsData)("phoneALertsOptInCMS", ctx.personalPageInfo.phoneAlertsOptInDesc);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_9__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_10__.FocusDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__.DefaultStyleDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutGapDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_11__.CardContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutAlignDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, _common_ui_display_personalInfoDisplay_personalInfoDisplay_component__WEBPACK_IMPORTED_MODULE_12__.PersonalInfoDisplayComponent, _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_13__.AddressDisplayComponent, _common_ui_display_vehicleDisplay_vehicleDisplay_component__WEBPACK_IMPORTED_MODULE_14__.VehicleDisplayComponent, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_15__.ErrorCheckDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.CheckboxRequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitchCase, _common_ui_form_entry_createAccount_createAccount_component__WEBPACK_IMPORTED_MODULE_16__.CreateAccountComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultFlexOffsetDirective, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_17__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_18__.WizardNextDirective],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.KeyValuePipe],
  styles: ["cavve-personal-component form {\n  margin-bottom: 100px;\n  max-width: 540px;\n}\ncavve-personal-component mat-divider {\n  width: 65px;\n}\ncavve-personal-component h2 {\n  max-height: 70px;\n  padding-bottom: 24px;\n}\ncavve-personal-component .editButton {\n  font-weight: 500;\n  font-family: 'Jost';\n  text-align: right;\n  padding-top: 5px;\n}\ncavve-personal-component input[type='checkbox'] {\n  margin-right: 4px;\n}\ncavve-personal-component .missingInfo mat-icon {\n  vertical-align: text-top;\n  margin-right: 9px;\n}\ncavve-personal-component .textOverlay {\n  color: #34353a;\n  font-family: 'Montserrat';\n  font-weight: 600;\n  font-size: 16px;\n}\ncavve-personal-component .missingInfo {\n  color: #fc2125;\n  padding-bottom: 16px;\n}\ncavve-personal-component action-buttons {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsLmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xcZm9udHMubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxwYWdlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFHUSxvQkFBQTtFQUNBLGdCQUFBO0FBSlI7QUFBQTtFQVFRLFdBQUE7QUFMUjtBQUhBO0VBWVEsZ0JBQUE7RUFDQSxvQkFBQTtBQU5SO0FBUEE7RUFpQlEsZ0JBQUE7RUNoQkosbUJBQUE7RURrQkksaUJBQUE7RUFDQSxnQkFBQTtBQVBSO0FBYkE7RUF3QlEsaUJBQUE7QUFSUjtBQWhCQTtFQTRCUSx3QkFBQTtFQUNBLGlCQUFBO0FBVFI7QUFwQkE7RUU4QkksY0FBQTtFRHpCQSx5QkFBQTtFRDhCSSxnQkFBQTtFQUNBLGVBQUE7QUFWUjtBQTFCQTtFQXdDUSxjQUFBO0VBQ0Esb0JBQUE7QUFYUjtBQTlCQTtFQTZDUSxXQUFBO0FBWlIiLCJmaWxlIjoicGVyc29uYWwubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG5jYXZ2ZS1wZXJzb25hbC1jb21wb25lbnQge1xuXG4gICAgZm9ybSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IEBwYWdlLWNlbnRlcmVkLW1heC13aWR0aDtcbiAgICB9XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgIH1cblxuICAgIC5lZGl0QnV0dG9uIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgLnQtaGVhZGVyLS1mb250RmFtaWx5O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuXG4gICAgLm1pc3NpbmdJbmZvIG1hdC1pY29uIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDlweDtcbiAgICB9XG5cbiAgICAudGV4dE92ZXJsYXkge1xuICAgICAgICAudC1ib2R5LS1jb2xvcihAdGhlbWUtbGlnaHQpO1xuICAgICAgICAudC1ib2R5LS1mb250RmFtaWx5O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLm1pc3NpbmdJbmZvIHtcbiAgICAgICAgY29sb3I6IEB0b3JjaC1yZWQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgIGFjdGlvbi1idXR0b25zIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbi50LWhlYWRlci0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtam9zdDtcbn1cblxuLnQtYm9keS0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG5AYm9keS0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAd2hpdGU7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMi1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjMtbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1saWdodDogQHRyb3BpY2FsLXJhaW4tZm9yZXN0LWdyZWVuO1xuQGJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2lsdmVyLWdyYXk7XG5AaGVhZGVyLS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBsYWJlbC0tY29sb3ItbGlnaHQ6IEBib3VsZGVyLWdyYXk7XG5Ac2VsZWN0X19hcnJvdy0tY29sb3ItbGlnaHQ6IEBzY29ycGlvbi1ncmF5O1xuQGxpbmstLWNvbG9yLWxpZ2h0OiBAYXp1cmUtcmFkaWFuY2UtYmx1ZTtcbkBkaXZpZGVyLS1ib3JkZXJDb2xvci1saWdodDogQHNjaG9vbC1idXMteWVsbG93O1xuXG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjIoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMi1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMyhAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtaGVhZGVyLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdoZWFkZXItLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGFiZWwtLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xhYmVsLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXNlbGVjdF9fYXJyb3ctLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3NlbGVjdF9fYXJyb3ctLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGluay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGluay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yICFpbXBvcnRhbnQ7IC8vIG1hcmtlZCBhcyAhaW1wb3J0YW50IHRvIG92ZXJyaWRlIGJvb3RzdHJhcFxufVxuXG4udC1kaXZpZGVyLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdkaXZpZGVyLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1kaXZpZGVyX19kYXNoLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuIl19 */"],
  encapsulation: 2
});

/***/ }),

/***/ 8667:
/*!************************************************!*\
  !*** ./src/cavve/receipt/receipt.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptComponent": () => (/* binding */ ReceiptComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var accountDashboard_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! accountDashboard/constants */ 75888);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var common_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/providers */ 61264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/webStorageService/webStorage.service */ 38898);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../frame/frame.component */ 50321);
/* harmony import */ var authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! authentication/authenticationService/authentication.service */ 44722);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../storefront/utility/utility.component */ 10061);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_print_link_print_link_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/print-link/print-link.component */ 33402);
/* harmony import */ var _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/containers/row/row.component */ 80001);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/ui/display/cmsContent/cmsContent.component */ 89707);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/ui/display/payment/paymentDisplay.component */ 38321);
/* harmony import */ var _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/ui/display/address/addressDisplay.component */ 23204);
/* harmony import */ var _common_ui_display_vehicleDisplay_vehicleDisplay_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/ui/display/vehicleDisplay/vehicleDisplay.component */ 49703);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/ui/modals/actionButtons/actionButtons.component */ 65380);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);






























function ReceiptComponent_payment_display_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "payment-display", 26);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("billingType", ctx_r1.billingInfo.billingType)("bankDetails", ctx_r1.billingInfo.eft)("creditCard", ctx_r1.billingInfo.credit)("hideTitle", true)("hideEdit", true)("showAccountNumber", true)("showNameOnCard", true);
  }
}

function ReceiptComponent_address_display_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "address-display", 27);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("address", ctx_r2.billingInfo.billingType === ctx_r2.BillingType.Credit ? ctx_r2.billingInfo.credit : ctx_r2.billingInfo.eft)("international", ctx_r2.billingInfo.billingType === ctx_r2.BillingType.Credit ? ctx_r2.billingInfo.credit.international : ctx_r2.billingInfo.eft.international)("showLabels", false)("showEdit", false);
  }
}

function ReceiptComponent_vehicle_display_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "vehicle-display", 28);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("vehicleInfo", ctx_r3.vehicleInfo);
  }
}

function ReceiptComponent_section_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "section")(1, "action-buttons", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("main", function ReceiptComponent_section_56_Template_action_buttons_main_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return ctx_r6.goToAccountOverviewOrLoginPage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "ACCOUNT OVERVIEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
}

function ReceiptComponent_section_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "section")(1, "wizard-ui", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("next", function ReceiptComponent_section_57_Template_wizard_ui_next_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return ctx_r8.nextTask($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "PROCEED");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
}

const _c0 = function () {
  return {
    "padding-top": "24px"
  };
};

const _c1 = function () {
  return {
    "padding-top": "16px",
    "padding-right": "15px"
  };
};

const _c2 = function () {
  return {
    "padding-top": "16px",
    "padding-left": "26px"
  };
};

class ReceiptComponent {
  constructor(webStorage, responseErrorService, genericRepo, window, parent, authService, uiRouterGlobals, webStorageConst, state, currentUserService) {
    var _this = this;

    this.webStorage = webStorage;
    this.responseErrorService = responseErrorService;
    this.genericRepo = genericRepo;
    this.window = window;
    this.parent = parent;
    this.authService = authService;
    this.uiRouterGlobals = uiRouterGlobals;
    this.webStorageConst = webStorageConst;
    this.state = state;
    this.currentUserService = currentUserService;
    this.BillingType = common_models__WEBPACK_IMPORTED_MODULE_2__.BillingType;
    this.paymentDetailsParams = {};
    this.currentUser = {};
    this.setUpPage = /*#__PURE__*/(0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.parent.stepNum = 4;
      _this.parent.showAccountDetailsHeader = true;

      _this.populateCMSContent();

      yield _this.authService.profile({});
      yield _this.setAccountData();
    });

    this.populateCMSContent = () => {
      this.parent.setFrameTitle(this.cmsContent.Title);
      this.paymentDetailsParams = {
        current_date: this.dateNow,
        total_paid: this.totalPaid
      };
    };

    this.setAccountData = /*#__PURE__*/(0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // if desired attributes are not null, then use what is given through $state.params.
      if (_this.uiRouterGlobals.params.billingInfo && _this.uiRouterGlobals.params.vehicleInfo) {
        _this.billingInfo = _this.uiRouterGlobals.params.billingInfo;
        _this.vehicleInfo = _this.uiRouterGlobals.params.vehicleInfo;
      } else {
        yield _this.getVehicleInfo();
        yield _this.getBillingInfo();
      }
    });
    this.getVehicleInfo = /*#__PURE__*/(0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const apiResponse = yield _this.genericRepo.dataFactory.getEZTagInfo();

      if (_this.responseErrorService.isErrorFree(apiResponse)) {
        _this.vehicleInfo = apiResponse.accountTags;
      }
    });
    this.getBillingInfo = /*#__PURE__*/(0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const apiResponse = yield _this.genericRepo.dataFactory.oneTimePaymentGetBillingInfo();

      if (_this.responseErrorService.isErrorFree(apiResponse)) {
        _this.billingInfo = apiResponse.billingInfo;
      }
    });
  }

  ngOnInit() {
    this.createAccountFromViolationsTotals = this.webStorage.getValue(this.webStorageConst.createAccountFromViolationsTotals) || {};
    this.createAccountFromViolationsTotals.totalViolationsDue = this.webStorage.getValue(this.webStorageConst.remainingPlateTotalBeforeDiscount);
    this.createAccountFromViolationsTotals.serviceFee = this.webStorage.getValue(this.webStorageConst.serviceFee);
    this.totalPaid = this.createAccountFromViolationsTotals.createAccountPlateTotal;
    this.currentUser = this.currentUserService.getCurrentUser();
    this.setUpPage();
  }

  print() {
    this.window.print();
  }

  get dateNow() {
    return new Date();
  }

  goToAccountOverviewOrLoginPage() {
    this.state.go(accountDashboard_constants__WEBPACK_IMPORTED_MODULE_1__.stateNames.Frame);
  }

  nextTask(nextState) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.state.go(nextState);
    })();
  }

}

ReceiptComponent.ɵfac = function ReceiptComponent_Factory(t) {
  return new (t || ReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_4__.WebStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_5__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_5__.GenericRepoService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](common_providers__WEBPACK_IMPORTED_MODULE_3__.WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_6__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_7__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_23__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](constants_module__WEBPACK_IMPORTED_MODULE_8__.WebStorageConst), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_23__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_5__.CurrentUserService));
};

ReceiptComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({
  type: ReceiptComponent,
  selectors: [["cavve-receipt-component"]],
  inputs: {
    cmsContent: "cmsContent",
    cmsSectionThankYou: "cmsSectionThankYou"
  },
  decls: 58,
  vars: 25,
  consts: [["storefront", ""], ["fxLayout", "column"], ["fxFlexOffset", "21px"], ["fxLayout", "row", "fxLayout.lt-md", "column", 2, "padding-top", "24px"], ["fxLayout", "column", "fxFlex", "grow", "fxFlexOrder", "1", "fxFlexOrder.lt-md", "2", "ngClass.lt-md", "u-spacing--widthFill", 3, "ngStyle.lt-md"], ["fxFlexOrder", "2", "fxFlexOrder.lt-md", "1", 3, "ngStyle", "ngStyle.lt-md"], ["id", "PrintButton"], [2, "padding-top", "24px"], [3, "rowType"], ["col-start", "", "fxFlex", "grow", 2, "font-weight", "bold"], ["col-end", "", "fxFlex", "none", 2, "font-weight", "bold"], [3, "value"], ["fxLayout", "column", "fxLayoutAlign", "center start", 2, "padding-top", "24px"], ["id", "thankYouSection", 3, "template", "data"], ["fxLayout", "row", "fxLayoutAlign", "center start", 2, "padding-top", "24px"], ["col-start", "", "fxFlex", "auto", 2, "padding-top", "15px", "padding-bottom", "15px"], ["svgIcon", "checkmark"], [1, "account-created-text"], [1, "acc-num-text"], [1, "acc-num-val"], [3, "billingType", "bankDetails", "creditCard", "hideTitle", "hideEdit", "showAccountNumber", "showNameOnCard", 4, "ngIf"], [1, "u-spacing__addressToPaymentDisplay--marginTop"], [3, "address", "international", "showLabels", "showEdit", 4, "ngIf"], ["fxLayout", "column", "fxFlex", "none", "fxLayoutAlign", "start end", "fxLayoutAlign.lt-md", "start start", "fxFlexOrder", "2", "fxFlexOrder.lt-md", "1", "ngClass.lt-md", "u-spacing--widthFill", 2, "font-weight", "bold"], ["isCompactView", "true", 3, "vehicleInfo", 4, "ngIf"], [4, "ngIf"], [3, "billingType", "bankDetails", "creditCard", "hideTitle", "hideEdit", "showAccountNumber", "showNameOnCard"], [3, "address", "international", "showLabels", "showEdit"], ["isCompactView", "true", 3, "vehicleInfo"], ["reverseOrder", "true", 3, "main"], ["action-main", ""], [3, "next"], ["wizard-next", ""]],
  template: function ReceiptComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "page-centered-container");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "storefront-utility", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "card-container")(6, "section", 3)(7, "article", 4)(8, "header")(9, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](11, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "article", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](13, "print-link", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "section", 7)(15, "row-container", 8)(16, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](17, " Payment Amount: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](18, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](19, "currency", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](20, "section", 12)(21, "article", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](22, "cms-content", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](23, "section", 14)(24, "row-container", 8)(25, "section", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](26, "mat-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](27, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](29, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](31, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](33, "section", 12)(34, "article", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](36, "section", 12)(37, "header", 1)(38, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](40, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](41, "section", 12)(42, "article");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](43, ReceiptComponent_payment_display_43_Template, 1, 7, "payment-display", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](44, "article", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](45, ReceiptComponent_address_display_45_Template, 1, 4, "address-display", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](46, "section", 3)(47, "article", 4)(48, "header")(49, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](51, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](52, "article", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](53, "section", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](54, ReceiptComponent_vehicle_display_54_Template, 1, 1, "vehicle-display", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](55, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](56, ReceiptComponent_section_56_Template, 4, 0, "section", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](57, ReceiptComponent_section_57_Template, 4, 0, "section", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction0"](21, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx.cmsSectionThankYou.Title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction0"](22, _c1))("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction0"](23, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("rowType", "emphasis");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", ctx.totalPaid);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("template", ctx.cmsSectionThankYou.paymentDetails)("data", ctx.paymentDetailsParams);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("rowType", "semi-emphasis");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx.cmsSectionThankYou.accountCreatedText);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", ctx.cmsSectionThankYou.accountNumText, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx.currentUser.acctId);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx.cmsSectionThankYou.paymentDisclaimer, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.billingInfoHeader, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.billingInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.billingInfo && ctx.billingInfo.billingType);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngStyle.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction0"](24, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.ezTagRequestedHeader, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.vehicleInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !_r0.isKioskView);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", _r0.isKioskView);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_9__.PageCenteredContainerComponent, _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_10__.StorefrontUtilityComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__.DefaultFlexOffsetDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_11__.CardContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__.DefaultFlexOrderDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__.DefaultClassDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__.DefaultStyleDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgStyle, _common_ui_print_link_print_link_component__WEBPACK_IMPORTED_MODULE_12__.PrintLinkComponent, _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_13__.RowContainerComponent, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_14__.CurrencyComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__.DefaultLayoutAlignDirective, _common_ui_display_cmsContent_cmsContent_component__WEBPACK_IMPORTED_MODULE_15__.CmsContentComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_16__.PaymentDisplayComponent, _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_17__.AddressDisplayComponent, _common_ui_display_vehicleDisplay_vehicleDisplay_component__WEBPACK_IMPORTED_MODULE_18__.VehicleDisplayComponent, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_19__.ActionButtonsComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_20__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_21__.WizardNextDirective],
  styles: ["[device-type]   [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0px 0px;\n  max-height: 70px;\n  padding-bottom: 16px;\n}\n[device-type]   [_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[device-type]   [_nghost-%COMP%]   .account-created-text[_ngcontent-%COMP%] {\n  color: #018749;\n  margin-left: 16px;\n}\n[device-type]   [_nghost-%COMP%]   #PrintButton[_ngcontent-%COMP%] {\n  color: #34353a;\n  font-family: 'Montserrat';\n  font: normal normal normal 12px/15px;\n}\n[device-type]   [_nghost-%COMP%]   mat-icon[svgIcon='checkmark'][_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-top: -2px;\n}\n[device-type]   [_nghost-%COMP%]   .acc-num-text[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: bold;\n  margin-top: 15px;\n  margin-left: 37px;\n}\n[device-type]   [_nghost-%COMP%]   .acc-num-text[_ngcontent-%COMP%]   .acc-num-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VpcHQubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxwYWdlLmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xcZm9udHMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUdZLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBSlo7QUFEQTtFQVNZLFdBQUE7QUFMWjtBQUpBO0VBYVksY0FBQTtFQUNBLGlCQUFBO0FBTlo7QUFSQTtFQzhCSSxjQUFBO0VDekJBLHlCQUFBO0VGZVEsb0NBQUE7QUFQWjtBQVdZO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQVRoQjtBQWpCQTtFQStCWSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBWFo7QUF2QkE7RUFxQ2dCLGVBQUE7QUFYaEIiLCJmaWxlIjoicmVjZWlwdC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbltkZXZpY2UtdHlwZV0ge1xuICAgIDpob3N0IHtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogNzBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWRpdmlkZXIge1xuICAgICAgICAgICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjY291bnQtY3JlYXRlZC10ZXh0IHtcbiAgICAgICAgICAgIGNvbG9yOiBAdHJvcGljYWwtcmFpbi1mb3Jlc3QtZ3JlZW47XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgICNQcmludEJ1dHRvbiB7XG4gICAgICAgICAgICAudC1ib2R5LS1jb2xvcihAdGhlbWUtbGlnaHQpO1xuICAgICAgICAgICAgLnQtYm9keS0tZm9udEZhbWlseTtcbiAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDEycHgvMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgICZbc3ZnSWNvbj0nY2hlY2ttYXJrJ10ge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hY2MtbnVtLXRleHQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzdweDtcblxuICAgICAgICAgICAgLmFjYy1udW0tdmFsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cblxuQGJvZHktLWJhY2tncm91bmRDb2xvci1saWdodDogQHdoaXRlO1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjItbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AYm9keS0tY29sb3ItbGlnaHQ6IEB0dW5hLWdyYXk7XG5AYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3ItbGlnaHQ6IEB0cm9waWNhbC1yYWluLWZvcmVzdC1ncmVlbjtcbkBib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1saWdodDogQHNpbHZlci1ncmF5O1xuQGhlYWRlci0tY29sb3ItbGlnaHQ6IEB0dW5hLWdyYXk7XG5AbGFiZWwtLWNvbG9yLWxpZ2h0OiBAYm91bGRlci1ncmF5O1xuQHNlbGVjdF9fYXJyb3ctLWNvbG9yLWxpZ2h0OiBAc2NvcnBpb24tZ3JheTtcbkBsaW5rLS1jb2xvci1saWdodDogQGF6dXJlLXJhZGlhbmNlLWJsdWU7XG5AZGl2aWRlci0tYm9yZGVyQ29sb3ItbGlnaHQ6IEBzY2hvb2wtYnVzLXllbGxvdztcblxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IyKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvcjItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjMoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMy1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWhlYWRlci0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnaGVhZGVyLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWxhYmVsLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdsYWJlbC0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1zZWxlY3RfX2Fycm93LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdzZWxlY3RfX2Fycm93LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWxpbmstLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xpbmstLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvciAhaW1wb3J0YW50OyAvLyBtYXJrZWQgYXMgIWltcG9ydGFudCB0byBvdmVycmlkZSBib290c3RyYXBcbn1cblxuLnQtZGl2aWRlci0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnZGl2aWRlci0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtZGl2aWRlcl9fZGFzaC0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG4udC1oZWFkZXItLWZvbnRGYW1pbHkoKSB7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LWpvc3Q7XG59XG5cbi50LWJvZHktLWZvbnRGYW1pbHkoKSB7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LW1vbnRzZXJyYXQ7XG59XG4iXX0= */"]
});

/***/ }),

/***/ 87144:
/*!******************************!*\
  !*** ./src/cavve/routing.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "stateGuard": () => (/* binding */ stateGuard)
/* harmony export */ });
/* harmony import */ var common_resolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/resolvers */ 1444);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var violations_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! violations/constants */ 27520);
/* harmony import */ var cms_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cms/constants */ 40739);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frame/frame.component */ 50321);
/* harmony import */ var _offer_offer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offer/offer.component */ 74709);
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personal/personal.component */ 68369);
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./billing/billing.component */ 67733);
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./confirm/confirm.component */ 51319);
/* harmony import */ var _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./receipt/receipt.component */ 8667);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants */ 73748);
/* harmony import */ var home_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! home/constants */ 59119);




//cavve components








const stateGuard = (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.StateGuard)(constants_module__WEBPACK_IMPORTED_MODULE_1__.webStorageConst.cavveCurrentStep, _constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Offer);
const cavveStates = [
    {
        name: _constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Root,
        abstract: true,
        component: _frame_frame_component__WEBPACK_IMPORTED_MODULE_4__.FrameComponent,
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.anonymous),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.UsStatesResolver)('usStates'),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CountryResolver)('countries'),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.MaintenanceFeature.Violations),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cmsBaseContent', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_10__.cmsIds.Root })
        ]
    },
    {
        name: _constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Offer,
        url: _constants__WEBPACK_IMPORTED_MODULE_10__.urlPaths.Offer,
        component: _offer_offer_component__WEBPACK_IMPORTED_MODULE_5__.OfferComponent,
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.anonymous),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('landingPageInfo', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_10__.cmsIds.Offer }),
            stateGuard()
        ],
        wizard: {
            nextState: _constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Personal,
            prevState: violations_constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Landing
        }
    },
    {
        name: _constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Personal,
        url: _constants__WEBPACK_IMPORTED_MODULE_10__.urlPaths.Personal,
        component: _personal_personal_component__WEBPACK_IMPORTED_MODULE_6__.PersonalComponent,
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.anonymous),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('personalPageInfo', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_10__.cmsIds.PersonalInfoPage }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cancelMessageContent', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_10__.cmsIds.CancelMessages }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('pwCmsData', { ItemId: cms_constants__WEBPACK_IMPORTED_MODULE_3__.commonCmsIds.passwordValidation, mergeParams: true }),
            stateGuard()
        ],
        wizard: {
            nextState: _constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Billing,
            prevState: _constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Offer,
            cancelState: _constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Offer
        }
    },
    {
        name: _constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Billing,
        url: _constants__WEBPACK_IMPORTED_MODULE_10__.urlPaths.Billing,
        component: _billing_billing_component__WEBPACK_IMPORTED_MODULE_7__.BillingComponent,
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.anonymous),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cmsContent', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_10__.cmsIds.Billing }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cancelMessageContent', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_10__.cmsIds.CancelMessages }),
            stateGuard()
        ],
        params: {
            billingInfo: null,
            eftAddress: null
        },
        wizard: {
            nextState: _constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Confirm,
            prevState: _constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Personal,
            cancelState: _constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Offer
        }
    },
    {
        name: _constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Confirm,
        url: _constants__WEBPACK_IMPORTED_MODULE_10__.urlPaths.Confirm,
        component: _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__.ConfirmComponent,
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.anonymous),
            stateGuard({
                explicitlyForbidden: [_constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Receipt]
            }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cmsContent', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_10__.cmsIds.Confirm }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cmsSectionConfirmOrderSummary', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_10__.cmsIds.ConfirmOrderSummarySection })
        ],
        params: {
            //TODO: This should be cleaned up when ETC fix thier set violatorCall to include address
            //BUG 58048
            eftAddress: null
        },
        wizard: {
            nextState: _constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Receipt,
            prevState: _constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Billing,
            cancelState: _constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Offer
        }
    },
    {
        name: _constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Receipt,
        url: _constants__WEBPACK_IMPORTED_MODULE_10__.urlPaths.Receipt,
        component: _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_9__.ReceiptComponent,
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.anonymous),
            stateGuard({
                denyRefresh: true,
                explicitlyAllowed: [_constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Confirm],
                explicitlyForbidden: [home_constants__WEBPACK_IMPORTED_MODULE_11__.stateNames.Frame]
            }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cmsContent', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_10__.cmsIds.Receipt, mergeParams: true }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cmsSectionThankYou', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_10__.cmsIds.ReceiptThankYouSection, mergeParams: true })
        ],
        params: {
            vehicleInfo: null,
            billingInfo: null
        },
        wizard: {
            nextState: home_constants__WEBPACK_IMPORTED_MODULE_11__.stateNames.Frame,
            isEndState: true
        }
    }
];
const routes = [...cavveStates];


/***/ })

}]);
//# sourceMappingURL=523.dd85ef41f8e80e35.js.map