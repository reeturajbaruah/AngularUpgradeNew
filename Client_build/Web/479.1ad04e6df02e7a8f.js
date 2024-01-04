"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[479],{

/***/ 3197:
/*!****************************************************************!*\
  !*** ./src/forgotUsername/components/frame/frame.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrameComponent": () => (/* binding */ FrameComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/ui/title-banner/title-banner.component */ 38018);
/* harmony import */ var _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/ui/containers/page/pageFilled.component */ 95556);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angular */ 99305);




class FrameComponent {
    constructor() { }
}
FrameComponent.source = 'FORGOT USERNAME';
FrameComponent.ɵfac = function FrameComponent_Factory(t) { return new (t || FrameComponent)(); };
FrameComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FrameComponent, selectors: [["forgot-username-frame"]], inputs: { cmsData: "cmsData" }, decls: 5, vars: 2, consts: [[1, "refresh-2020", "u-spacing--widthFill"], [3, "hasGutter"]], template: function FrameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0)(1, "title-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "page-filled-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ui-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.cmsData == null ? null : ctx.cmsData.Title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hasGutter", false);
    } }, directives: [_common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_0__.TitleBannerComponent, _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_1__.PageFilledContainerComponent, _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__.UIView], styles: ["main[_ngcontent-%COMP%] {\n  background-color: #efeff4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1lLmNvbXBvbmVudC5sZXNzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxwYWdlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUNvQkkseUJBQUE7QURyQkoiLCJmaWxlIjoiZnJhbWUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdGhlbWVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcblxubWFpbiB7XG4gICAgLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMihAdGhlbWUtbGlnaHQpO1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3ItbGlnaHQ6IEB3aGl0ZTtcbkBib2R5LS1iYWNrZ3JvdW5kQ29sb3IyLWxpZ2h0OiBAYXRoZW5zLWdyYXk7XG5AYm9keS0tYmFja2dyb3VuZENvbG9yMy1saWdodDogQGF0aGVucy1ncmF5O1xuQGJvZHktLWNvbG9yLWxpZ2h0OiBAdHVuYS1ncmF5O1xuQGJvZHlfX3Bvc2l0aXZlRmVlZGJhY2stLWNvbG9yLWxpZ2h0OiBAdHJvcGljYWwtcmFpbi1mb3Jlc3QtZ3JlZW47XG5AYm9keV9fYm9yZGVycy0tYm9yZGVyQ29sb3ItbGlnaHQ6IEBzaWx2ZXItZ3JheTtcbkBoZWFkZXItLWNvbG9yLWxpZ2h0OiBAdHVuYS1ncmF5O1xuQGxhYmVsLS1jb2xvci1saWdodDogQGJvdWxkZXItZ3JheTtcbkBzZWxlY3RfX2Fycm93LS1jb2xvci1saWdodDogQHNjb3JwaW9uLWdyYXk7XG5AbGluay0tY29sb3ItbGlnaHQ6IEBhenVyZS1yYWRpYW5jZS1ibHVlO1xuQGRpdmlkZXItLWJvcmRlckNvbG9yLWxpZ2h0OiBAc2Nob29sLWJ1cy15ZWxsb3c7XG5cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvci1Ae3RoZW1lfSc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keS0tYmFja2dyb3VuZENvbG9yMihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5LS1iYWNrZ3JvdW5kQ29sb3IyLUB7dGhlbWV9JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5LS1iYWNrZ3JvdW5kQ29sb3IzKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWJhY2tncm91bmRDb2xvcjMtQHt0aGVtZX0nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWJvZHktLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHktLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnYm9keV9fcG9zaXRpdmVGZWVkYmFjay0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1ib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdib2R5X19ib3JkZXJzLS1ib3JkZXJDb2xvci1Ae3RoZW1lfSc7XG4gICAgYm9yZGVyLWNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1oZWFkZXItLWNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2hlYWRlci0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1sYWJlbC0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnbGFiZWwtLWNvbG9yLUB7dGhlbWV9JztcbiAgICBjb2xvcjogQEBjb2xvcjtcbn1cblxuLnQtc2VsZWN0X19hcnJvdy0tY29sb3IoQHRoZW1lKSB7XG4gICAgQGNvbG9yOiAnc2VsZWN0X19hcnJvdy0tY29sb3ItQHt0aGVtZX0nO1xuICAgIGNvbG9yOiBAQGNvbG9yO1xufVxuXG4udC1saW5rLS1jb2xvcihAdGhlbWUpIHtcbiAgICBAY29sb3I6ICdsaW5rLS1jb2xvci1Ae3RoZW1lfSc7XG4gICAgY29sb3I6IEBAY29sb3IgIWltcG9ydGFudDsgLy8gbWFya2VkIGFzICFpbXBvcnRhbnQgdG8gb3ZlcnJpZGUgYm9vdHN0cmFwXG59XG5cbi50LWRpdmlkZXItLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2RpdmlkZXItLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG5cbi50LWRpdmlkZXJfX2Rhc2gtLWJvcmRlckNvbG9yKEB0aGVtZSkge1xuICAgIEBjb2xvcjogJ2JvZHlfX2JvcmRlcnMtLWJvcmRlckNvbG9yLUB7dGhlbWV9JztcbiAgICBib3JkZXItY29sb3I6IEBAY29sb3I7XG59XG4iXX0= */"] });


