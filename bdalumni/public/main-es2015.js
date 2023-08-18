(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/data.service */ "./src/app/data/data.service.ts");
/* harmony import */ var _shared_lang_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/lang.service */ "./src/app/shared/lang.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _containers_layout_color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/layout/color-switcher/color-switcher.component */ "./src/app/containers/layout/color-switcher/color-switcher.component.ts");










function AppComponent_app_color_switcher_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-color-switcher");
} }
class AppComponent {
    constructor(dataService, langService, renderer) {
        this.dataService = dataService;
        this.langService = langService;
        this.renderer = renderer;
        this.isMultiColorActive = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].isMultiColorActive;
    }
    ngOnInit() {
        const docname = "Perfil del exalumno";
        if (!localStorage.getItem("email")) {
            localStorage.setItem("email", "");
        }
        this.langService.init();
        this.dataService.get_doc(docname, localStorage.getItem("email")).subscribe(data => {
            let resp = data["data"];
            _data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"].ENV_VARS.UserData = resp;
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.renderer.addClass(document.body, 'show');
        }, 1000);
        setTimeout(() => {
            this.renderer.addClass(document.body, 'default-transition');
        }, 1500);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_lang_service__WEBPACK_IMPORTED_MODULE_3__["LangService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[1, "h-100"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_color_switcher_1_Template, 1, 0, "app-color-switcher", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMultiColorActive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _containers_layout_color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_6__["ColorSwitcherComponent"]], encapsulation: 2 });
AppComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppComponent, factory: AppComponent.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html'
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _shared_lang_service__WEBPACK_IMPORTED_MODULE_3__["LangService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_views_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/views.module */ "./src/app/views/views.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/layout/layout.containers.module */ "./src/app/containers/layout/layout.containers.module.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _views_views_module__WEBPACK_IMPORTED_MODULE_4__["ViewsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_10__["LayoutContainersModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _views_views_module__WEBPACK_IMPORTED_MODULE_4__["ViewsModule"],
        _app_routing__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_10__["LayoutContainersModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _views_views_module__WEBPACK_IMPORTED_MODULE_4__["ViewsModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_10__["LayoutContainersModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot(),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase)
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./views/views.module */ "./src/app/views/views.module.ts")).then(m => m.ViewsModule) },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/constants/menu.ts":
/*!***********************************!*\
  !*** ./src/app/constants/menu.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const data = [
    {
        id: 'vien',
        icon: 'iconsminds-home',
        label: 'Inicio',
        to: '/jointec/app/vien/start'
    },
    {
        id: 'perfil',
        icon: 'iconsminds-administrator',
        label: 'Perfil',
        to: '/jointec/app/vien/perfil'
    },
    {
        id: 'ofertas',
        icon: 'iconsminds-management',
        label: 'Ofertas Laborales',
        to: '/jointec/app/vien/ofertas'
    },
    {
        id: 'eventos',
        icon: 'iconsminds-cinema',
        label: 'Eventos',
        to: '/jointec/app/vien/eventos'
    },
    {
        id: 'asesorias',
        icon: 'iconsminds-students',
        label: 'Asesorias',
        to: '/jointec/app/vien/asesorias'
    },
    {
        id: 'networking',
        icon: 'iconsminds-network',
        label: 'Networking',
        to: '/jointec/app/vien/networking'
    },
    {
        id: 'blankpage',
        icon: 'iconsminds-shop',
        label: 'Emprendedores',
        to: '/jointec/app/vien/emprendedores'
    },
    {
        id: 'enlaces',
        icon: 'iconsminds-link',
        label: 'Enlaces',
        to: '/jointec/app/vien/enlaces'
    }
];
/* harmony default export */ __webpack_exports__["default"] = (data);


/***/ }),

/***/ "./src/app/containers/layout/application-menu/application-menu.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/containers/layout/application-menu/application-menu.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ApplicationMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationMenuComponent", function() { return ApplicationMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a1) { return { "app-menu": true, "shown": a1 }; };
const _c1 = ["*"];
class ApplicationMenuComponent {
    constructor() {
        this.isOpen = false;
    }
    handleDocumentClick(event) {
        if (this.isOpen) {
            this.toggle();
        }
    }
    toggle() {
        this.isOpen = !this.isOpen;
    }
    menuClick(event) {
        event.stopPropagation();
    }
}
ApplicationMenuComponent.ɵfac = function ApplicationMenuComponent_Factory(t) { return new (t || ApplicationMenuComponent)(); };
ApplicationMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationMenuComponent, selectors: [["app-application-menu"]], hostBindings: function ApplicationMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationMenuComponent_click_HostBindingHandler($event) { return ctx.handleDocumentClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, ngContentSelectors: _c1, decls: 4, vars: 3, consts: [[3, "ngClass", "click"], ["href", "javascript:;", 1, "app-menu-button", "d-inline-block", "d-xl-none", 3, "click"], [1, "simple-icon-options"]], template: function ApplicationMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationMenuComponent_Template_div_click_0_listener($event) { return ctx.menuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationMenuComponent_Template_a_click_2_listener($event) { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.isOpen));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-application-menu',
                templateUrl: './application-menu.component.html'
            }]
    }], function () { return []; }, { handleDocumentClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/containers/layout/breadcrumb/breadcrumb.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/containers/layout/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");







const _c0 = function (a0) { return [a0]; };
function BreadcrumbComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r616 = ctx.$implicit;
    const i_r617 = ctx.index;
    const ctx_r615 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", i_r617 >= ctx_r615.pathArr.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r615.getUrl(sub_r616)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "menu." + sub_r616));
} }
class BreadcrumbComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.path = '';
        this.pathArr = [];
        this.currentRoute = '';
        this.getUrl = (sub) => {
            return '/' + this.path.split(sub)[0] + sub;
        };
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.activatedRoute), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((route) => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })).subscribe((event) => {
            this.path = this.router.url.slice(1, this.router.url.split('?')[0].length);
            const paramtersLen = Object.keys(event.snapshot.params).length;
            this.pathArr = this.path.split('/').slice(0, this.path.split('/').length - paramtersLen);
            this.currentRoute = this.pathArr[this.pathArr.length - 1];
        });
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], decls: 6, vars: 4, consts: [["aria-label", "breadcrumb", 1, "breadcrumb-container", "d-none", "d-sm-block", "d-lg-inline-block"], [1, "breadcrumb", "pt-0"], ["class", "breadcrumb-item", 3, "hidden", 4, "ngFor", "ngForOf"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "breadcrumb-item", 3, "hidden"], [3, "routerLink"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_li_2_Template, 4, 7, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pathArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "menu." + ctx.currentRoute));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumb',
                templateUrl: './breadcrumb.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/containers/layout/color-switcher/color-switcher.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/containers/layout/color-switcher/color-switcher.component.ts ***!
  \******************************************************************************/
/*! exports provided: ColorSwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSwitcherComponent", function() { return ColorSwitcherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ColorSwitcherComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r630 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorSwitcherComponent_a_5_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r630); const color_r628 = ctx.$implicit; const ctx_r629 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r629.changeColor("light." + color_r628); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r628 = ctx.$implicit;
    const ctx_r624 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("c-pointer theme-color theme-color-" + color_r628 + (ctx_r624.selectedColor === "light." + color_r628 ? " active" : ""));
} }
function ColorSwitcherComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r633 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorSwitcherComponent_a_7_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r633); const color_r631 = ctx.$implicit; const ctx_r632 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r632.changeColor("light." + color_r631); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r631 = ctx.$implicit;
    const ctx_r625 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("c-pointer theme-color theme-color-" + color_r631 + (ctx_r625.selectedColor === "light." + color_r631 ? " active" : ""));
} }
function ColorSwitcherComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r636 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorSwitcherComponent_a_11_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r636); const color_r634 = ctx.$implicit; const ctx_r635 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r635.changeColor("dark." + color_r634); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r634 = ctx.$implicit;
    const ctx_r626 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("c-pointer theme-color theme-color-" + color_r634 + (ctx_r626.selectedColor === "dark." + color_r634 ? " active" : ""));
} }
function ColorSwitcherComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r639 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorSwitcherComponent_a_13_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r639); const color_r637 = ctx.$implicit; const ctx_r638 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r638.changeColor("dark." + color_r637); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r637 = ctx.$implicit;
    const ctx_r627 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("c-pointer theme-color theme-color-" + color_r637 + (ctx_r627.selectedColor === "dark." + color_r637 ? " active" : ""));
} }
class ColorSwitcherComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.colors = ['bluenavy', 'blueyale', 'blueolympic', 'greenmoss', 'greenlime', 'purplemonster', 'orangecarrot', 'redruby', 'yellowgranola', 'greysteel'];
        this.selectedColor = localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].themeColorStorageKey) || src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].defaultColor;
        this.isOpenSwitcher = false;
        this.toggleClass = 'theme-colors';
        this.radius = localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].themeRadiusStorageKey) || 'rounded';
        this.changeRadius(this.radius);
    }
    ngOnInit() {
    }
    changeColor(color) {
        this.selectedColor = color;
        localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].themeColorStorageKey, color);
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }
    toggleSwitcher(event) {
        this.isOpenSwitcher = !(this.isOpenSwitcher);
        this.toggleClass = this.isOpenSwitcher ? 'theme-colors shown' : 'theme-colors hidden';
        event.stopPropagation();
    }
    changeRadius(radius) {
        if (radius === 'flat') {
            this.renderer.removeClass(document.body, 'rounded');
        }
        else {
            this.renderer.addClass(document.body, 'rounded');
        }
        localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].themeRadiusStorageKey, radius);
    }
    handleDocumentClick(event) {
        this.isOpenSwitcher = false;
        this.toggleClass = 'theme-colors hidden';
    }
}
ColorSwitcherComponent.ɵfac = function ColorSwitcherComponent_Factory(t) { return new (t || ColorSwitcherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ColorSwitcherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorSwitcherComponent, selectors: [["app-color-switcher"]], hostBindings: function ColorSwitcherComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorSwitcherComponent_click_HostBindingHandler($event) { return ctx.handleDocumentClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 27, vars: 9, consts: [[1, "p-4"], [1, "text-muted", "mb-2"], [1, "d-flex", "flex-row", "justify-content-between", "mb-3"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "justify-content-between", "mb-4"], [1, "d-flex", "flex-row", "justify-content-between"], [1, "custom-control", "custom-radio", "custom-control-inline"], ["type", "radio", "id", "ltrRadio", "name", "directionRadio", "value", "rounded", 1, "custom-control-input", "direction-radio", 3, "checked", "click"], ["for", "ltrRadio", 1, "custom-control-label"], ["type", "radio", "id", "rtlRadio", "name", "directionRadio", "value", "flat", 1, "custom-control-input", "direction-radio", 3, "checked", "click"], ["for", "rtlRadio", 1, "custom-control-label"], [1, "c-pointer", "theme-button", 3, "click"], [1, "simple-icon-magic-wand"], [3, "click"]], template: function ColorSwitcherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Light Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorSwitcherComponent_a_5_Template, 1, 3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ColorSwitcherComponent_a_7_Template, 1, 3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dark Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ColorSwitcherComponent_a_11_Template, 1, 3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ColorSwitcherComponent_a_13_Template, 1, 3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Border Radius");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorSwitcherComponent_Template_input_click_18_listener($event) { return ctx.changeRadius("rounded"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorSwitcherComponent_Template_input_click_22_listener($event) { return ctx.changeRadius("flat"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Flat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorSwitcherComponent_Template_a_click_25_listener($event) { return ctx.toggleSwitcher($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.toggleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors.slice(0, 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors.slice(5, 10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors.slice(0, 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors.slice(5, 10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.radius === "rounded" ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.radius === "rounded" ? false : true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorSwitcherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-color-switcher',
                templateUrl: './color-switcher.component.html',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { handleDocumentClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/containers/layout/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/containers/layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 18, vars: 0, consts: [[1, "page-footer"], [1, "footer-content"], [1, "container-fluid"], [1, "row"], [1, "col-12", "col-sm-6"], [1, "mb-0", "text-muted"], [1, "col-sm-6", "d-none", "d-sm-block"], [1, "breadcrumb", "pt-0", "pr-0", "float-right"], [1, "breadcrumb-item", "mb-0"], ["href", "javascript:;", 1, "btn-link"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tecsup 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Version Alpha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Angular 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/containers/layout/heading/heading.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/containers/layout/heading/heading.component.ts ***!
  \****************************************************************/
/*! exports provided: HeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingComponent", function() { return HeadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






class HeadingComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.currentRoute = '';
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.activatedRoute), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((route) => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })).subscribe((event) => {
            const path = this.router.url.split('?')[0];
            const paramtersLen = Object.keys(event.snapshot.params).length;
            const pathArr = path.split('/').slice(0, path.split('/').length - paramtersLen);
            this.currentRoute = pathArr[pathArr.length - 1];
        });
    }
}
HeadingComponent.ɵfac = function HeadingComponent_Factory(t) { return new (t || HeadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
HeadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadingComponent, selectors: [["app-heading"]], decls: 3, vars: 3, template: function HeadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "menu." + ctx.currentRoute));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-heading',
                templateUrl: './heading.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/containers/layout/layout.containers.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/containers/layout/layout.containers.module.ts ***!
  \***************************************************************/
/*! exports provided: LayoutContainersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutContainersModule", function() { return LayoutContainersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/containers/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/containers/layout/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topnav/topnav.component */ "./src/app/containers/layout/topnav/topnav.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./color-switcher/color-switcher.component */ "./src/app/containers/layout/color-switcher/color-switcher.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/containers/layout/footer/footer.component.ts");
/* harmony import */ var _heading_heading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./heading/heading.component */ "./src/app/containers/layout/heading/heading.component.ts");
/* harmony import */ var _application_menu_application_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./application-menu/application-menu.component */ "./src/app/containers/layout/application-menu/application-menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
















class LayoutContainersModule {
}
LayoutContainersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutContainersModule });
LayoutContainersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutContainersModule_Factory(t) { return new (t || LayoutContainersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutContainersModule, { declarations: [_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__["TopnavComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
        _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
        _color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_8__["ColorSwitcherComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _heading_heading_component__WEBPACK_IMPORTED_MODULE_11__["HeadingComponent"],
        _application_menu_application_menu_component__WEBPACK_IMPORTED_MODULE_12__["ApplicationMenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"]], exports: [_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__["TopnavComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
        _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
        _color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_8__["ColorSwitcherComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _heading_heading_component__WEBPACK_IMPORTED_MODULE_11__["HeadingComponent"],
        _application_menu_application_menu_component__WEBPACK_IMPORTED_MODULE_12__["ApplicationMenuComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutContainersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__["TopnavComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
                    _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
                    _color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_8__["ColorSwitcherComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                    _heading_heading_component__WEBPACK_IMPORTED_MODULE_11__["HeadingComponent"],
                    _application_menu_application_menu_component__WEBPACK_IMPORTED_MODULE_12__["ApplicationMenuComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                    ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(),
                    ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"].forRoot(),
                ],
                exports: [
                    _topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__["TopnavComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
                    _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
                    _color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_8__["ColorSwitcherComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                    _heading_heading_component__WEBPACK_IMPORTED_MODULE_11__["HeadingComponent"],
                    _application_menu_application_menu_component__WEBPACK_IMPORTED_MODULE_12__["ApplicationMenuComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/containers/layout/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/containers/layout/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_constants_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants/menu */ "./src/app/constants/menu.ts");
/* harmony import */ var _sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.service */ "./src/app/containers/layout/sidebar/sidebar.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");











function SidebarComponent_li_4_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r582 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r582.to, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r582.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, item_r582.label));
} }
function SidebarComponent_li_4_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r589 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_4_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r589); const item_r582 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r587 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r587.changeSelectedParentHasNoSubmenu(item_r582.id); return false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r582 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r582.to, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r582.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, item_r582.label), "");
} }
function SidebarComponent_li_4_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r593 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_4_a_3_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r593); const item_r582 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r591 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r591.changeSelectedParentHasNoSubmenu(item_r582.id); return false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r582 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r582.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r582.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, item_r582.label), "");
} }
const _c0 = function (a0) { return { "active": a0 }; };
function SidebarComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_4_a_1_Template, 4, 5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_li_4_a_2_Template, 4, 5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_li_4_a_3_Template, 4, 5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r582 = ctx.$implicit;
    const ctx_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r580.selectedParentMenu === item_r582.id && ctx_r580.viewingParentMenu === "" || ctx_r580.viewingParentMenu === item_r582.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r582.newWindow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r582.newWindow && item_r582.subs && item_r582.subs.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r582.newWindow && (!item_r582.subs || item_r582.subs && item_r582.subs.length === 0));
} }
function SidebarComponent_ul_7_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r597 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", sub_r597.to, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", sub_r597.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, sub_r597.label));
} }
const _c1 = function (a0) { return [a0]; };
function SidebarComponent_ul_7_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r597 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, sub_r597.to));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", sub_r597.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, sub_r597.label));
} }
function SidebarComponent_ul_7_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r606 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_ul_7_li_1_a_3_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r606); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r601 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r601.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r597 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, sub_r597.label));
} }
function SidebarComponent_ul_7_li_1_div_6_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deepSub_r609 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", deepSub_r609.to, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", deepSub_r609.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, deepSub_r609.label));
} }
function SidebarComponent_ul_7_li_1_div_6_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deepSub_r609 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, deepSub_r609.to));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", deepSub_r609.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, deepSub_r609.label));
} }
function SidebarComponent_ul_7_li_1_div_6_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_ul_7_li_1_div_6_li_2_a_1_Template, 5, 5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_ul_7_li_1_div_6_li_2_a_2_Template, 5, 7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deepSub_r609 = ctx.$implicit;
    const ctx_r608 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r608.currentUrl === deepSub_r609.to));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", deepSub_r609.newWindow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !deepSub_r609.newWindow && (!deepSub_r609.subs || deepSub_r609.subs.length <= 0));
} }
function SidebarComponent_ul_7_li_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_ul_7_li_1_div_6_li_2_Template, 3, 5, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r597 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sub_r597.subs);
} }
const _c2 = function (a0, a1) { return { "active": a0, "has-sub-item": a1 }; };
function SidebarComponent_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_ul_7_li_1_a_1_Template, 5, 5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_ul_7_li_1_a_2_Template, 5, 7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_ul_7_li_1_a_3_Template, 5, 3, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_ul_7_li_1_div_6_Template, 3, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r597 = ctx.$implicit;
    const ctx_r596 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c2, ctx_r596.currentUrl === sub_r597.to, sub_r597.subs && sub_r597.subs.length > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r597.newWindow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sub_r597.newWindow && (!sub_r597.subs || sub_r597.subs.length <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r597.subs && sub_r597.subs.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", false)("isAnimated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r597.subs && sub_r597.subs.length > 0);
} }
const _c3 = function (a0) { return { "d-block": a0 }; };
function SidebarComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_ul_7_li_1_Template, 7, 10, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r595 = ctx.$implicit;
    const ctx_r581 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, ctx_r581.selectedParentMenu === item_r595.id && ctx_r581.viewingParentMenu === "" || ctx_r581.viewingParentMenu === item_r595.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-parent", item_r595.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r595.subs);
} }
const _c4 = function () { return { suppressScrollX: true }; };
class SidebarComponent {
    constructor(router, sidebarService, activatedRoute) {
        this.router = router;
        this.sidebarService = sidebarService;
        this.activatedRoute = activatedRoute;
        this.menuItems = src_app_constants_menu__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.selectedParentMenu = '';
        this.viewingParentMenu = '';
        this.subscription = this.sidebarService.getSidebar().subscribe(res => {
            this.sidebar = res;
        }, err => {
            console.error(`An error occurred: ${err.message}`);
        });
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.activatedRoute), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((route) => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })).subscribe((event) => {
            const path = this.router.url.split('?')[0];
            const paramtersLen = Object.keys(event.snapshot.params).length;
            const pathArr = path.split('/').slice(0, path.split('/').length - paramtersLen);
            this.currentUrl = pathArr.join('/');
        });
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])).subscribe((event) => {
            const { containerClassnames } = this.sidebar;
            const toParentUrl = this.currentUrl.split('/').filter(x => x !== '')[1];
            if (toParentUrl !== undefined || toParentUrl !== null) {
                this.selectedParentMenu = toParentUrl.toLowerCase();
            }
            else {
                this.selectedParentMenu = 'dashboards';
            }
            this.selectMenu();
            this.toggle();
            this.sidebarService.setContainerClassnames(0, containerClassnames, this.sidebar.selectedMenuHasSubItems);
            window.scrollTo(0, 0);
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.selectMenu();
            const { containerClassnames } = this.sidebar;
            const nextClasses = this.getMenuClassesForResize(containerClassnames);
            this.sidebarService.setContainerClassnames(0, nextClasses.join(' '), this.sidebar.selectedMenuHasSubItems);
            this.isCurrentMenuHasSubItem();
        }, 100);
        setTimeout(() => {
            const path = this.router.url.split('?')[0];
            for (var i in src_app_constants_menu__WEBPACK_IMPORTED_MODULE_3__["default"]) {
                var item = src_app_constants_menu__WEBPACK_IMPORTED_MODULE_3__["default"][i];
                if (item.to === path) {
                    this.selectedParentMenu = item.id;
                }
            }
        }, 400);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    selectMenu() {
        const path = this.router.url.split('?')[0];
        for (var i in src_app_constants_menu__WEBPACK_IMPORTED_MODULE_3__["default"]) {
            var item = src_app_constants_menu__WEBPACK_IMPORTED_MODULE_3__["default"][i];
            if (item.to === path) {
                this.selectedParentMenu = item.id;
            }
        }
    }
    isCurrentMenuHasSubItem() {
        const { containerClassnames } = this.sidebar;
        const menuItem = this.menuItems.find(x => x.id === this.selectedParentMenu);
        const isCurrentMenuHasSubItem = menuItem && menuItem.subs && menuItem.subs.length > 0 ? true : false;
        if (isCurrentMenuHasSubItem !== this.sidebar.selectedMenuHasSubItems) {
            if (!isCurrentMenuHasSubItem) {
                this.sidebarService.setContainerClassnames(0, containerClassnames, false);
            }
            else {
                this.sidebarService.setContainerClassnames(0, containerClassnames, true);
            }
        }
        return isCurrentMenuHasSubItem;
    }
    changeSelectedParentHasNoSubmenu(parentMenu) {
        const { containerClassnames } = this.sidebar;
        this.selectedParentMenu = parentMenu;
        this.viewingParentMenu = parentMenu;
        this.sidebarService.changeSelectedMenuHasSubItems(false);
        this.sidebarService.setContainerClassnames(0, containerClassnames, false);
    }
    openSubMenu(event, menuItem) {
        if (event) {
            event.stopPropagation();
        }
        const { containerClassnames, menuClickCount } = this.sidebar;
        const selectedParent = menuItem.id;
        const hasSubMenu = menuItem.subs && menuItem.subs.length > 0;
        this.sidebarService.changeSelectedMenuHasSubItems(hasSubMenu);
        if (!hasSubMenu) {
            this.viewingParentMenu = selectedParent;
            this.selectedParentMenu = selectedParent;
            this.toggle();
        }
        else {
            const currentClasses = containerClassnames ?
                containerClassnames.split(' ').filter(x => x !== '') :
                '';
            if (!currentClasses.includes('menu-mobile')) {
                if (currentClasses.includes('menu-sub-hidden') &&
                    (menuClickCount === 2 || menuClickCount === 0)) {
                    this.sidebarService.setContainerClassnames(3, containerClassnames, hasSubMenu);
                }
                else if (currentClasses.includes('menu-hidden') &&
                    (menuClickCount === 1 || menuClickCount === 3)) {
                    this.sidebarService.setContainerClassnames(2, containerClassnames, hasSubMenu);
                }
                else if (currentClasses.includes('menu-default') &&
                    !currentClasses.includes('menu-sub-hidden') &&
                    (menuClickCount === 1 || menuClickCount === 3)) {
                    this.sidebarService.setContainerClassnames(0, containerClassnames, hasSubMenu);
                }
            }
            else {
                this.sidebarService.addContainerClassname('sub-show-temporary', containerClassnames);
            }
            this.viewingParentMenu = selectedParent;
        }
    }
    toggle() {
        const { containerClassnames, menuClickCount } = this.sidebar;
        const currentClasses = containerClassnames.split(' ').filter(x => x !== '');
        if (currentClasses.includes('menu-sub-hidden') &&
            menuClickCount === 3) {
            this.sidebarService.setContainerClassnames(2, containerClassnames, this.sidebar.selectedMenuHasSubItems);
        }
        else if (currentClasses.includes('menu-hidden') ||
            currentClasses.includes('menu-mobile')) {
            if (!(menuClickCount === 1 && !this.sidebar.selectedMenuHasSubItems)) {
                this.sidebarService.setContainerClassnames(0, containerClassnames, this.sidebar.selectedMenuHasSubItems);
            }
        }
    }
    getMenuClassesForResize(classes) {
        let nextClasses = classes.split(' ').filter((x) => x !== '');
        const windowWidth = window.innerWidth;
        if (windowWidth < this.sidebarService.menuHiddenBreakpoint) {
            nextClasses.push('menu-mobile');
        }
        else if (windowWidth < this.sidebarService.subHiddenBreakpoint) {
            nextClasses = nextClasses.filter((x) => x !== 'menu-mobile');
            if (nextClasses.includes('menu-default') &&
                !nextClasses.includes('menu-sub-hidden')) {
                nextClasses.push('menu-sub-hidden');
            }
        }
        else {
            nextClasses = nextClasses.filter((x) => x !== 'menu-mobile');
            if (nextClasses.includes('menu-default') &&
                nextClasses.includes('menu-sub-hidden')) {
                nextClasses = nextClasses.filter((x) => x !== 'menu-sub-hidden');
            }
        }
        return nextClasses;
    }
    handleDocumentClick(event) {
        this.viewingParentMenu = '';
        this.selectMenu();
        this.toggle();
    }
    handleWindowResize(event) {
        const path = this.router.url.split('?')[0];
        for (var i in src_app_constants_menu__WEBPACK_IMPORTED_MODULE_3__["default"]) {
            var item = src_app_constants_menu__WEBPACK_IMPORTED_MODULE_3__["default"][i];
            if (item.to === path) {
                this.selectedParentMenu = item.id;
            }
        }
    }
    menuClicked(e) {
        e.stopPropagation();
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], hostBindings: function SidebarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_click_HostBindingHandler($event) { return ctx.handleDocumentClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("resize", function SidebarComponent_resize_HostBindingHandler($event) { return ctx.handleWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 8, vars: 6, consts: [[1, "menu", 3, "click"], [1, "main-menu"], [1, "scroll", 3, "config"], [1, "list-unstyled"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "sub-menu"], ["class", "list-unstyled", 3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["rel", "noopener noreferrer", "target", "_blank", 3, "href", 4, "ngIf"], [3, "href", "click", 4, "ngIf"], [3, "routerLink", "click", 4, "ngIf"], ["rel", "noopener noreferrer", "target", "_blank", 3, "href"], [3, "href", "click"], [3, "routerLink", "click"], [1, "list-unstyled", 3, "ngClass"], ["routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["class", "rotate-arrow-icon opacity-50 c-pointer", 3, "click", 4, "ngIf"], [3, "collapse", "isAnimated"], ["collapseSub", "bs-collapse"], [4, "ngIf"], [1, "d-inline-block"], ["routerLinkActive", "active", 3, "routerLink"], [1, "rotate-arrow-icon", "opacity-50", "c-pointer", 3, "click"], [1, "simple-icon-arrow-down"], [1, "list-unstyled", "inner-level-menu"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_0_listener($event) { return ctx.menuClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "perfect-scrollbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_li_4_Template, 4, 6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "perfect-scrollbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidebarComponent_ul_7_Template, 2, 5, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["CollapseDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { handleDocumentClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }], handleWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/containers/layout/sidebar/sidebar.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/containers/layout/sidebar/sidebar.service.ts ***!
  \**************************************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




class SidebarService {
    constructor() {
        this.initialSidebar = { containerClassnames: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].defaultMenuType, menuClickCount: 0, selectedMenuHasSubItems: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].defaultMenuType === 'menu-default' };
        this.sidebar = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.initialSidebar);
        this.subHiddenBreakpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].subHiddenBreakpoint;
        this.menuHiddenBreakpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].menuHiddenBreakpoint;
        this.clickOnMobileMenu = (strCurrentClasses) => {
            const before = this.sidebar.getValue();
            const currentClasses = strCurrentClasses ? strCurrentClasses.split(' ').filter(x => x !== '' && x !== 'sub-show-temporary') : [];
            let nextClasses = '';
            if (currentClasses.includes('main-show-temporary')) {
                nextClasses = (currentClasses.filter(x => x !== 'main-show-temporary')).join(' ');
            }
            else {
                nextClasses = currentClasses.join(' ') + ' main-show-temporary';
            }
            this.sidebar.next({ containerClassnames: nextClasses, menuClickCount: 0, selectedMenuHasSubItems: before.selectedMenuHasSubItems });
        };
    }
    getSidebar() {
        return this.sidebar.asObservable();
    }
    changeVal(str) {
        const before = this.sidebar.getValue();
        this.sidebar.next({ containerClassnames: str, menuClickCount: before.menuClickCount, selectedMenuHasSubItems: before.selectedMenuHasSubItems });
    }
    setContainerClassnames(clickIndex, strCurrentClasses, selectedMenuHasSubItems) {
        const currentClasses = strCurrentClasses ? strCurrentClasses.split(' ').filter(x => x !== '') : '';
        let nextClasses = '';
        if (clickIndex !== 5) {
            if (!selectedMenuHasSubItems) {
                if (currentClasses.includes('menu-default') && (clickIndex % 4 === 0 || clickIndex % 4 === 3)) {
                    clickIndex = 1;
                }
                else {
                    clickIndex = 0;
                }
            }
        }
        if (clickIndex === 5) {
            if (currentClasses.includes('main-hidden')) {
                nextClasses = 'menu-default';
            }
            else {
                nextClasses = 'menu-default main-hidden sub-hidden';
            }
        }
        if (currentClasses.includes('menu-mobile')) {
            if (currentClasses.includes('main-hidden')) {
                nextClasses = 'menu-default';
            }
            else {
                nextClasses = 'menu-default main-hidden sub-hidden';
            }
            nextClasses += ' menu-mobile';
        }
        this.sidebar.next({ containerClassnames: nextClasses, menuClickCount: clickIndex, selectedMenuHasSubItems });
    }
    addContainerClassname(classname, strCurrentClasses) {
        const newClasses = !(strCurrentClasses.indexOf(classname) > -1) ? strCurrentClasses + ' ' + classname : strCurrentClasses;
        const before = this.sidebar.getValue();
        this.sidebar.next({ containerClassnames: newClasses, menuClickCount: before.menuClickCount, selectedMenuHasSubItems: before.selectedMenuHasSubItems });
    }
    changeDefaultClassnames(strCurrentClasses) {
        const before = this.sidebar.getValue();
        this.sidebar.next({ containerClassnames: strCurrentClasses, menuClickCount: before.menuClickCount, selectedMenuHasSubItems: before.selectedMenuHasSubItems });
    }
    changeSelectedMenuHasSubItems(hasSubMenu = true) {
        const before = this.sidebar.getValue();
        this.sidebar.next({ containerClassnames: before.containerClassnames, menuClickCount: before.menuClickCount, selectedMenuHasSubItems: hasSubMenu });
    }
}
SidebarService.ɵfac = function SidebarService_Factory(t) { return new (t || SidebarService)(); };
SidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidebarService, factory: SidebarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/containers/layout/topnav/topnav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/containers/layout/topnav/topnav.component.ts ***!
  \**************************************************************/
