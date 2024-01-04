"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[221],{

/***/ 42837:
/*!********************************************************!*\
  !*** ./src/makePayment/checkout/checkout.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutComponent": () => (/* binding */ CheckoutComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces */ 11744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frame/frame.component */ 9977);
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uirouter/core */ 7199);
/* harmony import */ var _services_webApi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/webApi.service */ 34839);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/ui/display/payment/paymentDisplay.component */ 38321);
/* harmony import */ var _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/display/address/addressDisplay.component */ 23204);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../pipes/dateWithTimeZone/dateWithTimeZone.pipe */ 29719);





















function CheckoutComponent_section_10_section_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "section")(1, "div", 14)(2, "div")(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 15)(6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r2.cmsContent.paymentMethodSaved);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r2.addToPaymentList === true ? ctx_r2.AddToPaymentListEnum.Yes : ctx_r2.AddToPaymentListEnum.No, " ");
  }
}

function CheckoutComponent_section_10_address_display_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "address-display", 16);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("address", ctx_r3.address)("international", ctx_r3.address.international)("showLabels", true);
  }
}

function CheckoutComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "payment-display", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, CheckoutComponent_section_10_section_2_Template, 8, 2, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, CheckoutComponent_section_10_address_display_3_Template, 1, 3, "address-display", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("billingType", ctx_r0.billingInfo.billingType)("bankDetails", ctx_r0.billingInfo.eft)("creditCard", ctx_r0.billingInfo.credit)("hideTitle", true)("showAccountNumber", true)("showNameOnCard", true)("showLabels", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.isPendingFunds);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.address);
  }
}

class CheckoutComponent {
  constructor(parent, stateService, webApiService, currentUserService, userRoles) {
    this.parent = parent;
    this.stateService = stateService;
    this.webApiService = webApiService;
    this.currentUserService = currentUserService;
    this.userRoles = userRoles;
    this.AddToPaymentListEnum = _interfaces__WEBPACK_IMPORTED_MODULE_2__.AddToPaymentListEnum;
  }

  get address() {
    return this.billingInfo.credit || this.billingInfo.eft;
  }

  ngOnInit() {
    this.parent.scrollToTop();
    const {
      amount,
      ...rest
    } = this.parent.paymentInfo;
    const {
      addToPaymentList,
      makePrimary,
      newMethodAdded,
      ...restBillingInfo
    } = rest;
    this.makePrimary = makePrimary;
    this.newMethodAdded = newMethodAdded;
    this.setAddToPaymentList(addToPaymentList, makePrimary);
    this.billingInfo = restBillingInfo;
    this.paymentAmount = amount;
    this.paymentDate = this.parent.getDate();
    this.isPendingFunds = this.parent.checkUserRolePendingFunds();
  }

  setAddToPaymentList(addToPaymentList, makePrimary) {
    if (this.parent.checkUserRolePendingFunds() && makePrimary) {
      this.addToPaymentList = true;
    } else {
      this.addToPaymentList = addToPaymentList;
    }
  }

  nextStep(state) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.addToPaymentList || _this.makePrimary) {
        const saveErrors = yield _this.addPaymentToList();

        if (saveErrors && saveErrors.length) {
          return;
        }
      }

      const errors = yield _this.webApiService.makePayment({
        amount: _this.paymentAmount,
        ..._this.billingInfo
      });

      if (errors && errors.length) {
        return;
      }

      if (_this.isPendingFunds) {
        _this.currentUserService.makeSessionActive('A', _this.userRoles.active);
      }

      yield _this.stateService.go(state);
    })();
  }

  addPaymentToList() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const payload = _this2.mapPayload();

      return yield _this2.webApiService.addPaymentMethodInfo(payload);
    })();
  }

  mapPayload() {
    const isCredit = this.billingInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit;
    return {
      paymentMethod: { ...(this.billingInfo.credit || this.billingInfo.eft),
        billingType: isCredit ? 0 : 1,
        billingTypeCode: isCredit ? 'C' : 'E',
        billingTypeDisplay: isCredit ? 'CREDIT' : 'EFT',
        primary: this.makePrimary
      }
    };
  }

  cancel(state) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.stateService.go(state);
    })();
  }

  previous(state) {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.stateService.go(state);
    })();
  }

}

CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) {
  return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_uirouter_core__WEBPACK_IMPORTED_MODULE_4__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_webApi_service__WEBPACK_IMPORTED_MODULE_5__.WebApiService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.CurrentUserService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](constants_module__WEBPACK_IMPORTED_MODULE_7__.UserRoles));
};

CheckoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
  type: CheckoutComponent,
  selectors: [["make-payment-checkout-component"]],
  inputs: {
    cmsContent: "cmsContent"
  },
  decls: 30,
  vars: 11,
  consts: [["fxLayout", "row", "fxLayoutAlign", "space-between end"], [3, "click"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between end", 1, "summary", "paymentAmount"], [3, "value"], ["fxLayout", "row", "fxLayoutAlign", "space-between end", 1, "summary"], ["translation-skip", ""], [3, "next", "cancel", "previous"], ["Wizard", ""], ["wizard-next", ""], ["wizard-cancel", ""], ["wizard-previous", ""], [3, "billingType", "bankDetails", "creditCard", "hideTitle", "showAccountNumber", "showNameOnCard", "showLabels"], [3, "address", "international", "showLabels", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "u-spacing--widthFill"], [2, "text-align", "right"], [3, "address", "international", "showLabels"]],
  template: function CheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "page-centered-container")(1, "card-container")(2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "header", 0)(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CheckoutComponent_Template_a_click_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r4);

        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](23);

        return _r1.gotoPreviousState();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](9, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, CheckoutComponent_section_10_Template, 4, 9, "section", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "section")(12, "div", 3)(13, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](15, "currency", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "div", 5)(17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](21, "dateWithTimeZone");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "wizard-ui", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("next", function CheckoutComponent_Template_wizard_ui_next_22_listener($event) {
        return ctx.nextStep($event);
      })("cancel", function CheckoutComponent_Template_wizard_ui_cancel_22_listener($event) {
        return ctx.cancel($event);
      })("previous", function CheckoutComponent_Template_wizard_ui_previous_22_listener($event) {
        return ctx.previous($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25, "submit payment");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27, "cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](29, "previous");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx.cmsContent.LongDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.Title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.edit, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.billingInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", ctx.cmsContent.payment, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx.paymentAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", ctx.cmsContent.paymentDate, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](21, 8, ctx.paymentDate, "date4"));
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_8__.PageCenteredContainerComponent, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_9__.CardContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutAlignDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_10__.PaymentDisplayComponent, _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_11__.AddressDisplayComponent, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_12__.CurrencyComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_13__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_14__.WizardNextDirective],
  pipes: [_pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_15__.DateWithTimeZonePipe],
  styles: ["[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-next][_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-cancel][_ngcontent-%COMP%], [_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-previous][_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]    + section[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n  margin-top: 16px;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .summary[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 16px;\n  padding-bottom: 11px;\n  font-size: 16px;\n  line-height: 26px;\n  font-weight: bold;\n  margin: 0px -16px;\n}\n[_nghost-%COMP%]   .paymentAmount[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #e0e0ef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0Lmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcY3VzdG9tXFxzcGFjaW5nXFxzZWN0aW9ucy5sZXNzIiwiLi5cXC4uXFxzdHlsZXNcXGN1c3RvbVxcc3BhY2luZ1xcZGl2aWRlcnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUdRLGNBQUE7RUNXQSxnQkFBQTtBRGhCUjtBQUVBO0VBT1kseUJBQUE7QUFOWjtBQURBOztFQVlZLDBCQUFBO0FBUFo7QUFMQTtFQ1VRLG1CQUFBO0FERlI7QUFSQTtFQ01RLGdCQUFBO0FES1I7QUFYQTtFQXlCUSxXQUFBO0VFNUJBLGdCQUFBO0VBQ0EsbUJBQUE7QUZrQlI7QUFoQkE7RUE4QlEsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFYUjtBQXpCQTtFQXdDUSxtQkFBQTtFQUNBLHlCQUFBO0FBWlIiLCJmaWxlIjoiY2hlY2tvdXQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvY3VzdG9tL3NwYWNpbmcvc2VjdGlvbnMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL2RpdmlkZXJzLmxlc3MnO1xuXG46aG9zdCB7XG5cbiAgICB3aXphcmQtdWkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wKCk7XG5cbiAgICAgICAgW3dpemFyZC1uZXh0XSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgW3dpemFyZC1jYW5jZWxdLFxuICAgICAgICBbd2l6YXJkLXByZXZpb3VzXSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHAge1xuICAgICAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luQm90dG9tKCk7XG4gICAgfVxuXG4gICAgc2VjdGlvbiArIHNlY3Rpb24ge1xuICAgICAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luVG9wKCk7XG4gICAgfVxuXG4gICAgbWF0LWRpdmlkZXIge1xuICAgICAgICB3aWR0aDogQHdpZHRoLWRpdmlkZXI7XG4gICAgICAgIC5yZWZyZXNoLTIwMjAudS1zcGFjaW5nX19kaXZpZGVyLS1tYXJnaW5Ub3BCb3R0b20oKTtcbiAgICB9XG5cbiAgICAuc3VtbWFyeSB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDExcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW46IDBweCAtMTZweDtcbiAgICB9XG5cbiAgICAucGF5bWVudEFtb3VudCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBzbnVmZi1ncmF5O1xuICAgIH1cbn1cbiIsIi5yZWZyZXNoLTIwMjAge1xuICAgIC8vIERlc2t0b3BcbiAgICAudS1zcGFjaW5nX19maWVsZFRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19oZWFkZXJUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Cb3R0b20ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcEhhbGYge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2J1dHRvblRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmlyc3RIZWFkZXJUb1RpdGxlLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fYWRkcmVzc1RvUGF5bWVudERpc3BsYXktLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuICAgIC8vIE1vYmlsZVxuICAgICYubHQtbWQsXG4gICAgLmx0LW1kIHtcbiAgICAgICAgLnUtc3BhY2luZ19fY2FyZFRvQ2FyZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIucmVmcmVzaC0yMDIwIHtcbiAgICAudS1zcGFjaW5nX19kaXZpZGVyLS1tYXJnaW5Ub3BCb3R0b20ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 9977:
/*!**************************************************!*\
  !*** ./src/makePayment/frame/frame.component.ts ***!
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ 77308);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var makePayment_services_paymentInfo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! makePayment/services/paymentInfo.service */ 90035);
/* harmony import */ var common_services_session_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/services/session/session.service */ 19511);
/* harmony import */ var _common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui/wizard/stepper/stepper.component */ 63457);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @uirouter/angular */ 99305);












