"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[778],{

/***/ 58862:
/*!******************************************************************!*\
  !*** ./src/vehicles/eztag/add/components/cart/cart.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTagCartComponent": () => (/* binding */ AddTagCartComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var vehicles_vehicleCartBase_vehicleCartBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vehicles/vehicleCartBase/vehicleCartBase */ 91402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frame/frame.component */ 506);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../common/ui/containers/fxRow/fxRow.component */ 47553);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _common_vehicleCartRow_components_vehicleCartRow_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/vehicleCartRow/components/vehicleCartRow.component */ 70580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../validation/focus.directive */ 39453);
/* harmony import */ var _common_ui_form_entry_vehicleInfo_vehicleInfo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../common/ui/form-entry/vehicleInfo/vehicleInfo.component */ 78676);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../common/ui/modals/actionButtons/actionButtons.component */ 65380);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../pipes/safeHtml.pipe */ 49985);

























function AddTagCartComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}

function AddTagCartComponent_section_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "section", 15)(1, "vehicle-cart-row-component", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("removeVehicle", function AddTagCartComponent_section_16_Template_vehicle_cart_row_component_removeVehicle_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r8);
      const i_r6 = restoredCtx.index;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return ctx_r7.removeVehicle(i_r6);
    })("editVehicle", function AddTagCartComponent_section_16_Template_vehicle_cart_row_component_editVehicle_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r8);
      const i_r6 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return ctx_r9.editVehicle($event, i_r6);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ezTag_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ezTag", ezTag_r5)("deleteModalCms", ctx_r1.deleteModalCms)("editModalCms", ctx_r1.editModalCms)("stateList", ctx_r1.stateList)("canRemove", ctx_r1.cartTags.length > 1);
  }
}

function AddTagCartComponent_section_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "section", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddTagCartComponent_section_17_Template_section_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return ctx_r10.resetAddAdditionalVehicle();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "Add Additional Vehicle");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}

function AddTagCartComponent_section_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "section", 20)(1, "wizard-ui", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("next", function AddTagCartComponent_section_18_Template_wizard_ui_next_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return ctx_r12.addEzTagDeliveryMethodClick($event);
    })("cancel", function AddTagCartComponent_section_18_Template_wizard_ui_cancel_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return ctx_r14.cancel($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "NEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
}

function AddTagCartComponent_form_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "form", 24, 25)(2, "card-container")(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "mat-divider", 3)(6, "vehicle-info-form-entry", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "section", 20)(8, "action-buttons", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("main", function AddTagCartComponent_form_19_Template_action_buttons_main_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return ctx_r16.addAdditionalVehicle();
    })("alt", function AddTagCartComponent_form_19_Template_action_buttons_alt_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return ctx_r18.resetAddAdditionalVehicle();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "SAVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r4.addAdditionalTagCms.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("modalCms", ctx_r4.addAdditionalTagCms)("stateList", ctx_r4.stateList)("vehicleInfo", ctx_r4.addVehicle)("plateIsReadOnly", false)("motorcycleDisabled", false);
  }
}

class AddTagCartComponent extends vehicles_vehicleCartBase_vehicleCartBase__WEBPACK_IMPORTED_MODULE_2__.VehicleCartBase {
  constructor(frame, state, manager, dialogService, toasterService) {
    super(toasterService);
    this.frame = frame;
    this.state = state;
    this.manager = manager;
    this.dialogService = dialogService;
    this.toasterService = toasterService;
  }

  ngOnInit() {
    this.frame.showStepper = true;
    this.addVehicle = {
      vehicleClassCode: 2,
      licState: 'TX'
    };
    this.addingAdditionalVehicle = false;
    this.cartTags = this.manager.getVehicleInfoList();
  }

  addEzTagDeliveryMethodClick(nextState) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.cartTags.length > 0) {
        yield _this.state.go(nextState);
      } else {
        _this.toasterService.show('Error', 'Please add a vehicle');
      }
    })();
  }

  removeVehicle(index) {
    this.manager.removeVehicleInfoItem(index);
  }

  editVehicle(editVehicle, index) {
    const selectedEzTag = this.cartTags[index]; //This check is to check that if the plate has changed; checks for both state and plate number against plates currently in the cart

    if (selectedEzTag.licPlate !== editVehicle.licPlate || selectedEzTag.licState !== editVehicle.licState) {
      if (!this.checkIfLicExistsInCart(editVehicle.licPlate, editVehicle.licState)) {
        this.manager.editVehicleInfoItem(editVehicle, index);
      }
    } else {
      this.manager.editVehicleInfoItem(editVehicle, index);
    }
  }

  addAdditionalVehicle() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const licExists = _this2.checkIfLicExistsInCart(_this2.addVehicle.licPlate, _this2.addVehicle.licState);

      if (licExists) {
        _this2.addingAdditionalVehicle = true;
      } else {
        yield _this2.manager.setVehicleInfoItem(_this2.addVehicle);

        const list = _this2.manager.getVehicleInfoList();

        if (list.filter(li => li.licPlate === _this2.addVehicle.licPlate.toUpperCase()).length > 0) {
          _this2.addVehicle = {
            vehicleClassCode: 2,
            licState: 'TX'
          };
          _this2.addingAdditionalVehicle = false;
        } else {
          _this2.addingAdditionalVehicle = true;
        }
      }
    })();
  }

  resetAddAdditionalVehicle() {
    this.addVehicle = {
      vehicleClassCode: 2,
      licState: 'TX'
    };
    this.addingAdditionalVehicle = !this.addingAdditionalVehicle;
  }

  cancel(state) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        cmsContent: {
          Title: _this3.cancellationModal.Title,
          PrimaryContent: _this3.cancellationModal.LongDescription,
          AcceptBtn: 'No',
          CancelBtn: 'Yes'
        }
      };
      const res = yield _this3.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_1__.GenericCmsModalComponent, data);

      if (!res) {
        _this3.manager.clearData();

        yield _this3.state.go(state);
      }
    })();
  }

}

AddTagCartComponent.ɵfac = function AddTagCartComponent_Factory(t) {
  return new (t || AddTagCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.AddTagFrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_17__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_4__.VehiclesManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_5__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_5__.ToasterService));
};

AddTagCartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
  type: AddTagCartComponent,
  selectors: [["vehicles-addTag-cart-component"]],
  inputs: {
    pageCms: "pageCms",
    deleteModalCms: "deleteModalCms",
    editModalCms: "editModalCms",
    cancellationModal: "cancellationModal",
    stateList: "stateList"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"]],
  decls: 20,
  vars: 12,
  consts: [[1, "refresh-2020"], [1, "u-spacing__fieldToSection--marginTop"], [4, "ngIf"], [1, "u-spacing__divider--marginTopBottom"], [3, "innerHtml"], [1, "u-spacing--widthFill"], ["fxLayout", "row", "fxLayoutAlign", "start start"], [1, "u-spacing--widthFill", "u-spacing__gridToRecords--marginTop"], [3, "isLabel", "backgroundColorClass"], ["col-start", "", 1, "fx-flex-auto", "fx-layout-row", "fx-layout-align-start-center"], [1, "fx-flex-auto-shrink-more", "limited-flex"], ["fxLayout", "row", "fxLayoutAlign", "start start", "class", "u-spacing--widthFill", 4, "ngFor", "ngForOf"], ["class", "u-spacing__fieldToSection--marginTop", "fxLayout", "row", "fxLayoutAlign", "center center", 3, "click", 4, "ngIf"], ["class", "u-spacing__buttonToField--marginTop", 4, "ngIf"], ["validation-focus", "", "fxLayout", "column", "class", "u-spacing--widthFill u-spacing__fieldToSection--marginTop", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start start", 1, "u-spacing--widthFill"], [3, "ezTag", "deleteModalCms", "editModalCms", "stateList", "canRemove", "removeVehicle", "editVehicle"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "u-spacing__fieldToSection--marginTop", 3, "click"], ["svgIcon", "add-icon"], ["fxFlexOffset", "6px", 1, "add-text"], [1, "u-spacing__buttonToField--marginTop"], [3, "next", "cancel"], ["wizard-next", ""], ["wizard-cancel", ""], ["validation-focus", "", "fxLayout", "column", 1, "u-spacing--widthFill", "u-spacing__fieldToSection--marginTop"], ["AddVehicleForm", "ngForm"], [3, "modalCms", "stateList", "vehicleInfo", "plateIsReadOnly", "motorcycleDisabled"], [3, "main", "alt"], ["action-main", ""], ["action-alt", ""]],
  template: function AddTagCartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "div", 1)(2, "card-container")(3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, AddTagCartComponent_span_5_Template, 2, 0, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "mat-divider", 3)(7, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "section", 5)(10, "div", 6)(11, "section", 7)(12, "fx-row", 8)(13, "section", 9)(14, "mat-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, "EZ TAGS REQUESTED");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](16, AddTagCartComponent_section_16_Template, 2, 5, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](17, AddTagCartComponent_section_17_Template, 4, 0, "section", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](18, AddTagCartComponent_section_18_Template, 6, 0, "section", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, AddTagCartComponent_form_19_Template, 13, 6, "form", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", ctx.pageCms.Title, " ", ctx.cartTags.length, " item");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.cartTags.length > 1 || ctx.cartTags.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 10, ctx.pageCms.LongDescription), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("isLabel", true)("backgroundColorClass", "transparent-background");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.cartTags);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.addingAdditionalVehicle);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.addingAdditionalVehicle);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.addingAdditionalVehicle);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_6__.PageCenteredContainerComponent, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__.CardContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__.DefaultLayoutAlignDirective, _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_8__.FxRowComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLabel, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _common_vehicleCartRow_components_vehicleCartRow_component__WEBPACK_IMPORTED_MODULE_9__.VehicleCartRowComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__.DefaultFlexOffsetDirective, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_11__.WizardNextDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_12__.FocusDirective, _common_ui_form_entry_vehicleInfo_vehicleInfo_component__WEBPACK_IMPORTED_MODULE_13__.VehicleInfoComponent, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_14__.ActionButtonsComponent],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_15__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%]   span[action-alt][_ngcontent-%COMP%] {\n  font-family: 'Jost';\n  font-weight: 500;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUVRLG1CQUFBO0VBQ0EsZ0JBQUE7QUFKUjtBQUNBO0VBT1EsV0FBQTtBQUxSIiwiZmlsZSI6ImNhcnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG5cbjpob3N0IHtcbiAgICBzcGFuW2FjdGlvbi1hbHRdIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdKb3N0JztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 3020:
/*!**************************************************************************************!*\
  !*** ./src/vehicles/eztag/add/components/deliveryMethod/deliveryMethod.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTagDeliveryMethodComponent": () => (/* binding */ AddTagDeliveryMethodComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frame/frame.component */ 506);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../validation/focus.directive */ 39453);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_chooseDeliveryMethod_chooseDeliveryMethod_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../common/ui/chooseDeliveryMethod/chooseDeliveryMethod.component */ 5472);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 38661);


















class AddTagDeliveryMethodComponent {
  constructor(parent, state, manager, dialogService, mailingService) {
    this.parent = parent;
    this.state = state;
    this.manager = manager;
    this.dialogService = dialogService;
    this.mailingService = mailingService;
    this.selectedDeliveryMethod = '';
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.deliveryMethod = _this.manager.getDeliveryMethod();
      _this.mailingInfo = yield _this.mailingService.getMailingAddress();
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
        _this2.manager.clearData();

        yield _this2.state.go(state);
      }
    })();
  }

  nextStep(state) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.deliveryMethod.deliveryMethod = _this3.selectedDeliveryMethod;

      _this3.manager.setDeliveryMethod(_this3.deliveryMethod);

      yield _this3.state.go(state);
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

AddTagDeliveryMethodComponent.ɵfac = function AddTagDeliveryMethodComponent_Factory(t) {
  return new (t || AddTagDeliveryMethodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_2__.AddTagFrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_12__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_3__.VehiclesManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_4__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_3__.MailingAddressService));
};

AddTagDeliveryMethodComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: AddTagDeliveryMethodComponent,
  selectors: [["vehicles-addTag-delivery-component"]],
  inputs: {
    cmsAddTagDeliveryMethod: "cmsAddTagDeliveryMethod",
    cancellationModal: "cancellationModal"
  },
  decls: 21,
  vars: 5,
  consts: [[1, "refresh-2020"], ["validation-focus", "", "novalidate", ""], ["Form", "ngForm"], [1, "u-spacing__fieldToSection--marginTop"], [1, "u-spacing__divider--marginTopBottom"], [3, "mailingInfo", "deliveryMethod", "isAddEzTag", "deliveryMethodChange", "onEdit"], [1, "u-spacing__buttonToField--marginTop"], [3, "disabled", "next", "cancel"], ["Wizard", ""], ["wizard-next", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["wizard-cancel", ""]],
  template: function AddTagDeliveryMethodComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "form", 1, 2)(3, "div", 3)(4, "card-container")(5, "header")(6, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "mat-divider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "choose-delivery-method", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("deliveryMethodChange", function AddTagDeliveryMethodComponent_Template_choose_delivery_method_deliveryMethodChange_10_listener($event) {
        return ctx.selectedDeliveryMethod = $event;
      })("onEdit", function AddTagDeliveryMethodComponent_Template_choose_delivery_method_onEdit_10_listener($event) {
        return ctx.onMailingAddressEdit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "section", 6)(12, "wizard-ui", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("next", function AddTagDeliveryMethodComponent_Template_wizard_ui_next_12_listener($event) {
        return ctx.nextStep($event);
      })("cancel", function AddTagDeliveryMethodComponent_Template_wizard_ui_cancel_12_listener($event) {
        return ctx.cancel($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "CONTINUE");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.cmsAddTagDeliveryMethod.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("mailingInfo", ctx.mailingInfo)("deliveryMethod", ctx.selectedDeliveryMethod)("isAddEzTag", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", _r0.submitted && _r0.invalid || ctx.disable());
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_6__.FocusDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, _common_ui_chooseDeliveryMethod_chooseDeliveryMethod_component__WEBPACK_IMPORTED_MODULE_8__.ChooseDeliveryMethodComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_9__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_10__.WizardNextDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutAlignDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon],
  styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGl2ZXJ5TWV0aG9kLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFUSxXQUFBO0FBSFIiLCJmaWxlIjoiZGVsaXZlcnlNZXRob2QubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgbWF0LWRpdmlkZXIge1xuICAgICAgICB3aWR0aDogQHdpZHRoLWRpdmlkZXI7XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 506:
/*!********************************************************************!*\
  !*** ./src/vehicles/eztag/add/components/frame/frame.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTagFrameComponent": () => (/* binding */ AddTagFrameComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/providers */ 61264);
/* harmony import */ var common_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/utilities */ 56516);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../states */ 38957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../common/ui/wizard/stepper/stepper.component */ 63457);
/* harmony import */ var _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../common/ui/containers/page/pageFilled.component */ 95556);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @uirouter/angular */ 99305);


 // import { stateNames } from '../constants';









function AddTagFrameComponent_stepper_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "stepper", 2);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("steps", ctx_r0.steps)("stepMap", ctx_r0.stepMap);
  }
}

