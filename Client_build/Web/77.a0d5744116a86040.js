"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[77],{

/***/ 17900:
/*!**************************************************************************!*\
  !*** ./src/helpAndSupport/components/contact-us/contact-us.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsComponent": () => (/* binding */ ContactUsComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var shared_sliders_email_us_components_email_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/sliders/email-us/components/email-us.component */ 84279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var helpAndSupport_services_manager_help_and_support_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpAndSupport/services/manager/help-and-support-manager.service */ 99723);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/safeHtml.pipe */ 49985);








class ContactUsComponent {
  constructor(manager, dialogService, elementRef, renderer) {
    this.manager = manager;
    this.dialogService = dialogService;
    this.elementRef = elementRef;
    this.renderer = renderer;
  }

  ngOnInit() {
    this.contactUsCms = this.manager.getContactUsCms();
  }

  ngAfterViewInit() {
    const emailUsLink = this.elementRef.nativeElement.querySelector('#emailUs');

    if (emailUsLink) {
      this.renderer.listen(emailUsLink, 'click', event => {
        event.preventDefault();
        this.openEmailUsSlider();
      });
    }
  }

  openEmailUsSlider() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.dialogService.openSliderCentered(shared_sliders_email_us_components_email_us_component__WEBPACK_IMPORTED_MODULE_1__.EmailUsComponent, '', {
        title: _this.contactUsCms.emailUsCms.Title
      });
    })();
  }

}

ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) {
  return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](helpAndSupport_services_manager_help_and_support_manager_service__WEBPACK_IMPORTED_MODULE_2__.HelpAndSupportManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2));
};

ContactUsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ContactUsComponent,
  selectors: [["help-and-support-contact-us"]],
  decls: 24,
  vars: 10,
  consts: [[3, "innerHtml"], ["svgIcon", "email-us"], ["svgIcon", "csr-phone"], ["svgIcon", "roadside-assistance"]],
  template: function ContactUsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "header");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "h2", 0)(3, "mat-divider")(4, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "section")(6, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "mat-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "h3", 0)(10, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "section")(13, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "h3", 0)(17, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "section")(19, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "h3", 0)(23, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.contactUsCms.Title, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.contactUsCms.ShortDescription, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.contactUsCms.emailUsCms.Title, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 8, ctx.contactUsCms.emailUsCms.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.contactUsCms.customerServiceCms.Title, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.contactUsCms.customerServiceCms.ShortDescription, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.contactUsCms.roadsideAssistanceCms.Title, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.contactUsCms.roadsideAssistanceCms.ShortDescription, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
    }
  },
  directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_4__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-top: 14px;\n  padding-bottom: 14px;\n  font-size: 32px;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n  padding-bottom: 14px;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  align-items: center;\n  height: 45px;\n  width: 45px;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFUSxvQkFBQTtBQUZSO0FBQUE7RUFLWSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUZaO0FBTEE7RUFXWSxXQUFBO0VBQ0Esb0JBQUE7QUFIWjtBQVRBO0VBaUJRLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFMUjtBQWZBO0VBdUJZLGFBQUE7RUFDQSxzQkFBQTtBQUxaO0FBbkJBO0VBNEJZLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQU5aO0FBekJBO0VBbUNZLG1CQUFBO0FBUFo7QUE1QkE7RUF3Q1EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVRSIiwiZmlsZSI6ImNvbnRhY3QtdXMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE0cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 94355:
/*!************************************************************************!*\
  !*** ./src/helpAndSupport/components/documents/documents.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentsComponent": () => (/* binding */ DocumentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var helpAndSupport_services_manager_help_and_support_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helpAndSupport/services/manager/help-and-support-manager.service */ 99723);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/safeHtml.pipe */ 49985);




class DocumentsComponent {
    constructor(manager) {
        this.manager = manager;
    }
    ngOnInit() {
        this.documentsCms = this.manager.getDocumentsCms();
    }
}
DocumentsComponent.ɵfac = function DocumentsComponent_Factory(t) { return new (t || DocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](helpAndSupport_services_manager_help_and_support_manager_service__WEBPACK_IMPORTED_MODULE_0__.HelpAndSupportManagerService)); };
DocumentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DocumentsComponent, selectors: [["help-and-support-documents"]], decls: 9, vars: 7, consts: [[3, "innerHtml"]], template: function DocumentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "h2", 0)(3, "mat-divider")(4, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "safeHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "safeHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.documentsCms.Title, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, ctx.documentsCms.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 5, ctx.documentsCms.LongDescription), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDivider], pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_1__.SafeHtmlPipe], styles: ["[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-top: 14px;\n  padding-bottom: 14px;\n  font-size: 32px;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n  padding-bottom: 14px;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  padding-top: 24px;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50cy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVRLG9CQUFBO0FBRlI7QUFBQTtFQUtZLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBRlo7QUFMQTtFQVdZLFdBQUE7RUFDQSxvQkFBQTtBQUhaO0FBVEE7RUFpQlEsaUJBQUE7QUFMUjtBQVpBO0VBcUJRLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFOUiIsImZpbGUiOiJkb2N1bWVudHMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE0cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 84278:
/*!****************************************************************!*\
  !*** ./src/helpAndSupport/components/frame/frame.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrameComponent": () => (/* binding */ FrameComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _services_manager_help_and_support_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/manager/help-and-support-manager.service */ 99723);
/* harmony import */ var _common_ui_containers_page_pageCenteredDash_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/ui/containers/page/pageCenteredDash.component */ 73512);
/* harmony import */ var _common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/ui/title-banner/title-banner.component */ 38018);
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tabs/tabs.component */ 86847);
/* harmony import */ var _common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/ui/containers/card/cardDash.component */ 65663);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @uirouter/angular */ 99305);







class FrameComponent {
    constructor(manager) {
        this.manager = manager;
    }
    ngOnInit() {
        this.manager.loadCmsData(this.cmsContent);
        this.frameCms = this.manager.getFrameCms();
    }
}
FrameComponent.ɵfac = function FrameComponent_Factory(t) { return new (t || FrameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_manager_help_and_support_manager_service__WEBPACK_IMPORTED_MODULE_0__.HelpAndSupportManagerService)); };
FrameComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: FrameComponent, selectors: [["frame-helpandsupport"]], inputs: { cmsContent: "cmsContent" }, decls: 8, vars: 3, consts: [[3, "hasGutter"], [3, "frameCms"], [1, "help-and-support-container"]], template: function FrameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "page-centered-dash-container", 0)(1, "title-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "tabs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2)(6, "card-dash-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ui-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hasGutter", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.frameCms.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("frameCms", ctx.frameCms);
    } }, directives: [_common_ui_containers_page_pageCenteredDash_component__WEBPACK_IMPORTED_MODULE_1__.PageCenteredDashContainerComponent, _common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_2__.TitleBannerComponent, _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__.TabsComponent, _common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_4__.CardDashContainerComponent, _uirouter_angular__WEBPACK_IMPORTED_MODULE_6__.UIView], styles: ["[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  margin-left: 90px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n}\n[_nghost-%COMP%]   .help-and-support-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: -40px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   .help-and-support-container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0px;\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1lLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRVEsaUJBQUE7QUFGUjtBQUlRO0VBQUE7SUFDSSxnQkFBQTtFQURWO0FBQ0Y7QUFMQTtFQVVRLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFGUjtBQUlRO0VBQUE7SUFDSSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBRFY7QUFDRiIsImZpbGUiOiJmcmFtZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBzZWN0aW9uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDkwcHg7XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LW1kIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVscC1hbmQtc3VwcG9ydC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00MHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG5cbiAgICAgICAgQG1lZGlhIEBicmVha3BvaW50LWx0LW1kIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 70171:
/*!************************************************!*\
  !*** ./src/helpAndSupport/components/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsComponent": () => (/* reexport safe */ _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_0__.ContactUsComponent),