class FrameComponent {
  constructor(windowRef, paymentInfoService, session) {
    this.windowRef = windowRef;
    this.paymentInfoService = paymentInfoService;
    this.session = session;
    this.steps = [];
    this.stepMap = {
      [_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.Landing]: 1,
      [_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.Checkout]: 2,
      [_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.Receipt]: 3
    };

    this.checkUserRolePendingFunds = () => this.session.userRole === constants_module__WEBPACK_IMPORTED_MODULE_5__.userRoles.pendingFunds;
  }

  set paymentInfo(info) {
    this.paymentInfoService.paymentInfo = info;
  }

  get paymentInfo() {
    return this.paymentInfoService.paymentInfo;
  }

  getDate() {
    return new Date();
  }

  ngOnInit() {
    this.steps = [{
      name: this.baseCmsContent.step1,
      background: 'secondary'
    }, {
      name: this.baseCmsContent.step2,
      background: 'secondary'
    }, {
      name: this.baseCmsContent.step3,
      background: 'secondary'
    }];
  }

  ngOnDestroy() {
    this.paymentInfo = null;
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
  return new (t || FrameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](common_providers__WEBPACK_IMPORTED_MODULE_2__.WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](makePayment_services_paymentInfo_service__WEBPACK_IMPORTED_MODULE_6__.PaymentInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](common_services_session_session_service__WEBPACK_IMPORTED_MODULE_7__.SessionService));
};

FrameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: FrameComponent,
  selectors: [["make-payment-frame-component"]],
  inputs: {
    baseCmsContent: "baseCmsContent",
    stateList: "stateList",
    countryList: "countryList"
  },
  decls: 4,
  vars: 3,
  consts: [[1, "refresh-2020"], [3, "steps", "stepMap"], ["hasAlternateBackgroundColor", "true"]],
  template: function FrameComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "main", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "stepper", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "page-centered-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ui-view");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("steps", ctx.steps)("stepMap", ctx.stepMap);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@hide", ctx.isHidden);
    }
  },
  directives: [_common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_8__.StepperComponent, _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_9__.PageCenteredContainerComponent, _uirouter_angular__WEBPACK_IMPORTED_MODULE_11__.UIView],
  styles: ["[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  background-color: #efeff4;\n}\n[_nghost-%COMP%]   stepper[_ngcontent-%COMP%] {\n  display: block;\n  min-height: 32px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   stepper[_ngcontent-%COMP%] {\n    min-height: unset;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1lLmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xccGFnZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VDb0JJLHlCQUFBO0FEckJKO0FBQ0E7RUFPUSxjQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQU9RO0VBQUE7SUFDSSxpQkFBQTtFQUpWO0FBQ0YiLCJmaWxlIjoiZnJhbWUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5cbi8vIGxlc3NoaW50LWRpc2FibGUtbmV4dC1saW5lIGVtcHR5UnVsZVxuOmhvc3Qge1xuXG4gICAgbWFpbiB7XG4gICAgICAgIC50LWJvZHktLWJhY2tncm91bmRDb2xvcjIoQHRoZW1lLWxpZ2h0KTtcbiAgICB9XG5cbiAgICBzdGVwcGVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMycHg7XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LW1kIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IHVuc2V0O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3ItbGlnaHQ6IEB3aGl0ZTtcbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3IyLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMy1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWNvbG9yLWxpZ2h0OiBAdHVuYS1ncmF5O1xuQGJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLWxpZ2h0OiBAdHJvcGljYWwtcmFpbi1mb3Jlc3QtZ3JlZW47XG5AYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItbGlnaHQ6IEBzaWx2ZXItZ3JheTtcbkBoZWFkZXItLWNvbG9yLWxpZ2h0OiBAdHVuYS1ncmF5O1xuQGxhYmVsLS1jb2xvci1saWdodDogQGJvdWxkZXItZ3JheTtcbkBzZWxlY3RfX2Fycm93LS1jb2xvci1saWdodDogQHNjb3JwaW9uLWdyYXk7XG5AbGluay0tY29sb3ItbGlnaHQ6IEBhenVyZS1yYWRpYW5jZS1ibHVlO1xuQGRpdmlkZXItLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2Nob29sLWJ1cy15ZWxsb3c7XG5cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvci1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IyLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IzKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvcjMtQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1oZWFkZXItLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2hlYWRlci0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1sYWJlbC0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGFiZWwtLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtc2VsZWN0X19hcnJvdy0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnc2VsZWN0X19hcnJvdy0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1saW5rLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdsaW5rLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3IgIWltcG9ydGFudDsgLy8gbWFya2VkIGFzICFpbXBvcnRhbnQgdG8gb3ZlcnJpZGUgYm9vdHN0cmFwXG59XG5cbi50LWRpdmlkZXItLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2RpdmlkZXItLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWRpdmlkZXJfX2Rhc2gtLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG4iXX0= */"],
  data: {
    animation: [animations_hide__WEBPACK_IMPORTED_MODULE_1__.hideTrigger]
  }
});

/***/ }),

/***/ 11744:
/*!***************************************!*\
  !*** ./src/makePayment/interfaces.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToPaymentListEnum": () => (/* binding */ AddToPaymentListEnum)
/* harmony export */ });
var AddToPaymentListEnum;
(function (AddToPaymentListEnum) {
    AddToPaymentListEnum["Yes"] = "Yes";
    AddToPaymentListEnum["No"] = "No";
})(AddToPaymentListEnum || (AddToPaymentListEnum = {}));


/***/ }),