/*! exports provided: TopnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopnavComponent", function() { return TopnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data/data.service */ "./src/app/data/data.service.ts");
/* harmony import */ var _sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.service */ "./src/app/containers/layout/sidebar/sidebar.service.ts");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_lang_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/lang.service */ "./src/app/shared/lang.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");












function TopnavComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "perfect-scrollbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Joisse Kaycee just sent a new comment!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "09.04.2018 - 12:45");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "1 item is out of stock!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "09.04.2018 - 12:45");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "New order received! It is total $147,20.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "09.04.2018 - 12:45");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "3 items just added to wish list by a user! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "09.04.2018 - 12:45");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopnavComponent_i_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 38);
} }
function TopnavComponent_i_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 39);
} }
function TopnavComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r623 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopnavComponent_div_28_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r623); const ctx_r622 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r622.onSignOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TopnavComponent {
    constructor(dataService, sidebarService, authService, router, langService) {
        this.dataService = dataService;
        this.sidebarService = sidebarService;
        this.authService = authService;
        this.router = router;
        this.langService = langService;
        this.cur_doc = {};
        this.displayName = 'Sarah Doe';
        this.isFullScreen = false;
        this.isDarkModeActive = false;
        this.searchKey = '';
        this.menuButtonClick = (e, menuClickCount, containerClassnames) => {
            if (e) {
                e.stopPropagation();
            }
            setTimeout(() => {
                const event = document.createEvent('HTMLEvents');
                event.initEvent('resize', false, false);
                window.dispatchEvent(event);
            }, 350);
            this.sidebarService.setContainerClassnames(5, containerClassnames, this.sidebar.selectedMenuHasSubItems);
        };
        this.mobileMenuButtonClick = (event, containerClassnames) => {
            if (event) {
                event.stopPropagation();
            }
            this.sidebarService.clickOnMobileMenu(containerClassnames);
        };
        this.languages = this.langService.supportedLanguages;
        this.currentLanguage = this.langService.languageShorthand;
        this.isSingleLang = this.langService.isSingleLang;
        this.isDarkModeActive = this.getColor().indexOf('dark') > -1 ? true : false;
    }
    onDarkModeChange(event) {
        let color = this.getColor();
        if (color.indexOf('dark') > -1) {
            color = color.replace('dark', 'light');
        }
        else if (color.indexOf('light') > -1) {
            color = color.replace('light', 'dark');
        }
        localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].themeColorStorageKey, color);
        setTimeout(() => {
            window.location.reload();
        }, 200);
    }
    getColor() {
        return localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].themeColorStorageKey)
            ? localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].themeColorStorageKey)
            : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].defaultColor;
    }
    fullScreenClick() {
        this.isFullScreen = !this.isFullScreen;
        if (this.isFullScreen) {
            document.documentElement.requestFullscreen();
        }
        else {
            document.exitFullscreen();
        }
    }
    onLanguageChange(lang) {
        this.langService.language = lang.code;
        this.currentLanguage = this.langService.languageShorthand;
    }
    ngOnInit() {
        if (this.authService.user) {
            this.displayName = this.authService.user.displayName;
            const docname = "Perfil del exalumno";
            if (src_app_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"].ENV_VARS.UserData !== null) {
                this.cur_doc = src_app_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"].ENV_VARS.UserData;
            }
            else {
                this.dataService.get_doc(docname, localStorage.getItem("email")).subscribe(data => {
                    let resp = data["data"];
                    this.cur_doc = resp;
                });
            }
        }
        this.subscription = this.sidebarService.getSidebar().subscribe(res => {
            this.sidebar = res;
        }, err => {
            console.error(`An error occurred: ${err.message}`);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onSignOut() {
        this.authService.signOut().subscribe(() => {
            this.router.navigate(['/']);
        });
    }
    searchKeyUp(event) {
        if (event.key === 'Enter') {
            this.search();
        }
        else if (event.key === 'Escape') {
            const input = document.querySelector('.mobile-view');
            if (input && input.classList) {
                input.classList.remove('mobile-view');
            }
            this.searchKey = '';
        }
    }
    searchAreaClick(event) {
        event.stopPropagation();
    }
    searchClick(event) {
        if (window.innerWidth < src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].menuHiddenBreakpoint) {
            let elem = event.target;
            if (!event.target.classList.contains('search')) {
                if (event.target.parentElement.classList.contains('search')) {
                    elem = event.target.parentElement;
                }
                else if (event.target.parentElement.parentElement.classList.contains('search')) {
                    elem = event.target.parentElement.parentElement;
                }
            }
            if (elem.classList.contains('mobile-view')) {
                this.search();
                elem.classList.remove('mobile-view');
            }
            else {
                elem.classList.add('mobile-view');
            }
        }
        else {
            this.search();
        }
        event.stopPropagation();
    }
    search() {
        if (this.searchKey && this.searchKey.length > 1) {
            this.router.navigate(['/app/pages/miscellaneous/search'], { queryParams: { key: this.searchKey.toLowerCase().trim() } });
            this.searchKey = '';
        }
    }
    handleDocumentClick(event) {
        const input = document.querySelector('.mobile-view');
        if (input && input.classList) {
            input.classList.remove('mobile-view');
        }
        this.searchKey = '';
    }
}
TopnavComponent.ɵfac = function TopnavComponent_Factory(t) { return new (t || TopnavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_lang_service__WEBPACK_IMPORTED_MODULE_6__["LangService"])); };
TopnavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopnavComponent, selectors: [["app-topnav"]], hostBindings: function TopnavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopnavComponent_click_HostBindingHandler($event) { return ctx.handleDocumentClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 29, vars: 5, consts: [[1, "navbar", "fixed-top"], [1, "d-flex", "align-items-center", "navbar-left"], ["href", "javascript:;", 1, "menu-button-mobile", "d-xs-block", "d-sm-block", "d-md-none", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 26 17"], ["x", "0.5", "y", "0.5", "width", "25", "height", "1"], ["x", "0.5", "y", "7.5", "width", "25", "height", "1"], ["x", "0.5", "y", "15.5", "width", "25", "height", "1"], ["href", "#", 1, "navbar-logo"], [1, "logo", "d-none", "d-xs-block", 2, "margin-left", "50px"], [1, "logo-mobile", "d-block", "d-xs-none"], [1, "navbar-right"], [1, "header-icons", "d-inline-block", "align-middle"], [1, "d-none", "d-md-inline-block", "align-text-bottom", "mr-1"], ["tooltip", "Dark Mode", "placement", "left", 1, "custom-control", "custom-switch"], ["type", "checkbox", "id", "darkModeSwitch", 1, "custom-control-input", 3, "checked", "change"], ["for", "darkModeSwitch", 1, "custom-control-label"], [1, "position-relative", "d-inline-block"], ["dropdown", ""], ["id", "dropdown-basic", "class", "dropdown-menu dropdown-menu-right mt-3", "id", "notificationDropdown", 4, "dropdownMenu"], ["type", "button", "id", "fullScreenButton", 1, "header-icon", "btn", "btn-empty", "d-none", "d-sm-inline-block", 3, "click"], ["class", "simple-icon-size-fullscreen", 4, "ngIf"], ["class", "simple-icon-size-actual", 4, "ngIf"], ["dropdown", "", 1, "user", "d-inline-block"], ["type", "button", "dropdownToggle", "", 1, "btn", "btn-empty", "p-0"], [1, "name"], ["alt", "Profile Picture", 3, "src"], ["class", "dropdown-menu dropdown-menu-right mt-3", "role", "menu", 4, "dropdownMenu"], ["id", "dropdown-basic", "id", "notificationDropdown", 1, "dropdown-menu", "dropdown-menu-right", "mt-3"], [1, "d-flex", "flex-row", "mb-3", "pb-3", "border-bottom"], ["href", "javascript:;"], ["src", "/assets/bdalumni/img/profile-pic-l-2.jpg", "alt", "Notification Image", 1, "img-thumbnail", "list-thumbnail", "xsmall", "border-0", "rounded-circle"], [1, "pl-3"], [1, "font-weight-medium", "mb-1"], [1, "text-muted", "mb-0", "text-small"], ["src", "/assets/bdalumni/img/notification-thumb.jpg", "alt", "Notification Image", 1, "img-thumbnail", "list-thumbnail", "xsmall", "border-0", "rounded-circle"], ["src", "/assets/bdalumni/img/notification-thumb-2.jpg", "alt", "Notification Image", 1, "img-thumbnail", "list-thumbnail", "xsmall", "border-0", "rounded-circle"], [1, "d-flex", "flex-row", "mb-3", "pb-3"], ["src", "/assets/bdalumni/img/notification-thumb-3.jpg", "alt", "Notification Image", 1, "img-thumbnail", "list-thumbnail", "xsmall", "border-0", "rounded-circle"], [1, "simple-icon-size-fullscreen"], [1, "simple-icon-size-actual"], ["role", "menu", 1, "dropdown-menu", "dropdown-menu-right", "mt-3"], [1, "dropdown-item", "c-pointer", 3, "click"]], template: function TopnavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopnavComponent_Template_a_click_2_listener($event) { return ctx.mobileMenuButtonClick($event, ctx.sidebar.containerClassnames); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rect", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rect", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TopnavComponent_Template_input_change_14_listener($event) { return ctx.onDarkModeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TopnavComponent_div_18_Template, 38, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopnavComponent_Template_button_click_19_listener($event) { return ctx.fullScreenClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TopnavComponent_i_20_Template, 1, 0, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TopnavComponent_i_21_Template, 1, 0, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TopnavComponent_div_28_Template, 3, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isDarkModeActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.displayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.cur_doc["foto"] ? "https://bdalumni.evolutionsoluciones.com" + ctx.cur_doc["foto"] : "/assets/bdalumni/img/profiles/l-7.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipDirective"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDropdownDirective"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDropdownMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDropdownToggleDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopnavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topnav',
                templateUrl: './topnav.component.html'
            }]
    }], function () { return [{ type: src_app_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"] }, { type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_shared_lang_service__WEBPACK_IMPORTED_MODULE_6__["LangService"] }]; }, { handleDocumentClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/containers/ui/modals/modal-animation/modal-animation.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/containers/ui/modals/modal-animation/modal-animation.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ModalAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAnimationComponent", function() { return ModalAnimationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




function ModalAnimationComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r706 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalAnimationComponent_ng_template_9_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r706); const ctx_r705 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r705.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "modal.modal-title"));
} }
class ModalAnimationComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.config = {
            animated: true
        };
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, this.config);
    }
}
ModalAnimationComponent.ɵfac = function ModalAnimationComponent_Factory(t) { return new (t || ModalAnimationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"])); };
ModalAnimationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalAnimationComponent, selectors: [["app-modal-animation"]], decls: 11, vars: 8, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-xs", 3, "click"], ["template", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function ModalAnimationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r707 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalAnimationComponent_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r707); const _r703 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.openModal(_r703); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalAnimationComponent_Template_button_click_5_listener($event) { return ctx.config.animated = !ctx.config.animated; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ModalAnimationComponent_ng_template_9_Template, 9, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "modal.open-modal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.config.animated ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "modal.disable-animation") : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, "modal.enable-animation"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalAnimationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-animation',
                templateUrl: './modal-animation.component.html',
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/containers/ui/modals/modal-backdrop/modal-backdrop.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/containers/ui/modals/modal-backdrop/modal-backdrop.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ModalBackdropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return ModalBackdropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




function ModalBackdropComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r721 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalBackdropComponent_ng_template_14_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r721); const ctx_r720 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r720.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "modal.modal-title"));
} }
class ModalBackdropComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.config = {
            backdrop: true,
            ignoreBackdropClick: false
        };
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, this.config);
    }
}
ModalBackdropComponent.ɵfac = function ModalBackdropComponent_Factory(t) { return new (t || ModalBackdropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"])); };
ModalBackdropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalBackdropComponent, selectors: [["app-modal-backdrop"]], decls: 16, vars: 14, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-xs", 3, "click"], ["template", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function ModalBackdropComponent_Template(rf, ctx) { if (rf & 1) {
        const _r722 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalBackdropComponent_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r722); const _r718 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); return ctx.openModal(_r718); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalBackdropComponent_Template_button_click_5_listener($event) { return ctx.config.backdrop = !ctx.config.backdrop; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalBackdropComponent_Template_button_click_10_listener($event) { return ctx.config.ignoreBackdropClick = !ctx.config.ignoreBackdropClick; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ModalBackdropComponent_ng_template_14_Template, 9, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "modal.open-modal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.config.backdrop ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, "modal.disable-backdrop") : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, "modal.enable-backdrop"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", " ", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!ctx.config.ignoreBackdropClick ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 10, "modal.disable-backdrop-click") : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 12, "modal.enable-backdrop-click"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalBackdropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-backdrop',
                templateUrl: './modal-backdrop.component.html',
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/containers/ui/modals/modal-change-class/modal-change-class.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/containers/ui/modals/modal-change-class/modal-change-class.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ModalChangeClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalChangeClassComponent", function() { return ModalChangeClassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




function ModalChangeClassComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r726 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalChangeClassComponent_ng_template_3_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r726); const ctx_r725 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r725.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalChangeClassComponent_ng_template_3_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r726); const ctx_r727 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r727.setModalClass(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 1, "modal.change-class"));
} }
class ModalChangeClassComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.valueWidth = false;
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-sm' }));
    }
    setModalClass() {
        this.valueWidth = !this.valueWidth;
        const modalWidth = this.valueWidth ? 'modal-lg' : 'modal-sm';
        this.modalRef.setClass(modalWidth);
    }
}
ModalChangeClassComponent.ɵfac = function ModalChangeClassComponent_Factory(t) { return new (t || ModalChangeClassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"])); };
ModalChangeClassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalChangeClassComponent, selectors: [["app-modal-change-class"]], decls: 5, vars: 3, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["template", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-xs", 3, "click"]], template: function ModalChangeClassComponent_Template(rf, ctx) { if (rf & 1) {
        const _r728 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalChangeClassComponent_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r728); const _r723 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.openModal(_r723); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalChangeClassComponent_ng_template_3_Template, 10, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "modal.open-modal"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalChangeClassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-change-class',
                templateUrl: './modal-change-class.component.html',
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/containers/ui/modals/modal-child/modal-child.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/containers/ui/modals/modal-child/modal-child.component.ts ***!
  \***************************************************************************/
/*! exports provided: ModalChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalChildComponent", function() { return ModalChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




const _c0 = ["childModal"];
class ModalChildComponent {
    showChildModal() {
        this.childModal.show();
    }
    hideChildModal() {
        this.childModal.hide();
    }
}
ModalChildComponent.ɵfac = function ModalChildComponent_Factory(t) { return new (t || ModalChildComponent)(); };
ModalChildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalChildComponent, selectors: [["app-modal-child"]], viewQuery: function ModalChildComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.childModal = _t.first);
    } }, decls: 16, vars: 6, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-child-name", 1, "modal", "fade"], ["childModal", "bs-modal"], [1, "modal-dialog", "modal-sm"], [1, "modal-content"], [1, "modal-header"], ["id", "dialog-child-name", 1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function ModalChildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalChildComponent_Template_button_click_0_listener($event) { return ctx.showChildModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalChildComponent_Template_button_click_11_listener($event) { return ctx.hideChildModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "modal.open-modal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, "modal.modal-title"));
    } }, directives: [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalChildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-child',
                templateUrl: './modal-child.component.html',
            }]
    }], null, { childModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['childModal']
        }] }); })();


/***/ }),