/***/ }),

/***/ 86076:
/*!****************************************************************************************!*\
  !*** ./src/forgotUsername/components/identityConfirmed/identityConfirmed.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdentityConfirmedComponent": () => (/* binding */ IdentityConfirmedComponent)
/* harmony export */ });
/* harmony import */ var forgotPassword_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! forgotPassword/constants */ 19705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/ui/wizard/wizardNext.directive */ 27358);








class IdentityConfirmedComponent {
    constructor(uiRouterGlobals, stateService) {
        this.uiRouterGlobals = uiRouterGlobals;
        this.stateService = stateService;
    }
    ngOnInit() {
        this.username = this.uiRouterGlobals.params.loginId;
    }
    goToForgetPassword() {
        this.stateService.go(forgotPassword_constants__WEBPACK_IMPORTED_MODULE_0__.stateNames.FindAccount);
    }
}
IdentityConfirmedComponent.ɵfac = function IdentityConfirmedComponent_Factory(t) { return new (t || IdentityConfirmedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_6__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_6__.StateService)); };
IdentityConfirmedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: IdentityConfirmedComponent, selectors: [["identity-confirmed"]], inputs: { cmsData: "cmsData" }, decls: 19, vars: 3, consts: [[1, "refresh-2020"], ["fxLayout", "column"], [1, "u-spacing__firstHeaderToTitle--marginTop"], [1, "u-spacing__divider--marginTopBottom"], ["translation-skip", ""], [1, "linkSpacing"], ["id", "forgotPasswordLnk", 3, "click"], ["wizard-next", ""]], template: function IdentityConfirmedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "div", 1)(2, "card-container", 2)(3, "section", 1)(4, "header")(5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "mat-divider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "section")(13, "div", 5)(14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function IdentityConfirmedComponent_Template_a_click_14_listener() { return ctx.goToForgetPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "wizard-ui")(17, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.cmsData == null ? null : ctx.cmsData.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.cmsData == null ? null : ctx.cmsData.Subtitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.username, " ");
    } }, directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_1__.PageCenteredContainerComponent, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_4__.WizardNextDirective], styles: ["page-centered-container[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 19px;\n}\nh2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\nmat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\narticle[_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  font-size: 16px;\n  line-height: 22px;\n  display: block;\n  margin-top: 20px;\n}\nsection[_ngcontent-%COMP%] {\n  display: block;\n}\nwizard-ui[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  display: block;\n}\nwizard-ui[_ngcontent-%COMP%]   [wizard-next][_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.linkSpacing[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlkZW50aXR5Q29uZmlybWVkLmNvbXBvbmVudC5sZXNzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFx0aGVtZVxcbWl4aW5zXFxmb250cy5sZXNzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFxjdXN0b21cXHNwYWNpbmdcXHNlY3Rpb25zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQU1BO0VBQ0ksZ0JBQUE7QUFKSjtBQU9BO0VBQ0ksV0FBQTtBQUxKO0FBUUE7RUNUSSx5QkFBQTtFRFdBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQU5KO0FBU0E7RUFDSSxjQUFBO0FBUEo7QUFVQTtFRWxCUSxnQkFBQTtFRm9CSixjQUFBO0FBUko7QUFNQTtFQUtRLHlCQUFBO0FBUlI7QUFZQTtFQUNJLGdCQUFBO0FBVkoiLCJmaWxlIjoiaWRlbnRpdHlDb25maXJtZWQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy9jdXN0b20vc3BhY2luZy9zZWN0aW9ucy5sZXNzJztcblxucGFnZS1jZW50ZXJlZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDE5cHg7XG59XG5cbmgyIHtcbiAgICBtYXgtaGVpZ2h0OiA3MHB4O1xufVxuXG5tYXQtZGl2aWRlciB7XG4gICAgd2lkdGg6IEB3aWR0aC1kaXZpZGVyO1xufVxuXG5hcnRpY2xlIHtcbiAgICAudC1ib2R5LS1mb250RmFtaWx5KCk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbnNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG53aXphcmQtdWkge1xuICAgIC5yZWZyZXNoLTIwMjAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Ub3AoKTtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIFt3aXphcmQtbmV4dF0ge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbn1cblxuLmxpbmtTcGFjaW5nIHtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbi50LWhlYWRlci0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtam9zdDtcbn1cblxuLnQtYm9keS0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbn1cbiIsIi5yZWZyZXNoLTIwMjAge1xuICAgIC8vIERlc2t0b3BcbiAgICAudS1zcGFjaW5nX19maWVsZFRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19oZWFkZXJUb1NlY3Rpb24tLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Cb3R0b20ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcEhhbGYge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2J1dHRvblRvRmllbGQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmlyc3RIZWFkZXJUb1RpdGxlLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2NhcmRUb0NhcmQtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fYWRkcmVzc1RvUGF5bWVudERpc3BsYXktLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuICAgIC8vIE1vYmlsZVxuICAgICYubHQtbWQsXG4gICAgLmx0LW1kIHtcbiAgICAgICAgLnUtc3BhY2luZ19fY2FyZFRvQ2FyZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 49150:
/*!**************************************************************************!*\
  !*** ./src/forgotUsername/components/inputEmail/inputEmail.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputEmailComponent": () => (/* binding */ InputEmailComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _2FA_components_accountSearch_accountSearch_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 2FA/components/accountSearch/accountSearch.component */ 94039);
