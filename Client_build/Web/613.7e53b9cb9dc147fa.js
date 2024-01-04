"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[613],{

/***/ 41451:
/*!******************************************************!*\
  !*** ./src/vehicles/eztag/edit/editTag.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditTagComponent": () => (/* binding */ EditTagComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../validation/focus.directive */ 39453);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_form_entry_vehicleInfo_vehicleInfo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/ui/form-entry/vehicleInfo/vehicleInfo.component */ 78676);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/ui/modals/actionButtons/actionButtons.component */ 65380);












const _c0 = function (a0) { return { "active": a0 }; };
class EditTagComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    get tag() {
        return this.dialogRef.data.tag;
    }
    get showStatus() {
        return this.dialogRef.data.showStatus;
    }
    get usStates() {
        return this.dialogRef.data.statesList;
    }
    get editVehicleCmsContent() {
        return this.dialogRef.data.cmsAddTagVehicleInfo;
    }
    get cmsModalContent() {
        return this.dialogRef.data.cmsModalValues;
    }
    get isActive() {
        return this.dialogRef.data.tag.acctTagStatus === 'A';
    }
    exitModal(save) {
        this.dialogRef.data.saveTag = save;
        this.dialogRef.close(this.dialogRef.data);
    }
}
EditTagComponent.ɵfac = function EditTagComponent_Factory(t) { return new (t || EditTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_0__.DialogRef)); };
EditTagComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: EditTagComponent, selectors: [["vehicles-edit-tag"]], decls: 19, vars: 9, consts: [["hasAlternateBackgroundColor", "true", 1, "refresh-2020"], ["validation-focus", "", "novalidate", ""], ["Form", "ngForm"], ["translation-skip", ""], [3, "ngClass"], [3, "modalCms", "vehicleInfo", "stateList"], [3, "main", "alt"], ["action-main", ""], ["action-alt", ""]], template: function EditTagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "form", 1, 2)(3, "card-container")(4, "header")(5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "section")(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "strong", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "vehicle-info-form-entry", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "action-buttons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("main", function EditTagComponent_Template_action_buttons_main_14_listener() { return ctx.exitModal(true); })("alt", function EditTagComponent_Template_action_buttons_alt_14_listener() { return ctx.exitModal(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx.cmsModalContent.title, ": ", ctx.tag.fullTagId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c0, ctx.isActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.tag.tagStatusDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("modalCms", ctx.editVehicleCmsContent)("vehicleInfo", ctx.tag)("stateList", ctx.usStates);
    } }, directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_1__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_2__.FocusDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_3__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__.DefaultClassDirective, _common_ui_form_entry_vehicleInfo_vehicleInfo_component__WEBPACK_IMPORTED_MODULE_4__.VehicleInfoComponent, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_5__.ActionButtonsComponent], styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 20px;\n  width: 65px;\n}\n[_nghost-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   strong[_ngcontent-%COMP%] {\n  padding: 14px 1px 0px 18px;\n  display: block;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n[_nghost-%COMP%]   action-buttons[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  display: block;\n}\n[_nghost-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #018c25;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRUYWcubGVzcyIsIi4uXFwuLlxcLi5cXHN0eWxlc1xcY3VzdG9tXFxzcGFjaW5nXFxkaXZpZGVycy5sZXNzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFxjdXN0b21cXHNwYWNpbmdcXHNlY3Rpb25zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUNIUSxnQkFBQTtFQUNBLG1CQUFBO0VES0EsV0FBQTtBQUpSO0FBQ0E7RUFPUSxjQUFBO0FBTFI7QUFGQTtFQVdRLDBCQUFBO0VBQ0EsY0FBQTtBQU5SO0FBU0k7RUFBQTtJRVdJLGdCQUFBO0VGaEJOO0FBQ0Y7QUFYQTtFRXNCUSxnQkFBQTtFRkNBLGNBQUE7QUFSUjtBQWZBO0VBMkJRLGNBQUE7QUFUUiIsImZpbGUiOiJlZGl0VGFnLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy9zZWN0aW9ucy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy9kaXZpZGVycy5sZXNzJztcblxuOmhvc3Qge1xuICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX2RpdmlkZXItLW1hcmdpblRvcEJvdHRvbSgpO1xuICAgICAgICB3aWR0aDogQHdpZHRoLWRpdmlkZXI7XG4gICAgfVxuXG4gICAgbWF0LWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgc3Ryb25nIHtcbiAgICAgICAgcGFkZGluZzogMTRweCAxcHggMHB4IDE4cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fZmlyc3RIZWFkZXJUb1RpdGxlLS1tYXJnaW5Ub3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjdGlvbi1idXR0b25zIHtcbiAgICAgICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX2J1dHRvblRvRmllbGQtLW1hcmdpblRvcCgpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6IEBmdW4tZ3JlZW47XG4gICAgfVxufVxuIiwiLnJlZnJlc2gtMjAyMCB7XG4gICAgLnUtc3BhY2luZ19fZGl2aWRlci0tbWFyZ2luVG9wQm90dG9tIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59XG4iLCIucmVmcmVzaC0yMDIwIHtcbiAgICAvLyBEZXNrdG9wXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19faGVhZGVyVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luQm90dG9tIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3BIYWxmIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19idXR0b25Ub0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpcnN0SGVhZGVyVG9UaXRsZS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2FkZHJlc3NUb1BheW1lbnREaXNwbGF5LS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cbiAgICAvLyBNb2JpbGVcbiAgICAmLmx0LW1kLFxuICAgIC5sdC1tZCB7XG4gICAgICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 20858:
/*!************************************************!*\
  !*** ./src/vehicles/eztag/reactivate/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagReactivateManagerService": () => (/* reexport safe */ _services_manager_tag_reactivate_manager_service__WEBPACK_IMPORTED_MODULE_1__.TagReactivateManagerService),
/* harmony export */   "TagReactivateStatus": () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_0__.TagReactivateStatus)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ 60434);
/* harmony import */ var _services_manager_tag_reactivate_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/manager/tag-reactivate-manager.service */ 13787);


//export * from './module';


/***/ }),

/***/ 60434:
/*!*************************************************!*\
  !*** ./src/vehicles/eztag/reactivate/models.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagReactivateStatus": () => (/* binding */ TagReactivateStatus)
/* harmony export */ });
var TagReactivateStatus;
(function (TagReactivateStatus) {
    TagReactivateStatus[TagReactivateStatus["Pass"] = 0] = "Pass";
    TagReactivateStatus[TagReactivateStatus["Fail"] = 1] = "Fail";
    TagReactivateStatus[TagReactivateStatus["UserCancel"] = 2] = "UserCancel";
})(TagReactivateStatus || (TagReactivateStatus = {}));


/***/ }),

/***/ 52185:
/*!*************************************************!*\
  !*** ./src/vehicles/eztag/reactivate/module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagReactivateModule": () => (/* binding */ TagReactivateModule)
/* harmony export */ });
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/index */ 50795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 28596);


class TagReactivateModule {
}
TagReactivateModule.ɵfac = function TagReactivateModule_Factory(t) { return new (t || TagReactivateModule)(); };
TagReactivateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TagReactivateModule });
TagReactivateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        _services_index__WEBPACK_IMPORTED_MODULE_0__.TagReactivateFacadeService,
        _services_index__WEBPACK_IMPORTED_MODULE_0__.TagReactivateApiService,
        _services_index__WEBPACK_IMPORTED_MODULE_0__.TagReactivateManagerService
    ] });


/***/ }),

/***/ 83459:
/*!**********************************************************************************!*\
  !*** ./src/vehicles/eztag/reactivate/services/api/tag-reactivate-api.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagReactivateApiService": () => (/* binding */ TagReactivateApiService)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _common_services_httpService_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/services/httpService/http.service */ 18407);



class TagReactivateApiService {
  constructor(httpService) {
    this.httpService = httpService;
  }

  reactivate(req) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = '/api/sessions/ManageVehicles/ReactivateEZTag';
      const response = yield _this.httpService.post(url, req);
      return response;
    })();
  }

}

TagReactivateApiService.ɵfac = function TagReactivateApiService_Factory(t) {
  return new (t || TagReactivateApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_common_services_httpService_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService));
};

TagReactivateApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: TagReactivateApiService,
  factory: TagReactivateApiService.ɵfac
});

/***/ }),

/***/ 72346:
/*!****************************************************************************************!*\
  !*** ./src/vehicles/eztag/reactivate/services/facade/tag-reactivate-facade.service.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagReactivateFacadeService": () => (/* binding */ TagReactivateFacadeService)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var vehicles_eztag_reactivate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vehicles/eztag/reactivate */ 20858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _api_tag_reactivate_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/tag-reactivate-api.service */ 83459);




class TagReactivateFacadeService {
  constructor(api) {
    this.api = api;
  }

  reactivate(vehicle) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const req = {
        action: 'REACTIVATE',
        tagId: vehicle.tagId,
        licPlate: vehicle.licPlate,
        licState: vehicle.licState,
        accountVehicleId: vehicle.acctVehicleId
      };
      const res = yield _this.api.reactivate(req);
      return _this.parseResponse(res);
    })();
  }

  parseResponse(result) {
    const res = {};

    if (result.successStatus) {
      res.status = vehicles_eztag_reactivate__WEBPACK_IMPORTED_MODULE_1__.TagReactivateStatus.Pass;
    } else {
      res.status = vehicles_eztag_reactivate__WEBPACK_IMPORTED_MODULE_1__.TagReactivateStatus.Fail;
      const errorKey = result.errors ? result.errors[0]['key'] : 'Error';
      const errorMessage = result.errors ? result.errors[0]['message'] : 'your Vehicle information has not been updated.';
      res.errors = [{
        key: errorKey,
        message: errorMessage
      }];
    }

    return res;
  }

}

TagReactivateFacadeService.ɵfac = function TagReactivateFacadeService_Factory(t) {
  return new (t || TagReactivateFacadeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_tag_reactivate_api_service__WEBPACK_IMPORTED_MODULE_2__.TagReactivateApiService));
};

TagReactivateFacadeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: TagReactivateFacadeService,
  factory: TagReactivateFacadeService.ɵfac
});

/***/ }),

/***/ 50795:
/*!*********************************************************!*\
  !*** ./src/vehicles/eztag/reactivate/services/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagReactivateApiService": () => (/* reexport safe */ _api_tag_reactivate_api_service__WEBPACK_IMPORTED_MODULE_0__.TagReactivateApiService),
/* harmony export */   "TagReactivateFacadeService": () => (/* reexport safe */ _facade_tag_reactivate_facade_service__WEBPACK_IMPORTED_MODULE_1__.TagReactivateFacadeService),
/* harmony export */   "TagReactivateManagerService": () => (/* reexport safe */ _manager_tag_reactivate_manager_service__WEBPACK_IMPORTED_MODULE_2__.TagReactivateManagerService)
/* harmony export */ });
/* harmony import */ var _api_tag_reactivate_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/tag-reactivate-api.service */ 83459);
/* harmony import */ var _facade_tag_reactivate_facade_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facade/tag-reactivate-facade.service */ 72346);
/* harmony import */ var _manager_tag_reactivate_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manager/tag-reactivate-manager.service */ 13787);





/***/ }),

/***/ 13787:
/*!******************************************************************************************!*\
  !*** ./src/vehicles/eztag/reactivate/services/manager/tag-reactivate-manager.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagReactivateManagerService": () => (/* binding */ TagReactivateManagerService)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var vehicles_eztag_reactivate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vehicles/eztag/reactivate */ 20858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _facade_tag_reactivate_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../facade/tag-reactivate-facade.service */ 72346);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/services */ 8784);






class TagReactivateManagerService {
  constructor(facade, dialogService) {
    this.facade = facade;
    this.dialogService = dialogService;
  }

  reactivate(data) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this.getStatus(data);
    })();
  }

  getStatus(data) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _this2.openModal(data);

      if (result) {
        return _this2.checkReactivateStatus(data.vehicle);
      } else {
        return {
          status: vehicles_eztag_reactivate__WEBPACK_IMPORTED_MODULE_2__.TagReactivateStatus.UserCancel
        };
      }
    })();
  }

  openModal(data) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modalContent = {
        cmsContent: {
          AcceptBtn: data.sitecoreContent ? data.sitecoreContent['accept'] : '',
          CancelBtn: data.sitecoreContent ? data.sitecoreContent['cancel'] : '',
          PrimaryContent: data.sitecoreContent ? data.sitecoreContent.LongDescription : '',
          Title: `${data.sitecoreContent ? data.sitecoreContent.Title : ''}: ${data.ezTagNum}`
        }
      };
      return yield _this3.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_1__.GenericCmsModalComponent, modalContent);
    })();
  }

  checkReactivateStatus(vehicle) {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this4.facade.reactivate(vehicle);
    })();
  }

}

TagReactivateManagerService.ɵfac = function TagReactivateManagerService_Factory(t) {
  return new (t || TagReactivateManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_facade_tag_reactivate_facade_service__WEBPACK_IMPORTED_MODULE_3__.TagReactivateFacadeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](common_services__WEBPACK_IMPORTED_MODULE_4__.DialogService));
};

TagReactivateManagerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: TagReactivateManagerService,
  factory: TagReactivateManagerService.ɵfac
});

/***/ }),

/***/ 42366:
/*!***************************************************************!*\
  !*** ./src/vehicles/manage/components/grid/grid.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridComponent": () => (/* binding */ GridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/ui/containers/fxRow/fxRow.component */ 47553);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);






