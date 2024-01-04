"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[774],{

/***/ 38271:
/*!**********************************************************************!*\
  !*** ./src/vehicles/ezplate/add/components/frame/frame.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPlateFrameComponent": () => (/* binding */ AddPlateFrameComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/providers */ 61264);
/* harmony import */ var common_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/utilities */ 56516);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../states */ 74975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_wizard_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../common/ui/wizard/stepper/stepper.component */ 63457);
/* harmony import */ var _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../common/ui/containers/page/pageFilled.component */ 95556);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @uirouter/angular */ 99305);











function AddPlateFrameComponent_stepper_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "stepper", 2);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("steps", ctx_r0.steps)("stepMap", ctx_r0.stepMap);
  }
}

class AddPlateFrameComponent {
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
        name: _this.cmsAddPlateFrame.step1,
        background: 'secondary'
      }, {
        name: _this.cmsAddPlateFrame.step2,
        background: 'secondary'
      }, {
        name: _this.cmsAddPlateFrame.step3,
        background: 'secondary'
      }];
      _this.stepMap = {
        [_states__WEBPACK_IMPORTED_MODULE_3__.States.PlateVehicleInformation]: 1,
        [_states__WEBPACK_IMPORTED_MODULE_3__.States.PlateReviewOrder]: 2,
        [_states__WEBPACK_IMPORTED_MODULE_3__.States.PlateReceipt]: 3
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

AddPlateFrameComponent.ɵfac = function AddPlateFrameComponent_Factory(t) {
  return new (t || AddPlateFrameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_4__.VehiclesManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](common_providers__WEBPACK_IMPORTED_MODULE_1__.WindowRef));
};

AddPlateFrameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AddPlateFrameComponent,
  selectors: [["vehicles-addPlate-frame"]],
  inputs: {
    cmsAddPlateFrame: "cmsAddPlateFrame",
    stateList: "stateList",
    countryList: "countryList"
  },
  decls: 4,
  vars: 1,
  consts: [[1, "refresh-2020", "u-spacing--widthFill"], [3, "steps", "stepMap", 4, "ngIf"], [3, "steps", "stepMap"]],
  template: function AddPlateFrameComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "main", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddPlateFrameComponent_stepper_1_Template, 1, 2, "stepper", 1);
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

/***/ 22078:
/*!**************************************************************************!*\
  !*** ./src/vehicles/ezplate/add/components/receipt/receipt.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPlateReceiptComponent": () => (/* binding */ AddPlateReceiptComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/models */ 44367);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frame/frame.component */ 38271);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../storefront/services/storefrontUtility.service */ 18011);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../common/ui/display/currency/currency.component */ 32761);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../common/ui/display/payment/paymentDisplay.component */ 38321);
/* harmony import */ var _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../common/ui/display/address/addressDisplay.component */ 23204);
/* harmony import */ var _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../common/ui/containers/fxRow/fxRow.component */ 47553);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _common_vehicleCartRow_components_vehicleCartRow_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/vehicleCartRow/components/vehicleCartRow.component */ 70580);
/* harmony import */ var _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../storefront/utility/utility.component */ 10061);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../common/ui/modals/actionButtons/actionButtons.component */ 65380);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../pipes/dateWithTimeZone/dateWithTimeZone.pipe */ 29719);

























function AddPlateReceiptComponent_div_29_section_5_address_display_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "address-display", 19);
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("address", ctx_r7.billingInfo.billingType === ctx_r7.BillingType.Credit ? ctx_r7.billingInfo.credit : ctx_r7.billingInfo.eft)("international", ctx_r7.billingInfo.billingType === ctx_r7.BillingType.Credit ? ctx_r7.billingInfo.credit.international : ctx_r7.billingInfo.eft.international)("showLabels", false)("showEdit", false);
  }
}

function AddPlateReceiptComponent_div_29_section_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "payment-display", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "article", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, AddPlateReceiptComponent_div_29_section_5_address_display_3_Template, 1, 4, "address-display", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("billingType", ctx_r6.billingInfo.billingType)("bankDetails", ctx_r6.billingInfo.eft)("creditCard", ctx_r6.billingInfo.credit)("hideTitle", true)("showAccountNumber", true)("showNameOnCard", true)("showLabels", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r6.billingInfo && ctx_r6.billingInfo.billingType);
  }
}

function AddPlateReceiptComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div")(1, "header", 0)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](5, AddPlateReceiptComponent_div_29_section_5_Template, 4, 8, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r0.cmsContent.billingInfo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0.billingInfo);
  }
}

function AddPlateReceiptComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "vehicle-cart-row-component", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const plate_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("canRemove", false)("isPlate", true)("canEdit", false)("ezTag", plate_r8);
  }
}

function AddPlateReceiptComponent_section_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "section")(1, "action-buttons", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("main", function AddPlateReceiptComponent_section_44_Template_action_buttons_main_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12);

      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](5);

      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r11.proceed(_r10);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3, "PROCEED");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](4, "wizard-ui", null, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}

function AddPlateReceiptComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "section", 25)(1, "wizard-ui", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("next", function AddPlateReceiptComponent_ng_template_45_Template_wizard_ui_next_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r13.nextStep($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function AddPlateReceiptComponent_ng_template_45_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r15.viewVehiclesClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("reverseOrder", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r5.cmsContent.accountDashboard, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r5.cmsContent.manageMyVehicles);
  }
}

class AddPlateReceiptComponent {
  constructor(frame, state, manager, storefrontUtilityService) {
    this.frame = frame;
    this.state = state;
    this.manager = manager;
    this.storefrontUtilityService = storefrontUtilityService;
    this.plates = [];
    this.BillingType = common_models__WEBPACK_IMPORTED_MODULE_1__.BillingType;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isKiosk = _this.storefrontUtilityService.isRunningAsKiosk && !_this.storefrontUtilityService.webStoreData.fullSiteMode;
      _this.paymentDate = new Date();
      _this.paymentAmount = (yield _this.manager.getPaymentInfo()).totalAmt;

      _this.getActInfo();

      _this.billingInfo = yield _this.manager.getBillingInfo();
      _this.plates = _this.manager.getVehicleInfoList();
    })();
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

      yield _this2.state.go(vehicles_shared__WEBPACK_IMPORTED_MODULE_2__.States.Root);
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

AddPlateReceiptComponent.ɵfac = function AddPlateReceiptComponent_Factory(t) {
  return new (t || AddPlateReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.AddPlateFrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_18__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_2__.VehiclesManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_4__.StorefrontUtilityService));
};

AddPlateReceiptComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
  type: AddPlateReceiptComponent,
  selectors: [["vehicles-addPlate-receipt-component"]],
  inputs: {
    cmsContent: "cmsContent"
  },
  decls: 47,
  vars: 24,
  consts: [["fxLayout", "row", "fxLayoutAlign", "space-between end"], ["fxLayout", "row", "fxLayoutAlign", "space-between end", 1, "summary", "paymentAmount"], [3, "value"], [1, "summary"], ["fxLayout", "column"], ["translation-skip", ""], [4, "ngIf"], [1, "u-spacing--widthFill"], ["fxLayout", "row", "fxLayoutAlign", "start start"], [3, "isLabel", "backgroundColorClass"], ["col-start", "", 1, "fx-flex-auto", "fx-layout-row", "fx-layout-align-start-center"], [1, "fx-flex-auto-shrink-more", "limited-flex"], ["fxLayout", "row", "fxLayoutAlign", "start start", "class", "u-spacing--widthFill", 4, "ngFor", "ngForOf"], ["storefront", ""], [4, "ngIf", "ngIfElse"], ["nonkiosk", ""], [3, "billingType", "bankDetails", "creditCard", "hideTitle", "showAccountNumber", "showNameOnCard", "showLabels"], [1, "u-spacing__addressToPaymentDisplay--marginTop"], [3, "address", "international", "showLabels", "showEdit", 4, "ngIf"], [3, "address", "international", "showLabels", "showEdit"], ["fxLayout", "row", "fxLayoutAlign", "start start", 1, "u-spacing--widthFill"], [3, "canRemove", "isPlate", "canEdit", "ezTag"], [3, "main"], ["action-main", ""], ["wizardUi", ""], ["fxLayout", "row", "fxLayout.lt-md", "column"], [3, "reverseOrder", "next"], ["wizard-next", ""], [3, "click"]],
  template: function AddPlateReceiptComponent_Template(rf, ctx) {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "header", 0)(21, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](23, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "section", 4)(25, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](29, AddPlateReceiptComponent_div_29_Template, 6, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "header", 0)(31, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](33, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "section", 7)(35, "div", 8)(36, "div")(37, "fx-row", 9)(38, "div", 10)(39, "mat-label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](41, AddPlateReceiptComponent_div_41_Template, 2, 4, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](42, "storefront-utility", null, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](44, AddPlateReceiptComponent_section_44_Template, 6, 0, "section", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](45, AddPlateReceiptComponent_ng_template_45_Template, 6, 3, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](46);

      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.Title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.cmsContent.ShortDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.cmsContent.LongDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", ctx.cmsContent.paymentAmount, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", ctx.paymentAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"](" ", ctx.cmsContent.paymentReceivedOn, " ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](17, 21, ctx.paymentDate, "dateTime4"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.replenishAmt, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.accountInfo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"](" ", ctx.cmsContent.accountName, ": ", ctx.actName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"]("", ctx.cmsContent.accountNumber, ": ", ctx.actNumber, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.isOptIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.platesOrdered, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("isLabel", true)("backgroundColorClass", "transparent-background");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.platesRequested, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.plates);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.isKiosk)("ngIfElse", _r4);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__.PageCenteredContainerComponent, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_6__.CardContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutAlignDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDivider, _common_ui_display_currency_currency_component__WEBPACK_IMPORTED_MODULE_7__.CurrencyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _common_ui_display_payment_paymentDisplay_component__WEBPACK_IMPORTED_MODULE_8__.PaymentDisplayComponent, _common_ui_display_address_addressDisplay_component__WEBPACK_IMPORTED_MODULE_9__.AddressDisplayComponent, _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_10__.FxRowComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _common_vehicleCartRow_components_vehicleCartRow_component__WEBPACK_IMPORTED_MODULE_11__.VehicleCartRowComponent, _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_12__.StorefrontUtilityComponent, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_13__.ActionButtonsComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_14__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_15__.WizardNextDirective],
  pipes: [_pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_16__.DateWithTimeZonePipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%] {\n  flex: 2 1 auto;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n}\n[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%] {\n  min-width: 170px;\n  max-width: 530px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 80px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%] {\n  min-width: 143px;\n  max-width: 145px;\n  width: 100%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-top: 16px;\n  }\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-next][_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]    + a[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]    + a[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 64px;\n  margin-top: 16px;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .summary[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 16px;\n  padding-bottom: 11px;\n  font-size: 16px;\n  line-height: 26px;\n  margin: 0px -16px;\n}\n[_nghost-%COMP%]   .paymentAmount[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #e0e0ef;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29tbW9uXFx1aVxcY29udGFpbmVyc1xcZnhSb3dcXGRldGFpbHMubGVzcyIsInJlY2VpcHQuY29tcG9uZW50Lmxlc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcY3VzdG9tXFxzcGFjaW5nXFxzZWN0aW9ucy5sZXNzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGN1c3RvbVxcc3BhY2luZ1xcZGl2aWRlcnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7QUNESjtBREFBO0VBSVEsYUFBQTtFQUNBLGtCQUFBO0FDRFI7QURKQTtFQThFSSxjQUFBO0VBQ0Esc0JBQUE7QUN2RUo7QURSQTtFQW9GSSxjQUFBO0VBQ0Esc0JBQUE7QUN6RUo7QURaQTtFQXlGSSxjQUFBO0VBQ0Esc0JBQUE7QUMxRUo7QURoQkE7RUE4RkksY0FBQTtFQUNBLHNCQUFBO0FDM0VKO0FEcEJBO0VBbUdJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDNUVKO0FEekJBO0VBeUdJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDN0VKO0FEOUJBO0VBK0dJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQzlFSjtBRG5DQTtFQXFISSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUMvRUo7QUR4Q0E7RUEwQ1EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDUjtBRDdDQTtFQWdEUSxXQUFBO0FDQVI7QURoREE7RUFvRFEsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RSO0FEdERBO0VBMkRRLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FENURBO0VBa0VRLGVBQUE7QUNIUjtBREtRO0VBQ0ksZUFBQTtBQ0haO0FBM0RRO0VBQUE7SUFDSSxnQkFBQTtFQThEVjtBQUNGO0FBbkVBO0VBVVkseUJBQUE7QUE0RFo7QUF0RUE7RUFlUSxrQkFBQTtBQTBEUjtBQXhEUTtFQUFBO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0VBMkRWO0FBQ0Y7QUEvRUE7O0VDU1EsbUJBQUE7QUQwRVI7QUFuRkE7RUE2QlEsV0FBQTtFRWpDQSxnQkFBQTtFQUNBLG1CQUFBO0FGMkZSO0FBeEZBO0VBa0NRLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQXlEUjtBQWhHQTtFQTJDUSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUF3RFIiLCJmaWxlIjoicmVjZWlwdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuXG5cbiAgICAuZngtZmxleC1hdXRvIHtcbiAgICAgICAgLmZ4LWZsZXgtYXV0by1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1mbGV4LW5vbmUge1xuICAgICAgICAuZngtZmxleC1ub25lLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZSB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tc2hyaW5rLW1vcmUtbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtZmxleC1hdXRvLWdyb3ctbW9yZSB7XG4gICAgICAgIC5meC1mbGV4LWF1dG8tZ3Jvdy1tb3JlLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1yb3cge1xuICAgICAgICAuZngtbGF5b3V0LXJvdy1taXhpbigpO1xuICAgIH1cblxuICAgIC5meC1sYXlvdXQtY29sdW1uIHtcbiAgICAgICAgLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKTtcbiAgICB9XG5cbiAgICAuZngtbGF5b3V0LWFsaWduLXN0YXJ0LWNlbnRlciB7XG4gICAgICAgIC5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyIHtcbiAgICAgICAgLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCk7XG4gICAgfVxuXG4gICAgLmxpbWl0ZWQtZmxleCB7XG4gICAgICAgIG1pbi13aWR0aDogMTcwcHg7XG4gICAgICAgIG1heC13aWR0aDogNTMwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC51bmxpbWl0ZWQtZmxleCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5saW1pdGVkLWZsZXgtZW5kIHtcbiAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxuXG4gICAgLmxhcmdlci1saW1pdGVkLWZsZXgtZW5kIHtcbiAgICAgICAgbWluLXdpZHRoOiAxNDNweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxNDVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG5cbiAgICAudGFibGUtc3BhY2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICAgICAgJi5sdC1tZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBNaXhpbnMgdG8gYXBwZWFzZSBwZXJmb3JtYW5jZVxuLmZ4LWZsZXgtYXV0by1taXhpbigpIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1ub25lLW1peGluKCkge1xuICAgIC8vIGxlc3NoaW50LWRpc2FibGUtbmV4dC1saW5lIHplcm9Vbml0XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZ4LWZsZXgtYXV0by1zaHJpbmstbW9yZS1taXhpbigpIHtcbiAgICBmbGV4OiAxIDIgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtZmxleC1hdXRvLWdyb3ctbW9yZS1taXhpbigpIHtcbiAgICBmbGV4OiAyIDEgYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZngtbGF5b3V0LXJvdy1taXhpbigpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZ4LWxheW91dC1jb2x1bW4tbWl4aW4oKSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5meC1sYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyLW1peGluKCkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZ4LWxheW91dC1hbGlnbi1lbmQtY2VudGVyLW1peGluKCkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL3NlY3Rpb25zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL2RpdmlkZXJzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgJ2NvbW1vbi91aS9jb250YWluZXJzL2Z4Um93L2RldGFpbHMubGVzcyc7XG5cbjpob3N0IHtcblxuICAgIGgyIHtcbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LW1kIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aXphcmQtdWkge1xuICAgICAgICBbd2l6YXJkLW5leHRdIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aXphcmQtdWkgKyBhIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuXG4gICAgICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHAsXG4gICAgc2VjdGlvbiB7XG4gICAgICAgIC5yZWZyZXNoLTIwMjAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Cb3R0b20oKTtcbiAgICB9XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fZGl2aWRlci0tbWFyZ2luVG9wQm90dG9tKCk7XG4gICAgfVxuXG4gICAgLnN1bW1hcnkge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMXB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICBtYXJnaW46IDBweCAtMTZweDtcbiAgICB9XG5cbiAgICAucGF5bWVudEFtb3VudCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBzbnVmZi1ncmF5O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG4iLCIucmVmcmVzaC0yMDIwIHtcbiAgICAvLyBEZXNrdG9wXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19faGVhZGVyVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luQm90dG9tIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3BIYWxmIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19idXR0b25Ub0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpcnN0SGVhZGVyVG9UaXRsZS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2FkZHJlc3NUb1BheW1lbnREaXNwbGF5LS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cbiAgICAvLyBNb2JpbGVcbiAgICAmLmx0LW1kLFxuICAgIC5sdC1tZCB7XG4gICAgICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLnJlZnJlc2gtMjAyMCB7XG4gICAgLnUtc3BhY2luZ19fZGl2aWRlci0tbWFyZ2luVG9wQm90dG9tIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 37385:
/*!**********************************************************************************!*\
  !*** ./src/vehicles/ezplate/add/components/reviewOrder/reviewOrder.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPlateReviewComponent": () => (/* binding */ AddPlateReviewComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var vehicles_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vehicles/common */ 35367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frame/frame.component */ 38271);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var cms_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cms/services */ 46693);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_review_order_components_review_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/review-order/components/review.-order.component */ 86822);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 38661);


















