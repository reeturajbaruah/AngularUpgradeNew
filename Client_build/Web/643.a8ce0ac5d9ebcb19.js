"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[643],{

/***/ 36118:
/*!******************************************************************!*\
  !*** ./src/suspendedAccountRefresh/confirm/confirm.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmComponent": () => (/* binding */ ConfirmComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ 95185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var suspendedAccountRefresh_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! suspendedAccountRefresh/frame/frame.component */ 56666);
/* harmony import */ var _services_suspendedAccount_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/suspendedAccount.service */ 14717);
/* harmony import */ var _confirm_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm.manager */ 66617);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! authentication/authenticationService/authentication.service */ 44722);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _common_ui_display_paymentConfirmation_paymentConfirmation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/ui/display/paymentConfirmation/paymentConfirmation.component */ 93126);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);















class ConfirmComponent {
  constructor(stateService, frame, suspendedAccountService, manager, responseErrorService, authService, webStorage) {
    this.stateService = stateService;
    this.frame = frame;
    this.suspendedAccountService = suspendedAccountService;
    this.manager = manager;
    this.responseErrorService = responseErrorService;
    this.authService = authService;
    this.webStorage = webStorage;
    this.paymentConfirmConfig = {};
  }

  ngOnInit() {
    this.billingInfo = this.suspendedAccountService.paymentInfo;
    this.mapConfirmConfig();
  }

  get hasViolations() {
    var _a;

    return (_a = this.webStorage.getValue(_constants__WEBPACK_IMPORTED_MODULE_2__.SuspendedAccountUserStatusKey)) === null || _a === void 0 ? void 0 : _a.violationFlag;
  }

  mapConfirmConfig() {
    this.paymentConfirmConfig.header = this.cmsContent.LongDescription;
    const paymentDetails = {};
    paymentDetails.header = {
      label: '',
      showEditLink: false
    };
    paymentDetails.header.label = this.billingInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit ? this.cmsContent.paymentDetailsCC : this.cmsContent.paymentDetailsEFT;
    paymentDetails.header.showEditLink = true;
    paymentDetails.showAccountNumber = true;
    this.paymentConfirmConfig.totalPaymentAmt = this.suspendedAccountService.paymentInfo.amount;
    this.paymentConfirmConfig.paymentDetails = paymentDetails;
  }

  previous(state) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.stateService.go(state);
    })();
  }

  nextStep(targetState) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield _this2.manager.submitPayment(_this2.frame.hasViolations, _this2.suspendedAccountService.paymentInfo);

      if (response.errors.length > 0) {
        _this2.responseErrorService.displayErrorsFromResponse(response);
      } else {
        yield _this2.authService.profile({});
        yield _this2.stateService.go(targetState);
      }
    })();
  }

  editPayment(wizard) {
    wizard.gotoPreviousState();
  }

}

ConfirmComponent.ɵfac = function ConfirmComponent_Factory(t) {
  return new (t || ConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_14__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](suspendedAccountRefresh_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_suspendedAccount_service__WEBPACK_IMPORTED_MODULE_4__.SuspendedAccountService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_confirm_manager__WEBPACK_IMPORTED_MODULE_5__.ConfirmManager), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_7__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.WebStorageService));
};

ConfirmComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: ConfirmComponent,
  selectors: [["suspended-confirm-component"]],
  inputs: {
    cmsContent: "cmsContent"
  },
  decls: 11,
  vars: 3,
  consts: [[3, "billingInfo", "paymentConfirmConfig", "edit"], [3, "input", "next", "previous"], ["Wizard", ""], ["wizard-next", ""], ["wizard-cancel", ""], ["wizard-previous", ""]],
  template: function ConfirmComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "page-centered-container")(1, "card-container")(2, "payment-confirmation", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("edit", function ConfirmComponent_Template_payment_confirmation_edit_2_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](4);

        return ctx.editPayment(_r0);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "wizard-ui", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("next", function ConfirmComponent_Template_wizard_ui_next_3_listener($event) {
        return ctx.nextStep($event);
      })("previous", function ConfirmComponent_Template_wizard_ui_previous_3_listener($event) {
        return ctx.previous($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "SUBMIT PAYMENT");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "Previous");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("billingInfo", ctx.billingInfo)("paymentConfirmConfig", ctx.paymentConfirmConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("input", ctx.hasViolations);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_8__.PageCenteredContainerComponent, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_9__.CardContainerComponent, _common_ui_display_paymentConfirmation_paymentConfirmation_component__WEBPACK_IMPORTED_MODULE_10__.PaymentConfirmationComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_12__.WizardNextDirective],
  styles: ["[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-next][_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-cancel][_ngcontent-%COMP%], [_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-previous][_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0uY29tcG9uZW50Lmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcY3VzdG9tXFxzcGFjaW5nXFxzZWN0aW9ucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBR1EsY0FBQTtFQ1dBLGdCQUFBO0FEaEJSO0FBRUE7RUFPWSx5QkFBQTtBQU5aO0FBREE7O0VBWVksMEJBQUE7QUFQWiIsImZpbGUiOiJjb25maXJtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy9zZWN0aW9ucy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvY3VzdG9tL3NwYWNpbmcvZGl2aWRlcnMubGVzcyc7XG5cbjpob3N0IHtcblxuICAgIHdpemFyZC11aSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3AoKTtcblxuICAgICAgICBbd2l6YXJkLW5leHRdIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBbd2l6YXJkLWNhbmNlbF0sXG4gICAgICAgIFt3aXphcmQtcHJldmlvdXNdIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCIucmVmcmVzaC0yMDIwIHtcbiAgICAvLyBEZXNrdG9wXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19faGVhZGVyVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luQm90dG9tIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3BIYWxmIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19idXR0b25Ub0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpcnN0SGVhZGVyVG9UaXRsZS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2FkZHJlc3NUb1BheW1lbnREaXNwbGF5LS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cbiAgICAvLyBNb2JpbGVcbiAgICAmLmx0LW1kLFxuICAgIC5sdC1tZCB7XG4gICAgICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 56666:
/*!**************************************************************!*\
  !*** ./src/suspendedAccountRefresh/frame/frame.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrameComponent": () => (/* binding */ FrameComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/providers */ 61264);
/* harmony import */ var common_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/utilities */ 56516);
/* harmony import */ var animations_hide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animations/hide */ 33965);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ 95185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_accountBalanceHeader_accountBalanceHeader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ui/accountBalanceHeader/accountBalanceHeader.component */ 95002);
/* harmony import */ var _common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ui/wizard/stepper/stepper.component */ 63457);
/* harmony import */ var _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ui/containers/page/pageFilled.component */ 95556);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @uirouter/angular */ 99305);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/safeHtml.pipe */ 49985);














function FrameComponent_header_1_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "safeHtml");
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx_r2.bannerContent), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
  }
}

function FrameComponent_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "header", 4)(1, "div")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, FrameComponent_header_1_p_4_Template, 2, 3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "account-balance-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.bannerContent);
  }
}

function FrameComponent_stepper_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "stepper", 7);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("steps", ctx_r1.steps)("stepMap", ctx_r1.stepMap);
  }
}

class FrameComponent {
  constructor(windowRef) {
    this.windowRef = windowRef;
    this.steps = [];
    this.stepMap = {};
  }

  ngOnInit() {
    if (this.hasViolations) {
      this.steps = [{
        name: this.baseCmsContent.paymentStep,
        background: 'secondary'
      }, {
        name: this.baseCmsContent.confirmStep,
        background: 'secondary'
      }, {
        name: this.baseCmsContent.receiptStep,
        background: 'secondary'
      }];
      this.stepMap = {
        [_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.Payment]: 1,
        [_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.Confirm]: 2,
        [_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.Receipt]: 3
      };
    } else {
      this.steps = [{
        name: this.baseCmsContent.requiredPaymentStep,
        background: 'secondary'
      }, {
        name: this.baseCmsContent.paymentStep,
        background: 'secondary'
      }, {
        name: this.baseCmsContent.confirmStep,
        background: 'secondary'
      }, {
        name: this.baseCmsContent.receiptStep,
        background: 'secondary'
      }];
      this.stepMap = {
        [_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.RequiredPayment]: 1,
        [_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.Payment]: 2,
        [_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.Confirm]: 3,
        [_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.Receipt]: 4
      };
    }
  }

  scrollToTop(options = {
    wait: true,
    fade: true
  }) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (options.fade) {
        _this.isHidden = true;
      }

      if (options.wait) {
        yield (0,common_utilities__WEBPACK_IMPORTED_MODULE_2__.wait)(20);
      }

      _this.windowRef.scrollTo(0, 0);

      if (options.fade) {
        _this.isHidden = false;
      }
    })();
  }

  getDate() {
    return new Date();
  }

}

FrameComponent.ɵfac = function FrameComponent_Factory(t) {
  return new (t || FrameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](common_providers__WEBPACK_IMPORTED_MODULE_1__.WindowRef));
};

FrameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: FrameComponent,
  selectors: [["suspended-frame-component"]],
  inputs: {
    baseCmsContent: "baseCmsContent",
    hasViolations: "hasViolations"
  },
  decls: 5,
  vars: 4,
  consts: [[1, "refresh-2020", "u-spacing--widthFill"], ["fxLayout", "row", "fxLayout.lt-md", "column-reverse", "fxLayoutAlign", "space-between start", 4, "ngIf"], [3, "steps", "stepMap", 4, "ngIf"], [3, "hasGutter"], ["fxLayout", "row", "fxLayout.lt-md", "column-reverse", "fxLayoutAlign", "space-between start"], [3, "innerHtml", 4, "ngIf"], [3, "innerHtml"], [3, "steps", "stepMap"]],
  template: function FrameComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "main", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, FrameComponent_header_1_Template, 6, 2, "header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, FrameComponent_stepper_2_Template, 1, 2, "stepper", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "page-filled-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ui-view");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showTitleBanner);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showStepper);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@hide", ctx.isHidden)("hasGutter", true);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _common_ui_accountBalanceHeader_accountBalanceHeader_component__WEBPACK_IMPORTED_MODULE_5__.AccountBalanceHeaderComponent, _common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_6__.StepperComponent, _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_7__.PageFilledContainerComponent, _uirouter_angular__WEBPACK_IMPORTED_MODULE_12__.UIView],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_8__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  background-color: #efeff4;\n}\n@media not screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n    padding-left: 85px;\n    padding-right: 85px;\n  }\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  padding: 24px 15px 16px 15px;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 30px;\n  color: #fc2125;\n  margin-bottom: 10px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   account-balance-header[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   account-balance-header[_ngcontent-%COMP%] {\n    margin: 0px auto;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    padding: 11px 14px 15px 14px;\n  }\n}\n[_nghost-%COMP%]   stepper[_ngcontent-%COMP%] {\n  display: block;\n  min-height: 32px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   stepper[_ngcontent-%COMP%] {\n    min-height: unset;\n  }\n}\n[_nghost-%COMP%]   page-filled-container[_ngcontent-%COMP%] {\n  display: block;\n}\n@media not screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   page-filled-container[_ngcontent-%COMP%] {\n    background-color: #efeff4;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   page-filled-container[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1lLmNvbXBvbmVudC5sZXNzIiwiLi5cXC4uXFxzdHlsZXNcXHRoZW1lXFxtaXhpbnNcXHBhZ2UubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ29CSSx5QkFBQTtBRHJCSjtBQU1RO0VBQUE7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0VBSFY7QUFDRjtBQUxBO0VBK0JZLDRCQUFBO0FBdkJaO0FBUkE7RUFhZ0IsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBRmhCO0FBSWdCO0VBQUE7SUFDSSxnQkFBQTtFQURsQjtBQUNGO0FBbkJBO0VBd0JnQixXQUFBO0FBRmhCO0FBSWdCO0VBQUE7SUFDRyxnQkFBQTtFQURqQjtBQUNGO0FBTVk7RUFBQTtJQUNJLDRCQUFBO0VBSGQ7QUFDRjtBQWhDQTtFQXdDUSxjQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQU9RO0VBQUE7SUFDSSxpQkFBQTtFQUpWO0FBQ0Y7QUF6Q0E7RUFpRFEsY0FBQTtBQUxSO0FBT1E7RUFBQTtJQy9CSix5QkFBQTtFRDRCRjtBQUNGO0FBTVE7RUFBQTtJQ3hDSix5QkFBQTtFRHNDRjtBQUNGIiwiZmlsZSI6ImZyYW1lLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcblxuICAgIG1haW4ge1xuICAgICAgICAudC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IyKEB0aGVtZS1saWdodCk7XG5cbiAgICAgICAgQG1lZGlhIG5vdCBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IEBwYWdlLWJhci1tYXJnaW4tc3RhdGljO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogQHBhZ2UtYmFyLW1hcmdpbi1zdGF0aWM7XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkZXIge1xuXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBAdG9yY2gtcmVkO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWNjb3VudC1iYWxhbmNlLWhlYWRlciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYWRkaW5nOiAyNHB4IDE1cHggMTZweCAxNXB4O1xuXG4gICAgICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDExcHggQHBhZ2UtYmFyLW1hcmdpbi1zdGF0aWMtbHQtbWQgMTVweCBAcGFnZS1iYXItbWFyZ2luLXN0YXRpYy1sdC1tZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0ZXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWluLWhlaWdodDogMzJweDtcblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgbWluLWhlaWdodDogdW5zZXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYWdlLWZpbGxlZC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICBAbWVkaWEgbm90IEBicmVha3BvaW50LWx0LW1kIHtcbiAgICAgICAgICAgIC50LWJvZHktLWJhY2tncm91bmRDb2xvcjIoQHRoZW1lLWxpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgICAgICAudC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lLWxpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG5AYm9keS0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAd2hpdGU7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMi1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjMtbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1saWdodDogQHRyb3BpY2FsLXJhaW4tZm9yZXN0LWdyZWVuO1xuQGJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2lsdmVyLWdyYXk7XG5AaGVhZGVyLS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBsYWJlbC0tY29sb3ItbGlnaHQ6IEBib3VsZGVyLWdyYXk7XG5Ac2VsZWN0X19hcnJvdy0tY29sb3ItbGlnaHQ6IEBzY29ycGlvbi1ncmF5O1xuQGxpbmstLWNvbG9yLWxpZ2h0OiBAYXp1cmUtcmFkaWFuY2UtYmx1ZTtcbkBkaXZpZGVyLS1ib3JkZXJDb2xvci1saWdodDogQHNjaG9vbC1idXMteWVsbG93O1xuXG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjIoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMi1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMyhAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtaGVhZGVyLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdoZWFkZXItLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGFiZWwtLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xhYmVsLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXNlbGVjdF9fYXJyb3ctLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3NlbGVjdF9fYXJyb3ctLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGluay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGluay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yICFpbXBvcnRhbnQ7IC8vIG1hcmtlZCBhcyAhaW1wb3J0YW50IHRvIG92ZXJyaWRlIGJvb3RzdHJhcFxufVxuXG4udC1kaXZpZGVyLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdkaXZpZGVyLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1kaXZpZGVyX19kYXNoLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuIl19 */"],
  data: {
    animation: [animations_hide__WEBPACK_IMPORTED_MODULE_3__.hideTrigger]
  }
});

/***/ }),

/***/ 68864:
/*!******************************************************************!*\
  !*** ./src/suspendedAccountRefresh/landing/landing.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var suspendedAccountRefresh_frame_frame_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! suspendedAccountRefresh/frame/frame.component */ 56666);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/safeHtml.pipe */ 49985);











function LandingComponent_wizard_ui_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "wizard-ui", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("next", function LandingComponent_wizard_ui_6_Template_wizard_ui_next_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r1.goToNextState($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Make a Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("input", ctx_r0.isPositiveBalance)("reverseOrder", true);
  }
}

class LandingComponent {
  constructor(parent, state, currentUserService) {
    this.parent = parent;
    this.state = state;
    this.currentUserService = currentUserService;
  }

  get isPositiveBalance() {
    var _a, _b;

    return ((_b = (_a = this.currentUserService.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.currentBalanceObj) === null || _b === void 0 ? void 0 : _b.currentBalance) > 0;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.setBanner();

      _this.parent.showStepper = false;
      const isPositiveBalance = _this.currentUserService.getCurrentUserBalance() > 0;
      _this.title = _this.cmsContentWithoutViolations.Title;
      _this.content = isPositiveBalance ? _this.cmsContentWithoutViolations.ShortDescription : _this.cmsContentWithoutViolations.LongDescription;
      _this.showWizard = !isPositiveBalance;
    })();
  }

  setBanner() {
    this.parent.showTitleBanner = true;
    this.parent.title = this.cmsContentWithoutViolations.BannerTitle;
    this.parent.bannerContent = this.cmsContentWithoutViolations.BannerContent;
  }

  goToNextState(targetState) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.state.go(targetState);
    })();
  }

}

LandingComponent.ɵfac = function LandingComponent_Factory(t) {
  return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](suspendedAccountRefresh_frame_frame_component__WEBPACK_IMPORTED_MODULE_1__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_8__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_2__.CurrentUserService));
};

LandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: LandingComponent,
  selectors: [["suspended-without-violations-landing-component"]],
  inputs: {
    cmsContentWithoutViolations: "cmsContentWithoutViolations"
  },
  decls: 7,
  vars: 5,
  consts: [[1, "u-spacing--widthFill"], [3, "innerHtml"], [3, "input", "reverseOrder", "next", 4, "ngIf"], [3, "input", "reverseOrder", "next"], ["wizard-next", ""]],
  template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "card-container", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "article", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, LandingComponent_wizard_ui_6_Template, 3, 2, "wizard-ui", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 3, ctx.content), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showWizard);
    }
  },
  directives: [_common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_3__.CardContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_4__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_5__.WizardNextDirective],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_6__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%]   card-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fc2125;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%]    + section[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50Lmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcY3VzdG9tXFxzcGFjaW5nXFx1dGlsaXR5Lmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcY3VzdG9tXFxzcGFjaW5nXFxzZWN0aW9ucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VDQVEsV0FBQTtBREpSO0FBSUE7RUFPUSxjQUFBO0FBUlI7QUFDQTtFRUNRLGdCQUFBO0FGQ1I7QUFGQTtFRVNRLG1CQUFBO0FGSlI7QUFMQTtFQW1CUSxnQkFBQTtBQVhSIiwiZmlsZSI6ImxhbmRpbmcuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL3NlY3Rpb25zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL3V0aWxpdHkubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL2RpdmlkZXJzLmxlc3MnO1xuXG46aG9zdCB7XG5cbiAgICBjYXJkLWNvbnRhaW5lciB7XG4gICAgICAgIC5yZWZyZXNoLTIwMjAudS1zcGFjaW5nLS13aWR0aEZpbGwoKTtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICAgIGNvbG9yOiBAdG9yY2gtcmVkO1xuICAgIH1cblxuICAgIGgyICsgc2VjdGlvbiB7XG4gICAgICAgIC5yZWZyZXNoLTIwMjAudS1zcGFjaW5nX19oZWFkZXJUb1NlY3Rpb24tLW1hcmdpblRvcCgpO1xuICAgIH1cblxuICAgIHNlY3Rpb24ge1xuICAgICAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luQm90dG9tKCk7XG4gICAgfVxuXG4gICAgd2l6YXJkLXVpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cbi5yZWZyZXNoLTIwMjAge1xuXG4gICAgJi51LXNwYWNpbmctLXdpZHRoRmlsbCxcbiAgICAudS1zcGFjaW5nLS13aWR0aEZpbGwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAudGFiLWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNmY2ZjYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgICAgICBwYWRkaW5nOiAwcHggNyU7XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LXNtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50YWItY29udGVudCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjcuNTJweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjI0cHg7XG5cbiAgICAgICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1zbSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiB1bnNldDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB1bnNldDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2NjZTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhbm5lci1pbWcge1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjIzcHg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtc20ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyN3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhbm5lci10eHQge1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNy41MnB4O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjI0cHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEpvc3Q7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIyMSwgOSk7XG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IHJnYig2NywgNjksIDczKSAzcHggMnB4IDhweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAgICAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LXNtIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXNwYWNpbmcge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5yZWZyZXNoLTIwMjAge1xuICAgIC8vIERlc2t0b3BcbiAgICAudS1zcGFjaW5nX19maWVsZFRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19oZWFkZXJUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Cb3R0b20ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcEhhbGYge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2J1dHRvblRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmlyc3RIZWFkZXJUb1RpdGxlLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fYWRkcmVzc1RvUGF5bWVudERpc3BsYXktLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuICAgIC8vIE1vYmlsZVxuICAgICYubHQtbWQsXG4gICAgLmx0LW1kIHtcbiAgICAgICAgLnUtc3BhY2luZ19fY2FyZFRvQ2FyZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 88643:
/*!****************************************************!*\
  !*** ./src/suspendedAccountRefresh/lazy.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuspendedLazyModule": () => (/* binding */ SuspendedLazyModule)