/***/ "./src/app/containers/ui/modals/modal-component/modal-component.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/containers/ui/modals/modal-component/modal-component.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ModalComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponentComponent", function() { return ModalComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modal_inner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-inner-component */ "./src/app/containers/ui/modals/modal-component/modal-inner-component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





class ModalComponentComponent {
    constructor(modalService, translateService) {
        this.modalService = modalService;
        this.translateService = translateService;
    }
    openModalWithComponent() {
        const initialState = {
            list: [
                '...',
                '..'
            ],
            title: this.translateService.instant('modal.modal-title')
        };
        this.bsModalRef = this.modalService.show(_modal_inner_component__WEBPACK_IMPORTED_MODULE_1__["ModalInnerComponent"], { initialState });
        this.bsModalRef.content.closeBtnName = this.translateService.instant('modal.close');
    }
    ngOnInit() {
    }
}
ModalComponentComponent.ɵfac = function ModalComponentComponent_Factory(t) { return new (t || ModalComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
ModalComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponentComponent, selectors: [["app-modal-component"]], decls: 3, vars: 3, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function ModalComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponentComponent_Template_button_click_0_listener($event) { return ctx.openModalWithComponent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "modal.create-component"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-component',
                templateUrl: './modal-component.component.html'
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/containers/ui/modals/modal-component/modal-inner-component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/containers/ui/modals/modal-component/modal-inner-component.ts ***!
  \*******************************************************************************/
/*! exports provided: ModalInnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalInnerComponent", function() { return ModalInnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ModalInnerComponent_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r664 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r664);
} }
function ModalInnerComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalInnerComponent_ul_7_li_1_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r662 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r662.list);
} }
class ModalInnerComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.list = [];
    }
    ngOnInit() {
        this.list.push('.');
    }
}
ModalInnerComponent.ɵfac = function ModalInnerComponent_Factory(t) { return new (t || ModalInnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"])); };
ModalInnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalInnerComponent, selectors: [["app-modal-inner"]], decls: 11, vars: 3, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [4, "ngFor", "ngForOf"]], template: function ModalInnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalInnerComponent_Template_button_click_3_listener($event) { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ModalInnerComponent_ul_7_Template, 2, 1, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalInnerComponent_Template_button_click_9_listener($event) { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.closeBtnName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalInnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-inner',
                template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <ul *ngIf="list.length">
        <li *ngFor="let item of list">{{item}}</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-primary" (click)="bsModalRef.hide()">{{closeBtnName}}</button>
    </div>
  `
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/containers/ui/modals/modal-confirm/modal-confirm.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/containers/ui/modals/modal-confirm/modal-confirm.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ModalConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalConfirmComponent", function() { return ModalConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





function ModalConfirmComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pre", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r691 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r691.message);
} }
function ModalConfirmComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r695 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalConfirmComponent_ng_template_5_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r695); const ctx_r694 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r694.confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalConfirmComponent_ng_template_5_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r695); const ctx_r696 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r696.decline(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "modal.confirm-message"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "modal.yes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, "modal.no"));
} }
class ModalConfirmComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    }
    confirm() {
        this.message = 'Confirmed!';
        this.modalRef.hide();
    }
    decline() {
        this.message = 'Declined!';
        this.modalRef.hide();
    }
}
ModalConfirmComponent.ɵfac = function ModalConfirmComponent_Factory(t) { return new (t || ModalConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"])); };
ModalConfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalConfirmComponent, selectors: [["app-modal-confirm"]], decls: 7, vars: 4, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], ["template", ""], [1, "border", "p-2", "rounded"], [1, "modal-body", "text-center"], [1, "modal-title", "mb-4"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"]], template: function ModalConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        const _r697 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalConfirmComponent_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r697); const _r692 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.openModal(_r692); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalConfirmComponent_div_4_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModalConfirmComponent_ng_template_5_Template, 11, 10, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "modal.open-modal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalConfirmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-confirm',
                templateUrl: './modal-confirm.component.html',
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/containers/ui/modals/modal-custom-css/modal-custom-css.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/containers/ui/modals/modal-custom-css/modal-custom-css.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ModalCustomCssComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCustomCssComponent", function() { return ModalCustomCssComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




function ModalCustomCssComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r701 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalCustomCssComponent_ng_template_4_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r701); const ctx_r700 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r700.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "modal.modal-title"));
} }
class ModalCustomCssComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openModalWithClass(template) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
    }
}
ModalCustomCssComponent.ɵfac = function ModalCustomCssComponent_Factory(t) { return new (t || ModalCustomCssComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"])); };
ModalCustomCssComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalCustomCssComponent, selectors: [["app-modal-custom-css"]], decls: 6, vars: 3, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["template", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function ModalCustomCssComponent_Template(rf, ctx) { if (rf & 1) {
        const _r702 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalCustomCssComponent_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r702); const _r698 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.openModalWithClass(_r698); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalCustomCssComponent_ng_template_4_Template, 9, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "modal.open-modal"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalCustomCssComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-custom-css',
                templateUrl: './modal-custom-css.component.html',
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/containers/ui/modals/modal-directive/modal-directive.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/containers/ui/modals/modal-directive/modal-directive.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ModalDirectiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDirectiveComponent", function() { return ModalDirectiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




const _c0 = function () { return { backdrop: "static" }; };
class ModalDirectiveComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ModalDirectiveComponent.ɵfac = function ModalDirectiveComponent_Factory(t) { return new (t || ModalDirectiveComponent)(); };
ModalDirectiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalDirectiveComponent, selectors: [["app-modal-directive"]], decls: 16, vars: 8, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-static-name", 1, "modal", "fade", 3, "config"], ["staticModal", "bs-modal"], [1, "modal-dialog", "modal-sm"], [1, "modal-content"], [1, "modal-header"], ["id", "dialog-static-name", 1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function ModalDirectiveComponent_Template(rf, ctx) { if (rf & 1) {
        const _r730 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalDirectiveComponent_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r730); const _r729 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r729.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalDirectiveComponent_Template_button_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r730); const _r729 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r729.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "modal.open-modal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, "modal.modal-title"));
    } }, directives: [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalDirectiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-directive',
                templateUrl: './modal-directive.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/containers/ui/modals/modal-esc/modal-esc.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/containers/ui/modals/modal-esc/modal-esc.component.ts ***!
  \***********************************************************************/
/*! exports provided: ModalEscComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEscComponent", function() { return ModalEscComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




function ModalEscComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r711 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalEscComponent_ng_template_9_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r711); const ctx_r710 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r710.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "modal.modal-title"));
} }
class ModalEscComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.config = {
            keyboard: true
        };
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, this.config);
    }
}
ModalEscComponent.ɵfac = function ModalEscComponent_Factory(t) { return new (t || ModalEscComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"])); };
ModalEscComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalEscComponent, selectors: [["app-modal-esc"]], decls: 11, vars: 8, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-xs", 3, "click"], ["template", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function ModalEscComponent_Template(rf, ctx) { if (rf & 1) {
        const _r712 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalEscComponent_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r712); const _r708 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.openModal(_r708); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalEscComponent_Template_button_click_5_listener($event) { return ctx.config.keyboard = !ctx.config.keyboard; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ModalEscComponent_ng_template_9_Template, 9, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "modal.open-modal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.config.keyboard ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "modal.disable-esc") : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, "modal.enable-esc"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalEscComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-esc',
                templateUrl: './modal-esc.component.html',
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/containers/ui/modals/modal-events/modal-events.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/containers/ui/modals/modal-events/modal-events.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ModalEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEventsComponent", function() { return ModalEventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






function ModalEventsComponent_div_4_pre_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r687 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r687);
} }
function ModalEventsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModalEventsComponent_div_4_pre_2_Template, 2, 1, "pre", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r683 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r683.messages);
} }
function ModalEventsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r689 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalEventsComponent_ng_template_5_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r689); const ctx_r688 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r688.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "modal.modal-title"));
} }
class ModalEventsComponent {
    constructor(modalService, changeDetection) {
        this.modalService = modalService;
        this.changeDetection = changeDetection;
        this.subscriptions = [];
        this.messages = [];
    }
    openModal(template) {
        this.messages = [];
        const _combine = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.modalService.onShow, this.modalService.onShown, this.modalService.onHide, this.modalService.onHidden).subscribe(() => this.changeDetection.markForCheck());
        this.subscriptions.push(this.modalService.onShow.subscribe((reason) => {
            this.messages.push(`onShow event has been fired`);
        }));
        this.subscriptions.push(this.modalService.onShown.subscribe((reason) => {
            this.messages.push(`onShown event has been fired`);
        }));
        this.subscriptions.push(this.modalService.onHide.subscribe((reason) => {
            const _reason = reason ? `, dismissed by ${reason}` : '';
            this.messages.push(`onHide event has been fired${_reason}`);
        }));
        this.subscriptions.push(this.modalService.onHidden.subscribe((reason) => {
            const _reason = reason ? `, dismissed by ${reason}` : '';
            this.messages.push(`onHidden event has been fired${_reason}`);
            this.unsubscribe();
        }));
        this.subscriptions.push(_combine);
        this.modalRef = this.modalService.show(template);
    }
    unsubscribe() {
        this.subscriptions.forEach((subscription) => {
            subscription.unsubscribe();
        });
        this.subscriptions = [];
    }
}
ModalEventsComponent.ɵfac = function ModalEventsComponent_Factory(t) { return new (t || ModalEventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ModalEventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalEventsComponent, selectors: [["app-modal-events"]], decls: 7, vars: 4, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], ["template", ""], ["class", "border p-2 rounded", 4, "ngFor", "ngForOf"], [1, "border", "p-2", "rounded"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function ModalEventsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r690 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalEventsComponent_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r690); const _r684 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.openModal(_r684); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalEventsComponent_div_4_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModalEventsComponent_ng_template_5_Template, 9, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "modal.open-modal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messages.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalEventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-events',
                templateUrl: './modal-events.component.html'
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/containers/ui/modals/modal-long-content/modal-long-content.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/containers/ui/modals/modal-long-content/modal-long-content.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ModalLongContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalLongContentComponent", function() { return ModalLongContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ModalLongContentComponent_ng_template_3_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque delectus enim esse excepturi, impedit, iste magnam officia optio, quam quis quisquam saepe sint unde velit vitae! Animi in iusto ut?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalLongContentComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalLongContentComponent_ng_template_3_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r681); const ctx_r680 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r680.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ModalLongContentComponent_ng_template_3_p_7_Template, 2, 0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r677 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r677.items);
} }
class ModalLongContentComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.items = Array(15).fill(0);
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
}
ModalLongContentComponent.ɵfac = function ModalLongContentComponent_Factory(t) { return new (t || ModalLongContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"])); };
ModalLongContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalLongContentComponent, selectors: [["app-modal-long-content"]], decls: 5, vars: 0, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["template", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngFor", "ngForOf"]], template: function ModalLongContentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r682 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalLongContentComponent_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r682); const _r676 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.openModal(_r676); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Open Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalLongContentComponent_ng_template_3_Template, 8, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalLongContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-long-content',
                templateUrl: './modal-long-content.component.html',
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/containers/ui/modals/modal-nested/modal-nested.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/containers/ui/modals/modal-nested/modal-nested.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ModalNestedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalNestedComponent", function() { return ModalNestedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




function ModalNestedComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r670 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalNestedComponent_ng_template_3_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r670); const ctx_r669 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r669.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalNestedComponent_ng_template_3_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r670); const ctx_r671 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r667 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx_r671.openModal2(_r667); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "modal.first-modal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, "modal.open-second-modal"));
} }
function ModalNestedComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r673 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalNestedComponent_ng_template_5_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r673); const ctx_r672 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r672.modalRef2.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalNestedComponent_ng_template_5_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r673); const ctx_r674 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r674.closeFirstModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "modal.second-modal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, "modal.close-first-modal"));
} }
class ModalNestedComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    }
    openModal2(template) {
        this.modalRef2 = this.modalService.show(template, { class: 'second' });
    }
    closeFirstModal() {
        if (!this.modalRef) {
            return;
        }
        this.modalRef.hide();
        this.modalRef = null;
    }
    ngOnInit() {
    }
}
ModalNestedComponent.ɵfac = function ModalNestedComponent_Factory(t) { return new (t || ModalNestedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"])); };
ModalNestedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalNestedComponent, selectors: [["app-modal-nested"]], decls: 7, vars: 3, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["template", ""], ["templateNested", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function ModalNestedComponent_Template(rf, ctx) { if (rf & 1) {
        const _r675 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalNestedComponent_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r675); const _r665 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.openModal(_r665); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalNestedComponent_ng_template_3_Template, 11, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModalNestedComponent_ng_template_5_Template, 11, 6, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "modal.open-first-modal"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalNestedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-nested',
                templateUrl: './modal-nested.component.html'
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/containers/ui/modals/modal-popover-tooltip/modal-popover-tooltip.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/containers/ui/modals/modal-popover-tooltip/modal-popover-tooltip.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ModalPopoverTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPopoverTooltipComponent", function() { return ModalPopoverTooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




function ModalPopoverTooltipComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r716 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalPopoverTooltipComponent_ng_template_3_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r716); const ctx_r715 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r715.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "modal.modal-title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 6, "modal.popover"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 8, "modal.tooltip"));
} }
class ModalPopoverTooltipComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
}
ModalPopoverTooltipComponent.ɵfac = function ModalPopoverTooltipComponent_Factory(t) { return new (t || ModalPopoverTooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"])); };
ModalPopoverTooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalPopoverTooltipComponent, selectors: [["app-modal-popover-tooltip"]], decls: 5, vars: 3, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["template", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["type", "button", "popover", "Vivamus sagittis", 1, "btn", "btn-primary"], ["type", "button", "tooltip", "Vivamus sagittis", 1, "btn", "btn-primary"]], template: function ModalPopoverTooltipComponent_Template(rf, ctx) { if (rf & 1) {
        const _r717 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalPopoverTooltipComponent_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r717); const _r713 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.openModal(_r713); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalPopoverTooltipComponent_ng_template_3_Template, 17, 10, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "modal.open-modal"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalPopoverTooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-popover-tooltip',
                templateUrl: './modal-popover-tooltip.component.html',
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/containers/ui/modals/modal-sizes/modal-sizes.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/containers/ui/modals/modal-sizes/modal-sizes.component.ts ***!
  \***************************************************************************/
/*! exports provided: ModalSizesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSizesComponent", function() { return ModalSizesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




class ModalSizesComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ModalSizesComponent.ɵfac = function ModalSizesComponent_Factory(t) { return new (t || ModalSizesComponent)(); };
ModalSizesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalSizesComponent, selectors: [["app-modal-sizes"]], decls: 33, vars: 13, consts: [[1, "btn", "btn-primary", 3, "click"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-sizes-name1", 1, "modal", "fade"], ["lgModal", "bs-modal"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "dialog-sizes-name1", 1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-sizes-name2", 1, "modal", "fade"], ["smModal", "bs-modal"], [1, "modal-dialog", "modal-sm"], ["id", "dialog-sizes-name2", 1, "modal-title", "pull-left"]], template: function ModalSizesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r733 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalSizesComponent_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r733); const _r731 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r731.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalSizesComponent_Template_button_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r733); const _r731 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r731.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalSizesComponent_Template_button_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r733); const _r732 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return _r732.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalSizesComponent_Template_button_click_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r733); const _r732 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return _r732.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, "modal.launch-large-modal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", " ", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, "modal.modal-title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 9, "modal.launch-small-modal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 11, "modal.modal-title"));
    } }, directives: [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalSizesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-sizes',
                templateUrl: './modal-sizes.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/containers/ui/modals/modal-template/modal-template.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/containers/ui/modals/modal-template/modal-template.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ModalTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTemplateComponent", function() { return ModalTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




function ModalTemplateComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r660 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalTemplateComponent_ng_template_3_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r660); const ctx_r659 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r659.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "modal.modal-title"));
} }
class ModalTemplateComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
}
ModalTemplateComponent.ɵfac = function ModalTemplateComponent_Factory(t) { return new (t || ModalTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"])); };
ModalTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalTemplateComponent, selectors: [["app-modal-template"]], decls: 5, vars: 3, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["template", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function ModalTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r661 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalTemplateComponent_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r661); const _r657 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.openModal(_r657); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalTemplateComponent_ng_template_3_Template, 9, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "modal.create-template"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-template',
                templateUrl: './modal-template.component.html',
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/containers/ui/modals/ui.modals.containers.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/containers/ui/modals/ui.modals.containers.module.ts ***!
  \*********************************************************************/
/*! exports provided: UiModalsContainersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModalsContainersModule", function() { return UiModalsContainersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _modal_template_modal_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-template/modal-template.component */ "./src/app/containers/ui/modals/modal-template/modal-template.component.ts");
/* harmony import */ var _modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-component/modal-component.component */ "./src/app/containers/ui/modals/modal-component/modal-component.component.ts");
/* harmony import */ var _modal_nested_modal_nested_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-nested/modal-nested.component */ "./src/app/containers/ui/modals/modal-nested/modal-nested.component.ts");
/* harmony import */ var _modal_long_content_modal_long_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-long-content/modal-long-content.component */ "./src/app/containers/ui/modals/modal-long-content/modal-long-content.component.ts");
/* harmony import */ var _modal_events_modal_events_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-events/modal-events.component */ "./src/app/containers/ui/modals/modal-events/modal-events.component.ts");
/* harmony import */ var _modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal-confirm/modal-confirm.component */ "./src/app/containers/ui/modals/modal-confirm/modal-confirm.component.ts");
/* harmony import */ var _modal_custom_css_modal_custom_css_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal-custom-css/modal-custom-css.component */ "./src/app/containers/ui/modals/modal-custom-css/modal-custom-css.component.ts");
/* harmony import */ var _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal-animation/modal-animation.component */ "./src/app/containers/ui/modals/modal-animation/modal-animation.component.ts");
/* harmony import */ var _modal_esc_modal_esc_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal-esc/modal-esc.component */ "./src/app/containers/ui/modals/modal-esc/modal-esc.component.ts");
/* harmony import */ var _modal_popover_tooltip_modal_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal-popover-tooltip/modal-popover-tooltip.component */ "./src/app/containers/ui/modals/modal-popover-tooltip/modal-popover-tooltip.component.ts");
/* harmony import */ var _modal_backdrop_modal_backdrop_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal-backdrop/modal-backdrop.component */ "./src/app/containers/ui/modals/modal-backdrop/modal-backdrop.component.ts");
/* harmony import */ var _modal_change_class_modal_change_class_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal-change-class/modal-change-class.component */ "./src/app/containers/ui/modals/modal-change-class/modal-change-class.component.ts");
/* harmony import */ var _modal_directive_modal_directive_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal-directive/modal-directive.component */ "./src/app/containers/ui/modals/modal-directive/modal-directive.component.ts");
/* harmony import */ var _modal_sizes_modal_sizes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modal-sizes/modal-sizes.component */ "./src/app/containers/ui/modals/modal-sizes/modal-sizes.component.ts");
/* harmony import */ var _modal_child_modal_child_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modal-child/modal-child.component */ "./src/app/containers/ui/modals/modal-child/modal-child.component.ts");
/* harmony import */ var _modal_component_modal_inner_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modal-component/modal-inner-component */ "./src/app/containers/ui/modals/modal-component/modal-inner-component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");





















class UiModalsContainersModule {
}
UiModalsContainersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UiModalsContainersModule });
UiModalsContainersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UiModalsContainersModule_Factory(t) { return new (t || UiModalsContainersModule)(); }, providers: [], imports: [[src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_18__["ModalModule"].forRoot()]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiModalsContainersModule, { declarations: [_modal_template_modal_template_component__WEBPACK_IMPORTED_MODULE_2__["ModalTemplateComponent"],
        _modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponentComponent"],
        _modal_nested_modal_nested_component__WEBPACK_IMPORTED_MODULE_4__["ModalNestedComponent"],
        _modal_long_content_modal_long_content_component__WEBPACK_IMPORTED_MODULE_5__["ModalLongContentComponent"],
        _modal_events_modal_events_component__WEBPACK_IMPORTED_MODULE_6__["ModalEventsComponent"],
        _modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ModalConfirmComponent"],
        _modal_custom_css_modal_custom_css_component__WEBPACK_IMPORTED_MODULE_8__["ModalCustomCssComponent"],
        _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_9__["ModalAnimationComponent"],
        _modal_esc_modal_esc_component__WEBPACK_IMPORTED_MODULE_10__["ModalEscComponent"],
        _modal_popover_tooltip_modal_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_11__["ModalPopoverTooltipComponent"],
        _modal_backdrop_modal_backdrop_component__WEBPACK_IMPORTED_MODULE_12__["ModalBackdropComponent"],
        _modal_change_class_modal_change_class_component__WEBPACK_IMPORTED_MODULE_13__["ModalChangeClassComponent"],
        _modal_directive_modal_directive_component__WEBPACK_IMPORTED_MODULE_14__["ModalDirectiveComponent"],
        _modal_sizes_modal_sizes_component__WEBPACK_IMPORTED_MODULE_15__["ModalSizesComponent"],
        _modal_child_modal_child_component__WEBPACK_IMPORTED_MODULE_16__["ModalChildComponent"],
        _modal_component_modal_inner_component__WEBPACK_IMPORTED_MODULE_17__["ModalInnerComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_18__["ModalModule"]], exports: [_modal_template_modal_template_component__WEBPACK_IMPORTED_MODULE_2__["ModalTemplateComponent"],
        _modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponentComponent"],
        _modal_nested_modal_nested_component__WEBPACK_IMPORTED_MODULE_4__["ModalNestedComponent"],
        _modal_long_content_modal_long_content_component__WEBPACK_IMPORTED_MODULE_5__["ModalLongContentComponent"],
        _modal_events_modal_events_component__WEBPACK_IMPORTED_MODULE_6__["ModalEventsComponent"],
        _modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ModalConfirmComponent"],
        _modal_custom_css_modal_custom_css_component__WEBPACK_IMPORTED_MODULE_8__["ModalCustomCssComponent"],
        _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_9__["ModalAnimationComponent"],
        _modal_esc_modal_esc_component__WEBPACK_IMPORTED_MODULE_10__["ModalEscComponent"],
        _modal_popover_tooltip_modal_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_11__["ModalPopoverTooltipComponent"],
        _modal_backdrop_modal_backdrop_component__WEBPACK_IMPORTED_MODULE_12__["ModalBackdropComponent"],
        _modal_change_class_modal_change_class_component__WEBPACK_IMPORTED_MODULE_13__["ModalChangeClassComponent"],
        _modal_directive_modal_directive_component__WEBPACK_IMPORTED_MODULE_14__["ModalDirectiveComponent"],
        _modal_sizes_modal_sizes_component__WEBPACK_IMPORTED_MODULE_15__["ModalSizesComponent"],
        _modal_child_modal_child_component__WEBPACK_IMPORTED_MODULE_16__["ModalChildComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiModalsContainersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _modal_template_modal_template_component__WEBPACK_IMPORTED_MODULE_2__["ModalTemplateComponent"],
                    _modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponentComponent"],
                    _modal_nested_modal_nested_component__WEBPACK_IMPORTED_MODULE_4__["ModalNestedComponent"],
                    _modal_long_content_modal_long_content_component__WEBPACK_IMPORTED_MODULE_5__["ModalLongContentComponent"],
                    _modal_events_modal_events_component__WEBPACK_IMPORTED_MODULE_6__["ModalEventsComponent"],
                    _modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ModalConfirmComponent"],
                    _modal_custom_css_modal_custom_css_component__WEBPACK_IMPORTED_MODULE_8__["ModalCustomCssComponent"],
                    _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_9__["ModalAnimationComponent"],
                    _modal_esc_modal_esc_component__WEBPACK_IMPORTED_MODULE_10__["ModalEscComponent"],
                    _modal_popover_tooltip_modal_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_11__["ModalPopoverTooltipComponent"],
                    _modal_backdrop_modal_backdrop_component__WEBPACK_IMPORTED_MODULE_12__["ModalBackdropComponent"],
                    _modal_change_class_modal_change_class_component__WEBPACK_IMPORTED_MODULE_13__["ModalChangeClassComponent"],
                    _modal_directive_modal_directive_component__WEBPACK_IMPORTED_MODULE_14__["ModalDirectiveComponent"],
                    _modal_sizes_modal_sizes_component__WEBPACK_IMPORTED_MODULE_15__["ModalSizesComponent"],
                    _modal_child_modal_child_component__WEBPACK_IMPORTED_MODULE_16__["ModalChildComponent"],
                    _modal_component_modal_inner_component__WEBPACK_IMPORTED_MODULE_17__["ModalInnerComponent"]
                ],
                imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_18__["ModalModule"].forRoot()],
                providers: [],
                entryComponents: [_modal_component_modal_inner_component__WEBPACK_IMPORTED_MODULE_17__["ModalInnerComponent"]],
                exports: [
                    _modal_template_modal_template_component__WEBPACK_IMPORTED_MODULE_2__["ModalTemplateComponent"],
                    _modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponentComponent"],
                    _modal_nested_modal_nested_component__WEBPACK_IMPORTED_MODULE_4__["ModalNestedComponent"],
                    _modal_long_content_modal_long_content_component__WEBPACK_IMPORTED_MODULE_5__["ModalLongContentComponent"],
                    _modal_events_modal_events_component__WEBPACK_IMPORTED_MODULE_6__["ModalEventsComponent"],
                    _modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ModalConfirmComponent"],
                    _modal_custom_css_modal_custom_css_component__WEBPACK_IMPORTED_MODULE_8__["ModalCustomCssComponent"],
                    _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_9__["ModalAnimationComponent"],
                    _modal_esc_modal_esc_component__WEBPACK_IMPORTED_MODULE_10__["ModalEscComponent"],
                    _modal_popover_tooltip_modal_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_11__["ModalPopoverTooltipComponent"],
                    _modal_backdrop_modal_backdrop_component__WEBPACK_IMPORTED_MODULE_12__["ModalBackdropComponent"],
                    _modal_change_class_modal_change_class_component__WEBPACK_IMPORTED_MODULE_13__["ModalChangeClassComponent"],
                    _modal_directive_modal_directive_component__WEBPACK_IMPORTED_MODULE_14__["ModalDirectiveComponent"],
                    _modal_sizes_modal_sizes_component__WEBPACK_IMPORTED_MODULE_15__["ModalSizesComponent"],
                    _modal_child_modal_child_component__WEBPACK_IMPORTED_MODULE_16__["ModalChildComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/data/data.service.ts":
/*!**************************************!*\
  !*** ./src/app/data/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _fields_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fields/form */ "./src/app/data/fields/form.ts");
/* harmony import */ var _fields_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fields/table */ "./src/app/data/fields/table.ts");






class DataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.REST_JWT = "Basic MTk3YWNiNmNkNjQwOGU3OjYwYjNhZWQ2ZmU0YWZkZg==";
        this.REST_API_SERVER = "https://bdalumni.evolutionsoluciones.com/api/method/bdalumni.api.docField?docname=Perfil%20del%20exalumno";
        this.REST_API_PATH = "https://bdalumni.evolutionsoluciones.com/api/method/bdalumni.api.docField?docname=";
        this.REST_API_TABLE = "https://bdalumni.evolutionsoluciones.com/api/method/bdalumni.api.docTable?docname=";
        this.REST_API_SEARCH = "https://bdalumni.evolutionsoluciones.com/api/method/bdalumni.api.search?docname=";
        this.REST_API_RESURCE = "https://bdalumni.evolutionsoluciones.com/api/resource/";
        this.REST_API_METHOD = "https://bdalumni.evolutionsoluciones.com/api/method/";
        this.AddSection = {
            name: "t001",
            creation: "2022-06-24 11:15:19.263955",
            modified: "2022-07-15 12:48:38.570107",
            modified_by: "Administrator",
            owner: "Administrator",
            docstatus: 0,
            parent: "Perfil del exalumno",
            parentfield: "fields",
            parenttype: "DocType",
            idx: 1,
            fieldname: "temporal",
            label: "",
            oldfieldname: null,
            fieldtype: "Section Break",
            oldfieldtype: null,
            options: null,
            search_index: 0,
            hidden: 0,
            set_only_once: 0,
            allow_in_quick_entry: 0,
            print_hide: 0,
            report_hide: 0,
            reqd: 0,
            bold: 0,
            in_global_search: 0,
            collapsible: 0,
            unique: 0,
            no_copy: 0,
            allow_on_submit: 0,
            show_preview_popup: 0,
            trigger: null,
            collapsible_depends_on: null,
            mandatory_depends_on: null,
            read_only_depends_on: null,
            depends_on: null,
            permlevel: 0,
            ignore_user_permissions: 0,
            width: null,
            print_width: null,
            columns: 0,
            default: null,
            description: null,
            in_list_view: 0,
            fetch_if_empty: 0,
            in_filter: 0,
            remember_last_selected_value: 0,
            ignore_xss_filter: 0,
            print_hide_if_no_value: 0,
            allow_bulk_edit: 0,
            in_standard_filter: 0,
            in_preview: 0,
            read_only: 0,
            precision: "",
            length: 0,
            translatable: 0,
            hide_border: 0,
            hide_days: 0,
            hide_seconds: 0,
            non_negative: 0,
            fetch_from: null,
        };
    }
    renderDoc(resp, arrays) {
        let response = { docname: "", fields: {}, tables: {}, JsonPost: {} };
        let doc_name = "";
        if (resp["name"]) {
            doc_name = resp["name"];
        }
        for (let key in resp) {
            if (Array.isArray(resp[key]) === false) {
                let el = document.getElementById(key);
                if (el !== null) {
                    if (el.nodeName === "INPUT" || el.nodeName === "SELECT") {
                        el.value = resp[key];
                    }
                }
                response.fields[key] = resp[key];
            }
            else {
                let tables = this.addTablesData(key, resp[key], arrays);
                response.tables[key] = tables["Table"];
                response.JsonPost[key] = tables["Json"];
            }
        }
        response.docname = doc_name;
        return response;
    }
    addTablesData(fieldname, table, arrays) {
        var tabledata = arrays[fieldname];
        var tablesData = [];
        let kvpairs = [];
        let kvpairs2 = [];
        let tableform = {};
        let jsonPostData = table;
        for (var r = 0; r < table.length; r++) {
            var row = table[r];
            kvpairs = [];
            for (var i = 0; i < tabledata.length; i++) {
                var e = tabledata[i];
                let kv = { fieldname: e.fieldname, name: row[e.fieldname], req: e.reqd, in_list_view: e.in_list_view };
                tableform[e.fieldname] = row[e.fieldname];
                kvpairs.push(kv);
            }
            for (var fieldkey in row) {
                var fieldtable = row[fieldkey];
                if (tableform[fieldkey] === undefined) {
                    let kv = { fieldname: fieldkey, name: fieldtable, req: 0, in_list_view: "0" };
                    kvpairs.push(kv);
                }
            }
            if (tablesData === undefined) {
                tablesData = [];
            }
            tablesData.push(kvpairs);
        }
        return { Table: tablesData, Json: jsonPostData };
    }
    renderTableData(tablename, temp1) {
        setTimeout(() => {
            var fieldtables = {};
            for (var i = 0; i < temp1.length; i++) {
                fieldtables[temp1[i].fieldname] = temp1[i].name;
            }
            document.getElementById(`table_row_name`).value = fieldtables["name"];
            document.getElementById(`table_row_idx`).value = fieldtables["idx"];
            for (var key in fieldtables) {
                if (document.querySelector(`#table_${tablename} #${key}`) !== null) {
                    document.querySelector(`#table_${tablename} #${key}`).value = fieldtables[key];
                }
            }
        }, 300);
    }
    get_idx_table(temp1) {
        var fieldtables = {};
        for (var i = 0; i < temp1.length; i++) {
            fieldtables[temp1[i].fieldname] = temp1[i].name;
        }
        return fieldtables["idx"];
    }
    sendGetRequest() {
        return this.httpClient.get(this.REST_API_SERVER);
    }
    getFields(docname) {
        return this.httpClient.get(this.REST_API_PATH + docname);
    }
    getLocalFields(docname) {
        return _fields_form__WEBPACK_IMPORTED_MODULE_2__["default"][docname];
    }
    getLocalTables(docname) {
        return _fields_table__WEBPACK_IMPORTED_MODULE_3__["default"][docname];
    }
    getTables(docname) {
        return this.httpClient.get(this.REST_API_TABLE + docname);
    }
    getSearch(docname, search_value) {
        return this.httpClient.get(this.REST_API_SEARCH + docname + "&searchvalue=" + search_value);
    }
    getDocFiles(doctype, docname) {
        const cabecera = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Authorization': this.REST_JWT
        });
        const rest_url = `${this.REST_API_RESURCE}File?fields=["*"]&filters=[["attached_to_name","=","${docname}"],["attached_to_doctype","=","${doctype}"]]`;
        return this.httpClient.get(rest_url, { headers: cabecera });
    }
    UploadFile(file, folder = "/", doctype = "none", docname = "none", method = "none") {
        const cabecera = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Authorization': this.REST_JWT
        });
        let form_data = new FormData();
        if (file.file_obj) {
            form_data.append('file', file.file_obj, file.name);
        }
        form_data.append('is_private', (file.private.toString()));
        form_data.append('folder', folder);
        if (file.file_url) {
            form_data.append('file_url', (file.file_url).toString());
        }
        if (doctype !== "none" && docname !== "none") {
            form_data.append('doctype', doctype);
            form_data.append('docname', docname);
        }
        if (method !== "none") {
            form_data.append('method', method);
        }
        return this.httpClient.post(`${this.REST_API_METHOD}upload_file`, form_data, { headers: cabecera });
    }
    getListData(docname, docFields) {
        const cabecera = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': this.REST_JWT
        });
        let fields = ["name"];
        for (const key in docFields) {
            const element = docFields[key];
            fields.push(element.fieldname);
        }
        return this.httpClient.get(`${this.REST_API_RESURCE}${docname}?fields=${JSON.stringify(fields)}`, { headers: cabecera });
    }
    get_doc(doctype, docname) {
        const cabecera = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': this.REST_JWT
        });
        return this.httpClient.get(`${this.REST_API_RESURCE}${doctype}/${docname}`, { headers: cabecera });
    }
    save_doc(doctype, doc) {
        const cabecera = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': this.REST_JWT
        });
        return this.httpClient.put(`${this.REST_API_RESURCE}${doctype}/${doc.name}`, doc, { headers: cabecera });
    }
    insert_doc(doctype, doc) {
        const cabecera = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': this.REST_JWT
        });
        return this.httpClient.post(`${this.REST_API_RESURCE}${doctype}`, doc, { headers: cabecera });
    }
    delete_doc(doctype, name) {
        const cabecera = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': this.REST_JWT
        });
        if (name === undefined) {
            return this.httpClient.delete(`${this.REST_API_RESURCE}${doctype}`, { headers: cabecera });
        }
        else {
            return this.httpClient.delete(`${this.REST_API_RESURCE}${doctype}/${name}`, { headers: cabecera });
        }
    }
    get_list(doctype, fields, filters) {
        const cabecera = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': this.REST_JWT
        });
        if (filters === undefined) {
            return this.httpClient.get(`${this.REST_API_RESURCE}${doctype}?fields=${JSON.stringify(fields)}`, { headers: cabecera });
        }
        else {
            return this.httpClient.get(`${this.REST_API_RESURCE}${doctype}?fields=${JSON.stringify(fields)}&filters=${JSON.stringify(filters)}`, { headers: cabecera });
        }
    }
    get_list_name_limit(doctype, fields, limit) {
        const cabecera = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': this.REST_JWT
        });
        return this.httpClient.get(`${this.REST_API_RESURCE}${doctype}?fields=${JSON.stringify(fields)}&limit=${limit}`, { headers: cabecera });
    }
}
DataService.ENV_VARS = {
    UserData: null,
    headerToken: ""
};
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/data/fields/doc_fields/Certificaciones.ts":
/*!***********************************************************!*\
  !*** ./src/app/data/fields/doc_fields/Certificaciones.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({ "message": [{ "name": "81ff03ac55", "creation": "2022-07-15 12:37:56.162985", "modified": "2022-07-15 12:37:56.162985", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Certificaciones", "parentfield": "fields", "parenttype": "DocType", "idx": 1, "fieldname": "logo", "label": "Logo", "oldfieldname": null, "fieldtype": "Attach Image", "oldfieldtype": null, "options": null, "search_index": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": "", "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "fetch_from": null }, { "name": "e3585fc2e5", "creation": "2022-07-15 12:37:56.162985", "modified": "2022-07-15 12:37:56.162985", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Certificaciones", "parentfield": "fields", "parenttype": "DocType", "idx": 2, "fieldname": "nombre", "label": "Centro de formaci\u00f3n |Instituci\u00f3n Educativa", "oldfieldname": null, "fieldtype": "Data", "oldfieldtype": null, "options": null, "search_index": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 1, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": "", "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "fetch_from": null }, { "name": "d7eea069e5", "creation": "2022-07-15 12:37:56.162985", "modified": "2022-07-15 12:37:56.162985", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Certificaciones", "parentfield": "fields", "parenttype": "DocType", "idx": 3, "fieldname": "certificado", "label": "Certificaci\u00f3n | Licencias", "oldfieldname": null, "fieldtype": "Data", "oldfieldtype": null, "options": null, "search_index": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 1, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": "", "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "fetch_from": null }, { "name": "881094c1f7", "creation": "2022-07-15 12:37:56.162985", "modified": "2022-07-15 12:37:56.162985", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Certificaciones", "parentfield": "fields", "parenttype": "DocType", "idx": 4, "fieldname": "url_del_certificado", "label": "Url del certificado", "oldfieldname": null, "fieldtype": "Data", "oldfieldtype": null, "options": null, "search_index": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": "", "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "fetch_from": null }, { "name": "dd34e5f151", "creation": "2022-07-15 12:37:56.162985", "modified": "2022-07-15 12:37:56.162985", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Certificaciones", "parentfield": "fields", "parenttype": "DocType", "idx": 5, "fieldname": "pdf_del_certificado", "label": "PDF del certificado", "oldfieldname": null, "fieldtype": "Attach", "oldfieldtype": null, "options": null, "search_index": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": "", "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "fetch_from": null }] });


/***/ }),

