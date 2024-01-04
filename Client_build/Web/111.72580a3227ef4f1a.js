"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[111],{

/***/ 72986:
/*!************************************************************************************************!*\
  !*** ./src/vehicles/eztag/replacement/components/delivery-method/delivery-method.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryMethodComponent": () => (/* binding */ DeliveryMethodComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var vehicles_eztag_replacement_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vehicles/eztag/replacement/services */ 41038);
/* harmony import */ var vehicles_eztag_replacement_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vehicles/eztag/replacement/services/helper/helper-service */ 16500);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _common_order_summary_components_order_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/order-summary/components/order-summary.component */ 77129);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_chooseDeliveryMethod_chooseDeliveryMethod_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../common/ui/chooseDeliveryMethod/chooseDeliveryMethod.component */ 5472);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizardNext.directive */ 27358);




















function DeliveryMethodComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "card-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "order-summary", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "section", 10)(4, "header")(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "mat-divider", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "choose-delivery-method", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("deliveryMethodChange", function DeliveryMethodComponent_ng_container_3_Template_choose_delivery_method_deliveryMethodChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r3.selectedDeliveryMethod = $event;
    })("onEdit", function DeliveryMethodComponent_ng_container_3_Template_choose_delivery_method_onEdit_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r5.onMailingAddressEdit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("data", ctx_r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.cmsContent.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("mailingInfo", ctx_r1.mailingInfo)("deliveryMethod", ctx_r1.selectedDeliveryMethod)("isAddEzTag", true);
  }
}

class DeliveryMethodComponent {
  constructor(state, replacementStateService, uiRouterGlobals, helperService, mailingService) {
    this.state = state;
    this.replacementStateService = replacementStateService;
    this.uiRouterGlobals = uiRouterGlobals;
    this.helperService = helperService;
    this.mailingService = mailingService;
    this.selectedDeliveryMethod = '';
    this.selectedReason = '';
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.uiRouterGlobals.params && _this.uiRouterGlobals.params.vehicle) {
        const vehicle = _this.uiRouterGlobals.params.vehicle;
        _this.tag = vehicle;
      } else {
        const state = _this.replacementStateService.getState();

        if (state.replaceTag && state.reason && state.deliveryMethod) {
          _this.tag = state.replaceTag;
          _this.selectedReason = state.reason;
          _this.selectedDeliveryMethod = state.deliveryMethod.toString();
        } else {
          yield _this.state.go(vehicles_shared__WEBPACK_IMPORTED_MODULE_3__.States.Root);
        }
      }

      _this.mailingInfo = yield _this.mailingService.getMailingAddress();

      _this.setupData();

      _this.selectedReason = JSON.parse(_this.cmsContent.reasons)[0].key;
    })();
  }

  setupData() {
    this.data = {
      display: true,
      summary: {
        title: this.cmsContent.summaryTitle,
        description: this.cmsContent.summaryDescription
      },
      details: [{
        tags: [this.tag],
        title: this.cmsContent.detailsTitle,
        isPlate: false
      }],
      operations: {
        isEditable: false,
        isRemoveable: false
      },
      stateList: this.stateList
    };
  }

  nextStep(state) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.replacementStateService.setState({
        deliveryMethod: _this2.selectedDeliveryMethod === common_models__WEBPACK_IMPORTED_MODULE_1__.DeliveryMethodType.Mail ? common_models__WEBPACK_IMPORTED_MODULE_1__.DeliveryMethodType.Mail : common_models__WEBPACK_IMPORTED_MODULE_1__.DeliveryMethodType.Store,
        reason: _this2.selectedReason,
        replaceTag: _this2.tag
      });

      yield _this2.state.go(state);
    })();
  }

  onMailingAddressEdit(option) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.mailingService.onMailingAddressEdit(option, _this3.stateList, _this3.countryList, common_ui__WEBPACK_IMPORTED_MODULE_2__.NewBillingAddressModalComponent);
    })();
  }

  cancel(state) {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.helperService.cancel(_this4.cancelContent, state);
    })();
  }

  disable() {
    var _a;

    return this.selectedDeliveryMethod === 'mail' && ((_a = this.mailingInfo) === null || _a === void 0 ? void 0 : _a.address1) === null;
  }

}

DeliveryMethodComponent.ɵfac = function DeliveryMethodComponent_Factory(t) {
  return new (t || DeliveryMethodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_14__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](vehicles_eztag_replacement_services__WEBPACK_IMPORTED_MODULE_4__.ReplacementStateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_14__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](vehicles_eztag_replacement_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_5__.ReplacementHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_3__.MailingAddressService));
};

DeliveryMethodComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: DeliveryMethodComponent,
  selectors: [["delivery-method"]],
  inputs: {
    stateList: "stateList",
    countryList: "countryList",
    cancelContent: "cancelContent",
    cmsContent: "cmsContent"
  },
  decls: 11,
  vars: 2,
  consts: [[1, "refresh-2020"], ["validation-focus", "", "novalidate", ""], ["Form", "ngForm"], [4, "ngIf"], [1, "u-spacing__buttonToField--marginTop"], [3, "disabled", "next", "cancel"], ["Wizard", ""], ["wizard-next", ""], ["wizard-cancel", ""], [3, "data"], [1, "u-spacing__fieldToSection--marginTop"], [1, "u-spacing__divider--marginTopBottom"], [3, "mailingInfo", "deliveryMethod", "isAddEzTag", "deliveryMethodChange", "onEdit"]],
  template: function DeliveryMethodComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "form", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, DeliveryMethodComponent_ng_container_3_Template, 10, 5, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "section", 4)(5, "wizard-ui", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("next", function DeliveryMethodComponent_Template_wizard_ui_next_5_listener($event) {
        return ctx.nextStep($event);
      })("cancel", function DeliveryMethodComponent_Template_wizard_ui_cancel_5_listener($event) {
        return ctx.cancel($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "CONTINUE");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.data);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx.disable());
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_6__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_7__.FocusDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_8__.CardContainerComponent, _common_order_summary_components_order_summary_component__WEBPACK_IMPORTED_MODULE_9__.OrdersummaryComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _common_ui_chooseDeliveryMethod_chooseDeliveryMethod_component__WEBPACK_IMPORTED_MODULE_10__.ChooseDeliveryMethodComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_12__.WizardNextDirective],
  styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   .replacementReason[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGl2ZXJ5LW1ldGhvZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVRLFdBQUE7QUFIUjtBQUNBO0VBTVEsZ0JBQUE7QUFKUiIsImZpbGUiOiJkZWxpdmVyeS1tZXRob2QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcblxuOmhvc3Qge1xuICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xuICAgIH1cblxuICAgIC5yZXBsYWNlbWVudFJlYXNvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 9343:
/*!****************************************************************************!*\
  !*** ./src/vehicles/eztag/replacement/components/frame/frame.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrameComponent": () => (/* binding */ FrameComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/providers */ 61264);