/* harmony export */ });
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @uirouter/angular */ 99305);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ 45046);
/* harmony import */ var pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pipes/module */ 20445);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frame/frame.component */ 56666);
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ 68864);
/* harmony import */ var _violationsLanding_violationsLanding_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./violationsLanding/violationsLanding.component */ 84385);
/* harmony import */ var _requiredPayment_requiredPayment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./requiredPayment/requiredPayment.component */ 38510);
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment/payment.component */ 4742);
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm/confirm.component */ 36118);
/* harmony import */ var _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./receipt/receipt.component */ 18463);
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routing */ 55559);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants */ 95185);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var hybrid_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! hybrid/module */ 98730);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var violationsCommon_violationsCommon_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! violationsCommon/violationsCommon.module */ 82690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 28596);




//components



















const componentDictionary = {
    [_constants__WEBPACK_IMPORTED_MODULE_9__.stateNames.Root]: _frame_frame_component__WEBPACK_IMPORTED_MODULE_1__.FrameComponent,
    [_constants__WEBPACK_IMPORTED_MODULE_9__.stateNames.Landing]: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__.LandingComponent,
    [_constants__WEBPACK_IMPORTED_MODULE_9__.stateNames.ViolationsLanding]: _violationsLanding_violationsLanding_component__WEBPACK_IMPORTED_MODULE_3__.ViolationsLandingComponent,
    [_constants__WEBPACK_IMPORTED_MODULE_9__.stateNames.RequiredPayment]: _requiredPayment_requiredPayment_component__WEBPACK_IMPORTED_MODULE_4__.RequiredPaymentComponent,
    [_constants__WEBPACK_IMPORTED_MODULE_9__.stateNames.Payment]: _payment_payment_component__WEBPACK_IMPORTED_MODULE_5__.PaymentComponent,
    [_constants__WEBPACK_IMPORTED_MODULE_9__.stateNames.Confirm]: _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmComponent,
    [_constants__WEBPACK_IMPORTED_MODULE_9__.stateNames.Receipt]: _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_7__.ReceiptComponent
};
const routesWithComponents = _routing__WEBPACK_IMPORTED_MODULE_8__.routes.map(route => ({
    ...route,
    component: componentDictionary[route.name]
}));
class SuspendedLazyModule {
}
SuspendedLazyModule.ɵfac = function SuspendedLazyModule_Factory(t) { return new (t || SuspendedLazyModule)(); };
SuspendedLazyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: SuspendedLazyModule });
SuspendedLazyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [], imports: [[
            // SuspendedAccountSharedModule,
            common_module__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_14__.UIRouterModule.forChild({ states: routesWithComponents }),
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__.FlexLayoutModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__.FlexLayoutModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
            common_module__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            hybrid_module__WEBPACK_IMPORTED_MODULE_11__.HybridModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule,
            violationsCommon_violationsCommon_module__WEBPACK_IMPORTED_MODULE_12__.ViolationsCommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](SuspendedLazyModule, { declarations: [_frame_frame_component__WEBPACK_IMPORTED_MODULE_1__.FrameComponent,
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__.LandingComponent,
        _violationsLanding_violationsLanding_component__WEBPACK_IMPORTED_MODULE_3__.ViolationsLandingComponent,
        _requiredPayment_requiredPayment_component__WEBPACK_IMPORTED_MODULE_4__.RequiredPaymentComponent,
        _payment_payment_component__WEBPACK_IMPORTED_MODULE_5__.PaymentComponent,
        _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmComponent,
        _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_7__.ReceiptComponent], imports: [
        // SuspendedAccountSharedModule,
        common_module__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _uirouter_angular__WEBPACK_IMPORTED_MODULE_14__.UIRouterModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__.FlexLayoutModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__.FlexLayoutModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
        common_module__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        hybrid_module__WEBPACK_IMPORTED_MODULE_11__.HybridModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule,
        violationsCommon_violationsCommon_module__WEBPACK_IMPORTED_MODULE_12__.ViolationsCommonModule] }); })();


/***/ }),

/***/ 4742:
/*!******************************************************************!*\
  !*** ./src/suspendedAccountRefresh/payment/payment.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentComponent": () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var common_ui_form_entry_paymentEntry_paymentEntry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/ui/form-entry/paymentEntry/paymentEntry.component */ 11311);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ 95185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../frame/frame.component */ 56666);
/* harmony import */ var _services_suspendedAccount_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/suspendedAccount.service */ 14717);
/* harmony import */ var _common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/services/webStorageService/webStorage.service */ 38898);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_form_entry_billingAddress_billingAddress_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/form-entry/billingAddress/billingAddress.component */ 61618);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 38661);




















function PaymentComponent_card_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "card-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "billing-address", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("billingInfo", ctx_r1.billingInfo)("stateList", ctx_r1.stateList)("validate", true)("countryList", ctx_r1.countryList);
  }
}

class PaymentComponent {
  constructor(stateService, frame, suspendedAccountService, webStorage) {
    this.stateService = stateService;
    this.frame = frame;
    this.suspendedAccountService = suspendedAccountService;
    this.webStorage = webStorage;
    this.BillingType = common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType;
  }

  ngOnInit() {
    this.frame.scrollToTop();
    this.frame.showStepper = true;
    this.frame.showTitleBanner = false;
    this.billingInfo = this.suspendedAccountService.paymentInfo;
    this.makePrimary = this.suspendedAccountService.paymentInfo.makePrimary;
  }

  get hasViolations() {
    var _a;

    return (_a = this.webStorage.getValue(_constants__WEBPACK_IMPORTED_MODULE_3__.SuspendedAccountUserStatusKey)) === null || _a === void 0 ? void 0 : _a.violationFlag;
  }

  nextStep(targetState) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const paymentReady = yield _this.paymentMethod.getStatus();

      if (paymentReady) {
        if (_this.billingInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit) {
          _this.billingInfo.credit.primary = _this.makePrimary;
        } else if (_this.billingInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft) {
          _this.billingInfo.eft.primary = _this.makePrimary;
        }

        const amount = _this.suspendedAccountService.paymentInfo.amount;
        _this.suspendedAccountService.paymentInfo = {
          amount,
          makePrimary: _this.makePrimary,
          credit: _this.billingInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Credit ? _this.billingInfo.credit : _this.resetCredit(),
          eft: _this.billingInfo.billingType === common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType.Eft ? _this.billingInfo.eft : _this.resetEft(),
          billingType: _this.billingInfo.billingType
        };
        yield _this.stateService.go(targetState);
      }
    })();
  }

  resetEft() {
    return {
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
      international: false,
      primary: true
    };
  }

  resetCredit() {
    return {
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
      international: false,
      primary: true
    };
  }

}

PaymentComponent.ɵfac = function PaymentComponent_Factory(t) {
  return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_13__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_4__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_suspendedAccount_service__WEBPACK_IMPORTED_MODULE_5__.SuspendedAccountService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_6__.WebStorageService));
};

PaymentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: PaymentComponent,
  selectors: [["suspended-payment-component"]],
  viewQuery: function PaymentComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](common_ui_form_entry_paymentEntry_paymentEntry_component__WEBPACK_IMPORTED_MODULE_2__.PaymentEntryComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.paymentMethod = _t.first);
    }
  },
  inputs: {
    stateList: "stateList",
    countryList: "countryList",
    cmsContent: "cmsContent"
  },
  decls: 18,
  vars: 6,
  consts: [["validation-focus", "", "name", "violationsForm", "fxLayout", "column"], ["BillingForm", "ngForm"], [3, "header", "billingInfo"], ["after-billing-entry", ""], ["type", "checkbox", "name", "makePrimary", 3, "ngModel", "ngModelChange"], ["class", "u-spacing__cardToCard--marginTop", 4, "ngIf"], [3, "input", "next"], ["wizard-next", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["wizard-cancel", ""], [1, "u-spacing__cardToCard--marginTop"], [3, "billingInfo", "stateList", "validate", "countryList"]],
  template: function PaymentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "page-centered-container")(1, "form", 0, 1)(3, "card-container")(4, "payment-entry", 2)(5, "section", 3)(6, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.makePrimary = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, PaymentComponent_card_container_9_Template, 2, 4, "card-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "wizard-ui", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("next", function PaymentComponent_Template_wizard_ui_next_10_listener($event) {
        return ctx.nextStep($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "CONTINUE");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "mat-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("header", ctx.cmsContent.paymentMethodHeader)("billingInfo", ctx.billingInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.makePrimary);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.cmsContent.makePrimary);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.billingInfo.billingType);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("input", ctx.hasViolations);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_7__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgForm, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_8__.CardContainerComponent, common_ui_form_entry_paymentEntry_paymentEntry_component__WEBPACK_IMPORTED_MODULE_2__.PaymentEntryComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _common_ui_form_entry_billingAddress_billingAddress_component__WEBPACK_IMPORTED_MODULE_9__.BillingAddressComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_11__.WizardNextDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutAlignDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon],
  styles: ["[_nghost-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   payment-method-mui[_ngcontent-%COMP%] {\n    margin-top: 32px;\n  }\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\n[_nghost-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 2px;\n  display: inline;\n  margin: 0px 10px 3px 0px;\n}\n[_nghost-%COMP%]   section[after-billing-entry][_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQuY29tcG9uZW50Lmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcY3VzdG9tXFxzcGFjaW5nXFx1dGlsaXR5Lmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcY3VzdG9tXFxzcGFjaW5nXFxzZWN0aW9ucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VDRVEsV0FBQTtBREpSO0FBRUE7RUFPUSxXQUFBO0FBTlI7QUFEQTtFRXVCUSxnQkFBQTtBRm5CUjtBQVVJO0VBQUE7SUVQSSxnQkFBQTtFRkNOO0FBQ0Y7QUFUQTtFQXFCUSxnQkFBQTtBQVRSO0FBWkE7RUF5QlEsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQVZSO0FBbkJBO0VFT1EsZ0JBQUE7QUZlUiIsImZpbGUiOiJwYXltZW50LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy91dGlsaXR5Lmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL3NlY3Rpb25zLmxlc3MnO1xuXG46aG9zdCB7XG5cbiAgICBmb3JtIHtcbiAgICAgICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmctLXdpZHRoRmlsbCgpO1xuICAgIH1cblxuICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xuICAgIH1cblxuICAgIHdpemFyZC11aSB7XG4gICAgICAgIC5yZWZyZXNoLTIwMjAudS1zcGFjaW5nX19idXR0b25Ub0ZpZWxkLS1tYXJnaW5Ub3AoKTtcbiAgICB9XG5cbiAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICBwYXltZW50LW1ldGhvZC1tdWkge1xuICAgICAgICAgICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgICBtYXgtaGVpZ2h0OiA3MHB4O1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweCAzcHggMHB4O1xuICAgIH1cblxuICAgIHNlY3Rpb25bYWZ0ZXItYmlsbGluZy1lbnRyeV0ge1xuICAgICAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luVG9wKCk7XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG4ucmVmcmVzaC0yMDIwIHtcblxuICAgICYudS1zcGFjaW5nLS13aWR0aEZpbGwsXG4gICAgLnUtc3BhY2luZy0td2lkdGhGaWxsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnRhYi1jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICAgICAgcGFkZGluZzogMHB4IDclO1xuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1zbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGFiLWNvbnRlbnQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI3LjUycHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNHB4O1xuXG4gICAgICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtc20ge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogdW5zZXQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdW5zZXQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2NjY2U7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYW5uZXItaW1nIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyM3B4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LXNtIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjdweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYW5uZXItdHh0IHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjcuNTJweDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBKb3N0O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMjEsIDkpO1xuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiByZ2IoNjcsIDY5LCA3MykgM3B4IDJweCA4cHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgICAgICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1zbSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1zcGFjaW5nIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIucmVmcmVzaC0yMDIwIHtcbiAgICAvLyBEZXNrdG9wXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19faGVhZGVyVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luQm90dG9tIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3BIYWxmIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19idXR0b25Ub0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpcnN0SGVhZGVyVG9UaXRsZS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2FkZHJlc3NUb1BheW1lbnREaXNwbGF5LS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cbiAgICAvLyBNb2JpbGVcbiAgICAmLmx0LW1kLFxuICAgIC5sdC1tZCB7XG4gICAgICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 18463:
/*!******************************************************************!*\
  !*** ./src/suspendedAccountRefresh/receipt/receipt.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptComponent": () => (/* binding */ ReceiptComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frame/frame.component */ 56666);
/* harmony import */ var _services_suspendedAccount_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/suspendedAccount.service */ 14717);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uirouter/core */ 7199);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_print_link_print_link_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ui/print-link/print-link.component */ 33402);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/display/payment/paymentDisplay.component */ 38321);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pipes/dateWithTimeZone/dateWithTimeZone.pipe */ 29719);


















function ReceiptComponent_section_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "payment-display", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("billingType", ctx_r0.billingInfo.billingType)("bankDetails", ctx_r0.billingInfo.eft)("creditCard", ctx_r0.billingInfo.credit)("hideTitle", true)("showAccountNumber", true)("showNameOnCard", true)("showLabels", false);
  }
}

class ReceiptComponent {
  constructor(parent, suspendedAccountService, toasterService, currentUserService, stateService) {
    this.parent = parent;
    this.suspendedAccountService = suspendedAccountService;
    this.toasterService = toasterService;
    this.currentUserService = currentUserService;
    this.stateService = stateService;
  }

  get accountNumber() {
    var _a;

    return (_a = this.currentUserService.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.acctId;
  }

  ngOnInit() {
    this.parent.showStepper = false;
    this.parent.showTitleBanner = false;
    const {
      amount,
      makePrimary,
      ...restBillingInfo
    } = this.suspendedAccountService.paymentInfo;
    this.billingInfo = restBillingInfo;
    this.paymentAmount = amount;
    this.paymentDate = this.parent.getDate();

    if (makePrimary) {
      this.toasterService.show('Success', this.cmsContent.billingInfoUpdated);
    }
  }

  nextStep(state) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.suspendedAccountService.destroySuspendedWizardInformation();

      yield _this.stateService.go(state); //await this.stateService.go(stateNames.Frame);
    })();
  }

}

ReceiptComponent.ɵfac = function ReceiptComponent_Factory(t) {
  return new (t || ReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_1__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_suspendedAccount_service__WEBPACK_IMPORTED_MODULE_2__.SuspendedAccountService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.CurrentUserService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_uirouter_core__WEBPACK_IMPORTED_MODULE_4__.StateService));
};

ReceiptComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: ReceiptComponent,
  selectors: [["suspended-receipt-component"]],
  inputs: {
    cmsContent: "cmsContent"
  },
  decls: 38,
  vars: 20,
  consts: [["fxLayout", "row", "fxLayoutAlign", "space-between end"], ["fxLayout", "row", "fxLayoutAlign", "space-between end", 1, "summary", "paymentAmount"], [3, "value"], [1, "summary"], ["translation-skip", ""], ["fxLayout", "column"], [4, "ngIf"], [3, "reverseOrder", "next"], ["wizard-next", ""], [3, "billingType", "bankDetails", "creditCard", "hideTitle", "showAccountNumber", "showNameOnCard", "showLabels"]],
  template: function ReceiptComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "page-centered-container")(1, "card-container")(2, "header", 0)(3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "print-link");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "section")(8, "div", 1)(9, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "currency", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 3)(13, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](17, "dateWithTimeZone");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "header")(21, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "section", 5)(25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](29, "dateWithTimeZone");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "header")(31, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](33, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](34, ReceiptComponent_section_34_Template, 2, 7, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "wizard-ui", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("next", function ReceiptComponent_Template_wizard_ui_next_35_listener($event) {
        return ctx.nextStep($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37, "ACCOUNT DASHBOARD");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.Title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", ctx.cmsContent.paymentAmount, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx.paymentAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", ctx.cmsContent.paymentReceivedDate, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](17, 14, ctx.paymentDate, "date4"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.cmsContent.LongDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.cmsContent.accountInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", ctx.cmsContent.accountNumber, ": ", ctx.accountNumber, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", ctx.cmsContent.paymentDate, ": ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](29, 17, ctx.paymentDate, "dateTime4"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.billingInfo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.billingInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("reverseOrder", true);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__.PageCenteredContainerComponent, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_6__.CardContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutAlignDirective, _common_ui_print_link_print_link_component__WEBPACK_IMPORTED_MODULE_7__.PrintLinkComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_8__.CurrencyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_9__.PaymentDisplayComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_11__.WizardNextDirective],
  pipes: [_pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_12__.DateWithTimeZonePipe],
  styles: ["[_nghost-%COMP%]   card-container[_ngcontent-%COMP%] {\n  display: block;\n}\n@media not screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   card-container[_ngcontent-%COMP%] {\n    margin-top: 32px;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-top: 16px;\n  }\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-next][_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 64px;\n  margin-top: 16px;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .summary[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 16px;\n  padding-bottom: 11px;\n  font-size: 16px;\n  line-height: 26px;\n  margin: 0px -16px;\n}\n[_nghost-%COMP%]   .paymentAmount[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #e0e0ef;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VpcHQuY29tcG9uZW50Lmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcY3VzdG9tXFxzcGFjaW5nXFxzZWN0aW9ucy5sZXNzIiwiLi5cXC4uXFxzdHlsZXNcXGN1c3RvbVxcc3BhY2luZ1xcZGl2aWRlcnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUdRLGNBQUE7QUFOUjtBQVFRO0VBQUE7SUN5QkEsZ0JBQUE7RUQ3Qk47QUFDRjtBQVNRO0VBQUE7SUFDSSxnQkFBQTtFQU5WO0FBQ0Y7QUFQQTtFQWtCWSx5QkFBQTtBQVJaO0FBVkE7O0VDVVEsbUJBQUE7QURJUjtBQWRBO0VBNEJRLFdBQUE7RUUvQkEsZ0JBQUE7RUFDQSxtQkFBQTtBRnFCUjtBQW5CQTtFQWlDUSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFYUjtBQTNCQTtFQTBDUSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFaUiIsImZpbGUiOiJyZWNlaXB0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy9zZWN0aW9ucy5sZXNzJztcblxuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL2RpdmlkZXJzLmxlc3MnO1xuXG46aG9zdCB7XG5cbiAgICBjYXJkLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgIEBtZWRpYSBub3QgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdpemFyZC11aSB7XG4gICAgICAgIFt3aXphcmQtbmV4dF0ge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHAsXG4gICAgc2VjdGlvbiB7XG4gICAgICAgIC5yZWZyZXNoLTIwMjAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Cb3R0b20oKTtcbiAgICB9XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fZGl2aWRlci0tbWFyZ2luVG9wQm90dG9tKCk7XG4gICAgfVxuXG4gICAgLnN1bW1hcnkge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMXB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICBtYXJnaW46IDBweCAtMTZweDtcbiAgICB9XG5cbiAgICAucGF5bWVudEFtb3VudCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBzbnVmZi1ncmF5O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG4iLCIucmVmcmVzaC0yMDIwIHtcbiAgICAvLyBEZXNrdG9wXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19faGVhZGVyVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luQm90dG9tIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3BIYWxmIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19idXR0b25Ub0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpcnN0SGVhZGVyVG9UaXRsZS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2FkZHJlc3NUb1BheW1lbnREaXNwbGF5LS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cbiAgICAvLyBNb2JpbGVcbiAgICAmLmx0LW1kLFxuICAgIC5sdC1tZCB7XG4gICAgICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLnJlZnJlc2gtMjAyMCB7XG4gICAgLnUtc3BhY2luZ19fZGl2aWRlci0tbWFyZ2luVG9wQm90dG9tIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 38510:
/*!**********************************************************************************!*\
  !*** ./src/suspendedAccountRefresh/requiredPayment/requiredPayment.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequiredPaymentComponent": () => (/* binding */ RequiredPaymentComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var suspendedAccountRefresh_frame_frame_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! suspendedAccountRefresh/frame/frame.component */ 56666);
/* harmony import */ var suspendedAccountRefresh_services_webapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! suspendedAccountRefresh/services/webapi.service */ 30973);
/* harmony import */ var suspendedAccountRefresh_services_suspendedAccount_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! suspendedAccountRefresh/services/suspendedAccount.service */ 14717);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ui/containers/fxRow/fxRow.component */ 47553);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui/containers/row/row.component */ 80001);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/safeHtml.pipe */ 49985);



















