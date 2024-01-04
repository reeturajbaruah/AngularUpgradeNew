"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[795],{

/***/ 80574:
/*!****************************************************************************!*\
  !*** ./src/login/addMissingInformation/addMissingInformation.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddMissingInformationComponent": () => (/* binding */ AddMissingInformationComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var accountDashboard_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! accountDashboard/constants */ 75888);
/* harmony import */ var common_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/providers */ 61264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var common_services_session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/services/session/session.service */ 19511);
/* harmony import */ var _storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../storefront/services/storefrontUtility.service */ 18011);
/* harmony import */ var common_services_accountService_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/services/accountService/account.service */ 59031);
/* harmony import */ var authentication_authChannelService_authChannel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! authentication/authChannelService/authChannel.service */ 67734);
/* harmony import */ var authentication_addMissingInformationService_addMissingInformation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! authentication/addMissingInformationService/addMissingInformation.service */ 10402);
/* harmony import */ var authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! authentication/authenticationService/authentication.service */ 44722);
/* harmony import */ var suspendedAccountRefresh_services_suspendedAccount_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! suspendedAccountRefresh/services/suspendedAccount.service */ 14717);
/* harmony import */ var constants_userRoles_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! constants/userRoles.constants */ 32994);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var constants_stateNames_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! constants/stateNames.constants */ 40916);
/* harmony import */ var _common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/ui/title-banner/title-banner.component */ 38018);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _common_ui_form_entry_showHideInputButton_showHideInputButton_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/ui/form-entry/showHideInputButton/showHideInputButton.component */ 27554);
/* harmony import */ var _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../validation/errorMessages/errorMessages.component */ 65316);
/* harmony import */ var _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../validation/errorMessages/errorMessage.component */ 79636);
/* harmony import */ var _validation_notEqualTo_notEqualTo_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../validation/notEqualTo/notEqualTo.directive */ 99758);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/core */ 73067);
/* harmony import */ var _common_ui_form_entry_emailAddress_emailAddress_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../common/ui/form-entry/emailAddress/emailAddress.component */ 37864);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../common/ui/modals/actionButtons/actionButtons.component */ 65380);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);




































function AddMissingInformationComponent_section_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "section", 11)(1, "section")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](4, "mat-divider", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](5, "div", 13)(6, "mat-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](7, "CURRENT PASSWORD");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](8, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("ngModelChange", function AddMissingInformationComponent_section_8_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return ctx_r7.addMissingInformation.currentPassword = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](10, "show-hide-input-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("showFieldChange", function AddMissingInformationComponent_section_8_Template_show_hide_input_button_showFieldChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return ctx_r9.isShowCurrentPassword = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](11, "error-messages", 18)(12, "error-message", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](13, "New password must be different from current password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](14, "error-message", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](15, "Please enter your password");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](16, "div", 21)(17, "mat-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](18, "NEW PASSWORD");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](19, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("ngModelChange", function AddMissingInformationComponent_section_8_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return ctx_r10.addMissingInformation.newPassword = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](21, "show-hide-input-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("showFieldChange", function AddMissingInformationComponent_section_8_Template_show_hide_input_button_showFieldChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r8);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return ctx_r11.isShowNewPassword = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](22, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](24, "error-messages", 18)(25, "error-message", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](26, "Please enter a password-");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](27, "error-message", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](29, "error-message", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](31, "error-message", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](33, "error-message", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](34, "New password must be different from current password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](9);

    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](20);

    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r1.cmsContent.ResetPasswordSectionHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("error-check", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngModel", ctx_r1.addMissingInformation.currentPassword)("type", ctx_r1.isShowCurrentPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("showField", ctx_r1.isShowCurrentPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("errors", _r5.errors)("activeBeforeSubmit", _r5.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("error-check", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngModel", ctx_r1.addMissingInformation.newPassword)("type", ctx_r1.isShowNewPassword ? "text" : "password")("notEqualTo", ctx_r1.addMissingInformation.currentPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("showField", ctx_r1.isShowNewPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r1.pwCmsData.PasswordDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("errors", _r6.errors)("activeBeforeSubmit", _r6.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r1.pwCmsData.MinPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r1.pwCmsData.MaxPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r1.pwCmsData.InvalidCharacter);
  }
}

function AddMissingInformationComponent_section_9_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("valueChange", function AddMissingInformationComponent_section_9_mat_option_12_Template_mat_option_valueChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r17);
      const question_r15 = restoredCtx.$implicit;
      return question_r15.securityQuestionID = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const question_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("value", question_r15.securityQuestionID);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](question_r15.securityQuestion);
  }
}

function AddMissingInformationComponent_section_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "section", 29)(1, "section")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](4, "mat-divider", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](5, "section", 30)(6, "div")(7, "mat-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](8, "SELECT SECURITY QUESTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](9, "div")(10, "mat-select", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("ngModelChange", function AddMissingInformationComponent_section_9_Template_mat_select_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return ctx_r18.addMissingInformation.securityQuestionID = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](12, AddMissingInformationComponent_section_9_mat_option_12_Template, 2, 2, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](13, "error-messages", 18)(14, "error-message", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](15, "Please select a new security question");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](16, "section", 30)(17, "div", 35)(18, "mat-label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](19, "YOUR ANSWER");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](20, "div")(21, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("valueChange", function AddMissingInformationComponent_section_9_Template_input_valueChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return ctx_r20.addMissingInformation.securityAnswer = $event;
    })("ngModelChange", function AddMissingInformationComponent_section_9_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return ctx_r21.addMissingInformation.securityAnswer = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](23, "show-hide-input-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("showFieldChange", function AddMissingInformationComponent_section_9_Template_show_hide_input_button_showFieldChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r19);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return ctx_r22.isShowSecurityAnswer = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](24, "error-messages", 18)(25, "error-message", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](26, "Please enter a valid answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](27, "error-message", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](28, "Please enter a valid answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](29, "error-message", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](30, "Max. 20 alpha num character");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](31, "error-message", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](32, "Min. 1 alpha num character");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](11);

    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](22);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r2.cmsContent.UpdateSecurityQuestionSectionHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngModel", ctx_r2.addMissingInformation.securityQuestionID);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngForOf", ctx_r2.securityQuestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("errors", _r12.errors)("activeBeforeSubmit", _r12.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("type", ctx_r2.isShowSecurityAnswer ? "text" : "password")("value", ctx_r2.addMissingInformation.securityAnswer)("ngModel", ctx_r2.addMissingInformation.securityAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("showField", ctx_r2.isShowSecurityAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("errors", _r14.errors)("activeBeforeSubmit", _r14.touched);
  }
}

function AddMissingInformationComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "section", 29)(1, "section")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](4, "mat-divider", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](5, "section", 40)(6, "email-address", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("emailAddressChange", function AddMissingInformationComponent_section_10_Template_email_address_emailAddressChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return ctx_r23.addMissingInformation.email = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r3.cmsContent.UpdateYourEmailSectionHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("emailAddress", ctx_r3.addMissingInformation.email);
  }
}