function GridComponent_fx_row_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function GridComponent_fx_row_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "fx-row", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GridComponent_fx_row_0_ng_container_2_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isLabel", true)("backgroundColorClass", "transparent-background");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate);
} }
function GridComponent_fx_row_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
const _c1 = function (a0) { return { "visibility": a0 }; };
function GridComponent_fx_row_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "fx-row", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GridComponent_fx_row_1_ng_container_2_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10)(4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GridComponent_fx_row_1_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const vehicle_r4 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.handleArrowClick(vehicle_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const vehicle_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.rowTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, vehicle_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, ctx_r1.showArrow(vehicle_r4) ? "visible" : "hidden"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.editButtonText);
} }
function GridComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
class GridComponent {
    constructor() {
        this.arrowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    handleArrowClick(vehicle) {
        this.arrowClick.emit(vehicle);
    }
    showArrow(vehicle) {
        return this.showArrowPredicate ? this.showArrowPredicate(vehicle) : true;
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(); };
GridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["vehicles-grid"]], inputs: { headerTemplate: "headerTemplate", rowTemplate: "rowTemplate", emptyTemplate: "emptyTemplate", vehicles: "vehicles", showArrowPredicate: "showArrowPredicate", editButtonText: "editButtonText" }, outputs: { arrowClick: "arrowClick" }, decls: 3, vars: 3, consts: [[3, "isLabel", "backgroundColorClass", 4, "ngIf"], ["translation-skip", "", 4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet"], [3, "isLabel", "backgroundColorClass"], ["col-start", "", 1, "vehicle-header"], ["col-end", "", 1, "vehicle-header-end"], ["svgIcon", "previous-arrow"], ["translation-skip", ""], ["col-start", "", 1, "vehicle-row"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["col-end", "", 3, "ngStyle"], [1, "btn-edit", 3, "click"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, GridComponent_fx_row_0_Template, 5, 3, "fx-row", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GridComponent_fx_row_1_Template, 6, 8, "fx-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GridComponent_ng_container_2_Template, 1, 0, "ng-container", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.vehicles && ctx.vehicles.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.vehicles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", !ctx.vehicles || ctx.vehicles.length === 0 ? ctx.emptyTemplate : null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _common_ui_containers_fxRow_fxRow_component__WEBPACK_IMPORTED_MODULE_0__.FxRowComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultStyleDirective], styles: ["[_nghost-%COMP%] {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: start;\n  align-content: stretch;\n  align-items: stretch;\n  row-gap: 10px;\n}\n[_nghost-%COMP%]   fx-row[_ngcontent-%COMP%]:first-child {\n  height: 15px;\n}\n[_nghost-%COMP%]   .hide[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n@media not screen and (max-width: 959.98px) {\n  [_nghost-%COMP%] {\n    padding: 16px;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%] {\n    padding: 16px 0px;\n  }\n}\n[_nghost-%COMP%]   .vehicle-row[_ngcontent-%COMP%], [_nghost-%COMP%]   .vehicle-header[_ngcontent-%COMP%] {\n  width: 100%;\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n  align-items: center;\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n}\n[_nghost-%COMP%]   .vehicle-header[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  padding: 10px 0px;\n}\n[_nghost-%COMP%]   .vehicle-header-end[_ngcontent-%COMP%] {\n  width: 115px;\n}\n[_nghost-%COMP%]   .vehicle-row[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  height: 100%;\n  min-height: 70px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   .vehicle-row[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n}\n[_nghost-%COMP%]   .mat-icon[svgIcon='previous-arrow'][_ngcontent-%COMP%] {\n  transform: scale(0.6) translate(0px, 2px) rotate(180deg);\n  cursor: pointer;\n  margin-left: 10px;\n}\n[_nghost-%COMP%]   .btn-edit[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #007aff;\n  border: 1px solid #007aff;\n  padding: 0px 15px;\n  margin-left: 10px;\n}\n[_nghost-%COMP%]   .vehicle-header[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]    > .mat-icon[svgIcon='previous-arrow'][_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQUZKO0FBTEE7RUFVUSxZQUFBO0FBRlI7QUFSQTtFQWNRLGtCQUFBO0FBSFI7QUFNSTtFQUFBO0lBQ0ksYUFBQTtFQUhOO0FBQ0Y7QUFLSTtFQUFBO0lBQ0ksaUJBQUE7RUFGTjtBQUNGO0FBckJBOztFQTJCUSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0FBRlI7QUFoQ0E7RUFzQ1EseUJBQUE7RUFDQSxpQkFBQTtBQUhSO0FBcENBO0VBMkNRLFlBQUE7QUFKUjtBQXZDQTtFQStDUSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUxSO0FBT1E7RUFBQTtJQUNJLHVCQUFBO0VBSlY7QUFDRjtBQWpEQTtFQXlEUSx3REFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUxSO0FBdERBO0VBK0RRLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQU5SO0FBN0RBO0VBY1Esa0JBQUE7QUFrRFIiLCJmaWxlIjoiZ3JpZC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgcm93LWdhcDogMTBweDtcblxuICAgIGZ4LXJvdzpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICB9XG5cbiAgICAuaGlkZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG5cbiAgICBAbWVkaWEgbm90IEBicmVha3BvaW50LWx0LW1kIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDBweDtcbiAgICB9XG5cbiAgICAudmVoaWNsZS1yb3csXG4gICAgLnZlaGljbGUtaGVhZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2x1bW4tZ2FwOiAxMHB4O1xuICAgIH1cblxuICAgIC52ZWhpY2xlLWhlYWRlciB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIH1cblxuICAgIC52ZWhpY2xlLWhlYWRlci1lbmQge1xuICAgICAgICB3aWR0aDogMTE1cHg7XG4gICAgfVxuXG4gICAgLnZlaGljbGUtcm93IHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogNzBweDtcblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWljb25bc3ZnSWNvbj0ncHJldmlvdXMtYXJyb3cnXSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGUoMHB4LCAycHgpIHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cblxuICAgIC5idG4tZWRpdCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGNvbG9yOiAjMDA3YWZmO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YWZmO1xuICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLnZlaGljbGUtaGVhZGVyICsgZGl2ID4gLm1hdC1pY29uW3N2Z0ljb249J3ByZXZpb3VzLWFycm93J10ge1xuICAgICAgICAuaGlkZSgpO1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 90162:
/*!*********************************************************************!*\
  !*** ./src/vehicles/manage/components/landing/landing.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var common_ui_modals_genericCmsModal_genericCmsModal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/ui/modals/genericCmsModal/genericCmsModal.component */ 21920);
/* harmony import */ var constants_stateNames_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constants/stateNames.constants */ 40916);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var common_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/providers */ 61264);
/* harmony import */ var common_services_copyToExcel_copyToExcel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/services/copyToExcel/copyToExcel.service */ 51110);
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var vehicles_eztag_reactivate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vehicles/eztag/reactivate */ 20858);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var vehicles_eztag_edit_editTag_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vehicles/eztag/edit/editTag.component */ 41451);
/* harmony import */ var vehicles_ezplate_edit_editPlate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vehicles/ezplate/edit/editPlate.component */ 22211);
/* harmony import */ var vehicles_shared_models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vehicles/shared/models */ 77147);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./models */ 26349);
/* harmony import */ var vehicles_manage_services_sorting_sorting_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vehicles/manage/services/sorting/sorting-service */ 81939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../pipes/dateWithTimeZone/dateWithTimeZone.pipe */ 29719);
/* harmony import */ var vehicles_eztag_replacement__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vehicles/eztag/replacement */ 62136);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/flex-layout */ 62965);
/* harmony import */ var _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../storefront/utility/utility.component */ 10061);
/* harmony import */ var _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../common/ui/containers/page/pageFilled.component */ 95556);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_titleSubTitle_titleSubTitle_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../common/ui/titleSubTitle/titleSubTitle.component */ 25279);
/* harmony import */ var _common_ui_accountBalanceHeader_accountBalanceHeader_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../common/ui/accountBalanceHeader/accountBalanceHeader.component */ 95002);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_toolTip_toolTip_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../common/ui/toolTip/toolTip.component */ 63087);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../search/search.component */ 81802);
/* harmony import */ var _common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../common/ui/containers/card/cardDash.component */ 65663);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../common/ui/wizard/wizardNext.directive */ 27358);
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../grid/grid.component */ 42366);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ 52925);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/core */ 73067);

 // import { EditPlateComponent } from 'vehicles/editPlate/editPlate.component';











































const _c0 = ["GridContainer"];
const _c1 = ["GridCopyContainer"];

function LandingComponent_tool_tip_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "tool-tip", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](1, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("stayOpenOnHover", true)("ngClass.lt-md", "tool-tip-absolute");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", ctx_r1.disableAddEzPlatLinkError, " ");
  }
}

function LandingComponent_a_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function LandingComponent_a_28_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return ctx_r19.addMVU();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](ctx_r2.vehicleCmsContent.addMVU);
  }
}

function LandingComponent_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainer"](0);
  }
}

function LandingComponent_a_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function LandingComponent_a_32_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return ctx_r21.loadMore();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1, " Load More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
}

function LandingComponent_wizard_ui_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "wizard-ui")(1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](2, "PROCEED");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
}

function LandingComponent_ng_template_37_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "mat-label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](2, "mat-label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](4, "mat-label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](6, "mat-label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](8, "mat-label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](10, "mat-label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](12, "mat-label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate"]("mat-sort-header", ctx_r25.sortCol.nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](ctx_r25.vehicleCmsContent.nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate"]("mat-sort-header", ctx_r25.sortCol["year/make/model"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](ctx_r25.vehicleCmsContent.yearMakeModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate"]("mat-sort-header", ctx_r25.sortCol.licencePlate);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](ctx_r25.vehicleCmsContent.licensePlate);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate"]("mat-sort-header", ctx_r25.sortCol.eztagnum);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](ctx_r25.vehicleCmsContent.ezTagNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate"]("mat-sort-header", ctx_r25.sortCol.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](ctx_r25.vehicleCmsContent.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate"]("mat-sort-header", ctx_r25.sortCol.axles);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](ctx_r25.vehicleCmsContent.axles);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate"]("mat-sort-header", ctx_r25.sortCol.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](ctx_r25.vehicleCmsContent.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](ctx_r25.vehicleCmsContent.vehicleLicensePlate);
  }
}

function LandingComponent_ng_template_37_ng_template_3_span_13_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainer"](0);
  }
}

const _c2 = function (a0) {
  return {
    $implicit: a0
  };
};

function LandingComponent_ng_template_37_ng_template_3_span_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49)(1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function LandingComponent_ng_template_37_ng_template_3_span_13_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
      return ctx_r36.pendingActivationClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](2, LandingComponent_ng_template_37_ng_template_3_span_13_ng_container_2_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const vehicle_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);

    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](46);

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngTemplateOutlet", _r15)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](2, _c2, vehicle_r28));
  }
}

function LandingComponent_ng_template_37_ng_template_3_ng_template_14_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainer"](0);
  }
}

function LandingComponent_ng_template_37_ng_template_3_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, LandingComponent_ng_template_37_ng_template_3_ng_template_14_ng_container_0_Template, 1, 0, "ng-container", 20);
  }

  if (rf & 2) {
    const vehicle_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);

    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](46);

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngTemplateOutlet", _r15)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](2, _c2, vehicle_r28));
  }
}

function LandingComponent_ng_template_37_ng_template_3_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const vehicle_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](vehicle_r28.nickname);
  }
}

function LandingComponent_ng_template_37_ng_template_3_span_24_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainer"](0);
  }
}

function LandingComponent_ng_template_37_ng_template_3_span_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49)(1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function LandingComponent_ng_template_37_ng_template_3_span_24_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
      return ctx_r43.pendingActivationClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](2, LandingComponent_ng_template_37_ng_template_3_span_24_ng_container_2_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const vehicle_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);

    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](46);

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngTemplateOutlet", _r15)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](2, _c2, vehicle_r28));
  }
}

function LandingComponent_ng_template_37_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](4, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](6, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](8, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](10, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](12, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](13, LandingComponent_ng_template_37_ng_template_3_span_13_Template, 3, 4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](14, LandingComponent_ng_template_37_ng_template_3_ng_template_14_Template, 1, 4, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](17, LandingComponent_ng_template_37_ng_template_3_span_17_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](23, "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](24, LandingComponent_ng_template_37_ng_template_3_span_24_Template, 3, 4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](25, "wizard-ui", null, 48);
  }

  if (rf & 2) {
    const vehicle_r28 = ctx.$implicit;

    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](15);

    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](vehicle_r28.nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate3"]("", vehicle_r28.vehicleYear, " ", vehicle_r28.vehicleMake, " ", vehicle_r28.vehicleModel, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate2"]("", vehicle_r28.licState, "-", vehicle_r28.licPlate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](vehicle_r28.fullTagId === "0" ? "" : vehicle_r28.fullTagId);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](vehicle_r28.vehicleColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](vehicle_r28.vehicleClassCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", vehicle_r28.tagStatusDesc === ctx_r27.VehicleState.pendingActivation)("ngIfElse", _r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", vehicle_r28.nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate3"]("", vehicle_r28.vehicleYear, " ", vehicle_r28.vehicleMake, " ", vehicle_r28.vehicleModel, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate2"]("", vehicle_r28.licState, "-", vehicle_r28.licPlate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", vehicle_r28.tagStatusDesc === ctx_r27.VehicleState.pendingActivation)("ngIfElse", _r30);
  }
}

function LandingComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "vehicles-grid", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("arrowClick", function LandingComponent_ng_template_37_Template_vehicles_grid_arrowClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return ctx_r46.editEzTag($event);
    })("matSortChange", function LandingComponent_ng_template_37_Template_vehicles_grid_matSortChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r47);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return ctx_r48.sortData($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](1, LandingComponent_ng_template_37_ng_template_1_Template, 16, 15, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](3, LandingComponent_ng_template_37_ng_template_3_Template, 27, 19, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const vehicles_r23 = ctx.$implicit;

    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](2);

    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](4);

    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();

    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](42);

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("headerTemplate", _r24)("rowTemplate", _r26)("emptyTemplate", _r11)("vehicles", vehicles_r23)("showArrowPredicate", ctx_r8.canEdit)("editButtonText", ctx_r8.editBtnText);
  }
}

const _c3 = function (a0) {
  return {
    "disabled": a0
  };
};

function LandingComponent_ng_template_39_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "mat-label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1, "nickname");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](2, "mat-label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](3, "year/make/model");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](4, "mat-label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](5, "license plate");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](6, "mat-label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](7, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](8, "mat-label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](9, "start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](11, "vehicle/license plate");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](12, "mat-label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](13, "end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](14, "mat-label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](15, "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate"]("mat-sort-header", ctx_r51.sortCol.nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate"]("mat-sort-header", ctx_r51.sortCol["year/make/model"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate"]("mat-sort-header", ctx_r51.sortCol.licencePlate);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate"]("mat-sort-header", ctx_r51.sortCol.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate"]("mat-sort-header", ctx_r51.sortCol.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate"]("mat-sort-header", ctx_r51.sortCol.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](8, _c3, ctx_r51.isLtMd === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate"]("mat-sort-header", ctx_r51.sortCol.status);
  }
}

function LandingComponent_ng_template_39_ng_template_3_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const vehicle_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](vehicle_r54.nickname);
  }
}

function LandingComponent_ng_template_39_ng_template_3_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainer"](0);
  }
}

function LandingComponent_ng_template_39_ng_template_3_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainer"](0);
  }
}

function LandingComponent_ng_template_39_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](4, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](6, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](8, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](10, "dateWithTimeZone");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](13, "dateWithTimeZone");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](15, LandingComponent_ng_template_39_ng_template_3_span_15_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](21, "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](22, LandingComponent_ng_template_39_ng_template_3_ng_container_22_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](23, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](25, "dateWithTimeZone");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](28, "dateWithTimeZone");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](29, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](30, LandingComponent_ng_template_39_ng_template_3_ng_container_30_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const vehicle_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);

    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](48);

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](vehicle_r54.nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate3"]("", vehicle_r54.vehicleYear, " ", vehicle_r54.vehicleMake, " ", vehicle_r54.vehicleModel, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate2"]("", vehicle_r54.licState, "-", vehicle_r54.licPlate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](vehicle_r54.vehicleColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind2"](10, 21, vehicle_r54.pbpStartDate, "date3"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind2"](13, 24, vehicle_r54.pbpStartDate, "time1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", vehicle_r54.nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate3"]("", vehicle_r54.vehicleMake, " ", vehicle_r54.vehicleYear, " ", vehicle_r54.vehicleModel, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate2"]("", vehicle_r54.licState, "-", vehicle_r54.licPlate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngTemplateOutlet", _r17)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](33, _c2, vehicle_r54));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind2"](25, 27, vehicle_r54.pbpEndDate, "date3"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind2"](28, 30, vehicle_r54.pbpEndDate, "time1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngTemplateOutlet", _r17)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](35, _c2, vehicle_r54));
  }
}

function LandingComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "vehicles-grid", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("arrowClick", function LandingComponent_ng_template_39_Template_vehicles_grid_arrowClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return ctx_r59.editEzPlate($event);
    })("matSortChange", function LandingComponent_ng_template_39_Template_vehicles_grid_matSortChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r60);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return ctx_r61.sortData($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](1, LandingComponent_ng_template_39_ng_template_1_Template, 16, 10, "ng-template", null, 52, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](3, LandingComponent_ng_template_39_ng_template_3_Template, 31, 37, "ng-template", null, 53, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const vehicles_r49 = ctx.$implicit;

    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](2);

    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](4);

    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();

    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](42);

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("headerTemplate", _r50)("rowTemplate", _r52)("emptyTemplate", _r11)("vehicles", vehicles_r49)("showArrowPredicate", ctx_r10.canEdit)("editButtonText", ctx_r10.editBtnText);
  }
}

function LandingComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](1, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](2, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](ctx_r12.emptyVehicleCmsContent);
  }
}

function LandingComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](1, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](2, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](ctx_r14.emptyVehicleCmsContent);
  }
}

function LandingComponent_ng_template_45_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const vehicle_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", ctx_r63.getVehicleStateDescription(vehicle_r62), " ");
  }
}

function LandingComponent_ng_template_45_ng_template_1_ng_container_6_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("value", option_r70.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"]("", option_r70.key, " ");
  }
}

function LandingComponent_ng_template_45_ng_template_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](1, LandingComponent_ng_template_45_ng_template_1_ng_container_6_mat_option_1_Template, 2, 2, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const vehicle_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2).$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngForOf", ctx_r68.filterStatus(vehicle_r62));
  }
}

const _c4 = function (a0) {
  return {
    "active": a0
  };
};