/***/ 5285:
/*!******************************************************!*\
  !*** ./src/makePayment/landing/landing.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var _common_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/utilities */ 56516);
/* harmony import */ var account_pending_funds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! account/pending-funds */ 40277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../frame/frame.component */ 9977);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _services_webApi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/webApi.service */ 34839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _validation_min_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../validation/min.directive */ 44854);
/* harmony import */ var _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../validation/errorMessages/errorMessages.component */ 65316);
/* harmony import */ var _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../validation/errorMessages/errorMessage.component */ 79636);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _common_ui_form_entry_paymentSelection_paymentSelection_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/ui/form-entry/paymentSelection/paymentSelection.component */ 48305);
/* harmony import */ var common_billing_eftAchDisclaimer_eftAchDisclaimer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! common/billing/eftAchDisclaimer/eftAchDisclaimer.component */ 29565);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../pipes/safeHtml.pipe */ 49985);





























const _c0 = function (a0) {
  return {
    "display": a0
  };
};

class LandingComponent {
  constructor(parent, stateService, api, currencyPipe, uiRouterGlobals, pendingFundsFacade, currentUserService) {
    this.parent = parent;
    this.stateService = stateService;
    this.api = api;
    this.currencyPipe = currencyPipe;
    this.uiRouterGlobals = uiRouterGlobals;
    this.pendingFundsFacade = pendingFundsFacade;
    this.currentUserService = currentUserService;
    this.paymentMethods = [];
    this.allPaymentMethods = [];
    this.minimumPaymentAmount = 1;
    this.defaultPaymentAmount = 10;
    this.paymentAmountFocus = false;
  }

  switchTo(input) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.paymentAmountFocus = true;
      yield (0,_common_utilities__WEBPACK_IMPORTED_MODULE_2__.wait)(0);
      input.focus();
      input.select();
    })();
  }

  ngOnInit() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      _this2.parent.scrollToTop();

      const savedPaymentMethods = yield _this2.api.getAllPaymentMethods();
      _this2.maxCards = savedPaymentMethods.maxCards;
      _this2.maxEft = savedPaymentMethods.maxEfts;
      _this2.allPaymentMethods = [...(savedPaymentMethods.bankAccounts || []).filter(x => x).map(eft => ({
        billingType: common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft,
        primary: eft.primary,
        eft
      })), ...(savedPaymentMethods.creditCards || []).filter(x => x).map(credit => ({
        billingType: common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit,
        primary: credit.primary,
        credit
      }))];
      _this2.paymentMethods = _this2.allPaymentMethods.filter(_this2.isNonBlockedPaymentMethod).sort((a, b) => _this2.getRank(b) - _this2.getRank(a)); //  this.paymentMethods = [];

      const paymentInfo = _this2.parent.paymentInfo;

      if (paymentInfo) {
        const {
          amount,
          ...billingInfo
        } = paymentInfo;
        _this2.paymentAmount = amount;
        yield _this2.setMinPaymentAmt();
        _this2.selectedMethod = _this2.paymentMethods.find(_this2.matchingPaymentMethod(billingInfo));

        if (!_this2.selectedMethod) {
          _this2.paymentMethods.push(billingInfo);

          _this2.selectedMethod = billingInfo;
        }
      } else if (_this2.paymentMethods.length > 0) {
        _this2.selectedMethod = _this2.paymentMethods[0];
      }

      if (!_this2.paymentAmount) {
        _this2.paymentAmount = _this2.defaultPaymentAmount;

        _this2.setPaymentAmt();
      }

      _this2.acctActivity = (_a = _this2.currentUserService.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.acctActivity;
    })();
  }

  setMinPaymentAmt() {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.parent.checkUserRolePendingFunds()) {
        const rebillAmt = yield _this3.pendingFundsFacade.getRebillAmt();
        _this3.minimumPaymentAmount = rebillAmt;
      }
    })();
  }

  setPaymentAmt() {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let rebillAmt = -1;

      if (_this4.parent.checkUserRolePendingFunds()) {
        const params = _this4.uiRouterGlobals.params;

        if (params && params.source && params.source.name) {
          switch (params.source.name.toUpperCase()) {
            case 'PENDING-FUNDS':
              rebillAmt = params.source.data ? params.source.data.rebillAmt : -1;
              _this4.origin = account_pending_funds__WEBPACK_IMPORTED_MODULE_3__.Models["pending-funds"];
              break;

            default:
              break;
          }
        } else {
          rebillAmt = yield _this4.pendingFundsFacade.getRebillAmt();
        }

        if (rebillAmt > 0) {
          _this4.paymentAmount = rebillAmt;
          _this4.minimumPaymentAmount = rebillAmt;
        }
      }
    })();
  }

  isNonBlockedPaymentMethod(paymentMethod) {
    let isBlocked = true;

    if (paymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit) {
      isBlocked = paymentMethod.credit.isBlocked;
    } else if (paymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft) {
      isBlocked = paymentMethod.eft.isBlocked;
    }

    return !isBlocked;
  }

  get paymentAmountWithCurrency() {
    try {
      return this.currencyPipe.transform(this.paymentAmount, 'USD');
    } catch (e) {
      return '';
    }
  }

  get openEftSlots() {
    return this.maxEft - this.allPaymentMethods.filter(x => x.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft).length;
  }

  get openCardSlots() {
    return this.maxCards - this.allPaymentMethods.filter(x => x.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit).length;
  }

  get showMakePrimary() {
    return this.openEftSlots === this.maxEft && this.openCardSlots === this.maxCards;
  }

  matchingPaymentMethod(paymentMethod) {
    return testPaymentMethod => {
      const info = paymentMethod.eft || paymentMethod.credit;
      const testInfo = testPaymentMethod.eft || testPaymentMethod.credit;
      return info.accountBillingMethodId === testInfo.accountBillingMethodId && !!info.accountBillingMethodId;
    };
  }

  getRank(paymentMethod) {
    let rank = 0;
    rank += paymentMethod.primary ? 4 : 0;
    rank += paymentMethod.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit ? 2 : 1;
    return rank;
  }

  nextStep(state) {
    var _this5 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.parent.paymentInfo = {
        amount: _this5.paymentAmount,
        ..._this5.selectedMethod
      };
      yield _this5.stateService.go(state);
    })();
  }

}