/* harmony import */ var _2FA_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 2FA/interfaces */ 61954);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../frame/frame.component */ 3197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var forgotUsername_services_webApi_webApi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! forgotUsername/services/webApi/webApi.service */ 47548);
/* harmony import */ var forgotUsername_services_forgotUsername_forgotUsername_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! forgotUsername/services/forgotUsername/forgotUsername.service */ 33266);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../validation/focus.directive */ 39453);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _common_ui_form_entry_emailAddress_emailAddress_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/ui/form-entry/emailAddress/emailAddress.component */ 37864);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _2FA_components_locateYourAccount_locateYourAccount_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../2FA/components/locateYourAccount/locateYourAccount.component */ 42350);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/ui/wizard/wizard.component */ 32993);
/* harmony import */ var _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/ui/wizard/wizardNext.directive */ 27358);























function InputEmailComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 3)(2, "locate-your-account", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("dataChange", function InputEmailComponent_ng_container_14_Template_locate_your_account_dataChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return ctx_r2.data = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("additionalInfoCmsData", ctx_r1.additionalInfoCmsData)("helpLinkCmsData", ctx_r1.helpLinkCmsData)("data", ctx_r1.data)("agencies", ctx_r1.agencies);
  }
}

class InputEmailComponent {
  constructor(stateService, webApiService, forgotUsernameService, dataService, window, webStorageConst) {
    this.stateService = stateService;
    this.webApiService = webApiService;
    this.forgotUsernameService = forgotUsernameService;
    this.dataService = dataService;
    this.window = window;
    this.webStorageConst = webStorageConst;
    this.moreInfoNeeded = false;
    this.data = {};
  }

  ngOnInit() {
    this.childCms = this.cmsData.Children.reduce((acc, item) => ({ ...acc,
      [item.ItemName]: item
    }), {});
    this.data.loginResetOption = _2FA_interfaces__WEBPACK_IMPORTED_MODULE_2__.LoginResetOption.Email;
    this.dataService.getTagAuthorities().then(res => {
      this.agencies = res;
      this.data.selectedAgency = this.agencies.find(x => x === _2FA_components_accountSearch_accountSearch_component__WEBPACK_IMPORTED_MODULE_1__.AccountSearchComponent.defaultAgency);
    });
  }

  get additionalInfoCmsData() {
    var _a;

    return (_a = this.childCms) === null || _a === void 0 ? void 0 : _a[`More Info`];
  }

  get helpLinkCmsData() {
    var _a;

    return (_a = this.childCms) === null || _a === void 0 ? void 0 : _a[`Help Locating Account`];
  }

  submit(nextState) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.form.invalid) {
        return;
      }

      const acctSearchRes = yield _this.searchAccount();

      if (acctSearchRes.hasError) {
        return;
      } else if (acctSearchRes.multipleAccountsFound) {
        const currForm = _this.form.value;
        _this.moreInfoNeeded = true;
        setTimeout(() => {
          _this.form.resetForm();

          _this.form.reset();

          const control = _this.form.controls.primaryEmail_email;
          control.setValue(currForm.primaryEmail_email);
          control.markAsDirty();
          control.updateValueAndValidity();
        });
      } else {
        const twoFaAuthSendRes = yield _this.sendEmailCode(acctSearchRes);

        if (twoFaAuthSendRes && twoFaAuthSendRes.verificationSent) {
          yield _this.stateService.go(nextState, {
            phoneNumber: null,
            email: _this.emailAddress,
            acctId: acctSearchRes.acctId,
            loginId: acctSearchRes.loginId,
            dbSessionId: acctSearchRes.dbSessionId,
            channel: _2FA_interfaces__WEBPACK_IMPORTED_MODULE_2__.Channel.Email
          }, {
            custom: {
              isExplicitlyAllowedTransition: true
            }
          });
        }
      }
    })();
  }

  searchAccount() {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tagNumber = _this2.moreInfoNeeded && _this2.data.accountIdentificationOption === _2FA_interfaces__WEBPACK_IMPORTED_MODULE_2__.AccountIdentificationOption.EzTagNumber ? _this2.data.ezTagNumber : null;
      const eztagAgency = _this2.moreInfoNeeded && _this2.data.accountIdentificationOption === _2FA_interfaces__WEBPACK_IMPORTED_MODULE_2__.AccountIdentificationOption.EzTagNumber ? _this2.data.selectedAgency : null;
      const accountNumber = _this2.moreInfoNeeded && _this2.data.accountIdentificationOption === _2FA_interfaces__WEBPACK_IMPORTED_MODULE_2__.AccountIdentificationOption.AccountNumber ? _this2.data.accountNumber : null;
      const data = {
        emailAddress: _this2.emailAddress,
        accountNumber,
        eztagAgency,
        phoneNumber: null,
        tagNumber
      };
      return _this2.webApiService.forgotPasswordGetAccount(data);
    })();
  }

  sendEmailCode(acct) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        to: _this3.emailAddress,
        language: _this3.window.localStorage[_this3.webStorageConst.selectedLanguage],
        accountId: acct.acctId,
        source: _frame_frame_component__WEBPACK_IMPORTED_MODULE_4__.FrameComponent.source,
        channel: _2FA_interfaces__WEBPACK_IMPORTED_MODULE_2__.Channel.Email
      };
      return _this3.forgotUsernameService.sendCode(data);
    })();
  }

}