/* harmony export */   "DocumentsComponent": () => (/* reexport safe */ _documents_documents_component__WEBPACK_IMPORTED_MODULE_1__.DocumentsComponent),
/* harmony export */   "FrameComponent": () => (/* reexport safe */ _frame_frame_component__WEBPACK_IMPORTED_MODULE_2__.FrameComponent),
/* harmony export */   "StoreLocatorComponent": () => (/* reexport safe */ _store_locator_store_locator_component__WEBPACK_IMPORTED_MODULE_3__.StoreLocatorComponent),
/* harmony export */   "TopFaqComponent": () => (/* reexport safe */ _top_faq_top_faq_component__WEBPACK_IMPORTED_MODULE_4__.TopFaqComponent)
/* harmony export */ });
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us/contact-us.component */ 17900);
/* harmony import */ var _documents_documents_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documents/documents.component */ 94355);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frame/frame.component */ 84278);
/* harmony import */ var _store_locator_store_locator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store-locator/store-locator.component */ 87927);
/* harmony import */ var _top_faq_top_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top-faq/top-faq.component */ 58831);







/***/ }),

/***/ 87927:
/*!********************************************************************************!*\
  !*** ./src/helpAndSupport/components/store-locator/store-locator.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreLocatorComponent": () => (/* binding */ StoreLocatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var helpAndSupport_services_manager_help_and_support_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helpAndSupport/services/manager/help-and-support-manager.service */ 99723);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/safeHtml.pipe */ 49985);



class StoreLocatorComponent {
    constructor(manager) {
        this.manager = manager;
    }
    ngOnInit() {
        this.storeLocatorCms = this.manager.getStoreLocatorCms();
    }
}
StoreLocatorComponent.ɵfac = function StoreLocatorComponent_Factory(t) { return new (t || StoreLocatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](helpAndSupport_services_manager_help_and_support_manager_service__WEBPACK_IMPORTED_MODULE_0__.HelpAndSupportManagerService)); };
StoreLocatorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StoreLocatorComponent, selectors: [["help-and-support-store-locator"]], decls: 3, vars: 3, consts: [[3, "innerHtml"]], template: function StoreLocatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "safeHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx.storeLocatorCms.ShortDescription), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    } }, pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_1__.SafeHtmlPipe], styles: ["[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLWxvY2F0b3IuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFUSxpQkFBQTtBQUZSIiwiZmlsZSI6InN0b3JlLWxvY2F0b3IuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 86847:
/*!**************************************************************!*\
  !*** ./src/helpAndSupport/components/tabs/tabs.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsComponent": () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../states */ 94267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/core */ 7199);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 68074);









function TabsComponent_ng_container_2_mat_divider_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-divider", 3);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("vertical", true);
  }
}

const _c0 = function (a0) {
  return {
    selected: a0
  };
};

function TabsComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TabsComponent_ng_container_2_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const tab_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r4.selectTab(tab_r1.state);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TabsComponent_ng_container_2_mat_divider_2_Template, 1, 1, "mat-divider", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    const isLast_r2 = ctx.last;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r0.currentTab === tab_r1.state))("innerHtml", tab_r1.label, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !isLast_r2);
  }
}

class TabsComponent {
  constructor(state, uiRouterGlobals) {
    this.state = state;
    this.uiRouterGlobals = uiRouterGlobals;
    this.States = _states__WEBPACK_IMPORTED_MODULE_1__.States;
  }

  ngOnInit() {
    this.tabs = [{
      state: _states__WEBPACK_IMPORTED_MODULE_1__.States.ContactUs,
      label: this.frameCms.contactUsTab
    }, {
      state: _states__WEBPACK_IMPORTED_MODULE_1__.States.TopFiveFaq,
      label: this.frameCms.topFiveFaqTab
    }, {
      state: _states__WEBPACK_IMPORTED_MODULE_1__.States.Documents,
      label: this.frameCms.documentsTab
    }, {
      state: _states__WEBPACK_IMPORTED_MODULE_1__.States.StoreLocator,
      label: this.frameCms.storeLocatorTab
    }];
    this.currentTab = this.uiRouterGlobals.current.name;
  }

  selectTab(state) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.currentTab = state;
      yield _this.state.go(state);
    })();
  }

}

TabsComponent.ɵfac = function TabsComponent_Factory(t) {
  return new (t || TabsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_uirouter_core__WEBPACK_IMPORTED_MODULE_2__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_uirouter_core__WEBPACK_IMPORTED_MODULE_2__.UIRouterGlobals));
};

TabsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TabsComponent,
  selectors: [["tabs"]],
  inputs: {
    frameCms: "frameCms"
  },
  decls: 3,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"], [3, "ngClass", "innerHtml", "click"], [3, "vertical", 4, "ngIf"], [3, "vertical"]],
  template: function TabsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section")(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TabsComponent_ng_container_2_Template, 3, 5, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tabs);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider],
  styles: ["[_nghost-%COMP%]   mat-divider.mat-divider.mat-divider-vertical[_ngcontent-%COMP%] {\n  border-color: #611eb8;\n  height: 20px;\n  border-width: 2px;\n  margin: 0px 10px;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  padding-top: 15px;\n  padding-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media screen and (max-width: 959.98px) {\n  [_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n    padding-top: 10px;\n  }\n}\n[_nghost-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: 'Jost';\n  color: #611eb8 !important;\n  text-decoration: none;\n  border-bottom: 2px solid transparent;\n}\n[_nghost-%COMP%]   a.selected[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #611eb8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMubGVzcyIsIi4uXFwuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xcZm9udHMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNUTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFMWjtBQURBO0VBV1EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFQUjtBQVNRO0VBQUE7SUFDSSxpQkFBQTtFQU5WO0FBQ0Y7QUFkQTtFQXdCUSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBUFI7QUFuQkE7RUNBSSxtQkFBQTtFRCtCSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUFSUjtBQVVRO0VBQ0ksZ0NBQUE7QUFSWiIsImZpbGUiOiJ0YWJzLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy9kaXZpZGVycy5sZXNzJztcblxuOmhvc3Qge1xuICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgJi5tYXQtZGl2aWRlci5tYXQtZGl2aWRlci12ZXJ0aWNhbCB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IEBwdXJwbGUtaGVhcnQtcHVycGxlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VjdGlvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBAbWVkaWEgQGJyZWFrcG9pbnQtbHQtbWQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICAgIC50LWhlYWRlci0tZm9udEZhbWlseSgpO1xuICAgICAgICBjb2xvcjogQHB1cnBsZS1oZWFydC1wdXJwbGUgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgQHB1cnBsZS1oZWFydC1wdXJwbGU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cblxuLnQtaGVhZGVyLS1mb250RmFtaWx5KCkge1xuICAgIGZvbnQtZmFtaWx5OiBAZm9udC1qb3N0O1xufVxuXG4udC1ib2R5LS1mb250RmFtaWx5KCkge1xuICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xufVxuIl19 */"]
});

/***/ }),

/***/ 58831:
/*!********************************************************************!*\
  !*** ./src/helpAndSupport/components/top-faq/top-faq.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopFaqComponent": () => (/* binding */ TopFaqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var helpAndSupport_services_manager_help_and_support_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helpAndSupport/services/manager/help-and-support-manager.service */ 99723);
/* harmony import */ var shared_ui_display_accordion_services_accordion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/ui/display/accordion/services/accordion.service */ 35612);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _shared_ui_display_accordion_components_accordion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ui/display/accordion/components/accordion.component */ 67914);





class TopFaqComponent {
    constructor(manager, accordionService) {
        this.manager = manager;
        this.accordionService = accordionService;
    }
    ngOnInit() {
        this.topFaqCms = this.manager.getTopFaqCms();
        this.topFaqItems = this.accordionService.createAccordionItems(this.topFaqCms.Children);
    }
}
TopFaqComponent.ɵfac = function TopFaqComponent_Factory(t) { return new (t || TopFaqComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](helpAndSupport_services_manager_help_and_support_manager_service__WEBPACK_IMPORTED_MODULE_0__.HelpAndSupportManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](shared_ui_display_accordion_services_accordion_service__WEBPACK_IMPORTED_MODULE_1__.AccordionService)); };
TopFaqComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TopFaqComponent, selectors: [["help-and-support-top-faq"]], decls: 8, vars: 4, consts: [[3, "innerHtml"], [3, "items"]], template: function TopFaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "h2", 0)(3, "mat-divider")(4, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "shared-accordion", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.topFaqCms.Title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.topFaqCms.ShortDescription, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.topFaqItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.topFaqCms.LongDescription, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDivider, _shared_ui_display_accordion_components_accordion_component__WEBPACK_IMPORTED_MODULE_2__.AccordionComponent], styles: ["[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-top: 14px;\n  padding-bottom: 14px;\n  font-size: 32px;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n  padding-bottom: 14px;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1mYXEuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFUSxvQkFBQTtBQUZSO0FBQUE7RUFLWSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUZaO0FBTEE7RUFXWSxXQUFBO0VBQ0Esb0JBQUE7QUFIWjtBQVRBO0VBaUJRLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFMUjtBQWRBO0VBdUJRLGlCQUFBO0FBTlIiLCJmaWxlIjoidG9wLWZhcS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBoZWFkZXIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWRpdmlkZXIge1xuICAgICAgICAgICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE0cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICBzZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 90077:
/*!**************************************!*\
  !*** ./src/helpAndSupport/module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpAndSupportModule": () => (/* binding */ HelpAndSupportModule)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 70171);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout */ 45046);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 38661);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pipes/module */ 20445);