class AddMissingInformationComponent {
  constructor(currentUser, responseErrorService, session, isInvoicedService, window, storefrontUtilityService, accountService, authChannel, addMissingInformationService, authService, suspendedAccountService, userRoles, state, coreStateNames) {
    this.currentUser = currentUser;
    this.responseErrorService = responseErrorService;
    this.session = session;
    this.isInvoicedService = isInvoicedService;
    this.window = window;
    this.storefrontUtilityService = storefrontUtilityService;
    this.accountService = accountService;
    this.authChannel = authChannel;
    this.addMissingInformationService = addMissingInformationService;
    this.authService = authService;
    this.suspendedAccountService = suspendedAccountService;
    this.userRoles = userRoles;
    this.state = state;
    this.coreStateNames = coreStateNames;
    this.addMissingInformation = {
      currentPassword: '',
      newPassword: '',
      securityAnswer: '',
      securityQuestionID: '',
      email: ''
    };
  }

  ngOnInit() {
    this.missingInformationFlags = this.addMissingInformationService.returnMissingInformation();
    this.setSecurityQuestions(); //Browser popup (if user attempts to close browser while on this page)

    this.window.addEventListener('beforeunload', $event => //Custom text is not supported by any browsers (except IE) and will not display (except IE).
    //https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
    $event.returnValue = this.cmsContent.PopupForClosingTabOrBrowserInIEOnly);
  }

  setSecurityQuestions() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const apiResponse = yield _this.accountService.getSecurityQuestions();

      if (_this.responseErrorService.isErrorFree(apiResponse)) {
        _this.securityQuestions = apiResponse.securityQuestions;
      }
    })();
  }

  saveInformation(wizardUi) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const apiRequest = {
        currentPassword: _this2.addMissingInformation.currentPassword,
        password: _this2.addMissingInformation.newPassword,
        email: _this2.addMissingInformation.email,
        securityAnswer: _this2.addMissingInformation.securityAnswer,
        securityQuestionID: _this2.addMissingInformation.securityQuestionID
      };
      const apiResponse = yield _this2.accountService.saveInformation(apiRequest);

      if (_this2.responseErrorService.isErrorFree(apiResponse)) {
        _this2.addMissingInformationService.destroyMissingInformationFlags();

        _this2.session.create(apiResponse.accountId, apiResponse.accountActivity, null, false);

        _this2.currentUserData = _this2.currentUser.getCurrentUser() || {}; //Set if account invoiced

        _this2.isInvoicedService.setAccountInvoiced(apiResponse.isInvoiced);

        _this2.currentUserData.accountStatus = apiResponse.accountActivity;
        _this2.currentUserData.acctActivity = apiResponse.accountActivity;
        _this2.currentUserData.acctId = apiResponse.accountId;
        _this2.currentUserData.alerts = apiResponse.alerts;
        _this2.currentUserData.emailIsMissing = false;
        _this2.currentUserData.errors = apiResponse.errors;
        _this2.currentUserData.firstName = apiResponse.firstName;
        _this2.currentUserData.lastName = apiResponse.lastName;
        _this2.currentUserData.passwordNeedsReset = false;
        _this2.currentUserData.securityQuestionIsMissing = false;
        _this2.currentUserData.sessionTimedOut = apiResponse.sessionTimedOut;
        _this2.currentUserData.driverLic = apiResponse.driverLic;
        _this2.currentUserData.driverLicState = apiResponse.driverLicState;
        _this2.currentUserData.companyName = apiResponse.companyName;
        yield _this2.authChannel.logIn(_this2.currentUserData); //Use wizard to allow Kiosk to handle state transitions.
        //Return here as to NOT do state.go() while in Kiosk Mode

        if (_this2.storefrontUtilityService.isRunningAsKiosk && wizardUi) {
          return wizardUi.gotoNextState();
        } //Use state.go() when NOT in Kiosk Mode


        if (_this2.authService.isAuthorized(_this2.userRoles.suspended)) {
          const firstSuspendedAccountState = yield _this2.suspendedAccountService.getFirstSuspendedAccountState();
          yield _this2.state.go(firstSuspendedAccountState);
        } else if (apiResponse.newAccountStep.accountComplete) {
          yield _this2.state.go(accountDashboard_constants__WEBPACK_IMPORTED_MODULE_1__.stateNames.Frame);
        } else {
          yield _this2.state.go(_this2.coreStateNames.newAccount);
        }
      }
    })();
  }

}

AddMissingInformationComponent.ɵfac = function AddMissingInformationComponent_Factory(t) {
  return new (t || AddMissingInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.CurrentUserService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](common_services_session_session_service__WEBPACK_IMPORTED_MODULE_4__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_3__.IsInvoicedService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](common_providers__WEBPACK_IMPORTED_MODULE_2__.WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_5__.StorefrontUtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](common_services_accountService_account_service__WEBPACK_IMPORTED_MODULE_6__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](authentication_authChannelService_authChannel_service__WEBPACK_IMPORTED_MODULE_7__.AuthChannelService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](authentication_addMissingInformationService_addMissingInformation_service__WEBPACK_IMPORTED_MODULE_8__.AddMissingInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_9__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](suspendedAccountRefresh_services_suspendedAccount_service__WEBPACK_IMPORTED_MODULE_10__.SuspendedAccountService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](constants_userRoles_constants__WEBPACK_IMPORTED_MODULE_11__.UserRoles), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_26__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](constants_stateNames_constants__WEBPACK_IMPORTED_MODULE_12__.StateNames));
};

AddMissingInformationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineComponent"]({
  type: AddMissingInformationComponent,
  selectors: [["add-missing-information-component"]],
  inputs: {
    cmsContent: "cmsContent",
    pwCmsData: "pwCmsData"
  },
  decls: 17,
  vars: 5,
  consts: [[1, "refresh-2020"], ["validation-focus", "", "name", "MissingInformationForm", "fxLayout", "column", 1, "u-spacing--widthFill"], ["MissingInformationForm", "ngForm"], ["fxFlexOffset", "20px", "fxLayout", "column"], [3, "innerHtml"], ["class", "u-spacing__sectionToSection--marginTop", 4, "ngIf"], ["class", "u-spacing__headerToSection--marginTop", 4, "ngIf"], [1, "u-spacing__buttonToField--marginTop"], [3, "main"], ["action-main", ""], ["wizardUi", ""], [1, "u-spacing__sectionToSection--marginTop"], [1, "u-spacing__divider--marginTopBottom"], ["fxLayout", "column", 3, "error-check"], ["for", "currentPassword"], ["type", "text", "id", "currentPasswordTxtBox", "name", "currentPassword", "tabindex", "2", "required", "", 3, "ngModel", "type", "ngModelChange"], ["currentPasswordInput", "ngModel"], [3, "showField", "showFieldChange"], [3, "errors", "activeBeforeSubmit"], ["rule", "notEqualTo"], ["rule", "required"], ["fxLayout", "column", 1, "u-spacing__fieldToField--marginTop", 3, "error-check"], ["for", "newPassword"], ["type", "text", "id", "newPasswordTxtBox", "name", "newPassword", "tabindex", "2", "pattern", "[A-Za-z0-9._!@#$^*&();?{}`~<>,+-]+$", "minlength", "12", "maxlength", "50", "required", "", 3, "ngModel", "type", "notEqualTo", "ngModelChange"], ["newPasswordInput", "ngModel"], [1, "password-rules"], ["rule", "minlength"], ["rule", "maxlength"], ["rule", "pattern"], [1, "u-spacing__headerToSection--marginTop"], ["fxLayout", "column", "ngClass", "labelMarginInternal"], ["fxLayout", "row", "ngClass", "labelMargin"], ["name", "securityQuestions", "id", "securityQuestions", "placeholder", "Please select security question", "required", "", 3, "ngModel", "ngModelChange"], ["SecurityQuestion", "ngModel"], [3, "value", "valueChange", 4, "ngFor", "ngForOf"], [1, "u-spacing__fieldToField--marginTop"], ["for", "Answer", "fxLayout", "row", "ngClass", "labelMargin"], ["fxLayout", "row", "id", "Answer", "name", "answer", "pattern", "^[0-9a-zA-Z?\\.,\\'\\u0022\\s]{1,20}$", "required", "", "minlength", "1", "maxlength", "20", 3, "type", "value", "ngModel", "valueChange", "ngModelChange"], ["Answer", "ngModel"], [3, "value", "valueChange"], ["fxLayout", "column", 1, "u-spacing__fieldToField--marginTop"], [3, "emailAddress", "emailAddressChange"]],
  template: function AddMissingInformationComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "main", 0)(1, "title-banner");
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "page-centered-container")(4, "form", 1, 2)(6, "card-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](7, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](8, AddMissingInformationComponent_section_8_Template, 35, 18, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](9, AddMissingInformationComponent_section_9_Template, 33, 11, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](10, AddMissingInformationComponent_section_10_Template, 7, 2, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](11, "section", 7)(12, "action-buttons", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("main", function AddMissingInformationComponent_Template_action_buttons_main_12_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r25);

        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](16);

        return ctx.saveInformation(_r4);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](13, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](14, "CONTINUE");
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](15, "wizard-ui", null, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.Title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("innerHtml", ctx.cmsContent.ShortDescription, _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.missingInformationFlags.passwordNeedsReset);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.missingInformationFlags.securityQuestionIsMissing);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.missingInformationFlags.emailIsMissing);
    }
  },
  directives: [_common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_13__.TitleBannerComponent, _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_14__.PageCenteredContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_15__.FocusDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__.DefaultLayoutDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_16__.CardContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__.DefaultFlexOffsetDirective, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__.MatDivider, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_17__.ErrorCheckDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgModel, _common_ui_form_entry_showHideInputButton_showHideInputButton_component__WEBPACK_IMPORTED_MODULE_18__.ShowHideInputButtonComponent, _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_19__.ErrorMessagesComponent, _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_20__.ErrorMessageComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.MaxLengthValidator, _validation_notEqualTo_notEqualTo_directive__WEBPACK_IMPORTED_MODULE_21__.NotEqualToDirective, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_32__.DefaultClassDirective, _angular_material_select__WEBPACK_IMPORTED_MODULE_33__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_34__.MatOption, _common_ui_form_entry_emailAddress_emailAddress_component__WEBPACK_IMPORTED_MODULE_22__.EmailAddressComponent, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_23__.ActionButtonsComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_24__.WizardComponent],
  styles: ["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\n[_nghost-%COMP%]   .password-rules[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZE1pc3NpbmdJbmZvcm1hdGlvbi5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBR1EsV0FBQTtBQUpSO0FBQ0E7RUFPUSxnQkFBQTtBQUxSO0FBRkE7RUFXUSxlQUFBO0FBTlIiLCJmaWxlIjoiYWRkTWlzc2luZ0luZm9ybWF0aW9uLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3RoZW1lcy5sZXNzJztcblxuOmhvc3Qge1xuXG4gICAgbWF0LWRpdmlkZXIge1xuICAgICAgICB3aWR0aDogQHdpZHRoLWRpdmlkZXI7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgICBtYXgtaGVpZ2h0OiA3MHB4O1xuICAgIH1cblxuICAgIC5wYXNzd29yZC1ydWxlcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 58096:
/*!**********************************************************!*\
  !*** ./src/login/claimSession/claimSession.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimSessionComponent": () => (/* binding */ ClaimSessionComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var accountDashboard_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! accountDashboard/constants */ 75888);
/* harmony import */ var common_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/providers */ 61264);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var home_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! home/constants */ 59119);
/* harmony import */ var login_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! login/constants */ 5723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/services/webStorageService/webStorage.service */ 38898);
/* harmony import */ var login_services_webApi_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! login/services/webApi.service */ 96792);
/* harmony import */ var authentication_authChannelService_authChannel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! authentication/authChannelService/authChannel.service */ 67734);
/* harmony import */ var constants_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! constants/module */ 16556);
/* harmony import */ var authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! authentication/authenticationService/authentication.service */ 44722);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var suspendedAccountRefresh_services_suspendedAccount_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! suspendedAccountRefresh/services/suspendedAccount.service */ 14717);
/* harmony import */ var authentication_addMissingInformationService_addMissingInformation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! authentication/addMissingInformationService/addMissingInformation.service */ 10402);
/* harmony import */ var common_services_ezTagAppRedirectLinkService_ezTagAppRedirectLink_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! common/services/ezTagAppRedirectLinkService/ezTagAppRedirectLink.service */ 30307);
/* harmony import */ var _common_services_fingerprintService_fingerPrintId_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/services/fingerprintService/fingerPrintId.service */ 2365);
/* harmony import */ var _common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/ui/title-banner/title-banner.component */ 38018);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../common/ui/modals/actionButtons/actionButtons.component */ 65380);































function ClaimSessionComponent_aside_21_ng_container_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Please enter a valid pin");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}

function ClaimSessionComponent_aside_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](0, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ClaimSessionComponent_aside_21_ng_container_1_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngSwitch", error_r3.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngSwitchCase", "required");
  }
}

function ClaimSessionComponent_aside_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "aside");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ClaimSessionComponent_aside_21_ng_container_1_Template, 2, 2, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](15);

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", _r0.submitted);
  }
}

class ClaimSessionComponent {
  constructor(responseErrorService, webStorage, operatingSystemSnifferService, loginWebApiService, authChannel, webStorageConst, authService, userRoles, state, suspendedAccountService, addMissingInformationService, dialogService, ezTagAppRedirectLinkService, fingerprintService, window) {
    this.responseErrorService = responseErrorService;
    this.webStorage = webStorage;
    this.operatingSystemSnifferService = operatingSystemSnifferService;
    this.loginWebApiService = loginWebApiService;
    this.authChannel = authChannel;
    this.webStorageConst = webStorageConst;
    this.authService = authService;
    this.userRoles = userRoles;
    this.state = state;
    this.suspendedAccountService = suspendedAccountService;
    this.addMissingInformationService = addMissingInformationService;
    this.dialogService = dialogService;
    this.ezTagAppRedirectLinkService = ezTagAppRedirectLinkService;
    this.fingerprintService = fingerprintService;
    this.window = window;
  }

  ngOnInit() {
    if (['ios', 'android'].indexOf(this.operatingSystemSnifferService.getOsFull()) < 0) {
      this.state.go(home_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.Frame);
      return;
    }

    if (this.authService.isAuthenticated()) {
      if (this.state.params.token) {
        this.authService.claimSessionLogOut();
      } else {
        this.authService.logout();
      }
    }

    this.webStorage.setKeyValue(this.webStorageConst.mappSessionBeingUsed, true);
    this.triggerShowExpirationModal();
  }

  triggerShowExpirationModal() {
    const expirationDate = new Date(this.state.params.expires).getTime();
    const now = new Date(Date.now()).getTime();
    const timeLeft = isNaN(expirationDate) || now >= expirationDate ? 0 : expirationDate - now;
    this.timer = setTimeout(() => this.showExpirationModal(), timeLeft);
  }