class AddTagFrameComponent {
  constructor(vehiclesManagerService, windowRef) {
    this.vehiclesManagerService = vehiclesManagerService;
    this.windowRef = windowRef;
    this.steps = [];
    this.stepMap = {};
    this.showStepper = false;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.vehiclesManagerService.clearData();

      _this.steps = [{
        name: _this.cmsAddTagFrame.step1,
        background: 'secondary'
      }, {
        name: _this.cmsAddTagFrame.step2,
        background: 'secondary'
      }, {
        name: _this.cmsAddTagFrame.step3,
        background: 'secondary'
      }, {
        name: _this.cmsAddTagFrame.step4,
        background: 'secondary'
      }, {
        name: _this.cmsAddTagFrame.step5,
        background: 'secondary'
      }];
      _this.stepMap = {
        [_states__WEBPACK_IMPORTED_MODULE_3__.States.TagVehicleInformation]: 1,
        [_states__WEBPACK_IMPORTED_MODULE_3__.States.TagCart]: 2,
        [_states__WEBPACK_IMPORTED_MODULE_3__.States.TagDeliveryMethod]: 3,
        [_states__WEBPACK_IMPORTED_MODULE_3__.States.TagReviewOrder]: 4,
        [_states__WEBPACK_IMPORTED_MODULE_3__.States.TagReceipt]: 5
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

AddTagFrameComponent.ɵfac = function AddTagFrameComponent_Factory(t) {
  return new (t || AddTagFrameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_4__.VehiclesManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](common_providers__WEBPACK_IMPORTED_MODULE_1__.WindowRef));
};

AddTagFrameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AddTagFrameComponent,
  selectors: [["vehicles-addTag-frame"]],
  inputs: {
    cmsAddTagFrame: "cmsAddTagFrame",
    stateList: "stateList",
    countryList: "countryList"
  },
  decls: 4,
  vars: 1,
  consts: [[1, "refresh-2020", "u-spacing--widthFill"], [3, "steps", "stepMap", 4, "ngIf"], [3, "steps", "stepMap"]],
  template: function AddTagFrameComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "main", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddTagFrameComponent_stepper_1_Template, 1, 2, "stepper", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "page-filled-container");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ui-view");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showStepper);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_5__.StepperComponent, _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_6__.PageFilledContainerComponent, _uirouter_angular__WEBPACK_IMPORTED_MODULE_9__.UIView],
  styles: ["[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  background-color: #efeff4;\n}\n@media not screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n    padding-left: 85px;\n    padding-right: 85px;\n  }\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  padding: 24px 15px 16px 15px;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 30px;\n  color: #fc2125;\n  margin-bottom: 10px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    padding: 11px 14px 15px 14px;\n  }\n}\n[_nghost-%COMP%]   stepper[_ngcontent-%COMP%] {\n  display: block;\n  min-height: 32px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   stepper[_ngcontent-%COMP%] {\n    min-height: unset;\n  }\n}\n[_nghost-%COMP%]   page-filled-container[_ngcontent-%COMP%] {\n  display: block;\n}\n@media not screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   page-filled-container[_ngcontent-%COMP%] {\n    background-color: #efeff4;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   page-filled-container[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1lLmxlc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xccGFnZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VDb0JJLHlCQUFBO0FEckJKO0FBTVE7RUFBQTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUFIVjtBQUNGO0FBTEE7RUF1QlksNEJBQUE7QUFmWjtBQVJBO0VBYWdCLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUZoQjtBQUlnQjtFQUFBO0lBQ0ksZ0JBQUE7RUFEbEI7QUFDRjtBQU1ZO0VBQUE7SUFDSSw0QkFBQTtFQUhkO0FBQ0Y7QUF4QkE7RUFnQ1EsY0FBQTtFQUNBLGdCQUFBO0FBTFI7QUFPUTtFQUFBO0lBQ0ksaUJBQUE7RUFKVjtBQUNGO0FBakNBO0VBeUNRLGNBQUE7QUFMUjtBQU9RO0VBQUE7SUN2QkoseUJBQUE7RURvQkY7QUFDRjtBQU1RO0VBQUE7SUNoQ0oseUJBQUE7RUQ4QkY7QUFDRiIsImZpbGUiOiJmcmFtZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcblxuICAgIG1haW4ge1xuICAgICAgICAudC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IyKEB0aGVtZS1saWdodCk7XG5cbiAgICAgICAgQG1lZGlhIG5vdCBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IEBwYWdlLWJhci1tYXJnaW4tc3RhdGljO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogQHBhZ2UtYmFyLW1hcmdpbi1zdGF0aWM7XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkZXIge1xuXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBAdG9yY2gtcmVkO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFkZGluZzogMjRweCAxNXB4IDE2cHggMTVweDtcblxuICAgICAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LW1kIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMXB4IEBwYWdlLWJhci1tYXJnaW4tc3RhdGljLWx0LW1kIDE1cHggQHBhZ2UtYmFyLW1hcmdpbi1zdGF0aWMtbHQtbWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGVwcGVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMycHg7XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LW1kIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IHVuc2V0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFnZS1maWxsZWQtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgQG1lZGlhIG5vdCBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgICAgICAudC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IyKEB0aGVtZS1saWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgLnQtYm9keS0tYmFja2dyb3VuZENvbG9yKEB0aGVtZS1saWdodCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cblxuQGJvZHktLWJhY2tncm91bmRDb2xvci1saWdodDogQHdoaXRlO1xuQGJvZHktLWJhY2tncm91bmRDb2xvcjItbGlnaHQ6IEBhdGhlbnMtZ3JheTtcbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3IzLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AYm9keS0tY29sb3ItbGlnaHQ6IEB0dW5hLWdyYXk7XG5AYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3ItbGlnaHQ6IEB0cm9waWNhbC1yYWluLWZvcmVzdC1ncmVlbjtcbkBib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1saWdodDogQHNpbHZlci1ncmF5O1xuQGhlYWRlci0tY29sb3ItbGlnaHQ6IEB0dW5hLWdyYXk7XG5AbGFiZWwtLWNvbG9yLWxpZ2h0OiBAYm91bGRlci1ncmF5O1xuQHNlbGVjdF9fYXJyb3ctLWNvbG9yLWxpZ2h0OiBAc2NvcnBpb24tZ3JheTtcbkBsaW5rLS1jb2xvci1saWdodDogQGF6dXJlLXJhZGlhbmNlLWJsdWU7XG5AZGl2aWRlci0tYm9yZGVyQ29sb3ItbGlnaHQ6IEBzY2hvb2wtYnVzLXllbGxvdztcblxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IyKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvcjItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWJhY2tncm91bmRDb2xvcjMoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tYmFja2dyb3VuZENvbG9yMy1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keS0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19wb3NpdGl2ZUZlZWRiYWNrLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWhlYWRlci0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnaGVhZGVyLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWxhYmVsLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdsYWJlbC0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1zZWxlY3RfX2Fycm93LS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdzZWxlY3RfX2Fycm93LS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWxpbmstLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2xpbmstLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvciAhaW1wb3J0YW50OyAvLyBtYXJrZWQgYXMgIWltcG9ydGFudCB0byBvdmVycmlkZSBib290c3RyYXBcbn1cblxuLnQtZGl2aWRlci0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnZGl2aWRlci0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtZGl2aWRlcl9fZGFzaC0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItQHt0aGVtZX0nO1xuICAgIGJvcmRlci1jb2xvcjogQEBjb2xvcjtcbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 24028:
/*!************************************************************************!*\
  !*** ./src/vehicles/eztag/add/components/receipt/receipt.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTagReceiptComponent": () => (/* binding */ AddTagReceiptComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../frame/frame.component */ 506);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../storefront/services/storefrontUtility.service */ 18011);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../common/ui/display/address/addressDisplay.component */ 23204);
/* harmony import */ var _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../common/ui/display/payment/paymentDisplay.component */ 38321);
/* harmony import */ var _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../common/ui/containers/fxRow/fxRow.component */ 47553);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _common_vehicleCartRow_components_vehicleCartRow_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../common/vehicleCartRow/components/vehicleCartRow.component */ 70580);
/* harmony import */ var _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../storefront/utility/utility.component */ 10061);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../common/ui/modals/actionButtons/actionButtons.component */ 65380);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../pipes/dateWithTimeZone/dateWithTimeZone.pipe */ 29719);



























function AddTagReceiptComponent_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r0.cmsContent.replenishAmt, "");
  }
}

function AddTagReceiptComponent_section_28_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "Ship EZ TAG(s) to:");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "address-display", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const mailingAddress_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("address", mailingAddress_r8)("international", mailingAddress_r8.international)("showLabels", false)("showEdit", false);
  }
}

function AddTagReceiptComponent_section_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section", 5)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, AddTagReceiptComponent_section_28_ng_container_3_Template, 4, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.deliveryMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isByMail);
  }
}

function AddTagReceiptComponent_div_30_section_5_address_display_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "address-display", 18);
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("address", ctx_r12.billingInfo.billingType === ctx_r12.BillingType.Credit ? ctx_r12.billingInfo.credit : ctx_r12.billingInfo.eft)("international", ctx_r12.billingInfo.billingType === ctx_r12.BillingType.Credit ? ctx_r12.billingInfo.credit.international : ctx_r12.billingInfo.eft.international)("showLabels", false)("showEdit", false);
  }
}

