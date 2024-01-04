"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[452],{

/***/ 72753:
/*!********************************************************************************!*\
  !*** ./src/vehicles/mvu/components/deliveryMethod/deliveryMethod.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MvuDeliveryMethodComponent": () => (/* binding */ MvuDeliveryMethodComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var common_upgrades__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/upgrades */ 41034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frame/frame.component */ 58191);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../validation/focus.directive */ 39453);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_chooseDeliveryMethod_chooseDeliveryMethod_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/ui/chooseDeliveryMethod/chooseDeliveryMethod.component */ 5472);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 38661);





















function MvuDeliveryMethodComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 17)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("innerHtml", ctx_r1.cmsMvuDeliveryMethod.PickUpOption, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeHtml"]);
  }
}

class MvuDeliveryMethodComponent {
  constructor(parent, stateService, // private vehicleService: VehicleService,
  vehiclesManagerService, dialogService, mailingService, environmentConfig) {
    this.parent = parent;
    this.stateService = stateService;
    this.vehiclesManagerService = vehiclesManagerService;
    this.dialogService = dialogService;
    this.mailingService = mailingService;
    this.environmentConfig = environmentConfig;
    this.selectedDeliveryMethod = '';
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.deliveryMethod = _this.vehiclesManagerService.getDeliveryMethod();
      _this.mailingInfo = yield _this.mailingService.getMailingAddress();
      _this.allowPickup = _this.environmentConfig.tagDeliveryConfig.MvuAllowPickup;
    })();
  }

  cancel(state) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        cmsContent: {
          Title: _this2.cancellationModal.Title,
          PrimaryContent: _this2.cancellationModal.LongDescription,
          AcceptBtn: 'No',
          CancelBtn: 'Yes'
        }
      };
      const res = yield _this2.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_1__.GenericCmsModalComponent, data);

      if (!res) {
        _this2.vehiclesManagerService.clearData(); // this.vehicleService.destroyMvuDetails();


        yield _this2.stateService.go(state);
      }
    })();
  }

  nextStep(state) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.deliveryMethod.deliveryMethod = _this3.selectedDeliveryMethod;

      _this3.vehiclesManagerService.setDeliveryMethod(_this3.deliveryMethod);

      yield _this3.stateService.go(state);
    })();
  }

  onMailingAddressEdit(option) {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.mailingService.onMailingAddressEdit(option, _this4.parent.stateList, _this4.parent.countryList, common_ui__WEBPACK_IMPORTED_MODULE_1__.NewBillingAddressModalComponent);
    })();
  }

  disable() {
    var _a;

    return this.selectedDeliveryMethod === 'mail' && ((_a = this.mailingInfo) === null || _a === void 0 ? void 0 : _a.address1) === null;
  }

}

MvuDeliveryMethodComponent.ɵfac = function MvuDeliveryMethodComponent_Factory(t) {
  return new (t || MvuDeliveryMethodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.MvuFrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_13__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_4__.VehiclesManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_5__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_4__.MailingAddressService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](common_upgrades__WEBPACK_IMPORTED_MODULE_2__.ENVIRON_CONFIG));
};

MvuDeliveryMethodComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: MvuDeliveryMethodComponent,
  selectors: [["vehicles-mvu-delivery"]],
  inputs: {
    cmsMvuDeliveryMethod: "cmsMvuDeliveryMethod",
    cancellationModal: "cancellationModal"
  },
  decls: 30,
  vars: 8,
  consts: [[1, "refresh-2020"], ["validation-focus", "", "novalidate", ""], ["Form", "ngForm"], [1, "u-spacing__fieldToSection--marginTop"], [1, "u-spacing__divider--marginTopBottom"], ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "u-spacing--widthFill"], ["fxLayout", "row", "fxLayoutAlign", "start start"], ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "descriptions"], [4, "ngIf"], [3, "isMvu", "mailingInfo", "deliveryMethod", "isAddEzTag", "deliveryMethodChange", "onEdit"], [1, "u-spacing__buttonToField--marginTop"], [3, "disabled", "next", "cancel"], ["Wizard", ""], ["wizard-next", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["wizard-cancel", ""], ["fxLayout", "row", "fxLayoutAlign", "start start", 1, "u-spacing__fieldToSection--marginTop"], [3, "innerHtml"]],
  template: function MvuDeliveryMethodComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "form", 1, 2)(3, "div", 3)(4, "card-container")(5, "header")(6, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "mat-divider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "section", 5)(10, "div", 6)(11, "div", 7)(12, "div")(13, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Note: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, MvuDeliveryMethodComponent_ng_container_16_Template, 4, 1, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "choose-delivery-method", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("deliveryMethodChange", function MvuDeliveryMethodComponent_Template_choose_delivery_method_deliveryMethodChange_18_listener($event) {
        return ctx.selectedDeliveryMethod = $event;
      })("onEdit", function MvuDeliveryMethodComponent_Template_choose_delivery_method_onEdit_18_listener($event) {
        return ctx.onMailingAddressEdit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "> ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "section", 10)(21, "wizard-ui", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("next", function MvuDeliveryMethodComponent_Template_wizard_ui_next_21_listener($event) {
        return ctx.nextStep($event);
      })("cancel", function MvuDeliveryMethodComponent_Template_wizard_ui_cancel_21_listener($event) {
        return ctx.cancel($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, "CONTINUE");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](26, "mat-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.cmsMvuDeliveryMethod.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.cmsMvuDeliveryMethod.Note);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.allowPickup);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isMvu", true)("mailingInfo", ctx.mailingInfo)("deliveryMethod", ctx.selectedDeliveryMethod)("isAddEzTag", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", _r0.submitted && _r0.invalid || ctx.disable());
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_6__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_7__.FocusDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_8__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _common_ui_chooseDeliveryMethod_chooseDeliveryMethod_component__WEBPACK_IMPORTED_MODULE_9__.ChooseDeliveryMethodComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_11__.WizardNextDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon],
  styles: ["mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGl2ZXJ5TWV0aG9kLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksV0FBQTtBQUZKIiwiZmlsZSI6ImRlbGl2ZXJ5TWV0aG9kLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbm1hdC1kaXZpZGVyIHtcbiAgICB3aWR0aDogQHdpZHRoLWRpdmlkZXI7XG59XG4iXX0= */"]
});

/***/ }),

/***/ 58191:
/*!**************************************************************!*\
  !*** ./src/vehicles/mvu/components/frame/frame.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MvuFrameComponent": () => (/* binding */ MvuFrameComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/providers */ 61264);
/* harmony import */ var common_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/utilities */ 56516);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../states */ 46570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/ui/wizard/stepper/stepper.component */ 63457);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @uirouter/angular */ 99305);










function MvuFrameComponent_stepper_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "stepper", 2);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("steps", ctx_r0.steps)("stepMap", ctx_r0.stepMap);
  }
}

class MvuFrameComponent {
  constructor(vehiclesManagerService, windowRef) {
    this.vehiclesManagerService = vehiclesManagerService;
    this.windowRef = windowRef;
    this.steps = [];
    this.stepMap = {};
    this.showStepper = true;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.vehiclesManagerService.clearData();

      _this.steps = [{
        name: _this.cmsMvuFrame.step1,
        background: 'secondary'
      }, {
        name: _this.cmsMvuFrame.step2,
        background: 'secondary'
      }, {
        name: _this.cmsMvuFrame.step3,
        background: 'secondary'
      }, {
        name: _this.cmsMvuFrame.step4,
        background: 'secondary'
      }];
      _this.stepMap = {
        [_states__WEBPACK_IMPORTED_MODULE_3__.States.MvuUpload]: 1,
        [_states__WEBPACK_IMPORTED_MODULE_3__.States.MvuDeliveryMethod]: 2,
        [_states__WEBPACK_IMPORTED_MODULE_3__.States.MvuReviewOrder]: 3,
        [_states__WEBPACK_IMPORTED_MODULE_3__.States.MvuReceipt]: 4
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

MvuFrameComponent.ɵfac = function MvuFrameComponent_Factory(t) {
  return new (t || MvuFrameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_4__.VehiclesManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](common_providers__WEBPACK_IMPORTED_MODULE_1__.WindowRef));
};

MvuFrameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: MvuFrameComponent,
  selectors: [["vehicles-mvu-frame"]],
  inputs: {
    cmsMvuFrame: "cmsMvuFrame",
    stateList: "stateList",
    countryList: "countryList"
  },
  decls: 3,
  vars: 1,
  consts: [[1, "refresh-2020", "u-spacing--widthFill"], [3, "steps", "stepMap", 4, "ngIf"], [3, "steps", "stepMap"]],
  template: function MvuFrameComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "main", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MvuFrameComponent_stepper_1_Template, 1, 2, "stepper", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ui-view");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showStepper);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_5__.StepperComponent, _uirouter_angular__WEBPACK_IMPORTED_MODULE_8__.UIView],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcmFtZS5jb21wb25lbnQubGVzcyJ9 */"]
});