const _c0 = function () {
  return {
    "table-space": false
  };
};

const _c1 = function () {
  return {
    "table-space": false,
    "lt-md": true
  };
};

const _c2 = function () {
  return {
    "table-space": true
  };
};

const _c3 = function () {
  return {
    "table-space": true,
    "lt-md": true
  };
};

const _c4 = function () {
  return {
    "lt-md": true
  };
};

class RequiredPaymentComponent {
  constructor(stateService, frame, api, suspendedAccountService) {
    this.stateService = stateService;
    this.frame = frame;
    this.api = api;
    this.suspendedAccountService = suspendedAccountService;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.frame.scrollToTop();

      _this.frame.showStepper = true;
      _this.frame.showTitleBanner = false;
      const res = yield _this.api.getSuspendedAccountData();
      _this.replinishAmt = res.rebillAmount;
      _this.reinstateAmt = res.totalUnsuspensionPaymentAmount - res.rebillAmount;
      _this.requiredPaymentAmt = _this.replinishAmt + _this.reinstateAmt;
      _this.replenishmentAmtText = _this.suspendedAccountService.getReplenishmentAmtText(_this.cmsContentReqPayment.ReplenishmentAmount, _this.cmsContentReqPayment.ReplenishmentAmountTextOptOut);
    })();
  }

  cancel(state) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.stateService.go(state);
    })();
  }

  nextStep(targetState) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.suspendedAccountService.paymentInfo = {
        amount: _this3.requiredPaymentAmt,
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
          international: false,
          primary: true
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
          international: false,
          primary: true
        },
        billingType: null,
        makePrimary: true
      };
      yield _this3.stateService.go(targetState);
    })();
  }

}

RequiredPaymentComponent.ɵfac = function RequiredPaymentComponent_Factory(t) {
  return new (t || RequiredPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_13__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](suspendedAccountRefresh_frame_frame_component__WEBPACK_IMPORTED_MODULE_1__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](suspendedAccountRefresh_services_webapi_service__WEBPACK_IMPORTED_MODULE_2__.WebApiService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](suspendedAccountRefresh_services_suspendedAccount_service__WEBPACK_IMPORTED_MODULE_3__.SuspendedAccountService));
};

RequiredPaymentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: RequiredPaymentComponent,
  selectors: [["suspended-required-payment-component"]],
  inputs: {
    cmsContentReqPayment: "cmsContentReqPayment"
  },
  decls: 42,
  vars: 24,
  consts: [[2, "margin-bottom", "13px"], [2, "margin-bottom", "30px", 3, "innerHTML"], [3, "isLabel", "backgroundColorClass"], ["col-start", "", 1, "fx-flex-auto", "fx-layout-row", "fx-layout-align-start-center"], [1, "fx-flex-auto-shrink-more", "limited-flex"], ["col-end", "", 1, "fx-flex-none", "fx-layout-row", "fx-layout-align-end-center"], [1, "fx-flex-auto", "limited-flex-end"], [3, "ngClass", "ngClass.lt-md"], [3, "isTop"], ["fxShow", "", 1, "fx-flex-auto-shrink-more", "limited-flex"], ["col-end", "", 1, "fx-flex-none", "fx-layout-row", "fx-layout-align-end-center", "currency"], [3, "value"], [3, "isInner"], [1, "table-space", 3, "ngClass.lt-md"], [3, "rowType", "isBottom"], ["col-start", "", "fxFlex", "grow", 2, "font-weight", "700", "color", "red"], ["col-end", "", "fxFlex", "none", 1, "totalAmountValue", 2, "font-weight", "700", "color", "red"], [1, "u-spacing__buttonToField--marginTop"], [3, "next"], ["Wizard", ""], ["wizard-next", ""], ["wizard-cancel", ""]],
  template: function RequiredPaymentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "page-centered-container")(1, "card-container")(2, "h2", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "article", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "fx-row", 2)(7, "section", 3)(8, "mat-label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "DESCRIPTION");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "section", 5)(11, "mat-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "AMOUNT");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 7)(14, "fx-row", 8)(15, "section", 3)(16, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, " Amount due to reinstate your account: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "section", 10)(19, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "currency", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 7)(22, "fx-row", 12)(23, "section", 3)(24, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "section", 10)(27, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](28, "currency", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "div", 13)(30, "row-container", 14)(31, "section", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, " Required Payment Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "section", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](34, "currency", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "div", 17)(36, "wizard-ui", 18, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("next", function RequiredPaymentComponent_Template_wizard_ui_next_36_listener($event) {
        return ctx.nextStep($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, "CONTINUE");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.cmsContentReqPayment.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 17, ctx.cmsContentReqPayment.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isLabel", true)("backgroundColorClass", "transparent-background");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](19, _c0))("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](20, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isTop", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx.reinstateAmt);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](21, _c2))("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](22, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isInner", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.replenishmentAmtText, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx.replinishAmt);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](23, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("rowType", "emphasis")("isBottom", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx.requiredPaymentAmt);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_4__.PageCenteredContainerComponent, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_5__.CardContainerComponent, _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_6__.FxRowComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__.DefaultShowHideDirective, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_7__.CurrencyComponent, _common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_8__.RowContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultFlexDirective, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_9__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_10__.WizardNextDirective],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_11__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fc2125;\n}\n[_nghost-%COMP%]   .currency[_ngcontent-%COMP%] {\n  width: 145px;\n}\n[_nghost-%COMP%]   .currency[_ngcontent-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcY29tbW9uXFx1aVxcY29udGFpbmVyc1xcZnhSb3dcXGRldGFpbHMubGVzcyIsInJlcXVpcmVkUGF5bWVudC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7QUNESjtBREFBO0VBSVEsYUFBQTtFQUNBLGtCQUFBO0FDRFI7QURKQTtFQThFSSxjQUFBO0VBQ0Esc0JBQUE7QUN2RUo7QURSQTtFQW9GSSxjQUFBO0VBQ0Esc0JBQUE7QUN6RUo7QURaQTtFQXlGSSxjQUFBO0VBQ0Esc0JBQUE7QUMxRUo7QURoQkE7RUE4RkksY0FBQTtFQUNBLHNCQUFBO0FDM0VKO0FEcEJBO0VBbUdJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDNUVKO0FEekJBO0VBeUdJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDN0VKO0FEOUJBO0VBK0dJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQzlFSjtBRG5DQTtFQXFISSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUMvRUo7QUR4Q0E7RUEwQ1EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDUjtBRDdDQTtFQWdEUSxXQUFBO0FDQVI7QURoREE7RUFvRFEsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RSO0FEdERBO0VBMkRRLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FENURBO0VBa0VRLGVBQUE7QUNIUjtBREtRO0VBQ0ksZUFBQTtBQ0haO0FBOURBO0VBR1EsY0FBQTtBQThEUjtBQWpFQTtFQU9RLFlBQUE7QUE2RFI7QUFwRUE7RUFXUSxnQkFBQTtBQTREUiIsImZpbGUiOiJyZXF1aXJlZFBheW1lbnQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuXG4gICAgLmZ4LWZsZXgtYXV0byB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtZmxleC1ub25lIHtcbiAgICAgICAgLmZ4LWZsZXgtbm9uZS1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUge1xuICAgICAgICAuZngtZmxleC1hdXRvLXNocmluay1tb3JlLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWZsZXgtYXV0by1ncm93LW1vcmUge1xuICAgICAgICAuZngtZmxleC1hdXRvLWdyb3ctbW9yZS1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtcm93IHtcbiAgICAgICAgLmZ4LWxheW91dC1yb3ctbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LWNvbHVtbiB7XG4gICAgICAgIC5meC1sYXlvdXQtY29sdW1uLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1hbGlnbi1zdGFydC1jZW50ZXIge1xuICAgICAgICAuZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlci1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtYWxpZ24tZW5kLWNlbnRlciB7XG4gICAgICAgIC5meC1sYXlvdXQtYWxpZ24tZW5kLWNlbnRlci1taXhpbigpO1xuICAgIH1cblxuICAgIC5saW1pdGVkLWZsZXgge1xuICAgICAgICBtaW4td2lkdGg6IDE3MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDUzMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAudW5saW1pdGVkLWZsZXgge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAubGltaXRlZC1mbGV4LWVuZCB7XG4gICAgICAgIG1pbi13aWR0aDogNzBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cblxuICAgIC5sYXJnZXItbGltaXRlZC1mbGV4LWVuZCB7XG4gICAgICAgIG1pbi13aWR0aDogMTQzcHg7XG4gICAgICAgIG1heC13aWR0aDogMTQ1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxuXG4gICAgLnRhYmxlLXNwYWNlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuXG4gICAgICAgICYubHQtbWQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gTWl4aW5zIHRvIGFwcGVhc2UgcGVyZm9ybWFuY2Vcbi5meC1mbGV4LWF1dG8tbWl4aW4oKSB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWZsZXgtbm9uZS1taXhpbigpIHtcbiAgICAvLyBsZXNzaGludC1kaXNhYmxlLW5leHQtbGluZSB6ZXJvVW5pdFxuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUtbWl4aW4oKSB7XG4gICAgZmxleDogMSAyIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWZsZXgtYXV0by1ncm93LW1vcmUtbWl4aW4oKSB7XG4gICAgZmxleDogMiAxIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWxheW91dC1yb3ctbWl4aW4oKSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5meC1sYXlvdXQtY29sdW1uLW1peGluKCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlci1taXhpbigpIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5meC1sYXlvdXQtYWxpZ24tZW5kLWNlbnRlci1taXhpbigpIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy91dGlsaXR5Lmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL3NlY3Rpb25zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgJy4uLy4uL2NvbW1vbi91aS9jb250YWluZXJzL2Z4Um93L2RldGFpbHMubGVzcyc7XG5cbjpob3N0IHtcblxuICAgIGgyIHtcbiAgICAgICAgY29sb3I6IEB0b3JjaC1yZWQ7XG4gICAgfVxuXG4gICAgLmN1cnJlbmN5IHtcbiAgICAgICAgd2lkdGg6IDE0NXB4O1xuICAgIH1cblxuICAgIC5jdXJyZW5jeSAubGltaXRlZC1mbGV4LWVuZCB7XG4gICAgICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgfVxuXG59XG4iXX0= */"]
});