function AddTagReceiptComponent_div_30_section_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "payment-display", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "article", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, AddTagReceiptComponent_div_30_section_5_address_display_3_Template, 1, 4, "address-display", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("billingType", ctx_r11.billingInfo.billingType)("bankDetails", ctx_r11.billingInfo.eft)("creditCard", ctx_r11.billingInfo.credit)("hideTitle", true)("showAccountNumber", true)("showNameOnCard", true)("showLabels", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r11.billingInfo && ctx_r11.billingInfo.billingType);
  }
}

function AddTagReceiptComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div")(1, "header", 0)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, AddTagReceiptComponent_div_30_section_5_Template, 4, 8, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r2.cmsContent.billingInfo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.billingInfo);
  }
}

function AddTagReceiptComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "vehicle-cart-row-component", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ezTag_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("canRemove", false)("canEdit", false)("ezTag", ezTag_r13);
  }
}

function AddTagReceiptComponent_section_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section")(1, "action-buttons", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("main", function AddTagReceiptComponent_section_45_Template_action_buttons_main_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r17);

      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](5);

      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r16.proceed(_r15);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "PROCEED");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "wizard-ui", null, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function AddTagReceiptComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section", 27)(1, "wizard-ui", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("next", function AddTagReceiptComponent_ng_template_46_Template_wizard_ui_next_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r18.nextStep($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddTagReceiptComponent_ng_template_46_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r20.viewVehiclesClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("reverseOrder", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r7.cmsContent.accountDashboard, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r7.cmsContent.manageMyVehicles);
  }
}

class AddTagReceiptComponent {
  constructor(frame, state, manager, storefrontUtilityService, accountService) {
    this.frame = frame;
    this.state = state;
    this.manager = manager;
    this.storefrontUtilityService = storefrontUtilityService;
    this.accountService = accountService;
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
      _this.isKiosk = _this.storefrontUtilityService.isRunningAsKiosk && !_this.storefrontUtilityService.webStoreData.fullSiteMode;
      _this.paymentDate = new Date();
      _this.paymentAmount = (yield _this.manager.getPaymentInfo()).totalAmt;

      _this.getActInfo();

      _this.mailingAddress$ = _this.accountService.getMailingInfo();

      _this.setDeliveryMethod();

      _this.billingInfo = yield _this.manager.getBillingInfo();
      _this.tags = _this.manager.getVehicleInfoList();
    })();
  }

  setDeliveryMethod() {
    const deliveryMethodData = this.manager.getDeliveryMethod();
    this.isByMail = deliveryMethodData.deliveryMethod === common_ui__WEBPACK_IMPORTED_MODULE_2__.DeliveryMethodType.Mail;
    this.deliveryMethod = 'Delivery Method:' + (this.isByMail ? 'By Mail' : 'EZ TAG Store Pickup');
    this.setDeliveryMethodCmsDesc();
  }

  setDeliveryMethodCmsDesc() {
    if (this.isByMail) {
      this.deliveryMethodCmsDesc = this.cmsContent.LongDescription;
    } else {
      this.deliveryMethodCmsDesc = this.cmsContent.tagStorePickup;
    }
  }

  getActInfo() {
    const currentUser = this.manager.getCurrentUser();
    this.actNumber = currentUser.acctId;
    this.actName = currentUser.firstName + ' ' + currentUser.lastName;
    this.isOptIn = currentUser.rebillOptIn;
  }

  viewVehiclesClick() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.manager.clearData();

      yield _this2.state.go(vehicles_shared__WEBPACK_IMPORTED_MODULE_3__.States.Root);
    })();
  }

  nextStep(state) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.manager.clearData();

      yield _this3.state.go(state);
    })();
  }

  proceed(wizardUi) {
    this.manager.clearData();

    if (this.isKiosk && wizardUi) {
      wizardUi.gotoNextState();
      return;
    }
  }

}

AddTagReceiptComponent.ɵfac = function AddTagReceiptComponent_Factory(t) {
  return new (t || AddTagReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_4__.AddTagFrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_20__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_3__.VehiclesManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_5__.StorefrontUtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.AccountService));
};

AddTagReceiptComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
  type: AddTagReceiptComponent,
  selectors: [["vehicles-addTag-receipt-component"]],
  inputs: {
    cmsContent: "cmsContent"
  },
  decls: 48,
  vars: 27,
  consts: [["fxLayout", "row", "fxLayoutAlign", "space-between end"], ["fxLayout", "row", "fxLayoutAlign", "space-between end", 1, "summary", "paymentAmount"], [3, "value"], [1, "summary"], [4, "ngIf"], ["fxLayout", "column"], ["translation-skip", ""], ["fxLayout", "column", 4, "ngIf"], [1, "u-spacing--widthFill"], ["fxLayout", "row", "fxLayoutAlign", "start start"], [3, "isLabel", "backgroundColorClass"], ["col-start", "", 1, "fx-flex-auto", "fx-layout-row", "fx-layout-align-start-center"], [1, "fx-flex-auto-shrink-more", "limited-flex"], ["fxLayout", "row", "fxLayoutAlign", "start start", "class", "u-spacing--widthFill", 4, "ngFor", "ngForOf"], ["storefront", ""], [4, "ngIf", "ngIfElse"], ["nonkiosk", ""], [1, "itemFont"], [3, "address", "international", "showLabels", "showEdit"], [3, "billingType", "bankDetails", "creditCard", "hideTitle", "showAccountNumber", "showNameOnCard", "showLabels"], [1, "u-spacing__addressToPaymentDisplay--marginTop"], [3, "address", "international", "showLabels", "showEdit", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start start", 1, "u-spacing--widthFill"], [3, "canRemove", "canEdit", "ezTag"], [3, "main"], ["action-main", ""], ["wizardUi", ""], ["fxLayout", "row", "fxLayout.lt-md", "column"], [3, "reverseOrder", "next"], ["wizard-next", ""], [3, "click"]],
  template: function AddTagReceiptComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "page-centered-container")(1, "card-container")(2, "header", 0)(3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](5, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "article");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "section")(11, "div", 1)(12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](14, "currency", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](17, "dateWithTimeZone");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](18, AddTagReceiptComponent_p_18_Template, 2, 1, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "header", 0)(20, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](22, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "section", 5)(24, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](28, AddTagReceiptComponent_section_28_Template, 4, 2, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](29, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](30, AddTagReceiptComponent_div_30_Template, 6, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](31, "header", 0)(32, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](34, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](35, "section", 8)(36, "div", 9)(37, "div")(38, "fx-row", 10)(39, "div", 11)(40, "mat-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](42, AddTagReceiptComponent_div_42_Template, 2, 3, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](43, "storefront-utility", null, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](45, AddTagReceiptComponent_section_45_Template, 6, 0, "section", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](46, AddTagReceiptComponent_ng_template_46_Template, 6, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](47);

      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.Title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx.deliveryMethodCmsDesc);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx.cmsContent.ShortDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", ctx.cmsContent.paymentAmount, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", ctx.paymentAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"](" ", ctx.cmsContent.paymentReceivedOn, " ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](17, 22, ctx.paymentDate, "dateTime4"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isOptIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.accountInfo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"](" ", ctx.cmsContent.accountName, ": ", ctx.actName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"]("", ctx.cmsContent.accountNumber, ": ", ctx.actNumber, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](29, 25, ctx.mailingAddress$));
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isOptIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.tagsOrdered, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("isLabel", true)("backgroundColorClass", "transparent-background");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.tagsRequested, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx.tags);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isKiosk)("ngIfElse", _r6);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_7__.PageCenteredContainerComponent, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_8__.CardContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__.DefaultLayoutAlignDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDivider, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_9__.CurrencyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_10__.AddressDisplayComponent, _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_11__.PaymentDisplayComponent, _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_12__.FxRowComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatLabel, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _common_vehicleCartRow_components_vehicleCartRow_component__WEBPACK_IMPORTED_MODULE_13__.VehicleCartRowComponent, _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_14__.StorefrontUtilityComponent, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_15__.ActionButtonsComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_16__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_17__.WizardNextDirective],
  pipes: [_pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_18__.DateWithTimeZonePipe, _angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-top: 16px;\n  }\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-next][_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]    + a[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]    + a[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 64px;\n  margin-top: 16px;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .summary[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 16px;\n  padding-bottom: 11px;\n  font-size: 16px;\n  line-height: 26px;\n  margin: 0px -16px;\n}\n[_nghost-%COMP%]   .paymentAmount[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #e0e0ef;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29tbW9uXFx1aVxcY29udGFpbmVyc1xcZnhSb3dcXGRldGFpbHMubGVzcyIsInJlY2VpcHQuY29tcG9uZW50Lmxlc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcY3VzdG9tXFxzcGFjaW5nXFxzZWN0aW9ucy5sZXNzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGN1c3RvbVxcc3BhY2luZ1xcZGl2aWRlcnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7QUNESjtBREFBO0VBSVEsYUFBQTtFQUNBLGtCQUFBO0FDRFI7QURKQTtFQThFSSxjQUFBO0VBQ0Esc0JBQUE7QUN2RUo7QURSQTtFQW9GSSxjQUFBO0VBQ0Esc0JBQUE7QUN6RUo7QURaQTtFQXlGSSxjQUFBO0VBQ0Esc0JBQUE7QUMxRUo7QURoQkE7RUE4RkksY0FBQTtFQUNBLHNCQUFBO0FDM0VKO0FEcEJBO0VBbUdJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDNUVKO0FEekJBO0VBeUdJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDN0VKO0FEOUJBO0VBK0dJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQzlFSjtBRG5DQTtFQXFISSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUMvRUo7QUR4Q0E7RUEwQ1EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDUjtBRDdDQTtFQWdEUSxXQUFBO0FDQVI7QURoREE7RUFvRFEsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RSO0FEdERBO0VBMkRRLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FENURBO0VBa0VRLGVBQUE7QUNIUjtBREtRO0VBQ0ksZUFBQTtBQ0haO0FBM0RRO0VBQUE7SUFDSSxnQkFBQTtFQThEVjtBQUNGO0FBbkVBO0VBVVkseUJBQUE7QUE0RFo7QUF0RUE7RUFlUSxrQkFBQTtBQTBEUjtBQXhEUTtFQUFBO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0VBMkRWO0FBQ0Y7QUEvRUE7O0VDU1EsbUJBQUE7QUQwRVI7QUFuRkE7RUE2QlEsV0FBQTtFRWpDQSxnQkFBQTtFQUNBLG1CQUFBO0FGMkZSO0FBeEZBO0VBa0NRLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQXlEUjtBQWhHQTtFQTJDUSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUF3RFIiLCJmaWxlIjoicmVjZWlwdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuXG5cbiAgICAuZngtZmxleC1hdXRvIHtcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1mbGV4LW5vbmUge1xuICAgICAgICAuZngtZmxleC1ub25lLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZSB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUtbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtZmxleC1hdXRvLWdyb3ctbW9yZSB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1yb3cge1xuICAgICAgICAuZngtbGF5b3V0LXJvdy1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtY29sdW1uIHtcbiAgICAgICAgLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlciB7XG4gICAgICAgIC5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyIHtcbiAgICAgICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmxpbWl0ZWQtZmxleCB7XG4gICAgICAgIG1pbi13aWR0aDogMTcwcHg7XG4gICAgICAgIG1heC13aWR0aDogNTMwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC51bmxpbWl0ZWQtZmxleCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5saW1pdGVkLWZsZXgtZW5kIHtcbiAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxuXG4gICAgLmxhcmdlci1saW1pdGVkLWZsZXgtZW5kIHtcbiAgICAgICAgbWluLXdpZHRoOiAxNDNweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxNDVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG5cbiAgICAudGFibGUtc3BhY2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICAgICAgJi5sdC1tZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBNaXhpbnMgdG8gYXBwZWFzZSBwZXJmb3JtYW5jZVxuLmZ4LWZsZXgtYXV0by1taXhpbigpIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1ub25lLW1peGluKCkge1xuICAgIC8vIGxlc3NoaW50LWRpc2FibGUtbmV4dC1saW5lIHplcm9Vbml0XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZS1taXhpbigpIHtcbiAgICBmbGV4OiAxIDIgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1hdXRvLWdyb3ctbW9yZS1taXhpbigpIHtcbiAgICBmbGV4OiAyIDEgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtbGF5b3V0LXJvdy1taXhpbigpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL3NlY3Rpb25zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL2RpdmlkZXJzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgJ2NvbW1vbi91aS9jb250YWluZXJzL2Z4Um93L2RldGFpbHMubGVzcyc7XG5cbjpob3N0IHtcblxuICAgIGgyIHtcbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LW1kIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aXphcmQtdWkge1xuICAgICAgICBbd2l6YXJkLW5leHRdIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aXphcmQtdWkgKyBhIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHAsXG4gICAgc2VjdGlvbiB7XG4gICAgICAgIC5yZWZyZXNoLTIwMjAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Cb3R0b20oKTtcbiAgICB9XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fZGl2aWRlci0tbWFyZ2luVG9wQm90dG9tKCk7XG4gICAgfVxuXG4gICAgLnN1bW1hcnkge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMXB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICBtYXJnaW46IDBweCAtMTZweDtcbiAgICB9XG5cbiAgICAucGF5bWVudEFtb3VudCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBzbnVmZi1ncmF5O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG4iLCIucmVmcmVzaC0yMDIwIHtcbiAgICAvLyBEZXNrdG9wXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19faGVhZGVyVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luQm90dG9tIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3BIYWxmIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19idXR0b25Ub0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpcnN0SGVhZGVyVG9UaXRsZS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2FkZHJlc3NUb1BheW1lbnREaXNwbGF5LS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cbiAgICAvLyBNb2JpbGVcbiAgICAmLmx0LW1kLFxuICAgIC5sdC1tZCB7XG4gICAgICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLnJlZnJlc2gtMjAyMCB7XG4gICAgLnUtc3BhY2luZ19fZGl2aWRlci0tbWFyZ2luVG9wQm90dG9tIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 36600:
/*!********************************************************************************!*\
  !*** ./src/vehicles/eztag/add/components/reviewOrder/reviewOrder.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTagReviewOrderComponent": () => (/* binding */ AddTagReviewOrderComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var vehicles_vehicleCartBase_vehicleCartBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vehicles/vehicleCartBase/vehicleCartBase */ 91402);
/* harmony import */ var vehicles_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vehicles/common */ 35367);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../states */ 38957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frame/frame.component */ 506);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var cms_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cms/services */ 46693);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_review_order_components_review_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/review-order/components/review.-order.component */ 86822);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 38661);




















function AddTagReviewOrderComponent_review_order_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "review-order", 7);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("data", ctx_r0.reviewData)("ezTagMailingAddress", ctx_r0.mailingInfo)("isAddEzTag", true);
  }
}

