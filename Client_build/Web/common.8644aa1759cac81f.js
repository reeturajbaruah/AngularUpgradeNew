"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[592],{

/***/ 40277:
/*!********************************************!*\
  !*** ./src/account/pending-funds/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPendingFundsModule": () => (/* reexport safe */ _module__WEBPACK_IMPORTED_MODULE_1__.AccountPendingFundsModule),
/* harmony export */   "Models": () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_2__.Models),
/* harmony export */   "PendingFundsFacadeService": () => (/* reexport safe */ _services_facade_pending_funds_facade_service__WEBPACK_IMPORTED_MODULE_0__.PendingFundsFacadeService)
/* harmony export */ });
/* harmony import */ var _services_facade_pending_funds_facade_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/facade/pending-funds-facade.service */ 71807);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 39806);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models */ 31798);





/***/ }),

/***/ 31798:
/*!*********************************************!*\
  !*** ./src/account/pending-funds/models.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Models": () => (/* binding */ Models)
/* harmony export */ });
const Models = {
    'pending-funds': 'PENDING-FUNDS'
};


/***/ }),

/***/ 39806:
/*!*********************************************!*\
  !*** ./src/account/pending-funds/module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPendingFundsModule": () => (/* binding */ AccountPendingFundsModule)
/* harmony export */ });
/* harmony import */ var _services_api_pending_funds_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/api/pending-funds-api.service */ 57128);
/* harmony import */ var _services_facade_pending_funds_facade_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/facade/pending-funds-facade.service */ 71807);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);



class AccountPendingFundsModule {
}
AccountPendingFundsModule.ɵfac = function AccountPendingFundsModule_Factory(t) { return new (t || AccountPendingFundsModule)(); };
AccountPendingFundsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AccountPendingFundsModule });
AccountPendingFundsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        _services_facade_pending_funds_facade_service__WEBPACK_IMPORTED_MODULE_1__.PendingFundsFacadeService,
        _services_api_pending_funds_api_service__WEBPACK_IMPORTED_MODULE_0__.PendingFundsApiService
    ] });


/***/ }),

/***/ 57128:
/*!*****************************************************************************!*\
  !*** ./src/account/pending-funds/services/api/pending-funds-api.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingFundsApiService": () => (/* binding */ PendingFundsApiService)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/services */ 8784);



class PendingFundsApiService {
  constructor(httpService, responseErrorService) {
    this.httpService = httpService;
    this.responseErrorService = responseErrorService;
  }

  rebillAmt() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const endpoint = '/api/account/makepayment/figurePayment';
      const res = yield _this.httpService.get(endpoint);
      return _this.checkResponse(res);
    })();
  }

  updateAccount(request) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const endpoint = '';
      const res = yield _this2.httpService.post(endpoint, request);
      return _this2.checkResponse(res);
    })();
  }

  checkResponse(res) {
    if (this.responseErrorService.isErrorFree(res)) {
      this.responseErrorService.displayAlertsFromResponse(res);
      return res;
    }
  }

}

PendingFundsApiService.ɵfac = function PendingFundsApiService_Factory(t) {
  return new (t || PendingFundsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](common_services__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](common_services__WEBPACK_IMPORTED_MODULE_1__.ResponseErrorService));
};

PendingFundsApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: PendingFundsApiService,
  factory: PendingFundsApiService.ɵfac
});

/***/ }),

/***/ 71807:
/*!***********************************************************************************!*\
  !*** ./src/account/pending-funds/services/facade/pending-funds-facade.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingFundsFacadeService": () => (/* binding */ PendingFundsFacadeService)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _api_pending_funds_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/pending-funds-api.service */ 57128);



class PendingFundsFacadeService {
  constructor(api) {
    this.api = api;
  }

  getRebillAmt() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _this.api.rebillAmt();

      if (res) {
        return res.rebillAmount ? res.rebillAmount : -1;
      }
    })();
  }

  updateAccount() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const req = {};
      return yield _this2.api.updateAccount(req);
    })();
  }

}

PendingFundsFacadeService.ɵfac = function PendingFundsFacadeService_Factory(t) {
  return new (t || PendingFundsFacadeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_pending_funds_api_service__WEBPACK_IMPORTED_MODULE_1__.PendingFundsApiService));
};

PendingFundsFacadeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: PendingFundsFacadeService,
  factory: PendingFundsFacadeService.ɵfac
});

/***/ }),