function AddPlateReviewComponent_review_order_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "review-order", 7);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("data", ctx_r0.reviewData);
  }
}

class AddPlateReviewComponent {
  constructor(frame, state, manager, cmsReplacementService, dialogService, reviewOrderService) {
    this.frame = frame;
    this.state = state;
    this.manager = manager;
    this.cmsReplacementService = cmsReplacementService;
    this.dialogService = dialogService;
    this.reviewOrderService = reviewOrderService;
    this.paymentDueInfo = {};
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.frame.showStepper = true;
      _this.paymentDueInfo = yield _this.manager.getPaymentInfo();
      _this.cartTags = _this.manager.getVehicleInfoList();
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
        title: 'EZ PLATES REQUESTED',
        tags: this.cartTags ? [this.cartTags[0]] : [],
        isPlate: true
      }],
      operations: {
        isEditable: true,
        isRemoveable: false,
        editContent: this.editModalCms
      },
      stateList: this.stateList
    };
  }

  mapDeliveryMethod() {
    return {
      display: false
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
      tagInfo: {
        display: false
      },
      paymentDueInfo: {
        tagSalesAmt: this.paymentDueInfo.tagSalesAmt,
        totalAmt: this.paymentDueInfo.totalAmt,
        rebillTooltip: this.pageCms.RebillToolTip
      }
    };
  }

  subscribeEvents() {
    this.reviewOrderService.subscribe(event => {
      if (event.action === vehicles_common__WEBPACK_IMPORTED_MODULE_2__.Action.Edit) {
        if (event.source === 'order-summary') {
          this.editVehicle(event.data.vehicleEdited, event.data.index);
        }
      }
    });
  }

  addEzPlateReceiptClick(nextState) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _this2.manager.submitOrder();

      if (res) {
        yield _this2.state.go(nextState);
      }
    })();
  }

  editVehicle(editVehicle, index) {
    this.manager.editVehicleInfoItem(editVehicle, index);
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

  ngOnDestroy() {
    this.reviewOrderService.unsubscribe();
  }

}