function LandingComponent_ng_template_45_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "mat-select", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("selectionChange", function LandingComponent_ng_template_45_ng_template_1_Template_mat_select_selectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r74);

      const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](1);

      const vehicle_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().$implicit;
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      ctx_r72.doVehicleAction(vehicle_r62, ctx_r72.VehicleProduct.eztag, $event.value);
      return _r67.value = ctx_r72.VehicleAction.none;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](2, "mat-select-trigger")(3, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](5, "mat-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](6, LandingComponent_ng_template_45_ng_template_1_ng_container_6_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const vehicle_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().$implicit;
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("value", ctx_r65.VehicleAction.none);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](5, _c4, ctx_r65.isActive(vehicle_r62)));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", ctx_r65.isActive(vehicle_r62) ? ctx_r65.vehicleCmsContent.active : ctx_r65.vehicleCmsContent.inactive, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("value", ctx_r65.VehicleAction.none);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r65.eztagStatusValues);
  }
}

function LandingComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, LandingComponent_ng_template_45_span_0_Template, 2, 1, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](1, LandingComponent_ng_template_45_ng_template_1_Template, 7, 7, "ng-template", null, 63, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
  }

  if (rf & 2) {
    const vehicle_r62 = ctx.$implicit;

    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](2);

    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r16.filter.isActive && ctx_r16.getVehicleState(vehicle_r62) !== ctx_r16.VehicleState.active)("ngIfElse", _r64);
  }
}

function LandingComponent_ng_template_47_mat_select_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "mat-select", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("selectionChange", function LandingComponent_ng_template_47_mat_select_0_Template_mat_select_selectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r82);

      const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](1);

      const vehicle_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().$implicit;
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      ctx_r80.doVehicleAction(vehicle_r76, ctx_r80.VehicleProduct.ezplate, $event.value);
      return _r79.value = ctx_r80.VehicleAction.none;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](2, "mat-select-trigger")(3, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](5, "mat-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](6, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](8, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const vehicle_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().$implicit;
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("value", ctx_r77.VehicleAction.none);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](8, _c4, ctx_r77.isActive(vehicle_r76)));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", ctx_r77.isActive(vehicle_r76) ? ctx_r77.vehicleCmsContent.active : ctx_r77.vehicleCmsContent.inactive, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("value", ctx_r77.VehicleAction.none);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("value", ctx_r77.VehicleAction.activate);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](ctx_r77.vehicleCmsContent.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("value", ctx_r77.VehicleAction.deactivate);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](ctx_r77.vehicleCmsContent.inactivate);
  }
}

function LandingComponent_ng_template_47_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const vehicle_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().$implicit;
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", ctx_r78.getVehicleStateDescription(vehicle_r76), " ");
  }
}

function LandingComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, LandingComponent_ng_template_47_mat_select_0_Template, 10, 10, "mat-select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](1, LandingComponent_ng_template_47_span_1_Template, 2, 1, "span", 24);
  }

  if (rf & 2) {
    const vehicle_r76 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r18.getVehicleState(vehicle_r76) === ctx_r18.VehicleState.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r18.getVehicleState(vehicle_r76) !== ctx_r18.VehicleState.active);
  }
}

const _c5 = function (a0) {
  return {
    selected: a0
  };
};

const default_options = {
  pageSize: 25
};
class LandingComponent {
  constructor(vehiclesManagerService, responseErrorService, state, dialogService, manageVehicleOptions, window, dateWithTimeZonePipe, copyToExcelService, environmentConfig, tagReactivateMgrService, replacementManagerService, sortingService, mediaObserver, mailingService, toasterService) {
    this.vehiclesManagerService = vehiclesManagerService;
    this.responseErrorService = responseErrorService;
    this.state = state;
    this.dialogService = dialogService;
    this.window = window;
    this.dateWithTimeZonePipe = dateWithTimeZonePipe;
    this.copyToExcelService = copyToExcelService;
    this.environmentConfig = environmentConfig;
    this.tagReactivateMgrService = tagReactivateMgrService;
    this.replacementManagerService = replacementManagerService;
    this.sortingService = sortingService;
    this.mediaObserver = mediaObserver;
    this.mailingService = mailingService;
    this.toasterService = toasterService;
    this.eztagStatusValues = [];
    this.sortCol = vehicles_manage_services_sorting_sorting_service__WEBPACK_IMPORTED_MODULE_13__.SortColumn;
    this.VehicleState = _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState;
    this.VehicleProduct = vehicles_shared_models__WEBPACK_IMPORTED_MODULE_11__.VehicleProduct;
    this.VehicleAction = _models__WEBPACK_IMPORTED_MODULE_12__.VehicleAction;

    this.canEdit = vehicle => {
      switch (vehicle.tagStatusDesc) {
        case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState.pendingActivation:
          return false;

        case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState.inactive:
          return false;

        case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState.expired:
          return false;

        case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState.unknown:
          return false;

        default:
          return true;
      }
    };

    this.setEditBtnText = () => {
      switch (this.filter.product) {
        case vehicles_shared_models__WEBPACK_IMPORTED_MODULE_11__.VehicleProduct.eztag:
          return this.vehicleCmsContent.tagEditButton;

        case vehicles_shared_models__WEBPACK_IMPORTED_MODULE_11__.VehicleProduct.ezplate:
          return this.vehicleCmsContent.plateEditButton;

        default:
          return this.vehicleCmsContent.tagEditButton;
      }
    };

    this.pageCount = manageVehicleOptions.pageSize;
  } // todo: child shouldnot be accessed by index. Remove during new refactor


  get deactivateTagCmsContent() {
    var _a, _b, _c, _d;

    return {
      Title: (_a = this.vehicleCmsContent) === null || _a === void 0 ? void 0 : _a.Children[2].Title,
      AcceptBtn: (_b = this.vehicleCmsContent) === null || _b === void 0 ? void 0 : _b.Children[2]['accept'],
      PrimaryContent: (_c = this.vehicleCmsContent) === null || _c === void 0 ? void 0 : _c.Children[2].LongDescription,
      CancelBtn: (_d = this.vehicleCmsContent) === null || _d === void 0 ? void 0 : _d.Children[2]['cancel']
    };
  }

  // todo: child shouldnot be accessed by index. Remove during new refactor
  get activatePlateCmsContent() {
    var _a, _b, _c, _d;

    return {
      Title: (_a = this.vehicleCmsContent) === null || _a === void 0 ? void 0 : _a.Children[3].Title,
      AcceptBtn: (_b = this.vehicleCmsContent) === null || _b === void 0 ? void 0 : _b.Children[3]['accept'],
      PrimaryContent: (_c = this.vehicleCmsContent) === null || _c === void 0 ? void 0 : _c.Children[3].LongDescription,
      CancelBtn: (_d = this.vehicleCmsContent) === null || _d === void 0 ? void 0 : _d.Children[3]['cancel']
    };
  }

  // todo: child shouldnot be accessed by index. Remove during new refactor
  get deactivatePlateCmsContent() {
    var _a, _b, _c, _d;

    return {
      Title: (_a = this.vehicleCmsContent) === null || _a === void 0 ? void 0 : _a.Children[4].Title,
      AcceptBtn: (_b = this.vehicleCmsContent) === null || _b === void 0 ? void 0 : _b.Children[4]['accept'],
      PrimaryContent: (_c = this.vehicleCmsContent) === null || _c === void 0 ? void 0 : _c.Children[4].LongDescription,
      CancelBtn: (_d = this.vehicleCmsContent) === null || _d === void 0 ? void 0 : _d.Children[4]['cancel']
    };
  }

  get emptyVehicleCmsContent() {
    var _a;

    const activeParam = this.filter.isActive ? '' : 'In';
    const productParam = this.filter.product === vehicles_shared_models__WEBPACK_IMPORTED_MODULE_11__.VehicleProduct.eztag ? 'Tag' : 'Plate';
    const key = `no${activeParam}ActiveEz${productParam}`;
    return (_a = this.vehicleCmsContent) === null || _a === void 0 ? void 0 : _a.Children[4][key];
  }

  get hasMore() {
    if (!this.filter) {
      return false;
    }

    const vehicles = this.filter.product === vehicles_shared_models__WEBPACK_IMPORTED_MODULE_11__.VehicleProduct.eztag ? this.ezTags || [] : this.ezPlates || [];
    const numberOfPages = 1 + Math.floor((vehicles.length - 1) / this.pageCount);
    return this.filter.visiblePages < numberOfPages;
  }

  getSubset() {
    const vehicles = this.filter.product === vehicles_shared_models__WEBPACK_IMPORTED_MODULE_11__.VehicleProduct.eztag ? this.ezTags || [] : this.ezPlates || [];
    let subset = vehicles.filter((ignore, index) => this.filter.visiblePages > Math.floor(index / this.pageCount));

    if (this.sortState && this.sortState !== undefined) {
      subset = this.sortingService.sort(subset, {
        colName: this.sortState.colName,
        type: this.sortState.order
      });
    }

    return subset;
  }

