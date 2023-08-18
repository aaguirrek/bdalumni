(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~user-user-module~vien-vien-module"],{

/***/ "./node_modules/angular2-notifications/__ivy_ngcc__/fesm2015/angular2-notifications.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/angular2-notifications/__ivy_ngcc__/fesm2015/angular2-notifications.js ***!
  \*********************************************************************************************/
/*! exports provided: NotificationComponent, SimpleNotificationsComponent, NotificationAnimationType, NotificationType, NotificationsService, OPTIONS, optionsFactory, SimpleNotificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleNotificationsComponent", function() { return SimpleNotificationsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationAnimationType", function() { return NotificationAnimationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return NotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTIONS", function() { return OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsFactory", function() { return optionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleNotificationsModule", function() { return SimpleNotificationsModule; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");










function NotificationComponent_div_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function NotificationComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NotificationComponent_div_1_div_1_ng_container_1_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r225.title)("ngTemplateOutletContext", ctx_r225.item.context);
} }
function NotificationComponent_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 10);
} if (rf & 2) {
    const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r227.title, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function NotificationComponent_div_1_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function NotificationComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NotificationComponent_div_1_div_4_ng_container_1_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r228.content)("ngTemplateOutletContext", ctx_r228.item.context);
} }
function NotificationComponent_div_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 12);
} if (rf & 2) {
    const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r230.content, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function NotificationComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 13);
} if (rf & 2) {
    const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r231.safeSvg, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function NotificationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NotificationComponent_div_1_div_1_Template, 2, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NotificationComponent_div_1_ng_template_2_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NotificationComponent_div_1_div_4_Template, 2, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, NotificationComponent_div_1_ng_template_5_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, NotificationComponent_div_1_div_7_Template, 1, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r226 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    const _r229 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
    const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r222.titleIsTemplate)("ngIfElse", _r226);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r222.contentIsTemplate)("ngIfElse", _r229);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r222.item.icon !== "bare");
} }
function NotificationComponent_div_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function NotificationComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NotificationComponent_div_2_div_1_ng_container_1_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r234.item.html)("ngTemplateOutletContext", ctx_r234.item.context);
} }
function NotificationComponent_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 12);
} if (rf & 2) {
    const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r236.safeInputHtml, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function NotificationComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotificationComponent_div_2_div_4_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r240); const ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r239.onClickIcon($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("icon-hover", ctx_r237.clickIconToClose);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r237.safeSvg, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function NotificationComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NotificationComponent_div_2_div_1_Template, 2, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NotificationComponent_div_2_ng_template_2_Template, 1, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NotificationComponent_div_2_div_4_Template, 1, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r235 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r223.htmlIsTemplate)("ngIfElse", _r235);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r223.item.icon);
} }
const _c0 = function (a0) { return { "width": a0 }; };
function NotificationComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c0, ctx_r224.progressWidth + "%"));
} }
const _c1 = function (a0, a1, a2, a3, a4, a5, a6, a7) { return { "alert": a0, "error": a1, "warn": a2, "success": a3, "info": a4, "bare": a5, "rtl-mode": a6, "has-icon": a7 }; };
function SimpleNotificationsComponent_simple_notification_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "simple-notification", 2);
} if (rf & 2) {
    const a_r242 = ctx.$implicit;
    const i_r243 = ctx.index;
    const ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("item", a_r242)("timeOut", ctx_r241.timeOut)("clickToClose", ctx_r241.clickToClose)("clickIconToClose", ctx_r241.clickIconToClose)("maxLength", ctx_r241.maxLength)("showProgressBar", ctx_r241.showProgressBar)("pauseOnHover", ctx_r241.pauseOnHover)("theClass", ctx_r241.theClass)("rtl", ctx_r241.rtl)("animate", ctx_r241.animate)("position", i_r243);
} }
var NotificationAnimationType;
(function (NotificationAnimationType) {
    NotificationAnimationType["Fade"] = "fade";
    NotificationAnimationType["FromTop"] = "fromTop";
    NotificationAnimationType["FromRight"] = "fromRight";
    NotificationAnimationType["FromBottom"] = "fromBottom";
    NotificationAnimationType["FromLeft"] = "fromLeft";
    NotificationAnimationType["Scale"] = "scale";
    NotificationAnimationType["Rotate"] = "rotate";
})(NotificationAnimationType || (NotificationAnimationType = {}));

const DEFAULT_ICONS = {
    alert: `
        <svg class="simple-notification-svg" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
        </svg>
    `,
    error: `
        <svg class="simple-notification-svg" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
        </svg>
    `,
    info: `
        <svg class="simple-notification-svg" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/>
        </svg>
    `,
    success: `
        <svg class="simple-notification-svg" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
    `,
    warn: `
        <svg class="simple-notification-svg" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="64" viewBox="0 0 64 64" height="64">
          <circle cx="32.086" cy="50.142" r="2.256"/>
          <path d="M30.08 25.012V42.32c0 1.107.897 2.005 2.006 2.005s2.006-.897 2.006-2.005V25.012c0-1.107-.897-2.006-2.006-2.006s-2.006.898-2.006 2.006z"/>
          <path d="M63.766 59.234L33.856 3.082c-.697-1.308-2.844-1.308-3.54 0L.407 59.234c-.331.622-.312 1.372.051 1.975.362.605 1.015.975 1.72.975h59.816c.705 0 1.357-.369 1.721-.975.361-.603.381-1.353.051-1.975zM5.519 58.172L32.086 8.291l26.568 49.881H5.519z"/>
        </svg>
    `
};

var NotificationType;
(function (NotificationType) {
    NotificationType["Success"] = "success";
    NotificationType["Error"] = "error";
    NotificationType["Alert"] = "alert";
    NotificationType["Info"] = "info";
    NotificationType["Warn"] = "warn";
    NotificationType["Bare"] = "bare";
})(NotificationType || (NotificationType = {}));

class NotificationsService {
    constructor(globalOptions) {
        this.globalOptions = globalOptions;
        this.emitter = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.icons = DEFAULT_ICONS;
    }
    set(notification, to) {
        notification.id = notification.override && notification.override.id ?
            notification.override.id :
            Math.random().toString(36).substring(3);
        notification.click = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        notification.clickIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        notification.timeoutEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.emitter.next({ command: 'set', notification, add: to });
        return notification;
    }
    success(title = '', content = '', override, context) {
        return this.set({ title, content: content || '', type: NotificationType.Success, icon: this.icons.success, override, context }, true);
    }
    error(title = '', content = '', override, context) {
        return this.set({ title, content: content || '', type: NotificationType.Error, icon: this.icons.error, override, context }, true);
    }
    alert(title = '', content = '', override, context) {
        return this.set({ title, content: content || '', type: NotificationType.Alert, icon: this.icons.alert, override, context }, true);
    }
    info(title = '', content = '', override, context) {
        return this.set({ title, content: content || '', type: NotificationType.Info, icon: this.icons.info, override, context }, true);
    }
    warn(title = '', content = '', override, context) {
        return this.set({ title, content: content || '', type: NotificationType.Warn, icon: this.icons.warn, override, context }, true);
    }
    bare(title = '', content = '', override, context) {
        return this.set({ title, content: content || '', type: NotificationType.Bare, icon: 'bare', override, context }, true);
    }
    // With type method
    create(title = '', content = '', type = NotificationType.Success, override, context) {
        return this.set({ title, content, type, icon: this.icons[type], override, context }, true);
    }
    // HTML Notification method
    html(html, type = NotificationType.Success, override, icon = 'bare', context) {
        return this.set({ html, type, icon: this.icons[icon], override, context }, true);
    }
    // Remove all notifications method
    remove(id) {
        if (id) {
            this.emitter.next({ command: 'clean', id });
        }
        else {
            this.emitter.next({ command: 'cleanAll' });
        }
    }
}
NotificationsService.ɵfac = function NotificationsService_Factory(t) { return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"]('options')); };
NotificationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NotificationsService, factory: NotificationsService.ɵfac });
/** @nocollapse */
NotificationsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: ['options',] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NotificationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: ['options']
            }] }]; }, null); })();