  showExpirationModal() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        cmsContent: {
          Title: _this.cmsClaimSessionExpirationModal.Title,
          AcceptBtn: _this.cmsClaimSessionExpirationModal.AcceptButton,
          PrimaryContent: _this.cmsClaimSessionExpirationModal.ShortDescription
        }
      };
      yield _this.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_3__.GenericCmsModalComponent, data);

      try {
        _this.returnToApp();
      } catch (err) {
        _this.state.go(login_constants__WEBPACK_IMPORTED_MODULE_5__.stateNames.Login);
      }
    })();
  }

  submitPinNumber(form) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!form.valid) {
        return;
      }

      const apiResponse = yield _this2.loginWebApiService.claimSession({
        claimSessionCredential: {
          token: _this2.state.params.token,
          pin: _this2.pin
        }
      });

      if (_this2.responseErrorService.isErrorFree(apiResponse)) {
        const firebaseId = apiResponse === null || apiResponse === void 0 ? void 0 : apiResponse.firebaseId;

        if (firebaseId) {
          _this2.fingerprintService.setFingerprintId(firebaseId);
        }

        const profileResponse = yield _this2.authService.profile({});

        if (_this2.responseErrorService.isErrorFree(profileResponse)) {
          yield _this2.redirect(profileResponse);
          clearTimeout(_this2.timer);
        }
      }
    })();
  }

  loginInformationIsMissing({
    passwordNeedsReset,
    emailIsMissing,
    securityQuestionIsMissing
  }) {
    return this.addMissingInformationService.isMissingInfo(passwordNeedsReset, emailIsMissing, securityQuestionIsMissing);
  }

  redirect(response) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.authChannel.logIn(response);

      if (_this3.loginInformationIsMissing(response)) {
        yield _this3.state.go(login_constants__WEBPACK_IMPORTED_MODULE_5__.stateNames.AddMissingInformation);
      } else if (_this3.authService.isAuthorized(_this3.userRoles.suspended)) {
        const suspendedResponse = yield _this3.suspendedAccountService.getFirstSuspendedAccountState();
        yield _this3.state.go(suspendedResponse);
      } else {
        yield _this3.state.go(accountDashboard_constants__WEBPACK_IMPORTED_MODULE_1__.stateNames.Frame);
      }
    })();
  }

  returnToApp() {
    const mobileRedirect = this.ezTagAppRedirectLinkService.getEzTagAppLink();

    if (mobileRedirect) {
      this.window.location.href = mobileRedirect;
    } else {
      this.state.go(login_constants__WEBPACK_IMPORTED_MODULE_5__.stateNames.Login);
    }
  }

}

ClaimSessionComponent.ɵfac = function ClaimSessionComponent_Factory(t) {
  return new (t || ClaimSessionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_common_services_webStorageService_webStorage_service__WEBPACK_IMPORTED_MODULE_7__.WebStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.OperatingSystemSnifferService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](login_services_webApi_service__WEBPACK_IMPORTED_MODULE_8__.WebApiService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](authentication_authChannelService_authChannel_service__WEBPACK_IMPORTED_MODULE_9__.AuthChannelService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](constants_module__WEBPACK_IMPORTED_MODULE_10__.WebStorageConst), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_11__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](constants_module__WEBPACK_IMPORTED_MODULE_10__.UserRoles), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_23__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](suspendedAccountRefresh_services_suspendedAccount_service__WEBPACK_IMPORTED_MODULE_12__.SuspendedAccountService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](authentication_addMissingInformationService_addMissingInformation_service__WEBPACK_IMPORTED_MODULE_13__.AddMissingInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_6__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](common_services_ezTagAppRedirectLinkService_ezTagAppRedirectLink_service__WEBPACK_IMPORTED_MODULE_14__.EzTagAppRedirectLinkService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_common_services_fingerprintService_fingerPrintId_service__WEBPACK_IMPORTED_MODULE_15__.FingerprintService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](common_providers__WEBPACK_IMPORTED_MODULE_2__.WindowRef));
};

ClaimSessionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({
  type: ClaimSessionComponent,
  selectors: [["claim-session-component"]],
  inputs: {
    cmsContent: "cmsContent",
    cmsClaimSessionExpirationModal: "cmsClaimSessionExpirationModal"
  },
  decls: 27,
  vars: 9,
  consts: [[1, "refresh-2020"], ["fxLayout", "column"], [1, "u-spacing__firstHeaderToTitle--marginTop"], [1, "u-spacing__divider--marginTopBottom"], [3, "innerHtml"], [3, "ngClass"], ["validation-focus", "", "novalidate", "", "fxLayout", "column start"], ["ClaimSessionForm", "ngForm"], ["fxLayout", "column", 3, "error-check"], ["for", "pin"], ["type", "text", "id", "pinTxtBox", "name", "pin", "tabindex", "1", "required", "", 3, "ngModel", "ngModelChange"], ["pinInput", "ngModel"], [4, "ngFor", "ngForOf"], [1, "u-spacing__buttonToField--marginTop"], [3, "main"], ["action-main", ""], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], ["class", "help-block", 4, "ngSwitchCase"], [1, "help-block"]],
  template: function ClaimSessionComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "main", 0)(1, "title-banner");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "page-centered-container")(4, "div", 1)(5, "card-container", 2)(6, "section", 1)(7, "header")(8, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](10, "mat-divider", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "section", 5)(14, "form", 6, 7)(16, "div", 8)(17, "mat-label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](18, "PLEASE ENTER PIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("ngModelChange", function ClaimSessionComponent_Template_input_ngModelChange_19_listener($event) {
        return ctx.pin = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](21, ClaimSessionComponent_aside_21_Template, 2, 1, "aside", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](22, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](23, "div", 13)(24, "action-buttons", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("main", function ClaimSessionComponent_Template_action_buttons_main_24_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r7);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](15);

        return ctx.submitPinNumber(_r0);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](25, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](26, "SUBMIT");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()()()()()();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](20);

      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.Title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx.cmsContent.PinFormSectionTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHtml", ctx.cmsContent.ShortDescription, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngClass", ctx.cmsContent.ShortDescription ? "u-spacing__sectionToSection--marginTop" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("error-check", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngModel", ctx.pin);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](22, 7, _r1.errors));
    }
  },
  directives: [_common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_16__.TitleBannerComponent, _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_17__.PageCenteredContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__.DefaultLayoutDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_18__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__.DefaultClassDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_19__.FocusDirective, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_20__.ErrorCheckDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgSwitchCase, _common_ui_modals_actionButtons_actionButtons_component__WEBPACK_IMPORTED_MODULE_21__.ActionButtonsComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.KeyValuePipe],
  styles: ["[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYWltU2Vzc2lvbi5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRVEsZ0JBQUE7QUFIUjtBQUNBO0VBTVEsV0FBQTtBQUpSIiwiZmlsZSI6ImNsYWltU2Vzc2lvbi5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBoMiB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XG4gICAgfVxuXG4gICAgbWF0LWRpdmlkZXIge1xuICAgICAgICB3aWR0aDogQHdpZHRoLWRpdmlkZXI7XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 387:
/*!********************************************!*\
  !*** ./src/login/login/login.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var accountDashboard_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! accountDashboard/constants */ 75888);
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var common_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/ui */ 50933);
/* harmony import */ var login_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! login/constants */ 5723);
/* harmony import */ var forgotPassword_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! forgotPassword/constants */ 19705);
/* harmony import */ var firstTimeLogin_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firstTimeLogin/constants */ 97064);
/* harmony import */ var shared_states__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/states */ 22118);
/* harmony import */ var account_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! account/create */ 91813);
/* harmony import */ var forgotUsername_forgotUsername_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! forgotUsername/forgotUsername.constants */ 79558);
/* harmony import */ var MFA_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! MFA/constant */ 45702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var common_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/services */ 8784);
/* harmony import */ var _storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../storefront/services/storefrontUtility.service */ 18011);
/* harmony import */ var _storefront_services_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../storefront/services/modal.service */ 20233);
/* harmony import */ var authentication_authChannelService_authChannel_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! authentication/authChannelService/authChannel.service */ 67734);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @uirouter/angular */ 7199);
/* harmony import */ var constants_stateNames_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! constants/stateNames.constants */ 40916);
/* harmony import */ var authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! authentication/authenticationService/authentication.service */ 44722);
/* harmony import */ var authentication_addMissingInformationService_addMissingInformation_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! authentication/addMissingInformationService/addMissingInformation.service */ 10402);
/* harmony import */ var authentication_authenticateRedirectService_authenticateRedirect_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! authentication/authenticateRedirectService/authenticateRedirect.service */ 61111);
/* harmony import */ var suspendedAccountRefresh_services_suspendedAccount_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! suspendedAccountRefresh/services/suspendedAccount.service */ 14717);
/* harmony import */ var constants_userRoles_constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! constants/userRoles.constants */ 32994);
/* harmony import */ var constants_routes_constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! constants/routes.constants */ 36164);
/* harmony import */ var _storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../storefront/utility/utility.component */ 10061);
/* harmony import */ var _common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../common/ui/title-banner/title-banner.component */ 38018);
/* harmony import */ var _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../common/ui/containers/page/pageCentered.component */ 68043);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/flex-layout/flex */ 76348);
/* harmony import */ var _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../common/ui/containers/card/card.component */ 25023);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _validation_focus_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../validation/focus.directive */ 39453);
/* harmony import */ var _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../validation/errorCheck.directive */ 35256);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../validation/errorMessages/errorMessages.component */ 65316);
/* harmony import */ var _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../validation/errorMessages/errorMessage.component */ 79636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/flex-layout/extended */ 97077);
/* harmony import */ var _common_ui_form_entry_showHideInputButton_showHideInputButton_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../common/ui/form-entry/showHideInputButton/showHideInputButton.component */ 27554);
/* harmony import */ var _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../common/ui/wizard/wizard.component */ 32993);









































function LoginComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](1, "div", 19)(2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵlistener"]("click", function LoginComponent_ng_container_24_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"]();
      return ctx_r7.goToForgotUsernamePage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](3, "Forgot Username?");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerEnd"]();
  }
}

function LoginComponent_section_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "section", 26)(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵlistener"]("click", function LoginComponent_section_42_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"]();
      return ctx_r9.goToFirstTimeLoginPage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](2, "First Time Login?");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](3, "mat-divider", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](4, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵlistener"]("click", function LoginComponent_section_42_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"]();
      return ctx_r11.goToSignUpPage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](5, "Sign Up For EZ TAG");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("vertical", true);
  }
}

class LoginComponent {
  constructor(responseErrorService, stringUtils, operatingSystemSnifferService, storefrontUtilityService, storefrontModalService, authChannel, state, coreStateNames, authService, addMissingInformationService, authenticateRedirectService, suspendedAccountService, userRoles, dialogService, environmentConfig, cmsItemId, currentUserService, accntService, session) {
    this.responseErrorService = responseErrorService;
    this.stringUtils = stringUtils;
    this.operatingSystemSnifferService = operatingSystemSnifferService;
    this.storefrontUtilityService = storefrontUtilityService;
    this.storefrontModalService = storefrontModalService;
    this.authChannel = authChannel;
    this.state = state;
    this.coreStateNames = coreStateNames;
    this.authService = authService;
    this.addMissingInformationService = addMissingInformationService;
    this.authenticateRedirectService = authenticateRedirectService;
    this.suspendedAccountService = suspendedAccountService;
    this.userRoles = userRoles;
    this.dialogService = dialogService;
    this.environmentConfig = environmentConfig;
    this.cmsItemId = cmsItemId;
    this.currentUserService = currentUserService;
    this.accntService = accntService;
    this.session = session;
    this.login = {
      userName: '',
      password: ''
    };
    this.isShowPassword = false;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //Set Up CMS for showAccountBlockModal().
      //Only set once (in OnInit & nowhere else) to avoid being overwritten if user attempts login from "blocked" acct more than 1 time
      const queryString = String(_this.cmsContent.Popups);
      _this.cmsContent.Popups = {
        MAPP_Login_Modal_Title: _this.stringUtils.getUrlParameter('MAPP_Login_Modal_Title', queryString),
        MAPP_Login_Browser: _this.stringUtils.getUrlParameter('MAPP_Login_Browser', queryString),
        MAPP_Login_Android: _this.stringUtils.getUrlParameter('MAPP_Login_Android', queryString),
        MAPP_Login_IOS: _this.stringUtils.getUrlParameter('MAPP_Login_IOS', queryString),
        MAPP_Login_Other: _this.stringUtils.getUrlParameter('MAPP_Login_Other', queryString)
      };
      _this.enableForgotUsername = _this.environmentConfig.twoFactorAuth.forgotUsername;

      if (_this.session.userRole === _this.userRoles.notAuthenticatedMf || _this.session.userRole === _this.userRoles.missingRequiredInformation) {
        yield _this.authService.logout();
      }
    })();
  }

  getLogin(form, wizardUi) {
    var _this2 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (form.valid) {
        try {
          const loginApiResponse = yield _this2.authService.login(_this2.login);

          if (loginApiResponse && _this2.responseErrorService.isErrorFree(loginApiResponse)) {
            yield _this2.handleLoginInformation(loginApiResponse, wizardUi);
          }
        } catch (e) {
          // Error will be 'expressAuthenticationFailure'.
          // Only throw error if in Kiosk Mode.
          if (_this2.storefrontUtilityService.isRunningAsKiosk) {
            throw e;
          }
          /* Do nothing on error */

        }
      }
    })();
  }

  handleLoginInformation(loginApiResponse, wizardUi) {
    var _this3 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const runningAsNormalWebsiteModeOrKioskFullWebsiteMode = !_this3.storefrontUtilityService.isRunningAsKiosk || _this3.storefrontUtilityService.isRunningAsKiosk && _this3.storefrontUtilityService.webStoreData.fullSiteMode;
      const isLoginEnabled = _this3.environmentConfig.twoFactorAuth.enableLogin || false;

      if (isLoginEnabled && loginApiResponse.passwordNeedsReset && !loginApiResponse.isMfaCompleted) {
        _this3.currentUserService.updateCurrentUser(loginApiResponse);

        yield _this3.state.go(MFA_constant__WEBPACK_IMPORTED_MODULE_10__.mfaStateNames.MultiFactorAuthentication, {
          loginApiResponse
        }, {
          custom: {
            isExplicitlyAllowedTransition: true
          }
        });
        return true;
      }

      const loginInformationIsMissing = _this3.addMissingInformationService.isMissingInfo(loginApiResponse.passwordNeedsReset, loginApiResponse.emailIsMissing, loginApiResponse.securityQuestionIsMissing);

      if (loginApiResponse.invalidAccountSource) {
        // They have already been logged out by the server
        _this3.showAccountBlockModal();

        return;
      }

      yield _this3.authChannel.logIn(loginApiResponse);

      if (loginInformationIsMissing) {
        _this3.addMissingInformationService.setMissingInformation(loginApiResponse.passwordNeedsReset, loginApiResponse.emailIsMissing, loginApiResponse.securityQuestionIsMissing); //Only go to next state if it is NOT in Kiosk mode or if in kiosk full website mode.
        //If we go to next state here while in Kiosk mode, it will not mark this login task as "complete"
        //Kiosk will handle the state transitions, so no need to do state.go()


        if (runningAsNormalWebsiteModeOrKioskFullWebsiteMode) {
          yield _this3.state.go(login_constants__WEBPACK_IMPORTED_MODULE_4__.stateNames.AddMissingInformation);
        }
      } else {
        _this3.responseErrorService.displayAlertsFromResponse(loginApiResponse, true); // Redirect only if it is normal website mode or if in kiosk full website mode.
        // Ignore redirects in Kiosk Mode.


        if (runningAsNormalWebsiteModeOrKioskFullWebsiteMode) {
          yield _this3.handleRedirects(loginApiResponse);
        }
      } //This lets Kiosk go to next work item by completing the login step
      //wizardUi is only used while in Kiosk Mode.


      if (_this3.storefrontUtilityService.isRunningAsKiosk && !_this3.storefrontUtilityService.webStoreData.fullSiteMode && wizardUi) {
        if (loginApiResponse.accountStatus === 'PF') {
          yield _this3.storefrontModalService.genericPostSignup(_this3.cmsItemId.storefrontCashAccountLoginModal);
        } else if (loginApiResponse.acctActivity === 'S') {
          yield _this3.storefrontModalService.showVehicalViolationSuspendedAccountMessage();
        } else {
          wizardUi.gotoNextState();
        }
      }
    })();
  }

  handleRedirects(apiAuthResponse) {
    var _this4 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.authService.isAuthorized(_this4.userRoles.suspended)) {
        yield _this4.suspendedAccountService.getFirstSuspendedAccountState().then(_this4.state.go);
      } else if (apiAuthResponse.newAccountStep.accountComplete) {
        if (_this4.authenticateRedirectService.hasSavedState) {
          yield _this4.authenticateRedirectService.redirectLoginAndDeleteSavedState();
        } else {
          const isLoginEnabled = _this4.environmentConfig.twoFactorAuth.enableLogin || false;

          if (isLoginEnabled && !apiAuthResponse.isMfaCompleted) {
            yield _this4.state.go(MFA_constant__WEBPACK_IMPORTED_MODULE_10__.mfaStateNames.MultiFactorAuthentication, {
              custom: {
                isExplicitlyAllowedTransition: true
              }
            });
          } else {
            yield _this4.state.go(accountDashboard_constants__WEBPACK_IMPORTED_MODULE_1__.stateNames.Frame);
          }
        }
      } else {
        // await this.state.go(this.coreStateNames.newAccount);
        yield _this4.createAcctRoute(apiAuthResponse);
      }
    })();
  }

  showAccountBlockModal() {
    const currentOs = this.operatingSystemSnifferService.getOsFull();
    const currentDevice = this.operatingSystemSnifferService.getDeviceFull(); // Defaults to this if the switch case falls through

    let popupMessage = this.cmsContent.Popups.MAPP_Login_Other;

    switch (currentOs) {
      case 'android':
        popupMessage = this.cmsContent.Popups.MAPP_Login_Android;
        break;

      case 'ios':
        popupMessage = this.cmsContent.Popups.MAPP_Login_IOS;
        break;

      case 'windows':
      case 'macos':
      case 'linux':
        if (currentDevice === 'Unknown') {
          popupMessage = this.cmsContent.Popups.MAPP_Login_Browser; // desktop browser

          break;
        }

    }

    const data = {
      cmsContent: {
        Title: this.cmsContent.Popups.MAPP_Login_Modal_Title,
        AcceptBtn: 'CLOSE',
        PrimaryContent: popupMessage //'Accounts created in the EZ Toll app cannot be used to log into the website'

      }
    };
    this.dialogService.openGenericModal(common_ui__WEBPACK_IMPORTED_MODULE_3__.GenericCmsModalComponent, data);
  }

  goToForgotPasswordPage() {
    var _this5 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.storefrontUtilityService.isRunningAsKiosk && !_this5.storefrontUtilityService.webStoreData.fullSiteMode) {
        const userDone = yield _this5.storefrontModalService.showGotoCsr();

        if (userDone) {
          yield _this5.state.go(_this5.coreStateNames.storefrontSurvey);
        }
      } else {
        yield _this5.state.go(_this5.environmentConfig.twoFactorAuth.enableForgotPassword ? forgotPassword_constants__WEBPACK_IMPORTED_MODULE_5__.stateNames.FindAccount : forgotPassword_constants__WEBPACK_IMPORTED_MODULE_5__.stateNames.Root);
      }
    })();
  }

  goToFirstTimeLoginPage() {
    var _this6 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const state = _this6.environmentConfig.twoFactorAuth.enableFirstTimeLogin ? firstTimeLogin_constants__WEBPACK_IMPORTED_MODULE_6__.stateNames.FindAccount : _this6.coreStateNames.setupOnlineAccessLoginInfo;
      yield _this6.state.go(state);
    })();
  }

  goToSignUpPage() {
    var _this7 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this7.environmentConfig.createAccountRefresh) {
        yield _this7.state.go(_this7.coreStateNames.createAccount);
      } else {
        yield _this7.state.go(shared_states__WEBPACK_IMPORTED_MODULE_7__.FeaturesStates.Login);
      }
    })();
  }

  createAcctRoute(apiAuthResponse) {
    var _this8 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this8.environmentConfig.createAccountRefresh) {
        yield _this8.state.go(_this8.coreStateNames.createAccount);
      } else {
        const res = (0,account_create__WEBPACK_IMPORTED_MODULE_8__.CreateAccountNavigateFunction)(apiAuthResponse);

        if (res.isLoginCompleted) {
          if (_this8.environmentConfig.enableWebCreateAccount2FA) {
            yield _this8.createAcctTwoFactor(res);
          } else {
            yield _this8.state.go(res.state, {
              userResumedCreateAcctFlow: true
            });
          }
        } else {
          yield _this8.state.go(shared_states__WEBPACK_IMPORTED_MODULE_7__.FeaturesStates.Login);
        }
      }
    })();
  }

  createAcctTwoFactor(res) {
    var _this9 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (res.twoFactor && res.twoFactor.authenticate) {
        yield _this9.state.go(res.twoFactor.routeState, {
          validationSuccessState: res.state,
          acctId: _this9.currentUserService.getCurrentUser().acctId,
          phoneNumber: (yield _this9.accntService.getContactInfo()).homePhoNbr
        });
      }
    })();
  }

  goToForgotUsernamePage() {
    var _this10 = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this10.storefrontUtilityService.isRunningAsKiosk && !_this10.storefrontUtilityService.webStoreData.fullSiteMode) {
        const userDone = yield _this10.storefrontModalService.showGotoCsr();

        if (userDone) {
          yield _this10.state.go(_this10.coreStateNames.storefrontSurvey);
        }
      } else {
        yield _this10.state.go(forgotUsername_forgotUsername_constants__WEBPACK_IMPORTED_MODULE_9__.ForgotUsernameStateNames.InputEmail);
      }
    })();
  }

}

LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_11__.ResponseErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_11__.StringUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_11__.OperatingSystemSnifferService), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](_storefront_services_storefrontUtility_service__WEBPACK_IMPORTED_MODULE_12__.StorefrontUtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](_storefront_services_modal_service__WEBPACK_IMPORTED_MODULE_13__.StorefrontModalService), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](authentication_authChannelService_authChannel_service__WEBPACK_IMPORTED_MODULE_14__.AuthChannelService), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](_uirouter_angular__WEBPACK_IMPORTED_MODULE_33__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](constants_stateNames_constants__WEBPACK_IMPORTED_MODULE_15__.StateNames), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](authentication_authenticationService_authentication_service__WEBPACK_IMPORTED_MODULE_16__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](authentication_addMissingInformationService_addMissingInformation_service__WEBPACK_IMPORTED_MODULE_17__.AddMissingInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](authentication_authenticateRedirectService_authenticateRedirect_service__WEBPACK_IMPORTED_MODULE_18__.AuthenticateRedirectService), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](suspendedAccountRefresh_services_suspendedAccount_service__WEBPACK_IMPORTED_MODULE_19__.SuspendedAccountService), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](constants_userRoles_constants__WEBPACK_IMPORTED_MODULE_20__.UserRoles), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_11__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](common_module__WEBPACK_IMPORTED_MODULE_2__.ENVIRON_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](constants_routes_constants__WEBPACK_IMPORTED_MODULE_21__.UrlPaths), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_11__.CurrentUserService), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_11__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](common_services__WEBPACK_IMPORTED_MODULE_11__.SessionService));
};

LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["login-component"]],
  inputs: {
    cmsContent: "cmsContent"
  },
  decls: 43,
  vars: 15,
  consts: [[1, "refresh-2020"], ["storefront", ""], ["fxLayout", "column"], [1, "u-spacing__firstHeaderToTitle--marginTop"], [1, "u-spacing__divider--marginTopBottom"], ["validation-focus", "", "novalidate", "", "fxLayout", "column start", "method", "post"], ["LoginForm", "ngForm"], ["fxLayout", "column", 3, "error-check"], ["for", "username"], ["type", "text", "id", "usernameTxtBox", "name", "username", "tabindex", "1", "required", "", 3, "ngModel", "ngModelChange"], ["usernameInput", "ngModel"], [3, "errors", "activeBeforeSubmit"], ["rule", "required"], [4, "ngIf"], ["fxLayout", "column", "ngClass", "spanPosition", 1, "u-spacing__fieldToField--marginTop", 3, "error-check"], ["for", "password"], ["type", "text", "id", "passwordTxtBox", "name", "password", "tabindex", "2", "required", "", 3, "ngModel", "type", "ngClass", "ngModelChange"], ["passwordInput", "ngModel"], [3, "showField", "showFieldChange"], [1, "linkSpacing"], ["id", "forgotPasswordLnk", 3, "click"], [1, "u-spacing__buttonToField--marginTop"], ["tabindex", "3", 1, "btn", "u-spacing--widthFill", 3, "click"], ["wizardUi", ""], ["id", "linksSection", "fxLayout", "row", "fxLayoutAlign", "space-around center", "class", "u-spacing__buttonToField--marginTop", "ngClass.lt-md", "lt-md", 4, "ngIf"], ["id", "forgotUsernameLnk", 3, "click"], ["id", "linksSection", "fxLayout", "row", "fxLayoutAlign", "space-around center", "ngClass.lt-md", "lt-md", 1, "u-spacing__buttonToField--marginTop"], ["id", "firstTimeLoginLnk", "ngClass.lt-md", "lt-md", 3, "click"], ["ngClass.lt-md", "lt-md", 3, "vertical"], ["id", "signUpLnk", "ngClass.lt-md", "lt-md", 3, "click"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "main", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](1, "storefront-utility", null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](3, "title-banner");
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](5, "page-centered-container")(6, "div", 2)(7, "card-container", 3)(8, "section", 2)(9, "header")(10, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](12, "mat-divider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](13, "section")(14, "form", 5, 6)(16, "div", 7)(17, "mat-label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](18, "USERNAME");
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](19, "input", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) {
        return ctx.login.userName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](21, "error-messages", 11)(22, "error-message", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](23, "Please enter your username");
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](24, LoginComponent_ng_container_24_Template, 4, 0, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](25, "div", 14)(26, "mat-label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](27, "PASSWORD");
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](28, "input", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_28_listener($event) {
        return ctx.login.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](30, "show-hide-input-button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵlistener"]("showFieldChange", function LoginComponent_Template_show_hide_input_button_showFieldChange_30_listener($event) {
        return ctx.isShowPassword = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](31, "error-messages", 11)(32, "error-message", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](33, "Please enter your password");
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](34, "div", 19)(35, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_35_listener() {
        return ctx.goToForgotPasswordPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](36, "Forgot password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](37, "div", 21)(38, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_38_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵrestoreView"](_r12);

        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵreference"](15);

        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵreference"](41);

        return ctx.getLogin(_r1, _r5);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](39, " LOGIN ");
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](40, "wizard-ui", null, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](42, LoginComponent_section_42_Template, 6, 1, "section", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵreference"](2);

      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵreference"](20);

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵreference"](29);

      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtextInterpolate1"](" ", ctx.cmsContent.Title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtextInterpolate"](ctx.cmsContent.LoginSectionTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("error-check", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngModel", ctx.login.userName);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("errors", _r2.errors)("activeBeforeSubmit", _r2.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx.enableForgotUsername);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("error-check", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngModel", ctx.login.password)("type", ctx.isShowPassword ? "text" : "password")("ngClass", ctx.isShowPassword ? "pwd-hide" : "pwd-show");
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("showField", ctx.isShowPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("errors", _r4.errors)("activeBeforeSubmit", _r4.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", !_r0.isKioskView);
    }
  },
  directives: [_storefront_utility_utility_component__WEBPACK_IMPORTED_MODULE_22__.StorefrontUtilityComponent, _common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_23__.TitleBannerComponent, _common_ui_containers_page_pageCentered_component__WEBPACK_IMPORTED_MODULE_24__.PageCenteredContainerComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_34__.DefaultLayoutDirective, _common_ui_containers_card_card_component__WEBPACK_IMPORTED_MODULE_25__.CardContainerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_35__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_36__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_36__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_36__.NgForm, _validation_focus_directive__WEBPACK_IMPORTED_MODULE_26__.FocusDirective, _validation_errorCheck_directive__WEBPACK_IMPORTED_MODULE_27__.ErrorCheckDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_36__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_36__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_36__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_36__.NgModel, _validation_errorMessages_errorMessages_component__WEBPACK_IMPORTED_MODULE_28__.ErrorMessagesComponent, _validation_errorMessages_errorMessage_component__WEBPACK_IMPORTED_MODULE_29__.ErrorMessageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_38__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_38__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_39__.DefaultClassDirective, _common_ui_form_entry_showHideInputButton_showHideInputButton_component__WEBPACK_IMPORTED_MODULE_30__.ShowHideInputButtonComponent, _common_ui_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_31__.WizardComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_34__.DefaultLayoutAlignDirective],
  styles: ["[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\n[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 65px;\n}\n[_nghost-%COMP%]   .spanPosition[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   .linkSpacing[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: 'Jost';\n}\n[_nghost-%COMP%]   #linksSection[_ngcontent-%COMP%] {\n  margin-left: 60px;\n  margin-right: 60px;\n  text-align: center;\n}\n[_nghost-%COMP%]   #linksSection.lt-md[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n[_nghost-%COMP%]   #linksSection[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 2px;\n  border-width: 2px;\n  border-color: #34353a;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n[_nghost-%COMP%]   #linksSection[_ngcontent-%COMP%]   mat-divider.lt-md[_ngcontent-%COMP%] {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n[_nghost-%COMP%]   #linksSection[_ngcontent-%COMP%]   a.lt-md[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmxlc3MiLCIuLlxcLi5cXHN0eWxlc1xcdGhlbWVcXG1peGluc1xcZm9udHMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUdRLGdCQUFBO0FBSlI7QUFDQTtFQU9RLFdBQUE7QUFMUjtBQUZBO0VBV1Esa0JBQUE7QUFOUjtBQUxBO0VBZVEsZ0JBQUE7QUFQUjtBQVJBO0VDQ0ksbUJBQUE7QURVSjtBQVhBO0VBdUJRLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVRSO0FBV1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBVFo7QUFwQkE7RUFpQ1ksWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVZaO0FBWVk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBVmhCO0FBZVk7RUFDSSxnQkFBQTtBQWJoQiIsImZpbGUiOiJsb2dpbi5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3N0eWxlcy90aGVtZXMubGVzcyc7XG5cbjpob3N0IHtcblxuICAgIGgyIHtcbiAgICAgICAgbWF4LWhlaWdodDogNzBweDtcbiAgICB9XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGgtZGl2aWRlcjtcbiAgICB9XG5cbiAgICAuc3BhblBvc2l0aW9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5saW5rU3BhY2luZyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICAgIC50LWhlYWRlci0tZm9udEZhbWlseVxuICAgIH1cblxuICAgICNsaW5rc1NlY3Rpb24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgJi5sdC1tZCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1kaXZpZGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogQHR1bmEtZ3JheTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgICAgICAgICAmLmx0LW1kIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICAmLmx0LW1kIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG5cbi50LWhlYWRlci0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtam9zdDtcbn1cblxuLnQtYm9keS0tZm9udEZhbWlseSgpIHtcbiAgICBmb250LWZhbWlseTogQGZvbnQtbW9udHNlcnJhdDtcbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 3795:
/*!*****************************!*\
  !*** ./src/login/module.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsIds": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_9__.CmsIds),
/* harmony export */   "FeatureToggles": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_9__.FeatureToggles),
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule),
/* harmony export */   "Routes": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_9__.Routes),
/* harmony export */   "StateNames": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_9__.StateNames),
/* harmony export */   "cmsIds": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_9__.cmsIds),
/* harmony export */   "featureToggles": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_9__.featureToggles),
/* harmony export */   "stateNames": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_9__.stateNames),
/* harmony export */   "urlPaths": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_9__.urlPaths)
/* harmony export */ });
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @uirouter/angular */ 99305);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 65262);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 63277);
/* harmony import */ var common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/module */ 51392);
/* harmony import */ var storefront_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! storefront/module */ 89550);
/* harmony import */ var validation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validation/module */ 26186);
/* harmony import */ var common_services_ezTagAppRedirectLinkService_ezTagAppRedirectLink_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/services/ezTagAppRedirectLinkService/ezTagAppRedirectLink.service */ 30307);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ 387);
/* harmony import */ var _addMissingInformation_addMissingInformation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addMissingInformation/addMissingInformation.component */ 80574);
/* harmony import */ var _claimSession_claimSession_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./claimSession/claimSession.component */ 58096);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 68074);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ 45046);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 23009);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 83660);
/* harmony import */ var _services_webApi_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/webApi.service */ 96792);
/* harmony import */ var login_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! login/routing */ 95173);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants */ 5723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 28596);