/***/ }),

/***/ 55559:
/*!************************************************!*\
  !*** ./src/suspendedAccountRefresh/routing.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "stateGuard": () => (/* binding */ stateGuard)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/resolvers */ 1444);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ 95185);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var home_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! home/constants */ 59119);
/* harmony import */ var _services_webapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/webapi.service */ 30973);
/* harmony import */ var _services_suspendedAccount_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/suspendedAccount.service */ 14717);
/* harmony import */ var accountDashboard_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! accountDashboard/constants */ 75888);
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @uirouter/core */ 7199);









const stateGuard = (0,common_resolvers__WEBPACK_IMPORTED_MODULE_1__.StateGuard)(_constants__WEBPACK_IMPORTED_MODULE_2__.SuspendedAccountCurrentStepKey, home_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.Frame);

const HasViolationsResolve = token => ({
  token,
  deps: [_services_webapi_service__WEBPACK_IMPORTED_MODULE_5__.WebApiService],
  resolveFn: function () {
    var _ref = (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (suspendedAccountWebApiService) {
      const status = yield suspendedAccountWebApiService.getSuspendedAccountStatus();
      return status.violationFlag;
    });

    return function resolveFn(_x) {
      return _ref.apply(this, arguments);
    };
  }()
});

const paymentInfoGuard = {
  token: 'paymentInfoGuard',
  deps: [_uirouter_core__WEBPACK_IMPORTED_MODULE_8__.Transition, _services_suspendedAccount_service__WEBPACK_IMPORTED_MODULE_6__.SuspendedAccountService, _services_webapi_service__WEBPACK_IMPORTED_MODULE_5__.WebApiService],
  resolveFn: function () {
    var _ref2 = (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (transition, suspenedAccountService, suspendedAccountWebApiService) {
      if (!suspenedAccountService.paymentInfo) {
        const status = yield suspendedAccountWebApiService.getSuspendedAccountStatus();
        const state = status.violationFlag ? _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.ViolationsLanding : _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.RequiredPayment;
        return transition.router.stateService.go(state);
      }
    });

    return function resolveFn(_x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }()
};
const routes = [{
  name: _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Root,
  abstract: true,
  resolve: [(0,common_resolvers__WEBPACK_IMPORTED_MODULE_1__.MaintenanceResolve)(), (0,common_resolvers__WEBPACK_IMPORTED_MODULE_1__.CmsResolve)('baseCmsContent', {
    ItemId: _constants__WEBPACK_IMPORTED_MODULE_2__.cmsIds.Root
  }), HasViolationsResolve('hasViolations')],
  data: {
    title: 'Suspended Account'
  }
}, {
  name: _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Landing,
  url: _constants__WEBPACK_IMPORTED_MODULE_2__.urlPaths.Landing,
  title: 'Suspended Without Violations',
  resolve: [(0,common_resolvers__WEBPACK_IMPORTED_MODULE_1__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.userRoles.suspended), (0,common_resolvers__WEBPACK_IMPORTED_MODULE_1__.CmsResolve)('cmsContentWithoutViolations', {
    ItemId: _constants__WEBPACK_IMPORTED_MODULE_2__.cmsIds.suspendedAccountWithoutViolationsCms
  })],
  wizard: {
    isEndState: positiveBalance => positiveBalance,
    nextState: _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.RequiredPayment
  }
}, {
  name: _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.RequiredPayment,
  url: _constants__WEBPACK_IMPORTED_MODULE_2__.urlPaths.RequiredPayment,
  title: 'Suspended Account Required Payment',
  resolve: [(0,common_resolvers__WEBPACK_IMPORTED_MODULE_1__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.userRoles.suspended), (0,common_resolvers__WEBPACK_IMPORTED_MODULE_1__.CmsResolve)('cmsContentReqPayment', {
    ItemId: _constants__WEBPACK_IMPORTED_MODULE_2__.cmsIds.RequiredPayment
  })],
  wizard: {
    cancelState: _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Landing,
    nextState: _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Payment
  }
}, {
  name: _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.ViolationsLanding,
  url: _constants__WEBPACK_IMPORTED_MODULE_2__.urlPaths.ViolationsLanding,
  title: 'Suspended With Violations',
  resolve: [(0,common_resolvers__WEBPACK_IMPORTED_MODULE_1__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.userRoles.suspended), (0,common_resolvers__WEBPACK_IMPORTED_MODULE_1__.CmsResolve)('cmsContent', {
    ItemId: _constants__WEBPACK_IMPORTED_MODULE_2__.cmsIds.ViolationsLanding
  })],
  wizard: {
    nextState: _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Payment
  }
}, {
  name: _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Payment,
  url: _constants__WEBPACK_IMPORTED_MODULE_2__.urlPaths.Payment,
  title: 'Suspended Account Payment',
  resolve: [paymentInfoGuard, (0,common_resolvers__WEBPACK_IMPORTED_MODULE_1__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.userRoles.suspended), (0,common_resolvers__WEBPACK_IMPORTED_MODULE_1__.CmsResolve)('cmsContent', {
    mergeParams: true,
    ItemId: _constants__WEBPACK_IMPORTED_MODULE_2__.cmsIds.MakePayment
  }), (0,common_resolvers__WEBPACK_IMPORTED_MODULE_1__.UsStatesResolver)('stateList'), (0,common_resolvers__WEBPACK_IMPORTED_MODULE_1__.CountryResolver)('countryList') //stateGuard()
  ],
  wizard: {
    cancelState: hasViolations => hasViolations ? _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.ViolationsLanding : _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Landing,
    isEndState: false,
    prevState: hasViolations => hasViolations ? _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.ViolationsLanding : _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.RequiredPayment,
    nextState: _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Confirm
  }
}, {
  name: _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Confirm,
  url: _constants__WEBPACK_IMPORTED_MODULE_2__.urlPaths.Confirm,
  title: 'Suspended Account Confirm',
  resolve: [paymentInfoGuard, (0,common_resolvers__WEBPACK_IMPORTED_MODULE_1__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.userRoles.suspended), (0,common_resolvers__WEBPACK_IMPORTED_MODULE_1__.CmsResolve)('cmsContent', {
    ItemId: _constants__WEBPACK_IMPORTED_MODULE_2__.cmsIds.Confirmation,
    mergeParams: true
  }) // stateGuard({
  //     explicitlyForbidden: [stateNames.Receipt]
  // })
  ],
  wizard: {
    cancelState: hasViolations => hasViolations ? _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.ViolationsLanding : _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Landing,
    isEndState: false,
    prevState: _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Payment,
    nextState: _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Receipt
  }
}, {
  name: _constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Receipt,
  url: _constants__WEBPACK_IMPORTED_MODULE_2__.urlPaths.Receipt,
  title: 'Suspended Account Receipt',
  resolve: [paymentInfoGuard, (0,common_resolvers__WEBPACK_IMPORTED_MODULE_1__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.userRoles.suspended, constants_module__WEBPACK_IMPORTED_MODULE_3__.userRoles.active), (0,common_resolvers__WEBPACK_IMPORTED_MODULE_1__.CmsResolve)('cmsContent', {
    mergeParams: true,
    ItemId: _constants__WEBPACK_IMPORTED_MODULE_2__.cmsIds.Receipt
  }) // stateGuard({
  //     explicitlyAllowed: [stateNames.Confirm],
  //     explicitlyForbidden: [accountDashboardStates.Frame]
  // })
  ],
  wizard: {
    nextState: accountDashboard_constants__WEBPACK_IMPORTED_MODULE_7__.stateNames.Frame
  }
}];

/***/ }),