class NotificationComponent {
    constructor(notificationService, domSanitizer, cd, zone) {
        this.notificationService = notificationService;
        this.domSanitizer = domSanitizer;
        this.cd = cd;
        this.zone = zone;
        this.titleIsTemplate = false;
        this.contentIsTemplate = false;
        this.htmlIsTemplate = false;
        this.progressWidth = 0;
        this.stopTime = false;
        this.framesPerSecond = 40;
        this.instance = () => {
            const now = new Date().getTime();
            if (this.endTime < now) {
                this.remove();
                this.item.timeoutEnd.emit();
            }
            else if (!this.stopTime) {
                if (this.showProgressBar) {
                    // We add this.sleepTime just to have 100% before close
                    this.progressWidth = Math.min((now - this.startTime + this.sleepTime) * 100 / this.timeOut, 100);
                }
                this.timer = setTimeout(this.instance, this.sleepTime);
            }
            this.zone.run(() => {
                if (!this.cd.destroyed) {
                    this.cd.detectChanges();
                }
            });
        };
    }
    ngOnInit() {
        if (this.item.override) {
            this.attachOverrides();
        }
        if (this.animate) {
            this.item.state = this.animate;
        }
        if (this.timeOut !== 0) {
            this.startTimeOut();
        }
        this.contentType(this.item.title, 'title');
        this.contentType(this.item.content, 'content');
        this.contentType(this.item.html, 'html');
        this.safeSvg = this.domSanitizer.bypassSecurityTrustHtml(this.icon || this.item.icon);
        this.safeInputHtml = this.domSanitizer.bypassSecurityTrustHtml(this.item.html);
    }
    ngOnDestroy() {
        clearTimeout(this.timer);
        this.cd.detach();
    }
    startTimeOut() {
        this.sleepTime = 1000 / this.framesPerSecond /* ms */;
        this.startTime = new Date().getTime();
        this.endTime = this.startTime + this.timeOut;
        this.zone.runOutsideAngular(() => this.timer = setTimeout(this.instance, this.sleepTime));
    }
    onEnter() {
        if (this.pauseOnHover) {
            this.stopTime = true;
            this.pauseStart = new Date().getTime();
        }
    }
    onLeave() {
        if (this.pauseOnHover) {
            this.stopTime = false;
            this.startTime += (new Date().getTime() - this.pauseStart);
            this.endTime += (new Date().getTime() - this.pauseStart);
            this.zone.runOutsideAngular(() => setTimeout(this.instance, this.sleepTime));
        }
    }
    onClick(event) {
        this.item.click.emit(event);
        if (this.clickToClose) {
            this.remove();
        }
    }
    onClickIcon(event) {
        this.item.clickIcon.emit(event);
        if (this.clickIconToClose) {
            this.remove();
        }
    }
    // Attach all the overrides
    attachOverrides() {
        Object.keys(this.item.override).forEach(a => {
            if (this.hasOwnProperty(a)) {
                this[a] = this.item.override[a];
            }
        });
    }
    remove() {
        if (this.animate) {
            this.item.state = this.animate + 'Out';
            setTimeout(() => {
                this.notificationService.set(this.item, false);
            }, 310);
        }
        else {
            this.notificationService.set(this.item, false);
        }
    }
    contentType(item, key) {
        if (item instanceof _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]) {
            this[key] = item;
        }
        else {
            this[key] = this.domSanitizer.bypassSecurityTrustHtml(item);
        }
        this[key + 'IsTemplate'] = item instanceof _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"];
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"])); };
NotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["simple-notification"]], inputs: { timeOut: "timeOut", showProgressBar: "showProgressBar", pauseOnHover: "pauseOnHover", clickToClose: "clickToClose", clickIconToClose: "clickIconToClose", maxLength: "maxLength", theClass: "theClass", rtl: "rtl", animate: "animate", position: "position", item: "item" }, decls: 4, vars: 16, consts: [[1, "simple-notification", 3, "ngClass", "click", "mouseenter", "mouseleave"], [4, "ngIf"], ["class", "sn-progress-loader", 4, "ngIf"], ["class", "sn-title", 4, "ngIf", "ngIfElse"], ["regularTitle", ""], ["class", "sn-content", 4, "ngIf", "ngIfElse"], ["regularContent", ""], ["class", "icon", 3, "innerHTML", 4, "ngIf"], [1, "sn-title"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "sn-title", 3, "innerHTML"], [1, "sn-content"], [1, "sn-content", 3, "innerHTML"], [1, "icon", 3, "innerHTML"], ["class", "sn-html", 4, "ngIf", "ngIfElse"], ["regularHtml", ""], ["class", "icon", 3, "icon-hover", "innerHTML", "click", 4, "ngIf"], [1, "sn-html"], [1, "icon", 3, "innerHTML", "click"], [1, "sn-progress-loader"], [3, "ngStyle"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotificationComponent_Template_div_click_0_listener($event) { return ctx.onClick($event); })("mouseenter", function NotificationComponent_Template_div_mouseenter_0_listener($event) { return ctx.onEnter(); })("mouseleave", function NotificationComponent_Template_div_mouseleave_0_listener($event) { return ctx.onLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NotificationComponent_div_1_Template, 8, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NotificationComponent_div_2_Template, 5, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, NotificationComponent_div_3_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.theClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@enterLeave", ctx.item.state)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction8"](7, _c1, ctx.item.type === "alert", ctx.item.type === "error", ctx.item.type === "warn", ctx.item.type === "success", ctx.item.type === "info", ctx.item.type === "bare", ctx.rtl, ctx.item.icon !== "bare"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.item.html);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.item.html);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showProgressBar);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".simple-notification{width:100%;padding:10px 20px;box-sizing:border-box;position:relative;float:left;margin-bottom:10px;color:#fff;cursor:pointer;transition:.5s;min-height:70px}.simple-notification .sn-content,.simple-notification .sn-html,.simple-notification .sn-title{margin:0}.simple-notification .sn-title{line-height:30px;font-size:20px}.simple-notification .sn-content{font-size:16px;line-height:20px}.simple-notification.has-icon .sn-content,.simple-notification.has-icon .sn-html,.simple-notification.has-icon .sn-title{padding:0 50px 0 0}.simple-notification .icon{position:absolute;box-sizing:border-box;top:0;right:0;width:70px;height:70px;padding:10px}.simple-notification .icon.icon-hover:hover{opacity:.5}.simple-notification .icon svg{fill:#fff;width:100%;height:100%}.simple-notification .icon svg g{fill:#fff}.simple-notification.rtl-mode.has-icon .sn-content,.simple-notification.rtl-mode.has-icon .sn-html,.simple-notification.rtl-mode.has-icon .sn-title{padding:0 0 0 50px}.simple-notification.rtl-mode{direction:rtl}.simple-notification.rtl-mode .sn-content{padding:0 0 0 50px}.simple-notification.rtl-mode svg{left:0;right:auto}.simple-notification.error{background:#f44336}.simple-notification.success{background:#8bc34a}.simple-notification.alert{background:#ffdb5b}.simple-notification.info{background:#03a9f4}.simple-notification.warn{background:#ffdb5b}.simple-notification .sn-progress-loader{position:absolute;top:0;left:0;width:100%;height:5px}.simple-notification .sn-progress-loader span{float:left;height:100%}.simple-notification.success .sn-progress-loader span{background:#689f38}.simple-notification.error .sn-progress-loader span{background:#d32f2f}.simple-notification.alert .sn-progress-loader span{background:#edc242}.simple-notification.info .sn-progress-loader span{background:#0288d1}.simple-notification.warn .sn-progress-loader span{background:#edc242}.simple-notification.bare .sn-progress-loader span{background:#ccc}.simple-notification.warn div .sn-content,.simple-notification.warn div .sn-html,.simple-notification.warn div .sn-title{color:#444}"], encapsulation: 2, data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('enterLeave', [
                // Fade
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fade', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('fade => fadeOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in-out')
                ]),
                // Enter from top
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fromTop', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fromTop', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-5%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fromTopOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(5%)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('fromTop => fromTopOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in-out')
                ]),
                // Enter from right
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fromRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fromRight', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(5%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fromRightOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-5%)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('fromRight => fromRightOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in-out')
                ]),
                // Enter from bottom
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fromBottom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fromBottom', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(5%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fromBottomOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-5%)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('fromBottom => fromBottomOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in-out')
                ]),
                // Enter from left
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fromLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fromLeft', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-5%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fromLeftOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(5%)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('fromLeft => fromLeftOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in-out')
                ]),
                // Rotate
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('scale', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => scale', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('scaleOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('scale => scaleOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
                ]),
                // Scale
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'rotate(0deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => rotate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'rotate(5deg)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('rotateOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'rotate(-5deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('rotate => rotateOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'rotate(0deg)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
                ])
            ])
        ] }, changeDetection: 0 });