/* harmony import */ var validation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! validation/module */ 26186);
/* harmony import */ var storefront_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! storefront/module */ 89550);
/* harmony import */ var common_ui_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/ui/dropdown/dropdown.module */ 9091);
/* harmony import */ var common_ui_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/ui/pagination/pagination.module */ 26325);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button-toggle */ 74190);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/overlay */ 41938);
/* harmony import */ var _states_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./states-config */ 6759);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./states */ 94267);
/* harmony import */ var _services_manager_help_and_support_manager_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/manager/help-and-support-manager.service */ 99723);
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tabs/tabs.component */ 86847);
/* harmony import */ var shared_ui_display_accordion_accordion_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/ui/display/accordion/accordion.module */ 1645);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @uirouter/angular */ 99305);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 28596);
























const dictionary = {
    [_states__WEBPACK_IMPORTED_MODULE_8__.States.ContactUs]: _components__WEBPACK_IMPORTED_MODULE_0__.ContactUsComponent,
    [_states__WEBPACK_IMPORTED_MODULE_8__.States.Documents]: _components__WEBPACK_IMPORTED_MODULE_0__.DocumentsComponent,
    [_states__WEBPACK_IMPORTED_MODULE_8__.States.HelpAndSupportFrame]: _components__WEBPACK_IMPORTED_MODULE_0__.FrameComponent,
    [_states__WEBPACK_IMPORTED_MODULE_8__.States.StoreLocator]: _components__WEBPACK_IMPORTED_MODULE_0__.StoreLocatorComponent,
    [_states__WEBPACK_IMPORTED_MODULE_8__.States.TopFiveFaq]: _components__WEBPACK_IMPORTED_MODULE_0__.TopFaqComponent
};
const routesWithComponents = _states_config__WEBPACK_IMPORTED_MODULE_7__.HelpAndSupportStatesConfig.map(stateConfig => ({
    ...stateConfig,
    component: dictionary[stateConfig.name]
}));
class HelpAndSupportModule {
}
HelpAndSupportModule.ɵfac = function HelpAndSupportModule_Factory(t) { return new (t || HelpAndSupportModule)(); };
HelpAndSupportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: HelpAndSupportModule });
HelpAndSupportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
        _services_manager_help_and_support_manager_service__WEBPACK_IMPORTED_MODULE_9__.HelpAndSupportManagerService
    ], imports: [[
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_13__.UIRouterModule.forChild({ states: routesWithComponents }),
            common_module__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule,
            pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__.FlexLayoutModule,
            validation_module__WEBPACK_IMPORTED_MODULE_3__.ValidationModule,
            storefront_module__WEBPACK_IMPORTED_MODULE_4__.StorefrontModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.OverlayModule,
            common_ui_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__.PaginationModule,
            common_ui_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_5__.DropdownModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__.MatButtonToggleModule,
            shared_ui_display_accordion_accordion_module__WEBPACK_IMPORTED_MODULE_11__.AccordionModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](HelpAndSupportModule, { declarations: [_components__WEBPACK_IMPORTED_MODULE_0__.ContactUsComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.DocumentsComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.FrameComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.StoreLocatorComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.TopFaqComponent,
        _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__.TabsComponent], imports: [_uirouter_angular__WEBPACK_IMPORTED_MODULE_13__.UIRouterModule, common_module__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule,
        pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__.FlexLayoutModule,
        validation_module__WEBPACK_IMPORTED_MODULE_3__.ValidationModule,
        storefront_module__WEBPACK_IMPORTED_MODULE_4__.StorefrontModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.OverlayModule,
        common_ui_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__.PaginationModule,
        common_ui_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_5__.DropdownModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__.MatButtonToggleModule,
        shared_ui_display_accordion_accordion_module__WEBPACK_IMPORTED_MODULE_11__.AccordionModule] }); })();


/***/ }),

/***/ 99723:
/*!*********************************************************************************!*\
  !*** ./src/helpAndSupport/services/manager/help-and-support-manager.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpAndSupportManagerService": () => (/* binding */ HelpAndSupportManagerService)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ 92385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 28596);


class HelpAndSupportManagerService {
    findChildById(cmsContent, itemId) {
        return cmsContent.Children.find(child => child.ItemID.toUpperCase() === itemId.toUpperCase());
    }
    loadCmsData(cmsContent) {
        this.parseMainCmsData(cmsContent);
        this.parseChildCmsData();
    }
    parseMainCmsData(cmsContent) {
        this.frameCms = this.findChildById(cmsContent, _constants__WEBPACK_IMPORTED_MODULE_0__.CmsIds.Frame);
        this.contactUsCms = this.findChildById(cmsContent, _constants__WEBPACK_IMPORTED_MODULE_0__.CmsIds.ContactUsPage);
        this.topFaqCms = this.findChildById(cmsContent, _constants__WEBPACK_IMPORTED_MODULE_0__.CmsIds.TopFaqPage);
        this.documentsCms = this.findChildById(cmsContent, _constants__WEBPACK_IMPORTED_MODULE_0__.CmsIds.DocumentsPage);
        this.storeLocatorCms = this.findChildById(cmsContent, _constants__WEBPACK_IMPORTED_MODULE_0__.CmsIds.StoreLocatorPage);
    }
    ;
    parseChildCmsData() {
        this.parseContactUsCmsData();
    }
    ;
    parseContactUsCmsData() {
        const [emailUsCms, customerServiceCms, roadsideAssistanceCms] = this.contactUsCms.Children;
        this.contactUsCms = {
            ...this.contactUsCms,
            emailUsCms,
            customerServiceCms,
            roadsideAssistanceCms
        };
    }
    getFrameCms() {
        return { ...this.frameCms };
    }
    getContactUsCms() {
        return { ...this.contactUsCms };
    }
    getTopFaqCms() {
        return { ...this.topFaqCms };
    }
    getDocumentsCms() {
        return { ...this.documentsCms };
    }
    getStoreLocatorCms() {
        return { ...this.storeLocatorCms };
    }
}
HelpAndSupportManagerService.ɵfac = function HelpAndSupportManagerService_Factory(t) { return new (t || HelpAndSupportManagerService)(); };
HelpAndSupportManagerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HelpAndSupportManagerService, factory: HelpAndSupportManagerService.ɵfac });


/***/ }),

/***/ 84279:
/*!**********************************************************************!*\
  !*** ./src/shared/sliders/email-us/components/email-us.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailUsComponent": () => (/* binding */ EmailUsComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 34449);
/* harmony import */ var _models_email_us_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/email-us.models */ 78745);
/* harmony import */ var _services_forms_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/forms/forms.service */ 15458);
/* harmony import */ var _services_fields_fields_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/fields/fields.service */ 82656);
/* harmony import */ var _ui_display_accordion_services_accordion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/display/accordion/services/accordion.service */ 35612);
/* harmony import */ var _common_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/ui */ 50933);
/* harmony import */ var _services_facade_emailUs_facade_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/facade/emailUs-facade.service */ 92509);
/* harmony import */ var _services_api_emailUs_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api/emailUs-api.service */ 38404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var cms_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cms/services */ 46693);
/* harmony import */ var authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! authentication/authenticationService/authentication.service */ 44722);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../validation/focus.directive */ 39453);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _ui_display_accordion_components_accordion_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../ui/display/accordion/components/accordion.component */ 67914);
/* harmony import */ var _ui_form_entry_file_upload_components_file_upload_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../ui/form-entry/file-upload/components/file-upload.component */ 59369);
/* harmony import */ var _ui_form_entry_checkbox_components_checkbox_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../ui/form-entry/checkbox/components/checkbox.component */ 83799);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../common/ui/modals/actionButtons/actionButtons.component */ 65380);



