/***/ "./src/app/data/fields/doc_fields/Experiencia_laboral.ts":
/*!***************************************************************!*\
  !*** ./src/app/data/fields/doc_fields/Experiencia_laboral.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    message: [
        {
            name: "6d8b2688d2",
            creation: "2022-08-16 14:37:20.080726",
            modified: "2022-12-05 21:42:47.528274",
            modified_by: "Administrator",
            owner: "Administrator",
            docstatus: 0,
            parent: "Experiencia laboral",
            parentfield: "fields",
            parenttype: "DocType",
            idx: 1,
            fieldname: "logo_de_la_empresa",
            label: "Logo de la empresa",
            oldfieldname: null,
            fieldtype: "Attach Image",
            oldfieldtype: null,
            options: null,
            search_index: 0,
            show_dashboard: 0,
            hidden: 0,
            set_only_once: 0,
            allow_in_quick_entry: 0,
            print_hide: 0,
            report_hide: 0,
            reqd: 0,
            bold: 0,
            in_global_search: 0,
            collapsible: 0,
            unique: 0,
            no_copy: 0,
            allow_on_submit: 0,
            show_preview_popup: 0,
            trigger: null,
            collapsible_depends_on: null,
            mandatory_depends_on: null,
            read_only_depends_on: null,
            depends_on: null,
            permlevel: 0,
            ignore_user_permissions: 0,
            width: null,
            print_width: null,
            columns: 0,
            default: null,
            description: null,
            in_list_view: 0,
            fetch_if_empty: 0,
            in_filter: 0,
            remember_last_selected_value: 0,
            ignore_xss_filter: 0,
            print_hide_if_no_value: 0,
            allow_bulk_edit: 0,
            in_standard_filter: 0,
            in_preview: 0,
            read_only: 0,
            precision: null,
            max_height: null,
            length: 0,
            translatable: 0,
            hide_border: 0,
            hide_days: 0,
            hide_seconds: 0,
            non_negative: 0,
            is_virtual: 0,
            fetch_from: null,
        },
        {
            name: "17f9aee88b",
            creation: "2022-08-16 14:37:20.080726",
            modified: "2022-12-05 21:42:47.528274",
            modified_by: "Administrator",
            owner: "Administrator",
            docstatus: 0,
            parent: "Experiencia laboral",
            parentfield: "fields",
            parenttype: "DocType",
            idx: 2,
            fieldname: "nombre_de_la_empresa",
            label: "Empresa",
            oldfieldname: null,
            fieldtype: "Data",
            oldfieldtype: null,
            options: null,
            search_index: 0,
            show_dashboard: 0,
            hidden: 0,
            set_only_once: 0,
            allow_in_quick_entry: 0,
            print_hide: 0,
            report_hide: 0,
            reqd: 1,
            bold: 0,
            in_global_search: 0,
            collapsible: 0,
            unique: 0,
            no_copy: 0,
            allow_on_submit: 0,
            show_preview_popup: 0,
            trigger: null,
            collapsible_depends_on: null,
            mandatory_depends_on: null,
            read_only_depends_on: null,
            depends_on: null,
            permlevel: 0,
            ignore_user_permissions: 0,
            width: null,
            print_width: null,
            columns: 0,
            default: null,
            description: null,
            in_list_view: 1,
            fetch_if_empty: 0,
            in_filter: 0,
            remember_last_selected_value: 0,
            ignore_xss_filter: 0,
            print_hide_if_no_value: 0,
            allow_bulk_edit: 0,
            in_standard_filter: 0,
            in_preview: 0,
            read_only: 0,
            precision: null,
            max_height: null,
            length: 0,
            translatable: 0,
            hide_border: 0,
            hide_days: 0,
            hide_seconds: 0,
            non_negative: 0,
            is_virtual: 0,
            fetch_from: null,
        },
        {
            name: "26889ae46d",
            creation: "2022-08-16 14:37:20.080726",
            modified: "2022-12-05 21:42:47.528274",
            modified_by: "Administrator",
            owner: "Administrator",
            docstatus: 0,
            parent: "Experiencia laboral",
            parentfield: "fields",
            parenttype: "DocType",
            idx: 3,
            fieldname: "desde",
            label: "Inicio de labores en la empresa",
            oldfieldname: null,
            fieldtype: "Date",
            oldfieldtype: null,
            options: null,
            search_index: 0,
            show_dashboard: 0,
            hidden: 0,
            set_only_once: 0,
            allow_in_quick_entry: 0,
            print_hide: 0,
            report_hide: 0,
            reqd: 1,
            bold: 0,
            in_global_search: 0,
            collapsible: 0,
            unique: 0,
            no_copy: 0,
            allow_on_submit: 0,
            show_preview_popup: 0,
            trigger: null,
            collapsible_depends_on: null,
            mandatory_depends_on: null,
            read_only_depends_on: null,
            depends_on: null,
            permlevel: 0,
            ignore_user_permissions: 0,
            width: null,
            print_width: null,
            columns: 0,
            default: null,
            description: null,
            in_list_view: 1,
            fetch_if_empty: 0,
            in_filter: 0,
            remember_last_selected_value: 0,
            ignore_xss_filter: 0,
            print_hide_if_no_value: 0,
            allow_bulk_edit: 0,
            in_standard_filter: 0,
            in_preview: 0,
            read_only: 0,
            precision: null,
            max_height: null,
            length: 0,
            translatable: 0,
            hide_border: 0,
            hide_days: 0,
            hide_seconds: 0,
            non_negative: 0,
            is_virtual: 0,
            fetch_from: null,
        },
        {
            name: "c31c0e0daf",
            creation: "2022-08-16 14:37:20.080726",
            modified: "2022-12-05 21:42:47.528274",
            modified_by: "Administrator",
            owner: "Administrator",
            docstatus: 0,
            parent: "Experiencia laboral",
            parentfield: "fields",
            parenttype: "DocType",
            idx: 4,
            fieldname: "hasta",
            label: "Fin de labores en la empresa",
            oldfieldname: null,
            fieldtype: "Date",
            oldfieldtype: null,
            options: null,
            search_index: 0,
            show_dashboard: 0,
            hidden: 0,
            set_only_once: 0,
            allow_in_quick_entry: 0,
            print_hide: 0,
            report_hide: 0,
            reqd: 0,
            bold: 0,
            in_global_search: 0,
            collapsible: 0,
            unique: 0,
            no_copy: 0,
            allow_on_submit: 0,
            show_preview_popup: 0,
            trigger: null,
            collapsible_depends_on: null,
            mandatory_depends_on: null,
            read_only_depends_on: null,
            depends_on: null,
            permlevel: 0,
            ignore_user_permissions: 0,
            width: null,
            print_width: null,
            columns: 0,
            default: null,
            description: null,
            in_list_view: 1,
            fetch_if_empty: 0,
            in_filter: 0,
            remember_last_selected_value: 0,
            ignore_xss_filter: 0,
            print_hide_if_no_value: 0,
            allow_bulk_edit: 0,
            in_standard_filter: 0,
            in_preview: 0,
            read_only: 0,
            precision: null,
            max_height: null,
            length: 0,
            translatable: 0,
            hide_border: 0,
            hide_days: 0,
            hide_seconds: 0,
            non_negative: 0,
            is_virtual: 0,
            fetch_from: null,
        },
        {
            name: "9bde394897",
            creation: "2022-08-16 14:37:20.080726",
            modified: "2022-12-05 21:42:47.528274",
            modified_by: "Administrator",
            owner: "Administrator",
            docstatus: 0,
            parent: "Experiencia laboral",
            parentfield: "fields",
            parenttype: "DocType",
            idx: 5,
            fieldname: "cargo",
            label: "Cargo",
            oldfieldname: null,
            fieldtype: "Data",
            oldfieldtype: null,
            options: null,
            search_index: 0,
            show_dashboard: 0,
            hidden: 0,
            set_only_once: 0,
            allow_in_quick_entry: 0,
            print_hide: 0,
            report_hide: 0,
            reqd: 1,
            bold: 0,
            in_global_search: 0,
            collapsible: 0,
            unique: 0,
            no_copy: 0,
            allow_on_submit: 0,
            show_preview_popup: 0,
            trigger: null,
            collapsible_depends_on: null,
            mandatory_depends_on: null,
            read_only_depends_on: null,
            depends_on: null,
            permlevel: 0,
            ignore_user_permissions: 0,
            width: null,
            print_width: null,
            columns: 0,
            default: null,
            description: null,
            in_list_view: 1,
            fetch_if_empty: 0,
            in_filter: 0,
            remember_last_selected_value: 0,
            ignore_xss_filter: 0,
            print_hide_if_no_value: 0,
            allow_bulk_edit: 0,
            in_standard_filter: 0,
            in_preview: 0,
            read_only: 0,
            precision: null,
            max_height: null,
            length: 0,
            translatable: 0,
            hide_border: 0,
            hide_days: 0,
            hide_seconds: 0,
            non_negative: 0,
            is_virtual: 0,
            fetch_from: null,
        },
        {
            name: "fe908efdc6",
            creation: "2022-08-16 14:37:20.080726",
            modified: "2022-12-05 21:42:47.528274",
            modified_by: "Administrator",
            owner: "Administrator",
            docstatus: 0,
            parent: "Experiencia laboral",
            parentfield: "fields",
            parenttype: "DocType",
            idx: 6,
            fieldname: "funciones",
            label: "Funciones",
            oldfieldname: null,
            fieldtype: "Small Text",
            oldfieldtype: null,
            options: null,
            search_index: 0,
            show_dashboard: 0,
            hidden: 0,
            set_only_once: 0,
            allow_in_quick_entry: 0,
            print_hide: 0,
            report_hide: 0,
            reqd: 0,
            bold: 0,
            in_global_search: 0,
            collapsible: 0,
            unique: 0,
            no_copy: 0,
            allow_on_submit: 0,
            show_preview_popup: 0,
            trigger: null,
            collapsible_depends_on: null,
            mandatory_depends_on: null,
            read_only_depends_on: null,
            depends_on: null,
            permlevel: 0,
            ignore_user_permissions: 0,
            width: null,
            print_width: null,
            columns: 0,
            default: null,
            description: null,
            in_list_view: 0,
            fetch_if_empty: 0,
            in_filter: 0,
            remember_last_selected_value: 0,
            ignore_xss_filter: 0,
            print_hide_if_no_value: 0,
            allow_bulk_edit: 0,
            in_standard_filter: 0,
            in_preview: 0,
            read_only: 0,
            precision: "",
            max_height: null,
            length: 0,
            translatable: 0,
            hide_border: 0,
            hide_days: 0,
            hide_seconds: 0,
            non_negative: 0,
            is_virtual: 0,
            fetch_from: null,
        },
        {
            name: "25f9c6fded",
            creation: "2022-08-16 14:37:20.080726",
            modified: "2022-12-05 21:42:47.528274",
            modified_by: "Administrator",
            owner: "Administrator",
            docstatus: 0,
            parent: "Experiencia laboral",
            parentfield: "fields",
            parenttype: "DocType",
            idx: 7,
            fieldname: "logros",
            label: "Logros",
            oldfieldname: null,
            fieldtype: "Small Text",
            oldfieldtype: null,
            options: null,
            search_index: 0,
            show_dashboard: 0,
            hidden: 0,
            set_only_once: 0,
            allow_in_quick_entry: 0,
            print_hide: 0,
            report_hide: 0,
            reqd: 0,
            bold: 0,
            in_global_search: 0,
            collapsible: 0,
            unique: 0,
            no_copy: 0,
            allow_on_submit: 0,
            show_preview_popup: 0,
            trigger: null,
            collapsible_depends_on: null,
            mandatory_depends_on: null,
            read_only_depends_on: null,
            depends_on: null,
            permlevel: 0,
            ignore_user_permissions: 0,
            width: null,
            print_width: null,
            columns: 0,
            default: null,
            description: null,
            in_list_view: 0,
            fetch_if_empty: 0,
            in_filter: 0,
            remember_last_selected_value: 0,
            ignore_xss_filter: 0,
            print_hide_if_no_value: 0,
            allow_bulk_edit: 0,
            in_standard_filter: 0,
            in_preview: 0,
            read_only: 0,
            precision: "",
            max_height: null,
            length: 0,
            translatable: 0,
            hide_border: 0,
            hide_days: 0,
            hide_seconds: 0,
            non_negative: 0,
            is_virtual: 0,
            fetch_from: null,
        },
    ],
});


/***/ }),

/***/ "./src/app/data/fields/doc_fields/Habilidades.ts":
/*!*******************************************************!*\
  !*** ./src/app/data/fields/doc_fields/Habilidades.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({ "message": [{ "name": "5332c2e875", "creation": "2022-07-12 11:26:45.320317", "modified": "2022-07-12 11:26:45.320317", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Habilidades", "parentfield": "fields", "parenttype": "DocType", "idx": 1, "fieldname": "nombre", "label": "Nombre", "oldfieldname": null, "fieldtype": "Data", "oldfieldtype": null, "options": null, "search_index": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 1, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": "", "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "fetch_from": null }, { "name": "637c193dd0", "creation": "2022-07-12 11:26:45.320317", "modified": "2022-07-12 11:26:45.320317", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Habilidades", "parentfield": "fields", "parenttype": "DocType", "idx": 2, "fieldname": "nivel", "label": "Nivel", "oldfieldname": null, "fieldtype": "Rating", "oldfieldtype": null, "options": null, "search_index": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 1, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": "", "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "fetch_from": null }, { "name": "9b5bd96768", "creation": "2022-07-12 11:26:45.320317", "modified": "2022-07-12 11:26:45.320317", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Habilidades", "parentfield": "fields", "parenttype": "DocType", "idx": 3, "fieldname": "certificado", "label": "Certificado", "oldfieldname": null, "fieldtype": "Data", "oldfieldtype": null, "options": null, "search_index": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 1, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": "", "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "fetch_from": null }, { "name": "f0f879a599", "creation": "2022-07-12 11:26:45.320317", "modified": "2022-07-12 11:26:45.320317", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Habilidades", "parentfield": "fields", "parenttype": "DocType", "idx": 4, "fieldname": "certificado_adjunto", "label": "Certificado adjunto", "oldfieldname": null, "fieldtype": "Attach", "oldfieldtype": null, "options": null, "search_index": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": "", "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "fetch_from": null }] });


/***/ }),

/***/ "./src/app/data/fields/doc_fields/Idiomas.ts":
/*!***************************************************!*\
  !*** ./src/app/data/fields/doc_fields/Idiomas.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({ "message": [{ "name": "e942b6084b", "creation": "2022-07-15 12:41:53.242224", "modified": "2022-07-15 12:43:24.253165", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Idiomas", "parentfield": "fields", "parenttype": "DocType", "idx": 1, "fieldname": "idioma", "label": "Idioma", "oldfieldname": null, "fieldtype": "Select", "oldfieldtype": null, "options": "Espa\u00f1ol\nIngles\nAlem\u00e1n\nFranc\u00e9s\nItaliano\nCheco\nCoreano\nChino\nJapon\u00e9s\nInd\u00fa\nRuso\nHoland\u00e9s\nNoruego\nIslam\nPortugu\u00e9s", "search_index": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 1, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": "", "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "fetch_from": null }, { "name": "1561d2c05e", "creation": "2022-07-15 12:41:53.242224", "modified": "2022-07-15 12:43:24.253165", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Idiomas", "parentfield": "fields", "parenttype": "DocType", "idx": 2, "fieldname": "nivel", "label": "Nivel", "oldfieldname": null, "fieldtype": "Select", "oldfieldtype": null, "options": "B\u00e1sico\nIntermedio\nAvanzado", "search_index": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 1, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": "", "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "fetch_from": null }] });


/***/ }),