//components



// Refresh imports





//other





const routesWithComponents = login_routing__WEBPACK_IMPORTED_MODULE_8__.routes.map(route => {
    const componentDictionary = {
        [_constants__WEBPACK_IMPORTED_MODULE_9__.stateNames.Login]: _login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_9__.stateNames.AddMissingInformation]: _addMissingInformation_addMissingInformation_component__WEBPACK_IMPORTED_MODULE_5__.AddMissingInformationComponent,
        [_constants__WEBPACK_IMPORTED_MODULE_9__.stateNames.ClaimSession]: _claimSession_claimSession_component__WEBPACK_IMPORTED_MODULE_6__.ClaimSessionComponent,
    };
    return {
        ...route,
        component: componentDictionary[route.name]
    };
});
class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [
        { provide: _constants__WEBPACK_IMPORTED_MODULE_9__.StateNames, useValue: _constants__WEBPACK_IMPORTED_MODULE_9__.stateNames },
        common_services_ezTagAppRedirectLinkService_ezTagAppRedirectLink_service__WEBPACK_IMPORTED_MODULE_3__.EzTagAppRedirectLinkService,
        _services_webApi_service__WEBPACK_IMPORTED_MODULE_7__.WebApiService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule, storefront_module__WEBPACK_IMPORTED_MODULE_1__.StorefrontModule,
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_12__.UIRouterModule.forChild({ states: routesWithComponents }),
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__.FlexLayoutModule,
            validation_module__WEBPACK_IMPORTED_MODULE_2__.ValidationModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent,
        _addMissingInformation_addMissingInformation_component__WEBPACK_IMPORTED_MODULE_5__.AddMissingInformationComponent,
        _claimSession_claimSession_component__WEBPACK_IMPORTED_MODULE_6__.ClaimSessionComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule, storefront_module__WEBPACK_IMPORTED_MODULE_1__.StorefrontModule, _uirouter_angular__WEBPACK_IMPORTED_MODULE_12__.UIRouterModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__.FlexLayoutModule,
        validation_module__WEBPACK_IMPORTED_MODULE_2__.ValidationModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule] }); })();


/***/ }),

/***/ 96792:
/*!**********************************************!*\
  !*** ./src/login/services/webApi.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebApiService": () => (/* binding */ WebApiService)
/* harmony export */ });
/* harmony import */ var C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _common_services_httpService_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/services/httpService/http.service */ 18407);



class WebApiService {
  constructor(httpService) {
    this.httpService = httpService;
    this.baseUrl = '/api/sessions/Session';
  }

  claimSession(data) {
    var _this = this;

    return (0,C_Code_HCTRA_HCTRA_WebUi_Prod_RC_HCTRA_Web_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${_this.baseUrl}/ClaimSession`;
      const response = yield _this.httpService.post(url, data);
      return response;
    })();
  }

}

WebApiService.ɵfac = function WebApiService_Factory(t) {
  return new (t || WebApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_common_services_httpService_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService));
};

WebApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: WebApiService,
  factory: WebApiService.ɵfac
});

/***/ })

}]);
//# sourceMappingURL=795.ce54b4bf27987a15.js.map