/***/ }),

/***/ 49717:
/*!******************************************************************!*\
  !*** ./src/vehicles/mvu/components/receipt/receipt.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MvuReceiptComponent": () => (/* binding */ MvuReceiptComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var accountDashboard_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! accountDashboard/constants */ 75888);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frame/frame.component */ 58191);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/services/webStorageService/webStorage.service */ 38898);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/ui/display/address/addressDisplay.component */ 23204);
/* harmony import */ var _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../common/ui/display/payment/paymentDisplay.component */ 38321);
/* harmony import */ var _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../common/ui/containers/fxRow/fxRow.component */ 47553);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _common_vehicleCartRow_components_vehicleCartRow_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/vehicleCartRow/components/vehicleCartRow.component */ 70580);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../common/ui/modals/actionButtons/actionButtons.component */ 65380);
/* harmony import */ var _pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../pipes/dateWithTimeZone/dateWithTimeZone.pipe */ 29719);

























function MvuReceiptComponent_section_29_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "Ship EZ TAG(s) to:");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "address-display", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const mailingAddress_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("address", mailingAddress_r4)("international", mailingAddress_r4.international)("showLabels", false)("showEdit", false);
  }
}

function MvuReceiptComponent_section_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "section", 5)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, MvuReceiptComponent_section_29_ng_container_3_Template, 4, 4, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r0.deliveryMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0.isByMail);
  }
}

function MvuReceiptComponent_section_35_address_display_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "address-display", 16);
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("address", ctx_r7.billingInfo.billingType === ctx_r7.BillingType.Credit ? ctx_r7.billingInfo.credit : ctx_r7.billingInfo.eft)("international", ctx_r7.billingInfo.billingType === ctx_r7.BillingType.Credit ? ctx_r7.billingInfo.credit.international : ctx_r7.billingInfo.eft.international)("showLabels", false)("showEdit", false);
  }
}

function MvuReceiptComponent_section_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "payment-display", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "article", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, MvuReceiptComponent_section_35_address_display_3_Template, 1, 4, "address-display", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("billingType", ctx_r1.billingInfo.billingType)("bankDetails", ctx_r1.billingInfo.eft)("creditCard", ctx_r1.billingInfo.credit)("hideTitle", true)("showAccountNumber", true)("showNameOnCard", true)("showLabels", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.billingInfo && ctx_r1.billingInfo.billingType);
  }
}

function MvuReceiptComponent_ng_template_41_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "vehicle-cart-row-component", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ezTag_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("canRemove", false)("canEdit", false)("ezTag", ezTag_r9);
  }
}

function MvuReceiptComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 20)(1, "div")(2, "fx-row", 21)(3, "div", 22)(4, "mat-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](6, MvuReceiptComponent_ng_template_41_div_6_Template, 2, 3, "div", 24);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("isLabel", true)("backgroundColorClass", "transparent-background");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r2.pageCms.tagsRequested, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r2.tags);
  }
}

function MvuReceiptComponent_ng_template_42_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "vehicle-cart-row-component", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ezTag_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("canRemove", false)("canEdit", false)("ezTag", ezTag_r12);
  }
}

function MvuReceiptComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 20)(1, "div")(2, "fx-row", 21)(3, "div", 22)(4, "mat-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](6, MvuReceiptComponent_ng_template_42_div_6_Template, 2, 3, "div", 24);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("isLabel", true)("backgroundColorClass", "transparent-background");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r3.pageCms.InactivationSubtitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r3.inactiveTags);
  }
}

class MvuReceiptComponent {
  constructor(frame, state, vehiclesManagerService, accountService, webStorage, vehicleService) {
    this.frame = frame;
    this.state = state;
    this.vehiclesManagerService = vehiclesManagerService;
    this.accountService = accountService;
    this.webStorage = webStorage;
    this.vehicleService = vehicleService;
    this.billingInfo = {
      credit: {},
      eft: {}
    };
    this.tags = [];
    this.BillingType = common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b, _c, _d;

      _this.mvuDetails = _this.webStorage.getValue('MVU_DETAILS');
      _this.frame.showStepper = true;
      _this.paymentDate = new Date();
      _this.paymentAmount = (yield _this.vehiclesManagerService.getPaymentInfo()).totalAmt;

      _this.getActInfo();

      _this.mailingAddress$ = _this.accountService.getMailingInfo();

      _this.setDeliveryMethod();

      _this.billingInfo = yield _this.vehiclesManagerService.getBillingInfo();
      _this.tags = (_b = (_a = _this.mvuDetails) === null || _a === void 0 ? void 0 : _a.vehicleList) === null || _b === void 0 ? void 0 : _b.filter(vehicle => vehicle.action.toUpperCase() === 'ADD');
      _this.inactiveTags = (_d = (_c = _this.mvuDetails) === null || _c === void 0 ? void 0 : _c.vehicleList) === null || _d === void 0 ? void 0 : _d.filter(vehicle => vehicle.action.toUpperCase() === 'INACTIVATE');
      const vehicleInformation = yield _this.vehicleService.getVehicleInformation();
      _this.vehicleClassDescList = vehicleInformation === null || vehicleInformation === void 0 ? void 0 : vehicleInformation.classes;

      _this.setClassDesc();
    })();
  }

  setClassDesc() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.tags.forEach(vehicle => {
        vehicle.vehicleClassDesc = _this2.getVehicleClassDesc(vehicle.vehicleClassCode);
      });

      _this2.inactiveTags.forEach(vehicle => {
        vehicle.vehicleClassDesc = _this2.getVehicleClassDesc(vehicle.vehicleClassCode);
      });
    })();
  }

  getVehicleClassDesc(code) {
    var _a;

    const filteredVehicleClassInfo = (_a = this.vehicleClassDescList) === null || _a === void 0 ? void 0 : _a.filter(info => {
      var _a;

      return ((_a = info.value) === null || _a === void 0 ? void 0 : _a.toString()) === (code === null || code === void 0 ? void 0 : code.toString());
    });
    return filteredVehicleClassInfo.length > 0 ? filteredVehicleClassInfo[0].label : null;
  }

  setDeliveryMethod() {
    const deliveryMethodData = this.vehiclesManagerService.getDeliveryMethod();
    this.isByMail = deliveryMethodData.deliveryMethod === common_ui__WEBPACK_IMPORTED_MODULE_2__.DeliveryMethodType.Mail;
    this.deliveryMethod = 'Delivery Method:' + (this.isByMail ? 'By Mail' : 'EZ TAG Store Pickup');
  }

  getActInfo() {
    const currentUser = this.vehiclesManagerService.getCurrentUser();
    this.actNumber = currentUser.acctId;
    this.actName = currentUser.firstName + ' ' + currentUser.lastName;
  }

  viewVehiclesClick() {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.vehiclesManagerService.clearData();

      _this3.vehicleService.destroyMvuDetails();

      yield _this3.state.go(vehicles_shared__WEBPACK_IMPORTED_MODULE_4__.States.Root);
    })();
  }

  goToAccountOverview() {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.vehiclesManagerService.clearData();

      _this4.vehicleService.destroyMvuDetails();

      yield _this4.state.go(accountDashboard_constants__WEBPACK_IMPORTED_MODULE_3__.stateNames.Frame);
    })();
  }

}

MvuReceiptComponent.ɵfac = function MvuReceiptComponent_Factory(t) {
  return new (t || MvuReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_5__.MvuFrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_18__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_4__.VehiclesManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_7__.WebStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.VehicleService));
};

MvuReceiptComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
  type: MvuReceiptComponent,
  selectors: [["vehicles-mvu-receipt"]],
  inputs: {
    pageCms: "pageCms"
  },
  decls: 49,
  vars: 26,
  consts: [["fxLayout", "row", "fxLayoutAlign", "space-between end", 1, "title"], ["fxLayout", "row", "fxLayoutAlign", "space-between end", 1, "summary", "paymentAmount"], [3, "value"], [1, "summary"], ["fxLayout", "row", "fxLayoutAlign", "space-between end"], ["fxLayout", "column"], ["translation-skip", ""], ["fxLayout", "column", 4, "ngIf"], [4, "ngIf"], [1, "u-spacing--widthFill"], [3, "ngIf"], ["fxLayout", "row", "fxLayout.lt-md", "column"], ["reverseOrder", "true", 3, "main"], ["action-main", ""], [3, "click"], [1, "itemFont"], [3, "address", "international", "showLabels", "showEdit"], [3, "billingType", "bankDetails", "creditCard", "hideTitle", "showAccountNumber", "showNameOnCard", "showLabels"], [1, "u-spacing__addressToPaymentDisplay--marginTop"], [3, "address", "international", "showLabels", "showEdit", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start start"], [3, "isLabel", "backgroundColorClass"], ["col-start", "", 1, "fx-flex-auto", "fx-layout-row", "fx-layout-align-start-center"], [1, "fx-flex-auto-shrink-more", "limited-flex"], ["fxLayout", "row", "fxLayoutAlign", "start start", "class", "u-spacing--widthFill", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start start", 1, "u-spacing--widthFill"], [3, "canRemove", "canEdit", "ezTag"]],
  template: function MvuReceiptComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "page-centered-container")(1, "card-container")(2, "header", 0)(3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](5, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "article");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "section")(11, "div", 1)(12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](14, "currency", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](17, "dateWithTimeZone");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "header", 4)(21, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](23, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "section", 5)(25, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](29, MvuReceiptComponent_section_29_Template, 4, 2, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](30, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "header", 4)(32, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](34, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](35, MvuReceiptComponent_section_35_Template, 4, 8, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](36, "header", 4)(37, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](39, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](40, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](41, MvuReceiptComponent_ng_template_41_Template, 7, 4, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](42, MvuReceiptComponent_ng_template_42_Template, 7, 4, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](43, "section", 11)(44, "action-buttons", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("main", function MvuReceiptComponent_Template_action_buttons_main_44_listener() {
        return ctx.goToAccountOverview();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](45, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](47, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function MvuReceiptComponent_Template_a_click_47_listener() {
        return ctx.viewVehiclesClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.pageCms.Title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.pageCms.LongDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.pageCms.ShortDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", ctx.pageCms.paymentAmount, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", ctx.paymentAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"](" ", ctx.pageCms.paymentReceivedOn, " ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](17, 21, ctx.paymentDate, "dateTime4"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.pageCms.replenishAmt, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.pageCms.accountInfo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"](" ", ctx.pageCms.accountName, ": ", ctx.actName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"]("", ctx.pageCms.accountNumber, ": ", ctx.actNumber, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](30, 24, ctx.mailingAddress$));
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.pageCms.billingInfo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.billingInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.pageCms.tagsOrdered, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (ctx.tags == null ? null : ctx.tags.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (ctx.inactiveTags == null ? null : ctx.inactiveTags.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.pageCms.accountDashboard);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.pageCms.manageMyVehicles);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_8__.PageCenteredContainerComponent, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_9__.CardContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutAlignDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDivider, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_10__.CurrencyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_11__.AddressDisplayComponent, _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_12__.PaymentDisplayComponent, _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_13__.FxRowComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _common_vehicleCartRow_components_vehicleCartRow_component__WEBPACK_IMPORTED_MODULE_14__.VehicleCartRowComponent, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_15__.ActionButtonsComponent],
  pipes: [_pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_16__.DateWithTimeZonePipe, _angular_common__WEBPACK_IMPORTED_MODULE_21__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n@media screen and (max-width: 959.98px) {\n  h2[_ngcontent-%COMP%] {\n    margin-top: 16px;\n  }\n}\naction-buttons[_ngcontent-%COMP%]    + a[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n@media screen and (max-width: 959.98px) {\n  action-buttons[_ngcontent-%COMP%]    + a[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\np[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\nmat-divider[_ngcontent-%COMP%] {\n  width: 64px;\n  margin-top: 16px;\n  margin-bottom: 20px;\n}\n.title[_ngcontent-%COMP%] {\n  padding-top: 21px;\n}\n.summary[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 16px;\n  padding-bottom: 11px;\n  font-size: 16px;\n  line-height: 26px;\n  margin: 0px -16px;\n}\n.paymentAmount[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #e0e0ef;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb21tb25cXHVpXFxjb250YWluZXJzXFxmeFJvd1xcZGV0YWlscy5sZXNzIiwicmVjZWlwdC5jb21wb25lbnQubGVzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGN1c3RvbVxcc3BhY2luZ1xcc2VjdGlvbnMubGVzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGN1c3RvbVxcc3BhY2luZ1xcZGl2aWRlcnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7QUNESjtBREFBO0VBSVEsYUFBQTtFQUNBLGtCQUFBO0FDRFI7QURKQTtFQThFSSxjQUFBO0VBQ0Esc0JBQUE7QUN2RUo7QURSQTtFQW9GSSxjQUFBO0VBQ0Esc0JBQUE7QUN6RUo7QURaQTtFQXlGSSxjQUFBO0VBQ0Esc0JBQUE7QUMxRUo7QURoQkE7RUE4RkksY0FBQTtFQUNBLHNCQUFBO0FDM0VKO0FEcEJBO0VBbUdJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDNUVKO0FEekJBO0VBeUdJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDN0VKO0FEOUJBO0VBK0dJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQzlFSjtBRG5DQTtFQXFISSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUMvRUo7QUR4Q0E7RUEwQ1EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDUjtBRDdDQTtFQWdEUSxXQUFBO0FDQVI7QURoREE7RUFvRFEsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RSO0FEdERBO0VBMkRRLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FENURBO0VBa0VRLGVBQUE7QUNIUjtBREtRO0VBQ0ksZUFBQTtBQ0haO0FBN0RJO0VBQUE7SUFDSSxnQkFBQTtFQWdFTjtBQUNGO0FBN0RBO0VBQ0ksa0JBQUE7QUErREo7QUE3REk7RUFBQTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtFQWdFTjtBQUNGO0FBN0RBOztFQ05RLG1CQUFBO0FEdUVSO0FBNURBO0VBQ0ksV0FBQTtFRXpCSSxnQkFBQTtFQUNBLG1CQUFBO0FGd0ZSO0FBNURBO0VBQ0ksaUJBQUE7QUE4REo7QUEzREE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUE2REo7QUExREE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUE0REoiLCJmaWxlIjoicmVjZWlwdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuXG5cbiAgICAuZngtZmxleC1hdXRvIHtcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1mbGV4LW5vbmUge1xuICAgICAgICAuZngtZmxleC1ub25lLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZSB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUtbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtZmxleC1hdXRvLWdyb3ctbW9yZSB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1yb3cge1xuICAgICAgICAuZngtbGF5b3V0LXJvdy1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtY29sdW1uIHtcbiAgICAgICAgLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlciB7XG4gICAgICAgIC5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyIHtcbiAgICAgICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmxpbWl0ZWQtZmxleCB7XG4gICAgICAgIG1pbi13aWR0aDogMTcwcHg7XG4gICAgICAgIG1heC13aWR0aDogNTMwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC51bmxpbWl0ZWQtZmxleCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5saW1pdGVkLWZsZXgtZW5kIHtcbiAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxuXG4gICAgLmxhcmdlci1saW1pdGVkLWZsZXgtZW5kIHtcbiAgICAgICAgbWluLXdpZHRoOiAxNDNweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxNDVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG5cbiAgICAudGFibGUtc3BhY2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICAgICAgJi5sdC1tZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBNaXhpbnMgdG8gYXBwZWFzZSBwZXJmb3JtYW5jZVxuLmZ4LWZsZXgtYXV0by1taXhpbigpIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1ub25lLW1peGluKCkge1xuICAgIC8vIGxlc3NoaW50LWRpc2FibGUtbmV4dC1saW5lIHplcm9Vbml0XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZS1taXhpbigpIHtcbiAgICBmbGV4OiAxIDIgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1hdXRvLWdyb3ctbW9yZS1taXhpbigpIHtcbiAgICBmbGV4OiAyIDEgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtbGF5b3V0LXJvdy1taXhpbigpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL3NlY3Rpb25zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL2RpdmlkZXJzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgJ2NvbW1vbi91aS9jb250YWluZXJzL2Z4Um93L2RldGFpbHMubGVzcyc7XG5cbmgyIHtcbiAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cbn1cblxuYWN0aW9uLWJ1dHRvbnMrYSB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuXG4gICAgQG1lZGlhIEBicmVha3BvaW50LWx0LW1kIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbnAsXG5zZWN0aW9uIHtcbiAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luQm90dG9tKCk7XG59XG5cbm1hdC1kaXZpZGVyIHtcbiAgICB3aWR0aDogNjRweDtcbiAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fZGl2aWRlci0tbWFyZ2luVG9wQm90dG9tKCk7XG59XG5cbi50aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDIxcHg7XG59XG5cbi5zdW1tYXJ5IHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTFweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgbWFyZ2luOiAwcHggLTE2cHg7XG59XG5cbi5wYXltZW50QW1vdW50IHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBzbnVmZi1ncmF5O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIiwiLnJlZnJlc2gtMjAyMCB7XG4gICAgLy8gRGVza3RvcFxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2hlYWRlclRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpbkJvdHRvbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wSGFsZiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fYnV0dG9uVG9GaWVsZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maXJzdEhlYWRlclRvVGl0bGUtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fY2FyZFRvQ2FyZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19hZGRyZXNzVG9QYXltZW50RGlzcGxheS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG4gICAgLy8gTW9iaWxlXG4gICAgJi5sdC1tZCxcbiAgICAubHQtbWQge1xuICAgICAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5yZWZyZXNoLTIwMjAge1xuICAgIC51LXNwYWNpbmdfX2RpdmlkZXItLW1hcmdpblRvcEJvdHRvbSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 71688:
/*!**************************************************************************!*\
  !*** ./src/vehicles/mvu/components/reviewOrder/reviewOrder.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MvuReviewOrderComponent": () => (/* binding */ MvuReviewOrderComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var vehicles_vehicleCartBase_vehicleCartBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vehicles/vehicleCartBase/vehicleCartBase */ 91402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frame/frame.component */ 58191);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var cms_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cms/services */ 46693);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_review_order_components_review_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/review-order/components/review.-order.component */ 86822);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 38661);

















function MvuReviewOrderComponent_review_order_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "review-order", 7);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("data", ctx_r0.reviewData)("ezTagMailingAddress", ctx_r0.mailingInfo)("isAddEzTag", true);
  }
}