AddPlateReviewComponent.ɵfac = function AddPlateReviewComponent_Factory(t) {
  return new (t || AddPlateReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.AddPlateFrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_12__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_4__.VehiclesManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_5__.CmsReplacementService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](vehicles_common__WEBPACK_IMPORTED_MODULE_2__.ReviewOrderService));
};

AddPlateReviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: AddPlateReviewComponent,
  selectors: [["vehicles-addPlate-review-component"]],
  inputs: {
    pageCms: "pageCms",
    editModalCms: "editModalCms",
    replenishmentAmtModalCms: "replenishmentAmtModalCms",
    cancellationModal: "cancellationModal",
    stateList: "stateList"
  },
  decls: 10,
  vars: 1,
  consts: [[1, "refresh-2020"], [3, "data", 4, "ngIf"], [3, "next", "cancel"], ["wizard-next", ""], ["wizard-previous", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "previous-arrow"], ["wizard-cancel", ""], [3, "data"]],
  template: function AddPlateReviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "page-centered-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, AddPlateReviewComponent_review_order_1_Template, 1, 1, "review-order", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "wizard-ui", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("next", function AddPlateReviewComponent_Template_wizard_ui_next_2_listener($event) {
        return ctx.addEzPlateReceiptClick($event);
      })("cancel", function AddPlateReviewComponent_Template_wizard_ui_cancel_2_listener($event) {
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
  styles: ["tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%] {\n  width: 277px;\n  padding: 16px;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  line-height: 15px;\n  font-weight: 600;\n}\n@media screen and (max-width: 959.98px) {\n  tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%] {\n    left: calc(50vw - (277px / 2));\n    top: -92px;\n  }\n}\ncard-container[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}\nwizard-ui[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}\nwizard-ui[_ngcontent-%COMP%]   [wizard-next][_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\nwizard-ui[_ngcontent-%COMP%]   [wizard-cancel][_ngcontent-%COMP%], wizard-ui[_ngcontent-%COMP%]   [wizard-previous][_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\nmat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlld09yZGVyLmxlc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xcZm9udHMubGVzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjdXN0b21cXHNwYWNpbmdcXHNlY3Rpb25zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQ0NBLHlCQUFBO0VEQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQU1JO0VBQUE7SUFDSSw4QkFBQTtJQUNBLFVBQUE7RUFITjtBQUNGO0FBTUE7RUFDSSxjQUFBO0VFVEksZ0JBQUE7QUZNUjtBQU9BO0VBQ0ksY0FBQTtFRU5JLGdCQUFBO0FGRVI7QUFHQTtFQUtRLHlCQUFBO0FBTFI7QUFBQTs7RUFVUSwwQkFBQTtBQU5SO0FBVUE7RUFDSSxXQUFBO0FBUkoiLCJmaWxlIjoicmV2aWV3T3JkZXIubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL3NlY3Rpb25zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL2RpdmlkZXJzLmxlc3MnO1xuXG50b29sLXRpcCBbdG9vbC10aXAtbWVzc2FnZV0ge1xuICAgIHdpZHRoOiAyNzdweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIC50LWJvZHktLWZvbnRGYW1pbHkoKTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTB2dyAtICgyNzdweCAvIDIpKTtcbiAgICAgICAgdG9wOiAtOTJweDtcbiAgICB9XG59XG5cbmNhcmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luVG9wKCk7XG59XG5cbndpemFyZC11aSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wKCk7XG5cbiAgICBbd2l6YXJkLW5leHRdIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG5cbiAgICBbd2l6YXJkLWNhbmNlbF0sXG4gICAgW3dpemFyZC1wcmV2aW91c10ge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG59XG5cbm1hdC1kaXZpZGVyIHtcbiAgICB3aWR0aDogQHdpZHRoLWRpdmlkZXI7XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cblxuLnQtaGVhZGVyLS1mb250RmFtaWx5KCkge1xuICAgIGZvbnQtZmFtaWx5OiBAZm9udC1qb3N0O1xufVxuXG4udC1ib2R5LS1mb250RmFtaWx5KCkge1xuICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xufVxuIiwiLnJlZnJlc2gtMjAyMCB7XG4gICAgLy8gRGVza3RvcFxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2hlYWRlclRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpbkJvdHRvbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wSGFsZiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fYnV0dG9uVG9GaWVsZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maXJzdEhlYWRlclRvVGl0bGUtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fY2FyZFRvQ2FyZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19hZGRyZXNzVG9QYXltZW50RGlzcGxheS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG4gICAgLy8gTW9iaWxlXG4gICAgJi5sdC1tZCxcbiAgICAubHQtbWQge1xuICAgICAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 54718:
/*!************************************************************************************************!*\
  !*** ./src/vehicles/ezplate/add/components/vehicleInformation/vehicleInformation.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPlateVehicleInformationComponent": () => (/* binding */ AddPlateVehicleInformationComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frame/frame.component */ 38271);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../validation/focus.directive */ 39453);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_form_entry_vehicleInfo_vehicleInfo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../common/ui/form-entry/vehicleInfo/vehicleInfo.component */ 78676);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_matDateTimePicker_hctraMatDateTimePickerWithInput_hctraMatDateTimePickerWithInput_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../common/ui/matDateTimePicker/hctraMatDateTimePickerWithInput/hctraMatDateTimePickerWithInput.component */ 94994);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _validation_min_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../validation/min.directive */ 44854);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../pipes/safeHtml.pipe */ 49985);





