/* harmony import */ var common_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/utilities */ 56516);
/* harmony import */ var vehicles_eztag_replacement_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vehicles/eztag/replacement/states */ 94822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../common/ui/wizard/stepper/stepper.component */ 63457);
/* harmony import */ var _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../common/ui/containers/page/pageFilled.component */ 95556);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @uirouter/angular */ 99305);










function FrameComponent_stepper_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "stepper", 2);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("steps", ctx_r0.steps)("stepMap", ctx_r0.stepMap);
  }
}

class FrameComponent {
  constructor(windowRef) {
    this.windowRef = windowRef;
    this.steps = [];
    this.stepMap = {};
    this.showStepper = false;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.showStepper = true; //todo get steps from sitecore

      _this.steps = [{
        name: 'Delivery Method',
        background: 'secondary'
      }, {
        name: 'Review Order',
        background: 'secondary'
      }, {
        name: 'Receipt',
        background: 'secondary'
      }];
      _this.stepMap = {
        [vehicles_eztag_replacement_states__WEBPACK_IMPORTED_MODULE_3__.States.ReplacementDeliveryMethod]: 1,
        [vehicles_eztag_replacement_states__WEBPACK_IMPORTED_MODULE_3__.States.ReplacementReviewOrder]: 2,
        [vehicles_eztag_replacement_states__WEBPACK_IMPORTED_MODULE_3__.States.ReplacementReceipt]: 3
      };
    })();
  }

  scrollToTop() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isHidden = true;
      yield (0,common_utilities__WEBPACK_IMPORTED_MODULE_2__.wait)(20);

      _this2.windowRef.scrollTo(0, 0);

      _this2.isHidden = false;
    })();
  }

}

FrameComponent.ɵfac = function FrameComponent_Factory(t) {
  return new (t || FrameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](common_providers__WEBPACK_IMPORTED_MODULE_1__.WindowRef));
};

FrameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: FrameComponent,
  selectors: [["vehicles-replacement-frame"]],
  decls: 4,
  vars: 1,
  consts: [[1, "refresh-2020", "u-spacing--widthFill"], [3, "steps", "stepMap", 4, "ngIf"], [3, "steps", "stepMap"]],
  template: function FrameComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "main", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FrameComponent_stepper_1_Template, 1, 2, "stepper", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "page-filled-container");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ui-view");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showStepper);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_4__.StepperComponent, _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_5__.PageFilledContainerComponent, _uirouter_angular__WEBPACK_IMPORTED_MODULE_8__.UIView],
  styles: ["[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  background-color: #efeff4;\n}\n@media not screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n    padding-left: 85px;\n    padding-right: 85px;\n  }\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  padding: 24px 15px 16px 15px;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 30px;\n  color: #fc2125;\n  margin-bottom: 10px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    padding: 11px 14px 15px 14px;\n  }\n}\n[_nghost-%COMP%]   stepper[_ngcontent-%COMP%] {\n  display: block;\n  min-height: 32px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   stepper[_ngcontent-%COMP%] {\n    min-height: unset;\n  }\n}\n[_nghost-%COMP%]   page-filled-container[_ngcontent-%COMP%] {\n  display: block;\n}\n@media not screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   page-filled-container[_ngcontent-%COMP%] {\n    background-color: #efeff4;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   page-filled-container[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1lLmNvbXBvbmVudC5sZXNzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXHRoZW1lXFxtaXhpbnNcXHBhZ2UubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ29CSSx5QkFBQTtBRHJCSjtBQU1RO0VBQUE7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0VBSFY7QUFDRjtBQUxBO0VBdUJZLDRCQUFBO0FBZlo7QUFSQTtFQWFnQixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFGaEI7QUFJZ0I7RUFBQTtJQUNJLGdCQUFBO0VBRGxCO0FBQ0Y7QUFNWTtFQUFBO0lBQ0ksNEJBQUE7RUFIZDtBQUNGO0FBeEJBO0VBZ0NRLGNBQUE7RUFDQSxnQkFBQTtBQUxSO0FBT1E7RUFBQTtJQUNJLGlCQUFBO0VBSlY7QUFDRjtBQWpDQTtFQXlDUSxjQUFBO0FBTFI7QUFPUTtFQUFBO0lDdkJKLHlCQUFBO0VEb0JGO0FBQ0Y7QUFNUTtFQUFBO0lDaENKLHlCQUFBO0VEOEJGO0FBQ0YiLCJmaWxlIjoiZnJhbWUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcblxuOmhvc3Qge1xuXG4gICAgbWFpbiB7XG4gICAgICAgIC50LWJvZHktLWJhY2tncm91bmRDb2xvcjIoQHRoZW1lLWxpZ2h0KTtcblxuICAgICAgICBAbWVkaWEgbm90IEBicmVha3BvaW50LWx0LW1kIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogQHBhZ2UtYmFyLW1hcmdpbi1zdGF0aWM7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBAcGFnZS1iYXItbWFyZ2luLXN0YXRpYztcbiAgICAgICAgfVxuXG4gICAgICAgIGhlYWRlciB7XG5cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IEB0b3JjaC1yZWQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICAgICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYWRkaW5nOiAyNHB4IDE1cHggMTZweCAxNXB4O1xuXG4gICAgICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDExcHggQHBhZ2UtYmFyLW1hcmdpbi1zdGF0aWMtbHQtbWQgMTVweCBAcGFnZS1iYXItbWFyZ2luLXN0YXRpYy1sdC1tZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0ZXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWluLWhlaWdodDogMzJweDtcblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgbWluLWhlaWdodDogdW5zZXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYWdlLWZpbGxlZC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICBAbWVkaWEgbm90IEBicmVha3BvaW50LWx0LW1kIHtcbiAgICAgICAgICAgIC50LWJvZHktLWJhY2tncm91bmRDb2xvcjIoQHRoZW1lLWxpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgICAgICAudC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lLWxpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG5AYm9keS0tYmFja2dyb3VuZENvbG9yLWxpZ2h0OiBAd2hpdGU7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMi1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjMtbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1saWdodDogQHRyb3BpY2FsLXJhaW4tZm9yZXN0LWdyZWVuO1xuQGJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2lsdmVyLWdyYXk7XG5AaGVhZGVyLS1jb2xvci1saWdodDogQHR1bmEtZ3JheTtcbkBsYWJlbC0tY29sb3ItbGlnaHQ6IEBib3VsZGVyLWdyYXk7XG5Ac2VsZWN0X19hcnJvdy0tY29sb3ItbGlnaHQ6IEBzY29ycGlvbi1ncmF5O1xuQGxpbmstLWNvbG9yLWxpZ2h0OiBAYXp1cmUtcmFkaWFuY2UtYmx1ZTtcbkBkaXZpZGVyLS1ib3JkZXJDb2xvci1saWdodDogQHNjaG9vbC1idXMteWVsbG93O1xuXG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjIoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMi1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMyhAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtaGVhZGVyLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdoZWFkZXItLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGFiZWwtLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xhYmVsLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXNlbGVjdF9fYXJyb3ctLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ3NlbGVjdF9fYXJyb3ctLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtbGluay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGluay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yICFpbXBvcnRhbnQ7IC8vIG1hcmtlZCBhcyAhaW1wb3J0YW50IHRvIG92ZXJyaWRlIGJvb3RzdHJhcFxufVxuXG4udC1kaXZpZGVyLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdkaXZpZGVyLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1kaXZpZGVyX19kYXNoLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuIl19 */"]
});