LandingComponent.ɵfac = function LandingComponent_Factory(t) {
  return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_4__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_21__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_webApi_service__WEBPACK_IMPORTED_MODULE_5__.WebApiService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_22__.CurrencyPipe), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_21__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](account_pending_funds__WEBPACK_IMPORTED_MODULE_3__.PendingFundsFacadeService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.CurrentUserService));
};

LandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({
  type: LandingComponent,
  selectors: [["make-payment-landing-component"]],
  inputs: {
    cmsContent: "cmsContent"
  },
  decls: 40,
  vars: 25,
  consts: [["hasAlternateBackgroundColor", "true"], ["validation-focus", "", "novalidate", ""], ["Form", "ngForm"], [3, "innerHTML"], [3, "error-check"], ["type", "text", "name", "paymentAmountDisplay", 3, "ngStyle", "value", "focus"], ["paymentAmountInputDisplay", ""], ["type", "number", "step", ".01", "tabindex", "-1", "name", "paymentAmount", "pattern", "^[0-9]*(\\.[0-9]{0,2})?$", "required", "", 3, "ngStyle", "ngModel", "min", "ngModelChange", "blur"], ["paymentAmountInput", "ngModel", "paymentAmountElm", ""], [3, "errors"], ["rule", "required"], ["rule", "pattern"], ["rule", "min"], [3, "value"], [3, "paymentMethods", "selectedPaymentMethod", "stateList", "countryList", "required", "selectedPaymentMethodChange", "otherPaymentMethodSelected"], ["PaymentSelection", ""], [3, "disabled", "next"], ["Wizard", ""], ["wizard-next", ""], ["wizard-cancel", ""]],
  template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "form", 1, 2)(3, "card-container")(4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](6, "mat-divider")(7, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](8, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](11, "section", 4)(12, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](14, "div")(15, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("focus", function LandingComponent_Template_input_focus_15_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r6);

        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](19);

        return ctx.switchTo(_r3);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](17, "input", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("ngModelChange", function LandingComponent_Template_input_ngModelChange_17_listener($event) {
        return ctx.paymentAmount = $event;
      })("blur", function LandingComponent_Template_input_blur_17_listener() {
        return ctx.paymentAmountFocus = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](20, "error-messages", 9)(21, "error-message", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](22, "Please enter a valid payment amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](23, "error-message", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](24, "Please enter a valid payment amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](25, "error-message", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](26, "Please enter an amount equal to or greater than ");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](27, "currency", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](28, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](30, "section")(31, "payment-selection-component", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("selectedPaymentMethodChange", function LandingComponent_Template_payment_selection_component_selectedPaymentMethodChange_31_listener($event) {
        return ctx.selectedMethod = $event;
      })("otherPaymentMethodSelected", function LandingComponent_Template_payment_selection_component_otherPaymentMethodSelected_31_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r6);

        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](32);

        return _r4.addNewPaymentMethod(ctx.openEftSlots, ctx.openCardSlots, ctx.showMakePrimary, ctx.acctActivity);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](33, "eft-ach-disclaimer");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](34, "wizard-ui", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("next", function LandingComponent_Template_wizard_ui_next_34_listener($event) {
        return ctx.nextStep($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](36, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](37, "continue");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](38, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](39, "cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](2);

      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](18);

      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx.cmsContent.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](8, 19, ctx.cmsContent.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx.cmsContent.entryTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("error-check", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx.cmsContent.amountLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](21, _c0, ctx.paymentAmountFocus ? "none" : "inherit"))("value", ctx.paymentAmountWithCurrency);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](23, _c0, ctx.paymentAmountFocus ? "inherit" : "none"))("ngModel", ctx.paymentAmount)("min", ctx.minimumPaymentAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("errors", _r2.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("value", ctx.minimumPaymentAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.selectionTitle, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("paymentMethods", ctx.paymentMethods)("selectedPaymentMethod", ctx.selectedMethod)("stateList", ctx.parent.stateList)("countryList", ctx.parent.countryList)("required", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("disabled", _r0.submitted && _r0.invalid);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_7__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_8__.FocusDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_9__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDivider, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_10__.ErrorCheckDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatLabel, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__.DefaultStyleDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NumberValueAccessor, _validation_min_directive__WEBPACK_IMPORTED_MODULE_11__.MinDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgModel, _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_12__.ErrorMessagesComponent, _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_13__.ErrorMessageComponent, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_14__.CurrencyComponent, _common_ui_form_entry_paymentSelection_paymentSelection_component__WEBPACK_IMPORTED_MODULE_15__.PaymentSelectionComponent, common_billing_eftAchDisclaimer_eftAchDisclaimer_component__WEBPACK_IMPORTED_MODULE_16__.EftAchDisclaimerComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_17__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_18__.WizardNextDirective],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_19__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n  margin-top: 16px;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  margin-bottom: 16px;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-next][_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-cancel][_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n[_nghost-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFxjdXN0b21cXHNwYWNpbmdcXGRpdmlkZXJzLmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcY3VzdG9tXFxzcGFjaW5nXFxzZWN0aW9ucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBR1EsV0FBQTtFQ1BBLGdCQUFBO0VBQ0EsbUJBQUE7QURDUjtBQUVBO0VFYVEsZ0JBQUE7RUZKQSxtQkFBQTtBQVBSO0FBRkE7RUFhUSxjQUFBO0VFQUEsZ0JBQUE7QUZQUjtBQU5BO0VBaUJZLHlCQUFBO0FBUlo7QUFUQTtFQXFCWSwwQkFBQTtBQVRaO0FBWkE7RUEwQlEseUJBQUE7QUFYUiIsImZpbGUiOiJsYW5kaW5nLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL3NlY3Rpb25zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL2RpdmlkZXJzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcblxuLy8gbGVzc2hpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZW1wdHlSdWxlXG46aG9zdCB7XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICAgICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX2RpdmlkZXItLW1hcmdpblRvcEJvdHRvbSgpO1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wKCk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgd2l6YXJkLXVpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIC5yZWZyZXNoLTIwMjAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcCgpO1xuXG4gICAgICAgIFt3aXphcmQtbmV4dF0ge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIFt3aXphcmQtY2FuY2VsXSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hdC1sYWJlbCB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxufVxuIiwiLnJlZnJlc2gtMjAyMCB7XG4gICAgLnUtc3BhY2luZ19fZGl2aWRlci0tbWFyZ2luVG9wQm90dG9tIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59XG4iLCIucmVmcmVzaC0yMDIwIHtcbiAgICAvLyBEZXNrdG9wXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19faGVhZGVyVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luQm90dG9tIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3BIYWxmIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19idXR0b25Ub0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpcnN0SGVhZGVyVG9UaXRsZS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2FkZHJlc3NUb1BheW1lbnREaXNwbGF5LS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cbiAgICAvLyBNb2JpbGVcbiAgICAmLmx0LW1kLFxuICAgIC5sdC1tZCB7XG4gICAgICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 8221:
/*!***********************************!*\
  !*** ./src/makePayment/module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsIds": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_10__.CmsIds),
/* harmony export */   "FeatureToggles": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_10__.FeatureToggles),
/* harmony export */   "MakePaymentModule": () => (/* binding */ MakePaymentModule),
/* harmony export */   "Routes": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_10__.Routes),
/* harmony export */   "StateNames": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_10__.StateNames),
/* harmony export */   "cmsIds": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_10__.cmsIds),
/* harmony export */   "featureToggles": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_10__.featureToggles),
/* harmony export */   "stateNames": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_10__.stateNames),
/* harmony export */   "urlPaths": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_10__.urlPaths)
/* harmony export */ });
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @uirouter/angular */ 99305);
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ 45046);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _services_webApi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/webApi.service */ 34839);
/* harmony import */ var pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pipes/module */ 20445);
/* harmony import */ var validation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! validation/module */ 26186);
/* harmony import */ var storefront_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! storefront/module */ 89550);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./frame/frame.component */ 9977);
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/landing.component */ 5285);
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkout/checkout.component */ 42837);
/* harmony import */ var _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./receipt/receipt.component */ 25674);
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routing */ 65981);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants */ 77308);
/* harmony import */ var _services_paymentInfo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/paymentInfo.service */ 90035);
/* harmony import */ var account_pending_funds__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! account/pending-funds */ 40277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 28596);