const _c0 = ["Form"];

function AddPlateVehicleInformationComponent_div_27_ng_container_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Please enter # of days");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function AddPlateVehicleInformationComponent_div_27_ng_container_1_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const error_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](error_r4.value);
  }
}

function AddPlateVehicleInformationComponent_div_27_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddPlateVehicleInformationComponent_div_27_ng_container_1_p_1_Template, 2, 0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddPlateVehicleInformationComponent_div_27_ng_container_1_p_2_Template, 2, 1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngSwitch", error_r4.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngSwitchCase", "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngSwitchCase", "invalidNum");
  }
}

function AddPlateVehicleInformationComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddPlateVehicleInformationComponent_div_27_ng_container_1_Template, 3, 3, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](2);

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _r0.submitted);
  }
}

class AddPlateVehicleInformationComponent {
  constructor(frame, state, manager) {
    this.frame = frame;
    this.state = state;
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
      tagTypeCode: 'P',
      vehicleClassDesc: null,
      vehicleColor: null,
      vehicleMake: null,
      vehicleModel: null,
      vehicleYear: null
    };
    this.startDateTime = new Date();
    this.endDateTime = new Date();
    this.isDateTimeInvalidMsg = '';
    this.isDateTimeInvalid = false;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const vehicles = _this.manager.getVehicleInfoList() || [];

      if (vehicles.length > 0) {
        _this.vehicleInfo = vehicles[0];

        _this.setDates();
      } else {
        _this.numberOfDays = 3;
        _this.startDateTime = new Date();
        _this.endDateTime = new Date();

        _this.endDateTime.setDate(_this.startDateTime.getDate() + _this.numberOfDays);
      }

      _this.manager.clearData();

      _this.frame.showStepper = true;
    })();
  }

  setDates() {
    this.startDateTime = new Date(this.vehicleInfo.pbpStartDate);
    this.endDateTime = new Date(this.vehicleInfo.pbpEndDate);
    const timeInMilisec = this.endDateTime.getTime() - this.startDateTime.getTime() + 60000;
    this.numberOfDays = Math.floor(timeInMilisec / 1000 / 60 / 60 / 24);
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
      _this3.validationDateTime();

      if (!_this3.isDateTimeInvalid) {
        _this3.vehicleInfo.pbpStartDate = _this3.startDateTime.toISOString();
        _this3.vehicleInfo.pbpEndDate = _this3.endDateTime.toISOString();
        _this3.vehicleInfo.activePbpTagExist = true;
        yield _this3.manager.setVehicleInfoItem(_this3.vehicleInfo);

        if (_this3.manager.getVehicleInfoList().length > 0) {
          yield _this3.state.go(state);
        }
      }
    })();
  }

  validationDateTime() {
    this.isDateTimeInvalid = false;
    const formGroupStartDate = this.form.form.controls['startDate'];
    formGroupStartDate.setErrors(null);
    formGroupStartDate.controls['calendarInput'].setErrors(null);
    const formGroupEndData = this.form.form.controls['endDate'];
    formGroupEndData.setErrors(null);
    formGroupEndData.controls['calendarInput'].setErrors(null);
    const startTime = new Date(this.startDateTime.getTime() + 10 * 60000);

    if (startTime < new Date()) {
      this.isDateTimeInvalidMsg = 'Start date can not be less than current date';
      this.isDateTimeInvalid = true;
      formGroupStartDate.setErrors({
        invalid: this.isDateTimeInvalidMsg
      });
      formGroupStartDate.controls['calendarInput'].setErrors({
        invalid: this.isDateTimeInvalidMsg
      });
    }

    if (this.startDateTime > this.endDateTime) {
      this.isDateTimeInvalidMsg = 'Please select start date greater than end date';
      this.isDateTimeInvalid = true;
      formGroupStartDate.setErrors({
        invalid: this.isDateTimeInvalidMsg
      });
      formGroupStartDate.controls['calendarInput'].setErrors({
        invalid: this.isDateTimeInvalidMsg
      });
    }

    const currentDate = new Date();
    const newDate = new Date();
    newDate.setDate(currentDate.getDate() + 2556);

    if (this.endDateTime > newDate) {
      this.isDateTimeInvalidMsg = 'Please select end date less than 2556 days';
      this.isDateTimeInvalid = true;
      formGroupEndData.controls['calendarInput'].setErrors({
        invalid: this.isDateTimeInvalidMsg
      });
    }
  }

  onDateEntered() {
    if (this.startDateTime !== null && this.endDateTime !== null) {
      const timeInMilisec = this.endDateTime.getTime() - this.startDateTime.getTime() + 60000;
      const daysBetweenDates = Math.floor(timeInMilisec / 1000 / 60 / 60 / 24);

      if (daysBetweenDates > 0) {
        this.numberOfDays = daysBetweenDates;
      } else {
        this.numberOfDays = 3;
        this.onNumberOfDaysEntered();
      }

      this.validationDateTime();
    }
  }

  onNumberOfDaysEntered() {
    if (this.startDateTime !== null && this.endDateTime !== null) {
      const newEndDateTime = new Date(this.startDateTime);
      newEndDateTime.setDate(this.startDateTime.getDate() + this.numberOfDays);
      this.endDateTime = newEndDateTime;
    }
  }

}