InputEmailComponent.ɵfac = function InputEmailComponent_Factory(t) {
  return new (t || InputEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_17__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](forgotUsername_services_webApi_webApi_service__WEBPACK_IMPORTED_MODULE_5__.WebApiService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](forgotUsername_services_forgotUsername_forgotUsername_service__WEBPACK_IMPORTED_MODULE_6__.ForgotUsernameService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_7__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](common_module__WEBPACK_IMPORTED_MODULE_3__.WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](constants_module__WEBPACK_IMPORTED_MODULE_8__.WebStorageConst));
};

InputEmailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
  type: InputEmailComponent,
  selectors: [["forgot-username-inputEmail"]],
  viewQuery: function InputEmailComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    }
  },
  inputs: {
    cmsData: "cmsData"
  },
  decls: 20,
  vars: 7,
  consts: [[1, "refresh-2020"], ["fxLayout", "column start", "validation-focus", "", "novalidate", ""], ["forgotUsernameForm", "ngForm"], ["fxLayout", "column"], [1, "u-spacing__firstHeaderToTitle--marginTop"], [1, "u-spacing__divider--marginTopBottom"], ["name", "primaryEmail", 3, "emailAddress", "header", "required", "emailAddressChange"], [4, "ngIf"], [3, "disabled", "next"], ["wizard-next", ""], ["wizard-cancel", ""], ["id", "locateYourAccount", 3, "additionalInfoCmsData", "helpLinkCmsData", "data", "agencies", "dataChange"]],
  template: function InputEmailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "form", 1, 2)(3, "div", 3)(4, "card-container", 4)(5, "section", 3)(6, "header")(7, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](9, "mat-divider", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "article");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "section")(13, "email-address", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("emailAddressChange", function InputEmailComponent_Template_email_address_emailAddressChange_13_listener($event) {
        return ctx.emailAddress = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](14, InputEmailComponent_ng_container_14_Template, 3, 4, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "wizard-ui", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("next", function InputEmailComponent_Template_wizard_ui_next_15_listener($event) {
        return ctx.submit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17, "Continue");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx.cmsData == null ? null : ctx.cmsData.Title);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx.cmsData == null ? null : ctx.cmsData.Subtitle, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("emailAddress", ctx.emailAddress)("header", "\u00A0")("required", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.moreInfoNeeded);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", _r0.pristine);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_9__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_10__.FocusDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_11__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDivider, _common_ui_form_entry_emailAddress_emailAddress_component__WEBPACK_IMPORTED_MODULE_12__.EmailAddressComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _2FA_components_locateYourAccount_locateYourAccount_component__WEBPACK_IMPORTED_MODULE_13__.LocateYourAccountComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_14__.WizardComponent, _common_ui_wizard_wizardNext_directive__WEBPACK_IMPORTED_MODULE_15__.WizardNextDirective],
  styles: ["page-centered-container[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 19px;\n}\nh2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\nmat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\narticle[role='instructions'][_ngcontent-%COMP%] {\n  font-family: 'Montserrat';\n  font-size: 16px;\n  line-height: 22px;\n  display: block;\n  margin-top: 20px;\n}\nsection[_ngcontent-%COMP%] {\n  display: block;\n}\nwizard-ui[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  display: block;\n}\nwizard-ui[_ngcontent-%COMP%]   [wizard-next][_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0RW1haWwuY29tcG9uZW50Lmxlc3MiLCIuLlxcLi5cXC4uXFxzdHlsZXNcXHRoZW1lXFxtaXhpbnNcXGZvbnRzLmxlc3MiLCIuLlxcLi5cXC4uXFxzdHlsZXNcXGN1c3RvbVxcc3BhY2luZ1xcc2VjdGlvbnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUhKO0FBTUE7RUFDSSxnQkFBQTtBQUpKO0FBT0E7RUFDSSxXQUFBO0FBTEo7QUFRQTtFQ1RJLHlCQUFBO0VEV0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTko7QUFTQTtFQUNJLGNBQUE7QUFQSjtBQVVBO0VFbEJRLGdCQUFBO0VGb0JKLGNBQUE7QUFSSjtBQU1BO0VBS1EseUJBQUE7QUFSUiIsImZpbGUiOiJpbnB1dEVtYWlsLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvY3VzdG9tL3NwYWNpbmcvc2VjdGlvbnMubGVzcyc7XG5cbnBhZ2UtY2VudGVyZWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxOXB4O1xufVxuXG5oMiB7XG4gICAgbWF4LWhlaWdodDogNzBweDtcbn1cblxubWF0LWRpdmlkZXIge1xuICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbn1cblxuYXJ0aWNsZVtyb2xlPSdpbnN0cnVjdGlvbnMnXSB7XG4gICAgLnQtYm9keS0tZm9udEZhbWlseSgpO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxud2l6YXJkLXVpIHtcbiAgICAucmVmcmVzaC0yMDIwLnUtc3BhY2luZ19fc2VjdGlvblRvU2VjdGlvbi0tbWFyZ2luVG9wKCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBbd2l6YXJkLW5leHRdIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG59XG4iLCJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cblxuLnQtaGVhZGVyLS1mb250RmFtaWx5KCkge1xuICAgIGZvbnQtZmFtaWx5OiBAZm9udC1qb3N0O1xufVxuXG4udC1ib2R5LS1mb250RmFtaWx5KCkge1xuICAgIGZvbnQtZmFtaWx5OiBAZm9udC1tb250c2VycmF0O1xufVxuIiwiLnJlZnJlc2gtMjAyMCB7XG4gICAgLy8gRGVza3RvcFxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2hlYWRlclRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpbkJvdHRvbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wSGFsZiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fYnV0dG9uVG9GaWVsZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maXJzdEhlYWRlclRvVGl0bGUtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fY2FyZFRvQ2FyZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19hZGRyZXNzVG9QYXltZW50RGlzcGxheS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG4gICAgLy8gTW9iaWxlXG4gICAgJi5sdC1tZCxcbiAgICAubHQtbWQge1xuICAgICAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 72548:
/*!**************************************************************************!*\
  !*** ./src/forgotUsername/components/verifyCode/verifyCode.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyCodeComponent": () => (/* binding */ VerifyCodeComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frame/frame.component */ 3197);
/* harmony import */ var forgotUsername_forgotUsername_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! forgotUsername/forgotUsername.constants */ 79558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var cms_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cms/services */ 46693);
/* harmony import */ var forgotUsername_services_webApi_webApi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! forgotUsername/services/webApi/webApi.service */ 47548);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _2FA_components_enterVerificationCode_enterVerificationCode_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../2FA/components/enterVerificationCode/enterVerificationCode.component */ 94582);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/safeHtml.pipe */ 49985);