function EmailUsComponent_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r2.emailUsCms.EmailRequiredText);
  }
}

function EmailUsComponent_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r3.emailUsCms.EmailValidationText);
  }
}

function EmailUsComponent_aside_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "aside", 6)(1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r5.emailUsCms == null ? null : ctx_r5.emailUsCms.YourNameRequiredText);
  }
}

function EmailUsComponent_section_19_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const formCms_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngValue", formCms_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", formCms_r12 == null ? null : formCms_r12.Title, " ");
  }
}

function EmailUsComponent_section_19_aside_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "aside", 6)(1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r11.emailUsCms == null ? null : ctx_r11.emailUsCms.SelectTopicHeader);
  }
}

function EmailUsComponent_section_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section")(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function EmailUsComponent_section_19_Template_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r13.selectedForm = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, EmailUsComponent_section_19_option_6_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, EmailUsComponent_section_19_aside_7_Template, 3, 1, "aside", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r6.emailUsCms == null ? null : ctx_r6.emailUsCms.HowCanWeHelpTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r6.selectedForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r6.emailUsCms == null ? null : ctx_r6.emailUsCms.SelectTopicPlaceholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r6.formsCms);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _r0.submitted && !(ctx_r6.selectedForm == null ? null : ctx_r6.selectedForm.Title));
  }
}

function EmailUsComponent_section_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "shared-accordion", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("items", ctx_r7.selectedForm == null ? null : ctx_r7.selectedForm.FAQs);
  }
}

const _c0 = function (a0) {
  return {
    "bold": a0
  };
};

function EmailUsComponent_div_21_section_1_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const fieldCms_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", fieldCms_r24.ItemName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](3, _c0, fieldCms_r24.Bold));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", fieldCms_r24.Title, " ");
  }
}

function EmailUsComponent_div_21_section_1_aside_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "aside", 6)(1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r23.fieldsCms[field_r15.ItemName].ValidationErrorText);
  }
}

const _c1 = function (a0) {
  return {
    "has-error": a0
  };
};

function EmailUsComponent_div_21_section_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section")(1, "div", 2)(2, "mat-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "select", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function EmailUsComponent_div_21_section_1_Template_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r27);
      const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r26.fields[field_r15.ItemName].value = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, EmailUsComponent_div_21_section_1_option_8_Template, 2, 5, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, EmailUsComponent_div_21_section_1_aside_9_Template, 3, 1, "aside", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](5);

    const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("error-check", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r16.fieldsCms[field_r15.ItemName].Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("name", field_r15.ItemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r16.fields[field_r15.ItemName].value)("required", field_r15.Required)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](9, _c1, (_r0 == null ? null : _r0.submitted) && (_r21 == null ? null : _r21.errors)));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r16.fieldsCms[field_r15.ItemName].PlaceholderText);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r16.fieldsCms[field_r15.ItemName].Dropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _r0.submitted && (_r21 == null ? null : _r21.errors));
  }
}

function EmailUsComponent_div_21_section_2_aside_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "aside", 6)(1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r31.fieldsCms[field_r15.ItemName].ValidationErrorText);
  }
}

function EmailUsComponent_div_21_section_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section")(1, "div", 2)(2, "mat-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "textarea", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function EmailUsComponent_div_21_section_2_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r34);
      const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r33.fields[field_r15.ItemName].value = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, "                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, EmailUsComponent_div_21_section_2_aside_7_Template, 3, 1, "aside", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](5);

    const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("error-check", _r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r17.fieldsCms[field_r15.ItemName].Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("name", field_r15.ItemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r17.fields[field_r15.ItemName].value)("placeholder", ctx_r17.fieldsCms[field_r15.ItemName].PlaceholderText)("pattern", ctx_r17.fieldsCms[field_r15.ItemName].ValidationRegex)("required", field_r15.Required);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _r0.submitted && _r30.errors);
  }
}

function EmailUsComponent_div_21_section_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section")(1, "shared-file-upload", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("filesChanged", function EmailUsComponent_div_21_section_3_Template_shared_file_upload_filesChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r37.emailUsData.files = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("required", field_r15.Required)("maxUploadSlots", ctx_r18.fieldsCms[field_r15.ItemName].FileUploadMaxSlots)("maxfileSizeInMb", ctx_r18.fieldsCms[field_r15.ItemName].FileUploadSize)("allowedExtensions", ctx_r18.fieldsCms[field_r15.ItemName].FileUploadExtensions);
  }
}

function EmailUsComponent_div_21_section_4_aside_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "aside", 6)(1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r41.fieldsCms[field_r15.ItemName].ValidationErrorText);
  }
}

function EmailUsComponent_div_21_section_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section")(1, "div", 2)(2, "mat-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function EmailUsComponent_div_21_section_4_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r44);
      const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r43.fields[field_r15.ItemName].value = $event;
    })("ngModelChange", function EmailUsComponent_div_21_section_4_Template_input_ngModelChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r44);
      const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r46.updatePhoneNumber(field_r15.ItemName);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, EmailUsComponent_div_21_section_4_aside_6_Template, 3, 1, "aside", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](5);

    const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("error-check", _r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r19.fieldsCms[field_r15.ItemName].Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id", field_r15.ItemName)("name", field_r15.ItemName)("ngModel", ctx_r19.fields[field_r15.ItemName].value)("placeholder", ctx_r19.fieldsCms[field_r15.ItemName].PlaceholderText)("pattern", ctx_r19.fieldsCms[field_r15.ItemName].ValidationRegex)("required", field_r15.Required);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _r0.submitted && _r40.errors);
  }
}

function EmailUsComponent_div_21_section_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section")(1, "shared-checkbox", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("checkboxChange", function EmailUsComponent_div_21_section_5_Template_shared_checkbox_checkboxChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r50);
      const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r49.fields[field_r15.ItemName].value = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const field_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("checkbox", ctx_r20.fields[field_r15.ItemName].value)("desc", ctx_r20.fieldsCms[field_r15.ItemName].PlaceholderText);
  }
}

function EmailUsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, EmailUsComponent_div_21_section_1_Template, 10, 11, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, EmailUsComponent_div_21_section_2_Template, 8, 8, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, EmailUsComponent_div_21_section_3_Template, 2, 4, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, EmailUsComponent_div_21_section_4_Template, 7, 9, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, EmailUsComponent_div_21_section_5_Template, 2, 2, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const field_r15 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r8.fieldsCms[field_r15.ItemName].Type === ctx_r8.FieldTypes.Dropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r8.fieldsCms[field_r15.ItemName].Type === ctx_r8.FieldTypes.TextArea);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r8.fieldsCms[field_r15.ItemName].Type === ctx_r8.FieldTypes.FilesUpload);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r8.fieldsCms[field_r15.ItemName].Type === ctx_r8.FieldTypes.Input);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r8.fieldsCms[field_r15.ItemName].Type === ctx_r8.FieldTypes.Checkbox);
  }
}

function EmailUsComponent_section_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "section")(1, "action-buttons", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("main", function EmailUsComponent_section_22_Template_action_buttons_main_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](1);

      return ctx_r53.submit(_r0);
    })("alt", function EmailUsComponent_section_22_Template_action_buttons_alt_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r54);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r55.exitModal(false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
}

