"use strict";
(self["webpackChunkng_app"] = self["webpackChunkng_app"] || []).push([[167],{

/***/ 25167:
/*!****************************!*\
  !*** ./src/FAQs/module.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqModule": () => (/* binding */ FaqModule)
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ 63258);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ 60968);
/* harmony import */ var common_ui_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/ui/dropdown/dropdown.module */ 9091);
/* harmony import */ var common_ui_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/ui/pagination/pagination.module */ 26325);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button-toggle */ 74190);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/overlay */ 41938);
/* harmony import */ var _states_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./states-config */ 86350);
/* harmony import */ var shared_ui_display_accordion_accordion_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/ui/display/accordion/accordion.module */ 1645);
/* harmony import */ var _services_faq_shared_faq_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/faq-shared/faq-shared.service */ 41366);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @uirouter/angular */ 99305);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 28596);
/* harmony import */ var _common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/ui/title-banner/title-banner.component */ 38018);
/* harmony import */ var _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/ui/containers/page/pageFilled.component */ 95556);
/* harmony import */ var _common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/ui/containers/card/cardDash.component */ 65663);
/* harmony import */ var _common_ui_pagination_components_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/ui/pagination/components/pagination.component */ 61424);




























class FaqModule {
}
FaqModule.ɵfac = function FaqModule_Factory(t) { return new (t || FaqModule)(); };
FaqModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: FaqModule });
FaqModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [
        _services__WEBPACK_IMPORTED_MODULE_5__.FaqApiService,
        _services__WEBPACK_IMPORTED_MODULE_5__.FaqManagerService,
        _services__WEBPACK_IMPORTED_MODULE_5__.FaqFacadeService,
        _services__WEBPACK_IMPORTED_MODULE_5__.FaqStateService,
        _services__WEBPACK_IMPORTED_MODULE_5__.FaqPaginationEventService,
        _services_faq_shared_faq_shared_service__WEBPACK_IMPORTED_MODULE_10__.FaqSharedService
    ], imports: [[
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_16__.UIRouterModule.forChild({ states: _states_config__WEBPACK_IMPORTED_MODULE_8__.FaqStatesConfig }),
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
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__.OverlayModule,
            common_ui_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_7__.PaginationModule,
            common_ui_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_6__.DropdownModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__.MatButtonToggleModule,
            shared_ui_display_accordion_accordion_module__WEBPACK_IMPORTED_MODULE_9__.AccordionModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](FaqModule, { declarations: [_components__WEBPACK_IMPORTED_MODULE_4__.FaqComponent,
        _components__WEBPACK_IMPORTED_MODULE_4__.FaqSearchComponent,
        _components__WEBPACK_IMPORTED_MODULE_4__.FaqResultsComponent,
        _components__WEBPACK_IMPORTED_MODULE_4__.SearchResultsComponent,
        _components__WEBPACK_IMPORTED_MODULE_4__.TopResultsComponent,
        _components__WEBPACK_IMPORTED_MODULE_4__.FaqItemComponent], imports: [_uirouter_angular__WEBPACK_IMPORTED_MODULE_16__.UIRouterModule, common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
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
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__.OverlayModule,
        common_ui_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_7__.PaginationModule,
        common_ui_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_6__.DropdownModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__.MatButtonToggleModule,
        shared_ui_display_accordion_accordion_module__WEBPACK_IMPORTED_MODULE_9__.AccordionModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetComponentScope"](_components__WEBPACK_IMPORTED_MODULE_4__.FaqComponent, [_common_ui_title_banner_title_banner_component__WEBPACK_IMPORTED_MODULE_11__.TitleBannerComponent, _common_ui_containers_page_pageFilled_component__WEBPACK_IMPORTED_MODULE_12__.PageFilledContainerComponent, _common_ui_containers_card_cardDash_component__WEBPACK_IMPORTED_MODULE_13__.CardDashContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _components__WEBPACK_IMPORTED_MODULE_4__.FaqSearchComponent,
    _components__WEBPACK_IMPORTED_MODULE_4__.FaqResultsComponent, _common_ui_pagination_components_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent], []);


/***/ })

}]);
//# sourceMappingURL=167.976fc2afab700cd5.js.map