/***/ "./src/app/data/fields/doc_fields/Perfil_del_exalumno_Educacion_Superior.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/data/fields/doc_fields/Perfil_del_exalumno_Educacion_Superior.ts ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    message: [
        {
            name: "1c4fbcb9b9",
            creation: "2022-07-12 11:10:21.346082",
            modified: "2022-12-12 17:23:23.980046",
            modified_by: "Administrator",
            owner: "Administrator",
            docstatus: 0,
            parent: "Perfil del exalumno Educacion Superior",
            parentfield: "fields",
            parenttype: "DocType",
            idx: 1,
            fieldname: "logo",
            label: "Logo",
            oldfieldname: null,
            fieldtype: "Attach Image",
            oldfieldtype: null,
            options: null,
            search_index: 0,
            show_dashboard: 0,
            hidden: 0,
            set_only_once: 0,
            allow_in_quick_entry: 0,
            print_hide: 0,
            report_hide: 0,
            reqd: 0,
            bold: 0,
            in_global_search: 0,
            collapsible: 0,
            unique: 0,
            no_copy: 0,
            allow_on_submit: 0,
            show_preview_popup: 0,
            trigger: null,
            collapsible_depends_on: null,
            mandatory_depends_on: null,
            read_only_depends_on: null,
            depends_on: null,
            permlevel: 0,
            ignore_user_permissions: 0,
            width: null,
            print_width: null,
            columns: 0,
            default: null,
            description: null,
            in_list_view: 0,
            fetch_if_empty: 0,
            in_filter: 0,
            remember_last_selected_value: 0,
            ignore_xss_filter: 0,
            print_hide_if_no_value: 0,
            allow_bulk_edit: 0,
            in_standard_filter: 0,
            in_preview: 0,
            read_only: 0,
            precision: null,
            max_height: null,
            length: 0,
            translatable: 0,
            hide_border: 0,
            hide_days: 0,
            hide_seconds: 0,
            non_negative: 0,
            is_virtual: 0,
            fetch_from: null,
        },
        {
            name: "647bc02cb9",
            creation: "2022-07-12 11:10:21.346082",
            modified: "2022-12-12 17:23:23.980046",
            modified_by: "Administrator",
            owner: "Administrator",
            docstatus: 0,
            parent: "Perfil del exalumno Educacion Superior",
            parentfield: "fields",
            parenttype: "DocType",
            idx: 2,
            fieldname: "institucion",
            label: "Institucion Educativa",
            oldfieldname: null,
            fieldtype: "Data",
            oldfieldtype: null,
            options: null,
            search_index: 0,
            show_dashboard: 0,
            hidden: 0,
            set_only_once: 0,
            allow_in_quick_entry: 0,
            print_hide: 0,
            report_hide: 0,
            reqd: 0,
            bold: 0,
            in_global_search: 0,
            collapsible: 0,
            unique: 0,
            no_copy: 0,
            allow_on_submit: 0,
            show_preview_popup: 0,
            trigger: null,
            collapsible_depends_on: null,
            mandatory_depends_on: null,
            read_only_depends_on: null,
            depends_on: null,
            permlevel: 0,
            ignore_user_permissions: 0,
            width: null,
            print_width: null,
            columns: 0,
            default: null,
            description: null,
            in_list_view: 1,
            fetch_if_empty: 0,
            in_filter: 0,
            remember_last_selected_value: 0,
            ignore_xss_filter: 0,
            print_hide_if_no_value: 0,
            allow_bulk_edit: 0,
            in_standard_filter: 0,
            in_preview: 0,
            read_only: 0,
            precision: null,
            max_height: null,
            length: 0,
            translatable: 0,
            hide_border: 0,
            hide_days: 0,
            hide_seconds: 0,
            non_negative: 0,
            is_virtual: 0,
            fetch_from: null,
        },
        {
            name: "9d2d8f9482",
            creation: "2022-07-12 11:10:21.346082",
            modified: "2022-12-12 17:23:23.980046",
            modified_by: "Administrator",
            owner: "Administrator",
            docstatus: 0,
            parent: "Perfil del exalumno Educacion Superior",
            parentfield: "fields",
            parenttype: "DocType",
            idx: 3,
            fieldname: "carrera",
            label: "Carrera",
            oldfieldname: null,
            fieldtype: "Data",
            oldfieldtype: null,
            options: null,
            search_index: 0,
            show_dashboard: 0,
            hidden: 0,
            set_only_once: 0,
            allow_in_quick_entry: 0,
            print_hide: 0,
            report_hide: 0,
            reqd: 0,
            bold: 0,
            in_global_search: 0,
            collapsible: 0,
            unique: 0,
            no_copy: 0,
            allow_on_submit: 0,
            show_preview_popup: 0,
            trigger: null,
            collapsible_depends_on: null,
            mandatory_depends_on: null,
            read_only_depends_on: null,
            depends_on: null,
            permlevel: 0,
            ignore_user_permissions: 0,
            width: null,
            print_width: null,
            columns: 0,
            default: null,
            description: null,
            in_list_view: 1,
            fetch_if_empty: 0,
            in_filter: 0,
            remember_last_selected_value: 0,
            ignore_xss_filter: 0,
            print_hide_if_no_value: 0,
            allow_bulk_edit: 0,
            in_standard_filter: 0,
            in_preview: 0,
            read_only: 0,
            precision: null,
            max_height: null,
            length: 0,
            translatable: 0,
            hide_border: 0,
            hide_days: 0,
            hide_seconds: 0,
            non_negative: 0,
            is_virtual: 0,
            fetch_from: null,
        },
        {
            name: "e5e502028b",
            creation: "2022-07-12 11:10:21.346082",
            modified: "2022-12-12 17:23:23.980046",
            modified_by: "Administrator",
            owner: "Administrator",
            docstatus: 0,
            parent: "Perfil del exalumno Educacion Superior",
            parentfield: "fields",
            parenttype: "DocType",
            idx: 4,
            fieldname: "grado",
            label: "T\u00edtulo ",
            oldfieldname: null,
            fieldtype: "Data",
            oldfieldtype: null,
            options: null,
            search_index: 0,
            show_dashboard: 0,
            hidden: 0,
            set_only_once: 0,
            allow_in_quick_entry: 0,
            print_hide: 0,
            report_hide: 0,
            reqd: 0,
            bold: 0,
            in_global_search: 0,
            collapsible: 0,
            unique: 0,
            no_copy: 0,
            allow_on_submit: 0,
            show_preview_popup: 0,
            trigger: null,
            collapsible_depends_on: null,
            mandatory_depends_on: null,
            read_only_depends_on: null,
            depends_on: null,
            permlevel: 0,
            ignore_user_permissions: 0,
            width: null,
            print_width: null,
            columns: 0,
            default: null,
            description: null,
            in_list_view: 1,
            fetch_if_empty: 0,
            in_filter: 0,
            remember_last_selected_value: 0,
            ignore_xss_filter: 0,
            print_hide_if_no_value: 0,
            allow_bulk_edit: 0,
            in_standard_filter: 0,
            in_preview: 0,
            read_only: 0,
            precision: null,
            max_height: null,
            length: 0,
            translatable: 0,
            hide_border: 0,
            hide_days: 0,
            hide_seconds: 0,
            non_negative: 0,
            is_virtual: 0,
            fetch_from: null,
        },
        {
            name: "e8795d69e8",
            creation: "2022-07-12 11:10:21.346082",
            modified: "2022-12-12 17:23:23.980046",
            modified_by: "Administrator",
            owner: "Administrator",
            docstatus: 0,
            parent: "Perfil del exalumno Educacion Superior",
            parentfield: "fields",
            parenttype: "DocType",
            idx: 5,
            fieldname: "tipo_de_estudio",
            label: "Tipo de estudio",
            oldfieldname: null,
            fieldtype: "Select",
            oldfieldtype: null,
            options: "T\u00e9cnico\nProfesional T\u00e9cnico\nUniversitario\nPost Grado\nMaster\nDoctorado\nOtro",
            search_index: 0,
            show_dashboard: 0,
            hidden: 0,
            set_only_once: 0,
            allow_in_quick_entry: 0,
            print_hide: 0,
            report_hide: 0,
            reqd: 0,
            bold: 0,
            in_global_search: 0,
            collapsible: 0,
            unique: 0,
            no_copy: 0,
            allow_on_submit: 0,
            show_preview_popup: 0,
            trigger: null,
            collapsible_depends_on: null,
            mandatory_depends_on: null,
            read_only_depends_on: null,
            depends_on: null,
            permlevel: 0,
            ignore_user_permissions: 0,
            width: null,
            print_width: null,
            columns: 0,
            default: null,
            description: null,
            in_list_view: 0,
            fetch_if_empty: 0,
            in_filter: 0,
            remember_last_selected_value: 0,
            ignore_xss_filter: 0,
            print_hide_if_no_value: 0,
            allow_bulk_edit: 0,
            in_standard_filter: 0,
            in_preview: 0,
            read_only: 0,
            precision: null,
            max_height: null,
            length: 0,
            translatable: 0,
            hide_border: 0,
            hide_days: 0,
            hide_seconds: 0,
            non_negative: 0,
            is_virtual: 0,
            fetch_from: null,
        },
        {
            name: "e17c2a40f5",
            creation: "2022-07-12 11:10:21.346082",
            modified: "2022-12-12 17:23:23.980046",
            modified_by: "Administrator",
            owner: "Administrator",
            docstatus: 0,
            parent: "Perfil del exalumno Educacion Superior",
            parentfield: "fields",
            parenttype: "DocType",
            idx: 6,
            fieldname: "pais",
            label: "Pais",
            oldfieldname: null,
            fieldtype: "Link",
            oldfieldtype: null,
            options: "Country",
            search_index: 0,
            show_dashboard: 0,
            hidden: 0,
            set_only_once: 0,
            allow_in_quick_entry: 0,
            print_hide: 0,
            report_hide: 0,
            reqd: 0,
            bold: 0,
            in_global_search: 0,
            collapsible: 0,
            unique: 0,
            no_copy: 0,
            allow_on_submit: 0,
            show_preview_popup: 0,
            trigger: null,
            collapsible_depends_on: null,
            mandatory_depends_on: null,
            read_only_depends_on: null,
            depends_on: null,
            permlevel: 0,
            ignore_user_permissions: 0,
            width: null,
            print_width: null,
            columns: 0,
            default: null,
            description: null,
            in_list_view: 0,
            fetch_if_empty: 0,
            in_filter: 0,
            remember_last_selected_value: 0,
            ignore_xss_filter: 0,
            print_hide_if_no_value: 0,
            allow_bulk_edit: 0,
            in_standard_filter: 0,
            in_preview: 0,
            read_only: 0,
            precision: null,
            max_height: null,
            length: 0,
            translatable: 0,
            hide_border: 0,
            hide_days: 0,
            hide_seconds: 0,
            non_negative: 0,
            is_virtual: 0,
            fetch_from: null,
        },
        {
            name: "4ab30b9fac",
            creation: "2022-07-12 11:10:21.346082",
            modified: "2022-12-12 17:23:23.980046",
            modified_by: "Administrator",
            owner: "Administrator",
            docstatus: 0,
            parent: "Perfil del exalumno Educacion Superior",
            parentfield: "fields",
            parenttype: "DocType",
            idx: 7,
            fieldname: "estado",
            label: "Estado",
            oldfieldname: null,
            fieldtype: "Select",
            oldfieldtype: null,
            options: "En curso\nGraduado",
            search_index: 0,
            show_dashboard: 0,
            hidden: 0,
            set_only_once: 0,
            allow_in_quick_entry: 0,
            print_hide: 0,
            report_hide: 0,
            reqd: 0,
            bold: 0,
            in_global_search: 0,
            collapsible: 0,
            unique: 0,
            no_copy: 0,
            allow_on_submit: 0,
            show_preview_popup: 0,
            trigger: null,
            collapsible_depends_on: null,
            mandatory_depends_on: null,
            read_only_depends_on: null,
            depends_on: null,
            permlevel: 0,
            ignore_user_permissions: 0,
            width: null,
            print_width: null,
            columns: 0,
            default: null,
            description: null,
            in_list_view: 0,
            fetch_if_empty: 0,
            in_filter: 0,
            remember_last_selected_value: 0,
            ignore_xss_filter: 0,
            print_hide_if_no_value: 0,
            allow_bulk_edit: 0,
            in_standard_filter: 0,
            in_preview: 0,
            read_only: 0,
            precision: null,
            max_height: null,
            length: 0,
            translatable: 0,
            hide_border: 0,
            hide_days: 0,
            hide_seconds: 0,
            non_negative: 0,
            is_virtual: 0,
            fetch_from: null,
        },
        {
            name: "333ed2bcf4",
            creation: "2022-07-12 11:10:21.346082",
            modified: "2022-12-12 17:23:23.980046",
            modified_by: "Administrator",
            owner: "Administrator",
            docstatus: 0,
            parent: "Perfil del exalumno Educacion Superior",
            parentfield: "fields",
            parenttype: "DocType",
            idx: 8,
            fieldname: "desde",
            label: "Desde el a\u00f1o",
            oldfieldname: null,
            fieldtype: "Select",
            oldfieldtype: null,
            options: "2022\n2021\n2020\n2019\n2018\n2017\n2016\n2015\n2014\n2013\n2012\n2011\n2010\n2009\n2008\n2007\n2006\n2005\n2004\n2003\n2002\n2001\n2000\n1999\n1998\n1997\n1996\n1995\n1994\n1993\n1992\n1991\n1990\n1989\n1988\n1987\n1986\n1985\n1984\n1983\n1982\n1981\n1980\n1979\n1978\n1977\n1976\n1975\n1974\n1973\n1972\n1971\n1970",
            search_index: 0,
            show_dashboard: 0,
            hidden: 0,
            set_only_once: 0,
            allow_in_quick_entry: 0,
            print_hide: 0,
            report_hide: 0,
            reqd: 0,
            bold: 0,
            in_global_search: 0,
            collapsible: 0,
            unique: 0,
            no_copy: 0,
            allow_on_submit: 0,
            show_preview_popup: 0,
            trigger: null,
            collapsible_depends_on: null,
            mandatory_depends_on: null,
            read_only_depends_on: null,
            depends_on: null,
            permlevel: 0,
            ignore_user_permissions: 0,
            width: null,
            print_width: null,
            columns: 0,
            default: null,
            description: null,
            in_list_view: 1,
            fetch_if_empty: 0,
            in_filter: 0,
            remember_last_selected_value: 0,
            ignore_xss_filter: 0,
            print_hide_if_no_value: 0,
            allow_bulk_edit: 0,
            in_standard_filter: 0,
            in_preview: 0,
            read_only: 0,
            precision: null,
            max_height: null,
            length: 0,
            translatable: 0,
            hide_border: 0,
            hide_days: 0,
            hide_seconds: 0,
            non_negative: 0,
            is_virtual: 0,
            fetch_from: null,
        },
        {
            name: "f40f2b605f",
            creation: "2022-07-12 11:10:21.346082",
            modified: "2022-12-12 17:23:23.980046",
            modified_by: "Administrator",
            owner: "Administrator",
            docstatus: 0,
            parent: "Perfil del exalumno Educacion Superior",
            parentfield: "fields",
            parenttype: "DocType",
            idx: 9,
            fieldname: "hasta",
            label: "Hasta el a\u00f1o",
            oldfieldname: null,
            fieldtype: "Select",
            oldfieldtype: null,
            options: "2022\n2021\n2020\n2019\n2018\n2017\n2016\n2015\n2014\n2013\n2012\n2011\n2010\n2009\n2008\n2007\n2006\n2005\n2004\n2003\n2002\n2001\n2000\n1999\n1998\n1997\n1996\n1995\n1994\n1993\n1992\n1991\n1990\n1989\n1988\n1987\n1986\n1985\n1984\n1983\n1982\n1981\n1980\n1979\n1978\n1977\n1976\n1975\n1974\n1973\n1972\n1971\n1970",
            search_index: 0,
            show_dashboard: 0,
            hidden: 0,
            set_only_once: 0,
            allow_in_quick_entry: 0,
            print_hide: 0,
            report_hide: 0,
            reqd: 0,
            bold: 0,
            in_global_search: 0,
            collapsible: 0,
            unique: 0,
            no_copy: 0,
            allow_on_submit: 0,
            show_preview_popup: 0,
            trigger: null,
            collapsible_depends_on: null,
            mandatory_depends_on: null,
            read_only_depends_on: null,
            depends_on: null,
            permlevel: 0,
            ignore_user_permissions: 0,
            width: null,
            print_width: null,
            columns: 0,
            default: null,
            description: null,
            in_list_view: 1,
            fetch_if_empty: 0,
            in_filter: 0,
            remember_last_selected_value: 0,
            ignore_xss_filter: 0,
            print_hide_if_no_value: 0,
            allow_bulk_edit: 0,
            in_standard_filter: 0,
            in_preview: 0,
            read_only: 0,
            precision: null,
            max_height: null,
            length: 0,
            translatable: 0,
            hide_border: 0,
            hide_days: 0,
            hide_seconds: 0,
            non_negative: 0,
            is_virtual: 0,
            fetch_from: null,
        },
    ],
});


/***/ }),

/***/ "./src/app/data/fields/doc_fields/Perfil_del_exaluno_Educacion_Basica.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/data/fields/doc_fields/Perfil_del_exaluno_Educacion_Basica.ts ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({ "message": [{ "name": "83f9a038e6", "creation": "2022-07-12 11:09:42.510032", "modified": "2022-11-30 10:52:29.540789", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exaluno Educacion Basica", "parentfield": "fields", "parenttype": "DocType", "idx": 2, "fieldname": "grado", "label": "Grado", "oldfieldname": null, "fieldtype": "Select", "oldfieldtype": null, "options": "Primaria\nSecundaria", "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 1, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "72506471d0", "creation": "2022-07-12 11:09:42.510032", "modified": "2022-11-30 10:52:29.540789", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exaluno Educacion Basica", "parentfield": "fields", "parenttype": "DocType", "idx": 3, "fieldname": "institucion", "label": "Institucion", "oldfieldname": null, "fieldtype": "Data", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 1, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "e222bcf2de", "creation": "2022-07-12 11:09:42.510032", "modified": "2022-11-30 10:52:29.540789", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exaluno Educacion Basica", "parentfield": "fields", "parenttype": "DocType", "idx": 4, "fieldname": "pais", "label": "Pa\u00eds", "oldfieldname": null, "fieldtype": "Link", "oldfieldtype": null, "options": "Country", "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 1, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "8ca0110563", "creation": "2022-07-12 11:09:42.510032", "modified": "2022-11-30 10:52:29.540789", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exaluno Educacion Basica", "parentfield": "fields", "parenttype": "DocType", "idx": 5, "fieldname": "desde", "label": "Desde", "oldfieldname": null, "fieldtype": "Date", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 1, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "66e7d733a7", "creation": "2022-07-12 11:09:42.510032", "modified": "2022-11-30 10:52:29.540789", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exaluno Educacion Basica", "parentfield": "fields", "parenttype": "DocType", "idx": 6, "fieldname": "hasta", "label": "Hasta", "oldfieldname": null, "fieldtype": "Date", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 1, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }] });


/***/ }),

/***/ "./src/app/data/fields/form.ts":
/*!*************************************!*\
  !*** ./src/app/data/fields/form.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _perfil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil */ "./src/app/data/fields/perfil.ts");
/* harmony import */ var _doc_fields_Perfil_del_exalumno_Educacion_Superior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doc_fields/Perfil_del_exalumno_Educacion_Superior */ "./src/app/data/fields/doc_fields/Perfil_del_exalumno_Educacion_Superior.ts");
/* harmony import */ var _doc_fields_Habilidades__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doc_fields/Habilidades */ "./src/app/data/fields/doc_fields/Habilidades.ts");
/* harmony import */ var _doc_fields_Certificaciones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doc_fields/Certificaciones */ "./src/app/data/fields/doc_fields/Certificaciones.ts");
/* harmony import */ var _doc_fields_Perfil_del_exaluno_Educacion_Basica__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doc_fields/Perfil_del_exaluno_Educacion_Basica */ "./src/app/data/fields/doc_fields/Perfil_del_exaluno_Educacion_Basica.ts");
/* harmony import */ var _doc_fields_Idiomas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doc_fields/Idiomas */ "./src/app/data/fields/doc_fields/Idiomas.ts");
/* harmony import */ var _doc_fields_Experiencia_laboral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doc_fields/Experiencia_laboral */ "./src/app/data/fields/doc_fields/Experiencia_laboral.ts");







const form = {
    "Perfil del exalumno": _perfil__WEBPACK_IMPORTED_MODULE_0__["PerfilFields"],
    "Habilidades": _doc_fields_Habilidades__WEBPACK_IMPORTED_MODULE_2__["default"],
    "Idiomas": _doc_fields_Idiomas__WEBPACK_IMPORTED_MODULE_5__["default"],
    "Experiencia laboral": _doc_fields_Experiencia_laboral__WEBPACK_IMPORTED_MODULE_6__["default"],
    "Perfil del exalumno Educacion Superior": _doc_fields_Perfil_del_exalumno_Educacion_Superior__WEBPACK_IMPORTED_MODULE_1__["default"],
    "Perfil del exaluno Educacion Basica": _doc_fields_Perfil_del_exaluno_Educacion_Basica__WEBPACK_IMPORTED_MODULE_4__["default"],
    "Certificaciones": _doc_fields_Certificaciones__WEBPACK_IMPORTED_MODULE_3__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (form);


/***/ }),

/***/ "./src/app/data/fields/perfil.ts":
/*!***************************************!*\
  !*** ./src/app/data/fields/perfil.ts ***!
  \***************************************/
/*! exports provided: PerfilFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilFields", function() { return PerfilFields; });
const PerfilFields = { "message": [{ "name": "554b586d97", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 1, "fieldname": "situaci\u00f3n_laboral_section", "label": "Situaci\u00f3n Laboral", "oldfieldname": null, "fieldtype": "Section Break", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "0031773002", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 2, "fieldname": "estado_laboral", "label": "Estado Laboral", "oldfieldname": null, "fieldtype": "Select", "oldfieldtype": null, "options": "Trabajador dependiente e interesado en oportunidades laborales\nTrabajador dependiente y no interesado en oportunidades laborales\nTrabajador independiente/Emprendedor e interesado en oportunidades laborales\nTrabajador independiente/Emprendedor y no interesado en oportunidades laborales\nNo trabajador e interesado en oportunidades laborales\nNo trabajador y no  interesado en oportunidades laborales\nEstudiante a tiempo completo y no interesado en oportunidades laborales\nEstudiante a tiempo completo e interesado en oportunidades laborales", "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "2a7e100ea1", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 3, "fieldname": "column_break_3", "label": null, "oldfieldname": null, "fieldtype": "Column Break", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "1a9f0ca773", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 4, "fieldname": "anios_experiencia", "label": "A\u00f1os de experiencia", "oldfieldname": null, "fieldtype": "Int", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": "0", "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "f7b58cade0", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 5, "fieldname": "b\u00e1sico_section", "label": "B\u00e1sico", "oldfieldname": null, "fieldtype": "Section Break", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "a49a465cde", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 6, "fieldname": "codigo_del_estudiante", "label": "codigo del estudiante", "oldfieldname": null, "fieldtype": "Data", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 1, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 1, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "08373438bc", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 7, "fieldname": "nombre", "label": "Nombre", "oldfieldname": null, "fieldtype": "Data", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 1, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 1, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "f26674354f", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 8, "fieldname": "fecha_de_nacimiento", "label": "Fecha de nacimiento", "oldfieldname": null, "fieldtype": "Date", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "dd729c20d4", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 9, "fieldname": "foto", "label": "Foto de perfil", "oldfieldname": null, "fieldtype": "Attach Image", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "efd6315555", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 10, "fieldname": "sube_tu_cv", "label": "Sube tu CV", "oldfieldname": null, "fieldtype": "Attach", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "74bc2780b9", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 11, "fieldname": "column_break_4", "label": null, "oldfieldname": null, "fieldtype": "Column Break", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "c35f8ddb40", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 12, "fieldname": "dni", "label": "DNI", "oldfieldname": null, "fieldtype": "Data", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 1, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "2ec782f269", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 13, "fieldname": "apellidos", "label": "Apellidos", "oldfieldname": null, "fieldtype": "Data", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 1, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "14c4f4ca3c", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 14, "fieldname": "estado_civil", "label": "Estado Civil", "oldfieldname": null, "fieldtype": "Select", "oldfieldtype": null, "options": "Soltero\nCasado\nDivorciado\nViudo", "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "dbc6d1267a", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 15, "fieldname": "genero", "label": "Genero", "oldfieldname": null, "fieldtype": "Select", "oldfieldtype": null, "options": "M\u00e1sculino\nFemenino", "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "a073576c09", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 16, "fieldname": "datos_b\u00e1sicos_section", "label": "Datos Personales", "oldfieldname": null, "fieldtype": "Section Break", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 1, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "9df8ac3645", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 17, "fieldname": "correo_del_egresado", "label": "Correo del egresado", "oldfieldname": null, "fieldtype": "Data", "oldfieldtype": null, "options": "Email", "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 1, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "c057ea33f9", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 18, "fieldname": "correo_personal", "label": "Correo personal", "oldfieldname": null, "fieldtype": "Data", "oldfieldtype": null, "options": "Email", "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "852a4f122d", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 19, "fieldname": "numero_de_celular", "label": "Numero de celular", "oldfieldname": null, "fieldtype": "Data", "oldfieldtype": null, "options": "Phone", "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "153ec0078c", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 20, "fieldname": "telefono_de_casa", "label": "Telefono de casa", "oldfieldname": null, "fieldtype": "Data", "oldfieldtype": null, "options": "Phone", "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "29907bc0cd", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 21, "fieldname": "resumen", "label": "Resumen", "oldfieldname": null, "fieldtype": "Text", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "1255cef972", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 22, "fieldname": "column_break_12", "label": null, "oldfieldname": null, "fieldtype": "Column Break", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "34ff6f2d47", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 23, "fieldname": "pais_de_residencia", "label": "Pais de residencia", "oldfieldname": null, "fieldtype": "Link", "oldfieldtype": null, "options": "Country", "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "5ccdfad591", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 24, "fieldname": "departamento", "label": "Departamento", "oldfieldname": null, "fieldtype": "Data", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "9fd0f6cf72", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 25, "fieldname": "provincia", "label": "Provincia", "oldfieldname": null, "fieldtype": "Data", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "f9e511696d", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 26, "fieldname": "distrito", "label": "Distrito", "oldfieldname": null, "fieldtype": "Data", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "7dc8307856", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 27, "fieldname": "domicilio", "label": "Domicilio", "oldfieldname": null, "fieldtype": "Data", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "d323e388ad", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 28, "fieldname": "section_break_31", "label": "Experiencia Profesional", "oldfieldname": null, "fieldtype": "Section Break", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 1, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "62964a6bda", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 29, "fieldname": "experiencia_laboral", "label": "Experiencia Profesional", "oldfieldname": null, "fieldtype": "Table", "oldfieldtype": null, "options": "Experiencia laboral", "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "5aef39eced", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 30, "fieldname": "habilidades_section", "label": "Habilidades", "oldfieldname": null, "fieldtype": "Section Break", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 1, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "3397d21752", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 31, "fieldname": "habilidades", "label": "Habilidades", "oldfieldname": null, "fieldtype": "Table", "oldfieldtype": null, "options": "Habilidades", "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "a0289e9b4d", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 32, "fieldname": "educacion_superior_section", "label": "Educaci\u00f3n Superior", "oldfieldname": null, "fieldtype": "Section Break", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 1, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "c9c8f225f4", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 33, "fieldname": "educacion_superior", "label": "Educacion Superior", "oldfieldname": null, "fieldtype": "Table", "oldfieldtype": null, "options": "Perfil del exalumno Educacion Superior", "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "e3ae3dd71f", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 34, "fieldname": "certificaciones_section", "label": "Certificaciones y Cursos", "oldfieldname": null, "fieldtype": "Section Break", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 1, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "61b33f2c64", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 35, "fieldname": "certificaciones", "label": "Certificaciones", "oldfieldname": null, "fieldtype": "Table", "oldfieldtype": null, "options": "Certificaciones", "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "ed69b30fb3", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 36, "fieldname": "idioma_section", "label": "Idioma", "oldfieldname": null, "fieldtype": "Section Break", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 1, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "b5308f0f69", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 37, "fieldname": "idioma", "label": "Idioma", "oldfieldname": null, "fieldtype": "Table", "oldfieldtype": null, "options": "Idiomas", "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "311a7f004a", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 38, "fieldname": "educacion_basica_section", "label": "Educaci\u00f3n B\u00e1sica", "oldfieldname": null, "fieldtype": "Section Break", "oldfieldtype": null, "options": null, "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 1, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }, { "name": "d4263cfbff", "creation": "2022-06-24 11:15:19.263955", "modified": "2022-12-06 10:12:15.824517", "modified_by": "Administrator", "owner": "Administrator", "docstatus": 0, "parent": "Perfil del exalumno", "parentfield": "fields", "parenttype": "DocType", "idx": 39, "fieldname": "educacion_basica", "label": "Educacion Basica", "oldfieldname": null, "fieldtype": "Table", "oldfieldtype": null, "options": "Perfil del exaluno Educacion Basica", "search_index": 0, "show_dashboard": 0, "hidden": 0, "set_only_once": 0, "allow_in_quick_entry": 0, "print_hide": 0, "report_hide": 0, "reqd": 0, "bold": 0, "in_global_search": 0, "collapsible": 0, "unique": 0, "no_copy": 0, "allow_on_submit": 0, "show_preview_popup": 0, "trigger": null, "collapsible_depends_on": null, "mandatory_depends_on": null, "read_only_depends_on": null, "depends_on": null, "permlevel": 0, "ignore_user_permissions": 0, "width": null, "print_width": null, "columns": 0, "default": null, "description": null, "in_list_view": 0, "fetch_if_empty": 0, "in_filter": 0, "remember_last_selected_value": 0, "ignore_xss_filter": 0, "print_hide_if_no_value": 0, "allow_bulk_edit": 0, "in_standard_filter": 0, "in_preview": 0, "read_only": 0, "precision": null, "max_height": null, "length": 0, "translatable": 0, "hide_border": 0, "hide_days": 0, "hide_seconds": 0, "non_negative": 0, "is_virtual": 0, "fetch_from": null }] };


/***/ }),

/***/ "./src/app/data/fields/perfil_child/Certificaciones.ts":
/*!*************************************************************!*\
  !*** ./src/app/data/fields/perfil_child/Certificaciones.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "message": [
        {
            "name": "e3585fc2e5",
            "creation": "2022-07-15 12:37:56.162985",
            "modified": "2022-07-15 12:37:56.162985",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Certificaciones",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 2,
            "fieldname": "nombre",
            "label": "Centro de formación |Institución Educativa",
            "oldfieldname": null,
            "fieldtype": "Data",
            "oldfieldtype": null,
            "options": null,
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        },
        {
            "name": "d7eea069e5",
            "creation": "2022-07-15 12:37:56.162985",
            "modified": "2022-07-15 12:37:56.162985",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Certificaciones",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 3,
            "fieldname": "certificado",
            "label": "Certificación | Licencias",
            "oldfieldname": null,
            "fieldtype": "Data",
            "oldfieldtype": null,
            "options": null,
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        }
    ]
});


/***/ }),

/***/ "./src/app/data/fields/perfil_child/Habilidades.ts":
/*!*********************************************************!*\
  !*** ./src/app/data/fields/perfil_child/Habilidades.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "message": [
        {
            "name": "5332c2e875",
            "creation": "2022-07-12 11:26:45.320317",
            "modified": "2022-07-12 11:26:45.320317",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Habilidades",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 1,
            "fieldname": "nombre",
            "label": "Nombre",
            "oldfieldname": null,
            "fieldtype": "Data",
            "oldfieldtype": null,
            "options": null,
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        },
        {
            "name": "637c193dd0",
            "creation": "2022-07-12 11:26:45.320317",
            "modified": "2022-07-12 11:26:45.320317",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Habilidades",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 2,
            "fieldname": "nivel",
            "label": "Nivel",
            "oldfieldname": null,
            "fieldtype": "Rating",
            "oldfieldtype": null,
            "options": null,
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        },
        {
            "name": "9b5bd96768",
            "creation": "2022-07-12 11:26:45.320317",
            "modified": "2022-07-12 11:26:45.320317",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Habilidades",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 3,
            "fieldname": "certificado",
            "label": "Certificado",
            "oldfieldname": null,
            "fieldtype": "Data",
            "oldfieldtype": null,
            "options": null,
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        }
    ]
});


/***/ }),

/***/ "./src/app/data/fields/perfil_child/Idiomas.ts":
/*!*****************************************************!*\
  !*** ./src/app/data/fields/perfil_child/Idiomas.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "message": [
        {
            "name": "e942b6084b",
            "creation": "2022-07-15 12:41:53.242224",
            "modified": "2022-07-15 12:43:24.253165",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Idiomas",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 1,
            "fieldname": "idioma",
            "label": "Idioma",
            "oldfieldname": null,
            "fieldtype": "Select",
            "oldfieldtype": null,
            "options": "Español\nIngles\nAlemán\nFrancés\nItaliano\nCheco\nCoreano\nChino\nJaponés\nIndú\nRuso\nHolandés\nNoruego\nIslam\nPortugués",
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        },
        {
            "name": "1561d2c05e",
            "creation": "2022-07-15 12:41:53.242224",
            "modified": "2022-07-15 12:43:24.253165",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Idiomas",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 2,
            "fieldname": "nivel",
            "label": "Nivel",
            "oldfieldname": null,
            "fieldtype": "Select",
            "oldfieldtype": null,
            "options": "Básico\nIntermedio\nAvanzado",
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        }
    ]
});


/***/ }),

/***/ "./src/app/data/fields/perfil_child/Perfil_del_exalumno_Educacion_Superior.ts":
/*!************************************************************************************!*\
  !*** ./src/app/data/fields/perfil_child/Perfil_del_exalumno_Educacion_Superior.ts ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "message": [
        {
            "name": "3ad395960b",
            "creation": "2022-07-12 11:10:21.346082",
            "modified": "2022-07-18 12:25:10.058315",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Perfil del exalumno Educacion Superior",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 2,
            "fieldname": "grado",
            "label": "Grado",
            "oldfieldname": null,
            "fieldtype": "Data",
            "oldfieldtype": null,
            "options": null,
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        },
        {
            "name": "8837115ee4",
            "creation": "2022-07-12 11:10:21.346082",
            "modified": "2022-07-18 12:25:10.058315",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Perfil del exalumno Educacion Superior",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 3,
            "fieldname": "institucion",
            "label": "Institucion",
            "oldfieldname": null,
            "fieldtype": "Data",
            "oldfieldtype": null,
            "options": null,
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        },
        {
            "name": "63327671ac",
            "creation": "2022-07-12 11:10:21.346082",
            "modified": "2022-07-18 12:25:10.058315",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Perfil del exalumno Educacion Superior",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 4,
            "fieldname": "carrera",
            "label": "Carrera o curso",
            "oldfieldname": null,
            "fieldtype": "Data",
            "oldfieldtype": null,
            "options": null,
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        },
        {
            "name": "d629996518",
            "creation": "2022-07-12 11:10:21.346082",
            "modified": "2022-07-18 12:25:10.058315",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Perfil del exalumno Educacion Superior",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 9,
            "fieldname": "desde",
            "label": "Desde",
            "oldfieldname": null,
            "fieldtype": "Date",
            "oldfieldtype": null,
            "options": null,
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        },
        {
            "name": "5264df7057",
            "creation": "2022-07-12 11:10:21.346082",
            "modified": "2022-07-18 12:25:10.058315",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Perfil del exalumno Educacion Superior",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 10,
            "fieldname": "hasta",
            "label": "Hasta",
            "oldfieldname": null,
            "fieldtype": "Date",
            "oldfieldtype": null,
            "options": null,
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        }
    ]
});


/***/ }),