AddPlateVehicleInformationComponent.ɵfac = function AddPlateVehicleInformationComponent_Factory(t) {
  return new (t || AddPlateVehicleInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_frame_frame_component__WEBPACK_IMPORTED_MODULE_1__.AddPlateFrameComponent), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_14__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](vehicles_shared__WEBPACK_IMPORTED_MODULE_2__.VehiclesManagerService));
};

AddPlateVehicleInformationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: AddPlateVehicleInformationComponent,
  selectors: [["vehicles-addPlate-information-component"]],
  viewQuery: function AddPlateVehicleInformationComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    }
  },
  inputs: {
    statesList: "statesList",
    cmsAddPlateVehicleInfo: "cmsAddPlateVehicleInfo",
    usStates: "usStates"
  },
  decls: 48,
  vars: 21,
  consts: [[1, "refresh-2020"], ["validation-focus", "", "novalidate", ""], ["Form", "ngForm"], [1, "u-spacing__fieldToSection--marginTop"], [1, "u-spacing__divider--marginTopBottom"], [3, "innerHtml"], [3, "modalCms", "vehicleInfo", "stateList", "plateIsReadOnly", "showTempPlate"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "padding-top", "32px"], ["fxShow", "", "fxHide.lt-sm", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "8px"], ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "expanded-column"], [3, "name", "dateTimeModel", "dateTimeModelChange"], ["fxLayout", "column", "fxLayoutAlign", "start flex-end", 1, "expanded-column", 3, "error-check"], ["type", "number", "id", "numberOfDays", "name", "numberOfDays", "aria-label", "Number of Days", "min", "0", "onkeypress", "return event.charCode >= 48", "required", "", "ngPattern", "/^([0-9]+)$/", 2, "max-width", "80px", "padding-right", "9px", 3, "ngModel", "ngModelChange"], ["NumberOfDaysCheck", "ngModel"], ["role", "alert", 4, "ngFor", "ngForOf"], ["fxShow", "", "fxHide.lt-sm", "", 3, "name", "dateTimeModel", "dateTimeModelChange"], ["fxShow", "", "fxHide.lt-md", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxShow", "", "fxHide.gt-xs", "", 2, "padding-top", "32px"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxShow", "", "fxHide.gt-xs", ""], ["fxShow", "", "fxHide.lt-xs", "", 3, "name", "dateTimeModel", "dateTimeModelChange"], [1, "u-spacing__buttonToField--marginTop"], [3, "disabled", "next"], ["Wizard", ""], ["wizard-next", ""], ["wizard-cancel", ""], ["role", "alert"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], ["class", "help-block", 4, "ngSwitchCase"], [1, "help-block"]],
  template: function AddPlateVehicleInformationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "form", 1, 2)(3, "div", 3)(4, "card-container")(5, "header")(6, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "mat-divider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "article", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](10, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "vehicle-info-form-entry", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "section", 7)(13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "START DATE/TIME");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "NO. OF DAYS");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "mat-label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "END DATE/TIME");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "section", 9)(20, "div", 10)(21, "hctra-mat-datetime-picker-with-input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("dateTimeModelChange", function AddPlateVehicleInformationComponent_Template_hctra_mat_datetime_picker_with_input_dateTimeModelChange_21_listener($event) {
        ctx.startDateTime = $event;
        return ctx.onDateEntered();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "Time displayed in CDT");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div", 12)(25, "input", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function AddPlateVehicleInformationComponent_Template_input_ngModelChange_25_listener($event) {
        ctx.numberOfDays = $event;
        return ctx.onNumberOfDaysEntered();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](27, AddPlateVehicleInformationComponent_div_27_Template, 2, 1, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](28, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "div", 10)(30, "hctra-mat-datetime-picker-with-input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("dateTimeModelChange", function AddPlateVehicleInformationComponent_Template_hctra_mat_datetime_picker_with_input_dateTimeModelChange_30_listener($event) {
        ctx.endDateTime = $event;
        return ctx.onDateEntered();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "mat-label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32, "Time displayed in CDT");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "section", 18)(34, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35, "END DATE/TIME");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "section", 19)(37, "hctra-mat-datetime-picker-with-input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("dateTimeModelChange", function AddPlateVehicleInformationComponent_Template_hctra_mat_datetime_picker_with_input_dateTimeModelChange_37_listener($event) {
        ctx.endDateTime = $event;
        return ctx.onDateEntered();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "section", 19)(39, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40, "Time displayed in CDT");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "section", 21)(42, "wizard-ui", 22, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("next", function AddPlateVehicleInformationComponent_Template_wizard_ui_next_42_listener($event) {
        return ctx.nextStep($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45, "NEXT");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](2);

      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](26);

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.cmsAddPlateVehicleInfo.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](10, 17, ctx.cmsAddPlateVehicleInfo.LongDescription), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("modalCms", ctx.cmsAddPlateVehicleInfo)("vehicleInfo", ctx.vehicleInfo)("stateList", ctx.statesList)("plateIsReadOnly", false)("showTempPlate", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("name", "startDate")("dateTimeModel", ctx.startDateTime);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("error-check", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.numberOfDays);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](28, 19, _r1.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("name", "endDate")("dateTimeModel", ctx.endDateTime);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("name", "endDate")("dateTimeModel", ctx.endDateTime);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", _r0.submitted && _r0.invalid);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_3__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_4__.FocusDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_5__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, _common_ui_form_entry_vehicleInfo_vehicleInfo_component__WEBPACK_IMPORTED_MODULE_6__.VehicleInfoComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutAlignDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__.DefaultShowHideDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutGapDirective, _common_ui_matDateTimePicker_hctraMatDateTimePickerWithInput_hctraMatDateTimePickerWithInput_component__WEBPACK_IMPORTED_MODULE_7__.HctraMatDateTimePickerWithInputComponent, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_8__.ErrorCheckDirective, _validation_min_directive__WEBPACK_IMPORTED_MODULE_9__.MinDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgSwitchCase, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_11__.WizardNextDirective],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_12__.SafeHtmlPipe, _angular_common__WEBPACK_IMPORTED_MODULE_20__.KeyValuePipe],
  styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n.expanded-column[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  height: 100%;\n  align-self: stretch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGVJbmZvcm1hdGlvbi5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRVEsV0FBQTtBQUhSO0FBT0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBTEoiLCJmaWxlIjoidmVoaWNsZUluZm9ybWF0aW9uLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcblxuOmhvc3Qge1xuICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xuICAgIH1cbn1cblxuLmV4cGFuZGVkLWNvbHVtbiB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xufVxuIl19 */"]
});

/***/ }),