//components











const componentDictionary = {
    [_constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Root]: _frame_frame_component__WEBPACK_IMPORTED_MODULE_5__.FrameComponent,
    [_constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Landing]: _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__.LandingComponent,
    [_constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Checkout]: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__.CheckoutComponent,
    [_constants__WEBPACK_IMPORTED_MODULE_10__.stateNames.Receipt]: _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_8__.ReceiptComponent
};
const routesWithComponents = _routing__WEBPACK_IMPORTED_MODULE_9__.routes.map(route => ({
    ...route,
    component: componentDictionary[route.name]
}));
class MakePaymentModule {
}
MakePaymentModule.ɵfac = function MakePaymentModule_Factory(t) { return new (t || MakePaymentModule)(); };
MakePaymentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: MakePaymentModule });
MakePaymentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        _services_webApi_service__WEBPACK_IMPORTED_MODULE_1__.WebApiService,
        _services_paymentInfo_service__WEBPACK_IMPORTED_MODULE_11__.PaymentInfoService
    ], imports: [[
            pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            validation_module__WEBPACK_IMPORTED_MODULE_3__.ValidationModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__.FlexLayoutModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule,
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_19__.UIRouterModule.forChild({ states: routesWithComponents }),
            common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
            storefront_module__WEBPACK_IMPORTED_MODULE_4__.StorefrontModule,
            account_pending_funds__WEBPACK_IMPORTED_MODULE_12__.AccountPendingFundsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](MakePaymentModule, { declarations: [_frame_frame_component__WEBPACK_IMPORTED_MODULE_5__.FrameComponent,
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__.LandingComponent,
        _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__.CheckoutComponent,
        _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_8__.ReceiptComponent], imports: [pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        validation_module__WEBPACK_IMPORTED_MODULE_3__.ValidationModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__.FlexLayoutModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule, _uirouter_angular__WEBPACK_IMPORTED_MODULE_19__.UIRouterModule, common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
        storefront_module__WEBPACK_IMPORTED_MODULE_4__.StorefrontModule,
        account_pending_funds__WEBPACK_IMPORTED_MODULE_12__.AccountPendingFundsModule] }); })();