class VerifyCodeComponent {
  constructor(stateService, cmsReplacementService, uiRouterGlobals, webApiService) {
    this.stateService = stateService;
    this.cmsReplacementService = cmsReplacementService;
    this.uiRouterGlobals = uiRouterGlobals;
    this.webApiService = webApiService;
    this.source = _frame_frame_component__WEBPACK_IMPORTED_MODULE_1__.FrameComponent.source;
  }

  ngOnInit() {
    this.cmsData.EMAIL_DESC = this.cmsReplacementService.transformTemplate(this.cmsData.EMAIL_DESC, {
      email: this.uiRouterGlobals.params.email
    });
  }

  verify() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _this.webApiService.forgotUsernameGetAccount({
        emailAddress: _this.uiRouterGlobals.params.email,
        phoneNumber: null,
        tagNumber: null,
        eztagAgency: null,
        accountNumber: _this.uiRouterGlobals.params.acctId
      });

      if (!res.hasError) {
        const params = { ..._this.uiRouterGlobals.params,
          loginId: res.loginId
        };
        yield _this.stateService.go(forgotUsername_forgotUsername_constants__WEBPACK_IMPORTED_MODULE_2__.ForgotUsernameStateNames.IdentityConfirmed, params, {
          custom: {
            isExplicitlyAllowedTransition: true
          }
        });
      }
    })();
  }

}

VerifyCodeComponent.ɵfac = function VerifyCodeComponent_Factory(t) {
  return new (t || VerifyCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_10__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](cms_services__WEBPACK_IMPORTED_MODULE_3__.CmsReplacementService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_10__.UIRouterGlobals), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](forgotUsername_services_webApi_webApi_service__WEBPACK_IMPORTED_MODULE_4__.WebApiService));
};

VerifyCodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: VerifyCodeComponent,
  selectors: [["forgot-username-verify-code"]],
  inputs: {
    cmsData: "cmsData"
  },
  decls: 5,
  vars: 9,
  consts: [[1, "refresh-2020"], [3, "cmsInfo", "contactInfo", "acctId", "source", "channel", "disableTryAnotherWay", "verifyEmit"], [3, "innerHtml"]],
  template: function VerifyCodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "page-centered-container", 0)(1, "enter-verification-code", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("verifyEmit", function VerifyCodeComponent_Template_enter_verification_code_verifyEmit_1_listener() {
        return ctx.verify();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "card-container");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "article", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("cmsInfo", ctx.cmsData)("contactInfo", ctx.uiRouterGlobals.params.email)("acctId", ctx.uiRouterGlobals.params.acctId)("source", ctx.source)("channel", ctx.uiRouterGlobals.params.channel)("disableTryAnotherWay", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 7, ctx.cmsData.LongDescription), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    }
  },
  directives: [_common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_5__.PageCenteredContainerComponent, _2FA_components_enterVerificationCode_enterVerificationCode_component__WEBPACK_IMPORTED_MODULE_6__.EnterVerificationCodeComponent, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_7__.CardContainerComponent],
  pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_8__.SafeHtmlPipe],
  styles: ["card-container[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}\nwizard-ui[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}\nwizard-ui[_ngcontent-%COMP%]   [wizard-next][_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\nwizard-ui[_ngcontent-%COMP%]   [wizard-cancel][_ngcontent-%COMP%], wizard-ui[_ngcontent-%COMP%]   [wizard-previous][_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeUNvZGUuY29tcG9uZW50Lmxlc3MiLCIuLlxcLi5cXC4uXFxzdHlsZXNcXGN1c3RvbVxcc3BhY2luZ1xcc2VjdGlvbnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLGNBQUE7RUNLSSxnQkFBQTtBRFJSO0FBT0E7RUFDSSxjQUFBO0VDUUksZ0JBQUE7QURaUjtBQUdBO0VBS1EseUJBQUE7QUFMUjtBQUFBOztFQVVRLDBCQUFBO0FBTlIiLCJmaWxlIjoidmVyaWZ5Q29kZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL3NlY3Rpb25zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vc3R5bGVzL2N1c3RvbS9zcGFjaW5nL2RpdmlkZXJzLmxlc3MnO1xuXG5jYXJkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLnJlZnJlc2gtMjAyMC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpblRvcCgpO1xufVxuXG53aXphcmQtdWkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC5yZWZyZXNoLTIwMjAudS1zcGFjaW5nX19maWVsZFRvRmllbGQtLW1hcmdpblRvcCgpO1xuXG4gICAgW3dpemFyZC1uZXh0XSB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgW3dpemFyZC1jYW5jZWxdLFxuICAgIFt3aXphcmQtcHJldmlvdXNdIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxufVxuIiwiLnJlZnJlc2gtMjAyMCB7XG4gICAgLy8gRGVza3RvcFxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2hlYWRlclRvU2VjdGlvbi0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19zZWN0aW9uVG9TZWN0aW9uLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX3NlY3Rpb25Ub1NlY3Rpb24tLW1hcmdpbkJvdHRvbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fZmllbGRUb0ZpZWxkLS1tYXJnaW5Ub3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC51LXNwYWNpbmdfX2ZpZWxkVG9GaWVsZC0tbWFyZ2luVG9wSGFsZiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fYnV0dG9uVG9GaWVsZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19maXJzdEhlYWRlclRvVGl0bGUtLW1hcmdpblRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgLnUtc3BhY2luZ19fY2FyZFRvQ2FyZC0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAudS1zcGFjaW5nX19hZGRyZXNzVG9QYXltZW50RGlzcGxheS0tbWFyZ2luVG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG4gICAgLy8gTW9iaWxlXG4gICAgJi5sdC1tZCxcbiAgICAubHQtbWQge1xuICAgICAgICAudS1zcGFjaW5nX19jYXJkVG9DYXJkLS1tYXJnaW5Ub3Age1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 61479:
/*!*****************************************************!*\
  !*** ./src/forgotUsername/forgotUsername.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotUsernameModule": () => (/* binding */ ForgotUsernameModule)
/* harmony export */ });
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var app_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/routing */ 59389);
/* harmony import */ var _components_frame_frame_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/frame/frame.component */ 3197);
/* harmony import */ var _components_inputEmail_inputEmail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/inputEmail/inputEmail.component */ 49150);
/* harmony import */ var _forgotUsername_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgotUsername.constants */ 79558);
/* harmony import */ var _forgotUsername_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotUsername.routing */ 77316);
/* harmony import */ var common_upgrades__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/upgrades */ 41034);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var validation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! validation/module */ 26186);
/* harmony import */ var _services_webApi_webApi_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/webApi/webApi.service */ 47548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _2FA_2FA_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! 2FA/2FA.module */ 11917);
/* harmony import */ var _services_forgotUsername_forgotUsername_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/forgotUsername/forgotUsername.service */ 33266);
/* harmony import */ var _components_verifyCode_verifyCode_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/verifyCode/verifyCode.component */ 72548);
/* harmony import */ var pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pipes/module */ 20445);
/* harmony import */ var _components_identityConfirmed_identityConfirmed_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/identityConfirmed/identityConfirmed.component */ 86076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @uirouter/angular */ 99305);




