class EmailUsComponent {
  constructor(dialogRef, cmsResolverService, formsService, fieldsService, dialogService, facade, authService) {
    this.dialogRef = dialogRef;
    this.cmsResolverService = cmsResolverService;
    this.formsService = formsService;
    this.fieldsService = fieldsService;
    this.dialogService = dialogService;
    this.facade = facade;
    this.authService = authService;
    this.FieldTypes = _models_email_us_models__WEBPACK_IMPORTED_MODULE_2__.FieldTypes;
    this.fieldsCms = {};
    this.selectedForm = '';
    this.fields = {};
    this.emailUsData = {
      files: {},
      fields: {},
      emailTopic: {}
    };
    this.host = window.location.hostname;
    this.userAgent = navigator.userAgent;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.getCmsData();
      yield _this.initInputFields();
    })();
  }

  getCmsData() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.emailUsCms = yield _this2.cmsResolverService.resolve({
        ItemId: _constants__WEBPACK_IMPORTED_MODULE_1__.CmsIds.EmailUs
      });
      _this2.formsCms = _this2.formsService.getCmsData(_this2.emailUsCms);
      _this2.fieldsCms = _this2.fieldsService.getCmsData(_this2.emailUsCms);
    })();
  }

  initInputFields() {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      Object.keys(_this3.fieldsCms).forEach(key => {
        _this3.fields[key] = {
          name: _this3.fieldsCms[key].ItemName,
          label: _this3.fieldsCms[key].Title,
          value: _this3.fieldsCms[key].Type === 'Checkbox' ? true : ''
        };
      });
      yield _this3.getAccountInfo();
    })();
  }

  getAccountInfo() {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.authService.isAuthenticated()) {
        const res = yield _this4.facade.getAccountInfo();
        _this4.emailUsData.email = res.email;
        _this4.emailUsData.name = res.name;
        _this4.fields[_models_email_us_models__WEBPACK_IMPORTED_MODULE_2__.FieldKeys.EZTagAccount].value = res.accountNumber;
      }
    })();
  }

  submit(form) {
    var _this5 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!form.valid) {
        return;
      }

      _this5.initEmailUsPayload();

      const response = yield _this5.facade.sendHelpAndSupportEmail(_this5.emailUsData);

      if (response) {
        yield _this5.openConfirmationModal();
      }

      _this5.dialogRef.close(_this5.dialogRef.data);
    })();
  }

  initEmailUsPayload() {
    this.emailUsData.userBorwserInfo = this.userAgent;
    this.emailUsData.host = this.host;
    this.setEmailUsEmailTopic();
    this.setFilteredFields();
  }

  setEmailUsEmailTopic() {
    this.emailUsData.emailTopic = {
      name: this.selectedForm.Title,
      email: this.selectedForm.MailboxEmail,
      fromEmail: this.selectedForm.ReplyEmail
    };
  }

  setFilteredFields() {
    this.emailUsData.fields = Object.values(this.fields).filter(field => field.value && this.selectedForm.Fields.some(f => f.ItemName === field.name));
  }

  exitModal(save) {
    this.dialogRef.close(this.dialogRef.data);
  }

  updatePhoneNumber(itemName) {
    var _a, _b, _c;

    if (itemName === _models_email_us_models__WEBPACK_IMPORTED_MODULE_2__.FieldTypes.PhoneNumber) {
      const cleanedNumber = (_c = (_b = (_a = this.fields[itemName]) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.toString()) === null || _c === void 0 ? void 0 : _c.replace(/-/g, '');
      const areaCode = cleanedNumber.slice(0, 3);
      const midDigits = cleanedNumber.slice(3, 6);
      const lastDigits = cleanedNumber.slice(6, 10);
      this.fields[itemName].value = areaCode + (midDigits ? '-' + midDigits : '') + (lastDigits ? '-' + lastDigits : '');
    }
  }

  openConfirmationModal() {
    var _this6 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b, _c;

      const data = {
        cmsContent: {
          Title: (_a = _this6.emailUsCms) === null || _a === void 0 ? void 0 : _a.Title,
          AcceptBtn: (_b = _this6.emailUsCms) === null || _b === void 0 ? void 0 : _b.AcceptButtonText,
          PrimaryContent: (_c = _this6.emailUsCms) === null || _c === void 0 ? void 0 : _c.ThankYouNote
        }
      };
      yield _this6.dialogService.openGenericModal(_common_ui__WEBPACK_IMPORTED_MODULE_6__.GenericCmsModalComponent, data);
    })();
  }

}

EmailUsComponent.ɵfac = function EmailUsComponent_Factory(t) {
  return new (t || EmailUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_9__.DialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_10__.CmsResolverService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_forms_forms_service__WEBPACK_IMPORTED_MODULE_3__.EmailUsFormsService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_fields_fields_service__WEBPACK_IMPORTED_MODULE_4__.EmailUsFieldsService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_9__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_facade_emailUs_facade_service__WEBPACK_IMPORTED_MODULE_7__.EmailUsFacadeService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_11__.AuthenticationService));
};

EmailUsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
  type: EmailUsComponent,
  selectors: [["email-us"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵProvidersFeature"]([_ui_display_accordion_services_accordion_service__WEBPACK_IMPORTED_MODULE_5__.AccordionService, _services_forms_forms_service__WEBPACK_IMPORTED_MODULE_3__.EmailUsFormsService, _services_fields_fields_service__WEBPACK_IMPORTED_MODULE_4__.EmailUsFieldsService, _services_facade_emailUs_facade_service__WEBPACK_IMPORTED_MODULE_7__.EmailUsFacadeService, _services_api_emailUs_api_service__WEBPACK_IMPORTED_MODULE_8__.EmailUsApiService])],
  decls: 23,
  vars: 14,
  consts: [["validation-focus", "", "name", "emailUsForm"], ["emailUsForm", "ngForm"], [3, "error-check"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", "email", "true", 3, "placeholder", "ngModel", "ngModelChange"], ["emailInput", "ngModel"], ["role", "alert"], ["class", "help-block", 4, "ngIf"], ["for", "yourName"], ["type", "text", "id", "YourName", "name", "YourName", "pattern", "^[a-zA-Z\\-\\'\\.,\\s]*$", "required", "", 3, "ngModel", "ngModelChange"], ["yourNameInput", "ngModel"], ["role", "alert", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "help-block"], [1, "howCanWeHelpTitle"], ["name", "selectedForm", "required", "", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [3, "items"], ["ngClass", "labelMargin"], [3, "name", "ngModel", "required", "ngClass", "ngModelChange"], ["itemNameDropdown", "ngModel"], [3, "value", "ngClass", 4, "ngFor", "ngForOf"], [3, "value", "ngClass"], [3, "name", "ngModel", "placeholder", "pattern", "required", "ngModelChange"], ["itemNameForTextArea", "ngModel"], [3, "required", "maxUploadSlots", "maxfileSizeInMb", "allowedExtensions", "filesChanged"], [3, "id", "name", "ngModel", "placeholder", "pattern", "required", "ngModelChange"], ["itemName", "ngModel"], [3, "checkbox", "desc", "checkboxChange"], [3, "main", "alt"], ["action-main", ""], ["action-alt", ""]],
  template: function EmailUsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "form", 0, 1)(2, "card-container")(3, "section")(4, "div", 2)(5, "mat-label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function EmailUsComponent_Template_input_ngModelChange_7_listener($event) {
        return ctx.emailUsData.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "aside", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, EmailUsComponent_p_10_Template, 2, 1, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, EmailUsComponent_p_11_Template, 2, 1, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "section")(13, "div", 2)(14, "mat-label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "input", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function EmailUsComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.emailUsData.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](18, EmailUsComponent_aside_18_Template, 3, 1, "aside", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](19, EmailUsComponent_section_19_Template, 8, 5, "section", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](20, EmailUsComponent_section_20_Template, 2, 1, "section", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](21, EmailUsComponent_div_21_Template, 6, 5, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](22, EmailUsComponent_section_22_Template, 6, 0, "section", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](1);

      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](8);

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](17);

      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("error-check", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx.emailUsCms == null ? null : ctx.emailUsCms.EmailAddressHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("placeholder", ctx.emailUsCms == null ? null : ctx.emailUsCms.EmailAddressPlaceholder)("ngModel", ctx.emailUsData.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _r0.submitted && (_r1.errors == null ? null : _r1.errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _r0.submitted && (_r1.errors == null ? null : _r1.errors.email));
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("error-check", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx.emailUsCms == null ? null : ctx.emailUsCms.YourNameHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx.emailUsData.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _r0.submitted && _r4.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.formsCms);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.selectedForm == null ? null : ctx.selectedForm.FAQs);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx.selectedForm.Fields);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.selectedForm == null ? null : ctx.selectedForm.Title);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_12__.FocusDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_13__.CardContainerComponent, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_14__.ErrorCheckDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _ui_display_accordion_components_accordion_component__WEBPACK_IMPORTED_MODULE_15__.AccordionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _ui_form_entry_file_upload_components_file_upload_component__WEBPACK_IMPORTED_MODULE_16__.SharedFileUploadComponent, _ui_form_entry_checkbox_components_checkbox_component__WEBPACK_IMPORTED_MODULE_17__.CheckboxComponent, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_18__.ActionButtonsComponent],
  styles: ["[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   action-buttons[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  padding-bottom: 20px;\n  display: block;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n[_nghost-%COMP%]   .bold[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 450;\n  font-size: 15px;\n}\n[_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 200px;\n  width: 100%;\n  resize: none;\n  padding: 14px 14px;\n  font-weight: 500;\n  border: 1px solid #c4c4c4;\n  border-radius: 10px;\n  outline: none;\n}\n[_nghost-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   select[_ngcontent-%COMP%] {\n  display: block !important;\n  font-size: 16px;\n  width: 100%;\n  outline: none;\n  height: 48px;\n  vertical-align: middle;\n  border: 1px solid #c4c4c4;\n  border-radius: 10px;\n  text-align: left;\n  font: normal normal medium 16px/19px Montserrat;\n  letter-spacing: 0px;\n  color: #34353a;\n  opacity: 1;\n  background: #ffffff 0% 0% no-repeat padding-box;\n}\n[_nghost-%COMP%]   .howCanWeHelpTitle[_ngcontent-%COMP%] {\n  top: 312px;\n  left: 370px;\n  height: 35px;\n  text-align: left;\n  font: normal normal 600 24px/30px Jost;\n  letter-spacing: 0px;\n  color: #34353a;\n  opacity: 1;\n  margin-bottom: 16px;\n}\n[_nghost-%COMP%]   .has-error[_ngcontent-%COMP%] {\n  border-color: #fc2125;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLXVzLmNvbXBvbmVudC5sZXNzIiwiLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcY3VzdG9tXFxzcGFjaW5nXFxzZWN0aW9ucy5sZXNzIiwiLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xcZXJyb3IubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUVRLGNBQUE7QUFMUjtBQUdBO0VDc0JRLGdCQUFBO0VEZkEsb0JBQUE7RUFDQSxjQUFBO0FBTlI7QUFGQTtFQVlRLGlCQUFBO0FBUFI7QUFMQTtFQWdCUSxnQkFBQTtBQVJSO0FBUkE7RUFvQlEsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVRSO0FBYkE7RUEwQlEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQVZSO0FBdkJBO0VBcUNRLHlCQUFBO0FBWFI7QUExQkE7RUF5Q1EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSwrQ0FBQTtBQVpSO0FBMUNBO0VBMERRLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFiUjtBQXJEQTtFRVVJLHFCQUFBO0FGOENKIiwiZmlsZSI6ImVtYWlsLXVzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi9zdHlsZXMvY3VzdG9tL3NwYWNpbmcvc2VjdGlvbnMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi8uLi9zdHlsZXMvY3VzdG9tL3NwYWNpbmcvZGl2aWRlcnMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBhIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgYWN0aW9uLWJ1dHRvbnMge1xuICAgICAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fYnV0dG9uVG9GaWVsZC0tbWFyZ2luVG9wKCk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBzZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgLmJvbGQge1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQ1MDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cblxuICAgIHRleHRhcmVhIHtcbiAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDE0cHggMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICBtYXQtbGFiZWwge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cblxuICAgIHNlbGVjdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBtZWRpdW0gMTZweC8xOXB4IE1vbnRzZXJyYXQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgICAgIGNvbG9yOiAjMzQzNTNhO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICB9XG5cbiAgICAuaG93Q2FuV2VIZWxwVGl0bGUge1xuICAgICAgICB0b3A6IDMxMnB4O1xuICAgICAgICBsZWZ0OiAzNzBweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDYwMCAyNHB4LzMwcHggSm9zdDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgICAgY29sb3I6ICMzNDM1M2E7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgLmhhcy1lcnJvciB7XG4gICAgICAgIC50LWVycm9yLS1ib3JkZXJDb2xvcihAdGhlbWUtbGlnaHQpO1xuICAgIH1cbn1cbiIsIi5yZWZyZXNoLTIwMjAge1xuICAgIC8vIERlc2t0b3BcbiAgICAudS1zcGFjaW5nX19maWVsZFRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19oZWFkZXJUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Cb3R0b20ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcEhhbGYge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2J1dHRvblRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmlyc3RIZWFkZXJUb1RpdGxlLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fYWRkcmVzc1RvUGF5bWVudERpc3BsYXktLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuICAgIC8vIE1vYmlsZVxuICAgICYubHQtbWQsXG4gICAgLmx0LW1kIHtcbiAgICAgICAgLnUtc3BhY2luZ19fY2FyZFRvQ2FyZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cblxuQGVycm9yLS1jb2xvci1saWdodDogQHRvcmNoLXJlZDtcbkB3YXJuaW5nLS1jb2xvci1saWdodDogQHBpemF6ei1nb2xkO1xuQHN1Y2Nlc3MtLWNvbG9yLWxpZ2h0OiBAY2FseXBzby1ibHVlO1xuXG5cbi50LWVycm9yLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdlcnJvci0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1lcnJvci0tYm9yZGVyQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnZXJyb3ItLWNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWVycm9yLS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnZXJyb3ItLWNvbG9yLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC13YXJuaW5nLS1iYWNrZ3JvdW5kQ29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnd2FybmluZy0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LXN1Y2Nlc3MtLWJhY2tncm91bmRDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdzdWNjZXNzLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 34449:
/*!**************************************************!*\
  !*** ./src/shared/sliders/email-us/constants.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsIds": () => (/* binding */ CmsIds)
/* harmony export */ });
const CmsIds = {
    EmailUs: 'D9BB15E4-2387-4067-9EBE-58559E6FEA00'
};


/***/ }),

/***/ 78745:
/*!***************************************************************!*\
  !*** ./src/shared/sliders/email-us/models/email-us.models.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldKeys": () => (/* binding */ FieldKeys),
/* harmony export */   "FieldTypes": () => (/* binding */ FieldTypes)
/* harmony export */ });
const FieldTypes = {
    Checkbox: 'Checkbox',
    Dropdown: 'Dropdown',
    FilesUpload: 'FilesUpload',
    Input: 'Input',
    PhoneNumber: 'PhoneNumber',
    TextArea: 'TextArea'
};
const FieldKeys = {
    EZTagAccount: 'EZTagAccount'
};


/***/ }),

/***/ 38404:
/*!*************************************************************************!*\
  !*** ./src/shared/sliders/email-us/services/api/emailUs-api.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailUsApiService": () => (/* binding */ EmailUsApiService)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/services */ 8784);



class EmailUsApiService {
  constructor(httpService, responseErrorService, toasterService) {
    this.httpService = httpService;
    this.responseErrorService = responseErrorService;
    this.toasterService = toasterService;
    this.url = '/api/sessions/HelpAndSupport/';
  }

  getAccountInfo() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const endpoint = `${_this.url}GetHelpAndSupportInformation`;
      const response = yield _this.httpService.get(endpoint);
      return _this.checkError(response);
    })();
  }

  sendHelpAndSupportEmail(request) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const endpoint = `${_this2.url}SendHelpAndSupportEmail`;
      return yield _this2.post(request, endpoint);
    })();
  }

  post(payload, endpoint) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield _this3.httpService.post(endpoint, payload);
      return _this3.checkError(response);
    })();
  }

  checkError(response) {
    if (this.responseErrorService.isErrorFree(response)) {
      this.responseErrorService.displayAlertsFromResponse(response);
      return response;
    } else {
      this.toasterService.show('Error', response.errors[0].message);
    }
  }

}

EmailUsApiService.ɵfac = function EmailUsApiService_Factory(t) {
  return new (t || EmailUsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](common_services__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](common_services__WEBPACK_IMPORTED_MODULE_1__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](common_services__WEBPACK_IMPORTED_MODULE_1__.ToasterService));
};

EmailUsApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: EmailUsApiService,
  factory: EmailUsApiService.ɵfac
});

/***/ }),

/***/ 92509:
/*!*******************************************************************************!*\
  !*** ./src/shared/sliders/email-us/services/facade/emailUs-facade.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailUsFacadeService": () => (/* binding */ EmailUsFacadeService)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _api_emailUs_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/emailUs-api.service */ 38404);