/***/ 80103:
/*!***********************************************!*\
  !*** ./src/vehicles/ezplate/add/constants.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsIds": () => (/* binding */ CmsIds)
/* harmony export */ });
const CmsIds = {
    AddPlateFrame: '423E7543-569C-4E0C-B547-1EC843B758E5',
    ReviewPlateOrder: 'B138CBA6-E888-48FE-BE59-E86213E741A0',
    AddPlateReceipt: 'E96700C2-5029-4CED-8B8E-C1897F35ADCD',
    AddPlateVehicleInfo: 'B1C34397-15A2-4AF4-85C2-00825A3F79D1',
    CancellationModal: '70803808-5433-4A41-B099-3F4379151F98',
    EditTagCart: '7BA4DB40-276B-448D-A5D1-D07B38BD569C',
    ReplenishmentAmtModal: '7FD13832-3572-4EBA-BB89-48454CB6FF82'
};


/***/ }),

/***/ 4774:
/*!********************************************!*\
  !*** ./src/vehicles/ezplate/add/module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPlateModule": () => (/* binding */ AddPlateModule)
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
/* harmony import */ var _routes_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes-config */ 65170);
/* harmony import */ var app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/routing */ 59389);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./states */ 74975);
/* harmony import */ var _components_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/receipt/receipt.component */ 22078);
/* harmony import */ var _components_reviewOrder_reviewOrder_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/reviewOrder/reviewOrder.component */ 37385);
/* harmony import */ var _components_vehicleInformation_vehicleInformation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/vehicleInformation/vehicleInformation.component */ 54718);
/* harmony import */ var _components_frame_frame_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/frame/frame.component */ 38271);
/* harmony import */ var vehicles_shared_services_receipt_data_helper_receipt_data_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vehicles/shared/services/receipt-data-helper/receipt-data-helper.service */ 96471);
/* harmony import */ var profile_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! profile/services */ 8769);
/* harmony import */ var vehicles_eztag_replacement__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vehicles/eztag/replacement */ 62136);
/* harmony import */ var vehicles_common_vehicles_common_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vehicles/common/vehicles-common.module */ 82001);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @uirouter/angular */ 99305);

























const componentDictionary = {
    [_states__WEBPACK_IMPORTED_MODULE_6__.States.AddEzPlate]: _components_frame_frame_component__WEBPACK_IMPORTED_MODULE_10__.AddPlateFrameComponent,
    [_states__WEBPACK_IMPORTED_MODULE_6__.States.PlateVehicleInformation]: _components_vehicleInformation_vehicleInformation_component__WEBPACK_IMPORTED_MODULE_9__.AddPlateVehicleInformationComponent,
    [_states__WEBPACK_IMPORTED_MODULE_6__.States.PlateReviewOrder]: _components_reviewOrder_reviewOrder_component__WEBPACK_IMPORTED_MODULE_8__.AddPlateReviewComponent,
    [_states__WEBPACK_IMPORTED_MODULE_6__.States.PlateReceipt]: _components_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_7__.AddPlateReceiptComponent,
};
const routesWithComponents = _routes_config__WEBPACK_IMPORTED_MODULE_4__.RoutesConfig.map(route => ({
    ...route,
    component: componentDictionary[route.name]
}));
class AddPlateModule {
}
AddPlateModule.ɵfac = function AddPlateModule_Factory(t) { return new (t || AddPlateModule)(); };
AddPlateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AddPlateModule });
AddPlateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [
        vehicles_shared__WEBPACK_IMPORTED_MODULE_15__.WebApiService,
        profile_services__WEBPACK_IMPORTED_MODULE_12__.WebApisService,
        vehicles_shared__WEBPACK_IMPORTED_MODULE_15__.VehiclesManagerService,
        _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe,
        _angular_common__WEBPACK_IMPORTED_MODULE_17__.TitleCasePipe,
        vehicles_shared_services_receipt_data_helper_receipt_data_helper_service__WEBPACK_IMPORTED_MODULE_11__.ReceiptDataHelperService,
        vehicles_eztag_replacement__WEBPACK_IMPORTED_MODULE_13__.ReplacementManagerService,
        vehicles_shared__WEBPACK_IMPORTED_MODULE_15__.VehicleOperationsService
    ], imports: [[
            (0,app_routing__WEBPACK_IMPORTED_MODULE_5__.DynamicRoutes)([common_module__WEBPACK_IMPORTED_MODULE_0__.ENVIRON_CONFIG], (environConfig) => routesWithComponents),
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
            vehicles_common_vehicles_common_module__WEBPACK_IMPORTED_MODULE_14__.VehiclesCommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AddPlateModule, { declarations: [_components_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_7__.AddPlateReceiptComponent,
        _components_reviewOrder_reviewOrder_component__WEBPACK_IMPORTED_MODULE_8__.AddPlateReviewComponent,
        _components_vehicleInformation_vehicleInformation_component__WEBPACK_IMPORTED_MODULE_9__.AddPlateVehicleInformationComponent,
        _components_frame_frame_component__WEBPACK_IMPORTED_MODULE_10__.AddPlateFrameComponent], imports: [_uirouter_angular__WEBPACK_IMPORTED_MODULE_24__.UIRouterModule, common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
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
        vehicles_common_vehicles_common_module__WEBPACK_IMPORTED_MODULE_14__.VehiclesCommonModule] }); })();