/** @nocollapse */
NotificationComponent.ctorParameters = () => [
    { type: NotificationsService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }
];
NotificationComponent.propDecorators = {
    timeOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    showProgressBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    pauseOnHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    clickToClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    clickIconToClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    maxLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    theClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    rtl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    animate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'simple-notification',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('enterLeave', [
                        // Fade
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fade', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fade', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('fade => fadeOut', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in-out')
                        ]),
                        // Enter from top
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fromTop', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fromTop', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-5%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fromTopOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(5%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('fromTop => fromTopOut', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in-out')
                        ]),
                        // Enter from right
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fromRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fromRight', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(5%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fromRightOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-5%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('fromRight => fromRightOut', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in-out')
                        ]),
                        // Enter from bottom
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fromBottom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fromBottom', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(5%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fromBottomOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-5%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('fromBottom => fromBottomOut', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in-out')
                        ]),
                        // Enter from left
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fromLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fromLeft', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-5%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fromLeftOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(5%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('fromLeft => fromLeftOut', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in-out')
                        ]),
                        // Rotate
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('scale', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => scale', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('scaleOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('scale => scaleOut', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
                        ]),
                        // Scale
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'rotate(0deg)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => rotate', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'rotate(5deg)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('rotateOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'rotate(-5deg)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('rotate => rotateOut', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'rotate(0deg)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
                        ])
                    ])
                ],
                template: "<div class=\"simple-notification\"\r\n     [@enterLeave]=\"item.state\"\r\n     (click)=\"onClick($event)\"\r\n     [class]=\"theClass\"\r\n     [ngClass]=\"{\r\n            'alert': item.type === 'alert',\r\n            'error': item.type === 'error',\r\n            'warn': item.type === 'warn',\r\n            'success': item.type === 'success',\r\n            'info': item.type === 'info',\r\n            'bare': item.type === 'bare',\r\n            'rtl-mode': rtl,\r\n            'has-icon': item.icon !== 'bare'\r\n        }\"\r\n     (mouseenter)=\"onEnter()\"\r\n     (mouseleave)=\"onLeave()\">\r\n\r\n    <div *ngIf=\"!item.html\">\r\n\r\n        <div class=\"sn-title\" *ngIf=\"titleIsTemplate; else regularTitle\">\r\n            <ng-container *ngTemplateOutlet=\"title; context: item.context\"></ng-container>\r\n        </div>\r\n\r\n        <ng-template #regularTitle>\r\n            <div class=\"sn-title\" [innerHTML]=\"title\"></div>\r\n        </ng-template>\r\n\r\n        <div class=\"sn-content\" *ngIf=\"contentIsTemplate else regularContent\">\r\n            <ng-container *ngTemplateOutlet=\"content; context: item.context\"></ng-container>\r\n        </div>\r\n\r\n        <ng-template #regularContent>\r\n            <div class=\"sn-content\" [innerHTML]=\"content\"></div>\r\n        </ng-template>\r\n\r\n        <div class=\"icon\" *ngIf=\"item.icon !== 'bare'\" [innerHTML]=\"safeSvg\"></div>\r\n    </div>\r\n    <div *ngIf=\"item.html\">\r\n        <div class=\"sn-html\" *ngIf=\"htmlIsTemplate; else regularHtml\">\r\n            <ng-container *ngTemplateOutlet=\"item.html; context: item.context\"></ng-container>\r\n        </div>\r\n\r\n        <ng-template #regularHtml>\r\n            <div class=\"sn-content\" [innerHTML]=\"safeInputHtml\"></div>\r\n        </ng-template>\r\n\r\n        <div class=\"icon\" [class.icon-hover]=\"clickIconToClose\" *ngIf=\"item.icon\" [innerHTML]=\"safeSvg\" (click)=\"onClickIcon($event)\"></div>\r\n    </div>\r\n\r\n    <div class=\"sn-progress-loader\" *ngIf=\"showProgressBar\">\r\n        <span [ngStyle]=\"{'width': progressWidth + '%'}\"></span>\r\n    </div>\r\n\r\n</div>\r\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                styles: [".simple-notification{width:100%;padding:10px 20px;box-sizing:border-box;position:relative;float:left;margin-bottom:10px;color:#fff;cursor:pointer;transition:.5s;min-height:70px}.simple-notification .sn-content,.simple-notification .sn-html,.simple-notification .sn-title{margin:0}.simple-notification .sn-title{line-height:30px;font-size:20px}.simple-notification .sn-content{font-size:16px;line-height:20px}.simple-notification.has-icon .sn-content,.simple-notification.has-icon .sn-html,.simple-notification.has-icon .sn-title{padding:0 50px 0 0}.simple-notification .icon{position:absolute;box-sizing:border-box;top:0;right:0;width:70px;height:70px;padding:10px}.simple-notification .icon.icon-hover:hover{opacity:.5}.simple-notification .icon svg{fill:#fff;width:100%;height:100%}.simple-notification .icon svg g{fill:#fff}.simple-notification.rtl-mode.has-icon .sn-content,.simple-notification.rtl-mode.has-icon .sn-html,.simple-notification.rtl-mode.has-icon .sn-title{padding:0 0 0 50px}.simple-notification.rtl-mode{direction:rtl}.simple-notification.rtl-mode .sn-content{padding:0 0 0 50px}.simple-notification.rtl-mode svg{left:0;right:auto}.simple-notification.error{background:#f44336}.simple-notification.success{background:#8bc34a}.simple-notification.alert{background:#ffdb5b}.simple-notification.info{background:#03a9f4}.simple-notification.warn{background:#ffdb5b}.simple-notification .sn-progress-loader{position:absolute;top:0;left:0;width:100%;height:5px}.simple-notification .sn-progress-loader span{float:left;height:100%}.simple-notification.success .sn-progress-loader span{background:#689f38}.simple-notification.error .sn-progress-loader span{background:#d32f2f}.simple-notification.alert .sn-progress-loader span{background:#edc242}.simple-notification.info .sn-progress-loader span{background:#0288d1}.simple-notification.warn .sn-progress-loader span{background:#edc242}.simple-notification.bare .sn-progress-loader span{background:#ccc}.simple-notification.warn div .sn-content,.simple-notification.warn div .sn-html,.simple-notification.warn div .sn-title{color:#444}"]
            }]
    }], function () { return [{ type: NotificationsService }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }]; }, { timeOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], showProgressBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], pauseOnHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], clickToClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], clickIconToClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], maxLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], theClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], rtl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], animate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();