/***/ }),

/***/ 63405:
/*!********************************************************************************!*\
  !*** ./src/vehicles/eztag/replacement/components/receipt/receipt.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptComponent": () => (/* binding */ ReceiptComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/core */ 7199);
/* harmony import */ var _storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../storefront/services/storefrontUtility.service */ 18011);
/* harmony import */ var vehicles_shared_services_receipt_data_helper_receipt_data_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vehicles/shared/services/receipt-data-helper/receipt-data-helper.service */ 96471);
/* harmony import */ var vehicles_eztag_replacement_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vehicles/eztag/replacement/services */ 41038);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_receipt_component_receipt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/receipt/component/receipt.component */ 51961);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../common/ui/modals/actionButtons/actionButtons.component */ 65380);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizardNext.directive */ 27358);

















function ReceiptComponent_receipt_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "receipt", 3);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("data", ctx_r0.data);
  }
}

function ReceiptComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "section")(1, "action-buttons", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("main", function ReceiptComponent_section_3_Template_action_buttons_main_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](5);

      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r5.proceed(_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "PROCEED");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "wizard-ui", null, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function ReceiptComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "section", 7)(1, "wizard-ui", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("next", function ReceiptComponent_ng_template_4_Template_wizard_ui_next_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r7.nextStep($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " ACCOUNT DASHBOARD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ReceiptComponent_ng_template_4_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r9.viewVehiclesClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " Manage My Vehicles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("reverseOrder", true);
  }
}

class ReceiptComponent {
  constructor(state, storefrontUtilityService, receiptDataHelper, replacementStateService, mailingService) {
    this.state = state;
    this.storefrontUtilityService = storefrontUtilityService;
    this.receiptDataHelper = receiptDataHelper;
    this.replacementStateService = replacementStateService;
    this.mailingService = mailingService;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isKiosk = _this.storefrontUtilityService.isRunningAsKiosk && !_this.storefrontUtilityService.webStoreData.fullSiteMode;
      _this.data = _this.getData();
      yield _this.mailingService.clearData();
    })();
  }

  getData() {
    const state = this.replacementStateService.getState();
    return this.receiptDataHelper.getData({
      cmsContent: this.cmsContent,
      paymentAmt: state.amount,
      ezTags: [state.replaceTag],
      isPlate: false,
      deliveryMethod: state.deliveryMethod
    });
  }

  viewVehiclesClick() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.state.go(_shared__WEBPACK_IMPORTED_MODULE_1__.States.Root);
    })();
  }

  nextStep(state) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.state.go(state);
    })();
  }

  proceed(wizardUi) {
    if (this.isKiosk && wizardUi) {
      wizardUi.gotoNextState();
      return;
    }
  }

}

ReceiptComponent.ɵfac = function ReceiptComponent_Factory(t) {
  return new (t || ReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_uirouter_core__WEBPACK_IMPORTED_MODULE_2__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_3__.StorefrontUtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](vehicles_shared_services_receipt_data_helper_receipt_data_helper_service__WEBPACK_IMPORTED_MODULE_4__.ReceiptDataHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](vehicles_eztag_replacement_services__WEBPACK_IMPORTED_MODULE_5__.ReplacementStateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_1__.MailingAddressService));
};

ReceiptComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: ReceiptComponent,
  selectors: [["replacement-receipt"]],
  inputs: {
    cmsContent: "cmsContent"
  },
  decls: 6,
  vars: 3,
  consts: [[3, "data", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["nonkiosk", ""], [3, "data"], [3, "main"], ["action-main", ""], ["wizardUi", ""], ["fxLayout", "row", "fxLayout.lt-md", "column"], [3, "reverseOrder", "next"], ["wizard-next", ""], [3, "click"]],
  template: function ReceiptComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "page-centered-container")(1, "card-container");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ReceiptComponent_receipt_2_Template, 1, 1, "receipt", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ReceiptComponent_section_3_Template, 6, 0, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, ReceiptComponent_ng_template_4_Template, 6, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](5);

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.data);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isKiosk)("ngIfElse", _r2);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_6__.PageCenteredContainerComponent, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__.CardContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _common_receipt_component_receipt_component__WEBPACK_IMPORTED_MODULE_8__.ReceiptComponent, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_9__.ActionButtonsComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__.WizardComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutDirective, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_11__.WizardNextDirective],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-top: 16px;\n  }\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-next][_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]    + a[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]    + a[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 64px;\n  margin-top: 16px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29tbW9uXFx1aVxcY29udGFpbmVyc1xcZnhSb3dcXGRldGFpbHMubGVzcyIsInJlY2VpcHQuY29tcG9uZW50Lmxlc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcY3VzdG9tXFxzcGFjaW5nXFxzZWN0aW9ucy5sZXNzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGN1c3RvbVxcc3BhY2luZ1xcZGl2aWRlcnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7QUNESjtBREFBO0VBSVEsYUFBQTtFQUNBLGtCQUFBO0FDRFI7QURKQTtFQThFSSxjQUFBO0VBQ0Esc0JBQUE7QUN2RUo7QURSQTtFQW9GSSxjQUFBO0VBQ0Esc0JBQUE7QUN6RUo7QURaQTtFQXlGSSxjQUFBO0VBQ0Esc0JBQUE7QUMxRUo7QURoQkE7RUE4RkksY0FBQTtFQUNBLHNCQUFBO0FDM0VKO0FEcEJBO0VBbUdJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDNUVKO0FEekJBO0VBeUdJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDN0VKO0FEOUJBO0VBK0dJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQzlFSjtBRG5DQTtFQXFISSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUMvRUo7QUR4Q0E7RUEwQ1EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDUjtBRDdDQTtFQWdEUSxXQUFBO0FDQVI7QURoREE7RUFvRFEsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RSO0FEdERBO0VBMkRRLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FENURBO0VBa0VRLGVBQUE7QUNIUjtBREtRO0VBQ0ksZUFBQTtBQ0haO0FBM0RRO0VBQUE7SUFDSSxnQkFBQTtFQThEVjtBQUNGO0FBbkVBO0VBVVkseUJBQUE7QUE0RFo7QUF0RUE7RUFlUSxrQkFBQTtBQTBEUjtBQXhEUTtFQUFBO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0VBMkRWO0FBQ0Y7QUEvRUE7O0VDU1EsbUJBQUE7QUQwRVI7QUFuRkE7RUE2QlEsV0FBQTtFRWpDQSxnQkFBQTtFQUNBLG1CQUFBO0FGMkZSIiwiZmlsZSI6InJlY2VpcHQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuXG4gICAgLmZ4LWZsZXgtYXV0byB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtZmxleC1ub25lIHtcbiAgICAgICAgLmZ4LWZsZXgtbm9uZS1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUge1xuICAgICAgICAuZngtZmxleC1hdXRvLXNocmluay1tb3JlLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWZsZXgtYXV0by1ncm93LW1vcmUge1xuICAgICAgICAuZngtZmxleC1hdXRvLWdyb3ctbW9yZS1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtcm93IHtcbiAgICAgICAgLmZ4LWxheW91dC1yb3ctbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LWNvbHVtbiB7XG4gICAgICAgIC5meC1sYXlvdXQtY29sdW1uLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1hbGlnbi1zdGFydC1jZW50ZXIge1xuICAgICAgICAuZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlci1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtYWxpZ24tZW5kLWNlbnRlciB7XG4gICAgICAgIC5meC1sYXlvdXQtYWxpZ24tZW5kLWNlbnRlci1taXhpbigpO1xuICAgIH1cblxuICAgIC5saW1pdGVkLWZsZXgge1xuICAgICAgICBtaW4td2lkdGg6IDE3MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDUzMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAudW5saW1pdGVkLWZsZXgge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAubGltaXRlZC1mbGV4LWVuZCB7XG4gICAgICAgIG1pbi13aWR0aDogNzBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cblxuICAgIC5sYXJnZXItbGltaXRlZC1mbGV4LWVuZCB7XG4gICAgICAgIG1pbi13aWR0aDogMTQzcHg7XG4gICAgICAgIG1heC13aWR0aDogMTQ1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxuXG4gICAgLnRhYmxlLXNwYWNlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuXG4gICAgICAgICYubHQtbWQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gTWl4aW5zIHRvIGFwcGVhc2UgcGVyZm9ybWFuY2Vcbi5meC1mbGV4LWF1dG8tbWl4aW4oKSB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWZsZXgtbm9uZS1taXhpbigpIHtcbiAgICAvLyBsZXNzaGludC1kaXNhYmxlLW5leHQtbGluZSB6ZXJvVW5pdFxuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUtbWl4aW4oKSB7XG4gICAgZmxleDogMSAyIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWZsZXgtYXV0by1ncm93LW1vcmUtbWl4aW4oKSB7XG4gICAgZmxleDogMiAxIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWxheW91dC1yb3ctbWl4aW4oKSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5meC1sYXlvdXQtY29sdW1uLW1peGluKCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlci1taXhpbigpIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5meC1sYXlvdXQtYWxpZ24tZW5kLWNlbnRlci1taXhpbigpIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy9zZWN0aW9ucy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy9kaXZpZGVycy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdWkvY29udGFpbmVycy9meFJvdy9kZXRhaWxzLmxlc3MnO1xuXG46aG9zdCB7XG5cbiAgICBoMiB7XG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2l6YXJkLXVpIHtcbiAgICAgICAgW3dpemFyZC1uZXh0XSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2l6YXJkLXVpICsgYSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwLFxuICAgIHNlY3Rpb24ge1xuICAgICAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luQm90dG9tKCk7XG4gICAgfVxuXG4gICAgbWF0LWRpdmlkZXIge1xuICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX2RpdmlkZXItLW1hcmdpblRvcEJvdHRvbSgpO1xuICAgIH1cblxufVxuIiwiLnJlZnJlc2gtMjAyMCB7XG4gICAgLy8gRGVza3RvcFxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2hlYWRlclRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpbkJvdHRvbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wSGFsZiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fYnV0dG9uVG9GaWVsZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maXJzdEhlYWRlclRvVGl0bGUtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fY2FyZFRvQ2FyZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19hZGRyZXNzVG9QYXltZW50RGlzcGxheS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG4gICAgLy8gTW9iaWxlXG4gICAgJi5sdC1tZCxcbiAgICAubHQtbWQge1xuICAgICAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5yZWZyZXNoLTIwMjAge1xuICAgIC51LXNwYWNpbmdfX2RpdmlkZXItLW1hcmdpblRvcEJvdHRvbSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 17483:
/*!******************************************************************************************!*\
  !*** ./src/vehicles/eztag/replacement/components/review-order/review-order.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewOrderComponent": () => (/* binding */ ReviewOrderComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var vehicles_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vehicles/common */ 35367);
/* harmony import */ var vehicles_eztag_replacement_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vehicles/eztag/replacement/states */ 94822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/core */ 7199);
/* harmony import */ var vehicles_eztag_replacement_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vehicles/eztag/replacement/services */ 41038);
/* harmony import */ var cms_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cms/services */ 46693);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var vehicles_eztag_replacement_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vehicles/eztag/replacement/services/helper/helper-service */ 16500);
/* harmony import */ var vehicles_eztag_replacement_services_facade_vehicles_replacement_facade_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vehicles/eztag/replacement/services/facade/vehicles-replacement-facade.service */ 6298);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_review_order_components_review_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/review-order/components/review.-order.component */ 86822);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 38661);




