class MvuReviewOrderComponent extends vehicles_vehicleCartBase_vehicleCartBase__WEBPACK_IMPORTED_MODULE_2__.VehicleCartBase {
  constructor(parent, state, vehiclesManagerService, cmsReplacementService, dialogService, toasterService, webStorage, vehicleService, checkoutWebApiService, mailingService, currentUser) {
    super(toasterService);
    this.parent = parent;
    this.state = state;
    this.vehiclesManagerService = vehiclesManagerService;
    this.cmsReplacementService = cmsReplacementService;
    this.dialogService = dialogService;
    this.toasterService = toasterService;
    this.webStorage = webStorage;
    this.vehicleService = vehicleService;
    this.checkoutWebApiService = checkoutWebApiService;
    this.mailingService = mailingService;
    this.currentUser = currentUser;
    this.deliveryMethod = {};
    this.paymentDueInfo = {};
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b, _c, _d;

      _this.mvuDetails = _this.webStorage.getValue('MVU_DETAILS');
      _this.parent.showStepper = true;
      _this.paymentDueInfo = yield _this.vehiclesManagerService.getPaymentInfo();
      _this.cartTags = (_b = (_a = _this.mvuDetails) === null || _a === void 0 ? void 0 : _a.vehicleList) === null || _b === void 0 ? void 0 : _b.filter(vehicle => vehicle.action.toUpperCase() === 'ADD');
      _this.inactiveTags = (_d = (_c = _this.mvuDetails) === null || _c === void 0 ? void 0 : _c.vehicleList) === null || _d === void 0 ? void 0 : _d.filter(vehicle => vehicle.action.toUpperCase() === 'INACTIVATE');
      const vehicleInformation = yield _this.vehicleService.getVehicleInformation();
      _this.vehicleClassDescList = vehicleInformation === null || vehicleInformation === void 0 ? void 0 : vehicleInformation.classes;

      _this.setClassDesc();

      _this.deliveryMethod = _this.vehiclesManagerService.getDeliveryMethod();
      _this.currentBalance = _this.vehiclesManagerService.getCurrentBalance();
      _this.mailingInfo = yield _this.mailingService.getMailingAddress();
      const insertValues = {
        currentBalAmt: _this.currentBalance,
        minReqAmt: _this.paymentDueInfo.depositAmt,
        totalAmt: _this.paymentDueInfo.totalAmt
      };
      _this.pageCms.RebillToolTip = _this.cmsReplacementService.transformTemplate(_this.pageCms.RebillToolTip, insertValues);

      _this.setupReviewOrderData();
    })();
  }

  setupReviewOrderData() {
    const order = this.mapOrderSummary();
    const delivery = this.mapDeliveryMethod();
    const payment = this.mapPaymentSummary();
    this.reviewData = {
      orderSummary: order,
      deliveryMethod: delivery,
      paymentSummary: payment
    };
  }

  mapOrderSummary() {
    return {
      display: true,
      summary: {
        title: this.pageCms.Title,
        description: this.pageCms.LongDescription
      },
      details: [{
        title: this.pageCms.ezTagSubtitle,
        tags: this.cartTags,
        isPlate: false
      }, {
        title: this.pageCms.InactivationSubtitle,
        tags: this.inactiveTags,
        isPlate: false
      }],
      operations: {
        isEditable: false,
        isRemoveable: false,
        removeAllOrders: false
      },
      stateList: this.stateList
    };
  }

  mapDeliveryMethod() {
    return {
      display: true,
      header: this.pageCms.DeliveryMethodTitle,
      context: this.pageCms.deliveryMethodDesc,
      type: this.deliveryMethod.deliveryMethod,
      operations: [{
        label: 'Edit',
        display: false
      }]
    };
  }

  mapPaymentSummary() {
    return {
      header: this.pageCms.PaymentSummaryTitle,
      paymentContext: this.pageCms.PaymentContext,
      replenishmentAmt: {
        link: {
          linkDesc: 'Learn more about Replenishment amounts',
          onClickContent: this.replenishmentAmtModalCms
        },
        isOptIn: this.currentUser.getCurrentUser().rebillOptIn
      },
      tagInfo: {
        display: true,
        contextDesc: this.pageCms.TagInfo,
        link: {
          linkDesc: this.pageCms.TagInfoModalLink,
          onClickContent: this.tagInfoModalCms
        }
      },
      paymentDueInfo: {
        tagSalesAmt: this.paymentDueInfo.tagSalesAmt,
        totalAmt: this.paymentDueInfo.totalAmt,
        rebillTooltip: this.pageCms.RebillToolTip
      }
    };
  }

  setClassDesc() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.cartTags.forEach(vehicle => {
        vehicle.vehicleClassDesc = _this2.getVehicleClassDesc(vehicle.vehicleClassCode);
      });

      _this2.inactiveTags.forEach(vehicle => {
        vehicle.vehicleClassDesc = _this2.getVehicleClassDesc(vehicle.vehicleClassCode);
      });
    })();
  }

  getVehicleClassDesc(code) {
    var _a;

    const filteredVehicleClassInfo = (_a = this.vehicleClassDescList) === null || _a === void 0 ? void 0 : _a.filter(info => {
      var _a;

      return ((_a = info.value) === null || _a === void 0 ? void 0 : _a.toString()) === (code === null || code === void 0 ? void 0 : code.toString());
    });
    return filteredVehicleClassInfo.length > 0 ? filteredVehicleClassInfo[0].label : null;
  }

  submit(nextState) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b, _c, _d;

      const updated = yield _this3.mailingService.setMailingAddressOnAcctLevel();

      if (updated) {
        const res = yield _this3.checkoutWebApiService.mvuCheckout({
          vehicleList: (_a = _this3.mvuDetails) === null || _a === void 0 ? void 0 : _a.vehicleList,
          vehicleAddList: (_c = (_b = _this3.mvuDetails) === null || _b === void 0 ? void 0 : _b.vehicleList) === null || _c === void 0 ? void 0 : _c.filter(vehicle => vehicle.action.toUpperCase() === 'ADD'),
          fileName: (_d = _this3.mvuDetails) === null || _d === void 0 ? void 0 : _d.fileName
        });

        if (res) {
          yield _this3.state.go(nextState);
        }
      }
    })();
  }

  cancel(state) {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        cmsContent: {
          Title: _this4.cancellationModal.Title,
          PrimaryContent: _this4.cancellationModal.LongDescription,
          AcceptBtn: 'No',
          CancelBtn: 'Yes'
        }
      };
      const res = yield _this4.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_1__.GenericCmsModalComponent, data);

      if (!res) {
        _this4.vehiclesManagerService.clearData();

        _this4.vehicleService.destroyMvuDetails();

        yield _this4.state.go(state);
      }
    })();
  }

}

MvuReviewOrderComponent.ɵfac = function MvuReviewOrderComponent_Factory(t) {
  return new (t || MvuReviewOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.MvuFrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_12__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_4__.VehiclesManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_5__.CmsReplacementService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.WebStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.VehicleService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_4__.WebApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_4__.MailingAddressService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.CurrentUserService));
};

MvuReviewOrderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: MvuReviewOrderComponent,
  selectors: [["vehicles-mvu-review"]],
  inputs: {
    pageCms: "pageCms",
    replenishmentAmtModalCms: "replenishmentAmtModalCms",
    tagInfoModalCms: "tagInfoModalCms",
    cancellationModal: "cancellationModal",
    stateList: "stateList"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
  decls: 10,
  vars: 1,
  consts: [[1, "refresh-2020"], [3, "data", "ezTagMailingAddress", "isAddEzTag", 4, "ngIf"], [3, "next", "cancel"], ["wizard-next", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["wizard-cancel", ""], [3, "data", "ezTagMailingAddress", "isAddEzTag"]],
  template: function MvuReviewOrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "page-centered-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, MvuReviewOrderComponent_review_order_1_Template, 1, 3, "review-order", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "wizard-ui", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("next", function MvuReviewOrderComponent_Template_wizard_ui_next_2_listener($event) {
        return ctx.submit($event);
      })("cancel", function MvuReviewOrderComponent_Template_wizard_ui_cancel_2_listener($event) {
        return ctx.cancel($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "PLACE ORDER");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.reviewData);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_7__.PageCenteredContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _common_review_order_components_review_order_component__WEBPACK_IMPORTED_MODULE_8__.ReviewOrderComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_9__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_10__.WizardNextDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutAlignDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon],
  styles: ["tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%] {\n  width: 277px;\n  padding: 16px;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  line-height: 15px;\n  font-weight: 600;\n}\n@media screen and (max-width: 959.98px) {\n  tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%] {\n    left: calc(50vw - (277px / 2));\n    top: -92px;\n  }\n}\ncard-container[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}\nwizard-ui[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}\nwizard-ui[_ngcontent-%COMP%]   [wizard-next][_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\nwizard-ui[_ngcontent-%COMP%]   [wizard-cancel][_ngcontent-%COMP%], wizard-ui[_ngcontent-%COMP%]   [wizard-previous][_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\nmat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlld09yZGVyLmNvbXBvbmVudC5sZXNzIiwiLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xcZm9udHMubGVzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGN1c3RvbVxcc3BhY2luZ1xcc2VjdGlvbnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VDQUEseUJBQUE7RURFQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxKO0FBT0k7RUFBQTtJQUNJLDhCQUFBO0lBQ0EsVUFBQTtFQUpOO0FBQ0Y7QUFPQTtFQUNJLGNBQUE7RUVWSSxnQkFBQTtBRk1SO0FBUUE7RUFDSSxjQUFBO0VFUEksZ0JBQUE7QUZFUjtBQUlBO0VBS1EseUJBQUE7QUFOUjtBQUNBOztFQVVRLDBCQUFBO0FBUFI7QUFXQTtFQUNJLFdBQUE7QUFUSiIsImZpbGUiOiJyZXZpZXdPcmRlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL3NlY3Rpb25zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL2RpdmlkZXJzLmxlc3MnO1xuXG5cbnRvb2wtdGlwIFt0b29sLXRpcC1tZXNzYWdlXSB7XG4gICAgd2lkdGg6IDI3N3B4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgLnQtYm9keS0tZm9udEZhbWlseSgpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgQG1lZGlhIEBicmVha3BvaW50LWx0LW1kIHtcbiAgICAgICAgbGVmdDogY2FsYyg1MHZ3IC0gKDI3N3B4IC8gMikpO1xuICAgICAgICB0b3A6IC05MnB4O1xuICAgIH1cbn1cblxuY2FyZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC5yZWZyZXNoLTIwMjAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Ub3AoKTtcbn1cblxud2l6YXJkLXVpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3AoKTtcblxuICAgIFt3aXphcmQtbmV4dF0ge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cblxuICAgIFt3aXphcmQtY2FuY2VsXSxcbiAgICBbd2l6YXJkLXByZXZpb3VzXSB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbn1cblxubWF0LWRpdmlkZXIge1xuICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG4udC1oZWFkZXItLWZvbnRGYW1pbHkoKSB7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LWpvc3Q7XG59XG5cbi50LWJvZHktLWZvbnRGYW1pbHkoKSB7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LW1vbnRzZXJyYXQ7XG59XG4iLCIucmVmcmVzaC0yMDIwIHtcbiAgICAvLyBEZXNrdG9wXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19faGVhZGVyVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luQm90dG9tIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3BIYWxmIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19idXR0b25Ub0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpcnN0SGVhZGVyVG9UaXRsZS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2FkZHJlc3NUb1BheW1lbnREaXNwbGF5LS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cbiAgICAvLyBNb2JpbGVcbiAgICAmLmx0LW1kLFxuICAgIC5sdC1tZCB7XG4gICAgICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 85449:
/*!****************************************************************!*\
  !*** ./src/vehicles/mvu/components/upload/upload.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MvuUploadComponent": () => (/* binding */ MvuUploadComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 51529);
/* harmony import */ var common_upgrades__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/upgrades */ 41034);
/* harmony import */ var common_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/utilities */ 56516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 48340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 15681);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 51106);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 45802);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 32510);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ 83444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var cms_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cms/services */ 46693);
/* harmony import */ var common_services_upload_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/services/upload/upload.service */ 6737);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../validation/focus.directive */ 39453);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/ui/wizard/wizardNext.directive */ 27358);




 // import { CmsIds as cmsConst } from '../../constants';



















function MvuUploadComponent_ng_container_51_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r4.fileUploadProgress, "% ");
  }
}

const _c0 = function (a0) {
  return {
    "width": a0
  };
};

function MvuUploadComponent_ng_container_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 34)(2, "div", 35)(3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MvuUploadComponent_ng_container_51_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r5.saveInformation(ctx_r5.isFileValid);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "UPLOAD");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 36)(6, "div", 37)(7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, MvuUploadComponent_ng_container_51_span_8_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](2, _c0, ctx_r2.fileUploadProgress + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.fileUploadProgress > 0);
  }
}

const _c1 = function () {
  return {
    standalone: true
  };
};

class MvuUploadComponent {
  constructor(cmsUtilService, uploadService, toasterService, responseErrorService, stateService, vehicleService, serverConstants, uiRouterGlobals) {
    this.cmsUtilService = cmsUtilService;
    this.uploadService = uploadService;
    this.toasterService = toasterService;
    this.responseErrorService = responseErrorService;
    this.stateService = stateService;
    this.vehicleService = vehicleService;
    this.serverConstants = serverConstants;
    this.uiRouterGlobals = uiRouterGlobals; // readonly cmsIds = cmsConst;

    this.uploadSuccess = false;
  }

  ngOnInit() {
    this.mvuInstructions = this.cmsUtilService.generateFileSrc(_constants__WEBPACK_IMPORTED_MODULE_3__.CmsIds.MvuInstructions);
    this.mvuTemplate = this.cmsUtilService.generateFileSrc(_constants__WEBPACK_IMPORTED_MODULE_3__.CmsIds.MvuTemplate);
  }