class SimpleNotificationsComponent {
    constructor(service, cd) {
        this.service = service;
        this.cd = cd;
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.destroy = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.notifications = [];
        this.position = ['bottom', 'right'];
        // Received values
        this.lastOnBottom = true;
        this.maxStack = 8;
        this.preventLastDuplicates = false;
        this.preventDuplicates = false;
        // Sent values
        this.timeOut = 0;
        this.maxLength = 0;
        this.clickToClose = true;
        this.clickIconToClose = false;
        this.showProgressBar = true;
        this.pauseOnHover = true;
        this.theClass = '';
        this.rtl = false;
        this.animate = NotificationAnimationType.FromRight;
        this.usingComponentOptions = false;
    }
    set options(opt) {
        this.usingComponentOptions = true;
        this.attachChanges(opt);
    }
    ngOnInit() {
        /**
         * Only attach global options if config
         * options were never sent through input
         */
        if (!this.usingComponentOptions) {
            this.attachChanges(this.service.globalOptions);
        }
        this.listener = this.service.emitter
            .subscribe(item => {
            switch (item.command) {
                case 'cleanAll':
                    this.notifications = [];
                    break;
                case 'clean':
                    this.cleanSingle(item.id);
                    break;
                case 'set':
                    if (item.add) {
                        this.add(item.notification);
                    }
                    else {
                        this.defaultBehavior(item);
                    }
                    break;
                default:
                    this.defaultBehavior(item);
                    break;
            }
            if (!this.cd.destroyed) {
                this.cd.detectChanges();
            }
        });
    }
    ngOnDestroy() {
        if (this.listener) {
            this.listener.unsubscribe();
        }
        this.cd.detach();
    }
    // Default behavior on event
    defaultBehavior(value) {
        this.notifications.splice(this.notifications.indexOf(value.notification), 1);
        this.destroy.emit(this.buildEmit(value.notification, false));
    }
    // Add the new notification to the notification array
    add(item) {
        item.createdOn = new Date();
        const toBlock = this.preventLastDuplicates || this.preventDuplicates ? this.block(item) : false;
        // Save this as the last created notification
        this.lastNotificationCreated = item;
        // Override icon if set
        if (item.override && item.override.icons && item.override.icons[item.type]) {
            item.icon = item.override.icons[item.type];
        }
        if (!toBlock) {
            // Check if the notification should be added at the start or the end of the array
            if (this.lastOnBottom) {
                if (this.notifications.length >= this.maxStack) {
                    this.notifications.splice(0, 1);
                }
                this.notifications.push(item);
            }
            else {
                if (this.notifications.length >= this.maxStack) {
                    this.notifications.splice(this.notifications.length - 1, 1);
                }
                this.notifications.splice(0, 0, item);
            }
            this.create.emit(this.buildEmit(item, true));
        }
    }
    // Check if notifications should be prevented
    block(item) {
        const toCheck = item.html ? this.checkHtml : this.checkStandard;
        if (this.preventDuplicates && this.notifications.length > 0) {
            for (const notification of this.notifications) {
                if (toCheck(notification, item)) {
                    return true;
                }
            }
        }
        if (this.preventLastDuplicates) {
            let comp;
            if (this.preventLastDuplicates === 'visible' && this.notifications.length > 0) {
                if (this.lastOnBottom) {
                    comp = this.notifications[this.notifications.length - 1];
                }
                else {
                    comp = this.notifications[0];
                }
            }
            else if (this.preventLastDuplicates === 'all' && this.lastNotificationCreated) {
                comp = this.lastNotificationCreated;
            }
            else {
                return false;
            }
            return toCheck(comp, item);
        }
        return false;
    }
    checkStandard(checker, item) {
        return checker.type === item.type && checker.title === item.title && checker.content === item.content;
    }
    checkHtml(checker, item) {
        return checker.html ?
            checker.type === item.type && checker.title === item.title && checker.content === item.content && checker.html === item.html :
            false;
    }
    // Attach all the changes received in the options object
    attachChanges(options) {
        for (const key in options) {
            if (this.hasOwnProperty(key)) {
                this[key] = options[key];
            }
            else if (key === 'icons') {
                this.service.icons = options[key];
            }
        }
    }
    buildEmit(notification, to) {
        const toEmit = {
            createdOn: notification.createdOn,
            type: notification.type,
            icon: notification.icon,
            id: notification.id
        };
        if (notification.html) {
            toEmit.html = notification.html;
        }
        else {
            toEmit.title = notification.title;
            toEmit.content = notification.content;
        }
        if (!to) {
            toEmit.destroyedOn = new Date();
        }
        return toEmit;
    }
    cleanSingle(id) {
        let indexOfDelete = 0;
        let doDelete = false;
        let noti;
        this.notifications.forEach((notification, idx) => {
            if (notification.id === id) {
                indexOfDelete = idx;
                noti = notification;
                doDelete = true;
            }
        });
        if (doDelete) {
            this.notifications.splice(indexOfDelete, 1);
            this.destroy.emit(this.buildEmit(noti, false));
        }
    }
}
SimpleNotificationsComponent.ɵfac = function SimpleNotificationsComponent_Factory(t) { return new (t || SimpleNotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"])); };
SimpleNotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SimpleNotificationsComponent, selectors: [["simple-notifications"]], inputs: { options: "options" }, outputs: { create: "create", destroy: "destroy" }, decls: 2, vars: 2, consts: [[1, "simple-notification-wrapper", 3, "ngClass"], [3, "item", "timeOut", "clickToClose", "clickIconToClose", "maxLength", "showProgressBar", "pauseOnHover", "theClass", "rtl", "animate", "position", 4, "ngFor", "ngForOf"], [3, "item", "timeOut", "clickToClose", "clickIconToClose", "maxLength", "showProgressBar", "pauseOnHover", "theClass", "rtl", "animate", "position"]], template: function SimpleNotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SimpleNotificationsComponent_simple_notification_1_Template, 1, 11, "simple-notification", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.position);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.notifications);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], NotificationComponent], styles: [".simple-notification-wrapper{position:fixed;width:300px;z-index:1000}.simple-notification-wrapper.left{left:20px}.simple-notification-wrapper.top{top:20px}.simple-notification-wrapper.right{right:20px}.simple-notification-wrapper.bottom{bottom:20px}.simple-notification-wrapper.center{left:50%;transform:translateX(-50%)}.simple-notification-wrapper.middle{top:50%;transform:translateY(-50%)}.simple-notification-wrapper.middle.center{transform:translate(-50%,-50%)}@media (max-width:340px){.simple-notification-wrapper{width:auto;left:20px;right:20px}}"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
SimpleNotificationsComponent.ctorParameters = () => [
    { type: NotificationsService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];
SimpleNotificationsComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    create: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    destroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](SimpleNotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'simple-notifications',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                template: "<div class=\"simple-notification-wrapper\" [ngClass]=\"position\">\r\n    <simple-notification\r\n            *ngFor=\"let a of notifications; let i = index\"\r\n            [item]=\"a\"\r\n            [timeOut]=\"timeOut\"\r\n            [clickToClose]=\"clickToClose\"\r\n            [clickIconToClose]=\"clickIconToClose\"\r\n            [maxLength]=\"maxLength\"\r\n            [showProgressBar]=\"showProgressBar\"\r\n            [pauseOnHover]=\"pauseOnHover\"\r\n            [theClass]=\"theClass\"\r\n            [rtl]=\"rtl\"\r\n            [animate]=\"animate\"\r\n            [position]=\"i\">\r\n    </simple-notification>\r\n</div>",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                styles: [".simple-notification-wrapper{position:fixed;width:300px;z-index:1000}.simple-notification-wrapper.left{left:20px}.simple-notification-wrapper.top{top:20px}.simple-notification-wrapper.right{right:20px}.simple-notification-wrapper.bottom{bottom:20px}.simple-notification-wrapper.center{left:50%;transform:translateX(-50%)}.simple-notification-wrapper.middle{top:50%;transform:translateY(-50%)}.simple-notification-wrapper.middle.center{transform:translate(-50%,-50%)}@media (max-width:340px){.simple-notification-wrapper{width:auto;left:20px;right:20px}}"]
            }]
    }], function () { return [{ type: NotificationsService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }]; }, { create: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], destroy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();