class AddTagReviewOrderComponent extends vehicles_vehicleCartBase_vehicleCartBase__WEBPACK_IMPORTED_MODULE_2__.VehicleCartBase {
  constructor(parent, state, manager, cmsReplacementService, dialogService, toasterService, reviewOrderService, mailingService) {
    super(toasterService);
    this.parent = parent;
    this.state = state;
    this.manager = manager;
    this.cmsReplacementService = cmsReplacementService;
    this.dialogService = dialogService;
    this.toasterService = toasterService;
    this.reviewOrderService = reviewOrderService;
    this.mailingService = mailingService;
    this.deliveryMethod = {};
    this.paymentDueInfo = {};
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.parent.showStepper = true;
      _this.mailingInfo = yield _this.mailingService.getMailingAddress();
      _this.paymentDueInfo = yield _this.manager.getPaymentInfo();
      _this.cartTags = _this.manager.getVehicleInfoList();
      _this.deliveryMethod = _this.manager.getDeliveryMethod();
      _this.currentBalance = _this.manager.getCurrentBalance();
      _this.currentUser = _this.manager.getCurrentUser();
      const insertValues = {
        currentBalAmt: _this.currentBalance,
        minReqAmt: _this.paymentDueInfo.depositAmt,
        totalAmt: _this.paymentDueInfo.totalAmt
      };
      _this.pageCms.RebillToolTip = _this.cmsReplacementService.transformTemplate(_this.pageCms.RebillToolTip, insertValues);

      _this.setupReviewOrderData();

      _this.subscribeEvents();
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
        title: 'EZ TAGS REQUESTED',
        tags: this.cartTags,
        isPlate: false
      }],
      operations: {
        isEditable: true,
        isRemoveable: true,
        editContent: this.editModalCms,
        removeContent: this.deleteModalCms
      },
      stateList: this.stateList
    };
  }

  mapDeliveryMethod() {
    return {
      display: true,
      header: this.pageCms.DeliveryMethodTitle,
      type: this.deliveryMethod.deliveryMethod,
      operations: [{
        label: 'Edit',
        display: true,
        action: vehicles_common__WEBPACK_IMPORTED_MODULE_3__.Action.Edit,
        source: 'delivery-method'
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
        isOptIn: this.currentUser.rebillOptIn
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
    let hasMotorCycle = false;
    this.cartTags.forEach(tag => {
      if (tag.motorcycle) {
        hasMotorCycle = true;
        return;
      }
    });
    const motorcycleText = this.currentUser.rebillOptIn ? this.pageCms.MotorcycleTextForOptInRep : this.pageCms.MotorcycleTextForOptOutRep;
    return {
      display: true,
      contextDesc: this.pageCms.TagInfo,
      link: {
        linkDesc: this.pageCms.TagInfoModalLink,
        onClickContent: this.tagInfoModalCms
      },
      motorcycleText: hasMotorCycle ? motorcycleText : null
    };
  }

  subscribeEvents() {
    var _this2 = this;

    this.reviewOrderService.subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event) {
        if (event.action === vehicles_common__WEBPACK_IMPORTED_MODULE_3__.Action.Edit) {
          if (event.source === 'delivery-method') {
            _this2.editDeliveryMethod();
          }

          if (event.source === 'order-summary') {
            yield _this2.editVehicle(event.data.vehicleEdited, event.data.index);

            _this2.setupReviewOrderData();
          }
        }

        if (event.action === vehicles_common__WEBPACK_IMPORTED_MODULE_3__.Action.Remove) {
          if (event.source === 'order-summary') {
            yield _this2.removeVehicle(event.data.index);

            _this2.setupReviewOrderData();
          }
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  addEzTagReceiptClick(nextState) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const updated = yield _this3.mailingService.setMailingAddressOnAcctLevel();

      if (updated) {
        const res = yield _this3.manager.submitOrder();

        if (res) {
          // this.reviewOrderService.unsubscribe();
          yield _this3.state.go(nextState);
        }
      }
    })();
  }

  removeVehicle(index) {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.manager.removeVehicleInfoItem(index);
    })();
  }

  editVehicle(editVehicle, index) {
    var _this5 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const selectedEzTag = _this5.cartTags[index]; //This check is to check that if the plate has changed; checks for both state and plate number against plates currently in the cart

      if (selectedEzTag.licPlate !== editVehicle.licPlate || selectedEzTag.licState !== editVehicle.licState) {
        if (!_this5.checkIfLicExistsInCart(editVehicle.licPlate, editVehicle.licState)) {
          yield _this5.manager.editVehicleInfoItem(editVehicle, index);
        }
      } else {
        yield _this5.manager.editVehicleInfoItem(editVehicle, index);
      }
    })();
  }

  editDeliveryMethod() {
    this.state.go(_states__WEBPACK_IMPORTED_MODULE_4__.States.TagDeliveryMethod);
  }

  cancel(state) {
    var _this6 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        cmsContent: {
          Title: _this6.cancellationModal.Title,
          PrimaryContent: _this6.cancellationModal.LongDescription,
          AcceptBtn: 'No',
          CancelBtn: 'Yes'
        }
      };
      const res = yield _this6.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_1__.GenericCmsModalComponent, data);

      if (!res) {
        _this6.manager.clearData();

        yield _this6.state.go(state);
      }
    })();
  }

  ngOnDestroy() {
    this.reviewOrderService.unsubscribe();
  }

}

AddTagReviewOrderComponent.ɵfac = function AddTagReviewOrderComponent_Factory(t) {
  return new (t || AddTagReviewOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_5__.AddTagFrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_14__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_6__.VehiclesManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_7__.CmsReplacementService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_8__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_8__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](vehicles_common__WEBPACK_IMPORTED_MODULE_3__.ReviewOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_6__.MailingAddressService));
};

AddTagReviewOrderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: AddTagReviewOrderComponent,
  selectors: [["vehicles-addTag-review-component"]],
  inputs: {
    pageCms: "pageCms",
    deleteModalCms: "deleteModalCms",
    editModalCms: "editModalCms",
    replenishmentAmtModalCms: "replenishmentAmtModalCms",
    tagInfoModalCms: "tagInfoModalCms",
    cancellationModal: "cancellationModal",
    stateList: "stateList"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]],
  decls: 10,
  vars: 1,
  consts: [[1, "refresh-2020"], [3, "data", "ezTagMailingAddress", "isAddEzTag", 4, "ngIf"], [3, "next", "cancel"], ["wizard-next", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["wizard-cancel", ""], [3, "data", "ezTagMailingAddress", "isAddEzTag"]],
  template: function AddTagReviewOrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "page-centered-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddTagReviewOrderComponent_review_order_1_Template, 1, 3, "review-order", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "wizard-ui", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("next", function AddTagReviewOrderComponent_Template_wizard_ui_next_2_listener($event) {
        return ctx.addEzTagReceiptClick($event);
      })("cancel", function AddTagReviewOrderComponent_Template_wizard_ui_cancel_2_listener($event) {
        return ctx.cancel($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "PLACE ORDER");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.reviewData);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_9__.PageCenteredContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _common_review_order_components_review_order_component__WEBPACK_IMPORTED_MODULE_10__.ReviewOrderComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_12__.WizardNextDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutAlignDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon],
  styles: ["[_nghost-%COMP%]   tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%] {\n  width: 277px;\n  padding: 16px;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  line-height: 15px;\n  font-weight: 600;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%] {\n    left: calc(50vw - (277px / 2));\n    top: -92px;\n  }\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-next][_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-cancel][_ngcontent-%COMP%], [_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-previous][_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlld09yZGVyLmxlc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xcZm9udHMubGVzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjdXN0b21cXHNwYWNpbmdcXHNlY3Rpb25zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFFUSxZQUFBO0VBQ0EsYUFBQTtFQ0FKLHlCQUFBO0VERUksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQU9RO0VBQUE7SUFDSSw4QkFBQTtJQUNBLFVBQUE7RUFKVjtBQUNGO0FBUkE7RUFpQlEsY0FBQTtFRUhBLGdCQUFBO0FGRlI7QUFaQTtFQXFCWSx5QkFBQTtBQU5aO0FBZkE7O0VBMEJZLDBCQUFBO0FBUFo7QUFuQkE7RUErQlEsV0FBQTtBQVRSIiwiZmlsZSI6InJldmlld09yZGVyLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy9zZWN0aW9ucy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy9kaXZpZGVycy5sZXNzJztcblxuOmhvc3Qge1xuICAgIHRvb2wtdGlwIFt0b29sLXRpcC1tZXNzYWdlXSB7XG4gICAgICAgIHdpZHRoOiAyNzdweDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgLnQtYm9keS0tZm9udEZhbWlseSgpO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgICAgICBsZWZ0OiBjYWxjKDUwdncgLSAoMjc3cHggLyAyKSk7XG4gICAgICAgICAgICB0b3A6IC05MnB4O1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICB3aXphcmQtdWkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wKCk7XG5cbiAgICAgICAgW3dpemFyZC1uZXh0XSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgW3dpemFyZC1jYW5jZWxdLFxuICAgICAgICBbd2l6YXJkLXByZXZpb3VzXSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG4udC1oZWFkZXItLWZvbnRGYW1pbHkoKSB7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LWpvc3Q7XG59XG5cbi50LWJvZHktLWZvbnRGYW1pbHkoKSB7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LW1vbnRzZXJyYXQ7XG59XG4iLCIucmVmcmVzaC0yMDIwIHtcbiAgICAvLyBEZXNrdG9wXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19faGVhZGVyVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luQm90dG9tIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3BIYWxmIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19idXR0b25Ub0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpcnN0SGVhZGVyVG9UaXRsZS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2FkZHJlc3NUb1BheW1lbnREaXNwbGF5LS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cbiAgICAvLyBNb2JpbGVcbiAgICAmLmx0LW1kLFxuICAgIC5sdC1tZCB7XG4gICAgICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 56028:
/*!**********************************************************************************************!*\
  !*** ./src/vehicles/eztag/add/components/vehicleInformation/vehicleInformation.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTagVehicleInformationComponent": () => (/* binding */ AddTagVehicleInformationComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frame/frame.component */ 506);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../validation/focus.directive */ 39453);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_form_entry_vehicleInfo_vehicleInfo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../common/ui/form-entry/vehicleInfo/vehicleInfo.component */ 78676);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizardNext.directive */ 27358);