  loadMore() {
    this.filter.visiblePages++;
    this.filteredVehicles = this.getSubset();
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.disableAddEzPlatLinkError = _this.cmsAddPlateVehicleInfo.MaxPlateError;
      _this.filter = {
        product: vehicles_shared_models__WEBPACK_IMPORTED_MODULE_11__.VehicleProduct.eztag,
        isActive: true,
        keyword: null,
        visiblePages: 1
      };
      yield _this.queryVehicles();
      _this.isLtMd = _this.mediaObserver.isActive('lt-md');
      _this.filteredVehicles = _this.getSubset();

      _this.setEztagStatusValues();

      _this.editBtnText = _this.setEditBtnText();
      yield _this.mailingService.clearData();
    })();
  }

  filterVehicles(ezTags, ezPlates) {
    return [ezTags.filter(x => this.isActive(x) === this.filter.isActive), ezPlates.filter(x => this.isActive(x) === this.filter.isActive)];
  }

  isActive(vehicle) {
    switch (vehicle.tagStatusDesc) {
      case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState.active:
      case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState.pending:
      case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState.pendingActivation:
        return true;

      default:
        return false;
    }
  }

  getVehicleState(vehicle) {
    switch (vehicle.tagStatusDesc) {
      case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState.active:
      case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState.inactive:
      case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState.expired:
      case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState.pendingActivation:
      case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState.lostInMail:
      case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState.pending:
        return vehicle.tagStatusDesc;

      default:
        return _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState.unknown;
    }
  }

  getVehicleStateDescription(vehicle) {
    const state = this.getVehicleState(vehicle);

    switch (state) {
      case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState.active:
        return this.vehicleCmsContent.active;

      case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState.inactive:
        return this.vehicleCmsContent.inactive;

      case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState.pending:
        return this.vehicleCmsContent.pending;

      case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState.expired:
        return this.vehicleCmsContent.expired;

      case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState.pendingActivation:
        return this.vehicleCmsContent.pendingActivation;

      case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleState.lostInMail:
        return this.vehicleCmsContent.lostInMail;

      default:
        return null;
    }
  }

  queryVehicles(keyword, resetPageCount = true) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.filter.keyword = keyword;

      if (resetPageCount) {
        _this2.filter.visiblePages = 1;
      }

      const query = {
        searchValue: _this2.filter.keyword
      };
      const response = yield _this2.vehiclesManagerService.queryVehicles(query);
      _this2.maxEzPlatesAllowed = response.maxEzPlatesAllowed;

      if (!_this2.responseErrorService.isErrorFree(response)) {
        _this2.responseErrorService.displayErrorsFromResponse(response);

        return;
      }

      const {
        accountTags: ezTags,
        pbpTags: ezPlates
      } = response;
      [_this2.ezTags, _this2.ezPlates] = _this2.filterVehicles(ezTags, ezPlates);

      if (keyword !== undefined) {
        _this2.refreshGridWhenSearchTags();
      }

      _this2.isMVUEligible = response.multiVehicleAllowed;

      _this2.disableAddProduct();
    })();
  }

  refreshGridWhenSearchTags() {
    this.filteredVehicles = this.getSubset();
  }

  addProduct() {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.vehiclesManagerService.clearData();

      if (_this3.filter.product === vehicles_shared_models__WEBPACK_IMPORTED_MODULE_11__.VehicleProduct.eztag) {
        yield _this3.state.go(_shared__WEBPACK_IMPORTED_MODULE_8__.WebUIStates.TagVehicleInformation);
      } else if (_this3.filter.product === vehicles_shared_models__WEBPACK_IMPORTED_MODULE_11__.VehicleProduct.ezplate) {
        yield _this3.state.go(_shared__WEBPACK_IMPORTED_MODULE_8__.WebUIStates.PlateVehicleInformation);
      }
    })();
  }

  disableAddProduct() {
    this.disableAddProductLink = false;

    if (this.filter.product === vehicles_shared_models__WEBPACK_IMPORTED_MODULE_11__.VehicleProduct.ezplate && this.ezPlates && this.ezPlates.length === this.maxEzPlatesAllowed) {
      this.disableAddProductLink = true;
    }
  }

  addMVU() {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.state.go(_this4.environmentConfig.useNewMvu ? _shared__WEBPACK_IMPORTED_MODULE_8__.WebUIStates.MvuUpload : constants_stateNames_constants__WEBPACK_IMPORTED_MODULE_2__.stateNames.multiVehicleUpload);
    })();
  }

  toggleVehicleStatus() {
    var _this5 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.filter.isActive = !_this5.filter.isActive;
      yield _this5.queryVehicles();
      _this5.sortState = null;
      _this5.filteredVehicles = _this5.getSubset();

      _this5.setEztagStatusValues();
    })();
  }

  toEZTag() {
    var _this6 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.sortState = null;
      _this6.filter.visiblePages = 1;
      _this6.filter.product = vehicles_shared_models__WEBPACK_IMPORTED_MODULE_11__.VehicleProduct.eztag;
      _this6.filteredVehicles = _this6.getSubset();

      _this6.disableAddProduct();

      _this6.editBtnText = _this6.setEditBtnText();
    })();
  }

  toEZPlate() {
    var _this7 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.sortState = null;
      _this7.filter.visiblePages = 1;
      _this7.filter.product = vehicles_shared_models__WEBPACK_IMPORTED_MODULE_11__.VehicleProduct.ezplate;
      _this7.filteredVehicles = _this7.getSubset();

      _this7.disableAddProduct();

      _this7.editBtnText = _this7.setEditBtnText();
    })();
  } // todo: move to new edit service


  editEzPlate(vehicle) {
    var _this8 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        plate: { ...vehicle
        },
        header: 'EZ PLATE',
        cmsContent: { ..._this8.cmsAddPlateVehicleInfo
        },
        showStatus: true,
        status: {
          active: _this8.vehicleCmsContent.active,
          inactive: _this8.vehicleCmsContent.inactive
        },
        statesList: _this8.stateList
      };
      const {
        plate,
        savePlate
      } = (yield _this8.dialogService.openSliderFilled(vehicles_ezplate_edit_editPlate_component__WEBPACK_IMPORTED_MODULE_10__.EditPlateComponent, data, {
        title: 'Edit EZ PLATE'
      })) || {};

      if (savePlate) {
        const res = yield _this8.vehiclesManagerService.update(plate);

        if (res.errors.length === 0) {
          _this8.toasterService.show('Success', _this8.cmsAddPlateVehicleInfo.EDIT_EZPLATE);
        }

        yield _this8.queryVehicles(_this8.filter.keyword, false);
        _this8.filteredVehicles = _this8.getSubset();
      }
    })();
  } // todo: move to new edit service


  editEzTag(vehicle) {
    var _this9 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        tag: { ...vehicle
        },
        cmsAddTagVehicleInfo: { ..._this9.cmsAddTagVehicleInfo
        },
        cmsModalValues: {
          active: _this9.vehicleCmsContent.active,
          inactive: _this9.vehicleCmsContent.inactive,
          title: 'EZ TAG'
        },
        showStatus: true,
        statesList: _this9.stateList
      };
      const {
        tag,
        saveTag
      } = (yield _this9.dialogService.openSliderFilled(vehicles_eztag_edit_editTag_component__WEBPACK_IMPORTED_MODULE_9__.EditTagComponent, data, {
        title: 'Edit EZ TAG'
      })) || {};

      if (saveTag) {
        const res = yield _this9.vehiclesManagerService.updateTagVehicleInfoFromLanding(tag);

        if (res.errors.length === 0) {
          _this9.toasterService.show('Success', 'Edit EZ Tag Successfully Saved');
        }

        yield _this9.queryVehicles(_this9.filter.keyword, false);
        _this9.filteredVehicles = _this9.getSubset();
      }
    })();
  }

  doVehicleAction(vehicle, product, action) {
    var _this10 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      switch (action) {
        case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleAction.activate:
          //for now, only deactivate
          return;

        case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleAction.deactivate:
          return yield _this10.doVehicleDeactivation(vehicle, product);

        case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleAction.reactivate:
          if (product === vehicles_shared_models__WEBPACK_IMPORTED_MODULE_11__.VehicleProduct.eztag) {
            yield _this10.reactivateTag(vehicle);
          }

          break;

        case _models__WEBPACK_IMPORTED_MODULE_12__.VehicleAction.replace:
          if (product === vehicles_shared_models__WEBPACK_IMPORTED_MODULE_11__.VehicleProduct.eztag) {
            _this10.replaceTag(vehicle);
          }

          break;
      }
    })();
  }

  reactivateTag(vehicle) {
    var _this11 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = _this11.vehicleCmsContent.Children.filter(child => child.ItemName.toUpperCase() === 'REACTIVATE TAG');

      if (data.length > 0) {
        const res = yield _this11.tagReactivateMgrService.reactivate({
          ezTagNum: vehicle.fullTagId,
          sitecoreContent: data[0],
          vehicle
        });

        switch (res.status) {
          case vehicles_eztag_reactivate__WEBPACK_IMPORTED_MODULE_7__.TagReactivateStatus.UserCancel:
            break;

          case vehicles_eztag_reactivate__WEBPACK_IMPORTED_MODULE_7__.TagReactivateStatus.Pass:
            yield _this11.toggleVehicleStatus();

            _this11.toasterService.show('Success', 'Your Vehicle information has been successfully updated.');

            break;

          case vehicles_eztag_reactivate__WEBPACK_IMPORTED_MODULE_7__.TagReactivateStatus.Fail:
            _this11.toasterService.show('Error', res.errors[0].message);

        }
      }
    })();
  }

  replaceTag(vehicle) {
    const content = this.vehicleCmsContent.Children.filter(child => child.ItemName.toUpperCase() === 'REPLACE TAG');

    if (content.length > 0) {
      this.replacementManagerService.replace(content[0], vehicle);
    }
  } // todo move to new service


  doVehicleDeactivation(vehicle, product) {
    var _this12 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this12.isActive(vehicle)) {
        return;
      }

      const cmsContent = product === vehicles_shared_models__WEBPACK_IMPORTED_MODULE_11__.VehicleProduct.eztag ? _this12.deactivateTagCmsContent : _this12.deactivatePlateCmsContent;
      const data = {
        cmsContent
      };
      const accepted = yield _this12.dialogService.openGenericModal(common_ui_modals_genericCmsModal_genericCmsModal_component__WEBPACK_IMPORTED_MODULE_1__.GenericCmsModalComponent, data);

      if (accepted) {
        const statusUpdated = yield _this12.vehiclesManagerService.deactivate(vehicle, product);

        if (_this12.responseErrorService.isErrorFree(statusUpdated)) {
          yield _this12.queryVehicles(_this12.filter.keyword);
          _this12.sortState = null;
          _this12.filteredVehicles = _this12.getSubset();
        } else {
          _this12.responseErrorService.displayErrorsFromResponse(statusUpdated);
        }
      }
    })();
  }

  pendingActivationClick() {
    var _this13 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this13.state.go(constants_module__WEBPACK_IMPORTED_MODULE_3__.stateNames.activateEzTag);
    })();
  }

  setEztagStatusValues() {
    switch (this.filter.isActive) {
      case true:
        this.eztagStatusValues = [{
          key: this.vehicleCmsContent.active,
          value: _models__WEBPACK_IMPORTED_MODULE_12__.VehicleAction.activate
        }, {
          key: this.vehicleCmsContent.inactivate,
          value: _models__WEBPACK_IMPORTED_MODULE_12__.VehicleAction.deactivate
        }];

        if (this.environmentConfig.vehicleReplacement) {
          this.eztagStatusValues.push({
            key: this.vehicleCmsContent.replace,
            value: _models__WEBPACK_IMPORTED_MODULE_12__.VehicleAction.replace
          });
        }

        break;

      case false:
        this.eztagStatusValues = [{
          key: this.vehicleCmsContent.inactive,
          value: _models__WEBPACK_IMPORTED_MODULE_12__.VehicleAction.deactivate
        }];

        if (this.environmentConfig.vehicleReactivate) {
          this.eztagStatusValues.push({
            key: this.vehicleCmsContent.reactivate,
            value: _models__WEBPACK_IMPORTED_MODULE_12__.VehicleAction.reactivate
          });
        }

        break;
    }
  }

  filterStatus(vehicle) {
    if (vehicle.fullTagId === '' && !this.filter.isActive && this.environmentConfig.vehicleReactivate) {
      return this.eztagStatusValues.filter(status => status.value !== _models__WEBPACK_IMPORTED_MODULE_12__.VehicleAction.reactivate);
    } else if (vehicle.fullTagId === '' || vehicle.fullTagId === '0') {
      return this.eztagStatusValues.filter(status => status.value !== _models__WEBPACK_IMPORTED_MODULE_12__.VehicleAction.replace);
    } else {
      return this.eztagStatusValues;
    }
  }

  sortData(sort) {
    const data = this.ezTags;

    if (!sort.active || sort.direction === '') {
      this.ezTags = data;
      return;
    }

    if (sort.active && sort.direction) {
      const colName = sort.active;
      this.sort(colName, sort.direction);
    }
  }

  sort(colName, order) {
    this.sortState = {
      colName,
      order
    };
    this.sortingService.sort(this.filteredVehicles, {
      colName,
      type: order
    });
  }

  ngAfterViewInit() {
    //To do: complete the requiremeent 85436 first if there is a change in the UI of vehicles grid
    const gridElement = this.gridContainer.nativeElement;
    gridElement.addEventListener('copy', e => {
      if (this.filter.product === vehicles_shared_models__WEBPACK_IMPORTED_MODULE_11__.VehicleProduct.eztag) {
        this.copyToExcelEzTag(e);
      }

      if (this.filter.product === vehicles_shared_models__WEBPACK_IMPORTED_MODULE_11__.VehicleProduct.ezplate) {
        this.copyToExcelEzPlate(e);
      }
    });
  }

  copyToExcelEzTag(e) {
    const data = this.window.getSelection().toString().split('\n');
    const filterData = data.filter(d => d !== '');
    const range = this.window.getSelection().getRangeAt(0); //set start container

    const startContainer = range.startContainer;
    let startEl = startContainer;
    const objRows = [];
    let newStartEl = startEl;

    while (startEl.textContent !== filterData[0]) {
      startEl = startEl.parentElement.nextElementSibling;
    }

    if (startEl.childNodes.length > 0) {
      if (startEl.firstChild.nodeName === '#text') {
        newStartEl = startEl.firstChild;
      }
    }

    let parentEl = newStartEl.parentElement;

    while (parentEl.localName !== 'fx-row') {
      parentEl = parentEl.parentElement;
    }

    ;
    const fxRow = parentEl;
    let nextFxRow = fxRow; //create first object

    let obj = {};
    const key = newStartEl.parentElement.getAttribute('name');
    obj[key] = filterData[0];
    let nextElement = newStartEl.parentElement.nextElementSibling;

    for (let i = 1; i < filterData.length; i++) {
      while (nextElement.textContent.trim() === '') {
        nextElement = nextElement.nextElementSibling;
      }

      if (filterData[i].trim() !== '' && nextElement.textContent.trim() === filterData[i].trim()) {
        const key1 = nextElement.getAttribute('name');
        obj[key1] = filterData[i]; //end of fxrow

        if (nextElement.getAttribute('name') === 'status') {
          objRows.push(obj);
          const newFxRow = nextFxRow.nextElementSibling;

          if (newFxRow !== null) {
            const vehicleRow = newFxRow.getElementsByClassName('vehicle-row')[0];
            nextElement = vehicleRow.children[0];
            nextFxRow = newFxRow;
          }

          obj = {};
        } else {
          if (i === filterData.length - 1) {
            objRows.push(obj);
          } //move to next sibling


          nextElement = nextElement.nextElementSibling;
        }
      }
    } // console.log(objRows);


    const cols = ['nickname', 'year/make/model', 'licence plate', 'ez tag number', 'color', 'axles', 'status'];
    const newTbl = this.copyToExcelService.getDataForExcel(objRows, cols);
    e.clipboardData.setData('text/plain', newTbl);
    e.preventDefault();
  }

  copyToExcelEzPlate(e) {
    const data = this.window.getSelection().toString().split('\n');
    const filterData = data.filter(d => d !== '');
    const range = this.window.getSelection().getRangeAt(0); //set start container

    const startContainer = range.startContainer;
    let startEl = startContainer;
    const objRows = [];
    let newStartEl = startEl;
    let textContent = startEl.textContent;
    let filterDataFirstEl = filterData[0];
    let filterDataStartPosition = 1;

    while (textContent.trim() !== filterDataFirstEl) {
      if (startEl.parentElement.nextElementSibling.getAttribute('name') === 'start date' || startEl.parentElement.nextElementSibling.getAttribute('name') === 'end date') {
        const datetime = startEl.parentElement.nextElementSibling.textContent.trim().split('  '); // textContent = datetime[0];

        textContent = startEl.parentElement.nextElementSibling.textContent.trim();
        filterDataFirstEl = startEl.parentElement.nextElementSibling.textContent.trim();
        startEl = startEl.parentElement.nextElementSibling;
        filterDataStartPosition++;
        ;
      } else {
        startEl = startEl.parentElement.nextElementSibling;
        textContent = startEl.textContent;
      }
    }

    if (startEl.childNodes.length > 0) {
      if (startEl.firstChild.nodeName === '#text') {
        newStartEl = startEl.firstChild;
      }
    }

    let parentEl = newStartEl.parentElement;

    while (parentEl.localName !== 'fx-row') {
      parentEl = parentEl.parentElement;
    }

    ;
    const fxRow = parentEl;
    let nextFxRow = fxRow; //create first object

    let obj = {};
    const key = newStartEl.parentElement.getAttribute('name');
    obj[key] = filterDataFirstEl; // obj[key] = filterData[0];

    let nextElement = newStartEl.parentElement.nextElementSibling;

    for (let i = filterDataStartPosition; i < filterData.length; i++) {
      while (nextElement.textContent.trim() === '' || nextElement.hasAttribute('name') === false) {
        nextElement = nextElement.nextElementSibling;
      }

      if (nextElement.getAttribute('name') === 'start date' || nextElement.getAttribute('name') === 'end date') {
        const datetime = nextElement.textContent.trim().split('  ');
        const date = datetime[0];
        const time = datetime[1];

        if (date === filterData[i] && time === filterData[i + 1]) {
          const key1 = nextElement.getAttribute('name');
          obj[key1] = nextElement.textContent.trim();
          i++;

          if (i === filterData.length - 1) {
            objRows.push(obj);
          }

          nextElement = nextElement.nextElementSibling;
        }
      } else {
        if (filterData[i].trim() !== '' && nextElement.textContent.trim() === filterData[i].trim()) {
          const newKey = nextElement.getAttribute('name');
          obj[newKey] = filterData[i]; //end of fxrow

          if (nextElement.getAttribute('name') === 'status') {
            objRows.push(obj);
            const newFxRow = nextFxRow.nextElementSibling;

            if (newFxRow !== null) {
              //if undefined, it means the end of grid
              const vehicleRow = newFxRow.getElementsByClassName('vehicle-row')[0];
              nextElement = vehicleRow.children[0];
              nextFxRow = newFxRow;
            }

            obj = {};
          } else {
            if (i === filterData.length - 1) {
              objRows.push(obj);
            } //move to next sibling


            nextElement = nextElement.nextElementSibling;
          }
        }
      }
    }

    const cols = ['nickname', 'year/make/model', 'licence plate', 'color', 'start date', 'end date', 'status'];
    const newTbl = this.copyToExcelService.getDataForExcel(objRows, cols);
    e.clipboardData.setData('text/plain', newTbl);
    e.preventDefault();
  }

}

LandingComponent.ɵfac = function LandingComponent_Factory(t) {
  return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_8__.VehiclesManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_14__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_28__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_14__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_models__WEBPACK_IMPORTED_MODULE_12__.MANAGE_VEHICLES_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](common_providers__WEBPACK_IMPORTED_MODULE_4__.WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_15__.DateWithTimeZonePipe), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](common_services_copyToExcel_copyToExcel_service__WEBPACK_IMPORTED_MODULE_5__.CopyToExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](common_module__WEBPACK_IMPORTED_MODULE_6__.ENVIRON_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](vehicles_eztag_reactivate__WEBPACK_IMPORTED_MODULE_7__.TagReactivateManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](vehicles_eztag_replacement__WEBPACK_IMPORTED_MODULE_16__.ReplacementManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](vehicles_manage_services_sorting_sorting_service__WEBPACK_IMPORTED_MODULE_13__.VehiclesSortingService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__.MediaObserver), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_8__.MailingAddressService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_14__.ToasterService));
};

LandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineComponent"]({
  type: LandingComponent,
  selectors: [["vehicles-landing"]],
  viewQuery: function LandingComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.gridContainer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.gridCopyContainer = _t.first);
    }
  },
  inputs: {
    vehicleCmsContent: "vehicleCmsContent",
    stateList: "stateList",
    cmsAddTagVehicleInfo: "cmsAddTagVehicleInfo",
    cmsAddPlateVehicleInfo: "cmsAddPlateVehicleInfo"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵProvidersFeature"]([{
    provide: _models__WEBPACK_IMPORTED_MODULE_12__.MANAGE_VEHICLES_OPTIONS,
    useValue: default_options
  }, common_services_copyToExcel_copyToExcel_service__WEBPACK_IMPORTED_MODULE_5__.CopyToExcelService])],
  decls: 49,
  vars: 33,
  consts: [["storefront", ""], [3, "hasGutter"], ["fxLayout", "row", "fxLayout.lt-md", "column-reverse", "fxLayoutAlign", "space-between end", "fxLayoutAlign.lt-md", "start center"], [3, "showSubTitle", "titleDescription", "subtitleDescription"], ["fxLayout", "row", "fxLayout.lt-md", "column-reverse", "fxLayoutAlign", "space-between center", "fxLayoutAlign.lt-md", "start stretch", "fxLayoutGap", "10px", 1, "toolbar"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "10px"], [1, "productSelection", 3, "ngClass", "click"], [3, "vertical"], [3, "stayOpenOnHover", "ngClass.lt-md"], ["tool-tip-hover", "", "svgIcon", "information"], ["tool-tip-message", ""], [3, "placeHolder", "search"], [3, "hasMargin"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutAlign", "start center", "fxLayoutAlign.lt-md", "start stretch", "fxLayoutGap", "32px"], ["fxLayout", "row", "fxLayoutGap", "5px"], ["aria-label", "Manage Vehicles", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "5px", 3, "click"], ["svgIcon", "add-icon"], [3, "stayOpenOnHover", "ngClass.lt-md", 4, "ngIf"], ["aria-label", "Manage Vehicles", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "5px", "fxHide.lt-md", "", 3, "click", 4, "ngIf"], ["GridContainer", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["fxLayout", "row", "fxLayoutAlign", "center center", 3, "click", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "end center"], [1, "statusToggle", 3, "click"], [4, "ngIf"], ["eztaggrid", ""], ["ezplategrid", ""], ["noVehicles", ""], ["ezTagStatus", ""], ["ezPlateStatus", ""], ["aria-label", "Manage Vehicles", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "5px", "fxHide.lt-md", "", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "center center", 3, "click"], ["wizard-next", ""], ["matSort", "", "matSortDisableClear", "true", 3, "headerTemplate", "rowTemplate", "emptyTemplate", "vehicles", "showArrowPredicate", "editButtonText", "arrowClick", "matSortChange"], ["eztagHeader", ""], ["eztagRow", ""], [1, "row-start", "eztag", "header", 3, "mat-sort-header"], [3, "mat-sort-header"], [1, "small-col", 3, "mat-sort-header"], ["name", "nickname", 1, "row-start", "eztag"], ["name", "year/make/model"], ["name", "licence plate"], ["name", "ez tag number"], ["name", "color", 1, "small-col"], ["name", "axles"], ["name", "status"], ["class", "pendingActivationStatus", 4, "ngIf", "ngIfElse"], ["otherState", ""], ["wizard", ""], [1, "pendingActivationStatus"], [3, "click"], ["matSort", "", 3, "headerTemplate", "rowTemplate", "emptyTemplate", "vehicles", "showArrowPredicate", "editButtonText", "arrowClick", "matSortChange"], ["ezplateHeader", ""], ["ezplateRow", ""], [1, "row-start", "ezplate", "header", 3, "mat-sort-header"], [3, "ngClass", "mat-sort-header"], ["name", "nickname", 1, "row-start", "ezplate"], ["name", "color"], ["name", "start date"], ["name", "end date"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "emptyVehicles"], ["svgIcon", "vehicles-icon"], [4, "ngIf", "ngIfElse"], ["nonactive", ""], ["ngClass", "c--nopad", 3, "value", "selectionChange"], ["vehicleAction", ""], [3, "ngClass"], [2, "display", "none", 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["ngClass", "c--nopad", 3, "value", "selectionChange", 4, "ngIf"]],
  template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "storefront-utility", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](2, "page-filled-container", 1)(3, "header", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](4, "titleSubTitle", 3)(5, "account-balance-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](6, "section", 4)(7, "div", 5)(8, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_8_listener() {
        return ctx.toEZTag();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](10, "mat-divider", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](11, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_11_listener() {
        return ctx.toEZPlate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](13, "tool-tip", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](14, "mat-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](15, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](17, "vehicles-search", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("search", function LandingComponent_Template_vehicles_search_search_17_listener($event) {
        return ctx.queryVehicles($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](18, "card-dash-container", 12)(19, "div", 13)(20, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](22, "section", 14)(23, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_23_listener() {
        return ctx.addProduct();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](24, "mat-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](27, LandingComponent_tool_tip_27_Template, 4, 3, "tool-tip", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](28, LandingComponent_a_28_Template, 4, 1, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](29, "div", null, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](31, LandingComponent_ng_container_31_Template, 1, 0, "ng-container", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](32, LandingComponent_a_32_Template, 2, 0, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](33, "section", 22)(34, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_34_listener() {
        return ctx.toggleVehicleStatus();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](36, LandingComponent_wizard_ui_36_Template, 3, 0, "wizard-ui", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](37, LandingComponent_ng_template_37_Template, 5, 6, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](39, LandingComponent_ng_template_39_Template, 5, 6, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](41, LandingComponent_ng_template_41_Template, 4, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](43, LandingComponent_ng_template_43_Template, 4, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](45, LandingComponent_ng_template_45_Template, 3, 2, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](47, LandingComponent_ng_template_47_Template, 2, 2, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](1);

      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](38);

      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](40);

      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("hasGutter", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("showSubTitle", true)("titleDescription", ctx.vehicleCmsContent.Title)("subtitleDescription", ctx.vehicleCmsContent.ShortDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](27, _c5, ctx.filter.product === ctx.VehicleProduct.eztag));
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](ctx.vehicleCmsContent.eztags);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("vertical", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](29, _c5, ctx.filter.product === ctx.VehicleProduct.ezplate));
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](ctx.vehicleCmsContent.ezplates);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("stayOpenOnHover", true)("ngClass.lt-md", "tool-tip-absolute");
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", ctx.vehicleCmsContent.ezplateToolTip, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("placeHolder", ctx.vehicleCmsContent.search);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("hasMargin", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate2"](" ", ctx.filter.isActive ? ctx.vehicleCmsContent.active : ctx.vehicleCmsContent.inactive, " ", ctx.filter.product === ctx.VehicleProduct.eztag ? ctx.vehicleCmsContent.eztags : ctx.vehicleCmsContent.ezplates, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassProp"]("disabled", ctx.disableAddProductLink);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](ctx.filter.product === ctx.VehicleProduct.eztag ? ctx.vehicleCmsContent.addEzTag : ctx.vehicleCmsContent.addEzPlate);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.disableAddProductLink);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.isMVUEligible && !_r0.isKioskView);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngTemplateOutlet", ctx.filter.product === ctx.VehicleProduct.eztag ? _r7 : _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](31, _c2, ctx.filteredVehicles));
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.hasMore);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate2"](" View ", ctx.filter.isActive ? ctx.vehicleCmsContent.inactive : ctx.vehicleCmsContent.active, " ", ctx.filter.product === ctx.VehicleProduct.eztag ? ctx.vehicleCmsContent.eztags : ctx.vehicleCmsContent.ezplates, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", _r0.isKioskView);
    }
  },
  directives: [_storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_17__.StorefrontUtilityComponent, _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_18__.PageFilledContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_30__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_30__.DefaultLayoutAlignDirective, _common_ui_titleSubTitle_titleSubTitle_component__WEBPACK_IMPORTED_MODULE_19__.TitleSubTitleComponent, _common_ui_accountBalanceHeader_accountBalanceHeader_component__WEBPACK_IMPORTED_MODULE_20__.AccountBalanceHeaderComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_30__.DefaultLayoutGapDirective, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_32__.DefaultClassDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__.MatDivider, _common_ui_toolTip_toolTip_component__WEBPACK_IMPORTED_MODULE_21__.ToolTipComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__.MatIcon, _search_search_component__WEBPACK_IMPORTED_MODULE_22__.SearchComponent, _common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_23__.CardDashContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgIf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_32__.DefaultShowHideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgTemplateOutlet, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_24__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_25__.WizardNextDirective, _grid_grid_component__WEBPACK_IMPORTED_MODULE_26__.GridComponent, _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSort, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__.MatLabel, _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_37__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_37__.MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_38__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgForOf],
  pipes: [pipes_dateWithTimeZone_dateWithTimeZone_pipe__WEBPACK_IMPORTED_MODULE_15__.DateWithTimeZonePipe],
  styles: ["[_nghost-%COMP%]   page-filled-container[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #efeff4;\n}\n[_nghost-%COMP%]   card-dash-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n[_nghost-%COMP%]   mat-divider.mat-divider.mat-divider-vertical[_ngcontent-%COMP%] {\n  border-color: #611eb8;\n  height: 20px;\n  border-width: 2px;\n  margin: 2px 0px;\n}\n[_nghost-%COMP%]   tool-tip[_ngcontent-%COMP%]   [tool-tip-hover][_ngcontent-%COMP%] {\n  width: 10px;\n  height: 18px;\n  color: #007aff;\n}\n[_nghost-%COMP%]   tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%] {\n  background-color: #efeff4;\n  padding: 16px;\n  min-height: 45px;\n  font-size: 12px;\n  line-height: 15px;\n}\n@media not screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%] {\n    top: -60px;\n    min-width: 325px;\n    left: calc(100% + 5px);\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%] {\n    position: fixed;\n    top: 20vh;\n    left: 0px;\n    width: 100vw;\n  }\n}\n[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 20px;\n  display: block;\n  margin-right: 20px;\n  padding-top: 10px;\n}\n[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%] {\n  padding: 17px 0px 20px 20px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   header[_ngcontent-%COMP%], [_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%] {\n    padding-top: 0px;\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n  [_nghost-%COMP%]   account-balance-header[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n  }\n  [_nghost-%COMP%]   titleSubTitle[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .statusToggle[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-right: 20px;\n}\n[_nghost-%COMP%]   .productSelection[_ngcontent-%COMP%], [_nghost-%COMP%]   .productSelection[_ngcontent-%COMP%]:link, [_nghost-%COMP%]   .productSelection[_ngcontent-%COMP%]:visited, [_nghost-%COMP%]   .productSelection[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .productSelection[_ngcontent-%COMP%]:active {\n  color: #611eb8 !important;\n  text-transform: capitalize;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .productSelection.selected[_ngcontent-%COMP%], [_nghost-%COMP%]   .productSelection[_ngcontent-%COMP%]:link.selected, [_nghost-%COMP%]   .productSelection[_ngcontent-%COMP%]:visited.selected, [_nghost-%COMP%]   .productSelection[_ngcontent-%COMP%]:hover.selected, [_nghost-%COMP%]   .productSelection[_ngcontent-%COMP%]:active.selected {\n  border-bottom: 1px solid #611eb8;\n}\n[_nghost-%COMP%]   mat-select[_ngcontent-%COMP%] {\n  padding: 12px 0px 6px 8px;\n  border: 0px !important;\n  width: 100%;\n  height: unset;\n  background-color: #ffffff;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.29);\n}\n[_nghost-%COMP%]   .shorten[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  direction: rtl;\n  text-align: left;\n}\n@media not screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]:nth-child(1), [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(1) {\n    width: calc(100% * (4 / 27));\n    overflow-wrap: break-word;\n  }\n  [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]:nth-child(2), [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(2) {\n    width: calc(100% * (5 / 27));\n    overflow-wrap: break-word;\n  }\n  [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]:nth-child(3), [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(3) {\n    width: calc(100% * (5 / 27));\n    overflow-wrap: break-word;\n  }\n  [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]:nth-child(4), [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(4) {\n    width: calc(100% * (5 / 27));\n    overflow-wrap: break-word;\n  }\n  [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]:nth-child(5), [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(5) {\n    width: calc(100% * (2 / 27));\n  }\n  [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]:nth-child(7), [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(7) {\n    width: calc(100% * (4 / 27));\n  }\n  [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]:nth-child(6), [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(6) {\n    width: calc(100% * (2 / 27));\n    overflow-wrap: break-word;\n    padding-left: 8px;\n  }\n  [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]:nth-child(8), [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(8) {\n    display: none;\n  }\n  [_nghost-%COMP%]   .row-start.eztag.header[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(2), [_nghost-%COMP%]   .row-start.eztag.header[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(3), [_nghost-%COMP%]   .row-start.eztag.header[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(4), [_nghost-%COMP%]   .row-start.eztag.header[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(5), [_nghost-%COMP%]   .row-start.eztag.header[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(6), [_nghost-%COMP%]   .row-start.eztag.header[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(7) {\n    padding-left: 1%;\n  }\n  [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]:nth-child(1), [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(1) {\n    width: calc(100% * (2 / 26));\n  }\n  [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]:nth-child(2), [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(2) {\n    width: calc(100% * (6 / 26));\n    overflow-wrap: break-word;\n  }\n  [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]:nth-child(3), [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(3) {\n    width: calc(100% * (5 / 26));\n    overflow-wrap: break-word;\n  }\n  [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]:nth-child(4), [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(4) {\n    width: calc(100% * (2 / 26));\n    overflow-wrap: break-word;\n  }\n  [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]:nth-child(5), [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(5) {\n    width: calc(100% * (4 / 26));\n    overflow-wrap: break-word;\n  }\n  [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]:nth-child(7), [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(7) {\n    width: calc(100% * (4 / 26));\n    overflow-wrap: break-word;\n  }\n  [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]:nth-child(8), [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(8) {\n    width: calc(100% * (3 / 26));\n    overflow-wrap: break-word;\n  }\n  [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]:nth-child(6), [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(6) {\n    display: none;\n  }\n  [_nghost-%COMP%]   .row-start.ezplate.header[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(1), [_nghost-%COMP%]   .row-start.ezplate.header[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(2) {\n    padding-left: 2%;\n  }\n  [_nghost-%COMP%]   .row-start.ezplate.header[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(3), [_nghost-%COMP%]   .row-start.ezplate.header[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(8) {\n    padding-left: 5%;\n  }\n  [_nghost-%COMP%]   .row-start.ezplate.header[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(4), [_nghost-%COMP%]   .row-start.ezplate.header[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(5), [_nghost-%COMP%]   .row-start.ezplate.header[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(7) {\n    padding-left: 3%;\n  }\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]:nth-child(-n+7), [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(-n+7) {\n    display: none !important;\n  }\n  [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]:nth-child(8), [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(8) {\n    width: 100%;\n    padding: 5px 0px;\n    flex-direction: column;\n    box-sizing: border-box;\n    display: flex;\n  }\n  [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]:nth-child(8)   mat-label[_ngcontent-%COMP%], [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(8)   mat-label[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    text-transform: uppercase;\n  }\n  [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]:nth-child(8)   mat-select[_ngcontent-%COMP%], [_nghost-%COMP%]   .row-start.eztag[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(8)   mat-select[_ngcontent-%COMP%] {\n    max-width: 120px;\n  }\n  [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]:nth-child(-n+5), [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(-n+5), [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]:nth-child(8), [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(8) {\n    display: none !important;\n  }\n  [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]:nth-child(6), [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(6), [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]:nth-child(7), [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(7) {\n    width: 50%;\n    display: unset;\n  }\n  [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]:nth-child(6), [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(6) {\n    width: 100%;\n    padding: 5px 0px;\n    flex-direction: column;\n    box-sizing: border-box;\n    display: flex;\n  }\n  [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]:nth-child(6)   mat-label[_ngcontent-%COMP%], [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(6)   mat-label[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    text-transform: uppercase;\n  }\n  [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]:nth-child(6)   mat-select[_ngcontent-%COMP%], [_nghost-%COMP%]   .row-start.ezplate[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]:nth-child(6)   mat-select[_ngcontent-%COMP%] {\n    max-width: 120px;\n  }\n}\n[_nghost-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #018c25;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: 'Jost';\n  font-size: 16px;\n  line-height: 26px;\n}\n[_nghost-%COMP%]   .emptyVehicles[_ngcontent-%COMP%] {\n  min-height: 200px;\n  color: #757575 !important;\n}\n[_nghost-%COMP%]   .emptyVehicles[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  color: #757575 !important;\n  margin-top: 20px;\n}\n[_nghost-%COMP%]   .emptyVehicles[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: scale(2);\n}\n[_nghost-%COMP%]   .pendingActivationStatus[_ngcontent-%COMP%] {\n  color: #007aff;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcubGVzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXHRoZW1lXFxtaXhpbnNcXHBhZ2UubGVzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGN1c3RvbVxcc3BhY2luZ1xcZGl2aWRlcnMubGVzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXHRoZW1lXFxtaXhpbnNcXGZvbnRzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFFUSxjQUFBO0VBQ0EseUJBQUE7QUFKUjtBQUNBO0VBUVksMEJBQUE7QUFOWjtBQVdRO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBVFo7QUFSQTtFQXdCWSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFiWjtBQWJBO0VDbUJJLHlCQUFBO0VEWVEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBZFo7QUFnQlk7RUFBQTtJQUNJLFVBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0VBYmQ7QUFDRjtBQWVZO0VBQUE7SUFDSSxlQUFBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0VBWmQ7QUFDRjtBQW5DQTtFRUZRLGdCQUFBO0VBQ0EsbUJBQUE7RUZzREEsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFiUjtBQTFDQTtFQTJEUSwyQkFBQTtBQWRSO0FBaUJJO0VBQUE7O0lBR1EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBZlY7RUFVRTtJQVNRLGtCQUFBO0VBaEJWO0VBT0U7SUFhUSxjQUFBO0lBQ0EsV0FBQTtFQWpCVjtBQUNGO0FBNURBO0VBaUZRLGdCQUFBO0VBQ0Esa0JBQUE7QUFsQlI7QUFoRUE7Ozs7O0VBMEZRLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQW5CUjtBQXFCUTs7Ozs7RUFDSSxnQ0FBQTtBQWZaO0FBaEZBO0VBb0dRLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkNBQUE7QUFqQlI7QUF4RkE7RUE2R1EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBbEJSO0FBcUJJO0VBSVE7O0lBQ0ksNEJBQUE7SUFDQSx5QkFBQTtFQXJCZDtFQXdCVTs7SUFDSSw0QkFBQTtJQUNBLHlCQUFBO0VBckJkO0VBd0JVOztJQUNJLDRCQUFBO0lBQ0EseUJBQUE7RUFyQmQ7RUF3QlU7O0lBQ0ksNEJBQUE7SUFDQSx5QkFBQTtFQXJCZDtFQXdCVTs7SUFDSSw0QkFBQTtFQXJCZDtFQXdCVTs7SUFDSSw0QkFBQTtFQXJCZDtFQXdCVTs7SUFDSSw0QkFBQTtJQUNBLHlCQUFBO0lBQ0EsaUJBQUE7RUFyQmQ7RUF3QlU7O0lBQ0ksYUFBQTtFQXJCZDtFQTBCVTs7Ozs7O0lBTUksZ0JBQUE7RUF4QmQ7RUErQlU7O0lBQ0ksNEJBQUE7RUE1QmQ7RUErQlU7O0lBQ0ksNEJBQUE7SUFDQSx5QkFBQTtFQTVCZDtFQStCVTs7SUFDSSw0QkFBQTtJQUNBLHlCQUFBO0VBNUJkO0VBK0JVOztJQUNJLDRCQUFBO0lBQ0EseUJBQUE7RUE1QmQ7RUErQlU7O0lBQ0ksNEJBQUE7SUFDQSx5QkFBQTtFQTVCZDtFQStCVTs7SUFDSSw0QkFBQTtJQUNBLHlCQUFBO0VBNUJkO0VBK0JVOztJQUNJLDRCQUFBO0lBQ0EseUJBQUE7RUE1QmQ7RUErQlU7O0lBQ0ksYUFBQTtFQTVCZDtFQWlDVTs7SUFFSSxnQkFBQTtFQS9CZDtFQWtDVTs7SUFFSSxnQkFBQTtFQWhDZDtFQW1DVTs7O0lBR0ksZ0JBQUE7RUFqQ2Q7QUFDRjtBQXFDSTtFQUlROztJQUNJLHdCQUFBO0VBckNkO0VBd0NVOztJQUNJLFdBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0Esc0JBQUE7SUFDQSxhQUFBO0VBckNkO0VBZ0NVOztJQVFRLGdCQUFBO0lBQ0EseUJBQUE7RUFwQ2xCO0VBMkJVOztJQWFRLGdCQUFBO0VBcENsQjtFQTRDVTs7OztJQUVJLHdCQUFBO0VBeENkO0VBMkNVOzs7O0lBRUksVUFBQTtJQUNBLGNBQUE7RUF2Q2Q7RUEwQ1U7O0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7SUFDQSxzQkFBQTtJQUNBLGFBQUE7RUF2Q2Q7RUFrQ1U7O0lBUVEsZ0JBQUE7SUFDQSx5QkFBQTtFQXRDbEI7RUE2QlU7O0lBYVEsZ0JBQUE7RUF0Q2xCO0FBQ0Y7QUF2UEE7RUFtU1EsY0FBQTtBQXpDUjtBQTFQQTtFR0FJLG1CQUFBO0VId1NJLGVBQUE7RUFDQSxpQkFBQTtBQTFDUjtBQS9QQTtFQTZTUSxpQkFBQTtFQUNBLHlCQUFBO0FBM0NSO0FBblFBO0VBaVRZLHlCQUFBO0VBQ0EsZ0JBQUE7QUEzQ1o7QUF2UUE7RUFzVFksbUJBQUE7QUE1Q1o7QUExUUE7RUEyVFEsY0FBQTtFQUNBLGVBQUE7QUE5Q1IiLCJmaWxlIjoibGFuZGluZy5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi9zdHlsZXMvY3VzdG9tL3NwYWNpbmcvZGl2aWRlcnMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBwYWdlLWZpbGxlZC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQGF0aGVucy1ncmF5O1xuICAgIH1cblxuICAgIGNhcmQtZGFzaC1jb250YWluZXIge1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgJi5tYXQtZGl2aWRlci5tYXQtZGl2aWRlci12ZXJ0aWNhbCB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IEBwdXJwbGUtaGVhcnQtcHVycGxlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgICAgICBtYXJnaW46IDJweCAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b29sLXRpcCB7XG5cbiAgICAgICAgW3Rvb2wtdGlwLWhvdmVyXSB7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgIGNvbG9yOiBAYXp1cmUtcmFkaWFuY2UtYmx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIFt0b29sLXRpcC1tZXNzYWdlXSB7XG4gICAgICAgICAgICAudC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IyKEB0aGVtZS1saWdodCk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogNDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuXG4gICAgICAgICAgICBAbWVkaWEgbm90IEBicmVha3BvaW50LWx0LW1kIHtcbiAgICAgICAgICAgICAgICB0b3A6IC02MHB4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzI1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYygxMDAlICsgNXB4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LW1kIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgdG9wOiAyMHZoO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aXphcmQtdWkge1xuICAgICAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fZGl2aWRlci0tbWFyZ2luVG9wQm90dG9tKCk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIC50b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogMTdweCAwcHggMjBweCAyMHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgLnRvb2xiYXIge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBhY2NvdW50LWJhbGFuY2UtaGVhZGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRpdGxlU3ViVGl0bGUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zdGF0dXNUb2dnbGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgLnByb2R1Y3RTZWxlY3Rpb24sXG4gICAgLnByb2R1Y3RTZWxlY3Rpb246bGluayxcbiAgICAucHJvZHVjdFNlbGVjdGlvbjp2aXNpdGVkLFxuICAgIC5wcm9kdWN0U2VsZWN0aW9uOmhvdmVyLFxuICAgIC5wcm9kdWN0U2VsZWN0aW9uOmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiBAcHVycGxlLWhlYXJ0LXB1cnBsZSAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIEBwdXJwbGUtaGVhcnQtcHVycGxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWF0LXNlbGVjdCB7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMHB4IDZweCA4cHg7XG4gICAgICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IHVuc2V0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2hpdGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yOSk7XG4gICAgfVxuXG4gICAgLnNob3J0ZW4ge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgQG1lZGlhIG5vdCBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgIC5yb3ctc3RhcnQuZXp0YWcsXG4gICAgICAgIC5yb3ctc3RhcnQuZXp0YWcgfiAqIHtcblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlICogKDQgLzI3KSkpO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAqICg1IC8yNykpKTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgKiAoNSAvIDI3KSkpO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAqICg1IC8gMjcpKSk7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoNSkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlICogKDIgLyAyNykpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoNykge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlICogKDQgLyAyNykpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoNikge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlICogKDIgLyAyNykpKTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg4KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yb3ctc3RhcnQuZXp0YWcuaGVhZGVyIH4gKiB7XG4gICAgICAgICAgICAmOm50aC1jaGlsZCgyKSxcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDMpLFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoNCksXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg1KSxcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDYpLFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoNykge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMSU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucm93LXN0YXJ0LmV6cGxhdGUsXG4gICAgICAgIC5yb3ctc3RhcnQuZXpwbGF0ZSB+ICoge1xuXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgKiAoMiAvIDI2KSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgKiAoNiAvIDI2KSkpO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAqICg1IC8gMjYpKSk7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoNCkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlICogKDIgLyAyNikpKTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg1KSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgKiAoNCAvIDI2KSkpO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDcpIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAqICg0IC8gMjYpKSk7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoOCkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlICogKDMgLyAyNikpKTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg2KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yb3ctc3RhcnQuZXpwbGF0ZS5oZWFkZXIgfiAqIHtcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpLFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMiU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDMpLFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoOCkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDQpLFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoNSksXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg3KSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBAYnJlYWtwb2ludC1sdC1tZCB7XG4gICAgICAgIC5yb3ctc3RhcnQuZXp0YWcsXG4gICAgICAgIC5yb3ctc3RhcnQuZXp0YWcgfiAqIHtcblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoLW4rNykge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoOCkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAgICAgICBtYXQtbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1hdC1zZWxlY3Qge1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yb3ctc3RhcnQuZXpwbGF0ZSxcbiAgICAgICAgLnJvdy1zdGFydC5lenBsYXRlIH4gKiB7XG5cbiAgICAgICAgICAgICY6bnRoLWNoaWxkKC1uKzUpLFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoOCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoNiksXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg3KSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB1bnNldDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoNikge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAgICAgICBtYXQtbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1hdC1zZWxlY3Qge1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hY3RpdmUge1xuICAgICAgICBjb2xvcjogQGZ1bi1ncmVlbjtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgLnQtaGVhZGVyLS1mb250RmFtaWx5KCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgfVxuXG4gICAgLmVtcHR5VmVoaWNsZXMge1xuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICAgICAgY29sb3I6IEBib3VsZGVyLWdyYXkgIWltcG9ydGFudDtcblxuICAgICAgICBhcnRpY2xlIHtcbiAgICAgICAgICAgIGNvbG9yOiBAYm91bGRlci1ncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyLjApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnBlbmRpbmdBY3RpdmF0aW9uU3RhdHVzIHtcbiAgICAgICAgY29sb3I6IEBhenVyZS1yYWRpYW5jZS1ibHVlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3ItbGlnaHQ6IEB3aGl0ZTtcbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3IyLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMy1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWNvbG9yLWxpZ2h0OiBAdHVuYS1ncmF5O1xuQGJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLWxpZ2h0OiBAdHJvcGljYWwtcmFpbi1mb3Jlc3QtZ3JlZW47XG5AYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItbGlnaHQ6IEBzaWx2ZXItZ3JheTtcbkBoZWFkZXItLWNvbG9yLWxpZ2h0OiBAdHVuYS1ncmF5O1xuQGxhYmVsLS1jb2xvci1saWdodDogQGJvdWxkZXItZ3JheTtcbkBzZWxlY3RfX2Fycm93LS1jb2xvci1saWdodDogQHNjb3JwaW9uLWdyYXk7XG5AbGluay0tY29sb3ItbGlnaHQ6IEBhenVyZS1yYWRpYW5jZS1ibHVlO1xuQGRpdmlkZXItLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2Nob29sLWJ1cy15ZWxsb3c7XG5cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvci1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IyLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IzKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvcjMtQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1oZWFkZXItLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2hlYWRlci0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1sYWJlbC0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGFiZWwtLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtc2VsZWN0X19hcnJvdy0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnc2VsZWN0X19hcnJvdy0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1saW5rLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdsaW5rLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3IgIWltcG9ydGFudDsgLy8gbWFya2VkIGFzICFpbXBvcnRhbnQgdG8gb3ZlcnJpZGUgYm9vdHN0cmFwXG59XG5cbi50LWRpdmlkZXItLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2RpdmlkZXItLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWRpdmlkZXJfX2Rhc2gtLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG4iLCIucmVmcmVzaC0yMDIwIHtcbiAgICAudS1zcGFjaW5nX19kaXZpZGVyLS1tYXJnaW5Ub3BCb3R0b20ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuXG4udC1oZWFkZXItLWZvbnRGYW1pbHkoKSB7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LWpvc3Q7XG59XG5cbi50LWJvZHktLWZvbnRGYW1pbHkoKSB7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LW1vbnRzZXJyYXQ7XG59XG4iXX0= */"]
});