/***/ "./src/app/data/fields/perfil_child/Perfil_del_exaluno_Educacion_Basica.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/data/fields/perfil_child/Perfil_del_exaluno_Educacion_Basica.ts ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "message": [
        {
            "name": "198effe1a5",
            "creation": "2022-07-12 11:09:42.510032",
            "modified": "2022-07-15 12:32:24.244906",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Perfil del exaluno Educacion Basica",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 2,
            "fieldname": "grado",
            "label": "Grado",
            "oldfieldname": null,
            "fieldtype": "Data",
            "oldfieldtype": null,
            "options": null,
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        },
        {
            "name": "9289fe621f",
            "creation": "2022-07-12 11:09:42.510032",
            "modified": "2022-07-15 12:32:24.244906",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Perfil del exaluno Educacion Basica",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 3,
            "fieldname": "institucion",
            "label": "Institucion",
            "oldfieldname": null,
            "fieldtype": "Data",
            "oldfieldtype": null,
            "options": null,
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        },
        {
            "name": "d282df7c0f",
            "creation": "2022-07-12 11:09:42.510032",
            "modified": "2022-07-15 12:32:24.244906",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Perfil del exaluno Educacion Basica",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 4,
            "fieldname": "pais",
            "label": "País",
            "oldfieldname": null,
            "fieldtype": "Link",
            "oldfieldtype": null,
            "options": "Country",
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        },
        {
            "name": "0d6112535e",
            "creation": "2022-07-12 11:09:42.510032",
            "modified": "2022-07-15 12:32:24.244906",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Perfil del exaluno Educacion Basica",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 5,
            "fieldname": "desde",
            "label": "Desde",
            "oldfieldname": null,
            "fieldtype": "Date",
            "oldfieldtype": null,
            "options": null,
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        },
        {
            "name": "1cb34abab3",
            "creation": "2022-07-12 11:09:42.510032",
            "modified": "2022-07-15 12:32:24.244906",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Perfil del exaluno Educacion Basica",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 6,
            "fieldname": "hasta",
            "label": "Hasta",
            "oldfieldname": null,
            "fieldtype": "Date",
            "oldfieldtype": null,
            "options": null,
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        }
    ]
});


/***/ }),

/***/ "./src/app/data/fields/perfil_child/experiencia_laboral.ts":
/*!*****************************************************************!*\
  !*** ./src/app/data/fields/perfil_child/experiencia_laboral.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "message": [
        {
            "name": "c6b2ebc1ac",
            "creation": "2022-08-16 14:37:20.080726",
            "modified": "2022-09-05 17:36:38.403901",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Experiencia laboral",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 2,
            "fieldname": "nombre_de_la_empresa",
            "label": "Empresa",
            "oldfieldname": null,
            "fieldtype": "Data",
            "oldfieldtype": null,
            "options": null,
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        },
        {
            "name": "51edd64038",
            "creation": "2022-08-16 14:37:20.080726",
            "modified": "2022-09-05 17:36:38.403901",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Experiencia laboral",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 3,
            "fieldname": "cargo",
            "label": "cargo",
            "oldfieldname": null,
            "fieldtype": "Data",
            "oldfieldtype": null,
            "options": null,
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        },
        {
            "name": "6bd40407ea",
            "creation": "2022-08-16 14:37:20.080726",
            "modified": "2022-09-05 17:36:38.403901",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Experiencia laboral",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 4,
            "fieldname": "desde",
            "label": "Desde",
            "oldfieldname": null,
            "fieldtype": "Date",
            "oldfieldtype": null,
            "options": null,
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        },
        {
            "name": "042f93d5f3",
            "creation": "2022-08-16 14:37:20.080726",
            "modified": "2022-09-05 17:36:38.403901",
            "modified_by": "Administrator",
            "owner": "Administrator",
            "docstatus": 0,
            "parent": "Experiencia laboral",
            "parentfield": "fields",
            "parenttype": "DocType",
            "idx": 5,
            "fieldname": "hasta",
            "label": "hasta",
            "oldfieldname": null,
            "fieldtype": "Date",
            "oldfieldtype": null,
            "options": null,
            "search_index": 0,
            "hidden": 0,
            "set_only_once": 0,
            "allow_in_quick_entry": 0,
            "print_hide": 0,
            "report_hide": 0,
            "reqd": 0,
            "bold": 0,
            "in_global_search": 0,
            "collapsible": 0,
            "unique": 0,
            "no_copy": 0,
            "allow_on_submit": 0,
            "show_preview_popup": 0,
            "trigger": null,
            "collapsible_depends_on": null,
            "mandatory_depends_on": null,
            "read_only_depends_on": null,
            "depends_on": null,
            "permlevel": 0,
            "ignore_user_permissions": 0,
            "width": null,
            "print_width": null,
            "columns": 0,
            "default": null,
            "description": null,
            "in_list_view": 1,
            "fetch_if_empty": 0,
            "in_filter": 0,
            "remember_last_selected_value": 0,
            "ignore_xss_filter": 0,
            "print_hide_if_no_value": 0,
            "allow_bulk_edit": 0,
            "in_standard_filter": 0,
            "in_preview": 0,
            "read_only": 0,
            "precision": "",
            "length": 0,
            "translatable": 0,
            "hide_border": 0,
            "hide_days": 0,
            "hide_seconds": 0,
            "non_negative": 0,
            "fetch_from": null
        }
    ]
});


/***/ }),

/***/ "./src/app/data/fields/table.ts":
/*!**************************************!*\
  !*** ./src/app/data/fields/table.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _perfil_child_Certificaciones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil_child/Certificaciones */ "./src/app/data/fields/perfil_child/Certificaciones.ts");
/* harmony import */ var _perfil_child_experiencia_laboral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil_child/experiencia_laboral */ "./src/app/data/fields/perfil_child/experiencia_laboral.ts");
/* harmony import */ var _perfil_child_Habilidades__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil_child/Habilidades */ "./src/app/data/fields/perfil_child/Habilidades.ts");
/* harmony import */ var _perfil_child_Idiomas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil_child/Idiomas */ "./src/app/data/fields/perfil_child/Idiomas.ts");
/* harmony import */ var _perfil_child_Perfil_del_exaluno_Educacion_Basica__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./perfil_child/Perfil_del_exaluno_Educacion_Basica */ "./src/app/data/fields/perfil_child/Perfil_del_exaluno_Educacion_Basica.ts");
/* harmony import */ var _perfil_child_Perfil_del_exalumno_Educacion_Superior__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil_child/Perfil_del_exalumno_Educacion_Superior */ "./src/app/data/fields/perfil_child/Perfil_del_exalumno_Educacion_Superior.ts");