const componentDictionary = {
    [_forgotUsername_constants__WEBPACK_IMPORTED_MODULE_4__.ForgotUsernameStateNames.Root]: _components_frame_frame_component__WEBPACK_IMPORTED_MODULE_2__.FrameComponent,
    [_forgotUsername_constants__WEBPACK_IMPORTED_MODULE_4__.ForgotUsernameStateNames.InputEmail]: _components_inputEmail_inputEmail_component__WEBPACK_IMPORTED_MODULE_3__.InputEmailComponent,
    [_forgotUsername_constants__WEBPACK_IMPORTED_MODULE_4__.ForgotUsernameStateNames.VerifyCode]: _components_verifyCode_verifyCode_component__WEBPACK_IMPORTED_MODULE_11__.VerifyCodeComponent,
    [_forgotUsername_constants__WEBPACK_IMPORTED_MODULE_4__.ForgotUsernameStateNames.IdentityConfirmed]: _components_identityConfirmed_identityConfirmed_component__WEBPACK_IMPORTED_MODULE_13__.IdentityConfirmedComponent
};
const routesWithComponents = _forgotUsername_routing__WEBPACK_IMPORTED_MODULE_5__.forgotUsernameStatesConfig.map(route => {
    const routes = {
        ...route,
        component: componentDictionary[route.name]
    };
    return routes;
});
class ForgotUsernameModule {
}
ForgotUsernameModule.ɵfac = function ForgotUsernameModule_Factory(t) { return new (t || ForgotUsernameModule)(); };
ForgotUsernameModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: ForgotUsernameModule });
ForgotUsernameModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
        _services_forgotUsername_forgotUsername_service__WEBPACK_IMPORTED_MODULE_10__.ForgotUsernameService,
        _services_webApi_webApi_service__WEBPACK_IMPORTED_MODULE_8__.WebApiService
    ], imports: [[
            (0,app_routing__WEBPACK_IMPORTED_MODULE_1__.DynamicRoutes)([common_upgrades__WEBPACK_IMPORTED_MODULE_6__.ENVIRON_CONFIG], (environConfig) => environConfig.twoFactorAuth.forgotUsername ? routesWithComponents : []),
            common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
            validation_module__WEBPACK_IMPORTED_MODULE_7__.ValidationModule,
            _2FA_2FA_module__WEBPACK_IMPORTED_MODULE_9__.TwoFactorAuthModule,
            pipes_module__WEBPACK_IMPORTED_MODULE_12__.PipesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](ForgotUsernameModule, { declarations: [_components_frame_frame_component__WEBPACK_IMPORTED_MODULE_2__.FrameComponent,
        _components_inputEmail_inputEmail_component__WEBPACK_IMPORTED_MODULE_3__.InputEmailComponent,
        _components_verifyCode_verifyCode_component__WEBPACK_IMPORTED_MODULE_11__.VerifyCodeComponent,
        _components_identityConfirmed_identityConfirmed_component__WEBPACK_IMPORTED_MODULE_13__.IdentityConfirmedComponent], imports: [_uirouter_angular__WEBPACK_IMPORTED_MODULE_19__.UIRouterModule, common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        validation_module__WEBPACK_IMPORTED_MODULE_7__.ValidationModule,
        _2FA_2FA_module__WEBPACK_IMPORTED_MODULE_9__.TwoFactorAuthModule,
        pipes_module__WEBPACK_IMPORTED_MODULE_12__.PipesModule] }); })();


/***/ }),

/***/ 77316:
/*!******************************************************!*\
  !*** ./src/forgotUsername/forgotUsername.routing.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forgotUsernameStatesConfig": () => (/* binding */ forgotUsernameStatesConfig),
/* harmony export */   "stateGuard": () => (/* binding */ stateGuard)
/* harmony export */ });
/* harmony import */ var common_resolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/resolvers */ 1444);
/* harmony import */ var _forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotUsername.constants */ 79558);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var login_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! login/constants */ 5723);
/* harmony import */ var forgotPassword_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! forgotPassword/constants */ 19705);