/***/ }),

/***/ 25674:
/*!******************************************************!*\
  !*** ./src/makePayment/receipt/receipt.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptComponent": () => (/* binding */ ReceiptComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var profile_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! profile/constants */ 30129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/core */ 7199);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../frame/frame.component */ 9977);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_print_link_print_link_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ui/print-link/print-link.component */ 33402);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/display/payment/paymentDisplay.component */ 38321);
/* harmony import */ var _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../storefront/utility/utility.component */ 10061);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pipes/dateWithTimeZone/dateWithTimeZone.pipe */ 29719);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pipes/safeHtml.pipe */ 49985);




















function ReceiptComponent_section_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "payment-display", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("billingType", ctx_r0.billingInfo.billingType)("bankDetails", ctx_r0.billingInfo.eft)("creditCard", ctx_r0.billingInfo.credit)("hideTitle", true)("showAccountNumber", true)("showNameOnCard", true)("showLabels", false);
  }
}

function ReceiptComponent_a_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReceiptComponent_a_44_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r4.viewPaymentMethods();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r3.cmsContent.viewPaymentMethods);
  }
}

class ReceiptComponent {
  constructor(stateService, currentUserService, parent, toasterService) {
    this.stateService = stateService;
    this.currentUserService = currentUserService;
    this.parent = parent;
    this.toasterService = toasterService;
  }

  get accountNumber() {
    var _a;

    return (_a = this.currentUserService.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.acctId;
  }

  ngOnInit() {
    this.parent.scrollToTop();
    const {
      amount,
      addToPaymentList,
      makePrimary,
      ...restBillingInfo
    } = this.parent.paymentInfo;
    this.billingInfo = restBillingInfo;
    this.paymentAmount = amount;
    this.paymentDate = this.parent.getDate();

    if (addToPaymentList || makePrimary) {
      this.toasterService.show('Success', this.cmsContent.paymentAdded);
    }
  }

  nextStep(state) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.stateService.go(state);
    })();
  }

  viewPaymentMethods() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.stateService.go(profile_constants__WEBPACK_IMPORTED_MODULE_1__.stateNames.UpdateBillingInformation);
    })();
  }

}

ReceiptComponent.ɵfac = function ReceiptComponent_Factory(t) {
  return new (t || ReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_uirouter_core__WEBPACK_IMPORTED_MODULE_2__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.CurrentUserService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_4__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.ToasterService));
};

ReceiptComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: ReceiptComponent,
  selectors: [["make-payment-receipt-component"]],
  inputs: {
    cmsContent: "cmsContent"
  },
  decls: 45,
  vars: 23,
  consts: [["fxLayout", "row", "fxLayoutAlign", "space-between end"], ["fxLayout", "row", "fxLayoutAlign", "space-between end", 1, "summary", "paymentAmount"], [3, "value"], [1, "summary"], ["translation-skip", ""], [3, "innerHtml"], ["fxLayout", "column"], [4, "ngIf"], ["storefront", ""], ["fxLayout", "row", "fxLayout.lt-md", "column"], ["reverseOrder", "true", 3, "next"], ["Wizard", ""], ["wizard-next", ""], [3, "click", 4, "ngIf"], [3, "billingType", "bankDetails", "creditCard", "hideTitle", "showAccountNumber", "showNameOnCard", "showLabels"], [3, "click"]],
  template: function ReceiptComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "page-centered-container")(1, "card-container")(2, "header", 0)(3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "print-link");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "section")(8, "div", 1)(9, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "currency", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 3)(13, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](17, "dateWithTimeZone");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "header");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](21, "h3", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](22, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](23, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "section", 6)(25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](31, "dateWithTimeZone");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "header")(33, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](35, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](36, ReceiptComponent_section_36_Template, 2, 7, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](37, "storefront-utility", null, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](39, "section", 9)(40, "wizard-ui", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("next", function ReceiptComponent_Template_wizard_ui_next_40_listener($event) {
        return ctx.nextStep($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](44, ReceiptComponent_a_44_Template, 2, 1, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](38);

      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.thankyou, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx.cmsContent.paymentAmount, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", ctx.paymentAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx.cmsContent.paymentReceivedDate, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](17, 15, ctx.paymentDate, "dateTime4"));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.cmsContent.replenishment);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](22, 18, ctx.cmsContent.accountInfo), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx.cmsContent.accountNumber, ": ", ctx.accountNumber, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx.cmsContent.paymentDate, ": ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](31, 20, ctx.paymentDate, "dateTime4"));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.billingInfo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.billingInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.cmsContent.accountDashboard);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !_r1.isKioskView);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__.PageCenteredContainerComponent, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_6__.CardContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutAlignDirective, _common_ui_print_link_print_link_component__WEBPACK_IMPORTED_MODULE_7__.PrintLinkComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_8__.CurrencyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_9__.PaymentDisplayComponent, _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_10__.StorefrontUtilityComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_12__.WizardNextDirective],
  pipes: [_pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_13__.DateWithTimeZonePipe, _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_14__.SafeHtmlPipe],
  styles: ["@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-top: 16px;\n  }\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-next][_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]    + a[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]    + a[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 64px;\n  margin-top: 16px;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .summary[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 16px;\n  padding-bottom: 11px;\n  font-size: 16px;\n  line-height: 26px;\n  margin: 0px -16px;\n}\n[_nghost-%COMP%]   .paymentAmount[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #e0e0ef;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VpcHQubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFxjdXN0b21cXHNwYWNpbmdcXHNlY3Rpb25zLmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcY3VzdG9tXFxzcGFjaW5nXFxkaXZpZGVycy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFRO0VBQUE7SUFDSSxnQkFBQTtFQU5WO0FBQ0Y7QUFDQTtFQVVZLHlCQUFBO0FBUlo7QUFGQTtFQWVRLGtCQUFBO0FBVlI7QUFZUTtFQUFBO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0VBVFY7QUFDRjtBQVhBOztFQ1VRLG1CQUFBO0FES1I7QUFmQTtFQTZCUSxXQUFBO0VFaENBLGdCQUFBO0VBQ0EsbUJBQUE7QUZzQlI7QUFwQkE7RUFrQ1EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBWFI7QUE1QkE7RUEyQ1EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBWlIiLCJmaWxlIjoicmVjZWlwdC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy9zZWN0aW9ucy5sZXNzJztcblxuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL2RpdmlkZXJzLmxlc3MnO1xuXG46aG9zdCB7XG5cbiAgICBoMiB7XG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2l6YXJkLXVpIHtcbiAgICAgICAgW3dpemFyZC1uZXh0XSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2l6YXJkLXVpICsgYSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwLFxuICAgIHNlY3Rpb24ge1xuICAgICAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luQm90dG9tKCk7XG4gICAgfVxuXG4gICAgbWF0LWRpdmlkZXIge1xuICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX2RpdmlkZXItLW1hcmdpblRvcEJvdHRvbSgpO1xuICAgIH1cblxuICAgIC5zdW1tYXJ5IHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTFweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgbWFyZ2luOiAwcHggLTE2cHg7XG4gICAgfVxuXG4gICAgLnBheW1lbnRBbW91bnQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAc251ZmYtZ3JheTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuIiwiLnJlZnJlc2gtMjAyMCB7XG4gICAgLy8gRGVza3RvcFxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2hlYWRlclRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpbkJvdHRvbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wSGFsZiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fYnV0dG9uVG9GaWVsZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maXJzdEhlYWRlclRvVGl0bGUtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fY2FyZFRvQ2FyZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19hZGRyZXNzVG9QYXltZW50RGlzcGxheS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG4gICAgLy8gTW9iaWxlXG4gICAgJi5sdC1tZCxcbiAgICAubHQtbWQge1xuICAgICAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5yZWZyZXNoLTIwMjAge1xuICAgIC51LXNwYWNpbmdfX2RpdmlkZXItLW1hcmdpblRvcEJvdHRvbSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 34839:
/*!****************************************************!*\
  !*** ./src/makePayment/services/webApi.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebApiService": () => (/* binding */ WebApiService)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/services */ 8784);



 //TODO: suspened account flow can make a one time payment. we can either integrate
//the actual API calls into it's own services or refactor this into a common non-lazy
//loaded module

class WebApiService {
  constructor(httpService, responseErrorService) {
    this.httpService = httpService;
    this.responseErrorService = responseErrorService;
    this.getAllPaymentsMethodsUrl = '/api/GetAllPaymentMethods';
    this.addEftBillingInfoUrl = '/api/AddBankAccountInfo';
    this.addCreditBillingInfoUrl = '/api/AddCreditCardInfo';
    this.makePaymentCCUrl = '/api/account/makepayment/creditcard';
    this.makePaymentEftUrl = '/api/account/makepayment/eft';
  }

  getAllPaymentMethods() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield _this.httpService.get(_this.getAllPaymentsMethodsUrl);

      if (_this.responseErrorService.isErrorFree(response)) {
        return response;
      }
    })();
  }

  makePayment(paymentInfo) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const isCCPayment = paymentInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit;
      const url = isCCPayment ? _this2.makePaymentCCUrl : _this2.makePaymentEftUrl;
      const {
        amount,
        credit,
        eft
      } = paymentInfo;
      const response = yield _this2.httpService.post(url, {
        paymentAmount: amount,
        ...(isCCPayment ? { ...credit,
          creditCardNumber: credit.cardNbr,
          type: credit.cardCode,
          internationalAddress: credit.international
        } : eft)
      });
      return _this2.responseErrorService.isErrorFree(response) ? [] : response.errors;
    })();
  }

  addPaymentMethodInfo(payload) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      const isCredit = ((_a = payload.paymentMethod) === null || _a === void 0 ? void 0 : _a.billingTypeCode) === 'C' ? true : false;
      const url = isCredit ? _this3.addCreditBillingInfoUrl : _this3.addEftBillingInfoUrl;
      const response = yield _this3.httpService.post(url, payload);
      return _this3.responseErrorService.isErrorFree(response) ? [] : response.errors;
    })();
  }

}

WebApiService.ɵfac = function WebApiService_Factory(t) {
  return new (t || WebApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](common_services__WEBPACK_IMPORTED_MODULE_2__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](common_services__WEBPACK_IMPORTED_MODULE_2__.ResponseErrorService));
};

WebApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: WebApiService,
  factory: WebApiService.ɵfac
});

/***/ })

}]);
//# sourceMappingURL=221.5bf65b3a17220295.js.map