const tables = {
    "Perfil del exaluno Educacion Basica": _perfil_child_Perfil_del_exaluno_Educacion_Basica__WEBPACK_IMPORTED_MODULE_4__["default"],
    "Experiencia laboral": _perfil_child_experiencia_laboral__WEBPACK_IMPORTED_MODULE_1__["default"],
    "Perfil del exalumno Educacion Superior": _perfil_child_Perfil_del_exalumno_Educacion_Superior__WEBPACK_IMPORTED_MODULE_5__["default"],
    "Habilidades": _perfil_child_Habilidades__WEBPACK_IMPORTED_MODULE_2__["default"],
    "Idiomas": _perfil_child_Idiomas__WEBPACK_IMPORTED_MODULE_3__["default"],
    "Certificaciones": _perfil_child_Certificaciones__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (tables);


/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");





class AuthService {
    constructor(afAuth) {
        this.afAuth = afAuth;
    }
    signIn(credentials) {
        let emailModel = credentials.email;
        let passwordModel = credentials.password;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.auth.signInWithEmailAndPassword(emailModel, passwordModel));
    }
    signInGoogle() {
        //https://lh3.googleusercontent.com/a/AGNmyxbQ_Ub433tpzU1OO2n1x9jrSrBvZcOh76Whl8nAFfo=s96-c
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider()));
    }
    signOut() {
        localStorage.removeItem("email");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.auth.signOut());
    }
    register(credentials) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password).then(() => {
            this.afAuth.auth.currentUser.updateProfile({ displayName: credentials.displayName });
            this.afAuth.auth.updateCurrentUser(this.afAuth.auth.currentUser);
        }));
    }
    sendPasswordEmail(email) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.auth.sendPasswordResetEmail(email));
    }
    resetPassword(credentials) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.auth.confirmPasswordReset(credentials.code, credentials.newPassword));
    }
    get user() {
        return this.afAuth.auth.currentUser;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/lang.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/lang.service.ts ***!
  \****************************************/
/*! exports provided: LangService, Language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangService", function() { return LangService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _lang_en_US_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lang/en-US.json */ "./src/lang/en-US.json");
var _lang_en_US_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../lang/en-US.json */ "./src/lang/en-US.json", 1);
/* harmony import */ var _lang_es_ES_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lang/es-ES.json */ "./src/lang/es-ES.json");
var _lang_es_ES_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../lang/es-ES.json */ "./src/lang/es-ES.json", 1);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const languageKey = '__lang';
class LangService {
    constructor(translate, rendererFactory, router) {
        this.translate = translate;
        this.rendererFactory = rendererFactory;
        this.router = router;
        this.isSingleLang = false;
        this.defaultLanguage = localStorage.getItem(languageKey) || 'es-ES';
        this.supportedLanguages = [
            { code: 'es-ES', direction: 'ltr', label: 'Español', shorthand: 'es' },
            { code: 'en-US', direction: 'ltr', label: 'English', shorthand: 'en' }
        ];
        this.renderer = this.rendererFactory.createRenderer(null, null);
    }
    init() {
        this.translate.setTranslation('en-US', _lang_en_US_json__WEBPACK_IMPORTED_MODULE_1__);
        this.translate.setTranslation('es-ES', _lang_es_ES_json__WEBPACK_IMPORTED_MODULE_2__);
        this.translate.setDefaultLang(this.defaultLanguage);
        if (this.isSingleLang) {
            this.translate.use(this.defaultLanguage);
        }
        else {
            this.language = '';
        }
    }
    checkForDirectionChange() {
        this.renderer.removeClass(document.body, 'ltr');
        this.renderer.removeClass(document.body, 'rtl');
        this.renderer.addClass(document.body, this.direction);
        this.renderer.setAttribute(document.documentElement, 'direction', this.direction);
    }
    set language(lang) {
        let language = lang || localStorage.getItem(languageKey);
        const isSupportedLanguage = this.supportedLanguages.map(item => item.code).includes(language);
        if (!isSupportedLanguage) {
            language = this.defaultLanguage;
        }
        if (lang !== '' && this.supportedLanguages.map(item => item.code).includes(lang) && this.direction !== this.supportedLanguages.find(item => item.code === lang).direction) {
            localStorage.setItem(languageKey, lang);
            window.location.reload();
        }
        else {
            this.translate.use(language);
        }
        this.checkForDirectionChange();
        localStorage.setItem(languageKey, language);
    }
    get language() {
        return this.translate.currentLang;
    }
    get languageShorthand() {
        return this.supportedLanguages.find(item => item.code === this.translate.currentLang).shorthand;
    }
    get direction() {
        return this.supportedLanguages.find(item => item.code === this.translate.currentLang).direction;
    }
    get languageLabel() {
        return this.supportedLanguages.find(item => item.code === this.translate.currentLang).label;
    }
}
LangService.ɵfac = function LangService_Factory(t) { return new (t || LangService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LangService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LangService, factory: LangService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LangService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();
class Language {
}


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _views_error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/error/error.component */ "./src/app/views/error/error.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");







class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
        ],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_views_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"]], exports: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _views_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_views_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"]],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                ],
                exports: [
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _views_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/error/error.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/error/error.component.ts ***!
  \************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




class ErrorComponent {
    constructor() {
    }
    ngOnInit() {
        document.body.classList.add('background');
    }
    ngOnDestroy() {
        document.body.classList.remove('background');
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 26, vars: 9, consts: [["id", "root"], [1, "fixed-background"], [1, "container"], [1, "row", "h-100"], [1, "col-12", "col-md-10", "mx-auto", "my-auto"], [1, "card", "auth-card"], [1, "position-relative", "image-side"], [1, "text-white", "h2"], [1, "white", "mb-0"], [1, "form-side"], ["routerLink", "/"], [1, "logo-single"], [1, "mb-4"], [1, "mb-0", "text-muted", "text-small", "mb-0"], [1, "display-1", "font-weight-bold", "mb-5"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-shadow"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "MAGIC IS IN THE DETAILS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Yes, it is indeed!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 3, "pages.error-title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 5, "pages.error-code"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 7, "pages.go-back-home"), " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/views.component.ts":
/*!******************************************!*\
  !*** ./src/app/views/views.component.ts ***!
  \******************************************/
/*! exports provided: ViewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsComponent", function() { return ViewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ViewsComponent {
    constructor(router) {
        this.router = router;
        // If you have landing page, remove below line and implement it here.
        this.router.navigateByUrl('/jointec/app');
    }
    ngOnInit() {
    }
}
ViewsComponent.ɵfac = function ViewsComponent_Factory(t) { return new (t || ViewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ViewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewsComponent, selectors: [["app-views"]], decls: 2, vars: 0, consts: [[1, "loading"]], template: function ViewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-views',
                templateUrl: './views.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/views.module.ts":
/*!***************************************!*\
  !*** ./src/app/views/views.module.ts ***!
  \***************************************/
/*! exports provided: ViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsModule", function() { return ViewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _views_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views.component */ "./src/app/views/views.component.ts");
/* harmony import */ var _views_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views.routing */ "./src/app/views/views.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/__ivy_ngcc__/auth-guard/es2015/index.js");
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-dropzone-wrapper */ "./node_modules/ngx-dropzone-wrapper/__ivy_ngcc__/dist/ngx-dropzone-wrapper.es5.js");
/* harmony import */ var _containers_ui_modals_ui_modals_containers_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../containers/ui/modals/ui.modals.containers.module */ "./src/app/containers/ui/modals/ui.modals.containers.module.ts");










class ViewsModule {
}
ViewsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewsModule });
ViewsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewsModule_Factory(t) { return new (t || ViewsModule)(); }, imports: [[
            _containers_ui_modals_ui_modals_containers_module__WEBPACK_IMPORTED_MODULE_8__["UiModalsContainersModule"],
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__["DropzoneModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _views_routing__WEBPACK_IMPORTED_MODULE_3__["ViewRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
            _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthGuardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewsModule, { declarations: [_views_component__WEBPACK_IMPORTED_MODULE_2__["ViewsComponent"]], imports: [_containers_ui_modals_ui_modals_containers_module__WEBPACK_IMPORTED_MODULE_8__["UiModalsContainersModule"],
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__["DropzoneModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _views_routing__WEBPACK_IMPORTED_MODULE_3__["ViewRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
        _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthGuardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_views_component__WEBPACK_IMPORTED_MODULE_2__["ViewsComponent"]],
                imports: [
                    _containers_ui_modals_ui_modals_containers_module__WEBPACK_IMPORTED_MODULE_8__["UiModalsContainersModule"],
                    ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__["DropzoneModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _views_routing__WEBPACK_IMPORTED_MODULE_3__["ViewRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
                    _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthGuardModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/views.routing.ts":
/*!****************************************!*\
  !*** ./src/app/views/views.routing.ts ***!
  \****************************************/
/*! exports provided: ViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRoutingModule", function() { return ViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _views_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views.component */ "./src/app/views/views.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/error.component */ "./src/app/views/error/error.component.ts");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/__ivy_ngcc__/auth-guard/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");








const redirectUnauthorizedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["redirectUnauthorizedTo"])(['/jointec/user']);
const redirectLoggedInToItems = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["redirectLoggedInTo"])(['/jointec/app']);
let routes = [
    {
        path: '',
        component: _views_component__WEBPACK_IMPORTED_MODULE_2__["ViewsComponent"],
        pathMatch: 'full',
    },
    { path: 'jointec/app', loadChildren: () => __webpack_require__.e(/*! import() | app-app-module */ "app-app-module").then(__webpack_require__.bind(null, /*! ./app/app.module */ "./src/app/views/app/app.module.ts")).then(m => m.AppModule), canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthGuard"]], data: { authGuardPipe: redirectUnauthorizedToLogin } },
    { path: 'jointec/user', loadChildren: () => Promise.all(/*! import() | user-user-module */[__webpack_require__.e("default~user-user-module~vien-vien-module"), __webpack_require__.e("user-user-module")]).then(__webpack_require__.bind(null, /*! ./user/user.module */ "./src/app/views/user/user.module.ts")).then(m => m.UserModule), data: { authGuardPipe: redirectLoggedInToItems } },
    { path: 'error', component: _error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"] },
    { path: 'jointec', redirectTo: 'jointec/app', pathMatch: 'full' },
    { path: '**', redirectTo: '/error' }
];
if (!_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].isAuthGuardActive) {
    routes = [
        {
            path: '',
            component: _views_component__WEBPACK_IMPORTED_MODULE_2__["ViewsComponent"],
            pathMatch: 'full',
        },
        { path: 'jointec/app', loadChildren: () => __webpack_require__.e(/*! import() | app-app-module */ "app-app-module").then(__webpack_require__.bind(null, /*! ./app/app.module */ "./src/app/views/app/app.module.ts")).then(m => m.AppModule) },
        { path: 'jointec/user', loadChildren: () => Promise.all(/*! import() | user-user-module */[__webpack_require__.e("default~user-user-module~vien-vien-module"), __webpack_require__.e("user-user-module")]).then(__webpack_require__.bind(null, /*! ./user/user.module */ "./src/app/views/user/user.module.ts")).then(m => m.UserModule) },
        { path: 'error', component: _error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"] },
        { path: 'jointec', redirectTo: 'jointec/app', pathMatch: 'full' },
        { path: '**', redirectTo: '/error' }
    ];
}
class ViewRoutingModule {
}
ViewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewRoutingModule });
ViewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewRoutingModule_Factory(t) { return new (t || ViewRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/assets/css/sass/themes lazy recursive ^\\.\\/vien\\..*\\.scss$":
/*!*******************************************************************************!*\
  !*** ./src/assets/css/sass/themes lazy ^\.\/vien\..*\.scss$ namespace object ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./vien.dark.bluenavy.scss": [
		"./src/assets/css/sass/themes/vien.dark.bluenavy.scss",
		0
	],
	"./vien.dark.blueolympic.scss": [
		"./src/assets/css/sass/themes/vien.dark.blueolympic.scss",
		1
	],
	"./vien.dark.blueyale.scss": [
		"./src/assets/css/sass/themes/vien.dark.blueyale.scss",
		2
	],
	"./vien.dark.greenlime.scss": [
		"./src/assets/css/sass/themes/vien.dark.greenlime.scss",
		3
	],
	"./vien.dark.greenmoss.scss": [
		"./src/assets/css/sass/themes/vien.dark.greenmoss.scss",
		4
	],
	"./vien.dark.greysteel.scss": [
		"./src/assets/css/sass/themes/vien.dark.greysteel.scss",
		5
	],
	"./vien.dark.orangecarrot.scss": [
		"./src/assets/css/sass/themes/vien.dark.orangecarrot.scss",
		6
	],
	"./vien.dark.purplemonster.scss": [
		"./src/assets/css/sass/themes/vien.dark.purplemonster.scss",
		7
	],
	"./vien.dark.redruby.scss": [
		"./src/assets/css/sass/themes/vien.dark.redruby.scss",
		8
	],
	"./vien.dark.yellowgranola.scss": [
		"./src/assets/css/sass/themes/vien.dark.yellowgranola.scss",
		9
	],
	"./vien.light.bluenavy.scss": [
		"./src/assets/css/sass/themes/vien.light.bluenavy.scss",
		10
	],
	"./vien.light.blueolympic.scss": [
		"./src/assets/css/sass/themes/vien.light.blueolympic.scss",
		11
	],
	"./vien.light.blueyale.scss": [
		"./src/assets/css/sass/themes/vien.light.blueyale.scss",
		12
	],
	"./vien.light.greenlime.scss": [
		"./src/assets/css/sass/themes/vien.light.greenlime.scss",
		13
	],
	"./vien.light.greenmoss.scss": [
		"./src/assets/css/sass/themes/vien.light.greenmoss.scss",
		14
	],
	"./vien.light.greysteel.scss": [
		"./src/assets/css/sass/themes/vien.light.greysteel.scss",
		15
	],
	"./vien.light.orangecarrot.scss": [
		"./src/assets/css/sass/themes/vien.light.orangecarrot.scss",
		16
	],
	"./vien.light.purplemonster.scss": [
		"./src/assets/css/sass/themes/vien.light.purplemonster.scss",
		17
	],
	"./vien.light.redruby.scss": [
		"./src/assets/css/sass/themes/vien.light.redruby.scss",
		18
	],
	"./vien.light.yellowgranola.scss": [
		"./src/assets/css/sass/themes/vien.light.yellowgranola.scss",
		19
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/assets/css/sass/themes lazy recursive ^\\.\\/vien\\..*\\.scss$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://api.coloredstrategies.com',
    defaultMenuType: 'menu-default',
    subHiddenBreakpoint: 1440,
    menuHiddenBreakpoint: 768,
    themeColorStorageKey: 'vien-themecolor',
    isMultiColorActive: true,
    /*
    Color Options:
    'light.blueyale', 'light.blueolympic', 'light.bluenavy', 'light.greenmoss', 'light.greenlime', 'light.yellowgranola', 'light.greysteel', 'light.orangecarrot', 'light.redruby', 'light.purplemonster'
    'dark.blueyale', 'dark.blueolympic', 'dark.bluenavy', 'dark.greenmoss', 'dark.greenlime', 'dark.yellowgranola', 'dark.greysteel', 'dark.orangecarrot', 'dark.redruby', 'dark.purplemonster'
    */
    defaultColor: 'light.blueyale',
    isDarkSwitchActive: true,
    defaultDirection: 'ltr',
    themeRadiusStorageKey: 'vien-themeradius',
    isAuthGuardActive: true,
    firebase: {
        apiKey: "AIzaSyAvyo73YDYn4IvACIP2rEBGZK7mhhx9_Qg",
        authDomain: "alumnitecsup.firebaseapp.com",
        projectId: "alumnitecsup",
        storageBucket: "alumnitecsup.appspot.com",
        messagingSenderId: "890298304609",
        appId: "1:890298304609:web:cb0d8e10a8988575258220",
        measurementId: "G-84RM185WFS",
        databaseURL: 'https://alumnitecsup-default-rtdb.firebaseio.com'
    }
};


/***/ }),

/***/ "./src/lang/en-US.json":
/*!*****************************!*\
  !*** ./src/lang/en-US.json ***!
  \*****************************/
/*! exports provided: general, user, menu, dashboards, pages, chat, survey, todo, alert, badge, button, cards, carousel, charts, collapse, dropdowns, editors, forms, form-components, icons, input-groups, jumbotron, modal, pagination, nav, popover-tooltip, sortable, maps, table, wizard, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"general\":{\"copyright\":\"Vien Angular © 2020 All Rights Reserved.\"},\"user\":{\"login-title\":\"Login\",\"register\":\"Register\",\"forgot-password\":\"Forgot Password\",\"email\":\"E-mail\",\"password\":\"Password\",\"password-again\":\"Password Again\",\"forgot-password-question\":\"Forget password?\",\"fullname\":\"Full Name\",\"login-button\":\"Login\",\"register-button\":\"Register\",\"reset-password-button\":\"Reset\",\"buy\":\"BUY\",\"username\":\"Username\",\"code\":\"Reset Code\"},\"menu\":{\"app\":\"Home\",\"vien\":\"My Profile\",\"start\":\"Start\",\"second-menu\":\"Second Menu\",\"second\":\"Second\",\"dashboards\":\"Dashboards\",\"default\":\"Default\",\"analytics\":\"Analytics\",\"ecommerce\":\"Ecommerce\",\"content\":\"Content\",\"pages\":\"Pages\",\"data-list\":\"Data List\",\"thumb-list\":\"Thumb List\",\"image-list\":\"Image List\",\"details\":\"Details\",\"search\":\"Search\",\"invoice\":\"Invoice\",\"mailing\":\"Mailing\",\"login\":\"Login\",\"register\":\"Register\",\"forgot-password\":\"Forgot Password\",\"reset-password\":\"Reset Password\",\"error\":\"Error\",\"applications\":\"Applications\",\"todo\":\"To-do List\",\"library\":\"Library\",\"survey\":\"Survey\",\"survey-detail\":\"Survey Detail\",\"chat\":\"Chat\",\"ui\":\"UI\",\"alerts\":\"Alerts\",\"accordion\":\"Accordion\",\"badges\":\"Badges\",\"buttons\":\"Buttons\",\"cards\":\"Cards\",\"carousel\":\"Carousel\",\"charts\":\"Charts\",\"collapse\":\"Collapse\",\"datatables\":\"Datatables\",\"fullpage\":\"Full Page\",\"scrollable\":\"Scrollable\",\"responsive\":\"Responsive\",\"dropdowns\":\"Dropdowns\",\"editors\":\"Editors\",\"forms\":\"Forms\",\"form-components\":\"Form Components\",\"icons\":\"Icons\",\"input-groups\":\"Input Groups\",\"jumbotron\":\"Jumbotron\",\"modal\":\"Modal\",\"navigation\":\"Navigation\",\"pagination\":\"Pagination\",\"popover-tooltip\":\"Popover & Tooltip\",\"sortable\":\"Sortable\",\"menu\":\"Menu\",\"subhidden\":\"Subhidden\",\"hidden\":\"Hidden\",\"visible\":\"Visible\",\"tables\":\"Tables\",\"maps\":\"Maps\",\"landingpage\":\"Landing Page\",\"multipage-home\":\"Multipage Home\",\"singlepage-home\":\"Singlepage Home\",\"about\":\"About\",\"auth-login\":\"Auth Login\",\"auth-register\":\"Auth Register\",\"blog\":\"Blog\",\"blog-list\":\"Blog List\",\"blog-detail\":\"Blog Detail\",\"careers\":\"Careers\",\"confirmation\":\"Confirmation\",\"contact\":\"Contact\",\"docs\":\"Docs\",\"features\":\"Features\",\"prices\":\"Prices\",\"videos\":\"Videos\",\"blank-page\":\"Blank Page\",\"types\":\"Menu Types\",\"levels\":\"Menu Levels\",\"third-level-1\":\"Third Level 1\",\"third-level-2\":\"Third Level 2\",\"third-level-3\":\"Third Level 3\",\"faq\":\"Faq\",\"knowledge-base\":\"Knowledge Base\",\"authorization\":\"Authorization\",\"profile\":\"Profile\",\"product\":\"Product\",\"miscellaneous\":\"Miscellaneous\",\"portfolio\":\"Portfolio\",\"social\":\"Social\",\"details-alt\":\"Details Alt\",\"components\":\"Components\",\"layouts\":\"Layouts\",\"validations\":\"Validations\",\"wizard\":\"Wizard\",\"form-layouts\":\"Form Layouts\",\"form-validations\":\"Form Validations\",\"form-wizard\":\"Form Wizard\"},\"dashboards\":{\"pending-orders\":\"Pending Orders\",\"completed-orders\":\"Completed Orders\",\"refund-requests\":\"Refund Requests\",\"new-comments\":\"New Comments\",\"sales\":\"Sales\",\"orders\":\"Orders\",\"refunds\":\"Refunds\",\"recent-orders\":\"Recent Orders\",\"product-categories\":\"Product Categories\",\"cakes\":\"Cakes\",\"tickets\":\"Tickets\",\"calendar\":\"Calendar\",\"best-sellers\":\"Best Sellers\",\"website-visits\":\"Website Visits\",\"unique-visitors\":\"Unique Visitors\",\"this-week\":\"This Week\",\"last-week\":\"Lat Week\",\"this-month\":\"This Month\",\"conversion-rates\":\"Conversion Rates\",\"per-session\":\"Per Session\",\"profile-status\":\"Profile Status\",\"payment-status\":\"Payment Status\",\"work-progress\":\"Work Progress\",\"tasks-completed\":\"Tasks Completed\",\"payments-done\":\"Payments Done\",\"order-stock\":\"Order - Stock\",\"categories\":\"Categories\",\"quick-post\":\"Quick Post\",\"title\":\"Title\",\"content\":\"Content\",\"category\":\"Category\",\"save-and-publish\":\"Save and Publish\",\"top-viewed-posts\":\"Top Viewed Posts\",\"posts\":\"Posts\",\"pending-for-publish\":\"Pending for publish\",\"users\":\"Users\",\"on-approval-process\":\"On approval process\",\"alerts\":\"Alerts\",\"waiting-for-notice\":\"Waiting for notice\",\"files\":\"Files\",\"pending-for-print\":\"Pending for print\",\"logs\":\"Logs\",\"vien\":\"VIEN\",\"magic-is-in-the-details\":\"MAGIC IS IN THE DETAILS\",\"yes-it-is-indeed\":\"Yes, it is indeed!\",\"advanced-search\":\"Advanced Search\",\"toppings\":\"Toppings\",\"type\":\"Type\",\"keyword\":\"Keyword\",\"search\":\"Search\",\"top-rated-items\":\"Top Rated Items\"},\"pages\":{\"add-new\":\"ADD NEW\",\"add-new-modal-title\":\"Add New Item\",\"display-options\":\"Display Options\",\"orderby\":\"Order By : \",\"product-name\":\"Product Name\",\"category\":\"Category\",\"description\":\"Description\",\"status\":\"Status\",\"cancel\":\"Cancel\",\"submit\":\"Submit\",\"delete\":\"Delete\",\"move\":\"Move\",\"action\":\"Action\",\"another-action\":\"Another action\",\"actions\":\"ACTIONS\",\"header\":\"Header\",\"details\":\"DETAILS\",\"orders\":\"ORDERS\",\"rating\":\"Rating\",\"price\":\"Price\",\"ingredients\":\"Ingredients\",\"is-vegan\":\"Is Vegan\",\"order-status\":\"Order Status\",\"bake-progress\":\"Bake Progress\",\"popularity\":\"Popularity\",\"comments\":\"Comments\",\"error-title\":\"Ooops... looks like an error occurred!\",\"error-code\":\"Error code\",\"go-back-home\":\"GO BACK HOME\",\"invoice-info\":\"Invoice template has an inline styled version for usage outside of the project as well as Angular version.\",\"angular-version\":\"Angular Version\",\"inline-version\":\"Inline Styled Html Version\",\"mailing-info\":\"Mailing templates use inline styling and table layout to be displayed well at various service providers. To provide better usability we include it as regular html with dangerouslySetInnerHTML.\",\"like\":\"Like\",\"likes\":\"Likes\",\"details-title\":\"Details\",\"comments-title\":\"Comments\",\"questions-title\":\"Questions\",\"similar-projects\":\"Similar Projects\",\"send\":\"Send\",\"addComment\":\"Add a comment\",\"location\":\"Location\",\"contact\":\"Contact\",\"responsibilities\":\"Responsibilities\",\"photos\":\"Photos\",\"who-to-follow\":\"Who to Follow\",\"follow\":\"FOLLOW\",\"followers\":\"FOLLOWERS\",\"recent-posts\":\"Recent Posts\",\"profile\":\"PROFILE\",\"friends\":\"FRIENDS\",\"images\":\"IMAGES\",\"purchase\":\"PURCHASE\",\"view-all\":\"View All\",\"prices\":{\"developer\":\"DEVELOPER\",\"team\":\"TEAM\",\"enterprise\":\"ENTERPRISE\",\"twofactorauthentication\":\"Two factor authentication\",\"teampermissions\":\"Team permissions\",\"245Support\":\"24/5 Support\",\"247Support\":\"24/7 Support\",\"useractionsauditlog\":\"User actions audit log\",\"featurecomparison\":\"Feature Comparison\",\"pricecomparison\":\"Price Comparison\"}},\"chat\":{\"messages\":\"Messages\",\"contacts\":\"Contacts\",\"saysomething\":\"Say something..\"},\"survey\":{\"delete\":\"Delete\",\"edit\":\"Edit\",\"add-new\":\"ADD NEW\",\"save\":\"SAVE\",\"add-new-title\":\"Add New Survey\",\"title\":\"Title\",\"category\":\"Category\",\"label\":\"Label\",\"status\":\"Status\",\"cancel\":\"Cancel\",\"submit\":\"Submit\",\"another-action\":\"Another action\",\"display-options\":\"Display Options\",\"orderby\":\"Order By : \",\"all-surveys\":\"All Surveys\",\"completed-surveys\":\"Completed Surveys\",\"categories\":\"Categories\",\"active-surveys\":\"Active Surveys\",\"labels\":\"Labels\",\"details\":\"DETAILS\",\"results\":\"RESULTS\",\"summary\":\"Summary\",\"details-lowercase\":\"Details\",\"add-question\":\"Add Question\",\"quota\":\"Quota\"},\"todo\":{\"add-new\":\"ADD NEW\",\"add-new-title\":\"Add New Todo\",\"title\":\"Title\",\"detail\":\"Detail\",\"category\":\"Category\",\"label\":\"Label\",\"status\":\"Status\",\"cancel\":\"Cancel\",\"submit\":\"Submit\",\"action\":\"Action\",\"another-action\":\"Another action\",\"display-options\":\"Display Options\",\"orderby\":\"Order By : \",\"all-tasks\":\"All Tasks\",\"pending-tasks\":\"Pending Tasks\",\"completed-tasks\":\"Completed Tasks\",\"categories\":\"Categories\",\"labels\":\"Labels\"},\"alert\":{\"rounded\":\"Rounded Alert\",\"react-notifications\":\"React Notifications\",\"outline\":\"Outline\",\"primary\":\"Primary\",\"secondary\":\"Secondary\",\"info\":\"Info\",\"success\":\"Success\",\"warning\":\"Warning\",\"error\":\"Error\",\"filled\":\"Filled\",\"primary-text\":\"This is a primary alert—check it out!\",\"secondary-text\":\"This is a secondary alert—check it out!\",\"success-text\":\"This is a success alert—check it out!\",\"danger-text\":\"This is a danger alert—check it out!\",\"warning-text\":\"This is a warning alert—check it out!\",\"info-text\":\"This is a info alert—check it out!\",\"light-text\":\"This is a light alert—check it out!\",\"dark-text\":\"This is a dark alert—check it out!\",\"default\":\"Default Alert\",\"success-alert\":\"Success Alert\",\"success-alert-text\":\"Works in AfterViewInit\",\"dismissing\":\"Dismissing Alert\",\"dismissing-text\":\"Holy guacamole! You should check in on some of those fields below.\",\"dismissing-without-animate-text\":\"I am an alert and I can be dismissed without animating!\",\"additional-content\":\"Additional Content\",\"well-done\":\"Well done\",\"bootstrap-alerts\":\"Bootstrap Alerts\",\"angular-notifications\":\"Angular 2 Notifications\",\"notification-content\":\"Notification content!\"},\"badge\":{\"sizes\":\"Sizes\",\"colors\":\"Colors\",\"outline\":\"Outline\",\"links\":\"Links\",\"counter-badges\":\"Counter Badges\",\"bootstrap-default\":\"Bootstrap Default\",\"primary\":\"Primary\",\"secondary\":\"Secondary\",\"success\":\"Success\",\"danger\":\"Danger\",\"warning\":\"Warning\",\"info\":\"Info\",\"light\":\"Light\",\"dark\":\"Dark\",\"heading\":\"Example Heading\",\"new\":\"New\"},\"button\":{\"default\":\"Bootstrap Default\",\"colors\":\"Colors\",\"rounded\":\"Rounded\",\"outline\":\"Outline\",\"states\":\"States\",\"sizes\":\"Sizes\",\"button-groups\":\"Button Groups\",\"large-button\":\"Large Button\",\"small-button\":\"Small Button\",\"extra-small-button\":\"Extra Small Button\",\"block-button\":\"Block Button\",\"active\":\"Active\",\"disabled\":\"Disabled\",\"basic\":\"Basic\",\"toolbar\":\"Toolbar\",\"nesting\":\"Nesting\",\"vertical-variation\":\"Vertical Variation\",\"checkbox-radio-button\":\"Checkbox and Radio Button\",\"checkbox\":\"Checkbox\",\"checkbox-single\":\"Checkbox Single\",\"radio\":\"Radio\",\"radio-button\":\"Radio Button\",\"radio-button-uncheckable\":\"Radio Button Uncheckable\",\"primary\":\"Primary\",\"secondary\":\"Secondary\",\"success\":\"Success\",\"danger\":\"Danger\",\"warning\":\"Warning\",\"info\":\"Info\",\"light\":\"Light\",\"dark\":\"Dark\",\"states-text\":\"This button shows a spinner for 2 seconds and an error icon for 3 seconds before switching to normal state.\",\"click-here\":\"Click Here\",\"states-text-alternate\":\"This button shows a spinner for 2 seconds and an error icon for 3 seconds before switching to normal state.\",\"primary-link\":\"Primary Link\",\"link\":\"Link\",\"primary-button\":\"Primary Button\",\"button\":\"Button\",\"left\":\"Left\",\"middle\":\"Middle\",\"right\":\"Right\",\"dropdown\":\"Dropdown\",\"single\":\"Single\",\"dropdown-link\":\"Dropdown Link\"},\"cards\":{\"icon-card\":\"Icon Card\",\"image-card\":\"Image Card\",\"image-overlay-card\":\"Image Overlay Card\",\"image-card-list\":\"Image Card List\",\"tab-card\":\"Tab Card\",\"user-card\":\"User Card\",\"cake-text-1\":\"Chocolate Cake\",\"cake-text-2\":\"Homemade Cheesecake with Fresh Berries and Mint\",\"cake-text-3\":\"Fruitcake\",\"cake-text-4\":\"Cupcakes\",\"cake-text-5\":\"Wedding Cake with Flowers Macarons and Blueberries\",\"cake-text-6\":\"Cheesecake with Chocolate Cookies and Cream Biscuits\",\"badge-1\":\"NEW\",\"badge-2\":\"TRENDING\",\"badge-3\":\"ON HOLD\",\"edit\":\"Edit\"},\"carousel\":{\"glide-basic\":\"Glide Basic\",\"glide-centered\":\"Glide Centered\",\"glide-single\":\"Glide Single\",\"without-controls\":\"Carousel Without Controls\"},\"charts\":{\"line\":\"Line Chart\",\"polar\":\"Polar Chart\",\"area\":\"Area Chart\",\"scatter\":\"Scatter Chart\",\"bar\":\"Bar Chart\",\"radar\":\"Radar Chart\",\"pie\":\"Pie Chart\",\"doughnut\":\"Doughnut Chart\",\"shadow\":\"Shadow\",\"no-shadow\":\"No Shadow\"},\"collapse\":{\"basic\":\"Basic\",\"toggle\":\"Toggle\",\"accordion\":\"Accordion\",\"animation\":\"Animation\",\"manual-toggle\":\"Manual Toggle\",\"dynamic-accordion\":\"Dynamic Accordion\",\"close-others\":\"Close Others\",\"add-group-item\":\"Add Group Item\",\"first-group\":\"First Group\",\"second-group\":\"Second Group\",\"third-group\":\"Third Group\",\"events\":\"Events\",\"event\":\"Event\",\"inline\":\"Inline\",\"show\":\"Show\",\"hide\":\"Hide\"},\"dropdowns\":{\"basic\":\"Basic\",\"controlled\":\"Controlled\",\"uncontrolled\":\"Uncontrolled\",\"dropdown\":\"Dropdown\",\"header\":\"Header\",\"action\":\"Action\",\"another-action\":\"Another Action\",\"right\":\"Right\",\"left\":\"Left\",\"drop-directions\":\"Drop Directions\",\"dropright\":\"Dropright\",\"dropleft\":\"Dropleft\",\"small-button\":\"Small Button\",\"large-button\":\"Large Button\",\"sizing\":\"Sizing\",\"split\":\"Split\",\"split-button\":\"Split Button Dropdowns\",\"dropup\":\"Dropup\",\"anchor\":\"Anchor\",\"manual-triggering\":\"Manual Triggering\",\"trigger-isopen\":\"Trigger isOpen\",\"disabled\":\"Disabled\",\"alignment\":\"Alignment\"},\"editors\":{\"quill-standart\":\"Quill Standard\",\"quill-bubble\":\"Quill Bubble\"},\"forms\":{\"basic\":\"Basic\",\"email\":\"E-mail\",\"email-muted\":\"We'll never share your email with anyone else.\",\"password\":\"Password\",\"custom-checkbox\":\"Check this custom checkbox\",\"age\":\"Age\",\"submit\":\"Submit\",\"horizontal\":\"Horizontal\",\"radios\":\"Radios\",\"first-radio\":\"First radio\",\"second-radio\":\"Second radio\",\"third-radio-disabled\":\"Third disabled radio\",\"checkbox\":\"Checkbox\",\"checkbox-example\":\"Checkbox example\",\"signin\":\"Sign in\",\"top-labels-over-line\":\"Top Labels Over Line\",\"tags\":\"Tags\",\"date\":\"Date\",\"state\":\"State\",\"top-labels-in-input\":\"Top Labels In Input\",\"email-u\":\"E-MAIL\",\"password-u\":\"PASSWORD\",\"tags-u\":\"TAGS\",\"date-u\":\"DATE\",\"state-u\":\"STATE\",\"grid\":\"Form Grid\",\"address\":\"Address\",\"address2\":\"Address 2\",\"city\":\"City\",\"city-message\":\"Please select a city!\",\"state-message\":\"Please select a state!\",\"zip\":\"Zip\",\"signup\":\"Signup\",\"inline\":\"Inline\",\"validation\":\"Validation\",\"default\":\"Default\",\"firstname\":\"First name\",\"firstname-message\":\"Please enter your first name!\",\"lastname\":\"Last name\",\"lastname-message\":\"Please enter your last name!\",\"password-confirm\":\"Confirm Password\",\"validation-bootstrap\":\"Bootstrap Validation\",\"name\":\"Name\",\"remember-me\":\"Remember me\",\"details\":\"Details\",\"options\":\"Options\",\"rank\":\"Rank\",\"common-rules\":\"Common Rules\",\"email-confirm\":\"Email Confirm\",\"external-components\":\"External Components\"},\"form-components\":{\"custom-inputs\":\"Custom Inputs\",\"checkboxes\":\"Checkboxes\",\"radios\":\"Radios\",\"inline\":\"Inline\",\"date-picker\":\"Date Picker\",\"date\":\"Date\",\"date-range\":\"Date Range\",\"disabled-dates\":\"Disabled Dates\",\"embedded\":\"Embedded\",\"drop-files-here\":\"Drop Files Here\",\"tags\":\"Tags\",\"switch\":\"Switch\",\"primary\":\"Primary\",\"secondary\":\"Secondary\",\"primary-inverse\":\"Primary Inverse\",\"secondary-inverse\":\"Secondary Inverse\",\"slider\":\"Slider\",\"double-slider\":\"Double Slider\",\"single-slider\":\"Single Slider\",\"rating\":\"Rating\",\"interactive\":\"Interactive\",\"readonly\":\"Readonly\",\"type-a-cake\":\"Type a Cake\",\"start\":\"Start\",\"end\":\"End\",\"disabled\":\"Disabled\",\"select\":\"NgSelect\",\"basic\":\"Basic\",\"single\":\"Single\",\"multiple\":\"Multiple\",\"async\":\"Async\",\"ajax\":\"Ajax\",\"search\":\"Search\",\"search-async\":\"Search Async\",\"locale\":\"Locale\",\"timepicker\":\"Timepicker\",\"seconds\":\"Seconds\",\"mouse-wheel\":\"Mouse Wheel\",\"custom-steps\":\"Custom Steps\",\"dropzone\":\"Dropzone\",\"dropzone-message\":\"Click or drag images here to upload\"},\"icons\":{\"simplelineicons\":\"Simple Line Icons\",\"iconsmind\":\"Iconsmind Icons\"},\"input-groups\":{\"basic\":\"Basic\",\"sizing\":\"Sizing\",\"small\":\"Small\",\"default\":\"Default\",\"large\":\"Large\",\"checkboxes-and-radios\":\"Checkboxes and radios\",\"multiple-inputs\":\"Multiple Inputs\",\"first-and-last-name\":\"First and last name\",\"multiple-addons\":\"Multiple Addons\",\"button-addons\":\"Button Addons\",\"button\":\"Button\",\"buttons-with-dropdowns\":\"Buttons with Dropdowns\",\"segmented-buttons\":\"Segmented Buttons\",\"dropdown\":\"Dropdown\",\"header\":\"Header\",\"action\":\"Action\",\"another-action\":\"Another Action\",\"custom-select\":\"Custom Select\",\"options\":\"Options\",\"choose\":\"Choose...\",\"custom-file-input\":\"Custom File Input\",\"upload\":\"Upload\",\"choose-file\":\"Choose a file\",\"with-text-area\":\"With textarea\"},\"jumbotron\":{\"hello-world\":\"Hello, world!\",\"lead\":\"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.\",\"lead-detail\":\"It uses utility classes for typography and spacing to space content out within the larger container.\",\"learn-more\":\"Learn more\"},\"modal\":{\"basic\":\"Basic\",\"modal-title\":\"Modal Title\",\"modal-content\":\"Modal Content\",\"launch-demo-modal\":\"Launch Demo Modal\",\"scrolling-long-content\":\"Scrolling Long Content\",\"backdrop\":\"Backdrop\",\"disable-backdrop\":\"Disable Backdrop\",\"enable-backdrop\":\"Enable Backdrop\",\"disable-backdrop-click\":\"Disable Backdrop Click\",\"enable-backdrop-click\":\"Enable Backdrop Click\",\"right-modal\":\"Right Modal\",\"launch-right-modal\":\"Launch Right Modal\",\"nested\":\"Nested\",\"size\":\"Size\",\"launch-large-modal\":\"Launch Large Modal\",\"launch-small-modal\":\"Launch Small Modal\",\"template\":\"Template\",\"component\":\"Component\",\"events\":\"Events\",\"confirm\":\"Confirm\",\"custom-css\":\"Custom CSS\",\"animation\":\"Animation\",\"disable-animation\":\"Disable Animation\",\"enable-animation\":\"Enable Animation\",\"esc\":\"Esc\",\"disable-esc\":\"Disable Esc\",\"enable-esc\":\"Enable Esc\",\"popover-tooltip\":\"Popover & Tooltip\",\"popover\":\"Popover\",\"tooltip\":\"Tooltip\",\"change-class\":\"Change Class\",\"directive\":\"Directive\",\"child\":\"Child\",\"create-template\":\"Create Template\",\"create-component\":\"Create Component\",\"first-modal\":\"First Modal\",\"second-modal\":\"Second Modal\",\"open-first-modal\":\"Open First Modal\",\"open-second-modal\":\"Open Second Modal\",\"close-first-modal\":\"Close First Modal\",\"close\":\"Close\",\"open-modal\":\"Open Modal\",\"confirm-message\":\"Do you want to confirm?\",\"yes\":\"Yes\",\"no\":\"No\",\"view-child\":\"ViewChild\"},\"pagination\":{\"basic\":\"Basic\",\"manual-switch\":\"Manual Switching Page\",\"change-event\":\"Page Change Event\",\"boundary-links\":\"Boundary Links\",\"direction-links\":\"Direction Links\",\"disabled\":\"Disabled\",\"limits\":\"Limits\",\"centering\":\"Centering\"},\"nav\":{\"basic\":\"Nav Basic\",\"active\":\"Active\",\"disabled\":\"Disabled\",\"disabled-link\":\"Disabled Link\",\"link\":\"Link\",\"longer-link\":\"Longer nav link\",\"another-link\":\"Another Link\",\"right\":\"Right\",\"dropdown\":\"Dropdown\",\"header\":\"Header\",\"action\":\"Action\",\"another-action\":\"Another Action\",\"horizontal-alignment\":\"Nav Horizontal Alignment\",\"vertical-alignment\":\"Nav Vertical Alignment\",\"pills\":\"Nav Pills\",\"fill-justify\":\"Nav Fill and Justify\",\"pills-dropdowns\":\"Nav Pills with Dropdowns\",\"large\":\"Large\",\"small\":\"Small\",\"center\":\"Center\",\"breadcrumb-basic\":\"Breadcrumb Basic\"},\"popover-tooltip\":{\"popover\":\"Popover\",\"tooltip\":\"Tooltip\",\"top\":\"Top\",\"bottom\":\"Bottom\",\"right\":\"Right\",\"left\":\"Left\",\"auto\":\"Auto\"},\"sortable\":{\"columns\":\"Sorting Columns\",\"basic\":\"Basic\",\"handles\":\"Handles\",\"event\":\"Event\"},\"maps\":{\"google\":\"Google\",\"yandex\":\"Yandex\"},\"table\":{\"bootstrap-tables\":\"Bootstrap Tables\",\"bootstrap-basic\":\"Basic Table\",\"bootstrap-light\":\"Light Heading\",\"bootstrap-striped\":\"Striped Rows\",\"bootstrap-bordered\":\"Bordered Table\",\"bootstrap-borderless\":\"Borderless Table\",\"bootstrap-hoverable\":\"Hoverable Rows\"},\"wizard\":{\"step-name-1\":\"Step 1\",\"step-name-2\":\"Step 2\",\"step-name-3\":\"Step 3\",\"step-desc-1\":\"First step description\",\"step-desc-2\":\"Second step description\",\"step-desc-3\":\"Third step description\",\"content-1\":\"Step content for first step.\",\"content-2\":\"Step content for second step.\",\"content-3\":\"Last step content!\",\"content-thanks\":\"Thank You!\",\"next\":\"Next\",\"prev\":\"Back\",\"registered\":\"Your registration completed successfully!\",\"validation\":\"Validation\",\"basic\":\"Basic\",\"last-end\":\"Last Step End\",\"done\":\"Done\",\"icons\":\"Icons\",\"saving\":\"Saving...\",\"vertical\":\"Vertical\"}}");

/***/ }),

/***/ "./src/lang/es-ES.json":
/*!*****************************!*\
  !*** ./src/lang/es-ES.json ***!
  \*****************************/
/*! exports provided: general, user, menu, dashboards, pages, chat, survey, todo, alert, badge, button, cards, carousel, charts, collapse, dropdowns, editors, forms, form-components, icons, input-groups, jumbotron, modal, pagination, nav, popover-tooltip, sortable, maps, table, wizard, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"general\":{\"copyright\":\"Vien Angular © 2020 All Rights Reserved.\"},\"user\":{\"login-title\":\"Iniciar sesión\",\"register\":\"Registro\",\"forgot-password\":\"Se te olvidó tu contraseña\",\"email\":\"E-mail\",\"password\":\"Contraseña\",\"password-again\":\"Contraseña Again\",\"forgot-password-question\":\"¿Contraseña olvidada?\",\"fullname\":\"Nombre completo\",\"login-button\":\"Iniciar sesión con Google\",\"register-button\":\"Registiro\",\"reset-password-button\":\"Reiniciar\",\"buy\":\"COMPRAR\",\"username\":\"Nombre de Usuario\",\"code\":\"Restablecer Código\"},\"menu\":{\"app\":\"Inicio\",\"vien\":\"Mi perfil\",\"start\":\"Comienzo\",\"second-menu\":\"Segundo Menú\",\"second\":\"Segundo\",\"dashboards\":\"Tableros\",\"default\":\"Defecto\",\"analytics\":\"Analítica\",\"ecommerce\":\"Comercio electrónico\",\"content\":\"Contenido\",\"pages\":\"Páginas\",\"data-list\":\"Lista Datos\",\"thumb-list\":\"Lista Pulgares\",\"image-list\":\"Lista Imagen\",\"details\":\"Detalles\",\"search\":\"Búsqueda\",\"invoice\":\"Factura\",\"mailing\":\"Envío\",\"login\":\"Iniciar sesión\",\"register\":\"Registro\",\"forgot-password\":\"Olvidé mi contraseña\",\"reset-password\":\"Reiniciar contraseña\",\"error\":\"Error\",\"applications\":\"Aplicaciones\",\"todo\":\"Notas\",\"library\":\"Library\",\"survey\":\"Encuesta\",\"survey-detail\":\"Encuesta Detalle\",\"chat\":\"Chatea\",\"ui\":\"IU\",\"alerts\":\"Alertas\",\"badges\":\"Badges\",\"buttons\":\"Botones\",\"cards\":\"Tarjetas\",\"carousel\":\"Carrusel\",\"charts\":\"Gráficos\",\"collapse\":\"Colapso\",\"datatables\":\"Datatables\",\"fullpage\":\"Página Completa\",\"scrollable\":\"Desplazable\",\"responsive\":\"Responsivo\",\"dropdowns\":\"Menús Desplegables\",\"editors\":\"Editores\",\"forms\":\"Formularios\",\"form-components\":\"Componentes\",\"icons\":\"Iconos\",\"input-groups\":\"Grupos de Entrada\",\"jumbotron\":\"Jumbotron\",\"modal\":\"Modal\",\"navigation\":\"Navegación\",\"pagination\":\"Paginación\",\"popover-tooltip\":\"Tooltips y Popovers\",\"sortable\":\"Ordenable\",\"menu\":\"Menú\",\"subhidden\":\"Sub Oculto\",\"hidden\":\"Oculto\",\"visible\":\"Visible\",\"tables\":\"Tables\",\"maps\":\"Maps\",\"landingpage\":\"Página de Destino\",\"multipage-home\":\"Múltiple Página\",\"singlepage-home\":\"Una Página\",\"about\":\"Acerca de\",\"auth-login\":\"Autenticación\",\"auth-register\":\"Registro\",\"blog\":\"Blog\",\"blog-list\":\"Blog List\",\"blog-detail\":\"Detalle del Blog\",\"careers\":\"Carrera\",\"confirmation\":\"Confirmación\",\"contact\":\"Contacto\",\"docs\":\"Docs\",\"features\":\"Caracteristicas\",\"prices\":\"Precios\",\"videos\":\"Videos\",\"blank-page\":\"Página en Blanco\",\"types\":\"Menu Types\",\"levels\":\"Menu Levels\",\"third-level-1\":\"Third Level 1\",\"third-level-2\":\"Third Level 2\",\"third-level-3\":\"Third Level 3\",\"faq\":\"Pmf\",\"knowledge-base\":\"Base de Conocimientos\",\"authorization\":\"Authorization\",\"profile\":\"Profile\",\"product\":\"Producto\",\"miscellaneous\":\"Diversa\",\"portfolio\":\"Portafolio\",\"social\":\"Social\",\"details-alt\":\"Detalles Alt\",\"components\":\"Componentes\",\"layouts\":\"Diseños\",\"validations\":\"Validaciones\",\"wizard\":\"Mago\",\"form-layouts\":\"Diseños de Formulario\",\"form-validations\":\"Validaciones de Formulario\",\"form-wizard\":\"Asistente de Formulario\"},\"dashboards\":{\"pending-orders\":\"Pedidos Pendientes\",\"completed-orders\":\"Pedidos Completados\",\"refund-requests\":\"Petición de Reembolso\",\"new-comments\":\"Nuevos Comentarios\",\"sales\":\"Ventas\",\"orders\":\"Pedidos\",\"refunds\":\"Reembolso\",\"recent-orders\":\"Pedidos Recientas\",\"product-categories\":\"Categorías de Producto\",\"cakes\":\"Tortas\",\"tickets\":\"Entradas\",\"calendar\":\"Calendario\",\"best-sellers\":\"Mejores Vendidos\",\"website-visits\":\"Visitas al sitio web\",\"unique-visitors\":\"Visitantes únicos\",\"this-week\":\"Esta Semana\",\"last-week\":\"La Semana Pasada\",\"this-month\":\"Este Mes\",\"conversion-rates\":\"Medidas de Conversión\",\"per-session\":\"Por Sección\",\"profile-status\":\"Estado del Perfil\",\"payment-status\":\"Estado del Pago\",\"work-progress\":\"Trabajo en Progreso\",\"tasks-completed\":\"Tareas Completadas\",\"payments-done\":\"Pagos Realizados\",\"order-stock\":\"Pedidos - Valores\",\"categories\":\"Categorías\",\"quick-post\":\"Publicación Rápida\",\"title\":\"Título\",\"content\":\"Contenido\",\"category\":\"Categoría\",\"save-and-publish\":\"Guardar y Publicar\",\"top-viewed-posts\":\"Publicaciones Más Vistas\",\"posts\":\"Puestos\",\"pending-for-publish\":\"Pendiente de Publicación\",\"users\":\"Usuarios\",\"on-approval-process\":\"En Proceso de Aprobación\",\"alerts\":\"Alertas\",\"accordion\":\"Accordion\",\"waiting-for-notice\":\"Esperando Aviso\",\"files\":\"Archivos\",\"pending-for-print\":\"Pendiente para imprimir\",\"logs\":\"Troncos\",\"vien\":\"VIEN\",\"magic-is-in-the-details\":\"LA MAGIA ESTA EN LOS DETALLES\",\"yes-it-is-indeed\":\"¡Si es verdad!\",\"advanced-search\":\"Búsqueda Avanzada\",\"toppings\":\"Coberturas\",\"type\":\"Categoría\",\"keyword\":\"Palabra Clave\",\"search\":\"Búsqueda\",\"top-rated-items\":\"Artículos Mejores Valorados\"},\"pages\":{\"add-new\":\"AGREGAR NUEVO\",\"add-new-modal-title\":\"Agregar ítem nuevo\",\"display-options\":\"Opciones de Pantalla\",\"orderby\":\"Ordenar por : \",\"product-name\":\"Nombre del Producto\",\"category\":\"Categoría\",\"description\":\"Descripción\",\"status\":\"Estado\",\"cancel\":\"Cancelar\",\"submit\":\"Enviar\",\"delete\":\"Borrar\",\"move\":\"Moverse\",\"action\":\"Accion\",\"another-action\":\"Otra accion\",\"actions\":\"ACCIONES\",\"header\":\"Encabezado\",\"details\":\"DETALLES\",\"orders\":\"PEDIDOS\",\"rating\":\"Clasificación\",\"price\":\"Precio\",\"ingredients\":\"Ingredients\",\"is-vegan\":\"Es Vegano\",\"order-status\":\"Estado del Pedido\",\"bake-progress\":\"Progreso de Hornear\",\"popularity\":\"Popularidad\",\"comments\":\"Comentarios\",\"error-title\":\"Vaya, parece que ha ocurrido un error!\",\"error-code\":\"Código de error\",\"go-back-home\":\"REGRESAR A INICIO\",\"invoice-info\":\"Invoice template has an inline styled version for usage outside of the project as well as Anguular version.\",\"angular-version\":\"Angular Version\",\"inline-version\":\"Inline Styled Html Version\",\"mailing-info\":\"Mailing templates use inline styling and table layout to be displayed well at various service providers. To provide better usability we include it as regular html with dangerouslySetInnerHTML.\",\"like\":\"Me gusta\",\"likes\":\"Me gusta\",\"details-title\":\"Detalles\",\"comments-title\":\"Comentarios\",\"questions-title\":\"Preguntas\",\"similar-projects\":\"Proyectos Similares\",\"send\":\"Enviar\",\"addComment\":\"Añadir un comentario\",\"contact\":\"Contacto\",\"location\":\"Ubicación\",\"responsibilities\":\"Responsabilidades\",\"photos\":\"Fotos\",\"who-to-follow\":\"A quién seguir\",\"follow\":\"SEGUIR\",\"followers\":\"SEGUIDORES\",\"recent-posts\":\"Mensajes Recientes\",\"profile\":\"PERFIL\",\"friends\":\"AMIGOS\",\"images\":\"IMAGENES\",\"purchase\":\"COMPRA\",\"view-all\":\"Ver Todo\",\"prices\":{\"developer\":\"REVELADOR\",\"team\":\"EQUIPO\",\"enterprise\":\"EMPRESA\",\"twofactorauthentication\":\"Autenticación de dos factores\",\"teampermissions\":\"Permisos del equipo\",\"245Support\":\"24/5 Soporte\",\"247Support\":\"24/7 Soporte\",\"useractionsauditlog\":\"Registro de acciones del usuario\",\"featurecomparison\":\"Comparación de Características\",\"pricecomparison\":\"Comparación de Precios\"}},\"chat\":{\"messages\":\"Mensajes\",\"contacts\":\"Contactos\",\"saysomething\":\"Di algo..\"},\"survey\":{\"delete\":\"Borrar\",\"edit\":\"Edit\",\"add-new\":\"AGREGAR NUEVO\",\"add-new-title\":\"Add New Encuesta\",\"title\":\"Título\",\"category\":\"Categoría\",\"label\":\"Etiqueta\",\"status\":\"Estado\",\"cancel\":\"Cancelar\",\"submit\":\"Enviar\",\"another-action\":\"Otra accion\",\"display-options\":\"Opciones de Pantalla\",\"orderby\":\"Ordenar por : \",\"all-surveys\":\"Todas las Encuestas\",\"completed-surveys\":\"Encuestas Completadas\",\"categories\":\"Categorías\",\"active-surveys\":\"Encuestas Activas\",\"labels\":\"Etiquetas\",\"save\":\"SAVE\",\"details\":\"DETALLES\",\"results\":\"RESULTS\",\"summary\":\"Summary\",\"details-lowercase\":\"Detalles\",\"add-question\":\"Add Question\",\"quota\":\"Quota\"},\"todo\":{\"add-new\":\"AGREGAR NUEVO\",\"add-new-title\":\"Añadir Nuevo\",\"title\":\"Título\",\"detail\":\"Detalle\",\"category\":\"Categoría\",\"label\":\"Etiqueta\",\"status\":\"Estado\",\"cancel\":\"Cancelar\",\"submit\":\"Enviar\",\"action\":\"Accion\",\"another-action\":\"Otra accion\",\"display-options\":\"Opciones de Pantalla\",\"orderby\":\"Ordenar por : \",\"all-tasks\":\"Todas las Tareas\",\"pending-tasks\":\"Tareas Pendientes\",\"completed-tasks\":\"Tareas Completadas\",\"categories\":\"Categorías\",\"labels\":\"Etiquetas\"},\"alert\":{\"rounded\":\"Alerta Redondeado\",\"react-notifications\":\"React Notificaciones\",\"outline\":\"Contorno\",\"primary\":\"Primary\",\"secondary\":\"Secondary\",\"info\":\"Info\",\"success\":\"Success\",\"warning\":\"Warning\",\"error\":\"Error\",\"filled\":\"Lleno\",\"primary-text\":\"¡Esto es un primary alert—check fuera!\",\"secondary-text\":\"¡Esto es un secondary alert—check fuera!\",\"success-text\":\"¡Esto es un success alert—check fuera!\",\"danger-text\":\"¡Esto es un danger alert—check fuera!\",\"warning-text\":\"¡Esto es un warning alert—check fuera!\",\"info-text\":\"¡Esto es un info alert—check fuera!\",\"light-text\":\"¡Esto es un light alert—check fuera!\",\"dark-text\":\"¡Esto es un dark alert—check fuera!\",\"default\":\"Alerta por Defecto\",\"success-alert\":\"Alerta de Éxito\",\"success-alert-text\":\"Funciona en AfterViewInit\",\"dismissing\":\"Despido de Alerta\",\"dismissing-text\":\"¡Santo guacamole! Debes revisar algunos de esos campos a continuación.\",\"dismissing-without-animate-text\":\"¡Estoy alerta y me pueden despedir sin animarme!\",\"additional-content\":\"Contenido Adicional\",\"well-done\":\"Bien hecho\",\"bootstrap-alerts\":\"Bootstrap Alerta\",\"angular-notifications\":\"Angular 2 Notifications\",\"notification-content\":\"¡Contenido de la notificación!\"},\"badge\":{\"sizes\":\"Tamaños\",\"colors\":\"Colores\",\"outline\":\"Contorno\",\"links\":\"Enlaces\",\"counter-badges\":\"Mostrador Badges\",\"bootstrap-default\":\"Bootstrap Defecto\",\"primary\":\"Primary\",\"secondary\":\"Secondary\",\"success\":\"Success\",\"danger\":\"Danger\",\"warning\":\"Warning\",\"info\":\"Info\",\"light\":\"Light\",\"dark\":\"Dark\",\"heading\":\"Encabezado de Ejemplo\",\"new\":\"Nueva\"},\"button\":{\"default\":\"Bootstrap Defecto\",\"colors\":\"Colores\",\"rounded\":\"Botones Redondeado\",\"outline\":\"Contorno\",\"states\":\"Estados\",\"sizes\":\"Tamaños\",\"button-groups\":\"Grupos de Botones\",\"large-button\":\"Botón Grande\",\"small-button\":\"Botón Pequeño\",\"extra-small-button\":\"Botón Extra Pequeño\",\"block-button\":\"Botón de Bloqueo\",\"active\":\"Activo\",\"disabled\":\"Discapacitado\",\"basic\":\"Básico\",\"toolbar\":\"Barra de Herramientas\",\"nesting\":\"Anidando\",\"vertical-variation\":\"Variación Vertical\",\"checkbox-radio-button\":\"Checkbox  y Radio Buttons\",\"checkbox\":\"Checkbox\",\"checkbox-single\":\"Checkbox Solo\",\"radio\":\"Radio\",\"radio-button\":\"Radio Button\",\"radio-button-uncheckable\":\"Radio Button No Verificable\",\"primary\":\"Primary\",\"secondary\":\"Secondary\",\"success\":\"Success\",\"danger\":\"Danger\",\"warning\":\"Warning\",\"info\":\"Info\",\"light\":\"Light\",\"dark\":\"Dark\",\"states-text\":\"Este botón muestra una rueda giratoria durante 2 segundos y un icono de error durante 3 segundos antes de cambiar al estado normal.\",\"click-here\":\"Haga clic aquí\",\"states-text-alternate\":\"Este botón muestra una rueda giratoria durante 2 segundos y un icono de error durante 3 segundos antes de cambiar al estado normal.\",\"primary-link\":\"Primary Enlace\",\"link\":\"Enlace\",\"primary-button\":\"Primary Botón\",\"button\":\"Botón\",\"left\":\"Izquierda\",\"middle\":\"Centro\",\"right\":\"Derecha\",\"dropdown\":\"Desplegable\",\"single\":\"Solo\",\"dropdown-link\":\"Enlace Desplegable\"},\"cards\":{\"icon-card\":\"Tarjeta de Icono\",\"image-card\":\"Tarjeta de Imagen\",\"image-overlay-card\":\"Tarjeta de Superposición de Imágenes\",\"image-card-list\":\"Lista de Tarjetas de Imagen\",\"tab-card\":\"Tarjeta de Tab\",\"user-card\":\"Tarjeta de Usuario\",\"cake-text-1\":\"Pastel de Chocolate\",\"cake-text-2\":\"Tarta de Queso Casera Con Bayas Frescas y Menta\",\"cake-text-3\":\"Pastel de Frutas\",\"cake-text-4\":\"Magdalenas\",\"cake-text-5\":\"Pastel de Bodas Con Macarons de Flores y Arándanos\",\"cake-text-6\":\"Tarta de Queso con Galletas de Chocolate y Galletas de Crema\",\"badge-1\":\"NUEVO\",\"badge-2\":\"TENDENCIAS\",\"badge-3\":\"EN ESPERA\",\"edit\":\"Editar\"},\"carousel\":{\"glide-basic\":\"Glide Básico\",\"glide-centered\":\"Glide Centrado\",\"glide-single\":\"Glide Sola\",\"without-controls\":\"Carrusel sin Control\"},\"charts\":{\"line\":\"Gráfico de Linea\",\"polar\":\"Gráfico de Polar\",\"area\":\"Gráfico de Área\",\"scatter\":\"Gráfico de Dispersión\",\"bar\":\"Gráfico de Barras\",\"radar\":\"Gráfico de Radar\",\"pie\":\"Gráfico de Circular\",\"doughnut\":\"Gráfico de Rosquilla\",\"shadow\":\"Sombra\",\"no-shadow\":\"Sin Sombra\"},\"collapse\":{\"basic\":\"Básico\",\"toggle\":\"Palanca\",\"accordion\":\"Acordeón\",\"manual-toggle\":\"Palanca Manual\",\"animation\":\"Animación\",\"dynamic-accordion\":\"Dinámico Acordeón\",\"close-others\":\"Cerrar Otros\",\"add-group-item\":\"Agregar elemento de grupo\",\"first-group\":\"Primer Grupo\",\"second-group\":\"Segundo Grupo\",\"third-group\":\"Tercer Grupo\",\"events\":\"Eventos\",\"event\":\"Evento\",\"inline\":\"En Línea\",\"show\":\"Mostrar\",\"hide\":\"Esconder\"},\"dropdowns\":{\"basic\":\"Básico\",\"controlled\":\"Revisado\",\"uncontrolled\":\"Sin Control\",\"dropdown\":\"Desplegable\",\"header\":\"Encabezado\",\"action\":\"Accion\",\"another-action\":\"Otra accion\",\"right\":\"Derecha\",\"left\":\"Izquierda\",\"drop-directions\":\"Direcciones de drop\",\"dropright\":\"Drop Derecha\",\"dropleft\":\"Drop Izquierda\",\"small-button\":\"Botón Pequeño\",\"large-button\":\"Botón Grande\",\"sizing\":\"Dimensionamiento\",\"split\":\"Split\",\"split-button\":\"División\",\"dropup\":\"Dropup\",\"anchor\":\"Ancla\",\"manual-triggering\":\"Disparo Manual\",\"trigger-isopen\":\"Disparo isOpen\",\"disabled\":\"Discapacitado\",\"alignment\":\"Alineación\"},\"editors\":{\"quill-standart\":\"Quill Estándar\",\"quill-bubble\":\"Quill Burbuja\"},\"forms\":{\"basic\":\"Básico\",\"email\":\"Email\",\"email-muted\":\"Nunca compartiremos tu email con nadie más.\",\"password\":\"Contraseña\",\"submit\":\"Enviar\",\"horizontal\":\"Horizontal\",\"radios\":\"Radios\",\"first-radio\":\"Primero radio\",\"second-radio\":\"Segundo radio\",\"third-radio-disabled\":\"Tercera radio deshabilitada\",\"checkbox\":\"Checkbox\",\"checkbox-example\":\"Checkbox ejemplo\",\"signin\":\"Registrarse\",\"top-labels-over-line\":\"Etiquetas Superiores Sobre la Línea\",\"tags\":\"Etiquetas\",\"date\":\"Fecha\",\"state\":\"Estado\",\"top-labels-in-input\":\"Etiquetas Superiores Sobre la Entrada\",\"email-u\":\"EMAIL\",\"password-u\":\"CONTRASEÑA\",\"tags-u\":\"ETIQUETAS\",\"date-u\":\"FECHA\",\"state-u\":\"ESTADO\",\"grid\":\"Cuadrícula de Formulario\",\"address\":\"Dirección\",\"address2\":\"Dirección 2\",\"city\":\"Ciudad\",\"city-message\":\"Por favor seleccione una ciudad!\",\"state-message\":\"Por favor seleccione un estado!\",\"zip\":\"Código Postal\",\"signup\":\"Regístrate\",\"inline\":\"Inline\",\"validation\":\"Validación\",\"default\":\"Defecto\",\"firstname\":\"Nombre de Pila\",\"firstname-message\":\"¡Por favor, introduzca su nombre de pila!\",\"lastname\":\"Apellido\",\"lastname-message\":\"¡Por favor ingrese su apellido!\",\"custom-checkbox\":\"Marque esta casilla de verificación personalizada\",\"age\":\"Años\",\"password-confirm\":\"Confirm Password\",\"validation-bootstrap\":\"Bootstrap Validation\",\"name\":\"Name\",\"remember-me\":\"Recuérdame\",\"details\":\"Detalles\",\"options\":\"Opciones\",\"rank\":\"Rango\",\"common-rules\":\"Reglas Comunes\",\"email-confirm\":\"Email Confirmar\",\"external-components\":\"Componentes Externos\"},\"form-components\":{\"custom-inputs\":\"Entrada Personalizada\",\"checkboxes\":\"Checkboxes\",\"radios\":\"Radios\",\"inline\":\"Inline\",\"date-picker\":\"Selector de Fechas\",\"date\":\"Fecha\",\"date-range\":\"Rango de Fechas\",\"disabled-dates\":\"Discapacitado Fechas\",\"embedded\":\"Incrustado\",\"fine-uploader\":\"Fine Uploader\",\"drop-files-here\":\"Soltar Archivos Aquí\",\"tags\":\"Etiquetas\",\"switch\":\"Cambiar\",\"primary\":\"Primary\",\"secondary\":\"Secondary\",\"primary-inverse\":\"Primary Inverso\",\"secondary-inverse\":\"Secondary Inverso\",\"slider\":\"Deslizador\",\"double-slider\":\"Doble Deslizador\",\"single-slider\":\"Único Deslizador\",\"rating\":\"Clasificación\",\"interactive\":\"Interactivo\",\"readonly\":\"Solo Lectura\",\"type-a-cake\":\"Escribe un pastel\",\"start\":\"Comienzo\",\"end\":\"Fin\",\"disabled\":\"Discapacitado\",\"select\":\"Select\",\"basic\":\"Básico\",\"single\":\"Soltero\",\"multiple\":\"Múltiple\",\"async\":\"Async\",\"ajax\":\"Ajax\",\"search\":\"Buscar\",\"search-async\":\"Buscar Async\",\"locale\":\"Localización\",\"timepicker\":\"Timepicker\",\"seconds\":\"Segundos\",\"mouse-wheel\":\"Mouse Wheel\",\"custom-steps\":\"Rueda de Ratón\",\"dropzone\":\"Dropzone\",\"dropzone-message\":\"Haga clic o arrastre las imágenes aquí para cargar\"},\"icons\":{\"simplelineicons\":\"Simple Line Iconos\",\"iconsmind\":\"Iconsmind Iconos\"},\"input-groups\":{\"basic\":\"Básico\",\"sizing\":\"Dimensionamiento\",\"small\":\"Pequeño\",\"default\":\"Defecto\",\"large\":\"Grande\",\"checkboxes-and-radios\":\"Checkboxes y radios\",\"multiple-inputs\":\"Entradas Múltiples\",\"first-and-last-name\":\"Nombre y apellido\",\"multiple-addons\":\"Complementos Múltiples\",\"button-addons\":\"Complementos Botón\",\"button\":\"Botón\",\"buttons-with-dropdowns\":\"Botones y Desplegables\",\"dropdown\":\"Desplegable\",\"header\":\"Encabezado\",\"action\":\"Accion\",\"another-action\":\"Otra accion\",\"custom-select\":\"Personalizada Select\",\"options\":\"Opciones\",\"choose\":\"Escoger...\",\"custom-file-input\":\"Entrada de Archivo Personalizada\",\"segmented-buttons\":\"Segmented Buttons\",\"upload\":\"Upload\",\"choose-file\":\"Escoge un archivo\",\"with-text-area\":\"Con textarea\"},\"jumbotron\":{\"hello-world\":\"¡Hola Mundo!\",\"lead\":\"Esta es una unidad de héroe simple, un componente de estilo jumbotron simple para llamar la atención extra al contenido o información destacados.\",\"lead-detail\":\"Utiliza clases de utilidad para tipografía y espaciado para espaciar el contenido dentro del contenedor más grande.\",\"learn-more\":\"Aprende más\"},\"modal\":{\"basic\":\"Básico\",\"modal-title\":\"Título Modal\",\"modal-content\":\"Contenido Modal\",\"launch-demo-modal\":\"Lanzar Demo Modal\",\"scrolling-long-content\":\"Contenido de Desplazamiento Largo\",\"backdrop\":\"Fondo\",\"disable-backdrop\":\"Desactivar Fondo\",\"enable-backdrop\":\"Habilitar Fondo\",\"disable-backdrop-click\":\"Desactivar Clic de Fondo\",\"enable-backdrop-click\":\"Habilitar Clic de Fondo\",\"right-modal\":\"Derecha Modal\",\"launch-right-modal\":\"Launch Derecha Modal\",\"nested\":\"Anidado\",\"size\":\"Tamaño\",\"launch-large-modal\":\"Lanzar Grande Modal\",\"launch-small-modal\":\"Lanzar Pequeño Modal\",\"template\":\"Template\",\"component\":\"Component\",\"events\":\"Eventos\",\"confirm\":\"Confirmar\",\"custom-css\":\"CSS Personalizado\",\"animation\":\"Animación\",\"disable-animation\":\"Desactivar Animación\",\"enable-animation\":\"Habilitar Animación\",\"esc\":\"Esc\",\"disable-esc\":\"Desactivar Esc\",\"enable-esc\":\"Habilitar Esc\",\"popover-tooltip\":\"Tooltips y Popovers\",\"popover\":\"Popover\",\"tooltip\":\"Tooltip\",\"change-class\":\"Cambio de Clase\",\"directive\":\"Directive\",\"child\":\"Niño\",\"create-template\":\"Crear Plantilla\",\"create-component\":\"Crear Componente\",\"first-modal\":\"Primer Modal\",\"second-modal\":\"Segundo Modal\",\"open-first-modal\":\"Abrir Primer Modal\",\"open-second-modal\":\"Abrir Segundo Modal\",\"close-first-modal\":\"Cerrar Primer Modal\",\"close\":\"Cerrar\",\"open-modal\":\"Modal Abierto\",\"confirm-message\":\"¿Quieres confirmar?\",\"yes\":\"Si\",\"no\":\"No\",\"view-child\":\"ViewChild\"},\"pagination\":{\"basic\":\"Básico\",\"manual-switch\":\"Página de Cambio Manual\",\"change-event\":\"Evento de Cambio de Página\",\"boundary-links\":\"Enlaces Limítrofes\",\"direction-links\":\"Enlaces de Dirección\",\"disabled\":\"Discapacitado\",\"limits\":\"Límites\",\"centering\":\"Centrado\"},\"nav\":{\"basic\":\"Navegación Básico\",\"active\":\"Activo\",\"disabled\":\"Discapacitado\",\"disabled-link\":\"Enlace Discapacitado\",\"link\":\"Enlace\",\"longer-link\":\"Enlace de navegación más largo\",\"another-link\":\"Otro Enlace\",\"right\":\"Derecha\",\"dropdown\":\"Desplegable\",\"header\":\"Encabezado\",\"action\":\"Accion\",\"another-action\":\"Otra accion\",\"horizontal-alignment\":\"Alineación Horizontal\",\"vertical-alignment\":\"Alineación Vertical\",\"pills\":\"Navegación Píldoras\",\"fill-justify\":\"Navegación Llenar y Justify\",\"pills-dropdowns\":\"Nav Pills with Dropdowns\",\"large\":\"Grande\",\"small\":\"Pequeño\",\"center\":\"Centro\",\"breadcrumb-basic\":\"Migas de Pan Básico\"},\"popover-tooltip\":{\"popover\":\"Popovers\",\"tooltip\":\"Tooltips\",\"top\":\"Tope\",\"bottom\":\"Fondo\",\"right\":\"Derecho\",\"left\":\"Izquierda\",\"auto\":\"Auto\"},\"sortable\":{\"columns\":\"Clasificar Columnas\",\"basic\":\"Básico\",\"handles\":\"Handles\",\"event\":\"Evento\"},\"maps\":{\"google\":\"Google\",\"yandex\":\"Yandex\"},\"table\":{\"bootstrap-tables\":\"Bootstrap Tables\",\"bootstrap-basic\":\"Basic Table\",\"bootstrap-light\":\"Light Heading\",\"bootstrap-striped\":\"Striped Rows\",\"bootstrap-bordered\":\"Bordered Table\",\"bootstrap-borderless\":\"Borderless Table\",\"bootstrap-hoverable\":\"Hoverable Rows\"},\"wizard\":{\"step-name-1\":\"Paso 1\",\"step-name-2\":\"Paso 2\",\"step-name-3\":\"Paso 3\",\"step-desc-1\":\"Descripción del primer paso\",\"step-desc-2\":\"Descripción del segundo paso\",\"step-desc-3\":\"Descripción del tercer paso\",\"content-1\":\"Contenido para el primer paso.\",\"content-2\":\"Contenido para el segundo paso.\",\"content-3\":\"Contenido del último paso!\",\"content-thanks\":\"Gracias!\",\"next\":\"Entrante\",\"prev\":\"Anterior\",\"registered\":\"¡Su registro se completó con éxito!\",\"validation\":\"Validación\",\"basic\":\"Básico\",\"last-end\":\"Último Paso Final\",\"done\":\"Hecho\",\"icons\":\"Íconos\",\"saving\":\"Ahorro...\",\"vertical\":\"Vertical\"}}");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
const color = (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].isMultiColorActive || _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].isDarkSwitchActive) && localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].themeColorStorageKey)
    ? localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].themeColorStorageKey)
    : _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].defaultColor;
__webpack_require__("./src/assets/css/sass/themes lazy recursive ^\\.\\/vien\\..*\\.scss$")("./vien." + color + ".scss").then(x => {
    localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].themeColorStorageKey, color);
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(err => console.error(err));
}).catch(() => {
    localStorage.removeItem(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].themeColorStorageKey);
    window.location.reload();
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/frappe/frappe-bench/apps/bdalumni/bdalumni/www/AlumniFront/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map