const stateGuard = (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.StateGuard)(constants_module__WEBPACK_IMPORTED_MODULE_2__.webStorageConst.forgotUsername, _forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernameStateNames.InputEmail);
const forgotUsernameStatesConfig = [
    {
        name: _forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernameStateNames.Root,
        url: _forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernameRoutes.Root,
        abstract: true,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_2__.userRoles.anonymous),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cmsData', { ItemId: _forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernameCmsIds.Root }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_2__.MaintenanceFeature.Account)
        ]
    },
    {
        name: _forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernameStateNames.InputEmail,
        url: _forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernameRoutes.InputEmail,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_2__.userRoles.anonymous),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cmsData', { ItemId: _forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernameCmsIds.InputEmail }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_2__.MaintenanceFeature.Account)
        ],
        wizard: {
            nextState: _forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernameStateNames.VerifyCode,
            cancelState: login_constants__WEBPACK_IMPORTED_MODULE_3__.stateNames.Login
        }
    },
    {
        name: _forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernameStateNames.VerifyCode,
        url: _forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernameRoutes.VerifyCode,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_2__.userRoles.anonymous),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cmsData', { ItemId: _forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernameCmsIds.VerifyCode }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_2__.MaintenanceFeature.Account),
            stateGuard({
                denyRefresh: true,
                explicitlyAllowed: [_forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernameStateNames.InputEmail],
                explicitlyForbidden: [_forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernameStateNames.IdentityConfirmed]
            })
        ],
        params: {
            phoneNumber: null,
            email: null,
            acctId: null,
            loginId: null,
            dbSessionId: null,
            channel: null,
            isMissingEmail: null
        },
        wizard: {
            nextState: _forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernameStateNames.IdentityConfirmed,
            prevState: _forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernameStateNames.InputEmail,
            cancelState: login_constants__WEBPACK_IMPORTED_MODULE_3__.stateNames.Login
        }
    },
    {
        name: _forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernameStateNames.IdentityConfirmed,
        url: _forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernameRoutes.IdentityConfirmed,
        settings: {},
        resolve: [
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.AuthResolve)(constants_module__WEBPACK_IMPORTED_MODULE_2__.userRoles.anonymous),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.CmsResolve)('cmsData', { ItemId: _forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernameCmsIds.IdentityConfirmed }),
            (0,common_resolvers__WEBPACK_IMPORTED_MODULE_0__.MaintenanceResolve)(constants_module__WEBPACK_IMPORTED_MODULE_2__.MaintenanceFeature.Account),
            stateGuard({
                denyRefresh: true,
                explicitlyAllowed: [_forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernameStateNames.VerifyCode],
                explicitlyForbidden: [login_constants__WEBPACK_IMPORTED_MODULE_3__.stateNames.Login, forgotPassword_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.FindAccount]
            })
        ],
        params: {
            phoneNumber: null,
            email: null,
            acctId: null,
            loginId: null,
            dbSessionId: null,
            channel: null,
            isMissingEmail: null
        },
        wizard: {
            nextState: login_constants__WEBPACK_IMPORTED_MODULE_3__.stateNames.Login,
            cancelState: _forgotUsername_constants__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernameRoutes.InputEmail,
        }
    }
];


/***/ }),

/***/ 33266:
/*!******************************************************************************!*\
  !*** ./src/forgotUsername/services/forgotUsername/forgotUsername.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotUsernameService": () => (/* binding */ ForgotUsernameService)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _2FA_services_2FA_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 2FA/services/2FA.service */ 70664);



class ForgotUsernameService {
  constructor(twoFAService) {
    this.twoFAService = twoFAService;
  }

  sendCode(request) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this.twoFAService.sendVerificationCode(request);
    })();
  }

}

ForgotUsernameService.ɵfac = function ForgotUsernameService_Factory(t) {
  return new (t || ForgotUsernameService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_2FA_services_2FA_service__WEBPACK_IMPORTED_MODULE_1__.TwoFAService));
};

ForgotUsernameService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ForgotUsernameService,
  factory: ForgotUsernameService.ɵfac
});

/***/ }),

/***/ 47548:
/*!**************************************************************!*\
  !*** ./src/forgotUsername/services/webApi/webApi.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebApiService": () => (/* binding */ WebApiService)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/services */ 8784);



class WebApiService {
  constructor(httpService, responseErrorService) {
    this.httpService = httpService;
    this.responseErrorService = responseErrorService;
  }

  get baseUrl() {
    return '/api/forgotUsername';
  }

  forgotPasswordGetAccount(request) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = '/api/forgotPassword/getAccount';
      const response = yield _this.httpService.post(url, request);
      yield _this.handleErrors(response);
      return response;
    })();
  }

  forgotUsernameGetAccount(request) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${_this2.baseUrl}/getAccount`;
      const response = yield _this2.httpService.post(url, request);
      yield _this2.handleErrors(response);
      return response;
    })();
  }

  handleErrors(response) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.responseErrorService.isErrorFree(response)) {
        yield _this3.responseErrorService.displayAlertsFromResponse(response);
      } else {
        response.hasError = true;
      }
    })();
  }

}

WebApiService.ɵfac = function WebApiService_Factory(t) {
  return new (t || WebApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](common_services__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](common_services__WEBPACK_IMPORTED_MODULE_1__.ResponseErrorService));
};

WebApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: WebApiService,
  factory: WebApiService.ɵfac
});

/***/ })

}]);
//# sourceMappingURL=479.1ad04e6df02e7a8f.js.map