  onFileSelected(event) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.file = event.target.files.length > 0 ? event.target.files[0] : null;
      yield _this.checkFileValid(_this.file);
    })();
  }

  readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onerror = event => {
        reject(event.target.error);
      };

      reader.onloadend = event => {
        resolve(event.target.result);
      };

      reader.readAsText(file);
    });
  }

  checkFileValid(file) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!(0,common_utilities__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(file) && file !== null) {
        if (file.type === 'text/csv' || file.type === 'application/vnd.ms-excel') {
          _this2.fileName = _this2.file.name;

          try {
            const result = yield _this2.readFile(file.slice(0, 1)); // Char code 65533 means that the file is improperly formatted

            if (result.charCodeAt(0) === 65533) {
              _this2.setFileValidityModel(false, 'Selected file must be formatted or Saved As a .CSV');
            } else {
              _this2.setFileValidityModel(true);
            }
          } catch (err) {
            _this2.setFileValidityModel(false);
          }
        } else {
          _this2.setFileValidityModel(false, 'Selected file must be a .CSV');
        }
      } else {
        _this2.setFileValidityModel(false);
      }
    })();
  }

  setFileValidityModel(fileIsValid, invalidMessage) {
    this.isFileValid = fileIsValid;
    this.fileInvalidMessage = invalidMessage !== null && invalidMessage !== void 0 ? invalidMessage : '';
  }

  saveInformation(formIsValid) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.isFileValid && formIsValid) {
        yield _this3.uploadFile(_this3.file);
      }
    })();
  }

  uploadFile(file) {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!(0,common_utilities__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(file) && file !== null) {
        const res$ = _this4.uploadService.upload('/api/sessions/MultiVehicleUpload/UploadCSVFile', file).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.map)(event => {
          switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpEventType.UploadProgress:
              _this4.fileUploadProgress = Math.round(event.loaded * 100 / event.total);
              break;

            case _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpEventType.Response:
              return event;
          }
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.catchError)(error => {
          _this4.fileUploadProgress = 0;
          _this4.uploadSuccess = false;
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.scheduled)([{
            body: error.error
          }], rxjs__WEBPACK_IMPORTED_MODULE_17__.asyncScheduler);
        }));

        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.lastValueFrom)(res$);

        if ((0,common_utilities__WEBPACK_IMPORTED_MODULE_2__.isObject)(res) && (0,common_utilities__WEBPACK_IMPORTED_MODULE_2__.isObject)(res.body)) {
          const baseResponse = res.body;

          if (baseResponse.errors instanceof Array && baseResponse.errors.length === 0) {
            const hasAlerts = (0,common_utilities__WEBPACK_IMPORTED_MODULE_2__.isObject)(baseResponse) && baseResponse.alerts instanceof Array && baseResponse.alerts.length > 0;

            if (hasAlerts) {
              const sortedAlerts = baseResponse.alerts.sort((alert1, alert2) => alert1.importance - alert2.importance);
              const alertArr = sortedAlerts.map(alert => alert.alertMsg);
              alertArr.forEach(alert => _this4.toasterService.show('Success', alert));

              _this4.vehicleService.setMvuDetails(baseResponse);

              _this4.uploadSuccess = true;
            }
          } else {
            // If errors include maintenance errors, redirects to home
            _this4.responseErrorService.handleMaintenanceErrors(baseResponse); // Hard coded error leading to PDF of .csv errors


            if (typeof baseResponse.fileName === 'string' && baseResponse.fileName !== '') {
              const pdfLink = `/api/sessions/Pdf/GetMvuErrorPdfReport/?reportId=${baseResponse.fileName}&angularState=${_this4.uiRouterGlobals.current.name}&clientVersion=${_this4.serverConstants.currentlyDownloadedWebUiVersion}`;
              const errorMsg = `${baseResponse.hardErrorCount} errors. Click <a target="_blank" href="${pdfLink}">here</a> to download the errors in PDF`;

              _this4.toasterService.show('Error', errorMsg);
            }

            _this4.responseErrorService.displayErrorsFromResponse(baseResponse);
          }
        }
      }
    })();
  }

  nextStep(state) {
    var _this5 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.isFileValid && _this5.uploadSuccess) {
        yield _this5.stateService.go(state);
      }
    })();
  }

  cancel(state) {
    var _this6 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.uploadSuccess) {
        _this6.vehicleService.destroyMvuDetails();
      }

      yield _this6.stateService.go(state);
    })();
  }

}

MvuUploadComponent.ɵfac = function MvuUploadComponent_Factory(t) {
  return new (t || MvuUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_4__.CmsUtilService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](common_services_upload_upload_service__WEBPACK_IMPORTED_MODULE_5__.UploadService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_19__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.VehicleService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](common_upgrades__WEBPACK_IMPORTED_MODULE_1__.SERVER_CONSTANTS), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_19__.UIRouterGlobals));
};

MvuUploadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: MvuUploadComponent,
  selectors: [["vehicles-mvu-upload"]],
  inputs: {
    pageCms: "pageCms",
    downInstructCms: "downInstructCms",
    downTemplCms: "downTemplCms",
    uploadVehicleCsvFileCms: "uploadVehicleCsvFileCms"
  },
  decls: 59,
  vars: 18,
  consts: [[1, "refresh-2020"], ["validation-focus", "", "novalidate", "", 1, "form-inline"], ["uploadForm", "ngForm"], [1, "u-spacing__fieldToSection--marginTop"], [1, "u-spacing__divider--marginTopBottom"], ["fxLayout", "row wrap"], ["fxFlex", "grow", "fxLayout", "row"], ["aria-label", "PDF Download Instructions", "fxFlex", "grow", "target", "_blank", 3, "href"], ["src", "/Content/icons/pdf.gif", "alt", "Download multiple vehicle upload instructions pdf icon", 1, "document-pdf-icon"], ["fxFlex", "grow", "fxLayout", "row", 2, "padding-left", "1.3rem"], ["target", "_blank", "href", "https://get.adobe.com/reader/"], ["fxLayout", "row wrap", 1, "u-spacing__sectionToSection--marginTop"], ["fxFlex", "grow"], ["aria-label", "Template Download Instructions", "target", "_blank", 3, "href"], ["src", "/Content/icons/excel.gif", "alt", "Download multiple vehicle upload template excel icon", 1, "document-pdf-icon"], [1, "r-brackets"], [1, "note-text", 2, "padding-left", "1.3em", "font-size", "14px"], [1, "u-spacing__headerToSection--marginTop"], ["fxFlex", "grow", "fxLayout", "row", 1, "u-spacing__sectionToSection--marginBottom"], [1, "note-text", 2, "padding-top", "0.5rem", "font-size", "14px"], ["fxLayout", "row"], ["fxFlex.gt-sm", "25", "fxFlex.lt-md", "50", 2, "padding", "0px"], [1, "btn", "btn-file", "upload-btn", 3, "click"], ["type", "file", "accept", ".csv", "required", "", 2, "display", "none", 3, "change"], ["fileUpload", ""], ["fxFlex.gt-sm", "75", "fxFlex.lt-md", "50", 2, "padding", "0px"], ["type", "text", "placeholder", "No file selected", "readonly", "", 1, "form-control", "upload-element", 3, "ngModel", "ngModelOptions"], [2, "color", "red"], [4, "ngIf"], [1, "u-spacing__buttonToField--marginTop"], [3, "disabled", "next", "cancel"], ["Wizard", ""], ["wizard-next", ""], ["wizard-cancel", ""], ["fxLayout", "row", 1, "u-spacing__fieldToSection--marginTop"], ["fxFlex.gt-sm", "25", "fxFlex.lt-md", "33", 2, "padding", "0px"], ["fxFlex.gt-sm", "83", "fxFlex.lt-md", "67", 2, "height", "48px", "padding", "0px"], [1, "progress", "progress-bar-custom-corners", "upload-element"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-success", 3, "ngStyle"], ["class", "progress-text", 4, "ngIf"], [1, "progress-text"]],
  template: function MvuUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "form", 1, 2)(3, "div", 3)(4, "card-container")(5, "header")(6, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "mat-divider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "section", 5)(10, "div", 6)(11, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "section", 11)(19, "div", 6)(20, "div", 12)(21, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "div", 6)(27, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "header", 17)(30, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](32, "mat-divider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "section", 5)(34, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "div", 18)(37, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](40, "SELECT A FILE TO UPLOAD");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "div", 20)(42, "div", 21)(43, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MvuUploadComponent_Template_button_click_43_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);

        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](46);

        return _r1.click();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44, "SELECT FILE");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "input", 23, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function MvuUploadComponent_Template_input_change_45_listener($event) {
        return ctx.onFileSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](48, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](51, MvuUploadComponent_ng_container_51_Template, 9, 4, "ng-container", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "section", 29)(53, "wizard-ui", 30, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("next", function MvuUploadComponent_Template_wizard_ui_next_53_listener($event) {
        return ctx.nextStep($event);
      })("cancel", function MvuUploadComponent_Template_wizard_ui_cancel_53_listener($event) {
        return ctx.cancel($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](56, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "span", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.pageCms.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("href", ctx.mvuInstructions, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.downInstructCms.LongDescription, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.downInstructCms.SearchTitle, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" \u00A0", ctx.downInstructCms.SearchDescription, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("href", ctx.mvuTemplate, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.downTemplCms.Title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" (", ctx.downTemplCms.SearchTitle, ") ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.downTemplCms.SearchDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.uploadVehicleCsvFileCms.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.uploadVehicleCsvFileCms.LongDescription, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.uploadVehicleCsvFileCms.SearchTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.fileName)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](17, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.fileInvalidMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isFileValid);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", _r0.submitted && _r0.invalid);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_7__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_8__.FocusDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_9__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__.DefaultStyleDirective, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_11__.WizardNextDirective],
  styles: ["mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n.progress-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  display: inline-block;\n  font-size: 16px;\n  padding: 15px 0px;\n}\n.r-brackets[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding-left: 1.3em;\n}\n.upload-btn[_ngcontent-%COMP%] {\n  height: 48px !important;\n  border-bottom-right-radius: 0px !important;\n  border-top-right-radius: 0px !important;\n  width: 100%;\n}\n.upload-element[_ngcontent-%COMP%] {\n  border: 1px solid #c4c4c4;\n  border-bottom-right-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: 0px;\n  height: 48px;\n  width: 100%;\n}\nbutton[_ngcontent-%COMP%]:not(.mat-icon-button) {\n  padding-left: 2.25rem;\n  padding-right: 2.25rem;\n}\n.progress[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 20px;\n  background-color: #f5f5f5;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.progress-bar[_ngcontent-%COMP%] {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 12px;\n  color: #ffffff;\n  text-align: center;\n  background-color: #428bca;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  transition: width 0.6s ease;\n}\n.progress-bar-success[_ngcontent-%COMP%] {\n  background-color: #5cb85c;\n}\n.progress-striped[_ngcontent-%COMP%]   .progress-bar-success[_ngcontent-%COMP%] {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-custom-corners[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: 0px;\n  height: 48px;\n}\n@media only screen and (max-width: 600px) {\n  button[_ngcontent-%COMP%]:not(.mat-icon-button) {\n    padding-left: 1.25rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFdBQUE7QUFGSjtBQUtBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSEo7QUFNQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU9BO0VBQ0ksdUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsV0FBQTtBQUxKO0FBUUE7RUFDSSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFOSjtBQVdJO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtBQVRSO0FBNENBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFiQSw4Q0FBQTtBQTNCSjtBQTZDQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQXpCQSw4Q0FBQTtFQU1BLDJCQUFBO0FBcEJKO0FBc0RBO0VBUEkseUJBQUE7QUE1Q0o7QUE4Q0k7RUEzQ0kscU1BQUE7QUFHUjtBQWlEQTtFQUNJLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FBL0NKO0FBa0RBO0VBRVE7SUFDSSxxQkFBQTtFQWpEVjtBQUNGIiwiZmlsZSI6InVwbG9hZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG5tYXQtZGl2aWRlciB7XG4gICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xufVxuXG4ucHJvZ3Jlc3MtdGV4dCB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbn1cblxuLnItYnJhY2tldHMge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjNlbTtcbn1cblxuLnVwbG9hZC1idG4ge1xuICAgIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi51cGxvYWQtZWxlbWVudCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgQHNpbHZlci1ncmF5O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbmJ1dHRvbiB7XG4gICAgJjpub3QoLm1hdC1pY29uLWJ1dHRvbikge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIuMjVyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIuMjVyZW07XG4gICAgfVxufVxuXG5AZm9udC1zaXplLWJhc2U6IDE0cHg7XG5AbGluZS1oZWlnaHQtYmFzZTogMS40Mjg1NzE0Mjk7XG5AcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtYmc6ICM1Y2I4NWM7XG5cbi8vIEdSQURJRU5UU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuI2dyYWRpZW50IHtcbiAgICAvLyBsZXNzaGludC1kaXNhYmxlIGR1cGxpY2F0ZVByb3BlcnR5XG4gICAgLnN0cmlwZWQoQGNvbG9yOiAjNTU1OyBAYW5nbGU6IDQ1ZGVnKSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAwIDEwMCUsIDEwMCUgMCwgY29sb3Itc3RvcCgwLjI1LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpKSwgY29sb3Itc3RvcCgwLjI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpKSwgY29sb3Itc3RvcCgwLjc1LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpKSwgY29sb3Itc3RvcCgwLjc1LCB0cmFuc3BhcmVudCksIHRvKHRyYW5zcGFyZW50KSk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KEBhbmdsZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChAYW5nbGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KEBhbmdsZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICAgIH1cbiAgICAvLyBsZXNzaGludC1lbmFibGUgZHVwbGljYXRlUHJvcGVydHlcbn1cblxuLy8gRHJvcCBzaGFkb3dzXG4uYm94LXNoYWRvdyhAc2hhZG93KSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBAc2hhZG93OyAvLyBpT1MgPDQuMyAmIEFuZHJvaWQgPDQuMVxuICAgIGJveC1zaGFkb3c6IEBzaGFkb3c7XG59XG5cbi8vIFRyYW5zaXRpb25zXG4udHJhbnNpdGlvbihAdHJhbnNpdGlvbikge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogQHRyYW5zaXRpb247XG4gICAgdHJhbnNpdGlvbjogQHRyYW5zaXRpb247XG59XG5cbi8vIE91dGVyIGNvbnRhaW5lclxuLnByb2dyZXNzIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogZmxvb3IoQGZvbnQtc2l6ZS1iYXNlICogQGxpbmUtaGVpZ2h0LWJhc2UpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgLmJveC1zaGFkb3coaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XG59XG5cbi8vIEJhciBvZiBwcm9ncmVzc1xuLnByb2dyZXNzLWJhciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LXNpemU6IGNlaWwoQGZvbnQtc2l6ZS1iYXNlICogMC44NSk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjhiY2E7XG4gICAgLmJveC1zaGFkb3coaW5zZXQgMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KSk7XG4gICAgLnRyYW5zaXRpb24od2lkdGggMC42cyBlYXNlKTtcbn1cblxuLy8gUHJvZ3Jlc3MgYmFyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLnByb2dyZXNzLWJhci12YXJpYW50KEBjb2xvcikge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBjb2xvcjtcblxuICAgIC5wcm9ncmVzcy1zdHJpcGVkICYge1xuICAgICAgICAjZ3JhZGllbnQ+LnN0cmlwZWQoQGNvbG9yKTtcbiAgICB9XG59XG5cbi5wcm9ncmVzcy1iYXItc3VjY2VzcyB7XG4gICAgLnByb2dyZXNzLWJhci12YXJpYW50KEBwcm9ncmVzcy1iYXItc3VjY2Vzcy1iZyk7XG59XG5cbi5wcm9ncmVzcy1iYXItY3VzdG9tLWNvcm5lcnMge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgYnV0dG9uIHtcbiAgICAgICAgJjpub3QoLm1hdC1pY29uLWJ1dHRvbikge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 83444:
/*!***************************************!*\
  !*** ./src/vehicles/mvu/constants.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsIds": () => (/* binding */ CmsIds)
/* harmony export */ });
const CmsIds = {
    MvuFrame: 'E6689601-07E1-4C8B-916D-964AA71E1155',
    MvuUploadPage: '37F193AC-85E5-4220-9F9D-8B6B18E3CC34',
    MvuUploadPageDownloadInstructions: '1EAE67A9-1427-445D-9786-7997A3A92A28',
    MvuUploadPageDownloadTemplate: '6105C2A0-AD84-4491-BAE7-5C598A7B2889',
    MvuUploadPageUploadVehicleCSVFile: 'C2DD5DBB-7575-4295-9736-985D6B5E12F6',
    MvuInstructions: 'mediaid="{F6E5148C-C550-4D91-9B33-B17166E77D8E}"',
    MvuTemplate: 'mediaid="{A46C6509-C479-4F12-8215-98AC861641A1}"',
    MvuDeliveryMethod: '3FA85E8A-BFF3-49BE-8F88-5772FF6B2220',
    MvuReviewOrder: 'AA988F8A-9726-45D7-A88A-E794744E35CB',
    MvuReceipt: '1B3B1C91-FF7A-4FFC-AFFD-EF22A75F6F01',
    CancellationModal: '70803808-5433-4A41-B099-3F4379151F98',
    TagInfoModal: '781C071D-31FB-4ABA-A73C-31CB8B722FC0',
    ReplenishmentAmtModal: '7FD13832-3572-4EBA-BB89-48454CB6FF82'
};


/***/ }),

/***/ 12452:
/*!************************************!*\
  !*** ./src/vehicles/mvu/module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MvuModule": () => (/* binding */ MvuModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout */ 45046);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pipes/module */ 20445);
/* harmony import */ var validation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validation/module */ 26186);
/* harmony import */ var storefront_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! storefront/module */ 89550);
/* harmony import */ var vehicles_common_vehicles_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vehicles/common/vehicles-common.module */ 82001);
/* harmony import */ var _routes_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes-config */ 59075);
/* harmony import */ var app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/routing */ 59389);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./states */ 46570);
/* harmony import */ var _components_frame_frame_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/frame/frame.component */ 58191);
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/upload/upload.component */ 85449);
/* harmony import */ var _components_reviewOrder_reviewOrder_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/reviewOrder/reviewOrder.component */ 71688);
/* harmony import */ var _components_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/receipt/receipt.component */ 49717);
/* harmony import */ var _components_deliveryMethod_deliveryMethod_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/deliveryMethod/deliveryMethod.component */ 72753);
/* harmony import */ var vehicles_shared_services_receipt_data_helper_receipt_data_helper_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vehicles/shared/services/receipt-data-helper/receipt-data-helper.service */ 96471);
/* harmony import */ var profile_services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! profile/services */ 8769);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @uirouter/angular */ 99305);

