/***/ }),

/***/ 65170:
/*!***************************************************!*\
  !*** ./src/vehicles/ezplate/add/routes-config.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutesConfig": () => (/* binding */ RoutesConfig),
/* harmony export */   "stateGuardPlate": () => (/* binding */ stateGuardPlate)
/* harmony export */ });
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./states */ 74975);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ 80103);
/* harmony import */ var common_resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/resolvers */ 1444);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var accountDashboard_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! accountDashboard/constants */ 75888);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ 15463);
/* harmony import */ var vehicles_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vehicles/shared */ 40719);







const stateGuardPlate = (0,common_resolvers__WEBPACK_IMPORTED_MODULE_2__.StateGuard)(constants_module__WEBPACK_IMPORTED_MODULE_3__.webStorageConst.vehiclesPlateCurrentStep, vehicles_shared__WEBPACK_IMPORTED_MODULE_6__.States.Root);
const RoutesConfig = [
    {
        name: _states__WEBPACK_IMPORTED_MODULE_0__.States.AddEzPlate,
        abstract: true,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_2__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.MaintenanceFeature.Account),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_2__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.userRoles.active),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_2__.UsStatesResolver)('stateList'),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_2__.CountryResolver)('countryList'),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_2__.CmsResolve)('cmsAddPlateFrame', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_1__.CmsIds.AddPlateFrame }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_2__.CmsResolve)('cmsAddPlateVehicleInfo', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_1__.CmsIds.AddPlateVehicleInfo })
        ]
    },
    {
        name: _states__WEBPACK_IMPORTED_MODULE_0__.States.PlateVehicleInformation,
        url: _routes__WEBPACK_IMPORTED_MODULE_5__.Routes.PlateVehicleInformation,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_2__.UsStatesResolver)('statesList'),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_2__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.MaintenanceFeature.Account),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_2__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.userRoles.active),
            stateGuardPlate({
                denyRefresh: true
            })
        ],
        wizard: {
            nextState: _states__WEBPACK_IMPORTED_MODULE_0__.States.PlateReviewOrder,
            prevState: vehicles_shared__WEBPACK_IMPORTED_MODULE_6__.States.Root,
            cancelState: vehicles_shared__WEBPACK_IMPORTED_MODULE_6__.States.Root
        }
    },
    {
        name: _states__WEBPACK_IMPORTED_MODULE_0__.States.PlateReviewOrder,
        url: _routes__WEBPACK_IMPORTED_MODULE_5__.Routes.PlateReviewOrder,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_2__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.MaintenanceFeature.Account),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_2__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.userRoles.active),
            stateGuardPlate({
                denyRefresh: true,
                allowed: [_states__WEBPACK_IMPORTED_MODULE_0__.States.PlateVehicleInformation]
            }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_2__.CmsResolve)('pageCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_1__.CmsIds.ReviewPlateOrder }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_2__.CmsResolve)('editModalCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_1__.CmsIds.EditTagCart }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_2__.CmsResolve)('replenishmentAmtModalCms', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_1__.CmsIds.ReplenishmentAmtModal }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_2__.CmsResolve)('cancellationModal', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_1__.CmsIds.CancellationModal }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_2__.UsStatesResolver)('stateList')
        ],
        wizard: {
            nextState: _states__WEBPACK_IMPORTED_MODULE_0__.States.PlateReceipt,
            prevState: _states__WEBPACK_IMPORTED_MODULE_0__.States.PlateVehicleInformation,
            cancelState: vehicles_shared__WEBPACK_IMPORTED_MODULE_6__.States.Root
        }
    },
    {
        name: _states__WEBPACK_IMPORTED_MODULE_0__.States.PlateReceipt,
        url: _routes__WEBPACK_IMPORTED_MODULE_5__.Routes.PlateReceipt,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_2__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.userRoles.active),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_2__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.MaintenanceFeature.Account),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_2__.CmsResolve)('cmsContent', { mergeParams: true, ItemId: _constants__WEBPACK_IMPORTED_MODULE_1__.CmsIds.AddPlateReceipt }),
            stateGuardPlate({
                denyRefresh: true,
                allowed: [_states__WEBPACK_IMPORTED_MODULE_0__.States.PlateReviewOrder],
                explicitlyForbidden: [accountDashboard_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.Frame, vehicles_shared__WEBPACK_IMPORTED_MODULE_6__.States.Root]
            })
        ],
        wizard: {
            nextState: accountDashboard_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.Frame,
            isEndState: true
        }
    },
];


/***/ })

}]);
//# sourceMappingURL=774.8a6859e31b2d9fad.js.map