class EmailUsFacadeService {
  constructor(emailUsApiService) {
    this.emailUsApiService = emailUsApiService;
  }

  getAccountInfo() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this.emailUsApiService.getAccountInfo();
    })();
  }

  sendHelpAndSupportEmail(request) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this2.emailUsApiService.sendHelpAndSupportEmail(request);
    })();
  }

}

EmailUsFacadeService.ɵfac = function EmailUsFacadeService_Factory(t) {
  return new (t || EmailUsFacadeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_emailUs_api_service__WEBPACK_IMPORTED_MODULE_1__.EmailUsApiService));
};

EmailUsFacadeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: EmailUsFacadeService,
  factory: EmailUsFacadeService.ɵfac
});

/***/ }),

/***/ 82656:
/*!***********************************************************************!*\
  !*** ./src/shared/sliders/email-us/services/fields/fields.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailUsFieldsService": () => (/* binding */ EmailUsFieldsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 28596);

class EmailUsFieldsService {
    getCmsData(emailUsCms) {
        const fieldsCms = emailUsCms.Children.find(child => child.ItemName === 'Fields');
        return this.formatFieldsData(fieldsCms.Children);
    }
    formatFieldsData(fields) {
        return fields.reduce((result, field) => {
            result[this.formatString(field.ItemName)] = this.createFieldsObject(field);
            return result;
        }, {});
    }
    createFieldsObject(field) {
        return {
            ItemName: this.formatString(field.ItemName),
            Title: field.Title,
            PlaceholderText: field.PlaceholderText,
            Type: field.Type,
            ValidationRegex: field.ValidationRegex,
            ValidationErrorText: field.ValidationErrorText,
            FileUploadMaxSlots: field.FileUploadMaxSlots,
            FileUploadSize: field.FileUploadSize,
            FileUploadExtensions: field.FileUploadExtensions,
            Dropdown: this.formatFieldDropdown(field.Children)
        };
    }
    formatFieldDropdown(children) {
        return children.map(child => ({
            ItemName: this.formatString(child.ItemName),
            Title: child.Name,
            Bold: !!child.Bold
        }));
    }
    formatString(itemName) {
        return itemName.replace(/\s+/g, '');
    }
}
EmailUsFieldsService.ɵfac = function EmailUsFieldsService_Factory(t) { return new (t || EmailUsFieldsService)(); };
EmailUsFieldsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmailUsFieldsService, factory: EmailUsFieldsService.ɵfac });


/***/ }),

/***/ 15458:
/*!*********************************************************************!*\
  !*** ./src/shared/sliders/email-us/services/forms/forms.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailUsFormsService": () => (/* binding */ EmailUsFormsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _ui_display_accordion_services_accordion_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ui/display/accordion/services/accordion.service */ 35612);


class EmailUsFormsService {
    constructor(accordionService) {
        this.accordionService = accordionService;
    }
    getCmsData(emailUsCms) {
        const formsCms = emailUsCms.Children.find(child => child.ItemName === 'Forms');
        return this.formatFormsData(formsCms.Children);
    }
    formatFormsData(forms) {
        return forms.map(form => ({
            Title: form.Title,
            MailboxEmail: form.MailboxEmail,
            ReplyEmail: form.ReplyEmail,
            ...this.formatFormsChildren(form.Children)
        }));
    }
    formatFormsChildren(children) {
        return children.reduce((result, child) => {
            result[child.ItemName] = (child.ItemName === 'FAQs')
                ? this.accordionService.createAccordionItems(child.Children.map(c => ({ ...c })))
                : this.formatFormsField(child.Children);
            return result;
        }, {});
    }
    formatFormsField(children) {
        return children.map(child => ({
            ItemName: this.formatString(child.Title),
            Title: child.Title,
            Required: !!child.Required
        }));
    }
    formatString(itemName) {
        return itemName.replace(/\s+/g, '');
    }
}
EmailUsFormsService.ɵfac = function EmailUsFormsService_Factory(t) { return new (t || EmailUsFormsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ui_display_accordion_services_accordion_service__WEBPACK_IMPORTED_MODULE_0__.AccordionService)); };
EmailUsFormsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmailUsFormsService, factory: EmailUsFormsService.ɵfac });


/***/ }),

/***/ 59369:
/*!**********************************************************************************!*\
  !*** ./src/shared/ui/form-entry/file-upload/components/file-upload.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedFileUploadComponent": () => (/* binding */ SharedFileUploadComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 57754);
/* harmony import */ var cms_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cms/services */ 46693);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 38661);










function SharedFileUploadComponent_div_0_section_1_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.fileUploadCms == null ? null : ctx_r5.fileUploadCms.FileRequiredError);
  }
}

function SharedFileUploadComponent_div_0_section_1_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.fileUploadCms == null ? null : ctx_r6.fileUploadCms.FileTypeError.replace("#allowedExtensions", ctx_r6.allowedExtensions));
  }
}

function SharedFileUploadComponent_div_0_section_1_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.fileUploadCms == null ? null : ctx_r7.fileUploadCms.FileSizeError.replace("#maxfileSizeInMb", ctx_r7.maxfileSizeInMb));
  }
}

function SharedFileUploadComponent_div_0_section_1_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r8.fileUploadCms == null ? null : ctx_r8.fileUploadCms.FileReadError);
  }
}

const _c0 = function (a0) {
  return {
    "error": a0
  };
};

const _c1 = function (a0) {
  return {
    "file-name-placeholder": a0
  };
};

const _c2 = function (a0, a1) {
  return {
    "disable": a0,
    "error": a1
  };
};

function SharedFileUploadComponent_div_0_section_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section")(1, "mat-label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SharedFileUploadComponent_div_0_section_1_Template_input_change_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const i_r4 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r9.onAttachFile($event.target.files[0], i_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SharedFileUploadComponent_div_0_section_1_Template_mat_icon_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const i_r4 = restoredCtx.index;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r11.removeFile(i_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "aside", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, SharedFileUploadComponent_div_0_section_1_p_12_Template, 2, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SharedFileUploadComponent_div_0_section_1_p_13_Template, 2, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SharedFileUploadComponent_div_0_section_1_p_14_Template, 2, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SharedFileUploadComponent_div_0_section_1_p_15_Template, 2, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const file_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.fileUploadCms == null ? null : ctx_r1.fileUploadCms.FileUploadLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c0, ctx_r1.hasValidationErrors(file_r3) || ctx_r1.hasFileErrors(i_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "validationInput", i_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", "")("required", ctx_r1.required && !ctx_r1.isValid(file_r3) || ctx_r1.hasFileErrors(i_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "fileInput", i_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("accept", ctx_r1.allowedExtensions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("for", "fileInput", i_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c0, ctx_r1.hasValidationErrors(file_r3) || ctx_r1.hasFileErrors(i_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.fileUploadCms == null ? null : ctx_r1.fileUploadCms.AttachButton, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](21, _c1, !ctx_r1.isValid(file_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.isValid(file_r3) ? file_r3.name + file_r3.extension : ctx_r1.fileUploadCms == null ? null : ctx_r1.fileUploadCms.PlaceholderText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](23, _c2, i_r4 === 0 && !ctx_r1.isValid(file_r3) && ctx_r1.files.length === 1, ctx_r1.hasValidationErrors(file_r3) || ctx_r1.hasFileErrors(i_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hasValidationErrors(file_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", file_r3 == null ? null : file_r3.errors == null ? null : file_r3.errors.fileType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", file_r3 == null ? null : file_r3.errors == null ? null : file_r3.errors.fileSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", file_r3 == null ? null : file_r3.errors == null ? null : file_r3.errors.fileRead);
  }
}

const _c3 = function (a0) {
  return {
    "disable": a0
  };
};

function SharedFileUploadComponent_div_0_section_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SharedFileUploadComponent_div_0_section_2_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r12.addAdditionalFile();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c3, ctx_r2.hasEmptyUploadSlot()));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c3, ctx_r2.hasEmptyUploadSlot()));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.fileUploadCms == null ? null : ctx_r2.fileUploadCms.AddAdditionalFile);
  }
}

function SharedFileUploadComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SharedFileUploadComponent_div_0_section_1_Template, 16, 26, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SharedFileUploadComponent_div_0_section_2_Template, 4, 7, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.files);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.files.length < ctx_r0.maxUploadSlots);
  }
}