/***/ }),

/***/ 26349:
/*!**********************************************************!*\
  !*** ./src/vehicles/manage/components/landing/models.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MANAGE_VEHICLES_OPTIONS": () => (/* binding */ MANAGE_VEHICLES_OPTIONS),
/* harmony export */   "VehicleAction": () => (/* binding */ VehicleAction),
/* harmony export */   "VehicleState": () => (/* binding */ VehicleState)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 28596);

var VehicleState;
(function (VehicleState) {
    VehicleState["active"] = "Active";
    VehicleState["inactive"] = "Inactive";
    VehicleState["pending"] = "Pending";
    VehicleState["pendingActivation"] = "Pending Activation";
    VehicleState["expired"] = "Expired";
    VehicleState["unknown"] = "Unknown";
    VehicleState["lostInMail"] = "Lost In Mail";
})(VehicleState || (VehicleState = {}));
var VehicleAction;
(function (VehicleAction) {
    VehicleAction[VehicleAction["none"] = 0] = "none";
    VehicleAction[VehicleAction["activate"] = 1] = "activate";
    VehicleAction[VehicleAction["deactivate"] = 2] = "deactivate";
    VehicleAction[VehicleAction["reactivate"] = 3] = "reactivate";
    VehicleAction[VehicleAction["replace"] = 4] = "replace";
})(VehicleAction || (VehicleAction = {}));
//todo: when clean checked in, this needs to be refactored too!
const MANAGE_VEHICLES_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MANAGE_VEHICLES_OPTIONS');


/***/ }),

/***/ 81802:
/*!*******************************************************************!*\
  !*** ./src/vehicles/manage/components/search/search.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 48340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 31275);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 38661);






const _c0 = ["searchInput"];
class SearchComponent {
    constructor() {
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngAfterViewInit() {
        const searchElement = this.searchInput.nativeElement;
        const keyup$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(searchElement, 'keyup');
        this.searchSubscription = keyup$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => searchElement.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(this.debounce || 500))
            .subscribe((searchTerm) => this.search.emit(searchTerm));
    }
    ngOnDestroy() {
        if (this.searchSubscription) {
            this.searchSubscription.unsubscribe();
        }
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["vehicles-search"]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    } }, inputs: { placeHolder: "placeHolder", debounce: "debounce" }, outputs: { search: "search" }, decls: 4, vars: 1, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["type", "text", 3, "placeholder"], ["searchInput", ""], ["svgIcon", "search-icon"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1, 2)(3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeHolder);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon], styles: ["[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 20px;\n  overflow: hidden;\n  height: 40px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%] {\n  border: 0px !important;\n  padding: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBR1EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQUpBO0VBV1ksc0JBQUE7RUFDQSx1QkFBQTtBQUpaIiwiZmlsZSI6InNlYXJjaC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBtYWluIHtcblxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXG4gICAgICAgIGlucHV0W3R5cGU9J3RleHQnXSB7XG4gICAgICAgICAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 49084:
/*!******************************************!*\
  !*** ./src/vehicles/manage/constants.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsIds": () => (/* binding */ CmsIds)
/* harmony export */ });
const CmsIds = {
    AddTagVehicleInfo: '1D70B229-12FB-49F3-A719-A07EBAD3C3B5',
    AddPlateVehicleInfo: 'B1C34397-15A2-4AF4-85C2-00825A3F79D1',
    Root: 'BED6EF0B-DCB8-4209-BB88-3440C888B6C0'
};


/***/ }),

/***/ 51613:
/*!***************************************!*\
  !*** ./src/vehicles/manage/module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageVehiclesModule": () => (/* binding */ ManageVehiclesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/flex-layout */ 45046);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pipes/module */ 20445);
/* harmony import */ var validation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validation/module */ 26186);
/* harmony import */ var storefront_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! storefront/module */ 89550);
/* harmony import */ var vehicles_common_vehicles_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vehicles/common/vehicles-common.module */ 82001);
/* harmony import */ var vehicles_eztag_reactivate_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vehicles/eztag/reactivate/module */ 52185);
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/grid/grid.component */ 42366);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search/search.component */ 81802);
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/landing/landing.component */ 90162);
/* harmony import */ var _routes_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes-config */ 81240);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vehicles/shared */ 40719);
/* harmony import */ var app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/routing */ 59389);
/* harmony import */ var vehicles_shared_services_receipt_data_helper_receipt_data_helper_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vehicles/shared/services/receipt-data-helper/receipt-data-helper.service */ 96471);
/* harmony import */ var profile_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! profile/services */ 8769);
/* harmony import */ var vehicles_eztag_replacement__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vehicles/eztag/replacement */ 62136);
/* harmony import */ var vehicles_ezplate_edit_editPlate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vehicles/ezplate/edit/editPlate.component */ 22211);
/* harmony import */ var vehicles_eztag_edit_editTag_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vehicles/eztag/edit/editTag.component */ 41451);
/* harmony import */ var _services_sorting_sorting_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/sorting/sorting-service */ 81939);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ 52925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @uirouter/angular */ 99305);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_form_entry_vehicleInfo_vehicleInfo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../common/ui/form-entry/vehicleInfo/vehicleInfo.component */ 78676);
/* harmony import */ var _common_ui_matDateTimePicker_hctraMatDateTimePickerWithInput_hctraMatDateTimePickerWithInput_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../common/ui/matDateTimePicker/hctraMatDateTimePickerWithInput/hctraMatDateTimePickerWithInput.component */ 94994);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _validation_min_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../validation/min.directive */ 44854);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../common/ui/modals/actionButtons/actionButtons.component */ 65380);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../pipes/safeHtml.pipe */ 49985);












