function ReviewOrderComponent_review_order_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "review-order", 7);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", ctx_r0.data)("ezTagMailingAddress", ctx_r0.mailingInfo)("isAddEzTag", true);
  }
}

class ReviewOrderComponent {
  constructor(stateService, replacementStateService, cmsReplacementService, paymentInfoService, reviewOrderService, helperService, facade, toaster, mailingService, currentUserService) {
    this.stateService = stateService;
    this.replacementStateService = replacementStateService;
    this.cmsReplacementService = cmsReplacementService;
    this.paymentInfoService = paymentInfoService;
    this.reviewOrderService = reviewOrderService;
    this.helperService = helperService;
    this.facade = facade;
    this.toaster = toaster;
    this.mailingService = mailingService;
    this.currentUserService = currentUserService;
    this.paymentDueInfo = {};
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.tags = _this.replacementStateService.getState().replaceTag;
      _this.paymentDueInfo = yield _this.paymentInfoService.getPaymentInfo([_this.tags]);
      _this.currentBalance = _this.paymentInfoService.getCurrentBalance();
      _this.mailingInfo = yield _this.mailingService.getMailingAddress();
      const insertValues = {
        currentBalAmt: _this.currentBalance,
        minReqAmt: _this.paymentDueInfo.depositAmt,
        totalAmt: _this.paymentDueInfo.totalAmt
      };
      _this.pageCms.RebillToolTip = _this.cmsReplacementService.transformTemplate(_this.pageCms.RebillToolTip, insertValues);

      _this.setupData();

      _this.subscribeEvents();
    })();
  }

  setupData() {
    this.data = {
      deliveryMethod: {
        display: true,
        header: this.pageCms.DeliveryMethodHeader,
        operations: [{
          action: vehicles_common__WEBPACK_IMPORTED_MODULE_1__.Action.Edit,
          display: true,
          label: 'Edit',
          source: 'delivery-method'
        }],
        type: this.replacementStateService.getState().deliveryMethod
      },
      orderSummary: {
        display: true,
        summary: {
          title: this.pageCms.OrderSummaryTitle,
          description: this.pageCms.OrderSummaryDesc
        },
        details: [{
          tags: [this.tags],
          title: this.pageCms.OrderSummaryDetailsTitle,
          isPlate: false
        }],
        operations: {
          isEditable: false,
          isRemoveable: false
        },
        stateList: this.states
      },
      paymentSummary: this.mapPaymentSummary()
    };
  }

  mapPaymentSummary() {
    return {
      header: this.pageCms.PaymentSummaryTitle,
      paymentContext: this.pageCms.PaymentContext,
      replenishmentAmt: {
        link: {
          linkDesc: this.pageCms.ReplenishmentAmtDesc,
          onClickContent: this.replenishmentAmtModalCms
        },
        isOptIn: this.currentUserService.getCurrentUser().rebillOptIn
      },
      tagInfo: this.mapPaymentSummTagInfo(),
      paymentDueInfo: {
        tagSalesAmt: this.paymentDueInfo.tagSalesAmt,
        totalAmt: this.paymentDueInfo.totalAmt,
        rebillTooltip: this.pageCms.RebillToolTip
      }
    };
  }

  mapPaymentSummTagInfo() {
    const rebillOptIn = this.currentUserService.getCurrentUser().rebillOptIn;
    const motorcycleText = rebillOptIn ? this.pageCms.MotorcycleTextForOptInRep : this.pageCms.MotorcycleTextForOptOutRep;
    return {
      display: true,
      contextDesc: this.pageCms.TagInfo,
      link: {
        linkDesc: this.pageCms.TagInfoModalLink,
        onClickContent: this.tagInfoModalCms
      },
      motorcycleText: this.tags.motorcycle ? motorcycleText : null
    };
  }

  subscribeEvents() {
    this.reviewOrderService.subscribe(event => {
      if (event.action === vehicles_common__WEBPACK_IMPORTED_MODULE_1__.Action.Edit) {
        if (event.source === 'delivery-method') {
          this.editDeliveryMethod();
        }
      }
    });
  }

  editDeliveryMethod() {
    this.stateService.go(vehicles_eztag_replacement_states__WEBPACK_IMPORTED_MODULE_2__.States.ReplacementDeliveryMethod);
  }

  placeOrder(state) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const updated = yield _this2.mailingService.setMailingAddressOnAcctLevel();

      if (updated) {
        const res = yield _this2.facade.replace();

        if (res.successStatus) {
          const oldState = _this2.replacementStateService.getState();

          _this2.replacementStateService.setState({ ...oldState,
            amount: _this2.paymentDueInfo.totalAmt
          });

          yield _this2.stateService.go(state);
        } else {
          _this2.toaster.show('Error', res.errors[0].message);
        }
      }
    })();
  }

  cancel(state) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.helperService.cancel(_this3.cancelContent, state);
    })();
  }

}

ReviewOrderComponent.ɵfac = function ReviewOrderComponent_Factory(t) {
  return new (t || ReviewOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_uirouter_core__WEBPACK_IMPORTED_MODULE_3__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](vehicles_eztag_replacement_services__WEBPACK_IMPORTED_MODULE_4__.ReplacementStateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_5__.CmsReplacementService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_6__.PaymentInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](vehicles_common__WEBPACK_IMPORTED_MODULE_1__.ReviewOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](vehicles_eztag_replacement_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_7__.ReplacementHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](vehicles_eztag_replacement_services_facade_vehicles_replacement_facade_service__WEBPACK_IMPORTED_MODULE_8__.VehiclesReplacementFacadeService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_9__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_6__.MailingAddressService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_9__.CurrentUserService));
};

ReviewOrderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: ReviewOrderComponent,
  selectors: [["replacement-review-order"]],
  inputs: {
    pageCms: "pageCms",
    replenishmentAmtModalCms: "replenishmentAmtModalCms",
    tagInfoModalCms: "tagInfoModalCms",
    states: "states",
    cancelContent: "cancelContent"
  },
  decls: 10,
  vars: 1,
  consts: [[1, "refresh-2020"], [3, "data", "ezTagMailingAddress", "isAddEzTag", 4, "ngIf"], [3, "next", "cancel"], ["wizard-next", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["wizard-cancel", ""], [3, "data", "ezTagMailingAddress", "isAddEzTag"]],
  template: function ReviewOrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "page-centered-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ReviewOrderComponent_review_order_1_Template, 1, 3, "review-order", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "wizard-ui", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("next", function ReviewOrderComponent_Template_wizard_ui_next_2_listener($event) {
        return ctx.placeOrder($event);
      })("cancel", function ReviewOrderComponent_Template_wizard_ui_cancel_2_listener($event) {
        return ctx.cancel($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "PLACE ORDER");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.data);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_10__.PageCenteredContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _common_review_order_components_review_order_component__WEBPACK_IMPORTED_MODULE_11__.ReviewOrderComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_12__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_13__.WizardNextDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutAlignDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon],
  styles: ["[_nghost-%COMP%]   tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%] {\n  width: 277px;\n  padding: 16px;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  line-height: 15px;\n  font-weight: 600;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%] {\n    left: calc(50vw - (277px / 2));\n    top: -92px;\n  }\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-next][_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-cancel][_ngcontent-%COMP%], [_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-previous][_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlldy1vcmRlci5jb21wb25lbnQubGVzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxmb250cy5sZXNzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGN1c3RvbVxcc3BhY2luZ1xcc2VjdGlvbnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUVRLFlBQUE7RUFDQSxhQUFBO0VDQUoseUJBQUE7RURFSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxSO0FBT1E7RUFBQTtJQUNJLDhCQUFBO0lBQ0EsVUFBQTtFQUpWO0FBQ0Y7QUFSQTtFQWlCUSxjQUFBO0VFSEEsZ0JBQUE7QUZGUjtBQVpBO0VBcUJZLHlCQUFBO0FBTlo7QUFmQTs7RUEwQlksMEJBQUE7QUFQWjtBQW5CQTtFQStCUSxXQUFBO0FBVFIiLCJmaWxlIjoicmV2aWV3LW9yZGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvY3VzdG9tL3NwYWNpbmcvc2VjdGlvbnMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvY3VzdG9tL3NwYWNpbmcvZGl2aWRlcnMubGVzcyc7XG5cbjpob3N0IHtcbiAgICB0b29sLXRpcCBbdG9vbC10aXAtbWVzc2FnZV0ge1xuICAgICAgICB3aWR0aDogMjc3cHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIC50LWJvZHktLWZvbnRGYW1pbHkoKTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgbGVmdDogY2FsYyg1MHZ3IC0gKDI3N3B4IC8gMikpO1xuICAgICAgICAgICAgdG9wOiAtOTJweDtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgd2l6YXJkLXVpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIC5yZWZyZXNoLTIwMjAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcCgpO1xuXG4gICAgICAgIFt3aXphcmQtbmV4dF0ge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIFt3aXphcmQtY2FuY2VsXSxcbiAgICAgICAgW3dpemFyZC1wcmV2aW91c10ge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cblxuLnQtaGVhZGVyLS1mb250RmFtaWx5KCkge1xuICAgIGZvbnQtZmFtaWx5OiBAZm9udC1qb3N0O1xufVxuXG4udC1ib2R5LS1mb250RmFtaWx5KCkge1xuICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xufVxuIiwiLnJlZnJlc2gtMjAyMCB7XG4gICAgLy8gRGVza3RvcFxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2hlYWRlclRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpbkJvdHRvbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wSGFsZiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fYnV0dG9uVG9GaWVsZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maXJzdEhlYWRlclRvVGl0bGUtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fY2FyZFRvQ2FyZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19hZGRyZXNzVG9QYXltZW50RGlzcGxheS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG4gICAgLy8gTW9iaWxlXG4gICAgJi5sdC1tZCxcbiAgICAubHQtbWQge1xuICAgICAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 95572:
/*!*****************************************************!*\
  !*** ./src/vehicles/eztag/replacement/constants.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsIds": () => (/* binding */ CmsIds)
/* harmony export */ });
const CmsIds = {
    DeliveryMethod: '6063ED69-ACF5-4FE0-BC90-45BECDA7F441',
    ReviewTagOrder: 'F4F9063E-73CC-4DF2-8E99-B31A69661F6F',
    ReplenishmentAmtModal: 'ABB96729-0014-4E70-9E97-1629FCF42197',
    TagInfoModal: '6767BCB2-EEC7-4217-922F-32956DFF3F5F',
    Receipt: 'F2734D53-4B2E-45E3-A619-AF6E6E7669E1',
    Cancellation: '97D34BCD-F6B5-4454-B923-4283059B0754'
};


/***/ }),

/***/ 39111:
/*!**************************************************!*\
  !*** ./src/vehicles/eztag/replacement/module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiclesReplacementModule": () => (/* binding */ VehiclesReplacementModule)
/* harmony export */ });
/* harmony import */ var _components_delivery_method_delivery_method_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/delivery-method/delivery-method.component */ 72986);
/* harmony import */ var _components_frame_frame_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/frame/frame.component */ 9343);
/* harmony import */ var _components_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/receipt/receipt.component */ 63405);
/* harmony import */ var _components_review_order_review_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/review-order/review-order.component */ 17483);
/* harmony import */ var _services_api_vehicles_replacement_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/api/vehicles-replacement-api.service */ 29447);
/* harmony import */ var _services_facade_vehicles_replacement_facade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/facade/vehicles-replacement-facade.service */ 6298);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout */ 45046);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pipes/module */ 20445);
/* harmony import */ var validation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! validation/module */ 26186);
/* harmony import */ var storefront_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! storefront/module */ 89550);
/* harmony import */ var vehicles_common_vehicles_common_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vehicles/common/vehicles-common.module */ 82001);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./states */ 94822);
/* harmony import */ var _routes_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes-config */ 96140);
/* harmony import */ var app_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/routing */ 59389);
/* harmony import */ var vehicles_shared_services_receipt_data_helper_receipt_data_helper_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vehicles/shared/services/receipt-data-helper/receipt-data-helper.service */ 96471);
/* harmony import */ var vehicles_common_order_summary_order_summary_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vehicles/common/order-summary/order-summary.module */ 50405);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services */ 41038);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var _services_helper_helper_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/helper/helper-service */ 16500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @uirouter/angular */ 99305);




