/***/ 33965:
/*!********************************!*\
  !*** ./src/animations/hide.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideTrigger": () => (/* binding */ hideTrigger)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 2225);

const hideTrigger = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('hide', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ display: 'block', opacity: 1 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ display: 'none', opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('true => false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('700ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ display: 'block', offset: 0, opacity: 0 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ display: 'block', offset: 0.6, opacity: 0.3 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ display: 'block', offset: 1, opacity: 1 })
    ]))),
]);


/***/ }),

/***/ 51110:
/*!****************************************************************!*\
  !*** ./src/common/services/copyToExcel/copyToExcel.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyToExcelService": () => (/* binding */ CopyToExcelService)
/* harmony export */ });
/* harmony import */ var common_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/providers */ 61264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 28596);


class CopyToExcelService {
    constructor(window) {
        this.window = window;
    }
    getDataForExcel(rawData, cols) {
        const doctype = this.window.document.implementation.createDocumentType('html', '-//W3C//DTD XHTML 1.0 Strict//EN', 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd');
        const dom = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', doctype);
        const newHeadRow = this.getExcelTblHeadRow(cols);
        const newRows = this.getExcelTblRows(rawData, cols);
        const newTbl = '<table>' + newHeadRow + newRows.join('') + '</table>';
        return newTbl;
    }
    getExcelTblRows(rawData, cols) {
        const newRows = [];
        rawData.forEach(obj => {
            const newTDs = [];
            cols.forEach(col => {
                const newTd = '<td>' + (obj[col] === undefined ? ' ' : obj[col]) + '</td>';
                newTDs.push(newTd);
            });
            const newRow = '<tr>' + newTDs.join('') + '</tr>';
            newRows.push(newRow);
        });
        return newRows;
    }
    getExcelTblHeadRow(cols) {
        const newHeadCols = [];
        if (cols.length > 0) {
            cols.forEach(col => {
                const newCol = '<td>' + col.toUpperCase() + '</td>';
                newHeadCols.push(newCol);
            });
            return '<tr>' + newHeadCols.join('') + '</tr>';
        }
    }
}
CopyToExcelService.ɵfac = function CopyToExcelService_Factory(t) { return new (t || CopyToExcelService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](common_providers__WEBPACK_IMPORTED_MODULE_0__.WindowRef)); };
CopyToExcelService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CopyToExcelService, factory: CopyToExcelService.ɵfac });


/***/ }),

/***/ 8769:
/*!***************************************!*\
  !*** ./src/profile/services/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebApisService": () => (/* reexport safe */ _webApis_service__WEBPACK_IMPORTED_MODULE_0__.WebApisService)
/* harmony export */ });
/* harmony import */ var _webApis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webApis.service */ 60629);



/***/ }),

/***/ 60629:
/*!*************************************************!*\
  !*** ./src/profile/services/webApis.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebApisService": () => (/* binding */ WebApisService)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/services */ 8784);



class WebApisService {
  constructor(httpService, responseErrorService) {
    this.httpService = httpService;
    this.responseErrorService = responseErrorService;
  }

  get baseUrl() {
    return `/api/sessions/`;
  }

  getAccountInfo() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${_this.baseUrl}AccountInformation/GetAccountInformation`;
      const response = yield _this.httpService.get(url);

      if (_this.responseErrorService.isErrorFree(response)) {
        _this.responseErrorService.displayAlertsFromResponse(response);

        return response;
      }
    })();
  }

  getAuthContacts() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${_this2.baseUrl}AccountInformation/GetAuthorizedContacts`;
      const response = yield _this2.httpService.get(url);

      if (_this2.responseErrorService.isErrorFree(response)) {
        return response;
      }