const DEFAULT_OPTIONS = {
    position: ['bottom', 'right'],
    timeOut: 0,
    showProgressBar: true,
    pauseOnHover: true,
    lastOnBottom: true,
    clickToClose: true,
    clickIconToClose: false,
    maxLength: 0,
    maxStack: 8,
    preventDuplicates: false,
    preventLastDuplicates: false,
    theClass: '',
    rtl: false,
    animate: NotificationAnimationType.FromRight,
    icons: DEFAULT_ICONS
};

const OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('options');
function optionsFactory(options) {
    return Object.assign({}, DEFAULT_OPTIONS, options);
}
class SimpleNotificationsModule {
    static forRoot(options = {}) {
        return {
            ngModule: SimpleNotificationsModule,
            providers: [
                NotificationsService,
                {
                    provide: OPTIONS,
                    useValue: options
                },
                {
                    provide: 'options',
                    useFactory: optionsFactory,
                    deps: [OPTIONS]
                }
            ]
        };
    }
}
SimpleNotificationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SimpleNotificationsModule });
SimpleNotificationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function SimpleNotificationsModule_Factory(t) { return new (t || SimpleNotificationsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SimpleNotificationsModule, { declarations: function () { return [SimpleNotificationsComponent,
        NotificationComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]; }, exports: function () { return [SimpleNotificationsComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](SimpleNotificationsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ],
                declarations: [
                    SimpleNotificationsComponent,
                    NotificationComponent
                ],
                exports: [SimpleNotificationsComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=angular2-notifications.js.map

/***/ })

}]);
//# sourceMappingURL=default~user-user-module~vien-vien-module-es2015.js.map