/***/ 84385:
/*!**************************************************************************************!*\
  !*** ./src/suspendedAccountRefresh/violationsLanding/violationsLanding.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViolationsLandingComponent": () => (/* binding */ ViolationsLandingComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/ui/containers/row/row.component */ 80001);
/* harmony import */ var animations_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animations/collapse */ 16573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/core */ 7199);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../frame/frame.component */ 56666);
/* harmony import */ var _services_webapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/webapi.service */ 30973);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var suspendedAccountRefresh_services_suspendedAccount_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! suspendedAccountRefresh/services/suspendedAccount.service */ 14717);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _violationsCommon_components_violationsPlate_violationsPlate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../violationsCommon/components/violationsPlate/violationsPlate.component */ 42349);
/* harmony import */ var _violationsCommon_components_violationsDetails_violationsDetails_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../violationsCommon/components/violationsDetails/violationsDetails.component */ 56799);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_toolTip_toolTip_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/ui/toolTip/toolTip.component */ 63087);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../pipes/safeHtml.pipe */ 49985);























function ViolationsLandingComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "violations-plate-row", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("isCollapsedChange", function ViolationsLandingComponent_div_10_Template_violations_plate_row_isCollapsedChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r7);
      const plateData_r4 = restoredCtx.$implicit;
      return plateData_r4.collapsed = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "violations-details-rows", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const plateData_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hideHeader", i_r5 > 0)("plate", plateData_r4.plate)("showCollapseUi", true)("isCollapsed", plateData_r4.collapsed)("hidePmntPlan", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@collapse", plateData_r4.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("plate", plateData_r4.plate)("paginatedPlate", plateData_r4.plate)("hideFooter", true)("isSuspendedAccount", true)("caoToolTipCms", ctx_r0.cmsContent.CAO_TOOL_TIP);
  }
}

function ViolationsLandingComponent_ul_26_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "span")(2, "currency", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const discount_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵattribute"]("data-name", discount_r9.value.name)("data-mobile-name", discount_r9.value.mobileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", discount_r9.value.amount);
  }
}

function ViolationsLandingComponent_ul_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ul", 3)(1, "li", 16)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "currency", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "li")(7, "div")(8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "tool-tip", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](11, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "div", 20)(13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](15, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](16, ViolationsLandingComponent_ul_26_div_16_Template, 3, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](17, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](19, "currency", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.cmsContent.ViolationsDueAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r1.summary.violationsAmountDueBeforeDiscounts);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.cmsContent.TollViolationsFeeReduction);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("stayOpenOnHover", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.cmsContent.TollViolationsFeeReduction);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](17, 7, ctx_r1.discounts));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r1.summary.totalDiscountAllPlates);
  }
}

function ViolationsLandingComponent_ul_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ul", 3)(1, "li")(2, "div")(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "tool-tip", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 20)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](10, "hr")(11, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](12, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "div", 23)(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](17, "currency", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](19, "currency", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "li")(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](24, "currency", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "li", 4)(26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](29, "currency", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r2.cmsContent.OutstandingAccountBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("stayOpenOnHover", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r2.cmsContent.OutstandingAccountBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](12, 11, ctx_r2.outstandingBalance), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r2.cmsContent.OutstandingAccountBalance, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r2.summary.outstandingAccountBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r2.summary.outstandingAccountBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r2.replenishmentAmtText);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r2.summary.rebillAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r2.cmsContent.TotalPaymentAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r2.summary.totalUnsuspensionPaymentAmount);
  }
}

class ViolationsLandingComponent {
  constructor(stateService, frameComponent, webApiService, responseErrorService, suspendedAccountService, toasterService) {
    this.stateService = stateService;
    this.frameComponent = frameComponent;
    this.webApiService = webApiService;
    this.responseErrorService = responseErrorService;
    this.suspendedAccountService = suspendedAccountService;
    this.toasterService = toasterService;
    this.RowContainerType = common_ui_containers_row_row_component__WEBPACK_IMPORTED_MODULE_1__.RowContainerType;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.agreeToTerms = false;
      _this.frameComponent.title = 'Account Suspended';
      _this.frameComponent.bannerContent = _this.cmsContent.Purpose;
      _this.frameComponent.showStepper = false;
      _this.frameComponent.showTitleBanner = true;
      _this.dataReady = false;
      _this.paymentTerms = _this.cmsContent.Children[0].ShortDescription;
      _this.outstandingBalance = _this.cmsContent.Children[1].ShortDescription;
      const {
        plates,
        ...summary
      } = yield _this.webApiService.getSuspendedAccountData();

      if (!_this.responseErrorService.isErrorFree(summary)) {
        _this.responseErrorService.displayErrorsFromResponse(summary);

        return;
      }

      _this.plates = plates.map(plate => ({
        plate,
        collapsed: true
      }));
      _this.discounts = plates.reduce((acc, {
        agencies
      }) => [...acc, ...agencies], []).reduce((acc, {
        agencyID,
        agencyName,
        mobileAgencyName,
        discountTotal
      }) => {
        if (agencyID in acc) {
          acc[agencyID].amount += discountTotal;
        } else {
          acc[agencyID] = {
            name: agencyName,
            mobileName: mobileAgencyName,
            amount: discountTotal
          };
        }

        return acc;
      }, {});
      _this.summary = summary;
      _this.dataReady = true;
      _this.replenishmentAmtText = _this.suspendedAccountService.getReplenishmentAmtText(_this.cmsContent.ReplenishmentAmount, _this.cmsContent.ReplenishmentAmountTextOptOut);
    })();
  }

  nextStep(state) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.agreeToTerms) {
        _this2.suspendedAccountService.paymentInfo = {
          amount: _this2.summary.totalUnsuspensionPaymentAmount,
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
            international: false,
            primary: true
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
            international: false,
            primary: true
          },
          billingType: null,
          makePrimary: true
        };
        yield _this2.stateService.go(state);
      } else {
        yield _this2.frameComponent.scrollToTop({
          wait: false,
          fade: false
        });

        if (!_this2.toasterService.isShowing(_this2.agreeToToast)) {
          _this2.agreeToToast = _this2.toasterService.show('Error', _this2.cmsContent.AgreeToWarning);
        }
      }
    })();
  }

}

ViolationsLandingComponent.ɵfac = function ViolationsLandingComponent_Factory(t) {
  return new (t || ViolationsLandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_uirouter_core__WEBPACK_IMPORTED_MODULE_3__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_4__.FrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_webapi_service__WEBPACK_IMPORTED_MODULE_5__.WebApiService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](suspendedAccountRefresh_services_suspendedAccount_service__WEBPACK_IMPORTED_MODULE_7__.SuspendedAccountService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.ToasterService));
};

ViolationsLandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
  type: ViolationsLandingComponent,
  selectors: [["suspended-violations-landing-component"]],
  inputs: {
    cmsContent: "cmsContent"
  },
  decls: 36,
  vars: 17,
  consts: [[1, "u-spacing--widthFill"], [3, "innerHtml"], [4, "ngFor", "ngForOf"], [1, "summary"], [1, "total"], [3, "value"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutGap", "50px", "fxFill", ""], ["fxFlex", "50", "fxFlex.lt-sm", "", 3, "innerHtml"], ["fxFlex", "50", "fxFlex.lt-sm", ""], ["class", "summary", 4, "ngIf"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [3, "next"], ["Wizard", ""], ["wizard-next", ""], [3, "hideHeader", "plate", "showCollapseUi", "isCollapsed", "hidePmntPlan", "isCollapsedChange"], [3, "plate", "paginatedPlate", "hideFooter", "isSuspendedAccount", "caoToolTipCms"], [1, "emphasis"], [1, "discount"], [3, "stayOpenOnHover"], ["tool-tip-hover", "", "svgIcon", "information"], ["tool-tip-message", ""], ["class", "tool-tip-row", 4, "ngFor", "ngForOf"], [1, "discount", 3, "value"], [1, "tool-tip-row"], [1, "outstandingBalance", 3, "innerHtml"]],
  template: function ViolationsLandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "card-container", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "article", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](6, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "section")(8, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "Violations Summary by License Plate");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, ViolationsLandingComponent_div_10_Template, 4, 11, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "section")(12, "ul", 3)(13, "li", 4)(14, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](17, "currency", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "section")(19, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](21, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](23, "article", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](24, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](26, ViolationsLandingComponent_ul_26_Template, 20, 9, "ul", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](27, ViolationsLandingComponent_ul_27_Template, 30, 13, "ul", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "div")(29, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ViolationsLandingComponent_Template_input_ngModelChange_29_listener($event) {
        return ctx.agreeToTerms = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](30, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](31, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "wizard-ui", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("next", function ViolationsLandingComponent_Template_wizard_ui_next_32_listener($event) {
        return ctx.nextStep($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](35, "CONTINUE");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx.cmsContent.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](6, 11, ctx.cmsContent.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.plates);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx.cmsContent.ViolationsDueAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx.summary && ctx.summary.violationsAmountDueBeforeDiscounts);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx.cmsContent.PaymentSummary);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](24, 13, ctx.cmsContent.LongDescription), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.summary);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.summary);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.agreeToTerms);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](31, 15, ctx.paymentTerms), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeHtml"]);
    }
  },
  directives: [_common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_8__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _violationsCommon_components_violationsPlate_violationsPlate_component__WEBPACK_IMPORTED_MODULE_9__.ViolationsPlateComponent, _violationsCommon_components_violationsDetails_violationsDetails_component__WEBPACK_IMPORTED_MODULE_10__.ViolationsDetailsComponent, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_11__.CurrencyComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.FlexFillDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _common_ui_toolTip_toolTip_component__WEBPACK_IMPORTED_MODULE_12__.ToolTipComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_13__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_14__.WizardNextDirective],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_15__.SafeHtmlPipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.KeyValuePipe],
  styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n  margin-top: 16px;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-next][_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   tool-tip[_ngcontent-%COMP%]   [tool-tip-hover][_ngcontent-%COMP%] {\n  width: 10px;\n  height: 18px;\n  color: #007aff;\n}\n[_nghost-%COMP%]   tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%] {\n  background-color: #efeff4;\n  bottom: calc(100% + 25px);\n  padding: 16px;\n  min-height: 100px;\n  font-size: 14px;\n  line-height: 26px;\n}\n[_nghost-%COMP%]   tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n}\n@media not screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%] {\n    min-width: 325px;\n    left: 50%;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%] {\n    width: calc(100vw - 2*14px);\n    left: 0px;\n  }\n}\n[_nghost-%COMP%]   tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%]   .tool-tip-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%]   .outstandingBalance[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 26px;\n  font-weight: normal;\n  padding-bottom: 20px;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n[_nghost-%COMP%]   violations-plate-row[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   span[data-mobile-name][_ngcontent-%COMP%]::after {\n    content: attr(data-mobile-name);\n  }\n}\n@media not screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   span[data-name][_ngcontent-%COMP%]::after {\n    content: attr(data-name);\n  }\n}\n[_nghost-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border-radius: 2px;\n  display: inline;\n  margin: 0px 14px 3px 0px;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 23px;\n  font-weight: normal;\n}\n[_nghost-%COMP%]   .discount[_ngcontent-%COMP%] {\n  color: #018749;\n}\n[_nghost-%COMP%]   currency.discount[_ngcontent-%COMP%]::before {\n  content: '-';\n}\n[_nghost-%COMP%]   ul.summary[_ngcontent-%COMP%] {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  margin-bottom: 16px;\n  margin-left: -20px;\n  margin-right: -20px;\n}\n[_nghost-%COMP%]   ul.summary[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin: 1px 0px;\n  background-color: #f6f6f6;\n  padding: 16px 20px;\n}\n[_nghost-%COMP%]   ul.summary[_ngcontent-%COMP%]   li.total[_ngcontent-%COMP%] {\n  background-color: #e0e0ef;\n  font-size: 18px;\n  line-height: 26px;\n  font-weight: bold;\n}\n@media not screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   ul.summary[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n  }\n  [_nghost-%COMP%]   ul.summary[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n  }\n}\n[_nghost-%COMP%]   ul.summary[_ngcontent-%COMP%]   li.emphasis[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpb2xhdGlvbnNMYW5kaW5nLmNvbXBvbmVudC5sZXNzIiwiLi5cXC4uXFxzdHlsZXNcXGN1c3RvbVxcc3BhY2luZ1xcZGl2aWRlcnMubGVzcyIsIi4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxwYWdlLmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcY3VzdG9tXFxzcGFjaW5nXFxzZWN0aW9ucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBR1EsV0FBQTtFQ05BLGdCQUFBO0VBQ0EsbUJBQUE7QURDUjtBQUNBO0VBUVEsZ0JBQUE7QUFOUjtBQUZBO0VBV1kseUJBQUE7QUFOWjtBQUxBO0VBa0JZLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQVZaO0FBVkE7RUVrQkkseUJBQUE7RUZRUSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtBQWJaO0FBbEJBO0VBa0NnQixnQkFBQTtBQWJoQjtBQWdCWTtFQUFBO0lBQ0ksZ0JBQUE7SUFDQSxTQUFBO0VBYmQ7QUFDRjtBQWVZO0VBQUE7SUFDSSwyQkFBQTtJQUNBLFNBQUE7RUFaZDtBQUNGO0FBakNBO0VBZ0RnQixhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVpoQjtBQXRDQTtFQXNEZ0IsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQWJoQjtBQTVDQTtFR1VRLG1CQUFBO0FIcUNSO0FBL0NBO0VBbUVRLGNBQUE7RUFDQSxnQkFBQTtBQWpCUjtBQW9CSTtFQUFBO0lBRVEsK0JBQUE7RUFsQlY7QUFDRjtBQXFCSTtFQUFBO0lBRVEsd0JBQUE7RUFuQlY7QUFDRjtBQTdEQTtFQXFGUSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBckJSO0FBcEVBO0VBNkZRLGdCQUFBO0FBdEJSO0FBdkVBO0VBaUdRLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBdkJSO0FBNUVBO0VFaUNJLGNBQUE7QUY4Q0o7QUEvRUE7RUEyR1EsWUFBQTtBQXpCUjtBQWxGQTtFQWdIUSwwQkFBQTtVQUFBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0FBNUJSO0FBeEZBO0VBd0hZLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBRUEsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUE5Qlo7QUFnQ1k7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBOUJoQjtBQW1DUTtFQUFBO0lBRVEsNEJBQUE7SUFDQSw2QkFBQTtFQWpDZDtFQThCTTtJQU9RLCtCQUFBO0lBQ0EsZ0NBQUE7RUFsQ2Q7QUFDRjtBQWhIQTtFQXNKWSxpQkFBQTtBQW5DWiIsImZpbGUiOiJ2aW9sYXRpb25zTGFuZGluZy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvY3VzdG9tL3NwYWNpbmcvc2VjdGlvbnMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL2RpdmlkZXJzLmxlc3MnO1xuXG46aG9zdCB7XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICAgICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX2RpdmlkZXItLW1hcmdpblRvcEJvdHRvbSgpO1xuICAgIH1cblxuICAgIHdpemFyZC11aSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAgICAgW3dpemFyZC1uZXh0XSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9vbC10aXAge1xuXG4gICAgICAgIFt0b29sLXRpcC1ob3Zlcl0ge1xuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICBjb2xvcjogQGF6dXJlLXJhZGlhbmNlLWJsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBbdG9vbC10aXAtbWVzc2FnZV0ge1xuXG4gICAgICAgICAgICAudC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IyKEB0aGVtZS1saWdodCk7XG4gICAgICAgICAgICBib3R0b206IGNhbGMoMTAwJSArIDI1cHgpO1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcblxuICAgICAgICAgICAgaHIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBub3QgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzI1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMipAcGFnZS1iYXItbWFyZ2luLXN0YXRpYy1sdC1tZCk7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudG9vbC10aXAtcm93IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub3V0c3RhbmRpbmdCYWxhbmNlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlY3Rpb24ge1xuICAgICAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luQm90dG9tKCk7XG4gICAgfVxuXG4gICAgdmlvbGF0aW9ucy1wbGF0ZS1yb3cge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICBzcGFuW2RhdGEtbW9iaWxlLW5hbWVdOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtbW9iaWxlLW5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIG5vdCBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgIHNwYW5bZGF0YS1uYW1lXTo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogYXR0cihkYXRhLW5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIG1hcmdpbjogMHB4IDE0cHggM3B4IDBweDtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgIC5kaXNjb3VudCB7XG4gICAgICAgIC50LWJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yKEB0aGVtZS1saWdodCk7XG4gICAgfVxuXG4gICAgY3VycmVuY3kuZGlzY291bnQ6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICctJztcbiAgICB9XG5cbiAgICB1bC5zdW1tYXJ5IHtcblxuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcblxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICBtYXJnaW46IDFweCAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2lsZC1zYW5kLWdyYXk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG5cbiAgICAgICAgICAgICYudG90YWwge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBzbnVmZi1ncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG5vdCBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgICAgICBsaTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGk6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxpLmVtcGhhc2lzIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCIucmVmcmVzaC0yMDIwIHtcbiAgICAudS1zcGFjaW5nX19kaXZpZGVyLS1tYXJnaW5Ub3BCb3R0b20ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG5AYm9keS0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAd2hpdGU7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMi1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjMtbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1saWdodDogQHRyb3BpY2FsLXJhaW4tZm9yZXN0LWdyZWVuO1xuQGJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2lsdmVyLWdyYXk7XG5AaGVhZGVyLS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBsYWJlbC0tY29sb3ItbGlnaHQ6IEBib3VsZGVyLWdyYXk7XG5Ac2VsZWN0X19hcnJvdy0tY29sb3ItbGlnaHQ6IEBzY29ycGlvbi1ncmF5O1xuQGxpbmstLWNvbG9yLWxpZ2h0OiBAYXp1cmUtcmFkaWFuY2UtYmx1ZTtcbkBkaXZpZGVyLS1ib3JkZXJDb2xvci1saWdodDogQHNjaG9vbC1idXMteWVsbG93O1xuXG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjIoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMi1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMyhAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtaGVhZGVyLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdoZWFkZXItLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGFiZWwtLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xhYmVsLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXNlbGVjdF9fYXJyb3ctLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3NlbGVjdF9fYXJyb3ctLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGluay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGluay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yICFpbXBvcnRhbnQ7IC8vIG1hcmtlZCBhcyAhaW1wb3J0YW50IHRvIG92ZXJyaWRlIGJvb3RzdHJhcFxufVxuXG4udC1kaXZpZGVyLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdkaXZpZGVyLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1kaXZpZGVyX19kYXNoLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuIiwiLnJlZnJlc2gtMjAyMCB7XG4gICAgLy8gRGVza3RvcFxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2hlYWRlclRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpbkJvdHRvbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wSGFsZiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fYnV0dG9uVG9GaWVsZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maXJzdEhlYWRlclRvVGl0bGUtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fY2FyZFRvQ2FyZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19hZGRyZXNzVG9QYXltZW50RGlzcGxheS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG4gICAgLy8gTW9iaWxlXG4gICAgJi5sdC1tZCxcbiAgICAubHQtbWQge1xuICAgICAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"],
  data: {
    animation: [animations_collapse__WEBPACK_IMPORTED_MODULE_2__.collapseTrigger]
  }
});

/***/ })

}]);
//# sourceMappingURL=643.a8ce0ac5d9ebcb19.js.map