class AddTagVehicleInformationComponent {
  constructor(frame, state, responseErrorService, manager) {
    this.frame = frame;
    this.state = state;
    this.responseErrorService = responseErrorService;
    this.manager = manager;
    this.statesList = [];
    this.vehicleInfo = {
      licState: 'TX',
      vehicleClassCode: 2,
      motorcycle: false,
      temporaryLicPlate: null,
      acctTagSeq: 0,
      acctTagSeqSepcified: false,
      acctTagStatus: null,
      acctVehicleId: 0,
      activePbpTagExist: false,
      fullTagId: null,
      isMotorcycleDisabled: true,
      licPlate: null,
      nickname: null,
      nicknameHasBeenManuallyCopiedinApiAndIsForDisplayOnly: false,
      pbpEndDate: null,
      pbpStartDate: null,
      tagId: null,
      tagless_Desc: null,
      tagStatusDesc: null,
      tagTypeCode: 'T',
      vehicleClassDesc: null,
      vehicleColor: null,
      vehicleMake: null,
      vehicleModel: null,
      vehicleYear: null
    };
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.frame.showStepper = true;
    })();
  }

  cancel(state) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.state.go(state);
    })();
  }

  nextStep(state) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.manager.setVehicleInfoItem(_this3.vehicleInfo);

      if (_this3.manager.getVehicleInfoList().length > 0) {
        yield _this3.state.go(state);
      }
    })();
  }

}

AddTagVehicleInformationComponent.ɵfac = function AddTagVehicleInformationComponent_Factory(t) {
  return new (t || AddTagVehicleInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_1__.AddTagFrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_11__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_2__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_3__.VehiclesManagerService));
};

AddTagVehicleInformationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: AddTagVehicleInformationComponent,
  selectors: [["vehicles-addTag-information-component"]],
  inputs: {
    statesList: "statesList",
    cmsAddTagVehicleInfo: "cmsAddTagVehicleInfo",
    usStates: "usStates"
  },
  decls: 17,
  vars: 6,
  consts: [[1, "refresh-2020"], ["validation-focus", "", "novalidate", ""], ["Form", "ngForm"], [1, "u-spacing__fieldToSection--marginTop"], [1, "u-spacing__divider--marginTopBottom"], [3, "modalCms", "vehicleInfo", "stateList", "plateIsReadOnly"], [1, "u-spacing__buttonToField--marginTop"], [3, "disabled", "next"], ["Wizard", ""], ["wizard-next", ""], ["wizard-cancel", ""]],
  template: function AddTagVehicleInformationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "form", 1, 2)(3, "div", 3)(4, "card-container")(5, "header")(6, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "mat-divider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "vehicle-info-form-entry", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "section", 6)(11, "wizard-ui", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("next", function AddTagVehicleInformationComponent_Template_wizard_ui_next_11_listener($event) {
        return ctx.nextStep($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.cmsAddTagVehicleInfo.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("modalCms", ctx.cmsAddTagVehicleInfo)("vehicleInfo", ctx.vehicleInfo)("stateList", ctx.statesList)("plateIsReadOnly", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", _r0.submitted && _r0.invalid);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_4__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_5__.FocusDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_6__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__.MatDivider, _common_ui_form_entry_vehicleInfo_vehicleInfo_component__WEBPACK_IMPORTED_MODULE_7__.VehicleInfoComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_8__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_9__.WizardNextDirective],
  styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGVJbmZvcm1hdGlvbi5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRVEsV0FBQTtBQUhSIiwiZmlsZSI6InZlaGljbGVJbmZvcm1hdGlvbi5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 66955:
/*!*********************************************!*\
  !*** ./src/vehicles/eztag/add/constants.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsIds": () => (/* binding */ CmsIds)
/* harmony export */ });
const CmsIds = {
    AddTagFrame: '7C04329C-5E20-4B69-8C59-97F08B1B8FDB',
    AddTagVehicleInfo: '1D70B229-12FB-49F3-A719-A07EBAD3C3B5',
    EzTagCart: '8D6B8B8C-9811-42FD-A74F-0F8AA53986D5',
    AddAdditionalEzTag: '678D6DDC-1963-420D-8796-6E2194B364C2',
    DeleteTagCart: '45580D0C-8AED-43C6-A2A4-C518AFDFED34',
    EditTagCart: '7BA4DB40-276B-448D-A5D1-D07B38BD569C',
    ReviewTagOrder: 'F2931857-95CA-463E-81EF-A6A7FC7BE205',
    ReplenishmentAmtModal: '7FD13832-3572-4EBA-BB89-48454CB6FF82',
    TagInfoModal: '781C071D-31FB-4ABA-A73C-31CB8B722FC0',
    AddTagDeliveryMethod: 'CB8CC1BD-7C60-4925-90DB-6602487AE013',
    AddTagReceipt: '9E07D1A1-DEA1-4B7A-9CDF-B5DD842FDB01',
    CancellationModal: '70803808-5433-4A41-B099-3F4379151F98'
};


/***/ }),

/***/ 10778:
/*!******************************************!*\
  !*** ./src/vehicles/eztag/add/module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTagModule": () => (/* binding */ AddTagModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/flex-layout */ 45046);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pipes/module */ 20445);
/* harmony import */ var validation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validation/module */ 26186);
/* harmony import */ var storefront_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! storefront/module */ 89550);
/* harmony import */ var vehicles_common_vehicles_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vehicles/common/vehicles-common.module */ 82001);
/* harmony import */ var _routes_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes-config */ 46407);
/* harmony import */ var app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/routing */ 59389);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./states */ 38957);
/* harmony import */ var _components_frame_frame_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/frame/frame.component */ 506);
/* harmony import */ var _components_vehicleInformation_vehicleInformation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/vehicleInformation/vehicleInformation.component */ 56028);
/* harmony import */ var _components_deliveryMethod_deliveryMethod_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/deliveryMethod/deliveryMethod.component */ 3020);
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cart/cart.component */ 58862);
/* harmony import */ var _components_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/receipt/receipt.component */ 24028);
/* harmony import */ var _components_reviewOrder_reviewOrder_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/reviewOrder/reviewOrder.component */ 36600);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var vehicles_shared_services_receipt_data_helper_receipt_data_helper_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vehicles/shared/services/receipt-data-helper/receipt-data-helper.service */ 96471);
/* harmony import */ var profile_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! profile/services */ 8769);
/* harmony import */ var vehicles_eztag_replacement__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vehicles/eztag/replacement */ 62136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @uirouter/angular */ 99305);



