const componentDictionary = {
    [_shared__WEBPACK_IMPORTED_MODULE_10__.States.Root]: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__.LandingComponent
};
const routesWithComponents = _routes_config__WEBPACK_IMPORTED_MODULE_9__.RoutesConfig.map(route => ({
    ...route,
    component: componentDictionary[route.name]
}));
class ManageVehiclesModule {
}
ManageVehiclesModule.ɵfac = function ManageVehiclesModule_Factory(t) { return new (t || ManageVehiclesModule)(); };
ManageVehiclesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: ManageVehiclesModule });
ManageVehiclesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ providers: [
        _shared__WEBPACK_IMPORTED_MODULE_10__.WebApiService,
        profile_services__WEBPACK_IMPORTED_MODULE_13__.WebApisService,
        _shared__WEBPACK_IMPORTED_MODULE_10__.VehiclesManagerService,
        _angular_common__WEBPACK_IMPORTED_MODULE_28__.DatePipe,
        _angular_common__WEBPACK_IMPORTED_MODULE_28__.TitleCasePipe,
        vehicles_shared_services_receipt_data_helper_receipt_data_helper_service__WEBPACK_IMPORTED_MODULE_12__.ReceiptDataHelperService,
        vehicles_eztag_replacement__WEBPACK_IMPORTED_MODULE_14__.ReplacementManagerService,
        _services_sorting_sorting_service__WEBPACK_IMPORTED_MODULE_17__.VehiclesSortingService,
        _shared__WEBPACK_IMPORTED_MODULE_10__.VehicleOperationsService
    ], imports: [[
            (0,app_routing__WEBPACK_IMPORTED_MODULE_11__.DynamicRoutes)([common_module__WEBPACK_IMPORTED_MODULE_0__.ENVIRON_CONFIG], (environConfig) => routesWithComponents),
            common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIconModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__.MatDividerModule,
            pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_34__.FlexLayoutModule,
            validation_module__WEBPACK_IMPORTED_MODULE_2__.ValidationModule,
            storefront_module__WEBPACK_IMPORTED_MODULE_3__.StorefrontModule,
            vehicles_common_vehicles_common_module__WEBPACK_IMPORTED_MODULE_4__.VehiclesCommonModule,
            vehicles_eztag_reactivate_module__WEBPACK_IMPORTED_MODULE_5__.TagReactivateModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](ManageVehiclesModule, { declarations: [_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__.GridComponent,
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__.SearchComponent,
        _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__.LandingComponent,
        vehicles_ezplate_edit_editPlate_component__WEBPACK_IMPORTED_MODULE_15__.EditPlateComponent,
        vehicles_eztag_edit_editTag_component__WEBPACK_IMPORTED_MODULE_16__.EditTagComponent], imports: [_uirouter_angular__WEBPACK_IMPORTED_MODULE_36__.UIRouterModule, common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIconModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__.MatDividerModule,
        pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_34__.FlexLayoutModule,
        validation_module__WEBPACK_IMPORTED_MODULE_2__.ValidationModule,
        storefront_module__WEBPACK_IMPORTED_MODULE_3__.StorefrontModule,
        vehicles_common_vehicles_common_module__WEBPACK_IMPORTED_MODULE_4__.VehiclesCommonModule,
        vehicles_eztag_reactivate_module__WEBPACK_IMPORTED_MODULE_5__.TagReactivateModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetComponentScope"](vehicles_ezplate_edit_editPlate_component__WEBPACK_IMPORTED_MODULE_15__.EditPlateComponent, [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_18__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_19__.FocusDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_20__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__.MatLabel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_37__.DefaultLayoutDirective, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_38__.DefaultClassDirective, _common_ui_form_entry_vehicleInfo_vehicleInfo_component__WEBPACK_IMPORTED_MODULE_21__.VehicleInfoComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_37__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_38__.DefaultShowHideDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_37__.DefaultLayoutGapDirective, _common_ui_matDateTimePicker_hctraMatDateTimePickerWithInput_hctraMatDateTimePickerWithInput_component__WEBPACK_IMPORTED_MODULE_22__.HctraMatDateTimePickerWithInputComponent, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_23__.ErrorCheckDirective, _validation_min_directive__WEBPACK_IMPORTED_MODULE_24__.MinDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgSwitchCase, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_25__.ActionButtonsComponent], [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_26__.SafeHtmlPipe, _angular_common__WEBPACK_IMPORTED_MODULE_28__.KeyValuePipe]);


/***/ }),

/***/ 81240:
/*!**********************************************!*\
  !*** ./src/vehicles/manage/routes-config.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutesConfig": () => (/* binding */ RoutesConfig)
/* harmony export */ });
/* harmony import */ var common_resolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/resolvers */ 1444);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ 40719);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ 49084);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var accountDashboard_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! accountDashboard/constants */ 75888);





const RoutesConfig = [
    {
        ...(0,_shared__WEBPACK_IMPORTED_MODULE_1__.GetSharedRouteConfig)(_shared__WEBPACK_IMPORTED_MODULE_1__.Constants.root),
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.userRoles.active),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_3__.MaintenanceFeature.Account),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('vehicleCmsContent', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_2__.CmsIds.Root, mergeParams: true }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cmsAddTagVehicleInfo', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_2__.CmsIds.AddTagVehicleInfo }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cmsAddPlateVehicleInfo', { ItemId: _constants__WEBPACK_IMPORTED_MODULE_2__.CmsIds.AddPlateVehicleInfo }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.UsStatesResolver)('stateList')
        ], wizard: {
            //This is only for the wizard/state handling in KIOSK
            nextState: accountDashboard_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.Frame,
            isEndState: true
        }
    },
];
//RoutesConfig.push(FutureLazyLoadRoutes)


/***/ }),

/***/ 81939:
/*!*****************************************************************!*\
  !*** ./src/vehicles/manage/services/sorting/sorting-service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortColumn": () => (/* binding */ SortColumn),
/* harmony export */   "VehiclesSortingService": () => (/* binding */ VehiclesSortingService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 28596);

var SortColumn;
(function (SortColumn) {
    SortColumn["nickname"] = "nickname";
    SortColumn["color"] = "vehicleColor";
    SortColumn["axles"] = "vehicleClassCode";
    SortColumn["status"] = "tagStatusDesc";
    SortColumn["licencePlate"] = "licencePlate";
    SortColumn["eztagnum"] = "fullTagId";
    SortColumn["year/make/model"] = "year/make/model";
    SortColumn["startDate"] = "pbpStartDate";
    SortColumn["endDate"] = "pbpEndDate";
})(SortColumn || (SortColumn = {}));
class VehiclesSortingService {
    sort(vehicles, sortOn) {
        if (sortOn.colName !== undefined) {
            switch (sortOn.colName) {
                case SortColumn['year/make/model']:
                    this.sortMakeYearModel(vehicles, sortOn.type);
                    return vehicles;
                case SortColumn.licencePlate:
                    this.sortLicPlate(vehicles, sortOn.type);
                    return vehicles;
                default:
                    this.sortColumn(vehicles, sortOn);
                    return vehicles;
            }
        }
    }
    sortColumn(vehicles, sortOn) {
        switch (sortOn.type) {
            case 'asc':
                vehicles.sort((a, b) => this.getVal(a[sortOn.colName], b[sortOn.colName], 'asc'));
                break;
            case 'desc':
                vehicles.sort((a, b) => this.getVal(a[sortOn.colName], b[sortOn.colName], 'desc'));
                break;
        }
    }
    getVal(val1, val2, order) {
        if (val1 === null) {
            return 1;
        }
        if (val2 === null) {
            return -1;
        }
        switch (order) {
            case 'asc':
                return val1.toUpperCase() < val2.toUpperCase() ? -1 : val1.toUpperCase() > val2.toUpperCase() ? 1 : 0;
            case 'desc':
                return val1.toUpperCase() < val2.toUpperCase() ? 1 : val1.toUpperCase() > val2.toUpperCase() ? -1 : 0;
            default:
                return 0;
        }
    }
    sortLicPlate(vehicles, type) {
        switch (type) {
            case 'asc':
                vehicles.sort((a, b) => a.licState < b.licState ? -1 :
                    a.licState === b.licState ? this.getVal(a.licPlate, b.licPlate, 'asc') : 1);
                break;
            case 'desc':
                vehicles.sort((a, b) => a.licState > b.licState ? -1 :
                    a.licState === b.licState ? this.getVal(a.licPlate, b.licPlate, 'desc') : 1);
                break;
            default:
                break;
        }
    }
    sortMakeYearModel(vehicles, type) {
        switch (type) {
            case 'asc':
                vehicles.sort((a, b) => a.vehicleYear < b.vehicleYear ? -1 :
                    a.vehicleYear > b.vehicleYear ? 1 :
                        (a.vehicleMake < b.vehicleMake ? -1 :
                            a.vehicleMake > b.vehicleMake ? 1 :
                                this.getVal(a.vehicleModel, b.vehicleModel, 'asc')));
                break;
            case 'desc':
                vehicles.sort((a, b) => a.vehicleYear < b.vehicleYear ? 1 :
                    a.vehicleYear > b.vehicleYear ? -1 :
                        (a.vehicleMake > b.vehicleMake ? -1 :
                            a.vehicleMake < b.vehicleMake ? 1 :
                                this.getVal(a.vehicleModel, b.vehicleModel, 'desc')));
                break;
            default:
                break;
        }
    }
}
VehiclesSortingService.ɵfac = function VehiclesSortingService_Factory(t) { return new (t || VehiclesSortingService)(); };
VehiclesSortingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VehiclesSortingService, factory: VehiclesSortingService.ɵfac });


/***/ }),

/***/ 52925:
/*!***********************************************************!*\
  !*** ../node_modules/@angular/material/fesm2015/sort.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_SORT_DEFAULT_OPTIONS": () => (/* binding */ MAT_SORT_DEFAULT_OPTIONS),
/* harmony export */   "MAT_SORT_HEADER_INTL_PROVIDER": () => (/* binding */ MAT_SORT_HEADER_INTL_PROVIDER),
/* harmony export */   "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY": () => (/* binding */ MAT_SORT_HEADER_INTL_PROVIDER_FACTORY),
/* harmony export */   "MatSort": () => (/* binding */ MatSort),
/* harmony export */   "MatSortHeader": () => (/* binding */ MatSortHeader),
/* harmony export */   "MatSortHeaderIntl": () => (/* binding */ MatSortHeaderIntl),
/* harmony export */   "MatSortModule": () => (/* binding */ MatSortModule),
/* harmony export */   "matSortAnimations": () => (/* binding */ matSortAnimations)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ 42907);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ 14721);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 73067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 14052);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 82860);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 2225);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ 19117);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 63277);










/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

const _c0 = ["mat-sort-header", ""];

function MatSortHeader_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@arrowPosition.start", function MatSortHeader_div_3_Template_div_animation_arrowPosition_start_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r1._disableViewStateAnimation = true;
    })("@arrowPosition.done", function MatSortHeader_div_3_Template_div_animation_arrowPosition_done_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r3._disableViewStateAnimation = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6)(4, "div", 7)(5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@arrowOpacity", ctx_r0._getArrowViewState())("@arrowPosition", ctx_r0._getArrowViewState())("@allowChildren", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicator", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@leftPointer", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rightPointer", ctx_r0._getArrowDirectionState());
  }
}

const _c1 = ["*"];
const SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.AnimationDurations.ENTERING + ' ' + _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.AnimationCurves.STANDARD_CURVE;
/**
 * Animations used by MatSort.
 * @docs-private
 */

const matSortAnimations = {
  /** Animation that moves the sort indicator. */
  indicator: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('indicator', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('active-asc, asc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
    transform: 'translateY(0px)'
  })), // 10px is the height of the sort indicator, minus the width of the pointers
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('active-desc, desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
    transform: 'translateY(10px)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('active-asc <=> active-desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(SORT_ANIMATION_TRANSITION))]),

  /** Animation that rotates the left pointer of the indicator based on the sorting direction. */
  leftPointer: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('leftPointer', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('active-asc, asc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
    transform: 'rotate(-45deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('active-desc, desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
    transform: 'rotate(45deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('active-asc <=> active-desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(SORT_ANIMATION_TRANSITION))]),

  /** Animation that rotates the right pointer of the indicator based on the sorting direction. */
  rightPointer: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('rightPointer', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('active-asc, asc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
    transform: 'rotate(45deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('active-desc, desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
    transform: 'rotate(-45deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('active-asc <=> active-desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(SORT_ANIMATION_TRANSITION))]),

  /** Animation that controls the arrow opacity. */
  arrowOpacity: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('arrowOpacity', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('desc-to-active, asc-to-active, active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
    opacity: 1
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('desc-to-hint, asc-to-hint, hint', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
    opacity: 0.54
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
    opacity: 0
  })), // Transition between all states except for immediate transitions
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('* => asc, * => desc, * => active, * => hint, * => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('0ms')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('* <=> *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(SORT_ANIMATION_TRANSITION))]),

  /**
   * Animation for the translation of the arrow as a whole. States are separated into two
   * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
   * peek, and active. The other states define a specific animation (source-to-destination)
   * and are determined as a function of their prev user-perceived state and what the next state
   * should be.
   */
  arrowPosition: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('arrowPosition', [// Hidden Above => Hint Center
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('* => desc-to-hint, * => desc-to-active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(SORT_ANIMATION_TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
    transform: 'translateY(-25%)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
    transform: 'translateY(0)'
  })]))), // Hint Center => Hidden Below
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('* => hint-to-desc, * => active-to-desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(SORT_ANIMATION_TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
    transform: 'translateY(0)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
    transform: 'translateY(25%)'
  })]))), // Hidden Below => Hint Center
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('* => asc-to-hint, * => asc-to-active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(SORT_ANIMATION_TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
    transform: 'translateY(25%)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
    transform: 'translateY(0)'
  })]))), // Hint Center => Hidden Above
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('* => hint-to-asc, * => active-to-asc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(SORT_ANIMATION_TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
    transform: 'translateY(0)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
    transform: 'translateY(-25%)'
  })]))), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
    transform: 'translateY(0)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('hint-to-desc, active-to-desc, desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
    transform: 'translateY(-25%)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('hint-to-asc, active-to-asc, asc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
    transform: 'translateY(25%)'
  }))]),

  /** Necessary trigger that calls animate on children animations. */
  allowChildren: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('allowChildren', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('* <=> *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animateChild)(), {
    optional: true
  })])])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */

function getSortDuplicateSortableIdError(id) {
  return Error(`Cannot have two MatSortables with the same id (${id}).`);
}
/** @docs-private */


function getSortHeaderNotContainedWithinSortError() {
  return Error(`MatSortHeader must be placed within a parent element with the MatSort directive.`);
}
/** @docs-private */


function getSortHeaderMissingIdError() {
  return Error(`MatSortHeader must be provided with a unique id.`);
}
/** @docs-private */


function getSortInvalidDirectionError(direction) {
  return Error(`${direction} is not a valid sort direction ('asc' or 'desc').`);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
 * include it in a custom provider.
 */


class MatSortHeaderIntl {
  constructor() {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }

}

MatSortHeaderIntl.ɵfac = function MatSortHeaderIntl_Factory(t) {
  return new (t || MatSortHeaderIntl)();
};

MatSortHeaderIntl.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MatSortHeaderIntl,
  factory: MatSortHeaderIntl.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortHeaderIntl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/** @docs-private */


function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatSortHeaderIntl();
}
/** @docs-private */


const MAT_SORT_HEADER_INTL_PROVIDER = {
  // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
  provide: MatSortHeaderIntl,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatSortHeaderIntl]],
  useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token to be used to override the default options for `mat-sort`. */

const MAT_SORT_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_SORT_DEFAULT_OPTIONS'); // Boilerplate for applying mixins to MatSort.

/** @docs-private */

const _MatSortBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinInitialized)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisabled)(class {}));
/** Container for MatSortables to manage the sort state and provide default sort parameters. */


class MatSort extends _MatSortBase {
  constructor(_defaultOptions) {
    super();
    this._defaultOptions = _defaultOptions;
    /** Collection of all registered sortables that this directive manages. */

    this.sortables = new Map();
    /** Used to notify any child components listening to state changes. */

    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /**
     * The direction to set when an MatSortable is initially sorted.
     * May be overriden by the MatSortable's sort start.
     */

    this.start = 'asc';
    this._direction = '';
    /** Event emitted when the user changes either the active sort or sort direction. */

    this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /** The sort direction of the currently active MatSortable. */


  get direction() {
    return this._direction;
  }

  set direction(direction) {
    if (direction && direction !== 'asc' && direction !== 'desc' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getSortInvalidDirectionError(direction);
    }

    this._direction = direction;
  }
  /**
   * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
   * May be overriden by the MatSortable's disable clear input.
   */


  get disableClear() {
    return this._disableClear;
  }

  set disableClear(v) {
    this._disableClear = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(v);
  }
  /**
   * Register function to be used by the contained MatSortables. Adds the MatSortable to the
   * collection of MatSortables.
   */


  register(sortable) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!sortable.id) {
        throw getSortHeaderMissingIdError();
      }