      throw response;
    })();
  }

  setAuthContacts(request) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${_this3.baseUrl}AccountInformation/ModifyAuthorizedContact`;
      const response = yield _this3.httpService.post(url, request);

      if (_this3.responseErrorService.isErrorFree(response)) {
        return response;
      }

      throw response;
    })();
  }

  getComPreferences() {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${_this4.baseUrl}AccountInformation/GetAccountPreferences`;
      const response = yield _this4.httpService.get(url);

      if (_this4.responseErrorService.isErrorFree(response)) {
        return response;
      }
    })();
  }

  setComPreferences(request) {
    var _this5 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${_this5.baseUrl}AccountInformation/ModifyAccountPreferences`;
      const response = yield _this5.httpService.post(url, request);

      if (_this5.responseErrorService.isErrorFree(response)) {
        return response;
      }
    })();
  }

  getPaymentMethodData() {
    var _this6 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${_this6.baseUrl}PaymentMethodData/GetPaymentMethodData`;
      const response = yield _this6.httpService.get(url);

      if (_this6.responseErrorService.isErrorFree(response)) {
        return response;
      }
    })();
  }

  setContactInfo(request) {
    var _this7 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${_this7.baseUrl}PersonalInfo/UpdatePersonalInfo`;
      const response = yield _this7.httpService.post(url, request);

      if (_this7.responseErrorService.isErrorFree(response)) {
        return response;
      }
    })();
  }

  updateContactInfo(request) {
    var _this8 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${_this8.baseUrl}PersonalInfo/UpdateContactInfo`;
      const response = yield _this8.httpService.post(url, request);

      if (_this8.responseErrorService.isErrorFree(response)) {
        return response;
      }
    })();
  }

  updateMailingInfo(request) {
    var _this9 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${_this9.baseUrl}PersonalInfo/UpdateMailingInfo`;
      const response = yield _this9.httpService.post(url, request);

      if (_this9.responseErrorService.isErrorFree(response)) {
        return response;
      }
    })();
  }

  updateRebillAmount(request) {
    var _this10 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${_this10.baseUrl}UpdateRebillAmount/UpdateRebillAmount`;
      const response = yield _this10.httpService.post(url, request);

      if (_this10.responseErrorService.isErrorFree(response)) {
        return response;
      }
    })();
  }

  unblockPaymentMethod(request) {
    var _this11 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `/api/account/manageBilling/unblockBillingMethod`;
      const response = yield _this11.httpService.post(url, request);

      if (_this11.responseErrorService.isErrorFree(response)) {
        return response;
      }
    })();
  }

  removePaymentMethod(request) {
    var _this12 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `/api/account/manageBilling/removeBillingMethod`;
      const response = yield _this12.httpService.post(url, request);

      if (_this12.responseErrorService.isErrorFree(response)) {
        return response;
      }
    })();
  }

}

WebApisService.ɵfac = function WebApisService_Factory(t) {
  return new (t || WebApisService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_common_services__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_common_services__WEBPACK_IMPORTED_MODULE_1__.ResponseErrorService));
};

WebApisService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: WebApisService,
  factory: WebApisService.ɵfac
});

/***/ }),

/***/ 1645:
/*!*************************************************************!*\
  !*** ./src/shared/ui/display/accordion/accordion.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionModule": () => (/* binding */ AccordionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _components_accordion_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/accordion.component */ 67914);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pipes/module */ 20445);
/* harmony import */ var _services_accordion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/accordion.service */ 35612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 28596);







class AccordionModule {
}
AccordionModule.ɵfac = function AccordionModule_Factory(t) { return new (t || AccordionModule)(); };
AccordionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AccordionModule });
AccordionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _services_accordion_service__WEBPACK_IMPORTED_MODULE_2__.AccordionService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDividerModule,
            pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AccordionModule, { declarations: [_components_accordion_component__WEBPACK_IMPORTED_MODULE_0__.AccordionComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDividerModule,
        pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule], exports: [_components_accordion_component__WEBPACK_IMPORTED_MODULE_0__.AccordionComponent] }); })();


/***/ }),

/***/ 91402:
/*!*********************************************************!*\
  !*** ./src/vehicles/vehicleCartBase/vehicleCartBase.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleCartBase": () => (/* binding */ VehicleCartBase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/services */ 8784);


class VehicleCartBase {
    constructor(toasterService) {
        this.toasterService = toasterService;
    }
    checkIfLicExistsInCart(licPlate, licState) {
        if (this.cartTags.filter(tag => tag.licPlate === licPlate.toUpperCase()
            && tag.licState === licState.toUpperCase()).length > 0) {
            const errorMsg = this.addAdditionalTagCms.ErrorPlateExistsInCart;
            this.toasterService.show('Error', errorMsg);
            return true;
        }
        else {
            return false;
        }
    }
}
VehicleCartBase.ɵfac = function VehicleCartBase_Factory(t) { return new (t || VehicleCartBase)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_0__.ToasterService)); };
VehicleCartBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: VehicleCartBase, inputs: { addAdditionalTagCms: "addAdditionalTagCms" } });


/***/ })

}]);
//# sourceMappingURL=common.8644aa1759cac81f.js.map