class SharedFileUploadComponent {
  constructor(form, cmsResolverService) {
    this.form = form;
    this.cmsResolverService = cmsResolverService;
    this.maxUploadSlots = 3;
    this.maxfileSizeInMb = 10;
    this.allowedExtensions = '*';
    this.required = false;
    this.filesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.files = [];
  }

  get maxFileSizeInInBytes() {
    return 1024 * 1024 * this.maxfileSizeInMb;
  }

  get submitted() {
    return this.form.submitted;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.fileUploadCms = yield _this.cmsResolverService.resolve({
        ItemId: _constants__WEBPACK_IMPORTED_MODULE_1__.CmsIds.FileUpload
      });
      _this.label = _this.label || _this.fileUploadCms.FileUploadLabel;

      _this.addAdditionalFile();
    })();
  }

  hasFileErrors(index) {
    var _a;

    const errors = (_a = this.files[index]) === null || _a === void 0 ? void 0 : _a.errors;
    return (errors === null || errors === void 0 ? void 0 : errors.fileSize) || (errors === null || errors === void 0 ? void 0 : errors.fileType) || (errors === null || errors === void 0 ? void 0 : errors.fileRead);
  }

  hasValidationErrors(file) {
    return this.submitted && this.required && !this.isValid(file);
  }

  isValid(file) {
    return !!(file === null || file === void 0 ? void 0 : file.name);
  }

  hasEmptyUploadSlot() {
    return this.files.some(file => !(file === null || file === void 0 ? void 0 : file.data));
  }

  addAdditionalFile() {
    if (this.files.length < this.maxUploadSlots) {
      this.addEmptyFile();
    }
  }

  removeFile(index) {
    // Removes a file entry at the specified index, shifting the remaining files up
    this.files.splice(index, 1); // Ensures at least one file input is available

    if (this.files.length === 0) {
      this.addEmptyFile();
    }

    this.emitValidFiles();
  }

  addEmptyFile() {
    this.files.push({
      name: '',
      extension: '',
      data: '',
      contentType: '',
      size: 0,
      errors: {}
    });
  }

  onAttachFile(file, index) {
    const fileInfo = this.getFileInfo(file);
    this.validateFile(fileInfo, index);

    if (this.hasFileErrors(index)) {
      // Ensures the previous file is deleted in parent component when the user re-uploads a file with errors
      this.emitValidFiles();
    } else {
      this.readFileData(file, fileInfo, index);
    }
  }

  getFileInfo(file) {
    return {
      name: file.name.substring(0, file.name.lastIndexOf('.')),
      extension: '.' + file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase(),
      data: '',
      contentType: file.type,
      size: file.size,
      errors: {}
    };
  }

  validateFile(fileInfo, index) {
    if (this.allowedExtensions !== '*') {
      fileInfo.errors.fileType = !this.allowedExtensions.toLowerCase().split(',').map(ext => ext.trim()).includes(fileInfo.extension);
    }

    fileInfo.errors.fileSize = fileInfo.size > this.maxFileSizeInInBytes;
    this.files[index] = fileInfo;
  }

  readFileData(file, fileInfo, index) {
    const reader = new FileReader();

    reader.onload = e => {
      fileInfo.data = e.target.result;
      this.files[index] = fileInfo;
      this.emitValidFiles(); // Generate next slot if 'required' is false

      if (!this.required) {
        this.addAdditionalFile();
      }
    };

    reader.onerror = () => {
      fileInfo.errors.fileRead = true;
      this.files[index] = fileInfo;
      this.emitValidFiles();
    };

    reader.readAsDataURL(file);
  }

  emitValidFiles() {
    this.filesChanged.emit(this.files.filter(file => file === null || file === void 0 ? void 0 : file.data));
  }

}

SharedFileUploadComponent.ɵfac = function SharedFileUploadComponent_Factory(t) {
  return new (t || SharedFileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_2__.CmsResolverService));
};

SharedFileUploadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SharedFileUploadComponent,
  selectors: [["shared-file-upload"]],
  inputs: {
    label: "label",
    maxUploadSlots: "maxUploadSlots",
    maxfileSizeInMb: "maxfileSizeInMb",
    allowedExtensions: "allowedExtensions",
    required: "required"
  },
  outputs: {
    filesChanged: "filesChanged"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([], [{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ControlContainer,
    useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm
  }])],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "add-additional-file", 4, "ngIf"], ["ngClass", "labelMargin"], [1, "field-container", 3, "ngClass"], ["type", "hidden", 3, "name", "ngModel", "required"], ["type", "file", 1, "file-input", 3, "id", "accept", "change"], [3, "for", "ngClass"], [3, "ngClass"], ["svgIcon", "trash-icon", 1, "trash-icon", "clickable", 3, "ngClass", "click"], ["role", "alert"], ["class", "help-block", 4, "ngIf"], [1, "help-block"], [1, "add-additional-file"], ["svgIcon", "add-icon", 3, "ngClass"], [3, "ngClass", "click"]],
  template: function SharedFileUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SharedFileUploadComponent_div_0_Template, 3, 2, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.label);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon],
  styles: ["[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n[_nghost-%COMP%]   .field-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 48px;\n  border-radius: 10px;\n  border: 1px solid #c4c4c4;\n}\n[_nghost-%COMP%]   .error[_ngcontent-%COMP%] {\n  border-color: #fc2125;\n}\n[_nghost-%COMP%]   .error[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  background-color: #fd9092;\n}\n[_nghost-%COMP%]   .file-input[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: #ffdd09;\n  height: 100%;\n  padding: 0px 20px;\n  border-radius: 9px 0px 0px 9px;\n  border-right: 1px solid #c4c4c4;\n  cursor: pointer;\n  margin: 0px;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-size: 14px;\n  line-height: 16px;\n  max-height: 100%;\n  word-wrap: break-word;\n  white-space: normal;\n  overflow: hidden;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n[_nghost-%COMP%]   .file-name-placeholder[_ngcontent-%COMP%] {\n  color: #c4c4c4;\n  font-style: italic;\n}\n[_nghost-%COMP%]   .trash-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  max-width: 25px;\n  max-height: 25px;\n  min-width: 25px;\n  min-height: 25px;\n}\n[_nghost-%COMP%]   .add-additional-file[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n[_nghost-%COMP%]   a.disable[_ngcontent-%COMP%] {\n  color: #c4c4c4 !important;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtdXBsb2FkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRVEsZ0JBQUE7RUFDQSxtQkFBQTtBQUZSO0FBREE7RUFPUSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUhSO0FBVkE7RUFpQlEscUJBQUE7QUFKUjtBQWJBO0VBb0JRLHlCQUFBO0FBSlI7QUFoQkE7RUF5QlEsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU5SO0FBdkJBO0VBaUNRLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBUFI7QUFsQ0E7RUE2Q1EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVJSO0FBN0NBO0VBeURRLGNBQUE7RUFDQSxrQkFBQTtBQVRSO0FBakRBO0VBOERRLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBVlI7QUF4REE7RUFzRVEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFYUjtBQWVRO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQWJaIiwiZmlsZSI6ImZpbGUtdXBsb2FkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcblxuOmhvc3Qge1xuICAgIHNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgIC5maWVsZC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XG4gICAgfVxuXG4gICAgLmVycm9yIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmMyMTI1O1xuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkOTA5MjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5maWxlLWlucHV0IHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICBsYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRkMDk7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDlweCAwcHggMHB4IDlweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2M0YzRjNDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICB9XG5cbiAgICAuZmlsZS1uYW1lLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICNjNGM0YzQ7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB9XG5cbiAgICAudHJhc2gtaWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAyNXB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAyNXB4O1xuICAgICAgICBtaW4td2lkdGg6IDI1cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDI1cHg7XG4gICAgfVxuXG4gICAgLmFkZC1hZGRpdGlvbmFsLWZpbGUge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgJi5kaXNhYmxlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYzRjNGM0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 57754:
/*!***********************************************************!*\
  !*** ./src/shared/ui/form-entry/file-upload/constants.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsIds": () => (/* binding */ CmsIds)
/* harmony export */ });
const CmsIds = {
    FileUpload: '25C21F2C-8CCC-4420-A6DA-093B789BE260'
};


/***/ })

}]);
//# sourceMappingURL=77.a0d5744116a86040.js.map