const componentDictionary = {
    [_states__WEBPACK_IMPORTED_MODULE_7__.States.AddTag]: _components_frame_frame_component__WEBPACK_IMPORTED_MODULE_8__.AddTagFrameComponent,
    [_states__WEBPACK_IMPORTED_MODULE_7__.States.TagVehicleInformation]: _components_vehicleInformation_vehicleInformation_component__WEBPACK_IMPORTED_MODULE_9__.AddTagVehicleInformationComponent,
    [_states__WEBPACK_IMPORTED_MODULE_7__.States.TagCart]: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_11__.AddTagCartComponent,
    [_states__WEBPACK_IMPORTED_MODULE_7__.States.TagDeliveryMethod]: _components_deliveryMethod_deliveryMethod_component__WEBPACK_IMPORTED_MODULE_10__.AddTagDeliveryMethodComponent,
    [_states__WEBPACK_IMPORTED_MODULE_7__.States.TagReviewOrder]: _components_reviewOrder_reviewOrder_component__WEBPACK_IMPORTED_MODULE_13__.AddTagReviewOrderComponent,
    [_states__WEBPACK_IMPORTED_MODULE_7__.States.TagReceipt]: _components_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_12__.AddTagReceiptComponent,
};
const routesWithComponents = _routes_config__WEBPACK_IMPORTED_MODULE_5__.RoutesConfig.map(route => ({
    ...route,
    component: componentDictionary[route.name]
}));
class AddTagModule {
}
AddTagModule.ɵfac = function AddTagModule_Factory(t) { return new (t || AddTagModule)(); };
AddTagModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AddTagModule });
AddTagModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [
        vehicles_shared__WEBPACK_IMPORTED_MODULE_14__.WebApiService,
        profile_services__WEBPACK_IMPORTED_MODULE_16__.WebApisService,
        vehicles_shared__WEBPACK_IMPORTED_MODULE_14__.VehiclesManagerService,
        _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe,
        _angular_common__WEBPACK_IMPORTED_MODULE_19__.TitleCasePipe,
        vehicles_shared_services_receipt_data_helper_receipt_data_helper_service__WEBPACK_IMPORTED_MODULE_15__.ReceiptDataHelperService,
        vehicles_eztag_replacement__WEBPACK_IMPORTED_MODULE_17__.ReplacementManagerService,
        vehicles_shared__WEBPACK_IMPORTED_MODULE_14__.VehicleOperationsService
    ], imports: [[
            (0,app_routing__WEBPACK_IMPORTED_MODULE_6__.DynamicRoutes)([common_module__WEBPACK_IMPORTED_MODULE_0__.ENVIRON_CONFIG], (environConfig) => routesWithComponents),
            common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule,
            pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__.FlexLayoutModule,
            validation_module__WEBPACK_IMPORTED_MODULE_2__.ValidationModule,
            storefront_module__WEBPACK_IMPORTED_MODULE_3__.StorefrontModule,
            vehicles_common_vehicles_common_module__WEBPACK_IMPORTED_MODULE_4__.VehiclesCommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AddTagModule, { declarations: [_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_11__.AddTagCartComponent,
        _components_deliveryMethod_deliveryMethod_component__WEBPACK_IMPORTED_MODULE_10__.AddTagDeliveryMethodComponent,
        _components_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_12__.AddTagReceiptComponent,
        _components_reviewOrder_reviewOrder_component__WEBPACK_IMPORTED_MODULE_13__.AddTagReviewOrderComponent,
        _components_vehicleInformation_vehicleInformation_component__WEBPACK_IMPORTED_MODULE_9__.AddTagVehicleInformationComponent,
        _components_frame_frame_component__WEBPACK_IMPORTED_MODULE_8__.AddTagFrameComponent], imports: [_uirouter_angular__WEBPACK_IMPORTED_MODULE_26__.UIRouterModule, common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule,
        pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__.FlexLayoutModule,
        validation_module__WEBPACK_IMPORTED_MODULE_2__.ValidationModule,
        storefront_module__WEBPACK_IMPORTED_MODULE_3__.StorefrontModule,
        vehicles_common_vehicles_common_module__WEBPACK_IMPORTED_MODULE_4__.VehiclesCommonModule] }); })();


/***/ }),

/***/ 46407:
/*!*************************************************!*\
  !*** ./src/vehicles/eztag/add/routes-config.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutesConfig": () => (/* binding */ RoutesConfig),
/* harmony export */   "stateGuardTag": () => (/* binding */ stateGuardTag)
/* harmony export */ });
/* harmony import */ var common_resolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/resolvers */ 1444);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var accountDashboard_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! accountDashboard/constants */ 75888);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states */ 38957);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ 66955);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ 53682);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vehicles/shared */ 40719);







const stateGuardTag = (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.StateGuard)(constants_module__WEBPACK_IMPORTED_MODULE_1__.webStorageConst.vehiclesTagCurrentStep, vehicles_shared__WEBPACK_IMPORTED_MODULE_6__.States.Root);
const RoutesConfig = [
    {
        name: _states__WEBPACK_IMPORTED_MODULE_3__.States.AddTag,
        abstract: true,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.MaintenanceFeature.Account),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.active),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.UsStatesResolver)('stateList'),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CountryResolver)('countryList'),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cmsAddTagFrame', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.AddTagFrame }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cmsAddTagVehicleInfo', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.AddTagVehicleInfo }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cmsAddTagDeliveryMethod', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.AddTagDeliveryMethod })
        ]
    },
    {
        name: _states__WEBPACK_IMPORTED_MODULE_3__.States.TagVehicleInformation,
        url: _routes__WEBPACK_IMPORTED_MODULE_5__.Routes.TagVehicleInformation,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.UsStatesResolver)('statesList'),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.MaintenanceFeature.Account),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.active),
            stateGuardTag({
                denyRefresh: true
            })
        ],
        wizard: {
            nextState: _states__WEBPACK_IMPORTED_MODULE_3__.States.TagCart,
            prevState: vehicles_shared__WEBPACK_IMPORTED_MODULE_6__.States.Root,
            cancelState: vehicles_shared__WEBPACK_IMPORTED_MODULE_6__.States.Root
        }
    },
    {
        name: _states__WEBPACK_IMPORTED_MODULE_3__.States.TagCart,
        url: _routes__WEBPACK_IMPORTED_MODULE_5__.Routes.TagCart,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.MaintenanceFeature.Account),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.active),
            stateGuardTag({
                denyRefresh: true
            }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('pageCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.EzTagCart }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('addAdditionalTagCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.AddAdditionalEzTag }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('deleteModalCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.DeleteTagCart }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('editModalCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.EditTagCart }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cancellationModal', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.CancellationModal }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.UsStatesResolver)('stateList')
        ],
        wizard: {
            nextState: _states__WEBPACK_IMPORTED_MODULE_3__.States.TagDeliveryMethod,
            prevState: _states__WEBPACK_IMPORTED_MODULE_3__.States.TagVehicleInformation,
            cancelState: vehicles_shared__WEBPACK_IMPORTED_MODULE_6__.States.Root
        }
    },
    {
        name: _states__WEBPACK_IMPORTED_MODULE_3__.States.TagDeliveryMethod,
        url: _routes__WEBPACK_IMPORTED_MODULE_5__.Routes.TagDeliveryMethod,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.MaintenanceFeature.Account),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.active),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cancellationModal', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.CancellationModal }),
            stateGuardTag({
                denyRefresh: true
            })
        ],
        wizard: {
            nextState: _states__WEBPACK_IMPORTED_MODULE_3__.States.TagReviewOrder,
            prevState: _states__WEBPACK_IMPORTED_MODULE_3__.States.TagCart,
            cancelState: vehicles_shared__WEBPACK_IMPORTED_MODULE_6__.States.Root
        }
    },
    {
        name: _states__WEBPACK_IMPORTED_MODULE_3__.States.TagReviewOrder,
        url: _routes__WEBPACK_IMPORTED_MODULE_5__.Routes.TagReviewOrder,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.MaintenanceFeature.Account),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.active),
            stateGuardTag({
                denyRefresh: true,
                explicitlyForbidden: [_states__WEBPACK_IMPORTED_MODULE_3__.States.TagReceipt]
            }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('pageCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.ReviewTagOrder }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('addAdditionalTagCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.AddAdditionalEzTag }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('deleteModalCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.DeleteTagCart }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('editModalCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.EditTagCart }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('replenishmentAmtModalCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.ReplenishmentAmtModal }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('tagInfoModalCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.TagInfoModal }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cancellationModal', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.CancellationModal }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.UsStatesResolver)('stateList')
        ],
        wizard: {
            nextState: _states__WEBPACK_IMPORTED_MODULE_3__.States.TagReceipt,
            prevState: _states__WEBPACK_IMPORTED_MODULE_3__.States.TagDeliveryMethod,
            cancelState: vehicles_shared__WEBPACK_IMPORTED_MODULE_6__.States.Root
        }
    },
    {
        name: _states__WEBPACK_IMPORTED_MODULE_3__.States.TagReceipt,
        url: _routes__WEBPACK_IMPORTED_MODULE_5__.Routes.TagReceipt,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.userRoles.active),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cmsContent', { mergeParams: true, ItemId: _constants__WEBPACK_IMPORTED_MODULE_4__.CmsIds.AddTagReceipt }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_1__.MaintenanceFeature.Account),
            stateGuardTag({
                denyRefresh: true,
                allowed: [_states__WEBPACK_IMPORTED_MODULE_3__.States.TagReviewOrder],
                explicitlyForbidden: [accountDashboard_constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Frame, vehicles_shared__WEBPACK_IMPORTED_MODULE_6__.States.Root]
            })
        ],
        wizard: {
            nextState: accountDashboard_constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.Frame,
            isEndState: true
        }
    }
];


/***/ })

}]);
//# sourceMappingURL=778.3791db3679e78a2f.js.map