const componentDictionary = {
    [_states__WEBPACK_IMPORTED_MODULE_7__.States.Mvu]: _components_frame_frame_component__WEBPACK_IMPORTED_MODULE_8__.MvuFrameComponent,
    [_states__WEBPACK_IMPORTED_MODULE_7__.States.MvuUpload]: _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_9__.MvuUploadComponent,
    [_states__WEBPACK_IMPORTED_MODULE_7__.States.MvuDeliveryMethod]: _components_deliveryMethod_deliveryMethod_component__WEBPACK_IMPORTED_MODULE_12__.MvuDeliveryMethodComponent,
    [_states__WEBPACK_IMPORTED_MODULE_7__.States.MvuReviewOrder]: _components_reviewOrder_reviewOrder_component__WEBPACK_IMPORTED_MODULE_10__.MvuReviewOrderComponent,
    [_states__WEBPACK_IMPORTED_MODULE_7__.States.MvuReceipt]: _components_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_11__.MvuReceiptComponent
};
const routesWithComponents = _routes_config__WEBPACK_IMPORTED_MODULE_5__.RoutesConfig.map((route) => ({
    ...route,
    component: componentDictionary[route.name]
}));
class MvuModule {
}
MvuModule.ɵfac = function MvuModule_Factory(t) { return new (t || MvuModule)(); };
MvuModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: MvuModule });
MvuModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [
        vehicles_shared__WEBPACK_IMPORTED_MODULE_15__.WebApiService,
        profile_services__WEBPACK_IMPORTED_MODULE_14__.WebApisService,
        vehicles_shared__WEBPACK_IMPORTED_MODULE_15__.VehiclesManagerService,
        _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe,
        _angular_common__WEBPACK_IMPORTED_MODULE_17__.TitleCasePipe,
        vehicles_shared_services_receipt_data_helper_receipt_data_helper_service__WEBPACK_IMPORTED_MODULE_13__.ReceiptDataHelperService,
        vehicles_shared__WEBPACK_IMPORTED_MODULE_15__.VehicleOperationsService
    ], imports: [[
            (0,app_routing__WEBPACK_IMPORTED_MODULE_6__.DynamicRoutes)([common_module__WEBPACK_IMPORTED_MODULE_0__.ENVIRON_CONFIG], (environConfig) => environConfig.useNewMvu ? routesWithComponents : []),
            common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule,
            pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__.FlexLayoutModule,
            validation_module__WEBPACK_IMPORTED_MODULE_2__.ValidationModule,
            storefront_module__WEBPACK_IMPORTED_MODULE_3__.StorefrontModule,
            vehicles_common_vehicles_common_module__WEBPACK_IMPORTED_MODULE_4__.VehiclesCommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](MvuModule, { declarations: [_components_frame_frame_component__WEBPACK_IMPORTED_MODULE_8__.MvuFrameComponent,
        _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_9__.MvuUploadComponent,
        _components_deliveryMethod_deliveryMethod_component__WEBPACK_IMPORTED_MODULE_12__.MvuDeliveryMethodComponent,
        _components_reviewOrder_reviewOrder_component__WEBPACK_IMPORTED_MODULE_10__.MvuReviewOrderComponent,
        _components_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_11__.MvuReceiptComponent], imports: [_uirouter_angular__WEBPACK_IMPORTED_MODULE_24__.UIRouterModule, common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule,
        pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__.FlexLayoutModule,
        validation_module__WEBPACK_IMPORTED_MODULE_2__.ValidationModule,
        storefront_module__WEBPACK_IMPORTED_MODULE_3__.StorefrontModule,
        vehicles_common_vehicles_common_module__WEBPACK_IMPORTED_MODULE_4__.VehiclesCommonModule] }); })();


/***/ }),

/***/ 59075:
/*!*******************************************!*\
  !*** ./src/vehicles/mvu/routes-config.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutesConfig": () => (/* binding */ RoutesConfig),
/* harmony export */   "stateGuardTag": () => (/* binding */ stateGuardTag)
/* harmony export */ });
/* harmony import */ var common_resolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/resolvers */ 1444);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var accountDashboard_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! accountDashboard/constants */ 75888);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states */ 46570);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ 83444);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ 81226);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ 40719);







const stateGuardTag = (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.StateGuard)(constants_module__WEBPACK_IMPORTED_MODULE_1__.webStorageConst.vehiclesTagCurrentStep, _shared__WEBPACK_IMPORTED_MODULE_6__.States.Root);
const RoutesConfig = [
    {
        name: _states__WEBPACK_IMPORTED_MODULE_3__.States.Mvu,
        abstract: true,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.active),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.MaintenanceFeature.Account),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cmsMvuFrame', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.MvuFrame }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.UsStatesResolver)('stateList'),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CountryResolver)('countryList')
        ],
    },
    {
        name: _states__WEBPACK_IMPORTED_MODULE_3__.States.MvuUpload,
        url: _routes__WEBPACK_IMPORTED_MODULE_5__.Routes.MvuUpload,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.active),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.MaintenanceFeature.Account),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('pageCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.MvuUploadPage }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('downInstructCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.MvuUploadPageDownloadInstructions }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('downTemplCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.MvuUploadPageDownloadTemplate }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('uploadVehicleCsvFileCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.MvuUploadPageUploadVehicleCSVFile })
        ],
        wizard: {
            nextState: _states__WEBPACK_IMPORTED_MODULE_3__.States.MvuDeliveryMethod,
            cancelState: _shared__WEBPACK_IMPORTED_MODULE_6__.States.Root
        }
    },
    {
        name: _states__WEBPACK_IMPORTED_MODULE_3__.States.MvuDeliveryMethod,
        url: _routes__WEBPACK_IMPORTED_MODULE_5__.Routes.MvuDeliveryMethod,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.active),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.MaintenanceFeature.Account),
            stateGuardTag({
                explicitlyForbidden: [_states__WEBPACK_IMPORTED_MODULE_3__.States.MvuReceipt]
            }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cmsMvuDeliveryMethod', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.MvuDeliveryMethod }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cancellationModal', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.CancellationModal })
        ],
        wizard: {
            nextState: _states__WEBPACK_IMPORTED_MODULE_3__.States.MvuReviewOrder,
            prevState: _states__WEBPACK_IMPORTED_MODULE_3__.States.MvuUpload,
            cancelState: _shared__WEBPACK_IMPORTED_MODULE_6__.States.Root
        }
    },
    {
        name: _states__WEBPACK_IMPORTED_MODULE_3__.States.MvuReviewOrder,
        url: _routes__WEBPACK_IMPORTED_MODULE_5__.Routes.MvuReviewOrder,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.active),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.MaintenanceFeature.Account),
            stateGuardTag({
                explicitlyForbidden: [_states__WEBPACK_IMPORTED_MODULE_3__.States.MvuReceipt]
            }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('pageCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.MvuReviewOrder }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('replenishmentAmtModalCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.ReplenishmentAmtModal }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('tagInfoModalCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.TagInfoModal }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cancellationModal', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.CancellationModal }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.UsStatesResolver)('stateList')
        ],
        wizard: {
            nextState: _states__WEBPACK_IMPORTED_MODULE_3__.States.MvuReceipt,
            prevState: _states__WEBPACK_IMPORTED_MODULE_3__.States.MvuDeliveryMethod,
            cancelState: _shared__WEBPACK_IMPORTED_MODULE_6__.States.Root
        }
    },
    {
        name: _states__WEBPACK_IMPORTED_MODULE_3__.States.MvuReceipt,
        url: _routes__WEBPACK_IMPORTED_MODULE_5__.Routes.MvuReceipt,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.active),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('pageCms', { mergeParams: true, ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.MvuReceipt }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.MaintenanceFeature.Account),
            stateGuardTag({
                allowed: [_states__WEBPACK_IMPORTED_MODULE_3__.States.MvuReviewOrder],
                explicitlyForbidden: [accountDashboard_constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Frame, _shared__WEBPACK_IMPORTED_MODULE_6__.States.Root]
            })
        ],
        wizard: {
            nextState: _shared__WEBPACK_IMPORTED_MODULE_6__.States.Root,
            isEndState: true
        }
    },
];


/***/ }),

/***/ 32510:
/*!***************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/lastValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lastValueFrom": () => (/* binding */ lastValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/EmptyError */ 79788);

function lastValueFrom(source, config) {
    const hasConfig = typeof config === 'object';
    return new Promise((resolve, reject) => {
        let _hasValue = false;
        let _value;
        source.subscribe({
            next: (value) => {
                _value = value;
                _hasValue = true;
            },
            error: reject,
            complete: () => {
                if (_hasValue) {
                    resolve(_value);
                }
                else if (hasConfig) {
                    resolve(config.defaultValue);
                }
                else {
                    reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__.EmptyError());
                }
            },
        });
    });
}


/***/ })

}]);
//# sourceMappingURL=452.19b4dd3fb31b07fc.js.map