const ComponentDictionary = {
    [_states__WEBPACK_IMPORTED_MODULE_11__.States.Replacement]: _components_frame_frame_component__WEBPACK_IMPORTED_MODULE_1__.FrameComponent,
    [_states__WEBPACK_IMPORTED_MODULE_11__.States.ReplacementDeliveryMethod]: _components_delivery_method_delivery_method_component__WEBPACK_IMPORTED_MODULE_0__.DeliveryMethodComponent,
    [_states__WEBPACK_IMPORTED_MODULE_11__.States.ReplacementReviewOrder]: _components_review_order_review_order_component__WEBPACK_IMPORTED_MODULE_3__.ReviewOrderComponent,
    [_states__WEBPACK_IMPORTED_MODULE_11__.States.ReplacementReceipt]: _components_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_2__.ReceiptComponent
};
const routes = _routes_config__WEBPACK_IMPORTED_MODULE_12__.RoutesConfig.map(config => {
    const route = {
        ...config,
        component: ComponentDictionary[config.name]
    };
    return route;
});
class VehiclesReplacementModule {
}
VehiclesReplacementModule.ɵfac = function VehiclesReplacementModule_Factory(t) { return new (t || VehiclesReplacementModule)(); };
VehiclesReplacementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: VehiclesReplacementModule });
VehiclesReplacementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [
        _services_api_vehicles_replacement_api_service__WEBPACK_IMPORTED_MODULE_4__.VehiclesReplacementApiService,
        _services_facade_vehicles_replacement_facade_service__WEBPACK_IMPORTED_MODULE_5__.VehiclesReplacementFacadeService,
        _services__WEBPACK_IMPORTED_MODULE_16__.ReplacementStateService,
        vehicles_shared_services_receipt_data_helper_receipt_data_helper_service__WEBPACK_IMPORTED_MODULE_14__.ReceiptDataHelperService,
        vehicles_shared__WEBPACK_IMPORTED_MODULE_17__.PaymentInfoService,
        vehicles_shared__WEBPACK_IMPORTED_MODULE_17__.WebApiService,
        _services_helper_helper_service__WEBPACK_IMPORTED_MODULE_18__.ReplacementHelperService
    ], imports: [[
            (0,app_routing__WEBPACK_IMPORTED_MODULE_13__.DynamicRoutes)([common_module__WEBPACK_IMPORTED_MODULE_6__.ENVIRON_CONFIG], (environConfig) => environConfig.vehicleReplacement ? routes : []),
            common_module__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__.MatDividerModule,
            pipes_module__WEBPACK_IMPORTED_MODULE_7__.PipesModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__.FlexLayoutModule,
            validation_module__WEBPACK_IMPORTED_MODULE_8__.ValidationModule,
            storefront_module__WEBPACK_IMPORTED_MODULE_9__.StorefrontModule,
            vehicles_common_vehicles_common_module__WEBPACK_IMPORTED_MODULE_10__.VehiclesCommonModule,
            vehicles_common_order_summary_order_summary_module__WEBPACK_IMPORTED_MODULE_15__.OrderSummaryModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](VehiclesReplacementModule, { declarations: [_components_frame_frame_component__WEBPACK_IMPORTED_MODULE_1__.FrameComponent,
        _components_delivery_method_delivery_method_component__WEBPACK_IMPORTED_MODULE_0__.DeliveryMethodComponent,
        _components_review_order_review_order_component__WEBPACK_IMPORTED_MODULE_3__.ReviewOrderComponent,
        _components_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_2__.ReceiptComponent], imports: [_uirouter_angular__WEBPACK_IMPORTED_MODULE_27__.UIRouterModule, common_module__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__.MatDividerModule,
        pipes_module__WEBPACK_IMPORTED_MODULE_7__.PipesModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__.FlexLayoutModule,
        validation_module__WEBPACK_IMPORTED_MODULE_8__.ValidationModule,
        storefront_module__WEBPACK_IMPORTED_MODULE_9__.StorefrontModule,
        vehicles_common_vehicles_common_module__WEBPACK_IMPORTED_MODULE_10__.VehiclesCommonModule,
        vehicles_common_order_summary_order_summary_module__WEBPACK_IMPORTED_MODULE_15__.OrderSummaryModule] }); })();


/***/ }),

/***/ 96140:
/*!*********************************************************!*\
  !*** ./src/vehicles/eztag/replacement/routes-config.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutesConfig": () => (/* binding */ RoutesConfig),
/* harmony export */   "stateGuardTagReplacement": () => (/* binding */ stateGuardTagReplacement)
/* harmony export */ });
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ 63078);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states */ 94822);
/* harmony import */ var accountDashboard_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! accountDashboard/constants */ 75888);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var common_resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/resolvers */ 1444);
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/index */ 40719);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ 95572);







const stateGuardTagReplacement = (0,common_resolvers__WEBPACK_IMPORTED_MODULE_4__.StateGuard)(constants_module__WEBPACK_IMPORTED_MODULE_3__.webStorageConst.vehiclesTagReplacementCurrentStep, _shared_index__WEBPACK_IMPORTED_MODULE_5__.States.Root);
const RoutesConfig = [
    {
        name: _states__WEBPACK_IMPORTED_MODULE_1__.States.Replacement.toString(),
        abstract: true,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_4__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.MaintenanceFeature.Account),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_4__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.userRoles.active),
        ],
        wizard: {}
    },
    {
        name: _states__WEBPACK_IMPORTED_MODULE_1__.States.ReplacementDeliveryMethod.toString(),
        url: _routes__WEBPACK_IMPORTED_MODULE_0__.Routes.ReplacementDeliveryMethod,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_4__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.MaintenanceFeature.Account),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_4__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.userRoles.active),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_4__.UsStatesResolver)('stateList'),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_4__.CountryResolver)('countryList'),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_4__.CmsResolve)('cancelContent', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_6__.CmsIds.Cancellation }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_4__.CmsResolve)('cmsContent', { mergeParams: true, ItemId: _constants__WEBPACK_IMPORTED_MODULE_6__.CmsIds.DeliveryMethod })
            // stateGuardTagReplacement(),
        ],
        wizard: {
            nextState: _states__WEBPACK_IMPORTED_MODULE_1__.States.ReplacementReviewOrder,
            cancelState: _shared_index__WEBPACK_IMPORTED_MODULE_5__.States.Root
        },
        params: {
            vehicle: null
        }
    },
    {
        name: _states__WEBPACK_IMPORTED_MODULE_1__.States.ReplacementReviewOrder.toString(),
        url: _routes__WEBPACK_IMPORTED_MODULE_0__.Routes.ReplacementReviewOrder,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_4__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.MaintenanceFeature.Account),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_4__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.userRoles.active),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_4__.UsStatesResolver)('stateList'),
            stateGuardTagReplacement({
                denyRefresh: true,
                explicitlyForbidden: [_states__WEBPACK_IMPORTED_MODULE_1__.States.ReplacementReceipt]
            }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_4__.CmsResolve)('pageCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_6__.CmsIds.ReviewTagOrder }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_4__.CmsResolve)('replenishmentAmtModalCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_6__.CmsIds.ReplenishmentAmtModal }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_4__.CmsResolve)('tagInfoModalCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_6__.CmsIds.TagInfoModal }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_4__.CmsResolve)('cancelContent', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_6__.CmsIds.Cancellation }),
        ],
        wizard: {
            nextState: _states__WEBPACK_IMPORTED_MODULE_1__.States.ReplacementReceipt,
            prevState: _states__WEBPACK_IMPORTED_MODULE_1__.States.ReplacementDeliveryMethod,
            cancelState: _shared_index__WEBPACK_IMPORTED_MODULE_5__.States.Root
        }
    },
    {
        name: _states__WEBPACK_IMPORTED_MODULE_1__.States.ReplacementReceipt.toString(),
        url: _routes__WEBPACK_IMPORTED_MODULE_0__.Routes.ReplacementReceipt,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_4__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.MaintenanceFeature.Account),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_4__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.userRoles.active),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_4__.CmsResolve)('cmsContent', { mergeParams: true, ItemId: _constants__WEBPACK_IMPORTED_MODULE_6__.CmsIds.Receipt }),
            stateGuardTagReplacement({
                denyRefresh: true,
                allowed: [_states__WEBPACK_IMPORTED_MODULE_1__.States.ReplacementReviewOrder],
                explicitlyForbidden: [accountDashboard_constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Frame, _shared_index__WEBPACK_IMPORTED_MODULE_5__.States.Root]
            })
        ],
        wizard: {
            nextState: accountDashboard_constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Frame,
            isEndState: true
        }
    }
];