      if (this.sortables.has(sortable.id)) {
        throw getSortDuplicateSortableIdError(sortable.id);
      }
    }

    this.sortables.set(sortable.id, sortable);
  }
  /**
   * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
   * collection of contained MatSortables.
   */


  deregister(sortable) {
    this.sortables.delete(sortable.id);
  }
  /** Sets the active sort id and determines the new sort direction. */


  sort(sortable) {
    if (this.active != sortable.id) {
      this.active = sortable.id;
      this.direction = sortable.start ? sortable.start : this.start;
    } else {
      this.direction = this.getNextSortDirection(sortable);
    }

    this.sortChange.emit({
      active: this.active,
      direction: this.direction
    });
  }
  /** Returns the next sort direction of the active sortable, checking for potential overrides. */


  getNextSortDirection(sortable) {
    var _a, _b, _c;

    if (!sortable) {
      return '';
    } // Get the sort direction cycle with the potential sortable overrides.


    const disableClear = (_b = (_a = sortable === null || sortable === void 0 ? void 0 : sortable.disableClear) !== null && _a !== void 0 ? _a : this.disableClear) !== null && _b !== void 0 ? _b : !!((_c = this._defaultOptions) === null || _c === void 0 ? void 0 : _c.disableClear);
    let sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear); // Get and return the next direction in the cycle

    let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;

    if (nextDirectionIndex >= sortDirectionCycle.length) {
      nextDirectionIndex = 0;
    }

    return sortDirectionCycle[nextDirectionIndex];
  }

  ngOnInit() {
    this._markInitialized();
  }

  ngOnChanges() {
    this._stateChanges.next();
  }

  ngOnDestroy() {
    this._stateChanges.complete();
  }

}

MatSort.ɵfac = function MatSort_Factory(t) {
  return new (t || MatSort)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SORT_DEFAULT_OPTIONS, 8));
};

MatSort.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatSort,
  selectors: [["", "matSort", ""]],
  hostAttrs: [1, "mat-sort"],
  inputs: {
    disabled: ["matSortDisabled", "disabled"],
    active: ["matSortActive", "active"],
    start: ["matSortStart", "start"],
    direction: ["matSortDirection", "direction"],
    disableClear: ["matSortDisableClear", "disableClear"]
  },
  outputs: {
    sortChange: "matSortChange"
  },
  exportAs: ["matSort"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSort, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matSort]',
      exportAs: 'matSort',
      host: {
        'class': 'mat-sort'
      },
      inputs: ['disabled: matSortDisabled']
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_SORT_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matSortActive']
    }],
    start: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matSortStart']
    }],
    direction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matSortDirection']
    }],
    disableClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matSortDisableClear']
    }],
    sortChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['matSortChange']
    }]
  });
})();
/** Returns the sort direction cycle to use given the provided parameters of order and clear. */


function getSortDirectionCycle(start, disableClear) {
  let sortOrder = ['asc', 'desc'];

  if (start == 'desc') {
    sortOrder.reverse();
  }

  if (!disableClear) {
    sortOrder.push('');
  }

  return sortOrder;
} // Boilerplate for applying mixins to the sort header.

/** @docs-private */


const _MatSortHeaderBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisabled)(class {});
/**
 * Applies sorting behavior (click to change sort) and styles to an element, including an
 * arrow to display the current sort direction.
 *
 * Must be provided with an id and contained within a parent MatSort directive.
 *
 * If used on header cells in a CdkTable, it will automatically default its id from its containing
 * column definition.
 */


class MatSortHeader extends _MatSortHeaderBase {
  constructor(
  /**
   * @deprecated `_intl` parameter isn't being used anymore and it'll be removed.
   * @breaking-change 13.0.0
   */
  _intl, _changeDetectorRef, // `MatSort` is not optionally injected, but just asserted manually w/ better error.
  // tslint:disable-next-line: lightweight-tokens
  _sort, _columnDef, _focusMonitor, _elementRef,
  /** @breaking-change 14.0.0 _ariaDescriber will be required. */
  _ariaDescriber) {
    // Note that we use a string token for the `_columnDef`, because the value is provided both by
    // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
    // and we want to avoid having the sort header depending on the CDK table because
    // of this single reference.
    super();
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._sort = _sort;
    this._columnDef = _columnDef;
    this._focusMonitor = _focusMonitor;
    this._elementRef = _elementRef;
    this._ariaDescriber = _ariaDescriber;
    /**
     * Flag set to true when the indicator should be displayed while the sort is not active. Used to
     * provide an affordance that the header is sortable by showing on focus and hover.
     */

    this._showIndicatorHint = false;
    /**
     * The view transition state of the arrow (translation/ opacity) - indicates its `from` and `to`
     * position through the animation. If animations are currently disabled, the fromState is removed
     * so that there is no animation displayed.
     */

    this._viewState = {};
    /** The direction the arrow should be facing according to the current state. */

    this._arrowDirection = '';
    /**
     * Whether the view state animation should show the transition between the `from` and `to` states.
     */

    this._disableViewStateAnimation = false;
    /** Sets the position of the arrow that displays when sorted. */

    this.arrowPosition = 'after'; // Default the action description to "Sort" because it's better than nothing.
    // Without a description, the button's label comes from the sort header text content,
    // which doesn't give any indication that it performs a sorting operation.

    this._sortActionDescription = 'Sort';

    if (!_sort && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getSortHeaderNotContainedWithinSortError();
    }

    this._handleStateChanges();
  }
  /**
   * Description applied to MatSortHeader's button element with aria-describedby. This text should
   * describe the action that will occur when the user clicks the sort header.
   */


  get sortActionDescription() {
    return this._sortActionDescription;
  }

  set sortActionDescription(value) {
    this._updateSortActionDescription(value);
  }
  /** Overrides the disable clear value of the containing MatSort for this MatSortable. */


  get disableClear() {
    return this._disableClear;
  }

  set disableClear(v) {
    this._disableClear = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(v);
  }

  ngOnInit() {
    if (!this.id && this._columnDef) {
      this.id = this._columnDef.name;
    } // Initialize the direction of the arrow and set the view state to be immediately that state.


    this._updateArrowDirection();

    this._setAnimationTransitionState({
      toState: this._isSorted() ? 'active' : this._arrowDirection
    });

    this._sort.register(this);

    this._sortButton = this._elementRef.nativeElement.querySelector('[role="button"]');

    this._updateSortActionDescription(this._sortActionDescription);
  }

  ngAfterViewInit() {
    // We use the focus monitor because we also want to style
    // things differently based on the focus origin.
    this._focusMonitor.monitor(this._elementRef, true).subscribe(origin => {
      const newState = !!origin;

      if (newState !== this._showIndicatorHint) {
        this._setIndicatorHintVisible(newState);

        this._changeDetectorRef.markForCheck();
      }
    });
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);

    this._sort.deregister(this);

    this._rerenderSubscription.unsubscribe();
  }
  /**
   * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
   * user showing what the active sort will become. If set to false, the arrow will fade away.
   */


  _setIndicatorHintVisible(visible) {
    // No-op if the sort header is disabled - should not make the hint visible.
    if (this._isDisabled() && visible) {
      return;
    }

    this._showIndicatorHint = visible;

    if (!this._isSorted()) {
      this._updateArrowDirection();

      if (this._showIndicatorHint) {
        this._setAnimationTransitionState({
          fromState: this._arrowDirection,
          toState: 'hint'
        });
      } else {
        this._setAnimationTransitionState({
          fromState: 'hint',
          toState: this._arrowDirection
        });
      }
    }
  }
  /**
   * Sets the animation transition view state for the arrow's position and opacity. If the
   * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
   * no animation appears.
   */


  _setAnimationTransitionState(viewState) {
    this._viewState = viewState || {}; // If the animation for arrow position state (opacity/translation) should be disabled,
    // remove the fromState so that it jumps right to the toState.

    if (this._disableViewStateAnimation) {
      this._viewState = {
        toState: viewState.toState
      };
    }
  }
  /** Triggers the sort on this sort header and removes the indicator hint. */


  _toggleOnInteraction() {
    this._sort.sort(this); // Do not show the animation if the header was already shown in the right position.


    if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
      this._disableViewStateAnimation = true;
    }
  }

  _handleClick() {
    if (!this._isDisabled()) {
      this._sort.sort(this);
    }
  }

  _handleKeydown(event) {
    if (!this._isDisabled() && (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.ENTER)) {
      event.preventDefault();

      this._toggleOnInteraction();
    }
  }
  /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */


  _isSorted() {
    return this._sort.active == this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
  }
  /** Returns the animation state for the arrow direction (indicator and pointers). */


  _getArrowDirectionState() {
    return `${this._isSorted() ? 'active-' : ''}${this._arrowDirection}`;
  }
  /** Returns the arrow position state (opacity, translation). */


  _getArrowViewState() {
    const fromState = this._viewState.fromState;
    return (fromState ? `${fromState}-to-` : '') + this._viewState.toState;
  }
  /**
   * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
   * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
   * active sorted direction. The reason this is updated through a function is because the direction
   * should only be changed at specific times - when deactivated but the hint is displayed and when
   * the sort is active and the direction changes. Otherwise the arrow's direction should linger
   * in cases such as the sort becoming deactivated but we want to animate the arrow away while
   * preserving its direction, even though the next sort direction is actually different and should
   * only be changed once the arrow displays again (hint or activation).
   */


  _updateArrowDirection() {
    this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
  }

  _isDisabled() {
    return this._sort.disabled || this.disabled;
  }
  /**
   * Gets the aria-sort attribute that should be applied to this sort header. If this header
   * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
   * says that the aria-sort property should only be present on one header at a time, so removing
   * ensures this is true.
   */


  _getAriaSortAttribute() {
    if (!this._isSorted()) {
      return 'none';
    }

    return this._sort.direction == 'asc' ? 'ascending' : 'descending';
  }
  /** Whether the arrow inside the sort header should be rendered. */


  _renderArrow() {
    return !this._isDisabled() || this._isSorted();
  }

  _updateSortActionDescription(newDescription) {
    var _a, _b; // We use AriaDescriber for the sort button instead of setting an `aria-label` because some
    // screen readers (notably VoiceOver) will read both the column header *and* the button's label
    // for every *cell* in the table, creating a lot of unnecessary noise.
    // If _sortButton is undefined, the component hasn't been initialized yet so there's
    // nothing to update in the DOM.


    if (this._sortButton) {
      // removeDescription will no-op if there is no existing message.
      // TODO(jelbourn): remove optional chaining when AriaDescriber is required.
      (_a = this._ariaDescriber) === null || _a === void 0 ? void 0 : _a.removeDescription(this._sortButton, this._sortActionDescription);
      (_b = this._ariaDescriber) === null || _b === void 0 ? void 0 : _b.describe(this._sortButton, newDescription);
    }

    this._sortActionDescription = newDescription;
  }
  /** Handles changes in the sorting state. */


  _handleStateChanges() {
    this._rerenderSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(this._sort.sortChange, this._sort._stateChanges, this._intl.changes).subscribe(() => {
      if (this._isSorted()) {
        this._updateArrowDirection(); // Do not show the animation if the header was already shown in the right position.


        if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
          this._disableViewStateAnimation = true;
        }

        this._setAnimationTransitionState({
          fromState: this._arrowDirection,
          toState: 'active'
        });

        this._showIndicatorHint = false;
      } // If this header was recently active and now no longer sorted, animate away the arrow.


      if (!this._isSorted() && this._viewState && this._viewState.toState === 'active') {
        this._disableViewStateAnimation = false;

        this._setAnimationTransitionState({
          fromState: 'active',
          toState: this._arrowDirection
        });
      }

      this._changeDetectorRef.markForCheck();
    });
  }

}

MatSortHeader.ɵfac = function MatSortHeader_Factory(t) {
  return new (t || MatSortHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSortHeaderIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSort, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('MAT_SORT_HEADER_COLUMN_DEF', 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.AriaDescriber, 8));
};

MatSortHeader.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatSortHeader,
  selectors: [["", "mat-sort-header", ""]],
  hostAttrs: [1, "mat-sort-header"],
  hostVars: 3,
  hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatSortHeader_click_HostBindingHandler() {
        return ctx._handleClick();
      })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      })("mouseenter", function MatSortHeader_mouseenter_HostBindingHandler() {
        return ctx._setIndicatorHintVisible(true);
      })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
        return ctx._setIndicatorHintVisible(false);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-sort", ctx._getAriaSortAttribute());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-disabled", ctx._isDisabled());
    }
  },
  inputs: {
    disabled: "disabled",
    id: ["mat-sort-header", "id"],
    arrowPosition: "arrowPosition",
    start: "start",
    sortActionDescription: "sortActionDescription",
    disableClear: "disableClear"
  },
  exportAs: ["matSortHeader"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 4,
  vars: 6,
  consts: [["role", "button", 1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], ["class", "mat-sort-header-arrow", 4, "ngIf"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]],
  template: function MatSortHeader_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatSortHeader_div_3_Template, 6, 6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition == "before");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._isDisabled() ? null : 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._renderArrow());
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
  styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"],
  encapsulation: 2,
  data: {
    animation: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[mat-sort-header]',
      exportAs: 'matSortHeader',
      host: {
        'class': 'mat-sort-header',
        '(click)': '_handleClick()',
        '(keydown)': '_handleKeydown($event)',
        '(mouseenter)': '_setIndicatorHintVisible(true)',
        '(mouseleave)': '_setIndicatorHintVisible(false)',
        '[attr.aria-sort]': '_getAriaSortAttribute()',
        '[class.mat-sort-header-disabled]': '_isDisabled()'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      inputs: ['disabled'],
      animations: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren],
      template: "<!--\n  We set the `tabindex` on an element inside the table header, rather than the header itself,\n  because of a bug in NVDA where having a `tabindex` on a `th` breaks keyboard navigation in the\n  table (see https://github.com/nvaccess/nvda/issues/7718). This allows for the header to both\n  be focusable, and have screen readers read out its `aria-sort` state. We prefer this approach\n  over having a button with an `aria-label` inside the header, because the button's `aria-label`\n  will be read out as the user is navigating the table's cell (see #13012).\n\n  The approach is based off of: https://dequeuniversity.com/library/aria/tables/sf-sortable-grid\n-->\n<div class=\"mat-sort-header-container mat-focus-indicator\"\n     [class.mat-sort-header-sorted]=\"_isSorted()\"\n     [class.mat-sort-header-position-before]=\"arrowPosition == 'before'\"\n     [attr.tabindex]=\"_isDisabled() ? null : 0\"\n     role=\"button\">\n\n  <!--\n    TODO(crisbeto): this div isn't strictly necessary, but we have to keep it due to a large\n    number of screenshot diff failures. It should be removed eventually. Note that the difference\n    isn't visible with a shorter header, but once it breaks up into multiple lines, this element\n    causes it to be center-aligned, whereas removing it will keep the text to the left.\n  -->\n  <div class=\"mat-sort-header-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <!-- Disable animations while a current animation is running -->\n  <div class=\"mat-sort-header-arrow\"\n       *ngIf=\"_renderArrow()\"\n       [@arrowOpacity]=\"_getArrowViewState()\"\n       [@arrowPosition]=\"_getArrowViewState()\"\n       [@allowChildren]=\"_getArrowDirectionState()\"\n       (@arrowPosition.start)=\"_disableViewStateAnimation = true\"\n       (@arrowPosition.done)=\"_disableViewStateAnimation = false\">\n    <div class=\"mat-sort-header-stem\"></div>\n    <div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\">\n      <div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-middle\"></div>\n    </div>\n  </div>\n</div>\n",
      styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"]
    }]
  }], function () {
    return [{
      type: MatSortHeaderIntl
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: MatSort,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: ['MAT_SORT_HEADER_COLUMN_DEF']
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.AriaDescriber,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mat-sort-header']
    }],
    arrowPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    start: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortActionDescription: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatSortModule {}

MatSortModule.ɵfac = function MatSortModule_Factory(t) {
  return new (t || MatSortModule)();
};

MatSortModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatSortModule
});
MatSortModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [MAT_SORT_HEADER_INTL_PROVIDER],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule],
      exports: [MatSort, MatSortHeader],
      declarations: [MatSort, MatSortHeader],
      providers: [MAT_SORT_HEADER_INTL_PROVIDER]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=613.7e53b9cb9dc147fa.js.map