/***/ }),

/***/ 29447:
/*!*****************************************************************************************!*\
  !*** ./src/vehicles/eztag/replacement/services/api/vehicles-replacement-api.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiclesReplacementApiService": () => (/* binding */ VehiclesReplacementApiService)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _common_services_httpService_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/services/httpService/http.service */ 18407);



class VehiclesReplacementApiService {
  constructor(httpService) {
    this.httpService = httpService;
  }

  replace(req) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = '/api/sessions/ManageVehicles/ReplaceEZTag';
      const response = yield _this.httpService.post(url, req);
      return response;
    })();
  }

}

VehiclesReplacementApiService.ɵfac = function VehiclesReplacementApiService_Factory(t) {
  return new (t || VehiclesReplacementApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_common_services_httpService_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService));
};

VehiclesReplacementApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: VehiclesReplacementApiService,
  factory: VehiclesReplacementApiService.ɵfac
});

/***/ }),

/***/ 6298:
/*!***********************************************************************************************!*\
  !*** ./src/vehicles/eztag/replacement/services/facade/vehicles-replacement-facade.service.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiclesReplacementFacadeService": () => (/* binding */ VehiclesReplacementFacadeService)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/models */ 44367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _api_vehicles_replacement_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/vehicles-replacement-api.service */ 29447);
/* harmony import */ var _state_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/state.service */ 12018);





class VehiclesReplacementFacadeService {
  constructor(api, state) {
    this.api = api;
    this.state = state;
  }

  replace() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b;

      const state = _this.state.getState();

      if (state.deliveryMethod && JSON.stringify(state.replaceTag) !== '{}' && state.reason) {
        const deliveryMethodValue = ((_a = state === null || state === void 0 ? void 0 : state.deliveryMethod) === null || _a === void 0 ? void 0 : _a.toString()) === _common_models__WEBPACK_IMPORTED_MODULE_1__.DeliveryMethodType.Store.toString() ? _common_models__WEBPACK_IMPORTED_MODULE_1__.DeliveryMethodType.Pickup.toString() : (_b = state === null || state === void 0 ? void 0 : state.deliveryMethod) === null || _b === void 0 ? void 0 : _b.toString();
        const req = {
          deliveryMethod: deliveryMethodValue,
          reason: state.reason,
          tagId: state.replaceTag.tagId,
          motorCycleFlag: state.replaceTag.isMotorcycleDisabled,
          licPlate: state.replaceTag.licPlate,
          licState: state.replaceTag.licState,
          accountVehicleId: state.replaceTag.acctVehicleId
        };
        const res = yield _this.api.replace(req);
        return _this.parseResponse(res);
      } else {
        return new Promise((resolve, reject) => resolve({
          successStatus: false,
          errors: [{
            key: 'Error',
            message: 'Something went wrong: Please pass sufficient data in request'
          }]
        }));
      }
    })();
  }

  parseResponse(result) {
    const res = {};

    if (result.successStatus) {
      res.successStatus = true;
    } else {
      res.successStatus = false;
      const errorKey = result.errors ? result.errors[0]['key'] : 'Error';
      const errorMessage = result.errors ? result.errors[0]['message'] : 'Something went wrong.Replace failed.';
      res.errors = [{
        key: errorKey,
        message: errorMessage
      }];
    }

    return res;
  }

}

VehiclesReplacementFacadeService.ɵfac = function VehiclesReplacementFacadeService_Factory(t) {
  return new (t || VehiclesReplacementFacadeService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_api_vehicles_replacement_api_service__WEBPACK_IMPORTED_MODULE_2__.VehiclesReplacementApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_state_state_service__WEBPACK_IMPORTED_MODULE_3__.ReplacementStateService));
};

VehiclesReplacementFacadeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: VehiclesReplacementFacadeService,
  factory: VehiclesReplacementFacadeService.ɵfac
});

/***/ }),

/***/ 16500:
/*!**************************************************************************!*\
  !*** ./src/vehicles/eztag/replacement/services/helper/helper-service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplacementHelperService": () => (/* binding */ ReplacementHelperService)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uirouter/angular */ 7199);





class ReplacementHelperService {
  constructor(dialogService, stateService) {
    this.dialogService = dialogService;
    this.stateService = stateService;
  }

  cancel(data, state) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modalContent = {
        cmsContent: {
          Title: data.Title,
          PrimaryContent: data.LongDescription,
          AcceptBtn: 'No',
          CancelBtn: 'Yes'
        }
      };
      const result = yield _this.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_1__.GenericCmsModalComponent, modalContent);

      if (!result) {
        _this.stateService.go(state);
      }
    })();
  }

}

ReplacementHelperService.ɵfac = function ReplacementHelperService_Factory(t) {
  return new (t || ReplacementHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](common_services__WEBPACK_IMPORTED_MODULE_2__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_4__.StateService));
};

ReplacementHelperService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ReplacementHelperService,
  factory: ReplacementHelperService.ɵfac
});

/***/ })

}]);
//# sourceMappingURL=111.72580a3227ef4f1a.js.map